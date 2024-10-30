import React from 'react';
import { useRouter } from 'next/router';
import { DiscussionEmbed } from 'disqus-react'; // DiscussionEmbed 가져오기
import styles from '../../styles/Recipe.module.css'; // 스타일 파일 가져오기

const RecipePage = ({ recipe }) => {
  const router = useRouter();

  // 데이터가 없는 경우 로딩 상태나 에러 메시지 표시
  if (!recipe) {
    return (
      <div className={styles.pageContainer}>
        <p>Rezept wird vorbereitet.</p> {/* 독일어로 "레시피 준비 중입니다." */}
      </div>
    );
  }

  // 재료 또는 조리법이 비어있는 경우
  if (!recipe.ingredients || recipe.ingredients.length === 0 || 
      !recipe.instructions || recipe.instructions.length === 0) {
    return (
      <div className={styles.pageContainer}>
        <p>Rezept wird vorbereitet.</p> {/* 독일어로 "레시피 준비 중입니다." */}
      </div>
    );
  }

  // Disqus에 전달할 article 정보 생성
  const article = {
    url: `http://localhost:3000/recipes/${recipe.id}`, // 실제 URL로 대체하세요
    id: recipe.id,
    title: recipe.name,
  };

  return (
    <div className={styles.pageContainer}> 
      <h1 className={styles.title}>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <h2>Zutaten:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
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

export default RecipePage;

// 정적 페이지 생성에 필요한 함수
export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/data/menuItems.json');
  const menuItems = await res.json();

  const paths = menuItems.map((item) => ({
    params: { id: item.id.toString() }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch('http://localhost:3000/data/menuItems.json');
  const menuItems = await res.json();

  const recipe = menuItems.find((item) => item.id === parseInt(params.id));

  return {
    props: {
      recipe: recipe || null,
    }
  };
}
