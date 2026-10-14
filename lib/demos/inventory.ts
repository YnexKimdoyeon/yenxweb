import { Boxes, LayoutDashboard, ShoppingCart, Warehouse } from "lucide-react"
import type { DemoConfig } from "./types"
import { count, day, patch, rows, sum } from "./util"

const stockStatus = (stock: number, safety: number) =>
  stock <= 0 ? "품절" : stock < safety ? "부족" : "정상"

const stockBadge = { 정상: "green", 부족: "amber", 품절: "red" } as const

const products = [
  { code: "SK-1001", name: "유기농 현미 4kg", group: "곡물", warehouse: "본사 창고", stock: 84, safety: 30 },
  { code: "SK-1002", name: "찰보리 1kg", group: "곡물", warehouse: "본사 창고", stock: 12, safety: 20 },
  { code: "SK-2001", name: "국산 들기름 350ml", group: "오일", warehouse: "2창고", stock: 46, safety: 15 },
  { code: "SK-2002", name: "참기름 350ml", group: "오일", warehouse: "2창고", stock: 0, safety: 15 },
  { code: "SK-3001", name: "볶은 검정콩 500g", group: "견과·콩", warehouse: "본사 창고", stock: 130, safety: 40 },
  { code: "SK-3002", name: "구운 아몬드 1kg", group: "견과·콩", warehouse: "외부 물류", stock: 22, safety: 25 },
  { code: "SK-4001", name: "명절 선물세트 A", group: "선물세트", warehouse: "외부 물류", stock: 64, safety: 20 },
]

