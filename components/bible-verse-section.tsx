"use client"

import { Quote } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useState } from "react"

export default function BibleVerseSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0" style={{ transform: `translateY(${(scrollY - 2000) * 0.3}px)` }}>
        <img src="/romantic-wedding-flowers-soft-light.jpg" alt="Fondo" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center text-background">
        <Quote
          className={`mx-auto h-12 w-12 mb-8 opacity-80 transition-all duration-700 ${
            isVisible ? "animate-fade-in-down opacity-80" : "opacity-0 -translate-y-8"
          }`}
        />
        <blockquote
          className={`font-serif text-2xl font-light leading-relaxed md:text-3xl lg:text-4xl mb-8 text-balance transition-all duration-700 delay-200 ${
            isVisible ? "animate-fade-in opacity-100" : "opacity-0"
          }`}
        >
          "El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso. No se comporta con
          rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor."
        </blockquote>
        <cite
          className={`text-lg font-light tracking-wide opacity-90 not-italic transition-all duration-700 delay-300 ${
            isVisible ? "animate-fade-in-up opacity-90" : "opacity-0 translate-y-8"
          }`}
        >
          — 1 Corintios 13:4-5
        </cite>
      </div>
    </section>
  )
}
