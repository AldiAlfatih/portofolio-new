"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, TrendingUp, Award, Users, Target, Zap } from "lucide-react"

const experiences = [
  {
    title: "Founder dan AI Engineer",
    company: "ISARA: InovasI Komunikasi Dua Arah Melalui Gerakan Isyarat,Teks, Gambar dan Suara Berbasis Artificial Inteligence Menggunakan Kamera Smartphone",
    location: "",
    period: "14 Mei 2025 – Sekarang",
    type: "",
    description:
      "Memimpin pengembangan back-end untuk Sistem E-Monev Bappeda, memastikan integrasi data yang efisien dan keamanan sistem.",
    achievements: [
      "Merancang dan mengimplementasikan arsitektur back-end yang scalable dan aman.",
      "Mengelola tim back-end developer untuk mencapai target proyek.",
      "Mengoptimalkan database untuk meningkatkan kinerja sistem.",
      "Menerapkan praktik terbaik dalam pengembangan perangkat lunak.",
    ],
    technologies: ["Laravel 12", "Php", "Vue.js", "Node.js", "Express.js", "PostgreSQL", "Apache", "PuTTY"],
    projects: [],
    icon: Briefcase,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Lead Back-End Developer",
    company: "Proyek Sistem E-Monev Bappeda",
    location: "",
    period: "24 Maret 2025 – Sekarang",
    type: "Contract",
    description:
      "Memimpin pengembangan back-end untuk Sistem E-Monev Bappeda, memastikan integrasi data yang efisien dan keamanan sistem.",
    achievements: [
      "Merancang dan mengimplementasikan arsitektur back-end yang scalable dan aman.",
      "Mengelola tim back-end developer untuk mencapai target proyek.",
      "Mengoptimalkan database untuk meningkatkan kinerja sistem.",
      "Menerapkan praktik terbaik dalam pengembangan perangkat lunak.",
    ],
    technologies: ["Laravel 12", "Php", "Vue.js", "Node.js", "Express.js", "PostgreSQL", "Apache", "PuTTY"],
    projects: [],
    icon: Briefcase,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "AI Engineer",
    company: "Proyek Sistem Monitoring dan Pengendalian Cerdas untuk Pertanian Hidroponik Selada",
    location: "",
    period: "2024",
    type: "",
    description:
      "Mengembangkan sistem AI untuk monitoring dan pengendalian pertanian hidroponik selada, meningkatkan efisiensi dan hasil panen.",
    achievements: [
      "Mengembangkan model machine learning untuk prediksi pertumbuhan tanaman.",
      "Mengimplementasikan sistem monitoring real-time menggunakan sensor dan kamera.",
      "Mengoptimalkan penggunaan air dan nutrisi berdasarkan data AI.",
      "Meningkatkan hasil panen selada sebesar 20%.",
    ],
    technologies: ["Python", "TensorFlow", "ANN", "esp32", "IoT"],
    projects: [],
    icon: TrendingUp,
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Asisten Peneliti",
    company: "Proyek Sistem Klasifikasi Gulma",
    location: "Institut Teknologi B.J. Habibie",
    period: "2024",
    type: "",
    description:
      "Membantu penelitian dalam pengembangan sistem klasifikasi gulma menggunakan teknologi pengolahan citra dan machine learning.",
    achievements: [
      "Mengumpulkan dan melabel dataset gambar gulma.",
      "Melatih model klasifikasi gulma menggunakan deep learning.",
      "Mengevaluasi kinerja model dan melakukan optimasi.",
      "Menulis laporan penelitian dan publikasi ilmiah.",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Image Processing", "Roboflow"],
    projects: [],
    icon: Award,
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Teknisi Provisioning dan Maintenance",
    company: "PT. Telkom Akses",
    location: "Parepare",
    period: "2022",
    type: "Full-time",
    description:
      "Melakukan provisioning dan maintenance jaringan fiber optik, memastikan layanan internet yang handal bagi pelanggan.",
    achievements: [
      "Melakukan instalasi dan konfigurasi perangkat jaringan.",
      "Melakukan troubleshooting dan perbaikan gangguan jaringan.",
      "Memastikan kualitas layanan internet sesuai standar.",
      "Memberikan dukungan teknis kepada pelanggan.",
    ],
    technologies: ["Fiber Optic", "OTDR", "OLT", "ONT", "Networking"],
    projects: [],
    icon: Users,
    color: "from-orange-500 to-red-600",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Pengalaman Profesional
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-cyan-500 to-purple-500 opacity-30" />
              )}

              <div className="flex items-start space-x-6">
                {/* Icon */}
                <motion.div
                  className={`flex-shrink-0 p-4 bg-gradient-to-r ${exp.color} rounded-2xl shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <exp.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-[1.02]">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-400 mb-2">
                        <span className="text-cyan-400 font-semibold">{exp.company}</span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end space-y-2">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-yellow-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start space-x-3 text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + achIndex * 0.05 }}
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
                              delay: achIndex * 0.3,
                            }}
                          />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-purple-400" />
                        Key Projects ({exp.projects.length})
                      </h4>
                      <div className="space-y-4">
                        {exp.projects.map((project, projIndex) => (
                          <motion.div
                            key={projIndex}
                            className="bg-gray-700/30 rounded-xl p-6 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 + projIndex * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            {/* Project Header */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                              <h5 className="text-lg font-bold text-cyan-400 mb-2 md:mb-0">{project.name}</h5>
                              <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                                <span className="flex items-center space-x-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{project.duration}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Users className="w-3 h-3" />
                                  <span>{project.team}</span>
                                </span>
                              </div>
                            </div>

                            {/* Project Description */}
                            <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                            {/* Technologies */}
                            <div className="mb-4">
                              <h6 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h6>
                              <div className="flex flex-wrap gap-1">
                                {project.technologies.map((tech, techIndex) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded border border-purple-500/30"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Results */}
                            <div className="mb-4">
                              <h6 className="text-sm font-semibold text-gray-400 mb-2 flex items-center">
                                <TrendingUp className="w-4 h-4 mr-1 text-green-400" />
                                Key Results:
                              </h6>
                              <ul className="space-y-1">
                                {project.results.map((result, resIndex) => (
                                  <li key={resIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                                    <motion.div
                                      className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"
                                      animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.7, 1, 0.7],
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        delay: resIndex * 0.2,
                                      }}
                                    />
                                    <span>{result}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Challenges */}
                            <div>
                              <h6 className="text-sm font-semibold text-gray-400 mb-2 flex items-center">
                                <Zap className="w-4 h-4 mr-1 text-yellow-400" />
                                Key Challenge:
                              </h6>
                              <p className="text-sm text-gray-300 italic bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                                {project.challenges}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + techIndex * 0.05,
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
