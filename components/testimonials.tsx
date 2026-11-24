"use client"

import React from "react"
import { motion } from "framer-motion"
import { Quote, Building } from "lucide-react"
import { testimonialsData } from "@/data/testimonials"

export default function Testimonials() {
  if (!testimonialsData || testimonialsData.length === 0) return null

  return (
    <section id="testimonials" className="py-24 relative border-t border-border/60">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
            <span>08 // KOLABORASI & FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Testimoni & Rekomendasi
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mt-2 font-mono">
            Ulasan dari pemangku kepentingan dan mitra kolaborasi proyek rekayasa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-3xl mx-auto">
          {testimonialsData.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-2xl border border-border bg-card shadow-xs relative overflow-hidden group hover:border-interactive-hover transition-colors"
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6 pointer-events-none" />

              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed italic mb-6 font-sans">
                "{t.text}"
              </p>

              <div className="pt-4 border-t border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="font-bold text-foreground text-sm">{t.name}</h4>
                  <p className="text-xs text-muted-foreground font-sans">
                    {t.position} • {t.company}
                  </p>
                </div>

                <div className="text-[11px] font-mono text-accent bg-surface-secondary px-2.5 py-1 rounded-md border border-border shrink-0">
                  {t.collaborationContext}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
