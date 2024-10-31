// src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de"> {/* 독일어로 설정 */}
        <Head>
          <meta name="description" content="Entdecken Sie authentische koreanische Rezepte mit Zutaten, die Sie einfach zu Hause finden können." /> {/* 메타 설명 */}
          <meta name="keywords" content="Koreanische Rezepte, koreanisches Essen, traditionelle koreanische Küche" />
          <link rel="icon" href="/Logo.png" /> {/* 파비콘 설정 */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
