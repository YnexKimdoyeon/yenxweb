import { BarChart3, ClipboardPen, GraduationCap, LayoutDashboard, TriangleAlert } from "lucide-react"
import type { DB, DemoConfig, Row } from "./types"
import { count, day, rows } from "./util"

const MAX = 30 // 모듈 평가 만점
const modules = ["활력징후 측정", "투약 관리", "심폐소생술", "감염 관리"]
const students = [
  ["2026101", "김하은", "A반"], ["2026102", "이서준", "A반"],
  ["2026103", "박지민", "B반"], ["2026104", "최유나", "B반"],
  ["2026105", "정다인", "C반"], ["2026106", "강민서", "C반"],
  ["2026107", "윤채원", "D반"], ["2026108", "임도현", "D반"],
]
// 시드 점수 (0 = 미실시)
const seedScores = [
  [27, 24, 26, 0], [25, 22, 0, 0], [28, 26, 27, 25], [23, 19, 21, 0],
  [26, 25, 24, 27], [22, 0, 0, 0], [29, 27, 28, 26], [24, 21, 23, 22],
]

const avg = (list: Row[]) => {
  const done = list.filter((r) => r.status === "완료")
  return done.length ? done.reduce((s, r) => s + Number(r.score), 0) / done.length : 0
}

function studentRows(db: DB): Row[] {
  return students.map(([no, name, cls]) => {
    const mine = db.evals.filter((e) => e.no === no)
    const done = count(mine, "status", "완료")
    return {
      id: no, no, name, cls,
      done: `${done} / ${modules.length}`,
      avg: avg(mine).toFixed(1),
      status: done === modules.length ? "이수완료" : done === 0 ? "미이수" : "진행중",
    }
  })
}

const doneBadge = { 이수완료: "green", 진행중: "amber", 미이수: "red" } as const

