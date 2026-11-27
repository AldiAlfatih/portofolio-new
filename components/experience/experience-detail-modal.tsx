"use client"

import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  Calendar,
  Building,
  MapPin,
  CheckCircle2,
  Briefcase,
  Layers,
  Globe,
  ExternalLink,
} from "lucide-react"
import { ExperienceItem } from "@/types/portfolio"
import { TechLogo } from "@/components/tech-logo"
import { useLanguage } from "@/contexts/language-context"

interface ExperienceDetailModalProps {
  experience: ExperienceItem | null
  onClose: () => void
}

export default function ExperienceDetailModal({
  experience,
  onClose,
}: ExperienceDetailModalProps) {
  const { dict, language } = useLanguage()
  const isEn = language === "en"

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (experience) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [experience, onClose])

  if (!experience) return null

  const expTitle = isEn && experience.titleEn ? experience.titleEn : experience.title
  const expType = isEn && experience.typeEn ? experience.typeEn : experience.type
  const expPeriod = isEn && experience.periodEn ? experience.periodEn : experience.period
  const expLocation = isEn && experience.locationEn ? experience.locationEn : experience.location
  const expDescription = isEn && experience.descriptionEn ? experience.descriptionEn : experience.description
  const expAchievements = isEn && experience.achievementsEn ? experience.achievementsEn : experience.achievements

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card text-card-foreground shadow-2xl p-6 sm:p-8 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            aria-label={dict.experience.closeModalBtn}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6 pr-10">
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">
                {expType}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                {expPeriod}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-1.5 leading-snug">
              {expTitle}
            </h2>

            <div className="text-xs sm:text-sm font-semibold text-accent flex flex-wrap items-center gap-1.5 font-sans">
              <Building className="w-3.5 h-3.5 shrink-0" />
              <span>{experience.company}</span>
              {expLocation && (
                <span className="text-muted-foreground font-normal">
                  • {expLocation}
                </span>
              )}
              {experience.websiteUrl && (
                <a
                  href={experience.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 ml-1 text-xs font-mono text-primary hover:underline"
                >
                  <Globe className="w-3 h-3" />
                  <span>{experience.websiteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-6 text-sm text-foreground/90 border-t border-border pt-6">
            {/* Full Description with Justified Text */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-primary" />
                {isEn ? "Overview" : "Gambaran Peran"}
              </h3>
              <p className="leading-relaxed text-foreground/80 sm:text-justify hyphens-auto font-sans">
                {expDescription}
              </p>
            </div>

            {/* Responsibilities & Key Contributions */}
            {expAchievements.length > 0 && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  {dict.experience.contributionsLabel}:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-foreground/85 font-sans">
                  {expAchievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 leading-relaxed sm:text-justify hyphens-auto">
                      <span className="text-primary mt-1 shrink-0 font-mono text-xs">↳</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Used */}
            {experience.technologies && experience.technologies.length > 0 && (
              <div className="pt-4 border-t border-border">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-primary" />
                  {dict.experience.technologiesLabel}:
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-surface text-xs font-mono text-foreground"
                    >
                      <TechLogo name={tech} className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Action */}
          <div className="mt-8 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
            {experience.websiteUrl ? (
              <a
                href={experience.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-mono text-xs font-semibold hover:opacity-90 transition-opacity shadow-xs"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>
                  {isEn ? "Visit Website" : "Kunjungi Website"} (
                  {experience.websiteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")})
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span />
            )}

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-surface border border-border text-foreground hover:border-primary transition-colors text-xs font-mono font-medium"
            >
              {dict.experience.closeModalBtn}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
