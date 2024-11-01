// src/components/RecipeSteps.js
import React, { useState } from 'react';
import styles from './RecipeSteps.module.css';

const steps = [
  { id: 1, text: 'Lauwarmes Milch und Ei in eine Schüssel geben.', image: '/step1.jpg' },
  { id: 2, text: 'Weizenmehl, Zucker, Salz, Backpulver und Hefe hinzufügen.', image: '/step2.jpg' },
  { id: 3, text: 'Teig kneten und Butter hinzufügen.', image: '/step3.jpg' },
  { id: 4, text: 'Teig für 50 Minuten ruhen lassen.', image: '/step4.jpg' },
  // 추가 단계 예시
];

export default function RecipeSteps() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((currentStep + 1) % steps.length);
  const prevStep = () => setCurrentStep((currentStep - 1 + steps.length) % steps.length);

  return (
    <div className={styles.stepsContainer}>
      <img src={steps[currentStep].image} alt={`Step ${steps[currentStep].id}`} className={styles.stepImage} />
      <p className={styles.stepText}>{steps[currentStep].text}</p>
      <div className={styles.buttons}>
        <button onClick={prevStep} className={styles.navButton}>이전</button>
        <button onClick={nextStep} className={styles.navButton}>다음</button>
      </div>
      <div className={styles.stepList}>
        {steps.map((step) => (
          <div key={step.id} className={styles.stepItem}>
            {/* 각 단계마다 고유한 key 설정 */}
            <img src={step.image} alt={`Step ${step.id}`} />
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
