import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inconsolata } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _inconsolata = Inconsolata({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Ashwin Bhat K - CSE Student & AI/ML Enthusiast",
  description:
    "Portfolio of Ashwin Bhat K, 2nd year BTech CSE student at NMAM Institute of Technology. Interested in AIML and Data Structures.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
