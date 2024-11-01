// src/pages/_app.js
import '../styles/styles.css';
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Head from 'next/head'; // Head를 import

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Google Analytics 스크립트 추가
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-9E1TL68NFR';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', 'G-9E1TL68NFR');

    const handleRouteChange = (url) => {
      window.gtag('config', 'G-9E1TL68NFR', {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      document.head.removeChild(script);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Koreanische Rezepte - Rezepte für die Seele</title> {/* 여기에 title 설정 */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
