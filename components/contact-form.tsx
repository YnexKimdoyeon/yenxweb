"use client"

import { useState, type FormEvent } from "react"
import { Check, Loader2, MessageCircle } from "lucide-react"
import { trackEvent } from "@/lib/gtag"

const KAKAO_URL = "https://open.kakao.com/o/sgQ0uyxi"

// FormSubmit relay → ceo@ynex.kr 로 메일 발송.
// 최초 1회 제출 시 ceo@ynex.kr 로 활성화 확인 메일이 가며, 링크를 눌러야 이후 메일이 수신됩니다.
const ENDPOINT = "https://formsubmit.co/ajax/ceo@ynex.kr"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  )

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
      trackEvent("generate_lead", { method: "contact_form" })
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
      <input type="hidden" name="_subject" value="[와이넥스] 현장 방문 신청" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

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
          name="문의내용"
          rows={4}
          placeholder="어떤 업무가 번거로우신지, 자동화하고 싶은 부분을 편하게 적어주세요."
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
            "현장 방문 신청"
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
