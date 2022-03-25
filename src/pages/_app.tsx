import React from 'react';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import GlobalSyled from "../styles/globals"
import theme from '../styles/theme'

<script src="https://privacyflow.development.tec.br/api/v1/cookie_bars/token/623cba7cdb24e5001ea191dc" async></script>
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalSyled/>
    </ThemeProvider>
    )
}

export default MyApp
