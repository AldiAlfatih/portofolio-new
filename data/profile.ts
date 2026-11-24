import { ProfileData } from "@/types/portfolio"

export const profileData: ProfileData = {
  name: "Muhammad Aldi Alfatih",
  degree: "S.Kom.",
  fullNameWithDegree: "Muhammad Aldi Alfatih, S.Kom.",
  title: "AI Engineer | Software Engineer",
  tagline: "Bridging Intelligent Systems with Robust Backend Architectures",
  bio: "Lulusan S1 Ilmu Komputer dari Institut Teknologi Bacharuddin Jusuf Habibie (ITH), angkatan pertama Program Studi Ilmu Komputer, dengan predikat kelulusan pujian, IPK 3.93/4.00, dan penghargaan Wisudawan Terbaik Jurusan Teknologi Produksi dan Industri. Memiliki pengalaman dalam Artificial Intelligence dan Software Engineering, khususnya pengembangan model Computer Vision, perancangan solusi AI berbasis data multimodal, implementasi on-device AI pada aplikasi Android, serta pengembangan sistem backend enterprise dan data analytics.",
  education: {
    degree: "Sarjana Komputer (S.Kom.)",
    major: "S1 Ilmu Komputer",
    institution: "Institut Teknologi Bacharuddin Jusuf Habibie (ITH)",
    gpa: "3.93 / 4.00",
    period: "September 2022 – Mei 2026",
    awards: "Wisudawan Terbaik Jurusan Teknologi Produksi dan Industri",
    cohort: "Lulusan Angkatan Pertama Program Studi Ilmu Komputer",
  },
  contact: {
    email: "aldialfatih016@gmail.com",
    phone: "+62 895805375108",
    github: "https://github.com/AldiAlfatih",
    linkedin: "https://linkedin.com/in/aldialfatih",
    location: "Parepare, Sulawesi Selatan, Indonesia",
  },
  cvUrl: "/CV_Muhammad Aldi Alfatih.pdf",
  cvLocalUrl: "/CV_Muhammad Aldi Alfatih.pdf",
  stats: [
    { label: "IPK", value: "3.93", sublabel: "Skala 4.00 (ITH)" },
    { label: "Proyek Rekayasa", value: "10+", sublabel: "AI, Web & Software" },
    { label: "Model AI & ML", value: "5+", sublabel: "Vision, Time-Series & Multimodal" },
    { label: "Dataset Riset", value: "3+", sublabel: "Kurasi & Anotasi Primer" },
  ],
  availability: "Open for Collaboration",
}
