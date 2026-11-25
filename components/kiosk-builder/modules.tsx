"use client"

// 키오스크에 붙이는 모듈 5종. 모두 앞(+z)이 바깥을 보게 만들고, 붙는 자리의 기울기로 돌려 붙인다.
// play 가 자기 차례면 동작(상자 스캔, 번호표 출력, 카드 태그, 카드 결제, 사진 촬영)을 보여 준다.
import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { RoundedBox } from "@react-three/drei"
import * as THREE from "three"
import type { ModuleId, Play } from "./data"

const RED = new THREE.Color(3, 0.25, 0.35)
const GREEN = new THREE.Color(0.4, 3, 1.1)
const CYAN = new THREE.Color(0.25, 2.4, 3.2)

// 0~1 진행값 (재생 중이 아니면 -1)
function progress(play: Play | null, id: ModuleId, now: number, dur: number) {
  if (!play || play.id !== id) return -1
  const p = (now - play.at) / dur
  return p > 1 ? -1 : p
}
// 0→1(들어옴)·1 유지·1→0(나감), 부드럽게
const ease = (t: number) => t * t * (3 - 2 * t)
const inHoldOut = (t: number, a: number, b: number) => (t < 0 ? 0 : t < a ? ease(t / a) : t > b ? ease(Math.max(0, 1 - (t - b) / (1 - b))) : 1)

function canvasTex(w: number, h: number, draw: (g: CanvasRenderingContext2D) => void) {
  const c = document.createElement("canvas")
  c.width = w
  c.height = h
  draw(c.getContext("2d")!)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = 4
  return t
}

function useCard(color: string, label: string) {
  return useMemo(
    () =>
      canvasTex(344, 216, (g) => {
        const l = g.createLinearGradient(0, 0, 344, 216)
        l.addColorStop(0, color)
        l.addColorStop(1, "#0b1530")
        g.fillStyle = l
        g.beginPath()
        g.roundRect(0, 0, 344, 216, 18)
        g.fill()
        g.fillStyle = "rgba(255,255,255,.95)"
        g.font = "bold 34px sans-serif"
        g.fillText("YNEX", 26, 54)
        g.font = "500 22px sans-serif"
        g.fillStyle = "rgba(255,255,255,.75)"
        g.fillText(label, 26, 186)
        g.fillStyle = "#d9b45a"
        g.beginPath()
        g.roundRect(26, 86, 54, 42, 6)
        g.fill()
      }),
    [color, label],
  )
}

function CardMesh({ tex }: { tex: THREE.Texture }) {
  return (
    <RoundedBox args={[0.086, 0.054, 0.0012]} radius={0.0005} smoothness={2}>
      <meshStandardMaterial map={tex} roughness={0.35} metalness={0.1} />
    </RoundedBox>
  )
}

