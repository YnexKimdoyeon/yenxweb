// 상단 메뉴 단일 출처: 회사소개, 사업별(ERP·업무자동화 / 키오스크). 견적은 오른쪽 버튼 하나로
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
      { label: "ERP 개발", href: "/services", desc: "개발자가 직접 진단하고 만드는 ERP·WMS·MES" },
      { label: "업무자동화", href: "/automation", desc: "반복 업무를 줄이는 자동화 프로그램" },
    ],
  },
  {
    label: "키오스크",
    href: "/kiosk",
    items: [
      { label: "키오스크 주문제작", href: "/kiosk", desc: "모든 분야 키오스크 제작·모델" },
      { label: "키오스크 포트폴리오", href: "/portfolio/kiosk", desc: "제작·납품 사례" },
    ],
  },
]
