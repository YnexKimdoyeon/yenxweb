// 키오스크 사업 페이지 단일 출처 (/kiosk, /portfolio/kiosk)
// 실물 사진·규격·설치 사례는 자료가 들어오면 채운다. 그 전에는 화면에 '자료 준비 중'으로 표시한다.

export interface KioskType {
  slug: string
  name: string
  summary: string
  fits: string[] // 잘 맞는 설치 환경
}

export const kioskTypes: KioskType[] = [
  {
    slug: "stand",
    name: "스탠드형",
    summary: "바닥에 세워 두는 가장 일반적인 형태입니다. 매장 입구나 대기 공간처럼 여러 사람이 오가는 곳에 둡니다.",
    fits: ["음식점·카페 주문", "기관·병원 접수", "행사장 안내"],
  },
  {
    slug: "wall",
    name: "벽걸이형",
    summary: "벽에 붙여 바닥 공간을 차지하지 않습니다. 통로가 좁거나 동선을 비워야 하는 곳에 맞습니다.",
    fits: ["좁은 매장", "복도·로비 안내", "무인 매장"],
  },
  {
    slug: "table",
    name: "테이블형",
    summary: "테이블이나 카운터 위에 올려 쓰는 작은 형태입니다. 좌석에서 바로 주문하거나 직원 옆에 둡니다.",
    fits: ["테이블 주문", "카운터 보조 주문", "전시 체험"],
  },
  {
    slug: "counter",
    name: "카운터 일체형",
    summary: "기존 카운터나 가구에 맞춰 짜 넣는 형태입니다. 매장 인테리어에 맞춘 외함으로 제작합니다.",
    fits: ["인테리어 매장", "무인 카운터", "맞춤 가구 연동"],
  },
]

// 키오스크 포트폴리오에서 사례마다 보여 줄 항목
export const kioskSpecFields = ["외함 디자인", "디스플레이 규격", "사용 모듈", "설치 환경"]


// 주문제작 분야: 모든 분야 제작 가능, 대표 분야만 나열
export const kioskFields = [
  { title: "ERP 연동 키오스크", desc: "키오스크 입력이 재고·매출·작업 현황에 바로 반영됩니다." },
  { title: "발권 키오스크", desc: "번호표·입장권·식권·주차권 발권과 출력." },
  { title: "행사장 키오스크", desc: "참가 등록·티켓 발권·QR 입장 확인·현장 통계." },
  { title: "주문·결제 키오스크", desc: "식당·카페·무인매장 주문과 카드·간편결제." },
  { title: "접수·안내 키오스크", desc: "병원·기관 접수, 민원 번호표, 시설·길 안내." },
  { title: "출고 요청 키오스크", desc: "공장·물류센터 출고 요청과 지게차·작업자 배차." },
]

// 공공기관 납품 이력: 실제 납품 자료가 들어오면 채운다 (지어내지 않음)
export interface PublicDelivery {
  org: string // 납품 기관
  item: string // 품목·용도
  year: string
}
export const publicDeliveries: PublicDelivery[] = []

// 키오스크 포트폴리오 사례마다 적을 항목 (고객 문제 → 해결 → 성과 + 견적·기간)
export const kioskCaseFields = ["고객의 문제", "와이넥스의 해결", "고객이 얻은 성과", "견적 · 기간"]