// 매립형 2D 바코드 스캐너: 금속 테두리, 검은 유리창, 붉은 조준광
export function Scanner({ play }: { play: Play | null }) {
  const beam = useRef<THREE.Group>(null)
  const box = useRef<THREE.Group>(null)
  const win = useRef<THREE.MeshStandardMaterial>(null)
  const code = useMemo(
    () =>
      canvasTex(200, 110, (g) => {
        g.fillStyle = "#fff"
        g.fillRect(0, 0, 200, 110)
        g.fillStyle = "#111"
        let x = 14
        for (let i = 0; i < 46; i++) {
          const w = [1, 2, 3, 1, 2][(i * 7) % 5]
          if (i % 2 === 0) g.fillRect(x, 10, w * 1.4, 72)
          x += w * 1.4 + 1.6
        }
        g.font = "14px monospace"
        g.fillText("8 809021 22050", 40, 100)
      }),
    [],
  )
  useFrame(({ clock }) => {
    const t = progress(play, "scanner", clock.elapsedTime, 1.8)
    if (beam.current) beam.current.visible = t > 0.2 && t < 0.75
    if (win.current) win.current.emissiveIntensity = t > 0.2 && t < 0.75 ? 1.2 : 0.12
    if (box.current) {
      box.current.visible = t >= 0
      const k = inHoldOut(t, 0.28, 0.78)
      box.current.position.set(0.02 * (1 - k), 0.08 * (1 - k), 0.15 + 0.3 * (1 - k))
      box.current.rotation.set(0.25 * (1 - k), 0.5 * (1 - k), 0)
    }
  })
  return (
    <group>
      <RoundedBox args={[0.112, 0.082, 0.01]} radius={0.004} smoothness={3} position={[0, 0, 0.005]}>
        <meshStandardMaterial color="#2a2e36" metalness={0.85} roughness={0.28} />
      </RoundedBox>
      <mesh position={[0, 0, 0.0102]}>
        <planeGeometry args={[0.08, 0.056]} />
        <meshStandardMaterial ref={win} color="#090203" emissive={RED} emissiveIntensity={0.12} metalness={0.2} roughness={0.05} />
      </mesh>
      <mesh position={[0.046, -0.032, 0.0103]}>
        <circleGeometry args={[0.0028, 12]} />
        <meshBasicMaterial color={GREEN} toneMapped={false} />
      </mesh>
      {/* 조준광 */}
      <group ref={beam} visible={false} position={[0, 0, 0.08]}>
        <mesh>
          <boxGeometry args={[0.075, 0.0012, 0.14]} />
          <meshBasicMaterial color={RED} transparent opacity={0.55} toneMapped={false} depthWrite={false} />
        </mesh>
        <mesh position={[0, 0, 0.07]}>
          <boxGeometry args={[0.09, 0.003, 0.002]} />
          <meshBasicMaterial color={RED} toneMapped={false} />
        </mesh>
      </group>
      {/* 바코드 붙은 상자 */}
      <group ref={box} visible={false}>
        <RoundedBox args={[0.15, 0.11, 0.11]} radius={0.004} position={[0, 0, 0.055]}>
          <meshStandardMaterial color="#c4955c" roughness={0.9} />
        </RoundedBox>
        <mesh position={[0, 0, -0.0008]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[0.09, 0.05]} />
          <meshBasicMaterial map={code} />
        </mesh>
        <mesh position={[0, 0.0552, 0.055]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.15, 0.02]} />
          <meshStandardMaterial color="#d8c39a" roughness={0.7} />
        </mesh>
      </group>
    </group>
  )
}

