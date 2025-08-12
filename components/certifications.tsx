"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react"

const certifications = [
  // {
  //   title: "TensorFlow Developer Certificate",
  //   issuer: "Google",
  //   date: "2024",
  //   image: "tensorflow certificate",
  //   credentialId: "TF-2024-001",
  //   skills: ["TensorFlow", "Deep Learning", "Neural Networks"],
  //   verified: true,
  // },
  // {
  //   title: "AWS Certified Machine Learning - Specialty",
  //   issuer: "Amazon Web Services",
  //   date: "2023",
  //   image: "aws ml certificate",
  //   credentialId: "AWS-ML-2023-456",
  //   skills: ["AWS SageMaker", "MLOps", "Cloud ML"],
  //   verified: true,
  // },
  // {
  //   title: "Deep Learning Specialization",
  //   issuer: "Coursera - DeepLearning.AI",
  //   date: "2023",
  //   image: "deeplearning ai certificate",
  //   credentialId: "DL-SPEC-2023-789",
  //   skills: ["CNN", "RNN", "Transformers"],
  //   verified: true,
  // },
  // {
  //   title: "Machine Learning Engineer Nanodegree",
  //   issuer: "Udacity",
  //   date: "2022",
  //   image: "udacity ml certificate",
  //   credentialId: "UD-ML-2022-123",
  //   skills: ["Scikit-learn", "Model Deployment", "MLOps"],
  //   verified: true,
  // },
  // {
  //   title: "Professional Data Scientist",
  //   issuer: "IBM",
  //   date: "2022",
  //   image: "ibm data science certificate",
  //   credentialId: "IBM-DS-2022-456",
  //   skills: ["Python", "Data Analysis", "Statistics"],
  //   verified: true,
  // },
  {
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    issuer: "Dicoding Indonesia",
    date: "Februari 2025 - Februari 2028",
    image: "aws cloud certificate",
    credentialId: "MRZMNW4JLPYQ",
    link: "https://www.dicoding.com/certificates/MRZMNW4JLPYQ",
    skills: ["AWS Cloud", "AWS Cloud Practitioner", "AWS Cloud Essentials"],
    verified: true,
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "Januari 2025 - Januari 2028",
    image: "Artificial Intelligence certificate",
    credentialId: "07Z63GKGYZQR",
    link: "https://www.dicoding.com/certificates/07Z63GKGYZQR",
    skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning"],
    verified: true,
  },
  {
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    date: "Januari 2025 - Januari 2028",
    image: "Data Science certificate",
    credentialId: "QLZ932K42Z5D",
    link: "https://www.dicoding.com/certificates/QLZ932K42Z5D",
    skills: ["Python","Data Science", "Data Analysis", "Data Visualization"],
    verified: true,
  },
  {
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    date: "Januari 2025 - Januari 2028",
    image: "SQL certificate",
    credentialId: "KEXL79G10XG2",
    link: "https://www.dicoding.com/certificates/KEXL79G10XG2",
    skills: ["SQL", "Database", "Data Analysis"],
    verified: true,
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Juni 2024 - Juni 2027",
    image: "Web certificate",
    credentialId: "2VX3R0RN4ZYQ",
    link: "https://www.dicoding.com/certificates/2VX3R0RN4ZYQ",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "PHP", "Laravel"],
    verified: true,
  },
  {
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    date: "Desember 2023 - Desember 2026",
    image: "Visualisasi Data certificate",
    credentialId: "NVP77KJVOPR0",
    link: "https://www.dicoding.com/certificates/NVP77KJVOPR0",
    skills: ["Python", "Data Science", "Data Analysis", "Data Visualization"],
    verified: true,
  },
  {
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Desember 2023 - Desember 2026",
    image: "Machine Learning certificate",
    credentialId: "1OP8NN8K2XQK",
    link: "https://www.dicoding.com/certificates/1OP8NN8K2XQK",
    skills: ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "Numpy"],
    verified: true,
  },
  {
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    date: "Desember 2023 - Desember 2026",
    image: "Python certificate",
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
//   {
//     title: "Course Dicoding",
//     issuer: "Dicoding",
//     date: "2023",
//     image: "dicoding certificate",
//     credentialId: "DIC-2023-001",
//     skills: [
//       "Belajar Dasar Pemrograman Web",
//       "Belajar Machine Learning untuk Pemula",
//       "Belajar Dasar Visualisasi Data",
//       "Memulai Pemrograman dengan Python",
//     ],
//     verified: true,
//   },
//   {
//     title: "Skill Academy",
//     issuer: "Skill Academy",
//     date: "2023",
//     image: "skill academy certificate",
//     credentialId: "SKL-2023-002",
//     skills: ["Mempelajari Bahasa Pemrograman untuk Ahli Statistika (Data Scientist)"],
//     verified: true,
//   },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sertifikasi & Kredensial AI
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
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/10 h-full">
                {/* Certificate Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={`/ai-certificates.png?height=300&width=400&query=${cert.image}`}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Verified Badge */}
                  {cert.verified && (
                    <motion.div
                      className="absolute top-4 right-4 bg-green-500 rounded-full p-2 shadow-lg"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </motion.div>
                  )}

                  {/* Award Icon */}
                  <motion.div
                    className="absolute top-4 left-4 p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full shadow-lg"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Award className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-cyan-400 font-medium">{cert.issuer}</span>
                    <span className="text-gray-500">•</span>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 mb-4">ID: {cert.credentialId}</div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* View Certificate Button */}
                  <motion.button
                    className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 rounded-lg text-cyan-400 hover:bg-cyan-500/30 hover:border-cyan-400 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Lihat Sertifikat</span>
                  </motion.button>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
