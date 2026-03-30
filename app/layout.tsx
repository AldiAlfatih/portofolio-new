import FloatingElements from "@/components/floating-elements"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/contexts/theme-context"
import { Inter, JetBrains_Mono } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  title: "Portofolio AI Engineer | Spesialis Artificial Intelligence",
  description:
    "Portofolio seorang AI Engineer dengan keahlian di bidang Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, dan Solusi AI.",
  icons: {
    icon: "/favicon_aldi_256_new.svg",
    shortcut: "/favicon_aldi_256_new.svg",
    apple: "/favicon_aldi_256_new.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <div className="bg-terminal-bg text-terminal-text relative overflow-hidden min-h-screen">
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
