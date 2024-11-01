import React from 'react';
import { useRouter } from 'next/router';
import { DiscussionEmbed } from 'disqus-react';
import styles from '../../styles/Recipe.module.css';

const RecipePage = ({ recipe }) => {
  const router = useRouter();

  if (!recipe) {
    return (
      <div className={styles.pageContainer}>
        <p>Rezept wird vorbereitet.</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
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

      <DiscussionEmbed
        shortname="my-korean-food-site"
        config={{
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/recipes/${recipe.id}`, // 환경 변수를 사용한 URL
          identifier: recipe.id,
          title: recipe.name,
          language: 'de_DE'
        }}
      />
    </div>
  );
};

// JSON 파일에 접근하기 위한 절대 경로 사용
export async function getStaticPaths() {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/data/menuItems.json`; // 절대 경로 사용
  console.log('Fetching paths from:', url); // 추가된 로그

  const res = await fetch(url);

  if (!res.ok) {
    console.error('Failed to fetch menu items:', res.statusText);
    return { paths: [], fallback: false }; // 경로가 없을 경우 처리
  }

  const menuItems = await res.json();

  const paths = menuItems.map((item) => ({
    params: { id: item.id.toString() }
  }));

  return { paths, fallback: false };
}

// JSON 파일에 접근하기 위한 절대 경로 사용
export async function getStaticProps({ params }) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/data/menuItems.json`; // 절대 경로 사용
  console.log('Fetching recipe from:', url); // 추가된 로그

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
  const recipe = menuItems.find((item) => item.id === parseInt(params.id));

  return {
    props: {
      recipe: recipe || null,
    }
  };
}

export default RecipePage;
