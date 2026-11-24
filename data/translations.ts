export type Language = "id" | "en"

export interface TranslationDictionary {
  nav: {
    home: string
    about: string
    skills: string
    experience: string
    projects: string
    achievements: string
    certifications: string
    organizations: string
    contact: string
    profile: string
    projectsAndSkills: string
    commandPalette: string
    search: string
  }
  hero: {
    greeting: string
    title: string
    subheading: string
    bio: string
    exploreProfile: string
    viewProjects: string
    downloadCV: string
    connect: string
    copyEmail: string
    copied: string
    parepareMakassar: string
  }
  techStack: {
    badge: string
    title: string
    subtitle: string
  }
  about: {
    badge: string
    title: string
    subtitle: string
    heading: string
    paragraph1: string
    paragraph2: string
    paragraph3: string
    degreePill: string
    institution: string
    institutionVal: string
    major: string
    majorVal: string
    status: string
    statusVal: string
    gpa: string
    projectsCount: string
    projectsCountSub: string
    aiModelsCount: string
    aiModelsCountSub: string
    researchDatasets: string
    researchDatasetsSub: string
    downloadCvBtn: string
    viewExpBtn: string
  }
  skills: {
    badge: string
    title: string
    subtitle: string
    tabHard: string
    tabSoft: string
    tabLang: string
    toolsLabel: string
  }
  experience: {
    badge: string
    title: string
    subtitle: string
    tabAll: string
    tabProf: string
    tabAcademic: string
    tabLeadership: string
    sortNewest: string
    sortChronological: string
    contributionsLabel: string
    technologiesLabel: string
  }
  projects: {
    badge: string
    title: string
    subtitle: string
    allFilter: string
    showingCount: string
    ofCount: string
    searchPlaceholder: string
    emptyTitle: string
    emptyDesc: string
    techUsed: string
    caseStudyBtn: string
    demoBtn: string
    codeBtn: string
    roleLabel: string
  }
  achievements: {
    badge: string
    title: string
    subtitle: string
    verifiedEntries: string
    internationalTitle: string
    nationalTitle: string
    academicTitle: string
    impactLabel: string
  }
  certifications: {
    badge: string
    title: string
    subtitle: string
    verifiedBadge: string
    viewCert: string
    openOriginal: string
    closeModal: string
    verifyCredential: string
    digitalCredential: string
  }
  organizations: {
    badge: string
    title: string
    subtitle: string
    activitiesLabel: string
    achievementsLabel: string
  }
  contact: {
    badge: string
    title: string
    subtitle: string
    directChannels: string
    emailTitle: string
    copyBtn: string
    copiedBtn: string
    locationTitle: string
    locationVal: string
    socialProfiles: string
    cvTitle: string
    cvSubtitle: string
    openToOpportunities: string
    openToOpportunitiesDesc: string
  }
  footer: {
    tagline: string
    quickNav: string
    contactInfo: string
    locationLabel: string
    emailLabel: string
    rights: string
    backToTop: string
  }
}

