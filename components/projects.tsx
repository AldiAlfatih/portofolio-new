"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Brain, Eye, MessageSquare, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "ISARA: Inovasi Komunikasi Dua Arah Melalui Gerakan Isyarat, Teks, Gambar, dan Suara Berbasis Artificial Intelligence Menggunakan Kamera Smartphone",
    description: "ISARA adalah aplikasi berbasis AI yang memungkinkan komunikasi dua arah antara pengguna bahasa isyarat dan non-penutur isyarat. Menggunakan teknologi Computer Vision dan Natural Language Processing, ISARA dapat mendeteksi gerakan tangan BISINDO melalui kamera smartphone, mengubahnya menjadi teks dan suara, serta menampilkan terjemahan teks ke animasi isyarat secara interaktif. Aplikasi ini dirancang untuk meningkatkan inklusivitas dan mengurangi hambatan komunikasi.",
    image: "medical AI diagnosis system",
    tech: ["TensorFlow", "CNN", "Python", "Keras", "CameraX", "Android Studio", "Java", "TFLite", "OpenCV"],
    demoUrl: "#",
    codeUrl: "#",
    gradient: "from-cyan-500 to-blue-600",    
  },
  {
    title: "Sistem E-Monev Bappeda",
    description: "Sistem E-Monev Bappeda adalah aplikasi berbasis web yang memungkinkan pemerintah daerah untuk mengelola data keuangan dan pengeluaran pemerintah. Sistem ini memungkinkan pemerintah daerah untuk mengelola data keuangan dan pengeluaran pemerintah dengan mudah dan efisien. Sistem ini memungkinkan pemerintah daerah untuk mengelola data keuangan dan pengeluaran pemerintah dengan mudah dan efisien.",
    image: "AI chatbot interface",
    icon: Brain,
    tech: ["Laravel 12", "Vue.js", "MySQL", "Bootstrap", "Tailwind CSS", "PHP", "JavaScript", "HTML", "CSS", "Apache", "PuTTY", "XAMPP"],
    demoUrl: "http://panrita.bappeda.pareparekota.go.id/",
    codeUrl: "#",
    gradient: "from-purple-500 to-pink-600",
  },
  // {
  //   title: "Computer Vision Object Detection",
  //   description: "Real-time object detection system untuk autonomous vehicles menggunakan YOLO",
  //   image: "computer vision object detection",
  //   icon: Eye,
  //   tech: ["YOLO", "OpenCV", "PyTorch", "CUDA"],
  //   demoUrl: "#",
  //   codeUrl: "#",
  //   gradient: "from-green-500 to-teal-600",
  // },
  // {
  //   title: "Predictive Analytics Dashboard",
  //   description: "Machine learning platform untuk prediksi trend bisnis dengan visualisasi real-time",
  //   image: "AI analytics dashboard",
  //   icon: TrendingUp,
  //   tech: ["Scikit-learn", "Plotly", "Streamlit", "PostgreSQL"],
  //   demoUrl: "#",
  //   codeUrl: "#",
  //   gradient: "from-orange-500 to-red-600",
  // },
  // {
  //   title: "Generative AI Art Creator",
  //   description: "GAN-based model untuk menghasilkan artwork digital dengan style transfer",
  //   image: "AI generated art",
  //   icon: Brain,
  //   tech: ["GANs", "StyleGAN", "TensorFlow", "PIL"],
  //   demoUrl: "#",
  //   codeUrl: "#",
  //   gradient: "from-indigo-500 to-purple-600",
  // },
  // {
  //   title: "MLOps Pipeline Automation",
  //   description: "End-to-end MLOps pipeline untuk deployment dan monitoring model AI di production",
  //   image: "MLOps pipeline dashboard",
  //   icon: TrendingUp,
  //   tech: ["Docker", "Kubernetes", "MLflow", "AWS"],
  //   demoUrl: "#",
  //   codeUrl: "#",
  //   gradient: "from-yellow-500 to-orange-600",
  // },
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
