/* 리뷰웨이 ERP 체험판 (가상 데이터)
 * 체험단 리뷰·정산 관리: 리뷰어 화면(상품 → 구매제출 → 리뷰 제출 → 정산) + 관리자 화면(직원·리뷰어·사진 검수·정산·설정)
 * 모든 회사·상품·사람·계좌는 지어낸 값이며, 사진은 코드로 그린 예시 그림이다.
 */
;(function () {
  var e = Demo.esc
  var won = Demo.won
  var now = Date.now()
  var HOUR = 3600 * 1000
  function ago(h) { return now - h * HOUR }
  function fmt(t) { return new Date(t).toLocaleString("ko-KR") }
  function fmtD(t) {
    var d = new Date(t)
    return d.getFullYear() + "." + String(d.getMonth() + 1).padStart(2, "0") + "." + String(d.getDate()).padStart(2, "0")
  }
  var seq = 100
  function uid(p) { seq += 1; return p + seq }

  /* ───────── 아이콘 (lucide 모양) ───────── */
  var I = {
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
    checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    chevDown: '<path d="m6 9 6 6 6-6"/>',
    chevRight: '<path d="m9 18 6-6-6-6"/>',
    chevLeft: '<path d="m15 18-6-6 6-6"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    msg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    table: '<path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    zoomIn: '<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>',
    zoomOut: '<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
    book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
    pkg: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    list: '<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    alert: '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
    swap: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  }
  function ic(n, cls) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="' + (cls || "size-4 shrink-0") + '" aria-hidden="true">' + I[n] + "</svg>"
  }

  /* ───────── 예시 사진 (SVG 로 그림) ───────── */
  function svgUri(s) { return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(s) }
  var FONT = 'font-family="Pretendard,Apple SD Gothic Neo,Malgun Gothic,sans-serif"'
  function imgProduct(p, v) {
    v = v || 0
    var c = p.color
    return svgUri(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="' + c[0] + '"/>' +
        '<circle cx="' + (310 - v * 30) + '" cy="' + (80 + v * 20) + '" r="80" fill="' + c[1] + '" opacity=".18"/>' +
        '<rect x="' + (128 + v * 8) + '" y="96" width="144" height="208" rx="20" fill="#fff"/>' +
        '<rect x="' + (128 + v * 8) + '" y="96" width="144" height="52" rx="20" fill="' + c[1] + '"/>' +
        '<rect x="' + (150 + v * 8) + '" y="186" width="100" height="10" rx="5" fill="' + c[1] + '" opacity=".55"/>' +
        '<rect x="' + (150 + v * 8) + '" y="206" width="70" height="10" rx="5" fill="' + c[1] + '" opacity=".3"/>' +
        '<rect x="' + (150 + v * 8) + '" y="252" width="40" height="28" rx="6" fill="' + c[0] + '"/>' +
        '<text x="200" y="352" ' + FONT + ' font-size="24" font-weight="700" fill="' + c[2] + '" text-anchor="middle">' + e(p.short) + "</text>" +
        '<text x="18" y="32" ' + FONT + ' font-size="14" fill="' + c[2] + '" opacity=".55">예시 이미지</text></svg>',
    )
  }
  function imgReceipt(p, amount, v) {
    v = v || 0
    var lines = ""
    for (var i = 0; i < 4; i++)
      lines += '<rect x="28" y="' + (262 + i * 22) + '" width="' + (180 - i * 24 + v * 6) + '" height="9" rx="4" fill="#e5e7eb"/>'
    return svgUri(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect width="300" height="400" fill="#fff"/>' +
        '<rect width="300" height="44" fill="#f3f4f6"/><text x="150" y="28" ' + FONT + ' font-size="14" font-weight="600" fill="#374151" text-anchor="middle">주문 상세</text>' +
        '<circle cx="150" cy="86" r="20" fill="#dcfce7"/><path d="M140 86l7 7 13-14" stroke="#16a34a" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<text x="150" y="134" ' + FONT + ' font-size="16" font-weight="700" fill="#111827" text-anchor="middle">주문이 완료되었습니다</text>' +
        '<rect x="20" y="152" width="260" height="88" rx="10" fill="#f9fafb" stroke="#e5e7eb"/>' +
        '<rect x="32" y="164" width="64" height="64" rx="8" fill="' + p.color[0] + '"/><rect x="50" y="176" width="28" height="40" rx="5" fill="' + p.color[1] + '"/>' +
        '<text x="108" y="186" ' + FONT + ' font-size="12" fill="#6b7280">' + e(p.company) + "</text>" +
        '<text x="108" y="206" ' + FONT + ' font-size="13" font-weight="600" fill="#111827">' + e(p.short) + "</text>" +
        '<text x="108" y="226" ' + FONT + ' font-size="13" font-weight="700" fill="#2563eb">' + e(won(amount)) + "</text>" +
        lines +
        '<rect x="20" y="352" width="260" height="1" fill="#e5e7eb"/>' +
        '<text x="28" y="378" ' + FONT + ' font-size="12" fill="#9ca3af">주문번호 0000-' + (1000 + v * 37) + ' (가상)</text></svg>',
    )
  }
  function imgReview(p, v) {
    v = v || 0
    var stars = ""
    for (var i = 0; i < 5; i++)
      stars += '<path transform="translate(' + (28 + i * 22) + ',236) scale(.8)" d="M12 2l3 6.5 7 .8-5.2 4.7 1.5 7L12 17.5 5.7 21l1.5-7L2 9.3l7-.8z" fill="#fbbf24"/>'
    return svgUri(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect width="300" height="400" fill="#fff"/>' +
        '<rect width="300" height="40" fill="#fafafa"/><text x="20" y="26" ' + FONT + ' font-size="13" font-weight="600" fill="#374151">포토 리뷰</text>' +
        '<rect x="20" y="54" width="260" height="168" rx="10" fill="' + p.color[0] + '"/>' +
        '<rect x="' + (112 + v * 10) + '" y="76" width="76" height="124" rx="12" fill="#fff"/><rect x="' + (112 + v * 10) + '" y="76" width="76" height="30" rx="12" fill="' + p.color[1] + '"/>' +
        '<circle cx="' + (232 - v * 12) + '" cy="96" r="22" fill="' + p.color[1] + '" opacity=".25"/>' +
        stars +
        '<text x="150" y="252" ' + FONT + ' font-size="12" fill="#6b7280">' + e(p.short) + "</text>" +
        '<rect x="20" y="276" width="250" height="9" rx="4" fill="#e5e7eb"/><rect x="20" y="296" width="220" height="9" rx="4" fill="#e5e7eb"/>' +
        '<rect x="20" y="316" width="' + (160 + v * 20) + '" height="9" rx="4" fill="#e5e7eb"/>' +
        '<text x="20" y="378" ' + FONT + ' font-size="12" fill="#9ca3af">예시 리뷰 캡처</text></svg>',
    )
  }

  /* ───────── 가상 데이터 ───────── */
  var S = {
    me: "u1",
    staff: [
      { id: "s1", name: "윤가람", dept: "진행팀", email: "garam.y@reviewway.example", sheet: true },
      { id: "s2", name: "서도윤", dept: "진행팀", email: "doyun.s@reviewway.example", sheet: true },
      { id: "s3", name: "류하린", dept: "진행팀", email: "harin.r@reviewway.example", sheet: true },
      { id: "s4", name: "채민호", dept: "상담팀", email: "minho.c@reviewway.example", sheet: false },
      { id: "s5", name: "피수아", dept: "운영팀", email: "sua.p@reviewway.example", sheet: false },
      { id: "s6", name: "남지율", dept: "상담팀", email: "jiyul.n@reviewway.example", sheet: true },
      { id: "s7", name: "탁서진", dept: "진행팀", email: "seojin.t@reviewway.example", sheet: false },
      { id: "s8", name: "기하람", dept: "대표", email: "haram.k@reviewway.example", sheet: true },
    ],
    products: [
      { id: "p1", staff: "s1", company: "숲결코스메틱", name: "숲결 시카 진정 토너 300ml", short: "시카 토너", kw: "진정토너", price: 18900, fee: 3000, type: "구매리뷰", platform: "스마트스토어", slots: 20, color: ["#e8f5ee", "#2f9e6b", "#1d5c40"] },
      { id: "p2", staff: "s1", company: "하루곡물상회", name: "하루 국산 귀리 1kg", short: "국산 귀리", kw: "귀리 1kg", price: 12900, fee: 2000, type: "구매리뷰", platform: "쿠팡", slots: 15, color: ["#fbf3e4", "#d29a3a", "#7a5418"] },
      { id: "p3", staff: "s2", company: "모노리빙", name: "모노 접이식 수납박스 3P", short: "수납박스", kw: "접이식수납함", price: 24500, fee: 3000, type: "일반리뷰", platform: "스마트스토어", slots: 10, color: ["#eef1f6", "#5b6b8a", "#2c3850"] },
      { id: "p4", staff: "s2", company: "달빛베이커리", name: "달빛 통밀 쿠키 8입", short: "통밀 쿠키", kw: "통밀쿠키", price: 9800, fee: 2000, type: "구매리뷰", platform: "자사몰", slots: 30, color: ["#fdf0ea", "#e0794a", "#8a3b19"] },
      { id: "p5", staff: "s3", company: "포근침구", name: "포근 워싱 차렵이불 Q", short: "차렵이불", kw: "워싱이불", price: 39000, fee: 5000, type: "구매리뷰", platform: "스마트스토어", slots: 8, color: ["#f1effa", "#7b68c8", "#3d2f80"] },
      { id: "p6", staff: "s3", company: "바른펫푸드", name: "바른 연어 동결건조 트릿", short: "펫 트릿", kw: "강아지간식", price: 15500, fee: 2500, type: "일반리뷰", platform: "쿠팡", slots: 12, color: ["#eaf4fb", "#3a8cc4", "#1b4f73"] },
      { id: "p7", staff: "s6", company: "온새미주방", name: "온새미 스텐 계량컵 세트", short: "계량컵", kw: "계량컵세트", price: 13900, fee: 2000, type: "구매리뷰", platform: "스마트스토어", slots: 18, color: ["#f3f4f4", "#7d8b8f", "#3a4447"] },
      { id: "p8", staff: "s8", company: "청록리빙", name: "청록 진공 텀블러 500ml", short: "텀블러", kw: "보온텀블러", price: 21900, fee: 3000, type: "구매리뷰", platform: "쿠팡", slots: 14, color: ["#e6f6f4", "#1f9c8c", "#0f5249"] },
    ],
    reviewers: [
      { id: "u1", name: "오세린", phone: "010-0000-2814", email: "serin.o@mail.example", address: "가상시 가람구 새솔로 12, 101동 1203호", joined: ago(24 * 70), accounts: [
        { id: "a1", name: "오세린", holder: "오세린", bank: "누리은행", acct: "302-****-**71", key: "오세린1" },
        { id: "a2", name: "오가온", holder: "오가온", bank: "가람은행", acct: "110-***-***482", key: "오세린2" },
      ] },
      { id: "u2", name: "문채윤", phone: "010-0000-5530", email: "chaeyun.m@mail.example", address: "가상시 누리구 별빛길 8, 2층", joined: ago(24 * 52), accounts: [
        { id: "a3", name: "문채윤", holder: "문채윤", bank: "한결은행", acct: "620-****-**19", key: "문채윤1" },
      ] },
      { id: "u3", name: "배준호", phone: "010-0000-7742", email: "junho.b@mail.example", address: "가상시 하늘구 푸른숲로 45, 302호", joined: ago(24 * 40), accounts: [
        { id: "a4", name: "배준호", holder: "배준호", bank: "누리은행", acct: "302-****-**08", key: "배준호1" },
        { id: "a5", name: "배서아", holder: "배서아", bank: "누리은행", acct: "302-****-**64", key: "배준호2" },
      ] },
      { id: "u4", name: "홍다은", phone: "010-0000-1196", email: "daeun.h@mail.example", address: "가상시 바다구 물결로 3, 504동 801호", joined: ago(24 * 31), accounts: [
        { id: "a6", name: "홍다은", holder: "홍다은", bank: "가람은행", acct: "110-***-***215", key: "홍다은1" },
      ] },
      { id: "u5", name: "장우석", phone: "010-0000-3087", email: "wooseok.j@mail.example", address: "가상시 들꽃구 노을로 77", joined: ago(24 * 12), accounts: [
        { id: "a7", name: "장우석", holder: "장우석", bank: "한결은행", acct: "620-****-**52", key: "장우석1" },
        { id: "a8", name: "장민주", holder: "장민주", bank: "한결은행", acct: "620-****-**90", key: "" },
      ] },
    ],
    // 구글 시트 '구매자' 열에 올라왔지만 아직 명의와 연결되지 않은 값
    pending: [
      { v: "장우석2", staff: "s3", product: "p5" },
      { v: "오세린3", staff: "s2", product: "p4" },
    ],
    subs: [],
    mapping: {},
    ui: {
      rq: "", rstaff: "", lq: "", lstaff: "", lacc: "", lstat: "",
      sq: "", rvq: "", pq: "", pstaff: "", pstage: "", ptype: "", prev: "",
      stq: "", ststaff: "", ststat: "대기", setStaff: "s1", setTab: "map", guide: "p1", cancelId: "",
    },
    sel: {},
    draft: null,
    rdraft: null,
    modal: null,
    viewer: null,
  }

  function prod(id) { return S.products.filter(function (p) { return p.id === id })[0] }
  function staffOf(id) { return S.staff.filter(function (s) { return s.id === id })[0] }
  function reviewer(id) { return S.reviewers.filter(function (r) { return r.id === id })[0] }
  function me() { return reviewer(S.me) }
  function account(aid) {
    for (var i = 0; i < S.reviewers.length; i++)
      for (var j = 0; j < S.reviewers[i].accounts.length; j++)
        if (S.reviewers[i].accounts[j].id === aid) return S.reviewers[i].accounts[j]
  }
  function subOf(id) { return S.subs.filter(function (x) { return x.id === id })[0] }

  /* 구매제출 한 건 만들기 */
  function mk(id, rid, aid, pid, buyH, o) {
    o = o || {}
    var p = prod(pid), r = reviewer(rid), a = account(aid)
    var amount = o.amount || p.price
    var v = id.charCodeAt(id.length - 1) % 3
    var x = {
      id: id, rid: rid, aid: aid, pid: pid, bundle: o.bundle || "",
      amount: amount, orderer: a.name, recipient: a.name, phone: r.phone, address: r.address,
      buyPhotos: [imgReceipt(p, amount, v)].concat(o.twoBuy ? [imgProduct(p, 1)] : []),
      buyAt: ago(buyH), buyStatus: o.buyStatus || (o.reviewH ? "승인" : "검수대기"), buyMemo: o.buyMemo || "",
      reviewPhotos: [], reviewAt: 0, reviewStatus: "", reviewMemo: "", link: "",
      settle: o.settle || "", settledAt: o.settleH ? ago(o.settleH) : 0, confirmed: !!o.confirmed,
    }
    if (o.reviewH) {
      x.reviewPhotos = [imgReview(p, 0), imgProduct(p, 1), imgReview(p, 2)].slice(0, o.nReview || 3)
      x.reviewAt = ago(o.reviewH)
      x.reviewStatus = o.reviewStatus || "검수대기"
    }
    return x
  }
  S.subs = [
    mk("x1", "u1", "a1", "p1", 200, { bundle: "b1", reviewH: 120, reviewStatus: "승인", settle: "완료", settleH: 48 }),
    mk("x2", "u1", "a2", "p1", 200, { bundle: "b1", reviewH: 119, reviewStatus: "승인", settle: "완료", settleH: 48, nReview: 2 }),
    mk("x3", "u1", "a1", "p4", 96, { reviewH: 30, reviewStatus: "승인", settle: "대기", twoBuy: true }),
    mk("x4", "u1", "a1", "p5", 50, { buyStatus: "승인" }),
    mk("x5", "u1", "a2", "p2", 20, { buyStatus: "수정요청", buyMemo: "주문 완료 화면에 결제금액이 보이지 않습니다. 금액이 나오도록 다시 캡처해 주세요." }),
    mk("x6", "u1", "a1", "p3", 70, { reviewH: 6 }),
    mk("y1", "u2", "a3", "p1", 150, { reviewH: 100, reviewStatus: "승인", settle: "완료", settleH: 70, confirmed: true }),
    mk("y2", "u2", "a3", "p6", 40, { reviewH: 10, nReview: 2 }),
    mk("y3", "u3", "a4", "p5", 30, { bundle: "b2", twoBuy: true }),
    mk("y4", "u3", "a5", "p5", 30, { bundle: "b2" }),
    mk("y5", "u3", "a4", "p8", 80, { reviewH: 26, reviewStatus: "승인", settle: "대기" }),
    mk("y6", "u4", "a6", "p7", 12),
    mk("y7", "u4", "a6", "p2", 130, { reviewH: 75, reviewStatus: "승인", settle: "완료", settleH: 30, confirmed: true }),
    mk("y8", "u5", "a7", "p3", 5, { twoBuy: true }),
    mk("y9", "u5", "a7", "p4", 60, { reviewH: 2 }),
  ]

  /* 설정: 진행자별 설문 항목 → 시트 열 매핑 */
  var COLS = [
    ["A", "접수일"], ["B", "진행자"], ["C", "플랫폼"], ["D", "리뷰유형"], ["E", "키워드"], ["F", "결제금액"],
    ["G", "판매자"], ["H", "상품명"], ["I", "옵션"], ["J", "구매사진"], ["K", "리뷰"], ["L", "구매예정"],
    ["M", "주문자"], ["N", "수취인"], ["O", "이메일주소"], ["P", "연락처"], ["Q", "주소"], ["R", "주문번호"],
    ["S", "은행"], ["T", "계좌"], ["U", "예금주"], ["V", "리뷰비"], ["W", "입금"],
  ]
  var FIELDS = [
    { k: "company", label: "업체명", req: true, desc: "행 찾기 기준", def: "G" },
    { k: "product", label: "품명", req: true, desc: "행 찾기 기준", def: "H" },
    { k: "buyer", label: "구매자", req: true, desc: "행 찾기 기준 · 배정 시 1:1 매핑", def: "L" },
    { k: "settle", label: "정산(입금) 열", req: true, descHtml: "☑ 이면 리뷰어에게 '정산 완료' 표시", def: "W" },
    { k: "reviewChk", label: "리뷰사진 체크 열", req: true, descHtml: '<b class="font-semibold text-foreground">리뷰제출</b> 시 사진 있으면 ☑ TRUE (예: K열)', def: "K" },
    { k: "buyChk", label: "구매사진 체크 열", req: false, hl: true, descHtml: '<b class="font-semibold text-foreground">구매제출(1단계)</b> 시 구매사진 있으면 ☑ TRUE. 리뷰 체크 열과 다른 열을 지정해 주세요.', def: "" },
    { k: "orderer", label: "주문자", desc: "리뷰어 입력", def: "M" },
    { k: "recipient", label: "수취인", desc: "리뷰어 입력", def: "N" },
    { k: "email", label: "이메일주소", desc: "리뷰어 입력", def: "O" },
    { k: "phone", label: "연락처", desc: "리뷰어 입력", def: "P" },
    { k: "address", label: "주소", desc: "리뷰어 입력", def: "Q" },
    { k: "amount", label: "금액", desc: "명의별 금액 · 일괄 금액", def: "F" },
    { k: "bank", label: "계좌", desc: "부계정(명의) 정산 계좌", def: "T" },
    { k: "holder", label: "예금주", desc: "부계정(명의) 예금주", def: "U" },
  ]
  function mapFor(sid) {
    if (!S.mapping[sid]) {
      var m = {}
      var connected = staffOf(sid) && staffOf(sid).sheet
      FIELDS.forEach(function (f, i) { m[f.k] = connected ? f.def : i < 3 ? f.def : "" })
      if (sid === "s2") m.buyChk = "J"
      S.mapping[sid] = m
    }
    return S.mapping[sid]
  }
  S.staff.forEach(function (s) { mapFor(s.id) })
  function colLabel(c) {
    if (!c) return "기록 안 함"
    var f = COLS.filter(function (x) { return x[0] === c })[0]
    return f ? f[0] + " · " + f[1] : c
  }

  /* ───────── 상태 계산 ───────── */
  function rstat(x) {
    if (x.settle === "완료") return "정산완료"
    if (x.settle === "대기") return "정산대기"
    if (x.reviewAt) return "리뷰완료"
    return "리뷰대기"
  }
  function settleAmt(x) { return x.amount + prod(x.pid).fee }
  function badge(text, tone) {
    var cls = {
      ok: "bg-[var(--status-approved-bg)] text-[var(--status-approved-text)]",
      wait: "bg-[var(--status-pending-bg)] text-[var(--status-pending-text)]",
      bad: "bg-destructive/10 text-destructive",
      info: "bg-blue-50 text-blue-700",
      mute: "bg-muted text-muted-foreground",
      ind: "bg-indigo-50 text-indigo-700",
    }[tone || "mute"]
    return '<span class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap ' + cls + '">' + e(text) + "</span>"
  }
  function statBadge(s) {
    return badge(s, { 정산완료: "ok", 정산대기: "wait", 리뷰완료: "info", 리뷰대기: "mute" }[s])
  }
  function chkBadge(s) {
    if (!s) return ""
    return badge(s === "검수대기" ? "검수 대기" : s === "승인" ? "승인" : "수정 요청", { 검수대기: "wait", 승인: "ok", 수정요청: "bad" }[s])
  }

  /* ───────── 공용 조각 ───────── */
  var INPUT = "h-10 w-full rounded-lg border border-input bg-card px-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring/20"
  var BTN = "inline-flex items-center justify-center gap-1.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
  var BTN_P = BTN + " h-10 px-4 bg-primary text-primary-foreground hover:bg-primary/90"
  var BTN_O = BTN + " h-10 px-4 border bg-card text-foreground hover:bg-muted"
  var BTN_SP = BTN + " h-8 px-3 bg-primary text-primary-foreground hover:bg-primary/90"
  var BTN_SO = BTN + " h-8 px-3 border bg-card text-foreground hover:bg-muted"
  var BTN_SD = BTN + " h-8 px-3 border border-destructive/30 bg-card text-destructive hover:bg-destructive/10"

  function selectBox(id, act, key, value, opts, extra) {
    return (
      '<div class="relative ' + (extra || "") + '"><select id="' + e(id) + '" data-change="' + act + '" data-k="' + e(key) + '" class="h-10 w-full appearance-none rounded-lg border border-input bg-card pl-3 pr-9 text-sm font-medium cursor-pointer focus:outline-none focus:border-primary">' +
      opts.map(function (o) { return '<option value="' + e(o[0]) + '"' + (String(o[0]) === String(value) ? " selected" : "") + ">" + e(o[1]) + "</option>" }).join("") +
      '</select><span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">' + ic("chevDown") + "</span></div>"
    )
  }
  function searchBox(id, key, value, ph, extra) {
    return (
      '<div class="relative ' + (extra || "") + '"><span class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">' + ic("search") + "</span>" +
      '<input id="' + e(id) + '" data-input="q" data-k="' + e(key) + '" value="' + e(value) + '" placeholder="' + e(ph) + '" class="h-11 w-full rounded-xl border bg-card pl-10 pr-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring/20"></div>'
    )
  }
  function pill(label, active, key, val) {
    return '<button type="button" data-act="pick" data-k="' + e(key) + '" data-v="' + e(val) + '" class="h-9 px-4 rounded-full border text-sm whitespace-nowrap transition-colors cursor-pointer ' + (active ? "bg-primary text-primary-foreground border-primary font-semibold" : "bg-card text-foreground hover:bg-muted") + '">' + e(label) + "</button>"
  }
  function staffOpts(all) {
    return [["", all || "전체 진행자"]].concat(S.staff.map(function (s) { return [s.id, s.name] }))
  }
  function thumb(src, cls, attrs) {
    return '<img src="' + e(src) + '" alt="" class="object-cover ' + (cls || "") + '" ' + (attrs || "") + ">"
  }
  function emptyBox(t) {
    return '<div class="rounded-2xl border border-dashed bg-card py-12 text-center text-sm text-muted-foreground">' + e(t) + "</div>"
  }

  /* ───────── 로그인 ───────── */
  function viewLogin() {
    return (
      '<main class="min-h-screen bg-background flex items-center justify-center px-4 py-12">' +
      '<div class="w-full max-w-sm">' +
      '<div class="flex flex-col items-center gap-3 mb-6"><span class="size-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">R</span>' +
      '<div class="text-center"><h1 class="text-xl font-bold tracking-tight">리뷰웨이 ERP</h1><p class="text-sm text-muted-foreground mt-1">(가상) 리뷰웨이 리뷰·정산 관리 시스템</p></div></div>' +
      '<form data-submit="login" class="rounded-2xl border bg-card p-6 shadow-sm space-y-4">' +
      '<h2 class="text-base font-semibold">리뷰어 로그인</h2>' +
      '<div><label class="block text-sm font-medium mb-1.5" for="lg-id">아이디</label><input id="lg-id" name="id" value="serin_demo" class="' + INPUT + '"></div>' +
      '<div><label class="block text-sm font-medium mb-1.5" for="lg-pw">비밀번호</label><input id="lg-pw" name="pw" type="password" value="demo1234" class="' + INPUT + '"></div>' +
      '<button type="submit" class="' + BTN_P + ' w-full h-11">로그인</button>' +
      '<div class="flex items-center justify-center gap-3 text-xs text-muted-foreground">' +
      '<button type="button" data-act="soon" data-t="회원가입" class="hover:text-foreground cursor-pointer">회원가입</button><span class="text-border">|</span>' +
      '<button type="button" data-act="soon" data-t="아이디 찾기" class="hover:text-foreground cursor-pointer">아이디 찾기</button><span class="text-border">|</span>' +
      '<button type="button" data-act="soon" data-t="비밀번호 재설정" class="hover:text-foreground cursor-pointer">비밀번호 재설정</button></div>' +
      "</form>" +
      '<div class="mt-4 rounded-2xl border bg-card p-4 flex items-center justify-between gap-3">' +
      '<div class="min-w-0"><p class="text-sm font-semibold">관리자 화면</p><p class="text-xs text-muted-foreground mt-0.5">직원·검수·정산·시트 매핑</p></div>' +
      '<a href="#/a/staff" class="' + BTN_O + '">' + ic("shield") + "관리자로 보기</a></div>" +
      '<p class="text-center text-xs text-muted-foreground mt-4">체험판: 아이디·비밀번호가 미리 채워져 있습니다.</p>' +
      "</div></main>"
    )
  }

  /* ───────── 리뷰어 화면 ───────── */
  var RTABS = [
    ["products", "상품 목록", "pkg"],
    ["list", "내가 쓴 목록", "list"],
    ["guide", "리뷰 가이드", "book"],
    ["accounts", "부계정 관리", "users"],
    ["me", "내 정보 수정", "user"],
  ]
  function rLayout(active, body) {
    var u = me()
    return (
      '<div class="min-h-screen bg-background text-foreground">' +
      '<header class="sticky top-0 z-30 border-b bg-card/80 backdrop-blur">' +
      '<div class="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between gap-3">' +
      '<a href="#/r/products" class="flex items-center gap-2 min-w-0"><span class="size-8 shrink-0 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">R</span><span class="font-bold truncate">리뷰웨이</span><span class="hidden sm:block text-xs text-muted-foreground">리뷰어</span></a>' +
      '<div class="flex items-center gap-2"><span class="hidden sm:block text-sm text-muted-foreground">' + e(u.name) + ' 님</span>' +
      '<a href="#/a/photos" class="' + BTN_SO + '">' + ic("swap", "size-3.5 shrink-0") + "관리자 화면</a>" +
      '<a href="#/" class="' + BTN + ' h-8 px-2 text-muted-foreground hover:text-foreground" aria-label="로그아웃">' + ic("logout") + "</a></div></div>" +
      '<nav class="max-w-3xl mx-auto px-2 flex gap-1 overflow-x-auto">' +
      RTABS.map(function (t) {
        var on = t[0] === active
        return '<a href="#/r/' + t[0] + '" class="flex items-center gap-1.5 px-3 py-3 text-sm whitespace-nowrap border-b-2 transition-colors ' + (on ? "border-primary text-primary font-semibold" : "border-transparent text-muted-foreground hover:text-foreground") + '">' + ic(t[2], "size-4 shrink-0") + e(t[1]) + "</a>"
      }).join("") +
      "</nav></header>" +
      '<main class="max-w-3xl mx-auto px-4 py-6 space-y-4">' + body + '<div class="h-24"></div></main></div>'
    )
  }
  function pageHead(title, sub, right) {
    return '<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"><div><h1 class="text-2xl font-bold tracking-tight">' + e(title) + '</h1><p class="text-sm text-muted-foreground mt-1">' + e(sub) + "</p></div>" + (right || "") + "</div>"
  }
  function mySubs() { return S.subs.filter(function (x) { return x.rid === S.me }) }

  function viewProducts() {
    var q = S.ui.rq.trim().toLowerCase()
    var list = S.products.filter(function (p) {
      if (S.ui.rstaff && p.staff !== S.ui.rstaff) return false
      if (!q) return true
      return (p.company + " " + p.name + " " + p.kw).toLowerCase().indexOf(q) >= 0
    })
    var mine = mySubs()
    var body =
      pageHead("상품 목록", "참여할 상품을 고르고 구매 후 구매제출을 해 주세요.") +
      '<div class="flex flex-col sm:flex-row gap-2">' + searchBox("rq", "rq", S.ui.rq, "업체명·상품명·키워드 검색", "flex-1") + selectBox("rstaff", "set", "rstaff", S.ui.rstaff, staffOpts(), "sm:w-44") + "</div>" +
      '<p class="text-xs text-muted-foreground">상품 ' + list.length + "개</p>" +
      (list.length ? '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">' + list.map(function (p) {
        var used = S.subs.filter(function (x) { return x.pid === p.id }).length
        var joined = mine.filter(function (x) { return x.pid === p.id }).length
        var left = Math.max(0, p.slots - used)
        return (
          '<div class="rounded-2xl border bg-card p-4 flex flex-col gap-3">' +
          '<div class="flex gap-3">' + thumb(imgProduct(p), "size-20 rounded-xl border shrink-0") +
          '<div class="min-w-0 flex-1"><div class="flex items-center gap-1.5 text-xs text-muted-foreground"><span class="truncate">' + e(p.company) + "</span><span>·</span><span>" + e(p.platform) + "</span></div>" +
          '<p class="font-semibold leading-snug mt-0.5 line-clamp-2">' + e(p.name) + "</p>" +
          '<div class="flex flex-wrap items-center gap-1 mt-1.5">' + badge("#" + p.kw, "info") + badge(p.type, p.type === "구매리뷰" ? "ind" : "mute") + (joined ? badge("참여 " + joined + "건", "ok") : "") + "</div></div></div>" +
          '<div class="grid grid-cols-3 gap-2 rounded-xl bg-muted/50 p-3 text-center">' +
          '<div><p class="text-[11px] text-muted-foreground">결제금액</p><p class="text-sm font-semibold tabular-nums">' + won(p.price) + "</p></div>" +
          '<div><p class="text-[11px] text-muted-foreground">리뷰비</p><p class="text-sm font-semibold tabular-nums text-primary">+' + won(p.fee) + "</p></div>" +
          '<div><p class="text-[11px] text-muted-foreground">남은 자리</p><p class="text-sm font-semibold tabular-nums">' + left + "/" + p.slots + "</p></div></div>" +
          '<div class="flex items-center justify-between gap-2"><span class="text-xs text-muted-foreground">진행자 ' + e(staffOf(p.staff).name) + "</span>" +
          '<div class="flex gap-1.5"><a href="#/r/guide?p=' + e(p.id) + '" class="' + BTN_SO + '">리뷰 가이드</a><a href="#/r/buy?p=' + e(p.id) + '" class="' + BTN_SP + '">구매제출</a></div></div></div>'
        )
      }).join("") + "</div>" : emptyBox("검색 결과가 없습니다."))
    return rLayout("products", body)
  }

  function initDraft(p) {
    var accs = {}
    accs[me().accounts[0].id] = true
    S.draft = { pid: p.id, accs: accs, amts: {}, bulk: "", change: false, phone: me().phone, address: me().address, photos: [] }
  }
  function viewBuy(q) {
    var p = prod(q.p)
    if (!p) return viewProducts()
    if (!S.draft || S.draft.pid !== p.id) initDraft(p)
    var d = S.draft, u = me()
    var chosen = u.accounts.filter(function (a) { return d.accs[a.id] })
    var total = chosen.reduce(function (s, a) { return s + (Number(d.amts[a.id] == null ? p.price : d.amts[a.id]) || 0) }, 0)
    var sec = function (n, t, sub, inner) {
      return '<section class="rounded-2xl border bg-card p-5 space-y-3"><div><h2 class="font-semibold flex items-center gap-2"><span class="size-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">' + n + "</span>" + e(t) + "</h2>" + (sub ? '<p class="text-xs text-muted-foreground mt-1">' + e(sub) + "</p>" : "") + "</div>" + inner + "</section>"
    }
    var body =
      '<a href="#/r/products" class="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">' + ic("chevLeft") + "상품 목록</a>" +
      pageHead("구매제출", "주문을 마친 뒤 주문 완료 화면을 올려 주세요. 검수 후 리뷰 단계로 넘어갑니다.") +
      '<div class="rounded-2xl border bg-card p-4 flex gap-3 items-center">' + thumb(imgProduct(p), "size-16 rounded-xl border shrink-0") +
      '<div class="min-w-0 flex-1"><p class="text-xs text-muted-foreground">' + e(p.company) + " · 진행자 " + e(staffOf(p.staff).name) + '</p><p class="font-semibold truncate">' + e(p.name) + '</p><p class="text-xs text-muted-foreground mt-0.5">키워드 <b class="font-semibold text-foreground">' + e(p.kw) + "</b> · 결제금액 " + won(p.price) + "</p></div></div>" +
      sec(1, "명의 선택", "여러 명의를 고르면 한 번에 묶어서 제출됩니다. 명의마다 따로 주문해 주세요.",
        '<div class="space-y-2">' + u.accounts.map(function (a) {
          var on = !!d.accs[a.id]
          return '<label class="flex items-center gap-3 rounded-xl border p-3 cursor-pointer transition-colors ' + (on ? "border-primary bg-primary/5" : "hover:bg-muted/50") + '">' +
            '<input type="checkbox" data-change="toggleAcc" data-id="' + e(a.id) + '" class="size-4 accent-primary"' + (on ? " checked" : "") + ">" +
            '<div class="min-w-0 flex-1"><p class="text-sm font-semibold">' + e(a.name) + (a.id === u.accounts[0].id ? ' <span class="text-xs font-normal text-muted-foreground">(본인)</span>' : "") + "</p>" +
            '<p class="text-xs text-muted-foreground truncate">예금주 ' + e(a.holder) + " · " + e(a.bank) + " " + e(a.acct) + "</p></div>" +
            (a.key ? badge("매칭키 " + a.key, "info") : badge("매칭 대기", "wait")) + "</label>"
        }).join("") + "</div>" +
        '<a href="#/r/accounts" class="inline-flex items-center gap-1 text-xs text-primary hover:underline">' + ic("plus", "size-3.5 shrink-0") + "부계정 추가하기</a>") +
      sec(2, "명의별 금액", "실제 결제한 금액을 적어 주세요. 같은 금액이면 일괄 금액으로 한 번에 넣을 수 있습니다.",
        '<div class="flex gap-2"><input id="buy-bulk" data-input="d" name="bulk" inputmode="numeric" value="' + e(d.bulk) + '" placeholder="일괄 금액 (예: ' + p.price + ')" class="' + INPUT + '"><button type="button" data-act="applyBulk" class="' + BTN_O + '">전체 적용</button></div>' +
        (chosen.length ? '<div class="divide-y rounded-xl border">' + chosen.map(function (a) {
          var v = d.amts[a.id] == null ? p.price : d.amts[a.id]
          return '<div class="flex items-center justify-between gap-3 px-3 py-2.5"><div class="min-w-0"><p class="text-sm font-medium">' + e(a.name) + '</p><p class="text-xs text-muted-foreground">주문자·수취인 ' + e(a.name) + "</p></div>" +
            '<div class="relative w-36 shrink-0"><input id="amt-' + e(a.id) + '" data-input="amt" data-id="' + e(a.id) + '" inputmode="numeric" value="' + e(v) + '" class="' + INPUT + ' pr-8 text-right tabular-nums"><span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">원</span></div></div>'
        }).join("") + '<div class="flex items-center justify-between px-3 py-2.5 bg-muted/50"><span class="text-sm text-muted-foreground">합계 ' + chosen.length + '건</span><span id="buy-total" class="text-sm font-bold tabular-nums">' + won(total) + "</span></div></div>" : '<p class="text-sm text-muted-foreground">명의를 먼저 골라 주세요.</p>')) +
      sec(3, "배송지", "기본 배송지는 내 정보의 연락처·주소를 씁니다.",
        '<label class="flex items-center gap-2 text-sm cursor-pointer"><input type="checkbox" data-change="toggleAddr" class="size-4 accent-primary"' + (d.change ? " checked" : "") + ">이번 배송지만 변경</label>" +
        '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label class="block text-xs font-medium text-muted-foreground mb-1" for="buy-phone">연락처</label><input id="buy-phone" data-input="d" name="phone" value="' + e(d.change ? d.phone : u.phone) + '" class="' + INPUT + (d.change ? "" : " bg-muted text-muted-foreground") + '"' + (d.change ? "" : " readonly") + "></div>" +
        '<div><label class="block text-xs font-medium text-muted-foreground mb-1" for="buy-addr">주소</label><input id="buy-addr" data-input="d" name="address" value="' + e(d.change ? d.address : u.address) + '" class="' + INPUT + (d.change ? "" : " bg-muted text-muted-foreground") + '"' + (d.change ? "" : " readonly") + "></div></div>") +
      sec(4, "구매 사진", "주문 완료 화면(결제금액·주문번호가 보이게)을 올려 주세요. 체험판에서는 예시 그림이 올라갑니다.",
        '<div class="flex flex-wrap gap-2">' + d.photos.map(function (src, i) {
          return '<div class="relative">' + thumb(src, "size-24 rounded-lg border") + '<button type="button" data-act="rmBuyPhoto" data-i="' + i + '" class="absolute -right-1.5 -top-1.5 size-6 rounded-full bg-foreground text-background flex items-center justify-center cursor-pointer" aria-label="사진 빼기">' + ic("x", "size-3.5 shrink-0") + "</button></div>"
        }).join("") +
        (d.photos.length < 5 ? '<button type="button" data-act="addBuyPhoto" class="size-24 rounded-lg border-[1.5px] border-dashed flex flex-col items-center justify-center gap-1 text-xs text-muted-foreground hover:border-primary/50 hover:text-primary cursor-pointer">' + ic("camera", "size-5 shrink-0") + "사진 추가</button>" : "") + "</div>") +
      '<div class="flex flex-col-reverse sm:flex-row sm:justify-end gap-2"><a href="#/r/products" class="' + BTN_O + '">취소</a><button type="button" data-act="submitBuy" class="' + BTN_P + ' sm:w-56">' +
      (chosen.length > 1 ? "묶어서 제출 (" + chosen.length + "건)" : "구매제출") + "</button></div>"
    return rLayout("products", body)
  }

  function viewList() {
    var mine = mySubs().slice().sort(function (a, b) { return Math.max(b.buyAt, b.reviewAt) - Math.max(a.buyAt, a.reviewAt) })
    var cnt = { 리뷰대기: 0, 리뷰완료: 0, 정산대기: 0, 정산완료: 0 }
    var sum = { 정산대기: 0, 정산완료: 0 }
    mine.forEach(function (x) { var s = rstat(x); cnt[s]++; if (sum[s] != null) sum[s] += settleAmt(x) })
    var q = S.ui.lq.trim().toLowerCase()
    var list = mine.filter(function (x) {
      var p = prod(x.pid)
      if (S.ui.lstat && rstat(x) !== S.ui.lstat) return false
      if (S.ui.lstaff && p.staff !== S.ui.lstaff) return false
      if (S.ui.lacc && x.aid !== S.ui.lacc) return false
      if (q && (p.company + " " + p.name + " " + p.kw).toLowerCase().indexOf(q) < 0) return false
      return true
    })
    var u = me()
    var card = function (label, n, extra, key) {
      var on = S.ui.lstat === key
      return '<button type="button" data-act="pick" data-k="lstat" data-v="' + (on ? "" : key) + '" class="rounded-2xl border bg-card p-4 text-left transition-colors cursor-pointer ' + (on ? "border-primary bg-primary/5" : "hover:bg-muted/50") + '">' +
        '<p class="text-xs text-muted-foreground">' + e(label) + '</p><p class="text-xl font-bold tabular-nums mt-1">' + n + '<span class="text-sm font-medium text-muted-foreground">건</span></p>' + (extra ? '<p class="text-xs font-medium tabular-nums mt-0.5 ' + (key === "정산완료" ? "text-emerald-700" : "text-amber-700") + '">' + extra + "</p>" : '<p class="text-xs mt-0.5 text-muted-foreground">&nbsp;</p>') + "</button>"
    }
    var body =
      pageHead("내가 쓴 목록", "구매제출부터 정산까지 진행 상황을 확인합니다.") +
      '<div class="grid grid-cols-2 lg:grid-cols-4 gap-3">' + card("리뷰대기", cnt.리뷰대기, "", "리뷰대기") + card("리뷰완료", cnt.리뷰완료, "", "리뷰완료") + card("정산대기", cnt.정산대기, won(sum.정산대기), "정산대기") + card("정산완료", cnt.정산완료, won(sum.정산완료), "정산완료") + "</div>" +
      '<div class="flex flex-col sm:flex-row gap-2">' + searchBox("lq", "lq", S.ui.lq, "업체명·상품명·키워드 검색", "flex-1") +
      '<div class="grid grid-cols-2 gap-2">' + selectBox("lstaff", "set", "lstaff", S.ui.lstaff, staffOpts(), "sm:w-36") + selectBox("lacc", "set", "lacc", S.ui.lacc, [["", "전체 수취인"]].concat(u.accounts.map(function (a) { return [a.id, a.name] })), "sm:w-36") + "</div></div>" +
      '<div class="flex gap-1.5 overflow-x-auto pb-1">' + [["", "전체"], ["리뷰대기", "리뷰대기"], ["리뷰완료", "리뷰완료"], ["정산대기", "정산대기"], ["정산완료", "정산완료"]].map(function (o) { return pill(o[1], S.ui.lstat === o[0], "lstat", o[0]) }).join("") + "</div>" +
      (list.length ? '<div class="space-y-3">' + list.map(listItem).join("") + "</div>" : emptyBox("조건에 맞는 내역이 없습니다."))
    return rLayout("list", body)
  }
  function listItem(x) {
    var p = prod(x.pid), a = account(x.aid), st = rstat(x)
    var step = function (label, t, on, extra) {
      return '<div class="flex-1 min-w-0"><div class="flex items-center gap-1.5"><span class="size-2 rounded-full ' + (on ? "bg-primary" : "bg-border") + '"></span><span class="text-xs font-medium ' + (on ? "text-foreground" : "text-muted-foreground") + '">' + e(label) + "</span></div>" +
        '<p class="text-[11px] text-muted-foreground mt-0.5 pl-4 truncate">' + (t ? e(fmtD(t)) : "-") + "</p>" + (extra ? '<div class="pl-4 mt-1">' + extra + "</div>" : "") + "</div>"
    }
    var acts = []
    if (x.buyStatus === "수정요청") acts.push('<button type="button" data-act="rebuy" data-id="' + e(x.id) + '" class="' + BTN_SP + '">' + ic("camera", "size-3.5 shrink-0") + "구매 사진 다시 제출</button>")
    if (!x.reviewAt && x.buyStatus !== "수정요청") acts.push('<a href="#/r/review?s=' + e(x.id) + '" class="' + BTN_SP + '">리뷰 제출</a>')
    if (x.reviewStatus === "수정요청") acts.push('<a href="#/r/review?s=' + e(x.id) + '" class="' + BTN_SP + '">리뷰 다시 제출</a>')
    if (!x.reviewAt) acts.push('<button type="button" data-act="askCancel" data-id="' + e(x.id) + '" class="' + BTN_SD + '">구매제출 취소</button>')
    if (x.settle === "완료") acts.push(x.confirmed ? '<span class="inline-flex items-center gap-1 text-xs font-medium text-emerald-700">' + ic("checkCircle", "size-3.5 shrink-0") + "정산 확인함</span>" : '<button type="button" data-act="confirmSettle" data-id="' + e(x.id) + '" class="' + BTN_SO + '">' + ic("check", "size-3.5 shrink-0") + "정산 확인</button>")
    var memo = ""
    if (x.buyStatus === "수정요청" || x.reviewStatus === "수정요청")
      memo = '<div class="rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm"><p class="font-semibold text-destructive flex items-center gap-1.5">' + ic("alert") + "관리자 수정 요청</p><p class=\"text-foreground/80 mt-1\">" + e(x.buyStatus === "수정요청" ? x.buyMemo : x.reviewMemo) + "</p></div>"
    var cancel = S.ui.cancelId === x.id
      ? '<div class="rounded-xl bg-muted/50 p-3 flex flex-wrap items-center justify-between gap-2"><span class="text-sm">이 구매제출을 취소할까요? 올린 사진도 함께 지워집니다.</span><div class="flex gap-1.5"><button type="button" data-act="pick" data-k="cancelId" data-v="" class="' + BTN_SO + '">아니요</button><button type="button" data-act="doCancel" data-id="' + e(x.id) + '" class="' + BTN + ' h-8 px-3 bg-destructive text-white hover:bg-destructive/90">취소하기</button></div></div>'
      : ""
    return (
      '<article class="rounded-2xl border bg-card p-4 space-y-3">' +
      '<div class="flex gap-3">' + thumb(imgProduct(p), "size-16 rounded-xl border shrink-0") +
      '<div class="min-w-0 flex-1"><div class="flex items-start justify-between gap-2"><div class="min-w-0"><p class="text-xs text-muted-foreground truncate">' + e(p.company) + " · 진행자 " + e(staffOf(p.staff).name) + '</p><p class="font-semibold leading-snug truncate">' + e(p.name) + "</p></div>" + statBadge(st) + "</div>" +
      '<div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs text-muted-foreground"><span>명의 <b class="font-semibold text-foreground">' + e(a ? a.name : "-") + "</b></span><span>금액 <b class=\"font-semibold text-foreground tabular-nums\">" + won(x.amount) + "</b></span>" +
      (x.settle ? '<span>정산 <b class="font-semibold text-foreground tabular-nums">' + won(settleAmt(x)) + "</b></span>" : "") + (x.bundle ? badge("묶음 제출", "mute") : "") + "</div></div></div>" +
      '<div class="flex gap-2 rounded-xl bg-muted/50 px-3 py-2.5">' +
      step("구매제출", x.buyAt, true, chkBadge(x.buyStatus)) + step("리뷰 제출", x.reviewAt, !!x.reviewAt, chkBadge(x.reviewStatus)) + step("정산", x.settledAt, x.settle === "완료", x.settle ? badge(x.settle === "완료" ? "정산완료" : "정산대기", x.settle === "완료" ? "ok" : "wait") : "") +
      "</div>" + memo + cancel +
      (acts.length ? '<div class="flex flex-wrap items-center justify-end gap-1.5">' + acts.join("") + "</div>" : "") +
      "</article>"
    )
  }

  function viewReview(q) {
    var x = subOf(q.s)
    if (!x || x.rid !== S.me) return viewList()
    var p = prod(x.pid), a = account(x.aid)
    if (!S.rdraft || S.rdraft.sid !== x.id) S.rdraft = { sid: x.id, photos: [], link: "" }
    var d = S.rdraft
    var body =
      '<a href="#/r/list" class="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">' + ic("chevLeft") + "내가 쓴 목록</a>" +
      pageHead("리뷰 제출", "작성한 리뷰 화면을 캡처해 올려 주세요. 검수가 끝나면 정산대기로 바뀝니다.") +
      '<div class="rounded-2xl border bg-card p-4 flex gap-3 items-center">' + thumb(imgProduct(p), "size-16 rounded-xl border shrink-0") +
      '<div class="min-w-0 flex-1"><p class="text-xs text-muted-foreground">' + e(p.company) + " · 명의 " + e(a.name) + '</p><p class="font-semibold truncate">' + e(p.name) + '</p><p class="text-xs text-muted-foreground mt-0.5">구매제출 ' + e(fmtD(x.buyAt)) + " · " + won(x.amount) + "</p></div>" + chkBadge(x.buyStatus) + "</div>" +
      (x.reviewStatus === "수정요청" ? '<div class="rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm"><p class="font-semibold text-destructive">관리자 수정 요청</p><p class="mt-1 text-foreground/80">' + e(x.reviewMemo) + "</p></div>" : "") +
      '<section class="rounded-2xl border bg-card p-5 space-y-3"><div><h2 class="font-semibold">리뷰 사진</h2><p class="text-xs text-muted-foreground mt-1">별점·본문·사진이 함께 보이게 캡처해 주세요. 체험판에서는 예시 그림이 올라갑니다.</p></div>' +
      '<div class="flex flex-wrap gap-2">' + d.photos.map(function (src, i) {
        return '<div class="relative">' + thumb(src, "size-24 rounded-lg border") + '<button type="button" data-act="rmRvPhoto" data-i="' + i + '" class="absolute -right-1.5 -top-1.5 size-6 rounded-full bg-foreground text-background flex items-center justify-center cursor-pointer" aria-label="사진 빼기">' + ic("x", "size-3.5 shrink-0") + "</button></div>"
      }).join("") +
      (d.photos.length < 6 ? '<button type="button" data-act="addRvPhoto" class="size-24 rounded-lg border-[1.5px] border-dashed flex flex-col items-center justify-center gap-1 text-xs text-muted-foreground hover:border-primary/50 hover:text-primary cursor-pointer">' + ic("camera", "size-5 shrink-0") + "사진 추가</button>" : "") + "</div>" +
      '<div><label class="block text-xs font-medium text-muted-foreground mb-1" for="rv-link">리뷰 주소 (선택)</label><input id="rv-link" data-input="rd" name="link" value="' + e(d.link) + '" placeholder="리뷰 글 주소를 붙여 넣어 주세요" class="' + INPUT + '"></div></section>' +
      '<div class="rounded-2xl bg-primary/5 border border-primary/15 p-4 text-sm"><p class="font-semibold text-primary">리뷰 가이드 요약</p><ul class="list-disc pl-4 mt-1.5 space-y-0.5 text-foreground/80">' + guideOf(p).slice(3).map(function (g) { return "<li>" + e(g) + "</li>" }).join("") + "</ul></div>" +
      '<div class="flex flex-col-reverse sm:flex-row sm:justify-end gap-2"><a href="#/r/list" class="' + BTN_O + '">취소</a><button type="button" data-act="submitReview" class="' + BTN_P + ' sm:w-56">리뷰 제출</button></div>'
    return rLayout("list", body)
  }

  function guideOf(p) {
    return [
      (p.platform === "자사몰" ? "자사몰" : p.platform) + '에서 "' + p.kw + '" 검색 → ' + p.short + " 상품 찾기",
      "상품 찜하기 · 상세페이지 3분 이상 둘러보기",
      "결제 후 주문 완료 화면 캡처 → 구매제출 (명의마다 따로 주문)",
      "수령 3일 뒤 포토리뷰 작성 · 사진 3장 이상, 본문 150자 이상",
      "리뷰 등록 화면 캡처 → 리뷰 제출",
      "리뷰 검수 후 영업일 3일 안에 명의 계좌로 정산",
    ]
  }
  function viewGuide(q) {
    if (q.p && prod(q.p)) S.ui.guide = q.p
    var p = prod(S.ui.guide) || S.products[0]
    var body =
      pageHead("리뷰 가이드", "상품마다 진행 순서와 주의할 점이 다릅니다. 참여 전에 꼭 읽어 주세요.") +
      '<div class="flex gap-1.5 overflow-x-auto pb-1">' + S.products.map(function (x) { return pill(x.short, x.id === p.id, "guide", x.id) }).join("") + "</div>" +
      '<div class="rounded-2xl border bg-card overflow-hidden">' +
      '<div class="flex gap-3 items-center p-5 border-b">' + thumb(imgProduct(p), "size-16 rounded-xl border shrink-0") +
      '<div class="min-w-0"><p class="text-xs text-muted-foreground">' + e(p.company) + " · " + e(p.platform) + " · 진행자 " + e(staffOf(p.staff).name) + '</p><p class="font-semibold">' + e(p.name) + '</p><div class="flex gap-1 mt-1">' + badge("#" + p.kw, "info") + badge(p.type, p.type === "구매리뷰" ? "ind" : "mute") + "</div></div></div>" +
      '<ol class="divide-y">' + guideOf(p).map(function (g, i) {
        return '<li class="flex gap-3 px-5 py-3.5"><span class="size-6 shrink-0 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">' + (i + 1) + '</span><span class="text-sm leading-relaxed">' + e(g) + "</span></li>"
      }).join("") + "</ol>" +
      '<div class="px-5 pb-4"><div class="rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-900"><p class="font-semibold">주의</p><ul class="list-disc pl-4 mt-1 space-y-0.5"><li>체험단·협찬 문구는 넣지 않습니다.</li><li>명의(부계정)마다 다른 배송지로 받으면 안내해 주세요. 구매제출 때 "이번 배송지만 변경"을 쓰면 됩니다.</li><li>구매 사진에 결제금액과 주문번호가 보여야 검수가 끝납니다.</li></ul></div></div>' +
      "</div>" +
      '<div class="flex justify-end"><a href="#/r/buy?p=' + e(p.id) + '" class="' + BTN_P + '">이 상품 구매제출</a></div>'
    return rLayout("guide", body)
  }

  function viewAccounts() {
    var u = me()
    var body =
      pageHead("부계정 관리", "가족 등 다른 명의로 참여할 때 명의와 정산 계좌를 등록합니다.") +
      '<div class="rounded-2xl border bg-card divide-y">' + u.accounts.map(function (a, i) {
        var used = S.subs.filter(function (x) { return x.aid === a.id }).length
        return '<div class="flex items-center gap-3 p-4"><span class="size-10 shrink-0 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">' + e(a.name.charAt(0)) + "</span>" +
          '<div class="min-w-0 flex-1"><p class="text-sm font-semibold">' + e(a.name) + (i === 0 ? ' <span class="text-xs font-normal text-muted-foreground">(본인)</span>' : "") + '</p><p class="text-xs text-muted-foreground truncate">예금주 ' + e(a.holder) + " · " + e(a.bank) + " " + e(a.acct) + " · 참여 " + used + "건</p></div>" +
          '<div class="flex flex-col items-end gap-1">' + (a.key ? badge("매칭키 " + a.key, "info") : badge("관리자 매칭 대기", "wait")) +
          (i > 0 && !used ? '<button type="button" data-act="rmAcc" data-id="' + e(a.id) + '" class="text-xs text-muted-foreground hover:text-destructive cursor-pointer">삭제</button>' : "") + "</div></div>"
      }).join("") + "</div>" +
      '<form data-submit="addAcc" class="rounded-2xl border bg-card p-5 space-y-3"><h2 class="font-semibold flex items-center gap-1.5">' + ic("plus") + "부계정 추가</h2>" +
      '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">' +
      '<div><label class="block text-xs font-medium text-muted-foreground mb-1" for="ac-name">명의 (주문자·수취인 이름)</label><input id="ac-name" name="name" required placeholder="예: 오다솜" class="' + INPUT + '"></div>' +
      '<div><label class="block text-xs font-medium text-muted-foreground mb-1" for="ac-holder">예금주</label><input id="ac-holder" name="holder" placeholder="비우면 명의와 같음" class="' + INPUT + '"></div>' +
      '<div><label class="block text-xs font-medium text-muted-foreground mb-1" for="ac-bank">은행</label><select id="ac-bank" name="bank" class="' + INPUT + '"><option>누리은행</option><option>가람은행</option><option>한결은행</option></select></div>' +
      '<div><label class="block text-xs font-medium text-muted-foreground mb-1" for="ac-acct">계좌번호</label><input id="ac-acct" name="acct" inputmode="numeric" required placeholder="숫자만 (체험판은 가려서 저장)" class="' + INPUT + '"></div></div>' +
      '<p class="text-xs text-muted-foreground">등록하면 관리자가 시트의 구매자 값(예: ' + e(u.name) + (u.accounts.length + 1) + ")과 1:1로 매칭합니다.</p>" +
      '<div class="flex justify-end"><button type="submit" class="' + BTN_P + '">부계정 등록</button></div></form>'
    return rLayout("accounts", body)
  }

  function viewMe() {
    var u = me(), a = u.accounts[0]
    var f = function (id, label, name, val, extra) {
      return '<div><label class="block text-xs font-medium text-muted-foreground mb-1" for="' + id + '">' + e(label) + '</label><input id="' + id + '" name="' + name + '" value="' + e(val) + '" class="' + INPUT + (extra || "") + '"' + (extra ? " readonly" : "") + "></div>"
    }
    var body =
      pageHead("내 정보 수정", "구매제출 때 기본으로 쓰는 연락처·주소와 정산 계좌입니다.") +
      '<form data-submit="saveMe" class="rounded-2xl border bg-card p-5 space-y-4">' +
      '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">' + f("me-name", "이름", "name", u.name, " bg-muted text-muted-foreground") + f("me-email", "이메일주소", "email", u.email) + f("me-phone", "연락처", "phone", u.phone) + f("me-acct", "계좌 (" + a.bank + ")", "acct", a.acct, " bg-muted text-muted-foreground") + "</div>" +
      f("me-addr", "주소", "address", u.address) +
      f("me-holder", "예금주", "holder", a.holder) +
      '<div class="flex justify-end"><button type="submit" class="' + BTN_P + '">저장</button></div></form>' +
      '<form data-submit="savePw" class="rounded-2xl border bg-card p-5 space-y-3"><h2 class="font-semibold">비밀번호 변경</h2>' +
      '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><div><label class="block text-xs font-medium text-muted-foreground mb-1" for="pw1">새 비밀번호</label><input id="pw1" name="pw1" type="password" class="' + INPUT + '"></div><div><label class="block text-xs font-medium text-muted-foreground mb-1" for="pw2">새 비밀번호 확인</label><input id="pw2" name="pw2" type="password" class="' + INPUT + '"></div></div>' +
      '<div class="flex justify-end"><button type="submit" class="' + BTN_O + '">비밀번호 변경</button></div></form>'
    return rLayout("me", body)
  }

  /* ───────── 관리자 화면 ───────── */
  var ANAV = [
    ["staff", "직원 관리", "users"],
    ["reviewers", "리뷰어 관리", "user"],
    ["photos", "리뷰 제출 사진", "image"],
    ["settle", "정산 관리", "wallet"],
    ["settings", "설정", "settings"],
  ]
  function waitingCount() {
    var n = 0
    S.subs.forEach(function (x) { if (x.buyStatus === "검수대기") n++; if (x.reviewStatus === "검수대기") n++ })
    return n
  }
  function matchCount() {
    var n = S.pending.length
    S.reviewers.forEach(function (r) { r.accounts.forEach(function (a) { if (!a.key) n++ }) })
    return n
  }
  function aLayout(active, body) {
    var w = waitingCount(), m = matchCount()
    var badgeFor = function (k) {
      var n = k === "photos" ? w : k === "reviewers" ? m : k === "settle" ? S.subs.filter(function (x) { return x.settle === "대기" }).length : 0
      return n ? '<span class="ml-auto min-w-5 h-5 px-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold flex items-center justify-center tabular-nums">' + n + "</span>" : ""
    }
    var nav = ANAV.map(function (t) {
      var on = t[0] === active
      return '<a href="#/a/' + t[0] + '" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ' + (on ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "text-sidebar-foreground hover:bg-muted") + '">' + ic(t[2], "size-4.5 shrink-0") + e(t[1]) + badgeFor(t[0]) + "</a>"
    }).join("")
    var mnav = ANAV.map(function (t) {
      var on = t[0] === active
      return '<a href="#/a/' + t[0] + '" class="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm whitespace-nowrap ' + (on ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold" : "text-sidebar-foreground") + '">' + ic(t[2], "size-4 shrink-0") + e(t[1]) + "</a>"
    }).join("")
    return (
      '<div class="admin-theme min-h-screen bg-background text-foreground">' +
      '<aside class="hidden lg:flex fixed inset-y-0 left-0 z-30 w-60 flex-col border-r bg-sidebar px-3 py-5">' +
      '<a href="#/a/staff" class="flex items-center gap-2.5 px-2 mb-8"><span class="size-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">R</span><span class="font-bold">리뷰웨이 ERP</span></a>' +
      '<nav class="flex flex-col gap-1">' + nav + "</nav>" +
      '<div class="mt-auto flex flex-col gap-1">' +
      '<a href="#/r/list" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-primary hover:bg-primary/5">' + ic("swap", "size-4.5 shrink-0") + "리뷰어 화면 보기</a>" +
      '<a href="#/" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-sidebar-foreground/70 hover:bg-muted">' + ic("logout", "size-4.5 shrink-0") + "로그아웃</a></div></aside>" +
      '<div class="demo-lg-hide sticky top-0 z-30 border-b bg-card">' +
      '<div class="flex items-center justify-between gap-2 px-4 h-12"><a href="#/a/staff" class="flex items-center gap-2"><span class="size-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">R</span><span class="font-bold">리뷰웨이 ERP</span></a>' +
      '<a href="#/r/list" class="' + BTN_SO + ' text-primary">' + ic("swap", "size-3.5 shrink-0") + "리뷰어 화면</a></div>" +
      '<nav class="flex gap-1 overflow-x-auto px-3 pb-2.5">' + mnav + "</nav></div>" +
      '<main class="admin-content lg:pl-60"><div class="px-4 py-6 lg:p-8 space-y-5">' + body + "</div></main>" +
      modalHtml() + viewerHtml() +
      "</div>"
    )
  }
  function aHead(title, sub, right) {
    return '<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3"><div><h1 class="text-2xl font-bold tracking-tight">' + e(title) + '</h1><p class="text-sm text-muted-foreground mt-1.5">' + e(sub) + "</p></div>" + (right || "") + "</div>"
  }
  function statCard(icon, tone, label, value, foot) {
    var toneCls = { blue: "bg-blue-50 text-blue-600", red: "bg-red-50 text-red-600", green: "bg-emerald-50 text-emerald-600", amber: "bg-amber-50 text-amber-600" }[tone]
    return '<div class="rounded-2xl border bg-card p-5 min-h-32"><div class="flex items-center gap-2.5"><span class="size-7 rounded-lg flex items-center justify-center ' + toneCls + '">' + ic(icon, "size-4 shrink-0") + '</span><span class="text-sm text-muted-foreground">' + e(label) + '</span></div><p class="text-2xl font-bold tabular-nums mt-3">' + value + "</p>" + (foot || "") + "</div>"
  }
  function avatar(name) {
    return '<span class="size-8 shrink-0 rounded-full bg-accent text-primary flex items-center justify-center text-sm font-semibold">' + e(name.charAt(0)) + "</span>"
  }
  var TH = "px-5 py-3.5 text-left text-xs font-medium text-muted-foreground whitespace-nowrap"
  var TD = "px-5 py-4 text-sm whitespace-nowrap"

  function subsOfStaff(sid) { return S.subs.filter(function (x) { return prod(x.pid).staff === sid }) }

  function viewStaff() {
    var q = S.ui.sq.trim().toLowerCase()
    var list = S.staff.filter(function (s) { return !q || (s.name + " " + s.dept + " " + s.email).toLowerCase().indexOf(q) >= 0 })
    var linked = S.staff.filter(function (s) { return s.sheet }).length
    var body =
      aHead("직원 관리", "직원을 생성하면 설문 폼·구글 시트를 자동 매핑합니다.", '<button type="button" data-act="openModal" data-type="staffNew" class="' + BTN_P + ' h-11 px-5">' + ic("plus") + "직원 생성</button>") +
      '<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">' +
      statCard("user", "blue", "전체 직원", S.staff.length) +
      statCard("file", "red", "누적 응답", S.subs.length, '<a href="#/a/settings?tab=resp" class="inline-flex items-center gap-1 text-xs text-primary mt-2 hover:underline">응답별 로그 보기 ' + ic("arrowRight", "size-3 shrink-0") + "</a>") +
      statCard("checkCircle", "green", "시트 연결됨", linked) + "</div>" +
      searchBox("sq", "sq", S.ui.sq, "이름, 부서, 이메일로 검색...") +
      '<div class="rounded-2xl border bg-card overflow-hidden"><div class="overflow-x-auto"><table class="w-full min-w-[860px]"><thead class="bg-muted/50 border-b"><tr>' +
      ["이름", "부서", "이메일", "설문 항목", "응답", "시트 연결"].map(function (h) { return '<th class="' + TH + '">' + h + "</th>" }).join("") + "</tr></thead><tbody class=\"divide-y\">" +
      (list.length ? list.map(function (s) {
        var m = mapFor(s.id)
        var items = FIELDS.filter(function (f) { return m[f.k] }).length
        return '<tr class="hover:bg-muted/50 cursor-pointer transition-colors" data-act="openStaff" data-id="' + e(s.id) + '">' +
          '<td class="' + TD + '"><div class="flex items-center gap-2.5">' + avatar(s.name) + '<span class="font-medium">' + e(s.name) + "</span></div></td>" +
          '<td class="' + TD + '">' + e(s.dept) + '</td><td class="' + TD + ' text-muted-foreground">' + e(s.email) + "</td>" +
          '<td class="' + TD + ' tabular-nums">' + items + '개</td><td class="' + TD + ' tabular-nums">' + subsOfStaff(s.id).length + "건</td>" +
          '<td class="' + TD + '"><button type="button" data-act="toggleSheet" data-id="' + e(s.id) + '" class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium cursor-pointer ' + (s.sheet ? "bg-emerald-50 text-emerald-700" : "bg-muted text-muted-foreground") + '"><span class="size-1.5 rounded-full ' + (s.sheet ? "bg-emerald-500" : "bg-foreground/20") + '"></span>' + (s.sheet ? "연결됨" : "미연결") + "</button></td></tr>"
      }).join("") : '<tr><td colspan="6" class="px-5 py-12 text-center text-sm text-muted-foreground">검색 결과가 없습니다.</td></tr>') +
      "</tbody></table></div></div>"
    return aLayout("staff", body)
  }

  function viewReviewers() {
    var q = S.ui.rvq.trim().toLowerCase()
    var list = S.reviewers.filter(function (r) {
      if (!q) return true
      return (r.name + " " + r.accounts.map(function (a) { return a.name + " " + a.key }).join(" ")).toLowerCase().indexOf(q) >= 0
    })
    var unkeyed = []
    S.reviewers.forEach(function (r) { r.accounts.forEach(function (a) { if (!a.key) unkeyed.push({ r: r, a: a }) }) })
    var allAccs = []
    S.reviewers.forEach(function (r) { r.accounts.forEach(function (a) { allAccs.push({ r: r, a: a }) }) })
    var matchBox =
      S.pending.length || unkeyed.length
        ? '<div class="rounded-2xl border border-amber-200 bg-amber-50 p-5 space-y-3"><div><h2 class="font-semibold text-amber-900 flex items-center gap-1.5">' + ic("link") + "부계정·명의 매칭 대기</h2>" +
          '<p class="text-xs text-amber-800 mt-1">시트 <b>구매자</b> 열에 올라온 값을 리뷰어의 명의와 1:1로 연결합니다. 연결하면 그 행의 정산 상태가 리뷰어 화면에 표시됩니다.</p></div>' +
          (S.pending.length ? '<div class="space-y-2">' + S.pending.map(function (pv, i) {
            var sorted = allAccs.slice().sort(function (x, y) { return (x.a.key ? 1 : 0) - (y.a.key ? 1 : 0) })
            return '<div class="flex flex-col sm:flex-row sm:items-center gap-2 rounded-xl bg-card border p-3"><div class="flex items-center gap-2 min-w-0 flex-1"><span class="font-mono text-sm font-semibold">' + e(pv.v) + '</span><span class="text-xs text-muted-foreground truncate">' + e(staffOf(pv.staff).name) + " 시트 · " + e(prod(pv.product).short) + "</span></div>" +
              '<div class="flex gap-2"><div class="relative flex-1 sm:w-56"><select id="match-' + i + '" class="h-9 w-full appearance-none rounded-lg border border-input bg-card pl-3 pr-9 text-sm cursor-pointer">' +
              sorted.map(function (o) { return '<option value="' + e(o.a.id) + '">' + e(o.r.name + " › " + o.a.name + (o.a.key ? " (" + o.a.key + ")" : " · 미매칭")) + "</option>" }).join("") +
              '</select><span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">' + ic("chevDown") + "</span></div>" +
              '<button type="button" data-act="match" data-i="' + i + '" class="' + BTN + ' h-9 px-3 bg-primary text-primary-foreground hover:bg-primary/90">매칭</button></div></div>'
          }).join("") + "</div>" : "") +
          (unkeyed.length ? '<p class="text-xs text-amber-900">매칭키가 없는 명의: ' + unkeyed.map(function (o) { return "<b>" + e(o.r.name + " › " + o.a.name) + "</b>" }).join(", ") + " — 리뷰어 행의 [명의 관리]에서 직접 지정할 수도 있습니다.</p>" : "") +
          "</div>"
        : '<div class="rounded-2xl border bg-card p-4 text-sm text-muted-foreground flex items-center gap-2">' + ic("checkCircle", "size-4 shrink-0 text-emerald-600") + "모든 명의가 시트 구매자 값과 매칭되어 있습니다.</div>"
    var body =
      aHead("리뷰어 관리", "리뷰어와 부계정(명의)을 시트 구매자 값(매칭키)과 1:1로 연결합니다.") +
      '<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">' +
      statCard("users", "blue", "전체 리뷰어", S.reviewers.length) +
      statCard("user", "green", "등록 명의", allAccs.length, '<p class="text-xs text-muted-foreground mt-2">부계정 포함</p>') +
      statCard("link", "amber", "매칭 대기", matchCount()) + "</div>" +
      matchBox +
      searchBox("rvq", "rvq", S.ui.rvq, "리뷰어·명의·매칭키 검색") +
      '<div class="rounded-2xl border bg-card overflow-hidden"><div class="overflow-x-auto"><table class="w-full min-w-[980px]"><thead class="bg-muted/50 border-b"><tr>' +
      ["리뷰어", "연락처", "명의 · 매칭키", "진행", "정산대기", "정산완료", "가입일", ""].map(function (h) { return '<th class="' + TH + '">' + h + "</th>" }).join("") + '</tr></thead><tbody class="divide-y">' +
      (list.length ? list.map(function (r) {
        var subs = S.subs.filter(function (x) { return x.rid === r.id })
        var wait = subs.filter(function (x) { return x.settle === "대기" }).reduce(function (s, x) { return s + settleAmt(x) }, 0)
        var done = subs.filter(function (x) { return x.settle === "완료" }).reduce(function (s, x) { return s + settleAmt(x) }, 0)
        return '<tr class="hover:bg-muted/50 transition-colors"><td class="' + TD + '"><div class="flex items-center gap-2.5">' + avatar(r.name) + '<div><p class="font-medium">' + e(r.name) + '</p><p class="text-xs text-muted-foreground">부계정 ' + r.accounts.length + "개</p></div></div></td>" +
          '<td class="' + TD + ' text-muted-foreground tabular-nums">' + e(r.phone.replace(/-(\d{4})-/, "-****-")) + "</td>" +
          '<td class="px-5 py-4 text-sm"><div class="flex flex-wrap gap-1">' + r.accounts.map(function (a) { return a.key ? badge(a.name + " · " + a.key, "info") : badge(a.name + " · 미매칭", "wait") }).join("") + "</div></td>" +
          '<td class="' + TD + ' tabular-nums">' + subs.length + '건</td><td class="' + TD + ' tabular-nums">' + won(wait) + '</td><td class="' + TD + ' tabular-nums">' + won(done) + "</td>" +
          '<td class="' + TD + ' text-muted-foreground tabular-nums">' + e(fmtD(r.joined)) + '</td><td class="' + TD + ' text-right"><button type="button" data-act="openModal" data-type="reviewer" data-id="' + e(r.id) + '" class="' + BTN_SO + '">명의 관리</button></td></tr>'
      }).join("") : '<tr><td colspan="8" class="px-5 py-12 text-center text-sm text-muted-foreground">검색 결과가 없습니다.</td></tr>') +
      "</tbody></table></div></div>"
    return aLayout("reviewers", body)
  }

  /* 사진 검수: 구매제출·리뷰제출 각각을 한 건(이벤트)으로 본다 */
  function events() {
    var out = []
    S.subs.forEach(function (x) {
      if (x.buyPhotos.length) out.push({ x: x, stage: "buy", photos: x.buyPhotos, at: x.buyAt, status: x.buyStatus })
      if (x.reviewPhotos.length) out.push({ x: x, stage: "review", photos: x.reviewPhotos, at: x.reviewAt, status: x.reviewStatus })
    })
    return out.sort(function (a, b) { return b.at - a.at })
  }
  function evFilter(list, skipReviewer) {
    var q = S.ui.pq.trim().toLowerCase()
    return list.filter(function (ev) {
      var p = prod(ev.x.pid), r = reviewer(ev.x.rid), a = account(ev.x.aid)
      if (S.ui.pstaff && p.staff !== S.ui.pstaff) return false
      if (S.ui.pstage && ev.stage !== S.ui.pstage) return false
      if (S.ui.ptype && p.type !== S.ui.ptype) return false
      if (!skipReviewer && S.ui.prev && ev.x.rid !== S.ui.prev) return false
      if (q && (r.name + " " + p.company + " " + p.name + " " + a.name + " " + a.key).toLowerCase().indexOf(q) < 0) return false
      return true
    })
  }
  function viewPhotos() {
    var base = evFilter(events(), true)
    var revs = S.reviewers.map(function (r) {
      var evs = base.filter(function (ev) { return ev.x.rid === r.id })
      var n = evs.reduce(function (s, ev) { return s + ev.photos.length }, 0)
      var w = evs.filter(function (ev) { return ev.status === "검수대기" }).length
      return { r: r, n: n, w: w }
    }).filter(function (o) { return o.n > 0 })
    if (!revs.some(function (o) { return o.r.id === S.ui.prev })) S.ui.prev = revs.length ? revs[0].r.id : ""
    var evs = evFilter(events(), false)
    var totalPhotos = base.reduce(function (s, ev) { return s + ev.photos.length }, 0)
    var body =
      aHead("리뷰 제출 사진", "리뷰어가 올린 구매·리뷰 사진을 한곳에서 봅니다. 왼쪽에서 리뷰어를 선택하세요.") +
      '<div class="flex flex-wrap items-center gap-2">' + searchBox("pq", "pq", S.ui.pq, "리뷰어·업체·품명·구매자 검색", "flex-1 min-w-[220px]") +
      selectBox("pstaff", "set", "pstaff", S.ui.pstaff, staffOpts(), "w-36") +
      pill("전체 단계", !S.ui.pstage, "pstage", "") + pill("구매사진", S.ui.pstage === "buy", "pstage", "buy") + pill("리뷰사진", S.ui.pstage === "review", "pstage", "review") +
      pill("전체 종류", !S.ui.ptype, "ptype", "") + pill("구매리뷰", S.ui.ptype === "구매리뷰", "ptype", "구매리뷰") + pill("일반리뷰", S.ui.ptype === "일반리뷰", "ptype", "일반리뷰") +
      '<span class="text-sm text-muted-foreground ml-auto whitespace-nowrap">리뷰어 ' + revs.length + "명 · 사진 " + totalPhotos + "장</span></div>" +
      '<div class="flex flex-col lg:flex-row gap-4 items-start">' +
      '<div class="w-full sm:w-56 shrink-0 rounded-2xl border bg-card p-3"><p class="px-2 py-2 text-xs text-muted-foreground">리뷰어</p>' +
      (revs.length ? '<div class="flex flex-col gap-1">' + revs.map(function (o) {
        var on = o.r.id === S.ui.prev
        return '<button type="button" data-act="pick" data-k="prev" data-v="' + e(o.r.id) + '" class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-left cursor-pointer transition-colors ' + (on ? "bg-accent" : "hover:bg-muted/50") + '">' +
          '<span class="size-8 shrink-0 rounded-full bg-muted text-muted-foreground flex items-center justify-center">' + ic("user", "size-4 shrink-0") + "</span>" +
          '<span class="min-w-0 flex-1"><span class="block text-sm font-semibold truncate">' + e(o.r.name) + '</span><span class="block text-xs text-muted-foreground">부계정 ' + o.r.accounts.length + "개</span></span>" +
          '<span class="text-sm font-semibold tabular-nums ' + (on ? "text-primary" : "text-foreground") + '">' + o.n + '</span><span class="text-muted-foreground">' + ic("chevRight", "size-4 shrink-0") + "</span></button>"
      }).join("") + "</div>" : '<p class="px-2 py-6 text-sm text-muted-foreground text-center">검색 결과가 없습니다.</p>') + "</div>" +
      '<div class="w-full min-w-0 flex-1 space-y-4">' +
      (evs.length ? evs.map(function (ev) { return evCard(ev) }).join("") : emptyBox("조건에 맞는 사진이 없습니다.")) +
      "</div></div>"
    return aLayout("photos", body)
  }
  function evCard(ev) {
    var x = ev.x, p = prod(x.pid), a = account(x.aid)
    var key = x.id + ":" + ev.stage
    return (
      '<div class="rounded-2xl border bg-card p-5">' +
      '<div class="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-2">' +
      '<div class="flex flex-wrap items-center gap-1.5 text-sm">' + badge(ev.stage === "buy" ? "구매사진" : "리뷰사진", ev.stage === "buy" ? "ind" : "info") + badge(p.type, "mute") +
      '<span class="font-medium">' + e(p.company) + '</span><span class="text-muted-foreground">' + e(p.short) + "</span>" +
      '<span class="text-muted-foreground">· 구매자 <b class="font-semibold text-foreground">' + e(a.key || a.name) + "</b></span>" +
      (ev.stage === "buy" ? '<span class="text-muted-foreground tabular-nums">· ' + won(x.amount) + "</span>" : "") + (x.bundle ? badge("묶음", "mute") : "") + "</div>" +
      '<span class="text-sm text-muted-foreground tabular-nums whitespace-nowrap">' + e(fmt(ev.at)) + "</span></div>" +
      '<div class="flex flex-wrap gap-3 mt-4">' + ev.photos.map(function (src, i) {
        return '<button type="button" data-act="view" data-key="' + e(key) + '" data-i="' + i + '" class="rounded-lg border overflow-hidden cursor-zoom-in hover:ring-4 ring-ring/50 transition-shadow">' + thumb(src, "size-24 block") + "</button>"
      }).join("") + "</div>" +
      '<div class="flex flex-wrap items-center justify-between gap-2 mt-4 pt-4 border-t">' +
      '<div class="flex items-center gap-2 text-xs text-muted-foreground">' + chkBadge(ev.status) +
      '<span>진행자 ' + e(staffOf(p.staff).name) + "</span>" +
      (ev.status === "수정요청" ? '<span class="text-destructive truncate max-w-[240px]">' + e(ev.stage === "buy" ? x.buyMemo : x.reviewMemo) + "</span>" : "") + "</div>" +
      (ev.status === "검수대기"
        ? '<div class="flex gap-1.5"><button type="button" data-act="openModal" data-type="reject" data-key="' + e(key) + '" class="' + BTN_SD + '">관리자 수정 요청</button><button type="button" data-act="approve" data-key="' + e(key) + '" class="' + BTN_SP + '">' + ic("check", "size-3.5 shrink-0") + "승인</button></div>"
        : '<span class="text-xs text-muted-foreground">' + (ev.stage === "review" && x.settle ? "정산 " + (x.settle === "완료" ? "완료" : "대기") : "") + "</span>") +
      "</div></div>"
    )
  }
  function evByKey(key) {
    var pr = key.split(":"), x = subOf(pr[0])
    if (!x) return null
    return pr[1] === "buy" ? { x: x, stage: "buy", photos: x.buyPhotos, status: x.buyStatus, at: x.buyAt } : { x: x, stage: "review", photos: x.reviewPhotos, status: x.reviewStatus, at: x.reviewAt }
  }

  function viewSettle() {
    var q = S.ui.stq.trim().toLowerCase()
    var all = S.subs.filter(function (x) { return x.settle })
    var list = all.filter(function (x) {
      var p = prod(x.pid), r = reviewer(x.rid), a = account(x.aid)
      if (S.ui.ststat && x.settle !== S.ui.ststat) return false
      if (S.ui.ststaff && p.staff !== S.ui.ststaff) return false
      if (q && (r.name + " " + a.name + " " + a.holder + " " + p.company + " " + p.name).toLowerCase().indexOf(q) < 0) return false
      return true
    }).sort(function (a, b) { return b.reviewAt - a.reviewAt })
    var wait = all.filter(function (x) { return x.settle === "대기" })
    var done = all.filter(function (x) { return x.settle === "완료" })
    var sumOf = function (arr) { return arr.reduce(function (s, x) { return s + settleAmt(x) }, 0) }
    var selIds = Object.keys(S.sel).filter(function (id) { var x = subOf(id); return S.sel[id] && x && x.settle === "대기" })
    var selSum = sumOf(selIds.map(subOf))
    var selectable = list.filter(function (x) { return x.settle === "대기" })
    var allOn = selectable.length && selectable.every(function (x) { return S.sel[x.id] })
    var body =
      aHead("정산 관리", "리뷰 검수가 끝난 건을 명의(부계정)별 계좌로 정산합니다. 정산 완료는 리뷰어 화면에 바로 표시됩니다.") +
      '<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">' +
      statCard("wallet", "amber", "정산대기", wait.length + '<span class="text-base font-medium text-muted-foreground">건</span>', '<p class="text-sm font-semibold tabular-nums text-amber-700 mt-1">' + won(sumOf(wait)) + "</p>") +
      statCard("checkCircle", "green", "정산완료", done.length + '<span class="text-base font-medium text-muted-foreground">건</span>', '<p class="text-sm font-semibold tabular-nums text-emerald-700 mt-1">' + won(sumOf(done)) + "</p>") +
      statCard("user", "blue", "리뷰어 정산 확인", done.filter(function (x) { return x.confirmed }).length + '<span class="text-base font-medium text-muted-foreground">/' + done.length + "</span>") + "</div>" +
      '<div class="flex flex-col lg:flex-row gap-2">' + searchBox("stq", "stq", S.ui.stq, "리뷰어·명의·예금주·업체 검색", "flex-1") +
      '<div class="flex flex-wrap gap-2">' + selectBox("ststaff", "set", "ststaff", S.ui.ststaff, staffOpts(), "w-36") + pill("정산대기", S.ui.ststat === "대기", "ststat", "대기") + pill("정산완료", S.ui.ststat === "완료", "ststat", "완료") + pill("전체", !S.ui.ststat, "ststat", "") + "</div></div>" +
      (selIds.length ? '<div class="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 flex flex-wrap items-center justify-between gap-2"><span class="text-sm"><b class="font-semibold">' + selIds.length + '건</b> 선택 · 합계 <b class="font-semibold tabular-nums">' + won(selSum) + '</b></span><button type="button" data-act="settleSel" class="' + BTN_SP + '">' + ic("check", "size-3.5 shrink-0") + "선택 정산 완료 처리</button></div>" : "") +
      '<div class="rounded-2xl border bg-card overflow-hidden"><div class="overflow-x-auto"><table class="w-full min-w-[1040px]"><thead class="bg-muted/50 border-b"><tr>' +
      '<th class="px-5 py-3.5 w-10"><input type="checkbox" data-change="selAll" class="size-4 accent-primary align-middle" aria-label="전체 선택"' + (allOn ? " checked" : "") + (selectable.length ? "" : " disabled") + "></th>" +
      ["리뷰어 · 명의", "예금주 · 계좌", "업체 · 상품", "구매 금액", "리뷰비", "정산 금액", "리뷰 제출", "상태", ""].map(function (h) { return '<th class="' + TH + '">' + h + "</th>" }).join("") + '</tr></thead><tbody class="divide-y">' +
      (list.length ? list.map(function (x) {
        var p = prod(x.pid), r = reviewer(x.rid), a = account(x.aid)
        return '<tr class="hover:bg-muted/50 transition-colors">' +
          '<td class="px-5 py-4">' + (x.settle === "대기" ? '<input type="checkbox" data-change="selOne" data-id="' + e(x.id) + '" class="size-4 accent-primary align-middle" aria-label="선택"' + (S.sel[x.id] ? " checked" : "") + ">" : "") + "</td>" +
          '<td class="' + TD + '"><p class="font-medium">' + e(r.name) + '</p><p class="text-xs text-muted-foreground">명의 ' + e(a.name) + (a.key ? " · " + e(a.key) : "") + "</p></td>" +
          '<td class="' + TD + '"><p>' + e(a.holder) + '</p><p class="text-xs text-muted-foreground tabular-nums">' + e(a.bank + " " + a.acct) + "</p></td>" +
          '<td class="' + TD + '"><p>' + e(p.company) + '</p><p class="text-xs text-muted-foreground">' + e(p.short) + " · " + e(staffOf(p.staff).name) + "</p></td>" +
          '<td class="' + TD + ' tabular-nums">' + won(x.amount) + '</td><td class="' + TD + ' tabular-nums">' + won(p.fee) + '</td><td class="' + TD + ' font-semibold tabular-nums">' + won(settleAmt(x)) + "</td>" +
          '<td class="' + TD + ' text-muted-foreground tabular-nums">' + e(fmtD(x.reviewAt)) + "</td>" +
          '<td class="' + TD + '">' + (x.settle === "완료" ? badge("정산완료", "ok") + (x.confirmed ? ' <span class="text-xs text-emerald-700">리뷰어 확인</span>' : "") : badge("정산대기", "wait")) + "</td>" +
          '<td class="' + TD + ' text-right">' + (x.settle === "대기" ? '<button type="button" data-act="settleOne" data-id="' + e(x.id) + '" class="' + BTN_SP + '">정산 완료</button>' : '<button type="button" data-act="unsettle" data-id="' + e(x.id) + '" class="' + BTN_SO + ' text-muted-foreground">되돌리기</button>') + "</td></tr>"
      }).join("") : '<tr><td colspan="10" class="px-5 py-12 text-center text-sm text-muted-foreground">조건에 맞는 정산 건이 없습니다.</td></tr>') +
      "</tbody></table></div></div>"
    return aLayout("settle", body)
  }

  function viewSettings(q) {
    if (q.tab) S.ui.setTab = q.tab
    if (q.staff && staffOf(q.staff)) S.ui.setStaff = q.staff
    var sid = S.ui.setStaff, st = staffOf(sid), m = mapFor(sid)
    var tab = function (k, label, icon) {
      var on = S.ui.setTab === k
      return '<button type="button" data-act="pick" data-k="setTab" data-v="' + k + '" class="' + BTN + ' h-11 px-4 rounded-xl ' + (on ? "bg-primary text-primary-foreground" : "border bg-card text-foreground hover:bg-muted font-medium") + '">' + ic(icon) + e(label) + "</button>"
    }
    var inner = ""
    if (S.ui.setTab === "map") {
      inner =
        '<div class="rounded-2xl border border-primary/15 bg-primary/[0.03] p-5 flex flex-col sm:flex-row sm:items-center gap-4">' +
        '<p class="text-sm leading-relaxed text-foreground/80 flex-1">설문 항목은 <b class="text-foreground">고정</b>되어 있고, 각 항목이 구글 시트의 어느 <b class="text-foreground">열</b>에 기록될지만 지정합니다. 제출 시 <b class="text-foreground">업체명·품명·구매자</b>가 같은 행을 찾아 그 행에 채웁니다. 구매자 열의 값(예: 오세린1, 오세린2)은 <b class="text-foreground">리뷰어 관리</b> 화면에서 리뷰어의 명의와 1:1로 매핑합니다.</p>' +
        '<button type="button" data-act="refreshCols" class="' + BTN_O + ' text-primary shrink-0">' + ic("refresh") + "열 새로고침</button></div>" +
        '<div class="rounded-2xl border bg-card overflow-hidden"><div class="overflow-x-auto"><table class="w-full min-w-[860px]"><thead class="bg-muted/50 border-b"><tr><th class="' + TH + '">항목</th><th class="' + TH + '">설명</th><th class="' + TH + ' w-60">시트 열</th></tr></thead><tbody class="divide-y">' +
        FIELDS.map(function (f) {
          var hl = f.req || f.hl
          return '<tr class="' + (hl ? "bg-amber-50" : "") + '"><td class="px-5 py-3 text-sm font-semibold whitespace-nowrap">' + e(f.label) + (f.req ? ' <span class="text-red-600">*</span>' : "") + "</td>" +
            '<td class="px-5 py-3 text-sm text-muted-foreground">' + (f.descHtml || e(f.desc)) + "</td>" +
            '<td class="px-5 py-3">' + selectBox("map-" + f.k, "map", f.k, m[f.k], [["", "기록 안 함"]].concat(COLS.map(function (c) { return [c[0], c[0] + " · " + c[1]] })), "w-48") + "</td></tr>"
        }).join("") + "</tbody></table></div></div>"
    } else if (S.ui.setTab === "preview") {
      var ps = S.products.filter(function (p) { return p.staff === sid })
      var fld = function (label, ctrl, req) { return '<div><label class="block text-sm font-medium mb-1.5">' + e(label) + (req ? ' <span class="text-red-600">*</span>' : "") + "</label>" + ctrl + "</div>" }
      inner =
        '<div class="rounded-2xl border bg-card p-6 max-w-2xl space-y-4">' +
        '<div class="border-l-4 border-l-primary pl-3"><h2 class="text-lg font-bold">' + e(st.name) + ' 진행 · 구매제출 설문</h2><p class="text-sm text-muted-foreground mt-0.5">리뷰어에게 보이는 설문 폼 미리보기입니다. 응답은 시트의 지정한 열에 기록됩니다.</p></div>' +
        fld("업체명", '<select class="' + INPUT + '">' + (ps.length ? ps.map(function (p) { return "<option>" + e(p.company) + "</option>" }).join("") : "<option>배정된 업체 없음</option>") + "</select>", true) +
        fld("품명", '<select class="' + INPUT + '">' + (ps.length ? ps.map(function (p) { return "<option>" + e(p.name) + "</option>" }).join("") : "<option>-</option>") + "</select>", true) +
        fld("구매자", '<input class="' + INPUT + '" placeholder="예: 오세린1 (본인/부계정 구분)">', true) +
        '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">' + fld("주문자", '<input class="' + INPUT + '">') + fld("수취인", '<input class="' + INPUT + '">') + fld("연락처", '<input class="' + INPUT + '" placeholder="010-0000-0000">') + fld("이메일주소", '<input class="' + INPUT + '">') + "</div>" +
        fld("주소", '<input class="' + INPUT + '">') +
        fld("구매 사진", '<div class="h-24 rounded-lg border-[1.5px] border-dashed flex items-center justify-center gap-2 text-sm text-muted-foreground">' + ic("camera") + "사진 올리기</div>", false) +
        '<button type="button" data-act="soon" data-t="미리보기 제출" class="' + BTN_P + ' w-full">제출 (미리보기)</button></div>'
    } else {
      var rows = subsOfStaff(sid).slice().sort(function (a, b) { return b.buyAt - a.buyAt })
      var cols = FIELDS.filter(function (f) { return m[f.k] }).sort(function (a, b) { return m[a.k] < m[b.k] ? -1 : 1 })
      var val = function (f, x) {
        var p = prod(x.pid), a = account(x.aid)
        switch (f.k) {
          case "company": return e(p.company)
          case "product": return e(p.name)
          case "buyer": return a.key ? e(a.key) : '<span class="text-amber-700">' + e(a.name) + " (미매칭)</span>"
          case "settle": return x.settle === "완료" ? "☑" : "☐"
          case "reviewChk": return x.reviewPhotos.length ? "☑ TRUE" : "☐"
          case "buyChk": return x.buyPhotos.length ? "☑ TRUE" : "☐"
          case "orderer": return e(x.orderer)
          case "recipient": return e(x.recipient)
          case "email": return e(reviewer(x.rid).email)
          case "phone": return e(x.phone.replace(/-(\d{4})-/, "-****-"))
          case "address": return e(x.address.split(",")[0])
          case "amount": return won(x.amount)
          case "bank": return e(a.bank + " " + a.acct)
          case "holder": return e(a.holder)
        }
        return ""
      }
      inner =
        '<p class="text-sm text-muted-foreground">' + e(st.name) + " 시트에 기록된 응답 " + rows.length + "건 · 열 순서는 매핑을 따릅니다." + (st.sheet ? "" : ' <span class="text-destructive">시트 미연결 상태입니다.</span>') + "</p>" +
        '<div class="rounded-2xl border bg-card overflow-hidden"><div class="overflow-x-auto"><table class="w-full min-w-[1280px]"><thead class="bg-muted/50 border-b"><tr><th class="' + TH + '">제출 시각</th>' +
        cols.map(function (f) { return '<th class="' + TH + '">' + e(colLabel(m[f.k])) + '<span class="block text-[10px] font-normal text-muted-foreground/60">' + e(f.label) + "</span></th>" }).join("") + '</tr></thead><tbody class="divide-y">' +
        (rows.length ? rows.map(function (x) { return '<tr class="hover:bg-muted/50"><td class="' + TD + ' text-muted-foreground tabular-nums">' + e(fmt(x.buyAt)) + "</td>" + cols.map(function (f) { return '<td class="' + TD + '">' + val(f, x) + "</td>" }).join("") + "</tr>" }).join("") : '<tr><td colspan="' + (cols.length + 1) + '" class="px-5 py-12 text-center text-sm text-muted-foreground">아직 응답이 없습니다.</td></tr>') +
        "</tbody></table></div></div>"
    }
    var body =
      aHead("설정", "설문 항목을 구글 시트 열에 매핑합니다.", '<div class="flex items-center gap-2"><span class="text-sm text-muted-foreground whitespace-nowrap">진행자</span>' + selectBox("setStaff", "set", "setStaff", sid, S.staff.map(function (s) { return [s.id, s.name + " · " + s.dept] }), "w-44") + "</div>") +
      '<div class="flex flex-wrap gap-2">' + tab("map", "시트 열 매핑", "table") + tab("preview", "설문 미리보기", "eye") + tab("resp", "응답", "msg") + "</div>" + inner
    return aLayout("settings", body)
  }

  /* ───────── 모달 · 사진 뷰어 ───────── */
  function modalWrap(title, inner, wide) {
    return '<div id="modal-backdrop" class="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">' +
      '<div class="w-full ' + (wide ? "max-w-2xl" : "max-w-md") + ' rounded-2xl bg-card shadow-xl max-h-[90vh] overflow-y-auto" role="dialog" aria-modal="true"><div class="p-6 space-y-4">' +
      '<div class="flex items-center justify-between"><h2 class="text-lg font-bold">' + e(title) + '</h2><button type="button" data-act="closeModal" class="size-8 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-muted cursor-pointer" aria-label="닫기">' + ic("x") + "</button></div>" +
      '<div>' + inner + "</div></div></div></div>"
  }
  function modalHtml() {
    var md = S.modal
    if (!md) return ""
    if (md.type === "staffNew")
      return modalWrap("직원 생성",
        '<form data-submit="newStaff" class="space-y-3">' +
        '<div><label class="block text-sm font-medium mb-1.5" for="ns-name">이름</label><input id="ns-name" name="name" required placeholder="예: 하윤슬" class="' + INPUT + '"></div>' +
        '<div><label class="block text-sm font-medium mb-1.5" for="ns-dept">부서</label><select id="ns-dept" name="dept" class="' + INPUT + '"><option>진행팀</option><option>상담팀</option><option>운영팀</option></select></div>' +
        '<div><label class="block text-sm font-medium mb-1.5" for="ns-email">이메일</label><input id="ns-email" name="email" placeholder="비우면 자동 생성" class="' + INPUT + '"></div>' +
        '<label class="flex items-center gap-2 text-sm"><input type="checkbox" name="sheet" checked class="size-4 accent-primary">구글 시트 바로 연결 (설문 폼·열 매핑 기본값 적용)</label>' +
        '<div class="flex justify-end gap-2 pt-2"><button type="button" data-act="closeModal" class="' + BTN_O + '">취소</button><button type="submit" class="' + BTN_P + '">생성</button></div></form>')
    if (md.type === "reject") {
      var ev = evByKey(md.key)
      if (!ev) return ""
      var p = prod(ev.x.pid)
      return modalWrap("관리자 수정 요청",
        '<form data-submit="reject" class="space-y-3"><p class="text-sm text-muted-foreground">' + e(reviewer(ev.x.rid).name) + " · " + e(p.short) + " · " + (ev.stage === "buy" ? "구매사진" : "리뷰사진") + "</p>" +
        '<div class="flex flex-wrap gap-1.5">' + ["결제금액이 보이지 않습니다.", "주문번호가 잘렸습니다.", "별점이 보이게 캡처해 주세요.", "사진 3장 이상 필요합니다."].map(function (t) { return '<button type="button" data-act="preset" data-t="' + e(t) + '" class="h-7 px-2.5 rounded-full border text-xs hover:bg-muted cursor-pointer">' + e(t) + "</button>" }).join("") + "</div>" +
        '<textarea id="rj-memo" name="memo" rows="4" required class="w-full rounded-lg border border-input bg-card p-3 text-sm resize-none focus:outline-none focus:border-primary">' + e(ev.stage === "buy" ? "주문 완료 화면에 결제금액과 주문번호가 보이도록 다시 캡처해 주세요." : "별점과 사진이 함께 보이도록 다시 캡처해 주세요.") + "</textarea>" +
        '<p class="text-xs text-muted-foreground">보내면 리뷰어 화면 \'내가 쓴 목록\'에 바로 표시됩니다.</p>' +
        '<div class="flex justify-end gap-2"><button type="button" data-act="closeModal" class="' + BTN_O + '">취소</button><button type="submit" class="' + BTN + ' h-10 px-4 bg-destructive text-white hover:bg-destructive/90">수정 요청 보내기</button></div></form>')
    }
    if (md.type === "reviewer") {
      var r = reviewer(md.id)
      return modalWrap(r.name + " · 명의 관리",
        '<p class="text-sm text-muted-foreground mb-3">시트 구매자 열 값과 같은 매칭키를 지정합니다. 비우면 \'미매칭\'으로 남습니다.</p>' +
        '<div class="rounded-xl border divide-y">' + r.accounts.map(function (a, i) {
          return '<div class="flex flex-col sm:flex-row sm:items-center gap-2 p-3"><div class="min-w-0 flex-1"><p class="text-sm font-semibold">' + e(a.name) + (i === 0 ? ' <span class="text-xs font-normal text-muted-foreground">(본인)</span>' : "") + '</p><p class="text-xs text-muted-foreground">예금주 ' + e(a.holder) + " · " + e(a.bank + " " + a.acct) + "</p></div>" +
            '<div class="flex gap-2"><input id="key-' + e(a.id) + '" value="' + e(a.key) + '" placeholder="매칭키" class="h-9 w-36 rounded-lg border border-input bg-card px-3 text-sm font-mono focus:outline-none focus:border-primary"><button type="button" data-act="saveKey" data-id="' + e(a.id) + '" class="' + BTN + ' h-9 px-3 border bg-card hover:bg-muted">저장</button></div></div>'
        }).join("") + "</div>", true)
    }
    return ""
  }
  function viewerHtml() {
    var v = S.viewer
    if (!v) return ""
    var ev = evByKey(v.key)
    if (!ev) return ""
    var p = prod(ev.x.pid), src = ev.photos[v.i]
    var nav = function (dir, icon, pos) {
      return '<button type="button" data-act="vNav" data-d="' + dir + '" class="absolute ' + pos + ' top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center cursor-pointer" aria-label="' + (dir > 0 ? "다음" : "이전") + '">' + ic(icon, "size-5 shrink-0") + "</button>"
    }
    var zbtn = function (act, icon, label) { return '<button type="button" data-act="' + act + '" class="size-9 rounded-lg bg-white/10 text-white hover:bg-white/20 flex items-center justify-center cursor-pointer" aria-label="' + label + '">' + ic(icon) + "</button>" }
    return (
      '<div class="fixed inset-0 z-[100] bg-black/80 flex flex-col">' +
      '<div class="relative z-10 flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-white bg-black/50">' +
      '<div class="min-w-0"><p class="text-sm font-semibold truncate">' + e(reviewer(ev.x.rid).name) + " · " + e(p.company) + " " + e(p.short) + '</p><p class="text-xs opacity-70">' + (ev.stage === "buy" ? "구매사진" : "리뷰사진") + " " + (v.i + 1) + " / " + ev.photos.length + " · " + e(fmt(ev.at)) + "</p></div>" +
      '<div class="flex items-center gap-1.5">' + zbtn("zOut", "zoomOut", "축소") + '<span class="w-12 text-center text-xs tabular-nums">' + Math.round(v.zoom * 100) + "%</span>" + zbtn("zIn", "zoomIn", "확대") + zbtn("closeViewer", "x", "닫기") + "</div></div>" +
      '<div class="relative flex-1 min-h-0">' + (ev.photos.length > 1 ? nav(-1, "chevLeft", "left-3") + nav(1, "chevRight", "right-3") : "") +
      '<div id="viewer-stage" class="absolute inset-0 overflow-auto flex p-4"><img src="' + e(src) + '" alt="" data-act="zToggle" class="rounded-lg shadow-2xl bg-white ' + (v.zoom > 1 ? "cursor-pointer" : "cursor-zoom-in") + '" style="margin:auto;' + (v.zoom > 1 ? "height:" + v.zoom * 100 + "%;max-width:none" : "max-height:100%;max-width:100%") + '"></div></div>' +
      '<div class="relative z-10 flex flex-wrap items-center justify-center gap-2 px-4 pt-3 pb-4 bg-black/50">' + ev.photos.map(function (s, i) {
        return '<button type="button" data-act="vGo" data-i="' + i + '" class="rounded-md overflow-hidden cursor-pointer ' + (i === v.i ? "ring-1 ring-blue-200" : "opacity-40 hover:opacity-100") + '">' + thumb(s, "size-12 block") + "</button>"
      }).join("") +
      (ev.status === "검수대기" ? '<span class="w-px h-8 bg-white/10 mx-2"></span><button type="button" data-act="openModal" data-type="reject" data-key="' + e(v.key) + '" class="' + BTN + ' h-9 px-3 bg-white/10 text-white hover:bg-white/20">수정 요청</button><button type="button" data-act="approve" data-key="' + e(v.key) + '" class="' + BTN + ' h-9 px-3 bg-primary text-primary-foreground hover:bg-primary/90">' + ic("check", "size-3.5 shrink-0") + "승인</button>" : '<span class="ml-2">' + chkBadge(ev.status) + "</span>") +
      '</div><div class="h-16 bg-black/50"></div></div>'
    )
  }

  /* ───────── 그리기 ───────── */
  function view(route) {
    var path = route.path, q = route.query
    if (path === "/r/products") return viewProducts()
    if (path === "/r/buy") return viewBuy(q)
    if (path === "/r/list") return viewList()
    if (path === "/r/review") return viewReview(q)
    if (path === "/r/guide") return viewGuide(q)
    if (path === "/r/accounts") return viewAccounts()
    if (path === "/r/me") return viewMe()
    if (path === "/a/staff") return viewStaff()
    if (path === "/a/reviewers") return viewReviewers()
    if (path === "/a/photos") return viewPhotos()
    if (path === "/a/settle") return viewSettle()
    if (path === "/a/settings") return viewSettings(q)
    return viewLogin()
  }
  // 다시 그려도 입력 중인 칸의 커서가 유지되게
  function render() {
    var a = document.activeElement, id = a && a.id, s = null, en = null
    try { s = a.selectionStart; en = a.selectionEnd } catch (err) {}
    var stage = document.getElementById("viewer-stage")
    var sx = stage ? stage.scrollLeft : 0, sy = stage ? stage.scrollTop : 0
    Demo.update()
    if (id) {
      var n = document.getElementById(id)
      if (n && n.focus) {
        n.focus()
        try { if (s != null) n.setSelectionRange(s, en) } catch (err) {}
      }
    }
    var st2 = document.getElementById("viewer-stage")
    if (st2 && stage) { st2.scrollLeft = sx; st2.scrollTop = sy }
  }
  window.addEventListener("hashchange", function () {
    S.modal = null
    S.viewer = null
    S.ui.cancelId = ""
  })

  /* ───────── 동작 ───────── */
  Demo.on("soon", function (d) { Demo.toast(d.t + "은(는) 체험판에서 열리지 않습니다.") })
  Demo.on("login", function () { Demo.toast("오세린 님, 환영합니다."); Demo.go("/r/products") })
  Demo.on("pick", function (d) { S.ui[d.k] = d.v; if (d.k === "ststat") S.sel = {}; render() })
  Demo.on("set", function (v, el) { S.ui[el.dataset.k] = v; render() })
  Demo.on("q", function (v, el) { S.ui[el.dataset.k] = v; render() })
  Demo.on("d", function (v, el) { if (S.draft) S.draft[el.name] = v })
  Demo.on("rd", function (v, el) { if (S.rdraft) S.rdraft[el.name] = v })
  Demo.on("amt", function (v, el) {
    if (!S.draft) return
    S.draft.amts[el.dataset.id] = v.replace(/[^\d]/g, "")
    var p = prod(S.draft.pid)
    var tot = me().accounts.filter(function (a) { return S.draft.accs[a.id] }).reduce(function (s, a) { return s + (Number(S.draft.amts[a.id] == null ? p.price : S.draft.amts[a.id]) || 0) }, 0)
    var t = document.getElementById("buy-total")
    if (t) t.textContent = won(tot)
  })
  Demo.on("toggleAcc", function (v, el) { S.draft.accs[el.dataset.id] = el.checked; render() })
  Demo.on("toggleAddr", function (v, el) {
    S.draft.change = el.checked
    if (el.checked) { S.draft.phone = me().phone; S.draft.address = me().address }
    render()
  })
  Demo.on("applyBulk", function () {
    var n = String(S.draft.bulk || "").replace(/[^\d]/g, "")
    if (!n) return Demo.toast("일괄 금액을 먼저 입력해 주세요.")
    me().accounts.forEach(function (a) { if (S.draft.accs[a.id]) S.draft.amts[a.id] = n })
    render()
    Demo.toast("선택한 명의에 " + won(n) + "을 모두 적용했습니다.")
  })
  Demo.on("addBuyPhoto", function () {
    var p = prod(S.draft.pid)
    var k = S.draft.photos.length
    S.draft.photos.push(k % 2 === 0 ? imgReceipt(p, p.price, k + 1) : imgProduct(p, k % 3))
    render()
  })
  Demo.on("rmBuyPhoto", function (d) { S.draft.photos.splice(Number(d.i), 1); render() })
  Demo.on("submitBuy", function () {
    var d = S.draft, p = prod(d.pid), u = me()
    var chosen = u.accounts.filter(function (a) { return d.accs[a.id] })
    if (!chosen.length) return Demo.toast("명의를 하나 이상 골라 주세요.")
    var bad = chosen.filter(function (a) { return !(Number(d.amts[a.id] == null ? p.price : d.amts[a.id]) > 0) })
    if (bad.length) return Demo.toast(bad[0].name + " 명의의 금액을 입력해 주세요.")
    if (!d.photos.length) return Demo.toast("구매 사진을 1장 이상 올려 주세요.")
    var bundle = chosen.length > 1 ? uid("b") : ""
    chosen.forEach(function (a) {
      var amount = Number(d.amts[a.id] == null ? p.price : d.amts[a.id])
      S.subs.push({
        id: uid("n"), rid: u.id, aid: a.id, pid: p.id, bundle: bundle, amount: amount,
        orderer: a.name, recipient: a.name, phone: d.change ? d.phone : u.phone, address: d.change ? d.address : u.address,
        buyPhotos: d.photos.slice(), buyAt: Date.now(), buyStatus: "검수대기", buyMemo: "",
        reviewPhotos: [], reviewAt: 0, reviewStatus: "", reviewMemo: "", link: "", settle: "", settledAt: 0, confirmed: false,
      })
    })
    S.draft = null
    S.ui.lstat = ""
    Demo.toast(chosen.length > 1 ? chosen.length + "건을 묶어서 제출했습니다. 관리자 검수 화면에 바로 올라갑니다." : "구매제출을 마쳤습니다. 관리자 검수 화면에 바로 올라갑니다.")
    Demo.go("/r/list")
  })
  Demo.on("addRvPhoto", function () {
    var x = subOf(S.rdraft.sid), p = prod(x.pid), k = S.rdraft.photos.length
    S.rdraft.photos.push(k % 2 === 0 ? imgReview(p, k % 3) : imgProduct(p, (k + 1) % 3))
    render()
  })
  Demo.on("rmRvPhoto", function (d) { S.rdraft.photos.splice(Number(d.i), 1); render() })
  Demo.on("submitReview", function () {
    var x = subOf(S.rdraft.sid)
    if (!S.rdraft.photos.length) return Demo.toast("리뷰 사진을 1장 이상 올려 주세요.")
    x.reviewPhotos = S.rdraft.photos.slice()
    x.reviewAt = Date.now()
    x.reviewStatus = "검수대기"
    x.reviewMemo = ""
    x.link = S.rdraft.link
    S.rdraft = null
    Demo.toast("리뷰를 제출했습니다. 검수가 끝나면 정산대기로 바뀝니다.")
    Demo.go("/r/list")
  })
  Demo.on("rebuy", function (d) {
    var x = subOf(d.id), p = prod(x.pid)
    x.buyPhotos = [imgReceipt(p, x.amount, 2)]
    x.buyStatus = "검수대기"
    x.buyMemo = ""
    x.buyAt = Date.now()
    render()
    Demo.toast("구매 사진을 다시 제출했습니다.")
  })
  Demo.on("askCancel", function (d) { S.ui.cancelId = d.id; render() })
  Demo.on("doCancel", function (d) {
    S.subs = S.subs.filter(function (x) { return x.id !== d.id })
    S.ui.cancelId = ""
    render()
    Demo.toast("구매제출을 취소했습니다.")
  })
  Demo.on("confirmSettle", function (d) { subOf(d.id).confirmed = true; render(); Demo.toast("정산 확인을 남겼습니다. 관리자 정산 화면에 표시됩니다.") })
  Demo.on("addAcc", function (v, form) {
    var u = me()
    var name = String(v.name || "").trim()
    var digits = String(v.acct || "").replace(/[^\d]/g, "")
    if (!name) return Demo.toast("명의를 입력해 주세요.")
    if (digits.length < 6) return Demo.toast("계좌번호를 6자리 이상 입력해 주세요.")
    u.accounts.push({ id: uid("a"), name: name, holder: String(v.holder || "").trim() || name, bank: v.bank, acct: digits.slice(0, 3) + "-****-**" + digits.slice(-2), key: "" })
    form.reset()
    render()
    Demo.toast("부계정을 등록했습니다. 관리자 매칭을 기다립니다.")
  })
  Demo.on("rmAcc", function (d) { var u = me(); u.accounts = u.accounts.filter(function (a) { return a.id !== d.id }); render(); Demo.toast("부계정을 삭제했습니다.") })
  Demo.on("saveMe", function (v) {
    var u = me()
    u.email = v.email; u.phone = v.phone; u.address = v.address; u.accounts[0].holder = v.holder || u.accounts[0].holder
    render()
    Demo.toast("내 정보를 저장했습니다.")
  })
  Demo.on("savePw", function (v, form) {
    if (!v.pw1 || v.pw1 !== v.pw2) return Demo.toast("새 비밀번호가 서로 다릅니다.")
    form.reset()
    Demo.toast("비밀번호를 바꿨습니다. (체험판)")
  })

  // 관리자
  Demo.on("openModal", function (d) { S.modal = { type: d.type, key: d.key, id: d.id }; if (d.type === "reject") S.viewer = null; render() })
  Demo.on("closeModal", function () { S.modal = null; render() })
  Demo.on("openStaff", function (d) { S.ui.setTab = "map"; Demo.go("/a/settings?staff=" + d.id) })
  Demo.on("toggleSheet", function (d, el, ev) {
    ev.stopPropagation()
    var s = staffOf(d.id)
    s.sheet = !s.sheet
    render()
    Demo.toast(s.name + " 시트를 " + (s.sheet ? "연결했습니다." : "연결 해제했습니다."))
  })
  Demo.on("newStaff", function (v) {
    var name = String(v.name || "").trim()
    if (!name) return Demo.toast("이름을 입력해 주세요.")
    var id = uid("s")
    S.staff.push({ id: id, name: name, dept: v.dept, email: String(v.email || "").trim() || "staff" + seq + "@reviewway.example", sheet: !!v.sheet })
    mapFor(id)
    S.modal = null
    render()
    Demo.toast(name + " 직원을 만들고 설문 폼·시트 열을 매핑했습니다.")
  })
  Demo.on("view", function (d) { S.viewer = { key: d.key, i: Number(d.i), zoom: 1 }; render() })
  Demo.on("closeViewer", function () { S.viewer = null; render() })
  Demo.on("vNav", function (d) {
    var ev = evByKey(S.viewer.key), n = ev.photos.length
    S.viewer.i = (S.viewer.i + Number(d.d) + n) % n
    S.viewer.zoom = 1
    render()
  })
  Demo.on("vGo", function (d) { S.viewer.i = Number(d.i); S.viewer.zoom = 1; render() })
  var ZOOMS = [1, 1.5, 2, 3]
  Demo.on("zIn", function () { var i = ZOOMS.indexOf(S.viewer.zoom); S.viewer.zoom = ZOOMS[Math.min(ZOOMS.length - 1, i + 1)]; render() })
  Demo.on("zOut", function () { var i = ZOOMS.indexOf(S.viewer.zoom); S.viewer.zoom = ZOOMS[Math.max(0, i - 1)]; render() })
  Demo.on("zToggle", function () { S.viewer.zoom = S.viewer.zoom > 1 ? 1 : 2; render() })
  Demo.on("approve", function (d) {
    var ev = evByKey(d.key), x = ev.x
    if (ev.stage === "buy") { x.buyStatus = "승인"; x.buyMemo = "" }
    else { x.reviewStatus = "승인"; x.reviewMemo = ""; x.buyStatus = "승인"; if (!x.settle) x.settle = "대기" }
    render()
    Demo.toast(ev.stage === "buy" ? "구매사진을 승인했습니다." : "리뷰를 승인했습니다. 정산대기로 넘어갑니다.")
  })
  Demo.on("preset", function (d) { var t = document.getElementById("rj-memo"); if (t) t.value = d.t })
  Demo.on("reject", function (v) {
    var ev = evByKey(S.modal.key), x = ev.x
    var memo = String(v.memo || "").trim()
    if (!memo) return Demo.toast("요청 내용을 입력해 주세요.")
    if (ev.stage === "buy") { x.buyStatus = "수정요청"; x.buyMemo = memo }
    else { x.reviewStatus = "수정요청"; x.reviewMemo = memo }
    S.modal = null
    render()
    Demo.toast("수정 요청을 보냈습니다. 리뷰어 화면에 표시됩니다.")
  })
  Demo.on("match", function (d) {
    var i = Number(d.i), pv = S.pending[i], sel = document.getElementById("match-" + i)
    var a = account(sel.value)
    if (!a) return
    var old = a.key
    a.key = pv.v
    S.pending.splice(i, 1)
    if (old) S.pending.push({ v: old, staff: pv.staff, product: pv.product })
    render()
    Demo.toast(pv.v + " → " + a.name + " 명의로 매칭했습니다.")
  })
  Demo.on("saveKey", function (d) {
    var a = account(d.id), v = document.getElementById("key-" + d.id).value.trim()
    var dup = false
    S.reviewers.forEach(function (r) { r.accounts.forEach(function (b) { if (b !== a && v && b.key === v) dup = true }) })
    if (dup) return Demo.toast("이미 다른 명의에 쓰인 매칭키입니다.")
    a.key = v
    S.pending = S.pending.filter(function (pv) { return pv.v !== v })
    render()
    Demo.toast(a.name + " 명의의 매칭키를 저장했습니다.")
  })
  function settle(ids) {
    ids.forEach(function (id) { var x = subOf(id); if (x && x.settle === "대기") { x.settle = "완료"; x.settledAt = Date.now(); x.confirmed = false } })
    S.sel = {}
    render()
    Demo.toast(ids.length + "건을 정산 완료 처리했습니다. 리뷰어 화면에 바로 표시됩니다.")
  }
  Demo.on("settleOne", function (d) { settle([d.id]) })
  Demo.on("settleSel", function () { settle(Object.keys(S.sel).filter(function (id) { return S.sel[id] })) })
  Demo.on("unsettle", function (d) { var x = subOf(d.id); x.settle = "대기"; x.settledAt = 0; x.confirmed = false; render(); Demo.toast("정산대기로 되돌렸습니다.") })
  Demo.on("selOne", function (v, el) { S.sel[el.dataset.id] = el.checked; render() })
  Demo.on("selAll", function (v, el) {
    S.sel = {}
    if (el.checked) document.querySelectorAll('[data-change="selOne"]').forEach(function (c) { S.sel[c.dataset.id] = true })
    render()
  })
  Demo.on("map", function (v, el) {
    var m = mapFor(S.ui.setStaff), k = el.dataset.k
    if (v && (k === "buyChk" || k === "reviewChk") && v === m[k === "buyChk" ? "reviewChk" : "buyChk"]) {
      render()
      return Demo.toast("구매사진 체크 열과 리뷰사진 체크 열은 서로 달라야 합니다.")
    }
    m[k] = v
    render()
    Demo.toast(FIELDS.filter(function (f) { return f.k === k })[0].label + " → " + colLabel(v) + " 저장했습니다.")
  })
  Demo.on("refreshCols", function () { Demo.toast(staffOf(S.ui.setStaff).name + " 시트의 열 이름을 다시 불러왔습니다. (A~W, 23개)") })

  // 바깥 어두운 곳을 누르면 모달 닫기
  document.addEventListener("click", function (ev) {
    if (ev.target && ev.target.id === "modal-backdrop") { S.modal = null; render() }
  })
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && (S.modal || S.viewer)) {
      if (S.modal) S.modal = null
      else S.viewer = null
      render()
    }
    if (S.viewer && !S.modal && (ev.key === "ArrowRight" || ev.key === "ArrowLeft")) {
      var e2 = evByKey(S.viewer.key), n = e2.photos.length
      S.viewer.i = (S.viewer.i + (ev.key === "ArrowRight" ? 1 : -1) + n) % n
      S.viewer.zoom = 1
      render()
    }
  })

  Demo.mount(view)
  Demo.banner()
})()
