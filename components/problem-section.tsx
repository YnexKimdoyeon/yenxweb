"use client"

import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

const problems = [
  {
    num: "01",
    title: "패키지 ERP만 팔려고 한다",
    description: "기능은 많은데 정작 우리 회사에 맞는 건 없습니다.",
  },
  {
    num: "02",
    title: "내 업무 모르고 견적부터 들이민다",
    description: "현장도 안 보고 어떻게 가격을 알 수 있을까요.",
  },
  {
    num: "03",
    title: "뭘 자동화하고 어디에 AI를 써야 할지 모른다",
    description: "디지털 전환·AI 도입, 어디서부터 시작해야 할지 막막합니다.",
  },
  {
    num: "04",
    title: "도입 후엔 못 쓰는 기능만 가득",
    description: "교육도 없이 던져두고 연락이 끊깁니다.",
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[#0F1B3C] py-24 text-white lg:py-32">
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 0%, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 0%, black, transparent 80%)",
          }}
        />
        <div className="absolute left-1/2 -top-24 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9AA8E0]" />
            이런 고민, 있으셨죠?
          </span>
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            ERP 업체 만나기 전에
            <br />
            <span className="text-white/40">답답했던 것들</span>
          </h2>
        </motion.div>

        {/* Grid with hairline dividers */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.num}
              variants={itemVariants}
              className="group relative overflow-hidden bg-[#0F1B3C] p-7 transition-colors duration-300 hover:bg-white/[0.04] lg:p-9"
            >
              {/* Watermark number */}
              <span className="pointer-events-none absolute -right-2 -top-5 select-none text-8xl font-black text-white/[0.04] transition-colors duration-300 group-hover:text-white/[0.07]">
                {problem.num}
              </span>

              <span className="text-sm font-bold tracking-[0.2em] text-[#9AA8E0]">
                {problem.num}
              </span>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-white lg:text-2xl">
                {problem.title}
              </h3>
              <p className="mt-2 leading-relaxed text-white/55">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bridge to solution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-col items-center gap-3 text-center"
        >
          <span className="text-base text-white/60 sm:text-lg">
            그래서 와이넥스는, <span className="font-semibold text-white">다르게 일합니다.</span>
          </span>
          <ArrowDown className="h-5 w-5 animate-bounce text-[#9AA8E0]" />
        </motion.div>
      </div>
    </section>
  )
}