// 매립형 감열 프린터: 금속 베젤과 출구, 번호표가 나와 살짝 휜다
export function Printer({ play }: { play: Play | null }) {
  const paper = useRef<THREE.Group>(null)
  const led = useRef<THREE.MeshBasicMaterial>(null)
  const tex = useMemo(
    () =>
      canvasTex(200, 400, (g) => {
        g.fillStyle = "#fbfbf6"
        g.fillRect(0, 0, 200, 400)
        g.fillStyle = "#111"
        g.textAlign = "center"
        g.font = "bold 24px sans-serif"
        g.fillText("YNEX", 100, 44)
        g.font = "16px sans-serif"
        g.fillText("대기번호", 100, 90)
        g.font = "bold 70px sans-serif"
        g.fillText("A-023", 100, 160)
        g.fillStyle = "#9aa0a6"
        for (let i = 0; i < 7; i++) g.fillRect(30, 200 + i * 24, i % 2 ? 100 : 140, 8)
        g.setLineDash([6, 6])
        g.strokeStyle = "#bbb"
        g.beginPath()
        g.moveTo(0, 390)
        g.lineTo(200, 390)
        g.stroke()
      }),
    [],
  )
  // 아래로 처지는 종이
  const geo = useMemo(() => {
    const g = new THREE.PlaneGeometry(0.08, 0.17, 1, 16)
    g.translate(0, -0.085, 0)
    const p = g.attributes.position
    for (let i = 0; i < p.count; i++) {
      const y = -p.getY(i)
      p.setZ(i, 0.9 * y * y)
    }
    g.computeVertexNormals()
    return g
  }, [])
  useFrame(({ clock }) => {
    const t = progress(play, "printer", clock.elapsedTime, 2.8)
    if (led.current) led.current.color.copy(t >= 0 && t < 0.5 && Math.sin(t * 50) > 0 ? GREEN : CYAN)
    if (!paper.current) return
    paper.current.visible = t >= 0
    paper.current.scale.set(1, Math.max(0.001, t < 0 ? 0 : Math.min(1, t / 0.5)), 1)
  })
  return (
    <group>
      <RoundedBox args={[0.16, 0.045, 0.008]} radius={0.003} smoothness={3} position={[0, 0, 0.004]}>
        <meshStandardMaterial color="#b8bec7" metalness={0.92} roughness={0.22} />
      </RoundedBox>
      <mesh position={[0, 0.002, 0.0082]}>
        <planeGeometry args={[0.104, 0.008]} />
        <meshBasicMaterial color="#000" />
      </mesh>
      <mesh position={[0.066, -0.012, 0.0083]}>
        <circleGeometry args={[0.0025, 12]} />
        <meshBasicMaterial ref={led} color={CYAN} toneMapped={false} />
      </mesh>
      <group ref={paper} position={[0, 0.002, 0.008]} rotation={[-1.35, 0, 0]} visible={false}>
        <mesh geometry={geo}>
          <meshStandardMaterial map={tex} side={THREE.DoubleSide} roughness={0.85} />
        </mesh>
      </group>
    </group>
  )
}

// 매립형 금속 테두리(스캐너·프린터와 같은 마감)
function Bezel({ w, h, d = 0.008 }: { w: number; h: number; d?: number }) {
  return (
    <RoundedBox args={[w, h, d]} radius={0.004} smoothness={3} position={[0, 0, d / 2]}>
      <meshStandardMaterial color="#2a2e36" metalness={0.85} roughness={0.28} />
    </RoundedBox>
  )
}

// 매립형 사원증 리더: 금속 테두리 안 유리판에 비접촉 표시와 빛나는 링
export function Nfc({ play }: { play: Play | null }) {
  const ring = useRef<THREE.MeshBasicMaterial>(null)
  const card = useRef<THREE.Group>(null)
  const tex = useCard("#3446a8", "생산1팀 김현수")
  const face = useMemo(
    () =>
      canvasTex(256, 256, (g) => {
        g.fillStyle = "#07090c"
        g.fillRect(0, 0, 256, 256)
        g.strokeStyle = "rgba(200,240,255,.8)"
        g.lineWidth = 8
        g.lineCap = "round"
        for (let i = 0; i < 4; i++) {
          g.beginPath()
          g.arc(100, 128, 16 + i * 20, -0.75, 0.75)
          g.stroke()
        }
      }),
    [],
  )
  useFrame(({ clock }) => {
    const t = progress(play, "nfc", clock.elapsedTime, 2.2)
    if (ring.current) ring.current.color.copy(t > 0.38 && t < 0.92 ? GREEN : CYAN)
    if (card.current) {
      card.current.visible = t >= 0
      const k = inHoldOut(t, 0.35, 0.72)
      card.current.position.set(-0.06 * (1 - k), 0.1 * (1 - k), 0.012 + 0.32 * (1 - k))
      card.current.rotation.set(0, 0, 0.4 * (1 - k))
    }
  })
  return (
    <group>
      <Bezel w={0.11} h={0.11} />
      <mesh position={[0, 0, 0.0082]}>
        <planeGeometry args={[0.086, 0.086]} />
        <meshPhysicalMaterial map={face} roughness={0.04} clearcoat={1} />
      </mesh>
      <mesh position={[0, 0, 0.0084]}>
        <ringGeometry args={[0.045, 0.049, 64]} />
        <meshBasicMaterial ref={ring} color={CYAN} toneMapped={false} />
      </mesh>
      <group ref={card} visible={false}>
        <CardMesh tex={tex} />
      </group>
    </group>
  )
}

