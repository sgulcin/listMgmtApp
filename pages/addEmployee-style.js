import { css } from 'lit';

export const style = css`
    form {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      margin: 20px auto 0;
      padding: 20px;
      background: #fff;
      border-radius: 5px;
    }
    label {
      margin-top: 1em;
    }
    label span{
      display:inline-block;  
      width:40%;
    }
    input, select {
      width: 53%;
      padding: 0.5em;
      margin-top: 0.5em;
    }
    button {
      margin-top: 2em;
      padding: 0.5em;
      height: 36px;
      border: 1px solid #f60;
      border-radius:5px;
      color: #f60;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      form {
        width: 100%;
        padding: 1em;
      }
      label {
        margin-top: 0.5em;
      }
      input, select {
        padding: 0.5em;
        margin-top: 0.5em;
      }
      button {
        margin-top: 1em;
        padding: 0.5em;
      }
    }
  `;
