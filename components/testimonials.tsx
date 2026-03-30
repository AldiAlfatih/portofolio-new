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
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative border-t border-terminal-text/10">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-terminal-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-python-light font-mono mr-2">{"//"}</span>
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
              <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-terminal-text/15 hover:border-python-blue transition-colors duration-200 h-full relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 p-3 bg-python-blue rounded-full border border-python-blue/50">
                  <Quote className="w-5 h-5 text-terminal-text" />
                </div>

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
                      <Star className="w-5 h-5 text-python-light fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-terminal-text/60 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-terminal-text/20">
                    <Image
                      src={`/professional-portraits.png?height=100&width=100&query=${testimonial.image}`}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-terminal-text font-semibold">{testimonial.name}</h4>
                    <p className="text-python-light text-sm">{testimonial.position}</p>
                    <p className="text-terminal-text/30 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
