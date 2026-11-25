"use client"

// 와이넥스 스탠드 키오스크 몸체(대표 촬영 영상 IMG_3101 의 실물 기준).
// 바닥부터 꼭대기까지 이어진 검은 판(위 모서리 둥긂) 위쪽에 거의 수직인 세로 화면, 화면 아래 어두운 턱,
// 판 앞에 붙은 쐐기 모양 하부장(약 34° 경사 윗면 + 열쇠 달린 앞면), 판 오른쪽 모서리 LED 띠 두 줄.
// 좌표(m): 바닥 y=0, 정면 +z, 판 앞면 z=0. 하부장 앞면 z=0.30, 경사면 (z .30, y .66)→(z 0, y .86).
import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { RoundedBox, useTexture } from "@react-three/drei"
import * as THREE from "three"

const SLOPE = Math.atan2(0.2, 0.3) // 경사면 기울기
export const LED = new THREE.Color(0.35, 2.3, 3.2)

export const MAT = {
  body: new THREE.MeshPhysicalMaterial({ color: "#23272f", metalness: 0.35, roughness: 0.42, clearcoat: 0.35, clearcoatRoughness: 0.3 }),
  inner: new THREE.MeshStandardMaterial({ color: "#161a21", metalness: 0.3, roughness: 0.75 }),
  trim: new THREE.MeshStandardMaterial({ color: "#0c0e12", metalness: 0.75, roughness: 0.3 }),
  glass: new THREE.MeshPhysicalMaterial({ color: "#04060a", metalness: 0.1, roughness: 0.04, clearcoat: 1, clearcoatRoughness: 0.03 }),
  chin: new THREE.MeshStandardMaterial({ color: "#121419", metalness: 0.2, roughness: 0.6 }),
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

// 뒤 판: 앞에서 본 모양(위 두 모서리 둥긂)을 두께 0.1 로 민다
function Slab() {
  const geo = useMemo(() => {
    const w = 0.275
    const r = 0.065
    const s = new THREE.Shape()
    s.moveTo(-w, 0.035)
    s.lineTo(w, 0.035)
    s.lineTo(w, 1.78 - r)
    s.quadraticCurveTo(w, 1.78, w - r, 1.78)
    s.lineTo(-w + r, 1.78)
    s.quadraticCurveTo(-w, 1.78, -w, 1.78 - r)
    s.closePath()
    const g = new THREE.ExtrudeGeometry(s, { depth: 0.092, bevelEnabled: true, bevelSize: 0.006, bevelThickness: 0.004, bevelSegments: 4, curveSegments: 16 })
    g.translate(0, 0, -0.096)
    g.computeVertexNormals()
    return g
  }, [])
  return <mesh geometry={geo} material={MAT.body} castShadow receiveShadow />
}

// 하부장 옆판(쐐기 옆모습)
function WedgeSide({ side }: { side: 1 | -1 }) {
  const geo = useMemo(() => {
    const s = new THREE.Shape()
    s.moveTo(0, 0.035)
    s.lineTo(0.3, 0.035)
    s.lineTo(0.3, 0.66)
    s.lineTo(0, 0.86)
    s.closePath()
    const g = new THREE.ExtrudeGeometry(s, { depth: 0.014, bevelEnabled: true, bevelSize: 0.006, bevelThickness: 0.006, bevelSegments: 4 })
    g.rotateY(-Math.PI / 2)
    g.computeVertexNormals()
    return g
  }, [])
  return (
    <group position={[side === 1 ? 0.25 : -0.236, 0, 0]}>
      <mesh geometry={geo} material={MAT.body} castShadow receiveShadow />
      {/* 통풍구 */}
      {Array.from({ length: 6 }, (_, i) => (
        <mesh key={i} position={[side === 1 ? 0.0065 : -0.0205, 0.13 + i * 0.022, 0.15]} rotation={[0, (side * Math.PI) / 2, 0]}>
          <planeGeometry args={[0.12, 0.007]} />
          <meshBasicMaterial color="#020304" />
        </mesh>
      ))}
    </group>
  )
}

// 하부장 앞면 판
function FrontBox({ x, y0, y1, w }: { x: number; y0: number; y1: number; w: number }) {
  return (
    <RoundedBox args={[w, y1 - y0, 0.02]} radius={0.004} smoothness={3} position={[x, (y0 + y1) / 2, 0.29]} material={MAT.body} castShadow receiveShadow />
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
        new THREE.CatmullRomCurve3([new THREE.Vector3(-0.05, 0.09, 0.12), new THREE.Vector3(-0.13, 0.17, 0.05), new THREE.Vector3(-0.08, 0.27, 0.04), new THREE.Vector3(0.03, 0.3, 0.08)]),
        24,
        0.006,
        6,
      ),
    [],
  )
  return (
    <group>
      <mesh position={[0, 0.037, 0.15]} rotation={[-Math.PI / 2, 0, 0]} material={MAT.inner}>
        <planeGeometry args={[0.47, 0.29]} />
      </mesh>
      <mesh position={[0, 0.25, 0.002]} material={MAT.inner}>
        <planeGeometry args={[0.47, 0.44]} />
      </mesh>
      {/* 선반 */}
      <mesh position={[0, 0.26, 0.13]} material={MAT.inner}>
        <boxGeometry args={[0.46, 0.008, 0.24]} />
      </mesh>
      {/* 미니 PC */}
      <RoundedBox args={[0.2, 0.05, 0.17]} radius={0.006} position={[-0.06, 0.065, 0.13]} material={MAT.plastic} />
      <mesh position={[-0.12, 0.065, 0.2155]}>
        <circleGeometry args={[0.005, 16]} />
        <meshBasicMaterial color={new THREE.Color(0.4, 1.4, 3)} toneMapped={false} />
      </mesh>
      {Array.from({ length: 6 }, (_, i) => (
        <mesh key={i} position={[-0.02 + i * 0.012, 0.065, 0.2155]}>
          <planeGeometry args={[0.004, 0.03]} />
          <meshBasicMaterial color="#000" />
        </mesh>
      ))}
      {/* 전원부 */}
      <RoundedBox args={[0.1, 0.06, 0.12]} radius={0.004} position={[0.13, 0.07, 0.1]}>
        <meshStandardMaterial color="#8b929c" metalness={0.8} roughness={0.35} />
      </RoundedBox>
      {/* 선반 위 공유기 */}
      <RoundedBox args={[0.15, 0.03, 0.1]} radius={0.005} position={[0.04, 0.28, 0.12]} material={MAT.plastic} />
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0.0 + i * 0.018, 0.28, 0.1705]}>
          <circleGeometry args={[0.003, 10]} />
          <meshBasicMaterial ref={(m) => void (blink.current[i] = m!)} color="#3dff9a" toneMapped={false} />
        </mesh>
      ))}
      <mesh geometry={cable}>
        <meshStandardMaterial color="#0a0a0a" roughness={0.6} />
      </mesh>
      {/* 안쪽 조명 */}
      <mesh position={[0, 0.455, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.4, 0.008]} />
        <meshBasicMaterial color={new THREE.Color(1.4, 1.6, 1.8)} toneMapped={false} />
      </mesh>
      <pointLight ref={light} position={[0, 0.42, 0.2]} intensity={0} distance={0.7} color="#eaf4ff" />
    </group>
  )
}

