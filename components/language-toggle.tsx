"use client"

import React, { useState, useRef, useEffect } from "react"
import { Globe, ChevronDown, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Language } from "@/data/translations"
import { motion, AnimatePresence } from "framer-motion"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const options: { code: Language; label: string; shortLabel: string }[] = [
    { code: "id", label: "Bahasa Indonesia", shortLabel: "ID" },
    { code: "en", label: "English", shortLabel: "EN" },
  ]

  const currentOption = options.find((o) => o.code === language) || options[0]

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-border bg-surface text-foreground text-xs font-mono hover:border-primary transition-colors shadow-xs"
        aria-label="Pilih Bahasa / Select Language"
        title="Ganti Bahasa / Switch Language"
      >
        <Globe className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="font-semibold uppercase tracking-wider text-[11px]">
          {currentOption.shortLabel}
        </span>
        <ChevronDown className="w-3 h-3 opacity-60" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-44 rounded-xl border border-border bg-card p-1.5 shadow-xl z-50 backdrop-blur-xl"
          >
            <div className="px-2.5 py-1 mb-1 border-b border-border text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              Language / Bahasa
            </div>
            <div className="space-y-0.5">
              {options.map((opt) => {
                const isActive = opt.code === language
                return (
                  <button
                    key={opt.code}
                    onClick={() => {
                      setLanguage(opt.code)
                      setIsOpen(false)
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-colors text-left ${
                      isActive
                        ? "bg-surface-secondary text-primary font-semibold border border-primary/20"
                        : "text-foreground/80 hover:bg-surface hover:text-foreground"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-primary">{opt.shortLabel}</span>
                      <span className="font-sans">{opt.label}</span>
                    </span>
                    {isActive && <Check className="w-3.5 h-3.5 text-primary shrink-0" />}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
