'use client'

import { useEffect, useRef, type ReactNode, type ElementType } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
  style?: React.CSSProperties
}

export function Reveal({ children, delay = 0, className = '', as: As = 'div', style }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in')
        })
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <As
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </As>
  )
}
