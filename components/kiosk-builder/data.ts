// 키오스크 조립 체험에 쓰는 모듈·붙일 자리·업무별 구성, 그리고 문의로 넘길 구성 문자열
export type ModuleId = "nfc" | "scanner" | "printer" | "card" | "camera" | "scale" | "label" | "tower"
export type SlotId = "deckL" | "deckR" | "frontL" | "frontC" | "frontR" | "top" | "crown" | "sideL" | "sideR"
export type Placement = Record<ModuleId, SlotId | null>
export type Play = { id: ModuleId; at: number; n: number }

// slots: 붙일 수 있는 자리(저울은 받침판이 앞판 다른 모듈과 부딪혀서 옆면만, 경광등은 꼭대기만)
const FACE: SlotId[] = ["deckL", "deckR", "frontL", "frontC", "frontR", "sideL", "sideR"]
export const MODULES: { id: ModuleId; name: string; desc: string; action: string; done: [string, string]; slots: SlotId[] }[] = [
  { id: "nfc", name: "사원증·카드 태그", desc: "사원증을 대면 출퇴근과 본인 확인", action: "사원증 대기", done: ["출근 완료", "생산1팀 · 08:57"], slots: FACE },
  { id: "scanner", name: "바코드·QR 스캐너", desc: "상자·송장·작업지시서 바코드를 읽음", action: "바코드 찍기", done: ["바코드 확인", "BRK-220-A · 500개"], slots: FACE },
  { id: "printer", name: "영수증·번호표 프린터", desc: "번호표, 출고증, 영수증을 바로 출력", action: "번호표 뽑기", done: ["번호표 출력", "대기번호 A-023"], slots: FACE },
  { id: "label", name: "라벨 프린터", desc: "로트·바코드 라벨을 뽑아 상자에 붙임", action: "라벨 뽑기", done: ["라벨 출력", "LOT L-1124 · 50×30"], slots: FACE },
  { id: "scale", name: "저울", desc: "올리면 무게가 바로 기록됨", action: "무게 달기", done: ["무게 기록", "12.4kg · BRK-220-A"], slots: ["sideL", "sideR"] },
  { id: "card", name: "카드 결제 단말기", desc: "IC·삼성페이 결제와 영수증", action: "카드 결제", done: ["결제 승인", "카드 결제 12,000원"], slots: FACE },
  { id: "camera", name: "카메라", desc: "불량 사진, 방문자 사진, 대리 태그 확인", action: "사진 찍기", done: ["사진 저장", "로트 L-1124에 첨부"], slots: ["top", "crown", "frontL", "frontC", "frontR", "sideL", "sideR"] },
  { id: "tower", name: "경광등", desc: "호출·이상 상태를 멀리서도 보이게", action: "반장 호출", done: ["호출 보냄", "경광등이 빨갛게 켜짐"], slots: ["top", "crown"] },
]

// 붙일 자리: 위치(m)와 그 면의 기울기. 모듈은 앞(+z)이 바깥을 보게 만들어 두고 이 기울기로 면에 맞춘다.
// 경사면 법선 (0, .832, .555), 앞판은 수직, 꼭대기는 판 두께 위(카메라 앞면이 판 앞면과 맞게 z -0.035)
export const SLOTS: { id: SlotId; name: string; pos: [number, number, number]; rot: [number, number, number]; offset?: [number, number, number] }[] = [
  { id: "deckL", name: "경사면 왼쪽", pos: [-0.13, 0.7467, 0.1844], rot: [-0.983, 0, 0] },
  { id: "deckR", name: "경사면 오른쪽", pos: [0.13, 0.7467, 0.1844], rot: [-0.983, 0, 0] },
  { id: "frontL", name: "앞판 왼쪽", pos: [-0.15, 0.56, 0.3], rot: [0, 0, 0] },
  { id: "frontC", name: "앞판 가운데", pos: [0, 0.56, 0.3], rot: [0, 0, 0] },
  { id: "frontR", name: "앞판 오른쪽", pos: [0.15, 0.56, 0.3], rot: [0, 0, 0] },
  { id: "top", name: "꼭대기 가운데", pos: [0, 1.786, -0.035], rot: [0, 0, 0], offset: [0, 0.016, 0] },
  { id: "crown", name: "꼭대기 오른쪽", pos: [0.17, 1.786, -0.035], rot: [0, 0, 0], offset: [0, 0.016, 0] },
  { id: "sideL", name: "왼쪽 옆면", pos: [-0.256, 0.55, 0.14], rot: [0, -Math.PI / 2, 0] },
  { id: "sideR", name: "오른쪽 옆면", pos: [0.256, 0.55, 0.14], rot: [0, Math.PI / 2, 0] },
]
export const slotById = (id: SlotId) => SLOTS.find((s) => s.id === id)!
export const moduleById = (id: ModuleId) => MODULES.find((m) => m.id === id)!

export const emptyPlacement = (): Placement => ({ nfc: null, scanner: null, printer: null, card: null, camera: null, scale: null, label: null, tower: null })

export const PRESETS: { id: string; name: string; title: string; place: Partial<Placement> }[] = [
  { id: "logistics", name: "물류 출고 접수", title: "출고 접수", place: { scanner: "deckR", label: "deckL", scale: "sideR" } },
  { id: "factory", name: "공장 근태", title: "출퇴근 체크", place: { nfc: "frontC", camera: "top", tower: "crown" } },
  { id: "order", name: "무인 주문·결제", title: "주문·결제", place: { scanner: "deckR", printer: "deckL", card: "frontR" } },
]
export const presetPlacement = (id: string): Placement => ({ ...emptyPlacement(), ...PRESETS.find((p) => p.id === id)?.place })

// 문의로 넘기는 구성: "scanner.deckR~printer.deckL" (주소 ?k= 로 그대로 3D 를 다시 열 수 있음)
export function encodePlacement(p: Placement) {
  return MODULES.filter((m) => p[m.id]).map((m) => `${m.id}.${p[m.id]}`).join("~")
}
export function decodePlacement(s: string | null): Placement | null {
  if (!s) return null
  const p = emptyPlacement()
  const used = new Set<string>()
  for (const part of s.split("~")) {
    const [m, slot] = part.split(".")
    const mod = MODULES.find((x) => x.id === m)
    if (mod && mod.slots.includes(slot as SlotId) && !used.has(slot)) {
      p[m as ModuleId] = slot as SlotId
      used.add(slot)
    }
  }
  return Object.values(p).some(Boolean) ? p : null
}
// 메일에 들어갈 사람이 읽는 설명: "바코드·QR 스캐너(데크 오른쪽), 영수증·번호표 프린터(데크 왼쪽)"
export function describePlacement(p: Placement) {
  return MODULES.filter((m) => p[m.id]).map((m) => `${m.name}(${slotById(p[m.id]!).name})`).join(", ")
}
