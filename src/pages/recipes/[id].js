// src/pages/recipes/[id].js
import React from 'react';
import styles from '../../styles/Recipe.module.css';
import Disqus from '../../components/Disqus'; // Disqus 컴포넌트 임포트

const RecipePage = ({ recipe }) => {
  // recipe가 없는 경우 준비 중 메시지 표시
  if (!recipe) {
    return (
      <div className={styles.pageContainer}>
        <p>Rezept wird vorbereitet.</p>
      </div>
    );
  }

  // 현재 레시피에 대한 article 객체 정의
  const article = {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.BASE_PATH}/recipes/${recipe.id}`, // 절대 경로로 URL 설정
    id: String(recipe.id), // recipe.id를 문자열로 변환
    title: recipe.name, // 레시피 제목
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>{recipe.name}</h1>
      {/* 절대 경로로 이미지 접근 */}
      <img src={`${process.env.NEXT_PUBLIC_BASE_URL}${recipe.image}`} alt={recipe.name} />
      <h2>Zutaten:</h2>
      <ul>
        {recipe.ingredients.length > 0 ? (
          recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))
        ) : (
          <li>Keine Zutaten verfügbar.</li>
        )}
      </ul>
      <h2>Zubereitung:</h2>
      <ol>
        {recipe.instructions.length > 0 ? (
          recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))
        ) : (
          <li>Keine Anweisungen verfügbar.</li>
        )}
      </ol>

      {/* Disqus 댓글 시스템 */}
      <Disqus article={article} /> {/* Disqus 컴포넌트 사용 */}
    </div>
  );
};

// JSON 파일에 접근하기 위한 절대 경로 사용
export async function getStaticPaths() {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/data/menuItems.json`; // 절대 경로 사용
  console.log('Fetching paths from:', url);

  const res = await fetch(url);

  if (!res.ok) {
    console.error('Failed to fetch menu items:', res.statusText);
    return { paths: [], fallback: false }; // 경로가 없을 경우 처리
  }

  const menuItems = await res.json();

  // 경로를 ID에 따라 매핑
  const paths = menuItems.map((item) => ({
    params: { id: item.id.toString() } // ID를 문자열로 변환하여 경로 설정
  }));

  return { paths, fallback: false };
}

// JSON 파일에 접근하기 위한 절대 경로 사용
export async function getStaticProps({ params }) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/data/menuItems.json`; // 절대 경로 사용
  console.log('Fetching recipe from:', url);

  const res = await fetch(url);

  if (!res.ok) {
    console.error('Failed to fetch menu items:', res.statusText);
    return {
      props: {
        recipe: null, // 레시피가 없을 경우 null 반환
      }
    };
  }

  const menuItems = await res.json();
  const recipe = menuItems.find((item) => item.id === parseInt(params.id)); // ID에 따라 레시피 찾기

  return {
    props: {
      recipe: recipe || null, // 레시피 반환
    }
  };
}

export default RecipePage;
