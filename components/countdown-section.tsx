"use client"

import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })
  const target = new Date("2025-12-20T16:00:00")

  const formatGoogleDate = (date: Date) => {
    const pad = (n: number) => String(n).padStart(2, "0")
    const y = date.getFullYear()
    const m = pad(date.getMonth() + 1)
    const d = pad(date.getDate())
    const hh = pad(date.getHours())
    const mm = pad(date.getMinutes())
    const ss = pad(date.getSeconds())
    return `${y}${m}${d}T${hh}${mm}${ss}`
  }

  const handleDownloadIcs = () => {
    const dtStart = formatGoogleDate(target)
    const end = new Date(target.getTime() + 2 * 60 * 60 * 1000) // 2h
    const dtEnd = formatGoogleDate(end)
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Ivon & Diego//Wedding//ES",
      "BEGIN:VEVENT",
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
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
  }

  useEffect(() => {
    const weddingDate = target.getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="relative py-20 px-4 text-white" aria-live="polite">
      <div className="absolute inset-0">
        <img src="/gallery/04.jpeg" alt="Cuenta regresiva" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <h2
          className={`font-serif text-4xl font-bold mb-4 md:text-5xl text-balance transition-all duration-700 ${
            isVisible ? "animate-fade-in-down opacity-100" : "opacity-0 -translate-y-8"
          }`}
        >
          Cuenta regresiva
        </h2>
        <p
          className={`text-lg mb-12 opacity-90 transition-all duration-700 delay-100 ${
            isVisible ? "animate-fade-in opacity-100" : "opacity-0"
          }`}
        >
          Faltan solo...
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div
            className={`relative rounded-full p-1 bg-white/15 ring-1 ring-white/20 shadow-lg transition-all duration-700 delay-200 ${
              isVisible ? "animate-zoom-in opacity-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10 backdrop-blur">
              <div>
                <div className="font-serif text-5xl font-bold md:text-6xl text-center">{timeLeft.days}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] opacity-90 text-center">DÍAS</div>
              </div>
            </div>
          </div>
          <div
            className={`relative rounded-full p-1 bg-white/15 ring-1 ring-white/20 shadow-lg transition-all duration-700 delay-300 ${
              isVisible ? "animate-zoom-in opacity-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10 backdrop-blur">
              <div>
                <div className="font-serif text-5xl font-bold md:text-6xl text-center">{timeLeft.hours}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] opacity-90 text-center">HORAS</div>
              </div>
            </div>
          </div>
          <div
            className={`relative rounded-full p-1 bg-white/15 ring-1 ring-white/20 shadow-lg transition-all duration-700 delay-500 ${
              isVisible ? "animate-zoom-in opacity-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10 backdrop-blur">
              <div>
                <div className="font-serif text-5xl font-bold md:text-6xl text-center">{timeLeft.minutes}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] opacity-90 text-center">MINUTOS</div>
              </div>
            </div>
          </div>
          <div
            className={`relative rounded-full p-1 bg-white/15 ring-1 ring-white/20 shadow-lg transition-all duration-700 delay-700 ${
              isVisible ? "animate-zoom-in opacity-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10 backdrop-blur">
              <div>
                <div className="font-serif text-5xl font-bold md:text-6xl text-center">{timeLeft.seconds}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] opacity-90 text-center">SEGUNDOS</div>
              </div>
            </div>
          </div>
        </div>

        <p className={`mt-10 text-sm opacity-90 transition-all duration-700 delay-800 ${isVisible ? "animate-fade-in opacity-100" : "opacity-0"}`}>
          20 de diciembre de 2025 — 4:00 PM (hora local)
        </p>

        <div className={`mt-6 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 delay-900 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-3"}`}>
          <a
            href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Boda de Ivon & Diego")}&dates=${formatGoogleDate(target)}/${formatGoogleDate(new Date(target.getTime() + 2*60*60*1000))}&details=${encodeURIComponent("Ceremonia y celebración")}`}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="secondary" className="rounded-full">Google Calendar</Button>
          </a>
          <Button variant="secondary" className="rounded-full" onClick={handleDownloadIcs}>Apple/Outlook</Button>
        </div>
      </div>
    </section>
  )
}
