import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FaqSection } from "@/components/faq-section"
import { VisitCtaBand } from "@/components/visit-cta-band"
import { FloatingKakao } from "@/components/floating-kakao"
import { JsonLd } from "@/components/json-ld"
import { graph, breadcrumbSchema, faqSchema, SITE_URL } from "@/lib/structured-data"
import { faqs } from "@/lib/faq-data"

const title = "자주 묻는 질문(FAQ) | 와이넥스 YNEX"
const description =
  "현장 방문 비용, 방문 가능 지역, 개발 기간, 유지보수까지. 와이넥스 업무자동화·ERP 개발에 대해 자주 묻는 질문을 모았습니다."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/faq",
    siteName: "와이넥스 YNEX",
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "와이넥스 자주 묻는 질문" }],
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
    { name: "자주 묻는 질문", url: `${SITE_URL}/faq` },
  ]),
  faqSchema(faqs),
)

export default function FaqPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main className="pt-16 lg:pt-20">
        {/* Page hero */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary to-background">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:py-20">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              자주 묻는 질문
            </span>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              궁금한 점이 있으신가요?
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              현장 방문 비용, 방문 가능 지역, 개발 기간, 유지보수까지.
              <br className="hidden sm:block" />{" "}
              와이넥스 업무자동화·ERP 개발에 대해 자주 묻는 질문을 모았습니다.
            </p>
          </div>
        </section>

        <FaqSection showHeader={false} />
        <VisitCtaBand />
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
