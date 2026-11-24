"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Cpu, Layers, GitFork, CheckCircle2, Terminal } from "lucide-react"

interface ArchitecturePipeline {
  id: string
  title: string
  subtitle: string
  project: string
  badge: string
  steps: {
    number: string
    title: string
    description: string
    tech: string
    io: string
  }[]
  summary: string
}

const pipelines: ArchitecturePipeline[] = [
  {
    id: "isara-pipeline",
    title: "On-Device Computer Vision Pipeline",
    subtitle: "Realtime BISINDO Landmark Recognition to Text Synthesis",
    project: "ISARA Language (PKM-KC 2025)",
    badge: "Computer Vision & Edge AI",
    summary:
      "Pipeline dirancang untuk berjalan on-device (offline) di Android guna meminimalkan latensi dan menjaga privasi pengguna tanpa ketergantungan server awan.",
    steps: [
      {
        number: "01",
        title: "Frame Acquisition",
        description: "Android CameraX menangkap aliran video kamera depan pada resolusi 720p 30 FPS.",
        tech: "Android CameraX",
        io: "Input: Raw Video Stream (YUV/RGB)",
      },
      {
        number: "02",
        title: "Landmark Extraction",
        description: "MediaPipe Hands & Pose mengekstraksi 21 koordinat spasial 3D per tangan secara lokal.",
        tech: "MediaPipe Hands",
        io: "Output: 126 Normalized Spatial Coordinates",
      },
      {
        number: "03",
        title: "Temporal Windowing",
        description: "Buffer urutan sekuensial 30 frame (1 detik gesture) dengan normalisasi posisi pergelangan tangan.",
        tech: "NumPy / Buffer Vector",
        io: "Tensor Shape: [1, 30, 126]",
      },
      {
        number: "04",
        title: "Deep Sequence Classifier",
        description: "Model Conv1D + BiGRU + Attention dikonversi ke TFLite dengan quantized weights untuk inferensi instan.",
        tech: "TensorFlow Lite",
        io: "Output: Probability Distribution of Classes",
      },
      {
        number: "05",
        title: "Multimodal Output",
        description: "Teks terdeteksi langsung ditampilkan pada antarmuka dan disuarakan via Android TTS API.",
        tech: "Android TTS Engine",
        io: "Output: Visual Text & Audio Waveform",
      },
    ],
  },
  {
    id: "emonev-pipeline",
    title: "Multi-Tenant Government Evaluation Flow",
    subtitle: "Service-Repository Monolith with Realtime Reconciliation",
    project: "E-Monev Bappeda Kota Parepare",
    badge: "Enterprise Backend Architecture",
    summary:
      "Arsitektur server-side yang memvalidasi integritas pagu anggaran, konsistensi pelaporan sub-kegiatan, dan kalkulasi deviasi APBD bagi seluruh OPD secara terpusat.",
    steps: [
      {
        number: "01",
        title: "Single-Page Monolith Ingestion",
        description: "Vue.js dengan Inertia.js mengirimkan request terstruktur tanpa reload halaman.",
        tech: "Inertia.js & Vue.js",
        io: "Input: JSON State Payloads with CSRF",
      },
      {
        number: "02",
        title: "RBAC & Domain Validation",
        description: "Middleware memverifikasi role hak akses (Admin Bappeda, Verifikator Bidang, Operator OPD).",
        tech: "Laravel Policy & Middleware",
        io: "Output: Authenticated & Authorized Context",
      },
      {
        number: "03",
        title: "Business Logic Service Layer",
        description: "Kalkulasi otomatis bobot target fisik, realisasi belanja, dan indikator deviasi capaian.",
        tech: "Laravel Service Pattern",
        io: "Output: Reconciled Financial Metrics",
      },
      {
        number: "04",
        title: "Transactional Persistence",
        description: "Database relasional PostgreSQL dengan transaksi atomic, indexing foreign keys, dan snapshot audit.",
        tech: "PostgreSQL 15",
        io: "Persistence: Normalized APBD Ledger Tables",
      },
      {
        number: "05",
        title: "Realtime Analytical Response",
        description: "Payload rekapitulasi progres daerah dikembalikan ke dashboard OPD untuk verifikasi bertingkat.",
        tech: "Inertia Server-side Props",
        io: "Output: Dynamic Dashboard Metrics",
      },
    ],
  },
  {
    id: "iot-lstm-pipeline",
    title: "IoT Telemetry to Neural Forecasting Pipeline",
    subtitle: "Precision Agriculture Quality Prediction from Environmental Telemetry",
    project: "Smart Hydroponic AI System",
    badge: "IoT Telemetry & Time Series AI",
    summary:
      "Menghubungkan mikrokontroler sensor lingkungan fisik secara berkala ke model deret waktu untuk memprediksi hasil panen tanaman selada.",
    steps: [
      {
        number: "01",
        title: "Physical Sensor Readout",
        description: "Mikrokontroler ESP32 membaca suhu air nutrisi (DS18B20), kelembaban (DHT22), dan kepekatan pupuk (TDS).",
        tech: "ESP32 & Arduino C++",
        io: "Input: Analog/Digital Sensor Signals",
      },
      {
        number: "02",
        title: "Telemetry Ingestion",
        description: "Data telemetri diunggah berkala tiap interval 15 menit melalui payload JSON terkompresi.",
        tech: "RESTful HTTP Endpoints",
        io: "Payload: Timestamped Telemetry Vector",
      },
      {
        number: "03",
        title: "Data Cleaning & Imputation",
        description: "Penanganan missing values akibat sinyal fluktuatif dan normalisasi skala fitur via StandardScaler.",
        tech: "Pandas & Scikit-Learn",
        io: "Output: Zero-mean Unit-variance Matrix",
      },
      {
        number: "04",
        title: "Recurrent Forecasting",
        description: "Model Long Short-Term Memory (LSTM) menganalisis pola akumulasi nutrisi dan iklim mikro.",
        tech: "TensorFlow LSTM",
        io: "Output: Predicted Biomass Index & Quality Tier",
      },
    ],
  },
]

