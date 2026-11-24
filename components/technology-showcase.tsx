"use client"

import React from "react"
import { motion } from "framer-motion"
import { TechLogo } from "@/components/tech-logo"
import { useLanguage } from "@/contexts/language-context"

const coreTechnologies = [
  {
    name: "Python",
    category: "AI & Backend",
    color: "#3776AB",
  },
  {
    name: "TensorFlow",
    category: "Deep Learning",
    color: "#FF6F00",
  },
  {
    name: "Keras",
    category: "Neural Networks",
    color: "#D00000",
  },
  {
    name: "MediaPipe",
    category: "Computer Vision",
    color: "#0097A7",
  },
  {
    name: "OpenCV",
    category: "Image Processing",
    color: "#5C3EE8",
  },
  {
    name: "Scikit-Learn",
    category: "Machine Learning",
    color: "#F7931E",
  },
  {
    name: "Laravel",
    category: "Backend MVC",
    color: "#FF2D20",
  },
  {
    name: "PostgreSQL",
    category: "Relational DB",
    color: "#4169E1",
  },
  {
    name: "Docker",
    category: "Containerization",
    color: "#2496ED",
  },
  {
    name: "TypeScript",
    category: "Type-Safe Web",
    color: "#3178C6",
  },
  {
    name: "React",
    category: "Frontend UI",
    color: "#61DAFB",
  },
  {
    name: "Inertia.js",
    category: "Fullstack Adapter",
    color: "#9553E9",
  },
  {
    name: "Vue.js",
    category: "Reactive Frontend",
    color: "#4FC08D",
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    color: "#F05032",
  },
  {
    name: "FastAPI",
    category: "High-Perf API",
    color: "#059669",
  },
  {
    name: "Power BI",
    category: "BI & Analytics",
    color: "#D97706",
  },
  {
    name: "ESP32",
    category: "IoT Hardware",
    color: "#E7352C",
  },
]

export default function TechnologyShowcase() {
  const { dict } = useLanguage()

  return (
    <div className="py-12 border-y border-border bg-surface/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
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

        {/* Visual Technology Badges with official brand SVG logos (Judie Mosinabre style) */}
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
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-border/80 shadow-xs transition-colors"
                style={{ backgroundColor: `${tech.color}18`, color: tech.color }}
              >
                <TechLogo name={tech.name} className="w-4 h-4" />
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
