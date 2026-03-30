"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Calendar, Brain, Send, User, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
    topic: "General",
  })

  const [isSubmittingContact, setIsSubmittingContact] = useState(false)

  const [commentForm, setCommentForm] = useState({
    name: "",
    comment: "",
  })

  const [comments, setComments] = useState<Array<{ name: string; comment: string; time: string }>>([])

  const contactRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const raw = typeof window !== "undefined" ? localStorage.getItem("comments") : null
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Array<{ name: string; comment: string; time: string }>
        setComments(parsed)
      } catch {}
    } else {
      setComments([
        { name: "Alex Johnson", comment: "Amazing AI portfolio! The projects showcase incredible technical depth.", time: "2 jam yang lalu" },
        { name: "Maria Santos", comment: "Impressed by the machine learning implementations. Great work!", time: "5 jam yang lalu" },
      ])
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("comments", JSON.stringify(comments))
    }
  }, [comments])

  const smoothScrollToForm = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleQuickAction = (topic: string) => {
    setContactForm((prev) => ({ ...prev, topic }))
    setContactForm((prev) => ({ ...prev, message: prev.message || `Halo, saya ingin ${topic.toLowerCase()} mengenai ...` }))
    smoothScrollToForm()
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsSubmittingContact(true)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || "Gagal mengirim")
      alert("Terima kasih! Pesan Anda sudah terkirim.")
      setContactForm({ name: "", email: "", message: "", topic: "General" })
    } catch (err) {
      alert("Maaf, terjadi kesalahan saat mengirim. Coba lagi nanti.")
    } finally {
      setIsSubmittingContact(false)
    }
  }

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentForm),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || "Gagal menambah komentar")
      const now = new Date()
      const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      setComments((prev) => [{ name: commentForm.name, comment: commentForm.comment, time }, ...prev])
      setCommentForm({ name: "", comment: "" })
    } catch (err) {
      alert("Maaf, komentar gagal dikirim. Coba lagi nanti.")
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-terminal-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-python-light font-mono mr-2">@</span>
          Mari Berkolaborasi dalam AI
        </motion.h2>

        <motion.p
          className="text-terminal-text/40 text-center mb-12 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tertarik untuk mengembangkan solusi AI yang inovatif? Mari diskusikan bagaimana teknologi kecerdasan buatan
          dapat mentransformasi bisnis Anda.
        </motion.p>

        {/* Quick Contact Options */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: MessageSquare, title: "Konsultasi", description: "Diskusi strategi implementasi proyek", action: "Mulai Diskusi" },
              { icon: Brain, title: "Proyek", description: "Kolaborasi pengembangan proyek", action: "Proposal Proyek" },
              { icon: Calendar, title: "Pertemuan", description: "Jadwalkan pertemuan virtual", action: "Jadwalkan Pertemuan" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-[#0a0a0a] rounded-2xl p-6 border border-terminal-text/15 hover:border-python-blue transition-colors duration-200 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="inline-flex p-4 bg-python-blue rounded-2xl border border-python-blue/50 mb-4">
                  <item.icon className="w-8 h-8 text-terminal-text" />
                </div>
                <h3 className="text-xl font-bold text-terminal-text mb-2">{item.title}</h3>
                <p className="text-terminal-text/40 mb-4">{item.description}</p>
                <Button
                  variant="outline"
                  className="border-python-blue/50 text-python-light hover:bg-python-blue/10 hover:border-python-blue transition-colors duration-200 bg-transparent"
                  onClick={() => handleQuickAction(item.title)}
                >
                  {item.action}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Forms */}
        <div className="max-w-6xl mx-auto" ref={contactRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Me Form */}
            <motion.div className="bg-[#0a0a0a] rounded-2xl p-8 border border-terminal-text/15 hover:border-python-blue transition-colors duration-200" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-python-blue rounded-full border border-python-blue/50">
                  <Send className="w-6 h-6 text-terminal-text" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-terminal-text">Hubungi Saya</h3>
                  <p className="text-terminal-text/40">Ada yang ingin didiskusikan? Kirim pesan ke saya!</p>
                </div>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-4 top-4 w-5 h-5 text-terminal-text/30" />
                  <input type="text" placeholder="Nama Anda" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="w-full pl-12 pr-4 py-4 bg-terminal-bg border border-terminal-text/15 rounded-xl text-terminal-text placeholder-terminal-text/30 focus:border-python-light focus:outline-none transition-colors duration-200" required />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-terminal-text/30" />
                  <input type="email" placeholder="Email Anda" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="w-full pl-12 pr-4 py-4 bg-terminal-bg border border-terminal-text/15 rounded-xl text-terminal-text placeholder-terminal-text/30 focus:border-python-light focus:outline-none transition-colors duration-200" required />
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-terminal-text/30" />
                  <textarea placeholder="Pesan Anda" rows={4} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className="w-full pl-12 pr-4 py-4 bg-terminal-bg border border-terminal-text/15 rounded-xl text-terminal-text placeholder-terminal-text/30 focus:border-python-light focus:outline-none transition-colors duration-200 resize-none" required />
                </div>

                <div className="relative">
                  <input type="text" placeholder="Topik (mis. Konsultasi / Proyek / Meeting)" value={contactForm.topic} onChange={(e) => setContactForm({ ...contactForm, topic: e.target.value })} className="w-full px-4 py-3 bg-terminal-bg border border-terminal-text/15 rounded-xl text-terminal-text placeholder-terminal-text/30 focus:border-python-light focus:outline-none transition-colors duration-200" />
                </div>

                <Button type="submit" disabled={isSubmittingContact} className="w-full bg-python-blue hover:bg-python-blue/80 text-terminal-text py-4 rounded-xl font-semibold transition-colors duration-200 border border-python-blue/50">
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmittingContact ? "Mengirim..." : "Kirim Pesan"}
                </Button>
              </form>
            </motion.div>

            {/* Leave a Comment Form */}
            <motion.div className="bg-[#0a0a0a] rounded-2xl p-8 border border-terminal-text/15 hover:border-python-blue transition-colors duration-200" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-python-blue rounded-full border border-python-blue/50">
                  <MessageSquare className="w-6 h-6 text-terminal-text" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-terminal-text">Tinggalkan Komentar</h3>
                  <p className="text-terminal-text/40">Share pengalaman Anda!</p>
                </div>
              </div>

              <form onSubmit={handleCommentSubmit} className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-python-blue rounded-full flex items-center justify-center border border-python-blue/50">
                    <User className="w-6 h-6 text-terminal-text" />
                  </div>
                  <input type="text" placeholder="Nama Anda" value={commentForm.name} onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })} className="flex-1 px-4 py-3 bg-terminal-bg border border-terminal-text/15 rounded-xl text-terminal-text placeholder-terminal-text/30 focus:border-python-light focus:outline-none transition-colors duration-200" required />
                </div>

                <textarea placeholder="Tinggalkan komentar Anda..." rows={4} value={commentForm.comment} onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })} className="w-full px-4 py-4 bg-terminal-bg border border-terminal-text/15 rounded-xl text-terminal-text placeholder-terminal-text/30 focus:border-python-light focus:outline-none transition-colors duration-200 resize-none" required />

                <Button type="submit" className="w-full bg-python-blue hover:bg-python-blue/80 text-terminal-text py-4 rounded-xl font-semibold transition-colors duration-200 border border-python-blue/50">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Post Komentar
                </Button>
              </form>

              {/* Comments Section */}
              <div>
                <h4 className="text-lg font-semibold text-terminal-text mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-python-light" />
                  Komentar ({comments.length})
                </h4>

                <div className="space-y-4">
                  {comments.map((comment, index) => (
                    <motion.div key={index} className="bg-terminal-bg rounded-xl p-4 border border-terminal-text/10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-python-blue/30 rounded-full flex items-center justify-center flex-shrink-0 border border-python-blue/40">
                          <User className="w-4 h-4 text-python-light" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-terminal-text text-sm">{comment.name}</span>
                            <span className="text-terminal-text/30 text-xs">{comment.time}</span>
                          </div>
                          <p className="text-terminal-text/60 text-sm">{comment.comment}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Email CTA */}
        <motion.div className="text-center mt-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.8 }}>
          <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-terminal-text/15 hover:border-python-blue transition-colors duration-200">
            <div className="inline-flex p-4 bg-python-blue rounded-full border border-python-blue/50 mb-6">
              <Mail className="w-8 h-8 text-terminal-text" />
            </div>

            <h3 className="text-2xl font-bold text-terminal-text mb-4">Ingin Berkolaborasi? atau ingin tanya lebih lanjut?</h3>

            <Button asChild className="bg-python-blue hover:bg-python-blue/80 text-terminal-text px-8 py-3 text-lg font-semibold rounded-full border border-python-blue/50 transition-colors duration-200">
              <motion.a href="mailto:aldialfatih016@gmail.com" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Mail size={20} className="mr-2" />
                aldialfatih016@gmail.com
              </motion.a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
