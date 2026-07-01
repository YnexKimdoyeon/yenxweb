import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { FloatingKakao } from "@/components/floating-kakao"
import { JsonLd } from "@/components/json-ld"
import { graph, breadcrumbSchema, SITE_URL } from "@/lib/structured-data"

const title = "현장 방문 신청 | 와이넥스 YNEX"
const description =
  "전화 한 통, 카톡 한 줄이면 충분합니다. 신청 후 영업일 3일 이내 개발자가 직접 방문합니다. 첫 방문·업무 분석은 무료입니다."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/contact",
    siteName: "와이넥스 YNEX",
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "와이넥스 현장 방문 신청" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
}

const jsonLd = graph(
  breadcrumbSchema([
    { name: "홈", url: SITE_URL },
    { name: "현장 방문 신청", url: `${SITE_URL}/contact` },
  ]),
)

export default function ContactPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <CtaSection />
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
