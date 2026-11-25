"use client"

// 키오스크 화면: 2D 캔버스에 그려 3D 화면 판에 붙인다(HTML 겹치기는 좁은 화면에서 위치가 어긋남).
// 붙인 모듈마다 버튼이 생기고, 버튼을 누르면 그 모듈 동작이 재생된다. 좌표는 450×780 기준, 2배로 그림.
import { useEffect, useMemo, useRef, useState } from "react"
import { useFrame, type ThreeEvent } from "@react-three/fiber"
import * as THREE from "three"
import { MODULES, type ModuleId, type Play } from "./data"

const W = 450
const H = 780
const S = 2
// lucide 아이콘(ISC) 선 모양, 24 격자
const ICON: Record<ModuleId | "check" | "wifi", string[]> = {
  nfc: ["M16 10h2", "M16 14h2", "M6.17 15a3 3 0 0 1 5.66 0", "M7 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", "M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2z"],
  scanner: ["M3 5v14", "M8 5v14", "M12 5v14", "M17 5v14", "M21 5v14"],
  printer: [
    "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
    "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",
    "M7 14h10a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1z",
  ],
  card: ["M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2z", "M2 10h20"],
  camera: [
    "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
    "M9 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
  ],
  scale: ["M9 5a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"],
  label: ["M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", "M7 7.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0"],
  tower: ["M7 18v-6a5 5 0 1 1 10 0v6", "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z", "M21 12h1", "M18.5 4.5 18 5", "M2 12h1", "M12 2v1", "m4.929 4.929.707.707", "M12 12v6"],
  check: ["M2 12a10 10 0 1 0 20 0a10 10 0 1 0 -20 0", "m9 12 2 2 4-4"],
  wifi: ["M12 20h.01", "M2 8.82a15 15 0 0 1 20 0", "M5 12.859a10 10 0 0 1 14 0", "M8.5 16.429a5 5 0 0 1 7 0"],
}

function icon(g: CanvasRenderingContext2D, name: keyof typeof ICON, x: number, y: number, size: number, color: string) {
  g.save()
  g.translate(x, y)
  g.scale(size / 24, size / 24)
  g.strokeStyle = color
  g.lineWidth = 2
  g.lineCap = "round"
  g.lineJoin = "round"
  for (const d of ICON[name]) g.stroke(new Path2D(d))
  g.restore()
}

function rr(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  g.beginPath()
  g.roundRect(x, y, w, h, r)
}

type Tile = { id: ModuleId; x: number; y: number; w: number; h: number }

function layout(on: ModuleId[]): Tile[] {
  const w = (W - 56 - 16) / 2
  // 모듈이 많으면 버튼을 낮춘다(8개까지 4줄)
  const h = on.length > 6 ? 92 : on.length > 4 ? 128 : 170
  return on.map((id, i) => ({ id, x: 28 + (i % 2) * (w + 16), y: 200 + Math.floor(i / 2) * (h + 16), w, h }))
}

