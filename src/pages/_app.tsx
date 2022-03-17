import React from 'react';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import GlobalSyled from "../styles/globals"
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalSyled/>
    </ThemeProvider>
    )
}

export default MyApp
