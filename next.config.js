const nextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV === 'development', // 개발 환경에서만 비활성화
  },
  basePath: process.env.BASE_PATH || '', // BASE_PATH 환경 변수에 따라 설정
  assetPrefix: process.env.NEXT_PUBLIC_BASE_URL ? `${process.env.NEXT_PUBLIC_BASE_URL}/` : '', // BASE_URL에 따라 정적 자산 경로 설정
};

module.exports = nextConfig;
