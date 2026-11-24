"use client"

import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github, Layers, Target, CheckCircle2, Cpu } from "lucide-react"
import { ProjectItem } from "@/types/portfolio"

interface ProjectDetailModalProps {
  project: ProjectItem | null
  onClose: () => void
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (project) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

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
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card text-card-foreground shadow-2xl p-6 sm:p-8 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-interactive-hover transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6 pr-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">
                {project.category}
              </span>
              <span className="text-xs font-mono text-muted-foreground px-2.5 py-0.5 rounded-full bg-surface-secondary border border-border">
                Peran: {project.role}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              {project.title}
            </h2>
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-8 pb-6 border-b border-border">
            {project.technologies.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>

          {/* Content Sections */}
          <div className="space-y-6 text-sm text-foreground/90">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-accent" />
                Gambaran Umum & Konteks Rekayasa
              </h3>
              <p className="leading-relaxed text-foreground/80">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Problem Statement */}
            {project.problemStatement && (
              <div className="p-4 rounded-xl border border-border/80 bg-surface-secondary/60">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                  <Target className="w-3.5 h-3.5 text-accent" />
                  Problem Statement & Tantangan
                </h3>
                <p className="leading-relaxed text-foreground/80">
                  {project.problemStatement}
                </p>
              </div>
            )}

            {/* Technical Approach */}
            {project.technicalApproach && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-accent" />
                  Pendekatan Teknis & Arsitektur
                </h3>
                <p className="leading-relaxed text-foreground/80">
                  {project.technicalApproach}
                </p>
              </div>
            )}

            {/* Architecture Steps */}
            {project.architecture && project.architecture.length > 0 && (
              <div className="mt-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                  Tahapan Alur Arsitektur (Pipeline Flow):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.architecture.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-border bg-surface p-3"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-mono text-accent font-semibold">
                          0{idx + 1}. {step.title}
                        </span>
                        {step.tech && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-surface-secondary border border-border text-muted-foreground">
                            {step.tech}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground leading-normal">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {project.results && (
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-500 mb-1.5 flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Capaian & Hasil Evaluasi
                </h3>
                <p className="leading-relaxed text-foreground/85">{project.results}</p>
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.demoUrl && project.demoUrl !== "#" && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-xs hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Buka Tautan Demo / Hasil
                </a>
              )}
              {project.codeUrl && project.codeUrl !== "#" && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-foreground font-medium text-xs hover:border-interactive-hover transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  Repositori Kode
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors ml-auto"
            >
              [Tutup Window]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