// 매립형 카드 결제부: 금속 테두리 안에 작은 화면, 납작한 번호판, 아래 IC 투입구(ATM 처럼)
export function CardTerminal({ play }: { play: Play | null }) {
  const scr = useRef<THREE.MeshBasicMaterial>(null)
  const slotLed = useRef<THREE.MeshBasicMaterial>(null)
  const card = useRef<THREE.Group>(null)
  const tex = useCard("#b3263c", "YNEX PAY")
  const [idle, ok] = useMemo(() => {
    const draw = (title: string, sub: string, color: string) =>
      canvasTex(260, 180, (g) => {
        g.fillStyle = "#0e1726"
        g.fillRect(0, 0, 260, 180)
        g.fillStyle = color
        g.textAlign = "center"
        g.font = "bold 34px sans-serif"
        g.fillText(title, 130, 82)
        g.fillStyle = "rgba(255,255,255,.7)"
        g.font = "22px sans-serif"
        g.fillText(sub, 130, 128)
      })
    return [draw("12,000원", "카드를 꽂아 주세요", "#ffffff"), draw("승인 완료", "영수증을 받으세요", "#3dff9a")]
  }, [])
  useFrame(({ clock }) => {
    const t = progress(play, "card", clock.elapsedTime, 2.6)
    if (scr.current) {
      const m = t > 0.42 && t < 0.95 ? ok : idle
      if (scr.current.map !== m) {
        scr.current.map = m
        scr.current.needsUpdate = true
      }
    }
    if (slotLed.current) slotLed.current.color.copy(t >= 0 && t < 0.42 && Math.sin(t * 40) > 0 ? GREEN : CYAN)
    if (card.current) {
      card.current.visible = t >= 0
      const k = inHoldOut(t, 0.42, 0.78)
      // 카드는 투입구에 수직으로 꽂힌다
      card.current.position.set(0, -0.062, 0.05 + 0.1 * (1 - k) - 0.035 * k)
    }
  })
  return (
    <group>
      <Bezel w={0.11} h={0.17} />
      <mesh position={[0, 0.045, 0.0082]}>
        <planeGeometry args={[0.072, 0.05]} />
        <meshBasicMaterial ref={scr} map={idle} toneMapped={false} />
      </mesh>
      {Array.from({ length: 12 }, (_, i) => (
        <RoundedBox key={i} args={[0.019, 0.01, 0.003]} radius={0.0015} smoothness={2} position={[-0.023 + (i % 3) * 0.023, 0.003 - Math.floor(i / 3) * 0.013, 0.0092]}>
          <meshStandardMaterial color={i === 9 ? "#b8392b" : i === 11 ? "#2d9b5a" : "#4a505a"} metalness={0.6} roughness={0.35} />
        </RoundedBox>
      ))}
      {/* IC 투입구와 표시등 */}
      <RoundedBox args={[0.074, 0.012, 0.01]} radius={0.003} smoothness={2} position={[0, -0.062, 0.012]}>
        <meshStandardMaterial color="#14171c" metalness={0.4} roughness={0.4} />
      </RoundedBox>
      <mesh position={[0, -0.062, 0.0171]}>
        <planeGeometry args={[0.06, 0.0025]} />
        <meshBasicMaterial color="#000" />
      </mesh>
      <mesh position={[0, -0.0555, 0.0171]}>
        <planeGeometry args={[0.06, 0.0012]} />
        <meshBasicMaterial ref={slotLed} color={CYAN} toneMapped={false} />
      </mesh>
      <group ref={card} visible={false} rotation={[Math.PI / 2, 0, 0]}>
        <CardMesh tex={tex} />
      </group>
    </group>
  )
}

