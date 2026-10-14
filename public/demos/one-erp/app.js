/* ONE ERP 체험판 (와이넥스 포트폴리오) — 모든 데이터는 가상이며 브라우저 메모리에만 있습니다 */
;(function () {
"use strict"
var ICONS={"boxes":"<path d=\"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z\"></path><path d=\"m7 16.5-4.74-2.85\"></path><path d=\"m7 16.5 5-3\"></path><path d=\"M7 16.5v5.17\"></path><path d=\"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z\"></path><path d=\"m17 16.5-5-3\"></path><path d=\"m17 16.5 4.74-2.85\"></path><path d=\"M17 16.5v5.17\"></path><path d=\"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z\"></path><path d=\"M12 8 7.26 5.15\"></path><path d=\"m12 8 4.74-2.85\"></path><path d=\"M12 13.5V8\"></path>","layout-dashboard":"<rect height=\"9\" rx=\"1\" width=\"7\" x=\"3\" y=\"3\"></rect><rect height=\"5\" rx=\"1\" width=\"7\" x=\"14\" y=\"3\"></rect><rect height=\"9\" rx=\"1\" width=\"7\" x=\"14\" y=\"12\"></rect><rect height=\"5\" rx=\"1\" width=\"7\" x=\"3\" y=\"16\"></rect>","gauge":"<path d=\"m12 14 4-4\"></path><path d=\"M3.34 19a10 10 0 1 1 17.32 0\"></path>","chevron-down":"<path d=\"m6 9 6 6 6-6\"></path>","shopping-cart":"<circle cx=\"8\" cy=\"21\" r=\"1\"></circle><circle cx=\"19\" cy=\"21\" r=\"1\"></circle><path d=\"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12\"></path>","globe":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\"></path><path d=\"M2 12h20\"></path>","building2":"<path d=\"M10 12h4\"></path><path d=\"M10 8h4\"></path><path d=\"M14 21v-3a2 2 0 0 0-4 0v3\"></path><path d=\"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2\"></path><path d=\"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16\"></path>","palette":"<path d=\"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z\"></path><circle cx=\"13.5\" cy=\"6.5\" fill=\"currentColor\" r=\".5\"></circle><circle cx=\"17.5\" cy=\"10.5\" fill=\"currentColor\" r=\".5\"></circle><circle cx=\"6.5\" cy=\"12.5\" fill=\"currentColor\" r=\".5\"></circle><circle cx=\"8.5\" cy=\"7.5\" fill=\"currentColor\" r=\".5\"></circle>","arrow-left-right":"<path d=\"M8 3 4 7l4 4\"></path><path d=\"M4 7h16\"></path><path d=\"m16 21 4-4-4-4\"></path><path d=\"M20 17H4\"></path>","lock":"<rect height=\"11\" rx=\"2\" ry=\"2\" width=\"18\" x=\"3\" y=\"11\"></rect><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>","truck":"<path d=\"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2\"></path><path d=\"M15 18H9\"></path><path d=\"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14\"></path><circle cx=\"17\" cy=\"18\" r=\"2\"></circle><circle cx=\"7\" cy=\"18\" r=\"2\"></circle>","package":"<path d=\"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z\"></path><path d=\"M12 22V12\"></path><polyline points=\"3.29 7 12 12 20.71 7\"></polyline><path d=\"m7.5 4.27 9 5.15\"></path>","file-text":"<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"></path><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"></path><path d=\"M10 9H8\"></path><path d=\"M16 13H8\"></path><path d=\"M16 17H8\"></path>","clipboard-list":"<rect height=\"4\" rx=\"1\" ry=\"1\" width=\"8\" x=\"8\" y=\"2\"></rect><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><path d=\"M12 11h4\"></path><path d=\"M12 16h4\"></path><path d=\"M8 11h.01\"></path><path d=\"M8 16h.01\"></path>","pen-tool":"<path d=\"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z\"></path><path d=\"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18\"></path><path d=\"m2.3 2.3 7.286 7.286\"></path><circle cx=\"11\" cy=\"11\" r=\"2\"></circle>","contact":"<path d=\"M16 2v2\"></path><path d=\"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2\"></path><path d=\"M8 2v2\"></path><circle cx=\"12\" cy=\"11\" r=\"3\"></circle><rect height=\"18\" rx=\"2\" width=\"18\" x=\"3\" y=\"4\"></rect>","wallet":"<path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"></path><path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\"></path>","landmark":"<path d=\"M10 18v-7\"></path><path d=\"M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z\"></path><path d=\"M14 18v-7\"></path><path d=\"M18 18v-7\"></path><path d=\"M3 22h18\"></path><path d=\"M6 18v-7\"></path>","receipt":"<path d=\"M12 17V7\"></path><path d=\"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8\"></path><path d=\"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z\"></path>","trending-up":"<path d=\"M16 7h6v6\"></path><path d=\"m22 7-8.5 8.5-5-5L2 17\"></path>","chart-column":"<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"></path><path d=\"M18 17V9\"></path><path d=\"M13 17V5\"></path><path d=\"M8 17v-3\"></path>","package-search":"<path d=\"M12 22V12\"></path><path d=\"M20.27 18.27 22 20\"></path><path d=\"M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559\"></path><path d=\"M3.29 7 12 12l8.71-5\"></path><path d=\"m7.5 4.27 8.997 5.148\"></path><circle cx=\"18.5\" cy=\"16.5\" r=\"2.5\"></circle>","users":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><path d=\"M16 3.128a4 4 0 0 1 0 7.744\"></path><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle>","scroll-text":"<path d=\"M15 12h-5\"></path><path d=\"M15 8h-5\"></path><path d=\"M19 17V5a2 2 0 0 0-2-2H4\"></path><path d=\"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3\"></path>","plug":"<path d=\"M12 22v-5\"></path><path d=\"M15 8V2\"></path><path d=\"M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z\"></path><path d=\"M9 8V2\"></path>","printer":"<path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path><path d=\"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6\"></path><rect height=\"8\" rx=\"1\" width=\"12\" x=\"6\" y=\"14\"></rect>","settings":"<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","search":"<path d=\"m21 21-4.34-4.34\"></path><circle cx=\"11\" cy=\"11\" r=\"8\"></circle>","refresh-cw":"<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\"></path><path d=\"M21 3v5h-5\"></path><path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\"></path><path d=\"M8 16H3v5\"></path>","bell":"<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"></path><path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"></path>","dot":"<circle cx=\"12.1\" cy=\"12.1\" r=\"1\"></circle>","arrow-up-right":"<path d=\"M7 7h10v10\"></path><path d=\"M7 17 17 7\"></path>","calendar-days":"<path d=\"M8 2v4\"></path><path d=\"M16 2v4\"></path><rect height=\"18\" rx=\"2\" width=\"18\" x=\"3\" y=\"4\"></rect><path d=\"M3 10h18\"></path><path d=\"M8 14h.01\"></path><path d=\"M12 14h.01\"></path><path d=\"M16 14h.01\"></path><path d=\"M8 18h.01\"></path><path d=\"M12 18h.01\"></path><path d=\"M16 18h.01\"></path>","credit-card":"<rect height=\"14\" rx=\"2\" width=\"20\" x=\"2\" y=\"5\"></rect><line x1=\"2\" x2=\"22\" y1=\"10\" y2=\"10\"></line>","clock":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M12 6v6l4 2\"></path>","package-x":"<path d=\"M12 22V12\"></path><path d=\"m16.5 14.5 5 5\"></path><path d=\"m16.5 19.5 5-5\"></path><path d=\"M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.13-.074\"></path><path d=\"M3.29 7 12 12l8.71-5\"></path><path d=\"m7.5 4.27 8.997 5.148\"></path>","triangle-alert":"<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"></path><path d=\"M12 9v4\"></path><path d=\"M12 17h.01\"></path>","briefcase":"<path d=\"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path><rect height=\"14\" rx=\"2\" width=\"20\" x=\"2\" y=\"6\"></rect>","circle-alert":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"></line><line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\"></line>","download":"<path d=\"M12 15V3\"></path><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><path d=\"m7 10 5 5 5-5\"></path>","plus":"<path d=\"M5 12h14\"></path><path d=\"M12 5v14\"></path>","store":"<path d=\"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5\"></path><path d=\"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244\"></path><path d=\"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05\"></path>","circle-check":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"m9 12 2 2 4-4\"></path>","layout-grid":"<rect height=\"7\" rx=\"1\" width=\"7\" x=\"3\" y=\"3\"></rect><rect height=\"7\" rx=\"1\" width=\"7\" x=\"14\" y=\"3\"></rect><rect height=\"7\" rx=\"1\" width=\"7\" x=\"14\" y=\"14\"></rect><rect height=\"7\" rx=\"1\" width=\"7\" x=\"3\" y=\"14\"></rect>","circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>","arrow-up-from-line":"<path d=\"m18 9-6-6-6 6\"></path><path d=\"M12 3v14\"></path><path d=\"M5 21h14\"></path>","arrow-down-to-line":"<path d=\"M12 17V3\"></path><path d=\"m6 11 6 6 6-6\"></path><path d=\"M19 21H5\"></path>","x":"<path d=\"M18 6 6 18\"></path><path d=\"m6 6 12 12\"></path>","info":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M12 16v-4\"></path><path d=\"M12 8h.01\"></path>","pencil":"<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"></path><path d=\"m15 5 4 4\"></path>","send":"<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\"></path><path d=\"m21.854 2.147-10.94 10.939\"></path>","user":"<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>","chevron-right":"<path d=\"m9 18 6-6-6-6\"></path>","circle-question-mark":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"></path><path d=\"M12 17h.01\"></path>","file-check-corner":"<path d=\"M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6\"></path><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"></path><path d=\"m14 20 2 2 4-4\"></path>","file-clock":"<path d=\"M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85\"></path><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"></path><path d=\"M8 14v2.2l1.6 1\"></path><circle cx=\"8\" cy=\"16\" r=\"6\"></circle>","sparkles":"<path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\"></path><path d=\"M20 2v4\"></path><path d=\"M22 4h-4\"></path><circle cx=\"4\" cy=\"20\" r=\"2\"></circle>","user-plus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><line x1=\"19\" x2=\"19\" y1=\"8\" y2=\"14\"></line><line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\"></line>","shield":"<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"></path>","save":"<path d=\"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z\"></path><path d=\"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7\"></path><path d=\"M7 3v4a1 1 0 0 0 1 1h7\"></path>"};

/* ---------------------------------------------------------------
 * 공용 도구
 * ------------------------------------------------------------- */
var D = window.Demo
var esc = D.esc
var num = D.num

function ic(name, cls) {
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-' +
    name + " " + (cls || "") + '" aria-hidden="true">' + (ICONS[name] || "") + "</svg>"
  )
}
function won(n) {
  return "₩" + num(n)
}
// ₩3.2억 / ₩4,280만 / ₩920,000 처럼 줄여 쓰기
function wonShort(n) {
  n = Math.round(n || 0)
  if (Math.abs(n) >= 1e8) return "₩" + (Math.round(n / 1e7) / 10).toFixed(1).replace(/\.0$/, "") + "억"
  if (Math.abs(n) >= 1e6) return "₩" + num(Math.round(n / 1e4)) + "만"
  return "₩" + num(n)
}
function pct(a, b) {
  return b ? Math.round((a / b) * 100) : 0
}
function pad(x) {
  return String(x).padStart(2, "0")
}
// 날짜 문자열(YYYY-MM-DD) 도구
function day(off) {
  return D.day(off)
}
function md(d) {
  return d ? d.slice(5).replace("-", ".") : "-"
}
function ymdDot(d) {
  return d ? d.replace(/-/g, ".") : "-"
}
function yymmdd(d) {
  return d.slice(2).replace(/-/g, "")
}
function diffDays(a, b) {
  return Math.round((new Date(a + "T00:00:00") - new Date(b + "T00:00:00")) / 864e5)
}
function nowTime() {
  var d = new Date()
  return pad(d.getHours()) + ":" + pad(d.getMinutes())
}
function nowStamp() {
  var d = new Date()
  return day(0) + " " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds())
}
var WEEK = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
function weekday(d) {
  return WEEK[new Date(d + "T00:00:00").getDay()]
}
// 결정적 난수 (새로고침해도 같은 가상 데이터)
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

/* 원본 화면의 클래스 묶음 (복사한 CSS 에 그대로 들어 있는 것만 사용) */
var BTN_BASE =
  "group/button inline-flex shrink-0 items-center justify-center border bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 "
var BTN_OUT =
  BTN_BASE +
  "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5"
var BTN_OUT_FLEX = BTN_OUT.replace("inline-flex shrink-0", "inline-flex") + " flex-1"
var BTN_OUT_FULL = BTN_OUT + " mt-3 w-full"
var BTN_PRI =
  BTN_BASE.replace("border bg-clip", "border border-transparent bg-clip") +
  "bg-primary text-primary-foreground [a]:hover:bg-primary/80 h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5"
var BTN_PRI_XS =
  BTN_BASE.replace("border bg-clip", "border border-transparent bg-clip") +
  "bg-primary text-primary-foreground [a]:hover:bg-primary/80 gap-1 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5 h-7 px-2 text-xs"
var BTN_PRI8 =
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground [a]:hover:bg-primary/80 h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
var BTN_DEST6 =
  "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40 h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3"

function btn(cls, label, attrs, icon, iconCls) {
  return (
    '<button class="' + cls + '" data-slot="button" type="button" ' + (attrs || "") + ">" +
    (icon ? ic(icon, iconCls || "size-3.5") : "") + esc(label) + "</button>"
  )
}

var TONE = {
  blue: "bg-blue-50 text-blue-700 ring-blue-200",
  amber: "bg-amber-50 text-amber-700 ring-amber-200",
  green: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  red: "bg-red-50 text-red-600 ring-red-200",
  slate: "bg-slate-100 text-slate-600 ring-slate-200",
  primary: "bg-primary/10 text-primary ring-primary/20",
  muted: "bg-muted text-muted-foreground ring-border",
}
function badge(text, tone, extraHtml) {
  return (
    '<span class="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset whitespace-nowrap ' +
    (TONE[tone] || TONE.slate) + '">' + (extraHtml || "") + esc(text) + "</span>"
  )
}

var TH = "sticky top-0 whitespace-nowrap border-b border-border bg-muted px-3 py-2.5 text-xs font-semibold text-muted-foreground text-"
var TD = "whitespace-nowrap px-3 py-2.5 "
var TR = "h-[52px] border-b border-border last:border-0 transition-colors"
var TR_CLICK = TR + " cursor-pointer hover:bg-accent/50"
// cols: [[제목, 정렬]]
function table(cols, rowsHtml, wrapCls) {
  return (
    '<div class="' + (wrapCls || "overflow-x-auto rounded-md border border-border bg-card") + '"><table class="w-full border-collapse text-sm"><thead><tr>' +
    cols.map(function (c) {
      return '<th class="' + TH + (c[1] || "left") + '">' + esc(c[0]) + "</th>"
    }).join("") +
    "</tr></thead><tbody>" + rowsHtml + "</tbody></table></div>"
  )
}
function td(html, cls) {
  return '<td class="' + TD + (cls || "text-foreground text-left") + '">' + html + "</td>"
}
function emptyRow(text, span) {
  return '<tr class="' + TR + '"><td class="' + TD + 'text-left text-muted-foreground" colspan="' + (span || 1) + '">' + esc(text) + "</td></tr>"
}

function pageHead(title, desc, actions) {
  return (
    '<div class="mb-5 flex flex-wrap items-end justify-between gap-3"><div>' +
    '<h1 class="text-xl font-bold tracking-tight text-foreground text-balance">' + esc(title) + "</h1>" +
    '<p class="mt-1 text-sm text-muted-foreground">' + esc(desc) + "</p></div>" +
    (actions ? '<div class="flex flex-wrap items-center gap-2">' + actions + "</div>" : "") +
    "</div>"
  )
}

// 아이콘이 있는 지표 카드 (원본 StatCard)
function stat(o) {
  var tone = o.tone || "default"
  var border = tone === "amber" ? "border-amber-200" : tone === "red" ? "border-red-200" : "border-border"
  var iconBox = tone === "amber" ? "bg-amber-50 text-amber-500" : tone === "red" ? "bg-red-50 text-red-500" : "bg-primary/10 text-primary"
  var sub = ""
  if (o.trend != null)
    sub =
      '<span class="inline-flex items-center gap-0.5 font-medium ' + (o.trend >= 0 ? "text-emerald-600" : "text-red-600") + '">' +
      ic("arrow-up-right", "size-3.5") + "전일 대비 " + (o.trend >= 0 ? "+" : "") + o.trend.toFixed(1) + "%</span>"
  else if (o.sub) sub = '<span class="text-muted-foreground">' + esc(o.sub) + "</span>"
  var inner =
    '<div class="group flex flex-col justify-between rounded-md border bg-card p-4 shadow-xs transition-colors ' +
    (o.href ? "cursor-pointer hover:border-primary/40 hover:bg-accent/40 " : "") + border + '">' +
    '<div class="flex items-center justify-between"><span class="text-xs font-medium text-muted-foreground">' + esc(o.label) + "</span>" +
    (o.icon ? '<span class="flex size-7 items-center justify-center rounded-md ' + iconBox + '">' + ic(o.icon, "size-4") + "</span>" : "") +
    '</div><div class="mt-3"><div class="text-2xl font-bold tracking-tight text-foreground tabular">' + esc(o.value) + "</div>" +
    '<div class="mt-1 flex items-center gap-1.5 text-xs">' + sub + "</div></div></div>"
  return o.href ? '<a href="#' + o.href + '">' + inner + "</a>" : inner
}
// 단순 지표 카드 (재고/입출고 화면)
function miniStat(label, value, valueCls) {
  return (
    '<div class="rounded-md border border-border bg-card text-card-foreground shadow-xs p-4" data-slot="card">' +
    '<div class="text-xs font-medium text-muted-foreground">' + esc(label) + "</div>" +
    '<div class="mt-2 text-2xl font-bold tabular ' + (valueCls || "text-foreground") + '">' + esc(value) + "</div></div>"
  )
}
function card(title, right, body, opt) {
  opt = opt || {}
  return (
    '<div class="min-w-0 rounded-md border border-border bg-card text-card-foreground shadow-xs' + (opt.cls ? " " + opt.cls : "") + '" data-slot="card">' +
    '<div class="flex items-center justify-between gap-2 px-4 py-3 border-b border-border" data-slot="card-header">' +
    '<div class="text-sm font-semibold text-foreground" data-slot="card-title">' + title + "</div>" + (right || "") + "</div>" +
    '<div class="' + (opt.body || "p-4") + '" data-slot="card-content">' + body + "</div></div>"
  )
}
function seg(items, active, act, key) {
  return (
    '<div class="inline-flex rounded-md border border-border bg-muted p-0.5">' +
    items.map(function (it) {
      var on = it === active
      return (
        '<button class="rounded px-3 py-1 text-xs font-medium transition-colors ' +
        (on ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground") +
        '" data-act="' + act + '" data-v="' + esc(it) + '"' + (key ? ' data-k="' + esc(key) + '"' : "") + ">" + esc(it) + "</button>"
      )
    }).join("") + "</div>"
  )
}
var SEL = "h-8 rounded-md border border-border bg-background px-2 text-xs text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
var INP = "h-8 rounded-md border border-border bg-background px-2.5 text-xs text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
function options(list, cur) {
  return list.map(function (o) {
    var v = typeof o === "object" ? o[0] : o
    var l = typeof o === "object" ? o[1] : o
    return '<option value="' + esc(v) + '"' + (String(v) === String(cur) ? " selected" : "") + ">" + esc(l) + "</option>"
  }).join("")
}
function filterSel(label, list, cur, change, k) {
  return (
    '<label class="flex items-center gap-1.5 text-xs text-muted-foreground"><span class="whitespace-nowrap font-medium">' + esc(label) + "</span>" +
    '<select class="' + SEL + '" data-change="' + change + '" data-k="' + k + '">' + options(list, cur) + "</select></label>"
  )
}

/* ---------------------------------------------------------------
 * 가상 데이터 (모든 이름·번호·금액은 체험판용으로 지어낸 것)
 * ------------------------------------------------------------- */
var TODAY = day(0)
var ME = { name: "오세린", short: "오대표", role: "대표/관리자" }

var STAFF = [
  { id: "s1", name: "오세린", dept: "경영", team: "대표/관리자" },
  { id: "s2", name: "남도윤", dept: "영업", team: "영업팀" },
  { id: "s3", name: "서하람", dept: "영업", team: "영업팀" },
  { id: "s4", name: "류채안", dept: "영업", team: "영업팀" },
  { id: "s5", name: "진다솜", dept: "디자인", team: "디자인팀" },
  { id: "s6", name: "위태린", dept: "디자인", team: "디자인팀" },
  { id: "s7", name: "탁은호", dept: "물류", team: "물류팀" },
  { id: "s8", name: "길나래", dept: "발주", team: "발주팀" },
  { id: "s9", name: "봉시온", dept: "경리", team: "경리팀" },
]

var NAV = [
  { group: null, items: [["/", "대시보드", "layout-dashboard"], ["/executive", "경영 현황", "gauge"]] },
  { group: "영업 / 주문", items: [["/orders", "통합 주문관리", "shopping-cart"], ["/orders/online", "온라인 주문", "globe"], ["/orders/group", "단체 납품", "building2"], ["/orders/custom", "커스텀 제작", "palette"]] },
  { group: "재고 / 물류", items: [["/inventory", "통합 재고관리", "boxes"], ["/inventory/io", "입출고 관리", "arrow-left-right"], ["/inventory/reserved", "예약 / 홀딩 재고", "lock"], ["/purchase", "발주 관리", "truck"], ["/products", "상품 관리", "package"]] },
  { group: "업무", items: [["/quotes", "견적서 관리", "file-text"], ["/work-orders", "작업지시서", "clipboard-list"], ["/design", "디자인 작업", "pen-tool"], ["/clients", "거래처 관리", "contact"]] },
  { group: "정산", items: [["/payments", "입금 관리", "wallet"], ["/settlement", "매출 / 정산", "landmark"], ["/vouchers", "증빙 관리", "receipt"]] },
  { group: "통계", items: [["/analytics/sales", "매출 분석", "trending-up"], ["/analytics/products", "상품 판매 분석", "chart-column"], ["/analytics/inventory", "재고 분석", "boxes"], ["/analytics/purchase", "발주 분석", "package-search"]] },
  { group: "시스템", items: [["/system/staff", "직원 / 권한 관리", "users"], ["/system/logs", "감사 로그", "scroll-text"], ["/system/channels", "채널 연동", "plug"], ["/system/print", "나염 전용", "printer"], ["/system/integrations", "연동 관리", "plug"], ["/system/settings", "환경설정", "settings"]] },
]

/* 상품 · SKU */
var CATS = { "아우터/상의/하의": ["아우터", "상의", "하의"], "글러브/가방/부츠": ["글러브", "가방", "부츠"], "장비/액세서리": ["장비", "액세서리"] }
var PRODUCTS = [
  { code: "OA-1101", name: "스톰쉴드 방수 자켓", cat: "아우터", shape: "jacket", colors: ["NAVY", "CHARCOAL"], sizes: ["M", "L", "XL", "2XL"], price: 89000, cost: 41000 },
  { code: "OA-1102", name: "라이트 패딩 베스트", cat: "아우터", shape: "vest", colors: ["BLACK", "KHAKI"], sizes: ["M", "L", "XL", "2XL"], price: 54000, cost: 23500 },
  { code: "OT-2201", name: "쿨드라이 기능성 반팔", cat: "상의", shape: "tee", colors: ["WHITE", "NAVY", "RED"], sizes: ["90", "95", "100", "105", "110", "115"], price: 15900, cost: 6200 },
  { code: "OT-2202", name: "헤비 코튼 오버핏 티", cat: "상의", shape: "tee", colors: ["BLACK", "IVORY"], sizes: ["90", "95", "100", "105", "110"], price: 19900, cost: 7900 },
  { code: "OT-2203", name: "데일리 피케 폴로", cat: "상의", shape: "polo", colors: ["NAVY", "WHITE"], sizes: ["95", "100", "105", "110"], price: 27900, cost: 11800 },
  { code: "OT-2204", name: "기모 맨투맨", cat: "상의", shape: "sweat", colors: ["GRAY", "NAVY"], sizes: ["90", "95", "100", "105", "110", "115"], price: 32000, cost: 13400 },
  { code: "OB-3301", name: "액티브 카고 팬츠", cat: "하의", shape: "pants", colors: ["BEIGE", "BLACK"], sizes: ["28", "30", "32", "34", "36"], price: 45000, cost: 19800 },
  { code: "OB-3302", name: "트레이닝 조거 팬츠", cat: "하의", shape: "pants", colors: ["BLACK", "NAVY"], sizes: ["M", "L", "XL", "2XL"], price: 29000, cost: 12100 },
  { code: "GB-4401", name: "컷레지스트 작업 장갑", cat: "글러브", shape: "glove", colors: ["GRAY"], sizes: ["S", "M", "L"], price: 14500, cost: 5600 },
  { code: "GB-4402", name: "데일리 백팩 25L", cat: "가방", shape: "bag", colors: ["BLACK"], sizes: ["FREE"], price: 49000, cost: 21000 },
  { code: "GB-4403", name: "미드컷 워커 부츠", cat: "부츠", shape: "boot", colors: ["BROWN", "BLACK"], sizes: ["250", "260", "270", "280"], price: 89000, cost: 43000 },
  { code: "EA-5501", name: "리플렉티브 암밴드", cat: "액세서리", shape: "band", colors: ["NEON"], sizes: ["FREE"], price: 4900, cost: 1500 },
  { code: "EA-5502", name: "니트 비니", cat: "액세서리", shape: "beanie", colors: ["BLACK", "OATMEAL"], sizes: ["FREE"], price: 12900, cost: 4300 },
  { code: "EA-5503", name: "멀티 툴 파우치", cat: "장비", shape: "pouch", colors: ["COYOTE"], sizes: ["FREE"], price: 23000, cost: 9100 },
]
var SKUS = []
PRODUCTS.forEach(function (p) {
  p.colors.forEach(function (c) {
    p.sizes.forEach(function (s, si) {
      var mid = Math.abs(si - (p.sizes.length - 1) / 2)
      var sold = Math.max(0, Math.round(ri(20, 90) * (1.6 - mid * 0.35)))
      var safety = Math.max(20, Math.ceil((sold * 1.2) / 10) * 10)
      var stock = ri(0, 40) < 1 ? 0 : Math.max(ri(30, 420), safety * 2 + ri(0, 120))
      SKUS.push({
        id: p.code + "-" + c + "-" + s,
        code: p.code, color: c, size: s,
        stock: stock, incoming: 0, sold30: sold,
        safety: safety,
      })
    })
  })
})
function sku(id) {
  for (var i = 0; i < SKUS.length; i++) if (SKUS[i].id === id) return SKUS[i]
  return null
}
function prod(code) {
  for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].code === code) return PRODUCTS[i]
  return null
}
function skuLabel(s) {
  return s.color + " / " + s.size
}
// 수요가 많은 몇 개 SKU 는 부족 상황을 일부러 만들어 둔다 (발주 추천이 보이도록)
;(function () {
  var hot = [["OT-2201-NAVY-105", 180, 460], ["OT-2202-BLACK-100", 120, 390], ["OA-1101-NAVY-L", 40, 170], ["OT-2204-GRAY-105", 260, 300], ["GB-4403-BLACK-260", 90, 75]]
  hot.forEach(function (h) {
    var s = sku(h[0])
    s.stock = h[1]
    s.sold30 = h[2]
    s.safety = Math.ceil((h[2] * 1.2) / 10) * 10
  })
})()

