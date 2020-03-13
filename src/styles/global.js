import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }
  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
  }

  p, span {
    color: #202020;
  }

  a:link {
    text-decoration: none;
    color: #202020;
  }
`;

export default GlobalStyle;
