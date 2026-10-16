import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Monitor, MousePointerClick } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingKakao } from "@/components/floating-kakao"
import { PageHero } from "@/components/page-hero"
import { cases } from "@/lib/cases-data"

export const metadata: Metadata = {
  title: "포트폴리오 | 와이넥스 YNEX",
  description: "와이넥스가 만든 ERP·업무자동화 시스템과 키오스크 포트폴리오. 사업별로 나눠 보실 수 있습니다.",
  alternates: { canonical: "/portfolio" },
}

const choices = [
  {
    href: "/services",
    icon: MousePointerClick,
    badge: "ERP·업무자동화",
    title: "ERP 구축 사례",
    desc: "프로젝트별 상세 구축 사례입니다. 고객 업종, 개발 기능, 업무 개선 효과를 보고, 대부분의 시스템은 체험판으로 직접 눌러 볼 수 있습니다.",
    meta: `구축 사례 ${cases.length}건`,
  },
  {
    href: "/portfolio/kiosk",
    icon: Monitor,
    badge: "키오스크",
    title: "키오스크 포트폴리오",
    desc: "실물 사진 중심의 제품 갤러리입니다. 외함 디자인, 디스플레이 규격, 사용 모듈, 설치 환경을 함께 정리합니다.",
    meta: "제작 사례 정리 중",
  },
]

export default function PortfolioChooserPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <PageHero badge="포트폴리오" title="어떤 사례를 보시겠어요?" description="소프트웨어 개발과 키오스크 제작 사례를 나눠서 정리했습니다." />
        <section className="bg-muted/30 py-16">
          <div className="mx-auto grid max-w-5xl gap-5 px-4 md:grid-cols-2">
            {choices.map((c) => {
              const Icon = c.icon
              return (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="mb-1 text-sm font-semibold text-primary">{c.badge}</span>
                  <h2 className="mb-2 text-2xl font-bold text-foreground">{c.title}</h2>
                  <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">{c.desc}</p>
                  <span className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{c.meta}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-primary">
                      보러 가기 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
