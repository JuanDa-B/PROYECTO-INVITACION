"use client"

import { Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ParentsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section ref={ref} id="parents-section" className="bg-background py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Heart className="h-8 w-8 text-primary fill-primary/20" />
            </div>
          </div>
          <h2 className="font-serif text-5xl font-bold text-foreground md:text-6xl mb-6 text-balance tracking-[0.04em] leading-tight">
            Con la bendición de nuestros padres
          </h2>
          <div className="mx-auto h-px w-24 bg-primary/30" />
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:divide-x md:divide-border">
          {/* Padres del Novio */}
          <div
            className={`text-center transition-all duration-700 delay-200 ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-8">
              <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/20">
                <span className="font-serif text-5xl text-primary font-bold">D</span>
              </div>
              <h3 className="font-serif text-3xl font-semibold text-foreground mb-4">Padres del Novio</h3>
              <div className="mx-auto h-px w-16 bg-primary/20 mb-6" />
            </div>
            <p className="text-xl text-foreground mb-2 font-light">María Yineth Campos Cruz</p>
            <p className="text-xl text-foreground font-light">Jose Ignacio Noe Barrera</p>
          </div>

          {/* Padres de la Novia */}
          <div
            className={`text-center transition-all duration-700 delay-300 ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-8">
              <div className="mx-auto mb-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/20">
                <span className="font-serif text-5xl text-primary font-bold">I</span>
              </div>
              <h3 className="font-serif text-3xl font-semibold text-foreground mb-4">Padres de la Novia</h3>
              <div className="mx-auto h-px w-16 bg-primary/20 mb-6" />
            </div>
            <p className="text-xl text-foreground mb-2 font-light">Tatiana Charry</p>
            <p className="text-xl text-foreground font-light">Mario Artunduaga</p>
          </div>
        </div>
      </div>
    </section>
  )
}
