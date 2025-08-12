"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Brain, Globe, Sun, Moon, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useActiveSection } from "@/hooks/use-active-section"
import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "next-themes"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([])
  const activeSection = useActiveSection()
  const scrollProgress = useScrollProgress()
  const { t, language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()

  const navigationItems = [
    {
      name: "Beranda",
      href: "#home",
      id: "home",
    },
    {
      name: "Profil",
      dropdown: [
        { name: "Tentang", href: "#about", id: "about" },
        { name: "Prestasi", href: "#achievements", id: "achievements" },
        { name: "Pengalaman", href: "#experience", id: "experience" },
        { name: "Organisasi", href: "#organizations", id: "organizations" },
        { name: "Sertifikasi", href: "#certifications", id: "certifications" },
      ],
    },
    {
      name: "Proyek & Keahlian",
      dropdown: [
        { name: "Keahlian", href: "#skills", id: "skills" },
        { name: "Proyek", href: "#projects", id: "projects" },
      ],
    },
    {
      name: "Kontak",
      href: "#contact",
      id: "contact",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    setOpenDropdowns([])
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const toggleMobileDropdown = (itemName: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(itemName) ? prev.filter((name) => name !== itemName) : [...prev, itemName],
    )
  }

  const isActiveLink = (item: any) => {
    if (item.id) return activeSection === item.id
    if (item.dropdown) {
      return item.dropdown.some((subItem: any) => activeSection === subItem.id)
    }
    return false
  }

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/90 dark:bg-gray-900/90 backdrop-blur-2xl shadow-2xl border-b border-gray-700/30 dark:border-gray-700/30"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 origin-left shadow-lg"
        style={{ width: `${scrollProgress}%` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.1 }}
      />

      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="#home"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 rounded-xl transition-all duration-300"
            onClick={() => handleLinkClick("#home")}
          >
            <motion.div
              className="relative p-3 bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-500 rounded-2xl shadow-xl"
              whileHover={{
                scale: 1.1,
                rotate: 360,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Brain className="w-7 h-7 text-white drop-shadow-lg" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
              Muhammad Aldi Alfatih
            </span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-1">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={item.name}>
                  {item.dropdown ? (
                    <>
                      <NavigationMenuTrigger
                        className={`px-6 py-3 text-sm font-medium transition-all duration-400 rounded-xl hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm ${
                          isActiveLink(item) ? "text-cyan-400 bg-white/10" : "text-white/90 hover:bg-white/10"
                        }`}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <motion.div
                          className="w-72 p-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-blue-100/50 dark:border-blue-900/50"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <NavigationMenuLink key={subItem.name} asChild>
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                              >
                                <Link
                                  href={subItem.href}
                                  onClick={(e) => {
                                    e.preventDefault()
                                    handleLinkClick(subItem.href)
                                  }}
                                  className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-md ${
                                    activeSection === subItem.id
                                      ? "text-cyan-600 dark:text-cyan-400 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 shadow-lg"
                                      : "text-gray-700 dark:text-gray-300"
                                  }`}
                                >
                                  {subItem.name}
                                  {activeSection === subItem.id && (
                                    <motion.div
                                      className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 rounded-full shadow-sm"
                                      initial={{ width: 0 }}
                                      animate={{ width: "100%" }}
                                      transition={{ duration: 0.4 }}
                                    />
                                  )}
                                </Link>
                              </motion.div>
                            </NavigationMenuLink>
                          ))}
                        </motion.div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={(e) => {
                        e.preventDefault()
                        handleLinkClick(item.href!)
                      }}
                      className={`relative px-6 py-3 text-sm font-medium transition-all duration-400 rounded-xl hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm ${
                        activeSection === item.id ? "text-cyan-400" : "text-white/90 hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                      {activeSection === item.id && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-sm"
                          initial={{ width: 0 }}
                          animate={{ width: "80%" }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2">
            <motion.button
              onClick={() => setLanguage(language === "id" ? "en" : "id")}
              className="p-3 text-white/80 hover:text-cyan-400 transition-all duration-300 rounded-xl hover:bg-white/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 text-white/80 hover:text-cyan-400 transition-all duration-300 rounded-xl hover:bg-white/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.button
              className="lg:hidden p-3 text-white/80 hover:text-cyan-400 transition-all duration-300 rounded-xl hover:bg-white/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 backdrop-blur-sm"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-t border-blue-100/30 dark:border-blue-900/30 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="container mx-auto px-6 py-6 space-y-2">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="border-b border-gray-100/50 dark:border-gray-800/50 last:border-b-0 pb-2 last:pb-0"
                >
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className={`w-full flex items-center justify-between py-3 px-4 text-base font-semibold transition-all duration-300 rounded-xl ${
                          isActiveLink(item)
                            ? "text-cyan-600 dark:text-cyan-400 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 shadow-lg"
                            : "text-gray-900 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
                        }`}
                      >
                        {item.name}
                        <motion.div
                          animate={{ rotate: openDropdowns.includes(item.name) ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {openDropdowns.includes(item.name) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-4 space-y-1 overflow-hidden"
                          >
                            {item.dropdown.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                              >
                                <Link
                                  href={subItem.href}
                                  onClick={(e) => {
                                    e.preventDefault()
                                    handleLinkClick(subItem.href)
                                  }}
                                  className={`block py-3 px-4 text-sm font-medium transition-all duration-300 rounded-lg ${
                                    activeSection === subItem.id
                                      ? "text-cyan-600 dark:text-cyan-400 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 shadow-md"
                                      : "text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-blue-50/30 dark:hover:bg-blue-900/10"
                                  }`}
                                >
                                  {subItem.name}
                                  {activeSection === subItem.id && (
                                    <motion.div
                                      className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 rounded-full"
                                      initial={{ width: 0 }}
                                      animate={{ width: "100%" }}
                                      transition={{ duration: 0.4 }}
                                    />
                                  )}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={(e) => {
                        e.preventDefault()
                        handleLinkClick(item.href!)
                      }}
                      className={`block py-3 px-4 text-base font-semibold transition-all duration-300 rounded-xl ${
                        activeSection === item.id
                          ? "text-cyan-600 dark:text-cyan-400 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 shadow-lg"
                          : "text-gray-900 dark:text-gray-100 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
                      }`}
                    >
                      {item.name}
                      {activeSection === item.id && (
                        <motion.div
                          className="h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
