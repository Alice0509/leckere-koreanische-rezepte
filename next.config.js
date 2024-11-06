const nextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV === 'development', // 개발 환경에서만 비활성화
  },
  // basePath와 assetPrefix 제거: Vercel의 기본 경로를 사용하도록 설정
};

module.exports = nextConfig;
