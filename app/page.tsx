"use client"

import Hero from "@/components/hero"
import TechnologyShowcase from "@/components/technology-showcase"
import About from "@/components/about"
import SkillsSection from "@/components/skills-section"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Certifications from "@/components/certifications"
import Organizations from "@/components/organizations"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <Hero />
      <TechnologyShowcase />
      <About />
      <SkillsSection />
      <Experience />
      <Projects />
      <Achievements />
      <Certifications />
      <Organizations />
      <Contact />
    </main>
  )
}
