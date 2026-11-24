"use client"

import { useState, useEffect } from "react"
import { useScroll, motion, useSpring, useReducedMotion } from "framer-motion"

export default function ScrollProgress() {
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 28,
    restDelta: 0.001,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || shouldReduceMotion) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-primary z-[120] origin-left shadow-xs pointer-events-none"
      style={{ scaleX }}
    />
  )
}

