import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import GlobalSyled from "../styles/globals"
import theme from '../styles/theme'

{/*// @ts-ignore*/}
function  MyApp({ Component, pageProps } : AppProps) {
  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      {/*// @ts-ignore*/}
        <Component {...pageProps} />
      {/*// @ts-ignore*/}
        <GlobalSyled/>
      </ThemeProvider>

    )
}

export default MyApp
