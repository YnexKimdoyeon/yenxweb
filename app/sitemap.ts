import type { MetadataRoute } from 'next'
import { services } from '@/lib/services-data'

const SITE = 'https://ynex.kr'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    {
      url: SITE,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...services.map((s) => ({
      url: `${SITE}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
