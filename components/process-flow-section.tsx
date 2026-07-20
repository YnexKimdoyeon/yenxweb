"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  ScanSearch,
  ClipboardList,
  Boxes,
  MonitorSmartphone,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react"
import { useRef } from "react"
import { processFlow } from "@/lib/process-flow-data"

// 단계 번호 → 아이콘 매핑 (텍스트는 lib/process-flow-data.ts 단일 출처에서 공유)
const stepIcons: Record<string, LucideIcon> = {
  "01": ScanSearch,
  "02": ClipboardList,
  "03": Boxes,
  "04": MonitorSmartphone,
  "05": Target,
  "06": TrendingUp,
}

const flow = processFlow

export function ProcessFlowSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  // Track scroll through the timeline so the connecting line fills as you scroll.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 55%"],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="overflow-hidden bg-gradient-to-b from-background to-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center lg:mb-20"
        >
          <span className="mb-3 inline-block text-sm font-medium text-muted-foreground">
            도입 프로세스
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            문제인식부터 성과 도출까지, 한 흐름으로
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            와이넥스는 이 6단계를 그대로 밟으며 시스템을 만듭니다. 아래로 내려가며 확인해 보세요.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative mx-auto max-w-3xl">
          {/* Base line */}
          <div
            aria-hidden
            className="absolute left-6 top-6 bottom-6 w-0.5 bg-border sm:left-8"
          />
          {/* Progress fill line — grows as you scroll */}
          <motion.div
            aria-hidden
            style={{ height: lineHeight }}
            className="absolute left-6 top-6 w-0.5 origin-top bg-gradient-to-b from-primary to-accent sm:left-8"
          />

          <ol className="relative space-y-8 sm:space-y-10">
            {flow.map((step) => {
              const Icon = stepIcons[step.number]
              return (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="group relative flex gap-5 sm:gap-7"
                >
                  {/* Icon Circle */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm ring-4 ring-background transition-colors duration-300 group-hover:bg-accent sm:h-16 sm:w-16">
                    <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/40 group-hover:shadow-lg lg:p-6">
                    <div className="mb-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-sm font-bold text-primary">{step.number}</span>
                      <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-medium leading-relaxed text-foreground/90">
                      {step.summary}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.detail}
                    </p>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