export const inventory: DemoConfig = {
  slug: "inventory",
  product: "재고 관리",
  org: "(가상) 소담 농산",
  user: "재고 담당",
  accent: "#5B21B6",
  guide: [
    "주문 화면에서 '출고'를 누르면 재고가 줄고, 안전재고 밑으로 내려가면 '부족'으로 바뀝니다",
    "재고 현황에서 '입고 +50'을 눌러 품절 상품을 살려 보세요",
    "창고별 화면은 재고가 바뀔 때마다 자동으로 다시 집계됩니다",
  ],
  seed: () => ({
    products: rows("p", products.map((p) => ({ ...p, status: stockStatus(p.stock, p.safety) }))),
    orders: rows("o", [
      { no: "OD-5531", date: day(), customer: "스마트스토어", product: "찰보리 1kg", qty: 3, status: "접수" },
      { no: "OD-5532", date: day(), customer: "쿠팡", product: "유기농 현미 4kg", qty: 10, status: "접수" },
      { no: "OD-5533", date: day(), customer: "자사몰", product: "구운 아몬드 1kg", qty: 4, status: "접수" },
      { no: "OD-5534", date: day(), customer: "스마트스토어", product: "참기름 350ml", qty: 2, status: "접수" },
      { no: "OD-5528", date: day(-1), customer: "쿠팡", product: "명절 선물세트 A", qty: 16, status: "출고완료" },
    ]),
  }),
  badge: (db) => ({ orders: count(db.orders, "status", "접수") }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "대시보드",
      icon: LayoutDashboard,
      title: "재고 대시보드",
      kpis: (db) => [
        { label: "전체 품목", value: String(db.products.length), unit: "개" },
        { label: "재고 부족", value: String(count(db.products, "status", "부족")), unit: "개", alert: count(db.products, "status", "부족") > 0 },
        { label: "품절", value: String(count(db.products, "status", "품절")), unit: "개", alert: count(db.products, "status", "품절") > 0 },
        { label: "출고 대기 주문", value: String(count(db.orders, "status", "접수")), unit: "건" },
      ],
      chart: {
        title: "상품군별 재고 수량",
        unit: "개",
        data: (db) =>
          ["곡물", "오일", "견과·콩", "선물세트"].map((g) => ({ label: g, value: sum(db.products.filter((p) => p.group === g), "stock") })),
      },
      list: {
        title: "채워 넣어야 할 상품",
        table: "products",
        filter: (r) => r.status !== "정상",
        columns: [
          { key: "name", label: "상품" },
          { key: "stock", label: "재고", format: "num", unit: "개" },
          { key: "status", label: "상태", badge: stockBadge },
        ],
      },
    },
    {
      kind: "table",
      id: "products",
      label: "재고 현황",
      icon: Boxes,
      title: "재고 현황",
      table: "products",
      tabs: { key: "status", values: ["정상", "부족", "품절"] },
      columns: [
        { key: "code", label: "코드" },
        { key: "name", label: "상품명", strong: true },
        { key: "group", label: "상품군" },
        { key: "warehouse", label: "창고" },
        { key: "stock", label: "현재고", format: "num" },
        { key: "safety", label: "안전재고", format: "num" },
        { key: "status", label: "상태", badge: stockBadge },
      ],
      actions: [
        {
          label: "입고 +50",
          run: (r, db) => {
            const stock = Number(r.stock) + 50
            return { db: patch(db, "products", r.id, { stock, status: stockStatus(stock, Number(r.safety)) }), message: `${r.name} 50개 입고 (현재 ${stock}개)` }
          },
        },
      ],
      form: {
        create: "상품 등록",
        edit: true,
        defaults: (db) => ({ code: `SK-${5000 + db.products.length}` }),
        compute: (v) => ({ status: stockStatus(Number(v.stock), Number(v.safety)) }),
        fields: [
          { key: "name", label: "상품명", required: true },
          { key: "group", label: "상품군", type: "select", options: ["곡물", "오일", "견과·콩", "선물세트"] },
          { key: "warehouse", label: "창고", type: "select", options: ["본사 창고", "2창고", "외부 물류"] },
          { key: "stock", label: "현재고", type: "number" },
          { key: "safety", label: "안전재고", type: "number" },
        ],
      },
    },
    {
      kind: "table",
      id: "orders",
      label: "주문·출고",
      icon: ShoppingCart,
      title: "주문·출고",
      description: "출고하면 해당 상품 재고가 자동으로 빠집니다.",
      table: "orders",
      tabs: { key: "status", values: ["접수", "출고완료"] },
      columns: [
        { key: "no", label: "주문번호", strong: true },
        { key: "date", label: "주문일" },
        { key: "customer", label: "판매처" },
        { key: "product", label: "상품" },
        { key: "qty", label: "수량", format: "num" },
        { key: "status", label: "상태", badge: { 접수: "amber", 출고완료: "green" } },
      ],
      actions: [
        {
          label: "출고",
          when: (r) => r.status === "접수",
          run: (r, db) => {
            const p = db.products.find((x) => x.name === r.product)
            if (!p) return { db, message: "상품을 찾을 수 없습니다" }
            const qty = Number(r.qty)
            if (Number(p.stock) < qty) return { db, message: `재고가 모자랍니다 (현재 ${p.stock}개). 먼저 입고해 주세요` }
            const stock = Number(p.stock) - qty
            let next = patch(db, "orders", r.id, { status: "출고완료" })
            next = patch(next, "products", p.id, { stock, status: stockStatus(stock, Number(p.safety)) })
            return { db: next, message: `${r.product} ${qty}개 출고, 남은 재고 ${stock}개` }
          },
        },
      ],
      form: {
        create: "주문 입력",
        defaults: (db) => ({ no: `OD-${5535 + db.orders.length - 5}`, date: day(), status: "접수" }),
        fields: [
          { key: "customer", label: "판매처", type: "select", options: ["스마트스토어", "쿠팡", "자사몰"] },
          { key: "product", label: "상품", type: "select", options: products.map((p) => p.name) },
          { key: "qty", label: "수량", type: "number", required: true },
        ],
      },
    },
    {
      kind: "table",
      id: "warehouses",
      label: "창고별 재고",
      icon: Warehouse,
      title: "창고별 재고",
      table: "products",
      derive: (db) =>
        ["본사 창고", "2창고", "외부 물류"].map((w) => {
          const list = db.products.filter((p) => p.warehouse === w)
          return { id: w, warehouse: w, items: list.length, stock: sum(list, "stock"), low: list.filter((p) => p.status !== "정상").length }
        }),
      columns: [
        { key: "warehouse", label: "창고", strong: true },
        { key: "items", label: "품목 수", format: "num" },
        { key: "stock", label: "총 재고", format: "num", unit: "개" },
        { key: "low", label: "부족·품절", format: "num", unit: "개" },
      ],
    },
  ],
}