/* 거래처 */
var CLIENTS = [
  { name: "(가상) 푸른숲소방서", kind: "기관", contact: "도해원 소방위", phone: "041-000-1190", rep: "남도윤" },
  { name: "(가상) 청람시청 시설과", kind: "기관", contact: "마준혁 주무관", phone: "033-000-2741", rep: "서하람" },
  { name: "(가상) 제7기동여단 본부중대", kind: "군부대", contact: "송유찬 중사", phone: "031-000-7702", rep: "남도윤" },
  { name: "(가상) 다온물산 안전관리팀", kind: "기업", contact: "피수아 대리", phone: "02-000-4418", rep: "서하람" },
  { name: "(가상) 은하건설 현장팀", kind: "기업", contact: "양재윤 과장", phone: "02-000-6620", rep: "류채안" },
  { name: "(가상) 한별고 3학년", kind: "학교", contact: "구서진 학생회장", phone: "010-0000-3108", rep: "류채안" },
  { name: "(가상) 새솔대 응원단", kind: "학교", contact: "변지오 단장", phone: "010-0000-5521", rep: "서하람" },
  { name: "(가상) 바람개비 러닝클럽", kind: "동호회", contact: "엄태하 운영진", phone: "010-0000-8834", rep: "류채안" },
  { name: "(가상) 모래내 조기축구회", kind: "동호회", contact: "석인후 총무", phone: "010-0000-2290", rep: "서하람" },
]
function client(name) {
  for (var i = 0; i < CLIENTS.length; i++) if (CLIENTS[i].name === name) return CLIENTS[i]
  return null
}

/* 주문 흐름 (유형별 단계 → 대시보드 진행 단계로 묶기) */
var PIPE = ["신규 문의", "견적 진행", "사업 확정", "상품 준비", "디자인 작업", "작업지시 완료", "외주 제작", "출고 준비", "출고 완료", "결제 진행", "입금 완료"]
var PIPE_BAR = { "신규 문의": "bg-blue-500", "견적 진행": "bg-blue-500", "사업 확정": "bg-primary", "상품 준비": "bg-primary", "디자인 작업": "bg-amber-500", "작업지시 완료": "bg-amber-500", "외주 제작": "bg-amber-500", "출고 준비": "bg-blue-500", "출고 완료": "bg-emerald-500", "결제 진행": "bg-blue-500", "입금 완료": "bg-emerald-500" }
var FLOW = {
  단체납품: ["접수", "견적", "사업확정", "상품준비", "출고확정", "결제진행", "입금완료", "납품완료"],
  커스텀제작: ["1.사업확정", "2.디자인작업", "3.작업지시서완료", "4.재고확보완료", "5.나염처출고", "6.출고준비", "7.출고완료", "8.입금확인", "9.납품최종완료"],
  온라인: ["상품준비", "출고준비", "출고완료", "배송완료"],
}
var BUCKET = {
  단체납품: ["신규 문의", "견적 진행", "사업 확정", "상품 준비", "출고 준비", "결제 진행", "입금 완료", null],
  커스텀제작: ["사업 확정", "디자인 작업", "작업지시 완료", "작업지시 완료", "외주 제작", "출고 준비", "출고 완료", "입금 완료", null],
  온라인: ["상품 준비", "출고 준비", "출고 완료", null],
}
var CHANNELS = { 온라인: ["네이버 스마트스토어", "쿠팡", "자사몰"], 단체납품: ["전화", "나라장터", "국방전자조달"], 커스텀제작: ["카카오톡", "전화"] }

function stageIdx(o) {
  return FLOW[o.type].indexOf(o.stage)
}
function bucket(o) {
  return BUCKET[o.type][stageIdx(o)]
}
function isDone(o) {
  return bucket(o) == null
}
function shipped(o) {
  var i = stageIdx(o)
  if (o.type === "단체납품") return i >= 5
  if (o.type === "커스텀제작") return i >= 6
  return i >= 2
}
function confirmed(o) {
  return o.type === "온라인" || (o.type === "단체납품" ? stageIdx(o) >= 2 : true)
}

var ORDERS = []
var seqByDay = {}
function nextNo(prefix, d) {
  var k = prefix + d
  seqByDay[k] = (seqByDay[k] || 110) + 1
  return prefix + "-" + yymmdd(d) + "-" + seqByDay[k]
}
function addOrder(o) {
  o.no = o.no || nextNo("ORD", o.created)
  o.paid = o.paid || 0
  o.dates = o.dates || {}
  o.updatedAt = o.updatedAt || Date.now() - ri(3, 300) * 60000
  ORDERS.unshift(o)
  return o
}
;(function seedOrders() {
  var list = [
    { type: "단체납품", channel: "전화", client: "(가상) 푸른숲소방서", manager: "남도윤", item: "스톰쉴드 방수 자켓 외 2종", sku: "OA-1101-NAVY-L", qty: 160, kinds: 3, amount: 15840000, stage: "상품준비", due: 9, created: -6 },
    { type: "단체납품", channel: "나라장터", client: "(가상) 청람시청 시설과", manager: "서하람", item: "라이트 패딩 베스트", sku: "OA-1102-BLACK-XL", qty: 240, kinds: 1, amount: 12960000, stage: "출고확정", due: 3, created: -12 },
    { type: "단체납품", channel: "국방전자조달", client: "(가상) 제7기동여단 본부중대", manager: "남도윤", item: "기모 맨투맨 외 1종", sku: "OT-2204-GRAY-105", qty: 420, kinds: 2, amount: 13440000, stage: "결제진행", due: -2, created: -20, paid: 6000000 },
    { type: "단체납품", channel: "전화", client: "(가상) 다온물산 안전관리팀", manager: "서하람", item: "미드컷 워커 부츠", sku: "GB-4403-BLACK-260", qty: 85, kinds: 1, amount: 7565000, stage: "접수", due: 21, created: 0 },
    { type: "단체납품", channel: "나라장터", client: "(가상) 다온물산 안전관리팀", manager: "서하람", item: "리플렉티브 암밴드", sku: "EA-5501-NEON-FREE", qty: 500, kinds: 1, amount: 2450000, stage: "입금완료", due: -5, created: -18, paid: 2450000 },
    { type: "커스텀제작", channel: "카카오톡", client: "(가상) 한별고 3학년", manager: "류채안", item: "졸업 기념 맨투맨", sku: "OT-2204-NAVY-100", qty: 180, amount: 7020000, stage: "2.디자인작업", due: 19, created: -3, designer: "진다솜", cs: "류채안", spec: "네이비 / S~2XL · 등판 2도" },
    { type: "커스텀제작", channel: "전화", client: "(가상) 새솔대 응원단", manager: "서하람", item: "응원단 단체 반팔", sku: "OT-2201-WHITE-105", qty: 260, amount: 4940000, stage: "3.작업지시서완료", due: 12, created: -8, designer: "위태린", cs: "서하람", spec: "화이트 / S~XL · 전면 1도+등판 2도" },
    { type: "커스텀제작", channel: "카카오톡", client: "(가상) 바람개비 러닝클럽", manager: "류채안", item: "러닝 반팔 티", sku: "OT-2201-NAVY-95", qty: 70, amount: 3290000, stage: "5.나염처출고", due: 6, created: -14, designer: "진다솜", cs: "류채안", spec: "네이비 / S~XL · 전면 1도", extra: { item: "경량 바람막이", qty: 70, spec: "차콜 / 90~105 · 좌흉 1도" } },
    { type: "커스텀제작", channel: "전화", client: "(가상) 모래내 조기축구회", manager: "서하람", item: "팀 유니폼 세트", sku: "OT-2201-RED-105", qty: 44, amount: 2464000, stage: "7.출고완료", due: -1, created: -24, designer: "위태린", cs: "서하람", spec: "레드 / S~2XL · 전면+등번호" },
    { type: "커스텀제작", channel: "카카오톡", client: "(가상) 은하건설 현장팀", manager: "류채안", item: "현장 작업 조끼", sku: "OA-1102-KHAKI-L", qty: 120, amount: 0, stage: "1.사업확정", due: 27, created: 0, designer: "", cs: "류채안", spec: "카키 / M~2XL · 좌흉 자수" },
    { type: "커스텀제작", channel: "전화", client: "(가상) 청람시청 시설과", manager: "서하람", item: "시설과 근무 폴로", sku: "OT-2203-NAVY-105", qty: 95, amount: 3135000, stage: "6.출고준비", due: 2, created: -16, designer: "진다솜", cs: "서하람", spec: "네이비 / M~2XL · 좌흉 자수" },
  ]
  list.reverse().forEach(function (x) {
    x.created = day(x.created)
    x.due = day(x.due)
    if (x.type === "커스텀제작") {
      var n = FLOW.커스텀제작.indexOf(x.stage)
      x.dates = {}
      for (var k = 0; k <= n; k++) x.dates[k] = day(-(n - k) * 2)
      if (n >= 4) x.printer = "(가상) 별빛프린트"
    }
    addOrder(x)
  })
})()
function order(no) {
  for (var i = 0; i < ORDERS.length; i++) if (ORDERS[i].no === no) return ORDERS[i]
  return null
}

/* 온라인 채널 주문 */
var CH_INFO = [
  { key: "네이버 스마트스토어", short: "스마트스토어", title: "NAVER SmartStore", synced: 2, today: 0 },
  { key: "쿠팡", short: "쿠팡", title: "Coupang", synced: 6, today: 0 },
  { key: "자사몰", short: "자사몰", title: "자사몰", synced: 4, today: 0 },
]
var ONLINE = []
var onlineSeq = 40210
var BUYERS = ["윤*아", "남*호", "선*결", "하*림", "우*진", "제*은", "모*현", "인*비", "추*율", "방*솔", "천*우", "성*담"]
function onlineNo(ch) {
  onlineSeq += ri(3, 17)
  if (ch === "쿠팡") return "CPG-" + (onlineSeq + 31000)
  if (ch === "자사몰") return "MALL-" + onlineSeq
  return "SS" + yymmdd(TODAY) + "-" + onlineSeq
}
function addOnline(ch, skuId, qty, ship) {
  var s = sku(skuId)
  var p = prod(s.code)
  var o = {
    channel: ch, no: onlineNo(ch), buyer: BUYERS[ri(0, BUYERS.length - 1)], code: s.code, name: p.name, sku: skuId,
    qty: qty, amount: p.price * qty, pay: "결제완료", ship: ship || "배송준비",
    track: ship && ship !== "배송준비" ? "5500-" + ri(1000, 9999) + "-" + ri(1000, 9999) : "-",
    applied: true, date: TODAY,
  }
  s.stock = Math.max(0, s.stock - qty)
  ONLINE.unshift(o)
  CH_INFO.forEach(function (c) {
    if (c.key === ch) c.today++
  })
  return o
}
;(function () {
  var seedList = [
    ["네이버 스마트스토어", "OT-2201-NAVY-105", 2, "배송준비"],
    ["쿠팡", "OB-3301-BEIGE-32", 1, "출고완료"],
    ["자사몰", "OA-1101-CHARCOAL-XL", 1, "배송준비"],
    ["네이버 스마트스토어", "OT-2202-BLACK-100", 3, "배송중"],
    ["쿠팡", "EA-5502-BLACK-FREE", 2, "배송준비"],
    ["자사몰", "OT-2203-WHITE-110", 1, "출고완료"],
    ["네이버 스마트스토어", "GB-4402-BLACK-FREE", 1, "출고완료"],
  ]
  seedList.reverse().forEach(function (x) {
    addOnline(x[0], x[1], x[2], x[3])
  })
  ONLINE[2].applied = false
  sku(ONLINE[2].sku).stock += ONLINE[2].qty
  CH_INFO[0].today = 41
  CH_INFO[1].today = 17
  CH_INFO[2].today = 23
})()

/* 예약(홀딩) 재고 */
var RESV = [
  { id: 1, order: ORDERS.filter(function (o) { return o.client === "(가상) 청람시청 시설과" && o.type === "단체납품" })[0].no, sku: "OA-1102-BLACK-XL", qty: 240 },
  { id: 2, order: ORDERS.filter(function (o) { return o.client === "(가상) 새솔대 응원단" })[0].no, sku: "OT-2201-WHITE-105", qty: 120 },
  { id: 3, order: ORDERS.filter(function (o) { return o.client === "(가상) 푸른숲소방서" })[0].no, sku: "OA-1101-NAVY-L", qty: 40 },
]
var resvSeq = 3
sku("OA-1102-BLACK-XL").stock = 300
sku("OT-2201-WHITE-105").stock = 210
function reserved(skuId) {
  return RESV.reduce(function (a, r) { return a + (r.sku === skuId ? r.qty : 0) }, 0)
}
function avail(s) {
  return s.stock - reserved(s.id)
}
function confirmedDemand(skuId) {
  return ORDERS.reduce(function (a, o) {
    return a + (o.sku === skuId && confirmed(o) && !shipped(o) && o.type !== "온라인" ? o.qty : 0)
  }, 0)
}

/* 입출고 이력 */
var IO = []
var ioSeq = 0

/* 발주 */
var PO = {} // skuId -> { qty, status, eta }
PO["OT-2204-GRAY-105"] = { qty: 300, status: "입고예정", eta: day(5) }
sku("OT-2204-GRAY-105").incoming = 300
PO["GB-4403-BLACK-260"] = { qty: 120, status: "발주완료", eta: day(14) }
sku("GB-4403-BLACK-260").incoming = 120
function recommend(s) {
  var forecast = Math.round(s.sold30)
  var cd = confirmedDemand(s.id)
  var a = avail(s)
  // 가용 + 입고예정이 안전재고 + 확정주문보다 적을 때만 발주를 추천한다
  if (a + s.incoming >= s.safety + cd) return { need: 0, forecast: forecast }
  var need = s.safety + cd + forecast - Math.max(0, a) - s.incoming
  return { need: need > 0 ? Math.ceil(need / 10) * 10 : 0, forecast: forecast }
}
function purchaseRows() {
  var rows = SKUS.map(function (s) {
    return { s: s, r: recommend(s), po: PO[s.id] }
  }).filter(function (x) {
    return x.r.need > 0 || x.po
  })
  rows.sort(function (a, b) {
    var ka = a.po ? -1 : a.r.need, kb = b.po ? -1 : b.r.need
    return kb - ka
  })
  return rows
}
function poStatus(x) {
  if (x.po) return x.po.status
  return x.r.need > 0 ? "발주필요" : "발주완료"
}

/* 견적서 */
var QUOTES = []
function addQuote(q) {
  q.no = q.no || nextNo("QT", q.date)
  q.vat = Math.round(q.total / 11)
  q.supply = q.total - q.vat
  QUOTES.unshift(q)
  return q
}
;(function () {
  var find = function (c, t) { return ORDERS.filter(function (o) { return o.client === c && o.type === t })[0] }
  ;[
    { client: "(가상) 푸른숲소방서", manager: "남도윤", date: day(-7), total: 15840000, status: "사업확정", type: "단체납품", item: "스톰쉴드 방수 자켓 외 2종", qty: 160, sku: "OA-1101-NAVY-L", order: find("(가상) 푸른숲소방서", "단체납품").no },
    { client: "(가상) 한별고 3학년", manager: "류채안", date: day(-4), total: 7020000, status: "사업확정", type: "커스텀제작", item: "졸업 기념 맨투맨", qty: 180, sku: "OT-2204-NAVY-100", order: find("(가상) 한별고 3학년", "커스텀제작").no },
    { client: "(가상) 은하건설 현장팀", manager: "류채안", date: day(-1), total: 4350000, status: "전송완료", type: "단체납품", item: "컷레지스트 작업 장갑", qty: 300, sku: "GB-4401-GRAY-L" },
    { client: "(가상) 바람개비 러닝클럽", manager: "류채안", date: day(0), total: 1880000, status: "작성중", type: "커스텀제작", item: "대회용 싱글렛", qty: 80, sku: "OT-2201-WHITE-95" },
    { client: "(가상) 청람시청 시설과", manager: "서하람", date: day(0), total: 5160000, status: "작성중", type: "단체납품", item: "니트 비니", qty: 400, sku: "EA-5502-BLACK-FREE" },
  ].reverse().forEach(addQuote)
})()

/* 디자인 작업 · 작업지시서 */
var DESIGN = [] // { order, designer, status: 시안작업|고객컨펌|컨펌완료, wo }
var WOS = [] // { no, order, front, back, vendor }
;(function () {
  ORDERS.forEach(function (o) {
    if (o.type !== "커스텀제작" || !o.designer) return
    var i = stageIdx(o)
    var job = { order: o.no, designer: o.designer, status: i >= 2 ? "컨펌완료" : "고객컨펌", title: o.item }
    if (i >= 2) {
      var w = { no: nextNo("WO", o.dates[2] || day(-3)), order: o.no, front: ri(1, 2), back: ri(1, 3), vendor: "(가상) 별빛프린트" }
      WOS.unshift(w)
      job.wo = w.no
    }
    DESIGN.push(job)
  })
  DESIGN.push({ order: ORDERS.filter(function (o) { return o.item === "현장 작업 조끼" })[0].no, designer: "위태린", status: "시안작업", title: "현장 작업 조끼" })
  ORDERS.filter(function (o) { return o.item === "현장 작업 조끼" })[0].designer = "위태린"
})()
var WO_FLOW = ["작업지시완료", "제작중", "검수", "출고완료"]
function woStatus(w) {
  var i = stageIdx(order(w.order))
  return i >= 6 ? "출고완료" : i >= 5 ? "검수" : i >= 4 ? "제작중" : "작업지시완료"
}
var WO_STEP = { 작업지시완료: 2, 제작중: 4, 검수: 5, 출고완료: 6 }
function quoteOf(orderNo) {
  return QUOTES.filter(function (q) { return q.order === orderNo })[0]
}
function woOf(orderNo) {
  return WOS.filter(function (w) { return w.order === orderNo })[0]
}

/* 입금 내역 */
var PAYMENTS = []
var paySeq = 0
function addPay(p) {
  p.id = ++paySeq
  PAYMENTS.unshift(p)
  return p
}
;(function () {
  var g = function (c, t) { return ORDERS.filter(function (o) { return o.client === c && (!t || o.type === t) })[0] }
  ;[
    { time: "09:08", bank: "농협은행", payer: "다온물산(주)", amount: 2450000, suggest: g("(가상) 다온물산 안전관리팀", "단체납품") && ORDERS.filter(function (o) { return o.item === "리플렉티브 암밴드" })[0].no, score: 99, status: "자동매칭" },
    { time: "10:41", bank: "우리은행", payer: "제7기동여단", amount: 6000000, suggest: g("(가상) 제7기동여단 본부중대").no, score: 96, status: "자동매칭" },
    { time: "11:05", bank: "카카오뱅크", payer: "엄태하", amount: 3290000, suggest: g("(가상) 바람개비 러닝클럽").no, score: 64, status: "확인필요" },
    { time: "13:22", bank: "SC제일은행", payer: "(주)누리상사", amount: 1150000, suggest: null, score: 28, status: "미매칭" },
    { time: "14:47", bank: "우리은행", payer: "모래내축구", amount: 2464000, suggest: g("(가상) 모래내 조기축구회").no, score: 87, status: "확인필요" },
  ].forEach(function (p) {
    p.date = TODAY
    addPay(p)
  })
})()

/* 증빙 */
var VOUCHERS = []
function addVoucher(orderNo, total, status, date) {
  var o = order(orderNo)
  var v = { no: nextNo("TX", date || TODAY), client: o.client, order: orderNo, date: date || TODAY, total: total, status: status }
  v.vat = Math.round(total / 11)
  v.supply = total - v.vat
  VOUCHERS.unshift(v)
  return v
}
;(function () {
  addVoucher(ORDERS.filter(function (o) { return o.item === "리플렉티브 암밴드" })[0].no, 2450000, "발행완료", day(0))
  addVoucher(ORDERS.filter(function (o) { return o.client === "(가상) 제7기동여단 본부중대" })[0].no, 6000000, "발행대기", day(0))
  addVoucher(ORDERS.filter(function (o) { return o.client === "(가상) 청람시청 시설과" && o.type === "단체납품" })[0].no, 12960000, "발행대기", day(-1))
  addVoucher(ORDERS.filter(function (o) { return o.client === "(가상) 모래내 조기축구회" })[0].no, 2464000, "발행대기", day(-1))
  addVoucher(ORDERS.filter(function (o) { return o.client === "(가상) 새솔대 응원단" })[0].no, 4940000, "발행완료", day(-3))
})()

/* 일자별 채널 매출 이력 (최근 70일) */
var SERIES = ["단체납품", "스마트스토어", "자사몰", "커스텀제작", "쿠팡"]
var SERIES_COLOR = { 단체납품: "var(--color-chart-4)", 스마트스토어: "var(--color-chart-2)", 자사몰: "var(--color-chart-1)", 커스텀제작: "var(--color-chart-5)", 쿠팡: "var(--color-chart-3)" }
var DAILY = {} // date -> { 채널: 금액 }
;(function () {
  for (var i = 69; i >= 0; i--) {
    var d = day(-i)
    var wd = new Date(d + "T00:00:00").getDay()
    var w = wd === 0 || wd === 6 ? 0.55 : 1
    DAILY[d] = {
      단체납품: Math.round((ri(0, 10) < 3 ? ri(0, 2) : ri(3, 19)) * 1e6 * w + ri(0, 9) * 1e5),
      스마트스토어: Math.round((ri(62, 118) * 1e5) * (0.8 + w * 0.2)),
      자사몰: Math.round(ri(78, 152) * 1e5 * (0.75 + w * 0.25)),
      커스텀제작: Math.round(ri(18, 74) * 1e5 * w),
      쿠팡: Math.round(ri(26, 63) * 1e5 * (0.85 + w * 0.15)),
    }
  }
})()
function addSales(series, amount) {
  DAILY[TODAY][series] = (DAILY[TODAY][series] || 0) + amount
}
function dayTotal(d) {
  var x = DAILY[d]
  if (!x) return 0
  return SERIES.reduce(function (a, k) { return a + (x[k] || 0) }, 0)
}
function rangeDays(n) {
  var out = []
  for (var i = n - 1; i >= 0; i--) out.push(day(-i))
  return out
}
function monthDays() {
  var out = []
  for (var i = 69; i >= 0; i--) {
    var d = day(-i)
    if (d.slice(0, 7) === TODAY.slice(0, 7)) out.push(d)
  }
  return out
}
function sumDays(days, keys) {
  keys = keys || SERIES
  return days.reduce(function (a, d) {
    return a + keys.reduce(function (b, k) { return b + ((DAILY[d] || {})[k] || 0) }, 0)
  }, 0)
}
var SEG = { 온라인: ["스마트스토어", "자사몰", "쿠팡"], 단체납품: ["단체납품"], 커스텀제작: ["커스텀제작"] }
var SEG_COLOR = { 온라인: "var(--color-chart-2)", 단체납품: "var(--color-chart-1)", 커스텀제작: "var(--color-chart-3)" }

/* 미수금 · 결제 상태 */
function receivable(o) {
  // 출고(납품)된 뒤에 남은 잔액만 미수금으로 본다
  if (o.type === "온라인" || !shipped(o) || !o.amount) return 0
  return Math.max(0, o.amount - o.paid)
}
function payStatus(o) {
  if (o.type === "온라인") return "결제완료"
  if (o.amount && o.paid >= o.amount) return "입금완료"
  if (o.paid > 0) return "부분입금"
  if (!confirmed(o)) return "견적"
  if (bucket(o) === "결제 진행") return "결제진행"
  return shipped(o) ? "입금대기" : "계약완료"
}
var PAY_TONE = { 결제완료: "green", 입금완료: "green", 부분입금: "blue", 견적: "muted", 결제진행: "blue", 입금대기: "amber", 계약완료: "blue" }
function stockStatus(o) {
  if (!o.sku) return "정상"
  if (shipped(o)) return "재고확보"
  var r = RESV.reduce(function (a, x) { return a + (x.order === o.no ? x.qty : 0) }, 0)
  if (r >= o.qty) return "재고확보"
  if (r > 0) return "예약재고"
  var s = sku(o.sku)
  return s && avail(s) >= o.qty ? "정상" : "재고부족"
}
var STOCK_TONE = { 정상: "green", 재고확보: "green", 예약재고: "blue", 재고부족: "red" }
function skuStatus(s) {
  var a = avail(s)
  if (s.stock <= 0) return "품절"
  if (a < s.safety) return "재고부족"
  if (s.stock > Math.max(300, s.sold30 * 5)) return "과잉"
  return "정상"
}
var SKU_TONE = { 정상: "green", 재고부족: "red", 품절: "muted", 과잉: "amber" }

/* 감사 로그 */
var LOGS = [
  { t: day(-1) + " 17:42:10", who: "탁은호", act: "입고 등록", target: "기모 맨투맨 (OT-2204)", detail: "GRAY / 110 · +60" },
  { t: day(-1) + " 15:03:51", who: "진다솜", act: "시안 업로드", target: "(가상) 한별고 3학년 졸업 기념 맨투맨", detail: "시안 2종 · 고객 컨펌 요청" },
  { t: day(-1) + " 11:20:33", who: "서하람", act: "견적서 전송", target: "(가상) 은하건설 현장팀", detail: "₩4,350,000" },
  { t: day(-2) + " 16:48:02", who: "길나래", act: "발주서 생성", target: "기모 맨투맨 GRAY / 105", detail: "300개 · 입고예정" },
  { t: day(-2) + " 10:12:45", who: "오세린", act: "권한 변경", target: "탁은호 (물류팀)", detail: "입출고 관리 → 수정" },
  { t: day(-3) + " 09:31:27", who: "봉시온", act: "증빙 발행", target: "(가상) 새솔대 응원단", detail: "세금계산서 ₩4,940,000" },
]
function log(act, target, detail) {
  LOGS.unshift({ t: nowStamp(), who: ME.name, act: act, target: target, detail: detail || "" })
}

/* 권한 */
var PERM_LEVELS = ["없음", "뷰어", "수정"]
var PERMS = {}
;(function () {
  var all = []
  NAV.forEach(function (g) { g.items.forEach(function (it) { all.push(it[0]) }) })
  STAFF.forEach(function (s) {
    var p = {}
    all.forEach(function (path) {
      var lv = "없음"
      if (s.team === "대표/관리자") lv = "수정"
      else if (s.team === "영업팀") lv = /orders|quotes|clients/.test(path) ? "수정" : /^\/$|inventory|products/.test(path) ? "뷰어" : "없음"
      else if (s.team === "디자인팀") lv = /design|work-orders/.test(path) ? "수정" : /custom/.test(path) ? "뷰어" : "없음"
      else if (s.team === "물류팀") lv = /inventory|products/.test(path) ? "수정" : /orders$|purchase/.test(path) ? "뷰어" : "없음"
      else if (s.team === "발주팀") lv = /purchase|analytics\/(products|purchase|inventory)/.test(path) ? "수정" : /inventory|products/.test(path) ? "뷰어" : "없음"
      else if (s.team === "경리팀") lv = /payments|settlement|vouchers/.test(path) ? "수정" : /clients|analytics\/sales/.test(path) ? "뷰어" : "없음"
      p[path] = lv
    })
    PERMS[s.id] = p
  })
})()

