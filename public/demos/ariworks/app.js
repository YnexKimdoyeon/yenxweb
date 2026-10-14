/* (가상) 루미웍스 사내 통합 인트라넷, 와이넥스 포트폴리오 체험판
 * 모든 데이터는 가상이며 브라우저 메모리에만 있다. 새로고침하면 처음 상태로 돌아간다.
 */
;(function () {
  var E = Demo.esc
  var N = Demo.num
  function won(n) { return "₩" + N(n) }
  function pad(x) { return String(x).padStart(2, "0") }
  function dot(d) { return d ? String(d).replace(/-/g, ".") : "" }
  function ago(n) { return Demo.day(-n) }
  var TODAY = Demo.day(0)
  var YM = TODAY.slice(0, 7)
  var THIS_Y = +TODAY.slice(0, 4)
  var THIS_M = +TODAY.slice(5, 7)
  var uid = 1000
  function nid() { return ++uid }
  function nowStr() { var d = new Date(); return dot(TODAY) + " " + pad(d.getHours()) + ":" + pad(d.getMinutes()) }
  function ymShift(ym, k) { var y = +ym.slice(0, 4), m = +ym.slice(5, 7) + k; while (m < 1) { m += 12; y-- } while (m > 12) { m -= 12; y++ } return y + "-" + pad(m) }
  function lastDay(ym) { return new Date(+ym.slice(0, 4), +ym.slice(5, 7), 0).getDate() }
  var WD = ["일", "월", "화", "수", "목", "금", "토"]
  function hash(s) { var h = 7; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 100003; return h }

  /* ───────── 메뉴·권한 ───────── */
  var MENUS = [
    { k: "home", g: 0, i: "🏠", t: "종합 홈 현황판", lock: 1 },
    { k: "notice", g: 0, i: "📢", t: "공지사항", lock: 1 },
    { k: "worklog", g: 0, i: "📋", t: "업무일지·보고 통합", lock: 1 },
    { k: "consult", g: 1, i: "📞", t: "통합 상담대장", pii: 1 },
    { k: "template", g: 1, i: "🗃️", t: "상담템플릿" },
    { k: "store", g: 1, i: "🏧", t: "가맹점관리", pii: 1 },
    { k: "open", g: 1, i: "🚀", t: "개통/발송현황" },
    { k: "risk", g: 1, i: "🚨", t: "위험거래/블랙리스트", pii: 1 },
    { k: "inquiry", g: 1, i: "💬", t: "고객문의", pii: 1 },
    { k: "stock", g: 1, i: "📦", t: "재고 관리함" },
    { k: "marketing", g: 2, i: "📈", t: "통합 마케팅 관리" },
    { k: "drive", g: 2, i: "📁", t: "사내 드라이브 자료실", lock: 1 },
    { k: "hr", g: 3, i: "👥", t: "통합 인사 관리", pii: 1 },
    { k: "shared", g: 3, i: "🔑", t: "공용 계정 관리" },
    { k: "finance", g: 3, i: "🌐", t: "매입매출 및 통합정산", pii: 1 },
    { k: "perm", g: 4, i: "🛡️", t: "접근 권한 관리", master: 1 },
    { k: "approval", g: 4, i: "🗂️", t: "삭제 결재함", master: 1 },
  ]
  var GROUPS = ["통합 대시보드", "CS / TM 운영 관리", "마케팅 및 자산 관리", "경영지원팀 (최고 보안)", "시스템 관리"]
  var DEPTS = ["CS·TM", "마케팅", "경영지원"]
  function menu(k) { for (var i = 0; i < MENUS.length; i++) if (MENUS[i].k === k) return MENUS[i] }

  var BRANDS = ["루미페이", "소라페이", "하늘결제", "바다페이"]
  var ROUTES = ["파워링크", "당근", "지인추천", "사이트", "검색", "블로그", "카페", "톡톡", "지식인", "SNS"]
  var BUY = ["상담중", "구매완료", "미구매"]
  var NAMES = ["한서윤", "오지호", "배수아", "남궁민", "류하진", "설은우", "표다인", "양지후", "도윤서", "구하람", "봉서진", "마시온", "탁예준", "석하율", "길로아", "변주원", "천소율", "국태린", "반지율", "어도하", "제하늘", "금보민", "명서우", "편다은", "방채윤", "옥지안", "함이준", "염소희", "추시현", "공나윤", "육준서", "피다솔"]
  var LINES = ["본사", "에이전시", "지사", "총판", "대리점", "영업자"]

  /* ───────── 상태 ───────── */
  var S = {
    user: null,
    sideOpen: false,
    roleMenu: false,
    modal: null,
    modalCb: null,
    revealed: {},
    logs: [],
    approvals: [],
    history: [],
    accounts: [
      { id: "u0", name: "정하늘", title: "대표", email: "master@lumiworks.example", dept: "미배정", role: "master", status: "활성", issued: ago(120) },
      { id: "u1", name: "한예린", title: "과장", email: "mgmt@lumiworks.example", dept: "경영지원", role: "member", status: "활성", issued: ago(110) },
      { id: "u2", name: "서지안", title: "주임", email: "cs1@lumiworks.example", dept: "CS·TM", role: "member", status: "활성", issued: ago(110) },
      { id: "u3", name: "윤다온", title: "대리", email: "mkt@lumiworks.example", dept: "마케팅", role: "member", status: "활성", issued: ago(110) },
      { id: "u4", name: "문태오", title: "사원", email: "cs2@lumiworks.example", dept: "CS·TM", role: "member", status: "활성", issued: ago(60) },
      { id: "u5", name: "백시우", title: "사원", email: "mkt2@lumiworks.example", dept: "마케팅", role: "member", status: "잠김", issued: ago(30) },
    ],
    deptDefault: {
      "CS·TM": { consult: 1, template: 1, store: 1, open: 1, risk: 1, inquiry: 1, stock: 1, shared: 1 },
      "마케팅": { template: 1, inquiry: 1, marketing: 1, shared: 1 },
      "경영지원": { hr: 1, shared: 1, finance: 1 },
    },
    except: {},
  }
  var ROLE_USER = { "마스터": "u0", "CS·TM": "u2", "마케팅": "u3", "경영지원": "u1" }

  function acc(id) { for (var i = 0; i < S.accounts.length; i++) if (S.accounts[i].id === id) return S.accounts[i] }
  function me() { return acc(S.user) }
  function nm(id) { var a = acc(id); return a ? a.name : id || "-" }
  function isMaster(u) { u = u || me(); return u && u.role === "master" }
  function canFor(u, k) {
    var m = menu(k)
    if (!u || !m) return false
    if (u.role === "master") return true
    if (m.lock) return true
    if (m.master) return false
    var ex = (S.except[u.id] || {})[k]
    if (ex === "block") return false
    if (ex === "allow") return true
    return !!(S.deptDefault[u.dept] || {})[k]
  }
  function can(k) { return canFor(me(), k) }
  function mine(item) { return isMaster() || item.by === S.user }
  function roleLabel(u) { return u.role === "master" ? "마스터 관리자" : u.dept }

  /* ───────── 가상 데이터 ───────── */
  // 상담대장
  S.consults = NAMES.map(function (n, i) {
    var last = String(2011 + i * 137).slice(-4)
    var mid = String(3100 + i * 211).slice(-4)
    return {
      id: nid(), date: ago(1 + i * 2), brand: BRANDS[i % 4], name: n,
      phone: "010-" + mid + "-" + last, route: ROUTES[(i * 3) % 10], buy: BUY[i % 3],
      by: i % 3 === 0 ? "u4" : "u2",
      content: "단말기 도입 문의. 업종·월 매출 확인 후 수수료 구간 안내함.",
      note: ["재통화 희망 (오전)", "타사 견적 비교 중", "", "다음 달 개업 예정", "", "약정 만료 후 전환 검토"][i % 6],
      contract: ["계약중", "계약완료", "보류"][i % 3], cmemo: "",
    }
  })
  // 공지
  S.noticeCats = ["서비스장애", "공지사항", "배송안내"]
  S.notices = [
    { id: nid(), cat: "공지사항", title: "신규 가맹 접수 서류 체크리스트 개편", body: "하반기부터 신규 가맹 접수 시 서류 확인 절차가 한 단계 추가됩니다.\n자세한 기준은 사내 드라이브 '교육 자료' 폴더를 참고하세요.", pin: 1, date: ago(20), by: "u0" },
    { id: nid(), cat: "배송안내", title: "택배 마감 시간 조정 안내", body: "택배사 사정으로 금요일 출고분이 다음 주 월요일로 이동합니다.", pin: 0, date: ago(3), by: "u0" },
    { id: nid(), cat: "서비스장애", title: "[해결] 오전 결제 승인 응답 지연", body: "오전 중 정산 조회가 지연되었으며 현재 정상화되었습니다.", pin: 0, date: ago(6), by: "u0" },
    { id: nid(), cat: "배송안내", title: "감열지 롤 추가 입고 안내", body: "감열지 롤이 추가 입고되었습니다. 대기 중인 요청부터 보냅니다.", pin: 0, date: ago(9), by: "u0" },
    { id: nid(), cat: "공지사항", title: "분기 보안 점검 일정 공유", body: "이번 분기 PC 보안 점검을 진행합니다. 일정표는 드라이브에 올렸습니다.", pin: 0, date: ago(15), by: "u0" },
    { id: nid(), cat: "공지사항", title: "인트라넷 메뉴 구성 안내", body: "왼쪽 메뉴는 계정 권한에 따라 다르게 보입니다. 필요한 메뉴는 마스터에게 요청하세요.", pin: 0, date: ago(40), by: "u0" },
  ]
  // 업무일지
  S.wlTabs = ["일일 업무일지", "주간 업무보고서", "월간 보고서", "회의록", "면담일지", "미팅 기록", "교육·세미나"]
  S.routines = {
    u2: ["오전 콜백 목록 확인", "어제 문의 마감 처리", "설치 일정 확정"],
    u4: ["발송 대기 확인", "송장 번호 입력"],
    u3: ["광고 소진율 점검", "신규 리드 전달"],
    u1: ["통장 내역 대조", "증빙 서류 정리"],
    u0: ["결재 대기 확인"],
  }
  S.worklogs = [
    { id: nid(), tab: "일일 업무일지", by: "u2", date: ago(1), body: "신규 상담 콜백 5건 진행, 견적서 2건 발송.", checks: { "오전 콜백 목록 확인": 1, "어제 문의 마감 처리": 1, "설치 일정 확정": 0 } },
    { id: nid(), tab: "일일 업무일지", by: "u4", date: ago(1), body: "택배 회수 요청 4건 접수.", checks: { "발송 대기 확인": 1, "송장 번호 입력": 1 } },
    { id: nid(), tab: "일일 업무일지", by: "u1", date: ago(1), body: "거래처 3곳 대금 지급 일정 확인.", checks: { "통장 내역 대조": 1, "증빙 서류 정리": 0 } },
    { id: nid(), tab: "일일 업무일지", by: "u2", date: ago(2), body: "정산 지연 문의 응대, 원인 공유 완료.", checks: { "오전 콜백 목록 확인": 1, "어제 문의 마감 처리": 1, "설치 일정 확정": 1 } },
    { id: nid(), tab: "일일 업무일지", by: "u3", date: ago(2), body: "주말 광고 소진율 점검, 저효율 소재 2개 중지.", checks: { "광고 소진율 점검": 1, "신규 리드 전달": 1 } },
    { id: nid(), tab: "일일 업무일지", by: "u4", date: ago(3), body: "불량 단말기 1대 교환 발송.", checks: { "발송 대기 확인": 1, "송장 번호 입력": 1 } },
    { id: nid(), tab: "주간 업무보고서", by: "u3", date: ago(4), period: "이번 주 " + dot(ago(10)) + "~" + dot(ago(4)), goal: "검색광고 전환율 개선", body: "전환 키워드 위주로 예산 재배분. 다음 주 블로그 체험단 모집 시작." },
    { id: nid(), tab: "회의록", by: "u0", date: ago(5), meeting: "주간 운영 회의", attend: "정하늘, 한예린, 서지안, 윤다온", body: "하반기 프로모션 일정 확정. 재고 안전 수량 20대로 상향." },
    { id: nid(), tab: "면담일지", by: "u0", date: ago(12), meeting: "정하늘 ↔ 문태오", body: "입사 2개월 차 적응 면담. 출고 업무 숙련도 양호." },
    { id: nid(), tab: "미팅 기록", by: "u3", date: ago(8), meeting: "지역 카페 운영진", place: "회사 회의실", body: "배너 광고 단가 협의. 후속: 견적서 발송." },
  ]
  // 드라이브
  S.folders = [
    { id: 1, name: "계약서 양식", scope: "전 직원", by: "u0" },
    { id: 2, name: "교육 자료", scope: "전 직원", by: "u0" },
    { id: 3, name: "제품 카탈로그", scope: "전 직원", by: "u3" },
    { id: 4, name: "CS 응대 자료", scope: "CS·TM", by: "u2" },
    { id: 5, name: "급여·인사 서식", scope: "경영지원", by: "u1" },
    { id: 6, name: "임원 보고", scope: "비공개", by: "u0" },
  ]
  S.files = [
    { id: nid(), folder: 1, name: "가맹계약서_표준양식.pdf", size: "212 KB", by: "u0", date: ago(30) },
    { id: nid(), folder: 1, name: "개인정보_수집이용_동의서.pdf", size: "96 KB", by: "u0", date: ago(30) },
    { id: nid(), folder: 1, name: "자동이체_신청서.pdf", size: "88 KB", by: "u1", date: ago(22) },
    { id: nid(), folder: 2, name: "신규입사자_교육.pptx", size: "4.1 MB", by: "u0", date: ago(18) },
    { id: nid(), folder: 3, name: "L100_단말기_카탈로그.pdf", size: "2.3 MB", by: "u3", date: ago(12) },
    { id: nid(), folder: 4, name: "자주묻는질문_정리.docx", size: "54 KB", by: "u2", date: ago(7) },
    { id: nid(), folder: 5, name: "급여명세서_서식.xlsx", size: "31 KB", by: "u1", date: ago(40) },
  ]
  // 상담템플릿
  S.templates = [
    { id: nid(), brand: "루미페이", title: "첫 상담 인사", body: "안녕하세요, 루미웍스 상담팀입니다.\n남겨 주신 결제 단말기 문의 답변드립니다.\n· 요금: 매장 형태별 맞춤 견적\n· 설치: 서류 확인 후 순차 방문\n· 준비물: 사업자 서류, 정산 계좌 정보", by: "u2" },
    { id: nid(), brand: "루미페이", title: "입금 일정 안내", body: "결제하신 금액은 영업일 기준으로 정산되어 지정 계좌로 들어갑니다.\n연휴 기간에는 입금일이 뒤로 밀릴 수 있어 미리 안내드립니다.", by: "u2" },
    { id: nid(), brand: "루미페이", title: "단말기 멈춤 안내", body: "이용에 불편을 드려 죄송합니다.\n충전 케이블 연결 상태부터 확인 부탁드립니다.\n그래도 화면이 멈춰 있으면 교환 접수를 도와드리겠습니다.", by: "u4" },
    { id: nid(), brand: "소라페이", title: "소라페이 가입 서류", body: "소라페이 가맹 가입에는 사업자등록증 사본과 통장 사본이 필요합니다.", by: "u2" },
    { id: nid(), brand: "하늘결제", title: "해지 접수 안내", body: "해지 접수 후 단말기 반납 주소를 문자로 보내드립니다.", by: "u4" },
  ]
  // 가맹점
  var LINE_CO = ["본사", "한빛에이전시", "중부지사", "미래총판", "서초대리점", "서영업"]
  var LINE_RATE = [0.3, 0.25, 0.2, 0.15, 0.1, 0.05]
  function mkLines(d) { return LINES.map(function (l, i) { return { lvl: l, co: LINE_CO[i], rate: LINE_RATE[i], date: d, hist: [{ rate: LINE_RATE[i], co: LINE_CO[i], date: d }], rsv: null } }) }
  var ST = [
    ["새솔카페 2호점", "카페", "김새솔", 2.3, "무인카페"], ["온담분식", "분식", "이온담", 2.5, "분식"], ["해밀세탁 무인점", "세탁", "박해밀", 2.4, "무인세탁"],
    ["다온정육", "정육", "최다온", 2.35, "정육"], ["봄결꽃집", "꽃집", "정봄결", 2.6, "화훼"], ["소담헤어룸", "미용", "강라온", 2.65, "미용실"],
    ["가람공방", "공방·체험", "조가람", 2.65, "공방·체험"], ["누리베이커리", "제과·제빵", "윤누리", 2.45, "제과"],
  ]
  S.stores = ST.map(function (s, i) {
    var d = ago(4 + i * 6)
    return {
      id: nid(), regDate: d, brand: i < 6 ? "루미페이" : BRANDS[1 + (i % 3)], tid: "LM" + (20031057 + i * 4113), name: s[0], status: "정상",
      bizName: s[0], industry: s[4], ceo: s[2], ceoPhone: "010-" + (5200 + i * 91) + "-" + (6100 + i * 263), zip: String(10230 + i * 1371),
      addr: ["서울특별시 가상구 하늘로 12", "경기도 가상시 별빛로 45", "인천광역시 가상구 바다로 7"][i % 3], addr2: (i + 1) + "층",
      bizType: i % 4 === 3 ? "법인" : "개인", rrn: "88" + pad(1 + i) + "15-" + (i % 2 ? 2 : 1) + "0" + (34518 + i * 7), bizNo: (211 + i * 13) + "-" + (40 + i) + "-" + (51230 + i * 77),
      payType: ["무선단말기", "블루투스단말기", "유선단말기", "키오스크"][i % 4], taxType: i % 3 ? "과세" : "면세", email: "store" + (i + 1) + "@mail.example",
      bank: ["가람은행", "누리은행", "하나로은행", "별빛은행"][i % 4], acct: "3" + (1020045 + i * 3331) + "0" + (77 + i), holder: s[2],
      fee: s[3], reserve: 0, agency: "루미영업 " + (i % 2 ? "중부" : "수도권"), pg: "PG" + (101 + i),
      hold: null, memo: "", lines: mkLines(d), shipped: i < 7, opened: i < 5, owner: i % 2 ? "문태오" : "서지안", files: {}, saved: i !== 0,
    }
  })
  // 블랙리스트
  S.blNotice = "허위 매출·명의 도용이 확인된 사업자는 승인 요청이 와도 진행하지 않습니다. 등록은 선로사 탭별로 나눠서 합니다."
  S.blLines = ["코어밴", "이음넷", "케이링크"]
  S.blacklist = [
    { id: nid(), line: "코어밴", date: ago(16), bizNo: "137-08-41552", bizName: "(가상) 미담유통", reason: "허위 매출 의심 신고 접수", by: "u4" },
    { id: nid(), line: "코어밴", date: ago(31), bizNo: "220-15-77310", bizName: "(가상) 한결상사", reason: "타인 명의 카드 결제 반복", by: "u2" },
    { id: nid(), line: "이음넷", date: ago(12), content: "동일 단말기로 다수 사업자 승인 시도", memo: "선로사 통보 완료", by: "u2" },
    { id: nid(), line: "케이링크", date: ago(9), phone: "010-7714-2290", bizName: "(가상) 별숲마켓", reason: "분할 결제 반복", by: "u4" },
  ]
  // 고객문의
  S.inqCats = ["단말기 오류", "정산 문의", "가맹 문의", "기타"]
  var IQ = [
    ["단말기 오류", "새솔카페 2호점", "무인카페", "단말기가 계속 재부팅됩니다.", "진행중", "u2", "사업자"],
    ["단말기 오류", "해밀세탁 무인점", "무인세탁", "무인 결제기 화면이 가끔 멈춥니다.", "진행중", "u4", "사업자"],
    ["정산 문의", "온담분식", "분식", "지난달 정산서 항목 설명을 듣고 싶습니다.", "진행중", "u2", "사업자"],
    ["정산 문의", "다온정육", "정육", "입금 계좌를 바꾸고 싶습니다.", "성공", "u2", "사업자"],
    ["가맹 문의", "솔바람 베이커리", "제과·제빵", "두 번째 매장에도 같은 조건으로 설치되나요?", "부재", "u4", "사업자"],
    ["가맹 문의", "하람플라워", "화훼", "다음 달 오픈 예정인데 미리 상담 받고 싶어요.", "가망", "u2", "비사업자"],
    ["단말기 오류", "소담헤어룸", "미용실", "영수증 글씨가 흐리게 나옵니다.", "성공", "u4", "사업자"],
    ["기타", "가람공방", "공방·체험", "대표자 변경 시 절차가 궁금합니다.", "성공", "u2", "사업자"],
    ["기타", "윤슬 필라테스", "스포츠·레저", "휴업 기간 동안 요금이 나오나요?", "미성공", "u2", "미확인"],
  ]
  S.inquiries = IQ.map(function (q, i) {
    return { id: nid(), date: ago(1 + i * 2), first: i === 2 ? ago(4 + i * 2) : "", cat: q[0], name: q[1], phone: "010-" + (6020 + i * 177) + "-" + (3011 + i * 619), industry: q[2], biz: q[6], body: q[3], status: q[4], by: q[5], calls: [] }
  })
  // 재고
  S.stockItems = {
    "루미페이": ["L100 무선단말기", "L100 충전 거치대", "감열지 롤 (57mm)", "카드리더 연결선", "L100 배터리", "가맹 안내 POP"],
    "소라페이": ["S2 블루투스단말기", "감열지 롤 (57mm)"],
    "하늘결제": ["H7 키오스크 리더기", "전원 어댑터"],
  }
  S.stockHist = []
  function sh(brand, item, type, qty, d, partner, serial, memo, by) { S.stockHist.push({ id: nid(), brand: brand, item: item, type: type, qty: qty, date: d, partner: partner, serial: serial || "", memo: memo || "", by: by }) }
  S.stockItems["루미페이"].forEach(function (it, i) { sh("루미페이", it, "입고", [24, 30, 40, 50, 60, 20][i], ago(60), "물류센터 입고", i === 0 ? "SN-L100-0001~0024" : "", "", "u4") })
  sh("루미페이", "L100 무선단말기", "출고", 3, ago(20), "새솔카페 2호점", "SN-L100-0003", "설치 동반 발송", "u4")
  sh("루미페이", "L100 무선단말기", "출고", 2, ago(11), "온담분식", "", "", "u2")
  sh("루미페이", "L100 무선단말기", "반품", 1, ago(5), "봄결꽃집", "SN-L100-0011", "초기 불량", "u4")
  sh("루미페이", "감열지 롤 (57mm)", "출고", 5, ago(7), "다온정육", "", "", "u4")
  sh("소라페이", "S2 블루투스단말기", "입고", 15, ago(45), "물류센터 입고", "", "", "u4")
  sh("소라페이", "S2 블루투스단말기", "출고", 4, ago(14), "누리베이커리", "", "", "u4")
  sh("소라페이", "감열지 롤 (57mm)", "입고", 30, ago(45), "물류센터 입고", "", "", "u4")
  sh("하늘결제", "H7 키오스크 리더기", "입고", 8, ago(40), "물류센터 입고", "", "", "u2")
  sh("하늘결제", "전원 어댑터", "입고", 12, ago(40), "물류센터 입고", "", "", "u2")

  // 마케팅
  S.promos = [
    { id: nid(), status: "예정", name: "연말 정산 빠른입금", period: "다음 달 1일~말일", brand: "전 브랜드", share: "", memo: "세부 조건 이번 주 확정", by: "u3" },
    { id: nid(), status: "진행중", name: "가을 신규 매장 설치비 0원", period: dot(YM + "-01") + "~" + dot(ymShift(YM, 1) + "-" + lastDay(ymShift(YM, 1))), brand: "루미페이", share: "24%", memo: "무인 매장 우선 적용", by: "u3" },
    { id: nid(), status: "진행중", name: "첫 3개월 우대 요율", period: dot(YM + "-01") + "~" + dot(YM + "-" + lastDay(YM)), brand: "소라페이", share: "17%", memo: "", by: "u5" },
    { id: nid(), status: "종료", name: "노후 단말기 보상 교체", period: "지난 분기", brand: "하늘결제", share: "12%", memo: "교체 완료 다수", by: "u3" },
  ]
  S.expenses = [
    { id: nid(), date: ago(3), item: "키워드 광고 예치금", qty: 1, amount: 2500000, payer: "윤다온", method: "법인카드", memo: "월 정기 충전", addr: "", etc: "", by: "u3" },
    { id: nid(), date: ago(10), item: "리뷰어 원고비", qty: 8, amount: 960000, payer: "윤다온", method: "계좌이체", memo: "리뷰어 8명", addr: "", etc: "", by: "u3" },
    { id: nid(), date: ago(17), item: "커뮤니티 배너 게재", qty: 2, amount: 280000, payer: "윤다온", method: "법인카드", memo: "커뮤니티 2곳", addr: "", etc: "", by: "u3" },
    { id: nid(), date: ago(24), item: "리플릿 인쇄", qty: 2500, amount: 390000, payer: "한예린", method: "계좌이체", memo: "", addr: "", etc: "", by: "u1" },
    { id: nid(), date: ago(33), item: "숏폼 광고 집행", qty: 1, amount: 700000, payer: "윤다온", method: "법인카드", memo: "", addr: "", etc: "", by: "u3" },
    { id: nid(), date: ago(40), item: "제품 촬영 배경지", qty: 1, amount: 145000, payer: "백시우", method: "현금", memo: "영수증 첨부", addr: "", etc: "", by: "u5" },
  ]
  S.reviews = [
    { id: nid(), ch: "스마트스토어", date: ago(5), order: "R" + YM.replace("-", "") + "0412", product: "L100 무선단말기", pno: "L-100-W", qty: 1, amount: 0, buyer: "리뷰어 1", buyerId: "rv_one", reviewed: "등록완료", rdate: ago(2), display: "노출중", recruit: "O", refund: "", ramount: 0, rrdate: "", by: "u3" },
    { id: nid(), ch: "스마트스토어", date: ago(9), order: "R" + YM.replace("-", "") + "0387", product: "S2 블루투스단말기", pno: "S-2-B", qty: 1, amount: 0, buyer: "리뷰어 2", buyerId: "rv_two", reviewed: "등록완료", rdate: ago(6), display: "노출중", recruit: "O", refund: "", ramount: 0, rrdate: "", by: "u3" },
    { id: nid(), ch: "스마트스토어", date: ago(12), order: "R" + YM.replace("-", "") + "0201", product: "감열지 롤 20개입", pno: "P-57-10", qty: 1, amount: 13000, buyer: "리뷰어 3", buyerId: "rv_three", reviewed: "미등록", rdate: "", display: "노출중", recruit: "O", refund: "", ramount: 0, rrdate: "", by: "u5" },
    { id: nid(), ch: "스마트스토어", date: ago(19), order: "R" + ymShift(YM, -1).replace("-", "") + "1140", product: "L100 무선단말기", pno: "L-100-W", qty: 1, amount: 0, buyer: "리뷰어 4", buyerId: "rv_four", reviewed: "등록완료", rdate: ago(15), display: "숨김", recruit: "X", refund: "주문 취소", ramount: 0, rrdate: ago(14), by: "u3" },
    { id: nid(), ch: "당근마켓", date: ago(6), name: "리뷰어 5", nick: "동네사장님", display: "노출중", pay: 30000, refund: "", by: "u3" },
    { id: nid(), ch: "당근마켓", date: ago(14), name: "리뷰어 6", nick: "골목카페", display: "노출중", pay: 30000, refund: "", by: "u3" },
  ]
  S.cafes = [
    { id: nid(), industry: "요식업", name: "동네 음식점 운영 노트", members: 152000, url: "https://cafe.example/food", ask: "O", status: "진행중", period: "이번 분기", price: "140,000원/월", mgr: "윤다온", memo: "상단 공지 고정", by: "u3" },
    { id: nid(), industry: "무인매장", name: "셀프 매장 운영자 라운지", members: 58000, url: "https://cafe.example/unmanned", ask: "O", status: "대기", period: "", price: "90,000원/월", mgr: "윤다온", memo: "견적 회신 대기", by: "u3" },
    { id: nid(), industry: "카페·베이커리", name: "홈카페에서 창업까지", members: 39500, url: "https://cafe.example/cafe", ask: "X", status: "문의전", period: "", price: "", mgr: "백시우", memo: "", by: "u5" },
    { id: nid(), industry: "미용", name: "살롱 원장 정보방", members: 26800, url: "https://cafe.example/beauty", ask: "O", status: "종료", period: "지난 분기", price: "75,000원/월", mgr: "윤다온", memo: "전환 저조로 종료", by: "u3" },
  ]
  S.sns = [
    { id: nid(), date: ago(4), platform: "인스타그램", point: "교체 시기", main: "사장님, 결제 단말기 바꿀 때가 됐다는 신호 3가지", sub: "느려진 승인, 잦은 오류, 비싼 관리비라면 지금 확인하세요.", tags: "#카드단말기 #소상공인 #수수료", perf: "댓글 문의 증가", by: "u3" },
    { id: nid(), date: ago(12), platform: "블로그", point: "무인매장", main: "손님 없는 시간에도 매출이 남는 무인 결제 세팅", sub: "설치 순서와 체크할 점을 사진으로 정리했습니다.", tags: "#무인매장 #키오스크", perf: "체류 시간 길음", by: "u3" },
    { id: nid(), date: ago(20), platform: "인스타그램", point: "개업 준비", main: "오늘 상담, 이번 주 개업 준비 끝.", sub: "설치 일정은 상담 때 바로 잡아 드립니다.", tags: "#단말기설치 #빠른개통", perf: "", by: "u5" },
    { id: nid(), date: ago(35), platform: "블로그", point: "입금 안내", main: "입금일, 이제 미리 알고 계세요", sub: "정산 일정표를 매달 문자로 보내 드립니다.", tags: "#정산 #카드매출", perf: "", by: "u3" },
  ]
  S.prompts = [
    { id: nid(), date: ago(6), ai: "ChatGPT", kind: "글", title: "매장 후기형 블로그 초안", body: "너는 소상공인 결제 서비스 마케터야. [업종]을 운영하는 사장님이 공감할 만한 블로그 도입부를 3문장으로 써 줘.", by: "u3" },
    { id: nid(), date: ago(13), ai: "ChatGPT", kind: "글", title: "문자 안내문 다듬기", body: "아래 고객 문의에 대해 정중하고 짧은 답변 초안을 작성해 줘. 개인정보는 포함하지 마.", by: "u3" },
    { id: nid(), date: ago(25), ai: "이미지 생성 AI", kind: "사진", title: "상세페이지 배경 이미지", body: "밝은 동네 카페 카운터, 작은 카드단말기, 따뜻한 자연광, 사람 없음", by: "u5" },
    { id: nid(), date: ago(41), ai: "ChatGPT", kind: "기타", title: "월간 광고 리포트 요약", body: "아래 표를 항목별로 비교해 우리 조건의 강점 3가지를 뽑아 줘.", by: "u3" },
  ]
  S.scripts = [
    { id: nid(), type: "가입/개통", q: "설치 기사님은 언제 오시나요?", a: "서류 확인이 끝나면 담당 기사님이 직접 연락드려 방문 시간을 맞춥니다. 원하시는 시간대를 말씀해 주세요.", by: "u2", date: ago(3) },
    { id: nid(), type: "수수료", q: "다른 곳은 더 싸다던데요?", a: "조건마다 포함된 항목이 달라 표면 금액만으론 비교가 어렵습니다. 받으신 견적을 보내 주시면 항목별로 나란히 정리해 드릴게요.", by: "u2", date: ago(10) },
    { id: nid(), type: "해지", q: "가게를 정리하려고 해요.", a: "그동안 이용해 주셔서 감사합니다. 남은 계약 기간과 회수 방법을 확인해서 오늘 안에 문자로 정리해 드리겠습니다.", by: "u4", date: ago(18) },
    { id: nid(), type: "정산", q: "입금 금액이 생각보다 적어요.", a: "취소 건이나 보류 금액이 함께 반영됐을 수 있습니다. 해당 날짜 내역을 같이 확인해 보겠습니다.", by: "u2", date: ago(26) },
    { id: nid(), type: "장애", q: "결제할 때 소리가 안 나요.", a: "설정 메뉴의 음량이 꺼져 있는 경우가 많습니다. 화면을 같이 보면서 안내드릴게요.", by: "u4", date: ago(33) },
  ]
  S.rivals = [
    { id: nid(), date: ago(8), mgr: "윤다온", target: "A사", device: "무선단말기", cost: "무상", join: "없음", fee2: "월 5,000원", docs: "사업자등록증, 통장사본", settle: "D+2", rate: "2.2%~", instant: "미지원", install: "무료", as: "3만원", night: "미지원", paper: "유상", penalty: "1년 내 해지 시 10만원", ret: "필수", by: "u3" },
    { id: nid(), date: ago(22), mgr: "윤다온", target: "B사", device: "POS", cost: "55만원", join: "9만원", fee2: "월 12,000원", docs: "사업자등록증, 통장사본, 신분증", settle: "D+3", rate: "2.0%~", instant: "지원(수수료 별도)", install: "5만원", as: "무료", night: "지원", paper: "무상 제공", penalty: "2년 내 해지 시 20만원", ret: "해당없음", by: "u3" },
    { id: nid(), date: ago(47), mgr: "백시우", target: "C사", device: "키오스크", cost: "170만원", join: "없음", fee2: "월 30,000원", docs: "사업자등록증, 통장사본", settle: "D+2", rate: "2.5%~", instant: "미지원", install: "18만원", as: "5만원", night: "미지원", paper: "유상", penalty: "3년 내 해지 시 60만원", ret: "필수", by: "u5" },
  ]
  S.rank = { keywords: ["카드단말기", "무인매장 결제", "포스기 추천", "카드결제기 설치", "키오스크 결제"], malls: [], result: null, at: "" }
  S.logins = [
    { id: nid(), ch: "검색광고", name: "루미웍스 대표계정", lid: "lumi_ad", pw: "Demo!ad2026", memo: "예치금 알림 수신", by: "u3" },
    { id: nid(), ch: "스마트스토어", name: "루미웍스 스토어", lid: "lumi_store", pw: "Demo!store9", memo: "", by: "u3" },
    { id: nid(), ch: "인스타그램", name: "@lumiworks_demo", lid: "lumiworks.demo", pw: "Demo!insta7", memo: "광고 관리자 연결", by: "u3" },
    { id: nid(), ch: "블로그", name: "루미웍스 공식블로그", lid: "lumi_blog", pw: "Demo!blog3", memo: "", by: "u5" },
    { id: nid(), ch: "당근 비즈니스", name: "루미웍스", lid: "lumi_local", pw: "Demo!local5", memo: "동네 홍보용", by: "u3" },
  ]
  // 광고비·캠페인 (가상 조회 결과)
  S.ads = {}
  ;[0, -1, -2].forEach(function (k) {
    var ym = ymShift(YM, k)
    var f = 1 + k * 0.12
    S.ads["메타:" + ym] = [
      { name: "가맹 리드 수집", target: "자영업자 30~55세", spend: Math.round(420000 * f), imp: Math.round(61000 * f), clk: Math.round(830 * f) },
      { name: "무인매장 리타기팅", target: "사이트 방문자", spend: Math.round(180000 * f), imp: Math.round(22000 * f), clk: Math.round(410 * f) },
    ]
    S.ads["네이버:본계정:" + ym] = [
      { name: "카드단말기_핵심", target: "카드단말기", spend: Math.round(1150000 * f), imp: Math.round(48000 * f), clk: Math.round(1320 * f) },
      { name: "무인매장_확장", target: "무인매장 결제", spend: Math.round(520000 * f), imp: Math.round(19000 * f), clk: Math.round(560 * f) },
    ]
    S.ads["네이버:브랜드계정:" + ym] = [{ name: "브랜드검색", target: "루미페이", spend: Math.round(300000 * f), imp: Math.round(9000 * f), clk: Math.round(870 * f) }]
  })
  S.carrotSpend = {}

  // 인사
  S.staff = [
    { id: "s1", acc: "u2", brand: "본사", join: "2024-03-04", name: "서지안", pos: "주임", dept: "CS·TM", rrn: "930215-2048117", phone: "010-4821-1104", bank: "가람은행", acct: "6102045893293", addr: "서울특별시 가상구 ***", email: "cs1@lumiworks.example", salary: 3100000, status: "재직", grade: "3호봉", gmemo: "" },
    { id: "s2", acc: "u4", brand: "본사", join: ago(75), name: "문태오", pos: "사원", dept: "CS·TM", rrn: "990808-1067345", phone: "010-7230-2280", bank: "누리은행", acct: "3330918204047", addr: "경기도 가상시 ***", email: "cs2@lumiworks.example", salary: 2650000, status: "재직", grade: "1호봉", gmemo: "" },
    { id: "s3", acc: "u3", brand: "본사", join: "2023-07-17", name: "윤다온", pos: "대리", dept: "마케팅", rrn: "910430-2015524", phone: "010-6612-3301", bank: "하나로은행", acct: "1172003471714", addr: "서울특별시 가상구 ***", email: "mkt@lumiworks.example", salary: 3500000, status: "재직", grade: "5호봉", gmemo: "" },
    { id: "s4", acc: "u1", brand: "본사", join: "2022-01-10", name: "한예린", pos: "과장", dept: "경영지원", rrn: "870619-2033810", phone: "010-9145-4478", bank: "별빛은행", acct: "2951100453027", addr: "서울특별시 가상구 ***", email: "mgmt@lumiworks.example", salary: 4100000, status: "재직", grade: "7호봉", gmemo: "" },
    { id: "s5", acc: "u5", brand: "본사", join: ago(40), name: "백시우", pos: "사원", dept: "마케팅", rrn: "000512-3051172", phone: "010-3390-7742", bank: "누리은행", acct: "3550281933109", addr: "인천광역시 가상구 ***", email: "mkt2@lumiworks.example", salary: 2600000, status: "재직", grade: "1호봉", gmemo: "" },
    { id: "s6", acc: "", brand: "본사", join: "2025-11-17", name: "오나래", pos: "사원", dept: "마케팅", rrn: "990921-2084420", phone: "010-2287-8820", bank: "가람은행", acct: "1044098101720", addr: "서울특별시 가상구 ***", email: "narae@lumiworks.example", salary: 2700000, status: "재직", grade: "2호봉", gmemo: "" },
    { id: "s7", acc: "", brand: "본사", join: "2024-08-19", name: "강도윤", pos: "사원", dept: "CS·TM", rrn: "960117-1022931", phone: "010-5521-0981", bank: "별빛은행", acct: "2203391827710", addr: "경기도 가상시 ***", email: "", salary: 2700000, status: "퇴사", out: ago(105), grade: "2호봉", gmemo: "" },
    { id: "s8", acc: "", brand: "본사", join: "2023-05-08", name: "임채아", pos: "주임", dept: "CS·TM", rrn: "940702-2011820", phone: "010-8873-4102", bank: "하나로은행", acct: "1180034719925", addr: "서울특별시 가상구 ***", email: "", salary: 3000000, status: "퇴사", out: ago(46), grade: "3호봉", gmemo: "" },
  ]
  S.severance = {}
  S.payroll = {}
  S.leave = {}
  S.rules = { "취업규칙": "제1장 총칙\n제1조(목적) 이 규칙은 (가상) 루미웍스 직원의 근로조건과 복무에 관한 사항을 정한다.\n제2조(적용범위) 이 규칙은 회사에 근무하는 모든 직원에게 적용한다.\n\n제2장 근로시간\n제5조(근로시간) 1일 8시간, 1주 40시간을 원칙으로 한다.", "근로계약서": "", "비밀준수서약서": "" }
  S.rulesAt = {}

  // 공용 계정
  S.shared = [
    { id: nid(), group: "공용", platform: "사내 와이파이", link: "", lid: "lumi-guest", pw: "Guest#2026", owner: "한예린", memo: "방문객 안내용", by: "u1" },
    { id: nid(), group: "공용", platform: "복합기 관리자", link: "http://printer.local", lid: "admin", pw: "Print#7731", owner: "한예린", memo: "사무실 프린터", by: "u1" },
    { id: nid(), group: "CS·TM", platform: "택배 예약 시스템", link: "https://parcel.example", lid: "lumi_cs", pw: "Parcel#551", owner: "서지안", memo: "출고 예약", by: "u2" },
    { id: nid(), group: "마케팅", platform: "디자인 툴 팀 계정", link: "https://design.example", lid: "lumi_design", pw: "Design#902", owner: "윤다온", memo: "", by: "u3" },
    { id: nid(), group: "경영지원", platform: "전자세금계산서", link: "https://tax.example", lid: "lumi_tax", pw: "Tax#44120", owner: "한예린", memo: "인증서 별도", by: "u1" },
    { id: nid(), group: "관리자", platform: "호스팅 관리 콘솔", link: "https://host.example", lid: "lumi_root", pw: "Root#90812", owner: "정하늘", memo: "마스터 전용", by: "u0" },
  ]
  // 매입매출
  S.annual = []
  for (var k = 6; k >= 1; k--) {
    var ymk = ymShift(YM, -k)
    S.annual.push({ id: nid(), ym: ymk, sales: 41000000 + k * 1300000, buy: 11800000 + k * 350000, fixed: 18200000, vari: 3900000 + k * 180000 })
  }
  S.annual.reverse()
  S.ledger = [
    { id: nid(), date: ago(1), io: "입금", desc: "카드 매출 정산", party: "PG 정산", amount: 3820000, memo: "" },
    { id: nid(), date: ago(2), io: "출금", desc: "단말기 매입", party: "(가상) 별빛전자", amount: 2400000, memo: "L100 20대" },
    { id: nid(), date: ago(4), io: "입금", desc: "카드 매출 정산", party: "PG 정산", amount: 4110000, memo: "" },
    { id: nid(), date: ago(6), io: "출금", desc: "사무실 임대료", party: "(가상) 하늘빌딩", amount: 2200000, memo: "" },
    { id: nid(), date: ago(8), io: "출금", desc: "키워드 광고 예치금", party: "광고 플랫폼", amount: 2500000, memo: "" },
    { id: nid(), date: ago(9), io: "입금", desc: "가맹 개통비", party: "새솔카페 2호점", amount: 110000, memo: "" },
    { id: nid(), date: ago(12), io: "출금", desc: "택배비 정산", party: "(가상) 바로택배", amount: 186000, memo: "" },
  ]
  S.sales = []
  for (var dd = 1; dd <= +TODAY.slice(8, 10); dd++) {
    var dstr = YM + "-" + pad(dd)
    var base = 9500000 + (hash(dstr) % 4200000)
    S.sales.push({ date: dstr, cnt: 140 + (hash(dstr + "c") % 90), approve: base, cancel: Math.round(base * (0.012 + (hash(dstr + "x") % 20) / 1000)), ccnt: 1 + (hash(dstr + "n") % 4) })
  }
  /* ───────── 공용 도구 ───────── */
  function maskPhone(p) { return p ? p.slice(0, 4) + "****" + p.slice(-5) : "" }
  function maskRrn(r) { return r ? r.slice(0, 8) + "******" : "" }
  function maskAcct(a) { return a ? a.slice(0, 2) + "*".repeat(Math.max(3, a.length - 5)) + a.slice(-3) : "" }
  function maskBiz(b) { return b ? b.slice(0, 7) + "*****" : "" }
  function logView(what) { S.logs.unshift({ who: me().name, what: what, at: nowStr() }) }
  // 가려진 값 + 보기 버튼
  function masked(key, real, maskedVal, what, label) {
    if (S.revealed[key]) return '<span class="tabular-nums tracking-wide text-[13px] text-gray-900">' + E(real) + "</span>"
    return '<span class="tabular-nums tracking-wide text-[13px] text-gray-600">' + E(maskedVal) + '</span><button class="eye" data-act="reveal" data-k="' + E(key) + '" data-what="' + E(what) + '">👁 ' + (label || "보기") + "</button>"
  }
  function badge(t, c) { return '<span class="bd bd-' + c + '">' + E(t) + "</span>" }
  function buyBadge(b) { return badge(b, b === "구매완료" ? "green" : b === "상담중" ? "blue" : "gray") }
  function pills(items, active, act, extra) {
    return items.map(function (it) {
      var v = typeof it === "string" ? it : it[0]
      var t = typeof it === "string" ? it : it[1]
      return '<button class="pill' + (v === active ? " on" : "") + '" data-act="' + act + '" data-v="' + E(v) + '"' + (extra || "") + ">" + E(t) + "</button>"
    }).join("")
  }
  function q(r, k, d) { return r.query[k] != null ? r.query[k] : d }
  function go(p) { Demo.go(p) }
  function toast(m) { Demo.toast(m) }
  function copyText(t) { try { navigator.clipboard.writeText(t).catch(function () {}) } catch (e) {} }
  function manage(kind, item, editAct) {
    if (!mine(item)) return '<span class="text-gray-400"></span>'
    return '<div class="flex justify-end gap-1.5"><button class="btn btn-x" data-act="' + (editAct || "editItem") + '" data-kind="' + kind + '" data-id="' + item.id + '">수정</button><button class="btn btn-x btn-r" data-act="del" data-kind="' + kind + '" data-id="' + item.id + '">삭제</button></div>'
  }
  function emptyRow(n, t) { return '<tr><td colspan="' + n + '" class="c" style="padding:48px 0;color:#6b7280">' + E(t) + "</td></tr>" }

  /* ───────── 모달·폼 ───────── */
  function openModal(title, body, opt) { S.modal = { title: title, body: body, wide: opt && opt.wide }; Demo.update() }
  function closeModal() { S.modal = null; S.modalCb = null; Demo.update() }
  function fld(f, v) {
    v = v == null ? (f.value == null ? "" : f.value) : v
    var req = f.req ? ' <span class="text-red-500">*</span>' : ""
    var lab = '<label class="lbl">' + E(f.l) + req + (f.hint ? "<small>" + E(f.hint) + "</small>" : "") + "</label>"
    var name = ' name="' + f.n + '"' + (f.req ? " required" : "")
    var h
    if (f.t === "select") h = '<select class="inp"' + name + ">" + f.o.map(function (o) { return "<option" + (String(o) === String(v) ? " selected" : "") + ">" + E(o) + "</option>" }).join("") + "</select>"
    else if (f.t === "textarea") h = '<textarea class="inp" rows="' + (f.rows || 4) + '"' + name + ' placeholder="' + E(f.ph || "") + '">' + E(v) + "</textarea>"
    else if (f.t === "check") return '<label class="flex items-center gap-2 text-sm text-gray-700 ' + (f.full ? "sm:col-span-2" : "") + '"><input type="checkbox" class="w-4 h-4"' + ' name="' + f.n + '"' + (v ? " checked" : "") + "> " + E(f.l) + "</label>"
    else h = '<input class="inp" type="' + (f.t || "text") + '"' + name + ' value="' + E(v) + '" placeholder="' + E(f.ph || "") + '"' + (f.t === "date" && f.max ? ' max="' + f.max + '"' : "") + (f.ro ? " readonly" : "") + (f.t === "number" ? ' step="any" min="0"' : "") + ">"
    return '<div class="' + (f.full ? "sm:col-span-2" : "") + '">' + lab + h + "</div>"
  }
  function formModal(title, fields, values, cb, opt) {
    values = values || {}
    S.modalCb = cb
    openModal(title, '<form data-submit="modalForm" class="p-5"><div class="grid sm:grid-cols-2 gap-4">' + fields.map(function (f) { return fld(f, values[f.n]) }).join("") + '</div><div class="flex gap-2 mt-6 pt-4 border-t"><button class="btn btn-p" type="submit">' + E((opt && opt.ok) || "저장") + '</button><button class="btn" type="button" data-act="closeModal">취소</button></div></form>', opt)
  }
  Demo.on("modalForm", function (v, el) {
    el.querySelectorAll("input[type=checkbox]").forEach(function (c) { v[c.name] = c.checked ? 1 : 0 })
    var cb = S.modalCb
    if (!cb) return
    var r = cb(v)
    if (r === false) return
    S.modal = null; S.modalCb = null
    Demo.update()
  })
  Demo.on("closeModal", closeModal)
  document.addEventListener("mousedown", function (e) { if (e.target.classList && e.target.classList.contains("modal-bg")) closeModal() })

  /* ───────── 삭제 결재 ───────── */
  var KINDS = {
    notice: { key: "notices", label: function (x) { return "공지 삭제, " + x.title } },
    worklog: { key: "worklogs", label: function (x) { return "업무일지 삭제, " + nm(x.by) + " · " + x.tab + " " + dot(x.date) } },
    consult: { key: "consults", label: function (x) { return "상담 삭제, " + x.name + " (" + maskPhone(x.phone) + ")" } },
    template: { key: "templates", label: function (x) { return "상담템플릿 삭제, " + x.title } },
    store: { key: "stores", label: function (x) { return "가맹점 삭제, " + x.name + " (" + x.tid + ")" } },
    blacklist: { key: "blacklist", label: function (x) { return "블랙리스트 삭제, [" + x.line + "] " + (x.bizName || x.content) } },
    inquiry: { key: "inquiries", label: function (x) { return "고객문의 삭제, " + x.name + " (" + maskPhone(x.phone) + ")" } },
    stockHist: { key: "stockHist", label: function (x) { return "재고 이력 삭제, [" + x.brand + "] " + x.item + " " + x.type + " " + x.qty + "개" } },
    promo: { key: "promos", label: function (x) { return "프로모션 삭제, " + x.name } },
    expense: { key: "expenses", label: function (x) { return "지출 삭제, " + x.item + " " + won(x.amount) } },
    review: { key: "reviews", label: function (x) { return "리뷰 작업 삭제, " + (x.product || x.name) } },
    cafe: { key: "cafes", label: function (x) { return "카페·채널 삭제, " + x.name } },
    sns: { key: "sns", label: function (x) { return "SNS 카피 삭제, " + x.main } },
    prompt: { key: "prompts", label: function (x) { return "AI 프롬프트 삭제, " + x.title } },
    script: { key: "scripts", label: function (x) { return "영업 스크립트 삭제, " + x.q } },
    rival: { key: "rivals", label: function (x) { return "경쟁사 정책 삭제, " + x.target } },
    login: { key: "logins", label: function (x) { return "로그인정보 삭제, " + x.ch + " / " + x.name } },
    shared: { key: "shared", label: function (x) { return "공용 계정 삭제, " + x.platform } },
    ledger: { key: "ledger", label: function (x) { return "입출금 삭제, " + dot(x.date) + " " + x.desc + " " + won(x.amount) } },
    annual: { key: "annual", label: function (x) { return "연간요약 삭제, " + x.ym } },
    file: { key: "files", label: function (x) { return "드라이브 파일 삭제, " + x.name } },
  }
  function findIn(arr, id) { for (var i = 0; i < arr.length; i++) if (String(arr[i].id) === String(id)) return arr[i] }
  function stockAfterRemove(x) {
    // 지웠을 때 현재고가 음수가 되면 거부
    var sum = 0
    S.stockHist.forEach(function (h) { if (h !== x && h.brand === x.brand && h.item === x.item) sum += h.type === "출고" ? -h.qty : h.qty })
    return sum
  }
  function hardRemove(kind, id) {
    var arr = S[KINDS[kind].key]
    var x = findIn(arr, id)
    if (!x) return "대상이 이미 없습니다."
    if (kind === "stockHist" && x.type !== "출고" && stockAfterRemove(x) < 0) return "지우면 현재고가 음수가 됩니다. 이 수량을 쓴 출고 이력을 먼저 지워 주세요."
    arr.splice(arr.indexOf(x), 1)
    return ""
  }
  function requestDelete(kind, id) {
    var arr = S[KINDS[kind].key]
    var x = findIn(arr, id)
    if (!x) return
    if (isMaster()) {
      if (!confirm("삭제하면 되돌릴 수 없습니다. 삭제할까요?")) return
      var err = hardRemove(kind, id)
      toast(err || "삭제되었습니다.")
      if (!err && kind === "store") go("/store")
    } else {
      if (S.approvals.some(function (a) { return a.kind === kind && String(a.tid) === String(id) })) { toast("이미 결재 대기 중인 요청입니다."); return }
      S.approvals.push({ id: nid(), kind: kind, tid: x.id, label: KINDS[kind].label(x), by: S.user, at: nowStr(), snap: JSON.parse(JSON.stringify(x)), err: "" })
      toast("삭제 요청이 결재 대기로 이관되었습니다. 마스터 승인 후 지워집니다.")
    }
    Demo.update()
  }
  Demo.on("del", function (d) { requestDelete(d.kind, d.id) })
  Demo.on("reveal", function (d) {
    S.revealed[d.k] = 1
    logView(d.what || "가려진 정보")
    toast("열람 기록이 남았습니다 (" + me().name + " · " + nowStr() + ")")
    Demo.update()
  })

  /* ───────── 레이아웃 ───────── */
  function sidebar(cur) {
    var u = me()
    var h = '<aside class="side flex flex-col h-screen lg:sticky top-0 shrink-0' + (S.sideOpen ? " open" : "") + (S.sideHidden ? " lg:hidden" : "") + '">'
    h += '<div class="px-6 pt-5 pb-4"><div class="text-[17px] font-bold text-[#3182f6]">주식회사 루미웍스</div><div class="text-[11px] text-gray-500 mt-0.5">(가상) 전사 통합 업무 채널</div></div>'
    h += '<div class="px-3 relative"><button class="w-full flex items-center gap-3 border border-gray-200 rounded-2xl px-3 py-2.5 text-left hover:bg-gray-50" data-act="roleMenu"><span class="w-8 h-8 rounded-full bg-[#e8f1fe] text-[#3182f6] text-xs font-bold flex items-center justify-center">' + E(u.name.slice(0, 1)) + '</span><span class="min-w-0 flex-1"><span class="block text-[13px] font-bold">' + E(u.name + (u.role === "master" ? " " + u.title : "")) + '</span><span class="block text-[11px] text-gray-500 truncate">' + E(u.email) + '</span></span><span class="text-gray-400 text-xs">⇅</span></button>'
    if (S.roleMenu) h += roleMenuHtml("left-3 right-3 top-full mt-1")
    h += "</div>"
    h += '<nav class="flex-1 overflow-y-auto px-3 pb-3">'
    GROUPS.forEach(function (g, gi) {
      var items = MENUS.filter(function (m) { return m.g === gi && can(m.k) })
      if (!items.length) return
      h += '<div class="nav-g">' + E(g) + "</div>"
      items.forEach(function (m) {
        var badgeN = m.k === "approval" && S.approvals.length ? '<span class="ml-auto bd bd-amber">' + S.approvals.length + "</span>" : ""
        h += '<a href="#/' + m.k + '" class="nav-i' + (cur === m.k ? " on" : "") + '"><span class="ic">' + m.i + "</span>" + E(m.t) + badgeN + "</a>"
      })
    })
    h += "</nav>"
    h += '<div class="border-t border-gray-200 px-3 py-3"><a href="#/password" class="nav-i text-gray-600' + (cur === "password" ? " on" : "") + '"><span class="ic text-[14px]">🔐</span>비밀번호 변경</a><a href="#" data-act="logout" class="nav-i text-gray-600"><span class="ic text-[14px]">↪</span>로그아웃</a></div>'
    h += "</aside>"
    if (S.sideOpen) h += '<div class="fixed inset-0 bg-black/30 z-40 lg:hidden" data-act="closeSide"></div>'
    return h
  }
  function roleMenuHtml(pos) {
    var u = me()
    return '<div class="absolute ' + pos + ' z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-2 min-w-[220px]"><div class="text-[11px] text-gray-500 px-2 py-1">체험판 · 역할 전환 (부록 A 권한표 기준)</div>' +
      Object.keys(ROLE_USER).map(function (r) {
        var a = acc(ROLE_USER[r])
        return '<button class="w-full text-left px-2 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-between text-[13px]' + (a.id === u.id ? " font-bold text-[#3182f6]" : "") + '" data-act="switchRole" data-v="' + E(r) + '"><span>' + E(r) + '</span><span class="text-[11px] text-gray-500">' + E(a.name) + "</span></button>"
      }).join("") + "</div>"
  }
  function layout(cur, title, body) {
    var u = me()
    var d = new Date()
    var dateTxt = (d.getMonth() + 1) + "월 " + d.getDate() + "일 (" + WD[d.getDay()] + ")"
    return '<div class="flex min-h-screen">' + sidebar(cur) +
      '<div class="flex-1 min-w-0 flex flex-col"><header class="h-[56px] bg-white border-b border-gray-200 flex items-center gap-3 px-4 lg:px-7 sticky top-0 z-30"><button class="text-gray-500 text-xl leading-none px-1" data-act="toggleSide" aria-label="메뉴">☰</button><h1 class="text-[16px] font-bold truncate">' + E(title) + '</h1><div class="ml-auto flex items-center gap-3 relative"><span class="hidden sm:inline text-[13px] text-gray-500">' + dateTxt + '</span><button class="bd bd-blue" data-act="roleMenuTop" title="역할 전환">' + E(roleLabel(u)) + " ▾</button>" + (S.roleMenuTop ? roleMenuHtml("right-0 top-full mt-2") : "") + "</div></header>" +
      '<main class="flex-1 p-4 lg:px-8 lg:py-6 pb-28">' + body + "</main></div></div>"
  }
  Demo.on("toggleSide", function () { if (window.innerWidth >= 1024) { S.sideHidden = !S.sideHidden } S.sideOpen = !S.sideOpen; Demo.update() })
  Demo.on("closeSide", function () { S.sideOpen = false; Demo.update() })
  Demo.on("roleMenu", function () { S.roleMenu = !S.roleMenu; S.roleMenuTop = false; Demo.update() })
  Demo.on("roleMenuTop", function () { S.roleMenuTop = !S.roleMenuTop; S.roleMenu = false; Demo.update() })
  Demo.on("switchRole", function (d) {
    S.user = ROLE_USER[d.v]
    S.roleMenu = S.roleMenuTop = false
    S.revealed = {}
    var r = Demo.route().path.slice(1)
    toast(d.v + " 계정(" + me().name + ")으로 전환했습니다. 왼쪽 메뉴가 권한에 맞게 바뀝니다.")
    if (r && menu(r) && !can(r)) go("/home")
    else Demo.update()
  })
  Demo.on("logout", function () { S.user = null; S.roleMenu = S.roleMenuTop = false; go("/login"); Demo.update() })

  /* ───────── 로그인 ───────── */
  S.loginRole = "마스터"
  function pageLogin() {
    var a = acc(ROLE_USER[S.loginRole])
    return '<div class="min-h-screen flex flex-col items-center justify-center px-4 py-12" style="background:radial-gradient(ellipse 60% 22% at 50% 0%,#dfe9f9 0%,rgba(243,244,248,0) 100%),#f3f4f8">' +
      '<div class="text-center mb-8"><div class="text-[22px] font-bold text-[#3182f6]">주식회사 루미웍스</div><div class="text-[13px] text-gray-500 mt-1">(가상) 전사 통합 업무 채널</div></div>' +
      '<form data-submit="login" class="card w-full max-w-[400px] p-8 shadow-sm"><div class="text-[17px] font-bold">로그인</div><div class="text-[13px] text-gray-500 mt-1 mb-6">사내 계정으로 로그인하세요</div>' +
      '<div class="mb-4"><div class="lbl">체험할 계정 <small>역할을 고르면 보이는 메뉴가 달라집니다</small></div><div class="grid grid-cols-2 gap-1.5">' +
      Object.keys(ROLE_USER).map(function (r) { return '<button type="button" class="seg border border-gray-200' + (S.loginRole === r ? " on" : "") + '" data-act="loginRole" data-v="' + E(r) + '">' + E(r) + "</button>" }).join("") + "</div></div>" +
      '<label class="lbl">아이디 (이메일)</label><input class="inp mb-4" name="id" value="' + E(a.email) + '" placeholder="user@lumiworks.example">' +
      '<label class="lbl">비밀번호</label><div class="relative mb-4"><input class="inp pr-10" id="pw" type="password" name="pw" value="demo1234" placeholder="비밀번호 입력"><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm" data-act="pwEye">👁</button></div>' +
      '<label class="flex items-center gap-2 text-[13px] text-gray-600 mb-5"><input type="checkbox" class="w-4 h-4"> 아이디 저장</label>' +
      '<button class="btn btn-p w-full py-3 text-[14px]">로그인</button></form>' +
      '<div class="text-center text-[12px] text-gray-500 mt-6 leading-relaxed">체험판: 어떤 비밀번호를 넣어도 로그인됩니다.<br>계정이 필요하신가요? 경영지원팀(관리자)에게 발급을 요청하세요.<br>© (가상) 주식회사 루미웍스 · 사내 전용 시스템</div></div>'
  }
  Demo.on("loginRole", function (d) { S.loginRole = d.v; Demo.update() })
  Demo.on("pwEye", function () { var p = document.getElementById("pw"); if (p) p.type = p.type === "password" ? "text" : "password" })
  Demo.on("login", function (v) {
    var a = acc(ROLE_USER[S.loginRole])
    for (var i = 0; i < S.accounts.length; i++) if (S.accounts[i].email === String(v.id).trim()) a = S.accounts[i]
    if (a.status === "잠김") { toast("실패 횟수 초과로 계정이 5분간 잠금되었습니다."); return }
    if (a.status === "비활성") { toast("이 계정은 현재 사용할 수 없습니다. 마스터에게 문의합니다."); return }
    S.user = a.id
    go("/home")
    Demo.update()
  })

  /* ───────── 종합 홈 ───────── */
  function inMonth(d) { return d && d.slice(0, 7) === YM }
  function pageHome() {
    var h = ""
    var promo = null
    S.promos.forEach(function (p) { if (!promo && p.status === "진행중") promo = p }) // 목록은 최신 등록이 맨 위
    if (promo) h += '<div class="card p-5 mb-4 flex items-center gap-4" style="border-color:#bfdbfe"><div class="flex-1 min-w-0"><div class="text-[12px] font-bold text-[#3182f6]">🎁 진행중 프로모션</div><div class="text-[16px] font-bold mt-1.5">' + E(promo.name) + '</div><div class="text-[13px] text-gray-500 mt-1">' + E([promo.period, promo.brand].filter(Boolean).join(" · ")) + "</div></div>" + (can("marketing") ? '<a class="btn btn-p px-5 py-2.5" href="#/marketing?tab=promo">자세히 보기</a>' : "") + "</div>"
    var cards = []
    if (can("finance")) {
      var ap = 0, ca = 0, an = 0, cn = 0
      S.sales.forEach(function (s) { ap += s.approve; ca += s.cancel; an += s.cnt; cn += s.ccnt })
      cards.push(homeCard("실시간 매출 현황", "매입매출 연동", "이번 달 순매출", won(ap - ca), "#1d64d8", [["승인 합계 (" + N(an) + "건)", won(ap)], ["취소 합계 (" + N(cn) + "건)", won(ca)]], dot(YM + "-01") + " ~ 오늘 · 루미페이 실시간 집계"))
    }
    if (can("open")) {
      var op = S.stores.filter(function (s) { return s.opened }).length
      var sp = S.stores.filter(function (s) { return s.shipped }).length
      var wait = S.stores.filter(function (s) { return s.shipped && !s.opened }).length
      cards.push(homeCard("실시간 개통·발송", "개통발송 연동", "누적 개통", op + "건", "#15803d", [["누적 총 발송 단말기", sp + "개"], ["발송 완료 · 개통 대기", wait + "건"]], "가맹점 기준 누적 집계 (개통일 기록 없음, 기간 집계 불가)"))
    }
    if (can("marketing")) {
      var m = adCounts(YM + "-01", TODAY)
      cards.push(homeCard("실시간 마케팅 현황", "통합마케팅 연동", "전체 광고 유입", m.total + "건", "#c2410c", [["메타(SNS)", m["메타"] + "건"], ["네이버 파워링크", m["네이버"] + "건"], ["당근마켓", m["당근"] + "건"], ["구매전환율", m.rate + "%"]], dot(YM + "-01") + " ~ 오늘 · 상담대장 유입경로 기준"))
    }
    if (cards.length) h += '<div class="grid gap-4 mb-4 ' + (cards.length === 1 ? "" : cards.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3") + '">' + cards.join("") + "</div>"
    // 모니터링 보드
    var rows = []
    var wlToday = S.worklogs.filter(function (w) { return w.date === TODAY })
    var wlMonth = S.worklogs.filter(function (w) { return inMonth(w.date) })
    var people = {}
    wlMonth.forEach(function (w) { people[w.by] = 1 })
    var tp = {}
    wlToday.forEach(function (w) { tp[w.by] = 1 })
    rows.push(["업무일지", "오늘 작성", "오늘 " + Object.keys(tp).length + "명 작성 · 이번 달 " + wlMonth.length + "건 (참여 " + Object.keys(people).length + "명)"])
    if (can("risk")) rows.push(["위험거래/블랙리스트", "위험거래 등록", "오늘 등록 " + S.blacklist.filter(function (b) { return b.date === TODAY }).length + "건 · 이번 달 " + S.blacklist.filter(function (b) { return inMonth(b.date) }).length + "건"])
    if (can("store")) rows.push(["가맹점관리", "신규 등록", "오늘 신규 " + S.stores.filter(function (s) { return s.regDate === TODAY }).length + "곳 · 이번 달 " + S.stores.filter(function (s) { return inMonth(s.regDate) }).length + "곳 등록 → 개통/발송 목록 자동 반영"])
    h += '<div class="card overflow-hidden"><div class="card-h">전사 실시간 결합 모니터링 보드<span class="w-2 h-2 rounded-full bg-emerald-400"></span></div><div class="overflow-x-auto"><table class="tbl"><thead><tr><th>업무 출처</th><th>구분</th><th>오늘·이번 달 현황</th></tr></thead><tbody>' +
      rows.map(function (r) { return '<tr><td class="b">' + E(r[0]) + '</td><td class="text-gray-500">' + E(r[1]) + "</td><td>" + E(r[2]) + "</td></tr>" }).join("") + "</tbody></table></div></div>"
    h += '<p class="help mt-3">카드는 눌러도 이동하지 않습니다. 권한이 없는 카드와 보드 행은 그려지지 않습니다. 오른쪽 위 역할 배지를 눌러 계정을 바꿔 보세요.</p>'
    return h
  }
  function homeCard(t, sub, bigL, big, color, rows, foot) {
    return '<div class="card p-5 flex flex-col"><div class="flex items-center gap-2"><b class="text-[14px]">' + E(t) + '</b><span class="text-[11px] text-gray-400">' + E(sub) + '</span><span class="ml-auto w-2 h-2 rounded-full bg-emerald-400"></span></div><div class="text-[12px] text-gray-500 mt-5">' + E(bigL) + '</div><div class="text-[24px] font-extrabold mt-1" style="color:' + color + '">' + E(big) + '</div><div class="border-t border-gray-200 mt-4">' +
      rows.map(function (r) { return '<div class="flex justify-between py-2.5 border-b border-gray-100 text-[13px]"><span class="text-gray-600">' + E(r[0]) + '</span><b>' + E(r[1]) + "</b></div>" }).join("") + '</div><div class="text-[11px] text-gray-400 mt-auto pt-4">' + E(foot) + "</div></div>"
  }
  // 상담대장 유입경로 → 광고 매체 집계
  var MEDIA_ROUTE = { "메타": "SNS", "네이버": "파워링크", "당근": "당근" }
  function adCounts(from, to) {
    var r = { total: 0, buy: 0 }
    Object.keys(MEDIA_ROUTE).forEach(function (m) {
      var list = S.consults.filter(function (c) { return c.route === MEDIA_ROUTE[m] && c.date >= from && c.date <= to })
      r[m] = list.length
      r[m + "_buy"] = list.filter(function (c) { return c.buy === "구매완료" }).length
      r.total += list.length
      r.buy += r[m + "_buy"]
    })
    r.rate = r.total ? Math.round((r.buy / r.total) * 100) : 0
    return r
  }

  /* ───────── 공지사항 ───────── */
  function pageNotice(r) {
    var cat = q(r, "cat", "전체")
    if (r.query.write) return noticeForm()
    if (r.query.id) {
      var n = findIn(S.notices, r.query.id)
      if (!n) return '<div class="card p-10 text-center text-gray-500">삭제된 공지입니다.</div>'
      return '<div class="card p-6 max-w-[900px]"><a href="#/notice" class="btn btn-x mb-4">← 목록으로</a><div class="text-[12px] text-gray-500">[' + E(n.cat) + "] · " + dot(n.date) + " · " + E(nm(n.by)) + '</div><h2 class="text-[20px] font-bold mt-1 mb-5">' + E(n.title) + '</h2><div class="text-[14px] leading-7 whitespace-pre-wrap text-gray-800">' + E(n.body) + "</div>" + (isMaster() ? '<div class="border-t mt-6 pt-4 flex gap-2"><button class="btn btn-x" data-act="noticePin" data-id="' + n.id + '">' + (n.pin ? "상단 고정 해제" : "상단 고정") + '</button><button class="btn btn-x btn-r" data-act="del" data-kind="notice" data-id="' + n.id + '">삭제</button></div>' : "") + "</div>"
    }
    var list = S.notices.filter(function (n) { return cat === "전체" || n.cat === cat }).sort(function (a, b) { return a.date < b.date ? 1 : -1 })
    var pins = list.filter(function (n) { return n.pin })
    var h = '<div class="card p-2.5 flex flex-wrap gap-1.5 items-center mb-4">' + pills(["전체"].concat(S.noticeCats), cat, "noticeCat") + (isMaster() ? '<button class="btn btn-x ml-1" data-act="addCat">+ 분류</button><a class="btn btn-p ml-auto" href="#/notice?write=1">+ 공지 작성</a>' : "") + "</div>"
    pins.forEach(function (n) { h += '<a href="#/notice?id=' + n.id + '" class="block note-blue mb-3 hover:brightness-[.98]"><div class="font-bold text-[15px]">📢 [' + E(n.cat) + "] " + E(n.title) + '</div><div class="text-[12px] opacity-80 mt-1">상단 고정 공지 · ' + dot(n.date) + "</div></a>" })
    h += '<div class="card overflow-hidden">' + (list.length ? list.map(function (n) {
      return '<a href="#/notice?id=' + n.id + '" class="flex items-center gap-4 px-4 py-3.5 border-b border-gray-100 last:border-0 hover:bg-gray-50 text-[13px]"><span class="w-[84px] shrink-0 font-semibold ' + (n.cat === "서비스장애" ? "text-red-500" : "text-gray-700") + '">[' + E(n.cat) + ']</span><span class="flex-1 min-w-0 truncate text-gray-900">' + E(n.title) + '</span><span class="text-gray-500 shrink-0">' + dot(n.date) + "</span></a>"
    }).join("") : '<div class="p-10 text-center text-gray-500 text-sm">공지가 없습니다.</div>') + "</div>"
    return h
  }
  function noticeForm() {
    if (!isMaster()) return '<div class="card p-10 text-center text-gray-500">공지 작성은 마스터만 할 수 있습니다.</div>'
    return '<form data-submit="noticeSave" class="card p-5"><div class="text-[14px] font-bold pb-4 border-b mb-4">공지 작성</div>' +
      fld({ n: "cat", l: "분류", t: "select", o: S.noticeCats, req: 1 }) + '<div class="h-4"></div>' + fld({ n: "title", l: "제목", req: 1, ph: "공지 제목" }) + '<div class="h-4"></div>' + fld({ n: "body", l: "내용", t: "textarea", rows: 10, req: 1, ph: "공지 내용을 입력하세요 (개인정보 입력 금지)" }) +
      '<label class="flex items-center gap-2 text-[13px] text-gray-700 mt-4"><input type="checkbox" name="pin" class="w-4 h-4"> 상단 고정 (중요 공지)</label><div class="border-t mt-5 pt-5 flex gap-2"><button class="btn btn-p px-5">공지 등록</button><a href="#/notice" class="btn">취소</a></div></form>'
  }
  Demo.on("noticeCat", function (d) { go("/notice?cat=" + encodeURIComponent(d.v)) })
  Demo.on("noticeSave", function (v, el) {
    S.notices.unshift({ id: nid(), cat: v.cat, title: v.title, body: v.body, pin: el.querySelector("[name=pin]").checked ? 1 : 0, date: TODAY, by: S.user })
    toast("공지를 등록했습니다.")
    go("/notice")
  })
  Demo.on("noticePin", function (d) { var n = findIn(S.notices, d.id); n.pin = n.pin ? 0 : 1; Demo.update() })
  Demo.on("addCat", function () {
    formModal("공지 분류 추가", [{ n: "c", l: "분류 이름", req: 1, full: 1 }], {}, function (v) { if (S.noticeCats.indexOf(v.c) < 0) S.noticeCats.push(v.c); toast("분류를 추가했습니다.") })
  })

  /* ───────── 업무일지 ───────── */
  var WL_FIELDS = {
    "주간 업무보고서": [{ n: "period", l: "이번주 / 다음주 기간", ph: "예: 이번 주 10.06~10.10 / 다음 주 10.13~10.17", full: 1 }, { n: "goal", l: "목표", full: 1 }, { n: "body", l: "특이사항", t: "textarea", req: 1, full: 1 }],
    "월간 보고서": [{ n: "body", l: "보고 내용 (글·표·사진 블록)", t: "textarea", rows: 8, req: 1, full: 1 }],
    "회의록": [{ n: "meeting", l: "회의명", req: 1 }, { n: "attend", l: "참석" }, { n: "body", l: "주요 결정", t: "textarea", req: 1, full: 1 }],
    "면담일지": [{ n: "meeting", l: "면담자 · 피면담자", req: 1, full: 1 }, { n: "body", l: "주요 내용", t: "textarea", req: 1, full: 1 }],
    "미팅 기록": [{ n: "meeting", l: "미팅 대상", req: 1 }, { n: "place", l: "장소" }, { n: "body", l: "협의 내용 · 후속 조치", t: "textarea", req: 1, full: 1 }],
    "교육·세미나": [{ n: "meeting", l: "교육명", req: 1 }, { n: "body", l: "배운 내용", t: "textarea", req: 1, full: 1 }],
  }
  function pageWorklog(r) {
    var tab = q(r, "tab", "일일 업무일지")
    if (r.query.write) return worklogForm(tab)
    var list = S.worklogs.filter(function (w) { return w.tab === tab }).sort(function (a, b) { return a.date < b.date ? 1 : -1 })
    var h = '<div class="card p-2.5 flex flex-wrap gap-1.5 items-center mb-3">' + pills(S.wlTabs, tab, "wlTab") + '<a class="btn btn-p ml-auto" href="#/worklog?tab=' + encodeURIComponent(tab) + '&write=1">➜ 등록하기</a></div>'
    h += '<p class="help mb-3">' + E(tab) + ", 전 직원이 작성·열람하는 업무 기록입니다. 수정·삭제 버튼은 본인 글에만 보입니다.</p>"
    if (!list.length) return h + '<div class="card p-12 text-center text-gray-500 text-sm">아직 등록된 ' + E(tab) + "가 없습니다.</div>"
    h += '<div class="grid lg:grid-cols-2 gap-4">' + list.map(function (w) {
      var a = acc(w.by)
      var body = '<div class="flex items-center gap-2"><b class="text-[14px]">' + E(a.name) + '</b><span class="text-[13px] text-gray-500">· ' + E(a.role === "master" ? "대표" : a.dept) + '</span><span class="ml-auto text-[13px] text-gray-500">' + dot(w.date) + "</span></div>"
      if (tab === "일일 업무일지") {
        body += '<div class="text-[13px] text-[#3182f6] mt-3 mb-1">신규 진행</div><div class="text-[13px] text-gray-800">' + E(w.body) + '</div><div class="text-[12px] text-gray-500 mt-3 mb-1.5">고정 루틴업무</div><div class="flex flex-wrap gap-x-4 gap-y-1 text-[13px]">' +
          Object.keys(w.checks || {}).map(function (c) { return w.checks[c] ? '<span>✅ ' + E(c) + "</span>" : '<span class="text-gray-400">⬜ ' + E(c) + "</span>" }).join("") + "</div>"
      } else {
        if (w.period) body += '<div class="text-[12px] text-[#3182f6] mt-3">' + E(w.period) + "</div>"
        if (w.goal) body += '<div class="text-[13px] mt-1"><b>목표</b> ' + E(w.goal) + "</div>"
        if (w.meeting) body += '<div class="text-[13px] mt-3 font-semibold">' + E(w.meeting) + (w.place ? " · " + E(w.place) : "") + "</div>"
        if (w.attend) body += '<div class="text-[12px] text-gray-500">참석: ' + E(w.attend) + "</div>"
        body += '<div class="text-[13px] text-gray-800 mt-2 whitespace-pre-wrap">' + E(w.body) + "</div>"
      }
      var mng = mine(w) ? '<div class="flex justify-end gap-1.5 mt-3 pt-3 border-t border-gray-100">' + (tab === "주간 업무보고서" || tab === "월간 보고서" ? '<button class="btn btn-x" data-act="print">🖨 인쇄</button>' : "") + '<button class="btn btn-x" data-act="wlEdit" data-id="' + w.id + '">수정</button><button class="btn btn-x btn-r" data-act="del" data-kind="worklog" data-id="' + w.id + '">삭제</button></div>' : ""
      return '<div class="card p-5">' + body + mng + "</div>"
    }).join("") + "</div>"
    return h
  }
  function worklogForm(tab) {
    var h = '<form data-submit="wlSave" class="max-w-[1100px]"><h2 class="text-[18px] font-bold mb-5">' + E(tab) + ' 작성</h2><div class="w-[200px] mb-5">' + fld({ n: "date", l: "업무 일자", t: "date", max: TODAY, req: 1 }, TODAY) + "</div>"
    if (tab === "일일 업무일지") {
      var rt = S.routines[S.user] || []
      h += '<div class="card p-5 mb-5"><div class="text-[14px] font-bold text-[#3182f6] pb-3 border-b mb-4">금일 신규 진행 업무</div><textarea class="inp" name="body" rows="6" required placeholder="오늘 새롭게 진행한 업무를 작성하세요... (고객 연락처·주민번호 금지)"></textarea></div>'
      h += '<div class="card p-5 mb-5"><div class="flex items-center pb-3 border-b mb-3"><b class="text-[14px]">고정 루틴업무 체크리스트</b></div><p class="help mb-3">매일 반복하는 루틴 업무를 체크합니다. 항목 빼기는 결재 없이 바로 반영되며 본인 템플릿에서만 빠집니다.</p><div class="flex flex-wrap gap-2 mb-3">' +
        rt.map(function (t, i) { return '<label class="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-[13px]"><input type="checkbox" name="rt' + i + '" class="w-4 h-4"> ' + E(t) + ' <button type="button" class="text-gray-400 ml-1" data-act="rtDel" data-i="' + i + '">✕</button></label>' }).join("") +
        '</div><button type="button" class="btn btn-x" style="border-style:dashed" data-act="rtAdd">＋ 고정 루틴업무 추가하기</button></div>'
    } else {
      h += '<div class="card p-5 mb-5"><div class="grid sm:grid-cols-2 gap-4">' + WL_FIELDS[tab].map(function (f) { return fld(f) }).join("") + "</div>" + (tab === "주간 업무보고서" || tab === "월간 보고서" ? '<div class="mt-4"><label class="lbl">사진 <small>JPG·PNG·WebP·GIF · 한 파일 20MB</small></label><input type="file" accept="image/jpeg,image/png,image/webp,image/gif" class="text-[13px]"></div>' : "") + "</div>"
    }
    h += '<div class="border-t pt-5 flex gap-2"><button class="btn btn-p px-5 py-2.5">' + E(tab) + ' 등록</button><a class="btn" href="#/worklog?tab=' + encodeURIComponent(tab) + '">취소</a></div><input type="hidden" name="tab" value="' + E(tab) + '"></form>'
    return h
  }
  Demo.on("wlTab", function (d) { go("/worklog?tab=" + encodeURIComponent(d.v)) })
  Demo.on("print", function () { window.print() })
  Demo.on("rtAdd", function () {
    var t = prompt("추가할 고정 루틴업무 이름")
    if (!t) return
    ;(S.routines[S.user] = S.routines[S.user] || []).push(t)
    Demo.update()
  })
  Demo.on("rtDel", function (d) { S.routines[S.user].splice(+d.i, 1); toast("루틴 항목을 뺐습니다 (결재 없이 즉시 반영)."); Demo.update() })
  Demo.on("wlSave", function (v) {
    if (v.date > TODAY) { toast("업무 일자는 오늘 이후로 고를 수 없습니다."); return }
    var w = { id: nid(), tab: v.tab, by: S.user, date: v.date, body: v.body, period: v.period, goal: v.goal, meeting: v.meeting, attend: v.attend, place: v.place }
    if (v.tab === "일일 업무일지") {
      w.checks = {}
      ;(S.routines[S.user] || []).forEach(function (t, i) { w.checks[t] = v["rt" + i] ? 1 : 0 })
    }
    S.worklogs.unshift(w)
    toast(v.tab + "를 등록했습니다.")
    go("/worklog?tab=" + encodeURIComponent(v.tab))
  })
  Demo.on("wlEdit", function (d) {
    var w = findIn(S.worklogs, d.id)
    formModal(w.tab + " 수정", [{ n: "body", l: "내용", t: "textarea", rows: 6, req: 1, full: 1 }], w, function (v) { w.body = v.body; toast("수정했습니다.") })
  })

  /* ───────── 사내 드라이브 ───────── */
  function folderVisible(f) {
    var u = me()
    if (isMaster()) return true
    if (f.scope === "전 직원") return true
    if (f.scope === "비공개") return false
    return f.scope === u.dept
  }
  function pageDrive(r) {
    var fid = r.query.f
    var view = S.driveView || "grid"
    var h = ""
    var folder = fid ? findIn(S.folders, fid) : null
    if (fid && (!folder || !folderVisible(folder))) return '<div class="card p-10 text-center text-gray-500">폴더를 열 수 없습니다.</div>'
    h += '<div class="flex items-center gap-3 mb-3 text-[13px]">' + (folder ? '<a class="btn btn-x" href="#/drive">↑ 상위 폴더</a>' : "") + '<a href="#/drive" class="text-gray-600">🏠 홈</a>' + (folder ? '<span class="text-gray-300">/</span><b>' + E(folder.name) + "</b>" : "") + "</div>"
    h += '<div class="card p-3.5 flex flex-wrap items-center gap-2 mb-4"><button class="btn btn-x py-2 px-3 bg-gray-100 border-gray-100" data-act="newFolder">+ 새 폴더</button>' +
      (folder ? '<label class="btn btn-p btn-x py-2 px-3 cursor-pointer">↑ 올리기<input type="file" class="hidden" data-change="upload" data-f="' + folder.id + '"></label>' : '<button class="btn btn-p btn-x py-2 px-3" disabled>↑ 올리기</button><span class="help">파일은 폴더를 연 뒤 올릴 수 있습니다</span>') +
      (folder && isMaster() ? '<button class="btn btn-x ml-auto" data-act="folderPerm" data-id="' + folder.id + '">🔐 권한</button>' : "") + "</div>"
    h += '<div class="flex justify-end gap-1 mb-2"><button class="seg' + (view === "grid" ? " on" : "") + '" data-act="driveView" data-v="grid">⊞ 그리드</button><button class="seg' + (view === "list" ? " on" : "") + '" data-act="driveView" data-v="list">☰ 목록</button></div>'
    if (!folder) {
      var fl = S.folders.filter(folderVisible)
      h += '<div class="text-[13px] font-semibold text-gray-700 mb-2">⌄ 폴더 (' + fl.length + ")</div>"
      if (view === "grid") h += '<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">' + fl.map(function (f) { return '<a href="#/drive?f=' + f.id + '" class="card p-4 text-center hover:shadow-sm"><div class="text-[32px]">📁</div><div class="text-[13px] font-semibold mt-1">' + E(f.name) + '</div><div class="mt-3">' + scopeBadge(f.scope) + "</div></a>" }).join("") + "</div>"
      else h += '<div class="card overflow-x-auto"><table class="tbl"><thead><tr><th>이름</th><th>공개 범위</th><th>만든 사람</th></tr></thead><tbody>' + fl.map(function (f) { return '<tr><td class="b"><a href="#/drive?f=' + f.id + '">📁 ' + E(f.name) + "</a></td><td>" + scopeBadge(f.scope) + "</td><td>" + E(nm(f.by)) + "</td></tr>" }).join("") + "</tbody></table></div>"
    } else {
      var files = S.files.filter(function (x) { return String(x.folder) === String(folder.id) })
      h += '<div class="text-[13px] font-semibold text-gray-700 mb-2">⌄ 파일 (' + files.length + ")</div>"
      if (!files.length) h += '<div class="card p-10 text-center text-gray-500 text-sm">빈 폴더입니다. ↑ 올리기로 파일을 추가하세요.</div>'
      else if (view === "grid") h += '<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">' + files.map(function (x) { return '<div class="card p-4 text-center"><button class="w-full" data-act="download" data-n="' + E(x.name) + '"><div class="text-[30px]">' + fileIcon(x.name) + '</div><div class="text-[13px] font-medium mt-1 break-all">' + E(x.name) + '</div><div class="text-[11px] text-gray-500 mt-1">' + E(x.size) + "</div></button>" + (x.by === S.user || isMaster() ? '<button class="text-[11px] text-red-500 mt-2" data-act="del" data-kind="file" data-id="' + x.id + '">삭제</button>' : "") + "</div>" }).join("") + "</div>"
      else h += '<div class="card overflow-x-auto"><table class="tbl"><thead><tr><th>파일명</th><th>크기</th><th>올린 사람</th><th>날짜</th><th class="r">받기</th></tr></thead><tbody>' + files.map(function (x) { return "<tr><td class=\"b\">" + fileIcon(x.name) + " " + E(x.name) + "</td><td>" + E(x.size) + "</td><td>" + E(nm(x.by)) + "</td><td>" + dot(x.date) + '</td><td class="r"><button class="btn btn-x" data-act="download" data-n="' + E(x.name) + '">⬇ 받기</button> ' + (x.by === S.user || isMaster() ? '<button class="btn btn-x btn-r" data-act="del" data-kind="file" data-id="' + x.id + '">삭제</button>' : "") + "</td></tr>" }).join("") + "</tbody></table></div>"
    }
    return h
  }
  function scopeBadge(s) { return s === "전 직원" ? '<span class="text-[11px] text-gray-500">전 직원</span>' : s === "비공개" ? badge("비공개 (마스터만)", "gray") : badge(s + " 전용", "red") }
  function fileIcon(n) { return /\.pdf$/i.test(n) ? "📕" : /\.(png|jpe?g|gif|webp)$/i.test(n) ? "🖼️" : /\.(xlsx?|csv)$/i.test(n) ? "📊" : /\.(pptx?)$/i.test(n) ? "📙" : /\.zip$/i.test(n) ? "🗜️" : "📄" }
  Demo.on("driveView", function (d) { S.driveView = d.v; Demo.update() })
  Demo.on("download", function (d) { toast("체험판에서는 파일을 내려받지 않습니다: " + d.n) })
  Demo.on("upload", function (v, el) {
    var f = el.files && el.files[0]
    if (!f) return
    if (/\.(hwp|exe|bat|msi)$/i.test(f.name)) { toast("한글(.hwp)과 실행파일은 올라가지 않습니다."); return }
    if (/\d{6}-?\d{7}|01\d-?\d{3,4}-?\d{4}/.test(f.name)) { toast("파일명에 주민번호·전화번호가 들어 있어 업로드가 거부되었습니다."); return }
    if (f.size > 200 * 1024 * 1024) { toast("파일 하나는 200MB까지입니다."); return }
    var sz = f.size > 1048576 ? (f.size / 1048576).toFixed(1) + " MB" : Math.max(1, Math.round(f.size / 1024)) + " KB"
    S.files.push({ id: nid(), folder: +el.dataset.f, name: f.name, size: sz, by: S.user, date: TODAY })
    toast("올렸습니다 (체험판: 파일 내용은 저장하지 않습니다).")
    Demo.update()
  })
  Demo.on("newFolder", function () {
    var opts = isMaster() ? ["전 직원", "CS·TM", "마케팅", "경영지원", "비공개"] : ["전 직원", me().dept]
    formModal("새 폴더", [{ n: "name", l: "폴더 이름", req: 1, full: 1 }, { n: "scope", l: "공개 범위", t: "select", o: opts, full: 1, hint: isMaster() ? "" : "직원은 전 직원·본인 부서만 고를 수 있습니다" }], {}, function (v) { S.folders.push({ id: nid(), name: v.name, scope: v.scope, by: S.user }); toast("폴더를 만들었습니다.") })
  })
  Demo.on("folderPerm", function (d) {
    var f = findIn(S.folders, d.id)
    formModal("폴더 권한, " + f.name, [{ n: "scope", l: "공개 범위", t: "select", o: ["전 직원", "CS·TM", "마케팅", "경영지원", "비공개"], full: 1 }], f, function (v) { f.scope = v.scope; toast("공개 범위를 바꿨습니다.") })
  })

  /* ───────── 통합 상담대장 ───────── */
  function pageConsult(r) {
    if (r.query.new || r.query.edit) return consultForm(r.query.edit ? findIn(S.consults, r.query.edit) : null)
    var fb = q(r, "brand", ""), fr = q(r, "route", ""), fc = q(r, "by", ""), kw = q(r, "kw", "")
    var counselors = ["u2", "u4"]
    var list = S.consults.filter(function (c) {
      if (fb && c.brand !== fb) return false
      if (fr && c.route !== fr) return false
      if (fc && c.by !== fc) return false
      if (kw && c.name.indexOf(kw) < 0 && c.phone.slice(-4) !== kw) return false
      return true
    }).sort(function (a, b) { return a.date < b.date ? 1 : -1 })
    function sel(name, label, opts, val) { return '<select class="inp inp-sm w-auto" data-change="consultFilter" data-k="' + name + '"><option value="">' + label + "</option>" + opts.map(function (o) { var v = typeof o === "string" ? o : o[0], t = typeof o === "string" ? o : o[1]; return '<option value="' + E(v) + '"' + (v === val ? " selected" : "") + ">" + E(t) + "</option>" }).join("") + "</select>" }
    var h = '<div class="card p-2.5 flex items-center mb-4"><span class="pill on">상담 대장</span><a class="btn btn-p ml-auto" href="#/consult?new=1">+ 상담 등록</a></div>'
    h += '<div class="card p-3 flex flex-wrap items-center gap-2 mb-3"><b class="text-[13px] mr-1">검색</b>' + sel("brand", "브랜드 전체", BRANDS, fb) + sel("route", "경로 전체", ROUTES, fr) + sel("by", "상담원 전체", counselors.map(function (u) { return [u, nm(u)] }), fc) +
      '<input class="inp inp-sm w-[220px]" placeholder="🔍 고객명 · 연락처 뒷 4자리" value="' + E(kw) + '" data-change="consultFilter" data-k="kw"></div>'
    h += '<p class="help mb-3">전 브랜드 고객 상담 기록, 연락처는 기본 마스킹, 열람 시 접속기록이 남습니다. 검색은 고객명 또는 <b>연락처 뒷 4자리</b>로 하세요(가운데 자리는 가려져 있어 검색되지 않습니다).</p>'
    h += '<div class="card overflow-x-auto"><table class="tbl"><thead><tr><th>상담일</th><th>브랜드</th><th>고객명</th><th>연락처</th><th>경로</th><th>상담원</th><th>구매</th><th class="r">관리</th></tr></thead><tbody>' +
      (list.length ? list.map(function (c) {
        return "<tr><td>" + dot(c.date) + "</td><td>" + E(c.brand) + '</td><td class="b"><button data-act="consultView" data-id="' + c.id + '">' + E(c.name) + "</button></td><td>" + masked("consult:" + c.id, c.phone, maskPhone(c.phone), "상담대장 연락처, " + c.name) + "</td><td>" + E(c.route) + "</td><td>" + E(nm(c.by)) + "</td><td>" + buyBadge(c.buy) + '</td><td class="r">' + (mine(c) ? '<div class="flex justify-end gap-1.5"><a class="btn btn-x" href="#/consult?edit=' + c.id + '">수정</a><button class="btn btn-x btn-r" data-act="del" data-kind="consult" data-id="' + c.id + '">삭제</button></div>' : '<span class="text-gray-400"></span>') + "</td></tr>"
      }).join("") : emptyRow(8, "조건에 맞는 상담이 없습니다.")) + "</tbody></table></div>"
    return h
  }
  function consultForm(c) {
    var v = c || { date: TODAY, brand: BRANDS[0], route: ROUTES[0], buy: "상담중" }
    return '<form data-submit="consultSave" class="card p-5"><div class="text-[14px] font-bold pb-4 border-b mb-5">' + (c ? "상담 수정" : "상담 등록") + '</div><input type="hidden" name="id" value="' + (c ? c.id : "") + '"><div class="grid sm:grid-cols-2 gap-4">' +
      fld({ n: "date", l: "상담일", t: "date", req: 1 }, v.date) + '<div><label class="lbl">상담원 <small>(로그인 계정 자동)</small></label><input class="inp" readonly value="' + E(nm(c ? c.by : S.user)) + '"></div>' +
      fld({ n: "name", l: "고객명", req: 1, ph: "고객명 / 상호" }, v.name) +
      (c ? '<div><label class="lbl">연락처 <small>비운 채 저장하면 기존 값 유지</small></label><input class="inp" name="phone" placeholder="' + E(maskPhone(c.phone)) + '"></div>' : fld({ n: "phone", l: "연락처", req: 1, ph: "010-0000-0000" })) +
      '</div><div class="grid sm:grid-cols-3 gap-4 mt-4">' + fld({ n: "brand", l: "브랜드", t: "select", o: BRANDS, req: 1 }, v.brand) + fld({ n: "route", l: "경로", t: "select", o: ROUTES, req: 1 }, v.route) + fld({ n: "buy", l: "구매여부", t: "select", o: BUY, req: 1 }, v.buy) + '</div><div class="mt-4">' +
      fld({ n: "content", l: "상담 내용", t: "textarea", rows: 5, hint: "(선택 · 저장 시 암호화)", ph: "상담 내용을 입력하세요..." }, v.content) + '</div><div class="mt-4">' +
      fld({ n: "note", l: "특이사항", t: "textarea", rows: 3, hint: "(선택 · 개인정보 입력 금지 · 리드 현황에 표시)", ph: "재통화 예정 / 가격 문의 / 타사 검토중 등" }, v.note) +
      '</div><div class="border-t mt-5 pt-5 flex gap-2"><button class="btn btn-p px-5">' + (c ? "수정 저장" : "상담 등록") + '</button><a class="btn" href="#/consult">취소</a></div></form>'
  }
  Demo.on("consultFilter", function (val, el) {
    var r = Demo.route().query
    r[el.dataset.k] = val
    var qs = Object.keys(r).filter(function (k) { return r[k] }).map(function (k) { return k + "=" + encodeURIComponent(r[k]) }).join("&")
    go("/consult" + (qs ? "?" + qs : ""))
  })
  Demo.on("consultSave", function (v) {
    if (v.phone && !/^[0-9+\-\s]{9,}$/.test(v.phone)) { toast("연락처 형식을 확인해 주세요."); return }
    if (v.id) {
      var c = findIn(S.consults, v.id)
      c.date = v.date; c.name = v.name; c.brand = v.brand; c.route = v.route; c.buy = v.buy; c.content = v.content; c.note = v.note
      if (v.phone) c.phone = v.phone
      toast("수정했습니다.")
    } else {
      S.consults.unshift({ id: nid(), date: v.date, brand: v.brand, name: v.name, phone: v.phone, route: v.route, buy: v.buy, by: S.user, content: v.content, note: v.note, contract: "계약중", cmemo: "" })
      toast("상담을 등록했습니다. 연락처는 가려져 저장됩니다.")
    }
    go("/consult")
  })
  Demo.on("consultView", function (d) {
    var c = findIn(S.consults, d.id)
    openModal("상담 상세, " + c.name, '<div class="p-5 text-[13px] space-y-3">' + [["상담일", dot(c.date)], ["상담원", nm(c.by)], ["브랜드", c.brand], ["경로", c.route], ["구매여부", c.buy]].map(function (x) { return '<div class="flex gap-3"><span class="w-20 text-gray-500">' + x[0] + "</span><b>" + E(x[1]) + "</b></div>" }).join("") +
      '<div class="flex gap-3"><span class="w-20 text-gray-500">연락처</span><span>' + masked("consult:" + c.id, c.phone, maskPhone(c.phone), "상담대장 연락처, " + c.name) + '</span></div><div><div class="text-gray-500 mb-1">상담 내용 🔒</div><div class="bg-gray-50 rounded-lg p-3 whitespace-pre-wrap">' + E(c.content || "") + '</div></div><div><div class="text-gray-500 mb-1">특이사항</div><div class="bg-gray-50 rounded-lg p-3">' + E(c.note || "") + "</div></div></div>")
  })

  /* ───────── 상담템플릿 ───────── */
  function pageTemplate(r) {
    var brand = q(r, "brand", BRANDS[0])
    var list = S.templates.filter(function (t) { return t.brand === brand })
    var h = '<div class="card p-2.5 flex flex-wrap gap-1.5 items-center mb-4">' + pills(BRANDS, brand, "tplBrand") + '<button class="btn btn-p ml-auto" data-act="tplNew" data-brand="' + E(brand) + '">+ 템플릿 등록</button></div>'
    if (!list.length) return h + '<div class="card p-12 text-center text-gray-500 text-sm">이 브랜드에 등록된 템플릿이 없습니다.</div>'
    h += '<div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">' + list.map(function (t, i) {
      return '<div class="card p-5 flex flex-col"><div class="flex items-center gap-2 mb-2"><span class="text-gray-300 cursor-move" title="끌어서 순서 변경">⠿</span><b class="text-[14px]">' + E(t.title) + '</b><span class="ml-auto flex gap-1">' + (i > 0 ? '<button class="text-gray-400 text-xs" data-act="tplMove" data-id="' + t.id + '" data-d="-1" title="앞으로">◀</button>' : "") + (i < list.length - 1 ? '<button class="text-gray-400 text-xs" data-act="tplMove" data-id="' + t.id + '" data-d="1" title="뒤로">▶</button>' : "") + '</span></div><div class="text-[13px] text-gray-700 leading-6 whitespace-pre-line clamp4 min-h-[96px]">' + E(t.body) + '</div><div class="flex items-center gap-1.5 border-t border-gray-100 mt-4 pt-4"><button class="btn btn-x" data-act="tplCopy" data-id="' + t.id + '">📋 복사</button>' +
        (mine(t) ? '<button class="btn btn-x" data-act="tplEdit" data-id="' + t.id + '">수정</button><button class="btn btn-x btn-r" data-act="del" data-kind="template" data-id="' + t.id + '">삭제</button>' : "") + '<span class="ml-auto text-[12px] text-gray-500">' + E(nm(t.by)) + "</span></div></div>"
    }).join("") + "</div>"
    return h
  }
  Demo.on("tplBrand", function (d) { go("/template?brand=" + encodeURIComponent(d.v)) })
  Demo.on("tplCopy", function (d) { copyText(findIn(S.templates, d.id).body); toast("템플릿 전문을 복사했습니다.") })
  Demo.on("tplMove", function (d) {
    var t = findIn(S.templates, d.id)
    var same = S.templates.filter(function (x) { return x.brand === t.brand })
    var o = same[same.indexOf(t) + +d.d]
    var a = S.templates.indexOf(t), b = S.templates.indexOf(o)
    S.templates[a] = o; S.templates[b] = t
    Demo.update()
  })
  var TPL_F = [{ n: "title", l: "제목", req: 1, full: 1 }, { n: "body", l: "내용", t: "textarea", rows: 7, req: 1, full: 1, ph: "특정 고객 정보는 넣지 않습니다" }]
  Demo.on("tplNew", function (d) { formModal("템플릿 등록, " + d.brand, TPL_F, {}, function (v) { S.templates.push({ id: nid(), brand: d.brand, title: v.title, body: v.body, by: S.user }); toast("템플릿을 등록했습니다.") }) })
  Demo.on("tplEdit", function (d) { var t = findIn(S.templates, d.id); formModal("템플릿 수정", TPL_F, t, function (v) { t.title = v.title; t.body = v.body; toast("수정했습니다.") }) })

  /* ───────── 가맹점관리 ───────── */
  function pageStore(r) {
    if (r.query.new) return storeForm(null, r)
    if (r.query.id) { var s = findIn(S.stores, r.query.id); if (!s) return '<div class="card p-10 text-center text-gray-500">삭제된 가맹점입니다. <a class="text-blue-600" href="#/store">목록으로</a></div>'; return storeForm(s, r) }
    var brand = q(r, "brand", "루미페이"), kw = q(r, "kw", "")
    var list = S.stores.filter(function (s) {
      if (s.brand !== brand) return false
      if (!kw) return true
      if (brand === "루미페이") return [s.name, s.tid, s.bizNo, s.ceo, s.ceoPhone.slice(-4)].some(function (x) { return String(x).indexOf(kw) >= 0 })
      return s.name.indexOf(kw) >= 0
    }).sort(function (a, b) { return a.regDate < b.regDate ? 1 : -1 })
    var h = '<div class="card p-2.5 flex flex-wrap gap-2 items-center mb-3"><select class="inp inp-sm w-[150px]" data-change="storeBrand">' + BRANDS.map(function (b) { return "<option" + (b === brand ? " selected" : "") + ">" + b + "</option>" }).join("") + '</select><input class="inp inp-sm w-[220px]" placeholder="🔍 ' + (brand === "루미페이" ? "상호·TID·사업자번호·대표자·휴대폰" : "상호 검색") + '" value="' + E(kw) + '" data-change="storeKw"><div class="ml-auto flex gap-2"><button class="btn" style="color:#15803d;border-color:#86efac" data-act="excel">📊 엑셀 다운</button><a class="btn btn-p" href="#/store?new=1">＋ 가맹점</a></div></div>'
    h += '<p class="help mb-3">최근 등록 가맹점이 맨 위(NO 역순)로 표시됩니다. 주민번호·계좌·연락처는 상세에서 열람 시 접속기록이 남습니다.</p>'
    var n = list.length
    h += '<div class="card overflow-x-auto"><table class="tbl sm"><thead><tr><th rowspan="2" class="c" style="vertical-align:middle">NO.</th><th colspan="2" class="c" style="border-left:1px solid #e5e7eb">지급보류</th><th colspan="7" class="c" style="border-left:1px solid #e5e7eb">가맹점 정보</th><th colspan="12" class="c" style="border-left:1px solid #e5e7eb">상위 영업라인</th></tr><tr><th style="border-left:1px solid #e5e7eb">보류 시작일</th><th>사유</th><th style="border-left:1px solid #e5e7eb">가맹점 TID</th><th>상호</th><th>상태</th><th>사업자명</th><th>가맹점 수수료</th><th>유보금</th><th>업종</th>' + LINES.map(function (l, i) { return "<th" + (i === 0 ? ' style="border-left:1px solid #e5e7eb"' : "") + ">" + l + "</th><th>수수료</th>" }).join("") + "</tr></thead><tbody>" +
      (n ? list.map(function (s, i) {
        return '<tr><td class="c text-gray-500">' + (n - i) + "</td><td>" + (s.hold ? dot(s.hold.start) : "") + '</td><td class="' + (s.hold ? "" : "text-red-400") + '">' + (s.hold ? E(s.hold.reason) : "") + '</td><td class="mono text-[12px] text-gray-500">' + E(s.tid) + '</td><td><a class="text-[#3182f6] font-semibold" href="#/store?id=' + s.id + '">' + E(s.name) + "</a></td><td>" + badge(s.hold ? "보류" : s.status, s.hold ? "red" : s.status === "정상" ? "green" : "gray") + "</td><td>" + E(s.bizName) + "</td><td>" + s.fee + "%</td><td>" + (s.reserve ? won(s.reserve) : "") + '</td><td class="text-gray-500">' + E(s.industry) + "</td>" +
          s.lines.map(function (l) { return '<td class="text-gray-500">' + E(l.co || "") + "</td><td>" + (l.rate != null && l.co ? l.rate + "%" : "") + "</td>" }).join("") + "</tr>"
      }).join("") : emptyRow(22, "등록된 가맹점이 없습니다.")) + "</tbody></table></div>"
    return h
  }
  Demo.on("storeBrand", function (v) { go("/store?brand=" + encodeURIComponent(v)) })
  Demo.on("storeKw", function (v) { var b = Demo.route().query.brand || "루미페이"; go("/store?brand=" + encodeURIComponent(b) + (v ? "&kw=" + encodeURIComponent(v) : "")) })
  Demo.on("excel", function () { toast("체험판에서는 엑셀 파일을 만들지 않습니다.") })
  function storeForm(s, r) {
    var isNew = !s
    var tab = q(r, "tab", "info")
    var v = s || { brand: (S.newDraft && S.newDraft.brand) || "루미페이", bizType: "비사업자", payType: "무선단말기", status: "정상", taxType: "과세", bank: "가람은행", fee: "", reserve: 0, lines: LINES.map(function (l) { return { lvl: l, co: "", rate: null, hist: [] } }) }
    var ari = v.brand === "루미페이"
    var tg = function (on) { return on ? '<span class="tag-brand">루미페이</span>' : "" }
    function F(n, l, req, opt) {
      opt = opt || {}
      var lab = '<label class="lbl">' + E(l) + (req ? " *" : "") + tg(opt.ari) + "</label>"
      var val = v[n] == null ? "" : v[n]
      if (opt.mask && !isNew) {
        var key = "store:" + s.id + ":" + n
        if (!S.revealed[key]) return "<div>" + lab + '<div class="relative"><input class="inp pr-20" name="' + n + '" placeholder="' + E(opt.mask(val)) + '"><button type="button" class="eye absolute right-2 top-1/2 -translate-y-1/2" data-act="reveal" data-k="' + key + '" data-what="가맹점 ' + E(l) + ", " + E(s.name) + '">👁 보기</button></div></div>'
        return "<div>" + lab + '<input class="inp" name="' + n + '" value="' + E(val) + '"></div>'
      }
      if (opt.o) return "<div>" + lab + '<select class="inp" name="' + n + '">' + opt.o.map(function (o) { return "<option" + (o === val ? " selected" : "") + ">" + o + "</option>" }).join("") + "</select></div>"
      return "<div" + (opt.full ? ' class="sm:col-span-2"' : "") + ">" + lab + '<input class="inp" name="' + n + '" value="' + E(val) + '" placeholder="' + E(opt.ph || "") + '"></div>'
    }
    var h = '<div class="max-w-[1280px] mx-auto"><div class="flex items-center gap-3 mb-4"><a class="btn btn-x" href="#/store">← 목록으로</a><h2 class="text-[17px] font-bold">' + (isNew ? "신규 가맹점 등록" : E(s.name)) + "</h2></div>"
    var base = isNew ? "#/store?new=1" : "#/store?id=" + s.id
    h += '<div class="flex gap-1 border-b border-gray-200 mb-4"><a href="' + base + '" class="px-4 py-2.5 text-[13px] rounded-t-lg ' + (tab === "info" ? "bg-[#3182f6] text-white font-semibold" : "text-gray-600") + '">🏧 가맹점정보</a><a href="' + base + '&tab=pay" class="px-4 py-2.5 text-[13px] rounded-t-lg ' + (tab === "pay" ? "bg-[#3182f6] text-white font-semibold" : "text-gray-600") + '">📩 결제통지정보</a></div>'
    if (tab === "pay") return h + '<div class="card p-12 text-center text-gray-500 text-sm">결제통지정보 탭은 준비 중입니다. 입력은 가맹점정보 탭에서 모두 합니다.</div></div>'
    h += '<form data-submit="storeSave"><input type="hidden" name="id" value="' + (s ? s.id : "") + '"><div class="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-4 items-start"><div class="space-y-4 min-w-0">'
    // 가맹점정보
    h += '<div class="card p-5"><div class="flex justify-between pb-3 border-b mb-4"><b class="text-[14px]">가맹점정보</b><span class="help">개인정보·가맹점정보 통합</span></div><div class="grid sm:grid-cols-2 gap-4">' +
      '<div><label class="lbl">브랜드</label><select class="inp" name="brand" data-change="storeFormBrand">' + BRANDS.map(function (b) { return "<option" + (b === v.brand ? " selected" : "") + ">" + b + "</option>" }).join("") + "</select></div>" +
      F("tid", "가맹점 TID", 1, { ph: "선로사 발급 TID" }) + F("name", "가맹점 상호", 1, { ari: ari }) + F("industry", "업종", 1) + F("ceo", "대표자명", 1, { ari: ari }) + F("ceoPhone", "대표자 연락처", 1, { ari: ari, ph: "010-0000-0000", mask: maskPhone }) +
      '<div class="sm:col-span-2"><label class="lbl">주소 *' + tg(ari) + '</label><div class="flex flex-wrap gap-2 mb-2"><input class="inp w-[120px]" name="zip" value="' + E(v.zip || "") + '" placeholder="우편번호"' + (S.manualAddr ? "" : " readonly") + '><button type="button" class="btn" data-act="zipSearch">🔍 우편번호 검색</button><button type="button" class="text-[13px] text-gray-600" data-act="manualAddr">✏️ ' + (S.manualAddr ? "검색으로 입력" : "직접 입력") + '</button></div><input class="inp mb-2" name="addr" value="' + E(v.addr || "") + '" placeholder="주소 검색 버튼을 눌러 주소를 선택하세요"' + (S.manualAddr ? "" : " readonly") + '><input class="inp" name="addr2" value="' + E(v.addr2 || "") + '" placeholder="상세주소 (동·층·호 등)"></div>' +
      '<div><label class="lbl">사업자구분</label><div class="flex gap-4 py-2 text-[13px]">' + ["개인", "법인", "비사업자"].map(function (t) { return '<label class="flex items-center gap-1.5"><input type="radio" name="bizType" value="' + t + '"' + (v.bizType === t ? " checked" : "") + "> " + t + "</label>" }).join("") + "</div></div>" +
      F("rrn", "주민(법인)등록번호", ari || v.bizType === "비사업자", { ari: ari, ph: "901231-1234567", mask: maskRrn }) + F("bizNo", "사업자번호", 0, { ari: ari, ph: "000-00-00000", mask: maskBiz }) + F("bizName", "사업자명", 0) +
      F("payType", "사용 결제유형", 1, { o: ["무선단말기", "블루투스단말기", "유선단말기", "키오스크", "온라인결제"] }) + F("status", "가맹점 상태", 1, { ari: ari, o: ["정상", "해지", "대기"] }) + F("taxType", "사업자 유형", 0, { o: ["과세", "면세", "간이"] }) + F("email", "이메일", 0, { ari: ari }) + "</div></div>"
    if (ari) h += '<div class="card p-5"><div class="flex justify-between pb-3 border-b mb-4"><b class="text-[14px]">루미페이 연동</b><span class="help">루미페이 등록 필수값</span></div><div class="grid sm:grid-cols-2 gap-4">' + F("agency", "소속 영업사", 1, { ari: 1, ph: "영업사명·FR코드 검색" }) + F("pg", "PG 정산코드", 1, { ari: 1, ph: "예: PG102" }) + "</div></div>"
    h += '<div class="card p-5"><div class="pb-3 border-b mb-4"><b class="text-[14px]">은행정보</b></div><div class="grid sm:grid-cols-2 gap-4">' + F("acct", "계좌번호", 1, { ari: ari, mask: maskAcct }) + F("bank", "은행", 1, { ari: ari, o: ["가람은행", "누리은행", "하나로은행", "별빛은행"] }) + F("holder", "예금주", 1, { full: 1 }) + "</div></div>"
    h += '<div class="card p-5"><div class="pb-3 border-b mb-4"><b class="text-[14px]">가맹점 수수료 · 유보금</b></div><div class="grid sm:grid-cols-2 gap-4">' + F("fee", "가맹점 수수료(%)", 1, { ph: "예: 2.5" }) + F("reserve", "유보금(원)", 0) + "</div><p class=\"help mt-2\">이력이 남지 않고 저장할 때마다 덮어써집니다.</p></div>"
    // 영업라인 수수료
    var locked = s && !s.saved
    h += '<div class="card p-5"><div class="flex justify-between pb-3 border-b mb-4"><b class="text-[14px]">영업라인 수수료</b><span class="help">즉시적용=오늘 / 예약적용=미래일(변경이력 유지)</span></div>' + (locked ? '<div class="note-blue mb-3">결제 시스템에 이미 있던 가맹점입니다. 아래 수정 저장을 한 번 하면 영업라인 수수료와 계약파일이 열립니다.</div>' : "") + '<div class="space-y-3">' +
      v.lines.map(function (l, i) {
        var cur = l.co && l.rate != null ? '현재 <b class="text-[#3182f6]">' + l.rate + "%</b> · " + E(l.co) + " · 적용 " + dot(l.date) : '<span class="text-gray-400">아직 수수료가 없습니다</span>'
        var rsv = l.rsv ? ' · <span class="text-amber-600">예약 ' + l.rsv.rate + "% (" + dot(l.rsv.date) + ' 부터)</span> <button type="button" class="text-[11px] text-red-500" data-act="rsvCancel" data-id="' + (s ? s.id : "") + '" data-i="' + i + '">예약 취소</button>' : ""
        return '<div class="border border-gray-200 rounded-xl p-3' + (locked ? " opacity-50 pointer-events-none" : "") + '"><div class="grid grid-cols-[80px_1fr_80px] sm:grid-cols-[90px_1fr_90px_auto_auto] gap-2 items-center"><span class="text-[12px] text-gray-500">' + l.lvl + '/수수료율</span><input class="inp inp-sm" name="co' + i + '" value="' + E(l.co || "") + '" placeholder="상대 회사명"><input class="inp inp-sm text-right" name="rate' + i + '" placeholder="0" inputmode="decimal">' +
          (isNew ? '<span class="hidden sm:block"></span><span class="hidden sm:block"></span>' : '<button type="button" class="btn btn-x" style="color:#3182f6;border-color:#bfdbfe" data-act="feeNow" data-id="' + s.id + '" data-i="' + i + '">즉시적용</button><button type="button" class="btn btn-x" style="color:#c2410c;border-color:#fed7aa;background:#fff7ed" data-act="feeRsv" data-id="' + s.id + '" data-i="' + i + '">예약적용</button>') +
          '</div><div class="flex items-center justify-between mt-2 text-[12px] text-gray-600"><span>' + (isNew ? "회사명과 수수료율을 넣으면 등록 시 오늘부터 적용됩니다" : cur + rsv) + "</span>" + (isNew ? "" : '<button type="button" class="btn btn-x" data-act="feeHist" data-id="' + s.id + '" data-i="' + i + '">🕘 변경이력 ' + l.hist.length + "</button>") + "</div></div>"
      }).join("") + "</div></div>"
    h += "</div>"
    // 오른쪽
    h += '<div class="space-y-4">'
    var FILES = ["통장사본", "신분증", "사업자등록증", "계약서"]
    h += '<div class="card p-5"><div class="flex justify-between pb-3 border-b mb-4"><b class="text-[14px]">계약파일</b><span class="help">' + (isNew ? "가맹점 등록 후 첨부 가능" : "이미지·PDF만, 50MB") + "</span></div>" +
      (isNew ? '<p class="text-[13px] text-gray-500 text-center py-4">가맹점을 먼저 등록하면 계약파일(통장·신분증·사업자등록증·계약서)을 첨부할 수 있습니다.</p>' : '<div class="space-y-2.5' + (locked ? " opacity-50 pointer-events-none" : "") + '">' + FILES.map(function (f) { return '<label class="drop block cursor-pointer hover:bg-gray-50"><div class="text-[13px] font-semibold">📎 ' + f + '</div><div class="text-[11px] text-gray-500 mt-0.5">' + (s.files[f] ? "✅ " + E(s.files[f]) : "이미지·PDF를 끌어다 놓거나 클릭해 선택") + '</div><input type="file" accept="image/*,application/pdf" class="hidden" data-change="storeFile" data-id="' + s.id + '" data-f="' + f + '"></label>' }).join("") + "</div>") + "</div>"
    if (!isNew) h += '<div class="card p-5"><div class="pb-3 border-b mb-4 text-[14px] font-bold text-red-500">🚫 지급보류</div>' + (s.hold ? '<div class="note-red mb-3">보류 중 · ' + dot(s.hold.start) + " ~ " + (s.hold.end ? dot(s.hold.end) : "해제 시까지") + "<br>사유: " + E(s.hold.reason) + '</div><button type="button" class="btn w-full" data-act="holdOff" data-id="' + s.id + '">지급보류 해제</button>' : '<label class="lbl">지급보류 사유</label><textarea class="inp mb-3" id="holdReason" rows="2"></textarea><div class="grid grid-cols-2 gap-2 mb-3"><div><label class="lbl">시작일</label><input type="date" class="inp" id="holdStart" value="' + TODAY + '"></div><div><label class="lbl">해제일</label><input type="date" class="inp" id="holdEnd"></div></div><button type="button" class="btn w-full" style="background:#ef4444;color:#fff;border-color:#ef4444" data-act="holdOn" data-id="' + s.id + '">🚫 지급보류 적용</button>') + "</div>"
    h += '<div class="card p-5"><div class="pb-3 border-b mb-4 text-[14px] font-bold">변동사항 (메모)</div><textarea class="inp" name="memo" rows="4" placeholder="변동 내용 메모">' + E(v.memo || "") + "</textarea></div>"
    h += "</div></div>"
    h += '<div class="border-t border-gray-200 mt-5 pt-5 flex gap-2"><button class="btn btn-p px-5 py-2.5">' + (isNew ? "가맹점 등록" : "수정 저장") + '</button><a class="btn" href="#/store">취소</a>' + (isNew ? "" : '<button type="button" class="btn btn-r ml-auto" data-act="del" data-kind="store" data-id="' + s.id + '">삭제</button>') + "</div></form></div>"
    return h
  }
  S.storeDraftBrand = null
  Demo.on("storeFormBrand", function (val, el) {
    // 브랜드에 따라 필수 항목이 달라지므로 입력값을 지키면서 다시 그린다
    var form = el.form
    var r = Demo.route()
    if (r.query.id) { var s = findIn(S.stores, r.query.id); s.brand = val } else { S.newDraft = S.newDraft || {}; S.newDraft.brand = val }
    var fd = new FormData(form)
    Demo.update()
    var nf = document.querySelector("[data-submit=storeSave]")
    if (nf) fd.forEach(function (v, k) { var i = nf.elements[k]; if (i && i.type !== "radio" && k !== "brand" && v) i.value = v })
  })
  Demo.on("zipSearch", function () {
    var f = document.querySelector("[data-submit=storeSave]")
    var picks = [["04512", "서울특별시 가상구 하늘로 21"], ["13480", "경기도 가상시 별빛로 88"], ["21999", "인천광역시 가상구 바다로 105"]]
    var p = picks[Math.floor(Math.random() * picks.length)]
    f.elements.zip.value = p[0]; f.elements.addr.value = p[1]
    toast("체험판: 가상 주소를 골랐습니다. 상세주소를 입력하세요.")
  })
  Demo.on("manualAddr", function () {
    S.manualAddr = !S.manualAddr
    var f = document.querySelector("[data-submit=storeSave]")
    ;["zip", "addr"].forEach(function (n) { if (S.manualAddr) f.elements[n].removeAttribute("readonly"); else f.elements[n].setAttribute("readonly", "") })
  })
  function gatherLines(v, s, isNew) {
    var lines = (s ? s.lines : LINES.map(function (l) { return { lvl: l, co: "", rate: null, hist: [], rsv: null } }))
    lines.forEach(function (l, i) {
      if (v["co" + i]) l.co = v["co" + i]
      if (isNew && v["rate" + i] !== "" && v["rate" + i] != null) { l.rate = +v["rate" + i]; l.date = TODAY; l.hist.push({ rate: l.rate, co: l.co, date: TODAY }) }
    })
    return lines
  }
  Demo.on("storeSave", function (v) {
    var s = v.id ? findIn(S.stores, v.id) : null
    var ari = v.brand === "루미페이"
    var miss = []
    var req = [["tid", "가맹점 TID"], ["name", "가맹점 상호"], ["industry", "업종"], ["ceo", "대표자명"], ["holder", "예금주"], ["fee", "가맹점 수수료"]]
    if (!s) req = req.concat([["ceoPhone", "대표자 연락처"], ["addr", "주소"], ["acct", "계좌번호"]])
    if (ari) req = req.concat([["agency", "소속 영업사"], ["pg", "PG 정산코드"]])
    if (!s && (ari || v.bizType === "비사업자")) req.push(["rrn", "주민(법인)등록번호"])
    if (!s && v.bizType !== "비사업자") req.push(["bizNo", "사업자번호"], ["bizName", "사업자명"])
    req.forEach(function (r) { if (!String(v[r[0]] || "").trim() && !(s && s[r[0]])) miss.push(r[1]) })
    if (miss.length) { toast("필수 항목을 채워 주세요: " + miss.slice(0, 3).join(", ") + (miss.length > 3 ? " 외 " + (miss.length - 3) + "개" : "")); return }
    if (!s) {
      var hasRate = LINES.some(function (l, i) { return v["rate" + i] !== "" && v["rate" + i] != null && v["co" + i] })
      if (!hasRate) { toast("영업라인 수수료가 한 단계 이상 있어야 저장됩니다 (회사명 + 수수료율)."); return }
    }
    var keys = ["brand", "tid", "name", "industry", "ceo", "zip", "addr", "addr2", "bizType", "bizName", "payType", "status", "taxType", "email", "bank", "holder", "agency", "pg", "memo"]
    var secret = ["ceoPhone", "rrn", "bizNo", "acct"]
    if (s) {
      keys.forEach(function (k) { if (v[k] != null) s[k] = v[k] })
      secret.forEach(function (k) { if (v[k]) s[k] = v[k] })
      s.fee = +v.fee; s.reserve = +v.reserve || 0
      gatherLines(v, s, false)
      var unlocked = !s.saved
      s.saved = true
      toast(unlocked ? "저장했습니다. 영업라인 수수료와 계약파일이 열렸습니다." : "수정 저장했습니다. (수수료율 변경은 즉시적용·예약적용 버튼으로 합니다)")
      Demo.update()
    } else {
      var ns = { id: nid(), regDate: TODAY, files: {}, saved: true, shipped: false, opened: false, owner: "", hold: null }
      keys.forEach(function (k) { ns[k] = v[k] || "" })
      secret.forEach(function (k) { ns[k] = v[k] || "" })
      ns.fee = +v.fee; ns.reserve = +v.reserve || 0
      ns.lines = gatherLines(v, null, true)
      S.stores.push(ns)
      S.newDraft = null
      toast("가맹점을 등록했습니다. 개통/발송 목록에도 자동 반영됩니다.")
      go("/store?id=" + ns.id)
    }
  })
  function lineInput(d) { var f = document.querySelector("[data-submit=storeSave]"); return { co: f.elements["co" + d.i].value, rate: f.elements["rate" + d.i].value } }
  Demo.on("feeNow", function (d) {
    var s = findIn(S.stores, d.id), l = s.lines[+d.i], x = lineInput(d)
    if (x.rate === "" || isNaN(+x.rate)) { toast("수수료율을 넣고 즉시적용을 누르세요."); return }
    l.co = x.co || l.co; l.rate = +x.rate; l.date = TODAY
    l.hist.push({ rate: l.rate, co: l.co, date: TODAY })
    toast(l.lvl + " 수수료 " + l.rate + "% 를 오늘부터 적용했습니다.")
    Demo.update()
  })
  Demo.on("feeRsv", function (d) {
    var s = findIn(S.stores, d.id), l = s.lines[+d.i], x = lineInput(d)
    if (x.rate === "" || isNaN(+x.rate)) { toast("수수료율을 먼저 넣으세요."); return }
    formModal(l.lvl + " 수수료 예약적용", [{ n: "date", l: "적용 시작일", t: "date", req: 1, full: 1, value: Demo.day(7) }], {}, function (v) {
      if (v.date <= TODAY) { toast("예약은 내일 이후 날짜만 됩니다."); return false }
      l.rsv = { rate: +x.rate, co: x.co || l.co, date: v.date }
      l.hist.push({ rate: +x.rate, co: x.co || l.co, date: v.date, rsv: 1 })
      toast("예약을 확정했습니다.")
    }, { ok: "예약 확정" })
  })
  Demo.on("rsvCancel", function (d) {
    var s = findIn(S.stores, d.id), l = s.lines[+d.i]
    l.hist = l.hist.filter(function (h) { return !(h.rsv && h.date === l.rsv.date) })
    l.rsv = null
    toast("예약 수수료를 취소했습니다 (결재 없이 즉시 반영).")
    Demo.update()
  })
  Demo.on("feeHist", function (d) {
    var s = findIn(S.stores, d.id), l = s.lines[+d.i]
    openModal(l.lvl + " 수수료 변경이력", '<div class="p-5"><table class="tbl"><thead><tr><th>적용일</th><th>상대 회사</th><th class="r">수수료율</th></tr></thead><tbody>' + (l.hist.length ? l.hist.slice().reverse().map(function (h) { return "<tr><td>" + dot(h.date) + (h.rsv ? " " + badge("예약", "amber") : "") + "</td><td>" + E(h.co) + '</td><td class="r b">' + h.rate + "%</td></tr>" }).join("") : emptyRow(3, "이력이 없습니다.")) + "</tbody></table></div>")
  })
  Demo.on("holdOn", function (d) {
    var s = findIn(S.stores, d.id)
    var reason = document.getElementById("holdReason").value.trim()
    if (!reason) { toast("지급보류 사유를 적어 주세요."); return }
    s.hold = { reason: reason, start: document.getElementById("holdStart").value || TODAY, end: document.getElementById("holdEnd").value }
    toast("지급보류를 적용했습니다.")
    Demo.update()
  })
  Demo.on("holdOff", function (d) { findIn(S.stores, d.id).hold = null; toast("지급보류를 해제했습니다."); Demo.update() })
  Demo.on("storeFile", function (val, el) {
    var f = el.files && el.files[0]
    if (!f) return
    if (!/^image\/|pdf$/.test(f.type) && !/\.(pdf|png|jpe?g|gif|webp)$/i.test(f.name)) { toast("서류 첨부 칸에는 사진·PDF만 올라갑니다."); return }
    if (f.size > 50 * 1024 * 1024) { toast("서류 첨부는 한 파일 50MB까지입니다."); return }
    findIn(S.stores, el.dataset.id).files[el.dataset.f] = f.name
    toast(el.dataset.f + " 첨부 완료 (체험판: 내용은 저장하지 않습니다)")
    Demo.update()
  })

  /* ───────── 개통·발송현황 ───────── */
  function pageOpen(r) {
    var tab = q(r, "tab", "dash")
    var h = '<div class="card p-2.5 flex flex-wrap gap-1.5 mb-4">' + pills([["dash", "전체 대시보드"], ["manage", "개통·발송 관리"], ["contract", "계약중"]], tab, "openTab") + "</div>"
    if (tab === "dash") {
      var sp = S.stores.filter(function (s) { return s.shipped }).length, op = S.stores.filter(function (s) { return s.opened }).length
      return h + '<div class="grid sm:grid-cols-2 gap-4"><div class="card p-5"><div class="text-[13px] text-gray-500">누적 총 발송 단말기</div><div class="mt-2"><b class="text-[26px]">' + sp + '</b> <span class="text-gray-500">개</span></div></div><div class="card p-5"><div class="text-[13px] text-gray-500">누적 개통</div><div class="mt-2"><b class="text-[26px]">' + op + '</b> <span class="text-gray-500">개</span></div></div></div><p class="help mt-3">대시보드 수치는 개통·발송 관리 탭의 체크만 셉니다. 계약중 탭의 계약 상태는 반영되지 않습니다.</p>'
    }
    if (tab === "manage") {
      var list = S.stores.slice().sort(function (a, b) { return a.regDate < b.regDate ? 1 : -1 })
      return h + '<p class="help mb-3">가맹점관리에서 가져온 목록입니다(등록일 최신순). 체크는 누르는 즉시 저장되고, 담당은 Enter 또는 저장 버튼을 눌러야 저장됩니다.</p><div class="card overflow-x-auto"><table class="tbl"><thead><tr><th>등록일</th><th>브랜드</th><th>상호</th><th>TID</th><th class="c">발송</th><th class="c">개통</th><th>담당</th></tr></thead><tbody>' +
        list.map(function (s) { return "<tr><td>" + dot(s.regDate) + "</td><td>" + E(s.brand) + '</td><td class="b">' + E(s.name) + '</td><td class="mono text-[12px] text-gray-500">' + E(s.tid) + '</td><td class="c"><input type="checkbox" class="w-4 h-4" data-change="chkShip" data-id="' + s.id + '"' + (s.shipped ? " checked" : "") + '></td><td class="c"><input type="checkbox" class="w-4 h-4" data-change="chkOpen" data-id="' + s.id + '"' + (s.opened ? " checked" : "") + '></td><td><form data-submit="ownerSave" class="flex gap-1.5"><input type="hidden" name="id" value="' + s.id + '"><input class="inp inp-sm w-[110px]" name="owner" value="' + E(s.owner) + '" placeholder="담당자"><button class="btn btn-x">저장</button></form></td></tr>' }).join("") + "</tbody></table></div>"
    }
    var cl = S.consults.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1 })
    return h + '<p class="help mb-3">상담대장에 등록된 상담 전체입니다. 계약 상태는 즉시 저장되고, 비고는 Enter(줄바꿈은 Shift+Enter) 또는 저장 버튼으로 저장합니다. 이 탭과 개통·발송 관리 탭은 서로 연결되지 않습니다.</p><div class="card overflow-x-auto"><table class="tbl"><thead><tr><th>상담일</th><th>브랜드</th><th>고객명</th><th>상담원</th><th>계약 상태</th><th>비고</th></tr></thead><tbody>' +
      cl.map(function (c) { return "<tr><td>" + dot(c.date) + "</td><td>" + E(c.brand) + '</td><td class="b">' + E(c.name) + "</td><td>" + E(nm(c.by)) + '</td><td><select class="inp inp-sm w-[110px]" data-change="contractSt" data-id="' + c.id + '">' + ["계약중", "계약완료", "보류", "취소"].map(function (o) { return "<option" + (o === c.contract ? " selected" : "") + ">" + o + "</option>" }).join("") + '</select></td><td><form data-submit="cmemoSave" class="flex gap-1.5 items-start"><input type="hidden" name="id" value="' + c.id + '"><textarea class="inp inp-sm min-w-[200px]" rows="1" name="m" data-enter="1">' + E(c.cmemo) + '</textarea><button class="btn btn-x">저장</button></form></td></tr>' }).join("") + "</tbody></table></div>"
  }
  Demo.on("openTab", function (d) { go("/open?tab=" + d.v) })
  Demo.on("chkShip", function (v, el) { findIn(S.stores, el.dataset.id).shipped = el.checked; toast("발송 체크를 저장했습니다.") })
  Demo.on("chkOpen", function (v, el) { findIn(S.stores, el.dataset.id).opened = el.checked; toast("개통 체크를 저장했습니다.") })
  Demo.on("ownerSave", function (v) { findIn(S.stores, v.id).owner = v.owner; toast("담당을 저장했습니다."); Demo.update() })
  Demo.on("contractSt", function (v, el) { findIn(S.consults, el.dataset.id).contract = v; toast("계약 상태를 저장했습니다.") })
  Demo.on("cmemoSave", function (v) { findIn(S.consults, v.id).cmemo = v.m; toast("비고를 저장했습니다."); Demo.update() })
  document.addEventListener("keydown", function (e) {
    var t = e.target
    if (t && t.dataset && t.dataset.enter && e.key === "Enter" && !e.shiftKey) { e.preventDefault(); t.form.requestSubmit() }
  })

  /* ───────── 위험거래·블랙리스트 ───────── */
  function pageRisk(r) {
    var tab = q(r, "tab", "black")
    var h = '<div class="card p-2.5 flex gap-1.5 mb-4">' + pills([["tx", "위험거래조회"], ["black", "블랙리스트"]], tab, "riskTab") + "</div>"
    if (tab === "tx") {
      var rq = S.riskQuery || { from: ago(7), to: TODAY }
      h += '<div class="card p-3 flex flex-wrap items-center gap-2 mb-3"><b class="text-[13px]">조회 기간</b><input type="date" class="inp inp-sm w-auto" id="rkFrom" value="' + rq.from + '"> ~ <input type="date" class="inp inp-sm w-auto" id="rkTo" value="' + rq.to + '"><button class="btn btn-dark" data-act="riskSearch">조회</button><span class="help">최대 14일 · 결제사 원장에서 위험 표시된 거래를 가져옵니다</span></div>'
      if (S.riskLoading) return h + '<div class="card p-14 text-center text-gray-500 text-sm">⏳ 외부 결제 시스템에서 조회 중입니다...</div>'
      if (!S.riskRows) return h + '<div class="card p-14 text-center text-gray-500 text-sm">기간을 정하고 조회를 누르세요.</div>'
      return h + '<div class="card overflow-x-auto"><table class="tbl"><thead><tr><th>거래일시</th><th>가맹점</th><th>TID</th><th class="r">금액</th><th>카드사</th><th>위험 유형</th></tr></thead><tbody>' + (S.riskRows.length ? S.riskRows.map(function (x) { return "<tr><td>" + E(x.at) + '</td><td class="b">' + E(x.store) + '</td><td class="mono text-[12px]">' + E(x.tid) + '</td><td class="r">' + won(x.amt) + "</td><td>" + E(x.card) + "</td><td>" + badge(x.type, "red") + "</td></tr>" }).join("") : emptyRow(6, "이 기간에 위험 표시된 거래가 없습니다.")) + "</tbody></table></div>"
    }
    var line = q(r, "line", "공지")
    h += '<div class="card p-2.5 flex flex-wrap gap-1.5 items-center mb-4">' + pills([["공지", "블랙리스트 공지"]].concat(S.blLines.map(function (l) { return [l, l] })), line, "blLine") + (line !== "공지" ? '<button class="btn btn-r ml-auto" data-act="blNew" data-line="' + E(line) + '">🚫 블랙리스트 등록</button>' : isMaster() ? '<button class="btn ml-auto" data-act="blNotice">공지 수정</button>' : "") + "</div>"
    h += '<div class="note-red mb-4"><b>🚨 위험 가맹점 RM 정보공유</b><br>' + E(S.blNotice) + "</div>"
    if (line === "공지") return h + '<p class="help">블랙리스트 공지는 마스터만 쓰고 고칩니다. 선로사 탭에서 등록·조회합니다. 핸드폰번호·사업자번호는 가려져 있으며 <b>공개</b>를 누르면 기록이 남습니다.</p>'
    var rows = S.blacklist.filter(function (b) { return b.line === line })
    var cols = blCols(line)
    h += '<div class="card overflow-x-auto"><table class="tbl"><thead><tr>' + cols.map(function (c) { return "<th>" + c[0] + "</th>" }).join("") + '<th>등록자</th><th>첨부</th><th class="r">관리</th></tr></thead><tbody>' +
      (rows.length ? rows.map(function (b) {
        return "<tr>" + cols.map(function (c) { return "<td>" + c[1](b) + "</td>" }).join("") + "<td>" + E(nm(b.by)) + '</td><td class="text-gray-400">' + (b.file ? "📎" : "") + '</td><td class="r"><div class="flex justify-end gap-1.5"><button class="btn btn-x" data-act="blEdit" data-id="' + b.id + '">수정</button>' + (mine(b) ? '<button class="btn btn-x btn-r" data-act="del" data-kind="blacklist" data-id="' + b.id + '">삭제</button>' : "") + "</div></td></tr>"
      }).join("") : emptyRow(cols.length + 3, "등록된 건이 없습니다.")) + "</tbody></table></div>"
    return h
  }
  function blCols(line) {
    var dateC = ["날짜", function (b) { return dot(b.date) }]
    if (line === S.blLines[0]) return [dateC, ["사업자번호", function (b) { return masked("bl:" + b.id, b.bizNo, maskBiz(b.bizNo), "블랙리스트 사업자번호, " + b.bizName, "공개") }], ["사업자명", function (b) { return "<b>" + E(b.bizName) + "</b>" }], ["사유", function (b) { return E(b.reason) }]]
    if (line === S.blLines[1]) return [dateC, ["내용", function (b) { return E(b.content) }], ["비고", function (b) { return E(b.memo || "") }]]
    return [dateC, ["핸드폰번호", function (b) { return masked("bl:" + b.id, b.phone, maskPhone(b.phone), "블랙리스트 핸드폰번호, " + b.bizName, "공개") }], ["사업자명", function (b) { return "<b>" + E(b.bizName) + "</b>" }], ["사유", function (b) { return E(b.reason) }]]
  }
  function blFields(line) {
    var f = [{ n: "date", l: "날짜", t: "date", req: 1, value: TODAY }]
    if (line === S.blLines[0]) f = f.concat([{ n: "bizNo", l: "사업자번호", req: 1, ph: "000-00-00000" }, { n: "bizName", l: "사업자명", req: 1 }, { n: "reason", l: "사유", t: "textarea", req: 1, full: 1, ph: "구체적으로 적습니다" }])
    else if (line === S.blLines[1]) f = f.concat([{ n: "content", l: "내용", t: "textarea", req: 1, full: 1 }, { n: "memo", l: "비고", full: 1 }])
    else f = f.concat([{ n: "phone", l: "핸드폰번호", req: 1, ph: "010-0000-0000" }, { n: "bizName", l: "사업자명", req: 1 }, { n: "reason", l: "사유", t: "textarea", req: 1, full: 1 }])
    return f
  }
  Demo.on("riskTab", function (d) { go("/risk?tab=" + d.v) })
  Demo.on("blLine", function (d) { go("/risk?tab=black&line=" + encodeURIComponent(d.v)) })
  Demo.on("riskSearch", function () {
    var from = document.getElementById("rkFrom").value, to = document.getElementById("rkTo").value
    if (!from || !to || from > to) { toast("조회 기간을 확인해 주세요."); return }
    if ((new Date(to) - new Date(from)) / 86400000 > 14) { toast("조회 기간은 최대 14일입니다."); return }
    S.riskQuery = { from: from, to: to }
    S.riskLoading = true
    Demo.update()
    setTimeout(function () {
      S.riskLoading = false
      var types = ["고액 반복 승인", "해외카드 연속 결제", "심야 분할 결제", "취소 후 재승인"]
      S.riskRows = []
      var d = new Date(from)
      while (d <= new Date(to)) {
        var ds = d.toISOString().slice(0, 10)
        if (hash(ds) % 3 === 0) { var s = S.stores[hash(ds) % S.stores.length]; S.riskRows.push({ at: dot(ds) + " " + pad(hash(ds + "h") % 24) + ":" + pad(hash(ds + "m") % 60), store: s.name, tid: s.tid, amt: 300000 + (hash(ds + "a") % 40) * 50000, card: ["가람카드", "누리카드", "별빛카드"][hash(ds) % 3], type: types[hash(ds + "t") % 4] }) }
        d.setDate(d.getDate() + 1)
      }
      Demo.update()
    }, 900)
  })
  Demo.on("blNew", function (d) {
    formModal("블랙리스트 등록, " + d.line, blFields(d.line).concat([{ n: "file", l: "관련 서류 (사진·PDF)", t: "file", full: 1 }]), {}, function (v) {
      var x = { id: nid(), line: d.line, by: S.user }
      Object.keys(v).forEach(function (k) { if (k !== "file") x[k] = v[k] })
      x.file = v.file && v.file.name ? v.file.name : ""
      S.blacklist.unshift(x)
      toast("블랙리스트에 등록했습니다.")
    })
  })
  Demo.on("blEdit", function (d) {
    var b = findIn(S.blacklist, d.id)
    formModal("블랙리스트 수정", blFields(b.line), b, function (v) { Object.keys(v).forEach(function (k) { b[k] = v[k] }); toast("수정했습니다 (결재 없이 바로 반영).") })
  })
  Demo.on("blNotice", function () { formModal("블랙리스트 공지 수정", [{ n: "t", l: "공지 내용", t: "textarea", rows: 5, full: 1, req: 1 }], { t: S.blNotice }, function (v) { S.blNotice = v.t; toast("공지를 수정했습니다.") }) })

  /* ───────── 고객문의 ───────── */
  var INQ_ST = ["진행중", "성공", "미성공", "부재", "가망"]
  function pageInquiry(r) {
    var cat = q(r, "cat", "전체")
    var list = S.inquiries.filter(function (x) { return cat === "전체" || (cat === "미콜만" ? !x.calls.length && x.status === "진행중" : x.cat === cat) }).sort(function (a, b) { return a.date < b.date ? 1 : -1 })
    var h = '<div class="card p-2.5 flex flex-wrap gap-1.5 items-center mb-4">' + pills(["전체"].concat(S.inqCats), cat, "inqCat") + '<button class="pill ml-1' + (cat === "미콜만" ? " on" : "") + '" style="border:1px solid #d1d5db;background:' + (cat === "미콜만" ? "" : "#fff") + '" data-act="inqCat" data-v="미콜만">미콜만</button><button class="btn btn-p ml-auto" data-act="inqNew">+ 등록</button></div>'
    h += '<div class="card overflow-x-auto"><table class="tbl"><thead><tr><th>접수일</th><th>분류</th><th>고객명</th><th>전화번호</th><th>사업자유무</th><th>업종</th><th>문의 내용</th><th>진행 상황</th><th>담당</th><th class="r">관리</th></tr></thead><tbody>' +
      (list.length ? list.map(function (x) {
        return "<tr><td>" + dot(x.date) + '</td><td class="text-gray-500">' + E(x.cat) + '</td><td class="b"><button data-act="inqView" data-id="' + x.id + '">' + E(x.name) + "</button></td><td>" + masked("inq:" + x.id, x.phone, maskPhone(x.phone), "고객문의 전화번호, " + x.name) + "</td><td>" + badge(x.biz, "gray") + "</td><td>" + E(x.industry) + '</td><td class="max-w-[260px] truncate">' + E(x.body) + '</td><td><select class="inp inp-sm w-[92px]" data-change="inqSt" data-id="' + x.id + '">' + INQ_ST.map(function (o) { return "<option" + (o === x.status ? " selected" : "") + ">" + o + "</option>" }).join("") + "</select></td><td>" + E(nm(x.by)) + '</td><td class="r"><button class="btn btn-x btn-r" data-act="del" data-kind="inquiry" data-id="' + x.id + '">삭제</button></td></tr>'
      }).join("") : emptyRow(10, "문의가 없습니다.")) + "</tbody></table></div>"
    return h
  }
  Demo.on("inqCat", function (d) { go("/inquiry?cat=" + encodeURIComponent(d.v)) })
  Demo.on("inqSt", function (v, el) { findIn(S.inquiries, el.dataset.id).status = v; toast("진행 상황을 " + v + "(으)로 바꿨습니다.") })
  Demo.on("inqNew", function () {
    formModal("고객문의 등록", [
      { n: "date", l: "접수일", t: "date", req: 1, value: TODAY, hint: "우리가 문의를 받은 날" }, { n: "first", l: "최초문의일", t: "date", hint: "같은 날이면 비워 둡니다" },
      { n: "name", l: "고객명", req: 1 }, { n: "phone", l: "전화번호", req: 1, ph: "010-0000-0000", hint: "저장하면 가려집니다" },
      { n: "industry", l: "업종" }, { n: "cat", l: "분류", t: "select", o: S.inqCats, req: 1 },
      { n: "biz", l: "사업자유무", t: "select", o: ["사업자", "비사업자", "미확인"], req: 1 }, { n: "status", l: "진행 상황", t: "select", o: INQ_ST },
      { n: "body", l: "문의 내용", t: "textarea", full: 1 },
    ], {}, function (v) {
      if (v.first && v.first > v.date) { toast("최초문의일은 접수일보다 늦을 수 없습니다."); return false }
      v.id = nid(); v.by = S.user; v.calls = []
      if (v.first === v.date) v.first = ""
      S.inquiries.unshift(v)
      toast("문의를 등록했습니다.")
    })
  })
  Demo.on("inqView", function (d) { inqModal(d.id) })
  function inqModal(id) {
    var x = findIn(S.inquiries, id)
    openModal("고객문의 상세, " + x.name, '<div class="p-5 text-[13px]"><div class="grid grid-cols-2 gap-3 mb-4">' + [["접수일", dot(x.date)], ["최초문의일", x.first ? dot(x.first) : ""], ["분류", x.cat], ["업종", x.industry], ["사업자유무", x.biz], ["진행 상황", x.status]].map(function (p) { return '<div><div class="text-gray-500">' + p[0] + '</div><b>' + E(p[1]) + "</b></div>" }).join("") + '</div><div class="text-gray-500 mb-1">전화번호</div><div class="mb-4">' + masked("inq:" + x.id, x.phone, maskPhone(x.phone), "고객문의 전화번호, " + x.name) + '</div><div class="text-gray-500 mb-1">문의 내용</div><div class="bg-gray-50 rounded-lg p-3 mb-4">' + E(x.body) + '</div><div class="font-bold mb-2">통화 결과</div>' +
      (x.calls.length ? x.calls.map(function (c) { return '<div class="border-b py-2"><span class="text-gray-500">' + E(c.at) + " · " + E(c.by) + "</span><br>" + E(c.t) + "</div>" }).join("") : '<div class="text-gray-400 mb-2">아직 기록이 없습니다.</div>') +
      '<form data-submit="callAdd" class="flex gap-2 mt-3"><input type="hidden" name="id" value="' + x.id + '"><input class="inp inp-sm" name="t" required placeholder="통화 결과를 남기세요"><button class="btn btn-p btn-x">기록</button></form></div>')
  }
  Demo.on("callAdd", function (v) { var x = findIn(S.inquiries, v.id); x.calls.push({ at: nowStr(), by: me().name, t: v.t }); toast("통화 결과를 남겼습니다."); inqModal(x.id) })

  /* ───────── 재고 관리함 ───────── */
  function stockOf(brand, item) {
    var s = 0
    S.stockHist.forEach(function (h) { if (h.brand === brand && h.item === item) s += h.type === "출고" ? -h.qty : h.qty })
    return s
  }
  function pageStock(r) {
    var brands = Object.keys(S.stockItems)
    var brand = q(r, "brand", brands[0])
    var items = S.stockItems[brand] || []
    var item = q(r, "item", items[0] || "")
    var h = '<div class="card p-2.5 flex flex-wrap gap-1.5 items-center mb-3"><b class="text-[13px] px-2">총 재고</b>' + pills(brands, brand, "stBrand") + (isMaster() ? '<button class="btn btn-x ml-auto" data-act="stAddBrand">+ 브랜드</button>' : "") + "</div>"
    h += '<div class="card p-2.5 flex flex-wrap gap-1.5 items-center mb-4">' + items.map(function (it) { return '<button class="pill' + (it === item ? " on" : "") + '" data-act="stItem" data-v="' + E(it) + '"><b>' + E(it) + '</b> <span class="opacity-70 ml-1">' + stockOf(brand, it) + "</span></button>" }).join("") + (isMaster() ? '<button class="btn btn-x ml-auto" data-act="stAddItem" data-brand="' + E(brand) + '">+ 품목</button>' + (item ? '<button class="btn btn-x btn-r" data-act="stDelItem" data-brand="' + E(brand) + '" data-item="' + E(item) + '">품목 삭제</button>' : "") : "") + "</div>"
    if (!item) return h + '<div class="card p-10 text-center text-gray-500 text-sm">품목이 없습니다.</div>'
    var hist = S.stockHist.filter(function (x) { return x.brand === brand && x.item === item }).sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : a.id - b.id })
    var run = 0
    hist.forEach(function (x) { run += x.type === "출고" ? -x.qty : x.qty; x._bal = run })
    hist.reverse()
    h += '<div class="flex flex-wrap items-center gap-2 mb-3"><span class="text-[13px] text-gray-500">[' + E(brand) + "] <b class=\"text-gray-900\">" + E(item) + '</b> 재고 · 현재고 <b class="text-gray-900 text-[15px]">' + stockOf(brand, item) + '</b>개</span><div class="ml-auto flex gap-2"><button class="btn" data-act="stMove" data-t="입고">📥 입고</button><button class="btn" data-act="stMove" data-t="출고">📤 출고</button><button class="btn" data-act="stMove" data-t="반품">↩ 반품</button></div></div>'
    h += '<div class="card overflow-x-auto"><table class="tbl"><thead><tr><th>일자</th><th>유형</th><th>수량</th><th>잔량</th><th>단말기번호</th><th>담당/수령</th><th>메모</th><th>등록자</th><th class="r">관리</th></tr></thead><tbody>' +
      (hist.length ? hist.map(function (x) {
        var c = x.type === "출고" ? "red" : x.type === "입고" ? "blue" : "amber"
        return "<tr><td>" + dot(x.date) + "</td><td>" + badge(x.type, c) + '</td><td class="b" style="color:' + (x.type === "출고" ? "#ef4444" : "#3182f6") + '">' + (x.type === "출고" ? "−" : "+") + x.qty + '</td><td class="b">' + x._bal + "</td><td>" + E(x.serial || "") + "</td><td>" + E(x.partner || "") + "</td><td>" + E(x.memo || "") + "</td><td>" + E(nm(x.by)) + '</td><td class="r"><button class="text-[13px] text-gray-600 hover:text-red-500" data-act="del" data-kind="stockHist" data-id="' + x.id + '">삭제</button></td></tr>'
      }).join("") : emptyRow(9, "이력이 없습니다.")) + "</tbody></table></div><p class=\"help mt-3\">잘못 넣은 이력은 수정할 수 없습니다. 지우고 다시 넣습니다. 단말기 번호는 메모용이라 중복 검사·검색이 되지 않습니다.</p>"
    return h
  }
  Demo.on("stBrand", function (d) { go("/stock?brand=" + encodeURIComponent(d.v)) })
  Demo.on("stItem", function (d) { var b = Demo.route().query.brand || Object.keys(S.stockItems)[0]; go("/stock?brand=" + encodeURIComponent(b) + "&item=" + encodeURIComponent(d.v)) })
  Demo.on("stMove", function (d) {
    var r = Demo.route()
    var brand = r.query.brand || Object.keys(S.stockItems)[0]
    var item = r.query.item || S.stockItems[brand][0]
    formModal((d.t === "입고" ? "📥 " : d.t === "출고" ? "📤 " : "↩ ") + d.t + ", " + item, [
      { n: "date", l: "일자", t: "date", req: 1, value: TODAY }, { n: "qty", l: "수량", t: "number", req: 1 },
      { n: "partner", l: d.t === "입고" ? "입고처" : "상대처 (가맹점)" }, { n: "serial", l: "단말기 번호 (메모용)" }, { n: "memo", l: "메모", full: 1 },
    ], {}, function (v) {
      var qn = Math.floor(+v.qty)
      if (!(qn > 0)) { toast("수량을 1 이상 넣어 주세요."); return false }
      if (d.t === "출고" && qn > stockOf(brand, item)) { toast("현재고(" + stockOf(brand, item) + "개)보다 많은 수량은 출고되지 않습니다."); return false }
      S.stockHist.push({ id: nid(), brand: brand, item: item, type: d.t, qty: qn, date: v.date, partner: v.partner, serial: v.serial, memo: v.memo, by: S.user })
      toast(d.t + " " + qn + "개를 반영했습니다. 현재고 " + stockOf(brand, item) + "개")
    })
  })
  Demo.on("stAddBrand", function () { formModal("재고 브랜드 추가", [{ n: "b", l: "브랜드", req: 1, full: 1 }], {}, function (v) { S.stockItems[v.b] = S.stockItems[v.b] || []; toast("브랜드를 추가했습니다.") }) })
  Demo.on("stAddItem", function (d) { formModal("품목 추가, " + d.brand, [{ n: "i", l: "품목명", req: 1, full: 1 }], {}, function (v) { S.stockItems[d.brand].push(v.i); toast("품목을 추가했습니다.") }) })
  Demo.on("stDelItem", function (d) {
    if (!confirm("품목을 지우면 그 품목의 입출고 이력이 전부 함께 사라집니다. 계속할까요?")) return
    S.stockItems[d.brand] = S.stockItems[d.brand].filter(function (x) { return x !== d.item })
    S.stockHist = S.stockHist.filter(function (h) { return !(h.brand === d.brand && h.item === d.item) })
    toast("품목을 삭제했습니다.")
    go("/stock?brand=" + encodeURIComponent(d.brand))
  })

  /* ───────── 통합 마케팅 관리 ───────── */
  var MK_TABS = [["ad", "📊 광고 성과 리포트"], ["lead", "🧲 고객 유입·리드 현황"], ["promo", "🎁 프로모션·캠페인"], ["budget", "💵 예산·지출 내역"], ["review", "⭐ 리뷰 작업"], ["cafe", "☕ 카페·채널 관리"], ["sns", "✍️ SNS/블로그 템플릿"], ["prompt", "🤖 AI 프롬프트"], ["script", "🎬 영업 스크립트"], ["rival", "🥊 경쟁사 정책"], ["rank", "🎯 노출순위"], ["login", "🔑 로그인정보"]]
  var SPEC = {
    promo: { key: "promos", title: "프로모션", fields: function () { return [{ n: "status", l: "진행상태", t: "select", o: ["진행중", "예정", "종료"], req: 1 }, { n: "name", l: "프로모션명", req: 1 }, { n: "period", l: "진행기간", ph: "예: 2026.07.01~08.31" }, { n: "brand", l: "적용 브랜드", t: "select", o: ["전 브랜드"].concat(BRANDS) }, { n: "share", l: "판매 대비 비중", ph: "예: 22%" }, { n: "memo", l: "비고" }] } },
    expense: { key: "expenses", title: "지출", fields: function () { return [{ n: "date", l: "작성일", t: "date", req: 1, value: TODAY }, { n: "item", l: "항목", req: 1, ph: "무엇에 썼는지" }, { n: "qty", l: "수량", t: "number" }, { n: "amount", l: "금액", t: "number", req: 1, hint: "숫자만" }, { n: "payer", l: "결제자", value: me().name }, { n: "method", l: "결제방법", t: "select", o: ["법인카드", "현금", "계좌이체", "기타"] }, { n: "memo", l: "비고" }, { n: "addr", l: "주소" }, { n: "etc", l: "기타사항", full: 1 }] } },
    review: { key: "reviews", title: "리뷰", fields: function (x) {
      if ((x && x.ch) === "당근마켓") return [{ n: "date", l: "등록일", t: "date", value: TODAY }, { n: "name", l: "이름", req: 1 }, { n: "nick", l: "닉네임" }, { n: "display", l: "전시상태", t: "select", o: ["노출중", "숨김", "삭제"] }, { n: "pay", l: "지급금액", t: "number" }, { n: "refund", l: "환불정보" }]
      return [{ n: "date", l: "등록일", t: "date", value: TODAY }, { n: "order", l: "주문번호" }, { n: "product", l: "상품명", req: 1 }, { n: "pno", l: "상품번호" }, { n: "qty", l: "수량", t: "number", value: 1 }, { n: "amount", l: "금액", t: "number", value: 0 }, { n: "buyer", l: "구매자명" }, { n: "buyerId", l: "구매자 ID" }, { n: "reviewed", l: "리뷰여부", t: "select", o: ["미등록", "등록완료"] }, { n: "rdate", l: "리뷰등록일", t: "date" }, { n: "display", l: "전시상태", t: "select", o: ["노출중", "숨김", "삭제"] }, { n: "recruit", l: "모집여부", t: "select", o: ["O", "X"] }, { n: "refund", l: "환불정보" }, { n: "ramount", l: "환불금액", t: "number" }, { n: "rrdate", l: "환불일", t: "date" }]
    } },
    cafe: { key: "cafes", title: "카페/채널", fields: function () { return [{ n: "name", l: "카페명", req: 1 }, { n: "industry", l: "업종" }, { n: "members", l: "회원수", t: "number" }, { n: "url", l: "카페 링크(URL)" }, { n: "ask", l: "광고 문의", t: "select", o: ["O", "X"] }, { n: "status", l: "광고 상태", t: "select", o: ["문의전", "대기", "진행중", "종료"] }, { n: "period", l: "광고 기간" }, { n: "price", l: "단가" }, { n: "mgr", l: "담당자", value: me().name }, { n: "memo", l: "메모" }] } },
    sns: { key: "sns", title: "카피", fields: function () { return [{ n: "platform", l: "활용 플랫폼", req: 1, ph: "예: 인스타그램, 블로그" }, { n: "point", l: "소구 포인트" }, { n: "main", l: "메인 카피", req: 1, full: 1 }, { n: "sub", l: "서브 카피", full: 1 }, { n: "tags", l: "해시태그", full: 1 }, { n: "perf", l: "성과 메모", full: 1 }] } },
    prompt: { key: "prompts", title: "프롬프트", fields: function () { return [{ n: "ai", l: "AI 플랫폼", req: 1, ph: "예: ChatGPT" }, { n: "kind", l: "사용 종류", t: "select", o: ["글", "사진", "영상", "기타"] }, { n: "title", l: "프롬프트 제목", req: 1, full: 1 }, { n: "body", l: "프롬프트 내용", t: "textarea", rows: 5, req: 1, full: 1, ph: "고객 정보나 사내 기밀을 넣지 않습니다" }] } },
    script: { key: "scripts", title: "스크립트", fields: function () { return [{ n: "type", l: "질문 유형", req: 1, ph: "예: 가입/개통, 해지, 정산" }, { n: "q", l: "고객 질문", req: 1 }, { n: "a", l: "답변 스크립트", t: "textarea", rows: 5, req: 1, full: 1 }] } },
    rival: { key: "rivals", title: "경쟁사 정책", fields: function () { return [{ n: "target", l: "대상업체", req: 1 }, { n: "date", l: "작성일", t: "date", value: TODAY }, { n: "device", l: "단말기 종류" }, { n: "cost", l: "구매비용" }, { n: "join", l: "가맹비/개통비" }, { n: "fee2", l: "관리비" }, { n: "docs", l: "필요서류" }, { n: "settle", l: "정산일" }, { n: "rate", l: "수수료율" }, { n: "instant", l: "즉시입금" }, { n: "install", l: "초기설치비용" }, { n: "as", l: "AS 출장비용" }, { n: "night", l: "야간·공휴일지원" }, { n: "paper", l: "감열지" }, { n: "penalty", l: "위약금" }, { n: "ret", l: "단말기반납" }] } },
    login: { key: "logins", title: "로그인정보", fields: function (x) { return [{ n: "ch", l: "채널", req: 1 }, { n: "name", l: "구좌명", req: 1 }, { n: "lid", l: "ID", req: 1 }, { n: "pw", l: "비밀번호", req: !x, ph: x ? "비우면 기존 값 유지" : "" }, { n: "memo", l: "메모", full: 1 }] } },
    shared: { key: "shared", title: "공용 계정", fields: function () { var g = isMaster() ? ["공용", "CS·TM", "마케팅", "경영지원", "관리자"] : ["공용", me().dept]; return [{ n: "group", l: "그룹", t: "select", o: g }, { n: "platform", l: "플랫폼", req: 1 }, { n: "link", l: "링크" }, { n: "lid", l: "로그인 ID", req: 1 }, { n: "pw", l: "패스워드", ph: "수정 시 비우면 기존 값 유지" }, { n: "owner", l: "책임자", value: me().name }, { n: "memo", l: "메모", full: 1 }] } },
    ledger: { key: "ledger", title: "입출금", fields: function () { return [{ n: "date", l: "날짜 (통장에 찍힌 날)", t: "date", req: 1, value: TODAY }, { n: "io", l: "구분", t: "select", o: ["입금", "출금"] }, { n: "desc", l: "적요", req: 1 }, { n: "party", l: "거래처" }, { n: "amount", l: "금액 (출금도 양수)", t: "number", req: 1 }, { n: "memo", l: "메모" }] } },
  }
  var NUMF = { qty: 1, amount: 1, members: 1, pay: 1, ramount: 1 }
  function applyVals(x, v) {
    Object.keys(v).forEach(function (k) {
      if ((k === "pw") && !v[k] && x.pw) return
      x[k] = NUMF[k] ? +v[k] || 0 : v[k]
    })
  }
  Demo.on("newItem", function (d) {
    var sp = SPEC[d.kind]
    var base = d.ch ? { ch: d.ch } : {}
    formModal(sp.title + " 등록" + (d.ch ? ", " + d.ch : ""), sp.fields(base), {}, function (v) {
      if (v.amount != null && v.amount !== "" && +v.amount < 0) { toast("금액은 양수로 적습니다."); return false }
      var x = { id: nid(), by: S.user }
      if (d.ch) x.ch = d.ch
      if (d.kind === "prompt" || d.kind === "sns" || d.kind === "script") x.date = TODAY
      applyVals(x, v)
      S[sp.key].unshift(x)
      toast(sp.title + "을(를) 등록했습니다.")
    })
  })
  Demo.on("editItem", function (d) {
    var sp = SPEC[d.kind], x = findIn(S[sp.key], d.id)
    var vals = {}
    Object.keys(x).forEach(function (k) { vals[k] = k === "pw" ? "" : x[k] })
    formModal(sp.title + " 수정", sp.fields(x), vals, function (v) { applyVals(x, v); if (d.kind === "sns" || d.kind === "script" || d.kind === "prompt") x.date = TODAY; toast("수정했습니다.") })
  })
  function pageMarketing(r) {
    var tab = q(r, "tab", "ad")
    var h = '<div class="card p-2.5 flex flex-wrap gap-1.5 mb-4">' + pills(MK_TABS, tab, "mkTab") + "</div>"
    var f = { ad: mkAd, lead: mkLead, promo: mkPromo, budget: mkBudget, review: mkReview, cafe: mkCafe, sns: mkSns, prompt: mkPrompt, script: mkScript, rival: mkRival, rank: mkRank, login: mkLogin }[tab] || mkAd
    return h + f(r)
  }
  Demo.on("mkTab", function (d) { go("/marketing?tab=" + d.v) })
  function addBtn(kind, label, extra) { return '<div class="flex justify-end mb-3"><button class="btn btn-p" data-act="newItem" data-kind="' + kind + '"' + (extra || "") + ">" + label + "</button></div>" }
  function tbl(heads, rows, n, empty) { return '<div class="card overflow-x-auto"><table class="tbl"><thead><tr>' + heads.map(function (x) { return "<th" + (x.charAt(0) === ">" ? ' class="r"' : "") + ">" + E(x.replace(/^>/, "")) + "</th>" }).join("") + "</tr></thead><tbody>" + (rows.length ? rows.join("") : emptyRow(heads.length, empty || "등록된 항목이 없습니다.")) + "</tbody></table></div>" }

  function adPeriods(mode) {
    var out = []
    if (mode === "week") {
      var d = new Date(TODAY + "T00:00:00")
      var mon = new Date(d); mon.setDate(d.getDate() - ((d.getDay() + 6) % 7))
      for (var i = 0; i < 4; i++) {
        var s = new Date(mon); s.setDate(mon.getDate() - 7 * i)
        var e = new Date(s); e.setDate(s.getDate() + 6)
        var f = function (x) { return x.getFullYear() + "-" + pad(x.getMonth() + 1) + "-" + pad(x.getDate()) }
        out.push({ key: f(s), label: (s.getMonth() + 1) + "/" + s.getDate() + "주", from: f(s), to: f(e), ym: f(s).slice(0, 7), days: 7 })
      }
    } else {
      for (var k = 0; k < 3; k++) { var ym = ymShift(YM, -k); out.push({ key: ym, label: +ym.slice(5) + "월", from: ym + "-01", to: ym + "-" + pad(lastDay(ym)), ym: ym, days: lastDay(ym) }) }
    }
    return out
  }
  function mkAd(r) {
    var mode = q(r, "mode", "month"), media = q(r, "media", "메타"), acct = q(r, "acct", "본계정")
    var periods = adPeriods(mode)
    var p = periods.filter(function (x) { return x.key === r.query.p })[0] || periods[0]
    var yest = Demo.day(-1)
    var to = p.to < yest ? p.to : yest
    var link = function (o) { var qq = { tab: "ad", mode: mode, media: media, p: p.key, acct: acct }; Object.keys(o).forEach(function (k) { qq[k] = o[k] }); return "#/marketing?" + Object.keys(qq).map(function (k) { return k + "=" + encodeURIComponent(qq[k]) }).join("&") }
    var h = '<div class="note-blue mb-4">CS팀 상담대장의 유입 경로를 그대로 활용해 채널별 상담건수·구매전환·전환율·건당 고객확보비용(CPA)이 자동으로 계산됩니다. 같은 데이터를 다시 입력하지 않습니다. (네이버 = 상담대장 "파워링크", 메타 = "SNS", 당근 = "당근" 경로)</div>'
    h += '<div class="flex flex-wrap items-center gap-2 mb-2"><div class="inline-flex border border-gray-200 rounded-xl p-1 bg-white"><a class="seg' + (mode === "month" ? " on" : "") + '" href="' + link({ mode: "month", p: "" }) + '">월별</a><a class="seg' + (mode === "week" ? " on" : "") + '" href="' + link({ mode: "week", p: "" }) + '">주별</a></div>' + periods.map(function (x) { return '<a class="seg' + (x.key === p.key ? " on" : "") + '" href="' + link({ p: x.key }) + '">' + x.label + "</a>" }).join("") + "</div>"
    h += '<p class="help mb-3">' + p.from + " ~ " + (p.from > yest ? "(집계 전)" : to) + " · 진행 중인 기간은 어제까지만 집계 · 네이버·메타 광고비는 실시간 조회</p>"
    h += '<div class="flex items-center gap-1 mb-4"><span class="text-[13px] text-gray-500 mr-2">매체</span>' + ["메타", "네이버", "당근"].map(function (m) { return '<a class="seg' + (m === media ? " on" : "") + '" href="' + link({ media: m }) + '">' + m + "</a>" }).join("") + "</div>"
    if (p.from > yest) return h + '<div class="card p-12 text-center text-gray-500 text-sm">아직 반영된 데이터가 없습니다.</div>'
    var list = S.consults.filter(function (c) { return c.route === MEDIA_ROUTE[media] && c.date >= p.from && c.date <= to })
    var cnt = list.length, buy = list.filter(function (c) { return c.buy === "구매완료" }).length
    var rate = cnt ? Math.round((buy / cnt) * 100) : 0
    var ratio = Math.min(1, (Math.round((new Date(to) - new Date(p.from)) / 86400000) + 1) / lastDay(p.ym))
    if (mode === "week") ratio = (Math.round((new Date(to) - new Date(p.from)) / 86400000) + 1) / lastDay(p.ym)
    var camps = [], spend = 0
    if (media === "메타") camps = S.ads["메타:" + p.ym] || []
    if (media === "네이버") { ["본계정", "브랜드계정"].forEach(function (a) { (S.ads["네이버:" + a + ":" + p.ym] || []).forEach(function (c) { spend += Math.round(c.spend * ratio) }) }); camps = S.ads["네이버:" + acct + ":" + p.ym] || [] }
    if (media === "메타") camps.forEach(function (c) { spend += Math.round(c.spend * ratio) })
    if (media === "당근") spend = +(S.carrotSpend[p.key] || 0)
    var cpa = buy ? Math.round(spend / buy) : 0
    h += '<div class="grid sm:grid-cols-3 gap-3 mb-4">' +
      [[media + " 상담 건수", cnt + " 건", "#111827", "상담대장 자동 연동"], [media + " 구매전환", buy + " 건", "#15803d", "전환율 " + rate + "%"], [media + " 전환율", rate + "%", "#3182f6", "구매전환 ÷ 상담건수"]].map(function (c) { return '<div class="card p-4 flex items-start"><div><div class="text-[13px] font-semibold">' + c[0] + '</div><div class="text-[11px] text-gray-500 mt-2">' + c[3] + '</div></div><div class="ml-auto text-[22px] font-extrabold" style="color:' + c[2] + '">' + c[1] + "</div></div>" }).join("") + "</div>"
    h += '<div class="grid sm:grid-cols-2 gap-3 max-w-[560px] mb-5"><div><label class="lbl">이 채널 광고비 ' + (media === "당근" ? "(직접 입력 · 저장되지 않음)" : "(" + media + " API 자동)") + "</label>" + (media === "당근" ? '<input class="inp" type="number" min="0" placeholder="광고비 입력" value="' + E(S.carrotSpend[p.key] || "") + '" data-change="carrotSpend" data-k="' + p.key + '">' : '<input class="inp" readonly value="이 기간 집행 광고비 ' + won(spend) + '">') + '</div><div><label class="lbl">건당 고객확보비용(CPA) 자동계산</label><input class="inp" readonly value="' + (buy ? won(cpa) : "구매전환 0건, 계산 불가") + '"></div></div>'
    if (media === "네이버") h += '<div class="flex gap-1 mb-2"><span class="text-[12px] text-gray-500 mr-1 self-center">광고 계정</span>' + ["본계정", "브랜드계정"].map(function (a) { return '<a class="seg' + (a === acct ? " on" : "") + '" href="' + link({ acct: a }) + '">' + a + "</a>" }).join("") + '<span class="help self-center ml-2">표는 선택 계정만, 위 광고비·CPA는 계정 전체 합계</span></div>'
    h += '<div class="text-[14px] font-bold mb-2">캠페인별 상세 (당근/메타/네이버 동일 양식)</div>'
    var rows = media === "당근" ? [] : camps.map(function (c) {
      var sp2 = Math.round(c.spend * ratio), imp = Math.round(c.imp * ratio), clk = Math.round(c.clk * ratio)
      return "<tr><td>" + p.label + "</td><td>" + media + '</td><td class="b">' + E(c.name) + "</td><td>" + E(c.target) + '</td><td class="r">' + won(sp2) + '</td><td class="r">' + N(imp) + '</td><td class="r">' + N(clk) + '</td><td class="r">' + (imp ? ((clk / imp) * 100).toFixed(2) : 0) + '%</td><td class="r">' + won(clk ? sp2 / clk : 0) + '</td><td class="c text-gray-400"></td><td class="c text-gray-400"></td><td class="c text-gray-400"></td><td class="c text-gray-400"></td><td></td></tr>'
    })
    h += tbl(["기간", "매체", "캠페인명", "타겟/키워드", ">광고비", ">노출수", ">클릭수", ">클릭률", ">평균클릭비용", "문의수", "구매전환", "전환율", "건당비용", "비고"], rows, 14, media === "당근" ? "당근 광고는 연동 준비중입니다. 광고비만 위에 직접 입력합니다." : "이 기간에 표시할 " + media + " 캠페인이 없습니다.")
    h += '<p class="help mt-2">* 문의수·구매전환·전환율·건당비용은 캠페인 단위가 아닌 채널 전체 기준으로 상단 카드에서 자동 집계됩니다.</p>'
    return h
  }
  Demo.on("carrotSpend", function (v, el) { S.carrotSpend[el.dataset.k] = Math.max(0, +v || 0); Demo.update() })
  function mkLead() {
    var list = S.consults.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1 }).slice(0, 200)
    return '<div class="note-blue mb-4">상담대장(CS)에 이미 입력된 데이터를 그대로 불러온 읽기 전용 화면입니다. 같은 고객을 다시 입력하지 않습니다. 최신 상담 200건까지 표시합니다.</div>' +
      tbl(["유입일자", "유입경로", "가맹점/고객명", "상태", "특이사항", "영업담당자"], list.map(function (c) { return "<tr><td>" + dot(c.date) + "</td><td>" + E(c.route) + '</td><td class="b">' + E(c.name) + "</td><td>" + buyBadge(c.buy) + "</td><td>" + (c.note ? E(c.note) : '<span class="text-gray-400"></span>') + "</td><td>" + E(nm(c.by)) + "</td></tr>" }))
  }
  function mkPromo() {
    return '<div class="note-blue mb-4">진행중 상태 중 가장 최근 등록 건이 홈 화면 메인 배너에 자동 노출되며, 종료 처리 시 배너에서 자동으로 내려갑니다. 기간이 지나도 상태는 자동으로 바뀌지 않습니다.</div>' + addBtn("promo", "+ 프로모션 등록") +
      tbl(["진행상태", "프로모션명", "진행기간", "적용 브랜드", "판매 대비 비중", "결과 보고서", "비고", ">관리"], S.promos.map(function (p) { return "<tr><td>" + badge(p.status, p.status === "진행중" ? "green" : p.status === "예정" ? "blue" : "gray") + '</td><td class="b">' + E(p.name) + "</td><td>" + E(p.period) + "</td><td>" + E(p.brand) + "</td><td>" + E(p.share) + '</td><td class="text-gray-400">-</td><td>' + E(p.memo) + '</td><td class="r">' + manage("promo", p) + "</td></tr>" })) + '<p class="help mt-2">* 수정·삭제 버튼은 본인이 등록한 줄에만 보입니다 (마스터는 전부). 종료된 프로모션은 삭제하지 말고 종료로 바꿉니다.</p>'
  }
  function mkBudget(r) {
    var from = q(r, "from", ""), to = q(r, "to", "")
    var list = S.expenses.filter(function (x) { return (!from || x.date >= from) && (!to || x.date <= to) }).sort(function (a, b) { return a.date < b.date ? 1 : -1 })
    var sum = list.reduce(function (s, x) { return s + x.amount }, 0)
    return '<div class="flex flex-wrap items-start gap-3 mb-3"><div class="card p-3 flex flex-wrap items-center gap-2"><b class="text-[13px]">기간 조회</b><input type="date" class="inp inp-sm w-auto" id="bgFrom" value="' + from + '"> ~ <input type="date" class="inp inp-sm w-auto" id="bgTo" value="' + to + '"><button class="btn btn-x" data-act="bgSearch">조회</button></div><div class="ml-auto flex items-center gap-3"><span class="text-[13px] text-gray-600">합계 <b class="text-gray-900">' + won(sum) + '</b></span><button class="btn btn-p" data-act="newItem" data-kind="expense">+ 지출 등록</button></div></div>' +
      tbl(["작성일", "항목", ">수량", ">금액", "결제자", "결제방법", "비고", "주소", "기타사항", ">관리"], list.map(function (x) { return "<tr><td>" + dot(x.date) + '</td><td class="b">' + E(x.item) + '</td><td class="r">' + N(x.qty) + '</td><td class="r b">₩ ' + N(x.amount) + "</td><td>" + E(x.payer) + "</td><td>" + E(x.method) + "</td><td>" + E(x.memo) + "</td><td>" + E(x.addr || "-") + "</td><td>" + E(x.etc || "-") + '</td><td class="r">' + manage("expense", x) + "</td></tr>" })) + '<p class="help mt-2">이 화면은 마케팅 지출만 다룹니다. 회사 전체 입출금은 매입매출에서 관리합니다.</p>'
  }
  Demo.on("bgSearch", function () { go("/marketing?tab=budget&from=" + document.getElementById("bgFrom").value + "&to=" + document.getElementById("bgTo").value) })
  function mkReview(r) {
    var ch = q(r, "ch", "스마트스토어")
    var list = S.reviews.filter(function (x) { return x.ch === ch })
    var h = '<div class="flex items-center gap-1 mb-3"><span class="text-[13px] text-gray-500 mr-2">채널</span>' + ["스마트스토어", "당근마켓"].map(function (c) { return '<a class="seg' + (c === ch ? " on" : "") + '" href="#/marketing?tab=review&ch=' + encodeURIComponent(c) + '">' + c + "</a>" }).join("") + '<button class="btn btn-p ml-auto" data-act="newItem" data-kind="review" data-ch="' + ch + '">+ 리뷰 등록</button></div>'
    if (ch === "당근마켓") return h + tbl(["등록일", "이름", "닉네임", "전시상태", ">지급금액", "환불정보", ">관리"], list.map(function (x) { return "<tr><td>" + dot(x.date) + '</td><td class="b">' + E(x.name) + "</td><td>" + E(x.nick) + "</td><td>" + E(x.display) + '</td><td class="r">₩ ' + N(x.pay) + "</td><td>" + E(x.refund) + '</td><td class="r">' + manage("review", x) + "</td></tr>" }))
    return h + tbl(["등록일", "주문번호", "상품명", "상품번호", ">수량", ">금액", "구매자명", "구매자ID", "리뷰여부", "리뷰등록일", "전시상태", "모집여부", "환불정보", ">환불금액", "환불일", ">관리"], list.map(function (x) { return "<tr><td>" + dot(x.date) + '</td><td class="mono text-[12px]">' + E(x.order) + '</td><td class="b">' + E(x.product) + "</td><td>" + E(x.pno) + '</td><td class="r">' + N(x.qty) + '</td><td class="r">₩ ' + N(x.amount) + "</td><td>" + E(x.buyer) + "</td><td>" + E(x.buyerId) + "</td><td>" + badge(x.reviewed, x.reviewed === "등록완료" ? "green" : "gray") + "</td><td>" + E(x.rdate || "") + "</td><td>" + E(x.display) + "</td><td>" + E(x.recruit) + "</td><td>" + E(x.refund) + '</td><td class="r">₩ ' + N(x.ramount) + "</td><td>" + E(x.rrdate || "") + '</td><td class="r">' + manage("review", x) + "</td></tr>" })) + '<p class="help mt-2">구매자명·닉네임은 체험단 참여자의 개인정보입니다. 외부에 공유하지 않습니다.</p>'
  }
  function mkCafe() {
    return addBtn("cafe", "+ 카페/채널 등록") + tbl(["업종", "카페명", ">회원수", "광고 문의", "광고 상태", "광고 기간", "단가", "담당자", "메모", ">관리"], S.cafes.map(function (c) { return "<tr><td>" + E(c.industry) + '</td><td><a class="text-[#3182f6] underline" href="' + E(c.url || "#") + '" target="_blank" rel="noopener" data-act="fakeLink">' + E(c.name) + '</a></td><td class="r">' + N(c.members) + "명</td><td>" + E(c.ask) + "</td><td>" + badge(c.status, c.status === "진행중" ? "green" : c.status === "대기" ? "amber" : "gray") + "</td><td>" + E(c.period) + "</td><td>" + E(c.price) + "</td><td>" + E(c.mgr) + "</td><td>" + E(c.memo) + '</td><td class="r">' + manage("cafe", c) + "</td></tr>" })) + '<p class="help mt-2">* 카페명 클릭 시 새 탭에서 해당 카페로 이동합니다 (체험판에서는 이동하지 않음). 광고가 끝나면 상태를 종료로 바꿉니다.</p>'
  }
  Demo.on("fakeLink", function () { toast("체험판에서는 외부 링크로 이동하지 않습니다.") })
  function mkSns() {
    return addBtn("sns", "+ 카피 등록") + '<div class="grid lg:grid-cols-2 gap-4">' + S.sns.map(function (s) {
      return '<div class="card p-5"><div class="flex items-center gap-2"><b class="text-[14px]">' + E(s.platform) + " · " + dot(s.date) + '</b><span class="ml-auto">' + (mine(s) ? '<button class="btn btn-x" data-act="editItem" data-kind="sns" data-id="' + s.id + '">수정</button> <button class="btn btn-x btn-r" data-act="del" data-kind="sns" data-id="' + s.id + '">삭제</button>' : "") + '</span></div><div class="text-[12px] text-gray-500 mt-2">소구 포인트: ' + E(s.point) + '</div><div class="text-[15px] font-bold mt-2">' + E(s.main) + '</div><div class="text-[13px] text-gray-700 mt-1">' + E(s.sub) + '</div><div class="text-[13px] text-[#3182f6] mt-2">' + E(s.tags) + "</div>" + (s.perf ? '<div class="text-[11px] text-gray-500 mt-2">성과 메모: ' + E(s.perf) + "</div>" : "") + '<button class="btn btn-x mt-4" data-act="snsCopy" data-id="' + s.id + '">⧉ 복사</button></div>'
    }).join("") + "</div>"
  }
  Demo.on("snsCopy", function (d) { var s = findIn(S.sns, d.id); copyText(s.main + "\n" + s.sub + "\n" + s.tags); toast("메인 카피·서브 카피·해시태그를 함께 복사했습니다.") })
  function mkPrompt() {
    return addBtn("prompt", "+ 프롬프트 등록") + tbl(["업데이트일", "AI 플랫폼", "사용 종류", "프롬프트 제목", "작성자", ">관리"], S.prompts.map(function (p) { return "<tr><td>" + dot(p.date) + "</td><td>" + E(p.ai) + "</td><td>" + E(p.kind) + '</td><td class="b"><span title="' + E(p.body) + '" class="cursor-help">' + E(p.title) + '</span> <button class="ico ml-1" data-act="promptCopy" data-id="' + p.id + '" title="프롬프트 내용 복사">⧉</button></td><td>' + E(nm(p.by)) + '</td><td class="r">' + manage("prompt", p) + "</td></tr>" })) + '<p class="help mt-2">* 복사 버튼을 누르면 프롬프트 내용 전체가 클립보드에 복사됩니다(제목에 마우스를 올리면 내용 미리보기). 고객 정보나 사내 기밀을 입력하지 않습니다.</p>'
  }
  Demo.on("promptCopy", function (d) { copyText(findIn(S.prompts, d.id).body); toast("프롬프트 내용을 복사했습니다.") })
  function mkScript() {
    return addBtn("script", "+ 스크립트 등록") + tbl(["질문 유형", "고객 질문", "답변 스크립트", "작성자", "수정일", ">관리"], S.scripts.map(function (s) { return "<tr><td>" + E(s.type) + '</td><td class="b min-w-[180px] wrap">' + E(s.q) + '</td><td class="min-w-[320px] wrap"><div class="flex gap-2 items-start"><span class="flex-1">' + E(s.a) + '</span><button class="ico shrink-0" data-act="scriptCopy" data-id="' + s.id + '" title="답변 복사">⧉</button></div></td><td>' + E(nm(s.by)) + "</td><td>" + dot(s.date) + '</td><td class="r">' + manage("script", s) + "</td></tr>" })) + '<p class="help mt-2">이 화면은 말로 응대할 때, 상담템플릿은 문자·메일로 보낼 때 씁니다.</p>'
  }
  Demo.on("scriptCopy", function (d) { copyText(findIn(S.scripts, d.id).a); toast("답변 스크립트를 복사했습니다.") })
  function mkRival() {
    var cols = [["작성일", "date"], ["담당자", "mgr"], ["대상업체", "target"], ["단말기종류", "device"], ["구매비용", "cost"], ["가맹비/개통비", "join"], ["관리비", "fee2"], ["필요서류", "docs"], ["정산일", "settle"], ["수수료율", "rate"], ["즉시입금", "instant"], ["초기설치비용", "install"], ["AS출장비용", "as"], ["야간·공휴일지원", "night"], ["감열지", "paper"], ["위약금", "penalty"], ["단말기반납", "ret"]]
    return addBtn("rival", "+ 경쟁사 정책 등록") + tbl(cols.map(function (c) { return c[0] }).concat([">관리"]), S.rivals.map(function (x) { return "<tr>" + cols.map(function (c) { return '<td class="whitespace-nowrap' + (c[1] === "target" ? " b" : "") + '">' + E(c[1] === "date" ? dot(x.date) : x[c[1]]) + "</td>" }).join("") + '<td class="r">' + manage("rival", x) + "</td></tr>" })) + '<p class="help mt-2">대상업체만 필수입니다. 경쟁사 조건은 자주 바뀌므로 조사한 날짜를 작성일에 적습니다.</p>'
  }
  function mkRank() {
    var R = S.rank
    var ready = R.keywords.length && R.malls.length
    var h = '<div class="note-blue mb-4">쇼핑 검색에서 등록한 키워드로 검색했을 때 각 몰이 몇 위에 노출되는지 추적합니다. · 100위 밖은 "미노출".</div><div class="card p-4 mb-4 space-y-3">'
    h += '<div class="flex flex-wrap items-center gap-2"><span class="w-10 text-[13px] text-gray-600">키워드</span>' + R.keywords.map(function (k, i) { return '<span class="inline-flex items-center gap-1 border border-gray-200 rounded-full px-3 py-1 text-[13px]">' + E(k) + ' <button class="text-gray-400" data-act="rankDel" data-t="keywords" data-i="' + i + '">✕</button></span>' }).join("") + '<form data-submit="rankAdd" class="flex gap-1"><input type="hidden" name="t" value="keywords"><input class="inp inp-sm w-[140px]" name="v" placeholder="키워드 추가" required><button class="btn btn-x">추가</button></form></div>'
    h += '<div class="flex flex-wrap items-center gap-2"><span class="w-10 text-[13px] text-gray-600">몰</span>' + R.malls.map(function (k, i) { return '<span class="inline-flex items-center gap-1 border border-gray-200 rounded-full px-3 py-1 text-[13px]">' + E(k) + ' <button class="text-gray-400" data-act="rankDel" data-t="malls" data-i="' + i + '">✕</button></span>' }).join("") + '<form data-submit="rankAdd" class="flex gap-1"><input type="hidden" name="t" value="malls"><input class="inp inp-sm w-[140px]" name="v" placeholder="몰명 추가 (판매처 이름 그대로)" required><button class="btn btn-x">추가</button></form></div>'
    h += '<button class="btn ' + (ready ? "btn-p" : "") + '" data-act="rankRun"' + (ready ? "" : " disabled") + ">🔄 순위 갱신</button>" + (R.at ? '<span class="help ml-2">마지막 갱신 ' + E(R.at) + "</span>" : "") + "</div>"
    if (!R.result) return h + '<div class="card p-12 text-center text-gray-500 text-sm">추적할 <b>키워드</b>와 <b>몰</b>을 등록하고 <b>순위 갱신</b>을 눌러주세요.</div>'
    return h + tbl(["키워드"].concat(R.malls), R.keywords.map(function (k) { return '<tr><td class="b">' + E(k) + "</td>" + R.malls.map(function (m) { var v = (R.result[k] || {})[m]; return "<td>" + (v == null ? '<span class="text-gray-400"></span>' : v > 100 ? badge("미노출", "gray") : '<b class="text-[#3182f6]">' + v + "위</b>") + "</td>" }).join("") + "</tr>" })) + '<p class="help mt-2">자동으로 갱신되지 않습니다. 필요할 때 버튼을 누릅니다. 수정 기능은 없으니 지우고 다시 넣습니다.</p>'
  }
  Demo.on("rankAdd", function (v) { if (S.rank[v.t].indexOf(v.v) < 0) S.rank[v.t].push(v.v); Demo.update() })
  Demo.on("rankDel", function (d) { S.rank[d.t].splice(+d.i, 1); Demo.update() })
  Demo.on("rankRun", function () {
    var res = S.rank.result || {}
    S.rank.keywords.forEach(function (k) { res[k] = res[k] || {}; S.rank.malls.forEach(function (m) { var hv = hash(k + "|" + m + "|" + Date.now() % 7); res[k][m] = hv % 5 === 0 ? 101 : 1 + (hv % 60) }) })
    S.rank.result = res
    S.rank.at = nowStr()
    toast("순위를 갱신했습니다 (체험판: 가상 순위).")
    Demo.update()
  })
  function mkLogin() {
    return '<div class="note-red mb-4">⚠️ <b>마케팅 책임자 외 열람 금지</b>, 비밀번호는 암호화 저장되며, 보기·복사를 누르면 열람 기록(감사)이 남습니다. 사내 공용 계정은 공용 계정 관리에서 관리합니다.</div>' + addBtn("login", "+ 로그인정보 등록") +
      tbl(["채널", "구좌명", "ID", "비밀번호", "메모", ">관리"], S.logins.map(function (x) { return pwRow(x, "login", [E(x.ch), "<b>" + E(x.name) + "</b>"], "마케팅 로그인정보, " + x.ch) + "<td>" + E(x.memo) + '</td><td class="r">' + manage("login", x) + "</td></tr>" }))
  }
  function pwRow(x, kind, lead, what) {
    var k = kind + ":" + x.id
    return "<tr>" + lead.map(function (c) { return "<td>" + c + "</td>" }).join("") + '<td class="whitespace-nowrap">' + E(x.lid) + ' <button class="ico ml-1" data-act="copyId" data-kind="' + kind + '" data-id="' + x.id + '" title="ID 복사">⧉</button></td><td class="whitespace-nowrap"><span class="mono inline-block min-w-[110px]">' + (S.revealed[k] ? E(x.pw) : "••••••") + '</span> <button class="ico" data-act="reveal" data-k="' + k + '" data-what="' + E(what) + ' 비밀번호 보기" title="보기">👁</button> <button class="ico" data-act="copyPw" data-kind="' + kind + '" data-id="' + x.id + '" data-what="' + E(what) + '" title="복사">⧉</button></td>'
  }
  Demo.on("copyId", function (d) { copyText(findIn(S[SPEC[d.kind].key], d.id).lid); toast("ID를 복사했습니다.") })
  Demo.on("copyPw", function (d) { copyText(findIn(S[SPEC[d.kind].key], d.id).pw); logView(d.what + " 비밀번호 복사"); toast("비밀번호를 복사했습니다. 열람 기록이 남았습니다.") })

  /* ───────── 통합 인사 관리 ───────── */
  var HR_TABS = [["payroll", "💵 전사 급여대장"], ["leave", "📅 연차·휴가 관리"], ["sev", "💰 퇴직금 명세"], ["grade", "📈 호봉·근로기준"], ["roster", "👥 인원·퇴사자 명부"], ["rules", "📜 취업규칙"]]
  function pageHr(r) {
    var tab = q(r, "tab", "payroll")
    var h = '<div class="card p-2.5 flex flex-wrap gap-1.5 mb-4">' + pills(HR_TABS, tab, "hrTab") + "</div>"
    return h + ({ payroll: hrPayroll, leave: hrLeave, sev: hrSev, grade: hrGrade, roster: hrRoster, rules: hrRules }[tab] || hrPayroll)(r)
  }
  Demo.on("hrTab", function (d) { go("/hr?tab=" + d.v) })
  function staffIn(ym) { return S.staff.filter(function (s) { return s.join.slice(0, 7) <= ym && (s.status === "재직" || (s.out && s.out.slice(0, 7) >= ym)) }) }
  function payData(ym) {
    if (!S.payroll[ym]) {
      var rows = {}
      staffIn(ym).forEach(function (s) {
        var past = ym <= YM
        rows[s.id] = past ? { base: s.salary, allow: 200000, tax: Math.round(s.salary * 0.032 / 10) * 10, ins: Math.round(s.salary * 0.0945 / 10) * 10 } : { base: 0, allow: 0, tax: 0, ins: 0 }
      })
      S.payroll[ym] = { open: false, rows: rows }
    }
    return S.payroll[ym]
  }
  function payCalc(p) { var g = (+p.base || 0) + (+p.allow || 0), d = (+p.tax || 0) + (+p.ins || 0); return { gross: g, ded: d, net: g - d } }
  function hrPayroll(r) {
    var y = +q(r, "y", THIS_Y), m = +q(r, "m", THIS_M)
    var ym = y + "-" + pad(m)
    var pd = payData(ym)
    var staff = staffIn(ym)
    var h = '<div class="flex flex-wrap items-center gap-2 mb-3"><select class="inp inp-sm w-auto" data-change="payY">' + [THIS_Y - 1, THIS_Y].map(function (x) { return "<option" + (x === y ? " selected" : "") + ' value="' + x + '">' + x + "년</option>" }).join("") + '</select><select class="inp inp-sm w-auto" data-change="payM">' + Array.from({ length: 12 }, function (_, i) { return "<option" + (i + 1 === m ? " selected" : "") + ' value="' + (i + 1) + '">' + (i + 1) + "월</option>" }).join("") + '</select><span class="help ml-auto">금액을 입력하면 지급합계·공제합계·실지급액이 자동 계산되고 명세서에 반영됩니다.</span></div>'
    if (!pd.open) return h + '<div class="card p-8 text-center"><p class="text-[13px] text-gray-600 mb-4">' + y + "년 " + m + "월 대상 직원 " + staff.length + '명. 급여 열람 시 전 직원 급여가 복호화되며 열람 기록이 남습니다.</p><button class="btn btn-p px-5" data-act="payOpen" data-ym="' + ym + '">💵 이번 달 급여 열람</button></div>'
    var tot = { gross: 0, ded: 0, net: 0 }
    var rows = staff.map(function (s) {
      var p = pd.rows[s.id] = pd.rows[s.id] || { base: 0, allow: 0, tax: 0, ins: 0 }
      var c = payCalc(p)
      tot.gross += c.gross; tot.ded += c.ded; tot.net += c.net
      var inp = function (f) { return '<input class="inp inp-sm text-right w-[110px]" type="number" min="0" value="' + (+p[f] || 0) + '" data-input="payIn" data-ym="' + ym + '" data-sid="' + s.id + '" data-f="' + f + '">' }
      return '<tr><td class="b whitespace-nowrap">' + E(s.name) + ' <span class="text-gray-500 font-normal">' + E(s.pos) + "</span>" + (s.status === "퇴사" ? " " + badge("퇴사", "gray") : "") + "</td><td>" + inp("base") + "</td><td>" + inp("allow") + '</td><td class="r b" id="pg-' + s.id + '">' + won(c.gross) + "</td><td>" + inp("tax") + "</td><td>" + inp("ins") + '</td><td class="r b text-red-500" id="pd-' + s.id + '">' + won(c.ded) + '</td><td class="r b text-[#3182f6]" id="pn-' + s.id + '">' + won(c.net) + '</td><td class="r"><button class="btn btn-x" data-act="payslip" data-ym="' + ym + '" data-sid="' + s.id + '">명세서</button></td></tr>'
    })
    rows.push('<tr style="background:#f9fafb"><td class="b">합계</td><td></td><td></td><td class="r b" id="pg-t">' + won(tot.gross) + '</td><td></td><td></td><td class="r b" id="pd-t">' + won(tot.ded) + '</td><td class="r b" id="pn-t">' + won(tot.net) + "</td><td></td></tr>")
    return h + tbl(["사원", "기본급", "수당", ">지급합계", "소득세 등 공제", "4대보험", ">공제합계", ">실지급액", ">명세서"], rows) + '<div class="flex justify-end mt-3"><button class="btn btn-p" data-act="paySave">저장</button></div>'
  }
  Demo.on("payY", function (v) { go("/hr?tab=payroll&y=" + v + "&m=" + (Demo.route().query.m || THIS_M)) })
  Demo.on("payM", function (v) { go("/hr?tab=payroll&y=" + (Demo.route().query.y || THIS_Y) + "&m=" + v) })
  Demo.on("payOpen", function (d) { S.payroll[d.ym].open = true; logView("전사 급여대장 " + d.ym + " 열람"); toast("급여를 열람했습니다. 열람 기록이 남았습니다."); Demo.update() })
  Demo.on("payIn", function (v, el) {
    var pd = S.payroll[el.dataset.ym]
    pd.rows[el.dataset.sid][el.dataset.f] = Math.max(0, +v || 0)
    var c = payCalc(pd.rows[el.dataset.sid])
    document.getElementById("pg-" + el.dataset.sid).textContent = won(c.gross)
    document.getElementById("pd-" + el.dataset.sid).textContent = won(c.ded)
    document.getElementById("pn-" + el.dataset.sid).textContent = won(c.net)
    var t = { gross: 0, ded: 0, net: 0 }
    Object.keys(pd.rows).forEach(function (k) { if (document.getElementById("pg-" + k)) { var x = payCalc(pd.rows[k]); t.gross += x.gross; t.ded += x.ded; t.net += x.net } })
    document.getElementById("pg-t").textContent = won(t.gross)
    document.getElementById("pd-t").textContent = won(t.ded)
    document.getElementById("pn-t").textContent = won(t.net)
  })
  Demo.on("paySave", function () { toast("급여대장을 저장했습니다.") })
  Demo.on("payslip", function (d) {
    var s = findIn(S.staff, d.sid), p = S.payroll[d.ym].rows[d.sid], c = payCalc(p)
    var line = function (a, b, cl) { return '<div class="flex justify-between py-2 border-b border-gray-100"><span class="text-gray-600">' + a + '</span><b class="' + (cl || "") + '">' + b + "</b></div>" }
    openModal("급여명세서, " + d.ym.replace("-", "년 ") + "월", '<div class="p-6 text-[13px]"><div class="text-center mb-5"><div class="text-[18px] font-bold">급 여 명 세 서</div><div class="text-gray-500 mt-1">(가상) 주식회사 루미웍스 · ' + E(s.name) + " " + E(s.pos) + " · " + E(s.dept) + '</div></div><div class="grid sm:grid-cols-2 gap-6"><div><div class="font-bold mb-1">지급 내역</div>' + line("기본급", won(p.base)) + line("수당", won(p.allow)) + line("지급합계", won(c.gross)) + '</div><div><div class="font-bold mb-1">공제 내역</div>' + line("소득세 등", won(p.tax)) + line("4대보험", won(p.ins)) + line("공제합계", won(c.ded), "text-red-500") + '</div></div><div class="mt-5 p-4 rounded-xl bg-[#eef5ff] flex justify-between items-center"><span class="font-bold">실지급액</span><b class="text-[20px] text-[#3182f6]">' + won(c.net) + '</b></div><div class="flex justify-end mt-5"><button class="btn" data-act="print">🖨 인쇄</button></div></div>', { wide: 1 })
  })
  function annualLeave(join, asOf) {
    var j = new Date(join + "T00:00:00"), a = new Date(asOf + "T00:00:00")
    var months = (a.getFullYear() - j.getFullYear()) * 12 + (a.getMonth() - j.getMonth()) - (a.getDate() < j.getDate() ? 1 : 0)
    if (months < 12) return Math.max(0, Math.min(11, months))
    var years = Math.floor(months / 12)
    return Math.min(25, 15 + Math.floor((years - 1) / 2))
  }
  function hrLeave(r) {
    var y = +q(r, "y", THIS_Y)
    var asOf = y < THIS_Y ? y + "-12-31" : TODAY
    var staff = S.staff.filter(function (s) { return s.join.slice(0, 4) <= String(y) && (s.status === "재직" || (s.out && s.out.slice(0, 4) >= String(y))) })
    var rows = staff.map(function (s) {
      var key = y + ":" + s.id
      var auto = annualLeave(s.join, s.out && s.out < asOf ? s.out : asOf)
      var L = S.leave[key] = S.leave[key] || { used: hash(s.id + y) % (Math.floor(auto * 0.6) + 1), half: auto > 2 ? hash(s.id + "h" + y) % 3 : 0, override: "", memo: s.status === "퇴사" ? "퇴사 정산 완료" : "" }
      var total = L.override !== "" ? +L.override : auto
      var rem = total - L.used - L.half * 0.5
      return '<tr data-row="' + key + '"><td class="b whitespace-nowrap">' + E(s.name + " " + s.pos) + '</td><td class="text-gray-500">' + dot(s.join) + '</td><td class="whitespace-nowrap"><input class="inp inp-sm w-[64px] text-right" type="number" min="0" step="0.5" data-input="lvIn" data-k="' + key + '" data-f="override" data-auto="' + auto + '" value="' + (L.override !== "" ? L.override : auto) + '"> 일' + (L.override !== "" ? ' <span class="bd bd-amber">직접</span>' : "") + '</td><td class="whitespace-nowrap"><input class="inp inp-sm w-[64px] text-right" type="number" min="0" step="0.5" data-input="lvIn" data-k="' + key + '" data-f="used" value="' + L.used + '"> 일</td><td class="whitespace-nowrap"><input class="inp inp-sm w-[64px] text-right" type="number" min="0" data-input="lvIn" data-k="' + key + '" data-f="half" value="' + L.half + '"> 회</td><td class="b whitespace-nowrap" id="lv-' + key.replace(":", "-") + '" style="color:' + (rem < 0 ? "#ef4444" : "#111827") + '">' + rem.toFixed(1) + ' 일</td><td><input class="inp inp-sm min-w-[160px]" maxlength="500" data-input="lvIn" data-k="' + key + '" data-f="memo" value="' + E(L.memo) + '"></td><td class="r whitespace-nowrap"><button class="btn btn-p btn-x" data-act="lvSave" data-k="' + key + '">저장</button> <button class="btn btn-x" data-act="lvReset" data-k="' + key + '">자동값</button></td></tr>'
    })
    S.lvDraft = {}
    return '<div class="flex items-center gap-2 mb-3"><select class="inp inp-sm w-auto" data-change="lvY">' + [THIS_Y - 1, THIS_Y].map(function (x) { return "<option" + (x === y ? " selected" : "") + ' value="' + x + '">' + x + "년</option>" }).join("") + '</select><span class="help ml-auto">총 연차는 입사일 기준 자동산정(근로기준법)이 기본이며, 필요 시 직접 값을 입력해 보정할 수 있습니다.</span></div>' +
      tbl(["사원명", "입사일", "총 연차", "연차 사용일", "반차 사용", "잔여 연차", "구분 확인", ">관리"], rows)
  }
  Demo.on("lvY", function (v) { go("/hr?tab=leave&y=" + v) })
  Demo.on("lvIn", function (v, el) {
    var k = el.dataset.k
    var d = S.lvDraft[k] = S.lvDraft[k] || {}
    d[el.dataset.f] = v
    var row = document.querySelector('[data-row="' + k + '"]')
    var g = function (f) { return row.querySelector('[data-f="' + f + '"]').value }
    var rem = (+g("override") || 0) - (+g("used") || 0) - (+g("half") || 0) * 0.5
    var cell = document.getElementById("lv-" + k.replace(":", "-"))
    cell.textContent = rem.toFixed(1) + " 일"
    cell.style.color = rem < 0 ? "#ef4444" : "#111827"
  })
  Demo.on("lvSave", function (d) {
    var row = document.querySelector('[data-row="' + d.k + '"]')
    var L = S.leave[d.k]
    var o = row.querySelector('[data-f="override"]')
    L.override = String(o.value) === String(o.dataset.auto) ? "" : o.value
    L.used = +row.querySelector('[data-f="used"]').value || 0
    L.half = +row.querySelector('[data-f="half"]').value || 0
    L.memo = row.querySelector('[data-f="memo"]').value
    toast("저장했습니다.")
    Demo.update()
  })
  Demo.on("lvReset", function (d) { S.leave[d.k].override = ""; toast("총 연차를 자동 계산값으로 되돌렸습니다."); Demo.update() })
  function hrSev() {
    var list = S.staff.filter(function (s) { return s.status === "퇴사" })
    return '<p class="help mb-3">세무사에게 전달받은 퇴직금 명세서를 업로드하여 관리합니다. 퇴사 처리된 직원만 목록에 나옵니다. 금액 계산은 세무사가 합니다.</p>' +
      tbl(["소속 브랜드", "성명", "입사일", "퇴사일", "직위", "명세서"], list.map(function (s) { var f = S.severance[s.id]; return "<tr><td>" + E(s.brand) + '</td><td class="b">' + E(s.name) + "</td><td>" + dot(s.join) + "</td><td>" + dot(s.out) + "</td><td>" + E(s.pos) + '</td><td><label class="btn btn-x cursor-pointer">📎 명세서 파일 선택<input type="file" class="hidden" accept="image/*,application/pdf" data-change="sevFile" data-id="' + s.id + '"></label><div class="text-[12px] mt-1.5 ' + (f ? "text-[#3182f6]" : "text-gray-500") + '">' + (f ? '<button data-act="download" data-n="' + E(f) + '">⬇ ' + E(f) + "</button>" : "등록된 명세서가 없습니다") + "</div></td></tr>" }), 6, "퇴사 처리된 직원이 없습니다. 인원 명부에서 퇴사 처리를 하면 여기에 나옵니다.")
  }
  Demo.on("sevFile", function (v, el) { var f = el.files && el.files[0]; if (!f) return; S.severance[el.dataset.id] = f.name; toast("명세서를 올렸습니다."); Demo.update() })
  function hrGrade() {
    var info = [["⚖️ 근로기준", "1주 법정 근로시간 40시간, 연장근로 포함 52시간 한도. 연장·야간·휴일 근로는 가산수당 지급."], ["🍼 육아휴직", "자녀 1명당 최대 1년(조건 충족 시 연장). 급여 지원은 고용보험 기준을 따르며 분할 사용 가능."], ["🎯 연말정산", "1월 중 간소화 자료 제출. 추가 공제 서류는 경영지원팀으로 전달합니다."]]
    var list = S.staff.filter(function (s) { return s.status === "재직" })
    var years = function (j) { var a = new Date(TODAY), b = new Date(j); return Math.max(0, a.getFullYear() - b.getFullYear() - (a < new Date(a.getFullYear(), b.getMonth(), b.getDate()) ? 1 : 0)) }
    return '<div class="grid sm:grid-cols-3 gap-3 mb-5">' + info.map(function (x) { return '<div class="card p-4"><div class="font-bold text-[13px]">' + x[0] + '</div><div class="text-[12px] text-gray-600 mt-2">' + x[1] + "</div></div>" }).join("") + '</div><div class="flex flex-wrap items-center mb-2"><b class="text-[14px]">현재 근속 중인 직원 호봉 기록</b><span class="help ml-auto">메모 칸에는 주민번호·연락처 등 개인정보를 입력하지 마세요. 호봉을 바꿔도 급여는 자동으로 바뀌지 않습니다.</span></div>' +
      tbl(["성명", "부서", "직급", "근속년수", "확정 호봉", "메모", ">관리"], list.map(function (s) { return '<tr data-grow="' + s.id + '"><td class="b">' + E(s.name) + '</td><td><input class="inp inp-sm w-[110px]" data-g="dept" value="' + E(s.dept) + '"></td><td class="text-gray-500">' + E(s.pos) + "</td><td>" + years(s.join) + '년차</td><td><input class="inp inp-sm w-[110px]" data-g="grade" value="' + E(s.grade) + '"></td><td><input class="inp inp-sm min-w-[200px]" data-g="gmemo" placeholder="승급 근거 등 자유 메모" value="' + E(s.gmemo) + '"></td><td class="r"><button class="btn btn-p btn-x" data-act="gradeSave" data-id="' + s.id + '">저장</button></td></tr>' }))
  }
  Demo.on("gradeSave", function (d) { var s = findIn(S.staff, d.id), row = document.querySelector('[data-grow="' + d.id + '"]'); ["dept", "grade", "gmemo"].forEach(function (k) { s[k] = row.querySelector('[data-g="' + k + '"]').value }); toast(s.name + " 호봉 기록을 저장했습니다.") })
  function hrRoster(r) {
    var sub = q(r, "sub", "in")
    var list = S.staff.filter(function (s) { return sub === "in" ? s.status === "재직" : s.status === "퇴사" })
    var h = '<div class="card p-2.5 flex flex-wrap gap-1.5 items-center mb-3">' + pills([["in", "🟢 입사자 명부"], ["out", "🔴 퇴사자 명부"]], sub, "rosterSub") + (sub === "in" ? '<button class="btn btn-p ml-auto" data-act="rosterNew">＋ 명부 등록</button>' : "") + "</div>"
    h += '<p class="help mb-3">목록은 마스킹 값만 표시됩니다. 주민번호·연락처·계좌·주소·급여는 상세에서 열람 시 접속기록이 남습니다. 명부와 로그인 계정은 별개입니다.</p>'
    return h + tbl(["구분", "입사일"].concat(sub === "out" ? ["퇴사일"] : []).concat(["성명", "직급(직책)", "부서", "주민번호", "연락처", "은행", "계좌번호", "주소", "이메일", "월급", "첨부"]), list.map(function (s) {
      return "<tr><td>" + E(s.brand) + '</td><td class="text-gray-500">' + dot(s.join) + "</td>" + (sub === "out" ? "<td>" + dot(s.out) + "</td>" : "") + '<td><button class="text-[#3182f6] font-semibold" data-act="staffView" data-id="' + s.id + '">' + E(s.name) + "</button></td><td>" + E(s.pos) + "</td><td>" + E(s.dept) + '</td><td class="mono text-[12px]">' + maskRrn(s.rrn) + '</td><td class="mono text-[12px]">' + maskPhone(s.phone) + "</td><td>" + E(s.bank) + '</td><td class="mono text-[12px]">' + maskAcct(s.acct) + '</td><td class="whitespace-nowrap">' + E(s.addr) + "</td><td>" + E(s.email || "-") + '</td><td class="text-gray-400">•••</td><td>' + (s.file ? '<span class="text-[#3182f6]">📎 ' + E(s.file) + "</span>" : '<span class="text-gray-400"></span>') + "</td></tr>"
    }), 13, "명부가 비어 있습니다.")
  }
  Demo.on("rosterSub", function (d) { go("/hr?tab=roster&sub=" + d.v) })
  Demo.on("staffView", function (d) { staffModal(d.id) })
  function staffModal(id) {
    var s = findIn(S.staff, id)
    var mk = function (f, real, m, label) { return '<div class="flex gap-3 py-2 border-b border-gray-100"><span class="w-24 text-gray-500 shrink-0">' + label + "</span><span>" + masked("staff:" + s.id + ":" + f, real, m, "인사 명부 " + label + ", " + s.name) + "</span></div>" }
    var plain = function (l, v) { return '<div class="flex gap-3 py-2 border-b border-gray-100"><span class="w-24 text-gray-500 shrink-0">' + l + "</span><b>" + E(v) + "</b></div>" }
    var canDel = isMaster()
    openModal("인사 명부, " + s.name, '<div class="p-5 text-[13px]">' + plain("구분 · 부서", s.brand + " · " + s.dept) + plain("직급", s.pos) + plain("입사일", dot(s.join)) + (s.out ? plain("퇴사일", dot(s.out)) : "") + mk("rrn", s.rrn, maskRrn(s.rrn), "주민번호") + mk("phone", s.phone, maskPhone(s.phone), "연락처") + mk("acct", s.bank + " " + s.acct, s.bank + " " + maskAcct(s.acct), "계좌") + mk("addr", s.addr.replace("***", "가상동 12-3"), s.addr, "주소") + mk("salary", won(s.salary), "•••", "월급") +
      '<div class="flex flex-wrap gap-2 mt-5">' + (s.status === "재직" ? '<button class="btn" data-act="retire" data-id="' + s.id + '">퇴사 처리</button>' : "") + (canDel ? '<button class="btn btn-r ml-auto" data-act="staffPurge" data-id="' + s.id + '">완전삭제 (마스터)</button>' : "") + '</div><p class="help mt-3">퇴사자는 삭제하지 않고 퇴사 처리합니다. 퇴사 처리는 되돌릴 수 없고, 연결된 로그인 계정도 함께 막힙니다.</p></div>')
  }
  Demo.on("retire", function (d) {
    var s = findIn(S.staff, d.id)
    if (!confirm(s.name + " 님을 퇴사 처리할까요? 화면에서 되돌릴 수 없습니다.")) return
    s.status = "퇴사"; s.out = TODAY
    var a = acc(s.acc)
    if (a) { if (a.id === S.user) { toast("자기 계정은 퇴사 처리할 수 없습니다."); s.status = "재직"; s.out = ""; return } a.status = "비활성" }
    toast("퇴사 처리했습니다. 퇴사자 명부로 옮겨졌고" + (a ? " 연결된 로그인 계정도 막혔습니다." : " 급여·퇴직금 기록은 남습니다."))
    closeModal()
  })
  Demo.on("staffPurge", function (d) {
    var s = findIn(S.staff, d.id)
    var hasPay = s.join < YM + "-01" || Object.keys(S.payroll).some(function (ym) { return S.payroll[ym].rows[s.id] && payCalc(S.payroll[ym].rows[s.id]).gross > 0 })
    if (hasPay || S.severance[s.id]) { toast("급여 기록이나 퇴직금 명세서가 있어 완전삭제할 수 없습니다."); return }
    if (!confirm("완전삭제하면 기록이 사라집니다. 계속할까요?")) return
    S.staff.splice(S.staff.indexOf(s), 1)
    toast("명부에서 완전삭제했습니다.")
    closeModal()
  })
  Demo.on("rosterNew", function () {
    formModal("명부 등록", [
      { n: "name", l: "성명", req: 1 }, { n: "join", l: "입사일", t: "date", req: 1, value: TODAY }, { n: "pos", l: "직급", req: 1, value: "사원" }, { n: "dept", l: "부서", t: "select", o: DEPTS },
      { n: "rrn", l: "주민번호", req: 1, ph: "000000-0000000" }, { n: "phone", l: "연락처", req: 1, ph: "010-0000-0000" }, { n: "bank", l: "은행", t: "select", o: ["가람은행", "누리은행", "하나로은행", "별빛은행"] }, { n: "acct", l: "계좌번호", req: 1 },
      { n: "addr", l: "주소 (시·구)", ph: "예: 서울특별시 가상구" }, { n: "email", l: "이메일" }, { n: "salary", l: "월급", t: "number", req: 1 }, { n: "file", l: "근로계약서 등 서류 (사진·PDF)", t: "file" },
    ], {}, function (v) {
      S.staff.push({ id: "s" + nid(), acc: "", brand: "본사", join: v.join, name: v.name, pos: v.pos, dept: v.dept, rrn: v.rrn, phone: v.phone, bank: v.bank, acct: v.acct, addr: (v.addr || "주소 미입력") + " ***", email: v.email, salary: +v.salary || 0, status: "재직", grade: "1호봉", gmemo: "", file: v.file && v.file.name ? v.file.name : "" })
      toast("명부에 등록했습니다. 로그인 계정은 접근 권한 관리에서 따로 발급합니다.")
    })
  })
  function hrRules(r) {
    var doc = q(r, "doc", "취업규칙")
    var icon = { "취업규칙": "📜", "근로계약서": "✍️", "비밀준수서약서": "🔒" }
    return '<div class="card p-2.5 flex flex-wrap gap-1.5 mb-4">' + pills(Object.keys(icon).map(function (k) { return [k, icon[k] + " " + k] }), doc, "rulesDoc") + '</div><div class="card p-5"><div class="flex flex-wrap items-center gap-2 pb-3 border-b mb-4"><b class="text-[14px]">' + doc + '</b><div class="ml-auto flex gap-2"><button class="btn btn-x" disabled title="준비 중">↑ 업로드</button><button class="btn btn-x" data-act="rulesSave" data-doc="' + doc + '">💾 저장(수정)</button><button class="btn btn-p btn-x" data-act="rulesDown" data-doc="' + doc + '">⬇ 다운로드</button></div></div><textarea class="inp" id="rulesText" rows="16" placeholder="회사 문서 전문을 붙여넣거나 작성하면 이 영역에서 수정·다운로드할 수 있습니다.">' + E(S.rules[doc]) + '</textarea><p class="help mt-3">' + (S.rulesAt[doc] ? "마지막 저장: " + E(S.rulesAt[doc]) : "아직 저장된 수정 이력이 없습니다.") + " 규정을 고치면 이전 내용은 남지 않습니다.</p></div>"
  }
  Demo.on("rulesDoc", function (d) { go("/hr?tab=rules&doc=" + encodeURIComponent(d.v)) })
  Demo.on("rulesSave", function (d) { S.rules[d.doc] = document.getElementById("rulesText").value; S.rulesAt[d.doc] = nowStr() + " · " + me().name; toast("저장했습니다."); Demo.update() })
  Demo.on("rulesDown", function (d) {
    var t = document.getElementById("rulesText").value
    var a = document.createElement("a")
    a.href = URL.createObjectURL(new Blob([t], { type: "text/plain;charset=utf-8" }))
    a.download = d.doc + "_가상.txt"
    a.click()
  })

  /* ───────── 공용 계정 관리 ───────── */
  function pageShared(r) {
    var groups = isMaster() ? ["공용", "CS·TM", "마케팅", "경영지원", "관리자"] : ["공용", me().dept]
    var g = q(r, "g", "공용")
    if (groups.indexOf(g) < 0) g = "공용"
    var list = S.shared.filter(function (x) { return x.group === g })
    return '<div class="card p-2.5 flex flex-wrap gap-1.5 mb-3">' + pills(groups, g, "sharedG") + '</div><p class="help mb-3">부서 공용 계정, 패스워드는 기본 마스킹, 보기·복사 시 접속기록(감사)이 남습니다. 자기 부서 그룹과 공용만 보이며, 관리자 그룹은 마스터만 봅니다.</p><div class="flex justify-end mb-3"><button class="btn btn-p" data-act="newItem" data-kind="shared">＋ 계정 추가</button></div>' +
      tbl(["플랫폼", "링크", "로그인 ID", "패스워드", "책임자", "메모", ">관리"], list.map(function (x) { return pwRow(x, "shared", ["<b>" + E(x.platform) + "</b>", x.link ? '<a class="text-[#3182f6] underline" href="#" data-act="fakeLink">바로가기</a>' : '<span class="text-gray-400"></span>'], "공용 계정, " + x.platform) + "<td>" + E(x.owner) + "</td><td>" + E(x.memo) + '</td><td class="r"><div class="flex justify-end gap-1.5"><button class="ico" data-act="editItem" data-kind="shared" data-id="' + x.id + '" title="수정">✎</button><button class="ico" data-act="del" data-kind="shared" data-id="' + x.id + '" title="삭제">🗑</button></div></td></tr>' }))
  }
  Demo.on("sharedG", function (d) { go("/shared?g=" + encodeURIComponent(d.v)) })

  /* ───────── 매입매출 및 통합정산 ───────── */
  function pageFinance(r) {
    var tab = q(r, "tab", "annual")
    var h = '<div class="card p-2.5 flex flex-wrap gap-1.5 mb-4">' + pills([["annual", "📊 연간요약"], ["ledger", "💸 입출금 대장"], ["sales", "🧾 매출"]], tab, "finTab") + "</div>"
    if (tab === "annual") {
      var list = S.annual.slice().sort(function (a, b) { return a.ym < b.ym ? 1 : -1 })
      var t = { sales: 0, buy: 0, fixed: 0, vari: 0 }
      var rows = list.map(function (x) { var net = x.sales - x.buy - x.fixed - x.vari; ["sales", "buy", "fixed", "vari"].forEach(function (k) { t[k] += x[k] }); return '<tr><td class="b">' + x.ym.replace("-", "년 ") + "월</td><td>" + won(x.sales) + "</td><td>" + won(x.buy) + "</td><td>" + won(x.fixed) + "</td><td>" + won(x.vari) + '</td><td class="b" style="color:' + (net < 0 ? "#2563eb" : "#ef4444") + '">' + won(net) + '</td><td class="r whitespace-nowrap"><button class="btn btn-x" data-act="annualEdit" data-id="' + x.id + '">수정</button> <button class="btn btn-x btn-r" data-act="del" data-kind="annual" data-id="' + x.id + '">삭제</button></td></tr>' })
      if (list.length) rows.push('<tr style="background:#f9fafb"><td class="b">합계</td><td class="b">' + won(t.sales) + '</td><td class="b">' + won(t.buy) + '</td><td class="b">' + won(t.fixed) + '</td><td class="b">' + won(t.vari) + '</td><td class="b text-red-500">' + won(t.sales - t.buy - t.fixed - t.vari) + "</td><td></td></tr>")
      return h + '<div class="flex flex-wrap items-center gap-2 mb-3"><span class="text-[13px] text-gray-600">연간요약, 회계월별 손익 (경리 월결산 수기 확정, 순손익 자동 계산)</span><button class="btn btn-p ml-auto" data-act="annualNew">+ 월 입력</button></div>' + tbl(["회계월", "총 매출", "총 매입", "고정비", "변동비", "순손익", ">관리"], rows)
    }
    if (tab === "ledger") {
      var lg = S.ledger.slice().sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : a.id - b.id })
      var bal = 0
      lg.forEach(function (x) { bal += x.io === "입금" ? x.amount : -x.amount; x._bal = bal })
      lg.reverse()
      return h + '<div class="flex flex-wrap items-center gap-2 mb-3"><span class="help">통장에 실제로 찍힌 날짜 기준으로 기록합니다. 금액은 출금도 양수로 적고 구분에서 출금을 고릅니다.</span><button class="btn btn-p ml-auto" data-act="newItem" data-kind="ledger">+ 거래 기록</button></div>' +
        tbl(["날짜", "구분", "적요", "거래처", ">입금", ">출금", ">잔액(기간)", "메모", ">관리"], lg.map(function (x) { return "<tr><td>" + dot(x.date) + "</td><td>" + badge(x.io, x.io === "입금" ? "blue" : "red") + '</td><td class="b">' + E(x.desc) + "</td><td>" + E(x.party) + '</td><td class="r text-[#3182f6]">' + (x.io === "입금" ? won(x.amount) : "") + '</td><td class="r text-red-500">' + (x.io === "출금" ? won(x.amount) : "") + '</td><td class="r b">' + won(x._bal) + "</td><td>" + E(x.memo) + '</td><td class="r whitespace-nowrap"><button class="btn btn-x" data-act="editItem" data-kind="ledger" data-id="' + x.id + '">수정</button> <button class="btn btn-x btn-r" data-act="del" data-kind="ledger" data-id="' + x.id + '">삭제</button></td></tr>' }))
    }
    var from = q(r, "from", YM + "-01"), to = q(r, "to", TODAY)
    h += '<div class="card p-3 flex flex-wrap items-center gap-2 mb-3"><b class="text-[13px]">조회 기간</b><input type="date" class="inp inp-sm w-auto" id="slFrom" value="' + from + '"> ~ <input type="date" class="inp inp-sm w-auto" id="slTo" value="' + to + '"><button class="btn btn-dark" data-act="salesSearch">조회</button><span class="help">한 번에 최대 31일 · 결제 시스템에서 가져온 카드 매출</span></div>'
    if (S.salesLoading) return h + '<div class="card p-14 text-center text-gray-500 text-sm">⏳ 결제 시스템에서 매출을 가져오는 중입니다...</div>'
    var sl = S.sales.filter(function (x) { return x.date >= from && x.date <= to }).slice().reverse()
    var tt = { c: 0, a: 0, x: 0 }
    sl.forEach(function (x) { tt.c += x.cnt; tt.a += x.approve; tt.x += x.cancel })
    var rows2 = sl.map(function (x) { return "<tr><td>" + dot(x.date) + '</td><td class="r">' + N(x.cnt) + '건</td><td class="r">' + won(x.approve) + '</td><td class="r text-red-500">' + won(x.cancel) + '</td><td class="r b">' + won(x.approve - x.cancel) + "</td></tr>" })
    if (sl.length) rows2.push('<tr style="background:#f9fafb"><td class="b">합계</td><td class="r b">' + N(tt.c) + '건</td><td class="r b">' + won(tt.a) + '</td><td class="r b text-red-500">' + won(tt.x) + '</td><td class="r b">' + won(tt.a - tt.x) + "</td></tr>")
    return h + tbl(["일자", ">승인 건수", ">승인 금액", ">취소 금액", ">순매출"], rows2, 5, "이 기간 매출 데이터가 없습니다 (체험판은 이번 달만 제공).")
  }
  Demo.on("finTab", function (d) {
    go("/finance?tab=" + d.v)
    if (d.v === "sales") { S.salesLoading = true; Demo.update(); setTimeout(function () { S.salesLoading = false; Demo.update() }, 700) }
  })
  Demo.on("salesSearch", function () {
    var f = document.getElementById("slFrom").value, t = document.getElementById("slTo").value
    if (!f || !t || f > t) { toast("조회 기간을 확인해 주세요."); return }
    if ((new Date(t) - new Date(f)) / 86400000 > 30) { toast("매출 탭은 한 번에 최대 31일까지만 조회됩니다."); return }
    go("/finance?tab=sales&from=" + f + "&to=" + t)
  })
  var ANN_F = [{ n: "ym", l: "회계월", t: "month", req: 1 }, { n: "sales", l: "총 매출", t: "number" }, { n: "buy", l: "총 매입", t: "number" }, { n: "fixed", l: "고정비", t: "number" }, { n: "vari", l: "변동비", t: "number" }]
  Demo.on("annualNew", function () {
    formModal("월 입력 (월 마감 확정값)", ANN_F, { ym: ymShift(YM, -1) }, function (v) {
      var ex = S.annual.filter(function (x) { return x.ym === v.ym })[0]
      if (ex && !confirm(v.ym + "은 이미 입력된 달입니다. 다시 등록하면 비운 칸이 0으로 덮어써집니다. 계속할까요? (고칠 때는 그 줄의 수정을 누르세요)")) return false
      var x = ex || { id: nid(), ym: v.ym }
      ;["sales", "buy", "fixed", "vari"].forEach(function (k) { x[k] = +v[k] || 0 })
      if (!ex) S.annual.push(x)
      toast("월 손익을 입력했습니다. 순손익은 자동 계산됩니다.")
    })
  })
  Demo.on("annualEdit", function (d) {
    var x = findIn(S.annual, d.id)
    formModal(x.ym + " 수정", ANN_F.slice(1), x, function (v) { ;["sales", "buy", "fixed", "vari"].forEach(function (k) { if (v[k] !== "") x[k] = +v[k] || 0 }); toast("수정했습니다.") })
  })

  /* ───────── 접근 권한 관리 ───────── */
  function activeMasters() { return S.accounts.filter(function (a) { return a.role === "master" && a.status !== "비활성" }) }
  function pagePerm(r) {
    var tab = q(r, "tab", "members")
    var h = '<div class="flex flex-wrap items-start gap-3 mb-4"><div><h2 class="text-[22px] font-bold flex items-center gap-2">🛡️ 접근 권한 관리 <span class="bd bd-blue">마스터 전용</span></h2><p class="text-[13px] text-gray-500 mt-1">계정 발급과 부서·권한 부여를 관리합니다. 부서 기본·개인 예외는 이 배정을 기준으로 동작합니다.</p></div>' + (tab === "members" ? '<button class="btn btn-p ml-auto" data-act="accNew">+ 새 계정 발급</button>' : "") + "</div>"
    h += '<div class="card p-2.5 flex flex-wrap gap-1.5 mb-4">' + pills([["members", "구성원 배정"], ["dept", "부서 기본"], ["person", "개인 예외"]], tab, "permTab") + "</div>"
    if (tab === "members") {
      return h + tbl(["이름", "이메일 (로그인)", "소속 부서", "권한", "상태", "발급일", ">관리"], S.accounts.map(function (a) {
        return '<tr><td class="b">' + E(a.name + (a.role === "master" ? " " + a.title : "")) + '</td><td class="mono text-[12px] text-gray-600">' + E(a.email) + '</td><td><select class="inp inp-sm w-[110px]" data-change="accDept" data-id="' + a.id + '">' + ["미배정"].concat(DEPTS).map(function (d) { return "<option" + (d === a.dept ? " selected" : "") + ">" + d + "</option>" }).join("") + '</select></td><td><select class="inp inp-sm w-[96px]' + (a.role === "master" ? " text-[#3182f6] font-semibold" : "") + '" data-change="accRole" data-id="' + a.id + '"><option value="member"' + (a.role === "member" ? " selected" : "") + '>멤버</option><option value="master"' + (a.role === "master" ? " selected" : "") + ">마스터</option></select></td><td>" + badge(a.status === "잠김" ? "🔒 잠김" : a.status, a.status === "활성" ? "green" : a.status === "잠김" ? "amber" : "gray") + '</td><td class="text-gray-500">' + dot(a.issued) + '</td><td class="r whitespace-nowrap">' + (a.status === "잠김" ? '<button class="btn btn-x" style="color:#c2410c;border-color:#fed7aa" data-act="accUnlock" data-id="' + a.id + '">잠금 해제</button> ' : "") + '<button class="btn btn-x ' + (a.status === "비활성" ? "" : "btn-r") + '" data-act="accActive" data-id="' + a.id + '">' + (a.status === "비활성" ? "활성화" : "비활성") + '</button> <button class="btn btn-x" data-act="accReset" data-id="' + a.id + '">비밀번호 재설정</button></td></tr>'
      })) + '<p class="help mt-3">로그인 5회 실패로 잠긴 계정은 잠금 해제로 바로 풉니다(비밀번호 초기화는 잠금을 풀지 않습니다). 마지막 남은 활성 마스터는 일반 사용자로 바꾸거나 비활성으로 돌릴 수 없습니다. 여기서 발급해도 인사 명부에는 자동 등록되지 않습니다.</p>'
    }
    var menus = MENUS.filter(function (m) { return !m.master })
    if (tab === "dept") {
      var cnt = function (d) { return S.accounts.filter(function (a) { return a.dept === d && a.role !== "master" }).length }
      var rows = []
      GROUPS.slice(0, 4).forEach(function (g, gi) {
        rows.push('<tr><td colspan="4" style="background:#f9fafb;font-size:11px;font-weight:700;color:#6b7280;padding:8px 14px">' + g + "</td></tr>")
        menus.filter(function (m) { return m.g === gi }).forEach(function (m) {
          rows.push('<tr><td class="whitespace-nowrap"><span class="mr-1.5">' + m.i + "</span>" + E(m.t) + (m.pii ? ' <span class="bd bd-red" title="개인정보 메뉴">🛡</span>' : "") + "</td>" + DEPTS.map(function (d) { return '<td class="c">' + (m.lock ? '<span title="전 직원 공용, 끌 수 없음">🔒</span>' : '<button data-act="deptToggle" data-d="' + d + '" data-k="' + m.k + '" class="p-1" aria-label="' + d + " " + m.t + '"><span class="' + (S.deptDefault[d][m.k] ? "dot-on" : "dot-off") + '"></span></button>') + "</td>" }).join("") + "</tr>")
        })
      })
      return h + '<p class="text-[13px] text-gray-600 mb-3">부서 단위 ON/OFF = 그 부서 전원의 <b>기본</b> 메뉴입니다. 개인별 예외는 「개인 예외」 탭에서. 🔒 공용 메뉴는 항상 노출, 🛡 개인정보 모듈입니다. 바꾸면 그 부서 사람의 왼쪽 메뉴가 바로 바뀝니다 (오른쪽 위 역할 배지로 전환해 확인).</p><div class="card overflow-x-auto"><table class="tbl"><thead><tr><th>메뉴 (' + menus.length + ")</th>" + DEPTS.map(function (d) { return '<th class="c">' + d + '<div class="font-normal text-gray-500">' + cnt(d) + "명</div></th>" }).join("") + "</tr></thead><tbody>" + rows.join("") + "</tbody></table></div>"
    }
    var sel = acc(S.permSel) || S.accounts[1]
    var kw = S.permKw || ""
    var people = S.accounts.filter(function (a) { return !kw || a.name.indexOf(kw) >= 0 || a.dept.indexOf(kw) >= 0 })
    var exN = Object.keys(S.except[sel.id] || {}).length
    var left = '<div class="border-b lg:border-b-0 lg:border-r border-gray-200"><div class="p-3"><input class="inp inp-sm" placeholder="이름·부서 검색" value="' + E(kw) + '" data-change="permKw"></div>' + people.map(function (a) { return '<button class="w-full flex items-center gap-3 px-4 py-3 border-t border-gray-100 text-left ' + (a.id === sel.id ? "bg-[#eef5ff]" : "hover:bg-gray-50") + '" data-act="permSel" data-id="' + a.id + '"><span class="w-8 h-8 rounded-full bg-[#e8f1fe] text-[#3182f6] text-xs font-bold flex items-center justify-center">' + E(a.name[0]) + '</span><span class="flex-1"><span class="block text-[13px] font-bold">' + E(a.name) + (a.role === "master" ? " 🔒" : "") + '</span><span class="block text-[11px] text-gray-500">' + E(a.role === "master" ? "마스터" : a.dept) + '</span></span><span class="text-[11px] text-gray-400">' + (Object.keys(S.except[a.id] || {}).length || "–") + "</span></button>" }).join("") + "</div>"
    var rows2 = []
    GROUPS.slice(0, 4).forEach(function (g, gi) {
      rows2.push('<tr><td colspan="4" style="background:#f9fafb;font-size:11px;font-weight:700;color:#6b7280;padding:8px 14px">' + g + "</td></tr>")
      menus.filter(function (m) { return m.g === gi }).forEach(function (m) {
        var def = m.lock || !!(S.deptDefault[sel.dept] || {})[m.k]
        var ex = (S.except[sel.id] || {})[m.k] || "inherit"
        var eff = canFor(sel, m.k)
        var ctl = sel.role === "master" ? '<span class="text-[11px] text-gray-400">마스터는 전부 허용</span>' : m.lock ? '<span class="text-[11px] text-gray-400">🔒 예외 불가</span>' : '<div class="inline-flex border border-gray-200 rounded-lg overflow-hidden">' + [["inherit", "상속"], ["allow", "허용"], ["block", "차단"]].map(function (o) { return '<button class="px-3 py-1.5 text-[12px] ' + (ex === o[0] ? "bg-[#374151] text-white" : "bg-white text-gray-600") + '" data-act="exSet" data-k="' + m.k + '" data-v="' + o[0] + '">' + o[1] + "</button>" }).join("") + "</div>"
        rows2.push('<tr><td class="whitespace-nowrap ' + (m.lock ? "text-gray-400" : "") + '"><span class="mr-1.5">' + m.i + "</span>" + E(m.t) + (m.pii ? ' <span class="bd bd-red">🛡</span>' : "") + '</td><td class="c">' + badge(def ? "허용" : "차단", def ? "green" : "red") + '</td><td class="c">' + ctl + '</td><td class="c">' + badge(eff ? "허용" : "차단", eff ? "green" : "red") + "</td></tr>")
      })
    })
    var chips = MENUS.filter(function (m) { return canFor(sel, m.k) }).map(function (m) { return '<span class="inline-flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-1 text-[12px] bg-white">' + m.i + " " + E(m.t) + (m.pii ? " 🛡" : "") + "</span>" }).join("")
    var right = '<div class="min-w-0"><div class="flex flex-wrap items-center gap-2 px-5 py-4 border-b"><b class="text-[17px]">' + E(sel.name) + '</b><span class="bd bd-gray">' + E(sel.role === "master" ? "마스터" : sel.dept) + '</span><span class="mono text-[12px] text-gray-500">' + E(sel.email) + '</span><span class="ml-auto text-[12px] text-[#3182f6]">개인 예외 ' + exN + '건</span></div><div class="overflow-x-auto"><table class="tbl sm"><thead><tr><th>메뉴</th><th class="c">부서 기본</th><th class="c">개인 설정</th><th class="c">실효</th></tr></thead><tbody>' + rows2.join("") + '</tbody></table></div><div class="border-t p-4 bg-[#fafbfc]"><div class="text-[12px] font-semibold text-gray-600 mb-2">👁 이 사람이 실제로 보는 사이드바</div><div class="flex flex-wrap gap-1.5">' + chips + "</div></div></div>"
    return h + '<p class="help mb-3">우선순위: ① 마스터는 전부 ② 개인 예외(차단이 허용보다 강함) ③ 부서 기본 ④ 해당 없으면 못 봄.</p><div class="card overflow-hidden grid lg:grid-cols-[260px_minmax(0,1fr)]">' + left + right + "</div>"
  }
  Demo.on("permTab", function (d) { go("/perm?tab=" + d.v) })
  Demo.on("permSel", function (d) { S.permSel = d.id; Demo.update() })
  Demo.on("permKw", function (v) { S.permKw = v; Demo.update() })
  Demo.on("deptToggle", function (d) {
    var m = S.deptDefault[d.d]
    if (m[d.k]) delete m[d.k]; else m[d.k] = 1
    toast(d.d + " 부서 기본: " + menu(d.k).t + " " + (m[d.k] ? "켬" : "끔") + ", 해당 부서 화면에 바로 반영됩니다.")
    Demo.update()
  })
  Demo.on("exSet", function (d) {
    var sel = acc(S.permSel) || S.accounts[1]
    var m = menu(d.k)
    if (d.v === "allow" && m.pii && !(S.deptDefault[sel.dept] || {})[d.k] && !confirm("권한을 주면 이 메뉴의 개인정보까지 볼 수 있게 됩니다. 부서 밖 사람(" + sel.name + ")에게 개인정보 메뉴 「" + m.t + "」를 열어 줄까요?")) return
    var ex = S.except[sel.id] = S.except[sel.id] || {}
    if (d.v === "inherit") delete ex[d.k]; else ex[d.k] = d.v
    toast(sel.name + " · " + m.t + " → " + { inherit: "부서 기본 상속", allow: "개인 허용", block: "개인 차단" }[d.v])
    Demo.update()
  })
  Demo.on("accDept", function (v, el) { acc(el.dataset.id).dept = v; toast("소속 부서를 바꿨습니다. 메뉴가 새 부서 기본값을 따릅니다."); Demo.update() })
  Demo.on("accRole", function (v, el) {
    var a = acc(el.dataset.id)
    if (a.role === "master" && v !== "master" && activeMasters().length <= 1) { toast("마지막 남은 활성 마스터는 일반 사용자로 바꿀 수 없습니다."); Demo.update(); return }
    a.role = v
    toast(a.name + " 권한을 " + (v === "master" ? "마스터" : "멤버") + "로 바꿨습니다.")
    Demo.update()
  })
  Demo.on("accActive", function (d) {
    var a = acc(d.id)
    if (a.status !== "비활성") {
      if (a.id === S.user) { toast("자기 계정을 스스로 비활성으로 돌릴 수 없습니다."); return }
      if (a.role === "master" && activeMasters().length <= 1) { toast("마지막 남은 활성 마스터는 비활성으로 돌릴 수 없습니다."); return }
      a.status = "비활성"
    } else a.status = "활성"
    toast(a.name + " 계정을 " + a.status + "으로 바꿨습니다.")
    Demo.update()
  })
  Demo.on("accUnlock", function (d) { acc(d.id).status = "활성"; toast("잠금을 해제했습니다."); Demo.update() })
  Demo.on("accReset", function (d) { toast(acc(d.id).name + " 비밀번호를 초기화했습니다 (체험판: 실제 값 없음). 잠금은 따로 풀어야 합니다.") })
  Demo.on("accNew", function () {
    formModal("새 계정 발급", [{ n: "name", l: "이름", req: 1 }, { n: "email", l: "이메일", req: 1, ph: "name@lumiworks.example" }, { n: "dept", l: "소속 부서", t: "select", o: DEPTS }, { n: "role", l: "권한", t: "select", o: ["멤버", "마스터"] }, { n: "pw", l: "초기 비밀번호", t: "text", req: 1, value: "Temp!" + (1000 + (uid % 9000)), hint: "본인에게 직접 알려 줍니다" }], {}, function (v) {
      if (S.accounts.some(function (a) { return a.email === v.email })) { toast("이미 있는 이메일입니다."); return false }
      if (String(v.pw).length < 8) { toast("초기 비밀번호는 8자 이상입니다."); return false }
      S.accounts.push({ id: "u" + nid(), name: v.name, title: "", email: v.email, dept: v.dept, role: v.role === "마스터" ? "master" : "member", status: "활성", issued: TODAY })
      toast("계정을 발급했습니다. 인사 명부에는 따로 등록합니다.")
    })
  })

  /* ───────── 삭제 결재함 ───────── */
  function pageApproval() {
    var h = '<div class="mb-4"><h2 class="text-[22px] font-bold flex items-center gap-2">🗂️ 삭제 결재함 <span class="bd bd-blue">마스터 전용</span></h2><p class="text-[13px] text-gray-500 mt-1">직원의 삭제 요청은 여기서 승인해야 실제로 삭제됩니다. 승인 전까지 원본은 각 화면에 그대로 남아 있습니다. 마스터 본인의 삭제는 결재 없이 즉시 처리됩니다.</p></div>'
    h += '<div class="card overflow-hidden mb-4"><div class="card-h justify-start">결재 대기 <span class="bd bd-amber">' + S.approvals.length + '건</span></div><div class="overflow-x-auto"><table class="tbl"><thead><tr><th>요청 내용</th><th>요청자</th><th>요청 일시</th><th class="c">원본</th><th class="r">결재</th></tr></thead><tbody>' +
      (S.approvals.length ? S.approvals.map(function (a) { return '<tr><td class="b">' + E(a.label) + (a.err ? '<div class="text-[12px] text-red-500 font-normal mt-1">⚠ ' + E(a.err) + "</div>" : "") + "</td><td>" + E(nm(a.by)) + '</td><td class="text-gray-500">' + E(a.at) + '</td><td class="c"><button class="btn btn-x" data-act="apView" data-id="' + a.id + '">원본 보기</button></td><td class="r whitespace-nowrap"><button class="btn btn-x btn-g" data-act="apOk" data-id="' + a.id + '">승인</button> <button class="btn btn-x btn-r" data-act="apNo" data-id="' + a.id + '">반려</button></td></tr>' }).join("") : emptyRow(5, "결재 대기 중인 요청이 없습니다. 마스터가 아닌 계정으로 바꿔 무언가를 삭제해 보세요.")) + "</tbody></table></div></div>"
    h += '<div class="card overflow-hidden mb-4"><div class="card-h block"><div>처리 이력</div><div class="text-[12px] font-normal text-gray-500 mt-1">최근 50건, 처리 완료된 건은 원본 보기가 없습니다.</div></div><div class="overflow-x-auto"><table class="tbl"><thead><tr><th>결정</th><th>요청 내용</th><th>요청자</th><th>처리자</th><th>처리 일시</th></tr></thead><tbody>' +
      (S.history.length ? S.history.slice(0, 50).map(function (x) { return "<tr><td>" + badge(x.ok ? "승인" : "반려", x.ok ? "green" : "gray") + "</td><td>" + E(x.label) + "</td><td>" + E(nm(x.by)) + "</td><td>" + E(x.who) + '</td><td class="text-gray-500">' + E(x.at) + "</td></tr>" }).join("") : emptyRow(5, "처리한 요청이 없습니다.")) + "</tbody></table></div></div>"
    h += '<div class="card overflow-hidden"><div class="card-h block"><div>개인정보 열람 기록 (체험판 보기용)</div><div class="text-[12px] font-normal text-gray-500 mt-1">보기·공개·열람·복사를 누를 때마다 누른 사람과 시각이 남습니다.</div></div><div class="overflow-x-auto"><table class="tbl"><thead><tr><th>시각</th><th>열람자</th><th>대상</th></tr></thead><tbody>' +
      (S.logs.length ? S.logs.slice(0, 50).map(function (l) { return '<tr><td class="text-gray-500 whitespace-nowrap">' + E(l.at) + '</td><td class="b">' + E(l.who) + "</td><td>" + E(l.what) + "</td></tr>" }).join("") : emptyRow(3, "아직 열람 기록이 없습니다.")) + "</tbody></table></div></div>"
    return h
  }
  var FIELD_LBL = { date: "일자", name: "이름/상호", phone: "연락처", brand: "브랜드", route: "경로", buy: "구매여부", title: "제목", body: "내용", item: "항목", type: "유형", qty: "수량", amount: "금액", tid: "TID", status: "상태", note: "특이사항", cat: "분류", line: "선로사", reason: "사유", bizName: "사업자명", bizNo: "사업자번호", desc: "적요", io: "구분", platform: "플랫폼", lid: "ID", ym: "회계월", product: "상품명", q: "질문", a: "답변", main: "메인 카피", target: "대상업체", ch: "채널", partner: "상대처", memo: "메모", period: "기간", tab: "종류", industry: "업종" }
  var SECRET = { phone: maskPhone, bizNo: maskBiz, pw: function () { return "••••••" }, rrn: maskRrn, acct: maskAcct, ceoPhone: maskPhone }
  Demo.on("apView", function (d) {
    var a = findIn(S.approvals, d.id)
    var live = findIn(S[KINDS[a.kind].key], a.tid)
    var src = live || a.snap
    var rows = Object.keys(FIELD_LBL).concat(Object.keys(SECRET)).filter(function (k, i, arr) { return arr.indexOf(k) === i && src[k] != null && src[k] !== "" && typeof src[k] !== "object" }).map(function (k) { return '<tr><td class="text-gray-500 whitespace-nowrap">' + E(FIELD_LBL[k] || k) + "</td><td>" + E(SECRET[k] ? SECRET[k](String(src[k])) : k === "date" ? dot(src[k]) : src[k]) + "</td></tr>" })
    openModal("원본 보기", '<div class="p-5"><div class="text-[13px] mb-3"><b>' + E(a.label) + '</b><br><span class="text-gray-500">요청자 ' + E(nm(a.by)) + " · " + E(a.at) + (live ? "" : " · ⚠ 원본이 이미 없습니다") + '</span></div><table class="tbl sm"><tbody>' + rows.join("") + '</tbody></table><p class="help mt-3">승인하면 되돌릴 수 없습니다(휴지통 없음).</p></div>')
  })
  Demo.on("apOk", function (d) {
    var a = findIn(S.approvals, d.id)
    if (!confirm("승인하면 실제로 지워지고 되돌릴 수 없습니다. 승인할까요?")) return
    var err = hardRemove(a.kind, a.tid)
    if (err) { a.err = err; toast("지워지지 않았습니다: " + err); Demo.update(); return }
    S.approvals.splice(S.approvals.indexOf(a), 1)
    S.history.unshift({ ok: 1, label: a.label, by: a.by, who: me().name, at: nowStr() })
    toast("승인했습니다. 원본이 삭제되었습니다.")
    Demo.update()
  })
  Demo.on("apNo", function (d) {
    var a = findIn(S.approvals, d.id)
    S.approvals.splice(S.approvals.indexOf(a), 1)
    S.history.unshift({ ok: 0, label: a.label, by: a.by, who: me().name, at: nowStr() })
    toast("반려했습니다. 원본은 그대로 남습니다.")
    Demo.update()
  })

  /* ───────── 비밀번호 변경 ───────── */
  function pagePassword() {
    var u = me()
    var pw = function (n, l, ph) { return '<label class="lbl mt-4">' + l + '</label><div class="relative"><input class="inp pr-10" type="password" name="' + n + '" required placeholder="' + ph + '"><button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm" data-act="eyeNext">👁</button></div>' }
    return '<form data-submit="pwSave" class="card p-8 max-w-[520px]"><h2 class="text-[18px] font-bold">비밀번호 변경</h2><p class="text-[13px] text-gray-600 mt-2">' + E(u.email) + " 계정의 비밀번호를 변경합니다. 변경하면 모든 기기에서 로그아웃됩니다.</p>" + pw("cur", "현재 비밀번호", "현재 비밀번호 입력") + pw("n1", "새 비밀번호", "8자 이상") + pw("n2", "새 비밀번호 확인", "새 비밀번호 다시 입력") + '<button class="btn btn-p w-full py-3 mt-6 text-[14px]">비밀번호 변경</button></form>'
  }
  Demo.on("eyeNext", function (d, el) { var i = el.previousElementSibling; i.type = i.type === "password" ? "text" : "password" })
  Demo.on("pwSave", function (v) {
    if (String(v.n1).length < 8) { toast("새 비밀번호는 8자 이상이어야 합니다."); return }
    if (v.n1 !== v.n2) { toast("새 비밀번호가 서로 다릅니다."); return }
    toast("비밀번호를 변경했습니다 (체험판: 저장하지 않음). 다시 로그인하세요.")
    S.user = null
    go("/login")
  })

  /* ───────── 라우터 ───────── */
  var PAGES = { home: pageHome, notice: pageNotice, worklog: pageWorklog, drive: pageDrive, consult: pageConsult, template: pageTemplate, store: pageStore, open: pageOpen, risk: pageRisk, inquiry: pageInquiry, stock: pageStock, marketing: pageMarketing, hr: pageHr, shared: pageShared, finance: pageFinance, perm: pagePerm, approval: pageApproval, password: pagePassword }
  function modalHtml() {
    if (!S.modal) return ""
    return '<div class="modal-bg"><div class="modal' + (S.modal.wide ? " wide" : "") + '" role="dialog" aria-modal="true"><div class="flex items-center px-5 py-4 border-b"><b class="text-[15px]">' + E(S.modal.title) + '</b><button class="ml-auto text-gray-400 text-xl leading-none" data-act="closeModal" aria-label="닫기">×</button></div>' + S.modal.body + "</div></div>"
  }
  function render(r) {
    var key = r.path.replace(/^\//, "").split("/")[0] || "home"
    if (!S.user || key === "login") { S.modal = null; return pageLogin() }
    if (!PAGES[key]) key = "home"
    var body
    if (menu(key) && !can(key)) body = '<div class="card p-12 text-center"><div class="text-[32px]">🔒</div><div class="font-bold mt-2">이 메뉴를 볼 권한이 없습니다</div><p class="text-[13px] text-gray-500 mt-1">권한이 없는 메뉴는 왼쪽 목록에서 사라집니다. 필요하면 마스터에게 요청합니다.</p><a class="btn mt-4" href="#/home">홈으로</a></div>'
    else body = PAGES[key](r)
    var title = key === "password" ? "비밀번호 변경" : menu(key).t
    return layout(key, title, body) + modalHtml()
  }
  window.addEventListener("hashchange", function () { S.sideOpen = false; S.roleMenu = false; S.roleMenuTop = false; S.modal = null })
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && S.modal) closeModal() })
  Demo.mount(render)
  Demo.banner()
})()
