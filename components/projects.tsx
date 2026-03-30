"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Brain, Eye, Code2, Server } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "ISARA Language — Sistem Penerjemah BISINDO Dua Arah",
    role: "Co-Founder & Computer Vision Engineer",
    description:
      "Prototipe sistem penerjemah dua arah Bahasa Isyarat Indonesia (BISINDO) ke teks dan teks ke isyarat berbasis kamera smartphone. Menggabungkan Computer Vision untuk deteksi skeleton isyarat dan NLP untuk naturalisasi teks, sehingga komunikasi antara pengguna Tuli dan non-penutur isyarat menjadi lebih inklusif.",
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
  },
  {
    title: "Sistem E-Monev Bappeda Kota Parepare",
    role: "Lead Back-End Developer",
    description:
      "Aplikasi web Elektronik Monitoring dan Evaluasi untuk Bappeda Kota Parepare. Arsitektur server-side dibangun menggunakan Laravel dan Inertia.js dengan pola MVC, mencakup pengelolaan pagu, anggaran, dan realisasi per triwulan serta otentikasi dan otorisasi multi peran.",
    image: "e-monev-dashboard",
    icon: Server,
    tech: [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "Inertia.js",
      "Vue.js",
      "Tailwind CSS",
      "JavaScript",
      "RESTful API",
    ],
    demoUrl: "https://drive.google.com/file/d/1x3zWwVp6C_xoth3EjXX6TPY1R3l5-QrL/view?usp=drive_link",
    codeUrl: "#",
  },
  {
    title: "Sistem Prediksi Kualitas Panen Hidroponik",
    role: "AI Engineer",
    description:
      "Model machine learning berbasis ANN dan LSTM untuk memprediksi kualitas panen selada hidroponik dari data sensor lingkungan (suhu, kelembapan, TDS, suhu air). Model diintegrasikan ke aplikasi mobile Android untuk prediksi kualitas panen secara real-time.",
    image: "hydroponic-ai-system",
    icon: Brain,
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
  },
  {
    title: "Sistem Klasifikasi Gulma — Kabupaten Enrekang",
    role: "Peneliti Pembantu",
    description:
      "Pengembangan dataset berkualitas tinggi dan sistem klasifikasi gulma serta tanaman hortikultura menggunakan citra lapangan. Pengumpulan data primer berupa ratusan citra gulma di berbagai kondisi pencahayaan dan sudut pengambilan gambar, dianotasi menggunakan Roboflow.",
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
  },
  {
    title: "Dataset Kebencanaan Banjir — Segmentasi & Object Recognition",
    role: "Peneliti Pembantu",
    description:
      "Pengembangan dataset kebencanaan dari video amatir banjir dengan ekstraksi frame dan anotasi segmentasi semantik menggunakan CVAT. Dataset mencakup area tergenang, bangunan, kendaraan, pohon, dan manusia untuk riset mitigasi kebencanaan berbasis Computer Vision.",
    image: "flood-dataset-segmentation",
    icon: Eye,
    tech: ["CVAT", "Segmentation", "Computer Vision", "Python"],
    demoUrl: "#",
    codeUrl: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-terminal-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-python-light font-mono mr-2"></span>
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
                <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-terminal-text/15 hover:border-python-blue transition-colors duration-200 h-full">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/ai-project-showcase.png"
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Floating Icon */}
                    <div className="absolute top-4 right-4 p-3 bg-python-blue rounded-full border border-python-blue/50">
                      <IconComponent className="w-5 h-5 text-terminal-text" />
                    </div>

                    {/* Role Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-terminal-bg/90 border border-terminal-text/20 rounded-full text-python-light text-xs font-mono">
                        {project.role}
                      </span>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-terminal-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-terminal-text mb-3 group-hover:text-python-light transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-terminal-text/50 mb-4 text-sm leading-relaxed">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-terminal-bg text-python-light text-xs rounded-full border border-terminal-text/15 font-mono"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + techIndex * 0.05,
                          }}
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
                        className="flex-1 border-python-blue/50 text-python-light hover:bg-python-blue/10 hover:border-python-blue bg-transparent transition-colors duration-200"
                      >
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={14} className="mr-2" />
                          Lihat Proyek
                        </motion.a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 border-terminal-text/20 text-terminal-text/70 hover:bg-python-blue/10 hover:border-python-blue hover:text-python-light bg-transparent transition-colors duration-200"
                      >
                        <motion.a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={14} className="mr-2" />
                          Kode
                        </motion.a>
                      </Button>
                    </div>
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
