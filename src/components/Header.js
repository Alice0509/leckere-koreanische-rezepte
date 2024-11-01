// src/components/Header.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/Logo.png"
          alt="Site Logo"
          width={100}
          height={100}
          className={styles.headerLogo} // 클래스 이름 일치
          />
        </Link>
        <div className={styles.headerTitleWrapper}> {/* 래퍼 추가 */}
          <h1 className={styles.headerTitle}>
            Koreanische Rezepte entdecken – Authentisch, einfach und lecker
          </h1>
        </div>
        <nav className={styles.nav}>
          <Link href="/Ingredients" className={styles.zutatenLink}>Zutaten</Link> {/* 링크 스타일 적용 */}
        </nav>
      </header>
  );
}
