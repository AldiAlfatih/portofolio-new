"use client"

import React, { useRef, useState, useCallback, useEffect } from "react"
import { cn } from "@/lib/utils"

interface GlareCardProps {
  children: React.ReactNode
  className?: string
  aspectRatio?: string
  glareOpacity?: number
  tiltMaxAngleX?: number
  tiltMaxAngleY?: number
  perspective?: number
  themeColor?: string
  onClick?: () => void
}

export function GlareCard({
  children,
  className,
  aspectRatio = "3/4",
  glareOpacity = 0.55,
  tiltMaxAngleX = 14,
  tiltMaxAngleY = 14,
  perspective = 1000,
  themeColor,
  onClick,
}: GlareCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [canHover, setCanHover] = useState(false)
  const [coords, setCoords] = useState({ x: 50, y: 50, rotateX: 0, rotateY: 0 })

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
    setCanHover(mq.matches)
    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!containerRef.current || !canHover) return
      const rect = containerRef.current.getBoundingClientRect()
      const clientX = e.clientX - rect.left
      const clientY = e.clientY - rect.top

      const percentX = (clientX / rect.width) * 100
      const percentY = (clientY / rect.height) * 100

      // Normalize from -1 to 1
      const normX = (clientX / rect.width - 0.5) * 2
      const normY = (clientY / rect.height - 0.5) * 2

      const rotateY = normX * tiltMaxAngleY
      const rotateX = -normY * tiltMaxAngleX

      setCoords({
        x: percentX,
        y: percentY,
        rotateX,
        rotateY,
      })
    },
    [canHover, tiltMaxAngleX, tiltMaxAngleY]
  )

  const handlePointerEnter = useCallback(() => {
    if (canHover) setIsHovered(true)
  }, [canHover])

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false)
    setCoords({ x: 50, y: 50, rotateX: 0, rotateY: 0 })
  }, [])

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
      className={cn(
        "relative rounded-3xl transition-transform duration-300 ease-out select-none",
        className
      )}
      style={{
        perspective: `${perspective}px`,
      }}
    >
      {/* 3D Shell */}
      <div
        className="relative w-full h-full rounded-3xl overflow-hidden transition-all duration-300 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered
            ? `rotateX(${coords.rotateX.toFixed(2)}deg) rotateY(${coords.rotateY.toFixed(2)}deg) translateZ(10px)`
            : "rotateX(0deg) rotateY(0deg) translateZ(0px)",
          boxShadow: isHovered
            ? `${-coords.rotateY * 2.5}px ${coords.rotateX * 2.5 + 18}px 45px -12px rgba(0, 0, 0, 0.45)`
            : "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Child Content (Image, badges, layers) */}
        <div className="relative w-full h-full overflow-hidden rounded-3xl z-10">
          {children}
        </div>

        {/* Specular Radial Glare Highlight */}
        {canHover && (
          <div
            className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
            style={{
              opacity: isHovered ? glareOpacity : 0,
              background: `radial-gradient(circle 320px at ${coords.x.toFixed(1)}% ${coords.y.toFixed(1)}%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 30%, transparent 75%)`,
              mixBlendMode: "overlay",
            }}
          />
        )}

        {/* Diagonal Iridescent Gloss Beam */}
        {canHover && (
          <div
            className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-500"
            style={{
              opacity: isHovered ? 0.35 : 0,
              background: `linear-gradient(${115 + coords.rotateY * 1.5}deg, transparent 30%, rgba(255, 255, 255, 0.4) 48%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.4) 52%, transparent 70%)`,
              mixBlendMode: "color-dodge",
            }}
          />
        )}

        {/* High-tech Edge Rim Lighting Border */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-40 border border-white/20 dark:border-white/15 transition-opacity duration-300"
          style={{
            borderColor: isHovered ? "var(--primary)" : undefined,
            opacity: isHovered ? 0.8 : 0.4,
          }}
        />
      </div>
    </div>
  )
}

export default GlareCard
