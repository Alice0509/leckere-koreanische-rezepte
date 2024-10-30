// src/MenuCard.js
import React from 'react';

function MenuCard({ title, imageSrc }) {
  return (
    <div style={styles.card}>
      <img src={imageSrc} alt={title} style={styles.image} />
      <p style={styles.title}>{title}</p>
    </div>
  );
}

const styles = {
  card: {
    width: '200px',
    margin: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    objectFit: 'cover',
  },
  title: {
    fontWeight: 'bold',
    padding: '10px 0',
  },
};

export default MenuCard;
