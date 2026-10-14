"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Check, MessageCircle, Play, X } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import type { CaseItem } from "@/lib/cases-data"

// 포트폴리오 카드의 '자세히': 수치·화면·문제→설계→성과를 한 팝업에
export function CaseDetailModal({
  item,
  color,
  onClose,
  onDemo,
  onImage,
  paused = false,
}: {
  item: CaseItem | null
  color: string
  onClose: () => void
  onDemo: (item: CaseItem) => void
  onImage: (item: CaseItem, index: number) => void
  paused?: boolean // 위에 화면 크게 보기가 떠 있으면 Esc 는 그쪽만 닫는다
}) {
  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    if (!paused) window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [item, onClose, paused])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
            className="relative max-h-[92dvh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-background shadow-2xl sm:rounded-3xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="닫기"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6 sm:p-8">
              <span
                className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ color, backgroundColor: `${color}14` }}
              >
                <item.icon className="h-3.5 w-3.5" />
                {item.category}
              </span>
              <h2 className="mb-2 pr-10 text-2xl font-bold leading-snug text-foreground sm:text-3xl">{item.title}</h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">{item.description}</p>

              <dl className="mb-6 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  ["업무 효율", `${item.improvement}↑`, true],
                  ["개발 금액", item.cost, false],
                  ["소요 기간", item.duration, false],
                ].map(([label, value, accent]) => (
                  <div key={label as string} className="rounded-2xl bg-secondary px-2 py-4 text-center">
                    <dt className="mb-1 text-xs text-muted-foreground sm:text-sm">{label}</dt>
                    <dd className="text-lg font-bold text-foreground sm:text-2xl" style={accent ? { color } : undefined}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
                {item.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => onImage(item, i)}
                    aria-label={`${item.title} 화면 ${i + 1} 크게 보기`}
                    className="shrink-0 overflow-hidden rounded-xl border border-border transition-opacity hover:opacity-80"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" loading="lazy" className="h-28 w-44 object-cover object-top sm:h-32 sm:w-52" />
                  </button>
                ))}
              </div>

              <div className="mb-6 grid gap-5 md:grid-cols-3">
                {[
                  ["문제인식", item.detail.problem],
                  ["업무 분석 · 설계", item.detail.approach],
                  ["성과", item.detail.result],
                ].map(([h, body], i) => (
                  <div key={h}>
                    <h3 className="mb-1.5 flex items-center gap-2 text-sm font-bold" style={{ color }}>
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-full text-[11px] text-white"
                        style={{ backgroundColor: color }}
                      >
                        {i + 1}
                      </span>
                      {h}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                ))}
              </div>

              <ul className="mb-7 grid gap-2 sm:grid-cols-2">
                {item.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => onDemo(item)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Play className="h-4 w-4" />
                  체험판 직접 눌러 보기
                </button>
                <Link
                  href={`/contact?from=${item.slug}`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border px-5 py-3 font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  이런 시스템 문의하기
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
