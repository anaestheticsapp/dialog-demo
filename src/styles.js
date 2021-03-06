const fonts = `
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Roboto-Light'),
        url('/assets/fonts/roboto-v27-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto-Regular'),
        url('/assets/fonts/roboto-v27-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Roboto Medium'),
        url('/assets/fonts/roboto-v27-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Roboto Bold'),
        url('/assets/fonts/roboto-v27-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local('Roboto Black'),
        url('/assets/fonts/roboto-v27-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }
`;
const colors = `
  --gray: 210deg;
  --gray-0: hsl(var(--gray) 17% 98%);
  --gray-1: hsl(var(--gray) 17% 95%);
  --gray-2: hsl(var(--gray) 16% 93%);
  --gray-3: hsl(var(--gray) 14% 89%);
  --gray-4: hsl(var(--gray) 14% 83%);
  --gray-5: hsl(var(--gray) 11% 71%);
  --gray-6: hsl(var(--gray) 7% 56%);
  --gray-7: hsl(var(--gray) 15% 35%);
  --gray-8: hsl(var(--gray) 9% 31%);
  --gray-9: hsl(var(--gray) 10% 23%);
  --gray-10: hsl(var(--gray) 11% 15%);
  --blue-0: hsl(205deg 100% 95%);
  --blue-1: hsl(206deg 100% 91%);
  --blue-2: hsl(206deg 100% 82%);
  --blue-3: hsl(206deg 96% 72%);
  --blue-4: hsl(207deg 91% 64%);
  --blue-5: hsl(207deg 86% 57%);
  --blue-6: hsl(208deg 80% 52%);
  --blue-7: hsl(208deg 77% 47%);
  --blue-8: hsl(209deg 77% 43%);
  --blue-9: hsl(209deg 75% 38%);
`;
const shadows = `
  --shadow-1: 0 1px 2px -1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%));
  --shadow-2:
    0 3px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 7px 14px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%));
  --shadow-3:
    0 -1px 3px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 1px 2px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 2px 5px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 4px 12px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 12px 15px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%));
  --shadow-4:
    0 -2px 5px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 1px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 2px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 9px 9px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 16px 16px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%));
  --shadow-5:
    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 2px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 10px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 20px 20px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 40px 40px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%));
  --shadow-6:
    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 3px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 7px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 12px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 22px 18px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 41px 33px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%)),
    0 100px 80px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%));
  --inner-shadow-0: inset 0 0 0 1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%));
  --inner-shadow-1: inset 0 1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%));
  --inner-shadow-2: inset 0 1px 4px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%));
  --inner-shadow-3: inset 0 2px 8px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%));
  --inner-shadow-4: inset 0 2px 14px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%));
`;
const animations = `
  --animation-slide-in-up: slide-in-up .3s var(--ease-3) forwards;
  --animation-scale-down: scale-down .25s var(--ease-squish-3) forwards;
  --animation-scale: scale 0.2s both;
  --animation-fade-in: fade-in 0.15s ease-in forwards;
`;
const ease = `
  --ease-1: cubic-bezier(.25, 0, .5, 1);
  --ease-2: cubic-bezier(.25, 0, .4, 1);
  --ease-3: cubic-bezier(.25, 0, .3, 1);
  --ease-4: cubic-bezier(.25, 0, .2, 1);
  --ease-5: cubic-bezier(.25, 0, .1, 1);
  --ease-in-1: cubic-bezier(.25, 0, 1, 1);
  --ease-in-2: cubic-bezier(.50, 0, 1, 1);
  --ease-in-3: cubic-bezier(.70, 0, 1, 1);
  --ease-in-4: cubic-bezier(.90, 0, 1, 1);
  --ease-in-5: cubic-bezier(1, 0, 1, 1);
  --ease-out-1: cubic-bezier(0, 0, .75, 1);
  --ease-out-2: cubic-bezier(0, 0, .50, 1);
  --ease-out-3: cubic-bezier(0, 0, .3, 1);
  --ease-out-4: cubic-bezier(0, 0, .1, 1);
  --ease-out-5: cubic-bezier(0, 0, 0, 1);
  --ease-in-out-1: cubic-bezier(.1, 0, .9, 1);
  --ease-in-out-2: cubic-bezier(.3, 0, .7, 1);
  --ease-in-out-3: cubic-bezier(.5, 0, .5, 1);
  --ease-in-out-4: cubic-bezier(.7, 0, .3, 1);
  --ease-in-out-5: cubic-bezier(.9, 0, .1, 1);
  --ease-elastic-1: cubic-bezier(.5, .75, .75, 1.25);
  --ease-elastic-2: cubic-bezier(.5, 1, .75, 1.25);
  --ease-elastic-3: cubic-bezier(.5, 1.25, .75, 1.25);
  --ease-elastic-4: cubic-bezier(.5, 1.5, .75, 1.25);
  --ease-elastic-5: cubic-bezier(.5, 1.75, .75, 1.25);
  --ease-squish-1: cubic-bezier(.5, -.1, .1, 1.5);
  --ease-squish-2: cubic-bezier(.5, -.3, .1, 1.5);
  --ease-squish-3: cubic-bezier(.5, -.5, .1, 1.5);
  --ease-squish-4: cubic-bezier(.5, -.7, .1, 1.5);
  --ease-squish-5: cubic-bezier(.5, -.9, .1, 1.5);
  --ease-step-1: steps(2);
  --ease-step-2: steps(3);
  --ease-step-3: steps(4);
  --ease-step-4: steps(7);
  --ease-step-5: steps(10);
`;
const styles = `${fonts}
  :root {
    ${colors}
    ${shadows}
    ${ease}
    ${animations}
    --space-xxs: .25rem;
    --space-xs: .5rem;
    --space-s: 1rem;
    --space-m: 1.5rem;
    --space-l: 2rem;
    --space-xl: 3rem;
    --space-xxl: 6rem;

    --hue: 205;
    --saturation: 100%;
    --lightness: 50%;

    --color-blue: #1a73e8;
    --color-orange: #ff9800;
    --color-purple: #3f51b5;
  }
  * {
    box-sizing: border-box;
    margin: 0;
  }
  *:not(:defined) {
    display: none;
  }
  html {
    --duration: 0.5s;
    --timing: ease;
  }
  html:has(dialog[open]) {
    overflow: hidden;
  }
  body, html {
    height: 100%;
    font: 16px/1.3 Roboto, system-ui, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background: var(--background1);
    color: var(--text1);
    overscroll-behavior: none;
  }
  app-view {
    display: none;
  }
  app-view.visible {
    display: block;
    transition: color var(--duration) var(--timing), background-color var(--duration) var(--timing);
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #19232a inset;
    -webkit-text-fill-color: #fff;
    transition: background-color 5000s ease-in-out 0s;
  }`;

export default styles;
