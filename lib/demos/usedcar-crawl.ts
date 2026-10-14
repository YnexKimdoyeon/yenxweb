import { Car, LayoutDashboard, LineChart, Radar } from "lucide-react"
import type { DemoConfig, Row } from "./types"
import { count, day, insert, newId, patch, rows } from "./util"

// 시세 대비 가격 차이(%)
const gap = (price: number, market: number) => Math.round(((price - market) / market) * 100)

const listing = (site: string, model: string, year: number, km: number, price: number, market: number, status: string) => ({
  site, model, year, km, price, market, gap: `${gap(price, market) > 0 ? "+" : ""}${gap(price, market)}%`, found: day(), status,
})

// '지금 수집'을 누를 때마다 차례대로 들어오는 매물
const incoming = [
  ["매물사이트 A", "그랜저 IG", 2020, 61000, 2390, 2550],
  ["매물사이트 C", "쏘렌토 MQ4", 2021, 38000, 3180, 3250],
  ["매물사이트 B", "아반떼 CN7", 2022, 22000, 1720, 1840],
  ["매물사이트 A", "K5 DL3", 2021, 45000, 2050, 2010],
] as const

const listBadge = { 신규: "blue", 관심: "violet", 매입검토: "amber", 제외: "gray" } as const

export const usedcarCrawl: DemoConfig = {
  slug: "usedcar-crawl",
  product: "매물 수집",
  org: "(가상) 굿카 상사",
  user: "매입 담당",
  accent: "#1E40AF",
  guide: [
    "매물 수집에서 '지금 수집 실행'을 누르면 새 매물이 들어옵니다",
    "시세 대비가 마이너스인 매물(시세보다 싼 매물)을 '관심'으로 올려 보세요",
    "모델별 시세 화면은 수집된 매물로 평균가를 다시 계산합니다",
  ],
  seed: () => ({
    listings: rows("l", [
      listing("매물사이트 A", "아반떼 CN7", 2021, 34000, 1650, 1780, "신규"),
      listing("매물사이트 B", "그랜저 IG", 2019, 72000, 2190, 2260, "신규"),
      listing("매물사이트 C", "쏘나타 DN8", 2020, 58000, 1890, 1850, "신규"),
      listing("매물사이트 A", "K5 DL3", 2022, 27000, 2290, 2380, "관심"),
      listing("매물사이트 B", "쏘렌토 MQ4", 2020, 66000, 2880, 2950, "매입검토"),
      listing("매물사이트 C", "아반떼 CN7", 2020, 81000, 1490, 1420, "제외"),
    ]),
    stock: rows("s", [
      { car: "그랜저 IG 2019 (12가 3456)", buy: 2050, sell: 2290, days: 12, status: "판매중" },
      { car: "K5 DL3 2021 (34나 7890)", buy: 2010, sell: 2240, days: 5, status: "상품화" },
      { car: "아반떼 CN7 2021 (56다 1234)", buy: 1560, sell: 1730, days: 21, status: "판매중" },
    ]),
    cursor: [{ id: "c", n: 0 }],
  }),
  badge: (db) => ({ listings: count(db.listings, "status", "신규") }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "대시보드",
      icon: LayoutDashboard,
      title: "매물 대시보드",
      kpis: (db) => [
        { label: "오늘 수집 매물", value: String(db.listings.filter((r) => r.found === day()).length), unit: "대" },
        { label: "시세 이하 매물", value: String(db.listings.filter((r) => String(r.gap).startsWith("-")).length), unit: "대", alert: true },
        { label: "관심·매입검토", value: String(count(db.listings, "status", "관심") + count(db.listings, "status", "매입검토")), unit: "대" },
        { label: "보유 재고", value: String(db.stock.filter((r) => r.status !== "판매완료").length), unit: "대" },
      ],
      chart: {
        title: "사이트별 수집 매물 수",
        unit: "대",
        data: (db) => ["매물사이트 A", "매물사이트 B", "매물사이트 C"].map((s) => ({ label: s.replace("매물사이트 ", "사이트 "), value: db.listings.filter((r) => r.site === s).length })),
      },
      list: {
        title: "시세보다 싼 매물",
        table: "listings",
        filter: (r) => String(r.gap).startsWith("-") && r.status !== "제외",
        columns: [
          { key: "model", label: "모델" },
          { key: "price", label: "가격", format: "num", unit: "만원" },
          { key: "gap", label: "시세 대비", badge: {} },
        ],
      },
    },
    {
      kind: "table",
      id: "listings",
      label: "매물 수집",
      icon: Radar,
      title: "수집 매물",
      description: "여러 매물 사이트를 정해진 시간마다 자동으로 돌며 새 매물을 모읍니다.",
      table: "listings",
      tabs: { key: "status", values: ["신규", "관심", "매입검토", "제외"] },
      toolbar: [
        {
          label: "지금 수집 실행",
          run: (db) => {
            const n = Number(db.cursor[0].n)
            if (n >= incoming.length) return { db, message: "새로 올라온 매물이 없습니다" }
            const [site, model, year, km, price, market] = incoming[n]
            const row = { id: newId(), ...listing(site, model, year, km, price, market, "신규") } as Row
            const next = patch(insert(db, "listings", row), "cursor", "c", { n: n + 1 })
            return { db: next, message: `새 매물 1건 수집: ${model} ${year}년식 ${price}만원` }
          },
        },
      ],
      columns: [
        { key: "found", label: "수집일" },
        { key: "site", label: "출처" },
        { key: "model", label: "모델", strong: true },
        { key: "year", label: "연식" },
        { key: "km", label: "주행거리", format: "num", unit: "km" },
        { key: "price", label: "가격", format: "num", unit: "만원" },
        { key: "market", label: "시세", format: "num", unit: "만원" },
        { key: "gap", label: "시세 대비" },
        { key: "status", label: "상태", badge: listBadge },
      ],
      actions: [
        { label: "관심", when: (r) => r.status === "신규", run: (r, db) => ({ db: patch(db, "listings", r.id, { status: "관심" }), message: `${r.model} 관심 매물로 등록` }) },
        { label: "매입 검토", when: (r) => r.status === "관심", run: (r, db) => ({ db: patch(db, "listings", r.id, { status: "매입검토" }), message: `${r.model} 매입 검토로 넘김` }) },
        { label: "제외", danger: true, when: (r) => r.status === "신규" || r.status === "관심", run: (r, db) => ({ db: patch(db, "listings", r.id, { status: "제외" }), message: "목록에서 제외했습니다" }) },
      ],
    },
    {
      kind: "table",
      id: "market",
      label: "모델별 시세",
      icon: LineChart,
      title: "모델별 시세 분석",
      table: "listings",
      derive: (db) => {
        const models = [...new Set(db.listings.map((r) => String(r.model)))]
        return models.map((m) => {
          const list = db.listings.filter((r) => r.model === m)
          const avg = list.reduce((s, r) => s + Number(r.price), 0) / list.length
          const market = list.reduce((s, r) => s + Number(r.market), 0) / list.length
          const min = Math.min(...list.map((r) => Number(r.price)))
          return { id: m, model: m, n: list.length, avg: Math.round(avg), market: Math.round(market), min, gap: `${gap(avg, market)}%` }
        })
      },
      columns: [
        { key: "model", label: "모델", strong: true },
        { key: "n", label: "매물 수", format: "num" },
        { key: "avg", label: "평균 가격", format: "num", unit: "만원" },
        { key: "min", label: "최저가", format: "num", unit: "만원" },
        { key: "market", label: "시세", format: "num", unit: "만원" },
        { key: "gap", label: "시세 대비" },
      ],
    },
    {
      kind: "table",
      id: "stock",
      label: "보유 재고",
      icon: Car,
      title: "보유 차량 재고",
      table: "stock",
      tabs: { key: "status", values: ["상품화", "판매중", "판매완료"] },
      columns: [
        { key: "car", label: "차량", strong: true },
        { key: "buy", label: "매입가", format: "num", unit: "만원" },
        { key: "sell", label: "판매가", format: "num", unit: "만원" },
        { key: "days", label: "보유 일수", format: "num", unit: "일" },
        { key: "status", label: "상태", badge: { 상품화: "amber", 판매중: "blue", 판매완료: "green" } },
      ],
      actions: [
        { label: "판매 시작", when: (r) => r.status === "상품화", run: (r, db) => ({ db: patch(db, "stock", r.id, { status: "판매중" }), message: "판매중으로 바꿨습니다" }) },
        { label: "판매 완료", when: (r) => r.status === "판매중", run: (r, db) => ({ db: patch(db, "stock", r.id, { status: "판매완료" }), message: `${r.car} 판매 완료 (차익 ${Number(r.sell) - Number(r.buy)}만원)` }) },
      ],
      form: {
        edit: true,
        fields: [
          { key: "sell", label: "판매가(만원)", type: "number" },
        ],
      },
    },
  ],
}
