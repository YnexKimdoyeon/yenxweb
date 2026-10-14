var ICONS = {"menu": "<path d=\"M4 5h16\"></path><path d=\"M4 12h16\"></path><path d=\"M4 19h16\"></path>", "heart": "<path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\"></path>", "x": "<path d=\"M18 6 6 18\"></path><path d=\"m6 6 12 12\"></path>", "layout-dashboard": "<rect width=\"7\" height=\"9\" x=\"3\" y=\"3\" rx=\"1\"></rect><rect width=\"7\" height=\"5\" x=\"14\" y=\"3\" rx=\"1\"></rect><rect width=\"7\" height=\"9\" x=\"14\" y=\"12\" rx=\"1\"></rect><rect width=\"7\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"></rect>", "calendar-days": "<path d=\"M8 2v4\"></path><path d=\"M16 2v4\"></path><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect><path d=\"M3 10h18\"></path><path d=\"M8 14h.01\"></path><path d=\"M12 14h.01\"></path><path d=\"M16 14h.01\"></path><path d=\"M8 18h.01\"></path><path d=\"M12 18h.01\"></path><path d=\"M16 18h.01\"></path>", "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><path d=\"M16 3.128a4 4 0 0 1 0 7.744\"></path><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle>", "vote": "<path d=\"m9 12 2 2 4-4\"></path><path d=\"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z\"></path><path d=\"M22 19H2\"></path>", "camera": "<path d=\"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z\"></path><circle cx=\"12\" cy=\"13\" r=\"3\"></circle>", "bell": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"></path><path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"></path>", "mail": "<path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\"></path><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"></rect>", "message-square-text": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"></path><path d=\"M7 11h10\"></path><path d=\"M7 15h6\"></path><path d=\"M7 7h8\"></path>", "sliders-vertical": "<path d=\"M10 8h4\"></path><path d=\"M12 21v-9\"></path><path d=\"M12 8V3\"></path><path d=\"M17 16h4\"></path><path d=\"M19 12V3\"></path><path d=\"M19 21v-5\"></path><path d=\"M3 14h4\"></path><path d=\"M5 10V3\"></path><path d=\"M5 21v-7\"></path>", "settings": "<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>", "wifi": "<path d=\"M12 20h.01\"></path><path d=\"M2 8.82a15 15 0 0 1 20 0\"></path><path d=\"M5 12.859a10 10 0 0 1 14 0\"></path><path d=\"M8.5 16.429a5 5 0 0 1 7 0\"></path>", "bell-ring": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"></path><path d=\"M22 8c0-2.3-.8-4.3-2-6\"></path><path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"></path><path d=\"M4 2C2.8 3.7 2 5.7 2 8\"></path>", "log-out": "<path d=\"m16 17 5-5-5-5\"></path><path d=\"M21 12H9\"></path><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path>", "check": "<path d=\"M20 6 9 17l-5-5\"></path>", "calendar-plus": "<path d=\"M16 19h6\"></path><path d=\"M16 2v4\"></path><path d=\"M19 16v6\"></path><path d=\"M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5\"></path><path d=\"M3 10h18\"></path><path d=\"M8 2v4\"></path>", "qr-code": "<rect width=\"5\" height=\"5\" x=\"3\" y=\"3\" rx=\"1\"></rect><rect width=\"5\" height=\"5\" x=\"16\" y=\"3\" rx=\"1\"></rect><rect width=\"5\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"></rect><path d=\"M21 16h-3a2 2 0 0 0-2 2v3\"></path><path d=\"M21 21v.01\"></path><path d=\"M12 7v3a2 2 0 0 1-2 2H7\"></path><path d=\"M3 12h.01\"></path><path d=\"M12 3h.01\"></path><path d=\"M12 16v.01\"></path><path d=\"M16 12h1\"></path><path d=\"M21 12v.01\"></path><path d=\"M12 21v-1\"></path>", "copy": "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"></rect><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"></path>", "trash-2": "<path d=\"M10 11v6\"></path><path d=\"M14 11v6\"></path><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\"></path><path d=\"M3 6h18\"></path><path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>", "file-spreadsheet": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"></path><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"></path><path d=\"M8 13h2\"></path><path d=\"M14 13h2\"></path><path d=\"M8 17h2\"></path><path d=\"M14 17h2\"></path>", "plus": "<path d=\"M5 12h14\"></path><path d=\"M12 5v14\"></path>", "search": "<path d=\"m21 21-4.34-4.34\"></path><circle cx=\"11\" cy=\"11\" r=\"8\"></circle>", "pencil": "<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"></path><path d=\"m15 5 4 4\"></path>", "lock-open": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"></path>", "minus": "<path d=\"M5 12h14\"></path>", "clock": "<path d=\"M12 6v6l4 2\"></path><circle cx=\"12\" cy=\"12\" r=\"10\"></circle>", "save": "<path d=\"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z\"></path><path d=\"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7\"></path><path d=\"M7 3v4a1 1 0 0 0 1 1h7\"></path>", "scroll-text": "<path d=\"M15 12h-5\"></path><path d=\"M15 8h-5\"></path><path d=\"M19 17V5a2 2 0 0 0-2-2H4\"></path><path d=\"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3\"></path>", "megaphone": "<path d=\"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z\"></path><path d=\"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14\"></path><path d=\"M8 6v8\"></path>", "send": "<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\"></path><path d=\"m21.854 2.147-10.94 10.939\"></path>", "message-square": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"></path>", "mail-open": "<path d=\"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z\"></path><path d=\"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10\"></path>", "calendar": "<path d=\"M8 2v4\"></path><path d=\"M16 2v4\"></path><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect><path d=\"M3 10h18\"></path>", "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>", "palette": "<path d=\"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z\"></path><circle cx=\"13.5\" cy=\"6.5\" r=\".5\" fill=\"currentColor\"></circle><circle cx=\"17.5\" cy=\"10.5\" r=\".5\" fill=\"currentColor\"></circle><circle cx=\"6.5\" cy=\"12.5\" r=\".5\" fill=\"currentColor\"></circle><circle cx=\"8.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"></circle>", "shield": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"></path>", "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>", "star": "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"></path>"};
/* 로테 라운지 매칭 Admin — 와이넥스 포트폴리오 체험판
 * 실제 운영 화면과 같은 구성으로 만든 가상 데이터 버전. 모든 상태는 브라우저 메모리에만 있다.
 */
