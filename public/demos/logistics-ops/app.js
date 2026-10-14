/* Pack-Ops · (가상) 동해수출포장 수출포장 운영 관리 — 와이넥스 포트폴리오 체험판
 * 화면 배치와 클래스는 실제 납품 화면을 따르고, 업체·작업자·차량·수치는 모두 지어낸 가상 값이다.
 * 데이터는 브라우저 메모리에만 있으며 새로고침하면 처음 상태로 돌아간다.
 */
;(function () {
  var e = Demo.esc
  var TODAY = Demo.day(0)
  var WD = ["일", "월", "화", "수", "목", "금", "토"]
  var BRAND = "(가상) 동해수출포장"

  // ───────────────────────── 아이콘 (lucide) ─────────────────────────
  var ICONS = {
    package: '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path>',
    "layout-grid": '<rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect>',
    calendar: '<path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>',
    "clipboard-list": '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path>',
    briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path>',
    settings: '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle>',
    "chevron-up": '<path d="m18 15-6-6-6 6"></path>',
    "chevron-down": '<path d="m6 9 6 6 6-6"></path>',
    "chevron-left": '<path d="m15 18-6-6 6-6"></path>',
    "chevron-right": '<path d="m9 18 6-6-6-6"></path>',
    "log-out": '<path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>',
    printer: '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect x="6" y="14" width="12" height="8" rx="1"></rect>',
    "pen-line": '<path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path>',
    pencil: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path>',
    download: '<path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path>',
    upload: '<path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>',
    "refresh-cw": '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path>',
    "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
    eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle>',
    "eye-off": '<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path d="m2 2 20 20"></path>',
    minus: '<path d="M5 12h14"></path>',
    plus: '<path d="M5 12h14"></path><path d="M12 5v14"></path>',
    box: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path>',
    "map-pin": '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
    "arrow-up-down": '<path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path>',
    "external-link": '<path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>',
    "clipboard-paste": '<path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"></path><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"></path><path d="m17 10 4 4-4 4"></path>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
    search: '<path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle>',
    x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>',
    paperclip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
    "file-text": '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>',
    "file-spreadsheet": '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path>',
    "arrow-left": '<path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>',
    history: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path>',
    "building-2": '<path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>',
    "trash-2": '<path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
    "triangle-alert": '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path>',
    clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
    menu: '<path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path>',
    check: '<path d="M20 6 9 17l-5-5"></path>',
  }
  function ic(name, cls) {
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-' +
      name + " " + (cls || "w-4 h-4") + '" aria-hidden="true">' + ICONS[name] + "</svg>"
    )
  }

  // ───────────────────────── 날짜 도구 ─────────────────────────
  function pd(n) { return String(n).padStart(2, "0") }
  function toD(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]) }
  function fromD(d) { return d.getFullYear() + "-" + pd(d.getMonth() + 1) + "-" + pd(d.getDate()) }
  function addDays(s, n) { var d = toD(s); d.setDate(d.getDate() + n); return fromD(d) }
  function diffDays(a, b) { return Math.round((toD(b) - toD(a)) / 864e5) }
  function md(s) { return s.slice(5, 7) + "/" + s.slice(8, 10) }
  function dow(s) { return toD(s).getDay() }
  function dayLabel(s) { var d = toD(s); return (d.getMonth() + 1) + "월 " + d.getDate() + "일 (" + WD[d.getDay()] + ")" }
  function stamp() { var d = new Date(); return fromD(d) + " " + pd(d.getHours()) + ":" + pd(d.getMinutes()) }
  function addMin(t, m) { var p = t.split(":"); var x = +p[0] * 60 + +p[1] + m; x = Math.min(x, 23 * 60 + 30); return pd(Math.floor(x / 60)) + ":" + pd(x % 60) }
  function f3(n) { return (Math.round(n * 1000) / 1000).toFixed(3) }

  // ───────────────────────── 가상 데이터 ─────────────────────────
  var seed = 20261014
  function rnd() { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; var t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296 }
  function pick(a) { return a[Math.floor(rnd() * a.length)] }
  function rint(a, b) { return a + Math.floor(rnd() * (b - a + 1)) }

  var CLIENTS = [
    { id: "c1", name: "한빛기계(주)", contact: "윤재석 과장", sites: [{ id: "s11", name: "창원 1공장", addr: "경남 창원시 성산구 가상산단로 112" }, { id: "s12", name: "김해 물류센터", addr: "경남 김해시 가상물류로 45" }] },
    { id: "c2", name: "대성정밀", contact: "차민지 대리", sites: [{ id: "s21", name: "평택 공장", addr: "경기 평택시 포승읍 가상항만로 77" }] },
    { id: "c3", name: "세진중공업", contact: "구본혁 차장", sites: [{ id: "s31", name: "울산 본사", addr: "울산 남구 가상공단길 9" }, { id: "s32", name: "온산 야드", addr: "울산 울주군 온산읍 가상해안로 210" }] },
    { id: "c4", name: "우림플랜트", contact: "하은솔 주임", sites: [{ id: "s41", name: "광양 사업장", addr: "전남 광양시 가상제철로 33" }] },
    { id: "c5", name: "청우전자", contact: "민경호 과장", sites: [{ id: "s51", name: "당진 2공장", addr: "충남 당진시 가상테크로 58" }] },
    { id: "c6", name: "태성모터스", contact: "봉수정 대리", sites: [{ id: "s61", name: "화성 출하장", addr: "경기 화성시 가상자동차로 140" }] },
    { id: "c7", name: "미래에너지(주)", contact: "탁성민 부장", sites: [{ id: "s71", name: "군산 공장", addr: "전북 군산시 가상새만금로 21" }] },
    { id: "c8", name: "서진산업", contact: "여지훈 과장", sites: [{ id: "s81", name: "부산 신항 센터", addr: "부산 강서구 가상신항로 300" }] },
  ]
  var WORKERS = [
    ["강동호", "자사", ["포장", "반장"], 10], ["오세린", "자사", ["검수"], 8], ["임재현", "자사", ["목공"], 9], ["서다은", "자사", ["포장"], 7],
    ["문건우", "자사", ["상하차"], 8], ["배수아", "자사", ["결속"], 6], ["조현석", "자사", ["지게차"], 9], ["신예린", "자사", ["포장"], 7],
    ["홍준기", "외부", ["목공"], 8], ["유채원", "외부", ["포장"], 6], ["권태양", "외부", ["상하차"], 7], ["남궁별", "외부", ["포장"], 5],
    ["장민혁", "자사", ["목공", "반장"], 10], ["노하람", "외부", ["결속"], 6], ["백승우", "외부", ["상하차"], 8], ["전소율", "자사", ["검수"], 7],
    ["어진호", "외부", ["목공"], 7], ["피수연", "외부", ["포장"], 6],
  ].map(function (w, i) { return { id: "w" + (i + 1), name: w[0], type: w[1], tags: w[2], skill: w[3], phone: "010-****-" + pd(31 + i * 3) + pd(i * 7 % 100), active: true } })
  var VEHICLES = [
    { id: "v1", name: "윙바디-01", kind: "5톤 윙바디", cap: 38, status: "운행 가능" },
    { id: "v2", name: "카고-02", kind: "2.5톤 카고", cap: 16, status: "운행 가능" },
    { id: "v3", name: "윙바디-03", kind: "11톤 윙바디", cap: 62, status: "운행 가능" },
    { id: "v4", name: "카고-04", kind: "1톤 카고", cap: 7, status: "운행 가능" },
    { id: "v5", name: "크레인-05", kind: "5톤 카고크레인", cap: 30, status: "운행 가능" },
    { id: "v6", name: "탑차-06", kind: "2.5톤 탑차", cap: 14, status: "운행 가능" },
    { id: "v7", name: "윙바디-07", kind: "5톤 윙바디", cap: 38, status: "운행 가능" },
    { id: "v8", name: "카고-08", kind: "3.5톤 카고", cap: 20, status: "정비 중" },
  ]
  var PROJECTS = ["감속기 2차 선적분", "프레스 금형 수출", "배전반 패널 출하", "CNC 선반 3대", "유압 실린더 일괄", "냉각탑 예비 부품", "컨베이어 모듈 A동", "발전기 예비품", "검사장비 본체", "열교환기 코어", "용접 지그 세트", "공조기 유닛 반출", "펌프 스키드 4기", "변압기 부속"]
  var ITEMS = ["감속기 본체", "모터 유닛", "제어반", "금형 상형", "금형 하형", "유압 실린더", "열교환기 코어", "예비 부품 박스", "컨베이어 프레임", "검사장비 본체", "케이블 릴", "펌프 스키드", "공구 세트", "배관 부속 묶음"]
  var ITEM_SPECS = ["BOX", "SKID", "CRATE", "진공 BOX"]
  var SPECS = ["진공포장 + 목상자 + 볼트 체결", "방청유 도포 + 스키드", "VCI 필름 + 크레이트", "1차 랩핑 + 팔레트 결속", "건조제 + 진공 + 목상자", "스키드 + 상부 덮개", "-"]
  var PREPS = ["진공팩, 건조제", "결속밴드 2롤", "방청유 2통", "전동드릴, 피스", "-", "지게차 요청", "마킹 스텐실", "-"]
  var BOXTYPES = ["목상자 (밀폐형)", "스키드형", "크레이트 (투시형)", "합판 BOX"]
  var MEMOS = ["상차 전 사진 3장 남겨 주세요", "고객사 입회 예정 (오전)", "목재 재고 확인 필요", "중량물 — 크레인 대기"]
  var SLOTS = ["07:30", "08:00", "08:00", "08:30", "09:00", "09:00", "09:30", "10:00", "10:30", "13:00", "13:30", "14:00", "15:00"]
  var EVENT_TITLES = ["작업 전 안전 점검 회의 (2층 회의실)", "지게차 정기 점검", "포장재 입고 검수", "신규 거래처 현장 미팅", "월간 운영 회의", "목재 재고 실사", "방청유 납품 수령", "외부 인력 교육 (신규 3명)"]

  var S = {
    clients: CLIENTS, workers: WORKERS, vehicles: VEHICLES, orders: [], events: [], logs: [],
    users: [
      { id: "admin", name: "관리자", role: "관리자", last: "", active: true },
      { id: "field01", name: "장민혁", role: "현장팀장", last: Demo.day(0) + " 07:42", active: true },
      { id: "field02", name: "강동호", role: "현장팀장", last: Demo.day(-1) + " 18:05", active: true },
      { id: "office01", name: "오세린", role: "사무", last: Demo.day(0) + " 08:51", active: true },
      { id: "viewer", name: "조회 전용", role: "조회", last: Demo.day(-6) + " 10:12", active: false },
    ],
    ui: {
      date: TODAY, days: 1, zoom: 4, summary: false, group: "time", sel: {},
      calMonth: TODAY.slice(0, 7), calClient: "",
      assignDate: TODAY, edit: false, pick: null, poolTab: "all", onlyFree: false, poolQ: "", cardQ: "", sortSkill: false, clip: null,
      dispatchDate: TODAY, collapsed: false, drawer: false, closed: {},
      ordQ: "", ordClient: "", ordPeriod: "month", ordShow: 60, histQ: "", tplMenu: false, logQ: "", workerTab: "all",
    },
    modal: null,
    draft: null,
  }
  S.users[0].last = stamp()

  function client(id) { return S.clients.find(function (c) { return c.id === id }) }
  function site(o) { var c = client(o.clientId); return c && c.sites.find(function (s) { return s.id === o.siteId }) }
  function worker(id) { return S.workers.find(function (w) { return w.id === id }) }
  function vehicle(id) { return S.vehicles.find(function (v) { return v.id === id }) }
  function order(id) { return S.orders.find(function (o) { return o.id === id }) }

  function itemCbm(it) {
    var l = Number(it.L), w = Number(it.W), h = Number(it.H), q = Number(it.qty)
    if (!(l > 0 && w > 0 && h > 0 && q > 0)) return 0
    return (l * w * h) / 1e9 * q
  }
  function orderCbm(o) { return o.items.reduce(function (s, it) { return s + itemCbm(it) }, 0) }
  function orderQty(o) { return o.items.reduce(function (s, it) { return s + (Number(it.qty) || 0) }, 0) }
  function endOf(o) { return o.endDate || o.date }
  function multi(o) { return o.endDate && o.endDate !== o.date }

  function mkId(d) {
    var pre = "PO-" + d.slice(2, 4) + d.slice(5, 7) + d.slice(8, 10) + "-"
    var n = 1
    while (S.orders.some(function (o) { return o.id === pre + pd(n) })) n++
    return pre + pd(n)
  }
  function mkItems() {
    var n = rint(1, 4), out = []
    for (var i = 0; i < n; i++) out.push({ name: pick(ITEMS), qty: rint(1, 6), L: rint(12, 64) * 50, W: rint(10, 44) * 50, H: rint(8, 40) * 50, spec: pick(ITEM_SPECS) })
    return out
  }
  function mkOrder(d, off, isMulti) {
    var c = pick(S.clients), s = pick(c.sites)
    var allDay = !isMulti && rnd() < 0.12
    var start = pick(SLOTS)
    var need = rint(2, 6)
    var o = {
      id: mkId(d), clientId: c.id, siteId: s.id, project: pick(PROJECTS), date: d,
      endDate: isMulti ? addDays(d, rint(1, 2)) : "", allDay: allDay, start: allDay ? "" : start,
      end: isMulti ? "17:00" : !allDay && rnd() < 0.35 ? addMin(start, rint(3, 7) * 60) : "",
      author: "관리자", manager: c.contact, need: need, boxType: pick(BOXTYPES), spec: pick(SPECS),
      items: mkItems(), prep: pick(PREPS), files: rnd() < 0.5 ? ["제함지시서_" + c.name + ".xlsx"] : [],
      workers: [], vehicle: "", memo: rnd() < 0.14 ? pick(MEMOS) : "", created: d + " 09:00",
    }
    var prob = off < 0 ? 1 : off === 0 ? 0.55 : off <= 3 ? 0.25 : 0
    if (rnd() < prob) {
      var pool = S.workers.slice().sort(function () { return rnd() - 0.5 })
      var k = off < 0 ? need : rint(1, need)
      o.workers = pool.slice(0, k).map(function (w) { return w.id })
      if (rnd() < 0.8) o.vehicle = pick(S.vehicles.slice(0, 7)).id
    }
    return o
  }
  ;(function gen() {
    for (var off = -45; off <= 60; off++) {
      var d = Demo.day(off), w = dow(d)
      var n = off === 0 ? 11 : w === 0 ? (rnd() < 0.35 ? 1 : 0) : w === 6 ? rint(0, 2) : rint(3, 7)
      for (var i = 0; i < n; i++) S.orders.push(mkOrder(d, off, w !== 0 && rnd() < 0.07))
      if (w !== 0 && w !== 6 && rnd() < 0.3) S.events.push({ id: "e" + S.events.length, date: d, time: pick(["08:00", "09:00", "10:00", "13:00", "14:00", "16:00"]), title: pick(EVENT_TITLES), vehicle: rnd() < 0.5 ? pick(S.vehicles).id : "", worker: pick(S.workers).id })
    }
    // 어제 시작해 내일까지 이어지는 작업 하나 (현황판의 '이어짐' 표시용)
    var cont = mkOrder(Demo.day(-1), -1, true)
    cont.endDate = Demo.day(1); cont.start = "08:00"; cont.end = "17:00"; cont.workers = cont.workers.slice(0, 3)
    S.orders.push(cont)
    ;[["09:00", 0], ["10:00", 4], ["14:00", 1]].forEach(function (x, i) {
      S.events.push({ id: "et" + i, date: TODAY, time: x[0], title: EVENT_TITLES[x[1]], vehicle: S.vehicles[i].id, worker: S.workers[i * 4].id })
    })
    var acts = [["오더 등록", 3], ["인력 배정 변경", 1], ["차량 배차", 1], ["일정 이동", 2], ["엑셀 업로드", 2], ["오더 수정", 1], ["로그인", 0]]
    for (var j = 0; j < 14; j++) {
      var a = pick(acts), o = pick(S.orders)
      S.logs.push({ at: Demo.day(-Math.floor(j / 3)) + " " + pd(rint(7, 18)) + ":" + pd(rint(0, 59)), user: pick(["관리자", "장민혁", "오세린"]), action: a[0], target: a[1] ? o.id + " · " + client(o.clientId).name : "-" })
    }
    S.logs.sort(function (a, b) { return a.at < b.at ? 1 : -1 })
  })()

  function log(action, target) { S.logs.unshift({ at: stamp(), user: "관리자", action: action, target: target || "-" }) }

  function sortKey(o, d) {
    if (o.date < d) return "0"
    if (o.allDay) return "1"
    return "2" + o.start
  }
  function ordersOn(d, clientId) {
    return S.orders
      .filter(function (o) { return o.date <= d && endOf(o) >= d && (!clientId || o.clientId === clientId) })
      .sort(function (a, b) { var x = sortKey(a, d), y = sortKey(b, d); return x < y ? -1 : x > y ? 1 : a.id < b.id ? -1 : 1 })
  }
  function eventsOn(d) { return S.events.filter(function (v) { return v.date === d }).sort(function (a, b) { return a.time < b.time ? -1 : 1 }) }
  function timeText(o) {
    if (multi(o)) return o.allDay ? md(o.date) + " ~ " + md(o.endDate) + " 하루종일" : md(o.date) + " " + o.start + " ~ " + md(o.endDate) + " " + (o.end || "17:00")
    if (o.allDay) return "하루종일"
    return o.start + (o.end ? " ~ " + o.end : "")
  }
  function crewText(o) {
    if (!o.workers.length) return ""
    var first = worker(o.workers[0])
    return (first ? first.name : "") + (o.workers.length > 1 ? " 외 " + (o.workers.length - 1) : "")
  }

  // ───────────────────────── 공통 조각 ─────────────────────────
  var BTN = "inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer whitespace-nowrap"
  var BTN_P = "inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
  var IBTN = "inline-flex items-center justify-center w-8 h-8 text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
  var INP = "w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-slate-400"
  var SINP = "px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-slate-400"
  var LBL = "block text-xs font-medium text-slate-700 mb-1.5"
  var CARD = "bg-white rounded-xl border border-slate-200"
  var TH = "px-3 py-2 text-left text-[11px] font-medium text-slate-500 whitespace-nowrap"
  var TD = "px-3 py-2 whitespace-nowrap"

  function head(title, sub, right, back) {
    return (
      '<header class="bg-white border-b border-slate-200 px-5 py-3 flex flex-wrap items-center justify-between gap-3 demo-noprint">' +
      '<div class="flex items-center gap-3 min-w-0">' +
      (back ? '<a href="' + e(back) + '" class="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100" aria-label="뒤로">' + ic("arrow-left") + "</a>" : "") +
      '<div class="min-w-0"><h1 class="text-xl font-bold text-slate-900 tracking-tight">' + title + "</h1>" +
      (sub ? '<p class="text-xs text-slate-500 mt-0.5">' + sub + "</p>" : "") +
      "</div></div>" + (right || "") + "</header>"
    )
  }
  function dateNav(prefix, d) {
    return (
      '<div class="flex items-center gap-2">' +
      '<button type="button" class="' + IBTN + '" data-act="' + prefix + '-prev" aria-label="이전 날">' + ic("chevron-left") + "</button>" +
      '<input type="date" value="' + e(d) + '" data-change="' + prefix + '-date" class="px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-700 bg-white tabular-nums focus:outline-none focus:ring-2 focus:ring-blue-500">' +
      '<button type="button" class="' + IBTN + '" data-act="' + prefix + '-next" aria-label="다음 날">' + ic("chevron-right") + "</button>" +
      '<button type="button" class="' + BTN + '" data-act="' + prefix + '-today">오늘</button></div>'
    )
  }
  function empty(msg) { return '<div class="py-12 text-center text-sm text-slate-400">' + msg + "</div>" }
  function badge(text, tone) {
    var t = {
      gray: "bg-slate-100 text-slate-500", blue: "bg-blue-50 text-blue-600 border border-blue-200", amber: "bg-amber-50 text-amber-600 border border-amber-200",
      green: "bg-green-50 text-green-700 border border-green-200", red: "bg-red-50 text-red-600 border border-red-200", violet: "bg-violet-50 text-violet-600",
    }[tone || "gray"]
    return '<span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium whitespace-nowrap ' + t + '">' + e(text) + "</span>"
  }

  // ───────────────────────── 사이드바 ─────────────────────────
  var NAV = [
    { k: "dash", label: "대시보드", icon: "layout-grid", href: "#/" },
    { k: "my", label: "나의 일정", icon: "calendar", href: "#/my" },
    { label: "프로젝트", icon: "clipboard-list", kids: [["new", "신규 오더 작성", "#/orders/new"], ["orders", "전체 오더 내역", "#/orders"], ["calendar", "일정 관리", "#/calendar"], ["contractors", "도급업체 관리", "#/contractors"]] },
    { label: "운영 관리", icon: "briefcase", kids: [["assign", "인력 배정", "#/assign"], ["dispatch", "차량 배차", "#/dispatch"]] },
    { label: "자원 관리", icon: "database", kids: [["workers", "인력 관리", "#/workers"], ["vehicles", "보유 차량 관리", "#/vehicles"]] },
    { label: "시스템 관리", icon: "settings", kids: [["users", "사용자 관리", "#/users"], ["logs", "활동 로그", "#/logs"]] },
  ]
  function sidebar(active) {
    var c = S.ui.collapsed
    var top = "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors "
    var nav = NAV.map(function (n) {
      if (!n.kids) {
        var on = n.k === active
        return '<a href="' + n.href + '" title="' + n.label + '" class="' + top + (on ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50 hover:text-slate-900") + '">' + ic(n.icon, "w-5 h-5 shrink-0") + (c ? "" : "<span>" + n.label + "</span>") + "</a>"
      }
      var open = !S.ui.closed[n.label]
      var kidOn = n.kids.some(function (k) { return k[0] === active })
      if (c) return '<a href="' + n.kids[0][2] + '" title="' + n.label + '" class="' + top + (kidOn ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50") + '">' + ic(n.icon, "w-5 h-5 shrink-0") + "</a>"
      return (
        '<div class="pt-2"><button type="button" data-act="nav-group" data-g="' + n.label + '" class="w-full ' + top + 'text-slate-700 hover:bg-slate-50 cursor-pointer">' + ic(n.icon, "w-5 h-5 shrink-0") + "<span>" + n.label + '</span><span class="ml-auto text-slate-400">' + ic(open ? "chevron-up" : "chevron-down") + "</span></button>" +
        (open ? '<div class="mt-1 space-y-0.5">' + n.kids.map(function (k) {
          var on = k[0] === active
          return '<a href="' + k[2] + '" class="block pl-11 pr-3 py-2 rounded-lg demo-t13 transition-colors ' + (on ? "bg-blue-50 text-blue-700 font-semibold" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900") + '">' + k[1] + "</a>"
        }).join("") + "</div>" : "") + "</div>"
      )
    }).join("")
    return (
      '<aside class="demo-aside ' + (S.ui.drawer ? "demo-open " : "") + (c ? "w-16" : "w-64") + ' bg-white border-r border-slate-200 flex flex-col shrink-0">' +
      '<div class="h-16 flex items-center justify-between px-4 border-b border-slate-100">' +
      '<a href="#/" class="flex items-center gap-2.5 min-w-0"><span class="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center shrink-0">' + ic("package", "w-5 h-5") + "</span>" +
      (c ? "" : '<span class="text-lg font-bold text-slate-900 tracking-tight">Pack-Ops</span>') + "</a>" +
      (c ? "" : '<button type="button" data-act="collapse" class="p-1.5 rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-600 cursor-pointer" aria-label="메뉴 접기">' + ic("chevron-left") + "</button>") +
      "</div>" +
      (c ? '<button type="button" data-act="collapse" class="mx-auto mt-2 p-1.5 rounded-md text-slate-400 hover:bg-slate-100 cursor-pointer" aria-label="메뉴 펼치기">' + ic("chevron-right") + "</button>" : "") +
      '<nav class="flex-1 overflow-y-auto p-3 space-y-1">' + nav + "</nav>" +
      '<div class="border-t border-slate-200 p-4 flex items-center gap-3">' +
      '<span class="w-9 h-9 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold flex items-center justify-center shrink-0">관</span>' +
      (c ? "" : '<div class="min-w-0"><p class="text-sm font-semibold text-slate-900">관리자</p><p class="text-xs text-slate-500">관리자</p></div>') +
      (c ? "" : '<a href="#/login" class="ml-auto p-1.5 rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-600" title="로그아웃">' + ic("log-out") + "</a>") +
      "</div></aside>"
    )
  }
  function shell(active, body) {
    return (
      '<div class="flex min-h-screen bg-slate-50">' +
      (S.ui.drawer ? '<div class="fixed inset-0 bg-black/30 z-50 md:hidden" data-act="drawer"></div>' : "") +
      sidebar(active) +
      '<div class="flex-1 min-w-0 flex flex-col">' +
      '<div class="md:hidden sticky top-0 z-40 h-14 bg-white border-b border-slate-200 flex items-center gap-3 px-4 demo-noprint">' +
      '<button type="button" data-act="drawer" class="p-1.5 rounded-md text-slate-600 hover:bg-slate-100" aria-label="메뉴">' + ic("menu", "w-5 h-5") + "</button>" +
      '<span class="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center">' + ic("package", "w-4 h-4") + '</span><span class="font-bold text-slate-900">Pack-Ops</span></div>' +
      '<main class="flex-1 min-w-0">' + body + "</main></div></div>" + modal()
    )
  }

  // ───────────────────────── 대시보드 (일일 현황판) ─────────────────────────
  var ZOOM = { 1: 10, 2: 11, 3: 11.5, 4: 12, 5: 13, 6: 14 }
  function viewDash() {
    var u = S.ui, d = u.date
    var days = u.days === 2 ? [d, addDays(d, 1)] : [d]
    var seg = function (n) { return '<button type="button" data-act="dash-days" data-n="' + n + '" class="px-2.5 py-1 rounded-md text-xs cursor-pointer ' + (u.days === n ? "bg-blue-50 text-blue-700 font-semibold" : "text-slate-500 hover:bg-slate-50") + '">' + n + "일</button>" }
    var right =
      '<div class="flex flex-wrap items-center gap-2">' +
      '<button type="button" class="' + BTN + '" data-act="print">' + ic("printer") + "일일 현황판 인쇄</button>" +
      '<a href="#/report?date=' + e(d) + '" class="' + BTN + '">' + ic("pen-line") + "필기 후 인쇄</a>" +
      '<button type="button" class="' + BTN + '" data-act="dl-orders">' + ic("download") + "작업지시서 다운로드</button>" +
      dateNav("dash", d) +
      '<div class="inline-flex items-center gap-0.5 p-0.5 rounded-lg border border-slate-200 bg-white">' + seg(1) + seg(2) + "</div>" +
      '<div class="inline-flex items-center rounded-lg border border-slate-200 bg-white">' +
      '<button type="button" data-act="zoom" data-d="-1" class="p-2 text-slate-500 hover:bg-slate-50 rounded-lg cursor-pointer" aria-label="글자 작게">' + ic("minus", "w-3.5 h-3.5") + "</button>" +
      '<span class="w-5 text-center text-xs text-slate-500 tabular-nums">' + u.zoom + "</span>" +
      '<button type="button" data-act="zoom" data-d="1" class="p-2 text-slate-500 hover:bg-slate-50 rounded-lg cursor-pointer" aria-label="글자 크게">' + ic("plus", "w-3.5 h-3.5") + "</button></div>" +
      '<button type="button" class="' + BTN + '" data-act="summary">' + ic(u.summary ? "eye-off" : "eye") + (u.summary ? "요약 닫기" : "요약 보기") + "</button></div>"

    var body = '<div class="p-4 space-y-5">'
    body += '<div class="demo-print-only text-lg font-bold">' + e(BRAND) + " 일일 현황판 · " + e(dayLabel(d)) + "</div>"
    if (u.summary) body += summaryCards(days)
    days.forEach(function (day, idx) {
      var list = ordersOn(day)
      body +=
        '<section class="space-y-2">' +
        '<div class="flex flex-wrap items-center justify-between gap-2"><div class="flex items-center gap-2 text-slate-800">' + ic("clipboard-list", "w-5 h-5 text-slate-500") +
        '<h2 class="font-semibold">오더</h2><span class="text-sm text-slate-400">' + list.length + "건</span>" +
        (u.days === 2 ? '<span class="ml-2 text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">' + e(dayLabel(day)) + "</span>" : "") + "</div>" +
        (idx === 0 ? '<div class="flex items-center gap-2 demo-noprint"><button type="button" class="' + BTN + ' text-slate-500" data-act="refresh">' + ic("refresh-cw", "w-3.5 h-3.5") + "새로고침</button>" +
          '<select data-change="dash-group" class="' + SINP + ' w-36"><option value="time"' + (u.group === "time" ? " selected" : "") + '>시간순</option><option value="client"' + (u.group === "client" ? " selected" : "") + ">업체별 묶음</option></select></div>" : "") +
        "</div>" +
        '<div class="' + CARD + ' overflow-x-auto">' + dashTable(day, list) + "</div></section>"
      var ev = eventsOn(day)
      body +=
        '<section class="space-y-2"><div class="flex items-center gap-2 text-slate-800">' + ic("calendar", "w-5 h-5 text-slate-500") +
        '<h2 class="font-semibold">일정</h2><span class="text-sm text-slate-400">' + ev.length + "건</span>" +
        '<button type="button" data-act="event-new" data-date="' + e(day) + '" class="ml-2 text-xs text-blue-600 hover:underline cursor-pointer demo-noprint">+ 일정 추가</button></div>' +
        '<div class="' + CARD + ' overflow-x-auto">' +
        (ev.length
          ? '<table class="w-full min-w-[600px] text-xs"><thead class="bg-slate-50 border-b border-slate-200"><tr><th class="' + TH + ' w-32">시간</th><th class="' + TH + ' w-40">차량</th><th class="' + TH + ' w-40">배정 인력</th><th class="' + TH + '">제목</th></tr></thead><tbody>' +
            ev.map(function (v) {
              var vh = vehicle(v.vehicle), wk = worker(v.worker)
              return '<tr class="border-b border-slate-100 last:border-0 hover:bg-slate-50 cursor-pointer" data-act="event-open" data-id="' + e(v.id) + '"><td class="' + TD + ' py-2.5 text-slate-700 tabular-nums">' + e(v.time) + '</td><td class="' + TD + ' text-slate-700">' + e(vh ? vh.name : "-") + '</td><td class="' + TD + ' text-slate-700">' + e(wk ? wk.name : "-") + '</td><td class="px-3 py-2 text-slate-800">' + e(v.title) + "</td></tr>"
            }).join("") + "</tbody></table>"
          : empty("등록된 일정이 없습니다")) +
        "</div></section>"
    })
    body += "</div>"
    return head("일일 현황판", "작업 지시서와 일정을 클릭하면 상세 정보를 확인할 수 있습니다.", right) + body
  }
  function summaryCards(days) {
    var list = []
    days.forEach(function (d) { ordersOn(d).forEach(function (o) { if (list.indexOf(o) < 0) list.push(o) }) })
    var cbm = list.reduce(function (s, o) { return s + orderCbm(o) }, 0)
    var need = list.reduce(function (s, o) { return s + o.need }, 0)
    var put = list.reduce(function (s, o) { return s + o.workers.length }, 0)
    var unassigned = list.filter(function (o) { return !o.workers.length }).length
    var noCar = list.filter(function (o) { return !o.vehicle }).length
    var card = function (label, value, sub, tone) {
      return '<div class="' + CARD + ' p-4"><p class="text-xs text-slate-500">' + label + '</p><p class="text-2xl font-bold mt-1 tabular-nums ' + (tone || "text-slate-900") + '">' + value + '</p><p class="text-[11px] text-slate-400 mt-1">' + sub + "</p></div>"
    }
    return (
      '<div class="grid grid-cols-2 xl:grid-cols-4 gap-3">' +
      card("오더", list.length + "건", "업체 " + new Set(list.map(function (o) { return o.clientId })).size + "곳") +
      card("총 CBM", f3(cbm) + " m³", "품목 " + list.reduce(function (s, o) { return s + o.items.length }, 0) + "종", "text-blue-600") +
      card("투입 인원", put + " / " + need + "명", need ? "충원율 " + Math.round((put / need) * 100) + "%" : "-", put < need ? "text-orange-600" : "text-green-600") +
      card("미배정 오더", unassigned + "건", "차량 미배차 " + noCar + "건", unassigned ? "text-red-600" : "text-slate-900") +
      "</div>"
    )
  }
  function dashTable(day, list) {
    var u = S.ui
    if (!list.length) return empty("이 날짜에 잡힌 오더가 없습니다")
    var rows = list
    if (u.group === "client") rows = list.slice().sort(function (a, b) { var x = client(a.clientId).name, y = client(b.clientId).name; return x < y ? -1 : x > y ? 1 : 0 })
    var allSel = list.every(function (o) { return u.sel[o.id] })
    var h = '<table class="w-full min-w-[860px] table-fixed leading-tight" style="font-size:' + ZOOM[u.zoom] + 'px"><colgroup><col style="width:36px"><col style="width:15%"><col style="width:7%"><col style="width:8%"><col style="width:11%"><col style="width:9%"><col style="width:12%"><col><col style="width:5%"><col style="width:10%"><col style="width:34px"></colgroup>' +
      '<thead class="bg-slate-50 border-b border-slate-200"><tr>' +
      '<th class="px-3 py-2" data-act="none"><input type="checkbox" class="accent-blue-600 cursor-pointer align-middle" data-change="sel-all" data-date="' + e(day) + '"' + (allSel ? " checked" : "") + ' aria-label="전체 선택"></th>' +
      ["시간", "차량", "배정 인력", "업체명", "사업장", "프로젝트", "사양", "수량", "준비물"].map(function (t) { return '<th class="' + TH + '">' + t + "</th>" }).join("") +
      '<th class="px-2 py-2"></th></tr></thead><tbody>'
    var lastClient = null
    rows.forEach(function (o) {
      var c = client(o.clientId), s = site(o)
      if (u.group === "client" && o.clientId !== lastClient) {
        lastClient = o.clientId
        var cnt = rows.filter(function (x) { return x.clientId === o.clientId }).length
        h += '<tr class="bg-slate-50 border-b border-slate-200"><td></td><td colspan="10" class="px-3 py-1.5 font-semibold text-slate-700">' + e(c.name) + ' <span class="font-normal text-slate-400">' + cnt + "건</span></td></tr>"
      }
      var cont = o.date < day
      var crew = crewText(o)
      var vh = vehicle(o.vehicle)
      h +=
        '<tr class="border-b border-slate-100 last:border-0 cursor-pointer ' + (u.sel[o.id] ? "bg-blue-50/50" : "hover:bg-slate-50") + '" data-act="open-order" data-id="' + e(o.id) + '">' +
        '<td class="px-3 py-1" data-act="none"><input type="checkbox" class="accent-blue-600 cursor-pointer align-middle" data-change="sel" data-id="' + e(o.id) + '"' + (u.sel[o.id] ? " checked" : "") + ' aria-label="선택"></td>' +
        '<td class="px-3 py-1 text-slate-700 truncate tabular-nums" title="' + e(timeText(o)) + '">' + e(timeText(o)) + (cont ? ' <span class="text-[10px] text-red-500 font-medium">이어짐</span>' : "") + "</td>" +
        '<td class="px-3 py-1 truncate ' + (vh ? "text-slate-700" : "text-slate-400") + '">' + e(vh ? vh.name : "미배차") + "</td>" +
        '<td class="px-3 py-1 truncate ' + (crew ? "text-slate-700" : "text-slate-400") + '">' + e(crew || "미배정") + "</td>" +
        '<td class="px-3 py-1 text-slate-800 truncate">' + e(c.name) + "</td>" +
        '<td class="px-3 py-1 text-slate-700 truncate">' + e(s ? s.name : "-") + "</td>" +
        '<td class="px-3 py-1 text-slate-700 truncate">' + e(o.project) + "</td>" +
        '<td class="px-3 py-1 text-slate-700 truncate">' + e(o.spec || "-") + "</td>" +
        '<td class="px-3 py-1 text-slate-700 tabular-nums">' + e(orderQty(o) ? orderQty(o) + "개" : "-") + "</td>" +
        '<td class="px-3 py-1 text-slate-700 truncate">' + e(o.prep || "-") + "</td>" +
        '<td class="px-2 py-0.5"><button type="button" data-act="memo" data-id="' + e(o.id) + '" class="flex p-0.5 rounded cursor-pointer hover:bg-slate-100 ' + (o.memo ? "text-blue-600" : "text-slate-400") + '" title="' + e(o.memo || "메모") + '">' + ic("message-square", "w-3.5 h-3.5") + "</button></td></tr>"
    })
    return h + "</tbody></table>"
  }

  // ───────────────────────── 작업 일보 (필기 후 인쇄) ─────────────────────────
  function viewReport(q) {
    var d = q.date || S.ui.date
    var list = ordersOn(d)
    var right = '<div class="flex flex-wrap items-center gap-2">' + dateNav("rep", d) + '<button type="button" class="' + BTN_P + '" data-act="print">' + ic("printer") + "인쇄</button></div>"
    var rows = list.map(function (o, i) {
      var c = client(o.clientId), s = site(o), vh = vehicle(o.vehicle)
      return (
        '<tr class="border-b border-slate-200 align-top"><td class="px-2 py-3 text-center text-slate-500">' + (i + 1) + "</td>" +
        '<td class="px-2 py-3 tabular-nums">' + e(timeText(o)) + "</td>" +
        '<td class="px-2 py-3"><p class="font-semibold text-slate-900">' + e(c.name) + '</p><p class="text-[11px] text-slate-500">' + e(s ? s.name : "") + "</p></td>" +
        '<td class="px-2 py-3"><p>' + e(o.project) + '</p><p class="text-[11px] text-slate-500">' + e(o.spec || "-") + "</p></td>" +
        '<td class="px-2 py-3 text-right tabular-nums">' + orderQty(o) + "개<br><span class=\"text-[11px] text-blue-600\">" + f3(orderCbm(o)) + " m³</span></td>" +
        '<td class="px-2 py-3">' + e(o.workers.map(function (id) { var w = worker(id); return w ? w.name : "" }).join(", ") || "미배정") + '<p class="text-[11px] text-slate-500">' + e(vh ? vh.name : "차량 미배차") + "</p></td>" +
        '<td class="px-2 py-3 border-l border-slate-200"></td><td class="px-2 py-3 border-l border-slate-200"></td><td class="px-2 py-3 border-l border-slate-200 min-w-[160px]"></td></tr>'
      )
    }).join("")
    return (
      head("작업 일보", "현장에서 펜으로 적을 칸을 비워 둔 인쇄용 양식입니다.", right, "#/") +
      '<div class="p-4"><div class="' + CARD + ' p-6 max-w-[1100px] mx-auto">' +
      '<div class="flex flex-wrap items-end justify-between gap-3 border-b-2 border-slate-900 pb-3 mb-4"><div><p class="text-xs text-slate-500">' + e(BRAND) + '</p><h2 class="text-2xl font-bold text-slate-900">작업 일보</h2></div>' +
      '<div class="text-right"><p class="text-sm font-semibold text-slate-800">' + e(d) + " (" + WD[dow(d)] + ')</p><p class="text-xs text-slate-500">오더 ' + list.length + "건 · 총 " + f3(list.reduce(function (s, o) { return s + orderCbm(o) }, 0)) + " m³</p></div>" +
      '<table class="text-xs border border-slate-300"><tr>' + ["작성", "검토", "승인"].map(function (t) { return '<td class="border border-slate-300 px-4 py-1 text-center bg-slate-50">' + t + "</td>" }).join("") + "</tr><tr>" + '<td class="border border-slate-300 h-10"></td>'.repeat(3) + "</tr></table></div>" +
      '<div class="overflow-x-auto"><table class="w-full min-w-[860px] text-xs text-slate-800"><thead><tr class="bg-slate-100 border-t border-b border-slate-300">' +
      ["No", "시간", "업체 / 사업장", "프로젝트 / 사양", "수량·CBM", "배정 인력 / 차량", "실제 투입", "완료 시각", "특이사항 (필기)"].map(function (t) { return '<th class="px-2 py-2 text-left font-semibold whitespace-nowrap">' + t + "</th>" }).join("") +
      "</tr></thead><tbody>" + (rows || '<tr><td colspan="9">' + empty("이 날짜에 잡힌 오더가 없습니다") + "</td></tr>") + "</tbody></table></div>" +
      '<div class="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs"><div class="border border-slate-300 rounded-lg p-3 min-h-[100px]"><p class="font-semibold text-slate-700 mb-1">안전 점검</p><p class="text-slate-400">□ 보호구 착용  □ 지게차 동선 확보  □ 중량물 2인 작업</p></div><div class="border border-slate-300 rounded-lg p-3 min-h-[100px]"><p class="font-semibold text-slate-700">내일 준비 사항</p></div></div>' +
      "</div></div>"
    )
  }

  // ───────────────────────── 오더 목록 ─────────────────────────
  function viewOrders() {
    var u = S.ui, m = TODAY.slice(0, 7)
    var pm = addDays(m + "-01", -1).slice(0, 7), nm = addDays(addDays(m + "-01", 31).slice(0, 7) + "-01", 0).slice(0, 7)
    var list = S.orders.filter(function (o) {
      if (u.ordClient && o.clientId !== u.ordClient) return false
      if (u.ordPeriod === "month" && o.date.slice(0, 7) !== m) return false
      if (u.ordPeriod === "prev" && o.date.slice(0, 7) !== pm) return false
      if (u.ordPeriod === "next" && o.date.slice(0, 7) !== nm) return false
      if (u.ordPeriod === "unassigned" && (o.workers.length || o.date < TODAY)) return false
      if (u.ordQ) { var q = u.ordQ.toLowerCase(); var c = client(o.clientId); if ((o.id + c.name + o.project + o.items.map(function (i) { return i.name }).join(" ")).toLowerCase().indexOf(q) < 0) return false }
      return true
    }).sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : a.id < b.id ? 1 : -1 })
    var shown = list.slice(0, u.ordShow)
    var right = '<a href="#/orders/new" class="' + BTN_P + '" data-act="new-order">' + ic("plus") + "신규 오더 작성</a>"
    var per = [["month", "이번 달"], ["prev", "지난 달"], ["next", "다음 달"], ["unassigned", "미배정 (오늘 이후)"], ["all", "전체"]]
    return (
      head("전체 오더 내역", "오더를 누르면 작업 지시서와 제함지시서를 볼 수 있습니다.", right) +
      '<div class="p-4 space-y-3">' +
      '<div class="flex flex-wrap items-center gap-2">' +
      '<div class="relative"><span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400">' + ic("search", "w-3.5 h-3.5") + '</span><input data-input="ord-q" value="' + e(u.ordQ) + '" placeholder="오더번호, 업체, 프로젝트, 품명" class="' + SINP + ' pl-8 w-64"></div>' +
      '<select data-change="ord-client" class="' + SINP + '"><option value="">전체 업체</option>' + S.clients.map(function (c) { return '<option value="' + c.id + '"' + (u.ordClient === c.id ? " selected" : "") + ">" + e(c.name) + "</option>" }).join("") + "</select>" +
      '<div class="inline-flex flex-wrap gap-1">' + per.map(function (p) { return '<button type="button" data-act="ord-period" data-p="' + p[0] + '" class="px-3 py-1.5 rounded-full text-xs cursor-pointer ' + (u.ordPeriod === p[0] ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50") + '">' + p[1] + "</button>" }).join("") + "</div>" +
      '<span id="ord-count" class="ml-auto text-xs text-slate-500">총 <b class="text-slate-900">' + list.length + "</b>건</span></div>" +
      '<div class="' + CARD + ' overflow-x-auto" id="ord-table">' + ordersTable(shown, list.length) + "</div></div>"
    )
  }
  function ordersTable(shown, total) {
    if (!shown.length) return empty("조건에 맞는 오더가 없습니다")
    return (
      '<table class="w-full min-w-[860px] text-xs"><thead class="bg-slate-50 border-b border-slate-200"><tr>' +
      ["오더번호", "작업일", "업체명", "사업장", "프로젝트", "품목", "총 CBM", "인원", "차량", ""].map(function (t, i) { return '<th class="' + TH + (i >= 5 && i <= 7 ? " text-right" : "") + '">' + t + "</th>" }).join("") +
      "</tr></thead><tbody>" +
      shown.map(function (o) {
        var c = client(o.clientId), s = site(o), vh = vehicle(o.vehicle)
        var full = o.workers.length >= o.need
        return (
          '<tr class="border-b border-slate-100 last:border-0 hover:bg-slate-50 cursor-pointer" data-act="open-order" data-id="' + e(o.id) + '">' +
          '<td class="' + TD + ' font-mono text-slate-600">' + e(o.id) + "</td>" +
          '<td class="' + TD + ' text-slate-700 tabular-nums">' + e(o.date) + (multi(o) ? ' <span class="text-[10px] text-amber-600">~' + e(md(o.endDate)) + "</span>" : "") + "</td>" +
          '<td class="' + TD + ' font-medium text-slate-900">' + e(c.name) + "</td>" +
          '<td class="' + TD + ' text-slate-600">' + e(s ? s.name : "-") + "</td>" +
          '<td class="' + TD + ' text-slate-700">' + e(o.project) + "</td>" +
          '<td class="' + TD + ' text-right text-slate-600">' + o.items.length + "종 " + orderQty(o) + "개</td>" +
          '<td class="' + TD + ' text-right font-mono text-blue-600">' + f3(orderCbm(o)) + "</td>" +
          '<td class="' + TD + ' text-right tabular-nums ' + (full ? "text-green-600" : "text-orange-600") + '">' + o.workers.length + " / " + o.need + "</td>" +
          '<td class="' + TD + " " + (vh ? "text-slate-700" : "text-slate-400") + '">' + e(vh ? vh.name : "미배차") + "</td>" +
          '<td class="' + TD + ' text-right text-slate-400">' + ic("chevron-right", "w-3.5 h-3.5") + "</td></tr>"
        )
      }).join("") +
      "</tbody></table>" +
      (total > shown.length ? '<div class="p-3 text-center border-t border-slate-100"><button type="button" data-act="ord-more" class="' + BTN + '">' + (total - shown.length) + "건 더 보기</button></div>" : "")
    )
  }

  // ───────────────────────── 작업 지시서 (오더 상세) ─────────────────────────
  function viewOrder(o) {
    var c = client(o.clientId), s = site(o), vh = vehicle(o.vehicle)
    var cbm = orderCbm(o)
    var right =
      '<div class="flex flex-wrap items-center gap-2">' +
      '<a href="#/orders/' + e(o.id) + '/sheet" class="' + BTN + '">' + ic("file-spreadsheet") + "제함지시서 보기</a>" +
      '<button type="button" class="' + BTN + '" data-act="dl-sheet" data-id="' + e(o.id) + '">' + ic("download") + "엑셀 다운로드</button>" +
      '<a href="#/orders/' + e(o.id) + '/edit" class="' + BTN + '">' + ic("pencil") + "수정</a>" +
      '<button type="button" class="' + BTN + ' text-red-600" data-act="del-order" data-id="' + e(o.id) + '">' + ic("trash-2") + "삭제</button></div>"
    var info = [
      ["오더번호", '<span class="font-mono">' + e(o.id) + "</span>"], ["업체명", e(c.name)], ["사업장", e(s ? s.name : "-")],
      ["일정", e(o.date === endOf(o) ? o.date + " " + (o.allDay ? "하루종일" : o.start + (o.end ? " ~ " + o.end : "")) : timeText(o))],
      ["주소", e(s ? s.addr : "-")], ["프로젝트 (PJT)", e(o.project)], ["작성자", e(o.author)], ["담당자", e(o.manager || "-")],
      ["필요 인원", e(o.need + "명")], ["박스형식", e(o.boxType || "-")], ["사양", e(o.spec || "-")], ["준비물", e(o.prep || "-")],
    ]
    return (
      head("작업 지시서", "<span>" + e(c.name) + " · " + e(o.project) + "</span>", right, "#/orders") +
      '<div class="p-4"><div class="max-w-[1100px] mx-auto space-y-4">' +
      '<div class="' + CARD + '"><div class="px-5 py-3 border-b border-slate-100 flex items-center justify-between"><h2 class="font-semibold text-slate-900">기본 정보</h2>' +
      (multi(o) ? badge("연속 작업", "amber") : "") + "</div>" +
      '<dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 p-5 text-sm">' +
      info.map(function (r) { return '<div class="min-w-0"><dt class="text-[11px] text-slate-500">' + r[0] + '</dt><dd class="text-slate-900 mt-0.5 break-words">' + r[1] + "</dd></div>" }).join("") + "</dl></div>" +
      '<div class="' + CARD + '"><div class="px-5 py-3 border-b border-slate-100 flex items-center gap-2">' + ic("box", "w-4 h-4 text-slate-500") + '<h2 class="font-semibold text-slate-900">물품 상세</h2></div><div class="p-5 space-y-3">' +
      itemsReadTable(o.items) +
      '<div class="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 flex items-end justify-between"><div><p class="text-[11px] text-blue-600">총 CBM (자동 계산)</p><p class="text-2xl font-bold text-slate-900 tabular-nums">' + f3(cbm) + ' m³</p></div><div class="text-right"><p class="text-[11px] text-slate-500">총 수량</p><p class="text-2xl font-bold text-slate-900">' + orderQty(o) + "개</p></div></div></div></div>" +
      '<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">' +
      '<div class="' + CARD + ' p-5"><div class="flex items-center justify-between mb-3"><h2 class="font-semibold text-slate-900 flex items-center gap-2">' + ic("users", "w-4 h-4 text-slate-500") + "투입 인원</h2>" +
      '<span class="text-xs font-semibold ' + (o.workers.length >= o.need ? "text-green-600" : "text-orange-600") + '">' + o.workers.length + " / " + o.need + "명</span></div>" +
      (o.workers.length ? '<div class="flex flex-wrap gap-1.5">' + o.workers.map(function (id) { var w = worker(id); return w ? '<span class="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 text-xs text-slate-700">' + e(w.name) + ' <span class="text-[10px] text-slate-400">' + e(w.type) + "</span></span>" : "" }).join("") + "</div>" : '<p class="text-xs text-slate-400">배정된 인력이 없습니다</p>') +
      '<button type="button" data-act="goto-assign" data-date="' + e(o.date) + '" class="mt-3 text-xs text-blue-600 hover:underline cursor-pointer">인력 배정 화면에서 바꾸기 →</button></div>' +
      '<div class="' + CARD + ' p-5"><h2 class="font-semibold text-slate-900 flex items-center gap-2 mb-3">' + ic("truck", "w-4 h-4 text-slate-500") + "배정 차량</h2>" +
      '<p class="text-sm ' + (vh ? "text-slate-900" : "text-slate-400") + '">' + e(vh ? vh.name + " · " + vh.kind : "배정된 차량 없음") + "</p>" +
      (vh && cbm > vh.cap && vh.cap ? '<p class="text-xs text-amber-600 mt-1">적재 가능 ' + vh.cap + " m³ 보다 물량이 많습니다</p>" : "") +
      '<button type="button" data-act="goto-dispatch" data-date="' + e(o.date) + '" class="mt-3 text-xs text-blue-600 hover:underline cursor-pointer">차량 배차 화면에서 바꾸기 →</button></div></div>' +
      '<div class="' + CARD + ' p-5"><h2 class="font-semibold text-slate-900 flex items-center gap-2 mb-3">' + ic("paperclip", "w-4 h-4 text-slate-500") + "파일 첨부 · 메모</h2>" +
      (o.files.length ? o.files.map(function (f) { return '<div class="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 border border-green-200 text-xs text-slate-700 mb-2">' + ic("file-text", "w-3.5 h-3.5 text-green-600") + e(f) + "</div>" }).join("") : '<p class="text-xs text-slate-400 mb-2">첨부 파일이 없습니다</p>') +
      '<p class="text-xs text-slate-500 mt-3">메모</p><p class="text-sm text-slate-800 whitespace-pre-wrap">' + e(o.memo || "-") + "</p></div>" +
      "</div></div>"
    )
  }
  function itemsReadTable(items) {
    if (!items.length) return '<p class="text-xs text-slate-400">등록된 물품이 없습니다</p>'
    return (
      '<div class="border border-slate-200 rounded-lg overflow-x-auto"><table class="w-full min-w-[600px] text-xs"><thead class="bg-slate-50 border-b border-slate-200"><tr>' +
      '<th class="' + TH + ' w-10">#</th><th class="' + TH + '">품명</th><th class="' + TH + ' text-right">수량</th><th class="' + TH + ' text-center">규격 L × W × H</th><th class="' + TH + ' text-right">CBM</th><th class="' + TH + '">사양</th></tr></thead><tbody>' +
      items.map(function (it, i) {
        return '<tr class="border-b border-slate-100 last:border-0"><td class="' + TD + ' text-slate-400">' + (i + 1) + '</td><td class="' + TD + ' text-slate-800">' + e(it.name) + '</td><td class="' + TD + ' text-right tabular-nums">' + e(it.qty) + '</td><td class="' + TD + ' text-center font-mono text-slate-600">' + e(it.L) + " × " + e(it.W) + " × " + e(it.H) + '</td><td class="' + TD + ' text-right font-mono font-semibold text-blue-600">' + f3(itemCbm(it)) + '</td><td class="' + TD + ' text-slate-600">' + e(it.spec) + "</td></tr>"
      }).join("") + "</tbody></table></div>"
    )
  }

  // ───────────────────────── 제함지시서 (엑셀 모양) ─────────────────────────
  function mats(it) {
    var L = +it.L, W = +it.W, H = +it.H
    var skid = Math.max(2, Math.ceil(W / 450)), base = Math.max(2, Math.ceil(L / 600)), rib = 4 + (H > 1200 ? 2 : 0)
    return {
      g: ["스키드 90×90 = " + skid + "EA", "받침목 75×75 = " + base + "EA", "합판 12T " + (L > 2000 ? "2겹" : "1겹")],
      h: ["보강재 60×60 = " + rib + "EA", "고정목 45×45 #"],
      skid: skid * it.qty, base: base * it.qty, rib: rib * it.qty,
    }
  }
  function steps(o) {
    var s = []
    if (/방청/.test(o.spec)) s.push("방청유 도포 후 건조")
    if (/VCI/.test(o.spec)) s.push("VCI 필름 감싸기")
    if (/진공|건조제/.test(o.spec) || o.items.some(function (i) { return /진공/.test(i.spec) })) s.push("건조제 투입 · 진공 포장")
    s.push("스키드 고정 · 볼트 체결", "측판 · 상판 조립", "케이스 마킹 · 사진 촬영")
    return s.map(function (t, i) { return i + 1 + ". " + t })
  }
  function viewSheet(o) {
    var c = client(o.clientId), s = site(o)
    var cases = orderQty(o), cbm = orderCbm(o)
    var mt = o.items.map(mats)
    var tot = mt.reduce(function (a, m) { a.skid += m.skid; a.base += m.base; a.rib += m.rib; return a }, { skid: 0, base: 0, rib: 0 })
    var rn = 0
    function R(cells, cls) { rn++; return '<tr class="' + (cls || "") + '"><td class="rn">' + rn + "</td>" + cells + "</tr>" }
    function td(v, attrs, cls) { return "<td " + (attrs || "") + ' class="' + (cls || "") + '">' + (v == null ? "" : v) + "</td>" }
    var h = ""
    h += R(td('<span class="text-lg font-bold tracking-widest">표 준 제 함 지 시 서</span>', 'colspan="8"', "text-center") + td(e(BRAND), 'colspan="2"', "text-right text-[11px] text-slate-500"))
    ;[["업체명", c.name, "작업일", o.date + (multi(o) ? " ~ " + o.endDate : "") + (o.allDay ? " 하루종일" : " " + o.start)], ["사업장", s ? s.name : "-", "프로젝트", o.project], ["작성자", o.author, "담당자", o.manager || ""], ["박스형식", o.boxType || "-", "필요 인원", o.need + "명"]].forEach(function (r) {
      h += R(td(r[0], 'colspan="2"', "gh") + td(e(r[1]), 'colspan="3"') + td(r[2], "", "gh") + td(e(r[3]), 'colspan="4"'))
    })
    h += R(td("NO", 'rowspan="2"', "gh") + td("품 명", 'rowspan="2"', "gh") + td("PACKING SIZE(mm)", 'colspan="3"', "gh text-[11px]") + td("CASE", 'rowspan="2"', "gh") + td("자 재", 'colspan="2"', "gh") + td("사양", 'rowspan="2"', "gh") + td("CBM", 'rowspan="2"', "gh"))
    h += R(td("L", "", "gh") + td("W", "", "gh") + td("H", "", "gh") + td("기초재", "", "gh") + td("보강재", "", "gh"))
    o.items.forEach(function (it, i) {
      h += R(
        td(i + 1, "", "text-center") + td(e(it.name)) + td(e(it.L), "", "text-center tabular-nums") + td(e(it.W), "", "text-center tabular-nums") + td(e(it.H), "", "text-center tabular-nums") +
        td(e(it.qty), "", "text-center") + td(mt[i].g.map(e).join("<br>"), "", "text-[11px] leading-snug") + td(mt[i].h.map(e).join("<br>"), "", "text-[11px] leading-snug") +
        td(e(it.spec), "", "text-center") + td(f3(itemCbm(it)), "", "text-right tabular-nums"),
        "align-middle"
      )
    })
    h += R(td("합 &nbsp; 계", 'colspan="5"', "text-center font-bold") + td(cases + " C/S", "", "text-center font-bold") + td(f3(cbm) + " CBM", 'colspan="2"', "text-center font-bold") + td("", 'colspan="2"'))
    h += R(td("", 'colspan="10"'))
    function boxes(t1, l1, t2, l2) {
      var out = R(td("", "") + td("&lt; " + t1 + " &gt;", 'colspan="4"', "sb text-center font-bold") + td("", "") + td("&lt; " + t2 + " &gt;", 'colspan="3"', "sb text-center font-bold") + td("", ""))
      for (var i = 0; i < 5; i++) {
        var a = l1[i] || ["", ""]
        out += R(td("", "") + td(e(a[0]), "", "sb") + td(e(a[1]), 'colspan="3"', "sb") + td("", "") + td(e(l2[i] || ""), 'colspan="3"', "sb") + td("", ""))
      }
      return out
    }
    var vac = o.items.filter(function (i) { return /진공/.test(i.spec) }).length || /진공/.test(o.spec)
    var proc = []
    if (vac) proc.push(["진공백", "전체"])
    if (/VCI/.test(o.spec)) proc.push(["VCI 필름", "전체"])
    if (/방청/.test(o.spec)) proc.push(["방청유", "2통"])
    var prep = (o.prep && o.prep !== "-" ? o.prep.split(/,\s*/) : [])
    h += boxes("가공발주", proc, "준비물", prep)
    h += R(td("", 'colspan="10"'))
    h += boxes("목재발주", [["스키드 90×90", tot.skid + "EA"], ["받침목 75×75", tot.base + "EA"], ["보강재 60×60", tot.rib + "EA"], ["합판 12T", Math.ceil(cases * 2.5) + "장"]], "포장 순서", steps(o))
    h += R(td("", 'colspan="10"'))
    h += R(td("메모란", 'colspan="10"', "sb font-bold"))
    h += R(td('<span class="text-base text-red-600">' + e(o.memo || "") + "</span>", 'colspan="10"', "sb"))
    h += R(td('<span class="text-base text-red-600">' + (o.memo ? "* 봉함 전 습기 차단 상태 확인" : "") + "</span>", 'colspan="10"', "sb"))
    var right =
      '<div class="flex flex-wrap items-center gap-2"><button type="button" class="' + BTN + '" data-act="print">' + ic("printer") + "인쇄</button>" +
      '<button type="button" class="' + BTN_P + '" data-act="dl-sheet" data-id="' + e(o.id) + '">' + ic("download") + "엑셀 다운로드</button></div>"
    var cols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    return (
      head("제함지시서", e(c.name) + " · " + e(o.project) + " — 오더에서 자동으로 만든 엑셀 양식입니다.", right, "#/orders/" + o.id) +
      '<div class="p-4"><div class="flex items-center gap-2 mb-2 text-xs text-slate-500">' + ic("file-spreadsheet", "w-4 h-4 text-green-600") + "제함지시서_" + e(c.name) + "_" + e(o.project) + ".xlsx</div>" +
      '<div class="overflow-x-auto border border-slate-300 bg-white shadow-sm"><table class="demo-sheet min-w-[860px] w-full"><colgroup><col style="width:32px"><col style="width:44px"><col style="width:170px"><col style="width:62px"><col style="width:62px"><col style="width:62px"><col style="width:56px"><col style="width:170px"><col style="width:150px"><col style="width:64px"><col style="width:70px"></colgroup>' +
      '<thead><tr><th></th>' + cols.map(function (x) { return "<th>" + x + "</th>" }).join("") + "</tr></thead><tbody>" + h + "</tbody></table></div></div>"
    )
  }
  function sheetRows(o) {
    var c = client(o.clientId), s = site(o)
    var rows = [["표준제함지시서", "", "", "", "", "", "", "", "", BRAND], ["업체명", c.name, "", "", "", "작업일", o.date + (multi(o) ? " ~ " + o.endDate : "")], ["사업장", s ? s.name : "", "", "", "", "프로젝트", o.project], ["작성자", o.author, "", "", "", "담당자", o.manager || ""], [], ["NO", "품명", "L", "W", "H", "CASE", "기초재", "보강재", "사양", "CBM"]]
    o.items.forEach(function (it, i) { var m = mats(it); rows.push([i + 1, it.name, it.L, it.W, it.H, it.qty, m.g.join(" / "), m.h.join(" / "), it.spec, f3(itemCbm(it))]) })
    rows.push(["합계", "", "", "", "", orderQty(o) + " C/S", f3(orderCbm(o)) + " CBM"], [], ["준비물", o.prep || ""], ["포장 순서", steps(o).join(" / ")], ["메모", o.memo || ""])
    return rows
  }
  function download(name, rows) {
    var csv = "﻿" + rows.map(function (r) { return r.map(function (c) { c = String(c == null ? "" : c); return /[",\n]/.test(c) ? '"' + c.replace(/"/g, '""') + '"' : c }).join(",") }).join("\r\n")
    var a = document.createElement("a")
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }))
    a.download = name
    document.body.appendChild(a)
    a.click()
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove() }, 500)
  }

  // ───────────────────────── 오더 작성 / 수정 ─────────────────────────
  function newDraft(date) {
    return { editingId: null, clientId: "", siteId: "", project: "", date: date || TODAY, start: "09:00", endDate: "", end: "", showEnd: false, allDay: false, addr: "", author: "관리자", manager: "", need: 0, boxType: "", spec: "", items: [], files: [], prep: "" }
  }
  function draftFrom(o) {
    var s = site(o)
    return { editingId: o.id, clientId: o.clientId, siteId: o.siteId, project: o.project, date: o.date, start: o.start || "09:00", endDate: o.endDate, end: o.end, showEnd: !!(o.endDate || o.end), allDay: o.allDay, addr: s ? s.addr : "", author: o.author, manager: o.manager, need: o.need, boxType: o.boxType, spec: o.spec === "-" ? "" : o.spec, items: o.items.map(function (i) { return Object.assign({}, i) }), files: o.files.slice(), prep: o.prep === "-" ? "" : o.prep }
  }
  function viewForm(editId) {
    var d = S.draft, c = client(d.clientId)
    var title = editId ? '작업 지시서 수정 <span class="text-sm font-normal text-slate-500">— ' + e(c ? c.name : "") + "</span>" : "표준제함지시서"
    var back = editId ? "#/orders/" + editId : "#/orders"
    var form = c ? formCard(d, c, editId) : clientPicker()
    if (editId) return head(title, "", "", back) + '<div class="p-4"><div class="max-w-2xl mx-auto">' + form + "</div></div>"
    return head(title, c ? "업체를 고른 뒤 지시서 엑셀을 올리면 품목과 CBM 이 채워집니다." : "먼저 업체를 고르세요.", "", back) +
      '<div class="p-4"><div class="demo-split max-w-[1100px] mx-auto">' + leftCard(d, c) + form + "</div></div>"
  }
  function leftCard(d, c) {
    if (!c) {
      return '<div class="' + CARD + ' p-4"><p class="text-sm font-semibold text-slate-900 flex items-center gap-2">' + ic("building-2", "w-4 h-4 text-blue-600") + '업체 선택</p><p class="text-xs text-slate-500 mt-1">오른쪽에서 업체를 누르세요. 새 업체는 도급업체 관리에서 추가합니다.</p><a href="#/contractors" class="inline-block mt-3 text-xs text-blue-600 hover:underline">도급업체 관리 →</a></div>'
    }
    return (
      '<div class="' + CARD + ' p-4"><p class="text-sm font-semibold text-slate-900 flex items-center gap-2">' + ic("building-2", "w-4 h-4 text-blue-600") + e(c.name) + "</p>" +
      '<button type="button" data-act="clear-client" class="mt-1 text-xs text-slate-500 hover:text-slate-700 cursor-pointer flex items-center gap-1">' + ic("arrow-left", "w-3 h-3") + "업체 변경</button>" +
      '<div class="border-t border-slate-200 mt-3 mb-3"></div>' +
      '<p class="text-xs font-semibold text-slate-700 flex items-center gap-1.5 mb-2">' + ic("history", "w-3.5 h-3.5") + "과거 작업 이력</p>" +
      '<div class="relative"><span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400">' + ic("search", "w-3.5 h-3.5") + '</span><input data-input="hist-q" value="' + e(S.ui.histQ) + '" placeholder="프로젝트명 또는 품목명" class="' + SINP + ' w-full pl-8"></div>' +
      '<div id="hist-list" class="mt-2 space-y-1 max-h-[400px] overflow-y-auto">' + histList(c) + "</div></div>"
    )
  }
  function histList(c) {
    var q = S.ui.histQ.toLowerCase()
    var list = S.orders.filter(function (o) { return o.clientId === c.id && o.date <= TODAY && (!q || (o.project + o.items.map(function (i) { return i.name }).join(" ")).toLowerCase().indexOf(q) >= 0) })
      .sort(function (a, b) { return a.date < b.date ? 1 : -1 }).slice(0, 8)
    if (!list.length) return '<p class="py-6 text-center text-xs text-slate-400">작업 이력이 없습니다</p>'
    return list.map(function (o) {
      return '<button type="button" data-act="load-hist" data-id="' + e(o.id) + '" class="w-full text-left px-2.5 py-2 rounded-lg hover:bg-blue-50 cursor-pointer"><p class="text-xs font-medium text-slate-800 truncate">' + e(o.project) + '</p><p class="text-[11px] text-slate-500">' + e(o.date) + " · 품목 " + o.items.length + "종 · " + f3(orderCbm(o)) + " m³</p></button>"
    }).join("")
  }
  function clientPicker() {
    return (
      '<div class="' + CARD + '"><div class="px-5 py-4 border-b border-slate-100"><h2 class="font-semibold text-slate-900">업체 선택</h2></div>' +
      '<div class="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">' +
      S.clients.map(function (c) {
        var n = S.orders.filter(function (o) { return o.clientId === c.id && o.date.slice(0, 7) === TODAY.slice(0, 7) }).length
        return '<button type="button" data-act="pick-client" data-id="' + c.id + '" class="text-left border border-slate-200 rounded-lg p-3 hover:border-blue-300 hover:bg-blue-50/50 transition-colors cursor-pointer"><p class="text-sm font-semibold text-slate-900">' + e(c.name) + '</p><p class="text-xs text-slate-500 mt-0.5">사업장 ' + c.sites.length + "곳 · 이번 달 오더 " + n + "건</p></button>"
      }).join("") + "</div></div>"
    )
  }
  function formCard(d, c, editId) {
    var f = function (label, inner, req) { return '<div><label class="' + LBL + '">' + label + (req ? ' <span class="text-red-500">*</span>' : "") + "</label>" + inner + "</div>" }
    var inp = function (name, val, ph, type) { return '<input ' + (type ? 'type="' + type + '" ' : "") + 'name="' + name + '" data-input="draft" value="' + e(val) + '" placeholder="' + e(ph || "") + '" class="' + INP + '">' }
    var tot = d.items.reduce(function (s, it) { return s + itemCbm(it) }, 0)
    var qty = d.items.reduce(function (s, it) { return s + (Number(it.qty) || 0) }, 0)
    var h = '<div class="' + CARD + ' shadow-sm"><div class="px-5 py-4 border-b border-slate-100"><h2 class="font-semibold text-slate-900">표준제함지시서 작성</h2></div><div class="p-5 space-y-4">'
    h += f("업체명", '<input value="' + e(c.name) + '" readonly class="' + INP + ' bg-slate-100 text-slate-700">')
    h += '<div><label class="' + LBL + ' flex items-center gap-1">' + ic("map-pin", "w-3.5 h-3.5") + '사업장 <span class="text-red-500">*</span></label><select data-change="draft-site" class="' + INP + '"><option value="">사업장을 선택하세요</option>' +
      c.sites.map(function (s) { return '<option value="' + s.id + '"' + (d.siteId === s.id ? " selected" : "") + ">" + e(s.name + " — " + s.addr.split(" ").slice(-2).join(" ")) + "</option>" }).join("") + "</select></div>"
    h += f("프로젝트 (PJT)", inp("project", d.project, "예: 감속기 2차 선적분"), true)
    h += '<div><div class="flex items-center justify-between mb-1.5"><span class="text-xs font-medium text-slate-700">일정 및 시간</span><label class="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer"><input type="checkbox" class="accent-blue-600" data-change="draft-allday"' + (d.allDay ? " checked" : "") + ">하루종일</label></div>" +
      '<p class="text-[11px] text-slate-500 mb-1">시작</p><div class="flex gap-2"><input type="date" name="date" data-change="draft-field" value="' + e(d.date) + '" class="' + INP + '">' + (d.allDay ? "" : '<input type="time" name="start" data-change="draft-field" value="' + e(d.start) + '" class="' + INP + ' w-36">') + "</div>" +
      (d.showEnd
        ? '<p class="text-[11px] text-slate-500 mb-1 mt-2">종료</p><div class="flex gap-2 items-center"><input type="date" name="endDate" data-change="draft-field" value="' + e(d.endDate || d.date) + '" class="' + INP + '">' + (d.allDay ? "" : '<input type="time" name="end" data-change="draft-field" value="' + e(d.end || "17:00") + '" class="' + INP + ' w-36">') + '<button type="button" data-act="draft-noend" class="p-2 text-slate-400 hover:text-red-500 cursor-pointer" aria-label="종료 시간 삭제">' + ic("x") + "</button></div>"
        : '<button type="button" data-act="draft-end" class="mt-2 text-xs text-blue-600 hover:underline cursor-pointer">+ 종료 시간 추가</button>') + "</div>"
    h += f("주소", inp("addr", d.addr, "사업장을 고르면 자동으로 채워집니다"))
    h += '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">' + f("작성자", inp("author", d.author)) + f("담당자", inp("manager", d.manager, c.contact)) + f("필요 인원 (명)", inp("need", d.need, "0", "number")) + f("박스형식", inp("boxType", d.boxType, "예: 목상자 (밀폐형), 스키드형")) + "</div>"
    h += f("사양", inp("spec", d.spec, "엑셀 업로드 시 자동 입력"))
    // 물품 상세
    h += '<div><div class="flex flex-wrap items-center justify-between gap-2 mb-2"><span class="text-sm font-semibold text-slate-800 flex items-center gap-1.5">' + ic("box", "w-4 h-4") + '물품 상세</span><div class="flex items-center gap-2 relative">' +
      '<button type="button" data-act="tpl-menu" class="' + BTN + '">' + ic("download", "w-3.5 h-3.5") + "템플릿" + ic("chevron-down", "w-3 h-3") + "</button>" +
      (S.ui.tplMenu ? '<div class="absolute right-0 top-full mt-1 z-20 w-56 bg-white border border-slate-200 rounded-lg shadow-lg p-1"><button type="button" data-act="tpl-dl" data-k="full" class="w-full text-left px-3 py-2 text-xs rounded-md hover:bg-slate-50 cursor-pointer">표준제함지시서 양식 (.csv)</button><button type="button" data-act="tpl-dl" data-k="items" class="w-full text-left px-3 py-2 text-xs rounded-md hover:bg-slate-50 cursor-pointer">물품 목록만 (.csv)</button></div>' : "") +
      '<button type="button" data-act="upload-open" class="' + BTN + '">' + ic("file-text", "w-3.5 h-3.5") + "엑셀 업로드</button>" +
      (d.items.length ? '<button type="button" data-act="items-clear" class="text-xs text-red-500 hover:text-red-600 cursor-pointer flex items-center gap-1">' + ic("x", "w-3 h-3") + "초기화</button>" : "") + "</div></div>"
    if (d.items.length) {
      var ci = "px-1.5 py-1 border border-slate-200 rounded text-xs bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 tabular-nums"
      h += '<div class="border border-slate-200 rounded-lg overflow-x-auto"><table class="w-full min-w-[700px] text-xs"><thead class="bg-slate-50 border-b border-slate-200"><tr><th class="' + TH + ' w-8">#</th><th class="' + TH + '">품명</th><th class="' + TH + ' text-right">수량</th><th class="' + TH + ' text-center">규격 L × W × H</th><th class="' + TH + ' text-right">CBM</th><th class="' + TH + '">사양</th><th class="w-8"></th></tr></thead><tbody>' +
        d.items.map(function (it, i) {
          var n = function (k, w) { return '<input inputmode="numeric" data-input="item" data-i="' + i + '" data-k="' + k + '" value="' + e(it[k]) + '" class="' + ci + " " + w + ' text-right" aria-label="' + k + '">' }
          return '<tr class="border-b border-slate-100 last:border-0"><td class="px-3 py-1 text-slate-400">' + (i + 1) + '</td><td class="px-2 py-1.5"><input data-input="item" data-i="' + i + '" data-k="name" value="' + e(it.name) + '" placeholder="품명" class="' + ci + ' w-full min-w-[130px]"></td>' +
            '<td class="px-2 py-1.5 text-right">' + n("qty", "w-12") + '</td><td class="px-2 py-1.5 text-center whitespace-nowrap">' + n("L", "w-16") + ' <span class="text-slate-400">×</span> ' + n("W", "w-16") + ' <span class="text-slate-400">×</span> ' + n("H", "w-16") + "</td>" +
            '<td class="px-3 py-1 text-right font-mono font-semibold text-blue-600" id="cbm-' + i + '">' + (itemCbm(it) ? f3(itemCbm(it)) : "-") + "</td>" +
            '<td class="px-2 py-1.5"><select data-change="item-spec" data-i="' + i + '" class="' + ci + '">' + ITEM_SPECS.map(function (s) { return "<option" + (it.spec === s ? " selected" : "") + ">" + s + "</option>" }).join("") + "</select></td>" +
            '<td class="px-1"><button type="button" data-act="item-del" data-i="' + i + '" class="p-1 text-slate-400 hover:text-red-500 cursor-pointer" aria-label="삭제">' + ic("x", "w-3.5 h-3.5") + "</button></td></tr>"
        }).join("") + "</tbody></table></div>"
    } else {
      h += '<div class="border-2 border-dashed border-slate-200 rounded-lg py-8 text-center text-xs text-slate-400">엑셀을 올리거나 아래에서 품목을 직접 추가하세요</div>'
    }
    h += '<button type="button" data-act="item-add" class="mt-2 w-full py-2 border border-dashed border-slate-300 rounded-lg text-xs text-slate-500 hover:bg-slate-50 hover:text-slate-700 cursor-pointer">+ 품목 추가</button>'
    h += '<div class="mt-3 bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 flex items-end justify-between"><div><p class="text-[11px] text-blue-600">총 CBM (자동 계산)</p><p class="text-2xl font-bold text-slate-900 tabular-nums"><span id="tot-cbm">' + f3(tot) + '</span> m³</p></div><div class="text-right"><p class="text-[11px] text-slate-500">총 수량</p><p class="text-2xl font-bold text-slate-900"><span id="tot-qty">' + qty + "</span>개</p></div></div></div>"
    // 파일 첨부
    h += '<div><div class="flex items-center justify-between mb-2"><span class="text-sm font-semibold text-slate-800 flex items-center gap-1.5">' + ic("paperclip", "w-4 h-4") + '파일 첨부</span><span class="text-xs text-slate-400">' + d.files.length + "/10</span></div>" +
      d.files.map(function (fn, i) { return '<div class="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 border border-green-200 text-xs text-slate-700 mb-2">' + ic("file-text", "w-3.5 h-3.5 text-green-600") + '<span class="truncate">' + e(fn) + '</span><button type="button" data-act="file-del" data-i="' + i + '" class="ml-auto text-green-600 hover:text-red-500 cursor-pointer" aria-label="첨부 삭제">' + ic("x", "w-3.5 h-3.5") + "</button></div>" }).join("") +
      '<label class="flex items-center justify-center gap-1.5 w-full py-3 border border-dashed border-slate-300 rounded-lg text-xs text-slate-600 hover:bg-slate-50 cursor-pointer">' + ic("upload", "w-3.5 h-3.5") + '파일 추가<input type="file" multiple class="hidden" data-change="file-add"></label></div>'
    h += '<div><label class="' + LBL + '">준비물</label><textarea name="prep" data-input="draft" rows="3" placeholder="필요 자재, 도구, 준비사항 등을 입력하세요" class="' + INP + ' resize-none">' + e(d.prep) + "</textarea></div>"
    h += '<button type="button" data-act="order-save" class="w-full py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer">' + (editId ? "수정 저장" : "작업 지시서 생성") + "</button>"
    return h + "</div></div>"
  }
  function patchTotals() {
    var d = S.draft
    d.items.forEach(function (it, i) { var el = document.getElementById("cbm-" + i); if (el) el.textContent = itemCbm(it) ? f3(itemCbm(it)) : "-" })
    var t = document.getElementById("tot-cbm"); if (t) t.textContent = f3(d.items.reduce(function (s, it) { return s + itemCbm(it) }, 0))
    var q = document.getElementById("tot-qty"); if (q) q.textContent = d.items.reduce(function (s, it) { return s + (Number(it.qty) || 0) }, 0)
  }

  // 엑셀 검사 (업로드 → 파싱 결과)
  var SAMPLES = {
    a: { file: "제함지시서_샘플A_감속기.xlsx", desc: "품목 4건 · 빈 칸과 소수점이 섞인 파일", spec: "건조제 + 진공 + 목상자", rows: [
      { row: 8, name: "감속기 본체 RG-300", qty: "2", L: "1800", W: "1200", H: "1300", spec: "진공 BOX" },
      { row: 9, name: "모터 유닛", qty: "1.5", L: "900", W: "700", H: "800", spec: "BOX" },
      { row: 10, name: "예비 부품 박스", qty: "1", L: "", W: "600", H: "", spec: "BOX" },
      { row: 11, name: "제어반", qty: "1", L: "1100", W: "800", H: "1900", spec: "" },
    ] },
    b: { file: "제함지시서_샘플B_검사장비.xlsx", desc: "품목 3건 · 모두 정상", spec: "VCI 필름 + 크레이트", rows: [
      { row: 8, name: "검사장비 본체", qty: "1", L: "2400", W: "1600", H: "1750", spec: "CRATE" },
      { row: 9, name: "케이블 릴", qty: "3", L: "800", W: "800", H: "650", spec: "BOX" },
      { row: 10, name: "공구 세트", qty: "2", L: "700", W: "500", H: "400", spec: "BOX" },
    ] },
  }
  function checkRows(file, rows, spec) {
    var res = { type: "parse", file: file, spec: spec || "", ok: [], errs: [], warns: [] }
    rows.forEach(function (r) {
      var msgs = [], bad = {}
      if (!String(r.name || "").trim()) { msgs.push(r.row + "행: 품명이 비어 있습니다."); bad.name = 1 }
      ;[["L", "길이(L)"], ["W", "너비(W)"], ["H", "높이(H)"]].forEach(function (p) {
        var v = String(r[p[0]] == null ? "" : r[p[0]]).trim(), n = Number(v)
        if (!v || !isFinite(n) || n <= 0) { msgs.push(r.row + "행: " + p[1] + " 값이 비어있거나 숫자가 아닙니다."); bad[p[0]] = 1 }
      })
      var qv = String(r.qty == null ? "" : r.qty).trim(), q = Number(qv)
      if (!qv || !isFinite(q) || q <= 0) { msgs.push(r.row + "행: 수량(CASE) 값이 비어있거나 숫자가 아닙니다."); bad.qty = 1 }
      if (msgs.length) { res.errs.push({ r: r, msgs: msgs, bad: bad }); return }
      var it = { name: String(r.name).trim(), qty: q, L: Number(r.L), W: Number(r.W), H: Number(r.H), spec: ITEM_SPECS.indexOf(r.spec) >= 0 ? r.spec : "BOX" }
      if (q % 1 !== 0) { var rq = Math.max(1, Math.round(q)); res.warns.push({ row: r.row, msg: r.row + "행: 수량(CASE)에 소수점이 있어 반올림했습니다. (" + q + " → " + rq + ")" }); it.qty = rq }
      if (!r.spec) res.warns.push({ row: r.row, msg: r.row + "행: 사양이 비어 있어 BOX 로 넣었습니다." })
      if (Math.max(it.L, it.W, it.H) > 6000) res.warns.push({ row: r.row, msg: r.row + "행: 한 변이 6m 를 넘습니다. 운송 가능 여부를 확인하세요." })
      res.ok.push({ row: r.row, item: it })
    })
    return res
  }
  function parseCsv(text) {
    var lines = text.replace(/^﻿/, "").split(/\r?\n/).filter(function (l) { return l.trim() })
    var rows = []
    lines.forEach(function (l, i) {
      var c = l.split(",").map(function (x) { return x.trim().replace(/^"|"$/g, "") })
      if (i === 0 && (c[0] === "품명" || /품명/.test(c[0]))) return
      if (/^예\)/.test(c[0])) return
      rows.push({ row: i + 1, name: c[0], qty: c[1], L: c[2], W: c[3], H: c[4], spec: c[5] || "" })
    })
    return rows
  }

  // ───────────────────────── 일정 관리 (달력) ─────────────────────────
  function viewCal() {
    var u = S.ui, m = u.calMonth
    var first = m + "-01", startDay = addDays(first, -dow(first))
    var y = +m.slice(0, 4), mo = +m.slice(5, 7)
    var monthOrders = S.orders.filter(function (o) { return o.date.slice(0, 7) === m && (!u.calClient || o.clientId === u.calClient) }).length
    var monthEvents = S.events.filter(function (v) { return v.date.slice(0, 7) === m }).length
    var right =
      '<div class="flex items-center gap-3"><button type="button" class="' + IBTN + '" data-act="cal-prev" aria-label="이전 달">' + ic("chevron-left") + "</button>" +
      '<p class="text-sm"><b class="text-base text-slate-900">' + y + "년 " + mo + '월</b> <span class="text-slate-400">· 오더 ' + monthOrders + '건,</span> <span class="text-blue-600">일정 ' + monthEvents + "건</span></p>" +
      '<button type="button" class="' + IBTN + '" data-act="cal-next" aria-label="다음 달">' + ic("chevron-right") + "</button>" +
      '<button type="button" class="' + BTN + '" data-act="cal-today">오늘</button></div>'
    var filter = '<div class="relative mt-2 inline-block"><span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400">' + ic("building-2", "w-3.5 h-3.5") + '</span><select data-change="cal-client" class="' + SINP + ' pl-8 w-48"><option value="">전체 업체</option>' + S.clients.map(function (c) { return '<option value="' + c.id + '"' + (u.calClient === c.id ? " selected" : "") + ">" + e(c.name) + "</option>" }).join("") + "</select></div>"
    var cells = "", day = startDay
    do {
      for (var i = 0; i < 7; i++) {
        var inM = day.slice(0, 7) === m, w = dow(day)
        var list = ordersOn(day, u.calClient), ev = eventsOn(day)
        var groups = {}
        list.forEach(function (o) { groups[o.clientId] = (groups[o.clientId] || 0) + 1 })
        var keys = Object.keys(groups).sort(function (a, b) { return groups[b] - groups[a] })
        var isT = day === TODAY
        cells +=
          '<div class="min-h-[140px] border-r border-b border-slate-200 p-2 flex flex-col cursor-pointer transition-colors ' + (i === 6 ? "demo-br0 " : "") + (isT ? "bg-blue-50/40 " : inM ? "bg-white hover:bg-slate-50 " : "bg-slate-50/60 hover:bg-slate-50 ") + '" data-act="cal-day" data-date="' + day + '" data-drop="cal" data-dropdate="' + day + '">' +
          '<div class="mb-1">' + (isT ? '<span class="inline-flex w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-semibold items-center justify-center">' + toD(day).getDate() + "</span>" : '<span class="text-sm ' + (!inM ? "text-slate-400" : w === 0 ? "text-red-500" : "text-slate-800") + '">' + toD(day).getDate() + "</span>") + "</div>" +
          '<div class="flex-1 space-y-0.5">' +
          keys.slice(0, 3).map(function (k) {
            return '<div draggable="true" data-drag="cal" data-date="' + day + '" data-client="' + k + '" class="text-xs truncate rounded px-1 -mx-1 hover:bg-blue-100 cursor-grab ' + (inM ? "text-slate-700" : "text-slate-400") + '" title="끌어서 다른 날짜로 옮기기">' + e(client(k).name) + " " + groups[k] + "건</div>"
          }).join("") +
          (keys.length > 3 ? '<div class="text-[11px] text-slate-400">+ ' + (keys.length - 3) + "곳 더</div>" : "") + "</div>" +
          (list.length || ev.length ? '<div class="text-xs mt-2 ' + (inM ? "text-slate-500" : "text-slate-400") + '">' + (list.length ? "오더 " + list.length + "건" : "") + (ev.length ? (list.length ? " · " : "") + '<span class="text-blue-600">일정 ' + ev.length + "건</span>" : "") + "</div>" : "") +
          "</div>"
        day = addDays(day, 1)
      }
    } while (day.slice(0, 7) === m)
    return (
      head("일정 관리", "", right).replace('<p class="text-xs text-slate-500 mt-0.5"></p>', "").replace("</h1>", "</h1>" + filter) +
      '<div class="p-4"><p class="text-xs text-slate-500 mb-2">날짜를 누르면 그날 오더를 옮기거나 추가할 수 있고, 업체 줄을 끌어 다른 날짜에 놓으면 한꺼번에 옮겨집니다.</p>' +
      '<div class="overflow-x-auto"><div class="' + CARD + ' overflow-hidden min-w-[700px]">' +
      '<div class="grid grid-cols-7 bg-slate-50 border-b border-slate-200">' + WD.map(function (w, i) { return '<div class="py-2 text-center text-xs font-medium ' + (i === 0 ? "text-red-500" : "text-slate-600") + '">' + w + "</div>" }).join("") + "</div>" +
      '<div class="grid grid-cols-7">' + cells + "</div></div></div></div>"
    )
  }
  function moveOrder(o, nd) {
    var dlt = diffDays(o.date, nd)
    o.date = nd
    if (o.endDate) o.endDate = addDays(o.endDate, dlt)
  }

  // ───────────────────────── 인력 배정 ─────────────────────────
  function assignMap(d) {
    var m = {}
    ordersOn(d).forEach(function (o) { o.workers.forEach(function (id) { (m[id] = m[id] || []).push(o) }) })
    return m
  }
  function poolList() {
    var u = S.ui, d = u.assignDate, am = assignMap(d), q = u.poolQ.trim()
    var list = S.workers.filter(function (w) {
      return w.active && (u.poolTab === "all" || (u.poolTab === "own" ? w.type === "자사" : w.type === "외부")) && (!u.onlyFree || !am[w.id]) && (!q || (w.name + w.tags.join("")).indexOf(q) >= 0)
    })
    if (u.sortSkill) list = list.slice().sort(function (a, b) { return b.skill - a.skill })
    var h = '<p class="text-xs text-slate-500 mb-2">작업자 (' + list.length + ")</p>"
    if (!list.length) return h + '<p class="py-6 text-center text-xs text-slate-400">조건에 맞는 작업자가 없습니다</p>'
    return h + '<div class="space-y-2">' + list.map(function (w) {
      var as = am[w.id], picked = u.pick === w.id
      return (
        '<div ' + (u.edit ? 'draggable="true" data-drag="worker" data-id="' + w.id + '" data-act="pick-worker" ' : "") + 'class="border rounded-lg p-2.5 bg-white flex gap-2.5 transition-shadow ' + (picked ? "border-blue-500 ring-2 ring-blue-200 " : "border-slate-200 ") + (u.edit ? "cursor-grab hover:shadow-md" : "") + '">' +
        '<span class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold flex items-center justify-center shrink-0">' + e(w.name[0]) + "</span>" +
        '<div class="flex-1 min-w-0"><div class="flex items-center gap-1.5"><span class="text-sm font-semibold text-slate-900">' + e(w.name) + '</span><span class="inline-flex items-center text-[11px] font-semibold text-green-600">' + ic("zap", "w-3 h-3 fill-current") + w.skill + "</span>" +
        '<span class="ml-auto">' + (as ? badge("배정됨", "blue") : badge("미배정")) + "</span></div>" +
        '<div class="flex flex-wrap gap-1 mt-1">' + [w.type].concat(w.tags).map(function (t) { return '<span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">' + e(t) + "</span>" }).join("") + "</div>" +
        (as ? '<p class="text-[11px] text-violet-600 text-right mt-1 truncate">' + e(client(as[0].clientId).name) + (as.length > 1 ? " 외 " + (as.length - 1) : "") + "</p>" : "") +
        "</div></div>"
      )
    }).join("") + "</div>"
  }
  function cardGrid() {
    var u = S.ui, d = u.assignDate, q = u.cardQ.trim().toLowerCase()
    var list = ordersOn(d).filter(function (o) { return !q || (o.id + client(o.clientId).name + o.project).toLowerCase().indexOf(q) >= 0 })
    if (!list.length) return empty("이 날짜의 작업 지시서가 없습니다")
    return '<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">' + list.map(function (o) {
      var c = client(o.clientId), s = site(o), vh = vehicle(o.vehicle)
      var n = o.workers.length, pct = o.need ? Math.min(100, Math.round((n / o.need) * 100)) : 0, full = n >= o.need && o.need > 0
      var span = multi(o) ? md(o.date) + " " + (o.allDay ? "" : o.start) + "~" + md(o.endDate) + " " + (o.end || "17:00") : md(o.date) + " " + (o.allDay ? "하루종일" : o.start + (o.end ? "~" + o.end : ""))
      return (
        '<div class="' + CARD + ' shadow-sm flex flex-col" data-drop="card" data-id="' + e(o.id) + '">' +
        '<div class="p-4 pb-3"><div class="flex items-start justify-between gap-2"><div class="min-w-0"><p class="font-bold text-slate-900 truncate">' + e(c.name) + '</p><p class="text-xs text-slate-600">' + e(s ? s.name : "") + "</p></div>" + (multi(o) ? '<span class="shrink-0 text-[11px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200">연속 작업</span>' : "") + "</div>" +
        '<div class="mt-1.5 space-y-1 text-xs text-slate-600"><p class="flex items-center gap-1.5 truncate">' + ic("map-pin", "w-3.5 h-3.5 shrink-0 text-slate-400") + e(s ? s.addr : "") + '</p><p class="flex items-center gap-1.5">' + ic("calendar", "w-3.5 h-3.5 text-slate-400") + e(span) + "</p>" +
        '<p class="flex items-center gap-1.5 font-semibold text-blue-600">' + ic("box", "w-3.5 h-3.5") + f3(orderCbm(o)) + " m³</p></div>" +
        '<div class="flex items-center justify-end gap-4 mt-2 text-xs"><button type="button" data-act="pool-ext" class="flex items-center gap-1 cursor-pointer ' + (u.poolTab === "ext" ? "text-blue-600" : "text-slate-500 hover:text-slate-700") + '">' + ic("filter", "w-3 h-3") + "도급자</button>" +
        '<button type="button" data-act="pool-skill" class="flex items-center gap-1 cursor-pointer ' + (u.sortSkill ? "text-blue-600" : "text-slate-500 hover:text-slate-700") + '">' + ic("arrow-up-down", "w-3 h-3") + "능력치순</button>" +
        '<a href="#/orders/' + e(o.id) + '" class="flex items-center gap-1 text-blue-600 hover:text-blue-700">' + ic("external-link", "w-3 h-3") + "자세히 보기</a></div></div>" +
        '<div class="px-4 py-3 border-t border-slate-100"><p class="text-xs font-semibold text-slate-700 flex items-center gap-1.5">' + ic("truck", "w-3.5 h-3.5 text-slate-500") + '배정 차량</p><p class="text-xs mt-0.5 pl-5 ' + (vh ? "text-slate-800" : "text-slate-500") + '">' + e(vh ? vh.name + " · " + vh.kind : "배정된 차량 없음") + "</p></div>" +
        '<div class="px-4 py-2 border-t border-slate-100 bg-slate-50"><div class="flex items-center gap-3"><span class="text-xs font-semibold text-slate-700">투입 인원</span>' +
        '<button type="button" data-act="crew-copy" data-id="' + e(o.id) + '" class="flex items-center gap-1 text-[11px] cursor-pointer ' + (u.edit && n ? "text-slate-500 hover:text-slate-700" : "text-slate-300") + '">' + ic("copy", "w-3 h-3") + "복사</button>" +
        '<button type="button" data-act="crew-paste" data-id="' + e(o.id) + '" class="flex items-center gap-1 text-[11px] cursor-pointer ' + (u.edit && u.clip ? "text-slate-500 hover:text-slate-700" : "text-slate-300") + '">' + ic("clipboard-paste", "w-3 h-3") + "붙여넣기</button>" +
        '<span class="ml-auto text-xs font-semibold tabular-nums ' + (full ? "text-green-600" : "text-orange-600") + '">' + n + " / " + o.need + "명</span></div>" +
        '<div class="mt-1.5 h-1.5 rounded-full ' + (full ? "bg-green-100" : "bg-amber-100") + ' overflow-hidden"><div class="h-full rounded-full ' + (full ? "bg-green-500" : "bg-orange-500") + '" style="width:' + pct + '%"></div></div></div>' +
        '<div class="p-4 pt-3 flex-1">' +
        (n ? '<div class="flex flex-wrap gap-1.5 mb-2">' + o.workers.map(function (id) {
          var w = worker(id)
          return w ? '<span class="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-violet-50 border border-violet-200 text-xs text-violet-700">' + e(w.name) + '<span class="text-[10px] text-violet-400">' + w.skill + "</span>" + (u.edit ? '<button type="button" data-act="unassign" data-oid="' + e(o.id) + '" data-wid="' + w.id + '" class="p-0.5 rounded hover:bg-violet-100 cursor-pointer" aria-label="배정 해제">' + ic("x", "w-3 h-3") + "</button>" : "") + "</span>" : ""
        }).join("") + "</div>" : "") +
        '<div data-act="drop-card" data-id="' + e(o.id) + '" class="border-2 border-dashed rounded-lg py-5 px-3 text-center text-xs transition-colors ' + (u.edit ? (u.pick ? "border-blue-300 text-blue-600 bg-blue-50/40 cursor-pointer" : "border-blue-200 text-slate-500") : "border-slate-200 text-slate-400") + '">' +
        ic("users", "w-7 h-7 mx-auto mb-1 text-slate-300") + (u.edit ? (u.pick ? "여기를 누르면 " + e(worker(u.pick).name) + " 님이 배정됩니다" : "작업자를 끌어다 놓거나, 누른 뒤 여기를 누르세요") : "'수정'을 눌러 인력을 배정하세요") + "</div></div></div>"
      )
    }).join("") + "</div>"
  }
  function viewAssign() {
    var u = S.ui, d = u.assignDate
    var tabs = [["all", "전체"], ["own", "자사"], ["ext", "외부"]]
    var pool =
      '<div class="demo-pool bg-white border-r border-slate-200 flex flex-col min-h-0">' +
      '<div class="p-4 pb-3 border-b border-slate-100"><h2 class="font-bold text-slate-900 mb-3">작업자 풀</h2>' +
      '<div class="relative"><span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400">' + ic("search", "w-3.5 h-3.5") + '</span><input data-input="pool-q" value="' + e(u.poolQ) + '" placeholder="작업자 검색..." class="' + SINP + ' w-full pl-8 py-2"></div>' +
      '<div class="flex gap-1.5 mt-3">' + tabs.map(function (t) { return '<button type="button" data-act="pool-tab" data-t="' + t[0] + '" class="px-3 py-1 rounded-full text-xs font-medium cursor-pointer ' + (u.poolTab === t[0] ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200") + '">' + t[1] + "</button>" }).join("") + "</div>" +
      '<p class="text-[11px] text-slate-400 mt-2">' + (u.sortSkill ? "능력치 높은 순" : "등록 순") + "으로 표시 중</p>" +
      '<label class="flex items-center gap-2 mt-2 text-xs text-slate-600 cursor-pointer"><input type="checkbox" class="accent-blue-600" data-change="only-free"' + (u.onlyFree ? " checked" : "") + ">미배정만 보기</label></div>" +
      '<div id="pool-list" class="flex-1 overflow-y-auto p-4 pt-3">' + poolList() + "</div></div>"
    var main =
      '<div class="p-5 min-w-0"><div class="flex flex-wrap items-start justify-between gap-3 mb-4"><div><h2 class="text-lg font-bold text-slate-900">작업 지시서</h2><p class="text-xs text-slate-500 mt-0.5">' + e(d) + ' 날짜의 작업 지시서</p>' +
      (u.edit ? '<p class="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full bg-blue-50 text-[11px] text-blue-700">' + ic("pen-line", "w-3 h-3") + "수정 중 — 작업자를 끌어다 놓으세요. 다 했으면 '완료'</p>" : '<p class="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full bg-slate-100 text-[11px] text-slate-500">' + ic("lock", "w-3 h-3") + "읽기 전용 — '수정'을 눌러 배정을 변경하세요</p>") + "</div>" +
      '<div class="flex flex-col items-end gap-2"><div class="flex items-center gap-2"><div class="relative"><span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400">' + ic("search", "w-3.5 h-3.5") + '</span><input data-input="card-q" value="' + e(u.cardQ) + '" placeholder="회사명, 프로젝트명, ID 검색..." class="' + SINP + ' pl-8 py-2 w-full sm:w-64"></div>' +
      '<span class="px-3 py-2 rounded-lg border border-slate-200 bg-white text-xs text-slate-600 whitespace-nowrap">총 <b class="text-slate-900">' + ordersOn(d).length + "</b>건</span></div>" +
      '<button type="button" data-act="assign-edit" class="' + BTN_P + '">' + ic(u.edit ? "check" : "pencil", "w-3.5 h-3.5") + (u.edit ? "완료" : "수정") + "</button></div></div>" +
      '<div id="card-grid">' + cardGrid() + "</div></div>"
    return head("인력 배정", "작업자를 드래그하여 작업 지시서에 배정하세요. 다중 배정이 가능합니다.", dateNav("asg", d)) + '<div class="demo-assign">' + pool + main + "</div>"
  }

  // ───────────────────────── 차량 배차 ─────────────────────────
  function viewDispatch() {
    var d = S.ui.dispatchDate, list = ordersOn(d)
    var used = {}
    list.forEach(function (o) { if (o.vehicle) (used[o.vehicle] = used[o.vehicle] || []).push(o) })
    var left = '<div class="' + CARD + ' p-4 space-y-2"><h2 class="font-semibold text-slate-900 mb-1">보유 차량</h2>' + S.vehicles.map(function (v) {
      var u = used[v.id]
      return '<div class="flex items-center gap-3 p-2.5 rounded-lg border ' + (v.status !== "운행 가능" ? "border-slate-200 opacity-60" : u ? "border-blue-200 bg-blue-50/40" : "border-slate-200") + '"><span class="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">' + ic("truck") + '</span><div class="min-w-0 flex-1"><p class="text-sm font-semibold text-slate-900">' + e(v.name) + '</p><p class="text-[11px] text-slate-500">' + e(v.kind) + (v.cap ? " · 적재 " + v.cap + " m³" : "") + "</p></div>" +
        (v.status !== "운행 가능" ? badge(v.status, "red") : u ? '<span class="text-right">' + badge(u.length > 1 ? "배차 " + u.length + "건" : "배차됨", "blue") + "</span>" : badge("대기")) + "</div>"
    }).join("") + "</div>"
    var rows = list.map(function (o) {
      var c = client(o.clientId), cbm = orderCbm(o), vh = vehicle(o.vehicle)
      var warn = []
      if (vh && vh.cap && cbm > vh.cap) warn.push("적재 초과 (" + vh.cap + " m³)")
      if (vh && used[vh.id] && used[vh.id].length > 1) warn.push("같은 날 " + used[vh.id].length + "건 배차")
      return (
        '<tr class="border-b border-slate-100 last:border-0"><td class="' + TD + ' tabular-nums text-slate-700">' + e(timeText(o)) + '</td><td class="' + TD + ' font-medium text-slate-900">' + e(c.name) + '</td><td class="' + TD + ' text-slate-600">' + e(o.project) + '</td><td class="' + TD + ' text-right font-mono text-blue-600">' + f3(cbm) + "</td>" +
        '<td class="' + TD + '"><select data-change="set-vehicle" data-id="' + e(o.id) + '" class="' + SINP + ' w-44"><option value="">배차 안 함</option>' +
        S.vehicles.map(function (v) { return '<option value="' + v.id + '"' + (o.vehicle === v.id ? " selected" : "") + (v.status !== "운행 가능" ? " disabled" : "") + ">" + e(v.name + " (" + v.kind + ")") + "</option>" }).join("") + "</select></td>" +
        '<td class="' + TD + ' text-xs ' + (warn.length ? "text-amber-600" : "text-slate-400") + '">' + (warn.length ? ic("triangle-alert", "w-3.5 h-3.5 inline-block align-middle mr-1") + e(warn.join(", ")) : vh ? "정상" : "-") + "</td></tr>"
      )
    }).join("")
    return (
      head("차량 배차", "날짜별 오더에 보유 차량을 붙입니다. 물량(CBM)이 차량 적재량을 넘으면 알려 줍니다.", dateNav("dsp", d)) +
      '<div class="p-4"><div class="demo-split">' + left +
      '<div class="' + CARD + ' overflow-x-auto"><div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between"><h2 class="font-semibold text-slate-900">' + e(dayLabel(d)) + " 오더</h2><span class=\"text-xs text-slate-500\">배차 " + list.filter(function (o) { return o.vehicle }).length + " / " + list.length + "건</span></div>" +
      (list.length ? '<table class="w-full min-w-[800px] text-xs"><thead class="bg-slate-50 border-b border-slate-200"><tr><th class="' + TH + '">시간</th><th class="' + TH + '">업체명</th><th class="' + TH + '">프로젝트</th><th class="' + TH + ' text-right">CBM</th><th class="' + TH + '">차량</th><th class="' + TH + '">확인</th></tr></thead><tbody>' + rows + "</tbody></table>" : empty("이 날짜의 오더가 없습니다")) +
      "</div></div></div>"
    )
  }

  // ───────────────────────── 나의 일정 ─────────────────────────
  function viewMy() {
    var upcoming = S.events.filter(function (v) { return v.date >= TODAY && v.date <= addDays(TODAY, 21) }).sort(function (a, b) { return (a.date + a.time) < (b.date + b.time) ? -1 : 1 })
    var byDate = {}
    upcoming.forEach(function (v) { (byDate[v.date] = byDate[v.date] || []).push(v) })
    var today = ordersOn(TODAY), un = today.filter(function (o) { return !o.workers.length }).length
    var form =
      '<form data-submit="event-add" class="' + CARD + ' p-4 space-y-3"><h2 class="font-semibold text-slate-900">일정 추가</h2>' +
      '<div><label class="' + LBL + '">날짜</label><input type="date" name="date" value="' + TODAY + '" required class="' + INP + '"></div>' +
      '<div><label class="' + LBL + '">시간</label><input type="time" name="time" value="09:00" required class="' + INP + '"></div>' +
      '<div><label class="' + LBL + '">제목</label><input name="title" required placeholder="예: 포장재 입고 검수" class="' + INP + '"></div>' +
      '<div><label class="' + LBL + '">차량</label><select name="vehicle" class="' + INP + '"><option value="">없음</option>' + S.vehicles.map(function (v) { return '<option value="' + v.id + '">' + e(v.name) + "</option>" }).join("") + "</select></div>" +
      '<div><label class="' + LBL + '">배정 인력</label><select name="worker" class="' + INP + '">' + S.workers.map(function (w) { return '<option value="' + w.id + '">' + e(w.name) + "</option>" }).join("") + "</select></div>" +
      '<button class="' + BTN_P + ' w-full py-2.5">일정 등록</button></form>'
    var list = Object.keys(byDate).map(function (d) {
      return '<div><p class="text-xs font-semibold text-slate-500 mb-1.5">' + e(dayLabel(d)) + (d === TODAY ? ' <span class="text-blue-600">오늘</span>' : "") + '</p><div class="' + CARD + ' divide-y divide-slate-100">' + byDate[d].map(function (v) {
        var vh = vehicle(v.vehicle), w = worker(v.worker)
        return '<div class="flex items-center gap-3 px-4 py-3"><span class="text-sm font-semibold text-slate-900 tabular-nums w-12">' + e(v.time) + '</span><div class="min-w-0 flex-1"><p class="text-sm text-slate-800">' + e(v.title) + '</p><p class="text-[11px] text-slate-500">' + e((vh ? vh.name : "차량 없음") + " · " + (w ? w.name : "-")) + '</p></div><button type="button" data-act="event-del" data-id="' + e(v.id) + '" class="p-1.5 text-slate-400 hover:text-red-500 cursor-pointer" aria-label="삭제">' + ic("trash-2", "w-3.5 h-3.5") + "</button></div>"
      }).join("") + "</div></div>"
    }).join("")
    return (
      head("나의 일정", "앞으로 3주 동안의 일정과 오늘 할 일을 모아 봅니다.", "") +
      '<div class="p-4 space-y-4"><div class="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 flex flex-wrap items-center gap-3 text-sm"><span class="text-blue-700 font-semibold">오늘 오더 ' + today.length + "건</span><span class=\"text-slate-600\">인력 미배정 " + un + '건</span><a href="#/assign" data-act="goto-assign" data-date="' + TODAY + '" class="ml-auto text-xs text-blue-600 hover:underline">인력 배정 바로가기 →</a></div>' +
      '<div class="demo-split">' + form + '<div class="space-y-4">' + (list || empty("앞으로 잡힌 일정이 없습니다")) + "</div></div></div>"
    )
  }

  // ───────────────────────── 도급업체 관리 ─────────────────────────
  function viewContractors() {
    var m = TODAY.slice(0, 7)
    var cards = S.clients.map(function (c) {
      var mine = S.orders.filter(function (o) { return o.clientId === c.id })
      var mo = mine.filter(function (o) { return o.date.slice(0, 7) === m })
      return (
        '<div class="' + CARD + ' p-4"><div class="flex items-start justify-between gap-2"><div><p class="font-bold text-slate-900">' + e(c.name) + '</p><p class="text-xs text-slate-500">담당 ' + e(c.contact) + '</p></div><div class="text-right"><p class="text-xs text-slate-500">이번 달</p><p class="text-sm font-semibold text-slate-900">' + mo.length + "건 · " + f3(mo.reduce(function (s, o) { return s + orderCbm(o) }, 0)) + " m³</p></div></div>" +
        '<div class="mt-3 space-y-1.5">' + c.sites.map(function (s) { return '<div class="flex items-start gap-1.5 text-xs text-slate-600">' + ic("map-pin", "w-3.5 h-3.5 mt-0.5 text-slate-400 shrink-0") + '<span><b class="text-slate-800">' + e(s.name) + "</b> · " + e(s.addr) + "</span></div>" }).join("") + "</div>" +
        '<form data-submit="site-add" data-id="' + c.id + '" class="mt-3 flex gap-2"><input type="hidden" name="cid" value="' + c.id + '"><input name="name" required placeholder="사업장 이름" class="' + SINP + ' flex-1 min-w-0"><input name="addr" placeholder="주소" class="' + SINP + ' flex-1 min-w-0"><button class="' + BTN + ' px-2.5 py-1.5">' + ic("plus", "w-3.5 h-3.5") + "</button></form>" +
        '<div class="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs"><span class="text-slate-500">누적 오더 ' + mine.length + '건</span><button type="button" data-act="new-for" data-id="' + c.id + '" class="text-blue-600 hover:underline cursor-pointer">이 업체로 오더 작성 →</button></div></div>'
      )
    }).join("")
    return (
      head("도급업체 관리", "포장을 맡기는 업체와 사업장(현장 주소)을 관리합니다.", "") +
      '<div class="p-4 space-y-4"><form data-submit="client-add" class="' + CARD + ' p-4 flex flex-wrap items-end gap-3"><div class="flex-1 min-w-[160px]"><label class="' + LBL + '">업체명</label><input name="name" required placeholder="예: (가상) 새솔기계" class="' + INP + '"></div><div class="flex-1 min-w-[160px]"><label class="' + LBL + '">담당자</label><input name="contact" placeholder="이름 직함" class="' + INP + '"></div><div class="flex-1 min-w-[160px]"><label class="' + LBL + '">첫 사업장</label><input name="site" required placeholder="예: 시흥 공장" class="' + INP + '"></div><div class="flex-1 min-w-[160px]"><label class="' + LBL + '">주소</label><input name="addr" placeholder="주소" class="' + INP + '"></div><button class="' + BTN_P + ' py-2.5">' + ic("plus") + "업체 추가</button></form>" +
      '<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">' + cards + "</div></div>"
    )
  }

  // ───────────────────────── 인력 관리 / 보유 차량 / 사용자 / 로그 ─────────────────────────
  function viewWorkers() {
    var m = TODAY.slice(0, 7), tab = S.ui.workerTab
    var days = {}
    S.orders.forEach(function (o) { if (o.date.slice(0, 7) === m) o.workers.forEach(function (id) { days[id] = (days[id] || 0) + 1 }) })
    var list = S.workers.filter(function (w) { return tab === "all" || w.type === (tab === "own" ? "자사" : "외부") })
    var tabs = [["all", "전체"], ["own", "자사"], ["ext", "외부"]]
    return (
      head("인력 관리", "작업자 " + S.workers.length + "명 · 자사 " + S.workers.filter(function (w) { return w.type === "자사" }).length + "명, 외부 " + S.workers.filter(function (w) { return w.type === "외부" }).length + "명", "") +
      '<div class="p-4 space-y-4"><form data-submit="worker-add" class="' + CARD + ' p-4 flex flex-wrap items-end gap-3"><div class="flex-1 min-w-[130px]"><label class="' + LBL + '">이름</label><input name="name" required placeholder="이름" class="' + INP + '"></div>' +
      '<div><label class="' + LBL + '">구분</label><select name="type" class="' + INP + '"><option>자사</option><option>외부</option></select></div>' +
      '<div><label class="' + LBL + '">담당</label><select name="tag" class="' + INP + '">' + ["포장", "목공", "상하차", "지게차", "결속", "검수"].map(function (t) { return "<option>" + t + "</option>" }).join("") + "</select></div>" +
      '<div class="w-24"><label class="' + LBL + '">능력치</label><input type="number" name="skill" min="1" max="10" value="6" class="' + INP + '"></div><button class="' + BTN_P + ' py-2.5">' + ic("plus") + "작업자 등록</button></form>" +
      '<div class="flex gap-1.5">' + tabs.map(function (t) { return '<button type="button" data-act="worker-tab" data-t="' + t[0] + '" class="px-3 py-1 rounded-full text-xs font-medium cursor-pointer ' + (tab === t[0] ? "bg-slate-900 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50") + '">' + t[1] + "</button>" }).join("") + "</div>" +
      '<div class="' + CARD + ' overflow-x-auto"><table class="w-full min-w-[700px] text-xs"><thead class="bg-slate-50 border-b border-slate-200"><tr>' + ["이름", "구분", "담당", "능력치", "연락처", "이번 달 투입", "상태", ""].map(function (t) { return '<th class="' + TH + '">' + t + "</th>" }).join("") + "</tr></thead><tbody>" +
      list.map(function (w) {
        return '<tr class="border-b border-slate-100 last:border-0 hover:bg-slate-50"><td class="' + TD + ' font-semibold text-slate-900">' + e(w.name) + '</td><td class="' + TD + '">' + badge(w.type, w.type === "자사" ? "blue" : "violet") + '</td><td class="' + TD + ' text-slate-600">' + e(w.tags.join(", ")) + '</td><td class="' + TD + ' text-green-600 font-semibold">' + ic("zap", "w-3 h-3 inline-block fill-current") + " " + w.skill + '</td><td class="' + TD + ' font-mono text-slate-500">' + e(w.phone) + '</td><td class="' + TD + ' tabular-nums text-slate-700">' + (days[w.id] || 0) + "건</td>" +
          '<td class="' + TD + '"><button type="button" data-act="worker-toggle" data-id="' + w.id + '" class="cursor-pointer">' + (w.active ? badge("근무", "green") : badge("휴무")) + '</button></td><td class="' + TD + ' text-right"><button type="button" data-act="worker-del" data-id="' + w.id + '" class="p-1 text-slate-400 hover:text-red-500 cursor-pointer" aria-label="삭제">' + ic("trash-2", "w-3.5 h-3.5") + "</button></td></tr>"
      }).join("") + "</tbody></table></div></div>"
    )
  }
  function viewVehicles() {
    var m = TODAY.slice(0, 7), cnt = {}
    S.orders.forEach(function (o) { if (o.vehicle && o.date.slice(0, 7) === m) cnt[o.vehicle] = (cnt[o.vehicle] || 0) + 1 })
    return (
      head("보유 차량 관리", "차량 " + S.vehicles.length + "대 · 운행 가능 " + S.vehicles.filter(function (v) { return v.status === "운행 가능" }).length + "대", "") +
      '<div class="p-4 space-y-4"><form data-submit="vehicle-add" class="' + CARD + ' p-4 flex flex-wrap items-end gap-3"><div class="flex-1 min-w-[130px]"><label class="' + LBL + '">차량 이름</label><input name="name" required placeholder="예: 윙바디-09" class="' + INP + '"></div><div class="flex-1 min-w-[130px]"><label class="' + LBL + '">차종</label><input name="kind" required placeholder="예: 5톤 윙바디" class="' + INP + '"></div><div class="w-28"><label class="' + LBL + '">적재 (m³)</label><input type="number" name="cap" value="30" class="' + INP + '"></div><button class="' + BTN_P + ' py-2.5">' + ic("plus") + "차량 등록</button></form>" +
      '<div class="' + CARD + ' overflow-x-auto"><table class="w-full min-w-[600px] text-xs"><thead class="bg-slate-50 border-b border-slate-200"><tr>' + ["차량", "차종", "적재", "이번 달 배차", "상태"].map(function (t) { return '<th class="' + TH + '">' + t + "</th>" }).join("") + "</tr></thead><tbody>" +
      S.vehicles.map(function (v) {
        return '<tr class="border-b border-slate-100 last:border-0 hover:bg-slate-50"><td class="' + TD + ' font-semibold text-slate-900"><span class="inline-flex items-center gap-2">' + ic("truck", "w-4 h-4 text-slate-400") + e(v.name) + '</span></td><td class="' + TD + ' text-slate-600">' + e(v.kind) + '</td><td class="' + TD + ' tabular-nums">' + (v.cap ? v.cap + " m³" : "-") + '</td><td class="' + TD + ' tabular-nums">' + (cnt[v.id] || 0) + '회</td><td class="' + TD + '"><button type="button" data-act="vehicle-toggle" data-id="' + v.id + '" class="cursor-pointer">' + (v.status === "운행 가능" ? badge("운행 가능", "green") : badge(v.status, "red")) + "</button></td></tr>"
      }).join("") + "</tbody></table></div></div>"
    )
  }
  function viewUsers() {
    return (
      head("사용자 관리", "로그인 계정과 권한을 관리합니다.", "") +
      '<div class="p-4 space-y-4"><form data-submit="user-add" class="' + CARD + ' p-4 flex flex-wrap items-end gap-3"><div class="flex-1 min-w-[130px]"><label class="' + LBL + '">아이디</label><input name="id" required placeholder="영문 아이디" class="' + INP + '"></div><div class="flex-1 min-w-[130px]"><label class="' + LBL + '">이름</label><input name="name" required class="' + INP + '"></div><div><label class="' + LBL + '">권한</label><select name="role" class="' + INP + '"><option>관리자</option><option>현장팀장</option><option>사무</option><option>조회</option></select></div><button class="' + BTN_P + ' py-2.5">' + ic("plus") + "계정 추가</button></form>" +
      '<div class="' + CARD + ' overflow-x-auto"><table class="w-full min-w-[600px] text-xs"><thead class="bg-slate-50 border-b border-slate-200"><tr>' + ["아이디", "이름", "권한", "최근 접속", "사용"].map(function (t) { return '<th class="' + TH + '">' + t + "</th>" }).join("") + "</tr></thead><tbody>" +
      S.users.map(function (u) {
        return '<tr class="border-b border-slate-100 last:border-0"><td class="' + TD + ' font-mono text-slate-600">' + e(u.id) + '</td><td class="' + TD + ' font-semibold text-slate-900">' + e(u.name) + '</td><td class="' + TD + '"><select data-change="user-role" data-id="' + e(u.id) + '" class="' + SINP + '">' + ["관리자", "현장팀장", "사무", "조회"].map(function (r) { return "<option" + (u.role === r ? " selected" : "") + ">" + r + "</option>" }).join("") + '</select></td><td class="' + TD + ' text-slate-500 tabular-nums">' + e(u.last || "-") + '</td><td class="' + TD + '"><button type="button" data-act="user-toggle" data-id="' + e(u.id) + '" class="cursor-pointer">' + (u.active ? badge("사용", "green") : badge("중지")) + "</button></td></tr>"
      }).join("") + "</tbody></table></div></div>"
    )
  }
  function viewLogs() {
    var q = S.ui.logQ
    var list = S.logs.filter(function (l) { return !q || (l.user + l.action + l.target).indexOf(q) >= 0 })
    return (
      head("활동 로그", "누가 언제 무엇을 바꿨는지 남습니다. 체험판에서 한 작업도 여기에 쌓입니다.", "") +
      '<div class="p-4 space-y-3"><div class="relative w-full sm:w-80"><span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400">' + ic("search", "w-3.5 h-3.5") + '</span><input data-input="log-q" value="' + e(q) + '" placeholder="사용자, 작업, 대상 검색" class="' + SINP + ' w-full pl-8 py-2"></div>' +
      '<div class="' + CARD + ' overflow-x-auto" id="log-table">' + logTable(list) + "</div></div>"
    )
  }
  function logTable(list) {
    if (!list.length) return empty("기록이 없습니다")
    return '<table class="w-full min-w-[600px] text-xs"><thead class="bg-slate-50 border-b border-slate-200"><tr>' + ["시각", "사용자", "작업", "대상"].map(function (t) { return '<th class="' + TH + '">' + t + "</th>" }).join("") + "</tr></thead><tbody>" +
      list.map(function (l) { return '<tr class="border-b border-slate-100 last:border-0"><td class="' + TD + ' tabular-nums text-slate-500">' + e(l.at) + '</td><td class="' + TD + ' text-slate-800">' + e(l.user) + '</td><td class="' + TD + ' font-medium text-slate-900">' + e(l.action) + '</td><td class="px-3 py-2 text-slate-600">' + e(l.target) + "</td></tr>" }).join("") + "</tbody></table>"
  }

  // ───────────────────────── 로그인 ─────────────────────────
  function viewLogin() {
    return (
      '<div class="min-h-screen bg-slate-50 flex items-center justify-center p-4"><div class="w-full max-w-sm"><div class="flex flex-col items-center mb-8">' +
      '<div class="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-3">' + ic("package", "w-7 h-7") + "</div>" +
      '<h1 class="text-2xl font-bold text-slate-900 tracking-tight">Pack-Ops</h1><p class="text-sm text-slate-500 mt-1">수출포장 운영 관리 시스템</p></div>' +
      '<form data-submit="login" class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-4">' +
      '<div><label for="username" class="block text-sm font-medium text-slate-700 mb-1.5">아이디</label><input id="username" name="id" type="text" value="admin" class="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-slate-400" placeholder="아이디를 입력하세요"></div>' +
      '<div><label for="password" class="block text-sm font-medium text-slate-700 mb-1.5">비밀번호</label><input id="password" type="password" value="demo1234" class="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-slate-400" placeholder="비밀번호를 입력하세요"></div>' +
      '<button type="submit" class="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 cursor-pointer">로그인</button>' +
      '<p class="text-xs text-center text-slate-400 pt-2">체험판입니다. 그대로 로그인을 누르세요.</p></form></div></div>'
    )
  }

  // ───────────────────────── 모달 ─────────────────────────
  function frame(inner, wide) {
    return '<div class="fixed inset-0 z-[70] bg-black/40 flex items-center justify-center p-4" data-act="modal-close"><div class="bg-white rounded-2xl shadow-xl w-full ' + (wide ? "max-w-2xl" : "max-w-md") + ' max-h-[90vh] overflow-y-auto" data-act="stay">' + inner + "</div></div>"
  }
  function modal() {
    var m = S.modal
    if (!m) return ""
    if (m.type === "memo") {
      var o = order(m.id), c = client(o.clientId)
      return frame('<div class="p-5"><h3 class="font-semibold text-slate-900">메모</h3><p class="text-xs text-slate-500 mt-0.5">' + e(c.name + " · " + o.project) + '</p><textarea id="memo-text" rows="4" class="' + INP + ' mt-3 resize-none" placeholder="현장에 전할 말을 적으세요">' + e(o.memo) + '</textarea></div><div class="px-5 py-3 bg-slate-50 border-t border-slate-100 flex justify-end gap-2"><button type="button" class="' + BTN + '" data-act="modal-close">닫기</button><button type="button" class="' + BTN_P + '" data-act="memo-save" data-id="' + e(o.id) + '">저장</button></div>')
    }
    if (m.type === "event") {
      var v = m.id ? S.events.find(function (x) { return x.id === m.id }) : { date: m.date, time: "09:00", title: "", vehicle: "", worker: S.workers[0].id }
      return frame(
        '<form data-submit="event-save"><div class="p-5 space-y-3"><h3 class="font-semibold text-slate-900">' + (m.id ? "일정 상세" : "일정 추가") + "</h3>" +
        '<input type="hidden" name="id" value="' + e(m.id || "") + '"><div class="grid grid-cols-2 gap-3"><div><label class="' + LBL + '">날짜</label><input type="date" name="date" value="' + e(v.date) + '" class="' + INP + '"></div><div><label class="' + LBL + '">시간</label><input type="time" name="time" value="' + e(v.time) + '" class="' + INP + '"></div></div>' +
        '<div><label class="' + LBL + '">제목</label><input name="title" required value="' + e(v.title) + '" class="' + INP + '"></div>' +
        '<div class="grid grid-cols-2 gap-3"><div><label class="' + LBL + '">차량</label><select name="vehicle" class="' + INP + '"><option value="">없음</option>' + S.vehicles.map(function (x) { return '<option value="' + x.id + '"' + (v.vehicle === x.id ? " selected" : "") + ">" + e(x.name) + "</option>" }).join("") + "</select></div>" +
        '<div><label class="' + LBL + '">배정 인력</label><select name="worker" class="' + INP + '">' + S.workers.map(function (x) { return '<option value="' + x.id + '"' + (v.worker === x.id ? " selected" : "") + ">" + e(x.name) + "</option>" }).join("") + "</select></div></div></div>" +
        '<div class="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center gap-2">' + (m.id ? '<button type="button" class="text-xs text-red-600 hover:underline cursor-pointer" data-act="event-del" data-id="' + e(m.id) + '">삭제</button>' : "") + '<span class="flex-1"></span><button type="button" class="' + BTN + '" data-act="modal-close">닫기</button><button class="' + BTN_P + '">저장</button></div></form>'
      )
    }
    if (m.type === "upload") {
      return frame(
        '<div class="p-5"><h3 class="font-semibold text-slate-900">지시서 엑셀 업로드</h3><p class="text-xs text-slate-500 mt-0.5">올리면 품명·치수·수량을 읽고 빈 칸과 잘못된 값을 먼저 걸러 보여 줍니다.</p>' +
        '<p class="text-xs font-semibold text-slate-700 mt-4 mb-2">체험용 샘플 파일</p><div class="space-y-2">' +
        Object.keys(SAMPLES).map(function (k) { var s = SAMPLES[k]; return '<button type="button" data-act="sample" data-k="' + k + '" class="w-full flex items-center gap-3 text-left border border-slate-200 rounded-lg p-3 hover:border-blue-300 hover:bg-blue-50/50 cursor-pointer">' + ic("file-spreadsheet", "w-5 h-5 text-green-600 shrink-0") + '<span class="min-w-0"><span class="block text-sm font-medium text-slate-900 truncate">' + e(s.file) + '</span><span class="block text-[11px] text-slate-500">' + e(s.desc) + "</span></span></button>" }).join("") +
        '</div><p class="text-xs font-semibold text-slate-700 mt-4 mb-2">내 파일 올리기 (CSV)</p><label class="flex items-center justify-center gap-1.5 w-full py-3 border border-dashed border-slate-300 rounded-lg text-xs text-slate-600 hover:bg-slate-50 cursor-pointer">' + ic("upload", "w-3.5 h-3.5") + '품명,수량,L,W,H,사양 순서의 CSV 선택<input type="file" accept=".csv,text/csv" class="hidden" data-change="csv-file"></label></div>' +
        '<div class="px-5 py-3 bg-slate-50 border-t border-slate-100 flex justify-end"><button type="button" class="' + BTN + '" data-act="modal-close">닫기</button></div>'
      )
    }
    if (m.type === "parse") {
      var errRows = m.errs.map(function (x) {
        var cell = function (k, v, cls) { return '<td class="px-3 py-2 ' + (cls || "") + " " + (x.bad[k] ? "bg-red-100 text-red-700 font-semibold" : "") + '">' + e(x.bad[k] ? "-" : v) + "</td>" }
        return '<tr class="border-t border-red-100"><td class="px-3 py-2 text-red-600">' + x.r.row + "</td>" + cell("name", x.r.name) + cell("L", x.r.L, "text-center") + cell("W", x.r.W, "text-center") + cell("H", x.r.H, "text-center") + cell("qty", x.r.qty, "text-center") + "</tr>"
      }).join("")
      var errMsgs = m.errs.map(function (x) { return x.msgs.map(function (t) { return "<p>" + e(t) + "</p>" }).join("") }).join("")
      return frame(
        '<div class="px-6 py-5 bg-slate-50 border-b border-slate-100 flex flex-wrap items-start justify-between gap-3"><div><h3 class="text-lg font-bold text-slate-900">엑셀 파싱 결과</h3><p class="text-xs text-slate-500 mt-0.5">' + e(m.file) + "</p></div>" +
        '<div class="flex gap-1.5"><span class="px-2 py-1 rounded text-xs bg-green-100 text-green-700">성공 ' + m.ok.length + '건</span><span class="px-2 py-1 rounded text-xs bg-red-100 text-red-700">오류 ' + m.errs.length + '건</span><span class="px-2 py-1 rounded text-xs bg-amber-100 text-amber-700">경고 ' + m.warns.length + "건</span></div></div>" +
        '<div class="px-6 py-5 space-y-5">' +
        (m.errs.length ? '<div><p class="text-sm font-semibold text-red-700 mb-2">오류 (' + m.errs.length + "행) — 적용에서 제외됩니다</p>" +
          '<div class="border border-red-200 rounded-lg overflow-x-auto"><table class="w-full min-w-[600px] text-xs"><thead class="bg-red-50 text-red-700"><tr><th class="px-3 py-2 text-left w-10">행</th><th class="px-3 py-2 text-left">품명</th><th class="px-3 py-2">L</th><th class="px-3 py-2">W</th><th class="px-3 py-2">H</th><th class="px-3 py-2">CASE</th></tr></thead><tbody>' + errRows + "</tbody></table></div>" +
          '<div class="mt-2 text-xs text-red-600 space-y-0.5">' + errMsgs + "</div></div>" : "") +
        (m.warns.length ? '<div><p class="text-sm font-semibold text-amber-700 mb-2">경고 (' + m.warns.length + "건) — 적용되지만 확인 필요</p>" + m.warns.map(function (w) { return '<div class="flex gap-3 px-3 py-2.5 mb-1.5 rounded-lg bg-amber-50 border border-amber-300 text-xs text-amber-800"><b>' + w.row + "행</b>" + e(w.msg) + "</div>" }).join("") + "</div>" : "") +
        '<div><p class="text-sm font-semibold text-slate-800 mb-2">적용될 물품 (' + m.ok.length + "건)</p>" +
        (m.ok.length ? '<div class="border border-slate-200 rounded-lg overflow-x-auto"><table class="w-full min-w-[600px] text-xs"><thead class="bg-slate-50 text-slate-600"><tr><th class="px-3 py-2 text-left w-10">행</th><th class="px-3 py-2 text-left">품명</th><th class="px-3 py-2 text-right">수량</th><th class="px-3 py-2 text-center">L × W × H</th><th class="px-3 py-2 text-left">사양</th></tr></thead><tbody>' +
          m.ok.map(function (x) { return '<tr class="border-t border-slate-100"><td class="px-3 py-2 text-slate-500">' + x.row + '</td><td class="px-3 py-2">' + e(x.item.name) + '</td><td class="px-3 py-2 text-right">' + x.item.qty + '</td><td class="px-3 py-2 text-center font-mono">' + x.item.L + " × " + x.item.W + " × " + x.item.H + '</td><td class="px-3 py-2">' + e(x.item.spec) + "</td></tr>" }).join("") + "</tbody></table></div>" : '<p class="text-xs text-slate-400">적용할 물품이 없습니다</p>') +
        "</div></div>" +
        '<div class="px-6 py-4 border-t border-slate-100 flex justify-end gap-2"><button type="button" class="px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-700 hover:bg-slate-50 cursor-pointer" data-act="modal-close">취소 (재작성)</button>' +
        '<button type="button" class="px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 cursor-pointer disabled:opacity-50" data-act="parse-apply"' + (m.ok.length ? "" : " disabled") + ">" + (m.errs.length ? "오류 제외 " + m.ok.length + "건 적용" : m.ok.length + "건 적용") + "</button></div>",
        true
      )
    }
    if (m.type === "day") {
      var d = m.date, list = ordersOn(d, S.ui.calClient), ev = eventsOn(d)
      return frame(
        '<div class="px-5 py-4 border-b border-slate-100 flex items-center justify-between"><div><h3 class="font-semibold text-slate-900">' + e(dayLabel(d)) + '</h3><p class="text-xs text-slate-500">오더 ' + list.length + "건 · 일정 " + ev.length + '건 · 날짜를 바꾸면 바로 옮겨집니다</p></div><button type="button" data-act="modal-close" class="p-1.5 text-slate-400 hover:text-slate-600 cursor-pointer" aria-label="닫기">' + ic("x") + "</button></div>" +
        '<div class="p-5 space-y-2">' +
        (list.length ? list.map(function (o) {
          return '<div class="flex flex-wrap items-center gap-3 border border-slate-200 rounded-lg px-3 py-2"><div class="min-w-0 flex-1"><p class="text-sm font-semibold text-slate-900 truncate">' + e(client(o.clientId).name) + ' <span class="font-normal text-slate-500">· ' + e(o.project) + '</span></p><p class="text-[11px] text-slate-500">' + e(timeText(o)) + " · " + f3(orderCbm(o)) + " m³ · 인원 " + o.workers.length + "/" + o.need + "</p></div>" +
            '<input type="date" value="' + e(o.date) + '" data-change="move-order" data-id="' + e(o.id) + '" class="' + SINP + '" aria-label="작업일 옮기기"><a href="#/orders/' + e(o.id) + '" class="text-xs text-blue-600 hover:underline">열기</a></div>'
        }).join("") : '<p class="text-xs text-slate-400 py-2">이 날짜의 오더가 없습니다</p>') +
        (ev.length ? '<p class="text-xs font-semibold text-slate-600 pt-2">일정</p>' + ev.map(function (v) { return '<div class="flex items-center gap-3 border border-blue-100 bg-blue-50/40 rounded-lg px-3 py-2 text-xs"><b class="tabular-nums">' + e(v.time) + '</b><span class="flex-1 min-w-0 truncate">' + e(v.title) + '</span><button type="button" data-act="event-del" data-id="' + e(v.id) + '" class="text-slate-400 hover:text-red-500 cursor-pointer" aria-label="삭제">' + ic("x", "w-3.5 h-3.5") + "</button></div>" }).join("") : "") +
        '<form data-submit="event-quick" class="flex gap-2 pt-2"><input type="hidden" name="date" value="' + e(d) + '"><input type="time" name="time" value="10:00" class="' + SINP + '"><input name="title" required placeholder="일정 제목" class="' + SINP + ' flex-1 min-w-0"><button class="' + BTN + '">일정 추가</button></form></div>' +
        '<div class="px-5 py-3 bg-slate-50 border-t border-slate-100 flex justify-end gap-2"><button type="button" class="' + BTN_P + '" data-act="new-on" data-date="' + e(d) + '">' + ic("plus", "w-3.5 h-3.5") + "이 날짜로 오더 작성</button></div>",
        true
      )
    }
    if (m.type === "confirm") {
      return frame('<div class="p-5"><h3 class="font-semibold text-slate-900">' + e(m.title) + '</h3><p class="text-sm text-slate-600 mt-1">' + e(m.text) + '</p></div><div class="px-5 py-3 bg-slate-50 border-t border-slate-100 flex justify-end gap-2"><button type="button" class="' + BTN + '" data-act="modal-close">취소</button><button type="button" class="' + BTN_P + ' bg-red-500 hover:bg-red-600" data-act="confirm-yes">삭제</button></div>')
    }
    return ""
  }

  // ───────────────────────── 화면 고르기 ─────────────────────────
  function render(route) {
    var p = route.path.split("/").filter(Boolean), q = route.query
    document.title = "Pack-Ops · " + BRAND
    if (p[0] === "login") return viewLogin()
    if (!p.length) return shell("dash", viewDash())
    if (p[0] === "report") return shell("dash", viewReport(q))
    if (p[0] === "my") return shell("my", viewMy())
    if (p[0] === "orders") {
      if (!p[1]) return shell("orders", viewOrders())
      if (p[1] === "new") {
        if (!S.draft || S.draft.editingId) { S.draft = newDraft(q.date); if (q.client && client(q.client)) S.draft.clientId = q.client }
        return shell("new", viewForm(null))
      }
      var o = order(p[1])
      if (!o) return shell("orders", head("작업 지시서", "", "", "#/orders") + empty("오더를 찾을 수 없습니다 (삭제되었을 수 있습니다)"))
      if (p[2] === "edit") {
        if (!S.draft || S.draft.editingId !== o.id) S.draft = draftFrom(o)
        return shell("orders", viewForm(o.id))
      }
      if (p[2] === "sheet") return shell("orders", viewSheet(o))
      return shell("orders", viewOrder(o))
    }
    if (p[0] === "calendar") return shell("calendar", viewCal())
    if (p[0] === "contractors") return shell("contractors", viewContractors())
    if (p[0] === "assign") return shell("assign", viewAssign())
    if (p[0] === "dispatch") return shell("dispatch", viewDispatch())
    if (p[0] === "workers") return shell("workers", viewWorkers())
    if (p[0] === "vehicles") return shell("vehicles", viewVehicles())
    if (p[0] === "users") return shell("users", viewUsers())
    if (p[0] === "logs") return shell("logs", viewLogs())
    return shell("", head("페이지 없음", "", "") + '<div class="p-8 text-center text-sm text-slate-500">없는 화면입니다. <a class="text-blue-600 hover:underline" href="#/">대시보드로</a></div>')
  }
  var up = Demo.update

  // ───────────────────────── 동작 ─────────────────────────
  window.addEventListener("hashchange", function () { S.modal = null; S.ui.drawer = false; S.ui.tplMenu = false })

  Demo.on("drawer", function () { S.ui.drawer = !S.ui.drawer; up() })
  Demo.on("collapse", function () { S.ui.collapsed = !S.ui.collapsed; up() })
  Demo.on("nav-group", function (ds) { S.ui.closed[ds.g] = !S.ui.closed[ds.g]; up() })
  Demo.on("modal-close", function () { S.modal = null; up() })
  Demo.on("print", function () { window.print() })
  Demo.on("login", function () { S.users[0].last = stamp(); log("로그인", "-"); Demo.go("/") })

  // 날짜 이동 (현황판·일보·배정·배차 공통)
  function dateActs(prefix, key, after) {
    var set = function (d) { if (d) { S.ui[key] = d; if (after) after(d); up() } }
    Demo.on(prefix + "-prev", function () { set(addDays(S.ui[key], -1)) })
    Demo.on(prefix + "-next", function () { set(addDays(S.ui[key], 1)) })
    Demo.on(prefix + "-today", function () { set(TODAY) })
    Demo.on(prefix + "-date", function (v) { set(v) })
  }
  dateActs("dash", "date", function () { S.ui.sel = {} })
  dateActs("asg", "assignDate", function () { S.ui.pick = null })
  dateActs("dsp", "dispatchDate")
  ;["prev", "next", "today", "date"].forEach(function (k) {
    var base = { prev: -1, next: 1 }
    Demo.on("rep-" + k, function (v) {
      var cur = Demo.route().query.date || S.ui.date
      var d = k === "date" ? v : k === "today" ? TODAY : addDays(cur, base[k])
      if (d) { S.ui.date = d; Demo.go("/report?date=" + d) }
    })
  })

  // 현황판
  Demo.on("dash-days", function (ds) { S.ui.days = +ds.n; up() })
  Demo.on("zoom", function (ds) { S.ui.zoom = Math.max(1, Math.min(6, S.ui.zoom + +ds.d)); up() })
  Demo.on("summary", function () { S.ui.summary = !S.ui.summary; up() })
  Demo.on("refresh", function () { up(); Demo.toast("최신 상태로 다시 불러왔습니다") })
  Demo.on("dash-group", function (v) { S.ui.group = v; up() })
  Demo.on("sel", function (v, el) { if (el.checked) S.ui.sel[el.dataset.id] = true; else delete S.ui.sel[el.dataset.id]; up() })
  Demo.on("sel-all", function (v, el) { ordersOn(el.dataset.date).forEach(function (o) { if (el.checked) S.ui.sel[o.id] = true; else delete S.ui.sel[o.id] }); up() })
  Demo.on("open-order", function (ds) { Demo.go("/orders/" + ds.id) })
  Demo.on("memo", function (ds) { S.modal = { type: "memo", id: ds.id }; up(); var t = document.getElementById("memo-text"); if (t) t.focus() })
  Demo.on("memo-save", function (ds) { var o = order(ds.id); o.memo = document.getElementById("memo-text").value.trim(); log("메모 수정", o.id); S.modal = null; up(); Demo.toast("메모를 저장했습니다") })
  Demo.on("dl-orders", function () {
    var days = S.ui.days === 2 ? [S.ui.date, addDays(S.ui.date, 1)] : [S.ui.date]
    var list = []
    days.forEach(function (d) { ordersOn(d).forEach(function (o) { if (list.indexOf(o) < 0) list.push(o) }) })
    var sel = list.filter(function (o) { return S.ui.sel[o.id] })
    if (sel.length) list = sel
    if (!list.length) return Demo.toast("내려받을 오더가 없습니다")
    var rows = [["오더번호", "작업일", "시간", "업체명", "사업장", "프로젝트", "사양", "수량", "CBM", "준비물", "배정 인력", "차량", "메모"]]
    list.forEach(function (o) { var s = site(o), v = vehicle(o.vehicle); rows.push([o.id, o.date, timeText(o), client(o.clientId).name, s ? s.name : "", o.project, o.spec, orderQty(o), f3(orderCbm(o)), o.prep, o.workers.map(function (id) { return worker(id).name }).join(" "), v ? v.name : "", o.memo]) })
    download("작업지시서_" + S.ui.date + ".csv", rows)
    Demo.toast((sel.length ? "선택한 " : "") + list.length + "건을 엑셀(CSV)로 내려받았습니다")
  })
  Demo.on("event-new", function (ds) { S.modal = { type: "event", date: ds.date }; up() })
  Demo.on("event-open", function (ds) { S.modal = { type: "event", id: ds.id }; up() })
  Demo.on("event-save", function (v) {
    if (!v.title.trim()) return Demo.toast("제목을 입력하세요")
    var ev = v.id ? S.events.find(function (x) { return x.id === v.id }) : null
    if (!ev) { ev = { id: "en" + Date.now() }; S.events.push(ev) }
    Object.assign(ev, { date: v.date, time: v.time, title: v.title.trim(), vehicle: v.vehicle, worker: v.worker })
    log(v.id ? "일정 수정" : "일정 등록", ev.date + " " + ev.title)
    S.modal = null; up(); Demo.toast("일정을 저장했습니다")
  })
  Demo.on("event-del", function (ds) {
    var i = S.events.findIndex(function (x) { return x.id === ds.id })
    if (i >= 0) { log("일정 삭제", S.events[i].title); S.events.splice(i, 1) }
    if (S.modal && S.modal.type === "event") S.modal = null
    up(); Demo.toast("일정을 지웠습니다")
  })
  function addEvent(v) {
    if (!String(v.title || "").trim()) return Demo.toast("제목을 입력하세요")
    S.events.push({ id: "en" + Date.now(), date: v.date, time: v.time, title: v.title.trim(), vehicle: v.vehicle || "", worker: v.worker || S.workers[0].id })
    log("일정 등록", v.date + " " + v.title.trim())
    up(); Demo.toast(dayLabel(v.date) + " 일정을 등록했습니다")
  }
  Demo.on("event-add", addEvent)
  Demo.on("event-quick", addEvent)

  // 오더 목록
  Demo.on("ord-q", function (v) { S.ui.ordQ = v; patchOrders() })
  Demo.on("ord-client", function (v) { S.ui.ordClient = v; up() })
  Demo.on("ord-period", function (ds) { S.ui.ordPeriod = ds.p; S.ui.ordShow = 60; up() })
  Demo.on("ord-more", function () { S.ui.ordShow += 60; up() })
  function patchOrders() {
    var tmp = document.createElement("div")
    tmp.innerHTML = viewOrders()
    ;["ord-table", "ord-count"].forEach(function (id) { var a = document.getElementById(id), b = tmp.querySelector("#" + id); if (a && b) a.innerHTML = b.innerHTML })
  }
  Demo.on("new-order", function () { S.draft = null; Demo.go("/orders/new") })
  Demo.on("new-for", function (ds) { S.draft = null; Demo.go("/orders/new?client=" + ds.id) })
  Demo.on("new-on", function (ds) { S.draft = null; S.modal = null; Demo.go("/orders/new?date=" + ds.date) })

  // 오더 상세
  Demo.on("dl-sheet", function (ds) {
    var o = order(ds.id), c = client(o.clientId)
    download("제함지시서_" + c.name + "_" + o.project + ".csv", sheetRows(o))
    log("제함지시서 다운로드", o.id)
    Demo.toast("제함지시서를 엑셀(CSV)로 내려받았습니다")
  })
  Demo.on("del-order", function (ds) { S.modal = { type: "confirm", title: "오더 삭제", text: ds.id + " 오더를 지울까요? 달력·배정·현황판에서도 함께 빠집니다.", id: ds.id }; up() })
  Demo.on("confirm-yes", function () {
    var id = S.modal.id
    S.orders = S.orders.filter(function (o) { return o.id !== id })
    log("오더 삭제", id)
    S.modal = null; Demo.go("/orders"); Demo.toast("오더를 지웠습니다")
  })
  Demo.on("goto-assign", function (ds) { S.ui.assignDate = ds.date; Demo.go("/assign") })
  Demo.on("goto-dispatch", function (ds) { S.ui.dispatchDate = ds.date; Demo.go("/dispatch") })

  // 오더 작성 폼
  Demo.on("pick-client", function (ds) { S.draft.clientId = ds.id; var c = client(ds.id); S.draft.manager = c.contact; if (c.sites.length === 1) { S.draft.siteId = c.sites[0].id; S.draft.addr = c.sites[0].addr }; up() })
  Demo.on("clear-client", function () { Object.assign(S.draft, { clientId: "", siteId: "", addr: "", manager: "" }); up() })
  Demo.on("hist-q", function (v) { S.ui.histQ = v; var el = document.getElementById("hist-list"); if (el) el.innerHTML = histList(client(S.draft.clientId)) })
  Demo.on("load-hist", function (ds) {
    var o = order(ds.id), d = S.draft
    Object.assign(d, { siteId: o.siteId, addr: site(o) ? site(o).addr : "", project: o.project, need: o.need, boxType: o.boxType, spec: o.spec === "-" ? "" : o.spec, prep: o.prep === "-" ? "" : o.prep, items: o.items.map(function (i) { return Object.assign({}, i) }) })
    up(); Demo.toast("과거 작업(" + o.date + ")의 내용을 불러왔습니다")
  })
  Demo.on("draft", function (v, el) { S.draft[el.name] = v })
  Demo.on("draft-field", function (v, el) { S.draft[el.name] = v; up() })
  Demo.on("draft-site", function (v) { S.draft.siteId = v; var c = client(S.draft.clientId), s = c.sites.find(function (x) { return x.id === v }); S.draft.addr = s ? s.addr : ""; up() })
  Demo.on("draft-allday", function (v, el) { S.draft.allDay = el.checked; up() })
  Demo.on("draft-end", function () { S.draft.showEnd = true; S.draft.endDate = S.draft.endDate || S.draft.date; S.draft.end = S.draft.end || "17:00"; up() })
  Demo.on("draft-noend", function () { S.draft.showEnd = false; S.draft.endDate = ""; S.draft.end = ""; up() })
  Demo.on("item", function (v, el) { S.draft.items[+el.dataset.i][el.dataset.k] = v; patchTotals() })
  Demo.on("item-spec", function (v, el) { S.draft.items[+el.dataset.i].spec = v })
  Demo.on("item-add", function () { S.draft.items.push({ name: "", qty: 1, L: "", W: "", H: "", spec: "BOX" }); up(); var ins = document.querySelectorAll('[data-k="name"]'); if (ins.length) ins[ins.length - 1].focus() })
  Demo.on("item-del", function (ds) { S.draft.items.splice(+ds.i, 1); up() })
  Demo.on("items-clear", function () { S.draft.items = []; S.draft.files = S.draft.files.filter(function (f) { return !/^제함지시서_/.test(f) }); up(); Demo.toast("물품 목록을 비웠습니다") })
  Demo.on("tpl-menu", function () { S.ui.tplMenu = !S.ui.tplMenu; up() })
  Demo.on("tpl-dl", function (ds) {
    S.ui.tplMenu = false; up()
    var rows = ds.k === "full" ? [["표준제함지시서"], ["업체명", ""], ["사업장", ""], ["프로젝트", ""], [], ["품명", "수량", "L", "W", "H", "사양"], ["예) 감속기 본체", "1", "1800", "1200", "1300", "BOX"]] : [["품명", "수량", "L", "W", "H", "사양"], ["예) 감속기 본체", "1", "1800", "1200", "1300", "BOX"]]
    download(ds.k === "full" ? "표준제함지시서_양식.csv" : "물품목록_양식.csv", rows)
    Demo.toast("양식을 내려받았습니다. 채운 뒤 '엑셀 업로드'로 올리세요")
  })
  Demo.on("upload-open", function () { S.ui.tplMenu = false; S.modal = { type: "upload" }; up() })
  Demo.on("sample", function (ds) { var s = SAMPLES[ds.k]; S.modal = checkRows(s.file, s.rows, s.spec); up() })
  Demo.on("csv-file", function (v, el) {
    var f = el.files && el.files[0]
    if (!f) return
    var r = new FileReader()
    r.onload = function () {
      var rows = parseCsv(String(r.result || ""))
      if (!rows.length) return Demo.toast("읽을 수 있는 행이 없습니다. 품명,수량,L,W,H,사양 순서인지 확인하세요")
      S.modal = checkRows(f.name, rows, ""); up()
    }
    r.readAsText(f, "utf-8")
  })
  Demo.on("parse-apply", function () {
    var m = S.modal, d = S.draft
    m.ok.forEach(function (x) { d.items.push(Object.assign({}, x.item)) })
    if (!d.spec && m.spec) d.spec = m.spec
    if (d.files.indexOf(m.file) < 0 && d.files.length < 10) d.files.push(m.file)
    log("엑셀 업로드", m.file + " (적용 " + m.ok.length + "건, 제외 " + m.errs.length + "건)")
    S.modal = null; up()
    Demo.toast(m.ok.length + "건을 물품 상세에 넣었습니다" + (m.errs.length ? " (오류 " + m.errs.length + "건 제외)" : ""))
  })
  Demo.on("file-add", function (v, el) {
    var d = S.draft
    Array.prototype.forEach.call(el.files || [], function (f) { if (d.files.length < 10 && d.files.indexOf(f.name) < 0) d.files.push(f.name) })
    up()
  })
  Demo.on("file-del", function (ds) { S.draft.files.splice(+ds.i, 1); up() })
  Demo.on("order-save", function () {
    var d = S.draft
    if (!d.siteId) return Demo.toast("사업장을 선택하세요")
    if (!String(d.project).trim()) return Demo.toast("프로젝트(PJT)를 입력하세요")
    var bad = d.items.findIndex(function (it) { return !String(it.name).trim() || !itemCbm(it) })
    if (bad >= 0) return Demo.toast(bad + 1 + "번 품목의 품명·수량·치수를 확인하세요")
    if (d.showEnd && d.endDate && d.endDate < d.date) return Demo.toast("종료일이 시작일보다 빠릅니다")
    var data = {
      clientId: d.clientId, siteId: d.siteId, project: String(d.project).trim(), date: d.date,
      endDate: d.showEnd && d.endDate && d.endDate !== d.date ? d.endDate : "", allDay: d.allDay, start: d.allDay ? "" : d.start, end: d.showEnd && !d.allDay ? d.end : "",
      author: d.author || "관리자", manager: d.manager, need: Math.max(0, parseInt(d.need, 10) || 0), boxType: d.boxType, spec: d.spec || "-",
      items: d.items.map(function (it) { return { name: String(it.name).trim(), qty: Math.round(Number(it.qty)), L: Number(it.L), W: Number(it.W), H: Number(it.H), spec: it.spec } }), prep: d.prep || "-", files: d.files.slice(),
    }
    var o
    if (d.editingId) { o = order(d.editingId); Object.assign(o, data); log("오더 수정", o.id + " · " + client(o.clientId).name) }
    else { o = Object.assign({ id: mkId(d.date), workers: [], vehicle: "", memo: "", created: stamp() }, data); S.orders.push(o); log("오더 등록", o.id + " · " + client(o.clientId).name) }
    var was = d.editingId
    S.draft = null
    S.ui.date = o.date
    Demo.go("/orders/" + o.id)
    Demo.toast(was ? "작업 지시서를 수정했습니다" : "작업 지시서를 만들었습니다 · 총 " + f3(orderCbm(o)) + " m³, 현황판과 달력에 올라갔습니다")
  })

  // 달력
  Demo.on("cal-prev", function () { S.ui.calMonth = addDays(S.ui.calMonth + "-01", -1).slice(0, 7); up() })
  Demo.on("cal-next", function () { S.ui.calMonth = addDays(S.ui.calMonth + "-01", 32).slice(0, 7); up() })
  Demo.on("cal-today", function () { S.ui.calMonth = TODAY.slice(0, 7); up() })
  Demo.on("cal-client", function (v) { S.ui.calClient = v; up() })
  Demo.on("cal-day", function (ds) { S.modal = { type: "day", date: ds.date }; up() })
  Demo.on("move-order", function (v, el) {
    if (!v) return
    var o = order(el.dataset.id), from = o.date
    moveOrder(o, v)
    log("일정 이동", o.id + " " + from + " → " + v)
    up(); Demo.toast(client(o.clientId).name + " 오더를 " + dayLabel(v) + "로 옮겼습니다")
  })

  // 인력 배정
  function patchAssign() {
    var a = document.getElementById("pool-list"); if (a) a.innerHTML = poolList()
    var b = document.getElementById("card-grid"); if (b) b.innerHTML = cardGrid()
  }
  function assign(oid, wid) {
    var o = order(oid), w = worker(wid)
    if (!o || !w) return
    if (o.workers.indexOf(wid) >= 0) return Demo.toast(w.name + " 님은 이미 이 작업에 배정돼 있습니다")
    var other = assignMap(S.ui.assignDate)[wid]
    o.workers.push(wid)
    log("인력 배정", o.id + " ← " + w.name)
    S.ui.pick = null
    up()
    Demo.toast(w.name + " → " + client(o.clientId).name + (other ? " (다중 배정 " + (other.length + 1) + "건)" : "") + " · " + o.workers.length + "/" + o.need + "명")
  }
  Demo.on("assign-edit", function () {
    S.ui.edit = !S.ui.edit; S.ui.pick = null
    if (!S.ui.edit) { log("배정 저장", S.ui.assignDate); Demo.toast("배정을 저장했습니다. 현황판에 바로 반영됩니다") }
    up()
  })
  Demo.on("pick-worker", function (ds) { S.ui.pick = S.ui.pick === ds.id ? null : ds.id; patchAssign() })
  Demo.on("drop-card", function (ds) {
    if (!S.ui.edit) return Demo.toast("오른쪽 위 '수정'을 눌러야 배정을 바꿀 수 있습니다")
    if (!S.ui.pick) return Demo.toast("왼쪽에서 작업자를 먼저 누르거나 끌어다 놓으세요")
    assign(ds.id, S.ui.pick)
  })
  Demo.on("unassign", function (ds) { var o = order(ds.oid); o.workers = o.workers.filter(function (x) { return x !== ds.wid }); log("배정 해제", o.id + " ✕ " + worker(ds.wid).name); up() })
  Demo.on("crew-copy", function (ds) { if (!S.ui.edit) return Demo.toast("'수정'을 누른 뒤 쓸 수 있습니다"); var o = order(ds.id); if (!o.workers.length) return Demo.toast("복사할 인원이 없습니다"); S.ui.clip = o.workers.slice(); up(); Demo.toast(o.workers.length + "명을 복사했습니다. 다른 카드에서 '붙여넣기'") })
  Demo.on("crew-paste", function (ds) {
    if (!S.ui.edit) return Demo.toast("'수정'을 누른 뒤 쓸 수 있습니다")
    if (!S.ui.clip) return Demo.toast("먼저 다른 카드에서 '복사'를 누르세요")
    var o = order(ds.id), n = 0
    S.ui.clip.forEach(function (id) { if (o.workers.indexOf(id) < 0) { o.workers.push(id); n++ } })
    log("인력 붙여넣기", o.id + " +" + n + "명"); up(); Demo.toast(n + "명을 붙여 넣었습니다")
  })
  Demo.on("pool-tab", function (ds) { S.ui.poolTab = ds.t; up() })
  Demo.on("pool-ext", function () { S.ui.poolTab = S.ui.poolTab === "ext" ? "all" : "ext"; up() })
  Demo.on("pool-skill", function () { S.ui.sortSkill = !S.ui.sortSkill; up() })
  Demo.on("only-free", function (v, el) { S.ui.onlyFree = el.checked; patchAssign() })
  Demo.on("pool-q", function (v) { S.ui.poolQ = v; var a = document.getElementById("pool-list"); if (a) a.innerHTML = poolList() })
  Demo.on("card-q", function (v) { S.ui.cardQ = v; var b = document.getElementById("card-grid"); if (b) b.innerHTML = cardGrid() })

  // 끌어다 놓기 (달력 업체 줄, 배정 작업자)
  var drag = null
  document.addEventListener("dragstart", function (ev) {
    var el = ev.target.closest && ev.target.closest("[data-drag]")
    if (!el) return
    drag = Object.assign({}, el.dataset)
    ev.dataTransfer.effectAllowed = "move"
    try { ev.dataTransfer.setData("text/plain", el.dataset.drag) } catch (x) {}
  })
  document.addEventListener("dragover", function (ev) {
    if (!drag) return
    var z = ev.target.closest && ev.target.closest("[data-drop]")
    if (!z) return
    if ((drag.drag === "cal" && z.dataset.drop === "cal") || (drag.drag === "worker" && z.dataset.drop === "card")) { ev.preventDefault(); z.classList.add("demo-drop-on") }
  })
  document.addEventListener("dragleave", function (ev) {
    var z = ev.target.closest && ev.target.closest("[data-drop]")
    if (z && !z.contains(ev.relatedTarget)) z.classList.remove("demo-drop-on")
  })
  document.addEventListener("drop", function (ev) {
    var z = ev.target.closest && ev.target.closest("[data-drop]")
    var dg = drag
    drag = null
    if (!z || !dg) return
    ev.preventDefault()
    z.classList.remove("demo-drop-on")
    if (dg.drag === "cal" && z.dataset.drop === "cal") {
      var to = z.dataset.dropdate
      if (to === dg.date) return
      var dlt = diffDays(dg.date, to), list = ordersOn(dg.date, dg.client)
      list.forEach(function (o) { moveOrder(o, addDays(o.date, dlt)) })
      log("일정 이동", client(dg.client).name + " " + list.length + "건 " + dg.date + " → " + to)
      up(); Demo.toast(client(dg.client).name + " " + list.length + "건을 " + dayLabel(to) + "로 옮겼습니다")
    } else if (dg.drag === "worker" && z.dataset.drop === "card") {
      if (!S.ui.edit) return Demo.toast("오른쪽 위 '수정'을 눌러야 배정을 바꿀 수 있습니다")
      assign(z.dataset.id, dg.id)
    }
  })
  document.addEventListener("dragend", function () { drag = null; document.querySelectorAll(".demo-drop-on").forEach(function (x) { x.classList.remove("demo-drop-on") }) })

  // 차량 배차
  Demo.on("set-vehicle", function (v, el) {
    var o = order(el.dataset.id), vh = vehicle(v)
    o.vehicle = v
    log("차량 배차", o.id + " ← " + (vh ? vh.name : "해제"))
    up(); Demo.toast(vh ? client(o.clientId).name + "에 " + vh.name + " 배차" : "배차를 풀었습니다")
  })

  // 자원·시스템
  Demo.on("site-add", function (v) {
    var c = client(v.cid)
    c.sites.push({ id: "s" + Date.now(), name: v.name.trim(), addr: (v.addr || "").trim() || "주소 미입력" })
    log("사업장 추가", c.name + " · " + v.name.trim()); up(); Demo.toast(c.name + "에 사업장을 추가했습니다")
  })
  Demo.on("client-add", function (v) {
    var id = "c" + Date.now()
    S.clients.push({ id: id, name: v.name.trim(), contact: (v.contact || "").trim() || "-", sites: [{ id: "s" + Date.now(), name: v.site.trim(), addr: (v.addr || "").trim() || "주소 미입력" }] })
    log("업체 등록", v.name.trim()); up(); Demo.toast(v.name.trim() + " 업체를 등록했습니다. 신규 오더 작성에서 고를 수 있습니다")
  })
  Demo.on("worker-tab", function (ds) { S.ui.workerTab = ds.t; up() })
  Demo.on("worker-add", function (v) {
    var n = S.workers.length + 1
    S.workers.push({ id: "w" + Date.now(), name: v.name.trim(), type: v.type, tags: [v.tag], skill: Math.max(1, Math.min(10, parseInt(v.skill, 10) || 5)), phone: "010-****-" + pd(n * 13 % 100) + pd(n * 7 % 100), active: true })
    log("작업자 등록", v.name.trim()); up(); Demo.toast(v.name.trim() + " 님을 등록했습니다. 인력 배정 화면에 바로 나옵니다")
  })
  Demo.on("worker-toggle", function (ds) { var w = worker(ds.id); w.active = !w.active; up() })
  Demo.on("worker-del", function (ds) {
    var w = worker(ds.id)
    S.workers = S.workers.filter(function (x) { return x.id !== ds.id })
    S.orders.forEach(function (o) { o.workers = o.workers.filter(function (x) { return x !== ds.id }) })
    log("작업자 삭제", w.name); up(); Demo.toast(w.name + " 님을 지웠습니다")
  })
  Demo.on("vehicle-add", function (v) {
    S.vehicles.push({ id: "v" + Date.now(), name: v.name.trim(), kind: v.kind.trim(), cap: Math.max(0, parseInt(v.cap, 10) || 0), status: "운행 가능" })
    log("차량 등록", v.name.trim()); up(); Demo.toast(v.name.trim() + " 차량을 등록했습니다")
  })
  Demo.on("vehicle-toggle", function (ds) { var v = vehicle(ds.id); v.status = v.status === "운행 가능" ? "정비 중" : "운행 가능"; log("차량 상태", v.name + " → " + v.status); up() })
  Demo.on("user-add", function (v) {
    if (S.users.some(function (u) { return u.id === v.id.trim() })) return Demo.toast("이미 있는 아이디입니다")
    S.users.push({ id: v.id.trim(), name: v.name.trim(), role: v.role, last: "", active: true })
    log("계정 추가", v.id.trim()); up(); Demo.toast("계정을 추가했습니다")
  })
  Demo.on("user-role", function (v, el) { var u = S.users.find(function (x) { return x.id === el.dataset.id }); u.role = v; log("권한 변경", u.id + " → " + v); Demo.toast(u.name + " 권한을 " + v + "(으)로 바꿨습니다") })
  Demo.on("user-toggle", function (ds) { var u = S.users.find(function (x) { return x.id === ds.id }); u.active = !u.active; up() })
  Demo.on("log-q", function (v) { S.ui.logQ = v; var el = document.getElementById("log-table"); if (el) el.innerHTML = logTable(S.logs.filter(function (l) { return !v || (l.user + l.action + l.target).indexOf(v) >= 0 })) })

  Demo.mount(render)
  Demo.banner()
})()
