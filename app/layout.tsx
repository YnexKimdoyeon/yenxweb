import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@/components/google-analytics'
import './globals.css'

const siteUrl = 'https://ynex.kr'
const siteTitle = '와이넥스 YNEX | 업무자동화·매크로·ERP 개발 전문'
const siteDescription = '영업사원이 아닌 개발자가 직접 현장을 방문해 업무를 분석합니다. 전국 무료 현장 방문, 100% 맞춤 개발. 고민하지 마세요, 저희가 직접 찾아갑니다.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: ['업무자동화', '매크로', 'ERP', 'RPA', '맞춤개발', '와이넥스', 'YNEX', '파이썬 자동화', '크롤링', '아산'],
  authors: [{ name: '주식회사 와이넥스' }],
  creator: '주식회사 와이넥스',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteUrl,
    siteName: '와이넥스 YNEX',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: '와이넥스 YNEX — 현장을 아는 개발자가 직접 찾아갑니다',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="bg-background">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
