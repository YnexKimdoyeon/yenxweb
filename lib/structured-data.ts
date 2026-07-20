// JSON-LD 구조화 데이터 빌더 (schema.org)
// 검색엔진 리치 결과: 사업자 정보·별점·FAQ·빵부스러기(breadcrumb) 노출용
import type { ServiceDetail } from "@/lib/services-data"

export const SITE_URL = "https://ynex.kr"
const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`

const ORG_NAME = "주식회사 와이넥스"
// 검색 별칭: 법인 표기·약칭·영문명 모두 같은 회사로 인식되도록 등록
const ORG_ALT_NAME = ["와이넥스", "(주)와이넥스", "YNEX"]
const ORG_DESCRIPTION =
  "영업사원이 아닌 개발자가 직접 현장을 방문해 업무를 분석하고 맞춤형 업무자동화·ERP·매크로·크롤링 시스템을 개발하는 IT 전문 기업."

// 누적 후기 기준 평점 (서비스 상세·홈 공통 노출 값)
const AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  bestRating: "5",
  ratingCount: "343",
} as const

// 조직 + 지역 비즈니스 (아산 소재, 전국 방문 서비스)
export function organizationSchema() {
  return {
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": ORG_ID,
    name: ORG_NAME,
    alternateName: ORG_ALT_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo-mark.png`,
    image: `${SITE_URL}/og.png`,
    description: ORG_DESCRIPTION,
    email: "ceo@ynex.kr",
    founder: { "@type": "Person", name: "김도연" },
    slogan: "현장을 아는 개발자가 직접 찾아갑니다",
    address: {
      "@type": "PostalAddress",
      streetAddress: "탕정면 이순신대로 442, 912호",
      addressLocality: "아산시",
      addressRegion: "충청남도",
      addressCountry: "KR",
    },
    areaServed: { "@type": "Country", name: "대한민국" },
    priceRange: "₩₩",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "ceo@ynex.kr",
      areaServed: "KR",
      availableLanguage: "Korean",
    },
    // AI가 이 기업의 전문 주제(권위 영역)를 인식하도록 명시
    knowsAbout: [
      "업무자동화",
      "RPA",
      "ERP 개발",
      "CRM 개발",
      "SCM 개발",
      "웹 크롤링",
      "데이터 파싱",
      "재고관리 시스템",
      "물류관리 WMS",
      "전자결재 그룹웨어",
      "매크로 개발",
      "파이썬 자동화",
      "맞춤형 소프트웨어 개발",
    ],
    aggregateRating: AGGREGATE_RATING,
    // 동일 주체임을 알리는 외부 프로필 (검색·AI 엔티티 연결)
    sameAs: ["https://blog.naver.com/kims2369", "https://kmong.com/@Kimdoyeon"],
  }
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: "와이넥스 YNEX",
    inLanguage: "ko-KR",
    publisher: { "@id": ORG_ID },
  }
}

// FAQ 리치 결과 (질문/답변 쌍)
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  }
}

// 빵부스러기 내비게이션 (홈 > 서비스명)
export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: t.url,
    })),
  }
}

// 개별 서비스 (제공 기관·가격대 포함)
export function serviceSchema(service: ServiceDetail) {
  const numericPrice = service.priceFrom.replace(/[^0-9]/g, "")
  return {
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.category,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "대한민국" },
    aggregateRating: AGGREGATE_RATING,
    offers: {
      "@type": "Offer",
      price: numericPrice,
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
    },
  }
}

// 단계형 안내 (HowTo) — AI 답변엔진·검색 리치 결과에 절차로 노출 (GEO)
export function howToSchema(input: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  return {
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    step: input.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

// 여러 스키마를 하나의 @graph 로 묶어 단일 script 로 출력
export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  }
}
