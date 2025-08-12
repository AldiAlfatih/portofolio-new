"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg opacity-20 blur-lg"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full opacity-15 blur-lg"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-md"
        animate={{
          y: [0, 30, 0],
          x: [0, -10, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
