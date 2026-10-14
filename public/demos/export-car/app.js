// 아이콘 (lucide, 원본 화면과 같은 모양)
var ICONS = {
  "arrow-right": ["lucide-arrow-right", "<path d=\"M5 12h14\"></path><path d=\"m12 5 7 7-7 7\"></path>"],
  "arrow-up-right": ["lucide-arrow-up-right", "<path d=\"M7 7h10v10\"></path><path d=\"M7 17 17 7\"></path>"],
  "badge-check": ["lucide-badge-check", "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"></path><path d=\"m9 12 2 2 4-4\"></path>"],
  "bell": ["lucide-bell", "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"></path><path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"></path>"],
  "building-2": ["lucide-building2 lucide-building-2", "<path d=\"M10 12h4\"></path><path d=\"M10 8h4\"></path><path d=\"M14 21v-3a2 2 0 0 0-4 0v3\"></path><path d=\"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2\"></path><path d=\"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16\"></path>"],
  "calculator": ["lucide-calculator", "<rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"></rect><line x1=\"8\" x2=\"16\" y1=\"6\" y2=\"6\"></line><line x1=\"16\" x2=\"16\" y1=\"14\" y2=\"18\"></line><path d=\"M16 10h.01\"></path><path d=\"M12 10h.01\"></path><path d=\"M8 10h.01\"></path><path d=\"M12 14h.01\"></path><path d=\"M8 14h.01\"></path><path d=\"M12 18h.01\"></path><path d=\"M8 18h.01\"></path>"],
  "car": ["lucide-car", "<path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2\"></path><circle cx=\"7\" cy=\"17\" r=\"2\"></circle><path d=\"M9 17h6\"></path><circle cx=\"17\" cy=\"17\" r=\"2\"></circle>"],
  "check": ["lucide-check", "<path d=\"M20 6 9 17l-5-5\"></path>"],
  "chevron-down": ["lucide-chevron-down", "<path d=\"m6 9 6 6 6-6\"></path>"],
  "chevron-left": ["lucide-chevron-left", "<path d=\"m15 18-6-6 6-6\"></path>"],
  "chevron-right": ["lucide-chevron-right", "<path d=\"m9 18 6-6-6-6\"></path>"],
  "chevrons-up-down": ["lucide-chevrons-up-down", "<path d=\"m7 15 5 5 5-5\"></path><path d=\"m7 9 5-5 5 5\"></path>"],
  "circle-check": ["lucide-circle-check", "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"m9 12 2 2 4-4\"></path>"],
  "circle-dollar-sign": ["lucide-circle-dollar-sign", "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8\"></path><path d=\"M12 18V6\"></path>"],
  "clipboard-check": ["lucide-clipboard-check", "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"></rect><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><path d=\"m9 14 2 2 4-4\"></path>"],
  "clipboard-list": ["lucide-clipboard-list", "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"></rect><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><path d=\"M12 11h4\"></path><path d=\"M12 16h4\"></path><path d=\"M8 11h.01\"></path><path d=\"M8 16h.01\"></path>"],
  "container": ["lucide-container", "<path d=\"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z\"></path><path d=\"M10 21.9V14L2.1 9.1\"></path><path d=\"m10 14 11.9-6.9\"></path><path d=\"M14 19.8v-8.1\"></path><path d=\"M18 17.5V9.4\"></path>"],
  "download": ["lucide-download", "<path d=\"M12 15V3\"></path><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><path d=\"m7 10 5 5 5-5\"></path>"],
  "external-link": ["lucide-external-link", "<path d=\"M15 3h6v6\"></path><path d=\"M10 14 21 3\"></path><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path>"],
  "file-spreadsheet": ["lucide-file-spreadsheet", "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"></path><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"></path><path d=\"M8 13h2\"></path><path d=\"M14 13h2\"></path><path d=\"M8 17h2\"></path><path d=\"M14 17h2\"></path>"],
  "layout-dashboard": ["lucide-layout-dashboard", "<rect width=\"7\" height=\"9\" x=\"3\" y=\"3\" rx=\"1\"></rect><rect width=\"7\" height=\"5\" x=\"14\" y=\"3\" rx=\"1\"></rect><rect width=\"7\" height=\"9\" x=\"14\" y=\"12\" rx=\"1\"></rect><rect width=\"7\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"></rect>"],
  "lock": ["lucide-lock", "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>"],
  "log-out": ["lucide-log-out", "<path d=\"m16 17 5-5-5-5\"></path><path d=\"M21 12H9\"></path><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path>"],
  "map-pin": ["lucide-map-pin", "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>"],
  "menu": ["lucide-menu", "<path d=\"M4 5h16\"></path><path d=\"M4 12h16\"></path><path d=\"M4 19h16\"></path>"],
  "pencil": ["lucide-pencil", "<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"></path><path d=\"m15 5 4 4\"></path>"],
  "phone": ["lucide-phone", "<path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\"></path>"],
  "plus": ["lucide-plus", "<path d=\"M5 12h14\"></path><path d=\"M12 5v14\"></path>"],
  "printer": ["lucide-printer", "<path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path><path d=\"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6\"></path><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\" rx=\"1\"></rect>"],
  "refresh-cw": ["lucide-refresh-cw", "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\"></path><path d=\"M21 3v5h-5\"></path><path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\"></path><path d=\"M8 16H3v5\"></path>"],
  "search": ["lucide-search", "<path d=\"m21 21-4.34-4.34\"></path><circle cx=\"11\" cy=\"11\" r=\"8\"></circle>"],
  "settings": ["lucide-settings", "<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>"],
  "shield-check": ["lucide-shield-check", "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"></path><path d=\"m9 12 2 2 4-4\"></path>"],
  "shopping-cart": ["lucide-shopping-cart", "<circle cx=\"8\" cy=\"21\" r=\"1\"></circle><circle cx=\"19\" cy=\"21\" r=\"1\"></circle><path d=\"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12\"></path>"],
  "tag": ["lucide-tag", "<path d=\"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z\"></path><circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"></circle>"],
  "trash-2": ["lucide-trash2 lucide-trash-2", "<path d=\"M10 11v6\"></path><path d=\"M14 11v6\"></path><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\"></path><path d=\"M3 6h18\"></path><path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>"],
  "triangle-alert": ["lucide-triangle-alert", "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"></path><path d=\"M12 9v4\"></path><path d=\"M12 17h.01\"></path>"],
  "truck": ["lucide-truck", "<path d=\"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2\"></path><path d=\"M15 18H9\"></path><path d=\"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14\"></path><circle cx=\"17\" cy=\"18\" r=\"2\"></circle><circle cx=\"7\" cy=\"18\" r=\"2\"></circle>"],
  "upload": ["lucide-upload", "<path d=\"M12 3v12\"></path><path d=\"m17 8-5-5-5 5\"></path><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path>"],
  "user": ["lucide-user", "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>"],
  "user-cog": ["lucide-user-cog", "<path d=\"M10 15H6a4 4 0 0 0-4 4v2\"></path><path d=\"m14.305 16.53.923-.382\"></path><path d=\"m15.228 13.852-.923-.383\"></path><path d=\"m16.852 12.228-.383-.923\"></path><path d=\"m16.852 17.772-.383.924\"></path><path d=\"m19.148 12.228.383-.923\"></path><path d=\"m19.53 18.696-.382-.924\"></path><path d=\"m20.772 13.852.924-.383\"></path><path d=\"m20.772 16.148.924.383\"></path><circle cx=\"18\" cy=\"15\" r=\"3\"></circle><circle cx=\"9\" cy=\"7\" r=\"4\"></circle>"],
  "user-plus": ["lucide-user-plus", "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><line x1=\"19\" x2=\"19\" y1=\"8\" y2=\"14\"></line><line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\"></line>"],
  "users": ["lucide-users", "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><path d=\"M16 3.128a4 4 0 0 1 0 7.744\"></path><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle>"],
  "wallet": ["lucide-wallet", "<path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"></path><path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\"></path>"],
  "warehouse": ["lucide-warehouse", "<path d=\"M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11\"></path><path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z\"></path><path d=\"M6 13h12\"></path><path d=\"M6 17h12\"></path>"],
  "x": ["lucide-x", "<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>"],
}

/* (가상) 오토브릿지 ERP · 수출 중고차 운영 관리, 와이넥스 포트폴리오 체험판
 * 화면 구성과 클래스는 실제 납품 화면을 그대로 따르고, 데이터는 모두 지어낸 가상 값이다.
 * 데이터는 브라우저 메모리에만 있으며 새로고침하면 처음 상태로 돌아간다.
 */
;(function () {
  var esc = Demo.esc
  var TODAY = Demo.day(0)

  // ───────────────────────── 공통 도구 ─────────────────────────
  function ic(name, cls) {
    var d = ICONS[name]
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide ' +
      d[0] + (cls ? " " + cls : "") + '" aria-hidden="true">' + d[1] + "</svg>"
    )
  }
  function pad(n) {
    return String(n).padStart(2, "0")
  }
  function fmtDate(d) {
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate())
  }
  function addDays(s, n) {
    var d = new Date(s + "T00:00:00")
    d.setDate(d.getDate() + n)
    return fmtDate(d)
  }
  function diffDays(a, b) {
    return Math.round((new Date(a + "T00:00:00") - new Date(b + "T00:00:00")) / 86400000)
  }
  function man(n) {
    return Demo.num(Math.round((Number(n) || 0) / 10000)) + "만원"
  }
  function manShort(n) {
    return Demo.num(Math.round((Number(n) || 0) / 10000)) + "만"
  }
  function signedMan(n) {
    return (n >= 0 ? "+" : "-") + man(Math.abs(n))
  }
  function toNum(v) {
    return Number(String(v == null ? "" : v).replace(/[^0-9.-]/g, "")) || 0
  }
  function nowStamp() {
    var d = new Date()
    return pad(d.getMonth() + 1) + "-" + pad(d.getDate()) + " " + pad(d.getHours()) + ":" + pad(d.getMinutes())
  }
  function href(path) {
    return "#" + path
  }
  function q(obj) {
    var p = []
    for (var k in obj) if (obj[k]) p.push(k + "=" + encodeURIComponent(obj[k]))
    return p.length ? "?" + p.join("&") : ""
  }

  // 결정적 난수 (매번 같은 가상 데이터)
  var seed = 20261014
  function rnd() {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    var t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  function ri(a, b) {
    return a + Math.floor(rnd() * (b - a + 1))
  }
  function pick(arr) {
    return arr[Math.floor(rnd() * arr.length)]
  }

  // ───────────────────────── 버튼 클래스 (원본 그대로) ─────────────────────────
  var B_MID =
    "bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0"
  var B_MID_SM = B_MID.replace("text-sm ", "")
  var B_SVG4 = "[&_svg:not([class*='size-'])]:size-4"
  var B_OUT =
    "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50"
  var B_GHOST = "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50"
  var B_PRI = "bg-primary text-primary-foreground [a]:hover:bg-primary/80"
  var B_SZ_MD = "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
  var B_SZ_SM =
    "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5"
  var B_SZ_ICON_SM = "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg"
  var MD = "group/button inline-flex shrink-0 items-center justify-center rounded-lg border"
  var SM = "group/button inline-flex shrink-0 items-center justify-center border"
  var BTN = {
    primary: MD + " border-transparent " + B_MID + " " + B_SVG4 + " " + B_PRI + " " + B_SZ_MD,
    outline: MD + " " + B_MID + " " + B_SVG4 + " " + B_OUT + " " + B_SZ_MD,
    outlineSm: SM + " " + B_MID_SM + " " + B_OUT + " " + B_SZ_SM,
    primarySm: SM + " border-transparent " + B_MID_SM + " " + B_PRI + " " + B_SZ_SM,
    ghostSm: SM + " border-transparent " + B_MID_SM + " " + B_GHOST + " " + B_SZ_SM,
    iconOut: SM + " " + B_MID + " " + B_SVG4 + " " + B_OUT + " " + B_SZ_ICON_SM,
    iconGhostSm: SM + " border-transparent " + B_MID + " " + B_SVG4 + " " + B_GHOST + " " + B_SZ_ICON_SM,
    iconGhost: MD + " border-transparent " + B_MID + " " + B_SVG4 + " " + B_GHOST + " size-8",
  }
  function btn(kind, inner, attrs, extra) {
    return (
      '<button type="' + ((attrs || "").indexOf("type=") >= 0 ? "" : "button") + '" ' + (attrs || "") +
      ' tabindex="0" data-slot="button" class="' + BTN[kind] + (extra ? " " + extra : "") + '">' + inner + "</button>"
    )
  }
  // type 지정이 들어간 경우 type="" 이 생기지 않도록 정리
  function sbtn(kind, inner, attrs, extra) {
    return btn(kind, inner, attrs, extra).replace('type="" ', "")
  }

  var INP = "h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
  var FSEL = "h-9 rounded-lg border border-input bg-card px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
  var SINP =
    "h-9 w-full rounded-lg border border-input bg-card pr-3 pl-9 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
  var TH = "h-10 whitespace-nowrap px-3 text-left align-middle text-xs font-medium text-muted-foreground"
  var THR = "h-10 whitespace-nowrap px-3 align-middle text-xs font-medium text-muted-foreground text-right"
  var TD = "px-3 py-2.5 align-middle"
  var TR = "border-b border-border transition-colors hover:bg-muted/50 cursor-pointer"
  var TRH = "border-b border-border transition-colors hover:bg-transparent"
  var CARD = "rounded-xl border border-border bg-card text-card-foreground shadow-sm"

  function badge(text, tone) {
    var t = {
      info: "bg-info/12 text-info",
      primary: "bg-primary/12 text-primary",
      success: "bg-success/15 text-success",
      danger: "bg-danger/12 text-danger",
      muted: "bg-muted text-muted-foreground",
      warning: "bg-warning/20 text-warning-foreground",
      warn2: "bg-warning/15 text-warning",
    }[tone || "muted"]
    return (
      '<span class="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-medium ' + t +
      '"><span class="size-1.5 rounded-full bg-current opacity-70"></span>' + esc(text) + "</span>"
    )
  }
  var STATUS_TONE = { "차량 등록": "info", "지점 이동": "warn2", "판매 완료": "primary", "정산 완료": "success" }

  function field(label, inner, extraCls) {
    return (
      '<label class="flex flex-col gap-1.5 text-sm' + (extraCls ? " " + extraCls : "") + '"><span class="font-medium text-muted-foreground">' +
      esc(label) + "</span>" + inner + "</label>"
    )
  }
  function input(form, name, opt) {
    opt = opt || {}
    var v = S.forms[form][name]
    return (
      '<input class="' + INP + (opt.cls ? " " + opt.cls : "") + '" name="' + name + '" data-input="fd" data-form="' + form + '"' +
      (opt.id ? ' id="' + opt.id + '"' : "") +
      (opt.type ? ' type="' + opt.type + '"' : "") +
      (opt.placeholder ? ' placeholder="' + esc(opt.placeholder) + '"' : "") +
      (opt.list ? ' list="' + opt.list + '"' : "") +
      (opt.inputmode ? ' inputmode="' + opt.inputmode + '"' : "") +
      (opt.maxlength ? ' maxlength="' + opt.maxlength + '"' : "") +
      ' value="' + esc(v == null ? "" : v) + '">'
    )
  }
  function select(form, name, options, opt) {
    opt = opt || {}
    var v = S.forms[form][name]
    return (
      '<select class="' + INP + '" name="' + name + '" data-input="' + (opt.handler || "fd") + '" data-form="' + form + '">' +
      options
        .map(function (o) {
          var val = Array.isArray(o) ? o[0] : o
          var label = Array.isArray(o) ? o[1] : o
          return '<option value="' + esc(val) + '"' + (String(v) === String(val) ? " selected" : "") + ">" + esc(label) + "</option>"
        })
        .join("") +
      "</select>"
    )
  }
  function fselect(list, key, label, options) {
    var v = S.f[list][key]
    return (
      '<select class="' + FSEL + '" aria-label="' + esc(label) + '" data-input="flt" data-list="' + list + '" data-k="' + key + '">' +
      '<option value="전체">' + esc(label) + ": 전체</option>" +
      options
        .map(function (o) {
          var val = Array.isArray(o) ? o[0] : o
          var lab = Array.isArray(o) ? o[1] : o
          return '<option value="' + esc(val) + '"' + (v === val ? " selected" : "") + ">" + esc(lab) + "</option>"
        })
        .join("") +
      "</select>"
    )
  }
  function searchBox(list, placeholder) {
    return (
      '<div class="relative sm:max-w-xs sm:flex-1">' +
      ic("search", "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground") +
      '<input id="s-' + list + '" placeholder="' + esc(placeholder) + '" class="' + SINP + '" data-input="flt" data-list="' + list + '" data-k="q" value="' + esc(S.f[list].q || "") + '"></div>'
    )
  }
  function excelBtn(list) {
    return btn("outlineSm", ic("download", "size-4") + "엑셀 다운로드", 'data-act="excel" data-list="' + list + '"', "sm:ml-auto")
  }
  function sortTh(list, key, label, right) {
    var s = S.sort[list] || {}
    var iconName = s.key === key ? "chevrons-up-down" : "chevrons-up-down"
    return (
      '<th class="' + (right ? THR : TH) + '"><button type="button" class="inline-flex items-center gap-1 hover:text-foreground" data-act="sort" data-list="' + list + '" data-key="' + key + '">' +
      esc(label) + (s.key === key ? (s.dir > 0 ? " ↑" : " ↓") : ic(iconName, "size-3 opacity-50")) + "</button></th>"
    )
  }
  function applySort(list, rows, getters) {
    var s = S.sort[list]
    if (!s || !getters[s.key]) return rows
    var g = getters[s.key]
    return rows.slice().sort(function (a, b) {
      var x = g(a), y = g(b)
      if (x < y) return -s.dir
      if (x > y) return s.dir
      return 0
    })
  }
  var PER = 8
  function paginate(list, rows) {
    var total = rows.length
    var pages = Math.max(1, Math.ceil(total / PER))
    var p = Math.min(Math.max(1, S.f[list].page || 1), pages)
    S.f[list].page = p
    var start = (p - 1) * PER
    return { rows: rows.slice(start, start + PER), total: total, pages: pages, page: p, from: total ? start + 1 : 1, to: Math.min(start + PER, total) }
  }
  function pager(list, pg) {
    return (
      '<div class="flex items-center justify-between text-sm text-muted-foreground"><span>총 ' + Demo.num(pg.total) + "건 중 " + pg.from + "-" + pg.to + '건</span><div class="flex items-center gap-1">' +
      btn("iconOut", ic("chevron-left", "size-4"), 'aria-label="이전" data-act="page" data-list="' + list + '" data-p="' + (pg.page - 1) + '"' + (pg.page <= 1 ? ' disabled=""' : "")) +
      '<span class="px-2 text-foreground">' + pg.page + " / " + pg.pages + "</span>" +
      btn("iconOut", ic("chevron-right", "size-4"), 'aria-label="다음" data-act="page" data-list="' + list + '" data-p="' + (pg.page + 1) + '"' + (pg.page >= pg.pages ? ' disabled=""' : "")) +
      "</div></div>"
    )
  }
  function table(head, body, colspan, wrapP1) {
    var t =
      '<div class="w-full overflow-x-auto"><table class="w-full caption-bottom text-sm"><thead class="[&_tr]:border-b [&_tr]:border-border"><tr class="' + TRH + '">' + head +
      '</tr></thead><tbody class="">' +
      (body || '<tr class="' + TRH + '"><td class="px-3 align-middle py-10 text-center text-sm text-muted-foreground" colspan="' + colspan + '">조건에 맞는 데이터가 없습니다.</td></tr>') +
      "</tbody></table></div>"
    return wrapP1 ? t : '<div class="rounded-xl border border-border bg-card">' + t + "</div>"
  }
  function pageHead(o) {
    var crumbs = ""
    if (o.crumbs) {
      crumbs =
        '<nav class="mb-2 flex items-center gap-1 text-xs text-muted-foreground">' +
        o.crumbs
          .map(function (c, i) {
            var last = i === o.crumbs.length - 1
            var label = Array.isArray(c) ? c[0] : c
            var link = Array.isArray(c) ? c[1] : null
            var inner = last
              ? '<span class="font-medium text-foreground">' + esc(label) + "</span>"
              : link
                ? '<a class="hover:text-foreground" href="' + href(link) + '">' + esc(label) + "</a>"
                : '<span class="">' + esc(label) + "</span>"
            return '<span class="flex items-center gap-1">' + (i ? ic("chevron-right", "h-3 w-3") : "") + inner + "</span>"
          })
          .join("") +
        "</nav>"
    }
    return (
      '<div class="mb-5">' + crumbs +
      '<div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><h1 class="text-xl font-bold tracking-tight text-balance">' + esc(o.title) +
      '</h1><p class="mt-1 text-sm text-muted-foreground text-pretty">' + esc(o.desc) + "</p></div>" +
      (o.actions ? '<div class="flex flex-wrap items-center gap-2">' + o.actions + "</div>" : "") +
      "</div></div>"
    )
  }
  function formFooter(submitLabel, cancelAct, submitIcon) {
    return (
      '<div class="mt-8 flex items-center justify-between border-t border-border pt-5">' +
      btn("outline", ic("chevron-left", "mr-1 h-4 w-4") + "취소", 'data-act="' + (cancelAct || "back") + '"') +
      sbtn("primary", (submitIcon === false ? "" : ic("check", "mr-1 h-4 w-4")) + esc(submitLabel), 'type="submit"') +
      "</div>"
    )
  }
  function bar(pct, color, h) {
    return (
      '<div class="' + (h || "h-2.5") + ' w-full overflow-hidden rounded-full bg-muted"><div class="h-full rounded-full ' + color + '" style="width: ' + Math.max(0, Math.min(100, pct)).toFixed(1) + '%;"></div></div>'
    )
  }

  // ───────────────────────── 가상 데이터 ─────────────────────────
  var S = {
    branches: [
      { id: "b1", code: "HQ01", name: "(가상) 부산 본사", type: "본사", status: "운영중", addr: "부산광역시 강서구 (가상) 신항물류로 101", addr2: "본관 1층", manager: "한도윤", phone: "051-555-0101", phone2: "010-5550-1101", capacity: 60, memo: "" },
      { id: "b2", code: "US02", name: "(가상) 울산 지점", type: "매입 지점", status: "운영중", addr: "울산광역시 남구 (가상) 항만로 22", addr2: "", manager: "서지후", phone: "052-555-0202", phone2: "", capacity: 30, memo: "" },
      { id: "b3", code: "GJ03", name: "(가상) 광주 지점", type: "매입 지점", status: "운영중", addr: "광주광역시 서구 (가상) 상무대로 7", addr2: "", manager: "오하린", phone: "062-555-0303", phone2: "", capacity: 25, memo: "" },
      { id: "b4", code: "IC04", name: "(가상) 인천 쇼룸", type: "차량 보관장", status: "운영중", addr: "인천광역시 중구 (가상) 야드길 15", addr2: "B 구역", manager: "윤서진", phone: "032-555-0404", phone2: "", capacity: 40, memo: "인천 야드 겸 쇼룸" },
    ],
    buyers: [],
    vehicles: [],
    sales: [],
    transfers: [],
    staff: [
      { uid: "admin", name: "본사 관리자", role: "admin", branchId: "", tabs: [], createdAt: addDays(TODAY, -94) },
      { uid: "ulsan.seo", name: "서지후", role: "branch", branchId: "b2", tabs: ["대시보드", "차량 관리", "차량 이동 관리"], createdAt: addDays(TODAY, -60) },
      { uid: "gwangju.oh", name: "오하린", role: "branch", branchId: "b3", tabs: ["차량 관리", "차량 이동 관리"], createdAt: addDays(TODAY, -41) },
      { uid: "yard.yoon", name: "윤서진", role: "branch", branchId: "b4", tabs: ["차량 관리", "판매 관리", "바이어 관리"], createdAt: addDays(TODAY, -22) },
    ],
    roles: {
      b1: ["대시보드", "차량 관리", "지점 관리", "차량 이동 관리", "판매 관리", "바이어 관리", "정산 관리"],
      b2: ["대시보드", "차량 관리", "차량 이동 관리"],
      b3: ["차량 관리", "차량 이동 관리"],
      b4: ["차량 관리", "판매 관리", "바이어 관리"],
    },
    activity: [],
    open: {},
    drawer: false,
    modal: null,
    f: {
      vehicles: { q: "", status: "전체", maker: "전체", branch: "전체", page: 1, month: TODAY.slice(0, 7), basis: "dereg" },
      transfers: { q: "", status: "전체", from: "전체", page: 1 },
      sales: { q: "", country: "전체", ship: "전체", paid: "전체", page: 1 },
      yard: { q: "", paid: "전체", buyer: "전체", stock: "전체", page: 1 },
      buyers: { q: "", grade: "전체", pay: "전체", page: 1 },
      settle: { q: "", status: "전체", page: 1, month: "" },
      branchTab: "cars",
    },
    sort: {},
    forms: {},
    nextId: 1,
  }
  var TABS = ["대시보드", "차량 관리", "지점 관리", "차량 이동 관리", "판매 관리", "바이어 관리", "정산 관리"]

  var BUYER_SEED = [
    ["사하라 오토", "Omar K.", "리비아", "A", false],
    ["페트라 카", "Yazan H.", "요르단", "B", false],
    ["메콩 트레이딩", "Sokha P.", "캄보디아", "B", false],
    ["알타이 모터스", "Bat-Erdene", "몽골", "A", false],
    ["카스피 오토", "Rustam A.", "우즈베키스탄", "B", false],
    ["아틀라스 무역", "Youssef B.", "모로코", "C", true],
    ["나일 카 트레이드", "Karim S.", "이집트", "B", false],
    ["앙코르 모빌", "Dara C.", "캄보디아", "C", false],
    ["볼타 오토", "Kwame O.", "가나", "B", false],
    ["안데스 모터스", "Mateo R.", "칠레", "B", false],
    ["비슈케크 카", "Aibek T.", "키르기스스탄", "A", false],
    ["아드리아 오토", "Arben L.", "알바니아", "C", false],
  ]
  function fakePhone() {
    return "010-555" + ri(0, 9) + "-" + String(ri(0, 9999)).padStart(4, "0")
  }
  BUYER_SEED.forEach(function (b, i) {
    S.buyers.push({
      id: "by" + (i + 1), name: b[0], contact: b[1], country: b[2], grade: b[3], excludeYard: b[4],
      phone: fakePhone(), whatsapp: "", email: "", payStatus: "입금 전", staff: "본사 관리자", createdAt: addDays(TODAY, -ri(20, 90)),
    })
  })

  var MODELS = [
    ["현대", "포터", "1톤 슈퍼캡 디젤"], ["현대", "포터", "1톤 일반캡"], ["현대", "쏘나타", "2.0 가솔린 스마트"], ["현대", "그랜저", "2.4 프리미엄"],
    ["현대", "스타렉스", "12인승 왜건"], ["현대", "아반떼", "1.6 가솔린 모던"], ["현대", "투싼", "2.0 디젤 2WD"], ["현대", "싼타페", "2.2 디젤 4WD"],
    ["현대", "엑센트", "1.4 가솔린"], ["기아", "봉고", "1톤 킹캡"], ["기아", "모닝", "1.0 럭셔리"], ["기아", "K5", "2.0 LPI"],
    ["기아", "쏘렌토", "2.2 디젤"], ["기아", "카니발", "9인승 디젤"], ["기아", "스포티지", "2.0 디젤"], ["기아", "레이", "1.0 스탠다드"],
    ["쉐보레", "스파크", "1.0 LT"], ["쉐보레", "말리부", "1.5 터보"], ["르노", "SM6", "2.0 LPe"], ["르노", "QM6", "2.0 가솔린"], ["제네시스", "G80", "3.3 AWD"],
  ]
  var COLORS = ["흰색", "흰색", "회색", "검정", "은색", "파랑", "펄화이트"]
  var HANGUL = "가나다라마거너더러머버서어저고노도로모보소오조구누두루무부수우주".split("")
  var VINCH = "ABCDEFGHJKLMNPRSTUVWXYZ0123456789"
  function fakeVin(maker) {
    var p = { 현대: "KMH", 기아: "KNA", 쉐보레: "KL1", 르노: "KNM", 제네시스: "KMT" }[maker] || "KPT"
    var s = p
    while (s.length < 11) s += VINCH[ri(0, VINCH.length - 1)]
    s += String(ri(100000, 999999))
    return s
  }
  function fakePlate() {
    return ri(10, 99) + pick(HANGUL) + String(ri(1000, 9999))
  }
  var BRANCH_PLAN = ["b1", "b1", "b1", "b1", "b1", "b2", "b2", "b3", "b4", "b4"]
  for (var i = 0; i < 52; i++) {
    var m = MODELS[ri(0, MODELS.length - 1)]
    var year = ri(2009, 2022)
    var pd = addDays(TODAY, -ri(0, 38))
    var price = ri(8, 120) * 100000 + (rnd() < 0.5 ? 0 : 50000) * 0
    price = Math.round(price / 100000) * 100000
    if (price < 1000000) price = 1000000 + ri(0, 20) * 100000
    var vin = fakeVin(m[0])
    S.vehicles.push({
      id: vin.slice(-8), vin: vin, plate: fakePlate(), maker: m[0], model: m[1], grade: m[2], year: year, km: ri(40, 290) * 1000 + ri(0, 999),
      color: pick(COLORS), fuel: m[2].indexOf("디젤") >= 0 ? "디젤" : m[2].indexOf("LP") >= 0 ? "LPG" : "가솔린", trans: rnd() < 0.85 ? "자동" : "수동",
      accident: pick(["무사고", "무사고", "단순 교환", "사고 이력 있음"]), dereg: addDays(pd, -ri(0, 3)), purchaseDate: pd,
      price: price, reportPrice: price, owner: "", bizType: rnd() < 0.3 ? "사업자" : "개인",
      branchId: BRANCH_PLAN[ri(0, BRANCH_PLAN.length - 1)], location: "", status: "차량 등록", note: "", yard: false, yardBuyer: "",
      createdAt: pd,
    })
  }
  // 고유번호 겹침 방지
  S.vehicles.forEach(function (v, k) {
    if (S.vehicles.some(function (o, j) { return j < k && o.id === v.id })) {
      v.vin = v.vin.slice(0, 11) + String(100000 + k)
      v.id = v.vin.slice(-8)
    }
  })
  var LOCS = { b1: ["본사 A야드", "본사 B야드", "본관 앞"], b2: ["울산 1야드", "울산 2야드"], b3: ["광주 야드"], b4: ["쇼룸 1층", "인천 야드 B구역", "인천 야드 C구역"] }
  S.vehicles.forEach(function (v) {
    v.location = pick(LOCS[v.branchId])
    if (v.branchId === "b4") v.yard = true
  })
  S.vehicles.sort(function (a, b) { return a.purchaseDate < b.purchaseDate ? 1 : -1 })

  function uid(p) {
    return p + S.nextId++
  }
  // 판매 계약
  var SALE_PLAN = [
    // [차량 인덱스, 바이어, 마진(만원), 입금 비율, 계약 n일 전, 정산 상태]
    [3, "by1", 90, 1, 2, "정산 전"], [5, "by2", 70, 0, 1, "정산 전"], [8, "by3", 120, 0.3, 4, "정산 전"], [11, "by4", 60, 1, 6, "입금 대기"],
    [13, "by4", 150, 0.5, 3, "정산 전"], [16, "by5", 80, 0, 0, "정산 전"], [19, "by7", 110, 0, 5, "비용 확인 중"], [22, "by9", 95, 0.2, 7, "정산 전"],
    [25, "by11", 140, 1, 9, "정산 완료"], [27, "by1", 60, 1, 12, "정산 완료"], [30, "by10", 100, 1, 15, "거래 종결"], [33, "by6", 75, 0, 3, "정산 전"],
    [36, "by12", 85, 1, 10, "정산 완료"], [39, "by8", 65, 0.4, 2, "일부 정산"], [42, "by3", 130, 0, 8, "정산 전"], [45, "by2", 55, 1, 11, "입금 대기"],
  ]
  SALE_PLAN.forEach(function (p) {
    var v = S.vehicles[p[0]]
    var b = S.buyers.find(function (x) { return x.id === p[1] })
    var priceS = v.price + p[2] * 10000
    var cd = addDays(TODAY, -p[4])
    if (cd < v.purchaseDate) cd = v.purchaseDate
    var paid = Math.round((priceS * p[3]) / 100000) * 100000
    var settled = p[5] === "정산 완료" || p[5] === "거래 종결"
    var usd = rnd() < 0.3
    S.sales.push({
      id: uid("s"), vehicleId: v.id, buyerId: b.id, country: b.country, contractDate: cd, price: priceS, deposit: Math.min(paid, ri(0, 3) * 500000), paid: paid,
      dueDate: paid >= priceS ? "" : addDays(cd, ri(2, 9)), currency: usd ? "USD" : "KRW", rate: usd ? 1380 : 1, shipBranchId: v.branchId,
      deliveryDate: settled || p[3] === 1 ? addDays(cd, 1) : "", customsDate: settled ? addDays(cd, ri(2, 4)) : "", shipType: rnd() < 0.75 ? "수출 선적" : "현지 인도",
      settle: p[5],
    })
    v.status = settled ? "정산 완료" : "판매 완료"
    if (!b.excludeYard && !settled) {
      v.yard = true
      v.yardBuyer = b.id
      if (v.dereg < addDays(TODAY, -9)) v.dereg = addDays(TODAY, -ri(2, 9))
    }
  })
  // 인천 야드 재고 중 일부는 말소일이 오래된 미판매 재고
  S.vehicles.filter(function (v) { return v.branchId === "b4" && v.status === "차량 등록" }).forEach(function (v, k) {
    if (k < 3) {
      v.dereg = addDays(TODAY, -(12 + k * 6))
      if (v.purchaseDate > v.dereg) v.purchaseDate = addDays(v.dereg, 1)
    } else if (v.dereg < addDays(TODAY, -9)) v.dereg = addDays(TODAY, -ri(1, 8))
  })

  // 지점 이동
  function branchName(id) {
    var b = S.branches.find(function (x) { return x.id === id })
    return b ? b.name : "-"
  }
  var CARRIERS = ["(가상) 한빛탁송", "(가상) 바다로지스", "(가상) 동남카캐리어"]
  var moved = 0
  S.vehicles.forEach(function (v, k) {
    if (moved >= 15) return
    if (v.branchId === "b4" || (v.branchId === "b1" && k % 4 === 1)) {
      var from = v.branchId === "b4" ? pick(["b1", "b1", "b2", "b3"]) : pick(["b2", "b3"])
      var d = addDays(v.purchaseDate, ri(0, 2))
      if (d > TODAY) d = TODAY
      S.transfers.push({
        id: uid("t"), vehicleId: v.id, from: branchName(from), to: branchName(v.branchId), date: d, cost: ri(8, 22) * 10000, eta: "", carrier: pick(CARRIERS),
        driver: pick(["강민", "조현우", "임채원", "배지호"]) + " 기사", driverPhone: fakePhone(), status: "이동 완료",
      })
      moved++
    }
  })
  // 진행 중인 이동 3건
  S.vehicles.filter(function (v) { return (v.branchId === "b2" || v.branchId === "b3") && v.status === "차량 등록" }).slice(0, 3).forEach(function (v, k) {
    S.transfers.push({
      id: uid("t"), vehicleId: v.id, from: branchName(v.branchId), to: branchName(k === 2 ? "b1" : "b4"), date: TODAY, cost: ri(10, 25) * 10000, eta: addDays(TODAY, ri(1, 3)),
      carrier: pick(CARRIERS), driver: pick(["강민", "조현우", "임채원"]) + " 기사", driverPhone: fakePhone(), status: "이동 중",
    })
    v.status = "지점 이동"
  })
  S.transfers.sort(function (a, b) { return a.date < b.date ? 1 : -1 })

  // 최근 업무 활동
  ;(function () {
    var items = []
    S.transfers.slice(0, 6).forEach(function (t, k) {
      var v = vehicle(t.vehicleId)
      items.push({ icon: "truck", text: v.model + " " + t.from + "→" + t.to + (t.status === "이동 중" ? " 이동 등록" : " 이동"), at: t.date, h: 16 - k })
    })
    S.sales.slice(0, 4).forEach(function (s, k) {
      var v = vehicle(s.vehicleId)
      items.push({ icon: "tag", text: v.model + " " + buyer(s.buyerId).name + " 판매 계약", at: s.contractDate, h: 11 - k })
    })
    S.vehicles.slice(0, 3).forEach(function (v, k) {
      items.push({ icon: "car", text: v.model + " " + v.plate + " 차량 등록", at: v.purchaseDate, h: 9 - k })
    })
    items.sort(function (a, b) { return a.at + pad(a.h) < b.at + pad(b.h) ? 1 : -1 })
    S.activity = items.slice(0, 10).map(function (x, k) {
      return { icon: x.icon, text: x.text, when: x.at.slice(5) + " " + pad(x.h) + ":" + pad((k * 17 + 5) % 60), who: "본사 관리자" }
    })
  })()
  function log(icon, text) {
    S.activity.unshift({ icon: icon, text: text, when: nowStamp(), who: "본사 관리자" })
    S.activity = S.activity.slice(0, 10)
  }

  // ───────────────────────── 조회 / 계산 ─────────────────────────
  function vehicle(id) {
    return S.vehicles.find(function (v) { return v.id === id })
  }
  function buyer(id) {
    return S.buyers.find(function (b) { return b.id === id }) || { name: "-", country: "", phone: "", contact: "" }
  }
  function branch(id) {
    return S.branches.find(function (b) { return b.id === id })
  }
  function saleOf(vid) {
    return S.sales.find(function (s) { return s.vehicleId === vid })
  }
  function due(s) {
    return Math.max(0, s.price - s.paid)
  }
  function stayDays(v) {
    return Math.max(0, diffDays(TODAY, v.purchaseDate))
  }
  function isHolding(v) {
    return v.status === "차량 등록" || v.status === "지점 이동"
  }
  function parkedAt(bid) {
    return S.vehicles.filter(function (v) { return v.branchId === bid && v.status !== "정산 완료" })
  }
  function transferCost(vid) {
    return S.transfers.filter(function (t) { return t.vehicleId === vid && t.status !== "이동 취소" }).reduce(function (a, t) { return a + t.cost }, 0)
  }
  function branchStats(b) {
    var parked = parkedAt(b.id).length
    return {
      parked: parked,
      inbound: S.transfers.filter(function (t) { return t.status === "이동 중" && t.to === b.name }).length,
      moving: S.transfers.filter(function (t) { return t.status === "이동 중" && t.from === b.name }).length,
      outbound: S.sales.filter(function (s) { var v = vehicle(s.vehicleId); return v && v.branchId === b.id && v.status === "판매 완료" && !s.customsDate }).length,
      rate: b.capacity ? Math.round((parked / b.capacity) * 100) : 0,
    }
  }
  function totals() {
    var price = 0, paid = 0, out = 0
    S.sales.forEach(function (s) { price += s.price; paid += Math.min(s.paid, s.price); out += due(s) })
    return { count: S.sales.length, price: price, paid: paid, due: out }
  }
  function buyerStats(b) {
    var ss = S.sales.filter(function (s) { return s.buyerId === b.id })
    var price = 0, out = 0, paid = 0, last = ""
    ss.forEach(function (s) { price += s.price; out += due(s); paid += s.paid; if (s.contractDate > last) last = s.contractDate })
    var pay = b.payStatus
    if (ss.length) pay = out === 0 ? "입금 완료" : paid > 0 ? "일부 입금" : "입금 전"
    return { count: ss.length, price: price, due: out, last: last, pay: pay }
  }
  var PAY_TONE = { "입금 전": "muted", "일부 입금": "warn2", "입금 예정": "info", 연체: "danger", "입금 완료": "success" }

  // ───────────────────────── 화면 틀 ─────────────────────────
  var NAV = [
    { label: "대시보드", icon: "layout-dashboard", path: "/" },
    { key: "veh", label: "차량 관리", icon: "car", items: [["전체 차량", "/vehicles"], ["차량 등록", "/vehicles/register"], ["재고 차량", "/vehicles?group=holding"], ["거래 완료 차량", "/vehicles?group=done"]] },
    { key: "tr", label: "차량 이동 관리", icon: "truck", items: [["이동", "/transfers/register"], ["이동 내역", "/transfers"]] },
    { key: "sales", label: "판매 관리", icon: "tag", items: [["판매 계약", "/sales"], ["판매 계약 등록", "/sales/register"], ["인천 야드 창고", "/sales/incheon-yard"]] },
    { key: "buy", label: "창고 관리", icon: "users", items: [["창고 목록", "/buyers"], ["창고 등록", "/buyers/register"]] },
    { key: "set", label: "정산 관리", icon: "calculator", items: [["차량별 정산", "/settlement"]] },
    { label: "직원 관리", icon: "user-cog", path: "/staff" },
    { key: "br", label: "지점 관리", icon: "building-2", items: [["지점 목록", "/branches"], ["지점 등록", "/branches/register"]] },
    { label: "권한 관리", icon: "shield-check", path: "/roles" },
    { label: "환경설정", icon: "settings", path: "/settings" },
  ]
  function activeSub(r) {
    var p = r.path
    if (p === "/vehicles") return r.query.group === "holding" ? "/vehicles?group=holding" : r.query.group === "done" ? "/vehicles?group=done" : "/vehicles"
    if (/^\/vehicles\/(?!register)/.test(p)) return "/vehicles"
    if (/^\/branches\/(?!register)/.test(p)) return "/branches"
    return p
  }
  function sidebar(r) {
    var act = activeSub(r)
    var nav = NAV.map(function (n) {
      if (!n.items) {
        var on = act === n.path
        return (
          '<a class="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ' +
          (on ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground/85 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground") +
          '" href="' + href(n.path) + '">' + ic(n.icon, "size-4 shrink-0") + esc(n.label) + "</a>"
        )
      }
      var contains = n.items.some(function (it) { return it[1] === act })
      var open = S.open[n.key] != null ? S.open[n.key] : contains
      return (
        '<div><button type="button" data-act="nav-toggle" data-key="' + n.key + '" class="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ' +
        (contains ? "text-sidebar-accent-foreground" : "text-sidebar-foreground/85 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground") + '">' +
        ic(n.icon, "size-4 shrink-0") + '<span class="flex-1 text-left">' + esc(n.label) + "</span>" + ic("chevron-down", "size-3.5 transition-transform" + (open ? " rotate-180" : "")) + "</button>" +
        (open
          ? '<div class="mt-0.5 ml-4 space-y-0.5 border-l border-sidebar-border pl-3">' +
            n.items
              .map(function (it) {
                var on = it[1] === act
                return (
                  '<a class="block rounded-md px-3 py-1.5 text-[13px] transition-colors ' +
                  (on ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground") +
                  '" href="' + href(it[1]) + '">' + esc(it[0]) + "</a>"
                )
              })
              .join("") +
            "</div>"
          : "") +
        "</div>"
      )
    }).join("")
    return (
      '<div class="flex h-full flex-col bg-sidebar text-sidebar-foreground"><div class="flex h-16 items-center gap-2.5 px-5"><div class="flex size-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">' +
      ic("container", "size-5") + '</div><div class="leading-tight"><div class="text-sm font-bold text-sidebar-accent-foreground">(가상) 오토브릿지 ERP</div><div class="text-[11px] text-sidebar-foreground/60">수출 중고차 운영 관리</div></div></div>' +
      '<nav class="flex-1 space-y-0.5 overflow-y-auto px-3 pb-6">' + nav + "</nav></div>"
    )
  }
  function header() {
    return (
      '<header class="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/90 px-4 backdrop-blur lg:px-6">' +
      btn("iconGhost", ic("menu", "size-5"), 'aria-label="메뉴 열기" data-act="drawer"', "lg:hidden") +
      '<div class="relative hidden max-w-md flex-1 sm:block">' + ic("search", "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground") +
      '<input id="gsearch" placeholder="차량번호, 차대번호, 모델, 바이어 검색" class="h-9 w-full rounded-lg border border-input bg-card pr-3 pl-9 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30" type="search" data-change="gsearch" value=""></div>' +
      '<div class="ml-auto flex items-center gap-1.5"><div class="relative">' + btn("iconGhost", ic("bell", "size-5"), 'aria-label="알림" data-act="bell"') + "</div>" +
      '<div class="flex items-center gap-2 rounded-lg py-1 pr-2 pl-1"><div class="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">본</div><div class="hidden text-left leading-tight sm:block"><div class="text-[13px] font-medium">본사 관리자</div><div class="text-[11px] text-muted-foreground">본사 관리자</div></div></div>' +
      btn("iconGhost", ic("log-out", "size-4.5"), 'aria-label="로그아웃" data-act="logout"') +
      "</div></header>"
    )
  }
  function shell(r, content) {
    return (
      '<div class="flex min-h-screen"><aside class="fixed inset-y-0 left-0 z-30 hidden w-64 lg:block">' + sidebar(r) + "</aside>" +
      (S.drawer
        ? '<div id="drawer-bg" class="fixed inset-0 z-40 bg-black/40 lg:hidden"></div><aside class="demo-drawer lg:hidden">' + sidebar(r) + "</aside>"
        : "") +
      '<div class="flex min-w-0 flex-1 flex-col lg:pl-64">' + header() + '<main class="flex-1 p-4 lg:p-6">' + content + "</main></div></div>" +
      (S.modal ? modal() : "")
    )
  }

  // ───────────────────────── 대시보드 ─────────────────────────
  function kpi(link, icon, tone, value, label) {
    return (
      '<a class="group rounded-xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-ring/40" href="' + href(link) + '"><div class="flex items-start justify-between"><span class="flex size-9 items-center justify-center rounded-lg ' + tone + '">' +
      ic(icon, "size-4.5") + "</span>" + ic("arrow-up-right", "size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100") +
      '</div><div class="mt-3 text-2xl font-bold tracking-tight">' + esc(value) + '</div><div class="mt-0.5 flex items-center gap-1.5"><span class="text-xs text-muted-foreground">' + esc(label) + "</span></div></a>"
    )
  }
  function barList(rows, color, unit, linkFn) {
    var max = Math.max.apply(null, rows.map(function (x) { return x[1] }).concat([0]))
    if (!rows.length) return '<p class="py-6 text-center text-xs text-muted-foreground">해당 데이터가 없습니다.</p>'
    return rows
      .map(function (x) {
        var tag = linkFn ? 'a class="block" title="' + esc(x[0]) + '" href="' + href(linkFn(x)) + '"' : "div"
        return (
          "<" + tag + '><div class="mb-1 flex items-center justify-between text-xs"><span class="font-medium text-foreground">' + esc(x[0]) + '</span><span class="tabular-nums text-muted-foreground">' +
          esc(unit(x[1])) + "</span></div>" + bar(max ? (x[1] / max) * 100 : 0, color) + "</" + (linkFn ? "a" : "div") + ">"
        )
      })
      .join("")
  }
  function cardBox(title, body, extraHead, cls) {
    return (
      '<div class="' + CARD + (cls ? " " + cls : "") + '"><div class="flex ' + (extraHead ? "gap-1 px-5 pt-5 pb-3 flex-row items-center justify-between" : "flex-col gap-1 px-5 pt-5 pb-3") +
      '"><h3 class="text-sm font-semibold tracking-tight">' + esc(title) + "</h3>" + (extraHead || "") + "</div>" + body + "</div>"
    )
  }
  function pDashboard() {
    var holding = S.vehicles.filter(isHolding).length
    var cnt = function (st) { return S.vehicles.filter(function (v) { return v.status === st }).length }
    var t = totals()
    var flow = [["차량 등록", cnt("차량 등록")], ["지점 이동", cnt("지점 이동")], ["판매 완료", cnt("판매 완료")], ["정산 완료", cnt("정산 완료")]]
    var month = TODAY.slice(0, 7)
    var parkRows = S.branches.map(function (b) { return [b.name, parkedAt(b.id).length, b.id] })
    var newRows = S.branches.map(function (b) { return [b.name, S.vehicles.filter(function (v) { return v.branchId === b.id && v.status === "차량 등록" }).length] }).filter(function (x) { return x[1] })
    var monRows = S.branches.map(function (b) { return [b.name, S.vehicles.filter(function (v) { return v.branchId === b.id && v.purchaseDate.slice(0, 7) === month }).length] }).filter(function (x) { return x[1] })
    var dueRows = S.branches.map(function (b) {
      return [b.name, S.sales.reduce(function (a, s) { var v = vehicle(s.vehicleId); return a + (v && v.branchId === b.id ? due(s) : 0) }, 0)]
    }).filter(function (x) { return x[1] })
    var buyersDue = S.buyers.map(function (b) { return { b: b, st: buyerStats(b) } }).filter(function (x) { return x.st.due > 0 }).sort(function (a, b) { return b.st.due - a.st.due }).slice(0, 4)
    return (
      '<div class="space-y-5">' + pageHead({ title: "운영 대시보드", desc: "차량 매입부터 지점 이동, 판매, 선적, 정산까지 전체 현황을 한눈에 확인하세요." }) +
      '<div class="grid grid-cols-2 gap-3 lg:grid-cols-4">' +
      kpi("/vehicles?group=holding", "warehouse", "text-primary bg-primary/10", holding + "대", "전체 재고 차량") +
      kpi("/vehicles?status=" + encodeURIComponent("차량 등록"), "shopping-cart", "text-info bg-info/12", cnt("차량 등록") + "대", "신규 등록 차량") +
      kpi("/vehicles?status=" + encodeURIComponent("판매 완료"), "badge-check", "text-primary bg-primary/10", cnt("판매 완료") + "대", "판매 완료 차량") +
      kpi("/buyers?tab=receivable", "circle-dollar-sign", "text-danger bg-danger/12", man(t.due), "전체 미수금") +
      "</div>" +
      cardBox(
        "차량 진행 현황",
        '<div class="px-5 pb-5"><div class="flex flex-wrap items-stretch gap-1.5">' +
          flow.map(function (f, k) {
            return (
              '<div class="flex items-center gap-1.5"><a class="flex min-w-24 flex-col items-center gap-1 rounded-lg border border-border bg-muted/40 px-3 py-3 transition-colors hover:border-ring/40 hover:bg-accent" href="' +
              href("/vehicles?status=" + encodeURIComponent(f[0])) + '"><span class="text-xl font-bold tabular-nums">' + f[1] + '</span><span class="text-[11px] whitespace-nowrap text-muted-foreground">' + f[0] + "</span></a>" +
              (k < flow.length - 1 ? ic("chevron-right", "size-4 shrink-0 text-muted-foreground/50") : "") + "</div>"
            )
          }).join("") +
          "</div></div>"
      ) +
      '<div class="grid gap-4 lg:grid-cols-3">' +
      cardBox("지점별 주차 현황 (보유 차량)", '<div class="px-5 pb-5 space-y-3">' + barList(parkRows, "bg-chart-1", function (n) { return n + "대" }, function (x) { return "/branches/" + x[2] }) + "</div>", "", "h-full") +
      cardBox("신규 등록 차량 (지점별)", '<div class="px-5 pb-5 space-y-3">' + barList(newRows, "bg-chart-2", function (n) { return n + "대" }) + "</div>", "", "h-full") +
      cardBox("월 매입 수량 (지점별 · " + month + ")", '<div class="px-5 pb-5 space-y-3">' + barList(monRows, "bg-chart-3", function (n) { return n + "대" }) + "</div>", "", "h-full") +
      "</div>" +
      '<div class="grid gap-4 lg:grid-cols-2">' +
      cardBox("미수금 현황 (지점별)", '<div class="px-5 pb-5 space-y-3">' + barList(dueRows, "bg-danger", man) + "</div>", "", "h-full") +
      cardBox(
        "미수금 현황",
        '<div class="px-5 pb-5 space-y-2">' +
          (buyersDue.length
            ? buyersDue.map(function (x) {
                return (
                  '<a class="flex items-center justify-between gap-2 rounded-lg border border-border p-2.5 transition-colors hover:bg-muted/50" href="' + href("/buyers") + '"><div class="flex items-center gap-2"><span class="flex size-8 items-center justify-center rounded-lg bg-danger/10 text-danger">' +
                  ic("circle-dollar-sign", "size-4") + '</span><div><div class="text-sm font-medium">' + esc(x.b.name) + '</div><div class="text-xs text-muted-foreground">' + esc(x.b.country + " · " + x.b.contact) +
                  '</div></div></div><div class="text-right"><div class="text-sm font-semibold tabular-nums text-danger">' + man(x.st.due) + "</div>" + badge(x.st.pay, x.st.pay === "입금 전" ? "warning" : PAY_TONE[x.st.pay]) + "</div></a>"
                )
              }).join("")
            : '<p class="py-6 text-center text-xs text-muted-foreground">미수금이 없습니다.</p>') +
          "</div>",
        '<a class="text-xs text-primary hover:underline" href="' + href("/buyers?tab=receivable") + '">전체보기</a>'
      ) +
      "</div>" +
      cardBox(
        "최근 업무 활동",
        '<div class="px-5 pb-5"><ul class="space-y-3">' +
          S.activity.map(function (a) {
            return (
              '<li class="flex gap-3"><span class="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">' + ic(a.icon, "size-3.5") +
              '</span><div class="min-w-0 flex-1"><p class="text-[13px] leading-snug">' + esc(a.text) + '</p><p class="mt-0.5 text-[11px] text-muted-foreground">' + esc(a.when + " · " + a.who) + "</p></div></li>"
            )
          }).join("") +
          "</ul></div>"
      ) +
      "</div>"
    )
  }

  // ───────────────────────── 차량 목록 ─────────────────────────
  var VEH_TITLES = {
    all: ["전체 차량", "매입한 전체 차량의 위치와 진행 상태를 관리합니다."],
    holding: ["재고 차량", "현재 지점에 보관 중인(미판매) 차량입니다."],
    done: ["거래 완료 차량", "정산까지 종결된 차량입니다."],
  }
  function pVehicles(r) {
    var group = r.query.group || "all"
    var f = S.f.vehicles
    var rows = S.vehicles.filter(function (v) {
      if (group === "holding" && !isHolding(v)) return false
      if (group === "done" && v.status !== "정산 완료") return false
      if (f.status !== "전체" && v.status !== f.status) return false
      if (f.maker !== "전체" && v.maker !== f.maker) return false
      if (f.branch !== "전체" && v.branchId !== f.branch) return false
      if (f.q) {
        var s = (v.id + " " + v.vin + " " + v.plate + " " + v.model + " " + v.maker + " " + (saleOf(v.id) ? buyer(saleOf(v.id).buyerId).name : "")).toLowerCase()
        if (s.indexOf(f.q.toLowerCase()) < 0) return false
      }
      return true
    })
    rows = applySort("vehicles", rows, { id: function (v) { return v.id }, plate: function (v) { return v.plate }, stay: stayDays, price: function (v) { return v.price } })
    var pg = paginate("vehicles", rows)
    var makers = S.vehicles.map(function (v) { return v.maker }).filter(function (x, k, a) { return a.indexOf(x) === k })
    var t = VEH_TITLES[group] || VEH_TITLES.all
    var body = pg.rows.map(function (v) {
      return (
        '<tr class="' + TR + '" data-act="go" data-to="/vehicles/' + esc(v.id) + '"><td class="' + TD + '"><span class="font-mono text-xs font-medium">' + esc(v.id) + "</span></td>" +
        '<td class="' + TD + '"><div><div class="font-medium">' + esc(v.plate) + '</div><div class="text-xs text-muted-foreground">' + esc(v.color) + "</div></div></td>" +
        '<td class="' + TD + '"><div><div class="font-medium">' + esc(v.model) + '</div><div class="text-xs text-muted-foreground">' + esc(v.year + " · " + Demo.num(v.km) + "km") + "</div></div></td>" +
        '<td class="' + TD + '"><span>' + esc(branchName(v.branchId)) + "</span></td>" +
        '<td class="' + TD + '"><span class="inline-flex items-center gap-1 tabular-nums">' + stayDays(v) + "일</span></td>" +
        '<td class="' + TD + '"><div class="tabular-nums">' + manShort(v.price) + "</div></td>" +
        '<td class="' + TD + '">' + badge(v.status, STATUS_TONE[v.status]) + "</td>" +
        '<td class="' + TD + '"><span class="block max-w-[16rem] truncate text-xs text-muted-foreground" title="' + esc(v.note) + '">' + esc(v.note || "-") + "</span></td>" +
        '<td class="' + TD + '">' + btn("iconOut", ic("trash-2", "size-4 text-danger"), 'aria-label="삭제" data-act="veh-del" data-id="' + esc(v.id) + '"') + "</td></tr>"
      )
    }).join("")
    return (
      "<div>" +
      pageHead({
        title: t[0], desc: t[1],
        actions: '<div class="flex items-center gap-2">' + btn("outline", ic("refresh-cw", "size-4") + "새로고침", 'data-act="refresh"') + btn("primary", ic("plus", "size-4") + "차량 매입 등록", 'data-act="go" data-to="/vehicles/register"') + "</div>",
      }) +
      '<div class="mb-4 flex flex-wrap items-end gap-2 rounded-xl border border-border bg-card p-3"><div class="flex flex-col gap-1"><span class="text-xs font-medium text-muted-foreground">월별 대장 엑셀</span>' +
      '<input class="h-9 rounded-lg border border-input bg-card px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30" type="month" data-input="flt-raw" data-list="vehicles" data-k="month" value="' + esc(f.month) + '"></div>' +
      '<select class="' + FSEL + '" aria-label="기준 날짜" data-input="flt-raw" data-list="vehicles" data-k="basis"><option value="dereg"' + (f.basis === "dereg" ? " selected" : "") + '>말소일 기준</option><option value="purchase"' + (f.basis === "purchase" ? " selected" : "") + ">매입일 기준</option></select>" +
      btn("outline", ic("download", "size-4") + "해당 월 엑셀 다운로드", 'data-act="month-excel"') +
      '<span class="pb-1 text-xs text-muted-foreground">말소일·연식·차명·차량번호·차대번호·차주·주민번호·매입신고금액·사업자여부</span></div>' +
      '<div class="space-y-3"><div class="flex flex-col gap-2 sm:flex-row sm:items-center">' + searchBox("vehicles", "차량번호, 차대번호, 모델, 고유번호 검색") +
      '<div class="flex flex-wrap items-center gap-2">' +
      fselect("vehicles", "status", "상태", ["차량 등록", "지점 이동", "판매 완료", "정산 완료"]) +
      fselect("vehicles", "maker", "제조사", makers) +
      fselect("vehicles", "branch", "지점", S.branches.map(function (b) { return [b.id, b.name] })) +
      "</div>" + excelBtn("vehicles") + "</div>" +
      table(sortTh("vehicles", "id", "고유번호") + sortTh("vehicles", "plate", "차량번호") + '<th class="' + TH + '">차명</th><th class="' + TH + '">현재 지점</th>' + sortTh("vehicles", "stay", "보관일수") + sortTh("vehicles", "price", "매입가") +
        '<th class="' + TH + '">차량 상태</th><th class="' + TH + '">비고</th><th class="' + TH + '">관리</th>', body, 9) +
      pager("vehicles", pg) + "</div></div>"
    )
  }

  // ───────────────────────── 차량 상세 ─────────────────────────
  function infoRow(icon, label, value) {
    return (
      '<div class="flex items-start gap-2">' + ic(icon, "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground") + '<div><p class="text-xs text-muted-foreground">' + esc(label) + '</p><p class="font-medium text-foreground">' + esc(value || "-") + "</p></div></div>"
    )
  }
  function statCard(value, label, tone) {
    return '<div class="' + CARD + ' p-4"><p class="text-2xl font-bold tabular-nums ' + (tone || "text-foreground") + '">' + esc(value) + '</p><p class="mt-1 text-xs text-muted-foreground">' + esc(label) + "</p></div>"
  }
  function pVehicleDetail(id) {
    var v = vehicle(id)
    if (!v) return notFound("차량을 찾을 수 없습니다.", "/vehicles")
    var s = saleOf(v.id)
    var cost = v.price + transferCost(v.id)
    var trs = S.transfers.filter(function (t) { return t.vehicleId === v.id })
    var body = trs.map(function (t) {
      return '<tr class="border-b border-border transition-colors hover:bg-muted/50"><td class="' + TD + '">' + esc(t.date) + '</td><td class="' + TD + '"><div class="flex items-center gap-1.5 text-sm"><span>' + esc(t.from) + "</span>" + ic("arrow-right", "h-3.5 w-3.5 text-muted-foreground") + '<span class="font-medium">' + esc(t.to) + '</span></div></td><td class="' + TD + ' text-muted-foreground">' + esc(t.carrier) + '</td><td class="' + TD + ' text-right tabular-nums">' + man(t.cost) + '</td><td class="' + TD + '">' + badge(t.status, t.status === "이동 완료" ? "success" : t.status === "이동 중" ? "warn2" : "muted") + "</td></tr>"
    }).join("")
    return (
      '<div class="space-y-6">' +
      pageHead({
        crumbs: [["차량 관리", "/vehicles"], v.plate], title: v.maker + " " + v.model, desc: v.id + " · " + v.grade + " · " + v.year + "년식",
        actions: '<div class="flex items-center gap-2">' + badge(v.status, STATUS_TONE[v.status]) +
          (isHolding(v) ? btn("outlineSm", ic("truck", "mr-1 h-4 w-4") + "이동 등록", 'data-act="veh-move" data-id="' + esc(v.id) + '"') : "") +
          (!s ? btn("outlineSm", ic("tag", "mr-1 h-4 w-4") + "판매 계약", 'data-act="veh-sell" data-id="' + esc(v.id) + '"') : btn("outlineSm", ic("pencil", "mr-1 h-4 w-4") + "입금 처리", 'data-act="sale-edit" data-id="' + s.id + '"')) +
          "</div>",
      }) +
      '<div class="grid gap-4 lg:grid-cols-3"><div class="' + CARD + ' lg:col-span-1"><div class="flex flex-col gap-1 px-5 pt-5 pb-3"><h3 class="text-sm font-semibold tracking-tight">차량 정보</h3></div><div class="px-5 pb-5 space-y-3 text-sm">' +
      infoRow("car", "차량번호 · 차대번호", v.plate + " · " + v.vin) +
      infoRow("clipboard-list", "연식 · 주행거리", v.year + "년 · " + Demo.num(v.km) + "km") +
      infoRow("settings", "연료 · 변속기 · 색상", v.fuel + " · " + v.trans + " · " + v.color) +
      infoRow("shield-check", "사고 이력", v.accident) +
      infoRow("building-2", "현재 지점", branchName(v.branchId) + (v.location ? " · " + v.location : "")) +
      infoRow("clipboard-check", "말소일 · 매입일", v.dereg + " · " + v.purchaseDate) +
      infoRow("user", "바이어", s ? buyer(s.buyerId).name + " (" + buyer(s.buyerId).country + ")" : "-") +
      '</div></div><div class="space-y-4 lg:col-span-2"><div class="grid grid-cols-2 gap-4 sm:grid-cols-4">' +
      statCard(man(cost), "총원가") + statCard(s ? man(s.price) : "-", "판매가", "text-info") +
      statCard(s ? signedMan(s.price - cost) : "-", "예상 손익", s && s.price - cost < 0 ? "text-danger" : "text-success") + statCard(s ? man(due(s)) : "-", "미수금", s && due(s) ? "text-danger" : "text-foreground") +
      '</div><div class="' + CARD + '"><div><div class="mb-4 flex flex-wrap gap-1 overflow-x-auto border-b border-border"><button type="button" class="-mb-px whitespace-nowrap border-b-2 px-3.5 py-2 text-sm font-medium transition-colors border-primary text-primary">이동 이력 (' + trs.length + ')</button></div><div><div class="p-1">' +
      table('<th class="' + TH + '">이동일</th><th class="' + TH + '">이동 경로</th><th class="' + TH + '">운송사</th><th class="' + THR + '">이동비용</th><th class="' + TH + '">상태</th>', body, 5, true) +
      "</div></div></div></div></div></div></div>"
    )
  }
  function notFound(msg, back) {
    return '<div class="space-y-6">' + pageHead({ title: "찾을 수 없음", desc: msg }) + btn("outline", ic("chevron-left", "mr-1 h-4 w-4") + "목록으로", 'data-act="go" data-to="' + back + '"') + "</div>"
  }

  // ───────────────────────── 차량 등록 (단계) ─────────────────────────
  function vehForm() {
    if (!S.forms.veh) S.forms.veh = { step: 0, maker: "현대", model: "", grade: "", year: "2021", plate: "", vin: "", km: "", color: "", fuel: "가솔린", trans: "자동", accident: "무사고", dereg: "", purchaseDate: TODAY, price: "", reportPrice: "", owner: "", bizType: "개인", buyerStaff: "본사 관리자", note: "", branchId: "", location: "", yard: false }
    return S.forms.veh
  }
  var STEPS = [["차량 정보", "car"], ["매입 정보", "wallet"], ["입고 지점", "map-pin"], ["확인", "clipboard-check"]]
  function pVehicleRegister() {
    var F = vehForm()
    var st = F.step
    var stepper =
      '<div class="flex items-center">' +
      STEPS.map(function (s, k) {
        var cur = k === st, done = k < st
        return (
          '<div class="flex flex-1 items-center last:flex-none"><div class="flex flex-col items-center gap-2"><div class="flex h-11 w-11 items-center justify-center rounded-full border-2 transition-colors ' +
          (cur ? "border-primary bg-primary/10 text-primary" : done ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground") + '">' +
          ic(done ? "check" : s[1], "h-5 w-5") + '</div><span class="text-xs font-medium ' + (cur || done ? "text-foreground" : "text-muted-foreground") + '">' + s[0] + "</span></div>" +
          (k < STEPS.length - 1 ? '<div class="mx-2 h-0.5 flex-1 rounded ' + (done ? "bg-primary" : "bg-border") + '"></div>' : "") + "</div>"
        )
      }).join("") + "</div>"
    var inner = ""
    if (st === 0) {
      inner =
        field("제조사", input("veh", "maker", { list: "maker-options", placeholder: "예: 현대 (직접 입력 가능)" }) +
          '<datalist id="maker-options">' + ["현대", "기아", "제네시스", "쉐보레", "르노", "KG모빌리티", "BMW", "벤츠", "아우디", "토요타", "기타"].map(function (x) { return '<option value="' + x + '"></option>' }).join("") + "</datalist>") +
        field("모델명", input("veh", "model", { placeholder: "예: 아반떼" })) +
        field("세부 등급", input("veh", "grade", { placeholder: "예: 1.6 가솔린 스마트" })) +
        field("연식", input("veh", "year", {})) +
        field("차량번호", input("veh", "plate", { placeholder: "예: 12가 3456" })) +
        field("차대번호 (VIN)", input("veh", "vin", { placeholder: "KMHXX00XXXX000000", maxlength: 17 })) +
        field("주행거리 (km)", input("veh", "km", { placeholder: "예: 45000", inputmode: "numeric" })) +
        field("색상", input("veh", "color", { placeholder: "예: 흰색" })) +
        field("연료", select("veh", "fuel", ["가솔린", "디젤", "LPG", "하이브리드", "전기", "가솔린+하이브리드", "가솔린+LPG", "디젤+하이브리드"])) +
        field("변속기", select("veh", "trans", ["자동", "수동"])) +
        field("사고 이력", select("veh", "accident", ["무사고", "단순 교환", "사고 이력 있음"])) +
        field("말소일", input("veh", "dereg", { type: "date" })) +
        '<div class="sm:col-span-2 mt-1 border-t border-border pt-4 text-sm font-semibold text-foreground">서류 첨부</div>' +
        ["검수표 사진", "말소증"].map(function (l) {
          return field(l, btn("outline", ic("upload", "mr-1 h-4 w-4") + "파일 선택 (사진/PDF)", 'data-act="upload"').replace("justify-center rounded-lg", "rounded-lg").replace(B_SZ_MD, B_SZ_MD + " justify-start"))
        }).join("")
    } else if (st === 1) {
      inner =
        field("매입일 *", input("veh", "purchaseDate", { type: "date" })) +
        field("실매입가 (원) *", input("veh", "price", { placeholder: "예: 4,500,000", inputmode: "numeric" })) +
        field("매입신고금액 (원)", input("veh", "reportPrice", { placeholder: "비워두면 실매입가와 동일", inputmode: "numeric" })) +
        field("차주", input("veh", "owner", { placeholder: "예: 홍길동 (가상)" })) +
        field("사업자 여부", select("veh", "bizType", ["개인", "사업자"])) +
        field("매입 담당", input("veh", "buyerStaff", {})) +
        field("비고", input("veh", "note", { placeholder: "예: 타이어 교체 필요" }), "sm:col-span-2")
    } else if (st === 2) {
      inner =
        field("입고 지점 *", select("veh", "branchId", [["", "지점 선택"]].concat(S.branches.map(function (b) { return [b.id, b.name + " · " + b.type] })))) +
        field("보관 위치", input("veh", "location", { placeholder: "예: A야드 3열" })) +
        '<label class="sm:col-span-2 flex cursor-pointer items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4"><input class="mt-0.5 size-4 accent-primary" type="checkbox" name="yard" data-input="fd" data-form="veh"' + (F.yard ? " checked" : "") +
        '><span class="text-sm"><span class="font-medium text-foreground">인천창고(야드) 재고로 등록</span><span class="mt-0.5 block text-xs text-muted-foreground">체크하면 등록과 동시에 인천 야드 재고 목록에 올라갑니다.</span></span></label>'
    } else {
      var rows = [
        ["제조사 · 모델", F.maker + " " + F.model], ["세부 등급", F.grade || "-"], ["연식 · 주행거리", F.year + "년 · " + (F.km ? Demo.num(toNum(F.km)) + "km" : "-")],
        ["차량번호", F.plate], ["차대번호", F.vin || "(자동 생성)"], ["연료 · 변속기 · 색상", F.fuel + " · " + F.trans + " · " + (F.color || "-")],
        ["말소일", F.dereg || "-"], ["매입일", F.purchaseDate], ["실매입가", Demo.won(toNum(F.price))], ["매입신고금액", Demo.won(toNum(F.reportPrice) || toNum(F.price))],
        ["입고 지점", branchName(F.branchId) + (F.location ? " · " + F.location : "")], ["인천 야드 재고", F.yard ? "등록" : "등록 안 함"],
      ]
      inner = rows.map(function (x) {
        return '<div class="rounded-lg border border-border bg-muted/30 px-4 py-3"><p class="text-xs text-muted-foreground">' + esc(x[0]) + '</p><p class="mt-0.5 font-medium text-foreground">' + esc(x[1]) + "</p></div>"
      }).join("")
    }
    return (
      '<div class="space-y-6">' + pageHead({ crumbs: ["차량 관리", "차량 등록"], title: "차량 등록", desc: "신규 매입 차량을 시스템에 등록합니다." }) +
      '<div class="space-y-6">' + stepper +
      '<form class="' + CARD + ' p-6" data-submit="veh-next"><div class="grid gap-5 sm:grid-cols-2">' + inner + "</div>" +
      '<div class="mt-8 flex items-center justify-between border-t border-border pt-5">' +
      btn("outline", ic("chevron-left", "mr-1 h-4 w-4") + (st === 0 ? "취소" : "이전"), 'data-act="veh-prev"') +
      sbtn("primary", st === 3 ? ic("check", "mr-1 h-4 w-4") + "차량 등록" : "다음" + ic("chevron-right", "ml-1 h-4 w-4"), 'type="submit"') +
      "</div></form></div></div>"
    )
  }

  // ───────────────────────── 지점 이동 ─────────────────────────
  function tfForm() {
    if (!S.forms.tf) S.forms.tf = { vin8: "", vehicleId: "", from: "", to: "", date: TODAY, cost: "", eta: "", carrier: "", driver: "", driverPhone: "", yard: false, buyerId: "" }
    return S.forms.tf
  }
  function vehOptionLabel(v) {
    return v.model + " · " + v.plate + " · " + v.id + " (" + branchName(v.branchId) + ")"
  }
  function pTransferRegister() {
    var F = tfForm()
    var cars = S.vehicles.filter(function (v) { return v.status !== "정산 완료" && v.status !== "지점 이동" })
    return (
      '<div class="space-y-6">' +
      pageHead({ crumbs: ["차량 이동 관리", "이동"], title: "차량 이동", desc: "차대번호 8자리로 차량을 찾고, 출발지·도착지를 직접 입력해 이동을 기록합니다. 도착지가 등록된 지점명과 같으면 차량의 현재 지점도 함께 변경됩니다." }) +
      '<form class="' + CARD + ' p-6" data-submit="tf-save"><div class="grid gap-5 sm:grid-cols-2"><div class="sm:col-span-2">' +
      field("차대번호 뒤 8자리로 차량 찾기", input("tf", "vin8", { cls: "font-mono", placeholder: "예: MU000001 (8자리 입력 시 자동 선택)", maxlength: 17, id: "tf-vin8" })) + "</div>" +
      field("차량 *", select("tf", "vehicleId", [["", "차량 선택"]].concat(cars.map(function (v) { return [v.id, vehOptionLabel(v)] })), { handler: "tf-veh" })) +
      '<datalist id="branch-name-options">' + S.branches.map(function (b) { return '<option value="' + esc(b.name) + '"></option>' }).join("") + "</datalist>" +
      field("출발지 *", input("tf", "from", { list: "branch-name-options", placeholder: "예: 인천 야드 / 부산항 (직접 입력)" })) +
      field("도착지 *", input("tf", "to", { list: "branch-name-options", placeholder: "예: 평택항 / 손님 인도 (직접 입력)" })) +
      field("이동일", input("tf", "date", { type: "date" })) +
      field("이동 비용 (원)", input("tf", "cost", { inputmode: "numeric", placeholder: "예: 250,000" })) +
      field("예정 출고일", input("tf", "eta", { type: "date" })) +
      field("운송사", input("tf", "carrier", { placeholder: "예: 한국탁송" })) +
      field("기사", input("tf", "driver", {})) +
      field("기사 연락처", input("tf", "driverPhone", { placeholder: "010-0000-0000" })) +
      "</div>" +
      '<label class="mt-5 flex cursor-pointer items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4"><input class="mt-0.5 size-4 accent-primary" type="checkbox" name="yard" data-input="fd" data-form="tf"' + (F.yard ? " checked" : "") +
      '><span class="text-sm"><span class="font-medium text-foreground">인천창고(야드) 재고로 등록</span><span class="mt-0.5 block text-xs text-muted-foreground">체크하면 이동과 동시에 인천 야드 재고에 바로 올라갑니다. 바이어·판매정보는 인천 야드 목록에서 행을 더블클릭해 나중에 입력하세요.</span></span></label>' +
      '<div class="mt-3 rounded-lg border border-border bg-muted/30 p-4">' +
      field("바이어 창고로 바로 등록 (선택)", select("tf", "buyerId", [["", "선택 안 함"]].concat(S.buyers.map(function (b) { return [b.id, b.name + " (" + b.country + ")"] })), { handler: "tf-buyer" })) +
      '<p class="mt-2 text-xs text-muted-foreground">창고를 선택하면 도착지가 창고 이름으로 채워지고, 이동과 동시에 해당 바이어 창고 재고(판매건)로 등록됩니다. 저장하면 인천 야드 창고 화면으로 바로 이동합니다.</p></div>' +
      formFooter("이동 처리", "back") + "</form></div>"
    )
  }
  function trTone(st) {
    return st === "이동 완료" ? "success" : st === "이동 중" ? "warn2" : "muted"
  }
  function pTransfers() {
    var f = S.f.transfers
    var rows = S.transfers.filter(function (t) {
      var v = vehicle(t.vehicleId) || {}
      if (f.status !== "전체" && t.status !== f.status) return false
      if (f.from !== "전체" && t.from !== f.from) return false
      if (f.q) {
        var s = (t.vehicleId + " " + (v.model || "") + " " + (v.plate || "") + " " + t.carrier + " " + t.driver).toLowerCase()
        if (s.indexOf(f.q.toLowerCase()) < 0) return false
      }
      return true
    })
    rows = applySort("transfers", rows, { date: function (t) { return t.date }, cost: function (t) { return t.cost } })
    var pg = paginate("transfers", rows)
    var froms = S.transfers.map(function (t) { return t.from }).filter(function (x, k, a) { return a.indexOf(x) === k })
    var done = S.transfers.filter(function (t) { return t.status === "이동 완료" }).length
    var cost = S.transfers.filter(function (t) { return t.status !== "이동 취소" }).reduce(function (a, t) { return a + t.cost }, 0)
    var body = pg.rows.map(function (t) {
      var v = vehicle(t.vehicleId) || { model: "(삭제된 차량)", plate: "" }
      return (
        '<tr class="' + TR + '" data-act="go" data-to="/vehicles/' + esc(t.vehicleId) + '"><td class="' + TD + '"><div><p class="font-medium text-foreground">' + esc(v.model) + '</p><p class="text-xs text-muted-foreground">' + esc(v.plate) + "</p></div></td>" +
        '<td class="' + TD + '"><span class="font-mono text-xs">' + esc(t.vehicleId) + "</span></td>" +
        '<td class="' + TD + '"><div class="flex items-center gap-1.5 text-sm"><span>' + esc(t.from) + "</span>" + ic("arrow-right", "h-3.5 w-3.5 text-muted-foreground") + '<span class="font-medium">' + esc(t.to) + "</span></div></td>" +
        '<td class="' + TD + '">' + esc(t.date) + "</td>" +
        '<td class="' + TD + ' text-muted-foreground">' + esc(t.carrier || "-") + "</td>" +
        '<td class="' + TD + ' text-right"><span class="tabular-nums">' + man(t.cost) + "</span></td>" +
        '<td class="' + TD + '">' + badge(t.status, trTone(t.status)) + "</td>" +
        '<td class="' + TD + '"><div class="flex items-center gap-1">' +
        (t.status === "이동 중" ? btn("outlineSm", ic("circle-check", "size-4") + "도착", 'data-act="tf-done" data-id="' + t.id + '"') + btn("ghostSm", "취소", 'data-act="tf-cancel" data-id="' + t.id + '"') : "") +
        btn("iconOut", ic("trash-2", "size-4 text-danger"), 'aria-label="삭제" data-act="tf-del" data-id="' + t.id + '"') + "</div></td></tr>"
      )
    }).join("")
    return (
      '<div class="space-y-6">' +
      pageHead({ crumbs: ["차량 이동 관리"], title: "차량 이동 관리", desc: "보유 차량을 지점 간 이동한 내역을 관리합니다.", actions: '<a href="' + href("/transfers/register") + '">' + btn("primary", ic("plus", "mr-1 h-4 w-4") + "차량 이동") + "</a>" }) +
      '<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">' +
      [["clipboard-list", "text-primary bg-primary/10", S.transfers.length + "건", "전체 이동 건"], ["circle-check", "text-success bg-success/10", done + "건", "이동 완료"], ["wallet", "text-info bg-info/10", man(cost), "총 이동 비용"]].map(function (k) {
        return '<div class="' + CARD + ' flex items-center gap-3 p-4"><div class="flex h-10 w-10 items-center justify-center rounded-lg ' + k[1] + '">' + ic(k[0], "h-5 w-5") + '</div><div><p class="text-2xl font-bold tabular-nums text-foreground">' + esc(k[2]) + '</p><p class="text-xs text-muted-foreground">' + k[3] + "</p></div></div>"
      }).join("") +
      "</div>" +
      '<div class="space-y-3"><div class="flex flex-col gap-2 sm:flex-row sm:items-center">' + searchBox("transfers", "차대번호8, 차명, 운송사, 기사 검색") +
      '<div class="flex flex-wrap items-center gap-2">' + fselect("transfers", "status", "상태", ["이동 중", "이동 완료", "이동 취소"]) + fselect("transfers", "from", "출발 지점", froms) + "</div>" + excelBtn("transfers") + "</div>" +
      table('<th class="' + TH + '">차명</th><th class="' + TH + '">차대번호(8)</th><th class="' + TH + '">이동 경로</th>' + sortTh("transfers", "date", "이동일") + '<th class="' + TH + '">운송사</th>' + sortTh("transfers", "cost", "이동비용", true) + '<th class="' + TH + '">상태</th><th class="' + TH + '">관리</th>', body, 8) +
      pager("transfers", pg) + "</div></div>"
    )
  }

  // ───────────────────────── 판매 ─────────────────────────
  function buyerCards(groups) {
    return (
      '<div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">' +
      groups.map(function (g) {
        return (
          '<div class="rounded-lg border border-border bg-muted/30 p-3"><div class="flex items-center justify-between"><span class="font-medium text-foreground">' + esc(g.name) + '</span><span class="text-xs text-muted-foreground">' + g.count + "대</span></div>" +
          '<div class="mt-1 flex items-center justify-between text-xs"><span class="text-muted-foreground">판매액 ' + man(g.price) + '</span><span class="font-medium ' + (g.due ? "text-danger" : "text-success") + '">미수 ' + man(g.due) + "</span></div>" +
          '<div class="mt-2"><div class="flex gap-2">' +
          btn("outlineSm", ic("file-spreadsheet", "mr-1 size-4") + "계약서(엑셀)", 'data-act="contract-xls" data-name="' + esc(g.name) + '"', "flex-1") +
          btn("outlineSm", ic("printer", "mr-1 size-4") + "인쇄/PDF", 'data-act="contract-print" data-name="' + esc(g.name) + '"', "flex-1") +
          "</div></div></div>"
        )
      }).join("") +
      "</div>"
    )
  }
  function groupByBuyer(list) {
    var map = {}, order = []
    list.forEach(function (x) {
      var key = x.buyerId || "-"
      if (!map[key]) { map[key] = { name: key === "-" ? "-" : buyer(key).name, count: 0, price: 0, due: 0 }; order.push(key) }
      map[key].count++
      if (x.sale) { map[key].price += x.sale.price; map[key].due += due(x.sale) }
    })
    return order.map(function (k) { return map[k] }).sort(function (a, b) { return b.due - a.due || b.price - a.price })
  }
  function pSales() {
    var f = S.f.sales
    var t = totals()
    var rows = S.sales.filter(function (s) {
      var v = vehicle(s.vehicleId) || {}, b = buyer(s.buyerId)
      if (f.country !== "전체" && s.country !== f.country) return false
      if (f.ship !== "전체" && s.shipType !== f.ship) return false
      if (f.paid === "완불" && due(s) > 0) return false
      if (f.paid === "미수" && due(s) === 0) return false
      if (f.q) {
        var str = (s.vehicleId + " " + (v.model || "") + " " + (v.plate || "") + " " + b.name + " " + s.country).toLowerCase()
        if (str.indexOf(f.q.toLowerCase()) < 0) return false
      }
      return true
    })
    rows = applySort("sales", rows.slice().sort(function (a, b) { return a.contractDate < b.contractDate ? 1 : -1 }), { date: function (s) { return s.contractDate }, price: function (s) { return s.price } })
    var pg = paginate("sales", rows)
    var countries = S.sales.map(function (s) { return s.country }).filter(function (x, k, a) { return a.indexOf(x) === k })
    var body = pg.rows.map(function (s) {
      var v = vehicle(s.vehicleId) || { model: "-", plate: "" }
      var pct = s.price ? Math.min(100, Math.round((s.paid / s.price) * 100)) : 0
      return (
        '<tr class="border-b border-border transition-colors hover:bg-muted/50"><td class="' + TD + '">' + esc(s.contractDate) + "</td>" +
        '<td class="' + TD + '"><div><p class="font-medium text-foreground">' + esc(v.model) + '</p><p class="text-xs text-muted-foreground">' + esc(v.plate) + "</p></div></td>" +
        '<td class="' + TD + '"><span class="font-mono text-xs">' + esc(s.vehicleId) + "</span></td>" +
        '<td class="' + TD + '">' + esc(buyer(s.buyerId).name) + "</td>" +
        '<td class="' + TD + '">' + esc(s.country) + "</td>" +
        '<td class="' + TD + ' text-right"><div class="text-right"><p class="tabular-nums font-medium">' + man(s.price) + '</p><p class="text-xs text-muted-foreground tabular-nums">' + esc(s.currency + " " + Demo.num(s.price / (s.rate || 1))) + "</p></div></td>" +
        '<td class="' + TD + '"><div class="min-w-24"><div class="mb-1 flex justify-between text-xs"><span class="text-muted-foreground tabular-nums">' + pct + "%</span></div>" + bar(pct, pct >= 100 ? "bg-success" : pct > 0 ? "bg-warning" : "bg-muted-foreground/30", "h-1.5") + "</div></td>" +
        '<td class="' + TD + '">' + (due(s) ? badge("미수", "danger") : badge("완불", "success")) + "</td>" +
        '<td class="' + TD + ' text-right"><div class="flex items-center justify-end gap-1">' +
        btn("iconOut", ic("pencil", "h-4 w-4"), 'aria-label="수정·입금" data-act="sale-edit" data-id="' + s.id + '"') +
        '<a href="' + href("/vehicles/" + s.vehicleId) + '">' + btn("iconGhostSm", ic("external-link", "h-4 w-4"), 'aria-label="차량 보기"') + "</a>" +
        btn("iconOut", ic("trash-2", "h-4 w-4 text-danger"), 'aria-label="삭제" data-act="sale-del" data-id="' + s.id + '"') + "</div></td></tr>"
      )
    }).join("")
    var groups = groupByBuyer(S.sales.map(function (s) { return { buyerId: s.buyerId, sale: s } }))
    return (
      '<div class="space-y-6">' +
      pageHead({ crumbs: ["판매 관리"], title: "판매 관리", desc: "바이어 대상 차량 판매 계약 및 수금 현황을 관리합니다.", actions: '<a href="' + href("/sales/register") + '">' + btn("primary", ic("plus", "mr-1 h-4 w-4") + "판매 계약 등록") + "</a>" }) +
      '<div class="space-y-6"><div class="grid grid-cols-2 gap-4 lg:grid-cols-4">' +
      [[t.count + "건", "총 판매 건수", "text-foreground"], [man(t.price), "총 판매액", "text-foreground"], [man(t.paid), "수금액", "text-success"], [man(t.due), "미수금", "text-danger"]].map(function (k) {
        return '<div class="' + CARD + ' p-4"><p class="text-xl font-bold tabular-nums ' + k[2] + '">' + esc(k[0]) + '</p><p class="mt-1 text-xs text-muted-foreground">' + k[1] + "</p></div>"
      }).join("") + "</div>" +
      '<div class="' + CARD + ' p-4"><h3 class="mb-3 text-sm font-semibold text-foreground">바이어별 계약서 다운로드</h3>' + buyerCards(groups) + "</div>" +
      '<div class="space-y-3"><div class="flex flex-col gap-2 sm:flex-row sm:items-center">' + searchBox("sales", "차대번호, 차명, 바이어, 국가 검색") +
      '<div class="flex flex-wrap items-center gap-2">' + fselect("sales", "country", "수출국", countries) + fselect("sales", "ship", "배송 유형", ["수출 선적", "현지 인도"]) + fselect("sales", "paid", "완불 여부", ["완불", "미수"]) + "</div>" + excelBtn("sales") + "</div>" +
      table(sortTh("sales", "date", "계약일") + '<th class="' + TH + '">차명</th><th class="' + TH + '">차대번호</th><th class="' + TH + '">바이어</th><th class="' + TH + '">수출국</th>' + sortTh("sales", "price", "판매가", true) +
        '<th class="' + TH + '">수금</th><th class="' + TH + '">완불</th><th class="' + THR + '">관리</th>', body, 9) +
      pager("sales", pg) + "</div></div></div>"
    )
  }
  function saleForm() {
    if (!S.forms.sale) S.forms.sale = { vin8: "", vehicleId: "", buyerId: "", country: "", contractDate: TODAY, price: "", deposit: "", paid: "", dueDate: "", currency: "KRW", rate: "1", shipBranchId: "", deliveryDate: "", customsDate: "" }
    return S.forms.sale
  }
  function pSaleRegister() {
    saleForm()
    var cars = S.vehicles.filter(function (v) { return !saleOf(v.id) && isHolding(v) })
    return (
      '<div class="space-y-6">' +
      pageHead({ crumbs: ["판매 관리", "판매 계약 등록"], title: "판매 계약 등록", desc: "차량에 바이어 판매 계약을 등록합니다." }) +
      '<form class="' + CARD + ' p-6" data-submit="sale-save"><div class="grid gap-5 sm:grid-cols-2"><div class="sm:col-span-2">' +
      field("차대번호 뒤 8자리로 차량 찾기", input("sale", "vin8", { cls: "w-full font-mono", placeholder: "예: MU000001 (8자리 입력 시 자동 선택)", maxlength: 17, id: "sale-vin8" })) + "</div>" +
      field("차량 *", select("sale", "vehicleId", [["", "차량 선택 (판매 미등록)"]].concat(cars.map(function (v) { return [v.id, vehOptionLabel(v)] })), { handler: "sale-veh" })) +
      field("바이어 *", select("sale", "buyerId", [["", "바이어 선택"]].concat(S.buyers.map(function (b) { return [b.id, b.name + " (" + b.country + ")"] })), { handler: "sale-buyer" })) +
      field("수출국", input("sale", "country", { placeholder: "바이어 선택 시 자동" })) +
      field("계약일", input("sale", "contractDate", { type: "date" })) +
      field("판매가 (원) *", input("sale", "price", { inputmode: "numeric", placeholder: "예: 16,800,000" })) +
      field("계약금 (원)", input("sale", "deposit", { inputmode: "numeric" })) +
      field("입금액 (원)", input("sale", "paid", { inputmode: "numeric" })) +
      field("입금 예정일", input("sale", "dueDate", { type: "date" })) +
      field("통화", select("sale", "currency", ["KRW", "USD", "EUR", "AED"])) +
      field("환율", input("sale", "rate", {})) +
      field("출고 지점", select("sale", "shipBranchId", [["", "선택 안 함"]].concat(S.branches.map(function (b) { return [b.id, b.name] })))) +
      field("차량 전달날짜", input("sale", "deliveryDate", { type: "date" })) +
      field("면장날짜", input("sale", "customsDate", { type: "date" })) +
      "</div>" + formFooter("판매 계약 등록", "back") + "</form></div>"
    )
  }

  // ───────────────────────── 인천 야드 ─────────────────────────
  function yardRows() {
    return S.vehicles.filter(function (v) { return v.yard && v.status !== "정산 완료" }).map(function (v) {
      var s = saleOf(v.id)
      var bId = s ? s.buyerId : v.yardBuyer
      var paidFull = s && due(s) === 0
      var age = diffDays(TODAY, v.dereg)
      return { v: v, sale: s, buyerId: bId || "", paidFull: paidFull, stock: !paidFull && age >= 10, late: !paidFull && age >= 20 }
    })
  }
  function dday(s) {
    if (!s) return '<span class="text-muted-foreground">-</span>'
    if (!due(s)) return '<span class="tabular-nums font-medium text-muted-foreground">완료</span>'
    var ref = s.dueDate || s.contractDate
    var d = diffDays(ref, TODAY)
    if (d === 0) return '<span class="tabular-nums font-medium text-danger">D-DAY</span>'
    if (d > 0) return '<span class="tabular-nums font-medium text-warning-foreground">D-' + d + "</span>"
    return '<span class="tabular-nums font-medium text-danger">D+' + -d + "</span>"
  }
  function pYard() {
    var f = S.f.yard
    var all = yardRows()
    var rows = all.filter(function (x) {
      var b = buyer(x.buyerId)
      if (f.paid === "완불" && !x.paidFull) return false
      if (f.paid === "미수" && x.paidFull) return false
      if (f.buyer !== "전체" && (x.buyerId || "-") !== f.buyer) return false
      if (f.stock === "재고만" && !x.stock) return false
      if (f.stock === "재고 아님" && x.stock) return false
      if (f.q) {
        var str = (x.v.id + " " + x.v.model + " " + b.name + " " + (b.country || "") + " " + (b.phone || "")).toLowerCase()
        if (str.indexOf(f.q.toLowerCase()) < 0) return false
      }
      return true
    })
    rows = applySort("yard", rows, { dereg: function (x) { return x.v.dereg }, price: function (x) { return x.sale ? x.sale.price : 0 }, date: function (x) { return x.sale ? x.sale.contractDate : "" } })
    var pg = paginate("yard", rows)
    var stock = all.filter(function (x) { return x.stock })
    var stockDue = stock.reduce(function (a, x) { return a + (x.sale ? due(x.sale) : 0) }, 0)
    var paidN = all.filter(function (x) { return x.paidFull }).length
    var dueSum = all.reduce(function (a, x) { return a + (x.sale ? due(x.sale) : 0) }, 0)
    var buyersIn = all.map(function (x) { return x.buyerId || "-" }).filter(function (x, k, a) { return a.indexOf(x) === k })
    var body = pg.rows.map(function (x) {
      var v = x.v, s = x.sale, b = buyer(x.buyerId)
      return (
        '<tr class="border-b border-border transition-colors cursor-pointer ' + (x.late ? "demo-row-late" : x.stock ? "bg-warning/20 hover:bg-warning/30" : "hover:bg-muted/50") + '" data-yard="' + esc(v.id) + '" title="더블클릭하면 판매 정보를 입력합니다">' +
        '<td class="' + TD + '">' + esc(v.dereg) + '</td><td class="' + TD + '">' + v.year + '</td><td class="' + TD + ' font-medium">' + esc(v.model) + "</td>" +
        '<td class="' + TD + '"><span class="font-mono text-xs">' + esc(v.id) + '</span></td><td class="' + TD + '">' + esc(v.color) + "</td>" +
        '<td class="' + TD + ' text-right"><span class="tabular-nums text-muted-foreground">' + man(v.reportPrice) + '</span></td><td class="' + TD + ' text-right"><span class="tabular-nums text-muted-foreground">' + man(v.price) + "</span></td>" +
        '<td class="' + TD + '">' + esc(x.buyerId ? b.name : "-") + '</td><td class="' + TD + '">' + esc(x.buyerId ? b.country : "-") + '</td><td class="' + TD + ' whitespace-nowrap">' + esc(x.buyerId ? b.phone : "-") + "</td>" +
        '<td class="' + TD + ' text-right"><span class="tabular-nums">' + (s ? man(s.price) : "-") + '</span></td><td class="' + TD + '">' + esc(s ? s.contractDate : "-") + "</td>" +
        '<td class="' + TD + ' text-right"><span class="tabular-nums">' + (s ? man(s.deposit) : "-") + "</span></td>" +
        '<td class="' + TD + ' text-right">' + (s && due(s) ? '<span class="tabular-nums text-danger">' + man(due(s)) + "</span>" : '<span class="text-muted-foreground">-</span>') + "</td>" +
        '<td class="' + TD + '">' + (x.paidFull ? badge("완불", "success") : badge("미수", "danger")) + "</td>" +
        '<td class="' + TD + '">' + dday(s) + '</td><td class="' + TD + '">' + esc((s && s.deliveryDate) || "-") + '</td><td class="' + TD + '">' + esc((s && s.customsDate) || "-") + "</td>" +
        '<td class="' + TD + '"><div class="flex items-center gap-1">' + btn("iconOut", ic("pencil", "size-4"), 'aria-label="수정" data-act="yard-edit" data-id="' + esc(v.id) + '"') +
        btn("iconOut", ic("trash-2", "size-4 text-danger"), 'aria-label="야드에서 제외" data-act="yard-del" data-id="' + esc(v.id) + '"') + "</div></td></tr>"
      )
    }).join("")
    return (
      '<div class="space-y-6">' +
      pageHead({ crumbs: ["판매 관리", "인천 야드 창고"], title: "인천 야드 창고", desc: "인천 야드 창고 차량의 입고·계약·수금·전달·면장 현황과 바이어별 미수를 관리합니다." }) +
      '<div class="space-y-6">' +
      (stock.length
        ? '<div class="flex items-start gap-3 rounded-xl border p-4 text-sm border-warning/50 bg-warning/15 text-warning-foreground">' + ic("triangle-alert", "mt-0.5 size-5 shrink-0") +
          '<div><p class="font-semibold">⚠️ 말소 10일 경과 미완불(재고) ' + stock.length + "대 · 미수금 " + man(stockDue) + '</p><p class="mt-0.5 text-xs opacity-90">해당 행은 노란색으로 표시됩니다. 완불 처리하면 경고가 사라집니다.</p></div></div>'
        : "") +
      '<div class="grid grid-cols-2 gap-4 lg:grid-cols-4">' +
      [[all.length + "대", "야드 차량", "text-foreground"], [paidN + "대", "완불", "text-success"], [all.length - paidN + "대", "미수", "text-danger"], [man(dueSum), "미수금 합계", "text-danger"]].map(function (k) {
        return '<div class="' + CARD + ' p-4"><p class="text-xl font-bold tabular-nums ' + k[2] + '">' + esc(k[0]) + '</p><p class="mt-1 text-xs text-muted-foreground">' + k[1] + "</p></div>"
      }).join("") + "</div>" +
      '<div class="' + CARD + ' p-4"><div class="mb-3 flex flex-wrap items-center justify-between gap-2"><h3 class="text-sm font-semibold text-foreground">바이어별 리스트 · 미수 현황</h3><div class="flex items-center gap-2">' +
      '<a href="' + href("/sales/register") + '">' + btn("outlineSm", ic("plus", "mr-1 size-4") + "판매 계약 등록") + "</a>" + btn("outlineSm", ic("user-plus", "mr-1 size-4") + "바이어 추가", 'data-act="go" data-to="/buyers/register"') + "</div></div>" +
      buyerCards(groupByBuyer(all)) + "</div>" +
      '<div class="space-y-3"><div class="flex flex-col gap-2 sm:flex-row sm:items-center">' + searchBox("yard", "차대번호8, 차명, 바이어, 수출국, 휴대폰 검색") +
      '<div class="flex flex-wrap items-center gap-2">' + fselect("yard", "paid", "완불 여부", ["완불", "미수"]) +
      fselect("yard", "buyer", "바이어", buyersIn.map(function (k) { return [k, k === "-" ? "-" : buyer(k).name] })) + fselect("yard", "stock", "재고(10일 경과)", ["재고만", "재고 아님"]) + "</div>" + excelBtn("yard") + "</div>" +
      table(sortTh("yard", "dereg", "말소일") + '<th class="' + TH + '">연식</th><th class="' + TH + '">차명</th><th class="' + TH + '">차대번호(8)</th><th class="' + TH + '">색상</th><th class="' + THR + '">매입신고</th><th class="' + THR + '">실매입</th><th class="' + TH + '">바이어</th><th class="' + TH + '">수출국</th><th class="' + TH + '">휴대폰</th>' +
        sortTh("yard", "price", "판매가", true) + sortTh("yard", "date", "계약날짜") + '<th class="' + THR + '">계약금</th><th class="' + THR + '">잔금</th><th class="' + TH + '">완불</th><th class="' + TH + '">미수 D-day</th><th class="' + TH + '">인도(전달)날짜</th><th class="' + TH + '">면장날짜</th><th class="' + TH + '">관리</th>', body, 19) +
      pager("yard", pg) + "</div>" +
      '<p class="text-xs text-muted-foreground">· 행을 <b>더블클릭</b>하면 바이어·전번·수출국·판매가·계약일·완불·이동/면장날짜를 한 창에서 작성/수정할 수 있습니다. · 말소일로부터 10일이 지난 미완불 차량은 재고로 간주되어 행이 노란색(장기 20일↑ 빨간색)으로 표시됩니다. · 계약(또는 입금예정)일이 지정되면 미수 D-day가 자동 계산됩니다.</p>' +
      "</div></div>"
    )
  }

  // ───────────────────────── 창고(바이어) ─────────────────────────
  function pBuyers(r) {
    var f = S.f.buyers
    var rec = r.query.tab === "receivable"
    var rows = S.buyers.map(function (b) { return { b: b, st: buyerStats(b) } }).filter(function (x) {
      if (rec && !x.st.due) return false
      if (f.grade !== "전체" && x.b.grade !== f.grade) return false
      if (f.pay !== "전체" && x.st.pay !== f.pay) return false
      if (f.q) {
        var str = (x.b.name + " " + x.b.contact + " " + x.b.country + " " + x.b.staff).toLowerCase()
        if (str.indexOf(f.q.toLowerCase()) < 0) return false
      }
      return true
    })
    if (rec && !S.sort.buyers) rows.sort(function (a, b) { return b.st.due - a.st.due })
    rows = applySort("buyers", rows, { name: function (x) { return x.b.name }, country: function (x) { return x.b.country }, count: function (x) { return x.st.count }, price: function (x) { return x.st.price }, due: function (x) { return x.st.due }, last: function (x) { return x.st.last } })
    var pg = paginate("buyers", rows)
    var gradeTone = { A: "success", B: "info", C: "muted" }
    var body = pg.rows.map(function (x) {
      var b = x.b, st = x.st
      return (
        '<tr class="' + TR + '" data-act="buyer-open" data-name="' + esc(b.name) + '"><td class="' + TD + '"><div><div class="flex items-center gap-2"><span class="font-medium text-foreground">' + esc(b.name) + "</span>" + badge(b.grade + "등급", gradeTone[b.grade]) +
        '</div><div class="text-xs text-muted-foreground">' + esc(b.contact) + "</div></div></td>" +
        '<td class="' + TD + '">' + esc(b.country) + '</td><td class="' + TD + '"><div class="text-xs"><div>' + esc(b.phone) + '</div><div class="text-muted-foreground">' + esc(b.email) + "</div></div></td>" +
        '<td class="' + TD + '">' + esc(b.staff) + '</td><td class="' + TD + ' text-right"><span class="tabular-nums">' + st.count + '대</span></td><td class="' + TD + ' text-right"><span class="tabular-nums">' + man(st.price) + "</span></td>" +
        '<td class="' + TD + ' text-right"><span class="tabular-nums ' + (st.due ? "text-danger" : "text-success") + '">' + man(st.due) + "</span></td>" +
        '<td class="' + TD + '">' + badge(st.pay, PAY_TONE[st.pay]) + '</td><td class="' + TD + '">' + (b.excludeYard ? badge("제외", "muted") : badge("포함", "info")) + '</td><td class="' + TD + '">' + esc(st.last) + "</td></tr>"
      )
    }).join("")
    return (
      '<div class="space-y-6">' +
      pageHead({ crumbs: ["창고 관리"], title: "창고 관리", desc: rec ? "미수금이 남은 창고(바이어)만 미수금 순으로 보여줍니다." : "창고(바이어)의 거래 현황, 등급, 미수금을 관리합니다.", actions: '<a href="' + href("/buyers/register") + '">' + btn("primary", ic("plus", "mr-1 h-4 w-4") + "창고 등록") + "</a>" }) +
      '<div class="space-y-3"><div class="flex flex-col gap-2 sm:flex-row sm:items-center">' + searchBox("buyers", "창고명, 담당자, 국가 검색") +
      '<div class="flex flex-wrap items-center gap-2">' + fselect("buyers", "grade", "등급", ["A", "B", "C"]) + fselect("buyers", "pay", "결제 상태", ["입금 전", "일부 입금", "입금 완료"]) +
      (rec ? '<a class="text-xs text-primary hover:underline" href="' + href("/buyers") + '">전체 보기</a>' : "") + "</div>" + excelBtn("buyers") + "</div>" +
      table(sortTh("buyers", "name", "창고(바이어)") + sortTh("buyers", "country", "국가") + '<th class="' + TH + '">연락처</th><th class="' + TH + '">담당자</th>' + sortTh("buyers", "count", "거래대수", true) + sortTh("buyers", "price", "누적 거래액", true) + sortTh("buyers", "due", "미수금", true) +
        '<th class="' + TH + '">결제 상태</th><th class="' + TH + '">인천 야드</th>' + sortTh("buyers", "last", "최근 거래일"), body, 10) +
      pager("buyers", pg) + "</div></div>"
    )
  }
  function buyerForm() {
    if (!S.forms.buyer) S.forms.buyer = { name: "", contact: "", country: "", phone: "", whatsapp: "", email: "", grade: "B", payStatus: "입금 전", staff: "본사 관리자", excludeYard: false }
    return S.forms.buyer
  }
  function pBuyerRegister() {
    var F = buyerForm()
    return (
      '<div class="space-y-6">' + pageHead({ crumbs: ["창고 관리", "창고 등록"], title: "창고 등록", desc: "신규 창고(바이어)를 등록합니다." }) +
      '<form class="' + CARD + ' p-6" data-submit="buyer-save"><div class="grid gap-5 sm:grid-cols-2">' +
      field("창고명(업체명) *", input("buyer", "name", { placeholder: "예: Al-Noor Motors" })) + field("담당자명", input("buyer", "contact", { placeholder: "예: Ahmed Salem" })) +
      field("국가", input("buyer", "country", { placeholder: "예: 리비아" })) + field("전화", input("buyer", "phone", { placeholder: "+218-..." })) +
      field("WhatsApp", input("buyer", "whatsapp", {})) + field("이메일", input("buyer", "email", {})) +
      field("등급", select("buyer", "grade", ["A", "B", "C"])) + field("결제 상태", select("buyer", "payStatus", ["입금 전", "일부 입금", "입금 예정", "연체", "입금 완료"])) +
      field("담당 직원", input("buyer", "staff", {})) +
      '<label class="sm:col-span-2 mt-1 flex items-start gap-3 rounded-lg border border-dashed border-border bg-muted/30 p-4 text-sm"><input class="mt-0.5 size-4" type="checkbox" name="excludeYard" data-input="fd" data-form="buyer"' + (F.excludeYard ? " checked" : "") +
      '><span><span class="font-medium text-foreground">인천 창고 리스트 제외</span><span class="mt-0.5 block text-xs text-muted-foreground">체크하면 이 창고(바이어)의 판매 차량이 ‘인천 야드 창고’ 목록에 자동으로 올라가지 않습니다.</span></span></label>' +
      "</div>" + formFooter("창고 등록", "back") + "</form></div>"
    )
  }

  // ───────────────────────── 정산 ─────────────────────────
  var SETTLE_TONE = { "정산 전": "muted", "비용 확인 중": "warn2", "입금 대기": "info", "일부 정산": "primary", "정산 완료": "success", "거래 종결": "success" }
  function settleRow(s) {
    var v = vehicle(s.vehicleId) || { price: 0, model: "-", plate: "" }
    var cost = v.price + transferCost(s.vehicleId)
    return { s: s, v: v, cost: cost, profit: s.price - cost, due: due(s) }
  }
  function pSettlement() {
    var f = S.f.settle
    var all = S.sales.map(settleRow)
    var rows = all.filter(function (x) {
      if (f.status !== "전체" && x.s.settle !== f.status) return false
      if (f.q) {
        var str = (x.v.model + " " + x.v.plate + " " + x.s.vehicleId + " " + buyer(x.s.buyerId).name).toLowerCase()
        if (str.indexOf(f.q.toLowerCase()) < 0) return false
      }
      return true
    })
    rows = applySort("settle", rows, { cost: function (x) { return x.cost }, price: function (x) { return x.s.price }, profit: function (x) { return x.profit }, due: function (x) { return x.due } })
    var pg = paginate("settle", rows)
    var sum = function (k) { return all.reduce(function (a, x) { return a + k(x) }, 0) }
    var doneList = all.filter(function (x) { return x.s.settle === "정산 완료" || x.s.settle === "거래 종결" })
    var months = doneList.map(function (x) { return (x.s.customsDate || x.s.contractDate).slice(0, 7) }).filter(function (m, k, a) { return a.indexOf(m) === k }).sort().reverse()
    if (!f.month || months.indexOf(f.month) < 0) f.month = months[0] || ""
    var profit = sum(function (x) { return x.profit })
    var body = pg.rows.map(function (x) {
      return (
        '<tr class="' + TR + '" data-act="settle-edit" data-id="' + x.s.id + '"><td class="' + TD + '"><div><p class="font-medium text-foreground">' + esc(x.v.model) + '</p><p class="text-xs text-muted-foreground">' + esc(x.v.plate) + "</p></div></td>" +
        '<td class="' + TD + '">' + esc(buyer(x.s.buyerId).name) + '</td><td class="' + TD + ' text-right"><span class="tabular-nums">' + man(x.cost) + '</span></td><td class="' + TD + ' text-right"><span class="tabular-nums">' + man(x.s.price) + "</span></td>" +
        '<td class="' + TD + ' text-right"><span class="tabular-nums font-medium ' + (x.profit >= 0 ? "text-success" : "text-danger") + '">' + signedMan(x.profit) + "</span></td>" +
        '<td class="' + TD + ' text-right"><span class="tabular-nums ' + (x.due ? "text-danger" : "text-muted-foreground") + '">' + man(x.due) + '</span></td><td class="' + TD + '">' + badge(x.s.settle, SETTLE_TONE[x.s.settle]) + "</td></tr>"
      )
    }).join("")
    return (
      '<div class="space-y-6">' + pageHead({ crumbs: ["정산 관리"], title: "정산 관리", desc: "차량별 원가, 판매가, 손익 및 미수금을 집계하여 정산을 관리합니다." }) +
      '<div class="space-y-6"><div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">' +
      [[all.length + "대", "정산 대상", "text-foreground"], [man(sum(function (x) { return x.s.price })), "총 매출", "text-foreground"], [man(sum(function (x) { return x.cost })), "총 원가", "text-muted-foreground"],
        [signedMan(profit), "총 손익", profit >= 0 ? "text-success" : "text-danger"], [man(sum(function (x) { return x.due })), "총 미수금", "text-danger"], [doneList.length + "대", "정산 완료", "text-success"]].map(function (k) {
        return '<div class="' + CARD + ' p-4"><p class="text-lg font-bold tabular-nums ' + k[2] + '">' + esc(k[0]) + '</p><p class="mt-1 text-xs text-muted-foreground">' + k[1] + "</p></div>"
      }).join("") + "</div>" +
      '<div class="' + CARD + ' flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"><div><h3 class="text-sm font-semibold text-foreground">정산 완료 차량 · 월별 다운로드</h3><p class="mt-0.5 text-xs text-muted-foreground">면장(통관)날짜 기준으로 정산 완료·거래 종결 차량을 달별로 내려받습니다. (정산 완료 ' + doneList.length + "대)</p></div>" +
      '<div class="flex items-center gap-2"><select class="' + FSEL + '" aria-label="정산 월 선택" data-input="flt-raw" data-list="settle" data-k="month">' +
      (months.length ? months.map(function (m) { return '<option value="' + m + '"' + (m === f.month ? " selected" : "") + ">" + m + "</option>" }).join("") : '<option value="">정산 완료 없음</option>') + "</select>" +
      btn("outlineSm", ic("download", "size-4") + "월별 다운로드", 'data-act="settle-month"' + (months.length ? "" : ' disabled=""')) + "</div></div>" +
      '<div class="space-y-3"><div class="flex flex-col gap-2 sm:flex-row sm:items-center">' + searchBox("settle", "차량, 바이어 검색") +
      '<div class="flex flex-wrap items-center gap-2">' + fselect("settle", "status", "정산 상태", ["정산 전", "비용 확인 중", "입금 대기", "일부 정산", "정산 완료", "거래 종결"]) + "</div>" + excelBtn("settle") + "</div>" +
      table('<th class="' + TH + '">차명</th><th class="' + TH + '">바이어</th>' + sortTh("settle", "cost", "총원가", true) + sortTh("settle", "price", "판매가", true) + sortTh("settle", "profit", "예상 손익", true) + sortTh("settle", "due", "미수금", true) + '<th class="' + TH + '">정산 상태</th>', body, 7) +
      pager("settle", pg) + "</div></div></div>"
    )
  }

  // ───────────────────────── 직원 / 권한 ─────────────────────────
  function tabToggle(label, on, act, extra) {
    return (
      '<button type="button" data-act="' + act + '" data-tab="' + esc(label) + '"' + (extra || "") + ' class="flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition-colors ' +
      (on ? "border-primary/30 bg-primary/10 text-primary" : "border-border bg-card text-muted-foreground hover:bg-muted/50") + '"><span class="flex size-4 shrink-0 items-center justify-center rounded border ' +
      (on ? "border-primary bg-primary text-primary-foreground" : "border-input") + '">' + (on ? ic("check", "size-3") : "") + "</span>" + esc(label) + "</button>"
    )
  }
  function staffForm() {
    if (!S.forms.staff) S.forms.staff = { uid: "", pw: "", name: "", role: "branch", branchId: "", tabs: [] }
    return S.forms.staff
  }
  function pStaff() {
    var F = staffForm()
    var body = S.staff.map(function (u) {
      return (
        '<tr class="border-b border-border transition-colors hover:bg-muted/50"><td class="' + TD + ' font-mono text-sm font-medium">' + esc(u.uid) + '</td><td class="' + TD + '">' + esc(u.name) + '</td><td class="' + TD + '">' +
        (u.role === "admin" ? badge("본사 관리자", "primary") : badge("지점 직원", "info")) + '</td><td class="' + TD + ' text-muted-foreground">' + esc(u.branchId ? branchName(u.branchId) : "-") +
        '</td><td class="' + TD + ' max-w-64 text-xs text-muted-foreground">' + esc(u.role === "admin" ? "전체" : u.tabs.length ? u.tabs.join(", ") : "지점 기본값") + '</td><td class="' + TD + ' text-muted-foreground">' + esc(u.createdAt) +
        '</td><td class="' + TD + ' text-right">' + btn("iconOut", ic("trash-2", "size-4 text-danger"), 'aria-label="삭제" data-act="staff-del" data-id="' + esc(u.uid) + '"' + (u.uid === "admin" ? ' disabled=""' : "")) + "</td></tr>"
      )
    }).join("")
    return (
      '<div class="space-y-6">' + pageHead({ crumbs: ["직원 관리"], title: "직원 관리", desc: "지점별 직원 계정을 생성하고 관리합니다. 접근 가능한 탭은 [권한 관리]에서 지점별로 설정합니다." }) +
      '<div class="' + CARD + ' p-5"><h2 class="mb-4 flex items-center gap-2 text-sm font-semibold">' + ic("user-plus", "size-4") + "계정 추가</h2>" +
      '<form class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-submit="staff-save">' +
      field("아이디", input("staff", "uid", { placeholder: "영문 아이디" })) + field("비밀번호", input("staff", "pw", { type: "password", placeholder: "4자 이상" })) + field("이름", input("staff", "name", { placeholder: "직원 이름" })) +
      field("권한", select("staff", "role", [["branch", "지점 직원"], ["admin", "본사 관리자"]])) +
      field("소속 지점", select("staff", "branchId", [["", "지점 선택"]].concat(S.branches.map(function (b) { return [b.id, b.name] })))) +
      '<div class="sm:col-span-2 lg:col-span-3"><span class="text-sm font-medium text-muted-foreground">접근 가능한 탭 (중복 선택)</span><div class="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">' +
      TABS.map(function (t) { return tabToggle(t, F.tabs.indexOf(t) >= 0, "staff-tab") }).join("") + "</div></div>" +
      '<div class="flex items-end sm:col-span-2 lg:col-span-3">' + sbtn("primary", ic("user-plus", "mr-1 h-4 w-4") + "계정 생성", 'type="submit"') + "</div></form></div>" +
      '<div class="' + CARD + '"><div class="p-1">' +
      table('<th class="' + TH + '">아이디</th><th class="' + TH + '">이름</th><th class="' + TH + '">권한</th><th class="' + TH + '">소속 지점</th><th class="' + TH + '">접근 탭</th><th class="' + TH + '">생성일</th><th class="' + THR + '">관리</th>', body, 7, true).replace('<tr class="' + TRH + '">', '<tr class="border-b border-border transition-colors hover:bg-muted/50">') +
      "</div></div></div>"
    )
  }
  function pRoles() {
    return (
      '<div class="space-y-6">' + pageHead({ crumbs: ["권한 관리"], title: "권한 관리", desc: "지점별 기본 접근 탭을 설정합니다. (직원 관리에서 계정별로 탭을 지정하면 그 설정이 우선 적용됩니다.)" }) +
      '<div class="flex items-center gap-2 rounded-lg border border-info/30 bg-info/10 p-3 text-sm text-info">' + ic("shield-check", "size-4 shrink-0") + "본사 관리자 계정은 모든 메뉴에 접근하며, 이 설정의 영향을 받지 않습니다.</div>" +
      '<div class="grid gap-4 lg:grid-cols-2">' +
      S.branches.map(function (b) {
        var set = S.roles[b.id] || (S.roles[b.id] = [])
        return (
          '<div class="' + CARD + ' p-5"><div class="mb-4 flex items-center justify-between"><div class="flex items-center gap-2"><div class="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">' + ic("building-2", "size-4") +
          '</div><div><div class="font-semibold">' + esc(b.name) + '</div><div class="text-xs text-muted-foreground">' + esc(b.code + " · " + b.type) + "</div></div></div>" +
          btn("primarySm", "저장", 'data-act="role-save" data-id="' + b.id + '"') + '</div><div class="grid grid-cols-2 gap-2 sm:grid-cols-3">' +
          TABS.map(function (t) { return tabToggle(t, set.indexOf(t) >= 0, "role-tab", ' data-id="' + b.id + '"') }).join("") + "</div></div>"
        )
      }).join("") + "</div></div>"
    )
  }

  // ───────────────────────── 지점 ─────────────────────────
  var BR_TONE = { 본사: "primary", "매입 지점": "info", "차량 보관장": "muted", "정비 지점": "warn2", 선적장: "info", "출고 지점": "success" }
  function rateLabel(b, st) {
    return st.parked + "/" + (b.capacity || 0) + " (" + st.rate + "%)"
  }
  function rateColor(r) {
    return r >= 90 ? "bg-danger" : r >= 70 ? "bg-warning" : "bg-success"
  }
  function pBranches() {
    return (
      '<div class="space-y-6">' + pageHead({ crumbs: ["지점 관리"], title: "지점 관리", desc: "매입, 보관, 정비, 선적, 출고 지점의 현황을 관리합니다.", actions: '<a href="' + href("/branches/register") + '">' + btn("primary", ic("plus", "mr-1 h-4 w-4") + "지점 등록") + "</a>" }) +
      '<div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">' +
      S.branches.map(function (b) {
        var st = branchStats(b)
        return (
          '<a href="' + href("/branches/" + b.id) + '"><div class="' + CARD + ' group h-full p-5 transition-all hover:border-primary/40 hover:shadow-md"><div class="flex items-start justify-between"><div class="flex items-center gap-3"><div class="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">' +
          ic("building-2", "h-5 w-5") + '</div><div><h3 class="font-semibold leading-tight text-foreground">' + esc(b.name) + '</h3><p class="text-xs text-muted-foreground">' + esc(b.code) + "</p></div></div>" + badge(b.type, BR_TONE[b.type]) + "</div>" +
          '<div class="mt-4 space-y-1.5 text-sm text-muted-foreground"><p class="flex items-center gap-2">' + ic("map-pin", "h-3.5 w-3.5 shrink-0") + esc(b.addr) + '</p><p class="flex items-center gap-2">' + ic("user", "h-3.5 w-3.5 shrink-0") + esc(b.manager) +
          '</p><p class="flex items-center gap-2">' + ic("phone", "h-3.5 w-3.5 shrink-0") + esc(b.phone) + "</p></div>" +
          '<div class="mt-4"><div class="space-y-1"><div class="flex items-center justify-between text-xs"><span class="text-muted-foreground">적재율</span><span class="font-medium tabular-nums text-foreground">' + rateLabel(b, st) + "</span></div>" + bar(st.rate, rateColor(st.rate), "h-2") + "</div></div>" +
          '<div class="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-3 text-center">' +
          [[st.inbound, "입고 예정", "text-info"], [st.moving, "이동 중", "text-warning"], [st.outbound, "출고 예정", "text-success"]].map(function (k) {
            return '<div><p class="text-base font-semibold tabular-nums ' + k[2] + '">' + k[0] + '</p><p class="text-[11px] text-muted-foreground">' + k[1] + "</p></div>"
          }).join("") + "</div>" +
          '<div class="mt-4 flex items-center justify-end gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">상세 보기' + ic("arrow-right", "h-4 w-4") + "</div></div></a>"
        )
      }).join("") + "</div></div>"
    )
  }
  function pBranchDetail(id) {
    var b = branch(id)
    if (!b) return notFound("지점을 찾을 수 없습니다.", "/branches")
    var st = branchStats(b)
    var cars = parkedAt(b.id)
    var trs = S.transfers.filter(function (t) { return t.from === b.name || t.to === b.name })
    var tab = S.f.branchTab
    var tabBtn = function (key, label) {
      return '<button type="button" data-act="br-tab" data-tab="' + key + '" class="-mb-px whitespace-nowrap border-b-2 px-3.5 py-2 text-sm font-medium transition-colors ' + (tab === key ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground") + '">' + label + "</button>"
    }
    var tbl
    if (tab === "cars") {
      tbl = table('<th class="' + TH + '">차량번호</th><th class="' + TH + '">차량</th><th class="' + TH + '">상태</th><th class="' + TH + '">보관위치</th><th class="' + THR + '">보관일수</th><th class="' + TH + '"></th>',
        cars.map(function (v) {
          return '<tr class="border-b border-border transition-colors hover:bg-muted/50"><td class="' + TD + ' font-medium">' + esc(v.plate) + '</td><td class="' + TD + '">' + esc(v.model) + '</td><td class="' + TD + '">' + badge(v.status, STATUS_TONE[v.status]) + '</td><td class="' + TD + ' text-muted-foreground">' + esc(v.location || "-") +
            '</td><td class="' + TD + ' text-right tabular-nums">' + stayDays(v) + '일</td><td class="' + TD + ' text-right"><a href="' + href("/vehicles/" + v.id) + '">' + btn("ghostSm", ic("arrow-right", "h-4 w-4"), 'aria-label="차량 보기"') + "</a></td></tr>"
        }).join(""), 6, true)
    } else {
      tbl = table('<th class="' + TH + '">이동일</th><th class="' + TH + '">차량</th><th class="' + TH + '">이동 경로</th><th class="' + THR + '">이동비용</th><th class="' + TH + '">상태</th>',
        trs.map(function (t) {
          var v = vehicle(t.vehicleId) || { model: "-", plate: "" }
          return '<tr class="border-b border-border transition-colors hover:bg-muted/50"><td class="' + TD + '">' + esc(t.date) + '</td><td class="' + TD + '"><div><p class="font-medium text-foreground">' + esc(v.model) + '</p><p class="text-xs text-muted-foreground">' + esc(v.plate) + '</p></div></td><td class="' + TD + '"><div class="flex items-center gap-1.5 text-sm"><span>' + esc(t.from) + "</span>" + ic("arrow-right", "h-3.5 w-3.5 text-muted-foreground") + '<span class="font-medium">' + esc(t.to) +
            '</span></div></td><td class="' + TD + ' text-right tabular-nums">' + man(t.cost) + '</td><td class="' + TD + '">' + badge(t.status, trTone(t.status)) + "</td></tr>"
        }).join(""), 5, true)
    }
    return (
      '<div class="space-y-6">' +
      pageHead({
        crumbs: [["지점 관리", "/branches"], b.name], title: b.name, desc: b.code + " · " + b.type,
        actions: '<div class="flex items-center gap-2">' + badge(b.status, b.status === "운영중" ? "success" : b.status === "점검중" ? "warn2" : "muted") +
          '<a href="' + href("/branches/" + b.id + "/edit") + '">' + btn("outlineSm", ic("pencil", "mr-1 h-4 w-4") + "수정") + "</a>" + btn("outlineSm", ic("trash-2", "mr-1 h-4 w-4 text-danger") + "삭제", 'data-act="br-del" data-id="' + b.id + '"') + "</div>",
      }) +
      '<div class="grid gap-4 lg:grid-cols-3"><div class="' + CARD + ' lg:col-span-1"><div class="flex flex-col gap-1 px-5 pt-5 pb-3"><h3 class="text-sm font-semibold tracking-tight">지점 정보</h3></div><div class="px-5 pb-5 space-y-3 text-sm">' +
      infoRow("building-2", "유형", b.type) + infoRow("map-pin", "주소", b.addr + (b.addr2 ? " " + b.addr2 : "")) + infoRow("user", "담당자", b.manager) + infoRow("phone", "연락처", b.phone + (b.phone2 ? " / " + b.phone2 : "")) +
      '<div class="space-y-1 pt-2"><div class="flex justify-between text-xs"><span class="text-muted-foreground">적재율</span><span class="font-medium tabular-nums">' + rateLabel(b, st) + "</span></div>" + bar(st.rate, rateColor(st.rate), "h-2") + "</div>" +
      (b.memo ? '<p class="text-xs text-muted-foreground">메모 · ' + esc(b.memo) + "</p>" : "") +
      '</div></div><div class="space-y-4 lg:col-span-2"><div class="grid grid-cols-2 gap-4 sm:grid-cols-4">' +
      statCard(String(st.parked), "보관 대수") + statCard(String(st.inbound), "입고 예정", "text-info") + statCard(String(st.moving), "이동 중", "text-warning") + statCard(String(st.outbound), "출고 예정", "text-success") +
      '</div><div class="' + CARD + '"><div><div class="mb-4 flex flex-wrap gap-1 overflow-x-auto border-b border-border">' + tabBtn("cars", "보관 차량 (" + cars.length + ")") + tabBtn("moves", "이동 이력 (" + trs.length + ")") +
      '</div><div><div class="p-1">' + tbl + "</div></div></div></div></div></div></div>"
    )
  }
  function branchFormFor(id) {
    if (!S.forms.branch || S.forms.branch._for !== (id || "new")) {
      var b = id ? branch(id) : null
      S.forms.branch = b
        ? { _for: id, name: b.name, code: b.code, type: b.type, status: b.status, addr: b.addr, addr2: b.addr2, manager: b.manager, phone: b.phone, phone2: b.phone2, capacity: String(b.capacity || ""), memo: b.memo }
        : { _for: "new", name: "", code: "", type: "매입 지점", status: "운영중", addr: "", addr2: "", manager: "", phone: "", phone2: "", capacity: "", memo: "" }
    }
    return S.forms.branch
  }
  function pBranchForm(id) {
    var b = id ? branch(id) : null
    if (id && !b) return notFound("지점을 찾을 수 없습니다.", "/branches")
    var F = branchFormFor(id)
    return (
      '<div class="space-y-6">' + pageHead({ crumbs: b ? [["지점 관리", "/branches"], [b.name, "/branches/" + b.id], "수정"] : ["지점 관리", "지점 등록"], title: b ? "지점 수정" : "지점 등록", desc: b ? "지점 정보를 수정합니다." : "신규 지점을 등록합니다." }) +
      '<form class="' + CARD + ' p-6" data-submit="branch-save" data-id="' + (id || "") + '"><div class="grid gap-5 sm:grid-cols-2">' +
      field("지점명 *", input("branch", "name", { placeholder: "예: 울산 보관장" })) + field("지점 코드", input("branch", "code", { placeholder: "비워두면 자동 생성" })) +
      field("유형", select("branch", "type", ["본사", "매입 지점", "차량 보관장", "정비 지점", "선적장", "출고 지점"])) + field("운영 상태", select("branch", "status", ["운영중", "점검중", "중지"])) +
      field("주소", input("branch", "addr", { placeholder: "예: 울산광역시 남구" })) + field("상세 주소", input("branch", "addr2", { placeholder: "예: 항만로 1" })) +
      field("담당자", input("branch", "manager", {})) + field("연락처", input("branch", "phone", { placeholder: "예: 052-000-0000" })) +
      field("전화2", input("branch", "phone2", { placeholder: "예: 010-0000-0000" })) + field("수용 대수", input("branch", "capacity", { placeholder: "예: 80", inputmode: "numeric" })) +
      field("메모", '<textarea class="' + INP + ' h-20 resize-none py-2" name="memo" data-input="fd" data-form="branch">' + esc(F.memo) + "</textarea>", "sm:col-span-2") +
      "</div>" + formFooter(b ? "저장" : "지점 등록", "back") + "</form></div>"
    )
  }

  // ───────────────────────── 환경설정 ─────────────────────────
  function pSettings() {
    return (
      '<div class="space-y-6">' + pageHead({ crumbs: ["환경설정"], title: "환경설정", desc: "회사 정보, 알림, 엑셀 양식 등 시스템 기본값을 설정합니다." }) +
      '<div class="' + CARD + ' flex flex-col items-center gap-3 px-5 py-10 text-center"><div class="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">' + ic("lock", "h-5 w-5") +
      '</div><h3 class="text-sm font-semibold text-foreground">체험판에서는 이 화면을 제공하지 않습니다</h3><p class="text-xs text-muted-foreground">실제 시스템에서는 회사 정보, 계약서 양식, 알림 기준일 등을 이곳에서 바꿉니다.</p>' +
      btn("outline", ic("chevron-left", "mr-1 h-4 w-4") + "대시보드로", 'data-act="go" data-to="/"') + "</div></div>"
    )
  }

  // ───────────────────────── 모달 ─────────────────────────
  function modalWrap(title, body) {
    return (
      '<div id="modal-bg" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"><div class="demo-modal w-full max-w-lg rounded-xl border border-border bg-card text-card-foreground shadow-lg">' +
      '<div class="flex items-center justify-between border-b border-border px-5 py-3"><h3 class="text-sm font-semibold tracking-tight">' + esc(title) + "</h3>" + btn("iconGhostSm", ic("x", "size-4"), 'aria-label="닫기" data-act="modal-close"') + "</div>" +
      body + "</div></div>"
    )
  }
  function mInfo(label, value, tone) {
    return '<div class="rounded-lg border border-border bg-muted/30 px-3 py-2"><p class="text-[11px] text-muted-foreground">' + esc(label) + '</p><p class="font-semibold tabular-nums ' + (tone || "text-foreground") + '">' + esc(value) + "</p></div>"
  }
  function modal() {
    var m = S.modal
    if (m.type === "sale") {
      var s = S.sales.find(function (x) { return x.id === m.id })
      if (!s) return ""
      var v = vehicle(s.vehicleId) || { model: "-", plate: "" }
      return modalWrap(
        "판매 계약 수정 · 입금 처리",
        '<form data-submit="sale-pay" class="space-y-4 p-5"><p class="text-sm text-muted-foreground">' + esc(v.model + " · " + v.plate + " · " + buyer(s.buyerId).name) + "</p>" +
          '<div class="grid grid-cols-3 gap-2 text-sm">' + mInfo("판매가", man(s.price)) + mInfo("수금", man(s.paid), "text-success") + mInfo("미수금", man(due(s)), due(s) ? "text-danger" : "text-success") + "</div>" +
          '<div class="grid gap-4 sm:grid-cols-2">' +
          field("입금 처리 금액 (원)", '<input class="' + INP + '" name="amount" inputmode="numeric" placeholder="예: 1,000,000">') +
          field("입금 예정일", '<input class="' + INP + '" type="date" name="dueDate" value="' + esc(s.dueDate) + '">') +
          field("차량 전달날짜", '<input class="' + INP + '" type="date" name="deliveryDate" value="' + esc(s.deliveryDate) + '">') +
          field("면장날짜", '<input class="' + INP + '" type="date" name="customsDate" value="' + esc(s.customsDate) + '">') +
          "</div>" +
          '<div class="flex items-center justify-between gap-2 border-t border-border pt-4">' + btn("outline", ic("circle-check", "mr-1 h-4 w-4") + "잔액 전액 입금(완불)", 'data-act="sale-full" data-id="' + s.id + '"' + (due(s) ? "" : ' disabled=""')) +
          sbtn("primary", ic("check", "mr-1 h-4 w-4") + "저장", 'type="submit"') + "</div></form>"
      )
    }
    if (m.type === "yard-new") {
      var vv = vehicle(m.id)
      if (!vv) return ""
      return modalWrap(
        "판매 정보 입력 · " + vv.model,
        '<form data-submit="yard-sale" class="space-y-4 p-5"><p class="text-sm text-muted-foreground">' + esc(vv.plate + " · " + vv.id + " · 실매입 " + man(vv.price)) + '</p><div class="grid gap-4 sm:grid-cols-2">' +
          field("바이어 *", '<select class="' + INP + '" name="buyerId"><option value="">바이어 선택</option>' + S.buyers.map(function (b) { return '<option value="' + b.id + '"' + (vv.yardBuyer === b.id ? " selected" : "") + ">" + esc(b.name + " (" + b.country + ")") + "</option>" }).join("") + "</select>") +
          field("판매가 (원) *", '<input class="' + INP + '" name="price" inputmode="numeric" placeholder="예: 5,500,000">') +
          field("계약날짜", '<input class="' + INP + '" type="date" name="contractDate" value="' + TODAY + '">') +
          field("계약금 (원)", '<input class="' + INP + '" name="deposit" inputmode="numeric">') +
          field("입금 예정일", '<input class="' + INP + '" type="date" name="dueDate" value="' + addDays(TODAY, 5) + '">') +
          field("인도(전달)날짜", '<input class="' + INP + '" type="date" name="deliveryDate">') +
          '</div><div class="flex justify-end border-t border-border pt-4">' + sbtn("primary", ic("check", "mr-1 h-4 w-4") + "판매 정보 저장", 'type="submit"') + "</div></form>"
      )
    }
    if (m.type === "settle") {
      var x = settleRow(S.sales.find(function (y) { return y.id === m.id }))
      var tc = transferCost(x.s.vehicleId)
      return modalWrap(
        "차량별 정산 · " + x.v.model + " " + x.v.plate,
        '<form data-submit="settle-save" class="space-y-4 p-5"><div class="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">' +
          mInfo("매입가", man(x.v.price)) + mInfo("이동 비용", man(tc)) + mInfo("총원가", man(x.cost)) + mInfo("판매가", man(x.s.price)) + mInfo("예상 손익", signedMan(x.profit), x.profit >= 0 ? "text-success" : "text-danger") + mInfo("미수금", man(x.due), x.due ? "text-danger" : "text-success") +
          "</div>" +
          field("정산 상태", '<select class="' + INP + '" name="settle">' + ["정산 전", "비용 확인 중", "입금 대기", "일부 정산", "정산 완료", "거래 종결"].map(function (o) { return '<option value="' + o + '"' + (o === x.s.settle ? " selected" : "") + ">" + o + "</option>" }).join("") + "</select>") +
          '<p class="text-xs text-muted-foreground">정산 완료·거래 종결로 바꾸면 차량 상태가 ‘정산 완료’가 되어 거래 완료 차량으로 옮겨집니다. 미수금이 남아 있으면 정산 완료할 수 없습니다.</p>' +
          '<div class="flex justify-end border-t border-border pt-4">' + sbtn("primary", ic("check", "mr-1 h-4 w-4") + "저장", 'type="submit"') + "</div></form>"
      )
    }
    return ""
  }

  // ───────────────────────── 라우터 ─────────────────────────
  function render(r) {
    var p = r.path
    var m
    var c
    if (p === "/") c = pDashboard()
    else if (p === "/vehicles") c = pVehicles(r)
    else if (p === "/vehicles/register") c = pVehicleRegister()
    else if ((m = p.match(/^\/vehicles\/([^/]+)$/))) c = pVehicleDetail(decodeURIComponent(m[1]))
    else if (p === "/transfers/register") c = pTransferRegister()
    else if (p === "/transfers") c = pTransfers()
    else if (p === "/sales") c = pSales()
    else if (p === "/sales/register") c = pSaleRegister()
    else if (p === "/sales/incheon-yard") c = pYard()
    else if (p === "/buyers") c = pBuyers(r)
    else if (p === "/buyers/register") c = pBuyerRegister()
    else if (p === "/settlement") c = pSettlement()
    else if (p === "/staff") c = pStaff()
    else if (p === "/roles") c = pRoles()
    else if (p === "/branches") c = pBranches()
    else if (p === "/branches/register") c = pBranchForm(null)
    else if ((m = p.match(/^\/branches\/([^/]+)\/edit$/))) c = pBranchForm(m[1])
    else if ((m = p.match(/^\/branches\/([^/]+)$/))) c = pBranchDetail(m[1])
    else if (p === "/settings") c = pSettings()
    else c = notFound("요청한 화면이 없습니다.", "/")
    return shell(r, c)
  }
  // 다시 그릴 때 입력 중이던 칸의 포커스·커서 유지
  function rerender() {
    var a = document.activeElement
    var id = a && a.id
    var pos = null
    try { pos = a.selectionStart } catch (e) {}
    Demo.update()
    if (id) {
      var el = document.getElementById(id)
      if (el) {
        el.focus()
        try { if (pos != null) el.setSelectionRange(pos, pos) } catch (e) {}
      }
    }
  }

  // ───────────────────────── 동작 ─────────────────────────
  Demo.on("go", function (d) { Demo.go(d.to) })
  Demo.on("back", function () { history.length > 1 ? history.back() : Demo.go("/") })
  Demo.on("nav-toggle", function (d, el) {
    var open = el.querySelector(".rotate-180") != null
    S.open[d.key] = !open
    Demo.update()
  })
  Demo.on("drawer", function () { S.drawer = true; Demo.update() })
  Demo.on("logout", function () { Demo.toast("체험판에서는 로그아웃하지 않습니다.") })
  Demo.on("bell", function () {
    var n = S.sales.filter(function (s) { return due(s) && s.dueDate && s.dueDate <= TODAY }).length
    Demo.toast(n ? "입금 예정일이 지난 미수 " + n + "건이 있습니다." : "새 알림이 없습니다.")
  })
  Demo.on("gsearch", function (v) {
    S.f.vehicles.q = v.trim()
    S.f.vehicles.status = "전체"; S.f.vehicles.maker = "전체"; S.f.vehicles.branch = "전체"; S.f.vehicles.page = 1
    if (Demo.route().path === "/vehicles" && !Demo.route().query.group) Demo.update()
    else Demo.go("/vehicles")
  })
  Demo.on("refresh", function () { Demo.update(); Demo.toast("최신 데이터로 새로고침했습니다.") })
  Demo.on("upload", function () { Demo.toast("체험판에서는 파일을 올리지 않습니다.") })
  Demo.on("excel", function (d) { Demo.toast("체험판에서는 엑셀 파일을 내려받지 않습니다.") })
  Demo.on("contract-xls", function (d) { Demo.toast("‘" + d.name + "’ 계약서(엑셀)는 체험판에서 내려받지 않습니다.") })
  Demo.on("contract-print", function (d) { Demo.toast("‘" + d.name + "’ 계약서 인쇄/PDF는 체험판에서 제공하지 않습니다.") })
  Demo.on("month-excel", function () {
    var f = S.f.vehicles
    var n = S.vehicles.filter(function (v) { return (f.basis === "dereg" ? v.dereg : v.purchaseDate).slice(0, 7) === f.month }).length
    Demo.toast(f.month + " " + (f.basis === "dereg" ? "말소일" : "매입일") + " 기준 대장 " + n + "건 · 체험판에서는 파일을 내려받지 않습니다.")
  })
  Demo.on("settle-month", function () { Demo.toast(S.f.settle.month + " 정산 완료 차량 · 체험판에서는 파일을 내려받지 않습니다.") })

  // 목록 필터·정렬·페이지
  Demo.on("flt", function (v, el) {
    S.f[el.dataset.list][el.dataset.k] = v
    S.f[el.dataset.list].page = 1
    rerender()
  })
  Demo.on("flt-raw", function (v, el) {
    S.f[el.dataset.list][el.dataset.k] = v
    if (el.tagName === "SELECT") Demo.update()
  })
  Demo.on("sort", function (d) {
    var s = S.sort[d.list]
    S.sort[d.list] = s && s.key === d.key ? { key: d.key, dir: -s.dir } : { key: d.key, dir: 1 }
    Demo.update()
  })
  Demo.on("page", function (d) { S.f[d.list].page = Number(d.p); Demo.update() })

  // 폼 입력 값 보관
  Demo.on("fd", function (v, el) {
    S.forms[el.dataset.form][el.name] = el.type === "checkbox" ? el.checked : v
    if (el.dataset.form === "tf" && el.name === "vin8") vinLookup("tf")
    if (el.dataset.form === "sale" && el.name === "vin8") vinLookup("sale")
  })
  function vinLookup(form) {
    var F = S.forms[form]
    var key = F.vin8.trim().toUpperCase()
    if (key.length < 8) return
    var v = S.vehicles.find(function (x) { return x.id === key.slice(-8) || x.vin === key })
    if (!v) { Demo.toast("일치하는 차량이 없습니다."); return }
    if (form === "sale" && (saleOf(v.id) || !isHolding(v))) { Demo.toast("이미 판매 계약이 등록된 차량입니다."); return }
    if (form === "tf" && (v.status === "정산 완료" || v.status === "지점 이동")) { Demo.toast("이동할 수 없는 상태의 차량입니다 (" + v.status + ")."); return }
    F.vehicleId = v.id
    if (form === "tf" && !F.from) F.from = branchName(v.branchId)
    if (form === "sale" && !F.shipBranchId) F.shipBranchId = v.branchId
    rerender()
    Demo.toast(v.model + " · " + v.plate + " 차량을 선택했습니다.")
  }
  Demo.on("tf-veh", function (v) {
    var F = S.forms.tf
    F.vehicleId = v
    var car = vehicle(v)
    if (car) F.from = branchName(car.branchId)
    Demo.update()
  })
  Demo.on("tf-buyer", function (v) {
    var F = S.forms.tf
    F.buyerId = v
    if (v) F.to = buyer(v).name
    Demo.update()
  })
  Demo.on("sale-veh", function (v) {
    var F = S.forms.sale
    F.vehicleId = v
    var car = vehicle(v)
    if (car) F.shipBranchId = car.branchId
    Demo.update()
  })
  Demo.on("sale-buyer", function (v) {
    var F = S.forms.sale
    F.buyerId = v
    F.country = v ? buyer(v).country : ""
    Demo.update()
  })

  // 차량 등록
  Demo.on("veh-prev", function () {
    var F = vehForm()
    if (F.step === 0) { history.length > 1 ? history.back() : Demo.go("/vehicles"); return }
    F.step--
    Demo.update()
  })
  Demo.on("veh-next", function () {
    var F = vehForm()
    if (F.step === 0) {
      if (!F.model.trim() || !F.plate.trim()) return Demo.toast("모델명과 차량번호를 입력하세요.")
      if (S.vehicles.some(function (v) { return v.plate.replace(/\s/g, "") === F.plate.replace(/\s/g, "") })) return Demo.toast("이미 등록된 차량번호입니다.")
    }
    if (F.step === 1 && (!F.purchaseDate || !toNum(F.price))) return Demo.toast("매입일과 실매입가를 입력하세요.")
    if (F.step === 2 && !F.branchId) return Demo.toast("입고 지점을 선택하세요.")
    if (F.step < 3) { F.step++; Demo.update(); window.scrollTo(0, 0); return }
    var vin = (F.vin || "").trim().toUpperCase() || fakeVin(F.maker)
    var id = vin.slice(-8)
    if (vehicle(id)) { vin = vin.slice(0, 11) + String(ri(100000, 999999)); id = vin.slice(-8) }
    var price = toNum(F.price)
    S.vehicles.unshift({
      id: id, vin: vin, plate: F.plate.replace(/\s/g, ""), maker: F.maker || "기타", model: F.model.trim(), grade: F.grade || "-", year: toNum(F.year) || new Date().getFullYear(), km: toNum(F.km),
      color: F.color || "-", fuel: F.fuel, trans: F.trans, accident: F.accident, dereg: F.dereg || F.purchaseDate, purchaseDate: F.purchaseDate, price: price, reportPrice: toNum(F.reportPrice) || price,
      owner: F.owner, bizType: F.bizType, branchId: F.branchId, location: F.location, status: "차량 등록", note: F.note, yard: !!F.yard || F.branchId === "b4", yardBuyer: "", createdAt: TODAY,
    })
    log("car", F.model.trim() + " " + F.plate.replace(/\s/g, "") + " 차량 등록 (" + branchName(F.branchId) + ")")
    S.forms.veh = null
    S.f.vehicles = Object.assign(S.f.vehicles, { q: "", status: "전체", maker: "전체", branch: "전체", page: 1 })
    S.sort.vehicles = null
    Demo.go("/vehicles")
    Demo.toast("차량을 등록했습니다 · 고유번호 " + id)
  })
  Demo.on("veh-del", function (d) {
    var v = vehicle(d.id)
    if (!v) return
    S.vehicles = S.vehicles.filter(function (x) { return x.id !== d.id })
    S.sales = S.sales.filter(function (s) { return s.vehicleId !== d.id })
    S.transfers = S.transfers.filter(function (t) { return t.vehicleId !== d.id })
    log("car", v.model + " " + v.plate + " 차량 삭제")
    Demo.update()
    Demo.toast(v.plate + " 차량을 삭제했습니다.")
  })
  Demo.on("veh-move", function (d) {
    S.forms.tf = null
    var F = tfForm()
    var v = vehicle(d.id)
    F.vehicleId = v.id
    F.from = branchName(v.branchId)
    Demo.go("/transfers/register")
  })
  Demo.on("veh-sell", function (d) {
    S.forms.sale = null
    var F = saleForm()
    var v = vehicle(d.id)
    if (!isHolding(v)) return Demo.toast("판매 계약을 걸 수 없는 상태입니다.")
    F.vehicleId = v.id
    F.shipBranchId = v.branchId
    Demo.go("/sales/register")
  })

  // 지점 이동
  Demo.on("tf-save", function () {
    var F = tfForm()
    var v = vehicle(F.vehicleId)
    if (!v) return Demo.toast("이동할 차량을 선택하세요.")
    if (!F.from.trim() || !F.to.trim()) return Demo.toast("출발지와 도착지를 입력하세요.")
    if (F.from.trim() === F.to.trim()) return Demo.toast("출발지와 도착지가 같습니다.")
    var t = { id: uid("t"), vehicleId: v.id, from: F.from.trim(), to: F.to.trim(), date: F.date || TODAY, cost: toNum(F.cost), eta: F.eta, carrier: F.carrier.trim(), driver: F.driver.trim(), driverPhone: F.driverPhone.trim(), status: "이동 중" }
    S.transfers.unshift(t)
    if (v.status === "차량 등록") v.status = "지점 이동"
    if (F.yard) v.yard = true
    if (F.buyerId) { v.yard = true; v.yardBuyer = F.buyerId }
    log("truck", v.model + " " + t.from + "→" + t.to + " 이동 등록")
    var goYard = !!F.buyerId
    S.forms.tf = null
    S.f.transfers = Object.assign(S.f.transfers, { q: "", status: "전체", from: "전체", page: 1 })
    Demo.go(goYard ? "/sales/incheon-yard" : "/transfers")
    Demo.toast(goYard ? "이동을 등록하고 바이어 창고 재고로 올렸습니다." : "이동을 등록했습니다 · 도착하면 ‘도착’을 눌러 완료하세요.")
  })
  Demo.on("tf-done", function (d) {
    var t = S.transfers.find(function (x) { return x.id === d.id })
    var v = vehicle(t.vehicleId)
    t.status = "이동 완료"
    var dest = S.branches.find(function (b) { return b.name === t.to })
    if (v) {
      if (v.status === "지점 이동") v.status = "차량 등록"
      if (dest) {
        v.branchId = dest.id
        v.location = pick(LOCS[dest.id] || ["입고 대기"])
        if (dest.id === "b4") v.yard = true
      }
    }
    log("truck", (v ? v.model : "차량") + " " + t.from + "→" + t.to + " 이동 완료")
    Demo.update()
    Demo.toast(dest ? "이동 완료 · 현재 지점이 " + dest.name + "(으)로 바뀌었습니다." : "이동 완료 처리했습니다.")
  })
  Demo.on("tf-cancel", function (d) {
    var t = S.transfers.find(function (x) { return x.id === d.id })
    var v = vehicle(t.vehicleId)
    t.status = "이동 취소"
    if (v && v.status === "지점 이동") v.status = "차량 등록"
    Demo.update()
    Demo.toast("이동을 취소했습니다.")
  })
  Demo.on("tf-del", function (d) {
    var t = S.transfers.find(function (x) { return x.id === d.id })
    var v = vehicle(t.vehicleId)
    if (t.status === "이동 중" && v && v.status === "지점 이동") v.status = "차량 등록"
    S.transfers = S.transfers.filter(function (x) { return x.id !== d.id })
    Demo.update()
    Demo.toast("이동 내역을 삭제했습니다.")
  })

  // 판매
  function createSale(v, b, o) {
    var price = o.price
    var paid = Math.min(price, (o.deposit || 0) + (o.paid || 0))
    var s = {
      id: uid("s"), vehicleId: v.id, buyerId: b.id, country: o.country || b.country, contractDate: o.contractDate || TODAY, price: price, deposit: o.deposit || 0, paid: paid,
      dueDate: paid >= price ? "" : o.dueDate || "", currency: o.currency || "KRW", rate: Number(o.rate) || 1, shipBranchId: o.shipBranchId || v.branchId, deliveryDate: o.deliveryDate || "",
      customsDate: o.customsDate || "", shipType: "수출 선적", settle: "정산 전",
    }
    S.sales.unshift(s)
    v.status = "판매 완료"
    if (!b.excludeYard) { v.yard = true; v.yardBuyer = b.id }
    log("tag", v.model + " " + b.name + " 판매 계약 (" + man(price) + ")")
    return s
  }
  Demo.on("sale-save", function () {
    var F = saleForm()
    var v = vehicle(F.vehicleId)
    var b = S.buyers.find(function (x) { return x.id === F.buyerId })
    if (!v) return Demo.toast("차량을 선택하세요.")
    if (!b) return Demo.toast("바이어를 선택하세요.")
    var price = toNum(F.price)
    if (!price) return Demo.toast("판매가를 입력하세요.")
    var s = createSale(v, b, { price: price, deposit: toNum(F.deposit), paid: toNum(F.paid), country: F.country, contractDate: F.contractDate, dueDate: F.dueDate, currency: F.currency, rate: F.rate, shipBranchId: F.shipBranchId, deliveryDate: F.deliveryDate, customsDate: F.customsDate })
    S.forms.sale = null
    S.f.sales = Object.assign(S.f.sales, { q: "", country: "전체", ship: "전체", paid: "전체", page: 1 })
    S.sort.sales = null
    Demo.go("/sales")
    Demo.toast("판매 계약을 등록했습니다 · 미수금 " + man(due(s)))
  })
  Demo.on("sale-edit", function (d) { S.modal = { type: "sale", id: d.id }; Demo.update() })
  Demo.on("modal-close", function () { S.modal = null; Demo.update() })
  Demo.on("sale-pay", function (vals) {
    var s = S.sales.find(function (x) { return x.id === S.modal.id })
    var amt = toNum(vals.amount)
    if (amt < 0) return Demo.toast("금액을 확인하세요.")
    var before = due(s)
    s.paid = Math.min(s.price, s.paid + amt)
    s.dueDate = vals.dueDate
    s.deliveryDate = vals.deliveryDate
    s.customsDate = vals.customsDate
    if (!due(s)) s.dueDate = ""
    var v = vehicle(s.vehicleId)
    if (amt) log("wallet", (v ? v.model + " " : "") + buyer(s.buyerId).name + " 입금 " + man(Math.min(amt, before)))
    S.modal = null
    Demo.update()
    Demo.toast(amt ? "입금 " + man(Math.min(amt, before)) + " 처리 · 남은 미수금 " + man(due(s)) : "판매 정보를 저장했습니다.")
  })
  Demo.on("sale-full", function (d) {
    var s = S.sales.find(function (x) { return x.id === d.id })
    var amt = due(s)
    s.paid = s.price
    s.dueDate = ""
    var v = vehicle(s.vehicleId)
    log("wallet", (v ? v.model + " " : "") + buyer(s.buyerId).name + " 완불 (" + man(amt) + ")")
    S.modal = null
    Demo.update()
    Demo.toast("완불 처리했습니다 · 입금 " + man(amt))
  })
  Demo.on("sale-del", function (d) {
    var s = S.sales.find(function (x) { return x.id === d.id })
    var v = vehicle(s.vehicleId)
    S.sales = S.sales.filter(function (x) { return x.id !== d.id })
    if (v) { v.status = "차량 등록"; v.yardBuyer = "" }
    Demo.update()
    Demo.toast("판매 계약을 삭제했습니다.")
  })
  Demo.on("buyer-open", function (d) {
    S.f.sales = Object.assign(S.f.sales, { q: d.name, country: "전체", ship: "전체", paid: "전체", page: 1 })
    Demo.go("/sales")
  })

  // 인천 야드
  function yardEdit(id) {
    var s = saleOf(id)
    S.modal = s ? { type: "sale", id: s.id } : { type: "yard-new", id: id }
    Demo.update()
  }
  Demo.on("yard-edit", function (d) { yardEdit(d.id) })
  document.addEventListener("dblclick", function (e) {
    var tr = e.target.closest("tr[data-yard]")
    if (tr) yardEdit(tr.getAttribute("data-yard"))
  })
  Demo.on("yard-del", function (d) {
    var v = vehicle(d.id)
    v.yard = false
    Demo.update()
    Demo.toast(v.model + " 차량을 인천 야드 목록에서 뺐습니다.")
  })
  Demo.on("yard-sale", function (vals) {
    var v = vehicle(S.modal.id)
    var b = S.buyers.find(function (x) { return x.id === vals.buyerId })
    var price = toNum(vals.price)
    if (!b) return Demo.toast("바이어를 선택하세요.")
    if (!price) return Demo.toast("판매가를 입력하세요.")
    var s = createSale(v, b, { price: price, deposit: toNum(vals.deposit), contractDate: vals.contractDate, dueDate: vals.dueDate, deliveryDate: vals.deliveryDate })
    v.yard = true
    S.modal = null
    Demo.update()
    Demo.toast("판매 정보를 저장했습니다 · 미수금 " + man(due(s)))
  })

  // 창고(바이어)
  Demo.on("buyer-save", function () {
    var F = buyerForm()
    if (!F.name.trim()) return Demo.toast("창고명(업체명)을 입력하세요.")
    S.buyers.push({ id: uid("by"), name: F.name.trim(), contact: F.contact.trim() || "-", country: F.country.trim() || "-", phone: F.phone.trim(), whatsapp: F.whatsapp.trim(), email: F.email.trim(), grade: F.grade, payStatus: F.payStatus, staff: F.staff.trim() || "본사 관리자", excludeYard: !!F.excludeYard, createdAt: TODAY })
    S.forms.buyer = null
    Demo.go("/buyers")
    Demo.toast("창고(바이어) ‘" + F.name.trim() + "’을(를) 등록했습니다.")
  })

  // 정산
  Demo.on("settle-edit", function (d) { S.modal = { type: "settle", id: d.id }; Demo.update() })
  Demo.on("settle-save", function (vals) {
    var s = S.sales.find(function (x) { return x.id === S.modal.id })
    var v = vehicle(s.vehicleId)
    var closing = vals.settle === "정산 완료" || vals.settle === "거래 종결"
    if (closing && due(s)) return Demo.toast("미수금 " + man(due(s)) + "이 남아 있어 정산 완료할 수 없습니다.")
    s.settle = vals.settle
    if (v) {
      if (closing) { v.status = "정산 완료"; if (!s.customsDate) s.customsDate = TODAY }
      else if (v.status === "정산 완료") v.status = "판매 완료"
    }
    if (closing) log("circle-check", (v ? v.model + " " + v.plate : "차량") + " 정산 완료")
    S.modal = null
    Demo.update()
    Demo.toast("정산 상태를 ‘" + vals.settle + "’(으)로 저장했습니다.")
  })

  // 직원·권한
  Demo.on("staff-tab", function (d) {
    var F = staffForm()
    var i = F.tabs.indexOf(d.tab)
    i >= 0 ? F.tabs.splice(i, 1) : F.tabs.push(d.tab)
    Demo.update()
  })
  Demo.on("staff-save", function () {
    var F = staffForm()
    if (!/^[a-zA-Z0-9._-]{3,}$/.test(F.uid)) return Demo.toast("아이디는 영문·숫자 3자 이상으로 입력하세요.")
    if (S.staff.some(function (u) { return u.uid === F.uid })) return Demo.toast("이미 있는 아이디입니다.")
    if ((F.pw || "").length < 4) return Demo.toast("비밀번호는 4자 이상이어야 합니다.")
    if (!F.name.trim()) return Demo.toast("직원 이름을 입력하세요.")
    if (F.role === "branch" && !F.branchId) return Demo.toast("소속 지점을 선택하세요.")
    S.staff.push({ uid: F.uid, name: F.name.trim(), role: F.role, branchId: F.role === "admin" ? "" : F.branchId, tabs: F.tabs.slice(), createdAt: TODAY })
    S.forms.staff = null
    Demo.update()
    Demo.toast("계정 ‘" + F.uid + "’을(를) 만들었습니다.")
  })
  Demo.on("staff-del", function (d) {
    S.staff = S.staff.filter(function (u) { return u.uid !== d.id })
    Demo.update()
    Demo.toast("계정을 삭제했습니다.")
  })
  Demo.on("role-tab", function (d) {
    var set = S.roles[d.id]
    var i = set.indexOf(d.tab)
    i >= 0 ? set.splice(i, 1) : set.push(d.tab)
    Demo.update()
  })
  Demo.on("role-save", function (d) {
    Demo.toast(branchName(d.id) + " 접근 탭 " + S.roles[d.id].length + "개를 저장했습니다.")
  })

  // 지점
  Demo.on("br-tab", function (d) { S.f.branchTab = d.tab; Demo.update() })
  Demo.on("branch-save", function (vals, el) {
    var F = S.forms.branch
    var id = el.getAttribute("data-id")
    if (!F.name.trim()) return Demo.toast("지점명을 입력하세요.")
    if (S.branches.some(function (b) { return b.name === F.name.trim() && b.id !== id })) return Demo.toast("같은 이름의 지점이 있습니다.")
    var data = { name: F.name.trim(), code: F.code.trim(), type: F.type, status: F.status, addr: F.addr.trim(), addr2: F.addr2.trim(), manager: F.manager.trim(), phone: F.phone.trim(), phone2: F.phone2.trim(), capacity: toNum(F.capacity), memo: F.memo.trim() }
    if (id) {
      var b = branch(id)
      var oldName = b.name
      Object.assign(b, data)
      if (!b.code) b.code = "BX" + pad(S.branches.indexOf(b) + 1)
      S.transfers.forEach(function (t) { if (t.from === oldName) t.from = b.name; if (t.to === oldName) t.to = b.name })
      S.forms.branch = null
      Demo.go("/branches/" + id)
      Demo.toast("지점 정보를 저장했습니다.")
    } else {
      var nb = Object.assign({ id: uid("b") }, data)
      if (!nb.code) nb.code = "BX" + pad(S.branches.length + 1)
      S.branches.push(nb)
      S.roles[nb.id] = ["차량 관리"]
      S.forms.branch = null
      Demo.go("/branches")
      Demo.toast("지점 ‘" + nb.name + "’을(를) 등록했습니다.")
    }
  })
  Demo.on("br-del", function (d) {
    var b = branch(d.id)
    var n = S.vehicles.filter(function (v) { return v.branchId === b.id }).length
    if (n) return Demo.toast("보관 중인 차량 " + n + "대가 있어 삭제할 수 없습니다.")
    S.branches = S.branches.filter(function (x) { return x.id !== b.id })
    Demo.go("/branches")
    Demo.toast("지점을 삭제했습니다.")
  })

  // 배경 클릭으로 모달·서랍 닫기, 화면 이동 시 서랍 닫기
  document.addEventListener("click", function (e) {
    if (e.target.id === "modal-bg") { S.modal = null; Demo.update() }
    if (e.target.id === "drawer-bg") { S.drawer = false; Demo.update() }
  })
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && (S.modal || S.drawer)) { S.modal = null; S.drawer = false; Demo.update() }
  })
  window.addEventListener("hashchange", function () {
    S.drawer = false
    S.modal = null
    syncVehicleFilter()
  })
  // 대시보드 등에서 상태를 지정해 들어오면 목록 필터를 맞춘다
  function syncVehicleFilter() {
    var r = Demo.route()
    if (r.path !== "/vehicles") return
    var key = (r.query.group || "") + "|" + (r.query.status || "")
    if (key !== S._vkey) {
      S._vkey = key
      S.f.vehicles.status = r.query.status || "전체"
      S.f.vehicles.page = 1
    }
  }
  syncVehicleFilter()

  Demo.mount(render)
  Demo.banner()
})()
