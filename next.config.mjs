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
    return [
      { source: '/portfolio/software', destination: '/services', permanent: true },
      // 견적 문의는 /contact 하나로 합침
      { source: '/kiosk/quote', destination: '/contact?type=kiosk', permanent: true },
      { source: '/support/maintenance', destination: '/contact', permanent: true },
      // 키오스크는 주문제작(/kiosk)·포트폴리오 두 페이지로 정리
      { source: '/kiosk/products', destination: '/kiosk', permanent: true },
      { source: '/kiosk/erp', destination: '/kiosk', permanent: true },
    ]
  },
}

export default nextConfig
