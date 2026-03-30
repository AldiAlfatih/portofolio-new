"use client"

import { motion } from "framer-motion"
import { Terminal } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 relative border-t border-terminal-text/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Terminal className="w-5 h-5 text-python-light" />
            <span className="text-xl font-bold text-terminal-text">
              Muhammad Aldi Alfatih
            </span>
          </div>

          <p className="text-terminal-text/40 text-sm flex items-center justify-center space-x-1">
            <span>© {currentYear} BigBoss</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
