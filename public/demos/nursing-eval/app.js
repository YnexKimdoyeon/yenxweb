/* SIM ERP · 간호 시뮬레이션 실습 평가 — 포트폴리오 체험판
 * 화면 구성과 클래스는 실제 제품과 같고, 데이터는 모두 가상이다.
 * 상태는 브라우저 메모리에만 있으며 새로고침하면 처음으로 돌아간다.
 */
;(function () {
  "use strict"
  var E = Demo.esc
  var ICONS = {
"clipboard-check": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"></rect><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><path d=\"m9 14 2 2 4-4\"></path>",
"layout-dashboard": "<rect width=\"7\" height=\"9\" x=\"3\" y=\"3\" rx=\"1\"></rect><rect width=\"7\" height=\"5\" x=\"14\" y=\"3\" rx=\"1\"></rect><rect width=\"7\" height=\"9\" x=\"14\" y=\"12\" rx=\"1\"></rect><rect width=\"7\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"></rect>",
"square-pen": "<path d=\"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z\"></path>",
"user-round": "<circle cx=\"12\" cy=\"8\" r=\"5\"></circle><path d=\"M20 21a8 8 0 0 0-16 0\"></path>",
"users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><path d=\"M16 3.128a4 4 0 0 1 0 7.744\"></path><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle>",
"book-marked": "<path d=\"M10 2v8l3-3 3 3V2\"></path><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"></path>",
"graduation-cap": "<path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\"></path><path d=\"M22 10v6\"></path><path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\"></path>",
"network": "<rect x=\"16\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"></rect><rect x=\"2\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"></rect><rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"></rect><path d=\"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3\"></path><path d=\"M12 12V8\"></path>",
"book-open": "<path d=\"M12 7v14\"></path><path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\"></path>",
"settings": "<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>",
"calendar-days": "<path d=\"M8 2v4\"></path><path d=\"M16 2v4\"></path><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect><path d=\"M3 10h18\"></path><path d=\"M8 14h.01\"></path><path d=\"M12 14h.01\"></path><path d=\"M16 14h.01\"></path><path d=\"M8 18h.01\"></path><path d=\"M12 18h.01\"></path><path d=\"M16 18h.01\"></path>",
"chevron-down": "<path d=\"m6 9 6 6 6-6\"></path>",
"shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"></path><path d=\"m9 12 2 2 4-4\"></path>",
"bell": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"></path><path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"></path>",
"circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"m9 12 2 2 4-4\"></path>",
"triangle-alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"></path><path d=\"M12 9v4\"></path><path d=\"M12 17h.01\"></path>",
"circle-gauge": "<path d=\"M15.6 2.7a10 10 0 1 0 5.7 5.7\"></path><circle cx=\"12\" cy=\"12\" r=\"2\"></circle><path d=\"M13.4 10.6 19 5\"></path>",
"download": "<path d=\"M12 15V3\"></path><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><path d=\"m7 10 5 5 5-5\"></path>",
"search": "<path d=\"m21 21-4.34-4.34\"></path><circle cx=\"11\" cy=\"11\" r=\"8\"></circle>",
"upload": "<path d=\"M12 3v12\"></path><path d=\"m17 8-5-5-5 5\"></path><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path>",
"trash2": "<path d=\"M10 11v6\"></path><path d=\"M14 11v6\"></path><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\"></path><path d=\"M3 6h18\"></path><path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>",
"wifi": "<path d=\"M12 20h.01\"></path><path d=\"M2 8.82a15 15 0 0 1 20 0\"></path><path d=\"M5 12.859a10 10 0 0 1 14 0\"></path><path d=\"M8.5 16.429a5 5 0 0 1 7 0\"></path>",
"pen-line": "<path d=\"M13 21h8\"></path><path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"></path>",
"chevron-right": "<path d=\"m9 18 6-6-6-6\"></path>",
"check": "<path d=\"M20 6 9 17l-5-5\"></path>",
"dices": "<rect width=\"12\" height=\"12\" x=\"2\" y=\"10\" rx=\"2\" ry=\"2\"></rect><path d=\"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6\"></path><path d=\"M6 18h.01\"></path><path d=\"M10 14h.01\"></path><path d=\"M15 6h.01\"></path><path d=\"M18 9h.01\"></path>",
"plus": "<path d=\"M5 12h14\"></path><path d=\"M12 5v14\"></path>",
"pencil": "<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"></path><path d=\"m15 5 4 4\"></path>",
"target": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle>",
"chevron-up": "<path d=\"m18 15-6-6-6 6\"></path>",
"boxes": "<path d=\"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z\"></path><path d=\"m7 16.5-4.74-2.85\"></path><path d=\"m7 16.5 5-3\"></path><path d=\"M7 16.5v5.17\"></path><path d=\"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z\"></path><path d=\"m17 16.5-5-3\"></path><path d=\"m17 16.5 4.74-2.85\"></path><path d=\"M17 16.5v5.17\"></path><path d=\"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z\"></path><path d=\"M12 8 7.26 5.15\"></path><path d=\"m12 8 4.74-2.85\"></path><path d=\"M12 13.5V8\"></path>",
"list-checks": "<path d=\"M13 5h8\"></path><path d=\"M13 12h8\"></path><path d=\"M13 19h8\"></path><path d=\"m3 17 2 2 4-4\"></path><path d=\"m3 7 2 2 4-4\"></path>",
"user-check": "<path d=\"m16 11 2 2 4-4\"></path><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle>"
}
  ICONS["menu"] = '<path d="M4 12h16"></path><path d="M4 6h16"></path><path d="M4 18h16"></path>'
  ICONS["x"] = '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>'
  ICONS["arrow-left"] = '<path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path>'

  function ic(name, cls) {
    var extra = name === "trash2" ? " lucide-trash-2" : ""
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-' +
      name + extra + (cls ? " " + cls : "") + '" aria-hidden="true">' + (ICONS[name] || "") + "</svg>"
    )
  }

  // ───────────────────────── 가상 데이터 ─────────────────────────
  var seed = 20260314
  function rnd() {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    var t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  function pick(a) {
    return a[Math.floor(rnd() * a.length)]
  }
  function shuffle(a) {
    a = a.slice()
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var t = a[i]
      a[i] = a[j]
      a[j] = t
    }
    return a
  }

  var S = {
    semesters: [
      { id: "s261", label: "2026학년도 1학기" },
      { id: "s252", label: "2025학년도 2학기" },
      { id: "s251", label: "2025학년도 1학기" },
    ],
    semId: "s261",
    subjects: [
      { id: "sub1", name: "기초시뮬레이션 실습", profIds: ["p1", "p2", "p3"], itemSel: null },
      { id: "sub2", name: "통합 시뮬레이션 실습 1", profIds: [], itemSel: null },
      { id: "sub3", name: "고급 시뮬레이션 실습", profIds: [], itemSel: null },
    ],
    subjId: "sub1",
    mode: "admin",
    comps: [
      { id: "c1", name: "준비·감염관리" },
      { id: "c2", name: "환자확인·관계형성" },
      { id: "c3", name: "사정·간호수행" },
      { id: "c4", name: "임상추론" },
      { id: "c5", name: "의사소통·보고" },
    ],
    compPool: [{ id: "c6", name: "환자안전" }, { id: "c7", name: "윤리적 판단" }],
    compOrder: ["c1", "c2", "c3", "c4", "c5"],
    items: [],
    modules: [],
    profs: [
      { id: "p1", name: "한서윤", email: "prof1@example.com", active: true },
      { id: "p2", name: "오민재", email: "prof2@example.com", active: true },
      { id: "p3", name: "윤가람", email: "prof3@example.com", active: true },
    ],
    classes: "ABCDEFGHIJKL".split(""),
    lectures: "ABCDEF".split(""),
    classProf: {},
    students: [],
    results: {},
    drafts: {},
    memos: {},
    teams: {},
    grades: {},
    submitted: {},
    otherSubjComp: {},
    teamSize: 3,
    ui: {
      menu: null,
      nav: false,
      modal: null,
      dash: "all",
      cp: { q: "", lec: "all", cls: "all", tab: "all" },
      st: { q: "", lec: "all", cls: "all" },
      as: { q: "", cls: "all" },
      ev: { mod: "m5", cls: "J", team: 1, open: {}, view: "tablet" },
      tm: { cls: "A", scope: "all", basis: "size", n: 3 },
      subSel: "sub1",
    },
  }
  ;[
    // 단계, 수행목표, 역량, 평가 항목, 배점 기준, 유형
    [1, "손위생", "c1", "손위생 6단계를 수행한다", "6단계를 순서대로 모두 수행 시 2점", "개인"],
    [1, "물품 준비", "c1", "필요한 물품을 점검하고 준비한다", "빠진 물품 없이 준비 시 2점", "팀"],
    [1, "첫 만남", "c2", "자신을 소개하고 방문 목적을 설명한다", "소속·이름·목적을 모두 말하면 2점", "개인"],
    [1, "환자확인", "c2", "두 가지 이상 식별자로 환자를 확인한다", "개방형 질문 + 팔찌 대조 시 2점 / 하나 누락 시 1점", "개인"],
    [1, "활력징후", "c3", "활력징후를 정확히 측정하고 기록한다", "4가지 측정값 오차 없이 기록 시 2점", "개인"],
    [2, "건강사정", "c3", "주호소와 관련 증상을 체계적으로 사정한다", "OPQRST 중 5개 이상 확인 시 2점", "혼합"],
    [2, "건강사정", "c3", "통증을 척도로 평가하고 기록한다", "척도 선택과 재평가 계획까지 말하면 2점", "개인"],
    [3, "안전 간호", "c4", "낙상 위험을 평가하고 예방법을 교육한다", "위험도 평가 + 교육 2가지 이상 시 2점", "팀"],
    [3, "안전 간호", "c4", "처방된 검사 절차를 준비하고 설명한다", "준비 순서와 주의사항 설명 시 2점", "혼합"],
    [3, "환자 교육", "c4", "대상자 질문에 근거 있는 정보를 제공한다", "근거를 들어 정확히 답하면 2점", "개인"],
    [4, "보호자 소통", "c5", "보호자와 공감하며 대화한다", "경청·공감 표현이 드러나면 2점", "개인"],
    [4, "팀 협력", "c5", "필요할 때 팀원에게 도움을 요청한다", "역할 분담을 명확히 요청하면 2점", "팀"],
    [4, "상황 보고", "c5", "SBAR 형식으로 상황을 보고한다", "S·B·A·R 네 요소 모두 포함 시 2점", "개인"],
    [4, "상황 보고", "c5", "구두 처방을 되읽어 재확인한다", "약물명·용량·경로 되읽기 시 2점", "개인"],
    [5, "문제 해결", "c4", "제한 시간 안에 우선순위를 정해 해결한다", "우선순위 근거 제시 + 시간 내 완료 시 2점", "팀"],
  ].forEach(function (r, i) {
    S.items.push({ id: "i" + (i + 1), step: r[0], goal: r[1], comp: r[2], title: r[3], rule: r[4], type: r[5] })
  })
  ;[
    ["성인 호흡기계 사정 간호", "c3", "p1", "만성 기침과 호흡곤란으로 입원한 60대 환자의 초기 사정"],
    ["수술 전후 환자 간호", "c4", "p2", "복강경 수술 다음 날 통증과 배액을 호소하는 환자"],
    ["소아 발열 환자 간호", "c1", "p3", "38.9℃ 발열로 응급 입원한 4세 아동과 보호자"],
    ["노인 낙상 예방 간호", "c5", "p2", "야간에 혼자 화장실을 가려는 80대 입원 환자"],
    ["고위험 약물 투약 간호", "c3", "p1", "인슐린 투약 전 저혈당 증상을 보이는 환자"],
    ["다문화 대상자 의사소통 간호", "c2", "p3", "한국어가 서툰 외국인 산모의 퇴원 교육"],
  ].forEach(function (r, i) {
    S.modules.push({ id: "m" + (i + 1), name: r[0], comp: r[1], prof: r[2], scenario: r[3] })
  })
  S.classes.forEach(function (c) {
    S.classProf[c] = ""
  })
  S.classProf.A = "p1"
  S.classProf.B = "p1"
  S.classProf.C = "p2"
  S.classProf.D = "p2"
  S.classProf.E = "p3"
  S.classProf.F = "p3"

  var SUR = "김이박최정강조윤장임한오서신권황안송류홍전고문양손배백허남심노".split("")
  var GIV = ["하늘", "서진", "다온", "지유", "채원", "은솔", "소율", "예린", "하람", "가온", "세아", "민서", "유진", "도희", "시온", "라희", "수아", "나은", "태린", "윤슬", "아린", "다인", "보람", "새봄", "해솔", "초롱", "온유", "이든", "서하", "단비", "여울", "나래", "솔비", "마루", "한결", "슬기", "로아", "주아", "다율", "리안"]
  var usedNames = {}
  function newName() {
    for (var k = 0; k < 50; k++) {
      var n = pick(SUR) + pick(GIV)
      if (!usedNames[n]) {
        usedNames[n] = 1
        return n
      }
    }
    return pick(SUR) + pick(GIV)
  }
  var sidSeq = 51000
  function newSid() {
    sidSeq += 1 + Math.floor(rnd() * 6)
    return "2026" + String(sidSeq)
  }
  var ability = {}
  var diff = {}
  S.items.forEach(function (it) {
    diff[it.id] = 0.8 + rnd() * 0.17
  })
  S.classes.forEach(function (c, ci) {
    for (var k = 0; k < 5; k++) {
      var sid = newSid()
      S.students.push({ sid: sid, name: newName(), year: 3, lec: S.lectures[(ci * 5 + k) % 6], cls: c })
      ability[sid] = 0.86 + (rnd() - 0.5) * 0.16 + (ci % 4) * 0.012
    }
  })
  function genScores(sid) {
    var sc = {}
    S.items.forEach(function (it) {
      var p = Math.min(0.98, (ability[sid] || 0.88) * diff[it.id] * 1.08)
      sc[it.id] = rnd() < p ? 2 : rnd() < 0.88 ? 1 : 0
    })
    return sc
  }
  var absent = [S.students[23].sid, S.students[47].sid] // 전 모듈 미참여 (휴학 예정 등 가상 사례)
  S.students.forEach(function (s, idx) {
    S.results[s.sid] = {}
    if (absent.indexOf(s.sid) >= 0) return
    var ci = S.classes.indexOf(s.cls)
    S.modules.forEach(function (m, mi) {
      var done = mi < 4 || (mi === 4 && ci < 9) || (mi === 5 && ci < 6)
      if (mi < 4 && idx % 29 === 7 && mi === 3) done = false
      if (done) S.results[s.sid][m.id] = { scores: genScores(s.sid) }
    })
  })
  // 기본 조 편성 (조당 3명)
  function buildTeams(mid, cls, basis, n) {
    var members = shuffle(
      S.students.filter(function (s) {
        return s.cls === cls
      }).map(function (s) {
        return s.sid
      }),
    )
    var count = basis === "count" ? Math.max(1, Math.min(n, members.length || 1)) : Math.max(1, Math.ceil(members.length / Math.max(1, n)))
    var teams = []
    for (var i = 0; i < count; i++) teams.push([])
    members.forEach(function (sid, i) {
      teams[i % count].push(sid)
    })
    return teams
  }
  S.modules.forEach(function (m) {
    S.teams[m.id] = {}
    S.classes.forEach(function (c) {
      S.teams[m.id][c] = buildTeams(m.id, c, "size", 3)
    })
  })
  // 진행 중인 평가 (임시 저장)
  ;(function () {
    var t = S.teams.m5.J[0]
    var d = {}
    t.forEach(function (sid) {
      d[sid] = {}
      S.items.slice(0, 6).forEach(function (it) {
        d[sid][it.id] = rnd() < 0.8 ? 2 : 1
      })
    })
    S.drafts["m5|J|0"] = d
    var t2 = S.teams.m6.G[1]
    var d2 = {}
    t2.forEach(function (sid) {
      d2[sid] = {}
      S.items.slice(0, 3).forEach(function (it) {
        d2[sid][it.id] = 2
      })
    })
    S.drafts["m6|G|1"] = d2
  })()
  // 업로드된 학교 성적 (일부 학생은 아직 없음)
  function genGrade() {
    return {
      att: rnd() < 0.85 ? 10 : 9,
      fin: 16 + Math.floor(rnd() * 14),
      hw: 9 + Math.floor(rnd() * 6),
      core: Math.round((11 + rnd() * 4) * 10) / 10,
    }
  }
  S.students.forEach(function (s, i) {
    if (i % 11 !== 5) S.grades[s.sid] = genGrade()
  })
  // 다른 과목의 역량 평균 (30점 환산, 가상)
  S.otherSubjComp = {
    sub2: { c1: 27.6, c2: 27.9, c3: 27.1, c4: 26.4, c5: 27.2 },
    sub3: { c1: 28.9, c2: 29.1, c3: 28.4, c4: 28.0, c5: 28.6 },
  }

  // ───────────────────────── 계산 ─────────────────────────
  function MAX() {
    return S.items.length * 2
  }
  function stu(sid) {
    for (var i = 0; i < S.students.length; i++) if (S.students[i].sid === sid) return S.students[i]
    return null
  }
  function mod(mid) {
    for (var i = 0; i < S.modules.length; i++) if (S.modules[i].id === mid) return S.modules[i]
    return null
  }
  function prof(pid) {
    for (var i = 0; i < S.profs.length; i++) if (S.profs[i].id === pid) return S.profs[i]
    return null
  }
  function comp(cid) {
    var all = S.comps.concat(S.compPool)
    for (var i = 0; i < all.length; i++) if (all[i].id === cid) return all[i]
    return null
  }
  function compsOrdered() {
    return S.compOrder.map(comp).filter(Boolean)
  }
  function profName(pid) {
    var p = prof(pid)
    return p ? p.name : "미지정"
  }
  function res(sid, mid) {
    return (S.results[sid] || {})[mid]
  }
  function total(r) {
    var t = 0
    S.items.forEach(function (it) {
      t += r.scores[it.id] || 0
    })
    return t
  }
  function teamOf(sid, mid) {
    var s = stu(sid)
    if (!s || !S.teams[mid] || !S.teams[mid][s.cls]) return -1
    var ts = S.teams[mid][s.cls]
    for (var i = 0; i < ts.length; i++) if (ts[i].indexOf(sid) >= 0) return i
    return -1
  }
  function modStatus(sid, mid) {
    if (res(sid, mid)) return "done"
    var s = stu(sid)
    var ti = teamOf(sid, mid)
    var d = s && S.drafts[mid + "|" + s.cls + "|" + ti]
    if (d && d[sid] && Object.keys(d[sid]).length) return "prog"
    return "none"
  }
  function doneCount(sid) {
    var n = 0
    S.modules.forEach(function (m) {
      if (res(sid, m.id)) n++
    })
    return n
  }
  function stuState(sid) {
    var d = doneCount(sid)
    if (S.modules.length && d === S.modules.length) return "done"
    var any = d > 0
    if (!any)
      S.modules.forEach(function (m) {
        if (modStatus(sid, m.id) === "prog") any = true
      })
    return any ? "partial" : "none"
  }
  function avgTotal(sid) {
    var t = 0
    var n = 0
    S.modules.forEach(function (m) {
      var r = res(sid, m.id)
      if (r) {
        t += total(r)
        n++
      }
    })
    return n ? t / n : null
  }
  function avgOf(list) {
    var t = 0
    var n = 0
    list.forEach(function (v) {
      if (v != null && !isNaN(v)) {
        t += v
        n++
      }
    })
    return n ? t / n : null
  }
  // 그룹(학생 목록)의 역량별 항목 평균 (2점 만점)
  function compAvg(sids, modFilter) {
    var out = {}
    compsOrdered().forEach(function (c) {
      var t = 0
      var n = 0
      var its = S.items.filter(function (it) {
        return it.comp === c.id
      })
      sids.forEach(function (sid) {
        S.modules.forEach(function (m) {
          if (modFilter && modFilter !== m.id) return
          var r = res(sid, m.id)
          if (!r) return
          its.forEach(function (it) {
            if (r.scores[it.id] != null) {
              t += r.scores[it.id]
              n++
            }
          })
        })
      })
      out[c.id] = n ? t / n : null
    })
    return out
  }
  function itemAvg(sids) {
    var out = {}
    S.items.forEach(function (it) {
      var t = 0
      var n = 0
      sids.forEach(function (sid) {
        S.modules.forEach(function (m) {
          var r = res(sid, m.id)
          if (r && r.scores[it.id] != null) {
            t += r.scores[it.id]
            n++
          }
        })
      })
      out[it.id] = n ? t / n : null
    })
    return out
  }
  function groupTotalAvg(sids, mid) {
    var list = []
    sids.forEach(function (sid) {
      S.modules.forEach(function (m) {
        if (mid && m.id !== mid) return
        var r = res(sid, m.id)
        if (r) list.push(total(r))
      })
    })
    return { avg: avgOf(list), n: list.length }
  }
  function sidsOf(fn) {
    return S.students.filter(fn).map(function (s) {
      return s.sid
    })
  }
  function allSids() {
    return sidsOf(function () {
      return true
    })
  }
  function gradeRow(sid) {
    var g = S.grades[sid]
    if (!g) return null
    var perf = avgTotal(sid)
    var perfV = perf == null ? 0 : Math.round(perf * 10) / 10
    var sum = Math.round((g.att + g.fin + g.hw + g.core + perfV) * 10) / 10
    return { att: g.att, fin: g.fin, hw: g.hw, core: g.core, perf: perf == null ? null : perfV, sum: sum, letter: letter(sum) }
  }
  function letter(v) {
    return v >= 95 ? "A+" : v >= 90 ? "A" : v >= 85 ? "B+" : v >= 80 ? "B" : v >= 75 ? "C+" : v >= 70 ? "C" : v >= 60 ? "D" : "F"
  }
  function f1(v) {
    if (v == null) return "—"
    var r = Math.round(v * 10) / 10
    return String(r)
  }
  function f2(v) {
    return v == null ? "—" : v.toFixed(2)
  }
  function semLabel() {
    for (var i = 0; i < S.semesters.length; i++) if (S.semesters[i].id === S.semId) return S.semesters[i].label
    return ""
  }
  function subj(id) {
    for (var i = 0; i < S.subjects.length; i++) if (S.subjects[i].id === (id || S.subjId)) return S.subjects[i]
    return S.subjects[0]
  }
  function medal(rank) {
    return rank === 1 ? "🥇 1" : rank === 2 ? "🥈 2" : rank === 3 ? "🥉 3" : String(rank)
  }
  function rankList(rows, key) {
    rows.sort(function (a, b) {
      return (b[key] == null ? -1 : b[key]) - (a[key] == null ? -1 : a[key])
    })
    var prev = null
    var prevRank = 0
    rows.forEach(function (r, i) {
      var v = r[key] == null ? null : Math.round(r[key] * 10) / 10
      r.rank = v !== null && v === prev ? prevRank : i + 1
      prev = v
      prevRank = r.rank
    })
    return rows
  }
  function csv(name, rows) {
    var s =
      "﻿" +
      rows
        .map(function (r) {
          return r
            .map(function (v) {
              return '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"'
            })
            .join(",")
        })
        .join("\r\n")
    var a = document.createElement("a")
    a.href = URL.createObjectURL(new Blob([s], { type: "text/csv;charset=utf-8" }))
    a.download = name + ".csv"
    document.body.appendChild(a)
    a.click()
    setTimeout(function () {
      URL.revokeObjectURL(a.href)
      a.remove()
    }, 500)
    Demo.toast("엑셀(CSV) 파일을 내려받았습니다")
  }

  // ───────────────────────── 공통 UI ─────────────────────────
  var NAV = [
    ["/", "layout-dashboard", "운영 대시보드"],
    ["/completion", "clipboard-check", "이수 관리"],
    ["/evaluation", "square-pen", "평가 입력"],
    ["/students", "user-round", "학생 역량"],
    ["/teams", "users", "조 편성"],
  ]
  var ADMIN_NAV = [
    ["/admin/subjects", "book-marked", "과목 관리"],
    ["/admin/professors", "graduation-cap", "교수 계정"],
    ["/admin/assignments", "network", "분반 배정"],
    ["/admin/students", "user-round", "학생 관리"],
    ["/admin/modules", "book-open", "모듈·평가항목"],
  ]
  function navLink(item, path) {
    var active = item[0] === "/" ? path === "/" : path === item[0] || path.indexOf(item[0] + "/") === 0
    var cls = active
      ? "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors bg-sidebar-accent text-sidebar-accent-foreground"
      : "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
    return '<a ' + (active ? 'aria-current="page" ' : "") + 'class="' + cls + '" href="#' + item[0] + '">' + ic(item[1], "h-[18px] w-[18px]") + E(item[2]) + "</a>"
  }
  function asideInner(path) {
    var h =
      '<div class="flex h-16 items-center gap-2 border-b border-border px-5"><div class="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">' +
      ic("clipboard-check", "h-5 w-5") +
      '</div><div class="leading-tight"><p class="text-sm font-semibold">SIM ERP</p><p class="text-[11px] text-muted-foreground">간호 시뮬레이션 평가</p></div></div>'
    h += '<nav class="flex flex-1 flex-col gap-1 overflow-y-auto p-3" aria-label="주 메뉴">'
    NAV.forEach(function (n) {
      h += navLink(n, path)
    })
    if (S.mode === "admin") {
      h += '<p class="mt-4 px-3 pb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">관리자</p>'
      ADMIN_NAV.forEach(function (n) {
        h += navLink(n, path)
      })
    }
    h += "</nav>"
    h += '<div class="border-t border-border p-3">' + navLink(["/settings", "settings", "설정"], path) + "</div>"
    return h
  }
  function menuBox(inner, right, wide) {
    return (
      '<div class="absolute ' + (right ? "right-0" : "left-0") + ' top-full z-40 mt-1 ' + (wide ? "w-64" : "min-w-48") + ' rounded-md border border-border bg-popover p-1 shadow-lg" data-menu>' + inner + "</div>"
    )
  }
  function menuItem(act, label, on, extra) {
    return (
      '<button type="button" data-act="' + act + '"' + (extra || "") +
      ' class="flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-sm hover:bg-accent' + (on ? " font-semibold text-primary" : "") + '"><span>' + E(label) + "</span>" +
      (on ? ic("check", "h-4 w-4 text-primary") : "") + "</button>"
    )
  }
  function notices() {
    var list = []
    var unassigned = S.classes.filter(function (c) {
      return !S.classProf[c]
    })
    if (unassigned.length) list.push(["triangle-alert", "담당 교수가 없는 실습반 " + unassigned.length + "개", "#/admin/assignments"])
    var miss = S.students.filter(function (s) {
      return stuState(s.sid) !== "done"
    }).length
    if (miss) list.push(["clipboard-check", "모듈 미이수 학생 " + miss + "명", "#/completion"])
    var drafts = Object.keys(S.drafts).length
    if (drafts) list.push(["square-pen", "제출 전 임시 저장된 평가 " + drafts + "건", "#/evaluation"])
    var noGrade = S.students.filter(function (s) {
      return !S.grades[s.sid]
    }).length
    if (noGrade) list.push(["upload", "성적 미업로드 학생 " + noGrade + "명", "#/completion"])
    return list
  }
  function header() {
    var m = S.ui.menu
    var semMenu = ""
    if (m === "sem") {
      semMenu = menuBox(
        S.semesters
          .map(function (s) {
            return menuItem("pickSem", s.label, s.id === S.semId, ' data-id="' + E(s.id) + '"')
          })
          .join(""),
      )
    }
    var subMenu = ""
    if (m === "subj") {
      subMenu = menuBox(
        S.subjects
          .map(function (s) {
            return menuItem("pickSubj", s.name, s.id === S.subjId, ' data-id="' + E(s.id) + '"')
          })
          .join(""),
      )
    }
    var userMenu = ""
    if (m === "user") {
      userMenu = menuBox(
        '<div class="px-3 py-2"><p class="text-sm font-medium">' + (S.mode === "admin" ? "운영관리자" : E(profName("p1")) + " 교수") +
          '</p><p class="text-[11px] text-muted-foreground">(가상) 한누리대학교 간호학과</p></div>' +
          '<div class="my-1 border-t border-border"></div>' +
          menuItem("setMode", "관리자 모드로 보기", S.mode === "admin", ' data-mode="admin"') +
          menuItem("setMode", "교수 모드로 보기", S.mode === "prof", ' data-mode="prof"') +
          '<div class="my-1 border-t border-border"></div>' +
          menuItem("logout", "로그아웃", false),
        true,
      )
    }
    var bellMenu = ""
    if (m === "bell") {
      var ns = notices()
      bellMenu = menuBox(
        '<p class="px-3 py-2 text-xs font-semibold text-muted-foreground">알림 ' + ns.length + "건</p>" +
          (ns.length
            ? ns
                .map(function (n) {
                  return '<a href="' + n[2] + '" data-act="closeMenu" class="flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent">' + ic(n[0], "h-4 w-4 shrink-0 text-muted-foreground") + "<span>" + E(n[1]) + "</span></a>"
                })
                .join("")
            : '<p class="px-3 py-2 text-sm text-muted-foreground">새 알림이 없습니다</p>'),
        true,
        true,
      )
    }
    var badge =
      S.mode === "admin"
        ? '<span class="hidden items-center gap-1 rounded-md border px-2 py-1 text-xs font-medium lg:inline-flex border-status-danger/25 bg-status-danger/10 text-status-danger">' + ic("shield-check", "h-3.5 w-3.5") + "관리자 모드</span>"
        : '<span class="hidden items-center gap-1 rounded-md border px-2 py-1 text-xs font-medium lg:inline-flex border-primary/20 bg-primary/10 text-primary">' + ic("graduation-cap", "h-3.5 w-3.5") + "교수 모드</span>"
    var ns2 = notices().length
    return (
      '<header class="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-border bg-card/95 px-4 backdrop-blur md:px-6"><div class="demo-tb flex min-w-0 items-center gap-3">' +
      '<button type="button" data-act="openNav" class="demo-mnav h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background hover:bg-accent" aria-label="메뉴 열기">' + ic("menu", "h-[18px] w-[18px]") + "</button>" +
      '<div class="relative" data-menu-root><button type="button" data-act="toggleMenu" data-menu="sem" class="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-accent" aria-haspopup="menu" aria-expanded="' + (m === "sem") + '">' +
      ic("calendar-days", "h-4 w-4 text-muted-foreground") + '<span class="max-w-[220px] truncate">' + E(semLabel()) + "</span>" + ic("chevron-down", "h-4 w-4 text-muted-foreground") + "</button>" + semMenu + "</div>" +
      '<div class="demo-tb-hide relative" data-menu-root><button type="button" data-act="toggleMenu" data-menu="subj" class="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-accent" aria-haspopup="menu" aria-expanded="' + (m === "subj") + '">' +
      ic("book-marked", "h-4 w-4 text-primary") + '<span class="max-w-[200px] truncate">' + E(subj().name) + "</span>" + ic("chevron-down", "h-4 w-4 text-muted-foreground") + "</button>" + subMenu + "</div>" +
      badge +
      '</div><div class="flex items-center gap-3">' +
      '<div class="relative" data-menu-root><button type="button" data-act="toggleMenu" data-menu="bell" class="relative flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background hover:bg-accent" aria-label="알림">' + ic("bell", "h-[18px] w-[18px]") +
      (ns2 ? '<span class="absolute right-0 top-0 h-2 w-2 rounded-full bg-status-danger" style="transform:translate(30%,-30%)"></span>' : "") + "</button>" + bellMenu + "</div>" +
      '<div class="relative" data-menu-root><button type="button" data-act="toggleMenu" data-menu="user" class="flex items-center gap-2 rounded-md border border-border bg-background px-2 py-1.5 hover:bg-accent" aria-haspopup="menu" aria-expanded="' + (m === "user") + '">' +
      '<div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">' + (S.mode === "admin" ? "운" : E(profName("p1").charAt(0))) + "</div>" +
      '<div class="hidden text-left leading-tight sm:block"><p class="text-sm font-medium">' + (S.mode === "admin" ? "운영관리자" : E(profName("p1"))) + '</p><p class="text-[11px] text-muted-foreground">' + (S.mode === "admin" ? "관리자" : "교수") + "</p></div>" +
      ic("chevron-down", "h-4 w-4 text-muted-foreground") + "</button>" + userMenu + "</div></div></header>"
    )
  }
  function pageHead(title, sub, right) {
    return (
      '<div class="mb-5 flex flex-wrap items-end justify-between gap-3"><div><h1 class="text-xl font-semibold tracking-tight text-foreground text-balance">' + E(title) +
      '</h1><p class="mt-1 text-sm text-muted-foreground text-pretty">' + E(sub) + "</p></div>" + (right || "") + "</div>"
    )
  }
  function card(title, sub, body, right, extraCls, bodyCls) {
    return (
      '<div class="rounded-lg border border-border bg-card' + (extraCls ? " " + extraCls : "") + '"><div class="flex items-start justify-between gap-3 border-b border-border px-4 py-3"><div class="min-w-0"><h2 class="text-sm font-semibold text-foreground">' + E(title) + "</h2>" +
      (sub ? '<p class="mt-0.5 text-xs text-muted-foreground">' + E(sub) + "</p>" : "") + "</div>" + (right ? '<div class="shrink-0">' + right + "</div>" : "") + '</div><div class="' + (bodyCls || "p-4") + '">' + body + "</div></div>"
    )
  }
  function xlBtn(act) {
    return (
      '<button type="button" data-act="' + act + '" class="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-accent hover:text-foreground">' + ic("download", "h-3.5 w-3.5") + "엑셀</button>"
    )
  }
  function pill(text, tone) {
    var t = {
      primary: "bg-primary/10 text-primary border-primary/20",
      accent: "bg-accent text-primary border-primary/20",
      danger: "bg-status-danger/10 text-status-danger border-status-danger/25",
      warning: "bg-status-warning/10 text-status-warning border-status-warning/25",
      muted: "bg-secondary text-secondary-foreground border-border",
    }[tone || "primary"]
    return '<span class="inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium tabular-nums ' + t + '">' + text + "</span>"
  }
  var BTN_P = "inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
  var BTN_O = "inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 border border-border bg-background hover:bg-accent"
  var BTN_D = "inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 border border-status-danger/30 bg-status-danger/10 text-status-danger hover:bg-status-danger/20"
  var INPUT = "w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
  var SELECT = "rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
  function editBtns(editAct, delAct, id) {
    return (
      '<div class="flex justify-end gap-1"><button type="button" data-act="' + editAct + '" data-id="' + E(id) + '" class="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-accent" aria-label="수정">' + ic("pencil", "h-3.5 w-3.5") +
      '</button><button type="button" data-act="' + delAct + '" data-id="' + E(id) + '" class="flex h-7 w-7 items-center justify-center rounded-md border border-status-danger/30 text-status-danger hover:bg-status-danger/10" aria-label="삭제">' + ic("trash2", "h-3.5 w-3.5") + "</button></div>"
    )
  }
  function opts(list, cur) {
    return list
      .map(function (o) {
        return '<option value="' + E(o[0]) + '"' + (String(o[0]) === String(cur) ? " selected" : "") + ">" + E(o[1]) + "</option>"
      })
      .join("")
  }
  function lecOpts(cur, allLabel) {
    return opts([["all", allLabel || "교과반 전체"]].concat(S.lectures.map(function (l) {
      return [l, "교과반 " + l]
    })), cur)
  }
  function clsOpts(cur, allLabel) {
    return opts([["all", allLabel || "실습반 전체"]].concat(S.classes.map(function (c) {
      return [c, "실습반 " + c]
    })), cur)
  }
  function searchBox(id, act, val, ph, wrapCls) {
    return (
      '<div class="relative ' + (wrapCls || "flex-1 min-w-48") + '">' + ic("search", "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground") +
      '<input id="' + id + '" data-input="' + act + '" placeholder="' + E(ph) + '" class="w-full rounded-md border border-border bg-background py-2 pl-9 pr-3 text-sm outline-none focus:border-primary" value="' + E(val) + '"></div>'
    )
  }

  // 모달
  function modalView() {
    var md = S.ui.modal
    if (!md) return ""
    var body = ""
    if (md.kind === "confirm") {
      body = '<p class="text-sm text-muted-foreground">' + E(md.text) + "</p>"
    } else {
      ;(md.fields || []).forEach(function (f) {
        var lab = '<span class="mb-1 block text-xs font-medium text-muted-foreground">' + E(f.label) + "</span>"
        if (f.type === "select") {
          body += '<label class="block">' + lab + '<select name="' + f.name + '" class="w-full ' + SELECT + '">' + opts(f.options, f.value) + "</select></label>"
        } else if (f.type === "checks") {
          body += '<div>' + lab + '<div class="flex flex-col gap-1.5">' +
            f.options
              .map(function (o) {
                var on = (f.value || []).indexOf(o[0]) >= 0
                return '<label class="flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors ' + (on ? "border-primary bg-accent/40" : "border-border") + '"><input class="h-4 w-4 accent-[var(--primary)]" type="checkbox" name="' + f.name + '" value="' + E(o[0]) + '"' + (on ? " checked" : "") + '><span class="truncate">' + E(o[1]) + "</span></label>"
              })
              .join("") + "</div></div>"
        } else if (f.type === "textarea") {
          body += '<label class="block">' + lab + '<textarea name="' + f.name + '" rows="4" class="' + INPUT + '" placeholder="' + E(f.ph || "") + '">' + E(f.value || "") + "</textarea></label>"
        } else {
          body += '<label class="block">' + lab + '<input name="' + f.name + '" type="' + (f.type || "text") + '"' + (f.required ? " required" : "") + ' class="' + INPUT + '" value="' + E(f.value == null ? "" : f.value) + '" placeholder="' + E(f.ph || "") + '"></label>'
        }
      })
    }
    return (
      '<div id="demo-modal-bg" class="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4"><form data-submit="modalSubmit" class="demo-modal w-full max-w-md rounded-lg border border-border bg-card shadow-xl">' +
      '<div class="flex items-center justify-between gap-3 border-b border-border px-5 py-4"><h2 class="text-sm font-semibold">' + E(md.title) +
      '</h2><button type="button" data-act="closeModal" class="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent" aria-label="닫기">' + ic("x", "h-4 w-4") + "</button></div>" +
      '<div class="flex flex-col gap-3 p-5">' + body + "</div>" +
      '<div class="flex justify-end gap-2 border-t border-border px-5 py-3"><button type="button" data-act="closeModal" class="' + BTN_O + '">취소</button><button type="submit" class="' +
      (md.danger ? BTN_D : BTN_P) + '">' + E(md.ok || "저장") + "</button></div></form></div>"
    )
  }
  function openModal(m) {
    S.ui.modal = m
    S.ui.menu = null
    refresh()
    setTimeout(function () {
      var f = document.querySelector("#demo-modal-bg input:not([type=checkbox]), #demo-modal-bg textarea")
      if (f) f.focus()
    }, 0)
  }
  function confirmBox(title, text, ok, fn) {
    openModal({ kind: "confirm", title: title, text: text, ok: ok || "삭제", danger: true, onOk: fn })
  }

  // ───────────────────────── 화면: 운영 대시보드 ─────────────────────────
  function kpi(icon, label, value, sub, extra, valueCls) {
    return (
      '<div class="rounded-lg border border-border bg-card relative h-full p-4 transition-colors' + (extra ? " hover:border-primary/40 hover:bg-accent/40" : "") + '"><div class="absolute right-4 top-4 text-muted-foreground/50">' + ic(icon, "h-5 w-5") +
      '</div><p class="text-xs font-medium text-muted-foreground">' + E(label) + '</p><p class="mt-2 text-3xl font-semibold tabular-nums tracking-tight ' + (valueCls || "text-foreground") + '">' + E(value) +
      '</p><div class="mt-1 text-xs text-muted-foreground">' + E(sub) + "</div>" + (extra === true ? "" : extra || "") + "</div>"
    )
  }
  function radarSvg(axes, series, maxV, w, h) {
    w = w || 527
    h = h || 288
    var cx = w / 2
    var cy = h / 2 - 8
    var R = Math.min(w, h) / 2 - 44
    var n = axes.length
    function pt(i, v) {
      var a = -Math.PI / 2 + (2 * Math.PI * i) / n
      var r = (Math.max(0, v) / maxV) * R
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
    }
    var s = '<svg viewBox="0 0 ' + w + " " + h + '" width="100%" height="100%" role="img" aria-label="역량별 평균 레이더 차트" style="display:block">'
    ;[0.25, 0.5, 0.75, 1].forEach(function (k) {
      var d = ""
      for (var i = 0; i < n; i++) {
        var p = pt(i, k * maxV)
        d += (i ? "L" : "M") + p[0].toFixed(1) + "," + p[1].toFixed(1)
      }
      s += '<path d="' + d + 'Z" fill="none" stroke="#e2e8f0" stroke-width="1"></path>'
    })
    for (var i = 0; i < n; i++) {
      var p = pt(i, maxV)
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '" stroke="#e2e8f0"></line>'
      var lp = pt(i, maxV * 1.16)
      var anchor = Math.abs(lp[0] - cx) < 4 ? "middle" : lp[0] > cx ? "start" : "end"
      s += '<text x="' + lp[0].toFixed(1) + '" y="' + (lp[1] + 4).toFixed(1) + '" text-anchor="' + anchor + '" font-size="11" fill="#64748b">' + E(axes[i]) + "</text>"
    }
    ;[0.5, 1, 1.5, 2].forEach(function (v) {
      if (v > maxV) return
      var p = pt(1, v)
      s += '<text x="' + (p[0] + 3).toFixed(1) + '" y="' + (p[1] + 10).toFixed(1) + '" font-size="9" fill="#94a3b8">' + v + "</text>"
    })
    series.forEach(function (se) {
      var d = ""
      se.values.forEach(function (v, i) {
        var p = pt(i, v == null ? 0 : v)
        d += (i ? "L" : "M") + p[0].toFixed(1) + "," + p[1].toFixed(1)
      })
      s += '<path d="' + d + 'Z" stroke="' + se.color + '" stroke-width="1.5" fill="' + se.color + '" fill-opacity="' + se.op + '"><title>' + E(se.name) + "</title></path>"
    })
    // 범례
    var lx = cx - series.length * 38
    series.forEach(function (se, k) {
      var x = lx + k * 76
      s += '<rect x="' + x + '" y="' + (h - 16) + '" width="14" height="10" fill="' + se.color + '"></rect><text x="' + (x + 18) + '" y="' + (h - 7) + '" font-size="12" fill="' + se.color + '">' + E(se.name) + "</text>"
    })
    return s + "</svg>"
  }
  function heatColor(v) {
    var m = MAX()
    var r = v / m
    if (r >= 0.97) return ["rgb(15, 118, 110)", "text-white"]
    if (r >= 0.93) return ["rgb(13, 148, 136)", "text-white"]
    if (r >= 0.88) return ["rgb(20, 184, 166)", "text-white"]
    if (r >= 0.83) return ["rgb(45, 212, 191)", "text-foreground/80"]
    return ["rgb(94, 234, 212)", "text-foreground/80"]
  }
  function viewDashboard() {
    var all = allSids()
    var N = all.length
    var full = all.filter(function (s) {
      return stuState(s) === "done"
    }).length
    var none = all.filter(function (s) {
      return stuState(s) === "none"
    }).length
    var miss = N - full
    var g = groupTotalAvg(all)
    var avg = g.avg
    var pct = N ? Math.round((full / N) * 100) : 0
    var h = pageHead("운영 대시보드", semLabel() + " · " + subj().name + " · 학과 운영 현황 한눈에 보기")
    h += '<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">'
    h += kpi("users", "전체 학생", N + "명", "교과반 " + S.lectures.length + " · 실습반 " + S.classes.length)
    h += kpi("circle-check", "이수 완료율", pct + "%", full + " / " + N + "명", '<div class="h-1.5 w-full overflow-hidden rounded-full bg-muted mt-3"><div class="h-full rounded-full bg-primary" style="width: ' + pct + '%;"></div></div>')
    h += '<a class="block" href="#/completion?tab=miss">' + kpi("triangle-alert", "이수 누락 학생", miss + "명", none + "명은 전 모듈 미참여", true, "text-status-danger") + "</a>"
    h += kpi("circle-gauge", "평균 성취도", f1(avg) + " / " + MAX() + "점", MAX() + "점 만점 대비 " + (avg == null ? 0 : Math.round((avg / MAX()) * 100)) + "% 성취")
    h += "</div>"

    // 모듈별 진행 현황
    var mode = S.ui.dash
    var seg = function (k, label) {
      return '<button type="button" data-act="dashMode" data-k="' + k + '" class="rounded px-2 py-1 font-medium transition-colors ' + (mode === k ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent") + '">' + label + "</button>"
    }
    var right = '<div class="flex items-center gap-1.5"><div class="flex rounded-md border border-border p-0.5 text-xs">' + seg("all", "전체") + seg("cls", "실습반별") + seg("lec", "교과반별") + "</div>" + xlBtn("xlProgress") + "</div>"
    var rows = progressRows(mode)
    var lis = rows
      .map(function (r, i) {
        var tot = r.total || 1
        return (
          '<li><div class="mb-1.5 flex items-center justify-between gap-3 text-sm"><div class="flex min-w-0 items-center gap-2"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary/10 text-[11px] font-semibold text-primary">' + E(r.no) +
          '</span><span class="truncate font-medium">' + E(r.name) + "</span>" + (r.sub ? '<span class="hidden shrink-0 text-xs text-muted-foreground sm:inline">' + E(r.sub) + "</span>" : "") +
          '</div><span class="shrink-0 text-xs tabular-nums text-muted-foreground">이수 <span class="font-semibold text-foreground">' + r.done + "</span>/" + r.total + "</span></div>" +
          '<div class="flex h-2.5 w-full overflow-hidden rounded-full bg-muted"><div class="bg-primary" title="이수 ' + r.done + '" style="width: ' + (r.done / tot) * 100 + '%;"></div><div class="bg-status-warning" title="진행중 ' + r.prog + '" style="width: ' + (r.prog / tot) * 100 + '%;"></div><div class="bg-muted-foreground/25" title="미이수 ' + (r.total - r.done - r.prog) + '" style="width: ' + ((r.total - r.done - r.prog) / tot) * 100 + '%;"></div></div></li>'
        )
      })
      .join("")
    var legend =
      '<div class="mt-4 flex items-center gap-4 border-t border-border pt-3 text-xs text-muted-foreground"><span class="inline-flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-primary"></span>이수완료</span><span class="inline-flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-status-warning"></span>진행중</span><span class="inline-flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-muted-foreground/25"></span>미이수</span></div>'
    h += '<div class="mt-4">' + card("모듈별 진행 현황", mode === "all" ? "이수완료 · 진행중 · 미이수" : mode === "cls" ? "실습반별 모듈 이수 (학생 × 모듈)" : "교과반별 모듈 이수 (학생 × 모듈)", '<ul class="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">' + lis + "</ul>" + legend, right) + "</div>"

    // 레이더 + 취약 항목
    var comps = compsOrdered()
    var overall = compAvg(all)
    var clsAvg = S.classes
      .map(function (c) {
        var sids = sidsOf(function (s) {
          return s.cls === c
        })
        var ca = compAvg(sids)
        var v = avgOf(comps.map(function (k) {
          return ca[k.id]
        }))
        return { c: c, ca: ca, v: v }
      })
      .filter(function (x) {
        return x.v != null
      })
    clsAvg.sort(function (a, b) {
      return b.v - a.v
    })
    var best = clsAvg[0]
    var worst = clsAvg[clsAvg.length - 1]
    var series = [{ name: "전체", color: "#14b8a6", op: 0.1, values: comps.map(function (k) { return overall[k.id] }) }]
    if (best) series.push({ name: "최고(" + best.c + ")", color: "#0f766e", op: 0.12, values: comps.map(function (k) { return best.ca[k.id] }) })
    if (worst && worst !== best) series.push({ name: "최저(" + worst.c + ")", color: "#d97706", op: 0.08, values: comps.map(function (k) { return worst.ca[k.id] }) })
    var radar = '<div class="h-72 w-full">' + radarSvg(comps.map(function (k) { return k.name }), series, 2) + "</div>"
    var ia = itemAvg(all)
    var weak = S.items
      .filter(function (it) {
        return ia[it.id] != null
      })
      .sort(function (a, b) {
        return ia[a.id] - ia[b.id]
      })
      .slice(0, 5)
    var weakHtml =
      '<ul class="flex flex-col gap-3">' +
      weak
        .map(function (it, i) {
          return (
            '<li class="flex items-center gap-3"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-status-danger/10 text-xs font-semibold text-status-danger tabular-nums">' + (i + 1) +
            '</span><div class="min-w-0 flex-1"><div class="flex items-center justify-between gap-2"><span class="truncate text-sm font-medium">' + E(it.title) + '</span><span class="shrink-0 text-sm font-semibold tabular-nums">' + f2(ia[it.id]) +
            '</span></div><div class="h-1.5 w-full overflow-hidden rounded-full bg-muted mt-1.5"><div class="h-full rounded-full bg-status-warning" style="width: ' + ((ia[it.id] / 2) * 100).toFixed(1) + '%;"></div></div></div></li>'
          )
        })
        .join("") +
      "</ul>"
    h += '<div class="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">' +
      card("역량별 평균", "전체 · 최고 실습반" + (best ? "(" + best.c + ")" : "") + " · 최저 실습반" + (worst ? "(" + worst.c + ")" : ""), radar, xlBtn("xlComp")) +
      card("항목별 취약 순위 Top 5", "평균 점수가 낮은 순 (2점 만점)", weakHtml, xlBtn("xlWeak")) + "</div>"

    // 히트맵
    var hm = '<div class="overflow-x-auto"><div class="min-w-[560px]"><div class="flex items-center gap-1 pl-14">'
    S.modules.forEach(function (m, i) {
      hm += '<div class="flex-1 text-center text-xs font-medium text-muted-foreground" title="' + E(m.name) + '">M' + (i + 1) + "</div>"
    })
    hm += '</div><div class="mt-2 flex flex-col gap-1">'
    S.classes.forEach(function (c) {
      var sids = sidsOf(function (s) {
        return s.cls === c
      })
      hm += '<div class="flex items-center gap-1"><div class="w-14 shrink-0 text-xs font-medium text-muted-foreground">실습반 ' + E(c) + "</div>"
      S.modules.forEach(function (m) {
        var gg = groupTotalAvg(sids, m.id)
        if (gg.avg == null) {
          hm += '<div class="relative flex-1"><div class="h-9 rounded-md border transition-all border-border demo-na" title="미실시"></div></div>'
        } else {
          var col = heatColor(gg.avg)
          hm += '<div class="relative flex-1"><div class="h-9 rounded-md border transition-all border-transparent" style="background-color: ' + col[0] + ';" title="실습반 ' + E(c) + " · " + E(m.name) + " · " + gg.n + '명 완료"><span class="flex h-full items-center justify-center text-[11px] font-medium tabular-nums ' + col[1] + '">' + f1(gg.avg) + "</span></div></div>"
        }
      })
      hm += "</div>"
    })
    hm += "</div></div></div>"
    h += card("실습반별 성취도 히트맵", "셀 농도 = 모듈 평균 총점 (" + MAX() + "점 만점) · 회색 사선은 미실시", hm, xlBtn("xlHeat"), "mt-4")

    // 종합 성적표 · 순위
    h += '<div class="mt-4 flex items-center justify-between gap-3"><h2 class="text-sm font-semibold text-foreground">종합 성적표 · 순위</h2><button type="button" data-act="xlAll" class="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-accent">' + ic("download", "h-3.5 w-3.5") + "엑셀 내보내기</button></div>"
    var clsRank = rankList(
      S.classes.map(function (c) {
        var gg = groupTotalAvg(sidsOf(function (s) {
          return s.cls === c
        }))
        return { c: c, avg: gg.avg, n: gg.n }
      }),
      "avg",
    )
    var t1 =
      '<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border text-left text-xs text-muted-foreground"><th class="py-2 pr-2 font-medium">순위</th><th class="py-2 pr-2 font-medium">실습반</th><th class="py-2 pr-2 text-right font-medium">전체평균</th><th class="py-2 text-right font-medium">완료</th></tr></thead><tbody>' +
      clsRank
        .map(function (r) {
          return '<tr class="border-b border-border/60 last:border-0"><td class="py-2 pr-2 tabular-nums">' + medal(r.rank) + '</td><td class="py-2 pr-2 font-medium">실습반 ' + E(r.c) + '</td><td class="py-2 pr-2 text-right font-semibold tabular-nums">' + f1(r.avg) + '</td><td class="py-2 text-right tabular-nums text-muted-foreground">' + r.n + "</td></tr>"
        })
        .join("") +
      "</tbody></table></div>"
    var modRank = rankList(
      S.modules.map(function (m, i) {
        var gg = groupTotalAvg(all, m.id)
        return { m: m, i: i, avg: gg.avg }
      }),
      "avg",
    )
    var t2 =
      '<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border text-left text-xs text-muted-foreground"><th class="py-2 pr-2 font-medium">순위</th><th class="py-2 pr-2 font-medium">모듈</th><th class="py-2 pr-2 font-medium">담당</th><th class="py-2 text-right font-medium">평균</th></tr></thead><tbody>' +
      modRank
        .map(function (r) {
          return '<tr class="border-b border-border/60 last:border-0"><td class="py-2 pr-2 tabular-nums">' + medal(r.rank) + '</td><td class="py-2 pr-2"><span class="font-medium">M' + (r.i + 1) + '</span> <span class="text-muted-foreground">' + E(r.m.name) + '</span></td><td class="py-2 pr-2 text-xs text-muted-foreground">' + E(profName(r.m.prof)) + '</td><td class="py-2 text-right font-semibold tabular-nums">' + f1(r.avg) + "</td></tr>"
        })
        .join("") +
      "</tbody></table></div>"
    h += '<div class="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-2">' + card("실습반별 전체평균 · 순위", "완료 결과 총점 평균 (" + MAX() + "점 만점)", t1, xlBtn("xlClsRank")) + card("모듈별 평균 · 순위", "완료 결과 평균 (" + MAX() + "점 만점)", t2, xlBtn("xlModRank")) + "</div>"

    // 역량별 실습반 점수
    var t3 = '<div class="overflow-x-auto"><table class="w-full min-w-[560px] text-sm"><thead><tr class="border-b border-border text-xs text-muted-foreground"><th class="py-2 pr-3 text-left font-medium">실습반</th>'
    comps.forEach(function (k) {
      t3 += '<th class="py-2 px-2 text-center font-medium">' + E(k.name) + "</th>"
    })
    t3 += '<th class="py-2 pl-2 text-right font-medium">역량 평균</th></tr></thead><tbody>'
    S.classes.forEach(function (c) {
      var ca = compAvg(sidsOf(function (s) {
        return s.cls === c
      }))
      var vals = comps.map(function (k) {
        return ca[k.id]
      })
      var av = avgOf(vals)
      t3 += '<tr class="border-b border-border/60 last:border-0"><td class="py-2 pr-3 font-medium">실습반 ' + E(c) + "</td>"
      vals.forEach(function (v) {
        t3 += '<td class="py-2 px-2 text-center tabular-nums"><span class="' + (v != null && v < 1.7 ? "text-status-danger" : "") + '">' + f2(v) + "</span></td>"
      })
      t3 += '<td class="py-2 pl-2 text-right font-semibold tabular-nums">' + f2(av) + "</td></tr>"
    })
    t3 += "</tbody></table></div>"
    h += card("역량별 실습반 점수", "역량 × 실습반 평균 (2점 만점)", t3, xlBtn("xlCompCls"), "mt-4")

    // 전체 평균 역량 증가표
    var subs = S.subjects.slice(0, 3)
    var t4 = '<div class="overflow-x-auto"><table class="w-full min-w-[560px] text-sm"><thead><tr class="border-b border-border text-xs text-muted-foreground"><th class="py-2 pr-3 text-left font-medium">역량</th>'
    subs.forEach(function (s) {
      t4 += '<th class="py-2 px-2 text-center font-medium">' + E(s.name) + "</th>"
    })
    t4 += '<th class="py-2 pl-2 text-right font-medium">증가폭 Δ</th></tr></thead><tbody>'
    comps.forEach(function (k) {
      var vals = subs.map(function (s, i) {
        if (i === 0) return overall[k.id] == null ? null : Math.round(overall[k.id] * 15 * 10) / 10
        var o = S.otherSubjComp[s.id]
        return o && o[k.id] != null ? o[k.id] : null
      })
      var first = vals[0]
      var last = vals[vals.length - 1]
      var delta = first != null && last != null ? Math.round((last - first) * 10) / 10 : null
      t4 += '<tr class="border-b border-border/60 last:border-0"><td class="py-2 pr-3 font-medium">' + E(k.name) + "</td>"
      vals.forEach(function (v) {
        t4 += '<td class="py-2 px-2 text-center tabular-nums"><span>' + f1(v) + '<span class="ml-0.5 text-[10px] text-muted-foreground">/30</span></span></td>'
      })
      t4 += '<td class="py-2 pl-2 text-right font-semibold tabular-nums">' + (delta == null ? "—" : '<span class="' + (delta >= 0 ? "text-status-normal" : "text-status-danger") + '">' + (delta >= 0 ? "▲" : "▼") + Math.abs(delta) + "</span>") + "</td></tr>"
    })
    t4 += "</tbody></table></div>"
    h += card("전체 평균 역량 증가표", "같은 학기 과목을 순서대로 · 역량마다 전체 학생 평균 점수(30점) 추이 · Δ = 첫 과목 대비 증가폭", t4, xlBtn("xlGrowth"), "mt-4")
    return h
  }
  function progressRows(mode) {
    if (mode === "all") {
      return S.modules.map(function (m, i) {
        var done = 0
        var prog = 0
        S.students.forEach(function (s) {
          var st = modStatus(s.sid, m.id)
          if (st === "done") done++
          else if (st === "prog") prog++
        })
        return { no: i + 1, name: m.name, sub: profName(m.prof), done: done, prog: prog, total: S.students.length }
      })
    }
    var keys = mode === "cls" ? S.classes : S.lectures
    return keys.map(function (k) {
      var ss = S.students.filter(function (s) {
        return (mode === "cls" ? s.cls : s.lec) === k
      })
      var done = 0
      var prog = 0
      ss.forEach(function (s) {
        S.modules.forEach(function (m) {
          var st = modStatus(s.sid, m.id)
          if (st === "done") done++
          else if (st === "prog") prog++
        })
      })
      return { no: k, name: (mode === "cls" ? "실습반 " : "교과반 ") + k, sub: ss.length + "명", done: done, prog: prog, total: ss.length * S.modules.length }
    })
  }

  // ───────────────────────── 화면: 이수 관리 ─────────────────────────
  function completionList() {
    var f = S.ui.cp
    var q = f.q.trim()
    return S.students.filter(function (s) {
      if (q && s.sid.indexOf(q) < 0 && s.name.indexOf(q) < 0) return false
      if (f.lec !== "all" && s.lec !== f.lec) return false
      if (f.cls !== "all" && s.cls !== f.cls) return false
      var st = stuState(s.sid)
      if (f.tab === "miss" && st === "done") return false
      if (f.tab === "partial" && st !== "partial") return false
      if (f.tab === "none" && st !== "none") return false
      return true
    })
  }
  function viewCompletion() {
    var f = S.ui.cp
    var N = S.students.length
    var gN = S.students.filter(function (s) {
      return S.grades[s.sid]
    }).length
    var cnt = { done: 0, partial: 0, none: 0 }
    S.students.forEach(function (s) {
      cnt[stuState(s.sid)]++
    })
    var list = completionList()
    var h = pageHead("이수 관리", "모듈 이수 + 업로드 성적을 학번으로 매칭해 한눈에 봅니다 · 총 " + N + "명 · 성적 " + gN + "명")
    var tab = function (k, label) {
      return '<button type="button" data-act="cpTab" data-k="' + k + '" class="rounded px-2.5 py-1.5 text-xs font-medium transition-colors ' + (f.tab === k || (k === "miss" && f.tab === "partial") ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground") + '">' + label + "</button>"
    }
    h +=
      '<div class="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-card p-3">' + searchBox("cp-q", "cpQ", f.q, "학번 또는 이름 검색") +
      '<select data-change="cpLec" class="' + SELECT + '">' + lecOpts(f.lec) + "</select>" +
      '<select data-change="cpCls" class="' + SELECT + '">' + clsOpts(f.cls) + "</select>" +
      '<div class="flex rounded-md border border-border p-0.5">' + tab("all", "전체") + tab("miss", "미이수만") + tab("none", "전 모듈 미참여") + "</div>" +
      '<div class="ml-auto flex flex-wrap items-center gap-2">' +
      '<button type="button" data-act="gradeUpload" title="학교 성적파일(.xlsx)을 올리면 학번으로 매칭해 성적을 함께 표시합니다" class="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-accent disabled:opacity-50">' + ic("upload", "h-4 w-4") + "성적 파일 업로드</button>" +
      '<button type="button" data-act="gradeReset" title="업로드한 성적을 모두 삭제합니다" class="inline-flex items-center gap-1.5 rounded-md border border-status-danger/30 bg-background px-3 py-2 text-sm font-medium text-status-danger hover:bg-status-danger/10">' + ic("trash2", "h-4 w-4") + "성적 초기화</button>" +
      '<button type="button" data-act="xlCompletion" title="현재 필터 결과를 성적표+역량별 2개 시트로 내려받습니다" class="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-accent">' + ic("download", "h-4 w-4") + "엑셀 내보내기 (" + list.length + ")</button></div></div>"
    h +=
      '<div class="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 rounded-lg border border-border bg-card px-4 py-2.5 text-sm">' +
      '<button type="button" data-act="cpTab" data-k="all" class="tabular-nums hover:text-primary">전체 <span class="font-semibold">' + N + "</span></button>" +
      '<span class="tabular-nums text-status-normal">완료 <span class="font-semibold">' + cnt.done + "</span></span>" +
      '<button type="button" data-act="cpTab" data-k="partial" class="tabular-nums text-status-warning hover:underline">부분미이수 <span class="font-semibold">' + cnt.partial + "</span></button>" +
      '<button type="button" data-act="cpTab" data-k="none" class="tabular-nums text-status-danger hover:underline">전체미참여 <span class="font-semibold">' + cnt.none + "</span></button>" +
      '<span class="tabular-nums text-primary">성적 업로드 <span class="font-semibold">' + gN + "</span>/" + N + "</span>" +
      '<span class="ml-auto text-xs text-muted-foreground">필터 결과 ' + list.length + "명</span></div>"
    var th = '<tr class="border-b border-border bg-secondary/50 text-left text-xs text-muted-foreground"><th class="sticky left-0 z-10 bg-secondary/50 px-3 py-2.5 font-medium">학번</th><th class="px-3 py-2.5 font-medium">이름</th><th class="px-3 py-2.5 font-medium">교과반</th><th class="px-3 py-2.5 font-medium">실습반</th>'
    S.modules.forEach(function (m, i) {
      th += '<th class="px-3 py-2.5 text-center font-medium" title="' + E(m.name) + '">M' + (i + 1) + "</th>"
    })
    ;["출석", "기말", "과제", "핵심", "수행", "총점", "평점"].forEach(function (k) {
      th += '<th class="px-3 py-2.5 text-center font-medium">' + k + "</th>"
    })
    th += '<th class="px-3 py-2.5 font-medium">진행률</th></tr>'
    var body = list
      .map(function (s) {
        var r = '<tr data-act="goStudent" data-sid="' + E(s.sid) + '" class="group cursor-pointer border-b border-border last:border-0 hover:bg-accent/40"><td class="sticky left-0 z-10 bg-card px-3 py-2 font-medium tabular-nums group-hover:bg-accent/40">' + E(s.sid) +
          '</td><td class="px-3 py-2 font-medium" style="white-space:nowrap">' + E(s.name) + '</td><td class="px-3 py-2 text-muted-foreground">' + E(s.lec) + '</td><td class="px-3 py-2 text-muted-foreground">' + E(s.cls) + "</td>"
        S.modules.forEach(function (m) {
          var st = modStatus(s.sid, m.id)
          var cell =
            st === "done"
              ? '<span class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium tabular-nums bg-accent text-primary border-primary/20 gap-1">' + ic("circle-check", "h-3 w-3") + total(res(s.sid, m.id)) + "</span>"
              : st === "prog"
                ? '<span class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium tabular-nums bg-status-warning/10 text-status-warning border-status-warning/25 gap-1">진행</span>'
                : '<span class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium tabular-nums bg-status-danger/10 text-status-danger border-status-danger/25 gap-1 whitespace-nowrap">미이수</span>'
          r += '<td class="px-3 py-2 text-center">' + cell + "</td>"
        })
        var g = gradeRow(s.sid)
        if (g) {
          ;[g.att, g.fin, g.hw, g.core, g.perf == null ? "—" : g.perf].forEach(function (v) {
            r += '<td class="px-3 py-2 text-center tabular-nums text-muted-foreground">' + E(v) + "</td>"
          })
          r += '<td class="px-3 py-2 text-center font-semibold tabular-nums">' + E(g.sum) + '</td><td class="px-3 py-2 text-center"><span class="font-semibold text-primary">' + E(g.letter) + "</span></td>"
        } else {
          for (var k = 0; k < 6; k++) r += '<td class="px-3 py-2 text-center tabular-nums text-muted-foreground">—</td>'
          r += '<td class="px-3 py-2 text-center"><span class="text-muted-foreground">—</span></td>'
        }
        var d = doneCount(s.sid)
        var M = S.modules.length || 1
        r += '<td class="px-3 py-2"><div class="flex items-center gap-2"><span class="w-8 shrink-0 text-xs tabular-nums text-muted-foreground">' + d + "/" + S.modules.length + '</span><div class="h-1.5 overflow-hidden rounded-full bg-muted w-16"><div class="h-full rounded-full ' + (d === M ? "bg-primary" : "bg-status-warning") + '" style="width: ' + (d / M) * 100 + '%;"></div></div></div></td></tr>'
        return r
      })
      .join("")
    if (!list.length) body = '<tr><td colspan="' + (12 + S.modules.length) + '" class="px-3 py-10 text-center text-sm text-muted-foreground">조건에 맞는 학생이 없습니다</td></tr>'
    h += '<div class="mt-3 overflow-hidden rounded-lg border border-border bg-card"><div class="overflow-x-auto"><table class="w-full border-collapse text-sm"><thead>' + th + "</thead><tbody>" + body + "</tbody></table></div></div>"
    return h
  }

  // ───────────────────────── 화면: 평가 입력 ─────────────────────────
  function evTeams() {
    var ev = S.ui.ev
    return (S.teams[ev.mod] && S.teams[ev.mod][ev.cls]) || []
  }
  function evKey() {
    var ev = S.ui.ev
    return ev.mod + "|" + ev.cls + "|" + ev.team
  }
  function evMembers() {
    return evTeams()[S.ui.ev.team] || []
  }
  // 화면에 보이는 점수 = 임시 저장(draft) 우선, 없으면 저장된 결과
  function evScore(sid, iid) {
    var d = S.drafts[evKey()]
    if (d) return d[sid] ? d[sid][iid] : undefined
    var r = res(sid, S.ui.ev.mod)
    return r ? r.scores[iid] : undefined
  }
  function evEnsureDraft() {
    var k = evKey()
    if (S.drafts[k]) return S.drafts[k]
    var d = {}
    evMembers().forEach(function (sid) {
      var r = res(sid, S.ui.ev.mod)
      d[sid] = r ? JSON.parse(JSON.stringify(r.scores)) : {}
    })
    S.drafts[k] = d
    return d
  }
  function itemDone(iid) {
    var mem = evMembers()
    if (!mem.length) return false
    return mem.every(function (sid) {
      return evScore(sid, iid) != null
    })
  }
  function goals() {
    var out = []
    var map = {}
    S.items
      .slice()
      .sort(function (a, b) {
        return a.step - b.step
      })
      .forEach(function (it) {
        var key = it.step + "|" + it.goal
        if (!map[key]) {
          map[key] = { key: key, step: it.step, goal: it.goal, items: [] }
          out.push(map[key])
        }
        map[key].items.push(it)
      })
    return out
  }
  function viewEvaluation() {
    var ev = S.ui.ev
    if (!mod(ev.mod) && S.modules[0]) ev.mod = S.modules[0].id
    var m = mod(ev.mod)
    var teams = evTeams()
    if (ev.team >= teams.length) ev.team = 0
    var mem = evMembers()
    var mi = S.modules.indexOf(m)
    var nDone = S.items.filter(function (it) {
      return itemDone(it.id)
    }).length
    var nAll = S.items.length
    var allSaved = mem.length && mem.every(function (sid) {
      return res(sid, ev.mod)
    })
    var hasDraft = !!S.drafts[evKey()]
    var sel = function (label, act, list, cur) {
      return '<div class="relative"><select data-change="' + act + '" class="h-9 appearance-none rounded-md border border-border bg-background pl-3 pr-8 text-sm font-medium outline-none focus:border-primary" aria-label="' + label + '">' + opts(list, cur) + "</select>" + ic("chevron-down", "pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground") + "</div>"
    }
    var h = '<div class="-m-4 flex h-[calc(100vh-4rem)] flex-col md:-m-6">'
    h += '<header class="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-border bg-card px-5 py-3"><div class="min-w-0"><p class="text-sm font-semibold">' + (m ? "모듈" + (mi + 1) + " · " + E(m.name) : "모듈 없음") +
      '</p><p class="text-xs text-muted-foreground tabular-nums">실습반 ' + E(ev.cls) + " · " + E(ev.cls) + "-" + (ev.team + 1) + "조 · " + mem.length + "명</p></div>"
    h += '<div class="flex flex-wrap items-center gap-2">' + mem.map(function (sid) {
      var s = stu(sid)
      return '<span class="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium">' + E(s ? s.name : sid) + (res(sid, ev.mod) ? " ✓" : "") + "</span>"
    }).join("") + "</div>"
    h += '<div class="flex flex-wrap items-center gap-4">' +
      sel("모듈 선택", "evMod", S.modules.map(function (x, i) { return [x.id, "모듈" + (i + 1)] }), ev.mod) +
      sel("실습반 선택", "evCls", S.classes.map(function (c) { return [c, "실습반 " + c] }), ev.cls) +
      sel("조 선택", "evTeam", teams.map(function (t, i) { return [i, ev.cls + "-" + (i + 1) + "조"] }), ev.team) +
      '<div class="inline-flex rounded-md border border-border bg-secondary p-0.5"><button type="button" data-act="evView" data-k="tablet" class="rounded px-3 py-1.5 text-xs font-semibold transition-colors ' + (ev.view === "tablet" ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground") + '">태블릿</button><button type="button" data-act="evView" data-k="normal" class="rounded px-3 py-1.5 text-xs font-semibold transition-colors ' + (ev.view === "normal" ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground") + '">일반</button></div>' +
      '<div class="flex items-center gap-1.5 text-xs font-medium">' + ic("wifi", "h-4 w-4 text-status-normal") + '<span class="text-status-normal">동기화됨</span></div>' +
      '<div class="flex items-center gap-2"><span class="text-sm font-semibold tabular-nums">' + nDone + " / " + nAll + '</span><div class="h-1.5 w-24 overflow-hidden rounded-full bg-muted"><div class="h-full rounded-full bg-primary transition-all" style="width: ' + (nAll ? (nDone / nAll) * 100 : 0) + '%;"></div></div></div></div></header>'
    h += '<div class="flex-1 overflow-y-auto bg-background px-5 py-4"><div class="mx-auto flex max-w-4xl flex-col gap-3">'
    if (!mem.length) {
      h += '<div class="rounded-xl border border-border bg-card p-6 text-center text-sm text-muted-foreground">이 조에 배정된 학생이 없습니다. <a class="font-medium text-primary hover:underline" href="#/teams">조 편성</a>에서 먼저 조를 만드세요.</div>'
    }
    var byStep = {}
    var steps = []
    goals().forEach(function (g) {
      if (!byStep[g.step]) {
        byStep[g.step] = []
        steps.push(g.step)
      }
      byStep[g.step].push(g)
    })
    if (mem.length)
      steps.forEach(function (st) {
        h += '<div class="grid grid-cols-[52px_1fr] overflow-hidden rounded-xl border border-border bg-card"><div class="flex flex-col items-center gap-1 border-r border-border bg-secondary/50 pt-4"><span class="text-[10px] font-bold tracking-wider text-muted-foreground">단계</span><span class="text-2xl font-extrabold leading-none text-primary tabular-nums">' + E(st) + '</span></div><div class="p-2">'
        byStep[st].forEach(function (g) {
          var done = g.items.every(function (it) {
            return itemDone(it.id)
          })
          var open = ev.view === "normal" || ev.open[g.key]
          var memo = S.memos[evKey() + "|" + g.key]
          h += '<div><button type="button" data-act="evToggle" data-k="' + E(g.key) + '" class="flex min-h-[52px] w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left transition-colors hover:bg-accent">' +
            '<span role="checkbox" aria-checked="' + done + '" data-act="evCheck" data-k="' + E(g.key) + '" class="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors ' + (done ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background") + '">' + (done ? ic("check", "h-4 w-4") : "") + "</span>" +
            '<span class="flex-1 text-[15px] font-semibold leading-tight">' + E(g.goal) + (memo ? ' <span class="text-xs font-medium text-muted-foreground">· 메모 있음</span>' : "") + "</span>" +
            '<span role="button" tabindex="0" data-act="evMemo" data-k="' + E(g.key) + '" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition-colors ' + (memo ? "border-primary text-primary" : "border-border text-muted-foreground") + ' hover:border-primary hover:text-primary" aria-label="필기·메모">' + ic("pen-line", "h-4 w-4") + "</span>" +
            ic("chevron-right", "h-5 w-5 shrink-0 text-muted-foreground transition-transform") .replace('class="', open ? 'style="transform:rotate(90deg)" class="' : 'class="') + "</button>"
          if (open) {
            h += '<div class="mb-2 ml-11 mr-2 flex flex-col gap-2">'
            g.items.forEach(function (it) {
              h += '<div class="rounded-lg border border-border bg-background p-3"><div class="flex flex-wrap items-start justify-between gap-2"><div class="min-w-0"><p class="text-sm font-semibold">' + E(S.items.indexOf(it) + 1) + ". " + E(it.title) + '</p><p class="mt-0.5 text-xs text-muted-foreground">' + E(it.rule) + "</p></div>" + pill(it.type, it.type === "팀" ? "primary" : "muted") + "</div>"
              if (it.type === "팀") {
                var v = evScore(mem[0], it.id)
                var same = mem.every(function (sid) {
                  return evScore(sid, it.id) === v
                })
                h += '<div class="mt-2 flex flex-wrap items-center gap-2"><span class="text-xs font-medium text-muted-foreground">조 공통</span>' + scoreBtns(it.id, "*", same ? v : undefined) + "</div>"
              } else {
                h += '<div class="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">' + mem.map(function (sid) {
                  var s = stu(sid)
                  return '<div class="flex items-center justify-between gap-2 rounded-md border border-border bg-card px-2.5 py-1.5"><span class="truncate text-sm font-medium">' + E(s ? s.name : sid) + "</span>" + scoreBtns(it.id, sid, evScore(sid, it.id)) + "</div>"
                }).join("") + "</div>"
              }
              h += "</div>"
            })
            h += "</div>"
          }
          h += "</div>"
        })
        h += "</div></div>"
      })
    h += "</div></div>"
    var ready = mem.length && nDone === nAll && nAll > 0
    var sumTxt = mem.length
      ? mem.map(function (sid) {
          var s = stu(sid)
          var t = 0
          S.items.forEach(function (it) {
            t += evScore(sid, it.id) || 0
          })
          return (s ? s.name : sid) + " " + t + "/" + MAX()
        }).join(" · ")
      : ""
    var status = allSaved && !hasDraft ? "제출 완료" + (S.submitted[evKey()] ? " · " + S.submitted[evKey()] : "") : hasDraft ? "임시 저장됨 · 미제출" : "미제출"
    h += '<footer class="flex shrink-0 items-center justify-between gap-3 border-t border-border bg-card px-5 py-3"><span class="min-w-0 truncate text-xs text-muted-foreground tabular-nums">' + E(status) + (sumTxt ? " · " + E(sumTxt) : "") + '</span><div class="flex items-center gap-2">' +
      (hasDraft ? '<button type="button" data-act="evDiscard" class="' + BTN_O + '">되돌리기</button>' : "") +
      '<div class="group relative"><button type="button" data-act="evSubmit"' + (ready ? "" : " disabled") + ' class="inline-flex items-center gap-1.5 rounded-md px-6 py-2.5 text-sm font-semibold text-primary-foreground ' + (ready ? "bg-primary hover:bg-primary/90" : "cursor-not-allowed bg-status-inactive") + '">' + ic("check", "h-4 w-4") + (allSaved && !hasDraft ? "평가 저장" : "평가 저장") + "</button>" +
      (ready ? "" : '<span class="pointer-events-none absolute bottom-full right-0 mb-2 hidden whitespace-nowrap rounded-md border border-border bg-popover px-2.5 py-1.5 text-xs shadow-sm group-hover:block">' + (nAll - nDone) + "개 항목이 미채점 상태입니다</span>") + "</div></div></footer></div>"
    return h
  }
  function scoreBtns(iid, sid, cur) {
    return (
      '<div class="inline-flex rounded-md border border-border bg-secondary p-0.5">' +
      [0, 1, 2]
        .map(function (v) {
          return '<button type="button" data-act="evScore" data-i="' + E(iid) + '" data-s="' + E(sid) + '" data-v="' + v + '" class="demo-scorebtn rounded px-2.5 py-1 text-xs font-semibold tabular-nums transition-colors ' + (cur === v ? (v === 0 ? "bg-status-danger text-white" : v === 1 ? "bg-status-warning text-white" : "bg-primary text-primary-foreground") : "text-muted-foreground hover:text-foreground") + '">' + v + "점</button>"
        })
        .join("") +
      "</div>"
    )
  }

  // ───────────────────────── 화면: 학생 역량 ─────────────────────────
  function stuBadge(sid) {
    var d = doneCount(sid)
    var M = S.modules.length
    return '<span class="inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium tabular-nums ' + (d === M ? "bg-accent text-primary border-primary/20" : d === 0 ? "bg-status-danger/10 text-status-danger border-status-danger/25" : "bg-status-warning/10 text-status-warning border-status-warning/25") + '">' + d + "/" + M + "</span>"
  }
  function viewStudents() {
    var f = S.ui.st
    var q = f.q.trim()
    var list = S.students.filter(function (s) {
      if (q && s.sid.indexOf(q) < 0 && s.name.indexOf(q) < 0) return false
      if (f.lec !== "all" && s.lec !== f.lec) return false
      if (f.cls !== "all" && s.cls !== f.cls) return false
      return true
    })
    var h = pageHead("학생 역량", "학생을 선택하면 개인 역량 리포트를 확인합니다")
    h += '<div class="mb-3 flex flex-wrap items-center gap-2 rounded-lg border border-border bg-card p-3">' + searchBox("st-q", "stQ", f.q, "학번 또는 이름 검색", "min-w-48 flex-1") +
      '<select data-change="stLec" class="' + SELECT + '">' + lecOpts(f.lec) + '</select><select data-change="stCls" class="' + SELECT + '">' + clsOpts(f.cls) + "</select></div>"
    h += '<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">' +
      list.map(function (s) {
        return '<a class="group flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary/40 hover:bg-accent/40" href="#/students/stu-' + E(s.sid) + '"><div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">' + E(s.name.charAt(0)) +
          '</div><div class="min-w-0 flex-1"><p class="truncate text-sm font-semibold">' + E(s.name) + '</p><p class="truncate text-xs text-muted-foreground tabular-nums">' + E(s.sid) + " · " + E(s.lec) + "/" + E(s.cls) + " · " + E(s.year) + '학년</p></div><div class="flex shrink-0 items-center gap-2">' + stuBadge(s.sid) +
          '<span class="text-sm font-semibold tabular-nums">' + f1(avgTotal(s.sid)) + "</span>" + ic("chevron-right", "h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5") + "</div></a>"
      }).join("") + "</div>"
    if (!list.length) h += '<p class="py-10 text-center text-sm text-muted-foreground">조건에 맞는 학생이 없습니다</p>'
    return h
  }
  function viewStudentDetail(sid) {
    var s = stu(sid)
    if (!s) return pageHead("학생 역량", "학생을 찾을 수 없습니다") + '<a class="text-sm font-medium text-primary hover:underline" href="#/students">← 학생 목록으로</a>'
    var comps = compsOrdered()
    var mine = compAvg([sid])
    var overall = compAvg(allSids())
    var g = gradeRow(sid)
    var avg = avgTotal(sid)
    var h = '<a href="#/students" class="mb-3 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">' + ic("arrow-left", "h-4 w-4") + "학생 역량</a>"
    h += pageHead(s.name + " 역량 리포트", s.sid + " · 교과반 " + s.lec + " · 실습반 " + s.cls + " · " + s.year + "학년")
    h += '<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">' +
      kpi("clipboard-check", "모듈 이수", doneCount(sid) + " / " + S.modules.length, stuState(sid) === "done" ? "이수완료" : stuState(sid) === "none" ? "미이수 (전 모듈 미참여)" : "진행중") +
      kpi("circle-gauge", "모듈 평균 총점", f1(avg) + " / " + MAX() + "점", avg == null ? "완료한 모듈 없음" : "전체 평균 " + f1(groupTotalAvg(allSids()).avg) + "점") +
      kpi("target", "역량 평균", f2(avgOf(comps.map(function (k) { return mine[k.id] }))), "2점 만점 루브릭 평균") +
      kpi("graduation-cap", "학교 성적", g ? g.sum + "점" : "—", g ? "평점 " + g.letter + " · 업로드 성적과 매칭" : "성적 미업로드") + "</div>"
    var radar = '<div class="h-72 w-full">' + radarSvg(comps.map(function (k) { return k.name }), [
      { name: "전체", color: "#14b8a6", op: 0.08, values: comps.map(function (k) { return overall[k.id] }) },
      { name: s.name, color: "#0f766e", op: 0.16, values: comps.map(function (k) { return mine[k.id] }) },
    ], 2) + "</div>"
    var mt = '<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border text-left text-xs text-muted-foreground"><th class="py-2 pr-2 font-medium">모듈</th><th class="py-2 pr-2 font-medium">조</th><th class="py-2 pr-2 font-medium">상태</th><th class="py-2 text-right font-medium">점수</th></tr></thead><tbody>' +
      S.modules.map(function (m, i) {
        var st = modStatus(sid, m.id)
        var r = res(sid, m.id)
        var ti = teamOf(sid, m.id)
        return '<tr class="border-b border-border/60 last:border-0"><td class="py-2 pr-2"><span class="font-medium">M' + (i + 1) + '</span> <span class="text-muted-foreground">' + E(m.name) + '</span></td><td class="py-2 pr-2 text-xs text-muted-foreground">' + (ti >= 0 ? E(s.cls + "-" + (ti + 1) + "조") : "—") + '</td><td class="py-2 pr-2">' + (st === "done" ? pill("이수", "accent") : st === "prog" ? pill("진행중", "warning") : pill("미이수", "danger")) + '</td><td class="py-2 text-right font-semibold tabular-nums">' + (r ? total(r) + '<span class="ml-0.5 text-[10px] text-muted-foreground">/' + MAX() + "</span>" : "—") + "</td></tr>"
      }).join("") + "</tbody></table></div>"
    h += '<div class="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">' + card("역량 프로파일", "개인 · 전체 평균 비교 (2점 만점)", radar) + card("모듈별 결과", "완료 모듈 총점 (" + MAX() + "점 만점)", mt) + "</div>"
    var ia = itemAvg([sid])
    var iaAll = itemAvg(allSids())
    var it = '<ul class="flex flex-col gap-3">' + S.items.map(function (x, i) {
      var v = ia[x.id]
      return '<li class="flex items-center gap-3"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-primary/10 text-xs font-semibold text-primary tabular-nums">' + (i + 1) + '</span><div class="min-w-0 flex-1"><div class="flex items-center justify-between gap-2"><span class="truncate text-sm font-medium">' + E(x.title) + '</span><span class="shrink-0 text-sm font-semibold tabular-nums">' + f2(v) + ' <span class="text-xs font-normal text-muted-foreground">전체 ' + f2(iaAll[x.id]) + '</span></span></div><div class="h-1.5 w-full overflow-hidden rounded-full bg-muted mt-1.5"><div class="h-full rounded-full ' + (v != null && v < 1.6 ? "bg-status-warning" : "bg-primary") + '" style="width: ' + (v == null ? 0 : (v / 2) * 100) + '%;"></div></div></div></li>'
    }).join("") + "</ul>"
    h += card("평가 항목별 평균", "완료 모듈 기준 · 2점 만점 · 오른쪽 회색은 전체 평균", it, null, "mt-4")
    return h
  }

  // ───────────────────────── 화면: 조 편성 ─────────────────────────
  function viewTeams() {
    var t = S.ui.tm
    var h = pageHead("조 편성", "전체 모듈을 한 번에, 또는 특정 모듈만 재배정합니다. 담당 모듈은 실습반 전체를 한 번에 편성할 수 있습니다. 이미 배정·평가된 다른 모듈의 조는 그대로 유지됩니다.")
    var selWrap = function (label, inner) {
      return '<div class="flex flex-col gap-1"><label class="text-xs font-medium text-muted-foreground">' + label + '</label><div class="relative">' + inner + ic("chevron-down", "pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground") + "</div></div>"
    }
    var clsN = t.cls === "__ALL__" ? S.students.length : S.students.filter(function (s) { return s.cls === t.cls }).length
    var per = t.cls === "__ALL__" ? Math.round(clsN / S.classes.length) : clsN
    var nTeams = t.basis === "count" ? t.n : Math.ceil(per / Math.max(1, t.n))
    h += '<div class="rounded-lg border border-border bg-card mb-4 flex flex-wrap items-end gap-4 p-4">' +
      selWrap("실습반", '<select data-change="tmCls" class="appearance-none rounded-md border border-border bg-background pl-3 pr-8 py-2 text-sm outline-none focus:border-primary">' + opts([["__ALL__", "실습반 전체 (" + S.classes[0] + "~" + S.classes[S.classes.length - 1] + ")"]].concat(S.classes.map(function (c) { return [c, "실습반 " + c] })), t.cls) + "</select>") +
      selWrap("배정 범위", '<select data-change="tmScope" class="appearance-none rounded-md border border-border bg-background pl-3 pr-8 py-2 text-sm outline-none focus:border-primary">' + opts([["all", "전체 모듈"]].concat(S.modules.map(function (m, i) { return [m.id, "모듈" + (i + 1) + " · " + m.name] })), t.scope) + "</select>") +
      '<div class="flex flex-col gap-1"><label class="text-xs font-medium text-muted-foreground">편성 기준</label><div class="flex rounded-md border border-border p-0.5"><button type="button" data-act="tmBasis" data-k="size" class="rounded px-3 py-1.5 text-sm font-medium transition-colors ' + (t.basis === "size" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground") + '">조당 인원</button><button type="button" data-act="tmBasis" data-k="count" class="rounded px-3 py-1.5 text-sm font-medium transition-colors ' + (t.basis === "count" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground") + '">조 개수</button></div></div>' +
      '<div class="flex flex-col gap-1"><label class="text-xs font-medium text-muted-foreground">' + (t.basis === "size" ? "조당 인원 (명)" : "조 개수 (개)") + '</label><input id="tm-n" data-input="tmN" min="1" max="20" class="w-28 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" type="number" value="' + E(t.n) + '"></div>' +
      '<span class="ml-auto text-sm text-muted-foreground tabular-nums">' + (t.cls === "__ALL__" ? "실습반 전체 · " + clsN + "명 · 반당 약 " + nTeams + "개 조" : "실습반 " + E(t.cls) + " · " + clsN + "명 · 모듈당 약 " + nTeams + "개 조") + "</span></div>"
    h += '<div class="mb-6 flex justify-center"><button type="button" data-act="tmRun" class="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50">' + ic("dices", "h-5 w-5") + (t.scope === "all" ? "전체 모듈 조 편성 실행" : "선택 모듈 조 편성 실행") + "</button></div>"
    var showCls = t.cls === "__ALL__" ? S.classes : [t.cls]
    var mods = t.scope === "all" ? S.modules : S.modules.filter(function (m) { return m.id === t.scope })
    h += '<div class="flex flex-col gap-4">'
    mods.forEach(function (m) {
      var i = S.modules.indexOf(m)
      var nT = 0
      var nS = 0
      var grid = ""
      showCls.forEach(function (c) {
        ;((S.teams[m.id] || {})[c] || []).forEach(function (team, ti) {
          nT++
          nS += team.length
          grid += '<div class="flex flex-col rounded-lg border border-border bg-card"><div class="flex items-center justify-between border-b border-border px-3 py-2"><span class="text-sm font-semibold">' + E(c) + "-" + (ti + 1) + "조</span>" + pill(team.length + "명") + '</div><ul class="flex flex-col gap-1 p-2">' +
            team.map(function (sid) {
              var s = stu(sid)
              return '<li class="flex items-center justify-between gap-2 rounded-md border border-border bg-background px-2.5 py-1.5 text-sm"><span class="font-medium">' + E(s ? s.name : sid) + (res(sid, m.id) ? ' <span class="text-xs text-primary">✓</span>' : "") + '</span><span class="text-xs tabular-nums text-muted-foreground">' + E(sid) + "</span></li>"
            }).join("") + "</ul></div>"
        })
      })
      h += card("모듈" + (i + 1) + " · " + m.name, nT + "개 조 · 총 " + nS + "명", grid ? '<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">' + grid + "</div>" : '<p class="text-sm text-muted-foreground">편성된 조가 없습니다</p>')
    })
    h += "</div>"
    return h
  }

  // ───────────────────────── 화면: 과목 관리 ─────────────────────────
  function viewSubjects() {
    var cur = subj(S.ui.subSel)
    var h = pageHead("과목 관리", semLabel() + " · 과목을 만들고 교수·모듈·평가항목을 배정합니다")
    var sel = cur.itemSel || S.items.map(function (i) { return i.id })
    h += '<div class="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]"><div class="flex flex-col gap-3">' +
      '<form data-submit="subAdd" class="rounded-lg border border-border bg-card flex items-center gap-1.5 p-2"><input name="name" placeholder="새 과목명" class="' + INPUT + ' h-9"><button class="' + BTN_P + '" aria-label="과목 추가">' + ic("plus", "h-4 w-4") + "</button></form>" +
      '<div class="flex flex-col gap-1.5">' +
      S.subjects.map(function (s) {
        var on = s.id === cur.id
        return '<button type="button" data-act="subSel" data-id="' + E(s.id) + '" class="flex items-center justify-between gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ' + (on ? "border-primary bg-accent/50" : "border-border bg-card hover:bg-accent/30") + '"><span class="min-w-0"><span class="block truncate font-medium">' + E(s.name) + '</span><span class="block text-[11px] text-muted-foreground tabular-nums">교수 ' + s.profIds.length + " · 모듈 " + S.modules.length + " · 학생 " + S.students.length + "</span></span>" + (on ? ic("check", "h-4 w-4 shrink-0 text-primary") : "") + "</button>"
      }).join("") + "</div></div>"
    h += '<div class="flex flex-col gap-4">'
    h += '<div class="rounded-lg border border-border bg-card flex flex-wrap items-center justify-between gap-3 p-4"><div class="flex flex-wrap items-center gap-2">' + ic("book-marked", "h-5 w-5 text-primary") + '<span class="text-lg font-semibold">' + E(cur.name) + "</span>" + pill("학생 " + S.students.length + "명", "muted") + pill("분반 " + (S.classes.length + S.lectures.length) + "개") +
      '</div><div class="flex gap-1.5"><button data-act="subRename" class="' + BTN_O + '">' + ic("pencil", "h-4 w-4") + '이름 수정</button><button data-act="subDelete" class="' + BTN_D + '">' + ic("trash2", "h-4 w-4") + "삭제</button></div></div>"
    h += card("담당 교수", "여러 명 배정 가능 · 눌러서 배정/해제", '<div class="flex flex-wrap gap-2">' + S.profs.map(function (p) {
      var on = cur.profIds.indexOf(p.id) >= 0
      return '<button type="button" data-act="subProf" data-id="' + E(p.id) + '" class="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm transition-colors ' + (on ? "border-primary bg-accent/40 text-primary" : "border-border bg-background text-muted-foreground hover:bg-accent") + '">' + ic(on ? "check" : "graduation-cap", "h-3.5 w-3.5") + E(p.name) + "</button>"
    }).join("") + "</div>")
    var comps = compsOrdered()
    var cl = '<div class="flex flex-col gap-1.5">' + comps.map(function (c, i) {
      return '<div class="flex items-center justify-between gap-3 rounded-md border border-border p-2.5"><span class="flex min-w-0 items-center gap-2 text-sm font-medium"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary/10 text-[11px] font-semibold text-primary tabular-nums">' + (i + 1) + "</span>" + ic("target", "h-3.5 w-3.5 shrink-0 text-muted-foreground") + '<span class="truncate">' + E(c.name) + '</span></span><div class="flex shrink-0 items-center gap-1">' +
        '<button type="button" data-act="compMove" data-id="' + c.id + '" data-d="-1"' + (i === 0 ? " disabled" : "") + ' class="rounded-md border border-border p-1.5 text-muted-foreground hover:bg-accent disabled:opacity-30" aria-label="위로">' + ic("chevron-up", "h-3.5 w-3.5") + "</button>" +
        '<button type="button" data-act="compMove" data-id="' + c.id + '" data-d="1"' + (i === comps.length - 1 ? " disabled" : "") + ' class="rounded-md border border-border p-1.5 text-muted-foreground hover:bg-accent disabled:opacity-30" aria-label="아래로">' + ic("chevron-down", "h-3.5 w-3.5") + "</button>" +
        '<button type="button" data-act="compRename" data-id="' + c.id + '" class="rounded-md border border-border p-1.5 text-muted-foreground hover:bg-accent disabled:opacity-40" aria-label="이름 수정">' + ic("pencil", "h-3.5 w-3.5") + "</button>" +
        '<button type="button" data-act="compExclude" data-id="' + c.id + '" class="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground hover:bg-accent disabled:opacity-40">과목에서 제외</button>' +
        '<button type="button" data-act="compDelete" data-id="' + c.id + '" class="rounded-md border border-status-danger/30 p-1.5 text-status-danger hover:bg-status-danger/10 disabled:opacity-40" aria-label="전역 삭제">' + ic("trash2", "h-3.5 w-3.5") + "</button></div></div>"
    }).join("") + "</div>"
    var pool = S.compPool.filter(function (c) { return S.compOrder.indexOf(c.id) < 0 }).concat(S.comps.filter(function (c) { return S.compOrder.indexOf(c.id) < 0 }))
    cl += '<div class="mt-3 flex flex-col gap-2 rounded-md border border-dashed border-border p-3 sm:flex-row sm:items-end">' +
      '<form data-submit="compAddExisting" class="flex-1"><span class="mb-1 block text-xs font-medium text-muted-foreground">기존 역량 추가</span><div class="flex gap-1.5"><select name="id" class="' + INPUT + ' h-9">' + opts([["", "— 역량 선택 —"]].concat(pool.map(function (c) { return [c.id, c.name] })), "") + '</select><button class="' + BTN_O + '">' + ic("plus", "h-4 w-4") + "추가</button></div></form>" +
      '<form data-submit="compCreate" class="flex-1"><span class="mb-1 block text-xs font-medium text-muted-foreground">새 역량 생성 후 매핑</span><div class="flex gap-1.5"><input name="name" placeholder="예: 환자안전" class="' + INPUT + ' h-9"><button class="' + BTN_P + '">' + ic("plus", "h-4 w-4") + "생성</button></div></form></div>"
    h += card("역량", "이 과목에 매핑된 역량 · 위/아래로 순서를 조정합니다. 평가항목은 역량에 소속되어 학생별 성장 그래프로 집계됩니다.", cl)
    var ml = '<form data-submit="subModAdd" class="mb-3 flex flex-col gap-2 rounded-md border border-dashed border-border p-3 sm:flex-row sm:items-end">' +
      '<label class="flex-1"><span class="mb-1 block text-xs font-medium text-muted-foreground">모듈명</span><input name="name" placeholder="예: 성인 입원환자 초기사정" class="' + INPUT + ' h-9"></label>' +
      '<label class="w-full sm:w-36"><span class="mb-1 block text-xs font-medium text-muted-foreground">담당 교수</span><select name="prof" class="' + INPUT + ' h-9">' + opts([["", "미지정"]].concat(S.profs.map(function (p) { return [p.id, p.name] })), "") + "</select></label>" +
      '<label class="flex-1"><span class="mb-1 block text-xs font-medium text-muted-foreground">시나리오</span><input name="scenario" placeholder="상황 설명" class="' + INPUT + ' h-9"></label>' +
      '<button class="' + BTN_P + '">' + ic("plus", "h-4 w-4") + "추가</button></form>"
    ml += '<div class="flex flex-col gap-1.5">' + S.modules.map(function (m) {
      return '<div class="flex items-start justify-between gap-3 rounded-md border border-border p-3"><span class="min-w-0"><span class="flex items-center gap-1.5 text-sm font-medium">' + ic("boxes", "h-3.5 w-3.5 text-muted-foreground") + E(m.name) + '<span class="text-xs text-muted-foreground">· ' + E(profName(m.prof)) + "</span></span>" + (m.scenario ? '<span class="mt-0.5 block text-xs text-muted-foreground">' + E(m.scenario) + "</span>" : "") + '</span><button type="button" data-act="modDelete" data-id="' + E(m.id) + '" class="shrink-0 rounded-md border border-status-danger/30 p-1.5 text-status-danger hover:bg-status-danger/10 disabled:opacity-40" aria-label="삭제">' + ic("trash2", "h-3.5 w-3.5") + "</button></div>"
    }).join("") + "</div>"
    h += card("시뮬레이션 모듈", "이 과목에서 사용할 모듈을 직접 생성합니다", ml)
    var il = '<div class="grid grid-cols-1 gap-1.5 sm:grid-cols-2">' + S.items.map(function (it, i) {
      var on = sel.indexOf(it.id) >= 0
      return '<label class="flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors ' + (on ? "border-primary bg-accent/40" : "border-border") + '"><input data-change="subItem" value="' + E(it.id) + '" class="h-4 w-4 accent-[var(--primary)]" type="checkbox"' + (on ? " checked" : "") + ">" + ic("list-checks", "h-3.5 w-3.5 shrink-0 text-muted-foreground") + '<span class="truncate">' + (i + 1) + ". " + E(it.title) + "</span></label>"
    }).join("") + "</div>"
    h += card("평가 항목", "선택 " + sel.length + " / " + S.items.length + "개", il, '<div class="flex gap-1.5"><button data-act="subItemsAll" data-v="1" class="' + BTN_O + '">전체 선택</button><button data-act="subItemsAll" data-v="0" class="' + BTN_O + '">전체 해제</button></div>')
    h += '<div class="flex items-center gap-2 rounded-md border border-border bg-secondary/30 px-4 py-3 text-sm text-muted-foreground">' + ic("users", "h-4 w-4 shrink-0") + '<span>분반 생성과 학생 배정은 상단 과목을 이 과목으로 둔 상태에서<b class="mx-1 text-foreground">분반 배정</b>·<b class="mx-1 text-foreground">학생 관리</b>메뉴에서 진행하세요.</span></div>'
    h += "</div></div>"
    return h
  }

  // ───────────────────────── 화면: 교수 계정 ─────────────────────────
  function viewProfessors() {
    var h = pageHead("교수 계정 관리", "교수 계정을 생성·수정하고 담당 모듈을 지정합니다 (한 학기 내내 전 실습반에서 해당 모듈 진행)", '<button data-act="profAdd" class="' + BTN_P + '">' + ic("plus", "h-4 w-4") + "교수 추가</button>")
    var rows = S.profs.map(function (p) {
      var ms = S.modules.filter(function (m) { return m.prof === p.id })
      return '<tr class="border-b border-border last:border-0 hover:bg-accent/30"><td class="px-4 py-3"><span class="flex items-center gap-2 font-medium" style="white-space:nowrap"><span class="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">' + E(p.name.charAt(0)) + "</span>" + E(p.name) + '</span></td><td class="px-4 py-3 text-muted-foreground">' + E(p.email) +
        '</td><td class="px-4 py-3"><div class="flex flex-wrap gap-1">' + (ms.length ? ms.map(function (m) { return pill(E(m.name)) }).join("") : '<span class="text-xs text-muted-foreground">없음</span>') + '</div></td><td class="px-4 py-3">' +
        (p.active ? '<span class="inline-flex items-center gap-1 text-xs font-medium text-status-normal" style="white-space:nowrap">' + ic("user-check", "h-3.5 w-3.5") + "활성</span>" : '<span class="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground" style="white-space:nowrap">비활성</span>') +
        '</td><td class="px-4 py-3"><div class="flex justify-end gap-1"><button type="button" data-act="profToggle" data-id="' + E(p.id) + '" class="rounded-md border border-border px-2 py-1 text-xs font-medium hover:bg-accent" style="white-space:nowrap">' + (p.active ? "비활성화" : "활성화") + '</button><button type="button" data-act="profEdit" data-id="' + E(p.id) + '" class="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-accent" aria-label="수정">' + ic("pencil", "h-3.5 w-3.5") + '</button><button type="button" data-act="profDelete" data-id="' + E(p.id) + '" class="flex h-7 w-7 items-center justify-center rounded-md border border-status-danger/30 text-status-danger hover:bg-status-danger/10" aria-label="삭제">' + ic("trash2", "h-3.5 w-3.5") + "</button></div></td></tr>"
    }).join("")
    h += card("교수 " + S.profs.length + "명", "", '<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border bg-secondary/40 text-left text-xs text-muted-foreground"><th class="px-4 py-2.5 font-medium">이름</th><th class="px-4 py-2.5 font-medium">이메일</th><th class="px-4 py-2.5 font-medium">담당 모듈</th><th class="px-4 py-2.5 font-medium">상태</th><th class="px-4 py-2.5 text-right font-medium">관리</th></tr></thead><tbody>' + (rows || '<tr><td colspan="5" class="px-4 py-10 text-center text-sm text-muted-foreground">등록된 교수가 없습니다</td></tr>') + "</tbody></table></div>", null, null, "p-0")
    return h
  }
  function profModal(p) {
    openModal({
      kind: "prof",
      id: p ? p.id : null,
      title: p ? "교수 정보 수정" : "교수 추가",
      fields: [
        { name: "name", label: "이름", value: p ? p.name : "", required: true, ph: "예: 김가상" },
        { name: "email", label: "이메일 (로그인 ID)", type: "email", value: p ? p.email : "", required: true, ph: "prof@example.com" },
        { name: "mods", label: "담당 모듈", type: "checks", options: S.modules.map(function (m) { return [m.id, m.name] }), value: p ? S.modules.filter(function (m) { return m.prof === p.id }).map(function (m) { return m.id }) : [] },
      ],
    })
  }

  // ───────────────────────── 화면: 분반 배정 ─────────────────────────
  function viewAssignments() {
    var assigned = S.classes.filter(function (c) { return S.classProf[c] }).length
    var un = S.classes.filter(function (c) { return !S.classProf[c] })
    var h = pageHead("분반 배정", "실습반·교과반을 추가/삭제하고, 실습반에 담당 교수를 지정합니다. 한 반은 한 명의 교수가 담당합니다.")
    var box = function (label, v, cls) {
      return '<div class="rounded-lg border border-border bg-card p-4"><p class="text-xs text-muted-foreground">' + label + '</p><p class="mt-1 text-2xl font-semibold tabular-nums' + (cls ? " " + cls : "") + '">' + v + "</p></div>"
    }
    h += '<div class="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">' + box("실습반", S.classes.length) + box("배정 완료", assigned, "text-status-normal") + box("미배정", un.length, "text-status-danger") + box("교과반", S.lectures.length) + "</div>"
    if (un.length) h += '<div class="mb-4 flex items-center gap-2 rounded-md border border-status-danger/25 bg-status-danger/10 px-4 py-2.5 text-sm font-medium text-status-danger">' + ic("triangle-alert", "h-4 w-4 shrink-0") + "담당 교수가 없는 실습반: " + E(un.join(", ")) + "반</div>"
    else h += '<div class="mb-4 flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary">' + ic("circle-check", "h-4 w-4 shrink-0") + "모든 실습반에 담당 교수가 배정되었습니다</div>"
    var activeProfs = S.profs.filter(function (p) { return p.active })
    var rows = S.classes.map(function (c) {
      var n = S.students.filter(function (s) { return s.cls === c }).length
      var pid = S.classProf[c]
      return '<tr class="border-b border-border last:border-0 hover:bg-accent/30"><td class="px-4 py-3"><span class="flex items-center gap-2 font-medium" style="white-space:nowrap"><span class="flex h-7 w-7 items-center justify-center rounded-md bg-secondary text-xs font-semibold">' + E(c) + "</span>실습반 " + E(c) + '</span></td><td class="px-4 py-3 tabular-nums text-muted-foreground">' + n + '명</td><td class="px-4 py-3"><div class="relative inline-block"><select data-change="asProf" data-c="' + E(c) + '" class="h-9 appearance-none rounded-md border border-border bg-background pl-3 pr-8 text-sm outline-none focus:border-primary">' +
        opts([["", "— 미배정 —"]].concat(activeProfs.map(function (p) { return [p.id, p.name] })), pid) + "</select>" + ic("chevron-down", "pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground") + '</div></td><td class="px-4 py-3">' + (pid ? pill("배정 완료", "accent") : pill("미배정", "danger")) +
        '</td><td class="px-4 py-3 text-right"><button type="button" data-act="clsDelete" data-c="' + E(c) + '" title="' + (n ? "학생이 배정돼 있어 삭제할 수 없습니다" : "실습반 삭제") + '"' + (n ? " disabled" : "") + ' class="inline-flex h-7 w-7 items-center justify-center rounded-md border border-status-danger/30 text-status-danger hover:bg-status-danger/10 disabled:opacity-40" aria-label="삭제">' + ic("trash2", "h-3.5 w-3.5") + "</button></td></tr>"
    }).join("")
    var addForm = function (act, ph) {
      return '<form data-submit="' + act + '" class="flex items-center gap-1.5"><input name="name" placeholder="' + ph + '" class="' + INPUT + ' h-9 w-32"><button class="' + BTN_P + '">' + ic("plus", "h-4 w-4") + "추가</button></form>"
    }
    h += card("실습반별 담당 교수", "실습반을 추가/삭제하고 담당 교수를 지정합니다", '<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border bg-secondary/40 text-left text-xs text-muted-foreground"><th class="px-4 py-2.5 font-medium">실습반</th><th class="px-4 py-2.5 font-medium">학생 수</th><th class="px-4 py-2.5 font-medium">담당 교수</th><th class="px-4 py-2.5 font-medium">상태</th><th class="px-4 py-2.5 text-right font-medium">관리</th></tr></thead><tbody>' + rows + "</tbody></table></div>", addForm("clsAdd", "새 실습반명"), null, "p-0")
    h += card("교과반", "학생 소속 교과반을 추가/삭제합니다", '<div class="flex flex-wrap gap-2">' + S.lectures.map(function (l) {
      var n = S.students.filter(function (s) { return s.lec === l }).length
      return '<span class="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm"><span class="font-medium">교과반 ' + E(l) + '</span><span class="text-xs text-muted-foreground tabular-nums">' + n + '명</span><button type="button" data-act="lecDelete" data-c="' + E(l) + '" title="' + (n ? "학생이 배정돼 있어 삭제할 수 없습니다" : "교과반 삭제") + '"' + (n ? " disabled" : "") + ' class="text-status-danger hover:text-status-danger/70 disabled:opacity-40" aria-label="삭제">' + ic("trash2", "h-3.5 w-3.5") + "</button></span>"
    }).join("") + "</div>", addForm("lecAdd", "새 교과반명"), "mt-4")
    return h
  }

  // ───────────────────────── 화면: 학생 관리 ─────────────────────────
  function viewAdminStudents() {
    var f = S.ui.as
    var q = f.q.trim()
    var list = S.students.filter(function (s) {
      if (q && s.sid.indexOf(q) < 0 && s.name.indexOf(q) < 0) return false
      if (f.cls !== "all" && s.cls !== f.cls) return false
      return true
    })
    var h = pageHead("학생 관리", "학생을 생성·수정하고 교과반·실습반을 배정합니다 · 엑셀로 일괄 업로드/다운로드",
      '<div class="flex flex-wrap items-center gap-1.5"><button data-act="xlStudents" class="' + BTN_O + '">' + ic("download", "h-4 w-4") + '엑셀 다운로드</button><button data-act="stuUpload" class="' + BTN_O + '">' + ic("upload", "h-4 w-4") + '엑셀 업로드</button><button data-act="stuAdd" class="' + BTN_P + '">' + ic("plus", "h-4 w-4") + "학생 추가</button></div>")
    h += '<div class="mb-4 flex flex-wrap items-center gap-3">' + searchBox("as-q", "asQ", f.q, "이름 또는 학번 검색", "flex-1 min-w-56") + '<select data-change="asCls" class="' + SELECT + '">' + clsOpts(f.cls, "전체 실습반") + '</select><span class="text-sm text-muted-foreground tabular-nums">' + list.length + "명</span></div>"
    var rows = list.map(function (s) {
      var d = doneCount(s.sid)
      var M = S.modules.length
      return '<tr class="border-b border-border last:border-0 hover:bg-accent/30"><td class="px-4 py-3 tabular-nums text-muted-foreground">' + E(s.sid) + '</td><td class="px-4 py-3 font-medium" style="white-space:nowrap">' + E(s.name) + '</td><td class="px-4 py-3 tabular-nums">' + E(s.year) + '학년</td><td class="px-4 py-3">' + E(s.lec) + '반</td><td class="px-4 py-3">' + pill(E(s.cls) + "반") + '</td><td class="px-4 py-3 tabular-nums"><span class="' + (d === M ? "text-status-normal" : d === 0 ? "text-status-danger" : "text-status-warning") + '">' + d + "/" + M + '</span></td><td class="px-4 py-3">' + editBtns("stuEdit", "stuDelete", s.sid) + "</td></tr>"
    }).join("")
    h += '<div class="rounded-lg border border-border bg-card"><div class="p-0"><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border bg-secondary/40 text-left text-xs text-muted-foreground"><th class="px-4 py-2.5 font-medium">학번</th><th class="px-4 py-2.5 font-medium">이름</th><th class="px-4 py-2.5 font-medium">학년</th><th class="px-4 py-2.5 font-medium">교과반</th><th class="px-4 py-2.5 font-medium">실습반</th><th class="px-4 py-2.5 font-medium">이수</th><th class="px-4 py-2.5 text-right font-medium">관리</th></tr></thead><tbody>' +
      (rows || '<tr><td colspan="7" class="px-4 py-10 text-center text-sm text-muted-foreground">조건에 맞는 학생이 없습니다</td></tr>') + "</tbody></table></div></div></div>"
    return h
  }
  function stuModal(s) {
    openModal({
      kind: "stu",
      id: s ? s.sid : null,
      title: s ? "학생 정보 수정" : "학생 추가",
      fields: [
        { name: "sid", label: "학번", value: s ? s.sid : "2026" + String(sidSeq + 7), required: true },
        { name: "name", label: "이름", value: s ? s.name : "", required: true, ph: "예: 김가상" },
        { name: "year", label: "학년", type: "select", options: [["1", "1학년"], ["2", "2학년"], ["3", "3학년"], ["4", "4학년"]], value: s ? s.year : 3 },
        { name: "lec", label: "교과반", type: "select", options: S.lectures.map(function (l) { return [l, "교과반 " + l] }), value: s ? s.lec : S.lectures[0] },
        { name: "cls", label: "실습반", type: "select", options: S.classes.map(function (c) { return [c, "실습반 " + c] }), value: s ? s.cls : S.classes[0] },
      ],
    })
  }

  // ───────────────────────── 화면: 모듈·평가항목 ─────────────────────────
  function viewModules() {
    var h = pageHead("모듈 · 평가항목 관리", "시뮬레이션 모듈과 " + S.items.length + "개 평가 루브릭 항목을 편성합니다")
    var mrows = S.modules.map(function (m, i) {
      var c = comp(m.comp)
      return '<tr class="border-b border-border last:border-0 align-top hover:bg-accent/30"><td class="px-4 py-3 tabular-nums text-muted-foreground">' + (i + 1) + '</td><td class="px-4 py-3 font-medium">' + E(m.name) + '</td><td class="px-4 py-3">' + (c ? pill(E(c.name)) : "—") + '</td><td class="px-4 py-3 text-muted-foreground" style="white-space:nowrap">' + E(profName(m.prof)) + '</td><td class="max-w-md px-4 py-3 text-xs text-muted-foreground">' + E(m.scenario || "") + '</td><td class="px-4 py-3">' + editBtns("modEdit", "modDelete", m.id) + "</td></tr>"
    }).join("")
    h += card("시뮬레이션 모듈 " + S.modules.length + "개", "모듈명·담당 교수·시나리오를 관리합니다", '<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border bg-secondary/40 text-left text-xs text-muted-foreground"><th class="px-4 py-2.5 font-medium">#</th><th class="px-4 py-2.5 font-medium">모듈명</th><th class="px-4 py-2.5 font-medium">대응 역량</th><th class="px-4 py-2.5 font-medium">담당 교수</th><th class="px-4 py-2.5 font-medium">시나리오</th><th class="px-4 py-2.5 text-right font-medium">관리</th></tr></thead><tbody>' + mrows + "</tbody></table></div>", '<button data-act="modAdd" class="' + BTN_P + '">' + ic("plus", "h-4 w-4") + "모듈 추가</button>", null, "p-0")
    var irows = S.items.map(function (it, i) {
      var c = comp(it.comp)
      return '<tr class="border-b border-border last:border-0 align-top hover:bg-accent/30"><td class="px-4 py-3 tabular-nums text-muted-foreground">' + (i + 1) + '</td><td class="px-4 py-3"><span class="inline-flex items-center gap-1.5 whitespace-nowrap">' + pill(it.step + "단계", "accent") + '<span class="text-xs">' + E(it.goal) + '</span></span></td><td class="px-4 py-3"><span class="whitespace-nowrap text-xs text-muted-foreground">' + E(c ? c.name : "—") + '</span></td><td class="px-4 py-3 font-medium">' + E(it.title) + '</td><td class="max-w-xs px-4 py-3 text-xs text-muted-foreground">' + E(it.rule) + '</td><td class="px-4 py-3">' + pill(E(it.type)) + '</td><td class="px-4 py-3">' + editBtns("itemEdit", "itemDelete", it.id) + "</td></tr>"
    }).join("")
    h += card("평가 항목 " + S.items.length + "개", "0·1·2점 루브릭 · 개인(P)/팀(T)/혼합(M) 유형", '<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border bg-secondary/40 text-left text-xs text-muted-foreground"><th class="px-4 py-2.5 font-medium">No</th><th class="px-4 py-2.5 font-medium">단계 · 수행목표</th><th class="px-4 py-2.5 font-medium">영역</th><th class="px-4 py-2.5 font-medium">평가 항목</th><th class="px-4 py-2.5 font-medium">배점 기준</th><th class="px-4 py-2.5 font-medium">유형</th><th class="px-4 py-2.5 text-right font-medium">관리</th></tr></thead><tbody>' + irows + "</tbody></table></div>", '<button data-act="itemAdd" class="' + BTN_P + '">' + ic("plus", "h-4 w-4") + "항목 추가</button>", "mt-4", "p-0")
    return h
  }
  function modModal(m) {
    openModal({
      kind: "mod",
      id: m ? m.id : null,
      title: m ? "모듈 수정" : "모듈 추가",
      fields: [
        { name: "name", label: "모듈명", value: m ? m.name : "", required: true, ph: "예: 성인 입원환자 초기사정" },
        { name: "comp", label: "대응 역량", type: "select", options: compsOrdered().map(function (c) { return [c.id, c.name] }), value: m ? m.comp : S.compOrder[0] },
        { name: "prof", label: "담당 교수", type: "select", options: [["", "미지정"]].concat(S.profs.map(function (p) { return [p.id, p.name] })), value: m ? m.prof : "" },
        { name: "scenario", label: "시나리오", type: "textarea", value: m ? m.scenario : "", ph: "상황 설명" },
      ],
    })
  }
  function itemModal(it) {
    openModal({
      kind: "item",
      id: it ? it.id : null,
      title: it ? "평가 항목 수정" : "평가 항목 추가",
      fields: [
        { name: "step", label: "단계", type: "select", options: [1, 2, 3, 4, 5].map(function (n) { return [n, n + "단계"] }), value: it ? it.step : 1 },
        { name: "goal", label: "수행목표", value: it ? it.goal : "", required: true, ph: "예: 환자확인" },
        { name: "comp", label: "영역 (역량)", type: "select", options: compsOrdered().map(function (c) { return [c.id, c.name] }), value: it ? it.comp : S.compOrder[0] },
        { name: "title", label: "평가 항목", value: it ? it.title : "", required: true, ph: "예: 환자 팔찌로 이름을 대조한다" },
        { name: "rule", label: "배점 기준", value: it ? it.rule : "", ph: "예: 정확히 수행 시 2점" },
        { name: "type", label: "유형", type: "select", options: [["개인", "개인"], ["팀", "팀"], ["혼합", "혼합"]], value: it ? it.type : "개인" },
      ],
    })
  }

  // ───────────────────────── 화면: 설정 ─────────────────────────
  function viewSettings() {
    var h = pageHead("설정", "학기·기관 정보와 평가 기본값을 관리합니다")
    var rows = S.semesters.map(function (s) {
      var on = s.id === S.semId
      return '<tr class="border-b border-border last:border-0 hover:bg-accent/30"><td class="px-4 py-3 font-medium">' + E(s.label) + '</td><td class="px-4 py-3">' + (on ? pill("현재 학기", "accent") : pill("보관", "muted")) + '</td><td class="px-4 py-3"><div class="flex justify-end gap-1">' + (on ? "" : '<button type="button" data-act="semSet" data-id="' + E(s.id) + '" class="rounded-md border border-border px-2 py-1 text-xs font-medium hover:bg-accent">현재 학기로</button><button type="button" data-act="semDelete" data-id="' + E(s.id) + '" class="flex h-7 w-7 items-center justify-center rounded-md border border-status-danger/30 text-status-danger hover:bg-status-danger/10" aria-label="삭제">' + ic("trash2", "h-3.5 w-3.5") + "</button>") + "</div></td></tr>"
    }).join("")
    h += '<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">'
    h += card("학기 관리", "학기를 추가하고 현재 학기를 지정합니다", '<div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border bg-secondary/40 text-left text-xs text-muted-foreground"><th class="px-4 py-2.5 font-medium">학기</th><th class="px-4 py-2.5 font-medium">상태</th><th class="px-4 py-2.5 text-right font-medium">관리</th></tr></thead><tbody>' + rows + "</tbody></table></div>",
      '<form data-submit="semAdd" class="flex items-center gap-1.5"><select name="y" class="' + SELECT + ' h-9">' + opts([[2027, "2027학년도"], [2026, "2026학년도"], [2025, "2025학년도"]], 2026) + '</select><select name="t" class="' + SELECT + ' h-9">' + opts([[1, "1학기"], [2, "2학기"]], 2) + '</select><button class="' + BTN_P + '">' + ic("plus", "h-4 w-4") + "추가</button></form>", null, "p-0")
    h += '<div class="flex flex-col gap-4">'
    h += card("기관 정보", "체험판에서는 가상의 기관으로 표시됩니다", '<dl class="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2"><div><dt class="text-xs text-muted-foreground">기관명</dt><dd class="mt-0.5 font-medium">(가상) 한누리대학교 간호학과</dd></div><div><dt class="text-xs text-muted-foreground">시뮬레이션 센터</dt><dd class="mt-0.5 font-medium">임상술기 시뮬레이션실 3실</dd></div><div><dt class="text-xs text-muted-foreground">운영 담당</dt><dd class="mt-0.5 font-medium">운영관리자</dd></div><div><dt class="text-xs text-muted-foreground">문의</dt><dd class="mt-0.5 font-medium">sim-center@example.com</dd></div></dl>')
    h += card("평가 기본값", "조 편성과 평가 입력에 쓰는 기본값", '<form data-submit="setDefaults" class="flex flex-col gap-3"><label class="block"><span class="mb-1 block text-xs font-medium text-muted-foreground">조당 기본 인원 (명)</span><input name="n" type="number" min="1" max="20" class="' + INPUT + '" value="' + E(S.teamSize) + '"></label><p class="text-xs text-muted-foreground">평가 항목 ' + S.items.length + "개 × 2점 = 모듈 만점 " + MAX() + '점 · 모든 모듈을 제출하면 이수완료로 집계됩니다</p><div><button class="' + BTN_P + '">' + ic("check", "h-4 w-4") + "저장</button></div></form>")
    h += card("체험판 데이터", "모든 데이터는 가상이며 이 브라우저 메모리에만 있습니다", '<div class="flex flex-wrap items-center justify-between gap-3"><p class="text-sm text-muted-foreground">입력·수정한 내용을 지우고 처음 상태로 되돌립니다.</p><button data-act="resetAll" class="' + BTN_D + '">' + ic("trash2", "h-4 w-4") + "처음 상태로</button></div>")
    h += "</div></div>"
    return h
  }

  // ───────────────────────── 라우팅 ─────────────────────────
  function render(route) {
    var p = route.path
    if (route.query.tab && p === "/completion") {
      S.ui.cp.tab = route.query.tab
    }
    var inner
    var adminOnly = p.indexOf("/admin/") === 0
    if (adminOnly && S.mode !== "admin") {
      inner = pageHead("관리자 메뉴", "교수 모드에서는 관리자 메뉴를 사용할 수 없습니다") + '<button data-act="setMode" data-mode="admin" class="' + BTN_P + '">관리자 모드로 전환</button>'
    } else if (p === "/") inner = viewDashboard()
    else if (p === "/completion") inner = viewCompletion()
    else if (p === "/evaluation") inner = viewEvaluation()
    else if (p === "/students") inner = viewStudents()
    else if (p.indexOf("/students/stu-") === 0) inner = viewStudentDetail(p.slice(14))
    else if (p === "/teams") inner = viewTeams()
    else if (p === "/admin/subjects") inner = viewSubjects()
    else if (p === "/admin/professors") inner = viewProfessors()
    else if (p === "/admin/assignments") inner = viewAssignments()
    else if (p === "/admin/students") inner = viewAdminStudents()
    else if (p === "/admin/modules") inner = viewModules()
    else if (p === "/settings") inner = viewSettings()
    else inner = pageHead("페이지를 찾을 수 없습니다", "주소를 다시 확인해 주세요") + '<a class="text-sm font-medium text-primary hover:underline" href="#/">운영 대시보드로</a>'
    var drawer = S.ui.nav
      ? '<div id="demo-nav-bg" class="fixed inset-0 z-50 bg-foreground/40"></div><aside class="demo-drawer flex flex-col border-r border-border bg-sidebar shadow-xl">' + asideInner(p) +
          '<div class="flex flex-col gap-2 border-t border-border p-3"><label class="text-[11px] font-semibold text-muted-foreground">학기</label><select data-change="pickSemSel" class="' + SELECT + '">' + opts(S.semesters.map(function (x) { return [x.id, x.label] }), S.semId) + '</select><label class="text-[11px] font-semibold text-muted-foreground">과목</label><select data-change="pickSubjSel" class="' + SELECT + '">' + opts(S.subjects.map(function (x) { return [x.id, x.name] }), S.subjId) + "</select></div></aside>"
      : ""
    return (
      '<div class="flex min-h-screen bg-background text-foreground"><aside class="hidden w-60 shrink-0 flex-col border-r border-border bg-sidebar md:flex">' + asideInner(p) + "</aside>" +
      '<div class="flex min-w-0 flex-1 flex-col">' + header() + '<main class="min-w-0 flex-1 p-4 md:p-6"><div>' + inner + "</div></main></div></div>" + drawer + modalView()
    )
  }
  function refresh() {
    var a = document.activeElement
    var id = a && a.id
    var pos = null
    try {
      pos = a && a.selectionStart
    } catch (e) {}
    Demo.update()
    if (id) {
      var n = document.getElementById(id)
      if (n) {
        n.focus()
        try {
          if (pos != null) n.setSelectionRange(pos, pos)
        } catch (e) {}
      }
    }
  }

  // ───────────────────────── 동작 ─────────────────────────
  Demo.on("toggleMenu", function (d) {
    S.ui.menu = S.ui.menu === d.menu ? null : d.menu
    refresh()
  })
  Demo.on("closeMenu", function (d, el) {
    S.ui.menu = null
    var href = el.getAttribute("href")
    if (href) location.hash = href.slice(1)
    refresh()
  })
  Demo.on("pickSem", function (d) {
    S.semId = d.id
    S.ui.menu = null
    refresh()
    Demo.toast(semLabel() + "로 전환했습니다")
  })
  Demo.on("pickSubj", function (d) {
    S.subjId = d.id
    S.ui.subSel = d.id
    S.ui.menu = null
    refresh()
    Demo.toast("과목: " + subj().name)
  })
  Demo.on("pickSemSel", function (v) {
    S.semId = v
    refresh()
  })
  Demo.on("pickSubjSel", function (v) {
    S.subjId = v
    S.ui.subSel = v
    refresh()
  })
  Demo.on("setMode", function (d) {
    S.mode = d.mode
    S.ui.menu = null
    if (d.mode === "prof" && location.hash.indexOf("#/admin/") === 0) location.hash = "/"
    refresh()
    Demo.toast(d.mode === "admin" ? "관리자 모드로 전환했습니다" : "교수 모드로 전환했습니다 (관리자 메뉴 숨김)")
  })
  Demo.on("logout", function () {
    S.ui.menu = null
    refresh()
    Demo.toast("체험판에서는 로그아웃할 수 없습니다")
  })
  Demo.on("openNav", function () {
    S.ui.nav = true
    refresh()
  })
  Demo.on("closeModal", function () {
    S.ui.modal = null
    refresh()
  })
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "demo-modal-bg") {
      S.ui.modal = null
      refresh()
      return
    }
    if (S.ui.nav && (e.target.id === "demo-nav-bg" || e.target.closest(".demo-drawer a"))) {
      S.ui.nav = false
      setTimeout(refresh, 0)
    }
    if (S.ui.menu && !e.target.closest("[data-menu-root]")) {
      S.ui.menu = null
      refresh()
    }
  })
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && (S.ui.modal || S.ui.menu || S.ui.nav)) {
      S.ui.modal = null
      S.ui.menu = null
      S.ui.nav = false
      refresh()
    }
  })
  // 한글 입력 중에는 다시 그리지 않고, 조합이 끝나면 반영
  document.addEventListener("compositionend", function (e) {
    var el = e.target.closest && e.target.closest("[data-input]")
    if (el) el.dispatchEvent(new Event("input", { bubbles: true }))
  })
  function bindInput(name, fn) {
    Demo.on(name, function (v, el, e) {
      fn(v)
      if (e && e.isComposing) return
      refresh()
    })
  }

  // 대시보드
  Demo.on("dashMode", function (d) {
    S.ui.dash = d.k
    refresh()
  })
  Demo.on("xlProgress", function () {
    var rows = [["구분", "이름", "이수", "진행중", "전체"]]
    progressRows(S.ui.dash).forEach(function (r) {
      rows.push([r.no, r.name, r.done, r.prog, r.total])
    })
    csv("모듈별_진행현황", rows)
  })
  function compRows(groups) {
    var comps = compsOrdered()
    var rows = [["구분"].concat(comps.map(function (c) { return c.name }))]
    groups.forEach(function (g) {
      var ca = compAvg(g[1])
      rows.push([g[0]].concat(comps.map(function (c) { return f2(ca[c.id]) })))
    })
    return rows
  }
  Demo.on("xlComp", function () {
    csv("역량별_평균", compRows([["전체", allSids()]]))
  })
  Demo.on("xlCompCls", function () {
    csv("역량별_실습반_점수", compRows(S.classes.map(function (c) {
      return ["실습반 " + c, sidsOf(function (s) { return s.cls === c })]
    })))
  })
  Demo.on("xlWeak", function () {
    var ia = itemAvg(allSids())
    var rows = [["No", "평가 항목", "평균(2점)"]]
    S.items.slice().sort(function (a, b) { return (ia[a.id] || 0) - (ia[b.id] || 0) }).forEach(function (it) {
      rows.push([S.items.indexOf(it) + 1, it.title, f2(ia[it.id])])
    })
    csv("항목별_취약순위", rows)
  })
  Demo.on("xlHeat", function () {
    var rows = [["실습반"].concat(S.modules.map(function (m, i) { return "M" + (i + 1) + " " + m.name }))]
    S.classes.forEach(function (c) {
      var sids = sidsOf(function (s) { return s.cls === c })
      rows.push(["실습반 " + c].concat(S.modules.map(function (m) { return f1(groupTotalAvg(sids, m.id).avg) })))
    })
    csv("실습반별_성취도", rows)
  })
  Demo.on("xlClsRank", function () {
    var rows = [["실습반", "전체평균", "완료"]]
    S.classes.forEach(function (c) {
      var g = groupTotalAvg(sidsOf(function (s) { return s.cls === c }))
      rows.push(["실습반 " + c, f1(g.avg), g.n])
    })
    csv("실습반별_순위", rows)
  })
  Demo.on("xlModRank", function () {
    var rows = [["모듈", "담당", "평균"]]
    S.modules.forEach(function (m) {
      rows.push([m.name, profName(m.prof), f1(groupTotalAvg(allSids(), m.id).avg)])
    })
    csv("모듈별_순위", rows)
  })
  Demo.on("xlGrowth", function () {
    csv("역량_증가표", compRows([[subj("sub1").name, allSids()]]))
  })
  Demo.on("xlAll", function () {
    var rows = [["학번", "이름", "교과반", "실습반"].concat(S.modules.map(function (m, i) { return "M" + (i + 1) })).concat(["모듈평균"])]
    S.students.forEach(function (s) {
      rows.push([s.sid, s.name, s.lec, s.cls].concat(S.modules.map(function (m) { var r = res(s.sid, m.id); return r ? total(r) : "" })).concat([f1(avgTotal(s.sid))]))
    })
    csv("종합_성적표", rows)
  })

  // 이수 관리
  bindInput("cpQ", function (v) { S.ui.cp.q = v })
  Demo.on("cpLec", function (v) { S.ui.cp.lec = v; refresh() })
  Demo.on("cpCls", function (v) { S.ui.cp.cls = v; refresh() })
  Demo.on("cpTab", function (d) {
    S.ui.cp.tab = d.k
    if (location.hash.indexOf("?") >= 0) location.hash = "/completion"
    refresh()
  })
  Demo.on("goStudent", function (d) {
    location.hash = "/students/stu-" + d.sid
  })
  Demo.on("gradeUpload", function () {
    var n = 0
    S.students.forEach(function (s) {
      if (!S.grades[s.sid]) {
        S.grades[s.sid] = genGrade()
        n++
      }
    })
    refresh()
    Demo.toast(n ? "가상 성적 파일을 학번으로 매칭했습니다 · " + n + "명 추가" : "모든 학생의 성적이 이미 매칭되어 있습니다")
  })
  Demo.on("gradeReset", function () {
    confirmBox("성적 초기화", "업로드한 성적을 모두 삭제합니다. 모듈 이수 기록은 그대로 남습니다.", "초기화", function () {
      S.grades = {}
      Demo.toast("업로드 성적을 초기화했습니다")
    })
  })
  Demo.on("xlCompletion", function () {
    var rows = [["학번", "이름", "교과반", "실습반"].concat(S.modules.map(function (m, i) { return "M" + (i + 1) })).concat(["출석", "기말", "과제", "핵심", "수행", "총점", "평점", "진행률"])]
    completionList().forEach(function (s) {
      var g = gradeRow(s.sid)
      rows.push([s.sid, s.name, s.lec, s.cls].concat(S.modules.map(function (m) {
        var st = modStatus(s.sid, m.id)
        return st === "done" ? total(res(s.sid, m.id)) : st === "prog" ? "진행" : "미이수"
      })).concat(g ? [g.att, g.fin, g.hw, g.core, g.perf, g.sum, g.letter] : ["", "", "", "", "", "", ""]).concat([doneCount(s.sid) + "/" + S.modules.length]))
    })
    csv("이수관리_성적표", rows)
  })

  // 평가 입력
  Demo.on("evMod", function (v) { S.ui.ev.mod = v; S.ui.ev.team = 0; refresh() })
  Demo.on("evCls", function (v) { S.ui.ev.cls = v; S.ui.ev.team = 0; refresh() })
  Demo.on("evTeam", function (v) { S.ui.ev.team = Number(v); refresh() })
  Demo.on("evView", function (d) { S.ui.ev.view = d.k; refresh() })
  Demo.on("evToggle", function (d) {
    S.ui.ev.open[d.k] = !S.ui.ev.open[d.k]
    refresh()
  })
  Demo.on("evScore", function (d) {
    var dr = evEnsureDraft()
    var v = Number(d.v)
    var targets = d.s === "*" ? evMembers() : [d.s]
    targets.forEach(function (sid) {
      dr[sid] = dr[sid] || {}
      dr[sid][d.i] = v
    })
    refresh()
  })
  Demo.on("evCheck", function (d) {
    var g = goals().filter(function (x) { return x.key === d.k })[0]
    if (!g) return
    var done = g.items.every(function (it) { return itemDone(it.id) })
    var dr = evEnsureDraft()
    evMembers().forEach(function (sid) {
      dr[sid] = dr[sid] || {}
      g.items.forEach(function (it) {
        if (done) delete dr[sid][it.id]
        else if (dr[sid][it.id] == null) dr[sid][it.id] = 2
      })
    })
    if (!done) S.ui.ev.open[d.k] = true
    refresh()
    if (!done) Demo.toast("「" + g.goal + "」 미채점 항목을 2점(수행)으로 채웠습니다")
  })
  Demo.on("evMemo", function (d) {
    var key = evKey() + "|" + d.k
    openModal({ kind: "memo", key: key, title: "필기·메모 · " + d.k.split("|")[1], fields: [{ name: "memo", label: "관찰 메모 (조 공통)", type: "textarea", value: S.memos[key] || "", ph: "예: 손위생 순서 혼동, 재교육 필요" }] })
  })
  Demo.on("evDiscard", function () {
    delete S.drafts[evKey()]
    refresh()
    Demo.toast("임시 저장한 채점을 되돌렸습니다")
  })
  Demo.on("evSubmit", function () {
    var dr = S.drafts[evKey()]
    var mem = evMembers()
    if (!mem.length) return
    var ev = S.ui.ev
    mem.forEach(function (sid) {
      var sc = {}
      S.items.forEach(function (it) {
        sc[it.id] = evScore(sid, it.id) || 0
      })
      S.results[sid] = S.results[sid] || {}
      S.results[sid][ev.mod] = { scores: sc }
    })
    if (dr) delete S.drafts[evKey()]
    var now = new Date()
    S.submitted[evKey()] = Demo.day(0) + " " + String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0")
    refresh()
    Demo.toast(ev.cls + "-" + (ev.team + 1) + "조 " + mem.length + "명 평가를 저장했습니다 · 이수 현황에 반영됨")
  })

  // 학생 역량
  bindInput("stQ", function (v) { S.ui.st.q = v })
  Demo.on("stLec", function (v) { S.ui.st.lec = v; refresh() })
  Demo.on("stCls", function (v) { S.ui.st.cls = v; refresh() })

  // 조 편성
  Demo.on("tmCls", function (v) { S.ui.tm.cls = v; refresh() })
  Demo.on("tmScope", function (v) { S.ui.tm.scope = v; refresh() })
  Demo.on("tmBasis", function (d) { S.ui.tm.basis = d.k; refresh() })
  bindInput("tmN", function (v) {
    var n = parseInt(v, 10)
    S.ui.tm.n = isNaN(n) ? "" : Math.max(1, Math.min(20, n))
  })
  Demo.on("tmRun", function () {
    var t = S.ui.tm
    var n = Number(t.n) || 1
    var cls = t.cls === "__ALL__" ? S.classes : [t.cls]
    var mods = t.scope === "all" ? S.modules : S.modules.filter(function (m) { return m.id === t.scope })
    mods.forEach(function (m) {
      S.teams[m.id] = S.teams[m.id] || {}
      cls.forEach(function (c) {
        S.teams[m.id][c] = buildTeams(m.id, c, t.basis, n)
        Object.keys(S.drafts).forEach(function (k) {
          if (k.indexOf(m.id + "|" + c + "|") === 0) delete S.drafts[k]
        })
      })
    })
    refresh()
    Demo.toast((t.cls === "__ALL__" ? "실습반 전체" : "실습반 " + t.cls) + " · " + mods.length + "개 모듈 조 편성을 완료했습니다")
  })

  // 과목 관리
  Demo.on("subSel", function (d) { S.ui.subSel = d.id; refresh() })
  Demo.on("subAdd", function (v, form) {
    var name = (v.name || "").trim()
    if (!name) return Demo.toast("과목명을 입력하세요")
    var id = "sub" + Date.now()
    S.subjects.push({ id: id, name: name, profIds: [], itemSel: null })
    S.ui.subSel = id
    refresh()
    Demo.toast("과목을 추가했습니다")
  })
  Demo.on("subRename", function () {
    var s = subj(S.ui.subSel)
    openModal({ kind: "subRename", id: s.id, title: "과목 이름 수정", fields: [{ name: "name", label: "과목명", value: s.name, required: true }] })
  })
  Demo.on("subDelete", function () {
    if (S.subjects.length <= 1) return Demo.toast("과목은 하나 이상 있어야 합니다")
    var s = subj(S.ui.subSel)
    confirmBox("과목 삭제", "「" + s.name + "」 과목을 삭제합니다.", "삭제", function () {
      S.subjects = S.subjects.filter(function (x) { return x.id !== s.id })
      if (S.subjId === s.id) S.subjId = S.subjects[0].id
      S.ui.subSel = S.subjId
      Demo.toast("과목을 삭제했습니다")
    })
  })
  Demo.on("subProf", function (d) {
    var s = subj(S.ui.subSel)
    var i = s.profIds.indexOf(d.id)
    if (i >= 0) s.profIds.splice(i, 1)
    else s.profIds.push(d.id)
    refresh()
  })
  Demo.on("compMove", function (d) {
    var i = S.compOrder.indexOf(d.id)
    var j = i + Number(d.d)
    if (i < 0 || j < 0 || j >= S.compOrder.length) return
    S.compOrder[i] = S.compOrder[j]
    S.compOrder[j] = d.id
    refresh()
  })
  Demo.on("compRename", function (d) {
    var c = comp(d.id)
    openModal({ kind: "compRename", id: c.id, title: "역량 이름 수정", fields: [{ name: "name", label: "역량명", value: c.name, required: true }] })
  })
  function compUsed(id) {
    return S.items.some(function (it) { return it.comp === id }) || S.modules.some(function (m) { return m.comp === id })
  }
  Demo.on("compExclude", function (d) {
    if (compUsed(d.id)) return Demo.toast("평가항목·모듈이 연결된 역량은 제외할 수 없습니다")
    S.compOrder = S.compOrder.filter(function (x) { return x !== d.id })
    refresh()
  })
  Demo.on("compDelete", function (d) {
    if (compUsed(d.id)) return Demo.toast("평가항목·모듈이 연결된 역량은 삭제할 수 없습니다")
    var c = comp(d.id)
    confirmBox("역량 삭제", "「" + c.name + "」 역량을 모든 과목에서 삭제합니다.", "삭제", function () {
      S.compOrder = S.compOrder.filter(function (x) { return x !== d.id })
      S.comps = S.comps.filter(function (x) { return x.id !== d.id })
      S.compPool = S.compPool.filter(function (x) { return x.id !== d.id })
      Demo.toast("역량을 삭제했습니다")
    })
  })
  Demo.on("compAddExisting", function (v) {
    if (!v.id) return Demo.toast("추가할 역량을 선택하세요")
    if (S.compOrder.indexOf(v.id) < 0) S.compOrder.push(v.id)
    refresh()
    Demo.toast("역량을 과목에 매핑했습니다")
  })
  Demo.on("compCreate", function (v) {
    var name = (v.name || "").trim()
    if (!name) return Demo.toast("역량명을 입력하세요")
    var id = "c" + Date.now()
    S.comps.push({ id: id, name: name })
    S.compOrder.push(id)
    refresh()
    Demo.toast("새 역량을 만들고 매핑했습니다")
  })
  Demo.on("subModAdd", function (v) {
    var name = (v.name || "").trim()
    if (!name) return Demo.toast("모듈명을 입력하세요")
    addModule({ name: name, prof: v.prof || "", scenario: (v.scenario || "").trim(), comp: S.compOrder[0] })
    refresh()
    Demo.toast("모듈을 추가했습니다")
  })
  Demo.on("subItem", function (v, el) {
    var s = subj(S.ui.subSel)
    var sel = s.itemSel || S.items.map(function (i) { return i.id })
    if (el.checked) {
      if (sel.indexOf(v) < 0) sel.push(v)
    } else sel = sel.filter(function (x) { return x !== v })
    s.itemSel = sel
    refresh()
  })
  Demo.on("subItemsAll", function (d) {
    subj(S.ui.subSel).itemSel = d.v === "1" ? S.items.map(function (i) { return i.id }) : []
    refresh()
  })

  // 모듈·평가항목
  function addModule(o) {
    var id = "m" + Date.now()
    S.modules.push({ id: id, name: o.name, comp: o.comp, prof: o.prof, scenario: o.scenario })
    S.teams[id] = {}
    S.classes.forEach(function (c) {
      S.teams[id][c] = buildTeams(id, c, "size", S.teamSize)
    })
  }
  Demo.on("modAdd", function () { modModal(null) })
  Demo.on("modEdit", function (d) { modModal(mod(d.id)) })
  Demo.on("modDelete", function (d) {
    var m = mod(d.id)
    if (!m) return
    confirmBox("모듈 삭제", "「" + m.name + "」 모듈과 이 모듈의 평가 결과·조 편성을 삭제합니다.", "삭제", function () {
      S.modules = S.modules.filter(function (x) { return x.id !== m.id })
      Object.keys(S.results).forEach(function (sid) { delete S.results[sid][m.id] })
      delete S.teams[m.id]
      Object.keys(S.drafts).forEach(function (k) { if (k.indexOf(m.id + "|") === 0) delete S.drafts[k] })
      if (S.ui.ev.mod === m.id && S.modules[0]) S.ui.ev.mod = S.modules[0].id
      if (S.ui.tm.scope === m.id) S.ui.tm.scope = "all"
      Demo.toast("모듈을 삭제했습니다")
    })
  })
  Demo.on("itemAdd", function () { itemModal(null) })
  Demo.on("itemEdit", function (d) { itemModal(S.items.filter(function (x) { return x.id === d.id })[0]) })
  Demo.on("itemDelete", function (d) {
    var it = S.items.filter(function (x) { return x.id === d.id })[0]
    if (!it) return
    confirmBox("평가 항목 삭제", "「" + it.title + "」 항목을 삭제합니다. 모듈 만점이 " + (MAX() - 2) + "점으로 바뀝니다.", "삭제", function () {
      S.items = S.items.filter(function (x) { return x.id !== it.id })
      Demo.toast("평가 항목을 삭제했습니다")
    })
  })

  // 교수 계정
  Demo.on("profAdd", function () { profModal(null) })
  Demo.on("profEdit", function (d) { profModal(prof(d.id)) })
  Demo.on("profToggle", function (d) {
    var p = prof(d.id)
    p.active = !p.active
    if (!p.active) S.classes.forEach(function (c) { if (S.classProf[c] === p.id) S.classProf[c] = "" })
    refresh()
    Demo.toast(p.name + " 교수 계정을 " + (p.active ? "활성화" : "비활성화(담당 실습반 해제)") + "했습니다")
  })
  Demo.on("profDelete", function (d) {
    var p = prof(d.id)
    confirmBox("교수 계정 삭제", "「" + p.name + "」 계정을 삭제합니다. 담당 모듈·실습반 배정이 해제됩니다.", "삭제", function () {
      S.profs = S.profs.filter(function (x) { return x.id !== p.id })
      S.modules.forEach(function (m) { if (m.prof === p.id) m.prof = "" })
      S.classes.forEach(function (c) { if (S.classProf[c] === p.id) S.classProf[c] = "" })
      S.subjects.forEach(function (s) { s.profIds = s.profIds.filter(function (x) { return x !== p.id }) })
      Demo.toast("교수 계정을 삭제했습니다")
    })
  })

  // 분반 배정
  Demo.on("asProf", function (v, el) {
    S.classProf[el.getAttribute("data-c")] = v
    refresh()
    Demo.toast("실습반 " + el.getAttribute("data-c") + " · " + (v ? profName(v) + " 교수 배정" : "배정 해제"))
  })
  function nextName(v, list) {
    var n = (v || "").trim().replace(/^실습반\s*|^교과반\s*|반$/g, "").toUpperCase()
    if (!n) return ""
    if (list.indexOf(n) >= 0) return null
    return n.slice(0, 6)
  }
  Demo.on("clsAdd", function (v) {
    var n = nextName(v.name, S.classes)
    if (n === "") return Demo.toast("새 실습반명을 입력하세요")
    if (n === null) return Demo.toast("이미 있는 실습반입니다")
    S.classes.push(n)
    S.classProf[n] = ""
    S.modules.forEach(function (m) { S.teams[m.id][n] = [] })
    refresh()
    Demo.toast("실습반 " + n + "을 추가했습니다")
  })
  Demo.on("clsDelete", function (d) {
    S.classes = S.classes.filter(function (c) { return c !== d.c })
    delete S.classProf[d.c]
    refresh()
    Demo.toast("실습반 " + d.c + "을 삭제했습니다")
  })
  Demo.on("lecAdd", function (v) {
    var n = nextName(v.name, S.lectures)
    if (n === "") return Demo.toast("새 교과반명을 입력하세요")
    if (n === null) return Demo.toast("이미 있는 교과반입니다")
    S.lectures.push(n)
    refresh()
    Demo.toast("교과반 " + n + "을 추가했습니다")
  })
  Demo.on("lecDelete", function (d) {
    S.lectures = S.lectures.filter(function (c) { return c !== d.c })
    refresh()
  })

  // 학생 관리
  bindInput("asQ", function (v) { S.ui.as.q = v })
  Demo.on("asCls", function (v) { S.ui.as.cls = v; refresh() })
  Demo.on("stuAdd", function () { stuModal(null) })
  Demo.on("stuEdit", function (d) { stuModal(stu(d.id)) })
  Demo.on("stuDelete", function (d) {
    var s = stu(d.id)
    confirmBox("학생 삭제", s.name + " (" + s.sid + ") 학생과 평가 기록을 삭제합니다.", "삭제", function () {
      removeStudent(s.sid)
      Demo.toast("학생을 삭제했습니다")
    })
  })
  function removeStudent(sid) {
    S.students = S.students.filter(function (x) { return x.sid !== sid })
    delete S.results[sid]
    delete S.grades[sid]
    Object.keys(S.teams).forEach(function (mid) {
      Object.keys(S.teams[mid]).forEach(function (c) {
        S.teams[mid][c] = S.teams[mid][c].map(function (t) { return t.filter(function (x) { return x !== sid }) }).filter(function (t) { return t.length })
      })
    })
  }
  function placeInTeams(sid, cls) {
    S.modules.forEach(function (m) {
      var ts = (S.teams[m.id][cls] = S.teams[m.id][cls] || [])
      var small = null
      ts.forEach(function (t) { if (!small || t.length < small.length) small = t })
      if (small && small.length < S.teamSize) small.push(sid)
      else ts.push([sid])
    })
  }
  Demo.on("stuUpload", function () {
    for (var k = 0; k < 3; k++) {
      var c = S.classes[Math.floor(Math.random() * S.classes.length)]
      var s = { sid: newSid(), name: newName(), year: 3, lec: S.lectures[Math.floor(Math.random() * S.lectures.length)], cls: c }
      S.students.push(s)
      S.results[s.sid] = {}
      placeInTeams(s.sid, c)
    }
    refresh()
    Demo.toast("체험판: 가상 엑셀에서 학생 3명을 불러왔습니다")
  })
  Demo.on("xlStudents", function () {
    var rows = [["학번", "이름", "학년", "교과반", "실습반", "이수"]]
    S.students.forEach(function (s) { rows.push([s.sid, s.name, s.year, s.lec, s.cls, doneCount(s.sid) + "/" + S.modules.length]) })
    csv("학생명단", rows)
  })

  // 설정
  Demo.on("semSet", function (d) {
    S.semId = d.id
    refresh()
    Demo.toast(semLabel() + "을 현재 학기로 지정했습니다")
  })
  Demo.on("semDelete", function (d) {
    S.semesters = S.semesters.filter(function (s) { return s.id !== d.id })
    refresh()
  })
  Demo.on("semAdd", function (v) {
    var label = v.y + "학년도 " + v.t + "학기"
    if (S.semesters.some(function (s) { return s.label === label })) return Demo.toast("이미 있는 학기입니다")
    S.semesters.unshift({ id: "s" + v.y + v.t, label: label })
    refresh()
    Demo.toast(label + "을 추가했습니다")
  })
  Demo.on("setDefaults", function (v) {
    var n = parseInt(v.n, 10)
    if (!n || n < 1) return Demo.toast("1 이상의 숫자를 입력하세요")
    S.teamSize = Math.min(20, n)
    S.ui.tm.n = S.teamSize
    refresh()
    Demo.toast("조당 기본 인원을 " + S.teamSize + "명으로 저장했습니다")
  })
  Demo.on("resetAll", function () {
    confirmBox("처음 상태로", "입력한 모든 내용을 지우고 처음 상태로 되돌립니다.", "되돌리기", function () {
      location.reload()
    })
  })

  // 모달 저장
  Demo.on("modalSubmit", function (v, form) {
    var md = S.ui.modal
    if (!md) return
    if (md.kind === "confirm") {
      S.ui.modal = null
      if (md.onOk) md.onOk()
      refresh()
      return
    }
    var checks = Array.prototype.map.call(form.querySelectorAll('input[type=checkbox]:checked'), function (x) { return x.value })
    var msg = "저장했습니다"
    if (md.kind === "prof") {
      if (!v.name.trim() || !v.email.trim()) return Demo.toast("이름과 이메일을 입력하세요")
      var p = md.id ? prof(md.id) : null
      if (!p) {
        p = { id: "p" + Date.now(), active: true }
        S.profs.push(p)
        msg = "교수 계정을 추가했습니다"
      }
      p.name = v.name.trim()
      p.email = v.email.trim()
      S.modules.forEach(function (m) {
        if (checks.indexOf(m.id) >= 0) m.prof = p.id
        else if (m.prof === p.id) m.prof = ""
      })
    } else if (md.kind === "stu") {
      var sid = v.sid.trim()
      if (!/^\d{6,10}$/.test(sid)) return Demo.toast("학번은 숫자 6~10자리로 입력하세요")
      if (!v.name.trim()) return Demo.toast("이름을 입력하세요")
      if ((!md.id || md.id !== sid) && stu(sid)) return Demo.toast("이미 등록된 학번입니다")
      if (md.id) {
        var s = stu(md.id)
        var oldCls = s.cls
        if (sid !== s.sid) {
          S.results[sid] = S.results[s.sid] || {}
          delete S.results[s.sid]
          if (S.grades[s.sid]) {
            S.grades[sid] = S.grades[s.sid]
            delete S.grades[s.sid]
          }
          Object.keys(S.teams).forEach(function (mid) {
            Object.keys(S.teams[mid]).forEach(function (c) {
              S.teams[mid][c] = S.teams[mid][c].map(function (t) { return t.map(function (x) { return x === s.sid ? sid : x }) })
            })
          })
          s.sid = sid
        }
        s.name = v.name.trim()
        s.year = Number(v.year)
        s.lec = v.lec
        if (v.cls !== oldCls) {
          var keep = { results: S.results[sid], grades: S.grades[sid] }
          removeStudent(sid)
          s.cls = v.cls
          S.students.push(s)
          S.results[sid] = keep.results || {}
          if (keep.grades) S.grades[sid] = keep.grades
          placeInTeams(sid, v.cls)
        }
        msg = "학생 정보를 수정했습니다"
      } else {
        var ns = { sid: sid, name: v.name.trim(), year: Number(v.year), lec: v.lec, cls: v.cls }
        S.students.push(ns)
        S.results[sid] = {}
        placeInTeams(sid, v.cls)
        msg = "학생을 추가했습니다 · 실습반 " + v.cls + " 조에 자동 배치"
      }
    } else if (md.kind === "mod") {
      if (!v.name.trim()) return Demo.toast("모듈명을 입력하세요")
      if (md.id) {
        var m = mod(md.id)
        m.name = v.name.trim()
        m.comp = v.comp
        m.prof = v.prof
        m.scenario = v.scenario.trim()
      } else {
        addModule({ name: v.name.trim(), comp: v.comp, prof: v.prof, scenario: v.scenario.trim() })
        msg = "모듈을 추가했습니다"
      }
    } else if (md.kind === "item") {
      if (!v.title.trim() || !v.goal.trim()) return Demo.toast("수행목표와 평가 항목을 입력하세요")
      var it = md.id ? S.items.filter(function (x) { return x.id === md.id })[0] : null
      if (!it) {
        it = { id: "i" + Date.now() }
        S.items.push(it)
        msg = "평가 항목을 추가했습니다 · 모듈 만점 " + (S.items.length * 2) + "점"
      }
      it.step = Number(v.step)
      it.goal = v.goal.trim()
      it.comp = v.comp
      it.title = v.title.trim()
      it.rule = v.rule.trim()
      it.type = v.type
    } else if (md.kind === "subRename") {
      if (!v.name.trim()) return Demo.toast("과목명을 입력하세요")
      subj(md.id).name = v.name.trim()
    } else if (md.kind === "compRename") {
      if (!v.name.trim()) return Demo.toast("역량명을 입력하세요")
      comp(md.id).name = v.name.trim()
    } else if (md.kind === "memo") {
      if (v.memo.trim()) S.memos[md.key] = v.memo.trim()
      else delete S.memos[md.key]
      msg = "메모를 저장했습니다"
    }
    S.ui.modal = null
    refresh()
    Demo.toast(msg)
  })

  Demo.mount(render)
  Demo.banner()
})()
