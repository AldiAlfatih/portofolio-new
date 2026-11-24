import { ProjectItem } from "@/types/portfolio"

export const projectsData: ProjectItem[] = [
  {
    id: "isara-bisindo",
    title: "ISARA: Inovasi Komunikasi Dua Arah Bahasa Isyarat",
    role: "Co-Founder & AI Engineer",
    category: "Computer Vision",
    featured: true,
    description:
      "Arsitektur Computer Vision dan mobile on-device AI untuk menerjemahkan Bahasa Isyarat Indonesia (BISINDO) ke teks/suara secara near real-time dengan akurasi test set 96.06%. Berhasil meraih pendanaan nasional PKM-KC 2025.",
    longDescription:
      "ISARA adalah platform komunikasi inklusif yang menjembatani kesenjangan komunikasi antara komunitas Tuli dan masyarakat dengar. Sistem memanfaatkan kamera ponsel pintar biasa untuk menangkap pose tangan dan tubuh, memproses landmark spasial, dan menerjemahkannya ke teks/audio secara langsung di perangkat (on-device AI) tanpa ketergantungan server awan.",
    problemStatement:
      "Keterbatasan akses penerjemah bahasa isyarat profesional di ruang publik dan institusi layanan masyarakat, sementara aplikasi yang ada umumnya bergantung pada cloud computing yang lambat dan memerlukan kuota internet stabil.",
    technicalApproach:
      "Mengekstraksi 270 fitur data sekuensial per frame, terdiri dari 258 fitur landmark spasial 3D MediaPipe (Hands & Pose) serta 12 fitur sudut dan jarak hasil feature engineering. Model deep learning dilatih menggunakan arsitektur gabungan Conv1D, Bidirectional GRU (BiGRU), dan Attention Mechanism untuk mengenali 73 label BISINDO pada dataset 17.138 sampel. Model dikonversi ke format TensorFlow Lite (.tflite) dan diintegrasikan dengan Android CameraX untuk inferensi cepat berlatensi rendah secara offline.",
    results:
      "Meraih akurasi 96,06% pada test set evaluasi, memenangkan pendanaan nasional PKM-KC Kemendikbudristek DIKTI 2025, dan sukses diintegrasikan dengan fitur Sign-to-Text, Text-to-Sign, serta modul pembelajaran interaktif.",
    architecture: [
      {
        title: "Video Stream Ingestion",
        description: "Android CameraX menangkap aliran frame video kamera depan perangkat secara real-time pada 30 FPS.",
        tech: "Android CameraX",
      },
      {
        title: "Landmark Extraction & Feature Engineering",
        description: "MediaPipe mengekstraksi 258 koordinat spasial 3D, dikombinasikan dengan 12 fitur sudut dan jarak relatif hasil feature engineering (total 270 fitur).",
        tech: "MediaPipe Hands & Pose",
      },
      {
        title: "Sequential Preprocessing",
        description: "Normalisasi koordinat pergelangan tangan dan pembentukan jendela waktu sekuensial (temporal sliding window) untuk 17.138 sampel dataset.",
        tech: "Python / NumPy",
      },
      {
        title: "Neural Classifier with Attention",
        description: "Inferensi model Conv1D + BiGRU + Attention Mechanism terkuantisasi TFLite untuk mengenali 73 label gestur BISINDO.",
        tech: "TensorFlow Lite (.tflite)",
      },
      {
        title: "Bidirectional Synthesis",
        description: "Menampilkan hasil transkripsi teks, memutar sintesis audio Text-to-Speech, serta menyediakan modul animasi Text-to-Sign dan edukasi.",
        tech: "Android TTS & Canvas",
      },
    ],
    modelDatasetDetails: {
      modelType: "Conv1D + Bidirectional GRU (BiGRU) + Attention Mechanism",
      inputShape: "(TimeSteps: 30, Features: 270 [258 landmarks + 12 engineered features])",
      datasetDescription: "Dataset primer 17.138 sampel koordinat keypoint terstruktur mencakup 73 label alfabet dan kata BISINDO.",
      sampleSize: "17.138 sampel (Akurasi Test-Set 96.06%)",
      deployment: "On-Device Mobile Android via TensorFlow Lite & CameraX",
    },
    technologies: [
      "Python",
      "TensorFlow",
      "MediaPipe",
      "TFLite",
      "Keras",
      "OpenCV",
      "Android",
      "Java",
      "CameraX",
    ],
    image: "/ai-project-showcase.png",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "emonev-bappeda",
    title: "Sistem E-Monev Bappeda Kota Parepare",
    role: "Lead Backend Developer",
    category: "Backend Development",
    featured: true,
    description:
      "Arsitektur server-side enterprise berbasis Laravel 12.9.2, MySQL, dan Inertia.js untuk pemantauan dan evaluasi realisasi fisik dan keuangan program pembangunan pada 34 perangkat daerah di Kota Parepare.",
    longDescription:
      "Sistem Elektronik Monitoring dan Evaluasi (E-Monev) yang dikembangkan untuk Badan Perencanaan Pembangunan Daerah (Bappeda) Kota Parepare. Platform ini menggantikan rekapitulasi spreadsheet manual dan mengotomatisasi kalkulasi deviasi realisasi fisik serta keuangan di seluruh dinas/badan perangkat daerah.",
    problemStatement:
      "Proses konsolidasi pelaporan capaian anggaran dari 34 perangkat daerah sebelumnya memakan waktu berminggu-minggu, rentan inkonsistensi data antar dokumen anggaran, dan sulit diaudit riwayat perubahannya secara transparan.",
    technicalApproach:
      "Merancang struktur database relasional menggunakan MySQL dengan Entity Relationship Diagram (ERD) menyeluruh, indexing teroptimasi, dan database migration. Mengembangkan REST API, modular business logic, serta CRUD berjenjang untuk urusan, bidang urusan, program, kegiatan, subkegiatan, dan pos belanja menggunakan Laravel 12.9.2. Mengintegrasikan autentikasi dan Role-Based Access Control (RBAC) bertingkat menggunakan Spatie Permission (super_admin, admin, perangkat daerah, operator). Menghubungkan backend dengan Vue.js melalui adapter Inertia.js untuk pengalaman antarmuka modern tanpa reload halaman.",
    results:
      "Sistem berhasil di-deploy ke server produksi dan secara aktif digunakan oleh 34 perangkat daerah di lingkungan Pemerintah Kota Parepare untuk pelaporan triwulanan dan evaluasi APBD.",
    architecture: [
      {
        title: "Reactive Client Layer",
        description: "Antarmuka berbasis Vue.js dan Tailwind CSS, disajikan secara reaktif tanpa reload melalui Inertia.js.",
        tech: "Vue.js & Inertia.js",
      },
      {
        title: "Routing & Authorization Gate",
        description: "Sesi otentikasi aman dengan RBAC 4 tingkat (super_admin, admin, perangkat daerah, operator) via Spatie Permission.",
        tech: "Laravel 12.9.2 & Spatie",
      },
      {
        title: "Enterprise Business Logic",
        description: "Service layer yang mengkalkulasi pagu anggaran, deviasi target vs realisasi fisik-keuangan, dan pembobotan program kerja.",
        tech: "PHP / Service-Repository Pattern",
      },
      {
        title: "Relational Persistence",
        description: "Penyimpanan data terstruktur pada MySQL dengan integritas referensial dan audit trail pencatatan aktivitas.",
        tech: "MySQL & Eloquent ORM",
      },
    ],
    modelDatasetDetails: {
      modelType: "Relational Database & Enterprise Business Logic",
      datasetDescription: "Database master program, subkegiatan, pagu anggaran, dan realisasi fisik-keuangan APBD Kota Parepare.",
      deployment: "Linux VPS dengan Web Server Nginx & PHP-FPM",
    },
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Inertia.js",
      "Vue.js",
      "Tailwind CSS",
      "REST API",
      "Spatie Permission",
    ],
    image: "/ai-project-showcase.png",
    demoUrl: "https://drive.google.com/file/d/1x3zWwVp6C_xoth3EjXX6TPY1R3l5-QrL/view?usp=drive_link",
    codeUrl: "#",
  },
  {
    id: "orthopredict-ai",
    title: "OrthoPredictAI: Multimodal Orthodontic Treatment Prediction",
    role: "AI Research Engineer (GoDentist)",
    category: "AI / Machine Learning",
    featured: true,
    description:
      "Riset dan perancangan konsep sistem kecerdasan buatan multimodal yang mengintegrasikan citra klinis ortodonti dan data pasien terstruktur untuk memprediksi durasi dan estimasi biaya perawatan gigi.",
    longDescription:
      "OrthoPredictAI dikembangkan selama magang riset AI di GoDentist (PT Periksa Gigi Indonesia). Proyek ini merancang blueprint teknologi AI di bidang kedokteran gigi untuk membantu dokter gigi spesialis ortodonti memprediksi lama durasi pemasangan kawat gigi dan kalkulasi biaya perawatan secara lebih akurat dan objektif.",
    problemStatement:
      "Penentuan durasi dan biaya perawatan ortodonti selama ini sangat bergantung pada estimasi subjektif dokter dengan variasi tinggi, minim dukungan data kuantitatif historis, dan sulit diprediksi sebelum terapi dimulai.",
    technicalApproach:
      "Menyusun dokumen rancangan riset formal (research plan) yang memuat formulasi masalah klinis, tujuan penelitian, pertanyaan riset, hipotesis terukur, dan metodologi evaluasi. Merancang struktur dataset multimodal yang memadukan citra pra-perawatan (foto ekstraoral/intraoral) dengan data tabular (demografis pasien, tipe maloklusi, kebiasaan, riwayat medis, dan biaya historis). Melakukan kajian literatur terhadap model Convolutional Neural Network (CNN) dan tabular gradient boosting untuk perencanaan ortodontik serta merancang arsitektur pipeline inferensi sistem.",
    results:
      "Menghasilkan dokumen riset komprehensif, desain arsitektur teknis OrthoPredictAI, dan struktur dataset multimodal yang diadopsi sebagai dasar implementasi modul cerdas di ekosistem GoDentist.",
    architecture: [
      {
        title: "Multimodal Clinical Ingestion",
        description: "Pengumpulan citra fotografi intraoral/ekstraoral dan kuesioner data klinis pasien.",
        tech: "Multimodal Data Schema",
      },
      {
        title: "Visual Feature Extraction",
        description: "Pipeline Computer Vision untuk mengekstraksi representasi derajat keparahan maloklusi gigi dari citra.",
        tech: "CNN / Computer Vision",
      },
      {
        title: "Tabular Feature Fusion",
        description: "Penggabungan vektor visual dengan data numerik demografis, biologis, dan riwayat klinis pasien.",
        tech: "Feature Fusion Layer",
      },
      {
        title: "Predictive Output",
        description: "Estimasi durasi waktu perawatan dalam hitungan bulan dan proyeksi rentang biaya perawatan ortodonti.",
        tech: "Machine Learning Regressor",
      },
    ],
    modelDatasetDetails: {
      modelType: "Multimodal Deep Learning (Vision Feature Extractor + Tabular Regressor)",
      inputShape: "Citra Klinis Gigi (RGB) + Vektor Tabular Pasien",
      datasetDescription: "Skema dataset multimodal penggabungan citra fotografi ortodonti dan parameter klinis demografis.",
      deployment: "Research Blueprint & Technical Specification Architecture",
    },
    technologies: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "Multimodal Data",
      "Healthcare AI",
      "Research Design",
      "Literature Review",
    ],
    image: "/ai-project-showcase.png",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "mining-fleet-dss",
    title: "Mining Fleet Operations Decision Support System",
    role: "AI & Software Engineer (Independent Project)",
    category: "AI / Machine Learning",
    featured: true,
    description:
      "Sistem cerdas pendukung keputusan operasional armada tambang berbasis telemetri IoT real-time, deteksi anomali konsumsi bahan bakar, estimasi keausan komponen, dan scoring risiko operasional.",
    longDescription:
      "Sistem rekayasa terintegrasi yang menggabungkan transmisi telemetri IoT armada dump truck / alat berat tambang dengan analitik prediktif. Sistem dirancang untuk meningkatkan efisiensi konsumsi bahan bakar, meminimalkan downtime tak terduga melalui predictive maintenance, dan memberikan rekomendasi rute serta kecepatan optimal.",
    problemStatement:
      "Biaya operasional tinggi akibat inefisiensi bahan bakar dan kerusakan mendadak komponen alat berat tambang, di mana data sensor telemetri seringkali hanya dicatat tanpa analisis prediktif berbasis machine learning.",
    technicalApproach:
      "Membangun pipeline ingestion telemetri berkemampuan tinggi menggunakan protokol MQTT dan backend berbasis FastAPI. Menyimpan data spasial dan time-series ke PostgreSQL dengan ekstensi PostGIS untuk analisis geofencing dan rute tambang. Merancang model Machine Learning untuk deteksi anomali pola kerja mesin, estimasi sisa umur pakai komponen (Remaining Useful Life), serta kalkulasi risk score keselamatan armada. Fitur ingestion data dan penyimpanan database telah diimplementasikan, sedangkan model deep anomaly dan algoritma dispatch otomatis sedang dalam tahap riset lanjutan.",
    results:
      "Berhasil membangun prototipe ingestion telemetri real-time, skema database PostGIS, dan dasbor pemantauan status armada dengan visualisasi metrik operasional terpadu.",
    architecture: [
      {
        title: "IoT Ingestion [Implemented]",
        description: "Broker MQTT menerima payload telemetri GPS, kecepatan, temperatur mesin, beban muatan, dan konsumsi bahan bakar.",
        tech: "MQTT Protocol & Python",
      },
      {
        title: "Backend Core API [Implemented]",
        description: "Layanan API asinkron FastAPI berkinerja tinggi untuk validasi payload dan orkestrasi data.",
        tech: "FastAPI & Docker",
      },
      {
        title: "Spatial & Time-Series DB [Implemented]",
        description: "Penyimpanan data koordinat lokasi pit tambang, geofencing, dan riwayat telemetri berindeks spasial.",
        tech: "PostgreSQL & PostGIS",
      },
      {
        title: "Predictive Analytics [Planned / In-Progress]",
        description: "Pipeline machine learning untuk deteksi anomali bahan bakar, pemeliharaan prediktif, dan dispatching cerdas.",
        tech: "Scikit-Learn & ML Anomaly Detection",
      },
    ],
    modelDatasetDetails: {
      modelType: "Time-Series Anomaly Detection & Predictive Maintenance Regressor",
      inputShape: "(Telemetry Signals: Speed, RPM, Fuel Flow Rate, Engine Temp, Payload)",
      datasetDescription: "Dataset telemetri operasional armada tambang dan riwayat log pemeliharaan mesin.",
      deployment: "FastAPI REST Server, MQTT Broker, dan Docker Container",
    },
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
    image: "/ai-project-showcase.png",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "ogitech-ecosystem",
    title: "OgiTech Enterprise & AI Solutions (OgiFarm & Ogi'E)",
    role: "Software & AI Engineer",
    category: "Web Development",
    featured: false,
    description:
      "Pengembangan rangkaian produk teknologi di OgiTech yang mencakup aplikasi FarmTech OgiFarm, teknologi pelestarian bahasa daerah Ogi'E, dan platform e-commerce skincare berbasis Computer Vision.",
    longDescription:
      "Di OgiTech, Aldi merancang dan membangun ekosistem perangkat lunak yang menjawab kebutuhan industri riil: OgiFarm memodernisasi pencatatan operasional peternakan, Ogi'E mendigitalisasi aksara Lontara dan bahasa daerah, sedangkan platform skincare mengintegrasikan Computer Vision untuk rekomendasi produk berdasarkan analisis foto wajah pengguna.",
    problemStatement:
      "Kebutuhan transformasi digital di sektor agribisnis peternakan lokal, ancaman kepunahan aksara daerah, dan kebutuhan konsumen skincare akan analisis kondisi kulit yang objektif.",
    technicalApproach:
      "Mengembangkan arsitektur backend andal berbasis Laravel dan REST API, antarmuka reaktif menggunakan React/Vue.js, serta aplikasi mobile pendukung. Menerapkan modul Computer Vision berbasis OpenCV dan model klasifikasi wajah untuk mengevaluasi jenis kulit dan mencocokkannya dengan katalog bahan aktif produk kecantikan.",
    results:
      "Produk-produk berhasil diluncurkan dan digunakan oleh pengguna target untuk operasional peternakan, edukasi budaya, dan transaksi e-commerce.",
    technologies: [
      "Python",
      "Computer Vision",
      "Laravel",
      "PHP",
      "React",
      "Vue.js",
      "PostgreSQL",
      "REST API",
    ],
    image: "/ai-project-showcase.png",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "hidroponik-ai",
    title: "Sistem AI Monitoring & Prediksi Hidroponik Cerdas",
    role: "AI Engineer",
    category: "AI / Machine Learning",
    featured: false,
    description:
      "Pengembangan model prediktif berbasis Artificial Neural Network (ANN) dan LSTM untuk meramalkan kualitas panen tanaman selada berdasarkan telemetri sensor lingkungan fisik IoT.",
    longDescription:
      "Sistem pertanian presisi yang menggabungkan stasiun pemantau mikrokontroler dengan analitik prediktif. Petani dapat memantau kondisi larutan nutrisi dan iklim mikro secara real-time, sekaligus menerima estimasi mutu panen sebelum waktu panen tiba.",
    problemStatement:
      "Fluktuasi suhu air nutrisi, kelembaban udara, dan konsentrasi larutan pupuk (TDS) seringkali menyebabkan penurunan mutu panen tanpa disadari petani lebih awal.",
    technicalApproach:
      "Mikrokontroler ESP32 mengirimkan pembacaan sensor secara periodik melalui protokol HTTP/MQTT ke server. Data deret waktu (time-series) diproses dengan StandardScaler dan dilatih menggunakan arsitektur regresi LSTM untuk memprediksi indeks biomassa tanaman.",
    results:
      "Model berhasil menghasilkan estimasi kualitas tanaman dengan deviasi minimal pada pengujian data validasi internal.",
    architecture: [
      {
        title: "Sensing Node",
        description: "Sensor DS18B20 (suhu air), DHT22 (suhu/kelembaban udara), dan TDS meter membaca kondisi fisik tangki.",
        tech: "ESP32 & Arduino C++",
      },
      {
        title: "Telemetry Ingestion",
        description: "Pengiriman data berkala melalui koneksi WiFi ke server pengumpul data.",
        tech: "RESTful HTTP API",
      },
      {
        title: "Preprocessing & Normalization",
        description: "Pembersihan missing value, deteksi outlier, dan scaling data telemetri historis.",
        tech: "Pandas & Scikit-Learn",
      },
      {
        title: "Predictive Inference",
        description: "Inferensi model ANN/LSTM untuk meramalkan pertumbuhan dan estimasi berat panen.",
        tech: "TensorFlow & Keras",
      },
    ],
    modelDatasetDetails: {
      modelType: "LSTM (Long Short-Term Memory) & Feed-Forward ANN",
      inputShape: "(Timesteps, Features: Water Temp, Air Temp, Humidity, TDS)",
      datasetDescription: "Data telemetri siklus tanam selada dari stasiun tanam laboratorium.",
      deployment: "Backend REST API Server",
    },
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
    image: "/ai-project-showcase.png",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "weed-classification",
    title: "Sistem Klasifikasi & Deteksi Gulma Hortikultura",
    role: "Peneliti Pembantu (Computer Vision)",
    category: "Computer Vision",
    featured: false,
    description:
      "Pembangunan dataset primer citra tanaman di Kabupaten Enrekang dan pemodelan klasifikasi varietas gulma untuk mendukung otomasi pengendalian hama perkebunan.",
    longDescription:
      "Riset terapan visi komputer untuk mengenali spesies gulma yang berpotensi menurunkan produktivitas tanaman hortikultura. Proyek mencakup pengambilan citra langsung di ladang tani, kurasi dataset, anotasi poligon/bounding box, dan pelatihan model Convolutional Neural Network.",
    problemStatement:
      "Variasi kondisi pencahayaan alami, keanekaragaman latar belakang tanah, dan kemiripan morfologi visual antara gulma dan tanaman budidaya.",
    technicalApproach:
      "Pengambilan ratusan citra resolusi tinggi dengan berbagai sudut dan waktu pencahayaan di Kabupaten Enrekang. Citra dianotasi menggunakan Roboflow, diaugmentasi (rotasi, blur, shear, brightness adjustment), dan dilatih menggunakan transfer learning arsitektur CNN.",
    results:
      "Dataset primer tersusun rapi dengan label terverifikasi dan menghasilkan model dasar klasifikasi gulma yang kokoh.",
    architecture: [
      {
        title: "Field Data Acquisition",
        description: "Pengambilan sampel citra di perkebunan Enrekang pada beragam waktu pagi, siang, dan sore.",
        tech: "Kamera Lapangan",
      },
      {
        title: "Annotation & Augmentation",
        description: "Pelabelan kelas spesies dan augmentasi citra untuk memperluas variasi dataset.",
        tech: "Roboflow Platform",
      },
      {
        title: "Feature Extraction & Training",
        description: "Pelatihan Convolutional Neural Network (CNN) untuk membedakan fitur visual daun dan tekstur gulma.",
        tech: "TensorFlow & OpenCV",
      },
    ],
    modelDatasetDetails: {
      modelType: "Deep Convolutional Neural Network (CNN)",
      inputShape: "(Height: 224, Width: 224, Channels: 3)",
      datasetDescription: "Dataset primer citra gulma perkebunan hortikultura Kabupaten Enrekang.",
      sampleSize: "Ratusan citra lapangan teranotasi",
    },
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Roboflow",
      "Computer Vision",
    ],
    image: "/ai-project-showcase.png",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "flood-segmentation",
    title: "Dataset & Anotasi Segmentasi Semantik Bencana Banjir",
    role: "Peneliti Pembantu (Dataset Specialist)",
    category: "Computer Vision",
    featured: false,
    description:
      "Ekstraksi ribuan frame dari video pengawasan dan dokumentasi amatir bencana serta anotasi segmentasi semantik area genangan air menggunakan platform CVAT.",
    longDescription:
      "Pengembangan dataset spesifik bencana untuk melatih model Computer Vision yang mampu mendeteksi batas luapan air banjir di area permukiman perkotaan. Sangat krusial untuk otomatisasi sistem pemantauan ketinggian air berbasis CCTV cerdas.",
    problemStatement:
      "Minimnya dataset segmentasi banjir lokal di Indonesia dengan karakteristik air keruh, pantulan permukaan air yang dinamis, dan oklusi oleh bangunan/kendaraan.",
    technicalApproach:
      "Memecah rekaman video menjadi frame citra berurutan, melakukan sampling frame representatif, dan menggambar poligon segmentasi pixel-level pada platform Computer Vision Annotation Tool (CVAT) dengan taksonomi label kelas yang ketat.",
    results:
      "Menghasilkan ribuan frame teranotasi siap latih dengan label mask segmentasi yang presisi untuk riset kebencanaan.",
    architecture: [
      {
        title: "Video Frame Extraction",
        description: "Dekomposisi video CCTV dan rekaman drone ke frame citra beresolusi penuh.",
        tech: "OpenCV & Python",
      },
      {
        title: "Semantic Annotation",
        description: "Pelabelan poligon batas permukaan air banjir dan batas daratan.",
        tech: "CVAT (Computer Vision Annotation Tool)",
      },
      {
        title: "Quality Review & Export",
        description: "Verifikasi konsistensi overlap poligon dan ekspor dataset ke format Mask/COCO.",
        tech: "JSON / COCO Format",
      },
    ],
    modelDatasetDetails: {
      modelType: "Semantic Segmentation Ground Truth Mask Dataset",
      inputShape: "Variable Resolution Video Frames",
      datasetDescription: "Dataset anotasi piksel luapan banjir perkotaan Parepare & sekitarnya.",
      sampleSize: "Ribuan frame video teranotasi",
    },
    technologies: [
      "CVAT",
      "Semantic Segmentation",
      "Computer Vision",
      "Python",
      "OpenCV",
    ],
    image: "/ai-project-showcase.png",
    demoUrl: "#",
    codeUrl: "#",
  },
]
