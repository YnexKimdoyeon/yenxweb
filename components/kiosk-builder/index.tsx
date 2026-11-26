"use client"

// 키오스크 소개 페이지의 「3D로 조립해 보기」: 페이지에는 미리보기 한 장, 누르면 체험판 팝업처럼 큰 창 하나가 뜨고
// 그 안 전체가 3D 키오스크, 고르기 버튼은 화면 위에 떠 있다. three.js 는 창을 열 때만 불러온다.
// 주소 #3d 로 창이 열리고, ?k=<구성> 이 붙어 있으면 그 구성 그대로 연다(문의 메일 속 링크).
import dynamic from "next/dynamic"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"
import { ArrowRight, Barcode, Box, Camera, CreditCard, DoorOpen, IdCard, MousePointerClick, Move, Play as PlayIcon, Printer, Rotate3d, RotateCcw, Siren, Tag, Undo2, Weight, X, ZoomIn, ZoomOut } from "lucide-react"
import {
  MODULES,
  PRESETS,
  decodePlacement,
  emptyPlacement,
  encodePlacement,
  moduleById,
  presetPlacement,
  slotById,
  type ModuleId,
  type Placement,
  type Play,
  type SlotId,
} from "./data"

const Scene = dynamic(() => import("./scene"), { ssr: false, loading: () => <Loading /> })
type ViewCmd = { type: "in" | "out" | "reset"; n: number }

const ICON: Record<ModuleId, typeof Barcode> = { nfc: IdCard, scanner: Barcode, printer: Printer, card: CreditCard, camera: Camera, scale: Weight, label: Tag, tower: Siren }
const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7fe3ff]"

function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center text-sm text-white/50">
      <Rotate3d className="mr-2 h-5 w-5 animate-pulse" />
      키오스크를 불러오는 중
    </div>
  )
}

// 페이지에 놓이는 미리보기: 실물 사진 한 장 + 버튼
export function KioskBuilder() {
  const [open, setOpen] = useState(false)
  const [initial, setInitial] = useState<Placement | null>(null)
  const [initialUse, setInitialUse] = useState<string | null>(null)
  // 움직임 줄이기를 켠 사람에겐 영상 대신 정지 화면
  const [still, setStill] = useState(false)

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    const k = decodePlacement(new URLSearchParams(window.location.search).get("k"))
    if (k) {
      setInitial(k)
      setInitialUse(new URLSearchParams(window.location.search).get("use"))
      setOpen(true)
    }
    const sync = () => window.location.hash === "#3d" && setOpen(true)
    sync()
    window.addEventListener("hashchange", sync)
    return () => window.removeEventListener("hashchange", sync)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    if (window.location.hash === "#3d") history.replaceState(null, "", window.location.pathname + window.location.search)
  }, [])

  return (
    <>
      {/* 미리보기: 왼쪽 순서·모듈·버튼, 오른쪽 3D 키오스크가 천천히 도는 영상(3D 창과 같은 모델). 카드 전체가 버튼 */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group grid w-full grid-cols-1 overflow-hidden rounded-3xl bg-[#0a1330] text-left ring-1 ring-white/10 transition hover:ring-[#7fe3ff]/40 lg:grid-cols-[minmax(0,1fr)_440px] ${focusRing}`}
      >
        <span className="relative order-1 flex h-[380px] items-end justify-center overflow-hidden bg-[#0a1330] sm:h-[460px] lg:order-2 lg:h-[520px]">
          {still ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/kiosk/kiosk-3d-poster.jpg" alt="" className="h-full w-auto object-contain [mask-image:linear-gradient(90deg,transparent,black_22%,black_78%,transparent)]" />
          ) : (
            <video autoPlay muted loop playsInline preload="metadata" poster="/kiosk/kiosk-3d-poster.jpg" className="h-full w-auto object-contain [mask-image:linear-gradient(90deg,transparent,black_22%,black_78%,transparent)]" aria-hidden>
              <source src="/videos/kiosk-3d-loop.webm" type="video/webm" />
              <source src="/videos/kiosk-3d-loop.mp4" type="video/mp4" />
            </video>
          )}
        </span>
        <span className="order-2 flex flex-col justify-center gap-7 p-6 sm:p-10 lg:order-1">
          <span className="flex flex-col gap-3.5">
            {["어디에 쓸지 고르면 맞는 장비가 붙습니다", "모듈을 원하는 자리에 끌어다 붙이고 눌러 봅니다", "만든 구성 그대로 문의하면 저희도 그 모양을 보고 연락드립니다"].map((s, i) => (
              <span key={s} className="flex items-center gap-3.5 text-[15px] text-white/80 sm:text-base">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7fe3ff]/15 text-sm font-bold text-[#9debff]">{i + 1}</span>
                {s}
              </span>
            ))}
          </span>
          <span className="flex flex-wrap gap-2">
            {MODULES.map((m) => {
              const I = ICON[m.id]
              return (
                <span key={m.id} className="inline-flex items-center gap-1.5 rounded-lg bg-white/[.06] px-2.5 py-1.5 text-xs text-white/70 ring-1 ring-white/10">
                  <I className="h-3.5 w-3.5 text-[#7fe3ff]" />
                  {m.name}
                </span>
              )
            })}
          </span>
          <span className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#0b1530] shadow-lg transition group-hover:bg-[#dff7ff]">
            <Box className="h-5 w-5" />
            3D로 조립해 보기
          </span>
        </span>
      </button>
      <BuilderModal open={open} onClose={close} initial={initial} initialUse={initialUse} />
    </>
  )
}

