/* (가상) 맛나식품 HACCP 업무관리 시스템, 와이넥스 포트폴리오 체험판
 * 모든 회사·사람·제품·문서 내용은 지어낸 가상 데이터이며, 브라우저 메모리에만 있다.
 */
;(function () {
  "use strict"
  var e = Demo.esc
  var TODAY = Demo.day(0)
  var BRAND = "맛나식품(가상)"
  var ME = "한서진"

  /* ───────── 날짜 도구 ───────── */
  function pad(n) { return String(n).padStart(2, "0") }
  function pd(s) { var a = s.split("-"); return new Date(+a[0], +a[1] - 1, +a[2]) }
  function fd(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) }
  function addD(s, n) { var d = pd(s); d.setDate(d.getDate() + n); return fd(d) }
  function addM(s, n) {
    var d = pd(s), day = d.getDate()
    d.setDate(1); d.setMonth(d.getMonth() + n)
    d.setDate(Math.min(day, new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()))
    return fd(d)
  }
  function diff(a, b) { return Math.round((pd(b) - pd(a)) / 86400000) } // b - a (일)
  function monthStart(s) { return s.slice(0, 8) + "01" }
  function dow(s) { return pd(s).getDay() }
  function nowTime() { var d = new Date(); return pad(d.getHours()) + ":" + pad(d.getMinutes()) }

  /* ───────── 난수 (항상 같은 가상 데이터) ───────── */
  function hash(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) } return h >>> 0 }
  function rng(seed) { var a = seed >>> 0; return function () { a = (a + 0x6d2b79f5) | 0; var t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296 } }
  function pick(r, arr) { return arr[Math.floor(r() * arr.length)] }

  /* ───────── 아이콘 (lucide) ───────── */
  var ICONS = {
    home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    down: '<path d="m6 9 6 6 6-6"/>', up: '<path d="m18 15-6-6-6 6"/>', right: '<path d="m9 18 6-6-6-6"/>', left: '<path d="m15 18-6-6 6-6"/>',
    bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    key: '<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>',
    logout: '<path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>',
    cal: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
    box: '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/>',
    rotate: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
    pencil: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    aup: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>', adown: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    aleft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>', aright: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    check: '<path d="M20 6 9 17l-5-5"/>', x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    save: '<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/>',
    undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',
    redo: '<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"/>',
    pointer: '<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"/>',
    menu: '<path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/>',
    sort: '<path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/>',
    printer: '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
    send: '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
    clip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    keyboard: '<path d="M10 8h.01"/><path d="M12 12h.01"/><path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/><path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/>',
  }
  function ic(name, cls) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="' + (cls || "h-4 w-4") + '" aria-hidden="true">' + ICONS[name] + "</svg>"
  }

  /* ───────── 공통 클래스 (원본 CSS 에 있는 것만) ───────── */
  var C = {
    btn: "inline-flex items-center justify-center gap-1.5 font-medium whitespace-nowrap rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
    pri: "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] active:bg-[var(--color-accent-active)]",
    sec: "border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-fg)] hover:bg-[var(--color-surface-alt)]",
    dan: "bg-[var(--color-danger)] text-white hover:bg-[var(--color-danger-hover)] active:bg-[var(--color-danger-active)]",
    ghost: "text-[var(--color-fg-muted)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-fg)]",
    xs: "h-7 px-2.5 text-xs", sm: "h-8 px-3 text-sm", md: "h-10 px-4 text-sm", lg: "h-11 px-5 text-base",
    input: "w-full rounded-md border bg-[var(--color-surface)] text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] disabled:bg-[var(--color-surface-alt)] disabled:cursor-not-allowed h-10 px-3 text-base border-[var(--color-border-strong)] focus:border-[var(--color-accent)] focus:outline-none",
    inputSm: "w-full rounded-md border bg-[var(--color-surface)] text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] h-8 px-2 text-sm border-[var(--color-border-strong)] focus:border-[var(--color-accent)] focus:outline-none",
    label: "inline-block text-sm font-medium text-[var(--color-fg)]",
    card: "rounded-md border border-[var(--color-border)] bg-[var(--color-surface)]",
    th: "px-3 py-2.5 text-left text-xs font-semibold text-[var(--color-fg)] whitespace-nowrap",
    td: "px-3 py-2.5 text-sm text-[var(--color-fg)]",
    secHead: "flex items-center gap-2 border-b border-[var(--color-divider)] border-l-4 border-l-[var(--color-accent)] bg-[var(--color-surface-alt)] px-4 py-3 text-sm font-semibold text-[var(--color-fg)]",
  }
  function btn(kind, size, inner, attrs) {
    return '<button type="button" class="' + C.btn + " " + C[kind] + " " + C[size] + '" ' + (attrs || "") + ">" + inner + "</button>"
  }
  var REQ = '<span class="ml-0.5 text-[var(--color-danger)]" aria-label="필수">*</span>'
  function field(label, inner, req, cls) {
    return '<div class="space-y-1.5 ' + (cls || "") + '"><label class="' + C.label + '">' + e(label) + (req ? REQ : "") + "</label>" + inner + "</div>"
  }
  function selectBox(attrs, opts, val, small) {
    return '<div class="relative"><select ' + attrs + ' class="' + (small ? C.inputSm : C.input) + ' appearance-none pr-10 cursor-pointer">' +
      opts.map(function (o) { var v = Array.isArray(o) ? o[0] : o, t = Array.isArray(o) ? o[1] : o; return '<option value="' + e(v) + '"' + (String(v) === String(val) ? " selected" : "") + ">" + e(t) + "</option>" }).join("") +
      "</select>" + ic("down", "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-fg-muted)]") + "</div>"
  }

  var ST = {
    "예정": "border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-fg-muted)]",
    "미작성": "bg-[var(--color-status-draft-bg)] text-[var(--color-status-draft-fg)]",
    "작성중": "bg-[var(--color-status-writing-bg)] text-[var(--color-status-writing-fg)]",
    "승인대기": "bg-[var(--color-status-pending-bg)] text-[var(--color-status-pending-fg)]",
    "완료": "bg-[var(--color-status-done-bg)] text-[var(--color-status-done-fg)]",
    "반려": "bg-[var(--color-status-reject-bg)] text-[var(--color-status-reject-fg)]",
    "만료": "bg-[var(--color-status-reject-bg)] text-[var(--color-status-reject-fg)]",
    "만료임박": "bg-[var(--color-status-writing-bg)] text-[var(--color-status-writing-fg)]",
    "정상": "bg-[var(--color-status-done-bg)] text-[var(--color-status-done-fg)]",
  }
  function badge(s, text) {
    return '<span class="inline-flex items-center rounded-sm px-1.5 py-0.5 text-[11px] font-medium whitespace-nowrap ' + (ST[s] || ST["미작성"]) + '">' + e(text || s) + "</span>"
  }

  /* ───────── 가상 기초 데이터 ───────── */
  var CYCLES = [
    ["daily", "일일"], ["weekly", "주간"], ["monthly", "월간"], ["quarter", "분기"], ["half", "반기"], ["yearly", "연간"],
    ["in", "입고시"], ["recall", "회수시"], ["need", "필요시"],
  ]
  var CY = {}; CYCLES.forEach(function (c) { CY[c[0]] = c[1] })
  var EVENT = { in: 1, recall: 1, need: 1 }
  var CYCLE_TEXT = { daily: "매일", weekly: "매주", monthly: "매월", quarter: "분기 1회", half: "반기 1회", yearly: "연 1회", in: "입고 시", recall: "회수 시", need: "필요 시" }
  var WRITERS = ["관리자 작성", "작업장 작성", "외포장 작성"]
  var DEPTS = ["품질보증팀", "가공1팀", "포장팀", "물류팀", "시설팀"]
  var PRODUCT_NAMES = ["맛나 떡갈비 1kg", "맛나 수제 함박 500g", "맛나 양념 불고기 1kg", "맛나 미니 동그랑땡 300g", "맛나 닭갈비 양념육 1kg"]
  var STAFF = [
    { no: "M-001", name: "한서진", dept: "품질보증팀", pos: "팀장 (HACCP 관리자)", join: "2019-03-04", tel: "010-0000-1101" },
    { no: "M-002", name: "오민규", dept: "품질보증팀", pos: "대리", join: "2020-07-13", tel: "010-0000-1102" },
    { no: "M-003", name: "류지아", dept: "가공1팀", pos: "반장", join: "2018-11-01", tel: "010-0000-1103" },
    { no: "M-004", name: "배성훈", dept: "가공1팀", pos: "사원", join: "2022-02-21", tel: "010-0000-1104" },
    { no: "M-005", name: "문채원", dept: "포장팀", pos: "반장", join: "2021-05-10", tel: "010-0000-1105" },
    { no: "M-006", name: "권도윤", dept: "물류팀", pos: "주임", join: "2020-01-06", tel: "010-0000-1106" },
    { no: "M-007", name: "임하늘", dept: "가공1팀", pos: "사원", join: "2023-09-04", tel: "010-0000-1107" },
    { no: "M-008", name: "서예린", dept: "포장팀", pos: "사원", join: "2024-03-18", tel: "010-0000-1108" },
    { no: "M-009", name: "장우석", dept: "시설팀", pos: "과장", join: "2017-06-12", tel: "010-0000-1109" },
    { no: "M-010", name: "노은별", dept: "가공1팀", pos: "사원", join: "2025-01-02", tel: "010-0000-1110" },
  ]
  var WRITER_POOL = { "관리자 작성": ["한서진", "오민규"], "작업장 작성": ["류지아", "배성훈", "임하늘"], "외포장 작성": ["문채원", "서예린"] }

  /* ───────── 종이 양식 정의 (양식 편집기의 배경이 되는 "원래 쓰던 서류") ───────── */
  var SPECS = {
    heat: {
      title: "가열공정 CCP-1B 점검일지", sub: "(HACCP 관리기준)",
      info: [["작성일", "@date", "담당부서", "가공1팀"], ["점검기준", "적합(○) / 부적합(×) · 부적합 시 개선조치", "주    기", "배치당 1회"]],
      crit: [["위해요소", "병원성 미생물(살모넬라·리스테리아 등) 생존"], ["한계기준", "가열 후 제품 중심온도 75℃ 이상, 1분 이상 지속"], ["점검방법", "배치 종료 시 탐침온도계로 제품 3개의 중심부 온도 측정"], ["검    증", "일상검증 : 매 배치 기록 확인 / 정기검증 : 월 1회 온도계 검교정"]],
      grid: {
        cols: [{ h: "회차", w: 0.6, t: "label" }, { h: "시간", w: 1, t: "time" }, { h: "제품명", w: 2, t: "select", opts: PRODUCT_NAMES },
          { h: "중심온도(℃)", sub: ["1", "2", "3"], w: 0.75, t: "number", gen: [76, 91, 1] }, { h: "가열시간(분)", w: 1, t: "number", gen: [8, 14, 0] },
          { h: "판정", w: 0.9, t: "formula", formula: { op: "minGte", cols: [3, 4, 5], v: 75 } }, { h: "확인", w: 0.9, t: "sign" }],
        rows: ["1차", "2차", "3차", "4차", "5차", "6차", "7차", "8차", "9차", "10차"].map(function (x) { return [x] }), rh: 28,
      },
      foot: [["특이사항", "@text", 44]],
    },
    hygiene: {
      title: "일반위생관리 점검표", sub: "(선행요건 관리기준)",
      info: [["작성일", "@date", "점 검 자", "@text"]],
      crit: [["점검기준", "적합(○) / 부적합(×), 부적합 항목은 하단 개선조치 란에 기록"]],
      grid: {
        cols: [{ h: "구분", w: 0.9, t: "label" }, { h: "점검 내용", w: 3.6, t: "label", al: "l" }, { h: "작업 전", sub: ["적", "부"], w: 0.5, t: "check" }, { h: "작업 후", sub: ["적", "부"], w: 0.5, t: "check" }, { h: "비고", w: 1.3, t: "text" }],
        rows: [["작업장", "바닥·배수로에 물고임과 잔재물이 없는가"], ["작업장", "작업대·칼·도마를 세척 후 소독하였는가"], ["작업장", "출입구 손세척기와 소독액이 비치되어 있는가"],
          ["개인위생", "위생복·위생모·마스크를 바르게 착용하였는가"], ["개인위생", "장신구를 착용하지 않고 손톱이 정리되었는가"], ["보관", "냉장고 안 원료와 완제품을 구분해 보관하는가"],
          ["보관", "바닥에서 15cm 이상 띄워 적재하였는가"], ["방충", "작업장 안에 해충 흔적이 없는가"], ["폐기물", "폐기물 용기 덮개를 닫고 비웠는가"]],
        rh: 28,
      },
      foot: [["개선조치", "@text", 48]],
    },
    weight: {
      title: "포장 중량 점검표", sub: "(외포장 공정)",
      info: [["작성일", "@date", "담당부서", "포장팀"], ["판정기준", "표시중량 대비 -2% ~ +5% 이내 적합", "주    기", "2시간 1회"]],
      grid: {
        cols: [{ h: "회차", w: 0.6, t: "label" }, { h: "시간", w: 1, t: "time" }, { h: "제품명", w: 2.1, t: "select", opts: PRODUCT_NAMES }, { h: "표시중량(g)", w: 1.1, t: "number", gen: [500, 500, 0] },
          { h: "실중량(g)", w: 1.1, t: "number", gen: [497, 518, 0] }, { h: "차이(g)", w: 0.9, t: "formula", formula: { op: "diff", cols: [3, 4] } },
          { h: "판정", w: 0.9, t: "formula", formula: { op: "rangePct", cols: [3, 4], lo: -2, hi: 5 } }, { h: "확인", w: 0.9, t: "sign" }],
        rows: ["1회", "2회", "3회", "4회", "5회", "6회", "7회", "8회"].map(function (x) { return [x] }), rh: 30,
      },
      foot: [["특이사항", "@text", 44]],
    },
    pest: {
      title: "방충·방서 점검표", sub: "(주간 점검)",
      info: [["점검일", "@date", "점 검 자", "@text"]],
      crit: [["관리기준", "포충등 주 10마리 이하, 쥐덫 포획 0건, 초과 시 원인 조사 후 방제 실시"]],
      grid: {
        cols: [{ h: "구분", w: 0.9, t: "label" }, { h: "설치 위치", w: 2, t: "label", al: "l" }, { h: "포획수", w: 0.9, t: "number", gen: [0, 6, 0] }, { h: "이상 유무", sub: ["적", "부"], w: 0.55, t: "check" }, { h: "조치 내용", w: 2.4, t: "text" }],
        rows: [["포충등", "원료 입고실 출입구"], ["포충등", "전처리실"], ["포충등", "가열실"], ["포충등", "포장실"], ["쥐덫", "창고 외벽 A"], ["쥐덫", "창고 외벽 B"], ["쥐덫", "폐기물 보관장"], ["쥐덫", "부자재 창고"]],
        rh: 30,
      },
    },
    water: {
      title: "용수 관리 점검표", sub: "(월간 점검)",
      info: [["점검일", "@date", "점 검 자", "@text"]],
      crit: [["관리기준", "유리잔류염소 0.1 ~ 4.0 mg/L, 탁도 0.5 NTU 이하"]],
      grid: {
        cols: [{ h: "채수 위치", w: 2, t: "label", al: "l" }, { h: "잔류염소(mg/L)", w: 1.2, t: "number", gen: [0.2, 0.8, 2] }, { h: "탁도(NTU)", w: 1, t: "number", gen: [0.05, 0.3, 2] }, { h: "판정", sub: ["적", "부"], w: 0.55, t: "check" }, { h: "비고", w: 1.6, t: "text" }],
        rows: [["전처리실 수전"], ["가열실 수전"], ["포장실 손세척대"], ["세척실 고압세척기"], ["저수조 출구"]], rh: 32,
      },
      foot: [["특이사항", "@text", 44]],
    },
    calib: {
      title: "계측기기 검교정 점검표", sub: "(분기 점검)",
      info: [["점검일", "@date", "점 검 자", "@text"]],
      grid: {
        cols: [{ h: "기기명", w: 1.6, t: "label" }, { h: "관리번호", w: 1, t: "label" }, { h: "표준값", w: 1, t: "label" }, { h: "측정값", w: 1, t: "text", genList: ["100.2℃", "99.7℃", "1,001g", "19.99kg", "0.4℃", "-17.6℃"] }, { h: "허용 오차", w: 1, t: "label" }, { h: "판정", sub: ["적", "부"], w: 0.55, t: "check" }],
        rows: [["탐침온도계", "TM-01", "100.0℃", "±1.0℃"], ["탐침온도계", "TM-02", "100.0℃", "±1.0℃"], ["전자저울(소)", "SC-01", "1,000g", "±2g"], ["전자저울(대)", "SC-02", "20.00kg", "±20g"], ["냉장고 온도계", "RF-01", "0.0℃", "±1.0℃"], ["냉동고 온도계", "FZ-01", "-18.0℃", "±1.0℃"]],
        rh: 32,
      },
      foot: [["조치 사항", "@text", 48]],
    },
    edu: {
      title: "HACCP 교육훈련 기록부", sub: "(반기 교육)",
      info: [["교육일", "@date", "교육장소", "@text"], ["교육내용", "@text"]],
      grid: {
        cols: [{ h: "No", w: 0.5, t: "label" }, { h: "성명", w: 1.3, t: "text", genList: ["류지아", "배성훈", "문채원", "권도윤", "임하늘", "서예린", "장우석", "노은별"] }, { h: "부서", w: 1.3, t: "text", genList: ["가공1팀", "가공1팀", "포장팀", "물류팀", "가공1팀", "포장팀", "시설팀", "가공1팀"] }, { h: "교육시간", w: 1, t: "text", genList: ["2시간", "2시간", "2시간", "2시간", "2시간", "2시간", "2시간", "2시간"] }, { h: "서명", w: 1.2, t: "sign" }],
        rows: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(function (x) { return [x] }), rh: 28,
      },
    },
    verify: {
      title: "HACCP 검증 점검표", sub: "(연간 검증)",
      info: [["검증일", "@date", "검 증 자", "@text"]],
      grid: {
        cols: [{ h: "검증 항목", w: 3.6, t: "label", al: "l" }, { h: "결과", sub: ["적", "부"], w: 0.55, t: "check" }, { h: "확인 근거", w: 2, t: "text" }],
        rows: [["위해요소 분석 결과가 현재 공정과 일치하는가"], ["CCP 한계기준에 과학적 근거가 있는가"], ["모니터링 기록이 빠짐없이 작성되었는가"], ["개선조치가 기준대로 이행되었는가"], ["계측기기 검교정이 주기대로 실시되었는가"], ["교육훈련이 계획대로 실시되었는가"], ["선행요건 관리기준서가 최신본인가"]],
        rh: 32,
      },
      foot: [["종합 의견", "@text", 56]],
    },
    receive: {
      title: "원부재료 입고 검사일지", sub: "(입고 시 작성)",
      info: [["입고일", "@date", "검 사 자", "@text"]],
      grid: {
        cols: [{ h: "No", w: 0.45, t: "label" }, { h: "품명", w: 1.5, t: "text", genList: ["돼지고기 앞다리", "양파", "진간장", "백설탕", "진공 포장필름", "대파"] }, { h: "공급업체", w: 1.5, t: "select", opts: ["한들축산(가상)", "푸른농산(가상)", "다온양념(가상)", "새봄포장(가상)"] }, { h: "수량", w: 0.9, t: "text", genList: ["320kg", "80kg", "40L", "60kg", "20롤", "30kg"] },
          { h: "품온(℃)", w: 0.8, t: "number", gen: [0.5, 4.5, 1] }, { h: "포장상태", sub: ["적", "부"], w: 0.5, t: "check" }, { h: "판정", w: 0.9, t: "select", opts: ["합격", "불합격", "보류"] }],
        rows: ["1", "2", "3", "4", "5", "6", "7", "8"].map(function (x) { return [x] }), rh: 30,
      },
      foot: [["특이사항", "@text", 44]],
    },
    recall: {
      title: "회수 제품 처리 기록부", sub: "(회수 발생 시 작성)",
      info: [["발생일", "@date", "담 당 자", "@text"], ["회수사유", "@text"]],
      grid: {
        cols: [{ h: "No", w: 0.5, t: "label" }, { h: "제품명", w: 2, t: "select", opts: PRODUCT_NAMES }, { h: "제조일자", w: 1.3, t: "date" }, { h: "회수수량", w: 1, t: "text", genList: ["24개", "12개"] }, { h: "처리방법", w: 1.2, t: "select", opts: ["폐기", "재작업", "반품"] }, { h: "확인", w: 0.9, t: "sign" }],
        rows: ["1", "2", "3", "4", "5", "6"].map(function (x) { return [x] }), rh: 30,
      },
      foot: [["재발 방지", "@text", 56]],
    },
    corrective: {
      title: "개선조치 기록부", sub: "(한계기준 이탈 시)",
      info: [["발생일", "@date", "발 견 자", "@text"]],
      foot: [["이탈 내용", "@text", 64], ["원인 분석", "@text", 64], ["개선조치", "@text", 64], ["재발 방지", "@text", 64], ["효과 확인", "@text", 44]],
    },
    blank: {
      title: "", sub: "",
      info: [["작성일", "@date", "작 성 자", "@text"]],
      grid: { cols: [{ h: "항목", w: 2, t: "none" }, { h: "내용", w: 3, t: "none" }, { h: "결과", w: 1, t: "none" }, { h: "비고", w: 1.5, t: "none" }], rows: "123456789012".split("").map(function () { return [] }), rh: 30 },
    },
  }

  var PW = 680 // 종이 그리기 폭(px)
  function buildPaper(spec, tpl) {
    var cells = [], fields = [], groups = []
    function cell(x, y, w, h, t, o) { var c = { x: Math.round(x), y: Math.round(y), w: Math.round(x + w) - Math.round(x), h: Math.round(y + h) - Math.round(y), t: t || "" }; for (var k in o || {}) c[k] = o[k]; cells.push(c) }
    function fld(f) { fields.push(f); if (groups.indexOf(f.group) < 0) groups.push(f.group) }
    var TH = 100, lw = 118, rh4 = TH / 4
    ;["문서번호", tpl.code, "관리주기", CYCLE_TEXT[tpl.cycle]].forEach(function (t, i) { cell(0, i * rh4, lw, rh4, t, { bg: i % 2 === 0, fs: 11 }) })
    var sw = 62, lab = 24, rx = PW - lab - sw * 3
    cell(lw, 0, rx - lw, TH, "", { title: spec.title || tpl.name, sub: spec.sub })
    cell(rx, 0, lab, TH, "결\n재", { fs: 12 })
    ;["담당", "검토", "승인"].forEach(function (t, i) {
      var x = rx + lab + i * sw
      cell(x, 0, sw, 22, t, { bg: 1, fs: 12 }); cell(x, 22, sw, TH - 22, "")
      fld({ id: "sign_" + i, type: "sign", label: "결재-" + t, x: x + 4, y: 26, w: sw - 8, h: TH - 30, group: "결재" })
    })
    var y = TH + 8, LW = 100
    ;(spec.info || []).forEach(function (row, ri) {
      var h = 26, n = row.length / 2, segW = PW / n
      for (var k = 0; k < n; k++) {
        var x0 = k * segW, lbl = row[k * 2], val = row[k * 2 + 1]
        cell(x0, y, LW, h, lbl, { bg: 1, fs: 12 })
        cell(x0 + LW, y, segW - LW, h, val.charAt(0) === "@" ? "" : val, { fs: 12 })
        if (val === "@date") fld({ id: "info_date", type: "date", label: lbl, x: x0 + LW + 3, y: y + 3, w: Math.min(150, segW - LW - 6), h: h - 6, group: "기본 정보", auto: 1, req: 1 })
        else if (val === "@text") fld({ id: "info_" + ri + "_" + k, type: "text", label: lbl.replace(/\s+/g, ""), x: x0 + LW + 3, y: y + 3, w: segW - LW - 6, h: h - 6, group: "기본 정보" })
      }
      y += h
    })
    ;(spec.crit || []).forEach(function (row) { cell(0, y, LW, 24, row[0], { bg: 1, fs: 12 }); cell(LW, y, PW - LW, 24, row[1], { fs: 12, al: "l" }); y += 24 })
    if (spec.grid) {
      y += 8
      var g = spec.grid, leaves = []
      g.cols.forEach(function (c, ci) { if (c.sub) c.sub.forEach(function (s, si) { leaves.push({ c: c, ci: ci, sub: s }) }); else leaves.push({ c: c, ci: ci }) })
      var tw = leaves.reduce(function (s, l) { return s + l.c.w }, 0), sc = PW / tw, xs = [], acc = 0
      leaves.forEach(function (l) { xs.push(acc); acc += l.c.w * sc })
      xs.push(PW)
      var hasSub = g.cols.some(function (c) { return c.sub }), hh = 24
      g.cols.forEach(function (c, ci) {
        var idx = []; leaves.forEach(function (l, k) { if (l.ci === ci) idx.push(k) })
        var x = xs[idx[0]], w = xs[idx[idx.length - 1] + 1] - x
        if (c.sub) {
          cell(x, y, w, hh, c.h, { bg: 1, fs: 12 })
          idx.forEach(function (k) { cell(xs[k], y + hh, xs[k + 1] - xs[k], hh, leaves[k].sub, { bg: 1, fs: 12 }) })
        } else cell(x, y, w, hasSub ? hh * 2 : hh, c.h, { bg: 1, fs: 12 })
      })
      y += hasSub ? hh * 2 : hh
      var rh = g.rh || 28
      g.rows.forEach(function (row, ri) {
        var li = 0, first = row[0] || "", last = row[row.length - 1] || ""
        var grp = (ri + 1) + "행" + (first && first.length <= 4 && first !== String(ri + 1) ? " · " + first : last && last !== first ? " · " + last.slice(0, 8) : "")
        if (/^\d+차$|^\d+회$/.test(first)) grp = first
        leaves.forEach(function (l, k) {
          var x = xs[k], w = xs[k + 1] - xs[k], c = l.c
          if (c.t === "label") { cell(x, y, w, rh, row[li++] || "", { fs: 12, al: c.al }); return }
          cell(x, y, w, rh, "")
          if (c.t === "none") return
          var f = { id: "g" + ri + "_" + k, type: c.t, label: (first || ri + 1) + " " + c.h + (l.sub ? "-" + l.sub : ""), x: Math.round(x) + 3, y: Math.round(y) + 3, w: Math.round(x + w) - Math.round(x) - 6, h: rh - 6, group: grp }
          if (c.opts) f.opts = c.opts.slice()
          if (c.gen) f.gen = c.gen
          if (c.genList) f.genVal = c.genList[ri]
          if (c.t === "check" && c.sub) { f.ex = "g" + ri + "_c" + l.ci; f.ok = l.sub === "적" }
          if (c.formula) f.formula = { op: c.formula.op, refs: c.formula.cols.map(function (cc) { return "g" + ri + "_" + cc }), v: c.formula.v, lo: c.formula.lo, hi: c.formula.hi }
          fld(f)
        })
        y += rh
      })
    }
    if (spec.foot) {
      y += spec.grid ? 0 : 8
      spec.foot.forEach(function (row, i) {
        var h = row[2] || 30
        cell(0, y, LW, h, row[0], { bg: 1, fs: 12 }); cell(LW, y, PW - LW, h, "")
        fld({ id: "foot_" + i, type: "text", label: row[0].replace(/\s+/g, ""), x: LW + 3, y: y + 3, w: PW - LW - 6, h: h - 6, group: "기타" })
        y += h
      })
    }
    y += 6
    cell(0, y, PW, 16, tpl.code + "  ·  " + BRAND + " 양식", { fs: 10, al: "r", plain: 1 })
    y += 16
    return { cells: cells, fields: fields, groups: groups, H: y }
  }

  /* ───────── 상태 ───────── */
  var S = {
    templates: [], records: [], reports: [], health: [], edu: [], partners: [], products: [], recipes: {}, batches: [], users: [],
    staff: STAFF.map(function (s) { return Object.assign({ active: true }, s) }),
    company: { name: "맛나식품 주식회사(가상)", ceo: "김가온", biz: "000-00-00000", haccp: "제0000-가상-000호", tel: "000-000-0000", fax: "000-000-0001", addr: "가상도 맛나시 공장로 12 (가상산업단지)", items: "식육가공품(양념육·분쇄가공육)", since: "2016-04-01" },
    notif: [],
    ui: { open: {}, mobileNav: false, bell: false, modal: null, cal: monthStart(TODAY), calFilter: "all", calSel: null, list: {}, files: {}, ed: null, approvalTab: "wait", rep: null, cert: {}, hform: {}, eform: {}, batch: null, recipeSel: null },
  }
  var seq = 1
  function nid(p) { return p + (seq++) }

  var TPL_DEFS = [
    ["tpl-heat", "MN-HA-201", "CCP-1B 가열공정 모니터링일지", "daily", "관리자 작성", "품질보증팀", "가공1팀", "heat"],
    ["tpl-hyg", "MN-PP-311", "일반위생관리 점검표", "daily", "작업장 작성", "품질보증팀", "가공1팀", "hygiene"],
    ["tpl-wt", "MN-PP-324", "포장 중량 점검표", "daily", "외포장 작성", "품질보증팀", "포장팀", "weight"],
    ["tpl-pest", "MN-PP-331", "방충·방서 점검표", "weekly", "관리자 작성", "품질보증팀", "품질보증팀", "pest"],
    ["tpl-water", "MN-PP-335", "용수 관리 점검표", "monthly", "관리자 작성", "품질보증팀", "시설팀", "water"],
    ["tpl-calib", "MN-PP-342", "계측기기 검교정 점검표", "quarter", "관리자 작성", "품질보증팀", "품질보증팀", "calib"],
    ["tpl-edu", "MN-PP-350", "HACCP 교육훈련 기록부", "half", "관리자 작성", "품질보증팀", "품질보증팀", "edu"],
    ["tpl-verify", "MN-HA-290", "HACCP 검증 점검표", "yearly", "관리자 작성", "품질보증팀", "품질보증팀", "verify"],
    ["tpl-recv", "MN-PP-361", "원부재료 입고 검사일지", "in", "작업장 작성", "품질보증팀", "물류팀", "receive"],
    ["tpl-recall", "MN-PP-372", "회수 제품 처리 기록부", "recall", "관리자 작성", "품질보증팀", "품질보증팀", "recall"],
    ["tpl-ca", "MN-HA-280", "개선조치 기록부", "need", "관리자 작성", "품질보증팀", "품질보증팀", "corrective"],
  ]
  function makeTemplate(d, created) {
    var tpl = { id: d[0], code: d[1], name: d[2], cycle: d[3], writer: d[4], mgr: d[5], dept: d[6], spec: d[7], version: 1, created: created, updated: created, file: d[1] + "_" + d[2].replace(/\s+/g, "") + ".pdf" }
    var p = buildPaper(SPECS[d[7]], tpl)
    tpl.paper = p.cells; tpl.H = p.H; tpl.fields = p.fields; tpl.groups = p.groups
    return tpl
  }
  function T(id) { for (var i = 0; i < S.templates.length; i++) if (S.templates[i].id === id) return S.templates[i]; return null }
  function REC(id) { for (var i = 0; i < S.records.length; i++) if (S.records[i].id === id) return S.records[i]; return null }

  function isScheduled(tpl, d) {
    var dt = pd(d), m = dt.getMonth(), day = dt.getDate(), w = dt.getDay()
    if (tpl.created && d < tpl.created) return false
    switch (tpl.cycle) {
      case "daily": return w !== 0
      case "weekly": return w === 1
      case "monthly": return day === 1
      case "quarter": return day === 1 && m % 3 === 0
      case "half": return day === 1 && (m === 0 || m === 6)
      case "yearly": return day === 1 && m === 0
    }
    return false
  }
  function genStart(tpl) {
    if (tpl.cycle === "daily") return addM(monthStart(TODAY), -2)
    if (tpl.cycle === "weekly" || tpl.cycle === "monthly") return addM(monthStart(TODAY), -4)
    return (pd(TODAY).getFullYear() - 1) + "-01-01"
  }
  function pickStatus(r, age, periodic) {
    var x = r()
    if (age <= 0) return x < 0.55 ? "미작성" : "작성중"
    if (!periodic && age < 40) return x < 0.35 ? "미작성" : x < 0.6 ? "작성중" : x < 0.8 ? "승인대기" : "완료"
    if (age <= 3) return x < 0.25 ? "미작성" : x < 0.55 ? "작성중" : x < 0.8 ? "승인대기" : "완료"
    if (age <= 10) return x < 0.12 ? "미작성" : x < 0.2 ? "작성중" : x < 0.28 ? "승인대기" : x < 0.33 ? "반려" : "완료"
    return x < 0.05 ? "미작성" : x < 0.07 ? "반려" : "완료"
  }
  function newRecord(tpl, date, status, writer, r) {
    var rec = { id: nid("r"), tplId: tpl.id, date: date, created: date, status: status, writer: writer || pick(r || Math.random, WRITER_POOL[tpl.writer] || [ME]), title: "-", values: null, history: [], reject: "" }
    if (status !== "미작성") rec.history.push({ at: date + " " + "17:" + pad(10 + (hash(rec.id) % 40)), who: rec.writer, act: "작성" })
    if (status === "승인대기" || status === "완료" || status === "반려") rec.history.push({ at: date + " 17:55", who: rec.writer, act: "결재 요청" })
    if (status === "완료") rec.history.push({ at: addD(date, 1) + " 09:20", who: ME, act: "승인" })
    if (status === "반려") { rec.reject = "측정값 일부가 비어 있습니다. 확인 후 다시 올려 주세요."; rec.history.push({ at: addD(date, 1) + " 09:20", who: ME, act: "반려", note: rec.reject }) }
    S.records.push(rec)
    return rec
  }
  function seed() {
    TPL_DEFS.forEach(function (d) { S.templates.push(makeTemplate(d, null)) })
    S.templates.forEach(function (tpl) {
      var r = rng(hash(tpl.id))
      if (EVENT[tpl.cycle]) {
        var n = tpl.cycle === "in" ? 7 : tpl.cycle === "recall" ? 1 : 2
        for (var i = 0; i < n; i++) {
          var off = tpl.cycle === "in" ? [1, 3, 6, 9, 14, 20, 27][i] : tpl.cycle === "recall" ? 18 : [4, 23][i]
          var st = off <= 1 ? "승인대기" : off <= 3 ? "작성중" : "완료"
          newRecord(tpl, addD(TODAY, -off), st, null, r)
        }
        return
      }
      for (var d = genStart(tpl); d <= TODAY; d = addD(d, 1)) {
        if (!isScheduled(tpl, d)) continue
        var age = diff(d, TODAY)
        newRecord(tpl, d, pickStatus(r, age, tpl.cycle === "daily" || tpl.cycle === "weekly"), null, r)
      }
    })
    S.records.sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0 })

    S.notif = [
      ["j_daily", "일일 일지", "일"], ["j_weekly", "주간 일지", "주"], ["j_monthly", "월간 일지", "월"], ["j_quarter", "분기 일지", "분기"], ["j_half", "반기 일지", "반기"], ["j_yearly", "연간 일지", "1년"],
      ["rep_self", "자가품질검사 결과", "분기"], ["rep_raw", "원재료 시험성적서", "반기"], ["rep_pack", "포장재 시험성적서", "1년"], ["rep_final", "완제품 검사성적서", "1년"], ["rep_water", "수질검사 성적서", "1년"],
      ["health", "보건증", "1년"], ["edu", "HACCP 교육수료증", "1년"], ["pestctl", "방역 위탁점검 확인서", "월"],
    ].map(function (n) { return { key: n[0], name: n[1], cycle: n[2], start: addD(TODAY, -140), on: true, note: "" } })

    var orgs = { a: "가나식품분석센터(가상)", b: "바른시험연구원(가상)", c: "한빛수질검사소(가상)" }
    ;[
      ["자가품질검사", orgs.a, "양념육", "맛나 양념 불고기 1kg", -100, "대장균군·세균수 적합"],
      ["자가품질검사", orgs.a, "분쇄가공육", "맛나 떡갈비 1kg", -72, "대장균·보존료 적합"],
      ["자가품질검사", orgs.a, "분쇄가공육", "맛나 수제 함박 500g", -20, "전 항목 적합"],
      ["원재료 시험성적서", "한들축산(가상)", "식육", "돼지고기 앞다리", -160, "항생물질 불검출"],
      ["원재료 시험성적서", "푸른농산(가상)", "농산물", "양파", -40, "잔류농약 적합"],
      ["포장재 시험성적서", "새봄포장(가상)", "포장재", "진공 포장필름 PE/PA", -380, "용출시험 적합"],
      ["완제품 검사성적서", orgs.b, "양념육", "맛나 닭갈비 양념육 1kg", -200, "전 항목 적합"],
      ["수질검사 성적서", orgs.c, "용수", "지하수 (저수조)", -352, "먹는물 수질기준 적합"],
      ["완제품 검사성적서", orgs.b, "분쇄가공육", "맛나 미니 동그랑땡 300g", -30, "전 항목 적합"],
    ].forEach(function (x, i) {
      S.reports.push({ id: nid("rp"), kind: x[0], org: x[1], ptype: x[2], pname: x[3], issue: addD(TODAY, x[4]), etc: "", content: x[5], files: ["성적서_" + (i + 1) + ".pdf"], renewed: 0 })
    })
    var hOff = [-20, -340, -372, -100, -200, -355, -50, -300, -10, -405]
    S.staff.forEach(function (s, i) {
      var iss = addD(TODAY, hOff[i])
      S.health.push({ id: nid("h"), name: s.name, no: s.no, dept: s.dept, issue: iss, expire: addM(iss, 12), note: "", files: ["보건증_" + s.no + ".jpg"], renewed: 0 })
    })
    var eOff = [-60, -350, -120, -390, -30, -250, -358, -90]
    S.staff.slice(0, 8).forEach(function (s, i) {
      var iss = addD(TODAY, eOff[i])
      S.edu.push({ id: nid("ed"), name: s.name, no: s.no, dept: s.dept, course: i % 3 === 0 ? "HACCP 팀장 정기교육" : "HACCP 종사자 위생교육", org: "가상위생교육원", issue: iss, expire: addM(iss, 12), note: "", files: ["수료증_" + s.no + ".pdf"], renewed: 0 })
    })
    S.partners = [
      { name: "한들축산(가상)", type: "원료 공급", ceo: "박가람", biz: "000-00-00011", tel: "000-0000-0011", items: "돼지고기, 소고기", haccp: "인증" },
      { name: "푸른농산(가상)", type: "원료 공급", ceo: "최다솜", biz: "000-00-00012", tel: "000-0000-0012", items: "양파, 대파, 당근", haccp: "해당 없음" },
      { name: "다온양념(가상)", type: "부원료 공급", ceo: "정나래", biz: "000-00-00013", tel: "000-0000-0013", items: "간장, 고추장, 설탕", haccp: "인증" },
      { name: "새봄포장(가상)", type: "포장재 공급", ceo: "윤바다", biz: "000-00-00014", tel: "000-0000-0014", items: "진공 필름, 외박스", haccp: "해당 없음" },
      { name: "한빛수질검사소(가상)", type: "검사기관", ceo: "강보람", biz: "000-00-00015", tel: "000-0000-0015", items: "수질검사", haccp: "-" },
      { name: "든든방역(가상)", type: "방역 위탁", ceo: "송하람", biz: "000-00-00016", tel: "000-0000-0016", items: "월간 방역·방서", haccp: "-" },
    ]
    S.products = [
      { id: "P-101", name: "맛나 떡갈비 1kg", type: "분쇄가공육", spec: "1kg", store: "냉동 -18℃ 이하", shelf: "제조일로부터 12개월", use: true },
      { id: "P-102", name: "맛나 수제 함박 500g", type: "분쇄가공육", spec: "500g (100g×5)", store: "냉동 -18℃ 이하", shelf: "제조일로부터 12개월", use: true },
      { id: "P-103", name: "맛나 양념 불고기 1kg", type: "양념육", spec: "1kg", store: "냉장 0~10℃", shelf: "제조일로부터 15일", use: true },
      { id: "P-104", name: "맛나 미니 동그랑땡 300g", type: "분쇄가공육", spec: "300g", store: "냉동 -18℃ 이하", shelf: "제조일로부터 9개월", use: true },
      { id: "P-105", name: "맛나 닭갈비 양념육 1kg", type: "양념육", spec: "1kg", store: "냉장 0~10℃", shelf: "제조일로부터 12일", use: true },
    ]
    S.recipes = {
      "P-101": [["돼지고기 앞다리", 45], ["소고기 우둔", 20], ["양파", 12], ["대파", 5], ["진간장", 6], ["백설탕", 4], ["빵가루", 5], ["다진 마늘", 3]],
      "P-102": [["돼지고기 앞다리", 40], ["소고기 우둔", 25], ["양파", 15], ["빵가루", 8], ["전란액", 7], ["소금·향신료", 5]],
      "P-103": [["소고기 앞다리", 65], ["진간장", 12], ["배농축액", 8], ["백설탕", 7], ["양파", 5], ["다진 마늘", 3]],
      "P-104": [["돼지고기 앞다리", 50], ["두부", 20], ["양파", 10], ["부침가루", 9], ["당근", 8], ["소금·후추", 3]],
      "P-105": [["닭다리살", 72], ["고추장", 12], ["진간장", 5], ["백설탕", 5], ["다진 마늘", 3], ["고춧가루", 3]],
    }
    Object.keys(S.recipes).forEach(function (k) { S.recipes[k] = S.recipes[k].map(function (x) { return { name: x[0], pct: x[1] } }) })
    S.batches = [
      { id: nid("b"), date: addD(TODAY, -1), pid: "P-101", total: 300, by: "류지아" },
      { id: nid("b"), date: addD(TODAY, -2), pid: "P-103", total: 450, by: "배성훈" },
      { id: nid("b"), date: addD(TODAY, -3), pid: "P-105", total: 200, by: "임하늘" },
    ]
    S.users = [
      { id: "qa.han", name: "한서진", role: "관리자", last: TODAY + " 08:52", active: true },
      { id: "qa.oh", name: "오민규", role: "결재자", last: addD(TODAY, -1) + " 17:40", active: true },
      { id: "line1.ryu", name: "류지아", role: "작성자", last: TODAY + " 07:58", active: true },
      { id: "line1.bae", name: "배성훈", role: "작성자", last: addD(TODAY, -1) + " 16:12", active: true },
      { id: "pack.moon", name: "문채원", role: "작성자", last: TODAY + " 08:05", active: true },
      { id: "log.kwon", name: "권도윤", role: "작성자", last: addD(TODAY, -3) + " 10:31", active: false },
    ]
  }

  /* ───────── 계산 도구 ───────── */
  var CYC_MONTHS = { "일": 0, "주": 0, "월": 1, "분기": 3, "반기": 6, "1년": 12 }
  function notifOf(key) { for (var i = 0; i < S.notif.length; i++) if (S.notif[i].key === key) return S.notif[i]; return null }
  var REP_KINDS = [["자가품질검사", "rep_self"], ["원재료 시험성적서", "rep_raw"], ["포장재 시험성적서", "rep_pack"], ["완제품 검사성적서", "rep_final"], ["수질검사 성적서", "rep_water"]]
  function repDue(rp) {
    var k = REP_KINDS.filter(function (x) { return x[0] === rp.kind })[0], n = notifOf(k ? k[1] : "rep_final"), c = n ? n.cycle : "1년"
    if (c === "일") return addD(rp.issue, 1)
    if (c === "주") return addD(rp.issue, 7)
    return addM(rp.issue, CYC_MONTHS[c])
  }
  function expState(due, start) {
    var left = diff(TODAY, due), period = start ? diff(start, due) : 365
    var warn = period <= 40 ? 7 : 30
    return { left: left, st: left < 0 ? "만료" : left <= warn ? "만료임박" : "정상" }
  }
  function dday(left) { return left < 0 ? "D+" + -left : left === 0 ? "D-Day" : "D-" + left }
  function overdue(rec) { return rec.status === "미작성" && rec.date < TODAY }
  function counts() {
    var pend = S.records.filter(function (r) { return r.status === "승인대기" }).length
    var od = S.records.filter(overdue).length
    var exp = 0
    S.reports.forEach(function (r) { if (expState(repDue(r), r.issue).st !== "정상") exp++ })
    S.health.forEach(function (r) { if (expState(r.expire, r.issue).st !== "정상") exp++ })
    S.edu.forEach(function (r) { if (expState(r.expire, r.issue).st !== "정상") exp++ })
    return { pend: pend, od: od, exp: exp }
  }

  /* 기록 값 (처음 열 때 가상 입력값을 채운다) */
  function ensureValues(rec) {
    if (rec.values) return rec.values
    var tpl = T(rec.tplId), v = {}
    rec.values = v
    v.info_date = rec.date
    if (rec.status === "미작성") return v
    var r = rng(hash(rec.id + "v")), exPick = {}
    var partial = rec.status === "작성중"
    tpl.fields.forEach(function (f) {
      var m = /^g(\d+)_/.exec(f.id), ri = m ? +m[1] : -1
      if (partial && ri > 2) return
      if (ri >= 0 && tpl.cycle === "in" && ri > 3) return
      if (ri >= 0 && (tpl.cycle === "recall") && ri > 1) return
      if (ri >= 0 && tpl.spec === "edu" && ri > 7) return
      switch (f.type) {
        case "time": v[f.id] = pad(8 + ri) + ":" + (r() < 0.5 ? "00" : "30"); break
        case "number":
          if (f.gen) { var x = f.gen[0] + r() * (f.gen[1] - f.gen[0]); v[f.id] = x.toFixed(f.gen[2]) } else v[f.id] = String(Math.floor(r() * 10)); break
        case "check":
          if (f.ex) { if (!(f.ex in exPick)) exPick[f.ex] = r() > 0.04; v[f.id] = f.ok ? exPick[f.ex] : !exPick[f.ex] } else v[f.id] = true; break
        case "select": v[f.id] = (f.opts && f.opts.length) ? (ri >= 0 && tpl.spec !== "receive" ? f.opts[Math.floor(ri / 3) % f.opts.length] : pick(r, f.opts)) : ""; break
        case "text":
          if (f.genVal) v[f.id] = f.genVal
          else if (f.group === "기본 정보") v[f.id] = /교육장소/.test(f.label) ? "2층 교육실" : /교육내용|회수사유/.test(f.label) ? (/교육/.test(f.label) ? "CCP 모니터링 방법과 이탈 시 개선조치" : "소비자 이물 신고에 따른 자진 회수") : rec.writer
          else if (f.group === "기타" && /이탈|원인|개선|재발|효과/.test(f.label)) v[f.id] = { "이탈내용": "가열실 3차 배치 중심온도 73.8℃ 측정 (기준 75℃ 미달)", "원인분석": "오븐 문 개폐가 잦아 내부 온도가 떨어짐", "개선조치": "해당 배치 재가열 후 중심온도 82.1℃ 확인, 출고 보류 해제", "재발방지": "배치 중 오븐 문 개방 금지 표지 부착, 작업자 교육", "효과확인": "이후 10배치 모두 기준 충족" }[f.label] || ""
          break
        case "date": v[f.id] = f.id === "info_date" ? rec.date : addD(rec.date, -Math.floor(r() * 5) - 1); break
        case "sign":
          if (f.id === "sign_0") { if (rec.status === "승인대기" || rec.status === "완료") v[f.id] = rec.writer }
          else if (f.id === "sign_1" || f.id === "sign_2") { if (rec.status === "완료") v[f.id] = f.id === "sign_1" ? "오민규" : ME }
          else v[f.id] = rec.writer
          break
      }
    })
    return v
  }
  function num(x) { var n = parseFloat(String(x == null ? "" : x).replace(/,/g, "")); return isNaN(n) ? null : n }
  function evalFormula(f, v) {
    var fm = f.formula
    if (!fm) return { t: "", cls: "" }
    var vals = fm.refs.map(function (id) { return num(v[id]) })
    if (vals.some(function (x) { return x === null })) return { t: "", cls: "" }
    if (fm.op === "minGte") { var ok = Math.min.apply(null, vals) >= fm.v; return { t: ok ? "적합" : "부적합", cls: ok ? "text-[var(--color-status-done-fg)]" : "text-[var(--color-danger)]" } }
    if (fm.op === "diff") { var d = Math.round((vals[1] - vals[0]) * 10) / 10; return { t: (d > 0 ? "+" : "") + d, cls: "text-[var(--color-fg)]" } }
    if (fm.op === "rangePct") { var p = (vals[1] - vals[0]) / vals[0] * 100, ok2 = p >= fm.lo && p <= fm.hi; return { t: ok2 ? "적합" : "부적합", cls: ok2 ? "text-[var(--color-status-done-fg)]" : "text-[var(--color-danger)]" } }
    return { t: "", cls: "" }
  }
  var INPUT_TYPES = { text: 1, number: 1, date: 1, time: 1, select: 1, check: 1 }
  function progress(tpl, v) {
    var groupsDone = {}, total = 0, done = 0
    tpl.fields.forEach(function (f) {
      if (!INPUT_TYPES[f.type]) return
      if (f.ex) { if (groupsDone[f.ex] !== undefined) { if (v[f.id]) groupsDone[f.ex] = true; return } total++; groupsDone[f.ex] = !!v[f.id]; return }
      total++; if (v[f.id]) done++
    })
    for (var k in groupsDone) if (groupsDone[k]) done++
    return { total: total, done: done }
  }

  /* ───────── 메뉴 ───────── */
  var NAV = [
    { key: "home", label: "홈 (캘린더)", href: "#/" },
    { key: "company", label: "업체정보 관리", items: [["우리 회사 등록", "#/company/ours"], ["거래처 등록", "#/company/partners"]] },
    { key: "journal", label: "일지 작성", items: [["일지 양식 관리", "#/journal/templates"], ["일지 검색", "#/journal/search"],
      { label: "일일 일지", href: "#/journal/list?cycle=daily", sub: WRITERS.map(function (w) { return [w, "#/journal/list?cycle=daily&writer=" + encodeURIComponent(w)] }) },
      ["주간 일지", "#/journal/list?cycle=weekly"], ["월간 일지", "#/journal/list?cycle=monthly"], ["분기 일지", "#/journal/list?cycle=quarter"], ["반기 일지", "#/journal/list?cycle=half"], ["연간 일지", "#/journal/list?cycle=yearly"],
      ["입고시 일지", "#/journal/list?cycle=in"], ["회수시 일지", "#/journal/list?cycle=recall"], ["필요시 일지", "#/journal/list?cycle=need"]] },
    { key: "reports", label: "성적서 관리", items: [["성적서 등록", "#/reports/register"], ["성적서 조회", "#/reports/list"]] },
    { key: "certs", label: "법적서류 관리", items: [["교육수료증", "#/certs/education"], ["보건증", "#/certs/health"]] },
    { key: "product", label: "제품 정보 관리", items: [["제품 등록", "#/product/items"], ["레시피 등록", "#/product/recipes"], ["배합량 등록", "#/product/batches"]] },
    { key: "settings", label: "설정 및 관리", items: [["사원 관리", "#/employees"], ["시스템 사용자", "#/system/users"], ["결재 승인", "#/system/approvals"], ["알림 설정", "#/system/notifications"]] },
  ]
  function activeHref(route) {
    var p = route.path, q = route.query
    if (p === "/") return "#/"
    if (p.indexOf("/journal/template/") === 0) return "#/journal/templates"
    if (p.indexOf("/journal/record/") === 0) { var rec = REC(p.split("/")[3]); var t = rec && T(rec.tplId); return t ? "#/journal/list?cycle=" + t.cycle : "" }
    if (p === "/journal/list") return "#/journal/list?cycle=" + (q.cycle || "daily") + (q.writer ? "&writer=" + encodeURIComponent(q.writer) : "")
    return "#" + p
  }
  var NAVSTATE = {}
  function sideNav(route) {
    var act = activeHref(route), ui = S.ui
    var itemCls = function (on, extra) {
      return "flex items-center justify-between border-l-[3px] pr-5 py-2 text-sm transition-colors " + (extra || "pl-[17px] ") +
        (on ? "border-l-[var(--color-accent)] bg-[var(--color-accent-soft)] font-semibold text-[var(--color-accent)]" : "border-transparent text-[var(--color-fg)] hover:bg-[var(--color-surface-alt)]")
    }
    var html = ""
    NAV.forEach(function (g) {
      if (!g.items) { html += '<a href="' + g.href + '" class="' + itemCls(act === g.href) + ' mb-1">' + e(g.label) + "</a>"; return }
      var contains = false
      g.items.forEach(function (it) { if (Array.isArray(it)) { if (it[1] === act) contains = true } else { if (it.href === act) contains = true; it.sub.forEach(function (s) { if (s[1] === act) contains = true }) } })
      var open = ui.open[g.key] !== undefined ? ui.open[g.key] : contains
      NAVSTATE[g.key] = open
      html += '<button type="button" data-act="nav-toggle" data-key="' + g.key + '" class="flex w-full items-center justify-between border-l-[3px] pl-[17px] pr-5 py-3 text-base font-bold transition-colors text-[var(--color-accent)] ' +
        (contains ? "border-l-[var(--color-accent)] bg-[var(--color-accent-soft)]" : "border-transparent hover:bg-[var(--color-surface-alt)]") + '">' +
        "<span>" + e(g.label) + "</span>" + ic(open ? "up" : "down", "h-4 w-4 text-[var(--color-fg-muted)]") + "</button>"
      if (!open) return
      html += '<div class="pb-1">'
      g.items.forEach(function (it) {
        if (Array.isArray(it)) { html += '<a href="' + it[1] + '" class="' + itemCls(it[1] === act) + '">' + e(it[0]) + "</a>"; return }
        var subOn = it.sub.some(function (s) { return s[1] === act }) || act === it.href
        var sOpen = ui.open["sub-daily"] !== undefined ? ui.open["sub-daily"] : subOn
        NAVSTATE["sub-daily"] = sOpen
        html += '<div class="' + itemCls(act === it.href) + '"><a href="' + it.href + '" class="flex-1">' + e(it.label) + '</a><button type="button" data-act="nav-toggle" data-key="sub-daily" aria-label="일일 일지 하위 메뉴" class="-mr-2 rounded p-1 hover:bg-[var(--color-accent-soft)]">' + ic(sOpen ? "up" : "down", "h-4 w-4 text-[var(--color-fg-muted)]") + "</button></div>"
        if (sOpen) it.sub.forEach(function (s) { html += '<a href="' + s[1] + '" class="' + itemCls(s[1] === act, "pl-8 ") + ' text-[var(--color-fg-muted)]">' + e(s[0]) + "</a>" })
      })
      html += "</div>"
    })
    return html
  }

  /* ───────── 틀 (사이드바 + 상단바 + 페이지 머리) ───────── */
  function shell(route, page) {
    var c = counts(), total = c.pend + c.od + c.exp
    var bell = ""
    if (S.ui.bell) {
      var row = function (href, icon, title, n, tone) {
        return '<a href="' + href + '" data-act="bell-go" class="flex items-center gap-3 px-4 py-3 hover:bg-[var(--color-surface-alt)]">' + ic(icon, "h-4 w-4 shrink-0 " + tone) +
          '<span class="flex-1 text-sm text-[var(--color-fg)]">' + e(title) + '</span><span class="text-sm font-semibold ' + tone + '">' + e(n) + "건</span></a>"
      }
      bell = '<div class="absolute right-0 top-full mt-2 w-72 z-30 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-pop)]">' +
        '<div class="border-b border-[var(--color-divider)] px-4 py-2.5 text-xs font-semibold text-[var(--color-fg-muted)]">알림</div><div class="divide-y divide-[var(--color-divider)]">' +
        row("#/system/approvals", "file", "결재 대기 일지", c.pend, "text-[var(--color-status-pending-fg)]") +
        row("#/journal/search?status=" + encodeURIComponent("미작성") + "&overdue=1", "alert", "기한 지난 미작성 일지", c.od, "text-[var(--color-status-reject-fg)]") +
        row("#/certs/health", "cal", "만료·만료임박 서류", c.exp, "text-[var(--color-status-writing-fg)]") + "</div></div>"
    }
    return '<div class="flex min-h-screen">' +
      '<div class="demo-scrim ' + (S.ui.mobileNav ? "demo-open" : "") + '" data-act="nav-mobile"></div>' +
      '<aside class="demo-side sticky top-0 flex h-screen w-60 shrink-0 flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)] ' + (S.ui.mobileNav ? "demo-open" : "") + '">' +
      '<div class="flex h-14 shrink-0 items-center px-5 border-b border-[var(--color-border)]"><a href="#/" class="text-lg font-bold tracking-tight text-[var(--color-accent)]">맛나 HACCP</a></div>' +
      '<nav class="flex-1 overflow-y-auto py-2">' + sideNav(route) + "</nav>" +
      '<div class="border-t border-[var(--color-border)] px-5 py-3 text-[11px] text-[var(--color-fg-subtle)]">v0.1.0 · ' + e(BRAND) + "</div></aside>" +
      '<div class="flex min-w-0 flex-1 flex-col">' +
      '<header class="sticky top-0 z-20 flex h-14 shrink-0 items-center justify-between gap-3 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6">' +
      '<div class="flex min-w-0 items-center gap-2"><button type="button" class="demo-burger -mx-1 items-center justify-center rounded-md p-2 text-[var(--color-fg)] hover:bg-[var(--color-surface-alt)]" data-act="nav-mobile" aria-label="메뉴">' + ic("menu", "h-5 w-5") + "</button>" +
      '<span class="truncate text-sm text-[var(--color-fg-muted)]">Welcome <span class="demo-hide-sm">' + e(BRAND) + " </span>HACCP Program</span></div>" +
      '<div class="flex shrink-0 items-center gap-3">' +
      '<div class="relative"><button type="button" data-act="bell" class="relative rounded-md p-1.5 text-[var(--color-fg-muted)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-fg)]" aria-label="알림">' + ic("bell", "h-4 w-4") +
      (total ? '<span class="absolute -right-1 top-0 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-danger)] px-1 text-[10px] font-bold text-white">' + e(total) + "</span>" : "") + "</button>" + bell + "</div>" +
      '<span class="h-5 w-px bg-[var(--color-border)]"></span>' +
      '<span class="flex items-center gap-1.5 text-sm text-[var(--color-fg)]">' + ic("user", "h-4 w-4 text-[var(--color-fg-muted)]") + "관리자님</span>" +
      btn("sec", "sm", ic("logout", "h-4 w-4") + '<span class="demo-hide-sm">로그아웃</span>', 'data-act="logout"') +
      "</div></header>" +
      '<main class="min-w-0 flex-1 bg-[var(--color-bg)]">' + page + "</main></div></div>" + modal()
  }
  function pageHead(crumbs, title, desc, actions) {
    return '<div class="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 pt-4 pb-5">' +
      '<nav class="flex flex-wrap items-center gap-1.5 text-xs text-[var(--color-fg-muted)]"><a href="#/" class="inline-flex items-center gap-1 hover:text-[var(--color-accent)]">' + ic("home", "h-3.5 w-3.5") + "홈</a>" +
      crumbs.map(function (c, i) {
        var last = i === crumbs.length - 1
        var inner = Array.isArray(c) ? '<a href="' + c[1] + '" class="hover:text-[var(--color-accent)]">' + e(c[0]) + "</a>" : '<span class="' + (last ? "font-medium text-[var(--color-fg)]" : "") + '">' + e(c) + "</span>"
        return ic("right", "h-3 w-3 text-[var(--color-fg-subtle)]") + inner
      }).join("") + "</nav>" +
      '<div class="mt-2 flex flex-wrap items-end justify-between gap-3"><div class="min-w-0"><h1 class="text-xl font-bold text-[var(--color-fg)]">' + e(title) + "</h1>" +
      (desc ? '<p class="mt-1 text-sm text-[var(--color-fg-muted)]">' + desc + "</p>" : "") + "</div>" +
      (actions ? '<div class="flex flex-wrap items-center gap-2">' + actions + "</div>" : "") + "</div></div>"
  }
  function body(html) { return '<div class="p-6">' + html + "</div>" }
  function tableWrap(minW, head, rows, empty) {
    return '<div class="' + C.card + ' overflow-hidden"><div class="overflow-x-auto"><table class="w-full ' + minW + ' border-collapse">' +
      '<thead class="bg-[var(--color-surface-alt)] border-b border-[var(--color-border)]"><tr>' + head + "</tr></thead>" +
      '<tbody class="divide-y divide-[var(--color-divider)]">' + (rows || '<tr><td colspan="20" class="py-12 text-center text-sm text-[var(--color-fg-muted)]">' + e(empty || "데이터가 없습니다") + "</td></tr>") + "</tbody></table></div></div>"
  }
  function th(t, sortKey, cur) {
    if (!sortKey) return '<th class="' + C.th + '">' + e(t) + "</th>"
    var on = cur && cur.key === sortKey
    return '<th class="' + C.th + '"><button type="button" data-act="sort" data-key="' + sortKey + '" class="inline-flex items-center gap-1 hover:text-[var(--color-accent)]">' + e(t) +
      ic("sort", "h-3 w-3 " + (on ? "text-[var(--color-accent)]" : "text-[var(--color-fg-subtle)]")) + "</button></th>"
  }
  function dropzone(key) {
    var files = S.ui.files[key] || []
    return '<label class="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-alt)]/40 px-4 py-4 transition-colors hover:border-[var(--color-accent)]">' +
      ic("upload", "h-5 w-5 shrink-0 text-[var(--color-fg-muted)]") +
      '<span><span class="block text-sm font-medium text-[var(--color-fg)]">파일 선택 또는 드래그</span><span class="block text-[11px] text-[var(--color-fg-subtle)]">PDF·JPG·PNG, 10MB 이하 · 여러 개 가능</span></span>' +
      '<input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" class="hidden" data-change="files" data-key="' + key + '"></label>' +
      (files.length ? '<div class="mt-2 flex flex-wrap gap-2">' + files.map(function (f, i) {
        return '<span class="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 text-xs text-[var(--color-fg)]">' + ic("clip", "h-3 w-3 text-[var(--color-fg-muted)]") + e(f) +
          '<button type="button" data-act="file-rm" data-key="' + key + '" data-i="' + i + '" class="text-[var(--color-fg-subtle)] hover:text-[var(--color-danger)]" aria-label="삭제">' + ic("x", "h-3 w-3") + "</button></span>"
      }).join("") + "</div>" : "")
  }

  /* ───────── 홈 (캘린더) ───────── */
  function dayItems(d) {
    var f = S.ui.calFilter
    var ok = function (tpl) { return f === "all" || (f === "event" ? !!EVENT[tpl.cycle] : tpl.cycle === f) }
    var items = S.records.filter(function (r) { return r.date === d && ok(T(r.tplId)) }).map(function (r) { return { rec: r, tpl: T(r.tplId), st: r.status } })
    if (d > TODAY) S.templates.forEach(function (tpl) { if (!EVENT[tpl.cycle] && ok(tpl) && isScheduled(tpl, d)) items.push({ tpl: tpl, st: "예정" }) })
    return items
  }
  function pageHome() {
    var m = S.ui.cal, md = pd(m), y = md.getFullYear(), mo = md.getMonth()
    var start = addD(m, -md.getDay()), last = new Date(y, mo + 1, 0).getDate()
    var weeks = Math.ceil((md.getDay() + last) / 7)
    var tally = { "예정": 0, "미작성": 0, "작성중": 0, "승인대기": 0, "완료": 0, "반려": 0 }
    for (var i = 1; i <= last; i++) dayItems(y + "-" + pad(mo + 1) + "-" + pad(i)).forEach(function (it) { tally[it.st]++ })
    var legend = Object.keys(tally).map(function (k) { return '<span class="inline-flex items-center gap-1.5">' + badge(k) + '<span class="text-sm font-semibold text-[var(--color-fg)]">' + tally[k] + "</span></span>" }).join("")
    var filterOpts = [["all", "전체 일지"]].concat(CYCLES.filter(function (c) { return !EVENT[c[0]] }).map(function (c) { return [c[0], c[1] + " 일지"] })).concat([["event", "이벤트형 일지"]])
    var head = ["일", "월", "화", "수", "목", "금", "토"].map(function (d, i) {
      return '<div class="border-b border-r last:border-r-0 border-[var(--color-divider)] py-2 text-center text-sm font-semibold ' + (i === 0 ? "text-red-700" : i === 6 ? "text-[var(--color-accent)]" : "text-[var(--color-fg)]") + '">' + d + "</div>"
    }).join("")
    var cells = ""
    for (var k = 0; k < weeks * 7; k++) {
      var d = addD(start, k), dd = pd(d), out = dd.getMonth() !== mo, w = dd.getDay(), items = dayItems(d), isT = d === TODAY, sel = S.ui.calSel === d
      var numCls = out ? "text-[var(--color-fg-subtle)]" : w === 0 ? "text-red-700" : w === 6 ? "text-[var(--color-accent)]" : "text-[var(--color-fg)]"
      var shown = items.slice(0, 4)
      cells += '<div data-act="cal-sel" data-d="' + d + '"' + ((k + 1) % 7 === 0 ? ' style="border-right:0"' : "") + ' class="min-h-[110px] min-w-0 cursor-pointer border-b border-r border-[var(--color-divider)] p-1.5 ' + "" +
        (sel ? "bg-[var(--color-accent-soft)]/50" : out ? "bg-[var(--color-surface-alt)]" : "hover:bg-[var(--color-accent-soft)]/40") + '">' +
        '<div class="mb-1 px-1 text-sm font-semibold ' + numCls + '">' + (isT ? '<span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent)] text-white">' + dd.getDate() + "</span>" : dd.getDate()) + "</div>" +
        '<div class="space-y-0.5">' + shown.map(function (it) {
          var od = it.rec && overdue(it.rec)
          return '<button type="button" data-act="' + (it.rec ? "open-rec" : "open-plan") + '" data-id="' + (it.rec ? it.rec.id : "") + '" data-d="' + d + '" title="' + e(it.tpl.name) + '" class="flex w-full min-w-0 items-center gap-1 rounded-sm px-1 py-0.5 text-left hover:bg-[var(--color-surface)]">' +
            badge(it.st) + '<span class="truncate text-xs ' + (od ? "text-[var(--color-status-reject-fg)]" : "text-[var(--color-fg)]") + '">' + e(it.tpl.name) + "</span></button>"
        }).join("") + (items.length > 4 ? '<div class="px-1 text-[11px] text-[var(--color-fg-muted)]">+' + (items.length - 4) + "건 더보기</div>" : "") + "</div></div>"
    }
    var ev = [["in", "box", "입고시 일지"], ["recall", "rotate", "회수시 일지"], ["need", "wrench", "필요시 일지"]].map(function (x) {
      return '<a href="#/journal/list?cycle=' + x[0] + '" class="flex flex-1 min-w-[240px] items-center justify-between gap-2 border-r last:border-r-0 border-[var(--color-divider)] px-4 py-3 hover:bg-[var(--color-surface-alt)]">' +
        '<span class="flex items-center gap-2 text-sm font-semibold text-[var(--color-fg)]">' + ic(x[1], "h-4 w-4 text-[var(--color-fg-muted)]") + e(x[2]) + "</span>" +
        '<span class="whitespace-nowrap text-[11px] text-[var(--color-fg-muted)]">바로가기 →</span></a>'
    }).join("")
    var html = '<div class="' + C.card + ' mb-4">' +
      '<div class="flex items-center justify-between gap-2 border-b border-[var(--color-divider)] px-4 py-2.5"><span class="flex items-center gap-2 text-sm font-semibold text-[var(--color-fg)]">' + ic("bell", "h-4 w-4 text-[var(--color-accent)]") + '이벤트형 일지</span><span class="text-[11px] text-[var(--color-fg-subtle)] demo-hide-sm">입고·회수·필요 시 바로 작성</span></div>' +
      '<div class="flex flex-wrap">' + ev + "</div></div>" +
      '<div class="' + C.card + ' overflow-hidden">' +
      '<div class="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-divider)] px-4 py-3">' +
      '<div class="flex flex-wrap items-center gap-2">' + btn("sec", "sm", ic("left", "h-4 w-4"), 'data-act="cal-move" data-n="-1" aria-label="이전 달"') + btn("sec", "sm", "오늘", 'data-act="cal-today"') + btn("sec", "sm", ic("right", "h-4 w-4"), 'data-act="cal-move" data-n="1" aria-label="다음 달"') +
      '<span class="ml-2 mr-1 text-lg font-bold text-[var(--color-fg)]">' + y + "년 " + (mo + 1) + "월</span>" +
      '<div class="w-44">' + selectBox('data-change="cal-filter" id="cal-filter"', filterOpts, S.ui.calFilter, true) + "</div></div>" +
      '<div class="flex flex-wrap items-center gap-3">' + legend + "</div></div>" +
      '<div class="overflow-x-auto"><div class="min-w-[720px]"><div class="grid grid-cols-7">' + head + '</div><div class="grid grid-cols-7">' + cells + "</div></div></div></div>"
    return pageHead(["홈"], "홈", "일지 작성 현황을 캘린더에서 확인하세요 (미작성 포함)") + body(html)
  }

  /* ───────── 일지 리스트 / 검색 ───────── */
  function listState(key, cycle) {
    if (!S.ui.list[key]) {
      var periodic = cycle === "daily" || cycle === "weekly" || cycle === "all"
      var st = { period: periodic ? "month" : "year", from: "", to: "", mine: false, status: "all", q: "", tpl: "all", sort: { key: "date", dir: -1 }, overdue: false }
      setPeriod(st, st.period)
      S.ui.list[key] = st
    }
    return S.ui.list[key]
  }
  function setPeriod(st, p) {
    st.period = p
    var ms = monthStart(TODAY)
    if (p === "month") { st.from = ms; st.to = addD(addM(ms, 1), -1) }
    else if (p === "prev") { st.from = addM(ms, -1); st.to = addD(ms, -1) }
    else if (p === "week") { st.from = addD(TODAY, -((dow(TODAY) + 6) % 7)); st.to = addD(st.from, 6) }
    else if (p === "3m") { st.from = addM(ms, -2); st.to = addD(addM(ms, 1), -1) }
    else if (p === "year") { st.from = pd(TODAY).getFullYear() - 1 + "-01-01"; st.to = pd(TODAY).getFullYear() + "-12-31" }
  }
  function pageList(route) {
    var q = route.query, search = route.path === "/journal/search"
    var cycle = search ? "all" : (q.cycle || "daily"), writer = q.writer || ""
    var key = search ? "search" : cycle + "|" + writer
    var st = listState(key, cycle)
    if (search && q.status) { st.status = q.status; st.overdue = q.overdue === "1"; st.period = "all"; st.from = ""; st.to = ""; history.replaceState(null, "", "#/journal/search") }
    S.ui.curList = key
    var rows = S.records.filter(function (r) {
      var t = T(r.tplId)
      if (!t) return false
      if (!search && t.cycle !== cycle) return false
      if (writer && t.writer !== writer) return false
      if (search && st.tpl !== "all" && t.id !== st.tpl) return false
      if (st.from && r.date < st.from) return false
      if (st.to && r.date > st.to) return false
      if (st.mine && r.writer !== ME) return false
      if (st.status !== "all" && r.status !== st.status) return false
      if (st.overdue && !overdue(r)) return false
      if (st.q && (t.code + " " + t.name + " " + r.title).toLowerCase().indexOf(st.q.toLowerCase()) < 0) return false
      return true
    })
    rows.sort(function (a, b) { var ka = st.sort.key === "date" ? a.date : a.created, kb = st.sort.key === "date" ? b.date : b.created; return (ka < kb ? -1 : ka > kb ? 1 : (T(a.tplId).code < T(b.tplId).code ? -1 : 1)) * st.sort.dir })
    var odCount = rows.filter(overdue).length
    var label = search ? "일지 검색" : CY[cycle] + " 일지 작성 리스트" + (writer ? " · " + writer : "")
    var crumbs = search ? ["일지 작성", "일지 검색"] : ["일지 작성", CY[cycle] + " 일지 작성 리스트"]
    var filters = '<div class="' + C.card + ' mb-4 p-4"><div class="flex flex-wrap items-end gap-3">' +
      '<div class="w-40">' + field("기간", selectBox('data-change="lf-period" id="lf-period"', [["month", "이번 달"], ["prev", "지난 달"], ["week", "이번 주"], ["3m", "최근 3개월"], ["year", "올해·작년"], ["all", "전체"], ["custom", "직접 지정"]], st.period)) + "</div>" +
      '<div class="w-40">' + field("시작일", '<input type="date" id="lf-from" data-change="lf-from" value="' + e(st.from) + '" class="' + C.input + '">') + "</div>" +
      '<div class="w-40">' + field("종료일", '<input type="date" id="lf-to" data-change="lf-to" value="' + e(st.to) + '" class="' + C.input + '">') + "</div>" +
      '<label class="inline-flex h-10 cursor-pointer items-center gap-2 rounded-md border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-3 text-sm"><input type="checkbox" data-change="lf-mine" ' + (st.mine ? "checked" : "") + ' class="h-4 w-4 accent-[var(--color-accent)]">내 일지만</label>' +
      (search ? '<div class="w-60">' + field("일지 양식", selectBox('data-change="lf-tpl" id="lf-tpl"', [["all", "전체 양식"]].concat(S.templates.map(function (t) { return [t.id, t.name] })), st.tpl)) + "</div>" : "") +
      '<div class="w-44">' + field("상태", selectBox('data-change="lf-status" id="lf-status"', [["all", "전체"], "미작성", "작성중", "승인대기", "완료", "반려"], st.status)) + "</div>" +
      '<div class="min-w-[240px] flex-1">' + field("검색", '<input type="text" id="lf-q" data-input="lf-q" value="' + e(st.q) + '" placeholder="문서번호 또는 문서명" class="' + C.input + '">') + "</div>" +
      "</div>" + (st.overdue ? '<div class="mt-3 flex items-center gap-2 text-xs text-[var(--color-status-reject-fg)]">' + ic("alert", "h-3.5 w-3.5") + '기한이 지난 미작성 일지만 보고 있습니다. <button type="button" data-act="lf-clear-od" class="underline underline-offset-2">해제</button></div>' : "") + "</div>"
    var info = '<div class="mb-2 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--color-fg-muted)]"><span>총 <b class="text-[var(--color-fg)]">' + rows.length + "</b>건</span>" +
      (odCount ? '<span class="inline-flex items-center gap-1 text-[var(--color-status-reject-fg)]">' + ic("alert", "h-3.5 w-3.5") + "기한 지난 미작성 " + odCount + "건, 빨간 줄로 표시</span>" : "") + "</div>"
    var body2 = rows.map(function (r, i) {
      var t = T(r.tplId), od = overdue(r)
      return '<tr class="' + (od ? "bg-[var(--color-status-reject-bg)]" : "hover:bg-[var(--color-surface-alt)]") + '">' +
        '<td class="' + C.td + ' text-[var(--color-fg-muted)] border-l-[3px] ' + (od ? "border-l-[var(--color-status-reject-fg)]" : "border-transparent") + '">' + pad(i + 1) + "</td>" +
        '<td class="' + C.td + ' font-mono text-[11px] text-[var(--color-fg-muted)] whitespace-nowrap">' + e(t.code) + "</td>" +
        '<td class="' + C.td + '">' + e(t.name) + "</td>" +
        '<td class="' + C.td + ' text-[var(--color-fg-muted)]">' + e(r.title) + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap">' + e(t.mgr) + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap">' + e(t.dept) + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap">' + e(CY[t.cycle]) + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap">' + e(r.date) + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap">' + e(r.created) + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap">' + badge(r.status) + (od ? '<span class="ml-1.5 text-[11px] font-medium text-[var(--color-status-reject-fg)]">' + e(dday(-diff(r.date, TODAY))) + "</span>" : "") + "</td>" +
        '<td class="' + C.td + ' text-right">' + btn("pri", "sm", "열기", 'data-act="open-rec" data-id="' + r.id + '"') + "</td></tr>"
    }).join("")
    var head = th("순번") + th("문서번호") + th("문서명") + th("일지명") + th("관리부서") + th("작성부서") + th("주기") + th("기준일", "date", st.sort) + th("생성일", "created", st.sort) + th("상태") + '<th class="' + C.th + '"></th>'
    return pageHead(crumbs, label, search ? "모든 일지를 기간·양식·상태로 찾아봅니다" : "작성 대기/진행 중인 일지 목록", btn("pri", "md", "+ 신규 작성", 'data-act="new-rec" data-cycle="' + cycle + '"')) +
      body(filters + info + tableWrap("min-w-[1080px]", head, body2, "조건에 맞는 일지가 없습니다"))
  }

  /* ───────── 종이 양식 그리기 ───────── */
  function paperCells(tpl) {
    return tpl.paper.map(function (c) {
      var st = "left:" + c.x + "px;top:" + c.y + "px;width:" + (c.w + 1) + "px;height:" + (c.h + 1) + "px;font-size:" + (c.fs || 12) + "px;"
      if (!c.plain) st += "border:1px solid #2b2b2b;"
      if (c.bg) st += "background:#fbe6da;"
      if (c.title !== undefined) {
        return '<div class="absolute flex flex-col items-center justify-center text-center" style="' + st + '"><div style="font-size:24px;font-weight:800;letter-spacing:-.5px;line-height:1.2">' + e(c.title) + "</div>" +
          (c.sub ? '<div style="font-size:14px;margin-top:4px">' + e(c.sub) + "</div>" : "") + "</div>"
      }
      var al = c.al === "l" ? "justify-between text-left px-1.5" : c.al === "r" ? "justify-end text-right text-[var(--color-fg-subtle)]" : "justify-center text-center px-1"
      return '<div class="absolute flex items-center ' + al + '" style="' + st + 'line-height:1.25">' + e(c.t).replace(/\n/g, "<br>") + "</div>"
    }).join("")
  }
  var TYPE_LABEL = { text: "텍스트", check: "체크", date: "날짜", time: "시간", number: "숫자", select: "목록 선택", auto: "자동채움", formula: "수식", image: "이미지", sign: "서명" }
  var PH = { text: "입력", number: "숫자", date: "날짜 선택", time: "시간", select: "목록 ▾", auto: "자동", formula: "=수식", image: "이미지", sign: "서명" }
  function pos(f) { return "left:" + f.x + "px;top:" + f.y + "px;width:" + f.w + "px;height:" + f.h + "px;" }
  function editField(f, ed) {
    var sel = ed.sel === f.id, grp = ed.showGroup === f.group
    var cls = "absolute flex items-center justify-center overflow-hidden rounded-[2px] border border-dashed border-[#2563eb] cursor-move select-none text-[10px] italic text-[var(--color-fg-subtle)] " +
      (sel ? "ring-2 ring-[#2563eb] bg-[#2563eb]/12 " : grp ? "ring-2 ring-amber-500 bg-amber-400/15 " : "bg-[var(--color-accent-soft)]/50 ")
    var inner = f.type === "check" ? '<span class="inline-block h-3 w-3 rounded-[2px] border border-[var(--color-fg-muted)]"></span>' : e(f.type === "text" && f.h > 30 ? "입력 (여러 줄)" : PH[f.type] || "입력")
    return '<div data-ed-field="' + e(f.id) + '" title="' + e(f.label + " · " + TYPE_LABEL[f.type]) + '" class="' + cls + '" style="' + pos(f) + '">' + inner + "</div>"
  }
  function fillField(f, v, ro) {
    var val = v[f.id], empty = val === undefined || val === "" || val === false || val === null
    var base = "absolute rounded-[2px] text-xs text-center text-[var(--color-accent-active)] placeholder:text-[var(--color-fg-subtle)] focus:outline-none "
    var tint = !ro && empty ? "bg-[var(--color-accent-soft)]/50" : "bg-transparent"
    var dis = ro ? " disabled" : ""
    var common = 'id="fv-' + e(f.id) + '" data-fid="' + e(f.id) + '" style="' + pos(f) + '"'
    switch (f.type) {
      case "text":
        if (f.h > 30) return '<textarea ' + common + ' data-input="fv" placeholder="입력" class="' + base + tint + ' text-left px-1.5 py-1"' + dis + ">" + e(val || "") + "</textarea>"
        return '<input type="text" ' + common + ' data-input="fv" value="' + e(val || "") + '" placeholder="입력" class="' + base + tint + ' px-1"' + dis + ">"
      case "number":
        return '<input type="text" inputmode="decimal" ' + common + ' data-input="fv" value="' + e(val || "") + '" placeholder="숫자" class="' + base + tint + ' px-1"' + dis + ">"
      case "date": return '<input type="date" ' + common + ' data-change="fv" value="' + e(val || "") + '" class="' + base + tint + ' px-1"' + dis + ">"
      case "time": return '<input type="time" ' + common + ' data-change="fv" value="' + e(val || "") + '" class="' + base + tint + ' px-1"' + dis + ">"
      case "select":
        return '<select ' + common + ' data-change="fv" class="' + base + tint + ' appearance-none cursor-pointer px-1"' + dis + '><option value="">' + (ro ? "" : "선택") + "</option>" +
          (f.opts || []).map(function (o) { return '<option value="' + e(o) + '"' + (o === val ? " selected" : "") + ">" + e(o) + "</option>" }).join("") + "</select>"
      case "check":
        return '<button type="button" ' + common + ' data-act="fv-check" class="absolute flex items-center justify-center rounded-[2px] ' + tint + (ro ? " cursor-default" : " hover:bg-[var(--color-accent-soft)]") + '"' + dis + ">" +
          (val ? ic("check", "h-4 w-4 text-[var(--color-accent-active)]") : '<span class="inline-block h-3 w-3 rounded-[2px] border border-[var(--color-fg-muted)]/40"></span>') + "</button>"
      case "sign":
        var stamp = val ? '<span class="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-danger)] px-1.5 py-0.5 text-[11px] font-bold text-[var(--color-danger)]">' + e(val) + "</span>" : '<span class="text-[10px] italic text-[var(--color-fg-subtle)]">서명</span>'
        if (/^sign_\d$/.test(f.id) || ro) return '<div ' + common + ' class="absolute flex items-center justify-center">' + stamp + "</div>"
        return '<button type="button" ' + common + ' data-act="fv-sign" class="absolute flex items-center justify-center rounded-[2px] ' + tint + ' hover:bg-[var(--color-accent-soft)]">' + stamp + "</button>"
      case "formula":
        var r = evalFormula(f, v)
        return '<div ' + common + ' data-formula="' + e(f.id) + '" class="absolute flex items-center justify-center text-xs font-semibold ' + r.cls + '">' + e(r.t) + "</div>"
      case "auto":
        return '<div ' + common + ' class="absolute flex items-center justify-center text-xs text-[var(--color-accent-active)]">' + e(val || v.info_date || "") + "</div>"
      case "image":
        return '<button type="button" ' + common + ' data-act="fv-image" class="absolute flex items-center justify-center rounded-[2px] border border-dashed border-[var(--color-border-strong)] text-[10px] text-[var(--color-fg-subtle)]"' + dis + ">" + (val ? "사진 1장" : "사진 첨부") + "</button>"
    }
    return ""
  }
  function paperBox(tpl, overlay, id) {
    return '<div class="overflow-x-auto"><div class="demo-paper relative mx-auto bg-white shadow-sm" style="width:' + (PW + 48) + "px;height:" + (tpl.H + 48) + 'px">' +
      '<div id="' + (id || "paper-inner") + '" data-fill-overlay class="absolute" style="left:24px;top:24px;width:' + PW + "px;height:" + tpl.H + 'px">' + paperCells(tpl) + overlay + "</div></div></div>"
  }

  /* ───────── 일지 작성 화면 ───────── */
  function pageRecord(route) {
    var rec = REC(route.path.split("/")[3])
    if (!rec) return pageHead(["일지 작성"], "일지를 찾을 수 없습니다", "") + body('<div class="' + C.card + ' p-8 text-center text-sm text-[var(--color-fg-muted)]">삭제되었거나 없는 일지입니다. <a class="text-[var(--color-accent)] underline" href="#/journal/search">일지 검색</a></div>')
    var tpl = T(rec.tplId), v = ensureValues(rec)
    var ro = rec.status === "승인대기" || rec.status === "완료"
    var pr = progress(tpl, v)
    var acts = btn("sec", "md", "목록", 'data-act="go" data-href="#/journal/list?cycle=' + tpl.cycle + '"')
    if (!ro) acts += btn("sec", "md", ic("save", "h-4 w-4") + "임시 저장", 'data-act="rec-save" data-id="' + rec.id + '"') + btn("pri", "md", ic("send", "h-4 w-4") + "결재 요청", 'data-act="rec-submit" data-id="' + rec.id + '"')
    if (rec.status === "승인대기") acts += btn("sec", "md", "결재 회수", 'data-act="rec-recall" data-id="' + rec.id + '"') + btn("sec", "md", ic("x", "h-4 w-4") + "반려", 'data-act="rec-reject" data-id="' + rec.id + '"') + btn("pri", "md", ic("check", "h-4 w-4") + "승인", 'data-act="rec-approve" data-id="' + rec.id + '"')
    if (rec.status === "완료") acts += btn("sec", "md", ic("printer", "h-4 w-4") + "인쇄", 'data-act="rec-print"')
    var overlay = tpl.fields.map(function (f) { return fillField(f, v, ro) }).join("")
    var od = overdue(rec)
    var notice = ""
    if (rec.status === "반려") notice = '<div class="mb-4 flex items-start gap-2 rounded-md border border-[var(--color-status-reject-fg)]/40 bg-[var(--color-status-reject-bg)] px-4 py-3 text-sm text-[var(--color-status-reject-fg)]">' + ic("alert", "mt-0.5 h-4 w-4 shrink-0") + "<div><b>반려됨</b>, " + e(rec.reject) + "<div class=\"mt-0.5 text-xs\">내용을 고친 뒤 다시 결재 요청하세요.</div></div></div>"
    else if (od) notice = '<div class="mb-4 flex items-center gap-2 rounded-md border border-[var(--color-status-reject-fg)]/40 bg-[var(--color-status-reject-bg)] px-4 py-3 text-sm text-[var(--color-status-reject-fg)]">' + ic("alert", "h-4 w-4 shrink-0") + "기준일(" + e(rec.date) + ")이 지난 미작성 일지입니다. 작성 후 사유를 특이사항에 남겨 주세요.</div>"
    else if (ro) notice = '<div class="mb-4 flex items-center gap-2 rounded-md border border-[var(--color-accent)]/35 bg-[var(--color-accent-soft)] px-4 py-3 text-sm text-[var(--color-accent)]">' + ic("file", "h-4 w-4 shrink-0") + (rec.status === "완료" ? "결재가 끝난 일지입니다. 읽기 전용으로 표시됩니다." : "결재 대기 중인 일지입니다. 승인 또는 반려할 수 있습니다.") + "</div>"
    var infoRow = function (k, val) { return '<div class="grid grid-cols-[100px_1fr] gap-2 py-1.5 text-sm"><span class="text-[var(--color-fg-muted)]">' + e(k) + '</span><span class="min-w-0 text-[var(--color-fg)]">' + val + "</span></div>" }
    var pct = pr.total ? Math.round(pr.done / pr.total * 100) : 0
    var side = '<div class="w-[280px] shrink-0 space-y-4">' +
      '<div class="' + C.card + '"><div class="border-b border-[var(--color-divider)] px-4 py-2.5 text-sm font-semibold">작성 정보</div><div class="px-4 py-2 divide-y divide-[var(--color-divider)]">' +
      infoRow("문서번호", '<span class="font-mono text-xs">' + e(tpl.code) + "</span>") + infoRow("양식 버전", "v" + e(tpl.version)) + infoRow("기준일", e(rec.date)) + infoRow("주기", e(CY[tpl.cycle])) +
      infoRow("작성 구분", e(tpl.writer)) + infoRow("작성자", e(rec.writer)) + infoRow("작성부서", e(tpl.dept)) + infoRow("상태", badge(rec.status)) + "</div>" +
      '<div class="border-t border-[var(--color-divider)] px-4 py-3"><div class="mb-1.5 flex items-center justify-between text-xs"><span class="text-[var(--color-fg-muted)]">입력 진행률</span><span id="rec-progress" class="font-semibold text-[var(--color-fg)]">' + pr.done + " / " + pr.total + " (" + pct + "%)</span></div>" +
      '<div class="h-1.5 overflow-hidden rounded-full bg-[var(--color-divider)]"><div id="rec-bar" class="h-1.5 rounded-full bg-[var(--color-accent)]" style="width:' + pct + '%"></div></div></div></div>' +
      '<div class="' + C.card + '"><div class="border-b border-[var(--color-divider)] px-4 py-2.5 text-sm font-semibold">결재 이력</div><div class="px-4 py-3">' +
      (rec.history.length ? '<ol class="space-y-3">' + rec.history.slice().reverse().map(function (h) {
        var tone = h.act === "승인" ? "bg-[var(--color-status-done-fg)]" : h.act === "반려" ? "bg-[var(--color-status-reject-fg)]" : h.act === "결재 요청" ? "bg-[var(--color-accent)]" : "bg-[var(--color-border)]"
        return '<li class="flex gap-2"><span class="mt-1.5 h-2 w-2 shrink-0 rounded-full ' + tone + '"></span><div class="min-w-0"><div class="text-sm font-medium text-[var(--color-fg)]">' + e(h.act) + ' <span class="font-normal text-[var(--color-fg-muted)]">· ' + e(h.who) + "</span></div>" +
          '<div class="text-[11px] text-[var(--color-fg-subtle)]">' + e(h.at) + "</div>" + (h.note ? '<div class="mt-1 text-xs text-[var(--color-status-reject-fg)]">' + e(h.note) + "</div>" : "") + "</div></li>"
      }).join("") + "</ol>" : '<p class="text-xs text-[var(--color-fg-subtle)]">아직 기록이 없습니다.</p>') + "</div></div></div>"
    var main = '<div class="min-w-0 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-4" style="flex:1 1 560px">' + paperBox(tpl, overlay, "rec-paper") + "</div>"
    return pageHead(["일지 작성", [CY[tpl.cycle] + " 일지 작성 리스트", "#/journal/list?cycle=" + tpl.cycle], tpl.name], tpl.name,
      '<span class="font-mono text-xs">' + e(tpl.code) + "</span> · " + e(CY[tpl.cycle]) + " 일지 · 기준일 " + e(rec.date) + " · " + e(tpl.writer) + " &nbsp;" + badge(rec.status), acts) +
      body(notice + '<div class="flex flex-wrap items-start gap-4">' + main + side + "</div>")
  }

  /* ───────── 일지 양식 관리 (목록) ───────── */
  function pageTemplates() {
    var rows = S.templates.map(function (t, i) {
      return '<tr class="hover:bg-[var(--color-surface-alt)]"><td class="' + C.td + ' text-[var(--color-fg-muted)]">' + pad(i + 1) + "</td>" +
        '<td class="' + C.td + ' font-mono text-[11px] text-[var(--color-fg-muted)] whitespace-nowrap">' + e(t.code) + "</td>" +
        '<td class="' + C.td + '"><a href="#/journal/template/' + t.id + '" class="font-medium hover:text-[var(--color-accent)] hover:underline">' + e(t.name) + "</a></td>" +
        '<td class="' + C.td + ' whitespace-nowrap">' + e(CY[t.cycle]) + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap">' + e(t.writer) + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap">' + e(t.mgr) + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap">' + e(t.dept) + "</td>" +
        '<td class="' + C.td + ' text-right">' + t.fields.length + "개</td>" +
        '<td class="' + C.td + ' whitespace-nowrap">v' + t.version + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap text-[var(--color-fg-muted)]">' + e(t.updated || "-") + "</td>" +
        '<td class="' + C.td + ' text-right whitespace-nowrap"><span class="inline-flex gap-1.5">' + btn("sec", "sm", ic("pencil", "h-3.5 w-3.5") + "양식 편집", 'data-act="go" data-href="#/journal/template/' + t.id + '"') +
        btn("ghost", "sm", "작성 리스트", 'data-act="go" data-href="#/journal/list?cycle=' + t.cycle + '"') + "</span></td></tr>"
    }).join("")
    var head = th("순번") + th("문서번호") + th("양식명") + th("주기") + th("작성 구분") + th("관리부서") + th("작성부서") + '<th class="' + C.th + ' text-right">입력칸</th>' + th("버전") + th("최근 수정") + '<th class="' + C.th + '"></th>'
    var tip = '<div class="mb-4 rounded-md border border-[var(--color-accent)]/35 bg-[var(--color-accent-soft)] px-4 py-2.5 text-xs text-[var(--color-accent)]">※ 쓰던 종이 양식(PDF·사진)을 올리고, 그 위에 입력칸을 얹으면 그대로 전자 일지가 됩니다. 양식명을 눌러 편집기를 열어 보세요.</div>'
    return pageHead(["일지 작성", "일지 양식 관리"], "일지 양식 관리", "종이 양식 위에 입력칸을 배치하고 작성 주기를 정합니다", btn("pri", "md", ic("plus", "h-4 w-4") + "양식 등록", 'data-act="tpl-new"')) +
      body(tip + tableWrap("min-w-[1080px]", head, rows))
  }

  /* ───────── 양식 편집기 ───────── */
  function edState(tpl) {
    if (!S.ui.ed || S.ui.ed.tplId !== tpl.id) S.ui.ed = { tplId: tpl.id, tool: "select", sel: null, hide: false, test: false, undo: [], redo: [], info: false, editInfo: false, showGroup: null, dirty: false, tv: {} }
    return S.ui.ed
  }
  function snap(tpl) { return JSON.stringify({ f: tpl.fields, g: tpl.groups }) }
  function pushUndo(tpl, s) { var ed = S.ui.ed; ed.undo.push(s || snap(tpl)); if (ed.undo.length > 60) ed.undo.shift(); ed.redo = []; ed.dirty = true }
  function restore(tpl, s) { var o = JSON.parse(s); tpl.fields = o.f; tpl.groups = o.g }
  function pageEditor(route) {
    var tpl = T(route.path.split("/")[3])
    if (!tpl) return pageHead(["일지 작성", "일지 양식 관리"], "양식을 찾을 수 없습니다", "") + body("")
    var ed = edState(tpl)
    var tools = [["select", "선택"], ["text", "텍스트"], ["check", "체크"], ["date", "날짜"], ["time", "시간"], ["number", "숫자"], ["select_", "목록 선택"], ["auto", "자동채움"], ["formula", "수식"], ["image", "이미지"], ["sign", "서명"]]
    var tb = tools.map(function (t) {
      var on = ed.tool === t[0]
      return '<button type="button" data-act="ed-tool" data-tool="' + t[0] + '" class="' + C.btn + " h-8 px-2.5 text-sm " + (on ? C.pri : "text-[var(--color-fg)] hover:bg-[var(--color-surface-alt)]") + '"' + (ed.test ? " disabled" : "") + ">" + (t[0] === "select" ? ic("pointer", "h-3.5 w-3.5") : "") + e(t[1]) + "</button>"
    }).join("")
    var toolbar = '<div class="' + C.card + ' mb-4 p-2"><div class="flex flex-wrap items-center gap-1">' + tb +
      '<span class="flex-1"></span>' +
      '<button type="button" data-act="ed-undo" class="' + C.btn + " " + C.ghost + ' h-8 px-2.5 text-sm"' + (ed.undo.length ? "" : " disabled") + ">" + ic("undo", "h-3.5 w-3.5") + "실행취소</button>" +
      '<button type="button" data-act="ed-redo" class="' + C.btn + " " + C.ghost + ' h-8 px-2.5 text-sm"' + (ed.redo.length ? "" : " disabled") + ">" + ic("redo", "h-3.5 w-3.5") + "다시실행</button>" +
      '<button type="button" data-act="ed-hide" class="' + C.btn + " h-8 px-2.5 text-sm " + (ed.hide ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)]" : "text-[var(--color-fg)] hover:bg-[var(--color-surface-alt)]") + '">' + (ed.hide ? "입력칸 보기" : "입력칸 숨김") + "</button>" +
      '<button type="button" data-act="ed-keys" class="' + C.btn + ' h-8 px-2.5 text-sm text-[var(--color-fg)] hover:bg-[var(--color-surface-alt)]">? 단축키</button>' +
      btn("pri", "sm", "필드 저장" + (ed.dirty ? " •" : ""), 'data-act="ed-save"') + "</div>" +
      '<div class="mt-1 flex flex-wrap items-center gap-2">' + btn(ed.test ? "pri" : "sec", "sm", ed.test ? "테스트 입력 끝내기" : "테스트 입력", 'data-act="ed-test"') +
      '<span class="text-xs text-[var(--color-fg-muted)]">' + (ed.test ? "실제 작성 화면처럼 입력해 볼 수 있습니다. 저장되지 않습니다." : ed.tool !== "select" ? "종이 위 원하는 자리를 누르면 「" + e(TYPE_LABEL[ed.tool === "select_" ? "select" : ed.tool]) + "」 입력칸이 생깁니다." : "입력칸을 끌어서 옮기거나, 오른쪽 속성에서 위치·크기를 바꿀 수 있습니다.") + "</span></div></div>"
    var f = ed.sel ? tpl.fields.filter(function (x) { return x.id === ed.sel })[0] : null
    var props = '<p class="text-sm text-[var(--color-fg-muted)]">필드를 선택하면 속성이 표시됩니다.</p>'
    if (f) {
      var num2 = function (k, label) { return '<label class="block"><span class="text-[11px] text-[var(--color-fg-muted)]">' + label + '</span><input type="number" id="pp-' + k + '" data-change="pp-num" data-k="' + k + '" value="' + f[k] + '" class="' + C.inputSm + '"></label>' }
      props = '<div class="space-y-3">' +
        '<label class="block space-y-1"><span class="text-xs font-medium text-[var(--color-fg)]">필드 이름</span><input type="text" id="pp-label" data-input="pp-label" value="' + e(f.label) + '" class="' + C.inputSm + '"></label>' +
        '<label class="block space-y-1"><span class="text-xs font-medium text-[var(--color-fg)]">유형</span>' + selectBox('id="pp-type" data-change="pp-type"', Object.keys(TYPE_LABEL).map(function (k) { return [k, TYPE_LABEL[k]] }), f.type, true) + "</label>" +
        '<div class="grid grid-cols-2 gap-2">' + num2("x", "X") + num2("y", "Y") + num2("w", "너비") + num2("h", "높이") + "</div>" +
        '<div class="flex items-center gap-1"><span class="mr-1 text-xs text-[var(--color-fg-muted)]">이동</span>' +
        ["aleft", "aup", "adown", "aright"].map(function (a) { return btn("sec", "xs", ic(a, "h-3.5 w-3.5"), 'data-act="pp-nudge" data-dir="' + a + '" aria-label="이동"') }).join("") + "</div>" +
        '<label class="block space-y-1"><span class="text-xs font-medium text-[var(--color-fg)]">그룹</span>' + selectBox('id="pp-group" data-change="pp-group"', tpl.groups.concat([["__new", "+ 새 그룹 만들기"]]), f.group, true) + "</label>" +
        (f.type === "select" ? '<label class="block space-y-1"><span class="text-xs font-medium text-[var(--color-fg)]">목록 항목 (쉼표로 구분)</span><input type="text" id="pp-opts" data-change="pp-opts" value="' + e((f.opts || []).join(", ")) + '" class="' + C.inputSm + '"></label>' : "") +
        (f.type === "formula" ? '<div class="rounded-md bg-[var(--color-surface-alt)] px-3 py-2 text-xs text-[var(--color-fg-muted)]">' + (f.formula ? "수식: " + e({ minGte: "참조값 중 최소값 ≥ " + f.formula.v + " 이면 적합", diff: "실중량 − 표시중량", rangePct: "차이율 " + f.formula.lo + "% ~ +" + f.formula.hi + "% 이면 적합" }[f.formula.op] || "") + "<br>참조: " + e(f.formula.refs.map(function (id) { var r = tpl.fields.filter(function (x) { return x.id === id })[0]; return r ? r.label : id }).join(", ")) : "수식이 아직 없습니다. (체험판에서는 기본 수식만 제공)") + "</div>" : "") +
        '<label class="flex items-center gap-2 text-sm"><input type="checkbox" data-change="pp-req" ' + (f.req ? "checked" : "") + ' class="h-4 w-4 accent-[var(--color-accent)]">필수 입력</label>' +
        '<div class="flex gap-2 pt-1">' + btn("sec", "sm", "복제", 'data-act="pp-dup"') + btn("dan", "sm", ic("trash", "h-3.5 w-3.5") + "삭제", 'data-act="pp-del"') + "</div></div>"
    }
    var groupCount = {}
    tpl.fields.forEach(function (x) { groupCount[x.group] = (groupCount[x.group] || 0) + 1 })
    var groups = tpl.groups.map(function (g, i) {
      return '<div class="py-2"><div class="flex items-center gap-1.5 text-sm"><span class="truncate font-medium text-[var(--color-fg)]">' + e(g) + '</span><span class="text-[11px] text-[var(--color-fg-subtle)]">' + (groupCount[g] || 0) + "개</span></div>" +
        '<div class="mt-1 flex items-center gap-1">' +
        '<button type="button" data-act="grp-view" data-i="' + i + '" class="inline-flex items-center gap-1 rounded px-1 text-xs ' + (ed.showGroup === g ? "bg-amber-400/15 text-[var(--color-fg)]" : "text-[var(--color-fg)] hover:bg-[var(--color-surface-alt)]") + '">' + ic("eye", "h-3.5 w-3.5") + "보기</button>" +
        '<button type="button" data-act="grp-rename" data-i="' + i + '" class="rounded p-1 text-[var(--color-fg-muted)] hover:text-[var(--color-accent)]" aria-label="이름 바꾸기">' + ic("pencil", "h-3.5 w-3.5") + "</button>" +
        '<button type="button" data-act="grp-del" data-i="' + i + '" class="rounded p-1 text-[var(--color-danger)] hover:opacity-80" aria-label="그룹 삭제">' + ic("trash", "h-3.5 w-3.5") + "</button>" +
        '<span class="flex-1"></span>' +
        '<button type="button" data-act="grp-move" data-i="' + i + '" data-d="-1" class="rounded p-1 text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] disabled:opacity-30"' + (i === 0 ? " disabled" : "") + ' aria-label="위로">' + ic("aup", "h-3.5 w-3.5") + "</button>" +
        '<button type="button" data-act="grp-move" data-i="' + i + '" data-d="1" class="rounded p-1 text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] disabled:opacity-30"' + (i === tpl.groups.length - 1 ? " disabled" : "") + ' aria-label="아래로">' + ic("adown", "h-3.5 w-3.5") + "</button></div></div>"
    }).join("")
    var side = '<div class="w-[280px] shrink-0 ' + C.card + '"><div class="border-b border-[var(--color-divider)] px-4 py-2.5 text-sm font-semibold">속성</div>' +
      '<div class="px-4 py-3">' + props + "</div>" +
      '<div class="border-t border-[var(--color-divider)] px-4 pt-3 text-xs font-medium text-[var(--color-fg-muted)]">그룹 관리 <span class="text-[var(--color-fg-subtle)]">· 위에서부터 입력 순서</span></div>' +
      '<div class="max-h-[70vh] overflow-y-auto px-4 pb-2 divide-y divide-[var(--color-divider)]">' + groups + "</div></div>"
    var overlay = ""
    if (!ed.hide) overlay = tpl.fields.map(function (x) { return ed.test ? fillField(x, ed.tv, false) : editField(x, ed) }).join("")
    var main = '<div class="min-w-0 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-4 ' + (ed.tool !== "select" && !ed.test ? "cursor-pointer" : "") + '" style="flex:1 1 560px">' + paperBox(tpl, overlay) + "</div>"
    var info = '<div class="' + C.card + ' mb-4"><button type="button" data-act="ed-info" class="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"><span class="min-w-0 truncate text-sm"><b class="mr-1 text-[var(--color-fg)]">기본 정보</b><span class="text-xs text-[var(--color-fg-muted)]">' +
      e(tpl.code + " · " + CY[tpl.cycle] + " 일지 · " + tpl.writer + " · v" + tpl.version + " · " + tpl.file) + "</span></span>" + ic(ed.info ? "up" : "down", "h-4 w-4 shrink-0 text-[var(--color-fg-muted)]") + "</button>"
    if (ed.info) {
      var dis = ed.editInfo ? "" : " disabled"
      info += '<form data-submit="tpl-info" class="border-t border-[var(--color-divider)] px-4 py-4"><div class="grid grid-cols-1 gap-4 md:grid-cols-3">' +
        field("문서번호", '<input name="code" value="' + e(tpl.code) + '" class="' + C.input + '"' + dis + ">") +
        field("양식명", '<input name="name" value="' + e(tpl.name) + '" class="' + C.input + '"' + dis + ">") +
        field("작성 주기", ed.editInfo ? selectBox('name="cycle"', CYCLES, tpl.cycle) : '<input value="' + e(CY[tpl.cycle]) + '" class="' + C.input + '" disabled>') +
        field("작성 구분", ed.editInfo ? selectBox('name="writer"', WRITERS, tpl.writer) : '<input value="' + e(tpl.writer) + '" class="' + C.input + '" disabled>') +
        field("관리부서", ed.editInfo ? selectBox('name="mgr"', DEPTS, tpl.mgr) : '<input value="' + e(tpl.mgr) + '" class="' + C.input + '" disabled>') +
        field("작성부서", ed.editInfo ? selectBox('name="dept"', DEPTS, tpl.dept) : '<input value="' + e(tpl.dept) + '" class="' + C.input + '" disabled>') +
        "</div>" + (ed.editInfo ? '<div class="mt-4 flex justify-end gap-2">' + btn("sec", "md", "취소", 'data-act="tpl-edit-cancel"') + '<button type="submit" class="' + C.btn + " " + C.pri + " " + C.md + '">저장</button></div>' : "") + "</form>"
    }
    info += "</div>"
    var acts = btn("sec", "sm", "양식 다운로드", 'data-act="tpl-download"') + btn("sec", "sm", "수정", 'data-act="tpl-edit"') + btn("sec", "sm", "파일 교체", 'data-act="tpl-file"') + btn("sec", "sm", "삭제", 'data-act="tpl-del"') + btn("sec", "sm", "목록", 'data-act="go" data-href="#/journal/templates"')
    return pageHead(["일지 작성", ["일지 양식 관리", "#/journal/templates"], tpl.name], tpl.name, '<span class="font-mono text-xs">' + e(tpl.code) + "</span> · " + e(CY[tpl.cycle]) + " 일지 · " + e(tpl.writer), acts) +
      body(info + toolbar + '<div class="flex flex-wrap items-start gap-4">' + main + side + "</div>")
  }

  /* ───────── 성적서 ───────── */
  function repState() {
    if (!S.ui.rep) S.ui.rep = { kind: "all", from: addM(TODAY, -36), to: TODAY, applied: null, sort: { key: "issue", dir: -1 } }
    if (!S.ui.rep.applied) S.ui.rep.applied = { kind: S.ui.rep.kind, from: S.ui.rep.from, to: S.ui.rep.to }
    return S.ui.rep
  }
  function pageRepRegister() {
    var html = '<form data-submit="rep-save" class="' + C.card + ' max-w-4xl p-6"><div class="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">' +
      field("성적서 종류", selectBox('name="kind"', REP_KINDS.map(function (k) { return k[0] }), "자가품질검사"), true) +
      field("업체명(발급/검사기관)", '<input name="org" required placeholder="예: ○○시험연구원" class="' + C.input + '">', true) +
      field("제품 종류", '<input name="ptype" placeholder="예: 분쇄가공육" class="' + C.input + '">') +
      field("제품명", '<input name="pname" placeholder="예: 떡갈비 1kg" class="' + C.input + '">') +
      field("발급일자", '<input type="date" name="issue" required value="' + TODAY + '" class="' + C.input + '">', true) +
      field("기타", '<input name="etc" class="' + C.input + '">') +
      field("내용", '<textarea name="content" class="' + C.input + ' min-h-[110px] py-2"></textarea>', false, "md:col-span-2") +
      '<div class="space-y-1.5 md:col-span-2"><span class="' + C.label + '">첨부파일</span>' + dropzone("rep") + "</div>" +
      "</div>" + '<p class="mt-4 text-xs text-[var(--color-fg-subtle)]">다음 검사 예정일은 「알림 설정」의 종류별 주기로 자동 계산됩니다.</p>' +
      '<div class="mt-4 flex justify-end gap-2">' + btn("sec", "md", "취소", 'data-act="go" data-href="#/reports/list"') + '<button type="submit" class="' + C.btn + " " + C.pri + " " + C.md + '">저장</button></div></form>'
    return pageHead(["성적서 관리", "성적서 등록"], "성적서 등록", "성적서 종류를 선택하고 정보를 입력하세요") + body(html)
  }
  function pageRepList() {
    var st = repState(), a = st.applied
    var rows = S.reports.filter(function (r) { return (a.kind === "all" || r.kind === a.kind) && (!a.from || r.issue >= a.from) && (!a.to || r.issue <= a.to) })
    var sk = st.sort
    rows.sort(function (x, y) { var p = sk.key === "due" ? repDue(x) : x[sk.key], q = sk.key === "due" ? repDue(y) : y[sk.key]; return (p < q ? -1 : p > q ? 1 : 0) * sk.dir })
    var exp = 0
    var body2 = rows.map(function (r) {
      var due = repDue(r), x = expState(due, r.issue)
      if (x.st !== "정상") exp++
      return '<tr class="hover:bg-[var(--color-surface-alt)]"><td class="' + C.td + ' whitespace-nowrap">' + e(r.issue) + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap">' + e(r.kind) + "</td>" + '<td class="' + C.td + '">' + e(r.org) + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap">' + e(r.ptype || "-") + "</td>" + '<td class="' + C.td + '">' + e(r.pname || "-") + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap">' + e(due) + ' <span class="text-[11px] text-[var(--color-fg-muted)]">' + e(dday(x.left)) + "</span></td>" +
        '<td class="' + C.td + '">' + badge(x.st) + (r.renewed ? ' <span class="text-[11px] text-[var(--color-fg-subtle)]">갱신 ' + r.renewed + "회</span>" : "") + "</td>" +
        '<td class="' + C.td + '">' + (r.files.length ? '<span class="inline-flex items-center gap-1 text-xs text-[var(--color-accent)]">' + ic("clip", "h-3.5 w-3.5") + r.files.length + "</span>" : "-") + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap"><span class="inline-flex gap-1.5">' + btn(x.st === "정상" ? "sec" : "pri", "sm", ic("refresh", "h-3.5 w-3.5") + "갱신", 'data-act="renew" data-kind="rep" data-id="' + r.id + '"') + btn("ghost", "sm", ic("trash", "h-3.5 w-3.5"), 'data-act="del-doc" data-kind="rep" data-id="' + r.id + '" aria-label="삭제"') + "</span></td></tr>"
    }).join("")
    var search = '<div class="' + C.card + ' mb-4"><div class="' + C.secHead + '">' + ic("search", "h-4 w-4 text-[var(--color-fg-muted)]") + "성적서 조회</div>" +
      '<div class="flex flex-wrap items-end gap-3 p-4"><div class="flex items-center gap-2"><span class="text-sm text-[var(--color-fg)]">종류</span><div class="w-44">' + selectBox('id="rp-kind" data-change="rp-kind"', [["all", "전체"]].concat(REP_KINDS.map(function (k) { return k[0] })), st.kind) + "</div></div>" +
      '<div class="w-40 space-y-1.5"><span class="block text-xs font-semibold text-[var(--color-fg)]">FROM</span><input type="date" id="rp-from" data-change="rp-from" value="' + e(st.from) + '" class="' + C.input + '"></div>' +
      '<div class="w-40 space-y-1.5"><span class="block text-xs font-semibold text-[var(--color-fg)]">TO</span><input type="date" id="rp-to" data-change="rp-to" value="' + e(st.to) + '" class="' + C.input + '"></div>' +
      btn("pri", "md", ic("search", "h-4 w-4") + "조회", 'data-act="rp-search"') + "</div></div>"
    var head = th("발급일자", "issue", sk) + th("종류", "kind", sk) + th("업체명", "org", sk) + th("제품 종류", "ptype", sk) + th("제품명", "pname", sk) + th("다음 검사 예정", "due", sk) + th("상태") + th("첨부") + th("작업")
    var summary = '<div class="mb-2 flex flex-wrap items-center gap-3 text-xs text-[var(--color-fg-muted)]"><span>총 <b class="text-[var(--color-fg)]">' + rows.length + "</b>건</span>" + (exp ? '<span class="text-[var(--color-status-writing-fg)]">만료·만료임박 ' + exp + "건, 갱신이 필요합니다</span>" : "") + "</div>"
    return pageHead(["성적서 관리", "성적서 조회"], "성적서 조회", "등록된 성적서를 종류·기간으로 조회합니다", btn("pri", "md", ic("plus", "h-4 w-4") + "성적서 등록", 'data-act="go" data-href="#/reports/register"')) +
      body(search + summary + tableWrap("min-w-[1040px]", head, body2))
  }

  /* ───────── 보건증 · 교육수료증 ───────── */
  var CERT = {
    health: { title: "보건증 관리", crumb: "보건증", list: function () { return S.health }, extra: false },
    edu: { title: "교육수료증 관리", crumb: "교육수료증", list: function () { return S.edu }, extra: true },
  }
  function pageCert(kind) {
    var cfg = CERT[kind], fm = S.ui.hform[kind]
    var n = notifOf(kind === "health" ? "health" : "edu"), months = n ? (CYC_MONTHS[n.cycle] || 12) : 12
    if (!fm) fm = S.ui.hform[kind] = { emp: "", name: "", no: "", issue: TODAY, expire: addM(TODAY, months), note: "", course: "HACCP 종사자 위생교육", org: "" }
    var cs = S.ui.cert[kind] || (S.ui.cert[kind] = { by: "all", q: "" })
    var empOpts = [["", "직접 입력 (외부 기관·비사원)"]].concat(S.staff.map(function (s) { return [s.no, s.name + " · " + s.dept + " (" + s.no + ")"] }))
    var reg = '<div class="' + C.card + ' mb-4"><div class="' + C.secHead + '">등록</div><form data-submit="cert-save" data-kind="' + kind + '" class="p-4"><div class="grid grid-cols-1 gap-4 md:grid-cols-2">' +
      field("사원 선택", selectBox('id="cf-emp" data-change="cf-emp" data-kind="' + kind + '"', empOpts, fm.emp), false, "md:col-span-2") +
      field("성명", '<input id="cf-name" data-input="cf" data-kind="' + kind + '" data-k="name" value="' + e(fm.name) + '" placeholder="예: 홍길동" class="' + C.input + '">', true) +
      field("사번", '<input id="cf-no" data-input="cf" data-kind="' + kind + '" data-k="no" value="' + e(fm.no) + '" placeholder="예: M-001" class="' + C.input + '">') +
      (cfg.extra ? field("교육명", '<input id="cf-course" data-input="cf" data-kind="' + kind + '" data-k="course" value="' + e(fm.course) + '" class="' + C.input + '">') + field("교육기관", '<input id="cf-org" data-input="cf" data-kind="' + kind + '" data-k="org" value="' + e(fm.org) + '" placeholder="예: ○○위생교육원" class="' + C.input + '">') : "") +
      field(cfg.extra ? "수료일" : "발급일", '<input type="date" id="cf-issue" data-change="cf-issue" data-kind="' + kind + '" value="' + e(fm.issue) + '" class="' + C.input + '">') +
      field("만료일", '<input type="date" id="cf-expire" data-change="cf-expire" data-kind="' + kind + '" value="' + e(fm.expire) + '" class="' + C.input + '">') +
      field("비고", '<input id="cf-note" data-input="cf" data-kind="' + kind + '" data-k="note" value="' + e(fm.note) + '" class="' + C.input + '">') + "<div></div>" +
      '<div class="space-y-1.5 md:col-span-2"><span class="' + C.label + '">첨부파일</span>' + dropzone("cert-" + kind) + "</div></div>" +
      '<p class="mt-2 text-[11px] text-[var(--color-fg-subtle)]">만료일은 ' + (cfg.extra ? "수료일" : "발급일") + " +" + (months === 12 ? "1년" : months + "개월") + "으로 자동 채워집니다 (알림 설정 기준). 필요하면 직접 고칠 수 있습니다.</p>" +
      '<div class="mt-3 flex justify-end"><button type="submit" class="' + C.btn + " " + C.pri + " " + C.md + '">' + ic("save", "h-4 w-4") + "저장</button></div></form></div>"
    var list = cfg.list().filter(function (r) {
      if (!cs.q) return true
      var q = cs.q.toLowerCase()
      if (cs.by === "name") return r.name.toLowerCase().indexOf(q) >= 0
      if (cs.by === "no") return (r.no || "").toLowerCase().indexOf(q) >= 0
      if (cs.by === "issue") return r.issue.indexOf(q) >= 0
      return (r.name + " " + r.no + " " + r.issue + " " + (r.dept || "")).toLowerCase().indexOf(q) >= 0
    }).slice().sort(function (a, b) { return a.expire < b.expire ? -1 : 1 })
    var tally = { "만료": 0, "만료임박": 0, "정상": 0 }
    var rows = list.map(function (r) {
      var x = expState(r.expire, r.issue); tally[x.st]++
      return '<tr class="' + (x.st === "만료" ? "bg-[var(--color-status-reject-bg)]" : "hover:bg-[var(--color-surface-alt)]") + '"><td class="' + C.td + ' font-medium whitespace-nowrap">' + e(r.name) + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap text-[var(--color-fg-muted)]">' + e(r.no || "-") + "</td>" + '<td class="' + C.td + ' whitespace-nowrap">' + e(r.dept || "외부") + "</td>" +
        (cfg.extra ? '<td class="' + C.td + '">' + e(r.course) + '<div class="text-[11px] text-[var(--color-fg-subtle)]">' + e(r.org || "") + "</div></td>" : "") +
        '<td class="' + C.td + ' whitespace-nowrap">' + e(r.issue) + "</td>" + '<td class="' + C.td + ' whitespace-nowrap">' + e(r.expire) + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap font-medium ' + (x.st === "만료" ? "text-[var(--color-status-reject-fg)]" : x.st === "만료임박" ? "text-[var(--color-status-writing-fg)]" : "text-[var(--color-fg-muted)]") + '">' + e(dday(x.left)) + "</td>" +
        '<td class="' + C.td + '">' + badge(x.st) + (r.renewed ? ' <span class="text-[11px] text-[var(--color-fg-subtle)]">갱신 ' + r.renewed + "회</span>" : "") + "</td>" +
        '<td class="' + C.td + '">' + (r.files.length ? '<span class="inline-flex items-center gap-1 text-xs text-[var(--color-accent)]">' + ic("clip", "h-3.5 w-3.5") + r.files.length + "</span>" : "-") + "</td>" +
        '<td class="' + C.td + ' whitespace-nowrap"><span class="inline-flex gap-1.5">' + btn(x.st === "정상" ? "sec" : "pri", "sm", ic("refresh", "h-3.5 w-3.5") + "갱신", 'data-act="renew" data-kind="' + kind + '" data-id="' + r.id + '"') + btn("ghost", "sm", ic("trash", "h-3.5 w-3.5"), 'data-act="del-doc" data-kind="' + kind + '" data-id="' + r.id + '" aria-label="삭제"') + "</span></td></tr>"
    }).join("")
    var radios = [["name", "성명 조회"], ["no", "사번 조회"], ["issue", (cfg.extra ? "수료일" : "발급일") + " 조회"], ["all", "전체 조회"]].map(function (r) {
      var on = cs.by === r[0]
      return '<button type="button" data-act="cert-by" data-kind="' + kind + '" data-by="' + r[0] + '" class="inline-flex items-center gap-2 text-sm text-[var(--color-fg)]"><span class="inline-flex h-4 w-4 items-center justify-center rounded-full ' + (on ? "bg-[var(--color-accent)]" : "border border-[var(--color-border-strong)] bg-[var(--color-surface)]") + '">' + (on ? '<span class="h-1.5 w-1.5 rounded-full bg-white"></span>' : "") + "</span>" + e(r[1]) + "</button>"
    }).join("")
    var head = th("성명") + th("사번") + th("부서") + (cfg.extra ? th("교육명 / 기관") : "") + th(cfg.extra ? "수료일" : "발급일") + th("만료일") + th("남은 기간") + th("상태") + th("첨부") + th("작업")
    var look = '<div class="' + C.card + '"><div class="' + C.secHead + '">조회</div><div class="p-4"><div class="mb-3 flex flex-wrap items-center gap-x-5 gap-y-2">' + radios + "</div>" +
      '<div class="mb-3 flex flex-wrap items-center gap-3"><div class="min-w-[240px] flex-1"><input id="cs-q" data-input="cs-q" data-kind="' + kind + '" value="' + e(cs.q) + '" placeholder="검색어를 입력하세요" class="' + C.input + '"></div>' +
      '<span class="flex flex-wrap items-center gap-2 text-xs text-[var(--color-fg-muted)]">' + badge("만료") + tally["만료"] + " " + badge("만료임박") + tally["만료임박"] + " " + badge("정상") + tally["정상"] + "</span></div>" +
      '<div class="overflow-x-auto rounded-md border border-[var(--color-border)]"><table class="w-full min-w-[1040px] border-collapse"><thead class="bg-[var(--color-surface-alt)] border-b border-[var(--color-border)]"><tr>' + head + '</tr></thead><tbody class="divide-y divide-[var(--color-divider)]">' +
      (rows || '<tr><td colspan="10" class="py-12 text-center text-sm text-[var(--color-fg-muted)]">데이터가 없습니다</td></tr>') + "</tbody></table></div></div></div>"
    return pageHead(["법적서류 관리", cfg.crumb], cfg.title, "") + body(reg + look)
  }

  /* ───────── 결재 승인 ───────── */
  function pageApprovals() {
    var wait = S.records.filter(function (r) { return r.status === "승인대기" }).sort(function (a, b) { return a.date < b.date ? -1 : 1 })
    var tab = S.ui.approvalTab
    var tabs = '<div class="mb-4 flex gap-1 border-b border-[var(--color-border)]">' + [["wait", "결재 대기 (" + wait.length + ")"], ["all", "전체 결재 이력"]].map(function (t) {
      var on = tab === t[0]
      return '<button type="button" data-act="ap-tab" data-tab="' + t[0] + '" class="-mb-px border-b-2 px-3 py-2.5 text-sm ' + (on ? "border-[var(--color-accent)] font-semibold text-[var(--color-accent)]" : "border-transparent text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]") + '">' + e(t[1]) + "</button>"
    }).join("") + "</div>"
    var html
    if (tab === "wait") {
      html = '<div class="' + C.card + '"><div class="' + C.secHead + '">' + ic("file", "h-4 w-4 text-[var(--color-fg-muted)]") + '결재 대기 일지 <span class="inline-flex h-5 min-w-[1.75rem] items-center justify-center rounded-full bg-[var(--color-accent)] px-1.5 text-[11px] font-bold text-white">' + wait.length + "</span></div>" +
        (wait.length ? '<div class="divide-y divide-[var(--color-divider)]">' + wait.map(function (r) {
          var t = T(r.tplId)
          return '<div class="flex flex-wrap items-center justify-between gap-3 px-4 py-3"><div class="min-w-0"><div class="text-[11px] text-[var(--color-fg-subtle)]"><span class="font-mono">' + e(t.code) + "</span> " + e(CY[t.cycle]) + " · " + e(r.date) + "</div>" +
            '<div class="text-sm font-semibold text-[var(--color-fg)]">' + e(t.name) + '</div><div class="text-[11px] text-[var(--color-fg-muted)]">' + e(t.name) + " · " + e(t.dept) + " · 작성 " + e(r.writer) + "</div></div>" +
            '<div class="flex gap-2">' + btn("sec", "sm", ic("eye", "h-4 w-4") + "내용 보기", 'data-act="open-rec" data-id="' + r.id + '"') + btn("pri", "sm", ic("check", "h-4 w-4") + "승인", 'data-act="rec-approve" data-id="' + r.id + '"') + btn("sec", "sm", ic("x", "h-4 w-4") + "반려", 'data-act="rec-reject" data-id="' + r.id + '"') + "</div></div>"
        }).join("") + "</div>" : '<div class="py-12 text-center text-sm text-[var(--color-fg-muted)]">결재 대기 중인 일지가 없습니다</div>') + "</div>"
    } else {
      var hist = []
      S.records.forEach(function (r) { r.history.forEach(function (h) { if (h.act !== "작성" && h.act !== "임시 저장") hist.push({ r: r, h: h }) }) })
      hist.sort(function (a, b) { return a.h.at < b.h.at ? 1 : -1 })
      var rows = hist.slice(0, 60).map(function (x) {
        var t = T(x.r.tplId), tone = x.h.act === "승인" ? "완료" : x.h.act === "반려" ? "반려" : x.h.act === "결재 요청" ? "승인대기" : "미작성"
        return '<tr class="hover:bg-[var(--color-surface-alt)]"><td class="' + C.td + ' whitespace-nowrap text-[var(--color-fg-muted)]">' + e(x.h.at) + "</td>" + '<td class="' + C.td + ' font-mono text-[11px] text-[var(--color-fg-muted)]">' + e(t.code) + "</td>" +
          '<td class="' + C.td + '"><a href="#/journal/record/' + x.r.id + '" class="hover:text-[var(--color-accent)] hover:underline">' + e(t.name) + "</a></td>" + '<td class="' + C.td + ' whitespace-nowrap">' + e(x.r.date) + "</td>" +
          '<td class="' + C.td + '">' + badge(tone, x.h.act) + "</td>" + '<td class="' + C.td + ' whitespace-nowrap">' + e(x.h.who) + "</td>" + '<td class="' + C.td + ' text-xs text-[var(--color-fg-muted)]">' + e(x.h.note || "") + "</td></tr>"
      }).join("")
      html = tableWrap("min-w-[1040px]", th("일시") + th("문서번호") + th("일지") + th("기준일") + th("처리") + th("처리자") + th("사유"), rows)
    }
    return pageHead(["설정 및 관리", "결재 승인 관리"], "결재 승인 관리", "제출된 일지를 승인하거나 반려합니다", btn("sec", "md", ic("refresh", "h-4 w-4") + "새로고침", 'data-act="ap-refresh"')) + body(tabs + html)
  }

  /* ───────── 알림 설정 ───────── */
  function pageNotif() {
    var cyc = ["일", "주", "월", "분기", "반기", "1년"]
    var rows = S.notif.map(function (n, i) {
      return '<tr class="hover:bg-[var(--color-surface-alt)]"><td class="' + C.td + '">' + e(n.name) + "</td>" +
        '<td class="' + C.td + ' text-center"><input type="date" id="nt-start-' + i + '" data-change="nt-start" data-i="' + i + '" value="' + e(n.start) + '" class="h-8 rounded-md border border-transparent bg-transparent px-1 text-sm hover:border-[var(--color-accent)] focus:border-[var(--color-accent)] focus:outline-none"></td>' +
        cyc.map(function (c) {
          var on = n.cycle === c
          return '<td class="' + C.td + ' text-center"><button type="button" data-act="nt-cycle" data-i="' + i + '" data-c="' + c + '" aria-label="' + e(n.name + " " + c) + '" class="inline-flex h-5 w-5 items-center justify-center rounded-full align-middle ' + (on ? "bg-[var(--color-accent)]" : "border border-[var(--color-border-strong)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]") + '">' + (on ? '<span class="h-2 w-2 rounded-full bg-white"></span>' : "") + "</button></td>"
        }).join("") +
        '<td class="' + C.td + ' text-center"><button type="button" data-act="nt-on" data-i="' + i + '" class="font-semibold ' + (n.on ? "text-[var(--color-fg)]" : "text-[var(--color-fg-subtle)]") + '">' + (n.on ? "Y" : "N") + "</button></td>" +
        '<td class="' + C.td + ' text-[var(--color-fg-muted)]"></td></tr>'
    }).join("")
    var head = th("관리 항목") + '<th class="' + C.th + ' text-center">시작일</th>' + cyc.map(function (c) { return '<th class="' + C.th + ' text-center">' + c + "</th>" }).join("") + '<th class="' + C.th + ' text-center">적용</th>' + th("비고")
    return pageHead(["설정 및 관리", "알림 설정 관리"], "알림 설정 관리", "HACCP 관리 항목별 알림 주기 설정") +
      body('<div class="mb-4 rounded-md border border-[var(--color-accent)]/35 bg-[var(--color-accent-soft)] px-4 py-2.5 text-xs text-[var(--color-accent)]">※ 체험판의 알림 설정은 <b>브라우저 메모리에만</b> 저장되며 새로고침하면 처음으로 돌아갑니다. 성적서·보건증 주기를 바꾸면 만료 표시가 바로 다시 계산됩니다.</div>' +
        tableWrap("min-w-[1040px]", head, rows) + '<div class="mt-4 flex justify-end">' + btn("pri", "md", ic("save", "h-4 w-4") + "저장", 'data-act="nt-save"') + "</div>")
  }

  /* ───────── 업체정보 ───────── */
  function pageCompany() {
    var c = S.company
    var row = function (label, name, val, req) {
      return '<div class="grid grid-cols-1 items-center gap-2 border-b border-[var(--color-divider)] py-3 last:border-b-0 md:grid-cols-[160px_minmax(0,1fr)]"><label class="text-sm font-medium text-[var(--color-fg)]">' + e(label) + (req ? REQ : "") + '</label><input name="' + name + '" value="' + e(val) + '" class="' + C.input + '"' + (req ? " required" : "") + "></div>"
    }
    return pageHead(["업체정보 관리", "우리 회사 등록"], "우리 회사 등록", "일지 머리글·인쇄물에 들어가는 회사 기본 정보") +
      body('<form data-submit="company-save" class="' + C.card + ' max-w-4xl"><div class="' + C.secHead + '">회사 정보</div><div class="px-6 py-2">' +
        row("회사명", "name", c.name, 1) + row("대표자", "ceo", c.ceo, 1) + row("사업자등록번호", "biz", c.biz, 1) + row("HACCP 지정번호", "haccp", c.haccp) + row("대표 전화", "tel", c.tel) + row("팩스", "fax", c.fax) + row("주소", "addr", c.addr) + row("주요 품목", "items", c.items) + row("HACCP 지정일", "since", c.since) +
        '</div><div class="flex justify-end border-t border-[var(--color-divider)] px-6 py-4"><button type="submit" class="' + C.btn + " " + C.pri + " " + C.md + '">' + ic("save", "h-4 w-4") + "저장</button></div></form>")
  }
  function pagePartners() {
    var rows = S.partners.map(function (p, i) {
      return '<tr class="hover:bg-[var(--color-surface-alt)]"><td class="' + C.td + ' text-[var(--color-fg-muted)]">' + pad(i + 1) + '</td><td class="' + C.td + ' font-medium">' + e(p.name) + '</td><td class="' + C.td + '">' + e(p.type) + '</td><td class="' + C.td + '">' + e(p.ceo) + '</td><td class="' + C.td + ' whitespace-nowrap">' + e(p.biz) + '</td><td class="' + C.td + ' whitespace-nowrap">' + e(p.tel) + '</td><td class="' + C.td + '">' + e(p.items) + '</td><td class="' + C.td + '">' + (p.haccp === "인증" ? badge("완료", "HACCP 인증") : '<span class="text-xs text-[var(--color-fg-muted)]">' + e(p.haccp) + "</span>") + '</td><td class="' + C.td + ' text-right">' + btn("ghost", "sm", ic("trash", "h-3.5 w-3.5"), 'data-act="partner-del" data-i="' + i + '" aria-label="삭제"') + "</td></tr>"
    }).join("")
    return pageHead(["업체정보 관리", "거래처 등록"], "거래처 등록", "원료·포장재 공급처와 검사기관을 관리합니다", btn("pri", "md", ic("plus", "h-4 w-4") + "거래처 등록", 'data-act="modal" data-m="partner"')) +
      body(tableWrap("min-w-[1040px]", th("순번") + th("거래처명") + th("구분") + th("대표자") + th("사업자번호") + th("연락처") + th("취급 품목") + th("HACCP") + '<th class="' + C.th + '"></th>', rows))
  }

  /* ───────── 제품 정보 ───────── */
  function pageProducts() {
    var rows = S.products.map(function (p) {
      return '<tr class="hover:bg-[var(--color-surface-alt)]"><td class="' + C.td + ' font-mono text-[11px] text-[var(--color-fg-muted)]">' + e(p.id) + '</td><td class="' + C.td + ' font-medium">' + e(p.name) + '</td><td class="' + C.td + '">' + e(p.type) + '</td><td class="' + C.td + '">' + e(p.spec) + '</td><td class="' + C.td + '">' + e(p.store) + '</td><td class="' + C.td + '">' + e(p.shelf) + '</td><td class="' + C.td + '">' + (S.recipes[p.id] ? S.recipes[p.id].length + "종" : "-") + '</td><td class="' + C.td + '"><button type="button" data-act="prod-use" data-id="' + p.id + '">' + badge(p.use ? "완료" : "미작성", p.use ? "사용" : "중지") + "</button></td></tr>"
    }).join("")
    return pageHead(["제품 정보 관리", "제품 등록"], "제품 등록", "생산 제품과 보관 조건·소비기한을 등록합니다", btn("pri", "md", ic("plus", "h-4 w-4") + "제품 등록", 'data-act="modal" data-m="product"')) +
      body(tableWrap("min-w-[1040px]", th("제품코드") + th("제품명") + th("유형") + th("규격") + th("보관 조건") + th("소비기한") + th("레시피") + th("사용"), rows))
  }
  function pageRecipes() {
    var sel = S.ui.recipeSel || S.products[0].id, p = S.products.filter(function (x) { return x.id === sel })[0] || S.products[0]
    var list = S.recipes[p.id] || (S.recipes[p.id] = [])
    var sum = list.reduce(function (s, x) { return s + (Number(x.pct) || 0) }, 0)
    var left = '<div class="w-72 shrink-0 ' + C.card + '"><div class="border-b border-[var(--color-divider)] px-4 py-2.5 text-sm font-semibold">제품</div><div class="py-1">' + S.products.map(function (x) {
      return '<button type="button" data-act="recipe-sel" data-id="' + x.id + '" class="flex w-full items-center justify-between border-l-[3px] pl-[17px] pr-4 py-2 text-left text-sm ' + (x.id === p.id ? "border-l-[var(--color-accent)] bg-[var(--color-accent-soft)] font-semibold text-[var(--color-accent)]" : "border-transparent hover:bg-[var(--color-surface-alt)]") + '">' + e(x.name) + '<span class="text-[11px] text-[var(--color-fg-subtle)]">' + (S.recipes[x.id] || []).length + "</span></button>"
    }).join("") + "</div></div>"
    var rows = list.map(function (x, i) {
      return '<tr><td class="' + C.td + ' text-[var(--color-fg-muted)]">' + (i + 1) + '</td><td class="' + C.td + '"><input id="rc-n-' + i + '" data-input="rc" data-i="' + i + '" data-k="name" value="' + e(x.name) + '" class="' + C.inputSm + '"></td>' +
        '<td class="' + C.td + ' w-40"><input id="rc-p-' + i + '" type="number" step="0.1" data-change="rc-pct" data-i="' + i + '" value="' + e(x.pct) + '" class="' + C.inputSm + ' text-right"></td><td class="' + C.td + ' text-right">' + btn("ghost", "sm", ic("trash", "h-3.5 w-3.5"), 'data-act="rc-del" data-i="' + i + '" aria-label="삭제"') + "</td></tr>"
    }).join("")
    var ok = Math.abs(sum - 100) < 0.01
    var right = '<div class="min-w-0 ' + C.card + '" style="flex:1 1 480px"><div class="flex items-center justify-between border-b border-[var(--color-divider)] px-4 py-2.5"><span class="text-sm font-semibold">' + e(p.name) + ' 배합비</span><span class="text-sm ' + (ok ? "text-[var(--color-status-done-fg)]" : "text-[var(--color-danger)]") + '">합계 ' + e(Math.round(sum * 10) / 10) + "% " + (ok ? "✓" : "(100%가 되어야 합니다)") + "</span></div>" +
      '<div class="overflow-x-auto"><table class="w-full border-collapse"><thead class="bg-[var(--color-surface-alt)] border-b border-[var(--color-border)]"><tr>' + th("No") + th("원료명") + th("배합비(%)") + '<th class="' + C.th + '"></th></tr></thead><tbody class="divide-y divide-[var(--color-divider)]">' + rows + "</tbody></table></div>" +
      '<div class="flex justify-between gap-2 border-t border-[var(--color-divider)] px-4 py-3">' + btn("sec", "sm", ic("plus", "h-3.5 w-3.5") + "원료 추가", 'data-act="rc-add"') + btn("pri", "sm", ic("save", "h-3.5 w-3.5") + "저장", 'data-act="rc-save"') + "</div></div>"
    return pageHead(["제품 정보 관리", "레시피 등록"], "레시피 등록", "제품별 원료 배합비(%)를 등록합니다. 배합량 계산에 쓰입니다.") + body('<div class="flex flex-wrap items-start gap-4">' + left + right + "</div>")
  }
  function pageBatches() {
    var b = S.ui.batch || (S.ui.batch = { pid: S.products[0].id, total: 300, date: TODAY })
    var list = S.recipes[b.pid] || [], total = Number(b.total) || 0
    var rows = list.map(function (x, i) {
      return '<tr><td class="' + C.td + ' text-[var(--color-fg-muted)]">' + (i + 1) + '</td><td class="' + C.td + '">' + e(x.name) + '</td><td class="' + C.td + ' text-right">' + e(x.pct) + '%</td><td class="' + C.td + ' text-right font-semibold text-[var(--color-accent)]">' + e((x.pct * total / 100).toFixed(2)) + " kg</td></tr>"
    }).join("")
    var calc = '<div class="' + C.card + ' mb-4"><div class="' + C.secHead + '">배합량 계산</div><div class="p-4"><div class="flex flex-wrap items-end gap-3">' +
      '<div class="w-72">' + field("제품", selectBox('id="bt-pid" data-change="bt-pid"', S.products.map(function (p) { return [p.id, p.name] }), b.pid)) + "</div>" +
      '<div class="w-40">' + field("생산일", '<input type="date" id="bt-date" data-change="bt-date" value="' + e(b.date) + '" class="' + C.input + '">') + "</div>" +
      '<div class="w-40">' + field("총 배합량 (kg)", '<input type="number" id="bt-total" data-input="bt-total" value="' + e(b.total) + '" class="' + C.input + ' text-right">') + "</div>" +
      btn("pri", "md", ic("save", "h-4 w-4") + "배합 기록 저장", 'data-act="bt-save"') + "</div>" +
      '<div class="mt-4 overflow-x-auto rounded-md border border-[var(--color-border)]"><table class="w-full border-collapse"><thead class="bg-[var(--color-surface-alt)] border-b border-[var(--color-border)]"><tr>' + th("No") + th("원료명") + '<th class="' + C.th + ' text-right">배합비</th><th class="' + C.th + ' text-right">투입량</th></tr></thead><tbody id="bt-body" class="divide-y divide-[var(--color-divider)]">' + rows + "</tbody></table></div>" +
      '<p class="mt-2 text-[11px] text-[var(--color-fg-subtle)]">투입량 = 총 배합량 × 배합비 ÷ 100 (레시피 등록의 배합비를 그대로 씁니다)</p></div></div>'
    var hist = S.batches.slice().sort(function (a, c) { return a.date < c.date ? 1 : -1 }).map(function (x) {
      var p = S.products.filter(function (pp) { return pp.id === x.pid })[0]
      return '<tr class="hover:bg-[var(--color-surface-alt)]"><td class="' + C.td + '">' + e(x.date) + '</td><td class="' + C.td + '">' + e(p ? p.name : x.pid) + '</td><td class="' + C.td + ' text-right">' + e(Demo.num(x.total)) + ' kg</td><td class="' + C.td + '">' + e(x.by) + "</td></tr>"
    }).join("")
    return pageHead(["제품 정보 관리", "배합량 등록"], "배합량 등록", "총 생산량을 넣으면 원료별 투입량이 자동 계산됩니다") +
      body(calc + tableWrap("min-w-[640px]", th("생산일") + th("제품") + '<th class="' + C.th + ' text-right">총 배합량</th>' + th("작성자"), hist))
  }

  /* ───────── 사원 / 사용자 ───────── */
  function pageEmployees() {
    var rows = S.staff.map(function (s) {
      var h = S.health.filter(function (x) { return x.no === s.no })[0], hx = h ? expState(h.expire, h.issue) : null
      return '<tr class="hover:bg-[var(--color-surface-alt)]"><td class="' + C.td + ' font-mono text-[11px] text-[var(--color-fg-muted)]">' + e(s.no) + '</td><td class="' + C.td + ' font-medium">' + e(s.name) + '</td><td class="' + C.td + '">' + e(s.dept) + '</td><td class="' + C.td + '">' + e(s.pos) + '</td><td class="' + C.td + ' whitespace-nowrap">' + e(s.tel) + '</td><td class="' + C.td + ' whitespace-nowrap">' + e(s.join) + '</td><td class="' + C.td + '">' + (hx ? '<a href="#/certs/health">' + badge(hx.st, "보건증 " + hx.st) + "</a>" : "-") + '</td><td class="' + C.td + '"><button type="button" data-act="staff-active" data-no="' + s.no + '">' + badge(s.active ? "완료" : "미작성", s.active ? "재직" : "퇴사") + "</button></td></tr>"
    }).join("")
    return pageHead(["설정 및 관리", "사원 관리"], "사원 관리", "일지 작성자·보건증·교육수료증과 연결되는 사원 명부", btn("pri", "md", ic("plus", "h-4 w-4") + "사원 등록", 'data-act="modal" data-m="staff"')) +
      body(tableWrap("min-w-[1040px]", th("사번") + th("성명") + th("부서") + th("직책") + th("연락처") + th("입사일") + th("보건증") + th("상태"), rows))
  }
  function pageUsers() {
    var rows = S.users.map(function (u, i) {
      return '<tr class="hover:bg-[var(--color-surface-alt)]"><td class="' + C.td + ' font-mono text-xs">' + e(u.id) + '</td><td class="' + C.td + ' font-medium">' + e(u.name) + '</td><td class="' + C.td + ' w-44">' + selectBox('id="us-role-' + i + '" data-change="us-role" data-i="' + i + '"', ["관리자", "결재자", "작성자", "조회 전용"], u.role, true) + '</td><td class="' + C.td + ' whitespace-nowrap text-[var(--color-fg-muted)]">' + e(u.last) + '</td><td class="' + C.td + '"><button type="button" data-act="us-active" data-i="' + i + '">' + badge(u.active ? "완료" : "미작성", u.active ? "사용" : "잠김") + '</button></td><td class="' + C.td + ' text-right">' + btn("sec", "sm", ic("key", "h-3.5 w-3.5") + "비밀번호 초기화", 'data-act="us-reset" data-i="' + i + '"') + "</td></tr>"
    }).join("")
    return pageHead(["설정 및 관리", "시스템 사용자"], "시스템 사용자", "로그인 계정과 권한(관리자·결재자·작성자)을 관리합니다") +
      body(tableWrap("min-w-[1040px]", th("아이디") + th("이름") + th("권한") + th("최근 접속") + th("상태") + '<th class="' + C.th + '"></th>', rows))
  }

  /* ───────── 로그인 ───────── */
  function pageLogin() {
    return '<div class="min-h-screen w-full flex items-center justify-center bg-[var(--color-bg)] p-6"><div class="w-full max-w-[420px]">' +
      '<div class="mb-8 text-center"><h1 class="text-2xl font-bold tracking-tight text-[var(--color-accent)]">맛나 HACCP</h1><p class="mt-1 text-sm text-[var(--color-fg-muted)]">' + e(BRAND) + " HACCP 업무관리 시스템</p></div>" +
      '<div class="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-8"><h2 class="mb-5 text-lg font-semibold text-[var(--color-fg)]">로그인</h2>' +
      '<form class="space-y-5" data-submit="login">' +
      '<div class="space-y-1.5"><label class="' + C.label + '" for="loginId">아이디' + REQ + '</label><div class="relative">' + ic("user", "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-fg-subtle)]") + '<input class="' + C.input + ' pl-9" id="loginId" name="loginId" value="qa.han" placeholder="아이디" required></div></div>' +
      '<div class="space-y-1.5"><label class="' + C.label + '" for="password">비밀번호' + REQ + '</label><div class="relative">' + ic("key", "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-fg-subtle)]") + '<input class="' + C.input + ' pl-9" id="password" type="password" name="password" value="demo1234" placeholder="비밀번호" required></div></div>' +
      '<label class="inline-flex cursor-pointer items-center gap-2"><input type="checkbox" checked class="h-5 w-5 accent-[var(--color-accent)]"><span class="text-sm text-[var(--color-fg)]">아이디 저장</span></label>' +
      '<button class="' + C.btn + " " + C.pri + ' h-11 px-5 text-base w-full" type="submit">로그인</button>' +
      '<div class="flex items-center justify-center gap-4 text-xs text-[var(--color-fg-muted)]"><button type="button" data-act="toast" data-msg="체험판에서는 아이디 찾기를 쓰지 않습니다" class="hover:text-[var(--color-accent)] hover:underline">아이디 찾기</button><span class="text-[var(--color-border-strong)]">|</span><button type="button" data-act="toast" data-msg="체험판에서는 비밀번호 찾기를 쓰지 않습니다" class="hover:text-[var(--color-accent)] hover:underline">비밀번호 찾기</button></div>' +
      '<p class="text-center text-xs text-[var(--color-fg-subtle)]">체험판 계정이 미리 채워져 있습니다. 그대로 로그인하세요.</p></form></div>' +
      '<p class="mt-6 text-center text-xs text-[var(--color-fg-subtle)]">Welcome ' + e(BRAND) + " HACCP Program</p></div></div>"
  }

  /* ───────── 대화상자 ───────── */
  function modalWrap(title, inner, wide) {
    return '<div id="modal-bg" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"><div class="w-full ' + (wide ? "max-w-xl" : "max-w-md") + ' max-h-[70vh] overflow-y-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-modal)]">' +
      '<div class="flex items-center justify-between border-b border-[var(--color-divider)] px-5 py-3"><h3 class="text-base font-semibold text-[var(--color-fg)]">' + e(title) + '</h3><button type="button" data-act="modal-close" class="rounded p-1 text-[var(--color-fg-muted)] hover:bg-[var(--color-surface-alt)]" aria-label="닫기">' + ic("x", "h-4 w-4") + "</button></div>" + inner + "</div></div>"
  }
  function mFoot(okLabel, kind) { return '<div class="flex justify-end gap-2 border-t border-[var(--color-divider)] px-5 py-3">' + btn("sec", "md", "취소", 'data-act="modal-close"') + '<button type="submit" class="' + C.btn + " " + C[kind || "pri"] + " " + C.md + '">' + e(okLabel) + "</button></div>" }
  function modal() {
    var m = S.ui.modal
    if (!m) return ""
    if (m.type === "new-rec") {
      var tpls = S.templates.filter(function (t) { return m.cycle === "all" || t.cycle === m.cycle })
      return modalWrap("일지 신규 작성", '<form data-submit="new-rec"><div class="space-y-4 px-5 py-4">' +
        field("일지 양식", selectBox('name="tpl"', tpls.map(function (t) { return [t.id, t.name] }), tpls[0] && tpls[0].id), true) +
        field("기준일", '<input type="date" name="date" value="' + TODAY + '" required class="' + C.input + '">', true) +
        field("일지명 (선택)", '<input name="title" placeholder="예: 오후 추가 생산분" class="' + C.input + '">') + "</div>" + mFoot("작성 시작") + "</form>")
    }
    if (m.type === "reject") {
      return modalWrap("일지 반려", '<form data-submit="reject" data-id="' + e(m.id) + '"><div class="space-y-3 px-5 py-4"><p class="text-sm text-[var(--color-fg-muted)]">반려 사유는 작성자에게 그대로 전달됩니다.</p>' +
        field("반려 사유", '<textarea name="reason" required class="' + C.input + ' min-h-[110px] py-2 focus:border-[var(--color-status-reject-fg)]" placeholder="예: 3차 중심온도 값이 비어 있습니다"></textarea>', true) + "</div>" + mFoot("반려", "dan") + "</form>")
    }
    if (m.type === "renew") {
      var doc = findDoc(m.kind, m.id), isRep = m.kind === "rep"
      return modalWrap("서류 갱신", '<form data-submit="renew" data-kind="' + e(m.kind) + '" data-id="' + e(m.id) + '"><div class="space-y-4 px-5 py-4"><div class="rounded-md bg-[var(--color-surface-alt)] px-3 py-2 text-sm"><b>' + e(isRep ? doc.kind + " · " + (doc.pname || doc.org) : doc.name) + '</b><div class="text-xs text-[var(--color-fg-muted)]">현재 ' + (isRep ? "발급일 " + e(doc.issue) + " · 다음 검사 " + e(repDue(doc)) : "만료일 " + e(doc.expire)) + "</div></div>" +
        field(isRep ? "새 발급일자" : "새 발급일", '<input type="date" name="issue" value="' + TODAY + '" required class="' + C.input + '">', true) +
        (isRep ? field("검사기관", '<input name="org" value="' + e(doc.org) + '" class="' + C.input + '">') : '<p class="text-xs text-[var(--color-fg-subtle)]">만료일은 새 발급일 기준으로 다시 계산됩니다.</p>') +
        '<div class="space-y-1.5"><span class="' + C.label + '">새 서류 첨부</span>' + dropzone("renew") + "</div></div>" + mFoot("갱신") + "</form>")
    }
    if (m.type === "confirm") {
      return modalWrap(m.title, '<form data-submit="confirm"><div class="px-5 py-4 text-sm text-[var(--color-fg)]">' + e(m.msg) + "</div>" + mFoot(m.ok || "확인", "dan") + "</form>")
    }
    if (m.type === "prompt") {
      return modalWrap(m.title, '<form data-submit="prompt"><div class="px-5 py-4">' + field(m.label, '<input name="v" id="prompt-v" value="' + e(m.value || "") + '" required class="' + C.input + '">') + "</div>" + mFoot("확인") + "</form>")
    }
    if (m.type === "keys") {
      var k = [["V", "선택 도구"], ["Delete", "선택한 입력칸 삭제"], ["방향키", "1px 이동 (Shift: 10px)"], ["Ctrl/⌘ + Z", "실행취소"], ["Ctrl/⌘ + Shift + Z", "다시실행"], ["Ctrl/⌘ + D", "선택한 입력칸 복제"], ["Esc", "선택 해제"]]
      return modalWrap("단축키", '<div class="divide-y divide-[var(--color-divider)] px-5 py-2">' + k.map(function (x) { return '<div class="flex items-center justify-between py-2 text-sm"><span class="text-[var(--color-fg-muted)]">' + e(x[1]) + '</span><span class="rounded border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-2 py-0.5 font-mono text-xs">' + e(x[0]) + "</span></div>" }).join("") + "</div>")
    }
    if (m.type === "tpl-new") {
      return modalWrap("일지 양식 등록", '<form data-submit="tpl-new"><div class="space-y-4 px-5 py-4">' + field("양식명", '<input name="name" required placeholder="예: 냉동창고 온도 기록부" class="' + C.input + '">', true) +
        '<div class="grid grid-cols-2 gap-3">' + field("작성 주기", selectBox('name="cycle"', CYCLES, "daily")) + field("작성 구분", selectBox('name="writer"', WRITERS, "관리자 작성")) + field("관리부서", selectBox('name="mgr"', DEPTS, "품질보증팀")) + field("작성부서", selectBox('name="dept"', DEPTS, "가공1팀")) + "</div>" +
        '<div class="space-y-1.5"><span class="' + C.label + '">쓰던 양식 파일</span>' + dropzone("tpl") + '<p class="text-[11px] text-[var(--color-fg-subtle)]">체험판에서는 파일 대신 빈 표 양식이 깔립니다. 그 위에 입력칸을 올려 보세요.</p></div></div>' + mFoot("등록 후 편집") + "</form>", true)
    }
    if (m.type === "partner") {
      return modalWrap("거래처 등록", '<form data-submit="partner"><div class="grid grid-cols-2 gap-3 px-5 py-4">' + field("거래처명", '<input name="name" required class="' + C.input + '">', true, "col-span-2") + field("구분", selectBox('name="type"', ["원료 공급", "부원료 공급", "포장재 공급", "검사기관", "방역 위탁"], "원료 공급")) + field("대표자", '<input name="ceo" class="' + C.input + '">') +
        field("사업자번호", '<input name="biz" placeholder="000-00-00000" class="' + C.input + '">') + field("연락처", '<input name="tel" class="' + C.input + '">') + field("취급 품목", '<input name="items" class="' + C.input + '">', false, "col-span-2") + field("HACCP", selectBox('name="haccp"', ["인증", "해당 없음", "-"], "인증")) + "</div>" + mFoot("등록") + "</form>", true)
    }
    if (m.type === "product") {
      return modalWrap("제품 등록", '<form data-submit="product"><div class="grid grid-cols-2 gap-3 px-5 py-4">' + field("제품명", '<input name="name" required class="' + C.input + '">', true, "col-span-2") + field("유형", selectBox('name="type"', ["분쇄가공육", "양념육", "식육추출가공품"], "분쇄가공육")) + field("규격", '<input name="spec" placeholder="예: 500g" class="' + C.input + '">') +
        field("보관 조건", selectBox('name="store"', ["냉동 -18℃ 이하", "냉장 0~10℃"], "냉동 -18℃ 이하")) + field("소비기한", '<input name="shelf" placeholder="예: 제조일로부터 12개월" class="' + C.input + '">') + "</div>" + mFoot("등록") + "</form>", true)
    }
    if (m.type === "staff") {
      return modalWrap("사원 등록", '<form data-submit="staff"><div class="grid grid-cols-2 gap-3 px-5 py-4">' + field("성명", '<input name="name" required class="' + C.input + '">', true) + field("부서", selectBox('name="dept"', DEPTS, "가공1팀")) + field("직책", '<input name="pos" value="사원" class="' + C.input + '">') + field("입사일", '<input type="date" name="join" value="' + TODAY + '" class="' + C.input + '">') + "</div>" + mFoot("등록") + "</form>", true)
    }
    return ""
  }
  function findDoc(kind, id) {
    var arr = kind === "rep" ? S.reports : kind === "health" ? S.health : S.edu
    for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return arr[i]
    return null
  }

  /* ───────── 렌더 ───────── */
  var lastKey = null
  function render(route) {
    var key = location.hash
    if (key !== lastKey) {
      lastKey = key
      S.ui.open = {}; S.ui.mobileNav = false; S.ui.bell = false; S.ui.modal = null
    }
    var p = route.path
    if (p === "/login") return pageLogin()
    var page
    if (p === "/") page = pageHome()
    else if (p === "/journal/list" || p === "/journal/search") page = pageList(route)
    else if (p === "/journal/templates") page = pageTemplates()
    else if (p.indexOf("/journal/template/") === 0) page = pageEditor(route)
    else if (p.indexOf("/journal/record/") === 0) page = pageRecord(route)
    else if (p === "/reports/register") page = pageRepRegister()
    else if (p === "/reports/list") page = pageRepList()
    else if (p === "/certs/health") page = pageCert("health")
    else if (p === "/certs/education") page = pageCert("edu")
    else if (p === "/company/ours") page = pageCompany()
    else if (p === "/company/partners") page = pagePartners()
    else if (p === "/product/items") page = pageProducts()
    else if (p === "/product/recipes") page = pageRecipes()
    else if (p === "/product/batches") page = pageBatches()
    else if (p === "/employees") page = pageEmployees()
    else if (p === "/system/users") page = pageUsers()
    else if (p === "/system/approvals") page = pageApprovals()
    else if (p === "/system/notifications") page = pageNotif()
    else page = pageHead([], "페이지를 찾을 수 없습니다", "") + body('<a class="text-[var(--color-accent)] underline" href="#/">홈으로</a>')
    return shell(route, page)
  }
  // 다시 그리면서 입력 중이던 칸의 포커스·커서를 되살린다
  function R() {
    var a = document.activeElement, id = a && a.id, s = null
    try { s = a.selectionStart } catch (x) { }
    Demo.update()
    if (id) { var n = document.getElementById(id); if (n) { n.focus(); try { if (s != null) n.setSelectionRange(s, s) } catch (x) { } } }
  }

  /* ───────── 동작 ───────── */
  var on = Demo.on
  on("go", function (d) { Demo.go(d.href.replace(/^#/, "")) })
  on("toast", function (d) { Demo.toast(d.msg) })
  on("nav-toggle", function (d) { S.ui.open[d.key] = !NAVSTATE[d.key]; R() })
  on("nav-mobile", function () { S.ui.mobileNav = !S.ui.mobileNav; R() })
  on("bell", function () { S.ui.bell = !S.ui.bell; R() })
  on("bell-go", function (d, el) { S.ui.bell = false; Demo.go(el.getAttribute("href").replace(/^#/, "")) })
  on("logout", function () { Demo.toast("로그아웃되었습니다"); Demo.go("/login") })
  on("modal", function (d) { S.ui.modal = { type: d.m }; R() })
  on("modal-close", function () { S.ui.modal = null; S.ui.files.renew = []; R() })
  document.addEventListener("click", function (ev) {
    if (ev.target && ev.target.id === "modal-bg") { S.ui.modal = null; R(); return }
    if (S.ui.bell && !ev.target.closest("[data-bell]")) { S.ui.bell = false; R() }
  })
  on("files", function (v, el) {
    var k = el.getAttribute("data-key"), names = Array.prototype.map.call(el.files || [], function (f) { return f.name })
    S.ui.files[k] = (S.ui.files[k] || []).concat(names); R()
  })
  on("file-rm", function (d) { (S.ui.files[d.key] || []).splice(+d.i, 1); R() })

  // 캘린더
  on("cal-move", function (d) { S.ui.cal = addM(S.ui.cal, +d.n); S.ui.calSel = null; R() })
  on("cal-today", function () { S.ui.cal = monthStart(TODAY); S.ui.calSel = TODAY; R() })
  on("cal-filter", function (v) { S.ui.calFilter = v; R() })
  on("cal-sel", function (d) { S.ui.calSel = S.ui.calSel === d.d ? null : d.d; R() })
  on("open-rec", function (d) { Demo.go("/journal/record/" + d.id) })
  on("open-plan", function (d) { Demo.toast("예정 일지입니다, " + d.d + " 당일부터 작성할 수 있습니다") })

  // 리스트 필터
  function LS() { return S.ui.list[S.ui.curList] }
  on("lf-period", function (v) { setPeriod(LS(), v); if (v === "all") { LS().from = ""; LS().to = "" } R() })
  on("lf-from", function (v) { LS().from = v; LS().period = "custom"; R() })
  on("lf-to", function (v) { LS().to = v; LS().period = "custom"; R() })
  on("lf-mine", function (v, el) { LS().mine = el.checked; R() })
  on("lf-status", function (v) { LS().status = v; LS().overdue = false; R() })
  on("lf-tpl", function (v) { LS().tpl = v; R() })
  on("lf-q", function (v) { LS().q = v; R() })
  on("lf-clear-od", function () { LS().overdue = false; LS().status = "all"; R() })
  on("sort", function (d) {
    var p = Demo.route().path
    var st = p === "/reports/list" ? repState().sort : LS().sort
    if (st.key === d.key) st.dir = -st.dir; else { st.key = d.key; st.dir = -1 }
    R()
  })

  // 일지 작성
  function curRec() { var p = Demo.route().path; return p.indexOf("/journal/record/") === 0 ? REC(p.split("/")[3]) : null }
  function curValues() {
    var rec = curRec()
    if (rec) return { v: ensureValues(rec), tpl: T(rec.tplId), rec: rec }
    var ed = S.ui.ed
    if (ed && ed.test) return { v: ed.tv, tpl: T(ed.tplId), rec: null }
    return null
  }
  function touch(rec) { if (rec && (rec.status === "미작성")) { rec.status = "작성중"; rec.history.push({ at: TODAY + " " + nowTime(), who: ME, act: "작성" }); rec.writer = rec.writer || ME; return true } return false }
  function refreshLive(cv) {
    cv.tpl.fields.forEach(function (f) {
      if (f.type !== "formula") return
      var el = document.querySelector('[data-formula="' + f.id + '"]'); if (!el) return
      var r = evalFormula(f, cv.v); el.textContent = r.t
      el.className = "absolute flex items-center justify-center text-xs font-semibold " + r.cls
    })
    var pr = progress(cv.tpl, cv.v), pct = pr.total ? Math.round(pr.done / pr.total * 100) : 0
    var a = document.getElementById("rec-progress"), b = document.getElementById("rec-bar")
    if (a) a.textContent = pr.done + " / " + pr.total + " (" + pct + "%)"
    if (b) b.style.width = pct + "%"
  }
  on("fv", function (val, el) {
    var cv = curValues(); if (!cv) return
    cv.v[el.getAttribute("data-fid")] = val
    var empty = !val
    el.classList.toggle("bg-[var(--color-accent-soft)]/50", empty)
    el.classList.toggle("bg-transparent", !empty)
    if (touch(cv.rec)) { R(); return }
    refreshLive(cv)
  })
  on("fv-check", function (d) {
    var cv = curValues(); if (!cv) return
    var f = cv.tpl.fields.filter(function (x) { return x.id === d.fid })[0]
    var nv = !cv.v[d.fid]
    if (nv && f && f.ex) cv.tpl.fields.forEach(function (x) { if (x.ex === f.ex) cv.v[x.id] = false })
    cv.v[d.fid] = nv
    touch(cv.rec); R()
  })
  on("fv-sign", function (d) { var cv = curValues(); if (!cv) return; cv.v[d.fid] = cv.v[d.fid] ? "" : ME; touch(cv.rec); R() })
  on("fv-image", function (d) { var cv = curValues(); if (!cv) return; cv.v[d.fid] = cv.v[d.fid] ? "" : "photo.jpg"; Demo.toast(cv.v[d.fid] ? "현장 사진 1장을 붙였습니다 (가상)" : "사진을 뺐습니다"); touch(cv.rec); R() })
  on("rec-save", function (d) {
    var rec = REC(d.id); if (!rec) return
    if (rec.status === "미작성" || rec.status === "반려") rec.status = "작성중"
    rec.history.push({ at: TODAY + " " + nowTime(), who: ME, act: "임시 저장" })
    Demo.toast("임시 저장했습니다"); R()
  })
  on("rec-submit", function (d) {
    var rec = REC(d.id); if (!rec) return
    var tpl = T(rec.tplId), v = ensureValues(rec), pr = progress(tpl, v)
    var missing = tpl.fields.filter(function (f) { return f.req && !v[f.id] })
    if (missing.length) { Demo.toast("필수 항목을 채워 주세요: " + missing.map(function (f) { return f.label }).join(", ")); return }
    if (pr.done <= 1) { Demo.toast("입력된 내용이 없습니다. 점검 결과를 먼저 기록하세요"); return }
    rec.status = "승인대기"; v.sign_0 = rec.writer || ME
    rec.history.push({ at: TODAY + " " + nowTime(), who: ME, act: "결재 요청" })
    Demo.toast("결재를 요청했습니다, 결재 승인 메뉴에서 처리할 수 있습니다"); R()
  })
  on("rec-recall", function (d) { var rec = REC(d.id); rec.status = "작성중"; rec.values.sign_0 = ""; rec.history.push({ at: TODAY + " " + nowTime(), who: ME, act: "결재 회수" }); Demo.toast("결재 요청을 회수했습니다"); R() })
  on("rec-approve", function (d) {
    var rec = REC(d.id); if (!rec) return
    var v = ensureValues(rec)
    rec.status = "완료"; v.sign_0 = v.sign_0 || rec.writer; v.sign_1 = "오민규"; v.sign_2 = ME
    rec.history.push({ at: TODAY + " " + nowTime(), who: ME, act: "승인" })
    Demo.toast("승인했습니다, " + T(rec.tplId).name + " (" + rec.date + ")"); R()
  })
  on("rec-reject", function (d) { S.ui.modal = { type: "reject", id: d.id }; R() })
  on("rec-print", function () { Demo.toast("체험판에서는 인쇄 대신 화면으로 확인합니다 (실제는 A4 원본 양식 그대로 출력)") })
  on("ap-tab", function (d) { S.ui.approvalTab = d.tab; R() })
  on("ap-refresh", function () { Demo.toast("최신 결재 목록을 불러왔습니다"); R() })

  // 양식 관리 / 편집기
  function curTpl() { var p = Demo.route().path; return p.indexOf("/journal/template/") === 0 ? T(p.split("/")[3]) : null }
  function selField() { var t = curTpl(), ed = S.ui.ed; if (!t || !ed || !ed.sel) return null; return t.fields.filter(function (x) { return x.id === ed.sel })[0] || null }
  on("ed-tool", function (d) { S.ui.ed.tool = d.tool; R() })
  on("ed-hide", function () { S.ui.ed.hide = !S.ui.ed.hide; R() })
  on("ed-keys", function () { S.ui.modal = { type: "keys" }; R() })
  on("ed-info", function () { S.ui.ed.info = !S.ui.ed.info; if (!S.ui.ed.info) S.ui.ed.editInfo = false; R() })
  on("ed-test", function () { var ed = S.ui.ed; ed.test = !ed.test; ed.tv = { info_date: TODAY }; ed.sel = null; ed.tool = "select"; R() })
  on("ed-undo", function () { var t = curTpl(), ed = S.ui.ed; if (!ed.undo.length) return; ed.redo.push(snap(t)); restore(t, ed.undo.pop()); ed.sel = null; ed.dirty = true; R() })
  on("ed-redo", function () { var t = curTpl(), ed = S.ui.ed; if (!ed.redo.length) return; ed.undo.push(snap(t)); restore(t, ed.redo.pop()); ed.sel = null; ed.dirty = true; R() })
  on("ed-save", function () {
    var t = curTpl(), ed = S.ui.ed
    if (!ed.dirty) { Demo.toast("바뀐 내용이 없습니다"); return }
    t.version++; t.updated = TODAY; ed.dirty = false
    Demo.toast("입력칸 " + t.fields.length + "개를 저장했습니다 (v" + t.version + "), 이후 작성하는 일지에 바로 적용됩니다"); R()
  })
  on("tpl-download", function () { Demo.toast("체험판: 원본 양식 PDF 다운로드는 비활성화되어 있습니다") })
  on("tpl-file", function () { Demo.toast("체험판: 양식 파일 교체는 비활성화되어 있습니다 (입력칸 위치는 그대로 유지됩니다)") })
  on("tpl-edit", function () { S.ui.ed.info = true; S.ui.ed.editInfo = true; R() })
  on("tpl-edit-cancel", function () { S.ui.ed.editInfo = false; R() })
  on("tpl-del", function () {
    var t = curTpl()
    S.ui.modal = { type: "confirm", title: "양식 삭제", msg: "「" + t.name + "」 양식과 이 양식으로 쓴 일지 " + S.records.filter(function (r) { return r.tplId === t.id }).length + "건을 삭제합니다. 계속할까요?", ok: "삭제", fn: function () {
      S.templates = S.templates.filter(function (x) { return x.id !== t.id }); S.records = S.records.filter(function (r) { return r.tplId !== t.id })
      Demo.toast("양식을 삭제했습니다"); Demo.go("/journal/templates")
    } }
    R()
  })
  on("pp-label", function (v) { var f = selField(); if (f) { f.label = v; S.ui.ed.dirty = true } })
  on("pp-type", function (v) {
    var t = curTpl(), f = selField(); if (!f) return
    pushUndo(t); f.type = v
    if (v === "select" && !f.opts) f.opts = ["항목 1", "항목 2"]
    if (v !== "check") { delete f.ex; delete f.ok }
    R()
  })
  on("pp-num", function (v, el) { var t = curTpl(), f = selField(); if (!f) return; pushUndo(t); f[el.getAttribute("data-k")] = Math.max(el.getAttribute("data-k") === "w" || el.getAttribute("data-k") === "h" ? 8 : 0, Math.round(+v || 0)); R() })
  on("pp-nudge", function (d) {
    var t = curTpl(), f = selField(); if (!f) return
    pushUndo(t)
    var s = 2
    if (d.dir === "aleft") f.x = Math.max(0, f.x - s); if (d.dir === "aright") f.x = Math.min(PW - f.w, f.x + s)
    if (d.dir === "aup") f.y = Math.max(0, f.y - s); if (d.dir === "adown") f.y = Math.min(t.H - f.h, f.y + s)
    R()
  })
  on("pp-group", function (v) {
    var t = curTpl(), f = selField(); if (!f) return
    if (v === "__new") { S.ui.modal = { type: "prompt", title: "새 그룹", label: "그룹 이름", value: "", fn: function (name) { pushUndo(t); if (t.groups.indexOf(name) < 0) t.groups.push(name); f.group = name } }; R(); return }
    pushUndo(t); f.group = v; R()
  })
  on("pp-opts", function (v) { var t = curTpl(), f = selField(); if (!f) return; pushUndo(t); f.opts = v.split(",").map(function (s) { return s.trim() }).filter(Boolean); R() })
  on("pp-req", function (v, el) { var t = curTpl(), f = selField(); if (!f) return; pushUndo(t); f.req = el.checked ? 1 : 0; R() })
  function dupField() {
    var t = curTpl(), f = selField(); if (!f) return
    pushUndo(t)
    var c = JSON.parse(JSON.stringify(f)); c.id = nid("f"); c.label = f.label + " 복사"; c.x = Math.min(PW - c.w, c.x + 10); c.y = Math.min(t.H - c.h, c.y + 10); delete c.ex; delete c.formula
    t.fields.push(c); S.ui.ed.sel = c.id; R()
  }
  function delField() {
    var t = curTpl(), f = selField(); if (!f) return
    pushUndo(t); t.fields = t.fields.filter(function (x) { return x.id !== f.id }); S.ui.ed.sel = null
    Demo.toast("입력칸을 삭제했습니다 (실행취소 가능)"); R()
  }
  on("pp-dup", dupField)
  on("pp-del", delField)
  on("grp-view", function (d) { var t = curTpl(), g = t.groups[+d.i]; S.ui.ed.showGroup = S.ui.ed.showGroup === g ? null : g; R() })
  on("grp-move", function (d) {
    var t = curTpl(), i = +d.i, j = i + +d.d
    if (j < 0 || j >= t.groups.length) return
    pushUndo(t); var g = t.groups[i]; t.groups[i] = t.groups[j]; t.groups[j] = g; R()
  })
  on("grp-rename", function (d) {
    var t = curTpl(), old = t.groups[+d.i]
    S.ui.modal = { type: "prompt", title: "그룹 이름 바꾸기", label: "그룹 이름", value: old, fn: function (name) { pushUndo(t); t.groups[+d.i] = name; t.fields.forEach(function (f) { if (f.group === old) f.group = name }); if (S.ui.ed.showGroup === old) S.ui.ed.showGroup = name } }
    R()
  })
  on("grp-del", function (d) {
    var t = curTpl(), g = t.groups[+d.i], n = t.fields.filter(function (f) { return f.group === g }).length
    S.ui.modal = { type: "confirm", title: "그룹 삭제", msg: "「" + g + "」 그룹과 안의 입력칸 " + n + "개를 삭제합니다.", ok: "삭제", fn: function () { pushUndo(t); t.groups.splice(+d.i, 1); t.fields = t.fields.filter(function (f) { return f.group !== g }); S.ui.ed.sel = null } }
    R()
  })

  // 편집기: 종이 위 끌기·놓기
  var drag = null
  function edActive() { var t = curTpl(), ed = S.ui.ed; return t && ed && ed.tplId === t.id && !ed.test && !S.ui.modal ? t : null }
  document.addEventListener("pointerdown", function (ev) {
    var t = edActive(); if (!t) return
    var paper = document.getElementById("paper-inner"); if (!paper || !paper.contains(ev.target)) return
    var ed = S.ui.ed, fe = ev.target.closest("[data-ed-field]")
    if (ed.tool === "select") {
      if (!fe) { if (ed.sel) { ed.sel = null; R() } return }
      var f = t.fields.filter(function (x) { return x.id === fe.getAttribute("data-ed-field") })[0]
      if (!f) return
      ev.preventDefault()
      drag = { f: f, sx: ev.clientX, sy: ev.clientY, ox: f.x, oy: f.y, el: fe, moved: false, pre: snap(t), wasSel: ed.sel === f.id }
      ed.sel = f.id
      fe.classList.add("ring-2", "ring-[#2563eb]")
      return
    }
    ev.preventDefault()
    var rect = paper.getBoundingClientRect(), type = ed.tool === "select_" ? "select" : ed.tool
    var size = { check: [18, 18], sign: [56, 40], image: [80, 60], date: [110, 22], time: [80, 22], number: [70, 22], formula: [70, 22], select: [110, 22], auto: [100, 22], text: [120, 22] }[type]
    var nx = Math.round(ev.clientX - rect.left - size[0] / 2), ny = Math.round(ev.clientY - rect.top - size[1] / 2)
    pushUndo(t)
    var grp = t.groups.indexOf("추가 입력칸") >= 0 ? "추가 입력칸" : (t.groups.push("추가 입력칸"), "추가 입력칸")
    var n = t.fields.filter(function (x) { return x.type === type }).length + 1
    var nf = { id: nid("f"), type: type, label: TYPE_LABEL[type] + " " + n, x: Math.max(0, Math.min(PW - size[0], nx)), y: Math.max(0, Math.min(t.H - size[1], ny)), w: size[0], h: size[1], group: grp }
    if (type === "select") nf.opts = ["항목 1", "항목 2"]
    t.fields.push(nf); ed.sel = nf.id; ed.tool = "select"
    Demo.toast("「" + TYPE_LABEL[type] + "」 입력칸을 추가했습니다, 끌어서 위치를 맞추세요")
    R()
  })
  document.addEventListener("pointermove", function (ev) {
    if (!drag) return
    var dx = ev.clientX - drag.sx, dy = ev.clientY - drag.sy
    if (Math.abs(dx) + Math.abs(dy) > 2) drag.moved = true
    if (!drag.moved) return
    var t = curTpl()
    drag.f.x = Math.max(0, Math.min(PW - drag.f.w, Math.round(drag.ox + dx)))
    drag.f.y = Math.max(0, Math.min(t.H - drag.f.h, Math.round(drag.oy + dy)))
    drag.el.style.left = drag.f.x + "px"; drag.el.style.top = drag.f.y + "px"
  })
  document.addEventListener("pointerup", function () {
    if (!drag) return
    var t = curTpl()
    if (drag.moved && t) pushUndo(t, drag.pre)
    drag = null; R()
  })
  document.addEventListener("keydown", function (ev) {
    var t = edActive(); if (!t) return
    var tag = (ev.target.tagName || "").toLowerCase()
    if (tag === "input" || tag === "textarea" || tag === "select") return
    var ed = S.ui.ed, f = selField(), mod = ev.metaKey || ev.ctrlKey
    if (mod && ev.key.toLowerCase() === "z") { ev.preventDefault(); document.querySelector(ev.shiftKey ? '[data-act="ed-redo"]' : '[data-act="ed-undo"]').click(); return }
    if (mod && ev.key.toLowerCase() === "y") { ev.preventDefault(); document.querySelector('[data-act="ed-redo"]').click(); return }
    if (mod && ev.key.toLowerCase() === "d" && f) { ev.preventDefault(); dupField(); return }
    if (ev.key === "v" || ev.key === "V") { ed.tool = "select"; R(); return }
    if (ev.key === "Escape") { ed.sel = null; ed.tool = "select"; R(); return }
    if (!f) return
    if (ev.key === "Delete" || ev.key === "Backspace") { ev.preventDefault(); delField(); return }
    var s = ev.shiftKey ? 10 : 1, mv = { ArrowLeft: [-s, 0], ArrowRight: [s, 0], ArrowUp: [0, -s], ArrowDown: [0, s] }[ev.key]
    if (mv) { ev.preventDefault(); pushUndo(t); f.x = Math.max(0, Math.min(PW - f.w, f.x + mv[0])); f.y = Math.max(0, Math.min(t.H - f.h, f.y + mv[1])); R() }
  })

  // 성적서
  on("rp-kind", function (v) { repState().kind = v })
  on("rp-from", function (v) { repState().from = v })
  on("rp-to", function (v) { repState().to = v })
  on("rp-search", function () { var st = repState(); st.applied = { kind: st.kind, from: st.from, to: st.to }; Demo.toast("조회했습니다"); R() })
  on("del-doc", function (d) {
    var doc = findDoc(d.kind, d.id)
    S.ui.modal = { type: "confirm", title: "서류 삭제", msg: "「" + (doc.name || doc.kind + " · " + (doc.pname || doc.org)) + "」 서류를 삭제할까요?", ok: "삭제", fn: function () {
      if (d.kind === "rep") S.reports = S.reports.filter(function (x) { return x.id !== d.id })
      else if (d.kind === "health") S.health = S.health.filter(function (x) { return x.id !== d.id })
      else S.edu = S.edu.filter(function (x) { return x.id !== d.id })
      Demo.toast("삭제했습니다")
    } }
    R()
  })
  // 보건증·수료증 등록
  function months(kind) { var n = notifOf(kind === "health" ? "health" : "edu"); return n ? (CYC_MONTHS[n.cycle] || 12) : 12 }
  on("cf-emp", function (v, el) {
    var k = el.getAttribute("data-kind"), fm = S.ui.hform[k], s = S.staff.filter(function (x) { return x.no === v })[0]
    fm.emp = v; fm.name = s ? s.name : ""; fm.no = s ? s.no : ""; R()
  })
  on("cf", function (v, el) { S.ui.hform[el.getAttribute("data-kind")][el.getAttribute("data-k")] = v })
  on("cf-issue", function (v, el) { var k = el.getAttribute("data-kind"), fm = S.ui.hform[k]; fm.issue = v; if (v) fm.expire = addM(v, months(k)); R() })
  on("cf-expire", function (v, el) { S.ui.hform[el.getAttribute("data-kind")].expire = v })
  on("cert-by", function (d) { S.ui.cert[d.kind].by = d.by; R() })
  on("cs-q", function (v, el) { S.ui.cert[el.getAttribute("data-kind")].q = v; R() })

  // 알림 설정
  on("nt-cycle", function (d) { S.notif[+d.i].cycle = d.c; R() })
  on("nt-on", function (d) { S.notif[+d.i].on = !S.notif[+d.i].on; R() })
  on("nt-start", function (v, el) { S.notif[+el.getAttribute("data-i")].start = v })
  on("nt-save", function () { Demo.toast("알림 설정을 저장했습니다, 성적서·보건증 만료 표시에 반영됩니다") })

  // 거래처·제품·사원·사용자
  on("partner-del", function (d) { var p = S.partners[+d.i]; S.ui.modal = { type: "confirm", title: "거래처 삭제", msg: "「" + p.name + "」을(를) 삭제할까요?", ok: "삭제", fn: function () { S.partners.splice(+d.i, 1); Demo.toast("삭제했습니다") } }; R() })
  on("prod-use", function (d) { var p = S.products.filter(function (x) { return x.id === d.id })[0]; p.use = !p.use; R() })
  on("staff-active", function (d) { var s = S.staff.filter(function (x) { return x.no === d.no })[0]; s.active = !s.active; R() })
  on("us-role", function (v, el) { S.users[+el.getAttribute("data-i")].role = v; Demo.toast("권한을 바꿨습니다: " + v) })
  on("us-active", function (d) { var u = S.users[+d.i]; u.active = !u.active; R() })
  on("us-reset", function (d) { Demo.toast(S.users[+d.i].name + " 님 비밀번호를 초기화했습니다 (임시 비밀번호 문자 발송 · 가상)") })
  on("recipe-sel", function (d) { S.ui.recipeSel = d.id; R() })
  function recipeList() { var id = S.ui.recipeSel || S.products[0].id; return S.recipes[id] || (S.recipes[id] = []) }
  on("rc", function (v, el) { recipeList()[+el.getAttribute("data-i")][el.getAttribute("data-k")] = v })
  on("rc-pct", function (v, el) { recipeList()[+el.getAttribute("data-i")].pct = Number(v) || 0; R() })
  on("rc-add", function () { recipeList().push({ name: "", pct: 0 }); R() })
  on("rc-del", function (d) { recipeList().splice(+d.i, 1); R() })
  on("rc-save", function () {
    var sum = recipeList().reduce(function (s, x) { return s + (Number(x.pct) || 0) }, 0)
    Demo.toast(Math.abs(sum - 100) < 0.01 ? "레시피를 저장했습니다" : "배합비 합계가 " + Math.round(sum * 10) / 10 + "% 입니다. 100%로 맞춰 주세요")
  })
  on("bt-pid", function (v) { S.ui.batch.pid = v; R() })
  on("bt-date", function (v) { S.ui.batch.date = v })
  on("bt-total", function (v) {
    S.ui.batch.total = v
    var tb = document.getElementById("bt-body"), list = S.recipes[S.ui.batch.pid] || [], total = Number(v) || 0
    if (tb) Array.prototype.forEach.call(tb.querySelectorAll("tr"), function (tr, i) { var td = tr.lastElementChild; if (td && list[i]) td.textContent = (list[i].pct * total / 100).toFixed(2) + " kg" })
  })
  on("bt-save", function () {
    var b = S.ui.batch
    if (!(Number(b.total) > 0)) { Demo.toast("총 배합량을 입력하세요"); return }
    S.batches.push({ id: nid("b"), date: b.date || TODAY, pid: b.pid, total: Number(b.total), by: ME })
    Demo.toast("배합 기록을 저장했습니다"); R()
  })

  /* ───────── 폼 제출 ───────── */
  on("login", function () { Demo.go("/"); Demo.toast("로그인했습니다, 체험판 관리자 계정") })
  on("new-rec", function (d, el) {
    // 버튼(data-act) 과 폼(data-submit) 이 같은 이름을 쓰므로 둘을 구분한다
    if (el && el.tagName === "FORM") {
      var tpl = T(d.tpl); if (!tpl) return
      var ex = S.records.filter(function (r) { return r.tplId === tpl.id && r.date === d.date && (!d.title) })[0]
      if (ex && !EVENT[tpl.cycle]) { S.ui.modal = null; Demo.toast("같은 기준일 일지가 이미 있어 그 일지를 엽니다"); Demo.go("/journal/record/" + ex.id); return }
      var rec = newRecord(tpl, d.date || TODAY, "미작성", ME)
      rec.created = TODAY; rec.title = d.title || "-"
      S.ui.modal = null; Demo.toast("새 일지를 만들었습니다"); Demo.go("/journal/record/" + rec.id)
      return
    }
    S.ui.modal = { type: "new-rec", cycle: d.cycle }; R()
  })
  on("reject", function (d, el) {
    var id = el.getAttribute("data-id"), rec = REC(id)
    rec.status = "반려"; rec.reject = d.reason
    if (rec.values) rec.values.sign_0 = ""
    rec.history.push({ at: TODAY + " " + nowTime(), who: ME, act: "반려", note: d.reason })
    S.ui.modal = null; Demo.toast("반려했습니다, 작성자에게 사유가 전달됩니다"); R()
  })
  on("renew", function (d, el) {
    if (el.tagName !== "FORM") { S.ui.modal = { type: "renew", kind: d.kind, id: d.id }; S.ui.files.renew = []; R(); return }
    var kind = el.getAttribute("data-kind"), doc = findDoc(kind, el.getAttribute("data-id"))
    doc.issue = d.issue; doc.renewed++
    if (kind === "rep") { if (d.org) doc.org = d.org }
    else doc.expire = addM(d.issue, months(kind))
    doc.files = doc.files.concat(S.ui.files.renew || [])
    S.ui.modal = null; S.ui.files.renew = []
    Demo.toast("갱신했습니다, " + (kind === "rep" ? "다음 검사 예정 " + repDue(doc) : "새 만료일 " + doc.expire)); R()
  })
  on("confirm", function () { var m = S.ui.modal; S.ui.modal = null; if (m && m.fn) m.fn(); R() })
  on("prompt", function (d) { var m = S.ui.modal; S.ui.modal = null; if (m && m.fn && d.v) m.fn(d.v.trim()); R() })
  on("rep-save", function (d) {
    S.reports.push({ id: nid("rp"), kind: d.kind, org: d.org, ptype: d.ptype, pname: d.pname, issue: d.issue, etc: d.etc, content: d.content, files: S.ui.files.rep || [], renewed: 0 })
    S.ui.files.rep = []
    var st = repState(); st.kind = "all"; st.applied = null
    if (d.issue < st.from) st.from = d.issue
    Demo.toast("성적서를 등록했습니다"); Demo.go("/reports/list")
  })
  on("cert-save", function (d, el) {
    var kind = el.getAttribute("data-kind"), fm = S.ui.hform[kind]
    if (!fm.name.trim()) { Demo.toast("성명을 입력하세요"); document.getElementById("cf-name").focus(); return }
    var s = S.staff.filter(function (x) { return x.no === fm.no })[0]
    var rec = { id: nid(kind === "health" ? "h" : "ed"), name: fm.name.trim(), no: fm.no, dept: s ? s.dept : "", issue: fm.issue, expire: fm.expire, note: fm.note, files: S.ui.files["cert-" + kind] || [], renewed: 0 }
    if (kind === "edu") { rec.course = fm.course || "HACCP 교육"; rec.org = fm.org }
    ;(kind === "health" ? S.health : S.edu).push(rec)
    S.ui.hform[kind] = null; S.ui.files["cert-" + kind] = []
    Demo.toast("등록했습니다, 만료일 " + rec.expire); R()
  })
  on("tpl-new", function (d, el) {
    if (el.tagName !== "FORM") { S.ui.modal = { type: "tpl-new" }; S.ui.files.tpl = []; R(); return }
    var code = "MN-NEW-" + pad(S.templates.length + 1)
    var tpl = makeTemplate(["tpl-" + nid("n"), code, d.name, d.cycle, d.writer, d.mgr, d.dept, "blank"], TODAY)
    tpl.file = (S.ui.files.tpl && S.ui.files.tpl[0]) || code + "_빈양식.pdf"
    S.templates.push(tpl)
    if (isScheduled(tpl, TODAY)) newRecord(tpl, TODAY, "미작성", ME)
    S.ui.modal = null; S.ui.files.tpl = []
    Demo.toast("양식을 등록했습니다, 위 도구로 입력칸을 올려 보세요"); Demo.go("/journal/template/" + tpl.id)
    S.ui.ed = null
  })
  on("tpl-info", function (d) {
    var t = curTpl(); if (!t) return
    t.code = d.code || t.code; t.name = d.name || t.name; t.cycle = d.cycle; t.writer = d.writer; t.mgr = d.mgr; t.dept = d.dept; t.updated = TODAY
    S.ui.ed.editInfo = false; Demo.toast("기본 정보를 저장했습니다"); R()
  })
  on("company-save", function (d) { Object.assign(S.company, d); Demo.toast("회사 정보를 저장했습니다") })
  on("partner", function (d) { S.partners.push(d); S.ui.modal = null; Demo.toast("거래처를 등록했습니다"); R() })
  on("product", function (d) { var id = "P-" + (100 + S.products.length + 1); S.products.push({ id: id, name: d.name, type: d.type, spec: d.spec, store: d.store, shelf: d.shelf, use: true }); S.recipes[id] = []; S.ui.modal = null; Demo.toast("제품을 등록했습니다, 레시피 등록에서 배합비를 넣으세요"); R() })
  on("staff", function (d) { var no = "M-" + String(S.staff.length + 1).padStart(3, "0"); S.staff.push({ no: no, name: d.name, dept: d.dept, pos: d.pos, join: d.join, tel: "010-0000-0000", active: true }); S.ui.modal = null; Demo.toast("사원을 등록했습니다 (" + no + ")"); R() })

  /* ───────── 시작 ───────── */
  seed()
  if (!location.hash) history.replaceState(null, "", "#/")
  Demo.mount(render)
  Demo.banner()
})()
