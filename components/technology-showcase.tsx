"use client"

import React from "react"
import { motion } from "framer-motion"
import { TechLogo } from "@/components/tech-logo"
import { useLanguage } from "@/contexts/language-context"

const coreTechnologies = [
  { name: "Python", color: "#3776AB" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "Keras", color: "#D00000" },
  { name: "MediaPipe", color: "#0097A7" },
  { name: "OpenCV", color: "#5C3EE8" },
  { name: "Scikit-Learn", color: "#F7931E" },
  { name: "Laravel", color: "#FF2D20" },
  { name: "PHP", color: "#777BB4" },
  { name: "FastAPI", color: "#059669" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MySQL", color: "#4479A1" },
  { name: "Docker", color: "#2496ED" },
  { name: "Git & GitHub", color: "#F05032" },
  { name: "Power BI", color: "#D97706" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Flutter", color: "#02569B" },
  { name: "Supabase", color: "#3FCF8E" },
  { name: "React", color: "#087EA4" },
  { name: "Vue.js", color: "#4FC08D" },
  { name: "Inertia.js", color: "#9553E9" },
  { name: "ESP32", color: "#E7352C" },
  { name: "PuTTY", color: "#059669" },
]

export default function TechnologyShowcase() {
  const { dict } = useLanguage()

  return (
    <div className="py-12 border-y border-border bg-surface/40">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold">
              {dict.techStack.badge}
            </span>
            <h3 className="text-lg font-bold text-foreground">
              {dict.techStack.title}
            </h3>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            {dict.techStack.subtitle}
          </p>
        </div>

        {/* Clean Logo Grid (No Generic Sub-Descriptions) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {coreTechnologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.02 }}
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-border bg-card shadow-xs hover:border-primary transition-all group"
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border border-border/60 transition-colors"
                style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
              >
                <TechLogo name={tech.name} className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-foreground truncate group-hover:text-primary transition-colors font-sans">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
