"use client"

import React, { useEffect, useState } from "react"
import { RibbonTrail } from "@/components/ui/ribbon-trail"

export function GlobalCursor() {
  const [isPointerFine, setIsPointerFine] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mq = window.matchMedia("(pointer: fine)")
    setIsPointerFine(mq.matches)

    const handler = (e: MediaQueryListEvent) => setIsPointerFine(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  if (!mounted || !isPointerFine) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      <RibbonTrail
        className="w-full h-full"
        themeAdaptive={true}
        width={26}
        trail={1.8}
        bounce={0.35}
        flick={true}
        autoplay={false}
      />
    </div>
  )
}

export default GlobalCursor
