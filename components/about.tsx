"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Brain, Cpu, Database, TrendingUp } from "lucide-react"

export default function About() {
  const stats = [
    { icon: Brain, label: "Projects", value: "10+" },
    { icon: Cpu, label: "ML Models", value: "5+" },
    { icon: Database, label: "Datasets", value: "100+" },
    { icon: TrendingUp, label: "Accuracy", value: "99%" },
    { icon: null, label: "GPA", value: "3.92" },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tentang Saya
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Floating ring animation */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-purple-400/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Profile image with 3D effect */}
              <motion.div
                className="absolute inset-8 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-400 shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/pp-aldi.jpg" alt="AI Engineer Portrait" fill className="object-cover" />
              </motion.div>

              {/* Floating AI elements */}
              <motion.div
                className="absolute -top-4 -right-4 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Brain className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Saya adalah seorang <span className="text-cyan-400 font-semibold">AI Engineer</span> yang sedang
                mengejar gelar sarjana di Institut Teknologi Bacharuddin Jusuf Habibie (ITH). Saya memiliki pengalaman dalam pengembangan
                solusi kecerdasan buatan yang inovatif, terutama dalam bidang{" "}
                <span className="text-purple-400 font-semibold">Machine Learning</span>,{" "}
                <span className="text-pink-400 font-semibold">Deep Learning</span>, dan{" "}
                <span className="text-green-400 font-semibold">Computer Vision</span>.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Saya memiliki passion untuk mengubah data menjadi insights yang berharga dan membangun model AI yang
                dapat memberikan dampak nyata dalam berbagai industri. Dari Natural Language Processing hingga Computer
                Vision, saya terus mengeksplorasi frontier teknologi AI terbaru.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(34, 211, 238, 0.1)",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    {stat.icon && (
                      <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg">
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
