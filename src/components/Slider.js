// src/components/Slider.js
import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css'; // 스타일 파일을 가져옵니다.

const Slider = ({ visibleItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 인덱스 상태 정의

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleItems.length > 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % visibleItems.length);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [visibleItems.length]); // visibleItems.length를 dependency로 추가

  // visibleItems가 비어있거나 undefined일 경우의 처리
  if (!visibleItems || visibleItems.length === 0) {
    return <div>No items to display</div>; // 항목이 없을 경우 처리
  }

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderImage}>
        <img 
          src={visibleItems[currentIndex]?.image} // Optional chaining을 사용하여 undefined 체크
          alt={visibleItems[currentIndex]?.name} // Optional chaining을 사용하여 undefined 체크
          className={styles.sliderImage} 
        />
        <p>{visibleItems[currentIndex]?.name}</p> {/* Optional chaining */}
      </div>

      <div className={styles.sliderControls}>
        <button 
          className={styles.sliderButton} 
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + visibleItems.length) % visibleItems.length)}
        >
          Prev
        </button>
        <button 
          className={styles.sliderButton} 
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % visibleItems.length)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
