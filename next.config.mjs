/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['172.30.1.81'],
  // 포트폴리오 목록은 ERP·업무자동화 페이지 위쪽으로 옮김 (#사례 주소는 브라우저가 그대로 유지)
  async redirects() {
    return [{ source: '/portfolio/software', destination: '/services', permanent: true }]
  },
}

export default nextConfig
