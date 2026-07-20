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

// 사례별 상세 — "자세히 보기"로 펼쳐지는 문제→해결→성과 서사
// (SEO/GEO: 클릭 뒤 숨김이 아니라 HTML에 항상 렌더링되어 크롤러·AI가 읽음)
export interface CaseDetail {
  problem: string // 문제인식 — 도입 전 상황
  approach: string // 업무 분석 · 설계 — 어떻게 만들었나
  result: string // 성과 도출 — 도입 후 변화
}

export interface CaseItem {
  slug: string
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
  detail: CaseDetail
}

export const cases: CaseItem[] = [
  {
    slug: "admin-system",
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
    detail: {
      problem:
        "결재·정산·계약·공지 업무가 엑셀과 메신저, 종이 문서에 흩어져 있어 담당자마다 자료를 따로 관리했고, 진행 상황을 확인하려면 여러 곳을 오가야 했습니다.",
      approach:
        "현장에서 실제 오가는 승인 흐름을 그대로 분석해, 결재·정산·계약 워크플로우와 공지·게시판·문서를 하나의 관리자 화면으로 모듈화했습니다. 권한별로 보이는 화면과 처리 단계를 나눴습니다.",
      result:
        "흩어져 있던 업무가 한 화면으로 모이며 처리 시간이 83% 줄었고, 담당자가 바뀌어도 진행 이력이 그대로 남아 인수인계 부담이 사라졌습니다.",
    },
  },
  {
    slug: "logistics-sorting",
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
    detail: {
      problem:
        "출고 때마다 운송장을 보고 수기로 분류·소팅하다 보니 물량이 몰리면 병목이 생기고, 오출고·누락이 반복됐습니다.",
      approach:
        "운송장 스캔 한 번으로 출고가 처리되도록 자동화하고, 입고 분류부터 소팅·적재·포장까지 현장이 손에 익은 순서 그대로 단일 흐름으로 이었습니다.",
      result:
        "운송장 기반 자동 처리로 출고 작업 시간이 77% 줄었고, 분류 오류가 크게 감소해 현장이 물량 급증에도 순서대로 움직이게 됐습니다.",
    },
  },
  {
    slug: "logistics-ops",
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
    detail: {
      problem:
        "작업 일보·인력 배정·자원 배치·지시서를 서로 다른 문서로 관리해, 현장 상황이 바뀔 때마다 여러 장부를 다시 맞춰야 했습니다.",
      approach:
        "현장 운영에 필요한 일보·지시서·인력·자원 관리를 한 화면에 통합하고, 인력 배정과 자원 배치를 최적화하는 흐름으로 설계했습니다.",
      result:
        "운영 업무가 단일 화면으로 모이며 관리 시간이 79% 줄었고, 지시-실행-기록이 한 흐름으로 이어져 누락 없이 현장이 돌아가게 됐습니다.",
    },
  },
  {
    slug: "inventory",
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
    detail: {
      problem:
        "상품·주문·창고별 재고를 엑셀 여러 개로 나눠 관리해, 지금 어디에 뭐가 몇 개 남았는지 확인하는 데만 시간이 걸리고 수치도 자주 어긋났습니다.",
      approach:
        "상품·주문 정보를 통합하고 창고별 재고를 실시간으로 보여주도록 설계했으며, 제품 그룹·분류 체계를 정리해 찾는 시간을 줄였습니다.",
      result:
        "재고 확인·집계 작업이 93% 줄었고, 엑셀을 여러 개 띄울 필요 없이 한 화면에서 실시간 재고를 확인하게 됐습니다.",
    },
  },
  {
    slug: "usedcar-crawl",
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
    detail: {
      problem:
        "여러 사이트에 흩어진 중고차 매물을 사람이 일일이 찾아 옮겨 적고, 연식·주행거리·가격을 시세와 하나씩 비교하느라 시간이 많이 들었습니다.",
      approach:
        "중고차 매물 데이터를 자동으로 수집하고, 연식·주행거리·가격을 시세와 나란히 비교·분석하도록 구성했습니다. 차량별 재고 현황도 함께 관리합니다.",
      result:
        "매물 수집·비교 작업이 80% 줄었고, 시세 대비 경쟁력 있는 매물을 바로 가려낼 수 있게 됐습니다.",
    },
  },
  {
    slug: "haccp",
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
    detail: {
      problem:
        "점검일지·성적서·법적 서류를 매일 손으로 작성하고, 미작성이나 유효기간 만료를 사람이 일일이 챙겨야 해 누락 위험이 컸습니다.",
      approach:
        "쓰던 서류 양식을 그대로 화면에 얹는 편집기를 만들고, 점검일지 주기 관리와 미작성 자동 표시, 성적서·보건증·결재를 단일 흐름으로 처리하도록 설계했습니다.",
      result:
        "수기 작성·점검 관리 업무가 98% 줄었고, 미작성·유효기간 만료를 시스템이 대신 챙겨 위생 서류 관리의 빈틈이 사라졌습니다.",
    },
  },
  {
    slug: "event",
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
    detail: {
      problem:
        "오프라인 소개팅·파티에서 참가자 등록, 호감 투표 집계, 매칭 산출, 현장 요청을 운영진이 수기로 처리하다 보니 진행이 느리고 실수가 잦았습니다.",
      approach:
        "회차별 QR 입장·등록, 실시간 호감 투표 집계와 상호 매칭 자동 산출, 화면 노출 통제·현장 요청 접수까지 QR 하나로 처음부터 끝까지 운영하도록 만들었습니다.",
      result:
        "행사 운영 업무가 90% 줄었고, 운영진은 PC로 관제하고 참가자는 본인 폰으로 참여해 진행이 끊김 없이 이어지게 됐습니다.",
    },
  },
  {
    slug: "payflow",
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
    detail: {
      problem:
        "매달 정기 수금 거래처에 입금 안내를 사람이 직접 확인해 보내야 했고, 누가 입금했는지 대조하느라 미수금 관리가 번거로웠습니다.",
      approach:
        "지정한 시간에 미입금 고객에게만 안내 문자가 자동 발송되도록 하고, 이번 달 수금·미수금을 대시보드로 자동 집계하며 발송 이력과 월별 정산을 엑셀로 내려받게 했습니다.",
      result:
        "수금 안내·집계 업무가 95% 줄었고, 미입금 고객에게만 자동으로 문자가 나가 빠짐없이 수금이 이뤄지게 됐습니다.",
    },
  },
  {
    slug: "review",
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
    detail: {
      problem:
        "체험단 진행자 등록·설문 응답·리뷰어 매칭·인증 사진 검수·정산을 사람이 여러 시트와 폴더를 오가며 수기로 연결해야 했습니다.",
      approach:
        "진행자별 설문 폼과 구글 시트를 자동 연동하고, 리뷰어·부계정을 매칭키로 자동 연결했으며, 구매·리뷰 인증 사진을 리뷰어별로 모아 한 화면에서 검수·정산 추적하도록 구축했습니다.",
      result:
        "체험단 운영·검수 업무가 85% 줄었고, 응답부터 정산까지 자동으로 이어져 진행 규모가 커져도 손이 덜 가게 됐습니다.",
    },
  },
]
