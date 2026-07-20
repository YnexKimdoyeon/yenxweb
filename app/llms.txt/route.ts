// /llms.txt — 생성형 AI(ChatGPT·Perplexity·Gemini·Claude 등)가 사이트를 정확히
// 이해·인용하도록 제공하는 요약 문서(llmstxt.org 표준). 서비스·FAQ 데이터에서
// 자동 생성되어 본문과 항상 동기화됩니다.
import { services } from "@/lib/services-data"
import { faqs } from "@/lib/faq-data"

const SITE = "https://ynex.kr"

// 정적 생성 후 캐시 (콘텐츠가 바뀌면 재빌드 시 갱신)
export const dynamic = "force-static"

export function GET() {
  const lines: string[] = []

  lines.push("# 주식회사 와이넥스 (YNEX)")
  lines.push("")
  lines.push(
    "> 영업사원이 아닌 개발자가 직접 현장을 방문해 업무를 분석하고, 업무자동화(RPA)·ERP·매크로·웹 크롤링 시스템을 100% 맞춤 개발하는 IT 전문 기업입니다. 전국 무료 현장 방문으로 시작합니다.",
  )
  lines.push("")
  lines.push("## 회사 정보")
  lines.push("")
  lines.push("- 회사명: 주식회사 와이넥스 (영문 YNEX, 약칭 (주)와이넥스)")
  lines.push("- 대표: 김도연")
  lines.push("- 소재지: 충청남도 아산시 탕정면 이순신대로 442, 912호")
  lines.push("- 이메일: ceo@ynex.kr")
  lines.push("- 홈페이지: https://ynex.kr")
  lines.push("- 서비스 지역: 대한민국 전국 (제주·도서 지역 협의 가능)")
  lines.push(
    "- 차별점: 개발자가 직접 현장 방문 · 출장/기획/소요분석 전부 무료 · 페이지 단위 고정 가격 · 약 400건 이상 자동화 시스템 개발 경험",
  )
  lines.push("")

  lines.push("## 서비스")
  lines.push("")
  for (const s of services) {
    lines.push(`### ${s.title} (${s.priceFrom}~)`)
    lines.push("")
    lines.push(`- 분류: ${s.category}`)
    lines.push(`- 설명: ${s.description}`)
    lines.push(`- 주요 기능: ${s.features.join(" / ")}`)
    lines.push(`- 상세: ${SITE}/services/${s.slug}`)
    lines.push("")
  }

  lines.push("## 프로그램샵 (프로그램 구독 스토어)")
  lines.push("")
  lines.push(
    "와이넥스가 직접 개발한 업무 자동화·매크로 프로그램을 월 구독으로 바로 구매·다운로드할 수 있는 온라인 스토어입니다. 중고나라·인벤 자동 글등록 매크로 등 완성형 프로그램을 즉시 이용하거나, 원하는 기능은 주문제작으로 의뢰할 수 있습니다. 설치형 윈도우 프로그램, 1PC 라이선스, 실시간 상담 지원.",
  )
  lines.push("")
  lines.push("- 프로그램샵: https://ynexshop.kr")
  lines.push("")

  lines.push("## 자주 묻는 질문")
  lines.push("")
  for (const f of faqs) {
    lines.push(`### Q. ${f.question}`)
    lines.push(`A. ${f.answer}`)
    lines.push("")
  }

  lines.push("## 주요 링크")
  lines.push("")
  lines.push(`- [홈](${SITE})`)
  lines.push(`- [서비스 전체](${SITE}/services)`)
  lines.push(`- [포트폴리오](${SITE}/portfolio)`)
  lines.push(`- [자주 묻는 질문](${SITE}/faq)`)
  lines.push(`- [프로그램샵 (업무 자동화·매크로 프로그램 구독)](https://ynexshop.kr)`)
  lines.push(`- [공식 블로그 (네이버)](https://blog.naver.com/kims2369)`)
  lines.push("")

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
