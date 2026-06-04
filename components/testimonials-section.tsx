"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { reviews, type Review } from "@/components/reviews-data"

const row1 = reviews.filter((_, i) => i % 2 === 0)
const row2 = reviews.filter((_, i) => i % 2 === 1)

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:w-[340px]">
      <div className="mb-3 flex items-center gap-0.5 text-[#D4A24C]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mb-4 flex-1 text-sm leading-relaxed text-foreground line-clamp-4">
        &ldquo;{review.comment}&rdquo;
      </blockquote>
      <figcaption className="text-xs text-muted-foreground">
        {review.nickname}
        {review.priceRange ? ` · ${review.priceRange}` : ""}
      </figcaption>
    </figure>
  )
}

function MarqueeRow({ items, direction }: { items: Review[]; direction: "left" | "right" }) {
  const anim = direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
  return (
    <div className="marquee-row overflow-hidden">
      <div className={`flex w-max gap-5 py-1 ${anim}`}>
        {[...items, ...items].map((review, i) => (
          <ReviewCard key={`${review.comment}-${i}`} review={review} />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-secondary py-24">
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
            고객 후기
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            고객사의 이야기
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-0.5 text-[#D4A24C]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span>
              크몽 평점 <strong className="font-semibold text-foreground">4.9 / 5.0</strong> · 실제 후기{" "}
              <strong className="font-semibold text-foreground">343개</strong>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Auto-scrolling reviews */}
      <div className="relative space-y-5">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-secondary to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-secondary to-transparent sm:w-32" />
      </div>
    </section>
  )
}
