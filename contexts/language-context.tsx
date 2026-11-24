"use client"

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react"
import { Language, TranslationDictionary, translations } from "@/data/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  dict: TranslationDictionary
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id")

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-lang") as Language | null
      if (saved && (saved === "id" || saved === "en")) {
        setLanguageState(saved)
        document.documentElement.lang = saved
      }
    } catch {}
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem("portfolio-lang", lang)
      document.documentElement.lang = lang
    } catch {}
  }, [])

  const dict = useMemo(() => translations[language], [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
