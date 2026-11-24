"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code2,
  Cpu,
  Layers,
  Database,
  Wrench,
  Wifi,
  Languages as LangIcon,
} from "lucide-react"
import {
  technicalSkillCategories,
  softSkillsData,
  languageSkillsData,
} from "@/data/skills"
import { TechLogo } from "@/components/tech-logo"
import { useLanguage } from "@/contexts/language-context"

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"hard" | "soft" | "lang">("hard")
  const { dict, language } = useLanguage()
  const isEn = language === "en"

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return Code2
      case "AI, Machine Learning & Deep Learning":
        return Cpu
      case "Web & Backend Engineering":
        return Layers
      case "Database & Storage":
        return Database
      case "Tools, Platforms & AI Data Labeling":
        return Wrench
      case "IoT & Embedded Systems":
        return Wifi
      default:
        return Code2
    }
  }

  return (
    <section id="skills" className="py-24 relative border-t border-border/60">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider mb-2">
            <span>{dict.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {dict.skills.title}
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mt-2 font-mono">
            {dict.skills.subtitle}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl border border-border bg-surface-secondary/70 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("hard")}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeTab === "hard"
                  ? "bg-card text-foreground shadow-sm border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {dict.skills.tabHard} ({technicalSkillCategories.length})
            </button>
            <button
              onClick={() => setActiveTab("soft")}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeTab === "soft"
                  ? "bg-card text-foreground shadow-sm border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {dict.skills.tabSoft} ({softSkillsData.length})
            </button>
            <button
              onClick={() => setActiveTab("lang")}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeTab === "lang"
                  ? "bg-card text-foreground shadow-sm border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {dict.skills.tabLang} ({languageSkillsData.length})
            </button>
          </div>
        </div>

        {/* Content based on Active Tab */}
        <AnimatePresence mode="wait">
          {activeTab === "hard" && (
            <motion.div
              key="hard"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {technicalSkillCategories.map((cat, idx) => {
                const IconComponent = getCategoryIcon(cat.category)
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-border bg-card shadow-xs hover:border-primary transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2.5 rounded-xl border border-border bg-surface-secondary text-primary">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-foreground">
                            {cat.category}
                          </h3>
                        </div>
                      </div>

                      {cat.description && (
                        <p className="text-xs text-muted-foreground mb-4 leading-relaxed font-sans">
                          {cat.description}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/70">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border bg-surface text-xs font-mono text-foreground hover:border-primary transition-colors"
                        >
                          <TechLogo name={skill.name} className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="font-medium">{skill.name}</span>
                          {skill.badge && (
                            <span className="text-[9px] text-muted-foreground opacity-75">
                              • {skill.badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </motion.div>
          )}

          {activeTab === "soft" && (
            <motion.div
              key="soft"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {softSkillsData.map((soft, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-border bg-card shadow-xs hover:border-primary transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold text-primary">
                        0{idx + 1}.
                      </span>
                      <h3 className="text-base font-bold text-foreground">
                        {isEn && soft.titleEn ? soft.titleEn : soft.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-sans">
                      {isEn && soft.descriptionEn ? soft.descriptionEn : soft.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "lang" && (
            <motion.div
              key="lang"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {languageSkillsData.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-border bg-card shadow-xs hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <LangIcon className="w-4 h-4 text-primary" />
                    <h3 className="text-lg font-bold text-foreground font-sans">
                      {lang.language}
                    </h3>
                  </div>

                  <div className="inline-block px-2.5 py-1 rounded-md bg-surface-secondary text-primary font-mono text-xs font-semibold mb-3 border border-border">
                    {lang.proficiency}
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                    {lang.description}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
