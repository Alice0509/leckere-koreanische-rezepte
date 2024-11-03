// src/pages/recipes/[id].js
import React from 'react';
import path from 'path';
import fs from 'fs';
import styles from '../../styles/Recipe.module.css';
import Disqus from '../../components/Disqus'; // Disqus 컴포넌트 임포트

const RecipePage = ({ recipe }) => {
  if (!recipe) {
    return (
      <div className={styles.pageContainer}>
        <p>Rezept wird vorbereitet.</p>
      </div>
    );
  }

  const article = {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.BASE_PATH}/recipes/${recipe.id}`,
    id: String(recipe.id),
    title: recipe.name,
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>{recipe.name}</h1>
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

      {/* 추가된 필드 렌더링 */}
      <h2>Tipps:</h2>
      {recipe.tips && recipe.tips.length > 0 ? (
        <ul>
          {recipe.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      ) : (
        <p>Keine Tipps verfügbar.</p>
      )}

      <h2>Beschreibung:</h2>
      <p>{recipe.description || "Keine Beschreibung verfügbar."}</p>

      <h2>Portionen:</h2>
      <p>{recipe.servings} Portionen</p>

      <Disqus article={article} />
    </div>
  );
};

// JSON 파일을 로드하여 경로 생성
export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'menuItems.json'); // 절대 경로로 파일 경로 지정
  const fileData = fs.readFileSync(filePath, 'utf8');
  const menuItems = JSON.parse(fileData);

  const paths = menuItems.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
}

// JSON 파일을 로드하여 props 생성
export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'public', 'data', 'menuItems.json'); // 절대 경로로 파일 경로 지정
  const fileData = fs.readFileSync(filePath, 'utf8');
  const menuItems = JSON.parse(fileData);

  const recipe = menuItems.find((item) => item.id === parseInt(params.id));

  return {
    props: {
      recipe: recipe || null,
    },
  };
}

export default RecipePage;
