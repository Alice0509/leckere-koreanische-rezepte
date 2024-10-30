// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="de"> {/* 독일어로 설정 */}
      <Head>
        <title>Koreanische Rezepte - Rezepte für die Seele</title> {/* 독일어로 제목 설정 */}
        <meta name="description" content="Entdecken Sie authentische koreanische Rezepte mit Zutaten, die Sie einfach zu Hause finden können." /> {/* 메타 설명 */}
        <meta name="keywords" content="Koreanische Rezepte, koreanisches Essen, traditionelle koreanische Küche" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
