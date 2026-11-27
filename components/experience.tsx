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
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Globe,
  ExternalLink,
} from "lucide-react"
import { experiencesData } from "@/data/experiences"
import { useLanguage } from "@/contexts/language-context"
import { ExperienceItem } from "@/types/portfolio"
import ExperienceDetailModal from "@/components/experience/experience-detail-modal"

export default function Experience() {
  const { dict, language } = useLanguage()
  const isEn = language === "en"
  const [activeCategory, setActiveCategory] = useState<
    "all" | "professional" | "academic_project" | "leadership"
  >("all")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null)
  const [showAll, setShowAll] = useState(false)

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

  // Initial compact list (5 items) or full list
  const visibleExperiences = showAll
    ? displayedExperiences
    : displayedExperiences.slice(0, 5)

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
            {[
              { id: "all", label: `${dict.experience.tabAll} (${countAll})` },
              { id: "professional", label: `${dict.experience.tabProf} (${countProf})` },
              { id: "academic_project", label: `${dict.experience.tabAcademic} (${countAcademic})` },
              { id: "leadership", label: `${dict.experience.tabLeadership} (${countLeadership})` },
            ].map((tab) => {
              const isActive = activeCategory === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveCategory(tab.id as any)
                    setShowAll(false)
                  }}
                  className="relative px-3 py-1.5 rounded-lg transition-colors"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeExperienceTabPill"
                      className="absolute inset-0 rounded-lg bg-primary shadow-xs -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      isActive
                        ? "text-primary-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              )
            })}
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
          <div className="space-y-10 sm:space-y-12">
            <AnimatePresence mode="popLayout">
              {visibleExperiences.map((exp, idx) => {
                const isEven = idx % 2 === 0
                const expPeriod = isEn && exp.periodEn ? exp.periodEn : exp.period
                const expType = isEn && exp.typeEn ? exp.typeEn : exp.type
                const expTitle = isEn && exp.titleEn ? exp.titleEn : exp.title
                const expLocation = isEn && exp.locationEn ? exp.locationEn : exp.location
                const expDescription = isEn && exp.descriptionEn ? exp.descriptionEn : exp.description

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
                      {/* Compact Timeline Node Card */}
                      <div className="w-full p-5 sm:p-6 rounded-2xl border border-border bg-card shadow-xs hover:border-primary transition-all flex flex-col justify-between">
                        <div>
                          {/* Period & Type Tag */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary">
                              <Calendar className="w-3.5 h-3.5" />
                              {expPeriod}
                            </span>
                            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-border bg-surface-secondary text-foreground font-semibold">
                              {expType}
                            </span>
                          </div>

                          {/* Position Title & Organization */}
                          <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 leading-snug">
                            {expTitle}
                          </h3>
                          <div className="text-xs sm:text-sm font-semibold text-accent mb-3 flex items-center gap-1.5 font-sans">
                            <Building className="w-3.5 h-3.5 shrink-0" />
                            <span>{exp.company}</span>
                            <span className="text-muted-foreground font-normal">
                              • {expLocation}
                            </span>
                          </div>

                          {/* 1-2 Sentence Compact Summary */}
                          <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-sans mb-4 text-left sm:text-justify hyphens-auto line-clamp-2">
                            {expDescription}
                          </p>
                        </div>

                        {/* Card Footer: Clean View Details Action & Optional Website Link */}
                        <div className="pt-3 border-t border-border/60 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-3">
                            <button
                              onClick={() => setSelectedExperience(exp)}
                              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:underline group/btn"
                            >
                              <span>{dict.experience.viewDetailsBtn}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </button>

                            {exp.websiteUrl && (
                              <a
                                href={exp.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-primary/30 bg-primary/10 text-[11px] font-mono font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                title={isEn ? "Visit Company Website" : "Kunjungi Website Resmi"}
                              >
                                <Globe className="w-3 h-3" />
                                <span>{exp.websiteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>

                          {/* Mini count indicator for key contributions */}
                          {exp.achievements && exp.achievements.length > 0 && (
                            <span className="text-[10px] font-mono text-muted-foreground">
                              {exp.achievements.length} {isEn ? "highlights" : "poin capaian"}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Show All Toggle Button */}
          {displayedExperiences.length > 5 && (
            <div className="flex justify-center mt-12 relative z-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-xs font-mono font-semibold text-foreground hover:border-primary hover:text-primary transition-all shadow-xs"
              >
                {showAll ? (
                  <>
                    <span>{dict.experience.showLessBtn}</span>
                    <ChevronUp className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    <span>
                      {dict.experience.showAllBtn} ({displayedExperiences.length})
                    </span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Experience Detail Modal */}
      <ExperienceDetailModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  )
}
