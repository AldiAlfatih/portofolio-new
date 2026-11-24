import { SkillCategory, SoftSkillItem, LanguageSkillItem } from "@/types/portfolio"

export const technicalSkillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Bahasa inti yang digunakan untuk implementasi algoritma AI dan sistem backend.",
    skills: [
      { name: "Python", badge: "Core AI / Backend" },
      { name: "PHP", badge: "Backend MVC" },
      { name: "JavaScript", badge: "Full-Stack" },
      { name: "TypeScript", badge: "Type-Safe Web" },
      { name: "Java", badge: "Android & Systems" },
      { name: "SQL", badge: "Relational Query" },
    ],
  },
  {
    category: "AI, Machine Learning & Deep Learning",
    description: "Pemodelan kecerdasan buatan dari data preprocessing hingga on-device deployment.",
    skills: [
      { name: "Computer Vision", badge: "Specialization" },
      { name: "TensorFlow", badge: "Framework" },
      { name: "Keras", badge: "Deep Learning" },
      { name: "MediaPipe", badge: "Realtime Landmark" },
      { name: "OpenCV", badge: "Image Processing" },
      { name: "Scikit-Learn", badge: "ML Models" },
      { name: "TFLite", badge: "Edge / On-Device" },
      { name: "NLP", badge: "Text Processing" },
      { name: "Time Series (LSTM / ANN)", badge: "Forecasting" },
    ],
  },
  {
    category: "Web & Backend Engineering",
    description: "Arsitektur server-side, integrasi database, dan pembuatan RESTful API.",
    skills: [
      { name: "Laravel", badge: "Enterprise PHP" },
      { name: "Inertia.js", badge: "Modern Monolith" },
      { name: "Vue.js", badge: "Reactive UI" },
      { name: "React", badge: "Frontend Library" },
      { name: "Next.js", badge: "SSR & Fullstack" },
      { name: "CodeIgniter 4", badge: "MVC Framework" },
      { name: "RESTful API", badge: "API Design" },
      { name: "MVC Architecture", badge: "Pattern" },
    ],
  },
  {
    category: "Database & Storage",
    description: "Manajemen basis data relasional dengan integritas data dan indexing yang optimal.",
    skills: [
      { name: "PostgreSQL", badge: "Primary RDBMS" },
      { name: "MySQL", badge: "Relational DB" },
      { name: "Database Design & Normalization", badge: "Architecture" },
    ],
  },
  {
    category: "Tools, Platforms & AI Data Labeling",
    description: "Alat pengembang, kontrol versi, dan platform anotasi dataset primer.",
    skills: [
      { name: "Docker", badge: "Containerization" },
      { name: "Git & GitHub", badge: "Version Control" },
      { name: "CVAT", badge: "Image Segmentation" },
      { name: "Roboflow", badge: "Dataset Annotation" },
      { name: "Google Colab", badge: "Model Training" },
      { name: "VS Code", badge: "Primary IDE" },
      { name: "Android Studio", badge: "Mobile SDK" },
      { name: "Figma", badge: "UI/UX Specs" },
    ],
  },
  {
    category: "IoT & Embedded Systems",
    description: "Integrasi sensor fisik dengan mikrokontroler untuk akuisisi data real-time.",
    skills: [
      { name: "ESP32", badge: "Microcontroller" },
      { name: "Arduino IDE", badge: "Firmware Dev" },
      { name: "Wireless Sensor Network (WSN)", badge: "Telemetry" },
      { name: "IoT Telemetry Pipeline", badge: "Data Ingestion" },
    ],
  },
]

export const softSkillsData: SoftSkillItem[] = [
  {
    title: "Leadership & Team Management",
    description:
      "Berpengalaman memimpin organisasi teknologi (Ketua Habibie Coding Club) dan mengoordinasikan tim teknis multidisiplin untuk menyelesaikan proyek riset dan kompetisi inovasi.",
  },
  {
    title: "Technical Problem Solving",
    description:
      "Menganalisis akar masalah komputasi secara analitis, memecah arsitektur sistem kompleks menjadi modul efisien, dan mengevaluasi trade-off performa teknis.",
  },
  {
    title: "Public Speaking & Technical Presentation",
    description:
      "Mampu mendemokan dan mengomunikasikan konsep arsitektur AI dan sistem perangkat lunak di hadapan panel juri kompetisi nasional, internasional, dan pemangku kepentingan.",
  },
  {
    title: "Cross-functional Collaboration",
    description:
      "Terbiasa bekerja dalam tim lintas peran (dokter gigi, analis kebijakan ekonomi, pembuat kebijakan pemerintah daerah, dan developer).",
  },
  {
    title: "End-to-End Project Execution",
    description:
      "Mengawal siklus pengembangan dari perumusan kebutuhan, pengumpulan dan anotasi dataset, pelatihan model, arsitektur backend, hingga deployment operasional.",
  },
  {
    title: "Adaptability & Continuous Learning",
    description:
      "Cepat menguasai teknologi baru dan framework komputasi modern untuk memenuhi kebutuhan riset dan tantangan rekayasa terkini.",
  },
]

export const languageSkillsData: LanguageSkillItem[] = [
  {
    language: "Bahasa Indonesia",
    proficiency: "Penutur Asli (Native)",
    description: "Bahasa utama untuk komunikasi profesional, penulisan laporan teknis, dan koordinasi tim.",
  },
  {
    language: "English",
    proficiency: "Professional Working Proficiency",
    description: "Mampu membaca dan memahami literatur ilmiah AI, dokumentasi teknis, serta komunikasi kerja tertulis.",
  },
]
