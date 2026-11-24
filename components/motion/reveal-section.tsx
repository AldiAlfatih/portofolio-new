"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { blurReveal, fadeUp, TRANSITION_EASE_OUT } from "@/lib/motion"

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
  variant?: "blur" | "fadeUp"
  delay?: number
  duration?: number
}

export default function RevealSection({
  children,
  className = "",
  variant = "blur",
  delay = 0,
  duration = 0.55,
}: RevealSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  const selectedVariant = variant === "blur" ? blurReveal : fadeUp

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={selectedVariant}
      transition={{ duration, delay, ease: TRANSITION_EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
