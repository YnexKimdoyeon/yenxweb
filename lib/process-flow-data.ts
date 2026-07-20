// 도입 프로세스 6단계 — 단일 출처
// 포트폴리오 프로세스 섹션(화면 표시)과 HowTo 구조화 데이터(SEO/GEO)가 공유
export interface ProcessStep {
  number: string
  title: string
  summary: string
  detail: string
}

export const processFlow: ProcessStep[] = [
  {
    number: "01",
    title: "문제인식",
    summary: "현장의 진짜 불편함을 찾아냅니다.",
    detail:
      "반복되는 수작업, 엑셀 이중 입력, 사람이 몰려서 생기는 병목까지 — 어디서 시간이 새고 있는지부터 정확히 짚어냅니다.",
  },
  {
    number: "02",
    title: "업무 분석",
    summary: "일이 흘러가는 순서를 뜯어봅니다.",
    detail:
      "누가, 언제, 무엇을 하는지 업무 흐름을 단계별로 정리합니다. 자동화할 지점과 그대로 두어도 되는 지점을 구분합니다.",
  },
  {
    number: "03",
    title: "모듈 설계",
    summary: "필요한 기능만 블록처럼 설계합니다.",
    detail:
      "ERP·물류·재고·크롤링 등 필요한 기능을 모듈로 나눠 설계합니다. 나중에 기능을 더하거나 빼기 쉽게 구조를 잡습니다.",
  },
  {
    number: "04",
    title: "화면 생성",
    summary: "직원이 바로 쓸 수 있는 화면을 만듭니다.",
    detail:
      "복잡한 매뉴얼 없이도 쓸 수 있도록, 실제 업무 순서 그대로 화면을 구성합니다. PC와 모바일 어디서나 동작합니다.",
  },
  {
    number: "05",
    title: "포인트 추출",
    summary: "효과가 큰 개선 포인트를 뽑아냅니다.",
    detail:
      "데이터가 쌓이면 어디를 더 손보면 좋은지 보입니다. 우선순위가 높은 자동화 포인트를 리포트로 정리해 드립니다.",
  },
  {
    number: "06",
    title: "성과 도출",
    summary: "줄어든 시간과 비용을 숫자로 확인합니다.",
    detail:
      "도입 전후를 비교해 업무 시간·오류·비용이 얼마나 줄었는지 실제 수치로 보여드립니다. 다음 개선의 기준이 됩니다.",
  },
]
