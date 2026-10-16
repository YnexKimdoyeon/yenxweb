"use client"

import { useState } from "react"
import { Check, Forklift, MessageSquare, Monitor, RotateCcw, Truck } from "lucide-react"

// 물류 현장 적용 예시 체험: 사무실 키오스크(왼쪽)에서 출고 요청 → 지게차 태블릿(오른쪽)에 바로 뜨고 수락·상차 → 키오스크·문자·ERP 기록에 반영
type Status = "대기" | "수락" | "완료"
interface Req {
  no: number
  car: string
  shipper: string
  cargo: string
  dock: string
  status: Status
}
interface Log {
  time: string
  text: string
}

const SHIPPERS = ["하늘포장", "바다수출", "새봄물산"]
const CARGOS = ["팔레트 2개", "팔레트 4개", "목상자 6개"]
const DOCKS = ["1번 도크", "2번 도크", "3번 도크"]
const SAMPLE_CARS = ["80바 1234", "92사 5678", "71아 2468"]

const now = () => {
  const d = new Date()
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`
}

export function KioskLogisticsDemo() {
  const [step, setStep] = useState<"home" | "car" | "cargo" | "done">("home")
  const [car, setCar] = useState("")
  const [shipper, setShipper] = useState(SHIPPERS[0])
  const [cargo, setCargo] = useState(CARGOS[0])
  const [reqs, setReqs] = useState<Req[]>([])
  const [mine, setMine] = useState<number | null>(null) // 키오스크에서 방금 접수한 요청 번호
  const [logs, setLogs] = useState<Log[]>([])
  const [flash, setFlash] = useState<number | null>(null)

  const log = (text: string) => setLogs((l) => [{ time: now(), text }, ...l].slice(0, 6))
  const myReq = reqs.find((r) => r.no === mine)

  const submit = () => {
    const no = (reqs.at(-1)?.no ?? 100) + 1
    const r: Req = { no, car, shipper, cargo, dock: DOCKS[no % 3], status: "대기" }
    setReqs((x) => [...x, r])
    setMine(no)
    setFlash(no)
    setTimeout(() => setFlash(null), 1600)
    setStep("done")
    log(`출고 요청 #${no} 접수 (${car} · ${shipper} ${cargo})`)
  }

  const update = (no: number, status: Status) => {
    setReqs((x) => x.map((r) => (r.no === no ? { ...r, status } : r)))
    const r = reqs.find((x) => x.no === no)!
    if (status === "수락") log(`#${no} 지게차 2호기 수락 → ${r.car} 기사님께 ${r.dock} 안내 문자 발송`)
    if (status === "완료") log(`#${no} 상차 완료 → 재고 차감·출고 이력 저장`)
  }

  const resetKiosk = () => {
    setStep("home")
    setCar("")
    setMine(null)
  }

  const resetAll = () => {
    resetKiosk()
    setReqs([])
    setLogs([])
  }

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "가", "0", "⌫"]
  const press = (k: string) => {
    if (k === "⌫") return setCar((c) => c.slice(0, -1))
    if (car.length >= 9) return
    setCar((c) => c + k)
  }

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        {/* 사무실 키오스크 */}
        <div className="flex flex-col">
          <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
            <Monitor className="h-4 w-4 text-primary" /> 사무실 출고 요청 키오스크
          </p>
          <div className="flex min-h-[460px] flex-1 flex-col overflow-hidden rounded-2xl border-[10px] border-neutral-800 bg-white shadow-xl">
            <div className="flex items-center justify-between bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
              <span>출고 요청</span>
              <span className="text-xs opacity-80">와이넥스 물류센터</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              {step === "home" && (
                <div className="flex flex-1 flex-col items-center justify-center text-center">
                  <Truck className="mb-4 h-14 w-14 text-primary" />
                  <p className="mb-1 text-xl font-bold text-foreground">기사님, 출고 요청하세요</p>
                  <p className="mb-6 text-sm text-muted-foreground">사무실에 들르지 않아도 지게차가 바로 받습니다</p>
                  <button
                    onClick={() => setStep("car")}
                    className="w-full rounded-xl bg-primary py-4 text-lg font-bold text-primary-foreground hover:bg-primary/90"
                  >
                    출고 요청 시작
                  </button>
                </div>
              )}

              {step === "car" && (
                <div className="flex flex-1 flex-col">
                  <p className="mb-1 text-sm font-semibold text-muted-foreground">1 / 2</p>
                  <p className="mb-3 text-lg font-bold text-foreground">차량번호를 입력하세요</p>
                  <div className="mb-3 rounded-xl border-2 border-primary/40 bg-muted/40 px-4 py-3 text-center text-2xl font-bold tracking-wider text-foreground">
                    {car || <span className="text-muted-foreground/50">아래에서 누르거나 고르세요</span>}
                  </div>
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {SAMPLE_CARS.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCar(c)}
                        className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary"
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                  <div className="mb-3 grid grid-cols-3 gap-1.5">
                    {keys.map((k) => (
                      <button
                        key={k}
                        onClick={() => press(k)}
                        className="rounded-lg bg-muted py-2.5 text-lg font-semibold text-foreground hover:bg-muted/70"
                      >
                        {k}
                      </button>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-2">
                    <button onClick={resetKiosk} className="rounded-xl border border-border px-4 py-3 font-semibold text-foreground">
                      처음
                    </button>
                    <button
                      disabled={car.length < 5}
                      onClick={() => setStep("cargo")}
                      className="flex-1 rounded-xl bg-primary py-3 font-bold text-primary-foreground disabled:opacity-40"
                    >
                      다음
                    </button>
                  </div>
                </div>
              )}

              {step === "cargo" && (
                <div className="flex flex-1 flex-col">
                  <p className="mb-1 text-sm font-semibold text-muted-foreground">2 / 2</p>
                  <p className="mb-3 text-lg font-bold text-foreground">화주와 물량을 고르세요</p>
                  <p className="mb-1.5 text-xs font-semibold text-muted-foreground">화주</p>
                  <div className="mb-4 grid grid-cols-3 gap-1.5">
                    {SHIPPERS.map((s) => (
                      <button
                        key={s}
                        onClick={() => setShipper(s)}
                        className={`rounded-lg border-2 py-3 text-sm font-semibold ${
                          shipper === s ? "border-primary bg-primary/10 text-primary" : "border-border text-foreground"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <p className="mb-1.5 text-xs font-semibold text-muted-foreground">물량</p>
                  <div className="mb-4 grid grid-cols-3 gap-1.5">
                    {CARGOS.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCargo(c)}
                        className={`rounded-lg border-2 py-3 text-sm font-semibold ${
                          cargo === c ? "border-primary bg-primary/10 text-primary" : "border-border text-foreground"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                  <div className="mb-4 rounded-lg bg-muted/50 px-3 py-2 text-sm text-foreground">
                    {car} · {shipper} · {cargo}
                  </div>
                  <div className="mt-auto flex gap-2">
                    <button onClick={() => setStep("car")} className="rounded-xl border border-border px-4 py-3 font-semibold text-foreground">
                      이전
                    </button>
                    <button onClick={submit} className="flex-1 rounded-xl bg-primary py-3 font-bold text-primary-foreground">
                      출고 요청 보내기
                    </button>
                  </div>
                </div>
              )}

              {step === "done" && myReq && (
                <div className="flex flex-1 flex-col">
                  <p className="mb-1 text-sm font-semibold text-muted-foreground">요청번호 #{myReq.no}</p>
                  {myReq.status === "대기" && (
                    <>
                      <p className="mb-2 text-xl font-bold text-foreground">지게차 배정을 기다리는 중</p>
                      <p className="mb-5 text-sm text-muted-foreground">
                        오른쪽 지게차 태블릿에서 <b className="text-primary">수락</b>을 눌러 보세요
                      </p>
                      <div className="mb-5 h-2 overflow-hidden rounded-full bg-muted">
                        <div className="h-full w-1/3 animate-pulse rounded-full bg-primary" />
                      </div>
                    </>
                  )}
                  {myReq.status !== "대기" && (
                    <>
                      <p className="mb-3 text-xl font-bold text-foreground">
                        {myReq.status === "수락" ? `${myReq.dock}로 이동하세요` : "상차가 끝났습니다"}
                      </p>
                      <div className="mb-5 rounded-xl bg-[#FEE500]/30 p-3">
                        <p className="mb-1 flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                          <MessageSquare className="h-3.5 w-3.5" /> 기사님 휴대폰 문자
                        </p>
                        <p className="text-sm leading-relaxed text-foreground">
                          {myReq.status === "수락"
                            ? `[와이넥스 물류센터] ${myReq.car} 출고 요청이 접수되었습니다. 지게차 2호기가 ${myReq.dock}에서 상차합니다.`
                            : `[와이넥스 물류센터] ${myReq.car} ${myReq.cargo} 상차 완료. 안전 운행하세요.`}
                        </p>
                      </div>
                    </>
                  )}
                  <button onClick={resetKiosk} className="mt-auto rounded-xl border border-border py-3 font-semibold text-foreground">
                    다른 차량 요청하기
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 지게차 산업용 태블릿 */}
        <div className="flex flex-col">
          <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
            <Forklift className="h-4 w-4 text-primary" /> 지게차 2호기 산업용 태블릿
          </p>
          <div className="flex min-h-[460px] flex-1 flex-col overflow-hidden rounded-2xl border-[10px] border-amber-500 bg-neutral-900 text-white shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 text-sm">
              <span className="font-semibold">출고 작업 목록</span>
              <span className="text-xs text-white/60">
                대기 {reqs.filter((r) => r.status === "대기").length} · 진행 {reqs.filter((r) => r.status === "수락").length} · 완료{" "}
                {reqs.filter((r) => r.status === "완료").length}
              </span>
            </div>
            <div className="flex-1 space-y-2.5 overflow-y-auto p-4">
              {reqs.length === 0 && (
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center text-white/50">
                  <Forklift className="mb-3 h-12 w-12" />
                  <p className="text-sm">아직 들어온 요청이 없습니다</p>
                  <p className="mt-1 text-xs">왼쪽 키오스크에서 출고 요청을 보내 보세요</p>
                </div>
              )}
              {[...reqs].reverse().map((r) => (
                <div
                  key={r.no}
                  className={`rounded-xl border p-4 transition-colors ${
                    flash === r.no
                      ? "border-amber-400 bg-amber-500/25"
                      : r.status === "완료"
                        ? "border-white/5 bg-white/5 opacity-60"
                        : "border-white/15 bg-white/10"
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs text-white/60">#{r.no}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                        r.status === "대기" ? "bg-amber-400 text-neutral-900" : r.status === "수락" ? "bg-sky-400 text-neutral-900" : "bg-white/20"
                      }`}
                    >
                      {r.status === "대기" ? "새 요청" : r.status === "수락" ? "상차 중" : "완료"}
                    </span>
                  </div>
                  <p className="text-lg font-bold">{r.car}</p>
                  <p className="mb-3 text-sm text-white/70">
                    {r.shipper} · {r.cargo} · {r.dock}
                  </p>
                  {r.status === "대기" && (
                    <button onClick={() => update(r.no, "수락")} className="w-full rounded-lg bg-amber-400 py-3 font-bold text-neutral-900 hover:bg-amber-300">
                      수락
                    </button>
                  )}
                  {r.status === "수락" && (
                    <button onClick={() => update(r.no, "완료")} className="w-full rounded-lg bg-sky-400 py-3 font-bold text-neutral-900 hover:bg-sky-300">
                      상차 완료
                    </button>
                  )}
                  {r.status === "완료" && (
                    <p className="flex items-center gap-1 text-sm text-white/60">
                      <Check className="h-4 w-4" /> 처리 끝
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ERP 기록 */}
      <div className="mt-5 rounded-2xl border border-border bg-card p-5">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">ERP·WMS 처리 이력 (자동 기록)</p>
          {logs.length > 0 && (
            <button onClick={resetAll} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
              <RotateCcw className="h-3.5 w-3.5" /> 처음부터
            </button>
          )}
        </div>
        {logs.length === 0 ? (
          <p className="text-sm text-muted-foreground">요청을 보내고 수락하면 처리 이력이 여기에 자동으로 쌓입니다.</p>
        ) : (
          <ul className="space-y-1.5 text-sm">
            {logs.map((l, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 font-mono text-xs leading-5 text-muted-foreground">{l.time}</span>
                <span className="text-foreground">{l.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
