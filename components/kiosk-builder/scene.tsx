"use client"

// 3D 장면: 어두운 쇼룸 바닥(반사), 위 조명, LED 빛 번짐·그림자 깊이(후처리) 속에 키오스크와 모듈.
// 모듈은 고른 자리(SLOTS)에 붙고, 자리 고르는 중엔 자리 표시와 붙을 모양 미리보기가 뜬다.
import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber"
import { ContactShadows, Edges, Environment, Lightformer, MeshReflectorMaterial, OrbitControls } from "@react-three/drei"
import { Bloom, EffectComposer, N8AO, ToneMapping, Vignette } from "@react-three/postprocessing"
import { ToneMappingMode } from "postprocessing"
import * as THREE from "three"
import { KioskScreenMesh } from "./screen"
import { Cabinet, SCREEN, ScreenUnit } from "./kiosk-model"
import { MODULE_VIEW } from "./modules"
import { MODULES, SLOTS, slotById, type ModuleId, type Placement, type Play, type SlotId } from "./data"

type OrbitControlsImpl = React.ComponentRef<typeof OrbitControls>
export type ViewCmd = { type: "in" | "out" | "reset"; n: number }

// 모듈 겉 크기(미리보기 상자용, m)
const SIZE: Record<ModuleId, [number, number, number]> = {
  nfc: [0.11, 0.11, 0.009],
  scanner: [0.112, 0.082, 0.011],
  printer: [0.16, 0.045, 0.009],
  card: [0.11, 0.17, 0.017],
  camera: [0.1, 0.032, 0.008],
  label: [0.15, 0.07, 0.017],
  scale: [0.3, 0.12, 0.28],
  tower: [0.05, 0.16, 0.05],
}

// 미리보기 상자 중심(모듈 기준). 저울은 앞으로 뻗고, 경광등은 위로 선다
const GHOST_AT: Partial<Record<ModuleId, [number, number, number]>> = { scale: [0, -0.035, 0.145], tower: [0, 0.064, 0] }

function Mounted({ id, slot, play, picked, onSelect }: { id: ModuleId; slot: SlotId; play: Play | null; picked: boolean; onSelect: (id: ModuleId) => void }) {
  const ref = useRef<THREE.Group>(null)
  const s = slotById(slot)
  const View = MODULE_VIEW[id]
  useFrame((_, dt) => {
    const o = ref.current
    if (!o) return
    o.scale.setScalar(THREE.MathUtils.damp(o.scale.x, picked ? 0.9 : 1, 10, dt))
    // 붙을 때 바깥에서 쏙 들어오는 느낌
    o.position.z = THREE.MathUtils.damp(o.position.z, (s.offset?.[2] ?? 0) + (picked ? 0.02 : 0), 8, dt)
  })
  return (
    <group position={s.pos} rotation={s.rot}>
      <group
        ref={ref}
        scale={0.001}
        position={[s.offset?.[0] ?? 0, s.offset?.[1] ?? 0, (s.offset?.[2] ?? 0) + 0.06]}
        onClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation()
          onSelect(id)
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          document.body.style.cursor = "pointer"
        }}
        onPointerOut={() => (document.body.style.cursor = "")}
      >
        <View play={play} />
      </group>
    </group>
  )
}

// 자리 표시: 자리 고르는 중에만 보이고, 올리면 붙을 모양이 반투명하게 보이고, 누르거나 끌어다 놓으면 붙는다
function SlotMarker({ id, taken, placing, over, onOver, onPick }: { id: SlotId; taken: boolean; placing: ModuleId; over: boolean; onOver: (id: SlotId | null) => void; onPick: (id: SlotId) => void }) {
  const s = slotById(id)
  const ring = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (ring.current) ring.current.scale.setScalar(over ? 1.15 : 1 + 0.1 * Math.sin(clock.elapsedTime * 5 + s.pos[0] * 10))
  })
  const [w, h, d] = SIZE[placing]
  const ox = s.offset?.[0] ?? 0
  const oy = s.offset?.[1] ?? 0
  return (
    <group position={s.pos} rotation={s.rot}>
      <group position={[ox, oy, 0]}>
        <mesh
          position={[0, 0, 0.012]}
          onPointerUp={(e) => {
            e.stopPropagation()
            onPick(id)
          }}
          onPointerOver={(e) => {
            e.stopPropagation()
            onOver(id)
            document.body.style.cursor = "pointer"
          }}
          onPointerOut={() => {
            onOver(null)
            document.body.style.cursor = ""
          }}
        >
          <circleGeometry args={[0.06, 32]} />
          <meshBasicMaterial color="#38e1ff" transparent opacity={over ? 0 : taken ? 0.08 : 0.18} toneMapped={false} depthTest={false} />
        </mesh>
        {!over && (
          <mesh ref={ring} position={[0, 0, 0.013]} renderOrder={3}>
            <ringGeometry args={[0.052, 0.058, 48]} />
            <meshBasicMaterial color={new THREE.Color(0.5, 2.2, 3)} transparent opacity={taken ? 0.35 : 0.95} toneMapped={false} depthTest={false} />
          </mesh>
        )}
        {over && (
          <mesh position={GHOST_AT[placing] ?? [0, 0, d / 2]} renderOrder={3}>
            <boxGeometry args={[w, h, d]} />
            <meshBasicMaterial color="#7fe3ff" transparent opacity={0.28} depthWrite={false} toneMapped={false} />
            <Edges color="#bff3ff" />
          </mesh>
        )}
      </group>
    </group>
  )
}