export const translations: Record<Language, TranslationDictionary> = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      skills: "Keahlian",
      experience: "Pengalaman",
      projects: "Proyek",
      achievements: "Prestasi",
      certifications: "Sertifikasi",
      organizations: "Organisasi",
      contact: "Kontak",
      profile: "Profil",
      projectsAndSkills: "Proyek & Keahlian",
      commandPalette: "Pencarian Cepat",
      search: "Cari...",
    },
    hero: {
      greeting: "👋 Halo, salam kenal",
      title: "AI Engineer | Software Engineer",
      subheading: "Computer Science Graduate • ITH (IPK 3.93/4.00) • Wisudawan Terbaik",
      bio: "Lulusan S1 Ilmu Komputer dari Institut Teknologi Bacharuddin Jusuf Habibie (ITH), angkatan pertama Program Studi Ilmu Komputer, dengan predikat kelulusan pujian (IPK 3.93/4.00) dan penghargaan Wisudawan Terbaik Jurusan Teknologi Produksi dan Industri. Berpengalaman dalam Artificial Intelligence dan Software Engineering, khususnya Computer Vision, model AI multimodal, implementasi on-device Android, sistem backend enterprise (Laravel, MySQL, PostgreSQL, Spatie RBAC), serta pengolahan dan visualisasi data (Power BI, ETL, Python).",
      exploreProfile: "Jelajahi Profil:",
      viewProjects: "Lihat Proyek Rekayasa",
      downloadCV: "Unduh CV (PDF)",
      connect: "Hubungkan:",
      copyEmail: "Salin Email",
      copied: "Tersalin!",
      parepareMakassar: "Parepare & Makassar, Sulsel",
    },
    techStack: {
      badge: "CORE TECHNICAL STACK",
      title: "Teknologi & Platform Utama",
      subtitle: "Instrumen rekayasa aktual yang digunakan dalam proyek AI, web backend, dan sistem cerdas.",
    },
    about: {
      badge: "01 // PROFIL & REKAYASA",
      title: "Tentang Saya",
      subtitle: "Kombinasi fondasi analitis kecerdasan buatan, arsitektur backend andal, dan analitik data.",
      heading: "Membangun Solusi Rekayasa Cerdas yang Berdampak Nyata",
      paragraph1:
        "Saya adalah lulusan Sarjana Komputer dari Institut Teknologi Bacharuddin Jusuf Habibie (ITH), angkatan pertama Program Studi Ilmu Komputer, dengan predikat kelulusan pujian (IPK 3.93/4.00) dan penghargaan Wisudawan Terbaik Jurusan Teknologi Produksi dan Industri. Portofolio rekayasa saya mengintegrasikan kompetensi Artificial Intelligence, Software Engineering, Backend Development, Data Analytics, dan IoT.",
      paragraph2:
        "Di ranah AI dan Computer Vision, saya mengawal siklus model dari kurasi dataset primer 17.138 sampel, ekstraksi 270 fitur sekuensial, perancangan arsitektur Conv1D-BiGRU-Attention (proyek ISARA berakurasi 96.06%), hingga riset model multimodal gigi OrthoPredictAI di GoDentist dan sistem deteksi anomali telemetri tambang.",
      paragraph3:
        "Di ranah backend dan data, saya memimpin arsitektur E-Monev Bappeda berbasis Laravel dan MySQL untuk 34 perangkat daerah di Kota Parepare dengan Spatie RBAC, serta mengolah data makroekonomi, ETL Power Query, dan dasbor Power BI di Bank Indonesia KPw Sulsel.",
      degreePill: "S.Kom. • IPK 3.93 • Wisudawan Terbaik",
      institution: "Institusi:",
      institutionVal: "Institut Teknologi B.J. Habibie (ITH)",
      major: "Program Studi:",
      majorVal: "S1 Ilmu Komputer (Angkatan Pertama)",
      status: "Prestasi / Periode:",
      statusVal: "Wisudawan Terbaik (Sep 2022 – Mei 2026)",
      gpa: "IPK 3.93",
      projectsCount: "10+",
      projectsCountSub: "Proyek Rekayasa",
      aiModelsCount: "5+",
      aiModelsCountSub: "Model AI & ML",
      researchDatasets: "3+",
      researchDatasetsSub: "Dataset Riset",
      downloadCvBtn: "Unduh CV Lengkap",
      viewExpBtn: "Lihat Rekam Jejak Pengalaman",
    },
    skills: {
      badge: "02 // KOMPETENSI & TEKNOLOGI",
      title: "Keahlian & Stack Teknologi",
      subtitle: "Instrumen teknis yang dikuasai untuk merancang solusi komputasi cerdas dan scalable.",
      tabHard: "Hard Skills",
      tabSoft: "Soft Skills",
      tabLang: "Languages",
      toolsLabel: "Teknologi Terkait:",
    },
    experience: {
      badge: "03 // REKAM JEJAK & KONTRIBUSI",
      title: "Pengalaman Kerja & Riset",
      subtitle: "Timeline perjalanan karir profesional, keterlibatan riset kecerdasan buatan, dan asistensi akademik.",
      tabAll: "Semua",
      tabProf: "Pengalaman Profesional",
      tabAcademic: "Riset & Akademik",
      tabLeadership: "Kepemimpinan & Organisasi",
      sortNewest: "Terbaru Dulu",
      sortChronological: "Awal ke Sekarang (2022 → 2026)",
      contributionsLabel: "Tanggung Jawab & Kontribusi Kunci:",
      technologiesLabel: "Teknologi:",
    },
    projects: {
      badge: "04 // KARYA & STUDI KASUS REKAYASA",
      title: "Proyek Rekayasa & Portofolio",
      subtitle: "Implementasi nyata sistem kecerdasan buatan, arsitektur server-side, dan integrasi perangkat lunak.",
      allFilter: "Semua",
      showingCount: "Menampilkan",
      ofCount: "dari",
      searchPlaceholder: "Cari proyek atau stack teknologi...",
      emptyTitle: "Tidak ada proyek yang sesuai",
      emptyDesc: "Silakan sesuaikan kata kunci atau pilih filter kategori lainnya.",
      techUsed: "Technologies Used:",
      caseStudyBtn: "Studi Kasus Detail",
      demoBtn: "Demo",
      codeBtn: "Kode",
      roleLabel: "Peran:",
    },
    achievements: {
      badge: "05 // PENGAKUAN & KOMPETISI",
      title: "Prestasi & Pencapaian",
      subtitle: "Catatan pencapaian akademik, penghargaan kompetisi inovasi, dan rekayasa produk nyata.",
      verifiedEntries: "Entri Prestasi Terverifikasi",
      internationalTitle: "Pengakuan Internasional",
      nationalTitle: "Kompetisi & Pendanaan Nasional",
      academicTitle: "Keunggulan Akademik & Kehormatan",
      impactLabel: "Dampak & Signifikansi",
    },
    certifications: {
      badge: "06 // SERTIFIKASI & KREDENSIAL",
      title: "Sertifikasi Resmi",
      subtitle: "Kredensial keahlian terverifikasi dari platform teknologi terakreditasi (Dicoding & AWS).",
      verifiedBadge: "Terverifikasi",
      viewCert: "Lihat Sertifikat",
      openOriginal: "Buka Gambar Asli",
      closeModal: "Tutup Window",
      verifyCredential: "Verifikasi Kredensial",
      digitalCredential: "Kredensial Digital",
    },
    organizations: {
      badge: "07 // KOMUNITAS & KEPEMIMPINAN",
      title: "Pengalaman Organisasi",
      subtitle: "Kiprah kepemimpinan, kontribusi riset robotika, dan pembangunan komunitas teknologi mahasiswa.",
      activitiesLabel: "Program Kerja & Aktivitas Utama:",
      achievementsLabel: "Capaian Organisasi:",
    },
    contact: {
      badge: "08 // HUBUNGI & KONEKSI",
      title: "Informasi Kontak & Kolaborasi",
      subtitle: "Terbuka untuk peluang karir full-time, kolaborasi rekayasa AI, backend development, maupun proyek riset.",
      directChannels: "Saluran Komunikasi Langsung",
      emailTitle: "Alamat Email",
      copyBtn: "Salin Email",
      copiedBtn: "Tersalin!",
      locationTitle: "Lokasi & Domisili",
      locationVal: "Parepare & Makassar, Sulawesi Selatan, Indonesia",
      socialProfiles: "Profil Profesional & Kode",
      cvTitle: "Curriculum Vitae",
      cvSubtitle: "Unduh salinan terbaru dokumen riwayat hidup dan portofolio profesional.",
      openToOpportunities: "Terbuka untuk Peluang Kerja Sama",
      openToOpportunitiesDesc: "Siap berkontribusi sebagai AI Engineer, Machine Learning Specialist, atau Backend Developer di tim inovatif Anda.",
    },
    footer: {
      tagline: "Personal engineering portfolio berorientasi rekayasa sistem kecerdasan buatan (AI) dan backend development.",
      quickNav: "Navigasi Halaman",
      contactInfo: "Kontak & Domisili",
      locationLabel: "Domisili",
      emailLabel: "Email Utama",
      rights: "Semua hak dilindungi undang-undang.",
      backToTop: "Kembali ke Atas",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      achievements: "Achievements",
      certifications: "Certifications",
      organizations: "Organizations",
      contact: "Contact",
      profile: "Profile",
      projectsAndSkills: "Projects & Skills",
      commandPalette: "Command Palette",
      search: "Search...",
    },
    hero: {
      greeting: "👋 Hi, nice to meet you",
      title: "AI Engineer | Software Engineer",
      subheading: "Computer Science Graduate • ITH (GPA 3.93/4.00) • Best Graduate",
      bio: "Computer Science graduate from Bacharuddin Jusuf Habibie Institute of Technology (ITH), member of the first graduating cohort with highest honors (GPA 3.93/4.00), and awarded Best Graduate of the Department of Industrial Production and Technology. Proven technical expertise in Artificial Intelligence and Software Engineering, spanning Computer Vision, multimodal AI, on-device Android deployment, enterprise backend architectures (Laravel, MySQL, PostgreSQL, Spatie RBAC), and data analytics (Power BI, ETL, Python).",
      exploreProfile: "Explore Profile:",
      viewProjects: "View Engineering Projects",
      downloadCV: "Download CV (PDF)",
      connect: "Connect:",
      copyEmail: "Copy Email",
      copied: "Copied!",
      parepareMakassar: "Parepare & Makassar, South Sulawesi",
    },
    techStack: {
      badge: "CORE TECHNICAL STACK",
      title: "Key Technologies & Platforms",
      subtitle: "Actual engineering instruments utilized across AI systems, backend services, and intelligent software.",
    },
    about: {
      badge: "01 // PROFILE & ENGINEERING",
      title: "About Me",
      subtitle: "Combining analytical AI rigor, resilient backend architectures, and data analytics.",
      heading: "Building High-Impact Intelligent Engineering Solutions",
      paragraph1:
        "I am a Computer Science graduate from Bacharuddin Jusuf Habibie Institute of Technology (ITH), member of the inaugural graduating cohort with highest honors (GPA 3.93/4.00), and honored as Best Graduate of the Department of Industrial Production and Technology. My engineering portfolio bridges Artificial Intelligence, Software Engineering, Backend Development, Data Analytics, and IoT.",
      paragraph2:
        "In AI and Computer Vision, I orchestrate the complete model lifecycle: from curating a 17,138-sample primary dataset with 270 sequential features and designing Conv1D-BiGRU-Attention architectures (ISARA project, 96.06% test accuracy) to multimodal dental research at GoDentist and mining fleet telemetry anomaly detection.",
      paragraph3:
        "In backend and data engineering, I spearheaded the E-Monev municipal monitoring platform on Laravel and MySQL for 34 regional government agencies in Parepare with Spatie RBAC, alongside macroeconomic data processing, Power Query ETL, and Power BI dashboards at Bank Indonesia South Sulawesi.",
      degreePill: "B.Comp.Sc. • GPA 3.93 • Best Graduate",
      institution: "Institution:",
      institutionVal: "B.J. Habibie Institute of Technology (ITH)",
      major: "Major:",
      majorVal: "B.S. in Computer Science (First Cohort)",
      status: "Honors / Period:",
      statusVal: "Best Graduate (Sep 2022 – May 2026)",
      gpa: "GPA 3.93",
      projectsCount: "10+",
      projectsCountSub: "Engineering Projects",
      aiModelsCount: "5+",
      aiModelsCountSub: "AI & ML Models",
      researchDatasets: "3+",
      researchDatasetsSub: "Research Datasets",
      downloadCvBtn: "Download Full CV",
      viewExpBtn: "Explore Career Timeline",
    },
    skills: {
      badge: "02 // COMPETENCIES & TECH",
      title: "Skills & Technology Stack",
      subtitle: "Technical instruments mastered to engineer intelligent and scalable computational solutions.",
      tabHard: "Hard Skills",
      tabSoft: "Soft Skills",
      tabLang: "Languages",
      toolsLabel: "Related Technologies:",
    },
    experience: {
      badge: "03 // CAREER & CONTRIBUTIONS",
      title: "Work & Research Experience",
      subtitle: "Vertical timeline of professional roles, artificial intelligence research, and academic apprenticeships.",
      tabAll: "All",
      tabProf: "Professional Experience",
      tabAcademic: "Research & Academic",
      tabLeadership: "Leadership & Community",
      sortNewest: "Most Recent First",
      sortChronological: "Start to Present (2022 → 2026)",
      contributionsLabel: "Key Responsibilities & Contributions:",
      technologiesLabel: "Technologies:",
    },
    projects: {
      badge: "04 // FEATURED ENGINEERING WORK",
      title: "Engineering Projects & Portfolio",
      subtitle: "Real-world implementations of artificial intelligence systems, server-side architectures, and integrated software.",
      allFilter: "All",
      showingCount: "Showing",
      ofCount: "of",
      searchPlaceholder: "Search projects or technology stack...",
      emptyTitle: "No matching projects found",
      emptyDesc: "Please adjust your search keywords or choose another category filter.",
      techUsed: "Technologies Used:",
      caseStudyBtn: "Detailed Case Study",
      demoBtn: "Demo",
      codeBtn: "Code",
      roleLabel: "Role:",
    },
    achievements: {
      badge: "05 // RECOGNITIONS & COMPETITIONS",
      title: "Achievements & Awards",
      subtitle: "Record of academic excellence, innovation competition recognitions, and applied engineering products.",
      verifiedEntries: "Verified Achievement Entries",
      internationalTitle: "International Recognition",
      nationalTitle: "National Competitions & Grants",
      academicTitle: "Academic Honors & Distinctions",
      impactLabel: "Impact & Significance",
    },
    certifications: {
      badge: "06 // CREDENTIALS & LICENSES",
      title: "Official Certifications",
      subtitle: "Verified competency credentials from accredited technology education platforms (Dicoding & AWS).",
      verifiedBadge: "Verified",
      viewCert: "View Certificate",
      openOriginal: "Open Original Image",
      closeModal: "Close Window",
      verifyCredential: "Verify Credential",
      digitalCredential: "Digital Credential",
    },
    organizations: {
      badge: "07 // LEADERSHIP & COMMUNITY",
      title: "Organizational Experience",
      subtitle: "Leadership tenure, robotics research contributions, and student engineering community building.",
      activitiesLabel: "Key Programs & Activities:",
      achievementsLabel: "Organizational Achievements:",
    },
    contact: {
      badge: "08 // CONNECT & COLLABORATE",
      title: "Contact & Collaboration",
      subtitle: "Open to full-time engineering opportunities, AI system collaborations, backend architecture projects, and technical research.",
      directChannels: "Direct Communication Channels",
      emailTitle: "Email Address",
      copyBtn: "Copy Email",
      copiedBtn: "Copied!",
      locationTitle: "Location & Residence",
      locationVal: "Parepare & Makassar, South Sulawesi, Indonesia",
      socialProfiles: "Professional & Code Profiles",
      cvTitle: "Curriculum Vitae",
      cvSubtitle: "Download the latest copy of my resume and professional engineering portfolio.",
      openToOpportunities: "Open for Opportunities",
      openToOpportunitiesDesc: "Ready to contribute as an AI Engineer, Machine Learning Specialist, or Backend Developer on your team.",
    },
    footer: {
      tagline: "Personal engineering portfolio focused on artificial intelligence systems and enterprise backend development.",
      quickNav: "Page Navigation",
      contactInfo: "Contact & Location",
      locationLabel: "Location",
      emailLabel: "Primary Email",
      rights: "All rights reserved.",
      backToTop: "Back to Top",
    },
  },
}
