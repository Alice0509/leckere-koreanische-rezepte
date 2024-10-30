// src/components/IngredientCard.js
import React from 'react';

const IngredientCard = ({ name, description, availableInGermany, substitutes, image }) => (
  <div style={{ border: '1px solid #ddd', padding: '16px', margin: '16px', borderRadius: '8px' }}>
    <img src={image} alt={name} style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
    <h3>{name}</h3>
    <p>{description}</p>
    <p><strong>In Deutschland verfügbar?</strong> {availableInGermany ? 'Ja' : 'Nein'}</p>
    {substitutes && <p><strong>Ersatz:</strong> {substitutes}</p>}
  </div>
);

export default IngredientCard;
