"use client"

import { ChevronDown, Images, MousePointerClick, Play } from "lucide-react"
import Link from "next/link"
import { useCallback, useState } from "react"
import { CaseGallery, type GalleryData } from "@/components/case-gallery"
import { cases, demoHref } from "@/lib/cases-data"

// /portfolio 목록형: 한 줄에 사례 하나, 모든 사례에 체험판 버튼
export function PortfolioList() {
  const [gallery, setGallery] = useState<GalleryData | null>(null)
  const [open, setOpen] = useState<Record<string, boolean>>({})
  const close = useCallback(() => setGallery(null), [])

  return (
    <section id="cases" className="bg-muted/30 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              대표 프로젝트
            </h2>
            <p className="mt-1 text-muted-foreground">
              모든 시스템을 가상 데이터로 직접 눌러 볼 수 있습니다.
            </p>
          </div>
        </div>

        <ol className="space-y-4">
          {cases.map((item, i) => {
            const Icon = item.icon
            const color = item.color
            const stats = [
              item.improvement && { label: "업무 효율", value: `${item.improvement}↑`, accent: true },
              item.cost && { label: "개발 금액", value: item.cost },
              item.duration && { label: "소요 기간", value: item.duration },
            ].filter(Boolean) as { label: string; value: string; accent?: boolean }[]
            const isOpen = !!open[item.slug]

            return (
              <li
                key={item.slug}
                id={item.slug}
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="grid gap-5 p-4 sm:p-5 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr_auto] lg:items-center lg:gap-7">
                  {/* 대표 화면 (없으면 체험판 표지) */}
                  {item.images.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => setGallery({ images: item.images, title: item.title, portrait: item.portrait })}
                      aria-label={`${item.title} 화면 크게 보기`}
                      className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.images[0]}
                        alt={`${item.title} 대표 화면`}
                        loading="lazy"
                        className={`h-full w-full transition-transform duration-300 group-hover:scale-105 ${
                          item.portrait ? "object-contain" : "object-cover object-top"
                        }`}
                      />
                      <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
                        <Images className="h-3 w-3" />
                        {item.images.length}
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={demoHref(item)}
                      className="group relative flex aspect-[16/10] flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-border"
                      style={{ backgroundColor: `${color}12` }}
                    >
                      <Icon className="h-10 w-10 transition-transform group-hover:scale-110" style={{ color }} />
                      <span className="text-sm font-semibold" style={{ color }}>
                        체험판 열기
                      </span>
                    </Link>
                  )}

                  <div className="min-w-0">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold"
                        style={{ color, backgroundColor: `${color}14` }}
                      >
                        <Icon className="h-3 w-3" />
                        {item.category}
                      </span>
                    </div>
                    <h3 className="mb-1.5 text-lg font-bold text-foreground md:text-xl">{item.title}</h3>
                    <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {item.features.map((f) => (
                        <li
                          key={f}
                          className="rounded-md border border-border bg-secondary px-2 py-1 text-xs text-foreground"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 md:col-span-2 lg:col-span-1 lg:w-52">
                    {stats.length > 0 && (
                      <dl className="grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-1.5">
                        {stats.map((s) => (
                          <div
                            key={s.label}
                            className="flex flex-col items-center rounded-lg bg-secondary px-2 py-2 lg:flex-row lg:justify-between lg:px-3 lg:py-1.5"
                          >
                            <dt className="text-xs text-muted-foreground">{s.label}</dt>
                            <dd className="text-sm font-bold" style={s.accent ? { color } : undefined}>
                              {s.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}
                    <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
                      <Link
                        href={demoHref(item)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        <Play className="h-4 w-4" />
                        체험해보기
                      </Link>
                      <button
                        type="button"
                        onClick={() => setOpen((p) => ({ ...p, [item.slug]: !p[item.slug] }))}
                        aria-expanded={isOpen}
                        aria-controls={`${item.slug}-detail`}
                        className="inline-flex items-center justify-center gap-1 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {isOpen ? "접기" : "자세히"}
                        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* 문제→해결→성과 (SEO/GEO: 항상 렌더, 접힘만 CSS) */}
                <div
                  id={`${item.slug}-detail`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-4 border-t border-border bg-secondary/50 p-5 md:grid-cols-3">
                      {[
                        ["문제인식", item.detail.problem],
                        ["업무 분석 · 설계", item.detail.approach],
                        ["성과", item.detail.result],
                      ].map(([h, body]) => (
                        <div key={h}>
                          <h4 className="mb-1 text-sm font-bold" style={{ color }}>
                            {h}
                          </h4>
                          <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                        </div>
                      ))}
                      <Link
                        href={demoHref(item)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline md:col-span-3"
                      >
                        <MousePointerClick className="h-4 w-4" />
                        이 시스템 직접 눌러 보기
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <CaseGallery gallery={gallery} onClose={close} />
    </section>
  )
}
