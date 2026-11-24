"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Briefcase,
  Calendar,
  MapPin,
  Building,
  GraduationCap,
  ExternalLink,
} from "lucide-react"
import { experiencesData } from "@/data/experiences"

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState<"all" | "professional" | "academic_project">("all")

  const filteredExperiences = experiencesData.filter((item) => {
    if (activeCategory === "all") return true
    return item.category === activeCategory
  })

  return (
    <section id="experience" className="py-20 relative border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header (Judie Mosinabre style: clean & profile-oriented) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-border">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
              Riwayat Karir & Rekayasa
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Pengalaman Kerja & Riset
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl border border-border bg-surface text-xs font-mono">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Semua ({experiencesData.length})
            </button>
            <button
              onClick={() => setActiveCategory("professional")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeCategory === "professional"
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Profesional ({experiencesData.filter((i) => i.category === "professional").length})
            </button>
            <button
              onClick={() => setActiveCategory("academic_project")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeCategory === "academic_project"
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Proyek & Riset ({experiencesData.filter((i) => i.category === "academic_project").length})
            </button>
          </div>
        </div>

        {/* Experience Cards Grid (Judie Mosinabre Compact Presentation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="p-6 rounded-2xl border border-border bg-card shadow-xs hover:border-primary transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top: Status Badge, Period & Location */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border border-border bg-surface-secondary text-foreground">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-primary" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-base font-bold text-foreground mb-1 leading-snug">
                    {exp.title}
                  </h3>
                  <div className="text-xs font-semibold text-primary mb-3 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 shrink-0" />
                    <span>{exp.company}</span>
                    <span className="text-muted-foreground font-normal">• {exp.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-foreground/80 leading-relaxed font-sans mb-4">
                    {exp.description}
                  </p>

                  {/* Key Contributions / Bullet Points */}
                  {exp.achievements.length > 0 && (
                    <ul className="space-y-1.5 mb-5 text-xs text-muted-foreground font-sans border-l-2 border-border/80 pl-3">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="leading-relaxed">
                          • {ach}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-border/70">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
