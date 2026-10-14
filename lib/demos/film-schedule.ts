import { CalendarDays, Clapperboard, LayoutDashboard, Video, Wallet } from "lucide-react"
import type { DemoConfig } from "./types"
import { count, day, patch, rows, sum, won } from "./util"

const directors = ["강감독", "윤감독", "임감독"]
const PAY = 150000 // 촬영 1건당 감독 수당

const flow = ["예약확정", "촬영완료", "편집중", "납품완료"]
const bookingBadge = { 예약확정: "blue", 촬영완료: "violet", 편집중: "amber", 납품완료: "green" } as const

export const filmSchedule: DemoConfig = {
  slug: "film-schedule",
  product: "촬영 관리",
  org: "(가상) 하이라이트 스튜디오",
  user: "최종관리자",
  accent: "#18181B",
  guide: [
    "촬영 일정에서 '촬영 예약'으로 새 일정을 잡고 감독을 배정해 보세요",
    "각 일정은 '다음 단계'로 촬영완료 → 편집중 → 납품완료까지 넘어갑니다",
    "감독 현황과 정산은 일정이 바뀔 때마다 자동으로 다시 계산됩니다",
  ],
  seed: () => ({
    bookings: rows("b", [
      { date: day(2), time: "11:00", customer: "김*준 · 이*연", type: "웨딩 본식", venue: "라온 웨딩홀 3층", director: "강감독", price: 1200000, status: "예약확정" },
      { date: day(3), time: "13:30", customer: "박*아 돌잔치", type: "돌잔치", venue: "더테이블 연회장", director: "윤감독", price: 550000, status: "예약확정" },
      { date: day(5), time: "18:00", customer: "(주)누리테크", type: "기업 행사", venue: "코엑스 컨퍼런스룸", director: "임감독", price: 1800000, status: "예약확정" },
      { date: day(-2), time: "12:00", customer: "정*호 · 최*은", type: "웨딩 본식", venue: "그랜드 하우스", director: "강감독", price: 1200000, status: "편집중" },
      { date: day(-4), time: "19:00", customer: "청춘밴드 공연", type: "공연", venue: "홍대 라이브홀", director: "윤감독", price: 900000, status: "촬영완료" },
      { date: day(-9), time: "11:30", customer: "오*민 · 한*수", type: "웨딩 본식", venue: "라온 웨딩홀 2층", director: "임감독", price: 1200000, status: "납품완료" },
    ]),
  }),
  badge: (db) => ({ bookings: db.bookings.filter((r) => r.status === "촬영완료" || r.status === "편집중").length }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "대시보드",
      icon: LayoutDashboard,
      title: "촬영 현황",
      kpis: (db) => [
        { label: "다가오는 촬영", value: String(count(db.bookings, "status", "예약확정")), unit: "건" },
        { label: "편집 대기·진행", value: String(count(db.bookings, "status", "촬영완료") + count(db.bookings, "status", "편집중")), unit: "건", alert: true },
        { label: "납품 완료", value: String(count(db.bookings, "status", "납품완료")), unit: "건" },
        { label: "예약 매출", value: won(sum(db.bookings, "price")) },
      ],
      chart: {
        title: "감독별 배정 건수",
        unit: "건",
        data: (db) => directors.map((d) => ({ label: d, value: count(db.bookings, "director", d) })),
      },
      list: {
        title: "다가오는 촬영",
        table: "bookings",
        filter: (r) => r.status === "예약확정",
        columns: [
          { key: "customer", label: "고객" },
          { key: "date", label: "날짜" },
          { key: "director", label: "감독" },
        ],
      },
    },
    {
      kind: "table",
      id: "bookings",
      label: "촬영 일정",
      icon: CalendarDays,
      title: "촬영 일정",
      table: "bookings",
      tabs: { key: "status", values: flow },
      columns: [
        { key: "date", label: "날짜", strong: true },
        { key: "time", label: "시간" },
        { key: "customer", label: "고객" },
        { key: "type", label: "촬영 종류" },
        { key: "venue", label: "장소" },
        { key: "director", label: "감독" },
        { key: "price", label: "금액", format: "won" },
        { key: "status", label: "진행", badge: bookingBadge },
      ],
      actions: [
        {
          label: "다음 단계",
          when: (r) => r.status !== "납품완료",
          run: (r, db) => {
            const next = flow[flow.indexOf(String(r.status)) + 1]
            return { db: patch(db, "bookings", r.id, { status: next }), message: `${r.customer} → ${next}` }
          },
        },
      ],
      deletable: true,
      form: {
        create: "촬영 예약",
        edit: true,
        defaults: () => ({ status: "예약확정" }),
        fields: [
          { key: "customer", label: "고객", required: true },
          { key: "type", label: "촬영 종류", type: "select", options: ["웨딩 본식", "돌잔치", "기업 행사", "공연"] },
          { key: "date", label: "날짜", type: "date" },
          { key: "time", label: "시간", placeholder: "13:00" },
          { key: "venue", label: "장소" },
          { key: "director", label: "감독", type: "select", options: directors },
          { key: "price", label: "금액(원)", type: "number" },
        ],
      },
    },
    {
      kind: "table",
      id: "directors",
      label: "감독 현황",
      icon: Video,
      title: "촬영감독 현황",
      description: "촬영감독은 본인 계정으로 로그인해 자기 일정만 봅니다.",
      table: "bookings",
      derive: (db) =>
        directors.map((d) => {
          const mine = db.bookings.filter((b) => b.director === d)
          const nextShoot = mine.filter((b) => b.status === "예약확정").map((b) => String(b.date)).sort()[0] ?? ""
          return { id: d, name: d, total: mine.length, upcoming: count(mine, "status", "예약확정"), editing: count(mine, "status", "편집중") + count(mine, "status", "촬영완료"), next: nextShoot }
        }),
      columns: [
        { key: "name", label: "감독", strong: true },
        { key: "total", label: "전체 배정", format: "num", unit: "건" },
        { key: "upcoming", label: "예정 촬영", format: "num", unit: "건" },
        { key: "editing", label: "편집 중", format: "num", unit: "건" },
        { key: "next", label: "다음 촬영일" },
      ],
    },
    {
      kind: "table",
      id: "pay",
      label: "감독 정산",
      icon: Wallet,
      title: "감독 정산",
      description: `촬영을 마친 건(촬영완료 이후)마다 1건당 ${won(PAY)}으로 계산합니다.`,
      table: "bookings",
      derive: (db) =>
        directors.map((d) => {
          const shot = db.bookings.filter((b) => b.director === d && b.status !== "예약확정").length
          return { id: d, name: d, shot, pay: shot * PAY }
        }),
      columns: [
        { key: "name", label: "감독", strong: true },
        { key: "shot", label: "촬영 완료", format: "num", unit: "건" },
        { key: "pay", label: "정산 금액", format: "won" },
      ],
    },
    {
      kind: "table",
      id: "delivery",
      label: "편집·납품",
      icon: Clapperboard,
      title: "편집·납품 대기",
      table: "bookings",
      derive: (db) => db.bookings.filter((b) => b.status === "촬영완료" || b.status === "편집중"),
      columns: [
        { key: "date", label: "촬영일" },
        { key: "customer", label: "고객", strong: true },
        { key: "type", label: "종류" },
        { key: "director", label: "감독" },
        { key: "status", label: "진행", badge: bookingBadge },
      ],
    },
  ],
}
