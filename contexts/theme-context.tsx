"use client"

import React, { createContext, useContext, useEffect, useState, useCallback } from "react"
import { DEFAULT_THEME, THEMES, ThemeDefinition, ThemeMode, themeConfig } from "@/lib/theme-config"

interface ThemeContextType {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  currentThemeDef: ThemeDefinition
  themes: ThemeDefinition[]
  themeConfig: typeof themeConfig
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(DEFAULT_THEME)

  const applyThemeToDOM = useCallback((newTheme: ThemeMode) => {
    if (typeof document === "undefined") return
    const root = document.documentElement
    // Set data-theme attribute
    root.setAttribute("data-theme", newTheme)
    // Also update classList for any selector
    THEMES.forEach((t) => root.classList.remove(`theme-${t.id}`))
    root.classList.add(`theme-${newTheme}`)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as ThemeMode | null
    if (saved && THEMES.some((t) => t.id === saved)) {
      setThemeState(saved)
      applyThemeToDOM(saved)
    } else {
      applyThemeToDOM(DEFAULT_THEME)
    }
  }, [applyThemeToDOM])

  const setTheme = useCallback((newTheme: ThemeMode) => {
    setThemeState(newTheme)
    try {
      localStorage.setItem("portfolio-theme", newTheme)
    } catch {}
    applyThemeToDOM(newTheme)
  }, [applyThemeToDOM])

  const currentThemeDef = THEMES.find((t) => t.id === theme) || THEMES[1]

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentThemeDef, themes: THEMES, themeConfig }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}

export const usePortfolioTheme = useTheme
