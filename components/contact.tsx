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
    // Load comments from localStorage
    const raw = typeof window !== "undefined" ? localStorage.getItem("comments") : null
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Array<{ name: string; comment: string; time: string }>
        setComments(parsed)
      } catch {}
    } else {
      // seed with defaults as before
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
    // prefill message template
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
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Mari Berkolaborasi dalam AI
        </motion.h2>

        <motion.p
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg"
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
              { icon: Calendar, title: "Meeting", description: "Jadwalkan pertemuan virtual", action: "Book Meeting" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center group hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <motion.div className="inline-flex p-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-4" whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <Button
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 group-hover:scale-105 transition-all duration-300 bg-transparent"
                  onClick={() => handleQuickAction(item.title)}
                >
                  {item.action}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Forms - Similar to the image */}
        <div className="max-w-6xl mx-auto" ref={contactRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Me Form */}
            <motion.div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Hubungi Saya</h3>
                  <p className="text-gray-400">Ada yang ingin didiskusikan? Kirim pesan ke saya!</p>
                </div>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input type="text" placeholder="Nama Anda" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors" required />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input type="email" placeholder="Email Anda" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors" required />
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea placeholder="Pesan Anda" rows={4} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors resize-none" required />
                </div>

                <div className="relative">
                  <input type="text" placeholder="Topik (mis. Konsultasi / Proyek / Meeting)" value={contactForm.topic} onChange={(e) => setContactForm({ ...contactForm, topic: e.target.value })} className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors" />
                </div>

                <Button type="submit" disabled={isSubmittingContact} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmittingContact ? "Mengirim..." : "Kirim Pesan"}
                </Button>
              </form>
            </motion.div>

            {/* Leave a Comment Form */}
            <motion.div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Tinggalkan Komentar</h3>
                  <p className="text-gray-400">Share pengalaman Anda!</p>
                </div>
              </div>

              <form onSubmit={handleCommentSubmit} className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <input type="text" placeholder="Nama Anda" value={commentForm.name} onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })} className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors" required />
                </div>

                <textarea placeholder="Tinggalkan komentar Anda..." rows={4} value={commentForm.comment} onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })} className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors resize-none" required />

                <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Post Komentar
                </Button>
              </form>

              {/* Comments Section */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-cyan-400" />
                  Komentar ({comments.length})
                </h4>

                <div className="space-y-4">
                  {comments.map((comment, index) => (
                    <motion.div key={index} className="bg-gray-700/30 rounded-xl p-4 border border-gray-600/30" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-white text-sm">{comment.name}</span>
                            <span className="text-gray-500 text-xs">{comment.time}</span>
                          </div>
                          <p className="text-gray-300 text-sm">{comment.comment}</p>
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
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
            <motion.div className="inline-flex p-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6" animate={{ boxShadow: ["0 0 20px rgba(34, 211, 238, 0.3)", "0 0 40px rgba(147, 51, 234, 0.3)", "0 0 20px rgba(34, 211, 238, 0.3)"] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <Mail className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build the Future with AI?</h3>

            <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
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
