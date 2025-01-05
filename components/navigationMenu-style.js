import { css } from 'lit';

  export const style = css`
   nav {
      display: flex;
      justify-content: center;
      gap: 0.5em;
      text-align: center;
    }
    a {
      display: flex;
      align-items: center;
      font-size: 14px;
      text-decoration: none;
      color: #f60;
    }

    .material-symbols-outlined {
      font-size: 32px;
      font-weight: 700;
    }

    @media (max-width: 360px) {
      nav {
        flex-direction: column;
        align-items: flex-start;
      }
      a {
        margin: 0;
      }
    }
  `;
