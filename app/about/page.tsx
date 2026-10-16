import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingKakao } from "@/components/floating-kakao"
import { PageHero } from "@/components/page-hero"
import Link from "next/link"
import { PHONE, PHONE_HREF } from "@/lib/company"

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
    title: "업무자동화",
    items: ["반복 업무 자동화(RPA)", "데이터 수집·크롤링", "문서·보고서 자동 작성", "메신저·문자 자동 발송"],
  },
  {
    title: "키오스크",
    items: ["외함·하드웨어 주문제작", "주문·접수·안내 화면 개발", "ERP 재고·매출 연동", "설치·유지보수"],
  },
]

// 회사 개요 (한 장 소개)
const profile: [string, React.ReactNode][] = [
  ["상호", "주식회사 와이넥스 (YNEX)"],
  ["대표", "김도연"],
  ["사업 분야", "ERP·WMS·MES 개발, 업무자동화 프로그램 개발, 키오스크 주문제작"],
  ["주소", "충청남도 아산시 탕정면 이순신대로 442, 912호"],
  [
    "전화",
    <a key="tel" href={PHONE_HREF} className="font-semibold text-primary hover:underline">
      {PHONE}
    </a>,
  ],
  [
    "이메일",
    <a key="mail" href="mailto:ceo@ynex.kr" className="text-primary hover:underline">
      ceo@ynex.kr
    </a>,
  ],
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <PageHero
          badge="회사소개"
          title="현장을 아는 개발 회사, 와이넥스"
          description="ERP·업무자동화 시스템을 만들고, 키오스크를 제작합니다. 영업사원이 아니라 개발자가 직접 현장에 가서 업무를 보고, 그 업무에 맞는 프로그램을 만듭니다."
        />
        <section className="py-14 lg:py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1fr_1.4fr]">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="mb-4 text-lg font-bold text-foreground">회사 개요</h2>
              <dl className="divide-y divide-border">
                {profile.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[5.5rem_1fr] gap-3 py-3 text-sm">
                    <dt className="font-semibold text-muted-foreground">{k}</dt>
                    <dd className="text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div id="capabilities" className="scroll-mt-24">
              <h2 className="mb-4 text-lg font-bold text-foreground">하는 일</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {capabilities.map((c) => (
                  <div key={c.title} className="rounded-2xl border border-border bg-card p-5">
                    <h3 className="mb-3 font-bold text-primary">{c.title}</h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {c.items.map((i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-primary/5 p-5 text-sm leading-relaxed text-foreground">
                다른 업체는 유료 출장이나 온라인 상담, 영업사원 방문으로 시작합니다. 와이넥스는 <b>개발자가 직접 무료로 출장</b>해 업무를 진단하고, 진단 보고서를 바탕으로 시스템을 만듭니다.
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  현장 방문 · 견적 신청
                </Link>
                <a href={PHONE_HREF} className="rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground hover:border-primary/40">
                  전화 {PHONE}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