export const nursingEval: DemoConfig = {
  slug: "nursing-eval",
  product: "실습 평가 관리",
  org: "(가상) 한누리대학교 간호학과",
  user: "관리자 모드 · 실습 운영",
  accent: "#0E7490",
  guide: [
    "평가 입력에서 '미실시' 줄의 연필을 눌러 점수(30점 만점)를 넣어 보세요",
    "점수를 넣으면 이수 관리·반별 순위·취약 항목이 모두 바로 다시 계산됩니다",
    "취약 항목 화면은 평균이 낮은 모듈부터 보여 줘 다음 학기 수업 보완에 씁니다",
  ],
  seed: () => ({
    evals: rows("e", students.flatMap(([no, name, cls], i) =>
      modules.map((m, j) => ({
        no, name, cls, module: m,
        score: seedScores[i][j],
        date: seedScores[i][j] ? day(-20 + j * 5) : "",
        status: seedScores[i][j] ? "완료" : "미실시",
      })),
    )),
  }),
  badge: (db) => ({ evals: count(db.evals, "status", "미실시") }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "운영 대시보드",
      icon: LayoutDashboard,
      title: "운영 대시보드",
      description: "이번 학기 시뮬레이션 실습 진행 현황입니다.",
      kpis: (db) => {
        const st = studentRows(db)
        return [
          { label: "전체 학생", value: String(st.length), unit: "명" },
          { label: "이수 완료율", value: String(Math.round((count(st, "status", "이수완료") / st.length) * 100)), unit: "%" },
          { label: "평균 성취도", value: avg(db.evals).toFixed(1), unit: `/ ${MAX}점` },
          { label: "미실시 평가", value: String(count(db.evals, "status", "미실시")), unit: "건", alert: true },
        ]
      },
      chart: {
        title: "실습반별 평균 점수",
        unit: "점",
        data: (db) => ["A반", "B반", "C반", "D반"].map((c) => ({ label: c, value: Math.round(avg(db.evals.filter((e) => e.cls === c)) * 10) / 10 })),
      },
      list: {
        title: "이수 누락 학생",
        table: "evals",
        rows: studentRows,
        filter: (r) => r.status !== "이수완료",
        columns: [
          { key: "name", label: "학생" },
          { key: "cls", label: "실습반" },
          { key: "status", label: "이수", badge: doneBadge },
        ],
      },
    },
    {
      kind: "table",
      id: "evals",
      label: "평가 입력",
      icon: ClipboardPen,
      title: "모듈 평가 입력",
      description: `모듈마다 평가 항목 점수를 합산해 ${MAX}점 만점으로 기록합니다.`,
      table: "evals",
      searchKeys: ["name", "no", "module", "cls"],
      tabs: { key: "status", values: ["미실시", "완료"] },
      columns: [
        { key: "no", label: "학번" },
        { key: "name", label: "이름", strong: true },
        { key: "cls", label: "실습반" },
        { key: "module", label: "모듈" },
        { key: "score", label: "점수", format: "num", unit: `/${MAX}` },
        { key: "date", label: "실시일" },
        { key: "status", label: "상태", badge: { 완료: "green", 미실시: "gray" } },
      ],
      form: {
        edit: true,
        compute: (v) => {
          const score = Math.max(0, Math.min(MAX, Number(v.score)))
          return { score, status: score > 0 ? "완료" : "미실시", date: score > 0 ? day() : "" }
        },
        fields: [{ key: "score", label: `점수 (0~${MAX})`, type: "number", required: true, placeholder: "예: 26" }],
      },
    },
    {
      kind: "table",
      id: "students",
      label: "이수 관리",
      icon: GraduationCap,
      title: "학생별 이수 관리",
      description: "모든 모듈을 마치면 자동으로 이수완료가 됩니다.",
      table: "evals",
      derive: studentRows,
      tabs: { key: "status", values: ["이수완료", "진행중", "미이수"] },
      columns: [
        { key: "no", label: "학번" },
        { key: "name", label: "이름", strong: true },
        { key: "cls", label: "실습반" },
        { key: "done", label: "완료 모듈" },
        { key: "avg", label: "평균", unit: "점" },
        { key: "status", label: "이수", badge: doneBadge },
      ],
    },
    {
      kind: "table",
      id: "rank",
      label: "반별 순위",
      icon: BarChart3,
      title: "실습반별 종합·순위",
      table: "evals",
      derive: (db) =>
        ["A반", "B반", "C반", "D반"]
          .map((c) => {
            const list = db.evals.filter((e) => e.cls === c)
            return { id: c, cls: c, avg: avg(list), done: `${count(list, "status", "완료")} / ${list.length}` }
          })
          .sort((a, b) => b.avg - a.avg)
          .map((r, i) => ({ ...r, rank: `${i + 1}위`, avg: r.avg.toFixed(1) })),
      columns: [
        { key: "rank", label: "순위", strong: true },
        { key: "cls", label: "실습반" },
        { key: "avg", label: "평균", unit: `/${MAX}점` },
        { key: "done", label: "완료 평가" },
      ],
    },
    {
      kind: "table",
      id: "weak",
      label: "취약 항목",
      icon: TriangleAlert,
      title: "취약 항목 순위",
      description: "평균 점수가 낮은 모듈부터 보여 줍니다.",
      table: "evals",
      derive: (db) =>
        modules
          .map((m) => {
            const list = db.evals.filter((e) => e.module === m)
            return { id: m, module: m, avg: avg(list), done: count(list, "status", "완료") }
          })
          .sort((a, b) => a.avg - b.avg)
          .map((r, i) => ({ ...r, rank: `${i + 1}위`, avg: r.avg.toFixed(1), level: i === 0 ? "집중 보완" : i === 1 ? "보완" : "양호" })),
      columns: [
        { key: "rank", label: "취약 순위", strong: true },
        { key: "module", label: "모듈" },
        { key: "avg", label: "평균", unit: `/${MAX}점` },
        { key: "done", label: "평가 인원", format: "num", unit: "명" },
        { key: "level", label: "판단", badge: { "집중 보완": "red", 보완: "amber", 양호: "green" } },
      ],
    },
  ],
}

