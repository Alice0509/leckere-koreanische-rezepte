// src/components/IngredientCard.js
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './IngredientCard.module.css';

const IngredientCard = ({ name, image, description, substitutes }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.card} onClick={openModal}>
        <Image src={image} alt={name} width={200} height={200} className={styles.cardImage} />
        <p className={styles.cardTitle}>{name}</p>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>&times;</button>
            <h2>{name}</h2>
            <p><strong>Beschreibung:</strong> {description}</p>
            <p><strong>Substitute:</strong> {substitutes}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default IngredientCard;
