/* (가상) 한결퍼니처 조달관리 시스템 체험판
 * - 모든 데이터는 가상이며 브라우저 메모리에만 있다 (새로고침하면 처음 상태)
 * - 화면 구조와 클래스는 실제 관리자 화면을 그대로 따른다
 */
;(function () {
  var E = Demo.esc

  /* ───────── 아이콘 (lucide) ───────── */
  var IC = {"boxes": "<path d=\"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z\"></path><path d=\"m7 16.5-4.74-2.85\"></path><path d=\"m7 16.5 5-3\"></path><path d=\"M7 16.5v5.17\"></path><path d=\"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z\"></path><path d=\"m17 16.5-5-3\"></path><path d=\"m17 16.5 4.74-2.85\"></path><path d=\"M17 16.5v5.17\"></path><path d=\"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z\"></path><path d=\"M12 8 7.26 5.15\"></path><path d=\"m12 8 4.74-2.85\"></path><path d=\"M12 13.5V8\"></path>","layout-dashboard": "<rect width=\"7\" height=\"9\" x=\"3\" y=\"3\" rx=\"1\"></rect><rect width=\"7\" height=\"5\" x=\"14\" y=\"3\" rx=\"1\"></rect><rect width=\"7\" height=\"9\" x=\"14\" y=\"12\" rx=\"1\"></rect><rect width=\"7\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"></rect>","clipboard-list": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"></rect><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><path d=\"M12 11h4\"></path><path d=\"M12 16h4\"></path><path d=\"M8 11h.01\"></path><path d=\"M8 16h.01\"></path>","store": "<path d=\"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5\"></path><path d=\"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244\"></path><path d=\"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05\"></path>","arrow-left-right": "<path d=\"M8 3 4 7l4 4\"></path><path d=\"M4 7h16\"></path><path d=\"m16 21 4-4-4-4\"></path><path d=\"M20 17H4\"></path>","receipt": "<path d=\"M12 17V7\"></path><path d=\"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8\"></path><path d=\"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z\"></path>","settings": "<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","log-out": "<path d=\"m16 17 5-5-5-5\"></path><path d=\"M21 12H9\"></path><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path>","menu": "<path d=\"M4 5h16\"></path><path d=\"M4 12h16\"></path><path d=\"M4 19h16\"></path>","search": "<path d=\"m21 21-4.34-4.34\"></path><circle cx=\"11\" cy=\"11\" r=\"8\"></circle>","file-text": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"></path><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"></path><path d=\"M10 9H8\"></path><path d=\"M16 13H8\"></path><path d=\"M16 17H8\"></path>","inbox": "<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"></polyline><path d=\"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path>","circle-alert": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"></line><line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\"></line>","loader-circle": "<path d=\"M21 12a9 9 0 1 1-6.219-8.56\"></path>","circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"m9 12 2 2 4-4\"></path>","alarm-clock": "<circle cx=\"12\" cy=\"13\" r=\"8\"></circle><path d=\"M12 9v4l2 2\"></path><path d=\"M5 3 2 6\"></path><path d=\"m22 6-3-3\"></path><path d=\"M6.38 18.7 4 21\"></path><path d=\"M17.64 18.67 20 21\"></path>","building2": "<path d=\"M10 12h4\"></path><path d=\"M10 8h4\"></path><path d=\"M14 21v-3a2 2 0 0 0-4 0v3\"></path><path d=\"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2\"></path><path d=\"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16\"></path>","package": "<path d=\"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z\"></path><path d=\"M12 22V12\"></path><polyline points=\"3.29 7 12 12 20.71 7\"></polyline><path d=\"m7.5 4.27 9 5.15\"></path>","chevron-right": "<path d=\"m9 18 6-6-6-6\"></path>","calendar-clock": "<path d=\"M16 14v2.2l1.6 1\"></path><path d=\"M16 2v4\"></path><path d=\"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5\"></path><path d=\"M3 10h5\"></path><path d=\"M8 2v4\"></path><circle cx=\"16\" cy=\"16\" r=\"6\"></circle>","file-spreadsheet": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"></path><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"></path><path d=\"M8 13h2\"></path><path d=\"M14 13h2\"></path><path d=\"M8 17h2\"></path><path d=\"M14 17h2\"></path>","refresh-cw": "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\"></path><path d=\"M21 3v5h-5\"></path><path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\"></path><path d=\"M8 16H3v5\"></path>","send": "<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\"></path><path d=\"m21.854 2.147-10.94 10.939\"></path>","pencil": "<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"></path><path d=\"m15 5 4 4\"></path>","clipboard-check": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"></rect><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><path d=\"m9 14 2 2 4-4\"></path>","funnel": "<path d=\"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z\"></path>","chevron-down": "<path d=\"m6 9 6 6 6-6\"></path>▼","chevron-left": "<path d=\"m15 18-6-6 6-6\"></path>","printer": "<path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path><path d=\"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6\"></path><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\" rx=\"1\"></rect>","plus": "<path d=\"M5 12h14\"></path><path d=\"M12 5v14\"></path>","trash2": "<path d=\"M10 11v6\"></path><path d=\"M14 11v6\"></path><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\"></path><path d=\"M3 6h18\"></path><path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>","upload": "<path d=\"M12 3v12\"></path><path d=\"m17 8-5-5-5 5\"></path><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path>"}
  IC.x = '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>'
  function ic(name, cls, extra) {
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-' +
      name + (cls ? " " + cls : "") + '" aria-hidden="true"' + (extra || "") + ">" + (IC[name] || "") + "</svg>"
    )
  }

  /* ───────── 원본 화면 클래스 ───────── */
  var FOC = "whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0"
  var OUTLINE = "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50"
  var GHOST = "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50"
  var PRIMARY = "bg-primary text-primary-foreground hover:bg-primary/80"
  var XS_TAIL = "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5"
  var XS_MID = "gap-1 rounded-[min(var(--radius-md),12px)] text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5"
  var B0 = "group/button inline-flex shrink-0 items-center justify-center "
  var BTN_OUTLINE_XS = B0 + "border bg-clip-padding font-medium " + FOC + " " + OUTLINE + " " + XS_TAIL
  var BTN_GHOST_XS = B0 + "border border-transparent bg-clip-padding font-medium " + FOC + " " + GHOST + " " + XS_TAIL
  var BTN_PRIMARY_XS = B0 + "border border-transparent bg-clip-padding font-medium " + FOC + " " + PRIMARY + " " + XS_TAIL
  var BTN_DESTR_XS = B0 + "border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40 " + XS_TAIL
  var BTN_SIZE_ON = B0 + "border border-transparent bg-clip-padding font-medium " + FOC + " " + PRIMARY + " " + XS_MID + " h-7 px-2.5"
  var BTN_SIZE_OFF = B0 + "border bg-clip-padding font-medium " + FOC + " " + OUTLINE + " " + XS_MID + " h-7 px-2.5"
  var BTN_PAGER = B0 + "border bg-clip-padding font-medium " + FOC + " " + OUTLINE + " " + XS_MID + " h-7 px-2"
  var BTN_EDIT = B0 + "border bg-clip-padding font-medium " + FOC + " " + OUTLINE + " rounded-[min(var(--radius-md),12px)] text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5 h-7 gap-1 px-2"
  var SM4 = "[&_svg:not([class*='size-'])]:size-4"
  var BTN_OUTLINE_SM = B0 + "rounded-lg border bg-clip-padding text-sm font-medium " + FOC + " " + SM4 + " " + OUTLINE + " h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
  var BTN_PRIMARY_SM = B0 + "rounded-lg border border-transparent bg-clip-padding text-sm font-medium " + FOC + " " + SM4 + " " + PRIMARY + " h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
  var BTN_ICON7 = B0 + "border border-transparent bg-clip-padding text-sm font-medium " + FOC + " " + SM4 + " " + GHOST + " size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg"
  var BTN_DEL7 = B0 + "border bg-clip-padding text-sm font-medium " + FOC + " " + SM4 + " border-border bg-background hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg h-7 text-destructive hover:bg-destructive/10"
  var BTN_MENU = B0 + "rounded-lg border border-transparent bg-clip-padding text-sm font-medium " + FOC + " " + SM4 + " " + GHOST + " size-8 lg:hidden"
  var BTN_LOGOUT = B0 + "rounded-lg border border-transparent bg-clip-padding text-sm font-medium " + FOC + " " + SM4 + " aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 size-8 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-white"
  var BTN_USER = B0 + "rounded-lg border border-transparent bg-clip-padding text-sm font-medium " + FOC + " " + SM4 + " " + GHOST + " has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-10 gap-2 px-2"
  var PG_LINK = B0 + "rounded-lg border border-transparent bg-clip-padding text-sm font-medium " + FOC + " " + SM4 + " " + GHOST + " size-8 cursor-pointer"
  var PG_ACTIVE = B0 + "rounded-lg border bg-clip-padding text-sm font-medium " + FOC + " " + SM4 + " " + OUTLINE + " size-8 cursor-pointer"
  var PG_NAV = B0 + "rounded-lg border border-transparent bg-clip-padding text-sm font-medium " + FOC + " " + SM4 + " " + GHOST + " h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"

  var CARD_TAIL = "text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl"
  var CARD = "group/card flex flex-col overflow-hidden rounded-xl bg-card " + CARD_TAIL
  var CARD_PY = "group/card flex flex-col overflow-hidden rounded-xl bg-card py-(--card-spacing) " + CARD_TAIL
  var CARD_GAP = "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) " + CARD_TAIL
  var CH_MID = "rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]"
  var CARD_HEADER = "group/card-header @container/card-header grid auto-rows-min items-start gap-1 " + CH_MID + " border-b [.border-b]:pb-4"
  var CARD_HEADER_ROW = "group/card-header @container/card-header grid auto-rows-min gap-1 " + CH_MID + " flex-row items-center justify-between border-b [.border-b]:pb-4"
  var CARD_TITLE = "font-medium group-data-[size=sm]/card:text-sm"
  function card(cls, inner, extra) {
    return '<div data-slot="card" data-size="default" class="' + cls + '"' + (extra || "") + ">" + inner + "</div>"
  }

  var TH = "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0"
  var THN = "h-10 px-2 align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0"
  var TD = "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0"
  var TR_HEAD = "border-b transition-colors has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted hover:bg-transparent"
  var TR_DASH = "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted cursor-pointer"
  var TR_CLICK = "border-b transition-colors has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted cursor-pointer hover:bg-muted/40"
  var TR = "border-b transition-colors has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted hover:bg-muted/40"
  function th(label, cls) {
    return '<th data-slot="table-head" class="' + (cls || TH) + '">' + label + "</th>"
  }
  function td(inner, extra, attrs) {
    return '<td data-slot="table-cell" class="' + TD + (extra ? " " + extra : "") + '"' + (attrs || "") + ">" + inner + "</td>"
  }
  function table(head, body) {
    return (
      '<div class="overflow-x-auto"><div data-slot="table-container" class="relative w-full overflow-x-auto"><table data-slot="table" class="w-full caption-bottom text-sm">' +
      '<thead data-slot="table-header" class="[&_tr]:border-b"><tr data-slot="table-row" class="' + TR_HEAD + '">' + head + "</tr></thead>" +
      '<tbody data-slot="table-body" class="[&_tr:last-child]:border-0">' + body + "</tbody></table></div></div>"
    )
  }

  var BADGE_R = "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! [a]:hover:bg-muted [a]:hover:text-muted-foreground"
  var BADGE_M = "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border px-2 py-0.5 text-xs whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! [a]:hover:bg-muted [a]:hover:text-muted-foreground rounded-md font-medium"
  var BADGE_S = "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80"
  function badge(base, color, label, variant) {
    return '<span data-slot="badge" data-variant="' + (variant || "outline") + '" class="' + base + (color ? " " + color : "") + '">' + E(label) + "</span>"
  }
  var C_SUCCESS = "border-success/20 bg-success/10 text-success"
  var C_INFO = "border-info/20 bg-info/10 text-info"
  var C_PRIMARY = "border-primary/20 bg-primary/10 text-primary"
  var C_MUTED = "border-border bg-muted text-muted-foreground"
  var C_DESTR = "border-destructive/30 bg-destructive/10 text-destructive"

  var INPUT = "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"
  var IG_POST = " min-w-0 items-center rounded-lg border border-input transition-colors outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5"
  var IG_ADDON = "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]"
  var IG_INPUT = "h-8 w-full min-w-0 border-input px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent"
  function inputGroup(groupCls, iconCls, attrs) {
    return (
      '<div data-slot="input-group" role="group" class="group/input-group relative flex h-8' + groupCls + '">' +
      '<div role="group" data-slot="input-group-addon" data-align="inline-start" class="' + IG_ADDON + '">' + ic("search", iconCls) + "</div>" +
      '<input data-slot="input-group-control" class="' + IG_INPUT + '" ' + attrs + "></div>"
    )
  }
  var LABEL = "flex items-center gap-2 font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-xs text-muted-foreground"
  function label(text, forId) {
    return '<label data-slot="label" class="' + LABEL + '"' + (forId ? ' for="' + forId + '"' : "") + ">" + text + "</label>"
  }
  var ST_MID = "items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
  // 원본의 셀렉트 버튼 모양을 그대로 두고, 위에 투명한 기본 select 를 겹친다
  function select(opts, value, attrs, trigCls) {
    var cur = opts[0]
    var html = opts
      .map(function (o) {
        if (String(o[0]) === String(value)) cur = o
        return '<option value="' + E(o[0]) + '"' + (String(o[0]) === String(value) ? " selected" : "") + ">" + E(o[1]) + "</option>"
      })
      .join("")
    return (
      '<div class="relative">' +
      '<div data-slot="select-trigger" data-size="default" class="' + (trigCls || "flex " + ST_MID + " w-full") + '">' +
      '<span data-slot="select-value" class="flex flex-1 text-left">' + E(cur[1]) + "</span>" +
      ic("chevron-down", "pointer-events-none size-4 text-muted-foreground") + "</div>" +
      '<select class="demo-native-select" ' + attrs + ">" + html + "</select></div>"
    )
  }
  var ST_FIT = "flex w-fit " + ST_MID

  /* ───────── 날짜 도우미 ───────── */
  function today() {
    return Demo.day(0)
  }
  function addDays(ymd, n) {
    var p = ymd.split("-")
    var d = new Date(+p[0], +p[1] - 1, +p[2] + n)
    var z = function (x) {
      return String(x).padStart(2, "0")
    }
    return d.getFullYear() + "-" + z(d.getMonth() + 1) + "-" + z(d.getDate())
  }
  function diffDays(a, b) {
    var pa = a.split("-"), pb = b.split("-")
    return Math.round((new Date(+pa[0], +pa[1] - 1, +pa[2]) - new Date(+pb[0], +pb[1] - 1, +pb[2])) / 864e5)
  }
  function dot(ymd) {
    return ymd.replace(/-/g, ".")
  }
  function won(n) {
    return Demo.num(n) + "원"
  }

  /* ───────── 가상 데이터 ───────── */
  var seed = 20261014
  function rnd() {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    var t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 0x100000000
  }
  function ri(a, b) {
    return a + Math.floor(rnd() * (b - a + 1))
  }
  function pick(arr) {
    return arr[Math.floor(rnd() * arr.length)]
  }

  var BRAND = "한결퍼니처"
  var CATS = ["의자", "책상", "수납", "파티션", "테이블"]
  // [종류, 나라장터 품명(대표), 모델, 치수, MES 이름, 가격, 수수료%]
  var MAP_SEED = [
    ["의자", "작업용의자", "HG-C110", "632×604×1015~1095mm", "하늘 C110(검정)", 213500, 25],
    ["의자", "작업용의자", "HG-C120", "632×604×935~1015mm", "하늘 C120(검정)", 196500, 25],
    ["의자", "작업용의자", "HG-C210", "664×642×1085~1165mm", "구름 C210(회색)", 274500, 25],
    ["의자", "작업용의자", "HG-C220", "664×642×965~1045mm", "구름 C220(회색)", 257500, 25],
    ["의자", "작업용의자", "HG-C310", "706×684×1132~1213mm", "바람 C310(남색)", 341500, 22],
    ["의자", "작업용의자", "HG-C320", "706×684×995~1075mm", "바람 C320(남색)", 325500, 22],
    ["의자", "접이식의자", "HG-F10", "472×524×792mm", "나래 F10(검정)", 61300, 30],
    ["의자", "접이식의자", "HG-F20", "503×543×823mm", "나래 F20(흰색)", 73300, 30],
    ["의자", "라운지용의자", "HG-L55", "642×603×763mm, 소파형", "쉼 L55", 285500, 20],
    ["의자", "스툴의자", "HG-S35", "423×423×652mm", "톡 S35", 53700, 30],
    ["책상", "사무용책상", "HG-D1213", "1213×705×725mm", "단정 D1213", 234500, 20],
    ["책상", "사무용책상", "HG-D1405", "1405×705×725mm", "단정 D1405", 263500, 20],
    ["책상", "사무용책상", "HG-D1605", "1605×805×725mm", "단정 D1605", 295500, 20],
    ["책상", "학생용책상", "HG-E605", "605×455×645~765mm", "새싹 E605", 88300, 25],
    ["테이블", "회의용탁자", "HG-T1805", "1805×905×725mm", "모임 T1805", 413500, 18],
    ["테이블", "회의용탁자", "HG-T2405", "2405×1213×725mm", "모임 T2405", 536500, 18],
    ["테이블", "다용도탁자", "HG-T905", "905×905×725mm", "모임 T905", 165500, 20],
    ["수납", "서가", "HG-B905", "905×355×1805mm, 5단", "책숲 B905", 182500, 22],
    ["수납", "서가", "HG-B1213", "1213×355×1805mm, 5단", "책숲 B1213", 217500, 22],
    ["수납", "책장", "HG-K805", "805×405×1213mm", "책숲 K805", 127500, 22],
    ["수납", "캐비닛", "HG-V405", "405×605×1062mm, 3단", "보람 V405", 174500, 20],
    ["수납", "서랍", "HG-X305", "393×583×603mm, 3단", "보람 X305", 96500, 22],
    ["파티션", "패널시스템용칸막이", "HG-P1213", "1213×32×1213mm", "가림 P1213", 142500, 15],
    ["파티션", "패널시스템용칸막이", "HG-P1505", "1505×32×1213mm", "가림 P1505", 164500, 15],
    ["파티션", "패널시스템용칸막이", "HG-P1805", "1805×32×1505mm", "가림 P1805", 192500, 15],
    ["파티션", "사무실칸막이", "HG-P1005", "1005×32×1105mm", "가림 P1005", 115500, 15],
    ["파티션", "사무실칸막이", "HG-PE15", "마감재 부속, 42×12×1105mm", "가림 마감재 E15", 9700, 0],
  ]
  // 매핑이 아직 없는 품목 (주문에만 나온다)
  var UNMAPPED = [
    ["수납", "사물함", "HG-M605", "905×455×1805mm, 12칸", 266500],
    ["테이블", "강의용탁자", "HG-T1265", "1213×605×745mm, 2인용", 149500],
    ["수납", "신발장", "HG-H905", "905×355×1105mm", 122500],
    ["의자", "대기용의자", "HG-W305", "1805×563×803mm, 3인용", 237500],
  ]
  function g2bName(cat, model, dim) {
    return cat + ", " + BRAND + ", " + model + ", " + dim
  }
  var maps = MAP_SEED.map(function (m, i) {
    return {
      id: "m" + (i + 1), type: m[0], cat: m[1], name: g2bName(m[1], m[2], m[3]), spec: m[3],
      mesName: m[1] + " " + m[4], mesCode: m[2].replace("HG-", "HG") + "-01", price: m[5], rate: m[6],
    }
  })
  var mapSeq = maps.length

  var REGIONS = ["서울", "경기", "인천", "강원", "충북", "충남", "대전", "전북", "전남", "광주", "경북", "경남", "대구", "부산", "울산", "제주"]
  var DEALER_SEED = [
    ["한별오피스", "서울", "윤가람"], ["누리가구", "경기", "문소율"], ["새벽사무가구", "인천", ""], ["온담퍼니처", "강원", "백도윤"],
    ["다솜오피스", "충북", ""], ["가온인테리어", "충남", "정하린"], ["마루가구상사", "대전", "남궁 현"], ["해솔오피스", "전북", ""],
    ["별하가구", "전남", "류시온"], ["미소사무환경", "광주", ""], ["청솔오피스", "경북", "탁민결"], ["단아가구", "경남", ""],
    ["바다오피스", "부산", "엄주원"], ["초록사무가구", "대구", ""], ["은하퍼니처", "울산", "변서우"], ["슬기오피스", "제주", ""],
    ["하나로가구", "경기", "추예린"], ["늘봄인테리어", "서울", ""], ["큰나무가구", "경북", "길태이"], ["나래오피스", "경남", ""],
    ["빛고을가구", "광주", "봉하람"], ["소담사무가구", "충남", ""], ["푸름오피스", "강원", "편지후"], ["담쟁이가구", "전북", ""],
    ["아름퍼니처", "부산", "제갈윤"],
  ]
  var dealers = DEALER_SEED.map(function (d, i) {
    var hasPhone = i % 4 !== 3
    return {
      id: "d" + (i + 1), name: "(가상) " + d[0], region: d[1], manager: d[2],
      phone: hasPhone ? "010-" + ri(2000, 9899) + "-" + ri(1023, 9899) : "",
      memo: i % 5 === 0 ? "관급 납품 경험 많음" : i % 7 === 2 ? "설치 인력 2팀" : "", active: i !== 15,
    }
  })
  var dealerSeq = dealers.length

  var AGENCIES = [
    ["(가상) 한빛초등학교", 6], ["(가상) 누리시청 총무과", 5], ["(가상) 해오름소방서", 5], ["(가상) 별빛대학교 산학협력단", 4],
    ["(가상) 다온교육지원청", 4], ["(가상) 새솔중학교", 3], ["(가상) 가온고등학교", 3], ["(가상) 푸른숲도서관", 3],
    ["(가상) 미르군청 재무과", 3], ["(가상) 너울경찰서", 3], ["(가상) 바름구청 민원실", 2], ["(가상) 온누리보건소", 2],
    ["(가상) 하늬초등학교", 2], ["(가상) 단비우체국", 2], ["(가상) 시나브로문화재단", 2], ["(가상) 라온농촌지원센터", 2],
    ["(가상) 도담유치원", 1], ["(가상) 마루세무서", 1], ["(가상) 아라시청 정보통신과", 2], ["(가상) 그린나래고등학교", 2],
    ["(가상) 여울지방법원", 1], ["(가상) 솔빛체육센터", 1], ["(가상) 윤슬청소년수련관", 1], ["(가상) 해밀중학교", 2],
    ["(가상) 가람시 의회사무국", 1],
  ]
  var AG_POOL = []
  AGENCIES.forEach(function (a) {
    for (var k = 0; k < a[1]; k++) AG_POOL.push(a[0])
  })
  var TITLES = [
    "사무실 환경개선 가구 구입", "교무실 책상·의자 교체", "회의실 탁자 및 의자 구매", "도서실 서가 추가 구입",
    "상황실 작업용의자 구매", "민원실 대기공간 가구 구입", "신규 직원 사무가구 구입", "강의실 학생용 가구 교체",
    "휴게실 라운지 가구 구입", "행정실 칸막이 설치", "자료실 수납장 구입", "교육장 접이식의자 구매",
    "다목적실 탁자 구입", "2층 사무공간 재배치 가구 구매", "청사 이전 사무가구 일괄 구입",
  ]
  var BRANCHES = ["한빛지방조달청", "새솔지방조달청", "누리지방조달청", "가온지방조달청", "미르지방조달청"]
  var STAFF = ["문가온", "오세린", "권예준", "신다온", "임채윤", "백하율"]
  var CONTRACTS = ["제3자단가계약", "다수공급자계약", "총액계약"]
  var PROGRESS = [
    ["unassigned", "대리점 미배정", "bg-warning/15 text-warning-foreground border-warning/30"],
    ["waiting", "대리점 응답 대기", "bg-muted text-muted-foreground border-border"],
    ["writing", "대리점 작성 중", "bg-info/10 text-info border-info/30"],
    ["review", "관리자 확인 대기", "bg-primary/10 text-primary border-primary/30"],
    ["mes", "MES 업로드 완료", "bg-success/10 text-success border-success/20"],
  ]
  var PMAP = {}
  PROGRESS.forEach(function (p, i) {
    PMAP[p[0]] = { label: p[1], color: p[2], idx: i }
  })
  var SETTLE = { none: "미생성", created: "생성됨", sent: "발송됨", viewed: "열람" }

  var usedNo = {}
  function newNo() {
    var n
    do n = "R26TB7" + String(ri(0, 9999999)).padStart(7, "0") + "-00"
    while (usedNo[n])
    usedNo[n] = 1
    return n
  }
  function makeLines() {
    var lines = []
    var cnt = ri(1, 3)
    for (var k = 0; k < cnt; k++) {
      if (rnd() < 0.06) {
        var u = pick(UNMAPPED)
        lines.push({ name: g2bName(u[1], u[2], u[3]), cat: u[1], type: u[0], qty: ri(2, 20), price: u[4] })
      } else {
        var m = pick(maps)
        lines.push({ name: m.name, cat: m.cat, type: m.type, qty: m.price < 20000 ? ri(10, 60) : ri(2, 30), price: m.price })
      }
    }
    return lines
  }
  function makeOrder(offset, progress) {
    var date = Demo.day(-offset)
    var o = {
      id: "o" + ++orderSeq, no: newNo(), date: date, agency: pick(AG_POOL), title: pick(TITLES), lines: makeLines(),
      dealerId: null, branch: pick(BRANCHES), staff: pick(STAFF), period: pick([30, 30, 45, 60]),
      received: true, contract: rnd() < 0.7 ? CONTRACTS[0] : pick(CONTRACTS), closed: false, progress: progress || "unassigned",
      settle: "none", bonus: 0,
    }
    return o
  }
  var orderSeq = 0
  var orders = []
  for (var i = 0; i < 100; i++) {
    var off = Math.floor(i * 0.95) + (i > 0 ? 1 : 0)
    var r = rnd()
    var prog
    if (i < 44) prog = r < 0.82 ? "unassigned" : r < 0.92 ? "waiting" : "writing"
    else if (i < 72) prog = r < 0.2 ? "unassigned" : r < 0.4 ? "waiting" : r < 0.6 ? "writing" : r < 0.8 ? "review" : "mes"
    else prog = r < 0.08 ? "review" : "mes"
    var o = makeOrder(off, prog)
    if (prog !== "unassigned") o.dealerId = pick(dealers.filter(function (d) { return d.active })).id
    if (prog === "mes") {
      o.closed = i >= 72 ? rnd() < 0.88 : rnd() < 0.4
      var s = rnd()
      o.settle = s < 0.45 ? "viewed" : s < 0.8 ? "sent" : "created"
      if (rnd() < 0.15) o.bonus = 0.2
    } else if (prog === "review") o.settle = rnd() < 0.5 ? "created" : "none"
    if (i < 44 && rnd() < 0.08) o.received = false
    // 마감이 가까운 주문을 몇 건 만든다
    if (i >= 20 && i < 30 && !o.closed) o.period = off + ri(1, 6)
    orders.push(o)
  }

  var S = {
    orders: orders, dealers: dealers, maps: maps,
    settings: {
      syncInterval: "30", syncDays: "90", dueDays: "7", autoSync: "on",
      company: "(가상) 한결퍼니처 주식회사", sender: "조달영업팀 관리자", tel: "02-000-0000", email: "settle@example.com", rate: "20",
    },
    of: null, opage: 1, osize: 20, syncing: false,
    df: { q: "", region: "all" }, dpage: 1,
    mf: { q: "", type: "all" },
    sf: { q: "", status: "all" },
    modal: null, drawer: false,
  }
  function resetOF() {
    S.of = { q: "", no: "", title: "", progress: "all", contract: "all", agency: "all", closed: "all", recv: "all", item: "", from: "", to: "", due: false }
  }
  resetOF()

  /* ───────── 계산 ───────── */
  function mapByName(name) {
    for (var k = 0; k < S.maps.length; k++) if (S.maps[k].name === name) return S.maps[k]
    return null
  }
  function dealerById(id) {
    for (var k = 0; k < S.dealers.length; k++) if (S.dealers[k].id === id) return S.dealers[k]
    return null
  }
  function orderById(id) {
    for (var k = 0; k < S.orders.length; k++) if (S.orders[k].id === id) return S.orders[k]
    return null
  }
  function amount(o) {
    return o.lines.reduce(function (s, l) { return s + l.qty * l.price }, 0)
  }
  function settleAmount(o) {
    var sum = 0
    o.lines.forEach(function (l) {
      var m = mapByName(l.name)
      if (m) sum += Math.round((l.qty * m.price * m.rate) / 100)
    })
    return Math.round(sum * (1 + (o.bonus || 0)))
  }
  function deadline(o) {
    return addDays(o.date, o.period)
  }
  function dleft(o) {
    return diffDays(deadline(o), today())
  }
  function dueDays() {
    return Math.max(1, parseInt(S.settings.dueDays, 10) || 7)
  }
  function isDue(o) {
    var d = dleft(o)
    return !o.closed && d >= 0 && d <= dueDays()
  }
  function firstUnmapped(o) {
    for (var k = 0; k < o.lines.length; k++) if (!mapByName(o.lines[k].name)) return o.lines[k]
    return null
  }
  function dealerName(id) {
    var d = dealerById(id)
    return d ? d.name : ""
  }
  function progressBadge(o) {
    var p = PMAP[o.progress]
    return badge(BADGE_M, p.color, p.label)
  }
  function recvBadge(o) {
    return o.received ? badge(BADGE_R, C_SUCCESS, "접수") : badge(BADGE_R, C_DESTR, "미접수")
  }
  function closedBadge(o) {
    return o.closed ? badge(BADGE_R, C_MUTED, "종결") : badge(BADGE_R, C_INFO, "진행중")
  }
  function sortedOrders() {
    return S.orders.slice().sort(function (a, b) {
      return a.date < b.date ? 1 : a.date > b.date ? -1 : a.no < b.no ? 1 : -1
    })
  }

  /* ───────── 화면 틀 ───────── */
  var NAV = [
    ["/", "대시보드", "layout-dashboard"],
    ["/orders", "주문 관리", "clipboard-list"],
    ["/dealers", "대리점 관리", "store"],
    ["/item-mapping", "품목 매핑", "arrow-left-right"],
    ["/settlement", "정산", "receipt"],
    ["/settings", "환경설정", "settings"],
  ]
  function avatar(size, fbCls, text) {
    return (
      '<span data-slot="avatar" data-size="default" class="group/avatar relative flex shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten ' + size + '">' +
      '<span data-slot="avatar-fallback" class="flex size-full items-center justify-center rounded-full group-data-[size=sm]/avatar:text-xs ' + fbCls + '">' + text + "</span></span>"
    )
  }
  function sidebarInner(path) {
    var items = NAV.map(function (n) {
      var on = n[0] === path
      return (
        '<li><a class="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ' +
        (on ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground") +
        '" href="#' + n[0] + '">' + ic(n[2], "size-[18px] shrink-0") + n[1] + "</a></li>"
      )
    }).join("")
    return (
      '<div class="flex h-full flex-col bg-sidebar text-sidebar-foreground">' +
      '<div class="flex h-16 items-center gap-2.5 border-b border-sidebar-border px-5"><div class="flex size-9 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">' + ic("boxes", "size-5") + "</div>" +
      '<div class="flex flex-col leading-tight"><span class="text-sm font-bold text-white">' + BRAND + '</span><span class="text-xs text-sidebar-foreground/70">조달관리 시스템</span></div></div>' +
      '<nav class="flex-1 overflow-y-auto px-3 py-4"><p class="px-3 pb-2 text-[11px] font-medium tracking-wide text-sidebar-foreground/50">메뉴</p><ul class="flex flex-col gap-1">' + items + "</ul></nav>" +
      '<div class="border-t border-sidebar-border p-3"><div class="flex items-center gap-3 rounded-md px-2 py-2">' +
      avatar("size-9", "bg-sidebar-primary text-xs text-sidebar-primary-foreground", "관리") +
      '<div class="flex min-w-0 flex-1 flex-col leading-tight"><span class="truncate text-sm font-medium text-white">관리자</span><span class="truncate text-xs text-sidebar-foreground/60">' + E(S.settings.sender) + "</span></div>" +
      '<button type="button" data-slot="button" aria-label="로그아웃" class="' + BTN_LOGOUT + '" data-act="logout">' + ic("log-out", "size-4") + "</button></div></div></div>"
    )
  }
  var TITLES_BY_PATH = { "/": "대시보드", "/orders": "주문 관리", "/dealers": "대리점 관리", "/item-mapping": "품목 매핑", "/settlement": "정산", "/settings": "환경설정" }
  function shell(path, body) {
    return (
      '<div class="flex min-h-screen bg-background">' +
      '<aside class="hidden w-64 shrink-0 lg:block"><div class="fixed inset-y-0 left-0 w-64">' + sidebarInner(path) + "</div></aside>" +
      (S.drawer ? '<div class="demo-drawer-backdrop lg:hidden" data-act="closeDrawer"></div><div class="fixed inset-y-0 left-0 z-50 w-64 lg:hidden">' + sidebarInner(path) + "</div>" : "") +
      '<div class="flex min-w-0 flex-1 flex-col">' +
      '<header class="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-card/95 px-4 backdrop-blur lg:px-6">' +
      '<button type="button" data-slot="button" aria-label="메뉴 열기" class="' + BTN_MENU + '" data-act="openDrawer">' + ic("menu", "size-5") + "</button>" +
      '<h1 class="text-lg font-semibold text-foreground">' + TITLES_BY_PATH[path] + "</h1>" +
      '<div class="ml-auto flex items-center gap-2"><div class="hidden md:block"><form data-submit="gsearch" autocomplete="off">' +
      inputGroup(IG_POST + " w-64 lg:w-80", "size-4 text-muted-foreground", 'id="g-search" name="q" placeholder="납품요구번호, 수요기관, 모델번호 검색" value=""') +
      "</form></div>" +
      '<button type="button" data-slot="dropdown-menu-trigger" aria-haspopup="menu" class="' + BTN_USER + '" aria-expanded="false" data-act="userMenu">' +
      avatar("size-7", "bg-primary text-[11px] text-primary-foreground", "관리") + '<span class="hidden text-sm font-medium sm:inline">관리자</span></button>' +
      "</div></header>" +
      '<main class="flex-1 p-4 lg:p-6">' + body + "</main></div></div>" +
      renderModal()
    )
  }

  /* ───────── 대시보드 ───────── */
  function topList(title, iconHtml, rows, barCls) {
    var max = rows.length ? rows[0][1] : 1
    var html = rows.map(function (r, k) {
      return (
        '<div class="flex items-center gap-3"><span class="w-4 shrink-0 text-right text-xs font-bold tabular-nums text-muted-foreground">' + (k + 1) + "</span>" +
        '<div class="flex min-w-0 flex-1 flex-col gap-1"><div class="flex items-center justify-between gap-2"><span class="truncate text-sm" title="' + E(r[0]) + '">' + E(r[0]) + "</span>" +
        '<span class="shrink-0 text-xs font-bold tabular-nums text-muted-foreground">' + r[1] + "건</span></div>" +
        '<div class="h-1.5 overflow-hidden rounded-full bg-muted"><div class="h-full rounded-full ' + barCls + '" style="width: ' + Math.round((r[1] / max) * 10000) / 100 + '%;"></div></div></div></div>'
      )
    }).join("")
    return '<div class="flex flex-col gap-3"><div class="flex items-center gap-2 text-sm font-medium">' + iconHtml + title + '</div><div class="flex flex-col gap-2.5">' + html + "</div></div>"
  }
  function countTop(key) {
    var c = {}
    S.orders.forEach(function (o) {
      var k = key(o)
      c[k] = (c[k] || 0) + 1
    })
    return Object.keys(c).map(function (k) { return [k, c[k]] }).sort(function (a, b) { return b[1] - a[1] || (a[0] < b[0] ? -1 : 1) }).slice(0, 5)
  }
  function deadlineBox(o) {
    var d = dleft(o)
    var cls = "ml-1 flex h-11 w-14 shrink-0 flex-col items-center justify-center gap-0 rounded-lg border tabular-nums "
    var big, small
    if (d < 0) { cls += "bg-destructive text-white border-destructive"; big = "D+" + -d; small = "초과" }
    else if (d === 0) { cls += "bg-warning/15 text-warning-foreground border-warning/30"; big = "D-day"; small = "오늘" }
    else if (d <= dueDays()) { cls += "bg-warning/15 text-warning-foreground border-warning/30"; big = "D-" + d; small = "남음" }
    else { cls += "bg-muted text-foreground border-border"; big = "D-" + d; small = "남음" }
    return '<div class="' + cls + '"><span class="text-sm font-bold leading-tight">' + big + '</span><span class="text-[10px] font-medium leading-none opacity-80">' + small + "</span></div>"
  }
  function renderDashboard() {
    var all = S.orders.length
    var recv = S.orders.filter(function (o) { return o.received }).length
    var open = S.orders.filter(function (o) { return !o.closed }).length
    var due = S.orders.filter(isDue).length
    var kpis = [
      ["전체 주문", all, "bg-primary/10 text-primary", "file-text"],
      ["접수", recv, "bg-info/10 text-info", "inbox"],
      ["미처리", all - recv, "bg-destructive/10 text-destructive", "circle-alert"],
      ["진행중", open, "bg-warning/15 text-warning-foreground", "loader-circle"],
      ["종결", all - open, "bg-success/10 text-success", "circle-check"],
      ["납품임박(" + dueDays() + "일)", due, "bg-destructive/10 text-destructive", "alarm-clock"],
    ]
    var kpiHtml = kpis.map(function (k) {
      return card(CARD + " gap-0 p-4",
        '<div class="flex items-start justify-between"><span class="text-sm text-muted-foreground">' + k[0] + '</span><div class="flex size-8 items-center justify-center rounded-md ' + k[2] + '">' + ic(k[3], "size-4") + "</div></div>" +
        '<div class="mt-3 flex items-end justify-between"><span class="text-2xl font-bold tabular-nums text-foreground">' + Demo.num(k[1]) + '<span class="ml-0.5 text-sm font-normal text-muted-foreground">건</span></span></div>')
    }).join("")

    var insight = card(CARD_PY + " gap-0 pb-4",
      '<div data-slot="card-header" class="' + CARD_HEADER + '"><div data-slot="card-title" class="' + CARD_TITLE + ' text-base">주문 인사이트</div>' +
      '<div data-slot="card-description" class="text-sm text-muted-foreground">나라장터에서 수집한 납품요구를 수요기관·품목별로 집계했습니다. <span class="text-muted-foreground">(총 ' + Demo.num(all) + "건)</span></div></div>" +
      '<div data-slot="card-content" class="px-(--card-spacing) pt-4"><div class="grid gap-8 md:grid-cols-2">' +
      topList("수요기관 TOP 5", ic("building2", "lucide-building-2 size-4 text-muted-foreground"), countTop(function (o) { return o.agency }), "bg-primary") +
      topList("품목 TOP 5", ic("package", "size-4 text-muted-foreground"), countTop(function (o) { return o.lines[0].cat }), "bg-info") +
      "</div></div>")

    var recent = sortedOrders().slice(0, 7).map(function (o) {
      return (
        '<tr data-slot="table-row" class="' + TR_DASH + '" data-act="openOrder" data-id="' + o.id + '">' +
        td(progressBadge(o), "pl-6") + td(E(o.no), "font-medium tabular-nums") +
        td(E(o.agency), "max-w-40 truncate", ' title="' + E(o.agency) + '"') + td(E(o.title), "max-w-48 truncate", ' title="' + E(o.title) + '"') +
        td(recvBadge(o)) + td(dot(o.date), "tabular-nums text-muted-foreground") + td(E(o.staff), "pr-6 text-muted-foreground") + "</tr>"
      )
    }).join("")
    var recentCard = card(CARD_PY + " gap-0 pb-0",
      '<div data-slot="card-header" class="' + CARD_HEADER + '"><div data-slot="card-title" class="' + CARD_TITLE + ' text-base">최근 주문 목록</div>' +
      '<div data-slot="card-action" class="col-start-2 row-span-2 row-start-1 self-start justify-self-end"><a href="#/orders" data-slot="button" class="' + B0 + "border border-transparent bg-clip-padding font-medium " + FOC + " " + GHOST + " h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5" + '">전체 보기' + ic("chevron-right", "size-4") + "</a></div></div>" +
      '<div data-slot="card-content" class="px-0">' +
      table(th("상태", TH + " pl-6") + th("납품요구번호") + th("수요기관") + th("요청건명") + th("접수") + th("납품요구일") + th("담당자", TH + " pr-6"), recent) + "</div>")

    var dl = S.orders.filter(function (o) { return !o.closed }).sort(function (a, b) { return dleft(a) - dleft(b) }).slice(0, 6)
    var dlHtml = dl.map(function (o, k) {
      return (
        '<button class="group/row relative flex items-center gap-3 rounded-lg px-2 py-2.5 text-left transition-colors hover:bg-muted/60' + (k ? " border-t border-border/60" : "") + '" data-act="openOrder" data-id="' + o.id + '">' +
        deadlineBox(o) +
        '<div class="flex min-w-0 flex-1 flex-col gap-1"><div class="flex items-center gap-2"><span class="truncate text-sm font-medium tabular-nums">' + E(o.no) + "</span>" + progressBadge(o) + "</div>" +
        '<span class="truncate text-xs text-muted-foreground" title="' + E(o.title) + '">' + E(o.agency) + "</span></div>" +
        '<div class="flex shrink-0 flex-col items-end gap-1"><span class="text-xs tabular-nums text-foreground/70">' + deadline(o) + '</span><span class="max-w-24 truncate text-xs text-muted-foreground">' + E(o.staff) + "</span></div>" +
        ic("chevron-right", "size-4 shrink-0 text-muted-foreground/40 transition-transform group-hover/row:translate-x-0.5") + "</button>"
      )
    }).join("")
    var dlCard = card(CARD_PY + " gap-0 pb-2",
      '<div data-slot="card-header" class="' + CARD_HEADER + '"><div data-slot="card-title" class="' + CARD_TITLE + ' flex items-center gap-2 text-base">' + ic("calendar-clock", "size-4 text-muted-foreground") + "납품기한 임박 주문</div>" +
      '<div data-slot="card-description" class="text-sm text-muted-foreground">기한이 가까운 순으로 표시됩니다.</div></div>' +
      '<div data-slot="card-content" class="px-(--card-spacing) flex flex-col pt-1">' + (dlHtml || '<p class="py-6 text-center text-sm text-muted-foreground">진행 중인 주문이 없습니다.</p>') + "</div>")

    return (
      '<div class="flex flex-col gap-4"><div><h2 class="text-xl font-bold tracking-tight">대시보드</h2><p class="text-sm text-muted-foreground">나라장터 조달 주문의 처리 현황을 한눈에 확인합니다.</p></div>' +
      '<div class="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">' + kpiHtml + "</div>" + insight +
      '<div class="grid gap-4 xl:grid-cols-[1.6fr_1fr]">' + recentCard + dlCard + "</div></div>"
    )
  }

  /* ───────── 주문 관리 ───────── */
  function filteredOrders() {
    var f = S.of
    var q = f.q.trim().toLowerCase()
    return sortedOrders().filter(function (o) {
      if (q) {
        var hay = [o.no, o.agency, o.title, o.staff, dealerName(o.dealerId)].concat(o.lines.map(function (l) { return l.name })).join(" ").toLowerCase()
        if (hay.indexOf(q) < 0) return false
      }
      if (f.no && o.no.toLowerCase().indexOf(f.no.trim().toLowerCase()) < 0) return false
      if (f.title && o.title.indexOf(f.title.trim()) < 0) return false
      if (f.progress !== "all" && o.progress !== f.progress) return false
      if (f.contract !== "all" && o.contract !== f.contract) return false
      if (f.agency !== "all" && o.agency !== f.agency) return false
      if (f.closed === "open" && o.closed) return false
      if (f.closed === "closed" && !o.closed) return false
      if (f.recv === "yes" && !o.received) return false
      if (f.recv === "no" && o.received) return false
      if (f.item && !o.lines.some(function (l) { return l.name.indexOf(f.item.trim()) >= 0 })) return false
      if (f.from && o.date < f.from) return false
      if (f.to && o.date > f.to) return false
      if (f.due && !isDue(o)) return false
      return true
    })
  }
  function kpiCard(label, value, iconCls, icon, act, active) {
    return card(CARD + " gap-0 py-4 cursor-pointer transition-all hover:ring-foreground/20" + (active ? " ring-primary/40" : ""),
      '<div data-slot="card-content" class="flex items-center gap-3 px-4"><div class="rounded-md bg-muted p-2 ' + iconCls + '">' + ic(icon, "size-4") + "</div>" +
      '<div class="flex flex-col"><span class="text-xs text-muted-foreground">' + label + '</span><span class="text-lg font-bold tabular-nums">' + Demo.num(value) + "</span></div></div>",
      ' role="button" tabindex="0" ' + act)
  }
  function pageList(cur, total) {
    if (total <= 5) return Array.from({ length: total }, function (_, k) { return k + 1 })
    var set = [1, 2, 3, total]
    if (cur > 2 && cur < total) set.push(cur - 1, cur, cur + 1)
    set = set.filter(function (v, k, a) { return v >= 1 && v <= total && a.indexOf(v) === k }).sort(function (a, b) { return a - b })
    var out = []
    set.forEach(function (v, k) {
      if (k && v - set[k - 1] > 1) out.push("…")
      out.push(v)
    })
    return out
  }
  function renderOrders() {
    var f = S.of
    var all = S.orders
    var cnt = function (fn) { return all.filter(fn).length }
    var list = filteredOrders()
    var size = S.osize === "all" ? Math.max(list.length, 1) : S.osize
    var pages = Math.max(1, Math.ceil(list.length / size))
    if (S.opage > pages) S.opage = pages
    var rows = list.slice((S.opage - 1) * size, S.opage * size)

    var head =
      '<div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><h2 class="text-xl font-bold tracking-tight">주문 관리</h2>' +
      '<p class="text-sm text-muted-foreground">나라장터(shop.g2b.go.kr)에서 크롤링한 납품요구 데이터입니다.' +
      (S.syncing ? badge(BADGE_R, "ml-2 border-info/30 bg-info/10 text-info", "동기화 중…") : "") + "</p></div>" +
      '<div class="flex flex-wrap gap-2">' +
      '<button type="button" data-slot="button" class="' + BTN_OUTLINE_XS + '" data-act="syncAll"' + (S.syncing ? ' data-disabled="" disabled=""' : "") + ">" +
      ic(S.syncing ? "loader-circle" : "refresh-cw", S.syncing ? "size-4 animate-spin" : "size-4") + "나라장터 전체 동기화</button>" +
      '<button type="button" data-slot="button" class="' + BTN_OUTLINE_XS + '" data-act="exportOrders">' + ic("file-spreadsheet", "size-4") + "엑셀 다운로드</button>" +
      '<button type="button" data-slot="button" class="' + BTN_OUTLINE_XS + '" data-act="refreshOrders"' + (S.syncing ? ' data-disabled="" disabled=""' : "") + ">" + ic("refresh-cw", "size-4") + "새로고침</button></div></div>"

    var k1 =
      '<div class="grid grid-cols-3 gap-3">' +
      kpiCard("접수", cnt(function (o) { return o.received }), "text-info", "inbox", 'data-act="kpi" data-k="recv-yes"', f.recv === "yes") +
      kpiCard("미처리", cnt(function (o) { return !o.received }), "text-destructive", "circle-alert", 'data-act="kpi" data-k="recv-no"', f.recv === "no") +
      kpiCard("마감임박", cnt(isDue), "text-destructive", "alarm-clock", 'data-act="kpi" data-k="due"', f.due) + "</div>"
    var picons = { unassigned: ["text-warning-foreground", "store"], waiting: ["text-warning-foreground", "send"], writing: ["text-info", "pencil"], review: ["text-primary", "clipboard-check"], mes: ["text-success", "circle-check"] }
    var k2 =
      '<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">' +
      PROGRESS.map(function (p) {
        return kpiCard(p[1], cnt(function (o) { return o.progress === p[0] }), picons[p[0]][0], picons[p[0]][1], 'data-act="kpi" data-k="p-' + p[0] + '"', f.progress === p[0])
      }).join("") + "</div>"

    var agencies = AGENCIES.map(function (a) { return a[0] })
    S.orders.forEach(function (o) { if (agencies.indexOf(o.agency) < 0) agencies.push(o.agency) })
    var fld = function (lbl, inner, span) {
      return '<div class="flex flex-col gap-1.5' + (span ? " sm:col-span-2" : "") + '">' + lbl + inner + "</div>"
    }
    var filters = card(CARD_GAP,
      '<div data-slot="card-header" class="' + CARD_HEADER + '"><div data-slot="card-title" class="' + CARD_TITLE + ' flex items-center gap-2 text-sm">' + ic("funnel", "size-4 text-muted-foreground") + "조회 조건</div></div>" +
      '<div data-slot="card-content" class="px-(--card-spacing) pt-4"><div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">' +
      fld(label("통합 검색", "of-q"), inputGroup(" w-full" + IG_POST, "size-4 text-muted-foreground", 'id="of-q" placeholder="번호 / 수요기관 / 건명 / 품목 / 담당자" value="' + E(f.q) + '" data-input="of" data-k="q"'), true) +
      fld(label("납품요구번호", "of-no"), '<input id="of-no" data-slot="input" placeholder="R26TB..." class="' + INPUT + '" value="' + E(f.no) + '" data-input="of" data-k="no">') +
      fld(label("요청건명", "of-title"), '<input id="of-title" data-slot="input" placeholder="건명 포함 검색" class="' + INPUT + '" value="' + E(f.title) + '" data-input="of" data-k="title">') +
      fld(label("진행 상태"), select([["all", "전체 상태"]].concat(PROGRESS.map(function (p) { return [p[0], p[1]] })), f.progress, 'aria-label="진행 상태" data-change="of" data-k="progress"')) +
      fld(label("계약유형"), select([["all", "전체 계약유형"]].concat(CONTRACTS.map(function (c) { return [c, c] })), f.contract, 'aria-label="계약유형" data-change="of" data-k="contract"')) +
      fld(label("수요기관"), select([["all", "전체 기관"]].concat(agencies.map(function (a) { return [a, a] })), f.agency, 'aria-label="수요기관" data-change="of" data-k="agency"')) +
      fld(label("종결여부"), select([["all", "전체"], ["open", "진행중"], ["closed", "종결"]], f.closed, 'aria-label="종결여부" data-change="of" data-k="closed"')) +
      fld(label("접수여부"), select([["all", "전체"], ["yes", "접수"], ["no", "미접수"]], f.recv, 'aria-label="접수여부" data-change="of" data-k="recv"')) +
      fld(label("품명", "of-item"), '<input id="of-item" data-slot="input" placeholder="예: 책상" class="' + INPUT + '" value="' + E(f.item) + '" data-input="of" data-k="item">') +
      fld(label("납품요구일 (시작)", "of-from"), '<input id="of-from" type="date" data-slot="input" class="' + INPUT + '" value="' + E(f.from) + '" data-change="of" data-k="from">') +
      fld(label("납품요구일 (종료)", "of-to"), '<input id="of-to" type="date" data-slot="input" class="' + INPUT + '" value="' + E(f.to) + '" data-change="of" data-k="to">') +
      '<div class="flex items-end"><button type="button" data-slot="button" class="' + BTN_GHOST_XS + ' text-muted-foreground" data-act="resetOF">필터 초기화</button></div>' +
      "</div></div>")

    var body = rows.map(function (o) {
      var un = firstUnmapped(o)
      var rep = un
        ? '<button class="flex items-center gap-1.5 text-left" title="클릭하여 MES 품목 매핑" data-act="mapFromOrder" data-oid="' + o.id + '"><span>' + E(un.cat) + "</span>" + badge(BADGE_R, C_DESTR, "미매핑") + "</button>"
        : '<span class="text-muted-foreground">' + E(o.lines[0].cat) + "</span>"
      var dn = dealerName(o.dealerId)
      var d = dleft(o)
      var dueTxt = o.closed ? "-" : d < 0 ? '<span class="text-destructive">' + -d + "일 초과</span>" : d + "일"
      return (
        '<tr data-slot="table-row" class="' + TR_CLICK + '" data-act="openOrder" data-id="' + o.id + '">' +
        td(progressBadge(o)) + td('<span class="flex items-center gap-1">' + E(o.no) + "</span>", "font-medium tabular-nums") +
        td(E(o.agency), "max-w-44 truncate", ' title="' + E(o.agency) + '"') + td(E(o.title), "max-w-52 truncate", ' title="' + E(o.title) + '"') +
        td(rep) + td(dn ? E(dn) : '<span class="text-muted-foreground">미배정</span>') +
        td(E(o.branch), "text-muted-foreground") + td(E(o.staff), "text-muted-foreground") + td(dot(o.date), "tabular-nums text-muted-foreground") +
        td(dueTxt, "text-center tabular-nums text-muted-foreground") + td(recvBadge(o)) + td(E(o.contract), "text-muted-foreground") + td(closedBadge(o)) +
        td(ic("chevron-right", "ml-auto size-4 text-muted-foreground/50"), "pr-6 text-right") + "</tr>"
      )
    }).join("")
    if (!rows.length) body = '<tr data-slot="table-row" class="' + TR + '">' + td('<div class="py-10 text-center text-muted-foreground">조건에 맞는 주문이 없습니다.</div>', "", ' colspan="14"') + "</tr>"

    var overlay = S.syncing
      ? '<div class="absolute inset-0 z-10 flex items-center justify-center bg-background/70 backdrop-blur-[1px]"><div class="flex flex-col items-center gap-3 rounded-xl border bg-card px-6 py-5 shadow-lg">' +
        ic("loader-circle", "size-8 animate-spin text-primary") + '<span class="text-sm font-medium text-muted-foreground">나라장터에서 최신 주문을 불러오는 중…</span></div></div>'
      : ""
    var plist = pageList(S.opage, pages).map(function (p) {
      if (p === "…") return '<li data-slot="pagination-item"><span class="px-2 text-muted-foreground">…</span></li>'
      var on = p === S.opage
      return '<li data-slot="pagination-item"><a ' + (on ? 'aria-current="page" ' : "") + 'data-slot="pagination-link" data-active="' + on + '" role="button" tabindex="0" class="' + (on ? PG_ACTIVE : PG_LINK) + '" data-act="opage" data-p="' + p + '">' + p + "</a></li>"
    }).join("")
    var prevOff = S.opage <= 1, nextOff = S.opage >= pages
    var pager =
      '<div class="grid grid-cols-1 gap-3 border-t px-6 py-3 sm:grid-cols-3 sm:items-center"><span class="text-xs text-muted-foreground">총 ' + Demo.num(list.length) + "건 중 " + rows.length + "건 표시</span>" +
      '<nav role="navigation" aria-label="pagination" data-slot="pagination" class="flex mx-0 w-auto justify-center"><ul data-slot="pagination-content" class="flex items-center gap-0.5">' +
      '<li data-slot="pagination-item"><a data-slot="pagination-link" aria-label="이전 페이지" aria-disabled="' + prevOff + '" role="button" tabindex="0" class="' + PG_NAV + " pl-1.5! " + (prevOff ? "pointer-events-none opacity-50" : "cursor-pointer") + '" data-act="opage" data-p="' + (S.opage - 1) + '">' +
      ic("chevron-left", "", ' data-icon="inline-start"') + '<span class="hidden sm:block">이전</span></a></li>' + plist +
      '<li data-slot="pagination-item"><a data-slot="pagination-link" aria-label="다음 페이지" aria-disabled="' + nextOff + '" role="button" tabindex="0" class="' + PG_NAV + " pr-1.5! " + (nextOff ? "pointer-events-none opacity-50" : "cursor-pointer") + '" data-act="opage" data-p="' + (S.opage + 1) + '">' +
      '<span class="hidden sm:block">다음</span>' + ic("chevron-right", "", ' data-icon="inline-end"') + "</a></li></ul></nav>" +
      '<div class="flex items-center justify-start gap-1 sm:justify-end"><span class="mr-1 text-xs text-muted-foreground">보기</span>' +
      [[20, "20개"], [50, "50개"], [100, "100개"], ["all", "전체"]].map(function (s) {
        return '<button type="button" data-slot="button" class="' + (S.osize === s[0] ? BTN_SIZE_ON : BTN_SIZE_OFF) + '" data-act="osize" data-s="' + s[0] + '">' + s[1] + "</button>"
      }).join("") + "</div></div>"

    var listCard = card(CARD_PY + " gap-0 pb-0",
      '<div data-slot="card-header" class="' + CARD_HEADER_ROW + '"><div data-slot="card-title" class="' + CARD_TITLE + ' text-sm">주문 목록 <span class="text-muted-foreground">(' + Demo.num(list.length) + "건)</span></div></div>" +
      '<div data-slot="card-content" class="relative px-0 min-h-[260px]">' + overlay +
      table(th("진행 상태") + th("납품요구번호") + th("수요기관") + th("요청건명") + th("대표품목") + th("대리점") + th("접수지청") + th("담당자") + th("납품요구일") +
        th("기한", THN + " text-center") + th("접수") + th("계약유형") + th("종결") + th("상세", THN + " pr-6 text-right"), body) +
      pager + "</div>")

    return '<div class="flex flex-col gap-4">' + head + k1 + k2 + filters + listCard + "</div>"
  }

  /* ───────── 대리점 관리 ───────── */
  function dealerStats(d) {
    var mine = S.orders.filter(function (o) { return o.dealerId === d.id })
    var sales = mine.filter(function (o) { return o.progress === "mes" }).reduce(function (s, o) { return s + amount(o) }, 0)
    return { count: mine.length, sales: sales }
  }
  function renderDealers() {
    var f = S.df
    var q = f.q.trim().toLowerCase()
    var list = S.dealers.filter(function (d) {
      if (f.region !== "all" && d.region !== f.region) return false
      if (q && [d.name, d.manager, d.region, d.memo].join(" ").toLowerCase().indexOf(q) < 0) return false
      return true
    })
    var per = 20
    var pages = Math.max(1, Math.ceil(list.length / per))
    if (S.dpage > pages) S.dpage = pages
    var rows = list.slice((S.dpage - 1) * per, S.dpage * per)
    var total = S.dealers.reduce(function (s, d) { return s + dealerStats(d).sales }, 0)

    var body = rows.map(function (d) {
      var st = dealerStats(d)
      return (
        '<tr data-slot="table-row" class="' + TR + '">' +
        td('<span class="flex items-center gap-2"><span class="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">' + ic("store", "size-4") + "</span>" + E(d.name) + "</span>", "pl-6 font-medium") +
        td(E(d.region || "-"), "text-muted-foreground") + td(E(d.manager || "-"), "text-muted-foreground") +
        td(d.phone ? E(d.phone) : '<span class="flex items-center gap-1 text-destructive">' + ic("circle-alert", "size-3.5") + "번호 없음</span>", "tabular-nums") +
        td(st.sales ? won(st.sales) : "-", "text-right font-medium tabular-nums") +
        td(st.count ? '<span class="font-medium">' + st.count + "</span>" : '<span class="text-muted-foreground">0</span>', "text-center") +
        td(E(d.memo || "-"), "max-w-48 truncate text-muted-foreground", ' title="' + E(d.memo) + '"') +
        td(d.active ? badge(BADGE_R, C_SUCCESS, "활성") : badge(BADGE_R, C_MUTED, "비활성")) +
        td('<div class="flex justify-end gap-1"><button type="button" data-slot="button" class="' + BTN_EDIT + '" data-act="editDealer" data-id="' + d.id + '">' + ic("pencil", "size-3.5") + "수정</button>" +
          '<button type="button" data-slot="button" aria-label="삭제" class="' + BTN_DEL7 + '" data-act="delDealer" data-id="' + d.id + '">' + ic("trash2", "lucide-trash-2 size-3.5") + "</button></div>", "pr-6 text-right") +
        "</tr>"
      )
    }).join("")
    if (!rows.length) body = '<tr data-slot="table-row" class="' + TR + '">' + td('<div class="py-10 text-center text-muted-foreground">조건에 맞는 대리점이 없습니다.</div>', "", ' colspan="9"') + "</tr>"

    var dis = function (off) { return off ? ' data-disabled="" disabled=""' : "" }
    return (
      '<div class="flex flex-col gap-6">' +
      '<div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div class="flex flex-col gap-1"><h1 class="text-2xl font-bold tracking-tight text-balance">대리점 관리</h1>' +
      '<p class="text-sm text-muted-foreground text-pretty">MES 거래처(지점)에서 대리점을 불러옵니다. 재갱신으로 최신 정보를 반영합니다.</p></div>' +
      '<div class="flex flex-wrap items-center gap-2"><div class="flex gap-2">' +
      '<button type="button" data-slot="button" class="' + BTN_OUTLINE_SM + '" data-act="refreshDealers">' + ic("refresh-cw", "size-4") + "재갱신</button>" +
      '<button type="button" data-slot="button" class="' + BTN_PRIMARY_SM + '" data-act="editDealer" data-id="">' + ic("plus", "", ' data-icon="inline-start"') + "대리점 등록</button></div></div></div>" +
      '<div class="flex flex-col gap-3 sm:flex-row">' +
      inputGroup(" w-full" + IG_POST + " sm:max-w-xs", "", 'id="df-q" placeholder="대리점명 / 담당자 / 지역 / 메모" value="' + E(f.q) + '" data-input="df" data-k="q"') +
      select([["all", "전체 지역"]].concat(REGIONS.map(function (r) { return [r, r] })), f.region, 'aria-label="지역" data-change="df" data-k="region"', ST_FIT + " sm:w-40") + "</div>" +
      card(CARD + " gap-0 py-4", '<div data-slot="card-content" class="flex flex-wrap items-center justify-between gap-3 px-5"><div class="flex items-center gap-2 text-sm text-muted-foreground">' + ic("store", "size-4") + "전체 대리점 누적 판매액</div>" +
        '<span class="text-2xl font-bold tabular-nums text-primary">' + (total ? won(total) : "-") + "</span></div>") +
      card(CARD + " gap-0 py-0", '<div data-slot="card-content" class="px-0">' +
        table(th("대리점명", TH + " pl-6") + th("지역") + th("담당자") + th("연락처") + th("누적 판매액", THN + " text-right") + th("매칭 주문", THN + " text-center") + th("메모") + th("상태") + th("관리", THN + " pr-6 text-right"), body) + "</div>") +
      '<div class="flex flex-wrap items-center justify-between gap-2"><span class="text-xs text-muted-foreground">총 ' + Demo.num(list.length) + "개 대리점 · " + S.dpage + "/" + pages + " 페이지</span>" +
      '<div class="flex items-center gap-1">' +
      '<button type="button" data-slot="button" class="' + BTN_PAGER + '" data-act="dpage" data-p="1"' + dis(S.dpage <= 1) + ">«</button>" +
      '<button type="button" data-slot="button" class="' + BTN_PAGER + '" data-act="dpage" data-p="' + (S.dpage - 1) + '"' + dis(S.dpage <= 1) + ">이전</button>" +
      '<span class="px-2 text-xs tabular-nums text-muted-foreground">' + S.dpage + " / " + pages + "</span>" +
      '<button type="button" data-slot="button" class="' + BTN_PAGER + '" data-act="dpage" data-p="' + (S.dpage + 1) + '"' + dis(S.dpage >= pages) + ">다음</button>" +
      '<button type="button" data-slot="button" class="' + BTN_PAGER + '" data-act="dpage" data-p="' + pages + '"' + dis(S.dpage >= pages) + ">»</button></div></div></div>"
    )
  }

  /* ───────── 품목 매핑 ───────── */
  function renderMapping() {
    var f = S.mf
    var q = f.q.trim().toLowerCase()
    var list = S.maps.filter(function (m) {
      if (f.type !== "all" && m.type !== f.type) return false
      if (q && [m.name, m.mesName, m.spec, m.mesCode].join(" ").toLowerCase().indexOf(q) < 0) return false
      return true
    }).sort(function (a, b) { return a.name < b.name ? -1 : 1 })
    var body = list.map(function (m) {
      return (
        '<tr data-slot="table-row" class="' + TR + '">' +
        td(badge(BADGE_S, "", m.type, "secondary"), "pl-6") + td(E(m.name), "font-medium") + td(E(m.spec), "tabular-nums text-muted-foreground") +
        td(E(m.mesName), "text-muted-foreground") + td(E(m.mesCode), "tabular-nums text-muted-foreground") +
        td(won(m.price), "text-right tabular-nums") + td(m.rate ? m.rate + "%" : "-", "text-right tabular-nums") +
        td(m.rate ? won(Math.round((m.price * m.rate) / 100)) : "-", "text-right tabular-nums") +
        td('<div class="flex justify-end gap-1"><button type="button" data-slot="button" aria-label="수정" class="' + BTN_ICON7 + '" data-act="editMap" data-id="' + m.id + '">' + ic("pencil", "size-4") + "</button>" +
          '<button type="button" data-slot="button" aria-label="삭제" class="' + BTN_ICON7 + '" data-act="delMap" data-id="' + m.id + '">' + ic("trash2", "lucide-trash-2 size-4 text-destructive") + "</button></div>", "pr-6 text-right") +
        "</tr>"
      )
    }).join("")
    if (!list.length) body = '<tr data-slot="table-row" class="' + TR + '">' + td('<div class="py-10 text-center text-muted-foreground">조건에 맞는 매핑이 없습니다.</div>', "", ' colspan="9"') + "</tr>"
    return (
      '<div class="flex flex-col gap-6">' +
      '<div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div class="flex flex-col gap-1"><h1 class="text-2xl font-bold tracking-tight text-balance">품목 매핑</h1>' +
      '<p class="text-sm text-muted-foreground text-pretty">나라장터 품명을 MES 품명·단가로 변환하는 매핑표입니다.</p></div>' +
      '<div class="flex flex-wrap items-center gap-2"><div class="flex flex-wrap gap-2">' +
      '<button type="button" data-slot="button" class="' + BTN_OUTLINE_SM + '" data-act="importMaps">' + ic("upload", "", ' data-icon="inline-start"') + "엑셀 일괄 등록</button>" +
      '<button type="button" data-slot="button" class="' + BTN_OUTLINE_SM + '" data-act="exportMaps">' + ic("file-spreadsheet", "", ' data-icon="inline-start"') + "엑셀 다운로드</button>" +
      '<button type="button" data-slot="button" class="' + BTN_PRIMARY_SM + '" data-act="editMap" data-id="">' + ic("plus", "", ' data-icon="inline-start"') + "매핑 등록</button></div></div></div>" +
      '<div class="flex flex-col gap-3 sm:flex-row">' +
      inputGroup(" w-full" + IG_POST + " sm:max-w-xs", "", 'id="mf-q" placeholder="나라장터 품명 / MES 품명 / 규격 / 품번" value="' + E(f.q) + '" data-input="mf" data-k="q"') +
      select([["all", "전체 종류"]].concat(CATS.map(function (c) { return [c, c] })), f.type, 'aria-label="품목종류" data-change="mf" data-k="type"', ST_FIT + " sm:w-40") + "</div>" +
      card(CARD + " gap-0 py-0", '<div data-slot="card-content" class="px-0">' +
        table(th("품목종류", TH + " pl-6") + th("나라장터 품명") + th("규격") + th("MES 품명") + th("MES 품번") + th("조달 가격", THN + " text-right") + th("영업수수료 비율", THN + " text-right") + th("정산 금액", THN + " text-right") + th("관리", THN + " pr-6 text-right"), body) + "</div>") +
      '<span class="text-xs text-muted-foreground">총 ' + Demo.num(list.length) + "개 매핑</span></div>"
    )
  }

  /* ───────── 정산 ───────── */
  function renderSettlement() {
    var f = S.sf
    var q = f.q.trim().toLowerCase()
    var list = sortedOrders().filter(function (o) {
      if (!o.dealerId || (o.progress !== "review" && o.progress !== "mes")) return false
      if (f.status !== "all" && o.settle !== f.status) return false
      if (q && [o.no, o.agency, o.title, dealerName(o.dealerId)].join(" ").toLowerCase().indexOf(q) < 0) return false
      return true
    })
    var body = list.map(function (o) {
      var amt = settleAmount(o)
      var st = o.settle
      var stHtml = st === "none" ? '<span class="text-muted-foreground">미생성</span>'
        : badge(BADGE_R, st === "created" ? C_MUTED : st === "sent" ? C_INFO : C_PRIMARY, SETTLE[st])
      var amtHtml = st === "none" ? "-" : '<span class="flex flex-col items-end"><span>' + won(amt) + "</span>" + (o.bonus ? '<span class="text-[11px] font-normal text-success">+' + Math.round(o.bonus * 100) + "%</span>" : "") + "</span>"
      var print = st === "none" ? "" : '<button type="button" data-slot="button" class="' + BTN_OUTLINE_XS + '" data-act="printSettle" data-id="' + o.id + '">' + ic("printer", "size-4") + "출력</button>"
      var send = st === "none" || st === "created"
        ? '<button type="button" data-slot="button" class="' + BTN_PRIMARY_XS + '" data-act="sendSettle" data-id="' + o.id + '">' + ic("receipt", "size-4") + "정산서 작성·발송</button>"
        : '<button type="button" data-slot="button" class="' + BTN_DESTR_XS + '" data-act="resendSettle" data-id="' + o.id + '">' + ic("receipt", "size-4") + "정산서 재발송</button>"
      return (
        '<tr data-slot="table-row" class="' + TR + '">' +
        td(E(o.no), "pl-6 font-medium tabular-nums") + td(E(o.agency), "max-w-40 truncate", ' title="' + E(o.agency) + '"') + td(E(o.title), "max-w-52 truncate", ' title="' + E(o.title) + '"') +
        td('<span class="flex items-center gap-1.5">' + ic("store", "size-3.5 text-muted-foreground") + E(dealerName(o.dealerId)) + "</span>") +
        td(amtHtml, "text-right font-medium tabular-nums") + td(stHtml) +
        td('<div class="flex justify-end gap-2">' + print + send + "</div>", "pr-6") + "</tr>"
      )
    }).join("")
    if (!list.length) body = '<tr data-slot="table-row" class="' + TR + '">' + td('<div class="py-10 text-center text-muted-foreground">정산 대상 주문이 없습니다.</div>', "", ' colspan="7"') + "</tr>"
    return (
      '<div class="flex flex-col gap-6">' +
      '<div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div class="flex flex-col gap-1"><h1 class="text-2xl font-bold tracking-tight text-balance">정산</h1>' +
      '<p class="text-sm text-muted-foreground text-pretty">주문건별로 대리점에게 정산서를 발송합니다.</p></div></div>' +
      '<div class="flex flex-col gap-3 sm:flex-row"><div class="relative sm:max-w-xs">' + ic("search", "pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground") +
      '<input id="sf-q" data-slot="input" placeholder="납품요구번호 / 수요기관 / 건명 / 대리점" class="' + INPUT + ' pl-8" value="' + E(f.q) + '" data-input="sf" data-k="q"></div>' +
      select([["all", "전체 상태"], ["none", "미생성"], ["created", "생성됨"], ["sent", "발송됨"], ["viewed", "열람"]], f.status, 'aria-label="정산 상태" data-change="sf" data-k="status"', ST_FIT + " sm:w-44") +
      '<span class="flex items-center text-xs text-muted-foreground">총 ' + Demo.num(list.length) + "건</span></div>" +
      card(CARD + " gap-0 py-0", '<div data-slot="card-content" class="px-0">' +
        table(th("납품요구번호", TH + " pl-6") + th("수요기관") + th("요청건명") + th("대리점") + th("정산금액", THN + " text-right") + th("상태") + th("정산서", THN + " pr-6 text-right"), body) + "</div>") +
      "</div>"
    )
  }

  /* ───────── 환경설정 ───────── */
  function renderSettings() {
    var s = S.settings
    var f = function (lbl, id, inner) {
      return '<div class="flex flex-col gap-1.5">' + label(lbl, id) + inner + "</div>"
    }
    var inp = function (id, name, val, extra) {
      return '<input id="' + id + '" name="' + name + '" data-slot="input" class="' + INPUT + '" value="' + E(val) + '"' + (extra || "") + ">"
    }
    var hdr = function (icon, title, desc) {
      return '<div data-slot="card-header" class="' + CARD_HEADER + '"><div data-slot="card-title" class="' + CARD_TITLE + ' flex items-center gap-2 text-base">' + ic(icon, "size-4 text-muted-foreground") + title + '</div><div data-slot="card-description" class="text-sm text-muted-foreground">' + desc + "</div></div>"
    }
    return (
      '<form class="flex flex-col gap-6" data-submit="saveSettings" autocomplete="off">' +
      '<div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div class="flex flex-col gap-1"><h1 class="text-2xl font-bold tracking-tight text-balance">환경설정</h1>' +
      '<p class="text-sm text-muted-foreground text-pretty">나라장터 동기화와 정산서 발신 정보를 설정합니다.</p></div>' +
      '<div class="flex flex-wrap items-center gap-2"><button type="submit" data-slot="button" class="' + BTN_PRIMARY_SM + '">' + ic("circle-check", "", ' data-icon="inline-start"') + "설정 저장</button></div></div>" +
      card(CARD_PY + " gap-0",
        hdr("refresh-cw", "나라장터 동기화", "shop.g2b.go.kr 의 납품요구를 주기적으로 불러옵니다.") +
        '<div data-slot="card-content" class="px-(--card-spacing) pt-4"><div class="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">' +
        f("자동 동기화", "", select([["on", "사용"], ["off", "사용 안 함"]], s.autoSync, 'name="autoSync" aria-label="자동 동기화"')) +
        f("동기화 주기", "", select([["10", "10분마다"], ["30", "30분마다"], ["60", "1시간마다"], ["180", "3시간마다"]], s.syncInterval, 'name="syncInterval" aria-label="동기화 주기"')) +
        f("조회 기간(일)", "st-days", inp("st-days", "syncDays", s.syncDays, ' type="number" min="7" max="365"')) +
        f("납품임박 기준(일)", "st-due", inp("st-due", "dueDays", s.dueDays, ' type="number" min="1" max="30"')) +
        "</div></div>") +
      card(CARD_PY + " gap-0",
        hdr("receipt", "정산서 발신 정보", "대리점에 발송하는 정산서 머리글에 표시됩니다.") +
        '<div data-slot="card-content" class="px-(--card-spacing) pt-4"><div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">' +
        f("발신 회사명", "st-co", inp("st-co", "company", s.company)) + f("담당 부서·이름", "st-sender", inp("st-sender", "sender", s.sender)) +
        f("연락처", "st-tel", inp("st-tel", "tel", s.tel)) + f("회신 이메일", "st-email", inp("st-email", "email", s.email, ' type="email"')) +
        f("기본 영업수수료 비율(%)", "st-rate", inp("st-rate", "rate", s.rate, ' type="number" min="0" max="100"')) +
        "</div></div>") +
      "</form>"
    )
  }

  /* ───────── 모달 ───────── */
  var DLG_CLS = "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 demo-dialog "
  function dialog(size, title, desc, body, footer, formAct) {
    var tag = formAct ? "form" : "div"
    return (
      '<div data-slot="dialog-overlay" class="fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs" data-act="closeModal"></div>' +
      "<" + tag + ' role="dialog" aria-modal="true" data-slot="dialog-content" class="' + DLG_CLS + size + '"' + (formAct ? ' data-submit="' + formAct + '" autocomplete="off"' : "") + ">" +
      '<div data-slot="dialog-header" class="flex flex-col gap-2"><h2 data-slot="dialog-title" class="text-base leading-none font-medium">' + title + "</h2>" +
      (desc ? '<p data-slot="dialog-description" class="text-sm text-muted-foreground">' + desc + "</p>" : "") + "</div>" +
      body +
      '<div data-slot="dialog-footer" class="-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end">' + footer + "</div>" +
      '<button type="button" data-slot="dialog-close" aria-label="닫기" class="' + BTN_ICON7 + ' absolute top-2 right-2" data-act="closeModal">' + ic("x", "size-4") + "</button>" +
      "</" + tag + ">"
    )
  }
  function formField(lbl, id, inner, span) {
    return '<div class="flex flex-col gap-1.5' + (span ? " sm:col-span-2" : "") + '">' + label(lbl, id) + inner + "</div>"
  }
  function info(k, v) {
    return '<div class="flex flex-col gap-0.5"><span class="text-xs text-muted-foreground">' + k + '</span><span class="text-sm">' + v + "</span></div>"
  }
  function renderModal() {
    var m = S.modal
    if (!m) return ""
    var closeBtn = '<button type="button" data-slot="button" class="' + BTN_OUTLINE_SM + '" data-act="closeModal">닫기</button>'
    if (m.type === "order") {
      var o = orderById(m.id)
      if (!o) return ""
      var d = dleft(o)
      var dTxt = o.closed ? "종결" : d < 0 ? '<span class="text-destructive">D+' + -d + " 초과</span>" : "D-" + d
      var lineRows = o.lines.map(function (l) {
        var mp = mapByName(l.name)
        return (
          '<tr data-slot="table-row" class="' + TR + '">' + td(E(l.name), "max-w-56 truncate", ' title="' + E(l.name) + '"') +
          td(Demo.num(l.qty), "text-right tabular-nums") + td(won(l.price), "text-right tabular-nums") + td(won(l.qty * l.price), "text-right tabular-nums") +
          td(mp ? '<span class="text-muted-foreground">' + E(mp.mesCode) + "</span>"
            : '<button class="flex items-center gap-1.5 text-left" title="클릭하여 MES 품목 매핑" data-act="mapFromLine" data-oid="' + o.id + '" data-name="' + E(l.name) + '">' + badge(BADGE_R, C_DESTR, "미매핑") + "</button>") +
          "</tr>"
        )
      }).join("")
      var dealerOpts = [["", "미배정"]].concat(S.dealers.filter(function (x) { return x.active || x.id === o.dealerId }).map(function (x) { return [x.id, x.name + " · " + x.region] }))
      var next = { waiting: ["writing", "대리점 작성 시작"], writing: ["review", "관리자 확인 요청"], review: ["mes", "확인 완료 · MES 업로드"] }[o.progress]
      var actions = ""
      if (!o.received) actions += '<button type="button" data-slot="button" class="' + BTN_OUTLINE_SM + '" data-act="receiveOrder" data-id="' + o.id + '">' + ic("inbox", "size-4") + "접수 처리</button>"
      if (next) actions += '<button type="button" data-slot="button" class="' + BTN_PRIMARY_SM + '" data-act="advance" data-id="' + o.id + '">' + ic("send", "size-4") + next[1] + "</button>"
      if (o.progress === "mes" && !o.closed) actions += '<button type="button" data-slot="button" class="' + BTN_PRIMARY_SM + '" data-act="closeOrder" data-id="' + o.id + '">' + ic("circle-check", "size-4") + "종결 처리</button>"
      var body =
        '<div class="flex flex-wrap items-center gap-2">' + progressBadge(o) + recvBadge(o) + closedBadge(o) + "</div>" +
        '<div class="grid grid-cols-1 gap-3 rounded-lg border bg-muted/50 p-3 sm:grid-cols-2">' +
        info("수요기관", E(o.agency)) + info("요청건명", E(o.title)) + info("납품요구일", dot(o.date)) + info("납품기한", deadline(o) + " · " + dTxt) +
        info("접수지청 · 담당자", E(o.branch) + " · " + E(o.staff)) + info("계약유형", E(o.contract)) + "</div>" +
        '<div class="rounded-lg border">' +
        table(th("품명") + th("수량", THN + " text-right") + th("단가", THN + " text-right") + th("금액", THN + " text-right") + th("MES 품번"), lineRows) +
        '<div class="flex items-center justify-between border-t px-3 py-2 text-sm"><span class="text-muted-foreground">합계</span><span class="font-bold tabular-nums">' + won(amount(o)) + "</span></div></div>" +
        '<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">' +
        formField("대리점 배정", "", select(dealerOpts, o.dealerId || "", 'aria-label="대리점 배정" data-change="assignDealer" data-id="' + o.id + '"')) +
        '<div class="flex flex-col gap-1.5"><span class="text-xs text-muted-foreground">정산</span><span class="flex h-8 items-center text-sm">' +
        (o.dealerId && (o.progress === "review" || o.progress === "mes") ? E(SETTLE[o.settle]) + " · 예상 정산금 " + won(settleAmount(o)) : '<span class="text-muted-foreground">관리자 확인 단계부터 정산 대상</span>') + "</span></div></div>"
      return dialog("sm:max-w-2xl", "주문 상세", E(o.no), body, closeBtn + actions)
    }
    if (m.type === "dealer") {
      var dd = m.id ? dealerById(m.id) : { name: "", region: "서울", manager: "", phone: "", memo: "", active: true }
      var b =
        '<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">' +
        formField("대리점명", "dl-name", '<input id="dl-name" name="name" required data-slot="input" class="' + INPUT + '" placeholder="예: (가상) 새봄오피스" value="' + E(dd.name) + '">', true) +
        formField("지역", "", select(REGIONS.map(function (r) { return [r, r] }), dd.region, 'name="region" aria-label="지역"')) +
        formField("상태", "", select([["1", "활성"], ["0", "비활성"]], dd.active ? "1" : "0", 'name="active" aria-label="상태"')) +
        formField("담당자", "dl-manager", '<input id="dl-manager" name="manager" data-slot="input" class="' + INPUT + '" value="' + E(dd.manager) + '">') +
        formField("연락처", "dl-phone", '<input id="dl-phone" name="phone" data-slot="input" class="' + INPUT + '" placeholder="010-0000-0000" value="' + E(dd.phone) + '">') +
        formField("메모", "dl-memo", '<input id="dl-memo" name="memo" data-slot="input" class="' + INPUT + '" value="' + E(dd.memo) + '">', true) + "</div>"
      return dialog("sm:max-w-lg", m.id ? "대리점 수정" : "대리점 등록", "MES 거래처와 연결할 대리점 정보를 입력합니다.", b,
        closeBtn + '<button type="submit" data-slot="button" class="' + BTN_PRIMARY_SM + '">' + (m.id ? "저장" : "등록") + "</button>", "saveDealer")
    }
    if (m.type === "map") {
      var mm = m.id ? S.maps.filter(function (x) { return x.id === m.id })[0] : { type: m.preset ? m.preset.type : "의자", name: m.preset ? m.preset.name : "", spec: m.preset ? m.preset.spec : "", mesName: "", mesCode: "", price: m.preset ? m.preset.price : "", rate: S.settings.rate }
      var b2 =
        (m.preset ? '<p class="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">주문에 들어온 품목이 아직 매핑되지 않았습니다. MES 품명을 연결하면 주문·정산에 바로 반영됩니다.</p>' : "") +
        '<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">' +
        formField("품목종류", "", select(CATS.map(function (c) { return [c, c] }), mm.type, 'name="type" aria-label="품목종류"')) +
        formField("규격", "mp-spec", '<input id="mp-spec" name="spec" data-slot="input" class="' + INPUT + '" value="' + E(mm.spec) + '">') +
        formField("나라장터 품명", "mp-name", '<input id="mp-name" name="name" required data-slot="input" class="' + INPUT + '" placeholder="품명, 제조사, 모델, 규격" value="' + E(mm.name) + '"' + (m.preset ? " readonly" : "") + ">", true) +
        formField("MES 품명", "mp-mes", '<input id="mp-mes" name="mesName" required data-slot="input" class="' + INPUT + '" value="' + E(mm.mesName) + '">') +
        formField("MES 품번", "mp-code", '<input id="mp-code" name="mesCode" data-slot="input" class="' + INPUT + '" value="' + E(mm.mesCode) + '">') +
        formField("조달 가격(원)", "mp-price", '<input id="mp-price" name="price" type="number" min="0" required data-slot="input" class="' + INPUT + '" value="' + E(mm.price) + '">') +
        formField("영업수수료 비율(%)", "mp-rate", '<input id="mp-rate" name="rate" type="number" min="0" max="100" data-slot="input" class="' + INPUT + '" value="' + E(mm.rate) + '">') + "</div>"
      return dialog("sm:max-w-lg", m.id ? "매핑 수정" : "매핑 등록", "나라장터 품명을 MES 품명·단가로 연결합니다.", b2,
        closeBtn + '<button type="submit" data-slot="button" class="' + BTN_PRIMARY_SM + '">' + (m.id ? "저장" : "등록") + "</button>", "saveMap")
    }
    if (m.type === "confirm") {
      return dialog("sm:max-w-sm", m.title, m.desc, "",
        closeBtn.replace("닫기", "취소") + '<button type="button" data-slot="button" class="' + BTN_PRIMARY_SM.replace(PRIMARY, "bg-destructive text-white") + '" data-act="confirmYes">' + m.yes + "</button>")
    }
    return ""
  }

  /* ───────── 그리기 ───────── */
  function render(route) {
    var p = route.path
    if (!TITLES_BY_PATH[p]) p = "/"
    var body =
      p === "/orders" ? renderOrders()
      : p === "/dealers" ? renderDealers()
      : p === "/item-mapping" ? renderMapping()
      : p === "/settlement" ? renderSettlement()
      : p === "/settings" ? renderSettings()
      : renderDashboard()
    document.title = TITLES_BY_PATH[p] + " · (가상) 한결퍼니처 조달관리"
    return shell(p, body)
  }
  // 입력 중 다시 그려도 커서가 그대로 있게
  function R() {
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

  /* ───────── 동작 ───────── */
  Demo.on("openDrawer", function () { S.drawer = true; R() })
  Demo.on("closeDrawer", function () { S.drawer = false; R() })
  Demo.on("logout", function () { Demo.toast("체험판에서는 로그아웃 없이 바로 둘러볼 수 있습니다.") })
  Demo.on("userMenu", function () { Demo.toast("관리자 계정으로 접속 중입니다 (체험판).") })
  Demo.on("gsearch", function (v) {
    resetOF()
    S.of.q = (v.q || "").trim()
    S.opage = 1
    if (Demo.route().path === "/orders") R()
    else Demo.go("/orders")
  })
  Demo.on("closeModal", function () { S.modal = null; R() })
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && (S.modal || S.drawer)) { S.modal = null; S.drawer = false; R() }
  })

  // 주문
  Demo.on("of", function (v, el) { S.of[el.getAttribute("data-k")] = v; S.opage = 1; R() })
  Demo.on("resetOF", function () { resetOF(); S.opage = 1; R() })
  Demo.on("kpi", function (d) {
    var k = d.k
    var f = S.of
    if (k === "recv-yes") { var on = f.recv === "yes"; resetOF(); if (!on) S.of.recv = "yes" }
    else if (k === "recv-no") { var on2 = f.recv === "no"; resetOF(); if (!on2) S.of.recv = "no" }
    else if (k === "due") { var on3 = f.due; resetOF(); S.of.due = !on3 }
    else { var p = k.slice(2), on4 = f.progress === p; resetOF(); if (!on4) S.of.progress = p }
    S.opage = 1
    R()
  })
  Demo.on("opage", function (d) { S.opage = +d.p; R() })
  Demo.on("osize", function (d) { S.osize = d.s === "all" ? "all" : +d.s; S.opage = 1; R() })
  Demo.on("openOrder", function (d) { S.modal = { type: "order", id: d.id }; R() })
  Demo.on("mapFromOrder", function (d, el, e) {
    e.stopPropagation()
    var o = orderById(d.oid)
    var l = o && firstUnmapped(o)
    if (l) openMapPreset(l)
  })
  Demo.on("mapFromLine", function (d) {
    var o = orderById(d.oid)
    var l = o && o.lines.filter(function (x) { return x.name === d.name })[0]
    if (l) openMapPreset(l)
  })
  function openMapPreset(l) {
    var parts = l.name.split(", ")
    S.modal = { type: "map", id: null, preset: { type: l.type, name: l.name, spec: parts.slice(3).join(", "), price: l.price }, back: S.modal }
    R()
  }
  function runSync(add) {
    if (S.syncing) return
    S.syncing = true
    R()
    setTimeout(function () {
      var n = 0
      if (add) {
        n = 2 + Math.floor(Math.random() * 2)
        for (var k = 0; k < n; k++) {
          var o = makeOrder(0, "unassigned")
          S.orders.push(o)
        }
      }
      S.syncing = false
      S.opage = 1
      R()
      Demo.toast(add ? "나라장터에서 신규 납품요구 " + n + "건을 불러왔습니다." : "최신 상태입니다. 새로 들어온 주문이 없습니다.")
    }, add ? 1800 : 700)
  }
  Demo.on("syncAll", function () { runSync(true) })
  Demo.on("refreshOrders", function () { runSync(false) })
  function download(name, rows) {
    var csv = "﻿" + rows.map(function (r) {
      return r.map(function (c) { return '"' + String(c == null ? "" : c).replace(/"/g, '""') + '"' }).join(",")
    }).join("\r\n")
    var a = document.createElement("a")
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }))
    a.download = name
    document.body.appendChild(a)
    a.click()
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove() }, 500)
  }
  Demo.on("exportOrders", function () {
    var list = filteredOrders()
    download("주문목록_체험판.csv", [["진행 상태", "납품요구번호", "수요기관", "요청건명", "대리점", "접수지청", "담당자", "납품요구일", "납품기한", "금액", "계약유형", "종결"]].concat(
      list.map(function (o) { return [PMAP[o.progress].label, o.no, o.agency, o.title, dealerName(o.dealerId) || "미배정", o.branch, o.staff, o.date, deadline(o), amount(o), o.contract, o.closed ? "종결" : "진행중"] })))
    Demo.toast("주문 " + list.length + "건을 엑셀(CSV)로 내려받았습니다.")
  })
  Demo.on("assignDealer", function (v, el) {
    var o = orderById(el.getAttribute("data-id"))
    if (!o) return
    if (!v) {
      o.dealerId = null; o.progress = "unassigned"; o.settle = "none"; o.closed = false
      Demo.toast("대리점 배정을 취소했습니다.")
    } else {
      o.dealerId = v
      if (o.progress === "unassigned") o.progress = "waiting"
      Demo.toast(dealerName(v) + "에 배정했습니다. 대리점 응답을 기다립니다.")
    }
    R()
  })
  Demo.on("advance", function (d) {
    var o = orderById(d.id)
    if (!o) return
    var next = { waiting: "writing", writing: "review", review: "mes" }[o.progress]
    if (!next) return
    o.progress = next
    var msg = { writing: "대리점이 납품 서류를 작성하기 시작했습니다.", review: "관리자 확인 대기로 넘겼습니다. 정산 목록에 추가됩니다.", mes: "MES 업로드를 완료했습니다." }[next]
    R()
    Demo.toast(msg)
  })
  Demo.on("closeOrder", function (d) {
    var o = orderById(d.id)
    if (!o) return
    o.closed = true
    R()
    Demo.toast(o.no + " 주문을 종결 처리했습니다.")
  })
  Demo.on("receiveOrder", function (d) {
    var o = orderById(d.id)
    if (!o) return
    o.received = true
    R()
    Demo.toast("접수 처리했습니다.")
  })

  // 대리점
  Demo.on("df", function (v, el) { S.df[el.getAttribute("data-k")] = v; S.dpage = 1; R() })
  Demo.on("dpage", function (d) { S.dpage = Math.max(1, +d.p); R() })
  Demo.on("refreshDealers", function () { Demo.toast("MES 거래처 정보를 다시 불러왔습니다. 변경된 대리점이 없습니다.") })
  Demo.on("editDealer", function (d) { S.modal = { type: "dealer", id: d.id || null }; R() })
  Demo.on("saveDealer", function (v) {
    var name = (v.name || "").trim()
    if (!name) return Demo.toast("대리점명을 입력해 주세요.")
    var m = S.modal
    var rec = { name: name, region: v.region, manager: (v.manager || "").trim(), phone: (v.phone || "").trim(), memo: (v.memo || "").trim(), active: v.active === "1" }
    if (m.id) {
      var d = dealerById(m.id)
      Object.keys(rec).forEach(function (k) { d[k] = rec[k] })
      Demo.toast("대리점 정보를 저장했습니다.")
    } else {
      rec.id = "d" + ++dealerSeq
      S.dealers.unshift(rec)
      S.dpage = 1
      Demo.toast(name + " 대리점을 등록했습니다.")
    }
    S.modal = null
    R()
  })
  Demo.on("delDealer", function (d) {
    var dl = dealerById(d.id)
    var n = dealerStats(dl).count
    S.modal = { type: "confirm", title: "대리점 삭제", yes: "삭제", desc: E(dl.name) + " 대리점을 삭제할까요?" + (n ? " 배정된 주문 " + n + "건은 대리점 미배정으로 돌아갑니다." : ""), run: function () {
      S.orders.forEach(function (o) { if (o.dealerId === dl.id) { o.dealerId = null; o.progress = "unassigned"; o.settle = "none"; o.closed = false } })
      S.dealers = S.dealers.filter(function (x) { return x.id !== dl.id })
      Demo.toast(dl.name + " 대리점을 삭제했습니다.")
    } }
    R()
  })
  Demo.on("confirmYes", function () {
    var m = S.modal
    S.modal = null
    if (m && m.run) m.run()
    R()
  })

  // 품목 매핑
  Demo.on("mf", function (v, el) { S.mf[el.getAttribute("data-k")] = v; R() })
  Demo.on("editMap", function (d) { S.modal = { type: "map", id: d.id || null }; R() })
  Demo.on("saveMap", function (v) {
    var m = S.modal
    var rec = { type: v.type, name: (v.name || "").trim(), spec: (v.spec || "").trim(), mesName: (v.mesName || "").trim(), mesCode: (v.mesCode || "").trim(), price: Math.max(0, parseInt(v.price, 10) || 0), rate: Math.min(100, Math.max(0, parseFloat(v.rate) || 0)) }
    if (!rec.name || !rec.mesName) return Demo.toast("나라장터 품명과 MES 품명을 입력해 주세요.")
    var dup = mapByName(rec.name)
    if (dup && dup.id !== m.id) return Demo.toast("이미 매핑된 나라장터 품명입니다.")
    if (m.id) {
      var t = S.maps.filter(function (x) { return x.id === m.id })[0]
      Object.keys(rec).forEach(function (k) { t[k] = rec[k] })
      Demo.toast("매핑을 저장했습니다.")
    } else {
      rec.id = "m" + ++mapSeq
      rec.cat = rec.name.split(",")[0].trim()
      S.maps.push(rec)
      var hit = S.orders.filter(function (o) { return o.lines.some(function (l) { return l.name === rec.name }) }).length
      Demo.toast("매핑을 등록했습니다." + (hit ? " 주문 " + hit + "건의 미매핑이 해결되었습니다." : ""))
    }
    S.modal = m.back || null
    R()
  })
  Demo.on("delMap", function (d) {
    var t = S.maps.filter(function (x) { return x.id === d.id })[0]
    S.modal = { type: "confirm", title: "매핑 삭제", yes: "삭제", desc: "이 매핑을 삭제하면 해당 품목이 들어간 주문은 미매핑으로 표시됩니다.", run: function () {
      S.maps = S.maps.filter(function (x) { return x.id !== t.id })
      Demo.toast("매핑을 삭제했습니다.")
    } }
    R()
  })
  Demo.on("importMaps", function () { Demo.toast("체험판에서는 엑셀 업로드 대신 ‘매핑 등록’으로 직접 추가해 보세요.") })
  Demo.on("exportMaps", function () {
    download("품목매핑_체험판.csv", [["품목종류", "나라장터 품명", "규격", "MES 품명", "MES 품번", "조달 가격", "영업수수료 비율", "정산 금액"]].concat(
      S.maps.map(function (m) { return [m.type, m.name, m.spec, m.mesName, m.mesCode, m.price, m.rate + "%", Math.round((m.price * m.rate) / 100)] })))
    Demo.toast("매핑 " + S.maps.length + "건을 엑셀(CSV)로 내려받았습니다.")
  })

  // 정산
  Demo.on("sf", function (v, el) { S.sf[el.getAttribute("data-k")] = v; R() })
  Demo.on("sendSettle", function (d) {
    var o = orderById(d.id)
    if (!o) return
    var amt = settleAmount(o)
    o.settle = "sent"
    R()
    Demo.toast(dealerName(o.dealerId) + "에 정산서를 발송했습니다 · " + won(amt))
  })
  Demo.on("resendSettle", function (d) {
    var o = orderById(d.id)
    if (o) Demo.toast(dealerName(o.dealerId) + "에 정산서를 다시 보냈습니다.")
  })
  Demo.on("printSettle", function (d) {
    var o = orderById(d.id)
    if (o) Demo.toast(o.no + " 정산서를 인쇄용으로 준비했습니다 (체험판).")
  })

  // 환경설정
  Demo.on("saveSettings", function (v) {
    var s = S.settings
    Object.keys(v).forEach(function (k) { if (k in s) s[k] = String(v[k]).trim() })
    s.dueDays = String(dueDays())
    R()
    Demo.toast("설정을 저장했습니다.")
  })

  window.addEventListener("hashchange", function () { S.drawer = false; S.modal = null })
  Demo.mount(render)
  Demo.banner()
})()
