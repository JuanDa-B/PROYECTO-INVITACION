"use client"

import { useState, useImperativeHandle, forwardRef } from "react"
import { Music2, X } from "lucide-react"

export interface FloatingMusicPlayerRef {
  playMusic: () => void
}

const FloatingMusicPlayer = forwardRef<FloatingMusicPlayerRef>((_props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null)

  useImperativeHandle(ref, () => ({
    playMusic: () => {
      setIsOpen(true)
      setTimeout(() => {
        audioElement?.play()
      }, 100)
    },
  }))

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Reproductor de música"
      >
        <Music2 className="h-6 w-6" />
      </button>

      {/* Panel flotante */}
      <div
        className={`fixed bottom-6 right-6 z-50 rounded-2xl bg-card/95 backdrop-blur-lg shadow-2xl ring-1 ring-border/50 transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
        style={{ width: "340px" }}
      >
        <div className="flex items-center justify-between p-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 pr-0.5">
              <Music2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Nuestra canción</p>
              <h3 className="font-serif text-sm font-semibold text-card-foreground">Toma mi mano</h3>
              <p className="text-xs text-muted-foreground">Tercer Cielo</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1 hover:bg-muted transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-4">
          <audio
            ref={setAudioElement}
            src="/gallery/toma-mi-mano.mp3"
            controls
            className="w-full h-10"
          />
        </div>
      </div>
    </>
  )
})

FloatingMusicPlayer.displayName = "FloatingMusicPlayer"

export default FloatingMusicPlayer
