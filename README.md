# YNEX (주)와이넥스 — 랜딩 웹사이트

현장 방문형 ERP·업무 자동화 개발 서비스 소개 랜딩 페이지. Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion.

## 실행 방법

```bash
pnpm install        # 의존성 설치
pnpm dev            # 개발 서버 (http://localhost:3000)
pnpm build          # 프로덕션 빌드
pnpm start          # 프로덕션 서버
```

> ⚠️ `pnpm install` 시 `sharp` 빌드 스크립트 승인 안내가 뜨면 `pnpm approve-builds`로 한 번 승인하거나, 빌드는 `./node_modules/.bin/next build`로 직접 실행하면 됩니다.

## 구조

- `app/` — 페이지(`page.tsx`), 레이아웃, 서비스 상세(`services/[slug]`), sitemap/robots, 전역 CSS
- `components/` — 섹션 컴포넌트(hero, problem, why, process, services, cases, trust, testimonials, faq, cta, footer, navigation, contact-form, floating-kakao)
- `components/reviews-data.ts` — 크몽 실제 후기 데이터
- `lib/services-data.ts` — 서비스 상세/가격 데이터 (**가격·작업일·수정 횟수는 크몽 실제 값 — 임의 수정 금지**)
- `public/portfolio/` — 도입사례 스크린샷(목업 데이터)

## 브랜드

- Primary 네이비 `#48589E`, Accent 딥네이비 `#2E3A6B`, 별점/카카오 골드·옐로우
- 폰트 Pretendard, 본문 `word-break: keep-all`

## 현장 방문 신청 폼 (중요)

- `contact-form.tsx` → **FormSubmit** 릴레이로 `ceo@ynex.kr` 에 메일 발송
- **최초 1회 활성화 필요**: 폼을 처음 제출하면 ceo@ynex.kr 로 확인 메일이 오며, 링크 클릭 시 이후 신청이 정상 수신됨
- 자체 도메인 메일(Resend/SMTP)로 바꾸려면 `contact-form.tsx`의 `ENDPOINT`만 교체

## 외부 링크

- 카카오톡 상담: `https://open.kakao.com/o/sgQ0uyxi`
- 문의 메일: `ceo@ynex.kr`
