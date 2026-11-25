"use client"

// 와이넥스 스탠드 키오스크 몸체. 실물(검은 분체도장 외함, 뒤로 0.14rad 누운 세로 화면, 오른쪽 시안 LED 띠,
// 앞으로 살짝 기운 하부장과 경사 데크)을 판금처럼 판재로 짜 맞췄다. 앞문은 왼쪽 경첩으로 열리고 안에 PC·전원·공유기가 있다.
// 좌표(m): 바닥 y=0, 정면 +z. 앞면 바깥 z = zf(y), 데크 바깥선 (0.192,0.808)→(0.098,0.892).
import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { RoundedBox, useTexture } from "@react-three/drei"
import * as THREE from "three"

export const FRONT_LEAN = Math.atan2(0.03, 0.77)
export const SCREEN_TILT = -0.14
export const zf = (y: number) => 0.15 + 0.039 * (y - 0.035) + 0.012
const DECK_TILT = 0.727

// LED 는 1 보다 밝게 줘야 빛 번짐(블룸)이 걸린다
export const LED = new THREE.Color(0.25, 2.4, 3.2)

export const MAT = {
  body: new THREE.MeshPhysicalMaterial({ color: "#2a2f39", metalness: 0.35, roughness: 0.4, clearcoat: 0.35, clearcoatRoughness: 0.3 }),
  inner: new THREE.MeshStandardMaterial({ color: "#161a21", metalness: 0.3, roughness: 0.75 }),
  trim: new THREE.MeshStandardMaterial({ color: "#0c0e12", metalness: 0.75, roughness: 0.3 }),
  glass: new THREE.MeshPhysicalMaterial({ color: "#05070a", metalness: 0.1, roughness: 0.04, clearcoat: 1, clearcoatRoughness: 0.03 }),
  plastic: new THREE.MeshStandardMaterial({ color: "#15181d", metalness: 0.1, roughness: 0.55 }),
  led: new THREE.MeshBasicMaterial({ color: LED, toneMapped: false }),
}

function canvasTex(w: number, h: number, draw: (g: CanvasRenderingContext2D) => void) {
  const c = document.createElement("canvas")
  c.width = w
  c.height = h
  draw(c.getContext("2d")!)
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  return t
}

// 앞면에 붙는 판(앞으로 기운 면에 맞춰 놓음)
function FrontBox({ x, y0, y1, w, d = 0.02, material = MAT.body }: { x: number; y0: number; y1: number; w: number; d?: number; material?: THREE.Material }) {
  const y = (y0 + y1) / 2
  return (
    <RoundedBox args={[w, y1 - y0, d]} radius={0.004} smoothness={3} position={[x, y, zf(y) - d / 2]} rotation={[FRONT_LEAN, 0, 0]} material={material} castShadow receiveShadow />
  )
}

function SidePanel({ side }: { side: 1 | -1 }) {
  const geo = useMemo(() => {
    const s = new THREE.Shape()
    s.moveTo(-0.172, 0.035)
    s.lineTo(0.162, 0.035)
    s.lineTo(0.192, 0.808)
    s.lineTo(0.098, 0.892)
    s.lineTo(-0.172, 0.892)
    s.closePath()
    const g = new THREE.ExtrudeGeometry(s, { depth: 0.014, bevelEnabled: true, bevelSize: 0.006, bevelThickness: 0.006, bevelSegments: 5, curveSegments: 8 })
    g.rotateY(-Math.PI / 2)
    g.computeVertexNormals()
    return g
  }, [])
  // 오른쪽 판은 x 0.236~0.25(+모서리), 왼쪽은 거울
  return (
    <group position={[side === 1 ? 0.25 : -0.236, 0, 0]}>
      <mesh geometry={geo} material={MAT.body} castShadow receiveShadow />
      {/* 통풍구 */}
      {Array.from({ length: 7 }, (_, i) => (
        <mesh key={i} position={[side === 1 ? 0.0065 : -0.0205, 0.16 + i * 0.022, -0.05]} rotation={[0, (side * Math.PI) / 2, 0]}>
          <planeGeometry args={[0.13, 0.007]} />
          <meshBasicMaterial color="#020304" />
        </mesh>
      ))}
    </group>
  )
}

