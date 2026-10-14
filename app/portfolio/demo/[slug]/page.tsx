import { notFound, redirect } from "next/navigation"
import { cases } from "@/lib/cases-data"

// 예전 공통 틀 체험판 주소: 실제 화면 체험판(public/demos)으로 넘겨준다
export function generateStaticParams() {
  return cases.filter((c) => c.demoUrl).map((c) => ({ slug: c.slug }))
}

export default async function DemoRedirectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = cases.find((c) => c.slug === slug)
  if (!item?.demoUrl) notFound()
  redirect(item.demoUrl)
}
