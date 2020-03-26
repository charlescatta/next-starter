import { AppProps } from 'next/app';
import { ThemeProvider } from '../theme/styled-components';
import { lightTheme, GlobalStyles } from '../theme';
import '../theme/fonts/stylesheet.css'


export default ({ Component, pageProps }: AppProps) => { 
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
 };
