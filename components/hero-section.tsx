"use client"

import { Button } from "@/components/ui/button"
import Monogram from "./monogram"
import { Play } from "lucide-react"
import { useState, useEffect } from "react"
import type { FloatingMusicPlayerRef } from "./floating-music-player"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Si el usuario vuelve arriba, resetea la animación
      if (window.scrollY < 10 && isAnimating) {
        setIsAnimating(false)
      }
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isAnimating])

  const handleBeginClick = () => {
    if (isAnimating) return
    setIsAnimating(true)

    // Reproducir la canción
    const musicPlayerRef = (window as any).musicPlayerRef as { current: FloatingMusicPlayerRef | null } | undefined
    musicPlayerRef?.current?.playMusic()

    // Hacer scroll después de la animación de fade-out
    setTimeout(() => {
      const firstSection = document.getElementById("parents-section")
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 800) // Duración del fade-out del texto
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image con Parallax y Zoom animado */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] ease-out"
        style={{
          backgroundImage: `url(/gallery/01.jpeg)`,
          transform: `translateY(${scrollY * 0.5}px) scale(${isAnimating ? 1.15 : 1})`,
          filter: `blur(${isAnimating ? "4px" : "0px"})`,
          transition: "transform 1.5s ease-out, filter 1s ease-out",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/50 via-rose-950/30 to-amber-950/70" />
      </div>

      {/* Monogram watermark */}
      <div
        className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-500 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative h-[60vh] w-[60vh] text-white/50">
          <Monogram className="h-full w-full" opacity={0.04} />
        </div>
      </div>

      {/* Contenido de Texto y Botón */}
      <div
        className={`relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white transition-opacity duration-800 ${
          isAnimating ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="animate-fade-in-up">
          <div className="mb-4 text-sm font-light tracking-[0.3em] uppercase opacity-90">Celebremos el amor</div>
        </div>
        <h1 className="font-serif text-6xl font-bold tracking-[0.05em] md:text-8xl lg:text-9xl animate-fade-in-up text-balance leading-[0.95]">
          Ivon & Diego
        </h1>
        <div className="my-10 flex items-center gap-4">
          <div className="h-px w-20 bg-white/60" />
          <div className="h-2 w-2 rotate-45 bg-white/60" />
          <div className="h-px w-20 bg-white/60" />
        </div>
        <p className="text-2xl font-light tracking-[0.2em] md:text-3xl animate-fade-in-up animation-delay-200">
          NOS CASAMOS
        </p>
        <p className="mt-6 text-xl font-light md:text-2xl animate-fade-in-up animation-delay-300 tracking-wide">
          20 de Diciembre, 2025
        </p>
        <p className="mt-6 max-w-2xl text-balance text-base md:text-lg font-light opacity-90 animate-fade-in-up animation-delay-400">
          "Entre tus manos aprendí que el hogar es una mirada y que el tiempo se hace eterno cuando caminas a mi lado."
        </p>
        <Button
          size="lg"
          className="mt-16 rounded-full bg-white/95 px-10 py-7 text-lg text-foreground hover:bg-white hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-500 shadow-2xl"
          onClick={handleBeginClick}
        >
          <Play className="mr-3 h-6 w-6 fill-current" />
          Comenzar
        </Button>
      </div>
    </section>
  )
}
