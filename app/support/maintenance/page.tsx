import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingKakao } from "@/components/floating-kakao"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "유지보수 문의 | 와이넥스 YNEX",
  description: "와이넥스가 만든 시스템과 키오스크의 유지보수·오류 문의.",
  alternates: { canonical: "/support/maintenance" },
}

export default function MaintenancePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <PageHero
          badge="고객지원"
          title="유지보수 문의"
          description="사용 중인 시스템이나 키오스크에 문제가 있거나 기능을 바꾸고 싶으시면 알려 주세요."
        />
        <section className="py-14">
          <div className="mx-auto max-w-2xl px-4">
            <ContactForm
              subject="[와이넥스] 유지보수 문의"
              submitLabel="유지보수 문의"
              placeholder="사용 중인 시스템 이름, 어떤 화면에서 어떤 문제가 생겼는지, 언제부터인지 적어 주세요."
              method="maintenance"
            />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
