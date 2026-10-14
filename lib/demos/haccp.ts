import { ClipboardCheck, FileBadge, LayoutDashboard, Thermometer } from "lucide-react"
import type { DemoConfig } from "./types"
import { count, day, now, patch, rows } from "./util"

const logBadge = { 미작성: "red", 작성완료: "amber", 결재완료: "green" } as const
const docBadge = { 유효: "green", 만료임박: "amber", 만료: "red" } as const

export const haccp: DemoConfig = {
  slug: "haccp",
  product: "HACCP 관리",
  org: "(가상) 맛나 식품",
  user: "품질관리 담당",
  accent: "#6D28D9",
  guide: [
    "점검일지에서 빨간 '미작성'을 '작성'하면 메뉴 옆 숫자가 줄어듭니다",
    "작성된 일지는 '결재'로 마무리합니다",
    "CCP 기록에서 한계기준을 벗어난 값을 넣으면 '부적합'으로 잡힙니다",
  ],
  seed: () => ({
    logs: rows("l", [
      { name: "일반위생관리 점검표", cycle: "매일", due: day(), writer: "", status: "미작성" },
      { name: "냉장·냉동 온도 기록", cycle: "매일", due: day(), writer: "", status: "미작성" },
      { name: "작업장 세척·소독 일지", cycle: "매일", due: day(), writer: "", status: "미작성" },
      { name: "방충·방서 점검표", cycle: "매주", due: day(2), writer: "", status: "미작성" },
      { name: "일반위생관리 점검표", cycle: "매일", due: day(-1), writer: "이정은", status: "작성완료" },
      { name: "냉장·냉동 온도 기록", cycle: "매일", due: day(-1), writer: "이정은", status: "결재완료" },
    ]),
    docs: rows("d", [
      { name: "보건증 · 김민지", type: "보건증", expire: day(14), status: "만료임박" },
      { name: "보건증 · 박상우", type: "보건증", expire: day(-3), status: "만료" },
      { name: "보건증 · 이정은", type: "보건증", expire: day(200), status: "유효" },
      { name: "자가품질검사 성적서 (떡류)", type: "시험성적서", expire: day(40), status: "유효" },
      { name: "자가품질검사 성적서 (소스류)", type: "시험성적서", expire: day(9), status: "만료임박" },
      { name: "용수 수질검사", type: "시험성적서", expire: day(120), status: "유효" },
    ]),
    ccp: rows("c", [
      { time: `${day()} 08:30`, point: "CCP-1 가열", value: 92, limit: "85℃ 이상", result: "적합" },
      { time: `${day()} 10:00`, point: "CCP-2 냉각", value: 8, limit: "10℃ 이하", result: "적합" },
      { time: `${day()} 11:30`, point: "CCP-1 가열", value: 88, limit: "85℃ 이상", result: "적합" },
    ]),
  }),
  badge: (db) => ({ logs: count(db.logs, "status", "미작성") }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "오늘 할 일",
      icon: LayoutDashboard,
      title: "오늘 할 일",
      description: "미작성 일지와 만료되는 서류를 시스템이 대신 챙깁니다.",
      kpis: (db) => [
        { label: "미작성 일지", value: String(count(db.logs, "status", "미작성")), unit: "건", alert: count(db.logs, "status", "미작성") > 0 },
        { label: "결재 대기", value: String(count(db.logs, "status", "작성완료")), unit: "건" },
        { label: "만료 임박·만료 서류", value: String(count(db.docs, "status", "만료임박") + count(db.docs, "status", "만료")), unit: "건", alert: true },
        { label: "CCP 부적합", value: String(count(db.ccp, "result", "부적합")), unit: "건" },
      ],
      chart: {
        title: "일지 작성 상태",
        unit: "건",
        data: (db) => ["미작성", "작성완료", "결재완료"].map((s) => ({ label: s, value: count(db.logs, "status", s) })),
      },
      list: {
        title: "챙겨야 할 서류",
        table: "docs",
        filter: (r) => r.status !== "유효",
        columns: [
          { key: "name", label: "서류" },
          { key: "expire", label: "만료일" },
          { key: "status", label: "상태", badge: docBadge },
        ],
      },
    },
    {
      kind: "table",
      id: "logs",
      label: "점검일지",
      icon: ClipboardCheck,
      title: "점검일지",
      description: "쓰던 종이 양식을 그대로 화면에 옮겨, 주기마다 자동으로 생성됩니다.",
      table: "logs",
      tabs: { key: "status", values: ["미작성", "작성완료", "결재완료"] },
      columns: [
        { key: "name", label: "일지", strong: true },
        { key: "cycle", label: "주기" },
        { key: "due", label: "작성일" },
        { key: "writer", label: "작성자" },
        { key: "status", label: "상태", badge: logBadge },
      ],
      actions: [
        { label: "작성", when: (r) => r.status === "미작성", run: (r, db) => ({ db: patch(db, "logs", r.id, { status: "작성완료", writer: "품질관리 담당" }), message: `${r.name} 작성 완료` }) },
        { label: "결재", when: (r) => r.status === "작성완료", run: (r, db) => ({ db: patch(db, "logs", r.id, { status: "결재완료" }), message: `${r.name} 결재 완료` }) },
      ],
    },
    {
      kind: "table",
      id: "ccp",
      label: "CCP 기록",
      icon: Thermometer,
      title: "CCP 모니터링 기록",
      description: "가열 85℃ 이상, 냉각 10℃ 이하를 벗어나면 부적합으로 표시됩니다.",
      table: "ccp",
      tabs: { key: "result", values: ["적합", "부적합"] },
      columns: [
        { key: "time", label: "측정 시각" },
        { key: "point", label: "CCP", strong: true },
        { key: "value", label: "측정값", format: "num", unit: "℃" },
        { key: "limit", label: "한계기준" },
        { key: "result", label: "판정", badge: { 적합: "green", 부적합: "red" } },
      ],
      form: {
        create: "측정값 기록",
        defaults: () => ({ time: now() }),
        compute: (v) => {
          const heating = v.point === "CCP-1 가열"
          const ok = heating ? Number(v.value) >= 85 : Number(v.value) <= 10
          return { limit: heating ? "85℃ 이상" : "10℃ 이하", result: ok ? "적합" : "부적합" }
        },
        fields: [
          { key: "point", label: "CCP", type: "select", options: ["CCP-1 가열", "CCP-2 냉각"] },
          { key: "value", label: "측정값(℃)", type: "number", required: true, placeholder: "예: 80" },
        ],
      },
    },
    {
      kind: "table",
      id: "docs",
      label: "서류·보건증",
      icon: FileBadge,
      title: "성적서·보건증",
      table: "docs",
      tabs: { key: "status", values: ["유효", "만료임박", "만료"] },
      columns: [
        { key: "name", label: "서류", strong: true },
        { key: "type", label: "종류" },
        { key: "expire", label: "만료일" },
        { key: "status", label: "상태", badge: docBadge },
      ],
      actions: [
        { label: "갱신 등록", when: (r) => r.status !== "유효", run: (r, db) => ({ db: patch(db, "docs", r.id, { expire: day(365), status: "유효" }), message: `${r.name} 갱신 완료 (1년)` }) },
      ],
    },
  ],
}
