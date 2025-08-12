"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Febi",
    position: "Bappeda Provinsi Sulawesi Selatan",
    company: "Bappeda Provinsi Sulawesi Selatan",
    image: "Bappeda",
    rating: 5,
    text: "",
  },
  // {
  //   name: "Michael Chen",
  //   position: "CTO",
  //   company: "StartupAI",
  //   image: "professional man portrait",
  //   rating: 5,
  //   text: "Implementasi NLP chatbot yang dibuat sangat revolusioner untuk customer service kami. Response time berkurang 60% dan customer satisfaction meningkat drastis. Highly recommended!",
  // },
  // {
  //   name: "Prof. Ahmad Rizki",
  //   position: "AI Research Director",
  //   company: "Universitas Indonesia",
  //   image: "professor portrait",
  //   rating: 5,
  //   text: "Sebagai akademisi, saya terkesan dengan pendekatan ilmiah dan inovasi dalam setiap proyek AI. Kemampuan menjelaskan konsep kompleks dengan sederhana menunjukkan pemahaman yang mendalam.",
  // },
  // {
  //   name: "Lisa Wang",
  //   position: "Product Manager",
  //   company: "FinTech Solutions",
  //   image: "business woman portrait",
  //   rating: 5,
  //   text: "Sistem prediksi fraud detection yang dikembangkan menggunakan ensemble learning berhasil mengurangi false positive hingga 35%. ROI yang luar biasa untuk investasi AI kami.",
  // },
  // {
  //   name: "David Rodriguez",
  //   position: "Data Science Lead",
  //   company: "E-commerce Giant",
  //   image: "data scientist portrait",
  //   rating: 5,
  //   text: "Collaboration dalam proyek recommendation system sangat produktif. Algoritm yang diimplementasikan meningkatkan conversion rate sebesar 25%. Technical skills dan problem-solving ability yang excellent.",
  // },
  // {
  //   name: "Dr. Priya Sharma",
  //   position: "Medical AI Specialist",
  //   company: "HealthTech Innovation",
  //   image: "medical professional portrait",
  //   rating: 5,
  //   text: "Model computer vision untuk medical imaging diagnosis mencapai akurasi 96%. Kontribusi dalam healthcare AI sangat berdampak positif untuk diagnosis dini penyakit. Outstanding work!",
  // },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-800/30 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Testimoni Klien & Partner
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/10 h-full relative">
                {/* Quote Icon */}
                <motion.div
                  className="absolute -top-4 -left-4 p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-lg"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Quote className="w-5 h-5 text-white" />
                </motion.div>

                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400/50">
                    <Image
                      src={`/professional-portraits.png?height=100&width=100&query=${testimonial.image}`}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.position}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
