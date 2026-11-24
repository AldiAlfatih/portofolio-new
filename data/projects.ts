import { ProjectItem } from "@/types/portfolio"

export const projectsData: ProjectItem[] = [
  {
    id: "isara-bisindo",
    title: "ISARA: Inovasi Komunikasi Dua Arah Bahasa Isyarat",
    role: "Co-Founder & Computer Vision Engineer",
    category: "Computer Vision",
    featured: true,
    description:
      "Arsitektur Computer Vision dan mobile AI untuk menerjemahkan Bahasa Isyarat Indonesia (BISINDO) secara near real-time menggunakan TensorFlow dan MediaPipe. Berhasil meraih pendanaan nasional PKM-KC 2025.",
    longDescription:
      "ISARA adalah platform komunikasi inklusif yang menjembatani kesenjangan komunikasi antara komunitas Tuli dan masyarakat dengar. Sistem memanfaatkan kamera ponsel pintar biasa untuk menangkap pose tangan dan tubuh, memproses landmark spasial, dan menerjemahkannya ke teks/audio secara langsung di perangkat (on-device AI).",
    problemStatement:
      "Keterbatasan akses penerjemah bahasa isyarat profesional di ruang publik dan institusi layanan masyarakat, sementara aplikasi yang ada umumnya bergantung pada cloud computing yang lambat dan memerlukan kuota internet stabil.",
    technicalApproach:
      "Mengekstraksi 21 koordinat landmark tangan dan pose tubuh per frame menggunakan MediaPipe, kemudian mengklasifikasikan urutan gerak sekuensial menggunakan arsitektur deep learning (kombinasi Conv1D + BiGRU + Attention Mechanism). Model dikonversi ke format TensorFlow Lite (TFLite) untuk inferensi cepat dengan latensi rendah pada perangkat Android.",
    results:
      "Meraih pendanaan nasional Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC) Kemendikbudristek DIKTI 2025 dan sukses dibangun sebagai prototipe aplikasi Android fungsional.",
    architecture: [
      {
        title: "Video Stream Ingestion",
        description: "Android CameraX menangkap frame video kamera depan 30 FPS.",
        tech: "Android CameraX",
      },
      {
        title: "Landmark Extraction",
        description: "MediaPipe Hands & Pose mengekstraksi 21 keypoint koordinat 3D per tangan.",
        tech: "MediaPipe",
      },
      {
        title: "Sequential Preprocessing",
        description: "Normalisasi koordinat relatif terhadap pergelangan tangan dan pembentukan jendela waktu (temporal sliding window).",
        tech: "Python / NumPy",
      },
      {
        title: "Neural Classifier",
        description: "Inferensi model Conv1D-BiGRU TFLite untuk mengenali huruf alfabet dan kata isyarat BISINDO.",
        tech: "TensorFlow Lite",
      },
      {
        title: "Text & Audio Synthesis",
        description: "Menampilkan hasil transkripsi teks pada layar dan memutar audio Text-to-Speech secara simultan.",
        tech: "Android TTS API",
      },
    ],
    modelDatasetDetails: {
      modelType: "Conv1D + Bidirectional GRU with Attention",
      inputShape: "(TimeSteps: 30, Features: 126 coordinates)",
      datasetDescription: "Dataset primer kurasi internal berisi rekaman gesture tangan alfabet dan kata dasar BISINDO.",
      sampleSize: "Ribuan sampel urutan keypoint pose",
      deployment: "On-Device Inference via TensorFlow Lite (.tflite)",
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
    ],
    image: "/ai-project-showcase.png",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "emonev-bappeda",
    title: "Sistem E-Monev Bappeda Kota Parepare",
    role: "Lead Back-End Developer",
    category: "Backend Development",
    featured: true,
    description:
      "Arsitektur server-side enterprise berbasis Laravel, PostgreSQL, dan Inertia.js untuk pemantauan dan evaluasi realisasi anggaran program pemerintah daerah secara transparan.",
    longDescription:
      "Sistem Elektronik Monitoring dan Evaluasi (E-Monev) yang dikembangkan khusus untuk Badan Perencanaan Pembangunan Daerah (Bappeda) Kota Parepare. Platform ini menggantikan pelaporan manual berbasis spreadsheet dan mengotomatisasi kalkulasi deviasi realisasi fisik dan keuangan seluruh Organisasi Perangkat Daerah (OPD).",
    problemStatement:
      "Proses konsolidasi pelaporan capaian anggaran dari puluhan OPD sebelumnya memakan waktu berminggu-minggu, rentan inkonsistensi data, dan sulit diaudit secara historis.",
    technicalApproach:
      "Merancang skema database relasional ternormalisasi pada PostgreSQL dengan indeks teroptimasi untuk query agregasi bertingkat. Membangun RESTful controller berbasis Laravel 10 dengan arsitektur Service-Repository pattern, middleware otorisasi multi-role (Admin Bappeda, Verifikator Bidang, Operator OPD), dan integrasi front-end modern melalui Inertia.js dan Vue.js.",
    results:
      "Sistem berhasil di-deploy dan digunakan secara aktif oleh seluruh dinas/badan di lingkungan Pemerintah Kota Parepare untuk pelaporan triwulanan dan evaluasi APBD.",
    architecture: [
      {
        title: "Client Layer",
        description: "Antarmuka reaktif Vue.js dengan Tailwind CSS, disajikan tanpa reload melalui adapter Inertia.js.",
        tech: "Vue.js & Inertia.js",
      },
      {
        title: "Routing & Middleware",
        description: "Otentikasi sesi aman, CSRF protection, dan Role-Based Access Control (RBAC) bertingkat.",
        tech: "Laravel Middleware",
      },
      {
        title: "Business Logic Layer",
        description: "Service layer yang mengkalkulasi bobot program, pagu anggaran, realisasi fisik & keuangan, serta persentase deviasi.",
        tech: "PHP / Laravel Services",
      },
      {
        title: "Relational Persistence",
        description: "Penyimpanan data terstruktur dengan integritas referensial dan audit trail perubahan data.",
        tech: "PostgreSQL",
      },
    ],
    modelDatasetDetails: {
      modelType: "Relational Database & Enterprise Business Logic",
      datasetDescription: "Database program kerja, sub-kegiatan, pagu anggaran, dan realisasi fisik-keuangan APBD daerah.",
      deployment: "Linux Virtual Private Server (VPS) dengan Nginx & PHP-FPM",
    },
    technologies: [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "Inertia.js",
      "Vue.js",
      "Tailwind CSS",
      "RESTful API",
    ],
    image: "/ai-project-showcase.png",
    demoUrl: "https://drive.google.com/file/d/1x3zWwVp6C_xoth3EjXX6TPY1R3l5-QrL/view?usp=drive_link",
    codeUrl: "#",
  },
  {
    id: "hidroponik-ai",
    title: "Sistem AI Monitoring & Prediksi Hidroponik Cerdas",
    role: "AI Engineer",
    category: "AI / Machine Learning",
    featured: true,
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
