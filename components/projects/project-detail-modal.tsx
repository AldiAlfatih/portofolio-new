"use client"

import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  X,
  ExternalLink,
  Github,
  Layers,
  Target,
  CheckCircle2,
  Cpu,
  Sparkles,
  FileText,
  ArrowRight,
} from "lucide-react"
import { ProjectItem } from "@/types/portfolio"
import { TechLogo } from "@/components/tech-logo"
import { useLanguage } from "@/contexts/language-context"

interface ProjectDetailModalProps {
  project: ProjectItem | null
  onClose: () => void
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const { language } = useLanguage()
  const isEn = language === "en"

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
          initial={{ opacity: 0, scale: 0.96, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.96, y: 16, filter: "blur(4px)" }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card text-card-foreground shadow-2xl p-6 sm:p-8 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            aria-label={isEn ? "Close modal" : "Tutup modal"}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6 pr-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">
                {project.category}
              </span>
              <span className="text-xs font-mono text-muted-foreground px-2.5 py-0.5 rounded-full bg-surface-secondary border border-border">
                {isEn ? "Role" : "Peran"}: {isEn && project.roleEn ? project.roleEn : project.role}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              {isEn && project.titleEn ? project.titleEn : project.title}
            </h2>
          </div>

          {/* Tech Stack Chips with real vector logos */}
          <div className="flex flex-wrap gap-1.5 mb-8 pb-6 border-b border-border">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-surface text-xs font-mono text-foreground"
              >
                <TechLogo name={t} className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{t}</span>
              </span>
            ))}
          </div>

          {/* Content Sections */}
          <div className="space-y-6 text-sm text-foreground/90">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-primary" />
                {isEn ? "Overview & Engineering Context" : "Gambaran Umum & Konteks Rekayasa"}
              </h3>
              <p className="leading-relaxed text-foreground/80 text-left sm:text-justify hyphens-auto">
                {isEn && project.longDescriptionEn
                  ? project.longDescriptionEn
                  : isEn && project.descriptionEn
                  ? project.descriptionEn
                  : project.longDescription || project.description}
              </p>
            </div>

            {/* Problem Statement */}
            {(project.problemStatement || project.problemStatementEn) && (
              <div className="p-4 rounded-xl border border-border/80 bg-surface-secondary/60">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                  <Target className="w-3.5 h-3.5 text-primary" />
                  {isEn ? "Problem Statement & Challenges" : "Problem Statement & Tantangan"}
                </h3>
                <p className="leading-relaxed text-foreground/80 text-left sm:text-justify hyphens-auto">
                  {isEn && project.problemStatementEn
                    ? project.problemStatementEn
                    : project.problemStatement}
                </p>
              </div>
            )}

            {/* Technical Approach */}
            {(project.technicalApproach || project.technicalApproachEn) && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-primary" />
                  {isEn ? "Technical Approach & Architecture" : "Pendekatan Teknis & Arsitektur"}
                </h3>
                <p className="leading-relaxed text-foreground/80 text-left sm:text-justify hyphens-auto">
                  {isEn && project.technicalApproachEn
                    ? project.technicalApproachEn
                    : project.technicalApproach}
                </p>
              </div>
            )}

            {/* Visual Workflow Steps (Pipeline) */}
            {project.workflowSteps && project.workflowSteps.length > 0 && (
              <div className="p-4 rounded-xl border border-border bg-surface-secondary/40">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2 font-semibold">
                  <Layers className="w-3.5 h-3.5 text-primary" />
                  {isEn ? "Technical Pipeline Workflow:" : "Alur Kerja Pipeline Teknis:"}
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  {project.workflowSteps.map((step, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-mono font-medium text-foreground shadow-xs">
                        {step}
                      </span>
                      {sIdx < project.workflowSteps!.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Model Architecture & Benchmark Evaluation Table */}
            {project.evaluationTable && project.evaluationTable.length > 0 && (
              <div className="p-4 rounded-xl border border-border bg-surface-secondary/40">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  {isEn
                    ? "Model Architecture & Benchmark Evaluation (Research Dataset):"
                    : "Evaluasi Komparasi Arsitektur Model (Dataset Penelitian):"}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left font-sans border-collapse">
                    <thead>
                      <tr className="border-b border-border text-[11px] font-mono text-muted-foreground uppercase">
                        <th className="py-2 pr-3">Model</th>
                        <th className="py-2 px-3">Arsitektur</th>
                        <th className="py-2 px-3">Fitur Input</th>
                        <th className="py-2 px-3 text-right">Val Acc</th>
                        <th className="py-2 px-3 text-right">Test Acc</th>
                        <th className="py-2 pl-3 text-right">Beban</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {project.evaluationTable.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className={
                            row.model.includes("Terbaik") || row.model.includes("Best")
                              ? "bg-primary/10 font-semibold"
                              : ""
                          }
                        >
                          <td className="py-2.5 pr-3 font-mono font-bold text-foreground">
                            {row.model}
                          </td>
                          <td className="py-2.5 px-3 font-mono text-primary">
                            {row.architecture}
                          </td>
                          <td className="py-2.5 px-3 text-muted-foreground">
                            {row.features}
                          </td>
                          <td className="py-2.5 px-3 text-right font-mono font-bold text-foreground">
                            {row.valAccuracy}
                          </td>
                          <td className="py-2.5 px-3 text-right font-mono font-bold text-emerald-500">
                            {row.testAccuracy}
                          </td>
                          <td className="py-2.5 pl-3 text-right text-[11px] font-mono text-muted-foreground">
                            {row.computeLoad}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-muted-foreground mt-2.5 italic font-sans">
                  * Angka akurasi merupakan hasil benchmark komparatif pada dataset penelitian terisolasi (bukan klaim performa operasional mutlak di dunia nyata).
                </p>
              </div>
            )}

            {/* Architecture Steps */}
            {project.architecture && project.architecture.length > 0 && (
              <div className="mt-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                  {isEn ? "Architecture Pipeline Flow:" : "Tahapan Alur Arsitektur (Pipeline Flow):"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.architecture.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-border bg-surface"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-mono text-primary font-semibold">
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
            {(project.results || project.resultsEn) && (
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-500 mb-1.5 flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {isEn ? "Key Results & Impact" : "Capaian & Hasil Evaluasi"}
                </h3>
                <p className="leading-relaxed text-foreground/85 text-left sm:text-justify hyphens-auto">
                  {isEn && project.resultsEn ? project.resultsEn : project.results}
                </p>
              </div>
            )}

            {/* Visual Evidence & Documentation (Original Assets from Portfolio) */}
            {project.evidenceImages && project.evidenceImages.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-border">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-2 font-semibold">
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  {isEn
                    ? "Visual Evidence & Documentation:"
                    : "Dokumentasi & Bukti Pekerjaan (Aset Resmi):"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.evidenceImages.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="rounded-xl border border-border bg-surface overflow-hidden group shadow-xs hover:border-primary transition-colors"
                    >
                      <div className="relative h-48 w-full bg-surface-secondary/70 overflow-hidden">
                        <Image
                          src={img.url}
                          alt={img.title}
                          fill
                          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-3 border-t border-border bg-card">
                        <div className="text-xs font-bold text-foreground leading-snug">
                          {img.title}
                        </div>
                        {img.caption && (
                          <div className="text-[11px] text-muted-foreground mt-1 leading-relaxed font-sans">
                            {img.caption}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
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
                  {isEn ? "Live Demo / Output" : "Buka Tautan Demo / Hasil"}
                </a>
              )}
              {project.codeUrl && project.codeUrl !== "#" && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-foreground font-medium text-xs hover:border-primary transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  {isEn ? "Code Repository" : "Repositori Kode"}
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors ml-auto"
            >
              [{isEn ? "Close Window" : "Tutup Window"}]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
