"use client"

import Monogram from "./monogram"

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/gallery/02.jpeg"
          alt="Fondo footer"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/85 via-rose-950/75 to-amber-950/85" />
      </div>

      {/* Monogram watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[42vh] w-[42vh] text-white/70">
          <Monogram className="h-full w-full" opacity={0.035} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-4 text-center text-white">
        <div className="mx-auto max-w-4xl">
          {/* Monogram */}
          <div className="mb-8 flex justify-center animate-fade-in-up">
            <div className="flex items-center gap-6">
              <div className="h-24 w-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                <span className="font-serif text-4xl font-bold">I</span>
              </div>
              <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-2xl">&</span>
              </div>
              <div className="h-24 w-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                <span className="font-serif text-4xl font-bold">D</span>
              </div>
            </div>
          </div>

          {/* Names */}
          <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-[0.08em] leading-tight animate-fade-in-up animation-delay-200">
            Ivon & Diego
          </h3>

          {/* Divider */}
          <div className="my-8 flex items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <div className="h-px w-20 bg-white/40" />
            <div className="h-2 w-2 rotate-45 bg-white/40" />
            <div className="h-px w-20 bg-white/40" />
          </div>

          {/* Date */}
          <p className="text-xl md:text-2xl font-light tracking-wide mb-2 animate-fade-in-up animation-delay-600">
            20 de Diciembre, 2025
          </p>

          {/* Tagline */}
          <p className="text-lg font-light tracking-widest opacity-90 mb-12 animate-fade-in-up animation-delay-800">
            NUESTRO DÍA ESPECIAL
          </p>

          {/* Bottom text */}
          <div className="pt-8 border-t border-white/20 animate-fade-in-up animation-delay-1000">
            <p className="text-sm font-light opacity-75">Gracias por ser parte de nuestra historia de amor</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
