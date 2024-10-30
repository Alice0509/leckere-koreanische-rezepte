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
          className={styles.headerLogo}
        />
      </Link>
      <h1 className={styles.headerTitle}>
        Koreanische Rezepte entdecken – Authentisch, einfach und lecker
      </h1>
      <nav className={styles.nav}>
        <Link href="/Ingredients">Zutaten</Link>
      </nav>
    </header>
  );
}
