"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const KAKAO_URL = "https://open.kakao.com/o/sgQ0uyxi"
const trust = ["첫 방문·분석 무료", "응답 1시간 이내", "전국 어디든", "세금계산서 발행"]

export function CtaSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#101D40] py-20 sm:py-28 lg:py-32"
    >
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2">
          {[28, 42, 58].map((s) => (
            <div
              key={s}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
              style={{ width: `${s}rem`, height: `${s}rem` }}
            />
          ))}
        </div>
        <div className="absolute -top-32 left-1/4 h-[34rem] w-[34rem] rounded-full bg-primary/40 blur-[130px]" />
        <div className="absolute -bottom-40 right-1/4 h-[30rem] w-[30rem] rounded-full bg-[#3A4A8A]/40 blur-[130px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Left: message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9AA8E0]/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9AA8E0]" />
            </span>
            10분이면 신청 완료
          </span>

          <h2 className="mb-5 text-[1.7rem] font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.1]">
            지금, 와이넥스가{" "}
            <span className="text-[#A9B6E8]">직접 찾아갑니다.</span>
          </h2>
          <p className="mb-8 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            전화 한 통, 카톡 한 줄이면 충분합니다. 신청 후 영업일 3일 이내,
            개발자가 직접 방문드립니다.
          </p>

          <ul className="mb-8 space-y-2.5">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-white/80">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9AA8E0]/20 text-[#A9B6E8]">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>

          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <MessageCircle className="h-4 w-4" />
            전화·작성이 번거로우면 카카오톡으로 바로 문의하기
          </a>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
