import { ReactiveController, ReactiveControllerHost } from 'lit';

const EVENT = {
  CLICK: 'click',
  CANCEL_DIALOG: 'cancel',
  SUBMIT_FORM: 'submit',
  OPEN_DIALOG: 'open',
  CLOSE_DIALOG: 'close',
}
const ANIMATION = {
  SCALE: 'scale',
  SLIDE_IN_UP: 'slide-in-up',
  SCALE_DOWN: 'scale-down',
}
const ELEMENT = {
  DIALOG: 'dialog',
  FORM: 'form',
  BUTTON: 'button',
}
const STYLE = 'style';
const BACKDROP_CLASS = 'backdrop';
const POLYFILL_CLASS = 'polyfill';
const CALLBACK_BUTTON = 'next';

function animate(el: HTMLElement, className: string) {
  return new Promise((res) => {
    try {
      el.classList.add(className);
      el.addEventListener(
        'animationend',
        ({ target }) => {
          (target as HTMLElement).classList.remove(className);
          return res(null);
        },
        { once: true }
      );
    } catch (err) {
      console.error(err);
      res(null);
    }
  })
}

function toggleVerticalScrollBar(el: HTMLElement = document.body) {
  if (el.hasAttribute(STYLE)) {
    el.removeAttribute(STYLE);
  } else {
    const hasVerticalScrollbar = el.scrollHeight > document.documentElement.clientHeight;
    if (hasVerticalScrollbar) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth + 'px';
      el.style.marginRight = scrollbarWidth;
      el.style.overflow = 'hidden';
    }
  }
}

export interface HTMLDialogElement extends HTMLElement {
  showModal: () => void;
  close: () => void;
  returnValue: string;
}
interface DialogEvent extends Event {
  target: HTMLDialogElement;
}
export class DialogController implements ReactiveController {
  host: ReactiveControllerHost & HTMLElement;
  private _callback: () => Promise<void>;

  private _formHeight: number = 0;
  private _done: boolean;
  public error: string;
  private _ro: ResizeObserver;

  private _polyfill: HTMLDialogElement;

  get done() {
    return this._done;
  }
  set done(value) {
    this._done = value;
    this.host.requestUpdate();
  }

  constructor(host: ReactiveControllerHost & HTMLElement) {
    this.host = host;
    host.addController(this);

    this._onClick = this._onClick.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._onCancel = this._onCancel.bind(this);
    this._onClosed = this._onClosed.bind(this);
  }

  private _observeFormElement(entries: ResizeObserverEntry[]) {
    for (let entry of entries) {
      const form = entry.target as HTMLFormElement;

      const { height } = entry.contentRect;
      if (height > this._formHeight) {
        this._formHeight = height;
        form.style.minHeight = `${height}px`;
      } else if (height === 0) {
        this._formHeight = 0;
        form.removeAttribute(STYLE);
      }
    }
  }
  async hostConnected() {
    this._ro = new ResizeObserver((entries) => this._observeFormElement(entries));
    await this.host.updateComplete;
    const dialogForms = this.host.shadowRoot.querySelectorAll('dialog form');
    dialogForms.forEach((el) => this._ro.observe(el))
  }
  hostDisconnected() {
    this._ro.disconnect();
  }

  private _handlePolyfill(state: string) {
    const dialog = this._polyfill;

    switch (state) {
      case EVENT.OPEN_DIALOG:
        return dialog.classList.add(POLYFILL_CLASS);
      case EVENT.CLOSE_DIALOG:
        dialog.dispatchEvent(new Event(EVENT.CLOSE_DIALOG));
        return dialog.classList.remove(POLYFILL_CLASS);
    }
  }

  private async _handleButtonClick(e: Event) {
    const btn = e.target as HTMLButtonElement;
    const dialog = btn.closest(ELEMENT.DIALOG) as HTMLDialogElement;
    if (dialog === null) {
      return;
    } else if (btn.value === CALLBACK_BUTTON) {
      try {
        e.preventDefault();
        this.done = false;
        await this._callback();
        this.done = true;
        (btn.previousElementSibling as HTMLButtonElement).focus();
      } catch (err) {
        console.error(err);
        this.error = err.message;
        this.done = undefined;
      }
    } else if (btn.type === 'button') {
      dialog.dispatchEvent(new Event('cancel'));
    } else if (this._polyfill) {
      this._polyfill.returnValue = btn.value
      const form = this._polyfill.querySelector('form');
      form.submit();
    }
  }
  private _onClick(e: Event) {
    const el = e.target as HTMLElement;
    const tagName = el.tagName.toLowerCase();
    if (tagName === ELEMENT.DIALOG) {
      animate(el, ANIMATION.SCALE);
      //this.close();
    } else if (tagName === ELEMENT.BUTTON) {
      this._handleButtonClick(e);
    }
  }

  private _onOpening({ target: dialog }) {
    dialog.showModal();
    dialog.classList.add(BACKDROP_CLASS);
    animate(dialog, ANIMATION.SLIDE_IN_UP);
    toggleVerticalScrollBar();
  }
  private _onSubmit(e: SubmitEvent) {
    e.preventDefault();
    e.stopPropagation();
    const form = e.target as HTMLElement;
    const dialog = form.closest(ELEMENT.DIALOG) as HTMLDialogElement;
    this._onClosing(dialog);
  }
  private _onCancel(e: DialogEvent) {
    e.preventDefault();
    const form = e.target.querySelector('form');
    if (form) form.reset();

    this._onClosing(e.target);
  }
  private async _onClosing(dialog: HTMLDialogElement) {
    dialog.classList.remove(BACKDROP_CLASS);
    await animate(dialog, ANIMATION.SCALE_DOWN);
    dialog.close();
  }
  private _onClosed({ target: dialog }) {
    dialog.removeEventListener(EVENT.SUBMIT_FORM, this._onSubmit);
    dialog.removeEventListener(EVENT.CANCEL_DIALOG, this._onCancel);
    dialog.removeEventListener(EVENT.CLICK, this._onClick);
    dialog.removeAttribute(STYLE);

    toggleVerticalScrollBar();

    if (this.error) this.error = undefined;
    if (this.done) this.done = undefined;
    if (this._polyfill) this._handlePolyfill('close');
  }

  public showModal(dialog: HTMLDialogElement, callback = undefined) {
    if (dialog?.tagName?.toLowerCase() !== ELEMENT.DIALOG) return console.error('not a dialog element', dialog);

    this._callback = callback;

    if (typeof dialog.showModal !== 'function') {
      this._polyfill = dialog as HTMLDialogElement;
      this._polyfill.showModal = () => this._handlePolyfill(EVENT.OPEN_DIALOG);
      this._polyfill.close = () => this._handlePolyfill(EVENT.CLOSE_DIALOG);
    }

    dialog.addEventListener(EVENT.CLICK, this._onClick);
    dialog.addEventListener(EVENT.OPEN_DIALOG, this._onOpening, { once: true });
    dialog.addEventListener(EVENT.SUBMIT_FORM, this._onSubmit);
    dialog.addEventListener(EVENT.CANCEL_DIALOG, this._onCancel);
    dialog.addEventListener(EVENT.CLOSE_DIALOG, this._onClosed, { once: true });
    dialog.dispatchEvent(new Event(EVENT.OPEN_DIALOG));
  }
  /**
   * Manually close dialog (when no form or buttons are used)
   */
  public closeModal(dialog: HTMLDialogElement) {
    this._onClosing(dialog);
  }
}