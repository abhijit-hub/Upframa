'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Work',     href: '#work'     },
  { label: 'Services', href: '#services' },
  { label: 'Process',  href: '#process'  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [active,   setActive]     = useState('')
  const navRef = useRef(null)

  /* ── sticky ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── active section ── */
  useEffect(() => {
    const ids = ['work', 'services', 'process']
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.4 }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  /* ── 3-D tilt ── */
  const onMouseMove = (e) => {
    const nav = navRef.current
    if (!nav) return
    const r  = nav.getBoundingClientRect()
    const dx = (e.clientX - r.left  - r.width  / 2) / (r.width  / 2)
    const dy = (e.clientY - r.top   - r.height / 2) / (r.height / 2)
    nav.style.transform = `perspective(600px) rotateX(${-dy * 6}deg) rotateY(${dx * 8}deg) scale(1.02)`
    nav.style.boxShadow = `
      ${-dx * 12}px ${-dy * 12 + 16}px 48px rgba(0,0,0,.6),
      ${-dx * 4 }px ${-dy *  4 +  4}px 16px rgba(0,0,0,.4),
      inset 0 1px 0 rgba(255,255,255,.1)
    `
  }
  const onMouseLeave = () => {
    const nav = navRef.current
    if (!nav) return
    nav.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)'
    nav.style.boxShadow = ''
  }

  return (
    /* full-width wrapper — pointer-events none so hero is still clickable */
    <div className={`fixed top-0 left-0 right-0 z-[200] flex justify-center items-center pointer-events-none transition-[padding] duration-400 ease-out ${scrolled ? 'pt-3' : 'pt-5'}`}>
      <nav
        ref={navRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`nav-pill pointer-events-auto flex items-center ${scrolled ? 'scrolled' : ''}`}
      >
        {/* Logo */}
        <Link href="/" className="logo-3d font-bebas text-2xl tracking-[0.18em] text-white mr-8 no-underline">
          Upframa
        </Link>

        {/* Divider */}
        <span className="w-px h-[18px] bg-white/10 mx-5" />

        {/* Links */}
        <ul className="flex gap-1 list-none m-0 p-0">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-mono text-[10px] tracking-[0.14em] uppercase px-4 py-2 rounded-full transition-all duration-200 no-underline
                  ${active === l.href.slice(1)
                    ? 'text-white bg-accent/20'
                    : 'text-white/60 hover:text-white hover:bg-white/7 hover:-translate-y-px'
                  }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="relative ml-3 font-mono text-[10px] tracking-[0.14em] uppercase text-white bg-accent px-[22px] py-[10px] rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,67,42,.5)]"
          style={{ boxShadow: '0 4px 16px rgba(200,67,42,.35)' }}
        >
          <span className="relative z-10">Let's Talk</span>
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 to-transparent pointer-events-none" />
        </a>
      </nav>
    </div>
  )
}
