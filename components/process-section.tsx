"use client"

import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "현장 방문 신청",
    description: "전화 한 통, 카톡 한 줄이면 됩니다.",
    detail:
      "복잡한 양식 채울 필요도, 자료 미리 준비하실 필요도 없습니다. 어떤 점이 불편한지만 편하게 남겨주시면 바로 방문 일정을 잡아 연락드립니다.",
  },
  {
    number: "02",
    title: "무료 현장 방문",
    subtitle: "1~2시간",
    description:
      "개발자가 직접 방문해 업무 흐름을 관찰하고 직원분들과 인터뷰합니다.",
    detail:
      "영업사원이 아니라 실제 개발자가 직접 찾아갑니다. 일이 어떻게 흘러가는지 보고, 담당자분들이 매일 겪는 번거로움을 직접 듣습니다. 비용은 한 푼도 들지 않으니 부담 없이 부르셔도 됩니다.",
  },
  {
    number: "03",
    title: "자동화 포인트 리포트",
    description:
      "어떤 업무를 어떻게 자동화할 수 있는지, 우선순위와 함께 알려드립니다.",
    detail:
      "어디를 자동화할 수 있고, 그러면 뭐가 얼마나 좋아지는지, 무엇부터 손대면 되는지 리포트로 정리해 드립니다. 이것만 받아서 내부 검토용으로 쓰셔도 됩니다.",
  },
  {
    number: "04",
    title: "맞춤 견적 및 제안",
    description: "정말 필요한 기능만, 정직한 견적으로.",
    detail:
      "꼭 필요한 것만 추려서 과하지 않게 제안드립니다. 숨은 비용 없이 금액과 일정을 그대로 알려드리고, 급한 것부터 단계를 나눠 진행할 수도 있습니다.",
  },
  {
    number: "05",
    title: "개발 · 납품 · 교육 · 유지보수",
    description: "개발부터 운영까지 책임지고 함께합니다.",
    detail:
      "설계부터 개발, 납품, 사용 교육까지 한 번에 합니다. 납품 뒤에 생기는 오류나 '이건 좀 바꿔주세요' 같은 요청에도 계속 대응합니다.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function ProcessSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center lg:mb-16"
        >
          <span className="mb-3 inline-block text-sm font-medium text-muted-foreground">
            진행 프로세스
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            고민에서 자동화까지, 5단계
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Lightbulb className="h-4 w-4" />
            와이넥스에 맡기지 않으셔도 됩니다.
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto max-w-3xl"
        >
          {/* Vertical line — passes through center of step circles (left-6 = 24px = half of w-12) */}
          <div
            aria-hidden
            className="absolute left-6 top-6 bottom-6 w-px bg-border sm:left-8"
          />

          {steps.map((step) => (
            <motion.li
              key={step.number}
              variants={itemVariants}
              className="group relative mb-6 flex gap-5 last:mb-0 sm:gap-7"
            >
              {/* Step Number Circle */}
              <div
                className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground shadow-sm ring-4 ring-secondary transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground sm:h-16 sm:w-16 sm:text-xl"
              >
                {step.number}
              </div>

              {/* Card */}
              <div
                className="flex-1 cursor-default rounded-lg border-l-4 border-transparent bg-card p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent group-hover:shadow-lg lg:p-6"
              >
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                    {step.title}
                  </h3>
                  {step.subtitle && (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                      {step.subtitle}
                    </span>
                  )}
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Detail — revealed on hover (card grows ~2x) */}
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
