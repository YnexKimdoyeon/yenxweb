import { ClipboardList, Forklift, LayoutDashboard, NotebookPen, Users } from "lucide-react"
import type { DemoConfig } from "./types"
import { count, day, patch, rows } from "./util"

const orderBadge = { 대기: "amber", 진행중: "blue", 완료: "green" } as const

export const logisticsOps: DemoConfig = {
  slug: "logistics-ops",
  product: "물류 운영",
  org: "(가상) 동해 수출포장",
  user: "현장 관리자",
  accent: "#1D4ED8",
  guide: [
    "작업 지시서에서 '시작' → '완료'를 눌러 진행 상태를 바꿔 보세요",
    "인력 배정에서 대기 중인 사람을 '배정'하면 대기 작업에 자동으로 붙습니다",
    "작업 일보는 '일보 작성'으로 바로 남길 수 있습니다",
  ],
  seed: () => ({
    orders: rows("w", [
      { no: "WO-1021", client: "한성기계", task: "목재 포장", qty: 12, due: day(), assignee: "김태호", status: "진행중" },
      { no: "WO-1022", client: "대진전자", task: "상차", qty: 4, due: day(), assignee: "", status: "대기" },
      { no: "WO-1023", client: "한성기계", task: "검수", qty: 12, due: day(1), assignee: "", status: "대기" },
      { no: "WO-1024", client: "세일중공업", task: "진공 포장", qty: 6, due: day(1), assignee: "", status: "대기" },
      { no: "WO-1019", client: "대진전자", task: "하차", qty: 8, due: day(-1), assignee: "이준영", status: "완료" },
      { no: "WO-1020", client: "세일중공업", task: "목재 포장", qty: 3, due: day(-1), assignee: "박성민", status: "완료" },
    ]),
    workers: rows("p", [
      { name: "김태호", team: "포장 1조", skill: "목재 포장", work: "WO-1021", status: "배정" },
      { name: "이준영", team: "상하차조", skill: "지게차", work: "", status: "대기" },
      { name: "박성민", team: "포장 1조", skill: "진공 포장", work: "", status: "대기" },
      { name: "최동욱", team: "포장 2조", skill: "검수", work: "", status: "대기" },
      { name: "정우진", team: "상하차조", skill: "지게차", work: "", status: "휴무" },
    ]),
    resources: rows("r", [
      { name: "지게차 1호", type: "지게차", place: "A동", status: "가동" },
      { name: "지게차 2호", type: "지게차", place: "B동", status: "대기" },
      { name: "진공 포장기", type: "포장 설비", place: "A동", status: "대기" },
      { name: "5톤 윙바디", type: "차량", place: "상차장", status: "점검" },
    ]),
    reports: rows("d", [
      { date: day(-1), writer: "현장 관리자", done: 2, note: "대진전자 하차 8건 완료, 세일중공업 포장 3건 출고" },
      { date: day(-2), writer: "현장 관리자", done: 3, note: "우천으로 상차 1시간 지연" },
    ]),
  }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "운영 현황",
      icon: LayoutDashboard,
      title: "오늘 운영 현황",
      kpis: (db) => [
        { label: "진행 중 작업", value: String(count(db.orders, "status", "진행중")), unit: "건" },
        { label: "대기 작업", value: String(count(db.orders, "status", "대기")), unit: "건", alert: count(db.orders, "status", "대기") > 2 },
        { label: "투입 인원", value: String(count(db.workers, "status", "배정")), unit: `/ ${db.workers.length}명` },
        { label: "가동 장비", value: String(count(db.resources, "status", "가동")), unit: `/ ${db.resources.length}대` },
      ],
      chart: {
        title: "상태별 작업 지시",
        unit: "건",
        data: (db) => ["대기", "진행중", "완료"].map((s) => ({ label: s, value: count(db.orders, "status", s) })),
      },
      list: {
        title: "오늘 마감 작업",
        table: "orders",
        filter: (r) => r.due === day() && r.status !== "완료",
        columns: [
          { key: "no", label: "번호" },
          { key: "task", label: "작업" },
          { key: "status", label: "상태", badge: orderBadge },
        ],
      },
    },
    {
      kind: "table",
      id: "orders",
      label: "작업 지시서",
      icon: ClipboardList,
      title: "작업 지시서",
      table: "orders",
      tabs: { key: "status", values: ["대기", "진행중", "완료"] },
      columns: [
        { key: "no", label: "지시 번호", strong: true },
        { key: "client", label: "고객사" },
        { key: "task", label: "작업" },
        { key: "qty", label: "수량", format: "num" },
        { key: "due", label: "마감일" },
        { key: "assignee", label: "담당" },
        { key: "status", label: "상태", badge: orderBadge },
      ],
      actions: [
        { label: "시작", when: (r) => r.status === "대기", run: (r, db) => ({ db: patch(db, "orders", r.id, { status: "진행중", assignee: r.assignee || "현장 관리자" }), message: `${r.no} 작업 시작` }) },
        { label: "완료", when: (r) => r.status === "진행중", run: (r, db) => {
            const worker = db.workers.find((w) => w.work === r.no)
            let next = patch(db, "orders", r.id, { status: "완료" })
            if (worker) next = patch(next, "workers", worker.id, { work: "", status: "대기" })
            return { db: next, message: `${r.no} 완료${worker ? `, ${worker.name} 님은 대기로 전환` : ""}` }
          } },
      ],
      form: {
        create: "지시서 발행",
        edit: true,
        defaults: (db) => ({ no: `WO-${1025 + db.orders.length - 6}`, assignee: "", status: "대기" }),
        fields: [
          { key: "client", label: "고객사", required: true },
          { key: "task", label: "작업", type: "select", options: ["목재 포장", "진공 포장", "상차", "하차", "검수"] },
          { key: "qty", label: "수량", type: "number" },
          { key: "due", label: "마감일", type: "date" },
        ],
      },
    },
    {
      kind: "table",
      id: "workers",
      label: "인력 배정",
      icon: Users,
      title: "인력 배정",
      description: "'배정'을 누르면 가장 먼저 마감되는 대기 작업에 자동으로 붙습니다.",
      table: "workers",
      tabs: { key: "status", values: ["대기", "배정", "휴무"] },
      columns: [
        { key: "name", label: "이름", strong: true },
        { key: "team", label: "소속" },
        { key: "skill", label: "주 업무" },
        { key: "work", label: "배정 작업" },
        { key: "status", label: "상태", badge: { 대기: "amber", 배정: "blue", 휴무: "gray" } },
      ],
      actions: [
        {
          label: "배정",
          when: (r) => r.status === "대기",
          run: (r, db) => {
            const order = [...db.orders].filter((o) => o.status === "대기").sort((a, b) => String(a.due).localeCompare(String(b.due)))[0]
            if (!order) return { db, message: "배정할 대기 작업이 없습니다" }
            let next = patch(db, "workers", r.id, { status: "배정", work: order.no })
            next = patch(next, "orders", order.id, { status: "진행중", assignee: r.name })
            return { db: next, message: `${r.name} 님 → ${order.no} (${order.task}) 배정` }
          },
        },
      ],
    },
    {
      kind: "table",
      id: "resources",
      label: "장비·차량",
      icon: Forklift,
      title: "장비·차량 배치",
      table: "resources",
      tabs: { key: "status", values: ["가동", "대기", "점검"] },
      columns: [
        { key: "name", label: "장비", strong: true },
        { key: "type", label: "종류" },
        { key: "place", label: "위치" },
        { key: "status", label: "상태", badge: { 가동: "green", 대기: "gray", 점검: "red" } },
      ],
      actions: [
        { label: "가동", when: (r) => r.status === "대기", run: (r, db) => ({ db: patch(db, "resources", r.id, { status: "가동" }), message: `${r.name} 가동` }) },
        { label: "반납", when: (r) => r.status === "가동", run: (r, db) => ({ db: patch(db, "resources", r.id, { status: "대기" }), message: `${r.name} 반납` }) },
        { label: "점검 완료", when: (r) => r.status === "점검", run: (r, db) => ({ db: patch(db, "resources", r.id, { status: "대기" }), message: `${r.name} 점검 완료` }) },
      ],
    },
    {
      kind: "table",
      id: "reports",
      label: "작업 일보",
      icon: NotebookPen,
      title: "작업 일보",
      table: "reports",
      columns: [
        { key: "date", label: "날짜", strong: true },
        { key: "writer", label: "작성자" },
        { key: "done", label: "완료 작업", format: "num", unit: "건" },
        { key: "note", label: "특이사항" },
      ],
      form: {
        create: "일보 작성",
        edit: true,
        defaults: (db) => ({ writer: "현장 관리자", done: count(db.orders, "status", "완료") }),
        fields: [
          { key: "date", label: "날짜", type: "date" },
          { key: "note", label: "특이사항", type: "textarea", required: true },
        ],
      },
    },
  ],
}
