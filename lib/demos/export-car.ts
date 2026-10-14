import { ArrowLeftRight, CarFront, LayoutDashboard, Landmark, MapPin } from "lucide-react"
import type { DemoConfig, Row } from "./types"
import { count, day, patch, rows, won } from "./util"

const branches = ["인천 본사", "평택 지점", "부산 지점"]
const carBadge = { 입고: "gray", 출고준비: "amber", 출고완료: "blue", 판매완료: "green" } as const
const moveFlow = ["이동요청", "이동승인", "이동중", "도착확인대기", "이동완료"]
const moveBadge = { 이동요청: "amber", 이동승인: "blue", 이동중: "violet", 도착확인대기: "amber", 이동완료: "green" } as const
const payBadge = { 입금대기: "gray", 일부입금: "amber", 입금완료: "green", 연체: "red" } as const

export const exportCar: DemoConfig = {
  slug: "export-car",
  product: "수출 중고차 운영",
  org: "(가상) 오토브릿지",
  user: "본사 관리자",
  accent: "#9A3412",
  guide: [
    "지점 이동에서 '다음 단계'로 요청 → 승인 → 이동 → 도착 확인까지 넘겨 보세요. 끝나면 차량의 지점이 바뀝니다",
    "차량 관리에서 '차량 등록'으로 새 차를 넣고 출고 준비·출고까지 진행해 보세요",
    "입금·미수금에서 '잔금 입금'을 누르면 지점별 미수금이 바로 줄어듭니다",
  ],
  seed: () => ({
    cars: rows("c", [
      { plate: "123가 4567", model: "투싼 NX4", year: 2021, branch: "인천 본사", buyer: "요르단 A사", price: 18500000, status: "출고준비" },
      { plate: "45나 6789", model: "쏘나타 DN8", year: 2020, branch: "인천 본사", buyer: "", price: 14200000, status: "입고" },
      { plate: "78다 1234", model: "스포티지 NQ5", year: 2022, branch: "평택 지점", buyer: "키르기스스탄 B사", price: 21800000, status: "출고완료" },
      { plate: "90라 5678", model: "포터2", year: 2019, branch: "평택 지점", buyer: "", price: 9800000, status: "입고" },
      { plate: "12마 3456", model: "그랜저 IG", year: 2019, branch: "부산 지점", buyer: "리비아 C사", price: 16900000, status: "판매완료" },
      { plate: "34바 7890", model: "아반떼 CN7", year: 2021, branch: "부산 지점", buyer: "", price: 12400000, status: "입고" },
    ]),
    moves: rows("m", [
      { date: day(), car: "45나 6789 쏘나타 DN8", from: "인천 본사", to: "평택 지점", status: "이동요청" },
      { date: day(-1), car: "34바 7890 아반떼 CN7", from: "부산 지점", to: "인천 본사", status: "이동중" },
      { date: day(-4), car: "78다 1234 스포티지 NQ5", from: "인천 본사", to: "평택 지점", status: "이동완료" },
    ]),
    payments: rows("p", [
      { buyer: "요르단 A사", car: "123가 4567 투싼 NX4", branch: "인천 본사", amount: 18500000, paid: 5000000, due: day(7), status: "일부입금" },
      { buyer: "키르기스스탄 B사", car: "78다 1234 스포티지 NQ5", branch: "평택 지점", amount: 21800000, paid: 0, due: day(-2), status: "연체" },
      { buyer: "리비아 C사", car: "12마 3456 그랜저 IG", branch: "부산 지점", amount: 16900000, paid: 16900000, due: day(-10), status: "입금완료" },
    ]),
  }),
  badge: (db) => ({ moves: db.moves.filter((m) => m.status === "이동요청" || m.status === "도착확인대기").length }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "대시보드",
      icon: LayoutDashboard,
      title: "운영 현황",
      kpis: (db) => {
        const unpaid = db.payments.reduce((s, p) => s + Number(p.amount) - Number(p.paid), 0)
        return [
          { label: "전체 재고 차량", value: String(db.cars.filter((c) => c.status !== "판매완료").length), unit: "대" },
          { label: "이동 중·승인 대기", value: String(db.moves.filter((m) => m.status !== "이동완료").length), unit: "건" },
          { label: "전체 미수금", value: won(unpaid), alert: unpaid > 0 },
          { label: "판매 완료", value: String(count(db.cars, "status", "판매완료")), unit: "대" },
        ]
      },
      chart: {
        title: "지점별 보유 차량",
        unit: "대",
        data: (db) => branches.map((b) => ({ label: b.replace(" 지점", "").replace(" 본사", ""), value: db.cars.filter((c) => c.branch === b && c.status !== "판매완료").length })),
      },
      list: {
        title: "처리할 이동 요청",
        table: "moves",
        filter: (r) => r.status === "이동요청" || r.status === "도착확인대기",
        columns: [
          { key: "car", label: "차량" },
          { key: "to", label: "도착지" },
          { key: "status", label: "상태", badge: moveBadge },
        ],
      },
    },
    {
      kind: "table",
      id: "cars",
      label: "차량 관리",
      icon: CarFront,
      title: "차량 관리",
      table: "cars",
      tabs: { key: "status", values: ["입고", "출고준비", "출고완료", "판매완료"] },
      columns: [
        { key: "plate", label: "차량번호", strong: true },
        { key: "model", label: "모델" },
        { key: "year", label: "연식" },
        { key: "branch", label: "보관 지점" },
        { key: "buyer", label: "바이어" },
        { key: "price", label: "판매가", format: "won" },
        { key: "status", label: "진행", badge: carBadge },
      ],
      actions: [
        { label: "출고 준비", when: (r) => r.status === "입고", run: (r, db) => ({ db: patch(db, "cars", r.id, { status: "출고준비", buyer: r.buyer || "카자흐스탄 D사" }), message: `${r.plate} 출고 준비 (바이어 지정)` }) },
        { label: "출고", when: (r) => r.status === "출고준비", run: (r, db) => ({ db: patch(db, "cars", r.id, { status: "출고완료" }), message: `${r.plate} 선적 출고 완료` }) },
        { label: "판매 완료", when: (r) => r.status === "출고완료", run: (r, db) => ({ db: patch(db, "cars", r.id, { status: "판매완료" }), message: `${r.plate} 판매 완료` }) },
      ],
      form: {
        create: "차량 등록",
        edit: true,
        defaults: () => ({ status: "입고", buyer: "" }),
        fields: [
          { key: "plate", label: "차량번호", required: true, placeholder: "56사 1234" },
          { key: "model", label: "모델", required: true },
          { key: "year", label: "연식", type: "number" },
          { key: "branch", label: "보관 지점", type: "select", options: branches },
          { key: "price", label: "판매가(원)", type: "number" },
        ],
      },
    },
    {
      kind: "table",
      id: "moves",
      label: "지점 이동",
      icon: ArrowLeftRight,
      title: "지점 간 차량 이동",
      description: "요청 → 승인 → 이동 → 도착 확인 순서로 진행되고, 끝나면 차량 보관 지점이 자동으로 바뀝니다.",
      table: "moves",
      tabs: { key: "status", values: moveFlow },
      columns: [
        { key: "date", label: "요청일" },
        { key: "car", label: "차량", strong: true },
        { key: "from", label: "출발" },
        { key: "to", label: "도착" },
        { key: "status", label: "상태", badge: moveBadge },
      ],
      actions: [
        {
          label: "다음 단계",
          when: (r) => r.status !== "이동완료",
          run: (r, db) => {
            const next = moveFlow[moveFlow.indexOf(String(r.status)) + 1]
            let out = patch(db, "moves", r.id, { status: next })
            if (next === "이동완료") {
              const car = db.cars.find((c) => String(r.car).startsWith(String(c.plate)))
              if (car) out = patch(out, "cars", car.id, { branch: r.to })
            }
            return { db: out, message: next === "이동완료" ? `${r.car} → ${r.to} 도착 확인, 보관 지점 변경` : `${r.car} ${next}` }
          },
        },
        { label: "이동 취소", danger: true, when: (r) => r.status === "이동요청", run: (r, db) => ({ db: { ...db, moves: db.moves.filter((m) => m.id !== r.id) }, message: "이동 요청을 취소했습니다" }) },
      ],
      form: {
        create: "이동 요청",
        defaults: () => ({ date: day(), status: "이동요청" }),
        fields: [
          { key: "car", label: "차량", type: "select", options: ["45나 6789 쏘나타 DN8", "90라 5678 포터2", "34바 7890 아반떼 CN7", "123가 4567 투싼 NX4"] },
          { key: "from", label: "출발 지점", type: "select", options: branches },
          { key: "to", label: "도착 지점", type: "select", options: [...branches].reverse() },
        ],
      },
    },
    {
      kind: "table",
      id: "payments",
      label: "입금·미수금",
      icon: Landmark,
      title: "바이어 입금·미수금",
      table: "payments",
      tabs: { key: "status", values: ["입금대기", "일부입금", "입금완료", "연체"] },
      columns: [
        { key: "buyer", label: "바이어", strong: true },
        { key: "car", label: "차량" },
        { key: "branch", label: "지점" },
        { key: "amount", label: "청구액", format: "won" },
        { key: "paid", label: "입금액", format: "won" },
        { key: "due", label: "입금 기한" },
        { key: "status", label: "상태", badge: payBadge },
      ],
      actions: [
        {
          label: "잔금 입금",
          when: (r) => r.status !== "입금완료",
          run: (r, db) => ({ db: patch(db, "payments", r.id, { paid: r.amount, status: "입금완료" }), message: `${r.buyer} 잔금 ${won(Number(r.amount) - Number(r.paid))} 입금 확인` }),
        },
      ],
    },
    {
      kind: "table",
      id: "branches",
      label: "지점별 현황",
      icon: MapPin,
      title: "지점별 주차·미수금 현황",
      table: "cars",
      derive: (db) =>
        branches.map((b) => {
          const pays = db.payments.filter((p) => p.branch === b)
          return {
            id: b,
            branch: b,
            parked: db.cars.filter((c) => c.branch === b && c.status !== "판매완료" && c.status !== "출고완료").length,
            incoming: db.moves.filter((m) => m.to === b && m.status !== "이동완료").length,
            unpaid: pays.reduce((s, p) => s + Number(p.amount) - Number(p.paid), 0),
            sold: db.cars.filter((c) => c.branch === b && c.status === "판매완료").length,
          } as Row
        }),
      columns: [
        { key: "branch", label: "지점", strong: true },
        { key: "parked", label: "주차 차량", format: "num", unit: "대" },
        { key: "incoming", label: "들어올 차량", format: "num", unit: "대" },
        { key: "sold", label: "판매 완료", format: "num", unit: "대" },
        { key: "unpaid", label: "미수금", format: "won" },
      ],
    },
  ],
}
