import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  Check,
  MessageCircle,
  MapPin,
  Quote,
  Scale,
  Database,
  Globe,
  Code,
  FileText,
  Repeat,
  Bot,
  type LucideIcon,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import {
  graph,
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
  SITE_URL,
} from "@/lib/structured-data"
import { services, getService } from "@/lib/services-data"
import { reviews } from "@/components/reviews-data"

const KAKAO_URL = "https://open.kakao.com/o/sgQ0uyxi"

const iconMap: Record<string, LucideIcon> = {
  scale: Scale,
  database: Database,
  globe: Globe,
  code: Code,
  fileText: FileText,
  repeat: Repeat,
  bot: Bot,
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}

  const title = `${service.title} | 와이넥스 YNEX`
  const description = `${service.tagline}. ${service.description.slice(0, 90)}`
  const url = `/services/${service.slug}`

  return {
    title,
    description,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url,
      siteName: "와이넥스 YNEX",
      title,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const Icon = iconMap[service.icon]
  // 다른 플랫폼 이름이 들어간 후기는 빼고 보여 줌
  const pageReviews = reviews.filter((r) => !r.comment.includes("크몽")).slice(0, 3)
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  const jsonLd = graph(
    serviceSchema(service),
    breadcrumbSchema([
      { name: "홈", url: SITE_URL },
      { name: "서비스", url: `${SITE_URL}/#services` },
      { name: service.title, url: `${SITE_URL}/services/${service.slug}` },
    ]),
    faqSchema(service.faq.map((f) => ({ question: f.q, answer: f.a }))),
  )

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <main className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary to-background">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Link
              href="/#services"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              전체 서비스
            </Link>

            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                  {Icon && <Icon className="h-4 w-4" />}
                  {service.category}
                </div>
                <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                  {service.title}
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  {service.tagline}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={KAKAO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <MessageCircle className="h-5 w-5" />
                    카카오톡 상담하기
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    현장 방문 · 견적 신청
                  </Link>
                </div>
              </div>

              {/* Trust card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-primary/5 ring-1 ring-black/5">
                <div className="mb-5 rounded-xl bg-primary p-5 text-primary-foreground">
                  <div className="mb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5 shrink-0" />
                    <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-primary">무료</span>
                  </div>
                  <p className="mb-1.5 text-lg font-bold leading-snug">{service.diagnosis.title}</p>
                  <p className="text-sm leading-relaxed text-primary-foreground/85">{service.diagnosis.desc}</p>
                </div>
                <ul className="space-y-3">
                  {service.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span className="text-sm text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Description + Features */}
        <section className="bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-5 text-2xl font-bold text-foreground">서비스 소개</h2>
            <p className="mb-12 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-muted/30 py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-3 text-2xl font-bold text-foreground">진행 절차</h2>
            <p className="mb-10 text-muted-foreground">
              처음 상담부터 운영까지, 만든 개발자가 끝까지 맡습니다. 단계마다 무엇을 받으시는지 미리 알려 드립니다.
            </p>
            <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {service.process.map((p, i) => (
                <li
                  key={p.step}
                  className={`relative flex flex-col rounded-2xl border bg-card p-6 ${
                    p.free ? "border-primary shadow-lg shadow-primary/10" : "border-border"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    {p.free && (
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">무료</span>
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{p.step}</h3>
                  <p className="mb-5 flex-1 leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="flex items-start gap-2 border-t border-border pt-4 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      <span className="text-muted-foreground">받으시는 것 </span>
                      <span className="font-semibold text-foreground">{p.get}</span>
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-3 text-2xl font-bold text-foreground">고객 후기</h2>
            <p className="mb-10 text-muted-foreground">함께 일한 고객이 남긴 말입니다.</p>
            <div className="grid gap-6 md:grid-cols-3">
              {pageReviews.map((r) => (
                <div key={r.comment} className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <Quote className="mb-3 h-6 w-6 text-primary/40" />
                  <p className="leading-relaxed text-foreground">{r.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-2xl font-bold text-foreground">자주 묻는 질문</h2>
            <div className="space-y-3">
              {service.faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-border bg-card p-5 transition-colors open:border-primary/40 open:shadow-md hover:border-primary/20 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-foreground">
                    {item.q}
                    <span className="ml-4 text-xl leading-none text-muted-foreground transition-transform duration-300 group-open:rotate-45 group-open:text-primary">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary to-[#2E3A6B] py-20 lg:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage:
                  "radial-gradient(ellipse 70% 70% at 50% 0%, black, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 70% 70% at 50% 0%, black, transparent 80%)",
              }}
            />
            <div className="absolute left-1/2 -top-24 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />
          </div>
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              {service.cardTitle}, 지금 상담하세요
            </h2>
            <p className="mb-8 text-white/80">응답 1시간 이내 · 언제나 상담 가능 · 세금계산서 발행</p>
            <a
              href={KAKAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary shadow-sm transition-all hover:bg-white/90"
            >
              <MessageCircle className="h-5 w-5" />
              카카오톡으로 문의하기
            </a>
          </div>
        </section>

        {/* Other services */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-xl font-bold text-foreground">다른 서비스</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {others.map((s) => {
                const OIcon = iconMap[s.icon]
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                  >
                    <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-2.5 transition-colors group-hover:bg-primary">
                      {OIcon && <OIcon className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" />}
                    </div>
                    <h3 className="mb-1 font-semibold text-foreground">{s.cardTitle}</h3>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