// 매립형 카메라: 금속 테두리, 유리, 렌즈, 적외선 점, 촬영 표시등과 플래시
export function CameraModule({ play }: { play: Play | null }) {
  const flash = useRef<THREE.PointLight>(null)
  const dot = useRef<THREE.MeshBasicMaterial>(null)
  useFrame(({ clock }) => {
    const t = progress(play, "camera", clock.elapsedTime, 1.6)
    if (flash.current) flash.current.intensity = t > 0.3 && t < 0.42 ? 8 : 0
    if (dot.current) dot.current.color.copy(t >= 0 ? RED : new THREE.Color("#22262d"))
  })
  return (
    <group>
      <Bezel w={0.1} h={0.032} d={0.007} />
      <mesh position={[0, 0, 0.0072]}>
        <planeGeometry args={[0.086, 0.022]} />
        <meshPhysicalMaterial color="#030405" roughness={0.03} clearcoat={1} />
      </mesh>
      <mesh position={[0, 0, 0.0075]}>
        <ringGeometry args={[0.0065, 0.0085, 32]} />
        <meshStandardMaterial color="#9aa3ad" metalness={0.95} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0.0074]}>
        <circleGeometry args={[0.0065, 32]} />
        <meshPhysicalMaterial color="#0b2a55" metalness={0.6} roughness={0.02} clearcoat={1} />
      </mesh>
      {[-0.028, 0.028].map((x) => (
        <mesh key={x} position={[x, 0, 0.0075]}>
          <circleGeometry args={[0.0025, 12]} />
          <meshStandardMaterial color="#2a0d10" roughness={0.2} />
        </mesh>
      ))}
      <mesh position={[0.038, 0.004, 0.0076]}>
        <circleGeometry args={[0.0018, 10]} />
        <meshBasicMaterial ref={dot} color="#22262d" toneMapped={false} />
      </mesh>
      <pointLight ref={flash} position={[0, 0, 0.3]} intensity={0} distance={1.6} color="#ffffff" />
    </group>
  )
}

// 라벨 프린터: 넓은 출구에서 바코드 라벨이 곧게 밀려 나온다
export function LabelPrinter({ play }: { play: Play | null }) {
  const strip = useRef<THREE.Group>(null)
  const led = useRef<THREE.MeshBasicMaterial>(null)
  const tex = useMemo(
    () =>
      canvasTex(300, 400, (g) => {
        g.fillStyle = "#e9e4d8"
        g.fillRect(0, 0, 300, 400)
        for (let k = 0; k < 2; k++) {
          const y0 = 20 + k * 200
          g.fillStyle = "#fff"
          g.beginPath()
          g.roundRect(18, y0, 264, 170, 10)
          g.fill()
          g.fillStyle = "#111"
          g.font = "bold 24px sans-serif"
          g.fillText("LOT L-1124", 36, y0 + 36)
          g.font = "16px sans-serif"
          g.fillText("BRK-220-A  500EA", 36, y0 + 60)
          let x = 36
          for (let i = 0; i < 40; i++) {
            const w = [1, 2, 3, 1, 2][(i * 3) % 5] * 1.6
            if (i % 2 === 0) g.fillRect(x, y0 + 76, w, 70)
            x += w + 2
          }
        }
      }),
    [],
  )
  useFrame(({ clock }) => {
    const t = progress(play, "label", clock.elapsedTime, 2.6)
    if (led.current) led.current.color.copy(t >= 0 && t < 0.55 && Math.sin(t * 50) > 0 ? GREEN : CYAN)
    if (!strip.current) return
    strip.current.visible = t >= 0
    strip.current.scale.set(1, Math.max(0.001, t < 0 ? 0 : Math.min(1, t / 0.55)), 1)
  })
  return (
    <group>
      <RoundedBox args={[0.15, 0.07, 0.01]} radius={0.004} smoothness={3} position={[0, 0, 0.005]}>
        <meshStandardMaterial color="#2a2e36" metalness={0.85} roughness={0.28} />
      </RoundedBox>
      <RoundedBox args={[0.12, 0.016, 0.008]} radius={0.003} smoothness={2} position={[0, 0.008, 0.012]}>
        <meshStandardMaterial color="#14171c" metalness={0.4} roughness={0.4} />
      </RoundedBox>
      <mesh position={[0, 0.008, 0.0162]}>
        <planeGeometry args={[0.1, 0.003]} />
        <meshBasicMaterial color="#000" />
      </mesh>
      <mesh position={[-0.05, -0.02, 0.0103]}>
        <circleGeometry args={[0.0028, 12]} />
        <meshBasicMaterial ref={led} color={CYAN} toneMapped={false} />
      </mesh>
      {/* 버튼 두 개 */}
      {[0.03, 0.05].map((x) => (
        <mesh key={x} position={[x, -0.02, 0.0103]}>
          <circleGeometry args={[0.005, 20]} />
          <meshStandardMaterial color="#454b55" metalness={0.6} roughness={0.35} />
        </mesh>
      ))}
      <group ref={strip} position={[0, 0.008, 0.016]} rotation={[-Math.PI / 2 + 0.12, 0, 0]} visible={false}>
        <mesh position={[0, -0.075, 0]}>
          <planeGeometry args={[0.09, 0.15]} />
          <meshStandardMaterial map={tex} side={THREE.DoubleSide} roughness={0.7} />
        </mesh>
      </group>
    </group>
  )
}

