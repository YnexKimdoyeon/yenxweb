"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, ChevronDown, MousePointerClick, ZoomIn } from "lucide-react"
import Link from "next/link"
import { useCallback, useState } from "react"
import { CaseGallery, type GalleryData } from "@/components/case-gallery"
import { cases, demoHref } from "@/lib/cases-data"

export function CasesSection({
  showHeader = true,
  featured = false,
}: {
  showHeader?: boolean
  featured?: boolean
}) {
  const list = featured ? cases.filter((c) => c.featured) : cases
  const [gallery, setGallery] = useState<GalleryData | null>(null)
  // 사례별 "자세히 보기" 펼침 상태 (slug 기준). 내용은 항상 DOM에 렌더 → CSS로만 접힘
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({})
  const toggleDetail = (slug: string) =>
    setOpenDetails((prev) => ({ ...prev, [slug]: !prev[slug] }))

  const openGallery = (images: string[], title: string, portrait = false) =>
    setGallery({ images, title, portrait })
  const close = useCallback(() => setGallery(null), [])

  return (
    <section id="cases" className="overflow-hidden bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              직접 만든 시스템
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              도입 사례
            </h2>
          </motion.div>
        )}

        <div className="mx-auto max-w-6xl space-y-20 lg:space-y-28">
          {list.map((item, index) => {
            const reversed = index % 2 === 1
            const portrait = (item as { portrait?: boolean }).portrait
            // 목록 순서대로 파랑·보라 번갈아
            const color = index % 2 === 0 ? "#2563EB" : "#7C3AED"
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                id={item.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="grid scroll-mt-24 items-start gap-10 md:grid-cols-2 lg:gap-16"
              >
                {/* Project screenshot: hover/click to open gallery */}
                <div className={reversed ? "md:order-2" : ""}>
                  <button
                    type="button"
                    onClick={() => openGallery(item.images, item.title, !!portrait)}
                    aria-label={`${item.title} 화면 크게 보기`}
                    className={`group relative mx-auto block w-full cursor-pointer ${
                      portrait ? "max-w-[300px]" : ""
                    }`}
                  >
                    <div
                      className="absolute inset-5 -z-10 rounded-2xl opacity-70 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                      style={{ backgroundColor: `${color}3D` }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.images[0]}
                      alt={`${item.title} 대표 화면`}
                      className="relative w-full rounded-xl border border-border shadow-2xl ring-1 ring-black/5"
                    />
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-foreground/0 opacity-0 transition-all duration-300 group-hover:bg-foreground/40 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-background/95 px-4 py-2 text-sm font-semibold text-foreground shadow-lg">
                        <ZoomIn className="h-4 w-4" />
                        화면 크게 보기
                      </span>
                    </span>
                  </button>
                </div>

                {/* Rich content */}
                <div className={`md:sticky md:top-28 ${reversed ? "md:order-1" : ""}`}>
                  <span
                    className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ color, backgroundColor: `${color}14` }}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {item.category}
                  </span>
                  <h3 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  <ul className="mb-8 space-y-2.5">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: `${color}1A` }}
                        >
                          <Check className="h-3 w-3" style={{ color }} />
                        </span>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <dl className="grid max-w-md grid-cols-3 gap-2.5">
                    <div className="rounded-lg border border-border bg-card px-2 py-3 text-center sm:p-3">
                      <dt className="mb-1 text-xs text-muted-foreground">업무 효율</dt>
                      <dd className="text-base font-bold sm:text-lg" style={{ color }}>
                        {item.improvement}↑
                      </dd>
                    </div>
                    <div className="rounded-lg border border-border bg-card px-2 py-3 text-center sm:p-3">
                      <dt className="mb-1 text-xs text-muted-foreground">개발 금액</dt>
                      <dd className="text-base font-bold text-foreground sm:text-lg">
                        {item.cost}
                      </dd>
                    </div>
                    <div className="rounded-lg border border-border bg-card px-2 py-3 text-center sm:p-3">
                      <dt className="mb-1 text-xs text-muted-foreground">소요 기간</dt>
                      <dd className="text-base font-bold text-foreground sm:text-lg">
                        {item.duration}
                      </dd>
                    </div>
                  </dl>

                  {/* 자세히 보기: 문제→해결→성과 상세 (내용은 항상 렌더, 접힘만 CSS) */}
                  <div className="mt-6">
                    <Link
                      href={demoHref(item)}
                      className="mr-2 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <MousePointerClick className="h-4 w-4" />
                      체험해보기
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleDetail(item.slug)}
                      aria-expanded={!!openDetails[item.slug]}
                      aria-controls={`${item.slug}-detail`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {openDetails[item.slug] ? "접기" : "자세히 보기"}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          openDetails[item.slug] ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      id={`${item.slug}-detail`}
                      className={`grid transition-all duration-300 ease-out ${
                        openDetails[item.slug]
                          ? "mt-4 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 rounded-xl border border-border bg-secondary/50 p-5">
                          <div>
                            <h4
                              className="mb-1 text-sm font-bold"
                              style={{ color }}
                            >
                              문제인식 · 도입 전
                            </h4>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {item.detail.problem}
                            </p>
                          </div>
                          <div>
                            <h4
                              className="mb-1 text-sm font-bold"
                              style={{ color }}
                            >
                              업무 분석 · 설계
                            </h4>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {item.detail.approach}
                            </p>
                          </div>
                          <div>
                            <h4
                              className="mb-1 text-sm font-bold"
                              style={{ color }}
                            >
                              성과 도출 · 도입 후
                            </h4>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {item.detail.result}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {featured && (
          <div className="mt-16 flex flex-col items-center gap-3">
            <p className="text-sm text-muted-foreground">
              이 외에도 다양한 도입사례가 있습니다
            </p>
            <Link
              href="/portfolio/software"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
            >
              전체 도입사례 보기
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>

      <CaseGallery gallery={gallery} onClose={close} />
    </section>
  )
}
