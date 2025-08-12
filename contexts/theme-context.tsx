"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "cyberpunk" | "ocean" | "forest" | "sunset" | "midnight"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  nextTheme: () => void
}

const themes: Theme[] = ["dark", "light", "cyberpunk", "ocean", "forest", "sunset", "midnight"]

const themeConfig = {
  dark: {
    name: "Dark",
    background: "from-gray-900 via-purple-900 to-gray-900",
    colors: {
      primary: "cyan",
      secondary: "purple",
      accent: "pink",
    },
  },
  light: {
    name: "Light",
    background: "from-gray-50 via-blue-50 to-gray-50",
    colors: {
      primary: "blue",
      secondary: "indigo",
      accent: "purple",
    },
  },
  cyberpunk: {
    name: "Cyberpunk",
    background: "from-black via-purple-900 to-pink-900",
    colors: {
      primary: "fuchsia",
      secondary: "cyan",
      accent: "yellow",
    },
  },
  ocean: {
    name: "Ocean",
    background: "from-blue-900 via-teal-800 to-cyan-900",
    colors: {
      primary: "teal",
      secondary: "blue",
      accent: "cyan",
    },
  },
  forest: {
    name: "Forest",
    background: "from-green-900 via-emerald-800 to-teal-900",
    colors: {
      primary: "emerald",
      secondary: "green",
      accent: "lime",
    },
  },
  sunset: {
    name: "Sunset",
    background: "from-orange-900 via-red-800 to-pink-900",
    colors: {
      primary: "orange",
      secondary: "red",
      accent: "yellow",
    },
  },
  midnight: {
    name: "Midnight",
    background: "from-indigo-900 via-blue-900 to-purple-900",
    colors: {
      primary: "indigo",
      secondary: "blue",
      accent: "violet",
    },
  },
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme && themes.includes(savedTheme)) {
      setTheme(savedTheme)
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)

    // Remove all theme classes
    themes.forEach((t) => {
      document.documentElement.classList.remove(t)
    })

    // Add current theme class
    document.documentElement.classList.add(theme)

    // Set CSS custom properties for current theme
    const config = themeConfig[theme]
    document.documentElement.style.setProperty("--theme-background", config.background)
    document.documentElement.style.setProperty("--theme-primary", config.colors.primary)
    document.documentElement.style.setProperty("--theme-secondary", config.colors.secondary)
    document.documentElement.style.setProperty("--theme-accent", config.colors.accent)
  }, [theme])

  const nextTheme = () => {
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  return <ThemeContext.Provider value={{ theme, setTheme, nextTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export { themeConfig, themes }
