"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { navGroups, type NavGroup } from "@/lib/nav-data"

// 지금 주소가 어느 메뉴 그룹에 속하는지
function isActive(group: NavGroup, pathname: string) {
  if (group.label === "키오스크") return pathname.startsWith("/kiosk") || pathname === "/portfolio/kiosk"
  if (group.label === "ERP·업무자동화")
    return pathname.startsWith("/services") || pathname.startsWith("/portfolio/demo")
  if (group.label === "고객지원") return pathname === "/contact" || pathname.startsWith("/support")
  return pathname.startsWith(group.href)
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const pathname = usePathname() ?? "/"

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  })

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-primary"
      />
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="와이넥스 홈">
            <Image
              src="/logo-mark.png"
              alt=""
              width={758}
              height={759}
              priority
              className="h-9 w-9 lg:h-10 lg:w-10"
            />
            <span className="text-xl font-bold text-primary lg:text-2xl">
              (주)와이넥스
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navGroups.map((group) => {
              const active = isActive(group, pathname)
              const open = openGroup === group.label
              if (group.items.length === 0)
                return (
                  <Link
                    key={group.label}
                    href={group.href}
                    className={`relative py-2 text-base font-semibold tracking-[-0.01em] transition-colors ${
                      active ? "text-primary" : "text-foreground/90 hover:text-primary"
                    }`}
                  >
                    {group.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary"
                      />
                    )}
                  </Link>
                )
              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setOpenGroup(group.label)}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <Link
                    href={group.href}
                    aria-expanded={open}
                    onFocus={() => setOpenGroup(group.label)}
                    className={`relative inline-flex items-center gap-1 py-2 text-base font-semibold tracking-[-0.01em] transition-colors ${
                      active ? "text-primary" : "text-foreground/90 hover:text-primary"
                    }`}
                  >
                    {group.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-5 h-0.5 rounded-full bg-primary"
                      />
                    )}
                  </Link>
                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3"
                      >
                        <div className="rounded-xl border border-border bg-background p-2 shadow-xl">
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setOpenGroup(null)}
                              className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
                            >
                              <span className="block text-sm font-semibold text-foreground">{item.label}</span>
                              {item.desc && (
                                <span className="block text-xs text-muted-foreground">{item.desc}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
            {/* 프로그램샵(ynexshop.kr): 완성형 프로그램 구독 스토어 */}
            <a
              href="https://ynexshop.kr"
              target="_blank"
              rel="noopener"
              className="text-base font-semibold tracking-[-0.01em] text-foreground/90 transition-colors hover:text-primary"
            >
              프로그램샵
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-[15px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              현장 방문 신청
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-foreground lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-background lg:hidden"
          >
            <div className="max-h-[calc(100dvh-4rem)] space-y-1 overflow-y-auto px-4 py-4">
              {navGroups.map((group) =>
                group.items.length === 0 ? (
                  <Link
                    key={group.label}
                    href={group.href}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {group.label}
                  </Link>
                ) : (
                <div key={group.label} className="pb-2">
                  <p className="px-3 pb-1 pt-2 text-xs font-semibold text-muted-foreground">{group.label}</p>
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-muted"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                ),
              )}
              <a
                href="https://ynexshop.kr"
                target="_blank"
                rel="noopener"
                className="block rounded-lg px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                프로그램샵
              </a>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full rounded-lg bg-primary px-3 py-2.5 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  현장 방문 신청
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
