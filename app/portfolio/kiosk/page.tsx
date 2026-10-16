import type { Metadata } from "next"
import Link from "next/link"
import { ImageIcon } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingKakao } from "@/components/floating-kakao"
import { PageHero } from "@/components/page-hero"
import { kioskCaseFields, kioskSpecFields, kioskTypes } from "@/lib/kiosk-data"

export const metadata: Metadata = {
  title: "키오스크 포트폴리오 | 와이넥스 YNEX",
  description: "와이넥스 키오스크 제작 사례. 실물 사진과 외함 디자인, 디스플레이 규격, 사용 모듈, 설치 환경을 함께 보여 드립니다.",
  alternates: { canonical: "/portfolio/kiosk" },
}

export default function KioskPortfolioPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <PageHero
          badge="키오스크"
          title="키오스크 포트폴리오"
          description="실물 사진 중심으로 제작·납품 사례를 정리합니다. 사례마다 고객의 문제, 와이넥스의 해결, 성과와 견적·기간, 외함·규격을 함께 적습니다."
        />
        <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-6 flex flex-wrap gap-2">
              {["전체", ...kioskTypes.map((t) => t.name)].map((label, i) => (
                <span
                  key={label}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                    i === 0 ? "bg-primary text-primary-foreground" : "border border-border bg-card text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {kioskTypes.map((t) => (
                <article key={t.slug} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="flex aspect-[4/5] flex-col items-center justify-center gap-2 bg-secondary text-muted-foreground">
                    <ImageIcon className="h-10 w-10" />
                    <span className="text-sm">실물 사진 준비 중</span>
                  </div>
                  <div className="p-5">
                    <p className="mb-1 text-xs font-semibold text-primary">{t.name}</p>
                    <h2 className="mb-3 font-bold text-foreground">제작 사례 정리 중</h2>
                    <dl className="space-y-1.5 text-sm">
                      {[...kioskCaseFields, ...kioskSpecFields].map((f) => (
                        <div key={f} className="flex justify-between gap-3">
                          <dt className="text-muted-foreground">{f}</dt>
                          <dd className="text-muted-foreground/70">자료 준비 중</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-10 text-center text-muted-foreground">
              제작 사례를 정리하고 있습니다. 원하는 형태가 있으시면{" "}
              <Link href="/contact?type=kiosk" className="font-semibold text-primary hover:underline">
                현장 방문 · 견적 신청
              </Link>
              로 먼저 알려 주세요.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