/* ---------------------------------------------------------------
 * 화면 상태
 * ------------------------------------------------------------- */
var S = {
  navClosed: {},
  mobileNav: false,
  modal: null,
  role: "대표/관리자",
  range: "7일",
  ord: { q: "", type: "전체", channel: "전체", stage: "전체", pay: "전체" },
  groupView: "칸반",
  dashTab: "전체",
  custom: { step: "전체", field: "전체", q: "", sort: "no", dir: -1 },
  inv: { cat: "전체", q: "", status: "전체", sort: "name", limit: 50 },
  prd: { cat: "전체", q: "", sort: "name", limit: 12 },
  resvSku: "OA-1102-BLACK-XL",
  resvQty: "",
  anaProd: "OT-2201", anaColor: "전체", anaSize: "전체", anaSeg: "전체", anaPeriod: "최근 6개월",
  staff: "s1",
  syncAgo: 2,
}

/* 의류 모양 그림 (사진 대신 쓰는 단순 SVG) */
var CLR = { NAVY: "#26355d", CHARCOAL: "#41464d", BLACK: "#24272b", KHAKI: "#7d7853", WHITE: "#f3f3f0", RED: "#b4373e", IVORY: "#eee7d6", GRAY: "#9ba0a6", BEIGE: "#c8b791", BROWN: "#6d4c35", NEON: "#c9e63e", OATMEAL: "#d8ccb3", COYOTE: "#8d7657" }
function garment(shape, color, mark) {
  var f = CLR[color] || "#9aa3ad"
  var st = 'stroke="rgba(15,23,42,.22)" stroke-width="1.5" stroke-linejoin="round"'
  var dk = 'fill="rgba(0,0,0,.12)"'
  var g = ""
  if (shape === "tee" || shape === "polo")
    g = '<path d="M42 22 L30 26 L12 40 L22 56 L32 50 L32 100 L88 100 L88 50 L98 56 L108 40 L90 26 L78 22 C74 30 46 30 42 22Z" fill="' + f + '" ' + st + "/>" +
      (shape === "polo" ? '<path d="M48 24 L60 38 L72 24 L68 22 L60 30 L52 22Z" ' + dk + '/><path d="M60 38 L60 54" stroke="rgba(0,0,0,.25)" stroke-width="1.5"/>' : '<path d="M46 23 C50 31 70 31 74 23" fill="none" stroke="rgba(0,0,0,.18)" stroke-width="2"/>')
  else if (shape === "sweat" || shape === "jacket")
    g = '<path d="M42 20 L28 26 L14 44 L10 92 L22 94 L30 56 L32 100 L88 100 L90 56 L98 94 L110 92 L106 44 L92 26 L78 20 C74 28 46 28 42 20Z" fill="' + f + '" ' + st + "/>" +
      (shape === "jacket" ? '<path d="M44 20 C44 8 76 8 76 20 C70 26 50 26 44 20Z" ' + dk + '/><path d="M60 26 L60 100" stroke="rgba(255,255,255,.55)" stroke-width="2"/>' : '<path d="M32 94 L88 94" stroke="rgba(0,0,0,.18)" stroke-width="3"/><path d="M46 21 C50 29 70 29 74 21" fill="none" stroke="rgba(0,0,0,.18)" stroke-width="2"/>')
  else if (shape === "vest")
    g = '<path d="M44 18 L34 24 L34 44 C30 50 30 56 32 60 L32 100 L88 100 L88 60 C90 56 90 50 86 44 L86 24 L76 18 C72 30 48 30 44 18Z" fill="' + f + '" ' + st + '/><path d="M60 30 L60 100" stroke="rgba(255,255,255,.55)" stroke-width="2"/><path d="M34 52 L86 52 M34 72 L86 72" stroke="rgba(0,0,0,.14)" stroke-width="1.5"/>'
  else if (shape === "pants")
    g = '<path d="M36 14 L84 14 L90 104 L68 104 L60 48 L52 104 L30 104Z" fill="' + f + '" ' + st + '/><path d="M36 22 L84 22" stroke="rgba(0,0,0,.18)" stroke-width="2"/>'
  else if (shape === "glove")
    g = '<path d="M40 104 L40 60 L32 44 C30 38 36 34 40 40 L46 50 L46 22 C46 16 54 16 54 22 L54 46 L56 16 C56 10 64 10 64 16 L64 46 L66 20 C66 14 74 14 74 20 L74 48 L76 30 C76 24 84 24 84 30 L82 70 L80 104Z" fill="' + f + '" ' + st + '/><path d="M40 92 L80 92" stroke="rgba(0,0,0,.2)" stroke-width="3"/>'
  else if (shape === "bag")
    g = '<path d="M46 26 C46 12 74 12 74 26" fill="none" stroke="' + f + '" stroke-width="5"/><rect x="30" y="24" width="60" height="78" rx="14" fill="' + f + '" ' + st + '/><rect x="40" y="62" width="40" height="28" rx="6" ' + dk + "/>"
  else if (shape === "boot")
    g = '<path d="M38 18 L66 18 L68 70 L100 80 C106 82 106 100 98 100 L30 100 C26 100 26 94 28 90Z" fill="' + f + '" ' + st + '/><path d="M28 94 L104 94" stroke="rgba(0,0,0,.35)" stroke-width="5"/>'
  else if (shape === "band")
    g = '<rect x="18" y="48" width="84" height="24" rx="12" fill="' + f + '" ' + st + '/><path d="M24 60 L96 60" stroke="rgba(255,255,255,.8)" stroke-width="4" stroke-dasharray="6 4"/>'
  else if (shape === "beanie")
    g = '<path d="M26 82 C26 38 94 38 94 82Z" fill="' + f + '" ' + st + '/><rect x="22" y="78" width="76" height="20" rx="4" fill="' + f + '" ' + st + '/><circle cx="60" cy="36" r="8" fill="' + f + '" ' + st + "/>"
  else
    g = '<rect x="32" y="26" width="56" height="70" rx="8" fill="' + f + '" ' + st + '/><path d="M32 44 L88 44" stroke="rgba(0,0,0,.2)" stroke-width="2"/><rect x="44" y="56" width="32" height="20" rx="3" ' + dk + "/>"
  if (mark)
    g += '<circle cx="60" cy="58" r="13" fill="none" stroke="' + (color === "WHITE" || color === "IVORY" ? "#26355d" : "#f5d77a") + '" stroke-width="2.5"/><text x="60" y="62.5" text-anchor="middle" font-size="11" font-weight="700" fill="' + (color === "WHITE" || color === "IVORY" ? "#26355d" : "#f5d77a") + '">' + esc(mark) + "</text>"
  return '<svg viewBox="0 0 120 120" class="size-full" role="img" aria-label="상품 그림">' + g + "</svg>"
}
function prodArt(code, color, cls) {
  var p = prod(code)
  return '<div class="' + (cls || "size-9 rounded border border-border bg-muted") + '">' + garment(p ? p.shape : "tee", color || (p && p.colors[0])) + "</div>"
}
function shortName(n) {
  return String(n || "").replace("(가상) ", "")
}
function orderArt(o, cls) {
  var s = o.sku ? sku(o.sku) : null
  var p = s ? prod(s.code) : null
  return '<div class="' + cls + '">' + garment(p ? p.shape : "tee", s ? s.color : "NAVY", shortName(o.client).slice(0, 2)) + "</div>"
}

/* ---------------------------------------------------------------
 * 사이드바 · 상단바
 * ------------------------------------------------------------- */
function aside(path) {
  var nav = NAV.map(function (g, gi) {
    var closed = g.group && S.navClosed[gi]
    var head = g.group
      ? '<button class="flex w-full items-center justify-between gap-2 rounded-md px-2 pt-3 pb-1.5 text-[10.5px] font-semibold uppercase tracking-wider text-sidebar-foreground/40 transition-colors hover:text-sidebar-foreground/70" type="button" data-act="navGroup" data-i="' + gi + '"><span>' + esc(g.group) + "</span>" + ic("chevron-down", "size-3.5 shrink-0 transition-transform" + (closed ? " -rotate-90" : "")) + "</button>"
      : ""
    var items = closed
      ? ""
      : '<ul class="space-y-0.5">' +
        g.items.map(function (it) {
          var on = it[0] === path
          return (
            '<li><a class="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors ' +
            (on ? "bg-sidebar-primary text-white shadow-sm" : "text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-white") +
            '" href="#' + it[0] + '">' + ic(it[2], "size-4 shrink-0") + '<span class="truncate">' + esc(it[1]) + "</span></a></li>"
          )
        }).join("") + "</ul>"
    return '<div class="mb-1">' + head + items + "</div>"
  }).join("")
  return (
    (S.mobileNav ? '<div class="fixed inset-0 z-20 bg-black/40 md:hidden" data-act="mnav"></div>' : "") +
    '<aside class="fixed inset-y-0 left-0 z-30 ' + (S.mobileNav ? "flex" : "hidden") + ' w-60 flex-col bg-sidebar text-sidebar-foreground md:flex">' +
    '<div class="flex h-16 items-center gap-2.5 border-b border-sidebar-border px-5"><div class="flex size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">' + ic("boxes", "size-4.5") + "</div>" +
    '<div class="leading-tight"><div class="text-sm font-bold tracking-tight text-white">ONE ERP</div><div class="text-[11px] text-sidebar-foreground/60">통합 업무관리 시스템</div></div></div>' +
    '<nav class="flex-1 overflow-y-auto px-3 py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">' + nav + "</nav>" +
    '<div class="border-t border-sidebar-border px-4 py-3 text-[11px] text-sidebar-foreground/50">v0.9 프로토타입 · 시연용</div></aside>'
  )
}
function alerts() {
  var out = []
  SKUS.filter(function (s) { return avail(s) < 0 || (s.stock === 0 && s.sold30 > 0) }).slice(0, 1).forEach(function (s) {
    out.push(["bg-red-500", "재고 부족", "방금", prod(s.code).name + " " + skuLabel(s), "가용재고 " + num(avail(s))])
  })
  ORDERS.filter(function (o) { return !isDone(o) && !shipped(o) && diffDays(o.due, TODAY) <= 3 && diffDays(o.due, TODAY) >= 0 }).slice(0, 1).forEach(function (o) {
    out.push(["bg-amber-500", "납기 임박", "10분 전", o.client, "D-" + diffDays(o.due, TODAY) + " · " + o.no])
  })
  ORDERS.filter(function (o) { return receivable(o) > 0 && shipped(o) }).slice(0, 1).forEach(function (o) {
    out.push(["bg-red-500", "입금 지연", "1시간 전", o.client, "미수 " + won(receivable(o))])
  })
  DESIGN.filter(function (j) { return j.status === "고객컨펌" && !j.wo }).slice(0, 1).forEach(function (j) {
    out.push(["bg-amber-500", "업무 지연", "2시간 전", order(j.order).client, "디자인 컨펌 대기"])
  })
  PAYMENTS.filter(function (p) { return p.status === "확인필요" || p.status === "미매칭" }).slice(0, 1).forEach(function (p) {
    out.push(["bg-amber-500", "입금 확인", "3시간 전", p.payer + " " + won(p.amount), "매칭 확인 필요"])
  })
  PAYMENTS.filter(function (p) { return p.status === "자동매칭" }).slice(0, 1).forEach(function (p) {
    out.push(["bg-emerald-500", "자동매칭", "4시간 전", "입금 자동매칭 완료", p.payer + " " + won(p.amount)])
  })
  return out
}
function header() {
  var al = alerts()
  var roles = ["대표/관리자", "영업팀", "디자인팀", "물류팀", "발주팀", "경리팀"]
  return (
    '<header class="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-border bg-card/90 px-5 backdrop-blur">' +
    '<button class="flex items-center rounded-md border border-border bg-background p-2 hover:bg-muted md:hidden" type="button" aria-label="메뉴" data-act="mnav">' + ic("layout-grid", "size-4 text-foreground") + "</button>" +
    '<form class="relative w-full max-w-md" data-submit="search">' + ic("search", "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground") +
    '<input name="q" class="h-9 w-full rounded-md border border-border bg-background pl-9 pr-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30" placeholder="주문번호, 거래처, 상품, 견적번호 통합검색" type="search"></form>' +
    '<div class="ml-auto flex items-center gap-2">' +
    '<div class="hidden items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1.5 text-xs lg:flex">' + ic("refresh-cw", "size-3.5 text-emerald-600") +
    '<span class="text-muted-foreground">채널 동기화</span><span class="font-medium text-foreground">' + (S.syncAgo === 0 ? "방금 전" : S.syncAgo + "분 전") + "</span></div>" +
    '<details class="group relative"><summary class="flex cursor-pointer list-none items-center rounded-md border border-border bg-background p-2 hover:bg-muted [&::-webkit-details-marker]:hidden"><span class="relative">' + ic("bell", "size-4.5 text-foreground") +
    (al.length ? '<span class="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">' + al.length + "</span>" : "") + "</span></summary>" +
    '<div class="absolute right-0 mt-2 w-80 overflow-hidden rounded-md border border-border bg-popover shadow-lg"><div class="border-b border-border px-3 py-2 text-sm font-semibold">알림센터</div><ul class="max-h-96 overflow-y-auto">' +
    al.map(function (a) {
      return '<li class="flex gap-2.5 border-b border-border px-3 py-2.5 last:border-0 hover:bg-muted"><span class="mt-1.5 size-2 shrink-0 rounded-full ' + a[0] + '"></span><div class="min-w-0"><div class="flex items-center gap-1.5"><span class="text-xs font-semibold text-foreground">' + esc(a[1]) + '</span><span class="text-[11px] text-muted-foreground">' + esc(a[2]) + '</span></div><div class="truncate text-xs text-foreground">' + esc(a[3]) + '</div><div class="truncate text-[11px] text-muted-foreground">' + esc(a[4]) + "</div></div></li>"
    }).join("") +
    '</ul><a class="block border-t border-border px-3 py-2 text-center text-xs font-medium text-primary hover:bg-muted" href="#/">전체 보기</a></div></details>' +
    '<details class="group relative"><summary class="flex cursor-pointer list-none items-center gap-2 rounded-md border border-border bg-background py-1.5 pl-1.5 pr-2.5 hover:bg-muted [&::-webkit-details-marker]:hidden">' +
    '<span class="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">' + esc(ME.short.charAt(0)) + "</span>" +
    '<span class="hidden text-left leading-tight sm:block"><span class="block text-xs font-semibold text-foreground">' + esc(ME.short) + '</span><span class="block text-[11px] text-muted-foreground">' + esc(S.role) + "</span></span>" + ic("chevron-down", "size-3.5 text-muted-foreground") + "</summary>" +
    '<div class="absolute right-0 mt-2 w-52 overflow-hidden rounded-md border border-border bg-popover shadow-lg"><div class="border-b border-border px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">역할 전환 (권한 미리보기)</div><ul>' +
    roles.map(function (r) {
      var on = r === S.role
      return '<li><button class="flex w-full items-center gap-1.5 px-3 py-2 text-left text-[13px] hover:bg-muted ' + (on ? "font-semibold text-primary" : "text-foreground") + '" data-act="role" data-v="' + esc(r) + '">' + (on ? ic("dot", "size-4 text-primary") + "<span>" : '<span class="pl-4">') + esc(r) + "</span></button></li>"
    }).join("") +
    "</ul></div></details>" +
    '<div class="hidden text-right text-xs leading-tight md:block"><div class="font-medium text-foreground">' + ymdDot(TODAY) + '</div><div class="text-muted-foreground">' + weekday(TODAY) + "</div></div></div></header>"
  )
}

/* ---------------------------------------------------------------
 * 대화상자
 * ------------------------------------------------------------- */
var LBL = "block text-xs font-medium text-muted-foreground"
var FINP = "mt-1 h-9 w-full rounded-md border border-border bg-background px-2.5 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
function field(label, inner) {
  return '<label class="' + LBL + '">' + esc(label) + inner + "</label>"
}
function fInput(name, label, val, type, attrs) {
  return field(label, '<input class="' + FINP + '" name="' + name + '" type="' + (type || "text") + '" value="' + esc(val == null ? "" : val) + '" ' + (attrs || "") + ">")
}
function fSelect(name, label, list, cur, attrs) {
  return field(label, '<select class="' + FINP + '" name="' + name + '" ' + (attrs || "") + ">" + options(list, cur) + "</select>")
}
function modalFrame(title, body, foot, wide) {
  return (
    '<div class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-4 md:items-center" data-backdrop="1">' +
    '<div class="my-8 w-full ' + (wide ? "max-w-2xl" : "max-w-lg") + ' rounded-md border border-border bg-card text-card-foreground shadow-xl" data-slot="card" role="dialog" aria-modal="true">' +
    '<div class="flex items-center justify-between gap-2 px-4 py-3 border-b border-border"><div class="text-sm font-semibold text-foreground">' + title + "</div>" +
    '<button class="rounded p-1 text-muted-foreground hover:bg-muted" type="button" aria-label="닫기" data-act="modalClose">' + ic("x", "size-4") + "</button></div>" +
    body + (foot ? '<div class="flex flex-wrap items-center justify-end gap-2 border-t border-border px-4 py-3">' + foot + "</div>" : "") + "</div></div>"
  )
}
function formModal(title, submit, inner, okLabel, wide) {
  return modalFrame(
    title,
    '<form data-submit="' + submit + '" id="mform"><div class="grid gap-3 p-4 sm:grid-cols-2">' + inner + "</div>" +
      '<div class="flex flex-wrap items-center justify-end gap-2 border-t border-border px-4 py-3">' + btn(BTN_OUT, "취소", 'data-act="modalClose"') +
      '<button class="' + BTN_PRI + '" data-slot="button" type="submit">' + esc(okLabel || "저장") + "</button></div></form>",
    "", wide
  )
}
function kv(rows) {
  return '<dl class="grid grid-cols-[96px_1fr] gap-x-3 gap-y-2 text-sm">' + rows.map(function (r) {
    return '<dt class="text-xs text-muted-foreground">' + esc(r[0]) + '</dt><dd class="min-w-0 text-foreground">' + r[1] + "</dd>"
  }).join("") + "</dl>"
}

/* ---------------------------------------------------------------
 * 차트 (그린 뒤 실제 너비를 재서 SVG 로 다시 그린다)
 * ------------------------------------------------------------- */
