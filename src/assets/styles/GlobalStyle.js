import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  a {
    display: block;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }

  button {
    padding: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fontSizes.desktop.l};
    border: none;
    cursor: pointer;
  }

`;
