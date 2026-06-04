// JSON-LD를 <script type="application/ld+json"> 으로 출력하는 서버 컴포넌트
// 서버에서 렌더링되어 초기 HTML에 포함 → 크롤러가 즉시 인식
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // 데이터는 모두 내부 정적 값이라 XSS 위험 없음. < 만 이스케이프해 스크립트 조기 종료 방지
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  )
}
