import { css } from 'lit';

const dialog = css`
  dialog {
    min-inline-size: min(50vw, 35ch);
    max-inline-size: min(90vw, 60ch);

    padding: 0;
    border: 1px solid var(--surface3);
    border-radius: var(--space-xs);

    background: var(--surface2);
    color: var(--text1);
    box-shadow: var(--shadow-6);

    user-select: none;
  }
  dialog.slide-in-up {
    animation: var(--animation-slide-in-up);
  }
  dialog.scale-down {
    animation: var(--animation-scale-down);
  }
  dialog.scale {
    animation: var(--animation-scale);
  }
  dialog[disabled] {
    color: var(--text2);
  }
  dialog.backdrop::backdrop {
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);

    background: rgb(0 0 0 / 0.3);
    animation: fade-in-opacity 0.3s;
  }

  dialog form {
    display: grid;
    grid-template-rows: auto 1fr auto;
    max-block-size: 65vh;
  }

  dialog header, dialog footer {
    padding: var(--space-s);
  }
  dialog header {
    display: flex;
    gap: var(--space-s);
    align-items: center;
  }
  dialog h1 {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0;
  }
  details,
  dialog article {
    padding: 0 var(--space-s);
    overflow-y: auto;
  }
  dialog footer {
    text-align: right;
  }
  dialog footer button {
    min-width: 80px;
  }
  dialog article[confirmed] + footer button[value="next"] {
    display: none;
  }
`;
export default dialog;
