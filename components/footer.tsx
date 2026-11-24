"use client"

import React from "react"
import { ArrowUp, Github, Linkedin, Instagram, Mail } from "lucide-react"
import { profileData } from "@/data/profile"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { dict } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerNavLinks = [
    { label: dict.nav.home, href: "#home" },
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.skills, href: "#skills" },
    { label: dict.nav.experience, href: "#experience" },
    { label: dict.nav.projects, href: "#projects" },
    { label: dict.nav.achievements, href: "#achievements" },
    { label: dict.nav.certifications, href: "#certifications" },
    { label: dict.nav.organizations, href: "#organizations" },
    { label: dict.nav.contact, href: "#contact" },
  ]

  return (
    <footer className="border-t border-border bg-card/80 text-foreground pt-16 pb-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border">
          {/* Brand & Wordmark (Clean Typography) */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <div className="font-extrabold text-lg text-foreground font-sans tracking-tight mb-1">
                Muhammad Aldi Alfatih, S.Kom<span className="text-primary">.</span>
              </div>
              <div className="text-xs font-mono text-muted-foreground">
                AI Engineer & Software Engineer
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm mb-6 font-sans">
              {dict.footer.tagline}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              {profileData.contact.instagram && (
                <a
                  href={profileData.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              <a
                href={`mailto:${profileData.contact.email}`}
                className="p-2 rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (4 cols) */}
          <div className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
              {dict.footer.quickNav}
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {footerNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/75 hover:text-primary transition-colors font-sans py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Location (3 cols) */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
              {dict.footer.contactInfo}
            </div>
            <div className="text-xs space-y-2 text-foreground/80 font-sans">
              <div>
                <span className="text-muted-foreground font-mono block">{dict.footer.locationLabel}:</span>
                <span>{profileData.contact.location}</span>
              </div>
              <div>
                <span className="text-muted-foreground font-mono block">{dict.footer.emailLabel}:</span>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="text-primary hover:underline break-all"
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
            © {currentYear} {profileData.name}, S.Kom. {dict.footer.rights}
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors group"
          >
            <span>{dict.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
