import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function VisitCtaBand() {
  return (
    <section className="border-t border-border bg-gradient-to-b from-background to-secondary">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20">
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          어떤 업무든, 일단 듣고 판단해 드립니다
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          개발자가 직접 현장에 방문해 업무를 분석합니다. 첫 방문·분석은 무료입니다.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
        >
          현장 방문 신청하기
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
