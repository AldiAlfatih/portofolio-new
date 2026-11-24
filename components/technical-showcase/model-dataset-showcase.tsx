"use client"

import React from "react"
import { Database, BrainCircuit, HardDrive, Cpu, CheckCircle } from "lucide-react"

interface ShowcaseItem {
  type: "Dataset Primer" | "Model AI / Deep Learning"
  title: string
  associatedProject: string
  parameters: {
    label: string
    value: string
  }[]
  curationTools: string[]
  notes: string
}

const items: ShowcaseItem[] = [
  {
    type: "Dataset Primer",
    title: "Dataset Gesture Keypoint Alfabet & Kata BISINDO",
    associatedProject: "ISARA Language (PKM-KC 2025)",
    parameters: [
      { label: "Format Fitur", value: "270 Fitur (258 Landmark Spasial + 12 Fitur Sudut & Jarak)" },
      { label: "Dimensi Input", value: "30 Timesteps × 270 Fitur per sampel sekuensial" },
      { label: "Ruang Lingkup", value: "73 Label Alfabet dan Kosakata Isyarat Dasar BISINDO" },
      { label: "Ukuran & Akurasi", value: "17.138 Sampel Dataset (Akurasi Test-Set 96,06%)" },
      { label: "Target Inferensi", value: "On-Device Mobile Android (TensorFlow Lite)" },
    ],
    curationTools: ["MediaPipe Hands", "Python", "NumPy", "OpenCV"],
    notes:
      "Dikurasi secara independen oleh tim pengembang untuk melatih pengenalan isyarat tanpa ketergantungan citra mentah berpiksel tinggi.",
  },
  {
    type: "Model AI / Deep Learning",
    title: "Recurrent LSTM Model Panen Selada Hidroponik",
    associatedProject: "Smart Hydroponic AI System (2024)",
    parameters: [
      { label: "Tipe Arsitektur", value: "Long Short-Term Memory (LSTM) Regresi" },
      { label: "Input Fitur", value: "Suhu Air, Kelembaban Udara, Nilai TDS (ppm)" },
      { label: "Target Prediksi", value: "Indeks Mutu Panen & Estimasi Biomassa" },
      { label: "Sumber Telemetri", value: "Mikrokontroler ESP32 via WiFi HTTP" },
    ],
    curationTools: ["TensorFlow", "Keras", "Scikit-Learn", "ESP32 C++"],
    notes:
      "Menganalisis akumulasi tren fluktuasi nutrisi fisik untuk mengidentifikasi deviasi pertumbuhan sebelum masa panen.",
  },
  {
    type: "Dataset Primer",
    title: "Dataset Citra Lapangan Gulma Hortikultura Enrekang",
    associatedProject: "Riset Sistem Klasifikasi Gulma (2024)",
    parameters: [
      { label: "Modalitas Data", value: "Citra Digital Resolusi Tinggi (RGB)" },
      { label: "Lokasi Akuisisi", value: "Lahan Pertanian Kabupaten Enrekang" },
      { label: "Kondisi Akuisisi", value: "Multi-waktu (Pagi, Siang, Sore) dengan variasi iluminasi" },
      { label: "Anotasi & Label", value: "Bounding Box & Klasifikasi Spesies Gulma" },
    ],
    curationTools: ["Roboflow", "OpenCV", "Python"],
    notes:
      "Survei lapangan langsung untuk membangun bank data visual spesies gulma pengganggu tanaman komersial daerah.",
  },
  {
    type: "Dataset Primer",
    title: "Dataset Segmentasi Semantik Genangan Banjir Parepare",
    associatedProject: "Riset Kebencanaan Banjir (2023)",
    parameters: [
      { label: "Format Anotasi", value: "Poligon Segmentasi Semantik Pixel-Level" },
      { label: "Sumber Data", value: "Rekaman Video Amatir & CCTV Pengawasan" },
      { label: "Target Kelas", value: "Area Luapan Air vs Struktur Daratan / Bangunan" },
      { label: "Keluaran Dataset", value: "Mask Segmentasi Beranotasi Format COCO" },
    ],
    curationTools: ["CVAT (Computer Vision Annotation Tool)", "Python Video Sampling"],
    notes:
      "Ekstraksi ribuan frame video amatir lokal untuk melatih model deteksi ketinggian dan persebaran air banjir perkotaan.",
  },
]

export default function ModelDatasetShowcase() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <span className="p-1.5 rounded-md bg-surface-secondary border border-border text-accent">
          <Database className="w-4 h-4" />
        </span>
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Model & Dataset Artifacts
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-foreground">
        Spesifikasi Model AI & Dataset Primer Riset
      </h3>
      <p className="text-sm text-muted-foreground mt-1 mb-8 max-w-3xl leading-relaxed">
        Dokumentasi artefak data dan konfigurasi model yang dibangun secara faktual selama studi dan riset terapan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-5 rounded-xl border border-border bg-surface-secondary/50 hover:border-interactive-hover transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-surface border border-border text-foreground">
                  {item.type}
                </span>
                <span className="text-[11px] font-mono text-muted-foreground truncate">
                  {item.associatedProject}
                </span>
              </div>

              <h4 className="text-base font-bold text-foreground mb-3">{item.title}</h4>

              <div className="space-y-2 mb-4 bg-card/60 p-3.5 rounded-lg border border-border/60">
                {item.parameters.map((param, pIdx) => (
                  <div key={pIdx} className="flex justify-between items-start text-xs gap-3">
                    <span className="text-muted-foreground font-mono shrink-0">{param.label}:</span>
                    <span className="text-foreground font-medium text-right font-sans">{param.value}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{item.notes}</p>
            </div>

            <div className="pt-3 border-t border-border flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] text-muted-foreground font-mono mr-1">Tools:</span>
              {item.curationTools.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface border border-border text-foreground/80"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
