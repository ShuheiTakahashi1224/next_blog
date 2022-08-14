import { siteMeta } from 'lib/constans'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  const { siteLang } = siteMeta
  return (
    <Html lang={siteLang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
