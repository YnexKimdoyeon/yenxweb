/* 와이넥스 포트폴리오 체험판 - (가상) 늘봄빌리지 통합 ERP
 * 화면 구조와 클래스는 실제 납품 시스템을 따르고, 데이터는 모두 가상이다. */
var K={"K3": "sticky top-0 z-30 flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 md:px-6", "K4": "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg -ml-1 md:hidden", "K5": "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch mx-1 hidden h-4 md:block", "K6": "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 size-8", "K7": "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 size-8 relative", "K8": "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch mx-1.5 h-6", "K9": "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 h-10 gap-2 px-2", "K10": "group/avatar relative flex shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten size-7", "K11": "flex size-full items-center justify-center rounded-full group-data-[size=sm]/avatar:text-xs bg-primary/10 text-xs font-semibold text-primary", "K12": "group/card flex flex-col overflow-hidden rounded-xl bg-card text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl gap-0 py-0", "K13": "group/button inline-flex shrink-0 items-center justify-center rounded-lg border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 size-8", "K14": "group/button inline-flex shrink-0 items-center justify-center rounded-lg border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2", "K15": "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2 py-0.5 text-xs whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80 rounded-full font-semibold", "K16": "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none bg-muted", "K17": "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", "K18": "flex items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 w-44", "K19": "flex items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 w-40", "K20": "group/button inline-flex shrink-0 items-center justify-center rounded-lg border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 ml-auto", "K21": "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground hover:bg-primary/80 h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2", "K22": "flex w-full items-start gap-4 border-l-4 px-4 py-3.5 text-left transition-colors hover:bg-muted focus-visible:outline-3 focus-visible:-outline-offset-2 focus-visible:outline-ring border-l-chart-2", "K23": "group/badge inline-flex h-5 w-fit items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80 shrink-0", "K26": "group/card-header @container/card-header auto-rows-min rounded-t-xl has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing) flex flex-row items-center gap-2 border-b px-4 py-3", "K27": "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2 py-0.5 text-xs whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80 ml-1 rounded-full font-semibold tabular-nums", "K28": "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5 ml-auto h-7 gap-0.5 px-2 text-xs text-muted-foreground", "K29": "flex w-full items-center gap-2 rounded-md px-2 py-2 text-left transition-colors hover:bg-muted", "K30": "min-w-12 shrink-0 text-right text-xs text-muted-foreground tabular-nums", "K32": "group/button shrink-0 items-center justify-center rounded-lg border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hidden sm:inline-flex", "K33": "flex items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 w-28", "K34": "group/input-group relative flex h-8 w-full items-center rounded-lg border border-input transition-colors outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 min-w-0 flex-1 basis-40 sm:w-56 sm:flex-none sm:basis-auto", "K35": "h-8 w-full min-w-0 border-input px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent", "K36": "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 order-last pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]", "K37": "group/button shrink-0 justify-center border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 flex items-center gap-2 text-sm shadow-none size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0", "K38": "flex items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 w-fit min-w-24", "K39": "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", "K49": "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground hover:bg-primary/80 size-8 tabular-nums pointer-events-none", "K50": "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 size-8 tabular-nums", "K51": "group/button shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 size-8 tabular-nums hidden sm:inline-flex", "K52": "flex items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ml-2 w-28", "K54": "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:ring-0 group-has-[:focus-visible]/field-label:not-data-checked:border-input after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground group-has-[:focus-visible]/field-label:data-checked:border-primary dark:data-checked:bg-primary", "K59": "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted cursor-pointer", "K64": "flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border bg-muted/50 px-4 py-3 text-sm", "K65": "group/tabs-list inline-flex w-fit items-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none bg-muted max-w-full justify-start overflow-x-auto", "K66": "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100 shrink-0", "K76": "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border px-2 py-0.5 text-xs whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! [a]:hover:bg-muted [a]:hover:text-muted-foreground rounded-md font-medium bg-warning/15 text-warning-foreground border-warning/30", "K77": "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border px-2 py-0.5 text-xs whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! [a]:hover:bg-muted [a]:hover:text-muted-foreground rounded-md font-medium bg-info/10 text-info border-info/20", "K78": "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border px-2 py-0.5 text-xs whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! [a]:hover:bg-muted [a]:hover:text-muted-foreground rounded-md font-medium bg-success/10 text-success border-success/25", "K82": "group/card flex flex-col overflow-hidden rounded-xl bg-card text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl gap-0 py-4", "K83": "flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground", "K84": "flex items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 w-32", "K90": "flex items-center gap-2 font-medium break-all text-primary underline-offset-4 hover:underline", "K94": "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", "K95": "group/card-header @container/card-header auto-rows-min items-start rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing) flex flex-col gap-3 sm:flex-row sm:items-center", "K96": "col-start-2 row-span-2 row-start-1 self-start justify-self-end flex w-full flex-col gap-2 sm:w-auto sm:flex-row", "K97": "flex items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 w-full sm:w-44", "K98": "group/input-group relative flex h-8 min-w-0 items-center rounded-lg border border-input transition-colors outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 w-full sm:w-64", "K99": "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]", "K104": "flex items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 w-36", "K108": "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80 rounded-md", "K111": "flex items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 w-48", "K122": "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border px-2 py-0.5 text-xs whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! [a]:hover:bg-muted [a]:hover:text-muted-foreground rounded-md font-medium bg-muted text-muted-foreground border-border", "K123": "flex snap-x gap-3 overflow-x-auto pb-1 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4", "K124": "group/card flex flex-col overflow-hidden rounded-xl bg-card text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl w-56 shrink-0 snap-start gap-0 py-4 sm:w-auto", "K125": "mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted-foreground", "K126": "group/card-header @container/card-header grid auto-rows-min rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing) flex-row flex-wrap items-center gap-3 border-b py-4", "K127": "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2 py-0.5 text-xs whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80 ml-2 rounded-full font-semibold", "K128": "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5 bg-background shadow-sm", "K129": "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5 text-muted-foreground", "K130": "border-r border-b bg-muted px-2 py-1.5 text-center text-sm font-semibold text-destructive", "K131": "border-r border-b bg-muted px-2 py-1.5 text-center text-sm font-semibold", "K132": "border-r border-b bg-muted px-2 py-1.5 text-center text-sm font-semibold text-info", "K133": "w-full rounded px-1 py-0.5 text-left text-xs leading-snug break-words hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring", "K134": "mt-auto w-fit rounded px-1 py-0.5 text-xs font-semibold text-primary hover:underline", "K135": "flex min-h-28 min-w-0 flex-col gap-0.5 border-r border-b p-1.5 bg-accent/40", "K136": "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent py-0.5 font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! bg-primary text-primary-foreground [a]:hover:bg-primary/80 h-5 rounded-md px-1.5 text-xs", "K137": "rounded-md px-3 py-1 text-sm font-medium transition-colors bg-background text-foreground shadow-sm", "K138": "rounded-md px-3 py-1 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground", "K142": "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border py-0.5 text-xs whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground rounded-sm px-1.5 font-normal", "K155": "group/input-group relative flex h-8 w-full min-w-0 items-center rounded-lg border border-input transition-colors outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5", "K156": "group/card-header @container/card-header auto-rows-min rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing) flex flex-row items-center gap-2 border-b py-4", "K161": "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted cursor-pointer bg-accent/60", "K164": "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! [a]:hover:bg-muted [a]:hover:text-muted-foreground bg-warning/15 text-warning-foreground border-warning/30", "K165": "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5", "K166": "group/button inline-flex shrink-0 items-center justify-center border bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5", "K176": "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5", "K180": "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center overflow-hidden border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! border-border [a]:hover:bg-muted [a]:hover:text-muted-foreground gap-1 rounded-full text-muted-foreground", "K182": "px-(--card-spacing) flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start", "K183": "group/button inline-flex shrink-0 items-center rounded-lg border bg-clip-padding text-sm whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 w-full justify-between font-normal", "K184": "h-8 min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 w-full", "K185": "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)", "K186": "flex h-full w-full min-w-0 flex-col items-center gap-1 rounded-xl border bg-background px-2 py-3 text-center hover:bg-muted/60", "K187": "inline-flex items-center gap-1 self-end rounded-md bg-primary/10 px-1.5 py-0.5 text-xs font-bold text-primary tabular-nums", "K188": "flex items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 w-full", "K189": "flex h-full min-w-0 flex-col items-center gap-1 rounded-xl border px-3 py-3 text-center hover:bg-muted/60", "K190": "flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary", "K191": "rounded-md px-3 py-1 text-sm font-medium transition-colors bg-primary text-primary-foreground shadow-sm", "K198": "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border px-2 py-0.5 text-xs whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! [a]:hover:bg-muted [a]:hover:text-muted-foreground rounded-md font-medium bg-destructive/10 text-destructive border-destructive/20", "K213": "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing) border-b py-4", "K217": "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border px-2 py-0.5 text-xs whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3! [a]:hover:bg-muted [a]:hover:text-muted-foreground rounded-md font-medium border-dashed border-border bg-transparent text-muted-foreground/60", "K218": "px-(--card-spacing) flex items-start gap-2.5 border-t py-4 text-sm text-muted-foreground", "K219": "flex items-start gap-2.5 rounded-lg border-2 border-border bg-muted px-4 py-3", "K220": "group/input-group relative flex h-8 w-full items-center rounded-lg border border-input transition-colors outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 min-w-0 flex-1 basis-40 sm:w-64 sm:flex-none sm:basis-auto", "K221": "flex items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 w-fit min-w-36"};
var SB={"sidebar-wrapper": "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", "sidebar": "group peer hidden text-sidebar-foreground md:block", "sidebar-gap": "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 group-data-[collapsible=icon]:w-(--sidebar-width-icon)", "sidebar-container": "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", "sidebar-inner": "flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border", "sidebar-header": "flex flex-col gap-2 p-2 border-b border-sidebar-border", "sidebar-content": "no-scrollbar flex min-h-0 flex-1 flex-col gap-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden", "sidebar-group": "relative flex w-full min-w-0 flex-col p-2", "sidebar-group-label": "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "sidebar-menu": "flex w-full min-w-0 flex-col gap-0", "collapsible": "group/collapsible", "sidebar-menu-item": "group/menu-item relative", "collapsible-trigger": "peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm font-medium", "sidebar-menu-sub": "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5 group-data-[collapsible=icon]:hidden", "sidebar-menu-sub-item": "group/menu-sub-item relative", "sidebar-menu-sub-button": "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden group-data-[collapsible=icon]:hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "sidebar-footer": "flex flex-col gap-2 p-2 border-t border-sidebar-border", "sidebar-inset": "relative flex w-full flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 min-w-0", "sidebar-trigger": "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50 size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg -ml-1 md:hidden"};
var ICONS={"building": "<path d=\"M12 10h.01\"></path><path d=\"M12 14h.01\"></path><path d=\"M12 6h.01\"></path><path d=\"M16 10h.01\"></path><path d=\"M16 14h.01\"></path><path d=\"M16 6h.01\"></path><path d=\"M8 10h.01\"></path><path d=\"M8 14h.01\"></path><path d=\"M8 6h.01\"></path><path d=\"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3\"></path><rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\"></rect>", "file-pen-line": "<path d=\"M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z\"></path><path d=\"M14.487 7.858A1 1 0 0 1 14 7V2\"></path><path d=\"M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516\"></path><path d=\"M8 18h1\"></path>", "chevron-right": "<path d=\"m9 18 6-6-6-6\"></path>", "calendar-days": "<path d=\"M8 2v4\"></path><path d=\"M16 2v4\"></path><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect><path d=\"M3 10h18\"></path><path d=\"M8 14h.01\"></path><path d=\"M12 14h.01\"></path><path d=\"M16 14h.01\"></path><path d=\"M8 18h.01\"></path><path d=\"M12 18h.01\"></path><path d=\"M16 18h.01\"></path>", "building2": "<path d=\"M10 12h4\"></path><path d=\"M10 8h4\"></path><path d=\"M14 21v-3a2 2 0 0 0-4 0v3\"></path><path d=\"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2\"></path><path d=\"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16\"></path>", "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><path d=\"M16 3.128a4 4 0 0 1 0 7.744\"></path><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle>", "id-card": "<path d=\"M16 10h2\"></path><path d=\"M16 14h2\"></path><path d=\"M6.17 15a3 3 0 0 1 5.66 0\"></path><circle cx=\"9\" cy=\"11\" r=\"2\"></circle><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"></rect>", "heart-handshake": "<path d=\"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762\"></path>", "calculator": "<rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"></rect><line x1=\"8\" x2=\"16\" y1=\"6\" y2=\"6\"></line><line x1=\"16\" x2=\"16\" y1=\"14\" y2=\"18\"></line><path d=\"M16 10h.01\"></path><path d=\"M12 10h.01\"></path><path d=\"M8 10h.01\"></path><path d=\"M12 14h.01\"></path><path d=\"M8 14h.01\"></path><path d=\"M12 18h.01\"></path><path d=\"M8 18h.01\"></path>", "settings": "<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>", "panel-left": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"></rect><path d=\"M9 3v18\"></path>", "maximize2": "<path d=\"M15 3h6v6\"></path><path d=\"m21 3-7 7\"></path><path d=\"m3 21 7-7\"></path><path d=\"M9 21H3v-6\"></path>", "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M12 2v2\"></path><path d=\"M12 20v2\"></path><path d=\"m4.93 4.93 1.41 1.41\"></path><path d=\"m17.66 17.66 1.41 1.41\"></path><path d=\"M2 12h2\"></path><path d=\"M20 12h2\"></path><path d=\"m6.34 17.66-1.41 1.41\"></path><path d=\"m19.07 4.93-1.41 1.41\"></path>", "bell": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"></path><path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"></path>", "chevron-down": "<path d=\"m6 9 6 6 6-6\"></path>", "chevron-left": "<path d=\"m15 18-6-6 6-6\"></path>", "calendar-range": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect><path d=\"M16 2v4\"></path><path d=\"M3 10h18\"></path><path d=\"M8 2v4\"></path><path d=\"M17 14h-6\"></path><path d=\"M13 18H7\"></path><path d=\"M7 14h.01\"></path><path d=\"M17 18h.01\"></path>", "plus": "<path d=\"M5 12h14\"></path><path d=\"M12 5v14\"></path>", "file-check": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"></path><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"></path><path d=\"m9 15 2 2 4-4\"></path>", "plane": "<path d=\"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z\"></path>", "megaphone": "<path d=\"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z\"></path><path d=\"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14\"></path><path d=\"M8 6v8\"></path>", "paperclip": "<path d=\"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551\"></path>", "share2": "<circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\"></line><line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\"></line>", "search": "<path d=\"m21 21-4.34-4.34\"></path><circle cx=\"11\" cy=\"11\" r=\"8\"></circle>", "download": "<path d=\"M12 15V3\"></path><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><path d=\"m7 10 5 5 5-5\"></path>", "ellipsis": "<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle>", "square-pen": "<path d=\"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z\"></path>", "file-plus-corner": "<path d=\"M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35\"></path><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"></path><path d=\"M14 19h6\"></path><path d=\"M17 16v6\"></path>", "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>", "file-plus": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"></path><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"></path><path d=\"M9 15h6\"></path><path d=\"M12 18v-6\"></path>", "file-text": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"></path><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"></path><path d=\"M10 9H8\"></path><path d=\"M16 13H8\"></path><path d=\"M16 17H8\"></path>", "hard-drive": "<path d=\"M10 16h.01\"></path><path d=\"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path><path d=\"M21.946 12.013H2.054\"></path><path d=\"M6 16h.01\"></path>", "calendar-clock": "<path d=\"M16 14v2.2l1.6 1\"></path><path d=\"M16 2v4\"></path><path d=\"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5\"></path><path d=\"M3 10h5\"></path><path d=\"M8 2v4\"></path><circle cx=\"16\" cy=\"16\" r=\"6\"></circle>", "settings2": "<path d=\"M14 17H5\"></path><path d=\"M19 7h-9\"></path><circle cx=\"17\" cy=\"17\" r=\"3\"></circle><circle cx=\"7\" cy=\"7\" r=\"3\"></circle>", "list-checks": "<path d=\"M13 5h8\"></path><path d=\"M13 12h8\"></path><path d=\"M13 19h8\"></path><path d=\"m3 17 2 2 4-4\"></path><path d=\"m3 7 2 2 4-4\"></path>", "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"m9 12 2 2 4-4\"></path>", "award": "<path d=\"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526\"></path><circle cx=\"12\" cy=\"8\" r=\"6\"></circle>", "calendar": "<path d=\"M8 2v4\"></path><path d=\"M16 2v4\"></path><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect><path d=\"M3 10h18\"></path>", "archive": "<rect width=\"20\" height=\"5\" x=\"2\" y=\"3\" rx=\"1\"></rect><path d=\"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8\"></path><path d=\"M10 12h4\"></path>", "book-lock": "<path d=\"M18 6V4a2 2 0 1 0-4 0v2\"></path><path d=\"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"></path><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10\"></path><rect x=\"12\" y=\"6\" width=\"8\" height=\"5\" rx=\"1\"></rect>", "wallet": "<path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"></path><path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\"></path>", "receipt": "<path d=\"M12 17V7\"></path><path d=\"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8\"></path><path d=\"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z\"></path>", "badge-check": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"></path><path d=\"m9 12 2 2 4-4\"></path>", "file-exclamation-point": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"></path><path d=\"M12 9v4\"></path><path d=\"M12 17h.01\"></path>", "wrench": "<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z\"></path>", "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M12 6v6l4 2\"></path>", "ban": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M4.929 4.929 19.07 19.071\"></path>", "car": "<path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2\"></path><circle cx=\"7\" cy=\"17\" r=\"2\"></circle><path d=\"M9 17h6\"></path><circle cx=\"17\" cy=\"17\" r=\"2\"></circle>", "calendar-check": "<path d=\"M8 2v4\"></path><path d=\"M16 2v4\"></path><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect><path d=\"M3 10h18\"></path><path d=\"m9 16 2 2 4-4\"></path>", "timer": "<line x1=\"10\" x2=\"14\" y1=\"2\" y2=\"2\"></line><line x1=\"12\" x2=\"15\" y1=\"14\" y2=\"11\"></line><circle cx=\"12\" cy=\"14\" r=\"8\"></circle>", "box": "<path d=\"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z\"></path><path d=\"m3.3 7 8.7 5 8.7-5\"></path><path d=\"M12 22V12\"></path>", "clipboard-list": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"></rect><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><path d=\"M12 11h4\"></path><path d=\"M12 16h4\"></path><path d=\"M8 11h.01\"></path><path d=\"M8 16h.01\"></path>", "chart-column": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"></path><path d=\"M18 17V9\"></path><path d=\"M13 17V5\"></path><path d=\"M8 17v-3\"></path>", "user-plus": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><line x1=\"19\" x2=\"19\" y1=\"8\" y2=\"14\"></line><line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\"></line>", "user-check": "<path d=\"m16 11 2 2 4-4\"></path><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle>", "user-minus": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\"></line>", "lock-open": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"></path>", "printer": "<path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path><path d=\"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6\"></path><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\" rx=\"1\"></rect>", "pencil": "<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"></path><path d=\"m15 5 4 4\"></path>", "minus": "<path d=\"M5 12h14\"></path>", "check": "<path d=\"M20 6 9 17l-5-5\"></path>", "book-open": "<path d=\"M12 7v14\"></path><path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\"></path>", "sliders-horizontal": "<path d=\"M10 5H3\"></path><path d=\"M12 19H3\"></path><path d=\"M14 3v4\"></path><path d=\"M16 17v4\"></path><path d=\"M21 12h-9\"></path><path d=\"M21 19h-5\"></path><path d=\"M21 5h-7\"></path><path d=\"M8 10v4\"></path><path d=\"M8 12H3\"></path>", "arrow-up-right": "<path d=\"M7 7h10v10\"></path><path d=\"M7 17 17 7\"></path>", "chevron-up": "<path d=\"m18 15-6-6-6 6\"></path>", "heart-pulse": "<path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\"></path><path d=\"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27\"></path>", "eye": "<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>", "arrow-down-to-line": "<path d=\"M12 17V3\"></path><path d=\"m6 11 6 6 6-6\"></path><path d=\"M19 21H5\"></path>", "arrow-up-from-line": "<path d=\"m18 9-6-6-6 6\"></path><path d=\"M12 3v14\"></path><path d=\"M5 21h14\"></path>", "triangle-alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"></path><path d=\"M12 9v4\"></path><path d=\"M12 17h.01\"></path>", "coffee": "<path d=\"M10 2v2\"></path><path d=\"M14 2v2\"></path><path d=\"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1\"></path><path d=\"M6 2v2\"></path>", "shield": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"></path>", "info": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M12 16v-4\"></path><path d=\"M12 8h.01\"></path>", "route": "<circle cx=\"6\" cy=\"19\" r=\"3\"></circle><path d=\"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15\"></path><circle cx=\"18\" cy=\"5\" r=\"3\"></circle>", "user-round": "<circle cx=\"12\" cy=\"8\" r=\"5\"></circle><path d=\"M20 21a8 8 0 0 0-16 0\"></path>", "layers": "<path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\"></path><path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\"></path><path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\"></path>", "x": "<path d=\"M18 6 6 18\"></path><path d=\"m6 6 12 12\"></path>", "moon": "<path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\"></path>", "trash2": "<path d=\"M3 6h18\"></path><path d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\"></path><path d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\"></path><line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"17\"></line><line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"17\"></line>", "log-out": "<path d=\"m16 17 5-5-5-5\"></path><path d=\"M21 12H9\"></path><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path>", "user-round-cog": "<path d=\"M2 21a8 8 0 0 1 10.434-7.62\"></path><circle cx=\"10\" cy=\"8\" r=\"5\"></circle><circle cx=\"18\" cy=\"18\" r=\"3\"></circle>", "message-square": "<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>"};
;(function () {
"use strict"
var esc = Demo.esc

/* ───────── 공용 도구 ───────── */
var TH_L = "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0"
var TH_C = "h-10 px-2 align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0"
var TD_W = "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0"
var TD_N = "p-2 align-middle [&:has([role=checkbox])]:pr-0"
var DOW = ["일", "월", "화", "수", "목", "금", "토"]

function ic(name, extra) {
  return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-' +
    name + (extra ? " " + extra : "") + '" aria-hidden="true">' + (ICONS[name] || "") + "</svg>"
}
function pad(n) { return String(n).padStart(2, "0") }
function fmt(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) }
function parse(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]) }
function addDays(s, n) { var d = parse(s); d.setDate(d.getDate() + n); return fmt(d) }
function dowOf(s) { return DOW[parse(s).getDay()] }
function korDate(s) { var d = parse(s); return d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 (" + DOW[d.getDay()] + ")" }
function md(s) { return s.slice(5).replace("-", ".") }
var TODAY = Demo.day(0)
var YEAR = TODAY.slice(0, 4)
var MONTH = TODAY.slice(0, 7)

// 결정적 난수(새로고침해도 같은 가상 데이터)
var seed = 20261014
function rnd() { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648 }
function pick(a) { return a[Math.floor(rnd() * a.length)] }
function rint(a, b) { return a + Math.floor(rnd() * (b - a + 1)) }

function opts(list, value) {
  return list.map(function (o) {
    var v = Array.isArray(o) ? o[0] : o, l = Array.isArray(o) ? o[1] : o
    return '<option value="' + esc(v) + '"' + (String(v) === String(value) ? " selected" : "") + ">" + esc(l) + "</option>"
  }).join("")
}
function labelOf(list, value) {
  for (var i = 0; i < list.length; i++) {
    var o = list[i], v = Array.isArray(o) ? o[0] : o
    if (String(v) === String(value)) return Array.isArray(o) ? o[1] : o
  }
  return value
}

/* ───────── 가상 조직 · 직원 ───────── */
var DEPTS = ["운영지원팀", "생활지원1팀", "생활지원2팀", "건강지원팀", "평생교육팀"]
var STAFF_SRC = [
  ["김민준", "운영지원팀", "사무국장"], ["이서연", "운영지원팀", "주임"], ["박지훈", "운영지원팀", "사회복지사"],
  ["최유진", "생활지원1팀", "팀장"], ["정하늘", "생활지원1팀", "생활지원교사"], ["강도윤", "생활지원1팀", "생활지원교사"],
  ["조수빈", "생활지원1팀", "생활지원교사"], ["윤서준", "생활지원1팀", "생활지원교사"], ["장예린", "생활지원2팀", "팀장"],
  ["임현우", "생활지원2팀", "생활지원교사"], ["한지민", "생활지원2팀", "생활지원교사"], ["오세훈", "생활지원2팀", "생활지원교사"],
  ["서다은", "생활지원2팀", "생활지원교사"], ["신우진", "건강지원팀", "팀장"], ["권나영", "건강지원팀", "간호사"],
  ["황민재", "건강지원팀", "영양사"], ["안소희", "건강지원팀", "조리원"], ["송재현", "평생교육팀", "팀장"],
  ["류하은", "평생교육팀", "사회복지사"], ["전태윤", "평생교육팀", "사회복지사"], ["홍시우", "운영지원팀", "시설관리"],
  ["문가은", "생활지원1팀", "생활지원교사"], ["배준호", "생활지원2팀", "생활지원교사"], ["노은채", "평생교육팀", "사회복지사"]
]
var STAFF = STAFF_SRC.map(function (s, i) {
  return {
    id: i + 1, name: s[0], dept: s[1], pos: s[2], ext: String(201 + i),
    phone: "010-0000-" + String(1001 + i * 37).slice(-4),
    hired: (2014 + (i % 11)) + "-" + pad(1 + (i * 5) % 12) + "-" + pad(1 + (i * 7) % 27),
    status: i === 22 ? "휴직" : "재직", login: "user" + pad(i + 1),
    role: s[2] === "팀장" || s[2] === "사무국장" ? "부서관리자" : "일반직원",
    last: addDays(TODAY, -(i % 6)) + " " + pad(8 + (i % 9)) + ":" + pad((i * 13) % 60)
  }
})
var ME = { name: "관리자", dept: "운영지원팀", pos: "시스템관리자" }
function staffNames() { return STAFF.map(function (s) { return s.name }) }
function deptOf(name) { for (var i = 0; i < STAFF.length; i++) if (STAFF[i].name === name) return STAFF[i].dept; return ME.dept }
var RES = ["이용자 A", "이용자 B", "이용자 C", "이용자 D", "이용자 E", "이용자 F", "이용자 G", "이용자 H", "이용자 I", "이용자 J", "이용자 K", "이용자 L"]
var HOUSES = [
  ["공동형주택", ["A동 1호", "A동 2호", "A동 3호", "A동 4호", "A동 5호"]],
  ["내부 개별형주택", ["B동 1호", "B동 2호", "B동 3호"]],
  ["외부 개별형주택", ["C동 1호", "C동 2호", "C동 3호", "C동 4호", "C동 5호"]],
  ["자립형주택", ["자립주택 1"]]
]

/* ───────── 화면 상태 ───────── */
var S = {
  open: {},          // 펼친 사이드바 묶음
  modal: null,       // { title, body, submit, wide }
  pop: null,         // { html, x, y }
  mobileNav: false,
  dark: false,
  ui: {},            // 목록 화면별 검색·쪽 상태
  lastPath: null
}
function U(key, def) {
  if (!S.ui[key]) S.ui[key] = Object.assign({ q: "", qf: "", page: 1, size: 20, f: {}, sort: 0, tab: 0 }, def || {})
  return S.ui[key]
}
function nextId(list) { return list.reduce(function (m, x) { return Math.max(m, x.id) }, 0) + 1 }

/* ───────── 사이드바 메뉴 ───────── */
var NAV = [
  { key: "approval", label: "전자결재", icon: "file-pen-line", items: [["/documents", "문서관리"], ["/documents?box=mine", "내문서함"], ["/attachments", "첨부파일자료실"], ["/m/forms", "문서양식함"], ["/records", "기록관리대장"]] },
  { key: "work", label: "업무관리", icon: "calendar-days", items: [["/", "일정관리"], ["/worklog", "업무일지"], ["/board/notice", "게시판"], ["/board/circular", "공람문서"], ["/board/archive", "자료실"], ["/board/menu", "주간식단표"]] },
  { key: "admin", label: "행정지원", icon: "building2", items: [["/card", "카드사용관리"], ["/facility", "시설보수관리"], ["/vehicle", "차량운행관리"], ["/m/supplies", "비품관리"], ["/hall", "다목적홀 사용"], ["/m/sponsor", "후원·봉사 관리"]] },
  { key: "group", label: "그룹웨어", icon: "users", items: [["/surveys", "설문조사"], ["/m/resources", "자원관리"], ["/board/welfare", "직원복지회"], ["/board/labor", "노사협의회"], ["/staff", "직원현황"], ["/messenger", "그룹메신저"], ["/board/director", "원장실(고충상담)"]] },
  { key: "hr", label: "인사관리", icon: "id-card", items: [["/m/hr-card", "인사카드"], ["/leave", "연차관리"], ["/overtime", "근태관리(시간외)"], ["/trip", "출장명령및복명"], ["/m/certificates", "제증명발급"], ["/m/training", "교육관리"]] },
  { key: "service", label: "서비스기록", icon: "heart-handshake", items: [["/m/daily-log", "주거지원"], ["/m/isp", "개인별지원"], ["/m/medical", "의료관리"], ["/m/education", "평생교육"], ["/m/meals", "급식관리"], ["/m/resident-cash", "이용자금전출납"], ["/m/resedu-plans", "이용자교육"]] },
  { key: "acct", label: "회계", icon: "calculator", items: [["/m/budget", "세입/세출"], ["/m/resolution", "품의/결의서관리"], ["/m/ledger", "경리회계"], ["/m/payroll", "급여"]] },
  { key: "sys", label: "시스템관리", icon: "settings", items: [["/users", "사용자관리"], ["/departments", "권한설정"], ["/approval-paths", "결재경로설정"], ["/m/popup", "팝업관리"], ["/m/seal", "직인 및 로고관리"]] }
]
// 현재 경로가 어느 메뉴에 속하는지
function findNav(route) {
  var best = null, bestLen = -1
  NAV.forEach(function (g) {
    g.items.forEach(function (it) {
      var href = it[0], qi = href.indexOf("?"), p = qi < 0 ? href : href.slice(0, qi)
      var q = qi < 0 ? null : href.slice(qi + 1).split("=")
      var match = p === "/" ? route.path === "/" : (route.path === p || route.path.indexOf(p + "/") === 0)
      if (!match) return
      var len = p.length + (q ? 100 : 0)
      if (q && route.query[q[0]] !== q[1]) return
      if (len > bestLen) { best = { group: g, item: it }; bestLen = len }
    })
  })
  return best
}

function sidebarInner(active) {
  var h = '<div data-slot="sidebar-header" data-sidebar="header" class="' + SB["sidebar-header"] + '">' +
    '<div class="flex items-center gap-2.5 px-1.5 py-1.5"><div class="flex size-9 shrink-0 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">' + ic("building", "size-5") + "</div>" +
    '<div class="flex min-w-0 flex-col"><span class="truncate text-sm font-bold text-sidebar-foreground">(가상) 늘봄빌리지</span><span class="truncate text-xs text-muted-foreground">통합 ERP 시스템</span></div></div></div>'
  h += '<div data-slot="sidebar-content" data-sidebar="content" class="' + SB["sidebar-content"] + '"><div data-slot="sidebar-group" data-sidebar="group" class="' + SB["sidebar-group"] + '">' +
    '<div data-slot="sidebar-group-label" data-sidebar="group-label" class="' + SB["sidebar-group-label"] + '">업무 메뉴</div>' +
    '<ul data-slot="sidebar-menu" data-sidebar="menu" class="' + SB["sidebar-menu"] + '">'
  NAV.forEach(function (g) {
    var isActive = active && active.group === g
    var open = !!S.open[g.key]
    h += "<div " + (open ? 'data-open=""' : 'data-closed=""') + ' data-slot="collapsible" class="group/collapsible"><li data-slot="sidebar-menu-item" data-sidebar="menu-item" class="group/menu-item relative">' +
      '<button type="button" data-slot="collapsible-trigger" data-sidebar="menu-button" data-size="default"' + (isActive ? ' data-active=""' : "") + (open ? ' data-panel-open=""' : "") +
      ' aria-expanded="' + open + '" class="' + SB["collapsible-trigger"] + '" data-act="navGroup" data-key="' + g.key + '">' +
      ic(g.icon) + "<span>" + g.label + "</span>" + ic("chevron-right", "ml-auto transition-transform duration-200 group-data-[open]/collapsible:rotate-90") + "</button>"
    if (open) {
      h += '<div data-open="" data-slot="collapsible-content"><ul data-slot="sidebar-menu-sub" data-sidebar="menu-sub" class="' + SB["sidebar-menu-sub"] + '">'
      g.items.forEach(function (it) {
        var on = active && active.item === it
        h += '<li data-slot="sidebar-menu-sub-item" data-sidebar="menu-sub-item" class="group/menu-sub-item relative"><a data-slot="sidebar-menu-sub-button" data-sidebar="menu-sub-button" data-size="md"' +
          (on ? ' data-active="" aria-current="page"' : "") + ' class="' + SB["sidebar-menu-sub-button"] + '" href="#' + it[0] + '"><span>' + esc(it[1]) + "</span></a></li>"
      })
      h += "</ul></div>"
    }
    h += "</li></div>"
  })
  h += "</ul></div></div>"
  h += '<div data-slot="sidebar-footer" data-sidebar="footer" class="' + SB["sidebar-footer"] + '"><div class="px-2 py-1.5 text-xs text-muted-foreground"><p class="font-medium text-sidebar-foreground">인트라넷 v4.0</p><p>© 2026 늘봄빌리지 (가상)</p></div></div>'
  return h
}

function pendingCount() {
  return DOCS.filter(function (d) { return isMyTurn(d) }).length + LEAVES.filter(function (l) { return l.status === "승인대기" }).length
}

function shell(route, groupLabel, title, content) {
  var active = findNav(route)
  var side = sidebarInner(active)
  var h = '<div data-slot="sidebar-wrapper" style="--sidebar-width:16rem;--sidebar-width-icon:3rem" class="' + SB["sidebar-wrapper"] + '">' +
    '<div class="' + SB.sidebar + '" data-state="expanded" data-collapsible="" data-variant="sidebar" data-side="left" data-slot="sidebar">' +
    '<div data-slot="sidebar-gap" class="' + SB["sidebar-gap"] + '"></div>' +
    '<div data-slot="sidebar-container" data-side="left" class="' + SB["sidebar-container"] + '"><div data-sidebar="sidebar" data-slot="sidebar-inner" class="' + SB["sidebar-inner"] + '">' + side + "</div></div></div>"
  var n = pendingCount()
  h += '<main data-slot="sidebar-inset" class="' + SB["sidebar-inset"] + '">' +
    '<header class="' + K.K3 + '">' +
    '<button type="button" data-slot="sidebar-trigger" data-sidebar="trigger" class="' + K.K4 + '" data-act="mobileNav">' + ic("panel-left") + '<span class="sr-only">메뉴 열고 닫기</span></button>' +
    '<div class="flex min-w-0 items-center gap-2"><span class="hidden shrink-0 text-sm text-muted-foreground md:inline">' + esc(groupLabel) + '</span><div data-orientation="vertical" role="separator" aria-orientation="vertical" data-slot="separator" class="' + K.K5 + '"></div><h1 class="truncate text-base font-bold text-foreground">' + esc(title) + "</h1></div>" +
    '<div class="ml-auto flex shrink-0 items-center gap-0.5">' +
    '<span class="hidden md:inline-flex"><button type="button" data-slot="tooltip-trigger" aria-label="화면감추기" title="전체화면" class="' + K.K6 + '" data-act="fullscreen">' + ic("maximize2") + "</button></span>" +
    '<a role="button" data-slot="tooltip-trigger" aria-label="시스템설정" title="시스템설정" class="' + K.K6 + '" href="#/users">' + ic("settings") + "</a>" +
    '<button type="button" data-slot="tooltip-trigger" aria-label="' + (S.dark ? "라이트 모드로 전환" : "다크 모드로 전환") + '" title="테마" class="' + K.K6 + '" data-act="theme">' + ic(S.dark ? "moon" : "sun") + "</button>" +
    '<button type="button" data-slot="tooltip-trigger" aria-label="알림, ' + (n ? "할 일 " + n + "건" : "할 일 없음") + '" title="알림" aria-haspopup="menu" class="' + K.K7 + '" data-act="bell">' + ic("bell") +
    (n ? '<span class="demo-dot" aria-hidden="true"></span>' : "") + "</button>" +
    '<div data-orientation="vertical" role="separator" aria-orientation="vertical" data-slot="separator" class="' + K.K8 + '"></div>' +
    '<button type="button" data-slot="dropdown-menu-trigger" aria-haspopup="menu" class="' + K.K9 + '" data-act="userMenu"><span data-slot="avatar" data-size="default" class="' + K.K10 + '"><span data-slot="avatar-fallback" class="' + K.K11 + '">관</span></span>' +
    '<div class="hidden flex-col items-start leading-tight sm:flex"><span class="text-sm font-semibold">관리자</span><span class="text-xs text-muted-foreground">' + ME.dept + "</span></div>" + ic("chevron-down", "hidden size-4 text-muted-foreground sm:block") + "</button>" +
    "</div></header>" +
    '<main class="flex-1 overflow-x-hidden bg-background p-4 md:p-6"><div class="mx-auto flex w-full max-w-[1600px] flex-col gap-5">' + content + "</div></main></main></div>"
  if (S.mobileNav) {
    h += '<div class="demo-overlay" data-act="mobileNavClose"></div><div class="demo-drawer text-sidebar-foreground"><div data-sidebar="sidebar" data-slot="sidebar-inner" class="' + SB["sidebar-inner"] + '">' + side + "</div></div>"
  }
  if (S.modal) h += modalHtml(S.modal)
  if (S.pop) h += '<div class="demo-pop-bg" data-act="popClose"></div><div class="demo-pop bg-popover text-popover-foreground ring-1 ring-foreground/10 rounded-lg p-1" role="menu" style="top:' + S.pop.y + "px;" + (S.pop.right != null ? "right:" + S.pop.right + "px" : "left:" + S.pop.x + "px") + '">' + S.pop.html + "</div>"
  return h
}

/* ───────── 화면 조각 ───────── */
function pageHeader(title, desc, actions) {
  return '<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div class="flex flex-col gap-1"><h1 class="text-xl font-bold text-foreground text-balance">' + esc(title) + "</h1>" +
    '<p class="text-sm text-muted-foreground text-pretty">' + esc(desc) + "</p></div>" +
    (actions ? '<div class="flex shrink-0 items-center gap-2"><div class="flex flex-wrap items-center gap-2">' + actions + "</div></div>" : "") + "</div>"
}
function btn(label, icon, act, attrs, cls) {
  return '<button type="button" data-slot="button" class="' + (cls || K.K14) + '"' + (act ? ' data-act="' + act + '"' : "") + (attrs || "") + ">" + (icon ? ic(icon) : "") + esc(label) + "</button>"
}
function pbtn(label, icon, act, attrs) { return btn(label, icon, act, attrs, K.K21) }
function excelBtn() { return btn("엑셀", "download", "excel") }
function kpis(list) {
  return '<div class="grid grid-cols-2 gap-3 lg:grid-cols-4">' + list.map(function (k) {
    return '<div data-slot="card" data-size="default" class="' + K.K82 + '"><div data-slot="card-content" class="flex items-center gap-3 px-4"><div class="' + K.K83 + '">' + ic(k[0], "size-5") + '</div><div class="min-w-0">' +
      '<p class="line-clamp-2 text-xs break-keep text-muted-foreground">' + esc(k[1]) + '</p><p class="text-lg font-bold tabular-nums leading-tight text-foreground">' + esc(k[2]) + "</p>" +
      (k[3] ? '<p class="line-clamp-2 text-xs break-keep text-muted-foreground">' + esc(k[3]) + "</p>" : "") + "</div></div></div>"
  }).join("") + "</div>"
}
function tabs(list, active, act, wide) {
  return '<div data-orientation="horizontal" data-slot="tabs" class="group/tabs flex gap-2 data-horizontal:flex-col"><div role="tablist" data-orientation="horizontal" data-slot="tabs-list" data-variant="default" class="' + (wide ? K.K65 : K.K16) + '">' +
    list.map(function (t, i) {
      var on = i === active
      return '<button type="button" role="tab" data-orientation="horizontal"' + (on ? ' data-active=""' : "") + ' aria-selected="' + on + '" data-slot="tabs-trigger" class="' + (wide ? K.K66 : K.K17) + '" data-act="' + act + '" data-i="' + i + '">' + esc(t) + "</button>"
    }).join("") + "</div></div>"
}
function navPills(label, list, activeHref) {
  return '<nav aria-label="' + esc(label) + ' 탭" class="flex w-fit max-w-full flex-wrap gap-1 rounded-lg bg-muted p-1">' + list.map(function (t, i) {
    var on = i === 0
    return '<a ' + (on ? 'aria-current="page" ' : "") + 'class="' + (on ? K.K137 : K.K138) + '" href="#' + (on ? activeHref : activeHref) + '"' + (on ? "" : ' data-act="subTab" data-name="' + esc(t) + '"') + ">" + esc(t) + "</a>"
  }).join("") + "</nav>"
}
function sel(cls, label, value, list, act, data) {
  return '<div role="combobox" aria-label="' + esc(label) + '" data-slot="select-trigger" data-size="default" class="' + cls + '" style="position:relative"><span class="truncate">' + esc(labelOf(list, value)) + "</span>" +
    ic("chevron-down", "pointer-events-none size-4 text-muted-foreground") + '<select class="demo-native-select" aria-label="' + esc(label) + '" data-change="' + act + '"' + (data || "") + ">" + opts(list, value) + "</select></div>"
}
function badge(kind, text) {
  var m = { ok: K.K78, info: K.K77, warn: K.K76, muted: K.K122, bad: K.K198, sec: K.K108 }
  return '<span data-slot="badge" data-variant="outline" class="' + (m[kind] || K.K122) + '">' + esc(text) + "</span>"
}
function statusBadge(s) {
  var map = { "완료": "ok", "승인": "ok", "결재완료": "ok", "처리완료": "ok", "사용": "ok", "재직": "ok", "진행중": "info", "결재중": "info", "처리중": "info", "접수": "info", "진행": "info", "게시중": "info", "예정": "muted",
    "결재대기": "warn", "승인대기": "warn", "대기": "warn", "신청": "warn", "미제출": "warn", "작성중": "muted", "반려": "bad", "취소": "muted", "미사용": "muted", "휴직": "muted", "퇴사": "muted", "마감": "muted", "종료": "muted", "제출": "ok", "증빙완료": "ok", "임시저장": "muted", "확인": "ok", "확인대기": "warn", "발급": "ok", "미발급": "warn", "예약": "info", "반납": "ok", "사용중": "info", "만료": "muted", "보존": "ok" }
  return badge(map[s] || "muted", s)
}
function ellipsisBtn(label, act, id) {
  return '<button type="button" data-slot="dropdown-menu-trigger" aria-label="' + esc(label) + '" aria-haspopup="menu" class="' + K.K6 + '" data-act="' + act + '" data-id="' + id + '">' + ic("ellipsis") + "</button>"
}

// 표: cols = [{h, th:"L:w-32", td:"W:tabular-nums", v:function(row){return html}}]
function cls2(spec, L, C) {
  var t = spec.charAt(0), x = spec.slice(2)
  return (t === "L" || t === "W" ? L : C) + (x ? " " + x : "")
}
function table(cols, rows, o) {
  o = o || {}
  var h = '<div data-slot="table-container" class="relative w-full overflow-x-auto"><table data-slot="table" class="w-full caption-bottom text-sm' + (o.tcls ? " " + o.tcls : "") + '"><thead data-slot="table-header" class="[&_tr]:border-b"><tr data-slot="table-row" class="' + K.K39 + '">' +
    cols.map(function (c) { return '<th data-slot="table-head" class="' + cls2(c.th || "L:", TH_L, TH_C) + '">' + (c.hh || esc(c.h)) + "</th>" }).join("") +
    '</tr></thead><tbody data-slot="table-body" class="[&_tr:last-child]:border-0">'
  if (!rows.length) {
    h += '<tr data-slot="table-row" class="' + K.K39 + '"><td data-slot="table-cell" colspan="' + cols.length + '" class="' + TD_W + ' h-32 text-center text-muted-foreground">' + esc(o.empty || "조건에 맞는 자료가 없습니다.") + "</td></tr>"
  }
  rows.forEach(function (r) {
    var click = o.rowAct ? ' data-act="' + o.rowAct + '" data-id="' + r.id + '"' : ""
    h += '<tr data-slot="table-row" class="' + (o.rowAct ? (o.selId === r.id ? K.K161 : K.K59) : K.K39) + '"' + click + ">" + cols.map(function (c) {
      var tdc = c.td || "W:"
      var t = tdc.charAt(0)
      return '<td data-slot="table-cell" class="' + (t === "W" ? TD_W : TD_N) + (tdc.slice(2) ? " " + tdc.slice(2) : "") + '">' + c.v(r) + "</td>"
    }).join("") + "</tr>"
  })
  return h + "</tbody></table></div>"
}
function pager(key, total) {
  var u = U(key), pages = Math.max(1, Math.ceil(total / u.size))
  if (u.page > pages) u.page = pages
  var p = u.page
  var h = '<div class="flex flex-col gap-3 border-t px-4 py-3 sm:flex-row sm:items-center"><p class="text-sm text-muted-foreground">총 <span class="font-semibold text-foreground tabular-nums">' + Demo.num(total) + "</span>건" +
    (pages > 1 ? '<span class="ml-1 tabular-nums">(' + p + "/" + pages + "쪽)</span>" : "") + "</p>" +
    '<div class="flex flex-wrap items-center gap-1 sm:ml-auto">' +
    '<button type="button"' + (p <= 1 ? ' data-disabled="" disabled=""' : "") + ' data-slot="button" aria-label="이전 페이지" class="' + K.K13 + '" data-act="page" data-key="' + key + '" data-p="' + (p - 1) + '">' + ic("chevron-left") + "</button>"
  var start = Math.max(1, Math.min(p - 2, pages - 4)), end = Math.min(pages, start + 4)
  for (var i = start; i <= end; i++) {
    var c = i === p ? K.K49 : (i - start < 2 ? K.K50 : K.K51)
    h += '<button type="button" data-slot="button" aria-label="' + i + '페이지"' + (i === p ? ' aria-current="page"' : "") + ' class="' + c + '" data-act="page" data-key="' + key + '" data-p="' + i + '">' + i + "</button>"
  }
  if (end < pages) h += '<span aria-hidden="true" class="px-0.5 text-muted-foreground">…</span><button type="button" data-slot="button" aria-label="' + pages + '페이지" class="' + K.K50 + '" data-act="page" data-key="' + key + '" data-p="' + pages + '">' + pages + "</button>"
  h += '<button type="button"' + (p >= pages ? ' data-disabled="" disabled=""' : "") + ' data-slot="button" aria-label="다음 페이지" class="' + K.K13 + '" data-act="page" data-key="' + key + '" data-p="' + (p + 1) + '">' + ic("chevron-right") + "</button>" +
    sel(K.K52, "한 쪽에 보여줄 개수", u.size, [[10, "10개씩"], [20, "20개씩"], [50, "50개씩"]], "pageSize", ' data-key="' + key + '"') + "</div></div>"
  return h
}
function paginate(key, rows) {
  var u = U(key)
  var pages = Math.max(1, Math.ceil(rows.length / u.size))
  if (u.page > pages) u.page = pages
  return rows.slice((u.page - 1) * u.size, u.page * u.size)
}
// 검색어·필터 적용
function applyFilter(key, rows, fields) {
  var u = U(key)
  var q = (u.q || "").trim().toLowerCase()
  var out = rows.filter(function (r) {
    for (var f in u.f) if (u.f[f] && String(r[f]) !== String(u.f[f])) return false
    if (!q) return true
    var fs = u.qf ? [u.qf] : fields
    return fs.some(function (f) { return String(r[f] == null ? "" : r[f]).toLowerCase().indexOf(q) >= 0 })
  })
  if (u.sort === 1 || u.sort === "1") out = out.slice().reverse()
  return out
}
// 검색 막대(카드 위쪽)
function searchBar(key, o) {
  var u = U(key)
  var h = '<div class="flex flex-col gap-2 p-3 lg:flex-row lg:items-center"><form role="search" class="flex flex-1 flex-wrap items-center gap-2" data-submit="search" data-key="' + key + '">'
  if (o.targets) {
    if (!o.targets.some(function (t) { return t[0] === u.qf })) u.qf = o.targets[0][0]
    h += sel(K.K33, "검색 대상", u.qf, o.targets, "qField", ' data-key="' + key + '"')
  }
  h += '<div data-slot="input-group" role="group" class="' + K.K34 + '"><input data-slot="input-group-control" name="q" value="' + esc(u.q) + '" placeholder="' + esc(o.ph || "검색어 입력") + '" aria-label="검색어" class="' + K.K35 + '">' +
    '<div role="group" data-slot="input-group-addon" data-align="inline-end" class="' + K.K36 + '"><button type="submit" data-slot="button" data-size="icon-xs" aria-label="검색" class="' + K.K37 + '">' + ic("search") + "</button></div></div>"
  ;(o.filters || []).forEach(function (f) {
    h += sel(f.cls || K.K33, f.label, u.f[f.field] || "", [["", f.all]].concat(f.options), "filter", ' data-key="' + key + '" data-field="' + f.field + '"')
  })
  h += '</form><div class="flex flex-wrap items-center gap-2">'
  if (o.sorts) h += sel(K.K38, "정렬", u.sort, o.sorts.map(function (s, i) { return [i, s] }), "sort", ' data-key="' + key + '"')
  if (o.count != null) h += '<span class="text-sm text-muted-foreground tabular-nums">총 ' + Demo.num(o.count) + "건</span>"
  if (o.excel !== false) h += excelBtn()
  return h + "</div></div>"
}
// 막대형 목록 카드
function barCard(key, o, rows) {
  var u0 = U(key)
  if (o.targets && !o.targets.some(function (t) { return t[0] === u0.qf })) u0.qf = o.targets[0][0]
  var filtered = applyFilter(key, rows, o.fields || ["title"])
  var shown = paginate(key, filtered)
  if (!o.noCount) o.count = filtered.length
  return '<div data-slot="card" data-size="default" class="' + K.K12 + '">' + searchBar(key, o) +
    '<div class="overflow-x-auto border-t">' + table(o.cols, shown, o) + "</div>" + pager(key, filtered.length) + "</div>"
}
// 카드 머리말형 목록(관리 화면 공통)
function headCard(key, o, rows) {
  var u = U(key)
  var filtered = applyFilter(key, rows, o.fields || [])
  var shown = paginate(key, filtered)
  var h = '<div data-slot="card" data-size="default" class="' + K.K94 + '"><div data-slot="card-header" class="' + K.K95 + '"><div data-slot="card-title" class="font-medium group-data-[size=sm]/card:text-sm text-base">' + esc(o.title) +
    '<span class="ml-2 text-sm font-normal text-muted-foreground tabular-nums">' + Demo.num(filtered.length) + "건</span></div>" +
    '<div data-slot="card-action" class="' + K.K96 + '">'
  if (o.filter) h += sel(K.K97, o.filter.label, u.f[o.filter.field] || "", [["", o.filter.all]].concat(o.filter.options), "filter", ' data-key="' + key + '" data-field="' + o.filter.field + '"')
  h += '<form role="search" data-submit="search" data-key="' + key + '"><div data-slot="input-group" role="group" class="' + K.K98 + '"><div role="group" data-slot="input-group-addon" data-align="inline-start" class="' + K.K99 + '">' + ic("search") + "</div>" +
    '<input data-slot="input-group-control" name="q" value="' + esc(u.q) + '" placeholder="' + esc(o.ph || "검색어 입력 후 Enter") + '" aria-label="검색" class="' + K.K35 + '"></div></form></div></div>'
  h += '<div data-slot="card-content" class="px-0">' + table(o.cols, shown, o) + pager(key, filtered.length) + "</div></div>"
  return h
}

/* ───────── 대화상자 ───────── */
function modalHtml(m) {
  return '<div class="demo-overlay" data-act="modalClose"></div><div class="demo-dialog' + (m.wide ? " demo-dialog-wide" : "") + ' bg-card text-card-foreground ring-1 ring-foreground/10 rounded-xl" role="dialog" aria-modal="true" aria-label="' + esc(m.title) + '">' +
    '<form class="flex flex-col gap-4" ' + (m.submit ? 'data-submit="' + m.submit + '"' : "") + ">" +
    '<div class="flex items-center gap-2 border-b px-4 py-3"><h2 class="text-base font-semibold">' + esc(m.title) + '</h2><button type="button" class="' + K.K13 + ' ml-auto" aria-label="닫기" data-act="modalClose">' + ic("x") + "</button></div>" +
    '<div class="flex flex-col gap-4 px-4">' + m.body + "</div>" +
    '<div class="flex justify-end gap-2 border-t px-4 py-3">' + (m.footer != null ? m.footer : btn("취소", "", "modalClose") + (m.submit ? '<button type="submit" data-slot="button" class="' + K.K21 + '">' + esc(m.ok || "저장") + "</button>" : "")) + "</div></form></div>"
}
function field(label, input, full) {
  return '<label class="flex flex-col gap-1.5' + (full ? " sm:col-span-2" : "") + '"><span class="text-sm font-medium">' + esc(label) + "</span>" + input + "</label>"
}
function inp(name, value, ph, type, extra) {
  return '<input data-slot="input" class="' + K.K184 + '" name="' + name + '" type="' + (type || "text") + '" value="' + esc(value || "") + '" placeholder="' + esc(ph || "") + '"' + (extra || "") + ">"
}
function ta(name, value, ph) {
  return '<textarea data-slot="textarea" class="' + K.K184 + ' demo-textarea" name="' + name + '" placeholder="' + esc(ph || "") + '">' + esc(value || "") + "</textarea>"
}
function nsel(name, list, value) {
  return '<select class="' + K.K184 + '" name="' + name + '">' + opts(list, value) + "</select>"
}
function grid2(inner) { return '<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">' + inner + "</div>" }
function openModal(m) { S.modal = m; S.pop = null; Demo.update() }
function closeModal() { S.modal = null; Demo.update() }
function infoRows(list) {
  return '<dl class="grid grid-cols-1 gap-x-4 gap-y-2 text-sm sm:grid-cols-2">' + list.map(function (r) {
    return '<div class="flex flex-col gap-0.5' + (r[2] ? " sm:col-span-2" : "") + '"><dt class="text-xs text-muted-foreground">' + esc(r[0]) + '</dt><dd class="whitespace-pre-wrap break-words">' + r[1] + "</dd></div>"
  }).join("") + "</dl>"
}
function openPop(el, html, alignRight) {
  var r = el.getBoundingClientRect()
  S.pop = { html: html, y: Math.round(r.bottom + 4) }
  if (alignRight) S.pop.right = Math.max(8, Math.round(window.innerWidth - r.right))
  else S.pop.x = Math.max(8, Math.min(Math.round(r.left), window.innerWidth - 220))
  Demo.update()
}
function popItem(label, icon, act, attrs) {
  return '<button type="button" role="menuitem" class="demo-pop-item" data-act="' + act + '"' + (attrs || "") + ">" + (icon ? ic(icon, "size-4") : "") + esc(label) + "</button>"
}

/* ───────── 내보내기 ───────── */
window.MI = {
  esc: esc, ic: ic, fmt: fmt, parse: parse, addDays: addDays, dowOf: dowOf, korDate: korDate, md: md, pad: pad,
  TODAY: TODAY, YEAR: YEAR, MONTH: MONTH, DOW: DOW, rnd: rnd, pick: pick, rint: rint, opts: opts, labelOf: labelOf,
  DEPTS: DEPTS, STAFF: STAFF, ME: ME, staffNames: staffNames, deptOf: deptOf, RES: RES, HOUSES: HOUSES, S: S, U: U, nextId: nextId, NAV: NAV, findNav: findNav,
  shell: shell, pageHeader: pageHeader, btn: btn, pbtn: pbtn, excelBtn: excelBtn, kpis: kpis, tabs: tabs, navPills: navPills, sel: sel, badge: badge,
  statusBadge: statusBadge, ellipsisBtn: ellipsisBtn, table: table, pager: pager, paginate: paginate, applyFilter: applyFilter, searchBar: searchBar,
  barCard: barCard, headCard: headCard, openModal: openModal, closeModal: closeModal, field: field, inp: inp, ta: ta, nsel: nsel, grid2: grid2,
  infoRows: infoRows, openPop: openPop, popItem: popItem, TH_L: TH_L, TH_C: TH_C, TD_W: TD_W, TD_N: TD_N
}
// DOCS · LEAVES · isMyTurn 은 다음 파일에서 채운다(shell 이 참조)
var DOCS = [], LEAVES = []
function isMyTurn(d) { return MI.isMyTurn ? MI.isMyTurn(d) : false }
MI.setStores = function (docs, leaves) { DOCS = docs; LEAVES = leaves }
})()

