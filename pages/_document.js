import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <Footer />
          <div id="fb-root"></div>
          <script src="js/fb.js"></script>
          {/* Your Chat Plugin code */}

          <div className="fb-customerchat"
            attribution="setup_tool"
            page_id="98549204694">
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument