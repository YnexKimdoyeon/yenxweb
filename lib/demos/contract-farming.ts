import { LayoutDashboard, MapPinned, ShieldCheck, Sprout, Truck } from "lucide-react"
import type { DB, DemoConfig, Row } from "./types"
import { count, day, insert, newId, patch, rows, sum } from "./util"

// 종자량: 면적(㎡) × 0.005kg, 20kg 한 포
const seedKg = (area: number) => Math.round(area * 0.005 * 100) / 100
const bags = (area: number) => Math.max(1, Math.ceil(seedKg(area) / 20))

const farmersSeed = [
  { name: "권동수", phone: "010-0000-1000", zone: "1지구" },
  { name: "김미경", phone: "010-0000-1008", zone: "1지구" },
  { name: "박영수", phone: "010-0000-1002", zone: "2지구" },
  { name: "이옥순", phone: "010-0000-1001", zone: "2지구" },
  { name: "정민수", phone: "010-0000-1009", zone: "3지구" },
  { name: "최동호", phone: "010-0000-1004", zone: "4지구" },
]

const parcelsSeed = [
  ["권동수", "가람면 새들리 101", 4210],
  ["권동수", "가람면 새들리 102-1", 3309],
  ["권동수", "가람면 솔내리 55", 3000],
  ["김미경", "가람면 새들리 230", 3730],
  ["김미경", "가람면 새들리 231", 3000],
  ["박영수", "누리읍 한빛리 12", 4560],
  ["이옥순", "누리읍 한빛리 77-3", 3670],
  ["정민수", "다솜면 바위리 309", 6286],
  ["최동호", "라온면 큰들리 18", 5210],
] as const

// 농가별 필지·면적·종자를 필지 표에서 다시 계산
function farmerRows(db: DB): Row[] {
  return db.farmers.map((f) => {
    const mine = db.parcels.filter((p) => p.farmer === f.name)
    const area = sum(mine, "area")
    return {
      ...f,
      parcels: mine.length,
      area,
      seed: seedKg(area),
      bags: mine.reduce((s, p) => s + bags(Number(p.area)), 0),
      shipped: sum(db.shipments.filter((s) => s.farmer === f.name), "kg"),
    }
  })
}

const exBadge = { 대기: "amber", 승인: "green", 반려: "red" } as const