function Interior({ open }: { open: number }) {
  const light = useRef<THREE.PointLight>(null)
  const blink = useRef<THREE.MeshBasicMaterial[]>([])
  useFrame(({ clock }) => {
    if (light.current) light.current.intensity = open * 0.35
    blink.current.forEach((m, i) => m?.color.set(Math.sin(clock.elapsedTime * (6 + i * 3) + i) > 0 ? "#3dff9a" : "#0d3b24"))
  })
  const cable = useMemo(
    () =>
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3([new THREE.Vector3(-0.05, 0.09, -0.04), new THREE.Vector3(-0.12, 0.2, -0.11), new THREE.Vector3(-0.06, 0.33, -0.1), new THREE.Vector3(0.05, 0.4, -0.08)]),
        24,
        0.006,
        6,
      ),
    [],
  )
  return (
    <group>
      {/* 안쪽 벽·바닥 */}
      <mesh position={[0, 0.29, -0.15]} material={MAT.inner}>
        <planeGeometry args={[0.47, 0.52]} />
      </mesh>
      <mesh position={[0, 0.037, 0]} rotation={[-Math.PI / 2, 0, 0]} material={MAT.inner}>
        <planeGeometry args={[0.47, 0.32]} />
      </mesh>
      {/* 선반 */}
      <mesh position={[0, 0.3, -0.03]} material={MAT.inner}>
        <boxGeometry args={[0.46, 0.008, 0.24]} />
      </mesh>
      {/* 미니 PC */}
      <RoundedBox args={[0.2, 0.05, 0.17]} radius={0.006} position={[-0.06, 0.065, -0.04]} material={MAT.plastic} />
      <mesh position={[-0.12, 0.065, 0.0455]}>
        <circleGeometry args={[0.005, 16]} />
        <meshBasicMaterial color={new THREE.Color(0.4, 1.4, 3)} toneMapped={false} />
      </mesh>
      {Array.from({ length: 6 }, (_, i) => (
        <mesh key={i} position={[-0.02 + i * 0.012, 0.065, 0.0455]}>
          <planeGeometry args={[0.004, 0.03]} />
          <meshBasicMaterial color="#000" />
        </mesh>
      ))}
      {/* 전원부 */}
      <RoundedBox args={[0.1, 0.06, 0.12]} radius={0.004} position={[0.13, 0.07, -0.06]}>
        <meshStandardMaterial color="#8b929c" metalness={0.8} roughness={0.35} />
      </RoundedBox>
      {/* 선반 위 공유기 */}
      <RoundedBox args={[0.15, 0.03, 0.1]} radius={0.005} position={[0.04, 0.32, -0.06]} material={MAT.plastic} />
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0.0 + i * 0.018, 0.32, -0.0095]}>
          <circleGeometry args={[0.003, 10]} />
          <meshBasicMaterial ref={(m) => void (blink.current[i] = m!)} color="#3dff9a" toneMapped={false} />
        </mesh>
      ))}
      <mesh geometry={cable}>
        <meshStandardMaterial color="#0a0a0a" roughness={0.6} />
      </mesh>
      {/* 안쪽 조명 */}
      <mesh position={[0, 0.535, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.4, 0.008]} />
        <meshBasicMaterial color={new THREE.Color(1.4, 1.6, 1.8)} toneMapped={false} />
      </mesh>
      <pointLight ref={light} position={[0, 0.5, 0.05]} intensity={0} distance={0.7} color="#eaf4ff" />
    </group>
  )
}

function Door({ open }: { open: number }) {
  const ref = useRef<THREE.Group>(null)
  const logo = useTexture("/logo-mark.png")
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, -1.85 * open, 5, dt)
  })
  const y0 = 0.078
  const y1 = 0.542
  const y = (y0 + y1) / 2
  // 경첩은 왼쪽 모서리
  return (
    <group position={[-0.219, y, zf(y) - 0.006]} rotation={[FRONT_LEAN, 0, 0]}>
      <group ref={ref}>
        <RoundedBox args={[0.438, y1 - y0, 0.012]} radius={0.004} smoothness={3} position={[0.219, 0, 0]} material={MAT.body} castShadow />
        <mesh position={[0.219 + 0.17, 0.13, 0.0065]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.009, 0.009, 0.004, 24]} />
          <meshStandardMaterial color="#c3c9d1" metalness={0.95} roughness={0.18} />
        </mesh>
        <mesh position={[0.219, -0.1, 0.0065]}>
          <planeGeometry args={[0.075, 0.075]} />
          <meshBasicMaterial map={logo} transparent opacity={0.9} />
        </mesh>
      </group>
    </group>
  )
}

