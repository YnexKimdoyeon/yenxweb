import type { CaseItem } from "@/lib/cases-data"

// "₩5,000,000" → "500만 원"
export function shortWon(cost: string) {
  const n = Number(cost.replace(/[^\d]/g, ""))
  if (!n || n % 10000 !== 0) return cost
  return `${(n / 10000).toLocaleString("ko-KR")}만 원`
}

// 사례 수치 띠: 업무 효율 · (개발 금액: 포트폴리오에서만) · 소요 기간 (홈 도입사례, 포트폴리오 상세 공용)
export function CaseStats({
  item,
  color,
  size = "md",
  className = "",
  showCost = false,
}: {
  item: CaseItem
  color: string
  size?: "md" | "lg"
  className?: string
  showCost?: boolean
}) {
  const value = size === "lg" ? "text-2xl sm:text-[1.75rem]" : "text-xl"
  const cells: [string, React.ReactNode, boolean][] = [
    ["업무 효율", <>{item.improvement}<span className="ml-0.5 text-[0.7em]">↑</span></>, true],
    ...(showCost ? [["개발 금액", shortWon(item.cost), false] as [string, React.ReactNode, boolean]] : []),
    ["소요 기간", item.duration, false],
  ]
  return (
    <dl className={`grid ${showCost ? "grid-cols-3" : "grid-cols-2"} divide-x divide-border rounded-2xl border border-border bg-card ${className}`}>
      {cells.map(([label, v, accent]) => (
        <div key={label} className={size === "lg" ? "px-4 py-4 sm:px-5" : "px-4 py-3"}>
          <dt className="text-xs font-medium text-muted-foreground">{label}</dt>
          <dd
            className={`mt-1 whitespace-nowrap font-bold tracking-tight tabular-nums text-foreground ${value}`}
            style={accent ? { color } : undefined}
          >
            {v}
          </dd>
        </div>
      ))}
    </dl>
  )
}
