import type React from "react"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next"
import FloatingElements from "@/components/floating-elements"
import Footer from "@/components/footer"
import Header from "@/components/header"
import ScrollProgress from "@/components/scroll-progress"
import BackToTop from "@/components/back-to-top"
import CommandPalette from "@/components/command-palette"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/contexts/theme-context"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Muhammad Aldi Alfatih, S.Kom. | AI Engineer & Backend Developer",
  description:
    "Personal engineering portfolio of Muhammad Aldi Alfatih, S.Kom. — AI Engineer & Backend Developer with deep expertise in Computer Vision, Machine Learning, Deep Learning, and Enterprise Backend Systems.",
  keywords: [
    "Muhammad Aldi Alfatih",
    "AI Engineer",
    "Backend Developer",
    "Computer Vision",
    "Machine Learning",
    "Deep Learning",
    "Laravel",
    "TensorFlow",
    "Python",
    "ITH",
    "Parepare",
  ],
  authors: [{ name: "Muhammad Aldi Alfatih" }],
  icons: {
    icon: "/favicon_aldi_256_new.svg",
    shortcut: "/favicon_aldi_256_new.svg",
    apple: "/favicon_aldi_256_new.svg",
  },
  openGraph: {
    title: "Muhammad Aldi Alfatih, S.Kom. | AI Engineer & Backend Developer",
    description:
      "Bridging Intelligent Systems with Robust Backend Architectures. Explore engineering projects, AI research models, and enterprise software.",
    url: "https://aldialfatih.dev",
    siteName: "Muhammad Aldi Alfatih Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Aldi Alfatih, S.Kom. | AI Engineer & Backend Developer",
    description:
      "Bridging Intelligent Systems with Robust Backend Architectures.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var valid = ['sky-blue', 'midnight-blue', 'burgundy', 'arctic-red'];
                  if (saved && valid.indexOf(saved) !== -1) {
                    document.documentElement.classList.add('theme-' + saved);
                    document.documentElement.setAttribute('data-theme', saved);
                  } else {
                    document.documentElement.classList.add('theme-midnight-blue');
                    document.documentElement.setAttribute('data-theme', 'midnight-blue');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-accent/20 selection:text-accent">
        <ThemeProvider>
          <LanguageProvider>
            <ScrollProgress />
            <div className="relative overflow-hidden min-h-screen flex flex-col justify-between">
              <FloatingElements />
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
              <BackToTop />
              <CommandPalette />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
