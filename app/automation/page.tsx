import type { Metadata } from "next"
import { Bot, FileSpreadsheet, Globe, MonitorCog, Send } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VisitCtaBand } from "@/components/visit-cta-band"
import { FloatingKakao } from "@/components/floating-kakao"
import { JsonLd } from "@/components/json-ld"
import { PortfolioList } from "@/components/portfolio-list"
import { graph, breadcrumbSchema, SITE_URL } from "@/lib/structured-data"
import { cases, type CaseField } from "@/lib/cases-data"

const title = "업무자동화 프로그램 개발 | 와이넥스 YNEX"
const description =
  "사람이 매일 반복하는 업무를 프로그램으로 바꿉니다. 문서·엑셀 자동 작성, 데이터 수집·정리, 프로그램 간 자동 입력, 알림 발송까지 회사 업무에 맞춰 개발합니다."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/automation" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/automation",
    siteName: "와이넥스 YNEX",
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "와이넥스 업무자동화" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
}

const AUTO_FIELDS: CaseField[] = ["automation"]
const autoCases = cases.filter((c) => AUTO_FIELDS.includes(c.field))

// 만들 수 있는 자동화
const kinds = [
  { icon: FileSpreadsheet, title: "문서·엑셀 자동 작성", desc: "견적서·보고서·교재처럼 매번 손으로 만들던 문서를 양식 그대로 자동으로 만듭니다." },
  { icon: Globe, title: "데이터 수집·정리", desc: "여러 사이트와 파일에 흩어진 자료를 모아 비교하고, 바뀐 것만 알려 줍니다." },
  { icon: MonitorCog, title: "프로그램 간 자동 입력", desc: "쇼핑몰·관리자 화면에 하나씩 옮겨 적던 등록 작업을 대신 처리합니다." },
  { icon: Send, title: "알림·발송 자동화", desc: "정해진 조건이 되면 메일·문자·메신저로 알아서 보내고 기록을 남깁니다." },
  { icon: Bot, title: "AI 업무자동화", desc: "분류·요약·답변처럼 판단이 필요한 단계에 AI를 붙여 사람 손을 덜어 줍니다." },
]

const jsonLd = graph(
  breadcrumbSchema([
    { name: "홈", url: SITE_URL },
    { name: "업무자동화", url: `${SITE_URL}/automation` },
  ]),
  {
    "@type": "ItemList",
    name: "업무자동화 개발 사례",
    itemListElement: autoCases.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/automation#${c.slug}`,
      item: {
        "@type": "CreativeWork",
        name: c.title,
        about: c.category,
        url: `${SITE_URL}/automation#${c.slug}`,
        description: `${c.description} ${c.detail.problem} ${c.detail.approach} ${c.detail.result}`,
      },
    })),
  },
)

export default function AutomationPage() {
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
              업무자동화
            </span>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              업무자동화 프로그램도 만듭니다
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              ERP까지는 필요 없지만 매일 반복되는 일이 있다면, 그 일만 줄이는 프로그램을 만듭니다. 이것도 개발자가 직접 업무를 보고 시작합니다.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-6 text-2xl font-bold text-foreground">이런 일을 자동으로 바꿉니다</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {kinds.map((k) => {
                const Icon = k.icon
                return (
                  <div key={k.title} className="rounded-2xl border border-border bg-card p-5">
                    <Icon className="mb-3 h-6 w-6 text-primary" />
                    <h3 className="mb-1.5 font-bold text-foreground">{k.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{k.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <PortfolioList
          fields={AUTO_FIELDS}
          title="업무자동화 개발 사례"
          subtitle="고객의 문제, 와이넥스의 해결, 고객이 얻은 성과와 개발 견적을 함께 적었습니다"
        />
        <VisitCtaBand />
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
