"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Database, Scale, Globe, Code, FileText, Repeat, Bot, ArrowRight, type LucideIcon } from "lucide-react"
import { services } from "@/lib/services-data"

const iconMap: Record<string, LucideIcon> = {
  scale: Scale,
  database: Database,
  globe: Globe,
  code: Code,
  fileText: FileText,
  repeat: Repeat,
  bot: Bot,
}

export function ServicesSection({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              서비스
            </span>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              와이넥스가 만드는 것들
            </h2>
            <p className="text-muted-foreground">
              시작 가격부터 숨기지 않고 적어뒀습니다. 더 궁금한 건 각 서비스에서 확인하세요.
            </p>
          </motion.div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-6 inline-flex w-fit rounded-xl bg-primary/10 p-3 transition-colors group-hover:bg-primary">
                  {Icon && <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />}
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {service.cardTitle}
                </h3>
                <p className="mb-3 font-medium text-accent">
                  {service.cardSubtitle}
                </p>
                <p className="mb-6 flex-1 text-muted-foreground">
                  {service.cardDescription}
                </p>
                <div className="mb-4 flex items-baseline gap-1.5 border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">시작가</span>
                  <span className="text-lg font-bold text-foreground">{service.priceFrom}~</span>
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  자세히 보기
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
