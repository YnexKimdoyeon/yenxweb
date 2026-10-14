/* 상품 재고관리 시스템 체험판 (가상 데이터)
 * 화면: #/ 재고 대시보드, #/brand?b= 브랜드 상세, #/products 상품 관리,
 *       #/history 입출고 내역, #/permissions 권한 관리, #/warehouses 창고 설정
 */
;(function () {
  var e = Demo.esc
  var N = function (x) { return e(Demo.num(x)) }

  // ---------- 아이콘 ----------
  var P = {
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    download: '<path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    upload: '<path d="M12 16V5m0 0L7.5 9.5M12 5l4.5 4.5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    inbound: '<path d="M12 19V7m0 0-5 5m5-5 5 5"/><path d="M5 4h14"/>',
    outbound: '<path d="M12 3 6 9h4v6h4V9h4z" fill="currentColor"/><path d="M5 20h14"/>',
    shield: '<path d="M12 3 5 6v5c0 4.4 3 8.3 7 9.5 4-1.2 7-5.1 7-9.5V6z" fill="currentColor"/><path d="m9.5 12 1.8 1.8 3.4-3.6" stroke="#fff"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    bell: '<path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1" fill="currentColor"/><circle cx="4" cy="12" r="1" fill="currentColor"/><circle cx="4" cy="18" r="1" fill="currentColor"/>',
    warn: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    hourglass: '<path d="M6 3h12M6 21h12M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.7L20 8.6"/><path d="M20 3v5.6h-5.6"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    pencil: '<path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6"/>',
    sliders: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01"/>',
    left: '<path d="m15 18-6-6 6-6"/>', right: '<path d="m9 18 6-6-6-6"/>',
    left2: '<path d="m11 17-5-5 5-5M18 17l-5-5 5-5"/>', right2: '<path d="m13 17 5-5-5-5M6 17l5-5-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    back: '<path d="M19 12H5m6-6-6 6 6 6"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    box: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
    history: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
    warehouse: '<path d="M3 21V9l9-6 9 6v12"/><path d="M7 21v-8h10v8M7 17h10"/>',
    users: '<circle cx="9" cy="8" r="4"/><path d="M2 21c0-3.9 3.1-7 7-7s7 3.1 7 7M16 4a4 4 0 0 1 0 8M22 21c0-3-1.8-5.6-4.5-6.6"/>',
  }
  function ic(name, cls, sw) {
    return '<svg class="ic ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (sw || 1.8) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + P[name] + "</svg>"
  }
  // 브랜드 로고 (채운 도형)
  var BI = {
    cube: '<path d="M12 2 3 7v10l9 5 9-5V7z" fill="#2f6fe4"/><path d="m3 7 9 5 9-5" stroke="#fff" stroke-width="1.4" fill="none"/><path d="M12 12v10" stroke="#fff" stroke-width="1.4"/><path d="M12 12 21 7v10l-9 5z" fill="#1d55c4"/>',
    store: '<path d="M3 4h18l1 5c0 1.7-1.3 3-3 3s-3-1.3-3-3c0 1.7-1.3 3-3 3s-3-1.3-3-3c0 1.7-1.3 3-3 3S2 10.7 2 9z" fill="#6c4bd0"/><path d="M4 13v8h16v-8" fill="#8b6fe0"/><rect x="10" y="15" width="4" height="6" fill="#fff"/>',
    leaf: '<path d="M20 3C9 3 4 9 4 15c0 2 .5 3.6 1.3 5C7 13 11 9.5 16 8c-4 2.5-7.5 6.5-9 13 1.6.6 3 1 4.5 1C17 22 21 15 20 3z" fill="#22a34a"/>',
    chart: '<path d="M3 21h18" stroke="#1d55c4" stroke-width="2"/><path d="M4 20V10l4 3V8l4 3V6l4 3V4l4 3v13z" fill="#2f6fe4"/>',
    cpu: '<rect x="6" y="6" width="12" height="12" rx="2" fill="#f08c12"/><rect x="9.5" y="9.5" width="5" height="5" fill="#fff"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" stroke="#f08c12" stroke-width="2"/>',
    truck: '<rect x="1.5" y="6" width="13" height="10" rx="1.5" fill="#1aa8b5"/><path d="M14.5 9h4l3 3.5V16h-7z" fill="#127f8a"/><circle cx="6" cy="17.5" r="2.2" fill="#0d5d66"/><circle cx="17.5" cy="17.5" r="2.2" fill="#0d5d66"/>',
    monitor: '<rect x="2" y="3.5" width="20" height="13" rx="2" fill="#4a3fbf"/><rect x="4" y="5.5" width="16" height="9" rx=".5" fill="#fff"/><path d="M8 21h8M12 16.5V21" stroke="#4a3fbf" stroke-width="2"/>',
    tag: '<path d="M2 12V3.5C2 2.7 2.7 2 3.5 2H12l10 10-10 10z" fill="#f5a40c"/><circle cx="7" cy="7" r="1.8" fill="#fff"/>',
    pkg: '<path d="M12 2 3 6.5v11L12 22l9-4.5v-11z" fill="#3cc0b4"/><path d="M12 11 3 6.5M12 11l9-4.5M12 11v11" stroke="#fff" stroke-width="1.4" fill="none"/><path d="m7.5 4.2 9 4.6" stroke="#fff" stroke-width="1.4"/>',
  }
  function brandIc(b) {
    return '<svg class="brand-ic" viewBox="0 0 24 24" aria-hidden="true">' + BI[b.icon] + "</svg>"
  }

  // ---------- 가상 데이터 ----------
  var seed = 20261014
  function rnd() {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0
    var t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  function ri(a, b) { return a + Math.floor(rnd() * (b - a + 1)) }
  function pick(a) { return a[Math.floor(rnd() * a.length)] }

  var S = {
    centers: [
      { id: "c1", name: "서울센터", code: "SEL", region: "서울 강서구 (가상)" },
      { id: "c2", name: "부산센터", code: "PUS", region: "부산 강서구 (가상)" },
      { id: "c3", name: "대전센터", code: "DJN", region: "대전 대덕구 (가상)" },
      { id: "c4", name: "광주센터", code: "GWJ", region: "광주 광산구 (가상)" },
    ],
    // mode: 생성 시 재고 분위기 (ok 정상 / low 부족 / inc 입고예정 / hold 보류)
    brands: [
      { id: "b1", name: "로드밴", pre: "RB", icon: "cube", mult: 1.05, mode: "ok" },
      { id: "b2", name: "트레드원", pre: "TO", icon: "store", mult: 0.7, mode: "ok" },
      { id: "b3", name: "그린휠", pre: "GW", icon: "leaf", mult: 0.5, mode: "low" },
      { id: "b4", name: "블루트랙", pre: "BT", icon: "chart", mult: 1.6, mode: "ok" },
      { id: "b5", name: "에이스그립", pre: "AG", icon: "cpu", mult: 0.33, mode: "low" },
      { id: "b6", name: "무브온", pre: "MO", icon: "truck", mult: 0.95, mode: "ok" },
      { id: "b7", name: "코어라인", pre: "CL", icon: "monitor", mult: 0.42, mode: "hold" },
      { id: "b8", name: "네오스텝", pre: "NS", icon: "tag", mult: 0.78, mode: "ok" },
      { id: "b9", name: "피크런", pre: "PR", icon: "pkg", mult: 0.6, mode: "inc" },
    ],
    products: [],
    moves: [],
    seq: 1,
    // 대시보드
    chip: "all", q: "", brandSel: "", zoom: 125, statusSel: "", onlyLow: false, incIncoming: true,
    updated: "",
    modal: null, drawer: false, menu: null,
    // 상품 관리
    pm: { center: "", hidden: "all", page: 1, per: 20, brand: "", name: "", size: "", code: "", sel: {}, showFilter: true },
    // 상세
    detailTab: "items",
    histType: "all",
    users: [], roles: [],
  }
  S.brands.forEach(function (b) { b.hold = b.mode === "hold" })

  var MODELS = ["AeroPath S1", "UrbanLine T2", "CargoMax HD", "SnowGrip V3", "CityRun E2", "TerraTrek A/T", "WinterEdge W2", "SportLine R5", "EcoDrive E1", "VanPro C8", "ComfortRide L2", "MudClaw M/T", "RoadStar H4", "TrailBlaze X3", "LightStep K1", "AllSeason Q7", "HighWay P3", "GripMaster G2", "NordicIce N1", "SilentPlus S4", "PowerHaul D6", "SmartVan V2"]
  var SPECIAL = ["-", "-", "-", "-", "ECO", "스노우", "올웨더", "A/T", "M/T", "C", "LT"]
  var MEMO = ["-", "-", "-", "-", "-", "윈터 컴파운드", "상용차", "올웨더 인증", "고성능", "저연비 등급 A", "오프로드 겸용", "승합/화물용", "컴포트", "북유럽 타입", "SUV 전용", "화물차용", "경차용"]
  var ORIGIN = ["KR", "KR", "KR", "VN", "VN", "TH", "ID", "CN"]
  var SPEED = ["T", "H", "H", "V", "V", "W", "Y"]

  function newProduct(b, name, opts) {
    opts = opts || {}
    var w = pick([175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 315])
    var a = pick([40, 45, 50, 55, 60, 65, 70, 75])
    var r = pick([14, 15, 16, 17, 18, 19, 20])
    var spec = pick(SPECIAL)
    var c = spec === "C" || spec === "LT" ? "C" : ""
    var size = w + "/" + a + "R" + r + c
    var digits = "" + w + a + r + c
    var season = spec === "스노우" ? "겨울용" : /SnowGrip|WinterEdge|NordicIce/.test(name) ? "겨울용" : /Sport/.test(name) ? "여름용" : "사계절용"
    var li = ri(82, 112)
    var price = Math.round((40000 + (w - 175) * 420 + (r - 14) * 6800 + rnd() * 30000) / 100) * 100
    var hasPrev = rnd() < 0.22
    var stock = {}
    S.centers.forEach(function (cc) { stock[cc.id] = opts.zero ? 0 : Math.max(0, Math.round(ri(8, 70) * b.mult)) })
    var total = 0
    for (var k in stock) total += stock[k]
    var safetyK = b.mode === "low" || b.mode === "inc" ? 0.92 + rnd() * 0.1 : 0.1 + rnd() * 0.12
    var p = {
      id: "p" + S.seq++,
      brand: b.id,
      name: name,
      code: b.pre + "-" + digits,
      size: size,
      extra: digits,
      ssli: (c ? li + 10 + "/" + (li + 8) : li) + pick(SPEED),
      mark: pick(["-", "-", "-", "XL", "XL", c ? "8PR" : "-", c ? "10PR" : "-"]),
      origin: pick(ORIGIN),
      special: spec,
      etc: pick(["-", "-", "-", "-", "-", "강화", "저연비"]),
      season: season,
      price: price,
      prev: hasPrev ? (12 + rnd() * 13).toFixed(1) + "원/본 " + Demo.num(Math.round(price * (0.18 + rnd() * 0.08) / 100) * 100) : "-",
      memo: pick(MEMO),
      hidden: rnd() < 0.05,
      stock: stock,
      onRatio: 0.3 + rnd() * 0.25,
      reserved: Math.round(total * (0.06 + rnd() * 0.1)),
      incoming: b.mode === "inc" ? Math.round(total * (0.5 + rnd() * 0.3)) : b.mode === "low" ? Math.round(total * rnd() * 0.03) : rnd() < 0.6 ? Math.round(total * (0.1 + rnd() * 0.25)) : 0,
      safety: Math.max(5, Math.round((total * safetyK) / 5) * 5),
    }
    if (opts.zero) { p.reserved = 0; p.incoming = 0; p.hidden = false }
    return p
  }
  S.brands.forEach(function (b, bi) {
    for (var i = 0; i < 22; i++) {
      var model = MODELS[(i * 5 + bi * 3) % MODELS.length]
      S.products.push(newProduct(b, model))
    }
  })

  var STAFF = ["김하린", "박도윤", "이서준", "최유나", "정민재"]
  function prodOf(id) { for (var i = 0; i < S.products.length; i++) if (S.products[i].id === id) return S.products[i] }
  function brandOf(id) { for (var i = 0; i < S.brands.length; i++) if (S.brands[i].id === id) return S.brands[i] }
  function centerOf(id) { for (var i = 0; i < S.centers.length; i++) if (S.centers[i].id === id) return S.centers[i] }
  ;[
    [-6, "in", "b1", 120], [-6, "out", "b4", 80], [-5, "in", "b9", 60], [-5, "out", "b2", 45], [-4, "in", "b4", 200],
    [-4, "out", "b6", 70], [-3, "in", "b6", 90], [-3, "out", "b1", 55], [-2, "in", "b8", 110], [-2, "out", "b8", 40],
    [-1, "in", "b2", 75], [-1, "out", "b4", 130], [0, "in", "b9", 50], [0, "out", "b3", 30],
  ].forEach(function (m, i) {
    var list = S.products.filter(function (p) { return p.brand === m[2] })
    var p = list[(i * 7) % list.length]
    S.moves.unshift({
      id: "m" + i, date: Demo.day(m[0]), time: String(9 + (i % 8)).padStart(2, "0") + ":" + String((i * 17) % 60).padStart(2, "0"),
      type: m[1], brand: m[2], product: p.id, center: S.centers[i % 4].id, qty: m[3], by: STAFF[i % 5],
      memo: m[1] === "in" ? pick(["정기 입고", "발주분 입고", "반품 재입고"]) : pick(["대리점 출고", "온라인 주문 출고", "센터 간 이동"]),
    })
  })

  S.users = [
    { id: "u1", name: "김하린", email: "harin.kim@example.com", center: "전체", role: "관리자", active: true, last: Demo.day(0) + " 09:12" },
    { id: "u2", name: "박도윤", email: "doyun.park@example.com", center: "서울센터", role: "매니저", active: true, last: Demo.day(0) + " 08:47" },
    { id: "u3", name: "이서준", email: "seojun.lee@example.com", center: "부산센터", role: "매니저", active: true, last: Demo.day(-1) + " 17:30" },
    { id: "u4", name: "최유나", email: "yuna.choi@example.com", center: "대전센터", role: "입출고 담당", active: true, last: Demo.day(-1) + " 15:02" },
    { id: "u5", name: "정민재", email: "minjae.jung@example.com", center: "광주센터", role: "입출고 담당", active: true, last: Demo.day(-2) + " 11:20" },
    { id: "u6", name: "한지우", email: "jiwoo.han@example.com", center: "전체", role: "조회 전용", active: false, last: Demo.day(-9) + " 10:05" },
  ]
  var PERMS = [
    ["view", "재고 조회"], ["in", "입고 등록"], ["out", "출고 등록"], ["product", "상품 편집"],
    ["export", "내보내기"], ["warehouse", "창고 설정"], ["perm", "권한 관리"],
  ]
  S.roles = [
    { name: "관리자", desc: "모든 메뉴 사용", p: { view: 1, in: 1, out: 1, product: 1, export: 1, warehouse: 1, perm: 1 } },
    { name: "매니저", desc: "담당 센터 운영", p: { view: 1, in: 1, out: 1, product: 1, export: 1, warehouse: 0, perm: 0 } },
    { name: "입출고 담당", desc: "입고·출고 처리", p: { view: 1, in: 1, out: 1, product: 0, export: 0, warehouse: 0, perm: 0 } },
    { name: "조회 전용", desc: "재고 조회만", p: { view: 1, in: 0, out: 0, product: 0, export: 0, warehouse: 0, perm: 0 } },
  ]

  function nowStr() {
    var d = new Date()
    return Demo.day(0) + " " + String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0")
  }
  S.updated = nowStr()

  // ---------- 계산 ----------
  function pTotal(p) { var t = 0; S.centers.forEach(function (c) { t += p.stock[c.id] || 0 }); return t }
  function statusOf(avail, safety, incoming, hold) {
    if (hold) return "보류"
    if (avail < safety) return incoming > 0 && avail + incoming >= safety ? "입고예정" : "부족"
    return "정상"
  }
  function pStat(p) {
    var t = pTotal(p), on = Math.round(t * p.onRatio), avail = Math.max(0, t - p.reserved)
    return { total: t, online: on, offline: t - on, avail: avail, status: statusOf(avail, p.safety, p.incoming, false) }
  }
  function agg(list, hold) {
    var a = { stock: {}, total: 0, online: 0, offline: 0, reserved: 0, incoming: 0, safety: 0, avail: 0 }
    S.centers.forEach(function (c) { a.stock[c.id] = 0 })
    list.forEach(function (p) {
      var s = pStat(p)
      S.centers.forEach(function (c) { a.stock[c.id] += p.stock[c.id] || 0 })
      a.total += s.total; a.online += s.online; a.offline += s.offline
      a.reserved += p.reserved; a.incoming += p.incoming; a.safety += p.safety
    })
    a.avail = Math.max(0, a.total - a.reserved)
    a.status = statusOf(a.avail, a.safety, a.incoming, hold)
    return a
  }
  function brandProducts(bid) { return S.products.filter(function (p) { return p.brand === bid }) }
  function brandAgg(b) { return agg(brandProducts(b.id), b.hold) }
  var BADGE = { 정상: "b-ok", 부족: "b-low", 보류: "b-hold", 입고예정: "b-inc" }
  function badge(s) { return '<span class="badge ' + BADGE[s] + '">' + e(s) + "</span>" }

  function recentBrands(type) {
    var since = Demo.day(-7), set = {}
    S.moves.forEach(function (m) { if (m.type === type && m.date >= since) set[m.brand] = 1 })
    return set
  }
  function dashRows() {
    var q = S.q.trim().toLowerCase()
    var inSet = recentBrands("in"), outSet = recentBrands("out")
    return S.brands.map(function (b) { return { b: b, a: brandAgg(b) } }).filter(function (r) {
      var a = r.a
      if (S.brandSel && r.b.id !== S.brandSel) return false
      if (q) {
        var hit = r.b.name.toLowerCase().indexOf(q) >= 0 || brandProducts(r.b.id).some(function (p) {
          return (p.name + " " + p.code + " " + p.size).toLowerCase().indexOf(q) >= 0
        })
        if (!hit) return false
      }
      if (S.chip === "in" && !inSet[r.b.id]) return false
      if (S.chip === "out" && !outSet[r.b.id]) return false
      if (S.chip === "low" && !(a.avail < a.safety)) return false
      if (S.chip === "ok" && a.status !== "정상") return false
      if (S.chip === "hold" && a.status !== "보류") return false
      if (S.statusSel && a.status !== S.statusSel) return false
      if (S.onlyLow && !(a.avail <= a.safety)) return false
      if (!S.incIncoming && a.status === "입고예정") return false
      return true
    })
  }

  // 입력 중 다시 그려도 커서가 유지되도록
  function R() {
    var a = document.activeElement, id = a && a.id, s = null, en = null
    try { s = a.selectionStart; en = a.selectionEnd } catch (_) {}
    Demo.update()
    if (id) {
      var n = document.getElementById(id)
      if (n) { n.focus(); try { if (s != null) n.setSelectionRange(s, en) } catch (_) {} }
    }
  }

  // ---------- 공통 레이아웃 ----------
  var NAV = [
    ["/", "grid", "재고 관리 대시보드"], ["/products", "box", "상품 관리"], ["/history", "history", "입출고 내역"],
    ["/warehouses", "warehouse", "창고 설정"], ["/permissions", "users", "권한 관리"],
  ]
  function drawer(path) {
    if (!S.drawer) return ""
    return '<div class="drawer-bg" data-act="drawer"></div><aside class="drawer">' +
      '<div class="flex items-center justify-between px-2 mb-5"><div><div class="text-[17px] font-bold">재고관리</div><div class="text-[12.5px] text-gray-500">가상 회사 · 체험판</div></div>' +
      '<button class="act-ic" data-act="drawer" aria-label="닫기">' + ic("x") + "</button></div><nav class=\"space-y-1\">" +
      NAV.map(function (n) {
        var on = path === n[0] || (n[0] === "/" && path === "/brand")
        return '<a href="#' + e(n[0]) + '" data-act="nav" data-to="' + e(n[0]) + '" class="nav-a' + (on ? " on" : "") + '">' + ic(n[1]) + e(n[2]) + "</a>"
      }).join("") + "</nav></aside>"
  }
  function lowList() {
    return S.brands.map(function (b) { return { b: b, a: brandAgg(b) } }).filter(function (r) { return r.a.status === "부족" || r.a.status === "입고예정" })
  }
  function bellMenu() {
    if (S.menu !== "bell") return ""
    var l = lowList()
    return '<div class="menu-bg" data-act="closeMenu"></div><div class="menu text-left" style="min-width:290px"><div class="px-3 py-2 text-[13px] font-semibold text-gray-500">재고 알림</div>' +
      (l.length ? l.map(function (r) {
        return '<button class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 text-left" data-act="goBrand" data-id="' + e(r.b.id) + '">' + brandIc(r.b) +
          '<span class="flex-1 min-w-0"><span class="block text-[14px] font-semibold">' + e(r.b.name) + '</span><span class="block text-[12.5px] text-gray-500">가용 ' + N(r.a.avail) + " / 안전재고 " + N(r.a.safety) + "</span></span>" + badge(r.a.status) + "</button>"
      }).join("") : '<div class="px-3 py-4 text-[14px] text-gray-500">안전재고 미달 항목이 없습니다.</div>') + "</div>"
  }
  function userMenu(align) {
    if (S.menu !== "user") return ""
    return '<div class="menu-bg" data-act="closeMenu"></div><div class="menu text-left" style="min-width:220px' + (align || "") + '">' +
      '<div class="px-3 py-2"><div class="text-[14px] font-semibold">김하린 (관리자)</div><div class="text-[12.5px] text-gray-500">harin.kim@example.com</div></div><div class="border-t my-1"></div>' +
      NAV.map(function (n) { return '<a href="#' + e(n[0]) + '" data-act="nav" data-to="' + e(n[0]) + '" class="nav-a !py-2 !text-[14px]">' + ic(n[1]) + e(n[2]) + "</a>" }).join("") +
      '<div class="border-t my-1"></div><button class="nav-a !py-2 !text-[14px] w-full" data-act="toast" data-msg="체험판에서는 로그아웃할 수 없습니다.">로그아웃</button></div>'
  }
  // 대시보드 계열 머리말
  function header(title, sub, actions, path) {
    return drawer(path) +
      '<header class="relative flex flex-wrap items-start justify-between gap-x-6 gap-y-3 px-4 sm:px-5 pt-4 pb-4 border-b border-gray-200">' +
      '<div class="flex items-center gap-4 sm:gap-5 min-w-0 pt-2">' +
      '<button class="icon-btn !w-12 !h-12 !rounded-[10px] shrink-0" data-act="drawer" aria-label="메뉴">' + ic("menu", "!w-6 !h-6") + "</button>" +
      '<div class="min-w-0"><h1 class="text-[22px] sm:text-[27px] font-bold tracking-[-0.02em] text-gray-900 leading-tight">' + e(title) + '</h1><div class="text-[14px] sm:text-[16px] text-gray-500 mt-1">' + sub + "</div></div></div>" +
      '<div class="flex flex-col items-end gap-1 ml-auto max-w-full">' +
      '<div class="flex items-center gap-7 pr-3 h-7 absolute top-3 right-3 sm:static">' +
      '<div class="relative"><button class="text-gray-500 hover:text-gray-800 relative" data-act="menu" data-m="bell" aria-label="알림">' + ic("bell", "!w-[22px] !h-[22px]") + (lowList().length ? '<span class="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500"></span>' : "") + "</button>" + bellMenu() + "</div>" +
      '<div class="relative"><button class="text-gray-500 hover:text-gray-800" data-act="menu" data-m="user" aria-label="사용자 메뉴"><svg viewBox="0 0 24 24" class="w-[26px] h-[26px]"><circle cx="12" cy="12" r="11" fill="#6b7280"/><circle cx="12" cy="9.5" r="4" fill="#fff"/><path d="M4.8 19.5c1.6-2.8 4.2-4.2 7.2-4.2s5.6 1.4 7.2 4.2" fill="#fff"/></svg></button>' + userMenu() + "</div></div>" +
      '<div class="flex flex-wrap items-center justify-end gap-2.5 sm:gap-4 mt-1">' + actions + "</div></div></header>"
  }
  function shell(inner) {
    return '<div class="p-1 sm:p-1.5 min-h-screen"><div class="bg-white rounded-[14px] border border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,.06)] min-h-[calc(100vh-12px)] pb-24">' + inner + "</div></div>" + modal()
  }

  // ---------- 1. 재고 관리 대시보드 ----------
  var CHIPS = [["all", "list", "전체"], ["in", "inbound", "입고"], ["out", "outbound", "출고"], ["low", "warn", "낮은 재고"], ["ok", "check", "정상"], ["hold", "hourglass", "보류"]]
  function viewDash() {
    var rows = dashRows()
    var actions =
      '<button class="btn btn-primary" data-act="newMove" data-type="in">' + ic("plus", "", 2.2) + "새 항목</button>" +
      '<button class="btn" data-act="exportCsv">' + ic("download") + "내보내기</button>" +
      '<button class="btn" data-act="nav" data-to="/permissions">' + ic("shield") + "권한 관리</button>" +
      '<button class="btn" data-act="nav" data-to="/warehouses">' + ic("gear") + "창고 설정</button>"
    var toolbar =
      '<div class="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-5 pt-4 pb-4">' +
      '<div class="flex flex-wrap items-center gap-2 sm:gap-2.5">' +
      CHIPS.map(function (c) {
        var color = c[0] === "low" && S.chip !== "low" ? " text-amber-500" : c[0] === "ok" && S.chip !== "ok" ? " text-green-600" : ""
        return '<button class="chip' + (S.chip === c[0] ? " on" : "") + '" data-act="chip" data-v="' + c[0] + '"><span class="inline-flex' + color + '">' + ic(c[1]) + "</span>" + e(c[2]) + "</button>"
      }).join("") + "</div>" +
      '<div class="flex flex-wrap items-center gap-2 sm:gap-3 w-full lg:w-auto">' +
      '<label class="relative w-full sm:w-auto sm:flex-1 lg:flex-none min-w-0"><span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">' + ic("search") + '</span><input id="dashQ" class="field w-full lg:w-[222px] !pl-10" placeholder="품목 검색" value="' + e(S.q) + '" data-input="q" autocomplete="off"></label>' +
      '<select class="field" data-change="brandSel" aria-label="브랜드"><option value="">모든 브랜드</option>' +
      S.brands.map(function (b) { return '<option value="' + e(b.id) + '"' + (S.brandSel === b.id ? " selected" : "") + ">" + e(b.name) + "</option>" }).join("") + "</select>" +
      '<button class="icon-btn" data-act="refresh" aria-label="새로고침">' + ic("refresh", "!w-5 !h-5") + "</button>" +
      '<select class="field" data-change="zoom" aria-label="확대">' + [75, 90, 100, 110, 125, 150].map(function (z) { return '<option value="' + z + '"' + (S.zoom === z ? " selected" : "") + ">" + z + "%</option>" }).join("") + "</select>" +
      "</div></div>"

    var cs = S.centers
    var th = '<tr><th class="c-brand">브랜드</th><th class="h-total">총재고</th>' +
      cs.map(function (c) { return '<th class="h-center">' + e(c.name) + "</th>" }).join("") +
      '<th class="h-on">온라인</th><th class="h-off">오프라인</th><th class="h-safe">안전재고</th><th class="h-avail">가용수량</th><th class="h-res">예약수량</th><th class="h-inc">입고예정</th><th class="h-st">상태</th></tr>'
    var tot = { stock: {}, total: 0, online: 0, offline: 0, safety: 0, avail: 0, reserved: 0, incoming: 0 }
    cs.forEach(function (c) { tot.stock[c.id] = 0 })
    var body = rows.map(function (r) {
      var a = r.a
      cs.forEach(function (c) { tot.stock[c.id] += a.stock[c.id] })
      ;["total", "online", "offline", "safety", "avail", "reserved", "incoming"].forEach(function (k) { tot[k] += a[k] })
      return '<tr data-act="goBrand" data-id="' + e(r.b.id) + '" title="' + e(r.b.name) + ' 품목별 재고 보기">' +
        '<td class="c-brand"><span class="flex items-center gap-3">' + brandIc(r.b) + '<span class="text-[17px] text-gray-900">' + e(r.b.name) + "</span></span></td>" +
        '<td class="c-total num">' + N(a.total) + "</td>" +
        cs.map(function (c) { return '<td class="num">' + N(a.stock[c.id]) + "</td>" }).join("") +
        '<td class="num">' + N(a.online) + '</td><td class="num">' + N(a.offline) + '</td><td class="num">' + N(a.safety) + '</td><td class="c-avail num">' + N(a.avail) +
        '</td><td class="num">' + N(a.reserved) + '</td><td class="num">' + N(a.incoming) + "</td><td>" + badge(a.status) + "</td></tr>"
    }).join("")
    if (!rows.length) body = '<tr><td colspan="' + (11 + cs.length) + '" class="!h-40 text-gray-500 !cursor-default">조건에 맞는 항목이 없습니다.</td></tr>'
    var foot = '<tr><td class="c-brand">합계</td><td class="c-total num">' + N(tot.total) + "</td>" +
      cs.map(function (c) { return '<td class="num">' + N(tot.stock[c.id]) + "</td>" }).join("") +
      '<td class="num">' + N(tot.online) + '</td><td class="num">' + N(tot.offline) + '</td><td class="num">' + N(tot.safety) + '</td><td class="c-avail num">' + N(tot.avail) +
      '</td><td class="num">' + N(tot.reserved) + '</td><td class="num">' + N(tot.incoming) + '</td><td class="num text-[15px] !font-semibold text-gray-600">' + N(rows.length) + "개</td></tr>"

    var table = '<div class="px-3 sm:px-4"><div class="sheet-wrap"><div style="zoom:' + S.zoom / 125 + '"><table class="sheet"><thead>' + th + "</thead><tbody>" + body + "</tbody><tfoot>" + foot + "</tfoot></table></div></div></div>"

    var bottom =
      '<div class="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-7 pt-5">' +
      '<div class="flex flex-wrap items-center gap-x-6 gap-y-3">' +
      '<span class="text-[16px] font-semibold text-gray-900">보조 필터</span>' +
      '<select class="field !h-[42px] !w-[132px]" data-change="statusSel" aria-label="상태 선택"><option value="">상태 선택</option>' +
      ["정상", "부족", "보류", "입고예정"].map(function (s) { return '<option value="' + s + '"' + (S.statusSel === s ? " selected" : "") + ">" + s + "</option>" }).join("") + "</select>" +
      '<span class="hidden sm:block w-px h-7 bg-gray-200"></span>' +
      '<span class="flex items-center gap-4 text-[15px] text-gray-700">안전재고 이하만 <button class="sw' + (S.onlyLow ? " on" : "") + '" data-act="tg" data-k="onlyLow" aria-label="안전재고 이하만" aria-pressed="' + S.onlyLow + '"></button></span>' +
      '<span class="hidden sm:block w-px h-7 bg-gray-200"></span>' +
      '<span class="flex items-center gap-4 text-[15px] text-gray-700">입고예정 포함 <button class="sw' + (S.incIncoming ? " on" : "") + '" data-act="tg" data-k="incIncoming" aria-label="입고예정 포함" aria-pressed="' + S.incIncoming + '"></button></span>' +
      "</div>" +
      '<div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-gray-500"><span>총 ' + N(rows.length) + '개 항목</span><span class="w-px h-5 bg-gray-200"></span><span>마지막 업데이트: ' + e(S.updated) +
      '</span><button class="text-gray-500 hover:text-gray-800" data-act="refresh" aria-label="새로고침">' + ic("refresh", "!w-[17px] !h-[17px]") + "</button></div></div>"

    return shell(header("재고 관리 대시보드", "스프레드시트 보기", actions, "/") + toolbar + table + bottom)
  }

  // ---------- 2. 브랜드 상세 ----------
  function viewBrand(q) {
    var b = brandOf(q.b)
    if (!b) return shell(header("브랜드 상세", '<a href="#/" class="hover:underline">← 대시보드</a>', "", "/brand") + '<div class="p-10 text-gray-500">브랜드를 찾을 수 없습니다.</div>')
    var list = brandProducts(b.id), a = brandAgg(b), cs = S.centers
    var actions =
      '<button class="btn btn-primary" data-act="newMove" data-type="in" data-brand="' + e(b.id) + '">' + ic("inbound") + "입고 등록</button>" +
      '<button class="btn" data-act="newMove" data-type="out" data-brand="' + e(b.id) + '">' + ic("outbound") + "출고 등록</button>" +
      '<button class="btn" data-act="toggleHold" data-id="' + e(b.id) + '">' + ic("hourglass") + (b.hold ? "보류 해제" : "보류 설정") + "</button>"
    var sub = '<a href="#/" class="hover:text-gray-800">재고 관리 대시보드</a> <span class="text-gray-300">›</span> 품목별 센터 재고'
    var kp = [["총재고", a.total, "text-[#1a5fd8]"], ["가용수량", a.avail, "text-[#1a5fd8]"], ["예약수량", a.reserved, ""], ["입고예정", a.incoming, ""], ["안전재고", a.safety, ""]]
    var top =
      '<div class="px-4 sm:px-5 pt-5 flex flex-wrap items-center gap-3"><span class="flex items-center gap-3">' + brandIc(b).replace('class="brand-ic"', 'class="brand-ic !w-8 !h-8"') +
      '<span class="text-[22px] font-bold">' + e(b.name) + "</span></span>" + badge(a.status) +
      '<span class="text-[14px] text-gray-500">품목 ' + N(list.length) + "개 · 센터 " + N(cs.length) + "곳</span></div>" +
      '<div class="grid grid-cols-2 sm:grid-cols-5 gap-3 px-4 sm:px-5 pt-4">' +
      kp.map(function (k) { return '<div class="card px-4 py-3"><div class="text-[13px] text-gray-500">' + e(k[0]) + '</div><div class="num text-[22px] font-bold mt-0.5 ' + k[2] + '">' + N(k[1]) + "</div></div>" }).join("") + "</div>"
    var tabs = '<div class="px-4 sm:px-5 pt-5 pb-3"><div class="seg-t"><button class="' + (S.detailTab === "items" ? "on" : "") + '" data-act="dtab" data-v="items">품목별 재고</button><button class="' + (S.detailTab === "moves" ? "on" : "") + '" data-act="dtab" data-v="moves">입출고 기록</button></div></div>'
    var body
    if (S.detailTab === "items") {
      body = '<div class="px-3 sm:px-4"><div class="sheet-wrap !max-h-[calc(100vh-200px)]"><table class="sheet" style="min-width:' + (1180 + cs.length * 90) + 'px"><thead><tr><th class="c-brand" style="min-width:230px">품목</th><th class="h-total">총재고</th>' +
        cs.map(function (c) { return '<th class="h-center">' + e(c.name) + "</th>" }).join("") +
        '<th class="h-on">온라인</th><th class="h-off">오프라인</th><th class="h-safe">안전재고</th><th class="h-avail">가용수량</th><th class="h-res">예약수량</th><th class="h-inc">입고예정</th><th class="h-st">상태</th><th class="h-st">처리</th></tr></thead><tbody>' +
        list.map(function (p) {
          var s = pStat(p)
          return '<tr class="!cursor-default"><td class="c-brand"><div class="text-[15.5px] font-semibold text-gray-900">' + e(p.name) + (p.hidden ? ' <span class="text-[11.5px] text-gray-400 font-normal">숨김</span>' : "") + '</div><div class="text-[12.5px] text-gray-500">' + e(p.code) + " · " + e(p.size) + "</div></td>" +
            '<td class="c-total num !text-[17px]">' + N(s.total) + "</td>" +
            cs.map(function (c) { var v = p.stock[c.id] || 0; return '<td class="num !text-[15.5px]' + (v === 0 ? " text-gray-300" : "") + '">' + N(v) + "</td>" }).join("") +
            '<td class="num !text-[15.5px]">' + N(s.online) + '</td><td class="num !text-[15.5px]">' + N(s.offline) + '</td><td class="num !text-[15.5px]">' + N(p.safety) + '</td><td class="c-avail num !text-[16px]">' + N(s.avail) +
            '</td><td class="num !text-[15.5px]">' + N(p.reserved) + '</td><td class="num !text-[15.5px]">' + N(p.incoming) + "</td><td>" + badge(s.status) + "</td>" +
            '<td><span class="inline-flex gap-1.5"><button class="btn btn-sm" data-act="newMove" data-type="in" data-brand="' + e(b.id) + '" data-product="' + e(p.id) + '">입고</button><button class="btn btn-sm" data-act="newMove" data-type="out" data-brand="' + e(b.id) + '" data-product="' + e(p.id) + '">출고</button></span></td></tr>'
        }).join("") +
        '</tbody><tfoot><tr><td class="c-brand">합계</td><td class="c-total num">' + N(a.total) + "</td>" +
        cs.map(function (c) { return '<td class="num">' + N(a.stock[c.id]) + "</td>" }).join("") +
        '<td class="num">' + N(a.online) + '</td><td class="num">' + N(a.offline) + '</td><td class="num">' + N(a.safety) + '</td><td class="c-avail num">' + N(a.avail) + '</td><td class="num">' + N(a.reserved) + '</td><td class="num">' + N(a.incoming) + "</td><td>" + badge(a.status) + "</td><td></td></tr></tfoot></table></div></div>"
    } else {
      body = '<div class="px-3 sm:px-4">' + movesTable(S.moves.filter(function (m) { return m.brand === b.id })) + "</div>"
    }
    return shell(header(b.name + " 재고 상세", sub, actions, "/brand") + top + tabs + body)
  }

  function movesTable(list) {
    if (!list.length) return '<div class="card p-10 text-center text-gray-500">입출고 기록이 없습니다.</div>'
    return '<div class="card overflow-x-auto"><table class="grid-t" style="min-width:900px"><thead><tr><th>일시</th><th>구분</th><th>브랜드</th><th class="!text-left">품목</th><th>센터</th><th>수량</th><th>담당자</th><th class="!text-left">메모</th></tr></thead><tbody>' +
      list.map(function (m) {
        var p = prodOf(m.product), b = brandOf(m.brand), c = centerOf(m.center)
        return '<tr><td class="num text-gray-600">' + e(m.date) + " " + e(m.time) + "</td><td>" + (m.type === "in" ? '<span class="badge b-in">입고</span>' : '<span class="badge b-out">출고</span>') +
          "</td><td>" + e(b ? b.name : "-") + '</td><td class="!text-left">' + e(p ? p.name : "(삭제된 품목)") + ' <span class="text-gray-400 text-[12.5px]">' + e(p ? p.code : "") + "</span></td><td>" + e(c ? c.name : "-") +
          '</td><td class="num font-semibold ' + (m.type === "in" ? "text-[#1a5fd8]" : "text-red-600") + '">' + (m.type === "in" ? "+" : "−") + N(m.qty) + "</td><td>" + e(m.by) + '</td><td class="!text-left text-gray-600">' + e(m.memo || "-") + "</td></tr>"
      }).join("") + "</tbody></table></div>"
  }

  // ---------- 3. 입출고 내역 ----------
  function viewHistory() {
    var list = S.moves.filter(function (m) { return S.histType === "all" || m.type === S.histType })
    var inSum = 0, outSum = 0
    S.moves.forEach(function (m) { if (m.type === "in") inSum += m.qty; else outSum += m.qty })
    var actions = '<button class="btn btn-primary" data-act="newMove" data-type="in">' + ic("inbound") + "입고 등록</button>" +
      '<button class="btn" data-act="newMove" data-type="out">' + ic("outbound") + "출고 등록</button>"
    return shell(header("입출고 내역", "센터별 입고·출고 기록", actions, "/history") +
      '<div class="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-5 pt-5 pb-4"><div class="flex gap-2.5">' +
      [["all", "list", "전체"], ["in", "inbound", "입고"], ["out", "outbound", "출고"]].map(function (c) {
        return '<button class="chip' + (S.histType === c[0] ? " on" : "") + '" data-act="htype" data-v="' + c[0] + '">' + ic(c[1]) + e(c[2]) + "</button>"
      }).join("") + '</div><div class="text-[14px] text-gray-600">입고 합계 <b class="text-[#1a5fd8] num">' + N(inSum) + '</b> · 출고 합계 <b class="text-red-600 num">' + N(outSum) + "</b></div></div>" +
      '<div class="px-3 sm:px-4">' + movesTable(list) + "</div>")
  }

  // ---------- 4. 권한 관리 ----------
  function viewPerm() {
    var actions = '<button class="btn btn-primary" data-act="openUser">' + ic("plus", "", 2.2) + "사용자 초대</button>"
    var roleNames = S.roles.map(function (r) { return r.name })
    var users = '<div class="card overflow-x-auto"><table class="grid-t" style="min-width:860px"><thead><tr><th class="!text-left">이름</th><th class="!text-left">이메일</th><th>담당 센터</th><th>역할</th><th>계정 사용</th><th>최근 접속</th></tr></thead><tbody>' +
      S.users.map(function (u) {
        return '<tr><td class="!text-left"><span class="inline-flex items-center gap-2.5"><span class="w-8 h-8 rounded-full bg-gray-100 text-gray-600 text-[13px] font-semibold inline-flex items-center justify-center">' + e(u.name.slice(0, 1)) + '</span><span class="font-semibold">' + e(u.name) + "</span></span></td>" +
          '<td class="!text-left text-gray-600">' + e(u.email) + "</td><td>" + e(u.center) + "</td>" +
          '<td><select class="field !h-9 !text-[14px]" data-change="userRole" data-id="' + e(u.id) + '" aria-label="역할">' + roleNames.map(function (r) { return '<option' + (u.role === r ? " selected" : "") + ">" + e(r) + "</option>" }).join("") + "</select></td>" +
          '<td><button class="sw' + (u.active ? " on" : "") + '" data-act="userActive" data-id="' + e(u.id) + '" aria-label="계정 사용"></button></td><td class="num text-gray-600">' + e(u.last) + "</td></tr>"
      }).join("") + "</tbody></table></div>"
    var matrix = '<div class="card overflow-x-auto"><table class="grid-t" style="min-width:860px"><thead><tr><th class="!text-left">역할</th>' +
      PERMS.map(function (p) { return "<th>" + e(p[1]) + "</th>" }).join("") + "<th>사용자</th></tr></thead><tbody>" +
      S.roles.map(function (r, ri2) {
        var cnt = S.users.filter(function (u) { return u.role === r.name }).length
        return '<tr><td class="!text-left"><div class="font-semibold">' + e(r.name) + '</div><div class="text-[12.5px] text-gray-500">' + e(r.desc) + "</div></td>" +
          PERMS.map(function (p) {
            var on = !!r.p[p[0]], lock = ri2 === 0
            return '<td><button class="sw' + (on ? " on" : "") + (lock ? " opacity-50 !cursor-not-allowed" : "") + '" data-act="perm" data-r="' + ri2 + '" data-p="' + e(p[0]) + '" aria-label="' + e(r.name + " " + p[1]) + '"></button></td>'
          }).join("") + '<td class="num">' + N(cnt) + "명</td></tr>"
      }).join("") + "</tbody></table></div>"
    return shell(header("권한 관리", "사용자 역할과 메뉴 권한 설정", actions, "/permissions") +
      '<div class="px-3 sm:px-5 pt-5 space-y-6"><section><div class="flex items-end justify-between mb-3"><h2 class="text-[17px] font-bold">사용자</h2><span class="text-[13.5px] text-gray-500">총 ' + N(S.users.length) + "명</span></div>" + users + "</section>" +
      '<section><div class="flex items-end justify-between mb-3"><h2 class="text-[17px] font-bold">역할별 권한</h2><span class="text-[13.5px] text-gray-500">관리자 역할은 변경할 수 없습니다</span></div>' + matrix + "</section></div>")
  }

  // ---------- 5. 창고 설정 ----------
  function viewWh() {
    var rows = S.centers.map(function (c, i) {
      var sum = 0, cnt = 0
      S.products.forEach(function (p) { var v = p.stock[c.id] || 0; sum += v; if (v > 0) cnt++ })
      return '<tr><td class="num text-gray-500">' + (i + 1) + '</td><td class="!text-left"><form class="flex items-center gap-2" data-submit="renameCenter" data-id="' + e(c.id) + '"><input name="name" id="cn_' + e(c.id) + '" class="field !h-9 !text-[14.5px] w-[150px]" value="' + e(c.name) + '" aria-label="센터명"><button class="btn btn-sm">이름 변경</button></form></td>' +
        '<td class="num">' + e(c.code) + '</td><td class="!text-left text-gray-600">' + e(c.region) + '</td><td class="num">' + N(cnt) + '개</td><td class="num font-semibold text-[#1a5fd8]">' + N(sum) + "</td>" +
        '<td><button class="btn btn-sm btn-danger" data-act="delCenter" data-id="' + e(c.id) + '">삭제</button></td></tr>'
    }).join("")
    return shell(header("창고 설정", "센터 추가·이름 변경, 대시보드 열에 바로 반영됩니다", '<button class="btn" data-act="nav" data-to="/">' + ic("grid") + "대시보드에서 보기</button>", "/warehouses") +
      '<div class="px-3 sm:px-5 pt-5 space-y-6"><section><h2 class="text-[17px] font-bold mb-3">센터 목록</h2><div class="card overflow-x-auto"><table class="grid-t" style="min-width:820px"><thead><tr><th>순서</th><th class="!text-left">센터명</th><th>코드</th><th class="!text-left">지역</th><th>보유 품목</th><th>재고 합계</th><th>관리</th></tr></thead><tbody>' + rows + "</tbody></table></div>" +
      '<p class="text-[13px] text-gray-500 mt-2">재고가 남아 있는 센터는 삭제할 수 없습니다. 먼저 출고하거나 다른 센터로 옮겨 주세요.</p></section>' +
      '<section><h2 class="text-[17px] font-bold mb-3">새 센터 추가</h2><form class="card p-4 sm:p-5 grid gap-3 sm:grid-cols-[1fr_140px_1.4fr_auto] items-end" data-submit="addCenter">' +
      '<label><span class="block text-[13.5px] font-semibold text-gray-700 mb-1.5">센터명</span><input name="name" id="newCenterName" class="field w-full" placeholder="예: 인천센터" required></label>' +
      '<label><span class="block text-[13.5px] font-semibold text-gray-700 mb-1.5">코드</span><input name="code" class="field w-full" placeholder="예: ICN" maxlength="5"></label>' +
      '<label><span class="block text-[13.5px] font-semibold text-gray-700 mb-1.5">지역</span><input name="region" class="field w-full" placeholder="예: 인천 서구"></label>' +
      '<button class="btn btn-primary justify-center">' + ic("plus", "", 2.2) + "센터 추가</button></form></section></div>")
  }

  // ---------- 6. 상품 관리 (두 번째 화면) ----------
  function pmFiltered() {
    var f = S.pm
    var list = S.products.filter(function (p) {
      if (f.hidden === "exclude" && p.hidden) return false
      if (f.hidden === "only" && !p.hidden) return false
      if (f.brand && p.brand !== f.brand) return false
      if (f.name) { var b = brandOf(p.brand); if ((p.name + " " + p.memo + " " + b.name + " " + p.special).toLowerCase().indexOf(f.name.toLowerCase()) < 0) return false }
      if (f.size && p.extra.indexOf(f.size.replace(/\D/g, "")) < 0) return false
      if (f.code && p.code.toLowerCase().indexOf(f.code.toLowerCase()) < 0) return false
      return true
    })
    var qty = function (p) { return f.center ? p.stock[f.center] || 0 : pTotal(p) }
    list.sort(function (a, b) { return qty(b) - qty(a) })
    return { list: list, qty: qty }
  }
  function viewProducts() {
    var f = S.pm, r = pmFiltered(), list = r.list, total = list.length
    var pages = Math.max(1, Math.ceil(total / f.per))
    if (f.page > pages) f.page = pages
    var start = (f.page - 1) * f.per, rows = list.slice(start, start + f.per)
    var selCount = Object.keys(f.sel).length
    var allOn = rows.length && rows.every(function (p) { return f.sel[p.id] })
    var lowCnt = S.products.filter(function (p) { return pStat(p).status !== "정상" }).length

    var top = '<header class="flex items-center justify-between gap-3 px-4 sm:px-8 h-[52px] border-b border-gray-200 bg-white">' +
      '<a href="#/" class="flex items-center gap-2.5 min-w-0" aria-label="재고 대시보드로"><svg viewBox="0 0 40 40" class="w-9 h-9 shrink-0"><circle cx="20" cy="20" r="18" fill="#1a1a1a"/><circle cx="20" cy="20" r="11" fill="#fff"/><circle cx="20" cy="20" r="7" fill="#1a1a1a"/><path d="M20 2v6M20 32v6M2 20h6M32 20h6M7.3 7.3l4.2 4.2M28.5 28.5l4.2 4.2M7.3 32.7l4.2-4.2M28.5 11.5l4.2-4.2" stroke="#fff" stroke-width="2.4"/></svg>' +
      '<span class="leading-none"><span class="block text-[19px] font-extrabold tracking-tight">WHEELNOTE</span><span class="block text-[12.5px] text-gray-700 mt-0.5">휠노트 타이어 (가상)</span></span></a>' +
      '<div class="flex items-center gap-4 sm:gap-6">' +
      '<div class="relative"><button class="relative text-gray-600" data-act="menu" data-m="bell" aria-label="알림">' + ic("bell", "!w-[22px] !h-[22px]") + (lowCnt ? '<span class="absolute -top-1.5 -right-2 min-w-[17px] h-[17px] px-1 rounded-full bg-[#e5262b] text-white text-[10.5px] font-bold leading-[17px] text-center num">' + N(Math.min(lowCnt, 99)) + "</span>" : "") + "</button>" + bellMenu() + "</div>" +
      '<button class="text-gray-600 hidden sm:inline-flex" data-act="toast" data-msg="도움말: 재고표를 바꾸면 총재고가 해당 센터 기준으로 바뀝니다." aria-label="도움말">' + ic("help", "!w-[22px] !h-[22px]") + "</button>" +
      '<div class="relative"><button class="flex items-center gap-2.5" data-act="menu" data-m="user"><svg viewBox="0 0 24 24" class="w-9 h-9"><circle cx="12" cy="12" r="12" fill="#e5e7eb"/><circle cx="12" cy="9.5" r="4" fill="#9ca3af"/><path d="M4.5 20c1.6-3 4.3-4.5 7.5-4.5s5.9 1.5 7.5 4.5" fill="#9ca3af"/></svg><span class="hidden sm:block text-left leading-tight"><span class="block text-[15px] font-semibold">관리자</span><span class="block text-[12px] text-gray-500">관리자 계정</span></span>' + ic("chev", "!w-4 !h-4 text-gray-500 hidden sm:block") + "</button>" + userMenu() + "</div></div></header>"

    var bar = '<div class="flex flex-wrap items-start justify-between gap-3 pt-5">' +
      '<div class="min-w-0"><div class="flex flex-wrap items-center gap-x-3 gap-y-2"><h1 class="text-[25px] font-bold tracking-[-0.02em] mr-1">상품 관리</h1><span class="text-[14px] text-gray-700">재고표</span>' +
      '<select class="pf !h-[34px] !text-[14px] max-w-full" data-change="pmCenter" aria-label="재고표"><option value="">전체 (모든 재고표 합산)</option>' +
      S.centers.map(function (c) { return '<option value="' + e(c.id) + '"' + (f.center === c.id ? " selected" : "") + ">" + e(c.name) + " 재고표</option>" }).join("") + "</select></div>" +
      '<p class="text-[12.5px] text-gray-500 mt-2">※ 선택된 재고표 기준 ' + (f.center ? "센터" : "합산") + " 재고를 제공합니다.</p></div>" +
      '<div class="flex flex-wrap items-center gap-x-4 gap-y-2">' +
      '<button class="w-[38px] h-[34px] inline-flex items-center justify-center border border-gray-300 rounded-md ' + (f.showFilter ? "bg-gray-50" : "") + '" data-act="pmFilterToggle" aria-label="검색 조건 열기/닫기">' + ic("sliders") + "</button>" +
      '<div class="seg">' + [["all", "전체"], ["exclude", "숨김 제외"], ["only", "숨김만"]].map(function (s) { return '<button class="' + (f.hidden === s[0] ? "on" : "") + '" data-act="pmHidden" data-v="' + s[0] + '">' + s[1] + "</button>" }).join("") + "</div>" +
      '<span class="hidden md:block w-px h-6 bg-gray-200"></span><button class="pbtn" data-act="pmRefresh">' + ic("refresh") + "새로고침</button>" +
      '<span class="hidden md:block w-px h-6 bg-gray-200"></span><button class="pbtn" data-act="pmCsv">' + ic("download") + "다운로드</button>" +
      '<span class="hidden md:block w-px h-6 bg-gray-200"></span><button class="pbtn" data-act="toast" data-msg="체험판에서는 엑셀 업로드 대신 \'제품 추가\'로 등록해 보세요.">' + ic("upload") + "업로드</button>" +
      '<button class="red" data-act="openProduct">' + ic("plus", "", 2.4) + "제품 추가</button></div></div>"

    var filt = f.showFilter ? '<form class="flex flex-wrap items-end gap-x-5 gap-y-3 pt-4" data-submit="pmSearch">' +
      '<label class="w-[128px]"><span class="block text-[13px] text-gray-700 mb-1.5">브랜드</span><select name="brand" class="pf w-full" data-change="pmBrand"><option value="">전체</option>' +
      S.brands.map(function (b) { return '<option value="' + e(b.id) + '"' + (f.brand === b.id ? " selected" : "") + ">" + e(b.name) + "</option>" }).join("") + "</select></label>" +
      '<label class="w-[200px] max-w-full"><span class="block text-[13px] text-gray-700 mb-1.5">제품명</span><input name="name" class="pf w-full" placeholder="제품명 또는 키워드 입력" value="' + e(f.name) + '"></label>' +
      '<label class="w-[138px]"><span class="block text-[13px] text-gray-700 mb-1.5">사이즈(숫자)</span><input name="size" class="pf w-full" placeholder="예: 2254517" inputmode="numeric" value="' + e(f.size) + '"></label>' +
      '<label class="w-[140px]"><span class="block text-[13px] text-gray-700 mb-1.5">제품코드</span><input name="code" class="pf w-full" placeholder="예: RB-2254517" value="' + e(f.code) + '"></label>' +
      '<button class="h-9 px-5 inline-flex items-center gap-2 border border-gray-300 rounded-md text-[15px] font-medium hover:bg-gray-50">' + ic("search") + "검색</button>" +
      '<span class="h-9 inline-flex items-center text-[14px] text-gray-700">총 ' + N(total) + "개" + (selCount ? ' · <b class="ml-1 text-[#e5262b]">' + N(selCount) + '개 선택</b><button type="button" class="ml-2 text-[13px] underline text-gray-600" data-act="pmBulkHide">숨김 처리</button><button type="button" class="ml-2 text-[13px] underline text-gray-600" data-act="pmBulkShow">숨김 해제</button>' : "") + "</span></form>" : ""

    var th = '<tr><th class="w-[44px]"><input type="checkbox" data-act="pmAll" ' + (allOn ? "checked" : "") + ' aria-label="이 페이지 전체 선택"></th><th>#</th><th>브랜드</th><th>제품명</th><th>제품코드</th><th>사이즈</th><th>추가 검색어</th><th>SS/LI</th><th>마킹</th><th>원산지</th><th>특수</th><th>기타</th><th>계절</th><th>공급단가</th><th>이전공가(팁)</th><th>메모</th><th>총재고</th><th>관리</th></tr>'
    var body = rows.map(function (p, i) {
      var b = brandOf(p.brand)
      return '<tr' + (p.hidden ? ' style="color:#9ca3af"' : "") + '><td><input type="checkbox" data-act="pmSel" data-id="' + e(p.id) + '" ' + (f.sel[p.id] ? "checked" : "") + ' aria-label="선택"></td>' +
        "<td>" + N(start + i + 1) + "</td><td>" + e(b.name) + "</td><td>" + e(p.name) + (p.hidden ? ' <span class="text-[11px] text-gray-400">(숨김)</span>' : "") + "</td><td>" + e(p.code) + "</td><td>" + e(p.size) + "</td><td>" + e(p.extra) +
        "</td><td>" + e(p.ssli) + "</td><td>" + e(p.mark) + "</td><td>" + e(p.origin) + "</td><td>" + e(p.special) + "</td><td>" + e(p.etc) + "</td><td>" + e(p.season) + '</td><td class="num">' + N(p.price) +
        '</td><td class="num text-[12.5px]">' + e(p.prev) + "</td><td>" + e(p.memo) + '</td><td class="num font-bold text-[#1f5fd6] text-[14px]">' + N(r.qty(p)) + "</td>" +
        '<td><span class="inline-flex gap-1"><button class="act-ic" data-act="pmView" data-id="' + e(p.id) + '" aria-label="보기">' + ic("eye") + '</button><button class="act-ic" data-act="pmEdit" data-id="' + e(p.id) + '" aria-label="수정">' + ic("pencil") + '</button><button class="act-ic !text-[#e5262b]" data-act="pmDel" data-id="' + e(p.id) + '" aria-label="삭제">' + ic("trash") + "</button></span></td></tr>"
    }).join("")
    if (!rows.length) body = '<tr><td colspan="18" class="!h-32 text-gray-500">검색 결과가 없습니다.</td></tr>'

    // 페이지 번호
    var nums = [], from = Math.max(1, Math.min(f.page - 2, pages - 4)), to = Math.min(pages, from + 4)
    for (var k = from; k <= to; k++) nums.push('<button class="pg' + (k === f.page ? " on" : "") + '" data-act="pmPage" data-v="' + k + '">' + k + "</button>")
    if (to < pages) nums.push('<span class="px-1 text-gray-500">···</span><button class="pg" data-act="pmPage" data-v="' + pages + '">' + pages + "</button>")
    var pgBtn = function (v, name, dis) { return '<button class="pg" data-act="pmPage" data-v="' + v + '"' + (dis ? " disabled" : "") + ' aria-label="' + name + '">' + ic(name, "!w-4 !h-4") + "</button>" }
    var foot = '<div class="flex flex-wrap items-center justify-between gap-3 pt-5 pb-6">' +
      '<div class="flex items-center gap-3 text-[14px] text-gray-700">전체 ' + N(total) + '개 <select class="pf !h-[34px]" data-change="pmPer" aria-label="페이지당 개수">' + [20, 50, 100].map(function (n) { return '<option value="' + n + '"' + (f.per === n ? " selected" : "") + ">" + n + "개씩 보기</option>" }).join("") + "</select></div>" +
      '<div class="flex flex-wrap items-center gap-2">' + pgBtn(1, "left2", f.page === 1) + pgBtn(f.page - 1, "left", f.page === 1) + nums.join("") + pgBtn(f.page + 1, "right", f.page === pages) + pgBtn(pages, "right2", f.page === pages) + "</div>" +
      '<div class="text-[14px] text-gray-600">' + N(f.page) + " / " + N(pages) + " 페이지</div></div>"

    return '<div class="pm min-h-screen">' + top + '<main class="px-4 sm:px-8">' + bar + filt + '<div class="pt-wrap mt-5"><table class="pt"><thead>' + th + "</thead><tbody>" + body + "</tbody></table></div>" + foot + '</main><div class="h-20"></div></div>' + modal()
  }

  // ---------- 모달 ----------
  function mHead(title, sub) {
    return '<div class="flex items-start justify-between px-6 pt-5 pb-4 border-b border-gray-100"><div><h2 class="text-[19px] font-bold">' + e(title) + "</h2>" + (sub ? '<p class="text-[13.5px] text-gray-500 mt-1">' + e(sub) + "</p>" : "") +
      '</div><button type="button" class="act-ic" data-act="closeModal" aria-label="닫기">' + ic("x") + "</button></div>"
  }
  function mFoot(okLabel, red) {
    return '<div class="flex justify-end gap-2 px-6 py-4 border-t border-gray-100"><button type="button" class="btn" data-act="closeModal">취소</button><button class="btn ' + (red ? "!bg-[#e5262b] !border-[#e5262b] !text-white font-semibold" : "btn-primary") + '">' + e(okLabel) + "</button></div>"
  }
  function opt(v, label, sel) { return '<option value="' + e(v) + '"' + (String(v) === String(sel) ? " selected" : "") + ">" + e(label) + "</option>" }
  function modal() {
    var m = S.modal
    if (!m) return ""
    var html = ""
    if (m.kind === "move") {
      var d = m.d, list = brandProducts(d.brand), p = prodOf(d.product) || list[0]
      if (p) d.product = p.id
      var s = p ? pStat(p) : null
      var cStock = p ? p.stock[d.center] || 0 : 0
      html = '<form class="mdl" data-submit="saveMove" id="moveForm">' + mHead(d.type === "in" ? "입고 등록" : "출고 등록", "센터 재고와 합계가 바로 바뀝니다") +
        '<div class="px-6 py-5 space-y-4"><div class="seg-t w-full"><button type="button" class="flex-1 ' + (d.type === "in" ? "on" : "") + '" data-act="mvType" data-v="in">입고</button><button type="button" class="flex-1 ' + (d.type === "out" ? "on" : "") + '" data-act="mvType" data-v="out">출고</button></div>' +
        '<div class="grid grid-cols-2 gap-3"><label><span class="lb">브랜드</span><select name="brand" class="field" data-change="mvField">' + S.brands.map(function (b) { return opt(b.id, b.name, d.brand) }).join("") + "</select></label>" +
        '<label><span class="lb">센터</span><select name="center" class="field" data-change="mvField">' + S.centers.map(function (c) { return opt(c.id, c.name, d.center) }).join("") + "</select></label></div>" +
        '<label class="block"><span class="lb">품목</span><select name="product" class="field" data-change="mvField">' + list.map(function (x) { return opt(x.id, x.name + " · " + x.size + " (" + x.code + ")", d.product) }).join("") + "</select></label>" +
        (p ? '<div class="grid grid-cols-3 gap-2 text-center"><div class="rounded-lg bg-gray-50 py-2"><div class="text-[12px] text-gray-500">이 센터 재고</div><div class="num font-bold text-[16px]">' + N(cStock) + '</div></div><div class="rounded-lg bg-gray-50 py-2"><div class="text-[12px] text-gray-500">가용 / 예약</div><div class="num font-bold text-[16px]">' + N(s.avail) + " / " + N(p.reserved) + '</div></div><div class="rounded-lg bg-gray-50 py-2"><div class="text-[12px] text-gray-500">입고예정</div><div class="num font-bold text-[16px]">' + N(p.incoming) + "</div></div></div>" : "") +
        '<div class="grid grid-cols-2 gap-3"><label><span class="lb">수량</span><input name="qty" id="mvQty" type="number" min="1" class="field num" value="' + e(d.qty) + '" data-input="mvQty" required></label>' +
        '<label><span class="lb">처리일</span><input name="date" type="date" class="field" value="' + e(d.date) + '" data-change="mvField"></label></div>' +
        '<label class="flex items-center gap-2 text-[14px] text-gray-700"><input type="checkbox" name="link" class="w-4 h-4 accent-[#1468f0]" ' + (d.link ? "checked" : "") + ' data-change="mvLink">' + (d.type === "in" ? "입고예정 수량에서 차감" : "예약 수량에서 차감 (예약분 출고)") + "</label>" +
        '<label class="block"><span class="lb">메모</span><input name="memo" class="field" placeholder="' + (d.type === "in" ? "예: 발주분 입고" : "예: 대리점 출고") + '" value="' + e(d.memo) + '" data-input="mvMemo" id="mvMemo"></label>' +
        (m.err ? '<p class="text-[13.5px] text-red-600">' + e(m.err) + "</p>" : "") + "</div>" + mFoot(d.type === "in" ? "입고 처리" : "출고 처리") + "</form>"
    } else if (m.kind === "view") {
      var pv = prodOf(m.id), sv = pStat(pv), bv = brandOf(pv.brand)
      var rowsV = [["브랜드", bv.name], ["제품코드", pv.code], ["사이즈", pv.size], ["SS/LI", pv.ssli], ["원산지", pv.origin], ["계절", pv.season], ["특수", pv.special], ["공급단가", Demo.won(pv.price)], ["메모", pv.memo]]
      html = '<div class="mdl !max-w-[600px]">' + mHead(pv.name, bv.name + " · " + pv.size) + '<div class="px-6 py-5 space-y-5"><dl class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">' +
        rowsV.map(function (x) { return '<div><dt class="text-[12.5px] text-gray-500">' + e(x[0]) + '</dt><dd class="text-[14.5px] font-medium">' + e(x[1]) + "</dd></div>" }).join("") + "</dl>" +
        '<div><div class="flex items-center justify-between mb-2"><h3 class="text-[15px] font-bold">센터별 재고</h3>' + badge(sv.status) + '</div><div class="card overflow-x-auto"><table class="grid-t"><thead><tr>' + S.centers.map(function (c) { return "<th>" + e(c.name) + "</th>" }).join("") + '<th class="!bg-[#e8f0fc]">총재고</th></tr></thead><tbody><tr>' +
        S.centers.map(function (c) { return '<td class="num">' + N(pv.stock[c.id] || 0) + "</td>" }).join("") + '<td class="num font-bold text-[#1a5fd8]">' + N(sv.total) + "</td></tr></tbody></table></div>" +
        '<div class="grid grid-cols-4 gap-2 mt-3 text-center">' + [["가용", sv.avail], ["예약", pv.reserved], ["입고예정", pv.incoming], ["안전재고", pv.safety]].map(function (x) { return '<div class="rounded-lg bg-gray-50 py-2"><div class="text-[12px] text-gray-500">' + e(x[0]) + '</div><div class="num font-bold">' + N(x[1]) + "</div></div>" }).join("") + "</div></div></div>" +
        '<div class="flex justify-end gap-2 px-6 py-4 border-t border-gray-100"><button class="btn" data-act="goBrand" data-id="' + e(bv.id) + '">브랜드 재고 보기</button><button class="btn !bg-[#e5262b] !border-[#e5262b] !text-white font-semibold" data-act="pmEdit" data-id="' + e(pv.id) + '">수정</button></div></div>'
    } else if (m.kind === "product") {
      var pe = m.id ? prodOf(m.id) : null
      html = '<form class="mdl" data-submit="saveProduct">' + mHead(pe ? "제품 수정" : "제품 추가", pe ? pe.code : "새 제품은 모든 센터 재고 0으로 시작합니다") + '<div class="px-6 py-5 space-y-4">' +
        (pe ? "" : '<label class="block"><span class="lb">브랜드</span><select name="brand" class="field">' + S.brands.map(function (b) { return opt(b.id, b.name, S.pm.brand || "b1") }).join("") + "</select></label>") +
        '<label class="block"><span class="lb">제품명</span><input name="name" class="field" required value="' + e(pe ? pe.name : "") + '" placeholder="예: AeroPath S2"></label>' +
        (pe ? "" : '<div class="grid grid-cols-2 gap-3"><label><span class="lb">사이즈</span><input name="size" class="field" required placeholder="예: 225/45R17"></label><label><span class="lb">계절</span><select name="season" class="field"><option>사계절용</option><option>여름용</option><option>겨울용</option></select></label></div>') +
        '<div class="grid grid-cols-2 gap-3"><label><span class="lb">공급단가(원)</span><input name="price" type="number" min="0" class="field num" required value="' + e(pe ? pe.price : "") + '"></label><label><span class="lb">안전재고</span><input name="safety" type="number" min="0" class="field num" required value="' + e(pe ? pe.safety : 20) + '"></label></div>' +
        '<label class="block"><span class="lb">메모</span><input name="memo" class="field" value="' + e(pe && pe.memo !== "-" ? pe.memo : "") + '"></label>' +
        '<label class="flex items-center gap-2 text-[14px] text-gray-700"><input type="checkbox" name="hidden" class="w-4 h-4 accent-[#e5262b]" ' + (pe && pe.hidden ? "checked" : "") + ">목록에서 숨김</label></div>" + mFoot(pe ? "저장" : "추가", true) + "</form>"
    } else if (m.kind === "del") {
      var pd = prodOf(m.id)
      html = '<form class="mdl !max-w-[420px]" data-submit="confirmDel">' + mHead("제품 삭제") + '<div class="px-6 py-5 text-[15px] text-gray-700"><b>' + e(pd.name) + "</b> (" + e(pd.code) + ")을(를) 삭제할까요?<br><span class=\"text-[13.5px] text-gray-500\">센터 재고 " + N(pTotal(pd)) + "개도 함께 빠집니다.</span></div>" + mFoot("삭제", true) + "</form>"
    } else if (m.kind === "user") {
      html = '<form class="mdl" data-submit="addUser">' + mHead("사용자 초대", "가상 메일로 초대장이 발송된 것으로 처리합니다") + '<div class="px-6 py-5 space-y-4">' +
        '<div class="grid grid-cols-2 gap-3"><label><span class="lb">이름</span><input name="name" class="field" required placeholder="예: 오세린"></label><label><span class="lb">역할</span><select name="role" class="field">' + S.roles.map(function (r) { return opt(r.name, r.name, "조회 전용") }).join("") + "</select></label></div>" +
        '<label class="block"><span class="lb">이메일</span><input name="email" type="email" class="field" required placeholder="name@example.com"></label>' +
        '<label class="block"><span class="lb">담당 센터</span><select name="center" class="field">' + opt("전체", "전체", "") + S.centers.map(function (c) { return opt(c.name, c.name, "") }).join("") + "</select></label></div>" + mFoot("초대하기") + "</form>"
    }
    return '<div class="ovl">' + html + "</div>"
  }

  // ---------- 동작 ----------
  Demo.on("drawer", function () { S.drawer = !S.drawer; S.menu = null; R() })
  Demo.on("nav", function (d) { S.drawer = false; S.menu = null; S.modal = null; if (location.hash === "#" + d.to) R(); else Demo.go(d.to) })
  Demo.on("menu", function (d) { S.menu = S.menu === d.m ? null : d.m; R() })
  Demo.on("closeMenu", function () { S.menu = null; R() })
  Demo.on("toast", function (d) { S.menu = null; R(); Demo.toast(d.msg) })
  Demo.on("goBrand", function (d) { S.menu = null; S.modal = null; S.detailTab = "items"; Demo.go("/brand?b=" + d.id) })
  Demo.on("chip", function (d) { S.chip = d.v; R() })
  Demo.on("q", function (v) { S.q = v; R() })
  Demo.on("brandSel", function (v) { S.brandSel = v; R() })
  Demo.on("zoom", function (v) { S.zoom = Number(v); R() })
  Demo.on("statusSel", function (v) { S.statusSel = v; R() })
  Demo.on("tg", function (d) { S[d.k] = !S[d.k]; R() })
  Demo.on("refresh", function () { S.updated = nowStr(); R(); Demo.toast("재고 현황을 새로 불러왔습니다.") })
  Demo.on("dtab", function (d) { S.detailTab = d.v; R() })
  Demo.on("htype", function (d) { S.histType = d.v; R() })
  Demo.on("toggleHold", function (d) {
    var b = brandOf(d.id); b.hold = !b.hold; R()
    Demo.toast(b.name + (b.hold ? " 브랜드를 보류로 설정했습니다." : " 브랜드 보류를 해제했습니다."))
  })

  // 내보내기 (CSV)
  function download(name, rows) {
    var csv = "﻿" + rows.map(function (r) { return r.map(function (c) { var s = String(c); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s }).join(",") }).join("\r\n")
    var url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }))
    var a = document.createElement("a")
    a.href = url; a.download = name
    document.body.appendChild(a); a.click(); a.remove()
    setTimeout(function () { URL.revokeObjectURL(url) }, 1000)
  }
  Demo.on("exportCsv", function () {
    var rows = dashRows(), cs = S.centers
    var out = [["브랜드", "총재고"].concat(cs.map(function (c) { return c.name }), ["온라인", "오프라인", "안전재고", "가용수량", "예약수량", "입고예정", "상태"])]
    rows.forEach(function (r) {
      var a = r.a
      out.push([r.b.name, a.total].concat(cs.map(function (c) { return a.stock[c.id] }), [a.online, a.offline, a.safety, a.avail, a.reserved, a.incoming, a.status]))
    })
    download("재고현황_" + Demo.day(0) + ".csv", out)
    Demo.toast("현재 보기 " + rows.length + "개 브랜드를 CSV로 내보냈습니다.")
  })
  Demo.on("pmCsv", function () {
    var r = pmFiltered()
    var out = [["브랜드", "제품명", "제품코드", "사이즈", "추가 검색어", "SS/LI", "마킹", "원산지", "특수", "기타", "계절", "공급단가", "이전공가", "메모", "총재고", "숨김"]]
    r.list.forEach(function (p) { out.push([brandOf(p.brand).name, p.name, p.code, p.size, p.extra, p.ssli, p.mark, p.origin, p.special, p.etc, p.season, p.price, p.prev, p.memo, r.qty(p), p.hidden ? "Y" : "N"]) })
    download("상품목록_" + Demo.day(0) + ".csv", out)
    Demo.toast(r.list.length + "개 제품을 다운로드했습니다.")
  })

  // 입고·출고
  Demo.on("newMove", function (d) {
    var bid = d.brand || S.brandSel || S.brands[0].id
    S.menu = null
    S.modal = { kind: "move", d: { type: d.type || "in", brand: bid, product: d.product || "", center: S.centers[0].id, qty: "", date: Demo.day(0), memo: "", link: true } }
    R()
    setTimeout(function () { var q = document.getElementById("mvQty"); if (q) q.focus() }, 0)
  })
  Demo.on("mvType", function (d) { S.modal.d.type = d.v; S.modal.err = ""; R() })
  Demo.on("mvField", function (v, el) {
    var d = S.modal.d
    d[el.name] = v
    if (el.name === "brand") d.product = ""
    S.modal.err = ""
    R()
  })
  Demo.on("mvQty", function (v) { S.modal.d.qty = v })
  Demo.on("mvMemo", function (v) { S.modal.d.memo = v })
  Demo.on("mvLink", function (v, el) { S.modal.d.link = el.checked })
  Demo.on("saveMove", function (vals) {
    var d = S.modal.d, p = prodOf(d.product), qty = Math.floor(Number(vals.qty))
    if (!p) return
    if (!(qty > 0)) { S.modal.err = "수량을 1 이상 입력해 주세요."; return R() }
    var c = centerOf(d.center), have = p.stock[c.id] || 0
    if (d.type === "out") {
      if (qty > have) { S.modal.err = c.name + " 재고(" + Demo.num(have) + "개)보다 많이 출고할 수 없습니다."; return R() }
      var avail = Math.max(0, pTotal(p) - p.reserved)
      if (!d.link && qty > avail) { S.modal.err = "예약분을 제외한 가용수량(" + Demo.num(avail) + "개)을 넘습니다. 예약분 출고로 처리해 주세요."; return R() }
      p.stock[c.id] = have - qty
      if (d.link) p.reserved = Math.max(0, p.reserved - qty)
    } else {
      p.stock[c.id] = have + qty
      if (d.link) p.incoming = Math.max(0, p.incoming - qty)
    }
    var d2 = new Date()
    S.moves.unshift({ id: "m" + Date.now(), date: d.date || Demo.day(0), time: String(d2.getHours()).padStart(2, "0") + ":" + String(d2.getMinutes()).padStart(2, "0"), type: d.type, brand: p.brand, product: p.id, center: c.id, qty: qty, by: "김하린", memo: vals.memo || "" })
    S.modal = null
    S.updated = nowStr()
    R()
    Demo.toast(c.name + " · " + p.name + " " + (d.type === "in" ? "입고 +" : "출고 −") + Demo.num(qty) + "개 처리했습니다.")
  })
  Demo.on("closeModal", function () { S.modal = null; R() })
  document.addEventListener("click", function (ev) {
    if (ev.target.classList && ev.target.classList.contains("ovl")) { S.modal = null; R() }
  })

  // 권한
  Demo.on("openUser", function () { S.modal = { kind: "user" }; R() })
  Demo.on("addUser", function (v) {
    S.users.push({ id: "u" + Date.now(), name: v.name.trim(), email: v.email.trim(), center: v.center, role: v.role, active: true, last: "-" })
    S.modal = null; R(); Demo.toast(v.name + "님을 " + v.role + " 역할로 초대했습니다.")
  })
  Demo.on("userRole", function (v, el) {
    var u = S.users.filter(function (x) { return x.id === el.dataset.id })[0]
    u.role = v; R(); Demo.toast(u.name + "님의 역할을 " + v + "(으)로 바꿨습니다.")
  })
  Demo.on("userActive", function (d) {
    var u = S.users.filter(function (x) { return x.id === d.id })[0]
    u.active = !u.active; R(); Demo.toast(u.name + "님 계정을 " + (u.active ? "사용" : "중지") + "으로 바꿨습니다.")
  })
  Demo.on("perm", function (d) {
    if (d.r === "0") return Demo.toast("관리자 역할의 권한은 바꿀 수 없습니다.")
    var r = S.roles[Number(d.r)]
    r.p[d.p] = r.p[d.p] ? 0 : 1; R()
  })

  // 창고
  Demo.on("addCenter", function (v) {
    var name = v.name.trim()
    if (!name) return
    if (S.centers.some(function (c) { return c.name === name })) return Demo.toast("같은 이름의 센터가 이미 있습니다.")
    var id = "c" + Date.now()
    S.centers.push({ id: id, name: name, code: (v.code || "NEW").trim().toUpperCase(), region: (v.region || "미지정").trim() + " (가상)" })
    S.products.forEach(function (p) { p.stock[id] = 0 })
    R(); Demo.toast(name + "을(를) 추가했습니다. 대시보드에 새 열이 생겼습니다.")
  })
  Demo.on("renameCenter", function (v, el) {
    var c = centerOf(el.dataset.id), name = v.name.trim()
    if (!name || name === c.name) return
    var old = c.name
    c.name = name; R(); Demo.toast(old + " → " + name + "(으)로 이름을 바꿨습니다.")
  })
  Demo.on("delCenter", function (d) {
    var c = centerOf(d.id), sum = 0
    S.products.forEach(function (p) { sum += p.stock[c.id] || 0 })
    if (sum > 0) return Demo.toast(c.name + "에 재고 " + Demo.num(sum) + "개가 남아 있어 삭제할 수 없습니다.")
    if (S.centers.length <= 1) return Demo.toast("센터는 최소 1곳이 필요합니다.")
    S.centers = S.centers.filter(function (x) { return x.id !== c.id })
    S.products.forEach(function (p) { delete p.stock[c.id] })
    if (S.pm.center === c.id) S.pm.center = ""
    R(); Demo.toast(c.name + "을(를) 삭제했습니다.")
  })

  // 상품 관리
  var pm = S.pm
  Demo.on("pmCenter", function (v) { pm.center = v; pm.page = 1; R() })
  Demo.on("pmHidden", function (d) { pm.hidden = d.v; pm.page = 1; R() })
  Demo.on("pmFilterToggle", function () { pm.showFilter = !pm.showFilter; R() })
  Demo.on("pmBrand", function (v) { pm.brand = v; pm.page = 1; R() })
  Demo.on("pmSearch", function (v) { pm.brand = v.brand; pm.name = v.name.trim(); pm.size = v.size.trim(); pm.code = v.code.trim(); pm.page = 1; R() })
  Demo.on("pmRefresh", function () { pm.brand = pm.name = pm.size = pm.code = ""; pm.sel = {}; pm.page = 1; R(); Demo.toast("검색 조건을 초기화하고 목록을 새로 불러왔습니다.") })
  Demo.on("pmPer", function (v) { pm.per = Number(v); pm.page = 1; R() })
  Demo.on("pmPage", function (d) { pm.page = Number(d.v); R(); window.scrollTo(0, 0) })
  Demo.on("pmSel", function (d) { if (pm.sel[d.id]) delete pm.sel[d.id]; else pm.sel[d.id] = 1; R() })
  Demo.on("pmAll", function () {
    var r = pmFiltered().list.slice((pm.page - 1) * pm.per, pm.page * pm.per)
    var all = r.every(function (p) { return pm.sel[p.id] })
    r.forEach(function (p) { if (all) delete pm.sel[p.id]; else pm.sel[p.id] = 1 })
    R()
  })
  function bulk(h) {
    var n = 0
    Object.keys(pm.sel).forEach(function (id) { var p = prodOf(id); if (p) { p.hidden = h; n++ } })
    pm.sel = {}; R(); Demo.toast(n + "개 제품을 " + (h ? "숨김 처리" : "숨김 해제") + "했습니다.")
  }
  Demo.on("pmBulkHide", function () { bulk(true) })
  Demo.on("pmBulkShow", function () { bulk(false) })
  Demo.on("pmView", function (d) { S.modal = { kind: "view", id: d.id }; R() })
  Demo.on("pmEdit", function (d) { S.modal = { kind: "product", id: d.id }; R() })
  Demo.on("openProduct", function () { S.modal = { kind: "product" }; R() })
  Demo.on("pmDel", function (d) { S.modal = { kind: "del", id: d.id }; R() })
  Demo.on("confirmDel", function () {
    var p = prodOf(S.modal.id)
    S.products = S.products.filter(function (x) { return x !== p })
    delete pm.sel[p.id]
    S.modal = null; R(); Demo.toast(p.name + " (" + p.code + ")을(를) 삭제했습니다.")
  })
  Demo.on("saveProduct", function (v) {
    var id = S.modal.id
    if (id) {
      var p = prodOf(id)
      p.name = v.name.trim(); p.price = Number(v.price) || 0; p.safety = Number(v.safety) || 0; p.memo = v.memo.trim() || "-"; p.hidden = !!v.hidden
      S.modal = null; R(); Demo.toast(p.name + " 정보를 저장했습니다.")
    } else {
      var b = brandOf(v.brand)
      var np = newProduct(b, v.name.trim(), { zero: true })
      np.size = v.size.trim().toUpperCase()
      np.extra = np.size.replace(/\D/g, "") + (/C$/.test(np.size) ? "C" : "")
      np.code = b.pre + "-" + np.extra
      np.season = v.season; np.price = Number(v.price) || 0; np.safety = Number(v.safety) || 0; np.memo = v.memo.trim() || "-"; np.hidden = !!v.hidden
      np.prev = "-"
      S.products.unshift(np)
      S.modal = null; R(); Demo.toast(np.name + "을(를) 추가했습니다. 입고 등록으로 재고를 채워 보세요.")
    }
  })

  // ---------- 라우팅 ----------
  Demo.mount(function (r) {
    if (r.path === "/products") return viewProducts()
    if (r.path === "/brand") return viewBrand(r.query)
    if (r.path === "/history") return viewHistory()
    if (r.path === "/permissions") return viewPerm()
    if (r.path === "/warehouses") return viewWh()
    return viewDash()
  })
  window.addEventListener("hashchange", function () { S.drawer = false; S.menu = null })
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && (S.modal || S.drawer || S.menu)) { S.modal = null; S.drawer = false; S.menu = null; R() }
  })
  Demo.banner()
})()
