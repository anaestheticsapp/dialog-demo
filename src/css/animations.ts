import { css } from 'lit';

const animations = css`
  @keyframes fade-in-opacity {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fade-in {
    100% {
      background: rgb(0 0 0 / 0.6);
    }
  }
  @keyframes slide-in-up {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
  }
  @keyframes scale-down {
    to {
      transform: scale(.75);
      opacity: 0;
    }
  }
  @keyframes scale {
    0% { transform: scale(1); }
    35% { transform: scale(0.98); }
    100% { transform: scale(1); }
  }
  @keyframes shake {
    from, to { transform: translate3d(0, 0, 0); }
    10%, 30%, 50%, 70%, 90% { transform: translate3d(-10px, 0, 0); }
    20%, 40%, 60%, 80% { transform: translate3d(10px, 0, 0); }
  }
`;

export default animations;