;(function () {
"use strict"
var M = MI, esc = M.esc, ic = M.ic, S = M.S, U = M.U, TODAY = M.TODAY

/* ═════════ 가상 데이터: 일정 · 업무일지 · 게시판 · 전자결재 · 연차 ═════════ */
var SCHED_T = [
  ["주간 업무회의", "대회의실 · 부서별 주간 계획 공유"], ["생활지원 사례회의", "1층 상담실 · 주택별 지원 계획 점검"], ["소방 안전점검", "전 층 · 소화기·비상구 확인"],
  ["직원 인권교육", "다목적홀 · 외부 강사 초청"], ["여가 프로그램 운영", "다목적홀 · 음악 활동"], ["외부 나들이 동행", "인근 공원 · 차량 2대 배차"],
  ["정기 외래 동행", "협력 의료기관 · 동행 직원 1명"], ["급식위원회", "식당 · 다음 달 식단 검토"], ["후원자 방문", "1층 접견실 · 시설 안내"],
  ["운영위원회", "대회의실 · 분기 운영 보고"], ["시설 방역 소독", "전 구역 · 외부 업체"], ["차량 정기점검", "주차장 · 업무용 차량 3대"],
  ["자치회의", "다목적홀 · 이용자 자치회"], ["생일 축하 행사", "식당 · 이달의 생일"], ["평생교육 수업", "교육실 · 그림 그리기"],
  ["보호자 간담회", "다목적홀 · 하반기 운영 안내"], ["행정 점검 준비", "사무실 · 서류 정리"], ["직원 체육행사", "인근 체육센터"]
]
var SCHED = []
;(function () {
  var id = 1
  for (var off = -24; off <= 34; off++) {
    var day = M.addDays(TODAY, off), dw = M.parse(day).getDay()
    var n = dw === 0 || dw === 6 ? M.rint(0, 1) : M.rint(1, 4)
    if (off === 0) n = 6
    var hours = [9, 10, 11, 13, 14, 15, 16]
    for (var i = 0; i < n; i++) {
      var t = M.pick(SCHED_T), h = hours[(i * 2 + M.rint(0, 1)) % hours.length], who = M.pick(M.STAFF)
      SCHED.push({ id: id++, date: day, start: M.pad(h) + ":00", end: M.pad(h + 1) + ":" + (M.rnd() < 0.5 ? "00" : "30"), title: t[0], desc: t[1], dept: who.dept, owner: who.name, kind: M.rnd() < 0.85 ? "원내업무" : "개인업무", color: 1 + (id % 5) })
    }
  }
  SCHED.sort(function (a, b) { return (a.date + a.start).localeCompare(b.date + b.start) })
})()

var WL_T = [
  ["생활지원 일지 정리", "주택별 하루 지원 기록 확인\n특이사항 없음"], ["주간 프로그램 준비", "다음 주 여가 프로그램 재료 준비\n참여 인원 확인"],
  ["시설 순회 점검", "각 층 조명·출입문 확인\n수리 필요 1건 접수"], ["식자재 검수", "오전 납품 식자재 검수 완료"], ["차량 운행일지 정리", "주간 운행 기록 입력"],
  ["후원물품 정리", "접수된 생활용품 분류 및 보관"], ["직원 교육자료 준비", "인권교육 자료 인쇄 및 배부"], ["행정 서류 정리", "월간 보고 서류 취합"],
  ["외부 활동 동행", "오후 인근 도서관 이용 동행"], ["주간 회의록 작성", "부서 회의 내용 정리 및 공유"], ["비품 재고 확인", "사무용품 재고 확인 후 구매 요청"]
]
var WORKLOG = []
;(function () {
  for (var i = 0; i < 168; i++) {
    var w = M.pick(M.STAFF), t = M.pick(WL_T)
    WORKLOG.push({ id: i + 1, date: M.addDays(TODAY, -Math.floor(i / 4)), dept: w.dept, title: t[0], body: t[1], owner: w.name })
  }
})()

var BOARDS = {
  notice: { title: "업무공지사항", nav: "게시판", desc: "원내 공지와 업무 안내를 함께 보는 게시판입니다.", n: 46,
    t: ["10월 직원 인권교육 일정 안내", "개인정보 보호 점검 결과 공유", "하반기 소방훈련 실시 안내", "업무용 차량 이용 수칙 안내", "연차 사용 계획 제출 안내", "전자결재 양식 개편 안내", "다목적홀 대관 신청 방법 변경", "직원 건강검진 일정 안내", "명절 근무표 안내", "주차장 도색 공사 안내", "인트라넷 점검 시간 안내", "직원 만족도 조사 참여 요청"] },
  circular: { title: "공람문서", nav: "공람문서", desc: "결재가 끝난 문서 중 함께 봐야 할 문서를 모아 둡니다.", n: 38,
    t: ["10월 운영위원회 회의 결과", "하반기 프로그램 운영 계획(공람)", "시설 안전점검 결과 보고(공람)", "후원물품 배분 결과", "급식위원회 회의록", "직원 교육 참가 결과 보고", "자치회의 결과 공유", "차량 정비 결과 보고"] },
  archive: { title: "업무자료실", nav: "자료실", desc: "업무에 필요한 서식과 참고 자료를 내려받는 곳입니다.", n: 30,
    t: ["업무일지 작성 예시", "회의록 서식", "외부활동 계획서 서식", "물품 구입 요청서 서식", "시설 점검표 서식", "직원 교육 결과보고서 서식", "개인정보 처리 안내문", "비상연락망 양식"] },
  menu: { title: "주간식단표", nav: "주간식단표", desc: "주차별 식단표를 올리고 확인하는 게시판입니다.", n: 24,
    t: ["주간 식단표"] },
  welfare: { title: "직원복지회", nav: "직원복지회", desc: "직원복지회 소식과 경조사, 복지 혜택을 안내합니다.", n: 18,
    t: ["복지회 상반기 결산 공유", "경조사 지원 기준 안내", "직원 동호회 모집", "복지 포인트 사용 안내", "가을 체육행사 참가 신청", "복지회 정기총회 안내"] },
  labor: { title: "노사협의회", nav: "노사협의회", desc: "노사협의회 회의 안건과 결과를 공유합니다.", n: 14,
    t: ["3분기 노사협의회 결과", "근무환경 개선 의견 수렴", "4분기 노사협의회 안건 공지", "휴게공간 개선 결과 안내", "근로자위원 선출 공고"] }
}
var POSTS = {}
;(function () {
  Object.keys(BOARDS).forEach(function (k) {
    var b = BOARDS[k], list = []
    for (var i = 0; i < b.n; i++) {
      var date = M.addDays(TODAY, -i * (k === "menu" ? 7 : 3) - M.rint(0, 2))
      var title = k === "menu" ? (function () { var d = M.parse(date); return (d.getMonth() + 1) + "월 " + (Math.floor((d.getDate() - 1) / 7) + 1) + "째 주 식단표" })() : b.t[i % b.t.length]
      var au = k === "menu" ? "황민재" : M.pick(M.STAFF).name
      list.push({ id: b.n - i, no: b.n - i, title: title, author: au, date: date, reads: M.rint(4, 60), attach: M.rnd() < 0.45 || k === "archive" || k === "menu",
        body: title + "\n\n" + (k === "menu" ? "이번 주 식단표를 첨부합니다.\n알레르기 유발 식재료 표기는 식당 게시판을 함께 확인해 주세요." : "관련 내용을 아래와 같이 안내드립니다.\n\n1. 일정: 해당 주간 중 부서별 협의\n2. 대상: 전 직원\n3. 문의: 운영지원팀(내선 201)\n\n자세한 내용은 첨부 자료를 참고해 주세요.") })
    }
    POSTS[k] = list
  })
})()

var DOC_TYPES = ["기안문", "품의서", "지출결의서", "보고서", "협조문"]
var DOC_T = [
  ["기안문", "10월 생활지원 프로그램 운영 계획"], ["보고서", "소방시설 정기점검 결과 보고"], ["품의서", "직원 역량강화 교육 참가 품의"],
  ["품의서", "다목적홀 음향장비 수리 품의"], ["보고서", "후원물품 접수 및 배분 결과 보고"], ["보고서", "업무용 차량 정기점검 결과 보고"],
  ["기안문", "하반기 평생교육 프로그램 운영 계획"], ["보고서", "급식 위생점검 결과 보고"], ["지출결의서", "사무용품 구입 지출 결의"],
  ["보고서", "자치회의 결과 보고"], ["협조문", "외부 나들이 차량 지원 협조 요청"], ["지출결의서", "프로그램 재료비 지출 결의"],
  ["기안문", "직원 만족도 조사 시행 계획"], ["협조문", "시설 방역 일정 협조 요청"]
]
var LINES = [
  [["관리자", "기안"], ["김민준", "사무국장"], ["박상우", "원장"]],
  [["최유진", "팀장"], ["관리자", "검토"], ["박상우", "원장"]],
  [["장예린", "팀장"], ["관리자", "검토"], ["김민준", "사무국장"], ["박상우", "원장"]]
]
var DOCS = []
;(function () {
  for (var i = 0; i < 74; i++) {
    var t = DOC_T[i % DOC_T.length], w = M.STAFF[(i * 7) % M.STAFF.length]
    var dd = M.addDays(TODAY, -Math.floor(i * 1.6))
    var r = M.rnd()
    var status = i < 4 ? "결재대기" : i < 12 ? (r < 0.4 ? "진행중" : r < 0.85 ? "완료" : "반려") : (r < 0.9 ? "완료" : "반려")
    var mine = i % 9 === 5
    var tmpl = mine ? LINES[0] : i < 4 ? LINES[1 + (i % 2)] : M.pick(LINES)
    var line = tmpl.map(function (s, j) { return { name: j === 0 ? w.name : s[0], pos: j === 0 ? w.pos : s[1], state: j === 0 ? "기안" : "대기", at: "" } })
    var step = 1
    if (status === "완료") { line.forEach(function (s, j) { if (j) { s.state = "승인"; s.at = dd } }); step = line.length }
    else if (status === "진행중") { line[1].state = "승인"; line[1].at = dd; step = 2; if (step >= line.length) { status = "완료"; step = line.length } }
    else if (status === "반려") { line[1].state = "반려"; line[1].at = dd; step = 1 }
    if (mine) { line[0].name = "관리자"; line[0].pos = "시스템관리자" }
    DOCS.push({ id: 5000 - i, no: "늘봄-" + dd.slice(0, 4) + "-" + String(980 - i).padStart(4, "0"), type: t[0], title: t[1], drafter: line[0].name, dept: mine ? M.ME.dept : w.dept,
      draft: dd, eff: M.addDays(dd, M.rint(0, 3)), status: status, line: line, step: step, attach: M.rnd() < 0.4, share: i % 5 === 1, sup: i % 11 === 3,
      body: t[1] + "에 관하여 아래와 같이 " + (t[0] === "보고서" ? "보고합니다." : "기안합니다.") + "\n\n1. 목적: 원활한 시설 운영과 서비스 품질 향상\n2. 기간: " + dd + " ~ " + M.addDays(dd, 30) + "\n3. 내용: 세부 계획은 붙임 문서 참조\n\n붙임  세부 계획서 1부.  끝." })
  }
})()
function curStep(d) { return d.line[d.step] }
function isMyTurn(d) { return (d.status === "결재대기" || d.status === "진행중") && curStep(d) && curStep(d).name === "관리자" }
M.isMyTurn = isMyTurn

var LEAVE_KINDS = ["연차", "오전반차", "오후반차", "경조휴가", "공가"]
var LEAVE_REASONS = ["개인 사유", "가족 행사", "자기계발", "이사", "가족 돌봄", "개인 일정"]
var LEAVES = []
;(function () {
  for (var i = 0; i < 62; i++) {
    var w = M.STAFF[(i * 5) % M.STAFF.length], k = i % 7 === 0 ? "오전반차" : i % 9 === 0 ? "오후반차" : i % 13 === 0 ? "경조휴가" : "연차"
    var st = M.addDays(TODAY, -i * 3 + 12), days = k.indexOf("반차") > 0 ? 0.5 : M.rint(1, 2)
    var status = i < 3 ? "승인대기" : i < 6 ? "승인대기" : M.rnd() < 0.9 ? "승인" : "반려"
    if (i >= 6 && st > TODAY && M.rnd() < 0.5) status = "승인대기"
    LEAVES.push({ id: 3000 - i, no: M.YEAR + "-" + String(240 - i).padStart(4, "0"), status: status, name: w.name, dept: w.dept, kind: k, start: st, end: days > 1 ? M.addDays(st, days - 1) : st,
      days: days, reason: M.pick(LEAVE_REASONS), applied: M.addDays(st, -M.rint(2, 9)), approver: "김민준" })
  }
  ;[["관리자", "연차", -40, 1], ["관리자", "오후반차", -21, 0.5], ["관리자", "연차", -9, 2]].forEach(function (x, j) {
    LEAVES.push({ id: 3100 + j, no: M.YEAR + "-" + String(250 + j).padStart(4, "0"), status: "승인", name: x[0], dept: M.ME.dept, kind: x[1], start: M.addDays(TODAY, x[2]), end: M.addDays(TODAY, x[2] + Math.max(0, Math.ceil(x[3]) - 1)), days: x[3], reason: "개인 사유", applied: M.addDays(TODAY, x[2] - 5), approver: "김민준" })
  })
  LEAVES.sort(function (a, b) { return b.id - a.id })
})()
var TRIPS = []
M.setStores(DOCS, LEAVES)
M.DATA = { SCHED: SCHED, WORKLOG: WORKLOG, BOARDS: BOARDS, POSTS: POSTS, DOCS: DOCS, LEAVES: LEAVES, TRIPS: TRIPS, LINES: LINES }

/* ═════════ 원내업무일정 ═════════ */
var SV = { view: 0, date: TODAY, dept: "", kind: "원내업무", sel: null }
var VIEWS = ["일", "주", "월", "목록·찾기", "업무일지"]
function schedFor(day) {
  return SCHED.filter(function (s) { return s.date === day && (!SV.dept || s.dept === SV.dept) && (SV.kind === "전체" || s.kind === SV.kind) })
}
function schedRow(s, showDate) {
  var base = K.K22.replace(/\s*border-l-chart-\d/, "")
  return '<li><button type="button" class="' + base + " border-l-chart-" + s.color + '" data-act="schedOpen" data-id="' + s.id + '"><div class="w-24 shrink-0 text-sm font-semibold tabular-nums">' +
    (showDate ? esc(M.md(s.date)) + " (" + M.dowOf(s.date) + ')<span class="block text-xs font-normal text-muted-foreground">' + esc(s.start) + " ~ " + esc(s.end) + "</span>" : esc(s.start) + '<span class="block text-xs font-normal text-muted-foreground">~ ' + esc(s.end) + "</span>") +
    '</div><div class="min-w-0 flex-1"><div class="flex flex-wrap items-center gap-2"><span class="font-medium text-foreground"><span class="break-words">' + esc(s.title) + "</span></span>" +
    (s.kind === "개인업무" ? '<span data-slot="badge" class="' + K.K142 + '">개인</span>' : "") + '</div><p class="whitespace-pre-line break-words text-sm text-muted-foreground">' + esc(s.desc) + "</p></div>" +
    '<span data-slot="badge" data-variant="secondary" class="' + K.K23 + '">' + esc(s.dept) + '</span><span class="hidden w-20 shrink-0 text-right text-sm text-muted-foreground sm:block">' + esc(s.owner) + "</span></button></li>"
}
function monthGrid(month, itemsFor, act, moreAct) {
  var first = M.parse(month + "-01"), y = first.getFullYear(), m = first.getMonth()
  var days = new Date(y, m + 1, 0).getDate(), lead = first.getDay()
  var h = '<div class="overflow-x-auto"><div class="grid min-w-[56rem] grid-cols-7 border-l" role="group">'
  M.DOW.forEach(function (d, i) { h += '<div class="' + (i === 0 ? K.K130 : i === 6 ? K.K132 : K.K131) + '">' + d + "</div>" })
  for (var i = 0; i < lead; i++) h += '<div class="min-h-28 border-r border-b bg-muted/40" aria-hidden="true"></div>'
  for (var dd = 1; dd <= days; dd++) {
    var ds = month + "-" + M.pad(dd), dw = (lead + dd - 1) % 7, items = itemsFor(ds)
    h += '<div role="group" aria-label="' + ds + " " + items.length + '건" class="' + (ds === TODAY ? K.K135 : "flex min-h-28 min-w-0 flex-col gap-0.5 border-r border-b p-1.5") + '">' +
      '<div class="flex items-center gap-1.5 text-sm font-semibold tabular-nums"><span class="' + (dw === 0 ? "text-destructive" : dw === 6 ? "text-info" : "") + '">' + dd + "</span>" +
      (ds === TODAY ? '<span data-slot="badge" class="' + K.K136 + ' h-4 px-1 demo-xs">오늘</span>' : "") + "</div>"
    items.slice(0, 4).forEach(function (it) { h += '<button type="button" class="' + K.K133 + '" data-act="' + act + '" data-id="' + it.id + '">' + esc(it.label) + "</button>" })
    if (items.length > 4) h += '<button type="button" aria-expanded="false" class="' + K.K134 + '" data-act="' + moreAct + '" data-d="' + ds + '">+' + (items.length - 4) + "건</button>"
    h += "</div>"
  }
  var tail = (7 - ((lead + days) % 7)) % 7
  for (var j = 0; j < tail; j++) h += '<div class="min-h-28 border-r border-b bg-muted/40" aria-hidden="true"></div>'
  return h + "</div></div>"
}
M.monthGrid = monthGrid
function sidePanel(icon, title, count, href, list, empty) {
  return '<div data-slot="card" data-size="default" class="' + K.K12 + '"><div data-slot="card-header" class="' + K.K26 + '">' + ic(icon, "size-4 text-primary") +
    '<div data-slot="card-title" class="font-medium group-data-[size=sm]/card:text-sm text-sm">' + esc(title) + "</div>" +
    (count != null ? '<span data-slot="badge" data-variant="secondary" class="' + K.K27 + '">' + count + "</span>" : "") +
    '<a role="button" data-slot="button" class="' + K.K28 + '" href="#' + href + '">전체' + ic("chevron-right", "size-3.5") + "</a></div>" +
    '<div data-slot="card-content" class="px-2 py-1.5">' + (list.length ? '<ul class="flex flex-col">' + list.map(function (x) {
      return '<li><a class="' + K.K29 + '" href="#' + x.href + '"><span class="min-w-0 flex-1 truncate text-sm text-foreground ">' + esc(x.title) + "</span>" + (x.attach ? ic("paperclip", "size-3.5 shrink-0 text-muted-foreground") : "") +
        '<span class="' + K.K30 + '">' + esc(x.date) + "</span></a></li>"
    }).join("") + "</ul>" : '<p class="px-2 py-3 text-sm text-muted-foreground">' + esc(empty) + "</p>") + "</div></div>"
}
function pageSchedule(route) {
  var title = "원내업무일정"
  var h = '<div class="flex flex-col gap-1"><div class="flex flex-wrap items-baseline gap-x-3 gap-y-1"><h1 class="text-xl font-bold text-foreground">' + title + '</h1><span class="tabular-nums text-sm text-muted-foreground">' + esc(M.korDate(TODAY)) + "</span></div>" +
    '<p class="text-sm text-muted-foreground">원내 일정과 부서별 업무를 한눈에 확인하고, 새 일정을 바로 등록합니다.</p></div>'
  var list = [], label = ""
  if (SV.view === 0) { list = schedFor(SV.date); label = SV.date + " (" + M.dowOf(SV.date) + ")" }
  else if (SV.view === 1) {
    var ws = M.addDays(SV.date, -M.parse(SV.date).getDay())
    for (var i = 0; i < 7; i++) list = list.concat(schedFor(M.addDays(ws, i)))
    label = ws + " ~ " + M.addDays(ws, 6).slice(5)
  } else if (SV.view === 2) {
    var mo = SV.date.slice(0, 7)
    list = SCHED.filter(function (s) { return s.date.slice(0, 7) === mo && (!SV.dept || s.dept === SV.dept) && (SV.kind === "전체" || s.kind === SV.kind) })
    label = mo.replace("-", "년 ") + "월"
  }
  var head = '<div class="flex flex-col gap-3 border-b p-4"><div class="flex flex-wrap items-center gap-1.5">' +
    '<button type="button" data-slot="button" aria-label="이전 기간" class="' + K.K13 + '" data-act="schedNav" data-d="-1">' + ic("chevron-left") + "</button>" +
    '<button type="button" data-slot="button" class="' + K.K14 + '" data-act="schedNav" data-d="0">오늘</button>' +
    '<button type="button" data-slot="button" aria-label="다음 기간" class="' + K.K13 + '" data-act="schedNav" data-d="1">' + ic("chevron-right") + "</button>" +
    (SV.view < 3 ? '<span class="ml-2 text-base font-bold tabular-nums text-foreground">' + esc(label) + '</span><span data-slot="badge" data-variant="secondary" class="' + K.K15 + '">일정 ' + list.length + "건</span>" : "") +
    '</div><div class="flex flex-wrap items-center gap-2">' + M.tabs(VIEWS, SV.view, "schedView") +
    M.sel(K.K18, "일정 종류", SV.kind, ["원내업무", "개인업무", "전체"], "schedKind") +
    M.sel(K.K19, "부서 선택", SV.dept, [["", "전체 부서"]].concat(M.DEPTS), "schedDept") +
    '<button type="button" data-slot="button" class="' + K.K20 + '" data-act="schedView" data-i="2">' + ic("calendar-range") + (+SV.date.slice(5, 7)) + "월 일정 전체 보기</button>" +
    M.pbtn("신규일정", "plus", "schedNew") + "</div></div>"
  var body
  if (SV.view === 2) {
    body = '<div data-slot="card-content" class="p-0">' + monthGrid(SV.date.slice(0, 7), function (d) {
      return list.filter(function (s) { return s.date === d }).map(function (s) { return { id: s.id, label: s.start + " " + s.title } })
    }, "schedOpen", "schedDay") + "</div>"
  } else if (SV.view === 3) {
    var key = "sched-list"
    body = '<div data-slot="card-content" class="p-0">' + M.searchBar(key, { targets: [["", "전체"], ["title", "제목"], ["owner", "담당자"]], ph: "일정 제목·담당자로 찾기", excel: false }).replace("flex flex-col gap-2 p-3", "flex flex-col gap-2 p-3 border-b")
    var rows = M.applyFilter(key, SCHED.filter(function (s) { return (!SV.dept || s.dept === SV.dept) }), ["title", "desc", "owner", "dept"]).slice().reverse()
    body += M.table([
      { h: "일자", th: "L:w-36", td: "W:tabular-nums", v: function (r) { return esc(r.date) + " (" + M.dowOf(r.date) + ")" } },
      { h: "시간", th: "L:w-32", td: "W:tabular-nums text-muted-foreground", v: function (r) { return esc(r.start + " ~ " + r.end) } },
      { h: "제목", th: "L:", td: "N:font-semibold whitespace-normal break-words", v: function (r) { return esc(r.title) } },
      { h: "부서", th: "L:w-32", td: "W:", v: function (r) { return esc(r.dept) } },
      { h: "담당자", th: "L:w-32", td: "W:", v: function (r) { return esc(r.owner) } }
    ], M.paginate(key, rows), { rowAct: "schedOpen" }) + M.pager(key, rows.length) + "</div>"
  } else {
    body = '<div data-slot="card-content" class="p-0">' + (list.length ? '<ul class="flex flex-col divide-y">' + list.map(function (s) { return schedRow(s, SV.view === 1) }).join("") + "</ul>"
      : '<p class="px-4 py-16 text-center text-sm text-muted-foreground">등록된 일정이 없습니다. 오른쪽 위 [신규일정]으로 추가해 보세요.</p>') + "</div>"
  }
  var main = '<div data-slot="card" data-size="default" class="' + K.K12 + '">' + head + body + "</div>"
  var mine = DOCS.filter(isMyTurn)
  var lv = LEAVES.filter(function (l) { return l.status === "승인대기" })
  var side = '<div class="flex flex-col gap-4">' +
    sidePanel("file-check", "결재할 문서", mine.length, "/documents?box=approve", mine.slice(0, 5).map(function (d) { return { title: d.title, href: "/documents/" + d.id, date: M.md(d.draft), attach: d.attach } }), "결재할 문서가 없습니다.") +
    sidePanel("plane", "휴가 결재 대기", lv.length, "/leave?view=approve", lv.slice(0, 5).map(function (l) { return { title: l.name + " · " + l.kind + " " + (l.days) + "일", href: "/leave?view=approve", date: M.md(l.start) } }), "승인할 휴가 신청이 없습니다.") +
    sidePanel("megaphone", "공지사항", null, "/board/notice", POSTS.notice.slice(0, 5).map(function (p) { return { title: p.title, href: "/board/notice/" + p.id, date: M.md(p.date), attach: p.attach } }), "") +
    sidePanel("share2", "공람문서", null, "/board/circular", POSTS.circular.slice(0, 5).map(function (p) { return { title: p.title, href: "/board/circular/" + p.id, date: M.md(p.date), attach: p.attach } }), "") + "</div>"
  h += '<div class="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">' + main + side + "</div>"
  return M.shell(route, "업무관리", title, h)
}
Demo.on("schedView", function (d) { var i = +d.i; if (i === 4) { Demo.go("/worklog"); return } SV.view = i; Demo.update() })
Demo.on("schedNav", function (d) {
  var n = +d.d
  if (!n) SV.date = TODAY
  else if (SV.view === 2) { var p = M.parse(SV.date); p.setDate(1); p.setMonth(p.getMonth() + n); SV.date = M.fmt(p) }
  else SV.date = M.addDays(SV.date, n * (SV.view === 1 ? 7 : 1))
  Demo.update()
})
Demo.on("schedKind", function (v) { SV.kind = v; Demo.update() })
Demo.on("schedDept", function (v) { SV.dept = v; Demo.update() })
Demo.on("schedDay", function (d) { SV.date = d.d; SV.view = 0; Demo.update() })
Demo.on("schedOpen", function (d) {
  var s = SCHED.filter(function (x) { return x.id === +d.id })[0]; if (!s) return
  M.openModal({ title: "일정 상세", body: M.infoRows([["제목", esc(s.title), 1], ["일자", esc(M.korDate(s.date))], ["시간", esc(s.start + " ~ " + s.end)], ["부서", esc(s.dept)], ["담당자", esc(s.owner)], ["구분", esc(s.kind)], ["내용", esc(s.desc), 1]]),
    footer: M.btn("삭제", "trash2", "schedDel", ' data-id="' + s.id + '"') + M.pbtn("닫기", "", "modalClose") })
})
Demo.on("schedDel", function (d) {
  var i = SCHED.findIndex(function (x) { return x.id === +d.id }); if (i >= 0) SCHED.splice(i, 1)
  S.modal = null; Demo.update(); Demo.toast("일정을 삭제했습니다")
})
Demo.on("schedNew", function () {
  M.openModal({ title: "신규일정 등록", submit: "schedSave", ok: "등록", body: M.grid2(
    M.field("일자", M.inp("date", SV.view === 3 ? TODAY : SV.date, "", "date", " required")) + M.field("구분", M.nsel("kind", ["원내업무", "개인업무"], "원내업무")) +
    M.field("시작", M.inp("start", "10:00", "", "time", " required")) + M.field("종료", M.inp("end", "11:00", "", "time", " required")) +
    M.field("제목", M.inp("title", "", "예) 주간 업무회의", "text", " required maxlength=\"60\""), 1) + M.field("장소·내용", M.inp("desc", "", "예) 대회의실 · 부서별 계획 공유"), 1) +
    M.field("부서", M.nsel("dept", M.DEPTS, M.ME.dept)) + M.field("담당자", M.nsel("owner", ["관리자"].concat(M.staffNames()), "관리자"))) })
})
Demo.on("schedSave", function (v) {
  if (!v.title.trim()) { Demo.toast("제목을 입력해 주세요"); return }
  SCHED.push({ id: M.nextId(SCHED), date: v.date, start: v.start, end: v.end, title: v.title.trim(), desc: v.desc.trim() || "-", dept: v.dept, owner: v.owner, kind: v.kind, color: 1 + (SCHED.length % 5) })
  SCHED.sort(function (a, b) { return (a.date + a.start).localeCompare(b.date + b.start) })
  SV.date = v.date; if (SV.view > 2) SV.view = 0; if (SV.kind !== "전체" && SV.kind !== v.kind) SV.kind = v.kind
  S.modal = null; Demo.update(); Demo.toast("일정을 등록했습니다")
})

/* ═════════ 업무일지 ═════════ */
var WLV = { tab: 0 }
function pageWorklog(route) {
  var key = "worklog", u = U(key, { qf: "title" })
  var h = M.pageHeader("업무일지", "부서별 업무일지를 날짜·담당자별로 찾아보고, 오늘 한 일을 바로 기록합니다.",
    '<a role="button" data-slot="button" class="' + K.K32 + '" href="#/">' + ic("chevron-left") + "원내업무일정</a>" + M.pbtn("업무일지 작성", "plus", "wlNew"))
  h += M.tabs(["부서별 업무일지", "주간통합"], WLV.tab, "wlTab")
  if (WLV.tab === 0) {
    var months = [["", "전체 기간"]]
    for (var i = 0; i < 3; i++) { var p = M.parse(TODAY); p.setDate(1); p.setMonth(p.getMonth() - i); var ym = M.fmt(p).slice(0, 7); months.push([ym, ym.replace("-", "년 ") + "월"]) }
    var rows = WORKLOG.map(function (w) { w.month = w.date.slice(0, 7); return w })
    h += M.barCard(key, {
      targets: [["title", "업무제목"], ["body", "업무내용"], ["owner", "담당자"]], ph: u.qf === "owner" ? "담당자 이름으로 찾기" : u.qf === "body" ? "업무내용으로 찾기" : "업무제목으로 찾기",
      filters: [{ label: "월 선택", field: "month", all: "전체 기간", options: months.slice(1), cls: K.K18 }, { label: "부서 선택", field: "dept", all: "전체 부서", options: M.DEPTS, cls: K.K19 },
        { label: "담당자 선택", field: "owner", all: "전체 담당자", options: M.staffNames(), cls: K.K18 }],
      sorts: ["최신순", "오래된순"], fields: ["title", "body", "owner"], noCount: true,
      cols: [
        { h: "일자", th: "L:w-36", td: "W:tabular-nums", v: function (r) { return esc(r.date) + " (" + M.dowOf(r.date) + ")" } },
        { h: "부서", th: "L:w-32", td: "W:", v: function (r) { return esc(r.dept) } },
        { h: "업무제목", th: "L:w-64", td: "N:font-semibold whitespace-normal break-words", v: function (r) { return esc(r.title) } },
        { h: "업무내용", th: "L:", td: "N:max-w-60 whitespace-pre-wrap break-words text-muted-foreground 2xl:max-w-96", v: function (r) { return esc(r.body) } },
        { h: "담당자", th: "L:w-32", td: "W:", v: function (r) { return esc(r.owner) } },
        { h: "관리", th: "C:w-20 text-center", td: "W:text-center", v: function (r) { return M.ellipsisBtn(r.date + " " + r.owner + " 업무일지 관리", "wlMenu", r.id) } }
      ]
    }, rows)
  } else {
    var ws = M.addDays(TODAY, -((M.parse(TODAY).getDay() + 6) % 7))
    var days = [0, 1, 2, 3, 4].map(function (i) { return M.addDays(ws, i) })
    var cols = [{ h: "부서", th: "L:w-32", td: "W:font-semibold", v: function (r) { return esc(r.dept) } }].concat(days.map(function (d) {
      return { h: M.md(d) + " (" + M.dowOf(d) + ")", th: "L:", td: "N:text-sm whitespace-normal break-words text-muted-foreground", v: function (r) {
        var l = WORKLOG.filter(function (w) { return w.dept === r.dept && w.date === d })
        return l.length ? l.map(function (w) { return '<span class="block"><b class="font-medium text-foreground">' + esc(w.owner) + "</b> " + esc(w.title) + "</span>" }).join("") : '<span class="text-muted-foreground/60">-</span>'
      } }
    }))
    h += '<div data-slot="card" data-size="default" class="' + K.K12 + '"><div class="flex flex-col gap-1 border-b p-4"><p class="font-semibold">' + esc(ws) + " ~ " + esc(M.addDays(ws, 4)) + ' 주간통합</p><p class="text-sm text-muted-foreground">이번 주 부서별 업무일지를 요일별로 모아 봅니다.</p></div><div class="overflow-x-auto">' +
      M.table(cols, M.DEPTS.map(function (d, i) { return { id: i, dept: d } }), { tcls: "min-w-[60rem]" }) + "</div></div>"
  }
  return M.shell(route, "업무관리", "업무일지", h)
}
Demo.on("wlTab", function (d) { WLV.tab = +d.i; Demo.update() })
Demo.on("wlNew", function () {
  M.openModal({ title: "업무일지 작성", submit: "wlSave", ok: "등록", body: M.grid2(M.field("일자", M.inp("date", TODAY, "", "date", " required")) + M.field("부서", M.nsel("dept", M.DEPTS, M.ME.dept)) +
    M.field("업무제목", M.inp("title", "", "예) 주간 프로그램 준비", "text", " required"), 1) + M.field("업무내용", M.ta("body", "", "오늘 한 일을 적어 주세요"), 1)) })
})
Demo.on("wlSave", function (v) {
  if (!v.title.trim()) { Demo.toast("업무제목을 입력해 주세요"); return }
  WORKLOG.unshift({ id: M.nextId(WORKLOG), date: v.date, dept: v.dept, title: v.title.trim(), body: v.body.trim() || "-", owner: "관리자" })
  WORKLOG.sort(function (a, b) { return b.date.localeCompare(a.date) || b.id - a.id })
  U("worklog").page = 1; S.modal = null; Demo.update(); Demo.toast("업무일지를 등록했습니다")
})
Demo.on("wlMenu", function (d, el) { M.openPop(el, M.popItem("내용 보기", "file-text", "wlView", ' data-id="' + d.id + '"') + M.popItem("삭제", "trash2", "wlDel", ' data-id="' + d.id + '"'), true) })
Demo.on("wlView", function (d) {
  var w = WORKLOG.filter(function (x) { return x.id === +d.id })[0]
  M.openModal({ title: "업무일지", body: M.infoRows([["일자", esc(w.date)], ["부서", esc(w.dept)], ["담당자", esc(w.owner)], ["업무제목", esc(w.title), 1], ["업무내용", esc(w.body), 1]]), footer: M.pbtn("닫기", "", "modalClose") })
})
Demo.on("wlDel", function (d) { var i = WORKLOG.findIndex(function (x) { return x.id === +d.id }); WORKLOG.splice(i, 1); S.pop = null; Demo.update(); Demo.toast("업무일지를 삭제했습니다") })

/* ═════════ 게시판 ═════════ */
function boardList(route, bk) {
  var b = BOARDS[bk], key = "board-" + bk, u = U(key)
  u.checked = u.checked || {}
  var nChecked = Object.keys(u.checked).filter(function (k) { return u.checked[k] }).length
  var h = M.pageHeader(b.title, b.desc, (bk === "menu" ? '<a role="button" data-slot="button" class="' + K.K14 + '" href="#/m/meals">' + ic("calendar") + "급식관리</a>" : "") +
    '<a role="button" data-slot="button" class="' + K.K21 + '" href="#/board/' + bk + '/write">' + ic("square-pen") + "글쓰기</a>")
  var rows = M.applyFilter(key, POSTS[bk], ["title", "body"])
  if (+u.sort === 2) rows = rows.slice().sort(function (a, b2) { return b2.reads - a.reads })
  var shown = M.paginate(key, rows)
  var allOn = shown.length && shown.every(function (r) { return u.checked[r.id] })
  var chk = function (on, label, id) {
    return '<span ' + (on ? 'data-checked=""' : 'data-unchecked=""') + ' role="checkbox" aria-checked="' + on + '" data-slot="checkbox" aria-label="' + esc(label) + '" class="' + K.K54 + '" data-act="boardChk" data-key="' + bk + '" data-id="' + id + '">' +
      (on ? '<span data-slot="checkbox-indicator" class="grid place-content-center text-current">' + ic("check", "size-3.5") + "</span>" : "") + "</span>"
  }
  var sb = M.searchBar(key, { targets: [["", "제목+본문"], ["title", "제목"], ["author", "작성자"]], ph: "검색어 입력", sorts: ["최신 글 먼저", "오래된 글 먼저", "많이 읽은 글"], count: rows.length, excel: false })
  if (nChecked) sb = sb.replace('<div class="flex flex-wrap items-center gap-2">', '<div class="flex flex-wrap items-center gap-2">' + M.btn("선택 " + nChecked + "건 삭제", "trash2", "boardDelSel", ' data-key="' + bk + '"'))
  h += '<div data-slot="card" data-size="default" class="' + K.K12 + '">' + sb + '<div class="overflow-x-auto border-t">' + M.table([
    { hh: chk(allOn, "전체 선택", "all"), th: "L:hidden w-10 sm:table-cell", td: "W:hidden cursor-default sm:table-cell", v: function (r) { return chk(!!u.checked[r.id], r.title + " 선택", r.id) } },
    { h: "번호", th: "C:hidden w-16 text-center sm:table-cell", td: "W:hidden text-center text-sm text-muted-foreground tabular-nums sm:table-cell", v: function (r) { return r.no } },
    { h: "제목", th: "L:", td: "N:max-w-0 whitespace-normal", v: function (r) {
      return '<a class="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-medium" href="#/board/' + bk + "/" + r.id + '"><span class="break-words">' + esc(r.title) + "</span>" + (r.attach ? ic("paperclip", "size-3.5 text-muted-foreground") : "") +
        (r.date >= M.addDays(TODAY, -2) ? '<span data-slot="badge" class="' + K.K136 + ' h-4 px-1 demo-xs">N</span>' : "") + "</a>" +
        '<span class="mt-0.5 block text-xs text-muted-foreground tabular-nums sm:hidden">' + esc(r.author) + " · " + esc(r.date) + " · 읽음 " + r.reads + "</span>"
    } },
    { h: "작성자", th: "L:hidden w-36 sm:table-cell", td: "N:hidden text-sm whitespace-normal text-muted-foreground sm:table-cell", v: function (r) { return esc(r.author) } },
    { h: "작성일", th: "C:hidden w-24 text-center sm:table-cell", td: "W:hidden text-center text-sm text-muted-foreground tabular-nums sm:table-cell", v: function (r) { return esc(r.date) } },
    { h: "읽음", th: "C:hidden w-20 text-center sm:table-cell", td: "W:hidden text-center text-sm text-muted-foreground tabular-nums sm:table-cell", v: function (r) { return r.reads } }
  ], shown, { rowAct: "boardOpen" }) + "</div>" + M.pager(key, rows.length) + "</div>"
  return M.shell(route, groupOfBoard(bk), b.nav === "게시판" ? "게시판" : b.nav, h)
}
function groupOfBoard(bk) { return bk === "welfare" || bk === "labor" ? "그룹웨어" : "업무관리" }
function boardView(route, bk, id) {
  var b = BOARDS[bk], p = POSTS[bk].filter(function (x) { return x.id === id })[0]
  if (!p) return boardList(route, bk)
  var list = POSTS[bk], idx = list.indexOf(p), prev = list[idx + 1], next = list[idx - 1]
  var h = M.pageHeader(b.title, b.desc, '<a role="button" data-slot="button" class="' + K.K14 + '" href="#/board/' + bk + '">' + ic("chevron-left") + "목록</a>")
  h += '<div data-slot="card" data-size="default" class="' + K.K94 + '"><div data-slot="card-header" class="' + K.K213 + '"><div data-slot="card-title" class="font-medium group-data-[size=sm]/card:text-sm text-lg">' + esc(p.title) + "</div>" +
    '<div data-slot="card-description" class="text-sm text-muted-foreground tabular-nums">' + esc(p.author) + " · " + esc(p.date) + " · 읽음 " + p.reads + "</div></div>" +
    '<div data-slot="card-content" class="px-(--card-spacing) flex flex-col gap-4 border-t pt-4"><div class="whitespace-pre-wrap break-words text-sm leading-relaxed">' + esc(p.body) + "</div>" +
    (p.attach ? '<div class="' + K.K64 + '">' + ic("paperclip", "size-4 text-muted-foreground") + '<a href="#/board/' + bk + "/" + p.id + '" class="' + K.K90 + '" data-act="fakeDown">' + esc(p.title.replace(/\s/g, "_")) + '.pdf</a><span class="text-xs text-muted-foreground">128KB</span></div>' : "") +
    '</div><div class="flex flex-wrap items-center gap-2 border-t px-(--card-spacing) pt-4">' +
    (prev ? '<a role="button" data-slot="button" class="' + K.K14 + '" href="#/board/' + bk + "/" + prev.id + '">' + ic("chevron-left") + "이전 글</a>" : "") +
    (next ? '<a role="button" data-slot="button" class="' + K.K14 + '" href="#/board/' + bk + "/" + next.id + '">다음 글' + ic("chevron-right") + "</a>" : "") +
    '<span class="ml-auto"></span>' + M.btn("삭제", "trash2", "postDel", ' data-key="' + bk + '" data-id="' + p.id + '"') + "</div></div>"
  return M.shell(route, groupOfBoard(bk), b.nav, h)
}
function boardWrite(route, bk) {
  var b = BOARDS[bk]
  var h = M.pageHeader(b.title + " 글쓰기", "제목과 내용을 입력하고 [등록]을 누르면 목록 맨 위에 올라갑니다.", '<a role="button" data-slot="button" class="' + K.K14 + '" href="#/board/' + bk + '">' + ic("chevron-left") + "목록</a>")
  h += '<div data-slot="card" data-size="default" class="' + K.K94 + '"><form class="px-(--card-spacing) flex flex-col gap-4" data-submit="postSave" data-key="' + bk + '">' +
    M.field("제목", M.inp("title", bk === "menu" ? "주간 식단표" : "", "제목을 입력하세요", "text", ' required maxlength="80"')) +
    M.field("내용", M.ta("body", "", "내용을 입력하세요").replace("demo-textarea", "demo-textarea demo-textarea-lg")) +
    '<label class="flex items-center gap-2 text-sm"><input type="checkbox" name="attach" class="size-4 accent-primary"> 첨부파일 있음 (체험판에서는 파일이 실제로 올라가지 않습니다)</label>' +
    '<div class="flex justify-end gap-2 border-t pt-4"><a role="button" data-slot="button" class="' + K.K14 + '" href="#/board/' + bk + '">취소</a><button type="submit" data-slot="button" class="' + K.K21 + '">' + ic("square-pen") + "등록</button></div></form></div>"
  return M.shell(route, groupOfBoard(bk), b.nav, h)
}
Demo.on("boardOpen", function (d, el, e) {
  var r = M.S.lastRoute, bk = r.path.split("/")[2]
  Demo.go("/board/" + bk + "/" + d.id)
})
Demo.on("boardChk", function (d) {
  var u = U("board-" + d.key)
  if (d.id === "all") {
    var shown = M.paginate("board-" + d.key, M.applyFilter("board-" + d.key, POSTS[d.key], ["title", "body"]))
    var on = !shown.every(function (r) { return u.checked[r.id] })
    shown.forEach(function (r) { u.checked[r.id] = on })
  } else u.checked[d.id] = !u.checked[d.id]
  Demo.update()
})
Demo.on("boardDelSel", function (d) {
  var u = U("board-" + d.key), n = 0
  POSTS[d.key] = POSTS[d.key].filter(function (p) { if (u.checked[p.id]) { n++; return false } return true })
  M.DATA.POSTS = POSTS; u.checked = {}; Demo.update(); Demo.toast(n + "건을 삭제했습니다")
})
Demo.on("postSave", function (v, el) {
  var bk = el.getAttribute("data-key"), list = POSTS[bk]
  if (!v.title.trim()) { Demo.toast("제목을 입력해 주세요"); return }
  var no = list.reduce(function (m, x) { return Math.max(m, x.no) }, 0) + 1
  list.unshift({ id: no, no: no, title: v.title.trim(), author: "관리자", date: TODAY, reads: 0, attach: !!v.attach, body: v.body.trim() || v.title.trim() })
  U("board-" + bk).page = 1; Demo.go("/board/" + bk); Demo.toast("글을 등록했습니다")
})
Demo.on("postDel", function (d) {
  POSTS[d.key] = POSTS[d.key].filter(function (p) { return p.id !== +d.id }); Demo.go("/board/" + d.key); Demo.toast("글을 삭제했습니다")
})
Demo.on("fakeDown", function () { Demo.toast("체험판에서는 파일을 내려받을 수 없습니다") })

/* ═════════ 전자결재 ═════════ */
var BOXES = [["all", "전체문서"], ["mine", "기안함"], ["approve", "결재함"], ["share", "협조·참조·공람"], ["super", "슈퍼바이징"]]
function docRows(box) {
  return DOCS.filter(function (d) {
    if (box === "mine") return d.drafter === "관리자"
    if (box === "approve") return isMyTurn(d)
    if (box === "share") return d.share
    if (box === "super") return d.sup
    return true
  }).map(function (d) { d.year = d.draft.slice(0, 4); return d })
}
function pageDocuments(route) {
  var box = route.query.box || "all", bi = Math.max(0, BOXES.findIndex(function (b) { return b[0] === box }))
  var key = "docs-" + box
  var h = M.pageHeader("전자문서 기안·결재", "문서를 기안하고 결재선에 따라 결재·반려를 처리합니다.", '<a role="button" data-slot="button" class="' + K.K21 + '" href="#/documents/new">' + ic("file-plus-corner") + "기안 작성</a>")
  h += M.tabs(BOXES.map(function (b) { var n = b[0] === "approve" ? DOCS.filter(isMyTurn).length : 0; return b[1] + (n ? " " + n : "") }), bi, "docBox", true)
  h += M.barCard(key, {
    targets: [["title", "제목"], ["drafter", "담당자"]], ph: "검색어 입력",
    filters: [{ label: "연도 선택", field: "year", all: "전체 연도", options: [M.YEAR, String(+M.YEAR - 1)] }, { label: "문서 유형 선택", field: "type", all: "전체 유형", options: DOC_TYPES },
      { label: "상태 선택", field: "status", all: "전체 상태", options: ["결재대기", "진행중", "완료", "반려"] }],
    sorts: ["시행일 최신순", "시행일 오래된순"], fields: ["title", "drafter", "no"], tcls: "sm:min-w-[60rem]", rowAct: "docOpen",
    empty: box === "approve" ? "지금 결재할 문서가 없습니다." : "문서가 없습니다.",
    cols: [
      { h: "번호", th: "L:hidden w-40 sm:table-cell", td: "N:hidden text-sm whitespace-nowrap text-muted-foreground tabular-nums sm:table-cell", v: function (r) { return esc(r.no) } },
      { h: "시행일", th: "C:hidden w-24 text-center sm:table-cell", td: "W:hidden text-center text-sm text-muted-foreground tabular-nums sm:table-cell", v: function (r) { return esc(r.eff) } },
      { h: "유형", th: "C:hidden w-24 text-center sm:table-cell", td: "N:hidden text-center text-sm whitespace-nowrap sm:table-cell", v: function (r) { return esc(r.type) } },
      { h: "제목", th: "L:sm:min-w-64", td: "N:max-w-0 whitespace-normal sm:max-w-none", v: function (r) {
        var c = curStep(r)
        return '<a class="flex flex-col" href="#/documents/' + r.id + '"><span class="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-medium"><span class="break-words">' + esc(r.title) + "</span>" + (r.attach ? ic("paperclip", "size-3.5 shrink-0 text-muted-foreground") : "") + "</span>" +
          '<span class="text-xs text-muted-foreground">' + esc(r.line.map(function (s) { return s.name }).join(" → ")) + (c && (r.status === "결재대기" || r.status === "진행중") ? " · 현재 " + esc(c.name) : "") + "</span>" +
          '<span class="mt-0.5 text-xs text-muted-foreground tabular-nums sm:hidden">' + esc(r.type + " · " + r.drafter + " · " + r.draft) + "</span></a>"
      } },
      { h: "담당자", th: "L:hidden w-32 sm:table-cell", td: "N:hidden text-sm whitespace-normal sm:table-cell", v: function (r) { return esc(r.drafter) + '<span class="block text-xs text-muted-foreground">' + esc(r.dept) + "</span>" } },
      { h: "기안일", th: "C:hidden w-24 text-center sm:table-cell", td: "W:hidden text-center text-sm text-muted-foreground tabular-nums sm:table-cell", v: function (r) { return esc(r.draft) } },
      { h: "상태", th: "C:w-24 text-center", td: "N:text-center whitespace-normal", v: function (r) { return M.statusBadge(r.status) } }
    ]
  }, docRows(box))
  var g = route.query.box === "mine" ? "내문서함" : "문서관리"
  return M.shell(route, "전자결재", g, h)
}
Demo.on("docBox", function (d) { var b = BOXES[+d.i][0]; Demo.go(b === "all" ? "/documents" : "/documents?box=" + b) })
Demo.on("docOpen", function (d) { Demo.go("/documents/" + d.id) })
function pageDocNew(route) {
  var h = M.pageHeader("기안 작성", "문서 유형과 결재선을 고르고 내용을 쓰면 결재 대기 문서로 올라갑니다.", '<a role="button" data-slot="button" class="' + K.K14 + '" href="#/documents">' + ic("chevron-left") + "목록</a>")
  var paths = M.DATA.PATHS.filter(function (p) { return p.status === "사용" })
  h += '<div data-slot="card" data-size="default" class="' + K.K94 + '"><form class="px-(--card-spacing) flex flex-col gap-4" data-submit="docSave">' + M.grid2(
    M.field("문서 유형", M.nsel("type", DOC_TYPES, "기안문")) + M.field("시행일", M.inp("eff", TODAY, "", "date", " required")) +
    M.field("제목", M.inp("title", "", "예) 11월 여가 프로그램 운영 계획", "text", ' required maxlength="80"'), 1) +
    M.field("결재선", M.nsel("path", paths.map(function (p) { return [p.id, p.name + " (" + p.line.join(" → ") + ")"] }), paths[0] && paths[0].id), 1) +
    M.field("내용", M.ta("body", "1. 목적:\n2. 기간:\n3. 내용:\n\n붙임  1부.  끝.", "").replace("demo-textarea", "demo-textarea demo-textarea-lg"), 1)) +
    '<div class="flex justify-end gap-2 border-t pt-4"><a role="button" data-slot="button" class="' + K.K14 + '" href="#/documents">취소</a><button type="submit" data-slot="button" class="' + K.K21 + '">' + ic("file-check") + "결재 올리기</button></div></form></div>"
  return M.shell(route, "전자결재", "문서관리", h)
}
Demo.on("docSave", function (v) {
  if (!v.title.trim()) { Demo.toast("제목을 입력해 주세요"); return }
  var p = M.DATA.PATHS.filter(function (x) { return String(x.id) === String(v.path) })[0]
  var names = p ? p.line : ["김민준", "박상우"]
  var line = [{ name: "관리자", pos: "기안", state: "기안", at: TODAY }].concat(names.map(function (n) { return { name: n, pos: n === "박상우" ? "원장" : (M.STAFF.filter(function (s) { return s.name === n })[0] || { pos: "결재" }).pos, state: "대기", at: "" } }))
  var id = DOCS.reduce(function (m, d) { return Math.max(m, d.id) }, 0) + 1
  var no = "늘봄-" + M.YEAR + "-" + String(981 + (id - 5000)).padStart(4, "0")
  DOCS.unshift({ id: id, no: no, type: v.type, title: v.title.trim(), drafter: "관리자", dept: M.ME.dept, draft: TODAY, eff: v.eff, status: "결재대기", line: line, step: 1, attach: false, share: false, sup: false, body: v.body })
  Demo.go("/documents/" + id); Demo.toast("결재를 올렸습니다 · 결재 대기")
})
function pageDocView(route, id) {
  var d = DOCS.filter(function (x) { return x.id === id })[0]
  if (!d) return pageDocuments({ path: "/documents", query: {} })
  var pending = d.status === "결재대기" || d.status === "진행중"
  var h = M.pageHeader("전자문서 기안·결재", "문서 내용과 결재 진행 상황을 확인합니다.", '<a role="button" data-slot="button" class="' + K.K14 + '" href="#/documents' + (d.drafter === "관리자" ? "?box=mine" : "") + '">' + ic("chevron-left") + "목록</a>" +
    (pending ? M.btn("반려", "ban", "docReject", ' data-id="' + d.id + '"') + M.pbtn("결재", "circle-check", "docApprove", ' data-id="' + d.id + '"') : ""))
  var stepCells = d.line.map(function (s, i) {
    var cur = pending && i === d.step
    var st = s.state === "승인" ? M.badge("ok", "승인") : s.state === "반려" ? M.badge("bad", "반려") : s.state === "기안" ? M.badge("sec", "기안") : cur ? M.badge("warn", "결재 차례") : M.badge("muted", "대기")
    return '<div class="flex min-w-28 flex-col items-center gap-1 rounded-lg border px-3 py-2 text-center' + (cur ? " bg-accent/40" : "") + '"><span class="text-xs text-muted-foreground">' + esc(s.pos) + '</span><span class="font-semibold">' + esc(s.name) + "</span>" + st +
      '<span class="text-xs text-muted-foreground tabular-nums">' + esc(s.at || "-") + "</span></div>"
  }).join("")
  h += '<div data-slot="card" data-size="default" class="' + K.K94 + '"><div data-slot="card-header" class="' + K.K213 + '"><div class="flex flex-wrap items-center gap-2">' + M.badge("sec", d.type) + M.statusBadge(d.status) + '<span class="text-sm text-muted-foreground tabular-nums">' + esc(d.no) + "</span></div>" +
    '<div data-slot="card-title" class="font-medium group-data-[size=sm]/card:text-sm text-lg">' + esc(d.title) + '</div><div data-slot="card-description" class="text-sm text-muted-foreground tabular-nums">기안 ' + esc(d.drafter) + " (" + esc(d.dept) + ") · 기안일 " + esc(d.draft) + " · 시행일 " + esc(d.eff) + "</div></div>" +
    '<div data-slot="card-content" class="px-(--card-spacing) flex flex-col gap-4"><div><p class="mb-2 text-sm font-medium">결재선</p><div class="flex flex-wrap gap-2">' + stepCells + "</div></div>" +
    (pending ? '<p class="' + K.K219 + ' text-sm">' + ic("info", "mt-0.5 size-5 shrink-0") + "<span>체험판에서는 관리자 계정이 현재 결재자를 대신해 <b>결재</b> 또는 <b>반려</b>할 수 있습니다.</span></p>" : "") +
    '<div class="whitespace-pre-wrap break-words rounded-lg border bg-muted/30 p-4 text-sm leading-relaxed">' + esc(d.body) + "</div></div></div>"
  return M.shell(route, "전자결재", "문서관리", h)
}
Demo.on("docApprove", function (d) {
  var doc = DOCS.filter(function (x) { return x.id === +d.id })[0]
  var s = doc.line[doc.step]; s.state = "승인"; s.at = TODAY
  doc.step++
  if (doc.step >= doc.line.length) { doc.status = "완료"; Demo.toast("최종 결재 완료 · 문서가 완료되었습니다") }
  else { doc.status = "진행중"; Demo.toast(s.name + " 결재 완료 · 다음 결재자 " + doc.line[doc.step].name) }
  Demo.update()
})
Demo.on("docReject", function (d) {
  var doc = DOCS.filter(function (x) { return x.id === +d.id })[0]
  var s = doc.line[doc.step]; s.state = "반려"; s.at = TODAY; doc.status = "반려"
  Demo.update(); Demo.toast("문서를 반려했습니다")
})

/* ═════════ 연차관리 ═════════ */
var LV = { tab: 0 }
var LV_TABS = ["전체", "내 휴가", "결재함", "직원별 연차"]
function quota(name) {
  if (name === "관리자") return 15
  var s = M.STAFF.filter(function (x) { return x.name === name })[0]
  var y = s ? +M.YEAR - +s.hired.slice(0, 4) : 0
  return Math.min(25, 15 + Math.floor(Math.max(0, y - 1) / 2))
}
function used(name) { return LEAVES.filter(function (l) { return l.name === name && l.status === "승인" && l.kind !== "경조휴가" && l.kind !== "공가" }).reduce(function (s, l) { return s + l.days }, 0) }
function pageLeave(route) {
  if (route.query.view === "approve" && !LV.fromQuery) { LV.tab = 2; LV.fromQuery = true }
  var tot = quota("관리자"), u = used("관리자"), pend = LEAVES.filter(function (l) { return l.name === "관리자" && l.status === "승인대기" }).reduce(function (s, l) { return s + l.days }, 0)
  var h = M.pageHeader("연차관리", "휴가를 신청하고, 결재함에서 승인·반려를 처리합니다.", M.pbtn("휴가 신청", "plus", "lvNew"))
  h += '<div data-slot="card" data-size="default" class="' + K.K12 + '"><div data-slot="card-content" class="flex flex-wrap items-center gap-x-10 gap-y-4 p-5"><div class="min-w-44"><h2 class="text-base font-semibold">내 연차 현황</h2>' +
    '<p class="text-muted-foreground tabular-nums"><b class="text-2xl font-bold text-foreground">' + (tot - u) + "</b>일 남음 / 총 " + tot + "일</p></div>" +
    '<p class="max-w-xl text-muted-foreground">올해 <b class="text-foreground tabular-nums">' + u + "일</b>을 사용했고, 승인 대기 중인 신청이 <b class=\"text-foreground tabular-nums\">" + pend + "일</b> 있습니다. 승인되면 남은 연차에서 바로 빠집니다.</p></div></div>"
  var nApprove = LEAVES.filter(function (l) { return l.status === "승인대기" }).length
  h += M.tabs(LV_TABS.map(function (t, i) { return i === 2 && nApprove ? t + " " + nApprove : t }), LV.tab, "lvTab")
  if (LV.tab === 3) {
    var rows = M.STAFF.concat([{ id: 0, name: "관리자", dept: M.ME.dept, pos: M.ME.pos }]).map(function (s, i) { var q = quota(s.name), us = used(s.name); return { id: i + 1, name: s.name, dept: s.dept, pos: s.pos, q: q, u: us, r: q - us } })
    h += M.headCard("leave-staff", { title: "직원별 연차", fields: ["name", "dept"], filter: { label: "부서 필터", field: "dept", all: "부서 전체", options: M.DEPTS }, ph: "이름 입력 후 Enter",
      cols: [{ h: "이름", th: "L:pl-6", td: "W:h-12 pl-6 font-medium text-foreground", v: function (r) { return esc(r.name) } }, { h: "부서", td: "W:h-12", v: function (r) { return esc(r.dept) } },
        { h: "직위", td: "W:h-12 text-muted-foreground", v: function (r) { return esc(r.pos) } }, { h: "총 연차", th: "C:text-right", td: "W:h-12 text-right tabular-nums", v: function (r) { return r.q + "일" } },
        { h: "사용", th: "C:text-right", td: "W:h-12 text-right tabular-nums", v: function (r) { return r.u + "일" } }, { h: "잔여", th: "L:pr-6 text-right", td: "W:h-12 pr-6 text-right font-semibold tabular-nums", v: function (r) { return r.r + "일" } }] }, rows)
    return M.shell(route, "인사관리", "연차관리", h)
  }
  var base = LEAVES.filter(function (l) { return LV.tab === 1 ? l.name === "관리자" : LV.tab === 2 ? l.status === "승인대기" : true }).map(function (l) { l.year = l.start.slice(0, 4); return l })
  var cols = [
    { h: "연번", th: "L:w-28", td: "N:text-sm whitespace-nowrap text-muted-foreground tabular-nums", v: function (r) { return esc(r.no) } },
    { h: "상태", th: "C:w-24 text-center", td: "N:text-center whitespace-normal", v: function (r) { return M.statusBadge(r.status) + '<span class="mt-0.5 block text-xs whitespace-nowrap text-muted-foreground">' + (r.status === "승인대기" ? "결재 " + esc(r.approver) : esc(r.approver)) + "</span>" } },
    { h: "신청자", th: "L:w-28", td: "N:text-sm whitespace-normal", v: function (r) { return esc(r.name) + '<span class="block text-xs text-muted-foreground">' + esc(r.dept) + "</span>" } },
    { h: "휴가종류", th: "L:w-32", td: "N:text-sm whitespace-normal", v: function (r) { return esc(r.kind) } },
    { h: "기간", th: "L:w-48", td: "N:text-sm whitespace-normal text-muted-foreground tabular-nums", v: function (r) { return '<span class="whitespace-nowrap">' + esc(r.start) + "</span>" + (r.end !== r.start ? ' <span class="whitespace-nowrap">~ ' + esc(r.end) + "</span>" : "") } },
    { h: "일수", th: "C:w-20 text-right", td: "N:text-right whitespace-normal tabular-nums", v: function (r) { return r.days + "일" } },
    { h: "사유", th: "L:min-w-48", td: "N:whitespace-normal", v: function (r) { return '<span class="break-words text-muted-foreground">' + esc(r.reason) + "</span>" } },
    { h: "신청일", th: "C:w-24 text-center", td: "W:text-center text-sm text-muted-foreground tabular-nums", v: function (r) { return esc(r.applied) } }
  ]
  if (LV.tab === 2) cols.push({ h: "처리", th: "C:w-36 text-center", td: "W:text-center", v: function (r) {
    return '<div class="flex justify-center gap-1"><button type="button" data-slot="button" class="' + K.K165 + '" data-act="lvApprove" data-id="' + r.id + '">' + ic("check") + "승인</button>" +
      '<button type="button" data-slot="button" class="' + K.K166 + '" data-act="lvReject" data-id="' + r.id + '">반려</button></div>'
  } })
  h += M.barCard("leave-" + LV.tab, {
    targets: [["name", "신청자"], ["reason", "사유"]], ph: "검색어 입력",
    filters: [{ label: "연도 선택", field: "year", all: "전체 연도", options: [M.YEAR] }, { label: "상태 선택", field: "status", all: "전체 상태", options: ["승인대기", "승인", "반려", "취소"] },
      { label: "휴가 종류 선택", field: "kind", all: "전체 종류", options: LEAVE_KINDS }, { label: "휴가자 선택", field: "name", all: "전체 직원", options: ["관리자"].concat(M.staffNames()), cls: K.K104 }],
    sorts: ["연번순", "연번 역순"], fields: ["name", "reason"], cols: cols, rowAct: LV.tab === 2 ? null : "lvOpen", empty: LV.tab === 2 ? "승인할 휴가 신청이 없습니다." : "휴가 신청 내역이 없습니다."
  }, base)
  return M.shell(route, "인사관리", "연차관리", h)
}
function countDays(a, b, kind) {
  if (kind.indexOf("반차") >= 0) return 0.5
  var n = 0, d = a
  while (d <= b) { var w = M.parse(d).getDay(); if (w && w !== 6) n++; d = M.addDays(d, 1) }
  return Math.max(n, 1)
}
Demo.on("lvTab", function (d) { LV.tab = +d.i; Demo.update() })
Demo.on("lvNew", function () {
  M.openModal({ title: "휴가 신청", submit: "lvSave", ok: "신청", body: M.grid2(M.field("휴가 종류", M.nsel("kind", LEAVE_KINDS, "연차")) + M.field("결재자", M.nsel("approver", ["김민준", "최유진", "장예린"], "김민준")) +
    M.field("시작일", M.inp("start", M.addDays(TODAY, 3), "", "date", " required")) + M.field("종료일", M.inp("end", M.addDays(TODAY, 3), "", "date", " required")) + M.field("사유", M.inp("reason", "개인 사유", "", "text", ' maxlength="60"'), 1)) +
    '<p class="text-xs text-muted-foreground">반차는 0.5일, 연차는 주말을 뺀 날짜 수로 계산합니다. 신청하면 [결재함] 탭에서 승인 흐름을 바로 확인할 수 있습니다.</p>' })
})
Demo.on("lvSave", function (v) {
  if (v.end < v.start) { Demo.toast("종료일이 시작일보다 빠릅니다"); return }
  var days = countDays(v.start, v.kind.indexOf("반차") >= 0 ? v.start : v.end, v.kind)
  var id = LEAVES.reduce(function (m, l) { return Math.max(m, l.id) }, 0) + 1
  var no = LEAVES.reduce(function (m, l) { return Math.max(m, +l.no.slice(5)) }, 0) + 1
  LEAVES.unshift({ id: id, no: M.YEAR + "-" + String(no).padStart(4, "0"), status: "승인대기", name: "관리자", dept: M.ME.dept, kind: v.kind, start: v.start, end: v.kind.indexOf("반차") >= 0 ? v.start : v.end, days: days, reason: v.reason || "개인 사유", applied: TODAY, approver: v.approver })
  S.modal = null; LV.tab = 2; Demo.update(); Demo.toast("휴가를 신청했습니다 · " + days + "일, 승인 대기")
})
function lvSet(id, st) {
  var l = LEAVES.filter(function (x) { return x.id === +id })[0]; l.status = st
  S.modal = null; Demo.update()
  Demo.toast(l.name + " " + l.kind + " " + l.days + "일 " + (st === "승인" ? "승인" : "반려") + " · 잔여 " + (quota(l.name) - used(l.name)) + "일")
}
Demo.on("lvApprove", function (d) { lvSet(d.id, "승인") })
Demo.on("lvReject", function (d) { lvSet(d.id, "반려") })
Demo.on("lvOpen", function (d) {
  var l = LEAVES.filter(function (x) { return x.id === +d.id })[0]
  var pend = l.status === "승인대기"
  M.openModal({ title: "휴가 신청 상세", body: M.infoRows([["연번", esc(l.no)], ["상태", M.statusBadge(l.status)], ["신청자", esc(l.name + " (" + l.dept + ")")], ["휴가 종류", esc(l.kind)],
    ["기간", esc(l.start + (l.end !== l.start ? " ~ " + l.end : ""))], ["일수", l.days + "일"], ["사유", esc(l.reason), 1], ["남은 연차", (quota(l.name) - used(l.name)) + "일 / 총 " + quota(l.name) + "일", 1]]),
    footer: pend ? M.btn("반려", "ban", "lvReject", ' data-id="' + l.id + '"') + M.pbtn("승인", "check", "lvApprove", ' data-id="' + l.id + '"') : M.pbtn("닫기", "", "modalClose") })
})

M.pages = M.pages || {}
Object.assign(M.pages, { schedule: pageSchedule, worklog: pageWorklog, boardList: boardList, boardView: boardView, boardWrite: boardWrite, documents: pageDocuments, docNew: pageDocNew, docView: pageDocView, leave: pageLeave })
M.BOARDS = BOARDS
})()

