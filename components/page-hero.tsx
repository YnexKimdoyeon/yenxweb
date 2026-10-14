import type { ReactNode } from "react"

// 하위 페이지 공통 상단 소개 영역 (포트폴리오·서비스 페이지와 같은 모양)
export function PageHero({
  badge,
  title,
  description,
  children,
}: {
  badge: string
  title: string
  description: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary to-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 lg:py-20">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {badge}
        </span>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">{description}</p>
        {children}
      </div>
    </section>
  )
}
