"use client"

import { motion } from "framer-motion"
import { Clock, FileCheck, MessageSquare, Star } from "lucide-react"

const stats = [
  { value: "4.9 / 5.0", label: "크몽 평점" },
  { value: "343건+", label: "누적 의뢰" },
  { value: "3일 이내", label: "평균 방문까지 영업일" },
  { value: "전국", label: "현장 방문 가능 지역" },
]

const badges = [
  { icon: Clock, label: "응답 1시간 이내" },
  { icon: MessageSquare, label: "언제나 상담 가능" },
  { icon: FileCheck, label: "세금계산서 발행" },
  { icon: Star, label: "크몽 4.9★ 343 리뷰" },
]

export function TrustSection() {
  return (
    <section className="bg-background py-24">
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
            신뢰 지표
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            숫자로 보는 와이넥스
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-card to-secondary/40 md:grid-cols-4 md:divide-x md:divide-border">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="px-4 py-8 text-center"
            >
              <div className="mb-2 inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-2xl font-extrabold text-primary sm:text-3xl md:text-4xl">
                {index === 0 && (
                  <Star className="h-5 w-5 fill-[#D4A24C] text-[#D4A24C] sm:h-6 sm:w-6" />
                )}
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-border bg-muted/30 px-4 py-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card hover:shadow-md"
              >
                <badge.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
