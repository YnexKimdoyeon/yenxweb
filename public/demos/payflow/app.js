/* PayFlow - 입금 알림 관리 체험판
 * 원본 화면(Next.js page.tsx)을 같은 클래스 이름으로 옮겨 적은 정적 복제본.
 * 거래처·전화번호·금액·발송 이력은 모두 가상이며, 문자는 실제로 발송되지 않는다(이력에만 기록).
 */
;(function () {
  var esc = Demo.esc

  var DEFAULT_TEMPLATE = "[입금 안내] {이름}님, {입금일} 입금 예정일입니다. 금액: {금액}원{메모}"

  // ---------- 유틸 ----------
  function pad(n) {
    return String(n).padStart(2, "0")
  }
  function ymd(y, m, d) {
    return y + "-" + pad(m) + "-" + pad(d)
  }
  function formatPhone(phone) {
    var p = String(phone).replace(/\D/g, "")
    if (p.length === 11) return p.slice(0, 3) + "-" + p.slice(3, 7) + "-" + p.slice(7)
    if (p.length === 10) return p.slice(0, 3) + "-" + p.slice(3, 6) + "-" + p.slice(6)
    return phone
  }
  function formatAmount(n) {
    return Number(n).toLocaleString("ko-KR")
  }
  function fill(template, vars) {
    var s = template
    Object.keys(vars).forEach(function (k) {
      s = s.split("{" + k + "}").join(vars[k])
    })
    return s
  }
  function buildMessage(template, p) {
    return fill(template, {
      이름: p.user.name,
      입금일: p.due_date.replace(/-/g, "."),
      금액: formatAmount(p.amount),
      메모: p.memo ? " (" + p.memo + ")" : "",
    })
  }
  function nowIso() {
    var d = new Date()
    return ymd(d.getFullYear(), d.getMonth() + 1, d.getDate()) + "T" + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds())
  }

  // ---------- 가상 데이터 ----------
  var seed = 20261
  function rnd() {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }

  var today = new Date()
  var TODAY = Demo.day(0)
  var TY = today.getFullYear()
  var TM = today.getMonth() + 1
  var TD = today.getDate()
  var MONTH_END = ymd(TY, TM, new Date(TY, TM, 0).getDate())

  var CUSTOMERS = [
    ["카페 온새미", "커피머신 렌탈", 98000],
    ["김서윤", "정수기 렌탈", 45000],
    ["미소치과의원", "복합기 렌탈", 120000],
    ["이도현", "안마의자 렌탈", 89000],
    ["한빛물산", "업소용 냉장고 렌탈", 150000],
    ["박하은", "공기청정기 렌탈", 55000],
    ["소담한식당", "식기세척기 렌탈", 130000],
    ["최민준", "정수기 렌탈", 45000],
    ["늘품영어학원", "복합기 렌탈", 120000],
    ["정지우", "비데 렌탈", 32000],
    ["다온부동산", "복합기 렌탈", 110000],
    ["강예린", "안마의자 렌탈", 89000],
    ["해솔세무회계", "정수기 렌탈", 60000],
    ["조현우", "공기청정기 렌탈", 55000],
    ["바른정형외과", "공기청정기 렌탈", 165000],
    ["윤채원", "매트리스 케어", 39000],
    ["장시우", "정수기 렌탈", 45000],
    ["오다인 필라테스", "제빙기 렌탈", 75000],
    ["임수아", "비데 렌탈", 32000],
    ["서준혁", "안마의자 렌탈", 99000],
    ["푸른약국", "정수기 렌탈", 60000],
    ["신유나", "공기청정기 렌탈", 55000],
  ]

  var state = {
    users: [],
    payments: [],
    logs: [],
    nextUserId: 1,
    nextPayId: 1,
    nextLogId: 1,
    year: TY,
    month: TM,
    selectedDate: null,
    sidebarOpen: window.innerWidth >= 768,
    userName: "",
    userPhone: "",
    editingUser: null,
    expandedUser: null,
    payDate: "",
    payAmount: "",
    payMemo: "",
    smsTemplate: DEFAULT_TEMPLATE,
    savedTemplate: DEFAULT_TEMPLATE,
    sendTime: "09:00",
    savedSendTime: "09:00",
    lastAutoRun: null,
    loading: false,
    logPage: 1,
    logStatus: "all",
    logQuery: "",
    password: "",
  }

  function userById(id) {
    for (var i = 0; i < state.users.length; i++) if (state.users[i].id === id) return state.users[i]
    return null
  }
  function addLog(user, message, status, error, sentAt) {
    state.logs.push({
      id: state.nextLogId++,
      user_name: user.name,
      phone: user.phone,
      message: message,
      status: status,
      error: error || "",
      sent_at: sentAt,
    })
  }

  ;(function makeSeed() {
    CUSTOMERS.forEach(function (c, i) {
      state.users.push({
        id: state.nextUserId++,
        name: c[0],
        phone: "0100000" + String(1001 + i * 173).slice(-4),
        created_at: "2026-03-02T10:00:00",
        product: c[1],
        amount: c[2],
        day: [1, 3, 5, 7, 10, 10, 12, 15, 15, 17, 20, 20, 21, 23, 25, 25, 27, 28, 5, 12, 18, 8][i],
      })
    })
    // 오늘 입금 예정인 거래처 3곳 (자동 발송 시뮬레이션 대상)
    ;[1, 6, 13].forEach(function (i) {
      state.users[i].day = TD
    })

    var tmpl = DEFAULT_TEMPLATE
    for (var back = 5; back >= -1; back--) {
      var y = TY,
        m = TM - back
      while (m < 1) {
        m += 12
        y--
      }
      while (m > 12) {
        m -= 12
        y++
      }
      var dim = new Date(y, m, 0).getDate()
      state.users.forEach(function (u, idx) {
        if (back === 5 && idx % 4 === 0) return // 일부는 나중에 계약
        var d = Math.min(u.day, dim)
        var due = ymd(y, m, d)
        var p = {
          id: state.nextPayId++,
          user_id: u.id,
          due_date: due,
          amount: u.amount,
          memo: u.product + " " + m + "월분",
          is_paid: false,
          sms_sent: false,
          created_at: "2026-03-02T10:00:00",
        }
        if (due < TODAY) {
          var r = rnd()
          if (r < 0.45) {
            p.is_paid = true // 예정일 전에 입금
          } else {
            p.sms_sent = true
            var sentAt = due + "T09:0" + Math.floor(rnd() * 5) + ":" + pad(Math.floor(rnd() * 60))
            if (rnd() < 0.12) {
              addLog(u, buildMessage(tmpl, Object.assign({ user: u }, p)), "fail", rnd() < 0.5 ? "수신번호 오류" : "일시적인 통신 오류", due + "T09:00:" + pad(Math.floor(rnd() * 60)))
            }
            addLog(u, buildMessage(tmpl, Object.assign({ user: u }, p)), "success", "", sentAt)
            // 지난달 이전은 모두 입금 완료, 이번 달은 일부 미입금 남김
            p.is_paid = y < TY || m < TM ? true : rnd() < 0.55
          }
        }
        state.payments.push(p)
      })
    }
    state.users.sort(function (a, b) {
      return a.name.localeCompare(b.name, "ko")
    })
  })()

  function withUser(p) {
    return Object.assign({ user: userById(p.user_id) }, p)
  }
  function monthPayments() {
    var pre = state.year + "-" + pad(state.month) + "-"
    return state.payments
      .filter(function (p) {
        return p.due_date.indexOf(pre) === 0 && userById(p.user_id)
      })
      .sort(function (a, b) {
        return a.due_date < b.due_date ? -1 : a.due_date > b.due_date ? 1 : a.id - b.id
      })
      .map(withUser)
  }
  function sortedLogs() {
    return state.logs.slice().sort(function (a, b) {
      return a.sent_at < b.sent_at ? 1 : a.sent_at > b.sent_at ? -1 : b.id - a.id
    })
  }
  function getDashboard(payments) {
    var d = {
      total_count: payments.length,
      total_amount: 0,
      paid_count: 0,
      paid_amount: 0,
      sms_sent_count: 0,
      today_count: 0,
      today_amount: 0,
      user_count: state.users.length,
    }
    payments.forEach(function (p) {
      d.total_amount += p.amount
      if (p.is_paid) {
        d.paid_count++
        d.paid_amount += p.amount
      }
      if (p.sms_sent) d.sms_sent_count++
      if (p.due_date === TODAY && !p.is_paid) {
        d.today_count++
        d.today_amount += p.amount
      }
    })
    d.unpaid_count = d.total_count - d.paid_count
    d.unpaid_amount = d.total_amount - d.paid_amount
    d.recent_logs = sortedLogs().slice(0, 5)
    return d
  }

  // ---------- 아이콘 ----------
  function svg(cls, sw, paths) {
    return (
      '<svg class="' + cls + '" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
      paths
        .map(function (d) {
          return '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="' + sw + '" d="' + d + '"></path>'
        })
        .join("") +
      "</svg>"
    )
  }
  var icons = {
    dashboard: svg("w-5 h-5", 1.5, ["M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"]),
    calendar: svg("w-5 h-5", 1.5, ["M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"]),
    users: svg("w-5 h-5", 1.5, ["M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m8-10a4 4 0 100-8 4 4 0 000 8zm10 10v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"]),
    logs: svg("w-5 h-5", 1.5, ["M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"]),
    settings: svg("w-5 h-5", 1.5, [
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    ]),
    send: svg("w-4 h-4", 2, ["M12 19l9 2-9-18-9 18 9-2zm0 0v-8"]),
    download: svg("w-4 h-4", 2, ["M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"]),
    chevron: svg("w-4 h-4", 2, ["M19 9l-7 7-7-7"]),
    logout: svg("w-4 h-4", 2, ["M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"]),
  }

  // ---------- 화면 조각 ----------
  function statCard(label, value, sub, color) {
    var colors = {
      blue: "from-blue-500 to-blue-600",
      orange: "from-amber-500 to-orange-600",
      green: "from-emerald-500 to-emerald-600",
      red: "from-rose-500 to-rose-600",
      purple: "from-violet-500 to-violet-600",
    }
    return (
      '<div class="bg-gradient-to-br ' + colors[color] + ' rounded-2xl p-5 text-white">' +
      '<div class="text-sm font-medium opacity-90">' + esc(label) + "</div>" +
      '<div class="text-3xl font-extrabold mt-1 tracking-tight">' + esc(value) + "</div>" +
      (sub ? '<div class="text-sm opacity-75 mt-1">' + esc(sub) + "</div>" : "") +
      "</div>"
    )
  }

  function calendarView(year, month, payments) {
    var firstDay = new Date(year, month - 1, 1).getDay()
    var daysInMonth = new Date(year, month, 0).getDate()
    var todayDay = TY === year && TM === month ? TD : -1
    var byDay = {}
    payments.forEach(function (p) {
      var d = parseInt(p.due_date.split("-")[2], 10)
      ;(byDay[d] = byDay[d] || []).push(p)
    })
    var cells = ""
    for (var i = 0; i < firstDay; i++) cells += '<div class="h-24"></div>'
    for (var d = 1; d <= daysInMonth; d++) {
      var dateStr = ymd(year, month, d)
      var list = byDay[d] || []
      var isToday = d === todayDay
      var isSelected = state.selectedDate === dateStr
      cells +=
        '<div data-act="selDate" data-date="' + dateStr + '" class="h-24 p-1.5 cursor-pointer transition-all relative group ' +
        (isSelected ? "bg-indigo-50 ring-2 ring-indigo-400" : "hover:bg-slate-50") + " " + (isToday ? "bg-blue-50/50" : "") + '">' +
        '<div class="text-xs font-semibold mb-1 flex items-center justify-center w-6 h-6 rounded-full ' +
        (isToday ? "bg-indigo-600 text-white" : "text-slate-500 group-hover:text-slate-700") + '">' + d + "</div>" +
        '<div class="space-y-0.5 overflow-hidden">' +
        list
          .slice(0, 2)
          .map(function (p) {
            return (
              '<div class="text-[10px] leading-tight rounded-md px-1.5 py-0.5 truncate font-medium ' +
              (p.is_paid ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700") + '">' +
              esc(p.user.name) + " " + esc(formatAmount(p.amount)) + "</div>"
            )
          })
          .join("") +
        (list.length > 2 ? '<div class="text-[10px] text-slate-400 pl-1">+' + (list.length - 2) + "건</div>" : "") +
        "</div></div>"
    }
    return (
      '<div class="border border-slate-200 rounded-xl overflow-hidden pf-cal">' +
      '<div class="grid grid-cols-7 bg-slate-50 border-b border-slate-200">' +
      ["일", "월", "화", "수", "목", "금", "토"]
        .map(function (x, i) {
          return '<div class="text-center text-[11px] font-bold py-2.5 tracking-wider ' + (i === 0 ? "text-rose-400" : i === 6 ? "text-blue-400" : "text-slate-400") + '">' + x + "</div>"
        })
        .join("") +
      "</div>" +
      '<div class="grid grid-cols-7 divide-x divide-y divide-slate-100">' + cells + "</div></div>"
    )
  }

  function smsButton(p) {
    return '<button data-act="sendOne" data-id="' + p.id + '"' + (state.loading ? " disabled" : "") + ' class="text-[11px] font-medium text-indigo-600 hover:text-indigo-800">문자</button>'
  }

  function paidCheckbox(p) {
    return '<input type="checkbox" data-change="togglePaid" data-id="' + p.id + '"' + (p.is_paid ? " checked" : "") + ' class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500">'
  }

  // ===== 대시보드 =====
  function dashboardView(payments) {
    var d = getDashboard(payments)
    var rate = d.total_count > 0 ? Math.round((d.paid_count / d.total_count) * 100) : 0
    var width = d.total_count > 0 ? (d.paid_count / d.total_count) * 100 : 0
    var unpaid = payments.filter(function (p) {
      return !p.is_paid
    })
    return (
      '<div class="space-y-6">' +
      '<div class="grid grid-cols-2 lg:grid-cols-5 gap-4">' +
      statCard("등록 사용자", d.user_count + "명", "", "purple") +
      statCard("오늘 받을 금액", formatAmount(d.today_amount) + "원", d.today_count + "건", "orange") +
      statCard("총 입금 예정", d.total_count + "건", formatAmount(d.total_amount) + "원", "blue") +
      statCard("입금 완료", d.paid_count + "건", formatAmount(d.paid_amount) + "원", "green") +
      statCard("미입금", d.unpaid_count + "건", formatAmount(d.unpaid_amount) + "원", "red") +
      "</div>" +
      '<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">' +
      '<div class="bg-white rounded-2xl border border-slate-200 p-6">' +
      '<h3 class="text-sm font-bold text-slate-700 mb-4">입금 현황</h3>' +
      '<div class="flex items-end gap-4 mb-4">' +
      '<span class="text-4xl font-extrabold text-slate-800">' + rate + "%</span>" +
      '<span class="text-sm text-slate-400 pb-1">' + d.paid_count + " / " + d.total_count + "건 완료</span></div>" +
      '<div class="h-3 bg-slate-100 rounded-full overflow-hidden">' +
      '<div class="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full transition-all duration-700" style="width:' + width + '%"></div></div>' +
      '<div class="flex justify-between mt-4 text-xs text-slate-400">' +
      "<span>문자 발송 " + d.sms_sent_count + "건 완료</span>" +
      "<span>미입금 " + formatAmount(d.unpaid_amount) + "원</span></div></div>" +
      '<div class="bg-white rounded-2xl border border-slate-200 p-6">' +
      '<div class="flex items-center justify-between mb-4">' +
      '<h3 class="text-sm font-bold text-slate-700">최근 문자 발송</h3>' +
      '<button data-act="nav" data-tab="logs" class="text-xs text-indigo-500 hover:text-indigo-700 font-medium">전체보기</button></div>' +
      (d.recent_logs.length === 0
        ? '<p class="text-sm text-slate-400 py-4 text-center">발송 이력 없음</p>'
        : '<div class="space-y-3">' +
          d.recent_logs
            .map(function (log) {
              return (
                '<div class="flex items-center gap-3">' +
                '<div class="w-2 h-2 rounded-full flex-shrink-0 ' + (log.status === "success" ? "bg-emerald-500" : "bg-rose-500") + '"></div>' +
                '<span class="text-sm font-medium text-slate-700 flex-1">' + esc(log.user_name) + "</span>" +
                '<span class="text-[11px] text-slate-400">' +
                esc(log.sent_at ? new Date(log.sent_at).toLocaleString("ko-KR", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }) : "") +
                "</span></div>"
              )
            })
            .join("") +
          "</div>") +
      "</div></div>" +
      (unpaid.length > 0
        ? '<div class="bg-white rounded-2xl border border-slate-200 p-6">' +
          '<h3 class="text-sm font-bold text-slate-700 mb-4">미입금 목록</h3>' +
          '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">' +
          unpaid
            .map(function (p) {
              return (
                '<div class="flex items-center gap-3 p-3 bg-rose-50/50 rounded-xl border border-rose-100">' +
                '<div class="w-9 h-9 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-bold text-xs flex-shrink-0">' + esc(p.user.name.charAt(0)) + "</div>" +
                '<div class="flex-1 min-w-0">' +
                '<div class="text-sm font-semibold text-slate-700">' + esc(p.user.name) + "</div>" +
                '<div class="text-xs text-slate-400">' + esc(p.due_date) + " | " + formatAmount(p.amount) + "원</div></div>" +
                '<button data-act="sendOne" data-id="' + p.id + '"' + (state.loading ? " disabled" : "") + ' class="text-[11px] font-medium text-indigo-600 hover:text-indigo-800 flex-shrink-0">문자</button>' +
                "</div>"
              )
            })
            .join("") +
          "</div></div>"
        : "") +
      "</div>"
    )
  }

  // ===== 달력 =====
  function calendarTab(payments) {
    var sel = state.selectedDate
    var selected = sel
      ? payments.filter(function (p) {
          return p.due_date === sel
        })
      : []
    var side
    if (sel) {
      side =
        '<div class="bg-white rounded-2xl border border-slate-200 p-5">' +
        '<h3 class="text-sm font-bold text-slate-700 mb-3">' + esc(sel.replace(/-/g, ".")) + "</h3>" +
        (selected.length === 0
          ? '<p class="text-xs text-slate-400">내역 없음</p>'
          : '<div class="space-y-2">' +
            selected
              .map(function (p) {
                return (
                  '<div class="rounded-xl p-3 border ' + (p.is_paid ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200") + '">' +
                  '<div class="flex justify-between items-center">' +
                  '<span class="text-sm font-semibold text-slate-700">' + esc(p.user.name) + "</span>" +
                  '<span class="text-sm font-bold text-slate-800">' + formatAmount(p.amount) + "원</span></div>" +
                  '<div class="text-[11px] text-slate-400 mt-0.5">' + esc(formatPhone(p.user.phone)) + "</div>" +
                  (p.memo ? '<div class="text-[11px] text-slate-400 mt-1">' + esc(p.memo) + "</div>" : "") +
                  '<div class="flex items-center gap-2 mt-2">' +
                  '<label class="flex items-center gap-1.5 cursor-pointer">' + paidCheckbox(p) +
                  '<span class="text-[11px] font-medium ' + (p.is_paid ? "text-emerald-600" : "text-rose-600") + '">' + (p.is_paid ? "입금완료" : "미입금") + "</span></label>" +
                  (p.sms_sent ? '<span class="text-[10px] text-indigo-400">발송됨</span>' : "") +
                  '<div class="flex-1"></div>' +
                  (!p.is_paid ? smsButton(p) : "") +
                  "</div></div>"
                )
              })
              .join("") +
            "</div>") +
        "</div>"
    } else {
      side = '<div class="bg-white rounded-2xl border border-slate-200 p-5"><p class="text-xs text-slate-400 text-center py-4">날짜를 선택하세요</p></div>'
    }
    return (
      '<div class="grid grid-cols-1 xl:grid-cols-4 gap-6">' +
      '<div class="xl:col-span-3"><div class="bg-white rounded-2xl border border-slate-200 p-5">' +
      '<div class="flex items-center justify-between mb-5">' +
      '<button data-act="month" data-d="-1" class="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 font-bold">&lt;</button>' +
      '<h2 class="text-lg font-bold text-slate-800 tracking-tight">' + state.year + "년 " + state.month + "월</h2>" +
      '<button data-act="month" data-d="1" class="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 font-bold">&gt;</button>' +
      "</div>" +
      calendarView(state.year, state.month, payments) +
      "</div></div>" +
      '<div class="space-y-4">' + side + "</div></div>"
    )
  }

  // ===== 사용자 관리 =====
  var inputCls = "focus:outline-none focus:ring-2 focus:ring-indigo-500"
  function usersTab(payments) {
    var editing = state.editingUser
    var html =
      '<div class="space-y-4">' +
      '<div class="bg-white rounded-2xl border border-slate-200 p-5">' +
      '<h3 class="text-sm font-bold text-slate-700 mb-3">' + (editing ? "사용자 수정" : "사용자 등록") + "</h3>" +
      '<div class="flex gap-2 flex-wrap">' +
      '<input id="f-userName" type="text" placeholder="이름" value="' + esc(state.userName) + '" data-input="userName" class="border border-slate-200 rounded-lg px-3 py-2 text-sm w-40 ' + inputCls + ' focus:border-transparent">' +
      '<input id="f-userPhone" type="text" placeholder="전화번호" value="' + esc(state.userPhone) + '" data-input="userPhone" class="border border-slate-200 rounded-lg px-3 py-2 text-sm w-48 ' + inputCls + ' focus:border-transparent">' +
      '<button data-act="saveUser" class="bg-indigo-600 text-white rounded-lg px-5 py-2 text-sm font-semibold hover:bg-indigo-700 transition-colors">' + (editing ? "수정" : "등록") + "</button>" +
      (editing ? '<button data-act="cancelEdit" class="bg-slate-100 text-slate-600 rounded-lg px-4 py-2 text-sm hover:bg-slate-200">취소</button>' : "") +
      "</div></div>"

    state.users.forEach(function (u) {
      var isExpanded = state.expandedUser === u.id
      var uPayments = payments.filter(function (p) {
        return p.user_id === u.id
      })
      var paidCount = uPayments.filter(function (p) {
        return p.is_paid
      }).length
      var unpaidCount = uPayments.length - paidCount
      html +=
        '<div class="bg-white rounded-2xl border border-slate-200 overflow-hidden">' +
        '<div data-act="expand" data-id="' + u.id + '" class="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors pf-wrap">' +
        '<div class="flex items-center gap-3">' +
        '<div class="w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">' + esc(u.name.charAt(0)) + "</div>" +
        "<div>" +
        '<div class="font-bold text-slate-800 text-sm">' + esc(u.name) + "</div>" +
        '<div class="text-[11px] text-slate-400">' + esc(formatPhone(u.phone)) + "</div></div></div>" +
        '<div class="flex items-center gap-4">' +
        '<div class="flex gap-2">' +
        (paidCount > 0 ? '<span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">' + paidCount + "건 완료</span>" : "") +
        (unpaidCount > 0 ? '<span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">' + unpaidCount + "건 미입금</span>" : "") +
        "</div>" +
        '<button data-act="editUser" data-id="' + u.id + '" class="text-xs text-indigo-500 hover:text-indigo-700 font-medium">수정</button>' +
        '<button data-act="deleteUser" data-id="' + u.id + '" class="text-xs text-rose-400 hover:text-rose-600 font-medium">삭제</button>' +
        '<span class="text-slate-300 transition-transform duration-200 ' + (isExpanded ? "rotate-180" : "") + '">' + icons.chevron + "</span>" +
        "</div></div>"
      if (isExpanded) {
        html +=
          '<div class="border-t border-slate-100 px-5 pb-5 bg-slate-50/30">' +
          '<div class="flex gap-2 py-4 flex-wrap">' +
          '<input id="f-payDate" type="date" value="' + esc(state.payDate) + '" data-change="payDate" class="border border-slate-200 rounded-lg px-3 py-1.5 text-sm bg-white ' + inputCls + '">' +
          '<input id="f-payAmount" type="text" placeholder="금액" value="' + esc(state.payAmount) + '" data-input="payAmount" class="border border-slate-200 rounded-lg px-3 py-1.5 text-sm w-28 bg-white ' + inputCls + '">' +
          '<input id="f-payMemo" type="text" placeholder="메모" value="' + esc(state.payMemo) + '" data-input="payMemo" class="border border-slate-200 rounded-lg px-3 py-1.5 text-sm w-36 bg-white ' + inputCls + '">' +
          '<button data-act="addPayment" data-id="' + u.id + '" class="bg-emerald-600 text-white rounded-lg px-3 py-1.5 text-sm font-semibold hover:bg-emerald-700 transition-colors">추가</button>' +
          "</div>" +
          (uPayments.length === 0
            ? '<p class="text-xs text-slate-400 py-2">등록된 일정 없음</p>'
            : '<div class="space-y-1">' +
              uPayments
                .map(function (p) {
                  return (
                    '<div class="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white transition-colors">' +
                    paidCheckbox(p) +
                    '<span class="text-sm w-24 ' + (p.is_paid ? "text-slate-400 line-through" : "font-medium text-slate-700") + '">' + esc(p.due_date.replace(/-/g, ".")) + "</span>" +
                    '<span class="text-sm font-bold w-28 text-right ' + (p.is_paid ? "text-emerald-600" : "text-slate-800") + '">' + formatAmount(p.amount) + "원</span>" +
                    '<span class="text-[11px] text-slate-400 flex-1 truncate">' + esc(p.memo) + "</span>" +
                    '<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full ' + (p.is_paid ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700") + '">' + (p.is_paid ? "완료" : "미입금") + "</span>" +
                    (p.sms_sent ? '<span class="text-[10px] text-indigo-400">발송됨</span>' : "") +
                    (!p.is_paid ? smsButton(p) : "") +
                    '<button data-act="deletePayment" data-id="' + p.id + '" class="text-[11px] text-slate-300 hover:text-rose-500">삭제</button>' +
                    "</div>"
                  )
                })
                .join("") +
              "</div>") +
          "</div>"
      }
      html += "</div>"
    })
    if (state.users.length === 0) {
      html +=
        '<div class="bg-white rounded-2xl border border-slate-200 p-12 text-center">' +
        '<div class="text-slate-300 text-4xl mb-3">' + icons.users + "</div>" +
        '<p class="text-sm text-slate-400">등록된 사용자가 없습니다</p></div>'
    }
    return html + "</div>"
  }

  // ===== 발송 이력 =====
  var PAGE_SIZE = 50
  function filteredLogs() {
    var q = state.logQuery.trim().replace(/-/g, "")
    return sortedLogs().filter(function (l) {
      if (state.logStatus !== "all" && l.status !== state.logStatus) return false
      if (q && l.user_name.indexOf(q) < 0 && l.phone.indexOf(q) < 0) return false
      return true
    })
  }
  function logsTab() {
    var all = filteredLogs()
    var total = all.length
    var pages = Math.max(1, Math.ceil(total / PAGE_SIZE))
    if (state.logPage > pages) state.logPage = pages
    var page = state.logPage
    var logs = all.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
    var th = function (t, align) {
      return '<th class="text-' + align + ' py-3 px-5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">' + t + "</th>"
    }
    var opt = function (v, t) {
      return '<option value="' + v + '"' + (state.logStatus === v ? " selected" : "") + ">" + t + "</option>"
    }
    return (
      '<div class="bg-white rounded-2xl border border-slate-200">' +
      '<div class="px-6 py-4 border-b border-slate-200 flex items-center justify-between flex-wrap gap-2">' +
      '<h3 class="text-sm font-bold text-slate-700">발송 이력 <span class="text-slate-400 font-normal ml-1">총 ' + total + "건</span></h3>" +
      '<div class="flex gap-2 flex-wrap">' +
      '<select id="f-logStatus" data-change="logStatus" class="border border-slate-200 rounded-lg px-3 py-1.5 text-xs bg-white ' + inputCls + '">' +
      opt("all", "전체 상태") + opt("success", "성공") + opt("fail", "실패") +
      "</select>" +
      '<input id="f-logQuery" type="text" placeholder="이름·전화번호 검색" value="' + esc(state.logQuery) + '" data-input="logQuery" class="border border-slate-200 rounded-lg px-3 py-1.5 text-xs w-36 bg-white ' + inputCls + '">' +
      "</div></div>" +
      (logs.length === 0
        ? '<p class="text-sm text-slate-400 text-center py-12">발송 이력 없음</p>'
        : '<div class="overflow-x-auto"><table class="w-full"><thead><tr class="border-b border-slate-100">' +
          th("이름", "left") + th("전화번호", "left") + th("발송 내용", "left") + th("상태", "center") + th("시간", "left") + th("오류", "left") +
          "</tr></thead><tbody>" +
          logs
            .map(function (log) {
              var ok = log.status === "success"
              return (
                '<tr class="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">' +
                '<td class="py-3 px-5 text-sm font-medium text-slate-700">' + esc(log.user_name) + "</td>" +
                '<td class="py-3 px-5 text-sm text-slate-500">' + esc(formatPhone(log.phone)) + "</td>" +
                '<td class="py-3 px-5 text-sm text-slate-500 max-w-xs truncate" title="' + esc(log.message) + '">' + esc(log.message) + "</td>" +
                '<td class="py-3 px-5 text-center"><span class="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full ' + (ok ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700") + '">' +
                '<span class="w-1.5 h-1.5 rounded-full ' + (ok ? "bg-emerald-500" : "bg-rose-500") + '"></span>' + (ok ? "성공" : "실패") + "</span></td>" +
                '<td class="py-3 px-5 text-xs text-slate-400">' + esc(log.sent_at ? new Date(log.sent_at).toLocaleString("ko-KR") : "") + "</td>" +
                '<td class="py-3 px-5 text-xs text-rose-400">' + esc(log.error) + "</td></tr>"
              )
            })
            .join("") +
          "</tbody></table></div>" +
          '<div class="px-6 py-4 border-t border-slate-100 flex justify-between items-center">' +
          '<span class="text-xs text-slate-400">' + page + " / " + pages + " 페이지</span>" +
          '<div class="flex gap-2">' +
          '<button data-act="logPage" data-d="-1"' + (page <= 1 ? " disabled" : "") + ' class="px-3 py-1.5 text-xs font-medium border border-slate-200 rounded-lg disabled:opacity-30 hover:bg-slate-50">이전</button>' +
          '<button data-act="logPage" data-d="1"' + (page >= pages ? " disabled" : "") + ' class="px-3 py-1.5 text-xs font-medium border border-slate-200 rounded-lg disabled:opacity-30 hover:bg-slate-50">다음</button>' +
          "</div></div>") +
      "</div>"
    )
  }

  // ===== 설정 =====
  function settingsTab() {
    var preview = fill(state.smsTemplate, { 이름: "홍길동", 입금일: TODAY.replace(/-/g, "."), 금액: "120,000", 메모: " (복합기 렌탈 " + TM + "월분)" })
    var todayTargets = autoTargets().length
    var nextRun = (state.lastAutoRun === TODAY || nowHM() > state.savedSendTime ? "내일 " : "오늘 ") + state.savedSendTime
    return (
      '<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">' +
      '<div class="bg-white rounded-2xl border border-slate-200 p-6">' +
      '<h3 class="text-sm font-bold text-slate-700 mb-1">문자 템플릿</h3>' +
      '<p class="text-[11px] text-slate-400 mb-4">변수를 사용하여 발송 문자 양식을 설정합니다.</p>' +
      '<div class="flex flex-wrap gap-1.5 mb-3">' +
      ["{이름}", "{입금일}", "{금액}", "{메모}"]
        .map(function (v) {
          return '<code data-act="insertVar" data-v="' + v + '" class="bg-indigo-50 text-indigo-600 text-[11px] px-2 py-0.5 rounded-md font-mono cursor-pointer">' + v + "</code>"
        })
        .join("") +
      "</div>" +
      '<textarea id="f-template" data-input="template" rows="4" class="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono resize-none ' + inputCls + ' focus:border-transparent">' + esc(state.smsTemplate) + "</textarea>" +
      '<div class="flex gap-2 mt-3">' +
      '<button data-act="saveTemplate" class="bg-indigo-600 text-white rounded-lg px-4 py-2 text-xs font-semibold hover:bg-indigo-700 transition-colors">저장</button>' +
      '<button data-act="resetTemplate" class="bg-slate-100 text-slate-600 rounded-lg px-4 py-2 text-xs font-medium hover:bg-slate-200 transition-colors">기본값 복원</button>' +
      "</div>" +
      '<div class="mt-5 pt-4 border-t border-slate-100">' +
      '<h4 class="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">미리보기</h4>' +
      '<div id="tpl-preview" class="bg-slate-50 rounded-xl p-4 text-sm text-slate-600 leading-relaxed">' + esc(preview) + "</div>" +
      "</div></div>" +
      '<div class="bg-white rounded-2xl border border-slate-200 p-6">' +
      '<h3 class="text-sm font-bold text-slate-700 mb-1">자동 발송 시간</h3>' +
      '<p class="text-[11px] text-slate-400 mb-4">매일 설정한 시간에 당일 입금 예정자에게 자동 문자가 발송됩니다.</p>' +
      '<div class="flex gap-2 items-center flex-wrap">' +
      '<input id="f-sendTime" type="time" value="' + esc(state.sendTime) + '" data-change="sendTime" class="border border-slate-200 rounded-lg px-4 py-2.5 text-sm bg-white ' + inputCls + ' focus:border-transparent">' +
      '<button data-act="saveSendTime" class="bg-indigo-600 text-white rounded-lg px-4 py-2.5 text-xs font-semibold hover:bg-indigo-700 transition-colors">저장</button>' +
      '<button data-act="autoTest"' + (state.loading ? " disabled" : "") + ' class="flex items-center gap-1.5 bg-slate-100 text-slate-600 rounded-lg px-4 py-2.5 text-xs font-medium hover:bg-slate-200 transition-colors disabled:opacity-50">' + icons.send + " 지금 발송 테스트</button>" +
      "</div>" +
      '<div class="flex justify-between mt-4 text-xs text-slate-400">' +
      "<span>다음 자동 발송: " + esc(nextRun) + "</span>" +
      "<span>오늘 발송 대상 " + todayTargets + "건 (미입금만)</span></div>" +
      '<div class="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">' +
      '<h4 class="text-xs font-bold text-amber-700 mb-1">문자 발송 API 설정</h4>' +
      '<p class="text-[11px] text-amber-600 leading-relaxed">체험판에서는 실제 문자가 발송되지 않습니다.<br>발송 결과는 [발송 이력]에만 기록됩니다.</p>' +
      "</div></div></div>"
    )
  }

  // ===== 로그인 =====
  function loginView() {
    return (
      '<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">' +
      '<div class="bg-white/10 backdrop-blur-xl rounded-3xl p-8 w-full max-w-sm border border-white/20 shadow-2xl">' +
      '<div class="flex items-center gap-3 mb-8">' +
      '<div class="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center font-bold text-white text-lg">P</div>' +
      '<span class="font-bold text-2xl text-white tracking-tight">PayFlow</span></div>' +
      '<form data-submit="login" class="space-y-4"><div>' +
      '<label class="text-xs font-semibold text-slate-300 uppercase tracking-wider">비밀번호</label>' +
      '<input id="f-password" name="password" type="password" value="' + esc(state.password) + '" data-input="password" placeholder="비밀번호를 입력하세요" autofocus class="mt-2 w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">' +
      '<p class="text-[11px] text-slate-400 mt-2">체험판: 아무 비밀번호나 입력하면 들어갈 수 있습니다.</p>' +
      "</div>" +
      '<button id="f-loginBtn" type="submit"' + (state.password ? "" : " disabled") + ' class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold rounded-xl px-4 py-3 transition-colors">로그인</button>' +
      "</form></div></div>"
    )
  }

  // ===== 전체 틀 =====
  var TABS = {
    "/": "dashboard",
    "/calendar": "calendar",
    "/users": "users",
    "/logs": "logs",
    "/settings": "settings",
  }
  var TITLES = { dashboard: "대시보드", calendar: "달력", users: "사용자 관리", logs: "발송 이력", settings: "설정" }

  function render(route) {
    if (route.path === "/login") return loginView()
    var tab = TABS[route.path] || "dashboard"
    var payments = monthPayments()
    var open = state.sidebarOpen
    var nav = [
      ["dashboard", "대시보드", icons.dashboard],
      ["calendar", "달력", icons.calendar],
      ["users", "사용자 관리", icons.users],
      ["logs", "발송 이력", icons.logs],
      ["settings", "설정", icons.settings],
    ]
    var body = { dashboard: dashboardView, calendar: calendarTab, users: usersTab, logs: logsTab, settings: settingsTab }[tab](payments)
    return (
      '<div class="flex h-screen overflow-hidden">' +
      '<aside class="' + (open ? "w-60" : "w-16") + ' bg-slate-900 text-white flex flex-col transition-all duration-300 flex-shrink-0">' +
      '<div class="p-4 flex items-center gap-3 border-b border-slate-700/50">' +
      '<div class="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">P</div>' +
      (open ? '<span class="font-bold text-lg tracking-tight">PayFlow</span>' : "") +
      "</div>" +
      '<nav class="flex-1 py-4 space-y-1 px-2">' +
      nav
        .map(function (n) {
          return (
            '<button data-act="nav" data-tab="' + n[0] + '" title="' + n[1] + '" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ' +
            (tab === n[0] ? "bg-indigo-500/20 text-indigo-400" : "text-slate-400 hover:text-white hover:bg-slate-800") + '">' +
            '<span class="flex-shrink-0">' + n[2] + "</span>" + (open ? "<span>" + n[1] + "</span>" : "") + "</button>"
          )
        })
        .join("") +
      "</nav>" +
      '<div class="border-t border-slate-700/50">' +
      '<button data-act="logout" class="w-full p-3 text-rose-400 hover:text-rose-300 hover:bg-slate-800 text-xs font-medium transition-colors flex items-center gap-2 justify-center">' + icons.logout + (open ? "로그아웃" : "") + "</button>" +
      '<button data-act="toggleSidebar" class="w-full p-3 text-slate-500 hover:text-slate-300 text-xs">' + (open ? "&lt;&lt;  접기" : "&gt;&gt;") + "</button>" +
      "</div></aside>" +
      '<main id="pf-main" class="flex-1 overflow-y-auto pf-main min-w-0">' +
      '<header class="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">' +
      "<div>" +
      '<h1 class="text-lg font-bold text-slate-800">' + TITLES[tab] + "</h1>" +
      '<p class="text-xs text-slate-400 mt-0.5">' + state.year + "년 " + state.month + "월</p></div>" +
      '<div class="flex items-center gap-3">' +
      '<a href="#" data-act="excel" class="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">' + icons.download + " 엑셀</a>" +
      '<button data-act="bulk"' + (state.loading ? " disabled" : "") + ' class="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors">' +
      icons.send + " " + (state.loading ? "발송 중..." : "일괄 문자 발송") + "</button>" +
      "</div></header>" +
      '<div class="p-6">' + body + "</div>" +
      "</main></div>"
    )
  }

  // 다시 그리기: 스크롤 위치(main 안쪽)와 입력 중인 칸의 포커스를 그대로 유지
  function refresh() {
    var main = document.getElementById("pf-main")
    var top = main ? main.scrollTop : 0
    var a = document.activeElement
    var fid = a && a.id && /^f-/.test(a.id) ? a.id : null
    var s = null,
      e = null
    try {
      s = a.selectionStart
      e = a.selectionEnd
    } catch (_) {}
    Demo.update()
    main = document.getElementById("pf-main")
    if (main) main.scrollTop = top
    if (fid) {
      var el = document.getElementById(fid)
      if (el) {
        el.focus()
        try {
          if (s != null) el.setSelectionRange(s, e)
        } catch (_) {}
      }
    }
  }

  // ---------- 발송 (시뮬레이션) ----------
  function sendSimulated(list, done) {
    state.loading = true
    refresh()
    setTimeout(function () {
      var at = nowIso()
      list.forEach(function (p) {
        var pp = withUser(p)
        addLog(pp.user, buildMessage(state.savedTemplate, pp), "success", "", at)
        p.sms_sent = true
      })
      state.loading = false
      refresh()
      done(list.length)
    }, 600)
  }
  function findPayment(id) {
    id = Number(id)
    for (var i = 0; i < state.payments.length; i++) if (state.payments[i].id === id) return state.payments[i]
    return null
  }
  function nowHM() {
    var d = new Date()
    return pad(d.getHours()) + ":" + pad(d.getMinutes())
  }
  // 자동 발송 대상: 오늘이 입금일이고, 아직 미입금이며, 아직 문자를 받지 않은 건
  function autoTargets() {
    return state.payments.filter(function (p) {
      return p.due_date === TODAY && !p.is_paid && !p.sms_sent && userById(p.user_id)
    })
  }
  function runAuto(reason) {
    var list = autoTargets()
    state.lastAutoRun = TODAY
    if (!list.length) {
      Demo.toast(reason + ": 오늘 미입금 대상이 없습니다")
      refresh()
      return
    }
    sendSimulated(list, function (n) {
      Demo.toast(reason + ": 미입금 " + n + "건 발송 완료 (가상)")
    })
  }
  setInterval(function () {
    if (location.hash.indexOf("/login") >= 0) return
    if (state.lastAutoRun !== TODAY && nowHM() === state.savedSendTime) runAuto("자동 발송 " + state.savedSendTime)
  }, 15000)

  // ---------- 동작 ----------
  Demo.on("nav", function (d) {
    var path = { dashboard: "/", calendar: "/calendar", users: "/users", logs: "/logs", settings: "/settings" }[d.tab]
    Demo.go(path)
  })
  Demo.on("toggleSidebar", function () {
    state.sidebarOpen = !state.sidebarOpen
    refresh()
  })
  Demo.on("logout", function () {
    state.password = ""
    Demo.go("/login")
  })
  Demo.on("password", function (v) {
    state.password = v
    var b = document.getElementById("f-loginBtn")
    if (b) b.disabled = !v
  })
  Demo.on("login", function (values) {
    if (!values.password) return
    state.password = ""
    Demo.go("/")
    Demo.toast("로그인 성공")
  })

  Demo.on("month", function (d) {
    var m = state.month + Number(d.d),
      y = state.year
    if (m > 12) {
      m = 1
      y++
    }
    if (m < 1) {
      m = 12
      y--
    }
    state.year = y
    state.month = m
    state.selectedDate = null
    refresh()
  })
  Demo.on("selDate", function (d) {
    state.selectedDate = d.date
    refresh()
  })

  Demo.on("togglePaid", function (_v, el) {
    var p = findPayment(el.dataset.id)
    if (!p) return
    p.is_paid = el.checked
    Demo.toast(p.is_paid ? "입금 확인 처리" : "미입금으로 변경")
    refresh()
  })
  Demo.on("sendOne", function (d) {
    var p = findPayment(d.id)
    if (!p || state.loading) return
    var msg = buildMessage(state.savedTemplate, withUser(p))
    if (!confirm("문자 발송:\n\n" + msg)) return
    sendSimulated([p], function () {
      Demo.toast("문자 발송 완료 (가상)")
    })
  })
  Demo.on("bulk", function () {
    if (state.loading) return
    if (!confirm("미입금 건 일괄 문자 발송하시겠습니까?")) return
    var list = state.payments.filter(function (p) {
      return !p.is_paid && !p.sms_sent && p.due_date <= MONTH_END && userById(p.user_id)
    })
    if (!list.length) return Demo.toast("발송할 대상이 없습니다")
    sendSimulated(list, function (n) {
      Demo.toast(n + "건 발송 완료 (가상)")
    })
  })

  // 사용자
  Demo.on("userName", function (v) {
    state.userName = v
  })
  Demo.on("userPhone", function (v) {
    state.userPhone = v
  })
  Demo.on("saveUser", function () {
    var name = state.userName.trim()
    var phone = state.userPhone.replace(/\D/g, "")
    if (!name || !state.userPhone.trim()) return Demo.toast("이름과 전화번호를 입력하세요")
    if (phone.length < 10 || phone.length > 11 || phone.indexOf("01") !== 0) return Demo.toast("올바른 휴대폰 번호를 입력하세요")
    var editing = state.editingUser
    if (editing) {
      var u = userById(editing)
      if (u) {
        u.name = name
        u.phone = phone
      }
    } else {
      state.users.push({ id: state.nextUserId++, name: name, phone: phone, created_at: nowIso() })
      state.users.sort(function (a, b) {
        return a.name.localeCompare(b.name, "ko")
      })
    }
    state.userName = ""
    state.userPhone = ""
    state.editingUser = null
    Demo.toast(editing ? "수정 완료" : "등록 완료")
    refresh()
  })
  Demo.on("editUser", function (d) {
    var u = userById(Number(d.id))
    if (!u) return
    state.editingUser = u.id
    state.userName = u.name
    state.userPhone = u.phone
    refresh()
    var main = document.getElementById("pf-main")
    if (main) main.scrollTop = 0
  })
  Demo.on("cancelEdit", function () {
    state.editingUser = null
    state.userName = ""
    state.userPhone = ""
    refresh()
  })
  Demo.on("deleteUser", function (d) {
    if (!confirm("삭제하시겠습니까?")) return
    var id = Number(d.id)
    state.users = state.users.filter(function (u) {
      return u.id !== id
    })
    state.payments = state.payments.filter(function (p) {
      return p.user_id !== id
    })
    if (state.editingUser === id) state.editingUser = null
    Demo.toast("삭제 완료")
    refresh()
  })
  Demo.on("expand", function (d) {
    var id = Number(d.id)
    state.expandedUser = state.expandedUser === id ? null : id
    refresh()
  })
  Demo.on("payDate", function (v) {
    state.payDate = v
  })
  Demo.on("payAmount", function (v, el) {
    var clean = v.replace(/[^\d]/g, "")
    state.payAmount = clean
    if (el.value !== clean) el.value = clean
  })
  Demo.on("payMemo", function (v) {
    state.payMemo = v
  })
  Demo.on("addPayment", function (d) {
    if (!state.payDate || !state.payAmount) return Demo.toast("날짜와 금액을 입력하세요")
    state.payments.push({
      id: state.nextPayId++,
      user_id: Number(d.id),
      due_date: state.payDate,
      amount: parseInt(state.payAmount, 10),
      memo: state.payMemo.trim(),
      is_paid: false,
      sms_sent: false,
      created_at: nowIso(),
    })
    state.payDate = ""
    state.payAmount = ""
    state.payMemo = ""
    Demo.toast("입금 일정 등록 완료")
    refresh()
  })
  Demo.on("deletePayment", function (d) {
    if (!confirm("삭제하시겠습니까?")) return
    var id = Number(d.id)
    state.payments = state.payments.filter(function (p) {
      return p.id !== id
    })
    Demo.toast("삭제 완료")
    refresh()
  })

  // 발송 이력
  Demo.on("logStatus", function (v) {
    state.logStatus = v
    state.logPage = 1
    refresh()
  })
  Demo.on("logQuery", function (v) {
    state.logQuery = v
    state.logPage = 1
    refresh()
  })
  Demo.on("logPage", function (d) {
    state.logPage += Number(d.d)
    refresh()
    var main = document.getElementById("pf-main")
    if (main) main.scrollTop = 0
  })

  // 설정
  Demo.on("insertVar", function (d) {
    var ta = document.getElementById("f-template")
    if (!ta) return
    var s = ta.selectionStart,
      e = ta.selectionEnd
    ta.value = ta.value.slice(0, s) + d.v + ta.value.slice(e)
    ta.focus()
    ta.setSelectionRange(s + d.v.length, s + d.v.length)
    handlersTemplate(ta.value)
  })
  function handlersTemplate(v) {
    state.smsTemplate = v
    var pv = document.getElementById("tpl-preview")
    if (pv) pv.textContent = fill(v, { 이름: "홍길동", 입금일: TODAY.replace(/-/g, "."), 금액: "120,000", 메모: " (복합기 렌탈 " + TM + "월분)" })
  }
  Demo.on("template", handlersTemplate)
  Demo.on("saveTemplate", function () {
    if (!state.smsTemplate.trim()) return Demo.toast("문구를 입력하세요")
    state.savedTemplate = state.smsTemplate
    Demo.toast("템플릿 저장 완료")
  })
  Demo.on("resetTemplate", function () {
    state.smsTemplate = DEFAULT_TEMPLATE
    state.savedTemplate = DEFAULT_TEMPLATE
    Demo.toast("기본값 복원")
    refresh()
  })
  Demo.on("sendTime", function (v) {
    state.sendTime = v
  })
  Demo.on("saveSendTime", function () {
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(state.sendTime)) return Demo.toast("올바른 시간 형식이 아닙니다 (HH:MM)")
    state.savedSendTime = state.sendTime
    if (state.sendTime > nowHM()) state.lastAutoRun = null
    Demo.toast("자동 발송 시간: " + state.sendTime + " 저장")
    refresh()
  })
  Demo.on("autoTest", function () {
    if (state.loading) return
    runAuto("발송 테스트")
  })

  // 월별 정산 (엑셀에서 열리는 CSV)
  Demo.on("excel", function () {
    var payments = monthPayments()
    var q = function (v) {
      v = String(v == null ? "" : v)
      return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v
    }
    var rows = [[state.year + "년 " + state.month + "월 입금내역"], ["번호", "이름", "전화번호", "입금일", "금액", "메모", "입금여부", "문자발송"]]
    payments.forEach(function (p, i) {
      rows.push([i + 1, p.user.name, formatPhone(p.user.phone), p.due_date, p.amount, p.memo, p.is_paid ? "입금완료" : "미입금", p.sms_sent ? "발송됨" : "미발송"])
    })
    var sum = function (f) {
      return payments.filter(f).reduce(function (a, p) {
        return a + p.amount
      }, 0)
    }
    rows.push([])
    rows.push(["", "", "", "합계", sum(function () { return true })])
    rows.push(["", "", "", "입금완료", sum(function (p) { return p.is_paid })])
    rows.push(["", "", "", "미입금", sum(function (p) { return !p.is_paid })])
    rows.push([])
    rows.push(["문자 발송 이력"])
    rows.push(["번호", "이름", "전화번호", "발송내용", "상태", "발송시간", "오류"])
    sortedLogs()
      .slice(0, 500)
      .forEach(function (l, i) {
        rows.push([i + 1, l.user_name, formatPhone(l.phone), l.message, l.status === "success" ? "성공" : "실패", l.sent_at.slice(0, 16).replace("T", " "), l.error])
      })
    var csv = "﻿" + rows.map(function (r) { return r.map(q).join(",") }).join("\r\n")
    var url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }))
    var a = document.createElement("a")
    a.href = url
    a.download = "payment_" + state.year + "_" + pad(state.month) + ".csv"
    document.body.appendChild(a)
    a.click()
    a.remove()
    setTimeout(function () {
      URL.revokeObjectURL(url)
    }, 1000)
    Demo.toast(state.year + "년 " + state.month + "월 정산 파일을 내려받았습니다")
  })

  Demo.mount(render)
  Demo.banner()
})()
