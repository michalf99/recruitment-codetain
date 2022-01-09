import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  body {
    font-family: 'Roboto', sans-serif;
    height: 1000vh;
  }

  a {
    display: block;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }

`;
