// src/pages/Ingredients.js
import React, { useState } from 'react';
import IngredientCard from '../components/IngredientCard';
import ingredients from '../data/ingredients';
import styles from '../styles/Ingredients.module.css';

export default function Ingredients() {
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filteredIngredients = showAvailableOnly
    ? ingredients.filter((ingredient) => ingredient.availableInGermany)
    : ingredients;

  return (
    <div className={styles.ingredientsContainer}>
      <h2 className={styles.title}>Notwendige Zutaten für Koreanische Gerichte</h2>

      {/* 필터 버튼 */}
      <button
        className={styles.filterButton}
        onClick={() => setShowAvailableOnly(!showAvailableOnly)}
      >
        {showAvailableOnly ? 'Alle Zutaten anzeigen' : 'Verfügbare Zutaten in Deutschland anzeigen'}
      </button>

      <div className={styles.menuList}>
        {filteredIngredients.map((ingredient) => (
          <IngredientCard key={ingredient.id} {...ingredient} />
        ))}
      </div>
    </div>
  );
}
