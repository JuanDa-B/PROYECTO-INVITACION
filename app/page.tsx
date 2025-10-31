"use client"

import { useRef } from "react"
import HeroSection from "@/components/hero-section"
import ParentsSection from "@/components/parents-section"
import CountdownSection from "@/components/countdown-section"
import CalendarSection from "@/components/calendar-section"
import FloatingMusicPlayer, { type FloatingMusicPlayerRef } from "@/components/floating-music-player"
import LocationSection from "@/components/location-section"
import RecommendationsSection from "@/components/recommendations-section"
import RsvpSection from "@/components/rsvp-section"
import FooterSection from "@/components/footer-section"

export default function WeddingInvitation() {
  const musicPlayerRef = useRef<FloatingMusicPlayerRef>(null)

  // Exponer la ref globalmente para que hero-section pueda acceder
  if (typeof window !== "undefined") {
    ;(window as any).musicPlayerRef = musicPlayerRef
  }

  return (
    <main className="min-h-screen">
      <HeroSection />
      <FloatingMusicPlayer ref={musicPlayerRef} />
      <ParentsSection />
      <CountdownSection />
      <CalendarSection />
      <LocationSection />
      <RecommendationsSection />
      <RsvpSection />
      <FooterSection />
    </main>
  )
}
