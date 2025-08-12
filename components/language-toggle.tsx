"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Globe, ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-full bg-gray-800/50 dark:bg-gray-700/50 border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-offset-gray-900"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4 text-gray-400" />
        <span className="text-sm font-medium text-gray-300">{currentLanguage?.flag}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 bg-gray-800/95 dark:bg-gray-700/95 backdrop-blur-xl border border-gray-600/50 rounded-lg shadow-xl z-50"
          >
            <div className="py-2">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as "id" | "en")
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-700/50 dark:hover:bg-gray-600/50 transition-colors ${
                    language === lang.code ? "text-cyan-400 bg-cyan-500/10" : "text-gray-300"
                  }`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.1 }}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.name}</span>
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
