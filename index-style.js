import { css } from 'lit';

  export const style = css`

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
    background: #fff;
  }

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    font-weight:700;
  }

  .logo img {
    height: 45px;
    max-width: 150px;
  }

  main {
    padding: 0 3em;
  }

  @media (max-width: 768px) {
    .logo img {
      max-width: 100px;
    }
    main {
      padding: 0 .5em;
    }
  }
  @media (max-width: 360px) {
    header {
      flex-direction: column;
      align-items: flex-start;
    }
    navigation-menu {
      width: 100%;
    }
  }
    
  `;