;(function () {
"use strict"
var M = MI, esc = M.esc, ic = M.ic, S = M.S, U = M.U, TODAY = M.TODAY, won = Demo.won

function byId(list, id) { return list.filter(function (x) { return String(x.id) === String(id) })[0] }
function thisMonth(d) { return d.slice(0, 7) === M.MONTH }
function monthOpts(n) { var a = []; for (var i = 0; i < n; i++) { var p = M.parse(TODAY); p.setDate(1); p.setMonth(p.getMonth() - i); var ym = M.fmt(p).slice(0, 7); a.push([ym, ym.replace("-", "년 ") + "월"]) } return a }
function head(title, desc, actions) { return M.pageHeader(title, desc, actions) }

/* ═════════ 법인카드 사용관리 ═════════ */
var CARDS = ["운영비 카드", "사업비 카드", "후원금 카드"]
var BUDGETS = ["사무용품비", "프로그램 재료비", "차량유지비", "회의비", "시설유지비", "소모품비"]
var CU_T = [["문구 할인점", "사무용품 구입", "사무용품비"], ["동네 마트", "프로그램 재료 구입", "프로그램 재료비"], ["주유소", "업무용 차량 주유", "차량유지비"], ["카페", "운영위원회 다과", "회의비"],
  ["철물점", "시설 소모품 구입", "시설유지비"], ["온라인몰", "생활용품 구입", "소모품비"], ["인쇄소", "교육 자료 인쇄", "사무용품비"], ["꽃집", "행사 장식용 꽃", "프로그램 재료비"]]
var CARDUSE = []
;(function () {
  for (var i = 0; i < 76; i++) {
    var t = M.pick(CU_T), w = M.pick(M.STAFF), d = M.addDays(TODAY, -Math.floor(i * 0.9))
    CARDUSE.push({ id: i + 1, date: d, card: CARDS[i % 3], cardNo: ["****-1201", "****-3402", "****-5603"][i % 3], merchant: t[0], desc: t[1], budget: t[2], amount: M.rint(8, 240) * 1000 + M.rint(0, 9) * 100,
      proof: i < 5 || M.rnd() < 0.12 ? "미제출" : "증빙완료", status: i < 3 ? "결재대기" : "승인", user: w.name })
  }
})()
var CV = { tab: 0 }
function pageCard(route) {
  var key = "card", u = U(key, { f: { month: M.MONTH } })
  var mon = CARDUSE.filter(function (c) { return thisMonth(c.date) })
  var h = head("법인카드 사용관리", "법인카드 사용 내역을 등록하고 증빙과 예산과목을 함께 관리합니다.", M.pbtn("사용 등록", "plus", "cardNew"))
  h += M.kpis([["wallet", "이번 달 사용액", won(mon.reduce(function (s, c) { return s + c.amount }, 0))], ["receipt", "이번 달 사용 건수", mon.length + "건"],
    ["badge-check", "증빙 완료", mon.filter(function (c) { return c.proof === "증빙완료" }).length + "건", "이번 달 " + mon.length + "건 기준"], ["file-exclamation-point", "증빙 미제출", CARDUSE.filter(function (c) { return c.proof === "미제출" }).length + "건", "확인 필요"]])
  h += M.tabs(["사용 내역", "카드·예산과목"], CV.tab, "cardTab")
  if (CV.tab === 0) {
    h += M.barCard(key, {
      targets: [["desc", "사용내역"], ["merchant", "가맹점"], ["user", "사용자"]], ph: "사용내역·가맹점으로 찾기",
      filters: [{ label: "사용 월 선택", field: "month", all: "전체 기간", options: monthOpts(3), cls: K.K19 }, { label: "카드 선택", field: "card", all: "전체 카드", options: CARDS, cls: K.K18 },
        { label: "예산과목 선택", field: "budget", all: "전체 예산과목", options: BUDGETS, cls: K.K111 }],
      sorts: ["사용일 최신순", "사용일 오래된순"], fields: ["desc", "merchant", "user"], rowAct: "cardOpen",
      cols: [
        { h: "사용일자", th: "L:w-28", td: "W:text-sm text-muted-foreground tabular-nums", v: function (r) { return esc(r.date) } },
        { h: "카드", th: "L:w-32", td: "N:break-keep whitespace-normal", v: function (r) { return esc(r.card) + '<span class="block text-xs text-muted-foreground tabular-nums">' + esc(r.cardNo) + "</span>" } },
        { h: "가맹점 · 사용내역", th: "L:", td: "N:max-w-80 whitespace-normal break-words", v: function (r) { return '<span class="font-medium">' + esc(r.desc) + '</span><span class="block text-xs text-muted-foreground">' + esc(r.merchant) + "</span>" } },
        { h: "예산과목", th: "L:w-32", td: "N:text-sm break-keep whitespace-normal text-muted-foreground", v: function (r) { return esc(r.budget) } },
        { h: "금액", th: "C:w-28 text-right", td: "W:text-right font-semibold tabular-nums", v: function (r) { return Demo.num(r.amount) } },
        { h: "증빙", th: "L:w-18", td: "W:text-sm", v: function (r) { return r.proof === "증빙완료" ? '<span class="text-muted-foreground">영수증</span>' : '<span class="text-destructive">미제출</span>' } },
        { h: "상태", th: "L:w-18", td: "W:text-sm", v: function (r) { return M.statusBadge(r.status) } },
        { h: "사용자", th: "L:w-26", td: "N:text-sm whitespace-normal", v: function (r) { return esc(r.user) } },
        { h: "관리", th: "C:w-20 text-center", td: "W:text-center", v: function (r) { return M.ellipsisBtn(r.date + " " + r.user + " 사용 기록 관리", "cardMenu", r.id) } }
      ]
    }, CARDUSE.map(function (c) { c.month = c.date.slice(0, 7); return c }))
  } else {
    var cardRows = CARDS.map(function (c, i) { var l = CARDUSE.filter(function (x) { return x.card === c && thisMonth(x.date) }); return { id: i + 1, card: c, no: ["****-1201", "****-3402", "****-5603"][i], holder: ["운영지원팀", "생활지원1팀", "운영지원팀"][i], n: l.length, sum: l.reduce(function (s, x) { return s + x.amount }, 0) } })
    var bRows = BUDGETS.map(function (b, i) { var l = CARDUSE.filter(function (x) { return x.budget === b && x.date.slice(0, 4) === M.YEAR }); var plan = [3000000, 8000000, 6000000, 2000000, 5000000, 3000000][i]; var s = l.reduce(function (a, x) { return a + x.amount }, 0); return { id: i + 1, b: b, plan: plan, sum: s, rate: Math.round(s / plan * 100) } })
    h += '<div class="grid grid-cols-1 gap-4 xl:grid-cols-2"><div data-slot="card" data-size="default" class="' + K.K12 + '"><div class="border-b p-4 font-semibold">카드 목록</div>' + M.table([
      { h: "카드", td: "W:font-semibold", v: function (r) { return esc(r.card) } }, { h: "카드번호", td: "W:tabular-nums text-muted-foreground", v: function (r) { return esc(r.no) } }, { h: "관리 부서", v: function (r) { return esc(r.holder) } },
      { h: "이번 달", th: "C:text-right", td: "W:text-right tabular-nums", v: function (r) { return r.n + "건 · " + Demo.num(r.sum) } }], cardRows) + "</div>" +
      '<div data-slot="card" data-size="default" class="' + K.K12 + '"><div class="border-b p-4 font-semibold">예산과목별 사용 (' + M.YEAR + "년)</div>" + M.table([
      { h: "예산과목", td: "W:font-semibold", v: function (r) { return esc(r.b) } }, { h: "예산", th: "C:text-right", td: "W:text-right tabular-nums", v: function (r) { return Demo.num(r.plan) } },
      { h: "사용", th: "C:text-right", td: "W:text-right tabular-nums", v: function (r) { return Demo.num(r.sum) } }, { h: "집행률", th: "C:text-right", td: "W:text-right tabular-nums", v: function (r) { return r.rate + "%" } }], bRows) + "</div></div>"
  }
  return M.shell(route, "행정지원", "카드사용관리", h)
}
Demo.on("cardTab", function (d) { CV.tab = +d.i; Demo.update() })
Demo.on("cardNew", function () {
  M.openModal({ title: "카드 사용 등록", submit: "cardSave", ok: "등록", body: M.grid2(M.field("사용일자", M.inp("date", TODAY, "", "date", " required")) + M.field("카드", M.nsel("card", CARDS, CARDS[0])) +
    M.field("가맹점", M.inp("merchant", "", "예) 문구 할인점", "text", " required")) + M.field("예산과목", M.nsel("budget", BUDGETS, BUDGETS[0])) +
    M.field("사용내역", M.inp("desc", "", "예) 사무용품 구입", "text", " required"), 1) + M.field("금액(원)", M.inp("amount", "", "예) 35000", "number", ' required min="100" step="100"')) +
    M.field("증빙", M.nsel("proof", ["증빙완료", "미제출"], "증빙완료"))) })
})
Demo.on("cardSave", function (v) {
  CARDUSE.unshift({ id: M.nextId(CARDUSE), date: v.date, month: v.date.slice(0, 7), card: v.card, cardNo: ["****-1201", "****-3402", "****-5603"][CARDS.indexOf(v.card)], merchant: v.merchant, desc: v.desc, budget: v.budget, amount: +v.amount || 0, proof: v.proof, status: "결재대기", user: "관리자" })
  CARDUSE.sort(function (a, b) { return b.date.localeCompare(a.date) })
  S.modal = null; U("card").page = 1; Demo.update(); Demo.toast("사용 내역을 등록했습니다 · " + won(+v.amount || 0))
})
Demo.on("cardMenu", function (d, el) {
  var c = byId(CARDUSE, d.id)
  M.openPop(el, (c.proof === "미제출" ? M.popItem("증빙 완료로 표시", "badge-check", "cardProof", ' data-id="' + c.id + '"') : "") + (c.status === "결재대기" ? M.popItem("승인 처리", "circle-check", "cardOk", ' data-id="' + c.id + '"') : "") +
    M.popItem("상세 보기", "file-text", "cardOpen", ' data-id="' + c.id + '"') + M.popItem("삭제", "trash2", "cardDel", ' data-id="' + c.id + '"'), true)
})
Demo.on("cardProof", function (d) { byId(CARDUSE, d.id).proof = "증빙완료"; S.pop = null; Demo.update(); Demo.toast("증빙 완료로 바꿨습니다") })
Demo.on("cardOk", function (d) { byId(CARDUSE, d.id).status = "승인"; S.pop = null; Demo.update(); Demo.toast("승인 처리했습니다") })
Demo.on("cardDel", function (d) { CARDUSE.splice(CARDUSE.indexOf(byId(CARDUSE, d.id)), 1); S.pop = null; Demo.update(); Demo.toast("삭제했습니다") })
Demo.on("cardOpen", function (d) {
  var c = byId(CARDUSE, d.id)
  M.openModal({ title: "카드 사용 상세", body: M.infoRows([["사용일자", esc(c.date)], ["카드", esc(c.card + " " + c.cardNo)], ["가맹점", esc(c.merchant)], ["사용내역", esc(c.desc)], ["예산과목", esc(c.budget)], ["금액", won(c.amount)], ["증빙", esc(c.proof)], ["상태", M.statusBadge(c.status)], ["사용자", esc(c.user)]]),
    footer: (c.proof === "미제출" ? M.btn("증빙 완료로 표시", "badge-check", "cardProof", ' data-id="' + c.id + '"') : "") + M.pbtn("닫기", "", "modalClose") })
})

/* ═════════ 시설보수관리 ═════════ */
var REP_T = ["2층 복도 조명 교체", "A동 2호 출입문 손잡이 수리", "식당 배수구 막힘", "다목적홀 냉난방기 점검", "주차장 차단기 고장", "세탁실 세탁기 소음", "B동 창문 방충망 교체",
  "사무실 프린터 토너 교체", "샤워실 수전 누수", "현관 자동문 센서 점검", "교육실 블라인드 수리", "옥상 배수구 청소"]
var REPAIRS = []
;(function () {
  for (var i = 0; i < 52; i++) {
    var w = M.pick(M.STAFF), d = M.addDays(TODAY, -Math.floor(i * 2.3)), r = M.rnd()
    var st = i < 3 ? "접수" : i < 6 ? "처리중" : r < 0.82 ? "완료" : r < 0.92 ? "처리중" : "반려"
    REPAIRS.push({ id: i + 1, no: M.YEAR + "-" + String(142 - i).padStart(5, "0"), title: REP_T[i % REP_T.length], dept: w.dept, reporter: w.name, date: d, done: st === "완료" ? M.addDays(d, M.rint(0, 4)) : "", status: st, type: i % 7 === 3 ? "전산" : "시설보수", worker: i % 2 ? "홍시우" : "박지훈" })
  }
})()
var FV = { tab: 0 }
function pageFacility(route) {
  var key = "facility"
  var h = head("시설보수관리", "시설 고장과 보수 요청을 접수하고 처리 상태를 끝까지 관리합니다.", M.pbtn("보수 요청", "plus", "repNew"))
  var yr = REPAIRS.filter(function (r) { return r.date.slice(0, 4) === M.YEAR })
  h += M.kpis([["wrench", "올해 요청", yr.length + "건"], ["clock", "처리 대기", REPAIRS.filter(function (r) { return r.status === "접수" || r.status === "처리중" }).length + "건"],
    ["circle-check", "완료", REPAIRS.filter(function (r) { return r.status === "완료" }).length + "건"], ["ban", "반려", REPAIRS.filter(function (r) { return r.status === "반려" }).length + "건"]])
  h += M.tabs(["요청 목록", "처리담당자"], FV.tab, "repTab")
  if (FV.tab === 0) {
    h += M.barCard(key, {
      targets: [["", "제목·부서·접수자"]], ph: "제목·부서·접수자로 찾기",
      filters: [{ label: "요청 유형 선택", field: "type", all: "전체 유형", options: ["시설보수", "전산"] }, { label: "처리상태 선택", field: "status", all: "전체 상태", options: ["접수", "처리중", "완료", "반려"] }],
      sorts: ["접수번호순", "접수번호 역순"], fields: ["title", "dept", "reporter"], rowAct: "repOpen",
      cols: [
        { h: "접수번호", th: "L:w-28", td: "W:tabular-nums", v: function (r) { return esc(r.no) } },
        { h: "제목", th: "L:", td: "N:whitespace-normal", v: function (r) { return '<span class="font-medium">' + esc(r.title) + "</span>" + (r.type === "전산" ? ' <span data-slot="badge" class="' + K.K142 + '">전산</span>' : "") } },
        { h: "부서", th: "L:w-32", td: "N:text-sm whitespace-normal", v: function (r) { return esc(r.dept) } },
        { h: "접수자", th: "L:w-28", td: "N:text-sm whitespace-normal", v: function (r) { return esc(r.reporter) } },
        { h: "접수일자", th: "L:w-28", td: "W:text-sm tabular-nums", v: function (r) { return esc(r.date) } },
        { h: "처리일자", th: "L:w-28", td: "W:text-sm text-muted-foreground tabular-nums", v: function (r) { return esc(r.done || "-") } },
        { h: "상태", th: "C:w-24 text-center", td: "W:text-center", v: function (r) { return M.statusBadge(r.status) } },
        { h: "관리", th: "C:w-20 text-center", td: "W:text-center", v: function (r) { return M.ellipsisBtn(r.no + " 관리", "repMenu", r.id) } }
      ]
    }, REPAIRS)
  } else {
    var ws = ["홍시우", "박지훈"].map(function (n, i) { var s = M.STAFF.filter(function (x) { return x.name === n })[0]; var l = REPAIRS.filter(function (r) { return r.worker === n }); return { id: i + 1, name: n, dept: s.dept, ext: s.ext, n: l.length, open: l.filter(function (r) { return r.status === "접수" || r.status === "처리중" }).length, area: i ? "전산·사무기기" : "시설 전반" } })
    h += '<div data-slot="card" data-size="default" class="' + K.K12 + '">' + M.table([
      { h: "이름", td: "W:font-semibold", v: function (r) { return esc(r.name) } }, { h: "부서", v: function (r) { return esc(r.dept) } }, { h: "담당 분야", v: function (r) { return esc(r.area) } },
      { h: "내선", td: "W:tabular-nums text-muted-foreground", v: function (r) { return esc(r.ext) } }, { h: "맡은 요청", th: "C:text-right", td: "W:text-right tabular-nums", v: function (r) { return r.n + "건" } },
      { h: "처리 대기", th: "C:text-right", td: "W:text-right tabular-nums", v: function (r) { return r.open + "건" } }], ws) + "</div>"
  }
  return M.shell(route, "행정지원", "시설보수관리", h)
}
Demo.on("repTab", function (d) { FV.tab = +d.i; Demo.update() })
Demo.on("repNew", function () {
  M.openModal({ title: "보수 요청", submit: "repSave", ok: "요청", body: M.grid2(M.field("제목", M.inp("title", "", "예) 3층 화장실 조명 깜빡임", "text", " required"), 1) + M.field("요청 유형", M.nsel("type", ["시설보수", "전산"], "시설보수")) +
    M.field("부서", M.nsel("dept", M.DEPTS, M.ME.dept)) + M.field("위치·내용", M.ta("memo", "", "고장 위치와 상태를 적어 주세요"), 1)) })
})
Demo.on("repSave", function (v) {
  var max = REPAIRS.reduce(function (m, r) { return Math.max(m, +r.no.slice(5)) }, 0) + 1
  REPAIRS.unshift({ id: M.nextId(REPAIRS), no: M.YEAR + "-" + String(max).padStart(5, "0"), title: v.title, dept: v.dept, reporter: "관리자", date: TODAY, done: "", status: "접수", type: v.type, worker: v.type === "전산" ? "박지훈" : "홍시우" })
  S.modal = null; U("facility").page = 1; Demo.update(); Demo.toast("보수 요청을 접수했습니다")
})
function repSet(id, st) { var r = byId(REPAIRS, id); r.status = st; r.done = st === "완료" ? TODAY : ""; S.pop = null; S.modal = null; Demo.update(); Demo.toast(r.no + " · " + st + "(으)로 바꿨습니다") }
Demo.on("repMenu", function (d, el) {
  var r = byId(REPAIRS, d.id)
  M.openPop(el, (r.status === "접수" ? M.popItem("처리 시작", "wrench", "repGo", ' data-id="' + r.id + '"') : "") + (r.status !== "완료" ? M.popItem("완료 처리", "circle-check", "repDone", ' data-id="' + r.id + '"') : "") +
    (r.status !== "반려" && r.status !== "완료" ? M.popItem("반려", "ban", "repNo", ' data-id="' + r.id + '"') : "") + M.popItem("상세 보기", "file-text", "repOpen", ' data-id="' + r.id + '"'), true)
})
Demo.on("repGo", function (d) { repSet(d.id, "처리중") })
Demo.on("repDone", function (d) { repSet(d.id, "완료") })
Demo.on("repNo", function (d) { repSet(d.id, "반려") })
Demo.on("repOpen", function (d) {
  var r = byId(REPAIRS, d.id)
  M.openModal({ title: "보수 요청 " + r.no, body: M.infoRows([["제목", esc(r.title), 1], ["부서", esc(r.dept)], ["접수자", esc(r.reporter)], ["접수일자", esc(r.date)], ["처리일자", esc(r.done || "-")], ["처리담당", esc(r.worker)], ["상태", M.statusBadge(r.status)]]),
    footer: (r.status === "접수" || r.status === "처리중" ? M.btn("반려", "ban", "repNo", ' data-id="' + r.id + '"') + M.pbtn("완료 처리", "circle-check", "repDone", ' data-id="' + r.id + '"') : M.pbtn("닫기", "", "modalClose")) })
})

/* ═════════ 달력형 신청(차량 · 홀) ═════════ */
var VEH = [
  { id: 1, name: "승합차 1호", plate: "00가 1001", seats: "11인승", kind: "승합(하이브리드)" }, { id: 2, name: "경차 1호", plate: "00나 2002", seats: "4인승", kind: "경형" },
  { id: 3, name: "경차 2호", plate: "00다 3003", seats: "4인승", kind: "경형" }, { id: 4, name: "업무용 승용차", plate: "00라 4004", seats: "5인승", kind: "중형" },
  { id: 5, name: "승합차 2호", plate: "00마 5005", seats: "12인승", kind: "승합" }, { id: 6, name: "사무실 우선 차량", plate: "00바 6006", seats: "5인승", kind: "소형" }
]
var DEST = ["인근 공원", "구립 도서관", "대형마트", "구청 민원실", "체육센터", "협력 의료기관", "시립 미술관", "전통시장", "종합복지관", "수목원", "영화관", "미용실"]
var ROOMS = [{ id: 1, name: "다목적홀", seats: "60석" }, { id: 2, name: "교육실", seats: "20석" }, { id: 3, name: "소회의실", seats: "8석" }]
var HALL_T = ["평생교육 프로그램", "직원 인권교육", "자치회의 정기회의", "음악 활동", "보호자 간담회", "생일 축하 행사", "응급처치 교육", "운영위원회"]
var RIDES = [], HALLS = []
;(function () {
  var first = M.parse(M.MONTH + "-01")
  for (var off = -10; off < 45; off++) {
    var d = M.fmt(new Date(first.getFullYear(), first.getMonth(), 1 + off)), dw = M.parse(d).getDay()
    var n = dw === 0 || dw === 6 ? M.rint(0, 2) : M.rint(2, 7)
    for (var i = 0; i < n; i++) {
      var w = M.pick(M.STAFF), hh = [8, 9, 9, 10, 11, 13, 14, 16][M.rint(0, 7)]
      RIDES.push({ id: RIDES.length + 1, date: d, time: M.pad(hh) + ":" + ["00", "30", "50"][M.rint(0, 2)], dept: w.dept, driver: w.name, dest: M.pick(DEST), veh: M.pick(VEH).name, purpose: M.pick(["외부 활동 동행", "장보기 동행", "민원 업무", "정기 외래 동행", "여가 활동"]), status: d > TODAY && M.rnd() < 0.3 ? "신청" : "승인" })
    }
    if (dw > 0 && dw < 6 && M.rnd() < 0.7) {
      var w2 = M.pick(M.STAFF)
      HALLS.push({ id: HALLS.length + 1, date: d, time: M.pick(["10:00", "14:00", "16:00"]), dept: w2.dept, driver: w2.name, title: M.pick(HALL_T), room: M.pick(ROOMS).name, hours: M.rint(1, 3), status: d > TODAY && M.rnd() < 0.35 ? "신청" : "승인" })
    }
  }
  RIDES.sort(function (a, b) { return (a.date + a.time).localeCompare(b.date + b.time) })
  HALLS.sort(function (a, b) { return (a.date + a.time).localeCompare(b.date + b.time) })
})()
var CAL = { vehicle: { tab: 0, mode: 0, month: M.MONTH, veh: "", dept: "" }, hall: { tab: 0, mode: 0, month: M.MONTH, veh: "", dept: "" } }
function calItems(kind) {
  var c = CAL[kind], src = kind === "vehicle" ? RIDES : HALLS
  return src.filter(function (r) { return (!c.dept || r.dept === c.dept) && (!c.veh || (kind === "vehicle" ? r.veh : r.room) === c.veh) })
}
function calLabel(kind, r) { return r.time + "~ (" + r.dept + ") " + r.driver + " : " + (kind === "vehicle" ? r.dest + " / " + r.veh : r.title + " / " + r.room) + (r.status === "신청" ? " [신청]" : "") }
function pageCalendar(route, kind) {
  var c = CAL[kind], isV = kind === "vehicle", src = isV ? RIDES : HALLS
  var title = isV ? "차량운행관리" : "다목적홀 사용"
  var h = head(title, isV ? "업무용 차량 배차 일정을 확인하고 운행을 신청·접수합니다." : "다목적홀·교육실 사용 일정을 확인하고 사용을 신청합니다.", M.pbtn(isV ? "운행신청" : "사용 신청", "plus", "calNew", ' data-k="' + kind + '"'))
  var mon = src.filter(function (r) { return r.date.slice(0, 7) === M.MONTH })
  if (isV) {
    h += M.tabs(["배차일정표", "운행신청·접수", "차량정보"], c.tab, "calTab", false).replace(/data-act="calTab"/g, 'data-act="calTab" data-k="vehicle"')
    if (c.tab === 0) h += '<div class="' + K.K123 + '">' + VEH.map(function (v) {
      var n = mon.filter(function (r) { return r.veh === v.name }).length
      return '<div data-slot="card" data-size="default" class="' + K.K124 + '"><div data-slot="card-content" class="flex items-start gap-3 px-4"><div class="' + K.K83 + '">' + ic("car", "size-5") + '</div><div class="min-w-0 flex-1"><p class="font-semibold break-words text-foreground">' + esc(v.name) + '</p><p class="text-xs text-muted-foreground tabular-nums">' + esc(v.plate) + " · " + esc(v.kind) + '</p><p class="' + K.K125 + '"><span class="inline-flex items-center gap-1">' + ic("users", "size-3.5") + esc(v.seats) + '</span><span class="tabular-nums">이번 달 ' + n + "회</span></p></div></div></div>"
    }).join("") + "</div>"
  } else {
    h += M.tabs(["사용일정", "신청 목록", "공간정보"], c.tab, "calTab").replace(/data-act="calTab"/g, 'data-act="calTab" data-k="hall"')
    h += M.kpis([["calendar-check", "이번 달 사용", mon.length + "건"], ["clock", "승인 대기", src.filter(function (r) { return r.status === "신청" }).length + "건"],
      ["timer", "이번 달 사용 시간", mon.reduce(function (s, r) { return s + r.hours }, 0) + "시간"], ["building2", "등록 공간", ROOMS.length + "곳"]])
  }
  if (c.tab === 0) {
    var items = calItems(kind).filter(function (r) { return r.date.slice(0, 7) === c.month })
    var ym = c.month.split("-")
    h += '<div data-slot="card" data-size="default" class="' + K.K12 + '"><div data-slot="card-header" class="' + K.K126 + '"><div class="flex-1"><div data-slot="card-title" class="font-medium group-data-[size=sm]/card:text-sm text-base">' + ym[0] + "년 " + (+ym[1]) + "월 " + (isV ? "배차일정표" : "사용일정") +
      '<span data-slot="badge" data-variant="secondary" class="' + K.K127 + '">' + items.length + '건</span><span class="ml-3 text-sm font-normal text-muted-foreground tabular-nums">오늘 ' + items.filter(function (r) { return r.date === TODAY }).length + "건</span></div>" +
      '<div data-slot="card-description" class="text-sm text-muted-foreground">일정을 누르면 상세 정보를 볼 수 있습니다. [신청] 표시는 아직 승인되지 않은 신청입니다.</div></div>' +
      '<div class="flex flex-wrap items-center gap-2"><div role="group" aria-label="보기" class="flex rounded-lg bg-muted p-1">' +
      '<button type="button" data-slot="button" aria-pressed="' + (c.mode === 0) + '" class="' + (c.mode === 0 ? K.K128 : K.K129) + '" data-act="calMode" data-k="' + kind + '" data-m="0">달력</button>' +
      '<button type="button" data-slot="button" aria-pressed="' + (c.mode === 1) + '" class="' + (c.mode === 1 ? K.K128 : K.K129) + '" data-act="calMode" data-k="' + kind + '" data-m="1">날짜별 목록</button></div>' +
      '<button type="button" data-slot="button" aria-label="지난달" class="' + K.K13 + '" data-act="calMonth" data-k="' + kind + '" data-d="-1">' + ic("chevron-left") + "</button>" +
      '<button type="button" data-slot="button" class="' + K.K14 + '" data-act="calMonth" data-k="' + kind + '" data-d="0">이번 달</button>' +
      '<button type="button" data-slot="button" aria-label="다음달" class="' + K.K13 + '" data-act="calMonth" data-k="' + kind + '" data-d="1">' + ic("chevron-right") + "</button>" +
      M.sel(K.K18, isV ? "차량 선택" : "공간 선택", c.veh, [["", isV ? "전체 차량" : "전체 공간"]].concat((isV ? VEH : ROOMS).map(function (v) { return v.name })), "calVeh", ' data-k="' + kind + '"') +
      M.sel(K.K104, "부서 선택", c.dept, [["", "전체 부서"]].concat(M.DEPTS), "calDept", ' data-k="' + kind + '"') + "</div></div>"
    if (c.mode === 0) {
      h += M.monthGrid(c.month, function (d) { return items.filter(function (r) { return r.date === d }).map(function (r) { return { id: r.id, label: calLabel(kind, r) } }) }, isV ? "rideOpen" : "hallOpen", isV ? "rideDay" : "hallDay")
    } else {
      h += '<div class="overflow-x-auto border-t">' + M.table([
        { h: "일자", th: "L:w-36", td: "W:tabular-nums", v: function (r) { return esc(r.date) + " (" + M.dowOf(r.date) + ")" } }, { h: "시간", th: "L:w-20", td: "W:tabular-nums", v: function (r) { return esc(r.time) } },
        { h: isV ? "차량" : "공간", th: "L:w-36", v: function (r) { return esc(isV ? r.veh : r.room) } }, { h: isV ? "목적지" : "내용", td: "N:whitespace-normal", v: function (r) { return esc(isV ? r.dest : r.title) } },
        { h: "신청자", th: "L:w-36", v: function (r) { return esc(r.driver) + ' <span class="text-xs text-muted-foreground">' + esc(r.dept) + "</span>" } },
        { h: "상태", th: "C:w-24 text-center", td: "W:text-center", v: function (r) { return M.statusBadge(r.status) } }], items, { rowAct: isV ? "rideOpen" : "hallOpen", empty: "이 달 일정이 없습니다." }) + "</div>"
    }
    h += "</div>"
  } else if (c.tab === 1) {
    var key = kind + "-req"
    h += M.barCard(key, { targets: [["", "전체"], ["driver", "신청자"]], ph: "신청자·" + (isV ? "목적지" : "내용") + "로 찾기", filters: [{ label: "상태 선택", field: "status", all: "전체 상태", options: ["신청", "승인", "반려"] }],
      sorts: ["최근 일정순", "오래된 일정순"], fields: ["driver", "dest", "title", "dept"], rowAct: isV ? "rideOpen" : "hallOpen",
      cols: [{ h: "일자", th: "L:w-36", td: "W:tabular-nums", v: function (r) { return esc(r.date) + " " + esc(r.time) } }, { h: isV ? "차량" : "공간", th: "L:w-36", v: function (r) { return esc(isV ? r.veh : r.room) } },
        { h: isV ? "목적지 · 용도" : "내용", td: "N:whitespace-normal", v: function (r) { return isV ? '<span class="font-medium">' + esc(r.dest) + '</span><span class="block text-xs text-muted-foreground">' + esc(r.purpose) + "</span>" : esc(r.title) } },
        { h: "신청자", th: "L:w-32", v: function (r) { return esc(r.driver) } }, { h: "부서", th: "L:w-32", v: function (r) { return esc(r.dept) } },
        { h: "상태", th: "C:w-24 text-center", td: "W:text-center", v: function (r) { return M.statusBadge(r.status) } },
        { h: "처리", th: "C:w-28 text-center", td: "W:text-center", v: function (r) { return r.status === "신청" ? '<button type="button" data-slot="button" class="' + K.K165 + '" data-act="calOk" data-k="' + kind + '" data-id="' + r.id + '">' + ic("check") + "승인</button>" : '<span class="text-xs text-muted-foreground">-</span>' } }]
    }, src.slice().reverse())
  } else {
    var rows = isV ? VEH : ROOMS
    h += '<div data-slot="card" data-size="default" class="' + K.K12 + '">' + M.table(isV ? [
      { h: "차량", td: "W:font-semibold", v: function (r) { return esc(r.name) } }, { h: "차량번호", td: "W:tabular-nums", v: function (r) { return esc(r.plate) } }, { h: "차종", v: function (r) { return esc(r.kind) } },
      { h: "정원", v: function (r) { return esc(r.seats) } }, { h: "이번 달 운행", th: "C:text-right", td: "W:text-right tabular-nums", v: function (r) { return RIDES.filter(function (x) { return x.veh === r.name && thisMonth(x.date) }).length + "회" } },
      { h: "상태", th: "C:w-24 text-center", td: "W:text-center", v: function () { return M.statusBadge("사용") } }] : [
      { h: "공간", td: "W:font-semibold", v: function (r) { return esc(r.name) } }, { h: "수용 인원", v: function (r) { return esc(r.seats) } }, { h: "비품", v: function () { return "음향 · 빔프로젝터 · 의자" } },
      { h: "이번 달 사용", th: "C:text-right", td: "W:text-right tabular-nums", v: function (r) { return HALLS.filter(function (x) { return x.room === r.name && thisMonth(x.date) }).length + "건" } }], rows) + "</div>"
  }
  return M.shell(route, "행정지원", isV ? "차량운행관리" : "다목적홀 사용", h)
}
Demo.on("calTab", function (d) { CAL[d.k].tab = +d.i; Demo.update() })
Demo.on("calMode", function (d) { CAL[d.k].mode = +d.m; Demo.update() })
Demo.on("calVeh", function (v, el) { CAL[el.getAttribute("data-k")].veh = v; Demo.update() })
Demo.on("calDept", function (v, el) { CAL[el.getAttribute("data-k")].dept = v; Demo.update() })
Demo.on("calMonth", function (d) {
  var c = CAL[d.k], n = +d.d
  if (!n) c.month = M.MONTH
  else { var p = M.parse(c.month + "-01"); p.setMonth(p.getMonth() + n); c.month = M.fmt(p).slice(0, 7) }
  Demo.update()
})
function calDetail(kind, id) {
  var src = kind === "vehicle" ? RIDES : HALLS, r = byId(src, id), isV = kind === "vehicle"
  M.openModal({ title: isV ? "운행 상세" : "사용 상세", body: M.infoRows([["일자", esc(M.korDate(r.date))], ["시간", esc(r.time) + "~"], [isV ? "차량" : "공간", esc(isV ? r.veh : r.room)], [isV ? "목적지" : "내용", esc(isV ? r.dest : r.title)],
    ["신청자", esc(r.driver + " (" + r.dept + ")")], ["상태", M.statusBadge(r.status)]].concat(isV ? [["용도", esc(r.purpose), 1]] : [])),
    footer: r.status === "신청" ? M.btn("반려", "ban", "calNo", ' data-k="' + kind + '" data-id="' + r.id + '"') + M.pbtn("승인", "check", "calOk", ' data-k="' + kind + '" data-id="' + r.id + '"') : M.pbtn("닫기", "", "modalClose") })
}
Demo.on("rideOpen", function (d) { calDetail("vehicle", d.id) })
Demo.on("hallOpen", function (d) { calDetail("hall", d.id) })
Demo.on("rideDay", function (d) { CAL.vehicle.mode = 1; Demo.update(); Demo.toast(d.d + " 일정은 날짜별 목록에서 모두 볼 수 있습니다") })
Demo.on("hallDay", function (d) { CAL.hall.mode = 1; Demo.update() })
Demo.on("calOk", function (d) { var r = byId(d.k === "vehicle" ? RIDES : HALLS, d.id); r.status = "승인"; S.modal = null; Demo.update(); Demo.toast("승인했습니다") })
Demo.on("calNo", function (d) { var r = byId(d.k === "vehicle" ? RIDES : HALLS, d.id); r.status = "반려"; S.modal = null; Demo.update(); Demo.toast("반려했습니다") })
Demo.on("calNew", function (d) {
  var isV = d.k === "vehicle"
  M.openModal({ title: isV ? "차량 운행신청" : "다목적홀 사용 신청", submit: "calSave", ok: "신청", body: '<input type="hidden" name="k" value="' + d.k + '">' + M.grid2(
    M.field("일자", M.inp("date", M.addDays(TODAY, 1), "", "date", " required")) + M.field("시작 시간", M.inp("time", "10:00", "", "time", " required")) +
    M.field(isV ? "차량" : "공간", M.nsel("veh", (isV ? VEH : ROOMS).map(function (v) { return v.name }), "")) + M.field("부서", M.nsel("dept", M.DEPTS, M.ME.dept)) +
    M.field(isV ? "목적지" : "사용 내용", M.inp("dest", "", isV ? "예) 구립 도서관" : "예) 직원 교육", "text", " required"), 1) +
    (isV ? M.field("용도", M.inp("purpose", "외부 활동 동행"), 1) : M.field("사용 시간(시간)", M.inp("hours", "2", "", "number", ' min="1" max="8"')))) })
})
Demo.on("calSave", function (v) {
  var isV = v.k === "vehicle", src = isV ? RIDES : HALLS
  var r = { id: M.nextId(src), date: v.date, time: v.time, dept: v.dept, driver: "관리자", status: "신청" }
  if (isV) { r.dest = v.dest; r.veh = v.veh; r.purpose = v.purpose || "-" } else { r.title = v.dest; r.room = v.veh; r.hours = +v.hours || 1 }
  src.push(r); src.sort(function (a, b) { return (a.date + a.time).localeCompare(b.date + b.time) })
  CAL[v.k].month = v.date.slice(0, 7); S.modal = null; Demo.update(); Demo.toast("신청했습니다 · 달력에 [신청]으로 표시됩니다")
})

/* ═════════ 근태관리(시간외) ═════════ */
var OT = []
;(function () {
  var first = M.parse(M.MONTH + "-01")
  for (var off = 0; off < 31; off++) {
    var d = M.fmt(new Date(first.getFullYear(), first.getMonth(), 1 + off))
    if (d.slice(0, 7) !== M.MONTH || d > TODAY) continue
    var dw = M.parse(d).getDay(), n = dw === 0 || dw === 6 ? M.rint(1, 2) : M.rint(1, 4)
    for (var i = 0; i < n; i++) {
      var w = M.STAFF[M.rint(3, 22)], hrs = M.rint(1, 3), st = M.pad(18) + ":00"
      OT.push({ id: OT.length + 1, date: d, name: w.name, kind: dw === 0 || dw === 6 ? "휴일" : "연장", cmd: dw === 0 || dw === 6 ? "09:00~" + M.pad(9 + hrs) + ":00" : st + "~" + M.pad(18 + hrs) + ":00", plan: hrs, actual: dw === 0 || dw === 6 ? "09:02 · " + M.pad(9 + hrs) + ":05" : "18:01 · " + M.pad(18 + hrs) + ":04", task: M.pick(["저녁 프로그램 지원", "행사 준비", "외부 활동 귀가 동행", "서류 마감 정리", "야간 인수인계 보조", "시설 점검 입회"]) })
    }
  }
})()
var OTV = { tab: 0, sel: TODAY, closed: {} }
;(function () { for (var i = 1; i < 25; i++) { var d = M.addDays(TODAY, -i); if (d.slice(0, 7) === M.MONTH && i > 2) OTV.closed[d] = true } })()
function pageOvertime(route) {
  var key = "ot", u = U(key, { f: {} })
  var list = OT.filter(function (o) { return (!u.f.name || o.name === u.f.name) && (!u.f.kind || o.kind === u.f.kind) && (!u.q || (o.name + o.task).indexOf(u.q) >= 0) })
  var dates = {}; list.forEach(function (o) { (dates[o.date] = dates[o.date] || []).push(o) })
  var dkeys = Object.keys(dates).sort().reverse()
  var h = head("근태관리(시간외)", "시간외근무 명령을 등록하고 날짜별로 실제 근무를 확인·마감합니다.", M.pbtn("명령 등록", "plus", "otNew"))
  h += M.tabs(["시간외근무", "주택별 근무표"], OTV.tab, "otTab")
  if (OTV.tab === 1) {
    var rows = []; M.HOUSES.forEach(function (g, gi) { g[1].forEach(function (hname, i) { rows.push({ id: rows.length + 1, g: g[0], h: hname, day: M.STAFF[(3 + gi * 3 + i) % 24].name, eve: M.STAFF[(8 + gi * 2 + i) % 24].name, night: M.STAFF[(12 + gi + i) % 24].name }) }) })
    h += '<div data-slot="card" data-size="default" class="' + K.K12 + '"><div data-slot="card-header" class="' + K.K156 + '">' + ic("calendar-days", "size-5 text-primary") + '<div data-slot="card-title" class="font-medium group-data-[size=sm]/card:text-sm text-base">' + esc(M.korDate(TODAY)) + ' 주택별 근무표</div></div><div class="overflow-x-auto">' +
      M.table([{ h: "구분", th: "L:w-40", td: "W:text-muted-foreground", v: function (r) { return esc(r.g) } }, { h: "주택", th: "L:w-32", td: "W:font-semibold", v: function (r) { return esc(r.h) } },
        { h: "주간", v: function (r) { return esc(r.day) } }, { h: "오후", v: function (r) { return esc(r.eve) } }, { h: "야간", v: function (r) { return esc(r.night) } }], rows) + "</div></div>"
    return M.shell(route, "인사관리", "근태관리(시간외)", h)
  }
  var mon = OT.filter(function (o) { return thisMonth(o.date) })
  var names = {}; mon.forEach(function (o) { names[o.name] = 1 })
  h += M.kpis([["timer", "이번 달 시간외", mon.reduce(function (s, o) { return s + o.plan }, 0) + "시간"], ["lock-open", "마감 전 날짜", Object.keys(dates).filter(function (d) { return !OTV.closed[d] }).length + "일"],
    ["users", "참여 인원", Object.keys(names).length + "명"], ["calendar-check", "마감 완료", Object.keys(OTV.closed).length + "일", "마감한 날은 수정할 수 없습니다"]])
  h += '<div data-slot="card" data-size="default" class="' + K.K12 + '"><div class="flex flex-col gap-3 p-4 lg:flex-row lg:items-center"><div class="flex flex-wrap items-center gap-2">' +
    M.sel(K.K18, "월 선택", M.MONTH, monthOpts(1), "noop") + M.sel(K.K111, "직원 선택", u.f.name || "", [["", "전체 직원"]].concat(M.staffNames()), "filter", ' data-key="ot" data-field="name"') +
    M.sel(K.K84, "구분 선택", u.f.kind || "", [["", "전체 구분"], "연장", "휴일"], "filter", ' data-key="ot" data-field="kind"') +
    '<form role="search" class="w-full sm:w-64" data-submit="search" data-key="ot"><div data-slot="input-group" role="group" class="' + K.K155 + '"><div role="group" data-slot="input-group-addon" data-align="inline-start" class="' + K.K99 + '">' + ic("search") + '</div><input data-slot="input-group-control" placeholder="성명·수행업무 검색" aria-label="성명·수행업무 검색" maxlength="50" class="' + K.K35 + '" name="q" value="' + esc(u.q) + '"></div></form></div>' +
    '<div class="flex flex-wrap items-center gap-2 lg:ml-auto">' + M.excelBtn() + '<button type="button" data-disabled="" disabled="" data-slot="button" class="' + K.K14 + '">' + ic("printer") + "개인별 월간 출력</button></div></div>" +
    '<p class="border-t px-4 py-2.5 text-sm text-muted-foreground">날짜를 누르면 아래에 그날의 시간외근무 명세가 나옵니다. 마감한 날은 잠겨서 고칠 수 없습니다.</p></div>'
  h += '<div data-slot="card" data-size="default" class="' + K.K12 + '"><div data-slot="card-header" class="' + K.K156 + '">' + ic("clock", "size-5 text-primary") + '<div data-slot="card-title" class="font-medium group-data-[size=sm]/card:text-sm text-base">날짜별 현황</div><span class="text-sm text-muted-foreground">' + dkeys.length + '일</span></div><div class="overflow-x-auto">' +
    M.table([{ h: "일자", th: "L:w-56", v: function (r) { return '<span class="font-semibold tabular-nums">' + esc(r.date) + '</span><span class="ml-2 text-sm text-muted-foreground">' + M.dowOf(r.date) + "요일</span>" } },
      { h: "인원", th: "C:w-32 text-center", td: "W:text-center tabular-nums", v: function (r) { return r.n + "명" } }, { h: "총 시간", th: "C:w-36 text-center", td: "W:text-center font-semibold tabular-nums", v: function (r) { return r.t + "시간" } },
      { h: "상태", th: "C:w-28 text-center", td: "W:text-center", v: function (r) { return OTV.closed[r.date] ? '<span data-slot="badge" class="' + K.K180 + '">마감</span>' : '<span data-slot="badge" data-variant="outline" class="' + K.K164 + '">마감 전</span>' } },
      { h: "작업", th: "L:", v: function (r) { return '<div class="flex flex-wrap items-center gap-2">' + (OTV.closed[r.date] ? '<button type="button" data-slot="button" class="' + K.K176 + '" data-act="otLock" data-d="' + r.date + '">' + ic("lock-open") + "마감 풀기</button>" : '<button type="button" data-slot="button" class="' + K.K165 + '" data-act="otLock" data-d="' + r.date + '">' + ic("lock") + "마감</button>") + "</div>" } }],
      dkeys.slice(0, 10).map(function (d) { return { id: d, date: d, n: dates[d].length, t: dates[d].reduce(function (s, o) { return s + o.plan }, 0) } }), { rowAct: "otSel", selId: OTV.sel }) + "</div></div>"
  var day = (dates[OTV.sel] || [])
  h += '<div data-slot="card" data-size="default" class="' + K.K12 + '"><div data-slot="card-header" class="' + K.K156 + '">' + ic("calendar-days", "size-5 text-primary") + '<div data-slot="card-title" class="font-medium group-data-[size=sm]/card:text-sm text-base">' + esc(M.korDate(OTV.sel)) + " 시간외근무 명세</div>" +
    (OTV.closed[OTV.sel] ? "" : '<button type="button" data-slot="button" class="' + K.K166 + ' ml-auto" data-act="otNew" data-d="' + OTV.sel + '">' + ic("plus") + "이 날에 추가</button>") + '</div><div class="overflow-x-auto">' +
    M.table([{ h: "연번", th: "C:hidden w-16 text-center xl:table-cell", td: "W:hidden text-center tabular-nums text-muted-foreground xl:table-cell", v: function (r) { return day.indexOf(r) + 1 } },
      { h: "성명", th: "L:w-40", v: function (r) { return esc(r.name) } }, { h: "구분", th: "C:w-28 text-center", td: "W:text-center", v: function (r) { return M.badge(r.kind === "휴일" ? "info" : "sec", r.kind) } },
      { h: "명령 시간", th: "L:w-44", td: "W:tabular-nums", v: function (r) { return esc(r.cmd) } }, { h: "계획 시간", th: "C:w-24 text-center", td: "W:text-center font-semibold tabular-nums", v: function (r) { return r.plan + "시간" } },
      { h: "실제 시작·종료", th: "L:hidden w-44 2xl:table-cell", td: "W:hidden tabular-nums 2xl:table-cell", v: function (r) { return esc(r.actual) } },
      { h: "구체적 수행업무", th: "L:", td: "W:max-w-72 truncate", v: function (r) { return esc(r.task) } },
      { h: "수정", th: "C:w-28 text-center", td: "W:text-center", v: function (r) { return OTV.closed[r.date] ? '<span class="text-xs text-muted-foreground">마감</span>' : '<button type="button" data-slot="button" class="' + K.K176 + '" data-act="otDel" data-id="' + r.id + '">' + ic("trash2") + "삭제</button>" } }],
      day, { empty: "이 날 등록된 시간외근무가 없습니다." }) + "</div></div>"
  return M.shell(route, "인사관리", "근태관리(시간외)", h)
}
Demo.on("noop", function () { })
Demo.on("otTab", function (d) { OTV.tab = +d.i; Demo.update() })
Demo.on("otSel", function (d) { OTV.sel = d.id; Demo.update() })
Demo.on("otLock", function (d) { if (OTV.closed[d.d]) delete OTV.closed[d.d]; else OTV.closed[d.d] = true; Demo.update(); Demo.toast(d.d + (OTV.closed[d.d] ? " 마감했습니다" : " 마감을 풀었습니다")) })
Demo.on("otDel", function (d) { OT.splice(OT.indexOf(byId(OT, d.id)), 1); Demo.update(); Demo.toast("삭제했습니다") })
Demo.on("otNew", function (d) {
  M.openModal({ title: "시간외근무 명령 등록", submit: "otSave", ok: "등록", body: M.grid2(M.field("일자", M.inp("date", d.d || TODAY, "", "date", " required")) + M.field("직원", M.nsel("name", M.staffNames(), "정하늘")) +
    M.field("구분", M.nsel("kind", ["연장", "휴일"], "연장")) + M.field("계획 시간", M.inp("plan", "2", "", "number", ' min="1" max="8" required')) + M.field("수행업무", M.inp("task", "", "예) 저녁 프로그램 지원", "text", " required"), 1)) })
})
Demo.on("otSave", function (v) {
  if (OTV.closed[v.date]) { Demo.toast("마감한 날짜에는 추가할 수 없습니다"); return }
  var p = +v.plan || 1
  OT.push({ id: M.nextId(OT), date: v.date, name: v.name, kind: v.kind, cmd: (v.kind === "휴일" ? "09:00~" + M.pad(9 + p) : "18:00~" + M.pad(18 + p)) + ":00", plan: p, actual: "-", task: v.task })
  OTV.sel = v.date; S.modal = null; Demo.update(); Demo.toast("시간외근무 명령을 등록했습니다")
})

/* ═════════ 출장명령및복명 ═════════ */
var TRIPS = M.DATA.TRIPS
;(function () {
  var places = ["시청 회의실", "광역 복지재단", "협회 교육장", "구청 사회복지과", "인근 복지관", "도 장애인복지 연수원"]
  var purp = ["종사자 직무교육 참석", "업무 협의", "기관 간담회 참석", "자료 제출", "우수기관 견학", "보수교육 참석"]
  for (var i = 0; i < 44; i++) {
    var w = M.STAFF[(i * 3) % 24], d = M.addDays(TODAY, -i * 3 + 9), r = M.rnd()
    var st = i < 3 ? "결재대기" : r < 0.9 ? "승인" : "반려"
    TRIPS.push({ id: 900 - i, no: M.YEAR + "-" + String(130 - i).padStart(4, "0"), status: st, name: w.name, dept: w.dept, kind: i % 4 ? "관내" : "관외", start: d, end: i % 6 === 0 ? M.addDays(d, 1) : d,
      place: places[i % places.length], purpose: purp[i % purp.length], comp: i % 5 === 0 ? 1 : 0, cost: i % 4 ? 20000 : 60000 + (i % 3) * 10000, report: st === "승인" && d <= TODAY ? (M.rnd() < 0.8 ? "제출" : "미제출") : "-" })
  }
})()
var TV = { tab: 0 }
function pageTrip(route) {
  var h = head("출장 신청 · 복명", "출장을 신청하고 결재를 받은 뒤, 다녀와서 복명서를 제출합니다.", M.pbtn("출장 신청", "plus", "tripNew"))
  var nA = TRIPS.filter(function (t) { return t.status === "결재대기" }).length
  h += M.tabs(["전체", "내 출장", "결재함" + (nA ? " " + nA : ""), "복명"], TV.tab, "tripTab")
  var base = TRIPS.filter(function (t) { return TV.tab === 1 ? t.name === "관리자" : TV.tab === 2 ? t.status === "결재대기" : TV.tab === 3 ? t.status === "승인" && t.start <= TODAY : true }).map(function (t) { t.year = t.start.slice(0, 4); return t })
  var cols = [
    { h: "연번", th: "L:w-24", td: "W:text-sm text-muted-foreground tabular-nums", v: function (r) { return esc(r.no) } },
    { h: "상태", th: "C:w-24 text-center", td: "N:text-center whitespace-normal", v: function (r) { return M.statusBadge(r.status === "결재대기" ? "결재대기" : r.status) } },
    { h: "출장자", th: "L:w-24", td: "N:text-sm whitespace-normal", v: function (r) { return esc(r.name) + '<span class="block text-xs text-muted-foreground">' + esc(r.dept) + "</span>" } },
    { h: "출장구분", th: "L:w-28", td: "N:text-sm whitespace-normal", v: function (r) { return esc(r.kind) } },
    { h: "기간", th: "L:w-40", td: "N:text-sm whitespace-normal text-muted-foreground tabular-nums", v: function (r) { return esc(r.start) + (r.end !== r.start ? " ~ " + esc(r.end.slice(5)) : "") } },
    { h: "출장지", th: "L:w-32", td: "N:font-medium whitespace-normal break-words", v: function (r) { return esc(r.place) } },
    { h: "목적", th: "L:min-w-44", td: "N:whitespace-normal", v: function (r) { return esc(r.purpose) } },
    { h: "동반", th: "C:w-16 text-right", td: "W:text-right text-sm tabular-nums", v: function (r) { return r.comp ? r.comp + "명" : "-" } },
    { h: "비용(원)", th: "C:w-24 text-right", td: "W:text-right text-sm tabular-nums", v: function (r) { return Demo.num(r.cost) } },
    { h: TV.tab === 2 ? "처리" : "복명서", th: "C:w-24 text-center", td: "N:text-center whitespace-normal", v: function (r) {
      if (TV.tab === 2) return '<div class="flex justify-center gap-1"><button type="button" data-slot="button" class="' + K.K165 + '" data-act="tripOk" data-id="' + r.id + '">승인</button><button type="button" data-slot="button" class="' + K.K166 + '" data-act="tripNo" data-id="' + r.id + '">반려</button></div>'
      if (r.report === "미제출") return '<button type="button" data-slot="button" class="' + K.K166 + '" data-act="tripReport" data-id="' + r.id + '">' + ic("pencil") + "작성</button>"
      if (r.report === "제출") return M.badge("ok", "제출")
      return '<span data-slot="badge" class="' + K.K217 + '">' + ic("minus", "size-3") + "</span>"
    } }
  ]
  h += M.barCard("trip-" + TV.tab, { targets: [["purpose", "출장목적"], ["name", "출장자"], ["place", "출장지"]], ph: "검색어 입력",
    filters: [{ label: "연도 선택", field: "year", all: "전체 연도", options: [M.YEAR] }, { label: "부서 선택", field: "dept", all: "전체 부서", options: M.DEPTS }, { label: "결재 상태 선택", field: "status", all: "전체 상태", options: ["결재대기", "승인", "반려"] }],
    sorts: ["연번순", "연번 역순"], fields: ["purpose", "name", "place"], cols: cols, empty: TV.tab === 2 ? "결재할 출장 신청이 없습니다." : "출장 내역이 없습니다." }, base)
  return M.shell(route, "인사관리", "출장명령및복명", h)
}
Demo.on("tripTab", function (d) { TV.tab = +d.i; Demo.update() })
Demo.on("tripOk", function (d) { var t = byId(TRIPS, d.id); t.status = "승인"; t.report = t.start <= TODAY ? "미제출" : "-"; Demo.update(); Demo.toast(t.name + " 출장을 승인했습니다") })
Demo.on("tripNo", function (d) { var t = byId(TRIPS, d.id); t.status = "반려"; Demo.update(); Demo.toast("출장 신청을 반려했습니다") })
Demo.on("tripReport", function (d) {
  var t = byId(TRIPS, d.id)
  M.openModal({ title: "복명서 작성", submit: "tripReportSave", ok: "제출", body: '<input type="hidden" name="id" value="' + t.id + '">' + M.infoRows([["출장자", esc(t.name)], ["출장지", esc(t.place)], ["목적", esc(t.purpose), 1]]) + M.field("결과 보고", M.ta("memo", "1. 출장 결과:\n2. 공유 사항:\n3. 후속 조치:", "")) })
})
Demo.on("tripReportSave", function (v) { byId(TRIPS, v.id).report = "제출"; S.modal = null; Demo.update(); Demo.toast("복명서를 제출했습니다") })
Demo.on("tripNew", function () {
  M.openModal({ title: "출장 신청", submit: "tripSave", ok: "신청", body: M.grid2(M.field("출장구분", M.nsel("kind", ["관내", "관외"], "관내")) + M.field("동반 인원", M.inp("comp", "0", "", "number", ' min="0" max="5"')) +
    M.field("시작일", M.inp("start", M.addDays(TODAY, 2), "", "date", " required")) + M.field("종료일", M.inp("end", M.addDays(TODAY, 2), "", "date", " required")) +
    M.field("출장지", M.inp("place", "", "예) 구청 사회복지과", "text", " required")) + M.field("예상 비용(원)", M.inp("cost", "20000", "", "number", ' min="0" step="1000"')) + M.field("목적", M.inp("purpose", "", "예) 업무 협의", "text", " required"), 1)) })
})
Demo.on("tripSave", function (v) {
  var max = TRIPS.reduce(function (m, t) { return Math.max(m, +t.no.slice(5)) }, 0) + 1
  TRIPS.unshift({ id: TRIPS.reduce(function (m, t) { return Math.max(m, t.id) }, 0) + 1, no: M.YEAR + "-" + String(max).padStart(4, "0"), status: "결재대기", name: "관리자", dept: M.ME.dept, kind: v.kind, start: v.start, end: v.end < v.start ? v.start : v.end, place: v.place, purpose: v.purpose, comp: +v.comp || 0, cost: +v.cost || 0, report: "-" })
  S.modal = null; TV.tab = 2; Demo.update(); Demo.toast("출장을 신청했습니다 · 결재함에서 확인하세요")
})

M.pages = M.pages || {}
Object.assign(M.pages, { card: pageCard, facility: pageFacility, vehicle: function (r) { return pageCalendar(r, "vehicle") }, hall: function (r) { return pageCalendar(r, "hall") }, overtime: pageOvertime, trip: pageTrip })
})()

