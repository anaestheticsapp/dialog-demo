import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { DialogController, HTMLDialogElement } from 'controller/dialog';

import animations from 'css/animations';
import button from 'css/button';
import dialog from 'css/dialog';

export const delay = (ms: number) => new Promise((res) => setTimeout(() => res(true), ms));

const category = 'app-view';

@customElement(category)
export class AppView extends LitElement {
  private dialog = new DialogController(this);

  async dialogCallback() {
    return await delay(1000);
  }
  _onClick({ target }) {
    if (target.tagName !== 'BUTTON') return;
    const { id } = target.dataset;
    const dialog = this.shadowRoot.getElementById(id) as HTMLDialogElement;
    if (id === 'dynamic') {
      this.dialog.showModal(dialog, this.dialogCallback);
    } else {
      this.dialog.showModal(dialog);
    }
  }
  render() {
    return html`
      <main>
        <section class="demo" @click="${this._onClick}">
          <button data-id="confirm">Confirm Dialog</button>
          <button data-id="alert">Alert Dialog</button>
          <button data-id="dynamic">Dynamic Dialog</button>
          <button data-id="scrollable">Scrollable Dialog</button>
        </section>
        <dialog id="confirm">
          <form method="dialog">
            <header>
              <h1>Are you sure?</h1>
            </header>
            <article>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>
            <footer>
              <button value="no">No</button>
              <button value="yes">Yes</button>
            </footer>
          </form>
        </dialog>
        <dialog id="alert">
          <form method="dialog">
            <header>
              <h1>Alert</h1>
            </header>
            <article>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>
            <footer>
              <button value="close">Close</button>
            </footer>
          </form>
        </dialog>
        <dialog id="dynamic" ?disabled="${this.dialog.done === false}">
          <form method="dialog">
            <header>
              <h1>Dynamic Dialog</h1>
            </header>
            ${this.dialog.error
              ? html`<article>${this.dialog.error}</article>`
              : ''
            }
            ${this.dialog.done
              ? html`<article confirmed>Thank you for confirming</article>`
              : html`<article>Click the "confirm" button to show the next page after a 1 second delay.</article>`
            }
            <footer>
              <button value="cancel" autofocus>Close</button>
              <button value="next" ?disabled="${this.dialog.done === false}">Confirm</button>
            </footer>
          </form>
        </dialog>
        <dialog id="scrollable">
          <form method="dialog">
            <header>
              <svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg>
              <h1>Dialog With Scroll</h1>
            </header>
            <article>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
            <footer>
              <button value="close">Close</button>
              <button value="confirm">Confirm</button>
            </footer>
          </form>
        </dialog>
      </main>
    `;
  }
  static styles = [
    button,
    animations,
    dialog,
    css`
      main {
        padding: var(--space-xxl);
      }
      section,
      main {
        display: grid;
        place-content: center;
      }
      svg {
        width: 24px;
        fill: currentColor;
      }
      .demo button {
        margin: var(--space-s);
        padding: var(--space-xs);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    [category]: AppView;
  }
}


