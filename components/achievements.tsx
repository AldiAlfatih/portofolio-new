"use client"

import React from "react"
import { motion } from "framer-motion"
import { Globe, Flag, Star, Trophy, Award, Sparkles } from "lucide-react"
import { achievementsData } from "@/data/achievements"
import { useLanguage } from "@/contexts/language-context"

export default function Achievements() {
  const { dict, language } = useLanguage()

  // Extract categories
  const internationalGroup = achievementsData.find((g) => g.category === "Internasional")
  const nationalGroup = achievementsData.find((g) => g.category === "Nasional")
  const academicGroup = achievementsData.find(
    (g) => g.category === "Keunggulan Akademik & Kehormatan" || g.category === "Keunggulan Akademik"
  )

  const internationalItem = internationalGroup?.items[0]
  const nationalItems = nationalGroup?.items || []
  const academicItems = academicGroup?.items || []

  return (
    <section id="achievements" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
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

        {/* Editorial Two-Column Layout (Desktop) / Stacked (Mobile) */}
        {/* Strictly items-start, natural height, zero items-stretch, zero h-full */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: International Spotlight + Academic Honors (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* International Achievement: Compact Editorial Feature */}
            {internationalItem && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:border-primary transition-all"
              >
                {/* Editorial Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/80">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg border border-border bg-surface-secondary text-primary">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block">
                        {dict.achievements.internationalTitle}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        1 {dict.achievements.verifiedEntries}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-border bg-surface text-primary font-bold">
                    {internationalItem.year}
                  </span>
                </div>

                {/* International Item Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-primary">#01</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-secondary border border-border text-foreground font-semibold">
                      {internationalItem.type}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                    {internationalItem.title}
                  </h3>

                  <p className="text-xs text-muted-foreground font-sans">
                    {internationalItem.description}
                  </p>

                  <div className="text-xs text-foreground/85 leading-relaxed font-sans pt-3 border-t border-border/60 flex items-start gap-2">
                    <span className="text-primary mt-0.5 shrink-0 font-mono text-xs">↳</span>
                    <span>{internationalItem.impact}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Academic Honors & Institutional Distinctions */}
            {academicItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:border-primary transition-all"
              >
                {/* Academic Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/80">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg border border-border bg-surface-secondary text-primary">
                      <Star className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block">
                        {dict.achievements.academicTitle}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {academicItems.length} {dict.achievements.verifiedEntries}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Academic Items List */}
                <div className="divide-y divide-border/60">
                  {academicItems.map((item, idx) => (
                    <div
                      key={idx}
                      className={idx === 0 ? "pb-4" : "pt-4"}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-secondary border border-border text-foreground font-semibold">
                          {item.type}
                        </span>
                        <span className="text-xs font-mono text-primary font-bold">{item.year}</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground mb-1 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground font-sans mb-2">
                        {item.description}
                      </p>
                      <div className="text-xs text-foreground/85 leading-relaxed font-sans flex items-start gap-2">
                        <span className="text-primary mt-0.5 shrink-0 font-mono text-xs">↳</span>
                        <span>{item.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: National Achievements (Editorial Vertical List) (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs hover:border-primary transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/80">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg border border-border bg-surface-secondary text-primary">
                    <Flag className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block">
                      {dict.achievements.nationalTitle}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {nationalItems.length} {dict.achievements.verifiedEntries}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-border bg-surface text-muted-foreground">
                  2024 – 2026
                </span>
              </div>

              {/* National Editorial Vertical List */}
              <div className="divide-y divide-border/60">
                {nationalItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`group transition-colors ${
                      idx === 0 ? "pb-5" : idx === nationalItems.length - 1 ? "pt-5" : "py-5"
                    }`}
                  >
                    {/* Item Top Metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-primary">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-secondary border border-border text-foreground font-semibold">
                          {item.type}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-semibold text-primary">
                        {item.year}
                      </span>
                    </div>

                    {/* Award Title */}
                    <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors mb-1.5 leading-snug">
                      {item.title}
                    </h4>

                    {/* Organizer / Description */}
                    <p className="text-xs text-muted-foreground font-sans mb-2.5 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Impact Note with Directional Indicator */}
                    <div className="text-xs text-foreground/80 leading-relaxed font-sans pt-2 border-t border-border/40 flex items-start gap-2">
                      <span className="text-primary mt-0.5 shrink-0 font-mono text-xs">↳</span>
                      <span>{item.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
