import { SkillCategory, SoftSkillItem, LanguageSkillItem } from "@/types/portfolio"

export const technicalSkillCategories: SkillCategory[] = [
  {
    category: "Backend Development",
    description: "Perancangan arsitektur server-side, kontrol akses bertingkat, integritas data relasional, dan API enterprise.",
    skills: [
      { name: "Laravel", badge: "Primary Framework" },
      { name: "Inertia.js", badge: "Modern Monolith" },
      { name: "SQL", badge: "Relational Queries" },
      { name: "MVC Architecture", badge: "System Design" },
      { name: "Authentication & Authorization", badge: "Security & RBAC" },
      { name: "MySQL", badge: "RDBMS" },
      { name: "PostgreSQL", badge: "Primary RDBMS" },
      { name: "REST API", badge: "API Architecture" },
      { name: "Database Design (ERD)", badge: "Schema Modeling" },
      { name: "Node.js", badge: "Runtime Engine" },
    ],
  },
  {
    category: "Artificial Intelligence & Machine Learning",
    description: "Pemodelan neural networks, pemrosesan bahasa alami (NLP), evaluasi eksperimen, dan translasi linguistik.",
    skills: [
      { name: "TensorFlow", badge: "Primary Framework" },
      { name: "Machine Learning", badge: "Core AI" },
      { name: "Natural Language Processing", badge: "NLP" },
      { name: "Model Evaluation", badge: "Metrics & Validation" },
      { name: "Deep Learning", badge: "Neural Nets" },
      { name: "Keras", badge: "Model Architecture" },
      { name: "Scikit-learn", badge: "ML Pipelines" },
      { name: "Feature Engineering", badge: "Data Modeling" },
    ],
  },
  {
    category: "Computer Vision & Annotation",
    description: "Deteksi gestur real-time, tracking landmark skelet, segmentasi semantik, dan kurasi dataset visual.",
    skills: [
      { name: "Computer Vision", badge: "Specialization" },
      { name: "MediaPipe", badge: "Real-time Landmarks" },
      { name: "OpenCV", badge: "Image Processing" },
      { name: "Roboflow", badge: "Dataset Annotation" },
      { name: "CVAT", badge: "Semantic Annotation" },
      { name: "Image Annotation", badge: "Dataset Curation" },
      { name: "Semantic Segmentation", badge: "Pixel-Level Masking" },
    ],
  },
  {
    category: "Data Analytics & BI",
    description: "Pipeline ETL, pembersihan data terstruktur, analisis deret waktu, dan dasbor visualisasi intelijen bisnis.",
    skills: [
      { name: "Python", badge: "Primary Language" },
      { name: "Power BI", badge: "Interactive Dashboards" },
      { name: "Power Query", badge: "ETL Transformation" },
      { name: "Data Preprocessing", badge: "Data Prep" },
      { name: "Data Cleaning", badge: "Data Quality" },
      { name: "Data Visualization", badge: "Insights" },
      { name: "ETL", badge: "Extract-Transform-Load" },
      { name: "Pandas", badge: "DataFrames" },
      { name: "NumPy", badge: "Numerical Arrays" },
      { name: "Microsoft Excel", badge: "Spreadsheets" },
    ],
  },
  {
    category: "Mobile & Deployment",
    description: "Pengembangan aplikasi mobile lintas platform, arsitektur offline-first, BaaS, dan deployment server via SSH.",
    skills: [
      { name: "Flutter", badge: "Cross-Platform Mobile" },
      { name: "Supabase", badge: "BaaS & Realtime DB" },
      { name: "Android", badge: "Mobile Platform" },
      { name: "On-Device AI", badge: "TFLite / Edge AI" },
      { name: "PuTTY", badge: "SSH Terminal" },
      { name: "SSH", badge: "Remote Protocol" },
      { name: "Remote Server Access", badge: "Server Admin" },
      { name: "Application Deployment", badge: "Production Deploy" },
      { name: "Dart", badge: "Mobile Language" },
      { name: "Git & GitHub", badge: "Version Control" },
      { name: "Docker", badge: "Containerization" },
    ],
  },
  {
    category: "Programming Languages & Tools",
    description: "Bahasa pemrograman dan perangkat komputasi pendukung dalam rekayasa sistem.",
    skills: [
      { name: "Java", badge: "Android & Systems" },
      { name: "C++", badge: "Embedded / High Perf" },
      { name: "PHP", badge: "Enterprise Web" },
      { name: "Golang", badge: "Concurrent Backend" },
      { name: "JavaScript", badge: "Full-Stack" },
      { name: "TypeScript", badge: "Type-Safe Web" },
      { name: "HTML & CSS", badge: "Web UI" },
      { name: "Figma", badge: "UI/UX Design" },
      { name: "Jupyter Notebook", badge: "Notebook Environment" },
      { name: "SharePoint", badge: "Document Management" },
    ],
  },
]

