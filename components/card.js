// src/components/Card.js
import React, { useState } from 'react';
import styles from './Card.module.css'; // Импортируем CSS-модуль

const Card = ({ title, image, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={isFlipped ? styles.cardFlipped : styles.card}>
      <h2 className={isFlipped ? styles.titleFlipped : styles.title}>{title}</h2>
      <img src={image} alt={title} className={styles.image} />
      <p className={isFlipped ? styles.descriptionFlipped : styles.description}>
        {description}
      </p>
      <button onClick={toggleFlip} className={styles.button}>
        Flip Colors
      </button>
    </div>
  );
};

export default Card;