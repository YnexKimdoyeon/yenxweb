"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

export interface GalleryData {
  images: string[]
  title: string
  portrait?: boolean
  start?: number // 처음 보여 줄 장
}

// 사례 화면 크게 보기 (가로 슬라이드)
export function CaseGallery({
  gallery,
  onClose,
}: {
  gallery: GalleryData | null
  onClose: () => void
}) {
  const [index, setIndex] = useState(0)
  const go = useCallback(
    (dir: number) =>
      setIndex((i) =>
        gallery ? (i + dir + gallery.images.length) % gallery.images.length : i,
      ),
    [gallery],
  )

  useEffect(() => {
    setIndex(gallery?.start ?? 0)
  }, [gallery])

  useEffect(() => {
    if (!gallery) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      else if (e.key === "ArrowRight") go(1)
      else if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [gallery, onClose, go])

  return (
    <AnimatePresence>
      {gallery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={onClose}
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
  )
}
