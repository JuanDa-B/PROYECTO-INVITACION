"use client"

import { Music2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function MusicPlayer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 })

  return (
    <section ref={ref} className="px-4 py-10">
      <div
        className={`mx-auto max-w-xl rounded-2xl bg-card/80 shadow-2xl ring-1 ring-border/50 backdrop-blur transition-all duration-700 ${
          isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 px-5 pt-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Music2 className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Nuestra canción</p>
            <h3 className="font-serif text-lg font-semibold text-card-foreground">Toma mi mano — Tercer Cielo</h3>
          </div>
        </div>
        <div className="p-5">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: 12 }}
            src="https://open.spotify.com/embed/track/2PVx0kmhThV6xvxlFVoUa3?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}


