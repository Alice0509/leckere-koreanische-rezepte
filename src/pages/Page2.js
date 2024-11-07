// src/pages/Page2.js
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Recipe.module.css'; // 스타일 파일 가져오기
import Disqus from '../components/Disqus'; // Disqus 컴포넌트 가져오기

const Page2 = () => {
  const article = {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.BASE_PATH}/Page2`, // 로컬 주소 설정
    id: '2',                             // 고유 ID
    title: 'Soboro-Brot (소보로빵)',     // 페이지 제목
  };

  return (
    <div className={styles.pageContainer}> {/* 스타일 적용 */}
      <h1 className={styles.title}>Soboro-Brot (소보로빵)</h1> {/* 제목 스타일 적용 */}
      
      <section className={styles.recipeSection}>
      <h2 className={styles.sectionTitle}>[Zutaten für das Brot]</h2>
        <ul>
          <li>Weizenmehl (Typ 550) 200 g</li>
          <li>Trockenhefe 4 g</li>
          <li>Salz 3 g</li>
          <li>Zucker 30 g</li>
          <li>Butter 30 g</li>
          <li>Ei (Größe S oder M) 1 Stück</li>
          <li>Milch 70 g</li>
        </ul>
        
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <p>
            Während der ersten Gärung habe ich die Soboro-Kekse gemacht. 
            Es gibt eigentlich nichts zu tun, außer die Zutaten vorzubereiten und einfach zu mischen.
          </p>
        </div>

      
        <h2 className={styles.sectionTitle}>[Zutaten für die Soboro-Kekse]</h2>
          <ul>
            <li>Butter 50g</li>
            <li>Erdnussbutter 20g (Crunchy Erdnussbutter ist auch in Ordnung)</li>
            <li>Zucker 60g</li>
            <li>Zuerst die ersten drei Zutaten gut miteinander vermischen. Es ist hilfreich, die Butterzutaten vorher auf Zimmertemperatur zu bringen.</li>
            <li>Weizenmehl (Typ 550) 80g</li>
            <li>Mandelmehl 20g</li>
            <li>Backpulver 2g</li>
            <li>Salz 1g</li>
            <li>Honig 10g</li> 
          </ul>

        <p>
          Alles gut vermischen, um den Keksteig zu formen.
        </p>

        <div className={styles.imageContainer}>
        <Image src="/coding2.jpeg" alt="Soboro-Brot" width={500} height={500} />

        </div>
        
        <section className={styles.stepsSection}>
        <h2 className={styles.sectionTitle}>[Zubereitung]</h2>
          <ol>
            <li>Den Teig für das Brot in einer Schüssel mit lauwarmer Milch, Ei, Mehl, Zucker, Salz, Backpulver und Hefe vermischen. </li>
            <li>Den Teig in einer Teigmaschine kneten. Sobald er zusammenkommt, Butter hinzufügen und weiterkneten, bis er glatt ist.</li>
            <li>Den Teig abgedeckt etwa 50 Minuten an einem warmen Ort gehen lassen.</li>
            <li>In der Zwischenzeit die Soboro-Keksmischung vorbereiten.</li>
            <li>Nach der ersten Gärung den Teig entgasen und in 8 Stücke teilen. Diese abgedeckt etwa 10 Minuten ruhen lassen.</li>
            <li>Die Teigstücke flach ausrollen und mit den Händen leicht zusammendrücken.</li>
            <li>Die Soboro-Mischung auf den Brotteig geben und leicht in die Mitte drücken.</li>
            <li>Den Teig auf ein Backblech legen und nochmals 45 Minuten gehen lassen.</li>
            <li>Den Ofen auf 190 Grad vorheizen und die Brote etwa 10 Minuten backen.</li>
            <li>Soboro-Brot ist fertig!</li>
          </ol>
        </section>

        {/* Disqus 댓글 시스템 추가 */}
        <div className={styles.comments}>
          <Disqus article={article} />
        </div>
      </section>
    </div>
  );
};

export default Page2;
