"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react"

const certifications = [
  {
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    issuer: "Dicoding Indonesia",
    date: "Februari 2025 - Februari 2028",
    image: "/cloud.png",
    credentialId: "MRZMNW4JLPYQ",
    link: "https://www.dicoding.com/certificates/MRZMNW4JLPYQ",
    skills: ["AWS Cloud", "AWS Cloud Practitioner", "AWS Cloud Essentials"],
    verified: true,
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "Januari 2025 - Januari 2028",
    image: "/dasar-ai.png",
    credentialId: "07Z63GKGYZQR",
    link: "https://www.dicoding.com/certificates/07Z63GKGYZQR",
    skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning"],
    verified: true,
  },
  {
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    date: "Januari 2025 - Januari 2028",
    image: "/data-science.png",
    credentialId: "QLZ932K42Z5D",
    link: "https://www.dicoding.com/certificates/QLZ932K42Z5D",
    skills: ["Python","Data Science", "Data Analysis", "Data Visualization"],
    verified: true,
  },
  {
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    date: "Januari 2025 - Januari 2028",
    image: "/sql.png",
    credentialId: "KEXL79G10XG2",
    link: "https://www.dicoding.com/certificates/KEXL79G10XG2",
    skills: ["SQL", "Database", "Data Analysis"],
    verified: true,
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Juni 2024 - Juni 2027",
    image: "/web.png",
    credentialId: "2VX3R0RN4ZYQ",
    link: "https://www.dicoding.com/certificates/2VX3R0RN4ZYQ",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "PHP", "Laravel"],
    verified: true,
  },
  {
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    date: "Desember 2023 - Desember 2026",
    image: "/vis-data.png",
    credentialId: "NVP77KJVOPR0",
    link: "https://www.dicoding.com/certificates/NVP77KJVOPR0",
    skills: ["Python", "Data Science", "Data Analysis", "Data Visualization"],
    verified: true,
  },
  {
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Desember 2023 - Desember 2026",
    image: "/ML.png",
    credentialId: "1OP8NN8K2XQK",
    link: "https://www.dicoding.com/certificates/1OP8NN8K2XQK",
    skills: ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "Numpy"],
    verified: true,
  },
  {
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    date: "Desember 2023 - Desember 2026",
    image: "/python.png",
    credentialId: "JMZVD3QKRZN9",
    link: "https://www.dicoding.com/certificates/JMZVD3QKRZN9",
    skills: ["Python", "Programming", "Data Science", "Data Analysis", "Data Visualization"],
    verified: true,
  },
  {
    title: "Mempelajari Bahasa Pemrograman untuk Ahli Statistika (Data Scientist)",
    issuer: "Skill Academy by Ruangguru",
    date: "Desember 2022",
    image: "Data Scientist certificate",
    credentialId: "46NO2T052ITZBR",
    link: "https://skillacademy.com/certificate/46NO2T052ITZBR",
    skills: ["Python", "R","Data Science", "Data Analysis", "Data Visualization"],
    verified: true,
  },
  {
    title: "Mempelajari Bahasa Pemrograman untuk Ahli Statiska (Data Scientist)",
    issuer: "Skill Academy by Ruangguru",
    date: "Juni 2022",
    image: "Data Scientist certificate",
    credentialId: "81QDIYU92XRR7N",
    link: "https://skillacademy.com/certificate/81QDIYU92XRR7N",
    skills: ["SQL", "Python", "R","Data Science", "Data Analysis", "Data Visualization"],
    verified: true,
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-terminal-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-python-light font-mono mr-2"></span>
          Sertifikasi & Kredensial
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-terminal-text/15 hover:border-python-blue transition-colors duration-200 h-full">
                {/* Certificate Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={cert.image && cert.image.startsWith("/") ? cert.image : "/ai-certificates.png"}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Verified Badge */}
                  {cert.verified && (
                    <div className="absolute top-4 right-4 bg-python-blue rounded-full p-2 border border-python-blue/50">
                      <CheckCircle className="w-4 h-4 text-terminal-text" />
                    </div>
                  )}

                  {/* Award Icon */}
                  <div className="absolute top-4 left-4 p-2 bg-python-blue rounded-full border border-python-blue/50">
                    <Award className="w-4 h-4 text-terminal-text" />
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-terminal-text mb-2 group-hover:text-python-light transition-colors duration-200">
                    {cert.title}
                  </h3>

                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-python-light font-medium">{cert.issuer}</span>
                    <span className="text-terminal-text/30">•</span>
                    <div className="flex items-center space-x-1 text-terminal-text/40">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </div>

                  <div className="text-xs text-terminal-text/30 mb-4 font-mono">ID: {cert.credentialId}</div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-2 py-1 bg-terminal-bg text-python-light text-xs rounded-full border border-terminal-text/15 font-mono"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + skillIndex * 0.05,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* View Certificate Link */}
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 py-2 px-4 bg-python-blue/15 border border-python-blue/30 rounded-lg text-python-light hover:bg-python-blue/25 hover:border-python-blue transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Lihat Sertifikat</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
