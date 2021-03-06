import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    display: flex;
    flex: 1
  }

  body, button, input {
    font-family: 'Rubik', Arial, Helvetica, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }

  button, input[type="submit"], input[type="reset"], a {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  a {
    text-decoration: none
  }

  textarea, input { 
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  ::placeholder {
    color: #A6A6A6;
  }
  
    ::-webkit-scrollbar {
    overflow: visible;
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(210, 199, 214, 0.5);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #352D39;
    border-radius: 10px;
  }
`;

export default GlobalStyle;