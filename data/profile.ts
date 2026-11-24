import { ProfileData } from "@/types/portfolio"

export const profileData: ProfileData = {
  name: "Muhammad Aldi Alfatih",
  degree: "S.Kom.",
  fullNameWithDegree: "Muhammad Aldi Alfatih, S.Kom.",
  title: "AI Engineer & Backend Developer",
  tagline: "Bridging Intelligent Systems with Robust Backend Architectures",
  bio: "Fresh Graduate S1 Ilmu Komputer dari Institut Teknologi Bacharuddin Jusuf Habibie (ITH) dengan IPK 3.93/4.00. Memiliki kompetensi teknis teruji dalam membangun solusi end-to-end, mulai dari riset arsitektur Artificial Intelligence (Computer Vision, Machine Learning, Deep Learning) hingga perancangan arsitektur backend yang scalable, andal, dan siap diimplementasikan di dunia nyata.",
  education: {
    degree: "Sarjana Komputer (S.Kom.)",
    major: "S1 Ilmu Komputer",
    institution: "Institut Teknologi Bacharuddin Jusuf Habibie (ITH)",
    gpa: "3.93 / 4.00",
    period: "2022 – 2026",
  },
  contact: {
    email: "aldialfatih016@gmail.com",
    github: "https://github.com/AldiAlfatih",
    linkedin: "https://linkedin.com/in/aldialfatih",
    location: "Parepare & Makassar, Sulawesi Selatan, Indonesia",
  },
  cvUrl: "https://drive.google.com/file/d/1dWJpHrOP4NoWN_nCcQxxj1_Vi-la8khx/view?usp=drive_link",
  cvLocalUrl: "/CV_Muhammad Aldi Alfatih.pdf",
  stats: [
    { label: "IPK", value: "3.93", sublabel: "Skala 4.00 (ITH)" },
    { label: "Proyek Rekayasa", value: "10+", sublabel: "AI, Web & Backend" },
    { label: "Model AI & ML", value: "5+", sublabel: "Vision, Time-Series & NLP" },
    { label: "Dataset Riset", value: "3+", sublabel: "Kurasi & Anotasi Primer" },
  ],
  availability: "Open for Collaboration",
}
