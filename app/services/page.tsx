import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"
import { VisitCtaBand } from "@/components/visit-cta-band"
import { FloatingKakao } from "@/components/floating-kakao"
import { JsonLd } from "@/components/json-ld"
import { graph, breadcrumbSchema, SITE_URL } from "@/lib/structured-data"
import { services } from "@/lib/services-data"

const title = "서비스 | 와이넥스 YNEX"
const description =
  "웹·ERP/CRM/SCM 개발, 업무자동화(RPA), 웹 크롤링, 재고·물류관리, 전자결재, 변호사·전문직 랜딩페이지까지. 와이넥스가 제공하는 맞춤 개발 서비스를 한눈에."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/services",
    siteName: "와이넥스 YNEX",
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "와이넥스 서비스" }],
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
    { name: "서비스", url: `${SITE_URL}/services` },
  ]),
  {
    "@type": "CollectionPage",
    name: "서비스",
    url: `${SITE_URL}/services`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `${SITE_URL}/services/${s.slug}`,
      })),
    },
  },
)

export default function ServicesPage() {
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
              서비스
            </span>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              와이넥스가 만드는 것들
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        </section>

        <ServicesSection showHeader={false} />
        <VisitCtaBand />
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
