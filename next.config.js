const nextConfig = {
  output: 'export', // 정적 사이트로 내보내기
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
  },
  basePath: '/leckere-koreanische-rezepte', // GitHub Pages에서 사용하는 서브 경로
  assetPrefix: '/leckere-koreanische-rezepte/', // 정적 자산 경로
};

module.exports = nextConfig;
