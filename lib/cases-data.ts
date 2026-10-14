// 도입사례(포트폴리오) 단일 출처: 홈 도입사례 섹션과 /portfolio 페이지가 공유
import {
  Boxes,
  Building2,
  CircleDot,
  LayoutGrid,
  Car,
  CarFront,
  ClipboardCheck,
  ClipboardList,
  FileSpreadsheet,
  GraduationCap,
  Clapperboard,
  LayoutDashboard,
  PartyPopper,
  Send,
  ShoppingBag,
  Sprout,
  Star,
  Truck,
  type LucideIcon,
} from "lucide-react"

// 사례별 상세: "자세히 보기"로 펼쳐지는 문제→해결→성과 서사
// (SEO/GEO: 클릭 뒤 숨김이 아니라 HTML에 항상 렌더링되어 크롤러·AI가 읽음)
export interface CaseDetail {
  problem: string // 문제인식: 도입 전 상황
  approach: string // 업무 분석 · 설계: 어떻게 만들었나
  result: string // 성과 도출: 도입 후 변화
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
  // 실제 화면을 가상 데이터로 옮긴 체험판 (public/demos). 없으면 공통 틀 체험판
  demoUrl?: string
  // 아래 세 값은 공개 확정된 사례에만 표시
  improvement?: string
  cost?: string
  duration?: string
  detail: CaseDetail
}

