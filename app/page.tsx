import Hero from "@/components/hero"
import About from "@/components/about"
import Achievements from "@/components/achievements"
import Experience from "@/components/experience"
import Organizations from "@/components/organizations"
import Certifications from "@/components/certifications"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100 relative overflow-hidden">
      <Hero />
      <About />
      <Achievements />
      <Experience />
      <Organizations />
      <Certifications />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  )
}
