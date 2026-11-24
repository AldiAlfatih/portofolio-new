"use client"

import { motion } from "framer-motion"

const codeSnippets = [
  { text: ">>>", x: "6%", y: "14%" },
  { text: "def predict():", x: "84%", y: "12%" },
  { text: "model.fit()", x: "12%", y: "42%" },
  { text: "RESTful API", x: "88%", y: "38%" },
  { text: "$ python main.py", x: "14%", y: "76%" },
  { text: "SELECT * FROM apbd", x: "78%", y: "72%" },
  { text: "return torch.tensor()", x: "48%", y: "88%" },
  { text: "// BISINDO Keypoints", x: "68%", y: "24%" },
]

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {codeSnippets.map((snippet, index) => (
        <motion.span
          key={index}
          className="absolute font-mono text-accent/[0.06] text-xs select-none"
          style={{ left: snippet.x, top: snippet.y }}
          animate={{
            y: [0, -14, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 6 + index * 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: index * 0.7,
          }}
        >
          {snippet.text}
        </motion.span>
      ))}
    </div>
  )
}
