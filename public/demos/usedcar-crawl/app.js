/* (가상) 굿카 중고차 조회, 와이넥스 포트폴리오 체험판
 * 화면 구성과 클래스는 실제 납품 화면을 따르고, 차량·번호판·명의 등 데이터는 모두 지어낸 가상 값이다.
 * 크롤링은 흉내만 내며 외부 사이트에 접속하지 않는다. 새로고침하면 처음 상태로 돌아간다.
 */
;(function () {
  var esc = Demo.esc
  var BRAND = "(가상) 굿카"

  // ───────── 가상 데이터 생성 (고정 시드) ─────────
  var seed = 20261014
  function rnd() {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    var t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  function ri(a, b) { return a + Math.floor(rnd() * (b - a + 1)) }
  function pick(arr) { return arr[Math.floor(rnd() * arr.length)] }

  // [모델, 세대, 트림, 기준가(만원, 가상)]
  var MAKERS = [
    { name: "현대", dom: true, models: [["그랜저", "IG", "2.5 가솔린 프리미엄", 3300], ["쏘나타", "DN8", "2.0 스마트", 2600], ["아반떼", "CN7", "1.6 인스퍼레이션", 2200], ["투싼", "NX4", "1.6T 프리미엄", 3000], ["싼타페", "TM", "2.2 디젤 4WD", 3400], ["팰리세이드", "LX2", "2.2 디젤 캘리그래피", 4700], ["캐스퍼", "AX1", "1.0 인스퍼레이션", 1700], ["스타리아", "US4", "2.2 디젤 투어러", 3500]] },
    { name: "기아", dom: true, models: [["K5", "DL3", "2.0 노블레스", 2700], ["K8", "GL3", "2.5 시그니처", 3600], ["쏘렌토", "MQ4", "2.2 디젤 프레스티지", 3700], ["카니발", "KA4", "9인승 시그니처", 4000], ["스포티지", "NQ5", "1.6T 노블레스", 3000], ["셀토스", "SP2", "1.6T 시그니처", 2500], ["레이", "TAM", "1.0 프레스티지", 1500]] },
    { name: "제네시스", dom: true, models: [["G80", "RG3", "2.5T AWD", 5800], ["GV70", "JK1", "2.5T AWD", 5500], ["G70", "IK", "2.0T 엘리트", 4300]] },
    { name: "쉐보레", dom: true, models: [["트레일블레이저", "9BUX", "1.3T RS", 2500], ["말리부", "V400", "1.35T LT", 2400]] },
    { name: "르노코리아", dom: true, models: [["QM6", "HZG", "2.0 LPe RE", 2600], ["XM3", "LJB", "1.3T RE", 2300]] },
    { name: "KG모빌리티", dom: true, models: [["토레스", "J100", "1.5T T7", 3100], ["렉스턴 스포츠", "Q200", "칸 2.2 4WD", 3200]] },
    { name: "BMW", dom: false, models: [["5시리즈", "G30", "520i M 스포츠", 6200], ["X3", "G01", "xDrive20d", 6400]] },
    { name: "벤츠", dom: false, models: [["E-클래스", "W213", "E250 아방가르드", 6700], ["GLC", "X253", "GLC300 4MATIC", 7000]] },
    { name: "아우디", dom: false, models: [["A6", "C8", "45 TFSI 콰트로", 6500]] },
  ]
  var COLORS = [["흰색", "#f3f4f6"], ["검정", "#1f2937"], ["회색", "#6b7280"], ["은색", "#cbd5e1"], ["파랑", "#2563eb"], ["빨강", "#dc2626"], ["진청", "#1e3a8a"], ["갈색", "#92400e"]]
  var HANGUL = "가나다라마거너더러머버서어저고노도로모보소오조구누두루무부수우주".split("")
  var SUR = "김이박최정강조윤장임한오서신권황안송류홍".split("")
  var GIV = "민서준우현지수영호진은성하연동재".split("")
  var DEALERS = ["한결모터스", "새봄오토", "푸른길자동차", "다온카", "별빛모터스", "늘찬오토", "한마음자동차", "바른카"]

  function fakePlate() { return ri(10, 399) + pick(HANGUL) + String(ri(1000, 9999)) }
  function fakeOwner() { return pick(SUR) + "*" + pick(GIV) }
  function fuelOf(trim) {
    if (/디젤|2\.2|20d/.test(trim)) return "디젤"
    if (/LPe/.test(trim)) return "LPG"
    return "가솔린"
  }

  var nextId = 1
  var cfg = { minPrice: 500, maxPrice: 6000, maxMileage: 150000, maxRegDays: 14, sign: "-", abs: 50 }

  function makeCar(opt) {
    opt = opt || {}
    var mk = pick(MAKERS)
    var m = pick(mk.models)
    var year = ri(2016, 2024)
    var month = ri(1, 12)
    var age = 2026 - year
    var km = Math.max(3000, Math.round((age * ri(9000, 17000) + ri(-4000, 6000)) / 100) * 100)
    var market = Math.round((m[3] * Math.pow(0.88, age) - km / 10000 * 18) / 10) * 10
    market = Math.max(450, market)
    var diff = Math.round((market * (ri(-120, 85) / 1000)) / 10) * 10
    var price = market + diff
    var regAgo = opt.regAgo != null ? opt.regAgo : ri(0, 13)
    var perfY = rnd() < 0.86
    var noMatch = rnd() < 0.06
    var owner = rnd() < 0.07 ? "" : rnd() < 0.25 ? "-" : fakeOwner()
    var c = {
      id: nextId++,
      maker: mk.name,
      dom: mk.dom,
      model: m[0],
      gen: m[1],
      trim: m[2],
      name: year + " " + m[0] + " " + m[2],
      plate: fakePlate(),
      owner: owner,
      dealer: pick(DEALERS),
      year: year,
      ym: year + "." + String(month).padStart(2, "0"),
      km: km,
      price: price,
      market: noMatch ? null : market,
      diff: noMatch ? null : diff,
      regAgo: regAgo,
      perf: perfY ? "Y" : "N",
      rank: perfY ? pick(["1", "1", "1", "2", "A", "A", "B"]) : "",
      stage1: "N",
      danggn: "",
      cheotcha: "",
      queuedAt: "",
      photos: ri(8, 24),
      color: pick(COLORS),
      fuel: fuelOf(m[2]),
      gear: "자동",
    }
    // 1차 여과(가상 규칙): 시세보다 싸고 성능기록부가 있으며 등급 B 가 아닌 차량
    c.stage1 = c.diff != null && c.diff <= 30 && c.perf === "Y" && c.rank !== "B" ? "Y" : "N"
    return c
  }

  function regDate(c) { return Demo.day(-c.regAgo).replace(/-/g, ".") }
  function passesCfg(c) {
    if (c.price < cfg.minPrice || c.price > cfg.maxPrice) return false
    if (c.km > cfg.maxMileage) return false
    if (c.regAgo > cfg.maxRegDays) return false
    var cut = (cfg.sign === "-" ? -1 : 1) * cfg.abs
    if (c.diff != null && c.diff > cut) return false
    return true
  }

  var cars = []
  for (var i = 0; i < 46; i++) cars.push(makeCar())
  cars.sort(function (a, b) { return a.regAgo - b.regAgo })
  // 초기 상태 몇 개: 대기열 · 등록완료 · 당근
  function nowStamp(minAgo) {
    var d = new Date(Date.now() - (minAgo || 0) * 60000)
    var p = function (x) { return String(x).padStart(2, "0") }
    return p(d.getMonth() + 1) + "-" + p(d.getDate()) + " " + p(d.getHours()) + ":" + p(d.getMinutes())
  }
  ;[2, 5, 9, 14, 20].forEach(function (k, n) { if (cars[k]) { cars[k].cheotcha = "대기중"; cars[k].queuedAt = nowStamp(30 + n * 47) } })
  ;[7, 16].forEach(function (k) { if (cars[k]) { cars[k].cheotcha = "등록완료"; cars[k].owner = cars[k].owner || fakeOwner() } })
  ;[3, 11, 18].forEach(function (k) { if (cars[k]) cars[k].danggn = "대기중" })
  ;[1, 25].forEach(function (k) { if (cars[k]) cars[k].danggn = "완료" })

  var videoSets = [
    { id: 1, name: "1세트", date: Demo.day(1), time: "19:00", cars: [cars[0].id, cars[4].id, cars[6].id, cars[10].id] },
    { id: 2, name: "2세트", date: Demo.day(2), time: "19:00", cars: [cars[12].id, cars[13].id, cars[17].id] },
  ]
  var nextSetId = 3

  // 시세 매핑 시트 (가상)
  var sheet = []
  MAKERS.forEach(function (mk) {
    mk.models.forEach(function (m) {
      sheet.push([mk.name, m[0], m[1], m[2], "가상 시세표 · " + (mk.dom ? "국산" : "수입") + " · " + fuelOf(m[2]), "sample/" + m[1].toLowerCase()])
      sheet.push([mk.name, m[0], m[1], "기본형", "가상 시세표 · 하위 트림 묶음", "sample/" + m[1].toLowerCase() + "-base"])
    })
  })

  var TPL_DEFAULT =
    "[{차량명}]\n\n· 연식: {연식}\n· 주행거리: {주행거리}\n· 가격: {가격}\n· 차량번호: {차량번호}\n· 성능기록부: {성능기록부}\n\n실차 점검을 마친 차량입니다.\n궁금한 점은 편하게 문의 주세요."
  var TPL_VARS = ["차량명", "제조사", "연식", "주행거리", "가격", "차량번호", "연료", "성능기록부", "시세대비"]
  var chutcha = { email: "dealer-demo@example.com", hasPw: true, template: TPL_DEFAULT, auto: true, limit: 30, lastRun: nowStamp(8), lastCount: 2 }

  // ───────── 화면 상태 ─────────
  var S = {
    theme: "light",
    q: "", maker: "", minPrice: "", maxPrice: "", minYear: "", maxMileage: "", sort: "",
    colF: {}, // col -> [값]
    cf: null, // 열린 컬럼 필터 팝오버
    sel: {},
    autoCheck: false,
    autoMsg: "",
    crawling: false, crawlMsg: "", crawlPct: 0,
    updated: Demo.day(0) + " 09:12",
    newIds: {},
    draft: {},
    vsView: null,
    sheetQ: "",
    photo: 0,
    chutchaErr: "",
  }
  var lastModal = ""

  // ───────── 도우미 ─────────
  function man(n) { return Demo.num(n) + "만원" }
  function kmTxt(km) { return (km / 10000).toFixed(1) + "만km" }
  function carById(id) { for (var i = 0; i < cars.length; i++) if (cars[i].id === +id) return cars[i]; return null }
  function locked(c) { return c.cheotcha === "등록완료" || c.owner === "" }
  function selIds() { return Object.keys(S.sel).filter(function (k) { return S.sel[k] && carById(k) }).map(Number) }
  function perfKey(c) { return c.perf === "Y" ? "Y·" + c.rank : "N" }
  function colVal(c, col) {
    if (col === "perf_rank") return perfKey(c)
    if (col === "stage1_pass") return c.stage1
    if (col === "danggn") return c.danggn || "-"
    if (col === "cheotcha") return c.cheotcha || "-"
    return ""
  }
  var COL_TITLE = { perf_rank: "성능기록부", stage1_pass: "1차", danggn: "당근", cheotcha: "첫차" }
  function autoMatch(c) { return c.diff != null && c.diff < 0 && c.dom && c.stage1 === "Y" && !locked(c) }

  function filtered() {
    var q = S.q.trim().toLowerCase()
    var list = cars.filter(function (c) {
      if (q && (c.name + " " + c.maker + " " + c.plate + " " + c.dealer).toLowerCase().indexOf(q) < 0) return false
      if (S.maker && c.maker !== S.maker) return false
      if (S.minPrice !== "" && c.price < +S.minPrice) return false
      if (S.maxPrice !== "" && c.price > +S.maxPrice) return false
      if (S.minYear !== "" && c.year < +S.minYear) return false
      if (S.maxMileage !== "" && c.km > +S.maxMileage) return false
      for (var col in S.colF) if (S.colF[col] && S.colF[col].indexOf(colVal(c, col)) < 0) return false
      return true
    })
    if (S.sort) {
      var dir = S.sort === "reg_desc" ? 1 : -1
      list = list.slice().sort(function (a, b) { return dir * (a.regAgo - b.regAgo) || dir * (b.id - a.id) })
    }
    return list
  }

  function carSvg(color, cls, bg, view) {
    var flip = view === 1 ? ' transform="translate(120 0) scale(-1 1)"' : ""
    return (
      '<svg class="' + esc(cls || "") + '" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice">' +
      '<rect width="120" height="80" fill="' + esc(bg || "#eef1f6") + '"/>' +
      '<ellipse cx="62" cy="62" rx="50" ry="4" fill="rgba(0,0,0,.12)"/>' +
      "<g" + flip + ">" +
      '<path d="M10 52 L14 41 Q18 35 28 34 L40 33 L52 23 Q56 20 64 20 L82 20 Q90 20 95 26 L102 34 L108 36 Q114 38 114 45 L114 53 Q114 57 110 57 L14 57 Q10 57 10 53 Z" fill="' + esc(color) + '" stroke="rgba(0,0,0,.25)" stroke-width="1"/>' +
      '<path d="M45 33 L55 24 Q58 22 63 22 L71 22 L71 33 Z" fill="#cfe3f3" opacity=".9"/>' +
      '<path d="M75 22 L82 22 Q88 22 92 27 L97 33 L75 33 Z" fill="#cfe3f3" opacity=".9"/>' +
      '<rect x="104" y="40" width="7" height="3" rx="1.5" fill="#fde68a"/>' +
      '<circle cx="32" cy="57" r="9" fill="#1f2937"/><circle cx="32" cy="57" r="4" fill="#9ca3af"/>' +
      '<circle cx="92" cy="57" r="9" fill="#1f2937"/><circle cx="92" cy="57" r="4" fill="#9ca3af"/>' +
      "</g></svg>"
    )
  }

  function diffHtml(c) {
    if (c.diff == null) return '<span class="row-diff-none">매칭 없음</span>'
    var pct = (c.diff / c.market) * 100
    var cls = c.diff > 0 ? "up" : c.diff < 0 ? "down" : "flat"
    var sign = c.diff > 0 ? "+" : ""
    return '<span class="row-diff ' + cls + '">' + esc(sign + Demo.num(c.diff) + "만원") + "<em>(" + esc(sign + pct.toFixed(1)) + "%)</em></span>"
  }
  function perfHtml(c) {
    if (c.perf !== "Y") return '<span class="perf-no">N</span>'
    return '<span class="perf-yes">Y</span><span class="perf-rank perf-rank-' + esc(c.rank.toLowerCase()) + '">' + esc(c.rank) + "</span>"
  }
  function extHtml(v) { return v ? '<span class="row-ext">' + esc(v) + "</span>" : '<span class="row-dim">-</span>' }

  // ───────── 렌더링 ─────────
  function render(r) {
    var p = r.path
    var html = ""
    html += crawlBanner()
    html += header()
    html += filterBar()
    html += autoBar()
    html += table()
    html += selectionBar()
    html += colFilterPop()
    var modal = ""
    if (p === "/car") modal = detailModal(r.query.id)
    else if (p === "/settings") modal = settingsModal()
    else if (p === "/chutcha") modal = chutchaModal()
    else if (p === "/queue") modal = queueModal()
    else if (p === "/sheet") modal = sheetModal()
    else if (p === "/videoset") modal = videoSetModal()
    var key = p + (r.query.id || "")
    if (modal && key === lastModal) modal = modal.replace('class="modal-content', 'class="modal-content no-anim')
    lastModal = modal ? key : ""
    return html + modal
  }

  function crawlBanner() {
    return (
      '<div id="crawlBanner" class="crawl-banner' + (S.crawling ? "" : " hidden") + '">' +
      '<div class="crawl-banner-spinner"></div>' +
      '<div class="crawl-banner-text"><b>크롤링 진행 중</b><span id="crawlBannerMsg">' + esc(S.crawlMsg || "시작 중...") + "</span></div>" +
      '<div class="crawl-banner-progress"><div id="crawlBannerBar" class="crawl-banner-bar" style="width:' + esc(S.crawlPct) + '%"></div></div>' +
      "</div>"
    )
  }

  function header() {
    var queued = cars.filter(function (c) { return c.cheotcha === "대기중" }).length
    var done = cars.filter(function (c) { return c.cheotcha === "등록완료" }).length
    var remain = Math.max(0, chutcha.limit - done)
    return (
      '<header class="app-header">' +
      '<div class="brand"><div class="brand-logo">🚗</div><div>' +
      "<h1>" + esc(BRAND) + " 중고차 조회</h1>" +
      '<p class="brand-sub" id="statsLine">총 ' + esc(Demo.num(cars.length)) + "대 · 최근 업데이트 " + esc(S.updated) + "</p>" +
      '<p class="brand-sub chutcha-quota' + (chutcha.auto ? " cq-auto" : "") + '" id="chutchaQuota" title="첫차 매물 등록 한도" data-act="open" data-to="/queue">' +
      '<span class="cq-label">🚗 첫차</span>' +
      '<span id="chutchaQuotaText">남은 <span class="cq-remaining">' + esc(remain) + '</span><span class="cq-dim"> / ' + esc(chutcha.limit) + " · 대기 " + esc(queued) + "대</span>" +
      (chutcha.auto ? ' <span class="cq-auto-badge">⟳ 자동</span>' : "") + "</span></p>" +
      "</div></div>" +
      '<div class="header-actions">' +
      '<button id="themeBtn" class="icon-btn" title="테마 전환" data-act="theme">' + (S.theme === "dark" ? "☀️" : "🌙") + "</button>" +
      '<button id="sheetBtn" class="btn btn-ghost" title="시세 매핑 시트 보기" data-act="open" data-to="/sheet"><span>📋</span><span>시트</span></button>' +
      '<button id="settingsBtn" class="btn btn-ghost" title="크롤링 조건 설정" data-act="open" data-to="/settings"><span>⚙️</span><span>설정</span></button>' +
      '<button id="chutchaSettingsBtn" class="btn btn-ghost" title="첫차 로그인 정보" data-act="open" data-to="/chutcha"><span>🚗</span><span>첫차</span></button>' +
      '<button id="chutchaQueueBtn" class="btn btn-ghost" title="첫차 등록 대기열, 자동 등록 워커가 올릴 순서" data-act="open" data-to="/queue"><span>📜</span><span>대기열</span></button>' +
      '<button id="videoSetMgrBtn" class="btn btn-ghost" title="영상 세트 관리 (유튜브 업로드용 · 일자별)" data-act="open" data-to="/videoset"><span>🎬</span><span>영상세트</span></button>' +
      '<button id="deleteAllBtn" class="btn btn-danger" title="모든 차량 및 사진 삭제" data-act="deleteAll"' + (S.crawling ? " disabled" : "") + "><span>🗑️</span><span>전체 삭제</span></button>" +
      '<button id="crawlBtn" class="btn btn-primary' + (S.crawling ? " loading" : "") + '" data-act="crawl"' + (S.crawling ? " disabled" : "") + '><span class="btn-icon">⟳</span><span>' + (S.crawling ? "크롤링 중..." : "크롤링 시작") + "</span></button>" +
      "</div></header>"
    )
  }

  function filterBar() {
    var list = filtered()
    var makers = MAKERS.map(function (m) { return m.name })
    return (
      '<section class="filter-bar">' +
      '<div class="search-input"><span class="search-icon">🔍</span>' +
      '<input id="searchInput" type="text" placeholder="차명 · 모델 · 번호판 · 상사명 검색" autocomplete="off" value="' + esc(S.q) + '" data-input="f" data-k="q" /></div>' +
      '<select id="makerSelect" class="select" data-change="f" data-k="maker"><option value="">전체 제조사</option>' +
      makers.map(function (m) { return '<option value="' + esc(m) + '"' + (S.maker === m ? " selected" : "") + ">" + esc(m) + "</option>" }).join("") +
      "</select>" +
      '<div class="range-group">' +
      '<input id="minPrice" type="number" placeholder="최소가(만원)" class="input-sm" value="' + esc(S.minPrice) + '" data-input="f" data-k="minPrice" />' +
      '<span class="range-sep">~</span>' +
      '<input id="maxPrice" type="number" placeholder="최대가(만원)" class="input-sm" value="' + esc(S.maxPrice) + '" data-input="f" data-k="maxPrice" /></div>' +
      '<input id="minYear" type="number" placeholder="최소 연식" class="input-sm" value="' + esc(S.minYear) + '" data-input="f" data-k="minYear" />' +
      '<input id="maxMileage" type="number" placeholder="최대 주행(km)" class="input-sm" value="' + esc(S.maxMileage) + '" data-input="f" data-k="maxMileage" />' +
      '<select id="sortSelect" class="select" data-change="f" data-k="sort">' +
      [["", "기본순 (크롤링순)"], ["reg_desc", "등록일 최신순"], ["reg_asc", "등록일 오래된순"]]
        .map(function (o) { return '<option value="' + o[0] + '"' + (S.sort === o[0] ? " selected" : "") + ">" + esc(o[1]) + "</option>" }).join("") +
      "</select>" +
      '<button id="applyFilter" class="btn btn-ghost" data-act="apply">적용</button>' +
      '<button id="resetFilter" class="btn btn-ghost" data-act="reset">초기화</button>' +
      '<span class="filter-count"><b id="resultLoaded">' + esc(Demo.num(list.length)) + '</b> / <span id="resultCount">' + esc(Demo.num(cars.length)) + "</span>대</span>" +
      "</section>"
    )
  }

  function autoBar() {
    return (
      '<section class="auto-enqueue-bar">' +
      '<span class="auto-enqueue-label" title="시세대비 &lt; 0 + 국산 + 1차 통과(Y) 매칭 행의 체크박스를 자동 선택">🔁 자동 체크 (음수×국산×1차통과)</span>' +
      '<label class="auto-enqueue-chk"><input id="autoCheckToggle" type="checkbox"' + (S.autoCheck ? " checked" : "") + ' data-change="autoCheck" /><span>체크</span></label>' +
      '<span class="auto-enqueue-status" id="autoEnqueueStatus">' + esc(S.autoCheck ? S.autoMsg : "비활성, 체크 시 조건 매칭 행이 자동 체크됨") + "</span>" +
      "</section>"
    )
  }

  function table() {
    var list = filtered()
    var selectable = list.filter(function (c) { return !locked(c) })
    var allOn = selectable.length > 0 && selectable.every(function (c) { return S.sel[c.id] })
    var th = function (col, label) {
      var on = S.colF[col] ? " filter-active" : ""
      return '<th class="t-center filterable' + on + '" data-col="' + col + '" data-act="colFilter">' + esc(label) + '<span class="filter-icon">▾</span></th>'
    }
    var rows = list.map(function (c) {
      var lock = locked(c)
      var cls = (S.sel[c.id] ? "selected " : "") + (c.cheotcha === "등록완료" ? "row-locked-success " : "") + (S.newIds[c.id] ? "demo-new" : "")
      var chk = lock
        ? '<span class="chk-locked" title="' + (c.cheotcha === "등록완료" ? "첫차 등록 완료, 선택 불가" : "명의 미매핑, 선택 불가") + '">🔒</span>'
        : '<input type="checkbox" class="chk" data-act="toggleRow" data-id="' + c.id + '"' + (S.sel[c.id] ? " checked" : "") + ' aria-label="선택" />'
      var hot = c.regAgo <= 1 ? " hot" : ""
      return (
        '<tr class="' + cls.trim() + '" data-act="openCar" data-id="' + c.id + '">' +
        '<td class="td-check">' + chk + "</td>" +
        '<td class="td-thumb">' + carSvg(c.color[1], "row-thumb") + "</td>" +
        '<td><div class="row-title">' + esc(c.name) + "</div></td>" +
        '<td><span class="row-badge">' + esc(c.plate) + "</span></td>" +
        "<td>" + (c.owner && c.owner !== "-" ? '<span class="row-owner">' + esc(c.owner) + "</span>" : '<span class="row-dim">-</span>') + "</td>" +
        '<td class="row-dim">' + esc(c.maker) + "</td>" +
        '<td class="t-center row-mono">' + esc(c.ym) + "</td>" +
        '<td class="t-right row-mono">' + esc(kmTxt(c.km)) + "</td>" +
        '<td class="t-right"><span class="row-price">' + esc(man(c.price)) + "</span></td>" +
        '<td class="t-center row-mono">' + esc(regDate(c)) + '<div class="row-days' + hot + '">+' + esc(c.regAgo) + "일</div></td>" +
        '<td class="t-center">' + perfHtml(c) + "</td>" +
        '<td class="t-right">' + diffHtml(c) + "</td>" +
        '<td class="t-center"><span class="stage1 stage1-' + c.stage1.toLowerCase() + '">' + esc(c.stage1) + "</span></td>" +
        '<td class="t-center">' + extHtml(c.danggn) + "</td>" +
        '<td class="t-center">' + extHtml(c.cheotcha) + "</td>" +
        "</tr>"
      )
    }).join("")
    var empty = cars.length === 0
      ? '<div class="empty-state-icon">📭</div><div class="empty-state-title">등록된 차량이 없습니다</div><div>상단의 \'크롤링 시작\' 버튼으로 ' + esc(BRAND) + "에서 차량을 가져오세요.</div>"
      : '<div class="empty-state-icon">🔍</div><div class="empty-state-title">조건에 맞는 차량이 없습니다</div><div>필터를 바꾸거나 \'초기화\'를 눌러 보세요.</div>'
    return (
      '<main class="table-wrap"><table class="car-table"><thead><tr>' +
      '<th class="th-check"><input type="checkbox" id="selectAll" class="chk" data-act="selectAll"' + (allOn ? " checked" : "") + ' aria-label="전체 선택" /></th>' +
      '<th class="th-thumb"></th><th>차량명</th><th>차량번호</th><th>명의</th><th>제조사</th>' +
      '<th class="t-center">연식</th><th class="t-right">주행거리</th><th class="t-right">가격</th><th class="t-center">등록일</th>' +
      th("perf_rank", "성능기록부") + '<th class="t-right">시세대비</th>' + th("stage1_pass", "1차") + th("danggn", "당근") + th("cheotcha", "첫차") +
      '</tr></thead><tbody id="carRows">' + rows + "</tbody></table>" +
      '<div id="emptyState" class="empty-state' + (list.length ? " hidden" : "") + '">' + empty + "</div>" +
      "</main>"
    )
  }

  var selShown = false
  function selectionBar() {
    var n = selIds().length
    setTimeout(function () { selShown = n > 0 })
    return (
      '<div id="selectionBar" class="selection-bar' + (n ? (selShown ? " no-anim" : "") : " hidden") + '">' +
      '<div class="sel-info"><span class="sel-count" id="selCount">' + esc(n) + "</span><span>개 선택됨</span></div>" +
      '<div class="sel-actions">' +
      '<button id="clearSelection" class="btn btn-ghost" data-act="clearSel">선택 해제</button>' +
      '<button id="danggnUploadBtn" class="btn btn-ghost" title="선택한 차량의 당근 컬럼을 \'대기중\' 으로 표시" data-act="danggnQ"><span>🥕</span><span>당근 대기열 추가</span></button>' +
      '<button id="cheotchaUploadBtn" class="btn btn-ghost" title="선택한 차량의 첫차 컬럼을 \'대기중\' 으로 표시" data-act="cheotchaQ"><span>🚗</span><span>첫차 대기열 추가</span></button>' +
      '<button id="cheotchaInstantBtn" class="btn btn-ghost" title="선택한 차량을 첫차에 지금 바로 등록" data-act="cheotchaNow"><span>⚡</span><span>첫차 즉시 등록</span></button>' +
      '<button id="videoSetBtn" class="btn btn-ghost" title="선택한 차량을 영상 세트에 담기" data-act="open" data-to="/videoset"><span>🎬</span><span>영상세트 담기</span></button>' +
      '<button id="deleteSelected" class="btn btn-danger" data-act="deleteSel"><span>🗑️</span><span>삭제</span></button>' +
      "</div></div>"
    )
  }

  function colFilterPop() {
    var f = S.cf
    if (!f) return '<div id="colFilter" class="col-filter hidden"></div>'
    var counts = {}
    cars.forEach(function (c) { var v = colVal(c, f.col); counts[v] = (counts[v] || 0) + 1 })
    var vals = Object.keys(counts).sort()
    var q = f.search.trim().toLowerCase()
    var items = vals.filter(function (v) { return !q || v.toLowerCase().indexOf(q) >= 0 }).map(function (v) {
      return (
        '<label class="col-filter-item"><input type="checkbox" data-change="cfPick" data-v="' + esc(v) + '"' + (f.picked.indexOf(v) >= 0 ? " checked" : "") + " />" +
        '<span class="label">' + esc(v) + '</span><span class="count">' + esc(counts[v]) + "</span></label>"
      )
    }).join("")
    var left = Math.max(8, Math.min(f.x, window.innerWidth - 248))
    return (
      '<div id="colFilter" class="col-filter" style="left:' + left + "px;top:" + f.y + 'px">' +
      '<div class="col-filter-head"><span id="colFilterTitle">' + esc(COL_TITLE[f.col]) + ' 필터</span><button class="col-filter-clear" id="colFilterClear" title="이 필터 해제" data-act="cfClear">초기화</button></div>' +
      '<input id="colFilterSearch" type="text" placeholder="🔍 값 검색" value="' + esc(f.search) + '" data-input="cfSearch" />' +
      '<div class="col-filter-list" id="colFilterList">' + (items || '<div class="row-dim" style="padding:6px 8px">값 없음</div>') + "</div>" +
      '<div class="col-filter-actions"><button class="btn btn-ghost btn-sm" id="colFilterAll" data-act="cfAll">전체</button>' +
      '<button class="btn btn-ghost btn-sm" id="colFilterNone" data-act="cfNone">해제</button>' +
      '<button class="btn btn-primary btn-sm" id="colFilterApply" data-act="cfApply">적용</button></div></div>'
    )
  }

  function modalShell(inner, contentCls, id, overlayCls) {
    return (
      '<div id="' + id + '" class="modal"><div class="' + (overlayCls || "modal-backdrop") + '" data-act="close"></div>' +
      '<div class="modal-content' + (contentCls ? " " + contentCls : "") + '"><button class="modal-close" data-act="close" aria-label="닫기">✕</button>' +
      inner + "</div></div>"
    )
  }

  function detailModal(id) {
    var c = carById(id)
    if (!c) return modalShell('<div class="settings-body"><h2 class="settings-title">차량을 찾을 수 없습니다</h2><p class="settings-sub">삭제되었거나 없는 차량입니다.</p></div>', "modal-narrow", "detailModal")
    var bgs = ["#e9edf3", "#dfe6ee", "#f1ede6", "#e6efe9", "#ece8f1", "#e3eaf2"]
    var idx = S.photo % c.photos
    var bg = bgs[idx % bgs.length]
    var thumbs = ""
    for (var t = 0; t < Math.min(c.photos, 8); t++)
      thumbs += '<span data-act="photo" data-i="' + t + '">' + carSvg(c.color[1], t === idx ? "active" : "", bgs[t % bgs.length], t % 2) + "</span>"
    var spec = function (l, v) { return '<div class="spec-item"><span class="spec-label">' + esc(l) + '</span><span class="spec-value">' + v + "</span></div>" }
    var lock = c.cheotcha === "등록완료"
    return modalShell(
      '<div id="detailBody"><div class="detail-gallery">' + carSvg(c.color[1], "", bg, idx % 2) +
      '<button class="gallery-nav prev" data-act="photo" data-d="-1" aria-label="이전 사진">‹</button>' +
      '<button class="gallery-nav next" data-act="photo" data-d="1" aria-label="다음 사진">›</button>' +
      '<div class="gallery-counter">' + esc(idx + 1) + " / " + esc(c.photos) + "</div></div>" +
      '<div class="detail-thumbs">' + thumbs + "</div>" +
      '<div class="detail-body"><div class="detail-header">' +
      '<div class="detail-title">' + esc(c.name) + '<button class="detail-refresh-btn" data-act="refreshCar" data-id="' + c.id + '">🔄 갱신</button></div>' +
      '<div class="detail-sub">' + esc(c.plate) + " · " + esc(c.dealer) + " · 명의 " + esc(c.owner && c.owner !== "-" ? c.owner : "미확인") + "</div>" +
      '<div class="detail-price">' + esc(man(c.price)) + "</div>" +
      '<div class="detail-actions">' +
      '<button class="btn btn-ghost" data-act="carAction" data-k="danggn" data-id="' + c.id + '"' + (c.danggn ? " disabled" : "") + "><span>🥕</span><span>당근 대기열 추가</span></button>" +
      '<button class="btn btn-ghost" data-act="carAction" data-k="cheotchaQ" data-id="' + c.id + '"' + (c.cheotcha || locked(c) ? " disabled" : "") + "><span>🚗</span><span>첫차 대기열 추가</span></button>" +
      '<button class="btn btn-ghost" data-act="carAction" data-k="cheotchaNow" data-id="' + c.id + '"' + (lock || c.owner === "" ? " disabled" : "") + "><span>⚡</span><span>첫차 즉시 등록</span></button>" +
      '<button class="btn btn-ghost" data-act="carAction" data-k="video" data-id="' + c.id + '"><span>🎬</span><span>영상세트 담기</span></button>' +
      "</div></div>" +
      '<div class="detail-specs">' +
      spec("제조사", esc(c.maker) + (c.dom ? " (국산)" : " (수입)")) + spec("연식", esc(c.ym)) + spec("주행거리", esc(Demo.num(c.km)) + "km") +
      spec("연료 · 변속기", esc(c.fuel + " · " + c.gear)) + spec("색상", esc(c.color[0])) + spec("등록일", esc(regDate(c)) + " (+" + esc(c.regAgo) + "일)") +
      spec("시세 기준가", c.market != null ? esc(man(c.market)) : "매칭 없음") + spec("시세대비", diffHtml(c)) +
      spec("성능기록부", perfHtml(c)) + spec("1차 여과", '<span class="stage1 stage1-' + c.stage1.toLowerCase() + '">' + esc(c.stage1) + "</span>") +
      spec("당근 · 첫차", esc((c.danggn || "-") + " · " + (c.cheotcha || "-"))) + spec("사진", esc(c.photos) + "장") +
      "</div>" +
      '<div class="detail-section"><h3>1차 여과 판정</h3><p>' +
      esc(c.stage1 === "Y" ? "통과, 시세 이하 가격, 성능기록부 확인, 등급 양호." : "보류, " + (c.diff == null ? "시세 매칭 실패" : c.diff > 30 ? "시세보다 비쌈" : c.perf !== "Y" ? "성능기록부 없음" : "성능 등급 B")) +
      "</p></div>" +
      '<div class="detail-section"><h3>판매 설명</h3><p>' +
      esc("(가상 매물 설명)\n" + c.color[0] + " " + c.model + " " + c.trim + ", 1인 소유 차량입니다.\n정기 점검 이력이 있으며 실내 상태 양호합니다.\n상사: " + c.dealer) +
      "</p></div></div></div>",
      "", "detailModal"
    )
  }

  function settingsModal() {
    var d = S.draft.settings || (S.draft.settings = JSON.parse(JSON.stringify(cfg)))
    var f = function (key, label, unit, extra) {
      return '<label class="settings-field"><span>' + esc(label) + " <em>(" + esc(unit) + ")</em></span>" +
        '<input id="cfg_' + key + '" type="number" min="0" ' + (extra || "") + ' value="' + esc(d[key]) + '" data-input="cfg" data-k="' + key + '" /></label>'
    }
    return modalShell(
      '<div class="settings-body"><h2 class="settings-title">크롤링 조건 설정</h2>' +
      '<p class="settings-sub">설정 값은 서버 DB에 저장되며, 크롤링 시 적용됩니다.</p>' +
      '<div class="settings-grid">' +
      f("minPrice", "최소 가격", "만원") + f("maxPrice", "최대 가격", "만원") + f("maxMileage", "최대 주행거리", "km", 'step="1000"') + f("maxRegDays", "제시일 최대", "일", 'step="1" placeholder="14"') +
      '<label class="settings-field"><span>시세대비 차액 컷오프 <em>(만원)</em></span><div class="settings-signed">' +
      '<select id="cfgMinDiscountSign" class="select select-sign" data-change="cfg" data-k="sign"><option value="-"' + (d.sign === "-" ? " selected" : "") + '>−</option><option value="+"' + (d.sign === "+" ? " selected" : "") + ">+</option></select>" +
      '<input id="cfg_abs" type="number" min="0" step="10" placeholder="150" value="' + esc(d.abs) + '" data-input="cfg" data-k="abs" /></div></label>' +
      "</div>" +
      '<p class="settings-hint"><b>시세대비 차액 컷오프</b>: 차액(제시가 − 시세 기준가)이 이 값 <b>이하</b>인 차량만 저장.<br>' +
      "• <b>− 150</b> → 시세보다 150만원 이상 싸야 통과 (보수적)<br>• <b>− 0</b> 또는 <b>+ 0</b> → 시세 이하만 통과<br>• <b>+ 50</b> → 시세보다 50만원 비싸도 OK (관대)</p>" +
      '<div class="settings-actions"><button id="cfgResetBtn" class="btn btn-ghost" data-act="cfgReset">기본값</button>' +
      '<button id="cfgCancelBtn" class="btn btn-ghost" data-act="close">취소</button>' +
      '<button id="cfgSaveBtn" class="btn btn-primary" data-act="cfgSave">저장</button></div></div>',
      "modal-narrow", "crawlSettingsModal"
    )
  }

  function chutchaModal() {
    var d = S.draft.chutcha || (S.draft.chutcha = { email: chutcha.email, pw: "", template: chutcha.template, auto: chutcha.auto })
    var status = chutcha.auto
      ? "● 자동 등록 켜짐 · 최근 실행 " + chutcha.lastRun + " (" + chutcha.lastCount + "대 등록) · 다음 실행 약 " + (10 - (new Date().getMinutes() % 10)) + "분 뒤"
      : "○ 자동 등록 꺼짐, 대기열은 '지금 실행' 으로만 처리됩니다."
    return modalShell(
      '<div class="settings-body"><h2 class="settings-title">첫차 설정</h2>' +
      '<p class="settings-sub">첫차 딜러 사이트 로그인 정보와 글 등록 멘트 템플릿을 관리합니다.</p>' +
      '<h3 class="settings-section">자동 등록</h3>' +
      '<label class="auto-toggle"><input id="cfgChutchaAuto" type="checkbox"' + (d.auto ? " checked" : "") + ' data-change="chAuto" />' +
      "<span><b>10분마다 자동 등록</b>, 첫차 한도가 빈 만큼 대기열의 차량을 제시일 최근순으로 자동 등록. 세션 만료 시 자동 재로그인.</span></label>" +
      '<p class="settings-sub auto-status" id="chutchaAutoStatusLine">' + esc(status) + "</p>" +
      '<div class="auto-status-actions"><button id="chutchaRunNowBtn" class="btn btn-ghost btn-sm" type="button" title="다음 10분 기다리지 않고 즉시 1회 실행" data-act="runNow">⚡ 지금 실행</button>' +
      '<button id="chutchaRefreshStatusBtn" class="btn btn-ghost btn-sm" type="button" title="상태 새로고침" data-act="statusRefresh">↻</button></div>' +
      '<h3 class="settings-section">로그인 정보</h3>' +
      '<p class="settings-sub">저장 시 실제 로그인으로 검증합니다. 비번을 비우면 ID/비번은 그대로 유지하고 멘트만 저장돼요.</p>' +
      '<div class="settings-grid">' +
      '<label class="settings-field"><span>이메일 <em>(아이디)</em></span><input id="cfgChutchaEmail" type="email" autocomplete="off" placeholder="example@example.com" value="' + esc(d.email) + '" data-input="ch" data-k="email" /></label>' +
      '<label class="settings-field"><span>비밀번호</span><input id="cfgChutchaPw" type="text" autocomplete="off" spellcheck="false" placeholder="' + (chutcha.hasPw ? "저장됨 (변경 시에만 입력)" : "비밀번호") + '" value="' + esc(d.pw) + '" data-input="ch" data-k="pw" /></label>' +
      "</div>" +
      '<h3 class="settings-section">글 등록 멘트 템플릿</h3>' +
      '<p class="settings-sub"><code class="tpl-code">{변수}</code> 형식으로 차량 정보가 자동 치환됩니다.</p>' +
      '<div class="tpl-vars" id="chutchaTemplateVars">' +
      TPL_VARS.map(function (v) { return '<button type="button" class="tpl-var-chip" data-act="tplVar" data-v="' + esc(v) + '">{' + esc(v) + "}</button>" }).join("") +
      "</div>" +
      '<textarea id="cfgChutchaTemplate" class="tpl-textarea" rows="14" spellcheck="false" placeholder="글 본문 템플릿... {차량명} {연식} {주행거리} {가격} 등" data-input="ch" data-k="template">' + esc(d.template) + "</textarea>" +
      '<p id="chutchaSaveError" class="login-error' + (S.chutchaErr ? "" : " hidden") + '">' + esc(S.chutchaErr) + "</p>" +
      '<div class="settings-actions">' +
      '<button id="cfgChutchaClearBtn" class="btn btn-ghost" title="저장된 ID/비번 삭제" data-act="chClear">로그인 삭제</button>' +
      '<button id="cfgChutchaTplResetBtn" class="btn btn-ghost" title="기본 멘트로 되돌리기" data-act="chTplReset">멘트 기본값</button>' +
      '<button id="cfgChutchaCancelBtn" class="btn btn-ghost" data-act="close">취소</button>' +
      '<button id="cfgChutchaSaveBtn" class="btn btn-primary" data-act="chSave">저장</button></div></div>',
      "", "chutchaSettingsModal"
    )
  }

  function queueList() {
    return cars.filter(function (c) { return c.cheotcha === "대기중" })
      .sort(function (a, b) { return a.regAgo - b.regAgo || b.id - a.id })
  }

  function queueModal() {
    var q = queueList()
    var rows = q.map(function (c, i) {
      return (
        '<tr><td class="t-center queue-rank">' + (i + 1) + "</td>" +
        '<td><div class="queue-cname">' + esc(c.name) + '</div><div class="queue-csub">' + esc(c.dealer) + "</div></td>" +
        '<td><span class="row-badge">' + esc(c.plate) + "</span></td>" +
        '<td class="t-center">' + esc(c.ym) + "</td>" +
        '<td class="t-right">' + esc(Demo.num(c.km)) + "km</td>" +
        '<td class="t-right"><span class="row-price">' + esc(man(c.price)) + "</span></td>" +
        '<td class="t-center">' + esc(regDate(c)) + "</td>" +
        '<td class="t-right">' + diffHtml(c) + "</td>" +
        '<td class="t-center row-dim">' + esc(c.queuedAt) + "</td></tr>"
      )
    }).join("")
    return modalShell(
      '<div class="settings-body"><div class="queue-header"><div>' +
      '<h2 class="settings-title">🚗 첫차 등록 대기열</h2>' +
      '<p class="settings-sub">자동 등록 워커가 다음에 올릴 순서. <b>제시일 최근순</b> · 동률이면 ID 큰 순. 총 <b id="queueCount">' + esc(q.length) + "</b>대</p>" +
      '</div><div class="queue-actions"><button id="queueRefreshBtn" class="btn btn-ghost btn-sm" title="대기열 새로고침" data-act="queueRefresh">↻ 새로고침</button></div></div>' +
      '<div class="queue-table-wrap"><table class="queue-table"><thead><tr>' +
      '<th class="t-center">순번</th><th>차량명</th><th>차량번호</th><th class="t-center">연식</th><th class="t-right">주행거리</th><th class="t-right">가격</th><th class="t-center">제시일</th><th class="t-right">시세대비</th><th class="t-center">대기 등록</th>' +
      '</tr></thead><tbody id="queueTbody">' + rows + "</tbody></table>" +
      '<div id="queueEmpty" class="empty-state' + (q.length ? " hidden" : "") + '"><div class="empty-state-icon">📭</div><div class="empty-state-title">대기열이 비어있습니다</div><div>차량을 선택하고 \'첫차 대기열 추가\' 버튼을 눌러보세요.</div></div>' +
      "</div></div>",
      "", "chutchaQueueModal"
    )
  }

  function sheetModal() {
    var q = S.sheetQ.trim().toLowerCase()
    var rows = sheet.filter(function (r) { return !q || r.slice(0, 5).join(" ").toLowerCase().indexOf(q) >= 0 })
    var body = rows.map(function (r) {
      return "<tr><td>" + esc(r[0]) + "</td><td>" + esc(r[1]) + "</td><td>" + esc(r[2]) + "</td><td>" + esc(r[3]) + '</td><td class="col-5">' + esc(r[4]) +
        '</td><td class="col-url"><a href="#" data-act="extLink">' + esc(r[5]) + " ↗</a></td></tr>"
    }).join("")
    return modalShell(
      '<div class="settings-body sheet-body"><div class="sheet-header"><div>' +
      '<h2 class="settings-title">시세 매핑 시트</h2>' +
      '<p class="settings-sub">크롤링 시 1순위 매칭에 사용. <span id="sheetCount">' + esc(Demo.num(rows.length)) + '</span>건 · <a id="sheetSource" href="#" data-act="extLink">원본 시트 ↗</a></p>' +
      '</div><div class="sheet-actions"><input id="sheetSearch" type="text" placeholder="🔍 차종/제조사/모델 검색" value="' + esc(S.sheetQ) + '" data-input="sheetQ" />' +
      '<button id="sheetReload" class="btn btn-ghost" title="시트 다시 불러오기" data-act="sheetReload">↻ 새로고침</button></div></div>' +
      '<div class="sheet-table-wrap"><table class="sheet-table"><thead><tr><th>1차</th><th>2차</th><th>3차</th><th>4차</th><th>5차</th><th>URL</th></tr></thead>' +
      '<tbody id="sheetTbody">' + (body || '<tr><td colspan="6" class="sheet-empty">검색 결과가 없습니다</td></tr>') + "</tbody></table></div></div>",
      "sheet-modal-content", "sheetModal", "modal-overlay"
    )
  }

  function videoSetModal() {
    var d = S.draft.vs || (S.draft.vs = { name: nextSetId + "세트", date: Demo.day(1), time: "19:00" })
    var n = selIds().length
    var rows = videoSets.slice().sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : a.id - b.id }).map(function (s) {
      return (
        "<tr" + (S.vsView === s.id ? ' style="background:var(--primary-soft)"' : "") + "><td><b>" + esc(s.name) + "</b></td>" +
        '<td class="t-center">' + esc(s.date) + '</td><td class="t-center">' + esc(s.time) + '</td><td class="t-center">' + esc(s.cars.length) + "대</td>" +
        '<td class="t-center"><button class="btn btn-ghost btn-sm" data-act="vsView" data-id="' + s.id + '">차량 보기</button> ' +
        (n ? '<button class="btn btn-primary btn-sm" data-act="vsAdd" data-id="' + s.id + '">선택 ' + n + "대 담기</button> " : "") +
        '<button class="btn btn-ghost btn-sm" data-act="vsDel" data-id="' + s.id + '">삭제</button></td></tr>'
      )
    }).join("")
    var view = null
    videoSets.forEach(function (s) { if (s.id === S.vsView) view = s })
    var carsBox = ""
    if (view) {
      carsBox = view.cars.map(function (id, i) {
        var c = carById(id)
        if (!c) return ""
        return '<tr><td class="t-center queue-rank">' + (i + 1) + '</td><td><div class="queue-cname">' + esc(c.name) + "</div></td>" +
          '<td><span class="row-badge">' + esc(c.plate) + '</span></td><td class="t-center">' + esc(c.ym) + '</td><td class="t-right">' + esc(kmTxt(c.km)) + "</td>" +
          '<td class="t-center"><span class="row-img-count">📷 ' + esc(c.photos) + "</span></td>" +
          '<td class="t-center"><button class="btn btn-ghost btn-sm" data-act="vsOut" data-id="' + c.id + '">빼기</button></td></tr>'
      }).join("") || '<tr><td colspan="7" class="sheet-empty">담긴 차량이 없습니다</td></tr>'
    }
    return modalShell(
      '<div class="settings-body"><h2 class="settings-title">🎬 영상 세트</h2>' +
      '<p class="settings-sub">유튜브 업로드용 세트입니다. 차량을 선택하고 세트에 담으면, 업로드 프로그램이 <b>일자별</b>로 불러가 영상을 만듭니다.</p>' +
      '<p class="settings-sub" id="vsSelInfo">' + (n ? "선택된 차량 <b>" + esc(n) + "대</b>, 아래 세트의 '담기'를 누르거나 새 세트를 만들면서 담을 수 있습니다." : "") + "</p>" +
      '<h3 class="settings-section">새 세트 만들기</h3><div class="settings-grid">' +
      '<label class="settings-field"><span>세트 이름</span><input id="vsName" type="text" placeholder="예: 1세트" value="' + esc(d.name) + '" data-input="vs" data-k="name" /></label>' +
      '<label class="settings-field"><span>일자</span><input id="vsDate" type="date" value="' + esc(d.date) + '" data-input="vs" data-k="date" /></label>' +
      '<label class="settings-field"><span>업로드 예약 시각</span><input id="vsTime" type="time" value="' + esc(d.time) + '" data-input="vs" data-k="time" /></label>' +
      "</div>" +
      '<div class="settings-actions" style="justify-content:flex-start"><button id="vsCreateBtn" class="btn btn-primary" data-act="vsCreate">+ 세트 생성</button>' +
      '<button id="vsCreateAddBtn" class="btn btn-ghost' + (n ? "" : " hidden") + '" data-act="vsCreate" data-add="1">+ 생성하고 선택 차량 담기</button></div>' +
      '<h3 class="settings-section">세트 목록</h3><div class="queue-table-wrap"><table class="queue-table"><thead><tr>' +
      '<th>이름</th><th class="t-center">일자</th><th class="t-center">예약시각</th><th class="t-center">차량</th><th class="t-center">작업</th></tr></thead>' +
      '<tbody id="vsTbody">' + rows + "</tbody></table>" +
      '<div id="vsEmpty" class="empty-state' + (videoSets.length ? " hidden" : "") + '"><div class="empty-state-icon">📭</div><div class="empty-state-title">세트가 없습니다</div><div>위에서 새 세트를 만들어 보세요.</div></div></div>' +
      '<div id="vsCarsBox" class="' + (view ? "" : "hidden") + '"><h3 class="settings-section" id="vsCarsTitle">' + esc(view ? view.name + " 차량 (" + view.date + " " + view.time + ")" : "세트 차량") + "</h3>" +
      '<div class="queue-table-wrap"><table class="queue-table"><thead><tr><th class="t-center">순번</th><th>차량명</th><th>차량번호</th><th class="t-center">연식</th><th class="t-right">주행</th><th class="t-center">사진</th><th class="t-center">빼기</th></tr></thead>' +
      '<tbody id="vsCarsTbody">' + carsBox + "</tbody></table></div></div></div>",
      "", "videoSetModal"
    )
  }

  // ───────── 다시 그리기 (입력 포커스·스크롤 유지) ─────────
  var SCROLLERS = [".modal-content", ".queue-table-wrap", ".sheet-table-wrap", ".table-wrap", ".col-filter-list"]
  function paint() {
    var a = document.activeElement
    var id = a && a.id
    var s = null, e = null
    try { s = a.selectionStart; e = a.selectionEnd } catch (x) {}
    var keep = lastModal
    var pos = {}
    SCROLLERS.forEach(function (sel) {
      pos[sel] = [].map.call(document.querySelectorAll(sel), function (n) { return [n.scrollTop, n.scrollLeft] })
    })
    Demo.update()
    SCROLLERS.forEach(function (sel) {
      if (sel !== ".table-wrap" && keep !== lastModal) return
      ;[].forEach.call(document.querySelectorAll(sel), function (n, i) {
        var p = pos[sel][i]
        if (p) { n.scrollTop = p[0]; n.scrollLeft = p[1] }
      })
    })
    if (id) {
      var n = document.getElementById(id)
      if (n && n !== document.activeElement && /INPUT|TEXTAREA|SELECT/.test(n.tagName)) {
        n.focus({ preventScroll: true })
        try { if (s != null) n.setSelectionRange(s, e) } catch (x) {}
      }
    }
  }

  var savedY = null
  function nav(path) {
    savedY = window.scrollY
    if (location.hash.replace(/^#/, "") === path) paint()
    else Demo.go(path)
  }
  function closeModal() {
    tplCaret = null
    S.draft = {}
    S.chutchaErr = ""
    S.vsView = null
    nav("/")
  }

  // ───────── 동작 ─────────
  Demo.on("theme", function () {
    S.theme = S.theme === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", S.theme)
    paint()
  })
  Demo.on("open", function (d) {
    S.cf = null
    if (d.to === "/videoset") S.vsView = null
    nav(d.to)
  })
  Demo.on("close", closeModal)
  Demo.on("openCar", function (d) { S.photo = 0; S.cf = null; nav("/car?id=" + d.id) })
  Demo.on("photo", function (d) {
    var c = carById(Demo.route().query.id)
    if (!c) return
    if (d.i != null) S.photo = +d.i
    else S.photo = (S.photo + +d.d + c.photos) % c.photos
    paint()
  })

  Demo.on("f", function (v, el) {
    S[el.getAttribute("data-k")] = v
    if (S.autoCheck) applyAutoCheck()
    paint()
  })
  Demo.on("apply", function () {
    paint()
    Demo.toast("필터를 적용했습니다 · " + filtered().length + "대")
  })
  Demo.on("reset", function () {
    S.q = S.maker = S.minPrice = S.maxPrice = S.minYear = S.maxMileage = S.sort = ""
    S.colF = {}
    S.cf = null
    paint()
    Demo.toast("필터를 초기화했습니다")
  })

  function applyAutoCheck() {
    var m = filtered().filter(autoMatch)
    m.forEach(function (c) { S.sel[c.id] = true })
    S.autoMsg = "활성, 매칭 " + m.length + "대 자동 체크됨"
    return m.length
  }
  Demo.on("autoCheck", function (v, el) {
    S.autoCheck = el.checked
    if (S.autoCheck) {
      var n = applyAutoCheck()
      Demo.toast("음수×국산×1차통과 " + n + "대를 체크했습니다")
    }
    paint()
  })

  Demo.on("toggleRow", function (d) {
    S.sel[d.id] = !S.sel[d.id]
    paint()
  })
  Demo.on("selectAll", function () {
    var list = filtered().filter(function (c) { return !locked(c) })
    var allOn = list.length > 0 && list.every(function (c) { return S.sel[c.id] })
    list.forEach(function (c) { S.sel[c.id] = !allOn })
    paint()
  })
  Demo.on("clearSel", function () { S.sel = {}; paint() })

  function enqueueCheotcha(list) {
    var n = 0
    list.forEach(function (c) {
      if (locked(c) || c.cheotcha) return
      c.cheotcha = "대기중"
      c.queuedAt = nowStamp(0)
      n++
    })
    return n
  }
  function registerNow(list) {
    var n = 0
    list.forEach(function (c) {
      if (locked(c)) return
      c.cheotcha = "등록완료"
      c.queuedAt = ""
      n++
    })
    return n
  }
  function selCars() { return selIds().map(carById) }

  Demo.on("danggnQ", function () {
    var n = 0
    selCars().forEach(function (c) { if (!c.danggn) { c.danggn = "대기중"; n++ } })
    S.sel = {}
    paint()
    Demo.toast("당근 대기열에 " + n + "대 추가했습니다")
  })
  Demo.on("cheotchaQ", function () {
    var n = enqueueCheotcha(selCars())
    S.sel = {}
    paint()
    Demo.toast(n ? "첫차 대기열에 " + n + "대 추가했습니다" : "이미 대기열에 있거나 등록된 차량입니다")
  })
  Demo.on("cheotchaNow", function () {
    var n = registerNow(selCars())
    S.sel = {}
    paint()
    Demo.toast("첫차에 " + n + "대 즉시 등록했습니다")
  })
  Demo.on("deleteSel", function () {
    var ids = selIds()
    if (!ids.length) return
    if (!window.confirm("선택한 " + ids.length + "대를 삭제할까요? 사진도 함께 삭제됩니다.")) return
    removeCars(ids)
    S.sel = {}
    paint()
    Demo.toast(ids.length + "대를 삭제했습니다")
  })
  function removeCars(ids) {
    var set = {}
    ids.forEach(function (i) { set[i] = 1 })
    cars = cars.filter(function (c) { return !set[c.id] })
    videoSets.forEach(function (s) { s.cars = s.cars.filter(function (i) { return !set[i] }) })
  }
  Demo.on("deleteAll", function () {
    if (!cars.length) return Demo.toast("삭제할 차량이 없습니다")
    if (!window.confirm("모든 차량(" + cars.length + "대)과 사진을 삭제할까요?\n되돌릴 수 없습니다.")) return
    var n = cars.length
    removeCars(cars.map(function (c) { return c.id }))
    S.sel = {}
    paint()
    Demo.toast("전체 " + n + "대를 삭제했습니다")
  })

  Demo.on("carAction", function (d) {
    var c = carById(d.id)
    if (!c) return
    if (d.k === "danggn") { c.danggn = "대기중"; Demo.toast("당근 대기열에 추가했습니다") }
    else if (d.k === "cheotchaQ") { enqueueCheotcha([c]); Demo.toast("첫차 대기열에 추가했습니다") }
    else if (d.k === "cheotchaNow") { registerNow([c]); Demo.toast("첫차에 즉시 등록했습니다") }
    else if (d.k === "video") { S.sel = {}; S.sel[c.id] = true; S.draft = {}; S.vsView = null; return nav("/videoset") }
    paint()
  })
  Demo.on("refreshCar", function (d) {
    var c = carById(d.id)
    if (!c) return
    if (c.diff != null) {
      var delta = (rnd() < 0.5 ? -1 : 1) * 10
      c.price += delta
      c.diff += delta
    }
    paint()
    Demo.toast("최신 정보로 갱신했습니다")
  })

  // 컬럼 필터
  Demo.on("colFilter", function (d, el) {
    if (S.cf && S.cf.col === d.col) { S.cf = null; return paint() }
    var r = el.getBoundingClientRect()
    var all = {}
    cars.forEach(function (c) { all[colVal(c, d.col)] = 1 })
    S.cf = { col: d.col, x: r.left, y: r.bottom + 4, search: "", picked: S.colF[d.col] ? S.colF[d.col].slice() : Object.keys(all) }
    paint()
  })
  Demo.on("cfPick", function (v, el) {
    var val = el.getAttribute("data-v")
    var p = S.cf.picked
    var i = p.indexOf(val)
    if (el.checked && i < 0) p.push(val)
    if (!el.checked && i >= 0) p.splice(i, 1)
    paint()
  })
  Demo.on("cfSearch", function (v) { S.cf.search = v; paint() })
  Demo.on("cfAll", function () {
    var all = {}
    cars.forEach(function (c) { all[colVal(c, S.cf.col)] = 1 })
    S.cf.picked = Object.keys(all)
    paint()
  })
  Demo.on("cfNone", function () { S.cf.picked = []; paint() })
  Demo.on("cfClear", function () { delete S.colF[S.cf.col]; S.cf = null; paint() })
  Demo.on("cfApply", function () {
    var all = {}
    cars.forEach(function (c) { all[colVal(c, S.cf.col)] = 1 })
    var full = Object.keys(all).every(function (k) { return S.cf.picked.indexOf(k) >= 0 })
    if (full) delete S.colF[S.cf.col]
    else S.colF[S.cf.col] = S.cf.picked.slice()
    S.cf = null
    paint()
  })
  document.addEventListener("click", function (e) {
    if (!S.cf || !e.target.isConnected) return
    if (e.target.closest(".col-filter") || e.target.closest("[data-act]")) return
    S.cf = null
    paint()
  })
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return
    if (S.cf) { S.cf = null; return paint() }
    if (Demo.route().path !== "/") closeModal()
  })

  // 크롤링 설정
  Demo.on("cfg", function (v, el) { S.draft.settings[el.getAttribute("data-k")] = v })
  Demo.on("cfgReset", function () {
    S.draft.settings = { minPrice: 500, maxPrice: 6000, maxMileage: 150000, maxRegDays: 14, sign: "-", abs: 50 }
    paint()
    Demo.toast("기본값을 불러왔습니다, 저장을 눌러야 반영됩니다")
  })
  Demo.on("cfgSave", function () {
    var d = S.draft.settings
    var num = function (k) { return Math.max(0, Math.round(+d[k] || 0)) }
    if (num("maxPrice") && num("minPrice") > num("maxPrice")) return Demo.toast("최소 가격이 최대 가격보다 큽니다")
    cfg = { minPrice: num("minPrice"), maxPrice: num("maxPrice") || 99999, maxMileage: num("maxMileage") || 999999, maxRegDays: Math.max(1, num("maxRegDays")), sign: d.sign === "+" ? "+" : "-", abs: num("abs") }
    closeModal()
    Demo.toast("크롤링 조건을 저장했습니다 · 컷오프 " + (cfg.sign === "-" ? "−" : "+") + cfg.abs + "만원")
  })

  // 첫차 설정
  Demo.on("ch", function (v, el) { S.draft.chutcha[el.getAttribute("data-k")] = v })
  Demo.on("chAuto", function (v, el) { S.draft.chutcha.auto = el.checked })
  Demo.on("tplVar", function (d) {
    var tok = "{" + d.v + "}"
    var val = S.draft.chutcha.template
    var s = tplCaret ? tplCaret[0] : val.length
    var e = tplCaret ? tplCaret[1] : val.length
    S.draft.chutcha.template = val.slice(0, s) + tok + val.slice(e)
    paint()
    var n = document.getElementById("cfgChutchaTemplate")
    if (n) { n.focus({ preventScroll: true }); n.setSelectionRange(s + tok.length, s + tok.length) }
    tplCaret = [s + tok.length, s + tok.length]
  })
  // 템플릿 입력칸의 마지막 커서 위치 (한 번도 누르지 않았으면 끝에 넣는다)
  var tplCaret = null
  document.addEventListener("focusout", function (e) {
    if (e.target.id === "cfgChutchaTemplate") tplCaret = [e.target.selectionStart, e.target.selectionEnd]
  })
  Demo.on("chClear", function () {
    if (!window.confirm("저장된 로그인 정보를 삭제할까요?")) return
    chutcha.email = ""
    chutcha.hasPw = false
    S.draft.chutcha.email = ""
    S.draft.chutcha.pw = ""
    paint()
    Demo.toast("로그인 정보를 삭제했습니다")
  })
  Demo.on("chTplReset", function () { S.draft.chutcha.template = TPL_DEFAULT; paint() })
  Demo.on("chSave", function () {
    var d = S.draft.chutcha
    if (d.pw && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email)) {
      S.chutchaErr = "이메일 형식을 확인해 주세요."
      return paint()
    }
    if (!d.template.trim()) {
      S.chutchaErr = "멘트 템플릿이 비어 있습니다."
      return paint()
    }
    chutcha.template = d.template
    chutcha.auto = d.auto
    if (d.pw) { chutcha.email = d.email; chutcha.hasPw = true }
    var verified = !!d.pw
    closeModal()
    Demo.toast(verified ? "로그인 확인 완료 · 설정을 저장했습니다" : "멘트와 자동 등록 설정을 저장했습니다")
  })
  Demo.on("runNow", function () {
    var done = cars.filter(function (c) { return c.cheotcha === "등록완료" }).length
    var room = Math.max(0, chutcha.limit - done)
    var take = queueList().slice(0, Math.min(room, 3))
    registerNow(take)
    chutcha.lastRun = nowStamp(0)
    chutcha.lastCount = take.length
    paint()
    Demo.toast(take.length ? "대기열에서 " + take.length + "대를 등록했습니다" : "등록할 대기 차량이 없습니다")
  })
  Demo.on("statusRefresh", function () { paint(); Demo.toast("상태를 새로고침했습니다") })
  Demo.on("queueRefresh", function () { paint(); Demo.toast("대기열 " + queueList().length + "대") })

  // 시트
  Demo.on("sheetQ", function (v) { S.sheetQ = v; paint() })
  Demo.on("sheetReload", function () { paint(); Demo.toast("시트 " + sheet.length + "건을 다시 불러왔습니다") })
  Demo.on("extLink", function () { Demo.toast("체험판에서는 외부 링크를 열지 않습니다") })

  // 영상 세트
  Demo.on("vs", function (v, el) { S.draft.vs[el.getAttribute("data-k")] = v })
  Demo.on("vsCreate", function (d) {
    var v = S.draft.vs
    if (!v.name.trim()) return Demo.toast("세트 이름을 입력하세요")
    if (!v.date) return Demo.toast("일자를 선택하세요")
    var s = { id: nextSetId++, name: v.name.trim(), date: v.date, time: v.time || "19:00", cars: [] }
    if (d.add) {
      s.cars = selIds()
      S.sel = {}
    }
    videoSets.push(s)
    S.vsView = s.id
    S.draft.vs = { name: nextSetId + "세트", date: v.date, time: s.time }
    paint()
    Demo.toast("'" + s.name + "' 세트를 만들었습니다" + (s.cars.length ? " · " + s.cars.length + "대 담음" : ""))
  })
  Demo.on("vsView", function (d) { S.vsView = S.vsView === +d.id ? null : +d.id; paint() })
  Demo.on("vsAdd", function (d) {
    var s = videoSets.filter(function (x) { return x.id === +d.id })[0]
    var n = 0
    selIds().forEach(function (id) { if (s.cars.indexOf(id) < 0) { s.cars.push(id); n++ } })
    S.sel = {}
    S.vsView = s.id
    paint()
    Demo.toast("'" + s.name + "'에 " + n + "대를 담았습니다")
  })
  Demo.on("vsDel", function (d) {
    var s = videoSets.filter(function (x) { return x.id === +d.id })[0]
    if (!window.confirm("'" + s.name + "' 세트를 삭제할까요?")) return
    videoSets = videoSets.filter(function (x) { return x !== s })
    if (S.vsView === s.id) S.vsView = null
    paint()
  })
  Demo.on("vsOut", function (d) {
    videoSets.forEach(function (s) { if (s.id === S.vsView) s.cars = s.cars.filter(function (i) { return i !== +d.id }) })
    paint()
  })

  // 크롤링 시뮬레이션 (외부 접속 없음, 가상 매물을 차례로 만든다)
  Demo.on("crawl", function () {
    if (S.crawling) return
    S.crawling = true
    S.crawlPct = 0
    S.crawlMsg = "로그인 세션 확인 중..."
    S.newIds = {}
    paint()
    var pages = 6, page = 0, saved = 0, skipped = 0, step = 0
    var timer = setInterval(function () {
      step++
      if (step % 3 === 1) {
        page++
        S.crawlMsg = "목록 페이지 " + page + "/" + pages + " 수집 중... (저장 " + saved + "대 · 제외 " + skipped + "대)"
      } else {
        var tries = ri(2, 4)
        for (var t = 0; t < tries; t++) {
          var c = makeCar({ regAgo: ri(0, 3) })
          if (passesCfg(c)) {
            cars.unshift(c)
            S.newIds[c.id] = true
            if (S.autoCheck && autoMatch(c)) S.sel[c.id] = true
            saved++
          } else skipped++
        }
        S.crawlMsg = (step % 3 === 2 ? "상세 · 성능기록부 확인 중" : "시세 매칭 · 사진 저장 중") + ", 페이지 " + page + "/" + pages + " (저장 " + saved + "대 · 제외 " + skipped + "대)"
        if (S.autoCheck) applyAutoCheck()
      }
      S.crawlPct = Math.min(100, Math.round((step / (pages * 3)) * 100))
      if (step >= pages * 3) {
        clearInterval(timer)
        S.crawling = false
        var d = new Date()
        S.updated = Demo.day(0) + " " + String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0")
        paint()
        setTimeout(function () { S.newIds = {} }, 1700)
        Demo.toast("크롤링 완료, 신규 " + saved + "대 저장 · 조건 미달 " + skipped + "대 제외")
        return
      }
      paint()
    }, 650)
  })

  // ───────── 시작 ─────────
  Demo.mount(render)
  window.addEventListener("hashchange", function () {
    if (savedY != null) { window.scrollTo(0, savedY); savedY = null }
  })
  Demo.banner()
})()
