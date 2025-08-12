"use client"

import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Mail, Download, Brain, Cpu, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Floating AI Icons */}
          <motion.div
            className="absolute -top-20 -left-20 text-cyan-400/30"
            animate={{
              rotate: 360,
              y: [0, -10, 0],
            }}
            transition={{
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          >
            <Brain size={40} />
          </motion.div>

          <motion.div
            className="absolute -top-10 -right-20 text-purple-400/30"
            animate={{
              rotate: -360,
              y: [0, 15, 0],
            }}
            transition={{
              rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          >
            <Cpu size={35} />
          </motion.div>

          <motion.div
            className="absolute top-10 left-10 text-green-400/30"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Zap size={30} />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Muhammad Aldi Alfatih
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-3xl text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Mahasiswa Ilmu Komputer & AI Enthusiast
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Mahasiswa Institut Teknologi B.J. Habibie dengan passion dalam AI, Deep Learning, Machine Learning, Natural Language Processing, dan Computer
            Vision
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6 mb-10"
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
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50"
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0 10px 25px rgba(34, 211, 238, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <Icon size={24} />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <motion.a href="https://drive.google.com/file/d/1JKKelBIuOUDmwydEcseUwpEfT917BIqt/view?usp=sharing" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Download size={20} className="mr-2" />
                Unduh CV
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </section>
  )
}
