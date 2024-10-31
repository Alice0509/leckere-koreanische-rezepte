// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 이미지 최적화 API 비활성화
  },
};

module.exports = nextConfig;
