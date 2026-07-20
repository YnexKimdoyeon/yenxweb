import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CasesSection } from "@/components/cases-section"
import { ProcessFlowSection } from "@/components/process-flow-section"
import { VisitCtaBand } from "@/components/visit-cta-band"
import { FloatingKakao } from "@/components/floating-kakao"
import { JsonLd } from "@/components/json-ld"
import { graph, breadcrumbSchema, howToSchema, SITE_URL } from "@/lib/structured-data"
import { cases } from "@/lib/cases-data"
import { processFlow } from "@/lib/process-flow-data"

const title = "포트폴리오·도입사례 | 와이넥스 YNEX"
const description =
  "와이넥스가 직접 만든 업무자동화·ERP·물류·재고관리·크롤링 시스템 도입사례 모음. 업무 효율·개발 금액·소요 기간까지 실제 결과를 공개합니다."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/portfolio",
    siteName: "와이넥스 YNEX",
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "와이넥스 포트폴리오" }],
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
    { name: "포트폴리오", url: `${SITE_URL}/portfolio` },
  ]),
  {
    "@type": "CollectionPage",
    name: "포트폴리오·도입사례",
    url: `${SITE_URL}/portfolio`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: cases.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/portfolio#${c.slug}`,
        item: {
          "@type": "CreativeWork",
          name: c.title,
          about: c.category,
          url: `${SITE_URL}/portfolio#${c.slug}`,
          image: `${SITE_URL}${c.images[0]}`,
          // GEO: 문제→해결→성과를 한 문단으로 합쳐 AI가 사례 맥락을 통째로 읽게 함
          description: `${c.description} ${c.detail.problem} ${c.detail.approach} ${c.detail.result}`,
        },
      })),
    },
  },
  // 도입 프로세스 6단계 — 절차형 구조화 데이터 (검색·AI 답변엔진 노출)
  howToSchema({
    name: "와이넥스 업무자동화 시스템 도입 프로세스",
    description:
      "문제인식부터 성과 도출까지, 와이넥스가 업무자동화·ERP·물류·재고·크롤링 시스템을 만드는 6단계 절차.",
    steps: processFlow.map((s) => ({
      name: s.title,
      text: `${s.summary} ${s.detail}`,
    })),
  }),
)

export default function PortfolioPage() {
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
          <div className="relative mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 lg:py-20">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              직접 만든 시스템
            </span>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              포트폴리오·도입사례
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              와이넥스가 직접 만든 업무자동화·ERP·물류·재고관리·크롤링 시스템 도입사례 모음.
              <br className="hidden sm:block" />{" "}
              업무 효율·개발 금액·소요 기간까지 실제 결과를 공개합니다.
            </p>
          </div>
        </section>

        <ProcessFlowSection />
        <CasesSection showHeader={false} />
        <VisitCtaBand />
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
