// Google Analytics 4 (GA4) 전환 추적 헬퍼
// 측정 ID는 환경변수 우선, 없으면 기본값 사용 (측정 ID는 공개되어도 안전한 값)
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-7WPN1SMP77"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

// 전환/이벤트 전송. GA가 로드되지 않았으면 조용히 무시.
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.gtag) return
  window.gtag("event", name, params ?? {})
}
