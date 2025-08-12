"use client"

import { useState, useEffect } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio
        let maxRatio = 0
        let activeEntry = null

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            activeEntry = entry
          }
        })

        // If we have an active entry with significant intersection, set it as active
        if (activeEntry && maxRatio > 0.3) {
          setActiveSection(activeEntry.target.id)
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-10% 0px -70% 0px",
      },
    )

    sections.forEach((section) => observer.observe(section))

    // Set initial active section based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = section as HTMLElement
        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(element.id)
        }
      })
    }

    // Initial check
    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return activeSection
}
