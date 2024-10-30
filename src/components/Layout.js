// src/components/Layout.js
import React from 'react';
import Header from './Header'; // Header 컴포넌트
import Footer from './Footer'; // Footer 컴포넌트
import styles from './Layout.module.css'; // Layout 전용 CSS 모듈 (선택 사항)

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header /> {/* 모든 페이지에 공통으로 표시되는 Header */}
      <main className={styles.mainContent}>{children}</main> {/* 페이지별 콘텐츠 */}
      <Footer /> {/* 모든 페이지에 공통으로 표시되는 Footer */}
    </div>
  );
}
