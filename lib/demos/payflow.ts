import { LayoutDashboard, MessageSquareText, Users } from "lucide-react"
import type { DemoConfig, Row } from "./types"
import { count, newId, now, patch, rows, sum, won } from "./util"

const payBadge = { 입금완료: "green", 미입금: "red" } as const

export const payflow: DemoConfig = {
  slug: "payflow",
  product: "수금 관리",
  org: "(가상) 늘봄 정수기 렌탈",
  user: "수금 담당",
  accent: "#7C2D92",
  guide: [
    "고객 관리에서 '입금 확인'을 누르면 미수금이 줄어듭니다",
    "'미입금 고객에게 문자 발송'을 누르면 아직 안 낸 고객에게만 문자가 나갑니다",
    "발송 이력에서 누구에게 언제 나갔는지 확인할 수 있습니다",
  ],
  badge: (db) => ({ customers: count(db.customers, "status", "미입금") }),
  seed: () => ({
    customers: rows("c", [
      { name: "김영희", phone: "010-****-2381", item: "정수기 렌탈", amount: 29900, dueDay: "매월 5일", status: "입금완료" },
      { name: "(주)다온기획", phone: "010-****-7712", item: "사무실 정수기 2대", amount: 59800, dueDay: "매월 10일", status: "미입금" },
      { name: "이철수", phone: "010-****-0094", item: "비데 렌탈", amount: 19900, dueDay: "매월 10일", status: "미입금" },
      { name: "박미영", phone: "010-****-5520", item: "공기청정기", amount: 34900, dueDay: "매월 15일", status: "입금완료" },
      { name: "최정호", phone: "010-****-3317", item: "정수기 렌탈", amount: 29900, dueDay: "매월 15일", status: "미입금" },
      { name: "한빛어린이집", phone: "010-****-8840", item: "공기청정기 4대", amount: 139600, dueDay: "매월 20일", status: "입금완료" },
    ]),
    sms: rows("s", [
      { time: "지난 달 10일 10:00", name: "이철수", content: "[늘봄] 이번 달 렌탈료 19,900원 입금 부탁드립니다", result: "발송성공" },
    ]),
  }),
  screens: [
    {
      kind: "dashboard",
      id: "home",
      label: "이번 달 수금",
      icon: LayoutDashboard,
      title: "이번 달 수금 현황",
      kpis: (db) => {
        const unpaid = db.customers.filter((r) => r.status === "미입금")
        return [
          { label: "받을 돈", value: won(sum(db.customers, "amount")) },
          { label: "입금 완료", value: won(sum(db.customers.filter((r) => r.status === "입금완료"), "amount")) },
          { label: "미수금", value: won(sum(unpaid, "amount")), alert: unpaid.length > 0 },
          { label: "이번 달 발송 문자", value: String(db.sms.filter((r) => !String(r.time).startsWith("지난 달")).length), unit: "건" },
        ]
      },
      chart: {
        title: "납부일별 청구 금액",
        unit: "원",
        data: (db) => ["매월 5일", "매월 10일", "매월 15일", "매월 20일"].map((d) => ({ label: d.replace("매월 ", ""), value: sum(db.customers.filter((r) => r.dueDay === d), "amount") })),
      },
      list: {
        title: "아직 안 낸 고객",
        table: "customers",
        filter: (r) => r.status === "미입금",
        columns: [
          { key: "name", label: "고객" },
          { key: "amount", label: "금액", format: "won" },
          { key: "status", label: "상태", badge: payBadge },
        ],
      },
    },
    {
      kind: "table",
      id: "customers",
      label: "고객 관리",
      icon: Users,
      title: "정기 수금 고객",
      description: "정해진 시간이 되면 미입금 고객에게만 안내 문자가 자동으로 나갑니다. 여기서는 버튼으로 바로 실행해 봅니다.",
      table: "customers",
      tabs: { key: "status", values: ["미입금", "입금완료"] },
      toolbar: [
        {
          label: "미입금 고객에게 문자 발송",
          run: (db) => {
            const targets = db.customers.filter((r) => r.status === "미입금")
            if (!targets.length) return { db, message: "미입금 고객이 없어 보낼 문자가 없습니다" }
            const sent: Row[] = targets.map((r) => ({
              id: newId(),
              time: now(),
              name: r.name,
              content: `[늘봄] 이번 달 렌탈료 ${Number(r.amount).toLocaleString("ko-KR")}원 입금 부탁드립니다`,
              result: "발송성공",
            }))
            return { db: { ...db, sms: [...sent, ...db.sms] }, message: `미입금 고객 ${targets.length}명에게만 문자를 보냈습니다` }
          },
        },
      ],
      columns: [
        { key: "name", label: "고객", strong: true },
        { key: "phone", label: "연락처" },
        { key: "item", label: "품목" },
        { key: "dueDay", label: "납부일" },
        { key: "amount", label: "월 금액", format: "won" },
        { key: "status", label: "이번 달", badge: payBadge },
      ],
      actions: [
        { label: "입금 확인", when: (r) => r.status === "미입금", run: (r, db) => ({ db: patch(db, "customers", r.id, { status: "입금완료" }), message: `${r.name} ${won(Number(r.amount))} 입금 확인` }) },
      ],
      form: {
        create: "고객 등록",
        edit: true,
        defaults: () => ({ status: "미입금", phone: "010-****-0000" }),
        fields: [
          { key: "name", label: "고객명", required: true },
          { key: "item", label: "품목", type: "select", options: ["정수기 렌탈", "비데 렌탈", "공기청정기"] },
          { key: "amount", label: "월 금액(원)", type: "number", required: true },
          { key: "dueDay", label: "납부일", type: "select", options: ["매월 5일", "매월 10일", "매월 15일", "매월 20일"] },
        ],
      },
    },
    {
      kind: "table",
      id: "sms",
      label: "발송 이력",
      icon: MessageSquareText,
      title: "문자 발송 이력",
      table: "sms",
      columns: [
        { key: "time", label: "발송 시각" },
        { key: "name", label: "받는 사람", strong: true },
        { key: "content", label: "내용" },
        { key: "result", label: "결과", badge: { 발송성공: "green" } },
      ],
    },
  ],
}
