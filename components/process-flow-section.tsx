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

type FlowStep = {
  number: string
  title: string
  icon: LucideIcon
  summary: string
  detail: string
}

const flow: FlowStep[] = [
  {
    number: "01",
    title: "문제인식",
    icon: ScanSearch,
    summary: "현장의 진짜 불편함을 찾아냅니다.",
    detail:
      "반복되는 수작업, 엑셀 이중 입력, 사람이 몰려서 생기는 병목까지 — 어디서 시간이 새고 있는지부터 정확히 짚어냅니다.",
  },
  {
    number: "02",
    title: "업무 분석",
    icon: ClipboardList,
    summary: "일이 흘러가는 순서를 뜯어봅니다.",
    detail:
      "누가, 언제, 무엇을 하는지 업무 흐름을 단계별로 정리합니다. 자동화할 지점과 그대로 두어도 되는 지점을 구분합니다.",
  },
  {
    number: "03",
    title: "모듈 설계",
    icon: Boxes,
    summary: "필요한 기능만 블록처럼 설계합니다.",
    detail:
      "ERP·물류·재고·크롤링 등 필요한 기능을 모듈로 나눠 설계합니다. 나중에 기능을 더하거나 빼기 쉽게 구조를 잡습니다.",
  },
  {
    number: "04",
    title: "화면 생성",
    icon: MonitorSmartphone,
    summary: "직원이 바로 쓸 수 있는 화면을 만듭니다.",
    detail:
      "복잡한 매뉴얼 없이도 쓸 수 있도록, 실제 업무 순서 그대로 화면을 구성합니다. PC와 모바일 어디서나 동작합니다.",
  },
  {
    number: "05",
    title: "포인트 추출",
    icon: Target,
    summary: "효과가 큰 개선 포인트를 뽑아냅니다.",
    detail:
      "데이터가 쌓이면 어디를 더 손보면 좋은지 보입니다. 우선순위가 높은 자동화 포인트를 리포트로 정리해 드립니다.",
  },
  {
    number: "06",
    title: "성과 도출",
    icon: TrendingUp,
    summary: "줄어든 시간과 비용을 숫자로 확인합니다.",
    detail:
      "도입 전후를 비교해 업무 시간·오류·비용이 얼마나 줄었는지 실제 수치로 보여드립니다. 다음 개선의 기준이 됩니다.",
  },
]

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
              const Icon = step.icon
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
