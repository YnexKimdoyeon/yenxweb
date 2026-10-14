import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingKakao } from "@/components/floating-kakao"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "키오스크 견적 문의 | 와이넥스 YNEX",
  description: "키오스크 주문제작, 키오스크 + ERP 결합 상품 견적 문의.",
  alternates: { canonical: "/kiosk/quote" },
}

export default function KioskQuotePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 lg:pt-20">
        <PageHero
          badge="키오스크"
          title="키오스크 견적 문의"
          description="용도, 설치 장소, 필요한 수량과 기능을 알려 주시면 사양과 견적을 정리해 연락드립니다."
        />
        <section className="py-14">
          <div className="mx-auto max-w-2xl px-4">
            <ContactForm
              subject="[와이넥스] 키오스크 견적 문의"
              submitLabel="키오스크 견적 문의"
              placeholder="용도(주문·접수·안내 등), 설치 장소, 필요한 수량, 결제·출력 같은 필요한 기능, ERP 연동 여부를 적어 주세요."
              method="kiosk_quote"
            />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingKakao />
    </>
  )
}
