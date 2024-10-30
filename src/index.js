import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // 기본 스타일
import './styles.css'; // 새로 만든 스타일 파일 추가
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
