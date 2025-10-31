import React from "react"

type MonogramProps = {
  className?: string
  opacity?: number
}

export default function Monogram({ className, opacity = 0.06 }: MonogramProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="id-gradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#id-gradient)" strokeWidth="4" strokeLinecap="round">
        <path d="M55 50c-15 15-20 35-20 50s5 35 20 50c10 10 25 15 45 15" />
        <path d="M145 35c-18 0-35 12-35 35 0 23 17 35 35 35 18 0 25-7 25-7" />
        <path d="M100 160c20 0 35-5 45-15 10-10 15-22 15-35" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M60 80c10-15 25-20 40-15" />
        <path d="M120 75c15-5 30 0 35 10" />
      </g>
      <text x="60" y="120" fontSize="56" fontFamily="serif" fill="currentColor">I</text>
      <text x="110" y="120" fontSize="56" fontFamily="serif" fill="currentColor">D</text>
      <text x="96" y="118" fontSize="22" fontFamily="serif" fill="currentColor">&</text>
    </svg>
  )
}