;(function () {
"use strict"
var M = MI, esc = M.esc, ic = M.ic, S = M.S, U = M.U, TODAY = M.TODAY

function byId(list, id) { return list.filter(function (x) { return String(x.id) === String(id) })[0] }
function head(t, d, a) { return M.pageHeader(t, d, a) }
function linkBtn(label, icon, href, cls) { return '<a role="button" data-slot="button" class="' + (cls || K.K14) + '" href="#' + href + '">' + (icon ? ic(icon) : "") + esc(label) + "</a>" }

/* ═════════ 시스템 사용자관리 ═════════ */
var ROLES = ["시스템관리자", "부서관리자", "일반직원", "승인대기"]
var USERS = M.STAFF.map(function (s) { return { id: s.id, name: s.name, login: s.login, dept: s.dept, pos: s.pos, role: s.role, phone: s.phone, last: s.last, status: s.status } })
USERS.unshift({ id: 100, name: "관리자", login: "admin", dept: M.ME.dept, pos: "시스템관리자", role: "시스템관리자", phone: "010-0000-0001", last: TODAY + " 09:00", status: "재직" })
USERS.push({ id: 101, name: "신입직원", login: "user25", dept: "생활지원2팀", pos: "생활지원교사", role: "승인대기", phone: "010-0000-0925", last: "-", status: "재직" })
function roleBadge(r) { return M.badge(r === "시스템관리자" ? "info" : r === "부서관리자" ? "sec" : r === "승인대기" ? "warn" : "muted", r) }
function pageUsers(route) {
  var key = "users", u = U(key, { f: { status: "재직" } })
  var h = head("시스템 사용자관리", "인트라넷 계정을 만들고 부서·권한·재직 상태를 관리합니다.", linkBtn("부서코드 관리", "building2", "/departments") + linkBtn("권한설정", "list-checks", "/departments") + M.pbtn("사용자 등록", "user-plus", "userNew"))
  h += M.kpis([["users", "전체 사용자", USERS.length + "명"], ["user-check", "재직", USERS.filter(function (x) { return x.status === "재직" }).length + "명"],
    ["coffee", "휴직", USERS.filter(function (x) { return x.status === "휴직" }).length + "명"], ["shield", "시스템관리자", USERS.filter(function (x) { return x.role === "시스템관리자" }).length + "명", "승인 대기 " + USERS.filter(function (x) { return x.role === "승인대기" }).length + "명"]])
  var rows = USERS.slice()
  // 이름순은 applyFilter 가 뒤집으므로 역순으로 미리 정렬
  if (+u.sort === 1) rows.sort(function (a, b) { return b.name.localeCompare(a.name, "ko") }); else rows.sort(function (a, b) { return M.DEPTS.indexOf(a.dept) - M.DEPTS.indexOf(b.dept) || a.id - b.id })
  h += M.barCard(key, { targets: [["name", "이름"], ["login", "로그인 ID"]], ph: "검색어 입력",
    filters: [{ label: "부서 선택", field: "dept", all: "전체 부서", options: M.DEPTS, cls: K.K19 }, { label: "재직 상태", field: "status", all: "전체 상태", options: [["재직", "재직자만"], "휴직", "퇴사"], cls: K.K84 }],
    sorts: ["부서순", "이름순"], fields: ["name", "login"],
    cols: [{ h: "이름", th: "L:w-28", td: "W:font-semibold", v: function (r) { return esc(r.name) } }, { h: "로그인 ID", th: "L:w-36", td: "W:font-mono text-muted-foreground", v: function (r) { return esc(r.login) } },
      { h: "부서", th: "L:w-36", v: function (r) { return esc(r.dept) } }, { h: "직위", td: "W:text-muted-foreground", v: function (r) { return esc(r.pos) } },
      { h: "권한", th: "C:w-32 text-center", td: "W:text-center", v: function (r) { return roleBadge(r.role) } },
      { h: "연락처", th: "L:hidden w-40 xl:table-cell", td: "W:hidden tabular-nums text-muted-foreground xl:table-cell", v: function (r) { return esc(r.phone) } },
      { h: "최근 접속", th: "L:hidden w-44 xl:table-cell", td: "W:hidden tabular-nums text-muted-foreground xl:table-cell", v: function (r) { return esc(r.last) } },
      { h: "상태", th: "C:w-28 text-center", td: "W:text-center", v: function (r) { return M.statusBadge(r.status) } },
      { h: "관리", th: "C:w-20 text-center", td: "W:text-center", v: function (r) { return M.ellipsisBtn(r.name + " 관리", "userEdit", r.id) } }]
  }, rows)
  return M.shell(route, "시스템관리", "사용자관리", h)
}
Demo.on("userEdit", function (d) {
  var x = byId(USERS, d.id)
  M.openModal({ title: x.name + " 계정 수정", submit: "userSave", body: '<input type="hidden" name="id" value="' + x.id + '">' + M.grid2(M.field("이름", M.inp("name", x.name, "", "text", " required")) + M.field("로그인 ID", M.inp("login", x.login, "", "text", " required")) +
    M.field("부서", M.nsel("dept", M.DEPTS, x.dept)) + M.field("직위", M.inp("pos", x.pos)) + M.field("권한", M.nsel("role", ROLES, x.role)) + M.field("상태", M.nsel("status", ["재직", "휴직", "퇴사"], x.status)) +
    M.field("연락처", M.inp("phone", x.phone), 1)) })
})
Demo.on("userNew", function () {
  M.openModal({ title: "사용자 등록", submit: "userSave", ok: "등록", body: M.grid2(M.field("이름", M.inp("name", "", "예) 홍길동", "text", " required")) + M.field("로그인 ID", M.inp("login", "", "영문·숫자", "text", " required")) +
    M.field("부서", M.nsel("dept", M.DEPTS, M.DEPTS[1])) + M.field("직위", M.inp("pos", "생활지원교사")) + M.field("권한", M.nsel("role", ROLES, "일반직원")) + M.field("상태", M.nsel("status", ["재직", "휴직"], "재직")) +
    M.field("연락처", M.inp("phone", "010-0000-", ""), 1)) })
})
Demo.on("userSave", function (v) {
  var x = v.id ? byId(USERS, v.id) : null
  if (!x) { x = { id: M.nextId(USERS), last: "-" }; USERS.push(x) }
  Object.assign(x, { name: v.name, login: v.login, dept: v.dept, pos: v.pos, role: v.role, status: v.status, phone: v.phone })
  S.modal = null; Demo.update(); Demo.toast(v.id ? "계정 정보를 저장했습니다" : "사용자를 등록했습니다")
})

/* ═════════ 부서코드 / 권한 설정 ═════════ */
var DEPTROWS = M.DEPTS.concat(["원장실", "자원봉사실", "(구) 지역사회팀"]).map(function (d, i) {
  var head0 = { "운영지원팀": "김민준", "생활지원1팀": "최유진", "생활지원2팀": "장예린", "건강지원팀": "신우진", "평생교육팀": "송재현", "원장실": "박상우" }[d] || "-"
  return { id: i + 1, code: "D" + M.pad(i + 1), name: d, head: head0, n: M.STAFF.filter(function (s) { return s.dept === d }).length + (d === "원장실" ? 1 : 0), use: i < 6 ? "사용" : "미사용" }
})
var PERMS = ["전체", "조회", "없음"]
var PERM = M.NAV.map(function (g, i) { return { id: i + 1, g: g.label, n: g.items.length, a: "전체", b: i === 7 ? "없음" : i === 6 ? "조회" : "전체", c: i >= 6 ? "없음" : i === 0 || i === 1 || i === 3 ? "전체" : "조회", d: i === 1 ? "조회" : "없음" } })
function permBadge(r, f) {
  var v = r[f]
  return '<button type="button" data-act="permCycle" data-id="' + r.id + '" data-f="' + f + '" title="눌러서 바꾸기">' + M.badge(v === "전체" ? "ok" : v === "조회" ? "info" : "muted", v) + "</button>"
}
function pageDepartments(route) {
  var h = head("부서코드 / 권한 설정", "부서 코드를 관리하고, 직급별로 볼 수 있는 메뉴 범위를 정합니다.", M.pbtn("부서 등록", "building2", "deptNew"))
  h += '<div data-slot="card" data-size="default" class="' + K.K12 + '"><div data-slot="card-header" class="' + K.K213 + '"><div data-slot="card-title" class="font-medium group-data-[size=sm]/card:text-sm text-base">부서코드</div>' +
    '<div data-slot="card-description" class="text-sm text-muted-foreground">사용을 끈 부서는 새 사용자·문서에서 고를 수 없지만, 지난 기록은 그대로 남습니다.</div></div><div class="overflow-x-auto">' +
    M.table([{ h: "부서코드", th: "C:w-28 text-center", td: "W:text-center font-mono text-muted-foreground", v: function (r) { return esc(r.code) } }, { h: "부서명", td: "W:font-semibold", v: function (r) { return esc(r.name) } },
      { h: "부서장", th: "L:w-32", v: function (r) { return esc(r.head) } }, { h: "인원", th: "C:w-28 text-right", td: "W:text-right tabular-nums", v: function (r) { return r.n + "명" } },
      { h: "사용 여부", th: "C:w-32 text-center", td: "W:text-center", v: function (r) { return M.statusBadge(r.use) } },
      { h: "관리", th: "C:w-24 text-center", td: "W:text-center", v: function (r) { return '<button type="button" data-slot="button" aria-label="' + esc(r.name) + ' 수정" class="' + K.K6 + '" data-act="deptEdit" data-id="' + r.id + '">' + ic("pencil") + "</button>" } }], DEPTROWS) + "</div></div>"
  h += '<div data-slot="card" data-size="default" class="' + K.K12 + '"><div data-slot="card-header" class="' + K.K213 + '"><div data-slot="card-title" class="font-medium group-data-[size=sm]/card:text-sm text-base">메뉴별 접근 권한</div>' +
    '<div data-slot="card-description" class="text-sm text-muted-foreground">권한 칸을 누를 때마다 전체 → 조회 → 없음 순으로 바뀝니다.</div></div><div class="overflow-x-auto">' +
    M.table([{ h: "대메뉴", td: "W:font-semibold", v: function (r) { return esc(r.g) } }, { h: "화면 수", th: "C:w-24 text-center", td: "W:text-center tabular-nums text-muted-foreground", v: function (r) { return r.n } },
      { h: "시스템관리자", th: "C:text-center", td: "W:text-center", v: function (r) { return permBadge(r, "a") } }, { h: "부서관리자", th: "C:text-center", td: "W:text-center", v: function (r) { return permBadge(r, "b") } },
      { h: "일반직원", th: "C:text-center", td: "W:text-center", v: function (r) { return permBadge(r, "c") } }, { h: "승인대기", th: "C:text-center", td: "W:text-center", v: function (r) { return permBadge(r, "d") } }], PERM) + "</div>" +
    '<div data-slot="card-content" class="' + K.K218 + '">' + ic("info", "mt-0.5 size-5 shrink-0") + "<span>시스템관리 메뉴는 시스템관리자만 바꿀 수 있습니다. 권한을 바꾸면 해당 직원이 다음에 로그인할 때부터 적용됩니다.</span></div></div>"
  return M.shell(route, "시스템관리", "권한설정", h)
}
Demo.on("permCycle", function (d) { var r = byId(PERM, d.id); r[d.f] = PERMS[(PERMS.indexOf(r[d.f]) + 1) % 3]; Demo.update(); Demo.toast(r.g + " 권한을 '" + r[d.f] + "'(으)로 바꿨습니다") })
Demo.on("deptEdit", function (d) {
  var r = byId(DEPTROWS, d.id)
  M.openModal({ title: "부서 수정", submit: "deptSave", body: '<input type="hidden" name="id" value="' + r.id + '">' + M.grid2(M.field("부서코드", M.inp("code", r.code, "", "text", " required")) + M.field("부서명", M.inp("name", r.name, "", "text", " required")) +
    M.field("부서장", M.nsel("head", ["-"].concat(M.staffNames()), r.head)) + M.field("사용 여부", M.nsel("use", ["사용", "미사용"], r.use))) })
})
Demo.on("deptNew", function () {
  M.openModal({ title: "부서 등록", submit: "deptSave", ok: "등록", body: M.grid2(M.field("부서코드", M.inp("code", "D" + M.pad(DEPTROWS.length + 1), "", "text", " required")) + M.field("부서명", M.inp("name", "", "예) 지역연계팀", "text", " required")) +
    M.field("부서장", M.nsel("head", ["-"].concat(M.staffNames()), "-")) + M.field("사용 여부", M.nsel("use", ["사용", "미사용"], "사용"))) })
})
Demo.on("deptSave", function (v) {
  var r = v.id ? byId(DEPTROWS, v.id) : null
  if (!r) { r = { id: M.nextId(DEPTROWS), n: 0 }; DEPTROWS.push(r) }
  Object.assign(r, { code: v.code, name: v.name, head: v.head, use: v.use }); S.modal = null; Demo.update(); Demo.toast("부서 정보를 저장했습니다")
})

/* ═════════ 결재경로설정 ═════════ */
var PATHS = [
  { id: 1, name: "일반 기안 (사무국장 → 원장)", line: ["김민준", "박상우"], status: "사용", owner: "관리자", scope: "전체", def: true, mine: true },
  { id: 2, name: "생활지원1팀 기본", line: ["최유진", "김민준", "박상우"], status: "사용", owner: "최유진", scope: "생활지원1팀", def: true },
  { id: 3, name: "생활지원2팀 기본", line: ["장예린", "김민준", "박상우"], status: "사용", owner: "장예린", scope: "생활지원2팀", def: true },
  { id: 4, name: "건강지원팀 기본", line: ["신우진", "김민준", "박상우"], status: "사용", owner: "신우진", scope: "건강지원팀", def: true },
  { id: 5, name: "평생교육팀 기본", line: ["송재현", "김민준", "박상우"], status: "사용", owner: "송재현", scope: "평생교육팀", def: true },
  { id: 6, name: "지출 결의 (회계 검토)", line: ["이서연", "김민준", "박상우"], status: "사용", owner: "관리자", scope: "전체", def: false, mine: true },
  { id: 7, name: "간단 보고 (사무국장 전결)", line: ["김민준"], status: "사용", owner: "관리자", scope: "운영지원팀", def: false, mine: true },
  { id: 8, name: "(구) 지역사회팀 결재선", line: ["박지훈", "박상우"], status: "미사용", owner: "박지훈", scope: "운영지원팀", def: false }
]
M.DATA.PATHS = PATHS
var PV = { tab: 0 }
function pageApproval(route) {
  var u = U("paths")
  var h = head("결재경로설정", "자주 쓰는 결재선을 미리 만들어 두고, 기안할 때 골라 씁니다.", M.excelBtn() + M.pbtn("결재 경로 추가", "plus", "pathNew"))
  h += M.kpis([["route", "전체 경로", PATHS.length + "개"], ["circle-check", "사용 중인 경로", PATHS.filter(function (p) { return p.status === "사용" }).length + "개"],
    ["user-round", "내 결재경로", PATHS.filter(function (p) { return p.mine }).length + "개"], ["file-pen-line", "부서 기본 결재선", PATHS.filter(function (p) { return p.def }).length + "개"]])
  h += '<p role="note" class="' + K.K219 + '">' + ic("layers", "mt-0.5 size-5 shrink-0") + '<span class="text-sm">기안할 때 <b>내 결재경로</b>가 먼저 보이고, 없으면 부서의 <b>기본 결재선</b>을 씁니다. 새로 만든 경로는 [기안 작성] 화면의 결재선 목록에 바로 나옵니다.</span></p>'
  h += M.tabs(["내 결재경로", "기본 결재선", "전체 결재경로"], PV.tab, "pathTab")
  var rows = PATHS.filter(function (p) { return PV.tab === 0 ? p.mine : PV.tab === 1 ? p.def : true }).filter(function (p) {
    return (!u.f.scope || p.scope === u.f.scope) && (!u.q || (p.name + p.line.join(" ")).indexOf(u.q) >= 0)
  })
  h += '<div data-slot="card" data-size="default" class="' + K.K12 + '"><div class="flex flex-col gap-2 border-b p-3 lg:flex-row lg:items-center"><h2 class="font-semibold">결재 경로 목록 <span class="text-sm font-normal text-muted-foreground tabular-nums">' + rows.length + "개</span></h2>" +
    '<div class="flex flex-1 flex-wrap items-center gap-2 lg:justify-end"><form role="search" data-submit="search" data-key="paths" class="contents"><div data-slot="input-group" role="group" class="' + K.K220 + '"><input data-slot="input-group-control" name="q" value="' + esc(u.q) + '" placeholder="경로 이름·결재자·메모" aria-label="결재 경로 검색" class="' + K.K35 + '">' +
    '<div role="group" data-slot="input-group-addon" data-align="inline-end" class="' + K.K36 + '">' + ic("search", "size-4 text-muted-foreground") + "</div></div></form>" +
    M.sel(K.K221, "적용 부서", u.f.scope || "", [["", "적용 부서 전체"], "전체"].concat(M.DEPTS), "filter", ' data-key="paths" data-field="scope"') + "</div></div>" +
    '<div class="overflow-x-auto">' + M.table([
      { h: "경로명", th: "L:min-w-56", td: "W:font-semibold", v: function (r) { return esc(r.name) + (r.def ? ' <span data-slot="badge" class="' + K.K142 + '">기본</span>' : "") + '<span class="block text-xs font-normal text-muted-foreground">적용: ' + esc(r.scope) + "</span>" } },
      { h: "결재선", td: "N:whitespace-normal", v: function (r) { return '<div class="flex flex-wrap items-center gap-1">' + ["기안자"].concat(r.line).map(function (n, i) { return (i ? ic("chevron-right", "size-3.5 text-muted-foreground") : "") + '<span data-slot="badge" class="' + (i ? K.K108 : K.K142) + '">' + esc(n) + "</span>" }).join("") + "</div>" } },
      { h: "단계", th: "C:w-16 text-right", td: "W:text-right tabular-nums", v: function (r) { return r.line.length } },
      { h: "상태", th: "C:w-20 text-center", td: "W:text-center", v: function (r) { return M.statusBadge(r.status) } },
      { h: "만든 사람", th: "L:w-40", td: "W:text-muted-foreground", v: function (r) { return esc(r.owner) } },
      { h: "관리", th: "C:w-72 text-center", td: "W:text-center", v: function (r) {
        return '<div class="flex justify-center gap-1"><button type="button" data-slot="button" class="' + K.K166 + '" data-act="pathToggle" data-id="' + r.id + '">' + (r.status === "사용" ? "사용 중지" : "다시 사용") + "</button>" +
          (r.def ? "" : '<button type="button" data-slot="button" class="' + K.K176 + '" data-act="pathDef" data-id="' + r.id + '">기본으로</button>') +
          '<button type="button" data-slot="button" class="' + K.K176 + '" data-act="pathDel" data-id="' + r.id + '">' + ic("trash2") + "삭제</button></div>"
      } }], rows, { tcls: "min-w-[60rem]", empty: "결재 경로가 없습니다. [결재 경로 추가]로 만들어 보세요." }) + "</div></div>"
  return M.shell(route, "시스템관리", "결재경로설정", h)
}
Demo.on("pathTab", function (d) { PV.tab = +d.i; Demo.update() })
Demo.on("pathToggle", function (d) { var p = byId(PATHS, d.id); p.status = p.status === "사용" ? "미사용" : "사용"; Demo.update(); Demo.toast(p.name + " · " + p.status) })
Demo.on("pathDef", function (d) { var p = byId(PATHS, d.id); p.def = true; Demo.update(); Demo.toast("기본 결재선으로 지정했습니다") })
Demo.on("pathDel", function (d) { PATHS.splice(PATHS.indexOf(byId(PATHS, d.id)), 1); Demo.update(); Demo.toast("결재 경로를 삭제했습니다") })
Demo.on("pathNew", function () {
  var names = M.staffNames().concat(["박상우"])
  M.openModal({ title: "결재 경로 추가", submit: "pathSave", ok: "추가", body: M.grid2(M.field("경로명", M.inp("name", "", "예) 프로그램 계획 결재", "text", " required"), 1) +
    M.field("1단계 결재자", M.nsel("a", names, "최유진")) + M.field("2단계 결재자", M.nsel("b", [["", "(없음)"]].concat(names), "김민준")) + M.field("3단계 결재자", M.nsel("c", [["", "(없음)"]].concat(names), "박상우")) +
    M.field("적용 부서", M.nsel("scope", ["전체"].concat(M.DEPTS), "전체"))) })
})
Demo.on("pathSave", function (v) {
  var line = [v.a, v.b, v.c].filter(Boolean)
  PATHS.push({ id: M.nextId(PATHS), name: v.name, line: line, status: "사용", owner: "관리자", scope: v.scope, def: false, mine: true })
  S.modal = null; PV.tab = 0; Demo.update(); Demo.toast("결재 경로를 추가했습니다 · 기안 작성에서 고를 수 있습니다")
})

/* ═════════ 직원현황 ═════════ */
function pageStaff(route) {
  var h = head("직원현황", "부서별 직원 연락처와 재직 현황을 확인합니다.", M.excelBtn() + M.pbtn("직원 등록", "user-plus", "staffNew"))
  h += M.kpis([["users", "전체 직원", M.STAFF.length + "명"], ["user-check", "재직", M.STAFF.filter(function (s) { return s.status === "재직" }).length + "명"],
    ["user-minus", "휴직", M.STAFF.filter(function (s) { return s.status === "휴직" }).length + "명"], ["user-plus", "올해 입사", M.STAFF.filter(function (s) { return s.hired.slice(0, 4) === M.YEAR }).length + "명"]])
  var u = U("staff", { size: 50 })
  h += M.headCard("staff", { title: "직원 목록", fields: ["name", "pos", "ext"], filter: { label: "부서 필터", field: "dept", all: "부서 전체", options: M.DEPTS }, ph: "이름·직위·내선 입력 후 Enter", rowAct: "staffOpen",
    cols: [{ h: "이름", th: "L:pl-6", td: "W:h-12 pl-6 font-medium text-foreground", v: function (r) { return esc(r.name) } }, { h: "부서", td: "W:h-12", v: function (r) { return esc(r.dept) } },
      { h: "직위", td: "W:h-12", v: function (r) { return esc(r.pos) } }, { h: "내선", td: "W:h-12 text-sm tabular-nums text-muted-foreground", v: function (r) { return '<span class="text-muted-foreground">' + esc(r.ext) + "</span>" } },
      { h: "휴대전화", td: "W:h-12 tabular-nums text-muted-foreground", v: function (r) { return '<span class="text-muted-foreground">' + esc(r.phone) + "</span>" } },
      { h: "입사일", td: "W:h-12 tabular-nums text-muted-foreground", v: function (r) { return esc(r.hired) } }, { h: "상태", th: "L:pr-6", td: "W:h-12 pr-6", v: function (r) { return M.statusBadge(r.status) } }] }, M.STAFF)
  return M.shell(route, "그룹웨어", "직원현황", h)
}
Demo.on("staffOpen", function (d) {
  var s = byId(M.STAFF, d.id)
  M.openModal({ title: s.name + " 직원 정보", body: M.infoRows([["부서", esc(s.dept)], ["직위", esc(s.pos)], ["내선", esc(s.ext)], ["휴대전화", esc(s.phone)], ["입사일", esc(s.hired)], ["상태", M.statusBadge(s.status)]]), footer: M.pbtn("닫기", "", "modalClose") })
})
Demo.on("staffNew", function () {
  M.openModal({ title: "직원 등록", submit: "staffSave", ok: "등록", body: M.grid2(M.field("이름", M.inp("name", "", "예) 홍길동", "text", " required")) + M.field("부서", M.nsel("dept", M.DEPTS, M.DEPTS[1])) +
    M.field("직위", M.inp("pos", "생활지원교사")) + M.field("입사일", M.inp("hired", TODAY, "", "date"))) })
})
Demo.on("staffSave", function (v) {
  var id = M.nextId(M.STAFF)
  M.STAFF.push({ id: id, name: v.name, dept: v.dept, pos: v.pos, ext: String(200 + id), phone: "010-0000-" + String(2000 + id), hired: v.hired, status: "재직", login: "user" + id, role: "일반직원", last: "-" })
  S.modal = null; Demo.update(); Demo.toast("직원을 등록했습니다")
})

/* ═════════ 설문조사 ═════════ */
var SURVEYS = [
  ["2026년 직원 만족도 조사", "전 직원", 24], ["하반기 교육 수요 조사", "전 직원", 24], ["체육행사 일정 투표", "전 직원", 24], ["급식 만족도 조사(직원)", "전 직원", 24],
  ["업무용 차량 이용 불편 사항", "운행 담당자", 9], ["인트라넷 개선 의견", "전 직원", 24], ["복지 포인트 사용처 의견", "전 직원", 24], ["프로그램 운영 시간 의견", "평생교육팀", 4]
].map(function (s, i) { var st = i < 3 ? "진행중" : i < 4 ? "예정" : "마감"; return { id: i + 1, title: s[0], target: s[1], total: s[2], resp: st === "예정" ? 0 : Math.round(s[2] * (st === "마감" ? 0.7 + i * 0.03 : 0.3 + i * 0.12)), start: M.addDays(TODAY, -i * 20 + (st === "예정" ? 10 : -5)), end: M.addDays(TODAY, -i * 20 + (st === "마감" ? -1 : 9)), author: i % 2 ? "이서연" : "관리자", status: st } })
function pageSurveys(route) {
  var h = head("설문조사", "직원 대상 설문을 만들고 응답률과 결과를 확인합니다.", M.pbtn("설문 만들기", "plus", "survNew"))
  var on = SURVEYS.filter(function (s) { return s.status === "진행중" })
  var avg = SURVEYS.filter(function (s) { return s.status !== "예정" }), rate = avg.length ? Math.round(avg.reduce(function (a, s) { return a + s.resp / s.total }, 0) / avg.length * 100) : 0
  h += M.kpis([["clipboard-list", "진행 중 설문", on.length + "건"], ["chart-column", "평균 응답률", rate + "%"], ["clock", "곧 마감", on.filter(function (s) { return s.end <= M.addDays(TODAY, 7) }).length + "건", "7일 안"], ["circle-check", "마감된 설문", SURVEYS.filter(function (s) { return s.status === "마감" }).length + "건"]])
  h += M.barCard("surveys", { targets: [["title", "제목"], ["author", "작성자"]], ph: "검색어 입력", filters: [{ label: "상태 선택", field: "status", all: "전체 상태", options: ["진행중", "예정", "마감"] }],
    sorts: ["최근 기간순", "오래된 기간순"], fields: ["title"], excel: false, rowAct: "survOpen",
    cols: [{ h: "설문 제목", th: "L:pl-6", td: "N:pl-6 whitespace-normal", v: function (r) { return '<span class="font-medium">' + esc(r.title) + "</span>" } }, { h: "대상", th: "L:w-32", td: "W:text-sm", v: function (r) { return esc(r.target) } },
      { h: "기간", th: "L:w-44", td: "W:text-sm text-muted-foreground tabular-nums", v: function (r) { return esc(r.start.slice(5) + " ~ " + r.end.slice(5)) } },
      { h: "응답률", th: "C:w-28 text-right", td: "W:text-right text-sm tabular-nums", v: function (r) { return Math.round(r.resp / r.total * 100) + "% <span class=\"text-xs text-muted-foreground\">(" + r.resp + "/" + r.total + ")</span>" } },
      { h: "작성자", th: "L:w-28", td: "W:text-sm", v: function (r) { return esc(r.author) } }, { h: "상태", th: "C:w-24 pr-6 text-center", td: "W:pr-6 text-center", v: function (r) { return M.statusBadge(r.status) } }] }, SURVEYS)
  return M.shell(route, "그룹웨어", "설문조사", h)
}
Demo.on("survOpen", function (d) {
  var s = byId(SURVEYS, d.id)
  M.openModal({ title: s.title, submit: s.status === "진행중" ? "survAnswer" : null, ok: "응답 제출", body: '<input type="hidden" name="id" value="' + s.id + '">' + M.infoRows([["대상", esc(s.target)], ["기간", esc(s.start + " ~ " + s.end)], ["응답", s.resp + "명 / " + s.total + "명"], ["상태", M.statusBadge(s.status)]]) +
    (s.status === "진행중" ? M.field("1. 전반적으로 얼마나 만족하시나요?", M.nsel("q1", ["매우 만족", "만족", "보통", "불만족"], "만족")) + M.field("2. 하고 싶은 말", M.ta("q2", "", "자유롭게 적어 주세요")) : '<p class="text-sm text-muted-foreground">' + (s.status === "예정" ? "아직 시작 전인 설문입니다." : "마감된 설문입니다.") + "</p>"),
    footer: s.status === "진행중" ? null : M.pbtn("닫기", "", "modalClose") })
})
Demo.on("survAnswer", function (v) { var s = byId(SURVEYS, v.id); if (s.resp < s.total) s.resp++; S.modal = null; Demo.update(); Demo.toast("응답을 제출했습니다 · 응답률 " + Math.round(s.resp / s.total * 100) + "%") })
Demo.on("survNew", function () {
  M.openModal({ title: "설문 만들기", submit: "survSave", ok: "만들기", body: M.grid2(M.field("설문 제목", M.inp("title", "", "예) 송년회 장소 투표", "text", " required"), 1) + M.field("대상", M.nsel("target", ["전 직원"].concat(M.DEPTS), "전 직원")) +
    M.field("마감일", M.inp("end", M.addDays(TODAY, 7), "", "date"))) })
})
Demo.on("survSave", function (v) {
  SURVEYS.unshift({ id: M.nextId(SURVEYS), title: v.title, target: v.target, total: v.target === "전 직원" ? 24 : 5, resp: 0, start: TODAY, end: v.end, author: "관리자", status: "진행중" })
  S.modal = null; Demo.update(); Demo.toast("설문을 만들었습니다")
})

/* ═════════ 기록관리대장 · 첨부파일자료실 ═════════ */
var RECORDS = []
;(function () {
  var t = ["운영위원회 회의록", "시설 안전점검 결과", "후원금 사용 보고", "직원 교육 결과 보고", "프로그램 운영 계획", "외부 공문 접수(교육 안내)", "행정 협조 요청 회신", "급식 위생점검 결과"]
  var to = ["구청 사회복지과", "내부 결재", "광역 복지재단", "협회", "내부 결재", "교육청", "구청 사회복지과", "내부 결재"]
  for (var i = 0; i < 58; i++) {
    var d = M.addDays(TODAY, -i * 4), w = M.STAFF[(i * 5) % 24]
    RECORDS.push({ id: i + 1, no: d.slice(0, 4) + "-" + String(320 - i).padStart(4, "0"), reg: d, kind: i % 3 === 1 ? "접수" : "생산", title: t[i % t.length], to: to[i % to.length], owner: w.name, eff: d, keep: ["1년", "3년", "5년", "10년", "영구"][i % 5], status: i % 13 === 7 ? "만료" : "보존", year: d.slice(0, 4) })
  }
})()
function pageRecords(route) {
  var h = head("기록관리대장", "생산·접수한 기록물을 등록번호로 관리하고 보존기간을 확인합니다.", M.pbtn("기록물 등록", "plus", "recNew"))
  h += M.kpis([["archive", "전체 기록물", RECORDS.length + "건"], ["book-lock", "보존 기록", RECORDS.filter(function (r) { return r.status === "보존" }).length + "건"],
    ["calendar-clock", "보존기간 만료", RECORDS.filter(function (r) { return r.status === "만료" }).length + "건"], ["file-text", "이번 달 등록", RECORDS.filter(function (r) { return r.reg.slice(0, 7) === M.MONTH }).length + "건"]])
  h += M.barCard("records", { targets: [["title", "제목"], ["to", "수신자"], ["owner", "담당자"], ["no", "번호"]], ph: "제목·수신자·담당자·번호로 찾기",
    filters: [{ label: "연도 선택", field: "year", all: "전체 연도", options: [M.YEAR, String(+M.YEAR - 1)] }, { label: "등록구분 선택", field: "kind", all: "전체 구분", options: ["생산", "접수"] },
      { label: "보존기간 선택", field: "keep", all: "전체 보존기간", options: ["1년", "3년", "5년", "10년", "영구"], cls: K.K104 }, { label: "담당자 선택", field: "owner", all: "전체 담당자", options: M.staffNames() }],
    sorts: ["번호순", "번호 역순"], fields: ["title", "to", "owner", "no"],
    cols: [{ h: "등록번호", th: "L:w-28", td: "N:whitespace-nowrap tabular-nums", v: function (r) { return esc(r.no) + '<span class="block text-xs text-muted-foreground">' + esc(r.reg) + "</span>" } },
      { h: "구분", th: "L:w-20", v: function (r) { return M.badge(r.kind === "생산" ? "sec" : "info", r.kind) } }, { h: "제목", th: "L:min-w-56", td: "N:whitespace-normal", v: function (r) { return '<span class="font-medium">' + esc(r.title) + "</span>" } },
      { h: "수신자(발신자)", th: "L:w-32", td: "N:whitespace-normal break-words", v: function (r) { return esc(r.to) } }, { h: "담당자", th: "L:w-20", v: function (r) { return esc(r.owner) } },
      { h: "시행일", th: "L:w-24", td: "W:tabular-nums", v: function (r) { return esc(r.eff) } }, { h: "보존기간", th: "L:w-20", td: "W:text-sm", v: function (r) { return esc(r.keep) } },
      { h: "상태", th: "L:w-20", td: "W:text-sm", v: function (r) { return M.badge(r.status === "보존" ? "ok" : "muted", r.status) } }] }, RECORDS)
  return M.shell(route, "전자결재", "기록관리대장", h)
}
Demo.on("recNew", function () {
  M.openModal({ title: "기록물 등록", submit: "recSave", ok: "등록", body: M.grid2(M.field("제목", M.inp("title", "", "예) 11월 운영위원회 회의록", "text", " required"), 1) + M.field("구분", M.nsel("kind", ["생산", "접수"], "생산")) +
    M.field("보존기간", M.nsel("keep", ["1년", "3년", "5년", "10년", "영구"], "5년")) + M.field("수신자(발신자)", M.inp("to", "내부 결재")) + M.field("시행일", M.inp("eff", TODAY, "", "date"))) })
})
Demo.on("recSave", function (v) {
  var max = RECORDS.reduce(function (m, r) { return Math.max(m, +r.no.slice(5)) }, 0) + 1
  RECORDS.unshift({ id: M.nextId(RECORDS), no: M.YEAR + "-" + String(max).padStart(4, "0"), reg: TODAY, kind: v.kind, title: v.title, to: v.to, owner: "관리자", eff: v.eff, keep: v.keep, status: "보존", year: M.YEAR })
  S.modal = null; U("records").page = 1; Demo.update(); Demo.toast("기록물을 등록했습니다")
})
var FILES = []
;(function () {
  var f = [["회의록_서식", "hwp", "업무자료실 · 회의록 서식"], ["안전점검_결과", "pdf", "전자결재 · 소방시설 정기점검 결과 보고"], ["프로그램_계획서", "hwp", "전자결재 · 하반기 평생교육 프로그램 운영 계획"], ["식단표", "xlsx", "주간식단표 · 주간 식단표"],
    ["행사_사진", "jpg", "업무일지 · 생일 축하 행사"], ["교육자료", "pdf", "업무공지사항 · 직원 인권교육 일정 안내"], ["예산_집행내역", "xlsx", "전자결재 · 사무용품 구입 지출 결의"], ["비상연락망", "xlsx", "업무자료실 · 비상연락망 양식"]]
  for (var i = 0; i < 64; i++) {
    var x = f[i % f.length], d = M.addDays(TODAY, -i * 2)
    FILES.push({ id: i + 1, name: x[0] + "_" + d.replace(/-/g, "").slice(2) + "." + x[1], desc: i % 3 ? "" : "최종본", ext: x[1], where: x[2].split(" · ")[0] === "전자결재" ? "전자결재" : x[2].split(" · ")[0] === "업무일지" ? "업무일지" : "게시판", link: x[2], size: M.rint(40, 4800), owner: M.STAFF[(i * 7) % 24].name, date: d, year: d.slice(0, 4) })
  }
})()
function pageAttachments(route) {
  var h = head("첨부파일자료실", "문서·게시글·업무일지에 붙은 파일을 한곳에서 찾아 내려받습니다.", M.pbtn("파일 등록", "file-plus", "fileNew"))
  var tot = FILES.reduce(function (s, f) { return s + f.size }, 0)
  h += M.kpis([["paperclip", "전체 파일", FILES.length + "개"], ["file-text", "이번 달 등록", FILES.filter(function (f) { return f.date.slice(0, 7) === M.MONTH }).length + "개"],
    ["hard-drive", "전체 용량", (tot / 1024).toFixed(1) + "MB"], ["calendar-clock", "최근 7일 등록", FILES.filter(function (f) { return f.date >= M.addDays(TODAY, -7) }).length + "개"]])
  h += M.barCard("files", { targets: [["name", "파일명"], ["link", "문서 제목"]], ph: "파일명·문서 제목으로 찾기",
    filters: [{ label: "어디에 붙은 파일인지 선택", field: "where", all: "전체 붙은 곳", options: ["전자결재", "게시판", "업무일지"], cls: K.K104 }, { label: "올린 해 선택", field: "year", all: "전체 연도", options: [M.YEAR] },
      { label: "형식 선택", field: "ext", all: "전체 형식", options: [["pdf", "PDF"], ["hwp", "HWP"], ["xlsx", "XLSX"], ["jpg", "JPG"]] }],
    sorts: ["최근 올린 순", "오래된 순"], fields: ["name", "link"],
    cols: [{ h: "파일명", th: "L:", td: "N:whitespace-normal", v: function (r) { return '<a href="#/attachments" class="' + K.K90 + '" data-act="fakeDown">' + ic("file-text", "size-4 shrink-0") + esc(r.name) + "</a>" } },
      { h: "설명", th: "L:min-w-48", td: "N:text-sm break-words whitespace-normal text-muted-foreground", v: function (r) { return esc(r.desc || "-") } },
      { h: "형식", th: "L:w-20", td: "W:text-sm text-muted-foreground uppercase", v: function (r) { return esc(r.ext) } },
      { h: "연결 문서", th: "L:min-w-64", td: "N:whitespace-normal", v: function (r) { return esc(r.link) } }, { h: "크기", th: "C:w-24 text-right", td: "W:text-right tabular-nums", v: function (r) { return r.size >= 1024 ? (r.size / 1024).toFixed(1) + "MB" : r.size + "KB" } },
      { h: "등록자", th: "L:w-28", v: function (r) { return esc(r.owner) } }, { h: "등록일", th: "L:w-28", td: "W:tabular-nums", v: function (r) { return esc(r.date) } }] }, FILES)
  return M.shell(route, "전자결재", "첨부파일자료실", h)
}
Demo.on("fileNew", function () {
  M.openModal({ title: "파일 등록", submit: "fileSave", ok: "등록", body: M.grid2(M.field("파일 이름", M.inp("name", "", "예) 운영계획서.hwp", "text", " required"), 1) + M.field("붙일 곳", M.nsel("where", ["게시판", "전자결재", "업무일지"], "게시판")) +
    M.field("설명", M.inp("desc", ""))) + '<p class="text-xs text-muted-foreground">체험판에서는 실제 파일이 올라가지 않고 목록에만 추가됩니다.</p>' })
})
Demo.on("fileSave", function (v) {
  var ext = (v.name.split(".").pop() || "pdf").toLowerCase()
  FILES.unshift({ id: M.nextId(FILES), name: v.name, desc: v.desc, ext: ext, where: v.where, link: v.where + " · 직접 등록", size: M.rint(20, 900), owner: "관리자", date: TODAY, year: M.YEAR })
  S.modal = null; U("files").page = 1; Demo.update(); Demo.toast("파일을 등록했습니다")
})

M.pages = M.pages || {}
Object.assign(M.pages, { users: pageUsers, departments: pageDepartments, approval: pageApproval, staff: pageStaff, surveys: pageSurveys, records: pageRecords, attachments: pageAttachments })
})()

