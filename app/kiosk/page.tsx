import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Boxes, Cpu, Palette, Wrench } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingKakao } from "@/components/floating-kakao"
import { PageHero } from "@/components/page-hero"
import { bundleFlow, kioskTypes } from "@/lib/kiosk-data"

export const metadata: Metadata = {
  title: "키오스크 주문제작 | 와이넥스 YNEX",
  description: "용도와 설치 환경에 맞춰 외함 디자인부터 소프트웨어까지 만드는 와이넥스 키오스크 주문제작. ERP와 연결한 결합 상품도 함께 상담합니다.",
  alternates: { canonical: "/kiosk" },
}

const scope = [
  { icon: Palette, title: "외함 디자인", desc: "설치 장소와 매장 분위기에 맞춰 형태와 색을 정합니다." },
  { icon: Cpu, title: "하드웨어 구성", desc: "화면 크기와 결제·출력·스캔 등 필요한 모듈을 고릅니다." },
  { icon: Boxes, title: "소프트웨어", desc: "주문·접수·안내 화면을 업무 흐름에 맞춰 직접 개발합니다." },
  { icon: Wrench, title: "설치·유지보수", desc: "설치 후 사용 교육과 운영 중 문제 대응까지 맡습니다." },
]

const steps = ["상담·현장 확인", "사양 확정", "외함 디자인", "제작·소프트웨어 개발", "설치·교육", "유지보수"]

export default function KioskPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <PageHero
          badge="키오스크"
          title="키오스크 주문제작"
          description="쓰는 곳과 하는 일에 맞춰 키오스크를 만듭니다. 외함부터 화면 소프트웨어, 업무 시스템 연결까지 한 회사가 맡습니다."
        >
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/kiosk/quote" className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
              키오스크 견적 문의
            </Link>
            <Link href="/kiosk/erp" className="rounded-xl border border-border bg-card px-6 py-3 font-semibold text-foreground hover:border-primary/40">
              키오스크 + ERP 결합 보기
            </Link>
          </div>
        </PageHero>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">주문제작 범위</h2>
            <p className="mb-8 text-muted-foreground">기성품을 고르는 대신, 필요한 것만 골라 하나로 만듭니다.</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {scope.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
                    <Icon className="mb-4 h-7 w-7 text-primary" />
                    <h3 className="mb-1 font-bold text-foreground">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">제작 유형</h2>
                <p className="text-muted-foreground">설치 환경에 따라 형태가 달라집니다.</p>
              </div>
              <Link href="/kiosk/products" className="inline-flex items-center gap-1 font-semibold text-primary">
                제작 유형 자세히 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {kioskTypes.map((t) => (
                <div key={t.slug} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="mb-2 text-lg font-bold text-foreground">{t.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-3xl bg-accent p-8 text-accent-foreground md:p-12">
              <p className="mb-2 text-sm font-semibold text-white/70">결합 상품</p>
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">키오스크에서 받은 주문이 ERP로 바로 이어집니다</h2>
              <p className="mb-8 max-w-2xl text-white/80">
                주문·결제는 키오스크에서, 재고·매출·정산은 ERP에서. 따로 맞춰 볼 필요 없이 한 흐름으로 만듭니다.
              </p>
              <ol className="mb-8 grid gap-3 md:grid-cols-4">
                {bundleFlow.map((f, i) => (
                  <li key={f.step} className="rounded-xl bg-white/10 p-4">
                    <span className="text-xs font-bold text-white/60">{String(i + 1).padStart(2, "0")}</span>
                    <p className="font-semibold">{f.step}</p>
                  </li>
                ))}
              </ol>
              <Link href="/kiosk/erp" className="inline-flex items-center gap-1.5 rounded-xl bg-white px-5 py-3 font-semibold text-accent">
                결합 상품 자세히 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">제작 절차</h2>
            <ol className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {steps.map((s, i) => (
                <li key={s} className="rounded-xl border border-border bg-card p-4">
                  <span className="text-xs font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-semibold text-foreground">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
