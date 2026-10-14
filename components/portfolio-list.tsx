"use client"

import { ChevronDown, Images, MousePointerClick, Play } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { CaseGallery, type GalleryData } from "@/components/case-gallery"
import { DemoModal, type DemoTarget } from "@/components/demo-modal"
import { caseFields, cases, demoHref, type CaseField, type CaseItem } from "@/lib/cases-data"

// /portfolio/software 목록: 분야 탭으로 나눠 보여 주고, 체험판은 팝업으로 띄운다.
// 다른 탭의 사례도 HTML에는 그대로 두고 숨기기만 한다 (검색·AI 노출 유지, #사례 주소로 바로 열림)
export function PortfolioList() {
  const [field, setField] = useState<CaseField>(caseFields[0].id)
  const [gallery, setGallery] = useState<GalleryData | null>(null)
  const [demo, setDemo] = useState<DemoTarget | null>(null)
  const [open, setOpen] = useState<Record<string, boolean>>({})
  const closeGallery = useCallback(() => setGallery(null), [])
  const closeDemo = useCallback(() => setDemo(null), [])

  // #slug 로 들어오면 그 사례가 있는 탭을 열고 스크롤
  useEffect(() => {
    const go = () => {
      const slug = decodeURIComponent(window.location.hash.slice(1))
      const item = cases.find((c) => c.slug === slug)
      if (!item) return
      setField(item.field)
      requestAnimationFrame(() => document.getElementById(slug)?.scrollIntoView({ block: "start" }))
    }
    go()
    window.addEventListener("hashchange", go)
    return () => window.removeEventListener("hashchange", go)
  }, [])

  const openDemo = (e: React.MouseEvent, item: CaseItem) => {
    // 새 창·새 탭으로 열려는 클릭은 그대로 둔다
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    e.preventDefault()
    setDemo({ url: demoHref(item), title: item.title })
  }

  return (
    <section id="cases" className="bg-muted/30 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">대표 프로젝트</h2>
          <p className="mt-1 text-muted-foreground">와이넥스의 대표 프로젝트를 직접 확인해보세요</p>
        </div>

        <div role="tablist" aria-label="분야" className="mb-6 flex gap-2 overflow-x-auto pb-1">
          {caseFields.map((f) => {
            const n = cases.filter((c) => c.field === f.id).length
            const active = field === f.id
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setField(f.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {f.label} <span className={active ? "text-primary-foreground/70" : "text-muted-foreground/60"}>{n}</span>
              </button>
            )
          })}
        </div>

        {caseFields.map((f) => {
          const list = cases.filter((c) => c.field === f.id)
          return (
            <ol key={f.id} role="tabpanel" aria-label={f.label} className={`space-y-4 ${field === f.id ? "" : "hidden"}`}>
              {list.map((item, i) => {
                const Icon = item.icon
                // 목록 순서대로 파랑·보라 번갈아
                const color = i % 2 === 0 ? "#2563EB" : "#7C3AED"
                const stats = [
                  { label: "업무 효율", value: `${item.improvement}↑`, accent: true },
                  { label: "개발 금액", value: item.cost },
                  { label: "소요 기간", value: item.duration },
                ]
                const isOpen = !!open[item.slug]

                return (
                  <li
                    key={item.slug}
                    id={item.slug}
                    className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="grid gap-5 p-4 sm:p-5 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr_auto] lg:items-center lg:gap-7">
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
                          {item.features.map((ft) => (
                            <li key={ft} className="rounded-md border border-border bg-secondary px-2 py-1 text-xs text-foreground">
                              {ft}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-2 md:col-span-2 lg:col-span-1 lg:w-44 lg:grid-cols-1">
                        <a
                          href={demoHref(item)}
                          onClick={(e) => openDemo(e, item)}
                          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          <Play className="h-4 w-4" />
                          체험해보기
                        </a>
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

                    {/* 수치·문제→해결→성과 (SEO/GEO: 항상 렌더, 접힘만 CSS) */}
                    <div
                      id={`${item.slug}-detail`}
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-border bg-secondary/50 p-5">
                          <dl className="mb-5 grid grid-cols-3 gap-2 sm:max-w-lg">
                            {stats.map((s) => (
                              <div key={s.label} className="rounded-lg border border-border bg-card px-2 py-3 text-center">
                                <dt className="mb-1 text-xs text-muted-foreground">{s.label}</dt>
                                <dd className="text-base font-bold text-foreground sm:text-lg" style={s.accent ? { color } : undefined}>
                                  {s.value}
                                </dd>
                              </div>
                            ))}
                          </dl>
                          <div className="grid gap-4 md:grid-cols-3">
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
                          </div>
                          <a
                            href={demoHref(item)}
                            onClick={(e) => openDemo(e, item)}
                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                          >
                            <MousePointerClick className="h-4 w-4" />이 시스템 직접 눌러 보기
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ol>
          )
        })}
      </div>

      <CaseGallery gallery={gallery} onClose={closeGallery} />
      <DemoModal demo={demo} onClose={closeDemo} />
    </section>
  )
}
