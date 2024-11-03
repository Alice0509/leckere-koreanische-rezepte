// src/components/Footer.js
import React from 'react';
import styles from './Footer.module.css'; // 스타일을 위한 CSS 모듈 임포트
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Leckere Koreanische Rezepte. Alle Rechte vorbehalten.</p>
      
      <div className={styles.links}>
        <Link href="/about">Über Uns</Link> {/* 소개 페이지 링크 추가 */}
      </div>
      
      <div className={styles.socialLinks}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          Facebook
        </a> | 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          Instagram
        </a> | 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
