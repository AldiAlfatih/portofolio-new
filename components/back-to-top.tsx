"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full border border-border bg-card text-foreground shadow-xl hover:border-interactive-hover hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Kembali ke atas"
          title="Kembali ke atas"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
