// 상단 메뉴 단일 출처: 회사소개·고객지원은 공통, 서비스·포트폴리오·견적은 사업별(ERP·업무자동화 / 키오스크)로 나눈다
export interface NavGroup {
  label: string
  href: string // 그룹 이름을 눌렀을 때 가는 곳
  items: { label: string; href: string; desc?: string }[]
}

export const navGroups: NavGroup[] = [
  {
    label: "회사소개",
    href: "/about",
    items: [], // 드롭다운 없이 바로 이동
  },
  {
    label: "ERP·업무자동화",
    href: "/services",
    items: [
      { label: "ERP·MES·WMS 개발", href: "/services", desc: "업무에 맞춘 시스템 개발" },
      { label: "AI·업무 자동화", href: "/services/ai-automation", desc: "반복 업무를 줄이는 자동화" },
    ],
  },
  {
    label: "키오스크",
    href: "/kiosk",
    items: [
      { label: "키오스크 주문제작", href: "/kiosk", desc: "용도에 맞춘 키오스크 제작" },
      { label: "제작 유형 및 제품", href: "/kiosk/products", desc: "형태별 제작 유형" },
      { label: "키오스크 + ERP 결합", href: "/kiosk/erp", desc: "주문부터 재고·정산까지 연결" },
      { label: "키오스크 포트폴리오", href: "/portfolio/kiosk", desc: "제작·설치 사례" },
    ],
  },
  {
    label: "고객지원",
    href: "/contact",
    items: [
      { label: "견적 문의", href: "/contact", desc: "ERP·업무자동화 상담" },
      { label: "키오스크 견적 문의", href: "/kiosk/quote", desc: "키오스크 제작 상담" },
      { label: "유지보수 문의", href: "/support/maintenance", desc: "운영 중인 시스템 지원" },
    ],
  },
]
