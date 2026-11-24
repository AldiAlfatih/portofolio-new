"use client"

import React, { useEffect, useRef } from "react"
import Lenis from "lenis"
import "lenis/dist/lenis.css"

interface SmoothScrollProviderProps {
  children: React.ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Respect user's motion preferences
    if (typeof window === "undefined") return
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.8,
    })

    lenisRef.current = lenis

    // Global listener for smooth anchor navigation (#about, #projects, etc.)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")
      if (
        anchor &&
        anchor.hash &&
        anchor.hash.startsWith("#") &&
        anchor.origin === window.location.origin
      ) {
        const elem = document.querySelector(anchor.hash) as HTMLElement
        if (elem) {
          e.preventDefault()
          lenis.scrollTo(elem, {
            offset: -76,
            duration: 1.1,
          })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}
