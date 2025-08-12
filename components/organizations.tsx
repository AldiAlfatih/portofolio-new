"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Calendar, Award, Heart, Lightbulb } from "lucide-react"

const organizations = [
  {
    name: "Habibie Engineering Robotic of Organization (HERO)",
    role: "Anggota Bidang Riset dan Pengembangan",
    period: "September 2023 – 2024",
    type: "Organisasi Kampus",
    description: "Mengkoordinasi bidang riset dan pengembangan dalam organisasi robotika kampus.",
    activities: [
      "Merencanakan dan melaksanakan program riset robotika.",
      "Mengembangkan teknologi robotika baru.",
      "Melatih anggota dalam bidang riset robotika.",
      "Berpartisipasi dalam kompetisi robotika.",
    ],
    achievements: [
      "Finalist Lomba LiFO Universitas Hasanuddin",
      "Pengembangan robot inovatif untuk aplikasi industri.",
    ],
    image: "hero logo",
    icon: Lightbulb,
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Habibie Coding Club (HCC)",
    role: "Ketua",
    period: "Oktober 2022 – Desember 2024",
    type: "Organisasi Kampus",
    description:
      "Memimpin organisasi coding club kampus, memfasilitasi pembelajaran dan pengembangan kemampuan coding anggota.",
    activities: [
      "Mengorganisir workshop dan seminar coding.",
      "Menyelenggarakan kompetisi coding internal.",
      "Mentoring anggota dalam proyek coding.",
      "Berkolaborasi dengan industri dalam program pelatihan coding.",
    ],
    achievements: [
      "Peningkatan partisipasi anggota dalam kompetisi coding nasional.",
      "Pengembangan aplikasi inovatif oleh anggota.",
    ],
    image: "hcc logo",
    icon: Heart,
    color: "from-green-500 to-teal-600",
  },
  {
    name: "Badan Eksekutif Mahasiswa Institut Teknologi B.J. Habibie (BEM ITH)",
    role: "Koordinator Divisi Olahraga",
    period: "Januari 2024 – Desember 2024",
    type: "Organisasi Kampus",
    description:
      "Mengkoordinasi kegiatan olahraga di tingkat mahasiswa, mempromosikan gaya hidup sehat dan sportifitas.",
    activities: [
      "Mengorganisir turnamen olahraga antar jurusan.",
      "Menyelenggarakan pelatihan dan coaching olahraga.",
      "Membangun tim olahraga kampus yang kompetitif.",
      "Mempromosikan kegiatan olahraga di media sosial.",
    ],
    achievements: [
      // "Peningkatan partisipasi mahasiswa dalam kegiatan olahraga.",
      // "Prestasi tim olahraga kampus di tingkat regional.",
      // "Peningkatan kesadaran akan pentingnya olahraga bagi kesehatan.",
    ],
    image: "bem ith logo",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
  },
]

export default function Organizations() {
  return (
    <section id="organizations" className="py-20 bg-gray-800/30 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Riwayat Organisasi & Komunitas
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {organizations.map((org, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/10 h-full">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  {/* Organization Logo */}
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-gray-600/50 group-hover:border-cyan-500/50 transition-all duration-300 flex-shrink-0">
                    <Image
                      src={`/organization-logos.png?height=100&width=100&query=${org.image}`}
                      alt={org.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {org.name}
                    </h3>
                    <div className="flex flex-col space-y-1 mb-3">
                      <span className="text-cyan-400 font-semibold">{org.role}</span>
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{org.period}</span>
                        </div>
                        <span className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs">
                          {org.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`p-3 bg-gradient-to-r ${org.color} rounded-xl shadow-lg`}
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <org.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{org.description}</p>

                {/* Activities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-cyan-400" />
                    Key Activities
                  </h4>
                  <ul className="space-y-2">
                    {org.activities.map((activity, actIndex) => (
                      <motion.li
                        key={actIndex}
                        className="flex items-start space-x-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + actIndex * 0.05 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: actIndex * 0.3,
                          }}
                        />
                        <span className="text-sm leading-relaxed">{activity}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-yellow-400" />
                    Major Achievements
                  </h4>
                  <ul className="space-y-2">
                    {org.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        className="flex items-start space-x-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + achIndex * 0.05 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-2 flex-shrink-0"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: achIndex * 0.3,
                          }}
                        />
                        <span className="text-sm leading-relaxed font-medium">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
