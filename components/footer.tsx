import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary py-16 px-4 text-primary-foreground">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          {/* Couple photo */}
          <div className="mb-8">
            <div className="mx-auto h-32 w-32 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-xl">
              <img src="/gallery/03.jpeg" alt="Ivon y Diego" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Initials */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="font-serif text-5xl font-bold">I</span>
            <Heart className="h-8 w-8 fill-current" />
            <span className="font-serif text-5xl font-bold">D</span>
          </div>

          {/* Date */}
          <p className="text-xl font-light tracking-wide mb-2">20 de Diciembre, 2025</p>

          {/* Divider */}
          <div className="my-8 mx-auto h-px w-32 bg-primary-foreground/30" />

          {/* Message */}
          <p className="text-lg font-light mb-8 text-balance">Gracias por ser parte de nuestro día especial</p>

          {/* Hashtag */}
          <p className="text-sm tracking-widest opacity-80">#IvonYDiego2025</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm opacity-60">
        <p>© 2025 Ivon & Diego. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
