"use client"

import { Video, Play } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useRef } from "react"
import type { FloatingMusicPlayerRef } from "./floating-music-player"

export default function LocationSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [wasMusicPlaying, setWasMusicPlaying] = useState(false)

  const getMusicPlayer = (): FloatingMusicPlayerRef | null => {
    if (typeof window === "undefined") return null
    const refObject = (window as any).musicPlayerRef as React.RefObject<FloatingMusicPlayerRef> | undefined
    return refObject?.current ?? null
  }

  const handleVideoPlay = () => {
    const musicPlayer = getMusicPlayer()
    if (musicPlayer?.isPlaying()) {
      setWasMusicPlaying(true)
      musicPlayer.pauseMusic()
    }
  }

  const handleVideoPauseOrEnd = () => {
    const musicPlayer = getMusicPlayer()
    if (wasMusicPlaying) {
      musicPlayer?.playMusic()
      setWasMusicPlaying(false)
    }
  }

  const handleLoadVideo = () => {
    setShowVideo(true)
    setTimeout(() => {
      videoRef.current?.load()
      videoRef.current?.play()
    }, 100)
  }

  return (
    <section ref={ref} className="bg-muted py-28 px-4">
      <div className="mx-auto max-w-4xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "animate-fade-in-down opacity-100" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Video className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-4 text-balance">
            ¿Cómo llegar?
          </h2>
          <div className="mx-auto h-px w-24 bg-primary/30" />
        </div>

        <div
          className={`rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/50 transition-all duration-700 delay-300 ${
            isVisible ? "animate-zoom-in opacity-100" : "opacity-0 scale-95"
          }`}
        >
          {!showVideo ? (
            <div
              className="relative h-96 bg-cover bg-center rounded-lg overflow-hidden flex items-center justify-center cursor-pointer group"
              style={{ backgroundImage: "url('/gallery/02.jpeg')" }}
              onClick={handleLoadVideo}
            >
              <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/60" />
              <div className="relative text-center text-white p-4">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                  <Play className="h-8 w-8 fill-current ml-1" />
                </div>
                <p className="mt-4 font-semibold tracking-wide drop-shadow-md">Ver cómo llegar</p>
              </div>
            </div>
          ) : (
            <div className="relative bg-black rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-auto"
                controls
                preload="none"
                autoPlay
                onPlay={handleVideoPlay}
                onPause={handleVideoPauseOrEnd}
                onEnded={handleVideoPauseOrEnd}
              >
                <source src="/gallery/como_llegar.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
