"use client"

import Script from "next/script"
import { useEffect } from "react"
import { GA_ID, trackEvent } from "@/lib/gtag"

// GA4 로더 + 카카오톡 상담 클릭 전환 추적
// 카카오 링크가 여러 컴포넌트에 흩어져 있어, 각 버튼 대신 document 클릭을 위임 감지한다.
export function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_ID) return
    function onClick(e: MouseEvent) {
      const el = e.target as HTMLElement | null
      const link = el?.closest('a[href*="open.kakao.com"]')
      if (!link) return
      // 카카오톡 상담 진입 = 핵심 전환
      trackEvent("kakao_consult_click", {
        event_category: "engagement",
        link_url: link.getAttribute("href") ?? "",
      })
    }
    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [])

  if (!GA_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  )
}
