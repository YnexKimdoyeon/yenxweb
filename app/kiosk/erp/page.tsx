import type { Metadata } from "next"
import Link from "next/link"
import { ArrowDown, ArrowRight, Check, X } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingKakao } from "@/components/floating-kakao"
import { PageHero } from "@/components/page-hero"
import { bundleFlow } from "@/lib/kiosk-data"
import { cases } from "@/lib/cases-data"

export const metadata: Metadata = {
  title: "키오스크 + ERP 결합 상품 | 와이넥스 YNEX",
  description: "키오스크 주문·결제가 ERP 재고·매출·정산으로 바로 이어지는 와이넥스 결합 상품. 키오스크 제작과 업무 시스템 개발을 한 회사가 맡습니다.",
  alternates: { canonical: "/kiosk/erp" },
}

const before = [
  "키오스크 매출과 장부를 마감 때마다 손으로 맞춥니다",
  "재고는 따로 세어 엑셀에 옮겨 적습니다",
  "키오스크 업체와 프로그램 업체가 달라 문제가 생기면 서로 넘깁니다",
]
const after = [
  "결제가 끝나면 매출·정산 화면에 바로 쌓입니다",
  "주문된 만큼 재고가 자동으로 빠지고 부족하면 알려 줍니다",
  "기기와 시스템을 한 곳에서 만들어 문의 창구가 하나입니다",
]
const included = [
  { title: "키오스크 주문제작", desc: "설치 환경에 맞춘 외함과 하드웨어 구성" },
  { title: "주문·결제 화면", desc: "메뉴·상품 구성과 결제 흐름을 업장에 맞춰 개발" },
  { title: "ERP", desc: "재고·매출·정산·직원 권한 등 필요한 메뉴만 골라 구성" },
  { title: "설치·교육·유지보수", desc: "설치 후 사용 교육, 운영 중 문제 대응" },
]
const fits = [
  { title: "음식점·카페", desc: "주문은 키오스크로, 재료 재고와 일 매출은 ERP로" },
  { title: "무인 매장", desc: "결제와 동시에 재고가 줄고, 채워 넣을 상품을 바로 확인" },
  { title: "기관·병원 접수", desc: "접수 내역이 업무 시스템으로 넘어가 통계와 기록이 자동으로" },
]

export default function KioskErpPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <PageHero
          badge="키오스크 + ERP"
          title="키오스크와 ERP를 하나로"
          description="키오스크에서 받은 주문이 재고·매출·정산까지 그대로 이어집니다. 기기 제작과 업무 시스템 개발을 와이넥스가 함께 맡습니다."
        >
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact?type=kiosk" className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
              결합 상품 상담 신청
            </Link>
          </div>
        </PageHero>

        <section className="py-16">
          <div className="mx-auto grid max-w-5xl gap-5 px-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="mb-4 text-lg font-bold text-foreground">따로 쓰면</h2>
              <ul className="space-y-3">
                {before.map((b) => (
                  <li key={b} className="flex gap-2.5 text-muted-foreground">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <h2 className="mb-4 text-lg font-bold text-primary">결합 상품으로 쓰면</h2>
              <ul className="space-y-3">
                {after.map((a) => (
                  <li key={a} className="flex gap-2.5 text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">주문 한 건이 지나가는 길</h2>
            <ol className="space-y-2">
              {bundleFlow.map((f, i) => (
                <li key={f.step}>
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold text-foreground">{f.step}</p>
                      <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                  {i < bundleFlow.length - 1 && <ArrowDown className="mx-auto my-1 h-5 w-5 text-primary/50" />}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">결합 상품에 들어가는 것</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {included.map((x) => (
                <div key={x.title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="mb-1 font-bold text-foreground">{x.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{x.desc}</p>
                </div>
              ))}
            </div>
            <h2 className="mb-6 mt-14 text-2xl font-bold text-foreground md:text-3xl">이런 곳에 맞습니다</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {fits.map((x) => (
                <div key={x.title} className="rounded-2xl bg-secondary p-6">
                  <h3 className="mb-1 font-bold text-foreground">{x.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{x.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent py-14 text-accent-foreground">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
            <div>
              <p className="mb-1 text-white/70">ERP를 직접 만드는 회사입니다</p>
              <p className="text-xl font-bold md:text-2xl">지금까지 만든 업무 시스템 {cases.length}건을 체험판으로 확인해 보세요</p>
            </div>
            <Link href="/services" className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-white px-5 py-3 font-semibold text-accent">
              ERP 포트폴리오 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
