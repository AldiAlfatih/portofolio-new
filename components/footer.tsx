"use client"

import React from "react"
import { ArrowUp, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { profileData } from "@/data/profile"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerNavLinks = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Keahlian", href: "#skills" },
    { label: "Pengalaman", href: "#experience" },
    { label: "Proyek", href: "#projects" },
    { label: "Prestasi", href: "#achievements" },
    { label: "Sertifikasi", href: "#certifications" },
    { label: "Organisasi", href: "#organizations" },
    { label: "Kontak", href: "#contact" },
  ]

  return (
    <footer className="border-t border-border bg-card/80 text-foreground pt-16 pb-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border">
          {/* Brand & Positioning (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center font-mono font-bold text-xs text-foreground">
                <span className="text-accent">&lt;</span>A<span className="text-accent">/&gt;</span>
              </div>
              <div>
                <div className="font-bold text-base text-foreground font-sans tracking-tight">
                  {profileData.fullNameWithDegree}
                </div>
                <div className="text-xs font-mono text-accent">
                  {profileData.title}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm mb-6 font-sans">
              Personal engineering portfolio berorientasi rekayasa sistem cerdas (AI) dan arsitektur backend andal. Lulusan Institut Teknologi Bacharuddin Jusuf Habibie (ITH).
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-interactive-hover transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-interactive-hover transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="p-2 rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-interactive-hover transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (4 cols) */}
          <div className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
              Navigasi Halaman
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {footerNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/75 hover:text-accent transition-colors font-sans py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Location (3 cols) */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
              Koneksi & Domisili
            </div>
            <div className="text-xs space-y-2 text-foreground/80 font-sans">
              <div>
                <span className="text-muted-foreground font-mono block">Domisili:</span>
                <span>{profileData.contact.location}</span>
              </div>
              <div>
                <span className="text-muted-foreground font-mono block">Email Utama:</span>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="text-accent hover:underline break-all"
                >
                  {profileData.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div>
            © {currentYear} {profileData.name}, S.Kom. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors group"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
