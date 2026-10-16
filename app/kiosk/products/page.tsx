import type { Metadata } from "next"
import Link from "next/link"
import { Check, ImageIcon } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingKakao } from "@/components/floating-kakao"
import { PageHero } from "@/components/page-hero"
import { kioskSpecFields, kioskTypes } from "@/lib/kiosk-data"

export const metadata: Metadata = {
  title: "키오스크 제작 유형 및 제품 | 와이넥스 YNEX",
  description: "스탠드형, 벽걸이형, 테이블형, 카운터 일체형 등 설치 환경에 맞춘 와이넥스 키오스크 제작 유형.",
  alternates: { canonical: "/kiosk/products" },
}

export default function KioskProductsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <PageHero
          badge="키오스크"
          title="제작 유형 및 제품"
          description="설치 환경에 맞춰 형태를 고르고, 화면 크기와 모듈은 상담하며 정합니다. 세부 규격은 상담 후 확정합니다."
        />
        <section className="py-16">
          <div className="mx-auto max-w-6xl space-y-6 px-4">
            {kioskTypes.map((t) => (
              <article key={t.slug} id={t.slug} className="grid scroll-mt-24 gap-6 rounded-2xl border border-border bg-card p-5 md:grid-cols-[280px_1fr] md:p-6">
                <div className="flex aspect-[4/5] flex-col items-center justify-center gap-2 rounded-xl bg-secondary text-muted-foreground">
                  <ImageIcon className="h-10 w-10" />
                  <span className="text-sm">제품 사진 준비 중</span>
                </div>
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-foreground">{t.name}</h2>
                  <p className="mb-4 leading-relaxed text-muted-foreground">{t.summary}</p>
                  <p className="mb-2 text-sm font-semibold text-foreground">잘 맞는 곳</p>
                  <ul className="mb-5 flex flex-wrap gap-2">
                    {t.fits.map((f) => (
                      <li key={f} className="inline-flex items-center gap-1 rounded-md bg-primary/5 px-2.5 py-1 text-sm text-primary">
                        <Check className="h-3.5 w-3.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <dl className="grid gap-2 sm:grid-cols-2">
                    {kioskSpecFields.map((f) => (
                      <div key={f} className="rounded-lg bg-secondary px-3 py-2 text-sm">
                        <dt className="text-xs text-muted-foreground">{f}</dt>
                        <dd className="text-muted-foreground/70">규격 자료 준비 중</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
            <p className="pt-4 text-center text-muted-foreground">
              원하는 형태나 필요한 기능을 알려 주시면 사양을 함께 정합니다.{" "}
              <Link href="/contact?type=kiosk" className="font-semibold text-primary hover:underline">
                키오스크 견적 문의
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
