import { css } from 'lit';

const button = css`
  button {
    padding: var(--space-xxs) var(--space-xs);
    margin: var(--space-xxs);
    border-radius: var(--space-xxs);
    border: 2px solid var(--surface3);

    color: inherit;
    background: var(--surface2);

    font-family: inherit;
    font-size: inherit;
    letter-spacing: 0.0125rem;
    text-align: center;

    cursor: pointer;
    -webkit-tap-highlight-color: hsl(0deg 0% 0% / 0%);
  }
  button svg-icon {
    pointer-events: none;
  }
  button:focus {
    outline: 2px solid var(--active);
    border: 2px solid var(--surface2);
  }
  button[disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
  button:hover {
    background: var(--surface3);
    transition: background-color 0.2s ease;
  }
  button:active {
    background: var(--surface4);
    transition: background-color 0.2s ease;
  }
`;
export default button;
