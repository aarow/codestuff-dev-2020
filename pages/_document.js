import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="text-white bg-gray-900	">
        <Head >
          <link rel="stylesheet" href="https://use.typekit.net/epn0chw.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
