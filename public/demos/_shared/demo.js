/* 와이넥스 포트폴리오 체험판 공용 런타임
 * - 각 ERP 체험판(public/demos/<slug>/app.js)이 함께 쓰는 작은 도구 모음
 * - 데이터는 모두 가상이며 브라우저 메모리에만 있고, 새로고침하면 처음 상태로 돌아간다
 */
;(function () {
  var Demo = {}

  // HTML 이스케이프
  Demo.esc = function (v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
  }
  Demo.num = function (n) {
    return Math.round(Number(n) || 0).toLocaleString("ko-KR")
  }
  Demo.won = function (n) {
    return Demo.num(n) + "원"
  }
  // 오늘 기준 n일 뒤 (YYYY-MM-DD)
  Demo.day = function (offset) {
    var d = new Date()
    d.setDate(d.getDate() + (offset || 0))
    var p = function (x) {
      return String(x).padStart(2, "0")
    }
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate())
  }

  // 주소 # 뒤를 화면 경로로 쓴다. 예: #/reservations?tab=done
  Demo.route = function () {
    var h = location.hash.replace(/^#/, "") || "/"
    var i = h.indexOf("?")
    var path = i < 0 ? h : h.slice(0, i)
    var query = {}
    if (i >= 0)
      new URLSearchParams(h.slice(i + 1)).forEach(function (v, k) {
        query[k] = v
      })
    return { path: path || "/", query: query }
  }
  Demo.go = function (path) {
    location.hash = path
  }

  // 화면 그리기: Demo.mount(function (route) { return "<html>" })
  var renderFn = null
  var root = null
  Demo.mount = function (fn, el) {
    renderFn = fn
    root = el || document.getElementById("app")
    window.addEventListener("hashchange", function () {
      Demo.update()
      window.scrollTo(0, 0)
    })
    Demo.update()
  }
  Demo.update = function () {
    if (!renderFn) return
    var y = window.scrollY
    root.innerHTML = renderFn(Demo.route())
    window.scrollTo(0, y)
  }

  // 클릭 처리: data-act="이름" 이 붙은 요소를 누르면 Demo.on("이름", fn) 이 불린다
  var handlers = {}
  Demo.on = function (name, fn) {
    handlers[name] = fn
  }
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-act]")
    if (!el) return
    var fn = handlers[el.getAttribute("data-act")]
    if (!fn) return
    e.preventDefault()
    fn(el.dataset, el, e)
  })
  document.addEventListener("change", function (e) {
    var el = e.target.closest("[data-change]")
    if (!el) return
    var fn = handlers[el.getAttribute("data-change")]
    if (fn) fn(el.value, el, e)
  })
  document.addEventListener("input", function (e) {
    var el = e.target.closest("[data-input]")
    if (!el) return
    var fn = handlers[el.getAttribute("data-input")]
    if (fn) fn(el.value, el, e)
  })
  document.addEventListener("submit", function (e) {
    var el = e.target.closest("[data-submit]")
    if (!el) return
    e.preventDefault()
    var fn = handlers[el.getAttribute("data-submit")]
    if (!fn) return
    var values = {}
    new FormData(el).forEach(function (v, k) {
      values[k] = v
    })
    fn(values, el, e)
  })

  // 알림 메시지
  var toastTimer = null
  Demo.toast = function (msg) {
    var t = document.getElementById("demo-toast")
    if (!t) {
      t = document.createElement("div")
      t.id = "demo-toast"
      t.setAttribute(
        "style",
        "position:fixed;left:50%;bottom:76px;transform:translateX(-50%);z-index:2147483646;" +
          "background:#111827;color:#fff;padding:10px 18px;border-radius:12px;font:600 14px/1.4 Pretendard,system-ui,sans-serif;" +
          "box-shadow:0 10px 30px rgba(0,0,0,.25);max-width:calc(100vw - 32px);text-align:center;transition:opacity .2s;pointer-events:none",
      )
      document.body.appendChild(t)
    }
    t.textContent = msg
    t.style.opacity = "1"
    clearTimeout(toastTimer)
    toastTimer = setTimeout(function () {
      t.style.opacity = "0"
    }, 2400)
  }

  // 하단 체험판 안내 막대 (원래 화면 배치를 건드리지 않도록 떠 있는 막대로)
  Demo.banner = function (opt) {
    opt = opt || {}
    var bar = document.createElement("div")
    bar.setAttribute(
      "style",
      "position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:2147483647;display:flex;align-items:center;gap:10px;" +
        "background:rgba(17,24,39,.94);color:#fff;padding:8px 10px 8px 14px;border-radius:999px;box-shadow:0 10px 30px rgba(0,0,0,.3);" +
        "font:500 13px/1.2 Pretendard,system-ui,sans-serif;white-space:nowrap;max-width:calc(100vw - 24px);overflow-x:auto",
    )
    var a = "color:#fff;text-decoration:none;padding:6px 10px;border-radius:999px;"
    // 지금 보고 있는 체험판 (/demos/<slug>/...) → 문의 폼에 어떤 시스템인지 넘긴다
    var slug = opt.slug || (location.pathname.split("/")[2] || "")
    bar.innerHTML =
      '<span style="background:#fff;color:#111827;font-weight:700;padding:3px 8px;border-radius:999px;font-size:12px">체험판</span>' +
      '<span style="opacity:.75">가상 데이터 · 새로고침하면 처음으로</span>' +
      '<a href="' + (opt.back || "/portfolio/software") + '" style="' + a + 'background:rgba(255,255,255,.12)">← 포트폴리오</a>' +
      '<a href="/contact?from=' + encodeURIComponent(slug) + '" style="' + a + 'background:#fff;color:#111827;font-weight:700">이런 시스템 문의</a>' +
      '<button type="button" aria-label="안내 접기" style="border:0;background:transparent;color:#fff;opacity:.7;font-size:18px;line-height:1;padding:4px 6px;cursor:pointer">×</button>'
    document.body.appendChild(bar)

    // 접으면 화면을 가리지 않도록 오른쪽 아래 작은 표시만 남긴다
    var chip = document.createElement("button")
    chip.type = "button"
    chip.textContent = "체험판"
    chip.setAttribute(
      "style",
      "position:fixed;right:16px;bottom:16px;z-index:2147483647;display:none;border:0;cursor:pointer;" +
        "background:rgba(17,24,39,.9);color:#fff;padding:7px 12px;border-radius:999px;font:700 12px/1 Pretendard,system-ui,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.25)",
    )
    document.body.appendChild(chip)
    bar.querySelector("button").addEventListener("click", function () {
      bar.style.display = "none"
      chip.style.display = "block"
    })
    chip.addEventListener("click", function () {
      chip.style.display = "none"
      bar.style.display = "flex"
    })
  }

  window.Demo = Demo
})()
