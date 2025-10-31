"use client"

import { Gift, Shirt } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function RecommendationsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 px-4">
      <div
        className={`relative mx-auto max-w-4xl rounded-2xl bg-card shadow-2xl ring-1 ring-border/50 overflow-hidden transition-all duration-700 ${
          isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="absolute inset-0">
          <img
            src="/gallery/04.jpeg"
            alt="Fondo"
            className="h-full w-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-card/80" />
        </div>
        <div className="relative grid gap-8 md:grid-cols-2 p-10">
          {/* Lluvia de sobres */}
          <div
            className={`text-center transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20">
              <Gift className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-card-foreground">Lluvia de sobres</h3>
          </div>

          {/* Vestimenta */}
          <div
            className={`text-center transition-all duration-500 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20">
              <Shirt className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-2 text-card-foreground">Vestimenta</h3>
            <p className="text-sm text-muted-foreground">Agradecemos evitar el color blanco</p>
          </div>
        </div>
      </div>
    </section>
  )
}