export default function ArchitectureViewer() {
  const [activePipeline, setActivePipeline] = useState<string>("isara-pipeline")
  const current = pipelines.find((p) => p.id === activePipeline) || pipelines[0]

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-md bg-surface-secondary border border-border text-accent">
              <Layers className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Engineering Architecture
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Diagram Arsitektur Sistem & Data Flow
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Visualisasi alur rekayasa aktual yang diimplementasikan pada proyek AI dan Backend pilihan.
          </p>
        </div>

        {/* Pipeline Selector */}
        <div className="flex flex-wrap gap-2">
          {pipelines.map((p) => {
            const isActive = p.id === activePipeline
            return (
              <button
                key={p.id}
                onClick={() => setActivePipeline(p.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary font-semibold shadow-xs"
                    : "bg-surface-secondary text-foreground/80 hover:text-foreground border-border hover:border-interactive-hover"
                }`}
              >
                {p.project.split(" ")[0]} Flow
              </button>
            )
          })}
        </div>
      </div>

      {/* Selected Pipeline Info */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">
            {current.badge}
          </span>
          <span className="text-xs text-muted-foreground font-mono">
            Proyek: {current.project}
          </span>
        </div>
        <h4 className="text-lg font-bold text-foreground">{current.title}</h4>
        <p className="text-sm text-muted-foreground mt-1 max-w-3xl leading-relaxed">
          {current.summary}
        </p>
      </div>

      {/* Steps Flow Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 relative mt-6">
        {current.steps.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="flex flex-col justify-between p-4 rounded-xl border border-border bg-surface-secondary/60 hover:border-interactive-hover transition-colors group relative"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-accent">
                  STEP {step.number}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground px-1.5 py-0.5 rounded bg-surface border border-border">
                  {step.tech}
                </span>
              </div>
              <h5 className="font-semibold text-sm text-foreground mb-1.5 group-hover:text-accent transition-colors">
                {step.title}
              </h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-4 pt-2.5 border-t border-border/60">
              <span className="block text-[10px] font-mono text-foreground/75 truncate" title={step.io}>
                {step.io}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
