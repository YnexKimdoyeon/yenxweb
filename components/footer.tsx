"use client"

import Image from "next/image"
import Link from "next/link"

const quickLinks = [
  { label: "서비스", href: "/services" },
  { label: "포트폴리오", href: "/portfolio" },
  { label: "자주 묻는 질문", href: "/faq" },
  { label: "현장 방문 신청", href: "/#contact" },
]

const socialLinks = [
  { label: "블로그", href: "https://blog.naver.com/kims2369" },
  { label: "인스타그램", href: "#" },
  { label: "유튜브", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-[#0A1430] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left - Company Info */}
          <div>
            <Link href="/" className="mb-6 flex items-center gap-2.5" aria-label="와이넥스 홈">
              <Image
                src="/logo-mark.png"
                alt=""
                width={758}
                height={759}
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-white">YNEX</span>
              <span className="text-lg text-white/70">(주)와이넥스</span>
            </Link>
            <div className="space-y-2 text-sm text-white/55">
              <p>상호: 주식회사 와이넥스</p>
              <p>대표: 김도연</p>
              <p>주소: 충청남도 아산시 탕정면 이순신대로 442, 912호</p>
              <p>
                이메일:{" "}
                <a
                  href="mailto:ceo@ynex.kr"
                  className="transition-colors hover:text-white"
                >
                  ceo@ynex.kr
                </a>
              </p>
            </div>
          </div>

          {/* Right - Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
                바로가기
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
                SNS
              </h3>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/45 md:flex-row">
            <p>&copy; {new Date().getFullYear()} YNEX. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-white">
                개인정보처리방침
              </a>
              <a href="#" className="transition-colors hover:text-white">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
