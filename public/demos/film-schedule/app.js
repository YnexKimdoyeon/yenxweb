/* 루미 필름(가상) 촬영 관리 시스템 체험판, 아이콘은 lucide(ISC) */
;(function () {
var ICONS = {
"bell": [
"lucide lucide-bell",
"<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"></path><path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"></path>"
],
"calendar-check": [
"lucide lucide-calendar-check",
"<path d=\"M8 2v4\"></path><path d=\"M16 2v4\"></path><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect><path d=\"M3 10h18\"></path><path d=\"m9 16 2 2 4-4\"></path>"
],
"calendar-days": [
"lucide lucide-calendar-days",
"<path d=\"M8 2v4\"></path><path d=\"M16 2v4\"></path><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect><path d=\"M3 10h18\"></path><path d=\"M8 14h.01\"></path><path d=\"M12 14h.01\"></path><path d=\"M16 14h.01\"></path><path d=\"M8 18h.01\"></path><path d=\"M12 18h.01\"></path><path d=\"M16 18h.01\"></path>"
],
"camera": [
"lucide lucide-camera",
"<path d=\"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z\"></path><circle cx=\"12\" cy=\"13\" r=\"3\"></circle>"
],
"car": [
"lucide lucide-car",
"<path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2\"></path><circle cx=\"7\" cy=\"17\" r=\"2\"></circle><path d=\"M9 17h6\"></path><circle cx=\"17\" cy=\"17\" r=\"2\"></circle>"
],
"check": [
"lucide lucide-check",
"<path d=\"M20 6 9 17l-5-5\"></path>"
],
"chevron-down": [
"lucide lucide-chevron-down",
"<path d=\"m6 9 6 6 6-6\"></path>"
],
"chevron-left": [
"lucide lucide-chevron-left",
"<path d=\"m15 18-6-6 6-6\"></path>"
],
"chevron-right": [
"lucide lucide-chevron-right",
"<path d=\"m9 18 6-6-6-6\"></path>"
],
"circle-check": [
"lucide lucide-circle-check",
"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"m9 12 2 2 4-4\"></path>"
],
"clapperboard": [
"lucide lucide-clapperboard",
"<path d=\"m12.296 3.464 3.02 3.956\"></path><path d=\"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z\"></path><path d=\"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><path d=\"m6.18 5.276 3.1 3.899\"></path>"
],
"clipboard-list": [
"lucide lucide-clipboard-list",
"<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"></rect><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><path d=\"M12 11h4\"></path><path d=\"M12 16h4\"></path><path d=\"M8 11h.01\"></path><path d=\"M8 16h.01\"></path>"
],
"coins": [
"lucide lucide-coins",
"<path d=\"M13.744 17.736a6 6 0 1 1-7.48-7.48\"></path><path d=\"M15 6h1v4\"></path><path d=\"m6.134 14.768.866-.5 2 3.464\"></path><circle cx=\"16\" cy=\"8\" r=\"6\"></circle>"
],
"download": [
"lucide lucide-download",
"<path d=\"M12 15V3\"></path><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><path d=\"m7 10 5 5 5-5\"></path>"
],
"file-clock": [
"lucide lucide-file-clock",
"<path d=\"M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85\"></path><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"></path><path d=\"M8 14v2.2l1.6 1\"></path><circle cx=\"8\" cy=\"16\" r=\"6\"></circle>"
],
"file-pen-line": [
"lucide lucide-file-pen-line",
"<path d=\"M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z\"></path><path d=\"M14.487 7.858A1 1 0 0 1 14 7V2\"></path><path d=\"M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516\"></path><path d=\"M8 18h1\"></path>"
],
"file-text": [
"lucide lucide-file-text",
"<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"></path><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"></path><path d=\"M10 9H8\"></path><path d=\"M16 13H8\"></path><path d=\"M16 17H8\"></path>"
],
"flag": [
"lucide lucide-flag",
"<path d=\"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528\"></path>"
],
"gift": [
"lucide lucide-gift",
"<path d=\"M12 7v14\"></path><path d=\"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8\"></path><path d=\"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5\"></path><rect x=\"3\" y=\"7\" width=\"18\" height=\"4\" rx=\"1\"></rect>"
],
"hand-coins": [
"lucide lucide-hand-coins",
"<path d=\"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17\"></path><path d=\"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9\"></path><path d=\"m2 16 6 6\"></path><circle cx=\"16\" cy=\"9\" r=\"2.9\"></circle><circle cx=\"6\" cy=\"5\" r=\"3\"></circle>"
],
"key-round": [
"lucide lucide-key-round",
"<path d=\"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z\"></path><circle cx=\"16.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"></circle>"
],
"layout-dashboard": [
"lucide lucide-layout-dashboard",
"<rect width=\"7\" height=\"9\" x=\"3\" y=\"3\" rx=\"1\"></rect><rect width=\"7\" height=\"5\" x=\"14\" y=\"3\" rx=\"1\"></rect><rect width=\"7\" height=\"9\" x=\"14\" y=\"12\" rx=\"1\"></rect><rect width=\"7\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"></rect>"
],
"link-2": [
"lucide lucide-link2 lucide-link-2",
"<path d=\"M9 17H7A5 5 0 0 1 7 7h2\"></path><path d=\"M15 7h2a5 5 0 1 1 0 10h-2\"></path><line x1=\"8\" x2=\"16\" y1=\"12\" y2=\"12\"></line>"
],
"log-out": [
"lucide lucide-log-out",
"<path d=\"m16 17 5-5-5-5\"></path><path d=\"M21 12H9\"></path><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path>"
],
"map-pin": [
"lucide lucide-map-pin",
"<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>"
],
"menu": [
"lucide lucide-menu",
"<path d=\"M4 5h16\"></path><path d=\"M4 12h16\"></path><path d=\"M4 19h16\"></path>"
],
"message-circle": [
"lucide lucide-message-circle",
"<path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\"></path>"
],
"package-open": [
"lucide lucide-package-open",
"<path d=\"M12 22v-9\"></path><path d=\"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z\"></path><path d=\"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13\"></path><path d=\"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z\"></path>"
],
"pencil": [
"lucide lucide-pencil",
"<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"></path><path d=\"m15 5 4 4\"></path>"
],
"plus": [
"lucide lucide-plus",
"<path d=\"M5 12h14\"></path><path d=\"M12 5v14\"></path>"
],
"receipt": [
"lucide lucide-receipt",
"<path d=\"M12 17V7\"></path><path d=\"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8\"></path><path d=\"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z\"></path>"
],
"refresh-cw": [
"lucide lucide-refresh-cw",
"<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\"></path><path d=\"M21 3v5h-5\"></path><path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\"></path><path d=\"M8 16H3v5\"></path>"
],
"save": [
"lucide lucide-save",
"<path d=\"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z\"></path><path d=\"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7\"></path><path d=\"M7 3v4a1 1 0 0 0 1 1h7\"></path>"
],
"scissors": [
"lucide lucide-scissors",
"<circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M8.12 8.12 12 12\"></path><path d=\"M20 4 8.12 15.88\"></path><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><path d=\"M14.8 14.8 20 20\"></path>"
],
"search": [
"lucide lucide-search",
"<path d=\"m21 21-4.34-4.34\"></path><circle cx=\"11\" cy=\"11\" r=\"8\"></circle>"
],
"send": [
"lucide lucide-send",
"<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\"></path><path d=\"m21.854 2.147-10.94 10.939\"></path>"
],
"settings": [
"lucide lucide-settings",
"<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>"
],
"sparkles": [
"lucide lucide-sparkles",
"<path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\"></path><path d=\"M20 2v4\"></path><path d=\"M22 4h-4\"></path><circle cx=\"4\" cy=\"20\" r=\"2\"></circle>"
],
"trash-2": [
"lucide lucide-trash2 lucide-trash-2",
"<path d=\"M10 11v6\"></path><path d=\"M14 11v6\"></path><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\"></path><path d=\"M3 6h18\"></path><path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>"
],
"triangle-alert": [
"lucide lucide-triangle-alert",
"<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"></path><path d=\"M12 9v4\"></path><path d=\"M12 17h.01\"></path>"
],
"trophy": [
"lucide lucide-trophy",
"<path d=\"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2\"></path><path d=\"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2\"></path><path d=\"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3\"></path><path d=\"M4 22h16\"></path><path d=\"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z\"></path><path d=\"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3\"></path>"
],
"upload": [
"lucide lucide-upload",
"<path d=\"M12 3v12\"></path><path d=\"m17 8-5-5-5 5\"></path><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path>"
],
"user-plus": [
"lucide lucide-user-plus",
"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><line x1=\"19\" x2=\"19\" y1=\"8\" y2=\"14\"></line><line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\"></line>"
],
"user-x": [
"lucide lucide-user-x",
"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><line x1=\"17\" x2=\"22\" y1=\"8\" y2=\"13\"></line><line x1=\"22\" x2=\"17\" y1=\"8\" y2=\"13\"></line>"
],
"users": [
"lucide lucide-users",
"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><path d=\"M16 3.128a4 4 0 0 1 0 7.744\"></path><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle>"
],
"video": [
"lucide lucide-video",
"<path d=\"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5\"></path><rect x=\"2\" y=\"6\" width=\"14\" height=\"12\" rx=\"2\"></rect>"
],
"wallet": [
"lucide lucide-wallet",
"<path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"></path><path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\"></path>"
],
"wand-sparkles": [
"lucide lucide-wand-sparkles",
"<path d=\"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72\"></path><path d=\"m14 7 3 3\"></path><path d=\"M5 6v4\"></path><path d=\"M19 14v4\"></path><path d=\"M10 2v2\"></path><path d=\"M7 8H3\"></path><path d=\"M21 16h-4\"></path><path d=\"M11 3H9\"></path>"
]
};
/* 루미 필름(가상) 촬영 관리 시스템 체험판
 * - 모든 데이터는 가상이며 브라우저 메모리에만 있다
 * - 화면 구조와 클래스 이름은 실제 제품 화면을 그대로 따른다
 */
;(function () {
  "use strict"
  var esc = Demo.esc
  var won = Demo.won
  var num = Demo.num

  // ───────────────────────── 아이콘
  function I(name, cls, extra) {
    var ic = ICONS[name]
    if (!ic) return ""
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="' +
      ic[0] + (cls ? " " + cls : "") + '" aria-hidden="true"' + (extra || "") + ">" + ic[1] + "</svg>"
    )
  }
  ICONS.x = ["lucide lucide-x", '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>']

  // ───────────────────────── 클래스 묶음 (원본 화면의 클래스를 그대로 사용)
  var BTN =
    "group/button inline-flex shrink-0 items-center justify-center border bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0"
  var SZ_SM =
    "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5"
  var SZ_MD =
    "rounded-lg text-sm [&_svg:not([class*='size-'])]:size-4 h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
  var SZ_XS =
    "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3"
  var SZ_I7 = "text-sm [&_svg:not([class*='size-'])]:size-4 size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg"
  var SZ_I8 = "rounded-lg text-sm [&_svg:not([class*='size-'])]:size-4 size-8"
  var V_PRI = "border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
  var V_OUT =
    "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50"
  var V_GHO = "border-transparent hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50"
  var V_DES = "border-transparent hover:bg-muted aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 text-destructive hover:text-destructive"
  function B(v, sz, more) {
    return BTN + " " + v + " " + sz + (more ? " " + more : "")
  }
  var BADGE = "inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-4xl border px-2 py-0.5 text-xs font-medium"
  var TONE = {
    primary: "bg-primary/10 text-primary border-primary/30",
    info: "bg-info/10 text-info border-info/30",
    success: "bg-success/10 text-success border-success/30",
    danger: "bg-destructive/10 text-destructive border-destructive/30",
    warn: "bg-warning/15 text-warning-foreground border-warning/30",
    muted: "bg-muted text-muted-foreground border-border",
  }
  function badge(text, tone, more) {
    return '<span class="' + BADGE + " " + TONE[tone] + (more ? " " + more : "") + '">' + text + "</span>"
  }
  function miniBadge(text, tone) {
    return (
      '<span class="inline-flex w-fit items-center justify-center gap-1 whitespace-nowrap rounded-4xl border py-0.5 text-xs font-medium ' +
      TONE[tone] + ' h-4 shrink-0 px-1.5">' + esc(text) + "</span>"
    )
  }
  var INPUT =
    "min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"
  var NSELECT = "h-8 rounded-lg border border-input bg-background px-2 text-sm outline-none focus-visible:border-ring"
  var TRIGGER =
    "flex items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
  var CARD =
    "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl"
  var CARD_HEAD =
    "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)"
  var CHECKBOX =
    "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary"
  var SWITCH =
    "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50"
  var THUMB =
    "pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground"
  var SEG_ON = "rounded-md px-4 py-1.5 text-sm font-medium transition-colors bg-card text-foreground shadow-xs"
  var SEG_OFF = "rounded-md px-4 py-1.5 text-sm font-medium transition-colors text-muted-foreground"
  var TAB =
    "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100"
  var TOGGLE =
    "shrink-0 group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 focus:z-10 focus-visible:z-10 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted data-[state=on]:bg-muted dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border border-input bg-transparent hover:bg-muted h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
  var HIDDEN_INPUT_STYLE = "clip-path: inset(50%); overflow: hidden; white-space: nowrap; border: 0px; padding: 0px; width: 1px; height: 1px; margin: -1px; position: fixed; top: 0px; left: 0px;"

  function checkbox(on, act, data, label) {
    return (
      '<span role="checkbox" tabindex="0" aria-checked="' + (on ? "true" : "false") + '" ' + (on ? "data-checked" : "data-unchecked") +
      ' data-slot="checkbox"' + (label ? ' aria-label="' + esc(label) + '"' : "") + (act ? ' data-act="' + act + '"' : "") + (data || "") +
      ' class="' + CHECKBOX + '">' +
      (on ? '<span data-checked="" data-slot="checkbox-indicator" class="grid place-content-center text-current transition-none [&>svg]:size-3.5">' + I("check") + "</span>" : "") +
      "</span>"
    )
  }
  function sw(on, act, data) {
    var st = on ? "data-checked" : "data-unchecked"
    return (
      '<span role="switch" tabindex="0" aria-checked="' + (on ? "true" : "false") + '" ' + st + ' data-slot="switch" data-size="default" data-act="' + act + '"' + (data || "") +
      ' class="' + SWITCH + '"><span ' + st + ' data-slot="switch-thumb" class="' + THUMB + '"></span></span>'
    )
  }
  // 원본의 셀렉트 버튼 모양을 유지하고, 위에 투명한 기본 select 를 얹는다
  function selectBox(width, label, change, options, value) {
    return (
      '<span style="position:relative;display:inline-flex">' +
      '<button type="button" tabindex="-1" data-slot="select-trigger" data-size="default" class="' + TRIGGER + " " + width + '"><span data-slot="select-value" class="flex flex-1 text-left">' +
      esc(label) + "</span>" + I("chevron-down", "pointer-events-none size-4 text-muted-foreground") + "</button>" +
      '<select data-change="' + change + '" aria-label="' + esc(label) + '" style="position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;font-size:14px">' +
      options.map(function (o) {
        return '<option value="' + esc(o[0]) + '"' + (String(o[0]) === String(value) ? " selected" : "") + ">" + esc(o[1]) + "</option>"
      }).join("") +
      "</select></span>"
    )
  }
  function opts(list, value) {
    return list.map(function (o) {
      return '<option value="' + esc(o[0]) + '"' + (String(o[0]) === String(value) ? " selected" : "") + ">" + esc(o[1]) + "</option>"
    }).join("")
  }

  // ───────────────────────── 날짜 도구
  var TODAY = Demo.day(0)
  function p2(n) {
    return String(n).padStart(2, "0")
  }
  function toDate(s) {
    var a = s.split("-")
    return new Date(+a[0], +a[1] - 1, +a[2])
  }
  function fmt(d) {
    return d.getFullYear() + "-" + p2(d.getMonth() + 1) + "-" + p2(d.getDate())
  }
  function addDays(s, n) {
    var d = toDate(s)
    d.setDate(d.getDate() + n)
    return fmt(d)
  }
  function diffDays(a, b) {
    return Math.round((toDate(a) - toDate(b)) / 86400000)
  }
  function dow(s) {
    return toDate(s).getDay()
  }
  var DOW = ["일", "월", "화", "수", "목", "금", "토"]
  function mondayOf(s) {
    var w = dow(s)
    return addDays(s, w === 0 ? -6 : 1 - w)
  }
  function md(s) {
    return s.slice(5)
  }
  function nowHM() {
    var d = new Date()
    return p2(d.getHours()) + ":" + p2(d.getMinutes())
  }
  function hmAdd(hm, min) {
    var a = hm.split(":")
    var t = +a[0] * 60 + +a[1] + min
    t = (t + 1440) % 1440
    return p2(Math.floor(t / 60)) + ":" + p2(t % 60)
  }

  // ───────────────────────── 가상 데이터
  var seed = 7
  function rnd() {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
  function pick(a) {
    return a[Math.floor(rnd() * a.length)]
  }

  var REGIONS = ["서울", "경기", "인천", "충북", "충남", "강원"]
  var REGION_TONE = { 서울: "info", 경기: "warn", 인천: "primary", 충북: "success", 충남: "success", 강원: "muted" }
  var REGION_GROUP = { 서울: "서울·경기·인천", 경기: "서울·경기·인천", 인천: "서울·경기·인천", 충북: "충북", 충남: "충남", 강원: "강원" }

  var VENUES = [
    ["성수 라온 웨딩홀", "별빛홀", "서울"],
    ["마포 소담 컨벤션", "솔홀", "서울"],
    ["잠실 아뜰리에 가든", "플로라홀", "서울"],
    ["용산 해온 웨딩타워", "아이보리홀", "서울"],
    ["목동 벨루체 하우스", "로즈홀", "서울"],
    ["분당 모아 채플", "화이트홀", "경기"],
    ["일산 온다온 컨벤션", "달빛홀", "경기"],
    ["수원 한결 웨딩홀", "그랑볼룸", "경기"],
    ["평촌 여울 하우스", "", "경기"],
    ["송도 새봄 컨벤션센터", "오션홀", "인천"],
    ["부평 누리 웨딩파티", "", "인천"],
    ["청주 다솜 하우스", "메인홀", "충북"],
    ["천안 해든 컨벤션", "", "충남"],
    ["춘천 호반 웨딩가든", "", "강원"],
  ]
  // 신부(예약자) / 신랑 이름은 모두 지어낸 이름
  var BRIDES = [
    "여서윤", "옥하린", "탁지아", "함소율", "육예린", "인채원", "금다은", "국서아", "경나연", "진유하", "연시은", "엄채린",
    "피은솔", "남궁하늘", "선우리", "제갈윤서", "독고은", "황보미르", "어가은", "온새봄", "편다빈", "명수아", "도해인", "방소이",
    "변하율", "빈채아", "사지안", "서문가윤", "석예나", "설아린", "소다인", "승하연", "시윤아", "아단비", "양초롱", "어진주",
    "여름빛", "왕다솜", "용하나", "우봄이", "위소연", "음가희", "이슬비", "임새론", "전보람", "정한별", "주이랑", "차가온",
    "채솔빈", "추다올", "태하람", "하늬", "현새온", "호예슬",
  ]
  var GROOMS = [
    "구태현", "나준우", "단시후", "마건호", "모도윤", "반준서", "방승훈", "배태양", "변하준", "봉시우", "사준혁", "상우진",
    "서지운", "성한결", "소민규", "손이안", "송건우", "신해찬", "안로운", "양준기", "엄태오", "연지후", "염도겸", "예서준",
    "오한울", "왕재민", "우태건", "원시혁", "위은찬", "유다온", "육성빈", "윤이든", "은지섭", "이로하", "인태민", "임도하",
    "장루안", "전다올", "정새힘", "조은호", "주한솔", "지우람", "진태희", "차온유", "천다훈", "최로운", "추해솔", "탁건희",
    "편시온", "하도담", "한이음", "허누리", "홍바다", "황새벽",
  ]
  var STAFF = [
    { id: 1, name: "한도율", role: "촬영", region: "서울", car: "자차", login: "dy01" },
    { id: 2, name: "오세찬", role: "촬영", region: "경기", car: "자차", login: "" },
    { id: 3, name: "임재혁", role: "촬영", region: "서울", car: "대중교통", login: "" },
    { id: 4, name: "배준서", role: "촬영", region: "인천", car: "자차", login: "js77" },
    { id: 5, name: "류시온", role: "촬영", region: "경기", car: "자차", login: "" },
    { id: 6, name: "문태오", role: "촬영", region: "서울", car: "자차", login: "" },
    { id: 7, name: "서지호", role: "촬영", region: "충남", car: "자차", login: "" },
    { id: 8, name: "윤건우", role: "촬영", region: "경기", car: "대중교통", login: "" },
    { id: 9, name: "장하람", role: "촬영", region: "서울", car: "자차", login: "" },
    { id: 10, name: "고은결", role: "촬영+편집", region: "서울", car: "자차", login: "eg10" },
    { id: 11, name: "송유나", role: "편집", region: "서울", car: "대중교통", login: "" },
    { id: 12, name: "차민서", role: "편집", region: "경기", car: "자차", login: "" },
  ]
  var REFERRERS = ["기다연", "노하은", "마루하", "봉서현", "석가람", "어유리", "옥채영", "인소희"]

  var STATUS_TONE = {
    승인대기: "danger",
    계약대기: "warn",
    "서명 대기": "warn",
    계약완료: "primary",
    "촬영 완료": "info",
    "편집 중": "info",
    "납품 완료": "success",
  }
  var PAY_TONE = { 완납: "success", "잔금 대기": "info", "계약금 대기": "warn" }

  function staffById(id) {
    for (var i = 0; i < state.staff.length; i++) if (state.staff[i].id === id) return state.staff[i]
    return null
  }
  function staffName(id) {
    var s = staffById(id)
    return s ? s.name : ""
  }
  function shooters() {
    return state.staff.filter(function (s) {
      return s.role !== "편집"
    })
  }
  function editors() {
    return state.staff.filter(function (s) {
      return s.role !== "촬영"
    })
  }

  var state = {
    nav: false,
    modal: null,
    staff: STAFF.map(function (s) {
      return Object.assign({}, s)
    }),
    res: [],
    referrals: [],
    settings: {
      products: [
        { id: 1, name: "본식 기본 촬영 (요약 영상)", supply: 360000, vat: 36000 },
        { id: 2, name: "본식 프리미엄 촬영 (2인 촬영)", supply: 520000, vat: 52000 },
      ],
      defaultProduct: 1,
      options: [
        { id: 1, name: "원본 영상 제공", supply: 45000, vat: 4500 },
        { id: 2, name: "식전 영상 추가", supply: 85000, vat: 8500 },
      ],
      discounts: [
        { id: 1, name: "짝꿍 추천 할인", amount: 15000, on: true },
        { id: 2, name: "평일 예식 할인", amount: 35000, on: true },
        { id: 3, name: "재방문 고객 할인", amount: 25000, on: false },
      ],
      shootRate: 180000,
      editRate: 65000,
      travel: { 서울: 0, 경기: 25000, 인천: 25000, 충북: 45000, 충남: 45000, 강원: 55000 },
      cap: 6,
      bank: "가상은행",
      account: "000-000000-00-000",
      autoMatch: true,
      mailFrom: "루미 필름",
      mailAddr: "film@example.com",
      mailSubject: "[루미 필름] 본식 영상이 준비되었습니다",
      linkDays: 30,
      sheetUrl: "",
      sheetSync: false,
      tpl: {
        confirm: "{예약자}님, 루미 필름입니다. {본식일} {예식장} 본식 촬영 예약이 접수되었습니다.",
        balance: "{예약자}님, 본식 촬영 잔금 {잔금}원 입금 부탁드립니다. 입금 계좌: {계좌}",
        delivery: "{예약자}님, 본식 영상이 준비되었습니다. 아래 링크에서 확인해 주세요. {링크}",
      },
      kakaoId: "@lumifilm_demo",
      kakaoOn: false,
    },
    contracts: [{ id: 1, name: "루미 필름 표준 촬영 계약서", pages: 3, fields: 11, at: addDays(TODAY, -41) + " 10:20" }],
    blackout: [
      { id: 1, staff: 3, date: null, reason: "가족 행사", status: "대기" },
      { id: 2, staff: 6, date: null, reason: "개인 일정", status: "대기" },
    ],
    trash: [],
    paid: {},
    // 화면별 상태
    r: { tab: "all", region: "전체", period: "all", from: "", to: "", dir: "all", sort: "date-desc", cash: false, q: "", limit: 20, sel: {} },
    ref: { q: "", asc: false },
    sc: { mode: "shoot", view: "week", week: 0, day: TODAY, dir: 1, open: false },
    st: { filter: "all" },
    ct: { tab: "edit", name: "" },
    bal: { from: TODAY, to: addDays(TODAY, 14), range: "45", ran: false, done: {} },
    at: { day: TODAY, dir: "전체", status: "전체", q: "" },
    dl: { links: {} },
    se: { week: mondayOf(TODAY) },
    cfg: { tab: "product" },
  }

  ;(function buildData() {
    var dates = []
    var sat = addDays(mondayOf(TODAY), 5)
    var sun = addDays(sat, 1)
    function push(d, n) {
      for (var i = 0; i < n; i++) dates.push(d)
    }
    push(TODAY, 3)
    push(sat, 7)
    push(sun, 5)
    for (var w = -6; w <= -1; w++) {
      push(addDays(sat, w * 7), w % 2 ? 2 : 1)
      push(addDays(sun, w * 7), w % 3 ? 1 : 2)
    }
    push(addDays(TODAY, -5), 1)
    for (var f = 1; f <= 12; f++) {
      push(addDays(sat, f * 7), f === 3 ? 7 : f % 2 ? 2 : 1)
      if (f % 2 === 0) push(addDays(sun, f * 7), 1)
    }
    push(addDays(TODAY, 9), 1)
    var times = ["11:00", "11:30", "12:00", "12:30", "13:00", "13:40", "14:00", "15:00", "15:30", "16:20", "17:00"]
    var todayTimes = ["11:00", "13:00", "16:20"]
    var tIdx = 0
    var phones = {}
    dates.forEach(function (d, i) {
      var v = VENUES[(i * 5 + 3) % VENUES.length]
      var time = d === TODAY ? todayTimes[tIdx++] : pick(times)
      var past = d < TODAY
      var diff = diffDays(d, TODAY)
      var status, pay
      if (past) {
        status = diff < -28 ? (rnd() < 0.8 ? "납품 완료" : "편집 중") : diff < -10 ? (rnd() < 0.5 ? "편집 중" : "촬영 완료") : "촬영 완료"
        pay = rnd() < 0.75 ? "완납" : "잔금 대기"
      } else if (d === TODAY) {
        status = "계약완료"
        pay = "잔금 대기"
      } else {
        var r = rnd()
        status = diff > 40 && r < 0.12 ? "승인대기" : diff > 30 && r < 0.22 ? "계약대기" : r < 0.32 ? "서명 대기" : "계약완료"
        pay = status === "계약완료" ? "잔금 대기" : "계약금 대기"
      }
      var tail
      do {
        tail = 1000 + Math.floor(rnd() * 8999)
      } while (phones[tail])
      phones[tail] = 1
      var dir = null
      if (past || d === TODAY) dir = shooters()[i % 9].id
      else if (status === "계약완료" && rnd() < 0.55) dir = shooters()[(i * 3) % 10].id
      var editor = null
      if (status === "편집 중" || status === "납품 완료" || (status === "촬영 완료" && rnd() < 0.4)) editor = editors()[i % 3].id
      var deliveredAt = status === "납품 완료" ? addDays(d, 24 + (i % 6)) : null
      var balance = [226000, 306000, 266000, 346000, 186000][i % 5]
      state.res.push({
        id: i + 1,
        no: "LM-26-" + (3101 + i),
        date: d,
        time: time,
        venue: v[0] + (v[1] ? "(" + v[1] + ")" : ""),
        region: v[2],
        dir: dir,
        editor: editor,
        bride: BRIDES[i % BRIDES.length],
        groom: GROOMS[(i * 7) % GROOMS.length],
        phone: "010-0000-" + tail,
        status: status,
        pay: pay,
        balance: balance,
        talk: rnd() < 0.85,
        flag: rnd() < 0.06,
        cash: rnd() < 0.15,
        created: i,
        deliveredAt: deliveredAt,
        link: deliveredAt ? "https://drive.example.com/s/lumi" + (3101 + i) : "",
      })
    })
    // 이번 주 편집 납품(정산 편집 수당 예시)
    state.res
      .filter(function (r) {
        return r.status === "편집 중"
      })
      .slice(0, 2)
      .forEach(function (r) {
        r.status = "납품 완료"
        r.deliveredAt = mondayOf(TODAY)
        r.link = "https://drive.example.com/s/lumi" + r.no.slice(-4)
      })
    // 짝꿍(추천) 매칭
    var codes = {}
    REFERRERS.forEach(function (n, i) {
      codes[n] = n + (4210 + i * 137)
    })
    state.res.forEach(function (r, i) {
      if (i % 2 !== 0 || r.status === "승인대기") return
      var owner = REFERRERS[(i * 3 + Math.floor(i / 7)) % REFERRERS.length]
      if (i % 5 === 0) owner = REFERRERS[0]
      var type = i % 3 === 0 ? "페이백" : "할인"
      state.referrals.push({
        id: state.referrals.length + 1,
        resId: r.id,
        owner: owner,
        code: codes[owner],
        type: type,
        amount: 10000,
        done: type === "할인" ? true : !(r.pay === "완납" && i % 4 === 0),
      })
    })
    // 불가일정 날짜
    state.blackout[0].date = addDays(mondayOf(TODAY), 5 + 7)
    state.blackout[1].date = addDays(mondayOf(TODAY), 6 + 14)
    // 당일 촬영의 감독 배정은 고정
  })()

  function resById(id) {
    for (var i = 0; i < state.res.length; i++) if (state.res[i].id === id) return state.res[i]
    return null
  }
  function activeRes() {
    return state.res
  }
  // 하루 접수 건수
  function overCap() {
    var c = {}
    state.res.forEach(function (r) {
      if (r.date >= TODAY) c[r.date] = (c[r.date] || 0) + 1
    })
    return Object.keys(c)
      .filter(function (d) {
        return c[d] > state.settings.cap
      })
      .map(function (d) {
        return { date: d, n: c[d], over: c[d] - state.settings.cap }
      })
      .sort(function (a, b) {
        return b.over - a.over || (a.date < b.date ? -1 : 1)
      })
  }
  function isUnassigned(r) {
    return r.date >= TODAY && !r.dir && r.status !== "승인대기"
  }
  function deadline(r) {
    return addDays(r.date, 30)
  }
  function counts() {
    var c = { all: 0, 승인대기: 0, 계약대기: 0, "서명 대기": 0, 계약완료: 0, unassigned: 0, "촬영 완료": 0, "편집 중": 0, "납품 완료": 0 }
    state.res.forEach(function (r) {
      c.all++
      c[r.status]++
      if (isUnassigned(r)) c.unassigned++
    })
    return c
  }

  // ───────────────────────── 공통 레이아웃
  var MENU = [
    ["/", "대시보드", "layout-dashboard"],
    ["/reservations", "예약 관리", "clipboard-list"],
    ["/chats", "채팅 관리", "message-circle"],
    ["/referrals", "짝꿍 관리", "gift"],
    ["/schedule", "스케줄 배정", "calendar-days"],
    ["/staff", "팀 관리", "users"],
    ["/contracts", "계약서", "file-pen-line"],
    ["/balance", "잔금 조회", "wallet"],
    ["/attendance", "출퇴근 현황", "circle-check"],
    ["/delivery", "납품 관리", "send"],
    ["/settlement", "정산", "receipt"],
    ["/settings", "환경설정", "settings"],
  ]
  function sidebar(path) {
    var items = MENU.map(function (m) {
      var on = m[0] === path
      return (
        '<li><a ' + (on ? 'aria-current="page" ' : "") +
        'class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/40 ' +
        (on ? "bg-sidebar-primary text-white" : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-white") +
        '" href="#' + m[0] + '" data-nav>' + I(m[2], "size-4 shrink-0") + m[1] + "</a></li>"
      )
    }).join("")
    return (
      '<aside class="fixed inset-y-0 left-0 z-30 ' + (state.nav ? "" : "hidden ") + 'w-64 lg:block"><div class="flex h-full flex-col bg-sidebar text-sidebar-foreground">' +
      '<div class="flex h-16 items-center gap-3 px-5"><div class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">' +
      I("clapperboard", "size-5") +
      '</div><div class="flex flex-col leading-tight"><span class="text-sm font-bold text-white">루미 필름 (가상)</span><span class="text-xs text-sidebar-foreground/70">촬영 관리 시스템</span></div></div>' +
      '<nav class="flex-1 overflow-y-auto px-3 py-4"><p class="px-3 pb-2 text-xs font-medium text-sidebar-foreground/50">메뉴</p><ul class="flex flex-col gap-1">' +
      items +
      "</ul></nav>" +
      '<div class="border-t border-sidebar-border p-3"><div class="flex items-center gap-3 rounded-lg px-2 py-2"><div class="flex size-9 shrink-0 items-center justify-center rounded-full bg-sidebar-accent text-sm font-medium text-white">관</div><div class="flex min-w-0 flex-1 flex-col leading-tight"><span class="truncate text-sm font-medium text-white">관리자</span><span class="text-xs text-sidebar-foreground/60">관리자</span></div>' +
      '<button type="button" aria-label="로그아웃" data-act="logout" class="flex size-8 items-center justify-center rounded-md text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none">' +
      I("log-out", "size-4") + "</button></div></div></div></aside>" +
      (state.nav ? '<div id="nav-bg" style="position:fixed;inset:0;z-index:25;background:rgba(15,23,42,.45)"></div>' : "")
    )
  }
  function bellCount() {
    var c = counts()
    return c.승인대기 + c["서명 대기"] + state.blackout.filter(function (b) {
      return b.status === "대기"
    }).length
  }
  function header(title) {
    var n = bellCount()
    return (
      '<header class="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/80 md:px-6">' +
      '<button type="button" data-slot="sheet-trigger" aria-label="메뉴 열기" data-act="nav" class="' + B(V_GHO, SZ_I7, "lg:hidden") + '">' + I("menu") + "</button>" +
      '<h1 class="text-base font-semibold text-foreground md:text-lg">' + esc(title) + "</h1>" +
      '<div class="ml-auto flex items-center gap-2 md:gap-3">' +
      '<button type="button" aria-label="부가기능" title="부가기능" data-act="extra" class="relative flex size-9 items-center justify-center rounded-full text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">' + I("sparkles", "size-5") + "</button>" +
      '<button type="button" aria-label="휴지통" title="휴지통" data-act="trash" class="relative flex size-9 items-center justify-center rounded-full text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">' + I("trash-2", "size-5") + "</button>" +
      '<button type="button" aria-label="비즈톡 알림" data-act="bell" class="relative flex size-9 items-center justify-center rounded-full text-muted-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring">' + I("bell", "size-5") +
      (n ? '<span class="absolute -top-0.5 -right-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-bold text-destructive-foreground">' + n + "</span>" : "") +
      "</button>" +
      '<button type="button" aria-label="계정 메뉴" data-act="account" class="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring">관</button>' +
      "</div></header>"
    )
  }
  function pageHead(title, desc, right) {
    return (
      '<div class="flex flex-wrap items-end justify-between gap-3"><div class="flex flex-col gap-1"><h1 class="text-xl font-semibold text-foreground">' + title +
      '</h1><p class="text-sm text-muted-foreground">' + desc + "</p></div>" + (right || "") + "</div>"
    )
  }
  function seg(items, cur, act) {
    return (
      '<div class="flex w-fit gap-1 rounded-lg bg-muted p-1">' +
      items.map(function (it) {
        return '<button type="button" data-act="' + act + '" data-v="' + it[0] + '" class="' + (it[0] === cur ? SEG_ON : SEG_OFF) + '">' + it[1] + "</button>"
      }).join("") +
      "</div>"
    )
  }

  // ───────────────────────── 대시보드
  function viewDashboard() {
    var c = counts()
    var todays = state.res.filter(function (r) {
      return r.date === TODAY
    }).sort(function (a, b) {
      return a.time < b.time ? -1 : 1
    })
    var mon = mondayOf(TODAY)
    var sunday = addDays(mon, 6)
    var weekN = state.res.filter(function (r) {
      return r.date >= mon && r.date <= sunday
    }).length
    var soon = state.res.filter(function (r) {
      return r.date < TODAY && r.status !== "납품 완료" && diffDays(deadline(r), TODAY) <= 7
    }).length
    var unpaid = state.res.filter(function (r) {
      return r.date < TODAY && r.pay === "잔금 대기"
    }).sort(function (a, b) {
      return a.date < b.date ? -1 : 1
    })
    var kpi = [
      ["#/schedule", "오늘 촬영", "bg-primary/10 text-primary", "video", todays.length],
      ["#/schedule", "감독 미배정", "bg-destructive/10 text-destructive", "user-x", c.unassigned],
      ["#/contracts?view=sent", "미서명 계약", "bg-warning/15 text-warning-foreground", "file-clock", c["서명 대기"]],
      ["#/delivery", "납품 임박", "bg-destructive/10 text-destructive", "package-open", soon],
      ["#/schedule", "이번 주 촬영", "bg-info/10 text-info", "calendar-check", weekN],
      ["#/reservations", "잔금 미납", "bg-destructive/10 text-destructive", "wallet", unpaid.length],
    ]
    var prog = 0, done = 0
    var todayRows = todays.map(function (r) {
      var stt = attState(r)
      if (stt === "촬영종료") done++
      else if (stt === "진행중") prog++
      return (
        '<li class="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0"><span class="w-12 shrink-0 text-sm font-medium tabular-nums text-foreground">' + esc(hmAdd(r.time, -60)) +
        '</span><div class="flex min-w-0 flex-1 flex-col"><span class="truncate text-sm font-medium text-foreground">' + esc(staffName(r.dir) || "미배정") +
        '</span><span class="truncate text-xs text-muted-foreground">' + esc(r.venue.replace(/\(.*\)/, "")) + "</span></div>" +
        (stt === "촬영종료" ? badge("촬영종료", "success") : stt === "진행중" ? badge("진행중", "info") : badge("촬영 전", "muted")) +
        "</li>"
      )
    }).join("")
    var recent = state.res.slice().sort(function (a, b) {
      return b.created - a.created
    }).slice(0, 7)
    return (
      '<div class="flex flex-col gap-4"><div class="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">' +
      kpi.map(function (k) {
        return (
          '<a class="flex flex-col gap-3 rounded-xl bg-card p-4 ring-1 ring-foreground/10 transition-colors hover:bg-muted/50 hover:ring-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href="' + k[0] +
          '"><div class="flex items-start justify-between gap-2"><span class="text-sm text-muted-foreground">' + k[1] +
          '</span><span class="flex size-8 shrink-0 items-center justify-center rounded-md ' + k[2] + '">' + I(k[3], "size-4") +
          '</span></div><p class="flex items-baseline gap-1"><span class="text-2xl font-bold tabular-nums text-foreground">' + num(k[4]) +
          '</span><span class="text-sm text-muted-foreground">건</span></p></a>'
        )
      }).join("") +
      "</div>" +
      '<div class="rounded-xl bg-card p-5 ring-1 ring-foreground/10"><div class="mb-4 flex items-center justify-between"><h2 class="text-sm font-semibold text-foreground">오늘 촬영 현황</h2><div class="flex items-center gap-1.5 text-xs text-muted-foreground"><span class="font-medium tabular-nums text-foreground">' +
      todays.length + '건</span><span aria-hidden="true">·</span><span>진행 ' + prog + '</span><span aria-hidden="true">·</span><span>완료 ' + done + "</span></div></div>" +
      (todays.length ? '<ul class="flex flex-col divide-y divide-border">' + todayRows + "</ul>" : '<p class="py-6 text-center text-sm text-muted-foreground">오늘 예정된 촬영이 없습니다.</p>') +
      "</div>" +
      '<div class="grid gap-4 xl:grid-cols-[1.6fr_1fr]"><div class="flex min-w-0 flex-col rounded-xl bg-card ring-1 ring-foreground/10"><div class="flex items-center justify-between px-5 py-4"><h2 class="text-sm font-semibold text-foreground">최근 예약</h2>' +
      '<a href="#/reservations" class="' + B(V_GHO, SZ_SM) + '">전체 보기' + I("chevron-right") + "</a></div>" +
      '<div class="w-full overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-y border-border text-left text-muted-foreground"><th class="h-10 whitespace-nowrap px-5 font-medium">진행상태</th><th class="h-10 whitespace-nowrap px-3 font-medium">예약번호</th><th class="h-10 whitespace-nowrap px-3 font-medium">예약자</th><th class="h-10 whitespace-nowrap px-3 font-medium">예식장(홀)</th><th class="h-10 whitespace-nowrap px-3 font-medium">본식일시</th><th class="h-10 whitespace-nowrap px-3 font-medium">담당감독</th></tr></thead><tbody>' +
      recent.map(function (r) {
        return (
          '<tr data-act="open-res" data-id="' + r.id + '" class="cursor-pointer border-b border-border/70 transition-colors last:border-0 hover:bg-muted/60"><td class="px-5 py-2.5">' + badge(esc(r.status), STATUS_TONE[r.status]) +
          '</td><td class="whitespace-nowrap px-3 py-2.5 font-medium tabular-nums text-foreground">' + esc(r.no) +
          '</td><td class="whitespace-nowrap px-3 py-2.5 text-foreground">' + esc(r.bride) +
          '</td><td class="whitespace-nowrap px-3 py-2.5 text-muted-foreground">' + esc(r.venue) +
          '</td><td class="whitespace-nowrap px-3 py-2.5 tabular-nums text-muted-foreground">' + esc(r.date + " " + r.time) +
          '</td><td class="whitespace-nowrap px-3 py-2.5 text-foreground">' + esc(staffName(r.dir) || "") + "</td></tr>"
        )
      }).join("") +
      "</tbody></table></div></div>" +
      '<div class="flex min-w-0 flex-col rounded-xl bg-card ring-1 ring-foreground/10"><div class="px-5 py-4"><h2 class="text-sm font-semibold text-foreground">잔금 미납</h2></div>' +
      (unpaid.length
        ? '<ul class="flex flex-col gap-2 px-3 pb-3">' +
          unpaid.slice(0, 6).map(function (r) {
            return (
              '<li data-act="open-res" data-id="' + r.id + '" style="cursor:pointer" class="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-muted/60"><div class="flex h-11 w-14 shrink-0 flex-col items-center justify-center rounded-md text-center leading-none bg-destructive text-destructive-foreground"><span class="text-sm font-bold tabular-nums">D+' +
              diffDays(TODAY, r.date) + '</span><span class="mt-0.5 text-[10px]">초과</span></div><div class="flex min-w-0 flex-1 flex-col gap-1"><div class="flex items-center gap-1.5"><span class="text-sm font-medium tabular-nums text-foreground">' +
              esc(r.no) + "</span>" + badge(esc(r.status), STATUS_TONE[r.status]) + '</div><span class="truncate text-xs text-muted-foreground">' + esc(r.venue.replace(/\(.*\)/, "")) +
              '</span></div><div class="flex shrink-0 flex-col items-end"><span class="text-sm font-semibold tabular-nums text-foreground">' + won(r.balance) +
              '</span><span class="text-xs text-muted-foreground">' + esc(r.bride) + "</span></div>" + I("chevron-right", "size-4 shrink-0 text-muted-foreground") + "</li>"
            )
          }).join("") +
          "</ul>"
        : '<p class="px-5 pb-3 text-sm text-muted-foreground">미납 잔금이 없습니다.</p>') +
      "</div></div></div>"
    )
  }

  // ───────────────────────── 예약 관리
  var RES_TABS = [
    ["all", "전체", "text-foreground"],
    ["승인대기", "승인대기", "text-destructive"],
    ["계약대기", "계약대기", "text-warning"],
    ["서명 대기", "서명 대기", "text-warning"],
    ["계약완료", "계약완료", "text-primary"],
    ["unassigned", "감독 미배정", "text-destructive"],
    ["촬영 완료", "촬영 완료", "text-info"],
    ["편집 중", "편집 중", "text-info"],
    ["납품 완료", "납품 완료", "text-success"],
  ]
  var PERIODS = [
    ["all", "전체 기간"],
    ["upcoming", "다가오는 예식"],
    ["month", "이번 달"],
    ["next", "다음 달"],
    ["past", "지난 예식"],
  ]
  var SORTS = [
    ["date-desc", "본식날짜 ↓ (최신순)"],
    ["date-asc", "본식날짜 ↑ (가까운순)"],
    ["created-desc", "접수순 (최근 접수)"],
    ["name", "예약자 이름순"],
  ]
  function filteredRes() {
    var f = state.r
    var ym = TODAY.slice(0, 7)
    var nd = toDate(TODAY)
    nd.setMonth(nd.getMonth() + 1, 1)
    var nym = fmt(nd).slice(0, 7)
    var q = f.q.trim().toLowerCase()
    var list = state.res.filter(function (r) {
      if (f.tab === "unassigned") {
        if (!isUnassigned(r)) return false
      } else if (f.tab !== "all" && r.status !== f.tab) return false
      if (f.region !== "전체" && REGION_GROUP[r.region] !== f.region) return false
      if (f.period === "upcoming" && r.date < TODAY) return false
      if (f.period === "past" && r.date >= TODAY) return false
      if (f.period === "month" && r.date.slice(0, 7) !== ym) return false
      if (f.period === "next" && r.date.slice(0, 7) !== nym) return false
      if (f.from && r.date < f.from) return false
      if (f.to && r.date > f.to) return false
      if (f.dir === "none" && r.dir) return false
      if (f.dir !== "all" && f.dir !== "none" && String(r.dir) !== f.dir) return false
      if (f.cash && !r.cash) return false
      if (q && (r.bride + r.groom + r.venue + r.no + r.phone).toLowerCase().indexOf(q) < 0) return false
      return true
    })
    list.sort(function (a, b) {
      if (f.sort === "date-asc") return a.date === b.date ? (a.time < b.time ? -1 : 1) : a.date < b.date ? -1 : 1
      if (f.sort === "created-desc") return b.created - a.created
      if (f.sort === "name") return a.bride.localeCompare(b.bride, "ko")
      return a.date === b.date ? (a.time < b.time ? 1 : -1) : a.date < b.date ? 1 : -1
    })
    return list
  }
  function viewReservations() {
    var f = state.r
    var c = counts()
    var oc = overCap()
    var list = filteredRes()
    var shown = list.slice(0, f.limit)
    var selN = Object.keys(f.sel).filter(function (k) {
      return f.sel[k]
    }).length
    var allSel = shown.length > 0 && shown.every(function (r) {
      return f.sel[r.id]
    })
    var dirOpts = [["all", "감독 전체"], ["none", "미배정"]].concat(
      shooters().map(function (s) {
        return [String(s.id), s.name]
      }),
    )
    var dirLabel = dirOpts.filter(function (o) {
      return o[0] === f.dir
    })[0][1]
    var head = ["본식날짜", "본식시간", "장소", "촬영감독", "예약자", "연락처", "입금", "상태", "비즈톡"]
    var rows = shown.map(function (r) {
      return (
        '<tr data-act="open-res" data-id="' + r.id + '" class="cursor-pointer border-b border-border/70 transition-colors last:border-0 hover:bg-muted/60"><td class="px-4 py-2.5"><div class="flex items-center gap-1.5">' +
        checkbox(!!f.sel[r.id], "sel", ' data-id="' + r.id + '"', r.no + " 선택") +
        '<button type="button" title="중요표시(사고 건 등)" data-act="flag" data-id="' + r.id + '" class="rounded p-0.5 transition-colors ' + (r.flag ? "text-destructive" : "text-muted-foreground/40 hover:text-destructive") + '">' +
        I("flag", "size-3.5") + "</button></div></td>" +
        '<td class="whitespace-nowrap px-3 py-2.5"><span class="font-medium tabular-nums text-foreground">' + esc(r.date) + '</span><span class="block text-[11px] tabular-nums text-muted-foreground">' + esc(r.no) + "</span></td>" +
        '<td class="whitespace-nowrap px-3 py-2.5 tabular-nums text-muted-foreground">' + esc(r.time) + "</td>" +
        '<td class="max-w-[180px] truncate px-3 py-2.5 text-muted-foreground" title="' + esc(r.venue) + '">' + esc(r.venue) + "</td>" +
        '<td class="whitespace-nowrap px-3 py-2.5 text-foreground">' + (r.dir ? esc(staffName(r.dir)) : '<span class="text-muted-foreground"></span>') + "</td>" +
        '<td class="whitespace-nowrap px-3 py-2.5"><span class="block text-foreground">' + esc(r.bride) + '</span><span class="block text-[11px] text-muted-foreground">신랑 ' + esc(r.groom) + " · 신부 " + esc(r.bride) + "</span></td>" +
        '<td class="whitespace-nowrap px-3 py-2.5 tabular-nums text-muted-foreground">' + esc(r.phone) + "</td>" +
        '<td class="whitespace-nowrap px-3 py-2.5">' + badge(esc(r.pay), PAY_TONE[r.pay]) + "</td>" +
        '<td class="px-3 py-2.5">' + badge(esc(r.status), STATUS_TONE[r.status]) + "</td>" +
        '<td class="whitespace-nowrap px-3 py-2.5"><button type="button" title="클릭해서 다시 배정/해제" data-act="talk" data-id="' + r.id + '" class="inline-flex items-center rounded-full">' +
        (r.talk
          ? '<span class="inline-flex h-5 w-fit shrink-0 items-center justify-center whitespace-nowrap rounded-4xl border px-2 py-0.5 text-xs font-medium bg-success/10 text-success border-success/30 cursor-pointer gap-1 hover:opacity-80">' + I("message-circle", "size-3") + esc(r.bride + " " + r.phone.slice(-4)) + "</span>"
          : '<span class="inline-flex h-5 w-fit shrink-0 items-center justify-center whitespace-nowrap rounded-4xl border px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground border-border cursor-pointer gap-1 hover:opacity-80">' + I("message-circle", "size-3") + "미배정</span>") +
        "</button></td></tr>"
      )
    }).join("")
    var cards = shown.map(function (r) {
      return (
        '<button type="button" data-act="open-res" data-id="' + r.id + '" class="flex flex-col gap-2 rounded-xl bg-card p-4 text-left ring-1 ring-foreground/10 transition-colors hover:bg-muted/40"><div class="flex items-center justify-between gap-2"><span class="flex items-center gap-1.5 font-medium tabular-nums text-foreground">' +
        esc(r.no) + '</span><div class="flex items-center gap-1.5">' + badge(esc(r.pay), PAY_TONE[r.pay]) + badge(esc(r.status), STATUS_TONE[r.status]) +
        '</div></div><div class="flex items-center gap-1.5 text-sm text-foreground">' + esc(r.bride) + badge("신부", "muted") + '<span class="text-muted-foreground">· ' + esc(staffName(r.dir)) +
        '</span></div><p class="text-sm text-muted-foreground">' + esc(r.venue + " · " + r.date + " " + r.time) +
        '</p><div class="flex items-center justify-between text-sm"><span class="text-muted-foreground">잔금</span><span class="tabular-nums text-foreground">' + (r.pay === "완납" ? "완납" : won(r.balance)) + "</span></div></button>"
      )
    }).join("")
    return (
      '<div class="flex flex-col gap-4">' +
      (oc.length
        ? '<div class="flex flex-col gap-1.5 rounded-xl border border-warning/40 bg-warning/5 p-3"><span class="flex items-center gap-1.5 text-sm font-semibold text-foreground">' + I("bell", "size-4 text-warning") +
          '접수 상한 알림</span><div class="flex flex-wrap gap-1.5">' +
          oc.slice(0, 10).map(function (o) {
            return '<span class="' + BADGE.replace(" gap-1", "") + " " + TONE.danger + ' gap-1">' + esc(o.date + " · 마감 (" + o.n + "/" + state.settings.cap + ", " + o.over + " 초과)") + "</span>"
          }).join("") +
          (oc.length > 10 ? '<span class="self-center text-xs text-muted-foreground">외 ' + (oc.length - 10) + "건</span>" : "") +
          "</div></div>"
        : "") +
      '<div class="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9">' +
      RES_TABS.map(function (t) {
        var on = f.tab === t[0]
        return (
          '<button type="button" data-act="r-tab" data-v="' + t[0] + '" class="flex flex-col gap-0.5 rounded-xl bg-card px-3 py-2.5 text-left ' +
          (on ? "transition-all ring-2 ring-primary" : "ring-1 transition-all ring-foreground/10 hover:ring-foreground/25") +
          '"><span class="truncate text-xs text-muted-foreground">' + t[1] + '</span><span class="text-lg font-bold tabular-nums ' + t[2] + '">' + c[t[0]] + "</span></button>"
        )
      }).join("") +
      "</div>" +
      '<div class="flex flex-col gap-3 rounded-xl bg-card p-4 ring-1 ring-foreground/10"><div class="flex flex-wrap items-center gap-2">' +
      selectBox("w-32", PERIODS.filter(function (p) {
        return p[0] === f.period
      })[0][1], "r-period", PERIODS, f.period) +
      '<div class="flex items-center gap-1"><input id="r-from" type="date" data-slot="input" aria-label="시작 날짜" data-change="r-from" class="' + INPUT + ' h-8 w-[9.5rem] tabular-nums" value="' + esc(f.from) +
      '"><span class="text-sm text-muted-foreground">~</span><input id="r-to" type="date" data-slot="input" aria-label="종료 날짜" data-change="r-to" class="' + INPUT + ' h-8 w-[9.5rem] tabular-nums" value="' + esc(f.to) + '"></div>' +
      '<div class="inline-flex items-center gap-0.5 rounded-lg bg-muted p-0.5">' +
      ["전체", "서울·경기·인천", "충북", "충남", "강원"].map(function (g) {
        return (
          '<button type="button" data-act="r-region" data-v="' + g + '" class="rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors ' +
          (f.region === g ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground") + '">' + g + "</button>"
        )
      }).join("") +
      "</div>" +
      selectBox("w-36", dirLabel, "r-dir", dirOpts, f.dir) +
      selectBox("w-44", SORTS.filter(function (s) {
        return s[0] === f.sort
      })[0][1], "r-sort", SORTS, f.sort) +
      '<button type="button" data-act="r-cash" class="rounded-lg border px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ' +
      (f.cash ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:text-foreground") + '">현금영수증 요청</button>' +
      '<div class="relative ml-auto w-full sm:w-64">' + I("search", "pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground") +
      '<input id="r-q" type="search" placeholder="예약자명, 예식장, 계약번호" aria-label="예약 검색" data-input="r-q" class="h-8 w-full rounded-lg border border-input bg-background pr-3 pl-8 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30" value="' + esc(f.q) + '"></div></div>' +
      '<div class="flex flex-wrap items-center justify-between gap-2"><p class="text-sm text-muted-foreground">총 <span class="font-medium tabular-nums text-foreground">' + num(list.length) + "</span>건" +
      (selN ? ' · <span class="font-medium tabular-nums text-primary">' + selN + "건 선택</span>" : "") +
      '</p><div class="flex flex-wrap gap-2">' +
      '<button type="button" data-act="r-link" class="' + B(V_OUT, SZ_SM) + '">' + I("link-2", "", ' data-icon="inline-start"') + "예약폼 링크 복사</button>" +
      '<button type="button" data-act="r-same" class="' + B(V_OUT, SZ_SM) + '">' + I("users", "", ' data-icon="inline-start"') + "동명이인 입금체크</button>" +
      '<button type="button" data-act="r-detail" class="' + B(V_OUT, SZ_SM) + '">' + I("search", "", ' data-icon="inline-start"') + "상세 보기</button>" +
      '<button type="button" data-act="r-excel" class="' + B(V_OUT, SZ_SM) + '">' + I("download", "", ' data-icon="inline-start"') + "엑셀 내보내기</button>" +
      '<button type="button" data-act="r-new" class="' + B(V_PRI, SZ_SM) + '">' + I("plus", "", ' data-icon="inline-start"') + "예약 등록</button>" +
      "</div></div></div>" +
      '<div class="hidden overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 md:block"><div class="w-full overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border text-left text-muted-foreground"><th class="h-10 w-10 px-4">' +
      checkbox(allSel, "sel-all", "", "전체 선택") + "</th>" +
      head.map(function (h) {
        return '<th class="h-10 whitespace-nowrap px-3 font-medium">' + h + "</th>"
      }).join("") +
      "</tr></thead><tbody>" +
      (rows || '<tr><td colspan="10" class="px-4 py-10 text-center text-sm text-muted-foreground">조건에 맞는 예약이 없습니다.</td></tr>') +
      "</tbody></table></div></div>" +
      '<div class="flex flex-col gap-3 md:hidden">' + (cards || '<p class="rounded-xl bg-card p-10 text-center text-sm text-muted-foreground ring-1 ring-foreground/10">조건에 맞는 예약이 없습니다.</p>') + "</div>" +
      (list.length > f.limit
        ? '<div class="flex justify-center py-2"><button type="button" data-act="r-more" class="' + B(V_OUT, SZ_MD) + '">더 보기 (' + shown.length + " / " + num(list.length) + ")</button></div>"
        : "") +
      "</div>"
    )
  }

  // 예약 상세 / 등록 모달
  function field(label, inner) {
    return '<div class="flex flex-col gap-1"><label class="text-xs text-muted-foreground">' + label + "</label>" + inner + "</div>"
  }
  function textIn(name, value, extra) {
    return '<input data-slot="input" name="' + name + '" class="w-full ' + INPUT + ' h-9" value="' + esc(value == null ? "" : value) + '"' + (extra || "") + ">"
  }
  function selIn(name, list, value) {
    return '<select name="' + name + '" class="' + NSELECT + ' h-9 w-full">' + opts(list, value) + "</select>"
  }
  function modalWrap(title, body, foot, wide) {
    return (
      '<div id="modal-bg" style="position:fixed;inset:0;z-index:60;background:rgba(15,23,42,.45);display:flex;align-items:flex-start;justify-content:center;padding:56px 16px;overflow-y:auto">' +
      '<div role="dialog" aria-modal="true" class="flex flex-col gap-4 rounded-xl bg-card p-5 ring-1 ring-foreground/10" style="width:100%;max-width:' + (wide ? 640 : 520) + 'px;box-shadow:0 20px 50px rgba(0,0,0,.2)">' +
      '<div class="flex items-center justify-between gap-2"><h2 class="text-base font-semibold text-foreground">' + title + '</h2><button type="button" aria-label="닫기" data-act="close" class="' + B(V_GHO, SZ_I7) + '">' + I("x") + "</button></div>" +
      body + (foot || "") + "</div></div>"
    )
  }
  function modalRes(m) {
    var r = m.id ? resById(m.id) : null
    var isNew = !r
    var d = r || { date: addDays(TODAY, 30), time: "12:00", venue: VENUES[0][0] + "(" + VENUES[0][1] + ")", region: "서울", bride: "", groom: "", phone: "010-0000-", status: "승인대기", pay: "계약금 대기", balance: productTotal(), dir: null }
    var statusList = ["승인대기", "계약대기", "서명 대기", "계약완료", "촬영 완료", "편집 중", "납품 완료"].map(function (s) {
      return [s, s]
    })
    var body =
      '<form data-submit="res-save" data-id="' + (r ? r.id : "") + '" class="flex flex-col gap-3">' +
      (r ? '<div class="flex flex-wrap items-center gap-2 text-sm"><span class="font-medium tabular-nums text-foreground">' + esc(r.no) + "</span>" + badge(esc(r.status), STATUS_TONE[r.status]) + badge(esc(r.pay), PAY_TONE[r.pay]) + (r.flag ? badge("중요", "danger") : "") + "</div>" : "") +
      '<div class="grid grid-cols-2 gap-2">' +
      field("신부(예약자)", textIn("bride", d.bride, ' required placeholder="예: 홍길순"')) +
      field("신랑", textIn("groom", d.groom, ' placeholder="예: 홍길동"')) +
      field("본식 날짜", '<input type="date" name="date" required class="w-full ' + INPUT + ' h-9 tabular-nums" value="' + esc(d.date) + '">') +
      field("본식 시간", '<input type="time" name="time" required class="w-full ' + INPUT + ' h-9 tabular-nums" value="' + esc(d.time) + '">') +
      "</div>" +
      field("예식장(홀)", textIn("venue", d.venue, " required")) +
      '<div class="grid grid-cols-2 gap-2">' +
      field("지역", selIn("region", REGIONS.map(function (x) {
        return [x, x]
      }), d.region)) +
      field("연락처", textIn("phone", d.phone, ' required inputmode="tel"')) +
      field("진행 상태", selIn("status", statusList, d.status)) +
      field("입금", selIn("pay", [["계약금 대기", "계약금 대기"], ["잔금 대기", "잔금 대기"], ["완납", "완납"]], d.pay)) +
      field("촬영감독", selIn("dir", [["", "미배정"]].concat(shooters().map(function (s) {
        return [String(s.id), s.name]
      })), d.dir ? String(d.dir) : "")) +
      field("잔금(원)", textIn("balance", num(d.balance), ' inputmode="numeric"')) +
      "</div>" +
      '<div class="flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3">' +
      (r ? '<button type="button" data-act="res-del" data-id="' + r.id + '" class="' + B(V_DES, SZ_SM) + '">' + I("trash-2", "", ' data-icon="inline-start"') + "삭제</button>" : "<span></span>") +
      '<div class="flex gap-1.5">' +
      (r && r.pay !== "완납" ? '<button type="button" data-act="res-paid" data-id="' + r.id + '" class="' + B(V_OUT, SZ_SM) + '">' + I("circle-check", "", ' data-icon="inline-start"') + "입금 확인(완납)</button>" : "") +
      '<button type="button" data-act="close" class="' + B(V_OUT, SZ_SM) + '">취소</button><button type="submit" class="' + B(V_PRI, SZ_SM) + '">' + (isNew ? "등록" : "저장") + "</button></div></div></form>"
    return modalWrap(isNew ? "예약 등록" : "예약 상세", body, "", true)
  }
  function productTotal() {
    var p = state.settings.products.filter(function (x) {
      return x.id === state.settings.defaultProduct
    })[0] || state.settings.products[0]
    return p ? p.supply + p.vat : 0
  }

  // ───────────────────────── 채팅 관리 (체험판 미제공)
  function viewChats() {
    return (
      '<div class="flex flex-col gap-4">' + pageHead("채팅 관리", "카카오 채널로 들어온 고객 상담 대화를 모아 보고 답장합니다.") +
      '<div class="flex flex-col items-center justify-center gap-3 rounded-xl bg-card p-10 text-center ring-1 ring-foreground/10"><span class="flex size-12 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">' +
      I("message-circle", "size-5") + '</span><p class="text-sm font-medium text-foreground">체험판에서는 이 화면을 제공하지 않습니다.</p><p class="text-sm text-muted-foreground">실제 시스템에서는 고객과의 카카오톡 상담 내역을 예약과 연결해 한 화면에서 관리합니다.</p>' +
      '<a href="#/reservations" class="' + B(V_OUT, SZ_MD) + '">예약 관리로 이동' + I("chevron-right") + "</a></div></div>"
    )
  }

  // ───────────────────────── 짝꿍 관리
  function viewReferrals() {
    var refs = state.referrals.map(function (x) {
      return Object.assign({ r: resById(x.resId) }, x)
    }).filter(function (x) {
      return x.r
    })
    var pending = refs.filter(function (x) {
      return x.type === "페이백" && !x.done && x.r.pay === "완납"
    })
    var disc = refs.filter(function (x) {
      return x.type === "할인"
    })
    var owners = {}
    refs.forEach(function (x) {
      owners[x.owner] = owners[x.owner] || { name: x.owner, code: x.code, n: 0, pb: 0 }
      owners[x.owner].n++
      if (x.type === "페이백") owners[x.owner].pb++
    })
    var rank = Object.keys(owners).map(function (k) {
      return owners[k]
    }).sort(function (a, b) {
      return b.n - a.n || a.name.localeCompare(b.name, "ko")
    })
    var q = state.ref.q.trim()
    var list = refs.filter(function (x) {
      return !q || (x.owner + x.code + x.r.bride + x.r.groom + x.r.venue).indexOf(q) >= 0
    }).sort(function (a, b) {
      return state.ref.asc ? (a.r.date < b.r.date ? -1 : 1) : a.r.date < b.r.date ? 1 : -1
    })
    function stat(icon, label, value, tone, sub) {
      return (
        '<div class="flex flex-col gap-1 rounded-xl bg-card p-3 ring-1 ring-foreground/10"><div class="flex items-center gap-1.5 text-xs text-muted-foreground">' + I(icon, "size-4") + label +
        '</div><div class="text-lg font-semibold tabular-nums ' + tone + '">' + value + "</div>" + (sub != null ? '<div class="text-xs text-muted-foreground tabular-nums">' + sub + "</div>" : "") + "</div>"
      )
    }
    return (
      '<div class="flex flex-col gap-4"><div class="grid grid-cols-2 gap-3 sm:grid-cols-4">' +
      stat("gift", "총 매칭", refs.length + "건", "text-foreground") +
      stat("hand-coins", "페이백 대기", pending.length + "건", pending.length ? "text-destructive" : "text-muted-foreground", won(pending.length * 10000)) +
      stat("coins", "할인 자동적용", disc.length + "건", "text-info") +
      stat("trophy", "추천 고객 수", rank.length + "명", "text-foreground") +
      "</div>" +
      '<section class="rounded-xl bg-card ring-1 ring-foreground/10"><div class="flex items-center gap-2 border-b border-border px-4 py-3">' + I("hand-coins", "size-4 text-destructive") +
      '<h2 class="text-sm font-semibold text-foreground">페이백 처리 대기</h2><span class="text-xs text-muted-foreground">완납한 짝꿍에게 1만원을 환급한 뒤 체크하세요.</span></div>' +
      (pending.length
        ? '<ul class="divide-y divide-border">' +
          pending.map(function (x) {
            return (
              '<li class="flex items-center gap-3 px-4 py-2.5 text-sm"><span class="font-medium text-foreground">' + esc(x.owner) + '</span><span class="text-xs text-muted-foreground">(' + esc(x.code) + ")</span>" +
              '<span class="text-xs text-muted-foreground">← ' + esc(x.r.groom + " / " + x.r.bride) + " · " + esc(x.r.date) + "</span>" +
              '<span class="ml-auto flex items-center gap-2"><span class="rounded-full bg-destructive/10 px-2 py-0.5 text-xs text-destructive">페이백 10,000원</span>' +
              '<button type="button" data-act="ref-done" data-id="' + x.id + '" class="' + B(V_PRI, SZ_SM) + '">' + I("circle-check", "", ' data-icon="inline-start"') + "환급 완료</button></span></li>"
            )
          }).join("") +
          "</ul>"
        : '<p class="px-4 py-8 text-center text-sm text-muted-foreground">처리할 페이백이 없습니다. 👍</p>') +
      "</section>" +
      '<section class="rounded-xl bg-card ring-1 ring-foreground/10"><div class="flex items-center gap-2 border-b border-border px-4 py-3">' + I("trophy", "size-4 text-primary") +
      '<h2 class="text-sm font-semibold text-foreground">추천 랭킹 (누가 몇 건)</h2></div><ul class="divide-y divide-border">' +
      rank.map(function (o, i) {
        return (
          '<li class="flex items-center gap-3 px-4 py-2.5 text-sm"><span class="w-6 text-center font-semibold tabular-nums ' + (i === 0 ? "text-primary" : "text-muted-foreground") + '">' + (i + 1) +
          '</span><span class="font-medium text-foreground">' + esc(o.name) + '</span><span class="text-xs text-muted-foreground">(' + esc(o.code) + ')</span><span class="ml-auto flex items-center gap-2"><b class="tabular-nums text-foreground">' + o.n + "건</b>" +
          (o.pb ? '<span class="rounded-full bg-destructive/10 px-2 py-0.5 text-xs text-destructive">페이백 ' + o.pb + "</span>" : "") + "</span></li>"
        )
      }).join("") +
      "</ul></section>" +
      '<section class="rounded-xl bg-card ring-1 ring-foreground/10"><div class="flex flex-wrap items-center gap-2 border-b border-border px-4 py-3">' + I("gift", "size-4 text-foreground") +
      '<h2 class="text-sm font-semibold text-foreground">전체 매칭 내역</h2><span class="hidden text-xs text-muted-foreground sm:inline">짝꿍(코드 주인) → 추천으로 접수한 신청자</span>' +
      '<input id="ref-q" placeholder="이름·코드·예식장 검색" data-input="ref-q" class="ml-auto h-8 w-44 rounded-lg border border-input bg-background px-2.5 text-xs outline-none focus-visible:border-ring" value="' + esc(state.ref.q) + '"></div>' +
      '<div class="overflow-x-auto"><table class="w-full min-w-[720px] text-sm"><thead><tr class="border-b border-border text-left text-xs text-muted-foreground"><th class="px-4 py-2 font-medium"><button type="button" data-act="ref-sort" class="inline-flex items-center gap-1 hover:text-foreground" title="본식일 정렬">본식일 ' +
      (state.ref.asc ? "▲" : "▼") + '</button></th><th class="px-4 py-2 font-medium">짝꿍 (코드 주인)</th><th class="px-4 py-2 font-medium">코드</th><th class="px-4 py-2 font-medium">신청자</th><th class="px-4 py-2 font-medium">혜택</th><th class="px-4 py-2 font-medium">처리</th></tr></thead><tbody>' +
      list.map(function (x) {
        var benefit = x.type === "페이백" ? '<span class="text-destructive">페이백 10,000원</span>' : '<span class="text-info">할인 10,000원 (자동차감)</span>'
        var proc =
          x.type === "할인"
            ? '<span class="text-xs text-success">자동 완료</span>'
            : '<label class="flex items-center gap-1.5 text-xs">' + checkbox(x.done, "ref-toggle", ' data-id="' + x.id + '"') + (x.done ? '<span class="text-success">완료</span>' : '<span class="text-muted-foreground">' + (x.r.pay === "완납" ? "대기" : "완납 전") + "</span>") + "</label>"
        return (
          '<tr class="border-b border-border/60"><td class="px-4 py-2 text-muted-foreground tabular-nums">' + esc(x.r.date) + '</td><td class="px-4 py-2 text-foreground">' + esc(x.owner) +
          '</td><td class="px-4 py-2 text-muted-foreground tabular-nums">' + esc(x.code) + '</td><td class="px-4 py-2 text-foreground">' + esc(x.r.groom + " / " + x.r.bride) +
          '</td><td class="px-4 py-2">' + benefit + '</td><td class="px-4 py-2">' + proc + "</td></tr>"
        )
      }).join("") +
      (list.length ? "" : '<tr><td colspan="6" class="px-4 py-8 text-center text-sm text-muted-foreground">검색 결과가 없습니다.</td></tr>') +
      "</tbody></table></div></section></div>"
    )
  }

  // ───────────────────────── 스케줄 배정
  function weekDays() {
    var mon = addDays(mondayOf(TODAY), state.sc.week * 7)
    var out = []
    for (var i = 0; i < 7; i++) {
      var d = addDays(mon, i)
      var has = state.res.some(function (r) {
        return r.date === d
      })
      if (i >= 5 || has) out.push(d)
    }
    return out
  }
  function assignKey() {
    return state.sc.mode === "shoot" ? "dir" : "editor"
  }
  function scheduleCard(r) {
    var key = assignKey()
    var who = r[key]
    var unassigned = !who
    var blocked = state.blackout.filter(function (b) {
      return b.status === "승인" && b.date === r.date && b.staff === who
    }).length
    return (
      '<div class="flex items-center gap-3 rounded-xl bg-card p-3 ring-1 ' + (unassigned || blocked ? "ring-destructive/30" : "ring-foreground/10") + '"><div class="flex w-16 shrink-0 flex-col items-center"><span class="text-lg font-bold tabular-nums text-foreground">' +
      esc(r.time) + '</span><span class="text-[11px] text-muted-foreground">촬영 ' + esc(hmAdd(r.time, -60)) + "</span></div>" +
      '<div class="flex min-w-0 flex-1 flex-col gap-0.5"><div class="flex items-center gap-1.5"><span class="truncate text-sm font-medium text-foreground">' + esc(r.venue) + "</span>" + miniBadge(r.region, REGION_TONE[r.region]) +
      (r.status !== "계약완료" ? badge(esc(r.status), STATUS_TONE[r.status]) : "") +
      '</div><span class="flex items-center gap-1 truncate text-xs text-muted-foreground">' + I("map-pin", "size-3 shrink-0") + esc(r.groom + " / " + r.bride + " · " + r.bride) + "</span></div>" +
      '<div class="shrink-0">' +
      (unassigned
        ? '<button type="button" data-act="sc-assign" data-id="' + r.id + '" class="' + B(V_PRI, SZ_SM) + '">' + I("user-plus", "", ' data-icon="inline-start"') + (state.sc.mode === "shoot" ? "촬영감독 배정" : "편집감독 배정") + "</button>"
        : '<div class="flex items-center gap-1.5">' + badge(esc(staffName(who)), blocked ? "danger" : "success") +
          '<button type="button" data-act="sc-assign" data-id="' + r.id + '" class="' + B(V_GHO, SZ_XS) + '">변경</button><button type="button" data-act="sc-unassign" data-id="' + r.id + '" class="' + B(V_GHO, SZ_XS, "text-muted-foreground") + '">해제</button></div>') +
      "</div></div>"
    )
  }
  function dayGroup(d) {
    var key = assignKey()
    var list = state.res.filter(function (r) {
      return r.date === d && r.status !== "승인대기"
    }).sort(function (a, b) {
      return a.time < b.time ? -1 : 1
    })
    var un = list.filter(function (r) {
      return !r[key]
    }).length
    return (
      '<div class="flex flex-col gap-2"><div class="flex items-center gap-2 px-1"><span class="text-sm font-semibold text-foreground">' + md(d) + "(" + DOW[dow(d)] + ")</span>" + badge(list.length + "건", "muted") +
      (un ? '<span class="' + BADGE.replace(" gap-1", "") + " " + TONE.danger + ' gap-1">' + I("triangle-alert", "size-3") + "미배정 " + un + "</span>" : "") +
      "</div>" +
      (list.length ? list.map(scheduleCard).join("") : '<p class="rounded-xl bg-card p-4 text-center text-sm text-muted-foreground ring-1 ring-foreground/10">이 날은 촬영이 없습니다.</p>') +
      "</div>"
    )
  }
  function viewSchedule() {
    var sc = state.sc
    var key = assignKey()
    var unAll = state.res.filter(function (r) {
      return r.date >= TODAY && !r[key] && r.status !== "승인대기"
    }).length
    var pendingBo = state.blackout.filter(function (b) {
      return b.status === "대기"
    })
    var people = sc.mode === "shoot" ? shooters() : editors()
    var body = ""
    if (sc.view === "week") {
      var days = weekDays()
      var bal = people.map(function (s) {
        var sa = 0, su = 0
        days.forEach(function (d) {
          state.res.forEach(function (r) {
            if (r.date === d && r[key] === s.id) {
              if (dow(d) === 6) sa++
              else if (dow(d) === 0) su++
            }
          })
        })
        return { s: s, sa: sa, su: su, t: sa + su }
      }).sort(function (a, b) {
        return b.t - a.t || a.s.id - b.s.id
      })
      body =
        '<div class="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-card p-3 ring-1 ring-foreground/10"><div class="flex items-center gap-2">' +
        '<button type="button" aria-label="지난 주" data-act="sc-week" data-v="-1" class="' + B(V_OUT, SZ_I7) + '">' + I("chevron-left") + "</button>" +
        '<span class="flex items-center gap-1.5 text-sm font-medium text-foreground">' + I("calendar-days", "size-4 text-muted-foreground") + md(days[0]) + " ~ " + md(days[days.length - 1]) +
        ' <span class="text-xs font-normal text-muted-foreground">(토·일 + 예약 있는 평일)</span></span>' +
        '<button type="button" aria-label="다음 주" data-act="sc-week" data-v="1" class="' + B(V_OUT, SZ_I7) + '">' + I("chevron-right") + "</button>" +
        '<button type="button" data-act="sc-week" data-v="0" class="' + B(V_GHO, SZ_SM) + '">이번 주</button></div>' +
        '<a href="#/attendance" class="' + B(V_OUT, SZ_SM) + '">' + I("car", "", ' data-icon="inline-start"') + "출근표</a></div>" +
        '<div class="rounded-xl bg-card ring-1 ring-foreground/10"><div class="border-b border-border px-4 py-2 text-xs font-semibold text-muted-foreground">감독별 주말 배정 현황 (균형 확인)</div><div class="divide-y divide-border/70">' +
        bal.map(function (b) {
          return (
            '<div class="flex items-center gap-3 px-4 py-2 text-sm"><span class="w-24 shrink-0 font-medium text-foreground">' + esc(b.s.name) + '</span><div class="flex flex-wrap gap-1.5">' +
            '<span class="rounded-md bg-muted px-1.5 py-0.5 text-xs tabular-nums text-muted-foreground">토 ' + b.sa + "</span>" +
            '<span class="rounded-md bg-muted px-1.5 py-0.5 text-xs tabular-nums text-muted-foreground">일 ' + b.su + "</span>" +
            '<span class="rounded-md bg-primary/10 px-1.5 py-0.5 text-xs font-medium tabular-nums text-primary">합 ' + b.t + "</span></div></div>"
          )
        }).join("") +
        "</div></div>" +
        days.map(dayGroup).join("")
    } else if (sc.view === "day") {
      body =
        '<div class="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-card p-3 ring-1 ring-foreground/10"><div class="flex items-center gap-2">' +
        '<button type="button" aria-label="이전 날" data-act="sc-day" data-v="-1" class="' + B(V_OUT, SZ_I7) + '">' + I("chevron-left") + "</button>" +
        '<div class="flex items-center gap-2">' + I("calendar-days", "size-4 text-muted-foreground") +
        '<input id="sc-day" type="date" data-change="sc-day-set" class="rounded-lg border border-input bg-background px-2 py-1 text-sm tabular-nums outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30" value="' + esc(sc.day) + '"><span class="text-sm font-medium text-foreground">' + DOW[dow(sc.day)] + "요일</span></div>" +
        '<button type="button" aria-label="다음 날" data-act="sc-day" data-v="1" class="' + B(V_OUT, SZ_I7) + '">' + I("chevron-right") + "</button>" +
        '<button type="button" data-act="sc-day" data-v="0" class="' + B(V_GHO, SZ_SM) + '">오늘</button></div></div>' +
        dayGroup(sc.day)
    } else {
      var sel = staffById(sc.dir) && people.indexOf(staffById(sc.dir)) >= 0 ? sc.dir : people[0].id
      var mine = state.res.filter(function (r) {
        return r[key] === sel && r.date >= TODAY
      }).sort(function (a, b) {
        return a.date === b.date ? (a.time < b.time ? -1 : 1) : a.date < b.date ? -1 : 1
      })
      var bo = state.blackout.filter(function (b) {
        return b.staff === sel && b.status === "승인"
      })
      body =
        '<div class="flex flex-wrap items-center gap-2 rounded-xl bg-card p-3 ring-1 ring-foreground/10"><select data-change="sc-dir" class="' + NSELECT + '">' +
        opts(people.map(function (s) {
          return [String(s.id), s.name]
        }), String(sel)) +
        '</select><span class="text-sm text-muted-foreground">앞으로 배정된 촬영 <b class="tabular-nums text-foreground">' + mine.length + "건</b></span>" +
        (bo.length ? badge("불가일정 " + bo.map(function (b) {
          return md(b.date)
        }).join(", "), "danger") : "") +
        "</div>" +
        (mine.length
          ? '<div class="flex flex-col gap-2">' +
            mine.map(function (r) {
              return '<div class="flex flex-col gap-1"><span class="px-1 text-xs font-medium text-muted-foreground">' + md(r.date) + "(" + DOW[dow(r.date)] + ")</span>" + scheduleCard(r) + "</div>"
            }).join("") +
            "</div>"
          : '<div class="rounded-xl bg-card p-10 text-center text-sm text-muted-foreground ring-1 ring-foreground/10">앞으로 배정된 촬영이 없습니다.</div>')
    }
    return (
      '<div class="flex flex-col gap-4">' +
      pageHead(
        "일정 배정",
        sc.mode === "shoot" ? "촬영을 확인하고 촬영감독을 배정합니다." : "촬영을 확인하고 편집감독을 배정합니다.",
        '<button type="button" data-act="sc-ai" class="' + B(V_PRI, SZ_MD) + '">' + I("wand-sparkles", "", ' data-icon="inline-start"') + "AI 최적 배정 (미배정 " + unAll + ")</button>",
      ) +
      seg([["shoot", "촬영감독"], ["edit", "편집감독"]], sc.mode, "sc-mode") +
      '<div class="rounded-xl bg-card ring-1 ring-foreground/10"><button type="button" data-act="sc-bo" class="flex w-full items-center gap-2 px-4 py-2.5 text-left">' +
      I("triangle-alert", "size-4 " + (pendingBo.length ? "text-destructive" : "text-muted-foreground")) +
      '<span class="text-sm font-semibold text-foreground">감독 불가일정</span><span class="text-xs text-muted-foreground">' + (pendingBo.length ? "승인 대기 " + pendingBo.length + "건" : "승인 대기 없음") +
      '</span><span class="ml-auto text-xs text-muted-foreground">' + (sc.open ? "접기" : "펼치기") + "</span></button>" +
      (sc.open
        ? '<div class="divide-y divide-border/70 border-t border-border">' +
          state.blackout.map(function (b) {
            return (
              '<div class="flex flex-wrap items-center gap-3 px-4 py-2 text-sm"><span class="w-24 shrink-0 font-medium text-foreground">' + esc(staffName(b.staff)) + '</span><span class="tabular-nums text-muted-foreground">' +
              esc(b.date + " (" + DOW[dow(b.date)] + ")") + '</span><span class="text-xs text-muted-foreground">' + esc(b.reason) + '</span><span class="ml-auto flex items-center gap-1.5">' +
              (b.status === "대기"
                ? '<button type="button" data-act="bo-ok" data-id="' + b.id + '" class="' + B(V_PRI, SZ_XS) + '">승인</button><button type="button" data-act="bo-no" data-id="' + b.id + '" class="' + B(V_GHO, SZ_XS, "text-muted-foreground") + '">반려</button>'
                : badge(b.status, b.status === "승인" ? "success" : "muted")) +
              "</span></div>"
            )
          }).join("") +
          "</div>"
        : "") +
      "</div>" +
      seg([["week", "주별"], ["day", "날짜별"], ["staff", "감독별"]], sc.view, "sc-view") +
      body +
      "</div>"
    )
  }
  function modalAssign(m) {
    var r = resById(m.id)
    var key = m.key
    var people = key === "dir" ? shooters() : editors()
    var body =
      '<p class="text-sm text-muted-foreground">' + esc(r.date + " (" + DOW[dow(r.date)] + ") " + r.time + " · " + r.venue) + "</p>" +
      '<div class="flex flex-col divide-y divide-border rounded-lg border border-border">' +
      people.map(function (s) {
        var same = state.res.filter(function (x) {
          return x.date === r.date && x[key] === s.id && x.id !== r.id
        }).length
        var bo = state.blackout.some(function (b) {
          return b.staff === s.id && b.date === r.date && b.status !== "반려"
        })
        var cur = r[key] === s.id
        return (
          '<div class="flex items-center gap-3 px-3 py-2 text-sm"><span class="font-medium text-foreground">' + esc(s.name) + "</span>" + miniBadge(s.region, REGION_TONE[s.region]) +
          (same ? badge("같은 날 " + same + "건", "warn") : "") + (bo ? badge("불가일정", "danger") : "") + (cur ? badge("현재 배정", "success") : "") +
          '<button type="button" data-act="assign-pick" data-id="' + r.id + '" data-s="' + s.id + '" data-key="' + key + '" class="' + B(cur ? V_OUT : V_PRI, SZ_SM, "ml-auto") + '"' + (cur ? " disabled" : "") + ">선택</button></div>"
        )
      }).join("") +
      "</div>"
    return modalWrap(key === "dir" ? "촬영감독 배정" : "편집감독 배정", body)
  }

  // ───────────────────────── 팀 관리
  function weekCount(id) {
    var mon = mondayOf(TODAY), sun = addDays(mon, 6)
    return state.res.filter(function (r) {
      return (r.dir === id || r.editor === id) && r.date >= mon && r.date <= sun
    }).length
  }
  function totalCount(id) {
    return state.res.filter(function (r) {
      return (r.dir === id && r.date <= TODAY) || (r.editor === id && r.status === "납품 완료")
    }).length
  }
  function viewStaff() {
    var f = state.st.filter
    var all = state.staff
    var shootN = all.filter(function (s) {
      return s.role !== "편집"
    }).length
    var editN = all.filter(function (s) {
      return s.role === "편집"
    }).length
    var list = all.filter(function (s) {
      return f === "all" || (f === "shoot" ? s.role !== "편집" : s.role === "편집")
    }).slice().sort(function (a, b) {
      return a.name.localeCompare(b.name, "ko")
    })
    var ROLE_TONE = { 촬영: "info", 편집: "warn", "촬영+편집": "primary" }
    function tg(v, label) {
      var on = f === v
      return '<button type="button" data-act="st-filter" data-v="' + v + '" aria-pressed="' + on + '"' + (on ? ' data-pressed=""' : "") + ' data-slot="toggle-group-item" data-variant="outline" data-size="default" data-spacing="2" class="' + TOGGLE + '">' + label + "</button>"
    }
    return (
      '<div class="flex flex-col gap-4">' +
      pageHead("팀 관리", "촬영·편집 감독의 담당 현황과 실적을 관리합니다.", '<button type="button" data-act="st-new" class="' + B(V_PRI, SZ_MD) + '">' + I("plus", "", ' data-icon="inline-start"') + "감독 등록</button>") +
      '<div role="group" data-slot="toggle-group" data-variant="outline" data-spacing="2" data-orientation="horizontal" class="group/toggle-group flex flex-row items-center gap-[--spacing(var(--gap))] rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-vertical:flex-col data-vertical:items-stretch w-fit" style="--gap:2">' +
      tg("all", "전체 " + all.length) + tg("shoot", "촬영팀 " + shootN) + tg("edit", "편집팀 " + editN) +
      "</div>" +
      '<div class="grid gap-3 md:grid-cols-2">' +
      list.map(function (s) {
        return (
          '<div data-slot="card" data-size="default" class="' + CARD + '"><div data-slot="card-content" class="flex flex-col gap-3 p-4"><div class="flex items-center gap-4"><span class="flex size-12 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">' +
          I(s.role === "편집" ? "scissors" : "camera", "size-5") +
          '</span><div class="flex min-w-0 flex-1 flex-col gap-1"><div class="flex items-center gap-2"><span class="text-sm font-semibold text-foreground">' + esc(s.name) + "</span>" + badge(esc(s.role), ROLE_TONE[s.role]) +
          (s.login ? '<span class="' + BADGE.replace(" gap-1", "") + " " + TONE.info + ' gap-1">' + I("key-round", "size-3") + esc(s.login) + "</span>" : "") +
          '</div><p class="text-xs text-muted-foreground">' + (s.role === "편집" ? "편집팀" : "촬영팀") + " · " + esc(s.region) + " · " + esc(s.car) +
          '</p><div class="mt-1 flex items-center gap-4 text-xs text-muted-foreground"><span class="flex items-center gap-1">이번주<span class="font-medium tabular-nums text-foreground">' + weekCount(s.id) +
          '건</span></span><span class="flex items-center gap-1">누적<span class="font-medium tabular-nums text-foreground">' + totalCount(s.id) + "건</span></span></div></div>" +
          '<div class="flex items-center gap-1"><button type="button" data-act="st-login" data-id="' + s.id + '" class="' + B(V_OUT, SZ_SM) + '">' + I("key-round", "", ' data-icon="inline-start"') + "로그인</button>" +
          '<button type="button" aria-label="수정" data-act="st-edit" data-id="' + s.id + '" class="' + B(V_GHO, SZ_I7) + '">' + I("pencil") + "</button>" +
          '<button type="button" aria-label="삭제" data-act="st-del" data-id="' + s.id + '" class="' + B(V_DES, SZ_I7) + '">' + I("trash-2") + "</button></div></div></div></div>"
        )
      }).join("") +
      "</div></div>"
    )
  }
  function modalStaff(m) {
    var s = m.id ? staffById(m.id) : { name: "", role: "촬영", region: "서울", car: "자차", login: "" }
    var body =
      '<form data-submit="st-save" data-id="' + (m.id || "") + '" class="flex flex-col gap-3">' +
      field("이름", textIn("name", s.name, ' required placeholder="예: 김감독"')) +
      '<div class="grid grid-cols-2 gap-2">' +
      field("역할", selIn("role", [["촬영", "촬영"], ["편집", "편집"], ["촬영+편집", "촬영+편집"]], s.role)) +
      field("활동 지역", selIn("region", REGIONS.map(function (x) {
        return [x, x]
      }), s.region)) +
      field("이동 수단", selIn("car", [["자차", "자차"], ["대중교통", "대중교통"]], s.car)) +
      field("감독 앱 로그인 ID", textIn("login", s.login, ' placeholder="선택"')) +
      "</div>" +
      '<div class="flex justify-end gap-1.5 border-t border-border pt-3"><button type="button" data-act="close" class="' + B(V_OUT, SZ_SM) + '">취소</button><button type="submit" class="' + B(V_PRI, SZ_SM) + '">' + (m.id ? "저장" : "등록") + "</button></div></form>"
    return modalWrap(m.id ? "감독 정보 수정" : "감독 등록", body)
  }

  // ───────────────────────── 계약서
  function viewContracts(route) {
    var ct = state.ct
    if (route.query.view === "sent" && !ct._fromLink) {
      ct.tab = "sent"
      ct._fromLink = true
    }
    var body
    if (ct.tab === "edit") {
      body =
        '<div class="flex flex-wrap items-center gap-2 rounded-xl bg-card p-4 ring-1 ring-foreground/10"><input id="ct-name" data-slot="input" placeholder="계약서 이름(선택)" data-input="ct-name" class="' + INPUT + ' h-9 w-56" value="' + esc(ct.name) + '">' +
        '<button type="button" data-act="ct-upload" class="' + B(V_PRI, SZ_MD) + '">' + I("upload", "", ' data-icon="inline-start"') + "PDF 업로드</button></div>" +
        (state.contracts.length
          ? '<div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">' +
            state.contracts.map(function (c) {
              return (
                '<div class="flex items-center gap-3 rounded-xl bg-card p-3 ring-1 transition-colors ring-foreground/10 hover:ring-foreground/25"><button type="button" data-act="ct-open" data-id="' + c.id + '" class="flex min-w-0 flex-1 items-center gap-2 text-left">' +
                I("file-text", "size-5 shrink-0 text-muted-foreground") + '<span class="flex min-w-0 flex-col"><span class="truncate text-sm font-medium text-foreground">' + esc(c.name) +
                '</span><span class="text-xs text-muted-foreground">' + esc(c.pages + "p · 필드 " + c.fields + " · " + c.at) + "</span></span></button>" +
                '<button type="button" data-act="ct-del" data-id="' + c.id + '" aria-label="삭제" class="text-muted-foreground hover:text-destructive">' + I("trash-2", "size-4") + "</button></div>"
              )
            }).join("") +
            "</div>"
          : '<div class="rounded-xl bg-card p-10 text-center text-sm text-muted-foreground ring-1 ring-foreground/10">등록된 계약서가 없습니다. PDF를 올려 주세요.</div>')
    } else {
      var sent = state.res.filter(function (r) {
        return r.status === "서명 대기" || (r.status === "계약완료" && r.date >= TODAY)
      }).sort(function (a, b) {
        return a.status === b.status ? (a.date < b.date ? -1 : 1) : a.status === "서명 대기" ? -1 : 1
      })
      var waiting = sent.filter(function (r) {
        return r.status === "서명 대기"
      }).length
      body =
        '<div class="flex items-center gap-2 px-1 text-sm text-muted-foreground">발송 <b class="tabular-nums text-foreground">' + sent.length + "건</b> · 서명 대기 <b class=\"tabular-nums text-destructive\">" + waiting + "건</b></div>" +
        '<div data-slot="card" data-size="default" class="' + CARD + ' overflow-hidden"><div data-slot="card-content" class="p-0"><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border bg-muted/50 text-left text-xs text-muted-foreground"><th class="px-4 py-2.5 font-medium">계약번호</th><th class="px-4 py-2.5 font-medium">고객</th><th class="px-4 py-2.5 font-medium">본식일</th><th class="px-4 py-2.5 font-medium">계약서</th><th class="px-4 py-2.5 font-medium">서명 상태</th><th class="px-4 py-2.5 font-medium">처리</th></tr></thead><tbody>' +
        sent.map(function (r) {
          var w = r.status === "서명 대기"
          return (
            '<tr class="border-b border-border last:border-0 hover:bg-muted/40"><td class="px-4 py-3 font-medium tabular-nums text-foreground">' + esc(r.no) + '</td><td class="px-4 py-3 text-foreground">' + esc(r.bride) +
            '</td><td class="px-4 py-3 tabular-nums text-muted-foreground">' + esc(r.date) + '</td><td class="px-4 py-3 text-muted-foreground">' + esc((state.contracts[0] || { name: "기본 계약서" }).name) +
            '</td><td class="px-4 py-3">' + (w ? badge("서명 대기", "warn") : badge("서명 완료", "success")) + '</td><td class="px-4 py-3"><div class="flex items-center gap-1.5">' +
            (w ? '<button type="button" data-act="ct-resend" data-id="' + r.id + '" class="' + B(V_OUT, SZ_SM) + '">' + I("send", "", ' data-icon="inline-start"') + "재발송</button>" +
              '<button type="button" data-act="ct-sign" data-id="' + r.id + '" class="' + B(V_PRI, SZ_SM) + '">' + I("circle-check", "", ' data-icon="inline-start"') + "서명 완료 처리</button>" : '<span class="text-xs text-muted-foreground"></span>') +
            "</div></td></tr>"
          )
        }).join("") +
        "</tbody></table></div></div></div>"
    }
    return (
      '<div class="flex flex-col gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-semibold text-foreground">계약서</h1><p class="text-sm text-muted-foreground">PDF를 업로드해 필드를 배치하고, 발송/서명 현황을 확인합니다.</p></div>' +
      seg([["edit", "계약서 편집"], ["sent", "발송 현황"]], ct.tab, "ct-tab") + body + "</div>"
    )
  }

  // ───────────────────────── 잔금 조회
  function viewBalance() {
    var b = state.bal
    var result = ""
    if (b.ran) {
      var list = state.res.filter(function (r) {
        return r.date >= b.from && r.date <= b.to && (r.pay === "잔금 대기" || b.done[r.id])
      }).sort(function (x, y) {
        return x.date < y.date ? -1 : 1
      })
      var matched = list.filter(function (r) {
        return !b.done[r.id] && r.pay === "잔금 대기" && r.id % 3 !== 0
      })
      result = list.length
        ? '<div class="flex flex-wrap items-center justify-between gap-2"><span class="text-sm font-medium text-foreground">잔금 대기 ' + list.length + "건 · 입금 확인 " + matched.length + "건</span>" +
          '<button type="button" data-act="bal-all" class="' + B(V_PRI, SZ_MD) + '"' + (matched.length ? "" : " disabled") + ">" + I("circle-check", "", ' data-icon="inline-start"') + "확인된 " + matched.length + "건 일괄 완납</button></div>" +
          '<div class="overflow-hidden rounded-lg border border-border bg-card"><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border bg-muted/40 text-left text-xs text-muted-foreground"><th class="px-4 py-2.5 font-medium">본식일</th><th class="px-4 py-2.5 font-medium">계약번호</th><th class="px-4 py-2.5 font-medium">예약자</th><th class="px-3 py-2.5 text-right font-medium">잔금</th><th class="px-4 py-2.5 font-medium">입금내역 대조</th><th class="px-4 py-2.5 text-right font-medium">처리</th></tr></thead><tbody>' +
          list.map(function (r) {
            var done = b.done[r.id]
            var ok = r.id % 3 !== 0
            return (
              '<tr class="border-b border-border/60 last:border-0"><td class="px-4 py-3 tabular-nums text-muted-foreground">' + esc(r.date) + '</td><td class="px-4 py-3 font-medium tabular-nums text-foreground">' + esc(r.no) +
              '</td><td class="px-4 py-3 text-foreground">' + esc(r.bride) + '</td><td class="px-3 py-3 text-right font-semibold tabular-nums text-foreground">' + won(r.balance) + '</td><td class="px-4 py-3">' +
              (done ? badge("완납 처리됨", "success") : ok ? badge("입금 확인 · " + esc(r.bride) + " " + won(r.balance), "info") : badge("입금내역 없음", "muted")) +
              '</td><td class="px-4 py-3 text-right">' +
              (done ? '<span class="text-xs text-success">완료</span>' : '<button type="button" data-act="bal-one" data-id="' + r.id + '" class="' + B(ok ? V_PRI : V_OUT, SZ_SM) + '">' + I("circle-check", "", ' data-icon="inline-start"') + "완납</button>") +
              "</td></tr>"
            )
          }).join("") +
          "</tbody></table></div></div>"
        : '<div class="flex items-center justify-center gap-2 rounded-xl bg-card py-16 text-sm text-muted-foreground ring-1 ring-foreground/10">이 기간에 잔금 대기 예약이 없습니다.</div>'
    } else {
      result = '<div class="flex items-center justify-center gap-2 rounded-xl bg-card py-16 text-sm text-muted-foreground ring-1 ring-foreground/10">조회 조건을 정하고 <b class="text-foreground">조회</b>를 눌러주세요.</div>'
    }
    return (
      '<div class="flex flex-col gap-4 p-4 md:p-6"><div class="flex flex-wrap items-center gap-2">' + I("wallet", "size-5 text-primary") +
      '<h1 class="text-lg font-semibold text-foreground">잔금 조회</h1><span class="text-xs text-muted-foreground">본식일 기준 잔금 대기 예약을 계좌 입금내역과 대조해 한 번에 완납 처리합니다.</span></div>' +
      '<div class="flex flex-wrap items-end gap-3 rounded-xl bg-card p-3.5 ring-1 ring-foreground/10">' +
      '<div class="flex flex-col gap-1"><label class="text-xs text-muted-foreground">본식일 시작</label><input id="bal-from" type="date" data-slot="input" data-change="bal-from" class="' + INPUT + ' h-8 w-40 tabular-nums" value="' + esc(b.from) + '"></div>' +
      '<div class="flex flex-col gap-1"><label class="text-xs text-muted-foreground">본식일 종료</label><input id="bal-to" type="date" data-slot="input" data-change="bal-to" class="' + INPUT + ' h-8 w-40 tabular-nums" value="' + esc(b.to) + '"></div>' +
      '<div class="flex flex-col gap-1"><label class="text-xs text-muted-foreground">입금내역 조회범위</label><select data-change="bal-range" class="' + NSELECT + '">' +
      opts([["15", "최근 15일"], ["30", "최근 30일"], ["45", "최근 45일"], ["60", "최근 60일"], ["90", "최근 90일"]], b.range) + "</select></div>" +
      '<button type="button" data-act="bal-run" class="' + B(V_PRI, SZ_SM.replace("h-7 ", ""), "h-8") + '">' + I("refresh-cw") + "조회</button></div>" +
      result + "</div>"
    )
  }

  // ───────────────────────── 출퇴근 현황
  function attSteps(r) {
    var shoot = hmAdd(r.time, -60)
    return [
      ["기상", hmAdd(shoot, -180)],
      ["출발", hmAdd(shoot, -120)],
      ["도착", hmAdd(shoot, -20)],
      ["촬영종료", hmAdd(r.time, 90)],
    ]
  }
  function attState(r) {
    if (r.date < TODAY) return "촬영종료"
    if (r.date > TODAY) return "대기"
    var now = nowHM()
    var st = attSteps(r)
    if (now >= st[3][1]) return "촬영종료"
    if (now >= st[0][1]) return "진행중"
    return "대기"
  }
  function viewAttendance() {
    var a = state.at
    var all = state.res.filter(function (r) {
      return r.date === a.day && r.dir
    }).sort(function (x, y) {
      return x.time < y.time ? -1 : 1
    })
    var ended = all.filter(function (r) {
      return attState(r) === "촬영종료"
    }).length
    var people = {}
    all.forEach(function (r) {
      people[r.dir] = 1
    })
    var q = a.q.trim()
    var list = all.filter(function (r) {
      if (a.dir !== "전체" && String(r.dir) !== a.dir) return false
      var s = attState(r)
      if (a.status === "진행중" && s !== "진행중") return false
      if (a.status === "촬영종료" && s !== "촬영종료") return false
      if (q && (staffName(r.dir) + r.venue + r.bride).indexOf(q) < 0) return false
      return true
    })
    var now = nowHM()
    var rows = list.map(function (r) {
      var st = attSteps(r)
      var s = attState(r)
      return (
        '<div class="flex flex-col gap-3 rounded-xl bg-card p-3 ring-1 ring-foreground/10 sm:flex-row sm:items-center"><div class="flex min-w-0 flex-1 items-center gap-3"><div class="flex w-16 shrink-0 flex-col items-center"><span class="text-lg font-bold tabular-nums text-foreground">' +
        esc(r.time) + '</span><span class="text-[11px] text-muted-foreground">촬영 ' + esc(hmAdd(r.time, -60)) + '</span></div><div class="flex min-w-0 flex-1 flex-col gap-0.5"><div class="flex items-center gap-1.5"><span class="truncate text-sm font-semibold text-foreground">' +
        esc(staffName(r.dir)) + "</span>" + (s === "촬영종료" ? badge("촬영종료", "info") : s === "진행중" ? badge("진행중", "success") : badge("대기", "muted")) +
        '</div><span class="flex items-center gap-1 truncate text-xs text-muted-foreground">' + I("map-pin", "size-3 shrink-0") + esc(r.venue + " · " + r.bride) + "</span></div></div>" +
        '<div class="flex flex-wrap gap-1.5">' +
        st.map(function (x) {
          var on = r.date < TODAY || (r.date === TODAY && now >= x[1])
          return '<span class="rounded-md ' + (on ? "bg-primary/10 font-medium text-primary" : "bg-muted text-muted-foreground") + ' px-1.5 py-0.5 text-xs tabular-nums">' + x[0] + " " + (on ? x[1] : "--:--") + "</span>"
        }).join("") +
        "</div></div>"
      )
    }).join("")
    return (
      '<div class="flex flex-col gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-semibold text-foreground">출퇴근 현황</h1><p class="text-sm text-muted-foreground">날짜별로 감독의 기상·출발·도착·촬영종료 현황을 확인합니다.</p></div>' +
      '<div class="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-card p-3 ring-1 ring-foreground/10"><div class="flex items-center gap-2">' +
      '<button type="button" aria-label="이전 날" data-act="at-day" data-v="-1" class="' + B(V_OUT, SZ_I7) + '">' + I("chevron-left") + "</button>" +
      '<div class="flex items-center gap-2">' + I("calendar-days", "size-4 text-muted-foreground") +
      '<input id="at-day" type="date" data-change="at-day-set" class="rounded-lg border border-input bg-background px-2 py-1 text-sm tabular-nums outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30" value="' + esc(a.day) + '"><span class="text-sm font-medium text-foreground">' + DOW[dow(a.day)] + "요일</span></div>" +
      '<button type="button" aria-label="다음 날" data-act="at-day" data-v="1" class="' + B(V_OUT, SZ_I7) + '">' + I("chevron-right") + "</button>" +
      '<button type="button" data-act="at-day" data-v="0" class="' + B(V_GHO, SZ_SM) + '">오늘</button></div>' +
      '<div class="flex items-center gap-2">' + badge("배정 " + Object.keys(people).length + "명", "muted") + badge("촬영종료 " + ended, "info") + "</div></div>" +
      '<div class="flex flex-wrap items-center gap-2 rounded-xl bg-card p-3 ring-1 ring-foreground/10"><select data-change="at-dir" class="' + NSELECT + '">' +
      opts([["전체", "감독 전체"]].concat(shooters().map(function (s) {
        return [String(s.id), s.name]
      })), a.dir) +
      '</select><select data-change="at-status" class="' + NSELECT + '">' + opts([["전체", "전체"], ["진행중", "진행중"], ["촬영종료", "촬영종료"]], a.status) + "</select>" +
      '<input id="at-q" placeholder="감독·예식장·예약자 검색" data-input="at-q" class="h-8 flex-1 rounded-lg border border-input bg-background px-2.5 text-sm outline-none focus-visible:border-ring sm:min-w-48 sm:flex-none" value="' + esc(a.q) + '"></div>' +
      (rows ? '<div class="flex flex-col gap-2">' + rows + "</div>" : '<div class="rounded-xl bg-card p-10 text-center text-sm text-muted-foreground ring-1 ring-foreground/10">' + (all.length ? "조건에 맞는 촬영이 없습니다." : "이 날짜에 배정된 촬영이 없습니다.") + "</div>") +
      "</div>"
    )
  }

  // ───────────────────────── 납품 관리
  function viewDelivery() {
    var pend = state.res.filter(function (r) {
      return r.status === "촬영 완료" || r.status === "편집 중"
    }).sort(function (a, b) {
      return a.date < b.date ? -1 : 1
    })
    var done = state.res.filter(function (r) {
      return r.status === "납품 완료"
    }).sort(function (a, b) {
      return a.deliveredAt < b.deliveredAt ? 1 : -1
    }).slice(0, 8)
    var links = state.dl.links
    function row(r) {
      var delivered = r.status === "납품 완료"
      var link = delivered ? r.link : links[r.id] || ""
      var left = diffDays(deadline(r), TODAY)
      return (
        '<tr class="border-b border-border last:border-0 hover:bg-muted/40"><td class="px-4 py-3 font-medium tabular-nums text-foreground">' + esc(r.no) + '</td><td class="px-4 py-3 text-foreground">' + esc(r.bride) +
        '</td><td class="px-4 py-3 tabular-nums text-muted-foreground">' + esc(r.date) + "</td>" +
        '<td class="px-4 py-3 text-foreground">' + (r.editor ? esc(staffName(r.editor)) : "미배정") + "</td>" +
        '<td class="px-4 py-3">' + badge(esc(r.status), r.status === "납품 완료" ? "success" : r.status === "편집 중" ? "warn" : "info") +
        (!delivered && left <= 7 ? " " + badge(left < 0 ? "기한 " + -left + "일 지남" : "D-" + left, "danger") : "") + "</td>" +
        '<td class="px-4 py-3"><div class="flex items-center gap-1.5"><input id="dl-' + r.id + '" data-slot="input" placeholder="공유링크 붙여넣기 또는 자동생성" data-input="dl-link" data-id="' + r.id + '" class="' + INPUT + ' h-8 w-52" value="' + esc(link) + '"' + (delivered ? " readonly" : "") + ">" +
        '<button type="button" title="웍스 드라이브에서 자동생성" data-act="dl-gen" data-id="' + r.id + '" class="group/button inline-flex items-center justify-center rounded-lg border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4 ' + V_OUT + ' size-8 h-8 w-8 shrink-0"' + (delivered ? " disabled" : "") + ">" +
        I("wand-sparkles", "size-3.5") + "</button></div></td>" +
        '<td class="px-4 py-3 tabular-nums text-muted-foreground">' + (delivered ? esc(r.deliveredAt + " / " + md(addDays(r.deliveredAt, state.settings.linkDays))) : "-") + "</td>" +
        '<td class="px-4 py-3"><button type="button" data-act="dl-send" data-id="' + r.id + '" class="' + B(delivered ? V_OUT : V_PRI, SZ_SM) + '"' + (link ? "" : " disabled") + ">" + I("send", "", ' data-icon="inline-start"') + (delivered ? "재발송" : "메일 발송") + "</button></td></tr>"
      )
    }
    return (
      '<div class="flex flex-col gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-semibold text-foreground">납품 관리</h1><p class="text-sm text-muted-foreground">공유링크를 넣고 [메일 발송]을 누르면 고객에게 납품 메일이 전송되고 납품완료로 기록됩니다.</p></div>' +
      '<div data-slot="card" data-size="default" class="' + CARD.replace(" overflow-hidden", "") + ' overflow-hidden"><div data-slot="card-content" class="p-0"><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border bg-muted/50 text-left text-xs text-muted-foreground">' +
      ["계약번호", "고객", "촬영일", "편집 담당", "진행 상태", "공유링크", "납품일 / 만료", "발송"].map(function (h) {
        return '<th class="px-4 py-2.5 font-medium">' + h + "</th>"
      }).join("") +
      "</tr></thead><tbody>" +
      (pend.length ? pend.map(row).join("") : '<tr><td colspan="8" class="px-4 py-8 text-center text-sm text-muted-foreground">납품할 촬영이 없습니다.</td></tr>') +
      (done.length ? '<tr class="border-b border-border bg-muted/50"><td colspan="8" class="px-4 py-2 text-xs font-medium text-muted-foreground">최근 납품 완료</td></tr>' + done.map(row).join("") : "") +
      "</tbody></table></div></div></div></div>"
    )
  }

  // ───────────────────────── 정산
  function settleRows(mon) {
    var sun = addDays(mon, 6)
    var S = state.settings
    var map = {}
    function get(id) {
      return (map[id] = map[id] || { id: id, shoot: 0, edit: 0, travel: 0 })
    }
    state.res.forEach(function (r) {
      if (r.dir && r.date >= mon && r.date <= sun) {
        var x = get(r.dir)
        x.shoot++
        x.travel += S.travel[r.region] || 0
      }
      if (r.editor && r.status === "납품 완료" && r.deliveredAt >= mon && r.deliveredAt <= sun) get(r.editor).edit++
    })
    return Object.keys(map).map(function (k) {
      var x = map[k]
      x.total = x.shoot * S.shootRate + x.edit * S.editRate + x.travel
      x.paid = !!state.paid[mon + ":" + x.id]
      return x
    }).filter(function (x) {
      return staffById(x.id)
    }).sort(function (a, b) {
      return b.total - a.total
    })
  }
  function viewSettlement() {
    var mon = state.se.week
    var sun = addDays(mon, 6)
    var S = state.settings
    var rows = settleRows(mon)
    var tot = 0, sh = 0, ed = 0, shN = 0, edN = 0, wait = 0, waitN = 0
    rows.forEach(function (x) {
      tot += x.total
      sh += x.shoot * S.shootRate
      ed += x.edit * S.editRate
      shN += x.shoot
      edN += x.edit
      if (!x.paid) {
        wait += x.total
        waitN++
      }
    })
    function kcard(inner) {
      return '<div data-slot="card" data-size="default" class="' + CARD + '"><div data-slot="card-content" class="flex flex-col gap-1 p-4">' + inner + "</div></div>"
    }
    var dash = '<span class="text-muted-foreground/50"></span>'
    return (
      '<div class="flex flex-col gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-semibold text-foreground">정산 · 주급</h1><p class="text-sm text-muted-foreground">주 단위(월~일)로 감독 촬영 수당과 편집자 편집 수당을 집계해 한눈에 보고 입금 처리합니다.</p></div>' +
      '<div data-slot="card" data-size="default" class="' + CARD + '"><div data-slot="card-content" class="flex flex-wrap items-center gap-3 p-3">' +
      '<button type="button" aria-label="지난 주" data-act="se-week" data-v="-1" class="' + B(V_OUT, SZ_I8) + '">' + I("chevron-left") + "</button>" +
      '<input id="se-date" type="date" data-slot="input" data-change="se-date" class="h-8 ' + INPUT + ' w-40" value="' + esc(mon) + '">' +
      '<button type="button" aria-label="다음 주" data-act="se-week" data-v="1" class="' + B(V_OUT, SZ_I8) + '">' + I("chevron-right") + "</button>" +
      '<span class="text-sm font-medium text-foreground">' + mon.replace(/-/g, ".") + " ~ " + md(sun).replace("-", ".") + ' <span class="text-muted-foreground">주급</span></span>' +
      '<button type="button" data-act="se-week" data-v="0" class="' + B(V_GHO, SZ_SM) + '">이번 주</button>' +
      '<span class="ml-auto text-xs text-muted-foreground">촬영 수당 ' + num(S.shootRate) + "원/건 · 편집 수당 " + num(S.editRate) + '원/건<a href="#/settings?tab=pay" class="ml-1 text-muted-foreground/70">(환경설정에서 변경)</a></span></div></div>' +
      '<div class="grid grid-cols-2 gap-3 lg:grid-cols-4">' +
      kcard('<span class="text-sm text-muted-foreground">주 정산 총액</span><span class="text-2xl font-semibold tabular-nums text-foreground">' + won(tot) + "</span>") +
      kcard('<span class="flex items-center gap-1.5 text-sm text-muted-foreground">' + I("camera", "size-3.5") + '촬영 수당 합계</span><span class="text-2xl font-semibold tabular-nums text-info-foreground">' + won(sh) + '</span><span class="text-xs text-muted-foreground">촬영 ' + shN + "건</span>") +
      kcard('<span class="flex items-center gap-1.5 text-sm text-muted-foreground">' + I("scissors", "size-3.5") + '편집 수당 합계</span><span class="text-2xl font-semibold tabular-nums text-warning-foreground">' + won(ed) + '</span><span class="text-xs text-muted-foreground">편집 ' + edN + "건</span>") +
      kcard('<span class="text-sm text-muted-foreground">지급 대기</span><span class="text-2xl font-semibold tabular-nums ' + (wait ? "text-destructive" : "text-success") + '">' + won(wait) + '</span><span class="text-xs text-muted-foreground">' + waitN + "명 미입금</span>") +
      "</div>" +
      '<div class="flex items-center justify-between"><span class="text-sm font-medium text-foreground">지급 대상 ' + rows.length + "명</span>" +
      '<button type="button" data-act="se-all" class="' + B(V_OUT, SZ_MD) + '"' + (waitN ? "" : " disabled") + ">" + I("wallet", "", ' data-icon="inline-start"') + "대기 " + waitN + "명 일괄 입금</button></div>" +
      (rows.length
        ? '<div class="overflow-hidden rounded-lg border border-border"><div class="overflow-x-auto"><table class="w-full text-sm"><thead><tr class="border-b border-border bg-muted/40 text-left text-xs text-muted-foreground"><th class="px-4 py-2.5 font-medium">이름</th><th class="px-3 py-2.5 text-right font-medium">촬영 수당</th><th class="px-3 py-2.5 text-right font-medium">편집 수당</th><th class="px-3 py-2.5 text-right font-medium">교통비</th><th class="px-3 py-2.5 text-right font-medium">합계</th><th class="px-4 py-2.5 text-right font-medium">입금</th></tr></thead><tbody>' +
          rows.map(function (x) {
            return (
              '<tr class="border-b border-border/60 last:border-0"><td class="px-4 py-3"><span class="font-semibold text-foreground">' + esc(staffName(x.id)) + "</span></td>" +
              '<td class="px-3 py-3 text-right tabular-nums">' + (x.shoot ? '<span class="text-foreground">' + won(x.shoot * S.shootRate) + '<span class="ml-1 text-xs text-muted-foreground">(' + x.shoot + "건)</span></span>" : dash) + "</td>" +
              '<td class="px-3 py-3 text-right tabular-nums">' + (x.edit ? '<span class="text-foreground">' + won(x.edit * S.editRate) + '<span class="ml-1 text-xs text-muted-foreground">(' + x.edit + "건)</span></span>" : dash) + "</td>" +
              '<td class="px-3 py-3 text-right tabular-nums text-muted-foreground">' + (x.travel ? won(x.travel) : dash) + "</td>" +
              '<td class="px-3 py-3 text-right text-base font-bold tabular-nums text-foreground">' + won(x.total) + "</td>" +
              '<td class="px-4 py-3 text-right">' +
              (x.paid
                ? '<span class="inline-flex items-center gap-1.5">' + badge("입금완료", "success") + '<button type="button" data-act="se-undo" data-id="' + x.id + '" class="' + B(V_GHO, SZ_XS, "text-muted-foreground") + '">취소</button></span>'
                : '<button type="button" data-act="se-pay" data-id="' + x.id + '" class="' + B(V_PRI, SZ_SM) + '">' + I("circle-check", "", ' data-icon="inline-start"') + "입금</button>") +
              "</td></tr>"
            )
          }).join("") +
          "</tbody></table></div></div>"
        : '<div class="rounded-xl bg-card p-10 text-center text-sm text-muted-foreground ring-1 ring-foreground/10">이 주에는 정산할 촬영·편집이 없습니다.</div>') +
      "</div>"
    )
  }

  // ───────────────────────── 환경설정
  var CFG_TABS = [
    ["product", "상품·할인"],
    ["pay", "수당·교통비"],
    ["bank", "입금연동"],
    ["mail", "메일 발송"],
    ["sheet", "구글시트"],
    ["cap", "접수 상한"],
    ["tpl", "메시지 템플릿"],
    ["kakao", "카카오 연동"],
  ]
  function cfgCard(title, desc, content, action) {
    return (
      '<div data-slot="card" data-size="default" class="' + CARD + '"><div data-slot="card-header" class="' + CARD_HEAD + (action ? " flex-row items-center justify-between" : "") + '">' +
      (action ? '<div class="flex flex-col gap-1">' : "") +
      '<div data-slot="card-title" class="font-medium group-data-[size=sm]/card:text-sm text-base">' + title + '</div><div data-slot="card-description" class="text-sm text-muted-foreground">' + desc + "</div>" +
      (action ? "</div>" + action : "") +
      '</div><div data-slot="card-content" class="px-(--card-spacing) flex flex-col gap-3">' + content + "</div></div>"
    )
  }
  function moneyIn(name, v, extra) {
    return '<input data-slot="input" inputmode="numeric" name="' + name + '" class="w-full ' + INPUT + ' h-9 text-right tabular-nums" value="' + num(v) + '"' + (extra || "") + ">"
  }
  function itemBlock(kind, it, isDefault) {
    var nameLabel = kind === "p" ? "상품 이름" : "옵션 이름"
    return (
      '<form data-submit="cfg-item" data-kind="' + kind + '" data-id="' + it.id + '" class="flex flex-col gap-2 rounded-lg border border-border p-3">' +
      field(nameLabel, textIn("name", it.name, " required")) +
      '<div class="grid grid-cols-2 gap-2">' + field("공급가액", moneyIn("supply", it.supply)) + field("부가세", moneyIn("vat", it.vat)) + "</div>" +
      '<div class="flex items-center justify-between border-t border-border pt-2"><span class="flex items-center gap-1.5 text-sm text-muted-foreground">총액 <span class="font-semibold tabular-nums text-foreground">' + won(it.supply + it.vat) + "</span>" +
      (isDefault ? '<span class="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">기본상품</span>' : "") + '</span><div class="flex gap-1.5">' +
      (kind === "p" ? (isDefault ? '<button type="button" class="' + B(V_PRI, SZ_SM) + '">기본상품 ✓</button>' : '<button type="button" data-act="cfg-default" data-id="' + it.id + '" class="' + B(V_OUT, SZ_SM) + '">기본으로 설정</button>') : "") +
      '<button type="submit" class="' + B(V_OUT, SZ_SM) + '">저장</button><button type="button" data-act="cfg-item-del" data-kind="' + kind + '" data-id="' + it.id + '" class="' + B(V_DES, SZ_SM) + '">' + I("trash-2", "", ' data-icon="inline-start"') + "삭제</button></div></div></form>"
    )
  }
  function newBlock(kind) {
    var nm = kind === "p" ? "상품" : "옵션"
    return (
      '<form data-submit="cfg-add" data-kind="' + kind + '" class="flex flex-col gap-2 rounded-lg border border-dashed border-border p-3"><span class="text-sm font-medium text-foreground">새 ' + nm + " 추가</span>" +
      field(nm + " 이름", textIn("name", "", ' required placeholder="' + (kind === "p" ? "예: 프리미엄 본식 촬영" : "예: 원본 제공 / 상영회 영상") + '"')) +
      '<div class="grid grid-cols-2 gap-2">' + field("공급가액", moneyIn("supply", 0, ' placeholder="0"')) + field("부가세", moneyIn("vat", 0, ' placeholder="0"')) + "</div>" +
      '<button type="submit" class="' + B(V_PRI, SZ_SM, "self-end") + '">' + I("plus", "", ' data-icon="inline-start"') + nm + " 추가</button></form>"
    )
  }
  function saveBtn(label, act) {
    return '<div class="mt-1 flex justify-end"><button type="' + (act ? "button" : "submit") + '"' + (act ? ' data-act="' + act + '"' : "") + ' class="' + B(V_PRI, SZ_MD) + '">' + I("save", "", ' data-icon="inline-start"') + label + "</button></div>"
  }
  function viewSettings(route) {
    var S = state.settings
    if (route.query.tab && !state.cfg._q) {
      state.cfg.tab = route.query.tab
      state.cfg._q = true
    }
    var t = state.cfg.tab
    var panel = ""
    if (t === "product") {
      panel =
        cfgCard("상품 관리", "상품 이름·공급가액·부가세를 등록하고, 예약별로 매핑합니다. (총액 = 공급가 + 부가세) · ‘기본상품’으로 지정하면 새 예약의 상품·금액이 자동으로 그 상품으로 세팅됩니다.",
          S.products.map(function (p) {
            return itemBlock("p", p, p.id === S.defaultProduct)
          }).join("") + newBlock("p")) +
        cfgCard("옵션 관리", "추가 옵션(앨범·원본·연장 등)을 등록합니다. 예약 계약·정산에서 선택하면 금액에 더해집니다.",
          S.options.map(function (p) {
            return itemBlock("o", p, false)
          }).join("") + newBlock("o")) +
        cfgCard("할인 정책", "예약 시 적용 가능한 할인 항목입니다.",
          '<div class="flex flex-col gap-2">' +
          S.discounts.map(function (d) {
            return (
              '<div class="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5"><input id="dc-n-' + d.id + '" data-slot="input" placeholder="할인 이름 (예: 얼리버드)" data-input="dc-name" data-id="' + d.id + '" class="h-8 w-full ' + INPUT + ' flex-1" value="' + esc(d.name) + '">' +
              '<span class="text-sm text-muted-foreground">-</span><input id="dc-a-' + d.id + '" data-slot="input" inputmode="numeric" placeholder="0" data-input="dc-amt" data-id="' + d.id + '" class="h-8 ' + INPUT + ' w-28 text-right tabular-nums" value="' + num(d.amount) + '"><span class="text-sm text-muted-foreground">원</span>' +
              sw(d.on, "dc-toggle", ' data-id="' + d.id + '"') +
              '<button type="button" aria-label="삭제" data-act="dc-del" data-id="' + d.id + '" class="' + B(V_GHO, SZ_I8, "text-destructive") + '">' + I("trash-2", "size-4") + "</button></div>"
            )
          }).join("") +
          "</div>" + saveBtn("할인 정책 저장", "dc-save"),
          '<button type="button" data-act="dc-add" class="' + B(V_OUT, SZ_SM) + '">' + I("plus", "", ' data-icon="inline-start"') + "할인 추가</button>")
    } else if (t === "pay") {
      panel = cfgCard("수당·교통비", "정산 화면의 주급 계산에 쓰입니다. 촬영 1건, 편집 1건 기준 금액과 지역별 교통비를 정합니다.",
        '<form data-submit="cfg-pay" class="flex flex-col gap-3"><div class="grid grid-cols-2 gap-2">' + field("촬영 수당 (원/건)", moneyIn("shootRate", S.shootRate)) + field("편집 수당 (원/건)", moneyIn("editRate", S.editRate)) +
        '</div><span class="text-sm font-medium text-foreground">지역별 교통비 (원/건)</span><div class="grid grid-cols-2 gap-2 sm:grid-cols-3">' +
        REGIONS.map(function (rg) {
          return field(rg, moneyIn("t_" + rg, S.travel[rg]))
        }).join("") + "</div>" + saveBtn("수당·교통비 저장") + "</form>")
    } else if (t === "bank") {
      panel = cfgCard("입금연동", "계좌 입금내역을 불러와 잔금 조회 화면에서 예약과 자동으로 대조합니다.",
        '<form data-submit="cfg-bank" class="flex flex-col gap-3"><div class="grid grid-cols-2 gap-2">' + field("은행", selIn("bank", [["가상은행", "가상은행"], ["샘플은행", "샘플은행"], ["예시은행", "예시은행"]], S.bank)) + field("계좌번호", textIn("account", S.account)) +
        '</div><div class="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5"><span class="flex-1 text-sm text-foreground">입금자명·금액이 같으면 자동으로 매칭</span>' + sw(S.autoMatch, "bank-auto") + "</div>" +
        '<div class="flex flex-wrap items-center justify-end gap-2"><button type="button" data-act="ext-test" class="' + B(V_OUT, SZ_MD) + '">' + I("refresh-cw", "", ' data-icon="inline-start"') + "연결 테스트</button>" + '<button type="submit" class="' + B(V_PRI, SZ_MD) + '">' + I("save", "", ' data-icon="inline-start"') + "저장</button></div></form>")
    } else if (t === "mail") {
      panel = cfgCard("메일 발송", "납품 메일의 발신 정보와 공유링크 유효 기간을 정합니다.",
        '<form data-submit="cfg-mail" class="flex flex-col gap-3"><div class="grid grid-cols-2 gap-2">' + field("보내는 사람", textIn("mailFrom", S.mailFrom)) + field("보내는 주소", textIn("mailAddr", S.mailAddr, ' type="email"')) + "</div>" +
        field("납품 메일 제목", textIn("mailSubject", S.mailSubject)) + '<div class="grid grid-cols-2 gap-2">' + field("공유링크 유효 기간(일)", moneyIn("linkDays", S.linkDays)) + "</div>" + saveBtn("메일 설정 저장") + "</form>")
    } else if (t === "sheet") {
      panel = cfgCard("구글시트", "예약 목록을 구글 스프레드시트와 주기적으로 맞춥니다.",
        '<form data-submit="cfg-sheet" class="flex flex-col gap-3">' + field("시트 주소", textIn("sheetUrl", S.sheetUrl, ' placeholder="https://docs.google.com/spreadsheets/..."')) +
        '<div class="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5"><span class="flex-1 text-sm text-foreground">매시간 자동 동기화</span>' + sw(S.sheetSync, "sheet-sync") + "</div>" +
        '<div class="flex flex-wrap items-center justify-end gap-2"><button type="button" data-act="ext-test" class="' + B(V_OUT, SZ_MD) + '">' + I("refresh-cw", "", ' data-icon="inline-start"') + "지금 동기화</button>" + '<button type="submit" class="' + B(V_PRI, SZ_MD) + '">' + I("save", "", ' data-icon="inline-start"') + "저장</button></div></form>")
    } else if (t === "cap") {
      var oc = overCap()
      panel = cfgCard("접수 상한", "하루에 받을 수 있는 최대 예약 건수입니다. 넘치면 예약 관리 화면 상단에 알림이 뜹니다.",
        '<form data-submit="cfg-cap" class="flex flex-col gap-3"><div class="grid grid-cols-2 gap-2">' + field("하루 최대 접수 (건)", moneyIn("cap", S.cap)) +
        '</div><p class="text-sm text-muted-foreground">현재 상한을 넘은 날짜: <b class="tabular-nums text-foreground">' + oc.length + "일</b></p>" + saveBtn("접수 상한 저장") + "</form>")
    } else if (t === "tpl") {
      var TA = "w-full " + INPUT + " resize-none"
      panel = cfgCard("메시지 템플릿", "자동 발송 메시지 문구입니다. {예약자}, {본식일}, {예식장}, {잔금}, {계좌}, {링크} 자리에 예약 정보가 들어갑니다.",
        '<form data-submit="cfg-tpl" class="flex flex-col gap-3">' +
        [["confirm", "예약 접수 안내"], ["balance", "잔금 안내"], ["delivery", "납품 안내"]].map(function (x) {
          return field(x[1], '<textarea name="' + x[0] + '" rows="3" class="' + TA + '" style="min-height:76px">' + esc(S.tpl[x[0]]) + "</textarea>")
        }).join("") + saveBtn("템플릿 저장") + "</form>")
    } else {
      panel = cfgCard("카카오 연동", "카카오 비즈톡(알림톡) 발신 채널을 연결합니다.",
        '<form data-submit="cfg-kakao" class="flex flex-col gap-3"><div class="grid grid-cols-2 gap-2">' + field("채널 ID", textIn("kakaoId", S.kakaoId)) + field("발신 프로필", '<div class="flex h-9 items-center">' + (S.kakaoOn ? badge("연결됨", "success") : badge("연결 안 됨", "muted")) + "</div>") +
        '</div><div class="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5"><span class="flex-1 text-sm text-foreground">알림톡 자동 발송 사용</span>' + sw(S.kakaoOn, "kakao-on") + "</div>" +
        '<div class="flex flex-wrap items-center justify-end gap-2"><button type="button" data-act="ext-test" class="' + B(V_OUT, SZ_MD) + '">' + I("send", "", ' data-icon="inline-start"') + "테스트 발송</button>" + '<button type="submit" class="' + B(V_PRI, SZ_MD) + '">' + I("save", "", ' data-icon="inline-start"') + "저장</button></div></form>")
    }
    return (
      '<div class="flex flex-col gap-4"><div class="flex flex-col gap-1"><h1 class="text-xl font-semibold text-foreground">환경설정</h1><p class="text-sm text-muted-foreground">상품 가격, 할인 정책, 지역별 교통비, 자동 발송 메시지, 카카오 연동을 관리합니다.</p></div>' +
      '<div data-orientation="horizontal" data-slot="tabs" class="group/tabs flex data-horizontal:flex-col gap-4"><div style="max-width:100%;overflow-x:auto"><div data-orientation="horizontal" role="tablist" data-slot="tabs-list" data-variant="default" class="group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none bg-muted">' +
      CFG_TABS.map(function (x) {
        var on = x[0] === t
        return '<button type="button" role="tab" aria-selected="' + on + '"' + (on ? ' data-active=""' : "") + ' data-orientation="horizontal" data-slot="tabs-trigger" data-act="cfg-tab" data-v="' + x[0] + '" class="' + TAB + '">' + x[1] + "</button>"
      }).join("") +
      '</div></div><div data-orientation="horizontal" role="tabpanel" data-slot="tabs-content" class="flex-1 text-sm outline-none flex flex-col gap-4">' + panel + "</div></div></div>"
    )
  }

  // ───────────────────────── 라우팅
  var ROUTES = {
    "/": ["대시보드", viewDashboard],
    "/reservations": ["예약 관리", viewReservations],
    "/chats": ["채팅 관리", viewChats],
    "/referrals": ["짝꿍 관리", viewReferrals],
    "/schedule": ["스케줄 배정", viewSchedule],
    "/staff": ["팀 관리", viewStaff],
    "/contracts": ["계약서", viewContracts],
    "/balance": ["잔금 조회", viewBalance],
    "/attendance": ["출퇴근 현황", viewAttendance],
    "/delivery": ["납품 관리", viewDelivery],
    "/settlement": ["정산", viewSettlement],
    "/settings": ["환경설정", viewSettings],
  }
  function render(route) {
    var r = ROUTES[route.path] || ROUTES["/"]
    var path = ROUTES[route.path] ? route.path : "/"
    var m = state.modal
    var modal = ""
    if (m) {
      if (m.type === "res") modal = modalRes(m)
      else if (m.type === "assign") modal = modalAssign(m)
      else if (m.type === "staff") modal = modalStaff(m)
    }
    return (
      '<div class="flex min-h-screen bg-background">' + sidebar(path) +
      '<div class="flex min-w-0 flex-1 flex-col lg:pl-64">' + header(r[0]) +
      '<main class="flex-1 p-4 md:p-6" style="padding-bottom:88px">' + r[1](route) + "</main></div></div>" + modal
    )
  }
  // 다시 그릴 때 입력 중이던 칸의 커서를 지킨다
  function rerender() {
    var a = document.activeElement
    var id = a && a.id
    var s = null, e = null
    try {
      s = a.selectionStart
      e = a.selectionEnd
    } catch (x) {}
    Demo.update()
    if (id) {
      var el = document.getElementById(id)
      if (el) {
        el.focus()
        try {
          if (s != null) el.setSelectionRange(s, e)
        } catch (x) {}
      }
    }
  }
  function closeModal() {
    state.modal = null
    rerender()
  }
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "modal-bg") closeModal()
    if (e.target && e.target.id === "nav-bg") {
      state.nav = false
      rerender()
    }
    if (e.target.closest && e.target.closest("[data-nav]")) state.nav = false
  })
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && state.modal) closeModal()
  })
  // 한글 입력(조합) 중에는 다시 그리지 않고, 조합이 끝나면 반영한다
  document.addEventListener("compositionend", function (e) {
    var el = e.target.closest && e.target.closest("[data-input]")
    if (el) el.dispatchEvent(new Event("input", { bubbles: true }))
  })
  function onInput(name, fn) {
    Demo.on(name, function (v, el, e) {
      if (e && e.isComposing) return
      fn(v, el, e)
    })
  }
  function toInt(v) {
    return parseInt(String(v || "").replace(/[^0-9]/g, ""), 10) || 0
  }

  // ───────────────────────── 동작: 공통
  Demo.on("nav", function () {
    state.nav = !state.nav
    rerender()
  })
  Demo.on("close", closeModal)
  Demo.on("logout", function () {
    Demo.toast("체험판에서는 로그아웃되지 않습니다")
  })
  Demo.on("extra", function () {
    Demo.toast("부가기능: 예약 일괄 문자, 데이터 백업 (체험판에서는 실행되지 않습니다)")
  })
  Demo.on("trash", function () {
    Demo.toast(state.trash.length ? "휴지통에 " + state.trash.length + "건이 있습니다 (삭제한 예약·감독)" : "휴지통이 비어 있습니다")
  })
  Demo.on("bell", function () {
    var c = counts()
    var bo = state.blackout.filter(function (b) {
      return b.status === "대기"
    }).length
    Demo.toast("새 알림: 승인대기 " + c.승인대기 + "건 · 서명 대기 " + c["서명 대기"] + "건 · 불가일정 " + bo + "건")
  })
  Demo.on("account", function () {
    Demo.toast("관리자 계정으로 로그인되어 있습니다")
  })

  // 예약
  Demo.on("r-tab", function (d) {
    state.r.tab = d.v
    state.r.limit = 20
    rerender()
  })
  Demo.on("r-region", function (d) {
    state.r.region = d.v
    state.r.limit = 20
    rerender()
  })
  Demo.on("r-period", function (v) {
    state.r.period = v
    rerender()
  })
  Demo.on("r-dir", function (v) {
    state.r.dir = v
    rerender()
  })
  Demo.on("r-sort", function (v) {
    state.r.sort = v
    rerender()
  })
  Demo.on("r-from", function (v) {
    state.r.from = v
    rerender()
  })
  Demo.on("r-to", function (v) {
    state.r.to = v
    rerender()
  })
  Demo.on("r-cash", function () {
    state.r.cash = !state.r.cash
    rerender()
  })
  onInput("r-q", function (v) {
    state.r.q = v
    state.r.limit = 20
    rerender()
  })
  Demo.on("r-more", function () {
    state.r.limit += 20
    rerender()
  })
  Demo.on("sel", function (d) {
    state.r.sel[d.id] = !state.r.sel[d.id]
    rerender()
  })
  Demo.on("sel-all", function () {
    var shown = filteredRes().slice(0, state.r.limit)
    var all = shown.every(function (r) {
      return state.r.sel[r.id]
    })
    shown.forEach(function (r) {
      state.r.sel[r.id] = !all
    })
    rerender()
  })
  Demo.on("flag", function (d) {
    var r = resById(+d.id)
    r.flag = !r.flag
    Demo.toast(r.flag ? r.no + " 중요표시를 했습니다" : r.no + " 중요표시를 해제했습니다")
    rerender()
  })
  Demo.on("talk", function (d) {
    var r = resById(+d.id)
    r.talk = !r.talk
    Demo.toast(r.talk ? "비즈톡 수신자로 다시 배정했습니다" : "비즈톡 배정을 해제했습니다")
    rerender()
  })
  Demo.on("r-link", function () {
    var url = location.origin + "/demos/film-schedule/#/reservations"
    try {
      navigator.clipboard.writeText(url).catch(function () {})
    } catch (x) {}
    Demo.toast("예약폼 링크를 복사했습니다 (체험판 주소)")
  })
  Demo.on("r-same", function () {
    var by = {}
    state.res.forEach(function (r) {
      if (r.pay !== "완납") by[r.bride] = (by[r.bride] || 0) + 1
    })
    var dup = Object.keys(by).filter(function (k) {
      return by[k] > 1
    })
    Demo.toast(dup.length ? "동명이인 " + dup.length + "명: " + dup.slice(0, 3).join(", ") + ", 입금 전 확인하세요" : "입금 대기 중 동명이인이 없습니다")
  })
  Demo.on("r-detail", function () {
    var sel = Object.keys(state.r.sel).filter(function (k) {
      return state.r.sel[k]
    })
    if (!sel.length) return Demo.toast("상세 보기할 예약을 먼저 체크하세요")
    state.modal = { type: "res", id: +sel[0] }
    rerender()
  })
  Demo.on("r-excel", function () {
    Demo.toast("엑셀 " + filteredRes().length + "건, 체험판에서는 파일을 만들지 않습니다")
  })
  Demo.on("r-new", function () {
    state.modal = { type: "res", id: null }
    rerender()
  })
  Demo.on("open-res", function (d) {
    state.modal = { type: "res", id: +d.id }
    rerender()
  })
  Demo.on("res-save", function (v, form) {
    var id = +form.getAttribute("data-id")
    var r = id ? resById(id) : null
    var data = {
      bride: v.bride.trim(),
      groom: v.groom.trim(),
      date: v.date,
      time: v.time,
      venue: v.venue.trim(),
      region: v.region,
      phone: v.phone.trim(),
      status: v.status,
      pay: v.pay,
      dir: v.dir ? +v.dir : null,
      balance: toInt(v.balance),
    }
    if (!data.bride) return Demo.toast("신부(예약자) 이름을 입력하세요")
    if (r) {
      Object.assign(r, data)
      Demo.toast(r.no + " 예약을 저장했습니다")
    } else {
      var maxNo = state.res.reduce(function (m, x) {
        return Math.max(m, +x.no.slice(-4))
      }, 3100)
      var nid = state.res.reduce(function (m, x) {
        return Math.max(m, x.id)
      }, 0) + 1
      state.res.push(Object.assign({ id: nid, no: "LM-26-" + (maxNo + 1), editor: null, talk: true, flag: false, cash: false, created: nid + 1000, deliveredAt: null, link: "" }, data))
      Demo.toast("예약 LM-26-" + (maxNo + 1) + " 을 등록했습니다")
      state.r.tab = "all"
    }
    state.modal = null
    rerender()
  })
  Demo.on("res-del", function (d) {
    var r = resById(+d.id)
    if (!confirm(r.no + " 예약을 휴지통으로 옮길까요?")) return
    state.res = state.res.filter(function (x) {
      return x !== r
    })
    state.trash.push(r)
    state.modal = null
    Demo.toast(r.no + " 예약을 휴지통으로 옮겼습니다")
    rerender()
  })
  Demo.on("res-paid", function (d) {
    var r = resById(+d.id)
    r.pay = "완납"
    Demo.toast(r.no + " 입금 확인, 완납 처리했습니다")
    rerender()
  })

  // 짝꿍
  function refById(id) {
    return state.referrals.filter(function (x) {
      return x.id === id
    })[0]
  }
  Demo.on("ref-done", function (d) {
    var x = refById(+d.id)
    x.done = true
    Demo.toast(x.owner + "님 페이백 환급 완료로 기록했습니다")
    rerender()
  })
  Demo.on("ref-toggle", function (d) {
    var x = refById(+d.id)
    x.done = !x.done
    Demo.toast(x.done ? "페이백 처리 완료" : "페이백을 대기로 되돌렸습니다")
    rerender()
  })
  Demo.on("ref-sort", function () {
    state.ref.asc = !state.ref.asc
    rerender()
  })
  onInput("ref-q", function (v) {
    state.ref.q = v
    rerender()
  })

  // 스케줄
  Demo.on("sc-mode", function (d) {
    state.sc.mode = d.v
    rerender()
  })
  Demo.on("sc-view", function (d) {
    state.sc.view = d.v
    rerender()
  })
  Demo.on("sc-week", function (d) {
    state.sc.week = +d.v === 0 ? 0 : state.sc.week + +d.v
    rerender()
  })
  Demo.on("sc-day", function (d) {
    state.sc.day = +d.v === 0 ? TODAY : addDays(state.sc.day, +d.v)
    rerender()
  })
  Demo.on("sc-day-set", function (v) {
    if (v) state.sc.day = v
    rerender()
  })
  Demo.on("sc-dir", function (v) {
    state.sc.dir = +v
    rerender()
  })
  Demo.on("sc-bo", function () {
    state.sc.open = !state.sc.open
    rerender()
  })
  Demo.on("bo-ok", function (d) {
    var b = state.blackout.filter(function (x) {
      return x.id === +d.id
    })[0]
    b.status = "승인"
    Demo.toast(staffName(b.staff) + " " + b.date + " 불가일정을 승인했습니다")
    rerender()
  })
  Demo.on("bo-no", function (d) {
    var b = state.blackout.filter(function (x) {
      return x.id === +d.id
    })[0]
    b.status = "반려"
    Demo.toast("불가일정을 반려했습니다")
    rerender()
  })
  Demo.on("sc-assign", function (d) {
    state.modal = { type: "assign", id: +d.id, key: assignKey() }
    rerender()
  })
  Demo.on("assign-pick", function (d) {
    var r = resById(+d.id)
    r[d.key] = +d.s
    state.modal = null
    Demo.toast(r.date + " " + r.venue.replace(/\(.*\)/, "") + " → " + staffName(+d.s) + " 배정")
    rerender()
  })
  Demo.on("sc-unassign", function (d) {
    var r = resById(+d.id)
    var k = assignKey()
    var n = staffName(r[k])
    r[k] = null
    Demo.toast(n + " 배정을 해제했습니다")
    rerender()
  })
  Demo.on("sc-ai", function () {
    var key = assignKey()
    var people = key === "dir" ? shooters() : editors()
    var todo = state.res.filter(function (r) {
      return r.date >= TODAY && !r[key] && r.status !== "승인대기"
    }).sort(function (a, b) {
      return a.date < b.date ? -1 : 1
    })
    if (!todo.length) return Demo.toast("배정할 촬영이 없습니다")
    todo.forEach(function (r) {
      var best = null, bestN = 1e9
      people.forEach(function (s) {
        var bo = state.blackout.some(function (b) {
          return b.staff === s.id && b.date === r.date && b.status !== "반려"
        })
        if (bo) return
        var same = state.res.filter(function (x) {
          return x.date === r.date && x[key] === s.id
        }).length
        var load = state.res.filter(function (x) {
          return x[key] === s.id && x.date >= TODAY
        }).length
        var score = same * 100 + load
        if (score < bestN) {
          bestN = score
          best = s
        }
      })
      if (best) r[key] = best.id
    })
    Demo.toast("AI 최적 배정: " + todo.length + "건을 감독 일정·부하를 고려해 배정했습니다")
    rerender()
  })

  // 팀
  Demo.on("st-filter", function (d) {
    state.st.filter = d.v
    rerender()
  })
  Demo.on("st-new", function () {
    state.modal = { type: "staff", id: null }
    rerender()
  })
  Demo.on("st-edit", function (d) {
    state.modal = { type: "staff", id: +d.id }
    rerender()
  })
  Demo.on("st-del", function (d) {
    var s = staffById(+d.id)
    if (!confirm(s.name + " 감독을 삭제할까요? 배정된 촬영은 미배정으로 바뀝니다.")) return
    state.staff = state.staff.filter(function (x) {
      return x !== s
    })
    state.res.forEach(function (r) {
      if (r.dir === s.id) r.dir = null
      if (r.editor === s.id) r.editor = null
    })
    state.trash.push(s)
    Demo.toast(s.name + " 감독을 삭제했습니다")
    rerender()
  })
  Demo.on("st-login", function (d) {
    Demo.toast(staffName(+d.id) + " 감독 화면으로 로그인 (체험판에서는 이동하지 않습니다)")
  })
  Demo.on("st-save", function (v, form) {
    var id = +form.getAttribute("data-id")
    if (!v.name.trim()) return Demo.toast("이름을 입력하세요")
    var data = { name: v.name.trim(), role: v.role, region: v.region, car: v.car, login: v.login.trim() }
    if (id) {
      Object.assign(staffById(id), data)
      Demo.toast(data.name + " 감독 정보를 저장했습니다")
    } else {
      var nid = state.staff.reduce(function (m, x) {
        return Math.max(m, x.id)
      }, 0) + 1
      state.staff.push(Object.assign({ id: nid }, data))
      Demo.toast(data.name + " 감독을 등록했습니다")
    }
    state.modal = null
    rerender()
  })

  // 계약서
  Demo.on("ct-tab", function (d) {
    state.ct.tab = d.v
    rerender()
  })
  onInput("ct-name", function (v) {
    state.ct.name = v
  })
  Demo.on("ct-upload", function () {
    var nid = state.contracts.reduce(function (m, x) {
      return Math.max(m, x.id)
    }, 0) + 1
    var d = new Date()
    state.contracts.push({ id: nid, name: state.ct.name.trim() || "새 계약서 " + nid, pages: 2, fields: 0, at: TODAY + " " + p2(d.getHours()) + ":" + p2(d.getMinutes()) })
    state.ct.name = ""
    Demo.toast("샘플 PDF로 계약서를 등록했습니다 (체험판)")
    rerender()
  })
  Demo.on("ct-open", function (d) {
    Demo.toast("필드 배치 편집기는 체험판에서 제공하지 않습니다")
  })
  Demo.on("ct-del", function (d) {
    var c = state.contracts.filter(function (x) {
      return x.id === +d.id
    })[0]
    if (!confirm(c.name + " 을(를) 삭제할까요?")) return
    state.contracts = state.contracts.filter(function (x) {
      return x !== c
    })
    Demo.toast("계약서를 삭제했습니다")
    rerender()
  })
  Demo.on("ct-resend", function (d) {
    Demo.toast(resById(+d.id).bride + "님께 서명 요청을 다시 보냈습니다 (체험판: 실제 발송 없음)")
  })
  Demo.on("ct-sign", function (d) {
    var r = resById(+d.id)
    r.status = "계약완료"
    r.pay = "잔금 대기"
    Demo.toast(r.no + " 서명 완료, 계약완료로 바뀌었습니다")
    rerender()
  })

  // 잔금
  Demo.on("bal-from", function (v) {
    state.bal.from = v
    rerender()
  })
  Demo.on("bal-to", function (v) {
    state.bal.to = v
    rerender()
  })
  Demo.on("bal-range", function (v) {
    state.bal.range = v
  })
  Demo.on("bal-run", function () {
    state.bal.ran = true
    Demo.toast("최근 " + state.bal.range + "일 입금내역과 대조했습니다 (가상 내역)")
    rerender()
  })
  function payDone(r) {
    r.pay = "완납"
    state.bal.done[r.id] = true
  }
  Demo.on("bal-one", function (d) {
    var r = resById(+d.id)
    payDone(r)
    Demo.toast(r.no + " 완납 처리했습니다")
    rerender()
  })
  Demo.on("bal-all", function () {
    var b = state.bal
    var list = state.res.filter(function (r) {
      return r.date >= b.from && r.date <= b.to && r.pay === "잔금 대기" && r.id % 3 !== 0
    })
    list.forEach(payDone)
    Demo.toast(list.length + "건을 한 번에 완납 처리했습니다")
    rerender()
  })

  // 출퇴근
  Demo.on("at-day", function (d) {
    state.at.day = +d.v === 0 ? TODAY : addDays(state.at.day, +d.v)
    rerender()
  })
  Demo.on("at-day-set", function (v) {
    if (v) state.at.day = v
    rerender()
  })
  Demo.on("at-dir", function (v) {
    state.at.dir = v
    rerender()
  })
  Demo.on("at-status", function (v) {
    state.at.status = v
    rerender()
  })
  onInput("at-q", function (v) {
    state.at.q = v
    rerender()
  })

  // 납품
  Demo.on("dl-link", function (v, el, e) {
    if (e && e.isComposing) return
    var had = !!state.dl.links[el.dataset.id]
    state.dl.links[el.dataset.id] = v.trim()
    if (had !== !!v.trim()) rerender()
  })
  Demo.on("dl-gen", function (d) {
    var r = resById(+d.id)
    state.dl.links[r.id] = "https://drive.example.com/s/lumi" + r.no.slice(-4)
    Demo.toast("공유링크를 자동 생성했습니다 (가상 주소)")
    rerender()
  })
  Demo.on("dl-send", function (d) {
    var r = resById(+d.id)
    if (r.status === "납품 완료") return Demo.toast(r.bride + "님께 납품 메일을 다시 보냈습니다 (체험판: 실제 발송 없음)")
    var link = state.dl.links[r.id]
    if (!link) return Demo.toast("공유링크를 먼저 넣어 주세요")
    r.status = "납품 완료"
    r.link = link
    r.deliveredAt = TODAY
    if (!r.editor) r.editor = editors()[0] ? editors()[0].id : null
    Demo.toast(r.bride + "님께 납품 메일 발송, 납품완료로 기록했습니다 (실제 발송 없음)")
    rerender()
  })

  // 정산
  Demo.on("se-week", function (d) {
    state.se.week = +d.v === 0 ? mondayOf(TODAY) : addDays(state.se.week, 7 * +d.v)
    rerender()
  })
  Demo.on("se-date", function (v) {
    if (v) state.se.week = mondayOf(v)
    rerender()
  })
  Demo.on("se-pay", function (d) {
    state.paid[state.se.week + ":" + d.id] = true
    Demo.toast(staffName(+d.id) + " 감독 주급을 입금 처리했습니다")
    rerender()
  })
  Demo.on("se-undo", function (d) {
    delete state.paid[state.se.week + ":" + d.id]
    Demo.toast("입금 처리를 취소했습니다")
    rerender()
  })
  Demo.on("se-all", function () {
    var rows = settleRows(state.se.week).filter(function (x) {
      return !x.paid
    })
    rows.forEach(function (x) {
      state.paid[state.se.week + ":" + x.id] = true
    })
    Demo.toast(rows.length + "명 주급을 일괄 입금 처리했습니다")
    rerender()
  })

  // 환경설정
  Demo.on("cfg-tab", function (d) {
    state.cfg.tab = d.v
    rerender()
  })
  function listOf(kind) {
    return kind === "p" ? state.settings.products : state.settings.options
  }
  Demo.on("cfg-item", function (v, form) {
    var kind = form.getAttribute("data-kind")
    var it = listOf(kind).filter(function (x) {
      return x.id === +form.getAttribute("data-id")
    })[0]
    it.name = v.name.trim() || it.name
    it.supply = toInt(v.supply)
    it.vat = toInt(v.vat)
    Demo.toast("‘" + it.name + "’ 저장했습니다 (총액 " + won(it.supply + it.vat) + ")")
    rerender()
  })
  Demo.on("cfg-add", function (v, form) {
    var kind = form.getAttribute("data-kind")
    var list = listOf(kind)
    var nid = list.reduce(function (m, x) {
      return Math.max(m, x.id)
    }, 0) + 1
    var supply = toInt(v.supply)
    list.push({ id: nid, name: v.name.trim(), supply: supply, vat: toInt(v.vat) || Math.round(supply / 10) })
    Demo.toast((kind === "p" ? "상품" : "옵션") + "을 추가했습니다")
    rerender()
  })
  Demo.on("cfg-item-del", function (d) {
    var kind = d.kind
    var list = listOf(kind)
    var it = list.filter(function (x) {
      return x.id === +d.id
    })[0]
    if (kind === "p" && it.id === state.settings.defaultProduct) return Demo.toast("기본상품은 삭제할 수 없습니다. 다른 상품을 먼저 기본으로 지정하세요")
    if (kind === "p") state.settings.products = list.filter(function (x) {
      return x !== it
    })
    else state.settings.options = list.filter(function (x) {
      return x !== it
    })
    Demo.toast("‘" + it.name + "’ 삭제했습니다")
    rerender()
  })
  Demo.on("cfg-default", function (d) {
    state.settings.defaultProduct = +d.id
    Demo.toast("기본상품을 바꿨습니다, 새 예약 금액에 적용됩니다")
    rerender()
  })
  function dcById(id) {
    return state.settings.discounts.filter(function (x) {
      return x.id === +id
    })[0]
  }
  onInput("dc-name", function (v, el) {
    dcById(el.dataset.id).name = v
  })
  onInput("dc-amt", function (v, el) {
    dcById(el.dataset.id).amount = toInt(v)
  })
  Demo.on("dc-toggle", function (d) {
    var x = dcById(d.id)
    x.on = !x.on
    rerender()
  })
  Demo.on("dc-add", function () {
    var list = state.settings.discounts
    var nid = list.reduce(function (m, x) {
      return Math.max(m, x.id)
    }, 0) + 1
    list.push({ id: nid, name: "", amount: 0, on: true })
    rerender()
  })
  Demo.on("dc-del", function (d) {
    state.settings.discounts = state.settings.discounts.filter(function (x) {
      return x.id !== +d.id
    })
    rerender()
  })
  Demo.on("dc-save", function () {
    var on = state.settings.discounts.filter(function (x) {
      return x.on && x.name.trim()
    }).length
    Demo.toast("할인 정책을 저장했습니다 (사용 중 " + on + "개)")
    rerender()
  })
  Demo.on("cfg-pay", function (v) {
    var S = state.settings
    S.shootRate = toInt(v.shootRate)
    S.editRate = toInt(v.editRate)
    REGIONS.forEach(function (rg) {
      S.travel[rg] = toInt(v["t_" + rg])
    })
    Demo.toast("수당·교통비를 저장했습니다, 정산 화면에 바로 반영됩니다")
    rerender()
  })
  Demo.on("cfg-bank", function (v) {
    state.settings.bank = v.bank
    state.settings.account = v.account
    Demo.toast("입금연동 설정을 저장했습니다")
    rerender()
  })
  Demo.on("bank-auto", function () {
    state.settings.autoMatch = !state.settings.autoMatch
    rerender()
  })
  Demo.on("cfg-mail", function (v) {
    var S = state.settings
    S.mailFrom = v.mailFrom
    S.mailAddr = v.mailAddr
    S.mailSubject = v.mailSubject
    S.linkDays = toInt(v.linkDays) || 30
    Demo.toast("메일 발송 설정을 저장했습니다")
    rerender()
  })
  Demo.on("cfg-sheet", function (v) {
    state.settings.sheetUrl = v.sheetUrl
    Demo.toast("구글시트 설정을 저장했습니다")
    rerender()
  })
  Demo.on("sheet-sync", function () {
    state.settings.sheetSync = !state.settings.sheetSync
    rerender()
  })
  Demo.on("cfg-cap", function (v) {
    state.settings.cap = Math.max(1, toInt(v.cap))
    Demo.toast("하루 접수 상한을 " + state.settings.cap + "건으로 저장했습니다")
    rerender()
  })
  Demo.on("cfg-tpl", function (v) {
    state.settings.tpl = { confirm: v.confirm, balance: v.balance, delivery: v.delivery }
    Demo.toast("메시지 템플릿을 저장했습니다")
  })
  Demo.on("cfg-kakao", function (v) {
    state.settings.kakaoId = v.kakaoId
    Demo.toast("카카오 연동 설정을 저장했습니다")
    rerender()
  })
  Demo.on("kakao-on", function () {
    state.settings.kakaoOn = !state.settings.kakaoOn
    rerender()
  })
  Demo.on("ext-test", function () {
    Demo.toast("체험판에서는 외부 서비스와 연결하지 않습니다")
  })

  Demo.mount(render)
  Demo.banner()
})()
})()
