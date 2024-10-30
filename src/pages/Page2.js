// src/pages/Page2.js
import React from 'react';
import styles from '../styles/Recipe.module.css'; // 스타일 파일 가져오기
import { DiscussionEmbed } from 'disqus-react'; // DiscussionEmbed 가져오기

const Page2 = () => {
  const article = {
    url: 'http://localhost:3000/Page2', // 로컬 주소 설정
    id: '2',                             // 고유 ID
    title: 'Soboro-Brot (소보로빵)',     // 페이지 제목
  };

  return (
    <div className={styles.pageContainer}> {/* 스타일 적용 */}
      <h1 className={styles.title}>Soboro-Brot (소보로빵)</h1> {/* 제목 스타일 적용 */}
      
      <p>
        <strong>[Zutaten für das Brot]</strong><br />
        Weizenmehl (Typ 550) 200 g<br />
        Trockenhefe 4 g<br />
        Salz 3 g<br />
        Zucker 30 g<br />
        Butter 30 g<br />
        Ei (Größe S oder M) 1 Stück<br />
        Milch 70 g
      </p>
      
      <div style={{ textAlign: 'center' }}>
        <p>
          Während der ersten Gärung habe ich die Soboro-Kekse gemacht. 
          Es gibt eigentlich nichts zu tun, außer die Zutaten vorzubereiten und einfach zu mischen.
        </p>
      </div>

      <p>
        <strong>[Zutaten für die Soboro-Kekse]</strong><br />
        Weizenmehl 120 g<br />
        Maismehl 35 g<br />
        Backpulver 2 g<br />
        Magermilchpulver 9 g<br />
        Natron 1 g<br />
        Alle trockenen Zutaten miteinander vermischen.<br />
        Butter 60 g<br />
        Erdnussbutter 40 g<br />
        Zucker 60 g<br />
        Maissirup 5 g<br />
        Eine Prise Salz<br />
        1 Eigelb
      </p>

      <p>
        Alles gut vermischen, um den Keksteig zu formen.
      </p>

      <div style={{ textAlign: 'center' }}>
        <img width="100%" src="/coding2.jpeg" alt="Soboro-Brot" />
      </div>

      <p><strong>[Zubereitung]</strong></p>
      <ol>
        <li>Den Teig für das Brot in einer Schüssel mit lauwarmer Milch, Ei, Mehl, Zucker, Salz, Backpulver und Hefe vermischen. Das Ei leicht aufschlagen und etwas davon beiseitestellen.</li>
        <li>Den Teig in einer Teigmaschine kneten. Sobald er zusammenkommt, Butter hinzufügen und weiterkneten, bis er glatt ist.</li>
        <li>Den Teig abgedeckt etwa 50 Minuten an einem warmen Ort gehen lassen.</li>
        <li>In der Zwischenzeit die Soboro-Keksmischung vorbereiten.</li>
        <li>Nach der ersten Gärung den Teig entgasen und in 8 Stücke teilen. Diese abgedeckt etwa 10 Minuten ruhen lassen.</li>
        <li>Die Teigstücke flach ausrollen und mit den Händen leicht zusammendrücken.</li>
        <li>Die Soboro-Mischung auf den Brotteig geben und leicht in die Mitte drücken.</li>
        <li>Den Teig auf ein Backblech legen und nochmals 45 Minuten gehen lassen.</li>
        <li>Das zurückbehaltene Ei mit etwas Wasser mischen und auf den Teig streichen.</li>
        <li>Den Ofen auf 190 Grad vorheizen und die Brote etwa 10 Minuten backen.</li>
        <li>Soboro-Brot ist fertig!</li>
      </ol>

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

export default Page2;
