import { Boxes, ClipboardList, LayoutDashboard, ReceiptText, ShoppingBag } from "lucide-react"
import type { DemoConfig, Row } from "./types"
import { count, day, insert, newId, patch, rows, sum, won } from "./util"

const channels = ["쿠팡", "스마트스토어", "자사몰", "단체납품"]
const orderBadge = { 접수: "amber", 작업지시: "blue", 출고완료: "green" } as const
const workBadge = { 디자인작업: "violet", 생산중: "blue", 작업지시완료: "green" } as const

const stockStatus = (stock: number, held: number) => (stock - held <= 0 ? "부족" : stock - held < 20 ? "주의" : "정상")

// '채널 동기화'를 누를 때마다 들어오는 주문
const incoming = [
  { channel: "쿠팡", type: "온라인 주문", customer: "쿠팡 고객", item: "무지 반팔 티셔츠", qty: 3, amount: 38700 },
  { channel: "스마트스토어", type: "온라인 주문", customer: "스토어 고객", item: "자수 볼캡", qty: 2, amount: 39800 },
  { channel: "자사몰", type: "커스텀 제작", customer: "자사몰 고객", item: "커스텀 후드티", qty: 1, amount: 45000 },
]

export const oneErp: DemoConfig = {
  slug: "one-erp",
  product: "ONE ERP",
  org: "(가상) 리얼웨어",
  user: "정대표 · 대표/관리자",
  accent: "#312E81",
  guide: [
    "통합 주문에서 '채널 동기화'를 누르면 쿠팡·스마트스토어·자사몰 주문이 한곳으로 들어옵니다",
    "'작업지시'를 누르면 작업지시서가 자동으로 만들어지고, 출고하면 재고가 빠집니다",
    "매출·정산 화면은 채널별 매출을 주문에서 바로 집계합니다",
  ],
  seed: () => ({
    orders: rows("o", [
      { no: "OR-3101", date: day(), channel: "쿠팡", type: "온라인 주문", customer: "쿠팡 고객", item: "무지 반팔 티셔츠", qty: 5, amount: 64500, status: "접수" },
      { no: "OR-3102", date: day(), channel: "단체납품", type: "단체 납품", customer: "한빛고 3학년", item: "반티 (인쇄)", qty: 120, amount: 1680000, status: "접수" },
      { no: "OR-3103", date: day(-1), channel: "스마트스토어", type: "온라인 주문", customer: "스토어 고객", item: "자수 볼캡", qty: 2, amount: 39800, status: "작업지시" },
      { no: "OR-3104", date: day(-1), channel: "자사몰", type: "커스텀 제작", customer: "자사몰 고객", item: "커스텀 후드티", qty: 4, amount: 180000, status: "작업지시" },
      { no: "OR-3098", date: day(-3), channel: "단체납품", type: "단체 납품", customer: "누리테크", item: "회사 단체복", qty: 40, amount: 1120000, status: "출고완료" },
      { no: "OR-3099", date: day(-2), channel: "쿠팡", type: "온라인 주문", customer: "쿠팡 고객", item: "무지 반팔 티셔츠", qty: 10, amount: 129000, status: "출고완료" },
    ]),
    works: rows("w", [
      { no: "WK-201", order: "OR-3103", item: "자수 볼캡", qty: 2, team: "생산", status: "생산중" },
      { no: "WK-202", order: "OR-3104", item: "커스텀 후드티", qty: 4, team: "디자인팀", status: "디자인작업" },
    ]),
    stock: rows("s", [
      { item: "무지 반팔 티셔츠", stock: 240, held: 15 },
      { item: "반티 (인쇄)", stock: 80, held: 0 },
      { item: "자수 볼캡", stock: 18, held: 2 },
      { item: "커스텀 후드티", stock: 30, held: 4 },
      { item: "회사 단체복", stock: 12, held: 0 },
    ].map((s) => ({ ...s, status: stockStatus(s.stock, s.held) }))),
    cursor: [{ id: "c", n: 0 }],
  }),
  badge: (db) => ({ orders: count(db.orders, "status", "접수"), works: db.works.filter((w) => w.status !== "작업지시완료").length }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "대시보드",
      icon: LayoutDashboard,
      title: "오늘의 업무 현황",
      kpis: (db) => [
        { label: "오늘 들어온 주문", value: String(db.orders.filter((o) => o.date === day()).length), unit: "건" },
        { label: "진행 중 작업지시", value: String(db.works.filter((w) => w.status !== "작업지시완료").length), unit: "건" },
        { label: "재고 부족·주의", value: String(db.stock.filter((s) => s.status !== "정상").length), unit: "품목", alert: db.stock.some((s) => s.status === "부족") },
        { label: "총 매출", value: won(sum(db.orders, "amount")) },
      ],
      chart: {
        title: "채널별 매출",
        unit: "원",
        data: (db) => channels.map((c) => ({ label: c, value: sum(db.orders.filter((o) => o.channel === c), "amount") })),
      },
      list: {
        title: "처리할 주문",
        table: "orders",
        filter: (r) => r.status === "접수",
        columns: [
          { key: "item", label: "상품" },
          { key: "channel", label: "채널" },
          { key: "status", label: "상태", badge: orderBadge },
        ],
      },
    },
    {
      kind: "table",
      id: "orders",
      label: "통합 주문",
      icon: ShoppingBag,
      title: "통합 주문관리",
      description: "온라인 주문·단체 납품·커스텀 제작을 한 목록에서 처리합니다.",
      table: "orders",
      tabs: { key: "status", values: ["접수", "작업지시", "출고완료"] },
      toolbar: [
        {
          label: "채널 동기화",
          run: (db) => {
            const n = Number(db.cursor[0].n)
            if (n >= incoming.length) return { db, message: "새로 들어온 주문이 없습니다" }
            const o = incoming[n]
            const row = { id: newId(), no: `OR-${3105 + n}`, date: day(), status: "접수", ...o } as Row
            return { db: patch(insert(db, "orders", row), "cursor", "c", { n: n + 1 }), message: `${o.channel} 주문 1건을 가져왔습니다 (${o.item})` }
          },
        },
      ],
      columns: [
        { key: "no", label: "주문번호", strong: true },
        { key: "date", label: "주문일" },
        { key: "channel", label: "채널" },
        { key: "type", label: "유형" },
        { key: "customer", label: "주문처" },
        { key: "item", label: "상품" },
        { key: "qty", label: "수량", format: "num" },
        { key: "amount", label: "금액", format: "won" },
        { key: "status", label: "상태", badge: orderBadge },
      ],
      actions: [
        {
          label: "작업지시",
          when: (r) => r.status === "접수",
          run: (r, db) => {
            const custom = r.type !== "온라인 주문"
            const work = { id: newId(), no: `WK-${203 + db.works.length - 2}`, order: r.no, item: r.item, qty: r.qty, team: custom ? "디자인팀" : "생산", status: custom ? "디자인작업" : "생산중" } as Row
            return { db: insert(patch(db, "orders", r.id, { status: "작업지시" }), "works", work), message: `${r.no} 작업지시서 발행 (${work.team})` }
          },
        },
        {
          label: "출고",
          when: (r) => r.status === "작업지시",
          run: (r, db) => {
            const s = db.stock.find((x) => x.item === r.item)
            if (s && Number(s.stock) < Number(r.qty)) return { db, message: `재고가 모자랍니다 (현재 ${s.stock}개)` }
            let next = patch(db, "orders", r.id, { status: "출고완료" })
            if (s) {
              const stock = Number(s.stock) - Number(r.qty)
              next = patch(next, "stock", s.id, { stock, status: stockStatus(stock, Number(s.held)) })
            }
            const w = db.works.find((x) => x.order === r.no)
            if (w) next = patch(next, "works", w.id, { status: "작업지시완료" })
            return { db: next, message: `${r.no} 출고 완료, 재고에서 ${r.qty}개 차감` }
          },
        },
      ],
    },
    {
      kind: "table",
      id: "works",
      label: "작업지시서",
      icon: ClipboardList,
      title: "작업지시서",
      description: "커스텀·단체 주문은 디자인팀을 거쳐 생산으로 넘어갑니다.",
      table: "works",
      tabs: { key: "status", values: ["디자인작업", "생산중", "작업지시완료"] },
      columns: [
        { key: "no", label: "지시 번호", strong: true },
        { key: "order", label: "주문번호" },
        { key: "item", label: "상품" },
        { key: "qty", label: "수량", format: "num" },
        { key: "team", label: "담당" },
        { key: "status", label: "진행", badge: workBadge },
      ],
      actions: [
        { label: "시안 확정", when: (r) => r.status === "디자인작업", run: (r, db) => ({ db: patch(db, "works", r.id, { status: "생산중", team: "생산" }), message: `${r.no} 시안 확정, 생산으로 넘김` }) },
        { label: "생산 완료", when: (r) => r.status === "생산중", run: (r, db) => ({ db: patch(db, "works", r.id, { status: "작업지시완료" }), message: `${r.no} 생산 완료` }) },
      ],
    },
    {
      kind: "table",
      id: "stock",
      label: "재고·물류",
      icon: Boxes,
      title: "통합 재고관리",
      description: "단체 주문 등으로 잡아 둔 수량은 '예약·홀딩'으로 따로 빼서 봅니다.",
      table: "stock",
      tabs: { key: "status", values: ["정상", "주의", "부족"] },
      columns: [
        { key: "item", label: "상품", strong: true },
        { key: "stock", label: "현재고", format: "num" },
        { key: "held", label: "예약·홀딩", format: "num" },
        { key: "status", label: "상태", badge: { 정상: "green", 주의: "amber", 부족: "red" } },
      ],
      actions: [
        {
          label: "입고 +50",
          run: (r, db) => {
            const stock = Number(r.stock) + 50
            return { db: patch(db, "stock", r.id, { stock, status: stockStatus(stock, Number(r.held)) }), message: `${r.item} 50개 입고` }
          },
        },
      ],
    },
    {
      kind: "table",
      id: "sales",
      label: "매출·정산",
      icon: ReceiptText,
      title: "채널별 매출·정산",
      table: "orders",
      derive: (db) =>
        channels.map((c) => {
          const list = db.orders.filter((o) => o.channel === c)
          const shipped = list.filter((o) => o.status === "출고완료")
          return { id: c, channel: c, n: list.length, total: sum(list, "amount"), settled: sum(shipped, "amount"), pending: sum(list, "amount") - sum(shipped, "amount") }
        }),
      columns: [
        { key: "channel", label: "채널", strong: true },
        { key: "n", label: "주문", format: "num", unit: "건" },
        { key: "total", label: "매출", format: "won" },
        { key: "settled", label: "정산 대상(출고완료)", format: "won" },
        { key: "pending", label: "미출고", format: "won" },
      ],
    },
  ],
}