export const contractFarming: DemoConfig = {
  slug: "contract-farming",
  product: "계약재배 통합관리",
  org: "(가상) 쌀 생산자 협의회",
  user: "본부 관리자",
  accent: "#14532D",
  guide: [
    "필지 등록에서 '가람면 새들리 101'을 넣어 보세요. 이미 등록된 논이라 저장이 막힙니다",
    "새 지번(예: 가람면 새들리 500)을 넣으면 농가 면적·종자량·포수가 자동으로 다시 계산됩니다",
    "예외 승인에서 사업장이 올린 예외 신청을 승인하거나 반려해 보세요",
  ],
  seed: () => ({
    farmers: rows("f", farmersSeed),
    parcels: rows("p", parcelsSeed.map(([farmer, address, area]) => ({ farmer, address, area, seed: seedKg(area), bags: bags(area), date: day(-20) }))),
    exceptions: rows("e", [
      { date: day(-1), zone: "2지구", farmer: "박영수", reason: "공동 경작 논 (지분 2분의 1)", address: "누리읍 한빛리 12", status: "대기" },
      { date: day(-2), zone: "3지구", farmer: "정민수", reason: "지번 분할 후 재등록", address: "다솜면 바위리 309-2", status: "대기" },
      { date: day(-6), zone: "1지구", farmer: "김미경", reason: "임차 논 추가", address: "가람면 새들리 232", status: "승인" },
    ]),
    shipments: rows("s", [
      { date: day(-3), farmer: "권동수", round: "1회차", kg: 900, grade: "특" },
      { date: day(-3), farmer: "김미경", round: "1회차", kg: 1800, grade: "상" },
      { date: day(-2), farmer: "최동호", round: "1회차", kg: 4200, grade: "특" },
    ]),
  }),
  badge: (db) => ({ exceptions: count(db.exceptions, "status", "대기") }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "대시보드",
      icon: LayoutDashboard,
      title: "대시보드",
      description: "올해 계약재배 전체 사업장 현황입니다.",
      kpis: (db) => [
        { label: "총 계약농가", value: String(db.farmers.length), unit: "농가" },
        { label: "총 계약면적", value: (sum(db.parcels, "area") / 10000).toFixed(2), unit: "ha" },
        { label: "신청 포수", value: String(sum(db.parcels, "bags")), unit: "포" },
        { label: "예외 승인 대기", value: String(count(db.exceptions, "status", "대기")), unit: "건", alert: count(db.exceptions, "status", "대기") > 0 },
      ],
      chart: {
        title: "지구별 계약면적",
        unit: "㎡",
        data: (db) =>
          ["1지구", "2지구", "3지구", "4지구"].map((z) => {
            const names = db.farmers.filter((f) => f.zone === z).map((f) => f.name)
            return { label: z, value: sum(db.parcels.filter((p) => names.includes(p.farmer)), "area") }
          }),
      },
      list: {
        title: "예외 승인 대기",
        table: "exceptions",
        filter: (r) => r.status === "대기",
        columns: [
          { key: "farmer", label: "농가" },
          { key: "zone", label: "지구" },
          { key: "status", label: "상태", badge: exBadge },
        ],
      },
    },
    {
      kind: "table",
      id: "farmers",
      label: "계약재배 등록",
      icon: Sprout,
      title: "계약재배 등록 (농가)",
      description: "필지가 바뀌면 농가별 면적·종자량·포수가 자동으로 다시 계산됩니다.",
      table: "farmers",
      derive: farmerRows,
      columns: [
        { key: "name", label: "농가명", strong: true },
        { key: "phone", label: "연락처" },
        { key: "zone", label: "지구" },
        { key: "parcels", label: "필지", format: "num" },
        { key: "area", label: "면적", format: "num", unit: "㎡" },
        { key: "seed", label: "종자", unit: "kg" },
        { key: "bags", label: "포수", format: "num", unit: "포" },
        { key: "shipped", label: "출하", format: "num", unit: "kg" },
      ],
    },
    {
      kind: "table",
      id: "parcels",
      label: "필지 등록",
      icon: MapPinned,
      title: "필지(논) 등록",
      description: "지번을 넣으면 전체 사업장에서 중복을 먼저 확인합니다. 이미 등록된 논은 저장되지 않습니다.",
      table: "parcels",
      quick: {
        label: "새 논 지번",
        placeholder: "가람면 새들리 500",
        run: (value, db) => {
          const address = value.replace(/\s+/g, " ")
          const dup = db.parcels.find((p) => p.address === address)
          if (dup) return { db, message: `이미 ${dup.farmer} 농가에 등록된 논입니다. 저장하지 않았습니다 (중복 차단)` }
          const area = 3000
          const row = { id: newId(), farmer: "정민수", address, area, seed: seedKg(area), bags: bags(area), date: day() } as Row
          return { db: insert(db, "parcels", row), message: `정민수 농가에 ${address} (${area.toLocaleString()}㎡) 등록, 종자 ${seedKg(area)}kg` }
        },
      },
      columns: [
        { key: "farmer", label: "농가", strong: true },
        { key: "address", label: "지번" },
        { key: "area", label: "면적", format: "num", unit: "㎡" },
        { key: "seed", label: "종자", unit: "kg" },
        { key: "bags", label: "포수", format: "num", unit: "포" },
        { key: "date", label: "등록일" },
      ],
      deletable: true,
    },
    {
      kind: "table",
      id: "exceptions",
      label: "예외 승인",
      icon: ShieldCheck,
      title: "예외 승인",
      description: "중복으로 막힌 논 중 공동 경작처럼 사정이 있는 건은 사업장이 예외 신청을 올리고 본부가 승인합니다.",
      table: "exceptions",
      tabs: { key: "status", values: ["대기", "승인", "반려"] },
      columns: [
        { key: "date", label: "신청일" },
        { key: "zone", label: "지구" },
        { key: "farmer", label: "농가", strong: true },
        { key: "address", label: "지번" },
        { key: "reason", label: "사유" },
        { key: "status", label: "상태", badge: exBadge },
      ],
      actions: [
        { label: "승인", when: (r) => r.status === "대기", run: (r, db) => ({ db: patch(db, "exceptions", r.id, { status: "승인" }), message: `${r.farmer} 농가 예외 승인` }) },
        { label: "반려", danger: true, when: (r) => r.status === "대기", run: (r, db) => ({ db: patch(db, "exceptions", r.id, { status: "반려" }), message: `${r.farmer} 농가 예외 반려` }) },
      ],
    },
    {
      kind: "table",
      id: "shipments",
      label: "수매·출하",
      icon: Truck,
      title: "수매·출하 관리",
      table: "shipments",
      columns: [
        { key: "date", label: "출하일" },
        { key: "farmer", label: "농가", strong: true },
        { key: "round", label: "회차" },
        { key: "kg", label: "출하량", format: "num", unit: "kg" },
        { key: "grade", label: "등급", badge: { 특: "green", 상: "blue", 보통: "gray" } },
      ],
      deletable: true,
      form: {
        create: "출하 입력",
        edit: true,
        defaults: () => ({ date: day() }),
        fields: [
          { key: "farmer", label: "농가", type: "select", options: farmersSeed.map((f) => f.name) },
          { key: "round", label: "회차", type: "select", options: ["1회차", "2회차", "3회차"] },
          { key: "kg", label: "출하량(kg)", type: "number", required: true },
          { key: "grade", label: "등급", type: "select", options: ["특", "상", "보통"] },
        ],
      },
    },
  ],
}
