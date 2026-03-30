"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useLanguage } from "@/contexts/language-context"
import { useActiveSection } from "@/hooks/use-active-section"
import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Globe, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react"

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-terminal-bg border-b border-terminal-text/20 shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Scroll progress bar — solid python-light */}
      <div
        className="absolute top-0 left-0 h-1 bg-python-light origin-left"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="#home"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-python-blue/50 focus:ring-offset-2 rounded-xl transition-all duration-200"
            onClick={() => handleLinkClick("#home")}
          >
            <motion.div
              className="relative p-2 bg-terminal-bg border-2 border-terminal-text/30 rounded-2xl flex items-center justify-center"
              whileHover={{
                scale: 1.05,
                borderColor: "#0B60B0",
              }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/favicon_aldi_256_new.svg"
                alt="Aldi Alfatih"
                className="w-7 h-7 rounded-md object-cover"
              />
            </motion.div>
            <span className="text-2xl font-bold text-terminal-text">
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
                        className={`px-6 py-3 text-sm font-medium transition-colors duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-python-blue/50 ${
                          isActiveLink(item) ? "text-python-light bg-python-blue/10" : "text-terminal-text/80 hover:text-python-light hover:bg-python-blue/10"
                        }`}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <motion.div
                          className="w-72 p-6 bg-[#0a0a0a] border border-terminal-text/20 rounded-2xl shadow-2xl shadow-black/80"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
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
                                  className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-200 hover:bg-python-blue/10 hover:text-python-light ${
                                    activeSection === subItem.id
                                      ? "text-python-light bg-python-blue/10 border-l-2 border-python-light"
                                      : "text-terminal-text/70"
                                  }`}
                                >
                                  {subItem.name}
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
                      className={`relative px-6 py-3 text-sm font-medium transition-colors duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-python-blue/50 ${
                        activeSection === item.id ? "text-python-light" : "text-terminal-text/80 hover:text-python-light hover:bg-python-blue/10"
                      }`}
                    >
                      {item.name}
                      {activeSection === item.id && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-python-light rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "80%" }}
                          transition={{ duration: 0.3 }}
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
              className="p-3 text-terminal-text/70 hover:text-python-light transition-colors duration-200 rounded-xl hover:bg-python-blue/10 focus:outline-none focus:ring-2 focus:ring-python-blue/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 text-terminal-text/70 hover:text-python-light transition-colors duration-200 rounded-xl hover:bg-python-blue/10 focus:outline-none focus:ring-2 focus:ring-python-blue/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.button
              className="lg:hidden p-3 text-terminal-text/70 hover:text-python-light transition-colors duration-200 rounded-xl hover:bg-python-blue/10 focus:outline-none focus:ring-2 focus:ring-python-blue/50"
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
            className="lg:hidden bg-[#0a0a0a] border-t border-terminal-text/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-6 space-y-2">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="border-b border-terminal-text/10 last:border-b-0 pb-2 last:pb-0"
                >
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className={`w-full flex items-center justify-between py-3 px-4 text-base font-semibold transition-colors duration-200 rounded-xl ${
                          isActiveLink(item)
                            ? "text-python-light bg-python-blue/10"
                            : "text-terminal-text hover:text-python-light hover:bg-python-blue/10"
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
                                  className={`block py-3 px-4 text-sm font-medium transition-colors duration-200 rounded-lg ${
                                    activeSection === subItem.id
                                      ? "text-python-light bg-python-blue/10 border-l-2 border-python-light"
                                      : "text-terminal-text/60 hover:text-python-light hover:bg-python-blue/10"
                                  }`}
                                >
                                  {subItem.name}
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
                      className={`block py-3 px-4 text-base font-semibold transition-colors duration-200 rounded-xl ${
                        activeSection === item.id
                          ? "text-python-light bg-python-blue/10"
                          : "text-terminal-text hover:text-python-light hover:bg-python-blue/10"
                      }`}
                    >
                      {item.name}
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
