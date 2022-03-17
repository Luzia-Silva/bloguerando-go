import React from 'react';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx:DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }

  }
  render(){
      return(
        <Html lang="pt">
          <Head>
          <meta charSet="utf-8" />
          <link href="//db.onlinewebfonts.com/c/0033a2fbc0329740fb86c1cfd134cb94?family=Roboto" rel="stylesheet" type="text/css"/>
          </Head>
          <body>
            <Main/>
            <NextScript/>
          </body>
        </Html>
      );
    }
}
