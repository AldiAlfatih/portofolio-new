"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Calendar } from "lucide-react"
import { organizationsData } from "@/data/organizations"
import { useLanguage } from "@/contexts/language-context"

export default function Organizations() {
  const { dict } = useLanguage()

  return (
    <section id="organizations" className="py-24 relative border-t border-border/60">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider mb-2">
            <span>{dict.organizations.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {dict.organizations.title}
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mt-2 font-mono">
            {dict.organizations.subtitle}
          </p>
        </div>

        {/* Organizations Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {organizationsData.map((org, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-xs hover:border-primary transition-all"
            >
              {/* Header: Logo, Name, Role, Period */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-border/70">
                <div className="flex items-start gap-4">
                  {org.image ? (
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-border bg-surface shrink-0">
                      <Image
                        src={org.image}
                        alt={org.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl border border-border bg-surface-secondary flex items-center justify-center text-primary shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface-secondary border border-border text-foreground font-semibold">
                        {org.type}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {org.name}
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-primary font-sans mt-0.5">
                      {org.role}
                    </div>
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-border bg-surface text-xs font-mono text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {org.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-4 font-sans">
                {org.description}
              </p>

              {/* Responsibilities & Programs */}
              <div className="mb-4 space-y-1.5">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  {dict.organizations.activitiesLabel}:
                </div>
                {org.activities.map((act, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85">
                    <span className="text-primary mt-0.5 shrink-0">•</span>
                    <span className="leading-relaxed">{act}</span>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              {org.achievements.length > 0 && (
                <div className="pt-3 border-t border-border/60">
                  <div className="text-[11px] font-mono text-primary font-semibold mb-1">
                    {dict.organizations.achievementsLabel}:
                  </div>
                  <div className="space-y-1">
                    {org.achievements.map((ach, acIdx) => (
                      <div key={acIdx} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
