import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { DemoApp } from "@/components/demo/demo-app"
import { cases } from "@/lib/cases-data"
import { demos } from "@/lib/demos"

export function generateStaticParams() {
  return Object.keys(demos).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = cases.find((c) => c.slug === slug)
  if (!item || !demos[slug]) return {}
  const title = `${item.title} 체험판 | 와이넥스 YNEX`
  const description = `와이넥스가 만든 ${item.title}를 가상 데이터로 직접 눌러 보는 체험판. ${item.description}`
  return {
    title,
    description,
    alternates: { canonical: `/portfolio/demo/${slug}` },
    openGraph: { title, description, url: `/portfolio/demo/${slug}`, images: ["/og.png"] },
  }
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  // 실제 화면 체험판이 생긴 사례는 그쪽으로 보낸다
  const item = cases.find((c) => c.slug === slug)
  if (item?.demoUrl) redirect(item.demoUrl)
  if (!demos[slug]) notFound()
  return <DemoApp slug={slug} />
}
