import type { DB, Row } from "./types"

const pad = (n: number) => String(n).padStart(2, "0")

// 오늘 기준 n일 뒤 날짜 (YYYY-MM-DD). 체험판 날짜가 항상 "요즘"으로 보이게 한다
export function day(offset = 0): string {
  const d = new Date()
  d.setDate(d.getDate() + offset)
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

export function now(): string {
  const d = new Date()
  return `${day()} ${pad(d.getHours())}:${pad(d.getMinutes())}`
}

export const won = (n: number) => `₩${Math.round(n).toLocaleString("ko-KR")}`
export const num = (n: number) => Math.round(n).toLocaleString("ko-KR")

let seq = 0
export const newId = (prefix = "n") => `${prefix}${Date.now().toString(36)}${seq++}`

// 표 하나의 행 하나를 바꾼 새 DB
export function patch(db: DB, table: string, id: string, values: Partial<Row>): DB {
  return {
    ...db,
    [table]: db[table].map((r) => (r.id === id ? ({ ...r, ...values } as Row) : r)),
  }
}

export function insert(db: DB, table: string, row: Row, atTop = true): DB {
  return { ...db, [table]: atTop ? [row, ...db[table]] : [...db[table], row] }
}

export const sum = (rows: Row[], key: string) =>
  rows.reduce((s, r) => s + (Number(r[key]) || 0), 0)

export const count = (rows: Row[], key: string, value: string) =>
  rows.filter((r) => r[key] === value).length

// 시드용: 배열을 행으로 (id 자동)
export function rows(prefix: string, list: Record<string, string | number>[]): Row[] {
  return list.map((r, i) => ({ id: `${prefix}${i + 1}`, ...r }))
}
