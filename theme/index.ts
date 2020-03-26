import { DefaultTheme } from 'styled-components';
import { createGlobalStyle } from './styled-components';

export interface ITheme extends DefaultTheme {
  foreground: string;
  background: string;
}

export const lightTheme = {
  background: '#eee',
  foreground: '#222'
}

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 100%;
  }
  body {
    color: ${p => p.theme.foreground};
    background: ${p => p.theme.background};
    font-family: "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 100;
    line-height: 1.65;
    font-size: 12px;
  }

  p {margin-bottom: 1.15rem;}

  h1, h2, h3, h4, h5 {
    margin: 2.75rem 0 1.05rem;
    font-weight: 600;
    line-height: 1.15;
  }

  h1 {
    margin-top: 0;
    font-size: 5.653em;
  }

  h2 {font-size: 3.998em;}

  h3 {font-size: 2.827em;}

  h4 {font-size: 1.999em;}

  h5 {font-size: 1.414em;}
`;
