"use client"

import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  X,
  Trophy,
  Calendar,
  Building,
  Award,
  Globe,
  Flag,
  GraduationCap,
  Sparkles,
  FileText,
  Users,
  Compass,
  ShieldCheck,
  Maximize2,
  ExternalLink,
} from "lucide-react"
import { AchievementItem } from "@/types/portfolio"
import { useLanguage } from "@/contexts/language-context"

interface AchievementDetailModalProps {
  achievement: AchievementItem | null
  onClose: () => void
}

export default function AchievementDetailModal({
  achievement,
  onClose,
}: AchievementDetailModalProps) {
  const { dict, language } = useLanguage()
  const isEn = language === "en"

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (achievement) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [achievement, onClose])

  if (!achievement) return null

  const title = isEn && achievement.titleEn ? achievement.titleEn : achievement.title
  const rank = isEn && achievement.rankEn ? achievement.rankEn : achievement.rank
  const organizer = isEn && achievement.organizerEn ? achievement.organizerEn : achievement.organizer
  const type = isEn && achievement.typeEn ? achievement.typeEn : achievement.type
  const description = isEn && achievement.descriptionEn ? achievement.descriptionEn : achievement.description
  const impact = isEn && achievement.impactEn ? achievement.impactEn : achievement.impact
  const proposalTitle = isEn && achievement.proposalTitleEn ? achievement.proposalTitleEn : achievement.proposalTitle
  const theme = isEn && achievement.themeEn ? achievement.themeEn : achievement.theme
  const cohort = isEn && achievement.cohortEn ? achievement.cohortEn : achievement.cohort

  const getCategoryIcon = () => {
    switch (achievement.category) {
      case "international":
        return <Globe className="w-3.5 h-3.5 text-primary" />
      case "national":
        return <Flag className="w-3.5 h-3.5 text-primary" />
      case "academic":
        return <GraduationCap className="w-3.5 h-3.5 text-primary" />
      case "hki":
        return <ShieldCheck className="w-3.5 h-3.5 text-primary" />
      default:
        return <Trophy className="w-3.5 h-3.5 text-primary" />
    }
  }

  const getCategoryName = () => {
    switch (achievement.category) {
      case "international":
        return dict.achievements.tabInternational
      case "national":
        return dict.achievements.tabNational
      case "academic":
        return dict.achievements.tabAcademic
      case "hki":
        return dict.achievements.tabHki
      default:
        return ""
    }
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, y: 15, filter: "blur(4px)" }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-6 sm:p-8 z-10 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full border border-border bg-surface text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6 pr-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/25">
                {getCategoryIcon()}
                <span>{getCategoryName()}</span>
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                Tahun: {achievement.year}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
              {title}
            </h2>

            {organizer && (
              <div className="text-xs sm:text-sm font-semibold text-accent mt-1 flex items-center gap-1.5 font-sans">
                <Building className="w-3.5 h-3.5 shrink-0" />
                <span>{organizer}</span>
              </div>
            )}
          </div>

          {/* Certificate Image Preview (if available) */}
          {achievement.image && (
            <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-border bg-surface-secondary mb-6 shadow-xs">
              <Image
                src={achievement.image}
                alt={title}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, 650px"
              />
            </div>
          )}

          {/* Key Badges & Specs Grid */}
          <div className="space-y-3 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {rank && (
                <div className="p-3 rounded-xl border border-border bg-surface">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-0.5 flex items-center gap-1.5">
                    <Award className="w-3 h-3 text-primary" />
                    <span>{dict.achievements.rankLabel}</span>
                  </div>
                  <div className="text-xs font-bold text-foreground">{rank}</div>
                </div>
              )}

              {type && (
                <div className="p-3 rounded-xl border border-border bg-surface">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                    Kategori Pengakuan
                  </div>
                  <div className="text-xs font-bold text-foreground">{type}</div>
                </div>
              )}
            </div>

            {/* HKI Specific Metadata Box */}
            {achievement.hkiNumber && (
              <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-mono font-bold text-amber-500">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Kredensial Resmi Hak Cipta (Kemenkumham RI)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono pt-2 border-t border-amber-500/20">
                  <div>
                    <span className="text-muted-foreground">Nomor Pencatatan: </span>
                    <strong className="text-foreground">{achievement.hkiNumber}</strong>
                  </div>
                  {achievement.applicationNumber && (
                    <div>
                      <span className="text-muted-foreground">Nomor Permohonan: </span>
                      <strong className="text-foreground">{achievement.applicationNumber}</strong>
                    </div>
                  )}
                  {achievement.firstAnnounced && (
                    <div>
                      <span className="text-muted-foreground">Diumumkan: </span>
                      <strong className="text-foreground">{achievement.firstAnnounced}</strong>
                    </div>
                  )}
                  {achievement.protectionPeriod && (
                    <div>
                      <span className="text-muted-foreground">Masa Berlaku: </span>
                      <strong className="text-foreground">{achievement.protectionPeriod}</strong>
                    </div>
                  )}
                </div>

                {achievement.creators && (
                  <div className="pt-2 border-t border-amber-500/20 text-[11px]">
                    <span className="text-muted-foreground font-mono">Daftar Pencipta / Inventor:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {achievement.creators.map((c, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-card border border-border text-[10px] font-mono text-foreground font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {(proposalTitle || theme || achievement.team || achievement.solution) && (
              <div className="space-y-2">
                {proposalTitle && (
                  <div className="p-3 rounded-xl border border-border bg-surface">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                      {dict.achievements.proposalLabel}
                    </div>
                    <div className="text-xs font-semibold text-foreground leading-snug">
                      "{proposalTitle}"
                    </div>
                  </div>
                )}
                {theme && (
                  <div className="p-3 rounded-xl border border-border bg-surface">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-0.5 flex items-center gap-1.5">
                      <Compass className="w-3 h-3 text-primary" />
                      <span>{dict.achievements.themeLabel}</span>
                    </div>
                    <div className="text-xs font-semibold text-foreground">{theme}</div>
                  </div>
                )}
                {achievement.team && (
                  <div className="p-3 rounded-xl border border-border bg-surface">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-0.5 flex items-center gap-1.5">
                      <Users className="w-3 h-3 text-primary" />
                      <span>{dict.achievements.teamLabel}</span>
                    </div>
                    <div className="text-xs font-bold text-foreground">
                      {achievement.team}{" "}
                      {achievement.teamId && (
                        <span className="text-muted-foreground font-normal">
                          ({achievement.teamId})
                        </span>
                      )}
                    </div>
                  </div>
                )}
                {achievement.solution && (
                  <div className="p-3 rounded-xl border border-border bg-surface">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-0.5 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-primary" />
                      <span>Solusi / Proyek</span>
                    </div>
                    <div className="text-xs font-bold text-foreground">
                      {achievement.solution}
                    </div>
                  </div>
                )}
              </div>
            )}

            {(achievement.gpa || cohort || achievement.nim || achievement.totalScore || achievement.studyDuration) && (
              <div className="p-4 rounded-xl border border-border bg-surface space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {achievement.gpa && (
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                        Indeks Prestasi Kumulatif (IPK)
                      </div>
                      <div className="text-sm font-extrabold text-primary font-mono">
                        {achievement.gpa}
                      </div>
                    </div>
                  )}
                  {achievement.studyDuration && (
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                        Masa Studi
                      </div>
                      <div className="text-xs font-bold text-foreground">
                        {achievement.studyDuration} (Tepat Waktu)
                      </div>
                    </div>
                  )}
                  {achievement.totalScore && (
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                        Perolehan Nilai
                      </div>
                      <div className="text-xs font-mono font-bold text-foreground">
                        {achievement.totalScore}
                      </div>
                    </div>
                  )}
                  {achievement.nim && (
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                        Nomor Induk Mahasiswa (NIM)
                      </div>
                      <div className="text-xs font-mono font-bold text-foreground">
                        {achievement.nim}
                      </div>
                    </div>
                  )}
                </div>

                {cohort && (
                  <div className="pt-2 border-t border-border/60">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                      Keterangan Kelulusan
                    </div>
                    <div className="text-xs font-semibold text-foreground">
                      {cohort}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Description & Impact Body */}
          <div className="space-y-5 text-sm text-foreground/90 border-t border-border pt-5">
            {/* Context & Description */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-primary" />
                <span>{isEn ? "Context & Description" : "Konteks & Ringkasan"}</span>
              </h3>
              <p className="leading-relaxed text-foreground/80 text-left sm:text-justify hyphens-auto font-sans text-xs sm:text-sm">
                {description}
              </p>
            </div>

            {/* Impact & Significance */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-primary" />
                <span>{dict.achievements.impactLabel}</span>
              </h3>
              <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-xs sm:text-sm text-foreground/85 leading-relaxed font-sans text-left sm:text-justify hyphens-auto">
                {impact}
              </div>
            </div>
          </div>

          {/* Modal Footer with Actions */}
          <div className="mt-8 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {achievement.certificateUrl && (
                <a
                  href={achievement.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-mono text-xs hover:opacity-90 transition-opacity font-semibold shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{isEn ? "Open Official Document (PDF)" : "Buka Dokumen Resmi (PDF)"}</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-surface border border-border text-foreground hover:border-primary transition-colors text-xs font-mono font-medium ml-auto"
            >
              {dict.achievements.closeModalBtn}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