export const cases: CaseItem[] = [
  {
    slug: "admin-system",
    demoUrl: "/demos/admin-system/index.html",
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
    demoUrl: "/demos/inventory/index.html",
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
    demoUrl: "/demos/usedcar-crawl/index.html",
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
    demoUrl: "/demos/event/index.html",
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
    demoUrl: "/demos/payflow/index.html",
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
    demoUrl: "/demos/review/index.html",
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
  {
    slug: "contract-farming",
    demoUrl: "/demos/contract-farming/index.html",
    category: "농업 ERP",
    color: "#7C3AED",
    icon: Sprout,
    title: "쌀 계약재배 농가·필지 관리 ERP 구축",
    description:
      "사업장 20곳이 엑셀로 따로 받던 계약재배 신청을 하나의 시스템으로 모았습니다. 같은 논이 두 번 신청되면 등록 단계에서 막고, 종자량·포수는 면적으로 자동 계산합니다.",
    features: [
      "사업장별 농가·필지(논) 등록, 종자량·포수 자동 계산",
      "전 사업장 필지 중복 자동 차단·본부 예외 승인",
      "수매·출하 회차 관리와 본부 집계·자료 제출",
    ],
    images: [],
    detail: {
      problem:
        "사업장마다 양식이 조금씩 다른 엑셀로 신청을 받다 보니, 같은 논을 두 사업장에서 중복으로 신청해도 알 수 없었고 본부는 파일 20개를 손으로 합쳐 집계해야 했습니다.",
      approach:
        "기존 엑셀 약 5,700농가·3만 9천 필지를 정리해 옮기고, 지번을 넣는 순간 전체 사업장에서 중복을 확인하도록 했습니다. 공동 경작처럼 사정이 있는 논은 사업장이 예외 신청을 올리고 본부가 승인하는 흐름으로 설계했습니다.",
      result:
        "사업장은 쓰던 엑셀 양식 그대로 올리거나 화면에서 바로 입력하고, 본부는 대시보드에서 사업장별 접수 현황과 중복·예외 건을 한 번에 확인합니다.",
    },
  },
  {
    slug: "film-schedule",
    demoUrl: "/demos/film-schedule/index.html",
    category: "촬영 관리",
    color: "#7C3AED",
    icon: Clapperboard,
    title: "촬영 일정·감독 관리 시스템 구축",
    description:
      "웨딩·행사 촬영 예약과 감독 배정을 한 화면에서 관리합니다. 최종관리자는 전체 일정을, 촬영감독은 본인 계정으로 자기 일정만 봅니다.",
    features: [
      "촬영 예약·감독 배정 일정 관리",
      "최종관리자·촬영감독 권한 분리 로그인",
      "촬영→편집→납품 진행 추적",
    ],
    images: [],
    detail: {
      problem:
        "촬영 예약과 감독 배정을 메신저와 달력에 나눠 적다 보니, 일정이 겹치거나 편집·납품이 어디까지 됐는지 매번 물어봐야 했습니다.",
      approach:
        "예약 한 건이 촬영·편집·납품 단계를 차례로 지나가도록 만들고, 최종관리자와 촬영감독 계정을 분리해 감독은 자기 일정만 확인하도록 설계했습니다.",
      result:
        "예약부터 납품까지 진행 상황이 한 화면에 남아, 감독별 일정과 밀린 편집 건을 바로 확인할 수 있게 됐습니다.",
    },
  },
  {
    slug: "nursing-eval",
    demoUrl: "/demos/nursing-eval/index.html",
    category: "교육 평가",
    color: "#2563EB",
    icon: GraduationCap,
    title: "간호 시뮬레이션 실습 평가 ERP 구축",
    description:
      "간호학과 시뮬레이션 실습의 모듈별 평가, 학생 이수 관리, 실습반 순위와 취약 항목 분석까지 한 시스템에서 처리합니다. 교수와 관리자 화면을 나눠 씁니다.",
    features: [
      "학기·실습반·조 편성과 모듈별 평가 입력",
      "학생별 이수 완료·진행·미이수 자동 판정",
      "실습반 순위·역량별 성취도·취약 항목 Top 5",
    ],
    images: [],
    detail: {
      problem:
        "실습 평가 점수를 교수마다 엑셀로 따로 받아 합치다 보니, 누가 어떤 모듈을 아직 안 했는지, 어느 반이 어떤 항목에서 약한지 보려면 학기 말에 다시 집계해야 했습니다.",
      approach:
        "학기와 실습반, 모듈·평가 항목 구조를 그대로 옮기고, 교수는 평가만 입력하면 이수 판정과 반별·모듈별 평균이 자동으로 계산되도록 설계했습니다. 교수 모드와 관리자 모드를 나눠 권한을 분리했습니다.",
      result:
        "평가를 입력하는 즉시 이수 누락 학생과 취약 항목 순위가 대시보드에 나타나, 학기 중에도 보완 수업을 바로 계획할 수 있게 됐습니다.",
    },
  },
  {
    slug: "one-erp",
    category: "통합 ERP",
    color: "#7C3AED",
    icon: ShoppingBag,
    title: "주문·제작·재고 통합 ERP 구축",
    description:
      "쿠팡·스마트스토어·자사몰 주문과 단체 납품·커스텀 제작 주문을 한 목록에 모으고, 작업지시서·재고·정산까지 팀별로 이어지게 만들었습니다.",
    features: [
      "판매 채널 주문 연동·통합 주문관리",
      "디자인·생산 작업지시서와 예약·홀딩 재고",
      "채널별 매출 분석·정산과 팀별 권한",
    ],
    images: [],
    detail: {
      problem:
        "채널마다 관리 화면이 따로 있고 단체·커스텀 주문은 메신저로 들어와, 디자인팀·발주팀·물류팀·경리팀이 같은 주문을 각자 다른 표로 관리하고 있었습니다.",
      approach:
        "채널 주문을 한곳으로 동기화하고, 주문 유형에 따라 디자인 작업과 생산 작업지시가 자동으로 만들어지게 했습니다. 단체 주문으로 잡아 둔 재고는 예약·홀딩으로 따로 관리하고, 팀마다 볼 수 있는 메뉴를 나눴습니다.",
      result:
        "주문 접수부터 작업지시·출고·정산까지 한 흐름으로 이어져, 팀 사이에 주문 상태를 묻고 답하는 일이 줄고 채널별 매출을 바로 확인하게 됐습니다.",
    },
  },
  {
    slug: "export-car",
    demoUrl: "/demos/export-car/index.html",
    category: "수출 중고차",
    color: "#2563EB",
    icon: CarFront,
    title: "수출 중고차 운영 관리 ERP 구축",
    description:
      "여러 지점에 흩어진 수출용 중고차의 등록·지점 이동·출고·판매와 바이어 입금·미수금을 한 시스템에서 관리합니다.",
    features: [
      "차량 등록·출고 준비·출고·판매 진행 관리",
      "지점 간 이동 요청·승인·도착 확인",
      "바이어 입금·연체·지점별 미수금 현황",
    ],
    images: [],
    detail: {
      problem:
        "차량이 여러 지점 주차장에 나뉘어 있어 어느 차가 어디 있는지, 이동 중인지, 바이어 입금은 얼마나 남았는지 지점마다 전화로 확인해야 했습니다.",
      approach:
        "차량 한 대가 등록부터 출고·판매까지 거치는 단계를 정리하고, 지점 이동은 요청·승인·도착 확인을 거쳐야 보관 위치가 바뀌도록 설계했습니다. 바이어별 입금과 미수금은 지점 단위로 묶어 보이게 했습니다.",
      result:
        "본사에서 지점별 주차 현황과 이동 중인 차량, 미수금을 한 화면에서 보고, 연체된 입금을 놓치지 않게 됐습니다.",
    },
  },
  {
    slug: "procurement",
    demoUrl: "/demos/procurement/index.html",
    category: "조달 관리",
    color: "#7C3AED",
    icon: FileSpreadsheet,
    title: "나라장터 조달 주문 관리 시스템 구축",
    description:
      "나라장터로 들어오는 공공기관 납품요구를 받아 생산·납품·검수·대금 청구까지 단계별로 관리하는 B2B 관리자 시스템입니다.",
    features: [
      "나라장터 납품요구(조달 주문) 통합 관리",
      "생산·납품·검수 단계와 납기 D-day 관리",
      "수요기관별 실적·대금 청구 현황",
    ],
    images: [],
    detail: {
      problem:
        "공공기관 납품요구를 엑셀로 옮겨 적어 관리하다 보니, 납기가 가까운 건을 놓치거나 검수가 끝난 건의 대금 청구가 늦어지는 일이 있었습니다.",
      approach:
        "납품요구 한 건이 접수·생산·납품·검수·대금 청구 단계를 차례로 지나가도록 만들고, 납기까지 남은 날을 기준으로 정렬해 급한 건이 먼저 보이게 했습니다.",
      result:
        "납기 임박 건과 청구 가능한 금액이 대시보드에 바로 나타나, 납기 관리와 대금 회수를 한 화면에서 챙기게 됐습니다.",
    },
  },
  {
    slug: "tire-b2b",
    category: "B2B 유통",
    color: "#2563EB",
    icon: CircleDot,
    demoUrl: "/demos/tire-b2b/index.html",
    title: "타이어 B2B 주문·재고 통합 시스템 구축",
    description:
      "거래처가 타이어 사이즈만 입력하면 재고와 가격을 바로 보고 주문하고, 본사는 창고별 재고와 매입·매출 전표, 입출금까지 한 시스템에서 관리합니다.",
    features: [
      "사이즈 검색 주문·거래처별 할인율 그룹",
      "창고별 재고 스프레드시트·재고표 관리",
      "매입·매출 전표, 입출금 조회, 회원·역할 관리",
    ],
    images: [],
    detail: {
      problem:
        "거래처 주문은 전화와 메신저로, 창고별 재고는 엑셀로, 매입·매출은 별도 장부로 관리해 재고 확인과 정산에 손이 많이 갔습니다.",
      approach:
        "거래처가 직접 사이즈로 재고를 찾고 주문하는 화면을 만들고, 창고별 재고를 스프레드시트처럼 한눈에 보게 했습니다. 전표와 입출금, 할인율 그룹까지 같은 데이터로 묶었습니다.",
      result:
        "주문 문의 응대가 줄고, 창고별 재고와 매입·매출 현황을 한 화면에서 바로 확인하게 됐습니다.",
    },
  },
  {
    slug: "maison-intranet",
    category: "그룹웨어",
    color: "#7C3AED",
    icon: Building2,
    demoUrl: "/demos/maison-intranet/index.html",
    title: "복지시설 통합 인트라넷·ERP 구축",
    description:
      "전자결재, 일정·업무일지, 게시판부터 행정지원, 인사, 서비스기록, 회계까지 시설 운영에 필요한 업무를 하나의 인트라넷으로 옮겼습니다.",
    features: [
      "전자결재·결재경로 설정·기록관리대장",
      "일정·업무일지·게시판·공람문서",
      "행정지원·인사·서비스기록·회계 통합",
    ],
    images: [],
    detail: {
      problem:
        "오래된 인트라넷과 종이 서류, 엑셀이 섞여 있어 결재와 기록이 흩어지고, 부서마다 같은 내용을 여러 번 입력했습니다.",
      approach:
        "기존 인트라넷의 모든 화면을 문서로 정리한 뒤, 결재·일정·인사·회계·서비스기록을 한 시스템으로 다시 설계했습니다. 부서별 권한과 결재경로를 설정할 수 있게 했습니다.",
      result:
        "결재부터 기록까지 한곳에 남아, 부서 간 확인 요청과 중복 입력이 줄었습니다.",
    },
  },
  {
    slug: "ariworks",
    category: "사내 인트라넷",
    color: "#2563EB",
    icon: LayoutGrid,
    demoUrl: "/demos/ariworks/index.html",
    title: "사내 통합 인트라넷 구축 (상담·가맹점·마케팅·인사)",
    description:
      "상담대장, 가맹점, 재고, 마케팅 성과, 인사·급여, 매입매출까지 회사 업무 전체를 하나의 인트라넷에 모으고, 부서별 접근 권한과 삭제 결재로 정보를 지킵니다.",
    features: [
      "통합 상담대장·가맹점관리·고객문의·재고",
      "광고 성과·리드 현황 등 통합 마케팅 관리",
      "급여대장·연차·매입매출, 부서별 권한·삭제 결재",
    ],
    images: [],
    detail: {
      problem:
        "상담, 가맹점, 마케팅, 인사 자료가 부서별 시트와 메신저에 흩어져 있었고, 누가 어떤 개인정보를 보는지 관리하기 어려웠습니다.",
      approach:
        "업무별 메뉴를 한 인트라넷으로 모으고, 상담대장 데이터가 마케팅 리포트로 바로 이어지게 설계했습니다. 민감한 값은 가려 두었다가 열람할 때 기록을 남기고, 삭제는 결재를 거치도록 했습니다.",
      result:
        "부서마다 필요한 메뉴만 보이게 되어 정보 노출이 줄고, 상담부터 마케팅·정산까지 같은 데이터로 확인하게 됐습니다.",
    },
  },
]

// 체험해보기 링크: 실제 화면 체험판이 있으면 그쪽, 없으면 공통 틀 체험판
export const demoHref = (c: CaseItem) => c.demoUrl ?? `/portfolio/demo/${c.slug}`
