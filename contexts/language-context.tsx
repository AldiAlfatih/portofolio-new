"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useMemo } from "react"

type Language = "id" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

// Optimized translations - only load what's needed
const getTranslations = (lang: Language) => {
  const translations = {
    id: {
      // Navigation
      "nav.home": "Beranda",
      "nav.about": "Tentang",
      "nav.experience": "Pengalaman",
      "nav.organizations": "Organisasi",
      "nav.certifications": "Sertifikasi",
      "nav.skills": "Keahlian AI",
      "nav.projects": "Proyek AI",
      "nav.testimonials": "Testimonial",
      "nav.contact": "Kontak",
      "nav.achievements": "Prestasi", // New translation for achievements

      // Hero
      "hero.title": "AI Engineer",
      "hero.subtitle": "Spesialis Machine Learning & Deep Learning",
      "hero.description":
        "Membangun solusi AI yang inovatif dengan teknologi terdepan untuk masa depan yang lebih cerdas",
      "hero.downloadCV": "Unduh CV AI Engineer",

      // About
      "about.title": "Tentang AI Engineer",
      "about.description1":
        "Saya adalah seorang AI Engineer yang berspesialisasi dalam pengembangan solusi kecerdasan buatan yang inovatif. Dengan pengalaman mendalam dalam Machine Learning, Deep Learning, dan Computer Vision.",
      "about.description2":
        "Saya memiliki passion untuk mengubah data menjadi insights yang berharga dan membangun model AI yang dapat memberikan dampak nyata dalam berbagai industri. Dari Natural Language Processing hingga Computer Vision, saya terus mengeksplorasi frontier teknologi AI terbaru.",

      // Experience
      "experience.title": "Pengalaman Profesional",

      // Organizations
      "organizations.title": "Riwayat Organisasi & Komunitas",

      // Skills
      "skills.title": "Keahlian AI & Technology Stack",

      // Projects
      "projects.title": "Proyek AI & Machine Learning",

      // Certifications
      "certifications.title": "Sertifikasi & Kredensial AI",

      // Testimonials
      "testimonials.title": "Testimoni Klien & Partner",

      // Contact
      "contact.title": "Mari Berkolaborasi dalam AI",
      "contact.description":
        "Tertarik untuk mengembangkan solusi AI yang inovatif? Mari diskusikan bagaimana teknologi kecerdasan buatan dapat mentransformasi bisnis Anda.",
      "contact.consultation": "Konsultasi AI",
      "contact.project": "Proyek AI",
      "contact.meeting": "Meeting",
      "contact.form.title": "Hubungi Saya",
      "contact.form.subtitle": "Ada yang ingin didiskusikan? Kirim pesan ke saya!",
      "contact.form.name": "Nama Anda",
      "contact.form.email": "Email Anda",
      "contact.form.message": "Pesan Anda",
      "contact.form.send": "Kirim Pesan",
    },
    en: {
      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.organizations": "Organizations",
      "nav.certifications": "Certifications",
      "nav.skills": "AI Skills",
      "nav.projects": "AI Projects",
      "nav.testimonials": "Testimonials",
      "nav.contact": "Contact",
      "nav.achievements": "Achievements", // New translation for achievements

      // Hero
      "hero.title": "AI Engineer",
      "hero.subtitle": "Machine Learning & Deep Learning Specialist",
      "hero.description": "Building innovative AI solutions with cutting-edge technology for a smarter future",
      "hero.downloadCV": "Download AI Engineer CV",

      // About
      "about.title": "About AI Engineer",
      "about.description1":
        "I am an AI Engineer specializing in developing innovative artificial intelligence solutions. With deep experience in Machine Learning, Deep Learning, and Computer Vision.",
      "about.description2":
        "I have a passion for transforming data into valuable insights and building AI models that can make a real impact across various industries. From Natural Language Processing to Computer Vision, I continue to explore the latest frontiers of AI technology.",

      // Experience
      "experience.title": "Professional Experience",

      // Organizations
      "organizations.title": "Organizational & Community History",

      // Skills
      "skills.title": "AI Skills & Technology Stack",

      // Projects
      "projects.title": "AI & Machine Learning Projects",

      // Certifications
      "certifications.title": "AI Certifications & Credentials",

      // Testimonials
      "testimonials.title": "Client & Partner als",

      // Contact
      "contact.title": "Let's Collaborate in AI",
      "contact.description":
        "Interested in developing innovative AI solutions? Let's discuss how artificial intelligence technology can transform your business.",
      "contact.consultation": "AI Consultation",
      "contact.project": "AI Project",
      "contact.meeting": "Meeting",
      "contact.form.title": "Contact Me",
      "contact.form.subtitle": "Have something to discuss? Send me a message!",
      "contact.form.name": "Your Name",
      "contact.form.email": "Your Email",
      "contact.form.message": "Your Message",
      "contact.form.send": "Send Message",
    },
  }

  return translations[lang]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "id" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
  }, [language])

  // Memoize translations to avoid recalculation
  const translations = useMemo(() => getTranslations(language), [language])

  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key
  }

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language],
  )

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