;(function () {
  var E = Demo.esc
  var ACC = "#E8590C"

  function ic(name, cls) {
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-' +
      name + " " + (cls || "") + '" aria-hidden="true">' + (ICONS[name] || "") + "</svg>"
    )
  }

  // ---------- 가상 데이터 ----------
  function rng(seed) {
    var a = seed >>> 0
    return function () {
      a = (a + 0x6d2b79f5) >>> 0
      var t = a
      t = Math.imul(t ^ (t >>> 15), t | 1)
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
  }
  function pick(r, arr) { return arr[Math.floor(r() * arr.length)] }
  function shuffle(r, arr) {
    var a = arr.slice()
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t }
    return a
  }

  var SUR = ["강", "고", "남", "문", "배", "백", "서", "신", "안", "양", "오", "유", "임", "장", "전", "차", "천", "하", "한", "홍", "황", "권", "노", "송", "변", "편"]
  var MG = ["도윤", "서준", "하준", "시우", "지호", "준서", "건우", "현우", "우진", "민재", "선우", "연우", "유준", "정우", "승현", "지환", "태윤", "은찬", "재원", "도현", "승민", "한결", "시훈", "이안", "로운", "태오"]
  var FG = ["서연", "지유", "하은", "수아", "지아", "서윤", "채원", "다은", "예린", "소율", "나연", "유나", "가은", "윤서", "하린", "세아", "아린", "연서", "다인", "보람", "새봄", "라희"]
  var JOBS_M = ["연구원", "마케터", "회계사", "건축가", "엔지니어", "기획자", "은행원", "변리사", "물리치료사", "영상PD", "데이터분석가", "세무사", "스타트업 대표", "항공정비사", "제약 영업", "IT 컨설턴트", "셰프", "대학 강사"]
  var JOBS_F = ["디자이너", "교사", "간호사", "약사", "승무원", "마케터", "연구원", "아나운서 준비", "번역가", "플로리스트", "회계사", "UX 리서처", "사회복지사", "필라테스 강사", "기자", "콘텐츠 기획자"]
  var AREAS = ["마포", "성수", "판교", "분당", "일산", "목동", "왕십리", "합정", "여의도", "광교", "부천", "수원", "용산", "서초", "동탄", "평촌", "인천 송도", "연남"]
  var INTRO = ["산책 좋아해요", "커피 한잔 해요", "잘 웃어요", "대화가 즐거운 사람", "여행 좋아해요", "요리 잘해요", "주말엔 등산", "책 읽는 사람", "차분한 편", "강아지 키워요", "맛집 탐방러", "운동 꾸준히 해요", "영화 좋아해요", "배려심 많아요", "말이 잘 통하는 사람 찾아요", "캠핑 다녀요"]
  var MBTI = ["ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"]
  var REQS = ["물 한 잔 부탁드려요", "물티슈 필요해요", "펜이 안 나와요", "자리가 조금 추워요", "명찰을 다시 받고 싶어요", "얼음 좀 주세요", "충전기 빌릴 수 있을까요", "음료 리필 부탁드려요"]
  var LETTERS = ["아까 대화 즐거웠어요", "2부 때 또 얘기해요!", "웃는 모습이 좋았어요 🙂", "혹시 커피 좋아하세요?", "여행 얘기 더 듣고 싶어요", "말씀 재밌게 하시네요 ㅎㅎ", "다음 테이블에서 또 봬요", "취향이 비슷해서 반가웠어요"]
  var REVIEWS = ["분위기 좋고 진행이 깔끔했어요", "처음인데 긴장이 금방 풀렸어요", "공간이 예쁘고 음료도 좋아요", "로테이션 진행이 매끄러워요", "친구에게도 추천하고 싶어요"]
  var FEEDS = ["진행자분이 친절했어요", "로테이션 시간이 조금 짧았어요", "음료가 맛있었어요", "다음에도 참여하고 싶어요", "자리 배치가 편했어요", "대화 카드가 도움이 됐어요", "음악 소리가 조금 컸어요"]

  function fmtTime(min) {
    var h = Math.floor(min / 60) % 24, m = min % 60
    var ap = h < 12 ? "오전" : "오후"
    var hh = h % 12 === 0 ? 12 : h % 12
    return ap + " " + String(hh).padStart(2, "0") + ":" + String(m).padStart(2, "0")
  }

  var uid = 1
  var nextRoundId = 20

  function makePerson(r, g, no, used) {
    var name
    do { name = pick(r, SUR) + pick(r, g === "m" ? MG : FG) } while (used[name])
    used[name] = 1
    return {
      id: "p" + uid++, g: g, no: no, name: name,
      intro: pick(r, INTRO), job: pick(r, g === "m" ? JOBS_M : JOBS_F),
      height: g === "m" ? 170 + Math.floor(r() * 16) : 156 + Math.floor(r() * 14),
      age: g === "m" ? 29 + Math.floor(r() * 9) : 27 + Math.floor(r() * 8),
      area: pick(r, AREAS), mbti: pick(r, MBTI),
      phone: "010-0000-" + String(1000 + Math.floor(r() * 9000)),
      at: 18 * 60 + 40 + Math.floor(r() * 40),
    }
  }

  function makeRound(o) {
    var r = rng(o.seed)
    var used = {}
    var people = []
    for (var i = 1; i <= o.nm; i++) people.push(makePerson(r, "m", i, used))
    for (var j = 1; j <= o.nf; j++) people.push(makePerson(r, "f", j, used))
    people.sort(function (a, b) { return a.at - b.at })
    var men = people.filter(function (p) { return p.g === "m" })
    var women = people.filter(function (p) { return p.g === "f" })
    var votes = {}, likes = {}, adj = {}, zeroOk = {}
    people.forEach(function (p) {
      likes[p.id] = r() < 0.55 ? Math.floor(r() * 4) : 0
      if (r() < o.voteRate) {
        var pool = shuffle(r, p.g === "m" ? women : men)
        votes[p.id] = pool.slice(0, 1 + Math.floor(r() * 3)).map(function (x) { return x.id })
      }
    })
    function t() { return 19 * 60 + 10 + Math.floor(r() * 90) }
    var requests = []
    for (var k = 0; k < o.req; k++) {
      var p = pick(r, people)
      requests.push({ id: "q" + uid++, pid: p.id, text: pick(r, REQS), at: t(), done: k >= o.pending })
    }
    requests.sort(function (a, b) { return b.at - a.at })
    var letters = []
    for (var l = 0; l < o.letters; l++) {
      var a = pick(r, people)
      var bPool = a.g === "m" ? women : men
      if (!bPool.length) break
      letters.push({ id: "l" + uid++, from: a.id, to: pick(r, bPool).id, text: LETTERS[(l + o.seed) % LETTERS.length], read: r() < 0.4, at: t() })
    }
    letters.sort(function (a, b) { return b.at - a.at })
    var reviews = []
    shuffle(r, people).slice(0, o.reviews).forEach(function (p, idx) {
      reviews.push({ id: "v" + uid++, pid: p.id, text: REVIEWS[(idx + o.seed) % REVIEWS.length], stars: r() < 0.8 ? 5 : 4, at: t(), ok: false })
    })
    reviews.sort(function (a, b) { return b.at - a.at })
    var feedbacks = []
    shuffle(r, people).slice(0, o.feeds).forEach(function (p, idx) {
      feedbacks.push({ id: "f" + uid++, pid: p.id, text: FEEDS[(idx + o.seed) % FEEDS.length], stars: 3 + Math.floor(r() * 3), at: t() })
    })
    feedbacks.sort(function (a, b) { return b.at - a.at })
    return {
      id: o.id, name: o.name, date: o.date, time: "19:30", place: "(가상) 로테 라운지 2층 라운지",
      maxPer: 20, msgLimit: 3, color: ACC,
      notify: [true, true, false, false],
      people: people, votes: votes, likes: likes, adj: adj, zeroOk: zeroOk,
      requests: requests, letters: letters, reviews: reviews, feedbacks: feedbacks,
      votingOpen: o.votingOpen, resultOpen: o.resultOpen, openTime: "",
      excluded: {}, threshold: 3,
      msgs: [
        "축하해요! 두 분이 서로를 선택했어요 💕\n오늘 가장 많은 관심을 받은 분이에요 👑",
        "오늘 많은 분들이 호감을 표시했어요 👑\n이번엔 인연이 닿지 않았지만 다음이 기대돼요 ✨",
        "축하해요! 두 분이 서로를 선택했어요 💕",
        "오늘 함께해 주셔서 고마워요. 다음 만남에서 봬요 🥂",
      ],
      cats: { people: true, letters: true, vote: true, result: true, request: true },
      global: { review: true, height: true, job: true, age: true },
    }
  }

  var S = {
    rounds: [
      makeRound({ id: 7, name: "로테 라운지 7회차", date: Demo.day(-35), nm: 16, nf: 15, seed: 71, voteRate: 0.95, req: 4, pending: 0, letters: 5, reviews: 6, feeds: 5, votingOpen: false, resultOpen: true }),
      makeRound({ id: 8, name: "로테 라운지 8회차", date: Demo.day(-28), nm: 20, nf: 17, seed: 83, voteRate: 0.95, req: 5, pending: 0, letters: 6, reviews: 7, feeds: 6, votingOpen: false, resultOpen: true }),
      makeRound({ id: 9, name: "로테 라운지 9회차", date: Demo.day(-14), nm: 14, nf: 12, seed: 97, voteRate: 0.9, req: 3, pending: 0, letters: 4, reviews: 5, feeds: 4, votingOpen: false, resultOpen: true }),
      makeRound({ id: 10, name: "로테 라운지 10회차", date: Demo.day(-7), nm: 19, nf: 18, seed: 109, voteRate: 0.92, req: 4, pending: 0, letters: 5, reviews: 6, feeds: 5, votingOpen: false, resultOpen: true }),
      makeRound({ id: 11, name: "로테 라운지 11회차", date: Demo.day(0), nm: 18, nf: 14, seed: 113, voteRate: 0.7, req: 5, pending: 3, letters: 4, reviews: 3, feeds: 4, votingOpen: true, resultOpen: false }),
      makeRound({ id: 12, name: "로테 라운지 12회차", date: "", nm: 6, nf: 4, seed: 127, voteRate: 0, req: 0, pending: 0, letters: 0, reviews: 0, feeds: 0, votingOpen: false, resultOpen: false }),
    ],
    active: 11,
    menuOpen: false,
    modal: null,
    pTab: "m", pSearch: "",
    vTab: "m",
    reqPendingOnly: false,
    msgSearch: "",
    notice: "", noticeTarget: "all",
    newRound: { name: "", date: "" },
    draft: null,
  }

  function R() {
    for (var i = 0; i < S.rounds.length; i++) if (S.rounds[i].id === S.active) return S.rounds[i]
    return S.rounds[0]
  }
  function person(rd, id) {
    for (var i = 0; i < rd.people.length; i++) if (rd.people[i].id === id) return rd.people[i]
    return null
  }
  function gl(g) { return g === "m" ? "남" : "여" }
  function tag(rd, id) { var p = person(rd, id); return p ? gl(p.g) + " " + p.no + "번" : "(삭제됨)" }
  function byGender(rd, g) {
    return rd.people.filter(function (p) { return p.g === g }).sort(function (a, b) { return a.no - b.no })
  }
  function realVotes(rd, id) {
    var n = 0
    for (var k in rd.votes) if (rd.votes[k].indexOf(id) >= 0) n++
    return n
  }
  function voters(rd, id) {
    var out = []
    for (var k in rd.votes) if (rd.votes[k].indexOf(id) >= 0) out.push(k)
    return out
  }
  function voterCount(rd) {
    var n = 0
    for (var k in rd.votes) if (rd.votes[k].length) n++
    return n
  }
  function received(rd, id) { return realVotes(rd, id) + (rd.adj[id] || 0) }
  function shown(rd, id) {
    var v = received(rd, id)
    return v === 0 && !rd.zeroOk[id] ? 1 : v
  }
  function mutuals(rd, includeExcluded) {
    var out = []
    byGender(rd, "m").forEach(function (m) {
      ;(rd.votes[m.id] || []).forEach(function (fid) {
        if ((rd.votes[fid] || []).indexOf(m.id) >= 0) {
          var key = m.id + "-" + fid
          if (includeExcluded || !rd.excluded[key]) out.push({ m: m.id, f: fid, key: key })
        }
      })
    })
    return out
  }
  function pending(rd) { return rd.requests.filter(function (q) { return !q.done }) }

  function rerender() {
    var a = document.activeElement
    var id = a && a.id
    var s = null, e = null
    try { s = a.selectionStart; e = a.selectionEnd } catch (x) {}
    Demo.update()
    if (id) {
      var n = document.getElementById(id)
      if (n) {
        n.focus()
        try { if (s != null) n.setSelectionRange(s, e) } catch (x) {}
      }
    }
  }

  // ---------- 공통 틀 ----------
  var NAV = [
    ["/admin", "layout-dashboard", "대시보드"],
    ["/admin/events", "calendar-days", "파티 관리"],
    ["/admin/participants", "users", "참가자 관리"],
    ["/admin/voting", "vote", "투표 관리"],
    ["/admin/matching", "heart", "매칭 결과"],
    ["/admin/reviews", "camera", "리뷰 인증"],
    ["/admin/requests", "bell", "요청사항 실시간"],
    ["/admin/messages", "mail", "편지함 모니터링"],
    ["/admin/feedbacks", "message-square-text", "참가자 피드백"],
    ["/admin/controls", "sliders-vertical", "화면/카테고리 제어"],
    ["/admin/settings", "settings", "설정"],
  ]

  function shell(path, body) {
    var rd = R()
    var pend = pending(rd).length
    var nav = NAV.map(function (n) {
      var on = n[0] === path
      var badge = n[0] === "/admin/requests" && pend > 0
        ? '<span class="ml-auto px-1.5 py-0.5 text-[10px] font-semibold rounded-full bg-[#E8590C] text-white">' + pend + "</span>" : ""
      return '<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ' +
        (on ? "bg-[#E8590C]/10 text-[#E8590C]" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900") +
        '" href="#' + n[0] + '" data-nav="1">' + ic(n[1], "w-[18px] h-[18px] " + (on ? "text-[#E8590C]" : "text-gray-400")) + n[2] + badge + "</a>"
    }).join("")
    return '<div class="admin-shell min-h-screen bg-[#F8F9FA]">' +
      '<div class="lg:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4">' +
      '<button class="p-2 -ml-2" data-act="menu" aria-label="메뉴 열기">' + ic("menu", "w-5 h-5 text-gray-600") + "</button>" +
      '<span class="text-sm font-medium text-gray-900">' + E(rd.name) + "</span>" +
      '<div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span><span class="text-xs text-gray-500">Live</span></div></div>' +
      (S.menuOpen ? '<div class="lg:hidden fixed inset-0 bg-black/50 z-50" data-act="menuClose"></div>' : "") +
      '<aside class="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 ' + (S.menuOpen ? "translate-x-0" : "-translate-x-full") + '">' +
      '<div class="flex items-center justify-between h-14 px-5 border-b border-gray-100"><div class="flex items-center gap-2">' +
      '<div class="w-8 h-8 rounded-lg bg-[#E8590C] flex items-center justify-center">' + ic("heart", "w-4 h-4 text-white") + "</div>" +
      '<span class="font-semibold text-gray-900 tracking-tight">Admin</span></div>' +
      '<button class="lg:hidden p-1.5 hover:bg-gray-100 rounded" data-act="menuClose" aria-label="메뉴 닫기">' + ic("x", "w-4 h-4 text-gray-500") + "</button></div>" +
      '<nav class="p-3 space-y-1">' + nav + "</nav></aside>" +
      '<div class="lg:ml-64">' +
      '<header class="hidden lg:flex sticky top-0 h-14 bg-white border-b border-gray-200 items-center justify-between px-6 z-40">' +
      '<div class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200"><span class="text-sm font-medium text-gray-700">' + E(rd.name) + "</span></div>" +
      '<div class="flex items-center gap-4">' +
      '<div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">' + ic("wifi", "w-3.5 h-3.5 text-green-600") + '<span class="text-xs font-medium text-green-700">실시간 연결됨</span></div>' +
      '<div class="relative"><button class="relative p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors" title="알림" data-act="bell">' + ic("bell-ring", "w-5 h-5") + "</button></div>" +
      '<button class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors" data-act="logout">' + ic("log-out", "w-4 h-4") + "로그아웃</button>" +
      "</div></header>" +
      '<main class="p-4 lg:p-6 pt-18 lg:pt-6">' + body + "</main></div>" + modal() + "</div>"
  }

  function title(h, p) {
    return '<div><h1 class="text-2xl font-semibold text-gray-900 tracking-tight">' + h + '</h1><p class="text-sm text-gray-500 mt-1">' + p + "</p></div>"
  }
  var INPUT = "px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E8590C]/20 focus:border-[#E8590C]"
  var GSHEET = "flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#188038] bg-[#188038]/10 rounded-lg hover:bg-[#188038]/20 transition-colors disabled:opacity-60"
  var TH = "px-4 py-3 text-xs font-semibold text-gray-600 uppercase"
  function badgeNo(p, size) {
    return '<span class="inline-flex items-center justify-center ' + (size || "w-7 h-7 text-xs") + " rounded-full font-bold text-white " + (p.g === "m" ? "bg-blue-500" : "bg-pink-500") + '">' + p.no + "</span>"
  }
  function toggle(on, act, data, small) {
    return small
      ? '<button type="button" class="relative w-10 h-6 rounded-full transition-colors ' + (on ? "bg-[#E8590C]" : "bg-gray-200") + '" data-act="' + act + '" ' + data + '><span class="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ' + (on ? "left-4" : "left-0.5") + '"></span></button>'
      : '<button type="button" class="relative w-12 h-7 rounded-full transition-colors ' + (on ? "bg-[#E8590C]" : "bg-gray-200") + '" data-act="' + act + '" ' + data + '><span class="absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform ' + (on ? "left-6" : "left-1") + '"></span></button>'
  }
  function stars(n) {
    var s = ""
    for (var i = 0; i < 5; i++) s += ic("star", "w-3.5 h-3.5 " + (i < n ? "text-[#E8590C] fill-[#E8590C]" : "demo-star-off"))
    return '<span class="inline-flex items-center gap-0.5">' + s + "</span>"
  }

  // ---------- 대시보드 ----------
  function pageDashboard() {
    var rd = R()
    var men = byGender(rd, "m").length, women = byGender(rd, "f").length
    var pend = pending(rd)
    function card(bg, icon, color, num, label) {
      return '<div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"><div class="flex items-center justify-between"><div class="w-10 h-10 rounded-lg ' + bg + ' flex items-center justify-center">' + ic(icon, "w-5 h-5 " + color) + '</div><span class="text-3xl font-bold ' + color + '">' + num + '</span></div><p class="mt-3 text-sm font-medium text-gray-600">' + label + "</p></div>"
    }
    var list = pend.length
      ? pend.map(function (q) {
          var p = person(rd, q.pid)
          return '<div class="flex items-center justify-between p-3 rounded-lg bg-orange-50 border border-orange-100"><div class="flex items-center gap-3"><span class="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-sm font-bold text-orange-600">' + (p ? p.no : "-") + '</span><div><p class="text-sm font-medium text-gray-900">' + E(q.text) + '</p><p class="text-xs text-gray-500">' + E(tag(rd, q.pid)) + " · " + fmtTime(q.at) + '</p></div></div><button class="flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg bg-white border border-orange-200 text-orange-600 hover:bg-orange-100 transition-colors" data-act="reqDone" data-id="' + q.id + '">' + ic("check", "w-3.5 h-3.5") + "처리완료</button></div>"
        }).join("")
      : '<p class="py-6 text-center text-sm text-gray-400">미처리 요청이 없습니다</p>'
    function quick(href, icon, label) {
      return '<a class="p-4 rounded-lg border border-gray-200 hover:border-[#E8590C] hover:bg-[#E8590C]/5 transition-all group" href="#' + href + '">' + ic(icon, "w-5 h-5 text-gray-400 group-hover:text-[#E8590C] mb-2") + '<p class="text-sm font-medium text-gray-700 group-hover:text-[#E8590C]">' + label + "</p></a>"
    }
    return '<div class="space-y-6">' + title("대시보드", "실시간 이벤트 현황을 확인하세요") +
      '<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">' +
      card("bg-blue-50", "users", "text-blue-600", men, "남자 참가자") +
      card("bg-pink-50", "users", "text-pink-600", women, "여자 참가자") +
      card("bg-[#E8590C]/10", "vote", "text-[#E8590C]", voterCount(rd), "투표 참여") +
      card("bg-orange-50", "bell", "text-orange-600", pend.length, "미처리 요청") + "</div>" +
      '<div class="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"><h2 class="text-lg font-semibold text-gray-900 mb-4">매칭 현황</h2><div class="grid grid-cols-2 gap-4">' +
      '<div class="text-center py-4 rounded-lg bg-gray-50">' + ic("heart", "w-6 h-6 mx-auto mb-2 text-[#E8590C]") + '<p class="text-2xl font-bold text-gray-900">' + mutuals(rd).length + '</p><p class="text-xs text-gray-500 mt-1">상호 매칭</p></div>' +
      '<div class="text-center py-4 rounded-lg bg-gray-50">' + ic("users", "w-6 h-6 mx-auto mb-2 text-gray-600") + '<p class="text-2xl font-bold text-gray-900">' + rd.people.length + '</p><p class="text-xs text-gray-500 mt-1">총 참가자</p></div></div></div>' +
      '<div class="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold text-gray-900">미처리 요청</h2><span class="px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-600">' + pend.length + "건</span></div>" +
      '<div class="space-y-3">' + list + '</div><a class="block w-full mt-4 py-2 text-sm font-medium text-center text-[#E8590C] hover:bg-[#E8590C]/5 rounded-lg transition-colors" href="#/admin/requests">전체 요청 보기 →</a></div>' +
      '<div class="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"><h2 class="text-lg font-semibold text-gray-900 mb-4">빠른 작업</h2><div class="grid grid-cols-2 lg:grid-cols-4 gap-3">' +
      quick("/admin/voting", "vote", "투표 관리") + quick("/admin/matching", "heart", "결과 공개") + quick("/admin/participants", "users", "참가자 관리") + quick("/admin/requests", "bell", "요청 처리") +
      "</div></div></div>"
  }

  // ---------- 파티 관리 ----------
  function roundUrl(rd) { return "https://demo.rotelounge.example/?event=" + rd.id }
  function pageEvents() {
    var cards = S.rounds.slice().reverse().map(function (rd) {
      var on = rd.id === S.active
      var m = byGender(rd, "m").length, f = byGender(rd, "f").length
      return '<div class="bg-white rounded-xl border shadow-sm p-5 ' + (on ? "border-[#E8590C] ring-1 ring-[#E8590C]/30" : "border-gray-200") + '"><div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4"><div class="min-w-0">' +
        '<div class="flex items-center gap-2"><h3 class="text-lg font-semibold text-gray-900 truncate">' + E(rd.name) + "</h3>" + (on ? '<span class="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-[#E8590C] text-white">관리중</span>' : "") + "</div>" +
        '<div class="flex items-center gap-3 mt-1 text-sm text-gray-500"><span>' + (rd.date ? E(rd.date) : "날짜 미정") + '</span><span class="inline-flex items-center gap-1">' + ic("users", "w-3.5 h-3.5") + " 남 " + m + " · 여 " + f + "</span></div>" +
        '<p class="mt-1 text-xs text-gray-400 break-all">' + E(roundUrl(rd)) + "</p></div>" +
        '<div class="flex items-center gap-2 flex-shrink-0">' +
        '<button class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors" data-act="qr" data-id="' + rd.id + '">' + ic("qr-code", "w-4 h-4") + "QR</button>" +
        '<button class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors" title="등록 링크 복사" data-act="copyLink" data-id="' + rd.id + '">' + ic("copy", "w-4 h-4") + "</button>" +
        (on ? '<span class="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-[#E8590C]">' + ic("check", "w-4 h-4") + " 선택됨</span>"
            : '<button class="px-4 py-2 text-sm font-semibold text-white bg-[#E8590C] rounded-lg hover:bg-[#E8590C]/90 transition-colors" data-act="selectRound" data-id="' + rd.id + '">이 파티 관리</button>') +
        '<button class="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="삭제" data-act="delRound" data-id="' + rd.id + '">' + ic("trash-2", "w-4 h-4") + "</button>" +
        "</div></div></div>"
    }).join("")
    return '<div class="space-y-6">' + title("파티 관리", "파티(회차)를 생성하면 QR이 만들어집니다. 참가자는 QR을 스캔해 등록합니다.") +
      '<div class="bg-white rounded-xl border border-gray-200 shadow-sm p-5"><div class="flex items-center gap-2 mb-4">' + ic("calendar-plus", "w-5 h-5 text-[#E8590C]") + '<h2 class="font-semibold text-gray-900">새 파티 생성</h2></div>' +
      '<div class="flex flex-col sm:flex-row gap-3">' +
      '<input id="newRoundName" placeholder="파티 이름 (예: 11월 로테 라운지 1회차)" class="flex-1 ' + INPUT + '" type="text" value="' + E(S.newRound.name) + '" data-input="newRoundName">' +
      '<input id="newRoundDate" class="' + INPUT + '" type="date" value="' + E(S.newRound.date) + '" data-input="newRoundDate">' +
      '<button id="newRoundBtn" ' + (S.newRound.name.trim() ? "" : 'disabled=""') + ' class="px-5 py-2.5 rounded-lg bg-[#E8590C] text-white text-sm font-semibold hover:bg-[#E8590C]/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60" data-act="createRound">생성</button>' +
      '</div></div><div class="space-y-3">' + cards + "</div></div>"
  }

  // ---------- 참가자 관리 ----------
  function pagePeople() {
    var rd = R()
    var q = S.pSearch.trim().toLowerCase()
    var men = byGender(rd, "m"), women = byGender(rd, "f")
    var list = (S.pTab === "m" ? men : women).filter(function (p) {
      if (!q) return true
      return [String(p.no), p.name, p.job, p.area, p.mbti, p.intro].join(" ").toLowerCase().indexOf(q) >= 0
    })
    var rows = list.length ? list.map(function (p) {
      return '<tr class="hover:bg-gray-50 transition-colors"><td class="px-4 py-3">' + badgeNo(p) + "</td>" +
        '<td class="px-4 py-3 text-sm font-medium text-gray-900">' + E(p.name) + "</td>" +
        '<td class="px-4 py-3 text-sm text-gray-500 max-w-[140px] truncate">' + E(p.intro) + "</td>" +
        '<td class="px-4 py-3 text-sm text-gray-600">' + E(p.job) + "</td>" +
        '<td class="px-4 py-3 text-sm text-gray-600">' + E(p.height) + "cm</td>" +
        '<td class="px-4 py-3 text-sm text-gray-600">' + E(p.age) + "세</td>" +
        '<td class="px-4 py-3 text-sm text-gray-600">' + E(p.area) + "</td>" +
        '<td class="px-4 py-3"><span class="px-2 py-0.5 text-xs font-medium rounded bg-gray-100 text-gray-700">' + E(p.mbti) + "</span></td>" +
        '<td class="px-4 py-3 text-sm text-gray-500">' + E(p.phone) + "</td>" +
        '<td class="px-4 py-3 text-sm text-gray-500">' + fmtTime(p.at) + "</td>" +
        '<td class="px-4 py-3"><div class="flex items-center justify-end gap-1">' +
        '<button class="p-1.5 rounded hover:bg-[#E8590C]/10 text-gray-500 hover:text-[#E8590C] transition-colors" title="수정" data-act="editP" data-id="' + p.id + '">' + ic("pencil", "w-4 h-4") + "</button>" +
        '<button class="p-1.5 rounded hover:bg-red-50 text-gray-500 hover:text-red-600 transition-colors" title="삭제" data-act="delP" data-id="' + p.id + '">' + ic("trash-2", "w-4 h-4") + "</button></div></td></tr>"
    }).join("") : '<tr><td colspan="11" class="px-4 py-10 text-center text-sm text-gray-400">' + (q ? "검색 결과가 없습니다" : "등록된 참가자가 없습니다") + "</td></tr>"
    var heads = ["번호", "성함", "한마디", "직업", "키", "나이", "사는곳", "MBTI", "연락처", "등록시각"].map(function (h) {
      return '<th class="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-left whitespace-nowrap">' + h + "</th>"
    }).join("") + '<th class="px-4 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider text-right">액션</th>'
    var tabOn = "px-4 py-2 text-sm font-medium rounded-md transition-all bg-white shadow-sm "
    var tabOff = "px-4 py-2 text-sm font-medium rounded-md transition-all text-gray-600 hover:text-gray-900"
    return '<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">' + title("참가자 관리", "참가자 정보를 조회하고 관리합니다") +
      '<div class="flex items-center gap-2"><button class="' + GSHEET + '" data-act="gsheet">' + ic("file-spreadsheet", "w-4 h-4") + "구글시트 내보내기</button>" +
      '<button class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#E8590C] rounded-lg hover:bg-[#E8590C]/90 transition-colors" data-act="addP">' + ic("plus", "w-4 h-4") + "참가자 추가</button></div></div>" +
      '<div class="flex gap-2 p-1 bg-gray-100 rounded-lg w-fit">' +
      '<button class="' + (S.pTab === "m" ? tabOn + "text-blue-600" : tabOff) + '" data-act="pTab" data-g="m">남자 (' + men.length + ")</button>" +
      '<button class="' + (S.pTab === "f" ? tabOn + "text-pink-600" : tabOff) + '" data-act="pTab" data-g="f">여자 (' + women.length + ")</button></div>" +
      '<div class="relative flex-1">' + ic("search", "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400") +
      '<input id="pSearch" placeholder="번호, 직업, 지역으로 검색..." class="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E8590C]/20 focus:border-[#E8590C]" type="text" value="' + E(S.pSearch) + '" data-input="pSearch"></div>' +
      '<div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"><div class="overflow-x-auto"><table class="w-full"><thead class="bg-gray-50 border-b border-gray-200"><tr>' + heads + '</tr></thead><tbody class="divide-y divide-gray-100">' + rows + "</tbody></table></div></div></div>"
  }

  // ---------- 투표 관리 ----------
  function pageVoting() {
    var rd = R()
    var list = byGender(rd, S.vTab)
    var total = 0, got = 0, likeSum = 0
    list.forEach(function (p) { var v = received(rd, p.id); total += v; if (v > 0) got++ })
    rd.people.forEach(function (p) { likeSum += rd.likes[p.id] || 0 })
    var rows = list.length ? list.map(function (p) {
      var real = realVotes(rd, p.id), a = rd.adj[p.id] || 0, lk = rd.likes[p.id] || 0
      var vs = voters(rd, p.id)
      var vsHtml = vs.length ? '<span class="text-xs text-gray-600 whitespace-nowrap">' + vs.map(function (id) { return E(tag(rd, id)) }).join(", ") + "</span>" : '<span class="text-xs text-gray-400">-</span>'
      return '<tr class="hover:bg-gray-50"><td class="px-4 py-3"><div class="flex items-center gap-3">' + badgeNo(p, "w-8 h-8 text-sm") +
        '<span class="text-sm font-medium text-gray-900 whitespace-nowrap">' + p.no + "번 · " + E(p.name) + " " + (p.g === "m" ? "남자" : "여자") + "</span></div></td>" +
        '<td class="px-4 py-3 text-center"><span class="text-xl font-bold text-[#E8590C]">' + shown(rd, p.id) + "</span>" +
        (received(rd, p.id) === 0
          ? '<label class="mt-1 flex items-center justify-center gap-1 text-[11px] text-gray-500 cursor-pointer whitespace-nowrap"><input class="accent-[#E8590C]" type="checkbox" data-change="zeroOk" data-id="' + p.id + '"' + (rd.zeroOk[p.id] ? " checked" : "") + ">실제 0표</label>"
          : "") + "</td>" +
        '<td class="px-4 py-3 text-center text-sm text-gray-500 whitespace-nowrap">' + real + " / +" + a + "</td>" +
        '<td class="px-4 py-3 text-center"><span class="inline-flex items-center gap-1 text-sm font-semibold ' + (lk ? "text-pink-500" : "text-gray-400") + '">' + ic("heart", "w-3.5 h-3.5" + (lk ? " fill-pink-500" : "")) + lk + "</span></td>" +
        '<td class="px-4 py-3 text-center">' + vsHtml + "</td>" +
        '<td class="px-4 py-3"><div class="flex items-center justify-center gap-2">' +
        '<button class="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50" data-act="adj" data-id="' + p.id + '" data-d="-1"' + (a <= 0 ? ' disabled=""' : "") + ">" + ic("minus", "w-4 h-4 text-gray-600") + "</button>" +
        '<span class="w-8 text-center text-sm font-semibold text-gray-900">' + a + "</span>" +
        '<button class="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors" data-act="adj" data-id="' + p.id + '" data-d="1">' + ic("plus", "w-4 h-4 text-gray-600") + "</button></div></td></tr>"
    }).join("") : '<tr><td colspan="6" class="px-4 py-10 text-center text-sm text-gray-400">참가자가 없습니다</td></tr>'
    var open = rd.votingOpen
    var tabOn = "px-4 py-2 text-sm font-medium rounded-md transition-all bg-white shadow-sm "
    var tabOff = "px-4 py-2 text-sm font-medium rounded-md transition-all text-gray-600 hover:text-gray-900"
    return '<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">' + title("투표 관리", "투표 승인 및 득표·찜 현황을 관리합니다") +
      '<button class="' + GSHEET + ' w-fit" data-act="gsheet">' + ic("file-spreadsheet", "w-4 h-4") + "득표 상위 구글시트 내보내기</button></div>" +
      '<div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div class="flex items-center gap-4">' +
      '<div class="w-12 h-12 rounded-xl flex items-center justify-center ' + (open ? "bg-green-100" : "bg-red-100") + '">' + ic(open ? "lock-open" : "lock", "w-6 h-6 " + (open ? "text-green-600" : "text-red-600")) + "</div>" +
      '<div><h3 class="text-lg font-semibold text-gray-900">투표 상태</h3><p class="text-sm font-medium ' + (open ? "text-green-600" : "text-red-600") + '">' + (open ? "투표 진행중 - 참가자가 투표할 수 있습니다" : "투표 잠금 - 참가자가 투표할 수 없습니다") + "</p></div></div>" +
      '<button class="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-50 ' + (open ? "bg-red-100 text-red-700 hover:bg-red-200" : "bg-green-100 text-green-700 hover:bg-green-200") + '" data-act="toggleVoting">' + (open ? "투표 잠금" : "투표 시작") + "</button></div>" +
      '<div class="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">' +
      '<div class="text-center"><p class="text-2xl font-bold text-[#E8590C]">' + total + '</p><p class="text-xs text-gray-500 mt-1">총 득표수</p></div>' +
      '<div class="text-center"><p class="text-2xl font-bold text-pink-500 flex items-center justify-center gap-1">' + ic("heart", "w-4 h-4 fill-pink-500") + likeSum + '</p><p class="text-xs text-gray-500 mt-1">총 찜수 (실시간)</p></div>' +
      '<div class="text-center"><p class="text-2xl font-bold text-gray-900">' + list.length + '</p><p class="text-xs text-gray-500 mt-1">참가자</p></div>' +
      '<div class="text-center"><p class="text-2xl font-bold text-gray-900">' + got + '</p><p class="text-xs text-gray-500 mt-1">득표자</p></div></div></div>' +
      '<div class="flex gap-2 p-1 bg-gray-100 rounded-lg w-fit">' +
      '<button class="' + (S.vTab === "m" ? tabOn + "text-blue-600" : tabOff) + '" data-act="vTab" data-g="m">남자 득표현황</button>' +
      '<button class="' + (S.vTab === "f" ? tabOn + "text-pink-600" : tabOff) + '" data-act="vTab" data-g="f">여자 득표현황</button></div>' +
      '<div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"><div class="overflow-x-auto"><table class="w-full"><thead class="bg-gray-50 border-b border-gray-200"><tr>' +
      '<th class="' + TH + ' text-left">참가자</th><th class="' + TH + ' text-center">득표(표시)</th><th class="' + TH + ' text-center">실표/보정</th><th class="' + TH + ' text-center">찜</th><th class="' + TH + ' text-center">투표자</th><th class="' + TH + ' text-center">표수 조정</th>' +
      '</tr></thead><tbody class="divide-y divide-gray-100">' + rows + "</tbody></table></div></div></div>"
  }

  // ---------- 매칭 결과 ----------
  function pageMatching() {
    var rd = R()
    var all = mutuals(rd, true)
    var live = all.filter(function (x) { return !rd.excluded[x.key] })
    var open = rd.resultOpen
    var VARS = [["{회차}", "회차(파티) 이름"], ["{참가자이름}", "참가자 성함 (없으면 “N번”)"], ["{번호}", "참가자 명찰 번호"], ["{받은표}", "받은 득표 수"], ["{매칭번호}", "매칭된 상대 번호 (매칭 시)"], ["{매칭연락처}", "매칭된 상대 연락처 (매칭 시)"]]
    var CODE = "px-1.5 py-0.5 rounded bg-white border border-gray-200 text-[#E8590C] font-medium whitespace-nowrap"
    var th = rd.threshold
    var labels = [[th + "표 이상 · 매칭 성공", "(인기 + 상호매칭)"], [th + "표 이상 · 매칭 실패", "(인기지만 매칭 없음)"], [th + "표 미만 · 매칭 성공", "(상호매칭 성공)"], [th + "표 미만 · 매칭 실패", "(매칭 없음)"]]
    var rows = all.length ? all.map(function (x) {
      var m = person(rd, x.m), f = person(rd, x.f), ex = rd.excluded[x.key]
      return '<tr class="hover:bg-gray-50' + (ex ? " demo-done" : "") + '"><td class="px-4 py-3"><div class="flex items-center gap-3">' + badgeNo(m, "w-8 h-8 text-sm") + '<span class="text-sm font-medium text-gray-900 whitespace-nowrap demo-strike">' + m.no + "번 · " + E(m.name) + "</span></div></td>" +
        '<td class="px-4 py-3 text-center">' + ic("heart", "w-4 h-4 mx-auto text-pink-500 fill-pink-500") + "</td>" +
        '<td class="px-4 py-3"><div class="flex items-center gap-3">' + badgeNo(f, "w-8 h-8 text-sm") + '<span class="text-sm font-medium text-gray-900 whitespace-nowrap demo-strike">' + f.no + "번 · " + E(f.name) + "</span></div></td>" +
        '<td class="px-4 py-3 text-center"><span class="px-2 py-0.5 text-xs font-medium rounded-full whitespace-nowrap ' + (ex ? "bg-gray-100 text-gray-500" : "bg-[#E8590C]/10 text-[#E8590C]") + '">' + (ex ? "제외됨" : "상호 선택") + "</span></td>" +
        '<td class="px-4 py-3 text-right"><button class="px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors whitespace-nowrap" data-act="toggleExclude" data-key="' + x.key + '">' + (ex ? "다시 포함" : "매칭 제외") + "</button></td></tr>"
    }).join("") : '<tr><td colspan="5" class="px-4 py-10 text-center text-sm text-gray-400">아직 상호 매칭이 없습니다</td></tr>'
    return '<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">' + title("매칭 결과", "매칭 결과를 관리하고 참가자에게 공개합니다") +
      '<button class="' + GSHEET + ' w-fit" data-act="gsheet">' + ic("file-spreadsheet", "w-4 h-4") + "매칭결과 구글시트 내보내기</button></div>" +
      '<div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"><div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4"><div class="flex items-center gap-4">' +
      '<div class="w-12 h-12 rounded-xl flex items-center justify-center ' + (open ? "bg-[#E8590C]/10" : "bg-gray-100") + '">' + ic("heart", "w-6 h-6 " + (open ? "text-[#E8590C]" : "text-gray-400")) + "</div>" +
      '<div><h3 class="text-lg font-semibold text-gray-900">결과 공개 상태</h3><p class="text-sm font-medium ' + (open ? "text-[#E8590C]" : "text-gray-500") + '">' + (open ? "결과 공개중 - 참가자가 결과를 확인할 수 있습니다" : "결과 비공개 - 참가자에게 아직 결과가 보이지 않습니다") + "</p></div></div>" +
      '<div class="flex items-center gap-3"><div class="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-gray-50">' + ic("clock", "w-4 h-4 text-gray-500") +
      '<input id="openTime" class="bg-transparent text-sm font-medium text-gray-700 focus:outline-none" type="time" value="' + E(rd.openTime) + '" data-change="openTime"></div>' +
      '<button class="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-50 whitespace-nowrap ' + (open ? "bg-gray-100 text-gray-700 hover:bg-gray-200" : "bg-[#E8590C] text-white hover:bg-[#E8590C]/90") + '" data-act="toggleResult">' + (open ? "공개 중지" : "결과 공개") + "</button></div></div>" +
      '<div class="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100"><div class="text-center"><p class="text-2xl font-bold text-[#E8590C]">' + live.length + '</p><p class="text-xs text-gray-500 mt-1">상호 매칭</p></div>' +
      '<div class="text-center"><p class="text-2xl font-bold text-gray-900">' + (rd.openTime ? E(fmtTime(+rd.openTime.slice(0, 2) * 60 + +rd.openTime.slice(3, 5))) : "미설정") + '</p><p class="text-xs text-gray-500 mt-1">오픈 시간</p></div></div>' +
      '<p class="text-xs text-gray-400 mt-3">※ 결과 열람 = <b>결과 공개 ON</b> 이고 <b>오픈 시간</b>이 지난 경우에만 가능 (시간 미설정 시 공개 ON 즉시)</p></div>' +
      '<div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4"><div class="flex items-center gap-2">' + ic("message-square-text", "w-5 h-5 text-[#E8590C]") +
      '<div><h3 class="font-semibold text-gray-900">투표결과 탭 문구</h3><p class="text-xs text-gray-500 mt-0.5">참가자별 (받은 득표 × 매칭 여부)에 따라 결과 탭에 다른 문구가 표시됩니다</p></div></div>' +
      '<button class="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all disabled:opacity-60 bg-[#E8590C] text-white hover:bg-[#E8590C]/90" data-act="saveMsgs">' + ic("save", "w-4 h-4") + "문구 저장</button></div>" +
      '<div class="mb-4 rounded-lg border border-[#E8590C]/20 bg-[#E8590C]/5 px-4 py-3"><p class="text-sm font-semibold text-gray-800">📌 문구에 변수 넣기</p>' +
      '<p class="text-xs text-gray-600 mt-1">문구 안에 아래 변수를 <b>중괄호 { }</b> 형태로 적으면, 참가자가 결과를 볼 때 각자의 값으로 자동 치환됩니다. 예) <code class="px-1 py-0.5 rounded bg-white border border-gray-200 text-[#E8590C]">{참가자이름}님, {회차} 결과예요!</code></p>' +
      '<div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-gray-600">' +
      VARS.map(function (v) { return '<div class="flex items-center gap-2"><code class="' + CODE + '">' + v[0] + "</code><span>" + v[1] + "</span></div>" }).join("") + "</div>" +
      '<p class="text-[11px] text-gray-400 mt-2">※ {매칭번호}·{매칭연락처}는 매칭 실패 문구에 넣으면 빈칸으로 표시됩니다. 변수명을 잘못 쓰면 그대로 노출되니 위 표기를 그대로 복사해 쓰세요.</p></div>' +
      '<div class="flex flex-wrap items-center gap-2 mb-4"><label class="text-sm font-medium text-gray-700">기준 득표수</label>' +
      '<input id="threshold" min="0" class="w-20 px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E8590C]/20 focus:border-[#E8590C]" type="number" value="' + th + '" data-change="threshold">' +
      '<span class="text-sm text-gray-500">표 — 이 수 <b>이상</b>이면 “이상”, <b>미만</b>이면 “미만” 문구 적용 (받은 득표 = 실표+보정)</span></div>' +
      '<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">' +
      labels.map(function (l, i) {
        return '<div><label class="block text-sm font-medium text-gray-700 mb-1.5">' + l[0] + ' <span class="text-xs font-normal text-gray-400">' + l[1] + "</span></label>" +
          '<textarea id="msg' + i + '" rows="3" placeholder="결과 탭에 표시할 문구" class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#E8590C]/20 focus:border-[#E8590C]" data-input="msg" data-i="' + i + '">' + E(rd.msgs[i]) + "</textarea></div>"
      }).join("") + "</div>" +
      '<p class="text-xs text-gray-400 mt-3">※ 매칭 성공자는 이 문구와 함께 상대방 연락처가 자동으로 표시됩니다. 줄바꿈도 그대로 반영됩니다.</p></div>' +
      '<div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"><div class="overflow-x-auto"><table class="w-full"><thead class="bg-gray-50 border-b border-gray-200"><tr>' +
      '<th class="' + TH + ' text-left">남자</th><th class="' + TH + ' text-center"></th><th class="' + TH + ' text-left">여자</th><th class="' + TH + ' text-center">유형</th><th class="' + TH + ' text-right">액션</th>' +
      '</tr></thead><tbody class="divide-y divide-gray-100">' + rows + "</tbody></table></div></div></div>"
  }

  // ---------- 리뷰 인증 ----------
  function pageReviews() {
    var rd = R()
    var body = rd.reviews.length
      ? '<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">' + rd.reviews.map(function (v) {
          var p = person(rd, v.pid)
          return '<div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">' +
            '<button type="button" class="block w-full text-left" data-act="viewReview" data-id="' + v.id + '">' + reviewShot(v) + "</button>" +
            '<div class="p-3"><div class="flex items-center justify-between gap-2"><span class="text-sm font-medium text-gray-900 truncate">' + E(tag(rd, v.pid)) + (p ? " · " + E(p.name) : "") + '</span><span class="text-xs text-gray-400 whitespace-nowrap">' + fmtTime(v.at) + "</span></div>" +
            '<button class="mt-2 w-full flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ' + (v.ok ? "bg-green-50 text-green-700" : "bg-[#E8590C]/10 text-[#E8590C] hover:bg-[#E8590C]/20") + '" data-act="reviewOk" data-id="' + v.id + '">' + ic("check", "w-3.5 h-3.5") + (v.ok ? "인증 완료" : "인증 확인") + "</button></div></div>"
        }).join("") + "</div>"
      : '<div class="bg-white rounded-xl border border-gray-200 shadow-sm py-16 flex flex-col items-center text-gray-400">' + ic("camera", "w-10 h-10 mb-3") + '<p class="text-sm">아직 제출된 리뷰 캡쳐가 없습니다</p></div>'
    return '<div class="space-y-6">' + title("리뷰 인증", "참가자가 결과 확인 전 제출한 리뷰 캡쳐입니다 · 최신순 · 총 " + rd.reviews.length + "건") + body + "</div>"
  }
  function reviewShot(v) {
    return '<div class="demo-thumb flex items-center justify-center p-4"><div class="w-full max-w-sm bg-white rounded-xl shadow-sm p-3">' +
      '<div class="flex items-center gap-2 mb-2"><span class="w-6 h-6 rounded-full bg-[#E8590C]/10 flex items-center justify-center">' + ic("heart", "w-3.5 h-3.5 text-[#E8590C]") + '</span><span class="text-xs font-semibold text-gray-800">방문자 리뷰</span></div>' +
      stars(v.stars) + '<p class="text-xs text-gray-700 mt-2 leading-relaxed line-clamp-2">' + E(v.text) + "</p>" +
      '<div class="mt-2 demo-bar rounded-full bg-gray-100"></div><div class="mt-1 demo-bar rounded-full bg-gray-100 w-16"></div></div></div>'
  }

  // ---------- 요청사항 ----------
  function pageRequests() {
    var rd = R()
    var pend = pending(rd).length
    var list = rd.requests.filter(function (q) { return !S.reqPendingOnly || !q.done }).sort(function (x, y) { return (x.done - y.done) || (y.at - x.at) })
    var cards = list.length ? list.map(function (q) {
      var p = person(rd, q.pid), g = p ? p.g : "m"
      return '<div class="bg-white rounded-xl p-4 border shadow-sm transition-all ' + (q.done ? "border-gray-200" : "border-orange-200 bg-orange-50/50") + '"><div class="flex items-center justify-between gap-3"><div class="flex items-center gap-4 min-w-0">' +
        '<div class="w-12 h-12 rounded-xl flex flex-col items-center justify-center leading-none flex-shrink-0 ' + (q.done ? "bg-gray-100" : "bg-orange-100") + " ring-1 " + (g === "m" ? "ring-blue-200" : "ring-pink-200") + '">' +
        '<span class="text-[10px] font-semibold ' + (g === "m" ? "text-blue-500" : "text-pink-500") + '">' + gl(g) + '</span><span class="text-lg font-bold ' + (q.done ? "text-gray-500" : "text-orange-600") + '">' + (p ? p.no : "-") + "</span></div>" +
        '<div class="min-w-0"><div class="flex items-center gap-2">' + ic("scroll-text", "w-4 h-4 " + (q.done ? "text-gray-400" : "text-orange-600")) + '<span class="font-medium ' + (q.done ? "text-gray-500" : "text-gray-900") + '">' + E(q.text) + "</span></div>" +
        '<p class="text-sm text-gray-500 mt-0.5">' + E(tag(rd, q.pid)) + " · " + fmtTime(q.at) + "</p></div></div>" +
        (q.done
          ? '<button class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap" data-act="reqUndo" data-id="' + q.id + '">' + ic("check", "w-4 h-4") + "처리됨</button>"
          : '<button class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#E8590C] rounded-lg hover:bg-[#E8590C]/90 transition-colors whitespace-nowrap" data-act="reqDone" data-id="' + q.id + '">' + ic("check", "w-4 h-4") + "처리완료</button>") +
        "</div></div>"
    }).join("") : '<div class="bg-white rounded-xl border border-gray-200 shadow-sm py-16 flex flex-col items-center text-gray-400">' + ic("bell", "w-10 h-10 mb-3") + '<p class="text-sm">' + (S.reqPendingOnly ? "미처리 요청이 없습니다" : "아직 요청이 없습니다") + "</p></div>"
    return '<div class="space-y-6"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">' + title("요청사항 실시간", "참가자의 요청을 실시간으로 확인하고 처리합니다") +
      '<div class="px-4 py-2 rounded-lg transition-all w-fit ' + (pend ? "bg-orange-100 border border-orange-200" : "bg-green-50 border border-green-200") + '"><span class="text-lg font-bold ' + (pend ? "text-orange-600" : "text-green-600") + '">' + pend + '</span><span class="text-sm ml-1 ' + (pend ? "text-orange-600" : "text-green-600") + '">건 미처리</span></div></div>' +
      '<div class="flex flex-wrap gap-2"><button class="px-3 py-1.5 text-sm font-medium rounded-lg border transition-all ' + (S.reqPendingOnly ? "bg-[#E8590C] border-[#E8590C] text-white" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50") + '" data-act="reqFilter">미처리만</button></div>' +
      '<div class="space-y-3">' + cards + "</div></div>"
  }

  // ---------- 편지함 ----------
  function pageMessages() {
    var rd = R()
    var q = S.msgSearch.trim()
    var list = rd.letters.filter(function (l) { return !q || l.text.indexOf(q) >= 0 })
    var read = rd.letters.filter(function (l) { return l.read }).length
    var rows = list.length ? list.map(function (l) {
      return '<tr class="hover:bg-gray-50"><td class="px-4 py-3"><span class="text-sm text-gray-700 whitespace-nowrap">' + E(tag(rd, l.from)) + '</span></td><td class="px-4 py-3 text-center text-gray-400">→</td>' +
        '<td class="px-4 py-3"><span class="text-sm text-gray-700 whitespace-nowrap">' + E(tag(rd, l.to)) + "</span></td>" +
        '<td class="px-4 py-3"><p class="text-sm max-w-md whitespace-pre-wrap break-words text-gray-900">' + E(l.text) + "</p></td>" +
        '<td class="px-4 py-3 text-center"><span class="px-2 py-0.5 text-xs font-medium rounded-full whitespace-nowrap ' + (l.read ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700") + '">' + (l.read ? "읽음" : "안읽음") + "</span></td>" +
        '<td class="px-4 py-3 text-center text-xs text-gray-500 whitespace-nowrap">' + fmtTime(l.at) + "</td>" +
        '<td class="px-4 py-3 text-right"><button class="p-1.5 rounded hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors" title="삭제" data-act="delLetter" data-id="' + l.id + '">' + ic("trash-2", "w-4 h-4") + "</button></td></tr>"
    }).join("") : '<tr><td colspan="7" class="px-4 py-10 text-center text-sm text-gray-400">' + (q ? "검색 결과가 없습니다" : "아직 편지가 없습니다") + "</td></tr>"
    function stat(icon, color, n, label) {
      return '<div class="bg-white rounded-xl p-4 border border-gray-100 text-center">' + ic(icon, "w-5 h-5 mx-auto mb-2 " + color) + '<p class="text-2xl font-bold text-gray-900">' + n + '</p><p class="text-xs text-gray-500">' + label + "</p></div>"
    }
    return '<div class="space-y-6">' + title("편지함 모니터링", "참가자 간 익명 편지 모니터링 + 운영 공지 발송") +
      '<div class="bg-white rounded-xl border border-gray-200 shadow-sm p-5"><div class="flex items-center gap-2 mb-4">' + ic("megaphone", "w-5 h-5 text-[#E8590C]") + '<h2 class="font-semibold text-gray-900">공지 발송 (참가자 앱 팝업)</h2></div>' +
      '<textarea id="notice" placeholder="예: 잠시 후 2부가 시작됩니다 / 다음 회차 특집 안내 등" class="w-full h-20 px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E8590C]/20 focus:border-[#E8590C] resize-none" data-input="notice">' + E(S.notice) + "</textarea>" +
      '<div class="flex flex-wrap items-center gap-3 mt-3"><select class="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E8590C]/20" data-change="noticeTarget">' +
      [["all", "전체 참가자"], ["min_votes", "N표 이상 득표자"], ["age_range", "나이 범위"]].map(function (o) { return '<option value="' + o[0] + '"' + (S.noticeTarget === o[0] ? " selected" : "") + ">" + o[1] + "</option>" }).join("") + "</select>" +
      '<button id="noticeSend" ' + (S.notice.trim() ? "" : 'disabled=""') + ' class="px-5 py-2 rounded-lg bg-[#E8590C] text-white text-sm font-semibold hover:bg-[#E8590C]/90 transition-colors flex items-center gap-2 disabled:opacity-60" data-act="sendNotice">' + ic("send", "w-4 h-4") + "발송</button></div></div>" +
      '<div class="relative flex-1">' + ic("search", "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400") +
      '<input id="msgSearch" placeholder="메시지 내용 검색..." class="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E8590C]/20 focus:border-[#E8590C]" type="text" value="' + E(S.msgSearch) + '" data-input="msgSearch"></div>' +
      '<div class="grid grid-cols-3 gap-4">' + stat("message-square", "text-[#E8590C]", rd.letters.length, "총 편지") + stat("mail-open", "text-green-500", read, "읽음") + stat("mail", "text-orange-500", rd.letters.length - read, "안읽음") + "</div>" +
      '<div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"><div class="overflow-x-auto"><table class="w-full"><thead class="bg-gray-50 border-b border-gray-200"><tr>' +
      '<th class="' + TH + ' text-left">보낸이</th><th class="' + TH + ' text-center"></th><th class="' + TH + ' text-left">받는이</th><th class="' + TH + ' text-left">내용</th><th class="' + TH + ' text-center">상태</th><th class="' + TH + ' text-center">시각</th><th class="' + TH + ' text-right">삭제</th>' +
      '</tr></thead><tbody class="divide-y divide-gray-100">' + rows + "</tbody></table></div></div></div>"
  }

  // ---------- 피드백 ----------
  function pageFeedbacks() {
    var rd = R()
    var body = rd.feedbacks.length
      ? '<div class="space-y-3">' + rd.feedbacks.map(function (f) {
          var p = person(rd, f.pid)
          return '<div class="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"><div class="flex items-center justify-between gap-3"><div class="flex items-center gap-3 min-w-0">' +
            (p ? badgeNo(p, "w-8 h-8 text-sm") : "") + '<div class="min-w-0"><p class="text-sm font-medium text-gray-900 truncate">' + E(tag(rd, f.pid)) + (p ? " · " + E(p.name) : "") + "</p>" + stars(f.stars) + "</div></div>" +
            '<span class="text-xs text-gray-400 whitespace-nowrap">' + fmtTime(f.at) + '</span></div><p class="text-sm text-gray-700 mt-3 leading-relaxed">' + E(f.text) + "</p></div>"
        }).join("") + "</div>"
      : '<div class="bg-white rounded-xl border border-gray-200 shadow-sm py-16 flex flex-col items-center text-gray-400">' + ic("message-square-text", "w-10 h-10 mb-3") + '<p class="text-sm">아직 제출된 피드백이 없습니다</p></div>'
    return '<div class="space-y-6">' + title("참가자 피드백", "투표 제출 시 남긴 이용후기·피드백입니다 · 최신순 · 총 " + rd.feedbacks.length + "건") + body + "</div>"
  }

  // ---------- 화면/카테고리 제어 ----------
  var CATS = [["people", "users", "참가자"], ["letters", "mail", "편지함"], ["vote", "vote", "투표"], ["result", "heart", "투표결과"], ["request", "bell", "요청하기"]]
  var GLOBALS = [["review", "리뷰 필수(결과 안내)", "결과 잠금 화면에 “리뷰 작성 후 오픈” 안내를 표시합니다"], ["height", "키 공개", "참가자 명단·투표 화면에 키를 표시합니다 (비공개 시 숨김)"], ["job", "직업 공개", "참가자 명단·투표 화면에 직업을 표시합니다 (비공개 시 숨김)"], ["age", "나이 공개", "참가자 명단·투표 화면에 나이를 표시합니다 (비공개 시 숨김)"]]
  function pageControls() {
    var rd = R()
    var openN = CATS.filter(function (c) { return rd.cats[c[0]] }).length
    return '<div class="space-y-6">' + title("화면/카테고리 제어", "참가자 앱의 각 화면을 개별 제어합니다 (변경 즉시 실시간 반영)") +
      '<div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><h3 class="text-lg font-semibold text-gray-900">현재 상태</h3>' +
      '<p class="text-sm text-gray-500 mt-1">' + CATS.length + '개 카테고리 중 <span class="font-semibold text-[#E8590C]">' + openN + "개</span> 공개</p></div>" +
      '<div class="flex gap-2"><button class="px-4 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-lg hover:bg-green-200 disabled:opacity-50 transition-colors" data-act="catsAll" data-v="1"' + (openN === CATS.length ? ' disabled=""' : "") + ">전체 열기</button>" +
      '<button class="px-4 py-2 text-sm font-medium text-red-700 bg-red-100 rounded-lg hover:bg-red-200 disabled:opacity-50 transition-colors" data-act="catsAll" data-v="0"' + (openN === 0 ? ' disabled=""' : "") + ">전체 잠금</button></div></div></div>" +
      '<div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"><div class="px-5 py-4 border-b border-gray-100"><h3 class="font-semibold text-gray-900">카테고리별 제어</h3></div><div class="divide-y divide-gray-100">' +
      CATS.map(function (c) {
        var on = rd.cats[c[0]]
        return '<div class="px-5 py-4 flex items-center justify-between"><div class="flex items-center gap-4"><div class="w-10 h-10 rounded-lg flex items-center justify-center ' + (on ? "bg-[#E8590C]/10" : "bg-gray-100") + '">' + ic(c[1], "w-5 h-5 " + (on ? "text-[#E8590C]" : "text-gray-400")) + "</div>" +
          '<div><div class="flex items-center gap-2"><h4 class="font-medium text-gray-900">' + c[2] + '</h4><span class="px-2 py-0.5 text-[10px] font-semibold rounded-full ' + (on ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700") + '">' + (on ? "공개중" : "잠금") + "</span></div></div></div>" +
          toggle(on, "cat", 'data-k="' + c[0] + '"') + "</div>"
      }).join("") + "</div></div>" +
      '<div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"><div class="px-5 py-4 border-b border-gray-100"><h3 class="font-semibold text-gray-900">전역 설정</h3></div>' +
      GLOBALS.map(function (g, i) {
        return '<div class="px-5 py-4 flex items-center justify-between gap-4' + (i ? " border-t border-gray-100" : "") + '"><div><h4 class="font-medium text-gray-900">' + g[1] + '</h4><p class="text-sm text-gray-500">' + g[2] + "</p></div>" + toggle(rd.global[g[0]], "glob", 'data-k="' + g[0] + '"') + "</div>"
      }).join("") + "</div></div>"
  }

  // ---------- 설정 ----------
  function draft() {
    var rd = R()
    if (!S.draft || S.draft.rid !== rd.id) {
      S.draft = { rid: rd.id, name: rd.name, date: rd.date, time: rd.time, place: rd.place, maxPer: rd.maxPer, msgLimit: rd.msgLimit, color: rd.color, notify: rd.notify.slice() }
    }
    return S.draft
  }
  function pageSettings() {
    var d = draft()
    function lab(icon, text) { return '<label class="block text-sm font-medium text-gray-700 mb-1.5"><span class="flex items-center gap-1.5">' + ic(icon, "w-4 h-4 text-gray-400") + text + "</span></label>" }
    function inp(name, type, extra) { return '<input id="set_' + name + '" name="' + name + '" class="w-full ' + INPUT + '" type="' + type + '" value="' + E(d[name]) + '" data-input="draft"' + (extra || "") + ">" }
    function sect(icon, h) { return '<div class="px-5 py-4 border-b border-gray-100 flex items-center gap-2">' + ic(icon, "w-5 h-5 text-[#E8590C]") + '<h3 class="font-semibold text-gray-900">' + h + "</h3></div>" }
    var NOTI = ["새 참가자 등록 시", "새 요청사항 발생 시", "투표 완료 시", "메시지 발송 시"]
    return '<form class="space-y-6" data-submit="saveSettings"><div class="flex items-center justify-between gap-3">' + title("설정", "이벤트 기본 정보와 시스템 설정을 관리합니다") +
      '<button type="submit" class="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all disabled:opacity-60 bg-[#E8590C] text-white hover:bg-[#E8590C]/90 whitespace-nowrap">' + ic("save", "w-4 h-4") + "저장하기</button></div>" +
      '<div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">' + sect("calendar", "이벤트 정보") + '<div class="p-5 space-y-4">' +
      '<div><label class="block text-sm font-medium text-gray-700 mb-1.5">이벤트명</label>' + inp("name", "text") + "</div>" +
      '<div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div>' + lab("calendar", "날짜") + inp("date", "date") + "</div><div>" + lab("clock", "시간") + inp("time", "time") + "</div></div>" +
      "<div>" + lab("map-pin", "장소") + inp("place", "text") + "</div>" +
      '<div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div>' + lab("users", "최대 참가자 수 (남/여 각각)") + inp("maxPer", "number", ' min="0"') + '<p class="mt-1 text-xs text-gray-400">정원이 차면 해당 성별 신규 등록이 차단됩니다. 0이면 제한 없음.</p></div>' +
      "<div>" + lab("message-square", "익명 메시지 제한 (1인당)") + inp("msgLimit", "number", ' min="0"') + '<p class="mt-1 text-xs text-gray-400">참가자 1명이 보낼 수 있는 익명 메시지 수. 0이면 제한 없음.</p></div></div></div></div>' +
      '<div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">' + sect("palette", "외관 설정") + '<div class="p-5 space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-1.5">포인트 컬러</label><div class="flex items-center gap-3">' +
      '<input id="set_colorPick" class="w-10 h-10 rounded border border-gray-200 cursor-pointer" type="color" value="' + E(d.color) + '" data-input="colorPick">' +
      '<input id="set_color" name="color" class="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#E8590C]/20 focus:border-[#E8590C] min-w-0" type="text" value="' + E(d.color) + '" data-input="draft"></div></div></div></div>' +
      '<div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">' + sect("bell", "알림 설정") + '<div class="divide-y divide-gray-100">' +
      NOTI.map(function (n, i) { return '<div class="px-5 py-3 flex items-center justify-between"><span class="text-sm text-gray-700">' + n + "</span>" + toggle(d.notify[i], "notify", 'data-i="' + i + '"', true) + "</div>" }).join("") +
      '</div><p class="px-5 py-3 text-xs text-gray-400 border-t border-gray-100">변경 후 상단 “저장하기”를 눌러야 적용됩니다.</p></div>' +
      '<div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">' + sect("shield", "보안") + '<div class="p-5 space-y-4">' +
      '<div><label class="block text-sm font-medium text-gray-700 mb-1.5">현재 비밀번호</label><input id="pwCur" placeholder="현재 비밀번호" class="w-full ' + INPUT + '" type="password" autocomplete="off"></div>' +
      '<div><label class="block text-sm font-medium text-gray-700 mb-1.5">새 비밀번호</label><input id="pwNew" placeholder="새 비밀번호 (4자 이상)" class="w-full ' + INPUT + '" type="password" autocomplete="off"></div>' +
      '<button type="button" class="px-4 py-2 text-sm font-medium text-[#E8590C] bg-[#E8590C]/10 rounded-lg hover:bg-[#E8590C]/20 transition-colors flex items-center gap-2 disabled:opacity-60" data-act="changePw">비밀번호 변경</button></div></div>' +
      '<div class="bg-white rounded-xl border border-red-200 shadow-sm overflow-hidden"><div class="px-5 py-4 border-b border-red-100 bg-red-50"><h3 class="font-semibold text-red-700">위험 구역</h3></div><div class="p-5">' +
      '<p class="text-sm text-gray-600 mb-4">이 회차의 참가자·찜·메모·편지·투표·요청 등 모든 활동 데이터를 삭제합니다. 회차 자체와 설정은 유지되어 재사용할 수 있습니다. 이 작업은 되돌릴 수 없습니다.</p>' +
      '<button type="button" class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 disabled:opacity-60" data-act="wipe">이 회차 데이터 삭제</button></div></div></form>'
  }

  // ---------- 모달 ----------
  function modal() {
    var m = S.modal
    if (!m) return ""
    var inner = ""
    if (m.type === "p") {
      var p = m.p
      function f(name, label, type, extra) {
        return '<div><label class="block text-sm font-medium text-gray-700 mb-1.5">' + label + '</label><input name="' + name + '" class="w-full ' + INPUT + '" type="' + (type || "text") + '" value="' + E(p[name]) + '"' + (extra || "") + "></div>"
      }
      inner = '<form data-submit="saveP"><div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between"><h3 class="font-semibold text-gray-900">' + (m.isNew ? "참가자 추가" : "참가자 수정") + '</h3><button type="button" class="p-1.5 hover:bg-gray-100 rounded" data-act="closeModal">' + ic("x", "w-4 h-4 text-gray-500") + "</button></div>" +
        '<div class="p-5 space-y-4">' +
        '<div class="grid grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-gray-700 mb-1.5">성별</label><select name="g" class="w-full ' + INPUT + '"><option value="m"' + (p.g === "m" ? " selected" : "") + '>남자</option><option value="f"' + (p.g === "f" ? " selected" : "") + ">여자</option></select></div>" +
        f("no", "명찰 번호", "number", ' min="1" required') + "</div>" +
        f("name", "성함", "text", " required") + f("intro", "한마디") +
        '<div class="grid grid-cols-2 gap-4">' + f("job", "직업") + f("area", "사는곳") + "</div>" +
        '<div class="grid grid-cols-3 gap-4">' + f("height", "키(cm)", "number") + f("age", "나이", "number") + f("mbti", "MBTI") + "</div>" +
        f("phone", "연락처", "tel") +
        '</div><div class="px-5 py-4 border-t border-gray-100 flex justify-end gap-2"><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors" data-act="closeModal">취소</button>' +
        '<button type="submit" class="px-4 py-2 text-sm font-semibold text-white bg-[#E8590C] rounded-lg hover:bg-[#E8590C]/90 transition-colors">저장</button></div></form>'
    } else if (m.type === "qr") {
      var rd = null
      S.rounds.forEach(function (x) { if (x.id === m.id) rd = x })
      inner = '<div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between"><h3 class="font-semibold text-gray-900">' + E(rd.name) + ' 등록 QR</h3><button type="button" class="p-1.5 hover:bg-gray-100 rounded" data-act="closeModal">' + ic("x", "w-4 h-4 text-gray-500") + "</button></div>" +
        '<div class="p-6 text-center"><div class="mx-auto w-full max-w-sm p-4 rounded-xl border border-gray-200 bg-white">' + fakeQr(rd.id) + "</div>" +
        '<p class="mt-3 text-xs text-gray-400 break-all">' + E(roundUrl(rd)) + '</p><p class="mt-1 text-xs text-gray-400">체험판 QR은 장식용 가짜 패턴입니다</p></div>'
    } else if (m.type === "review") {
      var rv = null
      R().reviews.forEach(function (x) { if (x.id === m.id) rv = x })
      inner = '<div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between"><h3 class="font-semibold text-gray-900">' + E(tag(R(), rv.pid)) + ' 리뷰 캡쳐</h3><button type="button" class="p-1.5 hover:bg-gray-100 rounded" data-act="closeModal">' + ic("x", "w-4 h-4 text-gray-500") + "</button></div>" + reviewShot(rv)
    }
    return '<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><div class="absolute inset-0 bg-black/50" data-act="closeModal"></div>' +
      '<div class="relative w-full max-w-md bg-white rounded-xl shadow-xl overflow-y-auto demo-modal">' + inner + "</div></div>"
  }
  function fakeQr(seed) {
    var r = rng(seed * 7919), n = 25, s = ""
    function finder(x, y) { return (x < 7 && y < 7) || (x >= n - 7 && y < 7) || (x < 7 && y >= n - 7) }
    for (var y = 0; y < n; y++) for (var x = 0; x < n; x++) {
      var on
      if (finder(x, y)) {
        var fx = x >= n - 7 ? x - (n - 7) : x, fy = y >= n - 7 ? y - (n - 7) : y
        on = fx === 0 || fx === 6 || fy === 0 || fy === 6 || (fx >= 2 && fx <= 4 && fy >= 2 && fy <= 4)
      } else on = r() < 0.48
      if (on) s += '<rect x="' + x + '" y="' + y + '" width="1" height="1"/>'
    }
    return '<svg viewBox="-1 -1 ' + (n + 2) + " " + (n + 2) + '" width="100%" shape-rendering="crispEdges" fill="#111827" aria-label="QR">' + s + "</svg>"
  }

  // ---------- 라우팅 ----------
  var PAGES = {
    "/admin": pageDashboard, "/admin/events": pageEvents, "/admin/participants": pagePeople, "/admin/voting": pageVoting,
    "/admin/matching": pageMatching, "/admin/reviews": pageReviews, "/admin/requests": pageRequests, "/admin/messages": pageMessages,
    "/admin/feedbacks": pageFeedbacks, "/admin/controls": pageControls, "/admin/settings": pageSettings,
  }
  var lastPath = null
  function render(route) {
    var path = PAGES[route.path] ? route.path : "/admin"
    if (path !== lastPath) { S.menuOpen = false; lastPath = path }
    return shell(path, PAGES[path]())
  }

  // ---------- 동작 ----------
  var on = Demo.on
  on("menu", function () { S.menuOpen = true; Demo.update() })
  on("menuClose", function () { S.menuOpen = false; Demo.update() })
  on("bell", function () {
    var n = pending(R()).length
    Demo.toast(n ? "미처리 요청 " + n + "건이 있습니다" : "새 알림이 없습니다")
  })
  on("logout", function () { Demo.toast("체험판에서는 로그아웃 없이 둘러볼 수 있습니다") })
  on("gsheet", function () { Demo.toast("체험판: 구글시트 내보내기는 실제로 실행되지 않습니다") })
  on("closeModal", function () { S.modal = null; Demo.update() })

  // 요청
  on("reqDone", function (d) {
    R().requests.forEach(function (q) { if (q.id === d.id) q.done = true })
    Demo.update(); Demo.toast("요청을 처리완료로 옮겼습니다")
  })
  on("reqUndo", function (d) {
    R().requests.forEach(function (q) { if (q.id === d.id) q.done = false })
    Demo.update(); Demo.toast("다시 미처리로 돌렸습니다")
  })
  on("reqFilter", function () { S.reqPendingOnly = !S.reqPendingOnly; Demo.update() })

  // 파티
  on("newRoundName", function (v) { S.newRound.name = v; var b = document.getElementById("newRoundBtn"); if (b) b.disabled = !v.trim() })
  on("newRoundDate", function (v) { S.newRound.date = v })
  on("createRound", function () {
    var name = S.newRound.name.trim()
    if (!name) return
    var rd = makeRound({ id: nextRoundId++, name: name, date: S.newRound.date, nm: 0, nf: 0, seed: nextRoundId, voteRate: 0, req: 0, pending: 0, letters: 0, reviews: 0, feeds: 0, votingOpen: false, resultOpen: false })
    S.rounds.push(rd)
    S.newRound = { name: "", date: "" }
    Demo.update(); Demo.toast("‘" + name + "’ 파티를 만들었습니다. QR로 참가자를 받으세요")
  })
  on("selectRound", function (d) {
    S.active = +d.id; S.draft = null
    Demo.update(); Demo.toast(R().name + "을(를) 관리합니다")
  })
  on("delRound", function (d) {
    if (+d.id === S.active) return Demo.toast("관리중인 파티는 삭제할 수 없습니다. 다른 파티를 먼저 선택하세요")
    S.rounds = S.rounds.filter(function (x) { return x.id !== +d.id })
    Demo.update(); Demo.toast("파티를 삭제했습니다")
  })
  on("qr", function (d) { S.modal = { type: "qr", id: +d.id }; Demo.update() })
  on("copyLink", function (d) {
    var rd = null
    S.rounds.forEach(function (x) { if (x.id === +d.id) rd = x })
    try { navigator.clipboard.writeText(roundUrl(rd)).catch(function () {}) } catch (x) {}
    Demo.toast("등록 링크를 복사했습니다")
  })

  // 참가자
  on("pTab", function (d) { S.pTab = d.g; Demo.update() })
  on("pSearch", function (v) { S.pSearch = v; rerender() })
  on("addP", function () {
    var g = S.pTab, list = byGender(R(), g)
    var no = list.reduce(function (a, p) { return Math.max(a, p.no) }, 0) + 1
    S.modal = { type: "p", isNew: true, p: { g: g, no: no, name: "", intro: "", job: "", area: "", height: "", age: "", mbti: "", phone: "010-0000-" } }
    Demo.update()
  })
  on("editP", function (d) {
    var p = person(R(), d.id)
    S.modal = { type: "p", isNew: false, id: p.id, p: Object.assign({}, p) }
    Demo.update()
  })
  on("saveP", function (v) {
    var rd = R(), m = S.modal
    if (!v.name.trim()) return Demo.toast("성함을 입력하세요")
    var no = parseInt(v.no, 10) || 1
    var dup = rd.people.some(function (p) { return p.g === v.g && p.no === no && p.id !== m.id })
    if (dup) return Demo.toast(gl(v.g) + " " + no + "번은 이미 있습니다")
    var data = { g: v.g, no: no, name: v.name.trim(), intro: v.intro, job: v.job, area: v.area, height: parseInt(v.height, 10) || "", age: parseInt(v.age, 10) || "", mbti: v.mbti.toUpperCase(), phone: v.phone }
    if (m.isNew) {
      var now = new Date()
      data.id = "p" + uid++
      data.at = now.getHours() * 60 + now.getMinutes()
      rd.people.push(data)
      Demo.toast(gl(v.g) + " " + no + "번 " + data.name + " 님을 추가했습니다")
    } else {
      var p = person(rd, m.id)
      if (p.g !== data.g) { delete rd.votes[p.id]; for (var k in rd.votes) rd.votes[k] = rd.votes[k].filter(function (x) { return x !== p.id }) }
      Object.assign(p, data)
      Demo.toast("참가자 정보를 수정했습니다")
    }
    S.pTab = v.g; S.modal = null
    Demo.update()
  })
  on("delP", function (d) {
    var rd = R(), p = person(rd, d.id)
    rd.people = rd.people.filter(function (x) { return x.id !== d.id })
    delete rd.votes[d.id]
    for (var k in rd.votes) rd.votes[k] = rd.votes[k].filter(function (x) { return x !== d.id })
    rd.letters = rd.letters.filter(function (l) { return l.from !== d.id && l.to !== d.id })
    Demo.update(); Demo.toast(gl(p.g) + " " + p.no + "번 참가자를 삭제했습니다")
  })

  // 투표
  on("vTab", function (d) { S.vTab = d.g; Demo.update() })
  on("toggleVoting", function () {
    var rd = R(); rd.votingOpen = !rd.votingOpen
    Demo.update(); Demo.toast(rd.votingOpen ? "투표를 시작했습니다. 참가자 화면에 투표가 열립니다" : "투표를 잠갔습니다")
  })
  on("adj", function (d) {
    var rd = R()
    rd.adj[d.id] = Math.max(0, (rd.adj[d.id] || 0) + +d.d)
    Demo.update()
  })
  on("zeroOk", function (v, el) { R().zeroOk[el.dataset.id] = el.checked; Demo.update() })

  // 매칭
  on("toggleResult", function () {
    var rd = R(); rd.resultOpen = !rd.resultOpen
    Demo.update()
    Demo.toast(rd.resultOpen ? "결과를 공개했습니다 · 상호 매칭 " + mutuals(rd).length + "쌍" : "결과 공개를 중지했습니다")
  })
  on("openTime", function (v) { R().openTime = v; Demo.update() })
  on("threshold", function (v) { R().threshold = Math.max(0, parseInt(v, 10) || 0); rerender() })
  on("msg", function (v, el) { R().msgs[+el.dataset.i] = v })
  on("saveMsgs", function () { Demo.toast("결과 탭 문구를 저장했습니다") })
  on("toggleExclude", function (d) {
    var rd = R()
    rd.excluded[d.key] = !rd.excluded[d.key]
    Demo.update(); Demo.toast(rd.excluded[d.key] ? "이 쌍을 매칭 결과에서 제외했습니다" : "매칭 결과에 다시 포함했습니다")
  })

  // 리뷰
  on("viewReview", function (d) { S.modal = { type: "review", id: d.id }; Demo.update() })
  on("reviewOk", function (d) {
    R().reviews.forEach(function (v) { if (v.id === d.id) v.ok = !v.ok })
    Demo.update()
  })

  // 편지함
  on("notice", function (v) { S.notice = v; var b = document.getElementById("noticeSend"); if (b) b.disabled = !v.trim() })
  on("noticeTarget", function (v) { S.noticeTarget = v })
  on("msgSearch", function (v) { S.msgSearch = v; rerender() })
  on("sendNotice", function () {
    var rd = R(), n
    if (S.noticeTarget === "min_votes") n = rd.people.filter(function (p) { return received(rd, p.id) >= rd.threshold }).length
    else if (S.noticeTarget === "age_range") n = rd.people.filter(function (p) { return p.age >= 30 && p.age <= 35 }).length
    else n = rd.people.length
    S.notice = ""
    Demo.update(); Demo.toast("공지를 " + n + "명에게 팝업으로 보냈습니다")
  })
  on("delLetter", function (d) {
    var rd = R(); rd.letters = rd.letters.filter(function (l) { return l.id !== d.id })
    Demo.update(); Demo.toast("편지를 삭제했습니다")
  })

  // 제어
  on("cat", function (d) {
    var rd = R(); rd.cats[d.k] = !rd.cats[d.k]
    Demo.update()
  })
  on("catsAll", function (d) {
    var rd = R(); CATS.forEach(function (c) { rd.cats[c[0]] = d.v === "1" })
    Demo.update(); Demo.toast(d.v === "1" ? "모든 화면을 열었습니다" : "모든 화면을 잠갔습니다")
  })
  on("glob", function (d) { var rd = R(); rd.global[d.k] = !rd.global[d.k]; Demo.update() })

  // 설정
  on("draft", function (v, el) { draft()[el.name] = v; if (el.name === "color" && /^#[0-9a-fA-F]{6}$/.test(v)) { var c = document.getElementById("set_colorPick"); if (c) c.value = v } })
  on("colorPick", function (v) { draft().color = v.toUpperCase(); var t = document.getElementById("set_color"); if (t) t.value = v.toUpperCase() })
  on("notify", function (d) { var x = draft(); x.notify[+d.i] = !x.notify[+d.i]; rerender() })
  on("saveSettings", function () {
    var rd = R(), d = draft()
    if (!String(d.name).trim()) return Demo.toast("이벤트명을 입력하세요")
    rd.name = String(d.name).trim(); rd.date = d.date; rd.time = d.time; rd.place = d.place
    rd.maxPer = parseInt(d.maxPer, 10) || 0; rd.msgLimit = parseInt(d.msgLimit, 10) || 0
    rd.color = d.color; rd.notify = d.notify.slice()
    d.name = rd.name
    Demo.update(); Demo.toast("설정을 저장했습니다")
  })
  on("changePw", function () {
    var c = document.getElementById("pwCur"), n = document.getElementById("pwNew")
    if (!c.value) return Demo.toast("현재 비밀번호를 입력하세요")
    if (n.value.length < 4) return Demo.toast("새 비밀번호는 4자 이상이어야 합니다")
    c.value = ""; n.value = ""
    Demo.toast("비밀번호를 변경했습니다 (체험판이라 실제 저장되지 않음)")
  })
  on("wipe", function () {
    var rd = R()
    if (!window.confirm(rd.name + "의 모든 활동 데이터를 삭제할까요? (체험판: 새로고침하면 복구됩니다)")) return
    rd.people = []; rd.votes = {}; rd.likes = {}; rd.adj = {}; rd.zeroOk = {}; rd.excluded = {}
    rd.requests = []; rd.letters = []; rd.reviews = []; rd.feedbacks = []
    Demo.update(); Demo.toast("이 회차의 활동 데이터를 모두 삭제했습니다")
  })

  // 모바일 메뉴: 메뉴 링크를 누르면 닫는다 (hashchange 에서 처리)
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && (S.modal || S.menuOpen)) { S.modal = null; S.menuOpen = false; Demo.update() }
  })

  if (!location.hash) history.replaceState(null, "", "#/admin")
  Demo.mount(render)
  Demo.banner()
})()