;(function () {
"use strict"
var M = MI, esc = M.esc, ic = M.ic, S = M.S, U = M.U, TODAY = M.TODAY, won = Demo.won

function gen(n, fn) { var a = []; for (var i = 0; i < n; i++) { var r = fn(i); r.id = i + 1; a.push(r) } return a }
function cnt(rows, f, v) { return rows.filter(function (r) { return r[f] === v }).length }
function sum(rows, f) { return rows.reduce(function (s, r) { return s + (+r[f] || 0) }, 0) }
function d(i, step) { return M.addDays(TODAY, -Math.floor(i * (step || 2))) }
var NAMES = M.staffNames()

/* 공통 관리 화면 설정
 * cols: [제목, 필드, 형식(text|num|won|pct|status|mask|muted)] */
var MP = {}
MP["/m/forms"] = { group: "전자결재", nav: "문서양식함", title: "문서양식함", desc: "기안에 쓰는 문서 양식과 기본 결재선을 관리합니다.", btns: ["opt", "cols", "excel"], add: "양식 등록",
  card: "문서 양식 목록", filter: ["분류 필터", "cat", "분류 전체", ["일반", "회계", "인사", "서비스"]],
  cols: [["양식코드", "code"], ["양식명", "name"], ["분류", "cat"], ["기본 결재선", "line", "muted"], ["사용횟수", "uses", "num"], ["상태", "status", "status"]],
  rows: gen(15, function (i) { var n = ["기안문", "품의서", "지출결의서", "출장명령서", "복명서", "휴가신청서", "시간외근무명령서", "회의록", "외부활동계획서", "물품구입요청서", "시설보수요청서", "협조문", "보고서", "교육결과보고서", "후원금 사용 보고서"][i]
    return { code: "F-" + String(i + 1).padStart(3, "0"), name: n, cat: ["일반", "회계", "회계", "인사", "인사", "인사", "인사", "일반", "서비스", "회계", "일반", "일반", "일반", "인사", "회계"][i], line: i % 3 ? "팀장 → 사무국장 → 원장" : "사무국장 → 원장", uses: 140 - i * 9, status: i === 14 ? "미사용" : "사용" } }),
  kpis: function (r) { return [["file-text", "전체 양식", r.length + "종"], ["circle-check", "사용 중", cnt(r, "status", "사용") + "종"], ["award", "가장 많이 쓴 양식", r[0] ? r[0].name : "-", "올해 " + (r[0] ? r[0].uses : 0) + "회"], ["calendar", "이번 달 사용", "38회"]] } }
MP["/m/supplies"] = { group: "행정지원", nav: "비품관리", title: "비품관리", desc: "비품 손상·망실 보고서를 받고 비품 대장을 정리합니다.", style: "bar", btns: [], add: "보고서 작성",
  pills: ["손·망실 보고서", "비품 대장"], targets: [["", "물품명·품목번호"]], ph: "물품명·품목번호로 찾기", filter: ["처리상태 선택", "status", "전체 상태", ["접수", "처리완료"]], sorts: ["접수번호순", "접수번호 역순"],
  cols: [["접수번호", "no"], ["물품명", "name"], ["사용위치", "loc"], ["처리구분", "kind"], ["보고자", "who"], ["처리상태", "status", "status"]],
  rows: gen(24, function (i) { var it = ["사무용 의자", "전기포트", "블루투스 스피커", "탁상 달력", "청소기", "프린터", "선풍기", "보드게임 세트", "가습기", "책상 서랍장"][i % 10]
    return { no: M.YEAR + "-" + String(24 - i).padStart(5, "0"), name: it, code: "P-" + (1200 + i * 7), loc: ["사무실", "A동 휴게실", "다목적홀", "교육실", "B동 거실"][i % 5], kind: ["손상", "망실", "폐기"][i % 3], who: NAMES[(i * 3) % 24], status: i < 4 ? "접수" : "처리완료" } }) }
MP["/m/sponsor"] = { group: "행정지원", nav: "후원·봉사 관리", title: "후원·봉사 관리", desc: "후원금·후원물품과 자원봉사 활동을 기록하고 영수증 발급을 관리합니다.", btns: ["cols", "excel"], add: "후원 등록",
  pills: ["후원 내역", "봉사활동", "후원 신청서", "봉사 신청서", "물품 수요조사", "봉사 수요조사"], card: "후원 접수 목록", filter: ["구분 필터", "kind", "구분 전체", ["현금", "물품"]],
  cols: [["접수일자", "date"], ["후원자", "who"], ["구분", "kind"], ["내역", "what"], ["금액/환산액", "amt", "won"], ["영수증", "rcpt", "status"]],
  rows: gen(36, function (i) { var k = i % 3 ? "현금" : "물품"
    return { date: d(i, 2.5), who: ["가나다 상사", "늘푸른 교회", "개인 후원자", "하늘 봉사회", "다온 베이커리", "지역 주민 모임"][i % 6], kind: k, what: k === "현금" ? "정기 후원금" : ["생활용품", "간식", "도서", "겨울 이불"][i % 4], amt: k === "현금" ? (3 + (i % 5) * 2) * 10000 : (8 + i % 7) * 10000, rcpt: i < 5 ? "미발급" : "발급" } }),
  kpis: function (r) { var m = r.filter(function (x) { return x.date.slice(0, 7) === M.MONTH }); return [["wallet", "이번 달 후원금", won(sum(m.filter(function (x) { return x.kind === "현금" }), "amt"))], ["box", "이번 달 후원 물품", cnt(m, "kind", "물품") + "건"], ["users", "이번 달 봉사 인원", "27명"], ["circle-check", "영수증 발급", cnt(r, "rcpt", "발급") + "건"]] } }
MP["/m/resources"] = { group: "그룹웨어", nav: "자원관리", title: "자원관리", desc: "빔프로젝터·노트북 같은 공용 자원을 예약하고 반납을 확인합니다.", btns: ["opt", "cols", "excel"], add: "자원 예약",
  card: "자원 예약 목록", filter: ["자원 필터", "res", "자원 전체", ["빔프로젝터", "노트북 1", "노트북 2", "디지털카메라", "회의용 태블릿"]],
  cols: [["자원", "res"], ["일자", "date"], ["시간", "time"], ["용도", "use"], ["예약자", "who"], ["상태", "status", "status"]],
  rows: gen(28, function (i) { return { res: ["빔프로젝터", "노트북 1", "노트북 2", "디지털카메라", "회의용 태블릿"][i % 5], date: M.addDays(TODAY, 3 - i), time: ["10:00~12:00", "14:00~16:00", "13:00~17:00"][i % 3], use: ["직원 교육", "행사 촬영", "외부 회의", "프로그램 운영"][i % 4], who: NAMES[(i * 5) % 24], status: i < 4 ? "예약" : i < 6 ? "사용중" : "반납" } }),
  kpis: function (r) { return [["box", "등록 자원", "5종"], ["calendar", "오늘 예약", r.filter(function (x) { return x.date === TODAY }).length + "건"], ["circle-check", "반납 완료", cnt(r, "status", "반납") + "건"], ["list-checks", "이번 주 예약", "9건"]] } }
MP["/m/hr-card"] = { group: "인사관리", nav: "인사카드", title: "인사카드", desc: "직원별 인사 기록과 자격·경력 사항을 관리합니다.", btns: ["cols", "excel"], add: "인사카드 등록",
  card: "인사카드 목록", filter: ["부서 필터", "dept", "부서 전체", M.DEPTS],
  cols: [["사번", "no"], ["이름", "name"], ["부서", "dept"], ["직위", "pos"], ["주요 자격", "qual", "muted"], ["입사일", "hired"], ["상태", "status", "status"]],
  rows: M.STAFF.map(function (s, i) { return { id: i + 1, no: "N" + s.hired.slice(0, 4) + "-" + M.pad(i + 1), name: s.name, dept: s.dept, pos: s.pos, qual: { "간호사": "간호사 면허", "영양사": "영양사 면허", "조리원": "조리기능사" }[s.pos] || (i % 3 ? "사회복지사 2급" : "사회복지사 1급"), hired: s.hired, status: s.status } }),
  kpis: function (r) { return [["file-text", "인사카드", r.length + "명"], ["circle-check", "재직자", cnt(r, "status", "재직") + "명"], ["award", "자격 보유", r.length + "명"], ["clock", "근속 5년 이상", r.filter(function (x) { return x.hired.slice(0, 4) <= String(+M.YEAR - 5) }).length + "명"]] } }
MP["/m/certificates"] = { group: "인사관리", nav: "제증명발급", title: "제증명발급", desc: "재직·경력증명서 발급을 신청하고 발급 이력을 확인합니다.", btns: ["cols", "excel"], add: "발급 신청",
  card: "발급 신청 목록", filter: ["증명서 종류 필터", "kind", "증명서 종류 전체", ["재직증명서", "경력증명서", "원천징수영수증"]],
  cols: [["발급번호", "no"], ["증명서 종류", "kind"], ["용도", "use"], ["부수", "n", "num"], ["신청자", "who"], ["신청일", "date"], ["상태", "status", "status"]],
  rows: gen(26, function (i) { return { no: M.YEAR + "-C" + String(80 - i).padStart(3, "0"), kind: ["재직증명서", "경력증명서", "원천징수영수증"][i % 3], use: ["금융기관 제출", "관공서 제출", "개인 보관"][i % 3], n: 1 + (i % 2), who: NAMES[(i * 7) % 24], date: d(i, 3), status: i < 3 ? "신청" : "완료" } }),
  kpis: function (r) { return [["circle-check", "이번 달 발급", r.filter(function (x) { return x.date.slice(0, 7) === M.MONTH && x.status === "완료" }).length + "건"], ["clock", "발급 대기", cnt(r, "status", "신청") + "건"], ["file-text", "전체 발급", r.length + "건"], ["calendar", "최근 신청", r[0] ? r[0].date.slice(5) : "-"]] } }
MP["/m/training"] = { group: "인사관리", nav: "교육관리", title: "교육관리", desc: "법정·직무 교육 과정을 등록하고 직원별 이수 현황을 관리합니다.", btns: ["opt", "cols", "excel"], add: "교육 등록",
  pills: ["교육관리", "교육신청", "결과보고", "교육현황", "이수기록", "이수현황", "교육계획", "만족도", "통계", "교육과정", "직원 자격"], card: "교육 과정 목록", filter: ["구분 필터", "kind", "구분 전체", ["법정", "직무", "외부"]],
  cols: [["교육명", "name"], ["구분", "kind"], ["교육일", "date"], ["시간", "hrs", "num"], ["장소", "place"], ["이수율", "rate", "pct"], ["상태", "status", "status"]],
  rows: gen(18, function (i) { return { name: ["인권교육", "성희롱 예방교육", "개인정보 보호교육", "소방안전 교육", "응급처치 실습", "의사소통 기법", "사례관리 실무", "직장 내 괴롭힘 예방"][i % 8], kind: ["법정", "법정", "법정", "법정", "직무", "직무", "외부", "법정"][i % 8], date: M.addDays(TODAY, 20 - i * 9), hrs: [2, 1, 1, 2, 4, 3, 6, 1][i % 8], place: ["다목적홀", "교육실", "온라인"][i % 3], rate: i < 2 ? 0 : 70 + (i * 7) % 31, status: i < 2 ? "예정" : "완료" } }),
  kpis: function (r) { return [["book-open", "올해 교육 과정", r.length + "개"], ["award", "법정교육 이수율", "94%"], ["calendar", "이번 달 교육", r.filter(function (x) { return x.date.slice(0, 7) === M.MONTH }).length + "회"], ["clock", "누적 교육 시간", sum(r, "hrs") + "시간"]] } }
MP["/m/medical"] = { group: "서비스기록", nav: "의료관리", title: "의료관리", desc: "외래 동행과 건강 관찰 기록을 남기고 결재합니다. (체험판은 중립적인 예시만 보여 줍니다)", btns: ["roster", "opt", "cols", "excel"], add: "의료 기록 작성",
  pills: ["의료 기록", "의료일지 결재", "약물 처방", "예방접종", "검진", "입퇴원", "건강정보", "의약외품", "조회"], pills2: ["전체", "외래진료", "건강관찰", "일일건강상태"], card: "의료 기록", filter: ["구분 필터", "kind", "구분 전체", ["외래진료", "건강관찰", "일일건강상태"]],
  cols: [["일자", "date"], ["이용인", "res"], ["구분", "kind"], ["내용", "what"], ["의료기관", "org", "muted"], ["담당", "who"], ["상태", "status", "status"]],
  rows: gen(30, function (i) { var k = ["외래진료", "건강관찰", "일일건강상태"][i % 3]
    return { date: d(i, 1), res: M.RES[i % 12], kind: k, what: k === "외래진료" ? "정기 외래 동행" : k === "건강관찰" ? "정기 확인 · 특이사항 없음" : "일일 확인 기록", org: k === "외래진료" ? "협력 의료기관 " + "AB"[i % 2] : "-", who: ["권나영", "신우진"][i % 2], status: i < 4 ? "결재대기" : "완료" } }),
  kpis: function (r) { return [["heart-pulse", "이번 달 기록", r.filter(function (x) { return x.date.slice(0, 7) === M.MONTH }).length + "건"], ["calendar", "이번 주 외래 동행", "4건"], ["eye", "관찰 기록", cnt(r, "kind", "건강관찰") + "건"], ["circle-check", "결재 완료", cnt(r, "status", "완료") + "건"]] } }
MP["/m/education"] = { group: "서비스기록", nav: "평생교육", title: "평생교육", desc: "이용자 평생교육 프로그램과 참여 현황을 관리합니다.", btns: ["opt", "cols", "excel"], add: "프로그램 등록",
  pills: ["프로그램", "교육계획", "활동일지", "활동일지 결재", "작업활동", "모니터링", "결과서", "작성 현황", "조회 · 출력", "분석"], card: "프로그램 목록", filter: ["분야 필터", "field", "분야 전체", ["문화예술", "생활기술", "체육", "정보화"]],
  cols: [["프로그램", "name"], ["분야", "field"], ["일정", "when", "muted"], ["강사", "teacher"], ["참여", "n", "num"], ["상태", "status", "status"]],
  rows: gen(12, function (i) { return { name: ["그림 그리기 교실", "요리 교실", "원예 활동", "음악 감상", "생활 체육", "컴퓨터 기초", "도예 체험", "사진 교실", "제과 제빵", "합창", "걷기 모임", "스마트폰 활용"][i], field: ["문화예술", "생활기술", "생활기술", "문화예술", "체육", "정보화", "문화예술", "문화예술", "생활기술", "문화예술", "체육", "정보화"][i], when: "매주 " + "월화수목금"[i % 5] + " " + ["10:00", "14:00", "15:30"][i % 3], teacher: i % 2 ? "외부 강사" : NAMES[17 + (i % 3)], n: 4 + (i % 6), status: i === 11 ? "예정" : "진행" } }),
  kpis: function (r) { return [["book-open", "운영 프로그램", cnt(r, "status", "진행") + "개"], ["users", "참여 인원", sum(r, "n") + "명"], ["calendar", "이번 주 수업", "14회"], ["circle-check", "결과서 작성", "9건"]] } }
MP["/m/meals"] = { group: "서비스기록", nav: "급식관리", title: "급식관리", desc: "급식 일지와 식단, 검식·보존식 기록을 관리합니다.", btns: ["opt", "cols", "excel"], add: "일지 작성",
  pills: ["급식", "하루 일지", "식단표", "검식", "보존식", "위생점검", "영양DB"], card: "급식 일지", filter: ["구분 필터", "kind", "구분 전체", ["조식", "중식", "석식"]],
  cols: [["일자", "date"], ["구분", "kind"], ["주요 메뉴", "menu"], ["식수", "n", "num"], ["특별식", "special", "muted"], ["작성자", "who"], ["상태", "status", "status"]],
  rows: gen(30, function (i) { return { date: d(i, 0.34), kind: ["중식", "조식", "석식"][i % 3], menu: ["잡곡밥 · 된장국 · 불고기", "흰죽 · 계란찜 · 김치", "카레라이스 · 샐러드", "비빔밥 · 미역국", "잔치국수 · 만두", "생선구이 · 시금치나물"][i % 6], n: 38 + (i % 7), special: i % 11 === 0 ? "생일상" : "-", who: "황민재", status: i < 2 ? "작성중" : "완료" } }),
  kpis: function (r) { return [["users", "오늘 식수 인원", "41명"], ["heart-pulse", "특별식 제공", r.filter(function (x) { return x.special !== "-" }).length + "회"], ["wallet", "이번 달 급식비", won(4380000)], ["circle-check", "검식 완료", "28회"]] } }
MP["/m/resident-cash"] = { group: "서비스기록", nav: "이용자금전출납", title: "이용자금전출납", desc: "이용자 금전 출납을 기록하고 확인합니다. 체험판에서는 금액을 표시하지 않습니다.", btns: ["roster", "opt", "cols", "excel"], add: "출납 등록",
  pills: ["출납", "계좌", "금전출납부", "자산현황"], card: "출납 내역", filter: ["이용인 필터", "res", "이용인 전체", M.RES],
  cols: [["일자", "date"], ["이용인", "res"], ["계좌", "acct", "muted"], ["구분", "kind"], ["내용", "what"], ["금액", "amt", "mask"], ["잔액", "bal", "mask"], ["상태", "status", "status"]],
  rows: gen(32, function (i) { var k = i % 4 ? "출금" : "입금"; return { date: d(i, 1), res: M.RES[(i * 5) % 12], acct: "생활 통장", kind: k, what: k === "입금" ? "정기 입금" : ["생필품 구입", "외부 활동비", "이미용", "간식 구입"][i % 4], status: i < 3 ? "확인대기" : "확인" } }),
  kpis: function (r) { return [["users", "관리 이용인", "12명"], ["arrow-down-to-line", "이번 달 입금", r.filter(function (x) { return x.kind === "입금" && x.date.slice(0, 7) === M.MONTH }).length + "건"], ["arrow-up-from-line", "이번 달 출금", r.filter(function (x) { return x.kind === "출금" && x.date.slice(0, 7) === M.MONTH }).length + "건"], ["clock", "확인 대기", cnt(r, "status", "확인대기") + "건"]] } }
MP["/m/resedu-plans"] = { group: "서비스기록", nav: "이용자교육", title: "이용자교육", desc: "이용자 대상 교육 계획을 세우고 진행·참석·결과를 관리합니다.", btns: ["roster", "cols", "excel"], add: "교육계획 작성",
  pills: ["교육계획", "교육진행", "참석체크", "결과보고", "이수현황", "교육과정"], card: "교육 계획 목록", filter: ["상태 필터", "status", "상태 전체", ["결재대기", "진행", "완료"]],
  cols: [["계획번호", "no"], ["연도", "year"], ["교육계획", "name"], ["대상", "target"], ["계획", "plan", "muted"], ["담당자", "who"], ["상태", "status", "status"], ["결재이력", "hist", "muted"]],
  rows: gen(14, function (i) { return { no: "E-" + M.YEAR + "-" + M.pad(14 - i), year: M.YEAR, name: ["소방대피 교육", "교통안전 교육", "경제생활 교육", "인권 교육", "생활안전 교육", "정보보호 교육", "재난 대응 훈련"][i % 7], target: ["이용자 전체", "공동형주택", "자립형주택"][i % 3], plan: ["분기 1회", "월 1회", "연 2회"][i % 3], who: NAMES[18 + (i % 3)], status: i < 2 ? "결재대기" : i < 6 ? "진행" : "완료", hist: i < 2 ? "기안" : "승인 " + d(i, 9).slice(5) } }),
  kpis: function (r) { return [["list-checks", "올해 교육 계획", r.length + "건"], ["clock", "결재 대기", cnt(r, "status", "결재대기") + "건"], ["circle-check", "완료", cnt(r, "status", "완료") + "건"], ["triangle-alert", "미실시", "0건"]] } }
MP["/m/budget"] = { group: "회계", nav: "세입/세출", title: "세입/세출", desc: "회계연도별 세입·세출 예산 과목과 집행 현황을 관리합니다.", btns: ["cols", "excel"], add: "예산 과목 추가",
  card: M.YEAR + "년 예산 과목", filter: ["구분 필터", "kind", "구분 전체", ["세입", "세출"]],
  cols: [["회계연도", "year"], ["과목코드", "code"], ["구분", "kind"], ["과목명", "name"], ["예산액", "plan", "num"], ["집행액", "spent", "num"], ["집행률", "rate", "pct"], ["상태", "status", "status"]],
  rows: gen(16, function (i) { var k = i < 5 ? "세입" : "세출", plan = [420, 96, 35, 12, 8, 210, 48, 36, 22, 30, 18, 25, 14, 9, 11, 6][i] * 1000000, sp = Math.round(plan * (0.55 + ((i * 13) % 45) / 100) / 1000) * 1000
    return { year: M.YEAR, code: (k === "세입" ? "1" : "2") + String(100 + i * 10), kind: k, name: ["보조금 수입", "후원금 수입", "이용료 수입", "이월금", "잡수입", "인건비", "업무추진비", "운영비", "프로그램 사업비", "시설비", "차량운영비", "급식비", "교육훈련비", "수용비", "공공요금", "예비비"][i], plan: plan, spent: sp, rate: Math.round(sp / plan * 100), status: "사용" } }),
  kpis: function (r) { return [["arrow-down-to-line", "세입 예산", won(sum(r.filter(function (x) { return x.kind === "세입" }), "plan"))], ["arrow-up-from-line", "세출 예산", won(sum(r.filter(function (x) { return x.kind === "세출" }), "plan"))], ["wallet", "집행액", won(sum(r.filter(function (x) { return x.kind === "세출" }), "spent"))], ["triangle-alert", "집행률 90% 초과", r.filter(function (x) { return x.rate > 90 }).length + "개"]] } }
MP["/m/resolution"] = { group: "회계", nav: "품의/결의서관리", title: "품의/결의서관리", desc: "지출 품의서와 결의서를 작성하고 예산 과목별 집행을 연결합니다.", btns: ["cols", "excel"], add: "품의서 작성",
  card: "품의·결의서 목록", filter: ["구분 필터", "kind", "구분 전체", ["품의", "결의"]],
  cols: [["문서번호", "no"], ["구분", "kind"], ["건명", "name"], ["예산 과목", "budget", "muted"], ["금액", "amt", "num"], ["작성자", "who"], ["상태", "status", "status"]],
  rows: gen(26, function (i) { return { no: "R-" + M.YEAR + "-" + String(90 - i).padStart(3, "0"), kind: i % 2 ? "결의" : "품의", name: ["사무용품 구입", "프로그램 재료 구입", "차량 정비", "교육 참가비", "다과 구입", "소모품 구입"][i % 6], budget: ["수용비", "프로그램 사업비", "차량운영비", "교육훈련비", "업무추진비", "운영비"][i % 6], amt: (12 + (i * 17) % 80) * 10000, who: NAMES[(i * 3) % 24], status: i < 3 ? "결재대기" : "완료" } }),
  kpis: function (r) { return [["file-text", "이번 달 작성", "11건"], ["clock", "결재 대기", cnt(r, "status", "결재대기") + "건"], ["circle-check", "결재 완료", cnt(r, "status", "완료") + "건"], ["wallet", "이번 달 집행액", won(sum(r.slice(0, 11), "amt"))]] } }
MP["/m/ledger"] = { group: "회계", nav: "경리회계", title: "경리회계", desc: "입금·출금·대체 전표를 입력하고 계정과목별로 정리합니다.", btns: ["opt", "cols", "excel"], add: "전표 입력",
  card: "전표 목록", filter: ["구분 필터", "kind", "구분 전체", ["입금", "출금", "대체"]],
  cols: [["전표번호", "no"], ["일자", "date"], ["구분", "kind"], ["적요", "memo"], ["계정과목", "acct", "muted"], ["금액", "amt", "num"], ["상태", "status", "status"]],
  rows: gen(40, function (i) { var k = ["출금", "출금", "입금", "대체"][i % 4]; return { no: "V" + d(i, 0.8).replace(/-/g, "").slice(2) + "-" + M.pad(i % 7 + 1), date: d(i, 0.8), kind: k, memo: k === "입금" ? "후원금 입금" : k === "대체" ? "계정 대체" : ["공과금 납부", "식자재 대금", "사무용품 대금", "차량 주유비"][i % 4], acct: k === "입금" ? "후원금 수입" : ["공공요금", "급식비", "수용비", "차량운영비"][i % 4], amt: (5 + (i * 11) % 60) * 10000, status: i < 4 ? "결재대기" : "완료" } }),
  kpis: function (r) { return [["file-text", "이번 달 전표", r.filter(function (x) { return x.date.slice(0, 7) === M.MONTH }).length + "건"], ["clock", "결재 대기", cnt(r, "status", "결재대기") + "건"], ["arrow-down-to-line", "이번 달 입금 합계", won(sum(r.filter(function (x) { return x.kind === "입금" && x.date.slice(0, 7) === M.MONTH }), "amt"))], ["wallet", "이번 달 출금", won(sum(r.filter(function (x) { return x.kind === "출금" && x.date.slice(0, 7) === M.MONTH }), "amt"))]] } }
MP["/m/payroll"] = { group: "회계", nav: "급여", title: "급여", desc: "귀속월별 급여를 계산하고 지급 내역을 확인합니다. (가상 금액)", btns: ["cols", "excel"], add: "급여 항목 추가",
  card: M.MONTH.replace("-", "년 ") + "월 귀속 급여 목록", month: true, filter: ["부서 필터", "dept", "부서 전체", M.DEPTS],
  cols: [["귀속월", "month"], ["이름", "name"], ["부서", "dept"], ["기본급", "base", "num"], ["수당", "allow", "num"], ["공제", "ded", "num"], ["실지급액", "net", "num"], ["상태", "status", "status"]],
  rows: M.STAFF.map(function (s, i) { var b = 2400000 + (i % 7) * 120000, a = 200000 + (i % 4) * 50000, dd = Math.round((b + a) * 0.09 / 10) * 10; return { id: i + 1, month: M.MONTH, name: s.name, dept: s.dept, base: b, allow: a, ded: dd, net: b + a - dd, status: "작성중" } }),
  kpis: function (r) { return [["users", "지급 대상", r.length + "명"], ["wallet", "총 지급액", won(sum(r, "net"))], ["arrow-up-from-line", "공제 합계", won(sum(r, "ded"))], ["calendar", "지급 예정일", M.MONTH.slice(5) + "월 25일"]] } }
MP["/m/popup"] = { group: "시스템관리", nav: "팝업관리", title: "팝업관리", desc: "로그인 후 보이는 공지 팝업을 등록하고 게시 기간을 정합니다.", btns: ["cols", "excel"], add: "팝업 등록",
  card: "팝업 목록", filter: ["상태 필터", "status", "상태 전체", ["게시중", "예정", "종료"]],
  cols: [["팝업 제목", "title"], ["노출 대상", "target"], ["게시 기간", "period", "muted"], ["크기", "size", "muted"], ["노출", "views", "num"], ["상태", "status", "status"]],
  rows: gen(9, function (i) { return { title: ["인트라넷 점검 안내", "연차 사용 계획 제출", "하반기 소방훈련 안내", "직원 만족도 조사", "추석 연휴 근무 안내", "개인정보 보호 서약", "새 결재 양식 안내", "복지회 총회 안내", "체육행사 안내"][i], target: i % 3 ? "전 직원" : "부서관리자", period: M.addDays(TODAY, 10 - i * 12).slice(5) + " ~ " + M.addDays(TODAY, 24 - i * 12).slice(5), size: ["400×500", "480×560", "360×420"][i % 3], views: i === 0 ? 0 : 20 + i * 13, status: i === 0 ? "예정" : i < 3 ? "게시중" : "종료" } }),
  kpis: function (r) { return [["eye", "게시 중", cnt(r, "status", "게시중") + "개"], ["calendar", "게시 예정", cnt(r, "status", "예정") + "개"], ["layers", "전체 팝업", r.length + "개"], ["file-text", "게시 종료", cnt(r, "status", "종료") + "개"]] } }

var BTN = { opt: ["선택지", "settings2"], cols: ["칸 설정", "list-checks"], excel: ["엑셀", "download"], roster: ["이용인 명부", "users"] }
function cell(r, c) {
  var v = r[c[1]], t = c[2]
  if (t === "status") return M.statusBadge(v)
  if (t === "num") return Demo.num(v)
  if (t === "won") return Demo.num(v)
  if (t === "pct") return v + "%"
  if (t === "mask") return '<span class="text-muted-foreground">비공개</span>'
  if (t === "muted") return '<span class="text-muted-foreground">' + esc(v) + "</span>"
  return esc(v)
}
function mpCols(cfg) {
  var n = cfg.cols.length
  return cfg.cols.map(function (c, i) {
    var num = c[2] === "num" || c[2] === "won" || c[2] === "pct" || c[2] === "mask"
    var th = i === 0 ? "L:pl-6" : i === n - 1 ? "L:pr-6" : num ? "C:text-right" : "L:"
    var td = i === 0 ? "W:h-12 pl-6 font-medium" : i === n - 1 ? "W:h-12 pr-6" : num ? "W:h-12 text-right tabular-nums" : "W:h-12"
    return { h: c[0], th: th, td: td, v: function (r) {
      if (c[1] === "name" && r.code && cfg.style === "bar") return esc(r.name) + '<span class="block text-xs font-normal text-muted-foreground">' + esc(r.code) + "</span>"
      return cell(r, c)
    } }
  })
}
function pageM(route, cfg) {
  var path = route.path
  var key = "mp-" + path
  var btns = (cfg.btns || []).map(function (b) { return M.btn(BTN[b][0], BTN[b][1], b === "excel" ? "excel" : "mpTool", ' data-name="' + BTN[b][0] + '"') }).join("")
  var h = M.pageHeader(cfg.title, cfg.desc, btns + M.pbtn(cfg.add, "plus", "mpAdd", ' data-path="' + path + '"'))
  if (cfg.kpis) h += M.kpis(cfg.kpis(cfg.rows))
  if (cfg.pills && cfg.style !== "bar") h += M.navPills(cfg.title, cfg.pills, path)
  if (cfg.pills2) h += '<nav aria-label="구분" class="flex w-fit max-w-full flex-wrap gap-1 rounded-lg bg-muted p-1">' + cfg.pills2.map(function (p, i) {
    var cur = (U(key).f.kind || "") === (i ? p : "")
    return '<a class="' + (cur ? K.K191 : K.K138) + '" href="#' + path + '" data-act="mpKind" data-key="' + key + '" data-v="' + (i ? esc(p) : "") + '">' + esc(p) + "</a>"
  }).join("") + "</nav>"
  var cols = mpCols(cfg)
  if (cfg.style === "bar") {
    if (cfg.pills) h += M.navPills(cfg.title, cfg.pills, path)
    cols.push({ h: "관리", th: "C:w-20 text-center", td: "W:text-center", v: function (r) { return M.ellipsisBtn(r.no + " 관리", "mpMenu", r.id) + "" } })
    cols[0].th = "L:w-28"; cols[0].td = "W:tabular-nums"; cols[cols.length - 2].th = "L:w-24"; cols[cols.length - 2].td = "W:"
    h += M.barCard(key, { targets: cfg.targets, ph: cfg.ph, filters: [{ label: cfg.filter[0], field: cfg.filter[1], all: cfg.filter[2], options: cfg.filter[3] }], sorts: cfg.sorts,
      fields: cfg.cols.map(function (c) { return c[1] }).concat(["code"]), cols: cols }, cfg.rows)
  } else {
    h += M.headCard(key, { title: cfg.card, fields: cfg.cols.map(function (c) { return c[1] }), filter: { label: cfg.filter[0], field: cfg.filter[1], all: cfg.filter[2], options: cfg.filter[3] }, cols: cols, rowAct: "mpOpen" }, cfg.rows)
  }
  return M.shell(route, cfg.group, cfg.nav, h)
}
var curCfg = null
Demo.on("mpTool", function (d) { Demo.toast("체험판에서는 '" + d.name + "' 설정을 바꿀 수 없습니다") })
Demo.on("mpKind", function (d) { U(d.key).f.kind = d.v; U(d.key).page = 1; Demo.update() })
Demo.on("mpOpen", function (d) {
  var cfg = MP[M.S.lastRoute.path], r = cfg.rows.filter(function (x) { return String(x.id) === String(d.id) })[0]
  M.openModal({ title: cfg.title + " 상세", body: M.infoRows(cfg.cols.map(function (c) { return [c[0], cell(r, c)] })), footer: M.btn("삭제", "trash2", "mpDel", ' data-id="' + r.id + '"') + M.pbtn("닫기", "", "modalClose") })
})
Demo.on("mpMenu", function (d, el) {
  var cfg = MP[M.S.lastRoute.path], r = cfg.rows.filter(function (x) { return String(x.id) === String(d.id) })[0]
  M.openPop(el, (r.status === "접수" ? M.popItem("처리 완료", "circle-check", "mpDone", ' data-id="' + r.id + '"') : "") + M.popItem("상세 보기", "file-text", "mpOpen", ' data-id="' + r.id + '"') + M.popItem("삭제", "trash2", "mpDel", ' data-id="' + r.id + '"'), true)
})
Demo.on("mpDone", function (d) { var cfg = MP[M.S.lastRoute.path]; cfg.rows.filter(function (x) { return String(x.id) === String(d.id) })[0].status = "처리완료"; S.pop = null; Demo.update(); Demo.toast("처리 완료로 바꿨습니다") })
Demo.on("mpDel", function (d) { var cfg = MP[M.S.lastRoute.path]; cfg.rows = cfg.rows.filter(function (x) { return String(x.id) !== String(d.id) }); S.modal = null; S.pop = null; Demo.update(); Demo.toast("삭제했습니다") })
Demo.on("mpAdd", function (d) {
  var cfg = MP[d.path]
  var body = cfg.cols.filter(function (c) { return c[2] !== "status" && c[2] !== "mask" }).map(function (c) {
    var sample = cfg.rows[0] ? cfg.rows[0][c[1]] : ""
    if (c[1] === cfg.filter[1]) return M.field(c[0], M.nsel(c[1], cfg.filter[3], cfg.filter[3][0]))
    var num = c[2] === "num" || c[2] === "won" || c[2] === "pct"
    return M.field(c[0], M.inp(c[1], /date|hired/.test(c[1]) ? TODAY : c[1] === "year" ? M.YEAR : c[1] === "month" ? M.MONTH : "", "예) " + (sample == null ? "" : sample), /date|hired/.test(c[1]) ? "date" : num ? "number" : "text"))
  }).join("")
  M.openModal({ title: cfg.add, submit: "mpSave", ok: "등록", body: '<input type="hidden" name="__path" value="' + esc(d.path) + '">' + M.grid2(body) + '<p class="text-xs text-muted-foreground">빈 칸은 예시 값으로 채워 목록 맨 위에 추가합니다.</p>' })
})
Demo.on("mpSave", function (v) {
  var cfg = MP[v.__path], ex = cfg.rows[0] || {}, r = { id: cfg.rows.reduce(function (m, x) { return Math.max(m, x.id) }, 0) + 1 }
  cfg.cols.forEach(function (c) {
    var val = v[c[1]]
    if (c[2] === "status") val = { "/m/popup": "예정", "/m/supplies": "접수", "/m/sponsor": "미발급" }[v.__path] || (ex[c[1]] === "사용" ? "사용" : "결재대기")
    else if (val == null || val === "") val = ex[c[1]]
    else if (c[2] === "num" || c[2] === "won" || c[2] === "pct") val = +val
    r[c[1]] = val
  })
  if (ex.code && !v.code) r.code = ex.code
  cfg.rows.unshift(r); S.modal = null; U("mp-" + v.__path).page = 1; Demo.update(); Demo.toast(cfg.add + " 완료 · 목록 맨 위에 추가했습니다")
})
Demo.on("subTab", function (d) { Demo.toast("체험판에서는 '" + d.name + "' 탭을 제공하지 않습니다") })

/* ═════════ 주거지원(지원일지) ═════════ */
var DL = { date: TODAY, open: true, logs: {} }
var DL_T = ["오전 산책 동행", "여가 프로그램 참여", "외부 활동 동행(도서관)", "식사 지원", "주택 청소 함께하기", "장보기 동행", "저녁 자유 시간", "가족 전화 연결 지원"]
function logsFor(house, date) {
  var k = house + "|" + date
  if (!DL.logs[k]) { var n = 2 + (house.length + +date.slice(8)) % 3; DL.logs[k] = []; for (var i = 0; i < n; i++) DL.logs[k].push({ time: M.pad(9 + i * 3) + ":00", who: M.RES[(i + house.length) % 12], what: DL_T[(i * 3 + +date.slice(8)) % DL_T.length], by: NAMES[(i + house.length) % 12 + 3] }) }
  return DL.logs[k]
}
function pageDailyLog(route) {
  var btns = M.btn("이용인 명부", "users", "mpRoster") + M.btn("선택지", "settings2", "mpTool", ' data-name="선택지"') + M.btn("칸 설정", "list-checks", "mpTool", ' data-name="칸 설정"') + M.btn("보기 설정", "sliders-horizontal", "mpTool", ' data-name="보기 설정"') + M.excelBtn()
  var h = M.pageHeader("주거지원", "주택별 하루 지원일지를 쓰고, 인수인계·상담 기록을 함께 관리합니다.", btns)
  h += '<div class="flex flex-wrap items-center gap-2">' + M.navPills("주거지원", ["지원일지", "인수인계", "상담일지", "활동", "서비스 항목", "보고서", "주거지원 기록", "근무조 이력"], "/m/daily-log") +
    '<a role="button" data-slot="button" class="' + K.K14 + '" href="#/m/isp">개인별지원' + ic("arrow-up-right") + "</a></div>"
  var total = 0; M.HOUSES.forEach(function (g) { total += g[1].length })
  h += '<div data-slot="card" data-size="default" class="' + K.K94 + '"><div data-slot="card-content" class="' + K.K182 + '"><div class="flex flex-col gap-1.5 sm:w-64"><span class="text-sm font-medium">주택</span>' +
    '<button type="button" data-slot="button" aria-expanded="' + DL.open + '" class="' + K.K183 + '" data-act="dlToggle"><span class="truncate text-muted-foreground">' + (DL.open ? "주택을 고르세요" : "전체 주택 " + total + "곳") + "</span>" + ic(DL.open ? "chevron-up" : "chevron-down", "shrink-0 text-muted-foreground") + "</button></div>" +
    '<div class="flex flex-col gap-1.5"><span class="text-sm font-medium">날짜</span><div class="flex items-start gap-1.5"><button type="button" data-slot="button" aria-label="전날" class="' + K.K13 + '" data-act="dlDay" data-d="-1">' + ic("chevron-left") + "</button>" +
    '<div class="min-w-0 flex-1 sm:w-52 sm:flex-none"><div class="flex w-full flex-col gap-1.5"><input type="date" data-slot="input" class="' + K.K184 + '" value="' + DL.date + '" data-change="dlDate" aria-label="날짜">' +
    '<p class="flex items-center gap-1.5 text-xs font-semibold text-foreground">' + ic("calendar-days", "size-4 shrink-0") + esc(M.korDate(DL.date)) + (DL.date === TODAY ? " · 오늘" : "") + "</p></div></div>" +
    '<button type="button" data-slot="button" aria-label="다음 날" class="' + K.K13 + '" data-act="dlDay" data-d="1">' + ic("chevron-right") + "</button></div></div></div></div>"
  if (DL.open) {
    h += '<div><div data-slot="card" data-size="default" class="' + K.K94 + '"><div data-slot="card-header" class="' + K.K185 + '"><div data-slot="card-title" class="font-medium group-data-[size=sm]/card:text-sm text-base">주택 고르기</div></div>' +
      '<div data-slot="card-content" class="px-(--card-spacing) grid gap-4 lg:grid-cols-2">' + M.HOUSES.map(function (g, gi) {
        return '<section aria-label="' + esc(g[0]) + '" class="flex min-w-0 flex-col gap-2 rounded-xl border bg-muted/30 p-3"><h3 class="flex items-baseline gap-1.5 text-sm font-bold">' + esc(g[0]) + '<span class="font-normal text-muted-foreground tabular-nums">' + g[1].length + "곳</span></h3>" +
          '<ul class="grid grid-cols-2 gap-2 sm:grid-cols-3">' + g[1].map(function (hn, i) {
            var n = logsFor(hn, DL.date).length
            return '<li><button type="button" aria-label="' + esc(hn) + '" class="' + K.K186 + '" data-act="dlHouse" data-h="' + esc(hn) + '"><span class="' + K.K187 + '">' + ic("users", "size-3.5") + (3 + (i + gi) % 2) + '</span><span class="max-w-full text-base font-bold break-words">' + esc(hn) + '</span><span class="max-w-full text-xs break-words text-muted-foreground">일지 ' + n + "건 · 담당 " + esc(NAMES[(i + gi * 3) % 12 + 3]) + "</span></button></li>"
          }).join("") + "</ul></section>"
      }).join("") + "</div></div></div>"
  }
  return M.shell(route, "서비스기록", "주거지원", h)
}
Demo.on("dlToggle", function () { DL.open = !DL.open; Demo.update() })
Demo.on("dlDay", function (d) { DL.date = M.addDays(DL.date, +d.d); Demo.update() })
Demo.on("dlDate", function (v) { if (v) { DL.date = v; Demo.update() } })
Demo.on("dlHouse", function (d) {
  var logs = logsFor(d.h, DL.date)
  M.openModal({ title: d.h + " · " + M.korDate(DL.date) + " 지원일지", submit: "dlSave", ok: "일지 추가", wide: true, body: '<input type="hidden" name="h" value="' + esc(d.h) + '">' +
    '<div class="overflow-x-auto rounded-lg border">' + M.table([{ h: "시간", th: "L:w-20", td: "W:tabular-nums", v: function (r) { return esc(r.time) } }, { h: "이용인", th: "L:w-24", v: function (r) { return esc(r.who) } },
      { h: "지원 내용", td: "N:whitespace-normal", v: function (r) { return esc(r.what) } }, { h: "작성", th: "L:w-24", td: "W:text-muted-foreground", v: function (r) { return esc(r.by) } }], logs.map(function (l, i) { l.id = i + 1; return l })) + "</div>" +
    M.grid2(M.field("시간", M.inp("time", "15:00", "", "time")) + M.field("이용인", M.nsel("who", M.RES, M.RES[0])) + M.field("지원 내용", M.inp("what", "", "예) 여가 프로그램 참여", "text", " required"), 1)) })
})
Demo.on("dlSave", function (v) {
  var logs = logsFor(v.h, DL.date); logs.push({ time: v.time, who: v.who, what: v.what, by: "관리자" }); logs.sort(function (a, b) { return a.time.localeCompare(b.time) })
  S.modal = null; Demo.update(); Demo.toast(v.h + " 지원일지를 추가했습니다")
})
Demo.on("mpRoster", function () {
  var rows = M.RES.map(function (r, i) { var g = M.HOUSES[i % 4]; return { id: i + 1, name: r, house: g[1][i % g[1].length], type: g[0] } })
  M.openModal({ title: "이용인 명부", wide: true, body: '<p class="text-sm text-muted-foreground">체험판에서는 이용인을 이용자 A·B·C… 로만 표시합니다.</p><div class="overflow-x-auto rounded-lg border">' +
    M.table([{ h: "이용인", td: "W:font-semibold", v: function (r) { return esc(r.name) } }, { h: "주택 유형", v: function (r) { return esc(r.type) } }, { h: "주택", v: function (r) { return esc(r.house) } }], rows) + "</div>", footer: M.pbtn("닫기", "", "modalClose") })
})

/* ═════════ 개인별지원 ═════════ */
var ISP = { house: "A동 1호", res: null }
var ISP_GOALS = [["여가", "주 2회 여가 프로그램 참여", "진행 중"], ["지역사회", "월 2회 지역 시설 이용", "진행 중"], ["자기결정", "하루 일과 스스로 정하기 연습", "점검 필요"], ["생활기술", "장보기 목록 함께 만들기", "달성"]]
function pageIsp(route) {
  var h = M.pageHeader("개인별지원", "이용인을 고르면 개인별지원 계획과 진단·사정·회의·평가 기록을 차례로 볼 수 있습니다.", "")
  h += '<nav aria-label="개인별지원 탭" class="flex w-fit max-w-full flex-wrap gap-1 rounded-lg bg-muted p-1">' + ["개인별지원", "진단", "사정보고서", "회의록", "계획서", "모니터링", "평가서"].map(function (t, i) {
    return '<a ' + (i ? 'data-act="subTab" data-name="' + t + '" ' : 'aria-current="page" ') + 'class="' + (i ? K.K138 : K.K137) + '" href="#/m/isp">' + t + "</a>"
  }).join("") + "</nav>"
  var houses = []; M.HOUSES.forEach(function (g) { houses = houses.concat(g[1]) })
  var hi = houses.indexOf(ISP.house), res = [0, 1, 2, 3].map(function (i) { return M.RES[(hi * 2 + i) % 12] })
  h += '<div data-slot="card" data-size="default" class="' + K.K94 + '"><div data-slot="card-content" class="px-(--card-spacing) flex flex-col gap-4"><div class="flex flex-col gap-1.5 sm:w-80"><span class="text-sm font-medium">주택</span>' +
    M.sel(K.K188, "주택", ISP.house, houses.map(function (x) { return [x, x + " (4명)"] }), "ispHouse") + "</div>" +
    '<div class="flex flex-col gap-1.5"><span class="text-sm font-medium">이용인</span><ul class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">' + res.map(function (r) {
      var on = ISP.res === r
      return '<li><a class="' + K.K189 + (on ? " bg-accent/60 ring-1 ring-primary/40" : "") + '" href="#/m/isp" data-act="ispRes" data-r="' + esc(r) + '"><span class="' + K.K190 + '" aria-hidden="true">' + esc(r.slice(-1)) + '</span><span class="max-w-full truncate font-semibold">' + esc(r) + '</span><span class="max-w-full text-xs break-words text-muted-foreground">' + esc(ISP.house) + " · 계획 " + M.YEAR + "</span></a></li>"
    }).join("") + "</ul></div></div></div>"
  if (!ISP.res) h += '<div data-slot="card" data-size="default" class="' + K.K94 + '"><div data-slot="card-content" class="px-(--card-spacing) py-10 text-center text-sm text-muted-foreground">위에서 이용인을 고르면 개인별지원 계획을 볼 수 있습니다.</div></div>'
  else h += '<div data-slot="card" data-size="default" class="' + K.K94 + '"><div data-slot="card-header" class="' + K.K213 + '"><div data-slot="card-title" class="font-medium group-data-[size=sm]/card:text-sm text-base">' + esc(ISP.res) + " · " + M.YEAR + '년 개인별지원 계획</div><div data-slot="card-description" class="text-sm text-muted-foreground">담당 ' + esc(NAMES[(hi % 10) + 3]) + " · 최근 모니터링 " + M.addDays(TODAY, -12) + "</div></div>" +
    '<div data-slot="card-content" class="px-0">' + M.table([{ h: "영역", th: "L:pl-6 w-32", td: "W:h-12 pl-6 font-medium", v: function (r) { return esc(r.a) } }, { h: "목표", td: "N:h-12 whitespace-normal", v: function (r) { return esc(r.b) } },
      { h: "진행", th: "L:pr-6 w-28", td: "W:h-12 pr-6", v: function (r) { return M.badge(r.c === "달성" ? "ok" : r.c === "진행 중" ? "info" : "warn", r.c) } }], ISP_GOALS.map(function (g, i) { return { id: i + 1, a: g[0], b: g[1], c: g[2] } })) + "</div></div>"
  return M.shell(route, "서비스기록", "개인별지원", h)
}
Demo.on("ispHouse", function (v) { ISP.house = v; ISP.res = null; Demo.update() })
Demo.on("ispRes", function (d) { ISP.res = d.r; Demo.update() })

/* ═════════ 체험판 미제공 화면 ═════════ */
function pageNotProvided(route, nav) {
  var h = M.pageHeader(nav.item[1], "이 메뉴는 실제 시스템에서 제공되는 화면입니다.", "")
  h += '<div data-slot="card" data-size="default" class="' + K.K94 + '"><div data-slot="card-content" class="px-(--card-spacing) flex flex-col items-center gap-3 py-16 text-center"><div class="' + K.K83 + '">' + ic("lock", "size-5") + "</div>" +
    '<p class="text-base font-semibold">체험판에서는 이 화면을 제공하지 않습니다</p><p class="max-w-md text-sm text-muted-foreground">대화·상담 내용이나 직인 이미지처럼 실제 기관 정보가 필요한 화면은 체험판에서 뺐습니다. 다른 메뉴는 가상 데이터로 자유롭게 눌러 볼 수 있습니다.</p>' +
    '<a role="button" data-slot="button" class="' + K.K14 + '" href="#/">' + ic("chevron-left") + "원내업무일정으로</a></div></div>"
  return M.shell(route, nav.group.label, nav.item[1], h)
}

M.MP = MP
Object.assign(M.pages, { m: pageM, dailyLog: pageDailyLog, isp: pageIsp, notProvided: pageNotProvided })
})()

