'use client'
import { useEffect, useRef } from 'react'

/**
 * Wraps any children in a scroll-triggered fade-up reveal.
 *
 * Props:
 *   delay  — transition-delay in seconds (default 0)
 *   className — extra classes on the wrapper div
 */
export default function RevealWrapper({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
