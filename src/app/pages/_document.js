// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add your external script */}
          <script data-host="https://web.appbox.cfd" data-dnt="false" src="https://web.appbox.cfd/js/script.js" id="ZwSg9rf6GA" async defer></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
