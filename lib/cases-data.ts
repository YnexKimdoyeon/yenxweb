// 도입사례(포트폴리오) 단일 출처 — 홈 도입사례 섹션과 /portfolio 페이지가 공유
import {
  Boxes,
  Car,
  ClipboardList,
  LayoutDashboard,
  Truck,
  type LucideIcon,
} from "lucide-react"

export interface CaseItem {
  category: string
  color: string
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  images: string[]
  portrait?: boolean
  improvement: string
  cost: string
  duration: string
}

export const cases: CaseItem[] = [
  {
    category: "관리자 시스템",
    color: "#2563EB",
    icon: LayoutDashboard,
    title: "관리자 시스템 구축",
    description:
      "결재하고, 정산하고, 계약 챙기고, 공지 올리고… 여기저기 흩어져 있던 일을 관리자 화면 하나로 모았습니다.",
    features: [
      "승인·결재·정산·계약 워크플로우 자동화",
      "공지·게시판·문서 통합 관리",
      "권한별 운영 관리자 대시보드",
    ],
    images: [
      "/portfolio/admin-system-s1.png",
      "/portfolio/admin-system-s2.png",
    ],
    improvement: "83%",
    cost: "₩4,500,000",
    duration: "2개월",
  },
  {
    category: "물류 자동화",
    color: "#7C3AED",
    icon: Truck,
    title: "물류 출고·소팅 관리 시스템",
    description:
      "운송장만 찍으면 출고가 알아서 처리됩니다. 입고 분류부터 소팅, 포장까지 현장이 손에 익은 순서 그대로 이어집니다.",
    features: [
      "운송장 기반 출고 자동화",
      "입고 분류·소팅·적재 관리",
      "포장 작업까지 단일 흐름 처리",
    ],
    images: [
      "/portfolio/logistics-sorting-s1.png",
      "/portfolio/logistics-sorting-s2.png",
    ],
    portrait: true,
    improvement: "77%",
    cost: "₩3,000,000",
    duration: "2주",
  },
  {
    category: "운영 관리",
    color: "#2563EB",
    icon: ClipboardList,
    title: "물류 운영 시스템 구축",
    description:
      "작업 일보, 인력 배정, 자원 배치, 지시서까지. 현장 운영에 필요한 일들을 한 화면에서 다 끝낼 수 있게 만들었습니다.",
    features: [
      "작업 일보·작업 지시서 관리",
      "인력 배정·자원 배치 최적화",
      "단일 화면 통합 운영 관리",
    ],
    images: [
      "/portfolio/logistics-ops-s1.png",
      "/portfolio/logistics-ops-s2.png",
      "/portfolio/logistics-ops-s3.png",
    ],
    improvement: "79%",
    cost: "₩6,000,000",
    duration: "2개월",
  },
  {
    category: "재고 관리",
    color: "#7C3AED",
    icon: Boxes,
    title: "상품 재고관리 시스템 구축",
    description:
      "지금 어디에 뭐가 몇 개 남았는지 한눈에. 상품·주문·창고별 재고를 한곳에 모아, 엑셀 여러 개 띄울 일이 없습니다.",
    features: [
      "상품·주문 정보 통합 관리",
      "창고별 재고 실시간 현황",
      "제품 그룹·분류 체계 정리",
    ],
    images: [
      "/portfolio/inventory-s1.png",
      "/portfolio/inventory-s2.png",
    ],
    improvement: "93%",
    cost: "₩4,000,000",
    duration: "2주",
  },
  {
    category: "데이터 크롤링",
    color: "#2563EB",
    icon: Car,
    title: "중고차 매물 크롤링 관리 시스템",
    description:
      "흩어진 중고차 매물을 알아서 긁어모으고, 연식·주행거리·가격을 시세와 나란히 놓고 비교해 줍니다.",
    features: [
      "중고차 매물 데이터 자동 수집",
      "연식·주행거리·가격 시세 분석",
      "차량별 재고 현황 관리",
    ],
    images: [
      "/portfolio/usedcar-crawl-s1.png",
      "/portfolio/usedcar-crawl-s2.png",
      "/portfolio/usedcar-crawl-s3.png",
    ],
    improvement: "80%",
    cost: "₩3,000,000",
    duration: "2주",
  },
]
