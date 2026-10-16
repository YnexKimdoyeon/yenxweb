"use client"

import { ArrowUpRight, Images, Play } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { CaseDetailModal } from "@/components/case-detail-modal"
import { CaseGallery, type GalleryData } from "@/components/case-gallery"
import { DemoModal, type DemoTarget } from "@/components/demo-modal"
import { caseFields, cases, demoHref, type CaseField, type CaseItem } from "@/lib/cases-data"

// 분야 안에서 순서대로 파랑·보라 번갈아
const colorAt = (i: number) => (i % 2 === 0 ? "#2563EB" : "#7C3AED")

// /services 목록: 분야 탭 + 카드 격자. 자세히·체험판은 팝업.
// 다른 탭의 사례와 상세 글도 HTML에는 그대로 두고 숨기기만 한다 (검색·AI 노출 유지, #사례 주소로 바로 열림)
export function PortfolioList() {
  const [field, setField] = useState<CaseField>(caseFields[0].id)
  const [gallery, setGallery] = useState<GalleryData | null>(null)
  const [demo, setDemo] = useState<DemoTarget | null>(null)
  const [detail, setDetail] = useState<{ item: CaseItem; color: string } | null>(null)
  const closeGallery = useCallback(() => setGallery(null), [])
  const closeDemo = useCallback(() => setDemo(null), [])
  const closeDetail = useCallback(() => setDetail(null), [])

  // #slug 로 들어오면 그 사례가 있는 탭을 열고 스크롤
  useEffect(() => {
    const go = () => {
      const slug = decodeURIComponent(window.location.hash.slice(1))
      const item = cases.find((c) => c.slug === slug)
      if (!item) return
      setField(item.field)
      requestAnimationFrame(() => document.getElementById(slug)?.scrollIntoView({ block: "center" }))
    }
    go()
    window.addEventListener("hashchange", go)
    return () => window.removeEventListener("hashchange", go)
  }, [])

  const showDemo = (item: CaseItem) => {
    setDetail(null)
    setDemo({ url: demoHref(item), title: item.title })
  }
  const onDemoClick = (e: React.MouseEvent, item: CaseItem) => {
    // 새 창·새 탭으로 열려는 클릭은 그대로 둔다
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    e.preventDefault()
    showDemo(item)
  }

  return (
    <section id="cases" className="bg-muted/30 py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">대표 프로젝트</h2>
            <p className="mt-1 text-muted-foreground">와이넥스의 대표 프로젝트를 직접 확인해보세요</p>
          </div>
          <div role="tablist" aria-label="분야" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:px-0">
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
        </div>

        {caseFields.map((f) => {
          const list = cases.filter((c) => c.field === f.id)
          return (
            <ul
              key={f.id}
              role="tabpanel"
              aria-label={f.label}
              className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${field === f.id ? "" : "hidden"}`}
            >
              {list.map((item, i) => {
                const Icon = item.icon
                const color = colorAt(i)
                return (
                  <li
                    key={item.slug}
                    id={item.slug}
                    className="group/card flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <button
                      type="button"
                      onClick={() => setGallery({ images: item.images, title: item.title, portrait: item.portrait })}
                      aria-label={`${item.title} 화면 크게 보기`}
                      className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.images[0]}
                        alt={`${item.title} 대표 화면`}
                        loading="lazy"
                        className={`h-full w-full transition-transform duration-500 group-hover/card:scale-[1.03] ${
                          item.portrait ? "object-contain" : "object-cover object-top"
                        }`}
                      />
                      <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
                        <Images className="h-3 w-3" />
                        {item.images.length}
                      </span>
                    </button>

                    <div className="flex flex-1 flex-col p-5">
                      <span
                        className="mb-2.5 inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold"
                        style={{ color, backgroundColor: `${color}14` }}
                      >
                        <Icon className="h-3 w-3" />
                        {item.category}
                      </span>
                      <h3 className="mb-2 text-lg font-bold leading-snug text-foreground">{item.title}</h3>
                      <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>

                      {/* 검색·AI용 상세 글: 화면에는 '자세히' 팝업으로 보여 준다 */}
                      <div className="sr-only">
                        <p>{item.features.join(", ")}</p>
                        <p>문제인식: {item.detail.problem}</p>
                        <p>업무 분석·설계: {item.detail.approach}</p>
                        <p>성과: {item.detail.result}</p>
                      </div>

                      <div className="mt-auto grid grid-cols-[1fr_auto] gap-2">
                        <a
                          href={demoHref(item)}
                          onClick={(e) => onDemoClick(e, item)}
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          <Play className="h-4 w-4" />
                          체험해보기
                        </a>
                        <button
                          type="button"
                          onClick={() => setDetail({ item, color })}
                          className="inline-flex items-center justify-center gap-1 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                        >
                          자세히
                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )
        })}
      </div>

      <CaseDetailModal
        item={detail?.item ?? null}
        color={detail?.color ?? colorAt(0)}
        onClose={closeDetail}
        onDemo={showDemo}
        paused={!!gallery}
        onImage={(item, index) => setGallery({ images: item.images, title: item.title, portrait: item.portrait, start: index })}
      />
      <CaseGallery gallery={gallery} onClose={closeGallery} />
      <DemoModal demo={demo} onClose={closeDemo} />
    </section>
  )
}
