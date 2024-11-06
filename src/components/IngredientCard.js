// src/components/IngredientCard.js
import React from 'react';
import Image from 'next/image';
import styles from './IngredientCard.module.css';

const IngredientCard = ({ name, image, availableInGermany }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={name} width={200} height={200} className={styles.cardImage} />
      <p className={styles.cardTitle}>{name}</p>
    </div>
  );
};

export default IngredientCard;
