"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Calendar,
  ExternalLink,
  ShieldCheck,
  Maximize2,
  X,
  Eye,
  Award,
} from "lucide-react"
import { certificationsData } from "@/data/certifications"
import { CertificationItem } from "@/types/portfolio"
import { useLanguage } from "@/contexts/language-context"
import { TechLogo } from "@/components/tech-logo"

export default function Certifications() {
  const { dict } = useLanguage()
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null)
    }
    if (selectedCert) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedCert])

  return (
    <section id="certifications" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider mb-2">
            <span>{dict.certifications.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {dict.certifications.title}
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mt-2 font-mono">
            {dict.certifications.subtitle}
          </p>
        </div>

        {/* Certifications Grid with Equal Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="h-full flex flex-col justify-between p-5 sm:p-6 rounded-3xl border border-border bg-card shadow-xs hover:border-primary transition-all group"
            >
              <div>
                {/* Certificate Real Image Thumbnail Preview */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden border border-border bg-surface-secondary mb-4 cursor-pointer group/thumb shadow-xs"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs backdrop-blur-xs">
                    <Eye className="w-4 h-4" />
                    <span>{dict.certifications.viewCert}</span>
                  </div>

                  {/* Verified Ribbon */}
                  {cert.verified && (
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-card/90 backdrop-blur-md border border-border text-[10px] font-mono font-semibold text-emerald-500 flex items-center gap-1 shadow-xs">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{dict.certifications.verifiedBadge}</span>
                    </div>
                  )}
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base font-bold text-foreground mb-1 leading-snug group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-semibold text-accent mb-2 font-sans">
                  {cert.issuer}
                </div>

                {/* Date & Credential ID */}
                <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] font-mono text-muted-foreground mb-3 pb-2.5 border-b border-border/60">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-primary" />
                    {cert.date}
                  </span>
                  <span>ID: {cert.credentialId}</span>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="tech-tag text-[9px] py-0.5 px-2"
                    >
                      <TechLogo name={s} className="w-2.5 h-2.5" size={10} />
                      <span>{s}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-border flex items-center justify-between">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:underline"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{dict.certifications.viewCert}</span>
                </button>

                {cert.link && cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg border border-border bg-surface text-foreground hover:border-primary hover:text-primary transition-colors"
                    title={dict.certifications.verifyCredential}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* High-Resolution Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-6 sm:p-8 z-10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-full border border-border bg-surface text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Tutup preview sertifikat"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4 pr-10">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    {dict.certifications.verifiedBadge}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    ID: {selectedCert.credentialId}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {selectedCert.title}
                </h3>
                <p className="text-xs sm:text-sm text-accent font-sans mt-0.5">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>

              {/* Full Certificate Image */}
              <div className="relative w-full h-[50vh] sm:h-[55vh] rounded-2xl overflow-hidden border border-border bg-surface-secondary mb-6">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border">
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-surface text-foreground font-mono text-xs hover:border-primary hover:text-primary transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{dict.certifications.openOriginal}</span>
                  </a>

                  {selectedCert.link && selectedCert.link !== "#" && (
                    <a
                      href={selectedCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-mono text-xs hover:opacity-90 transition-opacity font-semibold shadow-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{dict.certifications.verifyCredential}</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors ml-auto"
                >
                  [{dict.certifications.closeModal}]
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
