import { Camera, LayoutDashboard, Megaphone, UserRound } from "lucide-react"
import type { DemoConfig } from "./types"
import { count, day, patch, rows, sum, won } from "./util"

const subBadge = { 구매제출: "blue", 리뷰완료: "amber", 정산완료: "green", 반려: "red" } as const

export const review: DemoConfig = {
  slug: "review",
  product: "체험단 관리",
  org: "(가상) 리뷰웨이",
  user: "운영 관리자",
  accent: "#1D4ED8",
  guide: [
    "제출 검수에서 구매 사진을 확인하고 '리뷰 확인' → '정산 완료' 순서로 눌러 보세요",
    "정산이 끝나면 대시보드의 정산 대기 금액이 바로 줄어듭니다",
    "리뷰어 화면에는 본계정과 부계정이 매칭키로 묶여 있습니다",
  ],
  seed: () => ({
    campaigns: rows("c", [
      { company: "그린팜", product: "유기농 그래놀라 500g", keyword: "아침 그래놀라", price: 12900, slots: 30, done: 18, status: "진행중" },
      { company: "데일리홈", product: "실리콘 주방장갑", keyword: "주방장갑 추천", price: 8900, slots: 20, done: 20, status: "종료" },
      { company: "펫마루", product: "고양이 간식 츄르 50개", keyword: "고양이 간식", price: 15900, slots: 40, done: 6, status: "진행중" },
      { company: "뷰티랩", product: "수분 크림 80ml", keyword: "수분크림 지성", price: 21000, slots: 25, done: 0, status: "모집중" },
    ]),
    reviewers: rows("r", [
      { name: "김*진", key: "RV-0012", subs: 2, bank: "국민 ****-21", done: 14 },
      { name: "이*아", key: "RV-0018", subs: 1, bank: "신한 ****-07", done: 9 },
      { name: "박*수", key: "RV-0025", subs: 3, bank: "카카오 ****-55", done: 22 },
      { name: "정*린", key: "RV-0031", subs: 0, bank: "농협 ****-90", done: 3 },
    ]),
    submissions: rows("s", [
      { date: day(), reviewer: "김*진 (부계정 2)", product: "유기농 그래놀라 500g", buy: "사진 2장", reviewPhoto: "", amount: 12900, status: "구매제출" },
      { date: day(), reviewer: "박*수", product: "고양이 간식 츄르 50개", buy: "사진 1장", reviewPhoto: "", amount: 15900, status: "구매제출" },
      { date: day(-1), reviewer: "이*아", product: "유기농 그래놀라 500g", buy: "사진 1장", reviewPhoto: "사진 3장", amount: 12900, status: "리뷰완료" },
      { date: day(-2), reviewer: "박*수 (부계정 1)", product: "유기농 그래놀라 500g", buy: "사진 1장", reviewPhoto: "사진 2장", amount: 12900, status: "리뷰완료" },
      { date: day(-3), reviewer: "정*린", product: "실리콘 주방장갑", buy: "사진 1장", reviewPhoto: "사진 2장", amount: 8900, status: "정산완료" },
    ]),
  }),
  badge: (db) => ({ submissions: count(db.submissions, "status", "구매제출") + count(db.submissions, "status", "리뷰완료") }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "대시보드",
      icon: LayoutDashboard,
      title: "체험단 현황",
      kpis: (db) => [
        { label: "진행 중 캠페인", value: String(count(db.campaigns, "status", "진행중")), unit: "건" },
        { label: "검수 대기", value: String(count(db.submissions, "status", "구매제출")), unit: "건", alert: count(db.submissions, "status", "구매제출") > 0 },
        { label: "정산 대기 금액", value: won(sum(db.submissions.filter((r) => r.status === "리뷰완료"), "amount")) },
        { label: "등록 리뷰어", value: String(db.reviewers.length), unit: "명" },
      ],
      chart: {
        title: "캠페인별 진행 인원",
        unit: "명",
        data: (db) => db.campaigns.map((c) => ({ label: String(c.company), value: Number(c.done) })),
      },
      list: {
        title: "정산할 리뷰",
        table: "submissions",
        filter: (r) => r.status === "리뷰완료",
        columns: [
          { key: "reviewer", label: "리뷰어" },
          { key: "amount", label: "금액", format: "won" },
          { key: "status", label: "상태", badge: subBadge },
        ],
      },
    },
    {
      kind: "table",
      id: "submissions",
      label: "제출 검수",
      icon: Camera,
      title: "구매·리뷰 제출 검수",
      description: "리뷰어가 올린 구매·리뷰 인증 사진을 한 화면에서 보고 정산까지 이어갑니다.",
      table: "submissions",
      tabs: { key: "status", values: ["구매제출", "리뷰완료", "정산완료", "반려"] },
      columns: [
        { key: "date", label: "제출일" },
        { key: "reviewer", label: "리뷰어", strong: true },
        { key: "product", label: "상품" },
        { key: "buy", label: "구매 사진" },
        { key: "reviewPhoto", label: "리뷰 사진" },
        { key: "amount", label: "상품비", format: "won" },
        { key: "status", label: "상태", badge: subBadge },
      ],
      actions: [
        { label: "리뷰 확인", when: (r) => r.status === "구매제출", run: (r, db) => ({ db: patch(db, "submissions", r.id, { status: "리뷰완료", reviewPhoto: "사진 2장" }), message: `${r.reviewer} 리뷰 확인 완료` }) },
        { label: "반려", danger: true, when: (r) => r.status === "구매제출", run: (r, db) => ({ db: patch(db, "submissions", r.id, { status: "반려" }), message: "반려하고 리뷰어에게 수정 요청을 보냈습니다" }) },
        { label: "정산 완료", when: (r) => r.status === "리뷰완료", run: (r, db) => ({ db: patch(db, "submissions", r.id, { status: "정산완료" }), message: `${won(Number(r.amount))} 정산 완료` }) },
      ],
    },
    {
      kind: "table",
      id: "campaigns",
      label: "캠페인",
      icon: Megaphone,
      title: "캠페인(진행자) 관리",
      table: "campaigns",
      tabs: { key: "status", values: ["모집중", "진행중", "종료"] },
      columns: [
        { key: "company", label: "업체", strong: true },
        { key: "product", label: "상품" },
        { key: "keyword", label: "검색 키워드" },
        { key: "price", label: "상품비", format: "won" },
        { key: "done", label: "진행", format: "num" },
        { key: "slots", label: "모집", format: "num", unit: "명" },
        { key: "status", label: "상태", badge: { 모집중: "violet", 진행중: "blue", 종료: "gray" } },
      ],
      actions: [
        { label: "진행 시작", when: (r) => r.status === "모집중", run: (r, db) => ({ db: patch(db, "campaigns", r.id, { status: "진행중" }), message: `${r.company} 캠페인 시작` }) },
        { label: "종료", danger: true, when: (r) => r.status === "진행중", run: (r, db) => ({ db: patch(db, "campaigns", r.id, { status: "종료" }), message: `${r.company} 캠페인 종료` }) },
      ],
      form: {
        create: "캠페인 등록",
        edit: true,
        defaults: () => ({ done: 0, status: "모집중" }),
        fields: [
          { key: "company", label: "업체", required: true },
          { key: "product", label: "상품", required: true },
          { key: "keyword", label: "검색 키워드" },
          { key: "price", label: "상품비(원)", type: "number" },
          { key: "slots", label: "모집 인원", type: "number" },
        ],
      },
    },
    {
      kind: "table",
      id: "reviewers",
      label: "리뷰어",
      icon: UserRound,
      title: "리뷰어·부계정",
      description: "본계정과 부계정을 매칭키 하나로 묶어, 누가 몇 건 했는지 한 줄로 봅니다.",
      table: "reviewers",
      columns: [
        { key: "key", label: "매칭키", strong: true },
        { key: "name", label: "리뷰어" },
        { key: "subs", label: "부계정", format: "num", unit: "개" },
        { key: "done", label: "누적 진행", format: "num", unit: "건" },
        { key: "bank", label: "정산 계좌" },
      ],
      actions: [
        { label: "부계정 +1", run: (r, db) => ({ db: patch(db, "reviewers", r.id, { subs: Number(r.subs) + 1 }), message: `${r.name} 부계정 추가 (매칭키 ${r.key})` }) },
      ],
    },
  ],
}
