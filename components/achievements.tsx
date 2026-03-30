"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Star, Target, Globe, Flag } from "lucide-react"

const achievements = [
  {
    category: "Internasional",
    icon: Globe,
    items: [
      {
        title: "Top 10 Finalist Brawijaya Business Catalyst 2024",
        description: "International Business Plan Competition for College Student",
        year: "2024",
        type: "Kompetisi Bisnis",
        impact: "Kompetisi bisnis internasional tingkat mahasiswa",
      },
    ],
  },
  {
    category: "Nasional",
    icon: Flag,
    items: [
      {
        title: "1st Gold Medal Kategori Matematika",
        description: "Indonesia Academic Olympiad (Tingkat Perguruan Tinggi Nasional)",
        year: "2026",
        type: "Olimpiade Akademik",
        impact: "Meraih medali emas tingkat nasional antar perguruan tinggi",
      },
      {
        title: "5th Place (Top 10 Finalist) Hasanuddin Techno Fest #9",
        description: "Innovation Idea Competition",
        year: "2026",
        type: "Kompetisi Inovasi",
        impact: "Kompetisi ide inovasi tingkat nasional di Universitas Hasanuddin",
      },
      {
        title: "Peraih Pendanaan PKM-KC 2025",
        description: "Program Kreativitas Mahasiswa - Karsa Cipta",
        year: "2025",
        type: "Pendanaan Riset",
        impact: "Mendapat pendanaan DIKTI untuk proyek inovasi teknologi ISARA Language",
      },
      {
        title: "Juara Favorit Lomba Esai Perbenihan Tanaman Hutan 2024",
        description: "Lomba Esai oleh UPT Perbenihan Tanaman Hutan Jawa Timur",
        year: "2024",
        type: "Kompetisi Esai",
        impact: "Kompetisi esai nasional tingkat mahasiswa",
      },
    ],
  },
  {
    category: "Keunggulan Akademik",
    icon: Star,
    items: [
      {
        title: "IPK 3.93",
        description: "Institut Teknologi Bacharuddin Jusuf Habibie",
        year: "2022 – Sekarang",
        type: "Pencapaian Akademik",
        impact: "Prestasi akademik dengan IPK sangat memuaskan",
      },
    ],
  },
  {
    category: "Pencapaian Teknis",
    icon: Target,
    items: [
      {
        title: "Pengembangan Prototipe Aplikasi ISARA",
        description:
          "Sistem penerjemah dua arah BISINDO ke teks dan teks ke isyarat berbasis kamera smartphone.",
        year: "2025",
        type: "AI/Teknologi Bantuan",
        impact:
          "Membangun prototipe aplikasi mobile yang mengintegrasikan Computer Vision dan NLP untuk komunikasi inklusif.",
      },
      {
        title: "Pengembangan Dataset BISINDO untuk Model AI ISARA",
        description:
          "Dataset internal alfabet dan kosakata BISINDO sebagai fondasi pelatihan model pengenalan isyarat.",
        year: "2025",
        type: "Pembuatan Dataset",
        impact:
          "Menyusun dan mengkurasi dataset terstruktur yang menjadi basis pelatihan model gesture recognition ISARA.",
      },
      {
        title: "Implementasi Sistem E-Monev Bappeda Kota Parepare",
        description:
          "Pengembangan dan deployment sistem Elektronik Monitoring dan Evaluasi untuk Bappeda Kota Parepare.",
        year: "2025",
        type: "Sistem Web Pemerintah",
        impact:
          "Mewujudkan aplikasi web yang digunakan langsung oleh Bappeda dan OPD untuk pengelolaan data program, pagu, dan realisasi.",
      },
      {
        title: "Sistem AI Prediksi Kualitas Panen Selada Hidroponik",
        description:
          "Model machine learning berbasis ANN dan LSTM untuk memprediksi kualitas panen dari data sensor lingkungan.",
        year: "2024",
        type: "Proyek AI/ML",
        impact:
          "Mengembangkan model AI yang mampu memberikan prediksi kualitas panen secara konsisten pada data uji internal.",
      },
      {
        title: "Computer Vision Dataset Creation",
        description: "Sistem Klasifikasi Gulma – Kabupaten Enrekang",
        year: "2024",
        type: "Proyek Riset",
        impact:
          "Membangun dataset berkualitas tinggi untuk klasifikasi gulma dan tanaman hortikultura.",
      },
    ],
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative border-t border-terminal-text/10">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-terminal-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-python-light font-mono mr-2">#</span>
          Prestasi & Pencapaian
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-terminal-text/15 hover:border-python-blue transition-colors duration-200 h-full">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-python-blue rounded-2xl border border-python-blue/50">
                    <category.icon className="w-8 h-8 text-terminal-text" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-terminal-text group-hover:text-python-light transition-colors duration-200">
                      {category.category}
                    </h3>
                    <p className="text-terminal-text/40 text-sm">
                      {category.items.length} Pencapaian
                    </p>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-6">
                  {category.items.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      className="bg-terminal-bg rounded-xl p-6 border border-terminal-text/10 hover:border-python-blue/50 transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + achievementIndex * 0.1 }}
                    >
                      {/* Achievement Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-python-light mb-1">{achievement.title}</h4>
                          <p className="text-terminal-text/60 text-sm mb-2">{achievement.description}</p>
                        </div>
                        <div className="flex flex-col items-end space-y-1">
                          <span className="text-python-light font-semibold text-sm font-mono">{achievement.year}</span>
                          <span className="px-2 py-1 bg-python-blue/15 border border-python-blue/30 rounded-full text-python-light text-xs font-mono">
                            {achievement.type}
                          </span>
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-python-light rounded-full mt-2 flex-shrink-0" />
                        <p className="text-terminal-text/40 text-sm leading-relaxed italic">{achievement.impact}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-terminal-text/15 hover:border-python-blue transition-colors duration-200 max-w-4xl mx-auto">
            <div className="inline-flex p-4 bg-python-blue rounded-full border border-python-blue/50 mb-6">
              <Award className="w-8 h-8 text-terminal-text" />
            </div>

            <h3 className="text-2xl font-bold text-terminal-text mb-4">Perjalanan Menuju Keunggulan</h3>
            <p className="text-terminal-text/40 leading-relaxed max-w-2xl mx-auto">
              Dari kompetisi internasional hingga pencapaian akademik, setiap prestasi mencerminkan dedikasi dalam
              mengembangkan teknologi AI dan berkontribusi pada kemajuan ilmu pengetahuan. Perjalanan ini terus
              berlanjut dengan semangat inovasi dan pembelajaran yang tidak pernah berhenti.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
