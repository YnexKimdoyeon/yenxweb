"use client"

import { motion } from "framer-motion"

type Client = { name: string; logo: string }

// 로고 추가 시 public/clients/ 에 파일을 넣고 아래 배열에 한 줄 추가하면 됩니다.
const clients: Client[] = [
  { name: "(주)대한수출포장", logo: "/clients/daehan-packaging.png" },
  { name: "(주)런", logo: "/clients/run.png" },
  { name: "네오파니", logo: "/clients/neopany.png" },
  { name: "흙내음", logo: "/clients/heuknaeum.png" },
  { name: "(주)자인", logo: "/clients/zain.png" },
  { name: "효성", logo: "/clients/hyosung.jpg" },
  { name: "포스코", logo: "/clients/posco.svg" },
  { name: "최가유통", logo: "/clients/choiga.png" },
  { name: "중구모", logo: "/clients/junggumo.png" },
  { name: "스토어웨이", logo: "/clients/storeway.png" },
]

function LogoTile({ client }: { client: Client }) {
  return (
    <div className="flex h-20 w-36 shrink-0 items-center justify-center rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md sm:h-24 sm:w-44">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={client.logo}
        alt={`${client.name} 로고`}
        className="max-h-full max-w-full object-contain"
        loading="lazy"
      />
    </div>
  )
}

export function ClientsSection() {
  return (
    <section className="overflow-hidden bg-background py-24">
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
            함께한 기업
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            이런 기업들과 함께했습니다
          </h2>
        </motion.div>
      </div>

      {/* Auto-scrolling client logos */}
      <div className="relative">
        <div className="marquee-row overflow-hidden">
          <div
            className="flex w-max gap-5 py-1 animate-marquee-left"
            style={{ animationDuration: "25s" }}
          >
            {[...clients, ...clients].map((client, i) => (
              <LogoTile key={`${client.name}-${i}`} client={client} />
            ))}
          </div>
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
      </div>
    </section>
  )
}
