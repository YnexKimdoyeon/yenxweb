"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingKakao() {
  return (
    <motion.a
      href="https://open.kakao.com/o/sgQ0uyxi"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#FEE500] shadow-lg transition-shadow hover:shadow-xl"
      aria-label="카카오톡 문의하기"
    >
      <MessageCircle className="h-7 w-7 text-[#3C1E1E]" />
    </motion.a>
  )
}
