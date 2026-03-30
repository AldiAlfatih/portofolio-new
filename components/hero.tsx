"use client"

import OrbitStack3D from "@/components/orbit-stack-3d"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-python-blue/10 border border-python-blue/30 text-python-light text-sm font-mono font-medium mb-6"
          >
            <span className="text-python-light/60 mr-1">$</span> Terbuka untuk Kolaborasi
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block text-terminal-text">Muhammad</span>
            <span className="text-python-light">
              Aldi Alfatih
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-terminal-text/60 mb-6 h-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI Engineer <span className="text-python-light">•</span> Backend Developer
          </motion.h2>

          <motion.p
            className="text-lg text-terminal-text/50 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Mahasiswa S1 Ilmu Komputer dengan fokus pada pengembangan solusi teknis end-to-end,
            mulai dari arsitektur back-end hingga implementasi model AI.
            Berpengalaman sebagai Co-Founder & AI Engineer ISARA Language serta Lead Back-End Developer untuk proyek e-Government.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              className="rounded-full px-8 py-6 text-lg bg-python-blue hover:bg-python-blue/80 text-terminal-text border border-python-blue/50 transition-colors duration-200"
              asChild
            >
              <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Lihat Proyek
              </motion.a>
            </Button>

            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-terminal-text/20 hover:border-python-blue hover:text-python-light bg-transparent text-terminal-text transition-colors duration-200"
              asChild
            >
              <motion.a href="https://drive.google.com/file/d/1dWJpHrOP4NoWN_nCcQxxj1_Vi-la8khx/view?usp=drive_link" target="_blank" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Download size={20} className="mr-2" />
                Unduh CV
              </motion.a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center lg:justify-start space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: GitHub, href: "https://github.com/AldiAlfatih", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/aldialfatih", label: "LinkedIn" },
              { icon: Mail, href: "mailto:aldialfatih016@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-text/40 hover:text-python-light transition-colors duration-200"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={24} />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Orbit Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:flex justify-center items-center relative"
        >
          <OrbitStack3D />
        </motion.div>

      </div>
    </section>
  )
}
