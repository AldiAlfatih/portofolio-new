import { SkillCategory, SoftSkillItem, LanguageSkillItem } from "@/types/portfolio"

export const technicalSkillCategories: SkillCategory[] = [
  {
    category: "Artificial Intelligence & Machine Learning",
    description: "Pemodelan kecerdasan buatan, Computer Vision, pemrosesan bahasa, dan implementasi inferensi on-device.",
    skills: [
      { name: "Machine Learning", badge: "Core AI" },
      { name: "Deep Learning", badge: "Neural Nets" },
      { name: "Computer Vision", badge: "Specialization" },
      { name: "Natural Language Processing", badge: "NLP" },
      { name: "TensorFlow", badge: "Primary Framework" },
      { name: "Keras", badge: "Model Design" },
      { name: "Scikit-learn", badge: "ML Pipelines" },
      { name: "MediaPipe", badge: "Real-time Landmarks" },
      { name: "TFLite", badge: "Edge / On-Device" },
      { name: "Feature Engineering", badge: "Data Modeling" },
      { name: "Model Evaluation", badge: "Metrics & Validation" },
    ],
  },
  {
    category: "Data Science & Analytics",
    description: "Pembersihan dataset, transformasi ETL, analisis statistik eksploratif, dan dasbor visualisasi intelijen bisnis.",
    skills: [
      { name: "Data Science", badge: "Analytics" },
      { name: "Data Analytics", badge: "Insights" },
      { name: "Data Preprocessing", badge: "Data Prep" },
      { name: "Data Cleaning", badge: "Data Quality" },
      { name: "ETL", badge: "Extract-Transform-Load" },
      { name: "Exploratory Data Analysis (EDA)", badge: "Exploration" },
      { name: "Pandas", badge: "DataFrames" },
      { name: "NumPy", badge: "Numerical Arrays" },
      { name: "Microsoft Excel", badge: "Spreadsheets" },
      { name: "Power Query", badge: "Data Pipeline" },
      { name: "Power BI", badge: "Interactive BI" },
    ],
  },
  {
    category: "Programming Languages",
    description: "Bahasa pemrograman inti yang dikuasai untuk komputasi analitis, rekayasa perangkat lunak, dan sistem backend.",
    skills: [
      { name: "Python", badge: "Primary (AI / Backend)" },
      { name: "Java", badge: "Android & Systems" },
      { name: "C++", badge: "Embedded / High Perf" },
      { name: "PHP", badge: "Enterprise Web" },
      { name: "Golang", badge: "Concurrent Backend" },
      { name: "JavaScript", badge: "Full-Stack" },
      { name: "TypeScript", badge: "Type-Safe Web" },
      { name: "HTML", badge: "Markup" },
      { name: "CSS", badge: "Styling" },
      { name: "SQL", badge: "Relational Queries" },
    ],
  },
  {
    category: "Backend & Software Engineering",
    description: "Perancangan arsitektur server-side, pemodelan database relasional, REST API, dan sistem kontrol akses bertingkat.",
    skills: [
      { name: "Laravel", badge: "Enterprise MVC" },
      { name: "CodeIgniter", badge: "PHP Framework" },
      { name: "Inertia.js", badge: "Modern Monolith" },
      { name: "Node.js", badge: "Runtime Engine" },
      { name: "REST API", badge: "API Architecture" },
      { name: "MySQL", badge: "RDBMS" },
      { name: "PostgreSQL", badge: "Primary RDBMS" },
      { name: "Database Design (ERD)", badge: "Schema Modeling" },
      { name: "Role-Based Access Control (RBAC)", badge: "Security" },
      { name: "Git & GitHub", badge: "Version Control" },
      { name: "Docker", badge: "Containerization" },
    ],
  },
  {
    category: "IoT & Cloud",
    description: "Integrasi sensor fisik, mikrokontroler, telemetri real-time, protokol pesan jaringan, dan komputasi awan.",
    skills: [
      { name: "Cloud Computing", badge: "Cloud Infra" },
      { name: "Deployment", badge: "Production Ops" },
      { name: "CI/CD", badge: "DevOps Pipeline" },
      { name: "MQTT", badge: "IoT Protocol" },
      { name: "Arduino", badge: "Firmware" },
      { name: "ESP32", badge: "Microcontroller" },
      { name: "Embedded Systems", badge: "Hardware Interfacing" },
      { name: "Wireless Sensor Network", badge: "Telemetry Network" },
    ],
  },
  {
    category: "Development & Research Tools",
    description: "Alat bantu terintegrasi untuk eksperimentasi model, kurasi dataset, pengembangan kode, dan kolaborasi tim.",
    skills: [
      { name: "Jupyter Notebook", badge: "Data Notebook" },
      { name: "Google Colab", badge: "Cloud GPU Training" },
      { name: "Android Studio", badge: "Mobile IDE" },
      { name: "Visual Studio Code", badge: "Primary Editor" },
      { name: "Figma", badge: "UI/UX Design" },
      { name: "Roboflow", badge: "Computer Vision Datasets" },
      { name: "CVAT", badge: "Semantic Annotation" },
      { name: "Arduino IDE", badge: "Embedded IDE" },
      { name: "Kaggle", badge: "Competitions & Datasets" },
      { name: "SharePoint", badge: "Intranet & Document Mgmt" },
    ],
  },
]

