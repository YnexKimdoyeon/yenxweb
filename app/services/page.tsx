import type { Metadata } from "next"
import { ArrowRight, Check, X } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VisitCtaBand } from "@/components/visit-cta-band"
import { FloatingKakao } from "@/components/floating-kakao"
import { JsonLd } from "@/components/json-ld"
import { PortfolioList } from "@/components/portfolio-list"
import { graph, breadcrumbSchema, SITE_URL } from "@/lib/structured-data"
import { cases, type CaseField } from "@/lib/cases-data"

const title = "ERP 개발 | 와이넥스 YNEX"
const description =
  "개발자가 직접 무료로 출장해 회사 업무를 진단하고, 진단 보고서를 바탕으로 ERP·WMS·MES를 만듭니다. 구축 사례마다 고객의 문제, 해결 방법, 성과와 개발 견적을 공개합니다."

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
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "와이넥스 ERP 개발" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
}

// ERP 개발 페이지에 보여 줄 포트폴리오 분야 (자동화 사례는 /automation)
const ERP_FIELDS: CaseField[] = ["erp", "logistics", "groupware", "industry"]
const erpCases = cases.filter((c) => ERP_FIELDS.includes(c.field))

// 다른 업체 vs 와이넥스
const others = ["유료 출장이나 온라인 상담으로 시작", "영업사원이 방문해 견적만 받아 감", "만들어 둔 틀에 업무를 끼워 맞춤"]
const ours = [
  "개발자가 직접 무료로 출장해 업무를 봅니다",
  "회사 업무를 컨설팅하고 진단 보고서를 씁니다",
  "그 보고서를 바탕으로 ERP·WMS·MES를 만듭니다",
]

const jsonLd = graph(
  breadcrumbSchema([
    { name: "홈", url: SITE_URL },
    { name: "ERP 개발", url: `${SITE_URL}/services` },
  ]),
  {
    "@type": "ItemList",
    name: "ERP 구축 사례",
    itemListElement: erpCases.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/services#${c.slug}`,
      item: {
        "@type": "CreativeWork",
        name: c.title,
        about: c.category,
        url: `${SITE_URL}/services#${c.slug}`,
        ...(c.images[0] && { image: `${SITE_URL}${c.images[0]}` }),
        // GEO: 문제→해결→성과를 한 문단으로 합쳐 AI가 사례 맥락을 통째로 읽게 함
        description: `${c.description} ${c.detail.problem} ${c.detail.approach} ${c.detail.result}`,
      },
    })),
  },
)

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary to-background">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 lg:py-14">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              ERP 개발
            </span>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              개발자가 직접 가서 진단하고 만드는 ERP
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              회사 업무를 먼저 진단하고, 그 보고서를 바탕으로 ERP를 만듭니다. WMS·MES도 같은 방식입니다.
            </p>
          </div>
        </section>

        {/* 다른 업체와 다른 점 */}
        <section className="py-12 lg:py-14">
          <div className="mx-auto grid max-w-5xl gap-4 px-4 md:grid-cols-[1fr_auto_1.15fr] md:items-stretch">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="mb-4 font-bold text-muted-foreground">다른 업체</p>
              <ul className="space-y-3">
                {others.map((o) => (
                  <li key={o} className="flex gap-2.5 text-muted-foreground">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground/60" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden items-center md:flex">
              <ArrowRight className="h-7 w-7 text-primary" />
            </div>
            <div className="rounded-2xl border-2 border-primary bg-primary/5 p-6">
              <p className="mb-4 font-bold text-primary">와이넥스</p>
              <ol className="space-y-3">
                {ours.map((o, i) => (
                  <li key={o} className="flex gap-2.5 font-semibold text-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    {o}
                  </li>
                ))}
              </ol>
              <p className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary">
                <Check className="h-4 w-4" /> 출장·진단·보고서까지 비용을 받지 않습니다
              </p>
            </div>
          </div>
        </section>

        <PortfolioList
          fields={ERP_FIELDS}
          title="ERP 구축 사례"
          subtitle="고객의 문제, 와이넥스의 해결, 고객이 얻은 성과와 개발 견적을 함께 적었습니다"
        />
        <VisitCtaBand />
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
