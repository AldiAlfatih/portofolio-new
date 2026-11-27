"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Download,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  FileText,
  Globe,
} from "lucide-react"
import { profileData } from "@/data/profile"
import { useLanguage } from "@/contexts/language-context"

export default function Contact() {
  const { dict } = useLanguage()
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section id="contact" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider mb-2">
            <span>{dict.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {dict.contact.title}
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mt-2 font-mono">
            {dict.contact.subtitle}
          </p>
        </div>

        {/* Opportunity Announcement Card */}
        <div className="p-6 sm:p-7 rounded-3xl border border-border bg-card shadow-xs mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl border border-border bg-surface-secondary text-primary shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono font-semibold text-emerald-500 uppercase tracking-wider">
                  {dict.contact.openToOpportunities}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-sans max-w-xl">
                {dict.contact.openToOpportunitiesDesc}
              </p>
            </div>
          </div>

          <a
            href={`mailto:${profileData.contact.email}?subject=Collaboration%20Inquiry%20-%20Muhammad%20Aldi%20Alfatih`}
            className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-mono text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap self-start sm:self-center shadow-xs"
          >
            Kirim Email / Contact
          </a>
        </div>

        {/* Communication Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {/* Email Channel Card */}
          <div className="p-6 rounded-3xl border border-border bg-card shadow-xs flex flex-col justify-between hover:border-primary transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl border border-border bg-surface-secondary text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg border border-border bg-surface text-[11px] font-mono hover:border-primary hover:text-primary transition-colors flex items-center gap-1.5"
                  title="Salin alamat email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">{dict.contact.copiedBtn}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-primary" />
                      <span>{dict.contact.copyBtn}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                {dict.contact.emailTitle}
              </div>
              <div className="text-sm sm:text-base font-bold text-foreground font-mono break-all mb-4">
                {profileData.contact.email}
              </div>
            </div>

            <a
              href={`mailto:${profileData.contact.email}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:underline pt-3 border-t border-border/60"
            >
              <span>Buka Aplikasi Email</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Location & Residence Card */}
          <div className="p-6 rounded-3xl border border-border bg-card shadow-xs flex flex-col justify-between hover:border-primary transition-all">
            <div>
              <div className="p-2.5 rounded-xl border border-border bg-surface-secondary text-primary w-fit mb-3">
                <MapPin className="w-5 h-5" />
              </div>

              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                {dict.contact.locationTitle}
              </div>
              <div className="text-sm sm:text-base font-bold text-foreground font-sans mb-2">
                {dict.contact.locationVal}
              </div>
              <p className="text-xs text-muted-foreground font-sans">
                Terbuka untuk pekerjaan on-site di wilayah Sulawesi Selatan maupun kerja jarak jauh (Remote / Hybrid).
              </p>
            </div>

            <div className="text-[11px] font-mono text-muted-foreground pt-3 border-t border-border/60">
              Waktu Lokal: WITA (UTC+8)
            </div>
          </div>
        </div>

        {/* Social & Venture Profiles Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {/* GitHub Profile */}
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-3xl border border-border bg-card shadow-xs hover:border-primary transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl border border-border bg-surface-secondary text-primary">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted-foreground">GitHub</div>
                <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  @AldiAlfatih
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          {/* LinkedIn Profile */}
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-3xl border border-border bg-card shadow-xs hover:border-primary transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl border border-border bg-surface-secondary text-primary">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted-foreground">LinkedIn</div>
                <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  in/aldialfatih
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          {/* Instagram Profile */}
          <a
            href={profileData.contact.instagram || "https://instagram.com/aldialf_"}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-3xl border border-border bg-card shadow-xs hover:border-primary transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl border border-border bg-surface-secondary text-primary">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted-foreground">Instagram</div>
                <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  @aldialf_
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          {/* OgiTech Software House */}
          {profileData.ogitechUrl && (
            <a
              href={profileData.ogitechUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl border border-border bg-card shadow-xs hover:border-primary transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl border border-border bg-surface-secondary text-primary shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-muted-foreground">Software House</div>
                  <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
                    OgiTech
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>
          )}
        </div>

        {/* Documents Row: CV PDF & Portfolio Deck on Google Drive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Curriculum Vitae Download */}
          <a
            href={profileData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-3xl border border-border bg-card shadow-xs hover:border-primary transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl border border-border bg-surface-secondary text-primary">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted-foreground">Resume / CV</div>
                <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  Unduh Dokumen PDF
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>

          {/* Google Drive Portfolio Deck */}
          {profileData.portfolioDriveUrl && (
            <a
              href={profileData.portfolioDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl border border-border bg-card shadow-xs hover:border-primary transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl border border-border bg-surface-secondary text-primary">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground">
                    {dict.contact.portfolioDeckLabel}
                  </div>
                  <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {dict.contact.portfolioDeckSub}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
