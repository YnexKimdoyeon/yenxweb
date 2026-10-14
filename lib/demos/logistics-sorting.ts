import { LayoutDashboard, PackageCheck, PackageOpen, ScanBarcode, Shuffle } from "lucide-react"
import type { DemoConfig, RowAction } from "./types"
import { count, day, now, patch, rows, sum } from "./util"

const shipBadge = { 출고대기: "amber", 출고완료: "green", 출고보류: "red" } as const

export const logisticsSorting: DemoConfig = {
  slug: "logistics-sorting",
  product: "바코드 출고",
  org: "(가상) 오성 풀필먼트",
  user: "출고 담당 · 1번 라인",
  accent: "#4C1D95",
  guide: [
    "출고 스캔 화면에서 운송장 번호 6012-3301-0001 을 입력하고 '처리'를 눌러 보세요",
    "같은 번호를 한 번 더 넣으면 '이미 출고된 운송장'이라고 막아 줍니다",
    "입고 분류에서 구역을 정하면 소팅 화면 수량이 바뀝니다",
  ],
  seed: () => ({
    shipments: rows("o", [
      { invoice: "6012-3301-0001", product: "무선 이어폰 케이스", qty: 2, courier: "CJ대한통운", time: "", status: "출고대기" },
      { invoice: "6012-3301-0002", product: "스테인리스 텀블러 500ml", qty: 1, courier: "CJ대한통운", time: "", status: "출고대기" },
      { invoice: "6012-3301-0003", product: "캠핑 의자 + 수납가방", qty: 1, courier: "롯데택배", time: "", status: "출고대기" },
      { invoice: "6012-3301-0004", product: "고양이 스크래쳐", qty: 3, courier: "한진택배", time: "", status: "출고대기" },
      { invoice: "6012-3301-0005", product: "LED 무드등", qty: 1, courier: "CJ대한통운", time: "", status: "출고보류" },
      { invoice: "6012-3300-0981", product: "주방 수납 선반", qty: 1, courier: "롯데택배", time: `${day()} 09:12`, status: "출고완료" },
      { invoice: "6012-3300-0982", product: "무선 이어폰 케이스", qty: 5, courier: "CJ대한통운", time: `${day()} 09:15`, status: "출고완료" },
    ]),
    inbound: rows("i", [
      { item: "스테인리스 텀블러 500ml", qty: 120, from: "협력사 A", zone: "미지정", status: "분류대기" },
      { item: "캠핑 의자", qty: 40, from: "협력사 B", zone: "미지정", status: "분류대기" },
      { item: "LED 무드등", qty: 60, from: "협력사 A", zone: "B구역", status: "분류완료" },
      { item: "고양이 스크래쳐", qty: 80, from: "협력사 C", zone: "C구역", status: "분류완료" },
    ]),
  }),
  badge: (db) => ({ scan: count(db.shipments, "status", "출고대기") }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "현황",
      icon: LayoutDashboard,
      title: "오늘 출고 현황",
      kpis: (db) => [
        { label: "출고 대기", value: String(count(db.shipments, "status", "출고대기")), unit: "건" },
        { label: "출고 완료", value: String(count(db.shipments, "status", "출고완료")), unit: "건" },
        { label: "출고 보류", value: String(count(db.shipments, "status", "출고보류")), unit: "건", alert: count(db.shipments, "status", "출고보류") > 0 },
        { label: "분류 대기 입고", value: String(count(db.inbound, "status", "분류대기")), unit: "건" },
      ],
      chart: {
        title: "택배사별 출고 완료 수량",
        unit: "개",
        data: (db) =>
          ["CJ대한통운", "롯데택배", "한진택배"].map((c) => ({
            label: c,
            value: sum(db.shipments.filter((r) => r.courier === c && r.status === "출고완료"), "qty"),
          })),
      },
      list: {
        title: "방금 출고된 운송장",
        table: "shipments",
        filter: (r) => r.status === "출고완료",
        columns: [
          { key: "invoice", label: "운송장" },
          { key: "product", label: "상품" },
          { key: "status", label: "상태", badge: shipBadge },
        ],
      },
    },
    {
      kind: "table",
      id: "scan",
      label: "출고 스캔",
      icon: ScanBarcode,
      title: "출고 스캔",
      description: "바코드 스캐너로 운송장을 찍으면 그 자리에서 출고 처리됩니다.",
      table: "shipments",
      tabs: { key: "status", values: ["출고대기", "출고완료", "출고보류"] },
      quick: {
        label: "운송장 스캔",
        placeholder: "6012-3301-0001",
        run: (value, db) => {
          const row = db.shipments.find((r) => r.invoice === value)
          if (!row) return { db, message: `운송장 ${value} 을(를) 찾을 수 없습니다` }
          if (row.status === "출고완료") return { db, message: "이미 출고된 운송장입니다 (중복 스캔 차단)" }
          if (row.status === "출고보류") return { db, message: "출고 보류된 건입니다. 관리자 확인이 필요합니다" }
          return {
            db: patch(db, "shipments", row.id, { status: "출고완료", time: now() }),
            message: `${row.product} ${row.qty}개 출고 완료`,
          }
        },
      },
      columns: [
        { key: "invoice", label: "운송장 번호", strong: true },
        { key: "product", label: "상품" },
        { key: "qty", label: "수량", format: "num" },
        { key: "courier", label: "택배사" },
        { key: "time", label: "출고 시각" },
        { key: "status", label: "상태", badge: shipBadge },
      ],
      actions: [
        { label: "보류", danger: true, when: (r) => r.status === "출고대기", run: (r, db) => ({ db: patch(db, "shipments", r.id, { status: "출고보류" }), message: "출고 보류했습니다" }) },
        { label: "보류 해제", when: (r) => r.status === "출고보류", run: (r, db) => ({ db: patch(db, "shipments", r.id, { status: "출고대기" }), message: "다시 출고 대기로 돌렸습니다" }) },
      ],
    },
    {
      kind: "table",
      id: "inbound",
      label: "입고 분류",
      icon: PackageOpen,
      title: "입고 분류",
      description: "들어온 물건을 적재 구역에 배정합니다.",
      table: "inbound",
      tabs: { key: "status", values: ["분류대기", "분류완료"] },
      columns: [
        { key: "item", label: "품목", strong: true },
        { key: "qty", label: "수량", format: "num" },
        { key: "from", label: "입고처" },
        { key: "zone", label: "구역" },
        { key: "status", label: "상태", badge: { 분류대기: "amber", 분류완료: "green" } },
      ],
      actions: ["A구역", "B구역", "C구역"].map((z): RowAction => ({
        label: z,
        when: (r) => r.status === "분류대기",
        run: (r, db) => ({ db: patch(db, "inbound", r.id, { zone: z, status: "분류완료" }), message: `${r.item} → ${z} 배정` }),
      })),
    },
    {
      kind: "table",
      id: "sorting",
      label: "소팅 현황",
      icon: Shuffle,
      title: "구역별 소팅 현황",
      description: "입고 분류 결과가 구역별로 자동 집계됩니다.",
      table: "inbound",
      derive: (db) =>
        ["A구역", "B구역", "C구역"].map((z) => {
          const list = db.inbound.filter((r) => r.zone === z)
          return { id: z, zone: z, items: list.length, qty: sum(list, "qty"), names: list.map((r) => r.item).join(", ") }
        }),
      columns: [
        { key: "zone", label: "구역", strong: true },
        { key: "items", label: "품목 수", format: "num" },
        { key: "qty", label: "적재 수량", format: "num" },
        { key: "names", label: "품목" },
      ],
    },
    {
      kind: "table",
      id: "done",
      label: "출고 완료",
      icon: PackageCheck,
      title: "출고 완료 내역",
      table: "shipments",
      derive: (db) => db.shipments.filter((r) => r.status === "출고완료"),
      columns: [
        { key: "time", label: "출고 시각" },
        { key: "invoice", label: "운송장 번호", strong: true },
        { key: "product", label: "상품" },
        { key: "qty", label: "수량", format: "num" },
        { key: "courier", label: "택배사" },
      ],
    },
  ],
}
