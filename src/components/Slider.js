// src/components/Slider.js
import React from 'react';
import Image from 'next/image';
import styles from './Slider.module.css';

const Slider = ({ visibleItems }) => {
  return (
    <div className={styles.sliderContainer}>
      {visibleItems.map((item, index) => (
        <Image key={index} src={item.image} alt={item.name} width={500} height={500} className={styles.sliderImage} />      ))}
      {/* 슬라이더 컨트롤 버튼이 필요하면 추가 */}
      {/* 예:
      <div className={styles.sliderControls}>
        <button className={styles.sliderButton}>Prev</button>
        <button className={styles.sliderButton}>Next</button>
      </div>
      */}
    </div>
  );
};

export default Slider;
