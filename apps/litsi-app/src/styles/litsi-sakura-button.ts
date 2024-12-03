import { css } from "lit";

export const litsiSakuraButtonStyle =
  css`
  input, textarea {
    border: 1px solid #222222;
  }
  input:focus, textarea:focus {
    border: 1px solid #007559;
  }

  textarea {
    width: 100%;
  }

  .button, button, input[type=submit], input[type=reset], input[type=button], input[type=file]::file-selector-button {
    display: inline-block;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    background-color: #007559;
    color: #ffffff;
    border-radius: 5px;
    border: 1px solid #007559;
    cursor: pointer;
    box-sizing: border-box;
  }
  .button[disabled], button[disabled], input[type=submit][disabled], input[type=reset][disabled], input[type=button][disabled], input[type=file]::file-selector-button[disabled] {
    cursor: default;
    opacity: 0.5;
  }
  .button:hover, button:hover, input[type=submit]:hover, input[type=reset]:hover, input[type=button]:hover, input[type=file]::file-selector-button:hover {
    background-color: #006994;
    color: #ffffff;
    outline: 0;
  }
  .button:focus-visible, button:focus-visible, input[type=submit]:focus-visible, input[type=reset]:focus-visible, input[type=button]:focus-visible, input[type=file]::file-selector-button:focus-visible {
    outline-style: solid;
    outline-width: 2px;
  }
  `
