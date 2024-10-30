// src/pages/_app.js
import '../styles/styles.css'; // 전역 스타일 파일 가져오기
import React, { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout'; // Layout 컴포넌트 가져오기
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter(); // useRouter를 사용하여 페이지 변경 감지

  useEffect(() => {
    // Google Analytics 스크립트 추가
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-5GKGCMDCJ8';
    script.async = true;
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', 'G-5GKGCMDCJ8');

    // 페이지뷰 이벤트 추적
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-5GKGCMDCJ8', {
        page_path: url,
      });
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean-up on unmount
    return () => {
      document.head.removeChild(script);
      router.events.off('routeChangeComplete', handleRouteChange); // 이벤트 해제
    };
  }, [router.events]); // router.events 의존성 추가

  return (
    <>
      <Head>
        <title>Koreanische Rezeptseite - Authentische Gerichte</title>
        <link rel="icon" href="/Logo.png" /> {/* 파비콘 설정 */}
      </Head>
      <Layout> {/* 모든 페이지에 Layout 적용 */}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
