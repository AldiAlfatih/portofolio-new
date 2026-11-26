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
    academicPill: string
    exploreProfile: string
    viewProjects: string
    downloadCV: string
    viewPortfolioDrive: string
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
    honorsLabel: string
    honorsVal: string
    cohortLabel: string
    cohortVal: string
    gpa: string
    projectsCount: string
    projectsCountSub: string
    aiModelsCount: string
    aiModelsCountSub: string
    researchDatasets: string
    researchDatasetsSub: string
    downloadCvBtn: string
    viewPortfolioDriveBtn: string
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
    viewDetailsBtn: string
    closeModalBtn: string
    keyOutcomesLabel: string
    showAllBtn: string
    showLessBtn: string
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
    driveDeckBtn: string
    driveDeckNote: string
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
    tabAll: string
    tabInternational: string
    tabNational: string
    tabAcademic: string
    tabHki: string
    viewDetailBtn: string
    closeModalBtn: string
    organizerLabel: string
    rankLabel: string
    proposalLabel: string
    teamLabel: string
    themeLabel: string
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
    portfolioDeckLabel: string
    portfolioDeckSub: string
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
      greeting: "Halo, saya Aldi.",
      title: "AI Engineer & Software Engineer",
      subheading: "Lulusan S1 Ilmu Komputer • ITH (IPK 3.93/4.00) • Wisudawan Terbaik",
      bio: "Saya lulusan Ilmu Komputer dari Institut Teknologi B.J. Habibie (ITH) yang tertarik pada Artificial Intelligence dan Software Engineering. Berpengalaman membangun model Computer Vision, aplikasi mobile on-device AI, backend web berbasis Laravel dan Python, serta pengolahan data analitik.",
      academicPill: "S1 Ilmu Komputer ITH • IPK 3.93 • Wisudawan Terbaik",
      exploreProfile: "Jelajahi Profil",
      viewProjects: "Lihat Proyek Saya",
      downloadCV: "Unduh CV (PDF)",
      viewPortfolioDrive: "Portofolio (Drive)",
      connect: "Tautan",
      copyEmail: "Salin Email",
      copied: "Tersalin!",
      parepareMakassar: "Parepare, Sulawesi Selatan",
    },
    techStack: {
      badge: "STACK TEKNOLOGI",
      title: "Teknologi & Platform",
      subtitle: "Berikut beberapa teknologi yang pernah saya gunakan dalam proyek AI, web, dan sistem cerdas.",
    },
    about: {
      badge: "TENTANG SAYA",
      title: "Profil & Latar Belakang",
      subtitle: "Latar belakang pendidikan, keahlian utama, dan ringkasan profil saya.",
      heading: "Rekayasa Kecerdasan Buatan & Sistem Perangkat Lunak",
      paragraph1:
        "Lulusan Sarjana Komputer dari Institut Teknologi Bacharuddin Jusuf Habibie (ITH) angkatan pertama dengan predikat Dengan Pujian (IPK 3.93/4.00) dan penghargaan Lulusan Terbaik Jurusan Teknologi Produksi dan Industri (Nilai 605.21, Masa Studi 3.7 tahun). Portofolio rekayasa saya berfokus pada integrasi Artificial Intelligence, Computer Vision, dan arsitektur Backend modern.",
      paragraph2:
        "Di ranah AI dan Computer Vision, saya mengawal siklus model secara end-to-end: dari kurasi dataset primer 17.138 sampel, ekstraksi 270 fitur sekuensial, hingga perancangan arsitektur Conv1D-BiGRU-Attention pada proyek ISARA yang meraih akurasi 96.06%. Saya juga aktif dalam riset model multimodal gigi OrthoPredictAI (GoDentist) dan sistem deteksi anomali telemetri sensor.",
      paragraph3:
        "Di ranah backend dan data, saya memimpin arsitektur sistem E-Monev Bappeda berbasis Laravel dan MySQL untuk 34 Organisasi Perangkat Daerah (OPD) di Kota Parepare dengan integrasi Spatie RBAC, serta mengolah data makroekonomi, pipeline ETL Power Query, dan dasbor analitik Power BI di Bank Indonesia KPw Sulsel.",
      degreePill: "S.Kom. • IPK 3.93 • Wisudawan Terbaik",
      institution: "Institusi",
      institutionVal: "Institut Teknologi B.J. Habibie (ITH)",
      major: "Program Studi",
      majorVal: "S1 Ilmu Komputer (Angkatan Pertama)",
      status: "Prestasi / Periode",
      statusVal: "Masa Studi: 3.7 Tahun (Sep 2022 – Mei 2026)",
      honorsLabel: "Kehormatan",
      honorsVal: "Lulusan Terbaik Jurusan TPI (Nilai: 605.21 — Dengan Pujian)",
      cohortLabel: "Angkatan",
      cohortVal: "Lulusan Angkatan Pertama Program Studi Ilmu Komputer",
      gpa: "IPK 3.93",
      projectsCount: "10+",
      projectsCountSub: "Proyek Rekayasa",
      aiModelsCount: "5+",
      aiModelsCountSub: "Model AI & ML",
      researchDatasets: "3+",
      researchDatasetsSub: "Dataset Riset",
      downloadCvBtn: "Unduh CV Lengkap",
      viewPortfolioDriveBtn: "Lihat Portofolio (Drive)",
      viewExpBtn: "Lihat Riwayat Pengalaman",
    },
    skills: {
      badge: "KEAHLIAN",
      title: "Keahlian & Tools",
      subtitle: "Kumpulan keahlian teknis, soft skills, dan bahasa yang saya kuasai.",
      tabHard: "Hard Skills",
      tabSoft: "Soft Skills",
      tabLang: "Bahasa",
      toolsLabel: "Teknologi Terkait",
    },
    experience: {
      badge: "REKAM JEJAK",
      title: "Pengalaman Kerja & Riset",
      subtitle: "Beberapa pengalaman saya dalam pengembangan software, AI, dan riset.",
      tabAll: "Semua",
      tabProf: "Pengalaman Profesional",
      tabAcademic: "Riset & Proyek",
      tabLeadership: "Organisasi & Kepemimpinan",
      sortNewest: "Terbaru Dulu",
      sortChronological: "Awal ke Sekarang (2022 → 2026)",
      contributionsLabel: "Tanggung Jawab & Kontribusi",
      technologiesLabel: "Teknologi",
      viewDetailsBtn: "Lihat Detail",
      closeModalBtn: "Tutup",
      keyOutcomesLabel: "Capaian & Hasil",
      showAllBtn: "Tampilkan Semua Pengalaman",
      showLessBtn: "Tampilkan Lebih Sedikit",
    },
    projects: {
      badge: "PORTOFOLIO",
      title: "Proyek Rekayasa",
      subtitle: "Berikut beberapa proyek yang pernah saya kerjakan.",
      allFilter: "Semua",
      showingCount: "Menampilkan",
      ofCount: "dari",
      searchPlaceholder: "Cari proyek atau stack teknologi...",
      emptyTitle: "Tidak ada proyek yang sesuai",
      emptyDesc: "Silakan sesuaikan kata kunci pencarian atau pilih kategori lainnya.",
      techUsed: "Teknologi Digunakan",
      caseStudyBtn: "Lihat Studi Kasus",
      demoBtn: "Demo",
      codeBtn: "Kode",
      roleLabel: "Peran",
      driveDeckBtn: "Lihat Portofolio (Google Drive)",
      driveDeckNote: "Tersedia juga versi slide PDF pilihan di Google Drive — catatan: tidak seluruh proyek dan studi kasus di website ini tercantum di dalam dokumen Drive tersebut.",
    },
    achievements: {
      badge: "PRESTASI",
      title: "Prestasi & Pencapaian",
      subtitle: "Beberapa penghargaan kompetisi, pendanaan riset, dan pencapaian akademik yang pernah saya raih.",
      verifiedEntries: "Entri Terverifikasi",
      internationalTitle: "Tingkat Internasional",
      nationalTitle: "Kompetisi & Pendanaan Nasional",
      academicTitle: "Keunggulan Akademik & Kehormatan",
      impactLabel: "Dampak & Signifikansi",
      tabAll: "Semua",
      tabInternational: "Internasional",
      tabNational: "Nasional",
      tabAcademic: "Pengakuan Akademik",
      tabHki: "Hak Kekayaan Intelektual (HKI)",
      viewDetailBtn: "Lihat Detail",
      closeModalBtn: "Tutup",
      organizerLabel: "Penyelenggara / Institusi",
      rankLabel: "Peringkat / Capaian",
      proposalLabel: "Judul Proposal / Solusi",
      teamLabel: "Tim & ID",
      themeLabel: "Tema / Subkategori",
    },
    certifications: {
      badge: "SERTIFIKASI",
      title: "Sertifikasi Resmi",
      subtitle: "Sertifikasi yang telah saya selesaikan untuk memvalidasi keahlian teknis.",
      verifiedBadge: "Terverifikasi",
      viewCert: "Lihat Sertifikat",
      openOriginal: "Buka Gambar Asli",
      closeModal: "Tutup",
      verifyCredential: "Verifikasi Kredensial",
      digitalCredential: "Kredensial Digital",
    },
    organizations: {
      badge: "ORGANISASI",
      title: "Organisasi & Kepemimpinan",
      subtitle: "Pengalaman berorganisasi, memimpin komunitas, dan berkolaborasi dalam tim.",
      activitiesLabel: "Program Kerja & Aktivitas",
      achievementsLabel: "Capaian Organisasi",
    },
    contact: {
      badge: "KONTAK",
      title: "Hubungi Saya",
      subtitle: "Silakan hubungi saya untuk peluang kerja, proyek kolaborasi, atau diskusi teknis.",
      directChannels: "Kontak Langsung",
      emailTitle: "Email",
      copyBtn: "Salin Email",
      copiedBtn: "Tersalin!",
      locationTitle: "Lokasi",
      locationVal: "Parepare, Sulawesi Selatan, Indonesia",
      socialProfiles: "Tautan Profesional",
      cvTitle: "Curriculum Vitae",
      cvSubtitle: "Unduh CV terbaru versi PDF.",
      portfolioDeckLabel: "Portofolio Slide (Drive)",
      portfolioDeckSub: "Buka Ringkasan PDF (Drive)",
      openToOpportunities: "Terbuka untuk Peluang Kerja",
      openToOpportunitiesDesc: "Siap berkontribusi penuh sebagai AI Engineer, Machine Learning Specialist, atau Software Engineer.",
    },
    footer: {
      tagline: "Personal portfolio Muhammad Aldi Alfatih — AI Engineer & Software Engineer.",
      quickNav: "Navigasi",
      contactInfo: "Kontak",
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
      greeting: "Hi, I'm Aldi.",
      title: "AI Engineer & Software Engineer",
      subheading: "Computer Science Graduate • ITH (GPA 3.93/4.00) • Best Graduate",
      bio: "I am a Computer Science graduate from B.J. Habibie Institute of Technology (ITH) focused on Artificial Intelligence and Software Engineering. Experienced in building Computer Vision models, on-device mobile AI integrations, and backend architectures with Laravel and Python.",
      academicPill: "B.S. in Computer Science ITH • GPA 3.93 • Best Graduate",
      exploreProfile: "Explore Profile",
      viewProjects: "View My Projects",
      downloadCV: "Download CV (PDF)",
      viewPortfolioDrive: "Portfolio (Drive)",
      connect: "Connect",
      copyEmail: "Copy Email",
      copied: "Copied!",
      parepareMakassar: "Parepare, South Sulawesi",
    },
    techStack: {
      badge: "TECH STACK",
      title: "Technologies & Tools",
      subtitle: "Technologies and tools I have worked with in AI, web development, and engineering projects.",
    },
    about: {
      badge: "ABOUT ME",
      title: "Background & Profile",
      subtitle: "My educational background, core focus, and profile summary.",
      heading: "Artificial Intelligence & Software Systems Engineering",
      paragraph1:
        "Computer Science graduate from Bacharuddin Jusuf Habibie Institute of Technology (ITH), member of the inaugural graduating cohort with highest honors (GPA 3.93/4.00), and honored as Best Graduate of the Department of Industrial Technology and Production (Score 605.21, completed in 3.7 years). My engineering focus bridges Artificial Intelligence, Computer Vision, and modern Backend architecture.",
      paragraph2:
        "In AI and Computer Vision, I engineer end-to-end deep learning pipelines: from curating a 17,138-sample primary dataset with 270 sequential features, to designing a Conv1D-BiGRU-Attention architecture for the ISARA sign-language system achieving 96.06% accuracy. My research also spans multimodal dental analysis (OrthoPredictAI at GoDentist) and sensor telemetry anomaly detection.",
      paragraph3:
        "In backend and enterprise systems, I architected and deployed the municipal E-Monev monitoring platform using Laravel and MySQL for 34 regional government agencies across Parepare with Spatie RBAC, alongside managing macroeconomic data pipelines, Power Query ETL, and executive Power BI dashboards at Bank Indonesia South Sulawesi.",
      degreePill: "B.Comp.Sc. • GPA 3.93 • Best Graduate",
      institution: "Institution",
      institutionVal: "B.J. Habibie Institute of Technology (ITH)",
      major: "Major",
      majorVal: "B.S. in Computer Science (First Cohort)",
      status: "Honors / Period",
      statusVal: "Study Period: 3.7 Years (Sep 2022 – May 2026)",
      honorsLabel: "Honors",
      honorsVal: "Best Department Graduate (Score: 605.21 — Cum Laude)",
      cohortLabel: "Cohort",
      cohortVal: "First Graduating Cohort of Computer Science Program",
      gpa: "GPA 3.93",
      projectsCount: "10+",
      projectsCountSub: "Engineering Projects",
      aiModelsCount: "5+",
      aiModelsCountSub: "AI & ML Models",
      researchDatasets: "3+",
      researchDatasetsSub: "Research Datasets",
      downloadCvBtn: "Download Full CV",
      viewPortfolioDriveBtn: "View Portfolio (Drive)",
      viewExpBtn: "Explore Career Timeline",
    },
    skills: {
      badge: "SKILLS",
      title: "Skills & Tools",
      subtitle: "Technical competencies, soft skills, and tools I use.",
      tabHard: "Hard Skills",
      tabSoft: "Soft Skills",
      tabLang: "Languages",
      toolsLabel: "Related Technologies",
    },
    experience: {
      badge: "CAREER JOURNEY",
      title: "Work & Research Experience",
      subtitle: "My experience across software development, AI engineering, and research.",
      tabAll: "All",
      tabProf: "Professional Experience",
      tabAcademic: "Research & Projects",
      tabLeadership: "Organizations & Leadership",
      sortNewest: "Most Recent First",
      sortChronological: "Start to Present (2022 → 2026)",
      contributionsLabel: "Key Responsibilities & Contributions",
      technologiesLabel: "Technologies",
      viewDetailsBtn: "View Details",
      closeModalBtn: "Close",
      keyOutcomesLabel: "Outcomes & Achievements",
      showAllBtn: "Show All Experiences",
      showLessBtn: "Show Less",
    },
    projects: {
      badge: "PORTFOLIO",
      title: "Engineering Projects",
      subtitle: "Selected projects I have designed and built.",
      allFilter: "All",
      showingCount: "Showing",
      ofCount: "of",
      searchPlaceholder: "Search projects or technology stack...",
      emptyTitle: "No matching projects found",
      emptyDesc: "Please adjust your search keywords or choose another category filter.",
      techUsed: "Technologies Used",
      caseStudyBtn: "View Case Study",
      demoBtn: "Demo",
      codeBtn: "Code",
      roleLabel: "Role",
      driveDeckBtn: "View Portfolio (Google Drive)",
      driveDeckNote: "A curated PDF portfolio deck is also available on Google Drive — note: not every engineering project listed on this site appears in that document.",
    },
    achievements: {
      badge: "AWARDS",
      title: "Achievements & Awards",
      subtitle: "Competitions, research grants, and academic honors I have received.",
      verifiedEntries: "Verified Entries",
      internationalTitle: "International Recognition",
      nationalTitle: "National Competitions & Grants",
      academicTitle: "Academic Honors & Distinctions",
      impactLabel: "Impact & Significance",
      tabAll: "All",
      tabInternational: "International",
      tabNational: "National",
      tabAcademic: "Academic Recognition",
      tabHki: "Intellectual Property (HKI)",
      viewDetailBtn: "View Details",
      closeModalBtn: "Close",
      organizerLabel: "Organizer / Institution",
      rankLabel: "Rank / Achievement",
      proposalLabel: "Proposal / Solution Title",
      teamLabel: "Team & ID",
      themeLabel: "Theme / Subcategory",
    },
    certifications: {
      badge: "CERTIFICATIONS",
      title: "Official Certifications",
      subtitle: "Official credentials completed to validate technical skills.",
      verifiedBadge: "Verified",
      viewCert: "View Certificate",
      openOriginal: "Open Original Image",
      closeModal: "Close",
      verifyCredential: "Verify Credential",
      digitalCredential: "Digital Credential",
    },
    organizations: {
      badge: "ORGANIZATIONS",
      title: "Organizations & Leadership",
      subtitle: "Leadership, community building, and teamwork experiences.",
      activitiesLabel: "Key Activities & Programs",
      achievementsLabel: "Organization Achievements",
    },
    contact: {
      badge: "CONTACT",
      title: "Contact & Collaboration",
      subtitle: "Feel free to reach out for career opportunities, engineering collaborations, or technical discussions.",
      directChannels: "Direct Channels",
      emailTitle: "Email Address",
      copyBtn: "Copy Email",
      copiedBtn: "Copied!",
      locationTitle: "Location",
      locationVal: "Parepare, South Sulawesi, Indonesia",
      socialProfiles: "Professional Profiles",
      cvTitle: "Curriculum Vitae",
      cvSubtitle: "Download the latest copy of my resume in PDF.",
      portfolioDeckLabel: "Portfolio Deck (Drive)",
      portfolioDeckSub: "Open Curated PDF (Drive)",
      openToOpportunities: "Open to Opportunities",
      openToOpportunitiesDesc: "Ready to contribute as an AI Engineer, Machine Learning Specialist, or Software Engineer.",
    },
    footer: {
      tagline: "Personal portfolio of Muhammad Aldi Alfatih — AI Engineer & Software Engineer.",
      quickNav: "Navigation",
      contactInfo: "Contact",
      locationLabel: "Location",
      emailLabel: "Email",
      rights: "All rights reserved.",
      backToTop: "Back to Top",
    },
  },
}
