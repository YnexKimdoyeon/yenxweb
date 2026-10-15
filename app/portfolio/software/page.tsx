import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioList } from "@/components/portfolio-list"
import { VisitCtaBand } from "@/components/visit-cta-band"
import { FloatingKakao } from "@/components/floating-kakao"
import { JsonLd } from "@/components/json-ld"
import { graph, breadcrumbSchema, SITE_URL } from "@/lib/structured-data"
import { cases } from "@/lib/cases-data"

const title = "ERP·업무자동화 포트폴리오 | 와이넥스 YNEX"
const description =
  "와이넥스가 구축한 ERP·그룹웨어·물류·재고·업종별 맞춤 시스템 도입사례. 모든 시스템을 가상 데이터 체험판으로 직접 눌러 볼 수 있고, 업무 효율·개발 금액·소요 기간도 공개합니다."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portfolio/software" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/portfolio/software",
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
    { name: "ERP·업무자동화", url: `${SITE_URL}/portfolio/software` },
  ]),
  {
    "@type": "CollectionPage",
    name: "ERP·업무자동화 포트폴리오",
    url: `${SITE_URL}/portfolio/software`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: cases.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/portfolio/software#${c.slug}`,
        item: {
          "@type": "CreativeWork",
          name: c.title,
          about: c.category,
          url: `${SITE_URL}/portfolio/software#${c.slug}`,
          ...(c.images[0] && { image: `${SITE_URL}${c.images[0]}` }),
          // GEO: 문제→해결→성과를 한 문단으로 합쳐 AI가 사례 맥락을 통째로 읽게 함
          description: `${c.description} ${c.detail.problem} ${c.detail.approach} ${c.detail.result}`,
        },
      })),
    },
  },
)

export default function SoftwarePortfolioPage() {
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
          <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 lg:py-14">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-semibold tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              PORTFOLIO
            </span>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              ERP·업무자동화 포트폴리오
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              ERP·그룹웨어·물류·재고부터 업종별 맞춤 시스템까지, 와이넥스가 구축한 프로젝트입니다.
              <br className="hidden sm:block" />{" "}
              모든 시스템을 가상 데이터 체험판으로 눌러 볼 수 있습니다.
            </p>
          </div>
        </section>

        <PortfolioList />
        <VisitCtaBand />
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
