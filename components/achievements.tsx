"use client"

import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Trophy,
  Globe,
  Flag,
  GraduationCap,
  Award,
  Building,
  ArrowUpRight,
  Filter,
  ShieldCheck,
  FileText,
} from "lucide-react"
import { achievementsList } from "@/data/achievements"
import { AchievementItem } from "@/types/portfolio"
import { useLanguage } from "@/contexts/language-context"
import AchievementDetailModal from "@/components/achievements/achievement-detail-modal"

export default function Achievements() {
  const { dict, language } = useLanguage()
  const isEn = language === "en"
  const [activeTab, setActiveTab] = useState<
    "all" | "international" | "national" | "academic" | "hki"
  >("all")
  const [selectedAchievement, setSelectedAchievement] =
    useState<AchievementItem | null>(null)

  // Filter items based on active tab
  const filteredAchievements = useMemo(() => {
    if (activeTab === "all") return achievementsList
    return achievementsList.filter((item) => item.category === activeTab)
  }, [activeTab])

  // Category counts
  const countAll = achievementsList.length
  const countInternational = achievementsList.filter(
    (item) => item.category === "international"
  ).length
  const countNational = achievementsList.filter(
    (item) => item.category === "national"
  ).length
  const countAcademic = achievementsList.filter(
    (item) => item.category === "academic"
  ).length
  const countHki = achievementsList.filter(
    (item) => item.category === "hki"
  ).length

  // Helper for category badge visual
  const getCategoryBadge = (category: AchievementItem["category"]) => {
    switch (category) {
      case "international":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
            <Globe className="w-3 h-3" />
            <span>{dict.achievements.tabInternational}</span>
          </span>
        )
      case "national":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <Flag className="w-3 h-3" />
            <span>{dict.achievements.tabNational}</span>
          </span>
        )
      case "academic":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20">
            <GraduationCap className="w-3 h-3" />
            <span>{dict.achievements.tabAcademic}</span>
          </span>
        )
      case "hki":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <ShieldCheck className="w-3 h-3" />
            <span>{dict.achievements.tabHki}</span>
          </span>
        )
    }
  }

  const tabs = [
    { id: "all", label: `${dict.achievements.tabAll} (${countAll})` },
    { id: "international", label: `${dict.achievements.tabInternational} (${countInternational})` },
    { id: "national", label: `${dict.achievements.tabNational} (${countNational})` },
    { id: "academic", label: `${dict.achievements.tabAcademic} (${countAcademic})` },
    { id: "hki", label: `${dict.achievements.tabHki} (${countHki})` },
  ] as const

  return (
    <section id="achievements" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>{dict.achievements.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {dict.achievements.title}
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mt-2 font-mono">
            {dict.achievements.subtitle}
          </p>
        </div>

        {/* Category Tabs Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-border">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl border border-border bg-surface text-xs font-mono">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative px-3.5 py-1.5 rounded-lg transition-colors ${
                    isActive
                      ? "text-primary-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeAchievementTabPill"
                      className="absolute inset-0 rounded-lg bg-primary shadow-xs -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <Filter className="w-3.5 h-3.5 text-primary" />
            <span>
              {dict.projects.showingCount}{" "}
              <strong className="text-foreground">{filteredAchievements.length}</strong>{" "}
              {dict.achievements.verifiedEntries}
            </span>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item, idx) => {
              const itemTitle = isEn && item.titleEn ? item.titleEn : item.title
              const itemRank = isEn && item.rankEn ? item.rankEn : item.rank
              const itemOrganizer =
                isEn && item.organizerEn ? item.organizerEn : item.organizer
              const itemDescription =
                isEn && item.descriptionEn ? item.descriptionEn : item.description
              const itemImpact = isEn && item.impactEn ? item.impactEn : item.impact

              return (
                <motion.div
                  key={item.id || idx}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:border-primary transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Metadata Row: Category & Year */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div>{getCategoryBadge(item.category)}</div>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-border bg-surface text-primary font-bold">
                        {item.year}
                      </span>
                    </div>

                    {/* Rank / Placement Badge */}
                    {itemRank && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-primary/30 bg-primary/10 text-primary font-mono text-[11px] font-bold mb-3">
                        <Award className="w-3.5 h-3.5" />
                        <span>{itemRank}</span>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 leading-snug group-hover:text-primary transition-colors">
                      {itemTitle}
                    </h3>

                    {/* Organizer / Institution */}
                    {itemOrganizer && (
                      <div className="text-xs sm:text-sm font-semibold text-accent mb-3 flex items-center gap-1.5 font-sans">
                        <Building className="w-3.5 h-3.5 shrink-0" />
                        <span>{itemOrganizer}</span>
                      </div>
                    )}

                    {/* Short Description */}
                    <p className="text-xs text-foreground/80 leading-relaxed font-sans mb-3 text-left sm:text-justify hyphens-auto line-clamp-3">
                      {itemDescription}
                    </p>

                    {/* HKI specific metadata badge */}
                    {item.hkiNumber && (
                      <div className="mb-3 px-3 py-1.5 rounded-lg border border-border bg-surface text-[11px] font-mono text-muted-foreground flex items-center justify-between">
                        <span>No. Pencatatan:</span>
                        <span className="font-bold text-primary">{item.hkiNumber}</span>
                      </div>
                    )}

                    {/* Impact / Key Highlight */}
                    {itemImpact && (
                      <div className="text-xs text-muted-foreground leading-relaxed font-sans pt-3 border-t border-border/60 flex items-start gap-2">
                        <span className="text-primary mt-0.5 shrink-0 font-mono text-xs">↳</span>
                        <span className="line-clamp-2 text-left sm:text-justify hyphens-auto">
                          {itemImpact}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Action Row */}
                  <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedAchievement(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:underline group/btn"
                    >
                      <span>{dict.achievements.viewDetailBtn}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      {/* Direct PDF link for HKI */}
                      {item.certificateUrl && (
                        <a
                          href={item.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-border bg-surface text-foreground hover:border-primary hover:text-primary text-[11px] font-mono transition-colors shadow-xs"
                          title={isEn ? "Open Official PDF Document" : "Buka Dokumen Resmi (PDF)"}
                        >
                          <FileText className="w-3 h-3 text-primary" />
                          <span>PDF</span>
                        </a>
                      )}

                      {item.proposalTitle || item.solution || item.theme ? (
                        <span className="text-[10px] font-mono text-muted-foreground">
                          {isEn ? "Detailed Specs" : "Spesifikasi Lengkap"}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Achievement Detail Modal */}
      <AchievementDetailModal
        achievement={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </section>
  )
}
