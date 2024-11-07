// src/pages/Page1.js
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Recipe.module.css';
import Disqus from '../components/Disqus'; // Disqus 컴포넌트 가져오기

const Page1 = () => {
  const article = {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.BASE_PATH}/Page1`, // 로컬 주소 설정
    id: '1',                             // 고유 ID
    title: 'Danpatbbang (단팥빵)',       // 페이지 제목
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Danpatbbang (단팥빵)</h1>
      <section className={styles.recipeSection}>
      <h2 className={styles.sectionTitle}>[Zutaten]</h2>
        <ul>
          <li>Weizenmehl (Typ 550) 200 g</li>
          <li>Trockenhefe 4 g</li>
          <li>Salz 3 g</li>
          <li>zucker 30 g</li>
          <li>Butter 30 g</li>
          <li>Ei (Größe S oder M) 1 Stück</li>
          <li>Milch 70 g</li>
          <li><a href="https://search.yahoo.com/search?fr=mcafee&type=E211KR885G0&p=Rote+Bohnenpaste" target="_blank" rel="noopener noreferrer">Rote Bohnenpaste (Anko) 320 g</a></li>
          </ul>

        <div className={styles.imageContainer}>
        <Image src="/coding1.jpg" alt="Danpatbbang, das mit Anko(Azuki-Bohnenpaste) gefüllt ist" width={500} height={500} />

        </div>
      <h2 className={styles.sectionTitle}>[Tipps zur Herstellung von Azuki-Bohnenpaste]</h2>
        <div className={styles.videoContainer}>
          <iframe 
            src="https://www.youtube.com/embed/A6VrDRL3qzQ" 
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className={styles.stepsSection}>
      <h2 className={styles.sectionTitle}>[Zubereitung]</h2>
        <ol>
          <li>In eine Schüssel lauwarme Milch und Ei geben, dann Weizenmehl, Zucker, Salz, Backpulver und Hefe abmessen und hinzufügen. Dabei das Ei verquirlen und etwas davon aufbewahren, bevor es in die Schüssel kommt.</li>
          <li>Sobald sich der Teig im Teigkneter zu einer Kugel formt, Butter hinzufügen und weiterkneten.</li>
          <li>Den Teig für die erste Gärung etwa 50 Minuten ruhen lassen.</li>
          <li>Währenddessen die Azuki-Bohnenpaste (Anko) in 40 g große Kugeln formen und bereitstellen.</li>
          <li>Nach der ersten Gärung den Teig durchkneten, um die Luft herauszulassen, und in 8 Stücke teilen. Den Teig mit Folie abdecken und etwa 10 Minuten für die Zwischenruhe ruhen lassen.</li>
          <li>Nach der Zwischenruhe den Teig flach ausrollen, die Bohnenpaste darauf legen und den Teig zu einer runden Form schließen.</li>
          <li>Den Teig flach drücken und mit einem Nudelholz in der Mitte kräftig drücken. Mit einer Schere sechs Schnitte in den Teig machen.</li>
          <li>Den Teig mit Abstand auf ein Backblech legen und für die zweite Gärung etwa 45 Minuten ruhen lassen.</li>
          <li>Nach der Gärung das zuvor aufbewahrte Ei mit etwas Wasser vermischen und den Teig damit bestreichen. Für die Dekoration können Sie Walnüsse, schwarze Sesamsamen oder andere Nüsse verwenden.</li>
          <li>Im vorgeheizten Ofen bei 190 Grad etwa 10 Minuten backen.</li>
          <li>Fertig sind die süßen Bohnenbrötchen (Danpatbbang)! Dort entstehen etwa 7-8 Brötchen.</li>
        </ol>
      </section>

      {/* Disqus 댓글 시스템 추가 */}
      <div className={styles.comments}>
        <Disqus article={article} />
      </div>
    </div>
  );
};

export default Page1;
