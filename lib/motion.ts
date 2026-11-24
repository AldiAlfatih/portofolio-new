import { Variants, Transition } from "framer-motion"

/**
 * Consistent motion curves & physics for the portfolio.
 * Strict editorial style: smooth, natural, and never jarring.
 */
export const TRANSITION_EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]
export const TRANSITION_EASE_IN_OUT: [number, number, number, number] = [0.65, 0, 0.35, 1]

export const SPRING_GENTLE = {
  type: "spring",
  stiffness: 180,
  damping: 24,
  mass: 1,
} as const

export const SPRING_SNAPPY = {
  type: "spring",
  stiffness: 280,
  damping: 28,
  mass: 0.8,
} as const

export const SPRING_CARD = {
  type: "spring",
  stiffness: 300,
  damping: 25,
} as const

// Reusable Variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: TRANSITION_EASE_OUT },
  },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: TRANSITION_EASE_OUT },
  },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: TRANSITION_EASE_OUT },
  },
}

export const blurReveal: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
    y: 16,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.6, ease: TRANSITION_EASE_OUT },
  },
}

export const staggerContainer = (staggerChildren: number = 0.08, delayChildren: number = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: TRANSITION_EASE_OUT },
  },
}

export const cardHoverVariants: Variants = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.01,
    transition: SPRING_CARD,
  },
}
