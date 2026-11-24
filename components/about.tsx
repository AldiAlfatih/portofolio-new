"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  GraduationCap,
  Award,
  Layers,
  Cpu,
  Database,
  Download,
  CheckCircle2,
  ExternalLink,
} from "lucide-react"
import { profileData } from "@/data/profile"

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-border/60">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
            <span>01 // PROFIL & REKAYASA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Tentang Saya
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mt-2 font-mono">
            Kombinasi fondasi analitis kecerdasan buatan dan ketahanan arsitektur backend.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Education Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            {/* Professional Portrait Frame */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl p-2 border border-border bg-card shadow-xl group">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-surface-secondary">
                <Image
                  src="/pp-aldi.jpg"
                  alt="Muhammad Aldi Alfatih, S.Kom."
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>

              {/* Verified Degree Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full border border-border bg-surface text-foreground shadow-md flex items-center gap-1.5 whitespace-nowrap">
                <GraduationCap className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-mono font-bold">S.Kom. • IPK 3.93</span>
              </div>
            </div>

            {/* Academic Detail Card */}
            <div className="w-full max-w-sm mt-8 p-4 rounded-xl border border-border bg-card shadow-xs text-xs space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <span className="font-mono text-muted-foreground">Institusi:</span>
                <span className="font-semibold text-foreground text-right">
                  Institut Teknologi B.J. Habibie (ITH)
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <span className="font-mono text-muted-foreground">Program Studi:</span>
                <span className="font-semibold text-foreground">S1 Ilmu Komputer</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-muted-foreground">Status / Periode:</span>
                <span className="font-mono text-accent font-semibold">Fresh Graduate (2022–2026)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Stats (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Membangun Solusi Cerdas yang Berdampak Nyata
            </h3>

            <div className="space-y-4 text-foreground/80 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Saya adalah lulusan Sarjana Komputer dari{" "}
                <strong className="text-foreground font-semibold">
                  Institut Teknologi Bacharuddin Jusuf Habibie (ITH)
                </strong>{" "}
                dengan predikat kelulusan sangat memuaskan (IPK 3.93/4.00). Fokus rekayasa saya
                berpusat pada dua pilar saling melengkapi:{" "}
                <span className="text-accent font-semibold">Artificial Intelligence</span> dan{" "}
                <span className="text-accent font-semibold">Backend Development</span>.
              </p>
              <p>
                Di ranah AI, saya terbiasa mengawal siklus hidup model mulai dari kurasi dataset
                primer di lapangan, anotasi presisi, pelatihan arsitektur neural (Computer Vision,
                LSTM time-series), hingga konversi on-device untuk inferensi cepat tanpa latensi awan
                (seperti pada proyek <strong className="text-foreground">ISARA</strong> yang didanai PKM-KC DIKTI).
              </p>
              <p>
                Di ranah backend, saya merancang logika bisnis enterprise, arsitektur database
                ternormalisasi pada PostgreSQL, dan RESTful API terstruktur (seperti implementasi
                sistem <strong className="text-foreground">E-Monev</strong> untuk Bappeda Kota Parepare).
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {profileData.stats.map((s, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-border bg-surface-secondary/70 hover:border-interactive-hover transition-colors"
                >
                  <div className="text-2xl font-extrabold text-foreground font-mono">
                    {s.value}
                  </div>
                  <div className="text-xs font-semibold text-foreground/90 mt-0.5">
                    {s.label}
                  </div>
                  {s.sublabel && (
                    <div className="text-[10px] font-mono text-muted-foreground mt-0.5">
                      {s.sublabel}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Technical Highlights & CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={profileData.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-xs hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                Unduh CV Lengkap
              </a>

              <a
                href="#experience"
                className="px-5 py-2.5 rounded-xl border border-border bg-surface text-foreground font-medium text-xs hover:border-interactive-hover hover:text-accent transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                Lihat Rekam Jejak Pengalaman
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
