"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function PhotoGallery() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const photos = [
    { src: "/gallery/01.jpeg", alt: "Foto 1", caption: "" },
    { src: "/gallery/02.jpeg", alt: "Foto 2", caption: "" },
    { src: "/gallery/03.jpeg", alt: "Foto 3", caption: "" },
    { src: "/gallery/04.jpeg", alt: "Foto 4", caption: "" },
  ]

  return (
    <section ref={ref} className="bg-background py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-4 text-balance">
            Galería
          </h2>
          <p className="text-lg text-muted-foreground">Nuestros momentos favoritos</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg aspect-[4/3] shadow-lg transition-all duration-700 ${
                isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="h-full w-full object-cover will-change-transform animate-kenburns-slow group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
              {photo.caption ? (
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <p className="font-serif text-xl md:text-2xl drop-shadow-lg tracking-wide">
                    {photo.caption}
                  </p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
