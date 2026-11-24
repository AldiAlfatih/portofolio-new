"use client"

import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  Building,
  Briefcase,
  Code2,
  Users,
  ArrowUpDown,
  Sparkles,
} from "lucide-react"
import { experiencesData } from "@/data/experiences"
import { useLanguage } from "@/contexts/language-context"
import { TechLogo } from "@/components/tech-logo"
import { ExperienceItem } from "@/types/portfolio"

export default function Experience() {
  const { dict } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<
    "all" | "professional" | "academic_project" | "leadership"
  >("all")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  // Filter and sort items based on honest chronology
  const displayedExperiences = useMemo(() => {
    let items = experiencesData.filter((item) => {
      if (activeCategory === "all") return true
      return item.category === activeCategory
    })

    // Sort by startDate
    return items.sort((a, b) => {
      const dateA = a.startDate || a.period
      const dateB = b.startDate || b.period
      if (sortDirection === "asc") {
        return dateA.localeCompare(dateB)
      } else {
        return dateB.localeCompare(dateA)
      }
    })
  }, [activeCategory, sortDirection])

  // Count items by category
  const countAll = experiencesData.length
  const countProf = experiencesData.filter((i) => i.category === "professional").length
  const countAcademic = experiencesData.filter((i) => i.category === "academic_project").length
  const countLeadership = experiencesData.filter((i) => i.category === "leadership").length

  // Subtle differentiated node markers
  const renderNodeIcon = (category: ExperienceItem["category"]) => {
    switch (category) {
      case "professional":
        return <Briefcase className="w-3.5 h-3.5 text-primary-foreground" />
      case "academic_project":
        return <Code2 className="w-3.5 h-3.5 text-primary" />
      case "leadership":
        return <Users className="w-3.5 h-3.5 text-foreground" />
      default:
        return <Sparkles className="w-3.5 h-3.5 text-primary" />
    }
  }

  const getNodeMarkerClasses = (category: ExperienceItem["category"]) => {
    switch (category) {
      case "professional":
        return "bg-primary border-2 border-primary text-primary-foreground shadow-md ring-4 ring-background"
      case "academic_project":
        return "bg-background border-2 border-primary text-primary shadow-sm ring-4 ring-background"
      case "leadership":
        return "bg-surface-secondary border-2 border-border text-foreground shadow-sm ring-4 ring-background"
      default:
        return "bg-background border-2 border-border text-foreground ring-4 ring-background"
    }
  }

  return (
    <section id="experience" className="py-24 relative border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{dict.experience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {dict.experience.title}
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mt-2 font-mono">
            {dict.experience.subtitle}
          </p>
        </div>

        {/* Filter Bar & Chronological Direction Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-16 pb-4 border-b border-border">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl border border-border bg-surface text-xs font-mono">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {dict.experience.tabAll} ({countAll})
            </button>
            <button
              onClick={() => setActiveCategory("professional")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeCategory === "professional"
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {dict.experience.tabProf} ({countProf})
            </button>
            <button
              onClick={() => setActiveCategory("academic_project")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeCategory === "academic_project"
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {dict.experience.tabAcademic} ({countAcademic})
            </button>
            <button
              onClick={() => setActiveCategory("leadership")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeCategory === "leadership"
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {dict.experience.tabLeadership} ({countLeadership})
            </button>
          </div>

          {/* Chronological Sorting Switcher */}
          <button
            onClick={() => setSortDirection((prev) => (prev === "desc" ? "asc" : "desc"))}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-card text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary transition-colors shrink-0"
            title="Toggle chronological order"
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-primary" />
            <span>
              {sortDirection === "desc"
                ? dict.experience.sortNewest
                : dict.experience.sortChronological}
            </span>
          </button>
        </div>

        {/* Visual Career Journey Timeline Spine */}
        <div className="relative">
          {/* Desktop Central Spine Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-border to-primary/40 pointer-events-none" />

          {/* Mobile Single Left Line */}
          <div className="md:hidden absolute left-4 sm:left-5 top-4 bottom-8 w-0.5 bg-gradient-to-b from-primary via-border to-primary/40 pointer-events-none" />

          {/* Nodes and Alternating Cards */}
          <div className="space-y-12 sm:space-y-14">
            <AnimatePresence mode="popLayout">
              {displayedExperiences.map((exp, idx) => {
                const isEven = idx % 2 === 0

                return (
                  <motion.div
                    key={exp.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.28, delay: Math.min(idx * 0.04, 0.4) }}
                    className="relative group w-full"
                  >
                    {/* Node Marker: Centered on Desktop Spine, Left-aligned on Mobile */}
                    <div
                      className={`absolute z-10 w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
                        // Desktop: centered on middle line
                        "md:left-1/2 md:-translate-x-1/2 md:top-6"
                      } ${
                        // Mobile: positioned on left line
                        "left-4 sm:left-5 -translate-x-1/2 top-5"
                      } ${getNodeMarkerClasses(exp.category)}`}
                    >
                      {renderNodeIcon(exp.category)}
                    </div>

                    {/* Timeline Card Container */}
                    <div
                      className={`w-full flex ${
                        // Mobile: push card right of the left spine
                        "pl-10 sm:pl-12"
                      } ${
                        // Desktop: alternating left / right
                        isEven
                          ? "md:pl-0 md:justify-start md:pr-[calc(50%+1.5rem)]"
                          : "md:pl-[calc(50%+1.5rem)] md:justify-end"
                      }`}
                    >
                      {/* Timeline Card */}
                      <div className="w-full p-6 sm:p-7 rounded-2xl border border-border bg-card shadow-xs hover:border-primary transition-all">
                        {/* Period & Type Tag */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-border bg-surface-secondary text-foreground font-semibold">
                            {exp.type}
                          </span>
                        </div>

                        {/* Position Title & Organization */}
                        <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 leading-snug">
                          {exp.title}
                        </h3>
                        <div className="text-xs sm:text-sm font-semibold text-accent mb-3 flex items-center gap-1.5 font-sans">
                          <Building className="w-3.5 h-3.5 shrink-0" />
                          <span>{exp.company}</span>
                          <span className="text-muted-foreground font-normal">• {exp.location}</span>
                        </div>

                        {/* Brief Summary */}
                        <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-sans mb-4">
                          {exp.description}
                        </p>

                        {/* Key Contributions & Impact */}
                        {exp.achievements.length > 0 && (
                          <div className="mb-4 space-y-2 pt-3 border-t border-border/60">
                            <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                              {dict.experience.contributionsLabel}
                            </div>
                            <ul className="space-y-1.5 text-xs text-muted-foreground font-sans">
                              {exp.achievements.map((ach, aIdx) => (
                                <li key={aIdx} className="flex items-start gap-2 leading-relaxed">
                                  <span className="text-primary mt-0.5 shrink-0 font-mono text-xs">↳</span>
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technology Stack Tags with Authentic Logos */}
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-border/60">
                            <span className="text-[10px] font-mono text-muted-foreground mr-1">
                              {dict.experience.technologiesLabel}
                            </span>
                            {exp.technologies.map((tech) => (
                              <span key={tech} className="tech-tag text-[10px]">
                                <TechLogo name={tech} className="w-3 h-3" size={12} />
                                <span>{tech}</span>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
