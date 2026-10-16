import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingKakao } from "@/components/floating-kakao"
import { PageHero } from "@/components/page-hero"
import { WhySection } from "@/components/why-section"
import { ProcessSection } from "@/components/process-section"
import { ClientsSection } from "@/components/clients-section"
import { TrustSection } from "@/components/trust-section"
import { VisitCtaBand } from "@/components/visit-cta-band"

export const metadata: Metadata = {
  title: "와이넥스 소개 | 와이넥스 YNEX",
  description: "주식회사 와이넥스는 ERP·업무자동화 개발과 키오스크 제작을 함께 하는 회사입니다. 개발자가 직접 현장을 보고 업무에 맞는 시스템을 만듭니다.",
  alternates: { canonical: "/about" },
}

const capabilities = [
  {
    title: "ERP·업무 시스템",
    items: ["ERP·MES·WMS", "그룹웨어·사내 인트라넷", "관리자 시스템·B2B 주문", "전자결재·인사·회계"],
  },
  {
    title: "AI·업무 자동화",
    items: ["반복 업무 자동화(RPA)", "데이터 수집·크롤링", "문서·보고서 자동 작성", "메신저·문자 자동 발송"],
  },
  {
    title: "키오스크",
    items: ["외함·하드웨어 주문제작", "주문·접수·안내 화면 개발", "ERP 재고·매출 연동", "설치·유지보수"],
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <PageHero
          badge="회사소개"
          title="현장을 아는 개발 회사, 와이넥스"
          description="주식회사 와이넥스는 ERP·업무자동화 시스템을 만들고, 키오스크를 제작합니다. 개발자가 직접 현장을 보고, 그 업무에 맞는 프로그램을 만듭니다."
        />
        <WhySection />
        <section id="capabilities" className="scroll-mt-24 bg-muted/30 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">기술 및 역량</h2>
            <p className="mb-10 text-muted-foreground">소프트웨어 개발과 키오스크 제작을 한 회사에서 맡습니다.</p>
            <div className="grid gap-5 md:grid-cols-3">
              {capabilities.map((c) => (
                <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="mb-4 text-lg font-bold text-foreground">{c.title}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {c.items.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ProcessSection />
        <TrustSection />
        <ClientsSection />
        <VisitCtaBand />
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
