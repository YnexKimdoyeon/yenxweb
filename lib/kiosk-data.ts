// 키오스크 사업 페이지 단일 출처 (/kiosk, /kiosk/products, /kiosk/erp, /portfolio/kiosk)
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

// 키오스크 + ERP 결합 상품에서 하나로 이어지는 흐름
export const bundleFlow = [
  { step: "키오스크 주문·결제", desc: "손님이 키오스크에서 주문하고 결제합니다." },
  { step: "재고 자동 차감", desc: "주문된 상품만큼 ERP 재고가 바로 줄어듭니다." },
  { step: "매출·정산 집계", desc: "결제 내역이 매출과 정산 화면에 자동으로 쌓입니다." },
  { step: "현황판·알림", desc: "부족한 재고와 오늘 매출을 관리자가 한 화면에서 봅니다." },
]
