"use client"

import { AnimatePresence, motion } from "framer-motion"
import {
  Boxes,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  LayoutDashboard,
  Truck,
  X,
  ZoomIn,
} from "lucide-react"
import { useCallback, useEffect, useState } from "react"

const cases = [
  {
    category: "관리자 시스템",
    color: "#2563EB",
    icon: LayoutDashboard,
    title: "관리자 시스템 구축",
    description:
      "결재하고, 정산하고, 계약 챙기고, 공지 올리고… 여기저기 흩어져 있던 일을 관리자 화면 하나로 모았습니다.",
    features: [
      "승인·결재·정산·계약 워크플로우 자동화",
      "공지·게시판·문서 통합 관리",
      "권한별 운영 관리자 대시보드",
    ],
    images: [
      "/portfolio/admin-system-s1.png",
      "/portfolio/admin-system-s2.png",
    ],
    improvement: "83%",
    cost: "₩4,500,000",
    duration: "2개월",
  },
  {
    category: "물류 자동화",
    color: "#7C3AED",
    icon: Truck,
    title: "물류 출고·소팅 관리 시스템",
    description:
      "운송장만 찍으면 출고가 알아서 처리됩니다. 입고 분류부터 소팅, 포장까지 현장이 손에 익은 순서 그대로 이어집니다.",
    features: [
      "운송장 기반 출고 자동화",
      "입고 분류·소팅·적재 관리",
      "포장 작업까지 단일 흐름 처리",
    ],
    images: [
      "/portfolio/logistics-sorting-s1.png",
      "/portfolio/logistics-sorting-s2.png",
    ],
    portrait: true,
    improvement: "77%",
    cost: "₩3,000,000",
    duration: "2주",
  },
  {
    category: "운영 관리",
    color: "#2563EB",
    icon: ClipboardList,
    title: "물류 운영 시스템 구축",
    description:
      "작업 일보, 인력 배정, 자원 배치, 지시서까지. 현장 운영에 필요한 일들을 한 화면에서 다 끝낼 수 있게 만들었습니다.",
    features: [
      "작업 일보·작업 지시서 관리",
      "인력 배정·자원 배치 최적화",
      "단일 화면 통합 운영 관리",
    ],
    images: [
      "/portfolio/logistics-ops-s1.png",
      "/portfolio/logistics-ops-s2.png",
      "/portfolio/logistics-ops-s3.png",
    ],
    improvement: "79%",
    cost: "₩6,000,000",
    duration: "2개월",
  },
  {
    category: "재고 관리",
    color: "#7C3AED",
    icon: Boxes,
    title: "상품 재고관리 시스템 구축",
    description:
      "지금 어디에 뭐가 몇 개 남았는지 한눈에. 상품·주문·창고별 재고를 한곳에 모아, 엑셀 여러 개 띄울 일이 없습니다.",
    features: [
      "상품·주문 정보 통합 관리",
      "창고별 재고 실시간 현황",
      "제품 그룹·분류 체계 정리",
    ],
    images: [
      "/portfolio/inventory-s1.png",
      "/portfolio/inventory-s2.png",
    ],
    improvement: "93%",
    cost: "₩4,000,000",
    duration: "2주",
  },
  {
    category: "데이터 크롤링",
    color: "#2563EB",
    icon: Car,
    title: "중고차 매물 크롤링 관리 시스템",
    description:
      "흩어진 중고차 매물을 알아서 긁어모으고, 연식·주행거리·가격을 시세와 나란히 놓고 비교해 줍니다.",
    features: [
      "중고차 매물 데이터 자동 수집",
      "연식·주행거리·가격 시세 분석",
      "차량별 재고 현황 관리",
    ],
    images: [
      "/portfolio/usedcar-crawl-s1.png",
      "/portfolio/usedcar-crawl-s2.png",
      "/portfolio/usedcar-crawl-s3.png",
    ],
    improvement: "80%",
    cost: "₩3,000,000",
    duration: "2주",
  },
]

export function CasesSection() {
  const [gallery, setGallery] = useState<{
    images: string[]
    title: string
    portrait?: boolean
  } | null>(null)
  const [index, setIndex] = useState(0)

  const openGallery = (images: string[], title: string, portrait = false) => {
    setIndex(0)
    setGallery({ images, title, portrait })
  }
  const close = useCallback(() => setGallery(null), [])
  const go = useCallback(
    (dir: number) =>
      setIndex((i) =>
        gallery ? (i + dir + gallery.images.length) % gallery.images.length : i,
      ),
    [gallery],
  )

  useEffect(() => {
    if (!gallery) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      else if (e.key === "ArrowRight") go(1)
      else if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [gallery, close, go])

  return (
    <section id="cases" className="overflow-hidden bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4">
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

        <div className="mx-auto max-w-6xl space-y-20 lg:space-y-28">
          {cases.map((item, index) => {
            const reversed = index % 2 === 1
            const portrait = (item as { portrait?: boolean }).portrait
            const color = item.color
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="grid items-start gap-10 md:grid-cols-2 lg:gap-16"
              >
                {/* Project screenshot — hover/click to open gallery */}
                <div className={reversed ? "md:order-2" : ""}>
                  <button
                    type="button"
                    onClick={() => openGallery(item.images, item.title, !!portrait)}
                    aria-label={`${item.title} 화면 자세히 보기`}
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
                        자세히 보기
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
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              onClick={close}
              aria-label="닫기"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Horizontal slide carousel */}
            <div
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full overflow-hidden rounded-xl shadow-2xl ${
                gallery.portrait ? "max-w-[420px]" : "max-w-5xl"
              }`}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {gallery.images.map((src, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={src}
                    src={src}
                    alt={`${gallery.title} 화면 ${i + 1}`}
                    className="max-h-[82vh] w-full shrink-0 object-contain"
                    draggable={false}
                  />
                ))}
              </div>
            </div>

            {gallery.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    go(-1)
                  }}
                  aria-label="이전 화면"
                  className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:left-6"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    go(1)
                  }}
                  aria-label="다음 화면"
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:right-6"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                <div
                  className="mt-5 flex items-center gap-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="text-sm font-medium text-white/90">
                    {index + 1} / {gallery.images.length}
                  </span>
                  <div className="flex gap-1.5">
                    {gallery.images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setIndex(i)
                        }}
                        aria-label={`${i + 1}번째 화면`}
                        className={`h-2 rounded-full transition-all ${
                          i === index ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
