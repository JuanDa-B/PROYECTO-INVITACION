"use client"

import { Heart, CalendarPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function CalendarSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 })

  const daysInMonth = [
    { day: 1, isWedding: false },
    { day: 2, isWedding: false },
    { day: 3, isWedding: false },
    { day: 4, isWedding: false },
    { day: 5, isWedding: false },
    { day: 6, isWedding: false },
    { day: 7, isWedding: false },
    { day: 8, isWedding: false },
    { day: 9, isWedding: false },
    { day: 10, isWedding: false },
    { day: 11, isWedding: false },
    { day: 12, isWedding: false },
    { day: 13, isWedding: false },
    { day: 14, isWedding: false },
    { day: 15, isWedding: false },
    { day: 16, isWedding: false },
    { day: 17, isWedding: false },
    { day: 18, isWedding: false },
    { day: 19, isWedding: false },
    { day: 20, isWedding: true },
    { day: 21, isWedding: false },
    { day: 22, isWedding: false },
    { day: 23, isWedding: false },
    { day: 24, isWedding: false },
    { day: 25, isWedding: false },
    { day: 26, isWedding: false },
    { day: 27, isWedding: false },
    { day: 28, isWedding: false },
    { day: 29, isWedding: false },
    { day: 30, isWedding: false },
    { day: 31, isWedding: false },
  ]

  const weekDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

  const target = new Date("2025-12-20T16:00:00")
  const pad = (n: number) => String(n).padStart(2, "0")
  const fmt = (d: Date) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`

  return (
    <section ref={ref} className="bg-accent py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2
            className={`font-serif text-4xl font-bold text-accent-foreground md:text-5xl mb-3 text-balance tracking-[0.04em] transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            Guarda la fecha
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-100 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            Diciembre 2025
          </p>
          <div
            className={`mt-5 flex items-center justify-center gap-3 transition-all duration-700 delay-200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                "Boda de Ivon & Diego"
              )}&dates=${fmt(target)}/${fmt(
                new Date(target.getTime() + 2 * 60 * 60 * 1000)
              )}&details=${encodeURIComponent("Ceremonia y celebración")}`}
              target="_blank"
              rel="noreferrer"
            >
              <Button size="sm" variant="secondary" className="rounded-full">
                <CalendarPlus className="mr-2 h-4 w-4" />
                Google
              </Button>
            </a>
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full"
              onClick={() => {
                const end = new Date(target.getTime() + 2 * 60 * 60 * 1000)
                const ics = [
                  "BEGIN:VCALENDAR",
                  "VERSION:2.0",
                  "PRODID:-//Ivon & Diego//Wedding//ES",
                  "BEGIN:VEVENT",
                  `DTSTART:${fmt(target)}`,
                  `DTEND:${fmt(end)}`,
                  "SUMMARY:Boda de Ivon & Diego",
                  "DESCRIPTION:Ceremonia y celebración",
                  "LOCATION:",
                  "END:VEVENT",
                  "END:VCALENDAR",
                ].join("\r\n")
                const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" })
                const url = URL.createObjectURL(blob)
                const a = document.createElement("a")
                a.href = url
                a.download = "Ivon-Diego-invitacion.ics"
                a.click()
                URL.revokeObjectURL(url)
              }}
            >
              <CalendarPlus className="mr-2 h-4 w-4" />
              Apple/Outlook
            </Button>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
          }`}
        >
          <div className="mb-8 overflow-hidden rounded-2xl relative h-48 shine-effect">
            <img src="/gallery/03.jpeg" alt="Banner calendario" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6 fill-current heart-beat" />
                <span className="font-serif text-2xl font-semibold">20 de Diciembre, 2025</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-lg md:p-8 ring-1 ring-border/50 shine-effect">
            <div className="grid grid-cols-7 gap-2 mb-4">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-sm font-semibold text-muted-foreground">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              <div className="aspect-square" />

              {daysInMonth.map(({ day, isWedding }) => (
                <div
                  key={day}
                  className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    isWedding ? "bg-primary text-primary-foreground relative shadow-md" : "hover:bg-muted text-card-foreground"
                  }`}
                >
                  {isWedding ? (
                    <div className="relative">
                      <Heart className="h-6 w-6 fill-current heart-beat" style={{ animationDelay: '0.5s' }} />
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">{day}</span>
                    </div>
                  ) : (
                    day
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
