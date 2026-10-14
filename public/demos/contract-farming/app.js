/* 와이넥스 포트폴리오 체험판 - (가상) 쌀 계약재배 통합관리
 * 화면 배치와 클래스는 실제 납품 시스템을 따르고, 조직·사업장·농가·주소는 모두 지어낸 것이다. */
;(function () {
  var e = Demo.esc
  var num = Demo.num
  var FILE_MSG = "체험판에서는 파일을 내려받지 않습니다"
  var ORG = "(가상) 쌀 생산자 협의회"
  var VARIETY = "누리향 1호 · 향미"
  var CONTACT = "문의 000-0000-0000"
  var Y = Number(Demo.day(0).slice(0, 4))

  // ---------- 아이콘 (lucide 모양) ----------
  var ICONS = {
    dashboard: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    register: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"/><path d="M4 13.5V6a2 2 0 0 1 2-2h2"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    wheat: '<path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"/>',
    sheet: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 13h2"/><path d="M14 13h2"/><path d="M8 17h2"/><path d="M14 17h2"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
    history: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
    backup: '<path d="M12 2v8"/><path d="m16 6-4 4-4-4"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h.01"/><path d="M10 18h.01"/>',
    calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="M16 19h6"/><path d="M19 16v6"/>',
    key: '<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/>',
    logout: '<path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>',
    login: '<path d="m10 17 5-5-5-5"/><path d="M15 12H3"/><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>',
    eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    pencil: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><path d="M10 11v6"/><path d="M14 11v6"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    left: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    right: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    userCog: '<circle cx="10" cy="7" r="4"/><path d="M10.3 15H7a4 4 0 0 0-4 4v2"/><circle cx="18" cy="18" r="3"/><path d="m21.7 19.4-.9-.3"/><path d="m15.2 16.9-.9-.4"/><path d="m16.6 21.7.3-.9"/><path d="m19.1 15.2.4-.9"/><path d="m19.6 21.7-.4-1"/><path d="m16.9 15.2-.4-1"/><path d="m15.2 19.1-.9.3"/><path d="m21.7 16.6-.9.4"/>',
    userX: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m17 8 5 5"/><path d="m22 8-5 5"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    folder: '<path d="M6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',
    checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    menu: '<path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  }
  function ic(name, cls) {
    return '<svg class="' + (cls || "size-5") + ' shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + "</svg>"
  }

  // ---------- 공통 버튼·뱃지 클래스 ----------
  var BASE = "cf-press inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap cursor-pointer disabled:opacity-50 "
  var B = {
    primary: BASE + "h-12 px-5 bg-primary text-primary-foreground",
    outline: BASE + "h-12 px-5 border border-border bg-background text-foreground",
    soft: BASE + "h-12 px-5 border border-border bg-secondary text-foreground",
    card: BASE + "h-12 px-5 border-2 border-border bg-card text-foreground",
    success: BASE + "h-14 px-5 bg-success text-success-foreground text-lg",
    danger: BASE + "h-12 px-5 bg-destructive text-destructive-foreground",
    dangerOutline: BASE + "h-12 px-5 border border-destructive/50 bg-card text-destructive",
    sm: BASE + "h-10 px-3 border border-border bg-background text-foreground",
    smDanger: BASE + "h-10 px-3 border border-border bg-background text-destructive",
    smPrimary: BASE + "h-10 px-4 bg-primary text-primary-foreground",
  }
  function badge(kind, text) {
    var c = {
      warning: "border-warning/50 bg-warning/10 text-warning",
      success: "border-success/40 bg-success/10 text-success",
      danger: "border-destructive/40 bg-destructive/10 text-destructive",
      muted: "border-border bg-muted text-foreground",
      primary: "border-primary/40 bg-accent text-primary",
    }[kind]
    return '<span class="inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-[15px] font-semibold whitespace-nowrap ' + c + '"><span class="size-2 rounded-full bg-current"></span>' + e(text) + "</span>"
  }

  // ---------- 가상 데이터 ----------
  var seed = 20261014
  function rnd() {
    seed = (seed * 1103515245 + 12345) % 2147483648
    return seed / 2147483648
  }
  function pick(a) {
    return a[Math.floor(rnd() * a.length)]
  }
  var TOWNS = [
    ["가람면", ["새들리", "덕골리", "버들리", "매봄리"]],
    ["누리읍", ["샘골리", "바위리", "한내리", "솔밭리"]],
    ["솔내면", ["갈매리", "은행리", "물방리", "꽃재리"]],
    ["새들면", ["청보리", "동막리", "안골리", "숲정리"]],
    ["한빛읍", ["달내리", "구름리", "두레리", "별밭리"]],
    ["들녘면", ["너른리", "띠울리", "논골리", "장터리"]],
    ["마루면", ["고개리", "윗말리", "아랫리", "큰골리"]],
    ["다온면", ["햇골리", "시냇리", "모래리", "갈대리"]],
  ]
  function risOf(town) {
    for (var i = 0; i < TOWNS.length; i++) if (TOWNS[i][0] === town) return TOWNS[i][1]
    return []
  }
  var WS_NAMES = [
    ["가람", "농협"], ["누리", "농협"], ["솔내", "농협"], ["새들", "농협"], ["한빛", "농협"],
    ["들녘", "농협"], ["마루", "농협"], ["다온", "농협"], ["너울", "농협"], ["바름", "농협"],
    ["온새미", "농협"], ["이랑", "농협"], ["햇살RPC", "RPC"], ["푸른RPC", "RPC"], ["미리내농산", "영농조합"], ["은결", "농협"],
    ["늘품통합", "농협"], ["아라", "농협"], ["별빛농산", "영농조합"], ["고운들", "농협"],
  ]
  var SUR = ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임", "한", "오", "서", "신", "권", "황", "안", "송", "홍", "유"]
  var GIV = ["도윤", "서준", "하늘", "가온", "다솜", "보람", "새롬", "한결", "이슬", "나래", "봄이", "초롬", "미르", "슬기", "한별", "단비", "온유", "이든", "해솔", "라온", "들찬", "은솔", "지음", "소담", "다올", "예슬", "바른", "우람"]

  var S = {
    session: null,
    year: Y,
    defaultYear: Y,
    years: [Y - 1, Y],
    settings: { seedCoef: 0.005, bag: 20, strawMin: 2000 },
    workplaces: [],
    farms: [],
    parcels: [],
    requests: [],
    logs: [],
    dup: {},
    hqWs: "w01",
    backup: { freq: "매일", time: "18:00", keep: 3, auto: true, files: [] },
    surveyor: { active: true },
    ui: { modal: null, nav: false, q: {}, f: {}, sel: null, tab: null },
  }
  var uid = 100
  function nid(p) {
    uid += 1
    return p + uid
  }
  var phoneSeq = 1000
  function nextPhone() {
    phoneSeq += 1
    return "010-0000-" + phoneSeq
  }

  WS_NAMES.forEach(function (w, i) {
    S.workplaces.push({
      id: "w" + String(i + 1).padStart(2, "0"),
      name: w[0],
      type: w[1],
      manager: i < 5 ? pick(SUR) + pick(GIV) : "",
      phone: i < 5 ? "010-0000-" + (8000 + i) : "",
      agreeCoef: i < 3 ? 0.68 : null,
      seedCoef: i === 1 ? 0.0052 : null,
      bag: null,
      login: String(1001 + i),
      active: true,
      tempPw: i >= 3,
      lastLogin: i < 3 ? Demo.day(-2) + " 09:00" : "",
      towns: [TOWNS[i % 8][0], TOWNS[(i + 3) % 8][0]],
      unitOk: i < 3,
    })
  })
  var usedKeys = {}
  function makeJibun(town, ri, yr) {
    for (;;) {
      var j = String(1 + Math.floor(rnd() * 880)) + (rnd() < 0.3 ? "-" + (1 + Math.floor(rnd() * 9)) : "")
      var k = yr + "|" + town + "|" + ri + "|" + j
      if (!usedKeys[k]) {
        usedKeys[k] = 1
        return j
      }
    }
  }
  var FARM_COUNTS = [11, 10, 5, 5, 5]
  FARM_COUNTS.forEach(function (cnt, wi) {
    var ws = S.workplaces[wi]
    var names = {}
    for (var f = 0; f < cnt; f++) {
      var nm
      do nm = pick(SUR) + pick(GIV)
      while (names[nm])
      names[nm] = 1
      var farm = { id: nid("f"), wsId: ws.id, year: Y, name: nm, phone: nextPhone(), bagsOverride: null, agreeOverride: null, shipBase: 0, rounds: [], created: Demo.day(-30 + f) }
      S.farms.push(farm)
      var pc = 1 + Math.floor(rnd() * 3)
      for (var p = 0; p < pc; p++) {
        var town = rnd() < 0.7 ? ws.towns[0] : ws.towns[1]
        var ri = pick(risOf(town))
        var area = Math.round(1500 + rnd() * 4100)
        var st = null
        if (area >= 2000 && wi < 2) st = rnd() < 0.3 ? null : rnd() < 0.85 ? "이행" : "미이행"
        S.parcels.push({ id: nid("p"), farmId: farm.id, wsId: ws.id, year: Y, town: town, ri: ri, jibun: makeJibun(town, ri, Y), area: area, note: "", status: "정상", created: Demo.day(-30 + f), straw: st, strawDate: st ? Demo.day(-1) : "", strawNote: st === "미이행" ? "절반만 환원" : "" })
      }
      if (wi < 2 && rnd() < 0.8) {
        farm.shipBase = Math.round(rnd() * 6) * 600
        if (rnd() < 0.5) farm.rounds.push({ date: Demo.day(-3), kg: 800 })
      }
    }
  })
  // 전년도 자료: 올해 농가 대부분 + 올해 없는 농가 1명씩
  S.farms.filter(function (f) { return f.year === Y }).forEach(function (f, i) {
    if (i % 7 === 6) return
    var pf = { id: nid("f"), wsId: f.wsId, year: Y - 1, name: f.name, phone: f.phone, bagsOverride: null, agreeOverride: null, shipBase: 3000 + Math.round(rnd() * 4) * 500, rounds: [], created: (Y - 1) + "-04-1" + (i % 9) }
    S.farms.push(pf)
    S.parcels.filter(function (p) { return p.farmId === f.id }).forEach(function (p) {
      usedKeys[(Y - 1) + "|" + p.town + "|" + p.ri + "|" + p.jibun] = 1
      S.parcels.push({ id: nid("p"), farmId: pf.id, wsId: p.wsId, year: Y - 1, town: p.town, ri: p.ri, jibun: p.jibun, area: p.area, note: "", status: "정상", created: pf.created, straw: p.area >= 2000 ? "이행" : null, strawDate: p.area >= 2000 ? (Y - 1) + "-11-05" : "", strawNote: "" })
    })
  })
  S.workplaces.slice(0, 5).forEach(function (ws, i) {
    var pf = { id: nid("f"), wsId: ws.id, year: Y - 1, name: pick(SUR) + pick(GIV), phone: "010-0000-" + (2001 + i), bagsOverride: null, agreeOverride: null, shipBase: 2400, rounds: [], created: (Y - 1) + "-04-20" }
    S.farms.push(pf)
    for (var k = 0; k < 2; k++) {
      var town = ws.towns[0]
      var ri = pick(risOf(town))
      S.parcels.push({ id: nid("p"), farmId: pf.id, wsId: ws.id, year: Y - 1, town: town, ri: ri, jibun: makeJibun(town, ri, Y - 1), area: 3000 + k * 1240, note: "", status: "정상", created: pf.created, straw: "이행", strawDate: (Y - 1) + "-11-05", strawNote: "" })
    }
  })
  // 예외 신청 2건: 가람이 먼저 등록한 "가람면 새들리 620" 을 다른 농가가 같이 신청
  ;(function () {
    var owner = S.farms.filter(function (f) { return f.wsId === "w01" && f.year === Y })[0]
    usedKeys[Y + "|가람면|새들리|620"] = 1
    S.parcels.push({ id: nid("p"), farmId: owner.id, wsId: "w01", year: Y, town: "가람면", ri: "새들리", jibun: "620", area: 2003, note: "", status: "정상", created: Demo.day(-2), straw: "이행", strawDate: Demo.day(-1), strawNote: "" })
    var reqs = [
      ["w02", 1376, "공동명의 필지입니다. 지분 절반을 경작합니다."],
      ["w03", 1000, "지분 공동소유 필지로 절반씩 경작합니다"],
    ]
    reqs.forEach(function (r, i) {
      var farm = S.farms.filter(function (f) { return f.wsId === r[0] && f.year === Y })[i]
      var p = { id: nid("p"), farmId: farm.id, wsId: r[0], year: Y, town: "가람면", ri: "새들리", jibun: "620", area: r[1], note: "", status: "신청", created: Demo.day(-1), straw: null, strawDate: "", strawNote: "" }
      S.parcels.push(p)
      S.requests.push({ id: nid("r"), parcelId: p.id, wsId: r[0], reason: r[2], status: "대기", date: Demo.day(-1), rejectReason: "" })
      S.dup[r[0]] = (S.dup[r[0]] || 0) + 1
    })
  })()
  // 작업 기록 초기값
  ;(function () {
    var t = function (d, h) { return Demo.day(d) + " " + h }
    var L = [
      [-3, "08:51:12", "w01", "ws", "로그인", "로그인", ""],
      [-3, "08:55:40", "w01", "ws", "농가", "농가 등록", "새 농가 3명"],
      [-3, "09:12:05", "w01", "ws", "필지", "필지 등록", "논 7건"],
      [-2, "10:02:31", "w02", "ws", "로그인", "로그인", ""],
      [-2, "10:20:44", "w02", "ws", "필지", "필지 등록", "논 5건"],
      [-2, "13:01:10", "hq", "hq", "로그인", "로그인", ""],
      [-2, "13:05:22", "hq", "hq", "내려받기", "엑셀 내려받기", "사업장별 집계"],
      [-1, "09:40:18", "w02", "ws", "예외", "예외 신청", "가람면 새들리 620 · 1,376㎡"],
      [-1, "11:15:51", "w03", "ws", "예외", "예외 신청", "가람면 새들리 620 · 1,000㎡"],
      [-1, "14:30:03", "w01", "ws", "출하", "출하 입력", "회차 추가 800kg"],
      [-1, "16:02:44", "survey", "survey", "볏짚", "볏짚 조사", "가람면 새들리 · 이행"],
      [0, "08:30:00", "w01", "ws", "로그인", "로그인", ""],
    ]
    L.forEach(function (l) {
      S.logs.unshift({ at: t(l[0], l[1]), wsId: l[3] === "ws" ? l[2] : "", role: l[3], cat: l[4], action: l[5], detail: l[6], ip: "10.0.0." + (12 + (l[2].charCodeAt(2) || 0) % 30) })
    })
  })()
  S.backup.files = [
    { name: "협의회_백업_" + Demo.day(-1) + "_1800.zip", size: "1.8 MB" },
    { name: "협의회_백업_" + Demo.day(-2) + "_1800.zip", size: "1.7 MB" },
    { name: "협의회_백업_" + Demo.day(-3) + "_1800.zip", size: "1.7 MB" },
  ]

  // ---------- 계산 ----------
  function wsById(id) {
    for (var i = 0; i < S.workplaces.length; i++) if (S.workplaces[i].id === id) return S.workplaces[i]
    return null
  }
  function farmById(id) {
    for (var i = 0; i < S.farms.length; i++) if (S.farms[i].id === id) return S.farms[i]
    return null
  }
  function parcelById(id) {
    for (var i = 0; i < S.parcels.length; i++) if (S.parcels[i].id === id) return S.parcels[i]
    return null
  }
  function valid(p) {
    return p.status === "정상" || p.status === "예외승인"
  }
  function seedCoef(ws) {
    return ws && ws.seedCoef ? ws.seedCoef : S.settings.seedCoef
  }
  function bagKg(ws) {
    return ws && ws.bag ? ws.bag : S.settings.bag
  }
  function seedKg(p) {
    return p.area * seedCoef(wsById(p.wsId))
  }
  function farmParcels(f, all) {
    return S.parcels.filter(function (p) { return p.farmId === f.id && (all || valid(p)) })
  }
  function farmStats(f) {
    var ps = farmParcels(f)
    var area = 0, seedSum = 0
    ps.forEach(function (p) { area += p.area; seedSum += seedKg(p) })
    var ws = wsById(f.wsId)
    var autoBags = seedSum > 0 ? Math.ceil(seedSum / bagKg(ws)) : 0
    var bags = f.bagsOverride != null ? f.bagsOverride : autoBags
    var agree = f.agreeOverride != null ? f.agreeOverride : ws.agreeCoef ? Math.round(area * ws.agreeCoef) : null
    var ship = f.shipBase + f.rounds.reduce(function (a, r) { return a + r.kg }, 0)
    return { n: ps.length, area: area, seed: seedSum, bags: bags, autoBags: autoBags, agree: agree, ship: ship }
  }
  function yearFarms(wsId) {
    return S.farms.filter(function (f) { return f.year === S.year && (!wsId || f.wsId === wsId) })
  }
  function yearParcels(wsId) {
    return S.parcels.filter(function (p) { return p.year === S.year && (!wsId || p.wsId === wsId) })
  }
  function wsTotals(wsId) {
    var fs = yearFarms(wsId).filter(function (f) { return farmParcels(f).length })
    var t = { farms: fs.length, parcels: 0, area: 0, bags: 0, agree: 0, ship: 0 }
    fs.forEach(function (f) {
      var s = farmStats(f)
      t.parcels += s.n; t.area += s.area; t.bags += s.bags; t.agree += s.agree || 0; t.ship += s.ship
    })
    return t
  }
  function addr(p) {
    return p.town + " " + p.ri + " " + p.jibun + "번지"
  }
  function normJ(j) {
    return String(j || "").replace(/\s|번지|번/g, "")
  }
  function keyOf(p) {
    return p.town + "|" + p.ri + "|" + normJ(p.jibun)
  }
  function findDup(town, ri, jibun, exceptId) {
    var k = town + "|" + ri + "|" + normJ(jibun)
    return S.parcels.filter(function (p) {
      return p.year === S.year && p.id !== exceptId && p.status !== "반려" && keyOf(p) === k
    })
  }
  function pending() {
    return S.requests.filter(function (r) { var p = parcelById(r.parcelId); return r.status === "대기" && p && p.year === S.year })
  }
  function dupCount(wsId) {
    if (wsId) return S.dup[wsId] || 0
    var t = 0
    for (var k in S.dup) t += S.dup[k]
    return t
  }
  function fmt2(n) {
    return (Math.round(n * 100) / 100).toFixed(2)
  }
  function nowStamp() {
    var d = new Date()
    var p = function (x) { return String(x).padStart(2, "0") }
    return Demo.day(0) + " " + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds())
  }
  function log(cat, action, detail, wsId) {
    var s = S.session || { role: "hq" }
    S.logs.unshift({ at: nowStamp(), wsId: wsId != null ? wsId : s.role === "ws" ? s.wsId : "", role: s.role, cat: cat, action: action, detail: detail || "", ip: "10.0.0.24" })
  }
  function ctxWs() {
    return S.session && S.session.role === "ws" ? S.session.wsId : S.hqWs
  }
  function isHQ() {
    return S.session && S.session.role === "hq"
  }

  // ---------- 다시 그리기 (입력 포커스·대화상자 스크롤 유지) ----------
  function rerender() {
    var a = document.activeElement
    var id = a && a.id
    var s1 = null, s2 = null
    try { s1 = a.selectionStart; s2 = a.selectionEnd } catch (x) {}
    var dlg = document.getElementById("dlg")
    var top = dlg ? dlg.scrollTop : 0
    Demo.update()
    var d2 = document.getElementById("dlg")
    if (d2) d2.scrollTop = top
    if (id) {
      var n = document.getElementById(id)
      if (n) {
        n.focus()
        try { if (s1 != null) n.setSelectionRange(s1, s2) } catch (x) {}
      }
    }
  }
  function openModal(m) {
    S.ui.modal = m
    rerender()
    var d = document.getElementById("dlg")
    if (d) d.scrollTop = 0
  }
  function closeModal() {
    S.ui.modal = null
    rerender()
  }

  // ---------- 공통 조각 ----------
  function pageHead(title, desc, actions) {
    return '<div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between cf-mb8">' +
      '<div class="min-w-0"><h1 class="text-[30px] font-bold leading-tight">' + e(title) + "</h1>" +
      (desc ? '<p class="mt-2 text-muted-foreground text-pretty">' + desc + "</p>" : "") + "</div>" +
      (actions ? '<div class="flex flex-wrap gap-3 md:justify-end">' + actions + "</div>" : "") + "</div>"
  }
  function kpi(label, value, unit, opt) {
    opt = opt || {}
    return '<div class="rounded-2xl border-2 ' + (opt.warn ? "border-warning" : "border-border") + ' bg-card p-6 flex flex-col">' +
      '<div class="font-semibold text-muted-foreground">' + e(label) + "</div>" +
      '<div class="mt-auto pt-6 flex items-baseline gap-2"><span class="text-5xl font-bold ' + (opt.warn ? "text-warning" : "") + '">' + e(value) + '</span><span class="text-lg font-semibold ' + (opt.warn ? "text-warning" : "text-muted-foreground") + '">' + e(unit) + "</span></div>" +
      (opt.link ? '<a href="' + opt.link + '" class="mt-2 inline-flex items-center gap-1 font-semibold text-warning hover:underline">승인 화면으로 이동 ' + ic("right", "size-4") + "</a>" : "") +
      "</div>"
  }
  function field(label, inner, help) {
    return '<label class="flex flex-col gap-2"><span class="font-semibold">' + e(label) + "</span>" + inner + (help ? '<span class="text-sm text-muted-foreground leading-relaxed">' + help + "</span>" : "") + "</label>"
  }
  function tableWrap(inner, extra) {
    return '<div class="overflow-auto rounded-2xl border border-border bg-card ' + (extra || "") + '">' + inner + "</div>"
  }
  function emptyRow(cols, text) {
    return '<tr><td colspan="' + cols + '" class="text-center text-muted-foreground">' + e(text) + "</td></tr>"
  }
  function wsSelect(id, act, value, withAll) {
    var o = withAll ? '<option value="">전체</option>' : ""
    S.workplaces.forEach(function (w) {
      o += '<option value="' + e(w.id) + '"' + (w.id === value ? " selected" : "") + ">" + e(w.name) + "</option>"
    })
    return '<select id="' + id + '" data-change="' + act + '" class="field-input cf-select bg-secondary">' + o + "</select>"
  }

  // ---------- 로그인 ----------
  function brandBlock() {
    return '<div class="text-center"><div class="text-muted-foreground">' + e(ORG) + '</div><div class="mt-1 text-[30px] font-bold leading-tight">계약재배 통합관리</div><div class="mt-1 text-muted-foreground">' + e(VARIETY) + "</div></div>"
  }
  function loginFoot() {
    return '<p class="mt-6 text-center text-muted-foreground leading-relaxed">비밀번호를 잊으셨으면 본부로 연락해 주세요. 다른 사람과 함께 쓰는 컴퓨터에서는 사용 후 꼭 로그아웃해 주세요.<br>' + e(CONTACT) + " · 평일 09:00 ~ 18:00</p>"
  }
  function viewPicker() {
    var g = ""
    S.workplaces.forEach(function (w) {
      if (!w.active) return
      g += '<a href="#/login?who=' + e(w.id) + '" class="cf-press flex h-16 items-center justify-center rounded-xl border-2 border-border bg-background text-lg font-semibold">' + e(w.name) + "</a>"
    })
    return '<div class="min-h-dvh flex items-center justify-center p-4"><div class="w-full sm:max-w-[1180px] rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-10">' +
      brandBlock() +
      '<h2 class="mt-6 mb-4 text-center text-xl font-semibold">사업장을 눌러 주세요</h2>' +
      '<div class="cf-ws-grid">' + g + "</div>" +
      '<div class="mt-6 flex flex-wrap justify-center gap-3">' +
      '<a href="#/login?who=hq" class="cf-press inline-flex h-14 items-center justify-center rounded-xl border-2 border-primary/50 bg-card px-8 text-lg font-bold text-primary">본부 관리자</a>' +
      '<a href="#/login?who=survey" class="cf-press inline-flex h-14 items-center justify-center rounded-xl border-2 border-border bg-card px-8 text-lg font-bold">볏짚 조사원</a>' +
      "</div>" + loginFoot() + "</div></div>"
  }
  function viewLogin(q) {
    var who = q.who || "hq"
    var label = who === "hq" ? "본부 관리자" : who === "survey" ? "볏짚 조사원" : (wsById(who) || {}).name || "사업장"
    var show = S.ui.f.showPw
    return '<div class="min-h-dvh flex items-center justify-center p-4"><div class="w-full sm:max-w-[520px] rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-10">' +
      brandBlock() +
      '<div class="mt-8 flex items-center justify-between gap-3 rounded-xl border-2 border-primary bg-accent px-6 h-16"><span class="text-xl font-bold">' + e(label) + '</span><a href="#/" class="inline-flex items-center gap-1 font-semibold text-primary">' + ic("left", "size-4") + "다시 고르기</a></div>" +
      '<form data-submit="login" data-who="' + e(who) + '" class="mt-6 flex flex-col gap-2">' +
      '<label for="pw" class="font-semibold text-lg">비밀번호</label>' +
      '<div class="flex gap-3"><input id="pw" name="pw" type="' + (show ? "text" : "password") + '" class="field-input" autocomplete="off" placeholder="체험판은 아무 값이나 됩니다">' +
      '<button type="button" data-act="toggle-pw" class="' + B.outline + ' bg-card shrink-0">' + ic("eye", "size-5") + "보기</button></div>" +
      '<button type="submit" class="' + B.primary + ' mt-4 w-full h-14 text-lg">' + ic("login", "size-5") + "로그인</button></form>" +
      loginFoot() + "</div></div>"
  }

  // ---------- 틀 (사이드바 + 머리) ----------
  var NAV_HQ = [
    ["/hq", "dashboard", "대시보드"], ["/hq/register", "register", "계약재배 등록"], ["/hq/approvals", "shield", "예외 승인"],
    ["/hq/ship", "truck", "수매·출하 관리"], ["/hq/straw", "wheat", "볏짚 환원 조사"], ["/hq/report", "sheet", "집계·자료 제출"],
    ["/hq/forms", "download", "양식 다운로드"], ["/hq/log", "history", "작업 기록"], ["/hq/workplaces", "building", "사업장 관리"], ["/hq/backup", "backup", "백업 설정"],
  ]
  var NAV_WS = [
    ["/ws", "dashboard", "대시보드"], ["/ws/register", "register", "계약재배 등록"], ["/ws/ship", "truck", "수매·출하 관리"],
    ["/ws/straw", "wheat", "볏짚 환원 조사"], ["/ws/report", "sheet", "집계·자료 제출"], ["/ws/forms", "download", "양식 다운로드"], ["/ws/log", "history", "작업 기록"],
  ]
  function shell(path, body) {
    var hq = isHQ()
    var nav = hq ? NAV_HQ : NAV_WS
    var items = nav.map(function (n) {
      var on = n[0] === path
      var cnt = n[0] === "/hq/approvals" ? pending().length : 0
      return '<a href="#' + n[0] + '" class="flex items-center gap-3 rounded-xl px-5 h-14 text-[17px] font-semibold transition-colors ' + (on ? "bg-sidebar-primary text-sidebar-primary-foreground" : "hover:bg-sidebar-accent") + '">' + ic(n[1], "size-6") + "<span>" + e(n[2]) + "</span>" +
        (cnt ? '<span class="ml-auto inline-flex size-7 items-center justify-center rounded-full bg-warning text-warning-foreground text-sm font-bold">' + e(cnt) + "</span>" : "") + "</a>"
    }).join("")
    var open = S.ui.nav
    var side = '<aside class="fixed inset-y-0 left-0 z-40 w-[260px] bg-sidebar text-sidebar-foreground flex flex-col transition-transform ' + (open ? "translate-x-0" : "-translate-x-full") + ' xl:translate-x-0">' +
      '<div class="border-b border-sidebar-border px-6 py-6"><div class="text-sm text-sidebar-foreground/75">' + e(ORG) + '</div><div class="mt-1 text-xl font-bold">계약재배 통합관리</div><div class="mt-1 text-sm text-sidebar-foreground/75">' + e(VARIETY) + "</div></div>" +
      '<nav class="flex-1 overflow-y-auto p-3 flex flex-col gap-1">' + items + "</nav>" +
      '<div class="border-t border-sidebar-border px-6 py-5 text-sm text-sidebar-foreground/75">' + e(CONTACT) + "<br>평일 09:00 ~ 18:00</div></aside>" +
      (open ? '<div class="fixed inset-0 z-30 bg-foreground/40 xl:hidden" data-act="nav-close"></div>' : "")
    var ws = hq ? null : wsById(S.session.wsId)
    var yearOpts = S.years.slice().sort().reverse().map(function (y) {
      return '<option value="' + y + '"' + (y === S.year ? " selected" : "") + ">" + y + "년</option>"
    }).join("")
    var head = '<header class="sticky top-0 z-20 border-b border-border bg-card"><div class="cf-header flex flex-wrap items-center gap-3 px-4 py-3 sm:px-8">' +
      '<button type="button" data-act="nav-open" class="' + B.sm + ' xl:hidden" aria-label="메뉴">' + ic("menu", "size-5") + "</button>" +
      '<div class="flex items-center gap-3 min-w-0 flex-1"><span class="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary max-sm:hidden">' + ic(hq ? "userCog" : "building", "size-6") + "</span>" +
      '<div class="min-w-0"><div class="text-lg font-bold truncate">' + e(hq ? ORG + " 본부" : ws.name) + '</div><div class="text-sm text-muted-foreground truncate">' + e(hq ? "본부 관리자 · 전체 사업장 조회/승인 · admin" : "사업장 담당자 · " + ws.login) + "</div></div></div>" +
      '<div class="flex items-center gap-3 flex-wrap"><span class="font-semibold max-sm:hidden">사업연도</span><select id="yearSel" data-change="year" class="field-input cf-select w-32 font-semibold" aria-label="사업연도">' + yearOpts + "</select>" +
      (hq ? '<button type="button" data-act="year-modal" class="' + B.soft + '">' + ic("calendar") + '<span class="max-sm:hidden">연도 관리</span></button>' : "") +
      '<button type="button" data-act="pw-modal" class="' + B.soft + '">' + ic("key") + '<span class="max-sm:hidden">비밀번호 변경</span></button>' +
      '<button type="button" data-act="logout" class="' + B.soft + '">' + ic("logout") + '<span class="max-sm:hidden">로그아웃</span></button></div></div></header>'
    return side + '<div class="xl:pl-[260px] min-h-dvh flex flex-col">' + head + '<main class="flex-1 p-4 sm:p-8 min-w-0">' + body + "</main></div>"
  }

  // ---------- 차트 ----------
  function niceStep(max) {
    var raw = Math.max(max, 1) / 4
    var mag = Math.pow(10, Math.floor(Math.log10(raw)))
    var ms = [1, 2, 2.5, 5, 10]
    for (var i = 0; i < ms.length; i++) if (ms[i] * mag >= raw) return ms[i] * mag
    return 10 * mag
  }
  function barChart(rows, rowH, width) {
    rowH = rowH || 40
    var W = width || 640, L = 100, R = 72, T = 10
    var max = 0
    rows.forEach(function (r) { if (r.v > max) max = r.v })
    var step = niceStep(max)
    var top = step * 4
    var H = T + rows.length * rowH + 34
    var plotW = W - L - R
    var s = '<svg viewBox="0 0 ' + W + " " + H + '" class="w-full h-auto" role="img" aria-label="막대 차트" style="font-size:15px">'
    for (var i = 0; i <= 4; i++) {
      var x = L + (plotW * i) / 4
      s += '<line x1="' + x + '" y1="' + T + '" x2="' + x + '" y2="' + (H - 28) + '" style="stroke:var(--border);stroke-width:1"/>'
      s += '<text x="' + x + '" y="' + (H - 10) + '" text-anchor="middle" style="fill:var(--muted-foreground)">' + e(num(step * i)) + "</text>"
    }
    s += '<line x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + (H - 28) + '" style="stroke:var(--foreground);stroke-width:1"/>'
    s += '<line x1="' + L + '" y1="' + (H - 28) + '" x2="' + (W - R) + '" y2="' + (H - 28) + '" style="stroke:var(--foreground);stroke-width:1"/>'
    rows.forEach(function (r, i) {
      var y = T + i * rowH + rowH / 2
      var bw = top ? (plotW * r.v) / top : 0
      s += '<text x="' + (L - 8) + '" y="' + (y + 4) + '" text-anchor="end" style="fill:var(--foreground);font-weight:600">' + e(r.label) + "</text>"
      if (r.v > 0) {
        s += '<rect x="' + L + '" y="' + (y - 11) + '" width="' + bw.toFixed(1) + '" height="22" rx="3" style="fill:var(--chart-1)"/>'
        s += '<text x="' + (L + bw + 6) + '" y="' + (y + 4) + '" style="fill:var(--foreground)">' + e(num(r.v)) + "</text>"
      }
    })
    return s + "</svg>"
  }
  function donut(pct) {
    var r = 70, c = 2 * Math.PI * r
    var on = (c * pct) / 100
    return '<svg viewBox="0 0 200 200" class="w-full h-auto" role="img" aria-label="접수 진행률" style="max-width:300px;margin:0 auto">' +
      '<circle cx="100" cy="100" r="' + r + '" fill="none" style="stroke:var(--chart-2)" stroke-width="30"/>' +
      (pct > 0 ? '<circle cx="100" cy="100" r="' + r + '" fill="none" style="stroke:var(--chart-1)" stroke-width="30" stroke-dasharray="' + on.toFixed(2) + " " + c.toFixed(2) + '" transform="rotate(-90 100 100)"/>' : "") +
      '<text x="100" y="104" text-anchor="middle" style="font-size:34px;font-weight:800;fill:var(--foreground)">' + e(pct) + "%</text>" +
      '<text x="100" y="128" text-anchor="middle" style="font-size:12px;font-weight:600;fill:var(--muted-foreground)">접수 완료</text></svg>'
  }

  // ---------- 본부: 대시보드 ----------
  function viewHqDash() {
    var t = wsTotals()
    var rows = S.workplaces.map(function (w) { return { label: w.name, v: wsTotals(w.id).area } })
    rows.sort(function (a, b) { return b.v - a.v })
    var done = rows.filter(function (r) { return r.v > 0 }).length
    var pct = Math.round((done / S.workplaces.length) * 100)
    var pend = pending().length
    return pageHead("대시보드", e(S.year) + "년 " + e(VARIETY.split(" · ")[0]) + " 계약재배 전체 사업장 현황입니다.") +
      '<div class="cf-kpis">' +
      kpi("총 계약농가 수", num(t.farms), "농가") + kpi("총 계약면적", (t.area / 10000).toFixed(1), "ha") + kpi("신청·조정 포수", num(t.bags), "포") +
      kpi("중복 차단 건수", num(dupCount()), "건") + kpi("예외 승인 대기", num(pend), "건", { warn: pend > 0, link: pend > 0 ? "#/hq/approvals" : "" }) + "</div>" +
      '<div class="cf-charts mt-6">' +
      '<section class="rounded-2xl border border-border bg-card p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-xl font-bold">사업장별 접수 현황 (계약면적)</h2><span class="text-sm text-muted-foreground">단위: ㎡</span></div>' + barChart(rows, 38) + "</section>" +
      '<section class="rounded-2xl border border-border bg-card p-6 flex flex-col"><h2 class="text-xl font-bold mb-4">사업장 접수 진행률</h2><div class="flex-1 flex items-center">' + donut(pct) + "</div>" +
      '<div class="cf-donut-legend mt-6">' +
      '<div class="rounded-xl border-2 border-border p-4"><div class="flex items-center gap-2 font-semibold"><span class="size-4 rounded" style="background:var(--chart-1)"></span>등록 완료</div><div class="mt-1 text-2xl font-bold">' + e(done) + '<span class="text-base text-muted-foreground"> 곳</span></div></div>' +
      '<div class="rounded-xl border-2 border-border p-4"><div class="flex items-center gap-2 font-semibold"><span class="size-4 rounded" style="background:var(--chart-2)"></span>미등록</div><div class="mt-1 text-2xl font-bold">' + e(S.workplaces.length - done) + '<span class="text-base text-muted-foreground"> 곳</span></div></div>' +
      "</div></section></div>"
  }

  // ---------- 사업장: 대시보드 ----------
  function viewWsDash() {
    var wsId = S.session.wsId
    var ws = wsById(wsId)
    var t = wsTotals(wsId)
    var by = {}
    yearParcels(wsId).filter(valid).forEach(function (p) { by[p.town] = (by[p.town] || 0) + p.area })
    var rows = Object.keys(by).map(function (k) { return { label: k, v: by[k] } }).sort(function (a, b) { return b.v - a.v })
    var pend = pending().filter(function (r) { return r.wsId === wsId }).length
    var recent = yearParcels(wsId).slice().sort(function (a, b) { return a.created < b.created ? 1 : -1 }).slice(0, 6)
    var body = recent.map(function (p) {
      var f = farmById(p.farmId)
      return "<tr><td>" + e(p.created) + '</td><td class="font-semibold">' + e(f.name) + "</td><td>" + e(addr(p)) + '</td><td class="num">' + e(num(p.area)) + '</td><td class="text-center">' + statusBadge(p) + "</td></tr>"
    }).join("") || emptyRow(5, "아직 등록한 논이 없습니다.")
    return pageHead("대시보드", e(S.year) + "년 " + e(ws.name) + " 계약재배 접수 현황입니다.") +
      '<div class="cf-kpis">' +
      kpi("총 계약농가 수", num(t.farms), "농가") + kpi("총 계약면적", (t.area / 10000).toFixed(1), "ha") + kpi("신청·조정 포수", num(t.bags), "포") +
      kpi("중복 차단 건수", num(dupCount(wsId)), "건") + kpi("예외 승인 대기", num(pend), "건", { warn: pend > 0 }) + "</div>" +
      '<section class="mt-6 rounded-2xl border border-border bg-card p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-xl font-bold">읍면동별 접수 현황 (계약면적)</h2><span class="text-sm text-muted-foreground">단위: ㎡</span></div>' +
      (rows.length ? barChart(rows, 64, 1100) : '<p class="py-10 text-center text-muted-foreground">아직 등록한 논이 없습니다.</p>') + "</section>" +
      '<section class="mt-6 rounded-2xl border border-border bg-card p-6"><div class="flex items-center justify-between mb-4"><h2 class="text-xl font-bold">최근 등록 내역</h2><a href="#/ws/register?view=parcel" class="font-semibold text-primary hover:underline">전체 보기</a></div>' +
      tableWrap('<table class="grid-table"><thead><tr><th>등록일</th><th>농가명</th><th>지번</th><th class="num">면적(㎡)</th><th>상태</th></tr></thead><tbody>' + body + "</tbody></table>") + "</section>"
  }
  function statusBadge(p) {
    if (p.status === "정상") return badge("success", "정상")
    if (p.status === "신청") return badge("warning", "예외 신청")
    if (p.status === "예외승인") return badge("primary", "예외 승인")
    return badge("danger", "반려")
  }

  // ---------- 계약재배 등록 ----------
  function viewRegister(q) {
    var wsId = ctxWs()
    var view = q.view === "parcel" ? "parcel" : "farm"
    var base = isHQ() ? "#/hq/register" : "#/ws/register"
    var kw = (S.ui.q.reg || "").trim()
    var tabs = '<div class="flex gap-3 mb-6">' +
      '<a href="' + base + '" class="' + BASE + "h-12 px-6 border-2 " + (view === "farm" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card") + '">농가로 보기</a>' +
      '<a href="' + base + '?view=parcel" class="' + BASE + "h-12 px-6 border-2 " + (view === "parcel" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card") + '">필지로 보기</a></div>'
    var acts = '<button type="button" data-act="farm-add" class="' + B.primary + '">' + ic("plus") + "농가 추가</button>" +
      '<button type="button" data-act="prev-modal" class="' + B.card + '">' + ic("history") + "전년도 불러오기</button>" +
      '<button type="button" data-act="file" class="' + B.card + '">' + ic("upload") + "엑셀 올리기</button>" +
      '<button type="button" data-act="roster-modal" class="' + B.card + '">' + ic("download") + "명단 엑셀 다운로드</button>"
    var hqPick = isHQ() ? '<div class="mb-6 flex flex-wrap items-center gap-3"><span class="font-semibold">사업장</span><div class="w-44">' + wsSelect("hqWs1", "hq-ws", wsId) + '</div><span class="text-sm text-muted-foreground">본부는 사업장을 골라 대신 입력할 수 있습니다.</span></div>' : ""
    var html = hqPick + tabs + pageHead("계약재배 등록", "농가를 누르면 그 농가의 논을 한 화면에서 보고 이어서 입력합니다. 이미 등록된 논은 저장되지 않습니다.", acts)
    var match = function (s) { return !kw || s.indexOf(kw) >= 0 }
    if (view === "farm") {
      var farms = yearFarms(wsId).filter(function (f) {
        return match(f.name) || match(f.phone) || farmParcels(f, true).some(function (p) { return match(addr(p)) })
      }).sort(function (a, b) { return a.name < b.name ? -1 : 1 })
      html += searchCard("reg", "농가명, 연락처 또는 지번 입력", "농가 " + farms.length + "명")
      var rows = farms.map(function (f, i) {
        var s = farmStats(f)
        var need = farmParcels(f, true).filter(function (p) { return p.status === "신청" || p.status === "반려" }).length
        return '<tr><td class="text-center">' + (i + 1) + '</td><td><button type="button" data-act="farm-open" data-id="' + e(f.id) + '" class="font-bold hover:underline">' + e(f.name) + "</button></td><td>" + e(f.phone) + '</td><td class="num">' + e(s.n) + '</td><td class="num">' + e(num(s.area)) + '</td><td class="num">' + e(fmt2(s.seed)) + '</td><td class="num">' + e(s.bags) + '포</td><td class="num">' + e(num(s.ship)) + '</td><td class="text-center">' + (need ? '<span class="font-semibold text-warning">' + e(need) + "건</span>" : "-") + '</td><td class="text-center"><button type="button" data-act="farm-open" data-id="' + e(f.id) + '" class="' + B.sm + '">열기</button></td></tr>'
      }).join("") || emptyRow(10, "조건에 맞는 농가가 없습니다.")
      html += tableWrap('<table class="grid-table"><thead><tr><th>순번</th><th>농가명</th><th>연락처</th><th class="num">필지</th><th class="num">면적(㎡)</th><th class="num">종자(kg)</th><th class="num">포수</th><th class="num">출하(kg)</th><th>확인 필요</th><th>관리</th></tr></thead><tbody>' + rows + "</tbody></table>", "max-h-[680px]")
    } else {
      var ps = yearParcels(wsId).filter(function (p) { var f = farmById(p.farmId); return match(f.name) || match(addr(p)) || match(f.phone) })
      ps.sort(function (a, b) { return (a.town + a.ri + a.jibun).localeCompare(b.town + b.ri + b.jibun, "ko", { numeric: true }) })
      html += searchCard("reg", "농가명, 연락처 또는 지번 입력", "필지 " + ps.length + "건")
      var rows2 = ps.map(function (p) {
        var f = farmById(p.farmId)
        return '<tr><td><button type="button" data-act="farm-open" data-id="' + e(f.id) + '" class="font-bold hover:underline">' + e(f.name) + "</button></td><td>" + e(p.town) + "</td><td>" + e(p.ri) + '</td><td class="font-semibold">' + e(p.jibun) + '</td><td class="num">' + e(num(p.area)) + '</td><td class="num">' + e(fmt2(seedKg(p))) + "</td><td>" + e(p.note) + '</td><td class="text-center">' + statusBadge(p) + "</td><td>" + e(p.created) + "</td></tr>"
      }).join("") || emptyRow(9, "조건에 맞는 필지가 없습니다.")
      html += tableWrap('<table class="grid-table"><thead><tr><th>농가명</th><th>읍면동</th><th>리</th><th>지번</th><th class="num">면적(㎡)</th><th class="num">종자(kg)</th><th>비고</th><th>상태</th><th>등록일</th></tr></thead><tbody>' + rows2 + "</tbody></table>", "max-h-[680px]")
    }
    return html
  }
  function searchCard(key, ph, countText, extra) {
    var c = countText.split(" ")
    return '<div class="rounded-2xl border border-border bg-card p-5 mb-6 flex flex-col gap-4 md:flex-row md:items-end">' +
      '<label class="flex flex-col gap-2 flex-1 min-w-0"><span class="font-semibold">검색</span><input id="q-' + key + '" data-input="q" data-key="' + key + '" value="' + e(S.ui.q[key] || "") + '" class="field-input" placeholder="' + e(ph) + '"></label>' +
      (extra || "") + '<div class="font-semibold whitespace-nowrap md:pb-3">' + e(c[0]) + ' <span class="text-primary">' + e(c.slice(1).join(" ")) + "</span></div></div>"
  }

  // 농가 상세(논 입력) 대화상자
  function dlgFarm(m) {
    var f = farmById(m.farmId)
    var ws = wsById(f.wsId)
    var s = farmStats(f)
    var ps = farmParcels(f, true)
    var d = m.draft
    var townOpts = function (sel) {
      var towns = ws.towns.concat(TOWNS.map(function (t) { return t[0] }).filter(function (t) { return ws.towns.indexOf(t) < 0 }))
      return towns.map(function (t) { return '<option value="' + e(t) + '"' + (t === sel ? " selected" : "") + ">" + e(t) + "</option>" }).join("")
    }
    var riOpts = function (town, sel) {
      return risOf(town).map(function (r) { return '<option value="' + e(r) + '"' + (r === sel ? " selected" : "") + ">" + e(r) + "</option>" }).join("")
    }
    var rows = ps.map(function (p) {
      if (m.editId === p.id) {
        var ed = m.edit
        return '<tr><td><select form="editrow" name="town" id="ed-town" data-change="ed-town" class="field-input cf-select bg-secondary min-w-32">' + townOpts(ed.town) + '</select></td><td><select form="editrow" name="ri" class="field-input cf-select bg-secondary min-w-28">' + riOpts(ed.town, ed.ri) + '</select></td><td><input form="editrow" name="jibun" value="' + e(ed.jibun) + '" class="field-input min-w-24"></td><td><input form="editrow" name="area" id="ed-area" data-input="seed-preview" data-target="ed-seed" inputmode="numeric" value="' + e(ed.area) + '" class="field-input text-right min-w-24"></td><td class="num text-muted-foreground" id="ed-seed">' + e(fmt2(ed.area * seedCoef(ws))) + '</td><td><input form="editrow" name="note" value="' + e(ed.note) + '" class="field-input min-w-40"></td><td></td><td class="text-center"><div class="flex justify-center gap-2"><button type="submit" form="editrow" class="' + B.smPrimary + '">' + ic("check", "size-4") + '저장</button><button type="button" data-act="ed-cancel" class="' + B.sm + '">취소</button></div></td></tr>'
      }
      return "<tr><td>" + e(p.town) + "</td><td>" + e(p.ri) + '</td><td class="font-bold">' + e(p.jibun) + '</td><td class="num">' + e(num(p.area)) + '</td><td class="num">' + e(fmt2(seedKg(p))) + "</td><td>" + e(p.note) + '</td><td class="text-center">' + statusBadge(p) + '</td><td class="text-center"><div class="flex justify-center gap-2">' +
        (p.status === "정상" || p.status === "반려" ? '<button type="button" data-act="ed-start" data-id="' + e(p.id) + '" class="' + B.sm + '">' + ic("pencil", "size-4") + "수정</button>" : "") +
        '<button type="button" data-act="p-del" data-id="' + e(p.id) + '" class="' + B.smDanger + '">' + ic("trash", "size-4") + "삭제</button></div></td></tr>"
    }).join("")
    var newRow = '<tr><td><select form="newrow" name="town" id="nr-town" data-change="nr-town" class="field-input cf-select bg-secondary min-w-32">' + townOpts(d.town) + '</select></td><td><select form="newrow" name="ri" id="nr-ri" data-change="nr-ri" class="field-input cf-select bg-secondary min-w-28">' + riOpts(d.town, d.ri) + '</select></td>' +
      '<td><input form="newrow" name="jibun" id="nr-jibun" data-input="nr-field" data-key="jibun" value="' + e(d.jibun) + '" placeholder="예) 221-3" class="field-input min-w-24"></td>' +
      '<td><input form="newrow" name="area" id="nr-area" data-input="seed-preview" data-target="nr-seed" inputmode="numeric" value="' + e(d.area) + '" placeholder="㎡" class="field-input text-right min-w-24"></td>' +
      '<td class="num text-muted-foreground" id="nr-seed">' + (d.area ? e(fmt2(Number(d.area) * seedCoef(ws))) : "-") + '</td>' +
      '<td><input form="newrow" name="note" id="nr-note" data-input="nr-field" data-key="note" value="' + e(d.note) + '" class="field-input min-w-40"></td><td></td>' +
      '<td class="text-center"><button type="submit" form="newrow" class="' + B.smPrimary + '">' + ic("check", "size-4") + "저장</button></td></tr>"
    var dup = m.dup
      ? '<div class="mt-6 rounded-2xl border-2 border-destructive/50 bg-destructive/5 p-5"><p class="text-lg font-bold text-destructive">' + e(m.dup.addr) + "는 " + e(m.dup.owners) + "에서 이미 등록한 논입니다. 저장하지 않았습니다.</p>" +
        '<p class="mt-2">잘못 적었으면 지번을 고쳐 다시 저장하세요. 한 논을 여럿이 나눠 짓는 경우(지분 공동소유 등)는 사유를 적어 예외 등록을 신청합니다.</p>' +
        '<form data-submit="exc-request" class="mt-4 flex flex-col gap-3"><textarea name="reason" id="exc-reason" rows="3" class="field-input h-auto py-3 bg-card" placeholder="예) 지분 공동소유 필지로 절반씩 경작합니다" required></textarea>' +
        '<div class="flex gap-3"><button type="submit" class="' + B.primary + '">예외 등록 신청</button><button type="button" data-act="dup-close" class="' + B.soft + '">닫기</button></div></form></div>'
      : ""
    return dialog("sm:max-w-[1180px]",
      '<h2 class="text-[28px] font-bold">' + e(f.name) + ' 농가</h2><p class="mt-1 text-muted-foreground">' + e(f.year) + "년 · 이 농가로 입력한 논 전체입니다.</p>" +
      '<form data-submit="farm-save" class="mt-6 rounded-2xl border border-border p-5"><div class="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto]">' +
      field("농가명", '<input name="name" value="' + e(f.name) + '" class="field-input" required>') +
      field("연락처", '<input name="phone" value="' + e(f.phone) + '" class="field-input">') +
      field("종자 포수", '<input name="bags" inputmode="numeric" value="' + e(f.bagsOverride != null ? f.bagsOverride : "") + '" placeholder="자동 ' + e(s.autoBags) + '포" class="field-input text-right">') +
      '<div class="flex items-end"><button type="submit" class="' + B.primary + ' w-full px-8">저장</button></div></div>' +
      '<p class="mt-3 text-muted-foreground text-[15px]">종자 포수를 비워 두면 면적으로 자동 계산합니다(종자량 = 면적 × ' + e(seedCoef(ws)) + ", " + e(bagKg(ws)) + "kg 한 포, 올림). " + (s.agree != null ? "약정물량 " + e(num(s.agree)) + "kg · " : "") + "출하물량은 수매·출하 관리에서 입력합니다.</p></form>" +
      '<form id="newrow" data-submit="parcel-add"></form><form id="editrow" data-submit="parcel-edit"></form>' +
      '<div class="mt-6">' + tableWrap('<table class="grid-table"><thead><tr><th>읍면동</th><th>리</th><th>지번</th><th class="num">면적(㎡)</th><th class="num">종자(kg)</th><th>비고</th><th>상태</th><th>관리</th></tr></thead><tbody>' + rows + newRow +
        '<tr class="total-row"><td colspan="3">합계 (정상·예외승인 ' + e(s.n) + '필지)</td><td class="num">' + e(num(s.area)) + '</td><td class="num">' + e(fmt2(s.seed)) + '</td><td colspan="3">종자 ' + e(s.bags) + "포</td></tr></tbody></table>") + "</div>" +
      dup +
      '<p class="mt-4 text-muted-foreground text-[15px]">맨 아래 줄에 지번과 면적을 적고 Enter를 누르면 저장하고 다음 줄로 넘어갑니다. 읍면동과 리는 윗줄 값을 이어받습니다.</p>' +
      '<div class="mt-6 border-t border-border pt-6 flex justify-end"><button type="button" data-act="modal-close" class="' + B.soft + ' px-10">닫기</button></div>')
  }
  function dialog(width, inner) {
    return '<div class="fixed inset-0 z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs" data-act="modal-close"></div>' +
      '<div id="dlg" role="dialog" aria-modal="true" class="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full max-w-[calc(100%-2rem)] ' + width + ' max-h-[92dvh] overflow-y-auto rounded-2xl bg-popover p-6 sm:p-8 ring-1 ring-foreground/10 shadow-xl">' +
      '<button type="button" data-act="modal-close" class="cf-close inline-flex size-9 items-center justify-center rounded-md hover:bg-muted" aria-label="닫기">' + ic("x", "size-5") + "</button>" + inner + "</div>"
  }

  function dlgFarmAdd() {
    return dialog("sm:max-w-[720px]",
      '<h2 class="text-[28px] font-bold">농가 추가</h2><p class="mt-1 text-muted-foreground">' + e(S.year) + "년 계약 농가를 만들고 이어서 논을 입력합니다.</p>" +
      '<form data-submit="farm-create" class="mt-6"><div class="grid gap-4 sm:grid-cols-2">' +
      field("농가명", '<input id="fa-name" name="name" class="field-input" placeholder="예) 홍가온" required>') +
      field("연락처", '<input name="phone" class="field-input" placeholder="010-0000-0000">') + "</div>" +
      '<div class="mt-6 border-t border-border pt-6 flex justify-end gap-3"><button type="button" data-act="modal-close" class="' + B.soft + ' px-10">취소</button><button type="submit" class="' + B.primary + '">' + ic("plus") + "만들고 논 입력</button></div></form>")
  }

  function dlgPrev(m) {
    var wsId = ctxWs()
    var py = S.year - 1
    var prev = S.farms.filter(function (f) { return f.year === py && f.wsId === wsId })
    var cur = yearFarms(wsId)
    var exists = function (f) { return cur.some(function (c) { return c.name === f.name && c.phone === f.phone }) }
    var sel = m.sel
    var rows = prev.map(function (f) {
      var ps = farmParcels(f)
      var area = ps.reduce(function (a, p) { return a + p.area }, 0)
      return '<tr><td class="text-center"><input type="checkbox" class="size-5 cursor-pointer" data-act="prev-toggle" data-id="' + e(f.id) + '"' + (sel[f.id] ? " checked" : "") + '></td><td class="font-bold">' + e(f.name) + "</td><td>" + e(f.phone) + '</td><td class="num">' + e(ps.length) + '</td><td class="num">' + e(num(area)) + '</td><td class="text-center text-muted-foreground">' + (exists(f) ? "이미 있음" : "-") + "</td></tr>"
    }).join("") || emptyRow(6, py + "년 자료가 없습니다.")
    var n = Object.keys(sel).filter(function (k) { return sel[k] }).length
    return dialog("sm:max-w-[920px]",
      '<h2 class="text-[28px] font-bold">전년도 계약 불러오기</h2><p class="mt-1"><b>' + e(py) + "년</b>에 계약한 농가와 논을 <b>" + e(S.year) + "년</b> 것으로 만듭니다.</p>" +
      '<ul class="mt-4 list-disc pl-5 text-muted-foreground leading-relaxed"><li>농가의 이름·연락처와 논의 주소·면적·비고만 가져옵니다. 종자 포수 조정, 약정·출하물량, 볏짚 결과는 올해 새로 확인합니다.</li><li>다른 곳에서 올해 먼저 등록한 논은 가져오지 않고 알려 드립니다. 다시 눌러도 겹쳐 들어가지 않습니다.</li></ul>' +
      '<div class="mt-6 mb-3 flex flex-wrap items-center justify-between gap-3"><div class="text-lg font-bold">' + e(prev.length) + '명 중 <span class="text-primary">' + e(n) + '명</span> 선택</div><div class="flex gap-2"><button type="button" data-act="prev-all" class="' + B.sm + ' bg-secondary">전체 선택</button><button type="button" data-act="prev-none" class="' + B.sm + ' bg-secondary">전체 해제</button></div></div>' +
      tableWrap('<table class="grid-table"><thead><tr><th>선택</th><th>농가명</th><th>연락처</th><th class="num">필지</th><th class="num">면적(㎡)</th><th>' + e(S.year) + "년</th></tr></thead><tbody>" + rows + "</tbody></table>", "max-h-[340px]") +
      '<div class="mt-6 border-t border-border pt-6 flex flex-wrap justify-end gap-3"><button type="button" data-act="modal-close" class="' + B.soft + ' px-10">취소</button><button type="button" data-act="prev-run" class="' + B.primary + '"' + (n ? "" : " disabled") + ">" + ic("history") + e(n) + "명 " + e(S.year) + "년으로 불러오기</button></div>")
  }

  function chips(name, opts, val) {
    return '<div class="flex flex-wrap gap-2">' + opts.map(function (o) {
      var on = o === val
      return '<button type="button" data-act="chip" data-name="' + e(name) + '" data-val="' + e(o) + '" class="' + BASE + "h-12 px-5 border-2 " + (on ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card") + '">' + e(o) + "</button>"
    }).join("") + "</div>"
  }
  function dlgRoster(m) {
    var ws = wsById(ctxWs())
    return dialog("sm:max-w-[760px]",
      '<h2 class="text-[28px] font-bold">계약재배 명단 내려받기</h2><p class="mt-1 text-muted-foreground">' + e(S.year) + "년 · 정상·예외승인 필지만 들어갑니다.</p>" +
      '<div class="mt-6 flex flex-col gap-6"><div><div class="font-semibold mb-2 text-lg">양식</div>' + chips("form", ["신청 양식 그대로", "간단 목록"], m.form) + '<p class="mt-2 text-sm text-muted-foreground">지금까지 쓰던 신청 엑셀과 같은 모양입니다. 안내문, 머리글, 열 너비, 종자 계산식, 합계 줄이 그대로 들어갑니다.</p></div>' +
      '<label class="flex flex-col gap-2"><span class="font-semibold text-lg">읍면동</span><select class="field-input cf-select bg-secondary"><option>전체</option>' + ws.towns.map(function (t) { return "<option>" + e(t) + "</option>" }).join("") + "</select></label>" +
      '<div><div class="font-semibold mb-2 text-lg">순서</div>' + chips("order", ["농가명순", "입력한 순서"], m.order) + "</div>" +
      '<div><div class="font-semibold mb-2 text-lg">연락처</div>' + chips("phone", ["그대로", "가운데 가림 (010-****-1234)", "넣지 않음"], m.phone) + '<p class="mt-2 text-sm text-muted-foreground">밖으로 내보내는 파일이면 가리거나 빼는 것을 권합니다. 가린 번호는 파일 어디에도 들어가지 않습니다.</p></div></div>' +
      '<div class="mt-6 border-t border-border pt-6 flex justify-end gap-3"><button type="button" data-act="modal-close" class="' + B.soft + ' px-10">취소</button><button type="button" data-act="file-log" data-what="계약재배 명단 ' + e(S.year) + '년" class="' + B.primary + '">' + ic("download") + "내려받기</button></div>")
  }

  // ---------- 수매·출하 ----------
  function viewShip() {
    var wsId = ctxWs()
    var ws = wsById(wsId)
    var kw = (S.ui.q.ship || "").trim()
    var only = S.ui.f.shipShort
    var farms = yearFarms(wsId).filter(function (f) { return farmParcels(f).length }).sort(function (a, b) { return a.name < b.name ? -1 : 1 })
    var known = farms.filter(function (f) { return farmStats(f).agree != null }).length
    var list = farms.filter(function (f) {
      if (kw && f.name.indexOf(kw) < 0 && f.phone.indexOf(kw) < 0) return false
      if (only) { var s = farmStats(f); return s.agree != null && s.ship < s.agree }
      return true
    })
    var rows = list.map(function (f) {
      var s = farmStats(f)
      var rate = s.agree ? (s.ship / s.agree) * 100 : null
      var st = rate == null ? badge("muted", "약정 미정") : s.ship === 0 ? badge("danger", "미출하") : rate >= 100 ? badge("success", "달성") : badge("danger", "미달")
      var color = rate == null ? "var(--muted)" : rate >= 100 ? "var(--success)" : "var(--destructive)"
      return '<tr><td><button type="button" data-act="ship-open" data-id="' + e(f.id) + '" class="font-bold hover:underline">' + e(f.name) + "</button></td><td>" + e(f.phone) + '</td><td class="num">' + e(s.n) + '</td><td class="num">' + e(num(s.area)) + '</td><td class="num">' + e(s.bags) + '포</td><td class="num">' + (s.agree != null ? e(num(s.agree)) : "-") + "</td>" +
        '<td><input id="ship-' + e(f.id) + '" data-change="ship-set" data-id="' + e(f.id) + '" inputmode="numeric" value="' + e(s.ship) + '" class="field-input text-right w-32"></td>' +
        '<td><div class="flex items-center gap-3"><div class="cf-bar"><span style="width:' + Math.min(100, rate || 0).toFixed(0) + "%;background:" + color + '"></span></div><span class="font-semibold tabular-nums ml-auto">' + (rate == null ? "-" : e(rate.toFixed(1))) + "</span></div></td>" +
        '<td class="text-center">' + st + "</td></tr>"
    }).join("") || emptyRow(9, "조건에 맞는 농가가 없습니다.")
    var acts = '<button type="button" data-act="file" class="' + B.card + '">' + ic("download") + "출하 입력 명단</button>" +
      '<button type="button" data-act="file" class="' + B.primary + '">' + ic("upload") + "출하 엑셀 올리기</button>"
    var hqPick = isHQ() ? '<div class="mb-6 flex flex-wrap items-center gap-3"><span class="font-semibold">사업장</span><div class="w-44">' + wsSelect("hqWs2", "hq-ws", wsId) + "</div></div>" : ""
    var toggle = '<button type="button" data-act="ship-short" class="flex items-center gap-3 md:pb-1"><span class="cf-toggle" style="background:var(' + (only ? "--primary" : "--input") + ')"><span style="left:' + (only ? "1.75rem" : ".25rem") + '"></span></span><span class="text-left"><span class="block font-semibold">미달 농가만 보기</span><span class="block text-sm text-muted-foreground">약정물량 이하 출하 농가</span></span></button>'
    return hqPick + pageHead("수매·출하 관리", "약정물량 대비 출하물량을 농가별로 입력합니다. 농가 이름을 누르면 출하 회차를 날짜별로 기록합니다.", acts) +
      searchCard("ship", "농가명 또는 연락처 입력", "농가 " + list.length + "명", toggle) +
      '<div class="mb-6 rounded-2xl border-2 border-warning/50 bg-warning/8 px-6 py-4"><b>달성률·미달 집계 범위:</b> 약정물량이 kg으로 확인된 <b>' + e(known) + "농가</b>만 판정합니다 (전체 " + e(farms.length) + "농가)." + (ws.agreeCoef ? "" : " 이 사업장은 약정 계수가 없어 농가별로 약정물량을 직접 입력합니다.") + "</div>" +
      tableWrap('<table class="grid-table"><thead><tr><th>농가명</th><th>연락처</th><th class="num">필지</th><th class="num">계약면적(㎡)</th><th class="num">종자(포/20kg)</th><th class="num">약정물량(kg)</th><th class="num">출하물량(kg)</th><th>달성률(%)</th><th>상태</th></tr></thead><tbody>' + rows + "</tbody></table>", "max-h-[680px]")
  }
  function dlgShip(m) {
    var f = farmById(m.farmId)
    var ws = wsById(f.wsId)
    var s = farmStats(f)
    var rr = f.rounds.map(function (r, i) {
      return "<tr><td>" + e(r.date) + '</td><td class="num font-bold">' + e(num(r.kg)) + '</td><td class="text-center"><button type="button" data-act="round-del" data-i="' + i + '" class="' + B.smDanger + '">삭제</button></td></tr>'
    }).join("")
    return dialog("sm:max-w-[680px]",
      '<h2 class="text-[28px] font-bold">' + e(f.name) + ' 농가</h2><p class="mt-1 text-muted-foreground">' + e(ws.name) + " · 필지 " + e(s.n) + "건 · " + e(num(s.area)) + "㎡ · 종자 " + e(fmt2(s.seed)) + "kg</p>" +
      '<form data-submit="ship-save" class="mt-6 flex flex-col gap-5">' +
      field("종자 조정수량 (포/" + bagKg(ws) + "kg)", '<input name="bags" inputmode="numeric" value="' + e(f.bagsOverride != null ? f.bagsOverride : "") + '" placeholder="자동 계산 (' + e(s.autoBags) + '포)" class="field-input text-right">', "비워 두면 종자량을 " + e(bagKg(ws)) + "kg으로 나눠 올림한 값을 씁니다.") +
      field("약정물량 (kg)", '<input name="agree" inputmode="numeric" value="' + e(f.agreeOverride != null ? f.agreeOverride : "") + '" placeholder="' + (ws.agreeCoef ? "자동 계산 (" + e(num(Math.round(s.area * ws.agreeCoef))) + "kg)" : "직접 입력") + '" class="field-input text-right">', "비워 두면 사업장 약정 계수로 계산합니다. 계수가 없는 사업장은 직접 입력해 주세요.") +
      '<div class="flex justify-end"><button type="submit" class="' + B.primary + ' px-8">저장</button></div></form>' +
      '<div class="mt-6 rounded-2xl border border-border bg-background p-5"><h3 class="text-lg font-bold">출하 회차</h3><p class="mt-1 text-muted-foreground">벼를 받을 때마다 날짜와 양을 추가하면 출하물량 합계가 자동으로 늘어납니다.</p>' +
      '<div class="mt-4">' + tableWrap('<table class="grid-table"><tbody>' + (f.shipBase ? '<tr><td>회차 없이 입력된 양</td><td class="num">' + e(num(f.shipBase)) + "</td><td></td></tr>" : "") + rr +
        '<tr class="total-row"><td>합계</td><td class="num">' + e(num(s.ship)) + "</td><td></td></tr></tbody></table>") + "</div>" +
      '<form data-submit="round-add" class="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end">' +
      field("날짜", '<input type="date" name="date" value="' + e(Demo.day(0)) + '" class="field-input" required>') +
      field("이번에 받은 양 (kg)", '<input id="round-kg" name="kg" inputmode="numeric" class="field-input text-right" placeholder="예) 800" required>') +
      '<button type="submit" class="' + B.primary + '">' + ic("plus") + "추가</button></form></div>" +
      '<div class="mt-6 border-t border-border pt-6 flex justify-end"><button type="button" data-act="modal-close" class="' + B.soft + ' px-10">닫기</button></div>')
  }

  // ---------- 볏짚 ----------
  function viewStraw() {
    var hq = isHQ()
    var min = S.settings.strawMin
    var wsF = hq ? S.ui.f.strawWs || "" : S.session.wsId
    var all = yearParcels(wsF || null).filter(function (p) { return valid(p) && p.area >= min })
    var kw = (S.ui.q.straw || "").trim()
    var fil = S.ui.f.straw || "전체"
    var cnt = { 이행: 0, 미이행: 0, 미조사: 0 }
    all.forEach(function (p) { cnt[p.straw || "미조사"] += 1 })
    var list = all.filter(function (p) {
      var f = farmById(p.farmId)
      if (kw && f.name.indexOf(kw) < 0 && addr(p).indexOf(kw) < 0) return false
      return fil === "전체" || (p.straw || "미조사") === fil
    }).sort(function (a, b) { return (wsById(a.wsId).name + farmById(a.farmId).name).localeCompare(wsById(b.wsId).name + farmById(b.farmId).name, "ko") })
    var seg = function (p) {
      var cur = p.straw || "미조사"
      return '<div class="cf-seg inline-flex overflow-hidden rounded-lg border border-input">' + ["이행", "미이행", "미조사"].map(function (v) {
        var on = v === cur
        var c = on ? (v === "이행" ? "bg-primary text-primary-foreground" : v === "미이행" ? "bg-destructive text-destructive-foreground" : "bg-foreground/70 text-background") : "bg-card hover:bg-muted"
        return '<button type="button" data-act="straw-set" data-id="' + e(p.id) + '" data-val="' + v + '" class="h-11 w-24 font-semibold ' + c + '">' + v + "</button>"
      }).join("") + "</div>"
    }
    var rows = list.map(function (p) {
      var f = farmById(p.farmId)
      return "<tr>" + (hq ? "<td>" + e(wsById(p.wsId).name) + "</td>" : "") + '<td class="font-bold">' + e(f.name) + "</td><td>" + e(addr(p)) + '</td><td class="num">' + e(num(p.area)) + '</td><td class="text-center">' + e(p.strawDate || "-") + '</td><td class="text-center">' + seg(p) + "</td><td>" + e(p.strawNote || "-") + "</td></tr>"
    }).join("") || emptyRow(hq ? 7 : 6, "조건에 맞는 필지가 없습니다.")
    var fbtn = function (label, n) {
      var on = fil === label
      return '<button type="button" data-act="straw-filter" data-val="' + label + '" class="' + BASE + "h-12 px-5 border-2 " + (on ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card") + '">' + label + " " + n + "</button>"
    }
    var acts = '<button type="button" data-act="file" class="' + B.card + '">' + ic("download") + "조사대상 명단 다운로드</button>" +
      (hq ? '<button type="button" data-act="file" class="' + B.primary + '">' + ic("upload") + "조사 결과 엑셀 올리기</button>" : "") +
      '<button type="button" data-act="file" class="' + B.dangerOutline + '">' + ic("userX") + "미이행 필지 추출 (" + cnt.미이행 + ")</button>" +
      (hq ? '<button type="button" data-act="surveyor-modal" class="' + B.card + '">' + ic("users") + "조사원 계정</button>" : "")
    return pageHead("볏짚 환원 조사", "수확 후 볏짚을 논에 환원했는지 현장 조사 결과를 기록합니다.", acts) +
      '<div class="mb-6 flex items-center gap-4 rounded-2xl border-2 border-primary/40 bg-accent px-6 py-5 text-lg">' + ic("info", "size-7") + "<span>면적 <b>" + e(num(min)) + '㎡ 이상</b> 필지만 조사 대상입니다. 현재 대상 필지 <b class="text-2xl">' + e(all.length) + "</b>건</span></div>" +
      '<div class="rounded-2xl border border-border bg-card p-5 mb-6 flex flex-col gap-4 md:flex-row md:flex-wrap md:items-end">' +
      '<label class="flex flex-col gap-2 flex-1 min-w-0"><span class="font-semibold">검색</span><input id="q-straw" data-input="q" data-key="straw" value="' + e(S.ui.q.straw || "") + '" class="field-input" placeholder="농가명, 리 또는 지번 입력"></label>' +
      (hq ? '<label class="flex flex-col gap-2 md:w-52"><span class="font-semibold">사업장</span>' + wsSelect("strawWs", "straw-ws", wsF, true) + "</label>" : "") +
      '<div class="flex flex-wrap gap-2">' + fbtn("전체", all.length) + fbtn("이행", cnt.이행) + fbtn("미이행", cnt.미이행) + fbtn("미조사", cnt.미조사) + "</div></div>" +
      tableWrap('<table class="grid-table"><thead><tr>' + (hq ? "<th>사업장</th>" : "") + '<th>농가명</th><th>지번</th><th class="num">면적(㎡)</th><th>조사일</th><th>환원 여부</th><th>비고</th></tr></thead><tbody>' + rows + "</tbody></table>", "max-h-[680px]")
  }
  function dlgSurveyor() {
    var on = S.surveyor.active
    return dialog("sm:max-w-[680px]",
      '<h2 class="text-[28px] font-bold">조사원 계정</h2><p class="mt-1 text-muted-foreground leading-relaxed">볏짚 조사 용역업체가 휴대폰으로 결과를 바로 입력할 때 쓰는 계정입니다. 로그인 화면의 "볏짚 조사원" 버튼으로 들어오고, 조사 화면 하나만 쓸 수 있습니다.</p>' +
      '<div class="mt-4 flex items-center gap-3"><span class="font-bold text-lg">상태</span>' + (on ? badge("success", "사용중") : badge("muted", "사용 중지")) + "</div>" +
      '<ul class="mt-4 list-disc pl-5 leading-relaxed"><li>조사원에게는 조사 대상 논의 주소·면적·농가 이름만 보입니다. 연락처와 다른 자료는 볼 수 없습니다.</li><li>조사원이 입력한 결과는 작업 기록에 "조사원"이 한 일로 남습니다.</li><li>조사가 끝나면 사용 중지해 주세요. 비밀번호를 바꾸면 그 전에 로그인한 휴대폰은 로그아웃됩니다.</li></ul>' +
      '<form data-submit="surveyor-pw" class="mt-5 rounded-2xl border border-border bg-background p-5"><div class="font-bold text-lg mb-2">새 비밀번호</div><div class="flex gap-3"><input name="pw" type="password" class="field-input" autocomplete="new-password"><button type="button" data-act="file-none" class="' + B.outline + ' bg-card shrink-0">' + ic("eye") + '보기</button></div><p class="mt-2 text-muted-foreground">8자 이상. 정한 비밀번호를 용역업체에 알려 줍니다.</p><button type="submit" class="' + B.primary + ' mt-4">비밀번호 바꾸기</button></form>' +
      '<div class="mt-6 border-t border-border pt-6 flex justify-end gap-3"><button type="button" data-act="modal-close" class="' + B.soft + ' px-10">닫기</button><button type="button" data-act="surveyor-toggle" class="' + B.soft + ' px-8">' + (on ? "사용 중지" : "다시 사용") + "</button></div>")
  }

  // ---------- 조사원 휴대폰 화면 ----------
  function viewSurvey(q) {
    var min = S.settings.strawMin
    var all = yearParcels().filter(function (p) { return valid(p) && p.area >= min })
    var done = all.filter(function (p) { return p.straw }).length
    var kw = (S.ui.q.survey || "").trim()
    var head = '<div class="bg-card border-b border-border p-5"><div class="flex items-start justify-between gap-3"><div><h1 class="text-2xl font-bold">볏짚 환원 조사</h1><p class="text-muted-foreground">조사원 · 전체 ' + e(all.length) + "필지 중 " + e(done) + '필지 조사</p></div><button type="button" data-act="logout" class="' + B.soft + '">' + ic("logout", "size-4") + "로그아웃</button></div>" +
      '<label class="mt-4 flex items-center gap-3 field-input bg-card h-14"><span class="text-muted-foreground">' + ic("search", "size-6") + '</span><input id="q-survey" data-input="q" data-key="survey" value="' + e(S.ui.q.survey || "") + '" class="flex-1 min-w-0 text-lg outline-none bg-transparent" placeholder="지번, 리 또는 농가명으로 찾기"></label></div>'
    var body
    var card = function (p) {
      var f = farmById(p.farmId)
      var cur = p.straw || "아직"
      var b = function (v) {
        var on = v === cur
        var c = on ? (v === "이행" ? "bg-success text-success-foreground border-success" : v === "미이행" ? "bg-destructive text-destructive-foreground border-destructive" : "bg-foreground/70 text-background border-foreground/70") : "bg-background border-border"
        return '<button type="button" data-act="survey-set" data-id="' + e(p.id) + '" data-val="' + v + '" class="flex-1 h-16 rounded-xl border-2 text-lg font-bold ' + c + '">' + v + "</button>"
      }
      return '<div class="rounded-2xl border-2 border-border bg-card p-5"><div class="flex items-baseline justify-between"><span class="text-2xl font-bold">' + e(p.jibun) + '번지</span><span class="font-bold">' + e(num(p.area)) + '㎡</span></div><div class="mt-1 text-muted-foreground">' + e(f.name) + (p.strawDate ? " · " + e(p.strawDate) + " 조사" : "") + "</div>" +
        '<div class="mt-4 flex gap-3">' + b("이행") + b("미이행") + b("아직") + "</div>" +
        (p.straw === "미이행" ? '<input data-change="survey-note" data-id="' + e(p.id) + '" value="' + e(p.strawNote) + '" class="field-input mt-3" placeholder="메모 (예: 절반만 환원)">' : "") + "</div>"
    }
    if (kw) {
      var hit = all.filter(function (p) { return addr(p).indexOf(kw) >= 0 || farmById(p.farmId).name.indexOf(kw) >= 0 })
      body = '<div class="p-5 flex flex-col gap-4"><div class="font-bold text-lg">찾은 필지 ' + e(hit.length) + "건</div>" + hit.map(card).join("") + "</div>"
    } else if (q.v) {
      var ps = all.filter(function (p) { return p.town + " " + p.ri === q.v && (!S.ui.f.surveyTodo || !p.straw) })
      var vs = all.filter(function (p) { return p.town + " " + p.ri === q.v })
      var c = { 이행: 0, 미이행: 0, 아직: 0 }
      vs.forEach(function (p) { c[p.straw || "아직"] += 1 })
      body = '<div class="p-5 flex flex-col gap-4"><div class="flex items-center gap-3"><a href="#/survey" class="' + B.soft + ' px-4">' + ic("left", "size-4") + '마을 목록</a><span class="text-xl font-bold flex-1">' + e(q.v) + '</span><button type="button" data-act="survey-todo" class="' + BASE + "h-12 px-4 border-2 " + (S.ui.f.surveyTodo ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card") + '">안 한 것만</button></div>' +
        '<div class="text-muted-foreground">이행 ' + c.이행 + " · 미이행 " + c.미이행 + " · 아직 " + c.아직 + "</div>" + ps.map(card).join("") + "</div>"
    } else {
      var vill = {}
      all.forEach(function (p) {
        var k = p.town + " " + p.ri
        vill[k] = vill[k] || { d: 0, n: 0 }
        vill[k].n += 1
        if (p.straw) vill[k].d += 1
      })
      body = '<div class="p-5 flex flex-col gap-4"><div class="text-lg font-bold">조사할 마을을 눌러 주세요</div>' + Object.keys(vill).sort().map(function (k) {
        return '<a href="#/survey?v=' + encodeURIComponent(k) + '" class="flex h-20 items-center justify-between rounded-2xl border-2 border-border bg-card px-6 text-xl font-bold"><span>' + e(k) + '</span><span class="text-primary">' + e(vill[k].d) + " / " + e(vill[k].n) + "</span></a>"
      }).join("") + "</div>"
    }
    return '<div class="cf-survey">' + head + body + "</div>"
  }

  // ---------- 예외 승인 ----------
  function viewApprovals() {
    var reqs = S.requests.filter(function (r) { var p = parcelById(r.parcelId); return p && p.year === S.year })
    var wait = reqs.filter(function (r) { return r.status === "대기" })
    var doneR = reqs.filter(function (r) { return r.status !== "대기" })
    var sel = S.ui.sel && reqs.some(function (r) { return r.id === S.ui.sel }) ? S.ui.sel : wait[0] ? wait[0].id : doneR[0] ? doneR[0].id : null
    var card = function (r) {
      var p = parcelById(r.parcelId), f = farmById(p.farmId)
      var on = r.id === sel
      return '<button type="button" data-act="req-sel" data-id="' + e(r.id) + '" class="w-full text-left rounded-2xl ' + (on ? "border-2 border-primary ring-3 ring-primary/15" : "border-2 border-border") + ' bg-card p-5"><div class="flex items-start justify-between gap-3"><span class="text-xl font-bold">' + e(wsById(r.wsId).name) + "</span>" +
        (r.status === "대기" ? badge("warning", "대기") : r.status === "승인" ? badge("success", "승인") : badge("danger", "반려")) + "</div>" +
        '<div class="mt-2 text-lg font-semibold">' + e(f.name) + " · " + e(addr(p)) + '</div><div class="mt-1 text-muted-foreground">신청일 ' + e(r.date) + '</div><div class="mt-2">' + e(r.reason) + "</div></button>"
    }
    var left = '<div><h2 class="text-xl font-bold mb-4">승인 대기</h2><div class="flex flex-col gap-4">' + (wait.map(card).join("") || '<p class="rounded-2xl border border-border bg-card p-6 text-muted-foreground">대기 중인 신청이 없습니다.</p>') + "</div>" +
      (doneR.length ? '<h2 class="text-xl font-bold mt-8 mb-4">처리 완료</h2><div class="flex flex-col gap-4">' + doneR.map(card).join("") + "</div>" : "") + "</div>"
    var right = '<section class="rounded-2xl border border-border bg-card p-6"><p class="text-muted-foreground">왼쪽에서 신청을 고르세요.</p></section>'
    if (sel) {
      var r = reqs.filter(function (x) { return x.id === sel })[0]
      var p = parcelById(r.parcelId), f = farmById(p.farmId)
      var others = S.parcels.filter(function (x) { return x.year === p.year && x.id !== p.id && valid(x) && keyOf(x) === keyOf(p) })
      var box = function (title, b, x, ff, dateLabel, kind) {
        return '<div class="rounded-2xl border-2 ' + (kind === "req" ? "border-warning/60 bg-warning/5" : "border-border bg-muted/50") + ' p-5"><div class="flex items-center justify-between mb-3"><h3 class="text-xl font-bold">' + e(title) + "</h3>" + b + "</div>" +
          '<div class="cf-dl"><span class="text-muted-foreground font-semibold">사업장</span><span class="font-bold">' + e(wsById(x.wsId).name) + '</span><span class="text-muted-foreground font-semibold">농가명</span><span>' + e(ff.name) + '</span><span class="text-muted-foreground font-semibold">연락처</span><span>' + e(ff.phone) + "</span>" +
          '<span class="text-muted-foreground font-semibold">지번</span><span><span class="inline-block rounded-md border border-destructive/40 bg-destructive/10 px-2 font-bold text-destructive">' + e(addr(x)) + '</span></span><span class="text-muted-foreground font-semibold">면적</span><span>' + e(num(x.area)) + ' ㎡</span><span class="text-muted-foreground font-semibold">비고</span><span>' + e(x.note || "-") + '</span><span class="text-muted-foreground font-semibold">일자</span><span>' + e(dateLabel + " " + x.created) + "</span></div></div>"
      }
      right = '<section class="rounded-2xl border border-border bg-card p-6"><div class="flex items-center justify-between mb-5"><h2 class="text-2xl font-bold">신청 상세</h2>' + (r.status === "대기" ? badge("warning", "대기") : r.status === "승인" ? badge("success", "승인") : badge("danger", "반려")) + "</div>" +
        box("신청 내용", badge("warning", "신청"), p, f, "신청일", "req") +
        others.map(function (o) {
          return '<div class="my-3 text-center text-lg font-bold text-destructive">▲ 같은 지번 ▼</div>' + box(o.status === "예외승인" ? "예외 승인 건" : "기존 등록 건", badge("muted", o.status === "예외승인" ? "예외승인" : "선점"), o, farmById(o.farmId), "등록일")
        }).join("") +
        '<h3 class="mt-6 mb-2 text-xl font-bold">신청 사유</h3><div class="rounded-xl border border-border bg-muted/50 px-5 py-4">' + e(r.reason) + "</div>" +
        '<h3 class="mt-6 mb-2 text-xl font-bold">첨부 증빙 (0)</h3><p class="text-muted-foreground">첨부된 증빙이 없습니다.</p>' +
        (r.status === "반려" ? '<div class="mt-6 rounded-xl border-2 border-destructive/50 bg-destructive/5 px-5 py-4"><b class="text-destructive">반려 사유</b><p class="mt-1">' + e(r.rejectReason) + "</p></div>" : "") +
        (r.status === "대기" ? '<div class="mt-6 border-t border-border pt-6 grid grid-cols-2 gap-4"><button type="button" data-act="approve-open" data-id="' + e(r.id) + '" class="' + B.success + '">' + ic("check", "size-6") + '승인</button><button type="button" data-act="reject-open" data-id="' + e(r.id) + '" class="' + BASE + 'h-14 px-5 bg-secondary text-lg">' + ic("x", "size-6") + "반려</button></div>" : "") +
        "</section>"
    }
    var head = '<div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between cf-mb8"><div><h1 class="text-[30px] font-bold leading-tight">예외 승인</h1><p class="mt-2 text-muted-foreground">중복 필지로 차단된 건 중 사업장이 예외 사유를 제출한 신청을 검토합니다.</p></div>' +
      '<div class="rounded-xl border-2 border-warning bg-warning/10 px-6 py-2 text-[28px] font-bold text-warning whitespace-nowrap">대기 ' + e(wait.length) + "건</div></div>"
    return head + '<div class="cf-approvals">' + left + right + "</div>"
  }
  function dlgApprove(m) {
    var r = S.requests.filter(function (x) { return x.id === m.id })[0]
    var p = parcelById(r.parcelId), f = farmById(p.farmId)
    var others = S.parcels.filter(function (x) { return x.year === p.year && x.id !== p.id && valid(x) && keyOf(x) === keyOf(p) })
    var sum = others.reduce(function (a, x) { return a + x.area }, 0)
    return dialog("sm:max-w-[680px]",
      '<div class="text-center"><span class="mx-auto inline-flex size-20 items-center justify-center rounded-full bg-accent text-primary">' + ic("info", "size-10") + '</span><h2 class="mt-5 text-[28px] font-bold">이 면적으로 승인할까요?</h2><p class="mt-3 text-lg font-bold">' + e(f.name) + " 농가 · " + e(addr(p)) + "</p></div>" +
      '<div class="mx-auto mt-4 max-w-md"><div class="flex justify-between text-muted-foreground text-lg"><span>이 논에 이미 등록된 면적 (' + e(others.length) + '건)</span><b class="text-foreground">' + e(num(sum)) + '㎡</b></div><div class="flex justify-between border-b-2 border-foreground/40 pb-1 text-muted-foreground text-lg"><span>이번 신청 면적</span><b class="text-foreground">+ ' + e(num(p.area)) + '㎡</b></div>' +
      '<div class="mt-2 flex justify-between items-baseline text-lg font-bold"><span>승인하면 이 논의 합계</span><span class="text-2xl text-primary">' + e(num(sum + p.area)) + "㎡</span></div></div>" +
      '<p class="mt-4 text-center text-lg leading-relaxed">합계가 이 논의 실제 면적을 넘지 않는지 확인해 주세요. 넘으면 종자와 보조금이 겹쳐 나갑니다. 각자 논 전체 면적을 적은 것이면 반려하고 나눠 짓는 만큼만 적어 다시 신청하게 합니다.</p>' +
      '<div class="mt-6 flex justify-center gap-3"><button type="button" data-act="modal-close" class="' + B.soft + ' px-12">취소</button><button type="button" data-act="approve" data-id="' + e(r.id) + '" class="' + BASE + 'h-12 px-6 bg-success text-success-foreground">확인했습니다, 승인</button></div>')
  }
  function dlgReject(m) {
    var r = S.requests.filter(function (x) { return x.id === m.id })[0]
    var p = parcelById(r.parcelId), f = farmById(p.farmId)
    return dialog("sm:max-w-[640px]",
      '<div class="text-center"><span class="mx-auto inline-flex size-20 items-center justify-center rounded-full bg-destructive/10 text-destructive">' + ic("alert", "size-10") + '</span><h2 class="mt-5 text-[28px] font-bold">예외 신청을 반려합니다</h2><p class="mt-3 text-lg font-bold">' + e(f.name) + " 농가 · " + e(addr(p)) + "</p></div>" +
      '<form data-submit="reject" data-id="' + e(r.id) + '" class="mx-auto mt-4 max-w-md flex flex-col gap-2"><label for="rj" class="font-bold text-lg">반려 사유</label><textarea id="rj" name="reason" rows="5" class="field-input h-auto py-3" required>약정서에 지분 표시가 없습니다. 확인 후 다시 신청해 주세요.</textarea><p class="text-muted-foreground">사업장 담당자에게 그대로 전달됩니다.</p>' +
      '<div class="mt-4 flex justify-center gap-3"><button type="button" data-act="modal-close" class="' + B.soft + ' px-12">취소</button><button type="submit" class="' + B.danger + '">' + ic("x") + "반려 확정</button></div></form>")
  }

  // ---------- 사업장 관리 ----------
  function viewWorkplaces() {
    var st = S.settings
    var rows = S.workplaces.map(function (w) {
      var n = yearParcels(w.id).filter(valid).length
      return '<tr><td><div class="font-bold">' + e(w.name) + '</div><div class="text-sm text-muted-foreground">' + e(w.type) + '</div></td><td class="text-center">' + e(w.manager || "-") + '</td><td class="text-center">' + e(w.phone || "-") + '</td><td class="num"><div>' + e(seedCoef(w)) + "</div><div>" + e(bagKg(w)) + "kg</div>" + (w.seedCoef || w.bag ? '<div class="text-sm font-semibold text-warning">자체 값</div>' : "") + '</td><td class="num">' + (w.agreeCoef ? e(w.agreeCoef) : '<span class="text-muted-foreground">직접 입력</span>') + "</td>" +
        '<td><div class="font-mono">' + e(w.login) + "</div>" + (w.tempPw ? '<div class="text-sm font-semibold text-warning">발급 비밀번호 (아직 안 바꿈)</div>' : "") + '</td><td class="text-center">' + e(w.lastLogin || "-") + '</td><td class="num">' + e(n) + '</td><td class="text-center">' + (w.active ? badge("success", "사용중") : badge("muted", "사용 중지")) + '</td><td class="text-center"><button type="button" data-act="ws-edit" data-id="' + e(w.id) + '" class="' + B.sm + '">' + ic("pencil", "size-4") + "수정</button></td></tr>"
    }).join("")
    return pageHead("사업장 관리", "참여 사업장 " + e(S.workplaces.length) + "곳을 추가·수정하거나 사용을 중지합니다. 바꾼 내용은 로그인 화면의 사업장 목록에 바로 반영됩니다.", '<button type="button" data-act="ws-add" class="' + B.primary + '">' + ic("plus") + "사업장 추가</button>") +
      '<form data-submit="settings" class="rounded-2xl border border-border bg-card p-6 mb-6"><h2 class="text-xl font-bold">자동 계산 기준값 (전체 사업장 기본)</h2><p class="mt-1 text-muted-foreground">사업장이 자체 값을 따로 정하지 않았으면 이 값으로 계산합니다. 사업장마다 다르게 하려면 아래 표에서 그 사업장의 [수정]을 누릅니다.</p>' +
      '<div class="mt-4 grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-start">' +
      field("종자 계수 (㎡당 kg)", '<input name="seedCoef" inputmode="decimal" value="' + e(st.seedCoef) + '" class="field-input text-right">', "종자량 = 면적 × 이 값. 지금 값은 ha당 " + e((st.seedCoef * 10000).toFixed(1)) + "kg") +
      field("종자 포대 (kg)", '<input name="bag" inputmode="numeric" value="' + e(st.bag) + '" class="field-input text-right">', "포수 = 농가 종자량 ÷ 이 값, 올림") +
      field("볏짚 조사 기준 면적 (㎡)", '<input name="strawMin" inputmode="numeric" value="' + e(st.strawMin) + '" class="field-input text-right">', "이 면적 이상인 논만 조사 대상") +
      '<button type="submit" class="' + B.primary + ' md:mt-8 px-8">저장</button></div></form>' +
      tableWrap('<table class="grid-table"><thead><tr><th>사업장명</th><th>담당자</th><th>연락처</th><th>종자 계수 · 포대</th><th>약정 계수(kg/㎡)</th><th>로그인 계정</th><th>최근 접속</th><th class="num">' + e(S.year) + "년 필지</th><th>계정 상태</th><th>관리</th></tr></thead><tbody>" + rows + "</tbody></table>", "max-h-[680px]")
  }
  function dlgWs(m) {
    var w = m.id ? wsById(m.id) : null
    var v = function (k) { return w && w[k] != null ? w[k] : "" }
    var types = ["농협", "RPC", "영농조합", "기타"].map(function (t) { return "<option" + (w && w.type === t ? " selected" : "") + ">" + t + "</option>" }).join("")
    return dialog("sm:max-w-[720px]",
      '<h2 class="text-[28px] font-bold">' + (w ? "사업장 수정" : "사업장 추가") + '</h2><p class="mt-1 text-muted-foreground">' + (w ? e(w.name) + "의 정보와 담당자 계정을 수정합니다." : "새 사업장과 담당자 계정을 만듭니다.") + "</p>" +
      '<form data-submit="ws-save" data-id="' + e(m.id || "") + '" class="mt-6 flex flex-col gap-5"><div class="grid gap-4 sm:grid-cols-2">' +
      field("사업장명", '<input name="name" value="' + e(v("name")) + '" class="field-input" placeholder="예) 바름" required>') +
      field("구분", '<select name="type" class="field-input cf-select bg-secondary">' + types + "</select>") +
      field("담당자", '<input name="manager" value="' + e(v("manager")) + '" class="field-input">') +
      field("연락처", '<input name="phone" value="' + e(v("phone")) + '" class="field-input" placeholder="010-0000-0000">') + "</div>" +
      (w ? '<div class="rounded-2xl border border-border bg-background p-5"><h3 class="font-bold text-lg">자동 계산 기준 (이 사업장만 다를 때)</h3><div class="mt-3 grid gap-4 sm:grid-cols-2">' +
        field("종자 계수 (㎡당 kg)", '<input name="seedCoef" inputmode="decimal" value="' + e(v("seedCoef")) + '" class="field-input text-right" placeholder="' + e(S.settings.seedCoef) + '">', "비워 두면 기본값 " + e(S.settings.seedCoef)) +
        field("종자 포대 (kg)", '<input name="bag" inputmode="numeric" value="' + e(v("bag")) + '" class="field-input text-right" placeholder="' + e(S.settings.bag) + '">', "비워 두면 기본값 " + e(S.settings.bag)) +
        '</div><p class="mt-3 text-muted-foreground text-[15px]">바꾸면 이 사업장의 종자량과 자동 계산된 포수가 화면과 엑셀에서 바로 달라집니다. 직접 적어 둔 포수는 바뀌지 않습니다.</p></div>' : "") +
      field("약정 계수 (㎡당 kg)", '<input name="agreeCoef" inputmode="decimal" value="' + e(v("agreeCoef")) + '" class="field-input text-right" placeholder="직접 입력">', "면적에 곱해 약정물량을 자동 계산합니다. 비워 두면 농가별로 직접 입력합니다. 예) 0.68") +
      (w ? "" : field("로그인 ID", '<input name="login" class="field-input" required>', "회원번호 등. 영문 소문자·숫자·밑줄 4자 이상. 로그인 화면에는 사업장 이름만 보이고 이 값은 보이지 않습니다") +
        '<div class="grid gap-4 sm:grid-cols-2">' + field("비밀번호", '<input name="pw" type="password" class="field-input" autocomplete="new-password">') + field("비밀번호 확인", '<input name="pw2" type="password" class="field-input" autocomplete="new-password">') + '</div><p class="-mt-2 text-sm text-muted-foreground">8자 이상. 담당자가 첫 로그인 때 직접 바꿉니다. (체험판은 저장하지 않습니다)</p>') +
      (w ? '<label class="flex items-center gap-3 rounded-xl border border-border p-4 font-semibold"><input type="checkbox" name="active" class="size-5"' + (w.active ? " checked" : "") + ">계정 사용 (끄면 로그인 화면에서 빠집니다)</label>" : "") +
      '<div class="border-t border-border pt-6 flex justify-end gap-3"><button type="button" data-act="modal-close" class="' + B.soft + ' px-10">취소</button><button type="submit" class="' + B.primary + ' px-8">저장</button></div></form>')
  }

  // ---------- 연도 관리 ----------
  function dlgYear() {
    var rows = S.years.slice().sort().reverse().map(function (y) {
      var n = S.farms.filter(function (f) { return f.year === y }).length
      return '<tr><td class="font-bold">' + e(y) + '년</td><td class="num">' + e(n) + '</td><td class="text-center">' + (y === S.defaultYear ? '<span class="font-bold text-primary">지금 기본</span>' : '<button type="button" data-act="year-default" data-y="' + y + '" class="' + B.sm + ' bg-secondary">기본으로</button>') + '</td><td class="text-center">' + (n ? '<span class="text-muted-foreground">자료 있음</span>' : '<button type="button" data-act="year-del" data-y="' + y + '" class="' + B.smDanger + '">빼기</button>') + "</td></tr>"
    }).join("")
    var next = Math.max.apply(null, S.years) + 1
    return dialog("sm:max-w-[760px]",
      '<h2 class="text-[28px] font-bold">사업연도 관리</h2><p class="mt-1 text-muted-foreground leading-relaxed">목록에 있는 연도는 본부와 모든 사업장이 화면 위 "사업연도"에서 고를 수 있습니다. 다음 해 계약을 받기 전에 그 연도를 추가해 두세요.</p>' +
      '<div class="mt-5">' + tableWrap('<table class="grid-table"><thead><tr><th>사업연도</th><th class="num">등록 농가</th><th>처음 열리는 연도</th><th>관리</th></tr></thead><tbody>' + rows + "</tbody></table>") + "</div>" +
      '<form data-submit="year-add" class="mt-5 rounded-2xl border border-border bg-background p-5"><div class="font-bold text-lg mb-2">추가할 연도</div><div class="flex flex-wrap gap-3"><input name="y" inputmode="numeric" value="' + e(next) + '" class="field-input text-right w-40"><button type="submit" class="' + B.primary + '">' + ic("calendar") + "목록에 추가</button></div></form>" +
      '<ul class="mt-5 list-disc pl-5 text-muted-foreground leading-relaxed"><li>추가만 해서는 아무 화면도 바뀌지 않습니다. 그 연도를 고른 사람에게만 그 연도 화면이 나옵니다.</li><li>"기본으로"를 누르면 로그인했을 때 처음 열리는 연도가 바뀝니다. 언제든 다시 바꿀 수 있습니다.</li><li>자료가 입력된 연도는 목록에서 뺄 수 없습니다.</li></ul>' +
      '<p class="mt-4 font-bold text-primary">이제 로그인하면 ' + e(S.defaultYear) + "년 화면이 먼저 열립니다.</p>" +
      '<div class="mt-6 border-t border-border pt-6 flex justify-end"><button type="button" data-act="modal-close" class="' + B.soft + ' px-10">닫기</button></div>')
  }
  function dlgPw() {
    var row = function (label, name) {
      return '<label class="flex flex-col gap-2"><span class="font-semibold text-lg">' + label + '</span><div class="flex gap-3"><input name="' + name + '" type="password" class="field-input" autocomplete="off"><button type="button" data-act="file-none" class="' + B.outline + ' bg-card shrink-0">' + ic("eye") + "보기</button></div></label>"
    }
    return dialog("sm:max-w-[560px]",
      '<h2 class="text-[28px] font-bold">비밀번호 변경</h2><p class="mt-1 text-muted-foreground">8자 이상. 전화번호나 12345678 같은 번호는 쓸 수 없습니다.</p>' +
      '<form data-submit="pw-save" class="mt-6 flex flex-col gap-5">' + row("현재 비밀번호", "a") + row("새 비밀번호", "b") + row("새 비밀번호 확인", "c") +
      '<div class="flex justify-end gap-3"><button type="button" data-act="modal-close" class="' + B.soft + ' px-10">취소</button><button type="submit" class="' + B.primary + ' px-10">변경</button></div></form>')
  }

  // ---------- 집계·자료 제출 ----------
  function viewReport() {
    var hq = isHQ()
    var tabs = hq ? ["사업장별 집계", "전체 농가 명단", "읍면동별 현황"] : ["농가 명단", "읍면동별 현황"]
    var tab = tabs.indexOf(S.ui.tab) >= 0 ? S.ui.tab : tabs[0]
    var tabBar = '<div class="mb-6 flex gap-1 border-b-2 border-border overflow-x-auto">' + tabs.map(function (t) {
      var on = t === tab
      return '<button type="button" data-act="tab" data-val="' + e(t) + '" class="-mb-0.5 h-14 px-6 text-lg font-bold whitespace-nowrap rounded-t-lg ' + (on ? "border-2 border-border border-b-background bg-background text-primary" : "text-muted-foreground hover:text-foreground") + '">' + e(t) + "</button>"
    }).join("") + "</div>"
    var wsId = hq ? null : S.session.wsId
    var table = ""
    if (tab === "사업장별 집계") {
      var tot = { farms: 0, parcels: 0, area: 0, bags: 0, agree: 0, ship: 0 }
      var rows = S.workplaces.map(function (w) {
        var t = wsTotals(w.id)
        for (var k in tot) tot[k] += t[k]
        return '<tr><td class="font-bold">' + e(w.name) + '</td><td class="num">' + e(t.farms) + '</td><td class="num">' + e(t.parcels) + '</td><td class="num">' + e(num(t.area)) + '</td><td class="num">' + e((t.area / 10000).toFixed(1)) + '</td><td class="num">' + e(num(t.bags)) + '</td><td class="num">' + e(num(t.agree)) + '</td><td class="num">' + e(num(t.ship)) + "</td></tr>"
      }).join("")
      rows += '<tr class="total-row"><td>합계</td><td class="num">' + e(tot.farms) + '</td><td class="num">' + e(tot.parcels) + '</td><td class="num">' + e(num(tot.area)) + '</td><td class="num">' + e((tot.area / 10000).toFixed(1)) + '</td><td class="num">' + e(num(tot.bags)) + '</td><td class="num">' + e(num(tot.agree)) + '</td><td class="num">' + e(num(tot.ship)) + "</td></tr>"
      table = '<table class="grid-table"><thead><tr><th>사업장명</th><th class="num">농가수</th><th class="num">필지수</th><th class="num">계약면적(㎡)</th><th class="num">계약면적(ha)</th><th class="num">종자(포/20kg)</th><th class="num">약정물량(kg)</th><th class="num">출하물량(kg)</th></tr></thead><tbody>' + rows + "</tbody></table>"
    } else if (tab === "읍면동별 현황") {
      var by = {}
      yearParcels(wsId).filter(valid).forEach(function (p) {
        var b = (by[p.town] = by[p.town] || { farms: {}, n: 0, area: 0, seed: 0 })
        b.farms[p.farmId] = 1; b.n += 1; b.area += p.area; b.seed += seedKg(p)
      })
      var keys = Object.keys(by).sort()
      table = '<table class="grid-table"><thead><tr><th>읍면동</th><th class="num">농가수</th><th class="num">필지수</th><th class="num">계약면적(㎡)</th><th class="num">계약면적(ha)</th><th class="num">종자량(kg)</th></tr></thead><tbody>' + (keys.map(function (k) {
        var b = by[k]
        return '<tr><td class="font-bold">' + e(k) + '</td><td class="num">' + e(Object.keys(b.farms).length) + '</td><td class="num">' + e(b.n) + '</td><td class="num">' + e(num(b.area)) + '</td><td class="num">' + e((b.area / 10000).toFixed(1)) + '</td><td class="num">' + e(fmt2(b.seed)) + "</td></tr>"
      }).join("") || emptyRow(6, "등록된 필지가 없습니다.")) + "</tbody></table>"
    } else {
      var fs = yearFarms(wsId).filter(function (f) { return farmParcels(f).length }).sort(function (a, b) { return (wsById(a.wsId).name + a.name).localeCompare(wsById(b.wsId).name + b.name, "ko") })
      table = '<table class="grid-table"><thead><tr>' + (hq ? "<th>사업장</th>" : "") + '<th>농가명</th><th>연락처</th><th class="num">필지</th><th class="num">계약면적(㎡)</th><th class="num">종자(포)</th><th class="num">약정물량(kg)</th><th class="num">출하물량(kg)</th></tr></thead><tbody>' + (fs.map(function (f) {
        var s = farmStats(f)
        return "<tr>" + (hq ? "<td>" + e(wsById(f.wsId).name) + "</td>" : "") + '<td class="font-bold">' + e(f.name) + "</td><td>" + e(f.phone) + '</td><td class="num">' + e(s.n) + '</td><td class="num">' + e(num(s.area)) + '</td><td class="num">' + e(s.bags) + '</td><td class="num">' + (s.agree != null ? e(num(s.agree)) : "-") + '</td><td class="num">' + e(num(s.ship)) + "</td></tr>"
      }).join("") || emptyRow(hq ? 8 : 7, "등록된 농가가 없습니다.")) + "</tbody></table>"
    }
    return pageHead("집계·자료 제출", "사업장별 실적을 집계하고 엑셀로 내려받습니다. 정상·예외승인 필지만 집계됩니다.", '<button type="button" data-act="file-log" data-what="집계 ' + e(tab) + '" class="' + B.primary + ' h-14 px-8 text-lg">' + ic("download") + "엑셀 다운로드</button>") +
      tabBar + tableWrap(table, "max-h-[680px]")
  }

  // ---------- 양식 다운로드 ----------
  function viewForms() {
    var card = function (n, title, desc, items, where) {
      return '<div class="rounded-2xl border border-border bg-card p-6 flex flex-col"><div class="font-bold text-primary">' + n + '</div><h2 class="mt-2 text-xl font-bold">' + e(title) + '</h2><p class="mt-2 text-muted-foreground leading-relaxed">' + e(desc) + '</p><ul class="mt-4 list-disc pl-5 leading-relaxed">' + items.map(function (i) { return "<li>" + e(i) + "</li>" }).join("") + "</ul>" +
        '<div class="mt-auto pt-5 border-t border-border cf-mt3"><button type="button" data-act="file-log" data-what="' + e(title) + '" class="' + B.primary + ' w-full">' + ic("download") + '내려받기</button><p class="mt-3 font-semibold text-primary">올리는 곳: ' + e(where) + "</p></div></div>"
    }
    return pageHead("양식 다운로드", "엑셀로 올릴 때 필요한 파일을 모았습니다. 받은 파일에 적어서 각 메뉴의 올리기 버튼으로 올립니다. (" + e(S.year) + "년)") +
      '<div class="cf-forms">' +
      card(1, "계약재배 신청 양식 (빈 양식)", "농가와 논을 한꺼번에 등록할 때 쓰는 양식입니다. 지금까지 쓰던 신청 엑셀과 같은 모양이라, 이미 작성한 엑셀이 있으면 그 파일을 그대로 올려도 됩니다.", ["7행부터 한 줄에 논 하나씩 적습니다.", "농가명, 연락처, 읍면동, 리, 지번, 면적은 꼭 적습니다.", "종자 포수와 약정물량은 그 농가의 첫 줄에만 적습니다."], "계약재배 등록 → [엑셀 올리기]") +
      card(2, "출하 입력 명단", "농가별 출하물량을 한꺼번에 넣을 때 쓰는 명단입니다. 지금 등록된 농가가 한 줄씩 들어 있습니다.", ['노란 "출하물량(kg)" 칸에 그 농가의 전체 출하량을 적습니다.', "빈칸으로 둔 농가는 바뀌지 않습니다.", "끝의 사업연도·농가번호·확인값 열은 고치지 않습니다."], "수매·출하 관리 → [출하 엑셀 올리기]") +
      "</div>" +
      '<div class="mt-6 rounded-2xl border border-border bg-muted/50 px-6 py-4">명단 파일에는 농가 이름과 연락처가 들어 있습니다. 다 쓴 파일은 지우고, 밖으로 보낼 때는 받는 사람을 확인해 주세요. 내려받은 기록은 작업 기록에 남습니다.</div>'
  }

  // ---------- 작업 기록 ----------
  var CAT_KIND = { 로그인: "muted", 예외: "warning", 내려받기: "warning", 농가: "success", 필지: "success", 출하: "primary", 승인: "primary", 볏짚: "success", 설정: "muted" }
  function viewLog() {
    var hq = isHQ()
    var f = S.ui.f
    var kw = (S.ui.q.log || "").trim()
    var list = S.logs.filter(function (l) {
      if (!hq && l.wsId !== S.session.wsId) return false
      if (hq && f.logWs && l.wsId !== f.logWs) return false
      if (f.logCat && l.cat !== f.logCat) return false
      if (f.logFrom && l.at.slice(0, 10) < f.logFrom) return false
      if (f.logTo && l.at.slice(0, 10) > f.logTo) return false
      if (kw && (l.action + l.detail).indexOf(kw) < 0) return false
      return true
    })
    var cats = Object.keys(CAT_KIND)
    var who = function (l) {
      if (l.role === "hq") return '<b>본부</b> <span class="font-mono text-sm text-muted-foreground">admin</span>'
      if (l.role === "survey") return "<b>조사원</b>"
      var w = wsById(l.wsId)
      return '<b>사업장</b> <span class="font-mono text-sm text-muted-foreground">' + e(w ? w.login : "") + "</span>"
    }
    var rows = list.map(function (l) {
      var w = wsById(l.wsId)
      return '<tr><td class="tabular-nums">' + e(l.at) + "</td>" + (hq ? "<td>" + e(l.role === "hq" ? "본부" : w ? w.name : "-") + "</td>" : "") + "<td>" + who(l) + '</td><td class="text-center">' + badge(CAT_KIND[l.cat] || "muted", l.cat) + '</td><td class="font-bold">' + e(l.action) + "</td><td>" + e(l.detail) + '</td><td class="num font-mono text-sm">' + e(l.ip) + "</td></tr>"
    }).join("") || emptyRow(hq ? 7 : 6, "조건에 맞는 기록이 없습니다.")
    var sel = function (id, act, val, opts) {
      return '<select id="' + id + '" data-change="' + act + '" class="field-input cf-select bg-secondary"><option value="">전체</option>' + opts.map(function (o) { return '<option value="' + e(o[0]) + '"' + (o[0] === val ? " selected" : "") + ">" + e(o[1]) + "</option>" }).join("") + "</select>"
    }
    return pageHead("작업 기록", hq ? "전체 사업장에서 누가 언제 무엇을 바꿨는지 봅니다. 자료를 바꾼 작업, 로그인, 엑셀 내려받기가 남고 화면을 본 것은 남지 않습니다. 기록은 고치거나 지울 수 없습니다." : e(wsById(S.session.wsId).name) + "의 자료에 대한 기록입니다. 본부가 대신 처리한 것도 함께 보입니다. 화면을 본 것은 남지 않습니다.") +
      '<div class="rounded-2xl border border-border bg-card p-5 mb-6 flex flex-col gap-4 md:flex-row md:flex-wrap md:items-end">' +
      '<label class="flex flex-col gap-2 flex-1 min-w-0"><span class="font-semibold">검색</span><input id="q-log" data-input="q" data-key="log" value="' + e(S.ui.q.log || "") + '" class="field-input" placeholder="농가명, 지번, 작업 내용"></label>' +
      (hq ? '<label class="flex flex-col gap-2 md:w-44"><span class="font-semibold">사업장</span>' + sel("logWs", "log-f", f.logWs, S.workplaces.map(function (w) { return [w.id, w.name] })) + "</label>" : "") +
      '<label class="flex flex-col gap-2 md:w-44"><span class="font-semibold">분류</span>' + sel("logCat", "log-f", f.logCat, cats.map(function (c) { return [c, c] })) + "</label>" +
      '<label class="flex flex-col gap-2 md:w-44"><span class="font-semibold">시작일</span><input type="date" id="logFrom" data-change="log-f" value="' + e(f.logFrom || "") + '" class="field-input"></label>' +
      '<label class="flex flex-col gap-2 md:w-44"><span class="font-semibold">종료일</span><input type="date" id="logTo" data-change="log-f" value="' + e(f.logTo || "") + '" class="field-input"></label>' +
      '<div class="font-semibold whitespace-nowrap md:pb-3 md:ml-auto">기록 <span class="text-primary">' + e(list.length) + "건</span></div></div>" +
      tableWrap('<table class="grid-table"><thead><tr><th>일시</th>' + (hq ? "<th>사업장</th>" : "") + "<th>누가</th><th>분류</th><th>작업</th><th>내용</th><th>접속 주소</th></tr></thead><tbody>" + rows + "</tbody></table>", "max-h-[680px]")
  }

  // ---------- 백업 설정 ----------
  function viewBackup() {
    var b = S.backup
    var card = function (inner) { return '<section class="rounded-2xl border border-border bg-card p-6 mb-6">' + inner + "</section>" }
    var files = b.files.map(function (f) { return "<tr><td>" + e(f.name) + '</td><td class="num">' + e(f.size) + "</td></tr>" }).join("")
    return pageHead("백업 설정", "전체 자료(농가, 논, 출하, 볏짚, 작업 기록)를 이 컴퓨터의 폴더에 파일로 받아 둡니다. 서버에 문제가 생겨도 이 파일로 되살릴 수 있습니다.") +
      card('<h2 class="text-xl font-bold">1. 백업 폴더</h2><div class="mt-4 flex flex-wrap items-center justify-between gap-3"><span><b>협의회 백업</b> 폴더</span><button type="button" data-act="file" class="' + B.soft + '">' + ic("folder") + '다른 폴더로 바꾸기</button></div><ul class="mt-4 list-disc pl-5 text-muted-foreground leading-relaxed"><li>백업만 모아 둘 새 폴더를 만들어 고르는 것을 권합니다. (예: 문서 &gt; 협의회 백업)</li><li>브라우저가 "이 사이트가 파일을 수정하도록 허용"을 물으면 허용을 누릅니다.</li><li>USB나 외장하드, 다른 PC와 동기화되는 폴더를 고르면 이 PC가 고장 나도 파일이 남습니다.</li></ul>') +
      card('<h2 class="text-xl font-bold">2. 얼마나 자주</h2><div class="mt-4">' + chips("freq", ["매일", "몇 시간마다", "요일을 정해서"], b.freq) + '</div><div class="mt-4 flex flex-wrap items-center gap-3"><span class="font-bold">시각</span><input type="time" data-change="backup-time" value="' + e(b.time) + '" class="field-input w-44"><span class="text-muted-foreground">이 시각이 지나고 사이트가 열려 있으면 저장합니다.</span></div>') +
      card('<h2 class="text-xl font-bold">3. 몇 개까지 보관</h2><div class="mt-4 flex items-center gap-3"><span class="font-bold">최근</span><input data-change="backup-keep" inputmode="numeric" value="' + e(b.keep) + '" class="field-input text-center w-32"><span class="font-bold">개</span></div><p class="mt-3 text-muted-foreground">이보다 오래된 백업 파일은 새로 저장할 때 폴더에서 지웁니다. 이름이 "협의회_백업_"으로 시작하는 파일만 지우고 다른 파일은 건드리지 않습니다.</p>') +
      card('<h2 class="text-xl font-bold">4. 자동 백업</h2><div class="mt-4 flex flex-wrap items-center justify-between gap-3"><button type="button" data-act="backup-auto" class="flex items-center gap-3"><span class="cf-toggle" style="background:var(' + (b.auto ? "--primary" : "--input") + ')"><span style="left:' + (b.auto ? "1.75rem" : ".25rem") + '"></span></span><span class="text-lg font-bold">자동 백업 ' + (b.auto ? "켜짐" : "꺼짐") + '</span></button><button type="button" data-act="file" class="' + B.primary + '">' + ic("backup") + "지금 백업</button></div>" +
        '<div class="mt-4 rounded-xl border-2 border-warning/60 bg-warning/5 px-5 py-4 leading-relaxed"><b>이 사이트가 이 컴퓨터의 브라우저에 열려 있을 때만 자동으로 저장됩니다.</b> 닫혀 있어서 놓친 백업은 다음에 본부 계정으로 사이트를 열 때 바로 받습니다. 설정은 이 컴퓨터, 이 브라우저에만 저장됩니다.</div>') +
      card('<h2 class="text-xl font-bold">백업 현황</h2><div class="mt-4 grid gap-4 sm:grid-cols-2"><div><div class="text-muted-foreground font-semibold">이 컴퓨터에 마지막으로 저장</div><div class="text-lg font-bold">' + e(Demo.day(-1)) + ' 18:00</div></div><div><div class="text-muted-foreground font-semibold">다음 자동 백업</div><div class="text-lg font-bold">' + e(Demo.day(0)) + " " + e(b.time) + '</div></div><div><div class="text-muted-foreground font-semibold">폴더의 백업 파일</div><div class="text-lg font-bold">' + e(b.files.length) + "개</div></div></div>" +
        '<div class="mt-4">' + tableWrap('<table class="grid-table"><thead><tr><th>파일</th><th class="num">크기</th></tr></thead><tbody>' + files + "</tbody></table>") + '</div><p class="mt-3 text-muted-foreground">백업 파일에는 농가 이름과 연락처가 모두 들어 있습니다. 폴더를 다른 사람과 공유하지 마세요.</p>')
  }

  // ---------- 라우팅 ----------
  var MODALS = { farm: dlgFarm, farmAdd: dlgFarmAdd, prev: dlgPrev, roster: dlgRoster, ship: dlgShip, surveyor: dlgSurveyor, approve: dlgApprove, reject: dlgReject, ws: dlgWs, year: dlgYear, pw: dlgPw }
  function render(route) {
    var path = route.path
    var q = route.query
    var html
    if (path === "/" ) html = viewPicker()
    else if (path === "/login") html = viewLogin(q)
    else if (path === "/survey") {
      if (!S.session || S.session.role !== "survey") S.session = { role: "survey" }
      html = viewSurvey(q)
    } else if (path.indexOf("/hq") === 0) {
      if (!isHQ()) S.session = { role: "hq" }
      var hv = { "/hq": viewHqDash, "/hq/register": viewRegister, "/hq/approvals": viewApprovals, "/hq/ship": viewShip, "/hq/straw": viewStraw, "/hq/report": viewReport, "/hq/forms": viewForms, "/hq/log": viewLog, "/hq/workplaces": viewWorkplaces, "/hq/backup": viewBackup }[path] || viewHqDash
      html = shell(path, hv(q))
    } else if (path.indexOf("/ws") === 0) {
      if (!S.session || S.session.role !== "ws") S.session = { role: "ws", wsId: "w01" }
      var wv = { "/ws": viewWsDash, "/ws/register": viewRegister, "/ws/ship": viewShip, "/ws/straw": viewStraw, "/ws/report": viewReport, "/ws/forms": viewForms, "/ws/log": viewLog }[path] || viewWsDash
      html = shell(path, wv(q))
    } else html = viewPicker()
    var m = S.ui.modal
    if (m && MODALS[m.type]) html += MODALS[m.type](m)
    document.body.classList.toggle("cf-lock", !!m || S.ui.nav)
    return html
  }

  // ---------- 동작 ----------
  function on(name, fn) { Demo.on(name, fn) }
  on("toggle-pw", function () { S.ui.f.showPw = !S.ui.f.showPw; rerender() })
  on("login", function (v, el) {
    var who = el.getAttribute("data-who")
    S.year = S.defaultYear
    S.ui.f.showPw = false
    if (who === "hq") { S.session = { role: "hq" }; log("로그인", "로그인", ""); Demo.go("/hq") }
    else if (who === "survey") { S.session = { role: "survey" }; Demo.go("/survey") }
    else {
      S.session = { role: "ws", wsId: who }
      var w = wsById(who)
      if (w) w.lastLogin = nowStamp().slice(0, 16)
      log("로그인", "로그인", "", who)
      Demo.go("/ws")
    }
  })
  on("logout", function () {
    if (S.session && S.session.role !== "survey") log("로그인", "로그아웃", "")
    S.session = null
    S.ui.modal = null
    S.ui.nav = false
    Demo.go("/")
  })
  on("nav-open", function () { S.ui.nav = true; rerender() })
  on("nav-close", function () {
    S.ui.nav = false
    rerender()
  })
  on("year", function (v) { S.year = Number(v); S.ui.modal = null; rerender() })
  on("hq-ws", function (v) { S.hqWs = v; rerender() })
  on("q", function (v, el) { S.ui.q[el.getAttribute("data-key")] = v; rerender() })
  on("file", function () { Demo.toast(FILE_MSG) })
  on("file-none", function () { Demo.toast("체험판에서는 비밀번호를 보여 주지 않습니다") })
  on("file-log", function (d) {
    log("내려받기", "엑셀 내려받기", d.what || "")
    Demo.toast(FILE_MSG)
    if (S.ui.modal && S.ui.modal.type === "roster") closeModal()
  })
  on("modal-close", function () { closeModal() })
  on("pw-modal", function () { openModal({ type: "pw" }) })
  on("pw-save", function () { closeModal(); Demo.toast("체험판이라 비밀번호는 바뀌지 않습니다") })
  on("chip", function (d) {
    if (d.name === "freq") S.backup.freq = d.val
    else if (S.ui.modal) S.ui.modal[d.name] = d.val
    rerender()
  })
  on("tab", function (d) { S.ui.tab = d.val; rerender() })

  // 농가·논
  on("farm-add", function () {
    openModal({ type: "farmAdd" })
    var n = document.getElementById("fa-name")
    if (n) n.focus()
  })
  on("farm-create", function (v) {
    var name = (v.name || "").trim()
    if (!name) return Demo.toast("농가명을 적어 주세요")
    var wsId = ctxWs()
    var f = { id: nid("f"), wsId: wsId, year: S.year, name: name, phone: (v.phone || "").trim(), bagsOverride: null, agreeOverride: null, shipBase: 0, rounds: [], created: Demo.day(0) }
    S.farms.push(f)
    log("농가", "농가 등록", name, wsId)
    openFarm(f.id)
  })
  function openFarm(id) {
    var f = farmById(id)
    var ws = wsById(f.wsId)
    var last = farmParcels(f, true).slice(-1)[0]
    var town = last ? last.town : ws.towns[0]
    openModal({ type: "farm", farmId: id, draft: { town: town, ri: last ? last.ri : risOf(town)[0], jibun: "", area: "", note: "" }, editId: null, dup: null })
    var j = document.getElementById("nr-jibun")
    if (j) j.focus()
  }
  on("farm-open", function (d) { openFarm(d.id) })
  on("nr-town", function (v) { var dr = S.ui.modal.draft; dr.town = v; dr.ri = risOf(v)[0]; rerender() })
  on("nr-ri", function (v) { S.ui.modal.draft.ri = v })
  on("nr-field", function (v, el) { S.ui.modal.draft[el.getAttribute("data-key")] = v })
  on("seed-preview", function (v, el) {
    var m = S.ui.modal
    var ws = wsById(farmById(m.farmId).wsId)
    if (el.id === "nr-area") m.draft.area = v
    else if (m.edit) m.edit.area = v
    var t = document.getElementById(el.getAttribute("data-target"))
    var a = Number(String(v).replace(/,/g, ""))
    if (t) t.textContent = a > 0 ? fmt2(a * seedCoef(ws)) : "-"
  })
  function checkParcel(v, exceptId) {
    var jibun = normJ(v.jibun)
    var area = Number(String(v.area || "").replace(/,/g, ""))
    if (!jibun) return { err: "지번을 적어 주세요" }
    if (!/^\d+(-\d+)?$/.test(jibun)) return { err: "지번은 숫자 또는 숫자-숫자로 적어 주세요 (예: 221-3)" }
    if (!(area > 0)) return { err: "면적(㎡)을 숫자로 적어 주세요" }
    var dups = findDup(v.town, v.ri, jibun, exceptId)
    return { jibun: jibun, area: Math.round(area), dups: dups }
  }
  function blockDup(m, v, c) {
    var owners = []
    c.dups.forEach(function (p) { var n = wsById(p.wsId).name; if (owners.indexOf(n) < 0) owners.push(n) })
    var f = farmById(m.farmId)
    S.dup[f.wsId] = (S.dup[f.wsId] || 0) + 1
    m.dup = { town: v.town, ri: v.ri, jibun: c.jibun, area: c.area, note: v.note || "", addr: v.town + " " + v.ri + " " + c.jibun + "번지", owners: owners.join(", ") }
    log("필지", "중복 차단", f.name + " · " + v.town + " " + v.ri + " " + c.jibun, f.wsId)
    rerender()
    var ta = document.getElementById("exc-reason")
    if (ta) { ta.focus(); ta.scrollIntoView({ block: "center" }) }
  }
  on("parcel-add", function (v) {
    var m = S.ui.modal
    var f = farmById(m.farmId)
    var c = checkParcel(v)
    if (c.err) return Demo.toast(c.err)
    if (c.dups.length) return blockDup(m, v, c)
    S.parcels.push({ id: nid("p"), farmId: f.id, wsId: f.wsId, year: f.year, town: v.town, ri: v.ri, jibun: c.jibun, area: c.area, note: (v.note || "").trim(), status: "정상", created: Demo.day(0), straw: null, strawDate: "", strawNote: "" })
    log("필지", "필지 등록", f.name + " · " + v.town + " " + v.ri + " " + c.jibun + " · " + num(c.area) + "㎡", f.wsId)
    m.dup = null
    m.draft = { town: v.town, ri: v.ri, jibun: "", area: "", note: "" }
    rerender()
    var j = document.getElementById("nr-jibun")
    if (j) j.focus()
  })
  on("dup-close", function () { S.ui.modal.dup = null; rerender() })
  on("exc-request", function (v) {
    var m = S.ui.modal
    var reason = (v.reason || "").trim()
    if (!reason) return Demo.toast("예외 사유를 적어 주세요")
    var f = farmById(m.farmId)
    var d = m.dup
    var p = { id: nid("p"), farmId: f.id, wsId: f.wsId, year: f.year, town: d.town, ri: d.ri, jibun: d.jibun, area: d.area, note: d.note, status: "신청", created: Demo.day(0), straw: null, strawDate: "", strawNote: "" }
    S.parcels.push(p)
    S.requests.push({ id: nid("r"), parcelId: p.id, wsId: f.wsId, reason: reason, status: "대기", date: Demo.day(0), rejectReason: "" })
    log("예외", "예외 신청", f.name + " · " + d.town + " " + d.ri + " " + d.jibun + " · " + num(d.area) + "㎡", f.wsId)
    m.dup = null
    m.draft.jibun = ""; m.draft.area = ""
    rerender()
    Demo.toast("예외 등록을 신청했습니다. 본부 승인 후 집계에 들어갑니다")
  })
  on("ed-start", function (d) {
    var p = parcelById(d.id)
    S.ui.modal.editId = p.id
    S.ui.modal.edit = { town: p.town, ri: p.ri, jibun: p.jibun, area: p.area, note: p.note }
    S.ui.modal.dup = null
    rerender()
  })
  on("ed-town", function (v) { var ed = S.ui.modal.edit; ed.town = v; ed.ri = risOf(v)[0]; rerender() })
  on("ed-cancel", function () { S.ui.modal.editId = null; rerender() })
  on("parcel-edit", function (v) {
    var m = S.ui.modal
    var p = parcelById(m.editId)
    var c = checkParcel(v, p.id)
    if (c.err) return Demo.toast(c.err)
    if (c.dups.length) { m.editId = null; return blockDup(m, v, c) }
    p.town = v.town; p.ri = v.ri; p.jibun = c.jibun; p.area = c.area; p.note = (v.note || "").trim()
    if (p.status === "반려") p.status = "정상"
    log("필지", "필지 수정", farmById(p.farmId).name + " · " + addr(p), p.wsId)
    m.editId = null
    rerender()
    Demo.toast("저장했습니다")
  })
  on("p-del", function (d) {
    var p = parcelById(d.id)
    if (!confirm(addr(p) + " 논을 지울까요?")) return
    S.parcels = S.parcels.filter(function (x) { return x.id !== p.id })
    S.requests = S.requests.filter(function (r) { return r.parcelId !== p.id })
    log("필지", "필지 삭제", farmById(p.farmId).name + " · " + addr(p), p.wsId)
    rerender()
  })
  on("farm-save", function (v) {
    var f = farmById(S.ui.modal.farmId)
    f.name = (v.name || "").trim() || f.name
    f.phone = (v.phone || "").trim()
    f.bagsOverride = v.bags === "" || v.bags == null ? null : Math.max(0, Math.round(Number(v.bags) || 0))
    log("농가", "농가 수정", f.name, f.wsId)
    rerender()
    Demo.toast("저장했습니다")
  })

  // 전년도 불러오기
  on("prev-modal", function () {
    var sel = {}
    S.farms.filter(function (f) { return f.year === S.year - 1 && f.wsId === ctxWs() }).forEach(function (f) { sel[f.id] = true })
    openModal({ type: "prev", sel: sel })
  })
  on("prev-toggle", function (d, el, ev) {
    S.ui.modal.sel[d.id] = !S.ui.modal.sel[d.id]
    rerender()
  })
  on("prev-all", function () { var s = S.ui.modal.sel; Object.keys(s).forEach(function (k) { s[k] = true }); rerender() })
  on("prev-none", function () { var s = S.ui.modal.sel; Object.keys(s).forEach(function (k) { s[k] = false }); rerender() })
  on("prev-run", function () {
    var sel = S.ui.modal.sel
    var cur = yearFarms(ctxWs())
    var made = 0, addP = 0, skip = 0
    Object.keys(sel).forEach(function (id) {
      if (!sel[id]) return
      var pf = farmById(id)
      var f = cur.filter(function (c) { return c.name === pf.name && c.phone === pf.phone })[0]
      if (!f) {
        f = { id: nid("f"), wsId: pf.wsId, year: S.year, name: pf.name, phone: pf.phone, bagsOverride: null, agreeOverride: null, shipBase: 0, rounds: [], created: Demo.day(0) }
        S.farms.push(f)
        made += 1
      }
      farmParcels(pf).forEach(function (pp) {
        var ex = findDup(pp.town, pp.ri, pp.jibun)
        if (ex.some(function (x) { return x.farmId === f.id })) return
        if (ex.length) { skip += 1; return }
        S.parcels.push({ id: nid("p"), farmId: f.id, wsId: f.wsId, year: S.year, town: pp.town, ri: pp.ri, jibun: pp.jibun, area: pp.area, note: pp.note, status: "정상", created: Demo.day(0), straw: null, strawDate: "", strawNote: "" })
        addP += 1
      })
    })
    log("농가", "전년도 불러오기", "새 농가 " + made + "명 · 논 " + addP + "건", ctxWs())
    closeModal()
    Demo.toast("새 농가 " + made + "명, 논 " + addP + "건을 불러왔습니다" + (skip ? " · 이미 등록된 논 " + skip + "건은 건너뜀" : ""))
  })
  on("roster-modal", function () { openModal({ type: "roster", form: "신청 양식 그대로", order: "농가명순", phone: "그대로" }) })

  // 출하
  on("ship-set", function (v, el) {
    var f = farmById(el.getAttribute("data-id"))
    var n = Math.max(0, Math.round(Number(String(v).replace(/,/g, "")) || 0))
    var r = f.rounds.reduce(function (a, x) { return a + x.kg }, 0)
    f.shipBase = Math.max(0, n - r)
    if (n < r) { f.rounds = []; f.shipBase = n }
    log("출하", "출하 입력", f.name + " · " + num(n) + "kg", f.wsId)
    rerender()
  })
  on("ship-short", function () { S.ui.f.shipShort = !S.ui.f.shipShort; rerender() })
  on("ship-open", function (d) { openModal({ type: "ship", farmId: d.id }) })
  on("ship-save", function (v) {
    var f = farmById(S.ui.modal.farmId)
    f.bagsOverride = v.bags === "" ? null : Math.max(0, Math.round(Number(v.bags) || 0))
    f.agreeOverride = v.agree === "" ? null : Math.max(0, Math.round(Number(String(v.agree).replace(/,/g, "")) || 0))
    log("출하", "약정·포수 조정", f.name, f.wsId)
    rerender()
    Demo.toast("저장했습니다")
  })
  on("round-add", function (v) {
    var f = farmById(S.ui.modal.farmId)
    var kg = Math.round(Number(String(v.kg).replace(/,/g, "")) || 0)
    if (!(kg > 0)) return Demo.toast("받은 양(kg)을 숫자로 적어 주세요")
    f.rounds.push({ date: v.date || Demo.day(0), kg: kg })
    log("출하", "출하 입력", f.name + " · 회차 추가 " + num(kg) + "kg", f.wsId)
    rerender()
  })
  on("round-del", function (d) {
    var f = farmById(S.ui.modal.farmId)
    f.rounds.splice(Number(d.i), 1)
    rerender()
  })

  // 볏짚
  on("straw-set", function (d) {
    var p = parcelById(d.id)
    p.straw = d.val === "미조사" ? null : d.val
    p.strawDate = p.straw ? Demo.day(0) : ""
    if (p.straw !== "미이행") p.strawNote = ""
    log("볏짚", "볏짚 조사", farmById(p.farmId).name + " · " + addr(p) + " · " + d.val, p.wsId)
    rerender()
  })
  on("straw-filter", function (d) { S.ui.f.straw = d.val; rerender() })
  on("straw-ws", function (v) { S.ui.f.strawWs = v; rerender() })
  on("surveyor-modal", function () { openModal({ type: "surveyor" }) })
  on("surveyor-toggle", function () { S.surveyor.active = !S.surveyor.active; log("설정", "조사원 계정", S.surveyor.active ? "사용" : "사용 중지", ""); rerender() })
  on("surveyor-pw", function () { Demo.toast("체험판이라 비밀번호는 바뀌지 않습니다") })
  on("survey-set", function (d) {
    var p = parcelById(d.id)
    p.straw = d.val === "아직" ? null : d.val
    p.strawDate = p.straw ? Demo.day(0) : ""
    S.logs.unshift({ at: nowStamp(), wsId: p.wsId, role: "survey", cat: "볏짚", action: "볏짚 조사", detail: p.town + " " + p.ri + " " + p.jibun + " · " + d.val, ip: "10.0.0.88" })
    rerender()
  })
  on("survey-note", function (v, el) { parcelById(el.getAttribute("data-id")).strawNote = v })
  on("survey-todo", function () { S.ui.f.surveyTodo = !S.ui.f.surveyTodo; rerender() })

  // 예외 승인
  on("req-sel", function (d) { S.ui.sel = d.id; rerender() })
  on("approve-open", function (d) { openModal({ type: "approve", id: d.id }) })
  on("reject-open", function (d) { openModal({ type: "reject", id: d.id }) })
  on("approve", function (d) {
    var r = S.requests.filter(function (x) { return x.id === d.id })[0]
    var p = parcelById(r.parcelId)
    r.status = "승인"
    p.status = "예외승인"
    log("승인", "예외 승인", farmById(p.farmId).name + " · " + addr(p) + " · " + num(p.area) + "㎡", p.wsId)
    S.ui.sel = null
    closeModal()
    Demo.toast("승인했습니다. 이 논이 " + wsById(p.wsId).name + " 집계에 들어갑니다")
  })
  on("reject", function (v, el) {
    var reason = (v.reason || "").trim()
    if (!reason) return Demo.toast("반려 사유를 적어 주세요")
    var r = S.requests.filter(function (x) { return x.id === el.getAttribute("data-id") })[0]
    var p = parcelById(r.parcelId)
    r.status = "반려"
    r.rejectReason = reason
    p.status = "반려"
    log("승인", "예외 반려", farmById(p.farmId).name + " · " + addr(p), p.wsId)
    S.ui.sel = null
    closeModal()
    Demo.toast("반려했습니다. 사업장에 사유가 전달됩니다")
  })

  // 사업장 관리
  on("settings", function (v) {
    var sc = Number(v.seedCoef), bg = Number(v.bag), sm = Number(v.strawMin)
    if (!(sc > 0 && sc < 1) || !(bg > 0) || !(sm >= 0)) return Demo.toast("값을 확인해 주세요 (종자 계수는 0과 1 사이)")
    S.settings.seedCoef = sc; S.settings.bag = Math.round(bg); S.settings.strawMin = Math.round(sm)
    log("설정", "기준값 변경", "종자 " + sc + " · 포대 " + bg + "kg · 볏짚 " + sm + "㎡", "")
    rerender()
    Demo.toast("기준값을 저장했습니다")
  })
  on("ws-add", function () { openModal({ type: "ws", id: null }) })
  on("ws-edit", function (d) { openModal({ type: "ws", id: d.id }) })
  on("ws-save", function (v, el) {
    var id = el.getAttribute("data-id")
    var name = (v.name || "").trim()
    if (!name) return Demo.toast("사업장명을 적어 주세요")
    var dupName = S.workplaces.some(function (w) { return w.name === name && w.id !== id })
    if (dupName) return Demo.toast("같은 이름의 사업장이 이미 있습니다")
    var optNum = function (x) { var n = Number(x); return x === "" || x == null || !(n > 0) ? null : n }
    if (id) {
      var w = wsById(id)
      w.name = name; w.type = v.type; w.manager = (v.manager || "").trim(); w.phone = (v.phone || "").trim()
      w.seedCoef = optNum(v.seedCoef); w.bag = optNum(v.bag); w.agreeCoef = optNum(v.agreeCoef)
      w.active = !!v.active
      log("설정", "사업장 수정", name, "")
      Demo.toast(name + " 사업장을 수정했습니다")
    } else {
      var login = (v.login || "").trim()
      if (!/^[a-z0-9_]{4,}$/.test(login)) return Demo.toast("로그인 ID는 영문 소문자·숫자·밑줄 4자 이상입니다")
      if (S.workplaces.some(function (w) { return w.login === login })) return Demo.toast("이미 쓰는 로그인 ID입니다")
      if ((v.pw || "").length < 8 || v.pw !== v.pw2) return Demo.toast("비밀번호는 8자 이상, 두 칸이 같아야 합니다")
      var i = S.workplaces.length
      S.workplaces.push({ id: "w" + String(i + 1).padStart(2, "0") + "x", name: name, type: v.type, manager: (v.manager || "").trim(), phone: (v.phone || "").trim(), agreeCoef: optNum(v.agreeCoef), seedCoef: null, bag: null, login: login, active: true, tempPw: true, lastLogin: "", towns: [TOWNS[i % 8][0], TOWNS[(i + 3) % 8][0]], unitOk: false })
      log("설정", "사업장 추가", name, "")
      Demo.toast(name + " 사업장을 만들었습니다. 로그인 화면에 바로 보입니다")
    }
    closeModal()
  })

  // 연도
  on("year-modal", function () { openModal({ type: "year" }) })
  on("year-add", function (v) {
    var y = Number(v.y)
    if (!(y >= 2000 && y <= 2100)) return Demo.toast("연도를 확인해 주세요")
    if (S.years.indexOf(y) >= 0) return Demo.toast(y + "년은 이미 목록에 있습니다")
    S.years.push(y)
    log("설정", "사업연도 추가", y + "년", "")
    rerender()
  })
  on("year-default", function (d) { S.defaultYear = Number(d.y); log("설정", "기본 연도 변경", d.y + "년", ""); rerender() })
  on("year-del", function (d) {
    var y = Number(d.y)
    if (S.years.length <= 1) return
    S.years = S.years.filter(function (x) { return x !== y })
    if (S.defaultYear === y) S.defaultYear = S.years[S.years.length - 1]
    if (S.year === y) S.year = S.defaultYear
    rerender()
  })

  // 작업 기록 필터
  on("log-f", function (v, el) {
    var map = { logWs: "logWs", logCat: "logCat", logFrom: "logFrom", logTo: "logTo" }
    S.ui.f[map[el.id]] = v
    rerender()
  })

  // 백업
  on("backup-auto", function () { S.backup.auto = !S.backup.auto; rerender() })
  on("backup-time", function (v) { S.backup.time = v || "18:00"; rerender() })
  on("backup-keep", function (v) { S.backup.keep = Math.max(1, Math.round(Number(v) || 3)); rerender() })

  // 화면이 바뀌면 열린 대화상자·메뉴를 닫는다 (Demo.mount 보다 먼저 등록해야 먼저 불린다)
  window.addEventListener("hashchange", function () {
    S.ui.modal = null
    S.ui.nav = false
  })
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && S.ui.modal) closeModal()
  })

  Demo.mount(render)
  Demo.banner()
})()
