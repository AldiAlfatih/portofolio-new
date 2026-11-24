"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  ChevronDown,
  Search,
  User,
  Briefcase,
  Trophy,
  Award,
  Users,
  Cpu,
  FolderGit2,
} from "lucide-react"
import ThemeSwitcher from "@/components/theme-switcher"
import LanguageToggle from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"
import { useActiveSection } from "@/hooks/use-active-section"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false)
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false)
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false)
  const activeSection = useActiveSection()
  const { dict } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    setProfileDropdownOpen(false)
    setProjectsDropdownOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const triggerCommandPalette = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "k",
        ctrlKey: true,
        bubbles: true,
      })
    )
  }

  const profileMenuItems = [
    { name: dict.nav.about, href: "#about", id: "about", icon: User },
    { name: dict.nav.achievements, href: "#achievements", id: "achievements", icon: Trophy },
    { name: dict.nav.experience, href: "#experience", id: "experience", icon: Briefcase },
    { name: dict.nav.organizations, href: "#organizations", id: "organizations", icon: Users },
    { name: dict.nav.certifications, href: "#certifications", id: "certifications", icon: Award },
  ]

  const projectMenuItems = [
    { name: dict.nav.skills, href: "#skills", id: "skills", icon: Cpu },
    { name: dict.nav.projects, href: "#projects", id: "projects", icon: FolderGit2 },
  ]

  const isProfileActive = profileMenuItems.some((item) => activeSection === item.id)
  const isProjectsActive = projectMenuItems.some((item) => activeSection === item.id)

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navbar backdrop-blur-md border-b border-border shadow-xs py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Brand Personal Wordmark without code placeholder */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick("#home")
          }}
          className="flex items-center gap-2.5 group"
          aria-label="Muhammad Aldi Alfatih Portfolio"
        >
          <div className="w-9 h-9 rounded-xl border border-border bg-card flex items-center justify-center font-sans font-black text-xs text-foreground group-hover:border-primary transition-colors shadow-xs">
            <span className="text-primary tracking-tight">AA</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm text-foreground tracking-tight group-hover:text-primary transition-colors font-sans">
              ALDI ALFATIH
            </span>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
              S.Kom • AI & Software
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 font-sans text-xs">
          {/* Home */}
          <button
            onClick={() => handleLinkClick("#home")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeSection === "home" || !activeSection
                ? "text-primary bg-surface-secondary border border-border/80"
                : "text-foreground/80 hover:text-foreground hover:bg-surface-secondary/60"
            }`}
          >
            {dict.nav.home}
          </button>

          {/* Profile Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProfileDropdownOpen(true)}
            onMouseLeave={() => setProfileDropdownOpen(false)}
          >
            <button
              onClick={() => handleLinkClick("#about")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition-colors ${
                isProfileActive
                  ? "text-primary bg-surface-secondary border border-border/80"
                  : "text-foreground/80 hover:text-foreground hover:bg-surface-secondary/60"
              }`}
            >
              {dict.nav.profile}
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            <AnimatePresence>
              {profileDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 mt-1 w-60 rounded-xl border border-border bg-card p-1.5 shadow-xl z-50 backdrop-blur-xl"
                >
                  {profileMenuItems.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleLinkClick(sub.href)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors text-left ${
                        activeSection === sub.id
                          ? "bg-surface-secondary text-primary font-semibold"
                          : "text-foreground/80 hover:text-foreground hover:bg-surface-secondary"
                      }`}
                    >
                      <sub.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{sub.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Projects & Skills Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProjectsDropdownOpen(true)}
            onMouseLeave={() => setProjectsDropdownOpen(false)}
          >
            <button
              onClick={() => handleLinkClick("#projects")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition-colors ${
                isProjectsActive
                  ? "text-primary bg-surface-secondary border border-border/80"
                  : "text-foreground/80 hover:text-foreground hover:bg-surface-secondary/60"
              }`}
            >
              {dict.nav.projectsAndSkills}
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            <AnimatePresence>
              {projectsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 mt-1 w-60 rounded-xl border border-border bg-card p-1.5 shadow-xl z-50 backdrop-blur-xl"
                >
                  {projectMenuItems.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleLinkClick(sub.href)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors text-left ${
                        activeSection === sub.id
                          ? "bg-surface-secondary text-primary font-semibold"
                          : "text-foreground/80 hover:text-foreground hover:bg-surface-secondary"
                      }`}
                    >
                      <sub.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{sub.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact */}
          <button
            onClick={() => handleLinkClick("#contact")}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeSection === "contact"
                ? "text-primary bg-surface-secondary border border-border/80"
                : "text-foreground/80 hover:text-foreground hover:bg-surface-secondary/60"
            }`}
          >
            {dict.nav.contact}
          </button>
        </nav>

        {/* Right Actions: Command Palette Hint, Language Toggle & Theme Switcher */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Command Palette Trigger */}
          <button
            onClick={triggerCommandPalette}
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-border bg-surface text-xs text-muted-foreground hover:text-foreground hover:border-primary transition-colors font-mono"
            title={dict.nav.commandPalette}
          >
            <Search className="w-3.5 h-3.5 text-primary" />
            <span className="hidden md:inline text-[11px]">{dict.nav.search}</span>
            <kbd className="px-1.5 py-0.5 rounded border border-border bg-surface-secondary text-[10px]">
              Ctrl K
            </kbd>
          </button>

          {/* Bilingual Language Toggle */}
          <LanguageToggle />

          {/* 4-Theme Switcher */}
          <ThemeSwitcher />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg border border-border bg-card text-foreground hover:border-primary transition-colors"
            aria-label="Menu navigasi mobile"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-border bg-card/98 backdrop-blur-2xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              <button
                onClick={() => handleLinkClick("#home")}
                className="w-full flex items-center justify-between p-2.5 rounded-lg text-sm text-foreground/90 hover:bg-surface-secondary"
              >
                <span>{dict.nav.home}</span>
                <span className="text-[10px] font-mono text-muted-foreground">#home</span>
              </button>

              {/* Mobile Accordion: Profil */}
              <div className="border border-border/60 rounded-xl overflow-hidden bg-surface-secondary/40">
                <button
                  onClick={() => setMobileProfileOpen(!mobileProfileOpen)}
                  className="w-full flex items-center justify-between p-2.5 text-sm font-medium text-foreground"
                >
                  <span>{dict.nav.profile}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileProfileOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileProfileOpen && (
                  <div className="p-2 pt-0 space-y-1">
                    {profileMenuItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleLinkClick(sub.href)}
                        className="w-full flex items-center gap-2.5 p-2 rounded-lg text-xs text-foreground/80 hover:bg-surface"
                      >
                        <sub.icon className="w-3.5 h-3.5 text-primary" />
                        <span>{sub.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Accordion: Proyek & Keahlian */}
              <div className="border border-border/60 rounded-xl overflow-hidden bg-surface-secondary/40">
                <button
                  onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                  className="w-full flex items-center justify-between p-2.5 text-sm font-medium text-foreground"
                >
                  <span>{dict.nav.projectsAndSkills}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileProjectsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileProjectsOpen && (
                  <div className="p-2 pt-0 space-y-1">
                    {projectMenuItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleLinkClick(sub.href)}
                        className="w-full flex items-center gap-2.5 p-2 rounded-lg text-xs text-foreground/80 hover:bg-surface"
                      >
                        <sub.icon className="w-3.5 h-3.5 text-primary" />
                        <span>{sub.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleLinkClick("#contact")}
                className="w-full flex items-center justify-between p-2.5 rounded-lg text-sm text-foreground/90 hover:bg-surface-secondary"
              >
                <span>{dict.nav.contact}</span>
                <span className="text-[10px] font-mono text-muted-foreground">#contact</span>
              </button>

              {/* Mobile Quick Action for Command Palette */}
              <div className="pt-2 border-t border-border">
                <button
                  onClick={() => {
                    setIsOpen(false)
                    triggerCommandPalette()
                  }}
                  className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl border border-border bg-surface text-xs font-mono text-foreground"
                >
                  <Search className="w-4 h-4 text-primary" />
                  <span>{dict.nav.commandPalette}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
