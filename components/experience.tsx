"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, TrendingUp, Award, Users, Target, Zap } from "lucide-react"

const experiences = [
  {
    title: "Machine Learning Engineer Intern",
    company: "GoDentist – OrthoPredictAI",
    location: "Remote",
    period: "Oktober 2025 – Sekarang",
    type: "Internship",
    description:
      "Magang riset dan pengembangan OrthoPredictAI sebagai sistem pendukung keputusan perawatan ortodontik berbasis AI di ekosistem GoDentist.",
    achievements: [
      "Menyusun dan mematangkan konsep OrthoPredictAI sebagai sistem prediksi durasi dan estimasi biaya perawatan ortodontik berbasis citra dan data klinis.",
      "Merancang research plan teknis untuk model multimodal (vision + tabular), termasuk tujuan riset, hipotesis, metodologi, dan metrik evaluasi.",
      "Mendesain skema dataset dan template kuesioner untuk menghubungkan citra pra-perawatan dengan data demografis, klinis, durasi perawatan, dan biaya historis.",
      "Melakukan studi literatur terstruktur terkait penggunaan machine learning dan computer vision untuk prediksi durasi perawatan ortodonti.",
      "Mendokumentasikan arsitektur awal dan pipeline OrthoPredictAI sebagai dasar implementasi modul prediksi di produk GoDentist.",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "Tabular Modeling",
      "Research Design",
      "Documentation",
    ],
    projects: [],
    icon: Briefcase,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "AI Trainer Specialist",
    company: "SoftAge Information Technology Ltd",
    location: "Remote",
    period: "September 2025 – Sekarang",
    type: "Remote Contract",
    description:
      "Kontraktor jarak jauh yang memproduksi data pelatihan untuk LLM dan agentic AI pada platform SROT.",
    achievements: [
      "Mengeksekusi prompt dan skenario terstandar untuk menghasilkan data teks dan rekaman layar berkualitas tinggi.",
      "Berkoordinasi dengan tim QA untuk menjaga akurasi kerja minimal 95% melalui umpan balik dan perbaikan berkelanjutan.",
      "Melakukan penilaian dan koreksi hasil model agar selaras dengan pedoman kualitas dan gaya bahasa yang ditentukan.",
      "Menyusun dokumentasi langkah kerja dan label untuk memastikan konsistensi dataset bagi tim pengembang model.",
    ],
    technologies: ["LLM", "Prompting", "Data Labeling", "Quality Assurance", "SROT Platform"],
    projects: [],
    icon: Briefcase,
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Asisten Dosen Mata Kuliah Computer Vision",
    company: "Institut Teknologi Bacharuddin Jusuf Habibie",
    location: "Parepare",
    period: "Oktober 2025 – Sekarang",
    type: "Academic",
    description:
      "Asisten dosen untuk mata kuliah Computer Vision, mendampingi kegiatan perkuliahan dan praktikum.",
    achievements: [
      // "Mendampingi dosen pengampu dalam penyampaian materi pengolahan citra, ekstraksi fitur, dan pengenalan model CNN di kelas.",
      // "Membantu menyiapkan materi praktikum dan contoh kode berbasis Python, OpenCV, dan library deep learning.",
      "Membimbing mahasiswa dalam mengerjakan tugas dan proyek mini, termasuk debugging kode dan klarifikasi konsep.",
      "Memberikan umpan balik teknis terhadap tugas dan presentasi mahasiswa agar selaras dengan capaian pembelajaran mata kuliah.",
    ],
    technologies: ["Python", "OpenCV", "Deep Learning", "Teaching"],
    projects: [],
    icon: Award,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Asisten Laboratorium Pemrograman Web",
    company: "Institut Teknologi Bacharuddin Jusuf Habibie",
    location: "Parepare",
    period: "April 2025 – Juni 2025",
    type: "Academic",
    description:
      "Asisten laboratorium untuk praktikum Pemrograman Web, fokus pada front-end dan back-end dasar.",
    achievements: [
      "Membimbing mahasiswa dalam praktikum front-end dan back-end development, termasuk HTML, CSS, JavaScript, dan PHP.",
      "Mendampingi mahasiswa dalam mengerjakan proyek akhir berbasis PHP Native dan framework Laravel serta CodeIgniter.",
      "Membantu debugging dan menjelaskan konsep teknis sehingga kualitas tugas dan proyek mahasiswa meningkat.",
    ],
    technologies: ["PHP", "Laravel", "CodeIgniter 4", "HTML", "CSS", "JavaScript"],
    projects: [],
    icon: Award,
    color: "from-sky-500 to-cyan-600",
  },
  {
    title: "Teknisi Provisioning dan Maintenance",
    company: "PT Telkom Akses",
    location: "Parepare",
    period: "2022",
    type: "Full-time",
    description:
      "Teknisi provisioning dan maintenance jaringan fiber optik IndiHome dari titik distribusi hingga pelanggan.",
    achievements: [
      "Melaksanakan instalasi end-to-end layanan IndiHome, termasuk penarikan kabel optik dari ODP ke lokasi pelanggan.",
      "Melakukan terminasi dan penyambungan kabel fiber optik dengan presisi untuk menjaga kualitas sinyal dan meminimalkan redaman.",
      "Memastikan kualitas koneksi melalui pengukuran menggunakan OPM dan OTDR sebelum layanan diaktifkan.",
      "Mengonfigurasi modem dan set top box di sisi pelanggan serta menangani gangguan jaringan di lapangan.",
      "Memberikan penjelasan yang jelas kepada pelanggan mengenai penyebab dan solusi gangguan sebelum penutupan tiket.",
    ],
    technologies: ["Fiber Optic", "OTDR", "OPM", "OLT", "ONT", "Networking"],
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
