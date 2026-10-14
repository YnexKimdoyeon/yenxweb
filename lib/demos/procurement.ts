import { Building2, CalendarClock, FileSpreadsheet, LayoutDashboard, Wallet } from "lucide-react"
import type { DemoConfig, Row } from "./types"
import { count, day, insert, newId, patch, rows, sum, won } from "./util"

const flow = ["접수", "생산중", "납품완료", "검수완료", "대금청구"]
const orderBadge = { 접수: "amber", 생산중: "blue", 납품완료: "violet", 검수완료: "green", 대금청구: "gray" } as const

// 납기까지 남은 날 (D-n)
const dday = (due: string) => {
  const diff = Math.round((new Date(due).getTime() - new Date(day()).getTime()) / 86400000)
  return diff === 0 ? "D-day" : diff > 0 ? `D-${diff}` : `D+${-diff}`
}

// '나라장터 주문 불러오기'로 차례대로 들어오는 납품요구
const incoming = [
  { agency: "가온시 시청 민원과", item: "민원 상담 테이블", qty: 6, amount: 4380000 },
  { agency: "새솔중학교", item: "사물함 (4단)", qty: 30, amount: 7950000 },
]

export const procurement: DemoConfig = {
  slug: "procurement",
  product: "조달관리",
  org: "(가상) 한결 퍼니처",
  user: "관리자",
  accent: "#2A3A72",
  guide: [
    "조달 주문에서 '나라장터 주문 불러오기'를 눌러 새 납품요구를 받아 보세요",
    "'다음 단계'로 생산 → 납품 → 검수 → 대금 청구까지 넘기면 정산 화면 금액이 바뀝니다",
    "납기 관리는 납기가 가까운 순서로 D-day 를 보여 줍니다",
  ],
  seed: () => ({
    orders: rows("o", [
      { no: "R26-04512", date: day(-12), agency: "한빛초등학교", item: "학생용 책걸상 세트", qty: 60, amount: 9600000, due: day(3), status: "생산중" },
      { no: "R26-04533", date: day(-8), agency: "누리구청 총무과", item: "사무용 의자", qty: 25, amount: 4125000, due: day(9), status: "접수" },
      { no: "R26-04540", date: day(-6), agency: "가람도서관", item: "서가 (양면 5단)", qty: 12, amount: 6840000, due: day(1), status: "생산중" },
      { no: "R26-04488", date: day(-20), agency: "새봄유치원", item: "유아용 수납장", qty: 8, amount: 2240000, due: day(-2), status: "납품완료" },
      { no: "R26-04471", date: day(-25), agency: "누리구청 총무과", item: "회의용 테이블", qty: 4, amount: 3120000, due: day(-6), status: "검수완료" },
      { no: "R26-04402", date: day(-40), agency: "한빛초등학교", item: "교사용 책상", qty: 10, amount: 3900000, due: day(-18), status: "대금청구" },
    ]),
    cursor: [{ id: "c", n: 0 }],
  }),
  badge: (db) => ({ orders: count(db.orders, "status", "접수") }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "대시보드",
      icon: LayoutDashboard,
      title: "조달 주문 현황",
      kpis: (db) => {
        const open = db.orders.filter((o) => !["검수완료", "대금청구"].includes(String(o.status)))
        return [
          { label: "진행 중 주문", value: String(open.length), unit: "건" },
          { label: "납기 3일 이내", value: String(open.filter((o) => String(o.due) <= day(3) && o.status !== "납품완료").length), unit: "건", alert: true },
          { label: "청구 가능 금액", value: won(sum(db.orders.filter((o) => o.status === "검수완료"), "amount")) },
          { label: "누적 수주액", value: won(sum(db.orders, "amount")) },
        ]
      },
      chart: {
        title: "단계별 주문 금액",
        unit: "원",
        data: (db) => flow.map((s) => ({ label: s, value: sum(db.orders.filter((o) => o.status === s), "amount") })),
      },
      list: {
        title: "납기 임박",
        table: "orders",
        rows: (db) => db.orders.filter((o) => o.status === "접수" || o.status === "생산중").sort((a, b) => String(a.due).localeCompare(String(b.due))).map((o) => ({ ...o, d: dday(String(o.due)) })),
        columns: [
          { key: "item", label: "품목" },
          { key: "agency", label: "수요기관" },
          { key: "d", label: "납기", badge: {} },
        ],
      },
    },
    {
      kind: "table",
      id: "orders",
      label: "조달 주문",
      icon: FileSpreadsheet,
      title: "조달 주문 (납품요구)",
      description: "나라장터 납품요구를 받아 생산·납품·검수·대금 청구까지 한 줄로 관리합니다.",
      table: "orders",
      tabs: { key: "status", values: flow },
      toolbar: [
        {
          label: "나라장터 주문 불러오기",
          run: (db) => {
            const n = Number(db.cursor[0].n)
            if (n >= incoming.length) return { db, message: "새 납품요구가 없습니다" }
            const o = incoming[n]
            const row = { id: newId(), no: `R26-0456${n}`, date: day(), due: day(21), status: "접수", ...o } as Row
            return { db: patch(insert(db, "orders", row), "cursor", "c", { n: n + 1 }), message: `새 납품요구 1건: ${o.agency} · ${o.item} ${o.qty}개` }
          },
        },
      ],
      columns: [
        { key: "no", label: "납품요구번호", strong: true },
        { key: "agency", label: "수요기관" },
        { key: "item", label: "품목" },
        { key: "qty", label: "수량", format: "num" },
        { key: "amount", label: "금액", format: "won" },
        { key: "due", label: "납기" },
        { key: "status", label: "단계", badge: orderBadge },
      ],
      actions: [
        {
          label: "다음 단계",
          when: (r) => r.status !== "대금청구",
          run: (r, db) => {
            const next = flow[flow.indexOf(String(r.status)) + 1]
            return { db: patch(db, "orders", r.id, { status: next }), message: `${r.no} ${next}` }
          },
        },
      ],
      form: {
        create: "주문 직접 등록",
        edit: true,
        defaults: (db) => ({ no: `R26-0459${db.orders.length}`, date: day(), status: "접수" }),
        fields: [
          { key: "agency", label: "수요기관", required: true },
          { key: "item", label: "품목", required: true },
          { key: "qty", label: "수량", type: "number" },
          { key: "amount", label: "금액(원)", type: "number" },
          { key: "due", label: "납기", type: "date" },
        ],
      },
    },
    {
      kind: "table",
      id: "due",
      label: "납기 관리",
      icon: CalendarClock,
      title: "납기 관리",
      description: "아직 납품하지 않은 주문을 납기가 가까운 순서로 봅니다.",
      table: "orders",
      derive: (db) =>
        db.orders
          .filter((o) => o.status === "접수" || o.status === "생산중")
          .sort((a, b) => String(a.due).localeCompare(String(b.due)))
          .map((o) => ({ ...o, d: dday(String(o.due)), risk: String(o.due) <= day(3) ? "임박" : "여유" })),
      columns: [
        { key: "d", label: "남은 기간", strong: true },
        { key: "due", label: "납기" },
        { key: "agency", label: "수요기관" },
        { key: "item", label: "품목" },
        { key: "status", label: "단계", badge: orderBadge },
        { key: "risk", label: "판단", badge: { 임박: "red", 여유: "green" } },
      ],
    },
    {
      kind: "table",
      id: "agencies",
      label: "수요기관",
      icon: Building2,
      title: "수요기관별 실적",
      table: "orders",
      derive: (db) => {
        const names = [...new Set(db.orders.map((o) => String(o.agency)))]
        return names.map((a) => {
          const list = db.orders.filter((o) => o.agency === a)
          return { id: a, agency: a, n: list.length, total: sum(list, "amount"), last: list.map((o) => String(o.date)).sort().reverse()[0] }
        })
      },
      columns: [
        { key: "agency", label: "수요기관", strong: true },
        { key: "n", label: "주문", format: "num", unit: "건" },
        { key: "total", label: "누적 금액", format: "won" },
        { key: "last", label: "최근 주문일" },
      ],
    },
    {
      kind: "table",
      id: "billing",
      label: "대금 청구",
      icon: Wallet,
      title: "검수·대금 청구",
      description: "검수가 끝난 건은 바로 대금 청구로 넘깁니다.",
      table: "orders",
      tabs: { key: "status", values: ["납품완료", "검수완료", "대금청구"] },
      derive: (db) => db.orders.filter((o) => ["납품완료", "검수완료", "대금청구"].includes(String(o.status))),
      columns: [
        { key: "no", label: "납품요구번호", strong: true },
        { key: "agency", label: "수요기관" },
        { key: "item", label: "품목" },
        { key: "amount", label: "금액", format: "won" },
        { key: "status", label: "단계", badge: orderBadge },
      ],
    },
  ],
}
