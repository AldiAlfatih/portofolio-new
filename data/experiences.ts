import { ExperienceItem } from "@/types/portfolio"

export const experiencesData: ExperienceItem[] = [
  // Professional Experience
  {
    id: "bi-makassar",
    title: "Intern – Kelompok Perumusan Kebijakan Provinsi (KPKP)",
    company: "Bank Indonesia (Kantor Perwakilan Sulawesi Selatan)",
    location: "Makassar, Sulawesi Selatan",
    period: "April 2026 – Juni 2026",
    type: "Magang Profesional",
    category: "professional",
    description:
      "Ditempatkan pada unit Kelompok Perumusan Kebijakan Provinsi (KPKP) untuk mendukung analisis data ekonomi makro dan perumusan rekomendasi strategis bagi stabilitas ekonomi daerah.",
    achievements: [
      "Melakukan pembersihan data (data cleaning) dan prapemrosesan menggunakan Python serta mengembangkan dashboard Prognosa dan Monitoring Anggaran menggunakan Power BI untuk melacak realisasi divisi secara real-time.",
      "Melakukan riset awal serta analisis makroekonomi dan sektoral di wilayah Sulampua (Sulawesi, Maluku, Papua) guna mendukung perumusan kebijakan berbasis bukti (evidence-based policy).",
      "Menyusun Kerangka Acuan Kerja (TOR) komprehensif terkait komoditas strategis daerah sebagai landasan penyusunan policy note di bank sentral.",
      "Merombak (revamping) dan mengoptimalkan antarmuka Minisite BI Sulawesi Selatan berbasis Microsoft SharePoint untuk meningkatkan efisiensi akses informasi internal.",
    ],
    technologies: ["Python", "Power BI", "Data Cleaning", "Data Analysis", "SharePoint", "Economic Forecasting"],
  },
  {
    id: "godentist-ai",
    title: "AI Researcher Engineer",
    company: "GoDentist",
    location: "Remote",
    period: "Oktober 2025 – November 2025",
    type: "Magang Riset AI",
    category: "professional",
    description:
      "Merancang OrthoPredictAI sebagai sistem prediksi durasi dan estimasi biaya perawatan ortodontik berbasis citra ortodontik dengan pengayaan data klinis dan kuesioner terstruktur.",
    achievements: [
      "Menyusun research plan teknis untuk model multimodal (vision + tabular), mencakup tujuan penelitian, pertanyaan riset, hipotesis, metodologi, dan metrik evaluasi model.",
      "Mendesain skema dataset dan template kuesioner pasien untuk mengintegrasikan citra pra-perawatan dengan data demografis, klinis, durasi perawatan, serta biaya historis.",
      "Melakukan studi literatur terstruktur terkait pemanfaatan machine learning dan computer vision pada perencanaan terapi ortodontik.",
      "Menyusun dokumentasi teknis arsitektur OrthoPredictAI sebagai blueprint pengembangan modul di ekosistem GoDentist.",
    ],
    technologies: ["Python", "Machine Learning", "Computer Vision", "Multimodal / Tabular", "Research Design"],
  },
  {
    id: "softage-ai",
    title: "AI Trainer Specialist",
    company: "SoftAge Information Technology Ltd",
    location: "Remote",
    period: "September 2025 – Februari 2026",
    type: "Kontrak Remote",
    category: "professional",
    description:
      "Kontraktor jarak jauh yang memproduksi data pelatihan untuk Large Language Models (LLM) dan agentic AI pada platform SROT.",
    achievements: [
      "Mengeksekusi skenario prompt terstruktur untuk menghasilkan dataset teks dan rekaman interaksi berkualitas tinggi sesuai standar internal model.",
      "Berkolaborasi dengan tim Quality Assurance (QA) guna mempertahankan standar akurasi kerja di atas 95% melalui evaluasi berkala.",
      "Menyusun dokumentasi langkah kerja dan pedoman anotasi agar dataset mudah dimanfaatkan oleh tim riset model.",
    ],
    technologies: ["LLM", "Prompt Engineering", "Data Labeling", "Quality Assurance", "SROT Platform"],
  },
  {
    id: "telkom-akses",
    title: "Teknisi Provisioning dan Maintenance",
    company: "PT Telkom Akses",
    location: "Parepare, Sulawesi Selatan",
    period: "2022",
    type: "Penuh Waktu",
    category: "professional",
    description:
      "Teknisi provisioning dan maintenance jaringan fiber optik IndiHome dari titik distribusi hingga perangkat pelanggan.",
    achievements: [
      "Melaksanakan instalasi end-to-end jaringan optik dari Optical Distribution Point (ODP) hingga lokasi pelanggan sesuai SOP teknis.",
      "Melakukan terminasi dan splicing kabel fiber optik presisi untuk meminimalkan nilai redaman koneksi.",
      "Memvalidasi kualitas koneksi menggunakan Optical Power Meter (OPM) dan Optical Time-Domain Reflectometer (OTDR).",
      "Mendiagnosis kendala sinyal optik serta melakukan konfigurasi Optical Network Terminal (ONT) dan perangkat jaringan pelanggan.",
    ],
    technologies: ["Fiber Optic", "OTDR", "OPM", "Optical Distribution", "Networking Hardware"],
  },

  // Project & Academic Experience
  {
    id: "asdos-cv",
    title: "Asisten Dosen Mata Kuliah Computer Vision",
    company: "Institut Teknologi Bacharuddin Jusuf Habibie (ITH)",
    location: "Parepare, Sulawesi Selatan",
    period: "Oktober 2025 – Januari 2026",
    type: "Akademik / Pengajaran",
    category: "academic_project",
    description:
      "Mendampingi dosen pengampu dalam penyampaian kurikulum praktikum visi komputer serta membimbing mahasiswa dalam pemecahan masalah teknis pemodelan citra.",
    achievements: [
      "Membimbing mahasiswa dalam perancangan pipeline Computer Vision berbasis Python dan OpenCV.",
      "Memberikan konsultasi debugging kode praktikum, ekstraksi fitur visual, dan evaluasi model klasifikasi citra.",
    ],
    technologies: ["Python", "OpenCV", "Deep Learning", "Teaching & Mentoring"],
  },
  {
    id: "isara-project",
    title: "Co-Founder & Computer Vision Engineer — ISARA Language",
    company: "Proyek PKM-KC (Kemendikbudristek DIKTI)",
    location: "Parepare, Sulawesi Selatan",
    period: "Mei 2025 – November 2025",
    type: "Riset & Pengembangan Startup",
    category: "academic_project",
    description:
      "Inovasi komunikasi dua arah penerjemah Bahasa Isyarat Indonesia (BISINDO) ke teks/suara dan sebaliknya menggunakan kamera smartphone secara near real-time.",
    achievements: [
      "Merancang arsitektur Computer Vision dan pipeline deteksi keypoint tubuh menggunakan MediaPipe dan TensorFlow yang sukses meraih pendanaan nasional PKM-KC 2025.",
      "Mengembangkan pipeline multimodal vision-to-text dan text-to-sign yang dioptimalkan untuk inferensi on-device (TFLite) pada platform Android.",
      "Memimpin pengujian kualitas performa model gesture recognition dan kurasi dataset primer tanda alfabet serta kata dasar BISINDO.",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "MediaPipe", "TFLite", "OpenCV", "Android", "Java"],
  },
  {
    id: "emonev-bappeda",
    title: "Lead Back-End Developer — Sistem E-Monev Bappeda",
    company: "Bappeda Kota Parepare",
    location: "Parepare, Sulawesi Selatan",
    period: "Maret 2025 – Oktober 2025",
    type: "Proyek Pemerintah Daerah",
    category: "academic_project",
    description:
      "Merancang dan bertanggung jawab penuh atas arsitektur server-side untuk efisiensi monitoring dan evaluasi realisasi anggaran program perangkat daerah.",
    achievements: [
      "Membangun arsitektur backend berbasis Laravel dan PostgreSQL dengan integrasi Inertia.js dan Vue.js untuk sistem tanpa reload halaman.",
      "Mengimplementasikan logika bisnis inti yang kompleks, role-based access control (RBAC), serta validasi anggaran ketat bagi puluhan Organisasi Perangkat Daerah (OPD).",
      "Memastikan sistem berjalan stabil dan digunakan langsung untuk proses verifikasi dan pelaporan APBD daerah.",
    ],
    technologies: ["Laravel", "PHP", "PostgreSQL", "Inertia.js", "Vue.js", "Tailwind CSS", "RESTful API"],
  },
  {
    id: "asdos-web",
    title: "Asisten Laboratorium Pemrograman Web",
    company: "Institut Teknologi Bacharuddin Jusuf Habibie (ITH)",
    location: "Parepare, Sulawesi Selatan",
    period: "April 2025 – Juni 2025",
    type: "Akademik / Pengajaran",
    category: "academic_project",
    description:
      "Membimbing mahasiswa dalam pemahaman arsitektur web modern, basis data, dan pengembangan aplikasi berbasis framework.",
    achievements: [
      "Membimbing mahasiswa dalam pembangunan aplikasi tugas akhir berbasis Laravel, CodeIgniter 4, dan PHP Native.",
      "Menyusun modul panduan arsitektur MVC dan pengujian API menggunakan Postman.",
    ],
    technologies: ["PHP", "Laravel", "CodeIgniter 4", "MySQL", "JavaScript"],
  },
  {
    id: "hidroponik-ai",
    title: "AI Engineer — Sistem Prediksi Kualitas Panen Hidroponik",
    company: "Institut Teknologi Bacharuddin Jusuf Habibie (ITH)",
    location: "Parepare, Sulawesi Selatan",
    period: "2024",
    type: "Proyek Riset IoT & AI",
    category: "academic_project",
    description:
      "Mengembangkan model regresi dan time-series untuk memprediksi kualitas panen selada hidroponik berdasarkan data telemetri sensor lingkungan fisik.",
    achievements: [
      "Mengembangkan arsitektur Artificial Neural Network (ANN) dan Long Short-Term Memory (LSTM) menggunakan TensorFlow.",
      "Menghubungkan pipeline data sensor IoT (suhu udara, kelembaban, dan Total Dissolved Solids / TDS) dari mikrokontroler ESP32 ke sistem inferensi.",
    ],
    technologies: ["Python", "TensorFlow", "ANN", "LSTM", "IoT", "ESP32", "Android"],
  },
  {
    id: "riset-gulma",
    title: "Peneliti Pembantu — Sistem Klasifikasi Gulma Hortikultura",
    company: "Institut Teknologi Bacharuddin Jusuf Habibie (ITH)",
    location: "Enrekang & Parepare, Sulawesi Selatan",
    period: "2024",
    type: "Proyek Riset Lapangan",
    category: "academic_project",
    description:
      "Membangun dataset primer melalui survei lapangan dan mengembangkan model klasifikasi varietas gulma pada perkebunan hortikultura.",
    achievements: [
      "Mengoleksi ratusan citra gulma di lapangan dan melakukan anotasi bounding box menggunakan platform Roboflow.",
      "Menerapkan teknik augmentasi data citra untuk meningkatkan ketahanan model klasifikasi terhadap variasi pencahayaan alami.",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Roboflow", "Data Curation"],
  },
  {
    id: "dataset-banjir",
    title: "Peneliti Pembantu — Dataset Kebencanaan Banjir",
    company: "Institut Teknologi Bacharuddin Jusuf Habibie (ITH)",
    location: "Parepare, Sulawesi Selatan",
    period: "2023",
    type: "Proyek Riset Kebencanaan",
    category: "academic_project",
    description:
      "Membangun dataset segmentasi semantik untuk deteksi luapan air banjir perkotaan dari rekaman video amatir pengawasan bencana.",
    achievements: [
      "Melakukan ekstraksi ribuan frame video lapangan dan menganotasi poligon segmentasi genangan air menggunakan platform CVAT.",
      "Memastikan konsistensi ground truth anotasi kelas air dan objek perkotaan untuk pelatihan model segmentasi citra.",
    ],
    technologies: ["CVAT", "Semantic Segmentation", "Computer Vision", "Python"],
  },
]
