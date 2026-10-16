import type { CaseItem } from "@/lib/cases-data"

// 사례 수치 띠: 업무 효율 · 소요 기간 (홈 도입사례, 포트폴리오 상세 공용)
export function CaseStats({
  item,
  color,
  size = "md",
  className = "",
}: {
  item: CaseItem
  color: string
  size?: "md" | "lg"
  className?: string
}) {
  const value = size === "lg" ? "text-2xl sm:text-[1.75rem]" : "text-xl"
  const cells: [string, React.ReactNode, boolean][] = [
    ["업무 효율", <>{item.improvement}<span className="ml-0.5 text-[0.7em]">↑</span></>, true],
    ["소요 기간", item.duration, false],
  ]
  return (
    <dl className={`grid grid-cols-2 divide-x divide-border rounded-2xl border border-border bg-card ${className}`}>
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
