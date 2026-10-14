"use client"

import {
  ArrowLeft,
  Lightbulb,
  MessageCircle,
  Pencil,
  Plus,
  RotateCcw,
  ScanLine,
  Search,
  Trash2,
  X,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { demos } from "@/lib/demos"
import type {
  Cell,
  Column,
  DashboardScreen,
  DB,
  Field,
  Result,
  Row,
  TableScreen,
  Tone,
} from "@/lib/demos/types"
import { day, newId, num, won } from "@/lib/demos/util"

const toneClass: Record<Tone, string> = {
  gray: "bg-gray-100 text-gray-700 ring-gray-200",
  blue: "bg-blue-50 text-blue-700 ring-blue-200",
  green: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  amber: "bg-amber-50 text-amber-800 ring-amber-200",
  red: "bg-red-50 text-red-700 ring-red-200",
  violet: "bg-violet-50 text-violet-700 ring-violet-200",
}

function renderCell(col: Column, value: Cell | undefined) {
  if (value === undefined || value === "") return <span className="text-gray-300">-</span>
  if (col.badge) {
    const tone = col.badge[String(value)] ?? "gray"
    return (
      <span
        className={`inline-flex whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${toneClass[tone]}`}
      >
        {value}
      </span>
    )
  }
  let text = String(value)
  if (col.format === "won") text = won(Number(value))
  else if (col.format === "num") text = num(Number(value))
  return (
    <span className={col.strong ? "font-semibold text-gray-900" : undefined}>
      {text}
      {col.unit && <span className="ml-0.5 text-gray-400">{col.unit}</span>}
    </span>
  )
}

const isNumeric = (c: Column) => c.format === "won" || c.format === "num"

export function DemoApp({ slug }: { slug: string }) {
  const config = demos[slug]
  const [db, setDb] = useState<DB>(() => config.seed())
  const [screenId, setScreenId] = useState(config.screens[0].id)
  const [toast, setToast] = useState<string | null>(null)
  const [touched, setTouched] = useState<string | null>(null)
  const [showGuide, setShowGuide] = useState(true)

  const screen = config.screens.find((s) => s.id === screenId) ?? config.screens[0]
  const badges = config.badge?.(db) ?? {}
  const accent = config.accent

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2600)
    return () => clearTimeout(t)
  }, [toast])

  const apply = (result: Result, rowId?: string) => {
    setDb(result.db)
    setToast(result.message)
    if (rowId) setTouched(rowId)
  }

  const reset = () => {
    setDb(config.seed())
    setTouched(null)
    setToast("처음 상태로 되돌렸습니다")
  }

  return (
    <div className="flex min-h-dvh flex-col bg-gray-100 text-gray-800">
      {/* 체험판 안내 띠 */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 bg-gray-900 px-4 py-2.5 text-sm text-white">
        <Link
          href={`/portfolio#${slug}`}
          className="inline-flex items-center gap-1 text-white/80 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          포트폴리오
        </Link>
        <span className="hidden h-4 w-px bg-white/20 sm:block" />
        <span className="rounded bg-white/15 px-1.5 py-0.5 text-xs font-bold">체험판</span>
        <span className="hidden text-white/70 md:inline">
          가상 데이터로 실제처럼 움직입니다. 새로고침하면 처음 상태로 돌아갑니다.
        </span>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">처음부터</span>
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 rounded-md bg-white px-3 py-1 font-semibold text-gray-900 transition-colors hover:bg-white/90"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            이런 시스템 문의
          </Link>
        </div>
      </div>

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* 사이드바 (모바일은 가로 메뉴) */}
        <aside
          className="shrink-0 text-white lg:flex lg:w-60 lg:flex-col"
          style={{ backgroundColor: accent }}
        >
          <div className="px-5 pb-3 pt-4 lg:pb-5 lg:pt-6">
            <p className="text-xs text-white/60">{config.org}</p>
            <p className="text-lg font-bold">{config.product}</p>
          </div>
          <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-col lg:overflow-visible lg:pb-6">
            {config.screens.map((s) => {
              const Icon = s.icon
              const active = s.id === screen.id
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setScreenId(s.id)
                    setTouched(null)
                  }}
                  className={`flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active ? "bg-white text-gray-900" : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" style={active ? { color: accent } : undefined} />
                  <span className="whitespace-nowrap">{s.label}</span>
                  {!!badges[s.id] && (
                    <span className="ml-auto rounded-full bg-orange-500 px-1.5 text-xs font-bold text-white">
                      {badges[s.id]}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-gray-900">{config.user}</p>
              <p className="text-xs text-gray-500">{day()} 기준</p>
            </div>
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: accent }}
            >
              {config.user.slice(0, 1)}
            </span>
          </header>

          <main className="flex-1 space-y-5 p-4 sm:p-6">
            {showGuide && (
              <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" />
                <div className="flex-1">
                  <p className="mb-1 font-semibold">이렇게 눌러 보세요</p>
                  <ul className="list-disc space-y-0.5 pl-4">
                    {config.guide.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => setShowGuide(false)}
                  aria-label="안내 닫기"
                  className="h-6 w-6 shrink-0 rounded text-amber-700 hover:bg-amber-100"
                >
                  <X className="mx-auto h-4 w-4" />
                </button>
              </div>
            )}

            {screen.kind === "dashboard" ? (
              <Dashboard screen={screen} db={db} accent={accent} />
            ) : (
              <TableView
                key={screen.id}
                screen={screen}
                db={db}
                accent={accent}
                touched={touched}
                apply={apply}
              />
            )}
          </main>
        </div>
      </div>

      {toast && (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
          <div className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-2xl">
            {toast}
          </div>
        </div>
      )}
    </div>
  )
}

function ScreenTitle({ title, description }: { title: string; description?: string }) {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">{title}</h1>
      {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
    </div>
  )
}

function Dashboard({ screen, db, accent }: { screen: DashboardScreen; db: DB; accent: string }) {
  const kpis = screen.kpis(db)
  const chart = screen.chart?.data(db) ?? []
  const max = Math.max(1, ...chart.map((c) => c.value))
  const list = screen.list
  const listRows = list
    ? (list.rows ? list.rows(db) : db[list.table]).filter((r) => (list.filter ? list.filter(r) : true)).slice(0, list.limit ?? 5)
    : []

  return (
    <>
      <ScreenTitle title={screen.title} description={screen.description} />
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {kpis.map((k) => (
          <div
            key={k.label}
            className={`rounded-xl border bg-white p-4 ${k.alert ? "border-orange-300" : "border-gray-200"}`}
          >
            <p className="text-xs font-medium text-gray-500 sm:text-sm">{k.label}</p>
            <p
              className="mt-2 text-2xl font-bold sm:text-3xl"
              style={{ color: k.alert ? "#EA580C" : "#111827" }}
            >
              {k.value}
              {k.unit && <span className="ml-1 text-sm font-medium text-gray-400">{k.unit}</span>}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        {screen.chart && (
          <section className="rounded-xl border border-gray-200 bg-white p-5">
            <h2 className="mb-4 font-semibold text-gray-900">{screen.chart.title}</h2>
            <div className="space-y-2.5">
              {chart.map((c) => (
                <div key={c.label} className="flex items-center gap-3 text-sm">
                  <span className="w-20 shrink-0 truncate text-gray-600">{c.label}</span>
                  <div className="h-6 flex-1 rounded bg-gray-100">
                    <div
                      className="h-6 rounded transition-all duration-500"
                      style={{ width: `${(c.value / max) * 100}%`, backgroundColor: accent }}
                    />
                  </div>
                  <span className="w-24 shrink-0 text-right font-medium tabular-nums text-gray-800">
                    {num(c.value)}
                    {screen.chart?.unit}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
        {list && (
          <section className="rounded-xl border border-gray-200 bg-white p-5">
            <h2 className="mb-3 font-semibold text-gray-900">{list.title}</h2>
            {listRows.length === 0 ? (
              <p className="py-8 text-center text-sm text-gray-400">해당 건이 없습니다</p>
            ) : (
              <ul className="divide-y divide-gray-100">
                {listRows.map((r) => (
                  <li key={r.id} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                    {list.columns.map((c, i) => (
                      <span key={c.key} className={i === 0 ? "min-w-0 flex-1 truncate" : "shrink-0"}>
                        {renderCell(c, r[c.key])}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </div>
    </>
  )
}

function TableView({
  screen,
  db,
  accent,
  touched,
  apply,
}: {
  screen: TableScreen
  db: DB
  accent: string
  touched: string | null
  apply: (r: Result, rowId?: string) => void
}) {
  const [query, setQuery] = useState("")
  const [tab, setTab] = useState("전체")
  const [quick, setQuick] = useState("")
  const [editing, setEditing] = useState<Row | "new" | null>(null)

  const all = screen.derive ? screen.derive(db) : db[screen.table]
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return all.filter((r) => {
      if (screen.tabs && tab !== "전체" && r[screen.tabs.key] !== tab) return false
      if (!q) return true
      return (screen.searchKeys ?? screen.columns.map((c) => c.key)).some((k) =>
        String(r[k] ?? "").toLowerCase().includes(q),
      )
    })
  }, [all, query, tab, screen])

  const hasRowButtons =
    !screen.derive && (!!screen.actions?.length || screen.form?.edit || screen.deletable)

  const save = (input: Record<string, Cell>) => {
    const values = { ...input, ...(screen.form?.compute?.(input) ?? {}) }
    if (editing === "new") {
      const row = { ...(screen.form?.defaults?.(db) ?? {}), ...values, id: newId() } as Row
      apply({ db: { ...db, [screen.table]: [row, ...db[screen.table]] }, message: "등록했습니다" }, row.id)
    } else if (editing) {
      const id = editing.id
      apply(
        {
          db: {
            ...db,
            [screen.table]: db[screen.table].map((r) => (r.id === id ? ({ ...r, ...values } as Row) : r)),
          },
          message: "수정했습니다",
        },
        id,
      )
    }
    setEditing(null)
  }

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <ScreenTitle title={screen.title} description={screen.description} />
        <div className="flex flex-wrap gap-2">
          {screen.toolbar?.map((t) => (
            <button
              key={t.label}
              type="button"
              onClick={() => apply(t.run(db))}
              className="rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              {t.label}
            </button>
          ))}
          {screen.form?.create && (
            <button
              type="button"
              onClick={() => setEditing("new")}
              className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              <Plus className="h-4 w-4" />
              {screen.form.create}
            </button>
          )}
        </div>
      </div>

      {screen.quick && (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (!quick.trim()) return
            apply(screen.quick!.run(quick.trim(), db))
            setQuick("")
          }}
          className="flex flex-col gap-2 rounded-xl border-2 border-dashed bg-white p-4 sm:flex-row sm:items-center"
          style={{ borderColor: `${accent}55` }}
        >
          <ScanLine className="hidden h-6 w-6 shrink-0 sm:block" style={{ color: accent }} />
          <label className="shrink-0 text-sm font-semibold text-gray-900">{screen.quick.label}</label>
          <input
            value={quick}
            onChange={(e) => setQuick(e.target.value)}
            placeholder={screen.quick.placeholder}
            className="min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-2 font-mono text-sm outline-none focus:border-gray-500"
          />
          <button
            type="submit"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white"
            style={{ backgroundColor: accent }}
          >
            처리
          </button>
        </form>
      )}

      <section className="rounded-xl border border-gray-200 bg-white">
        <div className="flex flex-col gap-3 border-b border-gray-100 p-3 sm:flex-row sm:items-center">
          {screen.tabs && (
            <div className="flex gap-1 overflow-x-auto">
              {["전체", ...screen.tabs.values].map((v) => {
                const n = v === "전체" ? all.length : all.filter((r) => r[screen.tabs!.key] === v).length
                const active = tab === v
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setTab(v)}
                    className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                      active ? "text-white" : "text-gray-600 hover:bg-gray-100"
                    }`}
                    style={active ? { backgroundColor: accent } : undefined}
                  >
                    {v} <span className={active ? "text-white/80" : "text-gray-400"}>{n}</span>
                  </button>
                )
              })}
            </div>
          )}
          <div className="relative sm:ml-auto sm:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="검색"
              className="w-full rounded-lg border border-gray-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-gray-400"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50 text-left text-xs font-semibold text-gray-500">
                {screen.columns.map((c) => (
                  <th
                    key={c.key}
                    className={`whitespace-nowrap px-4 py-2.5 ${isNumeric(c) ? "text-right" : ""}`}
                  >
                    {c.label}
                  </th>
                ))}
                {hasRowButtons && <th className="px-4 py-2.5 text-right">처리</th>}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={screen.columns.length + 1}
                    className="px-4 py-12 text-center text-gray-400"
                  >
                    조건에 맞는 자료가 없습니다
                  </td>
                </tr>
              )}
              {filtered.map((r) => (
                <tr
                  key={r.id}
                  className={`border-b border-gray-50 transition-colors last:border-0 ${
                    touched === r.id ? "bg-amber-50" : "hover:bg-gray-50"
                  }`}
                >
                  {screen.columns.map((c) => (
                    <td
                      key={c.key}
                      className={`whitespace-nowrap px-4 py-3 text-gray-700 ${
                        isNumeric(c) ? "text-right tabular-nums" : ""
                      }`}
                    >
                      {renderCell(c, r[c.key])}
                    </td>
                  ))}
                  {hasRowButtons && (
                    <td className="whitespace-nowrap px-4 py-2 text-right">
                      <div className="inline-flex gap-1.5">
                        {screen.actions
                          ?.filter((a) => !a.when || a.when(r))
                          .map((a) => (
                            <button
                              key={a.label}
                              type="button"
                              onClick={() => apply(a.run(r, db), r.id)}
                              className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-opacity hover:opacity-85 ${
                                a.danger ? "bg-red-50 text-red-600" : "text-white"
                              }`}
                              style={a.danger ? undefined : { backgroundColor: accent }}
                            >
                              {a.label}
                            </button>
                          ))}
                        {screen.form?.edit && (
                          <button
                            type="button"
                            onClick={() => setEditing(r)}
                            aria-label="수정"
                            className="rounded-md border border-gray-200 p-1.5 text-gray-500 hover:bg-gray-100"
                          >
                            <Pencil className="h-3.5 w-3.5" />
                          </button>
                        )}
                        {screen.deletable && (
                          <button
                            type="button"
                            onClick={() => {
                              if (!confirm("삭제할까요?")) return
                              apply({
                                db: { ...db, [screen.table]: db[screen.table].filter((x) => x.id !== r.id) },
                                message: "삭제했습니다",
                              })
                            }}
                            aria-label="삭제"
                            className="rounded-md border border-gray-200 p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="border-t border-gray-100 px-4 py-2.5 text-xs text-gray-500">
          총 {filtered.length}건
        </p>
      </section>

      {editing && screen.form && (
        <FormModal
          title={editing === "new" ? screen.form.create ?? "등록" : "수정"}
          fields={screen.form.fields}
          initial={editing === "new" ? {} : editing}
          accent={accent}
          onClose={() => setEditing(null)}
          onSave={save}
        />
      )}
    </>
  )
}

function FormModal({
  title,
  fields,
  initial,
  accent,
  onClose,
  onSave,
}: {
  title: string
  fields: Field[]
  initial: Record<string, Cell>
  accent: string
  onClose: () => void
  onSave: (values: Record<string, Cell>) => void
}) {
  const [values, setValues] = useState<Record<string, Cell>>(() => {
    const v: Record<string, Cell> = {}
    for (const f of fields) {
      v[f.key] = initial[f.key] ?? (f.type === "select" ? f.options?.[0] ?? "" : f.type === "date" ? day() : "")
    }
    return v
  })
  const [error, setError] = useState("")

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const missing = fields.find((f) => f.required && String(values[f.key]).trim() === "")
    if (missing) {
      setError(`${missing.label}을(를) 입력해 주세요`)
      return
    }
    const out: Record<string, Cell> = {}
    for (const f of fields) out[f.key] = f.type === "number" ? Number(values[f.key]) || 0 : values[f.key]
    onSave(out)
  }

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"

  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <form
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white p-6 shadow-2xl sm:rounded-2xl"
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <button type="button" onClick={onClose} aria-label="닫기" className="rounded p-1 hover:bg-gray-100">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map((f) => (
            <label
              key={f.key}
              className={`block text-sm ${f.type === "textarea" ? "sm:col-span-2" : ""}`}
            >
              <span className="mb-1 block font-medium text-gray-700">
                {f.label}
                {f.required && <span className="text-red-500"> *</span>}
              </span>
              {f.type === "select" ? (
                <select
                  value={String(values[f.key])}
                  onChange={(e) => setValues({ ...values, [f.key]: e.target.value })}
                  className={inputClass}
                >
                  {f.options?.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : f.type === "textarea" ? (
                <textarea
                  rows={3}
                  value={String(values[f.key])}
                  placeholder={f.placeholder}
                  onChange={(e) => setValues({ ...values, [f.key]: e.target.value })}
                  className={inputClass}
                />
              ) : (
                <input
                  type={f.type ?? "text"}
                  inputMode={f.type === "number" ? "numeric" : undefined}
                  value={String(values[f.key])}
                  placeholder={f.placeholder}
                  onChange={(e) => setValues({ ...values, [f.key]: e.target.value })}
                  className={inputClass}
                />
              )}
            </label>
          ))}
        </div>
        {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}
        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            취소
          </button>
          <button
            type="submit"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white"
            style={{ backgroundColor: accent }}
          >
            저장
          </button>
        </div>
      </form>
    </div>
  )
}
