"use client"

import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

interface ProjectLightboxProps {
  isOpen: boolean
  imageSrc: string
  alt: string
  onClose: () => void
}

export default function ProjectLightbox({
  isOpen,
  imageSrc,
  alt,
  onClose,
}: ProjectLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden border border-border bg-card p-2 shadow-2xl z-10"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            aria-label="Tutup preview"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative w-full h-[60vh] rounded-xl overflow-hidden bg-surface-secondary">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          <div className="p-3 text-center text-xs font-mono text-muted-foreground">
            {alt}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
