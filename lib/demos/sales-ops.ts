import { BookOpenText, Inbox, LayoutDashboard, Megaphone, ShieldUser } from "lucide-react"
import type { DemoConfig } from "./types"
import { count, day, patch, rows, sum, won } from "./util"

const leadBadge = { 미처리: "red", 상담중: "amber", 처리완료: "green" } as const
const sources = ["네이버", "구글", "당근", "카카오"]

export const salesOps: DemoConfig = {
  slug: "sales-ops",
  product: "영업 통합 ERP",
  org: "(가상) 에이씨 컴퍼니",
  user: "대표 · 전체 권한",
  accent: "#0F172A",
  guide: [
    "상담 신청에서 '상담 시작' → '처리 완료'를 눌러 보세요. 담당자가 자동으로 붙습니다",
    "광고 성과 화면은 광고비와 실제 신청 건수로 건당 비용을 자동 계산합니다",
    "장부에 매출·원가를 넣으면 마진이 계산되어 대시보드에 바로 반영됩니다",
  ],
  seed: () => ({
    leads: rows("l", [
      { date: day(), name: "김*수", phone: "010-****-4410", source: "네이버", memo: "견적 문의", staff: "", status: "미처리" },
      { date: day(), name: "오*린", phone: "010-****-0721", source: "당근", memo: "방문 상담 희망", staff: "", status: "미처리" },
      { date: day(), name: "장*호", phone: "010-****-9038", source: "구글", memo: "가격표 요청", staff: "박매니저", status: "상담중" },
      { date: day(-1), name: "윤*아", phone: "010-****-1182", source: "네이버", memo: "재구매", staff: "이상담", status: "처리완료" },
      { date: day(-1), name: "서*준", phone: "010-****-6604", source: "카카오", memo: "기업 단체 문의", staff: "박매니저", status: "처리완료" },
      { date: day(-2), name: "한*미", phone: "010-****-3375", source: "네이버", memo: "견적 문의", staff: "이상담", status: "처리완료" },
    ]),
    ads: rows("a", [
      { channel: "네이버", account: "검색광고 1번 계정", spend: 420000, clicks: 1310 },
      { channel: "구글", account: "검색·디스플레이", spend: 260000, clicks: 980 },
      { channel: "당근", account: "지역 광고", spend: 90000, clicks: 410 },
      { channel: "카카오", account: "비즈보드", spend: 150000, clicks: 520 },
    ]),
    ledger: rows("g", [
      { date: day(-1), item: "B2B 납품 (서*준)", sales: 1850000, cost: 1240000, margin: 610000, staff: "박매니저", status: "정산대기" },
      { date: day(-1), item: "개인 주문 (윤*아)", sales: 320000, cost: 205000, margin: 115000, staff: "이상담", status: "정산완료" },
      { date: day(-2), item: "개인 주문 (한*미)", sales: 280000, cost: 176000, margin: 104000, staff: "이상담", status: "정산완료" },
    ]),
    staff: rows("s", [
      { name: "대표", role: "대표", menus: "전체", status: "사용" },
      { name: "박매니저", role: "매니저", menus: "상담·장부·광고", status: "사용" },
      { name: "이상담", role: "상담원", menus: "상담 신청", status: "사용" },
      { name: "최알바", role: "상담원", menus: "상담 신청", status: "중지" },
    ]),
  }),
  badge: (db) => ({ leads: count(db.leads, "status", "미처리") }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "대시보드",
      icon: LayoutDashboard,
      title: "대시보드",
      kpis: (db) => [
        { label: "오늘 신청", value: String(db.leads.filter((r) => r.date === day()).length), unit: "건" },
        { label: "미처리 신청", value: String(count(db.leads, "status", "미처리")), unit: "건", alert: count(db.leads, "status", "미처리") > 0 },
        { label: "이번 달 매출", value: won(sum(db.ledger, "sales")) },
        { label: "이번 달 마진", value: won(sum(db.ledger, "margin")) },
      ],
      chart: {
        title: "유입 경로별 상담 신청",
        unit: "건",
        data: (db) => sources.map((s) => ({ label: s, value: count(db.leads, "source", s) })),
      },
      list: {
        title: "아직 연락 안 한 신청",
        table: "leads",
        filter: (r) => r.status === "미처리",
        columns: [
          { key: "name", label: "이름" },
          { key: "source", label: "유입" },
          { key: "status", label: "상태", badge: leadBadge },
        ],
      },
    },
    {
      kind: "table",
      id: "leads",
      label: "상담 신청",
      icon: Inbox,
      title: "상담 신청 (리드폼)",
      description: "광고 랜딩의 신청서가 들어오면 유입 경로와 함께 자동으로 쌓입니다.",
      table: "leads",
      tabs: { key: "status", values: ["미처리", "상담중", "처리완료"] },
      columns: [
        { key: "date", label: "접수일" },
        { key: "name", label: "이름", strong: true },
        { key: "phone", label: "연락처" },
        { key: "source", label: "유입" },
        { key: "memo", label: "내용" },
        { key: "staff", label: "담당" },
        { key: "status", label: "상태", badge: leadBadge },
      ],
      actions: [
        { label: "상담 시작", when: (r) => r.status === "미처리", run: (r, db) => ({ db: patch(db, "leads", r.id, { status: "상담중", staff: "박매니저" }), message: `${r.name} 님 상담 시작 (담당 박매니저)` }) },
        { label: "처리 완료", when: (r) => r.status === "상담중", run: (r, db) => ({ db: patch(db, "leads", r.id, { status: "처리완료" }), message: `${r.name} 님 상담 처리 완료` }) },
      ],
      form: {
        create: "신청 직접 입력",
        edit: true,
        defaults: () => ({ date: day(), staff: "", status: "미처리", phone: "010-****-0000" }),
        fields: [
          { key: "name", label: "이름", required: true },
          { key: "source", label: "유입 경로", type: "select", options: sources },
          { key: "memo", label: "문의 내용", type: "textarea" },
        ],
      },
    },
    {
      kind: "table",
      id: "ads",
      label: "광고 성과",
      icon: Megaphone,
      title: "광고비·성과",
      description: "광고비를 고치면 신청 1건당 비용이 바로 다시 계산됩니다.",
      table: "ads",
      derive: (db) =>
        db.ads.map((a) => {
          const leads = count(db.leads, "source", String(a.channel))
          return { ...a, leads, cpl: leads ? Math.round(Number(a.spend) / leads) : 0 }
        }),
      columns: [
        { key: "channel", label: "매체", strong: true },
        { key: "account", label: "광고 계정" },
        { key: "spend", label: "집행 광고비", format: "won" },
        { key: "clicks", label: "클릭", format: "num" },
        { key: "leads", label: "상담 신청", format: "num", unit: "건" },
        { key: "cpl", label: "건당 비용", format: "won" },
      ],
    },
    {
      kind: "table",
      id: "ledger",
      label: "정산 장부",
      icon: BookOpenText,
      title: "매출·정산 장부",
      table: "ledger",
      tabs: { key: "status", values: ["정산대기", "정산완료"] },
      columns: [
        { key: "date", label: "날짜" },
        { key: "item", label: "내용", strong: true },
        { key: "sales", label: "매출", format: "won" },
        { key: "cost", label: "원가", format: "won" },
        { key: "margin", label: "마진", format: "won" },
        { key: "staff", label: "담당" },
        { key: "status", label: "정산", badge: { 정산대기: "amber", 정산완료: "green" } },
      ],
      actions: [
        { label: "정산", when: (r) => r.status === "정산대기", run: (r, db) => ({ db: patch(db, "ledger", r.id, { status: "정산완료" }), message: `${r.item} 정산 완료` }) },
      ],
      form: {
        create: "장부 기록",
        edit: true,
        defaults: () => ({ date: day(), status: "정산대기" }),
        compute: (v) => ({ margin: Number(v.sales) - Number(v.cost) }),
        fields: [
          { key: "item", label: "내용", required: true },
          { key: "staff", label: "담당", type: "select", options: ["박매니저", "이상담", "대표"] },
          { key: "sales", label: "매출(원)", type: "number", required: true },
          { key: "cost", label: "원가(원)", type: "number" },
        ],
      },
    },
    {
      kind: "table",
      id: "staff",
      label: "직원·권한",
      icon: ShieldUser,
      title: "직원·메뉴 권한",
      description: "직원마다 볼 수 있는 메뉴를 나눠, 상담원은 장부·광고비를 볼 수 없게 합니다.",
      table: "staff",
      tabs: { key: "status", values: ["사용", "중지"] },
      columns: [
        { key: "name", label: "이름", strong: true },
        { key: "role", label: "직책" },
        { key: "menus", label: "접근 가능 메뉴" },
        { key: "status", label: "계정", badge: { 사용: "green", 중지: "gray" } },
      ],
      actions: [
        { label: "사용 중지", danger: true, when: (r) => r.status === "사용" && r.role !== "대표", run: (r, db) => ({ db: patch(db, "staff", r.id, { status: "중지" }), message: `${r.name} 계정 사용 중지` }) },
        { label: "다시 사용", when: (r) => r.status === "중지", run: (r, db) => ({ db: patch(db, "staff", r.id, { status: "사용" }), message: `${r.name} 계정 다시 사용` }) },
      ],
      form: {
        create: "직원 추가",
        edit: true,
        defaults: () => ({ status: "사용" }),
        fields: [
          { key: "name", label: "이름", required: true },
          { key: "role", label: "직책", type: "select", options: ["매니저", "상담원"] },
          { key: "menus", label: "접근 메뉴", type: "select", options: ["상담 신청", "상담·장부·광고", "전체"] },
        ],
      },
    },
  ],
}
