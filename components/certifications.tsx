"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Calendar, ExternalLink, CheckCircle, ShieldCheck } from "lucide-react"
import { certificationsData } from "@/data/certifications"

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative border-t border-border/60">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
            <span>06 // SERTIFIKASI & KREDENSIAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Sertifikasi Resmi
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mt-2 font-mono">
            Kredensial keahlian terverifikasi dari platform edukasi teknologi terakreditasi (Dicoding & AWS).
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-6 rounded-2xl border border-border bg-card shadow-xs hover:border-interactive-hover transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top: Thumbnail Badge & Verified Status */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-border bg-surface-secondary shrink-0">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  <div className="flex flex-col items-end">
                    {cert.verified && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono font-semibold text-emerald-500">
                        <ShieldCheck className="w-3 h-3" />
                        Terverifikasi
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-muted-foreground mt-1">
                      ID: {cert.credentialId}
                    </span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base font-bold text-foreground mb-1 leading-snug">
                  {cert.title}
                </h3>
                <div className="text-xs font-semibold text-accent mb-3 font-sans">
                  {cert.issuer}
                </div>

                {/* Validity Period */}
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono mb-4">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>{cert.date}</span>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {cert.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface-secondary text-foreground/80 border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Link */}
              <div className="pt-4 border-t border-border/70 flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-foreground">Kredensial Digital</span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent hover:underline"
                >
                  <span>Verifikasi Kredensial</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