// 저울: 면에 붙는 브래킷과 스테인리스 받침판, 앞 모서리 표시창. 상자를 올리면 받침판이 살짝 눌리고 무게가 뜬다
export function Scale({ play }: { play: Play | null }) {
  const plate = useRef<THREE.Group>(null)
  const box = useRef<THREE.Group>(null)
  const lcd = useRef<THREE.MeshBasicMaterial>(null)
  const [zero, kg] = useMemo(() => {
    const draw = (v: string) =>
      canvasTex(220, 80, (g) => {
        g.fillStyle = "#0b1a10"
        g.fillRect(0, 0, 220, 80)
        g.fillStyle = "#6dff9e"
        g.font = "bold 46px monospace"
        g.textAlign = "right"
        g.fillText(v, 180, 58)
        g.font = "bold 20px sans-serif"
        g.fillText("kg", 212, 58)
      })
    return [draw("0.00"), draw("12.40")]
  }, [])
  useFrame(({ clock }) => {
    const t = progress(play, "scale", clock.elapsedTime, 2.6)
    const k = inHoldOut(t, 0.3, 0.8)
    if (box.current) {
      box.current.visible = t >= 0
      box.current.position.set(0, 0.031 + 0.25 * (1 - k), 0.15)
    }
    if (plate.current) plate.current.position.y = -0.004 * (k > 0.98 ? 1 : 0)
    if (lcd.current) {
      const m = t > 0.32 && t < 0.85 ? kg : zero
      if (lcd.current.map !== m) {
        lcd.current.map = m
        lcd.current.needsUpdate = true
      }
    }
  })
  return (
    <group>
      {/* 브래킷 */}
      <RoundedBox args={[0.16, 0.09, 0.01]} radius={0.004} smoothness={3} position={[0, -0.02, 0.005]}>
        <meshStandardMaterial color="#2a2e36" metalness={0.85} roughness={0.28} />
      </RoundedBox>
      <mesh position={[0, -0.06, 0.12]}>
        <boxGeometry args={[0.04, 0.012, 0.22]} />
        <meshStandardMaterial color="#1c1f25" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* 받침판(수평) */}
      <group ref={plate}>
        <RoundedBox args={[0.3, 0.018, 0.25]} radius={0.004} smoothness={3} position={[0, -0.044, 0.145]}>
          <meshStandardMaterial color="#1a1d23" metalness={0.5} roughness={0.5} />
        </RoundedBox>
        <RoundedBox args={[0.28, 0.006, 0.23]} radius={0.002} smoothness={2} position={[0, -0.032, 0.145]}>
          <meshStandardMaterial color="#c9ced6" metalness={0.95} roughness={0.25} />
        </RoundedBox>
        {/* 앞 모서리 표시창 */}
        <RoundedBox args={[0.1, 0.03, 0.012]} radius={0.003} smoothness={2} position={[0, -0.04, 0.274]}>
          <meshStandardMaterial color="#14171c" metalness={0.3} roughness={0.5} />
        </RoundedBox>
        <mesh position={[0, -0.04, 0.2805]}>
          <planeGeometry args={[0.085, 0.022]} />
          <meshBasicMaterial ref={lcd} map={zero} toneMapped={false} />
        </mesh>
      </group>
      {/* 올려 볼 상자 */}
      <group ref={box} visible={false}>
        <RoundedBox args={[0.16, 0.12, 0.14]} radius={0.004} position={[0, 0.0, 0]}>
          <meshStandardMaterial color="#c4955c" roughness={0.9} />
        </RoundedBox>
        <mesh position={[0, 0.0605, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.16, 0.025]} />
          <meshStandardMaterial color="#d8c39a" roughness={0.7} />
        </mesh>
      </group>
    </group>
  )
}

