// src/pages/Ingredients.js
import React, { useState } from 'react';
import IngredientCard from '../components/IngredientCard';
import ingredients from '../data/ingredients';

export default function Ingredients() {
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filteredIngredients = showAvailableOnly
    ? ingredients.filter((ingredient) => ingredient.availableInGermany)
    : ingredients;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Notwendige Zutaten für Koreanische Gerichte</h2>

      {/* 필터 버튼 */}
      <button onClick={() => setShowAvailableOnly(!showAvailableOnly)}>
        {showAvailableOnly ? 'Alle Zutaten anzeigen' : 'Verfügbare Zutaten in Deutschland anzeigen'}
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {filteredIngredients.map((ingredient) => (
          <IngredientCard key={ingredient.id} {...ingredient} />
        ))}
      </div>
    </div>
  );
}
