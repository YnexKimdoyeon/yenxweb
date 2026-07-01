// 도입사례(포트폴리오) 단일 출처 — 홈 도입사례 섹션과 /portfolio 페이지가 공유
import {
  Boxes,
  Car,
  ClipboardCheck,
  ClipboardList,
  LayoutDashboard,
  PartyPopper,
  Send,
  Star,
  Truck,
  type LucideIcon,
} from "lucide-react"

export interface CaseItem {
  category: string
  color: string
  icon: LucideIcon
  featured?: boolean
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
    featured: true,
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
  {
    category: "HACCP 관리",
    color: "#7C3AED",
    icon: ClipboardCheck,
    featured: true,
    title: "식품 HACCP 관리 시스템 구축",
    description:
      "매일 손으로 쓰던 점검일지와 성적서·법적서류를, 쓰던 양식 그대로 화면에 얹어 PC에서 처리합니다. 미작성·유효기간 만료를 시스템이 대신 챙겨줍니다.",
    features: [
      "쓰던 서류 그대로 화면에 얹는 양식 편집기",
      "점검일지 주기 관리·미작성 자동 표시",
      "성적서·보건증·결재까지 단일 흐름 처리",
    ],
    images: [
      "/portfolio/haccp-s1.png",
      "/portfolio/haccp-s2.png",
      "/portfolio/haccp-s3.png",
      "/portfolio/haccp-s4.png",
      "/portfolio/haccp-s5.png",
      "/portfolio/haccp-s6.png",
      "/portfolio/haccp-s7.png",
      "/portfolio/haccp-s8.png",
    ],
    improvement: "98%",
    cost: "₩5,000,000",
    duration: "1개월",
  },
  {
    category: "행사 운영",
    color: "#2563EB",
    icon: PartyPopper,
    featured: true,
    title: "소개팅·파티 행사 운영 시스템 구축",
    description:
      "참가자 등록부터 실시간 호감 투표·상호 매칭·현장 요청까지, 오프라인 소개팅·파티 행사를 QR 하나로 처음부터 끝까지 운영합니다. 운영진은 PC로 관제하고 참가자는 본인 폰으로 참여합니다.",
    features: [
      "회차별 QR 입장·참가자 등록 관리",
      "실시간 호감 투표 집계·상호 매칭 자동 산출",
      "화면 노출 실시간 통제·현장 요청 접수",
    ],
    images: [
      "/portfolio/event-d1.png",
      "/portfolio/event-d2.png",
      "/portfolio/event-d3.png",
      "/portfolio/event-d4.png",
      "/portfolio/event-d5.png",
      "/portfolio/event-d6.png",
      "/portfolio/event-d7.png",
    ],
    improvement: "90%",
    cost: "₩4,000,000",
    duration: "1개월",
  },
  {
    category: "수금 자동화",
    color: "#7C3AED",
    icon: Send,
    title: "입금 알림 문자 자동발송 시스템 구축",
    description:
      "매달 정기 수금 거래처에, 정해진 시간에 아직 입금 안 한 고객에게만 안내 문자가 자동으로 나갑니다. 이번 달 받을 돈·미수금·발송 이력을 한 화면에서 관리합니다.",
    features: [
      "미입금 고객에게만 지정 시간 자동 발송",
      "이번 달 수금·미수금 대시보드 자동 집계",
      "발송 이력·월별 정산 엑셀 다운로드",
    ],
    images: [
      "/portfolio/payflow-s1.png",
      "/portfolio/payflow-s2.png",
      "/portfolio/payflow-s3.png",
      "/portfolio/payflow-s4.png",
      "/portfolio/payflow-s5.png",
    ],
    improvement: "95%",
    cost: "₩2,500,000",
    duration: "2주",
  },
  {
    category: "리뷰 관리",
    color: "#2563EB",
    icon: Star,
    title: "체험단·리뷰 관리 ERP 구축",
    description:
      "진행자 등록·설문 응답이 구글 시트에 자동 기록되고, 리뷰어·부계정을 매칭키로 자동 연결합니다. 구매·리뷰 인증 사진을 리뷰어별로 모아 한 화면에서 검수하고 정산까지 추적합니다.",
    features: [
      "진행자별 설문 폼·구글 시트 열 매핑 자동 연동",
      "리뷰어·부계정 통합 관리·매칭키 자동 연결",
      "구매·리뷰 인증 사진 한 화면 검수·정산 추적",
    ],
    images: [
      "/portfolio/review-s1.png",
      "/portfolio/review-s2.png",
      "/portfolio/review-s3.png",
    ],
    improvement: "85%",
    cost: "₩2,000,000",
    duration: "2주",
  },
]