;(function () {
"use strict"
var M = MI, S = M.S, U = M.U, P = M.pages
var NOT_PROVIDED = ["/messenger", "/board/director", "/m/seal"]

function render(route) {
  var sig = route.path + "?" + JSON.stringify(route.query)
  if (S.lastSig !== sig) { S.modal = null; S.pop = null; S.mobileNav = false; S.lastSig = sig }
  S.lastRoute = route
  var nav = M.findNav(route)
  if (nav && S.lastNavKey !== nav.group.key) { S.open = {}; S.open[nav.group.key] = true; S.lastNavKey = nav.group.key }
  var p = route.path, seg = p.split("/").filter(Boolean)
  document.title = ((nav && nav.item[1]) || "원내업무일정") + " · (가상) 늘봄빌리지 통합 ERP"
  if (NOT_PROVIDED.indexOf(p) >= 0) return P.notProvided(route, nav)
  if (p === "/") return P.schedule(route)
  if (p === "/worklog") return P.worklog(route)
  if (seg[0] === "board" && M.BOARDS[seg[1]]) {
    if (seg[2] === "write") return P.boardWrite(route, seg[1])
    if (seg[2]) return P.boardView(route, seg[1], +seg[2])
    return P.boardList(route, seg[1])
  }
  if (p === "/documents") return P.documents(route)
  if (p === "/documents/new") return P.docNew(route)
  if (seg[0] === "documents" && seg[1]) return P.docView(route, +seg[1])
  if (p === "/leave") return P.leave(route)
  if (p === "/card") return P.card(route)
  if (p === "/facility") return P.facility(route)
  if (p === "/vehicle") return P.vehicle(route)
  if (p === "/hall") return P.hall(route)
  if (p === "/overtime") return P.overtime(route)
  if (p === "/trip") return P.trip(route)
  if (p === "/users") return P.users(route)
  if (p === "/departments") return P.departments(route)
  if (p === "/approval-paths") return P.approval(route)
  if (p === "/staff") return P.staff(route)
  if (p === "/surveys") return P.surveys(route)
  if (p === "/records") return P.records(route)
  if (p === "/attachments") return P.attachments(route)
  if (p === "/m/daily-log") return P.dailyLog(route)
  if (p === "/m/isp") return P.isp(route)
  if (M.MP[p]) return P.m(route, M.MP[p])
  location.replace("#/")
  return P.schedule({ path: "/", query: {} })
}

/* ───── 공통 동작 ───── */
Demo.on("navGroup", function (d) { S.open[d.key] = !S.open[d.key]; Demo.update() })
Demo.on("mobileNav", function () { S.mobileNav = true; Demo.update() })
Demo.on("mobileNavClose", function () { S.mobileNav = false; Demo.update() })
Demo.on("modalClose", function () { M.closeModal() })
Demo.on("popClose", function () { S.pop = null; Demo.update() })
Demo.on("fullscreen", function () {
  try {
    if (document.fullscreenElement) document.exitFullscreen()
    else document.documentElement.requestFullscreen().catch(function () { Demo.toast("이 브라우저에서는 전체화면을 쓸 수 없습니다") })
  } catch (e) { Demo.toast("이 브라우저에서는 전체화면을 쓸 수 없습니다") }
})
Demo.on("theme", function () {
  S.dark = !S.dark
  document.documentElement.classList.toggle("dark", S.dark)
  try { localStorage.setItem("mi-theme", S.dark ? "dark" : "light") } catch (e) { }
  Demo.update()
})
Demo.on("bell", function (d, el) {
  var docs = M.DATA.DOCS.filter(M.isMyTurn).length, lv = M.DATA.LEAVES.filter(function (l) { return l.status === "승인대기" }).length
  var html = '<p class="px-2 py-1.5 text-xs font-medium text-muted-foreground">알림</p>' +
    (docs ? M.popItem("결재할 문서 " + docs + "건", "file-check", "go", ' data-to="/documents?box=approve"') : "") +
    (lv ? M.popItem("휴가 승인 대기 " + lv + "건", "plane", "go", ' data-to="/leave?view=approve"') : "") +
    (!docs && !lv ? '<p class="px-2 py-2 text-sm text-muted-foreground">새 알림이 없습니다.</p>' : "")
  M.openPop(el, html, true)
})
Demo.on("userMenu", function (d, el) {
  M.openPop(el, '<div class="px-2 py-1.5"><p class="text-sm font-semibold">관리자</p><p class="text-xs text-muted-foreground">' + M.ME.dept + " · 시스템관리자</p></div>" +
    M.popItem("내 연차 현황", "plane", "go", ' data-to="/leave"') + M.popItem("시스템 설정", "settings", "go", ' data-to="/users"') + M.popItem("로그아웃", "log-out", "logout"), true)
})
Demo.on("go", function (d) { S.pop = null; Demo.go(d.to); Demo.update() })
Demo.on("logout", function () { S.pop = null; Demo.update(); Demo.toast("체험판에서는 로그아웃할 수 없습니다") })
Demo.on("excel", function () { Demo.toast("체험판에서는 엑셀 내려받기를 지원하지 않습니다") })
Demo.on("page", function (d) { U(d.key).page = Math.max(1, +d.p); Demo.update(); window.scrollTo(0, 0) })
Demo.on("pageSize", function (v, el) { var u = U(el.getAttribute("data-key")); u.size = +v; u.page = 1; Demo.update() })
Demo.on("filter", function (v, el) { var u = U(el.getAttribute("data-key")); u.f[el.getAttribute("data-field")] = v; u.page = 1; Demo.update() })
Demo.on("qField", function (v, el) { var u = U(el.getAttribute("data-key")); u.qf = v; Demo.update() })
Demo.on("sort", function (v, el) { var u = U(el.getAttribute("data-key")); u.sort = +v; u.page = 1; Demo.update() })
Demo.on("search", function (v, el) { var u = U(el.getAttribute("data-key")); u.q = (v.q || "").trim(); u.page = 1; Demo.update(); if (u.q) Demo.toast("'" + u.q + "' 검색 결과") })
document.addEventListener("keydown", function (e) { if (e.key === "Escape" && (S.modal || S.pop || S.mobileNav)) { S.modal = null; S.pop = null; S.mobileNav = false; Demo.update() } })

try { if (localStorage.getItem("mi-theme") === "dark") { S.dark = true; document.documentElement.classList.add("dark") } } catch (e) { }
Demo.mount(render)
Demo.banner()
})()
