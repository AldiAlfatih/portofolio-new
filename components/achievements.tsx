"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Star, Target, Globe, Flag } from "lucide-react"

const achievements = [
  {
    category: "International",
    icon: Globe,
    color: "from-yellow-500 to-orange-600",
    items: [
      {
        title: "Top 10 Finalist Brawijaya Business Catalyst 2024",
        description: "International Business Plan Competition for College Student",
        year: "2024",
        type: "Business Competition",
        impact: "Kompetisi bisnis internasional tingkat mahasiswa",
      },
    ],
  },
  {
    category: "National",
    icon: Flag,
    color: "from-red-500 to-pink-600",
    items: [
      {
        title: "Peraih Pendanaan PKM-KC 2025",
        description: "Program Kreativitas Mahasiswa - Karsa Cipta",
        year: "2025",
        type: "Research Grant",
        impact: "Mendapat pendanaan untuk proyek inovasi teknologi",
      },
    ],
  },
  {
    category: "National",
    icon: Flag,
    color: "from-red-500 to-pink-600",
    items: [
      {
        title: "LOMBA ESAI PERBENIHAN TANAMAN HUTAN TAHUN 2024 ",
        description: "Lomba Esai Oleh UPT Perbenihan Tanaman Hutan Jawa timur",
        year: "2024",
        type: "Research Grant",
        impact: "Kompetisi Esai Nasional Tingkat Mahasiswa",
      },
    ],
  },
  {
    category: "Academic Excellence",
    icon: Star,
    color: "from-blue-500 to-indigo-600",
    items: [
      {
        title: "IPK 3.92",
        description: "Institut Teknologi Bacharuddin Jusuf Habibie",
        year: "2022 - Sekarang",
        type: "Academic Achievement",
        impact: "Prestasi akademik dengan IPK sangat memuaskan",
      },
    ],
  },
  {
    category: "Technical Achievement",
    icon: Target,
    color: "from-green-500 to-teal-600",
    items: [
      {
        title: "99% Accuracy AI Model",
        description: "Sistem Monitoring Pertanian Hidroponik Selada",
        year: "2024",
        type: "AI/ML Project",
        impact: "Model ANN untuk prediksi kualitas panen dengan akurasi tinggi",
      },
      {
        title: "Computer Vision Dataset Creation",
        description: "Sistem Klasifikasi Gulma - Kabupaten Enrekang",
        year: "2024",
        type: "Research Project",
        impact: "Membangun dataset berkualitas tinggi untuk klasifikasi gulma",
      },
    ],
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-800/30 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/10 h-full">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div
                    className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl shadow-lg`}
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {category.category}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {category.items.length} Achievement{category.items.length > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-6">
                  {category.items.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-cyan-500/30 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + achievementIndex * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Achievement Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-cyan-400 mb-1">{achievement.title}</h4>
                          <p className="text-gray-300 text-sm mb-2">{achievement.description}</p>
                        </div>
                        <div className="flex flex-col items-end space-y-1">
                          <span className="text-yellow-400 font-semibold text-sm">{achievement.year}</span>
                          <span className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs">
                            {achievement.type}
                          </span>
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="flex items-start space-x-3">
                        <motion.div
                          className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: achievementIndex * 0.3,
                          }}
                        />
                        <p className="text-gray-400 text-sm leading-relaxed italic">{achievement.impact}</p>
                      </div>

                      {/* Achievement Badge */}
                      <motion.div
                        className="absolute -top-2 -right-2 p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <Trophy className="w-4 h-4 text-white" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-sm" />
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
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 max-w-4xl mx-auto">
            <motion.div
              className="inline-flex p-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(34, 211, 238, 0.3)",
                  "0 0 40px rgba(147, 51, 234, 0.3)",
                  "0 0 20px rgba(34, 211, 238, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-4">Journey of Excellence</h3>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
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