function Door({ open }: { open: number }) {
  const ref = useRef<THREE.Group>(null)
  const logo = useTexture("/logo-mark.png")
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, -1.85 * open, 5, dt)
  })
  const y0 = 0.083
  const y1 = 0.457
  // 경첩은 왼쪽 모서리
  return (
    <group position={[-0.219, (y0 + y1) / 2, 0.294]}>
      <group ref={ref}>
        <RoundedBox args={[0.438, y1 - y0, 0.012]} radius={0.004} smoothness={3} position={[0.219, 0, 0]} material={MAT.body} castShadow />
        <mesh position={[0.219 + 0.17, 0.13, 0.0065]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.009, 0.009, 0.004, 24]} />
          <meshStandardMaterial color="#c3c9d1" metalness={0.95} roughness={0.18} />
        </mesh>
        <mesh position={[0.219, -0.08, 0.0065]}>
          <planeGeometry args={[0.07, 0.07]} />
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
        r.addColorStop(0, "rgba(80,220,255,.5)")
        r.addColorStop(0.5, "rgba(40,160,230,.16)")
        r.addColorStop(1, "rgba(0,0,0,0)")
        g.fillStyle = r
        g.fillRect(0, 0, 256, 256)
      }),
    [],
  )
  return (
    <group>
      {/* 받침과 바닥 LED 번짐 */}
      <RoundedBox args={[0.6, 0.035, 0.46]} radius={0.012} smoothness={4} position={[0, 0.0175, 0.1]} material={MAT.trim} castShadow receiveShadow />
      <mesh position={[0, 0.012, 0.3305]} material={MAT.led}>
        <boxGeometry args={[0.5, 0.004, 0.002]} />
      </mesh>
      <mesh position={[0, 0.003, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.3, 0.9]} />
        <meshBasicMaterial map={glow} transparent blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
      </mesh>

      <Slab />
      {/* 판 오른쪽 모서리 LED 띠(화면 옆, 하부장 옆) */}
      <mesh position={[0.279, 1.34, -0.02]} material={MAT.led}>
        <boxGeometry args={[0.005, 0.7, 0.012]} />
      </mesh>
      <mesh position={[0.279, 0.47, -0.02]} material={MAT.led}>
        <boxGeometry args={[0.005, 0.72, 0.012]} />
      </mesh>
      <pointLight position={[0.36, 1.3, -0.05]} color="#38e1ff" intensity={0.25} distance={0.6} />

      {/* 쐐기 하부장 */}
      <WedgeSide side={1} />
      <WedgeSide side={-1} />
      <mesh position={[0, 0.76 - 0.0075 * Math.cos(SLOPE), 0.15 - 0.0075 * Math.sin(SLOPE)]} rotation={[SLOPE, 0, 0]} material={MAT.body} castShadow>
        <boxGeometry args={[0.474, 0.015, 0.3606]} />
      </mesh>
      <FrontBox x={0} y0={0.46} y1={0.66} w={0.474} />
      <FrontBox x={0} y0={0.035} y1={0.08} w={0.474} />
      <FrontBox x={-0.228} y0={0.08} y1={0.46} w={0.018} />
      <FrontBox x={0.228} y0={0.08} y1={0.46} w={0.018} />
      <Interior open={open} />
      <Door open={open} />
    </group>
  )
}

