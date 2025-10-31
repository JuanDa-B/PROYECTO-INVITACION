"use client"

import { Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function LoveStorySection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.25 })

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-background to-accent/20 py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div
          className={`mb-8 inline-flex items-center justify-center rounded-full bg-primary/10 p-4 transition-all duration-700 ${
            isVisible ? "animate-zoom-in opacity-100" : "opacity-0 scale-75"
          }`}
        >
          <Heart className="h-8 w-8 text-primary" />
        </div>

        <h2
          className={`font-serif text-5xl font-bold text-foreground md:text-6xl mb-4 text-balance transition-all duration-700 delay-100 ${
            isVisible ? "animate-fade-in-down opacity-100" : "opacity-0 -translate-y-8"
          }`}
        >
          Nuestra historia
        </h2>
        <div
          className={`mx-auto mb-12 h-px w-24 bg-primary/30 transition-all duration-700 delay-200 ${
            isVisible ? "animate-fade-in opacity-100" : "opacity-0"
          }`}
        />

        <div className="mx-auto grid gap-8 text-left md:grid-cols-2">
          <div
            className={`rounded-2xl bg-card/90 p-8 shadow-xl ring-1 ring-border/50 backdrop-blur transition-all duration-700 delay-200 ${
              isVisible ? "animate-slide-in-left opacity-100" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-sm font-semibold text-primary mb-2">Ivon Andrea</p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Desde el primer día supe que en tus ojos había hogar. Tu risa se volvió mi música favorita, y tu mano, el
              lugar donde todo cobra sentido. Contigo, cada día es una promesa cumplida.
            </p>
          </div>

          <div
            className={`rounded-2xl bg-card/90 p-8 shadow-xl ring-1 ring-border/50 backdrop-blur transition-all duration-700 delay-300 ${
              isVisible ? "animate-slide-in-right opacity-100" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-sm font-semibold text-primary mb-2">Diego Fernando</p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Tu amor me enseñó paciencia y ternura. Eres refugio, aventura y destino. Hoy caminamos hacia el futuro con
              la certeza de que Dios escribió este capítulo para nosotros.
            </p>
          </div>
        </div>

        <p
          className={`mt-12 text-xl md:text-2xl font-light text-foreground transition-all duration-700 delay-500 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          “Toma mi mano y caminemos por donde la vida nos lleve.”
        </p>
      </div>
    </section>
  )
}


