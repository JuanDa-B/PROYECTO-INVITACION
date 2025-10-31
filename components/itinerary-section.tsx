"use client"

import { Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ItinerarySection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const schedule = [
    { time: "4:00 PM", event: "Ceremonia religiosa", location: "Iglesia San Francisco" },
    { time: "5:30 PM", event: "Cóctel de bienvenida", location: "Hacienda Los Jardines" },
    { time: "6:30 PM", event: "Recepción y cena", location: "Salón principal" },
    { time: "8:00 PM", event: "Primer baile", location: "Pista de baile" },
    { time: "8:30 PM", event: "Fiesta y baile", location: "Pista de baile" },
    { time: "12:00 AM", event: "Cierre de celebración", location: "Hacienda Los Jardines" },
  ]

  return (
    <section ref={ref} className="bg-background py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "animate-fade-in-down opacity-100" : "opacity-0 -translate-y-8"
          }`}
        >
          <Clock className="mx-auto h-8 w-8 text-primary mb-4" />
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-4 text-balance">
            Itinerario del día
          </h2>
          <p className="text-lg text-muted-foreground">Así transcurrirá nuestro día especial</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 transition-all duration-700 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"}`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                {/* Time badge */}
                <div className="absolute left-8 -translate-x-1/2 md:left-1/2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 pl-24 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="rounded-lg bg-card p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                    <p className="text-sm font-semibold text-primary mb-2">{item.time}</p>
                    <h3 className="font-serif text-xl font-semibold mb-1">{item.event}</h3>
                    <p className="text-sm text-muted-foreground">{item.location}</p>
                  </div>
                </div>

                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
