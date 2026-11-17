import type { MetadataRoute } from 'next'
import { services } from '@/lib/services-data'

const SITE = 'https://ynex.kr'

// 체험판(/demos)은 noindex 라 넣지 않음. lastModified 는 빌드 시각이라 의미가 없어 뺌.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/automation`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/kiosk`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/portfolio`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/portfolio/kiosk`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/faq`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    ...services.map((s) => ({
      url: `${SITE}/services/${s.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
