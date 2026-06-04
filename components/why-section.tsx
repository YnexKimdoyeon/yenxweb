"use client"

import { MapPin, Wrench, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

const differentiators = [
  {
    icon: MapPin,
    title: "현장 방문 분석",
    description:
      "영업사원 대신 개발자가 직접 사무실로 갑니다. 일이 어떻게 돌아가는지 두 눈으로 보고, 직원분들 얘기를 직접 듣습니다.",
  },
  {
    icon: Wrench,
    title: "100% 맞춤 개발",
    description:
      "규모도, 업종도, 일하는 방식도 회사마다 다르니까요. 정말 필요한 기능만, 패키지 끼워팔기 없이 만듭니다.",
  },
  {
    icon: ShieldCheck,
    title: "책임지는 유지보수",
    description:
      "납품하고 끝이 아닙니다. 쓰다 보면 생기는 문제, 바꾸고 싶은 부분까지 끝까지 같이 챙깁니다.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function WhySection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center lg:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            와이넥스의 차별점
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            와이넥스는 다르게 일합니다
          </h2>
        </motion.div>

        {/* Split: Video (left) + Stacked Cards (right) */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted lg:aspect-auto lg:h-full lg:min-h-[480px]"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/why-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="와이넥스의 일하는 방식 소개 영상"
            />
          </motion.div>

          {/* Right: Differentiator Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            {differentiators.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="group flex gap-5 rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
