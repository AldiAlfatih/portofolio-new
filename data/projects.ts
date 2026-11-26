import { ProjectItem } from "@/types/portfolio"

export const projectsData: ProjectItem[] = [
  // 01 — ISARA
  {
    id: "isara-bisindo",
    title: "ISARA: Inovasi Komunikasi Dua Arah Bahasa Isyarat (BISINDO)",
    titleEn: "ISARA: Two-Way Sign Language Communication Platform",
    role: "Co-Founder & AI Engineer",
    roleEn: "Co-Founder & AI Engineer",
    category: "Computer Vision",
    featured: true,
    workflowSteps: [
      "Kamera Smartphone (Input Visual)",
      "Landmarks (MediaPipe Hands & Pose)",
      "AI Model (Conv1D + BiGRU + Attention)",
      "Text Output (Teks BISINDO)",
    ],
    evaluationTable: [
      {
        model: "Model 1",
        architecture: "2-Layer Bi-LSTM",
        features: "Skeleton Sederhana (258D)",
        valAccuracy: "70.00%",
        testAccuracy: "69.85%",
        computeLoad: "Rendah",
      },
      {
        model: "Model 2",
        architecture: "2-Layer Bi-LSTM",
        features: "Hybrid (Skeleton + CNN)",
        valAccuracy: "92.83%",
        testAccuracy: "92.36%",
        computeLoad: "Sangat Tinggi",
      },
      {
        model: "Model 3 (Terbaik)",
        architecture: "Conv1D + BiGRU + Attention",
        features: "Fitur Rekayasa (270D)",
        valAccuracy: "96.44%",
        testAccuracy: "96.06%",
        computeLoad: "Sedang - Tinggi",
      },
    ],
    description:
      "Aplikasi komunikasi dua arah berbasis Bahasa Isyarat Indonesia (BISINDO) yang mengenali gestur tangan dan tubuh secara on-device melalui kamera smartphone, menghasilkan transkripsi teks dengan akurasi pengujian 96.06% pada dataset penelitian.",
    descriptionEn:
      "Two-way sign language mobile communication system translating Indonesian Sign Language (BISINDO) gestures into text via on-device Computer Vision, achieving 96.06% test set accuracy on research benchmark datasets.",
    longDescription:
      "ISARA adalah aplikasi mobile berbasis AI yang dirancang untuk menjembatani hambatan komunikasi antara komunitas Tuli dan masyarakat dengar. Sistem menggunakan Computer Vision untuk mengenali gestur bahasa isyarat melalui kamera smartphone standar tanpa ketergantungan server awan berbayar. Proyek ini dikembangkan secara kolaboratif dan berhasil memenangkan pendanaan nasional Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC) Kemendikbudristek DIKTI 2025.",
    longDescriptionEn:
      "ISARA is an AI-powered mobile application designed to bridge communication barriers for the deaf and hard-of-hearing community. The system utilizes Computer Vision to recognize sign language gestures through standard smartphone cameras without cloud dependence. Developed collaboratively and awarded competitive national research funding through PKM-KC 2025 by Kemendikbudristek DIKTI.",
    problemStatement:
      "Kendala komunikasi sehari-hari antara pengguna bahasa isyarat dan masyarakat luas yang belum memahami BISINDO, serta keterbatasan solusi penerjemah lokal yang dapat beroperasi lancar secara offline di smartphone umum.",
    problemStatementEn:
      "Daily communication barriers between sign language users and the broader public, compounded by a lack of accessible, localized Indonesian sign language tools that operate smoothly on commodity smartphones.",
    technicalApproach:
      "Mengekstraksi 270 dimensi fitur per frame sekuensial (258 koordinat spasial 3D landmark MediaPipe Hands & Pose ditambah 12 fitur rekayasa sudut dan jarak Euclidean). Arsitektur deep learning terbaik memadukan lapisan Conv1D untuk ekstraksi fitur lokal, Bidirectional GRU (BiGRU) untuk memodelkan ketergantungan temporal urutan gestur, dan Attention Mechanism untuk memfokuskan bobot frame paling representatif. Model dikonversi ke format quantized TensorFlow Lite (.tflite) dan diintegrasikan dengan Android CameraX untuk eksekusi inferensi cepat berlatensi rendah.",
    technicalApproachEn:
      "Engineered a 270D feature extraction pipeline per sequential frame (258 MediaPipe 3D coordinates plus 12 engineered spatial angle and distance metrics). The premier deep learning architecture fuses Conv1D for local spatial extraction, Bidirectional GRU (BiGRU) for temporal gesture transitions, and an Attention Mechanism to focus on informative movement frames. Converted into quantized TensorFlow Lite (.tflite) and interfaced with Android CameraX for fast on-device inference.",
    results:
      "Pada evaluasi dataset penelitian terisolasi (17.138 sampel), Model 3 (Conv1D + BiGRU + Attention) mencapai akurasi validasi terbaik 96.44% dan akurasi test set 96.06% dengan beban komputasi terukur pada perangkat mobile. Aplikasi berhasil mengintegrasikan fitur sign-to-text, text-to-sign, dan modul pembelajaran interaktif, serta terdaftar HKI resmi Kemenkumham RI (No. 001010151 & 001010113).",
    resultsEn:
      "In benchmark evaluations on a controlled research dataset of 17,138 samples, Model 3 (Conv1D + BiGRU + Attention) achieved 96.44% validation accuracy and 96.06% test set accuracy with balanced compute load on mobile hardware. Successfully deployed core sign-to-text, text-to-sign, and interactive learning modules, backed by official Indonesian copyright registrations (HKI No. 001010151 & 001010113).",
    architecture: [
      {
        title: "Kamera Smartphone (Input Visual)",
        description: "Android CameraX menangkap aliran frame kamera depan perangkat secara real-time pada 30 FPS.",
        tech: "Android CameraX",
      },
      {
        title: "Ekstraksi Landmark MediaPipe",
        description: "MediaPipe Hands & Pose mengekstraksi 258 koordinat keypoint 3D telapak tangan dan persendian tubuh.",
        tech: "MediaPipe Hands & Pose",
      },
      {
        title: "Feature Engineering (270D)",
        description: "Kombinasi 258 koordinat dengan 12 fitur kalkulasi sudut artikulasi dan jarak Euclidean antar jari.",
        tech: "NumPy / Python",
      },
      {
        title: "Model Conv1D + BiGRU + Attention",
        description: "Inferensi model neural network terkuantisasi TFLite untuk mengklasifikasikan 73 label gestur BISINDO.",
        tech: "TensorFlow Lite (.tflite)",
      },
      {
        title: "Sintesis Teks & Modul Edukasi",
        description: "Menampilkan teks hasil terjemahan secara real-time, text-to-sign, dan modul kuis pembelajaran isyarat.",
        tech: "Android UI & TTS",
      },
    ],
    modelDatasetDetails: {
      modelType: "Conv1D + Bidirectional GRU (BiGRU) + Attention Mechanism",
      inputShape: "(TimeSteps: 30, Features: 270D [258 landmarks + 12 engineered features])",
      datasetDescription: "Dataset primer 17.138 sampel koordinat keypoint gestur BISINDO mencakup 73 label alfabet dan kata.",
      sampleSize: "17.138 sampel (Akurasi Uji 96.06% pada dataset penelitian)",
      deployment: "On-Device Mobile Android via TensorFlow Lite & CameraX",
    },
    technologies: [
      "TensorFlow",
      "MediaPipe",
      "Computer Vision",
      "TFLite",
      "Python",
      "Android",
      "On-Device AI",
      "Keras",
      "OpenCV",
    ],
    image: "/evidence/isara-mobile-demo.jpg",
    evidenceImages: [
      {
        title: "Antarmuka Aplikasi Mobile ISARA",
        url: "/evidence/isara-mobile-demo.jpg",
        caption: "Tampilan modul Sign-to-Text dan alur deteksi gestur pada smartphone.",
      },
      {
        title: "Tabel Evaluasi Model Deep Learning",
        url: "/evidence/isara-model-evaluation-table.png",
        caption: "Tabel perbandingan arsitektur Bi-LSTM vs Conv1D + BiGRU + Attention dari portfolio resmi.",
      },
      {
        title: "Alur Ekstraksi Landmark & Inferensi",
        url: "/evidence/isara-workflow.jpg",
        caption: "Diagram tahapan Camera → Landmarks → AI Model → Text Output.",
      },
    ],
    demoUrl: "#",
    codeUrl: "#",
  },

  // 02 — THESIS RESEARCH: NLP FOR SIGN LANGUAGE TRANSLATION
  {
    id: "thesis-nlp-sign-language",
    title: "Penelitian Skripsi: Model NLP untuk Penerjemahan Bahasa Isyarat",
    titleEn: "Thesis Research: NLP Model for Sign Language Translation",
    role: "Researcher & Model Developer",
    roleEn: "Researcher & Model Developer",
    category: "AI / Machine Learning",
    featured: true,
    workflowSteps: [
      "Problem Exploration",
      "BISINDO Gloss Dataset",
      "Preprocessing & Normalization",
      "Language Model Decoding",
      "Evaluation & Text Recovery",
    ],
    description:
      "Riset pemodelan Natural Language Processing (NLP) untuk menerjemahkan representasi glosa bahasa isyarat BISINDO menjadi kalimat Bahasa Indonesia yang gramatikal dan koheren.",
    descriptionEn:
      "Academic thesis research developing Natural Language Processing pipelines to translate Indonesian sign language (BISINDO) gloss sequences into grammatically fluent Indonesian text.",
    longDescription:
      "Penelitian skripsi ini memperkuat fondasi teknis di balik sistem AI aksesibilitas seperti ISARA. Jika Computer Vision bertugas mengenali kata dasar isyarat (glosa), penelitian ini berfokus pada tahapan pemrosesan bahasa alami (NLP) untuk mengubah urutan glosa yang tidak beraturan menjadi kalimat Bahasa Indonesia yang sesuai kaidah tata bahasa. Melibatkan normalisasi glosa, penyesuaian aturan linguistik, proses decoding menggunakan Language Model dengan eksplorasi strategi decoding (Beam Search dan Nucleus Sampling), serta pemulihan ortografis afiksasi.",
    problemStatement:
      "Urutan glosa yang dihasilkan dari gestur bahasa isyarat tidak memiliki partikel penghubung, konjugasi, imbuhan, dan susunan kata baku Bahasa Indonesia, sehingga membutuhkan pemodelan NLP khusus untuk merekonstruksi makna kalimat secara utuh tanpa bias translasi literal.",
    problemStatementEn:
      "Sign language gloss sequences lack standard Indonesian affixes, functional particles, and standard syntactic word orders, requiring tailored NLP pipelines to reconstruct grammatically correct and meaningful text sentences.",
    technicalApproach:
      "Merancang alur penelitian: Problem Definition → Dataset Preparation → Preprocessing & Normalization → Language Model → Evaluation. Melakukan normalisasi glosa untuk mereduksi variasi representasi isyarat, menerapkan aturan naturalisasi sintaksis, melatih Language Model untuk memprediksi probabilitas transisi kata, dan membandingkan strategi decoding (Beam Search untuk mencari probabilitas urutan kata optimal vs Nucleus Sampling untuk diversitas ekspresi). Menguji kemampuan pemulihan ortografis untuk menghasilkan kalimat akhir yang natural.",
    technicalApproachEn:
      "Engineered an NLP experimental pipeline: Problem Definition → Dataset Preparation → Preprocessing & Normalization → Language Model → Evaluation. Normalized gloss tokens, formalized syntactic naturalization rules, trained Language Models for token transition modeling, and evaluated decoding strategies (Beam Search for optimal sequence likelihood vs Nucleus Sampling). Evaluated orthographic recovery to generate fluent Indonesian prose.",
    results:
      "Menghasilkan kerangka pipeline NLP terstruktur untuk translasi representasi isyarat ke teks Bahasa Indonesia, mendokumentasikan karakteristik decoding Beam Search dan Nucleus Sampling, serta merumuskan batasan penelitian untuk pengembangan sistem translasi bahasa isyarat masa depan.",
    resultsEn:
      "Delivered a structured NLP translation framework converting sign language glosses to coherent Indonesian sentences, evaluated Beam Search and Nucleus Sampling trade-offs, and formalized research boundaries for next-generation sign language AI systems.",
    architecture: [
      {
        title: "Gloss Token Normalization",
        description: "Pembersihan dan standardisasi token kata dasar (glosa) hasil pengenalan gestur visual.",
        tech: "Python / Text Processing",
      },
      {
        title: "Linguistic Rule Naturalization",
        description: "Penyesuaian tata bahasa isyarat ke struktur subjek-predikat-objek (SPO) Bahasa Indonesia.",
        tech: "Computational Linguistics",
      },
      {
        title: "Language Model Decoding",
        description: "Eksplorasi strategi decoding (Beam Search & Nucleus Sampling) untuk memilih probabilitas urutan kata.",
        tech: "Language Modeling / NLP",
      },
      {
        title: "Orthographic Text Recovery",
        description: "Pemulihan afiksasi, imbuhan, dan tanda baca untuk membentuk kalimat Bahasa Indonesia yang utuh.",
        tech: "Text Generation Pipeline",
      },
    ],
    technologies: [
      "Natural Language Processing",
      "Machine Learning",
      "Python",
      "Language Model",
      "Beam Search",
      "Nucleus Sampling",
      "Text Processing",
      "Model Evaluation",
    ],
    image: "/evidence/thesis-nlp-decoding.jpg",
    evidenceImages: [
      {
        title: "Representasi Bahasa Isyarat ke Teks",
        url: "/evidence/thesis-nlp-sign-language.jpg",
        caption: "Konseptualisasi penerjemahan representasi glosa bahasa isyarat menuju teks Bahasa Indonesia terstruktur.",
      },
      {
        title: "Abstrak Penelitian Skripsi",
        url: "/evidence/thesis-nlp-pipeline.png",
        caption: "Abstrak penelitian NLP penerjemahan glosa BISINDO (3.460 skenario uji, BLEU 17.12, chrF 58.80, latensi 4.89 ms).",
      },
      {
        title: "Grafik Evaluasi Eksperimen Model",
        url: "/evidence/thesis-nlp-evaluation-chart.jpg",
        caption: "Perbandingan hasil eksperimen metrik evaluasi pemodelan bahasa pada riset skripsi.",
      },
      {
        title: "Rilis Library Open-Source PyPI bisindo-trans v1.2.0",
        url: "/evidence/thesis-nlp-decoding.jpg",
        caption: "Publikasi resmi package Python bisindo-trans di PyPI sebagai implementasi terbuka riset NLP.",
      },
    ],
    demoUrl: "#",
    codeUrl: "#",
  },

  // 03 — SISTEM INFORMASI TERMINAL INDUK PAREPARE (PROYEK UNGGULAN)
  {
    id: "terminal-induk-parepare",
    title: "Sistem Informasi & Live Tracking Terminal Induk Parepare",
    titleEn: "Parepare Central Bus Terminal Information & Live Tracking System",
    role: "Lead Full-Stack & Systems Engineer",
    roleEn: "Lead Full-Stack & Systems Engineer",
    category: "Web Development",
    featured: true,
    workflowSteps: [
      "Driver Mobile Portal (GPS & Compass Telemetry)",
      "Real-time WebSocket Broadcast (Laravel Reverb)",
      "Live Map Tracking (Leaflet.js & OpenStreetMap)",
      "Public Schedule Board (Automated ETA Display)",
      "Official Dishub PDF Reporting & Admin Governance",
    ],
    description:
      "Platform terpadu monitoring & pelacakan bus real-time. Memiliki Public Schedule Board, Real-Time Live Map Tracking berbasis WebSocket & Leaflet.js, Portal Mobile Supir dengan pelacakan GPS & Telemetri live (Kecepatan, Kompas), Admin Management Panel, serta Cetak Laporan PDF resmi Dishub Kota Parepare.",
    descriptionEn:
      "Integrated real-time bus monitoring and fleet tracking platform featuring an automated Public Schedule Board, WebSocket-powered Live Map Tracking via Leaflet.js & OpenStreetMap, Driver Mobile Portal with live GPS & Telemetry (Speed, Compass heading), Admin Management Panel, and official Dishub PDF reporting.",
    longDescription:
      "Sistem Informasi Terminal Induk Parepare adalah platform cerdas pemantauan transportasi darat terpadu yang dirancang untuk modernisasi operasional terminal bus antarkota dan dalam provinsi di Kota Parepare. Sistem ini menghubungkan tiga entitas utama secara real-time: pengemudi bus melalui portal mobile pelacak GPS dan sensor telemetri (kecepatan laju dan arah kompas), masyarakat umum melalui papan jadwal keberangkatan interaktif dan peta pelacakan posisi bus langsung berbasis Leaflet.js tanpa reload halaman, serta administrator Dinas Perhubungan Kota Parepare melalui panel manajemen rute, audit log kehadiran armada, dan modul cetak laporan operasional resmi berformat PDF.",
    problemStatement:
      "Kurangnya transparansi estimasi kedatangan bus bagi penumpang umum, keterbatasan koordinasi manual keberangkatan armada terminal, serta belum adanya integrasi telemetri posisi kendaraan real-time yang tersentralisasi untuk pengawasan dinas perhubungan.",
    problemStatementEn:
      "Lack of real-time passenger ETA visibility, fragmented manual dispatching workflows across terminal operators, and the absence of a centralized GPS telemetry tracking dashboard for municipal transit oversight.",
    technicalApproach:
      "Dibangun di atas arsitektur monolit modern menggunakan Laravel 12 dan React 19 yang dihubungkan melalui Inertia.js untuk pengalaman antarmuka SPA reaktif. Mengimplementasikan Laravel Reverb sebagai dedicated WebSocket server untuk mendistribusikan koordinat spasial armada berlatensi sub-detik. Frontend memanfaatkan Leaflet.js dan OpenStreetMap dengan animasi rotasi marker bus dinamis mengikuti kompas pengemudi. Modul backend mencakup autentikasi berbasis peran (RBAC), validasi rute trayek, kalkulasi ETA otomatis, dan mesin kompilasi PDF resmi Dishub.",
    technicalApproachEn:
      "Engineered on a modern reactive monolith stack using Laravel 12 and React 19 bridged by Inertia.js. Deployed Laravel Reverb as a high-throughput WebSocket broadcast server delivering sub-second spatial coordinate payloads. The client interfaces Leaflet.js and OpenStreetMap with dynamic bus marker rotation driven by live compass heading. Backend services encompass strict RBAC, automated ETA calculations, and official PDF reporting engines.",
    results:
      "Menghadirkan platform pelacakan armada transportasi darat terintegrasi dengan latensi siaran posisi real-time di bawah 500ms, papan jadwal publik otomatis, dan pelaporan kepatuhan rute resmi untuk Dinas Perhubungan Kota Parepare.",
    resultsEn:
      "Delivered an end-to-end municipal transit tracking system with sub-500ms live location broadcast latency, automated public schedule boards, and verified compliance PDF reporting for the Transportation Department.",
    architecture: [
      {
        title: "Driver Mobile Portal & GPS Telemetry",
        description: "Perekaman koordinat latitude/longitude, kecepatan laju, dan orientasi kompas pengemudi secara live.",
        tech: "Geolocation API & Device Sensors",
      },
      {
        title: "Real-time WebSocket Broadcast Engine",
        description: "Server Laravel Reverb menyiarkan event pembaruan lokasi armada ke seluruh klien yang terhubung.",
        tech: "Laravel Reverb & WebSockets",
      },
      {
        title: "Live Interactive Map Tracking",
        description: "Visualisasi peta posisi bus bergerak dinamis dengan marker kustom dan estimasi rute real-time.",
        tech: "Leaflet.js & OpenStreetMap",
      },
      {
        title: "Public Passenger Schedule Board",
        description: "Papan monitor jadwal kedatangan, keberangkatan, dan status transit bus untuk ruang tunggu terminal.",
        tech: "React 19 & Inertia.js",
      },
      {
        title: "Admin Panel & Official PDF Reporting",
        description: "Pengelolaan manifest bus, verifikasi izin trayek, dan cetak laporan PDF resmi berkop Dishub Parepare.",
        tech: "Laravel 12 & DomPDF / Snappy",
      },
    ],
    technologies: [
      "Laravel 12",
      "React 19",
      "Inertia.js",
      "Tailwind CSS",
      "Laravel Reverb",
      "Leaflet.js",
      "OpenStreetMap",
      "WebSocket",
      "MySQL",
      "JavaScript",
    ],
    image: "/projects/terminal-induk-parepare.svg",
    evidenceImages: [
      {
        title: "Dasbor Live Tracking & Public Schedule Board Terminal Induk Parepare",
        url: "/projects/terminal-induk-parepare.svg",
        caption: "Visualisasi peta pelacakan Leaflet.js real-time berbasis Laravel Reverb WebSocket dan panel jadwal publik.",
      },
    ],
    demoUrl: "#",
    codeUrl: "#",
  },

  // 04 — E-MONEV BAPPEDA
  {
    id: "emonev-bappeda",
    title: "Sistem E-Monev Bappeda: Monitoring & Evaluasi Anggaran Daerah",
    titleEn: "Municipal E-Monev System — Bappeda Parepare",
    role: "Lead Backend Developer",
    roleEn: "Lead Backend Developer",
    category: "Backend Development",
    featured: true,
    description:
      "Arsitektur server-side enterprise berbasis Laravel dan Inertia.js untuk monitoring dan evaluasi realisasi fisik dan keuangan APBD pada 34 perangkat daerah di Kota Parepare, dilengkapi 4 tingkat RBAC dan deployment server via SSH PuTTY.",
    descriptionEn:
      "Enterprise backend-driven regional budget monitoring and evaluation system on Laravel and Inertia.js for 34 local government agencies in Parepare, featuring 4-tier RBAC and SSH server deployment via PuTTY.",
    longDescription:
      "E-Monev Bappeda adalah sistem monitoring dan evaluasi anggaran daerah berbasis backend-driven yang dirancang untuk mendukung evaluasi kinerja anggaran dan meningkatkan efisiensi alur pelaporan keuangan pemerintah. Proyek ini memprioritaskan alur data yang aman, validasi berlapis, autentikasi, otorisasi peran (RBAC), integritas data relasional, dan pelaporan terstruktur untuk kebutuhan institusi Bappeda Kota Parepare.",
    longDescriptionEn:
      "E-Monev Bappeda is a backend-driven monitoring system designed to support regional budget evaluation and improve financial monitoring workflows. Focuses on secure data flow, multi-layer validation, authentication, authorization (RBAC), data integrity, and structured reporting for municipal planning agencies.",
    problemStatement:
      "Proses konsolidasi pelaporan capaian anggaran dari 34 perangkat daerah sebelumnya mengandalkan spreadsheet manual yang rawan inkonsistensi data, membutuhkan validasi berlapis yang lambat, dan tidak memiliki jejak audit akses yang transparan.",
    problemStatementEn:
      "Consolidating quarterly budget reports from 34 regional departments previously relied on manual spreadsheets with inconsistent records, manual data verification delays, and absent access auditing.",
    technicalApproach:
      "Membangun arsitektur Model-View-Controller (MVC) server-side menggunakan Laravel dan Inertia.js. Mengimplementasikan mekanisme validasi data ketat dan integritas referensial MySQL. Menerapkan Role-Based Access Control (RBAC) dengan Spatie Permission (super_admin, admin, OPD perangkat daerah, dan operator). Membangun business logic kalkulasi deviasi target vs realisasi anggaran fisik-keuangan serta modul pelaporan terstruktur. Melakukan deployment aplikasi ke server VPS produksi melalui koneksi remote SSH menggunakan PuTTY.",
    technicalApproachEn:
      "Architected server-side MVC systems on Laravel and Inertia.js. Enforced rigorous validation rules and MySQL transactional integrity. Deployed 4-tier Role-Based Access Control via Spatie Permission (super_admin, admin, regional agency, field operator). Programmed institutional business logic calculating fiscal deviations and structured reports. Deployed the codebase to production servers over SSH using PuTTY.",
    results:
      "Sistem berhasil di-deploy ke server produksi dan secara aktif digunakan oleh seluruh 34 perangkat daerah di Kota Parepare untuk pelaporan triwulanan dan evaluasi APBD terpadu.",
    resultsEn:
      "Successfully deployed to production servers and actively used across 34 local government departments in Parepare for quarterly development reporting and APBD evaluation.",
    architecture: [
      {
        title: "Reactive Client Layer",
        description: "Antarmuka berbasis Vue.js dan Tailwind CSS, disajikan secara reaktif tanpa reload melalui Inertia.js.",
        tech: "Vue.js & Inertia.js",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        description: "Autentikasi dan otorisasi 4 tingkat akses pengguna menggunakan Spatie Permission.",
        tech: "Laravel & Spatie RBAC",
      },
      {
        title: "Business Logic Monitoring Anggaran",
        description: "Service layer penghitungan deviasi target vs realisasi fisik-keuangan dan pembobotan program kerja.",
        tech: "PHP Service Layer",
      },
      {
        title: "Relational Persistence & Audit Trail",
        description: "Skema relasional MySQL teroptimasi dengan foreign key constraints dan log pencatatan transaksi.",
        tech: "MySQL & Eloquent ORM",
      },
      {
        title: "Server Deployment via SSH",
        description: "Deployment kode sumber dan migrasi database ke remote production server menggunakan PuTTY dan SSH.",
        tech: "PuTTY & SSH Remote Server",
      },
    ],
    technologies: [
      "Laravel",
      "Inertia.js",
      "SQL",
      "MVC Architecture",
      "Authentication & Authorization",
      "MySQL",
      "REST API",
      "PuTTY",
      "SSH",
      "Application Deployment",
    ],
    image: "/evidence/emonev-bappeda-dashboard.jpg",
    evidenceImages: [
      {
        title: "Dasbor Monitoring E-Monev Bappeda",
        url: "/evidence/emonev-bappeda-dashboard.jpg",
        caption: "Tampilan visualisasi realisasi anggaran fisik dan keuangan 34 perangkat daerah Kota Parepare.",
      },
      {
        title: "Diagram Use Case & Arsitektur Hak Akses",
        url: "/evidence/emonev-usecase-diagram.jpg",
        caption: "Dokumentasi diagram use case dan pemodelan RBAC 4 tingkat pengguna sistem E-Monev.",
      },
      {
        title: "Antarmuka Manajemen & Evaluasi Anggaran",
        url: "/evidence/emonev-monitoring-ui.jpg",
        caption: "Antarmuka entri dan validasi data berjenjang untuk program, kegiatan, dan subkegiatan daerah.",
      },
    ],
    demoUrl: "https://drive.google.com/file/d/1x3zWwVp6C_xoth3EjXX6TPY1R3l5-QrL/view?usp=drive_link",
    codeUrl: "#",
  },

  // 04C — POWER BI DASHBOARD & DATA VISUALIZATION (BANK INDONESIA)
  {
    id: "bi-powerbi-dashboard",
    title: "Power BI Dashboard & Data Visualization — Bank Indonesia KPw Sulsel",
    titleEn: "Power BI Dashboard & Data Visualization — Bank Indonesia",
    role: "Data Analytics & Business Intelligence Intern — KPKP",
    roleEn: "Data Analytics & Business Intelligence Intern — KPKP",
    category: "Data Analytics & BI",
    featured: true,
    workflowSteps: [
      "Data Cleaning & Preprocessing (Python & Excel)",
      "Power Query ETL Pipeline",
      "DAX Modeling & Budget Absorption KPI",
      "Interactive Power BI Dashboard (Beranda, DHA & Prognosa)",
      "Microsoft SharePoint Minisite & Policy Notes",
    ],
    description:
      "Pengembangan dashboard interaktif Power BI berbasis pipeline ETL Power Query untuk prognosa dan monitoring realisasi anggaran KPKP Bank Indonesia KPw Sulawesi Selatan (anggaran Rp11,1 Miliar), dilengkapi pengolahan data Python/Excel serta optimasi minisite internal Microsoft SharePoint.",
    descriptionEn:
      "Interactive Power BI dashboard with automated Power Query ETL pipelines engineered for budget forecasting (prognosa) and real-time expenditure realization monitoring at Bank Indonesia South Sulawesi (KPKP, Rp11.1B allocation), paired with Python data cleaning and SharePoint minisite optimization.",
    longDescription:
      "Proyek Data Analytics & Business Intelligence ini dikerjakan pada Kelompok Perumusan Kebijakan Provinsi (KPKP) Bank Indonesia KPw Provinsi Sulawesi Selatan. Dashboard Power BI dibangun untuk memantau prognosa kegiatan, realisasi Daftar Himpunan Anggaran (DHA), persentase penyerapan anggaran, serta indikator makroekonomi dan komoditas strategis kawasan Sulampua (Sulawesi, Maluku, Papua). Selain pengembangan visualisasi analitik dan pipeline ETL Power Query, proyek ini mencakup optimasi minisite internal Microsoft SharePoint guna menyentralisasi pelaporan institusional dan penyusunan Terms of Reference (TOR) kebijakan ekonomi.",
    longDescriptionEn:
      "Data Analytics & Business Intelligence project executed at the Provincial Policy Formulation Group (KPKP) of Bank Indonesia South Sulawesi. The Power BI solution tracks operational budget allocations, activity forecasting (prognosa), DHA expenditure realization rates, and macroeconomic indicators across the Sulampua region (Sulawesi, Maluku, Papua). Beyond ETL pipelines and executive dashboards, the initiative optimized the internal Microsoft SharePoint minisite for centralized reporting and authored regional commodity policy Terms of Reference (TOR).",
    problemStatement:
      "Data prognosa kegiatan, realisasi anggaran DHA, serta indikator ekonomi makro dari berbagai sumber masih memerlukan pembersihan manual yang menyita waktu, sehingga pimpinan membutuhkan panel analitik terpusat yang mampu memantau serapan anggaran dan tren secara real-time.",
    problemStatementEn:
      "Fragmented activity prognosa sheets, DHA budget realization records, and macroeconomic series required repetitive manual cleaning, creating a need for an automated ETL pipeline and executive dashboard for real-time budget oversight.",
    technicalApproach:
      "Menggunakan Python dan Microsoft Excel untuk pembersihan dan standardisasi data historis makroekonomi serta anggaran. Membangun pipeline Extract-Transform-Load (ETL) otomatis menggunakan Power Query, lalu merancang skema relasional dan formula DAX di Power BI dengan navigasi multi-halaman (Beranda, Realisasi DHA KPKP, Prognosa Kegiatan KPKP, dan Detail Realisasi DHA). Di tingkat kolaborasi institusi, menata struktur informasi minisite internal menggunakan Microsoft SharePoint.",
    technicalApproachEn:
      "Leveraged Python and Microsoft Excel to clean and standardize historical macroeconomic and budget records. Engineered automated Extract-Transform-Load (ETL) pipelines in Power Query and relational data models with DAX KPI measures across multi-page Power BI views (Home, DHA Realization, Activity Prognosa, and Detail Drilldown), complemented by Microsoft SharePoint internal portal optimization.",
    results:
      "Menghadirkan dashboard eksekutif interaktif Power BI yang memantau alokasi anggaran KPKP sebesar Rp11,1 Miliar beserta pelacakan realisasi DHA, % penyerapan, dan rincian rencana prognosa kegiatan secara terstruktur, sekaligus meningkatkan efisiensi diseminasi pelaporan pada minisite SharePoint Bank Indonesia KPw Sulsel.",
    resultsEn:
      "Delivered an executive interactive Power BI suite monitoring Rp11.1B (Rp11,107M) in KPKP institutional budget allocations, expenditure absorption rates, and granular activity prognosa tracking, while streamlining internal document workflows via the Bank Indonesia South Sulawesi SharePoint portal.",
    architecture: [
      {
        title: "Data Preparation & Cleaning",
        description: "Pembersihan dan standardisasi dataset historis anggaran serta indikator ekonomi makro kawasan Sulampua.",
        tech: "Python & Microsoft Excel",
      },
      {
        title: "Power Query ETL Transformation",
        description: "Otomatisasi ekstraksi, transformasi skema kolom, dan konsolidasi tabel sumber data tanpa proses manual berulang.",
        tech: "Power Query ETL",
      },
      {
        title: "DAX KPI & Fiscal Modeling",
        description: "Perumusan kalkulasi total anggaran, total realisasi, sisa anggaran, persentase penyerapan, dan prognosa kegiatan.",
        tech: "Power BI & DAX",
      },
      {
        title: "Multi-Page Executive Dashboard",
        description: "Antarmuka interaktif meliputi halaman Beranda, Realisasi DHA KPKP, Prognosa Kegiatan, dan Detail Realisasi.",
        tech: "Power BI Interactive UI",
      },
      {
        title: "Institutional Minisite Optimization",
        description: "Pengelolaan struktur navigasi, repositori dokumen kajian, dan diseminasi laporan analitik internal.",
        tech: "Microsoft SharePoint",
      },
    ],
    technologies: [
      "Power BI",
      "Power Query",
      "Python",
      "Microsoft Excel",
      "SharePoint",
      "ETL",
      "Data Analytics",
      "Data Visualization",
    ],
    image: "/Picture2.png",
    evidenceImages: [
      {
        title: "Power BI Dashboard & Data Visualization — Bank Indonesia KPKP",
        url: "/Picture2.png",
        caption: "Dashboard interaktif Prognosa dan Monitoring Anggaran KPKP (Beranda, Realisasi DHA, dan Detail Prognosa) dengan Key Metrics Overview.",
      },
    ],
    demoUrl: "#",
    codeUrl: "#",
  },

  // 04A — DATASET PENGENALAN OBJEK GULMA PERTANIAN
  {
    id: "dataset-gulma-hortikultura",
    title: "Dataset Pengenalan Objek Gulma Pertanian Hortikultura",
    titleEn: "Horticultural Weed Object Recognition Dataset",
    role: "Tim Pembantu Peneliti / Dataset Engineer",
    roleEn: "Research Assistant / Dataset Engineer",
    category: "Computer Vision",
    featured: true,
    workflowSteps: [
      "Field Survey (Survei Lapangan Hortikultura)",
      "Image Capture (Koleksi Citra Beresolusi Tinggi)",
      "Annotation (Bounding Box Multi-Kelas di Roboflow)",
      "Data Augmentation (Variasi Pencahayaan & Rotasi)",
      "Train-ready Dataset (Ekspor Pascal VOC & COCO)",
    ],
    description:
      "Pengembangan dan anotasi dataset primer Computer Vision untuk deteksi dan klasifikasi multi-kelas varietas gulma pada lahan perkebunan hortikultura.",
    descriptionEn:
      "Primary Computer Vision dataset development and multi-class bounding box annotation for weed variety classification across horticultural farmlands.",
    longDescription:
      "Proyek riset lapangan ini berfokus pada pembangunan dataset primer Computer Vision berkualitas tinggi untuk membantu deteksi dan pengendalian gulma otomatis pada sektor pertanian hortikultura. Dilaksanakan melalui survei langsung di lahan perkebunan Kabupaten Enrekang dan Parepare, mengumpulkan ratusan foto tanaman dalam berbagai kondisi pencahayaan alami, kemudian melakukan kurasi taksonomi dan anotasi bounding box presisi menggunakan platform Roboflow. Proyek ini memprioritaskan konsistensi ground truth dan teknik augmentasi citra guna menghasilkan dataset siap latih yang kokoh.",
    problemStatement:
      "Identifikasi gulma pada perkebunan tropis memerlukan data visual teranotasi yang representatif terhadap variasi pencahayaan alami, kerapatan dedaunan, dan oklusi antar tanaman yang belum banyak tersedia pada dataset publik umum.",
    problemStatementEn:
      "Weed identification in tropical agricultural plots requires annotated imagery capturing natural lighting fluctuations, canopy density, and plant occlusions, which remain underrepresented in global open benchmarks.",
    technicalApproach:
      "Menjalankan alur kerja 5 tahap: Survei Lapangan → Pengumpulan Citra Primer → Anotasi Bounding Box Multi-Kelas di Roboflow → Pipeline Augmentasi Citra (rotasi, shear, penyesuaian kecerahan, blur) → Ekspor Train-Ready Dataset. Memastikan setiap bounding box mencakup objek gulma secara ketat (tight-fit) untuk meminimalkan false positive saat model deteksi dilatih.",
    technicalApproachEn:
      "Executed a 5-stage workflow: Field Survey → Primary Image Ingestion → Multi-Class Bounding Box Annotation in Roboflow → Augmentation Pipeline (rotation, shear, brightness, blur) → Train-Ready Export. Maintained tight-fitting bounding boxes to suppress false positives during detector training.",
    results:
      "Menghasilkan ratusan citra primer terkurasi dengan ribuan anotasi bounding box siap latih yang diekspor dalam format standar (COCO JSON, Pascal VOC XML, YOLO format), serta telah terdaftar Hak Cipta resmi Kemenkumham RI (No. 000767371).",
    resultsEn:
      "Delivered hundreds of curated field images with thousands of verified bounding box labels in standardized formats (COCO JSON, Pascal VOC, YOLO), registered under official Indonesian copyright (HKI No. 000767371).",
    architecture: [
      {
        title: "Field Survey & Image Acquisition",
        description: "Pengumpulan foto tanaman langsung di lahan perkebunan hortikultura Enrekang dan Parepare.",
        tech: "High-Resolution Field Cameras",
      },
      {
        title: "Taxonomy & Class Structuring",
        description: "Pengelompokan taksonomi varietas gulma dominan dan pelabelan kelas tanaman target.",
        tech: "Botanical Taxonomy & Curation",
      },
      {
        title: "Roboflow Bounding Box Annotation",
        description: "Pelabelan koordinat bounding box multi-kelas secara presisi menggunakan platform Roboflow.",
        tech: "Roboflow Platform",
      },
      {
        title: "Image Augmentation Pipeline",
        description: "Penerapan augmentasi variasi pencahayaan, rotasi spasial, dan oklusi dedaunan.",
        tech: "Roboflow Augmentation Engine",
      },
      {
        title: "Dataset Verification & Packaging",
        description: "Validasi konsistensi ground truth dan ekspor paket dataset format COCO dan YOLO.",
        tech: "COCO / YOLO Standard Formats",
      },
    ],
    technologies: [
      "Roboflow",
      "Computer Vision",
      "Image Annotation",
      "Bounding Box",
      "Data Augmentation",
      "Python",
      "OpenCV",
    ],
    image: "/projects/dataset-gulma-hortikultura.svg",
    evidenceImages: [
      {
        title: "Visualisasi Anotasi Bounding Box Multi-Kelas Gulma & Kubis (Roboflow)",
        url: "/projects/dataset-gulma-hortikultura.svg",
        caption: "Contoh pelabelan objek multi-kelas pada lahan hortikultura serta pipeline augmentasi sebelum ekspor COCO/YOLO.",
      },
    ],
    demoUrl: "#",
    codeUrl: "#",
  },

  // 04B — DATASET SEGMENTASI SEMANTIK KEBENCANAAN BANJIR
  {
    id: "dataset-banjir-cvat",
    title: "Dataset Segmentasi Semantik Bencana Banjir Perkotaan",
    titleEn: "Urban Flood Disaster Semantic Segmentation Dataset",
    role: "Tim Pembantu Peneliti / Dataset Engineer",
    roleEn: "Research Assistant / Dataset Engineer",
    category: "Computer Vision",
    featured: true,
    workflowSteps: [
      "Surveillance Video Ingestion (Video Amatir Bencana)",
      "Frame Extraction (Dekomposisi Frame via OpenCV)",
      "Representative Sampling (Penyaringan Frame Kunci)",
      "Polygon Annotation (Segmentasi Pixel-Level di CVAT)",
      "Mask Generation & Train-ready Dataset",
    ],
    description:
      "Rekayasa dataset segmentasi semantik pixel-level untuk deteksi luapan genangan air banjir perkotaan dari dekomposisi rekaman video pengawasan amatir bencana.",
    descriptionEn:
      "Pixel-level semantic segmentation dataset engineering for urban flood water runoff detection extracted from amateur disaster surveillance video recordings.",
    longDescription:
      "Proyek penelitian kebencanaan ini berfokus pada persiapan dataset visi komputer untuk mendukung sistem mitigasi bencana banjir perkotaan. Mengingat minimnya dataset bencana hidrometeorologi lokal di Indonesia, riset ini mengekstraksi ribuan frame citra dari rekaman video amatir pengawasan bencana banjir di Kota Parepare. Setiap frame representatif dianotasi secara mendalam menggunakan poligon segmentasi pixel-level pada platform CVAT untuk memisahkan kelas genangan air dari infrastruktur perkotaan (jalan, bangunan, kendaraan), menghasilkan ground truth presisi tinggi untuk pelatihan model segmentasi citra.",
    problemStatement:
      "Deteksi otomatis batas genangan air pada rekaman video amatir bencana sering terkendala distorsi optik, pantulan air, dan kontur jalan perkotaan yang tidak beraturan, membutuhkan dataset beranotasi poligon pixel-level yang akurat.",
    problemStatementEn:
      "Automated water runoff boundary detection in amateur disaster feeds is hindered by optical reflections, turbulent currents, and irregular urban topology, demanding high-precision pixel-level polygonal ground truth.",
    technicalApproach:
      "Menerapkan pipeline 5 tahap: Video Ingestion → Ekstraksi Frame beresolusi penuh menggunakan script Python OpenCV → Sampling frame kunci non-redundant → Anotasi poligon segmentasi semantik mendalam pada CVAT (Computer Vision Annotation Tool) untuk kelas air dan objek perkotaan → Validasi kualitas kontur poligon dan konversi menjadi mask biner serta mask multi-kelas siap latih.",
    technicalApproachEn:
      "Executed a 5-stage pipeline: Video Ingestion → Full-Resolution Frame Extraction via Python OpenCV → Non-Redundant Keyframe Sampling → Dense Semantic Polygon Annotation on CVAT for water and urban classes → Boundary Mask Generation & Quality Validation.",
    results:
      "Menghasilkan ribuan frame video teranotasi poligon segmentasi semantik dengan mask biner dan format ekspor Pascal VOC / COCO Mask yang digunakan sebagai dataset fondasi riset mitigasi bencana institusi.",
    resultsEn:
      "Generated thousands of validated video frames annotated with pixel-level segmentation polygons and binary masks in Pascal VOC / COCO Mask formats supporting institutional disaster research.",
    architecture: [
      {
        title: "Disaster Surveillance Video Ingestion",
        description: "Pengumpulan rekaman video amatir pengawasan bencana banjir lokal Kota Parepare.",
        tech: "Field Video Archive",
      },
      {
        title: "Automated Frame Extraction",
        description: "Dekomposisi video menjadi ribuan frame citra beresolusi penuh pada 30 FPS.",
        tech: "Python & OpenCV",
      },
      {
        title: "Keyframe Sampling & Filtering",
        description: "Penyaringan frame dengan variasi ketinggian air, pencahayaan, dan sudut kamera.",
        tech: "Data Curation Pipeline",
      },
      {
        title: "CVAT Polygon Semantic Segmentation",
        description: "Anotasi poligon detail pixel-level untuk kelas genangan air dan batas infrastruktur.",
        tech: "CVAT (Computer Vision Annotation Tool)",
      },
      {
        title: "Mask Generation & Quality Audit",
        description: "Generasi segmentation masks dan validasi konsistensi ground truth dataset siap latih.",
        tech: "Segmentation Mask / COCO Format",
      },
    ],
    technologies: [
      "CVAT",
      "Semantic Segmentation",
      "Computer Vision",
      "Polygon Masking",
      "Python",
      "OpenCV",
      "Dataset Engineering",
    ],
    image: "/evidence/cv-dataset-annotation-workflow.jpg",
    evidenceImages: [
      {
        title: "Alur Rekayasa Dataset Segmentasi Semantik Bencana",
        url: "/evidence/cv-dataset-annotation-workflow.jpg",
        caption: "Workflow ekstraksi rekaman video, anotasi poligon pada CVAT, dan pembuatan mask segmentasi semantik banjir.",
      },
    ],
    demoUrl: "#",
    codeUrl: "#",
  },

  // 05 — ORTHOPREDICTAI (GODENTIST)
  {
    id: "orthopredict-ai",
    title: "OrthoPredictAI: Research Blueprint Sistem AI Multimodal (GoDentist)",
    titleEn: "OrthoPredictAI: Multimodal AI Research Blueprint (GoDentist)",
    role: "AI Research Engineer Intern",
    roleEn: "AI Research Engineer Intern",
    category: "AI / Machine Learning",
    featured: false,
    description:
      "Penyusunan research blueprint formal untuk sistem AI multimodal kedokteran gigi ortodonti, mengeksplorasi kombinasi foto klinis, data demografis, dan kuesioner medis pasien untuk estimasi durasi dan biaya perawatan.",
    descriptionEn:
      "Formal research blueprint formulation for a multimodal clinical orthodontic AI system, exploring combinations of dental imaging, patient demographics, and medical questionnaires for treatment duration and cost estimation.",
    longDescription:
      "OrthoPredictAI dirancang selama magang riset AI di GoDentist (PT Periksa Gigi Indonesia). Proyek ini menyusun blueprint riset dan spesifikasi arsitektur AI multimodal untuk mengeksplorasi bagaimana kombinasi citra klinis gigi/wajah pra-perawatan dengan data tabular demografis serta kuesioner kebiasaan pasien dapat memproyeksikan durasi dan rentang biaya perawatan kawat gigi. Ditegaskan bahwa proyek ini berfokus pada dokumen rancangan penelitian (research blueprint), studi literatur ilmiah, dan spesifikasi pipeline data, bukan sistem yang telah diuji secara klinis di rumah sakit.",
    problemStatement:
      "Estimasi durasi dan biaya perawatan ortodonti pada praktik klinis seringkali bersifat subjektif dan bervariasi antar klinisi karena belum adanya kerangka berbasis bukti terstruktur yang memadukan parameter citra visual dan rekam medis pasien.",
    problemStatementEn:
      "Orthodontic treatment duration and cost forecasts in clinical practice often remain subjective across practitioners due to the absence of evidence-based frameworks combining visual imaging and tabular patient profiles.",
    technicalApproach:
      "Menyusun research plan komprehensif mencakup identifikasi masalah medis, hipotesis terukur, dan metodologi evaluasi. Merancang struktur dataset multimodal yang memadukan citra pra-perawatan (foto ekstraoral/intraoral) dengan data tabular (demografis pasien, tipe maloklusi, riwayat medis). Mengkaji arsitektur Convolutional Neural Network (CNN) untuk feature extraction citra serta tabular gradient boosting untuk regresi numerik.",
    technicalApproachEn:
      "Authored a formal clinical research plan formulating hypotheses and evaluation metrics. Designed multimodal dataset schemas fusing clinical orthodontic photography with tabular records. Evaluated CNN visual feature extractors and tabular gradient boosting architectures.",
    results:
      "Menghasilkan dokumen riset formal, diagram arsitektur teknis multimodal OrthoPredictAI, dan struktur skema dataset yang diserahkan sebagai landasan peta jalan produk cerdas GoDentist.",
    resultsEn:
      "Delivered formal research documentation, multimodal architecture blueprints, and clinical dataset schemas submitted to the GoDentist product engineering roadmap.",
    architecture: [
      {
        title: "Multimodal Clinical Ingestion Schema",
        description: "Pengumpulan citra fotografi intraoral/ekstraoral dan kuesioner data klinis pasien.",
        tech: "Multimodal Schema Design",
      },
      {
        title: "Visual Feature Extractor",
        description: "Kajian Convolutional Neural Network untuk mengekstraksi representasi derajat maloklusi.",
        tech: "CNN / Computer Vision",
      },
      {
        title: "Tabular Feature Fusion",
        description: "Penggabungan representasi visual dengan data numerik demografis dan riwayat klinis pasien.",
        tech: "Feature Fusion Layer",
      },
      {
        title: "Predictive Output Estimation",
        description: "Estimasi durasi waktu perawatan (bulan) dan proyeksi rentang biaya perawatan ortodonti.",
        tech: "Machine Learning Regressor",
      },
    ],
    technologies: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Python",
      "Model Evaluation",
    ],
    image: "/evidence/godentist-orthopredictai-blueprint.jpg",
    evidenceImages: [
      {
        title: "Blueprint Arsitektur AI Multimodal OrthoPredictAI",
        url: "/evidence/godentist-orthopredictai-blueprint.jpg",
        caption: "Rancangan arsitektur integrasi citra klinis, data tabular pasien, dan pipeline estimasi durasi perawatan dari portfolio resmi.",
      },
    ],
    demoUrl: "#",
    codeUrl: "#",
  },

  // 06 — OGIFARM
  {
    id: "ogifarm",
    title: "OgiFarm: Platform Manajemen FarmTech Peternakan Ayam Petelur",
    titleEn: "OgiFarm: FarmTech Layer Chicken Farm Management Platform",
    role: "Co-Founder & Chief Strategy Officer (OgiTech)",
    roleEn: "Co-Founder & Chief Strategy Officer (OgiTech)",
    category: "Mobile Development",
    featured: true,
    description:
      "Platform FarmTech berbasis mobile (Flutter & Supabase) dan web untuk mendukung pengelolaan operasional peternakan ayam petelur melalui pencatatan aktivitas kandang harian, pemantauan produksi telur, pelacakan biaya pakan, dan kalkulasi rasio konversi pakan (FCR).",
    descriptionEn:
      "FarmTech mobile and web digital management platform for layer chicken farm operations, supporting daily egg production tracking, feed conversion ratio (FCR) calculation, feed cost monitoring, and harvest profitability reports.",
    longDescription:
      "OgiFarm adalah solusi digital berbasis aplikasi mobile (Flutter & Supabase) dan web yang dikembangkan di bawah OgiTech untuk memodernisasi peternakan ayam petelur. Aplikasi mobile digunakan oleh operator kandang di lapangan untuk pencatatan harian secara real-time maupun offline-first, mencakup pencatatan jumlah butir telur, pemantauan mortalitas ayam, kalkulasi rasio konversi pakan (FCR), penghitungan biaya pakan berkala, dan visualisasi margin keuntungan operasional.",
    longDescriptionEn:
      "OgiFarm is a digital management platform engineered under OgiTech featuring a cross-platform mobile application built with Flutter and Supabase alongside web management interfaces. The mobile app facilitates on-site daily logging for barn operators—tracking egg yields, mortality rates, automated Feed Conversion Ratio (FCR) calculation, feed cost accounting, and harvest profitability analytics.",
    problemStatement:
      "Pencatatan operasional peternakan ayam petelur tradisional umumnya masih menggunakan buku fisik atau spreadsheet terpisah, menyebabkan keterlambatan deteksi penurunan produksi telur dan kesulitan menghitung margin keuntungan pakan secara presisi.",
    problemStatementEn:
      "Traditional layer chicken farming operations rely on fragmented paper logbooks and manual sheets, leading to delayed anomaly detection in egg production and imprecise feed margin calculations.",
    technicalApproach:
      "Membangun aplikasi mobile cross-platform menggunakan Flutter dengan integrasi Supabase untuk sinkronisasi database PostgreSQL real-time, manajemen autentikasi aman, dan pencatatan data lapangan. Mengembangkan modul kalkulasi otomatis untuk metrik Hen-Day Production (HDP), konsumsi pakan harian per ekor, dan dasbor visualisasi tren produksi telur berkala.",
    technicalApproachEn:
      "Engineered a cross-platform mobile application utilizing Flutter paired with Supabase for real-time PostgreSQL synchronization, secure role-based access, and offline-first field data logging. Implemented automated metric calculation engines for Hen-Day Production (HDP), daily feed intake per bird, and production trend analytics.",
    results:
      "Platform mobile dan web berhasil diuji coba pada operasional peternakan mitra untuk digitalisasi pencatatan harian dan pemantauan efisiensi pakan secara real-time.",
    resultsEn:
      "Successfully piloted the Flutter mobile app and web dashboard with partner farm operations to digitize daily flock records and monitor feed efficiency metrics in real-time.",
    technologies: [
      "Flutter",
      "Supabase",
      "Dart",
      "Mobile App Development",
      "Laravel",
      "PostgreSQL",
      "REST API",
      "Tailwind CSS",
    ],
    image: "/projects/ogifarm.svg",
    demoUrl: "#",
    codeUrl: "#",
  },

  // 07 — OGI'E
  {
    id: "ogie",
    title: "Ogi'E: Platform Teknologi Bahasa & Pelestarian Aksara Lontara",
    titleEn: "Ogi'E: Language Technology & Lontara Script Preservation",
    role: "Co-Founder & Chief Strategy Officer (OgiTech)",
    roleEn: "Co-Founder & Chief Strategy Officer (OgiTech)",
    category: "Mobile Development",
    featured: false,
    description:
      "Aplikasi mobile teknologi bahasa dan pelestarian budaya yang berfokus pada digitalisasi, transliterasi fonetik interaktif, dan pelestarian bahasa Bugis serta aksara daerah Lontara berbasis antarmuka modern.",
    descriptionEn:
      "Mobile language technology application focused on digitalizing, interactive phonetic transliteration, and preserving the indigenous Bugis language and Lontara script through modern pedagogical interfaces.",
    longDescription:
      "Ogi'E dikembangkan di OgiTech sebagai inisiatif pelestarian budaya lokal berbasis teknologi informasi modern. Dibangun sebagai aplikasi mobile cross-platform menggunakan Flutter dan backend Supabase, platform ini menyediakan kamus digital kosakata Bugis, modul transliterasi latin ke aksara Lontara dua arah, kuis pembelajaran interaktif, serta modul pengenalan aksara daerah berbasis visual.",
    longDescriptionEn:
      "Engineered under OgiTech as a cultural preservation initiative powered by digital language tools. Developed as a cross-platform mobile application leveraging Flutter and Supabase, featuring a Bugis lexical dictionary, Latin-to-Lontara transliteration engine, interactive learning quizzes, and visual character recognition modules.",
    problemStatement:
      "Menurunnya tingkat literasi generasi muda terhadap aksara daerah Lontara dan minimnya media digital interaktif yang memudahkan masyarakat mempelajari bahasa daerah Bugis secara mandiri.",
    problemStatementEn:
      "Declining indigenous Lontara script literacy among younger demographics and a lack of accessible, modern digital learning tools for the Bugis language.",
    technicalApproach:
      "Membangun aplikasi mobile menggunakan Flutter dengan integrasi Supabase untuk manajemen konten kamus terpusat, autentikasi pengguna, dan sinkronisasi data progres belajar. Merancang mesin transliterasi fonetik dua arah berbasis aturan linguistik aksara Lontara serta antarmuka kuis interaktif.",
    technicalApproachEn:
      "Engineered the mobile client using Flutter paired with Supabase for centralized dictionary data management, user authentication, and learning progress synchronization. Built a rule-based bidirectional phonetic transliteration engine for Lontara script and interactive quiz interfaces.",
    results:
      "Menghasilkan prototipe aplikasi mobile pembelajaran dan transliterasi aksara Lontara yang dipresentasikan dalam forum inovasi daerah.",
    resultsEn:
      "Delivered functional mobile learning and transliteration prototypes presented at regional technology showcase forums.",
    technologies: [
      "Flutter",
      "Supabase",
      "Dart",
      "Mobile App Development",
      "Python",
      "Natural Language Processing",
      "REST API",
    ],
    image: "/projects/ogie.svg",
    demoUrl: "#",
    codeUrl: "#",
  },

  // 08 — MINING FLEET DSS
  {
    id: "mining-fleet-dss",
    title: "Mining Fleet Operations Decision Support System",
    titleEn: "Mining Fleet Operations Decision Support System",
    role: "AI & Software Engineer (Independent Project)",
    roleEn: "AI & Software Engineer (Independent Project)",
    category: "AI / Machine Learning",
    featured: false,
    description:
      "Sistem cerdas pendukung keputusan operasional armada tambang berbasis telemetri IoT real-time, deteksi anomali konsumsi bahan bakar, estimasi keausan komponen, dan scoring risiko operasional.",
    descriptionEn:
      "Intelligent decision support platform for mining fleets integrating real-time IoT telemetry, ML fuel consumption anomaly detection, and predictive maintenance risk scoring.",
    longDescription:
      "Sistem rekayasa terintegrasi yang menggabungkan transmisi telemetri IoT armada dump truck / alat berat tambang dengan analitik prediktif. Sistem dirancang untuk meningkatkan efisiensi konsumsi bahan bakar, meminimalkan downtime tak terduga melalui predictive maintenance, dan memberikan rekomendasi rute serta kecepatan optimal.",
    longDescriptionEn:
      "Integrated engineering system connecting dump truck IoT telemetry with predictive analytics. Designed to optimize fuel efficiency, minimize unplanned mechanical downtime, and deliver telemetry route recommendations.",
    problemStatement:
      "Biaya operasional tinggi akibat inefisiensi bahan bakar dan kerusakan mendadak komponen alat berat tambang, di mana data sensor telemetri seringkali hanya dicatat tanpa analisis prediktif berbasis machine learning.",
    problemStatementEn:
      "Excessive fuel consumption and unexpected heavy machinery downtime in open-pit mining, where massive telemetry data streams remain unexploited without predictive modeling.",
    technicalApproach:
      "Membangun pipeline ingestion telemetri berkemampuan tinggi menggunakan protokol MQTT dan backend berbasis FastAPI. Menyimpan data spasial dan time-series ke PostgreSQL dengan ekstensi PostGIS untuk analisis geofencing dan rute tambang. Merancang model Machine Learning untuk deteksi anomali pola kerja mesin, estimasi sisa umur pakai komponen (Remaining Useful Life), serta kalkulasi risk score keselamatan armada.",
    technicalApproachEn:
      "Constructed high-throughput ingestion pipelines utilizing MQTT and asynchronous FastAPI services. Persisted spatial and time-series telemetry into PostgreSQL with PostGIS extensions. Formulated ML pipelines for operational anomaly detection, Remaining Useful Life (RUL) estimation, and predictive safety scoring.",
    results:
      "Berhasil membangun prototipe ingestion telemetri real-time, skema database PostGIS, dan dasbor pemantauan status armada dengan visualisasi metrik operasional terpadu.",
    resultsEn:
      "Engineered real-time telemetry ingestion prototype, PostGIS spatial database schemas, and fleet status monitoring dashboards with integrated operational metrics.",
    architecture: [
      {
        title: "IoT Ingestion [Implemented]",
        description: "Broker MQTT menerima payload telemetri GPS, kecepatan, temperatur mesin, beban muatan, dan konsumsi bahan bakar.",
        tech: "MQTT & Python Ingestion Service",
      },
      {
        title: "Spatial & Time-Series DB",
        description: "PostgreSQL dengan ekstensi PostGIS menyimpan titik geolokasi, geofencing area tambang, dan time-series sensor.",
        tech: "PostgreSQL & PostGIS",
      },
      {
        title: "REST & WebSocket API",
        description: "FastAPI menyajikan endpoint metrik armada secara asinkron dan streaming telemetri langsung.",
        tech: "FastAPI / Python",
      },
    ],
    technologies: [
      "FastAPI",
      "Python",
      "MQTT",
      "PostgreSQL",
      "PostGIS",
      "Machine Learning",
      "Docker",
      "IoT Telemetry",
    ],
    image: "/projects/mining-fleet-dss.svg",
    demoUrl: "#",
    codeUrl: "#",
  },

  // 10 — WEB E-COMMERCE PRODUK KECANTIKAN
  {
    id: "ecommerce-produk-kecantikan",
    title: "Web E-Commerce Produk Kecantikan & Kosmetik",
    titleEn: "Beauty & Cosmetics Web E-Commerce Platform",
    role: "Full-Stack Web Developer",
    roleEn: "Full-Stack Web Developer",
    category: "Web Development",
    featured: false,
    workflowSteps: [
      "Product Catalog (Katalog Produk & Shade Picker)",
      "Cart & Inventory Validation (Validasi Stok Varian)",
      "Automated Address Lookup (Pengisian Alamat Otomatis)",
      "Checkout & Payment Pipeline (Alur Transaksi Aman)",
      "Admin Order Fulfillment (Manajemen Pesanan & Stok)",
    ],
    description:
      "Platform e-commerce web terpadu untuk produk kecantikan dan kosmetik berbasis Laravel, mendukung manajemen stok produk & varian shade otomatis, serta alur checkout dan pengisian alamat otomatis.",
    descriptionEn:
      "Integrated web e-commerce platform for beauty and cosmetic products powered by Laravel, supporting dynamic inventory management, multi-shade variant cataloging, and streamlined automated checkout with address autocomplete.",
    longDescription:
      "Platform Web E-Commerce Produk Kecantikan dirancang untuk menyajikan pengalaman berbelanja kosmetik dan perawatan kulit (skincare) yang mulus dan intuitif. Sistem ini menangani kompleksitas katalog kecantikan melalui fitur multi-shade selector dinamis (pilihan warna bedak, lipstik, dan foundation) yang langsung terhubung ke database inventaris untuk pembaruan stok otomatis. Dilengkapi alur checkout efisien dengan pengisian alamat otomatis, integrasi kalkulasi ongkos kirim transparan, dan panel admin merchant untuk memantau status pembayaran serta pengelolaan pemenuhan pesanan pelanggan.",
    problemStatement:
      "Tingginya tingkat kegagalan transaksi (cart abandonment) pada toko online kosmetik akibat alur checkout yang rumit, ketidaksesuaian varian shade produk, dan kesalahan pengisian data alamat pengiriman manual.",
    problemStatementEn:
      "High shopping cart abandonment rates in online beauty stores caused by cumbersome multi-step checkouts, inaccurate shade variant stock tracking, and manual shipping address entry errors.",
    technicalApproach:
      "Dibangun menggunakan framework Laravel dan arsitektur database relasional MySQL yang dinormalisasi untuk menangani relasi produk, atribut varian shade, pesanan, dan pengguna. Menggunakan Docker dan Nginx untuk standardisasi lingkungan kontainerisasi aplikasi. Frontend memadukan Tailwind CSS dan Bootstrap dengan JavaScript untuk antarmuka interaktif pemilih varian shade dan validasi form checkout otomatis tanpa refresh halaman.",
    technicalApproachEn:
      "Built with Laravel and a normalized MySQL relational database modeling products, variant attributes, orders, and customer accounts. Containerized using Docker and Nginx for reproducible deployment. The frontend combines Tailwind CSS and Bootstrap with dynamic JavaScript for interactive shade selection and instant address autocomplete validation.",
    results:
      "Menghasilkan aplikasi e-commerce kecantikan yang responsif dengan sinkronisasi inventaris varian shade real-time, alur pembelian ringkas dengan pengisian alamat otomatis, serta dashboard admin merchant terpadu.",
    resultsEn:
      "Delivered a responsive beauty e-commerce web application with real-time shade inventory synchronization, frictionless address autocomplete checkout, and an integrated merchant order management dashboard.",
    architecture: [
      {
        title: "Product Catalog & Variant Shade Engine",
        description: "Pengelolaan katalog kosmetik dengan pemilih shade visual dan status ketersediaan dinamis.",
        tech: "Laravel & MySQL",
      },
      {
        title: "Automated Address & Cart Services",
        description: "Validasi keranjang belanja instan dan pengisian alamat pengiriman otomatis berbasis API.",
        tech: "JavaScript & Address Services",
      },
      {
        title: "Secure Checkout & Order Lifecycle",
        description: "Alur transaksi pemesanan dengan verifikasi pembayaran dan pembuatan nomor invoice.",
        tech: "Laravel Transactions & Session",
      },
      {
        title: "Merchant Admin & Inventory Control",
        description: "Dasbor kontrol stok, update status pengiriman, dan pelaporan penjualan produk.",
        tech: "Tailwind CSS & Blade Engine",
      },
      {
        title: "Containerized Production Environment",
        description: "Pengemasan stack aplikasi berbasis Nginx dan PHP-FPM di dalam kontainer Docker.",
        tech: "Docker & Nginx",
      },
    ],
    technologies: [
      "Laravel",
      "MySQL",
      "Docker",
      "Nginx",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "PHP",
    ],
    image: "/projects/ecommerce-produk-kecantikan.svg",
    demoUrl: "#",
    codeUrl: "#",
  },

  // 11 — SMART HYDROPONIC AI
  {
    id: "hidroponik-ai",
    title: "Sistem AI Monitoring & Prediksi Hidroponik Cerdas",
    titleEn: "Smart Hydroponic AI Monitoring & Quality Prediction System",
    role: "AI & Embedded Engineer",
    roleEn: "AI & Embedded Engineer",
    category: "AI / Machine Learning",
    featured: false,
    description:
      "Sistem pemantauan kualitas panen selada hidroponik berbasis sensor IoT telemetri (suhu, kelembaban, TDS) dan model inferensi Artificial Neural Network (ANN) serta LSTM.",
    descriptionEn:
      "Smart hydroponic crop monitoring and yield quality prediction system connecting physical IoT telemetry (temperature, humidity, TDS) with ANN and LSTM neural network inference.",
    longDescription:
      "Proyek rekayasa sistem terintegrasi yang menggabungkan perangkat keras mikrokontroler ESP32, sensor kimia-fisik nutrisi air (TDS meter, pH, sensor suhu dan kelembaban udara), dengan jaringan saraf tiruan (ANN & LSTM). Sistem memprediksi estimasi bobot panen dan kualitas daun selada berdasarkan akumulasi parameter mikroklimat lingkungan kandang hidroponik.",
    longDescriptionEn:
      "Integrated engineering system connecting ESP32 microcontrollers, water nutrient sensors (TDS, pH, ambient temperature, humidity), with artificial neural networks (ANN & LSTM) predicting crop yield weights and growth quality.",
    problemStatement:
      "Fluktuasi nutrisi air dan suhu mikroklimat yang tidak terpantau dapat menyebabkan gagal panen atau pertumbuhan tanaman kerdil, sementara petani hidroponik skala kecil membutuhkan sistem peringatan dini yang terjangkau.",
    problemStatementEn:
      "Unmonitored nutrient and microclimate shifts cause crop failures, creating a critical need for accessible early-warning predictive systems for urban hydroponic growers.",
    technicalApproach:
      "Membangun firmware pembaca sensor pada ESP32, mengirimkan data berkala melalui protokol HTTP/MQTT ke server lokal. Melatih model ANN dan LSTM menggunakan TensorFlow/Keras untuk memetakan deret waktu telemetri sensor ke estimasi kelas kualitas panen (Grade A, B, C).",
    technicalApproachEn:
      "Authored sensor firmware on ESP32 microcontrollers streaming telemetry over HTTP/MQTT. Trained ANN and LSTM neural network models in TensorFlow/Keras mapping time-series telemetry to harvest quality grades.",
    results:
      "Prototipe perangkat IoT dan model inferensi sukses diuji coba di instalasi hidroponik mini kampus dengan korelasi prediksi yang konsisten.",
    resultsEn:
      "Engineered operational IoT telemetry prototype and predictive inference pipeline validated on collegiate mini-hydroponic installations.",
    technologies: [
      "Python",
      "TensorFlow",
      "ANN",
      "LSTM",
      "IoT",
      "ESP32",
      "Scikit-Learn",
      "Android",
    ],
    image: "/projects/hidroponik-ai.svg",
    demoUrl: "#",
    codeUrl: "#",
  },
]
