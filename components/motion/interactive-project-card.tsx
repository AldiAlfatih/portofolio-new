"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { ProjectItem } from "@/types/portfolio"
import { TechLogo } from "@/components/tech-logo"

interface InteractiveProjectCardProps {
  project: ProjectItem
  isEn: boolean
  dict: any
  onSelect: (project: ProjectItem) => void
  index: number
}

export default function InteractiveProjectCard({
  project,
  isEn,
  dict,
  onSelect,
  index,
}: InteractiveProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [canHover, setCanHover] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
    setCanHover(mq.matches)
    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Subtle 3D tilt for cards (±4 degrees max, strictly minimal and professional)
  const springCfg = { damping: 25, stiffness: 260 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springCfg)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springCfg)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !canHover || shouldReduceMotion) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3), ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: canHover && !shouldReduceMotion ? rotateX : 0,
          rotateY: canHover && !shouldReduceMotion ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className="group h-full flex flex-col justify-between rounded-3xl border border-border bg-card shadow-xs hover:border-primary/80 hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        <div>
          {/* Dominant Project Preview Banner with smooth zoom & shine sweep */}
          <div className="relative h-56 sm:h-64 w-full bg-surface-secondary overflow-hidden border-b border-border select-none">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Vignette gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

            {/* Subtle light sweep animation on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

            {/* Category pill */}
            <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-card/95 backdrop-blur-md border border-border text-[11px] font-mono font-bold text-primary shadow-xs">
                {project.category}
              </span>
            </div>

            {/* Role indicator */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-md border border-border text-xs font-mono text-foreground font-medium">
                {dict.projects.roleLabel}: {isEn && project.roleEn ? project.roleEn : project.role}
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-7">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
              {isEn && project.titleEn ? project.titleEn : project.title}
            </h3>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-sans mb-6 text-left sm:text-justify hyphens-auto">
              {isEn && project.descriptionEn ? project.descriptionEn : project.description}
            </p>

            {/* Technologies Used Block */}
            <div className="space-y-2 mb-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                {dict.projects.techUsed}:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-surface text-[11px] font-mono text-foreground hover:border-primary transition-colors"
                  >
                    <TechLogo name={tech} className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action Links */}
        <div className="px-6 sm:px-7 py-4 border-t border-border bg-surface/50 flex items-center justify-between">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:underline cursor-pointer group/btn"
          >
            <span>{dict.projects.caseStudyBtn}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>

          <div className="flex items-center gap-2">
            {project.demoUrl && project.demoUrl !== "#" && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface text-foreground hover:border-primary hover:text-primary text-xs font-mono transition-colors shadow-xs"
                title="Buka Demo / Tautan Hasil"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{dict.projects.demoBtn}</span>
              </a>
            )}
            {project.codeUrl && project.codeUrl !== "#" && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-surface text-foreground hover:border-primary hover:text-primary transition-colors shadow-xs"
                title="Lihat Repositori Kode"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
