"use client"

import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function LocationSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const googleMapsUrl = "https://maps.app.goo.gl/JohdpTAjHGWDbU8j9"

  return (
    <section ref={ref} className="bg-muted py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "animate-fade-in-down opacity-100" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-4 text-balance">
            Lugar de la Celebración
          </h2>
          <div className="mx-auto h-px w-24 bg-primary/30" />
        </div>

        <div
          className={`rounded-2xl bg-card p-8 shadow-2xl ring-1 ring-border/50 transition-all duration-1000 delay-300 ${
            isVisible ? "animate-zoom-in opacity-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="md:flex md:items-center md:gap-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6346.096227874236!2d-75.25028210703707!3d2.8214974112163884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwNDknMTguMCJOIDc1wrAxNCc0NS42Ilc!5e0!3m2!1sen!2sco!4v1762311664238!5m2!1sen!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="font-serif text-3xl font-semibold mb-2">Ubicación del Evento</h3>
              <p className="text-muted-foreground mb-6">Neiva, Huila</p>
              <Button
                onClick={() => window.open(googleMapsUrl, "_blank")}
                className="w-full md:w-auto rounded-full"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Ver en Google Maps
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
