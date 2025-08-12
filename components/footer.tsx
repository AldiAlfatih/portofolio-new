"use client"

import { motion } from "framer-motion"
import { Brain, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Brain className="w-6 h-6 text-cyan-400" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI.Engineer
            </span>
          </div>

          <p className="text-gray-500 text-sm flex items-center justify-center space-x-1">
            <span>© {currentYear} Muhammad Aldi Alfatih</span>
            {/* <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>dan teknologi AI terdepan.</span> */}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
