import { FileCheck, FileSignature, LayoutDashboard, Megaphone, Wallet } from "lucide-react"
import type { DemoConfig } from "./types"
import { count, day, patch, rows, sum, won } from "./util"

const approvalBadge = { 대기: "amber", 승인: "green", 반려: "red" } as const

export const adminSystem: DemoConfig = {
  slug: "admin-system",
  product: "통합 관리자",
  org: "(가상) 한빛유통",
  user: "관리자 · 경영지원팀",
  accent: "#1E3A8A",
  guide: [
    "결재함에서 '승인'이나 '반려'를 누르면 대시보드 숫자가 바로 바뀝니다",
    "'결재 올리기'로 새 결재를 만들어 보세요",
    "정산 화면에서 '지급 처리'를 누르면 미지급 금액이 줄어듭니다",
  ],
  seed: () => ({
    approvals: rows("a", [
      { title: "10월 물류비 지출결의", requester: "김하늘", dept: "물류팀", type: "지출결의", amount: 3200000, date: day(-1), status: "대기" },
      { title: "사무용품 구매 요청", requester: "박서준", dept: "총무팀", type: "구매", amount: 480000, date: day(-1), status: "대기" },
      { title: "연차 사용 (3일)", requester: "이수민", dept: "영업팀", type: "휴가", amount: 0, date: day(-2), status: "대기" },
      { title: "거래처 접대비 정산", requester: "정민호", dept: "영업팀", type: "지출결의", amount: 650000, date: day(-3), status: "승인" },
      { title: "노트북 교체 구매", requester: "최유리", dept: "개발팀", type: "구매", amount: 1890000, date: day(-4), status: "승인" },
      { title: "출장비 가지급", requester: "한지훈", dept: "물류팀", type: "지출결의", amount: 300000, date: day(-5), status: "반려" },
    ]),
    settlements: rows("s", [
      { partner: "대성운송", month: "이번 달", amount: 4200000, due: day(3), status: "정산대기" },
      { partner: "푸른포장", month: "이번 달", amount: 1350000, due: day(5), status: "정산대기" },
      { partner: "한결상사", month: "이번 달", amount: 2780000, due: day(7), status: "정산대기" },
      { partner: "제일인쇄", month: "지난 달", amount: 920000, due: day(-10), status: "지급완료" },
      { partner: "대성운송", month: "지난 달", amount: 3980000, due: day(-12), status: "지급완료" },
    ]),
    contracts: rows("c", [
      { partner: "대성운송", title: "연간 운송 계약", start: day(-340), end: day(25), amount: 48000000, status: "만료임박" },
      { partner: "푸른포장", title: "포장재 공급 계약", start: day(-120), end: day(245), amount: 16000000, status: "진행중" },
      { partner: "한결상사", title: "상품 위탁 판매", start: day(-60), end: day(305), amount: 30000000, status: "진행중" },
      { partner: "제일인쇄", title: "인쇄물 단가 계약", start: day(-400), end: day(-35), amount: 6000000, status: "종료" },
    ]),
    notices: rows("n", [
      { title: "10월 정산 마감 일정 안내", author: "경영지원팀", date: day(-1), views: 42 },
      { title: "사내 보안 점검 실시", author: "총무팀", date: day(-4), views: 87 },
      { title: "추석 연휴 출고 일정", author: "물류팀", date: day(-15), views: 130 },
    ]),
  }),
  badge: (db) => ({ approvals: count(db.approvals, "status", "대기") }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "대시보드",
      icon: LayoutDashboard,
      title: "대시보드",
      description: "결재·정산·계약 현황을 한눈에 봅니다.",
      kpis: (db) => [
        { label: "결재 대기", value: String(count(db.approvals, "status", "대기")), unit: "건", alert: count(db.approvals, "status", "대기") > 0 },
        { label: "미지급 정산", value: won(sum(db.settlements.filter((r) => r.status === "정산대기"), "amount")) },
        { label: "만료 임박 계약", value: String(count(db.contracts, "status", "만료임박")), unit: "건" },
        { label: "진행 중 계약", value: String(count(db.contracts, "status", "진행중")), unit: "건" },
      ],
      chart: {
        title: "부서별 결재 금액",
        unit: "원",
        data: (db) =>
          ["물류팀", "총무팀", "영업팀", "개발팀"].map((d) => ({
            label: d,
            value: sum(db.approvals.filter((r) => r.dept === d), "amount"),
          })),
      },
      list: {
        title: "결재 대기 목록",
        table: "approvals",
        filter: (r) => r.status === "대기",
        columns: [
          { key: "title", label: "제목" },
          { key: "requester", label: "기안자" },
          { key: "status", label: "상태", badge: approvalBadge },
        ],
      },
    },
    {
      kind: "table",
      id: "approvals",
      label: "결재함",
      icon: FileCheck,
      title: "결재함",
      description: "올라온 결재를 승인하거나 반려합니다.",
      table: "approvals",
      tabs: { key: "status", values: ["대기", "승인", "반려"] },
      columns: [
        { key: "date", label: "기안일" },
        { key: "type", label: "종류" },
        { key: "title", label: "제목", strong: true },
        { key: "requester", label: "기안자" },
        { key: "dept", label: "부서" },
        { key: "amount", label: "금액", format: "won" },
        { key: "status", label: "상태", badge: approvalBadge },
      ],
      actions: [
        { label: "승인", when: (r) => r.status === "대기", run: (r, db) => ({ db: patch(db, "approvals", r.id, { status: "승인" }), message: `'${r.title}' 승인했습니다` }) },
        { label: "반려", danger: true, when: (r) => r.status === "대기", run: (r, db) => ({ db: patch(db, "approvals", r.id, { status: "반려" }), message: `'${r.title}' 반려했습니다` }) },
      ],
      form: {
        create: "결재 올리기",
        defaults: () => ({ date: day(), status: "대기", requester: "관리자", dept: "총무팀" }),
        fields: [
          { key: "title", label: "제목", required: true, placeholder: "예: 택배 박스 구매" },
          { key: "type", label: "종류", type: "select", options: ["지출결의", "구매", "휴가"] },
          { key: "dept", label: "부서", type: "select", options: ["총무팀", "물류팀", "영업팀", "개발팀"] },
          { key: "amount", label: "금액(원)", type: "number" },
        ],
      },
    },
    {
      kind: "table",
      id: "settlements",
      label: "정산",
      icon: Wallet,
      title: "거래처 정산",
      table: "settlements",
      tabs: { key: "status", values: ["정산대기", "지급완료"] },
      columns: [
        { key: "partner", label: "거래처", strong: true },
        { key: "month", label: "정산월" },
        { key: "due", label: "지급 예정일" },
        { key: "amount", label: "금액", format: "won" },
        { key: "status", label: "상태", badge: { 정산대기: "amber", 지급완료: "green" } },
      ],
      actions: [
        { label: "지급 처리", when: (r) => r.status === "정산대기", run: (r, db) => ({ db: patch(db, "settlements", r.id, { status: "지급완료" }), message: `${r.partner} ${won(Number(r.amount))} 지급 처리했습니다` }) },
      ],
    },
    {
      kind: "table",
      id: "contracts",
      label: "계약",
      icon: FileSignature,
      title: "계약 관리",
      description: "만료 30일 전부터 '만료임박'으로 표시됩니다.",
      table: "contracts",
      tabs: { key: "status", values: ["진행중", "만료임박", "종료"] },
      columns: [
        { key: "partner", label: "거래처", strong: true },
        { key: "title", label: "계약명" },
        { key: "start", label: "시작일" },
        { key: "end", label: "종료일" },
        { key: "amount", label: "계약금액", format: "won" },
        { key: "status", label: "상태", badge: { 진행중: "blue", 만료임박: "amber", 종료: "gray" } },
      ],
      actions: [
        { label: "1년 연장", when: (r) => r.status === "만료임박", run: (r, db) => ({ db: patch(db, "contracts", r.id, { end: day(390), status: "진행중" }), message: `${r.partner} 계약을 1년 연장했습니다` }) },
      ],
      form: {
        create: "계약 등록",
        edit: true,
        defaults: () => ({ status: "진행중" }),
        fields: [
          { key: "partner", label: "거래처", required: true },
          { key: "title", label: "계약명", required: true },
          { key: "start", label: "시작일", type: "date" },
          { key: "end", label: "종료일", type: "date" },
          { key: "amount", label: "계약금액(원)", type: "number" },
        ],
      },
    },
    {
      kind: "table",
      id: "notices",
      label: "공지사항",
      icon: Megaphone,
      title: "공지사항",
      table: "notices",
      columns: [
        { key: "title", label: "제목", strong: true },
        { key: "author", label: "작성 부서" },
        { key: "date", label: "작성일" },
        { key: "views", label: "조회", format: "num" },
      ],
      deletable: true,
      form: {
        create: "공지 쓰기",
        edit: true,
        defaults: () => ({ date: day(), views: 0, author: "경영지원팀" }),
        fields: [
          { key: "title", label: "제목", required: true },
          { key: "author", label: "작성 부서", type: "select", options: ["경영지원팀", "총무팀", "물류팀", "영업팀"] },
        ],
      },
    },
  ],
}
