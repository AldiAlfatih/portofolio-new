"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Send,
  MessageSquare,
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  MapPin,
  AlertCircle,
  Clock,
  User,
} from "lucide-react"
import { profileData } from "@/data/profile"

const topics = [
  "General Inquiry",
  "Collaboration",
  "AI Consultation",
  "Project Inquiry",
]

export default function Contact() {
  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    topic: "General Inquiry",
    message: "",
  })
  const [isSubmittingContact, setIsSubmittingContact] = useState(false)
  const [contactStatus, setContactStatus] = useState<"idle" | "success" | "error">("idle")
  const [contactFeedback, setContactFeedback] = useState("")

  // Quick Action Email Copy
  const [copiedEmail, setCopiedEmail] = useState(false)

  // Guestbook State
  const [commentForm, setCommentForm] = useState({
    name: "",
    comment: "",
  })
  const [isSubmittingComment, setIsSubmittingComment] = useState(false)
  const [comments, setComments] = useState<Array<{ name: string; comment: string; time: string }>>([])
  const [commentError, setCommentError] = useState("")

  const formRef = useRef<HTMLFormElement>(null)

  // Load comments
  useEffect(() => {
    try {
      const stored = localStorage.getItem("portfolio_comments")
      if (stored) {
        setComments(JSON.parse(stored))
      } else {
        setComments([
          {
            name: "Alex Pratama",
            comment: "Implementasi Computer Vision pada proyek ISARA sangat inspiratif untuk aksesibilitas inklusif. Sukses selalu!",
            time: "Baru saja",
          },
          {
            name: "Dian Wahyudi",
            comment: "Arsitektur backend E-Monev sangat terstruktur dan rapi. Portofolio engineering yang sangat komprehensif.",
            time: "1 hari yang lalu",
          },
        ])
      }
    } catch {
      // ignore
    }
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleQuickTopic = (topic: string) => {
    setContactForm((prev) => ({
      ...prev,
      topic,
      subject: `[${topic}] Diskusi bersama Muhammad Aldi Alfatih`,
      message: prev.message || `Halo Aldi,\n\nSaya ingin berdiskusi mengenai ${topic.toLowerCase()} terkait ...`,
    }))
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      setContactStatus("error")
      setContactFeedback("Harap isi seluruh kolom wajib (Nama, Email, dan Pesan).")
      return
    }

    try {
      setIsSubmittingContact(true)
      setContactStatus("idle")
      setContactFeedback("")

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          topic: contactForm.topic,
          message: `${contactForm.subject ? `Subjek: ${contactForm.subject}\n\n` : ""}${contactForm.message}`,
        }),
      })

      const data = await res.json()
      if (res.ok && data.ok) {
        setContactStatus("success")
        setContactFeedback("Terima kasih! Pesan Anda telah berhasil dikirim ke email Aldi.")
        setContactForm({
          name: "",
          email: "",
          subject: "",
          topic: "General Inquiry",
          message: "",
        })
      } else {
        throw new Error(data.error || "Gagal mengirim pesan")
      }
    } catch {
      setContactStatus("error")
      setContactFeedback(
        "Maaf, terjadi kendala saat mengirim pesan melalui server. Anda juga dapat menghubungi langsung ke aldialfatih016@gmail.com."
      )
    } finally {
      setIsSubmittingContact(false)
    }
  }

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!commentForm.name.trim() || !commentForm.comment.trim()) {
      setCommentError("Nama dan pesan komentar wajib diisi.")
      return
    }

    try {
      setIsSubmittingComment(true)
      setCommentError("")

      await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentForm),
      })

      const now = new Date()
      const formattedTime = now.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })

      const updated = [
        { name: commentForm.name.trim(), comment: commentForm.comment.trim(), time: formattedTime },
        ...comments,
      ]

      setComments(updated)
      localStorage.setItem("portfolio_comments", JSON.stringify(updated))
      setCommentForm({ name: "", comment: "" })
    } catch {
      setCommentError("Gagal mengirim komentar. Silakan coba kembali.")
    } finally {
      setIsSubmittingComment(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative border-t border-border/60">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider mb-2">
            <span>09 // KOMUNIKASI & BUKU TAMU</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Hubungi & Kolaborasi
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mt-2 font-mono">
            Terbuka untuk peluang kerja sama rekayasa AI, pengembangan backend, proyek riset, maupun diskusi teknis.
          </p>
        </div>

        {/* Quick Topic Action Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <span className="text-xs font-mono text-muted-foreground mr-1">Pilih Topik Cepat:</span>
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => handleQuickTopic(t)}
              className="px-3 py-1 rounded-lg border border-border bg-surface text-xs font-mono text-foreground hover:border-interactive-hover hover:text-accent transition-colors shadow-xs"
            >
              + {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-xs">
              <h3 className="text-xl font-bold text-foreground mb-1">Kirim Pesan Langsung</h3>
              <p className="text-xs text-muted-foreground mb-6 font-sans">
                Formulir terhubung langsung dengan inbox email. Saya akan merespons dalam waktu 1×24 jam.
              </p>

              <form ref={formRef} onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-foreground mb-1.5 font-medium">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Anda"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-interactive-hover transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-foreground mb-1.5 font-medium">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@domain.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-interactive-hover transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-foreground mb-1.5 font-medium">
                      Topik Diskusi
                    </label>
                    <select
                      value={contactForm.topic}
                      onChange={(e) => setContactForm({ ...contactForm, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-xs text-foreground outline-none focus:border-interactive-hover transition-colors"
                    >
                      {topics.map((top) => (
                        <option key={top} value={top} className="bg-card text-foreground">
                          {top}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-foreground mb-1.5 font-medium">
                      Subjek Pesan
                    </label>
                    <input
                      type="text"
                      placeholder="Misal: Peluang Kolaborasi Proyek"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-interactive-hover transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-foreground mb-1.5 font-medium">
                    Isi Pesan *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tuliskan detail kebutuhan, pertanyaan teknis, atau proposal kolaborasi Anda di sini..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-interactive-hover transition-colors resize-none font-sans"
                  />
                </div>

                {/* Feedback Alert */}
                {contactFeedback && (
                  <div
                    className={`p-3 rounded-xl text-xs flex items-start gap-2 ${
                      contactStatus === "success"
                        ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-500"
                        : "bg-red-500/10 border border-red-500/30 text-red-500"
                    }`}
                  >
                    {contactStatus === "success" ? (
                      <Check className="w-4 h-4 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    )}
                    <span>{contactFeedback}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmittingContact}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-xs hover:opacity-90 transition-opacity disabled:opacity-50 inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  {isSubmittingContact ? (
                    <span>Sedang Mengirim Pesan...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim Pesan Sekarang</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Channels & Guestbook (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Channels Card */}
            <div className="p-6 rounded-2xl border border-border bg-card shadow-xs">
              <h3 className="text-base font-bold text-foreground mb-4">Saluran Komunikasi Langsung</h3>

              <div className="space-y-3 text-xs">
                {/* Email with copy button */}
                <div className="p-3 rounded-xl border border-border bg-surface flex items-center justify-between">
                  <div className="flex items-center gap-2.5 truncate mr-2">
                    <Mail className="w-4 h-4 text-accent shrink-0" />
                    <span className="font-mono text-foreground truncate">{profileData.contact.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="px-2 py-1 rounded-md border border-border bg-surface-secondary text-[10px] font-mono hover:text-accent transition-colors shrink-0"
                    title="Salin email"
                  >
                    {copiedEmail ? "Tersalin!" : "Salin"}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3 rounded-xl border border-border bg-surface flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-muted-foreground font-sans">{profileData.contact.location}</span>
                </div>

                {/* Social buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-border bg-surface hover:border-interactive-hover transition-colors flex items-center justify-center gap-2 text-foreground font-mono"
                  >
                    <Github className="w-4 h-4 text-accent" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-border bg-surface hover:border-interactive-hover transition-colors flex items-center justify-center gap-2 text-foreground font-mono"
                  >
                    <Linkedin className="w-4 h-4 text-accent" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Guestbook Card */}
            <div className="p-6 rounded-2xl border border-border bg-card shadow-xs">
              <div className="flex items-center gap-2 mb-1">
                <MessageSquare className="w-4 h-4 text-accent" />
                <h3 className="text-base font-bold text-foreground">Buku Tamu Pengunjung</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4 font-sans">
                Tinggalkan jejak, impresi, atau salam singkat di portofolio ini.
              </p>

              {/* Guestbook Form */}
              <form onSubmit={handleCommentSubmit} className="space-y-2.5 mb-5 pb-4 border-b border-border">
                <input
                  type="text"
                  placeholder="Nama Pengunjung"
                  value={commentForm.name}
                  onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-interactive-hover"
                />
                <textarea
                  rows={2}
                  placeholder="Tuliskan ulasan atau apresiasi singkat..."
                  value={commentForm.comment}
                  onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-surface text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-interactive-hover resize-none"
                />
                {commentError && (
                  <p className="text-[11px] text-red-500 font-mono">{commentError}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmittingComment}
                  className="px-4 py-1.5 rounded-lg border border-border bg-surface-secondary text-foreground text-xs font-mono hover:border-interactive-hover transition-colors"
                >
                  {isSubmittingComment ? "Mengirim..." : "Kirim Komentar"}
                </button>
              </form>

              {/* Comments Stream */}
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {comments.length === 0 ? (
                  <p className="text-xs text-muted-foreground text-center py-4 font-mono">
                    Belum ada komentar. Jadilah yang pertama!
                  </p>
                ) : (
                  comments.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl border border-border/70 bg-surface-secondary/40 text-xs"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-semibold text-foreground truncate">{c.name}</span>
                        <span className="text-[10px] font-mono text-muted-foreground shrink-0">{c.time}</span>
                      </div>
                      <p className="text-foreground/80 font-sans leading-relaxed text-[11px]">
                        {c.comment}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
