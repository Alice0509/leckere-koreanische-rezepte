// src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de"> {/* 독일어로 설정 */}
        <Head>
          <meta name="description" content="Entdecken Sie authentische koreanische Rezepte mit Zutaten, die Sie einfach zu Hause finden können." /> {/* 메타 설명 */}
          <meta name="keywords" content="Koreanische Rezepte, koreanisches Essen, traditionelle koreanische Küche" />
          <meta name="author" content="Joan" /> {/* 작성자 정보 */}
          <link rel="icon" href="/Logo.png" /> {/* 파비콘 설정 */}
          <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* 뷰포트 설정 추가 */}
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
