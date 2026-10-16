import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, ImageIcon, Landmark, Ticket } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingKakao } from "@/components/floating-kakao"
import { KioskLogisticsDemo } from "@/components/kiosk-logistics-demo"
import { kioskFields, kioskTypes, publicDeliveries } from "@/lib/kiosk-data"

// 실제 모델 자료가 들어오기 전까지 모델 섹션 숨김
const SHOW_MODELS = false

export const metadata: Metadata = {
  title: "키오스크 주문제작 | 와이넥스 YNEX",
  description:
    "주문·접수·출고·발권·결제 등 필요한 업무에 맞춰 키오스크와 ERP를 함께 설계합니다. 외함 제작부터 화면 개발, 데이터 연동, 설치와 유지보수까지 와이넥스가 직접 맡습니다.",
  alternates: { canonical: "/kiosk" },
}

// 키오스크 진행 절차 (간단판): 첫 단계 현장 진단은 무료
const steps = [
  { title: "현장 방문 진단", desc: "개발자가 직접 가서 키오스크가 받을 일과 놓을 자리를 봅니다.", free: true },
  { title: "사양·외함 설계", desc: "받을 일, 필요한 장비, 연결할 시스템과 외함 형태를 정합니다." },
  { title: "제작·화면 개발", desc: "외함 제작과 키오스크 화면, 관리자 ERP를 함께 만듭니다." },
  { title: "설치·교육·유지보수", desc: "현장에 설치하고 같이 눌러 보며 맞춘 뒤, 운영 중에도 계속 봅니다." },
]

const scope = [
  { title: "하드웨어", items: ["맞춤 외함 디자인", "터치스크린", "바코드·QR 스캐너", "카드리더기", "영수증·번호표 프린터"] },
  { title: "소프트웨어", items: ["키오스크 전용 화면", "관리자 ERP", "모바일·태블릿 화면", "통계·현황판", "사용자·권한 관리"] },
  { title: "연동·운영", items: ["ERP·WMS·POS 연동", "결제·문자·알림 연동", "데이터 이전", "설치·교육", "유지보수"] },
]