export const softSkillsData: SoftSkillItem[] = [
  {
    title: "Analytical Thinking & Problem Solving",
    description:
      "Mampu menganalisis masalah komputasi kompleks, membedah struktur data, merancang alur sistem teroptimasi, dan mengevaluasi trade-off performa teknis secara objektif.",
  },
  {
    title: "Technical Leadership",
    description:
      "Berpengalaman memimpin komunitas teknologi kampus (Ketua Habibie Coding Club) dan mengoordinasikan pembagian modul teknis pada proyek pengembangan E-Monev Bappeda.",
  },
  {
    title: "Team Collaboration",
    description:
      "Terbiasa bekerja efektif dalam tim lintas fungsi dan multidisiplin, berkolaborasi dengan analis ekonomi Bank Indonesia, peneliti medis GoDentist, serta pemangku kebijakan pemerintah daerah.",
  },
  {
    title: "Project Coordination",
    description:
      "Teruji mengawal alur kerja rekayasa tepat waktu, integrasi antarmuka dan backend, manajemen sprint, serta pemenuhan deliverable proyek PKM-KC dan sistem pemerintahan daerah.",
  },
  {
    title: "Technical Communication",
    description:
      "Mampu mempresentasikan konsep arsitektur AI, temuan analitik data Power BI, dan policy note secara jelas dan persuasif di hadapan panel juri kompetisi maupun pemangku kepentingan.",
  },
  {
    title: "Adaptability & Continuous Learning",
    description:
      "Cepat beradaptasi menguasai domain baru dan instrumen terkini, mulai dari Computer Vision on-device, rekayasa data Big Data/ETL, hingga arsitektur telemetri IoT industri tambang.",
  },
  {
    title: "Research & Critical Thinking",
    description:
      "Terbiasa menyusun dokumen rancangan riset formal, studi literatur ilmiah komprehensif, desain dataset primer, serta pengujian empiris performa model kecerdasan buatan.",
  },
]

export const languageSkillsData: LanguageSkillItem[] = [
  {
    language: "Bahasa Indonesia",
    proficiency: "Native / Terbiasa",
    description:
      "Penutur asli dengan penguasaan komunikasi lisan dan penulisan formal, teknis, dan dokumentasi akademik.",
  },
  {
    language: "English",
    proficiency: "Professional Working Proficiency",
    description:
      "Mampu membaca literatur ilmiah internasional, menyusun dokumentasi teknis kode, dan berkomunikasi dalam konteks profesional rekayasa perangkat lunak.",
  },
]
