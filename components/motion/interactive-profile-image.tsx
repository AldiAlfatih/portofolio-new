"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { MapPin, GraduationCap, Sparkles } from "lucide-react"
import { GlareCard } from "@/components/ui/glare-card"
import { cn } from "@/lib/utils"

interface InteractiveProfileImageProps {
  imageSrc: string
  alt: string
  availabilityText: string
  locationText: string
  academicPillText: string
  className?: string
}

export default function InteractiveProfileImage({
  imageSrc,
  alt,
  availabilityText,
  locationText,
  academicPillText,
  className,
}: InteractiveProfileImageProps) {
  const shouldReduceMotion = useReducedMotion()
  const [canHover, setCanHover] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
    setCanHover(mq.matches)
    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={cn("flex flex-col items-center lg:items-start group relative", className)}
    >
      {/* Dynamic Ambient Theme Glow Backdrop (Lampu Halo) */}
      <div
        className="absolute -inset-6 rounded-[50px] opacity-60 blur-3xl pointer-events-none transition-opacity duration-700 group-hover:opacity-90"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--primary) 0%, var(--secondary) 40%, transparent 75%)",
        }}
      />

      {/* Aceternity 3D Glare Card */}
      <GlareCard
        className="w-72 h-[380px] sm:w-80 sm:h-[430px] lg:w-[330px] lg:h-[440px] shadow-2xl border border-border/80 bg-card"
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        perspective={1100}
        glareOpacity={0.65}
      >
        <div className="relative w-full h-full">
          {/* Profile Photo */}
          <Image
            src={imageSrc}
            alt={alt}
            fill
            priority
            sizes="(max-width: 768px) 288px, 340px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

          {/* Floating Top-Right Technology Chip (3D elevated) */}
          <div
            className="absolute top-3.5 right-3.5 z-20 pointer-events-none transition-transform duration-300"
            style={{
              transform: canHover && !shouldReduceMotion ? "translateZ(30px)" : "none",
            }}
          >
            <div className="px-3 py-1 rounded-full bg-black/60 dark:bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-3 h-3 text-primary drop-shadow-[0_0_8px_var(--primary)] animate-pulse" />
              <span>AI & Software</span>
            </div>
          </div>

          {/* Floating Status & Location Glass Card (3D elevated forward) */}
          <div
            className="absolute bottom-3.5 left-3.5 right-3.5 z-20 pointer-events-auto transition-transform duration-300"
            style={{
              transform: canHover && !shouldReduceMotion ? "translateZ(45px)" : "none",
            }}
          >
            <div className="p-3 sm:p-3.5 rounded-2xl bg-card/90 dark:bg-card/85 backdrop-blur-xl border border-border/80 shadow-2xl text-card-foreground">
              <div className="flex flex-col gap-2">
                {/* Availability status with glowing emerald live neon lamp */}
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="relative flex h-3 w-3 shrink-0 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_10px_#10b981,0_0_20px_#10b981]" />
                  </span>
                  <span className="text-xs font-mono font-bold text-foreground truncate tracking-tight">
                    {availabilityText}
                  </span>
                </div>

                {/* Location pill */}
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-primary pt-2 border-t border-border/80 min-w-0">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="truncate text-primary">{locationText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlareCard>

      {/* Academic Pill (Below the card) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card/95 backdrop-blur-md shadow-sm text-xs font-mono text-foreground font-semibold hover:border-primary transition-colors"
      >
        <GraduationCap className="w-4 h-4 text-primary shrink-0" />
        <span>{academicPillText}</span>
      </motion.div>
    </motion.div>
  )
}
