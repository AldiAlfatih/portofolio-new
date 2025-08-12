"use client"

import { motion } from "framer-motion"
import { Sun, Moon, Zap, Waves, TreePine, Sunset, Stars } from "lucide-react"
import { useTheme, themeConfig } from "@/contexts/theme-context"
import { AnimatePresence } from "framer-motion"

const themeIcons = {
  dark: Moon,
  light: Sun,
  cyberpunk: Zap,
  ocean: Waves,
  forest: TreePine,
  sunset: Sunset,
  midnight: Stars,
}

const themeColors = {
  dark: "text-blue-400",
  light: "text-yellow-400",
  cyberpunk: "text-fuchsia-400",
  ocean: "text-teal-400",
  forest: "text-emerald-400",
  sunset: "text-orange-400",
  midnight: "text-indigo-400",
}

export default function ThemeToggle() {
  const { theme, nextTheme } = useTheme()
  const Icon = themeIcons[theme]
  const colorClass = themeColors[theme]
  const themeName = themeConfig[theme].name

  return (
    <motion.button
      onClick={nextTheme}
      className="relative p-2 rounded-full bg-gray-800/50 dark:bg-gray-700/50 light:bg-white/50 cyberpunk:bg-black/50 ocean:bg-blue-900/50 forest:bg-green-900/50 sunset:bg-orange-900/50 midnight:bg-indigo-900/50 border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to next theme (current: ${themeName})`}
      title={`Current: ${themeName} - Click to cycle themes`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <Icon className={`w-5 h-5 ${colorClass}`} />

          {/* Theme indicator ring */}
          <motion.div
            className={`absolute inset-0 rounded-full border-2 ${colorClass.replace("text-", "border-")} opacity-0 group-hover:opacity-50`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Theme name tooltip */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50"
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {themeName}
      </motion.div>
    </motion.button>
  )
}
