"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function RsvpSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  const handleRsvpClick = () => {
    // Replace this URL with your actual Google Form URL
    window.open("https://forms.google.com/your-form-url", "_blank")
  }

  return (
    <section ref={ref} className="bg-gradient-to-b from-background to-accent/20 pt-16 md:pt-20 pb-24 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <div
          className={`mb-8 flex justify-center transition-all duration-700 ${
            isVisible ? "animate-zoom-in opacity-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="rounded-full bg-primary/10 p-4">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
        </div>
        <h2
          className={`font-serif text-5xl font-bold text-foreground md:text-6xl mb-6 text-balance transition-all duration-700 delay-100 ${
            isVisible ? "animate-fade-in-down opacity-100" : "opacity-0 -translate-y-8"
          }`}
        >
          Confirma tu asistencia
        </h2>
        <div
          className={`mx-auto h-px w-24 bg-primary/30 mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "animate-fade-in opacity-100" : "opacity-0"
          }`}
        />
        <p
          className={`text-xl text-muted-foreground mb-4 leading-relaxed transition-all duration-700 delay-300 ${
            isVisible ? "animate-fade-in opacity-100" : "opacity-0"
          }`}
        >
          Tu presencia es muy importante para nosotros
        </p>
        <p
          className={`text-lg text-muted-foreground mb-12 transition-all duration-700 delay-400 ${
            isVisible ? "animate-fade-in opacity-100" : "opacity-0"
          }`}
        >
          Por favor confirma antes del <span className="font-semibold text-foreground">1 de diciembre</span>
        </p>

        <Button
          size="lg"
          onClick={handleRsvpClick}
          className={`rounded-full bg-primary px-12 py-7 text-lg text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-700 delay-500 shadow-xl ${
            isVisible ? "animate-zoom-in opacity-100" : "opacity-0 scale-75"
          }`}
        >
          Confirmar asistencia
          <ExternalLink className="ml-3 h-5 w-5" />
        </Button>

        <p
          className={`mt-8 text-sm text-muted-foreground transition-all duration-700 delay-600 ${
            isVisible ? "animate-fade-in opacity-100" : "opacity-0"
          }`}
        >
          Se abrirá un formulario en una nueva ventana
        </p>
      </div>
    </section>
  )
}
