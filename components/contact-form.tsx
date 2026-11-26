"use client"

import { useEffect, useState, type FormEvent } from "react"
import { Check, Loader2, MessageCircle } from "lucide-react"
import { trackEvent } from "@/lib/gtag"
import { cases } from "@/lib/cases-data"
import { decodePlacement, describePlacement, encodePlacement, placedRows } from "@/components/kiosk-builder/data"

const KAKAO_URL = "https://open.kakao.com/o/sgQ0uyxi"

// FormSubmit relay → ceo@ynex.kr 로 메일 발송.
// 최초 1회 제출 시 ceo@ynex.kr 로 활성화 확인 메일이 가며, 링크를 눌러야 이후 메일이 수신됩니다.
const ENDPOINT = "https://formsubmit.co/ajax/ceo@ynex.kr"

export function ContactForm({
  subject = "[와이넥스] 현장 방문·견적 신청",
  submitLabel = "현장 방문 · 견적 신청",
  placeholder = "어떤 업무가 번거로우신지, 자동화하고 싶은 부분을 편하게 적어주세요.",
  method = "contact_form",
}: {
  subject?: string
  submitLabel?: string
  placeholder?: string
  method?: string
} = {}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  )
  // 체험판의 "이런 시스템 문의"로 들어오면 ?from=<사례 slug> 로 어떤 시스템을 보고 있었는지 넘어온다
  const [system, setSystem] = useState<string | null>(null)
  // 견적 문의를 한 곳으로 합쳐 분야만 고르게 함. 키오스크 페이지에서 오면 ?type=kiosk 로 미리 선택
  const [field, setField] = useState("ERP·업무자동화")
  // 키오스크 3D 조립에서 「이 구성으로 문의하기」로 오면 ?k=<구성>&use=<업무> 가 붙는다. 메일에 구성 설명과 다시 볼 링크를 넣는다
  const [kiosk, setKiosk] = useState<{ text: string; rows: ReturnType<typeof placedRows>; url: string; use: string | null } | null>(null)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const from = q.get("from")
    const item = from ? cases.find((c) => c.slug === from) : undefined
    if (item) setSystem(item.title)
    if (q.get("type") === "kiosk") setField("키오스크")
    const placed = decodePlacement(q.get("k"))
    if (placed) {
      setField("키오스크")
      setKiosk({
        text: describePlacement(placed),
        rows: placedRows(placed),
        url: `${window.location.origin}/kiosk?k=${encodeURIComponent(encodePlacement(placed))}${q.get("use") ? `&use=${encodeURIComponent(q.get("use")!)}` : ""}#3d`,
        use: q.get("use"),
      })
    }
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus("loading")
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
      if (!res.ok) throw new Error("failed")
      setStatus("success")
      // 현장 방문 신청 폼 제출 성공 = 핵심 전환 (GA4 추천 이벤트명)
      trackEvent("generate_lead", { method })
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center shadow-xl">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-7 w-7 text-primary" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">
          신청이 접수되었습니다
        </h3>
        <p className="text-muted-foreground">
          영업일 3일 이내에 담당 개발자가 직접 연락드립니다. 감사합니다.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          새 신청 작성하기
        </button>
      </div>
    )
  }

  const loading = status === "loading"

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 text-left shadow-xl sm:p-8"
    >
      {/* honeypot */}
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <input type="hidden" name="_subject" value={`${subject} · ${field}${system ? ` · ${system}` : ""}${kiosk ? " · 3D 구성 첨부" : ""}`} />
      <input type="hidden" name="문의분야" value={field} />
      {system && <input type="hidden" name="보고있던_시스템" value={system} />}
      {kiosk && (
        <>
          {kiosk.use && <input type="hidden" name="키오스크_업무" value={kiosk.use} />}
          <input type="hidden" name="키오스크_구성" value={kiosk.text} />
          {/* 붙은 자리만 한 줄씩: 자리_D2 = 바코드·QR 스캐너 (경사면 오른쪽) */}
          {kiosk.rows.map((r) => (
            <input key={r.code} type="hidden" name={`자리_${r.code}`} value={`${r.module} (${r.slot})`} />
          ))}
          <input type="hidden" name="키오스크_3D로_보기" value={kiosk.url} />
        </>
      )}

      {system && (
        <p className="mb-4 rounded-lg bg-primary/5 px-3.5 py-2.5 text-sm text-primary">
          보고 계셨던 시스템: <span className="font-semibold">{system}</span>
        </p>
      )}
      {kiosk && (
        <div className="mb-4 rounded-lg bg-primary/5 px-3.5 py-3 text-sm">
          <p className="mb-1 font-semibold text-primary">만드신 키오스크 구성{kiosk.use ? ` · ${kiosk.use}` : ""}</p>
          <ul className="space-y-0.5 text-foreground">
            {kiosk.rows.map((r) => (
              <li key={r.code}>
                <span className="mr-1.5 inline-block w-7 rounded bg-primary/10 text-center text-xs font-bold text-primary">{r.code}</span>
                {r.module}
                <span className="ml-1 text-xs text-muted-foreground">{r.slot}</span>
              </li>
            ))}
          </ul>
          <a href={kiosk.url} className="mt-1.5 inline-block text-xs font-medium text-primary underline underline-offset-2">
            3D로 다시 보기
          </a>
        </div>
      )}
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="mb-4">
        <p className="mb-1.5 text-sm font-medium text-foreground">문의 분야</p>
        <div className="grid grid-cols-3 gap-2">
          {["ERP·업무자동화", "키오스크", "기타"].map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setField(f)}
              className={`rounded-lg border px-2 py-2.5 text-sm font-semibold transition-colors ${
                field === f ? "border-primary bg-primary/10 text-primary" : "border-input text-foreground hover:border-primary/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="회사명" name="회사명" placeholder="(주)예시" />
        <Field label="담당자명" name="담당자명" placeholder="홍길동" required />
      </div>
      <div className="mt-4">
        <Field
          label="연락처"
          name="연락처"
          type="tel"
          placeholder="010-0000-0000"
          required
        />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          문의 내용
        </label>
        <textarea
          key={(system ?? "none") + (kiosk ? "k" : "")}
          name="문의내용"
          defaultValue={
            system
              ? `[체험판: ${system}] 이 시스템과 비슷하게 만들고 싶습니다.\n`
              : kiosk
                ? `3D로 만든 구성으로 키오스크를 만들고 싶습니다.\n어디에 쓸지: ${kiosk.use ?? ""}\n설치할 곳·대수: \n`
                : undefined
          }
          rows={4}
          placeholder={placeholder}
          className="w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="submit"
          disabled={loading}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-[15px] font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              전송 중…
            </>
          ) : (
            submitLabel
          )}
        </button>
        <a
          href={KAKAO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#FEE500] px-4 py-3.5 text-[15px] font-semibold text-[#3A1D1D] shadow-lg shadow-black/5 transition-all hover:bg-[#FFEB3B]"
        >
          <MessageCircle className="h-4 w-4" />
          카카오톡 문의
        </a>
      </div>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-destructive">
          전송에 실패했습니다. 잠시 후 다시 시도하거나 카카오톡으로 문의해 주세요.
        </p>
      )}
      <p className="mt-3 text-center text-xs text-muted-foreground">
        첫 방문·업무 분석은 무료입니다. 입력하신 정보는 상담 목적에만 사용됩니다.
      </p>
    </form>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-0.5 text-primary">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}