export function KioskScreenMesh({
  modules,
  play,
  title,
  onTrigger,
  position,
}: {
  modules: Record<ModuleId, boolean>
  play: Play | null
  title: string
  onTrigger: (id: ModuleId) => void
  position: [number, number, number]
}) {
  const canvas = useMemo(() => {
    const c = document.createElement("canvas")
    c.width = W * S
    c.height = H * S
    return c
  }, [])
  const tex = useMemo(() => {
    const t = new THREE.CanvasTexture(canvas)
    t.colorSpace = THREE.SRGBColorSpace
    t.anisotropy = 4
    return t
  }, [canvas])
  const logo = useMemo(() => {
    const i = new Image()
    i.src = "/logo-mark.png"
    return i
  }, [])
  const font = useMemo(() => getComputedStyle(document.body).fontFamily || "sans-serif", [])
  const [hover, setHover] = useState<ModuleId | null>(null)
  const last = useRef("")
  const on = MODULES.filter((m) => modules[m.id]).map((m) => m.id)
  const tiles = layout(on)

  useEffect(() => () => tex.dispose(), [tex])

  useFrame(({ clock }) => {
    const now = clock.elapsedTime
    const dt = play ? now - play.at : 99
    const toastK = dt > 0.7 && dt < 3.2 ? Math.min(1, (dt - 0.7) / 0.35) : 0
    const flash = play?.id === "camera" && dt > 0.45 && dt < 1.15 ? 0.95 * (1 - (dt - 0.45) / 0.7) : 0
    const time = new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false })
    const key = [on.join(), title, hover, play?.n, toastK.toFixed(2), flash.toFixed(2), time, logo.complete].join("|")
    if (key === last.current) return
    last.current = key

    const g = canvas.getContext("2d")!
    g.setTransform(S, 0, 0, S, 0, 0)
    const bg = g.createLinearGradient(0, 0, W * 0.3, H)
    bg.addColorStop(0, "#132a5c")
    bg.addColorStop(0.6, "#0b1433")
    g.fillStyle = bg
    g.fillRect(0, 0, W, H)

    // 위 줄: 로고·회사명·시계
    if (logo.complete && logo.naturalWidth) {
      g.save()
      g.beginPath()
      g.arc(40, 36, 13, 0, Math.PI * 2)
      g.fillStyle = "#fff"
      g.fill()
      g.clip()
      g.drawImage(logo, 28, 24, 24, 24)
      g.restore()
    }
    g.fillStyle = "rgba(255,255,255,.85)"
    g.font = `600 17px ${font}`
    g.textBaseline = "middle"
    g.fillText("와이넥스", 62, 37)
    g.textAlign = "right"
    g.fillText(time, W - 28, 37)
    icon(g, "wifi", W - 28 - g.measureText(time).width - 26, 28, 18, "rgba(255,255,255,.85)")
    g.textAlign = "left"

    g.textBaseline = "alphabetic"
    g.fillStyle = "rgba(255,255,255,.6)"
    g.font = `400 20px ${font}`
    g.fillText("오늘도 수고 많으십니다", 28, 118)
    g.fillStyle = "#fff"
    g.font = `700 42px ${font}`
    g.fillText(title, 28, 170)

    for (const t of tiles) {
      const m = MODULES.find((x) => x.id === t.id)!
      rr(g, t.x, t.y, t.w, t.h, 22)
      g.fillStyle = hover === t.id ? "rgba(255,255,255,.2)" : "rgba(255,255,255,.1)"
      g.fill()
      g.strokeStyle = "rgba(255,255,255,.15)"
      g.lineWidth = 1.5
      g.stroke()
      if (t.h < 100) {
        icon(g, t.id, t.x + 16, t.y + (t.h - 30) / 2, 30, "#7fe3ff")
        g.fillStyle = "#fff"
        g.font = `700 21px ${font}`
        g.textBaseline = "middle"
        g.fillText(m.action, t.x + 58, t.y + t.h / 2)
        g.textBaseline = "alphabetic"
      } else {
        icon(g, t.id, t.x + 20, t.y + 20, t.h > 140 ? 44 : 36, "#7fe3ff")
        g.fillStyle = "#fff"
        g.font = `700 ${t.h > 140 ? 26 : 23}px ${font}`
        g.fillText(m.action, t.x + 20, t.y + t.h - 22)
      }
    }
    if (tiles.length === 0) {
      rr(g, 28, 200, W - 56, 150, 22)
      g.setLineDash([8, 8])
      g.strokeStyle = "rgba(255,255,255,.25)"
      g.lineWidth = 2
      g.stroke()
      g.setLineDash([])
      g.fillStyle = "rgba(255,255,255,.6)"
      g.font = `400 20px ${font}`
      g.textAlign = "center"
      g.fillText("모듈을 붙이면", W / 2, 268)
      g.fillText("여기에 버튼이 생깁니다", W / 2, 298)
      g.textAlign = "left"
    }
    g.fillStyle = "rgba(255,255,255,.45)"
    g.font = `400 16px ${font}`
    g.textAlign = "center"
    g.fillText("버튼을 눌러 보세요", W / 2, H - 34)
    g.textAlign = "left"

    // 결과 알림
    if (toastK > 0 && play) {
      const m = MODULES.find((x) => x.id === play.id)!
      const e = 1 - Math.pow(1 - toastK, 3)
      g.save()
      g.globalAlpha = e
      g.translate(0, (1 - e) * 30)
      g.shadowColor = "rgba(0,0,0,.45)"
      g.shadowBlur = 30
      rr(g, 24, H - 96 - 96, W - 48, 96, 22)
      g.fillStyle = "#fff"
      g.fill()
      g.shadowBlur = 0
      icon(g, "check", 44, H - 96 - 96 + 24, 48, "#10b981")
      g.fillStyle = "#0b1530"
      g.font = `700 26px ${font}`
      g.fillText(m.done[0], 110, H - 96 - 96 + 44)
      g.fillStyle = "#737373"
      g.font = `400 19px ${font}`
      g.fillText(m.done[1], 110, H - 96 - 96 + 74)
      g.restore()
    }
    if (flash > 0) {
      g.fillStyle = `rgba(255,255,255,${flash})`
      g.fillRect(0, 0, W, H)
    }
    tex.needsUpdate = true
  })

  const hit = (e: ThreeEvent<PointerEvent | MouseEvent>) => {
    if (!e.uv) return null
    const x = e.uv.x * W
    const y = (1 - e.uv.y) * H
    return tiles.find((t) => x >= t.x && x <= t.x + t.w && y >= t.y && y <= t.y + t.h)?.id ?? null
  }

  return (
    <mesh
      position={position}
      onClick={(e) => {
        e.stopPropagation()
        const id = hit(e)
        if (id) onTrigger(id)
      }}
      onPointerMove={(e) => {
        const id = hit(e)
        setHover(id)
        document.body.style.cursor = id ? "pointer" : ""
      }}
      onPointerOut={() => {
        setHover(null)
        document.body.style.cursor = ""
      }}
    >
      <planeGeometry args={[0.45, 0.78]} />
      <meshBasicMaterial map={tex} toneMapped={false} />
    </mesh>
  )
}
