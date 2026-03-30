"use client"

import { motion } from "framer-motion"

const codeSnippets = [
  { text: ">>>", x: "5%", y: "15%" },
  { text: "def ai():", x: "85%", y: "10%" },
  { text: "import torch", x: "10%", y: "45%" },
  { text: "{ }", x: "90%", y: "40%" },
  { text: "$ python", x: "15%", y: "75%" },
  { text: "# ML", x: "80%", y: "70%" },
  { text: "return model", x: "50%", y: "85%" },
  { text: "//", x: "70%", y: "20%" },
]

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {codeSnippets.map((snippet, index) => (
        <motion.span
          key={index}
          className="absolute font-mono text-python-light/[0.06] text-sm select-none"
          style={{ left: snippet.x, top: snippet.y }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 6 + index * 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: index * 0.8,
          }}
        >
          {snippet.text}
        </motion.span>
      ))}
    </div>
  )
}