export default function KioskPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 lg:pt-20">
        {/* 1. 첫 화면 */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary to-background">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-[1fr_1.1fr] lg:py-20">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-semibold tracking-wide text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                KIOSK × CUSTOM ERP
              </span>
              <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                현장에 맞춘 키오스크,
                <br />
                업무에 맞춘 ERP
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                주문·접수·출고·발권·결제 등 필요한 업무에 맞춰 키오스크와 ERP를 함께 설계합니다. 외함 제작부터 화면 개발, 데이터 연동, 설치와 유지보수까지 와이넥스가 직접 맡습니다.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact?type=kiosk" className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
                  무료 현장 상담 신청
                </Link>
                <a href="#scope" className="rounded-xl border border-border bg-card px-6 py-3 font-semibold text-foreground hover:border-primary/40">
                  제작 가능 범위 보기
                </a>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/kiosk/kiosk-hero.jpg"
              alt="물류 사무실에 놓인 맞춤 제작 스탠드형 키오스크"
              width={1586}
              height={992}
              className="w-full rounded-2xl border border-border shadow-2xl"
            />
          </div>
        </section>

        {/* 2. 제작 분야 */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <p className="mb-2 text-sm font-semibold text-primary">어떤 키오스크를 만드나요?</p>
            <h2 className="mb-3 text-2xl font-bold leading-snug text-foreground md:text-3xl">모든 분야의 키오스크를 주문제작합니다</h2>
            <p className="mb-10 max-w-3xl leading-relaxed text-muted-foreground">
              시중 제품에 업무를 맞추지 않습니다. 받을 일과 놓을 자리에 맞춰 외함과 화면을 새로 만들고, 필요하면 ERP까지 이어 붙입니다.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {kioskFields.map((f) => (
                <div key={f.title} className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="mb-1.5 flex items-center gap-2 font-bold text-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. 공공기관 납품 이력: 자료가 들어오면 표시 */}
        {publicDeliveries.length > 0 && (
        <section className="bg-muted/30 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold text-foreground md:text-3xl">
              <Landmark className="h-7 w-7 text-primary" />
              공공기관 납품 이력
            </h2>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {publicDeliveries.map((d) => (
                  <li key={`${d.org}-${d.item}`} className="rounded-2xl border border-border bg-card p-5">
                    <p className="text-xs font-semibold text-primary">{d.year}</p>
                    <p className="mt-1 font-bold text-foreground">{d.org}</p>
                    <p className="text-sm text-muted-foreground">{d.item}</p>
                  </li>
                ))}
              </ul>
          </div>
        </section>
        )}

        {/* 4. 키오스크 모델: 실제 모델명·사진·규격이 들어오면 SHOW_MODELS 를 켠다 */}
        {SHOW_MODELS && (
        <section id="models" className="scroll-mt-24 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">와이넥스 키오스크 모델</h2>
            <p className="mb-10 text-muted-foreground">형태를 고르고, 화면 크기와 장비는 상담하며 정합니다.</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {kioskTypes.map((t) => (
                <article key={t.slug} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="flex aspect-[4/5] flex-col items-center justify-center gap-2 bg-secondary text-muted-foreground">
                    <ImageIcon className="h-9 w-9" />
                    <span className="text-xs">모델 사진 준비 중</span>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-1.5 font-bold text-foreground">{t.name}</h3>
                    <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
                    <p className="text-xs text-muted-foreground">{t.fits.join(" · ")}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* 5. 물류 현장 적용 예시: 두 화면 연동 체험 */}
        <section className="bg-muted/30 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Ticket className="h-3.5 w-3.5" />
              물류 현장 적용 예시
            </span>
            <h2 className="mb-3 text-2xl font-bold leading-snug text-foreground md:text-3xl">
              키오스크 출고 요청과 지게차 작업을 실시간 연결
            </h2>
            <p className="mb-8 max-w-3xl leading-relaxed text-muted-foreground">
              왼쪽 사무실 키오스크에서 출고 신청을 누르면 오른쪽 지게차 태블릿에 바로 뜹니다. 지게차에서 수락하면 기사님께 도크 위치 문자가 가고, 처리 이력은 ERP에 자동으로 남습니다.
            </p>
            <KioskLogisticsDemo />
            <p className="mt-4 text-sm text-muted-foreground">
              이 화면은 활용 예시 중 하나입니다. 업종과 업무 방식에 따라 장비와 기능을 새롭게 구성합니다.
            </p>
          </div>
        </section>

        {/* 6. 제작 범위 */}
        <section id="scope" className="scroll-mt-24 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-10 text-2xl font-bold text-foreground md:text-3xl">제작 범위</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {scope.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="mb-4 text-lg font-bold text-primary">{s.title}</h3>
                  <ul className="space-y-2.5">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-2 text-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <Link href="/portfolio/kiosk" className="inline-flex items-center gap-1 text-primary hover:underline">
                키오스크 포트폴리오 보기 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-1 text-primary hover:underline">
                연동할 ERP 사례 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 7. 진행 절차 */}
        <section className="bg-muted/30 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-10 text-2xl font-bold text-foreground md:text-3xl">진행 절차</h2>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((st, i) => (
                <li
                  key={st.title}
                  className={`rounded-2xl border bg-card p-6 ${st.free ? "border-primary shadow-lg shadow-primary/10" : "border-border"}`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    {st.free && <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">무료</span>}
                  </div>
                  <h3 className="mb-2 font-bold text-foreground">{st.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{st.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 8. 마지막 문의 */}
        <section className="bg-accent py-16 text-accent-foreground">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">필요한 키오스크가 시중에 없으신가요?</h2>
            <p className="mb-8 leading-relaxed text-white/80">
              사용 목적과 현재 업무만 알려주세요. 개발자가 직접 현장을 확인하고, 키오스크와 ERP를 어떤 구조로 만들면 좋을지 제안해 드립니다.
            </p>
            <Link href="/contact?type=kiosk" className="inline-flex rounded-xl bg-white px-7 py-3.5 font-semibold text-accent hover:bg-white/90">
              무료 현장 상담 신청
            </Link>
            <p className="mt-5 text-sm text-white/60">외함·장비·프로그램·ERP 연동·설치·유지보수를 한 회사가 책임집니다.</p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
