import type { MetadataRoute } from 'next'

// 생성형 AI·검색 AI 크롤러를 명시적으로 허용 → 답변에 우리 사이트가 인용되도록
const aiCrawlers = [
  'GPTBot', // OpenAI 학습/색인
  'OAI-SearchBot', // ChatGPT 검색
  'ChatGPT-User', // ChatGPT 실시간 열람
  'ClaudeBot', // Anthropic Claude
  'anthropic-ai',
  'Claude-Web',
  'PerplexityBot', // Perplexity 색인
  'Perplexity-User', // Perplexity 실시간 열람
  'Google-Extended', // Gemini / Google AI
  'Applebot-Extended', // Apple Intelligence
  'Amazonbot',
  'cohere-ai',
  'CCBot', // Common Crawl (다수 LLM 학습 원천)
  'Bytespider',
  'Meta-ExternalAgent',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiCrawlers.map((ua) => ({ userAgent: ua, allow: '/' })),
    ],
    sitemap: 'https://ynex.kr/sitemap.xml',
    host: 'https://ynex.kr',
  }
}
