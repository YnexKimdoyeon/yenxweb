import { BellRing, Heart, LayoutDashboard, QrCode, Sparkles } from "lucide-react"
import type { DemoConfig, Row } from "./types"
import { count, now, patch, rows } from "./util"

const men = ["M01 지훈", "M02 민재", "M03 현우", "M04 도윤", "M05 시우"]
const women = ["W01 서연", "W02 지아", "W03 하은", "W04 수아", "W05 유나"]

// 서로 호감을 보낸 쌍
function matches(votes: Row[]): Row[] {
  const out: Row[] = []
  for (const v of votes) {
    if (!String(v.from).startsWith("M")) continue
    if (votes.some((w) => w.from === v.to && w.to === v.from)) {
      out.push({ id: `${v.from}-${v.to}`, man: v.from, woman: v.to, result: "매칭 성사" })
    }
  }
  return out
}

export const eventDemo: DemoConfig = {
  slug: "event",
  product: "행사 운영",
  org: "(가상) 로테이션 소개팅 라운지",
  user: "운영진 · 오늘 2회차",
  accent: "#BE185D",
  guide: [
    "QR 입장에서 참가번호 W05 를 입력하면 입장 처리됩니다",
    "호감 투표에서 'M02 민재 → W03 하은'을 넣으면 서로 호감이 맞아 매칭이 하나 생깁니다",
    "현장 요청은 참가자가 폰으로 보낸 요청입니다. '처리'를 눌러 보세요",
  ],
  seed: () => ({
    people: rows("p", [...men, ...women].map((name, i) => ({
      no: name.slice(0, 3),
      name: name.slice(4),
      gender: name.startsWith("M") ? "남" : "여",
      age: [31, 29, 33, 30, 28, 27, 30, 29, 32, 28][i],
      checkin: ["W05", "M05"].includes(name.slice(0, 3)) ? "입장 전" : "입장",
      time: ["W05", "M05"].includes(name.slice(0, 3)) ? "" : "19:0" + (i % 10),
    }))),
    votes: rows("v", [
      { from: "M01 지훈", to: "W02 지아", time: "19:42" },
      { from: "W02 지아", to: "M01 지훈", time: "19:43" },
      { from: "M03 현우", to: "W01 서연", time: "19:44" },
      { from: "W01 서연", to: "M04 도윤", time: "19:45" },
      { from: "W03 하은", to: "M02 민재", time: "19:46" },
      { from: "M04 도윤", to: "W01 서연", time: "19:47" },
    ]),
    requests: rows("r", [
      { table: "3번 테이블", who: "W03 하은", content: "물 한 병 부탁드려요", time: "19:38", status: "접수" },
      { table: "1번 테이블", who: "M02 민재", content: "자리 이동 문의", time: "19:40", status: "접수" },
      { table: "5번 테이블", who: "W04 수아", content: "냅킨 요청", time: "19:21", status: "처리완료" },
    ]),
  }),
  badge: (db) => ({ requests: count(db.requests, "status", "접수") }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "관제",
      icon: LayoutDashboard,
      title: "오늘 행사 관제",
      kpis: (db) => [
        { label: "입장 인원", value: String(count(db.people, "checkin", "입장")), unit: `/ ${db.people.length}명` },
        { label: "호감 투표", value: String(db.votes.length), unit: "표" },
        { label: "매칭 성사", value: String(matches(db.votes).length), unit: "쌍" },
        { label: "미처리 요청", value: String(count(db.requests, "status", "접수")), unit: "건", alert: count(db.requests, "status", "접수") > 0 },
      ],
      chart: {
        title: "참가자별 받은 호감",
        unit: "표",
        data: (db) => [...men, ...women].map((n) => ({ label: n.slice(4), value: db.votes.filter((v) => v.to === n).length })).sort((a, b) => b.value - a.value).slice(0, 6),
      },
      list: {
        title: "들어온 현장 요청",
        table: "requests",
        filter: (r) => r.status === "접수",
        columns: [
          { key: "content", label: "요청" },
          { key: "table", label: "자리" },
          { key: "status", label: "상태", badge: { 접수: "amber", 처리완료: "green" } },
        ],
      },
    },
    {
      kind: "table",
      id: "people",
      label: "QR 입장",
      icon: QrCode,
      title: "참가자 입장",
      description: "참가자가 입구에서 QR을 찍으면 자동 입장 처리됩니다. 여기서는 참가번호로 대신합니다.",
      table: "people",
      tabs: { key: "checkin", values: ["입장", "입장 전"] },
      quick: {
        label: "QR·참가번호",
        placeholder: "W05",
        run: (value, db) => {
          const p = db.people.find((r) => r.no === value.toUpperCase())
          if (!p) return { db, message: "등록되지 않은 참가번호입니다" }
          if (p.checkin === "입장") return { db, message: `${p.name} 님은 이미 입장했습니다` }
          return { db: patch(db, "people", p.id, { checkin: "입장", time: now().slice(11) }), message: `${p.no} ${p.name} 님 입장 확인` }
        },
      },
      columns: [
        { key: "no", label: "번호", strong: true },
        { key: "name", label: "이름" },
        { key: "gender", label: "성별" },
        { key: "age", label: "나이", format: "num" },
        { key: "time", label: "입장 시각" },
        { key: "checkin", label: "입장", badge: { 입장: "green", "입장 전": "gray" } },
      ],
    },
    {
      kind: "table",
      id: "votes",
      label: "호감 투표",
      icon: Heart,
      title: "실시간 호감 투표",
      description: "참가자가 본인 폰에서 보낸 투표가 실시간으로 쌓입니다.",
      table: "votes",
      columns: [
        { key: "time", label: "시각" },
        { key: "from", label: "보낸 사람", strong: true },
        { key: "to", label: "받은 사람" },
      ],
      deletable: true,
      form: {
        create: "투표 입력",
        defaults: () => ({ time: now().slice(11) }),
        fields: [
          { key: "from", label: "보낸 사람", type: "select", options: [...men, ...women] },
          { key: "to", label: "받은 사람", type: "select", options: [...women, ...men] },
        ],
      },
    },
    {
      kind: "table",
      id: "matches",
      label: "매칭 결과",
      icon: Sparkles,
      title: "상호 매칭 결과",
      description: "서로 호감을 보낸 쌍을 자동으로 찾아냅니다. 투표가 바뀌면 바로 다시 계산됩니다.",
      table: "votes",
      derive: (db) => matches(db.votes),
      columns: [
        { key: "man", label: "남성", strong: true },
        { key: "woman", label: "여성", strong: true },
        { key: "result", label: "결과", badge: { "매칭 성사": "violet" } },
      ],
    },
    {
      kind: "table",
      id: "requests",
      label: "현장 요청",
      icon: BellRing,
      title: "현장 요청",
      table: "requests",
      tabs: { key: "status", values: ["접수", "처리완료"] },
      columns: [
        { key: "time", label: "시각" },
        { key: "table", label: "자리" },
        { key: "who", label: "요청자" },
        { key: "content", label: "내용", strong: true },
        { key: "status", label: "상태", badge: { 접수: "amber", 처리완료: "green" } },
      ],
      actions: [
        { label: "처리", when: (r) => r.status === "접수", run: (r, db) => ({ db: patch(db, "requests", r.id, { status: "처리완료" }), message: `${r.table} 요청 처리 완료` }) },
      ],
    },
  ],
}
