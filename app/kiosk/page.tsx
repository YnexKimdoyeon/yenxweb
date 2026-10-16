import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Cable,
  Factory,
  Hospital,
  LayoutDashboard,
  MonitorSmartphone,
  PartyPopper,
  Store,
  Ticket,
  UtensilsCrossed,
  Wrench,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingKakao } from "@/components/floating-kakao"
import { KioskLogisticsDemo } from "@/components/kiosk-logistics-demo"

export const metadata: Metadata = {
  title: "키오스크 주문제작 | 와이넥스 YNEX",
  description:
    "주문·접수·출고·발권·결제 등 필요한 업무에 맞춰 키오스크와 ERP를 함께 설계합니다. 외함 제작부터 화면 개발, 데이터 연동, 설치와 유지보수까지 와이넥스가 직접 맡습니다.",
  alternates: { canonical: "/kiosk" },
}

const differences = [
  {
    icon: Wrench,
    title: "키오스크 주문제작",
    desc: "설치 장소와 사용 목적에 맞춰 스탠드형·벽걸이형·테이블형·매립형 외함을 설계합니다. 터치스크린, 바코드 스캐너, 영수증 프린터, 카드리더기 등 필요한 장비만 구성합니다.",
  },
  {
    icon: MonitorSmartphone,
    title: "전용 화면 개발",
    desc: "사용자가 헤매지 않도록 실제 업무 순서에 맞춘 화면을 개발합니다. 접수·주문·결제·발권·출고 요청처럼 현장마다 다른 절차를 그대로 구현합니다.",
  },
  {
    icon: LayoutDashboard,
    title: "맞춤 ERP 구축",
    desc: "키오스크에서 입력된 데이터가 관리자 ERP에 즉시 반영됩니다. 매출, 주문, 재고, 고객, 작업 현황과 통계를 한곳에서 관리합니다.",
  },
  {
    icon: Cable,
    title: "기존 시스템 연동",
    desc: "이미 사용 중인 ERP·WMS·POS·그룹웨어가 있다면 API 또는 데이터 연동 방식으로 연결합니다. 기존 시스템을 유지한 채 필요한 기능만 확장할 수도 있습니다.",
  },
]

const flow = [
  "고객·직원이 키오스크에서 업무 등록",
  "데이터가 ERP에 실시간 반영",
  "담당자에게 작업·처리 요청 전달",
  "재고·매출·상태 자동 업데이트",
  "관리자 화면에서 현황과 통계 확인",
]

const places = [
  { icon: UtensilsCrossed, title: "식당·카페", desc: "주문·결제·대기번호·매출·재고 관리" },
  { icon: Hospital, title: "병원·검진센터", desc: "접수·문진·순번표·환자 호출" },
  { icon: Factory, title: "공장·물류센터", desc: "출고 요청·작업 지시·지게차 배차·WMS 연동" },
  { icon: Store, title: "무인매장", desc: "상품 조회·결제·회원 인증·원격 관리" },
  { icon: Building2, title: "관공서·안내시설", desc: "민원 접수·번호표·시설 안내·증명서 출력" },
  { icon: PartyPopper, title: "행사·전시장", desc: "참가 등록·티켓 발권·QR 확인·현장 통계" },
]

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
                <Link href="/kiosk/quote" className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90">
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

        {/* 2. 무엇이 다른가요? */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <p className="mb-2 text-sm font-semibold text-primary">무엇이 다른가요?</p>
            <h2 className="mb-10 text-2xl font-bold leading-snug text-foreground md:text-3xl">
              키오스크 한 대가 아니라,
              <br />
              업무가 돌아가는 시스템을 만듭니다
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {differences.map((d) => {
                const Icon = d.icon
                return (
                  <div key={d.title} className="rounded-2xl border border-border bg-card p-6">
                    <Icon className="mb-4 h-7 w-7 text-primary" />
                    <h3 className="mb-2 text-lg font-bold text-foreground">{d.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{d.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 3. 하나의 흐름 */}
        <section className="bg-muted/30 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-10 text-2xl font-bold text-foreground md:text-3xl">한 번 입력하고, 모든 업무가 이어집니다</h2>
            <ol className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {flow.map((f, i) => (
                <li key={f} className="rounded-xl border border-border bg-card p-5">
                  <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <p className="font-semibold leading-snug text-foreground">{f}</p>
                </li>
              ))}
            </ol>
            <p className="rounded-xl bg-primary/5 px-5 py-4 leading-relaxed text-foreground">
              키오스크 따로, 관리 프로그램 따로 맞출 필요가 없습니다. 처음부터 하나의 흐름으로 설계하기 때문에 입력 누락과 중복 업무를 줄일 수 있습니다.
            </p>
          </div>
        </section>

        {/* 4. 적용 분야 */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-10 text-2xl font-bold text-foreground md:text-3xl">이런 곳에 적용할 수 있습니다</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {places.map((pl) => {
                const Icon = pl.icon
                return (
                  <div key={pl.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="mb-1 font-bold text-foreground">{pl.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{pl.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

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
              <Link href="/kiosk/products" className="inline-flex items-center gap-1 text-primary hover:underline">
                제작 유형 보기 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/kiosk/erp" className="inline-flex items-center gap-1 text-primary hover:underline">
                키오스크 + ERP 결합 보기 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-1 text-primary hover:underline">
                ERP 체험판 보기 <ArrowRight className="h-4 w-4" />
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
            <Link href="/kiosk/quote" className="inline-flex rounded-xl bg-white px-7 py-3.5 font-semibold text-accent hover:bg-white/90">
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
