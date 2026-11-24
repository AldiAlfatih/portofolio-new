"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Home,
  User,
  Cpu,
  Briefcase,
  FolderGit2,
  Trophy,
  Award,
  Users,
  Mail,
  Copy,
  ExternalLink,
  Check,
  Download,
  X,
} from "lucide-react"
import { usePortfolioTheme } from "@/contexts/theme-context"
import { ThemeId } from "@/lib/theme-config"
import { projectsData } from "@/data/projects"
import { profileData } from "@/data/profile"
import { useLanguage } from "@/contexts/language-context"

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [copied, setCopied] = useState(false)
  const { theme, setTheme, themes } = usePortfolioTheme()
  const { dict, language } = useLanguage()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    setQuery("")
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      setIsOpen(false)
    }, 1200)
  }

  const navItems = [
    { label: dict.nav.home, icon: Home, id: "home" },
    { label: dict.nav.about, icon: User, id: "about" },
    { label: dict.nav.skills, icon: Cpu, id: "skills" },
    { label: dict.nav.experience, icon: Briefcase, id: "experience" },
    { label: dict.nav.projects, icon: FolderGit2, id: "projects" },
    { label: dict.nav.achievements, icon: Trophy, id: "achievements" },
    { label: dict.nav.certifications, icon: Award, id: "certifications" },
    { label: dict.nav.organizations, icon: Users, id: "organizations" },
    { label: dict.nav.contact, icon: Mail, id: "contact" },
  ]

  const filteredNav = navItems.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase())
  )

  const filteredProjects = projectsData.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  )

  const filteredThemes = themes.filter((t) =>
    t.name.toLowerCase().includes(query.toLowerCase())
  )

  const isEn = language === "en"

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-xl rounded-2xl border border-border bg-card text-card-foreground shadow-2xl overflow-hidden z-10"
            >
              {/* Search Bar */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder={
                    isEn
                      ? "Type a destination, project, action, or theme... (Esc to close)"
                      : "Ketik tujuan, proyek, perintah, atau tema... (Esc untuk tutup)"
                  }
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none font-sans"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-secondary"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable List */}
              <div className="max-h-96 overflow-y-auto p-2 space-y-4">
                {/* Navigation */}
                {filteredNav.length > 0 && (
                  <div>
                    <div className="px-3 py-1 text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                      {isEn ? "Page Navigation" : "Navigasi Halaman"}
                    </div>
                    <div className="space-y-0.5 mt-1">
                      {filteredNav.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-foreground/90 hover:text-foreground hover:bg-surface-secondary transition-colors text-left"
                        >
                          <span className="flex items-center gap-2.5">
                            <item.icon className="w-4 h-4 text-primary" />
                            <span>{item.label}</span>
                          </span>
                          <span className="text-[10px] font-mono text-muted-foreground">#{item.id}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projects */}
                {filteredProjects.length > 0 && (
                  <div>
                    <div className="px-3 py-1 text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                      {isEn ? "Engineering Projects" : "Proyek Rekayasa"}
                    </div>
                    <div className="space-y-0.5 mt-1">
                      {filteredProjects.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => scrollToSection("projects")}
                          className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-foreground/90 hover:text-foreground hover:bg-surface-secondary transition-colors text-left"
                        >
                          <span className="flex items-center gap-2.5 truncate">
                            <FolderGit2 className="w-4 h-4 text-primary shrink-0" />
                            <span className="truncate">{p.title}</span>
                          </span>
                          <span className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded-full bg-surface shrink-0">
                            {p.category}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                <div>
                  <div className="px-3 py-1 text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                    {isEn ? "Quick Actions" : "Aksi Cepat"}
                  </div>
                  <div className="space-y-0.5 mt-1">
                    <button
                      onClick={copyEmail}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-foreground/90 hover:text-foreground hover:bg-surface-secondary transition-colors text-left"
                    >
                      <span className="flex items-center gap-2.5">
                        {copied ? (
                          <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-primary" />
                        )}
                        <span>
                          {copied
                            ? isEn
                              ? "Email copied to clipboard!"
                              : "Email berhasil disalin!"
                            : isEn
                            ? `Copy Email (${profileData.contact.email})`
                            : `Salin Email (${profileData.contact.email})`}
                        </span>
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground">Action</span>
                    </button>

                    <a
                      href={profileData.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-foreground/90 hover:text-foreground hover:bg-surface-secondary transition-colors text-left"
                    >
                      <span className="flex items-center gap-2.5">
                        <Download className="w-4 h-4 text-primary" />
                        <span>{isEn ? "Download Curriculum Vitae (PDF)" : "Unduh Curriculum Vitae (PDF)"}</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                    </a>

                    <a
                      href={profileData.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-foreground/90 hover:text-foreground hover:bg-surface-secondary transition-colors text-left"
                    >
                      <span className="flex items-center gap-2.5">
                        <ExternalLink className="w-4 h-4 text-primary" />
                        <span>{isEn ? "Open GitHub Profile" : "Buka Profil GitHub"}</span>
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground">GitHub</span>
                    </a>

                    <a
                      href={profileData.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-foreground/90 hover:text-foreground hover:bg-surface-secondary transition-colors text-left"
                    >
                      <span className="flex items-center gap-2.5">
                        <ExternalLink className="w-4 h-4 text-primary" />
                        <span>{isEn ? "Open LinkedIn Profile" : "Buka Profil LinkedIn"}</span>
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground">LinkedIn</span>
                    </a>

                    {profileData.contact.instagram && (
                      <a
                        href={profileData.contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-foreground/90 hover:text-foreground hover:bg-surface-secondary transition-colors text-left"
                      >
                        <span className="flex items-center gap-2.5">
                          <ExternalLink className="w-4 h-4 text-primary" />
                          <span>{isEn ? "Open Instagram Profile (@aldialf_)" : "Buka Profil Instagram (@aldialf_)"}</span>
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground">Instagram</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Switch Theme */}
                {filteredThemes.length > 0 && (
                  <div>
                    <div className="px-3 py-1 text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                      {isEn ? "Color Theme Preset" : "Ubah Tema Warna"}
                    </div>
                    <div className="grid grid-cols-2 gap-1 mt-1">
                      {filteredThemes.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => {
                            setTheme(t.id as ThemeId)
                            setIsOpen(false)
                          }}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-left transition-colors border ${
                            theme === t.id
                              ? "border-primary bg-surface-secondary text-foreground font-semibold"
                              : "border-transparent text-foreground/80 hover:bg-surface-secondary"
                          }`}
                        >
                          <span
                            className="w-3 h-3 rounded-full border border-black/20 shrink-0"
                            style={{ backgroundColor: t.previewAccent }}
                          />
                          <span className="truncate">{t.name}</span>
                          {theme === t.id && <Check className="w-3.5 h-3.5 text-primary ml-auto shrink-0" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="px-4 py-2.5 border-t border-border bg-surface-secondary text-[11px] text-muted-foreground flex justify-between items-center font-mono">
                <span>{isEn ? "Quick Portfolio Navigation" : "Navigasi Cepat Portfolio"}</span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded-sm border border-border bg-card">Esc</kbd>{" "}
                  {isEn ? "Close" : "Tutup"}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
