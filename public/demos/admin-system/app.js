/* (가상) 누리모바일, 통신 대리점 본사 관리자 시스템 체험판
 * 모든 이름·연락처·금액·계좌는 지어낸 가상 데이터이며, 브라우저 메모리에만 있다.
 */
;(function () {
  var E = Demo.esc
  var N = Demo.num

  // ───────── 아이콘 (선 아이콘) ─────────
  var P = {
    dash: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
    branch: '<path d="M3 21h18"/><path d="M5 21V8l7-4 7 4v13"/><path d="M9 21v-5h6v5"/><path d="M9 10h.01M15 10h.01M9 13h.01M15 13h.01"/>',
    doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6M9 9h2"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    dollar: '<path d="M12 2v20"/><path d="M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    wallet: '<path d="M19 7V5a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-4a2 2 0 0 0 0 4h4v-4"/><path d="M3 6v13a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-3"/>',
    settle: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="m9 15 2 2 4-4"/>',
    board: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    filter: '<path d="M3 4h18l-7 8.5V19l-4 2v-8.5z"/>',
    trash: '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/>',
    download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    pin: '<path d="M12 17v5"/><path d="M9 10.8V4h6v6.8l3 3.2H6z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    swap: '<path d="M7 16H3l4 4M3 16l4-4"/><path d="M17 8h4l-4-4M21 8l-4 4"/><path d="M3 16h14M21 8H7"/>',
  }
  function ic(n, s, cls) {
    s = s || 18
    return '<svg class="' + (cls || "") + '" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + P[n] + "</svg>"
  }

  // ───────── 가상 데이터 ─────────
  var seed = 7
  function rnd() {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
  function pick(a) {
    return a[Math.floor(rnd() * a.length)]
  }
  function dot(d) {
    return d ? d.replace(/-/g, ". ") + "." : "-"
  }
  var TODAY = Demo.day(0)
  var MONTH = TODAY.slice(0, 7)
  function monthOf(offsetMonths) {
    var d = new Date()
    d.setDate(1)
    d.setMonth(d.getMonth() + offsetMonths)
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0")
  }

  var BR = [
    { id: "b1", name: "마포공덕지점", region: "서울", manager: "표승민", phone: "010-0000-1101", status: "운영중", opened: "2021-03-02", memo: "본사 직영" },
    { id: "b2", name: "일산호수지점", region: "경기", manager: "석다온", phone: "010-0000-1102", status: "운영중", opened: "2021-09-13", memo: "" },
    { id: "b3", name: "청주성안지점", region: "충북", manager: "여태린", phone: "010-0000-1103", status: "운영중", opened: "2022-04-04", memo: "" },
    { id: "b4", name: "전주객사지점", region: "전북", manager: "공하람", phone: "010-0000-1104", status: "운영중", opened: "2022-11-21", memo: "" },
    { id: "b5", name: "포항죽도지점", region: "경북", manager: "탁윤재", phone: "010-0000-1105", status: "운영중", opened: "2023-06-01", memo: "" },
    { id: "b6", name: "춘천명동지점", region: "강원", manager: "맹소율", phone: "010-0000-1106", status: "운영중", opened: "2024-02-19", memo: "" },
    { id: "b7", name: "세종나성지점", region: "세종", manager: "변지환", phone: "010-0000-1107", status: "준비중", opened: "2026-11-02", memo: "개점 준비" },
  ]
  var PARTNERS = [
    { name: "다온폰마트", br: "b1", sellers: ["봉채윤", "국도현"] },
    { name: "새벽통신", br: "b1", sellers: ["반서율"] },
    { name: "바른모바일", br: "b2", sellers: ["감태민", "모하윤"] },
    { name: "미소모바일", br: "b2", sellers: ["길준혁"] },
    { name: "초록텔레콤", br: "b3", sellers: ["엄다솔", "소유찬"] },
    { name: "온누리폰", br: "b4", sellers: ["도예슬"] },
    { name: "별빛통신", br: "b5", sellers: ["진시후", "채로아"] },
    { name: "하늘폰샵", br: "b6", sellers: ["하가람"] },
  ]
  var SUR = ["표", "석", "여", "공", "탁", "맹", "변", "봉", "국", "반", "감", "모", "길", "엄", "소", "도", "진", "채", "남", "우", "구", "노", "민", "양", "원", "지", "차", "방", "류", "함", "편", "옥", "인", "제", "추", "어", "사", "피", "경", "명", "위", "시", "목", "용", "견"]
  var GIV = ["가온", "나래", "다빈", "라온", "마루", "보람", "새론", "아름", "우람", "이든", "재희", "찬솔", "태경", "한결", "해솔", "휘연", "규리", "누리", "단비", "로운", "미르", "별하", "솔비", "시온", "여름", "윤슬", "은찬", "지오", "초롱", "하늬", "겨레", "나린", "도담", "바다", "온유", "다올", "슬찬", "예찬", "가람", "하랑", "봄이", "새힘", "아라", "늘봄", "든솔"]
  var MODELS = ["갤럭시 S25 256GB", "갤럭시 S25 울트라 512GB", "아이폰 16 128GB", "아이폰 16 프로 256GB", "갤럭시 Z 플립6 256GB", "갤럭시 Z 폴드6 512GB", "갤럭시 A36 128GB", "아이폰 16e 128GB"]
  var PLANS_M = ["5G 프리미엄", "5G 스탠다드", "5G 슬림", "LTE 실속"]
  var WIRED = ["기가 인터넷 500M", "기가 인터넷+TV 결합", "인터넷 100M"]
  var BASES = [172000, 205000, 234000, 251000, 268000, 186000]
  var ADDS = [0, 0, 15000, 25000, 12000]
  var DEDS = [0, 0, 0, 7000, 13000]

  function partnerOf(name) {
    for (var i = 0; i < PARTNERS.length; i++) if (PARTNERS[i].name === name) return PARTNERS[i]
    return null
  }
  function brName(id) {
    for (var i = 0; i < S.branches.length; i++) if (S.branches[i].id === id) return S.branches[i].name
    return "-"
  }

  var S = {
    role: "hq",
    logged: true,
    collapsed: false,
    navOpen: false,
    modal: null,
    pop: null,
    q: {},
    f: {},
    sel: {},
    trash: [],
    settled: {},
    seq: 1000,
  }
  S.branches = BR

  // 개통 요청
  S.acts = []
  ;(function () {
    var statuses = []
    var i
    for (i = 0; i < 24; i++) statuses.push("wait")
    for (i = 0; i < 5; i++) statuses.push("draft")
    for (i = 0; i < 31; i++) statuses.push("done")
    for (i = 0; i < 3; i++) statuses.push("cancel")
    statuses.forEach(function (st, k) {
      var p = PARTNERS[k % PARTNERS.length]
      var wired = rnd() < 0.18
      var off = st === "done" ? -Math.floor(k * 1.3) % 70 : -Math.floor(rnd() * 9)
      if (st === "done" && k % 3 === 0) off = -Math.floor(rnd() * 12)
      S.acts.push({
        id: "a" + (k + 1),
        no: "NR-" + String(2601 + k),
        customer: SUR[k % SUR.length] + GIV[(k * 7) % GIV.length],
        phone: "010-0000-" + String(2100 + k * 37).slice(-4),
        br: p.br,
        partner: p.name,
        seller: p.sellers[k % p.sellers.length],
        line: wired ? "유선" : "무선",
        model: wired ? "-" : pick(MODELS),
        plan: wired ? pick(WIRED) : pick(PLANS_M),
        openDate: Demo.day(off),
        base: pick(BASES),
        add: pick(ADDS),
        ded: pick(DEDS),
        status: st,
        reqDate: Demo.day(off - 1),
        approvedAt: st === "done" ? Demo.day(off) : "",
        reject: "",
      })
    })
    S.acts[24].reject = "개통일과 서류 일자가 다릅니다. 확인 후 다시 올려 주세요."
  })()

  // 결재(출금 요청)
  var TYPES = ["장려금출금", "프로모션정산", "운영비출금"]
  var PURPOSES = ["거래처 정산 지급", "리베이트 선지급", "장비 비용 보전", "프로모션 정산", "특판 보상 지급"]
  var BANKS = ["국민", "신한", "하나", "우리", "농협", "기업"]
  var AMTS = [143000, 187500, 212000, 274000, 318000, 96000, 159000, 241000, 288000, 352000, 127000, 203000, 166000, 309000, 238500]
  S.pays = []
  ;(function () {
    var done = S.acts.filter(function (a) {
      return a.status === "done"
    })
    for (var k = 0; k < 42; k++) {
      var a = done[k % done.length]
      var st = k < 19 ? "pending" : k < 28 ? "paid" : k < 40 ? "approved" : "rejected"
      var off = -Math.floor((k % 21) * 1.5) - (st === "paid" ? 2 : 0)
      var amt = AMTS[k % AMTS.length]
      S.pays.push({
        id: "p" + (k + 1),
        date: Demo.day(off),
        br: a.br,
        type: TYPES[k % 3],
        purpose: PURPOSES[(k * 3) % PURPOSES.length],
        receiver: a.seller,
        bank: BANKS[k % BANKS.length],
        account: "000-****-" + String(3010 + k * 53).slice(-4),
        amount: amt,
        seller: k % 4 === 0 ? a.seller : "-",
        act: a.id,
        status: st,
        memo: k === 2 ? "계좌 실명 확인 완료" : "",
        approvedAt: st !== "pending" && st !== "rejected" ? Demo.day(off + 1) : "",
        paidAt: st === "paid" ? Demo.day(off + 2) : "",
        paidAmount: st === "paid" ? amt : 0,
      })
    }
    S.pays.sort(function (x, y) {
      return x.date < y.date ? 1 : x.date > y.date ? -1 : 0
    })
  })()

  // 계약서 템플릿 · 계약
  S.templates = [
    { id: "t1", name: "판매점 위탁 판매 계약서", target: "판매점", ver: "v3.2", items: 14, updated: Demo.day(-12), memo: "수수료·정산 주기 조항 포함" },
    { id: "t2", name: "판매자 개인 위탁 계약서", target: "판매자", ver: "v2.0", items: 9, updated: Demo.day(-40), memo: "" },
    { id: "t3", name: "리베이트 지급 약정서", target: "판매점", ver: "v1.4", items: 7, updated: Demo.day(-5), memo: "기본·추가·차감 기준표 첨부" },
    { id: "t4", name: "개인정보 처리 위탁 동의서", target: "판매자", ver: "v1.1", items: 6, updated: Demo.day(-88), memo: "" },
    { id: "t5", name: "단말 재고 위탁 보관 약정", target: "판매점", ver: "v1.0", items: 8, updated: Demo.day(-130), memo: "" },
  ]
  S.contracts = [
    { id: "c1", no: "CT-2026-031", party: "다온폰마트", br: "b1", tpl: "t1", date: Demo.day(-200), end: Demo.day(165), status: "체결" },
    { id: "c2", no: "CT-2026-032", party: "바른모바일", br: "b2", tpl: "t1", date: Demo.day(-150), end: Demo.day(215), status: "체결" },
    { id: "c3", no: "CT-2026-033", party: "엄다솔", br: "b3", tpl: "t2", date: Demo.day(-90), end: Demo.day(275), status: "체결" },
    { id: "c4", no: "CT-2026-034", party: "별빛통신", br: "b5", tpl: "t3", date: Demo.day(-30), end: Demo.day(335), status: "체결" },
    { id: "c5", no: "CT-2026-035", party: "하늘폰샵", br: "b6", tpl: "t1", date: Demo.day(-3), end: Demo.day(362), status: "서명대기" },
    { id: "c6", no: "CT-2026-036", party: "도예슬", br: "b4", tpl: "t4", date: Demo.day(-2), end: Demo.day(363), status: "서명대기" },
    { id: "c7", no: "CT-2025-118", party: "새벽통신", br: "b1", tpl: "t5", date: Demo.day(-400), end: Demo.day(-35), status: "만료" },
  ]

  // 게시판
  S.posts = [
    { id: "n1", cat: "공지", title: "이번 달 단말 리베이트 정책 안내", target: "전체", author: "본사 운영팀", date: Demo.day(-1), views: 214, pin: true, body: "이번 달 무선 개통 리베이트 기본액과 추가·차감 기준을 안내합니다. 세부 기준표는 정책 안내 게시판의 첨부 파일을 확인해 주세요." },
    { id: "n2", cat: "정책 안내", title: "유선 결합 상품 추가 장려금 기준", target: "판매점", author: "본사 정책팀", date: Demo.day(-3), views: 132, pin: true, body: "인터넷+TV 결합 개통 건은 추가 장려금이 붙습니다. 개통 요청 시 유선/무선 구분을 반드시 선택해 주세요." },
    { id: "n3", cat: "공지", title: "개통 요청 시 서류 첨부 기준 변경", target: "전체", author: "본사 운영팀", date: Demo.day(-6), views: 188, pin: false, body: "신분증 사본은 마스킹 처리 후 첨부합니다. 마스킹되지 않은 서류는 반려됩니다." },
    { id: "n4", cat: "자료실", title: "판매점 위탁 판매 계약서 v3.2 배포", target: "지점", author: "본사 운영팀", date: Demo.day(-12), views: 77, pin: false, body: "계약서 템플릿 메뉴에서 새 양식을 내려받을 수 있습니다." },
    { id: "n5", cat: "공지", title: "월말 정산 마감 일정 안내", target: "지점", author: "본사 정산팀", date: Demo.day(-14), views: 95, pin: false, body: "월말 3영업일 전까지 출금 요청을 올려 주세요. 이후 요청은 다음 달 정산으로 넘어갑니다." },
    { id: "n6", cat: "정책 안내", title: "개통취소 처리 절차 정리", target: "전체", author: "본사 정책팀", date: Demo.day(-19), views: 156, pin: false, body: "개통 후 14일 이내 취소 건은 지급된 리베이트가 차감됩니다." },
    { id: "n7", cat: "자료실", title: "출금 요청 시 계좌 확인 요령", target: "지점", author: "본사 정산팀", date: Demo.day(-25), views: 61, pin: false, body: "받는 사람 이름과 예금주가 같은지 확인한 뒤 요청해 주세요." },
    { id: "n8", cat: "공지", title: "신규 판매점 등록 체크리스트", target: "지점", author: "본사 운영팀", date: Demo.day(-31), views: 48, pin: false, body: "사업자등록증, 계약서, 정산 계좌 세 가지가 모두 있어야 등록됩니다." },
    { id: "n9", cat: "정책 안내", title: "고객 연락처 마스킹 기준", target: "전체", author: "본사 보안담당", date: Demo.day(-44), views: 119, pin: false, body: "목록 화면에서는 연락처 가운데 자리를 가립니다. 엑셀 내려받기도 같은 기준을 따릅니다." },
    { id: "n10", cat: "자료실", title: "판매자 교육 자료(개통 요청 작성법)", target: "판매점", author: "본사 교육팀", date: Demo.day(-52), views: 203, pin: false, body: "개통 요청 화면 작성 순서를 그림과 함께 정리했습니다." },
  ]

  // ───────── 권한 ─────────
  var ROLES = {
    hq: { label: "본사 관리자", id: "admin", name: "관리자" },
    branch: { label: "지점 관리자", id: "manager", name: "표승민", br: "b1" },
    store: { label: "판매점 직원", id: "seller", name: "봉채윤", br: "b1", partner: "다온폰마트" },
  }
  var MENUS = [
    { path: "/", label: "대시보드", icon: "dash", roles: ["hq", "branch", "store"] },
    { path: "/branches", label: "지점 관리", icon: "branch", roles: ["hq"] },
    { path: "/templates", label: "계약서 템플릿", icon: "doc", roles: ["hq", "branch"] },
    { path: "/approvals", label: "승인 관리", icon: "check", roles: ["hq", "branch", "store"], badge: "approvals" },
    { path: "/payments", label: "결재 관리", icon: "dollar", roles: ["hq", "branch"], badge: "payments" },
    { path: "/deposits", label: "입금 관리", icon: "wallet", roles: ["hq", "branch"], badge: "deposits" },
    { path: "/settlements", label: "정산 관리", icon: "settle", roles: ["hq", "branch"], badge: "settlements" },
    { path: "/board", label: "게시판 관리", icon: "board", roles: ["hq", "branch", "store"] },
  ]
  function me() {
    return ROLES[S.role]
  }
  function isHQ() {
    return S.role === "hq"
  }
  function canSee(path) {
    for (var i = 0; i < MENUS.length; i++) if (MENUS[i].path === path) return MENUS[i].roles.indexOf(S.role) >= 0
    return false
  }

  // 권한에 맞춘 데이터 범위
  function scopeActs() {
    var r = me()
    return S.acts.filter(function (a) {
      if (a.deleted) return false
      if (S.role === "branch") return a.br === r.br
      if (S.role === "store") return a.partner === r.partner
      return true
    })
  }
  function scopePays() {
    var r = me()
    return S.pays.filter(function (p) {
      if (p.deleted) return false
      if (S.role === "branch") return p.br === r.br
      return true
    })
  }
  function actById(id) {
    for (var i = 0; i < S.acts.length; i++) if (S.acts[i].id === id) return S.acts[i]
    return null
  }
  function payById(id) {
    for (var i = 0; i < S.pays.length; i++) if (S.pays[i].id === id) return S.pays[i]
    return null
  }
  function net(a) {
    return a.base + a.add - a.ded
  }

  // ───────── 정산 계산 ─────────
  function settleGroups(by, month) {
    var map = {}
    var order = []
    function g(key, label, sub) {
      if (!map[key]) {
        map[key] = { key: key, label: label, sub: sub, count: 0, wired: 0, rebate: 0, paid: 0 }
        order.push(key)
      }
      return map[key]
    }
    scopeActs().forEach(function (a) {
      if (a.status !== "done" || a.openDate.slice(0, 7) !== month) return
      var k = by === "branch" ? a.br : by === "partner" ? a.partner : a.seller
      var row = g(k, by === "branch" ? brName(a.br) : by === "partner" ? a.partner : a.seller, by === "branch" ? "" : by === "partner" ? brName(a.br) : a.partner)
      row.count++
      if (a.line === "유선") row.wired++
      row.rebate += net(a)
    })
    scopePays().forEach(function (p) {
      if (p.status !== "paid" || p.paidAt.slice(0, 7) !== month) return
      var a = actById(p.act)
      if (!a) return
      var k = by === "branch" ? a.br : by === "partner" ? a.partner : a.seller
      if (map[k]) map[k].paid += p.paidAmount
    })
    return order.map(function (k) {
      var r = map[k]
      r.due = Math.max(0, r.rebate - r.paid)
      r.done = S.settled[by + "|" + month + "|" + k] || null
      return r
    })
  }

  // ───────── 메뉴 옆 숫자 ─────────
  function counts() {
    var acts = scopeActs()
    var pays = scopePays()
    return {
      approvals: acts.filter(function (a) {
        return a.status === "wait"
      }).length,
      payments: pays.filter(function (p) {
        return p.status === "pending"
      }).length,
      deposits: pays.filter(function (p) {
        return p.status === "approved"
      }).length,
      settlements: settleGroups("branch", MONTH).filter(function (g) {
        return !g.done
      }).length,
    }
  }

  // ───────── 공통 조각 ─────────
  function matchQ(q, fields) {
    if (!q) return true
    q = q.trim().toLowerCase()
    if (!q) return true
    return fields.join(" ").toLowerCase().indexOf(q) >= 0
  }
  function header(title, sub, right) {
    return (
      '<section class="card px-5 sm:px-8 py-6 flex flex-wrap items-center gap-3 justify-between">' +
      '<div><h1 class="text-[22px] sm:text-[26px] font-bold tracking-tight text-[#1b2232]">' + E(title) + "</h1>" +
      '<p class="mt-1.5 text-[14px] sm:text-[15px] text-[#4b5563]">' + E(sub) + "</p></div>" + (right || "") + "</section>"
    )
  }
  function tabs(base, list, cur) {
    return (
      '<div class="flex flex-wrap gap-2">' +
      list
        .map(function (t) {
          return '<a href="#' + base + "?tab=" + t[0] + '" class="tab inline-flex items-center' + (t[0] === cur ? " on" : "") + '">' + E(t[1]) + (t[2] != null ? '<span class="ml-1.5 opacity-70 text-[12px]">' + N(t[2]) + "</span>" : "") + "</a>"
        })
        .join("") +
      "</div>"
    )
  }
  function searchBox(key, ph) {
    return '<label class="srch flex-1 min-w-0">' + ic("search", 18, "text-[#4b5563] shrink-0") + '<input id="q-' + key + '" data-input="q" data-key="' + key + '" value="' + E(S.q[key] || "") + '" placeholder="' + E(ph) + '"></label>'
  }
  function toolBtns(key, opts) {
    opts = opts || {}
    var filterOn = S.f[key] && Object.keys(S.f[key]).some(function (k) {
      return S.f[key][k]
    })
    return (
      '<div class="relative">' +
      '<button class="tool' + (filterOn ? " !border-[#1b2c4f] !text-[#1b2c4f]" : "") + '" data-act="pop" data-pop="' + key + '">' + ic("filter", 17) + "필터" + (filterOn ? '<span class="w-1.5 h-1.5 rounded-full bg-[#2f8de4]"></span>' : "") + ic("down", 15) + "</button>" +
      (S.pop === key ? '<div class="pop-bg" data-act="popclose"></div><div class="pop">' + filterBody(key) + "</div>" : "") +
      "</div>" +
      (opts.noTrash ? "" : '<button class="tool" data-act="trash" data-kind="' + key + '">' + ic("trash", 17) + "휴지통" + (trashOf(key).length ? '<span class="text-[12px] text-[#d71f1f]">' + trashOf(key).length + "</span>" : "") + "</button>") +
      '<button class="tool" data-act="excel" data-kind="' + key + '">' + ic("download", 17) + "엑셀 다운로드" + (opts.caret ? ic("down", 15) : "") + "</button>"
    )
  }
  function selectEl(name, list, cur, extra) {
    return (
      '<select class="inp" name="' + name + '" ' + (extra || "") + ">" +
      list
        .map(function (o) {
          var v = typeof o === "string" ? o : o[0]
          var l = typeof o === "string" ? o : o[1]
          return '<option value="' + E(v) + '"' + (v === cur ? " selected" : "") + ">" + E(l) + "</option>"
        })
        .join("") +
      "</select>"
    )
  }
  function brOptions(all) {
    var list = S.branches
      .filter(function (b) {
        return !b.deleted
      })
      .map(function (b) {
        return [b.id, b.name]
      })
    return all ? [["", "전체 지점"]].concat(list) : list
  }
  function filterSelect(key, field, list) {
    var cur = (S.f[key] && S.f[key][field]) || ""
    return '<select class="inp" data-change="filter" data-key="' + key + '" data-field="' + field + '">' + list.map(function (o) {
      return '<option value="' + E(o[0]) + '"' + (o[0] === cur ? " selected" : "") + ">" + E(o[1]) + "</option>"
    }).join("") + "</select>"
  }
  function filterBody(key) {
    var h = '<p class="text-[13px] font-bold mb-2">조건으로 추리기</p><div class="space-y-2">'
    if (key === "approvals" || key === "payments" || key === "deposits") {
      if (isHQ()) h += filterSelect(key, "br", brOptions(true))
    }
    if (key === "approvals") h += filterSelect(key, "line", [["", "유선/무선 전체"], ["무선", "무선"], ["유선", "유선"]])
    if (key === "approvals" && S.role !== "store") h += filterSelect(key, "partner", [["", "전체 판매점"]].concat(PARTNERS.filter(function (p) { return isHQ() || p.br === me().br }).map(function (p) { return [p.name, p.name] })))
    if (key === "payments") h += filterSelect(key, "type", [["", "전체 유형"]].concat(TYPES.map(function (t) { return [t, t] })))
    if (key === "payments") h += filterSelect(key, "purpose", [["", "전체 용도"]].concat(PURPOSES.map(function (t) { return [t, t] })))
    if (key === "branches") h += filterSelect(key, "region", [["", "전체 지역"]].concat(["서울", "경기", "충북", "전북", "경북", "강원", "세종"].map(function (t) { return [t, t] })))
    if (key === "board") h += filterSelect(key, "target", [["", "전체 대상"], ["전체", "전체"], ["지점", "지점"], ["판매점", "판매점"]])
    if (key === "templates") h += filterSelect(key, "target", [["", "전체 대상"], ["판매점", "판매점"], ["판매자", "판매자"]])
    h += '</div><div class="flex justify-end gap-2 mt-3"><button class="btn btn-white" data-act="filterReset" data-key="' + key + '">초기화</button><button class="btn btn-navy" data-act="popclose">닫기</button></div>'
    return h
  }
  function fval(key, field) {
    return (S.f[key] && S.f[key][field]) || ""
  }
  function trashOf(kind) {
    return S.trash.filter(function (t) {
      return t.kind === kind
    })
  }
  function selSet(key) {
    if (!S.sel[key]) S.sel[key] = {}
    return S.sel[key]
  }
  function selCount(key, rows) {
    var s = selSet(key)
    return rows.filter(function (r) {
      return s[r.id]
    }).length
  }
  function empty(cols, msg) {
    return '<tr><td colspan="' + cols + '" class="!py-14 text-center text-[#8a93a3] !whitespace-normal">' + E(msg || "조건에 맞는 항목이 없습니다.") + "</td></tr>"
  }

  // 상태 표시
  var ACT_ST = { draft: ["작성중", "st-draft"], wait: ["대기", "st-wait"], done: ["완료", "st-done"], cancel: ["취소", "st-cancel"] }
  function actBadge(a) {
    var s = ACT_ST[a.status]
    return '<span class="st ' + s[1] + '">' + s[0] + "</span>" + (a.status === "draft" && a.reject ? ' <span class="st st-red ml-1">반려됨</span>' : "")
  }
  var TYPE_PILL = { 장려금출금: "pill-purple", 프로모션정산: "pill-blue", 운영비출금: "pill-green" }
  function payBadge(p) {
    if (p.status === "paid") return '<span class="pill pill-green">입금완료</span>'
    if (p.status === "rejected") return '<span class="pill border-[#f2b1b1] bg-[#fff1f1] text-[#c42020]">반려</span>'
    return '<span class="pill pill-blue">입금중</span>'
  }

  // ───────── 레이아웃 ─────────
  function sidebar(path) {
    var c = counts()
    var r = me()
    var items = MENUS.filter(function (m) {
      return m.roles.indexOf(S.role) >= 0
    })
      .map(function (m) {
        var on = m.path === path
        var b = m.badge ? c[m.badge] : 0
        return (
          '<a href="#' + m.path + '" data-act="nav" data-path="' + m.path + '" title="' + E(m.label) + '" class="sb-item' + (on ? " on" : "") + ' flex items-center gap-3 h-[46px] px-4 text-[16px]">' +
          ic(m.icon, 21, "shrink-0") + '<span class="sb-text flex-1">' + E(m.label) + "</span>" + (b ? '<span class="sb-badge">' + N(b) + "</span>" : "") + "</a>"
        )
      })
      .join("")
    return (
      '<aside class="sb fixed z-50 inset-y-0 left-0 flex flex-col">' +
      '<div class="sb-brand flex items-center gap-3 px-4 h-[76px] border-b border-white/15 shrink-0">' +
      '<div class="w-[44px] h-[44px] shrink-0 rounded-md border border-white/40 bg-white/5 flex items-center justify-center">' + ic("shield", 24) + "</div>" +
      '<div class="sb-text min-w-0 flex-1"><div class="text-[17px] font-bold leading-tight">누리모바일</div><div class="text-[13px] text-white/75 mt-0.5">Enterprise Console</div></div>' +
      '<button class="sb-text hidden lg:inline-flex w-7 h-7 items-center justify-center rounded border border-white/40 hover:bg-white/10" data-act="collapse" aria-label="메뉴 접기">' + ic("left", 16) + "</button>" +
      '<button class="lg:hidden w-8 h-8 inline-flex items-center justify-center" data-act="navclose" aria-label="메뉴 닫기">' + ic("x", 20) + "</button>" +
      "</div>" +
      '<nav class="flex-1 overflow-y-auto px-2.5 py-4 space-y-1">' + items + "</nav>" +
      (S.collapsed ? '<button class="hidden lg:flex mx-auto mb-3 w-9 h-9 items-center justify-center rounded border border-white/30 hover:bg-white/10 rotate-180" data-act="collapse" aria-label="메뉴 펼치기">' + ic("left", 16) + "</button>" : "") +
      '<div class="border-t border-white/15 px-2.5 pt-5 pb-5 shrink-0">' +
      '<div class="sb-user px-3"><div class="text-[13px] text-white/75">로그인 사용자</div><div class="text-[17px] font-bold mt-1.5">' + E(r.label === "본사 관리자" ? r.name : r.name + " · " + r.label) + '</div><div class="text-[14px] text-white/75 mt-0.5">' + E(r.id) + "</div>" +
      '<label class="block mt-3"><span class="text-[12px] text-white/60">권한 전환 (체험용)</span><select class="mt-1 w-full h-9 rounded bg-white/10 border border-white/25 text-[13px] px-2 text-white" data-change="role">' +
      ["hq", "branch", "store"].map(function (k) {
        return '<option class="text-black" value="' + k + '"' + (k === S.role ? " selected" : "") + ">" + E(ROLES[k].label) + "</option>"
      }).join("") +
      "</select></label></div>" +
      '<button class="sb-logout mt-4 w-full h-[46px] rounded-md border border-white/30 flex items-center gap-3 px-4 text-[15px] font-semibold hover:bg-white/10" data-act="logout" title="로그아웃">' + ic("logout", 19) + '<span class="sb-text">로그아웃</span></button>' +
      "</div></aside>"
    )
  }
  function topbar() {
    return (
      '<div class="lg:hidden sticky top-0 z-30 bg-[#14274b] text-white flex items-center gap-3 px-4 h-14">' +
      '<button class="w-9 h-9 -ml-1 inline-flex items-center justify-center" data-act="navopen" aria-label="메뉴 열기">' + ic("menu", 22) + "</button>" +
      '<span class="font-bold">누리모바일</span><span class="text-[12px] text-white/70">Enterprise Console</span>' +
      '<span class="ml-auto text-[12px] bg-white/15 rounded px-2 py-1">' + E(me().label) + "</span></div>"
    )
  }

  // ───────── 화면: 대시보드 ─────────
  function viewDash() {
    var acts = scopeActs()
    var pays = scopePays()
    var c = counts()
    var monthDone = acts.filter(function (a) {
      return a.status === "done" && a.openDate.slice(0, 7) === MONTH
    })
    var draft = acts.filter(function (a) {
      return a.status === "draft"
    }).length
    var pendAmt = pays.filter(function (p) {
      return p.status === "pending"
    }).reduce(function (s, p) {
      return s + p.amount
    }, 0)
    var paidMonth = pays.filter(function (p) {
      return p.status === "paid" && p.paidAt.slice(0, 7) === MONTH
    })
    var r = me()
    var title = isHQ() ? "본사 운영 대시보드" : S.role === "branch" ? brName(r.br) + " 대시보드" : r.partner + " 대시보드"
    var sub = isHQ() ? "전 지점의 개통 승인부터 정산까지 오늘 처리할 일을 한눈에 확인합니다." : S.role === "branch" ? "우리 지점의 개통 요청·출금 요청·정산 현황입니다." : "우리 판매점이 올린 개통 요청의 진행 상황입니다."

    function kpi(label, val, unit, note, href) {
      return (
        '<a href="#' + href + '" class="card block px-5 py-4 hover:border-[#9fb3d6] transition">' +
        '<div class="text-[14px] font-semibold text-[#4b5563]">' + E(label) + "</div>" +
        '<div class="mt-2 flex items-baseline gap-1"><span class="text-[30px] font-bold text-[#1b2c4f] tabular-nums">' + E(val) + '</span><span class="text-[15px] font-semibold text-[#1b2c4f]">' + E(unit) + "</span></div>" +
        '<div class="mt-1 text-[13px] text-[#6b7280]">' + E(note) + "</div></a>"
      )
    }
    var k = ""
    if (S.role === "store") {
      k += kpi("작성중", N(draft), "건", "아직 제출하지 않은 요청", "/approvals?tab=draft")
      k += kpi("승인 대기", N(c.approvals), "건", "본사 검토 중", "/approvals?tab=wait")
      k += kpi("이번 달 승인 완료", N(monthDone.length), "건", "리베이트 " + N(monthDone.reduce(function (s, a) { return s + net(a) }, 0)) + "원", "/approvals?tab=done")
      k += kpi("개통취소", N(acts.filter(function (a) { return a.status === "cancel" }).length), "건", "누적", "/approvals?tab=cancel")
    } else {
      k += kpi("승인 대기", N(c.approvals), "건", isHQ() ? "본사 검토가 필요한 개통" : "본사 검토 중인 개통", "/approvals?tab=wait")
      k += kpi("결재 대기", N(c.payments), "건", N(pendAmt) + "원 출금 요청", "/payments?tab=pending")
      k += kpi("입금 대기", N(c.deposits), "건", "결재 끝, 송금 확인 전", "/deposits")
      k += kpi("정산 대기", N(c.settlements), "곳", "이번 달 지점별 묶음", "/settlements")
    }

    // 다섯 단계 흐름
    var steps = [
      ["1", "개통 요청", "판매점이 고객·개통일·유선/무선·판매자를 올림", "승인 대기", c.approvals, "/approvals?tab=wait"],
      ["2", "본사 승인", "리베이트 기본액 + 추가 − 차감을 확인하고 승인 또는 반려", "승인 완료", monthDone.length, "/approvals?tab=done"],
      ["3", "출금 요청", "지점이 용도·받는 사람·계좌·금액을 적어 결재 올림", "입금중", c.payments, "/payments?tab=pending"],
      ["4", "결재와 입금", "본사가 승인하면 입금 관리로 넘어가고, 입금이 끝나면 상태가 바뀜", "입금 완료", paidMonth.length, "/deposits?tab=paid"],
      ["5", "정산", "지점·판매점·판매자별로 묶어서 정산", "정산 관리", c.settlements, "/settlements"],
    ]
    if (S.role === "store") steps = steps.slice(0, 2)
    var flow =
      '<section class="card"><div class="px-5 sm:px-6 pt-5 pb-3 flex items-center justify-between"><h2 class="text-[18px] font-bold">개통 한 건의 흐름</h2><span class="text-[13px] text-[#6b7280]">' + E(dot(TODAY)) + " 기준 · 이번 달</span></div>" +
      '<div class="px-4 sm:px-6 pb-5 space-y-2.5">' +
      steps
        .map(function (s, i) {
          var last = i === steps.length - 1
          return (
            '<a href="#' + s[5] + '" class="flex items-center gap-3 sm:gap-4 border border-[#e3e7ee] rounded-lg px-3 sm:px-4 py-3 hover:bg-[#f8fafc]">' +
            '<span class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1f3a63] text-white flex items-center justify-center font-semibold shrink-0">' + s[0] + "</span>" +
            '<div class="min-w-0 flex-1"><div class="font-bold text-[15px] sm:text-[16px]">' + E(s[1]) + '</div><div class="text-[13px] text-[#6b7280] truncate">' + E(s[2]) + "</div></div>" +
            '<span class="shrink-0 w-[92px] sm:w-[150px] h-10 rounded-md flex items-center justify-center gap-2 text-[13px] sm:text-[14px] font-semibold ' + (last ? "bg-[#1f3a63] text-white" : "bg-[#f0f2f5] text-[#1f2633]") + '">' + E(s[3]) + '<span class="tabular-nums ' + (last ? "text-white/80" : "text-[#2f8de4]") + '">' + N(s[4]) + "</span></span></a>"
          )
        })
        .join("") +
      "</div></section>"

    // 승인 대기 최근
    var waiting = acts.filter(function (a) {
      return a.status === "wait"
    }).slice(0, 6)
    var recent =
      '<section class="card"><div class="px-5 sm:px-6 pt-5 pb-3 flex items-center justify-between"><h2 class="text-[18px] font-bold">승인 대기 최근 요청</h2><a class="text-[13px] link" href="#/approvals?tab=wait">전체 보기</a></div>' +
      '<div class="scroll-x"><table class="tbl"><thead><tr><th>고객정보</th><th>지점</th><th>판매점 · 판매자</th><th class="num">리베이트</th><th>요청일</th>' + (isHQ() ? "<th>관리</th>" : "<th>상태</th>") + "</tr></thead><tbody>" +
      (waiting.length
        ? waiting
            .map(function (a) {
              return (
                "<tr><td><button class='font-bold link' data-act='actView' data-id='" + a.id + "'>" + E(a.customer) + "</button></td><td>" + E(brName(a.br)) + "</td><td>" + E(a.partner + " · " + a.seller) + "</td><td class='num font-semibold'>" + N(net(a)) + "원</td><td>" + E(dot(a.reqDate)) + "</td><td>" +
                (isHQ() ? "<div class='flex gap-1.5'><button class='btn btn-navy' data-act='approve' data-id='" + a.id + "'>승인</button><button class='btn btn-redline' data-act='reject' data-id='" + a.id + "'>반려</button></div>" : actBadge(a)) +
                "</td></tr>"
              )
            })
            .join("")
        : empty(6, "승인 대기 요청이 없습니다.")) +
      "</tbody></table></div></section>"

    // 지점별(또는 판매점별) 이번 달 개통
    var groups = settleGroups(isHQ() ? "branch" : S.role === "branch" ? "partner" : "seller", MONTH)
    var max = Math.max.apply(null, [1].concat(groups.map(function (g) { return g.count })))
    groups.sort(function (a, b) {
      return b.count - a.count
    })
    var bars =
      '<section class="card"><div class="px-5 sm:px-6 pt-5 pb-3"><h2 class="text-[18px] font-bold">' + (isHQ() ? "지점별" : S.role === "branch" ? "판매점별" : "판매자별") + ' 이번 달 승인 완료</h2></div><div class="px-5 sm:px-6 pb-5 space-y-3">' +
      (groups.length
        ? groups
            .map(function (g) {
              return (
                '<div><div class="flex justify-between text-[13px] mb-1"><span class="font-semibold">' + E(g.label) + '</span><span class="text-[#4b5563] tabular-nums">' + N(g.count) + "건 · " + N(g.rebate) + "원</span></div>" +
                '<div class="h-2.5 rounded-full bg-[#eef1f5] overflow-hidden"><div class="h-full rounded-full bg-[#2f6fc0]" style="width:' + Math.round((g.count / max) * 100) + '%"></div></div></div>'
              )
            })
            .join("")
        : '<p class="text-[14px] text-[#8a93a3] py-6 text-center">이번 달 승인 완료 건이 없습니다.</p>') +
      "</div></section>"

    var notices = S.posts.filter(function (p) {
      return !p.deleted && visiblePost(p)
    }).sort(postSort).slice(0, 5)
    var board =
      '<section class="card"><div class="px-5 sm:px-6 pt-5 pb-3 flex items-center justify-between"><h2 class="text-[18px] font-bold">최근 공지 · 정책</h2><a class="text-[13px] link" href="#/board">게시판</a></div><ul class="px-5 sm:px-6 pb-4">' +
      notices
        .map(function (p) {
          return '<li class="flex items-center gap-2 py-2.5 border-b border-[#eceff3] last:border-0"><span class="pill pill-gray !h-6 !text-[12px] shrink-0">' + E(p.cat) + '</span><button class="flex-1 min-w-0 text-left truncate text-[14px] hover:underline" data-act="postView" data-id="' + p.id + '">' + (p.pin ? '<span class="text-[#d71f1f] font-semibold mr-1">[필독]</span>' : "") + E(p.title) + '</button><span class="text-[12px] text-[#8a93a3] shrink-0">' + E(dot(p.date)) + "</span></li>"
        })
        .join("") +
      "</ul></section>"

    var right = S.role === "hq" ? "" : '<span class="pill pill-blue">' + E(me().label) + " 화면</span>"
    return (
      header(title, sub, right) +
      '<div class="grid grid-cols-2 xl:grid-cols-4 gap-3">' + k + "</div>" +
      '<div class="grid grid-cols-1 xl:grid-cols-[1.25fr_1fr] gap-3">' + flow + bars + "</div>" +
      '<div class="grid grid-cols-1 xl:grid-cols-[1.4fr_1fr] gap-3">' + recent + board + "</div>"
    )
  }

  // ───────── 화면: 지점 관리 ─────────
  function viewBranches(q) {
    var tab = q.tab || "all"
    var all = S.branches.filter(function (b) {
      return !b.deleted
    })
    var rows = all.filter(function (b) {
      if (tab === "on" && b.status !== "운영중") return false
      if (tab === "ready" && b.status === "운영중") return false
      if (fval("branches", "region") && b.region !== fval("branches", "region")) return false
      return matchQ(S.q.branches, [b.name, b.region, b.manager, b.phone])
    })
    var monthCount = {}
    var partnerCount = {}
    S.acts.forEach(function (a) {
      if (!a.deleted && a.status === "done" && a.openDate.slice(0, 7) === MONTH) monthCount[a.br] = (monthCount[a.br] || 0) + 1
    })
    PARTNERS.forEach(function (p) {
      partnerCount[p.br] = (partnerCount[p.br] || 0) + 1
    })
    var s = selSet("branches")
    return (
      header("지점 관리", "지점 등록과 지점별 담당자를 관리합니다.") +
      '<section class="card pt-6">' +
      '<div class="px-5 sm:px-6"><div class="flex flex-wrap items-center justify-between gap-3"><h2 class="text-[21px] font-bold">지점 관리</h2><button class="btn btn-navy btn-lg gap-1.5" data-act="branchForm">' + ic("plus", 16) + "지점 등록</button></div>" +
      '<div class="mt-4">' + tabs("/branches", [["all", "전체", all.length], ["on", "운영중", all.filter(function (b) { return b.status === "운영중" }).length], ["ready", "준비·휴점", all.filter(function (b) { return b.status !== "운영중" }).length]], tab) + "</div>" +
      '<div class="mt-4 flex flex-col md:flex-row gap-2.5">' + searchBox("branches", "지점명, 지역, 담당자, 연락처 검색") + '<div class="flex flex-wrap gap-2.5">' + toolBtns("branches") + "</div></div>" +
      '<p class="mt-5 mb-3 text-[15px]">' + (tab === "all" ? "전체" : tab === "on" ? "운영중" : "준비·휴점") + " " + N(rows.length) + "곳</p></div>" +
      '<div class="scroll-x"><table class="tbl"><thead><tr><th class="w-12 !pl-5"><input type="checkbox" class="cb" data-act="selAll" data-key="branches" data-ids="' + rows.map(function (r) { return r.id }).join(",") + '"' + (rows.length && selCount("branches", rows) === rows.length ? " checked" : "") + '></th><th>지점명</th><th>지역</th><th>담당자</th><th>연락처</th><th class="num">판매점</th><th class="num">이번 달 개통</th><th>개점일</th><th>상태</th><th>메모</th><th class="text-center">관리</th></tr></thead><tbody>' +
      (rows.length
        ? rows
            .map(function (b) {
              return (
                '<tr><td class="!pl-5"><input type="checkbox" class="cb" data-act="sel" data-key="branches" data-id="' + b.id + '"' + (s[b.id] ? " checked" : "") + "></td>" +
                '<td class="font-semibold">' + E(b.name) + "</td><td>" + E(b.region) + '</td><td><span class="inline-flex items-center gap-1.5">' + ic("user", 15, "text-[#6b7280]") + E(b.manager) + "</span></td><td>" + E(b.phone) + '</td><td class="num">' + N(partnerCount[b.id] || 0) + '곳</td><td class="num font-semibold">' + N(monthCount[b.id] || 0) + "건</td><td>" + E(dot(b.opened)) + "</td><td>" +
                (b.status === "운영중" ? '<span class="pill pill-green">운영중</span>' : b.status === "휴점" ? '<span class="pill pill-gray">휴점</span>' : '<span class="pill pill-blue">' + E(b.status) + "</span>") +
                '</td><td class="text-[#6b7280] max-w-[180px] truncate">' + E(b.memo || "-") + "</td>" +
                '<td><div class="flex gap-1.5 justify-center"><button class="btn btn-navy" data-act="branchForm" data-id="' + b.id + '">수정</button><button class="btn btn-red" data-act="del" data-kind="branches" data-id="' + b.id + '">삭제</button></div></td></tr>'
              )
            })
            .join("")
        : empty(11)) +
      "</tbody></table></div><div class='h-3'></div></section>"
    )
  }

  // ───────── 화면: 계약서 템플릿 ─────────
  function tplName(id) {
    for (var i = 0; i < S.templates.length; i++) if (S.templates[i].id === id) return S.templates[i].name
    return "-"
  }
  function viewTemplates(q) {
    var tab = q.tab || "tpl"
    var tpls = S.templates.filter(function (t) {
      return !t.deleted
    })
    var cons = S.contracts.filter(function (c) {
      return !c.deleted && (isHQ() || c.br === me().br)
    })
    var body
    if (tab === "tpl") {
      var rows = tpls.filter(function (t) {
        if (fval("templates", "target") && t.target !== fval("templates", "target")) return false
        return matchQ(S.q.templates, [t.name, t.target, t.ver, t.memo])
      })
      body =
        '<p class="px-5 sm:px-6 mt-5 mb-3 text-[15px]">템플릿 ' + N(rows.length) + "개</p>" +
        '<div class="scroll-x"><table class="tbl"><thead><tr><th class="!pl-6">템플릿명</th><th>대상</th><th>버전</th><th class="num">조항 수</th><th class="num">사용 계약</th><th>수정일</th><th>메모</th><th class="text-center">관리</th></tr></thead><tbody>' +
        (rows.length
          ? rows
              .map(function (t) {
                var used = cons.filter(function (c) {
                  return c.tpl === t.id
                }).length
                return (
                  '<tr><td class="!pl-6"><button class="inline-flex items-center gap-2 font-semibold hover:underline" data-act="tplView" data-id="' + t.id + '">' + ic("doc", 17, "text-[#6b7280]") + E(t.name) + "</button></td>" +
                  '<td><span class="pill ' + (t.target === "판매점" ? "pill-blue" : "pill-purple") + '">' + E(t.target) + "</span></td><td>" + E(t.ver) + '</td><td class="num">' + N(t.items) + '</td><td class="num">' + N(used) + "건</td><td>" + E(dot(t.updated)) + '</td><td class="text-[#6b7280] max-w-[220px] truncate">' + E(t.memo || "-") + "</td>" +
                  '<td><div class="flex gap-1.5 justify-center"><button class="btn btn-white" data-act="tplView" data-id="' + t.id + '">미리보기</button>' + (isHQ() ? '<button class="btn btn-navy" data-act="tplForm" data-id="' + t.id + '">수정</button><button class="btn btn-red" data-act="del" data-kind="templates" data-id="' + t.id + '">삭제</button>' : "") + "</div></td></tr>"
                )
              })
              .join("")
          : empty(8)) +
        "</tbody></table></div>"
    } else {
      var crow = cons.filter(function (c) {
        return matchQ(S.q.templates, [c.no, c.party, brName(c.br), tplName(c.tpl), c.status])
      })
      body =
        '<p class="px-5 sm:px-6 mt-5 mb-3 text-[15px]">체결 계약 ' + N(crow.length) + "건</p>" +
        '<div class="scroll-x"><table class="tbl"><thead><tr><th class="!pl-6">계약번호</th><th>계약 상대</th><th>지점</th><th>템플릿</th><th>계약일</th><th>만료일</th><th>상태</th><th class="text-center">관리</th></tr></thead><tbody>' +
        (crow.length
          ? crow
              .map(function (c) {
                var st = c.status === "체결" ? "pill-green" : c.status === "서명대기" ? "pill-blue" : "pill-gray"
                return (
                  '<tr><td class="!pl-6 font-semibold tabular-nums">' + E(c.no) + "</td><td>" + E(c.party) + "</td><td>" + E(brName(c.br)) + "</td><td>" + E(tplName(c.tpl)) + "</td><td>" + E(dot(c.date)) + "</td><td>" + E(dot(c.end)) + '</td><td><span class="pill ' + st + '">' + E(c.status) + "</span></td>" +
                  '<td><div class="flex gap-1.5 justify-center">' + (c.status === "서명대기" ? '<button class="btn btn-navy" data-act="conSign" data-id="' + c.id + '">체결 처리</button>' : '<button class="btn btn-muted" disabled>' + (c.status === "체결" ? "체결됨" : "만료") + "</button>") + (isHQ() ? '<button class="btn btn-red" data-act="del" data-kind="contracts" data-id="' + c.id + '">삭제</button>' : "") + "</div></td></tr>"
                )
              })
              .join("")
          : empty(8)) +
        "</tbody></table></div>"
    }
    return (
      header("계약서 템플릿", "판매점·판매자 계약 양식을 보관하고 체결 계약을 관리합니다.") +
      '<section class="card pt-6">' +
      '<div class="px-5 sm:px-6"><div class="flex flex-wrap items-center justify-between gap-3"><h2 class="text-[21px] font-bold">계약서 템플릿</h2><div class="flex gap-2">' + (isHQ() ? '<button class="btn btn-white btn-lg gap-1.5" data-act="tplForm">' + ic("plus", 16) + "템플릿 등록</button>" : "") + '<button class="btn btn-navy btn-lg gap-1.5" data-act="conForm">' + ic("plus", 16) + "계약 등록</button></div></div>" +
      '<div class="mt-4">' + tabs("/templates", [["tpl", "템플릿", tpls.length], ["con", "체결 계약", cons.length]], tab) + "</div>" +
      '<div class="mt-4 flex flex-col md:flex-row gap-2.5">' + searchBox("templates", tab === "tpl" ? "템플릿명, 대상, 버전 검색" : "계약번호, 계약 상대, 지점, 템플릿 검색") + '<div class="flex flex-wrap gap-2.5">' + toolBtns(tab === "tpl" ? "templates" : "contracts", { noTrash: false }) + "</div></div></div>" +
      body +
      "<div class='h-3'></div></section>"
    )
  }

  // ───────── 화면: 승인 관리 ─────────
  var ACT_TABS = [["draft", "작성중"], ["wait", "승인 대기"], ["done", "승인 완료"], ["cancel", "개통취소"]]
  var ACT_TITLE = { draft: "작성중 요청", wait: "승인 대기 고객", done: "승인 완료 고객", cancel: "개통취소 고객" }
  function viewApprovals(q) {
    var tab = q.tab || "wait"
    var acts = scopeActs()
    var cnt = {}
    ACT_TABS.forEach(function (t) {
      cnt[t[0]] = acts.filter(function (a) {
        return a.status === t[0]
      }).length
    })
    var inTab = acts.filter(function (a) {
      return a.status === tab
    })
    var rows = inTab.filter(function (a) {
      if (fval("approvals", "br") && a.br !== fval("approvals", "br")) return false
      if (fval("approvals", "line") && a.line !== fval("approvals", "line")) return false
      if (fval("approvals", "partner") && a.partner !== fval("approvals", "partner")) return false
      return matchQ(S.q.approvals, [a.customer, a.phone, brName(a.br), a.partner, a.seller, a.no, a.model])
    })
    var s = selSet("approvals")
    var nSel = selCount("approvals", rows)
    var ids = rows.map(function (r) {
      return r.id
    }).join(",")
    var canReq = true

    function actions(a) {
      if (a.status === "wait") {
        if (isHQ()) return '<button class="btn btn-navy w-[46px]" data-act="approve" data-id="' + a.id + '">승인</button><button class="btn btn-redline w-[60px]" data-act="reject" data-id="' + a.id + '">반려</button><button class="btn btn-red w-[58px]" data-act="del" data-kind="approvals" data-id="' + a.id + '">삭제</button>'
        return '<button class="btn btn-white" data-act="actView" data-id="' + a.id + '">상세</button><button class="btn btn-redline" data-act="withdraw" data-id="' + a.id + '">요청 회수</button>'
      }
      if (a.status === "draft") return '<button class="btn btn-navy" data-act="submit" data-id="' + a.id + '">승인 요청</button><button class="btn btn-white" data-act="actForm" data-id="' + a.id + '">수정</button><button class="btn btn-red" data-act="del" data-kind="approvals" data-id="' + a.id + '">삭제</button>'
      if (a.status === "done") return '<button class="btn btn-white" data-act="actView" data-id="' + a.id + '">상세</button>' + (isHQ() ? '<button class="btn btn-redline" data-act="cancelAct" data-id="' + a.id + '">개통취소</button>' : "")
      return '<button class="btn btn-white" data-act="actView" data-id="' + a.id + '">상세</button>' + (isHQ() ? '<button class="btn btn-navy" data-act="restoreAct" data-id="' + a.id + '">되돌리기</button><button class="btn btn-red" data-act="del" data-kind="approvals" data-id="' + a.id + '">삭제</button>' : "")
    }

    return (
      header("개통 승인 관리", isHQ() ? "개통 신청 건에 대한 승인 검토 및 처리 업무를 관리합니다." : "개통 요청을 작성해 본사 승인을 받고 진행 상황을 확인합니다.") +
      '<section class="card">' +
      '<div class="px-5 sm:px-6 pt-6 pb-5"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="text-[21px] font-bold">승인 관리</h2><p class="text-[14px] text-[#4b5563] mt-1">개통 요청 검토 및 처리</p></div>' +
      '<div class="flex items-center gap-3"><span class="text-[14px] text-[#374151]">대기 ' + N(cnt.wait) + "명 / 전체 " + N(acts.length) + "명</span>" + (canReq ? '<button class="btn btn-navy btn-lg gap-1.5" data-act="actForm">' + ic("plus", 16) + "개통 요청 등록</button>" : "") + "</div></div>" +
      '<div class="mt-4">' + tabs("/approvals", ACT_TABS.map(function (t) { return [t[0], t[1], cnt[t[0]]] }), tab) + "</div>" +
      '<div class="mt-4 flex">' + searchBox("approvals", "고객명, 전화번호, 지점명, 판매점, 판매자, 요청번호 검색") + "</div></div>" +
      '<div class="border-t border-[#e3e7ee] px-5 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-3">' +
      '<div class="flex flex-wrap items-center gap-4"><h3 class="text-[19px] font-bold">' + E(ACT_TITLE[tab]) + '</h3><label class="inline-flex items-center gap-2 text-[14px] text-[#374151] cursor-pointer"><input type="checkbox" class="cb" data-act="selAll" data-key="approvals" data-ids="' + ids + '"' + (rows.length && nSel === rows.length ? " checked" : "") + ">현재 로드된 항목 선택 (" + nSel + "/" + rows.length + ")</label>" +
      (nSel && tab === "wait" && isHQ() ? '<button class="btn btn-navy" data-act="bulkApprove">선택 ' + nSel + "건 승인</button>" : "") +
      (nSel && (isHQ() || tab === "draft") ? '<button class="btn btn-red" data-act="bulkDel" data-key="approvals">선택 삭제</button>' : "") +
      "</div>" +
      '<div class="flex flex-wrap items-center gap-2.5"><span class="text-[15px] text-[#374151] mr-1">' + N(rows.length) + "명 / 전체 " + N(inTab.length) + "명</span>" + toolBtns("approvals", { caret: true }) + "</div></div>" +
      '<div class="scroll-x"><table class="tbl"><thead><tr><th class="w-[70px] !pl-5">전체 선택</th><th>고객정보</th><th>지점</th><th>상태</th><th>연락처</th><th>세부정보</th><th class="text-center">관리</th></tr></thead><tbody>' +
      (rows.length
        ? rows
            .map(function (a) {
              return (
                '<tr><td class="!pl-5"><input type="checkbox" class="cb" data-act="sel" data-key="approvals" data-id="' + a.id + '"' + (s[a.id] ? " checked" : "") + "></td>" +
                '<td><button class="text-[16px] font-bold hover:underline" data-act="actView" data-id="' + a.id + '">' + E(a.customer) + '</button><div class="text-[12px] text-[#8a93a3] mt-0.5">' + E(a.no) + "</div></td>" +
                "<td>" + E(brName(a.br)) + "</td><td>" + actBadge(a) + '</td><td class="tabular-nums">' + E(a.phone) + "</td>" +
                '<td class="!py-2.5"><div class="text-[13px] text-[#1f2633]">' + E(a.partner) + " | " + E(a.seller) + " | " + E(a.line) + (a.model !== "-" ? " | " + E(a.model) : "") + "</div>" +
                '<div class="text-[12.5px] text-[#4b5563] mt-0.5">개통일 ' + E(dot(a.openDate)) + " | " + E(a.plan) + " | 리베이트 " + N(a.base) + " / 추가 " + N(a.add) + " / 차감 " + N(a.ded) + "</div>" +
                (a.status === "draft" && a.reject ? '<div class="text-[12px] text-[#c42020] mt-0.5">반려 사유: ' + E(a.reject) + "</div>" : "") +
                "</td>" +
                '<td><div class="flex gap-1.5 justify-center">' + actions(a) + "</div></td></tr>"
              )
            })
            .join("")
        : empty(7, tab === "wait" ? "승인 대기 중인 요청이 없습니다." : "조건에 맞는 항목이 없습니다.")) +
      "</tbody></table></div><div class='h-3'></div></section>"
    )
  }

  // ───────── 화면: 결재 관리 ─────────
  function viewPayments(q) {
    var tab = q.tab || "pending"
    var pays = scopePays()
    var inTab = pays.filter(function (p) {
      if (tab === "pending") return p.status === "pending" || p.status === "approved"
      if (tab === "paid") return p.status === "paid"
      return true
    })
    var rows = inTab.filter(function (p) {
      var a = actById(p.act)
      if (fval("payments", "br") && p.br !== fval("payments", "br")) return false
      if (fval("payments", "type") && p.type !== fval("payments", "type")) return false
      if (fval("payments", "purpose") && p.purpose !== fval("payments", "purpose")) return false
      return matchQ(S.q.payments, [brName(p.br), p.purpose, p.receiver, p.bank, p.account, a ? a.customer : "", String(p.amount), p.type])
    })
    var s = selSet("payments")
    var nSel = selCount("payments", rows)
    var label = tab === "pending" ? "입금중" : tab === "paid" ? "입금완료" : "전체"
    return (
      header("결재 관리", "결재 요청과 정산 현황을 통합 관리합니다.") +
      '<section class="card pt-6">' +
      '<div class="px-5 sm:px-6"><div class="flex flex-wrap items-center justify-between gap-3"><h2 class="text-[21px] font-bold">결재 관리</h2>' + (S.role === "branch" || isHQ() ? '<button class="btn btn-navy btn-lg gap-1.5" data-act="payForm">' + ic("plus", 16) + "출금 요청</button>" : "") + "</div>" +
      '<div class="mt-4">' + tabs("/payments", [["all", "전체"], ["pending", "입금중"], ["paid", "입금완료"]], tab) + "</div>" +
      '<div class="mt-4 flex flex-col md:flex-row gap-2.5">' + searchBox("payments", "지점명, 받는사람, 은행, 용도, 관련고객 검색") + '<div class="flex flex-wrap gap-2.5">' + toolBtns("payments") + "</div></div>" +
      '<div class="mt-5 mb-3 flex flex-wrap items-center gap-3"><p class="text-[15px]">' + label + " " + N(rows.length) + "건</p>" +
      (nSel && isHQ() ? '<button class="btn btn-navy" data-act="bulkPayApprove">선택 ' + nSel + '건 승인</button><button class="btn btn-red" data-act="bulkDel" data-key="payments">선택 삭제</button>' : "") +
      "</div></div>" +
      '<div class="scroll-x"><table class="tbl tbl-tight"><thead><tr><th class="w-12 !pl-5"><input type="checkbox" class="cb" data-act="selAll" data-key="payments" data-ids="' + rows.map(function (r) { return r.id }).join(",") + '"' + (rows.length && nSel === rows.length ? " checked" : "") + '></th><th>날짜</th><th>지점명</th><th class="text-center">유형</th><th>용도</th><th>받는사람</th><th>은행/계좌</th><th class="num">금액</th><th class="text-center">판매자</th><th class="text-center">관련고객</th><th class="text-center">상태</th><th class="text-center">관리</th></tr></thead><tbody>' +
      (rows.length
        ? rows
            .map(function (p) {
              var a = actById(p.act)
              var ap
              if (p.status === "pending") ap = isHQ() ? '<button class="btn btn-navy" data-act="payApprove" data-id="' + p.id + '">승인</button>' : '<button class="btn btn-muted w-[48px]" disabled title="본사 결재 대기">대기</button>'
              else if (p.status === "approved") ap = '<button class="btn btn-muted" disabled>결재됨</button>'
              else if (p.status === "paid") ap = '<button class="btn btn-muted" disabled>완료</button>'
              else ap = '<button class="btn btn-muted" disabled>반려</button>'
              return (
                '<tr><td class="!pl-5"><input type="checkbox" class="cb" data-act="sel" data-key="payments" data-id="' + p.id + '"' + (s[p.id] ? " checked" : "") + "></td>" +
                '<td class="tabular-nums">' + E(dot(p.date)) + "</td><td>" + E(brName(p.br)) + '</td><td class="text-center"><span class="pill ' + TYPE_PILL[p.type] + '">' + E(p.type) + "</span></td><td>" + E(p.purpose) + "</td>" +
                '<td><span class="inline-flex items-center gap-1.5">' + ic("user", 15, "text-[#6b7280]") + E(p.receiver) + "</span></td>" +
                '<td class="tabular-nums">' + E(p.bank) + " " + E(p.account) + '</td><td class="num font-bold">' + N(p.amount) + '원</td><td class="text-center">' + E(p.seller) + "</td>" +
                '<td class="text-center">' + (a ? '<button class="link" data-act="actView" data-id="' + a.id + '">' + E(a.customer) + "</button>" : "-") + "</td>" +
                '<td class="text-center">' + payBadge(p) + (p.memo ? '<div class="text-[11px] text-[#8a93a3] mt-0.5 max-w-[120px] truncate mx-auto" title="' + E(p.memo) + '">메모 있음</div>' : "") + "</td>" +
                '<td><div class="flex gap-1.5 justify-center">' + ap + '<button class="btn btn-white" data-act="payMemo" data-id="' + p.id + '">메모</button>' + (isHQ() || p.status === "pending" ? '<button class="btn btn-red" data-act="del" data-kind="payments" data-id="' + p.id + '">삭제</button>' : "") + "</div></td></tr>"
              )
            })
            .join("")
        : empty(12)) +
      "</tbody></table></div><div class='h-3'></div></section>"
    )
  }

  // ───────── 화면: 입금 관리 ─────────
  function viewDeposits(q) {
    var tab = q.tab || "wait"
    var pays = scopePays()
    var wait = pays.filter(function (p) {
      return p.status === "approved"
    })
    var paid = pays.filter(function (p) {
      return p.status === "paid"
    })
    var list = tab === "wait" ? wait : paid
    var rows = list.filter(function (p) {
      var a = actById(p.act)
      if (fval("deposits", "br") && p.br !== fval("deposits", "br")) return false
      return matchQ(S.q.deposits, [brName(p.br), p.purpose, p.receiver, p.bank, p.account, a ? a.customer : ""])
    })
    var sumReq = rows.reduce(function (s, p) {
      return s + p.amount
    }, 0)
    var sumPaid = rows.reduce(function (s, p) {
      return s + p.paidAmount
    }, 0)
    function stat(l, v) {
      return '<div class="card px-5 py-4"><div class="text-[13px] text-[#4b5563] font-semibold">' + E(l) + '</div><div class="text-[22px] font-bold text-[#1b2c4f] mt-1 tabular-nums">' + E(v) + "</div></div>"
    }
    return (
      header("입금 관리", "결재가 끝난 출금 요청과 실제 들어온 돈을 대조합니다.") +
      '<div class="grid grid-cols-2 lg:grid-cols-4 gap-3">' + stat("입금 대기", N(wait.length) + "건") + stat("입금 대기 금액", N(wait.reduce(function (s, p) { return s + p.amount }, 0)) + "원") + stat("입금 완료", N(paid.length) + "건") + stat("이번 달 입금액", N(paid.filter(function (p) { return p.paidAt.slice(0, 7) === MONTH }).reduce(function (s, p) { return s + p.paidAmount }, 0)) + "원") + "</div>" +
      '<section class="card pt-6">' +
      '<div class="px-5 sm:px-6"><h2 class="text-[21px] font-bold">입금 관리</h2>' +
      '<div class="mt-4">' + tabs("/deposits", [["wait", "입금 대기", wait.length], ["paid", "입금 완료", paid.length]], tab) + "</div>" +
      '<div class="mt-4 flex flex-col md:flex-row gap-2.5">' + searchBox("deposits", "지점명, 받는사람, 은행, 계좌, 관련고객 검색") + '<div class="flex flex-wrap gap-2.5">' + toolBtns("deposits", { noTrash: true }) + "</div></div>" +
      '<p class="mt-5 mb-3 text-[15px]">' + (tab === "wait" ? "입금 대기" : "입금 완료") + " " + N(rows.length) + "건 · 요청 " + N(sumReq) + "원" + (tab === "paid" ? " · 입금 " + N(sumPaid) + "원" : "") + "</p></div>" +
      '<div class="scroll-x"><table class="tbl tbl-tight"><thead><tr><th class="!pl-6">결재일</th><th>지점명</th><th>용도</th><th>받는사람</th><th>은행/계좌</th><th class="num">요청 금액</th><th class="num">입금액</th><th>입금일</th><th class="text-center">대조</th><th class="text-center">관리</th></tr></thead><tbody>' +
      (rows.length
        ? rows
            .map(function (p) {
              var diff = p.status === "paid" ? p.paidAmount - p.amount : null
              return (
                '<tr><td class="!pl-6 tabular-nums">' + E(dot(p.approvedAt)) + "</td><td>" + E(brName(p.br)) + "</td><td>" + E(p.purpose) + '</td><td><span class="inline-flex items-center gap-1.5">' + ic("user", 15, "text-[#6b7280]") + E(p.receiver) + "</span></td>" +
                '<td class="tabular-nums"><span class="inline-flex items-center gap-1.5">' + ic("card", 15, "text-[#6b7280]") + E(p.bank) + " " + E(p.account) + '</span></td><td class="num font-bold">' + N(p.amount) + '원</td><td class="num">' + (p.status === "paid" ? N(p.paidAmount) + "원" : "-") + "</td><td>" + E(dot(p.paidAt)) + "</td>" +
                '<td class="text-center">' + (diff === null ? '<span class="pill pill-blue">입금중</span>' : diff === 0 ? '<span class="pill pill-green">일치</span>' : '<span class="pill border-[#f2b1b1] bg-[#fff1f1] text-[#c42020]">' + (diff > 0 ? "+" : "") + N(diff) + "원</span>") + "</td>" +
                '<td><div class="flex gap-1.5 justify-center">' + (p.status === "approved" ? (isHQ() ? '<button class="btn btn-navy" data-act="depositForm" data-id="' + p.id + '">입금 처리</button>' : '<button class="btn btn-muted" disabled>본사 송금 대기</button>') : '<button class="btn btn-white" data-act="payMemo" data-id="' + p.id + '">메모</button>' + (isHQ() ? '<button class="btn btn-redline" data-act="undoDeposit" data-id="' + p.id + '">입금 취소</button>' : "")) + "</div></td></tr>"
              )
            })
            .join("")
        : empty(10, tab === "wait" ? "입금 대기 중인 건이 없습니다." : "조건에 맞는 항목이 없습니다.")) +
      "</tbody></table></div><div class='h-3'></div></section>"
    )
  }

  // ───────── 화면: 정산 관리 ─────────
  function viewSettlements(q) {
    var by = q.tab || "branch"
    if (S.role === "branch" && by === "branch") by = "partner"
    var month = S.month || MONTH
    var groups = settleGroups(by, month).filter(function (g) {
      return matchQ(S.q.settlements, [g.label, g.sub])
    })
    var tot = groups.reduce(
      function (s, g) {
        s.count += g.count
        s.rebate += g.rebate
        s.paid += g.paid
        s.due += g.due
        return s
      },
      { count: 0, rebate: 0, paid: 0, due: 0 },
    )
    var months = [monthOf(0), monthOf(-1), monthOf(-2)]
    var tabList = isHQ() ? [["branch", "지점별"], ["partner", "판매점별"], ["seller", "판매자별"]] : [["partner", "판매점별"], ["seller", "판매자별"]]
    var colName = by === "branch" ? "지점" : by === "partner" ? "판매점" : "판매자"
    var pendingN = groups.filter(function (g) {
      return !g.done
    }).length
    return (
      header("정산 관리", "승인 완료된 개통의 리베이트와 입금 완료 금액을 지점·판매점·판매자별로 묶어 정산합니다.") +
      '<section class="card pt-6">' +
      '<div class="px-5 sm:px-6"><div class="flex flex-wrap items-center justify-between gap-3"><h2 class="text-[21px] font-bold">정산 관리</h2>' +
      '<div class="flex items-center gap-2"><span class="text-[14px] text-[#4b5563]">정산 월</span><select class="inp !w-[150px]" data-change="month">' + months.map(function (m) {
        return '<option value="' + m + '"' + (m === month ? " selected" : "") + ">" + m.replace("-", "년 ") + "월</option>"
      }).join("") + "</select></div></div>" +
      '<div class="mt-4">' + tabs("/settlements", tabList, by) + "</div>" +
      '<div class="mt-4 flex flex-col md:flex-row gap-2.5">' + searchBox("settlements", colName + "명 검색") + '<div class="flex flex-wrap gap-2.5"><button class="tool" data-act="excel" data-kind="settlements">' + ic("download", 17) + "엑셀 다운로드</button>" + (isHQ() && pendingN ? '<button class="tool !bg-[#1b2c4f] !text-white !border-[#1b2c4f]" data-act="settleAll" data-by="' + by + '">대기 ' + pendingN + "건 일괄 정산</button>" : "") + "</div></div>" +
      '<div class="mt-5 mb-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-[14px]">' +
      [["승인 완료 개통", N(tot.count) + "건"], ["리베이트 합계", N(tot.rebate) + "원"], ["기지급(입금 완료)", N(tot.paid) + "원"], ["정산 예정액", N(tot.due) + "원"]].map(function (x) {
        return '<div class="rounded-md bg-[#f5f7fa] border border-[#e8ebf0] px-4 py-3"><div class="text-[12.5px] text-[#6b7280]">' + x[0] + '</div><div class="font-bold text-[17px] mt-0.5 tabular-nums">' + x[1] + "</div></div>"
      }).join("") +
      "</div></div>" +
      '<div class="scroll-x"><table class="tbl"><thead><tr><th class="!pl-6">' + colName + "</th>" + (by !== "branch" ? "<th>" + (by === "partner" ? "소속 지점" : "소속 판매점") + "</th>" : "") + '<th class="num">개통 건수</th><th class="num">유선</th><th class="num">리베이트 합계</th><th class="num">기지급</th><th class="num">정산 예정액</th><th class="text-center">상태</th><th class="text-center">관리</th></tr></thead><tbody>' +
      (groups.length
        ? groups
            .map(function (g) {
              return (
                '<tr><td class="!pl-6 font-semibold">' + E(g.label) + "</td>" + (by !== "branch" ? "<td>" + E(g.sub) + "</td>" : "") + '<td class="num">' + N(g.count) + '건</td><td class="num">' + N(g.wired) + '</td><td class="num">' + N(g.rebate) + '원</td><td class="num">' + N(g.paid) + '원</td><td class="num font-bold">' + N(g.due) + "원</td>" +
                '<td class="text-center">' + (g.done ? '<span class="pill pill-green">정산완료</span><div class="text-[11px] text-[#8a93a3] mt-0.5">' + E(dot(g.done)) + "</div>" : '<span class="pill pill-blue">정산대기</span>') + "</td>" +
                '<td><div class="flex gap-1.5 justify-center"><button class="btn btn-white" data-act="settleView" data-by="' + by + '" data-key="' + E(g.key) + '">내역</button>' + (isHQ() ? (g.done ? '<button class="btn btn-redline" data-act="settleUndo" data-by="' + by + '" data-key="' + E(g.key) + '">정산 취소</button>' : '<button class="btn btn-navy" data-act="settle" data-by="' + by + '" data-key="' + E(g.key) + '">정산 처리</button>') : "") + "</div></td></tr>"
              )
            })
            .join("")
        : empty(9, "이 달에 승인 완료된 개통이 없습니다.")) +
      "</tbody></table></div><div class='h-3'></div></section>"
    )
  }

  // ───────── 화면: 게시판 관리 ─────────
  function visiblePost(p) {
    if (isHQ()) return true
    if (S.role === "branch") return p.target === "전체" || p.target === "지점"
    return p.target === "전체" || p.target === "판매점"
  }
  function postSort(a, b) {
    if (a.pin !== b.pin) return a.pin ? -1 : 1
    return a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  }
  function viewBoard(q) {
    var tab = q.tab || "all"
    var cats = { all: "", notice: "공지", policy: "정책 안내", file: "자료실" }
    var all = S.posts.filter(function (p) {
      return !p.deleted && visiblePost(p)
    })
    var rows = all
      .filter(function (p) {
        if (cats[tab] && p.cat !== cats[tab]) return false
        if (fval("board", "target") && p.target !== fval("board", "target")) return false
        return matchQ(S.q.board, [p.title, p.body, p.author, p.cat])
      })
      .sort(postSort)
    function c(cat) {
      return all.filter(function (p) {
        return p.cat === cat
      }).length
    }
    return (
      header("게시판 관리", isHQ() ? "지점·판매점에 보낼 공지와 정책 안내, 문서를 올립니다." : "본사가 올린 공지와 정책 안내, 문서를 확인합니다.") +
      '<section class="card pt-6">' +
      '<div class="px-5 sm:px-6"><div class="flex flex-wrap items-center justify-between gap-3"><h2 class="text-[21px] font-bold">게시판 관리</h2>' + (isHQ() ? '<button class="btn btn-navy btn-lg gap-1.5" data-act="postForm">' + ic("plus", 16) + "글쓰기</button>" : "") + "</div>" +
      '<div class="mt-4">' + tabs("/board", [["all", "전체", all.length], ["notice", "공지", c("공지")], ["policy", "정책 안내", c("정책 안내")], ["file", "자료실", c("자료실")]], tab) + "</div>" +
      '<div class="mt-4 flex flex-col md:flex-row gap-2.5">' + searchBox("board", "제목, 내용, 작성자 검색") + '<div class="flex flex-wrap gap-2.5">' + toolBtns("board", { noTrash: !isHQ() }) + "</div></div>" +
      '<p class="mt-5 mb-3 text-[15px]">게시글 ' + N(rows.length) + "건</p></div>" +
      '<div class="scroll-x"><table class="tbl"><thead><tr><th class="!pl-6 w-16 text-center">번호</th><th class="text-center">구분</th><th>제목</th><th class="text-center">대상</th><th>작성자</th><th>등록일</th><th class="num">조회</th>' + (isHQ() ? '<th class="text-center">관리</th>' : "") + "</tr></thead><tbody>" +
      (rows.length
        ? rows
            .map(function (p, i) {
              return (
                '<tr><td class="!pl-6 text-center text-[#6b7280]">' + (p.pin ? '<span class="inline-flex text-[#d71f1f]" title="상단 고정">' + ic("pin", 16) + "</span>" : rows.length - i) + '</td><td class="text-center"><span class="pill pill-gray">' + E(p.cat) + "</span></td>" +
                '<td class="max-w-[420px]"><button class="text-left truncate max-w-full hover:underline ' + (p.pin ? "font-bold" : "font-medium") + '" data-act="postView" data-id="' + p.id + '">' + E(p.title) + "</button></td>" +
                '<td class="text-center"><span class="pill ' + (p.target === "전체" ? "pill-blue" : p.target === "지점" ? "pill-purple" : "pill-green") + '">' + E(p.target) + "</span></td><td>" + E(p.author) + '</td><td class="tabular-nums">' + E(dot(p.date)) + '</td><td class="num">' + N(p.views) + "</td>" +
                (isHQ() ? '<td><div class="flex gap-1.5 justify-center"><button class="btn btn-white" data-act="postPin" data-id="' + p.id + '">' + (p.pin ? "고정 해제" : "상단 고정") + '</button><button class="btn btn-navy" data-act="postForm" data-id="' + p.id + '">수정</button><button class="btn btn-red" data-act="del" data-kind="board" data-id="' + p.id + '">삭제</button></div></td>' : "") +
                "</tr>"
              )
            })
            .join("")
        : empty(8)) +
      "</tbody></table></div><div class='h-3'></div></section>"
    )
  }

  // ───────── 로그인 화면 ─────────
  function viewLogin() {
    return (
      '<div class="min-h-screen bg-[#14274b] flex items-center justify-center px-4 py-10">' +
      '<div class="w-full max-w-[420px] bg-white rounded-lg shadow-2xl p-7 sm:p-9">' +
      '<div class="flex items-center gap-3"><div class="w-11 h-11 rounded-md bg-[#14274b] text-white flex items-center justify-center">' + ic("shield", 24) + '</div><div><div class="font-bold text-[18px]">(가상) 누리모바일</div><div class="text-[13px] text-[#6b7280]">Enterprise Console</div></div></div>' +
      '<h1 class="mt-7 text-[22px] font-bold">관리자 로그인</h1><p class="text-[14px] text-[#6b7280] mt-1">체험판에서는 권한을 고르면 바로 들어갑니다.</p>' +
      '<div class="mt-6 space-y-2.5">' +
      ["hq", "branch", "store"].map(function (k) {
        var r = ROLES[k]
        var d = k === "hq" ? "모든 메뉴 · 승인/결재/정산 권한" : k === "branch" ? brName(r.br) + " · 출금 요청과 조회" : r.partner + " · 개통 요청 작성"
        return '<button class="w-full text-left border border-[#d6dbe3] rounded-md px-4 py-3 hover:border-[#1b2c4f] hover:bg-[#f7f9fc] flex items-center gap-3" data-act="login" data-role="' + k + '"><span class="w-9 h-9 rounded-full bg-[#eef2f8] text-[#1b2c4f] flex items-center justify-center">' + ic("user", 18) + '</span><span class="flex-1"><span class="block font-bold text-[15px]">' + E(r.label) + ' <span class="font-normal text-[#8a93a3] text-[13px]">' + E(r.id) + '</span></span><span class="block text-[13px] text-[#6b7280]">' + E(d) + "</span></span>" + ic("arrow", 18, "text-[#9aa3b2]") + "</button>"
      }).join("") +
      "</div></div></div>"
    )
  }

  // ───────── 대화상자 ─────────
  function dlg(title, body, foot, wide) {
    return (
      '<div class="ov" data-act="close"></div><div class="dlg' + (wide ? " dlg-wide" : "") + '" role="dialog" aria-modal="true">' +
      '<div class="flex items-center justify-between px-6 h-[60px] border-b border-[#e3e7ee] sticky top-0 bg-white z-[1]"><h3 class="text-[18px] font-bold">' + E(title) + '</h3><button class="w-8 h-8 inline-flex items-center justify-center rounded hover:bg-[#f1f3f6]" data-act="close" aria-label="닫기">' + ic("x", 20) + "</button></div>" +
      '<div class="px-6 py-5">' + body + "</div>" + (foot ? '<div class="px-6 pb-5 flex flex-wrap justify-end gap-2">' + foot + "</div>" : "") + "</div>"
    )
  }
  function fld(label, inner, cls) {
    return '<label class="block ' + (cls || "") + '"><span class="lbl">' + E(label) + "</span>" + inner + "</label>"
  }
  function inp(name, val, extra) {
    return '<input class="inp" name="' + name + '" value="' + E(val == null ? "" : val) + '" ' + (extra || "") + ">"
  }
  function kv(list) {
    return '<dl class="grid grid-cols-[110px_1fr] gap-y-2.5 text-[14px]">' + list.map(function (x) {
      return '<dt class="text-[#6b7280]">' + E(x[0]) + '</dt><dd class="font-medium break-words">' + (x[2] ? x[1] : E(x[1])) + "</dd>"
    }).join("") + "</dl>"
  }
  var CANCEL = '<button type="button" class="btn btn-white btn-lg" data-act="close">취소</button>'

  function renderModal() {
    var m = S.modal
    if (!m) return ""
    var a, p, b, t
    switch (m.type) {
      case "actView":
        a = actById(m.id)
        var rel = S.pays.filter(function (x) {
          return x.act === a.id && !x.deleted
        })
        return dlg(
          "개통 요청 상세",
          '<div class="flex items-center gap-3 mb-4"><span class="text-[20px] font-bold">' + E(a.customer) + "</span>" + actBadge(a) + '<span class="text-[13px] text-[#8a93a3] ml-auto">' + E(a.no) + "</span></div>" +
            kv([["연락처", a.phone], ["지점", brName(a.br)], ["판매점", a.partner], ["판매자", a.seller], ["유선/무선", a.line], ["단말", a.model], ["요금제·상품", a.plan], ["개통일", dot(a.openDate)], ["요청일", dot(a.reqDate)], ["승인일", dot(a.approvedAt)]]) +
            '<div class="mt-5 rounded-md bg-[#f5f7fa] border border-[#e8ebf0] p-4 text-[14px]"><div class="font-bold mb-2">리베이트 계산</div><div class="flex justify-between"><span>기본액</span><span class="tabular-nums">' + N(a.base) + '원</span></div><div class="flex justify-between"><span>추가</span><span class="tabular-nums">+ ' + N(a.add) + '원</span></div><div class="flex justify-between"><span>차감</span><span class="tabular-nums">− ' + N(a.ded) + '원</span></div><div class="flex justify-between border-t border-[#dfe3ea] mt-2 pt-2 font-bold"><span>지급 리베이트</span><span class="tabular-nums">' + N(net(a)) + "원</span></div></div>" +
            (a.reject ? '<p class="mt-3 text-[13px] text-[#c42020]">반려 사유: ' + E(a.reject) + "</p>" : "") +
            '<div class="mt-5"><div class="font-bold text-[14px] mb-2">연결된 출금 요청 ' + rel.length + "건</div>" + (rel.length ? rel.map(function (x) {
              return '<div class="flex justify-between items-center text-[13px] py-1.5 border-b border-[#eceff3]"><span>' + E(dot(x.date)) + " · " + E(x.purpose) + '</span><span class="flex items-center gap-2"><b class="tabular-nums">' + N(x.amount) + "원</b>" + payBadge(x) + "</span></div>"
            }).join("") : '<p class="text-[13px] text-[#8a93a3]">없음</p>') + "</div>",
          (a.status === "wait" && isHQ() ? '<button class="btn btn-redline btn-lg" data-act="reject" data-id="' + a.id + '">반려</button><button class="btn btn-navy btn-lg" data-act="approve" data-id="' + a.id + '">승인</button>' : a.status === "draft" ? '<button class="btn btn-white btn-lg" data-act="actForm" data-id="' + a.id + '">수정</button><button class="btn btn-navy btn-lg" data-act="submit" data-id="' + a.id + '">승인 요청</button>' : '<button class="btn btn-navy btn-lg" data-act="close">닫기</button>'),
        )
      case "approve":
        a = actById(m.id)
        return (
          '<form data-submit="approve" data-id="' + a.id + '">' +
          dlg(
            "개통 승인",
            '<p class="text-[14px] mb-4"><b>' + E(a.customer) + "</b> · " + E(brName(a.br)) + " · " + E(a.partner) + " | " + E(a.seller) + " | " + E(a.line) + "</p>" +
              '<div class="grid grid-cols-3 gap-3">' + fld("기본액", inp("base", a.base, 'type="number" min="0" step="1000" data-input="calc"')) + fld("추가", inp("add", a.add, 'type="number" min="0" step="1000" data-input="calc"')) + fld("차감", inp("ded", a.ded, 'type="number" min="0" step="1000" data-input="calc"')) + "</div>" +
              '<div class="mt-4 rounded-md bg-[#f5f7fa] border border-[#e8ebf0] px-4 py-3 flex justify-between text-[15px]"><span>지급 리베이트</span><b id="calc-net" class="tabular-nums">' + N(net(a)) + "원</b></div>" +
              '<p class="mt-3 text-[13px] text-[#6b7280]">승인하면 승인 완료로 넘어가고, 지점이 출금 요청을 올릴 수 있습니다.</p>',
            CANCEL + '<button class="btn btn-navy btn-lg">승인</button>',
          ) +
          "</form>"
        )
      case "reject":
        a = actById(m.id)
        return (
          '<form data-submit="reject" data-id="' + a.id + '">' +
          dlg(
            "개통 요청 반려",
            '<p class="text-[14px] mb-3"><b>' + E(a.customer) + "</b> 요청을 반려하면 판매점의 작성중 목록으로 돌아갑니다.</p>" +
              fld("반려 사유", '<textarea class="inp" name="reason" rows="3" required placeholder="예: 개통일과 서류 일자가 다릅니다.">' + "</textarea>") +
              '<div class="flex flex-wrap gap-1.5 mt-2">' + ["서류 누락", "리베이트 기준 확인 필요", "개통일 불일치", "판매자 정보 오류"].map(function (x) {
                return '<button type="button" class="pill pill-gray" data-act="reasonPick" data-v="' + E(x) + '">' + E(x) + "</button>"
              }).join("") + "</div>",
            CANCEL + '<button class="btn btn-red btn-lg">반려</button>',
          ) +
          "</form>"
        )
      case "actForm":
        a = m.id ? actById(m.id) : null
        var r = me()
        var parts = PARTNERS.filter(function (x) {
          return isHQ() || x.br === r.br
        }).filter(function (x) {
          return S.role !== "store" || x.name === r.partner
        })
        var curP = a ? a.partner : parts[0].name
        var sellers = []
        parts.forEach(function (x) {
          x.sellers.forEach(function (s) {
            sellers.push([s, s + " (" + x.name + ")"])
          })
        })
        return (
          '<form data-submit="actSave" data-id="' + (a ? a.id : "") + '">' +
          dlg(
            a ? "개통 요청 수정" : "개통 요청 등록",
            '<div class="grid sm:grid-cols-2 gap-3.5">' +
              fld("고객명", inp("customer", a ? a.customer : "", 'required placeholder="예: 홍길동"')) +
              fld("연락처", inp("phone", a ? a.phone : "010-0000-", 'required pattern="010-0000-[0-9]{4}" title="체험판은 010-0000-0000 형식만 받습니다"')) +
              fld("판매점", selectEl("partner", parts.map(function (x) { return [x.name, x.name + " · " + brName(x.br)] }), curP)) +
              fld("판매자", selectEl("seller", sellers, a ? a.seller : (S.role === "store" ? r.name : sellers[0][0]))) +
              fld("유선/무선", selectEl("line", ["무선", "유선"], a ? a.line : "무선")) +
              fld("개통일", inp("openDate", a ? a.openDate : TODAY, 'type="date" required')) +
              fld("단말 (무선)", selectEl("model", ["-"].concat(MODELS), a ? a.model : MODELS[0])) +
              fld("요금제·상품", selectEl("plan", PLANS_M.concat(WIRED), a ? a.plan : PLANS_M[0])) +
              fld("리베이트 기본액", inp("base", a ? a.base : 205000, 'type="number" min="0" step="1000"')) +
              '<div class="grid grid-cols-2 gap-3">' + fld("추가", inp("add", a ? a.add : 0, 'type="number" min="0" step="1000"')) + fld("차감", inp("ded", a ? a.ded : 0, 'type="number" min="0" step="1000"')) + "</div>" +
              "</div>" +
              '<label class="mt-4 flex items-center gap-2 text-[14px]"><input type="checkbox" class="cb" name="submitNow" ' + (a ? "" : "checked") + "> 저장하고 바로 승인 요청 (승인 대기로 보내기)</label>",
            CANCEL + '<button class="btn btn-navy btn-lg">저장</button>',
            true,
          ) +
          "</form>"
        )
      case "payForm":
        var done = scopeActs().filter(function (x) {
          return x.status === "done"
        })
        var r2 = me()
        return (
          '<form data-submit="paySave">' +
          dlg(
            "출금 요청 (결재 올리기)",
            '<div class="grid sm:grid-cols-2 gap-3.5">' +
              fld("관련 고객 (승인 완료 개통)", selectEl("act", done.map(function (x) { return [x.id, x.customer + " · " + brName(x.br) + " · " + x.seller] }), done[0] ? done[0].id : ""), "sm:col-span-2") +
              fld("유형", selectEl("type", TYPES, TYPES[0])) +
              fld("용도", selectEl("purpose", PURPOSES, PURPOSES[0])) +
              fld("받는사람", inp("receiver", S.role === "branch" ? ROLES.store.name : "", 'required placeholder="예금주"')) +
              fld("은행", selectEl("bank", BANKS, BANKS[0])) +
              fld("계좌번호", inp("account", "000-0000-", 'required placeholder="000-0000-0000"')) +
              fld("금액(원)", inp("amount", "", 'type="number" min="1000" step="500" required placeholder="예: 150000"')) +
              "</div>" +
              '<p class="mt-3 text-[13px] text-[#6b7280]">요청은 <b>입금중</b> 상태로 올라가며, 본사 결재가 끝나면 입금 관리로 넘어갑니다.' + (S.role === "branch" ? " 지점: " + E(brName(r2.br)) : "") + "</p>",
            CANCEL + '<button class="btn btn-navy btn-lg">결재 올리기</button>',
            true,
          ) +
          "</form>"
        )
      case "payMemo":
        p = payById(m.id)
        var pa = actById(p.act)
        return (
          '<form data-submit="payMemo" data-id="' + p.id + '">' +
          dlg(
            "결재 메모",
            kv([["날짜", dot(p.date)], ["지점", brName(p.br)], ["용도", p.type + " · " + p.purpose], ["받는사람", p.receiver], ["계좌", p.bank + " " + p.account], ["금액", N(p.amount) + "원"], ["관련고객", pa ? pa.customer : "-"], ["상태", payBadge(p), true]]) +
              fld("메모", '<textarea class="inp" name="memo" rows="3" placeholder="결재 메모를 남기세요">' + E(p.memo) + "</textarea>", "mt-4"),
            (p.status === "pending" && isHQ() ? '<button type="button" class="btn btn-redline btn-lg mr-auto" data-act="payReject" data-id="' + p.id + '">반려</button>' : "") + CANCEL + '<button class="btn btn-navy btn-lg">메모 저장</button>' + (p.status === "pending" && isHQ() ? '<button type="button" class="btn btn-navy btn-lg" data-act="payApprove" data-id="' + p.id + '">승인</button>' : ""),
          ) +
          "</form>"
        )
      case "deposit":
        p = payById(m.id)
        return (
          '<form data-submit="deposit" data-id="' + p.id + '">' +
          dlg(
            "입금 처리",
            kv([["지점", brName(p.br)], ["받는사람", p.receiver], ["계좌", p.bank + " " + p.account], ["요청 금액", N(p.amount) + "원"]]) +
              '<div class="grid grid-cols-2 gap-3 mt-4">' + fld("입금액(원)", inp("paid", p.amount, 'type="number" min="0" required')) + fld("입금일", inp("date", TODAY, 'type="date" required')) + "</div>" +
              '<p class="mt-3 text-[13px] text-[#6b7280]">요청 금액과 입금액이 다르면 대조 칸에 차액이 표시됩니다.</p>',
            CANCEL + '<button class="btn btn-navy btn-lg">입금 완료</button>',
          ) +
          "</form>"
        )
      case "branchForm":
        b = m.id ? S.branches.filter(function (x) { return x.id === m.id })[0] : null
        return (
          '<form data-submit="branchSave" data-id="' + (b ? b.id : "") + '">' +
          dlg(
            b ? "지점 수정" : "지점 등록",
            '<div class="grid sm:grid-cols-2 gap-3.5">' +
              fld("지점명", inp("name", b ? b.name : "", 'required placeholder="예: 강서○○지점"')) +
              fld("지역", selectEl("region", ["서울", "경기", "충북", "전북", "경북", "강원", "세종"], b ? b.region : "서울")) +
              fld("담당자", inp("manager", b ? b.manager : "", "required")) +
              fld("연락처", inp("phone", b ? b.phone : "010-0000-", 'required pattern="010-0000-[0-9]{4}" title="체험판은 010-0000-0000 형식만 받습니다"')) +
              fld("상태", selectEl("status", ["운영중", "준비중", "휴점"], b ? b.status : "준비중")) +
              fld("개점일", inp("opened", b ? b.opened : TODAY, 'type="date"')) +
              fld("메모", inp("memo", b ? b.memo : ""), "sm:col-span-2") +
              "</div>",
            CANCEL + '<button class="btn btn-navy btn-lg">저장</button>',
          ) +
          "</form>"
        )
      case "tplForm":
        t = m.id ? S.templates.filter(function (x) { return x.id === m.id })[0] : null
        return (
          '<form data-submit="tplSave" data-id="' + (t ? t.id : "") + '">' +
          dlg(
            t ? "템플릿 수정" : "템플릿 등록",
            '<div class="grid sm:grid-cols-2 gap-3.5">' +
              fld("템플릿명", inp("name", t ? t.name : "", "required"), "sm:col-span-2") +
              fld("대상", selectEl("target", ["판매점", "판매자"], t ? t.target : "판매점")) +
              fld("버전", inp("ver", t ? t.ver : "v1.0", "required")) +
              fld("조항 수", inp("items", t ? t.items : 8, 'type="number" min="1"')) +
              fld("양식 파일", '<div class="inp flex items-center text-[#8a93a3] text-[13px]">체험판에서는 파일을 올리지 않습니다</div>') +
              fld("메모", inp("memo", t ? t.memo : ""), "sm:col-span-2") +
              "</div>",
            CANCEL + '<button class="btn btn-navy btn-lg">저장</button>',
          ) +
          "</form>"
        )
      case "tplView":
        t = S.templates.filter(function (x) { return x.id === m.id })[0]
        var clauses = ["목적", "계약 기간", "위탁 업무의 범위", "리베이트 지급 기준 (기본·추가·차감)", "정산 주기와 지급일", "개통취소 시 환수", "개인정보 보호", "계약 해지", "분쟁 해결"].slice(0, Math.min(9, t.items))
        return dlg(
          t.name + " 미리보기",
          '<div class="border border-[#e3e7ee] rounded-md p-5 sm:p-7 bg-[#fcfcfd] text-[14px] leading-7">' +
            '<p class="text-center font-bold text-[18px]">' + E(t.name) + '</p><p class="text-center text-[12px] text-[#8a93a3]">' + E(t.ver) + " · 대상: " + E(t.target) + "</p>" +
            '<p class="mt-4">(가상) 누리모바일(이하 “본사”)과 ________(이하 “' + E(t.target) + "”)는 다음과 같이 계약을 맺는다.</p>" +
            clauses.map(function (c, i) {
              return '<p class="mt-2"><b>제' + (i + 1) + "조 (" + E(c) + ')</b> <span class="text-[#6b7280]">조항 내용은 체험판에서 생략합니다.</span></p>'
            }).join("") +
            '<p class="mt-5 text-right">본사 ________ (인) &nbsp; ' + E(t.target) + " ________ (인)</p></div>",
          '<button class="btn btn-white btn-lg" data-act="toastOnly" data-msg="체험판에서는 파일을 내려받지 않습니다">양식 내려받기</button><button class="btn btn-navy btn-lg" data-act="conForm" data-tpl="' + t.id + '">이 양식으로 계약 등록</button>',
          true,
        )
      case "conForm":
        var tpls = S.templates.filter(function (x) {
          return !x.deleted
        })
        var partyList = []
        PARTNERS.forEach(function (x) {
          if (isHQ() || x.br === me().br) {
            partyList.push([x.name, x.name + " (판매점)"])
            x.sellers.forEach(function (s) {
              partyList.push([s, s + " (판매자 · " + x.name + ")"])
            })
          }
        })
        return (
          '<form data-submit="conSave">' +
          dlg(
            "계약 등록",
            '<div class="grid sm:grid-cols-2 gap-3.5">' +
              fld("계약 상대", selectEl("party", partyList, partyList[0][0]), "sm:col-span-2") +
              fld("템플릿", selectEl("tpl", tpls.map(function (x) { return [x.id, x.name + " " + x.ver] }), m.tpl || (tpls[0] && tpls[0].id))) +
              fld("상태", selectEl("status", ["서명대기", "체결"], "서명대기")) +
              fld("계약일", inp("date", TODAY, 'type="date" required')) +
              fld("만료일", inp("end", Demo.day(365), 'type="date" required')) +
              "</div>",
            CANCEL + '<button class="btn btn-navy btn-lg">등록</button>',
          ) +
          "</form>"
        )
      case "postForm":
        p = m.id ? S.posts.filter(function (x) { return x.id === m.id })[0] : null
        return (
          '<form data-submit="postSave" data-id="' + (p ? p.id : "") + '">' +
          dlg(
            p ? "게시글 수정" : "게시글 작성",
            '<div class="grid sm:grid-cols-3 gap-3.5">' +
              fld("구분", selectEl("cat", ["공지", "정책 안내", "자료실"], p ? p.cat : "공지")) +
              fld("대상", selectEl("target", ["전체", "지점", "판매점"], p ? p.target : "전체")) +
              '<label class="flex items-end pb-2.5 gap-2 text-[14px]"><input type="checkbox" class="cb" name="pin"' + (p && p.pin ? " checked" : "") + "> 상단 고정(필독)</label>" +
              fld("제목", inp("title", p ? p.title : "", "required"), "sm:col-span-3") +
              fld("내용", '<textarea class="inp" name="body" rows="7" required>' + E(p ? p.body : "") + "</textarea>", "sm:col-span-3") +
              "</div>",
            CANCEL + '<button class="btn btn-navy btn-lg">' + (p ? "저장" : "등록") + "</button>",
            true,
          ) +
          "</form>"
        )
      case "postView":
        p = S.posts.filter(function (x) { return x.id === m.id })[0]
        return dlg(
          p.cat,
          '<h4 class="text-[20px] font-bold">' + (p.pin ? '<span class="text-[#d71f1f] mr-1">[필독]</span>' : "") + E(p.title) + "</h4>" +
            '<p class="text-[13px] text-[#6b7280] mt-1.5">' + E(p.author) + " · " + E(dot(p.date)) + " · 대상 " + E(p.target) + " · 조회 " + N(p.views) + "</p>" +
            '<div class="mt-5 text-[15px] leading-7 whitespace-pre-wrap border-t border-[#eceff3] pt-5">' + E(p.body) + "</div>",
          (isHQ() ? '<button class="btn btn-white btn-lg" data-act="postForm" data-id="' + p.id + '">수정</button>' : "") + '<button class="btn btn-navy btn-lg" data-act="close">닫기</button>',
          true,
        )
      case "trash":
        var list = trashOf(m.kind)
        return dlg(
          "휴지통",
          (list.length
            ? '<ul class="divide-y divide-[#eceff3]">' + list.map(function (x) {
                return '<li class="flex items-center gap-3 py-3"><div class="flex-1 min-w-0"><div class="font-semibold truncate">' + E(x.label) + '</div><div class="text-[12px] text-[#8a93a3]">' + E(dot(x.at)) + ' 삭제</div></div><button class="btn btn-navy" data-act="restore" data-tid="' + x.tid + '">복원</button><button class="btn btn-red" data-act="purge" data-tid="' + x.tid + '">영구 삭제</button></li>'
              }).join("") + "</ul>"
            : '<p class="py-10 text-center text-[#8a93a3]">휴지통이 비어 있습니다.</p>') + '<p class="mt-3 text-[12px] text-[#8a93a3]">삭제한 항목은 30일 동안 휴지통에 보관됩니다.</p>',
          '<button class="btn btn-navy btn-lg" data-act="close">닫기</button>',
        )
      case "settle":
      case "settleView":
        var month = S.month || MONTH
        var g = settleGroups(m.by, month).filter(function (x) {
          return x.key === m.key
        })[0]
        var items = scopeActs().filter(function (x) {
          return x.status === "done" && x.openDate.slice(0, 7) === month && (m.by === "branch" ? x.br : m.by === "partner" ? x.partner : x.seller) === m.key
        })
        return dlg(
          (m.type === "settle" ? "정산 처리 · " : "정산 내역 · ") + g.label,
          '<div class="grid grid-cols-3 gap-2 text-[13px] mb-4">' + [["리베이트 합계", g.rebate], ["기지급", g.paid], ["정산 예정액", g.due]].map(function (x) {
            return '<div class="rounded-md bg-[#f5f7fa] border border-[#e8ebf0] px-3 py-2.5"><div class="text-[#6b7280]">' + x[0] + '</div><div class="font-bold text-[16px] tabular-nums">' + N(x[1]) + "원</div></div>"
          }).join("") + "</div>" +
            '<div class="scroll-x border border-[#e3e7ee] rounded-md"><table class="tbl"><thead><tr><th>고객</th><th>판매자</th><th>개통일</th><th>구분</th><th class="num">리베이트</th></tr></thead><tbody>' +
            items.map(function (x) {
              return "<tr><td>" + E(x.customer) + "</td><td>" + E(x.seller) + "</td><td>" + E(dot(x.openDate)) + "</td><td>" + E(x.line) + '</td><td class="num">' + N(net(x)) + "원</td></tr>"
            }).join("") +
            "</tbody></table></div>" + (g.done ? '<p class="mt-3 text-[13px] text-[#25804a]">' + E(dot(g.done)) + " 정산 완료</p>" : ""),
          m.type === "settle" ? CANCEL + '<button class="btn btn-navy btn-lg" data-act="settleDo" data-by="' + E(m.by) + '" data-key="' + E(m.key) + '">' + N(g.due) + "원 정산 완료 처리</button>" : '<button class="btn btn-navy btn-lg" data-act="close">닫기</button>',
          true,
        )
    }
    return ""
  }

  // ───────── 전체 그리기 ─────────
  function render(route) {
    if (!S.logged) return viewLogin()
    var path = route.path
    var view
    if (!canSee(path) && ["/", "/branches", "/templates", "/approvals", "/payments", "/deposits", "/settlements", "/board"].indexOf(path) >= 0) {
      view = header("접근 권한 없음", me().label + " 권한으로는 이 메뉴를 볼 수 없습니다.") + '<div class="card p-8 text-center"><a class="btn btn-navy btn-lg" href="#/">대시보드로</a></div>'
    } else if (path === "/branches") view = viewBranches(route.query)
    else if (path === "/templates") view = viewTemplates(route.query)
    else if (path === "/approvals") view = viewApprovals(route.query)
    else if (path === "/payments") view = viewPayments(route.query)
    else if (path === "/deposits") view = viewDeposits(route.query)
    else if (path === "/settlements") view = viewSettlements(route.query)
    else if (path === "/board") view = viewBoard(route.query)
    else view = viewDash()
    var cls = (S.collapsed ? "sb-collapsed " : "") + (S.navOpen ? "nav-open" : "")
    return (
      '<div class="' + cls + '">' +
      sidebar(path) +
      (S.navOpen ? '<div class="lg:hidden fixed inset-0 z-40 bg-black/40" data-act="navclose"></div>' : "") +
      '<div class="main">' + topbar() + '<main class="p-3 sm:p-5 space-y-3 pb-24">' + view + "</main></div>" +
      "</div>" +
      renderModal()
    )
  }

  // 입력 칸 포커스를 지키며 다시 그리기
  function redraw() {
    var a = document.activeElement
    var id = a && a.id
    var pos = null
    try {
      pos = a && a.selectionStart
    } catch (e) {}
    Demo.update()
    if (id) {
      var el = document.getElementById(id)
      if (el) {
        el.focus()
        try {
          if (pos != null) el.setSelectionRange(pos, pos)
        } catch (e) {}
      }
    }
  }
  function open(type, extra) {
    S.modal = Object.assign({ type: type }, extra || {})
    S.pop = null
    Demo.update()
  }
  function close() {
    S.modal = null
    Demo.update()
  }

  // ───────── 동작 ─────────
  Demo.on("nav", function (d) {
    S.navOpen = false
    S.pop = null
    if (location.hash === "#" + d.path) Demo.update()
    else Demo.go(d.path)
  })
  Demo.on("navopen", function () {
    S.navOpen = true
    Demo.update()
  })
  Demo.on("navclose", function () {
    S.navOpen = false
    Demo.update()
  })
  Demo.on("collapse", function () {
    S.collapsed = !S.collapsed
    Demo.update()
  })
  Demo.on("role", function (v) {
    S.role = v
    S.f = {}
    S.sel = {}
    S.q = {}
    S.pop = null
    S.modal = null
    Demo.toast(ROLES[v].label + " 권한으로 전환했습니다")
    if (!canSee(Demo.route().path)) Demo.go("/")
    else Demo.update()
  })
  Demo.on("logout", function () {
    S.logged = false
    S.navOpen = false
    Demo.update()
  })
  Demo.on("login", function (d) {
    S.role = d.role
    S.logged = true
    S.f = {}
    S.sel = {}
    S.q = {}
    Demo.toast(ROLES[d.role].label + "(으)로 로그인했습니다")
    if (location.hash === "#/" || location.hash === "") Demo.update()
    else Demo.go("/")
  })
  Demo.on("close", close)
  Demo.on("toastOnly", function (d) {
    Demo.toast(d.msg)
  })
  Demo.on("q", function (v, el) {
    S.q[el.getAttribute("data-key")] = v
    redraw()
  })
  Demo.on("pop", function (d) {
    S.pop = S.pop === d.pop ? null : d.pop
    Demo.update()
  })
  Demo.on("popclose", function () {
    S.pop = null
    Demo.update()
  })
  Demo.on("filter", function (v, el) {
    var k = el.getAttribute("data-key")
    S.f[k] = S.f[k] || {}
    S.f[k][el.getAttribute("data-field")] = v
    Demo.update()
  })
  Demo.on("filterReset", function (d) {
    S.f[d.key] = {}
    S.pop = null
    Demo.update()
  })
  Demo.on("month", function (v) {
    S.month = v
    Demo.update()
  })

  // 체크박스 (클릭 기본 동작을 막으므로 상태로 다시 그린다)
  Demo.on("sel", function (d) {
    var s = selSet(d.key)
    s[d.id] = !s[d.id]
    Demo.update()
  })
  Demo.on("selAll", function (d) {
    var s = selSet(d.key)
    var ids = d.ids ? d.ids.split(",") : []
    var all = ids.length && ids.every(function (i) {
      return s[i]
    })
    ids.forEach(function (i) {
      s[i] = !all
    })
    Demo.update()
  })

  // 삭제 → 휴지통
  var KIND = {
    approvals: { list: function () { return S.acts }, label: function (x) { return x.customer + " · " + brName(x.br) + " · " + x.no } },
    payments: { list: function () { return S.pays }, label: function (x) { return dot(x.date) + " · " + brName(x.br) + " · " + x.purpose + " " + N(x.amount) + "원" } },
    branches: { list: function () { return S.branches }, label: function (x) { return x.name + " · " + x.manager } },
    templates: { list: function () { return S.templates }, label: function (x) { return x.name + " " + x.ver } },
    contracts: { list: function () { return S.contracts }, label: function (x) { return x.no + " · " + x.party } },
    board: { list: function () { return S.posts }, label: function (x) { return "[" + x.cat + "] " + x.title } },
  }
  function findIn(kind, id) {
    return KIND[kind].list().filter(function (x) {
      return x.id === id
    })[0]
  }
  function trashItem(kind, id) {
    var x = findIn(kind, id)
    if (!x || x.deleted) return
    x.deleted = true
    S.trash.unshift({ tid: "t" + ++S.seq, kind: kind, id: id, label: KIND[kind].label(x), at: TODAY })
    if (S.sel[kind]) delete S.sel[kind][id]
  }
  Demo.on("del", function (d) {
    var x = findIn(d.kind, d.id)
    if (!confirm("‘" + KIND[d.kind].label(x) + "’ 항목을 휴지통으로 옮길까요?")) return
    trashItem(d.kind, d.id)
    S.modal = null
    Demo.toast("휴지통으로 옮겼습니다")
    Demo.update()
  })
  Demo.on("bulkDel", function (d) {
    var s = selSet(d.key)
    var ids = Object.keys(s).filter(function (k) {
      return s[k]
    })
    if (!ids.length || !confirm("선택한 " + ids.length + "건을 휴지통으로 옮길까요?")) return
    ids.forEach(function (id) {
      trashItem(d.key, id)
    })
    S.sel[d.key] = {}
    Demo.toast(ids.length + "건을 휴지통으로 옮겼습니다")
    Demo.update()
  })
  Demo.on("trash", function (d) {
    open("trash", { kind: d.kind })
  })
  Demo.on("restore", function (d) {
    var t = S.trash.filter(function (x) {
      return x.tid === d.tid
    })[0]
    var x = findIn(t.kind, t.id)
    if (x) x.deleted = false
    S.trash = S.trash.filter(function (y) {
      return y.tid !== d.tid
    })
    Demo.toast("복원했습니다")
    Demo.update()
  })
  Demo.on("purge", function (d) {
    if (!confirm("영구 삭제하면 되돌릴 수 없습니다. 계속할까요?")) return
    S.trash = S.trash.filter(function (y) {
      return y.tid !== d.tid
    })
    Demo.toast("영구 삭제했습니다")
    Demo.update()
  })

  // 엑셀(CSV) 내려받기
  Demo.on("excel", function (d) {
    var rows = []
    var path = Demo.route()
    if (d.kind === "approvals") {
      rows.push(["요청번호", "고객명", "연락처", "지점", "판매점", "판매자", "유선/무선", "단말", "요금제", "개통일", "기본", "추가", "차감", "상태"])
      scopeActs().filter(function (a) { return a.status === (path.query.tab || "wait") }).forEach(function (a) {
        rows.push([a.no, a.customer, a.phone, brName(a.br), a.partner, a.seller, a.line, a.model, a.plan, a.openDate, a.base, a.add, a.ded, ACT_ST[a.status][0]])
      })
    } else if (d.kind === "payments" || d.kind === "deposits") {
      rows.push(["날짜", "지점", "유형", "용도", "받는사람", "은행", "계좌", "금액", "상태", "입금액", "입금일"])
      scopePays().forEach(function (p) {
        rows.push([p.date, brName(p.br), p.type, p.purpose, p.receiver, p.bank, p.account, p.amount, p.status === "paid" ? "입금완료" : p.status === "rejected" ? "반려" : "입금중", p.paidAmount, p.paidAt])
      })
    } else if (d.kind === "settlements") {
      var by = path.query.tab || (isHQ() ? "branch" : "partner")
      rows.push(["구분", "개통 건수", "리베이트 합계", "기지급", "정산 예정액", "상태"])
      settleGroups(by, S.month || MONTH).forEach(function (g) {
        rows.push([g.label, g.count, g.rebate, g.paid, g.due, g.done ? "정산완료" : "정산대기"])
      })
    } else if (d.kind === "branches") {
      rows.push(["지점명", "지역", "담당자", "연락처", "상태", "개점일"])
      S.branches.filter(function (b) { return !b.deleted }).forEach(function (b) {
        rows.push([b.name, b.region, b.manager, b.phone, b.status, b.opened])
      })
    } else if (d.kind === "board") {
      rows.push(["구분", "제목", "대상", "작성자", "등록일", "조회"])
      S.posts.filter(function (p) { return !p.deleted && visiblePost(p) }).forEach(function (p) {
        rows.push([p.cat, p.title, p.target, p.author, p.date, p.views])
      })
    } else if (d.kind === "templates" || d.kind === "contracts") {
      rows.push(["계약번호", "계약 상대", "지점", "템플릿", "계약일", "만료일", "상태"])
      S.contracts.filter(function (c) { return !c.deleted }).forEach(function (c) {
        rows.push([c.no, c.party, brName(c.br), tplName(c.tpl), c.date, c.end, c.status])
      })
    }
    var csv = "﻿" + rows.map(function (r) {
      return r.map(function (c) {
        return '"' + String(c).replace(/"/g, '""') + '"'
      }).join(",")
    }).join("\r\n")
    var a = document.createElement("a")
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }))
    a.download = "누리모바일_" + d.kind + "_" + TODAY + ".csv"
    document.body.appendChild(a)
    a.click()
    a.remove()
    Demo.toast((rows.length - 1) + "건을 엑셀(CSV)로 내려받았습니다")
  })

  // 개통 요청 · 승인
  Demo.on("actView", function (d) {
    open("actView", { id: d.id })
  })
  Demo.on("calc", function () {
    var f = document.querySelector('form[data-submit="approve"]')
    if (!f) return
    var v = function (n) {
      return Number(f.elements[n].value) || 0
    }
    document.getElementById("calc-net").textContent = N(v("base") + v("add") - v("ded")) + "원"
  })
  Demo.on("reasonPick", function (d) {
    var t = document.querySelector('textarea[name="reason"]')
    if (t) t.value = d.v
  })
  function approveAct(id, vals) {
    var a = actById(id)
    if (vals) {
      a.base = Number(vals.base) || 0
      a.add = Number(vals.add) || 0
      a.ded = Number(vals.ded) || 0
    }
    a.status = "done"
    a.approvedAt = TODAY
    a.reject = ""
    if (S.sel.approvals) delete S.sel.approvals[id]
  }
  Demo.on("actSave", function (v, form) {
    var id = form.getAttribute("data-id")
    var p = partnerOf(v.partner)
    var a = id ? actById(id) : null
    var data = {
      customer: v.customer.trim(),
      phone: v.phone.trim(),
      partner: v.partner,
      br: p.br,
      seller: v.seller,
      line: v.line,
      model: v.line === "유선" ? "-" : v.model,
      plan: v.plan,
      openDate: v.openDate,
      base: Number(v.base) || 0,
      add: Number(v.add) || 0,
      ded: Number(v.ded) || 0,
    }
    if (a) Object.assign(a, data)
    else {
      a = Object.assign({ id: "a" + ++S.seq, no: "NR-" + (2700 + S.seq - 1000), status: "draft", reqDate: TODAY, approvedAt: "", reject: "" }, data)
      S.acts.unshift(a)
    }
    if (v.submitNow) {
      a.status = "wait"
      a.reqDate = TODAY
    }
    S.modal = null
    Demo.toast(v.submitNow ? "승인 대기로 보냈습니다" : "작성중으로 저장했습니다")
    var tab = v.submitNow ? "wait" : "draft"
    if (Demo.route().path === "/approvals" && (Demo.route().query.tab || "wait") === tab) Demo.update()
    else Demo.go("/approvals?tab=" + tab)
  })
  Demo.on("actForm", function (d) {
    open("actForm", { id: d.id })
  })
  Demo.on("submit", function (d) {
    var a = actById(d.id)
    a.status = "wait"
    a.reqDate = TODAY
    S.modal = null
    Demo.toast(a.customer + " 님 요청을 승인 대기로 보냈습니다")
    Demo.update()
  })
  Demo.on("withdraw", function (d) {
    var a = actById(d.id)
    a.status = "draft"
    Demo.toast("요청을 회수해 작성중으로 돌렸습니다")
    Demo.update()
  })
  Demo.on("cancelAct", function (d) {
    var a = actById(d.id)
    if (!confirm(a.customer + " 님 개통을 취소 처리할까요? 리베이트는 정산에서 빠집니다.")) return
    a.status = "cancel"
    Demo.toast("개통취소로 옮겼습니다")
    Demo.update()
  })
  Demo.on("restoreAct", function (d) {
    var a = actById(d.id)
    a.status = "done"
    Demo.toast("승인 완료로 되돌렸습니다")
    Demo.update()
  })
  Demo.on("bulkApprove", function () {
    var s = selSet("approvals")
    var ids = scopeActs().filter(function (a) {
      return a.status === "wait" && s[a.id]
    }).map(function (a) {
      return a.id
    })
    if (!ids.length || !confirm("선택한 " + ids.length + "건을 현재 리베이트 그대로 승인할까요?")) return
    ids.forEach(function (id) {
      approveAct(id)
    })
    Demo.toast(ids.length + "건을 승인했습니다")
    Demo.update()
  })

  // 결재
  Demo.on("payForm", function () {
    open("payForm")
  })
  Demo.on("paySave", function (v) {
    var a = actById(v.act)
    if (!a) return Demo.toast("관련 고객을 골라 주세요")
    S.pays.unshift({
      id: "p" + ++S.seq,
      date: TODAY,
      br: a.br,
      type: v.type,
      purpose: v.purpose,
      receiver: v.receiver.trim(),
      bank: v.bank,
      account: v.account.replace(/^(\d{3})-?(\d+)-?(\d{4})$/, "$1-****-$3"),
      amount: Number(v.amount) || 0,
      seller: a.seller,
      act: a.id,
      status: "pending",
      memo: "",
      approvedAt: "",
      paidAt: "",
      paidAmount: 0,
    })
    S.modal = null
    Demo.toast("결재를 올렸습니다 · 입금중")
    if (Demo.route().path === "/payments" && (Demo.route().query.tab || "pending") !== "paid") Demo.update()
    else Demo.go("/payments?tab=pending")
  })
  Demo.on("payApprove", function (d) {
    var p = payById(d.id)
    p.status = "approved"
    p.approvedAt = TODAY
    S.modal = null
    if (S.sel.payments) delete S.sel.payments[d.id]
    Demo.toast("결재 승인 · 입금 관리로 넘겼습니다")
    Demo.update()
  })
  Demo.on("payReject", function (d) {
    var p = payById(d.id)
    var f = document.querySelector('form[data-submit="payMemo"]')
    if (f && f.elements.memo.value.trim()) p.memo = f.elements.memo.value.trim()
    p.status = "rejected"
    S.modal = null
    Demo.toast("결재를 반려했습니다")
    Demo.update()
  })
  Demo.on("bulkPayApprove", function () {
    var s = selSet("payments")
    var list = scopePays().filter(function (p) {
      return p.status === "pending" && s[p.id]
    })
    if (!list.length) return Demo.toast("선택한 건 중 승인할 결재가 없습니다")
    list.forEach(function (p) {
      p.status = "approved"
      p.approvedAt = TODAY
    })
    S.sel.payments = {}
    Demo.toast(list.length + "건 결재 승인 · 입금 관리로 넘겼습니다")
    Demo.update()
  })
  Demo.on("payMemo", function (v, form) {
    if (form && form.tagName === "FORM") {
      payById(form.getAttribute("data-id")).memo = v.memo.trim()
      S.modal = null
      Demo.toast("메모를 저장했습니다")
      Demo.update()
    } else open("payMemo", { id: v.id })
  })
  Demo.on("depositForm", function (d) {
    open("deposit", { id: d.id })
  })
  Demo.on("deposit", function (v, form) {
    var p = payById(form.getAttribute("data-id"))
    p.status = "paid"
    p.paidAmount = Number(v.paid) || 0
    p.paidAt = v.date
    S.modal = null
    Demo.toast(p.paidAmount === p.amount ? "입금 완료 · 요청 금액과 일치합니다" : "입금 완료 · 차액이 있습니다")
    Demo.update()
  })
  Demo.on("undoDeposit", function (d) {
    var p = payById(d.id)
    if (!confirm("입금 처리를 취소하고 입금 대기로 돌릴까요?")) return
    p.status = "approved"
    p.paidAt = ""
    p.paidAmount = 0
    Demo.toast("입금 대기로 돌렸습니다")
    Demo.update()
  })

  // 정산
  Demo.on("settle", function (d) {
    open("settle", { by: d.by, key: d.key })
  })
  Demo.on("settleView", function (d) {
    open("settleView", { by: d.by, key: d.key })
  })
  Demo.on("settleDo", function (d) {
    S.settled[d.by + "|" + (S.month || MONTH) + "|" + d.key] = TODAY
    S.modal = null
    Demo.toast("정산 완료로 처리했습니다")
    Demo.update()
  })
  Demo.on("settleUndo", function (d) {
    delete S.settled[d.by + "|" + (S.month || MONTH) + "|" + d.key]
    Demo.toast("정산을 취소했습니다")
    Demo.update()
  })
  Demo.on("settleAll", function (d) {
    var gs = settleGroups(d.by, S.month || MONTH).filter(function (g) {
      return !g.done
    })
    if (!confirm("정산대기 " + gs.length + "건을 모두 정산 완료로 처리할까요?")) return
    gs.forEach(function (g) {
      S.settled[d.by + "|" + (S.month || MONTH) + "|" + g.key] = TODAY
    })
    Demo.toast(gs.length + "건을 정산 완료로 처리했습니다")
    Demo.update()
  })

  // 지점
  Demo.on("branchForm", function (d) {
    open("branchForm", { id: d.id })
  })
  Demo.on("branchSave", function (v, form) {
    var id = form.getAttribute("data-id")
    var data = { name: v.name.trim(), region: v.region, manager: v.manager.trim(), phone: v.phone.trim(), status: v.status, opened: v.opened, memo: v.memo.trim() }
    if (id) Object.assign(S.branches.filter(function (b) { return b.id === id })[0], data)
    else S.branches.push(Object.assign({ id: "b" + ++S.seq }, data))
    S.modal = null
    Demo.toast(id ? "지점 정보를 저장했습니다" : "지점을 등록했습니다")
    Demo.update()
  })

  // 템플릿 · 계약
  Demo.on("tplForm", function (d) {
    open("tplForm", { id: d.id })
  })
  Demo.on("tplView", function (d) {
    open("tplView", { id: d.id })
  })
  Demo.on("tplSave", function (v, form) {
    var id = form.getAttribute("data-id")
    var data = { name: v.name.trim(), target: v.target, ver: v.ver.trim(), items: Number(v.items) || 1, memo: v.memo.trim(), updated: TODAY }
    if (id) Object.assign(S.templates.filter(function (t) { return t.id === id })[0], data)
    else S.templates.unshift(Object.assign({ id: "t" + ++S.seq }, data))
    S.modal = null
    Demo.toast("템플릿을 저장했습니다")
    Demo.update()
  })
  Demo.on("conForm", function (d) {
    open("conForm", { tpl: d.tpl })
  })
  Demo.on("conSave", function (v) {
    var p = partnerOf(v.party)
    var br = p ? p.br : PARTNERS.filter(function (x) { return x.sellers.indexOf(v.party) >= 0 })[0].br
    var n = S.contracts.length + 31
    S.contracts.unshift({ id: "c" + ++S.seq, no: "CT-" + TODAY.slice(0, 4) + "-" + String(n).padStart(3, "0"), party: v.party, br: br, tpl: v.tpl, date: v.date, end: v.end, status: v.status })
    S.modal = null
    Demo.toast("계약을 등록했습니다")
    if (Demo.route().path === "/templates" && Demo.route().query.tab === "con") Demo.update()
    else Demo.go("/templates?tab=con")
  })
  Demo.on("conSign", function (d) {
    S.contracts.filter(function (c) { return c.id === d.id })[0].status = "체결"
    Demo.toast("체결 처리했습니다")
    Demo.update()
  })

  // 게시판
  Demo.on("postForm", function (d) {
    open("postForm", { id: d.id })
  })
  Demo.on("postView", function (d) {
    var p = S.posts.filter(function (x) { return x.id === d.id })[0]
    p.views++
    open("postView", { id: d.id })
  })
  Demo.on("postPin", function (d) {
    var p = S.posts.filter(function (x) { return x.id === d.id })[0]
    p.pin = !p.pin
    Demo.toast(p.pin ? "상단에 고정했습니다" : "고정을 해제했습니다")
    Demo.update()
  })
  Demo.on("postSave", function (v, form) {
    var id = form.getAttribute("data-id")
    var data = { cat: v.cat, target: v.target, pin: !!v.pin, title: v.title.trim(), body: v.body.trim() }
    if (id) Object.assign(S.posts.filter(function (p) { return p.id === id })[0], data)
    else S.posts.unshift(Object.assign({ id: "n" + ++S.seq, author: "본사 운영팀", date: TODAY, views: 0 }, data))
    S.modal = null
    Demo.toast(id ? "게시글을 수정했습니다" : "게시글을 등록했습니다")
    Demo.update()
  })

  // 승인 · 반려: 버튼(data-act)이면 대화상자를 열고, 대화상자 폼(data-submit)이면 처리한다
  Demo.on("approve", function (d, el) {
    if (el && el.tagName === "FORM") {
      approveAct(el.getAttribute("data-id"), d)
      S.modal = null
      Demo.toast("승인했습니다 · 승인 완료로 넘어갑니다")
      Demo.update()
    } else open("approve", { id: d.id })
  })
  Demo.on("reject", function (d, el) {
    if (el && el.tagName === "FORM") {
      var a = actById(el.getAttribute("data-id"))
      a.status = "draft"
      a.reject = (d.reason || "").trim()
      S.modal = null
      Demo.toast("반려했습니다 · 작성중으로 돌려보냈습니다")
      Demo.update()
    } else open("reject", { id: d.id })
  })

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && (S.modal || S.pop)) {
      S.modal = null
      S.pop = null
      Demo.update()
    }
  })

  Demo.mount(render)
  Demo.banner()
})()
