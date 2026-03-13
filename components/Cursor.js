'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      dot.style.left = e.clientX - 6 + 'px'
      dot.style.top  = e.clientY - 6 + 'px'
    }
    document.addEventListener('mousemove', onMove)

    let raf
    const animate = () => {
      const { mx, my, rx, ry } = pos.current
      pos.current.rx = rx + (mx - rx - 20) * 0.12
      pos.current.ry = ry + (my - ry - 20) * 0.12
      ring.style.left = pos.current.rx + 'px'
      ring.style.top  = pos.current.ry + 'px'
      raf = requestAnimationFrame(animate)
    }
    animate()

    const grow = () => {
      dot.style.transform  = 'scale(2.5)'
      ring.style.transform = 'scale(1.5)'
      ring.style.borderColor = 'rgba(200,67,42,0.8)'
    }
    const shrink = () => {
      dot.style.transform  = 'scale(1)'
      ring.style.transform = 'scale(1)'
      ring.style.borderColor = 'rgba(200,67,42,0.5)'
    }
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
