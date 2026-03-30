"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Brain, Cpu, Database, TrendingUp } from "lucide-react"

export default function About() {
  const stats = [
    { icon: Brain, label: "Proyek", value: "10+" },
    { icon: Cpu, label: "Model ML", value: "5+" },
    { icon: Database, label: "Dataset", value: "3" },
    // { icon: TrendingUp, label: "Akurasi", value: "+++" },
    { icon: null, label: "IPK", value: "3.93" },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-terminal-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-python-light font-mono mr-2">&gt;&gt;&gt;</span>
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
              {/* Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-python-blue/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-terminal-text/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Profile image */}
              <motion.div
                className="absolute inset-8 rounded-full overflow-hidden border-2 border-terminal-text/30"
                whileHover={{
                  scale: 1.05,
                  borderColor: "#0B60B0",
                }}
                transition={{ duration: 0.2 }}
              >
                <Image src="/pp-aldi.jpg" alt="AI Engineer Portrait" fill className="object-cover" />
              </motion.div>

              {/* Floating AI element */}
              <motion.div
                className="absolute -top-4 -right-4 p-3 bg-python-blue rounded-full border border-terminal-text/20"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Brain className="w-6 h-6 text-terminal-text" />
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
            <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-terminal-text/15 hover:border-python-blue transition-colors duration-200">
              <p className="text-terminal-text/70 text-lg leading-relaxed mb-6">
                Mahasiswa S1 Ilmu Komputer dengan fokus pada pengembangan solusi teknis end-to-end, mulai dari
                arsitektur <span className="text-python-light font-semibold">back-end</span> hingga implementasi model{" "}
                <span className="text-python-light font-semibold">Artificial Intelligence</span>. Berpengalaman sebagai{" "}
                <span className="text-python-light font-semibold">Co-Founder & AI Engineer</span> untuk proyek ISARA Language
                (sistem penerjemah BISINDO), serta sebagai{" "}
                <span className="text-python-light font-semibold">Lead Back-End Developer</span> untuk proyek e-Government.
              </p>
              <p className="text-terminal-text/70 text-lg leading-relaxed">
                Pengalaman tersebut menunjukkan kemampuan untuk merancang, mengembangkan, dan
                mengimplementasikan solusi teknis kompleks ke dalam produk aplikasi web dan mobile,
                dengan kemampuan kolaborasi lintas disiplin yang kuat.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-[#0a0a0a] rounded-xl p-6 border border-terminal-text/15 hover:border-python-blue transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex items-center space-x-3">
                    {stat.icon && (
                      <div className="p-2 bg-python-blue/20 border border-python-blue/30 rounded-lg">
                        <stat.icon className="w-5 h-5 text-python-light" />
                      </div>
                    )}
                    <div>
                      <div className="text-2xl font-bold font-mono text-python-light">{stat.value}</div>
                      <div className="text-sm text-terminal-text/50">{stat.label}</div>
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
