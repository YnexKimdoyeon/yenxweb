/* (가상) 오성 풀필먼트 · 바코드 출고 시스템 체험판
 * - 화면 구성과 스타일은 실제 납품 화면을 따르고, 동작은 이 파일에서 새로 작성했다
 * - 회사·상품·운송장·작업자 이름은 모두 지어낸 값이며 서버 통신은 없다
 */
;(function () {
  var esc = Demo.esc

  function pad(n) { return String(n).padStart(2, "0") }
  function hm(d) { d = d || new Date(); return pad(d.getHours()) + ":" + pad(d.getMinutes()) }
  function stamp(day, h, m) { return Demo.day(day) + " " + pad(h) + ":" + pad(m) }
  function nowStamp() { return Demo.day(0) + " " + hm() }
  function toast(m) { Demo.toast(m) }

  /* ───────── 가상 데이터 ───────── */
  var COMPANY = "(가상) 오성 풀필먼트"
  var CARRIER = "(가상) 한빛택배"
  var ME = { name: "김하린", team: "출고팀", center: "(가상) 오성 풀필먼트 1센터" }

  // 상품: [판매가능, 출고예정, 실재고]
  var PRODUCTS = {
    A1001: { name: "데일리 코튼 반팔티 화이트", opt: "사이즈:M", loc: "A-01-2", stock: [14, 3, 17] },
    A1002: { name: "데일리 코튼 반팔티 화이트", opt: "사이즈:L", loc: "A-01-3", stock: [4, 2, 6] },
    B2001: { name: "린넨 오버핏 셔츠 아이보리", opt: "사이즈:FREE", loc: "B-02-1", stock: [9, 1, 10] },
    C3001: { name: "데님 와이드 팬츠 연청", opt: "사이즈:28", loc: "C-04-1", stock: [0, 1, 1] },
    C3002: { name: "데님 와이드 팬츠 연청", opt: "사이즈:30", loc: "C-04-2", stock: [7, 0, 7] },
    D4001: { name: "울 블렌드 니트 비니 차콜", opt: "", loc: "D-01-1", stock: [22, 2, 24] },
    E5001: { name: "캔버스 에코백 네이비", opt: "", loc: "E-03-2", stock: [3, 1, 4] },
    F6001: { name: "스트라이프 양말 3족 세트", opt: "", loc: "F-02-4", stock: [41, 5, 46] },
  }
  function pName(code) { var p = PRODUCTS[code]; return p ? p.name : "-" }
  function pOpt(code) { var p = PRODUCTS[code]; return p && p.opt ? p.opt.replace(/^사이즈:/, "") : "" }

  function mkOrder(inv, to, items, status, extra) {
    var o = { inv: inv, to: to, items: items.map(function (x) { return { code: x[0], qty: x[1] } }), status: status, carrier: CARRIER }
    for (var k in extra || {}) o[k] = extra[k]
    return o
  }
  var ORDERS = [
    mkOrder("770012450011", "박*연", [["A1001", 1]], "ready"),
    mkOrder("770012450028", "이*호", [["A1002", 2]], "ready"),
    mkOrder("770012450035", "정*우", [["B2001", 1], ["D4001", 1]], "ready"),
    mkOrder("770012450042", "최*아", [["C3002", 1], ["E5001", 1], ["F6001", 2]], "ready"),
    mkOrder("770012450080", "한*솔", [["F6001", 1]], "ready"),
    mkOrder("770012450059", "윤*진", [["C3001", 1]], "hold", { hold: "수령인 주소 확인 필요" }),
    mkOrder("770012440013", "강*민", [["A1001", 2]], "done", { out: stamp(0, 9, 12), sent: true }),
    mkOrder("770012440020", "오*은", [["B2001", 1], ["F6001", 1]], "done", { out: stamp(0, 9, 40), sent: true }),
    mkOrder("770012440037", "서*준", [["D4001", 1]], "done", { out: stamp(0, 10, 5) }),
    mkOrder("770012440044", "임*경", [["C3002", 1], ["A1002", 1]], "done", { out: stamp(0, 10, 31) }),
    mkOrder("770012440051", "신*리", [["E5001", 1]], "done", { out: stamp(-1, 16, 48), sent: true }),
  ]
  function findOrder(inv) { for (var i = 0; i < ORDERS.length; i++) if (ORDERS[i].inv === inv) return ORDERS[i]; return null }

  // 소팅·피킹·포장 작업용 (앵글 = 선반 칸, 바구니 = 주문 묶음 바구니)
  var SLOTS = ["A-01", "A-02", "A-03", "A-04", "A-05", "A-06", "B-01", "B-02"].map(function (c) {
    return { code: c, bc: "SL-" + c.replace("-", ""), basket: null }
  })
  var BASKETS = ["101", "102", "103", "104", "105", "106", "107", "108"].map(function (n) { return { bc: "BK-" + n, slot: null } })
  function slotBy(code) { code = code.toUpperCase(); for (var i = 0; i < SLOTS.length; i++) if (SLOTS[i].bc === code || SLOTS[i].code === code) return SLOTS[i]; return null }
  function basketBy(bc) { bc = bc.toUpperCase(); for (var i = 0; i < BASKETS.length; i++) if (BASKETS[i].bc === bc) return BASKETS[i]; return null }
  function link(slot, basket) { slot.basket = basket.bc; basket.slot = slot.code }
  link(SLOTS[0], BASKETS[0])
  link(SLOTS[1], BASKETS[1])

  function wfo(inv, to, items, basket) {
    return { inv: inv, to: to, basket: basket, pack: "대기", items: items.map(function (x) { return { code: x[0], qty: x[1], picked: x[2] || 0 } }) }
  }
  var WF = [
    wfo("770013610014", "김*서", [["A1001", 1, 1]], "BK-101"),
    wfo("770013610021", "문*현", [["C3002", 1], ["F6001", 1]], "BK-101"),
    wfo("770013610038", "배*린", [["B2001", 2, 1]], "BK-102"),
    wfo("770013610045", "조*혁", [["D4001", 1]], null),
    wfo("770013610052", "홍*나", [["E5001", 1], ["A1002", 1]], null),
    wfo("770013610069", "유*빈", [["F6001", 3]], null),
  ]
  function wfBy(inv) { for (var i = 0; i < WF.length; i++) if (WF[i].inv === inv) return WF[i]; return null }
  function slotOfBasket(bc) { var b = basketBy(bc || ""); return b && b.slot ? b.slot : null }

  var BATCHES = [
    { name: Demo.day(0).slice(5) + " 1차 입고", supplier: "(가상) 한결어패럴", status: "working", items: [
      { code: "A1001", expected: 10, scanned: 6, order: 4 },
      { code: "A1002", expected: 6, scanned: 0, order: 3 },
      { code: "C3001", expected: 4, scanned: 0, order: 2 },
      { code: "D4001", expected: 8, scanned: 8, order: 2 },
      { code: "F6001", expected: 12, scanned: 3, order: 5 },
    ] },
    { name: Demo.day(-1).slice(5) + " 2차 입고", supplier: "(가상) 다온상사", status: "done", items: [
      { code: "B2001", expected: 5, scanned: 5, order: 2 },
      { code: "E5001", expected: 6, scanned: 6, order: 1 },
    ] },
    { name: Demo.day(1).slice(5) + " 1차 입고 (예정)", supplier: "(가상) 한결어패럴", status: "ready", items: [
      { code: "C3002", expected: 6, scanned: 0, order: 1 },
    ] },
  ]

  var STAFF = [
    { id: 1, name: "이도윤", role: "소팅", online: true },
    { id: 2, name: "박서아", role: "피킹", online: true },
    { id: 3, name: "최민재", role: "포장", online: false },
    { id: 4, name: "정유나", role: "관리자", online: true },
    { id: 5, name: "한지후", role: "입고", online: false },
  ]
  function staff(id) { for (var i = 0; i < STAFF.length; i++) if (STAFF[i].id === id) return STAFF[i]; return null }

  var CATS = [{ id: 1, name: "공지" }, { id: 2, name: "출고 문의" }, { id: 3, name: "재고" }, { id: 4, name: "반품·교환" }]
  function catName(id) { for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i].name; return "" }
  var POSTS = [
    { id: 5, cat: 3, title: "데님 와이드 팬츠 28 사이즈 재고 확인 부탁드립니다", body: "판매가능 0 으로 나오는데 C-04-1 칸에 1장 남아 있습니다.\n실사 후 재고 조정 부탁드려요.", author: "박서아", created: stamp(0, 10, 22), status: "확인중", reads: ["정유나", "이도윤"],
      history: [{ s: "요청", by: "박서아", at: stamp(0, 10, 22) }, { s: "확인중", by: "정유나", at: stamp(0, 10, 40) }],
      comments: [{ id: 1, author: "정유나", body: "오후 입고 끝나고 실사하겠습니다.", at: stamp(0, 10, 41) }] },
    { id: 4, cat: 2, title: "합포장 주문은 운송장 전송 전에 한 번 더 확인해 주세요", body: "오늘 오전 합포장 2건이 상품 하나씩 빠진 채 출고될 뻔했습니다.\n스캔 수량이 주문 수량과 같은지 꼭 보고 넘겨 주세요.", author: "정유나", created: stamp(0, 9, 5), status: "완료", reads: ["이도윤", "박서아", "최민재", "김하린"], history: [], comments: [] },
    { id: 3, cat: 4, title: "수거송장 등록은 관리자 메뉴에서 해 주세요", body: "반품 수거 운송장은 소팅 탭 → 수거송장등록 에서 원 운송장과 함께 등록합니다.", author: "정유나", created: stamp(-1, 17, 30), status: "완료", reads: ["이도윤", "김하린"], history: [], comments: [] },
    { id: 2, cat: 2, title: "B-02 앵글 라벨이 잘 안 읽힙니다", body: "스캐너로 두세 번 찍어야 인식됩니다. 라벨 재출력 요청드립니다.", author: "이도윤", created: stamp(-1, 14, 12), status: "요청", reads: ["정유나"], history: [], comments: [{ id: 2, author: "김하린", body: "저도 같은 증상이에요.", at: stamp(-1, 15, 1) }] },
    { id: 1, cat: 1, title: "이번 주 금요일 출고 마감 시간 16시로 변경", body: "택배사 집하 시간 변경으로 금요일만 16시에 마감합니다.", author: "정유나", created: stamp(-2, 8, 50), status: "완료", reads: ["이도윤", "박서아", "최민재", "한지후", "김하린"], history: [], comments: [] },
  ]

  var CHAT = {
    direct: {
      1: { unread: 0, msgs: [{ from: 1, text: "A-03 앵글 비어 있나요?", at: "09:41" }, { from: 0, text: "네 비어 있어요. 바로 쓰셔도 됩니다.", at: "09:42" }, { from: 1, text: "감사합니다! BK-104 연결할게요.", at: "09:43" }] },
      2: { unread: 0, msgs: [{ from: 2, text: "비니 피킹 끝났습니다.", at: "10:02" }, { from: 0, text: "확인했습니다 👍", at: "10:03" }] },
    },
    groups: [
      { id: 101, name: "1센터 출고팀", members: [1, 2, 3, 4], unread: 0, msgs: [{ from: 4, text: "오늘 출고 예정 312건입니다. 오후 2시 전에 합포장부터 처리해 주세요.", at: "08:55" }, { from: 2, text: "넵", at: "08:56" }, { from: 3, text: "포장대 2번 테이프 떨어졌어요", at: "09:30" }] },
      { id: 102, name: "소팅 파트", members: [1, 5], unread: 0, msgs: [{ from: 5, text: "1차 입고 반 정도 끝났습니다.", at: "10:15" }] },
    ],
  }

  var WORKS = [
    { id: 1, title: COMPANY + " 전체", count: 18, unread: 3, notice: "금요일 출고 마감 16시 · 택배 집하 16시 30분", msgs: [
      { who: "정유나", text: "금요일은 16시 마감입니다. 공지 확인 부탁드려요.", at: "08:40" },
      { who: "이도윤", text: "확인했습니다.", at: "08:41" },
      { sys: "박서아 님이 공지를 등록했습니다." },
      { who: "박서아", text: "오후에 B-02 앵글 라벨 교체 예정입니다.", at: "10:12" },
    ] },
    { id: 2, title: "출고팀 공지", count: 6, unread: 0, msgs: [
      { who: "정유나", text: "합포장 스캔 시 주문수량 꼭 확인!", at: "어제" },
      { mine: true, text: "네 확인했습니다.", at: "어제" },
    ] },
    { id: 3, title: "박서아", count: 2, unread: 1, msgs: [
      { who: "박서아", text: "에코백 재고 4개 맞나요?", at: "10:20" },
    ] },
    { id: 4, title: "CS 연동방", count: 5, unread: 0, msgs: [
      { who: "한지후", text: "770012450059 수령인 주소 다시 받았습니다. 보류 해제해 주세요.", at: "09:58" },
    ] },
  ]

  /* ───────── 화면 상태 ───────── */
  var S = {
    loggedIn: true,
    mode: 1,
    scan: null,
    compQuery: "",
    compSel: {},
    pickOpen: false,
    pickTab: "unseen",
    notifs: [
      { id: 3, title: "선출 요청", msg: "BK-102 바구니 주문을 먼저 포장해 주세요", at: stamp(0, 10, 2), seen: false },
      { id: 2, title: "출고보류", msg: "770012450059 · 수령인 주소 확인 필요", at: stamp(0, 9, 20), seen: false },
      { id: 1, title: "댓글", msg: "[재고] 데님 와이드 팬츠 28 재고 확인 — 정유나 님 댓글", at: stamp(0, 10, 41), seen: true },
    ],
    dialog: null,
    settingsOpen: false,
    settings: { barcode: "barcode", matchOnly: false, sound: true, prefix: false },
    draft: null,
    sort: { tab: "U", step: 1, slot: null, basket: null, info: null, done: [], hist: [], open: { slot: true, basket: false }, my: 0 },
    pick: { view: "list", prod: null, info: null, found: null },
    pack: { info: null, list: [], open: null },
    inc: { batch: 0, filter: "all", q: "", recent: [], listOpen: true, batchOpen: false, flash: null, info: null },
    returns: [
      { orig: "770012440051", ret: "770099120017", carrier: CARRIER, reason: "단순변심", at: stamp(0, 9, 3) },
    ],
    boardCat: "",
    boardStatus: "",
    kebab: null,
    chatPane: "direct",
    groupModal: false,
    worksLogged: true,
    worksSearch: null,
    focusId: null,
  }
  function freshScan() { return { inv: null, step: "invoice", counts: {}, result: null, view: null } }
  S.scan = freshScan()

  /* ───────── 공통 ───────── */
  function R() { Demo.update() }
  // 타이머로 다시 그릴 때 입력 중인 글이 사라지지 않게
  function Rbg() {
    var keep = {}
    ;["chatInput", "worksMsgInput", "commentInput", "scanInput"].forEach(function (id) {
      var el = document.getElementById(id)
      if (el) keep[id] = el.value
    })
    var act = document.activeElement && document.activeElement.id
    R()
    for (var id in keep) { var el = document.getElementById(id); if (el) el.value = keep[id] }
    if (act) { var a = document.getElementById(act); if (a) a.focus() }
  }
  function postRender() {
    document.querySelectorAll(".chat-messages,.works-messages").forEach(function (el) { el.scrollTop = el.scrollHeight })
    var d = document.getElementById("dialogInput")
    if (d) { d.focus(); return }
    if (S.focusId) {
      var el = document.getElementById(S.focusId)
      S.focusId = null
      if (el) { el.focus(); var v = el.value; try { el.setSelectionRange(v.length, v.length) } catch (e) {} }
    }
  }
  function dialog(opt) { S.dialog = opt; R() }
  function alertD(title, msg) { dialog({ title: title, msg: msg }) }
  function confirmD(title, msg, onOk) { dialog({ title: title, msg: msg, cancel: true, onOk: onOk }) }
  function promptD(title, msg, value, onOk, extra) { dialog({ title: title, msg: msg, input: true, value: value || "", cancel: true, onOk: onOk, extra: extra }) }
  function notify(title, msg) {
    var id = S.notifs.reduce(function (m, n) { return Math.max(m, n.id) }, 0) + 1
    S.notifs.unshift({ id: id, title: title, msg: msg, at: nowStamp(), seen: false })
  }
  function chip(code, label, act) {
    return '<button type="button" class="demo-chip" data-act="' + (act || "scanCode") + '" data-code="' + esc(code) + '"><b>' + esc(code) + "</b>" + (label ? "<span>" + esc(label) + "</span>" : "") + "</button>"
  }
  function hint(title, chips, note) {
    return '<div class="notice demo-hint"><div class="demo-hint-title">' + title + "</div>" +
      (chips ? '<div class="demo-chips">' + chips + "</div>" : "") + (note ? '<div class="demo-hint-note">' + note + "</div>" : "") + "</div>"
  }
  function avatarColor(name) {
    var c = ["#2563EB", "#16A34A", "#9333EA", "#EA580C", "#0891B2", "#DB2777"]
    var h = 0
    for (var i = 0; i < name.length; i++) h = (h + name.charCodeAt(i)) % c.length
    return c[h]
  }

  var SVG_CHAT = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>'
  var SVG_BOARD = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>'
  var SVG_BELL = '<svg class="tab-bell-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C8.64 5.36 7 7.92 7 11v5l-2 2v1h14v-1l-2-2z"/></svg>'

  /* ───────── 출고처리 ───────── */
  function cur() { return S.scan.inv ? findOrder(S.scan.inv) : null }
  function totalQty(o) { return o ? o.items.reduce(function (s, it) { return s + it.qty }, 0) : 0 }
  function scannedQty() { var c = S.scan.counts, n = 0; for (var k in c) n += c[k]; return n }
  function allScanned(o) { return o.items.every(function (it) { return (S.scan.counts[it.code] || 0) >= it.qty }) }

  function scanInfo(ok, inv, o, statusText) {
    return { cls: ok ? "success" : "fail", status: statusText || (ok ? "송장번호 정상" : "없는 송장입니다"), ok: ok,
      rows: [["운송장번호", inv]].concat(ok && o ? [["수령자", o.to], ["상품", o.items.length > 1 ? "합포장 " + o.items.length + "종 / " + totalQty(o) + "개" : totalQty(o) + "개"]] : []) }
  }
  function fail(text, rows, extra) { S.scan.result = { cls: "fail", status: text, ok: false, rows: rows || [], extra: extra }; toast(text) }

  function complete(o, label) {
    o.status = "done"
    o.out = nowStamp()
    o.sent = false
    o.items.forEach(function (it) { var p = PRODUCTS[it.code]; if (p) { p.stock[2] = Math.max(0, p.stock[2] - it.qty); p.stock[1] = Math.max(0, p.stock[1] - it.qty) } })
    S.scan = freshScan()
    S.scan.result = { cls: "success", status: label, ok: true, rows: [["운송장번호", o.inv], ["수령자", o.to], ["처리", "성공 1건 / 실패 0건"]] }
    toast(label + " · " + o.inv)
  }

  function doScan(code) {
    code = String(code || "").trim()
    if (!code) { toast("바코드를 스캔하거나 입력하세요"); return }
    var sc = S.scan, mode = S.mode
    if (mode === 4) {
      if (PRODUCTS[code]) { sc.view = { prod: code }; sc.result = { cls: "", status: "재고 조회", ok: true, rows: [["상품 바코드", code]], border: "var(--pri)" } }
      else {
        var ov = findOrder(code)
        if (ov) { sc.view = { inv: code }; sc.result = scanInfo(true, code, ov) }
        else { sc.view = null; fail("없는 바코드입니다", [["입력값", code]]) }
      }
      return
    }
    if (sc.step === "invoice") {
      if (PRODUCTS[code]) return fail("운송장을 먼저 스캔하세요", [["입력값", code]])
      var o = findOrder(code)
      if (!o) return fail("없는 송장입니다", [["운송장번호", code]])
      if (o.status === "done") return fail("이미 출고완료된 송장입니다 (중복 스캔 차단)", [["운송장번호", o.inv], ["출고완료일", o.out]])
      if (o.status === "hold")
        return fail("출고보류된 송장입니다", [["운송장번호", o.inv], ["보류사유", o.hold || "-"]],
          '<button class="btn-act blue" data-act="release" data-inv="' + esc(o.inv) + '" style="margin-top:8px;width:100%">보류 해제</button>')
      if (mode === 3) return complete(o, "강제 출고완료")
      sc.inv = o.inv
      sc.counts = {}
      sc.step = "product"
      sc.result = scanInfo(true, o.inv, o)
      toast("상품 바코드를 스캔하세요")
      return
    }
    var cu = cur()
    if (sc.step === "invoice2") {
      if (code === cu.inv) return complete(cu, "출고완료")
      return fail("운송장이 일치하지 않습니다", [["스캔한 값", code], ["현재 운송장", cu.inv]])
    }
    // 상품 스캔 단계
    if (code === cu.inv) { toast("상품 바코드를 스캔할 차례입니다"); return }
    var it = null
    cu.items.forEach(function (x) { if (x.code === code) it = x })
    if (!it) {
      if (findOrder(code)) return fail("현재 운송장의 상품 스캔을 먼저 끝내세요", [["현재 운송장", cu.inv]])
      return fail("이 주문에 없는 상품입니다", [["상품 바코드", code]])
    }
    var n = sc.counts[code] || 0
    if (n >= it.qty) return fail("수량 초과 스캔입니다", [["상품", pName(code)], ["주문수량", it.qty]])
    sc.counts[code] = n + 1
    sc.result = scanInfo(true, cu.inv, cu)
    toast(pName(code) + " " + (n + 1) + "/" + it.qty)
    if (allScanned(cu)) onAllScanned(cu)
  }
  function onAllScanned(o) {
    if (S.mode === 2) {
      S.scan.step = "invoice2"
      S.scan.result = scanInfo(true, o.inv, o)
      S.scan.result.after = "스캔 완료 - 운송장을 다시 스캔하세요"
      toast("스캔완료 · 운송장을 다시 스캔하세요")
    } else complete(o, "출고완료")
  }

  function renderResult(r) {
    if (!r) return ""
    var style = r.border ? ' style="border-left:4px solid ' + r.border + '"' : ""
    var h = '<div class="result-card ' + r.cls + '"' + style + '>' +
      '<div class="r-row"><span class="r-label">상태</span><span class="r-val status ' + (r.ok ? "ok" : "ng") + '">' + esc(r.status) + "</span></div>" +
      r.rows.map(function (x) { return '<div class="r-row"><span class="r-label">' + esc(x[0]) + '</span><span class="r-val">' + esc(x[1]) + "</span></div>" }).join("") +
      (r.extra || "") + "</div>"
    if (r.after) h += '<div class="result-card" style="border-left:4px solid var(--pri);margin-top:6px"><div class="r-row"><span class="r-label">상태</span><span class="r-val status ok">' + esc(r.after) + "</span></div></div>"
    return h
  }
  function stockBox(code) {
    var s = PRODUCTS[code].stock
    var cls = function (v) { return v <= 0 ? "zero" : v < 5 ? "low" : "" }
    return '<div class="stock-box"><div class="stock-cell ' + cls(s[0]) + '"><div class="stock-label">판매가능</div><div class="stock-val">' + s[0] + "</div></div>" +
      '<div class="stock-cell"><div class="stock-label">출고예정</div><div class="stock-val">' + s[1] + "</div></div>" +
      '<div class="stock-cell ' + cls(s[2]) + '"><div class="stock-label">실재고</div><div class="stock-val">' + s[2] + "</div></div></div>"
  }
  function renderProdList() {
    var sc = S.scan
    if (S.mode === 4 && sc.view) {
      if (sc.view.prod) {
        var c = sc.view.prod
        return '<div class="prod-card"><div class="prod-name">' + esc(pName(c)) + "</div>" +
          (pOpt(c) ? '<div class="prod-row"><span>사이즈</span><span>' + esc(pOpt(c)) + "</span></div>" : "") +
          '<div class="prod-row"><span>보관 위치</span><span>' + esc(PRODUCTS[c].loc) + "</span></div>" + stockBox(c) + "</div>"
      }
      var ov = findOrder(sc.view.inv)
      return ov.items.map(function (it) {
        return '<div class="prod-card"><div class="prod-name">' + esc(pName(it.code)) + "</div>" +
          (pOpt(it.code) ? '<div class="prod-row"><span>사이즈</span><span>' + esc(pOpt(it.code)) + "</span></div>" : "") +
          '<div class="prod-row"><span>주문수량</span><span>' + it.qty + "</span></div>" + stockBox(it.code) + "</div>"
      }).join("")
    }
    var o = cur()
    if (!o) return ""
    var editable = S.mode === 1 || S.mode === 2
    return o.items.map(function (it) {
      var n = sc.counts[it.code] || 0
      var color = n === it.qty ? "var(--grn)" : "var(--red)"
      var st = 'style="color:' + color + ';font-weight:700"'
      return '<div class="prod-card"><div class="prod-name">' + esc(pName(it.code)) + "</div>" +
        (pOpt(it.code) ? '<div class="prod-row"><span>사이즈</span><span>' + esc(pOpt(it.code)) + "</span></div>" : "") +
        '<div class="prod-row"><span>주문수량</span><span ' + st + ">" + it.qty + "</span></div>" +
        '<div class="prod-row"><span>스캔수량</span><span class="' + (editable ? "scan-qty-edit" : "") + '" ' + st + (editable ? ' data-act="qtyEdit" data-code="' + esc(it.code) + '" title="터치하여 직접입력"' : "") + ">" + n + "</span></div>" +
        '<span class="qty-match ' + (n >= it.qty ? "ok" : "ng") + '">' + (n >= it.qty ? "완료" : "미완료") + "</span></div>"
    }).join("")
  }
  function placeholder() {
    if (S.mode === 4) return "운송장 또는 상품 바코드"
    return { invoice: "운송장번호 스캔", product: "상품 바코드 스캔", invoice2: "운송장번호 다시 스캔" }[S.scan.step]
  }
  function actionHints() {
    var sc = S.scan, o = cur()
    if (S.mode !== 4 && o && sc.step === "product") {
      return hint("이 주문의 상품 바코드 — 눌러서 스캔",
        o.items.map(function (it) { return chip(it.code, pName(it.code).slice(0, 10) + " ×" + it.qty) }).join(""),
        "스캔수량 숫자를 누르면 직접 입력할 수도 있어요.")
    }
    if (S.mode !== 4 && o && sc.step === "invoice2") return hint("운송장 재스캔 — 눌러서 스캔", chip(o.inv, "같은 운송장"))
    if (S.mode === 4) {
      return hint("체험용 바코드 — 재고를 조회해 보세요",
        ["A1001", "C3001", "E5001"].map(function (c) { return chip(c, pName(c).slice(0, 8)) }).join("") + chip("770012450042", "합포장 운송장"))
    }
    var ready = ORDERS.filter(function (x) { return x.status === "ready" })
    var chips = ready.map(function (x) { return chip(x.inv, x.items.length > 1 ? "합포장 " + x.items.length + "종" : "단품 " + x.items[0].qty + "개") }).join("")
    var done = ORDERS.filter(function (x) { return x.status === "done" })[0]
    var hold = ORDERS.filter(function (x) { return x.status === "hold" })[0]
    if (done) chips += chip(done.inv, "출고완료 · 중복 차단")
    if (hold) chips += chip(hold.inv, "출고보류 건")
    return hint("체험용 운송장 번호 — 눌러서 스캔해 보세요", chips,
      ready.length ? "운송장 → 상품 순서로 스캔하면 자동으로 출고완료됩니다." : "대기 중인 운송장을 모두 출고했어요. 출고완료 탭에서 취소하면 다시 스캔할 수 있습니다.")
  }

  function viewAction() {
    var o = cur()
    var modes = ["운송장-상품", "운송장-상품-운송장", "운송장 스캔시 강제 출고", "재고조회"]
    return '<div class="tab-body on" id="tabAction"><div class="scan-sec">' +
      '<div class="scan-mode" style="padding:10px 10px 0">' + modes.map(function (m, i) {
        return '<button class="mode-btn' + (S.mode === i + 1 ? " on" : "") + '" data-act="mode" data-m="' + (i + 1) + '">' + m + "</button>"
      }).join("") + "</div>" +
      '<div class="scan-card"><h4>운송장/상품 바코드 스캔</h4>' +
      '<form class="scan-input-wrap" data-submit="scan" autocomplete="off">' +
      '<input type="text" class="scan-input" id="scanInput" name="code" placeholder="' + esc(placeholder()) + '" enterkeyhint="search" autocomplete="off">' +
      '<div class="scan-btns"><button class="btn-scan" type="submit">검색</button><button class="btn-reset" type="button" data-act="resetScan">스캔 초기화</button></div>' +
      "</form></div>" +
      '<div class="counter-wrap"><div class="counter-nums"><span>총 출고수량</span> <b id="cntTotal">' + totalQty(o) + '</b><span class="slash">/</span><span>스캔 수량</span> <b class="pri" id="cntScan">' + scannedQty() + "</b></div>" +
      '<div class="counter-btns"><button class="btn-act" data-act="forceComplete" style="background:#7C3AED;color:#fff;border-color:#7C3AED">강제 출고완료</button>' +
      '<button class="btn-act" data-act="orderHold" style="background:#64748B;color:#fff;border-color:#64748B">출고보류</button></div></div>' +
      '<div id="scanResultArea">' + renderResult(S.scan.result) + "</div>" +
      actionHints() +
      "</div>" +
      '<div class="prod-list" id="prodList">' + renderProdList() + "</div></div>"
  }

  /* ───────── 출고완료 ───────── */
  function doneOrders() {
    var q = S.compQuery
    return ORDERS.filter(function (o) { return o.status === "done" && (!q || o.inv.indexOf(q) >= 0) })
      .sort(function (a, b) { return a.out < b.out ? 1 : -1 })
  }
  function viewComplete() {
    var list = doneOrders()
    var items = 0, selItems = 0, selBundles = 0
    list.forEach(function (o) { items += o.items.length; if (S.compSel[o.inv]) { selItems += o.items.length; selBundles++ } })
    var allOn = list.length > 0 && selBundles === list.length
    var cards = list.length ? list.map(function (o) {
      return o.items.map(function (it, idx) {
        var size = pOpt(it.code)
        return '<div class="ord-card"><label style="display:flex;align-items:start;gap:8px;">' +
          '<input type="checkbox" class="chk" data-change="compChk" data-inv="' + esc(o.inv) + '"' + (S.compSel[o.inv] ? " checked" : "") + ' style="margin-top:2px;width:16px;height:16px">' +
          '<div style="flex:1;min-width:0"><div class="ord-name">' + esc(pName(it.code)) + (size ? " [" + esc(size) + "]" : "") +
          (o.items.length > 1 ? ' <span class="demo-bundle">합포장 ' + (idx + 1) + "/" + o.items.length + "</span>" : "") + "</div>" +
          '<div class="ord-row"><span>출고완료일</span><span>' + esc(o.out) + "</span></div>" +
          '<div class="ord-row"><span>택배사</span><span>' + esc(o.carrier) + "</span></div>" +
          '<div class="ord-row"><span>운송장번호</span><span>' + esc(o.inv) + "</span></div>" +
          '<div class="ord-row"><span>주문수량</span><span>' + it.qty + "</span></div>" +
          '<div class="ord-row"><span>운송장 전송</span><span style="color:' + (o.sent ? "var(--grn)" : "var(--org)") + '">' + (o.sent ? "전송완료" : "미전송") + "</span></div>" +
          "</div></label></div>"
      }).join("")
    }).join("") : '<div class="empty">데이터가 없습니다</div>'
    return '<div class="tab-body on" id="tabComplete">' +
      '<form class="comp-search" data-submit="compSearch"><input type="text" class="comp-input" id="compSearch" name="q" placeholder="운송장 검색" enterkeyhint="search" value="' + esc(S.compQuery) + '">' +
      '<button class="btn-act blue" type="submit">검색</button><button class="btn-act" type="button" data-act="compReset">초기화</button></form>' +
      '<div class="counter-wrap" style="margin-top:0"><div class="counter-nums"><span>선택</span> <b class="pri" id="compSel">' + selItems + '</b><span class="slash">/</span><b id="compTotal">' + items + "</b>" +
      '<span style="margin-left:8px">합포장</span> <b class="pri" id="compBundleSel">' + selBundles + '</b><span class="slash">/</span><b id="compBundleTotal">' + list.length + "</b></div></div>" +
      '<div class="comp-actions"><label style="display:flex;align-items:center;gap:6px;font-size:13px;padding:0 8px;border:1px solid var(--bd);border-radius:8px;background:#fff;cursor:pointer">' +
      '<input type="checkbox" id="compSelectAll" data-change="compAll"' + (allOn ? " checked" : "") + ' style="width:16px;height:16px"> 전체선택</label>' +
      '<button class="btn-act blue" data-act="sendInvoice">운송장 전송</button><button class="btn-act red" data-act="cancelComplete">출고완료 취소</button></div>' +
      '<div id="compList">' + cards + "</div></div>"
  }

  /* ───────── 소팅 메뉴 ───────── */
  function wcard(to, color, bg, icon, title, small) {
    return '<a href="#' + to + '" class="w-card" style="border-left-color:' + color + '"><div class="w-icon" style="background:' + bg + '">' + icon + "</div>" +
      '<div class="w-title"' + (small ? ' style="font-size:17px"' : "") + ">" + title + '</div><div class="w-arrow">→</div></a>'
  }
  function viewWorker() {
    return '<div class="tab-body on" id="tabWorker"><div id="workerMenu" style="max-width:600px;width:100%;margin:0 auto;padding:24px 20px">' +
      '<div style="display:flex;flex-direction:column;gap:14px">' +
      wcard("/flow/incoming", "#3182ce", "#bee3f8", "📦", "입고 분류") +
      wcard("/flow/sorting", "#38a169", "#c6f6d5", "🏷️", "소팅 작업") +
      wcard("/flow/picking", "#805ad5", "#e9d8fd", "🛒", "피킹 작업") +
      wcard("/flow/packing", "#d69e2e", "#fefcbf", "📋", "포장 작업") +
      "</div>" +
      '<div style="margin-top:24px"><div style="display:flex;align-items:center;margin-bottom:14px"><div style="flex:1;height:1px;background:#E2E8F0"></div>' +
      '<span style="padding:0 12px;font-size:11px;font-weight:600;color:var(--sub);text-transform:uppercase;letter-spacing:.5px">관리자 전용</span><div style="flex:1;height:1px;background:#E2E8F0"></div></div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
      wcard("/manage", "#e53e3e", "#fed7d7", "⚙️", "관리자 페이지", true) +
      wcard("/return", "#e53e3e", "#fed7d7", "📦", "수거송장등록", true) +
      "</div></div></div></div>"
  }

  function inApp(id, title, body, opt) {
    opt = opt || {}
    return '<div class="in-app on" id="' + id + '"><div class="in-app-hdr"><button class="in-app-back" data-act="' + (opt.backAct || "go") + '" data-to="' + (opt.back || "/worker") + '">‹</button>' +
      "<h2>" + esc(title) + "</h2>" + (opt.right || "") + "</div>" + (opt.top || "") + '<div class="in-app-body">' + body + "</div></div>"
  }

  /* ───────── 입고 분류 ───────── */
  function incWarehouse(it) { return Math.max(0, it.scanned - it.order) }
  function viewIncoming() {
    var st = S.inc, b = BATCHES[st.batch]
    var doneCnt = b.items.filter(function (x) { return x.scanned >= x.expected }).length
    var wh = b.items.reduce(function (s, x) { return s + incWarehouse(x) }, 0)
    var out = b.items.reduce(function (s, x) { return s + Math.min(x.scanned, x.order) }, 0)
    var badge = { working: "진행중", done: "완료", ready: "대기" }[b.status]
    function row(p, i, numbered) {
      var opt = pOpt(p.code)
      return '<tr class="' + (st.flash === p.code && !numbered ? "just-scanned" : "") + '"' + (numbered ? ' data-act="incQty" data-code="' + esc(p.code) + '" style="cursor:pointer"' : "") + ">" +
        (numbered ? "<td>" + (i + 1) + "</td>" : "") +
        "<td><div>" + esc(pName(p.code)) + "</div>" + (opt ? '<small class="inc-prod-opt">' + esc(opt) + "</small>" : '<small class="inc-prod-opt">' + esc(p.code) + "</small>") + "</td>" +
        '<td class="num order">' + p.order + '</td><td class="num warehouse">' + incWarehouse(p) + '</td><td class="num' + (p.scanned >= p.expected ? " complete" : "") + '">' + p.scanned + "/" + p.expected + "</td></tr>"
    }
    var recent = st.recent.map(function (c) { return b.items.filter(function (x) { return x.code === c })[0] }).filter(Boolean)
    var items = b.items.filter(function (p) {
      if (st.filter === "incomplete" && p.scanned >= p.expected) return false
      if (st.filter === "complete" && p.scanned < p.expected) return false
      if (st.q && (pName(p.code) + p.code).toLowerCase().indexOf(st.q.toLowerCase()) < 0) return false
      return true
    })
    var head = '<thead><tr><th>상품명/옵션</th><th style="text-align:center">주문</th><th style="text-align:center">창고</th><th style="text-align:center">입고</th></tr></thead>'
    var h = '<div class="incoming-root">' +
      '<div class="inc-stats"><div class="inc-stat"><div class="inc-stat-v">' + doneCnt + "/" + b.items.length + '</div><div class="inc-stat-l">입고 완료 품목</div></div>' +
      '<div class="inc-stat warehouse"><div class="inc-stat-v">' + wh + '</div><div class="inc-stat-l">창고 보관</div></div>' +
      '<div class="inc-stat outgoing"><div class="inc-stat-v">' + out + '</div><div class="inc-stat-l">출고 대상</div></div></div>' +
      '<button class="inc-batch-btn" data-act="incBatchToggle">📅 ' + esc(b.name) + ' <span class="inc-badge">' + badge + "</span></button>" +
      (st.batchOpen ? '<div class="inc-list-card" style="margin-bottom:10px"><div class="inc-batch-filter" style="padding:10px 12px 4px"><div class="inc-sec-title" style="margin:0">입고 차수 선택</div></div>' +
        BATCHES.map(function (x, i) {
          var cls = { working: "working", done: "done", ready: "ready" }[x.status]
          return '<div class="inc-batch-row" data-act="incBatch" data-i="' + i + '"><span><b>' + esc(x.name) + '</b><div style="font-size:11px;color:var(--sub)">' + esc(x.supplier) + " · " + x.items.length + '품목</div></span><span class="inc-batch-status ' + cls + '">' + { working: "진행중", done: "완료", ready: "대기" }[x.status] + "</span></div>"
        }).join("") + "</div>" : "") +
      '<div class="inc-scan-card"><form data-submit="incScan" autocomplete="off"><input class="inc-input" id="incInput" name="code" placeholder="상품 바코드 스캔" autocomplete="off" enterkeyhint="done"' + (b.status === "ready" ? " disabled" : "") + "></form>" +
      (st.info ? '<div class="s-step-info ' + st.info.cls + '">' + esc(st.info.text) + "</div>" : "") + "</div>" +
      hint("체험용 상품 바코드 — 눌러서 입고 스캔", b.items.map(function (p) { return chip(p.code, pName(p.code).slice(0, 8) + (pOpt(p.code) ? " " + pOpt(p.code) : ""), "incCode") }).join(""),
        "주문 수량까지는 출고 대상, 넘치는 수량은 창고 보관으로 자동 분류됩니다.") +
      '<div class="inc-recent"><div class="inc-sec-title">최근 스캔</div>' +
      (recent.length ? '<table class="inc-tbl">' + head + "<tbody>" + recent.map(function (p) { return row(p) }).join("") + "</tbody></table>" : '<div class="s-empty">스캔 내역이 없습니다.</div>') + "</div>" +
      '<div class="inc-list-card' + (st.listOpen ? "" : " close") + '"><div class="inc-list-head" data-act="incListToggle"><span>입고 예정 상품 (' + b.items.length + ')</span><span class="inc-caret">▾</span></div>' +
      (st.listOpen ? '<div class="inc-filter">' + [["all", "전체"], ["incomplete", "미완료"], ["complete", "완료"]].map(function (f) {
        return '<button class="inc-fbtn' + (st.filter === f[0] ? " on" : "") + '" data-act="incFilter" data-f="' + f[0] + '">' + f[1] + "</button>"
      }).join("") + '<input class="inc-search" id="incSearch" placeholder="상품명 검색" value="' + esc(st.q) + '" data-input="incSearch"></div>' +
        '<div style="padding:0 10px 10px">' + (items.length ? '<table class="inc-tbl"><thead><tr><th style="width:28px">#</th><th>상품명/옵션</th><th style="text-align:center">주문</th><th style="text-align:center">창고</th><th style="text-align:center">입고</th></tr></thead><tbody>' +
          items.map(function (p, i) { return row(p, i, true) }).join("") + "</tbody></table>" : '<div class="s-empty">해당하는 상품이 없습니다.</div>') + "</div>" : "") +
      "</div></div>"
    return inApp("appIncoming", "입고 분류", h)
  }
  function incScan(code) {
    var st = S.inc, b = BATCHES[st.batch]
    code = String(code || "").trim().toUpperCase()
    if (!code) return
    if (b.status === "ready") { st.info = { cls: "ng", text: "아직 시작되지 않은 입고 차수입니다." }; return }
    var it = b.items.filter(function (x) { return x.code === code })[0]
    if (!it) { st.info = { cls: "ng", text: "이 차수에 없는 상품입니다: " + code }; toast("입고 예정에 없는 상품"); return }
    if (it.scanned >= it.expected) { st.info = { cls: "ng", text: pName(code) + " — 예정 수량(" + it.expected + ")을 모두 입고했습니다." }; toast("입고 수량 초과"); return }
    it.scanned++
    var toWh = it.scanned > it.order
    st.info = { cls: "ok", text: pName(code) + " " + it.scanned + "/" + it.expected + " → " + (toWh ? "창고 보관" : "출고 대상 (소팅으로)") }
    st.recent = [code].concat(st.recent.filter(function (c) { return c !== code })).slice(0, 5)
    st.flash = code
    if (b.items.every(function (x) { return x.scanned >= x.expected })) { b.status = "done"; toast("이 차수 입고가 모두 끝났습니다") }
    else toast(toWh ? "창고 보관" : "출고 대상")
  }

  /* ───────── 소팅 작업 ───────── */
  var SORT_LABEL = {
    U: { 1: "앵글 바코드 스캔", 2: "바구니 바코드 스캔", 3: "송장번호 스캔" },
    1: { 1: "앵글 바코드 스캔", 2: "바구니 바코드 스캔" },
    2: { 1: "바구니 바코드 스캔", 2: "송장번호 스캔" },
  }
  var SORT_PH = { U: { 1: "앵글 바코드", 2: "바구니 바코드", 3: "송장번호" }, 1: { 1: "앵글 바코드", 2: "바구니 바코드" }, 2: { 1: "바구니 바코드", 2: "송장번호" } }
  function sortInfo(cls, text) { S.sort.info = { cls: cls, text: text } }
  function sortDone(kind, html) { S.sort.done.unshift({ kind: kind, html: html }); S.sort.done = S.sort.done.slice(0, 6) }
  function sortSubmit(code) {
    var st = S.sort, t = st.tab
    code = String(code || "").trim().toUpperCase()
    if (!code) return
    var needSlot = (t === "U" || t === "1") && st.step === 1
    var needBasketNew = (t === "U" || t === "1") && st.step === 2
    var needBasketLinked = t === "2" && st.step === 1
    var needInv = (t === "U" && st.step === 3) || (t === "2" && st.step === 2)
    if (needSlot) {
      var s = slotBy(code)
      if (!s) return sortInfo("ng", "없는 앵글 바코드입니다: " + code)
      if (s.basket) return sortInfo("ng", s.code + " 앵글에는 이미 " + s.basket + " 바구니가 연결되어 있습니다.")
      st.slot = s.code
      st.step = 2
      return sortInfo("ok", "앵글 " + s.code + " 선택됨 — 바구니를 스캔하세요")
    }
    if (needBasketNew) {
      var b = basketBy(code)
      if (!b) return sortInfo("ng", "없는 바구니 바코드입니다: " + code)
      if (b.slot) return sortInfo("ng", b.bc + " 바구니는 이미 " + b.slot + " 앵글에 연결되어 있습니다.")
      var sl = slotBy(st.slot)
      link(sl, b)
      st.hist.push({ type: "link", slot: sl.code, basket: b.bc })
      st.my++
      sortDone("", "<span><b>" + esc(sl.code) + "</b> ↔ <b>" + esc(b.bc) + "</b> 연결</span><span>" + hm() + "</span>")
      toast("앵글-바구니 연결 완료")
      if (t === "U") { st.basket = b.bc; st.step = 3; return sortInfo("ok", b.bc + " 연결 완료 — 이 바구니에 담을 송장을 스캔하세요") }
      st.step = 1
      st.slot = null
      return sortInfo("ok", sl.code + " ↔ " + b.bc + " 연결 완료")
    }
    if (needBasketLinked) {
      var b2 = basketBy(code)
      if (!b2) return sortInfo("ng", "없는 바구니 바코드입니다: " + code)
      if (!b2.slot) return sortInfo("ng", b2.bc + " 바구니는 아직 앵글에 연결되지 않았습니다.")
      st.basket = b2.bc
      st.step = 2
      return sortInfo("ok", b2.bc + " (" + b2.slot + ") 선택됨 — 송장을 스캔하세요")
    }
    if (needInv) {
      var o = wfBy(code)
      if (!o) return sortInfo("ng", "소팅 대상이 아닌 송장입니다: " + code)
      if (o.basket) return sortInfo("ng", "이미 " + o.basket + " 바구니에 배정된 송장입니다.")
      o.basket = st.basket
      st.hist.push({ type: "assign", inv: o.inv })
      st.my++
      sortDone("invoice", "<span>송장 <b>" + esc(o.inv) + "</b> → " + esc(st.basket) + "</span><span>" + esc(slotOfBasket(st.basket) || "") + "</span>")
      toast("송장 배정 완료")
      return sortInfo("ok", o.inv + " → " + st.basket + " 배정 완료. 계속 스캔하거나 건너뛰기를 누르세요.")
    }
  }
  function sortReset() { var st = S.sort; st.step = 1; st.slot = null; st.basket = null; st.info = null }
  function viewSorting() {
    var st = S.sort, t = st.tab
    var maxDot = t === "U" ? 3 : 2
    var unSlots = SLOTS.filter(function (s) { return !s.basket })
    var unBaskets = BASKETS.filter(function (b) { return !b.slot })
    var unInv = WF.filter(function (o) { return !o.basket })
    var dots = ""
    for (var i = 1; i <= maxDot; i++) dots += '<span class="s-dot' + (i === st.step ? " on" : i < st.step ? " done" : "") + '"></span>'
    var ctx = st.slot || st.basket ? '<div class="s-step-info">' + (st.slot ? "앵글 <b>" + esc(st.slot) + "</b> " : "") + (st.basket ? "· 바구니 <b>" + esc(st.basket) + "</b>" : "") + "</div>" : ""
    var wantInv = (t === "U" && st.step === 3) || (t === "2" && st.step === 2)
    var wantLinkedBasket = t === "2" && st.step === 1
    var chips = ""
    if (wantInv) chips = unInv.map(function (o) { return chip(o.inv, o.to + " · " + o.items.length + "품목", "sortCode") }).join("") || '<span class="demo-hint-note">배정할 송장이 없습니다.</span>'
    else if (wantLinkedBasket) chips = BASKETS.filter(function (b) { return b.slot }).map(function (b) { return chip(b.bc, b.slot, "sortCode") }).join("")
    var h = '<div class="sorting-root">' +
      '<div class="s-stats"><div class="s-stat" data-act="sortOpen" data-k="slot"><div class="s-stat-v pri">' + unSlots.length + '</div><div class="s-stat-l">미연결 앵글</div></div>' +
      '<div class="s-stat"><div class="s-stat-v">' + (SLOTS.length - unSlots.length) + '</div><div class="s-stat-l">사용 중 앵글</div></div>' +
      '<div class="s-stat"><div class="s-stat-v">' + st.my + '</div><div class="s-stat-l">내 작업</div></div></div>' +
      '<div class="s-tabs">' + [["U", "통합"], ["1", "앵글·바구니"], ["2", "바구니·송장"]].map(function (x) {
        return '<button class="s-tab' + (t === x[0] ? " on" : "") + '" data-act="sortTab" data-t="' + x[0] + '">' + x[1] + "</button>"
      }).join("") + "</div>" +
      '<div class="s-tab-body on"><div class="s-scan-card"><div class="s-step-dots">' + dots + "</div>" +
      '<div class="s-step-head"><span class="s-step-num">' + st.step + '</span><span class="s-step-lbl">' + SORT_LABEL[t][st.step] + "</span></div>" +
      '<form class="s-input-row" data-submit="sortScan" autocomplete="off"><input class="s-input" id="sInput" name="code" placeholder="' + SORT_PH[t][st.step] + '" autocomplete="off">' +
      '<button type="button" class="s-undo" data-act="sortUndo" title="되돌리기">↶</button></form>' +
      (t === "U" && st.step === 3 ? '<button class="s-skip" data-act="sortSkip">송장 스캔 건너뛰기 (다음 앵글)</button>' : "") +
      (st.info ? '<div class="s-step-info ' + st.info.cls + '">' + esc(st.info.text) + "</div>" : '<div class="s-step-info"></div>') + ctx +
      (st.done.length ? '<div class="s-completed">' + st.done.map(function (d) { return '<div class="s-done-card ' + d.kind + '">' + d.html + "</div>" }).join("") + "</div>" : "") +
      "</div></div>" +
      (chips ? hint(wantInv ? "배정 대기 송장 — 눌러서 스캔" : "연결된 바구니 — 눌러서 스캔", chips) :
        hint("아래 목록의 앵글·바구니를 누르면 바로 스캔됩니다", "", "통합: 앵글 → 바구니 → 송장 순서로 스캔해 주문을 앵글 칸에 배치합니다.")) +
      '<div class="s-lists">' +
      '<div class="s-list-card' + (st.open.slot ? "" : " close") + '"><div class="s-list-head orange" data-act="sortList" data-k="slot"><span>미연결 앵글 <span>(' + unSlots.length + ')</span></span><span class="s-caret">▾</span></div><div class="s-list-body">' +
      (unSlots.length ? unSlots.map(function (s) { return '<div class="s-list-row" data-act="sortCode" data-code="' + esc(s.bc) + '"><span class="s-badge">' + esc(s.code) + '</span><span style="font-size:11px;color:var(--sub)">' + esc(s.bc) + "</span></div>" }).join("") : '<div class="s-empty">모든 앵글이 연결되어 있습니다.</div>') + "</div></div>" +
      '<div class="s-list-card' + (st.open.basket ? "" : " close") + '"><div class="s-list-head red" data-act="sortList" data-k="basket"><span>미연결 바구니 <span>(' + unBaskets.length + ')</span></span><span class="s-caret">▾</span></div><div class="s-list-body">' +
      (unBaskets.length ? unBaskets.map(function (b) { return '<div class="s-list-row" data-act="sortCode" data-code="' + esc(b.bc) + '"><span class="s-badge basket">' + esc(b.bc) + '</span><span style="font-size:11px;color:var(--sub)">비어 있음</span></div>' }).join("") : '<div class="s-empty">모든 바구니가 연결되어 있습니다.</div>') + "</div></div>" +
      "</div></div>"
    return inApp("appSortingWork", "소팅 작업", h)
  }

  /* ───────── 피킹 작업 ───────── */
  function pickTargets() { return WF.filter(function (o) { return o.basket && slotOfBasket(o.basket) && o.pack !== "취소" }) }
  function viewPicking() {
    var st = S.pick, tg = pickTargets()
    var agg = {}, wait = 0, doneQ = 0
    tg.forEach(function (o) {
      o.items.forEach(function (it) {
        var a = agg[it.code] || (agg[it.code] = { code: it.code, total: 0, picked: 0 })
        a.total += it.qty; a.picked += it.picked; wait += it.qty - it.picked; doneQ += it.picked
      })
    })
    var rows = Object.keys(agg).map(function (k) { return agg[k] })
    var body = ""
    if (st.view === "list") {
      body = rows.length ? '<table class="inc-tbl"><thead><tr><th>상품명/옵션</th><th style="text-align:center">위치</th><th style="text-align:center">창고</th><th style="text-align:center">진행</th></tr></thead><tbody>' +
        rows.map(function (p) {
          return '<tr data-act="pickProd" data-code="' + esc(p.code) + '" style="cursor:pointer' + (st.prod === p.code ? ";background:#EFF6FF" : "") + '"><td><div>' + esc(pName(p.code)) + "</div>" + (pOpt(p.code) ? '<small class="inc-prod-opt">' + esc(pOpt(p.code)) + "</small>" : "") + "</td>" +
            '<td class="num">' + esc(PRODUCTS[p.code].loc) + '</td><td class="num warehouse">' + PRODUCTS[p.code].stock[2] + '</td><td class="num ' + (p.picked >= p.total ? "complete" : "order") + '">' + p.picked + "/" + p.total + "</td></tr>"
        }).join("") + "</tbody></table>" : '<div class="s-empty">피킹할 상품이 없습니다.</div>'
      if (st.prod) {
        var os = tg.filter(function (o) { return o.items.some(function (it) { return it.code === st.prod }) })
        body += '<div class="s-list-card" style="margin-top:10px"><div class="s-list-head orange" data-act="pickProd" data-code=""><span>' + esc(pName(st.prod)) + " 주문 (" + os.length + ')</span><span>✕</span></div><div class="s-list-body">' +
          os.map(function (o) {
            var it = o.items.filter(function (x) { return x.code === st.prod })[0]
            var done = it.picked >= it.qty
            return '<div class="s-list-row"><span><b>' + esc(o.inv) + '</b><div style="font-size:11px;color:var(--sub)"><span class="s-badge">' + esc(slotOfBasket(o.basket)) + '</span><span class="s-badge basket" style="margin-left:4px">' + esc(o.basket) + "</span> · " + it.picked + "/" + it.qty + "</div></span>" +
              (done ? '<span class="s-badge" style="background:#DCFCE7;color:#166534">완료</span>' : '<button class="btn-act" style="background:var(--pri);color:#fff;border-color:var(--pri);padding:4px 10px;font-size:11px" data-act="pickMark" data-inv="' + esc(o.inv) + '" data-code="' + esc(it.code) + '">피킹완료</button>') + "</div>"
          }).join("") + "</div></div>"
      }
    } else if (st.view === "slot") {
      var linked = SLOTS.filter(function (s) { return s.basket })
      body = linked.length ? '<table class="inc-tbl"><thead><tr><th>앵글</th><th>바구니</th><th style="text-align:center">송장</th><th style="text-align:center">진행</th></tr></thead><tbody>' +
        linked.map(function (s) {
          var os = WF.filter(function (o) { return o.basket === s.basket }), t = 0, p = 0
          os.forEach(function (o) { o.items.forEach(function (it) { t += it.qty; p += it.picked }) })
          return '<tr><td><span class="s-badge">' + esc(s.code) + '</span></td><td><span class="s-badge basket">' + esc(s.basket) + '</span></td><td class="num">' + os.length + '</td><td class="num ' + (t && p >= t ? "complete" : "order") + '">' + p + "/" + t + "</td></tr>"
        }).join("") + "</tbody></table>" : '<div class="s-empty">배치된 앵글이 없습니다.</div>'
    } else {
      var f = st.found
      body = '<div class="s-scan-card"><div class="s-step-head"><span class="s-step-num">1</span><span class="s-step-lbl">상품 바코드 스캔</span></div>' +
        '<form class="s-input-row" data-submit="pickScan" autocomplete="off"><input class="s-input" id="piInput" name="code" placeholder="상품 바코드" autocomplete="off"></form>' +
        (st.info ? '<div class="s-step-info ' + st.info.cls + '">' + esc(st.info.text) + "</div>" : '<div class="s-step-info"></div>') +
        (f ? '<div class="s-completed"><div class="s-done-card" style="background:#EFF6FF;border-color:#BFDBFE;color:#1E40AF"><div><b>' + esc(pName(f.code)) + '</b><div style="font-size:11px;margin-top:2px">송장: ' + esc(f.inv) + "</div></div>" +
          '<div style="text-align:right"><div><span class="s-badge">' + esc(slotOfBasket(f.basket)) + '</span></div><div style="margin-top:4px"><span class="s-badge basket">' + esc(f.basket) + "</span></div>" +
          '<button class="btn-act" style="background:var(--pri);color:#fff;border-color:var(--pri);padding:3px 8px;font-size:11px;margin-top:4px" data-act="pickMark" data-inv="' + esc(f.inv) + '" data-code="' + esc(f.code) + '">완료</button></div></div></div>' : "") +
        "</div>" +
        hint("피킹 대기 상품 — 눌러서 스캔", rows.filter(function (p) { return p.picked < p.total }).map(function (p) { return chip(p.code, pName(p.code).slice(0, 8) + " " + (p.total - p.picked) + "개", "pickCode") }).join("") || '<span class="demo-hint-note">피킹할 상품이 없습니다. 소팅 작업에서 송장을 바구니에 배정해 보세요.</span>')
    }
    var h = '<div class="sorting-root">' +
      '<div class="s-stats"><div class="s-stat"><div class="s-stat-v pri">' + wait + '</div><div class="s-stat-l">피킹 대기</div></div>' +
      '<div class="s-stat"><div class="s-stat-v">' + doneQ + '</div><div class="s-stat-l">피킹 완료</div></div>' +
      '<div class="s-stat"><div class="s-stat-v">' + SLOTS.filter(function (s) { return s.basket }).length + '</div><div class="s-stat-l">배치 앵글</div></div></div>' +
      '<div class="s-tabs">' + [["list", "상품별"], ["slot", "앵글별"], ["scan", "스캔 피킹"]].map(function (x) {
        return '<button class="s-tab' + (st.view === x[0] ? " on" : "") + '" data-act="pickView" data-v="' + x[0] + '">' + x[1] + "</button>"
      }).join("") + "</div>" + body + "</div>"
    return inApp("appPicking", "피킹 작업", h)
  }
  function pickScan(code) {
    var st = S.pick
    code = String(code || "").trim().toUpperCase()
    if (!code) return
    st.found = null
    if (!PRODUCTS[code]) { st.info = { cls: "ng", text: "없는 상품 바코드입니다: " + code }; return }
    var hit = null
    pickTargets().forEach(function (o) { o.items.forEach(function (it) { if (!hit && it.code === code && it.picked < it.qty) hit = { inv: o.inv, basket: o.basket, code: code } }) })
    if (!hit) { st.info = { cls: "ng", text: pName(code) + " — 피킹할 주문이 없습니다." }; toast("피킹 대상 없음"); return }
    st.found = hit
    st.info = { cls: "ok", text: "찾았습니다: " + slotOfBasket(hit.basket) + " 앵글 / " + hit.basket + " 바구니에 담으세요" }
  }
  function pickMark(inv, code) {
    var o = wfBy(inv)
    o.items.forEach(function (it) { if (it.code === code) it.picked = Math.min(it.qty, it.picked + (S.pick.view === "scan" ? 1 : it.qty)) })
    if (S.pick.found && S.pick.found.inv === inv) { S.pick.found = null; S.pick.info = { cls: "ok", text: "피킹 완료 — 다음 상품을 스캔하세요" } }
    toast("피킹 완료")
  }

  /* ───────── 포장 작업 ───────── */
  function packStatusStyle(s) {
    return { 완료: "background:#DCFCE7;color:#166534", 보류: "background:#FEF3C7;color:#92400E", 취소: "background:#FEF2F2;color:#991B1B" }[s] || ""
  }
  function viewPacking() {
    var st = S.pack
    var all = WF.filter(function (o) { return o.basket })
    var cnt = function (s) { return all.filter(function (o) { return o.pack === s }).length }
    var list = st.list.map(wfBy).filter(Boolean)
    var h = '<div class="sorting-root">' +
      '<div class="s-stats"><div class="s-stat"><div class="s-stat-v pri">' + cnt("대기") + '</div><div class="s-stat-l">포장 대기</div></div>' +
      '<div class="s-stat"><div class="s-stat-v">' + cnt("완료") + '</div><div class="s-stat-l">포장 완료</div></div>' +
      '<div class="s-stat"><div class="s-stat-v">' + cnt("보류") + '</div><div class="s-stat-l">보류</div></div></div>' +
      '<div class="s-scan-card"><div class="s-step-head"><span class="s-step-num">1</span><span class="s-step-lbl">바구니 또는 송장 스캔</span></div>' +
      '<form class="s-input-row" data-submit="packScan" autocomplete="off"><input class="s-input" id="paInput" name="code" placeholder="바구니 바코드 / 송장번호" autocomplete="off"></form>' +
      (st.info ? '<div class="s-step-info ' + st.info.cls + '">' + esc(st.info.text) + "</div>" : '<div class="s-step-info"></div>') +
      '<div class="s-completed">' + (st.list.length ? (list.length ? list.map(function (o) {
        var n = o.items.reduce(function (s, it) { return s + it.qty }, 0), p = o.items.reduce(function (s, it) { return s + it.picked }, 0)
        return '<div class="s-done-card" style="cursor:pointer" data-act="packOpen" data-inv="' + esc(o.inv) + '"><div><b>' + esc(o.inv) + '</b><div style="font-size:11px;color:var(--sub)">' + esc(o.to) + " · " + o.items.length + "품목 · 피킹 " + p + "/" + n + "</div>" +
          (o.hold ? '<div style="font-size:11px;color:#B91C1C">보류: ' + esc(o.hold) + "</div>" : "") + '</div><span class="s-badge" style="' + packStatusStyle(o.pack) + '">' + esc(o.pack) + "</span></div>"
      }).join("") : '<div class="s-empty">처리할 주문이 없습니다.</div>') : "") + "</div></div>" +
      hint("배치된 바구니 — 눌러서 스캔", BASKETS.filter(function (b) { return b.slot }).map(function (b) {
        return chip(b.bc, b.slot + " · " + WF.filter(function (o) { return o.basket === b.bc }).length + "건", "packCode")
      }).join(""), "피킹이 모두 끝난 주문만 포장 완료할 수 있습니다.") + "</div>"
    var modal = ""
    if (st.open) {
      var o = wfBy(st.open), isHold = o.pack === "보류"
      modal = '<div class="modal-bg show" data-backdrop="packClose"><div class="modal-box"><div class="modal-handle"></div><div class="modal-title">주문 상세</div>' +
        '<div class="r-row"><span class="r-label">송장</span><span class="r-val"><b>' + esc(o.inv) + "</b></span></div>" +
        '<div class="r-row"><span class="r-label">수취인</span><span class="r-val">' + esc(o.to) + "</span></div>" +
        '<div class="r-row"><span class="r-label">위치</span><span class="r-val"><span class="s-badge">' + esc(slotOfBasket(o.basket) || "-") + '</span> <span class="s-badge basket">' + esc(o.basket) + "</span></span></div>" +
        '<div class="r-row"><span class="r-label">상태</span><span class="r-val">' + esc(o.pack) + "</span></div>" +
        (o.hold ? '<div class="r-row"><span class="r-label">보류사유</span><span class="r-val">' + esc(o.hold) + "</span></div>" : "") +
        '<div style="margin-top:8px;border-top:1px dashed var(--bdr);padding-top:6px">' + o.items.map(function (it) {
          return '<div class="r-row" style="font-size:13px"><span class="r-label">' + esc(pName(it.code)) + (pOpt(it.code) ? " [" + esc(pOpt(it.code)) + "]" : "") + '</span><span class="r-val" style="color:' + (it.picked >= it.qty ? "var(--grn)" : "var(--red)") + '">' + it.picked + "/" + it.qty + "</span></div>"
        }).join("") + "</div>" +
        '<div style="display:flex;gap:6px;margin-top:14px;flex-wrap:wrap">' +
        (o.pack === "완료" || o.pack === "취소" ? "" :
          (!isHold ? '<button class="btn-act" style="flex:1;background:#16A34A;color:#fff;border-color:#16A34A" data-act="packDo" data-a="complete">패킹 완료</button><button class="btn-act" style="flex:1;background:#F59E0B;color:#fff;border-color:#F59E0B" data-act="packDo" data-a="hold">보류</button>'
            : '<button class="btn-act" style="flex:1;background:var(--pri);color:#fff;border-color:var(--pri)" data-act="packDo" data-a="release">보류 해제</button>') +
          '<button class="btn-act" style="flex:1;background:#DC2626;color:#fff;border-color:#DC2626" data-act="packDo" data-a="cancel">취소</button>') +
        '</div><div class="modal-footer"><button class="btn-act" data-act="packClose">닫기</button></div></div></div>'
    }
    return inApp("appPacking", "포장 작업", h) + modal
  }
  function packScan(code) {
    var st = S.pack
    code = String(code || "").trim().toUpperCase()
    if (!code) return
    var b = basketBy(code)
    if (b) {
      if (!b.slot) { st.info = { cls: "ng", text: b.bc + " 바구니는 배치되지 않았습니다." }; st.list = []; return }
      st.list = WF.filter(function (o) { return o.basket === b.bc }).map(function (o) { return o.inv })
      st.info = { cls: "ok", text: "바구니 " + b.bc + " — 주문 " + st.list.length + "건" }
      return
    }
    var o = wfBy(code)
    if (o && o.basket) { st.list = [o.inv]; st.open = o.inv; st.info = { cls: "ok", text: "송장 " + o.inv + " (" + o.basket + ")" }; return }
    st.info = { cls: "ng", text: o ? "아직 소팅되지 않은 송장입니다." : "없는 바코드입니다: " + code }
    st.list = []
  }

  /* ───────── 관리자 페이지 (체험판 구성) ───────── */
  function viewManage() {
    var c = function (s) { return ORDERS.filter(function (o) { return o.status === s }).length }
    var holds = ORDERS.filter(function (o) { return o.status === "hold" })
    var linked = SLOTS.filter(function (s) { return s.basket })
    var h = '<div class="incoming-root">' +
      '<div class="inc-stats"><div class="inc-stat outgoing"><div class="inc-stat-v">' + c("done") + '</div><div class="inc-stat-l">출고완료</div></div>' +
      '<div class="inc-stat"><div class="inc-stat-v">' + c("ready") + '</div><div class="inc-stat-l">출고 대기</div></div>' +
      '<div class="inc-stat warehouse"><div class="inc-stat-v">' + holds.length + '</div><div class="inc-stat-l">출고보류</div></div></div>' +
      '<div class="inc-recent"><div class="inc-sec-title">출고보류 주문</div>' +
      (holds.length ? '<table class="inc-tbl"><thead><tr><th>운송장</th><th>사유</th><th></th></tr></thead><tbody>' + holds.map(function (o) {
        return "<tr><td>" + esc(o.inv) + '<small class="inc-prod-opt">' + esc(o.to) + "</small></td><td>" + esc(o.hold || "-") + '</td><td style="text-align:right"><button class="btn-act blue" style="padding:4px 10px;font-size:11px" data-act="release" data-inv="' + esc(o.inv) + '">해제</button></td></tr>'
      }).join("") + "</tbody></table>" : '<div class="s-empty">보류 중인 주문이 없습니다.</div>') + "</div>" +
      '<div class="inc-recent"><div class="inc-sec-title">앵글·바구니 현황</div>' +
      (linked.length ? '<table class="inc-tbl"><thead><tr><th>앵글</th><th>바구니</th><th style="text-align:center">송장</th><th></th></tr></thead><tbody>' + linked.map(function (s) {
        return '<tr><td><span class="s-badge">' + esc(s.code) + '</span></td><td><span class="s-badge basket">' + esc(s.basket) + '</span></td><td class="num">' + WF.filter(function (o) { return o.basket === s.basket }).length +
          '</td><td style="text-align:right"><button class="btn-act red" style="padding:4px 10px;font-size:11px" data-act="unlink" data-slot="' + esc(s.code) + '">연결 해제</button></td></tr>'
      }).join("") + "</tbody></table>" : '<div class="s-empty">연결된 앵글이 없습니다.</div>') + "</div>" +
      '<div class="inc-recent"><div class="inc-sec-title">작업자</div><table class="inc-tbl"><thead><tr><th>이름</th><th>담당</th><th style="text-align:center">상태</th></tr></thead><tbody>' +
      [{ name: ME.name, role: "출고", online: true }].concat(STAFF).map(function (u) {
        return "<tr><td>" + esc(u.name) + "</td><td>" + esc(u.role) + '</td><td class="num" style="color:' + (u.online ? "var(--grn)" : "var(--sub)") + '">' + (u.online ? "접속" : "미접속") + "</td></tr>"
      }).join("") + "</tbody></table></div></div>"
    return inApp("appManage", "관리자 페이지", h)
  }

  /* ───────── 수거송장등록 (체험판 구성) ───────── */
  function viewReturn() {
    var h = '<div class="incoming-root"><div class="scan-card"><h4>수거송장 등록</h4>' +
      '<p style="font-size:13px;color:var(--sub);margin-bottom:12px;line-height:1.5">반품·교환 수거 운송장을 원 운송장과 함께 등록합니다.</p>' +
      '<form data-submit="retAdd" autocomplete="off">' +
      '<div class="fg"><label>원 운송장번호</label><input name="orig" id="retOrig" placeholder="출고된 운송장번호" inputmode="numeric"></div>' +
      '<div class="fg"><label>수거 운송장번호</label><input name="ret" id="retNo" placeholder="수거 운송장번호" inputmode="numeric"></div>' +
      '<div style="display:flex;gap:8px"><div class="fg" style="flex:1"><label>택배사</label><select name="carrier"><option>' + esc(CARRIER) + "</option><option>(가상) 누리로지스</option></select></div>" +
      '<div class="fg" style="flex:1"><label>사유</label><select name="reason"><option>단순변심</option><option>상품 불량</option><option>오배송</option><option>사이즈 교환</option></select></div></div>' +
      '<button class="btn-pri" type="submit">등록</button></form></div>' +
      hint("체험용 값", chip("770012440037", "원 운송장 (출고완료)", "retFill") + chip("770099120024", "수거 운송장", "retFill2")) +
      '<div class="inc-recent"><div class="inc-sec-title">등록 내역 (' + S.returns.length + ")</div>" +
      (S.returns.length ? '<table class="inc-tbl"><thead><tr><th>원 운송장</th><th>수거 운송장</th><th>사유</th></tr></thead><tbody>' + S.returns.map(function (r, i) {
        return '<tr class="' + (i === 0 && r.fresh ? "just-scanned" : "") + '"><td>' + esc(r.orig) + '<small class="inc-prod-opt">' + esc(r.at) + "</small></td><td>" + esc(r.ret) + '<small class="inc-prod-opt">' + esc(r.carrier) + "</small></td><td>" + esc(r.reason) + "</td></tr>"
      }).join("") + "</tbody></table>" : '<div class="s-empty">등록된 수거송장이 없습니다.</div>') + "</div></div>"
    return inApp("appReturn", "수거송장등록", h)
  }

  /* ───────── 부가기능 ───────── */
  function boardUnread() { return POSTS.filter(function (p) { return p.unread }).length }
  function chatUnread() {
    var n = 0
    for (var k in CHAT.direct) n += CHAT.direct[k].unread
    CHAT.groups.forEach(function (g) { n += g.unread })
    return n
  }
  function worksUnread() { return WORKS.reduce(function (s, c) { return s + c.unread }, 0) }
  function viewExtra() {
    var bu = boardUnread(), cu = chatUnread()
    return '<div class="tab-body on" id="tabExtra"><div id="extraMenu">' +
      '<div class="extra-user-card"><div class="extra-user-avatar">' + esc(ME.name.charAt(0)) + '</div><div class="extra-user-info"><div class="extra-user-name">' + esc(ME.name) + " (" + esc(ME.team) + ')</div><div class="extra-user-sub">' + esc(ME.center) + " · 체험 계정</div></div></div>" +
      '<div class="app-grid">' +
      '<button class="app-icon" data-act="go" data-to="/board"><div class="app-icon-img board">📋<span class="icon-badge' + (bu ? " on" : "") + '">' + bu + '</span></div><div class="app-icon-label">게시판</div></button>' +
      '<button class="app-icon" data-act="go" data-to="/chat"><div class="app-icon-img chat">💬<span class="icon-badge' + (cu ? " on" : "") + '">' + cu + '</span></div><div class="app-icon-label">채팅</div></button>' +
      '<button class="app-icon" data-act="go" data-to="/settings"><div class="app-icon-img settings">⚙</div><div class="app-icon-label">설정</div></button>' +
      '<button class="app-icon" data-act="logout"><div class="app-icon-img logout">🚪</div><div class="app-icon-label">로그아웃</div></button>' +
      "</div>" +
      '<div class="works-login-card"><div class="works-login-title">💬 웍스 채팅</div>' +
      (S.worksLogged
        ? '<div class="works-login-status ok">로그인됨 · ' + esc(ME.name) + ' (체험 계정)</div><div><button type="button" class="btn-sec" data-act="go" data-to="/works">웍스 채팅 열기</button><button type="button" class="btn-sec works-logout-btn" data-act="worksLogout">웍스 로그아웃</button></div>'
        : '<div class="works-login-status">로그인되어 있지 않습니다</div><form data-submit="worksLogin" autocomplete="off">' +
          '<div class="fg"><label>도메인</label><input type="text" name="domain" value="osung-demo.works" autocomplete="off"></div>' +
          '<div class="fg"><label>아이디</label><input type="text" name="id" placeholder="아이디 (아무 값이나)" autocomplete="off"></div>' +
          '<div class="fg"><label>비밀번호</label><input type="password" name="pw" placeholder="비밀번호" autocomplete="off"></div>' +
          '<button type="submit" class="btn-pri">웍스 로그인</button><div class="works-or">또는</div><button type="button" class="btn-sec" data-act="worksPhone">📱 휴대폰 번호로 로그인</button></form>') +
      "</div></div></div>"
  }

  /* ───────── 웍스 ───────── */
  function viewWorks(q) {
    if (!S.worksLogged) {
      return '<div class="tab-body on" id="tabWorks"><div class="works-need-login"><div class="works-need-icon">💬</div><div class="works-need-title">웍스에 로그인되어 있지 않습니다</div>' +
        '<div class="works-need-sub">부가기능 탭에서 웍스 계정으로 로그인하세요.</div><button class="btn-pri" style="max-width:240px" data-act="go" data-to="/extra">부가기능에서 로그인하기</button></div></div>'
    }
    var room = q.room ? WORKS.filter(function (c) { return String(c.id) === q.room })[0] : null
    var h = '<div class="tab-body on" id="tabWorks"><div class="works-chat">'
    if (!room) {
      h += '<div class="works-list-view"><div class="works-list-hdr"><span>' + esc(ME.name) + '</span><div class="works-hdr-actions"><button type="button" class="works-sort-btn">최신순</button><button type="button" class="works-refresh" data-act="worksRefresh" title="새로고침">⟳</button></div></div>' +
        '<div class="works-channel-list">' + WORKS.map(function (c) {
          var last = c.msgs[c.msgs.length - 1]
          return '<div class="works-channel-item" data-act="go" data-to="/works?room=' + c.id + '"><div class="works-ch-avatar" style="background:' + avatarColor(c.title) + '">' + esc(c.title.replace("(가상) ", "").charAt(0)) + "</div>" +
            '<div class="works-ch-info"><div class="works-ch-title">' + esc(c.title) + '<span class="works-ch-num">' + c.count + '</span></div><div class="works-ch-last">' + esc(last.text || last.sys) + "</div></div>" +
            '<div class="works-ch-meta"><span class="works-ch-time">' + esc(last.at || "") + "</span>" + (c.unread ? '<span class="works-ch-unread">' + c.unread + "</span>" : "") + "</div></div>"
        }).join("") + "</div></div>"
    } else {
      room.unread = 0
      var sq = S.worksSearch
      var hits = 0
      var msgs = room.msgs.map(function (m) {
        if (m.sys) return '<div class="works-sys">' + esc(m.sys) + "</div>"
        var hit = sq && m.text.indexOf(sq) >= 0
        if (hit) hits++
        var who = m.mine ? ME.name : m.who
        return '<div class="works-row ' + (m.mine ? "mine" : "other") + (hit ? " works-search-hit" : "") + '">' +
          (m.mine ? "" : '<div class="works-av" style="background:' + avatarColor(who) + '">' + esc(who.charAt(0)) + "</div>") +
          '<div class="works-bubble-col"><div class="works-msg ' + (m.mine ? "mine" : "other") + '">' + (m.mine ? "" : '<span class="works-msg-who">' + esc(who) + "</span>") + esc(m.text) + "</div></div>" +
          '<div class="works-meta">' + (m.mine ? '<span class="works-read">' + (m.read ? "" : "1") + "</span>" : "") + '<span class="works-time">' + esc(m.at) + "</span></div></div>"
      }).join("")
      h += '<div class="works-room-view"><div class="works-room-hdr"><button type="button" class="works-back" data-act="go" data-to="/works">‹</button><span class="works-room-title">' + esc(room.title) + ' <span class="works-ch-num">' + room.count + "</span></span>" +
        '<button type="button" class="works-search-btn" data-act="worksSearch" title="대화 검색">🔍</button></div>' +
        (sq !== null ? '<div class="works-search-bar"><input type="text" id="worksSearchInput" class="works-search-input" placeholder="대화 내용 검색" autocomplete="off" value="' + esc(sq) + '" data-input="worksSearchInput"><span class="works-search-count">' + (sq ? hits + "건" : "0/0") + '</span><button type="button" class="works-search-x" data-act="worksSearch" title="검색 닫기">✕</button></div>' : "") +
        (room.notice ? '<div class="works-notice-bar"><div class="works-notice-item"><span class="wn-ico">📢</span><span class="wn-body folded">' + esc(room.notice) + "</span></div></div>" : "") +
        '<div class="works-messages"><div class="works-daydiv"><span>' + esc(Demo.day(0)) + "</span></div>" + msgs + "</div>" +
        '<div class="works-send-bar"><button type="button" class="works-icon-btn works-plus-btn" data-act="noAttach" title="첨부">＋</button>' +
        '<textarea id="worksMsgInput" class="works-msg-input" rows="1" placeholder="메시지 입력..." autocomplete="off" enterkeyhint="send"></textarea>' +
        '<button type="button" class="works-send-btn" data-act="worksSend" data-room="' + room.id + '">전송</button></div></div>'
    }
    return h + "</div></div>"
  }

  /* ───────── 게시판 ───────── */
  function statusChip(s) { return '<span class="status-chip ' + (s === "요청" ? "req" : s === "확인중" ? "ing" : "done") + '">' + esc(s) + "</span>" }
  function postBy(id) { return POSTS.filter(function (p) { return String(p.id) === String(id) })[0] }
  function viewBoard(path) {
    var parts = path.split("/") // ["", "board", id|write]
    var sub = parts[2]
    var body = "", title = "게시판"
    if (sub === "write") {
      title = "글쓰기"
      body = '<div id="boardWriteView" style="padding:10px"><form class="scan-card" data-submit="postSubmit" autocomplete="off">' +
        '<div class="fg"><label>분류</label><select name="cat" style="width:100%;padding:9px 12px;border:1.5px solid var(--bdr);border-radius:8px;font-size:14px;outline:none;background:#fff;font-family:inherit">' +
        CATS.map(function (c) { return '<option value="' + c.id + '">' + esc(c.name) + "</option>" }).join("") + "</select></div>" +
        '<div class="fg"><label>제목</label><input type="text" name="title" id="postTitleInput" placeholder="제목" autocomplete="off"></div>' +
        '<div class="fg"><label>내용</label><textarea name="body" placeholder="내용" style="width:100%;padding:10px;border:1.5px solid var(--bdr);border-radius:8px;font-size:14px;resize:vertical;min-height:120px;outline:none;font-family:inherit"></textarea></div>' +
        '<div style="display:flex;gap:8px;margin-bottom:10px"><button type="button" class="btn-act" data-act="noAttach" style="flex:0 0 auto">📷 사진</button></div>' +
        '<div style="display:flex;gap:8px"><button class="btn-pri" type="submit" style="flex:1">등록</button><button type="button" class="btn-act" data-act="go" data-to="/board" style="flex:1">취소</button></div></form></div>'
    } else if (sub) {
      var p = postBy(sub)
      if (!p) body = '<div class="empty">게시글이 없습니다</div>'
      else {
        p.unread = false
        if (p.reads.indexOf(ME.name) < 0) p.reads.push(ME.name)
        var catTag = catName(p.cat) ? '<span class="cat-tag">' + esc(catName(p.cat)) + "</span>" : ""
        var own = p.author === ME.name
        var hist = p.history.length ? '<div class="status-history">' + p.history.map(function (x) {
          return '<div class="status-history-item"><span class="status-chip ' + (x.s === "요청" ? "req" : x.s === "확인중" ? "ing" : "done") + '" style="font-size:10px;padding:1px 6px">' + esc(x.s) + "</span><span>" + esc(x.by) + '</span><span class="status-history-time">' + esc(x.at.slice(5, 16)) + "</span></div>"
        }).join("") + "</div>" : ""
        body = '<div id="boardDetailView" style="padding:10px"><div class="scan-card">' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px"><div style="font-size:17px;font-weight:700;flex:1;min-width:0;word-break:break-all">' + catTag + esc(p.title) + "</div>" +
          '<select class="status-select status-' + (p.status === "요청" ? "req" : p.status === "확인중" ? "ing" : "done") + '" data-change="postStatus" data-id="' + p.id + '">' +
          ["요청", "확인중", "완료"].map(function (s) { return '<option value="' + s + '"' + (p.status === s ? " selected" : "") + ">" + s + "</option>" }).join("") + "</select>" +
          '<div class="kebab-wrap"><button class="kebab-btn" data-act="kebab" data-k="post" aria-label="더보기">⋮</button><div class="kebab-menu' + (S.kebab === "post" ? " on" : "") + '">' +
          (own ? '<button data-act="postEdit" data-id="' + p.id + '">수정</button>' : "") + '<button class="danger" data-act="postDel" data-id="' + p.id + '">삭제</button></div></div></div>' +
          hist +
          '<div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--sub);margin-bottom:10px"><span>' + esc(p.author) + " · " + esc(p.created) + '</span><button class="read-count-btn" data-act="readers" data-id="' + p.id + '">👁 읽음 ' + p.reads.length + "명</button></div>" +
          (p.body ? '<div style="font-size:14px;line-height:1.6;white-space:pre-wrap;word-break:break-all">' + esc(p.body) + "</div>" : "") + "</div>" +
          '<div class="scan-card" style="margin-top:6px"><div style="font-size:13px;font-weight:600;margin-bottom:10px">댓글 ' + p.comments.length + "</div>" +
          '<div id="commentList">' + p.comments.map(function (c) {
            var mine = c.author === ME.name
            var k = "c" + c.id
            return '<div class="comment-row ' + (mine ? "mine" : "other") + '"><div class="comment-col">' + (mine ? "" : '<div class="comment-author">' + esc(c.author) + "</div>") +
              '<div class="comment-bubble-row"><div class="comment-bubble">' + esc(c.body) + "</div>" +
              (mine ? '<div class="kebab-wrap"><button class="kebab-btn" data-act="kebab" data-k="' + k + '" aria-label="더보기">⋮</button><div class="kebab-menu' + (S.kebab === k ? " on" : "") + '"><button data-act="cmtEdit" data-pid="' + p.id + '" data-id="' + c.id + '">수정</button><button class="danger" data-act="cmtDel" data-pid="' + p.id + '" data-id="' + c.id + '">삭제</button></div></div>' : "") +
              '</div><div class="comment-time">' + esc(c.at) + "</div></div></div>"
          }).join("") + "</div>" +
          '<form style="margin-top:10px" data-submit="cmtSubmit" data-id="' + p.id + '"><textarea id="commentInput" name="body" placeholder="댓글 입력" style="width:100%;padding:8px;border:1.5px solid var(--bdr);border-radius:6px;font-size:13px;resize:none;min-height:50px;outline:none;font-family:inherit"></textarea>' +
          '<div style="display:flex;gap:6px;margin-top:6px"><button type="button" class="btn-act" data-act="noAttach">📷</button><button class="btn-act blue" type="submit" style="flex:1">댓글 등록</button></div></form></div></div>'
      }
    } else {
      var list = POSTS.filter(function (p) { return (!S.boardCat || String(p.cat) === S.boardCat) && (!S.boardStatus || p.status === S.boardStatus) })
      body = '<div id="boardListView"><div style="padding:10px 10px 0;display:flex;gap:6px">' +
        '<select data-change="boardCat" style="flex:1;padding:9px 12px;border:1.5px solid var(--bdr);border-radius:8px;font-size:14px;outline:none;background:#fff;font-family:inherit"><option value="">전체 분류</option>' +
        CATS.map(function (c) { return '<option value="' + c.id + '"' + (S.boardCat === String(c.id) ? " selected" : "") + ">" + esc(c.name) + "</option>" }).join("") + "</select>" +
        '<select data-change="boardStatus" style="flex:0 0 auto;padding:9px 12px;border:1.5px solid var(--bdr);border-radius:8px;font-size:14px;outline:none;background:#fff;font-family:inherit"><option value="">전체 상태</option>' +
        ["요청", "확인중", "완료"].map(function (s) { return '<option value="' + s + '"' + (S.boardStatus === s ? " selected" : "") + ">" + s + "</option>" }).join("") + "</select></div>" +
        '<div id="boardList" style="padding:10px">' + (list.length ? list.map(function (p) {
          return '<div class="post-card' + (p.unread ? " has-unread" : "") + '" data-act="go" data-to="/board/' + p.id + '"><div class="post-title">' + (catName(p.cat) ? '<span class="cat-tag">' + esc(catName(p.cat)) + "</span>" : "") + esc(p.title) + (p.unread ? '<span class="post-unread-dot">N</span>' : "") + "</div>" +
            '<div class="post-meta"><span>' + esc(p.author) + " · " + esc(p.created) + " · 💬 " + p.comments.length + " · 👁 " + p.reads.length + "</span>" + statusChip(p.status) + "</div></div>"
        }).join("") : '<div class="empty">게시글이 없습니다</div>') + "</div></div>"
    }
    return inApp("appBoard", title, '<div class="board-wrap">' + body + "</div>", {
      back: sub ? "/board" : "/extra",
      right: sub ? "" : '<button class="in-app-back" data-act="go" data-to="/board/write" style="margin-left:auto">＋</button>',
    })
  }

  /* ───────── 채팅 ───────── */
  function roomOf(key) {
    if (key.charAt(0) === "d") {
      var uid = Number(key.slice(1))
      if (!CHAT.direct[uid]) CHAT.direct[uid] = { unread: 0, msgs: [] }
      var u = staff(uid)
      return { key: key, title: u.name, sub: u.online ? "접속 중" : "미접속", data: CHAT.direct[uid], members: [uid] }
    }
    var g = CHAT.groups.filter(function (x) { return "g" + x.id === key })[0]
    if (!g) return null
    return { key: key, title: g.name, sub: g.members.map(function (id) { return staff(id).name }).concat(ME.name).join(", "), data: g, members: g.members, group: true }
  }
  function viewChat(path) {
    var key = path.split("/")[2]
    var h = ""
    if (key && roomOf(key)) {
      var r = roomOf(key)
      r.data.unread = 0
      h = '<div class="chat-room-view on"><div class="chat-room-hdr"><button class="chat-back" data-act="go" data-to="/chat">‹</button><div style="flex:1;min-width:0"><div class="chat-room-title">' + esc(r.title) + '</div><div class="chat-room-subtitle">' + esc(r.sub) + "</div></div></div>" +
        '<div class="chat-messages" id="chatMessages">' + (r.data.msgs.length ? r.data.msgs.map(function (m) {
          var mine = m.from === 0
          var who = mine ? ME.name : staff(m.from).name
          return '<div class="chat-msg-row ' + (mine ? "mine" : "other") + '">' + (mine ? "" : '<div class="chat-avatar" style="width:32px;height:32px;font-size:13px;background:' + avatarColor(who) + ';color:#fff">' + esc(who.charAt(0)) + "</div>") +
            '<div class="chat-msg-col">' + (!mine && r.group ? '<div class="chat-msg-sender">' + esc(who) + "</div>" : !mine ? '<div class="chat-msg-sender">' + esc(who) + "</div>" : "") +
            '<div class="chat-bubble-wrap"><div class="chat-bubble">' + esc(m.text) + "</div></div>" +
            '<div class="chat-msg-meta">' + (mine && m.unreadCnt ? '<span class="chat-read-count">' + m.unreadCnt + "</span>" : "") + "<span>" + esc(m.at) + "</span></div></div></div>"
        }).join("") : '<div class="chat-empty">대화를 시작해 보세요</div>') + "</div>" +
        '<div class="chat-input-bar"><button class="chat-photo-btn" data-act="noAttach" title="사진 보내기">📷</button><textarea class="chat-input" id="chatInput" placeholder="메시지 입력..." rows="1"></textarea>' +
        '<button class="chat-send-btn" data-act="chatSend" data-key="' + esc(key) + '">전송</button></div></div>'
    } else {
      var pane = S.chatPane
      var dUn = 0, gUn = 0
      for (var k in CHAT.direct) dUn += CHAT.direct[k].unread
      CHAT.groups.forEach(function (g) { gUn += g.unread })
      h = '<div style="display:flex;flex-direction:column;flex:1;min-height:0"><div class="chat-tabs">' +
        '<button class="chat-tab' + (pane === "direct" ? " on" : "") + '" data-act="chatPane" data-p="direct">개인<span class="chat-tab-badge' + (dUn ? " on" : "") + '">' + dUn + "</span></button>" +
        '<button class="chat-tab' + (pane === "group" ? " on" : "") + '" data-act="chatPane" data-p="group">그룹<span class="chat-tab-badge' + (gUn ? " on" : "") + '">' + gUn + "</span></button></div>"
      if (pane === "direct") {
        h += '<div class="chat-pane on"><div class="chat-list">' + STAFF.map(function (u) {
          var d = CHAT.direct[u.id], last = d && d.msgs.length ? d.msgs[d.msgs.length - 1] : null
          return '<div class="chat-user-row" data-act="go" data-to="/chat/d' + u.id + '"><div class="chat-avatar ' + (u.online ? "online" : "offline") + '">' + esc(u.name.charAt(0)) + "</div>" +
            '<div class="chat-user-info"><div class="chat-user-name">' + esc(u.name) + ' <span style="font-weight:400;color:var(--sub);font-size:12px">' + esc(u.role) + "</span>" + (d && d.unread ? '<span class="chat-room-unread">' + d.unread + "</span>" : "") + "</div>" +
            '<div class="chat-user-status">' + (last ? esc(last.text) : u.online ? "접속 중" : "미접속") + "</div></div></div>"
        }).join("") + "</div></div>"
      } else {
        h += '<div class="chat-pane on" style="position:relative"><div class="chat-list">' + CHAT.groups.map(function (g) {
          var last = g.msgs[g.msgs.length - 1]
          return '<div class="chat-room-row" data-act="go" data-to="/chat/g' + g.id + '"><div class="chat-avatar" style="background:#DBEAFE;color:#1D4ED8">👥</div><div class="chat-room-info"><div class="chat-room-name"><span>' + esc(g.name) + ' <span style="color:var(--sub);font-weight:400">' + (g.members.length + 1) + "</span>" +
            (g.unread ? '<span class="chat-room-unread">' + g.unread + "</span>" : "") + '</span><span class="chat-room-time">' + esc(last ? last.at : "") + '</span></div><div class="chat-room-last">' + esc(last ? last.text : "") + "</div></div></div>"
        }).join("") + '</div><button class="chat-fab" data-act="groupOpen" title="새 그룹">＋</button></div>'
      }
      h += "</div>"
    }
    var modal = S.groupModal ? '<div class="modal-bg show" id="chatGroupModal" data-backdrop="groupClose"><form class="modal-box" data-submit="groupCreate"><div class="modal-handle"></div><div class="modal-title">새 그룹 방</div>' +
      '<div class="fg"><label>방 이름</label><input type="text" name="name" id="chatGroupName" placeholder="그룹 이름" autocomplete="off"></div>' +
      '<div style="font-size:13px;color:var(--sub);margin-bottom:6px">초대할 사용자 선택</div><div style="max-height:40vh;overflow-y:auto;border:1px solid var(--bdr);border-radius:8px">' +
      STAFF.map(function (u) { return '<label class="chat-member-pick"><input type="checkbox" name="m' + u.id + '" value="' + u.id + '"><span>' + esc(u.name) + ' <span style="color:var(--sub);font-size:12px">' + esc(u.role) + "</span></span></label>" }).join("") +
      '</div><div class="modal-footer"><button class="btn-act blue" type="submit">생성</button><button class="btn-act" type="button" data-act="groupClose">닫기</button></div></form></div>' : ""
    return inApp("appChat", key ? "채팅" : "채팅", '<div class="chat-wrap" style="position:relative">' + h + "</div>", { back: key ? "/chat" : "/extra" }) + modal
  }

  /* ───────── 설정 ───────── */
  function viewSettingsApp() {
    var h = '<div style="max-width:900px;margin:0 auto;padding:12px"><div class="scan-card"><h4>게시판 분류 관리</h4>' +
      '<p style="font-size:12px;color:var(--sub);margin-bottom:12px;line-height:1.5">글 작성 시 선택할 분류를 추가/수정/삭제합니다. 분류 삭제 시 해당 분류로 된 글은 \'미분류\' 로 남습니다.</p>' +
      '<form style="display:flex;gap:8px;margin-bottom:12px" data-submit="catAdd" autocomplete="off"><input type="text" name="name" placeholder="새 분류명" style="flex:1;padding:9px 12px;border:1.5px solid var(--bdr);border-radius:8px;font-size:14px;outline:none"><button class="btn-pri" type="submit" style="width:auto;padding:9px 18px">추가</button></form>' +
      '<div id="categoryList">' + CATS.map(function (c) {
        return '<div class="set-row"><div class="set-info"><div class="sl">' + esc(c.name) + '</div><div class="sd">글 ' + POSTS.filter(function (p) { return p.cat === c.id }).length + '개</div></div><div style="display:flex;gap:6px"><button class="btn-act" data-act="catEdit" data-id="' + c.id + '">수정</button><button class="btn-act red" data-act="catDel" data-id="' + c.id + '">삭제</button></div></div>'
      }).join("") + "</div></div>" +
      '<div class="scan-card"><h4>출고 기본설정</h4><p style="font-size:12px;color:var(--sub);margin-bottom:12px;line-height:1.5">스캔할 바코드 종류, 효과음 등 바코드 출고 화면의 동작을 정합니다.</p><button class="btn-pri" data-act="settingsOpen">기본설정 열기</button></div></div>'
    return inApp("appSettings", "설정", h, { back: "/extra" })
  }
  function viewSettingsModal() {
    if (!S.settingsOpen) return ""
    var d = S.draft
    var tg = function (k) { return '<button class="toggle' + (d[k] ? " on" : "") + '" data-act="setToggle" data-k="' + k + '"></button>' }
    return '<div class="modal-bg show" id="settingsModal" data-backdrop="settingsClose"><div class="modal-box"><div class="modal-handle"></div><div class="modal-title">기본설정</div>' +
      '<div class="set-row"><div class="set-info"><div class="sl">스캔할 상품 바코드 설정</div></div><select class="set-select" data-change="setBarcode">' +
      [["barcode", "바코드"], ["sku_set_cd", "SKU(세트)코드"], ["stock_cd", "재고관리코드"]].map(function (o) { return '<option value="' + o[0] + '"' + (d.barcode === o[0] ? " selected" : "") + ">" + o[1] + "</option>" }).join("") + "</select></div>" +
      '<div class="set-row"><div class="set-info"><div class="sl">SKU 미매칭 출고 불가</div></div>' + tg("matchOnly") + "</div>" +
      '<div class="set-row"><div class="set-info"><div class="sl">효과음 설정</div><div class="sd">스캔 결과를 음성으로 안내</div></div>' + tg("sound") + "</div>" +
      '<div class="set-row"><div class="set-info"><div class="sl">추가구매옵션/규칙사은품 구분</div><div class="sd">상품명 앞에 [추가-] [사은-] 표시</div></div>' + tg("prefix") + "</div>" +
      '<div class="modal-footer"><button class="btn-act blue" data-act="settingsSave">저장</button><button class="btn-act" data-act="settingsClose">닫기</button></div></div></div>'
  }

  /* ───────── 피킹 알림 팝업 / 공용 다이얼로그 ───────── */
  function viewPickNotif() {
    if (!S.pickOpen) return ""
    var items = S.notifs.filter(function (n) { return S.pickTab === "seen" ? n.seen : !n.seen })
    return '<div class="pick-notif-modal show" data-backdrop="pickClose"><div class="pick-notif-box"><div class="pick-notif-head"><span>🔔 피킹 알림</span><button data-act="pickClose">×</button></div>' +
      '<div class="pick-notif-tabs"><button type="button" class="pick-ntab' + (S.pickTab === "unseen" ? " on" : "") + '" data-act="pickTab" data-t="unseen">미확인</button><button type="button" class="pick-ntab' + (S.pickTab === "seen" ? " on" : "") + '" data-act="pickTab" data-t="seen">확인</button></div>' +
      '<div class="pick-notif-list">' + (items.length ? items.map(function (n) {
        return '<div class="pick-notif-item"><div style="flex:1;min-width:0"><div class="pn-title">' + esc(n.title) + '</div><div class="pn-msg">' + esc(n.msg) + '</div><div class="pn-time">' + esc(n.at) + "</div></div>" +
          (n.seen ? "" : '<button class="pick-confirm-btn" data-act="pickConfirm" data-id="' + n.id + '">확인</button>') + "</div>"
      }).join("") : '<div class="pick-notif-empty">' + (S.pickTab === "seen" ? "확인한 알림이 없습니다" : "새 알림이 없습니다") + "</div>") + "</div></div></div>"
  }
  function viewDialog() {
    var d = S.dialog
    if (!d) return ""
    return '<div class="modal-bg show" id="dialogModal"><div class="modal-box" style="max-width:380px"><div class="modal-title">' + esc(d.title) + "</div>" +
      '<div id="dialogMessage" style="font-size:14px;color:var(--txt);line-height:1.55;white-space:pre-wrap;word-break:break-all">' + esc(d.msg || "") + "</div>" +
      (d.input ? '<div id="dialogInputWrap" style="margin-top:12px"><textarea id="dialogInput" style="width:100%;padding:10px;border:1.5px solid var(--bdr);border-radius:8px;font-size:14px;resize:vertical;min-height:70px;outline:none;font-family:inherit">' + esc(d.value) + "</textarea></div>" : "") +
      '<div class="modal-footer">' + (d.extra ? '<button class="btn-act" data-act="dlgExtra" style="background:#38a169;color:#fff;border-color:#38a169;margin-right:auto">' + esc(d.extra.label) + "</button>" : "") +
      (d.cancel ? '<button class="btn-act" data-act="dlgCancel">취소</button>' : "") + '<button class="btn-act blue" data-act="dlgOk">확인</button></div></div></div>'
  }

  /* ───────── 로그인 ───────── */
  function viewLogin() {
    return '<div class="login-wrap"><form class="login-box" data-submit="login" autocomplete="off"><h2>오성 바코드 출고</h2><p class="sub">' + esc(COMPANY) + " 모바일 · 체험판</p>" +
      '<div class="fg"><label>이메일</label><input type="text" name="id" placeholder="아무 값이나 입력하세요" value="demo@osung.example"></div>' +
      '<div class="fg"><label>비밀번호</label><input type="password" name="pw" placeholder="비밀번호" value="demo"></div>' +
      '<button class="btn-pri" type="submit">로그인</button><p class="login-err" style="display:block;color:var(--sub)">체험판에서는 어떤 값을 넣어도 로그인됩니다.</p></form></div>'
  }

  /* ───────── 화면 조립 ───────── */
  function render(route) {
    setTimeout(postRender, 0)
    if (!S.loggedIn) return viewLogin() + viewDialog()
    var p = route.path
    var top = p === "/" ? "action" : p === "/complete" ? "complete" : p === "/works" ? "works"
      : /^\/(extra|board|chat|settings)/.test(p) ? "extra" : "worker"
    var body
    if (top === "action") body = viewAction()
    else if (top === "complete") body = viewComplete()
    else if (top === "works") body = viewWorks(route.query)
    else if (top === "extra") {
      body = viewExtra()
      if (p.indexOf("/board") === 0) body += viewBoard(p)
      else if (p.indexOf("/chat") === 0) body += viewChat(p)
      else if (p === "/settings") body += viewSettingsApp()
    } else {
      body = viewWorker()
      if (p === "/flow/incoming") body += viewIncoming()
      else if (p === "/flow/sorting") body += viewSorting()
      else if (p === "/flow/picking") body += viewPicking()
      else if (p === "/flow/packing") body += viewPacking()
      else if (p === "/manage") body += viewManage()
      else if (p === "/return") body += viewReturn()
    }
    var unseen = S.notifs.filter(function (n) { return !n.seen }).length
    var wu = worksUnread()
    var tabs = '<div class="tabs">' +
      '<button class="tab' + (top === "action" ? " on" : "") + '" data-act="go" data-to="/">출고처리</button>' +
      '<button class="tab' + (top === "complete" ? " on" : "") + '" data-act="go" data-to="/complete">출고완료</button>' +
      '<button class="tab' + (top === "worker" ? " on" : "") + '" data-act="go" data-to="/worker">소팅</button>' +
      '<button class="tab' + (top === "works" ? " on" : "") + '" data-act="go" data-to="/works" style="position:relative">웍스<span class="icon-badge' + (wu && S.worksLogged ? " on" : "") + '" id="worksTabBadge">' + wu + "</span></button>" +
      '<button class="tab' + (top === "extra" ? " on" : "") + '" data-act="go" data-to="/extra"><span class="tab-notif-icon chat' + (chatUnread() ? " on" : "") + '" title="새 채팅">' + SVG_CHAT + '</span><span class="tab-notif-icon board' + (boardUnread() ? " on" : "") + '" title="새 게시글">' + SVG_BOARD + "</span>부가기능</button>" +
      '<button class="tab tab-pick-notif' + (S.pickOpen ? " on" : "") + '" data-act="pickOpen" title="피킹 알림 (보류·선출·댓글·완료)">' + SVG_BELL + '<span class="icon-badge' + (unseen ? " on" : "") + '">' + unseen + "</span></button></div>"
    return '<div id="appPage">' + tabs + body + "</div>" + viewPickNotif() + viewSettingsModal() + viewDialog()
  }

  /* ───────── 동작 ───────── */
  Demo.on("go", function (d) {
    S.kebab = null
    if (d.to === "/works") S.worksSearch = null
    var target = "#" + d.to
    if (location.hash === target || (d.to === "/" && (location.hash === "" || location.hash === "#/"))) R()
    else Demo.go(d.to)
  })

  // 출고처리
  Demo.on("scan", function (v) { doScan(v.code); S.focusId = "scanInput"; R() })
  Demo.on("scanCode", function (d) { doScan(d.code); R() })
  Demo.on("mode", function (d) { S.mode = Number(d.m); S.scan = freshScan(); S.focusId = "scanInput"; R() })
  Demo.on("resetScan", function () { S.scan = freshScan(); S.focusId = "scanInput"; R() })
  Demo.on("release", function (d) {
    var o = findOrder(d.inv)
    if (!o) return
    o.status = "ready"
    o.hold = null
    S.scan.result = { cls: "success", status: "보류 해제 — 다시 스캔하세요", ok: true, rows: [["운송장번호", o.inv]] }
    toast("보류 해제됨")
    R()
  })
  Demo.on("forceComplete", function () {
    var o = cur()
    if (!o) { toast("먼저 운송장을 스캔하세요"); return }
    confirmD("강제 출고완료", "스캔하지 않은 상품이 있어도 출고완료 처리합니다.\n운송장 " + o.inv + " (스캔 " + scannedQty() + "/" + totalQty(o) + ")", function () { complete(o, "강제 출고완료") })
  })
  Demo.on("orderHold", function () {
    var o = cur()
    if (!o) { toast("먼저 운송장을 스캔하세요"); return }
    promptD("출고보류", "운송장 " + o.inv + " 을(를) 출고보류합니다. 사유를 입력하세요.", "", function (v) {
      o.status = "hold"
      o.hold = v.trim() || "사유 미입력"
      notify("출고보류", o.inv + " · " + o.hold)
      S.scan = freshScan()
      S.scan.result = { cls: "", status: "출고보류 처리됨", ok: true, rows: [["운송장번호", o.inv], ["보류사유", o.hold]], border: "var(--sub)" }
      toast("출고보류 처리")
    })
  })
  Demo.on("qtyEdit", function (d) {
    var o = cur()
    if (!o) return
    var it = o.items.filter(function (x) { return x.code === d.code })[0]
    promptD("스캔수량 직접입력", pName(it.code) + " (주문수량 " + it.qty + ")", String(S.scan.counts[it.code] || 0), function (v) {
      var n = Math.max(0, Math.min(it.qty, parseInt(v, 10) || 0))
      S.scan.counts[it.code] = n
      if (allScanned(o)) onAllScanned(o)
    }, { label: "전체완료", fn: function () { o.items.forEach(function (x) { S.scan.counts[x.code] = x.qty }); onAllScanned(o) } })
  })

  // 출고완료
  Demo.on("compSearch", function (v) { S.compQuery = (v.q || "").trim(); S.compSel = {}; R() })
  Demo.on("compReset", function () { S.compQuery = ""; S.compSel = {}; R() })
  Demo.on("compChk", function (v, el) { if (el.checked) S.compSel[el.dataset.inv] = true; else delete S.compSel[el.dataset.inv]; R() })
  Demo.on("compAll", function (v, el) { S.compSel = {}; if (el.checked) doneOrders().forEach(function (o) { S.compSel[o.inv] = true }); R() })
  function selected() { return doneOrders().filter(function (o) { return S.compSel[o.inv] }) }
  Demo.on("sendInvoice", function () {
    var sel = selected()
    if (!sel.length) { toast("선택된 주문이 없습니다"); return }
    sel.forEach(function (o) { o.sent = true })
    S.compSel = {}
    toast("운송장 " + sel.length + "건 전송 완료 (가상)")
    R()
  })
  Demo.on("cancelComplete", function () {
    var sel = selected()
    if (!sel.length) { toast("선택된 주문이 없습니다"); return }
    confirmD("출고완료 취소", "선택한 " + sel.length + "건의 출고완료를 취소합니다.\n취소된 주문은 다시 스캔해서 출고할 수 있습니다.", function () {
      sel.forEach(function (o) { o.status = "ready"; o.out = null; o.sent = false })
      S.compSel = {}
      toast("출고완료 " + sel.length + "건 취소")
    })
  })

  // 피킹 알림
  Demo.on("pickOpen", function () { S.pickOpen = true; S.pickTab = "unseen"; R() })
  Demo.on("pickClose", function () { S.pickOpen = false; R() })
  Demo.on("pickTab", function (d) { S.pickTab = d.t; R() })
  Demo.on("pickConfirm", function (d) { S.notifs.forEach(function (n) { if (String(n.id) === d.id) n.seen = true }); R() })

  // 다이얼로그
  Demo.on("dlgOk", function () {
    var d = S.dialog, el = document.getElementById("dialogInput")
    var v = el ? el.value : ""
    S.dialog = null
    if (d && d.onOk) d.onOk(v)
    R()
  })
  Demo.on("dlgCancel", function () { S.dialog = null; R() })
  Demo.on("dlgExtra", function () { var d = S.dialog; S.dialog = null; if (d.extra) d.extra.fn(); R() })

  // 입고
  Demo.on("incScan", function (v) { incScan(v.code); S.focusId = "incInput"; R() })
  Demo.on("incCode", function (d) { incScan(d.code); R() })
  Demo.on("incBatchToggle", function () { S.inc.batchOpen = !S.inc.batchOpen; R() })
  Demo.on("incBatch", function (d) { S.inc.batch = Number(d.i); S.inc.batchOpen = false; S.inc.recent = []; S.inc.info = null; S.inc.flash = null; R() })
  Demo.on("incListToggle", function () { S.inc.listOpen = !S.inc.listOpen; R() })
  Demo.on("incFilter", function (d) { S.inc.filter = d.f; R() })
  Demo.on("incSearch", function (v) { S.inc.q = v; S.focusId = "incSearch"; R() })
  Demo.on("incQty", function (d) {
    var it = BATCHES[S.inc.batch].items.filter(function (x) { return x.code === d.code })[0]
    promptD("입고 수량 수정", pName(it.code) + " (예정 " + it.expected + ")", String(it.scanned), function (v) {
      it.scanned = Math.max(0, Math.min(it.expected, parseInt(v, 10) || 0))
      toast("입고 수량 " + it.scanned + "개로 수정")
    })
  })

  // 소팅
  Demo.on("sortScan", function (v) { sortSubmit(v.code); S.focusId = "sInput"; R() })
  Demo.on("sortCode", function (d) { sortSubmit(d.code); R() })
  Demo.on("sortTab", function (d) { S.sort.tab = d.t; sortReset(); R() })
  Demo.on("sortSkip", function () { sortReset(); toast("다음 앵글을 스캔하세요"); R() })
  Demo.on("sortList", function (d) { S.sort.open[d.k] = !S.sort.open[d.k]; R() })
  Demo.on("sortOpen", function () { S.sort.open.slot = true; R() })
  Demo.on("sortUndo", function () {
    var st = S.sort, h = st.hist.pop()
    if (!h) { toast("되돌릴 작업이 없습니다"); return }
    if (h.type === "link") {
      var s = slotBy(h.slot), b = basketBy(h.basket)
      s.basket = null; b.slot = null
      WF.forEach(function (o) { if (o.basket === h.basket) o.basket = null })
      toast(h.slot + " ↔ " + h.basket + " 연결 취소")
    } else {
      wfBy(h.inv).basket = null
      toast("송장 " + h.inv + " 배정 취소")
    }
    st.my = Math.max(0, st.my - 1)
    st.done.shift()
    sortReset()
    R()
  })

  // 피킹
  Demo.on("pickView", function (d) { S.pick.view = d.v; S.pick.info = null; S.pick.found = null; R() })
  Demo.on("pickProd", function (d) { S.pick.prod = d.code || null; R() })
  Demo.on("pickScan", function (v) { pickScan(v.code); S.focusId = "piInput"; R() })
  Demo.on("pickCode", function (d) { pickScan(d.code); R() })
  Demo.on("pickMark", function (d) { pickMark(d.inv, d.code); R() })

  // 포장
  Demo.on("packScan", function (v) { packScan(v.code); S.focusId = "paInput"; R() })
  Demo.on("packCode", function (d) { packScan(d.code); R() })
  Demo.on("packOpen", function (d) { S.pack.open = d.inv; R() })
  Demo.on("packClose", function () { S.pack.open = null; R() })
  Demo.on("packDo", function (d) {
    var o = wfBy(S.pack.open)
    if (d.a === "complete") {
      var miss = o.items.filter(function (it) { return it.picked < it.qty })
      if (miss.length) { toast("피킹 미완료 상품 " + miss.length + "종 — 피킹 작업에서 먼저 완료하세요"); return }
      o.pack = "완료"; o.hold = null; S.pack.open = null; toast("패킹 완료"); R()
    } else if (d.a === "hold") {
      promptD("포장 보류", "보류 사유를 입력하세요.", "", function (v) { o.pack = "보류"; o.hold = v.trim() || "사유 미입력"; notify("포장 보류", o.inv + " · " + o.hold); toast("보류 처리") })
    } else if (d.a === "release") { o.pack = "대기"; o.hold = null; toast("보류 해제"); R() }
    else if (d.a === "cancel") {
      confirmD("포장 취소", "송장 " + o.inv + " 의 포장을 취소합니다.", function () { o.pack = "취소"; S.pack.open = null; toast("취소") })
    }
  })

  // 관리자
  Demo.on("unlink", function (d) {
    var s = slotBy(d.slot)
    confirmD("연결 해제", s.code + " 앵글과 " + s.basket + " 바구니의 연결을 해제합니다.\n바구니에 배정된 송장도 함께 해제됩니다.", function () {
      var b = basketBy(s.basket)
      WF.forEach(function (o) { if (o.basket === b.bc) o.basket = null })
      s.basket = null; b.slot = null
      toast("연결 해제됨")
    })
  })

  // 수거송장
  Demo.on("retFill", function (d) { var el = document.getElementById("retOrig"); if (el) el.value = d.code })
  Demo.on("retFill2", function (d) { var el = document.getElementById("retNo"); if (el) el.value = d.code })
  Demo.on("retAdd", function (v) {
    var orig = (v.orig || "").trim(), ret = (v.ret || "").trim()
    if (!orig || !ret) { toast("원 운송장과 수거 운송장을 모두 입력하세요"); return }
    if (S.returns.some(function (r) { return r.ret === ret })) { toast("이미 등록된 수거 운송장입니다"); return }
    var o = findOrder(orig)
    S.returns.forEach(function (r) { r.fresh = false })
    S.returns.unshift({ orig: orig, ret: ret, carrier: v.carrier, reason: v.reason, at: nowStamp(), fresh: true })
    toast(o ? "수거송장 등록 완료" : "등록 완료 (원 운송장 미확인)")
    R()
  })

  // 부가기능 · 로그인
  Demo.on("logout", function () { confirmD("로그아웃", "로그아웃 하시겠습니까?", function () { S.loggedIn = false }) })
  Demo.on("login", function () { S.loggedIn = true; toast(ME.name + "님 환영합니다"); if (location.hash && location.hash !== "#/") Demo.go("/"); else R() })
  Demo.on("worksLogin", function () { S.worksLogged = true; toast("웍스 로그인 완료"); R() })
  Demo.on("worksPhone", function () { S.worksLogged = true; toast("웍스 로그인 완료 (체험판)"); R() })
  Demo.on("worksLogout", function () { S.worksLogged = false; toast("웍스 로그아웃"); R() })
  Demo.on("noAttach", function () { toast("체험판에서는 파일 첨부를 지원하지 않습니다") })

  // 웍스
  Demo.on("worksRefresh", function () { toast("새로고침했습니다"); R() })
  Demo.on("worksSearch", function () { S.worksSearch = S.worksSearch === null ? "" : null; S.focusId = "worksSearchInput"; R() })
  Demo.on("worksSearchInput", function (v) { S.worksSearch = v; S.focusId = "worksSearchInput"; R() })
  var REPLIES = ["확인했습니다.", "네, 바로 처리할게요.", "감사합니다 🙏", "잠시 후 다시 알려드릴게요.", "넵 알겠습니다!"]
  function reply(i) { return REPLIES[i % REPLIES.length] }
  var replyN = 0
  function worksSend(id) {
    var el = document.getElementById("worksMsgInput")
    var t = el ? el.value.trim() : ""
    if (!t) return
    var room = WORKS.filter(function (c) { return String(c.id) === String(id) })[0]
    var m = { mine: true, text: t, at: hm() }
    room.msgs.push(m)
    R()
    setTimeout(function () {
      m.read = true
      var who = room.msgs.filter(function (x) { return x.who })[0]
      room.msgs.push({ who: who ? who.who : "정유나", text: reply(replyN++), at: hm() })
      var q = Demo.route().query
      if (String(q.room) !== String(room.id) || location.hash.indexOf("/works") < 0) room.unread++
      Rbg()
    }, 1400)
  }
  Demo.on("worksSend", function (d) { worksSend(d.room) })

  // 게시판
  Demo.on("boardCat", function (v) { S.boardCat = v; R() })
  Demo.on("boardStatus", function (v) { S.boardStatus = v; R() })
  Demo.on("postSubmit", function (v) {
    var title = (v.title || "").trim()
    if (!title) { toast("제목을 입력하세요"); return }
    var id = POSTS.reduce(function (m, p) { return Math.max(m, p.id) }, 0) + 1
    POSTS.unshift({ id: id, cat: Number(v.cat), title: title, body: (v.body || "").trim(), author: ME.name, created: nowStamp(), status: "요청", reads: [], history: [{ s: "요청", by: ME.name, at: nowStamp() }], comments: [] })
    toast("게시글이 등록되었습니다")
    Demo.go("/board/" + id)
    // 다른 직원이 잠시 뒤 댓글을 단다
    setTimeout(function () {
      var p = postBy(id)
      if (!p) return
      p.comments.push({ id: Date.now(), author: "정유나", body: "확인했습니다. 처리 후 상태 바꿔 둘게요.", at: nowStamp() })
      p.reads.push("정유나")
      notify("댓글", "[" + catName(p.cat) + "] " + p.title.slice(0, 20) + " — 정유나 님 댓글")
      Rbg()
    }, 2500)
  })
  Demo.on("postStatus", function (v, el) {
    var p = postBy(el.dataset.id)
    p.status = v
    p.history.push({ s: v, by: ME.name, at: nowStamp() })
    toast("상태: " + v)
    R()
  })
  Demo.on("kebab", function (d) { S.kebab = S.kebab === d.k ? null : d.k; R() })
  Demo.on("postEdit", function (d) {
    var p = postBy(d.id)
    S.kebab = null
    promptD("게시글 수정", "제목을 수정하세요.", p.title, function (v) { if (v.trim()) { p.title = v.trim(); toast("수정되었습니다") } })
  })
  Demo.on("postDel", function (d) {
    S.kebab = null
    confirmD("게시글 삭제", "이 게시글을 삭제할까요?", function () {
      POSTS = POSTS.filter(function (p) { return String(p.id) !== d.id })
      toast("삭제되었습니다")
      Demo.go("/board")
    })
  })
  Demo.on("readers", function (d) { var p = postBy(d.id); alertD("읽은 사람 (" + p.reads.length + "명)", p.reads.join("\n") || "아직 없습니다") })
  Demo.on("cmtSubmit", function (v, el) {
    var t = (v.body || "").trim()
    if (!t) { toast("댓글을 입력하세요"); return }
    postBy(el.dataset.id).comments.push({ id: Date.now(), author: ME.name, body: t, at: nowStamp() })
    R()
  })
  Demo.on("cmtEdit", function (d) {
    var p = postBy(d.pid), c = p.comments.filter(function (x) { return String(x.id) === d.id })[0]
    S.kebab = null
    promptD("댓글 수정", "", c.body, function (v) { if (v.trim()) c.body = v.trim() })
  })
  Demo.on("cmtDel", function (d) {
    var p = postBy(d.pid)
    S.kebab = null
    confirmD("댓글 삭제", "이 댓글을 삭제할까요?", function () { p.comments = p.comments.filter(function (x) { return String(x.id) !== d.id }) })
  })

  // 채팅
  Demo.on("chatPane", function (d) { S.chatPane = d.p; R() })
  function chatSend(key) {
    var el = document.getElementById("chatInput")
    var t = el ? el.value.trim() : ""
    if (!t) return
    var r = roomOf(key)
    var m = { from: 0, text: t, at: hm(), unreadCnt: r.members.length }
    r.data.msgs.push(m)
    R()
    var responder = r.members.filter(function (id) { return staff(id).online })[0] || r.members[0]
    setTimeout(function () {
      m.unreadCnt = 0
      r.data.msgs.push({ from: responder, text: reply(replyN++), at: hm() })
      if (location.hash !== "#/chat/" + key) r.data.unread++
      Rbg()
    }, 1500)
  }
  Demo.on("chatSend", function (d) { chatSend(d.key) })
  Demo.on("groupOpen", function () { S.groupModal = true; R() })
  Demo.on("groupClose", function () { S.groupModal = false; R() })
  Demo.on("groupCreate", function (v) {
    var name = (v.name || "").trim()
    var members = Object.keys(v).filter(function (k) { return /^m\d+$/.test(k) }).map(function (k) { return Number(v[k]) })
    if (!name) { toast("방 이름을 입력하세요"); return }
    if (!members.length) { toast("초대할 사용자를 선택하세요"); return }
    var id = 100 + CHAT.groups.length + 1
    CHAT.groups.push({ id: id, name: name, members: members, unread: 0, msgs: [] })
    S.groupModal = false
    Demo.go("/chat/g" + id)
  })

  // 설정
  Demo.on("catAdd", function (v) {
    var n = (v.name || "").trim()
    if (!n) { toast("분류명을 입력하세요"); return }
    CATS.push({ id: CATS.reduce(function (m, c) { return Math.max(m, c.id) }, 0) + 1, name: n })
    toast("분류 추가: " + n)
    R()
  })
  Demo.on("catEdit", function (d) {
    var c = CATS.filter(function (x) { return String(x.id) === d.id })[0]
    promptD("분류 수정", "", c.name, function (v) { if (v.trim()) c.name = v.trim() })
  })
  Demo.on("catDel", function (d) {
    var c = CATS.filter(function (x) { return String(x.id) === d.id })[0]
    confirmD("분류 삭제", "'" + c.name + "' 분류를 삭제합니다. 해당 글은 미분류로 남습니다.", function () {
      CATS = CATS.filter(function (x) { return x !== c })
      POSTS.forEach(function (p) { if (p.cat === c.id) p.cat = 0 })
    })
  })
  Demo.on("settingsOpen", function () { S.draft = JSON.parse(JSON.stringify(S.settings)); S.settingsOpen = true; R() })
  Demo.on("settingsClose", function () { S.settingsOpen = false; R() })
  Demo.on("setToggle", function (d) { S.draft[d.k] = !S.draft[d.k]; R() })
  Demo.on("setBarcode", function (v) { S.draft.barcode = v })
  Demo.on("settingsSave", function () { S.settings = S.draft; S.settingsOpen = false; toast("설정이 저장되었습니다"); R() })

  // 배경 눌러 닫기 · 케밥 메뉴 닫기 · 엔터로 전송
  document.addEventListener("click", function (e) {
    var bg = e.target.getAttribute && e.target.getAttribute("data-backdrop")
    if (bg) {
      if (bg === "pickClose") S.pickOpen = false
      else if (bg === "packClose") S.pack.open = null
      else if (bg === "groupClose") S.groupModal = false
      else if (bg === "settingsClose") S.settingsOpen = false
      R()
      return
    }
    if (S.kebab && !e.target.closest(".kebab-wrap")) { S.kebab = null; R() }
  })
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" || e.shiftKey || e.isComposing) return
    var id = e.target.id
    if (id === "chatInput") { e.preventDefault(); chatSend(location.hash.split("/")[2]) }
    else if (id === "worksMsgInput") { e.preventDefault(); worksSend(Demo.route().query.room) }
  })

  Demo.mount(render)
  Demo.banner()
})()
