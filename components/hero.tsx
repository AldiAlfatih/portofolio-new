"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Check,
  GraduationCap,
} from "lucide-react"
import { profileData } from "@/data/profile"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const { dict } = useLanguage()

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const quickNavLinks = [
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.skills, href: "#skills" },
    { label: dict.nav.experience, href: "#experience" },
    { label: dict.nav.projects, href: "#projects" },
    { label: dict.nav.achievements, href: "#achievements" },
    { label: dict.nav.certifications, href: "#certifications" },
  ]

  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center justify-center pt-28 pb-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Judie-style Profile Photo (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            <div className="relative w-64 h-72 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-border bg-card shadow-2xl group">
              <Image
                src="/pp-aldi.jpg"
                alt="Muhammad Aldi Alfatih, S.Kom."
                fill
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 320px, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

              {/* Status Badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-card/90 backdrop-blur-md border border-border/80 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-mono font-medium text-foreground">
                      {profileData.availability}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {dict.hero.parepareMakassar}
                  </span>
                </div>
              </div>
            </div>

            {/* Academic pill below photo */}
            <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-surface text-xs font-mono text-muted-foreground">
              <GraduationCap className="w-3.5 h-3.5 text-primary" />
              <span>S1 Ilmu Komputer ITH • IPK 3.93 • Wisudawan Terbaik</span>
            </div>
          </motion.div>

          {/* Right Column: Identity, Narrative & Quick Actions (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-surface text-xs font-mono text-primary mb-4">
              <span>{dict.hero.greeting}</span>
            </div>

            {/* Name & Academic Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground font-sans leading-tight mb-2">
              Muhammad Aldi Alfatih, <span className="text-primary font-mono text-2xl sm:text-3xl lg:text-4xl">S.Kom.</span>
            </h1>

            {/* Professional Positioning */}
            <div className="text-lg sm:text-xl font-bold text-primary font-sans mb-4">
              {dict.hero.title}
            </div>

            {/* Concrete Professional Description (Judie Mosinabre style) */}
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-sans mb-6 max-w-2xl mx-auto lg:mx-0">
              {dict.hero.bio}
            </p>

            {/* Judie-style Quick Action Navigation Pills */}
            <div className="mb-8">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2.5">
                {dict.hero.exploreProfile}:
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {quickNavLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="px-3.5 py-1.5 rounded-full border border-border bg-surface text-xs font-mono text-foreground hover:border-primary hover:text-primary transition-all shadow-xs"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "#projects")}
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-xs sm:text-sm transition-all duration-200 hover:opacity-90 shadow-md inline-flex items-center gap-2"
              >
                <span>{dict.hero.viewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profileData.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-border bg-surface text-foreground font-medium text-xs sm:text-sm transition-all duration-200 hover:border-primary hover:text-primary shadow-xs inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-primary" />
                <span>{dict.hero.downloadCV}</span>
              </a>
            </div>

            {/* Social Channels with Copy Interaction */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono pt-4 border-t border-border">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface hover:border-primary hover:text-primary transition-colors text-foreground"
              >
                <Github className="w-3.5 h-3.5 text-primary" />
                <span>GitHub</span>
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface hover:border-primary hover:text-primary transition-colors text-foreground"
              >
                <Linkedin className="w-3.5 h-3.5 text-primary" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface hover:border-primary hover:text-primary transition-colors text-foreground"
                title="Salin email ke clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">{dict.hero.copied}</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    <span>{dict.hero.copyEmail}</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