// 처음엔 천천히 좌우로 흔들고, 모듈 쪽을 보여 줄 땐 그리로 다가가고, 손을 대면 멈춘다. 확대·축소·처음 시점 버튼도 받는다
function Rig({ focus, idle, cmd }: { focus: [number, number, number] | null; idle: boolean; cmd: ViewCmd | null }) {
  const ctl = useRef<OrbitControlsImpl>(null)
  const { camera, size } = useThree()
  const far = size.width / size.height < 0.8 ? 4.9 : 3.7
  const until = useRef(0)
  const want = useRef(new THREE.Vector3())
  const look = useRef(new THREE.Vector3(0, 0.9, 0))
  const go = (pos: THREE.Vector3, target: THREE.Vector3) => {
    want.current.copy(pos)
    look.current.copy(target)
    until.current = performance.now() + 1300
  }
  useEffect(() => {
    if (!focus) return
    const side = Math.abs(focus[0]) > 0.24 ? Math.sign(focus[0]) : 0
    const target = new THREE.Vector3(focus[0] * 0.5, Math.max(focus[1], 0.3), focus[2])
    const d = far > 4 ? 1.35 : 1
    go(new THREE.Vector3(side ? side * 1.7 * d : focus[0] * 1.2 + 0.4, target.y + 0.25, side ? 1.1 * d : focus[2] + 2.5 * d), target)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus])
  useEffect(() => {
    if (!cmd || !ctl.current) return
    const c = ctl.current
    if (cmd.type === "reset") return go(new THREE.Vector3(0.9, 1.15, far - 0.15), new THREE.Vector3(0, 0.9, 0))
    const dir = camera.position.clone().sub(c.target)
    const len = THREE.MathUtils.clamp(dir.length() * (cmd.type === "in" ? 0.75 : 1.3), 0.6, 5)
    go(c.target.clone().add(dir.setLength(len)), c.target.clone())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cmd])
  useFrame(({ clock }, dt) => {
    const c = ctl.current
    if (!c) return
    if (performance.now() < until.current) {
      camera.position.lerp(want.current, 1 - Math.exp(-4 * dt))
      c.target.lerp(look.current, 1 - Math.exp(-4 * dt))
    } else if (idle) {
      const a = Math.sin(clock.elapsedTime * 0.3) * 0.6
      camera.position.lerp(new THREE.Vector3(Math.sin(a) * far, 1.05, Math.cos(a) * far), 1 - Math.exp(-1.2 * dt))
      c.target.lerp(new THREE.Vector3(0, 0.86, 0), 1 - Math.exp(-1.2 * dt))
    }
    c.update()
  })
  return <OrbitControls ref={ctl} enablePan={false} minDistance={0.6} maxDistance={5.5} minPolarAngle={0.45} maxPolarAngle={1.58} enableDamping dampingFactor={0.08} />
}

// 키오스크 뒤 은은한 남색 빛(실루엣이 배경에 묻히지 않게)
function Backdrop() {
  const tex = useMemo(() => {
    const c = document.createElement("canvas")
    c.width = c.height = 256
    const g = c.getContext("2d")!
    const r = g.createRadialGradient(128, 150, 0, 128, 150, 128)
    r.addColorStop(0, "rgba(40,80,170,.55)")
    r.addColorStop(0.55, "rgba(20,40,100,.2)")
    r.addColorStop(1, "rgba(0,0,0,0)")
    g.fillStyle = r
    g.fillRect(0, 0, 256, 256)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    return t
  }, [])
  return (
    <mesh position={[0, 1.3, -2.2]}>
      <planeGeometry args={[7, 4.5]} />
      <meshBasicMaterial map={tex} transparent depthWrite={false} fog={false} />
    </mesh>
  )
}

function Floor({ mobile }: { mobile: boolean }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[14, 14]} />
      <MeshReflectorMaterial
        blur={[400, 120]}
        resolution={mobile ? 512 : 1024}
        mixBlur={1}
        mixStrength={18}
        roughness={0.9}
        depthScale={1.1}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.3}
        color="#0a1022"
        metalness={0.6}
        mirror={0}
      />
    </mesh>
  )
}


// 후처리(그림자 깊이·LED 빛 번짐·색 보정). WebGL 문맥이 끊긴 순간엔 만들지 않는다(postprocessing 이 null 에서 멈춤)
function Effects({ mobile }: { mobile: boolean }) {
  const gl = useThree((s) => s.gl)
  if (!gl.getContextAttributes()) return null
  return (
    <EffectComposer multisampling={mobile ? 0 : 4} enableNormalPass={false}>
      {mobile ? <></> : <N8AO aoRadius={0.12} intensity={2.2} distanceFalloff={0.6} halfRes quality="medium" />}
      <Bloom mipmapBlur luminanceThreshold={1} luminanceSmoothing={0.2} intensity={0.85} radius={0.7} />
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      <Vignette offset={0.3} darkness={0.55} />
    </EffectComposer>
  )
}

