"use client"

import React from "react"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Cpu, Database, Eye, Zap, CheckCircle } from "lucide-react"

interface LoadingScreenProps {
  onComplete?: () => void
}

const loadingSteps = [
  { icon: Brain, text: "Initializing AI Systems...", duration: 800 },
  { icon: Cpu, text: "Loading Neural Networks...", duration: 600 },
  { icon: Database, text: "Connecting to Database...", duration: 500 },
  { icon: Eye, text: "Activating Computer Vision...", duration: 700 },
  { icon: Zap, text: "Compiling Machine Learning Models...", duration: 900 },
  { icon: CheckCircle, text: "Optimizing Performance...", duration: 400 },
]

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const totalDuration = loadingSteps.reduce((acc, step) => acc + step.duration, 0)
    let elapsed = 0

    const interval = setInterval(() => {
      elapsed += 50
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100)
      setProgress(newProgress)

      // Update current step based on elapsed time
      let stepElapsed = 0
      for (let i = 0; i < loadingSteps.length; i++) {
        stepElapsed += loadingSteps[i].duration
        if (elapsed <= stepElapsed) {
          setCurrentStep(i)
          break
        }
      }

      if (elapsed >= totalDuration) {
        setIsComplete(true)
        setTimeout(() => {
          onComplete?.()
        }, 500)
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="loading-screen">
          <div className="flex flex-col items-center justify-center space-y-8 p-8">
            {/* Animated Logo */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center pulse-glow">
                <Brain className="w-10 h-10 text-white" />
              </div>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transformOrigin: "0 0",
                  }}
                  animate={{
                    x: [0, Math.cos((i * 60 * Math.PI) / 180) * 40],
                    y: [0, Math.sin((i * 60 * Math.PI) / 180) * 40],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Loading Steps */}
            <div className="text-center space-y-4">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center space-x-3 text-white"
              >
                {loadingSteps[currentStep] && (
                  <>
                    {React.createElement(loadingSteps[currentStep].icon, { className: "w-6 h-6 text-cyan-400" })}
                    <span className="text-lg font-medium">{loadingSteps[currentStep].text}</span>
                  </>
                )}
              </motion.div>

              {/* Progress Bar */}
              <div className="w-80 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              <div className="text-cyan-400 font-mono text-sm">{Math.round(progress)}%</div>
            </div>

            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 gap-4 h-full">
                {[...Array(144)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-cyan-400 rounded-sm"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.05,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
