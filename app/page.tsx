import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import {
  graph,
  organizationSchema,
  websiteSchema,
  faqSchema,
} from "@/lib/structured-data"
import { faqs } from "@/lib/faq-data"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { WhySection } from "@/components/why-section"
import { ProcessSection } from "@/components/process-section"
import { ServicesSection } from "@/components/services-section"
import { CasesSection } from "@/components/cases-section"
import { ClientsSection } from "@/components/clients-section"
import { TrustSection } from "@/components/trust-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FloatingKakao } from "@/components/floating-kakao"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

const homeJsonLd = graph(
  organizationSchema(),
  websiteSchema(),
  faqSchema(faqs),
)

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={homeJsonLd} />
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <WhySection />
      <ProcessSection />
      <ServicesSection />
      <CasesSection featured />
      <ClientsSection />
      <TrustSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <FloatingKakao />
    </main>
  )
}