// 경광등: 화면 위에 세우는 3단 신호등(빨강·노랑·초록). 호출하면 빨강이 깜박인다
export function Tower({ play }: { play: Play | null }) {
  const red = useRef<THREE.MeshStandardMaterial>(null)
  const yel = useRef<THREE.MeshStandardMaterial>(null)
  const grn = useRef<THREE.MeshStandardMaterial>(null)
  const glow = useRef<THREE.PointLight>(null)
  useFrame(({ clock }) => {
    const t = progress(play, "tower", clock.elapsedTime, 2.8)
    const on = t >= 0 && Math.sin(t * 28) > -0.2
    if (red.current) red.current.emissiveIntensity = on ? 6 : 0.15
    if (yel.current) yel.current.emissiveIntensity = 0.15
    if (grn.current) grn.current.emissiveIntensity = t >= 0 ? 0.15 : 2.2
    if (glow.current) glow.current.intensity = on ? 2.5 : 0
  })
  const seg = (y: number, color: string, ref: React.RefObject<THREE.MeshStandardMaterial | null>) => (
    <mesh position={[0, y, 0]}>
      <cylinderGeometry args={[0.019, 0.019, 0.03, 32]} />
      <meshStandardMaterial ref={ref} color={color} emissive={color} emissiveIntensity={0.15} transparent opacity={0.92} roughness={0.2} />
    </mesh>
  )
  return (
    <group position={[0, -0.016, 0]}>
      <mesh position={[0, 0.006, 0]}>
        <cylinderGeometry args={[0.024, 0.026, 0.012, 32]} />
        <meshStandardMaterial color="#1c1f25" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.03, 0]}>
        <cylinderGeometry args={[0.006, 0.006, 0.04, 16]} />
        <meshStandardMaterial color="#9aa3ad" metalness={0.9} roughness={0.25} />
      </mesh>
      {seg(0.066, "#2dd36f", grn)}
      {seg(0.097, "#ffc53d", yel)}
      {seg(0.128, "#ff3b3b", red)}
      <mesh position={[0, 0.147, 0]}>
        <cylinderGeometry args={[0.017, 0.019, 0.008, 32]} />
        <meshStandardMaterial color="#1c1f25" metalness={0.7} roughness={0.3} />
      </mesh>
      <pointLight ref={glow} position={[0, 0.13, 0.05]} color="#ff3b3b" intensity={0} distance={1.2} />
    </group>
  )
}

export const MODULE_VIEW: Record<ModuleId, (p: { play: Play | null }) => React.ReactElement> = {
  nfc: Nfc,
  scanner: Scanner,
  printer: Printer,
  card: CardTerminal,
  camera: CameraModule,
  scale: Scale,
  label: LabelPrinter,
  tower: Tower,
}
