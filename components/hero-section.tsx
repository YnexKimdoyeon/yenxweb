"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 lg:pt-20">
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.5,
            maskImage:
              "radial-gradient(ellipse 75% 60% at 72% 18%, black, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 60% at 72% 18%, black, transparent 78%)",
          }}
        />
        <div className="absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-40 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-0">
          {/* Left: Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            <motion.span
              variants={item}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3.5 py-1.5 text-sm font-medium text-accent"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              전국 무료 현장 방문 서비스
            </motion.span>

            <motion.h1
              variants={item}
              className="mb-6 text-[2.6rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-6xl lg:text-[4.25rem]"
            >
              고민하지 마세요.
              <br />
              저희가{" "}
              <span className="relative inline-block whitespace-nowrap text-primary">
                직접 찾아갑니다.
                <svg
                  aria-hidden
                  viewBox="0 0 320 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full text-accent/70"
                >
                  <path
                    d="M3 8.5 C 90 2, 230 2, 317 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
              >
                현장 방문 신청하기
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#cases"
                className="inline-flex items-center gap-1.5 text-base font-medium text-foreground transition-colors hover:text-primary"
              >
                도입 사례 보기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Framed photo + trust cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />

              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border/60 bg-muted shadow-2xl">
                <Image
                  src="/hero-team.png"
                  alt="노트북을 들고 사무실을 방문해 업무를 분석하는 와이넥스 개발자"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />
              </div>

              {/* Floating: rating */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-2 -top-5 flex items-center gap-3 rounded-2xl border border-border/70 bg-background/95 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-6 sm:top-6"
              >
                <div className="flex items-center gap-0.5 text-[#D4A24C]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-foreground">4.9 / 5.0</div>
                  <div className="text-xs text-muted-foreground">크몽 실제 후기</div>
                </div>
              </motion.div>

              {/* Floating: count */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -right-1 rounded-2xl border border-border/70 bg-background/95 px-5 py-3.5 shadow-xl backdrop-blur-md sm:-bottom-5 sm:right-4"
              >
                <div className="text-2xl font-extrabold leading-none text-primary">
                  343
                  <span className="text-base">건+</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">누적 의뢰</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
