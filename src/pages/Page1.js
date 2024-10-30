// src/pages/Page1.js
import React from 'react';
import styles from '../styles/Recipe.module.css';
import { DiscussionEmbed } from 'disqus-react'; // DiscussionEmbed 가져오기

const Page1 = () => {
  const article = {
    url: 'http://localhost:3000/Page1', // 로컬 주소 설정
    id: '1',                             // 고유 ID
    title: 'Danpatbbang (단팥빵)',       // 페이지 제목
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Danpatbbang (단팥빵)</h1>
      <section className={styles.recipeSection}>
        <p><strong>[Zutaten]</strong><br />
          Weizenmehl (Typ 550) 200 g<br />
          Trockenhefe 4 g<br />
          Salz 3 g<br />
          Zucker 30 g<br />
          Butter 30 g<br />
          Ei (Größe S oder M) 1 Stück<br />
          Milch 70 g<br />
          <a href="https://search.yahoo.com/search?fr=mcafee&type=E211KR885G0&p=Rote+Bohnenpaste">Rote Bohnenpaste (Anko) 320 g</a>
        </p>
        <div className={styles.imageContainer}>
          <img width="100%" src="/coding1.jpg" alt="Rotes Bohnenbrot, das mit Anko gefüllt ist" />
        </div>

        <div className={styles.videoContainer}>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/A6VrDRL3qzQ" 
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className={styles.stepsSection}>
        <p><strong>[Zubereitung]</strong></p>
        <ol>
          <li>In eine Schüssel lauwarme Milch und Ei geben, dann Weizenmehl, Zucker, Salz, Backpulver und Hefe abmessen und hinzufügen. Dabei das Ei verquirlen und etwas davon aufbewahren, bevor es in die Schüssel kommt.</li>
          <li>Sobald sich der Teig im Teigkneter zu einer Kugel formt, Butter hinzufügen und weiterkneten.</li>
          <li>Den Teig für die erste Gärung etwa 50 Minuten ruhen lassen.</li>
          <li>Währenddessen die Rote Bohnenpaste (Anko) in 40 g große Kugeln formen und bereitstellen.</li>
          <li>Nach der ersten Gärung den Teig durchkneten, um die Luft herauszulassen, und in 8 Stücke teilen. Den Teig mit Folie abdecken und etwa 10 Minuten für die Zwischenruhe ruhen lassen.</li>
          <li>Nach der Zwischenruhe den Teig flach ausrollen, die Bohnenpaste darauf legen und den Teig zu einer runden Form schließen.</li>
          <li>Den Teig flach drücken und mit einem Nudelholz in der Mitte kräftig drücken. Mit einer Schere sechs Schnitte in den Teig machen.</li>
          <li>Den Teig mit Abstand auf ein Backblech legen und für die zweite Gärung etwa 45 Minuten ruhen lassen.</li>
          <li>Nach der Gärung das zuvor aufbewahrte Ei mit etwas Wasser vermischen und den Teig damit bestreichen. Für die Dekoration können Sie Walnüsse, schwarze Sesamsamen oder andere Nüsse verwenden.</li>
          <li>Im vorgeheizten Ofen bei 190 Grad etwa 10 Minuten backen.</li>
          <li>Fertig sind die süßen Bohnenbrötchen (Danpatbbang)! Dort entstehen etwa 7-8 Brötchen.</li>
        </ol>
      </section>

      {/* Disqus 댓글 시스템 */}
      <DiscussionEmbed
        shortname="my-korean-food-site" // Disqus shortname
        config={{
          url: article.url,
          identifier: article.id,
          title: article.title,
          language: 'de_DE' // 사용 언어
        }}
      />
    </div>
  );
};

export default Page1;