var CHARTS = {}
var chartSeq = 0
function chartBox(spec, h) {
  var id = "c" + ++chartSeq
  spec.h = h
  CHARTS[id] = spec
  return '<div data-chart="' + id + '" style="width:100%;height:' + h + 'px;position:relative"></div>'
}
function niceStep(raw) {
  if (raw <= 0) return 1
  var mag = Math.pow(10, Math.floor(Math.log10(raw)))
  var c = [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 7.5, 8, 10]
  for (var i = 0; i < c.length; i++) if (c[i] * mag >= raw) return c[i] * mag
  return 10 * mag
}
function monotone(pts) {
  var n = pts.length
  if (n < 2) return ""
  if (n === 2) return "M" + pts[0][0] + "," + pts[0][1] + "L" + pts[1][0] + "," + pts[1][1]
  var dx = [], dy = [], m = [], t = []
  for (var i = 0; i < n - 1; i++) {
    dx[i] = pts[i + 1][0] - pts[i][0]
    dy[i] = pts[i + 1][1] - pts[i][1]
    m[i] = dy[i] / dx[i]
  }
  t[0] = m[0]
  t[n - 1] = m[n - 2]
  for (i = 1; i < n - 1; i++) t[i] = m[i - 1] * m[i] <= 0 ? 0 : (3 * (dx[i - 1] + dx[i])) / ((2 * dx[i] + dx[i - 1]) / m[i - 1] + (dx[i] + 2 * dx[i - 1]) / m[i])
  var d = "M" + pts[0][0].toFixed(2) + "," + pts[0][1].toFixed(2)
  for (i = 0; i < n - 1; i++) {
    var h = dx[i] / 3
    d += "C" + (pts[i][0] + h).toFixed(2) + "," + (pts[i][1] + h * t[i]).toFixed(2) + "," + (pts[i + 1][0] - h).toFixed(2) + "," + (pts[i + 1][1] - h * t[i + 1]).toFixed(2) + "," + pts[i + 1][0].toFixed(2) + "," + pts[i + 1][1].toFixed(2)
  }
  return d
}
var TXT = 'fill="var(--color-muted-foreground)" font-size="11"'
function axes(w, top, bottom, left, right, max, step, fmt, labels, xs) {
  var g = ""
  var ticks = Math.round(max / step)
  for (var i = 0; i <= ticks; i++) {
    var y = bottom - ((bottom - top) * i) / ticks
    g += '<line x1="' + left + '" x2="' + (w - right) + '" y1="' + y + '" y2="' + y + '" stroke="var(--color-border)" stroke-dasharray="3 3"/>'
    g += '<text x="' + (left - 8) + '" y="' + y + '" dy="0.355em" text-anchor="end" ' + TXT + ">" + esc(fmt(step * i)) + "</text>"
  }
  labels.forEach(function (l, j) {
    g += '<text x="' + xs[j] + '" y="' + (bottom + 8) + '" dy="0.71em" text-anchor="middle" ' + TXT + ">" + esc(l) + "</text>"
  })
  return g
}
function drawChart(el, sp) {
  var w = Math.max(240, el.clientWidth)
  var h = sp.h
  var svg = ""
  var lw = function (ymax) { return Math.max(String(sp.fmt(ymax)).length, String(sp.fmt(0)).length) * 6.6 + 14 }
  if (sp.type === "line") {
    var max = 0
    sp.series.forEach(function (s) { s.values.forEach(function (v) { if (v > max) max = v }) })
    var step = niceStep(max / 4), ymax = step * 4
    var left = Math.max(sp.left || 48, lw(ymax)), right = sp.dots ? 18 : 12, top = 8, bottom = h - (sp.legend ? 55 : 30)
    var n = sp.labels.length
    var xs = sp.labels.map(function (_, i) { return n === 1 ? (left + w - right) / 2 : left + ((w - right - left) * i) / (n - 1) })
    var every = Math.max(1, Math.ceil(n / Math.max(2, Math.floor((w - left) / 64))))
    svg += axes(w, top, bottom, left, right, ymax, step, sp.fmt, sp.labels.map(function (l, i) { return i % every === 0 || i === n - 1 ? l : "" }), xs)
    sp.series.forEach(function (s) {
      var pts = s.values.map(function (v, i) { return [xs[i], bottom - ((bottom - top) * v) / ymax] })
      svg += '<path d="' + (n === 1 ? "M" + (pts[0][0] - 20) + "," + pts[0][1] + "L" + (pts[0][0] + 20) + "," + pts[0][1] : monotone(pts)) + '" fill="none" stroke="' + s.color + '" stroke-width="' + (sp.dots ? 2.5 : 2) + '"/>'
      if (sp.dots) pts.forEach(function (p) { svg += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3" fill="#fff" stroke="' + s.color + '" stroke-width="2.5"/>' })
    })
  } else if (sp.type === "bar") {
    var bmax = Math.max.apply(null, sp.values.concat([sp.minMax || 0]))
    var bstep = niceStep(bmax / 4), bymax = bstep * 4
    var bl = Math.max(sp.left || 40, lw(bymax)), br = 8, bt = 8, bb = h - 30
    var bn = sp.values.length
    var band = (w - br - bl) / bn
    var bw = Math.min(sp.barMax || 141, band * 0.8)
    var bxs = sp.values.map(function (_, i) { return bl + band * i + band / 2 })
    // 막대 폭에 맞춰 축 글자를 줄인다 (한글 약 11px)
    var fit = Math.max(2, Math.floor((band - 4) / 11))
    svg += axes(w, bt, bb, bl, br, bymax, bstep, sp.fmt, sp.labels.map(function (l) { l = String(l); return l.length > fit ? l.slice(0, fit) : l }), bxs)
    sp.values.forEach(function (v, i) {
      var bh = ((bb - bt) * v) / bymax
      if (bh <= 0) return
      var x = bxs[i] - bw / 2, y = bb - bh, r = Math.min(sp.radius || 4, bh)
      svg += '<path d="M' + x + "," + (y + r) + "A" + r + "," + r + ",0,0,1," + (x + r) + "," + y + "L" + (x + bw - r) + "," + y + "A" + r + "," + r + ",0,0,1," + (x + bw) + "," + (y + r) + "L" + (x + bw) + "," + bb + "L" + x + "," + bb + 'Z" fill="' + (sp.colors ? sp.colors[i] : sp.color) + '"><title>' + esc(sp.labels[i] + " · " + sp.fmt(v)) + "</title></path>"
    })
  } else if (sp.type === "donut") {
    var cx = w / 2, cy = h / 2, R = 82, r0 = 58
    var tot = sp.values.reduce(function (a, b) { return a + b }, 0) || 1
    var a0 = 0
    sp.values.forEach(function (v, i) {
      var a1 = a0 + (v / tot) * 360
      var s0 = a0 + 1, s1 = a1 - 1
      if (s1 > s0) {
        var p = function (rad, ang) { var t = ((ang - 90) * Math.PI) / 180; return (cx + rad * Math.cos(t)).toFixed(2) + "," + (cy + rad * Math.sin(t)).toFixed(2) }
        var large = s1 - s0 > 180 ? 1 : 0
        svg += '<path d="M' + p(R, s0) + "A" + R + "," + R + ",0," + large + ",1," + p(R, s1) + "L" + p(r0, s1) + "A" + r0 + "," + r0 + ",0," + large + ",0," + p(r0, s0) + 'Z" fill="' + sp.colors[i] + '"/>'
      }
      a0 = a1
    })
  }
  var legend = ""
  if (sp.legend)
    legend =
      '<div style="position:absolute;width:100%;left:0;bottom:0;font-size:11px;padding-top:8px"><ul style="padding:0;margin:0;text-align:center">' +
      sp.series.map(function (s) {
        return '<li style="display:inline-block;margin-right:10px;white-space:nowrap"><svg width="14" height="14" viewBox="0 0 32 32" style="display:inline-block;vertical-align:middle;margin-right:4px"><path stroke-width="4" fill="none" stroke="' + s.color + '" d="M0,16h32"/></svg><span style="color:' + s.color + '">' + esc(s.name) + "</span></li>"
      }).join("") + "</ul></div>"
  el.innerHTML = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + " " + h + '" style="display:block">' + svg + "</svg>" + legend
}
function drawCharts() {
  var els = document.querySelectorAll("[data-chart]")
  for (var i = 0; i < els.length; i++) {
    var sp = CHARTS[els[i].getAttribute("data-chart")]
    if (sp) drawChart(els[i], sp)
  }
}
function fmtMil(v) {
  return Math.round(v / 1e6) + "백만"
}

/* ---------------------------------------------------------------
 * 공통 계산
 * ------------------------------------------------------------- */
function onlineBatches() {
  var out = []
  CH_INFO.forEach(function (c, idx) {
    var list = ONLINE.filter(function (o) { return o.channel === c.key && o.date === TODAY })
    if (!list.length) return
    var names = {}
    list.forEach(function (o) { names[o.name] = 1 })
    var kinds = Object.keys(names)
    var pending = list.some(function (o) { return o.ship === "배송준비" })
    out.push({
      batch: true, type: "온라인", channel: c.key, no: "ORD-" + yymmdd(TODAY) + "-" + (901 + idx),
      client: "(가상) 개인고객" + (list.length > 1 ? " 외 " + (list.length - 1) + "건" : ""), manager: "자동",
      item: kinds[0] + (kinds.length > 1 ? " 외 " + (kinds.length - 1) + "종" : ""),
      qty: list.reduce(function (a, o) { return a + o.qty }, 0), amount: list.reduce(function (a, o) { return a + o.amount }, 0),
      stage: pending ? "상품준비" : "출고완료", due: day(1), paid: 0, created: TODAY, updatedAt: c.lastSync || Date.now() - c.synced * 60000,
    })
  })
  return out
}
function allOrders() {
  return onlineBatches().concat(ORDERS)
}
function findAny(no) {
  return order(no) || onlineBatches().filter(function (b) { return b.no === no })[0]
}
function ago(ts) {
  var m = Math.max(0, Math.round((Date.now() - ts) / 60000))
  if (m < 1) return "방금 전"
  if (m < 60) return m + "분 전"
  if (m < 1440) return Math.floor(m / 60) + "시간 전"
  return Math.floor(m / 1440) + "일 전"
}
function stageTone(o) {
  var b = bucket(o)
  if (b == null || b === "입금 완료" || b === "출고 완료") return "green"
  if (b === "디자인 작업" || b === "작업지시 완료" || b === "외주 제작") return "amber"
  return "blue"
}
function typeBadge(t) {
  return badge(t, t === "단체납품" ? "primary" : t === "커스텀제작" ? "amber" : "blue")
}
function totalReceivable() {
  return ORDERS.reduce(function (a, o) { return a + receivable(o) }, 0)
}
function segReceivable(seg) {
  return ORDERS.reduce(function (a, o) { return a + (o.type === seg ? receivable(o) : 0) }, 0)
}
function invValue() {
  return SKUS.reduce(function (a, s) { return a + s.stock * prod(s.code).cost }, 0)
}
function monthSales(seg) {
  return sumDays(monthDays(), seg ? SEG[seg] : null)
}
function salesSeries(range) {
  var days
  if (range === "오늘") {
    var w = [0.1, 0.18, 0.26, 0.24, 0.22]
    return {
      labels: ["09시", "11시", "13시", "15시", "17시"],
      series: SERIES.map(function (k) {
        var t = (DAILY[TODAY] || {})[k] || 0
        var acc = 0
        return { name: k, color: SERIES_COLOR[k], values: w.map(function (x) { acc += x; return Math.round(t * acc) }) }
      }),
    }
  }
  days = range === "30일" ? rangeDays(30) : range === "이번달" ? monthDays() : rangeDays(7)
  return {
    labels: days.map(md),
    series: SERIES.map(function (k) {
      return { name: k, color: SERIES_COLOR[k], values: days.map(function (d) { return (DAILY[d] || {})[k] || 0 }) }
    }),
  }
}
function trendCard() {
  var ss = salesSeries(S.range)
  return card("매출 추이 · 채널별", seg(["오늘", "7일", "30일", "이번달"], S.range, "range"), chartBox({ type: "line", labels: ss.labels, series: ss.series, fmt: fmtMil, legend: true }, 300))
}
function donutCard() {
  var segs = ["온라인", "단체납품", "커스텀제작"]
  var vals = segs.map(function (s) { return monthSales(s) })
  var tot = vals.reduce(function (a, b) { return a + b }, 0)
  return card(
    "사업유형별 매출 비중", '<span class="text-xs text-muted-foreground">이번 달</span>',
    '<div class="relative">' + chartBox({ type: "donut", values: vals, colors: segs.map(function (s) { return SEG_COLOR[s] }) }, 200) +
      '<div class="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"><span class="text-[11px] text-muted-foreground">총 매출</span><span class="text-lg font-bold text-foreground tabular">' + wonShort(tot) + "</span></div></div>" +
      '<ul class="mt-4 space-y-2">' +
      segs.map(function (s, i) {
        return '<li class="flex items-center justify-between text-xs"><span class="flex items-center gap-2"><span class="size-2.5 rounded-full" style="background: ' + SEG_COLOR[s] + ';"></span><span class="text-foreground">' + s + '</span></span><span class="flex items-center gap-2"><span class="font-medium text-foreground tabular">' + wonShort(vals[i]) + '</span><span class="w-9 text-right text-muted-foreground tabular">' + pct(vals[i], tot) + "%</span></span></li>"
      }).join("") + "</ul>"
  )
}
function pipelineCounts(type) {
  var c = {}
  PIPE.forEach(function (p) { c[p] = { n: 0, stale: 0 } })
  allOrders().forEach(function (o) {
    if (type !== "전체" && o.type !== type) return
    var b = bucket(o)
    if (!b) return
    c[b].n++
    var since = o.dates && o.dates[stageIdx(o)] ? o.dates[stageIdx(o)] : o.created
    if (diffDays(TODAY, since) >= 3) c[b].stale++
  })
  QUOTES.forEach(function (q) {
    if (q.status === "사업확정" || (type !== "전체" && q.type !== type)) return
    c[q.status === "작성중" ? "신규 문의" : "견적 진행"].n++
  })
  var waiting = DESIGN.filter(function (j) { return j.status === "고객컨펌" && (type === "전체" || type === "커스텀제작") }).length
  c["디자인 작업"].confirm = waiting
  return c
}

/* ---------------------------------------------------------------
 * 대시보드 · 경영 현황
 * ------------------------------------------------------------- */
function pageDashboard() {
  var t = dayTotal(TODAY), y = dayTotal(day(-1))
  var w7 = rangeDays(7)
  var month = monthSales()
  var target = 380000000
  var recvClients = {}
  ORDERS.forEach(function (o) { if (receivable(o) > 0) recvClients[o.client] = 1 })
  var active = allOrders().filter(function (o) { return !isDone(o) }).length
  var outSoon = allOrders().filter(function (o) { return bucket(o) === "출고 준비" }).length + ONLINE.filter(function (o) { return o.ship === "배송준비" }).length
  var waitPay = ORDERS.filter(function (o) { var p = payStatus(o); return p === "입금대기" || p === "부분입금" || p === "결제진행" }).length + PAYMENTS.filter(function (p) { return p.status === "확인필요" || p.status === "미매칭" }).length
  var short = SKUS.filter(function (s) { var st = skuStatus(s); return st === "재고부족" || st === "품절" }).length
  var pc = pipelineCounts(S.dashTab)
  var pipe = PIPE.map(function (p) {
    var x = pc[p]
    var warn = p === "디자인 작업" && x.confirm ? "컨펌 대기 " + x.confirm + "건" : x.stale ? "3일 이상 상태 변경 없음 " + x.stale + "건" : ""
    return (
      '<a class="group relative flex w-[132px] shrink-0 flex-col justify-between rounded-md border bg-card p-3 transition-all hover:-translate-y-0.5 hover:shadow-md ' + (warn ? "border-red-200" : "border-border hover:border-primary/40") + '" href="#/orders?stage=' + encodeURIComponent(p) + '">' +
      '<div class="absolute inset-x-0 top-0 h-0.5 rounded-t ' + PIPE_BAR[p] + '"></div><div class="text-xs font-medium text-muted-foreground">' + p + '</div><div class="mt-2 text-2xl font-bold text-foreground tabular">' + x.n + "</div>" +
      (warn ? '<div class="mt-1.5 flex items-start gap-1 text-[10px] font-medium text-red-600">' + ic("triangle-alert", "mt-0.5 size-3 shrink-0") + '<span class="leading-tight">' + esc(warn) + "</span></div>" : '<div class="mt-1.5 text-[10px] text-muted-foreground">건 진행중</div>') + "</a>"
    )
  }).join("")
  return (
    pageHead("대시보드", ME.short + "님, 오늘 회사 현황을 한눈에 확인하세요 · " + ymdDot(TODAY) + " (" + weekday(TODAY).charAt(0) + ")") +
    '<div class="grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-4">' +
    stat({ label: "오늘 매출", icon: "trending-up", value: won(t), trend: y ? ((t - y) / y) * 100 : 0 }) +
    stat({ label: "이번 주 매출", icon: "calendar-days", value: wonShort(sumDays(w7)), sub: md(w7[0]).replace(/^0/, "").replace(".0", ".") + " ~ " + md(TODAY).replace(/^0/, "").replace(".0", ".") }) +
    stat({ label: "이번 달 매출", icon: "wallet", value: wonShort(month), sub: "목표 대비 " + pct(month, target) + "%" }) +
    stat({ label: "미수금", icon: "credit-card", value: won(totalReceivable()), sub: Object.keys(recvClients).length + "개 거래처", tone: "red", href: "/payments" }) +
    stat({ label: "진행 중 주문", icon: "shopping-cart", value: active + "건", href: "/orders" }) +
    stat({ label: "출고 예정", icon: "truck", value: outSoon + "건", sub: "오늘 ~ 내일", href: "/inventory/io" }) +
    stat({ label: "입금 대기", icon: "clock", value: waitPay + "건", tone: "amber", href: "/payments" }) +
    stat({ label: "재고 부족", icon: "package-x", value: short + " SKU", tone: "red", href: "/inventory" }) +
    "</div>" +
    '<div class="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3"><div class="lg:col-span-2">' + trendCard() + "</div>" + donutCard() + "</div>" +
    '<div class="mt-4">' + card("오늘의 업무 현황", seg(["전체", "단체납품", "커스텀제작"], S.dashTab, "dashTab"), '<div class="flex gap-2.5 overflow-x-auto pb-1">' + pipe + "</div>") + "</div>"
  )
}
function segRows(withLead) {
  var lead = { 온라인: "1.6일", 단체납품: "8.7일", 커스텀제작: "13.2일" }
  var cnt = { 온라인: 3870 + ONLINE.length, 단체납품: 36, 커스텀제작: 27 }
  ORDERS.forEach(function (o) { if (o.created.slice(0, 7) === TODAY.slice(0, 7)) cnt[o.type]++ })
  return ["온라인", "단체납품", "커스텀제작"].map(function (sname) {
    var sales = monthSales(sname), rec = segReceivable(sname)
    if (sname === "온라인") rec = Math.round(sales * 0.041)
    return { name: sname, sales: sales, rec: rec, got: sales - rec, cnt: cnt[sname], lead: lead[sname] }
  })
}
function pageExecutive() {
  var month = monthSales()
  var rows = segRows()
  var recv = rows.reduce(function (a, r) { return a + r.rec }, 0)
  var contract = month + ORDERS.reduce(function (a, o) { return a + (o.type !== "온라인" && confirmed(o) && !shipped(o) ? o.amount : 0) }, 0)
  var old = ORDERS.filter(function (o) { return receivable(o) > 0 && diffDays(TODAY, o.created) >= 14 }).length
  var y = dayTotal(day(-1)), t = dayTotal(TODAY)
  var proj = ORDERS.filter(function (o) { return !isDone(o) }).length
  return (
    pageHead("경영 현황", "대표 · 관리자 전용. 계약 · 매출 · 수금 · 재고자산을 한 화면에서 조망합니다.") +
    '<div class="mb-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">' +
    stat({ label: "당월 계약금액", icon: "briefcase", value: wonShort(contract), sub: "확정 사업 기준" }) +
    stat({ label: "당월 매출", icon: "trending-up", value: wonShort(month), trend: y ? ((t - y) / y) * 100 : 0 }) +
    stat({ label: "수금 완료", icon: "wallet", value: wonShort(month - recv), sub: "수금률 " + pct(month - recv, month) + "%" }) +
    stat({ label: "미수금", icon: "circle-alert", value: wonShort(recv), sub: "14일 이상 " + old + "건", tone: "amber" }) +
    "</div>" +
    '<div class="mb-4 grid gap-4 lg:grid-cols-3"><div class="lg:col-span-2">' + trendCard() + "</div>" + donutCard() + "</div>" +
    '<div class="mb-4 grid gap-4 sm:grid-cols-3">' +
    stat({ label: "진행 중 프로젝트", icon: "briefcase", value: proj + "건" }) +
    stat({ label: "평균 리드타임", icon: "clock", value: "7.6일" }) +
    stat({ label: "재고자산 평가액", icon: "boxes", value: wonShort(invValue()) }) +
    "</div>" +
    card("사업 부문별 실적", '<span class="text-xs text-muted-foreground">' + ic("landmark", "mr-1 inline size-3.5") + "온라인 · 단체납품 · 커스텀제작 통합 집계</span>",
      table([["사업 부문"], ["매출", "right"], ["주문 건수", "right"], ["평균 리드타임", "right"], ["미수금", "right"]],
        rows.map(function (r) {
          return '<tr class="' + TR + '">' + td(r.name, "text-foreground text-left font-semibold") + td(won(r.sales), "text-foreground text-right tabular font-medium") + td(num(r.cnt), "text-foreground text-right tabular") + td(r.lead, "text-foreground text-right tabular") + td(won(r.rec), "text-right tabular text-red-600") + "</tr>"
        }).join("")))
  )
}

/* ---------------------------------------------------------------
 * 통합 주문관리
 * ------------------------------------------------------------- */
var ALL_STAGES = ["상품준비", "출고준비", "출고완료", "접수", "견적", "사업확정", "출고확정", "결제진행", "입금완료", "납품완료"].concat(FLOW.커스텀제작)
function filteredOrders(q) {
  var f = S.ord
  var stage = q.stage
  var text = (f.q || "").trim().toLowerCase()
  return allOrders().filter(function (o) {
    if (stage && bucket(o) !== stage) return false
    if (f.type !== "전체" && o.type !== f.type) return false
    if (f.channel !== "전체" && o.channel !== f.channel) return false
    if (f.stage !== "전체" && o.stage !== f.stage) return false
    if (f.pay !== "전체" && payStatus(o) !== f.pay) return false
    if (text && (o.no + " " + o.client + " " + o.manager + " " + o.item).toLowerCase().indexOf(text) < 0) return false
    return true
  })
}
function orderRow(o) {
  return (
    '<tr class="' + TR_CLICK + '" data-act="openOrder" data-no="' + esc(o.no) + '">' +
    td(esc(o.no), "text-left font-mono text-[13px] font-medium text-primary") +
    td(typeBadge(o.type)) +
    td('<button title="' + esc(o.channel) + ' 채널만 보기" data-act="chFilter" data-v="' + esc(o.channel) + '">' + badge(o.channel, "slate") + "</button>") +
    td(esc(o.client), "text-foreground text-left font-medium") +
    td(esc(o.manager), "text-left text-muted-foreground") +
    td(esc(o.item)) +
    td(num(o.qty), "text-foreground text-right tabular") +
    td(o.amount ? won(o.amount) : '<span class="text-amber-600">견적중</span>', "text-foreground text-right tabular font-semibold") +
    td(badge(o.stage, stageTone(o))) +
    td(md(o.due), "text-left text-muted-foreground") +
    td(badge(o.batch ? "정상" : stockStatus(o), STOCK_TONE[o.batch ? "정상" : stockStatus(o)])) +
    td(badge(payStatus(o), PAY_TONE[payStatus(o)])) +
    td(ago(o.updatedAt), "text-right tabular text-xs text-muted-foreground") + "</tr>"
  )
}
var ORDER_COLS = [["주문번호"], ["구분"], ["채널"], ["거래처"], ["담당자"], ["상품"], ["수량", "right"], ["주문금액", "right"], ["현재 단계"], ["납기일"], ["재고상태"], ["결제상태"], ["업데이트", "right"]]
function pageOrders(q) {
  var list = filteredOrders(q)
  var f = S.ord
  var chs = ["전체"].concat(CHANNELS.단체납품, ["카카오톡"], CHANNELS.온라인)
  return (
    pageHead("통합 주문관리", "온라인몰 · 단체납품 · 커스텀 제작 주문을 한 화면에서 조회합니다",
      btn(BTN_OUT, "엑셀 내보내기", 'data-act="exportOrders"', "download") + btn(BTN_PRI, "주문 등록", 'data-act="newOrder"', "plus")) +
    "<div>" +
    '<div class="mb-3 flex flex-wrap items-center gap-2 rounded-md border border-border bg-card p-3">' +
    '<label class="flex items-center gap-1.5 text-xs text-muted-foreground"><span class="whitespace-nowrap font-medium">검색</span><input id="ordq" class="' + INP + ' w-56" placeholder="주문번호 · 거래처 · 담당자 · 상품" value="' + esc(f.q) + '" data-input="ordQ"></label>' +
    filterSel("사업유형", ["전체", "온라인", "단체납품", "커스텀제작"], f.type, "ordF", "type") +
    filterSel("판매채널", chs, f.channel, "ordF", "channel") +
    filterSel("진행상태", ["전체"].concat(ALL_STAGES), f.stage, "ordF", "stage") +
    filterSel("결제상태", ["전체", "입금대기", "계약완료", "결제진행", "부분입금", "입금완료", "결제완료"], f.pay, "ordF", "pay") +
    (q.stage ? '<a href="#/orders" class="inline-flex items-center gap-1" title="단계 필터 해제">' + badge("단계: " + q.stage, "primary") + ic("x", "size-3.5 text-muted-foreground") + "</a>" : "") +
    '<span class="ml-auto text-xs text-muted-foreground">총 <span class="font-semibold text-foreground">' + list.length + "</span>건</span></div>" +
    table(ORDER_COLS, list.length ? list.map(orderRow).join("") : emptyRow("조건에 맞는 주문이 없습니다.", 13)) +
    "</div>"
  )
}

/* 온라인 주문 */
function pageOnline() {
  return (
    pageHead("온라인 주문 통합", "자사몰 · 스마트스토어 · 쿠팡 주문을 ERP에서 통합 조회합니다", btn(BTN_OUT, "지금 동기화", 'data-act="sync"', "refresh-cw")) +
    '<div class="mb-4 grid grid-cols-1 gap-3 md:grid-cols-3">' +
    CH_INFO.map(function (c) {
      return (
        '<div class="rounded-md border border-border bg-card text-card-foreground shadow-xs flex items-center justify-between p-4" data-slot="card"><div>' +
        '<div class="flex items-center gap-2">' + ic("store", "size-4 text-primary") + '<span class="text-sm font-semibold text-foreground">' + esc(c.title) + "</span></div>" +
        '<div class="mt-2 flex items-center gap-1.5 text-xs text-emerald-600">' + ic("circle-check", "size-3.5") + "정상 연결</div>" +
        '<div class="mt-0.5 text-[11px] text-muted-foreground">마지막 동기화 ' + (c.synced === 0 ? "방금 전" : c.synced + "분 전") + "</div></div>" +
        '<div class="text-right"><div class="text-2xl font-bold text-foreground tabular">' + num(c.today) + '</div><div class="text-[11px] text-muted-foreground">오늘 주문</div></div></div>'
      )
    }).join("") + "</div>" +
    table([["채널"], ["주문번호"], ["주문자"], ["상품"], ["옵션"], ["수량", "right"], ["결제"], ["배송"], ["송장번호"], ["재고반영", "center"]],
      ONLINE.map(function (o, i) {
        var short = CH_INFO.filter(function (c) { return c.key === o.channel })[0].short
        return (
          '<tr class="' + TR + '">' + td(badge(short, "blue")) + td(esc(o.no), "text-foreground text-left font-mono text-[13px]") + td(esc(o.buyer)) +
          td(esc(o.name), "text-foreground text-left font-medium") + td(esc(skuLabel(sku(o.sku))), "text-left text-muted-foreground") + td(o.qty, "text-foreground text-right tabular") +
          td(badge(o.pay, "green")) + td(o.ship === "배송준비" ? '<button data-act="shipOnline" data-i="' + i + '" title="눌러서 출고 처리">' + badge("배송준비", "amber") + "</button>" : badge(o.ship, o.ship === "배송중" ? "blue" : "green")) +
          td(esc(o.track), "text-left font-mono text-xs text-muted-foreground") +
          td(o.applied ? badge("반영완료", "green") : '<button data-act="applyOnline" data-i="' + i + '" title="눌러서 재고 반영">' + badge("미반영", "red") + "</button>", "text-foreground text-center") + "</tr>"
        )
      }).join(""))
  )
}

/* 단체 납품 (칸반) */
var KANBAN = FLOW.단체납품
function pageGroup() {
  var list = ORDERS.filter(function (o) { return o.type === "단체납품" })
  var body
  if (S.groupView === "칸반") {
    body =
      '<div class="mb-3 flex items-center gap-1.5 text-xs text-muted-foreground">' + ic("layout-grid", "size-3.5") + "카드를 드래그하여 단계를 이동할 수 있습니다</div>" +
      '<div class="flex gap-3 overflow-x-auto pb-3">' +
      KANBAN.map(function (st, ci) {
        var cards = list.filter(function (o) { return o.stage === st })
        return (
          '<div class="shrink-0 w-72"><div class="mb-2 flex items-center justify-between rounded-md bg-muted px-3 py-2"><span class="text-[13px] font-semibold text-foreground">' + st + '</span><span class="flex size-5 items-center justify-center rounded bg-card text-[11px] font-semibold text-muted-foreground">' + cards.length + "</span></div>" +
          '<div class="min-h-24 space-y-2 rounded-md border border-dashed p-1.5 transition-colors border-transparent" data-drop="' + ci + '">' +
          cards.map(function (o) {
            var lack = stockStatus(o) === "재고부족"
            var kinds = o.kinds || 1
            return (
              '<div class="cursor-grab rounded-md border border-border bg-card shadow-xs transition-all hover:shadow-md active:cursor-grabbing" draggable="true" data-drag="' + esc(o.no) + '">' +
              '<a class="block p-3" href="#/orders/group" data-act="openOrder" data-no="' + esc(o.no) + '"><div class="flex items-center justify-between"><span class="text-sm font-semibold text-foreground">' + esc(o.client) + '</span><span class="font-mono text-[10px] text-muted-foreground">' + o.no.slice(-3) + "</span></div>" +
              '<div class="mt-0.5 text-xs text-muted-foreground">' + esc(o.item) + '</div><div class="mt-2 text-xs text-muted-foreground">' + num(o.qty) + "점 · " + kinds + "품목</div>" +
              '<div class="mt-1 text-base font-bold text-foreground tabular">' + wonShort(o.amount) + "</div>" +
              '<div class="mt-2 flex items-center justify-between border-t border-border pt-2 text-[11px]"><span class="text-muted-foreground">담당 ' + esc(o.manager) + '</span><span class="text-muted-foreground">납기 ' + md(o.due) + "</span></div>" +
              (lack ? '<div class="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-red-600">' + ic("triangle-alert", "size-3") + "재고 부족 SKU 발생</div>" : "") +
              "</a></div>"
            )
          }).join("") + "</div></div>"
        )
      }).join("") + "</div>"
  } else {
    body = table(ORDER_COLS, list.map(orderRow).join(""))
  }
  return pageHead("단체 납품 관리", "소방서 · 군부대 · 학교 · 기관 대량 납품 진행 관리", seg(["칸반", "테이블"], S.groupView, "groupView") + btn(BTN_PRI, "납품 등록", 'data-act="newOrder" data-type="단체납품"', "plus")) + body
}

/* 커스텀 제작 */
function customCells(o) {
  var i = stageIdx(o)
  var dt = o.dates || {}
  var chk = function (ok, html) {
    return '<div class="flex flex-col items-center gap-0.5 text-center">' + (ok ? ic("circle-check", "size-4 text-emerald-600") + (html ? '<div class="text-[10px] leading-tight text-muted-foreground">' + html + "</div>" : "") : ic("circle", "size-4 text-muted-foreground/40")) + "</div>"
  }
  var dd = diffDays(o.due, TODAY)
  var ddTxt = dd === 0 ? "D-DAY" : dd > 0 ? "D-" + dd : "D+" + -dd
  var payer = o.paid > 0 ? (PAYMENTS.filter(function (p) { return p.order === o.no })[0] || {}).payer || shortName(o.client) : "-"
  var payDay = o.paid > 0 ? md((PAYMENTS.filter(function (p) { return p.order === o.no })[0] || {}).date || dt[7]) : "-"
  return [
    chk(i >= 2, md(dt[2])),
    chk(i >= 3, i >= 3 ? '<b class="font-semibold text-foreground">' + esc(o.cs || o.manager) + "</b><br>" + md(dt[3]) : ""),
    chk(i >= 4, i >= 4 ? '<b class="font-semibold text-foreground">' + esc(shortName(o.printer || "(가상) 별빛프린트")) + "</b><br>" + num(o.qty) + "장 · " + md(dt[4]) + (i === 4 && diffDays(TODAY, dt[4]) >= 5 ? '<br><span class="text-red-600">' + diffDays(TODAY, dt[4]) + "일 경과</span>" : "") : ""),
    chk(i >= 5, i >= 5 ? '<b class="font-semibold text-foreground">' + esc(shortName(o.printer || "(가상) 별빛프린트")) + "</b><br>" + md(dt[5]) + '<br><span class="text-[9px] text-emerald-600">나염처 확인</span>' : ""),
    chk(i >= 5, i >= 5 ? md(dt[5]) : ""),
    '<div class="text-center leading-tight"><div>' + md(o.due) + '</div><span class="text-[10px] font-semibold ' + (dd <= 2 && i < 6 ? "text-red-600" : "text-muted-foreground") + '">' + ddTxt + "</span></div>",
    chk(i >= 5, ""),
    i >= 6 ? md(dt[6]) : "-",
    i >= 6 ? md(day(diffDays(dt[6] || TODAY, TODAY) + 7)) : "-",
    esc(payer),
    payDay,
    '<div class="text-center leading-tight">' + (o.paid >= o.amount && o.amount ? badge("반영", "green") : badge("미반영", "muted")) + "</div>",
    i >= 8 ? '<span class="text-[10px] text-emerald-600">확인 완료</span>' : '<span class="text-[10px] text-muted-foreground">상부 확인 전</span>',
  ]
}
var CUSTOM_HEAD = [
  ["일자-No.", "w-20", "no"], ["진행상태", "w-28", "stage"], ["소속", "w-32", "client"], ["고객명", "w-20", "contact"], ["CS", "w-16", "cs"], ["디자이너", "w-20", "designer"], ["착수일", "w-16", "start"], ["디자인", "w-20"], ["품목명", "w-44"], ["금액합계", "w-24", "amount"],
  ["작지", "w-16", "s2"], ["까대기", "w-16", "s3"], ["나염출고", "w-24", "s4"], ["나염완료", "w-24", "s5"], ["나염입고", "w-16", "s5"], ["납기", "w-20", "due"], ["포장", "w-16", "s5"],
  ["출고날짜", "w-16", "s6"], ["입금예정", "w-16", "s6"], ["입금자명", "w-20", "paid"], ["입금날짜", "w-16", "paid"], ["결제반영여부", "w-20", "paid"], ["최종입금확인", "w-20", "s8"],
]
function customKey(o) {
  var c = S.custom
  var ct = client(o.client) || {}
  var m = { no: o.created + o.no, stage: stageIdx(o), client: o.client, contact: ct.contact || "", cs: o.cs || "", designer: o.designer || "", start: (o.dates || {})[1] || "", amount: o.amount, due: o.due, paid: o.paid }
  if (/^s\d/.test(c.sort)) return stageIdx(o) >= +c.sort.slice(1) ? 1 : 0
  return m[c.sort]
}
function pageCustom() {
  var c = S.custom
  var all = ORDERS.filter(function (o) { return o.type === "커스텀제작" })
  var list = all.filter(function (o) { return c.step === "전체" || o.stage === c.step })
  var text = c.q.trim().toLowerCase()
  if (text)
    list = list.filter(function (o) {
      var ct = client(o.client) || {}
      var map = { 소속: o.client, 고객명: ct.contact, CS: o.cs, 디자이너: o.designer, 거래유형명: ct.kind, 입금자명: "", 까대기: o.cs, 나염출고: o.printer, 나염입고: o.printer, 포장: "", 출고날짜: (o.dates || {})[6], 입금날짜: "" }
      var hay = c.field === "전체" ? [o.no, o.client, ct.contact, o.cs, o.designer, o.item, o.spec].join(" ") : map[c.field] || ""
      return String(hay).toLowerCase().indexOf(text) >= 0
    })
  if (c.sort)
    list.sort(function (a, b) {
      var x = customKey(a), y = customKey(b)
      return (x > y ? 1 : x < y ? -1 : 0) * c.dir
    })
  var side = ["전체"].concat(FLOW.커스텀제작).map(function (st) {
    var n = st === "전체" ? all.length : all.filter(function (o) { return o.stage === st }).length
    var on = c.step === st
    return '<button class="flex w-full items-center justify-between border-b border-border px-3 py-2 text-left text-[12.5px] last:border-0 transition-colors ' + (on ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-accent/50") + '" type="button" data-act="customStep" data-v="' + esc(st) + '"><span class="truncate">' + esc(st) + '</span><span class="ml-1 shrink-0 tabular ' + (on ? "text-primary-foreground/80" : "text-muted-foreground") + '">' + n + "</span></button>"
  }).join("")
  var thead =
    '<tr><th class="border-b border-border px-2 py-1.5 text-left text-[11px] font-bold bg-slate-50 text-slate-600" colspan="10">기본 정보</th><th class="border-b border-border px-2 py-1.5 text-left text-[11px] font-bold bg-amber-50 text-amber-700" colspan="7">제작 진행</th><th class="border-b border-border px-2 py-1.5 text-left text-[11px] font-bold bg-emerald-50 text-emerald-700" colspan="6">출고 · 입금</th></tr>' +
    '<tr class="bg-muted/50">' +
    CUSTOM_HEAD.map(function (h) {
      var cls = "whitespace-nowrap border-b border-border px-2 py-1.5 text-left align-bottom font-semibold text-muted-foreground " + h[1]
      if (!h[2]) return '<th class="' + cls + '">' + h[0] + "</th>"
      var on = c.sort === h[2] && h[0] !== "나염입고" && h[0] !== "포장" && h[0] !== "입금예정" && h[0] !== "입금날짜" && h[0] !== "결제반영여부"
      return '<th class="' + cls + '"><button class="flex items-center gap-0.5 hover:text-foreground' + (on ? " text-primary" : "") + '" type="button" data-act="customSort" data-v="' + h[2] + '">' + h[0] + ic("chevron-down", "size-3" + (on ? (c.dir > 0 ? " rotate-180" : "") : " opacity-30")) + "</button></th>"
    }).join("") + "</tr>"
  var rows = list.map(function (o) {
    var ct = client(o.client) || {}
    var cells = customCells(o)
    var items = [{ item: o.item, qty: o.qty, spec: o.spec }].concat(o.extra ? [o.extra] : [])
    var tdc = function (w, html) { return '<td class="px-2 py-2 align-top ' + w + '">' + html + "</td>" }
    return (
      '<tr class="cursor-pointer border-b border-border last:border-0 hover:bg-accent/40" data-act="openOrder" data-no="' + esc(o.no) + '">' +
      tdc("w-20", '<span class="font-mono text-[11px] font-medium text-primary">' + md(o.created) + "-" + o.no.slice(-2) + "</span>") +
      tdc("w-28", badge(o.stage, stageIdx(o) >= 4 && stageIdx(o) <= 5 ? "amber" : stageIdx(o) >= 6 ? "green" : "blue")) +
      tdc("w-32", '<button class="text-left hover:underline" type="button" data-act="customClient" data-v="' + esc(o.client) + '"><span class="rounded bg-muted px-1 py-0.5 text-[10px] text-muted-foreground">' + esc(ct.kind || "") + '</span><div class="font-medium">' + esc(o.client) + "</div></button>") +
      tdc("w-20", esc(ct.contact ? ct.contact.split(" ")[0] : "-")) + tdc("w-16", esc(o.cs || "-")) +
      tdc("w-20", o.designer ? '<button class="hover:underline" type="button" data-act="go" data-v="/design">' + esc(o.designer) + "</button>" : '<span class="text-muted-foreground">미배정</span>') +
      tdc("w-16", (o.dates || {})[1] ? md(o.dates[1]) : "-") +
      tdc("w-20", '<div class="flex flex-col gap-1">' + items.map(function () { return orderArt(o, "h-9 w-14 rounded border border-border bg-muted") }).join("") + "</div>") +
      tdc("w-44", '<div class="flex flex-col gap-1.5">' + items.map(function (it) { return '<div class="leading-tight"><div class="font-medium">' + esc(it.item) + ' <span class="text-muted-foreground">' + num(it.qty) + '장</span></div><div class="text-[10px] text-muted-foreground">' + esc(it.spec || "") + "</div></div>" }).join("") + "</div>") +
      tdc("w-24", o.amount ? '<span class="font-semibold tabular">' + won(o.amount) + "</span>" : '<span class="text-amber-600">견적중</span>') +
      ["w-16", "w-16", "w-24", "w-24", "w-16", "w-20", "w-16", "w-16", "w-16", "w-20", "w-16", "w-20", "w-20"].map(function (w, k) { return tdc(w, cells[k]) }).join("") + "</tr>"
    )
  }).join("")
  return (
    pageHead("커스텀 제작 관리", "단체티·커스텀 제작 주문을 1건 1행으로 관리. 기본정보 · 제작진행 · 출고입금을 한 화면에서.", btn(BTN_PRI, "제작 문의 등록", 'data-act="newOrder" data-type="커스텀제작"', "plus")) +
    '<div class="flex gap-3"><aside class="w-36 shrink-0"><div class="overflow-hidden rounded-lg border border-border bg-card">' + side + "</div></aside>" +
    '<div class="min-w-0 flex-1"><div class="mb-3 flex flex-wrap items-center gap-2"><select class="h-9 rounded-md border border-border bg-background px-2 text-sm outline-none focus:border-ring" data-change="customField">' +
    options([["전체", "검색: 전체"], "소속", "고객명", "CS", "디자이너", "거래유형명", "까대기", "나염출고", "나염입고", "포장", "출고날짜", "입금자명", "입금날짜"], c.field) + "</select>" +
    '<div class="relative min-w-[200px] flex-1">' + ic("search", "pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground") +
    '<input id="custq" class="h-9 w-full rounded-md border border-border bg-background pl-8 pr-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30" placeholder="' + (c.field === "전체" ? "전체" : esc(c.field)) + ' 검색" value="' + esc(c.q) + '" data-input="customQ"></div>' +
    '<span class="text-xs text-muted-foreground">' + all.length + '건 중 <span class="font-semibold text-foreground">' + list.length + "</span>건</span></div>" +
    '<div class="overflow-x-auto rounded-lg border border-border"><table class="min-w-max border-collapse text-xs"><thead>' + thead + "</thead><tbody>" + (rows || '<tr><td class="px-2 py-6 text-center text-muted-foreground" colspan="23">조건에 맞는 제작 건이 없습니다.</td></tr>') + "</tbody></table></div>" +
    '<p class="mt-2 text-[11px] text-muted-foreground">칸 머리글 ▾ 로 정렬(오름 → 내림 → 해제). 행을 누르면 상세·수정. 소속·디자이너명을 누르면 연관 내역을 봅니다.</p></div></div>'
  )
}

/* ---------------------------------------------------------------
 * 재고 · 물류
 * ------------------------------------------------------------- */
function catTabs(cur, act) {
  return seg(["전체"].concat(Object.keys(CATS)), cur, act)
}
function inCat(p, cat) {
  return cat === "전체" || CATS[cat].indexOf(p.cat) >= 0
}
function pageInventory() {
  var f = S.inv
  var text = f.q.trim().toLowerCase()
  var list = SKUS.filter(function (s) {
    var p = prod(s.code)
    if (!inCat(p, f.cat)) return false
    if (f.status !== "전체" && skuStatus(s) !== f.status) return false
    if (text && (s.code + " " + p.name + " " + s.color + " " + s.size).toLowerCase().indexOf(text) < 0) return false
    return true
  })
  list.sort(function (a, b) {
    if (f.sort === "stockDesc") return b.stock - a.stock
    if (f.sort === "stockAsc") return a.stock - b.stock
    if (f.sort === "code") return a.id < b.id ? -1 : 1
    var x = prod(a.code).name + a.id, y = prod(b.code).name + b.id
    return x < y ? -1 : x > y ? 1 : 0
  })
  var cnt = { 정상: 0, 재고부족: 0, 품절: 0, 과잉: 0 }
  SKUS.forEach(function (s) { cnt[skuStatus(s)]++ })
  var shown = list.slice(0, f.limit)
  return (
    pageHead("통합 재고관리", "현재재고 · 예약재고 · 가용재고 · 입고예정을 한 화면에서 관리합니다 (가용 = 현재 − 예약)") +
    '<div class="mb-4 grid grid-cols-2 gap-3 md:grid-cols-5">' +
    miniStat("총 SKU", num(SKUS.length)) + miniStat("정상재고", num(cnt.정상), "text-emerald-600") + miniStat("부족재고", num(cnt.재고부족), "text-red-600") + miniStat("품절", num(cnt.품절), "text-red-600") + miniStat("과잉재고", num(cnt.과잉), "text-amber-500") +
    "</div>" +
    '<div class="mb-4"><div class="space-y-2.5"><div class="flex flex-wrap items-center gap-2">' + catTabs(f.cat, "invCat") +
    '<div class="relative min-w-[180px] flex-1">' + ic("search", "pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground") +
    '<input id="invq" class="h-9 w-full rounded-md border border-border bg-background pl-8 pr-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30" placeholder="상품코드 · 상품명 · 컬러 · 사이즈" value="' + esc(f.q) + '" data-input="invQ"></div>' +
    '<label class="flex items-center gap-1.5 whitespace-nowrap text-xs text-muted-foreground">상태<select class="h-9 rounded-md border border-border bg-background px-2 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/30" data-change="invStatus">' + options(["전체", "정상", "재고부족", "품절", "과잉"], f.status) + "</select></label>" +
    '<select class="h-9 rounded-md border border-border bg-background px-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30" data-change="invSort">' + options([["name", "이름순"], ["stockDesc", "재고 많은순"], ["stockAsc", "재고 적은순"], ["code", "코드순"]], f.sort) + "</select></div></div>" +
    '<div class="mt-2 text-right text-xs text-muted-foreground">총 <span class="font-semibold text-foreground">' + num(list.length) + "</span>SKU</div></div>" +
    table([["상품"], ["상품코드"], ["컬러"], ["사이즈"], ["현재재고", "right"], ["예약재고", "right"], ["가용재고", "right"], ["입고예정", "right"], ["30일 판매", "right"], ["재고회전", "right"], ["상태", "center"]],
      shown.length ? shown.map(function (s) {
        var p = prod(s.code), a = avail(s), st = skuStatus(s)
        return (
          '<tr class="' + TR_CLICK + '" data-act="openSku" data-id="' + esc(s.id) + '">' +
          td('<div class="flex items-center gap-2.5">' + prodArt(s.code, s.color, "size-9 shrink-0 rounded border border-border bg-muted") + '<span class="font-medium">' + esc(p.name) + "</span></div>") +
          td(esc(s.code), "text-left font-mono text-[13px] text-muted-foreground") + td(esc(s.color)) + td(esc(s.size)) +
          td(num(s.stock), "text-foreground text-right tabular") + td(num(reserved(s.id)), "text-right tabular text-muted-foreground") +
          td(num(a), "text-right tabular font-semibold " + (a < 0 ? "text-red-600" : "text-foreground")) + td(s.incoming ? num(s.incoming) : "-", "text-right tabular text-muted-foreground") +
          td(num(s.sold30), "text-right tabular text-muted-foreground") + td(s.stock ? (s.sold30 / s.stock).toFixed(2) : "-", "text-right tabular text-muted-foreground") +
          td(badge(st, SKU_TONE[st]), "text-foreground text-center") + "</tr>"
        )
      }).join("") : emptyRow("조건에 맞는 SKU 가 없습니다.", 11)) +
    (list.length > shown.length ? '<div class="mt-3 flex items-center justify-center gap-3"><span class="text-xs text-muted-foreground">' + shown.length + " / " + num(list.length) + " SKU 표시 중</span>" + btn(BTN_OUT, "더 보기 (" + Math.min(50, list.length - shown.length) + "개)", 'data-act="invMore"') + "</div>" : "")
  )
}

function pageIO() {
  var todayIn = 0, todayOut = 0
  IO.forEach(function (r) {
    if (r.t.slice(0, 10) !== TODAY) return
    if (r.kind === "입고") todayIn += r.qty
    else todayOut += r.qty
  })
  return (
    pageHead("입출고 관리", "등록된 상품을 선택해 입고·출고를 등록하면 재고에 즉시 반영됩니다. 모든 입출고는 이력으로 남습니다.",
      btn(BTN_OUT, "출고 등록", 'data-act="ioNew" data-kind="출고"', "arrow-up-from-line") + btn(BTN_PRI, "입고 등록", 'data-act="ioNew" data-kind="입고"', "arrow-down-to-line")) +
    '<div class="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">' +
    miniStat("금일 입고", "+" + num(todayIn), "text-emerald-600").replace("text-xs font-medium", "text-xs") +
    miniStat("금일 출고", "-" + num(todayOut), "text-red-600").replace("text-xs font-medium", "text-xs") +
    miniStat("전체 이력", num(IO.length)).replace("text-xs font-medium", "text-xs") +
    miniStat("등록 상품", num(PRODUCTS.length), "text-primary").replace("text-xs font-medium", "text-xs") +
    "</div>" +
    table([["일시"], ["구분", "center"], ["상품코드"], ["상품명"], ["옵션"], ["수량", "right"], ["변경 후 재고", "right"], ["처리자"], ["메모"]],
      IO.length ? IO.map(function (r) {
        var s = sku(r.sku), p = prod(s.code)
        return (
          '<tr class="' + TR + '">' + td(r.t.slice(5, 16).replace("-", "."), "text-left text-muted-foreground") +
          td(badge(r.kind, r.kind === "입고" ? "green" : "red"), "text-foreground text-center") + td(esc(s.code), "text-left font-mono text-[13px] text-muted-foreground") +
          td(esc(p.name), "text-foreground text-left font-medium") + td(esc(skuLabel(s)), "text-left text-muted-foreground") +
          td((r.kind === "입고" ? "+" : "-") + num(r.qty), "text-right tabular font-semibold " + (r.kind === "입고" ? "text-emerald-600" : "text-red-600")) +
          td(num(r.after), "text-foreground text-right tabular") + td(esc(r.who), "text-left text-muted-foreground") + td(esc(r.memo || "-"), "text-left text-muted-foreground") + "</tr>"
        )
      }).join("") : emptyRow("입출고 이력이 없습니다. 오른쪽 위에서 입고를 등록해 보세요.", 9))
  )
}
function skuOptions(cur) {
  return SKUS.map(function (s) {
    return [s.id, prod(s.code).name + " · " + skuLabel(s) + " (재고 " + num(s.stock) + ")"]
  })
}
function openOrdersForResv() {
  return ORDERS.filter(function (o) { return o.type !== "온라인" && !shipped(o) && !isDone(o) })
}
function pageReserved() {
  var s = sku(S.resvSku) || SKUS[0]
  var p = prod(s.code)
  var a = avail(s)
  var list = RESV.filter(function (r) { return r.sku === s.id })
  var opts = openOrdersForResv()
  return (
    pageHead("예약 / 홀딩 재고", "견적 단계와 출고 확정 단계를 구분하여 재고를 예약(홀딩) 관리합니다") +
    '<div class="grid gap-4 lg:grid-cols-3">' +
    card(esc(p.name) + " · " + esc(skuLabel(s)), badge(s.code, "primary"),
      '<select class="' + SEL + ' w-full" data-change="resvSku" aria-label="SKU 선택">' + options(skuOptions(), s.id) + "</select>" +
      '<div class="grid grid-cols-3 gap-2 text-center"><div class="rounded-md bg-muted p-3"><div class="text-[11px] text-muted-foreground">현재재고</div><div class="mt-1 text-xl font-bold tabular">' + num(s.stock) + "</div></div>" +
      '<div class="rounded-md bg-blue-50 p-3"><div class="text-[11px] text-blue-600">예약재고</div><div class="mt-1 text-xl font-bold text-blue-700 tabular">' + num(reserved(s.id)) + "</div></div>" +
      '<div class="rounded-md p-3 ' + (a < 0 ? "bg-red-50" : "bg-emerald-50") + '"><div class="text-[11px] ' + (a < 0 ? "text-red-600" : "text-emerald-600") + '">가용재고</div><div class="mt-1 text-xl font-bold tabular ' + (a < 0 ? "text-red-600" : "text-emerald-700") + '">' + num(a) + "</div></div></div>" +
      '<form class="rounded-md border border-border p-3" data-submit="reserve"><div class="mb-2 text-xs font-medium text-muted-foreground">재고 예약</div>' +
      '<select class="' + SEL + ' mb-2 w-full" name="order" aria-label="주문 선택">' + options(opts.map(function (o) { return [o.no, o.no + " · " + o.client] }), "") + "</select>" +
      '<div class="flex gap-2"><input class="' + INP + ' w-full" name="qty" placeholder="수량" inputmode="numeric" value="' + esc(S.resvQty) + '"><button class="' + BTN_PRI8 + '" data-slot="button" type="submit">' + ic("lock", "size-3.5") + "예약</button></div></form>",
      { cls: "lg:col-span-1", body: "p-4 space-y-3" }) +
    card("현재 예약(홀딩) 목록", '<span class="text-xs text-muted-foreground">확정 전 배정된 재고</span>',
      table([["주문번호"], ["거래처"], ["예약수량", "right"], ["관리", "center"]],
        list.length ? list.map(function (r) {
          var o = order(r.order)
          return '<tr class="' + TR + '">' + td(esc(r.order), "text-left font-mono text-[13px] text-primary") + td(esc(o ? o.client : "-"), "text-foreground text-left font-medium") + td(num(r.qty), "text-right tabular font-semibold text-blue-700") +
            td(btn(BTN_DEST6, "예약 취소", 'data-act="unreserve" data-id="' + r.id + '"', "x", "size-3"), "text-foreground text-center") + "</tr>"
        }).join("") : emptyRow("이 SKU 에 걸린 예약이 없습니다.", 4), "overflow-x-auto border-border bg-card rounded-none border-0"),
      { cls: "lg:col-span-2", body: "p-0" }) +
    "</div>"
  )
}

function pagePurchase() {
  var rows = purchaseRows()
  var cnt = { 발주필요: 0, 입고예정: 0, 발주완료: 0, 입고완료: 0 }
  rows.forEach(function (x) { cnt[poStatus(x)] = (cnt[poStatus(x)] || 0) + 1 })
  var tone = { 발주필요: "red", 입고예정: "amber", 발주완료: "blue", 입고완료: "green" }
  return (
    pageHead("발주 관리", "해외/국내 공장 발주를 ERP 내부에서 관리합니다 · 추천 발주량 자동 산출", btn(BTN_PRI, "발주서 생성", 'data-act="makePO"')) +
    '<div class="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">' +
    ["발주필요", "입고예정", "발주완료", "입고완료"].map(function (k) {
      return '<div class="rounded-md border border-border bg-card text-card-foreground shadow-xs p-4" data-slot="card"><div class="flex items-center justify-between"><span class="text-xs text-muted-foreground">' + k + "</span>" + badge(k, tone[k]) + '</div><div class="mt-2 text-2xl font-bold tabular">' + (cnt[k] || 0) + "</div></div>"
    }).join("") + "</div>" +
    table([["상품"], ["옵션"], ["현재재고", "right"], ["예약재고", "right"], ["가용재고", "right"], ["90일 판매", "right"], ["확정주문", "right"], ["안전재고", "right"], ["추천발주", "right"], ["발주수량", "right"], ["예상입고"], ["상태", "center"]],
      rows.map(function (x) {
        var s = x.s, a = avail(s), st = poStatus(x)
        var basis = "안전재고 " + num(s.safety) + " + 확정주문 " + num(confirmedDemand(s.id)) + " + 예상판매량 " + num(x.r.forecast) + " − 가용재고 " + num(Math.max(0, a)) + (s.incoming ? " − 입고예정 " + num(s.incoming) : "") + " 기준"
        var qty = x.po ? x.po.qty : x.r.need
        return (
          '<tr class="' + TR + '">' + td(esc(prod(s.code).name), "text-foreground text-left font-medium") + td(esc(skuLabel(s)), "text-left text-muted-foreground") +
          td(num(s.stock), "text-foreground text-right tabular") + td(num(reserved(s.id)), "text-right tabular text-muted-foreground") +
          td(num(a), "text-right tabular " + (a < 0 ? "font-bold text-red-600" : "text-foreground")) + td(num(s.sold30 * 3), "text-right tabular text-muted-foreground") +
          td(num(confirmedDemand(s.id)), "text-right tabular text-muted-foreground") + td(num(s.safety), "text-right tabular text-muted-foreground") +
          td('<span class="inline-flex items-center gap-1 font-semibold text-primary" title="' + esc(basis) + '">' + num(x.r.need) + ic("info", "size-3 text-muted-foreground") + "</span>", "text-foreground text-right tabular") +
          td('<input class="h-8 w-20 rounded border border-border bg-background px-2 text-right text-[13px] outline-none tabular focus:ring-2 focus:ring-ring/30" type="number" min="0" value="' + qty + '" data-change="poQty" data-id="' + esc(s.id) + '"' + (x.po ? " disabled" : "") + ">", "text-foreground text-right tabular") +
          td(x.po ? md(x.po.eta) : "-", "text-left text-muted-foreground") +
          td(st === "발주필요" ? badge(st, tone[st]) : '<button data-act="poNext" data-id="' + esc(s.id) + '" title="눌러서 다음 단계로">' + badge(st, tone[st]) + "</button>", "text-foreground text-center") + "</tr>"
        )
      }).join("")) +
    '<p class="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">' + ic("info", "size-3.5") + "추천발주량 위에 마우스를 올리면 산출 근거를 확인할 수 있습니다." +
    '<a class="ml-2 inline-flex items-center gap-1 font-medium text-primary hover:underline" href="#/analytics/products">' + ic("trending-up", "size-3.5") + "발주용 판매 통계 보기</a></p>"
  )
}

function pageProducts() {
  var f = S.prd
  var text = f.q.trim().toLowerCase()
  var list = PRODUCTS.filter(function (p) {
    return inCat(p, f.cat) && (!text || (p.name + " " + p.code).toLowerCase().indexOf(text) >= 0)
  })
  var stockOf = function (p) { return SKUS.reduce(function (a, s) { return a + (s.code === p.code ? s.stock : 0) }, 0) }
  list.sort(function (a, b) {
    if (f.sort === "stockDesc") return stockOf(b) - stockOf(a)
    if (f.sort === "stockAsc") return stockOf(a) - stockOf(b)
    if (f.sort === "priceDesc") return b.price - a.price
    if (f.sort === "marginDesc") return (b.price - b.cost) / b.price - (a.price - a.cost) / a.price
    if (f.sort === "code") return a.code < b.code ? -1 : 1
    return a.name < b.name ? -1 : 1
  })
  var shown = list.slice(0, f.limit)
  return (
    pageHead("상품 관리", "상품별 옵션(컬러 × 사이즈) · 원가/판매가 · SKU 재고를 관리합니다.", btn(BTN_PRI, "상품 등록", 'data-act="newProduct"', "package")) +
    '<div class="mb-4"><div class="space-y-2.5"><div class="flex flex-wrap items-center gap-2">' + catTabs(f.cat, "prdCat") +
    '<div class="relative min-w-[180px] flex-1">' + ic("search", "pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground") +
    '<input id="prdq" class="h-9 w-full rounded-md border border-border bg-background pl-8 pr-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30" placeholder="상품명 · 코드 검색" value="' + esc(f.q) + '" data-input="prdQ"></div>' +
    '<select class="h-9 rounded-md border border-border bg-background px-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30" data-change="prdSort">' + options([["name", "이름순"], ["stockDesc", "재고 많은순"], ["stockAsc", "재고 적은순"], ["priceDesc", "판매가 높은순"], ["marginDesc", "마진 높은순"], ["code", "코드순"]], f.sort) + "</select></div></div></div>" +
    '<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">' +
    shown.map(function (p) {
      var margin = p.price ? Math.round(((p.price - p.cost) / p.price) * 100) : 0
      return (
        '<div class="rounded-md border border-border bg-card text-card-foreground shadow-xs overflow-hidden" data-slot="card"><div class="h-32 overflow-hidden bg-muted p-3">' + garment(p.shape, p.colors[0]) + "</div>" +
        '<div class="p-4" data-slot="card-content"><div class="flex items-center justify-between gap-2"><span class="font-mono text-[11px] text-muted-foreground">' + esc(p.code) + "</span>" + badge(p.cat, "slate") + "</div>" +
        '<h3 class="mt-1 text-sm font-semibold text-foreground">' + esc(p.name) + "</h3>" +
        '<div class="mt-2 flex items-baseline justify-between"><span class="text-lg font-bold text-foreground tabular">' + won(p.price) + '</span><span class="text-xs text-emerald-600">마진 ' + margin + "%</span></div>" +
        '<div class="mt-1 flex items-center justify-between text-xs text-muted-foreground"><span>원가 ' + won(p.cost) + "</span><span>재고 " + num(stockOf(p)) + "</span></div>" +
        '<div class="mt-2 flex flex-wrap gap-1">' + p.colors.map(function (c) { return '<span class="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">' + esc(c) + "</span>" }).join("") + "</div>" +
        '<div class="mt-3 flex gap-2">' + btn(BTN_OUT_FLEX, "옵션 · 재고", 'data-act="prdStock" data-code="' + esc(p.code) + '"') + btn(BTN_OUT_FLEX, "편집", 'data-act="prdEdit" data-code="' + esc(p.code) + '"', "pencil") + "</div></div></div>"
      )
    }).join("") + "</div>" +
    (list.length > shown.length ? '<div class="mt-4 flex items-center justify-center gap-3"><span class="text-xs text-muted-foreground">' + shown.length + " / " + list.length + "개 상품 표시 중</span>" + btn(BTN_OUT, "더 보기", 'data-act="prdMore"') + "</div>" : "")
  )
}

/* ---------------------------------------------------------------
 * 업무
 * ------------------------------------------------------------- */
var Q_TONE = { 사업확정: "green", 전송완료: "blue", 작성중: "muted" }
function pageQuotes() {
  var cnt = { 작성중: 0, 전송완료: 0, 사업확정: 0 }
  QUOTES.forEach(function (q) { cnt[q.status]++ })
  return (
    pageHead("견적서 관리", "상담에서 생성된 견적이 사업확정 시 주문으로 자동 전환됩니다. 견적서 = 계약의 시작점.", btn(BTN_PRI, "견적서 작성", 'data-act="newQuote"', "file-text")) +
    '<div class="mb-4 grid gap-4 sm:grid-cols-3">' +
    stat({ label: "진행 중 견적", icon: "file-text", value: cnt.작성중 + cnt.전송완료 + "건" }) +
    stat({ label: "사업 확정", icon: "circle-check", value: cnt.사업확정 + "건", sub: "주문 전환됨", tone: "amber" }) +
    stat({ label: "전송 완료 대기", icon: "send", value: cnt.전송완료 + "건" }) + "</div>" +
    table([["견적번호"], ["거래처"], ["담당자"], ["작성일"], ["공급가", "right"], ["부가세", "right"], ["합계", "right"], ["상태", "center"]],
      QUOTES.map(function (q) {
        return (
          '<tr class="' + TR_CLICK + '" data-act="openQuote" data-no="' + esc(q.no) + '">' + td(esc(q.no), "text-left font-mono text-[13px] font-medium text-primary") +
          td(esc(q.client), "text-foreground text-left font-medium") + td(esc(q.manager), "text-left text-muted-foreground") + td(ymdDot(q.date), "text-left text-muted-foreground") +
          td(won(q.supply), "text-foreground text-right tabular") + td(won(q.vat), "text-right tabular text-muted-foreground") + td(won(q.total), "text-foreground text-right tabular font-semibold") +
          td(badge(q.status, Q_TONE[q.status]), "text-foreground text-center") + "</tr>"
        )
      }).join(""))
  )
}
var WO_TONE = { 작업지시완료: "blue", 제작중: "amber", 검수: "primary", 출고완료: "green" }
function pageWorkOrders() {
  return (
    pageHead("작업지시서", "커스텀 제작 주문에서 생성됩니다. 디자인 시안 · 인쇄 도수 · 사이즈별 수량 · 외주처 정보를 담습니다.") +
    (WOS.length ? "" : '<p class="text-sm text-muted-foreground">아직 작업지시서가 없습니다. 디자인 작업에서 컨펌이 끝난 시안을 작업지시서로 전환해 보세요.</p>') +
    '<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">' +
    WOS.map(function (w) {
      var o = order(w.order), st = woStatus(w), s = sku(o.sku)
      return (
        '<div class="rounded-md border border-border bg-card text-card-foreground shadow-xs overflow-hidden" data-slot="card"><div class="aspect-video overflow-hidden bg-muted p-2">' + garment(prod(s.code).shape, s.color, shortName(o.client).slice(0, 2)) + "</div>" +
        '<div class="p-4" data-slot="card-content"><div class="flex items-center justify-between gap-2"><span class="font-mono text-[11px] text-muted-foreground">' + esc(w.no) + "</span>" + badge(st, WO_TONE[st]) + "</div>" +
        '<h3 class="mt-1 text-sm font-semibold text-foreground">' + esc(o.client) + "</h3>" +
        '<p class="mt-0.5 text-xs text-muted-foreground">' + esc(o.item) + " · " + esc(s.color) + " · " + num(o.qty) + "장</p>" +
        '<div class="mt-2 flex flex-wrap gap-1 text-[11px]"><span class="rounded bg-muted px-1.5 py-0.5 text-muted-foreground">앞면 ' + w.front + '도</span><span class="rounded bg-muted px-1.5 py-0.5 text-muted-foreground">뒷면 ' + w.back + "도</span></div>" +
        '<div class="mt-2 flex items-center justify-between text-xs text-muted-foreground"><span>외주 ' + esc(shortName(w.vendor)) + "</span><span>납기 " + md(o.due) + "</span></div>" +
        btn(BTN_OUT_FULL, "작업지시서 보기", 'data-act="openWO" data-no="' + esc(w.no) + '"') + "</div></div>"
      )
    }).join("") + "</div>"
  )
}
var D_TONE = { 시안작업: "slate", 고객컨펌: "amber", 컨펌완료: "green" }
function flowBox(icon, label, code, href, current) {
  var inner =
    '<div class="flex h-full flex-col gap-0.5 rounded-md border px-2.5 py-1.5 ' + (current ? "border-primary bg-primary/10" : code ? "border-border bg-card transition-colors hover:border-primary/50 hover:bg-accent/50" : "border-dashed border-border opacity-50") + '">' +
    '<span class="flex items-center gap-1 text-[11px] font-semibold ' + (current ? "text-primary" : "text-foreground") + '">' + ic(icon, "size-3 shrink-0") + label + "</span>" +
    '<span class="truncate font-mono text-[10px] text-muted-foreground">' + esc(code || "없음") + "</span></div>"
  return code && href ? '<a aria-label="' + label + ' 열기" class="min-w-0 flex-1" href="' + href + '">' + inner + "</a>" : '<div class="min-w-0 flex-1">' + inner + "</div>"
}
function pageDesign() {
  var designers = ["진다솜", "위태린"]
  var active = DESIGN.filter(function (j) { return !j.wo })
  return (
    pageHead("디자인 작업", "디자인팀 전용 작업 보드. 시안 업로드 · 고객 컨펌 · 작업지시서 전환까지의 흐름을 관리합니다.") +
    '<div class="mb-4 grid gap-4 sm:grid-cols-3">' +
    stat({ label: "진행 중 시안", icon: "pen-tool", value: active.length + "건" }) +
    stat({ label: "컨펌 대기", icon: "clock", value: DESIGN.filter(function (j) { return j.status === "고객컨펌" }).length + "건", tone: "amber" }) +
    stat({ label: "담당 디자이너", icon: "user", value: designers.length + "명" }) + "</div>" +
    '<div class="grid gap-4 md:grid-cols-2">' +
    designers.map(function (dn) {
      var jobs = DESIGN.filter(function (j) { return j.designer === dn })
      return card("디자이너 " + dn, '<span class="text-xs text-muted-foreground">배정 ' + jobs.length + "건</span>",
        jobs.map(function (j) {
          var o = order(j.order), q = quoteOf(o.no), w = j.wo ? WOS.filter(function (x) { return x.no === j.wo })[0] : null
          var st = w ? woStatus(w) : j.status
          var next = !w && j.status === "시안작업" ? ["시안 업로드", "designUp"] : !w && j.status === "고객컨펌" ? ["컨펌 완료", "designOk"] : !w && j.status === "컨펌완료" ? ["작업지시서 전환", "designWO"] : null
          return (
            '<div class="scroll-mt-24 space-y-2 rounded-md border border-border p-2.5" id="card-' + esc(o.no) + '">' +
            '<a class="flex gap-3 rounded-md transition-colors hover:bg-accent/40" href="#/design" data-act="openOrder" data-no="' + esc(o.no) + '">' + orderArt(o, "size-16 shrink-0 rounded bg-muted") +
            '<div class="min-w-0 flex-1"><div class="flex items-center justify-between gap-2"><span class="truncate text-sm font-semibold text-foreground">' + esc(shortName(o.client)) + " " + esc(j.title) + "</span>" + badge(st, w ? WO_TONE[st] : D_TONE[st]) + "</div>" +
            '<p class="mt-0.5 truncate text-xs text-muted-foreground">' + esc(o.client) + '</p><div class="mt-1 flex items-center justify-between text-[11px] text-muted-foreground"><span>' + num(o.qty) + "장</span><span>납기 " + md(o.due) + "</span></div></div></a>" +
            '<div class="rounded-lg border border-border bg-muted/40 p-2.5"><div class="mb-2 flex items-center justify-between gap-2 px-0.5"><span class="min-w-0 truncate text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground">연동 흐름 · ' + esc(o.client) + "</span>" +
            (next ? btn(BTN_PRI_XS, next[0], 'data-act="' + next[1] + '" data-no="' + esc(o.no) + '"') : "") + "</div>" +
            '<div class="flex items-stretch gap-1">' + flowBox("file-text", "견적서", q && q.no, "#/quotes") +
            '<div class="flex items-center">' + ic("chevron-right", "size-3.5 shrink-0 text-muted-foreground") + "</div>" + flowBox("clipboard-list", "작업지시서", w && w.no, "#/work-orders") +
            '<div class="flex items-center">' + ic("chevron-right", "size-3.5 shrink-0 text-muted-foreground") + "</div>" + flowBox("pen-tool", "디자인작업", o.no, null, true) + "</div></div></div>"
          )
        }).join(""), { body: "p-4 space-y-3" })
    }).join("") + "</div>"
  )
}
function clientStats() {
  return CLIENTS.map(function (c) {
    var os = ORDERS.filter(function (o) { return o.client === c.name })
    var sales = os.reduce(function (a, o) { return a + (confirmed(o) ? o.amount : 0) }, 0)
    var rec = os.reduce(function (a, o) { return a + receivable(o) }, 0)
    var last = os.concat(QUOTES.filter(function (q) { return q.client === c.name }).map(function (q) { return { created: q.date } })).reduce(function (a, o) { return o.created > a ? o.created : a }, "")
    return { c: c, sales: sales, rec: rec, last: last, n: os.length }
  })
}
var KIND_TONE = { 기관: "blue", 군부대: "slate", 기업: "muted", 학교: "amber", 동호회: "green" }
function pageClients() {
  var st = clientStats()
  return (
    pageHead("거래처 관리", "거래처별 상담 → 견적 → 주문 → 납품 → 수금 히스토리가 하나의 타임라인으로 연결됩니다.") +
    '<div class="mb-4 grid gap-4 sm:grid-cols-3">' +
    stat({ label: "전체 거래처", icon: "contact", value: CLIENTS.length + "곳" }) +
    stat({ label: "누적 매출", icon: "wallet", value: wonShort(st.reduce(function (a, x) { return a + x.sales }, 0)) }) +
    stat({ label: "총 미수금", icon: "circle-alert", value: wonShort(st.reduce(function (a, x) { return a + x.rec }, 0)), tone: "amber" }) + "</div>" +
    table([["거래처"], ["유형"], ["담당자"], ["연락처"], ["영업담당"], ["누적 매출", "right"], ["미수금", "right"], ["최근 거래"], ["상태"]],
      st.map(function (x) {
        return (
          '<tr class="' + TR_CLICK + '" data-act="openClient" data-v="' + esc(x.c.name) + '">' + td(esc(x.c.name), "text-left font-medium text-primary") + td(badge(x.c.kind, KIND_TONE[x.c.kind])) +
          td(esc(x.c.contact)) + td(esc(x.c.phone), "text-left text-muted-foreground") + td(esc(x.c.rep), "text-left text-muted-foreground") +
          td(won(x.sales), "text-foreground text-right tabular font-medium") + td(x.rec ? won(x.rec) : "-", "text-right tabular " + (x.rec ? "text-red-600" : "text-muted-foreground")) +
          td(ymdDot(x.last), "text-left text-muted-foreground") + td(x.n ? badge("거래중", "green") : badge("상담중", "blue")) + "</tr>"
        )
      }).join(""))
  )
}

/* ---------------------------------------------------------------
 * 정산
 * ------------------------------------------------------------- */
var P_TONE = { 자동매칭: "green", 확인필요: "amber", 미매칭: "red", 확인완료: "green" }
function pagePayments() {
  var todayIn = PAYMENTS.filter(function (p) { return p.date === TODAY }).reduce(function (a, p) { return a + p.amount }, 0)
  return (
    pageHead("입금 관리", "계좌 입금내역을 거래처 · 주문과 자동 매칭합니다. 신뢰도가 낮은 건만 담당자가 확인합니다.") +
    '<div class="mb-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">' +
    stat({ label: "오늘 입금액", icon: "wallet", value: wonShort(todayIn) }) +
    stat({ label: "자동 매칭", icon: "circle-check", value: PAYMENTS.filter(function (p) { return p.status === "자동매칭" }).length + "건", sub: "신뢰도 90%+" }) +
    stat({ label: "확인 필요", icon: "circle-question-mark", value: PAYMENTS.filter(function (p) { return p.status === "확인필요" || p.status === "미매칭" }).length + "건", tone: "amber" }) +
    stat({ label: "총 미수금", icon: "circle-alert", value: wonShort(totalReceivable()), tone: "red" }) + "</div>" +
    table([["입금일시"], ["은행"], ["입금자명"], ["입금액", "right"], ["추천 거래처"], ["추천 주문"], ["매칭 신뢰도"], ["상태", "center"], ["처리", "right"]],
      PAYMENTS.map(function (p) {
        var o = p.order ? order(p.order) : p.suggest ? order(p.suggest) : null
        var bar = p.score >= 90 ? "bg-emerald-500" : p.score >= 50 ? "bg-amber-500" : "bg-red-500"
        var done = p.status === "자동매칭" || p.status === "확인완료"
        return (
          '<tr class="' + TR + '">' + td(md(p.date) + " " + p.time, "text-left text-muted-foreground") + td(esc(p.bank)) + td(esc(p.payer), "text-foreground text-left font-medium") +
          td(won(p.amount), "text-foreground text-right tabular font-semibold") + td(o ? esc(o.client) : '<span class="text-red-600">미상</span>') +
          td(o ? esc(o.no) : "-", "text-left font-mono text-[13px] text-muted-foreground") +
          td('<div class="flex items-center gap-2"><div class="h-1.5 w-16 overflow-hidden rounded-full bg-muted"><div class="h-full ' + bar + '" style="width: ' + p.score + '%;"></div></div><span class="text-xs tabular text-muted-foreground">' + p.score + "%</span></div>") +
          td(badge(p.status, P_TONE[p.status]), "text-foreground text-center") +
          td(done ? '<span class="text-xs text-muted-foreground">완료</span>' : btn(BTN_PRI_XS, "매칭 확인", 'data-act="matchPay" data-id="' + p.id + '"'), "text-foreground text-right tabular") + "</tr>"
        )
      }).join(""))
  )
}
function pageSettlement() {
  var rows = segRows()
  var month = monthSales()
  var recv = rows.reduce(function (a, r) { return a + r.rec }, 0)
  var y = dayTotal(day(-1)), t = dayTotal(TODAY)
  return (
    pageHead("매출 / 정산", "채널 · 사업부문별 매출을 집계하고 수금 · 미수 현황과 함께 정산합니다.") +
    '<div class="mb-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">' +
    stat({ label: "당월 매출", icon: "trending-up", value: wonShort(month), trend: y ? ((t - y) / y) * 100 : 0 }) +
    stat({ label: "수금 완료", icon: "wallet", value: wonShort(month - recv) }) +
    stat({ label: "미수금", icon: "circle-alert", value: wonShort(recv), tone: "amber" }) +
    stat({ label: "재고자산", icon: "landmark", value: wonShort(invValue()) }) + "</div>" +
    '<div class="mb-4">' + trendCard() + "</div>" +
    card("사업 부문별 정산", '<span class="text-xs text-muted-foreground">매출 대비 수금률과 미수 잔액을 함께 관리합니다.</span>',
      table([["사업 부문"], ["매출", "right"], ["수금", "right"], ["미수금", "right"], ["수금률", "right"]],
        rows.map(function (r) {
          var rate = pct(r.got, r.sales)
          return '<tr class="' + TR + '">' + td(r.name, "text-foreground text-left font-semibold") + td(won(r.sales), "text-foreground text-right tabular font-medium") + td(won(r.got), "text-right tabular text-emerald-600") + td(won(r.rec), "text-right tabular text-red-600") +
            td('<div class="flex items-center justify-end gap-2"><div class="h-1.5 w-16 overflow-hidden rounded-full bg-muted"><div class="h-full bg-primary" style="width: ' + rate + '%;"></div></div><span class="tabular text-muted-foreground">' + rate + "%</span></div>", "text-foreground text-right tabular") + "</tr>"
        }).join("")))
  )
}
function pageVouchers() {
  var done = VOUCHERS.filter(function (v) { return v.status === "발행완료" })
  var wait = VOUCHERS.length - done.length
  return (
    pageHead("증빙 관리", "세금계산서 · 현금영수증 발행 현황을 관리합니다. 입금 완료 건은 자동으로 발행 대상에 오릅니다.", btn(BTN_PRI, "세금계산서 일괄 발행", 'data-act="issueAll"', "receipt")) +
    '<div class="mb-4 grid gap-4 sm:grid-cols-3">' +
    stat({ label: "전체 증빙", icon: "receipt", value: VOUCHERS.length + "건" }) +
    stat({ label: "발행 완료", icon: "file-check-corner", value: done.length + "건", sub: won(done.reduce(function (a, v) { return a + v.total }, 0)) }) +
    stat({ label: "발행 대기", icon: "file-clock", value: wait + "건", tone: "amber" }) + "</div>" +
    table([["증빙번호"], ["거래처"], ["주문번호"], ["발행일"], ["공급가액", "right"], ["부가세", "right"], ["합계", "right"], ["상태", "center"], ["액션", "right"]],
      VOUCHERS.map(function (v, i) {
        return (
          '<tr class="' + TR + '">' + td(esc(v.no), "text-left font-mono text-[13px] text-primary") + td(esc(v.client), "text-foreground text-left font-medium") +
          td(esc(v.order), "text-left font-mono text-[13px] text-muted-foreground") + td(ymdDot(v.date), "text-left text-muted-foreground") +
          td(won(v.supply), "text-foreground text-right tabular") + td(won(v.vat), "text-right tabular text-muted-foreground") + td(won(v.total), "text-foreground text-right tabular font-semibold") +
          td(badge(v.status, v.status === "발행완료" ? "green" : "amber"), "text-foreground text-center") +
          td(v.status === "발행완료" ? '<span class="text-xs text-muted-foreground">완료</span>' : btn(BTN_PRI_XS, "발행", 'data-act="issue" data-i="' + i + '"'), "text-foreground text-right tabular") + "</tr>"
        )
      }).join(""))
  )
}

/* ---------------------------------------------------------------
 * 통계
 * ------------------------------------------------------------- */
function monthsBack(n) {
  var out = []
  var d = new Date(TODAY + "T00:00:00")
  for (var i = n - 1; i >= 0; i--) {
    var x = new Date(d.getFullYear(), d.getMonth() - i, 1)
    out.push(x.getMonth() + 1 + "월")
  }
  return out
}
function pageAnaSales() {
  var y = dayTotal(day(-1)), t = dayTotal(TODAY)
  var rows = segRows()
  var months = monthsBack(6)
  var base = SKUS.reduce(function (a, s) { return a + s.sold30 }, 0)
  var mult = [0.62, 0.7, 0.81, 0.93, 0.88, 1]
  return (
    pageHead("매출 분석", "기간별 · 채널별 · 사업부문별 매출 추세를 분석합니다.") +
    '<div class="mb-4 grid gap-4 sm:grid-cols-3">' +
    stat({ label: "당월 매출", icon: "trending-up", value: wonShort(monthSales()), trend: y ? ((t - y) / y) * 100 : 0 }) +
    rows.map(function (r) { return stat({ label: r.name + " 매출", value: wonShort(r.sales), sub: num(r.cnt) + "건 · 리드 " + r.lead }) }).join("") + "</div>" +
    '<div class="mb-4 grid gap-4 lg:grid-cols-3"><div class="lg:col-span-2">' + trendCard() + "</div>" + donutCard() + "</div>" +
    card("월별 판매 수량 추이", "", chartBox({ type: "bar", labels: months, values: mult.map(function (m) { return Math.round(base * m * 3.1) }), color: "var(--color-chart-2)", fmt: num }, 260))
  )
}
function pageAnaProducts() {
  var p = prod(S.anaProd) || PRODUCTS[2]
  var skus = SKUS.filter(function (s) { return s.code === p.code && (S.anaColor === "전체" || s.color === S.anaColor) && (S.anaSize === "전체" || s.size === S.anaSize) })
  var segMul = S.anaSeg === "전체" ? 1 : S.anaSeg === "온라인" ? 0.46 : S.anaSeg === "단체납품" ? 0.34 : 0.2
  var nMonths = S.anaPeriod === "최근 3개월" ? 3 : S.anaPeriod === "최근 12개월" ? 12 : 6
  var months = monthsBack(nMonths)
  var shape = [0.55, 0.6, 0.66, 0.7, 0.74, 0.79, 0.68, 0.72, 0.84, 0.97, 0.9, 1].slice(12 - nMonths)
  var base = skus.reduce(function (a, s) { return a + s.sold30 }, 0) * segMul
  var series = shape.map(function (m) { return Math.round(base * m) })
  var last3 = series.slice(-3).reduce(function (a, b) { return a + b }, 0), prev3 = series.slice(-6, -3).reduce(function (a, b) { return a + b }, 0)
  var growth = prev3 ? Math.round(((last3 - prev3) / prev3) * 100) : 0
  var sizes = p.sizes
  var bySize = sizes.map(function (sz) {
    return Math.round(SKUS.filter(function (s) { return s.code === p.code && s.size === sz && (S.anaColor === "전체" || s.color === S.anaColor) }).reduce(function (a, s) { return a + s.sold30 }, 0) * segMul * nMonths * 0.8)
  })
  var tot = bySize.reduce(function (a, b) { return a + b }, 0)
  var top = bySize.indexOf(Math.max.apply(null, bySize))
  var sel = function (label, list, cur, k) { return filterSel(label, list, cur, "anaF", k) }
  return (
    pageHead("상품 판매 분석", "발주 담당자를 위한 품목별 판매 추이 · 사이즈별 판매 분포") +
    '<div class="mb-3 flex flex-wrap items-center gap-2 rounded-md border border-border bg-card p-3">' +
    sel("상품", PRODUCTS.filter(function (x) { return x.sizes.length > 1 }).map(function (x) { return [x.code, x.name] }), p.code, "anaProd") +
    sel("컬러", ["전체"].concat(p.colors), S.anaColor, "anaColor") + sel("사이즈", ["전체"].concat(p.sizes), S.anaSize, "anaSize") +
    sel("사업유형", ["전체", "온라인", "단체납품", "커스텀제작"], S.anaSeg, "anaSeg") + sel("기간", ["최근 3개월", "최근 6개월", "최근 12개월"], S.anaPeriod, "anaPeriod") + "</div>" +
    '<div class="grid gap-4 lg:grid-cols-2">' +
    card("월별 판매량 · " + esc(p.name), badge("지난 3개월 대비 " + (growth >= 0 ? "+" : "") + growth + "%", growth >= 0 ? "green" : "red", ic("trending-up", "size-3")),
      chartBox({ type: "line", labels: months, series: [{ name: p.name, color: "var(--color-chart-1)", values: series }], fmt: num, dots: true, left: 36 }, 280)) +
    card("사이즈별 판매량", '<span class="text-xs text-muted-foreground">' + esc(S.anaPeriod) + " 누적</span>",
      chartBox({ type: "bar", labels: sizes, values: bySize, colors: bySize.map(function (_, i) { return i === top ? "var(--color-chart-1)" : "var(--color-chart-3)" }), fmt: num, barMax: 56, radius: 3, left: 36 }, 280) +
      '<p class="mt-2 text-xs text-muted-foreground">' + esc(sizes[top]) + ' 사이즈가 전체 판매의 <b class="text-foreground">' + pct(bySize[top], tot) + "%</b>로 가장 높습니다. 발주 시 " + esc(sizes[top]) + " 비중을 확대하세요.</p>") +
    "</div>"
  )
}
function turnover(p) {
  var st = 0, sold = 0
  SKUS.forEach(function (s) { if (s.code === p.code) { st += s.stock; sold += s.sold30 } })
  return { stock: st, sold: sold, rate: st ? sold / st : sold ? 9.99 : 0 }
}
function pageAnaInventory() {
  var list = PRODUCTS.map(function (p) { return { p: p, t: turnover(p) } }).sort(function (a, b) { return a.t.rate - b.t.rate })
  var avg = list.reduce(function (a, x) { return a + x.t.rate }, 0) / list.length
  var cnt = { 재고부족: 0, 과잉: 0 }
  SKUS.forEach(function (s) { var k = skuStatus(s); if (k === "재고부족" || k === "품절") cnt.재고부족++; if (k === "과잉") cnt.과잉++ })
  var judge = function (r) { return r < 0.25 ? ["부진", "red"] : r >= 0.34 ? ["회전 빠름", "blue"] : ["적정", "green"] }
  return (
    pageHead("재고 분석", "상품별 재고 회전율과 부진/과잉 재고를 파악해 발주 · 프로모션 의사결정을 지원합니다.") +
    '<div class="mb-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">' +
    stat({ label: "총 SKU", icon: "boxes", value: num(SKUS.length) + "종" }) +
    stat({ label: "평균 회전율", icon: "refresh-cw", value: avg.toFixed(2), sub: "30일 기준" }) +
    stat({ label: "부족 재고", icon: "triangle-alert", value: cnt.재고부족 + "종", tone: "amber" }) +
    stat({ label: "과잉 재고", icon: "boxes", value: cnt.과잉 + "종" }) + "</div>" +
    card("상품별 재고 회전율", "", chartBox({ type: "bar", labels: list.map(function (x) { return x.p.name }), values: list.map(function (x) { return +x.t.rate.toFixed(2) }), color: "var(--color-chart-2)", fmt: function (v) { return v.toFixed(2) }, cut: 6, barMax: 44 }, 260) +
      '<p class="mt-2 text-xs text-muted-foreground">회전율이 낮은 상품은 과잉재고로, 높은 상품은 발주 우선순위로 관리합니다.</p>', { cls: "mb-4" }) +
    card("상품별 재고 현황", "",
      table([["상품코드"], ["상품명"], ["현재고", "right"], ["30일 판매", "right"], ["회전율", "right"], ["판정", "center"]],
        list.map(function (x) {
          var j = judge(x.t.rate)
          return '<tr class="' + TR + '">' + td(esc(x.p.code), "text-foreground text-left font-mono text-[13px]") + td(esc(x.p.name), "text-foreground text-left font-medium") + td(num(x.t.stock), "text-foreground text-right tabular") + td(num(x.t.sold), "text-foreground text-right tabular") + td(x.t.rate.toFixed(2), "text-foreground text-right tabular font-semibold") + td(badge(j[0], j[1]), "text-foreground text-center") + "</tr>"
        }).join("")))
  )
}
function pageAnaPurchase() {
  var rows = purchaseRows()
  var need = rows.filter(function (x) { return poStatus(x) === "발주필요" })
  var total = rows.reduce(function (a, x) { return a + x.r.need }, 0)
  var months = monthsBack(6)
  var base = rows.reduce(function (a, x) { return a + x.s.sold30 }, 0)
  var mult = [0.58, 0.66, 0.78, 0.9, 0.86, 1]
  var tone = { 발주필요: "red", 입고예정: "amber", 발주완료: "blue", 입고완료: "green" }
  return (
    pageHead("발주 분석", "추천 발주량 산출 근거와 수요 예측을 시각화합니다.") +
    '<div class="mb-4 grid gap-4 sm:grid-cols-3">' +
    stat({ label: "발주 필요 품목", icon: "truck", value: need.length + "품목", tone: "red" }) +
    stat({ label: "추천 발주 총량", icon: "sparkles", value: num(total) + "개" }) +
    stat({ label: "분석 대상 SKU", icon: "package-search", value: rows.length + "품목" }) + "</div>" +
    '<div class="mb-4 grid gap-4 lg:grid-cols-2">' +
    card("옵션별 추천 발주량", "", chartBox({ type: "bar", labels: need.map(function (x) { return prod(x.s.code).name }), values: need.map(function (x) { return x.r.need }), color: "var(--color-chart-1)", fmt: num, cut: 6, barMax: 77, minMax: 10 }, 260)) +
    card("월별 수요 추이 (예측 기준)", "", chartBox({ type: "bar", labels: months, values: mult.map(function (m) { return Math.round(base * m) }), color: "var(--color-chart-2)", fmt: num, barMax: 64 }, 260)) + "</div>" +
    card("발주 추천 산출 근거", "",
      table([["상품 / 옵션"], ["추천 발주", "right"], ["산출 근거"], ["상태", "center"]],
        rows.map(function (x) {
          var s = x.s, st = poStatus(x)
          return '<tr class="' + TR + '">' + td('<span class="font-medium">' + esc(prod(s.code).name) + '</span><span class="ml-1.5 font-mono text-[12px] text-muted-foreground">' + esc(skuLabel(s)) + "</span>") +
            td(num(x.r.need), "text-right tabular font-bold text-primary") +
            td("안전재고 " + num(s.safety) + " + 확정주문 " + num(confirmedDemand(s.id)) + " + 예상판매량 " + num(x.r.forecast) + " − 가용재고 " + num(Math.max(0, avail(s))) + (s.incoming ? " − 입고예정 " + num(s.incoming) : "") + " 기준", "text-left text-xs text-muted-foreground") +
            td(badge(st, tone[st]), "text-foreground text-center") + "</tr>"
        }).join("")))
  )
}

/* ---------------------------------------------------------------
 * 시스템
 * ------------------------------------------------------------- */
function pageStaff() {
  var cur = STAFF.filter(function (s) { return s.id === S.staff })[0]
  var perm = PERMS[cur.id]
  var c = { 수정: 0, 뷰어: 0, 없음: 0 }
  Object.keys(perm).forEach(function (k) { c[perm[k]]++ })
  var assigned = STAFF.filter(function (s) { var p = PERMS[s.id]; return Object.keys(p).some(function (k) { return p[k] !== "없음" }) }).length
  var segBtn = function (path, lv, on) {
    var onCls = lv === "없음" ? "data-[on=true]:bg-muted data-[on=true]:text-muted-foreground" : lv === "뷰어" ? "data-[on=true]:bg-blue-500 data-[on=true]:text-white" : "data-[on=true]:bg-primary data-[on=true]:text-white"
    return '<button class="px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted border-r border-border last:border-r-0 ' + onCls + '" data-on="' + on + '" data-act="perm" data-p="' + esc(path) + '" data-v="' + lv + '" aria-pressed="' + on + '">' + lv + "</button>"
  }
  return (
    pageHead("직원 / 권한 관리", "직원별로 각 메뉴(탭)에 수정 · 뷰어 권한을 지정합니다. 모든 변경은 감사 로그에 기록됩니다.",
      btn(BTN_OUT, "감사 로그", 'data-act="go" data-v="/system/logs"', "scroll-text") + btn(BTN_PRI, "직원 추가", 'data-act="newStaff"', "user-plus")) +
    '<div class="mb-4 grid gap-4 sm:grid-cols-3">' +
    stat({ label: "전체 직원", icon: "users", value: STAFF.length + "명" }) +
    stat({ label: "활성 계정", icon: "users", value: STAFF.length + "명" }) +
    stat({ label: "권한 지정된 직원", icon: "shield", value: assigned + "명" }) + "</div>" +
    '<div class="grid gap-4 lg:grid-cols-[260px_1fr]">' +
    card("직원", "", '<ul class="space-y-0.5">' + STAFF.map(function (s) {
      return '<li><button class="flex w-full items-center justify-between gap-2 rounded-md px-2.5 py-2 text-left text-sm transition-colors ' + (s.id === cur.id ? "bg-accent" : "hover:bg-muted/60") + '" data-act="pickStaff" data-v="' + s.id + '"><span class="min-w-0"><span class="block truncate font-medium text-foreground">' + esc(s.name) + '</span><span class="block truncate text-[11px] text-muted-foreground">' + esc(s.dept) + " · " + esc(s.team) + "</span></span></button></li>"
    }).join("") + "</ul>", { cls: "h-fit", body: "p-2" }) +
    '<div class="rounded-md border border-border bg-card text-card-foreground shadow-xs" data-slot="card"><div class="flex items-center justify-between gap-2 px-4 py-3 border-b border-border" data-slot="card-header"><div class="min-w-0">' +
    '<div class="text-sm font-semibold text-foreground flex items-center gap-2" data-slot="card-title">' + esc(cur.name) + badge(cur.team, "primary") + "</div>" +
    '<span class="text-xs text-muted-foreground">수정 ' + c.수정 + " · 뷰어 " + c.뷰어 + " · 없음 " + c.없음 + "</span></div>" +
    '<div class="flex items-center gap-2">' + btn(BTN_PRI, "권한 저장", 'data-act="savePerm"', "save") + "</div></div>" +
    '<div class="p-4 space-y-4" data-slot="card-content">' +
    NAV.map(function (g, gi) {
      return (
        '<div><div class="mb-1.5 flex items-center justify-between"><span class="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">' + esc(g.group || "기본") + '</span><div class="flex items-center gap-1 text-[10px] text-muted-foreground"><span>전체:</span>' +
        PERM_LEVELS.map(function (lv) { return '<button class="rounded px-1.5 py-0.5 hover:bg-muted" data-act="permAll" data-g="' + gi + '" data-v="' + lv + '">' + lv + "</button>" }).join("") + "</div></div>" +
        '<div class="overflow-hidden rounded-md border border-border">' +
        g.items.map(function (it, i) {
          return '<div class="flex items-center justify-between gap-3 px-3 py-2' + (i ? " border-t border-border" : "") + '"><span class="min-w-0 truncate text-sm text-foreground">' + esc(it[1]) + '</span><div class="flex overflow-hidden rounded-md border border-border">' +
            PERM_LEVELS.map(function (lv) { return segBtn(it[0], lv, perm[it[0]] === lv) }).join("") + "</div></div>"
        }).join("") + "</div></div>"
      )
    }).join("") + "</div></div></div>"
  )
}
function pageLogs() {
  return (
    pageHead("감사 로그", "시스템의 모든 변경 작업이 누가 · 언제 · 무엇을 했는지 기록됩니다.", btn(BTN_OUT, "새로고침", 'data-act="refreshLogs"', "refresh-cw")) +
    '<div class="rounded-md border border-border bg-card text-card-foreground shadow-xs p-0" data-slot="card"><div class="flex items-center gap-2 border-b border-border px-4 py-3">' + ic("scroll-text", "size-4 text-primary") +
    '<span class="text-sm font-semibold text-foreground">활동 기록</span><span class="text-xs text-muted-foreground">' + LOGS.length + "건</span></div>" +
    table([["시각"], ["담당자"], ["작업"], ["대상"], ["상세"]],
      LOGS.map(function (l) {
        return '<tr class="' + TR + '"><td class="px-3 py-2.5 text-left whitespace-nowrap font-mono text-[12px] text-muted-foreground">' + esc(l.t) + '</td><td class="px-3 py-2.5 text-foreground text-left whitespace-nowrap font-medium">' + esc(l.who) + "</td>" +
          td(badge(l.act, /일괄|발행|확정/.test(l.act) ? "amber" : "slate")) + td(esc(l.target), "text-left text-foreground") + td(esc(l.detail), "text-left text-muted-foreground") + "</tr>"
      }).join("")) + "</div>"
  )
}
function pageUnavailable(title) {
  return (
    pageHead(title, "외부 서비스 계정과 회사 고유 설정이 필요한 화면입니다.") +
    '<div class="rounded-md border border-border bg-card text-card-foreground shadow-xs p-8 text-center" data-slot="card">' +
    '<div class="mx-auto flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">' + ic("lock", "size-5") + "</div>" +
    '<div class="mt-3 text-sm font-semibold text-foreground">체험판에서는 이 화면을 제공하지 않습니다</div>' +
    '<p class="mt-1 text-xs text-muted-foreground">실제 시스템에서는 쇼핑몰 · 은행 · 세금계산서 연동 정보를 이곳에서 관리합니다.</p>' +
    '<a class="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline" href="#/">' + ic("layout-dashboard", "size-3.5") + "대시보드로 돌아가기</a></div>"
  )
}

/* ---------------------------------------------------------------
 * 상태 변경 (모든 화면이 같은 데이터에서 다시 계산된다)
 * ------------------------------------------------------------- */
function shipOut(o) {
  RESV = RESV.filter(function (r) { return r.order !== o.no })
  var s = o.sku ? sku(o.sku) : null
  if (s) {
    s.stock = Math.max(0, s.stock - o.qty)
    IO.unshift({ id: ++ioSeq, t: nowStamp(), kind: "출고", sku: s.id, qty: o.qty, after: s.stock, who: ME.name, memo: o.no + " 출고" })
  }
  addSales(o.type === "단체납품" ? "단체납품" : "커스텀제작", o.amount)
}
function ensureDesign(o) {
  if (o.type !== "커스텀제작") return null
  var j = DESIGN.filter(function (x) { return x.order === o.no })[0]
  if (!j) {
    if (!o.designer) o.designer = DESIGN.filter(function (x) { return x.designer === "진다솜" }).length <= DESIGN.filter(function (x) { return x.designer === "위태린" }).length ? "진다솜" : "위태린"
    j = { order: o.no, designer: o.designer, status: "시안작업", title: o.item }
    DESIGN.push(j)
  }
  return j
}
function setStage(o, ni, silent) {
  var flow = FLOW[o.type]
  if (ni < 0 || ni >= flow.length) return
  var wasShipped = shipped(o)
  o.stage = flow[ni]
  o.dates = o.dates || {}
  o.dates[ni] = TODAY
  o.updatedAt = Date.now()
  if (!wasShipped && shipped(o)) shipOut(o)
  if (((o.type === "단체납품" && ni >= 6) || (o.type === "커스텀제작" && ni >= 7)) && o.paid < o.amount) {
    var rest = o.amount - o.paid
    o.paid = o.amount
    addVoucher(o.no, rest, "발행대기")
  }
  if (o.type === "커스텀제작") {
    var j = ensureDesign(o)
    if (ni >= 2 && !woOf(o.no)) {
      var w = { no: nextNo("WO", TODAY), order: o.no, front: 1, back: 2, vendor: "(가상) 별빛프린트" }
      WOS.unshift(w)
      j.status = "컨펌완료"
      j.wo = w.no
      if (!silent) log("작업지시서 생성", o.client + " (" + o.no + ")", w.no)
    }
    if (ni >= 4 && !o.printer) o.printer = "(가상) 별빛프린트"
  }
  if (!silent) log("상태변경", o.client + " (" + o.no + ")", o.stage)
}
function newOrderFrom(x) {
  var o = addOrder({
    type: x.type, channel: x.channel, client: x.client, manager: x.manager, item: x.item, sku: x.sku, qty: x.qty, kinds: 1,
    amount: x.amount, stage: FLOW[x.type][x.stageIdx || 0], due: x.due, created: TODAY, cs: x.manager, spec: x.spec || "", designer: "",
    updatedAt: Date.now(),
  })
  o.dates[x.stageIdx || 0] = TODAY
  if (o.type === "커스텀제작") ensureDesign(o)
  return o
}
function syncChannels() {
  var pool = SKUS.filter(function (s) { return s.stock > 3 && prod(s.code).cat !== "부츠" })
  var n = 0
  CH_INFO.forEach(function (c) {
    var k = ri(1, 2)
    for (var i = 0; i < k; i++) {
      var s = pool[ri(0, pool.length - 1)]
      var o = addOnline(c.key, s.id, ri(1, 3), "배송준비")
      addSales(c.short, o.amount)
      n++
    }
    c.synced = 0
    c.lastSync = Date.now()
  })
  S.syncAgo = 0
  log("채널 동기화", "온라인 3개 채널", "신규 주문 " + n + "건 수집 · 재고 자동 차감")
  return n
}
function exportCsv() {
  var list = filteredOrders(D.route().query)
  var rows = [["주문번호", "구분", "채널", "거래처", "담당자", "상품", "수량", "주문금액", "현재 단계", "납기일", "재고상태", "결제상태"]]
  list.forEach(function (o) {
    rows.push([o.no, o.type, o.channel, o.client, o.manager, o.item, o.qty, o.amount, o.stage, o.due, o.batch ? "정상" : stockStatus(o), payStatus(o)])
  })
  var csv = "﻿" + rows.map(function (r) { return r.map(function (v) { return '"' + String(v).replace(/"/g, '""') + '"' }).join(",") }).join("\n")
  var a = document.createElement("a")
  a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }))
  a.download = "주문목록_" + TODAY + ".csv"
  document.body.appendChild(a)
  a.click()
  setTimeout(function () { URL.revokeObjectURL(a.href); a.remove() }, 500)
}

/* ---------------------------------------------------------------
 * 대화상자 내용
 * ------------------------------------------------------------- */
function stepper(o) {
  var flow = FLOW[o.type], cur = stageIdx(o)
  return '<div class="flex flex-wrap gap-1">' + flow.map(function (st, i) {
    return '<span class="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] font-medium ring-1 ring-inset whitespace-nowrap ' + (i < cur ? TONE.green : i === cur ? TONE.primary : TONE.muted) + '">' + (i < cur ? ic("circle-check", "size-3") : "") + esc(st) + "</span>"
  }).join("") + "</div>"
}
function modalHtml() {
  var m = S.modal
  if (!m) return ""
  var o, s, p, q, w
  if (m.kind === "order") {
    o = findAny(m.no)
    if (!o) return ""
    if (o.batch) {
      var items = ONLINE.filter(function (x) { return x.channel === o.channel && x.date === TODAY })
      var pending = items.filter(function (x) { return x.ship === "배송준비" }).length
      return modalFrame(esc(o.no) + " · " + esc(o.channel),
        '<div class="p-4">' + table([["주문번호"], ["주문자"], ["상품"], ["옵션"], ["수량", "right"], ["배송"]], items.map(function (x) {
          return '<tr class="' + TR + '">' + td(esc(x.no), "text-left font-mono text-[12px]") + td(esc(x.buyer)) + td(esc(x.name), "text-foreground text-left font-medium") + td(esc(skuLabel(sku(x.sku))), "text-left text-muted-foreground") + td(x.qty, "text-foreground text-right tabular") + td(badge(x.ship, x.ship === "배송준비" ? "amber" : "green")) + "</tr>"
        }).join("")) + "</div>",
        pending ? btn(BTN_PRI, "배송준비 " + pending + "건 일괄 출고", 'data-act="batchShip" data-v="' + esc(o.channel) + '"', "truck") : '<span class="text-xs text-muted-foreground">모든 주문이 출고되었습니다.</span>', true)
    }
    var i = stageIdx(o), flow = FLOW[o.type]
    var resv = RESV.filter(function (r) { return r.order === o.no }).reduce(function (a, r) { return a + r.qty }, 0)
    var j = DESIGN.filter(function (x) { return x.order === o.no })[0]
    w = woOf(o.no)
    return modalFrame(
      '<span class="font-mono">' + esc(o.no) + "</span> · " + esc(o.client),
      '<div class="space-y-4 p-4">' + stepper(o) +
        kv([
          ["구분 · 채널", typeBadge(o.type) + " " + badge(o.channel, "slate")],
          ["거래처", esc(o.client)], ["담당자", esc(o.manager)],
          ["상품", esc(o.item) + (o.sku ? ' <span class="text-xs text-muted-foreground">(' + esc(skuLabel(sku(o.sku))) + ")</span>" : "")],
          ["수량", num(o.qty)], ["주문금액", o.amount ? won(o.amount) : '<span class="text-amber-600">견적중</span>'],
          ["납기", ymdDot(o.due) + " · D" + (diffDays(o.due, TODAY) >= 0 ? "-" + diffDays(o.due, TODAY) : "+" + -diffDays(o.due, TODAY))],
          ["재고상태", badge(stockStatus(o), STOCK_TONE[stockStatus(o)]) + (resv ? ' <span class="text-xs text-muted-foreground">예약 ' + num(resv) + "</span>" : "")],
          ["결제", badge(payStatus(o), PAY_TONE[payStatus(o)]) + ' <span class="text-xs text-muted-foreground">입금 ' + won(o.paid) + " / 미수 " + won(receivable(o)) + "</span>"],
        ].concat(o.type === "커스텀제작" ? [["디자인", j ? esc(j.designer) + " · " + esc(w ? "작업지시서 " + w.no : j.status) : "미배정"]] : [])) +
        "</div>",
      (o.sku && !shipped(o) ? btn(BTN_OUT, "재고 예약", 'data-act="goResv" data-v="' + esc(o.sku) + '"', "lock") : "") +
        (i > 0 ? btn(BTN_OUT, "이전 단계", 'data-act="advance" data-no="' + esc(o.no) + '" data-d="-1"') : "") +
        (i < flow.length - 1 ? btn(BTN_PRI, "다음 단계로 · " + flow[i + 1], 'data-act="advance" data-no="' + esc(o.no) + '" data-d="1"', "chevron-right") : '<span class="text-xs text-muted-foreground">마지막 단계입니다.</span>')
    )
  }
  if (m.kind === "newOrder") {
    var type = m.type || "단체납품"
    var chs = CHANNELS[type]
    var mgr = STAFF.filter(function (x) { return x.team === "영업팀" }).map(function (x) { return x.name })
    return formModal(type === "커스텀제작" ? "제작 문의 등록" : type === "단체납품" ? "납품 등록" : "주문 등록", "fNewOrder",
      fSelect("type", "사업유형", ["단체납품", "커스텀제작", "온라인"], type, 'data-change="newOrderType"') + fSelect("channel", "판매채널", chs, chs[0]) +
      fSelect("client", "거래처", CLIENTS.map(function (c) { return c.name }).concat([["__new", "+ 새 거래처 (아래 입력)"]]), CLIENTS[0].name) + fInput("newClient", "새 거래처명", "", "text", 'placeholder="예: (가상) 새빛중 2학년"') +
      fSelect("manager", "담당자", mgr, mgr[0]) + fSelect("sku", "상품 · 옵션", skuOptions(), "OT-2201-NAVY-100") +
      fInput("qty", "수량", 100, "number", 'min="1"') + fInput("price", "단가 (원)", "", "number", 'min="0" placeholder="비우면 판매가"') +
      fInput("due", "납기일", day(14), "date") + fInput("spec", "사양 메모", type === "커스텀제작" ? "S~2XL · 전면 1도" : "", "text"),
      "등록", true)
  }
  if (m.kind === "sku") {
    s = sku(m.id)
    p = prod(s.code)
    var rs = RESV.filter(function (r) { return r.sku === s.id })
    return modalFrame(esc(p.name) + " · " + esc(skuLabel(s)),
      '<div class="flex gap-4 p-4">' + prodArt(s.code, s.color, "size-24 shrink-0 rounded-md border border-border bg-muted p-2") +
        '<div class="min-w-0 flex-1">' + kv([["상품코드", '<span class="font-mono">' + esc(s.code) + "</span>"], ["현재재고", num(s.stock)], ["예약재고", num(reserved(s.id)) + (rs.length ? ' <span class="text-xs text-muted-foreground">(' + rs.map(function (r) { return esc(r.order) }).join(", ") + ")</span>" : "")], ["가용재고", num(avail(s))], ["입고예정", num(s.incoming)], ["안전재고", num(s.safety)], ["30일 판매", num(s.sold30)], ["상태", badge(skuStatus(s), SKU_TONE[skuStatus(s)])]]) + "</div></div>",
      btn(BTN_OUT, "예약 / 홀딩", 'data-act="goResv" data-v="' + esc(s.id) + '"', "lock") + btn(BTN_OUT, "출고 등록", 'data-act="ioNew" data-kind="출고" data-sku="' + esc(s.id) + '"', "arrow-up-from-line") + btn(BTN_PRI, "입고 등록", 'data-act="ioNew" data-kind="입고" data-sku="' + esc(s.id) + '"', "arrow-down-to-line"))
  }
  if (m.kind === "io")
    return formModal(m.ioKind + " 등록", "fIO",
      '<input type="hidden" name="kind" value="' + esc(m.ioKind) + '">' + '<div class="sm:col-span-2">' + fSelect("sku", "상품 · 옵션", skuOptions(), m.sku || "OT-2201-NAVY-105") + "</div>" +
        fInput("qty", "수량", m.ioKind === "입고" ? 100 : 10, "number", 'min="1"') + fInput("memo", "메모", m.ioKind === "입고" ? "정기 입고" : "샘플 출고", "text"),
      m.ioKind + " 반영")
  if (m.kind === "quote") {
    q = QUOTES.filter(function (x) { return x.no === m.no })[0]
    return modalFrame('<span class="font-mono">' + esc(q.no) + "</span> · " + esc(q.client),
      '<div class="p-4">' + kv([["상태", badge(q.status, Q_TONE[q.status])], ["유형", typeBadge(q.type)], ["담당자", esc(q.manager)], ["작성일", ymdDot(q.date)], ["품목", esc(q.item) + " · " + num(q.qty) + "개"], ["공급가", won(q.supply)], ["부가세", won(q.vat)], ["합계", "<b>" + won(q.total) + "</b>"], ["전환 주문", q.order ? '<button class="font-mono text-primary hover:underline" data-act="openOrder" data-no="' + esc(q.order) + '">' + esc(q.order) + "</button>" : "-"]]) + "</div>",
      q.status === "작성중" ? btn(BTN_PRI, "견적서 전송", 'data-act="quoteSend" data-no="' + esc(q.no) + '"', "send")
        : q.status === "전송완료" ? btn(BTN_PRI, "사업 확정 · 주문 전환", 'data-act="quoteConfirm" data-no="' + esc(q.no) + '"', "circle-check")
        : '<span class="text-xs text-muted-foreground">주문으로 전환된 견적입니다.</span>')
  }
  if (m.kind === "newQuote")
    return formModal("견적서 작성", "fQuote",
      fSelect("client", "거래처", CLIENTS.map(function (c) { return c.name }), CLIENTS[4].name) + fSelect("manager", "담당자", STAFF.filter(function (x) { return x.team === "영업팀" }).map(function (x) { return x.name }), "류채안") +
        fSelect("type", "유형", ["단체납품", "커스텀제작"], "커스텀제작") + fInput("item", "품목명", "단체 기념 티셔츠", "text") +
        '<div class="sm:col-span-2">' + fSelect("sku", "기본 상품 · 옵션", skuOptions(), "OT-2202-BLACK-100") + "</div>" +
        fInput("qty", "수량", 150, "number", 'min="1"') + fInput("price", "단가 (원, 부가세 포함)", 21000, "number", 'min="0"'),
      "작성", true)
  if (m.kind === "wo") {
    w = WOS.filter(function (x) { return x.no === m.no })[0]
    o = order(w.order)
    s = sku(o.sku)
    p = prod(s.code)
    var st = woStatus(w), idx = WO_FLOW.indexOf(st)
    var wts = p.sizes.map(function (_, k) { return 1.6 - Math.abs(k - (p.sizes.length - 1) / 2) * 0.45 })
    var wsum = wts.reduce(function (a, b) { return a + b }, 0)
    var left = o.qty
    var per = p.sizes.map(function (_, k) { var v = k === p.sizes.length - 1 ? left : Math.round((o.qty * wts[k]) / wsum); left -= v; return v })
    return modalFrame("작업지시서 " + '<span class="font-mono">' + esc(w.no) + "</span>",
      '<div class="space-y-4 p-4"><div class="flex gap-4"><div class="h-28 w-40 shrink-0 overflow-hidden rounded-md border border-border bg-muted p-1">' + garment(p.shape, s.color, shortName(o.client).slice(0, 2)) + '</div><div class="min-w-0 flex-1">' +
        kv([["거래처", esc(o.client)], ["주문", '<span class="font-mono">' + esc(o.no) + "</span>"], ["품목", esc(o.item) + " · " + esc(s.color)], ["인쇄", "앞면 " + w.front + "도 · 뒷면 " + w.back + "도"], ["외주처", esc(w.vendor)], ["납기", ymdDot(o.due)]]) + "</div></div>" +
        table([["사이즈"]].concat(p.sizes.map(function (z) { return [z, "right"] })).concat([["합계", "right"]]), '<tr class="' + TR + '">' + td("수량", "text-left text-muted-foreground") + per.map(function (v) { return td(num(v), "text-foreground text-right tabular") }).join("") + td(num(o.qty), "text-foreground text-right tabular font-semibold") + "</tr>") +
        '<div class="flex flex-wrap gap-1">' + WO_FLOW.map(function (x, k) { return badge(x, k < idx ? "green" : k === idx ? "primary" : "muted") }).join("") + "</div></div>",
      idx < WO_FLOW.length - 1 ? btn(BTN_PRI, "다음 단계로 · " + WO_FLOW[idx + 1], 'data-act="woNext" data-no="' + esc(w.no) + '"', "chevron-right") : '<span class="text-xs text-muted-foreground">출고까지 끝난 작업지시서입니다.</span>', true)
  }
  if (m.kind === "client") {
    var c = client(m.name)
    var ev = []
    QUOTES.forEach(function (x) { if (x.client === c.name) ev.push([x.date, "견적", x.no + " · " + won(x.total) + " · " + x.status]) })
    ORDERS.forEach(function (x) {
      if (x.client !== c.name) return
      ev.push([x.created, "주문", x.no + " · " + x.item + " " + num(x.qty) + " · " + x.stage])
      if (shipped(x)) {
        var si = x.type === "단체납품" ? 5 : 6
        var sd = (x.dates || {})[si] || (x.dates || {})[stageIdx(x)] || x.created
        ev.push([sd, "납품", x.no + " 출고"])
      }
    })
    PAYMENTS.forEach(function (x) { var oo = x.order || x.suggest; if (oo && order(oo) && order(oo).client === c.name && x.status !== "확인필요" && x.status !== "미매칭") ev.push([x.date, "수금", x.payer + " · " + won(x.amount)]) })
    ev.sort(function (a, b) { return a[0] < b[0] ? 1 : -1 })
    var tone = { 견적: "slate", 주문: "blue", 납품: "amber", 수금: "green" }
    return modalFrame(esc(c.name),
      '<div class="space-y-4 p-4">' + kv([["유형", badge(c.kind, KIND_TONE[c.kind])], ["담당자", esc(c.contact)], ["연락처", esc(c.phone)], ["영업담당", esc(c.rep)]]) +
        '<div><div class="mb-2 text-xs font-semibold text-muted-foreground">거래 타임라인</div><ul class="space-y-2">' +
        (ev.length ? ev.map(function (e) { return '<li class="flex items-start gap-2 text-sm"><span class="w-20 shrink-0 font-mono text-[12px] text-muted-foreground">' + ymdDot(e[0]) + "</span>" + badge(e[1], tone[e[1]]) + '<span class="min-w-0 text-foreground">' + esc(e[2]) + "</span></li>" }).join("") : '<li class="text-sm text-muted-foreground">아직 거래 이력이 없습니다.</li>') +
        "</ul></div></div>", "", true)
  }
  if (m.kind === "match") {
    var pay = PAYMENTS.filter(function (x) { return x.id === m.id })[0]
    var cands = ORDERS.filter(function (x) { return x.type !== "온라인" && confirmed(x) && x.amount > x.paid })
    return formModal("입금 매칭 확인", "fMatch",
      '<input type="hidden" name="id" value="' + pay.id + '"><div class="sm:col-span-2">' + kv([["입금", md(pay.date) + " " + pay.time + " · " + esc(pay.bank)], ["입금자명", "<b>" + esc(pay.payer) + "</b>"], ["입금액", "<b>" + won(pay.amount) + "</b>"], ["추천", pay.suggest ? esc(pay.suggest) + " (신뢰도 " + pay.score + "%)" : "추천 없음"]]) + "</div>" +
        '<div class="sm:col-span-2">' + fSelect("order", "연결할 주문 (잔액)", cands.map(function (x) { return [x.no, x.no + " · " + x.client + " · 잔액 " + won(x.amount - x.paid)] }), pay.suggest) + "</div>",
      "매칭 확정")
  }
  if (m.kind === "newProduct")
    return formModal("상품 등록", "fProduct",
      fInput("name", "상품명", "", "text", 'required placeholder="예: 소프트쉘 집업"') + fInput("code", "상품코드", "OT-" + (2300 + PRODUCTS.length), "text") +
        fSelect("cat", "분류", ["아우터", "상의", "하의", "글러브", "가방", "부츠", "장비", "액세서리"], "상의") + fSelect("shape", "모양", [["tee", "반팔"], ["sweat", "긴팔"], ["jacket", "자켓"], ["vest", "조끼"], ["pants", "바지"], ["bag", "가방"], ["beanie", "모자"]], "tee") +
        fInput("colors", "컬러 (쉼표 구분)", "BLACK, NAVY", "text") + fInput("sizes", "사이즈 (쉼표 구분)", "95, 100, 105, 110", "text") +
        fInput("price", "판매가", 25000, "number", 'min="0"') + fInput("cost", "원가", 10500, "number", 'min="0"'),
      "등록", true)
  if (m.kind === "prdEdit") {
    p = prod(m.code)
    return formModal("상품 편집 · " + esc(p.code), "fPrdEdit",
      '<input type="hidden" name="code" value="' + esc(p.code) + '"><div class="sm:col-span-2">' + fInput("name", "상품명", p.name, "text", "required") + "</div>" + fInput("price", "판매가", p.price, "number", 'min="0"') + fInput("cost", "원가", p.cost, "number", 'min="0"'), "저장")
  }
  if (m.kind === "prdStock") {
    p = prod(m.code)
    return modalFrame("옵션 · 재고 · " + esc(p.name),
      '<div class="p-4">' + table([["컬러"]].concat(p.sizes.map(function (z) { return [z, "right"] })), p.colors.map(function (c) {
        return '<tr class="' + TR + '">' + td(esc(c), "text-foreground text-left font-medium") + p.sizes.map(function (z) {
          var x = sku(p.code + "-" + c + "-" + z)
          var a = avail(x)
          return td('<button class="tabular hover:underline ' + (a < x.safety ? "text-red-600" : "text-foreground") + '" data-act="openSku" data-id="' + esc(x.id) + '" title="가용 ' + num(a) + '">' + num(x.stock) + "</button>", "text-right tabular")
        }).join("") + "</tr>"
      }).join("")) + '<p class="mt-2 text-xs text-muted-foreground">숫자는 현재재고, 빨간색은 가용재고가 안전재고보다 적은 옵션입니다. 누르면 SKU 상세로 이동합니다.</p></div>', "", true)
  }
  if (m.kind === "newStaff")
    return formModal("직원 추가", "fStaff",
      fInput("name", "이름", "", "text", 'required placeholder="예: 하은결"') + fSelect("team", "소속 팀", ["영업팀", "디자인팀", "물류팀", "발주팀", "경리팀"], "영업팀"), "추가")
  return ""
}

/* ---------------------------------------------------------------
 * 이벤트
 * ------------------------------------------------------------- */
function rerender() {
  D.update()
}
function openModal(m) {
  S.modal = m
  rerender()
}
function closeModal() {
  S.modal = null
  rerender()
}
var on = D.on
// 배경을 누르면 닫기 (폼 제출을 막지 않도록 data-act 대신 별도 처리)
document.addEventListener("click", function (e) { if (e.target.hasAttribute && e.target.hasAttribute("data-backdrop")) closeModal() })
on("modalClose", closeModal)
on("navGroup", function (ds) { S.navClosed[ds.i] = !S.navClosed[ds.i]; rerender() })
on("mnav", function () { S.mobileNav = !S.mobileNav; rerender() })
on("go", function (ds) { S.modal = null; D.go(ds.v) })
on("role", function (ds, el) {
  S.role = ds.v
  var d = el.closest("details")
  if (d) d.open = false
  rerender()
  D.toast("‘" + ds.v + "’ 권한으로 화면을 미리 봅니다 (체험판에서는 메뉴가 모두 열려 있습니다)")
})
on("range", function (ds) { S.range = ds.v; rerender() })
on("dashTab", function (ds) { S.dashTab = ds.v; rerender() })
on("groupView", function (ds) { S.groupView = ds.v; rerender() })

/* 주문 */
on("openOrder", function (ds) { openModal({ kind: "order", no: ds.no }) })
on("chFilter", function (ds) { S.ord.channel = ds.v; rerender() })
on("exportOrders", function () { exportCsv(); D.toast("현재 조건의 주문 목록을 CSV 로 내려받았습니다") })
on("newOrder", function (ds) { openModal({ kind: "newOrder", type: ds.type || "단체납품" }) })
on("newOrderType", function (v) { S.modal.type = v; rerender() })
on("advance", function (ds) {
  var o = order(ds.no)
  var ni = stageIdx(o) + Number(ds.d)
  setStage(o, ni)
  rerender()
  D.toast(o.no + " → " + o.stage)
})
on("goResv", function (ds) { S.resvSku = ds.v; S.modal = null; D.go("/inventory/reserved") })
D.on("ordF", function (v, el) { S.ord[el.dataset.k] = v; rerender() })
D.on("ordQ", function (v) { S.ord.q = v; rerender() })
D.on("search", function (vals) {
  var q = (vals.q || "").trim()
  S.ord = { q: q, type: "전체", channel: "전체", stage: "전체", pay: "전체" }
  if (/^QT-/i.test(q)) D.go("/quotes")
  else D.go("/orders")
  rerender()
})
D.on("fNewOrder", function (v) {
  var s = sku(v.sku)
  var p = prod(s.code)
  var qty = Math.max(1, parseInt(v.qty, 10) || 1)
  var price = v.price ? Math.max(0, parseInt(v.price, 10) || 0) : p.price
  var cname = v.client
  if (cname === "__new") {
    cname = (v.newClient || "").trim()
    if (!cname) return D.toast("새 거래처명을 입력해 주세요")
    if (cname.indexOf("(가상)") !== 0) cname = "(가상) " + cname
    if (!client(cname)) CLIENTS.push({ name: cname, kind: "기업", contact: "-", phone: "-", rep: v.manager })
  }
  if (v.type === "온라인") {
    var ch = CHANNELS.온라인.indexOf(v.channel) >= 0 ? v.channel : "자사몰"
    var oo = addOnline(ch, s.id, qty, "배송준비")
    addSales(CH_INFO.filter(function (c) { return c.key === ch })[0].short, oo.amount)
    log("주문 등록", ch + " " + oo.no, p.name + " " + skuLabel(s) + " × " + qty)
    S.modal = null
    rerender()
    return D.toast("온라인 주문 " + oo.no + " 을 등록했습니다")
  }
  var o = newOrderFrom({ type: v.type, channel: v.channel, client: cname, manager: v.manager, item: p.name, sku: s.id, qty: qty, amount: qty * price, due: v.due || day(14), spec: v.spec })
  log("주문 등록", cname + " (" + o.no + ")", v.type + " · " + won(o.amount))
  S.modal = null
  rerender()
  D.toast(o.no + " 주문을 등록했습니다 (" + o.stage + ")")
})

/* 온라인 */
on("sync", function () {
  var n = syncChannels()
  rerender()
  D.toast("3개 채널에서 신규 주문 " + n + "건을 가져왔습니다")
})
on("shipOnline", function (ds) {
  var o = ONLINE[+ds.i]
  o.ship = "출고완료"
  o.track = "5500-" + ri(1000, 9999) + "-" + ri(1000, 9999)
  log("출고 처리", o.channel + " " + o.no, "송장 " + o.track)
  rerender()
  D.toast(o.no + " 출고 처리 · 송장 " + o.track)
})
on("applyOnline", function (ds) {
  var o = ONLINE[+ds.i]
  var s = sku(o.sku)
  s.stock = Math.max(0, s.stock - o.qty)
  o.applied = true
  log("재고 반영", o.channel + " " + o.no, skuLabel(s) + " -" + o.qty)
  rerender()
  D.toast("재고에 반영했습니다")
})
on("batchShip", function (ds) {
  var n = 0
  ONLINE.forEach(function (o) {
    if (o.channel === ds.v && o.date === TODAY && o.ship === "배송준비") {
      o.ship = "출고완료"
      o.track = "5500-" + ri(1000, 9999) + "-" + ri(1000, 9999)
      n++
    }
  })
  log("일괄 출고", ds.v + " 오늘 주문", n + "건 송장 발행")
  rerender()
  D.toast(ds.v + " " + n + "건을 일괄 출고했습니다")
})

/* 커스텀 제작 */
on("customStep", function (ds) { S.custom.step = ds.v; rerender() })
on("customSort", function (ds) {
  var c = S.custom
  if (c.sort !== ds.v) { c.sort = ds.v; c.dir = 1 }
  else if (c.dir === 1) c.dir = -1
  else { c.sort = "no"; c.dir = -1 }
  rerender()
})
on("customClient", function (ds) { S.custom.field = "소속"; S.custom.q = shortName(ds.v); rerender() })
D.on("customField", function (v) { S.custom.field = v; rerender() })
D.on("customQ", function (v) { S.custom.q = v; rerender() })

/* 재고 */
on("invCat", function (ds) { S.inv.cat = ds.v; S.inv.limit = 50; rerender() })
on("invMore", function () { S.inv.limit += 50; rerender() })
D.on("invQ", function (v) { S.inv.q = v; S.inv.limit = 50; rerender() })
D.on("invStatus", function (v) { S.inv.status = v; rerender() })
D.on("invSort", function (v) { S.inv.sort = v; rerender() })
on("openSku", function (ds) { openModal({ kind: "sku", id: ds.id }) })
on("ioNew", function (ds) { openModal({ kind: "io", ioKind: ds.kind, sku: ds.sku }) })
D.on("fIO", function (v) {
  var s = sku(v.sku)
  var qty = Math.max(1, parseInt(v.qty, 10) || 0)
  if (v.kind === "출고" && qty > s.stock) return D.toast("현재재고(" + num(s.stock) + ")보다 많이 출고할 수 없습니다")
  s.stock += v.kind === "입고" ? qty : -qty
  IO.unshift({ id: ++ioSeq, t: nowStamp(), kind: v.kind, sku: s.id, qty: qty, after: s.stock, who: ME.name, memo: v.memo })
  log(v.kind + " 등록", prod(s.code).name + " (" + s.code + ")", skuLabel(s) + " · " + (v.kind === "입고" ? "+" : "-") + qty)
  S.modal = null
  if (D.route().path !== "/inventory/io") D.go("/inventory/io")
  rerender()
  D.toast(v.kind + " " + num(qty) + "개 반영 · 현재재고 " + num(s.stock))
})
D.on("resvSku", function (v) { S.resvSku = v; rerender() })
D.on("reserve", function (v) {
  var s = sku(S.resvSku)
  var qty = parseInt(v.qty, 10) || 0
  S.resvQty = v.qty
  if (!v.order) return D.toast("예약할 주문을 선택해 주세요")
  if (qty <= 0) return D.toast("예약 수량을 입력해 주세요")
  if (qty > avail(s)) {
    rerender()
    return D.toast("가용재고(" + num(avail(s)) + ")를 넘어 예약할 수 없습니다")
  }
  RESV.push({ id: ++resvSeq, order: v.order, sku: s.id, qty: qty })
  S.resvQty = ""
  log("재고 예약", order(v.order).client + " (" + v.order + ")", skuLabel(s) + " · " + qty + "개 홀딩")
  rerender()
  D.toast(qty + "개를 " + v.order + " 에 예약했습니다")
})
on("unreserve", function (ds) {
  var r = RESV.filter(function (x) { return x.id === +ds.id })[0]
  RESV = RESV.filter(function (x) { return x.id !== +ds.id })
  log("예약 취소", r.order, skuLabel(sku(r.sku)) + " · " + r.qty + "개 해제")
  rerender()
  D.toast("예약을 취소했습니다")
})

/* 발주 */
var PO_QTY = {}
D.on("poQty", function (v, el) { PO_QTY[el.dataset.id] = Math.max(0, parseInt(v, 10) || 0) })
on("makePO", function () {
  var n = 0, total = 0
  purchaseRows().forEach(function (x) {
    if (poStatus(x) !== "발주필요") return
    var q = PO_QTY[x.s.id] != null ? PO_QTY[x.s.id] : x.r.need
    if (q <= 0) return
    PO[x.s.id] = { qty: q, status: "발주완료", eta: day(12) }
    x.s.incoming += q
    n++
    total += q
  })
  if (!n) return D.toast("발주가 필요한 품목이 없습니다")
  log("발주서 생성", n + "개 옵션", "총 " + num(total) + "개 · 예상입고 " + md(day(12)))
  rerender()
  D.toast("발주서 " + n + "건(총 " + num(total) + "개)을 생성했습니다")
})
on("poNext", function (ds) {
  var po = PO[ds.id], s = sku(ds.id)
  if (po.status === "발주완료") { po.status = "입고예정"; po.eta = day(4) }
  else if (po.status === "입고예정") {
    po.status = "입고완료"
    s.stock += po.qty
    s.incoming = Math.max(0, s.incoming - po.qty)
    IO.unshift({ id: ++ioSeq, t: nowStamp(), kind: "입고", sku: s.id, qty: po.qty, after: s.stock, who: ME.name, memo: "발주 입고" })
  } else return
  log("발주 " + po.status, prod(s.code).name + " " + skuLabel(s), num(po.qty) + "개")
  rerender()
  D.toast(prod(s.code).name + " " + skuLabel(s) + " → " + po.status)
})

/* 상품 */
on("prdCat", function (ds) { S.prd.cat = ds.v; rerender() })
on("prdMore", function () { S.prd.limit += 12; rerender() })
D.on("prdQ", function (v) { S.prd.q = v; rerender() })
D.on("prdSort", function (v) { S.prd.sort = v; rerender() })
on("newProduct", function () { openModal({ kind: "newProduct" }) })
on("prdEdit", function (ds) { openModal({ kind: "prdEdit", code: ds.code }) })
on("prdStock", function (ds) { openModal({ kind: "prdStock", code: ds.code }) })
D.on("fProduct", function (v) {
  var code = (v.code || "").trim().toUpperCase()
  if (!v.name.trim() || !code) return D.toast("상품명과 코드를 입력해 주세요")
  if (prod(code)) return D.toast("이미 있는 상품코드입니다")
  var split = function (t) { return String(t).split(",").map(function (x) { return x.trim().toUpperCase() }).filter(Boolean) }
  var p = { code: code, name: v.name.trim(), cat: v.cat, shape: v.shape, colors: split(v.colors), sizes: split(v.sizes), price: +v.price || 0, cost: +v.cost || 0 }
  if (!p.colors.length) p.colors = ["BLACK"]
  if (!p.sizes.length) p.sizes = ["FREE"]
  PRODUCTS.push(p)
  p.colors.forEach(function (c) { p.sizes.forEach(function (z) { SKUS.push({ id: code + "-" + c + "-" + z, code: code, color: c, size: z, stock: 0, incoming: 0, sold30: 0, safety: 20 }) }) })
  log("상품 등록", p.name + " (" + code + ")", "컬러 " + p.colors.length + " · 사이즈 " + p.sizes.length + " · " + p.colors.length * p.sizes.length + " SKU")
  S.modal = null
  rerender()
  D.toast(p.name + " 상품과 SKU " + p.colors.length * p.sizes.length + "개를 만들었습니다")
})
D.on("fPrdEdit", function (v) {
  var p = prod(v.code)
  p.name = v.name.trim() || p.name
  p.price = +v.price || 0
  p.cost = +v.cost || 0
  log("상품 수정", p.name + " (" + p.code + ")", "판매가 " + num(p.price) + "원 · 컬러 " + p.colors.length + " · 사이즈 " + p.sizes.length)
  S.modal = null
  rerender()
  D.toast("상품 정보를 저장했습니다")
})

/* 견적 · 작업지시 · 디자인 */
on("newQuote", function () { openModal({ kind: "newQuote" }) })
on("openQuote", function (ds) { openModal({ kind: "quote", no: ds.no }) })
D.on("fQuote", function (v) {
  var qty = Math.max(1, parseInt(v.qty, 10) || 1)
  var q = addQuote({ client: v.client, manager: v.manager, date: TODAY, total: qty * (parseInt(v.price, 10) || 0), status: "작성중", type: v.type, item: v.item || "단체 주문", qty: qty, sku: v.sku })
  log("견적서 작성", q.client + " (" + q.no + ")", won(q.total))
  S.modal = { kind: "quote", no: q.no }
  rerender()
  D.toast(q.no + " 견적서를 작성했습니다")
})
on("quoteSend", function (ds) {
  var q = QUOTES.filter(function (x) { return x.no === ds.no })[0]
  q.status = "전송완료"
  log("견적서 전송", q.client + " (" + q.no + ")", won(q.total))
  rerender()
  D.toast("견적서를 거래처에 전송했습니다")
})
on("quoteConfirm", function (ds) {
  var q = QUOTES.filter(function (x) { return x.no === ds.no })[0]
  var o = newOrderFrom({ type: q.type, channel: q.type === "커스텀제작" ? "카카오톡" : "전화", client: q.client, manager: q.manager, item: q.item, sku: q.sku, qty: q.qty, amount: q.total, due: day(21), stageIdx: q.type === "단체납품" ? 2 : 0, spec: "견적 " + q.no + " 기준" })
  q.status = "사업확정"
  q.order = o.no
  log("사업 확정", q.client + " (" + q.no + ")", "주문 " + o.no + " 자동 생성")
  S.modal = { kind: "order", no: o.no }
  rerender()
  D.toast("사업 확정 · 주문 " + o.no + " 로 전환했습니다")
})
on("openWO", function (ds) { openModal({ kind: "wo", no: ds.no }) })
on("woNext", function (ds) {
  var w = WOS.filter(function (x) { return x.no === ds.no })[0]
  var nx = WO_FLOW[WO_FLOW.indexOf(woStatus(w)) + 1]
  var o = order(w.order)
  setStage(o, WO_STEP[nx], true)
  log("작업지시 " + nx, o.client + " (" + w.no + ")", o.stage)
  rerender()
  D.toast(w.no + " → " + nx)
})
function designStep(no, status, act, detail) {
  var o = order(no)
  var j = ensureDesign(o)
  j.status = status
  if (stageIdx(o) < 1) setStage(o, 1, true)
  log(act, o.client + " " + j.title, detail)
  rerender()
}
on("designUp", function (ds) { designStep(ds.no, "고객컨펌", "시안 업로드", "시안 1종 · 고객 컨펌 요청"); D.toast("시안을 올리고 고객 컨펌을 요청했습니다") })
on("designOk", function (ds) { designStep(ds.no, "컨펌완료", "고객 컨펌", "시안 확정"); D.toast("고객 컨펌 완료로 표시했습니다") })
on("designWO", function (ds) {
  var o = order(ds.no)
  setStage(o, 2)
  rerender()
  D.toast("작업지시서 " + woOf(o.no).no + " 를 만들었습니다")
})

/* 거래처 · 정산 */
on("openClient", function (ds) { openModal({ kind: "client", name: ds.v }) })
on("matchPay", function (ds) { openModal({ kind: "match", id: +ds.id }) })
D.on("fMatch", function (v) {
  var p = PAYMENTS.filter(function (x) { return x.id === +v.id })[0]
  var o = order(v.order)
  if (!o) return D.toast("연결할 주문을 선택해 주세요")
  p.order = o.no
  p.status = "확인완료"
  p.score = Math.max(p.score, 100)
  o.paid += p.amount
  o.updatedAt = Date.now()
  if (o.paid >= o.amount) {
    var target = o.type === "단체납품" ? 6 : 7
    if (shipped(o) && stageIdx(o) < target) setStage(o, target, true)
  }
  addVoucher(o.no, p.amount, "발행대기")
  log("입금 매칭 확인", o.client + " (" + o.no + ")", p.payer + " " + won(p.amount))
  S.modal = null
  rerender()
  D.toast("입금을 " + o.no + " 에 연결하고 증빙 발행 대상에 올렸습니다")
})
on("issue", function (ds) {
  var v = VOUCHERS[+ds.i]
  v.status = "발행완료"
  v.date = TODAY
  log("증빙 발행", v.client + " (" + v.no + ")", "세금계산서 " + won(v.total))
  rerender()
  D.toast(v.no + " 세금계산서를 발행했습니다")
})
on("issueAll", function () {
  var n = 0
  VOUCHERS.forEach(function (v) { if (v.status !== "발행완료") { v.status = "발행완료"; v.date = TODAY; n++ } })
  if (!n) return D.toast("발행 대기 중인 증빙이 없습니다")
  log("증빙 일괄 발행", "세금계산서 " + n + "건", "발행 대기 전체")
  rerender()
  D.toast("세금계산서 " + n + "건을 일괄 발행했습니다")
})

/* 통계 */
D.on("anaF", function (v, el) {
  S[el.dataset.k] = v
  if (el.dataset.k === "anaProd") { S.anaColor = "전체"; S.anaSize = "전체" }
  rerender()
})

/* 시스템 */
on("pickStaff", function (ds) { S.staff = ds.v; rerender() })
on("perm", function (ds) { PERMS[S.staff][ds.p] = ds.v; S.permDirty = true; rerender() })
on("permAll", function (ds) { NAV[+ds.g].items.forEach(function (it) { PERMS[S.staff][it[0]] = ds.v }); S.permDirty = true; rerender() })
on("savePerm", function () {
  var st = STAFF.filter(function (x) { return x.id === S.staff })[0]
  var p = PERMS[st.id], c = { 수정: 0, 뷰어: 0, 없음: 0 }
  Object.keys(p).forEach(function (k) { c[p[k]]++ })
  log("권한 변경", st.name + " (" + st.team + ")", "수정 " + c.수정 + " · 뷰어 " + c.뷰어 + " · 없음 " + c.없음)
  S.permDirty = false
  rerender()
  D.toast(st.name + " 님의 권한을 저장했습니다 · 감사 로그에 기록됨")
})
on("newStaff", function () { openModal({ kind: "newStaff" }) })
D.on("fStaff", function (v) {
  var name = (v.name || "").trim()
  if (!name) return D.toast("이름을 입력해 주세요")
  var id = "s" + (STAFF.length + 1)
  var dept = { 영업팀: "영업", 디자인팀: "디자인", 물류팀: "물류", 발주팀: "발주", 경리팀: "경리" }[v.team]
  STAFF.push({ id: id, name: name, dept: dept, team: v.team })
  PERMS[id] = {}
  NAV.forEach(function (g) { g.items.forEach(function (it) { PERMS[id][it[0]] = "없음" }) })
  S.staff = id
  log("직원 추가", name + " (" + v.team + ")", "권한 미지정")
  S.modal = null
  rerender()
  D.toast(name + " 님을 추가했습니다. 오른쪽에서 권한을 지정하세요")
})
on("refreshLogs", function () { rerender(); D.toast("최신 활동 기록 " + LOGS.length + "건을 불러왔습니다") })

/* 칸반 끌어다 놓기 */
var dragNo = null
document.addEventListener("dragstart", function (e) {
  var c = e.target.closest && e.target.closest("[data-drag]")
  if (!c) return
  dragNo = c.getAttribute("data-drag")
  e.dataTransfer.effectAllowed = "move"
  try { e.dataTransfer.setData("text/plain", dragNo) } catch (x) {}
})
document.addEventListener("dragover", function (e) {
  var z = e.target.closest && e.target.closest("[data-drop]")
  if (!z || !dragNo) return
  e.preventDefault()
  var all = document.querySelectorAll("[data-drop]")
  for (var i = 0; i < all.length; i++) all[i].style.borderColor = all[i] === z ? "var(--color-primary)" : ""
})
document.addEventListener("drop", function (e) {
  var z = e.target.closest && e.target.closest("[data-drop]")
  if (!z || !dragNo) return
  e.preventDefault()
  var o = order(dragNo)
  dragNo = null
  var ni = +z.getAttribute("data-drop")
  if (o && ni !== stageIdx(o)) {
    setStage(o, ni)
    D.toast(o.client + " → " + o.stage)
  }
  rerender()
})
document.addEventListener("dragend", function () {
  dragNo = null
  var all = document.querySelectorAll("[data-drop]")
  for (var i = 0; i < all.length; i++) all[i].style.borderColor = ""
})

/* ---------------------------------------------------------------
 * 경로 → 화면
 * ------------------------------------------------------------- */
var ROUTES = {
  "/": pageDashboard, "/executive": pageExecutive,
  "/orders": pageOrders, "/orders/online": pageOnline, "/orders/group": pageGroup, "/orders/custom": pageCustom,
  "/inventory": pageInventory, "/inventory/io": pageIO, "/inventory/reserved": pageReserved, "/purchase": pagePurchase, "/products": pageProducts,
  "/quotes": pageQuotes, "/work-orders": pageWorkOrders, "/design": pageDesign, "/clients": pageClients,
  "/payments": pagePayments, "/settlement": pageSettlement, "/vouchers": pageVouchers,
  "/analytics/sales": pageAnaSales, "/analytics/products": pageAnaProducts, "/analytics/inventory": pageAnaInventory, "/analytics/purchase": pageAnaPurchase,
  "/system/staff": pageStaff, "/system/logs": pageLogs,
}
var UNAVAILABLE = { "/system/channels": "채널 연동", "/system/print": "나염 전용", "/system/integrations": "연동 관리", "/system/settings": "환경설정" }
var lastPath = null
function render(route) {
  CHARTS = {}
  chartSeq = 0
  var path = route.path
  if (path !== lastPath) {
    S.mobileNav = false
    if (lastPath !== null) S.modal = null
    lastPath = path
  }
  var body
  if (ROUTES[path]) body = ROUTES[path](route.query)
  else if (UNAVAILABLE[path]) body = pageUnavailable(UNAVAILABLE[path])
  else {
    path = "/"
    body = pageDashboard()
  }
  var title = "대시보드"
  NAV.forEach(function (g) { g.items.forEach(function (it) { if (it[0] === path) title = it[1] }) })
  document.title = title + " · ONE ERP 체험판"
  return (
    '<div class="flex min-h-screen bg-background">' + aside(path) +
    '<div class="flex min-w-0 flex-1 flex-col md:pl-60">' + header() + '<main class="flex-1 p-5 xl:p-6"><div>' + body + "</div></main></div></div>" + modalHtml()
  )
}

// 다시 그린 뒤: 차트를 실제 너비로 그리고, 입력 중이던 칸의 커서를 되살린다
var baseUpdate = D.update
D.update = function () {
  var a = document.activeElement
  var keep = a && a.id && (a.tagName === "INPUT" || a.tagName === "TEXTAREA") ? { id: a.id, s: a.selectionStart, e: a.selectionEnd } : null
  baseUpdate()
  drawCharts()
  if (keep) {
    var el = document.getElementById(keep.id)
    if (el) {
      el.focus()
      try { el.setSelectionRange(keep.s, keep.e) } catch (x) {}
    }
  }
}
var resizeTimer = null
window.addEventListener("resize", function () {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(drawCharts, 120)
})
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && S.modal) closeModal()
})
// 채널 동기화 경과 시간 표시
setInterval(function () {
  S.syncAgo++
  CH_INFO.forEach(function (c) { c.synced++ })
}, 60000)

D.mount(render)
D.banner()
})()