export const softSkillsData: SoftSkillItem[] = [
  {
    title: "Analytical Thinking & Problem Solving",
    titleEn: "Analytical Thinking & Problem Solving",
    description:
      "Mampu menganalisis masalah komputasi kompleks, membedah struktur data, merancang alur sistem teroptimasi, dan mengevaluasi trade-off performa teknis secara objektif.",
    descriptionEn:
      "Adept at decomposing complex computational challenges, analyzing high-dimensional data, architecting optimized software pipelines, and objectively evaluating algorithmic trade-offs.",
  },
  {
    title: "Technical Leadership",
    titleEn: "Technical Leadership & Community Building",
    description:
      "Berpengalaman memimpin komunitas teknologi kampus (Ketua Habibie Coding Club) dan mengoordinasikan pembagian modul teknis pada proyek pengembangan E-Monev Bappeda.",
    descriptionEn:
      "Demonstrated record of founding and leading university technology organizations (President of Habibie Coding Club) and directing sprint modules in regional government software projects.",
  },
  {
    title: "Cross-Functional Collaboration",
    titleEn: "Cross-Functional Collaboration",
    description:
      "Terbiasa bekerja efektif dalam tim lintas fungsi dan multidisiplin, berkolaborasi dengan analis ekonomi Bank Indonesia, peneliti medis GoDentist, serta pemangku kebijakan pemerintah daerah.",
    descriptionEn:
      "Proven ability to collaborate seamlessly across multidisciplinary domains—partnering with macroeconomic analysts at Bank Indonesia, orthodontic clinicians at GoDentist, and municipal policymakers.",
  },
  {
    title: "Project Coordination & Execution",
    titleEn: "Project Coordination & Execution",
    description:
      "Teruji mengawal alur kerja rekayasa tepat waktu, integrasi antarmuka dan backend, manajemen sprint, serta pemenuhan deliverable proyek PKM-KC dan sistem pemerintahan daerah.",
    descriptionEn:
      "Disciplined engineering execution: maintaining sprint milestones, driving frontend-backend integrations, and delivering mission-critical targets for national grants and regional government systems.",
  },
  {
    title: "Technical Communication & Presentation",
    titleEn: "Technical Communication & Presentation",
    description:
      "Mampu mempresentasikan konsep arsitektur AI, temuan analitik data Power BI, dan policy note secara jelas dan persuasif di hadapan panel juri kompetisi maupun pemangku kepentingan.",
    descriptionEn:
      "Skilled at articulating deep learning architectures, BI data findings, and strategic policy briefs persuasively to both technical jury panels and executive leadership.",
  },
  {
    title: "Adaptability & Continuous Learning",
    titleEn: "Adaptability & Continuous Learning",
    description:
      "Cepat beradaptasi menguasai domain baru dan instrumen terkini, mulai dari Computer Vision on-device, rekayasa data Big Data/ETL, hingga arsitektur telemetri IoT industri tambang.",
    descriptionEn:
      "Fast learner who rapidly internalizes new engineering stacks: from on-device edge AI and enterprise ETL pipelines to high-throughput industrial IoT telemetry architectures.",
  },
  {
    title: "Research Rigor & Critical Inquiry",
    titleEn: "Research Rigor & Critical Inquiry",
    description:
      "Terbiasa menyusun dokumen rancangan riset formal, studi literatur ilmiah komprehensif, desain dataset primer, serta pengujian empiris performa model kecerdasan buatan.",
    descriptionEn:
      "Rigorous academic research acumen: authoring formal study blueprints, conducting structured literature reviews, curating novel benchmark datasets, and rigorously testing model hypotheses.",
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