export type SceneProps = {
  placement: Placement
  play: Play | null
  focus: [number, number, number] | null
  idle: boolean
  placing: ModuleId | null
  open: boolean
  cmd: ViewCmd | null
  title: string
  onInteract: () => void
  onTrigger: (id: ModuleId) => void
  onSelect: (id: ModuleId) => void
  onPick: (slot: SlotId) => void
  onHoverSlot?: (slot: SlotId | null) => void
  hint?: SlotId | null
}

export default function KioskScene(props: SceneProps) {
  const [mobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 640)
  return (
    <Canvas
      dpr={mobile ? [1, 1.5] : [1, 2]}
      shadows
      camera={{ position: [1.0, 1.15, 3.6], fov: 34, near: 0.05, far: 40 }}
      gl={{ antialias: false, toneMapping: THREE.NoToneMapping, powerPreference: "high-performance" }}
      onPointerDown={props.onInteract}
      onWheel={props.onInteract}
    >
      <color attach="background" args={["#060b1c"]} />
      <fog attach="fog" args={["#060b1c", 4, 11]} />
      <ambientLight intensity={0.25} />
      <spotLight position={[0.4, 3.4, 1.6]} angle={0.42} penumbra={0.9} intensity={38} color="#e3edff" castShadow shadow-mapSize={[1024, 1024]} shadow-bias={-0.0004} />
      <directionalLight position={[2.6, 1.4, -1.8]} intensity={2.4} color="#6fd3ff" />
      <directionalLight position={[-2.6, 1.6, -1.2]} intensity={1.6} color="#8fa8ff" />
      <directionalLight position={[-1.8, 1.8, 2.2]} intensity={0.9} color="#e8eeff" />
      <Backdrop />
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={3} position={[0, 4, 1]} rotation-x={Math.PI / 2} scale={[3, 1.2, 1]} />
        <Lightformer form="rect" intensity={1.6} color="#7fe3ff" position={[3, 1.2, -0.5]} rotation-y={-Math.PI / 2} scale={[1, 3, 1]} />
        <Lightformer form="rect" intensity={1.2} position={[-3, 1.4, 1.5]} rotation-y={Math.PI / 2} scale={[1.2, 3, 1]} />
        <Lightformer form="ring" intensity={0.8} position={[0, 1.4, 4]} scale={2} />
      </Environment>

      <Suspense fallback={null}>
        <Kiosk {...props} />
      </Suspense>
      <ContactShadows position={[0, 0.002, 0]} opacity={0.75} scale={2.4} blur={2.2} far={1.2} resolution={512} color="#000" />
      <Floor mobile={mobile} />
      <Rig focus={props.focus} idle={props.idle} cmd={props.cmd} />

      <Effects mobile={mobile} />
    </Canvas>
  )
}

function Kiosk({ placement, play, placing, open, title, onTrigger, onSelect, onPick, onHoverSlot, hint }: SceneProps) {
  // 바깥에서 받은 재생 요청을 장면 시계 기준 시작 시각으로 바꾼다
  const clock = useThree((s) => s.clock)
  const [p, setP] = useState<Play | null>(null)
  const [over, setOver] = useState<SlotId | null>(null)
  useEffect(() => {
    if (play) setP({ ...play, at: clock.elapsedTime })
  }, [play, clock])
  useEffect(() => {
    if (!placing) setOver(null)
  }, [placing])
  const modules = useMemo(
    () => Object.fromEntries(Object.entries(placement).map(([k, v]) => [k, !!v])) as Record<ModuleId, boolean>,
    [placement],
  )
  const taken = new Set(Object.entries(placement).filter(([m, s]) => s && m !== placing).map(([, s]) => s))
  const hover = (s: SlotId | null) => {
    setOver(s)
    onHoverSlot?.(s)
  }
  return (
    <group>
      <Cabinet open={open ? 1 : 0} />
      <ScreenUnit>
        <KioskScreenMesh modules={modules} play={p} title={title} onTrigger={onTrigger} position={SCREEN.pos} size={SCREEN.size} />
      </ScreenUnit>
      {(Object.entries(placement) as [ModuleId, SlotId | null][]).map(
        ([id, slot]) => slot && <Mounted key={`${id}-${slot}`} id={id} slot={slot} play={p} picked={placing === id} onSelect={onSelect} />,
      )}
      {placing &&
        SLOTS.filter((s) => MODULES.find((m) => m.id === placing)!.slots.includes(s.id)).map((s) => <SlotMarker key={s.id} id={s.id} taken={taken.has(s.id)} placing={placing} over={(over ?? hint) === s.id} onOver={hover} onPick={onPick} />)}
    </group>
  )
}
