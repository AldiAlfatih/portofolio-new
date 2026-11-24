"use client"

import React from "react"
import { motion } from "framer-motion"

interface TechLogo {
  name: string
  category: string
  color: string
  svgPath: string
}

const coreTechnologies = [
  {
    name: "Python",
    category: "AI & Backend",
    color: "#3776AB",
    abbr: "PY",
  },
  {
    name: "TensorFlow",
    category: "Deep Learning",
    color: "#FF6F00",
    abbr: "TF",
  },
  {
    name: "Keras",
    category: "Neural Networks",
    color: "#D00000",
    abbr: "KR",
  },
  {
    name: "MediaPipe",
    category: "Computer Vision",
    color: "#0097A7",
    abbr: "MP",
  },
  {
    name: "OpenCV",
    category: "Image Processing",
    color: "#5C3EE8",
    abbr: "CV",
  },
  {
    name: "Scikit-Learn",
    category: "Machine Learning",
    color: "#F7931E",
    abbr: "SK",
  },
  {
    name: "Laravel",
    category: "Backend MVC",
    color: "#FF2D20",
    abbr: "LV",
  },
  {
    name: "PostgreSQL",
    category: "Relational DB",
    color: "#4169E1",
    abbr: "PG",
  },
  {
    name: "Docker",
    category: "Containerization",
    color: "#2496ED",
    abbr: "DK",
  },
  {
    name: "TypeScript",
    category: "Type-Safe Web",
    color: "#3178C6",
    abbr: "TS",
  },
  {
    name: "React",
    category: "Frontend UI",
    color: "#61DAFB",
    abbr: "RE",
  },
  {
    name: "Inertia.js",
    category: "Fullstack Adapter",
    color: "#9553E9",
    abbr: "IN",
  },
  {
    name: "Vue.js",
    category: "Reactive Frontend",
    color: "#4FC08D",
    abbr: "VU",
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    color: "#F05032",
    abbr: "GT",
  },
  {
    name: "ESP32",
    category: "IoT Hardware",
    color: "#E7352C",
    abbr: "ES",
  },
]

export default function TechnologyShowcase() {
  return (
    <div className="py-12 border-y border-border bg-surface/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Core Technical Stack
            </span>
            <h3 className="text-lg font-bold text-foreground">
              Teknologi & Platform Utama
            </h3>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            Instrumen rekayasa aktual yang digunakan pada proyek AI, web, dan sistem cerdas.
          </p>
        </div>

        {/* Visual Technology Badges (Judie Mosinabre style) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {coreTechnologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card shadow-xs hover:border-primary transition-all group"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs text-white shrink-0 shadow-xs"
                style={{ backgroundColor: tech.color }}
              >
                {tech.abbr}
              </div>
              <div className="truncate">
                <div className="text-xs font-bold text-foreground truncate group-hover:text-primary transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] font-mono text-muted-foreground truncate">
                  {tech.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
