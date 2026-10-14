"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, X } from "lucide-react"
import { useEffect } from "react"

export interface DemoTarget {
  url: string
  title: string
}

// 체험판을 페이지 이동 없이 팝업(iframe)으로 띄운다
export function DemoModal({ demo, onClose }: { demo: DemoTarget | null; onClose: () => void }) {
  useEffect(() => {
    if (!demo) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    // 체험판 안의 "← 포트폴리오"를 누르면 체험판이 닫아 달라고 알려 온다 (public/demos/_shared/demo.js)
    const onMessage = (e: MessageEvent) => {
      if (e.origin === window.location.origin && e.data === "ynex-demo-close") onClose()
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("message", onMessage)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("message", onMessage)
      document.body.style.overflow = ""
    }
  }, [demo, onClose])

  return (
    <AnimatePresence>
      {demo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-0 backdrop-blur-sm sm:p-6"
        >
          <motion.div
            initial={{ scale: 0.98, y: 8 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.98, y: 8 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${demo.title} 체험판`}
            className="flex h-full w-full max-w-[1600px] flex-col overflow-hidden bg-background shadow-2xl sm:h-[92vh] sm:rounded-2xl"
          >
            <div className="flex shrink-0 items-center gap-3 border-b border-border px-4 py-2.5">
              <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">체험판</span>
              <p className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground">{demo.title}</p>
              <a
                href={demo.url}
                target="_blank"
                rel="noopener"
                className="hidden items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
              >
                <ExternalLink className="h-4 w-4" />새 창으로 열기
              </a>
              <button
                type="button"
                onClick={onClose}
                aria-label="체험판 닫기"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <iframe key={demo.url} src={demo.url} title={`${demo.title} 체험판`} className="w-full flex-1 border-0 bg-white" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
