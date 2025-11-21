import FloatingElements from "@/components/floating-elements"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/contexts/theme-context"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "AI Engineer Portfolio | Artificial Intelligence Specialist",
  description:
    "Portfolio of an AI Engineer specializing in Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Expert System, and AI Solutions",
  // generator: 'v0.dev'
  icons: {
    icon: "/download.svg",
    shortcut: "/download.svg",
    apple: "/download.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <div className="bg-gradient-to-br var(--theme-background) text-gray-100 relative overflow-hidden min-h-screen">
              <FloatingElements />
              <Header />
              {children}
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
