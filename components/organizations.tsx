"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Calendar, Award, Heart, Lightbulb } from "lucide-react"

const organizations = [
  {
    name: "Habibie Engineering Robotic of Organization (HERO)",
    role: "Anggota Bidang Riset dan Pengembangan",
    period: "September 2023 – Desember 2024",
    type: "Organisasi Kampus",
    description:
      "Aktif dalam bidang riset dan pengembangan robotika di lingkungan kampus serta mendukung program edukasi robotika.",
    activities: [
      "Berpartisipasi dalam riset dan pengembangan robot untuk persiapan lomba tingkat regional dan nasional.",
      "Terlibat dalam perancangan, perakitan, dan pemrograman robot sesuai kategori lomba yang diikuti.",
      "Membantu menyusun dan menjalankan program kerja seperti HERO Goes to School dan seminar robotika.",
      "Mengadakan sesi pelatihan dasar robotika dan pemrograman untuk calon anggota dan anggota aktif.",
    ],
    achievements: [
      "Ikut berkontribusi dalam tim pengembangan robot yang mewakili kampus pada ajang kompetisi robotika.",
    ],
    image: "/hero-logo.png",
    icon: Lightbulb,
  },
  {
    name: "Habibie Coding Club (HCC)",
    role: "Ketua",
    period: "Oktober 2022 – Desember 2024",
    type: "Organisasi Kampus",
    description:
      "Memimpin komunitas pemrograman kampus, serta memfasilitasi pengembangan kemampuan teknis anggota.",
    activities: [
      "Menginisiasi dan membangun komunitas pemrograman di lingkungan kampus.",
      "Menyusun kurikulum internal dan mengorganisir pelatihan rutin untuk mahasiswa, mulai dari dasar hingga proyek kecil.",
      "Membimbing anggota dalam persiapan kompetisi seperti GEMASTIK, PKM, dan lomba pengembangan aplikasi lainnya.",
      "Berkoordinasi dengan dosen dan organisasi kampus lain untuk mendukung kegiatan pelatihan dan event teknologi.",
    ],
    achievements: [
      "Meningkatkan jumlah anggota aktif dan partisipasi dalam kegiatan pelatihan dan proyek internal HCC.",
      "Mendorong lahirnya beberapa proyek aplikasi dari anggota yang dipresentasikan di forum kampus dan kompetisi.",
    ],
    image: "/hcc-logo.jpg",
    icon: Heart,
  },
  {
    name: "Badan Eksekutif Mahasiswa Institut Teknologi B.J. Habibie (BEM ITH)",
    role: "Koordinator Divisi Olahraga",
    period: "Januari 2024 – Desember 2024",
    type: "Organisasi Kampus",
    description:
      "Mengkoordinasi program kerja bidang olahraga di tingkat institusi dan mempromosikan budaya hidup sehat di kalangan mahasiswa.",
    activities: [
      "Menyusun dan mengelola program kerja bidang olahraga tingkat institusi.",
      "Mengorganisir kegiatan seperti Habibie E-Sport Championship, mulai dari perencanaan format, pendaftaran, hingga pelaksanaan acara.",
      "Berkoordinasi dengan panitia, sponsor, dan peserta untuk memastikan kegiatan berjalan lancar.",
      "Mengevaluasi pelaksanaan kegiatan olahraga sebagai bahan perbaikan program di periode berikutnya.",
    ],
    achievements: [
      "Berhasil menyelenggarakan kegiatan Habibie E-Sport Championship.",
    ],
    image: "bem ith logo",
    icon: Users,
  },
]

export default function Organizations() {
  return (
    <section id="organizations" className="py-20 relative border-t border-terminal-text/10">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-terminal-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-python-light font-mono mr-2"></span>
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
              <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-terminal-text/15 hover:border-python-blue transition-colors duration-200 h-full">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  {/* Organization Logo */}
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-terminal-text/20 group-hover:border-python-blue transition-colors duration-200 flex-shrink-0">
                    <Image
                      src={org.image && org.image.startsWith("/") ? org.image : "/placeholder-logo.png"}
                      alt={org.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-terminal-text mb-2 group-hover:text-python-light transition-colors duration-200">
                      {org.name}
                    </h3>
                    <div className="flex flex-col space-y-1 mb-3">
                      <span className="text-python-light font-semibold">{org.role}</span>
                      <div className="flex items-center space-x-4 text-terminal-text/40 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{org.period}</span>
                        </div>
                        <span className="px-2 py-1 bg-python-blue/15 border border-python-blue/30 rounded-full text-python-light text-xs font-mono">
                          {org.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="p-3 bg-python-blue rounded-xl border border-python-blue/50">
                    <org.icon className="w-6 h-6 text-terminal-text" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-terminal-text/60 mb-6 leading-relaxed">{org.description}</p>

                {/* Activities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-terminal-text mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-python-light" />
                    Aktivitas Utama
                  </h4>
                  <ul className="space-y-2">
                    {org.activities.map((activity, actIndex) => (
                      <motion.li
                        key={actIndex}
                        className="flex items-start space-x-3 text-terminal-text/60"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + actIndex * 0.05 }}
                      >
                        <div className="w-2 h-2 bg-python-light rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{activity}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-terminal-text mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-python-light" />
                    Pencapaian Utama
                  </h4>
                  <ul className="space-y-2">
                    {org.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        className="flex items-start space-x-3 text-terminal-text/60"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + achIndex * 0.05 }}
                      >
                        <div className="w-2 h-2 bg-python-blue rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed font-medium">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
