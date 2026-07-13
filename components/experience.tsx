"use client"

import { Description } from "@radix-ui/react-toast"
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, TrendingUp, Award, Users, Target, Zap } from "lucide-react"
import { title } from "process"
import Achievements from "./achievements"

const experiences = [
  {
    title: "Intern – Divisi Kelompok Perumusan Kebijakan Provinsi (KPKP)",
    company: "Bank Indonesia (Kantor Perwakilan Sulawesi Selatan)",
    location: "Makassar",
    period: "April 2026 – Juni 2026",
    type: "Magang",
    description: "Ditempatkan pada unit Kelompok Perumusan Kebijakan Provinsi (KPKP) untuk mendukung analisis data ekonomi makro dan perumusan rekomendasi strategis bagi stabilitas ekonomi daerah.",
    achievements: [
      "Melakukan pembersihan data (data cleaning) dan prapemrosesan menggunakan Python, serta mengembangkan dashboard Prognosa dan Monitoring Anggaran menggunakan Power BI untuk melacak realisasi anggaran divisi secara real-time.",
      "Melakukan riset awal serta analisis makroekonomi dan sektoral di wilayah Sulampua (Sulawesi, Maluku, Papua) untuk mendukung perumusan kebijakan berbasis bukti.",
      "Menyusun Kerangka Acuan (TOR) yang komprehensif terkait komoditas strategis daerah sebagai landasan penyusunan catatan kebijakan (policy note) di lingkungan bank sentral.",
      "Merombak (revamping) dan mengoptimalkan antarmuka Minisite BI Sulawesi Selatan menggunakan Microsoft SharePoint untuk meningkatkan efisiensi akses informasi internal.",
      "Berkolaborasi dengan tim internal dan pemangku kepentingan eksternal dalam mendukung inisiatif pengembangan ekonomi regional."
    ],
    technologies: [
      "Python",
      "Power BI",
      "Data Cleaning",
      "SharePoint",
      "Data Analysis",
      "Economic Forecasting"
    ],
    projects: [],
    icon: Briefcase,
  },
  {
    title: "AI Researcher Engineer",
    company: "GoDentist",
    location: "Remote",
    period: "Oktober 2025 – November 2025",
    type: "Magang",
    description:
      "Merancang OrthoPredictAI sebagai sistem prediksi durasi dan estimasi biaya perawatan ortodontik berbasis citra ortodontik dengan pengayaan data klinis dan kuesioner terstruktur.",
    achievements: [
      "Menyusun research plan teknis untuk model multimodal vision plus tabular, termasuk tujuan penelitian, pertanyaan riset, hipotesis, metodologi, serta rencana evaluasi model.",
      "Mendesain skema dataset dan template kuesioner pasien untuk mengintegrasikan citra pra perawatan dengan data demografis, klinis, durasi perawatan, dan biaya historis.",
      "Melakukan studi literatur terstruktur terkait pemanfaatan machine learning dan computer vision pada prediksi durasi perawatan ortodontik dan perencanaan terapi.",
      "Menyusun dokumentasi teknis awal arsitektur OrthoPredictAI sebagai blueprint pengembangan modul prediksi durasi dan biaya di ekosistem GoDentist."
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
  },
  {
    title: "AI Trainer Specialist",
    company: "SoftAge Information Technology Ltd",
    location: "Remote",
    period: "September 2025 – Februari",
    type: "Kontrak Remote",
    description:
      "Kontraktor jarak jauh yang memproduksi data pelatihan untuk LLM dan agentic AI pada platform SROT.",
    achievements: [
      "Mengeksekusi prompt dan skenario yang telah dirancang untuk menghasilkan data teks dan rekaman layar berkualitas sesuai standar internal.",
      "Berkolaborasi dengan tim QA untuk menjaga akurasi kerja minimal 95 persen melalui umpan balik dan perbaikan berkelanjutan.",
      "Menyusun dokumentasi langkah kerja dan label agar dataset mudah dipahami dan dimanfaatkan oleh tim pengembangan model.",
    ],
    technologies: ["LLM", "Prompting", "Data Labeling", "Quality Assurance", "SROT Platform"],
    projects: [],
    icon: Briefcase,
  },
  {
    title: "Teknisi Provisioning dan Maintenance",
    company: "PT Telkom Akses",
    location: "Parepare",
    period: "2022",
    type: "Penuh Waktu",
    description:
      "Teknisi provisioning dan maintenance jaringan fiber optik IndiHome dari titik distribusi hingga pelanggan.",
    achievements: [
      "Melaksanakan proses instalasi end to end layanan IndiHome sesuai Surat Perintah Kerja, meliputi penarikan kabel optik dari Optical Distribution Point hingga lokasi pelanggan.",
      "Melakukan terminasi dan penyambungan kabel fiber optik dengan presisi untuk meminimalkan redaman.",
      "Memastikan kualitas koneksi memenuhi standar Telkom melalui pengukuran menggunakan alat ukur OPM dan OTDR.",
      "Mengaktivasi dan mengonfigurasi perangkat jaringan di sisi pelanggan, termasuk modem dan set top box TV.",
      "Mendiagnosis dan menganalisis akar masalah dari laporan gangguan jaringan yang disampaikan pelanggan.",
      "Melakukan perbaikan jaringan mulai dari penggantian konektor, penyambungan ulang kabel yang putus, hingga penggantian perangkat yang bermasalah.",
      "Memberikan penjelasan yang jelas dan komunikatif kepada pelanggan mengenai penyebab dan solusi gangguan.",
    ],
    technologies: ["Fiber Optic", "OTDR", "OPM", "OLT", "ONT", "Networking"],
    projects: [],
    icon: Briefcase,
  },
]

const projectExperiences = [
  {
    title: "Asisten Dosen Mata Kuliah Computer Vision",
    company: "Institut Teknologi Bacharuddin Jusuf Habibie",
    location: "Parepare",
    period: "Oktober 2025 – Januari 2026",
    type: "Akademik",
    description: "Mendampingi dosen dalam penyampaian materi dan membimbing mahasiswa dalam debugging kode proyek berbasis visi komputer.",
    achievements: [
      "Mendampingi dosen pengampu dalam penyampaian materi Computer Vision.",
      "Membimbing mahasiswa dalam debugging kode proyek berbasis visi komputer."
    ],
    technologies: ["Python", "OpenCV", "Deep Learning", "Teaching"],
    icon: Award,
  },
  {
    title: "Co-Founder & Computer Vision Engineer — ISARA Language",
    company: "Proyek PKM-KC",
    location: "Parepare",
    period: "Mei 2025 – November 2025",
    type: "Startup / Riset",
    description:
      "Inovasi komunikasi dua arah melalui gerakan isyarat, teks, gambar dan suara berbasis Artificial Intelligence menggunakan kamera smartphone.",
    achievements: [
      "Merancang arsitektur Computer Vision untuk pengenalan Bahasa Isyarat Indonesia (BISINDO) secara near real-time menggunakan TensorFlow dan MediaPipe yang berhasil meraih pendanaan nasional PKM-KC 2025.",
      "Mengembangkan pipeline vision-to-text dan text-to-sign dengan integrasi model NLP serta memastikan aplikasi berjalan secara lokal (on-device AI) pada perangkat Android.",
      "Memimpin tim pengembang dalam implementasi fitur inti (Isyarat ke Teks, Teks ke Isyarat, dan Modul Belajar) serta bertanggung jawab atas pengujian kualitas sistem pada perangkat mobile."
    ],
    technologies: ["Python", "TensorFlow", "Keras", "MediaPipe", "TFLite", "OpenCV", "Android", "CameraX", "Java"],
    icon: Target,
  },
  {
    title: "Lead Back-End Developer — Sistem E-Monev Bappeda",
    company: "Bappeda Kota Parepare",
    location: "Parepare",
    period: "Maret 2025 – Oktober 2025",
    type: "Proyek Pemerintah",
    description:
      "Merancang dan bertanggung jawab penuh atas arsitektur server-side menggunakan Laravel dan Inertia.js untuk efisiensi monitoring anggaran daerah.",
    achievements: [
      "Merancang dan bertanggung jawab penuh atas arsitektur server-side menggunakan Laravel dan Inertia.js untuk efisiensi monitoring anggaran daerah.",
      "Mengimplementasikan logika bisnis inti, termasuk sistem otentikasi, otorisasi, dan validasi data ketat untuk memastikan integritas sistem monitoring Bappeda."
    ],
    technologies: ["Laravel", "PHP", "PostgreSQL", "Inertia.js", "Vue.js", "Tailwind CSS"],
    icon: Target,
  },
  {
    title: "Asisten Laboratorium Pemrograman Web",
    company: "Institut Teknologi Bacharuddin Jusuf Habibie",
    location: "Parepare",
    period: "April 2025 – Juni 2025",
    type: "Akademik",
    description:
      "Membimbing mahasiswa dalam pengembangan proyek akhir berbasis Laravel, CodeIgniter, dan PHP Native.",
    achievements: [
      "Membimbing mahasiswa dalam pengembangan proyek akhir berbasis Laravel, CodeIgniter, dan PHP Native."
    ],
    technologies: ["PHP", "Laravel", "CodeIgniter 4", "HTML", "CSS", "JavaScript"],
    icon: Award,
  },
  {
    title: "AI Engineer — Sistem Prediksi Kualitas Panen Hidroponik",
    company: "Institut Teknologi Bacharuddin Jusuf Habibie",
    location: "Parepare",
    period: "2024",
    type: "Proyek Riset",
    description:
      "Mengembangkan model ANN dan LSTM untuk memprediksi kualitas panen selada berdasarkan data sensor IoT (suhu, kelembapan, TDS) yang diintegrasikan ke aplikasi Android.",
    achievements: [
      "Mengembangkan model ANN dan LSTM untuk memprediksi kualitas panen selada berdasarkan data sensor IoT (suhu, kelembapan, TDS) yang diintegrasikan ke aplikasi Android."
    ],
    technologies: ["Python", "TensorFlow", "ANN", "LSTM", "IoT", "ESP32", "Android"],
    icon: Target,
  },
  {
    title: "Peneliti Pembantu — Sistem Klasifikasi Gulma",
    company: "Institut Teknologi Bacharuddin Jusuf Habibie",
    location: "Parepare / Enrekang",
    period: "2024",
    type: "Proyek Riset",
    description:
      "Membangun dataset primer melalui pengumpulan ratusan citra di lapangan (Enrekang) dan melakukan anotasi data menggunakan Roboflow untuk klasifikasi gulma.",
    achievements: [
      "Membangun dataset primer melalui pengumpulan ratusan citra di lapangan (Enrekang) dan melakukan anotasi data menggunakan Roboflow untuk klasifikasi gulma."
    ],
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Roboflow", "Image Processing"],
    icon: Target,
  },
  {
    title: "Peneliti Pembantu — Dataset Kebencanaan Banjir",
    company: "Institut Teknologi Bacharuddin Jusuf Habibie",
    location: "Parepare",
    period: "2023",
    type: "Proyek Riset",
    description:
      "Melakukan ekstraksi ribuan frame dari video amatir dan anotasi segmentasi semantik pada area banjir menggunakan platform CVAT.",
    achievements: [
      "Melakukan ekstraksi ribuan frame dari video amatir dan anotasi segmentasi semantik pada area banjir menggunakan platform CVAT."
    ],
    technologies: ["CVAT", "Segmentation", "Computer Vision", "Python"],
    icon: Target,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-terminal-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-python-light font-mono mr-2"></span>
          Pengalaman Kerja & Magang
        </motion.h2>

        {/* Pengalaman Kerja */}
        <div className="max-w-4xl mx-auto mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-python-blue/30" />
              )}

              <div className="flex items-start space-x-6">
                <motion.div
                  className="flex-shrink-0 p-4 bg-python-blue rounded-2xl border border-python-blue/50"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <exp.icon className="w-8 h-8 text-terminal-text" />
                </motion.div>

                <div className="flex-1 bg-[#0a0a0a] rounded-2xl p-8 border border-terminal-text/15 hover:border-python-blue transition-colors duration-200 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-terminal-text mb-2 group-hover:text-python-light transition-colors duration-200">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-terminal-text/50 mb-2">
                        <span className="text-python-light font-semibold">{exp.company}</span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end space-y-2">
                      <div className="flex items-center space-x-2 text-terminal-text/50">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <span className="px-3 py-1 bg-python-blue/15 border border-python-blue/30 rounded-full text-python-light text-xs font-medium font-mono">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-terminal-text/60 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-terminal-text mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-python-light" />
                      Pencapaian Utama
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start space-x-3 text-terminal-text/60"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + achIndex * 0.05 }}
                        >
                          <div className="w-2 h-2 bg-python-light rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-terminal-text/50 mb-3">Teknologi yang Digunakan:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-terminal-bg text-python-light text-xs rounded-full border border-terminal-text/15 hover:border-python-blue hover:bg-python-blue/10 transition-colors duration-200 font-mono"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
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

        {/* Pengalaman Proyek & Akademik */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-terminal-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-python-light font-mono mr-2"></span>
          Pengalaman Proyek & Akademik
          <span className="text-python-light font-mono ml-1"></span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {projectExperiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {index !== projectExperiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-python-blue/30" />
              )}

              <div className="flex items-start space-x-6">
                <motion.div
                  className="flex-shrink-0 p-4 bg-python-blue rounded-2xl border border-python-blue/50"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <exp.icon className="w-8 h-8 text-terminal-text" />
                </motion.div>

                <div className="flex-1 bg-[#0a0a0a] rounded-2xl p-8 border border-terminal-text/15 hover:border-python-blue transition-colors duration-200 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-terminal-text mb-2 group-hover:text-python-light transition-colors duration-200">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-terminal-text/50 mb-2">
                        <span className="text-python-light font-semibold text-sm">{exp.company}</span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span className="text-xs">{exp.location}</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end space-y-2">
                      <div className="flex items-center space-x-2 text-terminal-text/50">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <span className="px-3 py-1 bg-python-blue/15 border border-python-blue/30 rounded-full text-python-light text-xs font-medium font-mono">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-terminal-text/60 mb-6 leading-relaxed text-sm">{exp.description}</p>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start space-x-3 text-terminal-text/60"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + achIndex * 0.05 }}
                        >
                          <div className="w-2 h-2 bg-python-light rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-terminal-bg text-python-light text-xs rounded-full border border-terminal-text/15 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
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
