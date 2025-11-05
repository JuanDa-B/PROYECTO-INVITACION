import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ivon & Diego — Invitación de boda",
  description: "Acompáñanos en nuestro día especial. 20 de diciembre de 2025.",
  generator: "v0.app",
  openGraph: {
    title: "Ivon & Diego — Invitación de boda",
    description: "Acompáñanos en nuestro día especial. 20 de diciembre de 2025.",
    url: "https://example.com",
    siteName: "Invitación Ivon & Diego",
    images: [
      {
        url: "/elegant-couple-wedding-photo-romantic-sunset.jpg",
        width: 1200,
        height: 630,
        alt: "Ivon & Diego",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${playfair.variable} ${lato.variable}`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