function BuilderModal({ open, onClose, initial, initialUse }: { open: boolean; onClose: () => void; initial: Placement | null; initialUse: string | null }) {
  const dialog = useRef<HTMLDivElement>(null)
  const closeBtn = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const back = document.activeElement as HTMLElement | null
    const t = setTimeout(() => closeBtn.current?.focus(), 50)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose()
      if (e.key !== "Tab" || !dialog.current) return
      const items = [...dialog.current.querySelectorAll<HTMLElement>("button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])")].filter((el) => el.offsetParent !== null)
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      clearTimeout(t)
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
      back?.focus?.()
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-0 backdrop-blur-sm sm:p-6"
        >
          <motion.div
            initial={{ scale: 0.98, y: 8 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.98, y: 8 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            ref={dialog}
            role="dialog"
            aria-modal="true"
            aria-label="와이넥스 키오스크 3D 조립"
            className="flex h-full w-full max-w-[1600px] flex-col overflow-hidden bg-[#0a1330] text-white shadow-2xl sm:h-[92vh] sm:rounded-2xl"
          >
            <div className="flex shrink-0 items-center gap-3 border-b border-white/10 px-4 py-2.5">
              <span className="rounded bg-[#7fe3ff]/15 px-2 py-0.5 text-xs font-bold text-[#9debff]">3D 체험</span>
              <p className="min-w-0 flex-1 truncate text-sm font-semibold">와이넥스 키오스크 조립해 보기</p>
              <button
                ref={closeBtn}
                type="button"
                onClick={onClose}
                aria-label="3D 체험 닫기"
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white ${focusRing}`}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <Builder initial={initial} initialUse={initialUse} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// 창 안: 3D 가 전체를 채우고, 왼쪽 위 업무 고르기, 왼쪽 도구(문 열기·확대·축소·처음 시점·되돌리기),
// 오른쪽 모듈 카드(누르거나 키오스크로 끌어다 놓기), 오른쪽 아래 문의 버튼. 휴대폰은 모듈 카드가 아래로.
function Builder({ initial, initialUse }: { initial: Placement | null; initialUse?: string | null }) {
  const usePreset = initialUse ? PRESETS.find((p) => p.name === initialUse)?.id : undefined
  const [preset, setPreset] = useState(initial ? (usePreset ?? (initialUse ? "mine" : "custom")) : PRESETS[0].id)
  const [placement, setPlacement] = useState<Placement>(() => initial ?? presetPlacement(PRESETS[0].id))
  const [history, setHistory] = useState<Placement[]>([])
  const [placing, setPlacing] = useState<ModuleId | null>(null)
  const [overSlot, setOverSlot] = useState<SlotId | null>(null)
  // 자리 이름 버튼에 올렸을 때 3D 에서 그 자리를 강조
  const [hintSlot, setHintSlot] = useState<SlotId | null>(null)
  const [play, setPlay] = useState<Play | null>(null)
  const [focus, setFocus] = useState<[number, number, number] | null>(null)
  // 움직임 줄이기를 켠 사람에겐 저절로 흔들리지 않게
  const [idle, setIdle] = useState(() => typeof window === "undefined" || !window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  const [open, setOpen] = useState(false)
  const [cmd, setCmd] = useState<ViewCmd | null>(null)
  const [drag, setDrag] = useState<{ id: ModuleId; x: number; y: number } | null>(null)
  const n = useRef(0)
  // 「직접 입력」에서 적은 쓰실 곳(화면 제목과 문의 메일 키오스크_업무로 들어감)
  const [myUse, setMyUse] = useState(initial && initialUse && !usePreset && initialUse !== "직접 입력" ? initialUse : "")
  const title = preset === "mine" ? myUse.trim() || "우리 회사 키오스크" : (PRESETS.find((p) => p.id === preset)?.title ?? "와이넥스 키오스크")
  const code = encodePlacement(placement)

  const look = (slot: SlotId) => {
    setIdle(false)
    setFocus([...slotById(slot).pos])
  }
  const commit = (next: Placement) => {
    setHistory((h) => [...h.slice(-19), placement])
    setPlacement(next)
    // 직접 입력 중이면 그대로 두고, 정해 둔 구성을 고친 경우만 「사용자 구성」으로
    setPreset((cur) => (cur === "mine" ? cur : "custom"))
  }

  const trigger = useCallback(
    (id: ModuleId) => {
      const slot = placement[id]
      if (!slot) return
      setPlacing(null)
      look(slot)
      // 시작 시각은 장면 시계로 장면 쪽에서 잡는다
      setPlay({ id, at: -1, n: ++n.current })
    },
    [placement],
  )

  // 자리를 고르면 그 자리에 붙인다. 다른 모듈이 있던 자리면 그 모듈은 떨어진다
  const pick = (slot: SlotId) => {
    if (!placing || !moduleById(placing).slots.includes(slot)) return
    const next = { ...placement }
    for (const m of MODULES) if (next[m.id] === slot) next[m.id] = null
    next[placing] = slot
    commit(next)
    setPlacing(null)
    setHintSlot(null)
    setDrag(null)
    look(slot)
  }
  const remove = (id: ModuleId) => {
    commit({ ...placement, [id]: null })
    if (placing === id) setPlacing(null)
  }
  const undo = () => {
    const prev = history[history.length - 1]
    if (!prev) return
    setHistory((h) => h.slice(0, -1))
    setPlacement(prev)
    setPreset((cur) => (cur === "mine" ? cur : "custom"))
    setPlacing(null)
  }
  const pickPreset = (id: string) => {
    setHistory((h) => [...h.slice(-19), placement])
    setPreset(id)
    setPlacement(id === "mine" ? emptyPlacement() : presetPlacement(id))
    setPlacing(null)
    setFocus(null)
    setIdle(true)
  }
  const startPlacing = (id: ModuleId) => {
    setPlacing((cur) => (cur === id ? null : id))
    setIdle(false)
    setCmd({ type: "reset", n: Date.now() })
  }

  // 마우스로 카드를 끌면 손에 든 카드가 따라오고, 키오스크 자리 위에서 놓으면 붙는다
  useEffect(() => {
    if (!drag) return
    const move = (e: PointerEvent) => setDrag((d) => (d ? { ...d, x: e.clientX, y: e.clientY } : d))
    const up = () => setDrag(null)
    window.addEventListener("pointermove", move)
    window.addEventListener("pointerup", up)
    return () => {
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerup", up)
    }
  }, [drag])

  const panel = "rounded-2xl bg-[#0b1430]/80 ring-1 ring-white/10 backdrop-blur-md"
  const presetName = preset === "mine" ? myUse.trim() || "직접 입력" : PRESETS.find((p) => p.id === preset)?.name
  const inquiry = `/contact?type=kiosk&k=${encodeURIComponent(code)}${presetName ? `&use=${encodeURIComponent(presetName)}` : ""}`
  const count = MODULES.filter((m) => placement[m.id]).length

  const tools: { label: string; icon: typeof Barcode; on?: boolean; disabled?: boolean; act: () => void }[] = [
    { label: open ? "문 닫기" : "문 열어 안쪽 보기", icon: DoorOpen, on: open, act: () => (setOpen((o) => !o), setIdle(false), setFocus([0, 0.27, 0.3])) },
    { label: "가까이", icon: ZoomIn, act: () => (setIdle(false), setCmd({ type: "in", n: Date.now() })) },
    { label: "멀리", icon: ZoomOut, act: () => (setIdle(false), setCmd({ type: "out", n: Date.now() })) },
    { label: "처음 시점", icon: RotateCcw, act: () => setCmd({ type: "reset", n: Date.now() }) },
    { label: "되돌리기", icon: Undo2, disabled: history.length === 0, act: undo },
  ]

  return (
    <div className={`relative min-h-0 flex-1 ${drag ? "cursor-grabbing select-none" : ""}`}>
      <div className="absolute inset-0">
        <Scene
          placement={placement}
          play={play}
          focus={focus}
          idle={idle}
          placing={placing}
          open={open}
          cmd={cmd}
          title={title}
          onInteract={() => setIdle(false)}
          onTrigger={trigger}
          onSelect={startPlacing}
          onPick={pick}
          onHoverSlot={setOverSlot}
          hint={hintSlot}
        />
      </div>

      {/* 왼쪽 위: 업무 고르기 */}
      <div className="pointer-events-none absolute left-3 right-3 top-3 sm:left-5 sm:right-auto sm:top-5">
        <p className="mb-1.5 hidden text-[11px] font-semibold text-white/45 sm:block">1. 어디에 쓰실 건가요</p>
        <div className={`pointer-events-auto flex max-w-full gap-1 overflow-x-auto p-1 [scrollbar-width:none] ${panel}`}>
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => pickPreset(p.id)}
              aria-pressed={preset === p.id}
              className={`shrink-0 rounded-xl px-3.5 py-2 text-sm font-semibold transition ${focusRing} ${
                preset === p.id ? "bg-white text-[#0b1530]" : "text-white/75 hover:bg-white/10"
              }`}
            >
              {p.name}
            </button>
          ))}
          <button
            type="button"
            onClick={() => pickPreset("mine")}
            aria-pressed={preset === "mine"}
            className={`shrink-0 rounded-xl px-3.5 py-2 text-sm font-semibold transition ${focusRing} ${
              preset === "mine" ? "bg-white text-[#0b1530]" : "text-white/75 hover:bg-white/10"
            }`}
          >
            직접 입력
          </button>
        </div>
        {preset === "mine" && (
          <label className={`pointer-events-auto mt-2 flex items-center gap-2 px-3 py-2 ${panel}`}>
            <span className="shrink-0 text-xs font-semibold text-white/55">쓰실 곳</span>
            <input
              value={myUse}
              onChange={(e) => setMyUse(e.target.value.slice(0, 20))}
              placeholder="예: 자재 불출, 방문자 접수"
              className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
              autoFocus
            />
          </label>
        )}
      </div>

      {/* 왼쪽: 보기 도구 */}
      <div className={`absolute right-3 ${preset === "mine" ? "top-[7.25rem]" : "top-[4.25rem]"} flex-col gap-1 p-1 sm:left-5 ${placing ? "hidden sm:flex" : "flex"} sm:right-auto sm:top-1/2 sm:-translate-y-1/2 ${panel}`}>
        {tools.map((t) => (
          <button
            key={t.label}
            type="button"
            onClick={t.act}
            disabled={t.disabled}
            aria-label={t.label}
            title={t.label}
            aria-pressed={t.on}
            className={`group relative flex h-10 w-10 items-center justify-center rounded-xl transition disabled:opacity-30 ${focusRing} ${
              t.on ? "bg-[#38c6ee] text-[#06233a]" : "text-white/75 hover:bg-white/10 hover:text-white"
            }`}
          >
            <t.icon className="h-[18px] w-[18px]" />
            <span className="pointer-events-none absolute left-12 hidden whitespace-nowrap rounded-lg bg-black/80 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100 sm:block">
              {t.label}
            </span>
          </button>
        ))}
      </div>

      {/* 자리 고르는 중 안내: 3D 자리를 누르거나, 아래 자리 이름 버튼으로도 고른다(터치·키보드) */}
      {placing && (
        <div className={`pointer-events-none absolute inset-x-3 ${preset === "mine" ? "top-[7.25rem]" : "top-[4.25rem]"} z-10 flex justify-center sm:bottom-24 sm:top-auto`}>
          <div role="group" aria-label="붙일 자리" className="pointer-events-auto max-w-[560px] rounded-2xl bg-[#38c6ee] p-2.5 text-sm font-semibold text-[#06233a] shadow-xl">
            <div className="flex items-center gap-3 pl-1.5">
              <span className="flex-1">
                {overSlot ? `「${slotById(overSlot).code} ${slotById(overSlot).name}」에 붙이기` : `「${moduleById(placing).name}」 붙일 자리를 고르세요`}
              </span>
              <button type="button" onClick={() => setPlacing(null)} className={`rounded-lg bg-black/10 px-2.5 py-1 hover:bg-black/20 ${focusRing}`}>
                취소
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {moduleById(placing).slots.map((id) => {
                const owner = MODULES.find((m) => m.id !== placing && placement[m.id] === id)
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => pick(id)}
                    onPointerEnter={() => setHintSlot(id)}
                    onPointerLeave={() => setHintSlot(null)}
                    onFocus={() => setHintSlot(id)}
                    onBlur={() => setHintSlot(null)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${focusRing} ${
                      placement[placing] === id ? "bg-[#06233a] text-white" : "bg-white/70 hover:bg-white"
                    }`}
                    title={owner ? "있던 모듈은 떨어지고 이 자리에 붙습니다" : undefined}
                  >
                    <span className="mr-1 font-bold">{slotById(id).code}</span>
                    {slotById(id).name}
                    {owner && <span className="ml-1 font-normal text-[#06233a]/60">(교체)</span>}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* 오른쪽(휴대폰은 아래): 모듈 카드 */}
      <div className="pointer-events-none absolute inset-x-3 bottom-[4.25rem] sm:inset-x-auto sm:bottom-24 sm:right-5 sm:top-5 sm:flex sm:w-[300px] sm:flex-col">
        <div className={`pointer-events-auto flex min-h-0 flex-col ${panel}`}>
          <div className="hidden items-baseline justify-between px-4 pb-2 pt-4 sm:flex">
            <p className="text-sm font-semibold">2. 모듈 붙이기</p>
            <p className="text-xs text-white/45">{count}개 붙음</p>
          </div>
          <p className="hidden px-4 pb-3 text-xs leading-relaxed text-white/45 sm:block">카드를 키오스크로 끌어다 놓거나, 누르고 빛나는 자리를 고르세요.</p>
          <ul className="flex min-h-0 gap-2 overflow-x-auto p-2 [scrollbar-width:none] sm:grid sm:grid-cols-1 sm:overflow-y-auto sm:px-3 sm:pb-3 sm:pt-0">
            {MODULES.map((m) => {
              const I = ICON[m.id]
              const slot = placement[m.id]
              const active = placing === m.id
              return (
                <li
                  key={m.id}
                  className={`relative flex w-[200px] shrink-0 items-center gap-3 rounded-xl p-2.5 ring-1 transition sm:w-auto ${
                    active ? "bg-[#38c6ee]/20 ring-[#38c6ee]" : slot ? "bg-white/[.07] ring-white/10" : "bg-white/[.03] ring-white/5"
                  }`}
                >
                  <button
                    type="button"
                    onPointerDown={(e) => {
                      if (e.pointerType !== "mouse" || e.button !== 0) return
                      e.preventDefault()
                      setPlacing(m.id)
                      setIdle(false)
                      setDrag({ id: m.id, x: e.clientX, y: e.clientY })
                    }}
                    onClick={(e) => {
                      // 마우스는 누를 때 이미 시작했으니 click 은 키보드·터치용
                      if (e.detail > 0 && drag === null && placing === m.id) return
                      startPlacing(m.id)
                    }}
                    aria-pressed={active}
                    aria-label={`${m.name} ${slot ? "옮기기" : "붙이기"}`}
                    className={`flex min-w-0 flex-1 cursor-grab items-center gap-3 text-left active:cursor-grabbing ${focusRing}`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${
                        slot || active ? "from-[#1d3f6e] to-[#0e1d3a] text-[#7fe3ff]" : "from-white/10 to-white/[.02] text-white/45"
                      }`}
                    >
                      <I className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className={`block truncate text-sm font-semibold ${slot ? "text-white" : "text-white/75"}`}>{m.name}</span>
                      <span className="mt-0.5 flex items-center gap-1 truncate text-xs text-white/45">
                        {slot ? (
                          <>
                            <Move className="h-3 w-3 shrink-0" />
                            <b className="font-bold text-[#9debff]">{slotById(slot).code}</b> {slotById(slot).name}
                          </>
                        ) : (
                          <span className="truncate">{m.desc}</span>
                        )}
                      </span>
                    </span>
                  </button>
                  {slot && (
                    <span className="flex shrink-0 flex-col gap-1">
                      <button
                        type="button"
                        onClick={() => trigger(m.id)}
                        aria-label={`${m.name} 눌러 보기`}
                        title="눌러 보기"
                        className={`flex h-7 w-7 items-center justify-center rounded-lg bg-[#7fe3ff]/15 text-[#9debff] hover:bg-[#7fe3ff]/25 ${focusRing}`}
                      >
                        <PlayIcon className="h-3 w-3 fill-current" />
                      </button>
                      <button
                        type="button"
                        onClick={() => remove(m.id)}
                        aria-label={`${m.name} 떼기`}
                        title="떼기"
                        className={`flex h-7 w-7 items-center justify-center rounded-lg text-white/40 hover:bg-white/10 hover:text-white ${focusRing}`}
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* 오른쪽 아래: 이 구성으로 문의 */}
      <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-end gap-4 sm:inset-x-5 sm:bottom-5">
        <p className="pointer-events-none mr-auto hidden items-center gap-1.5 text-xs text-white/40 lg:ml-16 lg:flex">
          <MousePointerClick className="h-3.5 w-3.5" />
          끌어서 돌려 보고, 화면 버튼이나 붙인 모듈도 눌러 보세요
        </p>
        <Link
          href={code ? inquiry : "#"}
          aria-disabled={!code}
          onClick={(e) => !code && e.preventDefault()}
          className={`pointer-events-auto inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold shadow-xl transition sm:w-[300px] ${focusRing} ${
            code ? "bg-white text-[#0b1530] hover:bg-[#dff7ff]" : "cursor-not-allowed bg-white/20 text-white/50"
          }`}
        >
          3. 이 구성으로 문의하기
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* 끌고 있는 카드 */}
      {drag && (
        <div
          className="pointer-events-none fixed z-[200] flex items-center gap-2 rounded-xl bg-[#38c6ee] px-3 py-2 text-sm font-semibold text-[#06233a] shadow-2xl"
          style={{ left: drag.x + 14, top: drag.y + 14 }}
        >
          {(() => {
            const I = ICON[drag.id]
            return <I className="h-4 w-4" />
          })()}
          {moduleById(drag.id).name}
        </div>
      )}
    </div>
  )
}
