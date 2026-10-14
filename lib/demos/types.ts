// 포트폴리오 체험판 설정 타입
// 체험판은 브라우저 메모리에서만 돌아가는 가상 데이터로 동작하고, 새로고침하면 초기화된다.
import type { LucideIcon } from "lucide-react"

export type Cell = string | number
export type Row = { id: string } & Record<string, Cell>
export type DB = Record<string, Row[]>
export type Tone = "gray" | "blue" | "green" | "amber" | "red" | "violet"

export interface Result {
  db: DB
  message: string
}

export interface Column {
  key: string
  label: string
  format?: "won" | "num" | "date"
  unit?: string
  badge?: Record<string, Tone>
  strong?: boolean
}

export interface Field {
  key: string
  label: string
  type?: "text" | "number" | "date" | "select" | "textarea"
  options?: string[]
  required?: boolean
  placeholder?: string
}

export interface RowAction {
  label: string
  when?: (row: Row) => boolean
  run: (row: Row, db: DB) => Result
  danger?: boolean
}

export interface TableScreen {
  kind: "table"
  id: string
  label: string
  icon: LucideIcon
  title: string
  description?: string
  table: string
  columns: Column[]
  searchKeys?: string[]
  // 상태값으로 나누는 탭 (예: 전체 / 대기 / 완료)
  tabs?: { key: string; values: string[] }
  // 등록·수정 폼. defaults 는 새 행에 들어갈 기본값
  form?: {
    fields: Field[]
    create?: string // 등록 버튼 문구
    edit?: boolean
    defaults?: (db: DB) => Record<string, Cell>
    // 입력값으로 계산되는 칸 (예: 매출-원가=마진)
    compute?: (values: Record<string, Cell>) => Record<string, Cell>
  }
  deletable?: boolean
  actions?: RowAction[]
  toolbar?: { label: string; run: (db: DB) => Result }[]
  // 스캔·빠른 입력 (바코드, 운송장 등)
  quick?: { label: string; placeholder: string; run: (value: string, db: DB) => Result }
  // 다른 표에서 계산해 보여주는 읽기 전용 화면
  derive?: (db: DB) => Row[]
}

export interface Kpi {
  label: string
  value: string
  unit?: string
  alert?: boolean
}

export interface DashboardScreen {
  kind: "dashboard"
  id: string
  label: string
  icon: LucideIcon
  title: string
  description?: string
  kpis: (db: DB) => Kpi[]
  chart?: { title: string; unit?: string; data: (db: DB) => { label: string; value: number }[] }
  list?: {
    title: string
    table: string
    rows?: (db: DB) => Row[] // 표 대신 계산한 행을 보여줄 때
    columns: Column[]
    filter?: (row: Row) => boolean
    limit?: number
  }
}

export type Screen = TableScreen | DashboardScreen

export interface DemoConfig {
  slug: string
  product: string // 프로그램 이름 (사이드바 상단)
  org: string // 가상 회사명
  user: string // 로그인한 사람 표시
  accent: string
  guide: string[] // 체험 포인트 안내
  seed: () => DB
  screens: Screen[]
  badge?: (db: DB) => Record<string, number> // 메뉴 옆 숫자 (screen id → 건수)
}