export function Cabinet({ open }: { open: number }) {
  const glow = useMemo(
    () =>
      canvasTex(256, 256, (g) => {
        const r = g.createRadialGradient(128, 128, 0, 128, 128, 128)
        r.addColorStop(0, "rgba(80,220,255,.55)")
        r.addColorStop(0.5, "rgba(40,160,230,.18)")
        r.addColorStop(1, "rgba(0,0,0,0)")
        g.fillStyle = r
        g.fillRect(0, 0, 256, 256)
      }),
    [],
  )
  return (
    <group>
      {/* 받침과 바닥 LED 번짐 */}
      <RoundedBox args={[0.6, 0.035, 0.48]} radius={0.012} smoothness={4} position={[0, 0.0175, 0]} material={MAT.trim} castShadow receiveShadow />
      <mesh position={[0, 0.012, 0.2405]} material={MAT.led}>
        <boxGeometry args={[0.5, 0.004, 0.002]} />
      </mesh>
      <mesh position={[0, 0.003, 0.15]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.3, 0.9]} />
        <meshBasicMaterial map={glow} transparent blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
      </mesh>

      <SidePanel side={1} />
      <SidePanel side={-1} />
      {/* 뒤판·윗판·경사 데크 */}
      <mesh position={[0, 0.4635, -0.1645]} material={MAT.body} castShadow>
        <boxGeometry args={[0.474, 0.857, 0.015]} />
      </mesh>
      <mesh position={[0, 0.8845, -0.037]} material={MAT.body} castShadow>
        <boxGeometry args={[0.474, 0.015, 0.27]} />
      </mesh>
      <mesh position={[0, 0.8444, 0.14]} rotation={[DECK_TILT, 0, 0]} material={MAT.body} castShadow>
        <boxGeometry args={[0.474, 0.015, 0.126]} />
      </mesh>
      {/* 앞면 판: 문 위(모듈 붙는 곳), 문 아래, 문 양옆 */}
      <FrontBox x={0} y0={0.545} y1={0.8} w={0.474} />
      <FrontBox x={0} y0={0.035} y1={0.075} w={0.474} />
      <FrontBox x={-0.228} y0={0.075} y1={0.545} w={0.018} />
      <FrontBox x={0.228} y0={0.075} y1={0.545} w={0.018} />
      <Interior open={open} />
      <Door open={open} />
    </group>
  )
}

// 화면 몸통: 둥근 틀, 검은 유리, 화면(children), 유리 반사, 오른쪽 LED 띠, 뒤 기둥
export function ScreenUnit({ children }: { children: React.ReactNode }) {
  const sheen = useMemo(
    () =>
      canvasTex(64, 256, (g) => {
        const l = g.createLinearGradient(0, 0, 64, 256)
        l.addColorStop(0, "rgba(255,255,255,.16)")
        l.addColorStop(0.35, "rgba(255,255,255,.03)")
        l.addColorStop(0.36, "rgba(255,255,255,0)")
        l.addColorStop(1, "rgba(255,255,255,0)")
        g.fillStyle = l
        g.fillRect(0, 0, 64, 256)
      }),
    [],
  )
  return (
    <group position={[0, 0.887, 0.03]} rotation={[SCREEN_TILT, 0, 0]}>
      <RoundedBox args={[0.3, 0.7, 0.08]} radius={0.02} smoothness={4} position={[0, 0.36, -0.07]} material={MAT.body} castShadow />
      <RoundedBox args={[0.52, 0.86, 0.056]} radius={0.022} smoothness={6} position={[0, 0.44, 0]} material={MAT.body} castShadow />
      <mesh position={[0, 0.44, 0.0285]} material={MAT.glass}>
        <planeGeometry args={[0.494, 0.834]} />
      </mesh>
      {children}
      <mesh position={[0, 0.44, 0.0335]}>
        <planeGeometry args={[0.494, 0.834]} />
        <meshBasicMaterial map={sheen} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
      {/* 오른쪽 LED 띠 */}
      <mesh position={[0.261, 0.44, 0.004]} material={MAT.led}>
        <boxGeometry args={[0.005, 0.8, 0.03]} />
      </mesh>
      <pointLight position={[0.32, 0.44, 0.06]} color="#38e1ff" intensity={0.8} distance={0.9} />
    </group>
  )
}
