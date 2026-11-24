"use client"

import React, { useState, useRef, useEffect } from "react"
import { usePortfolioTheme } from "@/contexts/theme-context"
import { Check, Palette } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ThemeSwitcher() {
  const { theme, setTheme, themes, currentThemeDef } = usePortfolioTheme()
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

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-foreground text-xs font-mono transition-all duration-200 hover:border-interactive-hover shadow-sm"
        aria-label="Pilih tema tampilan"
        title="Ganti Tema Warna"
      >
        <span className="flex items-center gap-1.5">
          <span
            className="w-3 h-3 rounded-full border border-border shrink-0 shadow-xs"
            style={{ backgroundColor: currentThemeDef.previewAccent }}
          />
          <span className="hidden sm:inline-block font-medium">{currentThemeDef.name}</span>
        </span>
        <Palette className="w-3.5 h-3.5 opacity-70" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-64 rounded-xl border border-border bg-card p-2.5 shadow-2xl z-50 backdrop-blur-xl"
          >
            <div className="px-2 py-1 mb-2 border-b border-border text-[11px] font-mono uppercase tracking-wider text-muted-foreground flex justify-between items-center">
              <span>Color Themes</span>
              <span className="text-[10px] opacity-75">4 Presets</span>
            </div>

            <div className="space-y-1.5">
              {themes.map((t) => {
                const isActive = t.id === theme
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id)
                      setIsOpen(false)
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition-all ${
                      isActive
                        ? "bg-surface-secondary text-foreground font-semibold border border-interactive-hover"
                        : "hover:bg-surface text-foreground/80 hover:text-foreground border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {/* Swatch palette */}
                      <div className="flex -space-x-1 items-center">
                        {t.palette.map((color, idx) => (
                          <span
                            key={idx}
                            className="w-3.5 h-3.5 rounded-full border border-black/20 shadow-xs"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <div>
                        <div className="font-sans font-medium">{t.name}</div>
                        <div className="text-[10px] text-muted-foreground font-mono">{t.character}</div>
                      </div>
                    </div>

                    {isActive && <Check className="w-4 h-4 text-accent shrink-0" />}
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
