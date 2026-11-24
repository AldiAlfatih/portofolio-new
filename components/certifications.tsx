"use client"

import React, { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Calendar,
  ExternalLink,
  ShieldCheck,
  Maximize2,
  X,
  Eye,
  FileText,
  Search,
  Award,
  Sparkles,
} from "lucide-react"
import { certificationsData } from "@/data/certifications"
import { CertificationItem } from "@/types/portfolio"
import { useLanguage } from "@/contexts/language-context"
import { TechLogo } from "@/components/tech-logo"

export default function Certifications() {
  const { dict, language } = useLanguage()
  const isEn = language === "en"
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

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

  const categories = [
    { id: "all", label: isEn ? "All" : "Semua" },
    { id: "ai_ml", label: "AI & Machine Learning" },
    { id: "cloud_backend", label: "Cloud & Backend" },
    { id: "software_web", label: "Software & Web" },
    { id: "data_gis", label: "Data & GIS" },
  ]

  const filteredCerts = useMemo(() => {
    return certificationsData.filter((item) => {
      const matchCat = activeCategory === "all" || item.category === activeCategory
      const q = searchQuery.toLowerCase().trim()
      const matchSearch =
        q === "" ||
        item.title.toLowerCase().includes(q) ||
        (item.titleEn && item.titleEn.toLowerCase().includes(q)) ||
        item.issuer.toLowerCase().includes(q) ||
        item.credentialId.toLowerCase().includes(q) ||
        item.skills.some((s) => s.toLowerCase().includes(q))
      return matchCat && matchSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <section id="certifications" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>{dict.certifications.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {dict.certifications.title}
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mt-2 font-mono">
            {dict.certifications.subtitle}
          </p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-border">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl border border-border bg-surface text-xs font-mono">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              const count =
                cat.id === "all"
                  ? certificationsData.length
                  : certificationsData.filter((c) => c.category === cat.id).length
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-3 py-1.5 rounded-lg transition-colors ${
                    isActive ? "text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeCertTabPill"
                      className="absolute inset-0 rounded-lg bg-primary shadow-xs -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    {cat.label} ({count})
                  </span>
                </button>
              )
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEn ? "Search certificate, skill..." : "Cari sertifikat, skill..."}
              className="w-full pl-9 pr-3.5 py-1.5 rounded-xl border border-border bg-surface text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors font-sans"
            />
          </div>
        </div>

        {/* Certifications Grid with Equal Height */}
        {filteredCerts.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-border rounded-2xl bg-surface/40">
            <Award className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-60" />
            <h4 className="text-base font-bold text-foreground">
              {isEn ? "No certificates found" : "Sertifikat tidak ditemukan"}
            </h4>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
              {isEn
                ? "Try adjusting your search query or category filter."
                : "Coba ubah kata kunci pencarian atau ganti filter kategori."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredCerts.map((cert, idx) => (
              <motion.div
                key={cert.credentialId + idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.25) }}
                className="h-full flex flex-col justify-between p-5 rounded-3xl border border-border bg-card shadow-xs hover:border-primary/80 hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  {/* Real Certificate Image Preview */}
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
                    {isEn && cert.titleEn ? cert.titleEn : cert.title}
                  </h3>
                  <div className="text-xs font-semibold text-accent mb-2 font-sans">
                    {isEn && cert.issuerEn ? cert.issuerEn : cert.issuer}
                  </div>

                  {/* Date & Credential ID */}
                  <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] font-mono text-muted-foreground mb-3 pb-2.5 border-b border-border/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-primary" />
                      {cert.date.split("–")[0].trim()}
                    </span>
                    <span className="truncate max-w-[150px]">ID: {cert.credentialId}</span>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.map((s, sIdx) => (
                      <span key={sIdx} className="tech-tag text-[9px] py-0.5 px-2">
                        <TechLogo name={s} className="w-2.5 h-2.5" size={10} />
                        <span>{s}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-border flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:underline"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{dict.certifications.viewCert}</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    {/* Direct Official PDF link */}
                    {cert.pdfUrl && (
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-border bg-surface text-foreground hover:border-primary hover:text-primary text-[11px] font-mono transition-colors shadow-xs"
                        title={isEn ? "Open Original PDF Document" : "Buka Dokumen PDF Asli"}
                      >
                        <FileText className="w-3 h-3 text-primary" />
                        <span>PDF</span>
                      </a>
                    )}

                    {/* Online Verification Link */}
                    {cert.link && cert.link !== "#" && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg border border-border bg-surface text-foreground hover:border-primary hover:text-primary transition-colors shadow-xs"
                        title={dict.certifications.verifyCredential}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
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
              initial={{ opacity: 0, scale: 0.94, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.94, y: 16, filter: "blur(4px)" }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
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
                  {isEn && selectedCert.titleEn ? selectedCert.titleEn : selectedCert.title}
                </h3>
                <p className="text-xs sm:text-sm text-accent font-sans mt-0.5">
                  {isEn && selectedCert.issuerEn ? selectedCert.issuerEn : selectedCert.issuer} • {selectedCert.date}
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
                  {/* View / Download Official PDF */}
                  {selectedCert.pdfUrl && (
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-mono text-xs hover:opacity-90 transition-opacity font-semibold shadow-xs"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{isEn ? "Open Official PDF Document" : "Buka Dokumen PDF Asli"}</span>
                    </a>
                  )}

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
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-surface text-foreground font-mono text-xs hover:border-primary hover:text-primary transition-colors font-medium shadow-xs"
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
