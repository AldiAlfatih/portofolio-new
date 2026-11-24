"use client"

import React from "react"
import { motion } from "framer-motion"
import { Trophy, Globe, Flag, Star, Target, CheckCircle2, Award } from "lucide-react"
import { achievementsData } from "@/data/achievements"

export default function Achievements() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Internasional":
        return Globe
      case "Nasional":
        return Flag
      case "Keunggulan Akademik":
        return Star
      case "Pencapaian Teknis & Rekayasa":
        return Target
      default:
        return Trophy
    }
  }

  return (
    <section id="achievements" className="py-24 relative border-t border-border/60">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
            <span>05 // PENGAKUAN & KOMPETISI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Prestasi & Pencapaian
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mt-2 font-mono">
            Catatan pencapaian akademik, penghargaan kompetisi inovasi, dan rekayasa produk nyata.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievementsData.map((categoryGroup, cIdx) => {
            const IconComponent = getCategoryIcon(categoryGroup.category)
            return (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: cIdx * 0.08 }}
                className="p-6 sm:p-7 rounded-2xl border border-border bg-card shadow-xs hover:border-interactive-hover transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-5 border-b border-border/70">
                    <div className="p-2.5 rounded-xl border border-border bg-surface-secondary text-accent">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {categoryGroup.category}
                      </h3>
                      <p className="text-xs font-mono text-muted-foreground">
                        {categoryGroup.items.length} Entri Prestasi Terverifikasi
                      </p>
                    </div>
                  </div>

                  {/* Items List */}
                  <div className="space-y-4">
                    {categoryGroup.items.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="p-4 rounded-xl border border-border/80 bg-surface-secondary/40 hover:bg-surface-secondary/80 transition-colors"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface border border-border text-foreground font-semibold">
                            {item.type}
                          </span>
                          <span className="text-xs font-mono text-accent font-semibold">
                            {item.year}
                          </span>
                        </div>

                        <h4 className="text-sm sm:text-base font-bold text-foreground mb-1 leading-snug">
                          {item.title}
                        </h4>

                        <p className="text-xs text-muted-foreground font-sans mb-2">
                          {item.description}
                        </p>

                        <div className="text-xs text-foreground/80 leading-relaxed font-sans pt-2 border-t border-border/40 flex items-start gap-1.5">
                          <span className="text-accent mt-0.5 shrink-0">↳</span>
                          <span>{item.impact}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
