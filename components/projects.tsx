"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Brain, Eye, MessageSquare, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title:
      "ISARA: Inovasi Komunikasi Dua Arah Melalui Gerakan Isyarat, Teks, Gambar, dan Suara Berbasis Artificial Intelligence Menggunakan Kamera Smartphone",
    description:
      "ISARA adalah prototipe sistem penerjemah dua arah Bahasa Isyarat Indonesia BISINDO ke teks dan teks ke isyarat berbasis kamera smartphone. Sistem menggabungkan Computer Vision untuk deteksi skeleton isyarat dan NLP untuk naturalisasi teks sehingga komunikasi antara pengguna Tuli dan non-penutur isyarat menjadi lebih inklusif.",
    image: "isara-sign-language-app",
    icon: Brain,
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "MediaPipe",
      "TFLite",
      "OpenCV",
      "Android",
      "CameraX",
      "Java",
    ],
    demoUrl: "#",
    codeUrl: "#",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Sistem E-Monev Bappeda Kota Parepare",
    description:
      "Aplikasi web untuk monitoring dan evaluasi program pemerintah daerah, mencakup pengelolaan pagu, anggaran, dan realisasi per triwulan. Sistem dirancang dengan RESTful API dan otorisasi multi peran agar alur pelaporan antar OPD dan Bappeda berjalan terstruktur dan aman.",
    image: "e-monev-dashboard",
    icon: TrendingUp,
    tech: [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "RESTful API",
      "Inertia/Vue.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML",
      "CSS",
      "Apache",
    ],
    demoUrl: "http://panrita.bappeda.pareparekota.go.id/",
    codeUrl: "#",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title:
      "Sistem Monitoring dan Pengendalian Cerdas untuk Pertanian Hidroponik Selada",
    description:
      "Proyek AI untuk memprediksi kualitas panen selada hidroponik berdasarkan data sensor lingkungan seperti suhu, kelembapan, TDS, dan suhu air. Model ANN dan LSTM diintegrasikan ke aplikasi Android untuk memberi rekomendasi dan prediksi kualitas panen secara praktis.",
    image: "hydroponic-ai-system",
    icon: TrendingUp,
    tech: [
      "Python",
      "TensorFlow",
      "ANN",
      "LSTM",
      "IoT",
      "ESP32",
      "Android",
    ],
    demoUrl: "#",
    codeUrl: "#",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Sistem Klasifikasi Gulma Berbasis Computer Vision",
    description:
      "Pengembangan dataset dan sistem klasifikasi gulma serta tanaman hortikultura menggunakan citra lapangan dengan variasi pencahayaan dan sudut. Dataset dianotasi dan digunakan untuk melatih model deep learning klasifikasi objek.",
    image: "weed-classification-system",
    icon: Eye,
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Roboflow",
      "Image Processing",
    ],
    demoUrl: "#",
    codeUrl: "#",
    gradient: "from-green-500 to-lime-500",
  },
  {
    title:
      "Dataset Kebencanaan Banjir dengan Segmentasi Area Banjir dan Pengenalan Objek",
    description:
      "Pembangunan dataset kebencanaan dari video amatir banjir dengan ekstraksi frame dan anotasi segmentasi semantik. Dataset mencakup area tergenang dan objek penting seperti bangunan, kendaraan, pohon, dan manusia untuk kebutuhan riset mitigasi kebencanaan berbasis Computer Vision.",
    image: "flood-dataset-segmentation",
    icon: Eye,
    tech: ["CVAT", "Segmentation", "Computer Vision", "Python"],
    demoUrl: "#",
    codeUrl: "#",
    gradient: "from-orange-500 to-red-500",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Proyek
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon ?? Brain
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/ai-project-showcase.png"
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Floating Icon */}
                    <motion.div
                      className={`absolute top-4 right-4 p-3 bg-gradient-to-r ${project.gradient} rounded-full shadow-lg`}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                      }}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
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

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 bg-transparent"
                      >
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={14} className="mr-2" />
                          Demo
                        </motion.a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 bg-transparent"
                      >
                        <motion.a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={14} className="mr-2" />
                          Code
                        </motion.a>
                      </Button>
                    </div>
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-sm" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
