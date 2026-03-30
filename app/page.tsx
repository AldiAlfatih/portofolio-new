"use client"

import About from "@/components/about"
import Achievements from "@/components/achievements"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Experience from "@/components/experience"
import Hero from "@/components/hero"
import Organizations from "@/components/organizations"
import Projects from "@/components/projects"
import SkillsSection from "@/components/skills-section"
import Testimonials from "@/components/testimonials"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
            <Hero />
            <About />
            <SkillsSection />
            <Experience />
            <Projects />
            <Achievements />
            <Certifications />
            <Organizations />
            {/* Testimonials might be generic, include if relevant, otherwise maybe skip or keep */}
            <Testimonials />
            <Contact />
        </main>
    )
}
