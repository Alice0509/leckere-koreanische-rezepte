// src/components/Slider.js
import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css'; // 스타일 파일을 가져옵니다.

const Slider = ({ visibleItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 인덱스 상태 정의

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % visibleItems.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [visibleItems.length]); // visibleItems.length를 dependency로 추가

  return (
    <div className={styles.sliderContainer}>
      {visibleItems.length > 0 && ( // visibleItems가 비어있지 않은 경우에만 렌더링
        <div className={styles.sliderImage}>
          <img 
            src={visibleItems[currentIndex].image} 
            alt={visibleItems[currentIndex].name} 
            className={styles.sliderImage} 
          />
          <p>{visibleItems[currentIndex].name}</p>
        </div>
      )}

      <div className={styles.sliderControls}>
        <button className={styles.sliderButton} onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + visibleItems.length) % visibleItems.length)}>Prev</button>
        <button className={styles.sliderButton} onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % visibleItems.length)}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