// 화면부: 검은 유리판, 화면(children), 유리 반사, 화면 아래 턱
export function ScreenUnit({ children }: { children: React.ReactNode }) {
  const sheen = useMemo(
    () =>
      canvasTex(64, 256, (g) => {
        const l = g.createLinearGradient(0, 0, 64, 256)
        l.addColorStop(0, "rgba(255,255,255,.14)")
        l.addColorStop(0.35, "rgba(255,255,255,.03)")
        l.addColorStop(0.36, "rgba(255,255,255,0)")
        l.addColorStop(1, "rgba(255,255,255,0)")
        g.fillStyle = l
        g.fillRect(0, 0, 64, 256)
      }),
    [],
  )
  return (
    <group>
      <RoundedBox args={[0.51, 0.81, 0.008]} radius={0.012} smoothness={4} position={[0, 1.345, 0.004]} material={MAT.glass} />
      {children}
      <mesh position={[0, 1.35, 0.0095]}>
        <planeGeometry args={[0.43, 0.745]} />
        <meshBasicMaterial map={sheen} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
      {/* 화면 아래 턱 */}
      <RoundedBox args={[0.51, 0.06, 0.03]} radius={0.006} smoothness={3} position={[0, 0.905, 0.015]} material={MAT.chin} castShadow />
    </group>
  )
}

// 화면 판 위치와 크기(장면에서 화면을 붙일 때 씀)
export const SCREEN = { pos: [0, 1.35, 0.0088] as [number, number, number], size: [0.43, 0.745] as [number, number] }
