'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Work',     href: '#work'     },
  { label: 'Services', href: '#services' },
  { label: 'Process',  href: '#process'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('')
  const [open,     setOpen]     = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['work', 'services', 'process']
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.4 }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const onMouseMove = (e) => {
    const nav = navRef.current
    if (!nav) return
    const r  = nav.getBoundingClientRect()
    const dx = (e.clientX - r.left  - r.width  / 2) / (r.width  / 2)
    const dy = (e.clientY - r.top   - r.height / 2) / (r.height / 2)
    nav.style.transform = `perspective(600px) rotateX(${-dy * 6}deg) rotateY(${dx * 8}deg) scale(1.02)`
  }
  const onMouseLeave = () => {
    const nav = navRef.current
    if (!nav) return
    nav.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)'
  }

  return (
    <div className={`fixed top-0 left-0 right-0 z-[200] flex justify-center items-center pointer-events-none transition-[padding] duration-400 ease-out ${scrolled ? 'pt-3' : 'pt-5'}`}>
      <nav
        ref={navRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`nav-pill pointer-events-auto flex items-center ${scrolled ? 'scrolled' : ''}`}
      >
        {/* Logo */}
        <Link href="/" className="logo-3d font-bebas text-2xl tracking-[0.18em] text-white mr-5 md:mr-8 no-underline">
          Upframa
        </Link>

        <span className="w-px h-[18px] bg-white/10 mx-3 md:mx-5" />

        {/* Desktop links */}
        <ul className="hidden md:flex gap-1 list-none m-0 p-0">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-mono text-[10px] tracking-[0.14em] uppercase px-4 py-2 rounded-full transition-all duration-200 no-underline
                  ${active === l.href.slice(1) ? 'text-white bg-accent/20' : 'text-white/60 hover:text-white hover:bg-white/[0.07]'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="relative ml-3 font-mono text-[10px] tracking-[0.14em] uppercase text-white bg-accent px-4 md:px-[22px] py-[10px] rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5"
          style={{ boxShadow: '0 4px 16px rgba(200,67,42,.35)' }}
        >
          <span className="relative z-10 hidden md:inline">Let's Talk</span>
          <span className="relative z-10 md:hidden">Talk</span>
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 to-transparent pointer-events-none" />
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="ml-2 md:hidden flex flex-col gap-1.5 p-2 pointer-events-auto"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-white transition-all duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden absolute top-[70px] left-4 right-4 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 pointer-events-auto flex flex-col gap-3">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/70 hover:text-white py-2 border-b border-white/[0.06] no-underline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 font-mono text-[11px] tracking-[0.15em] uppercase text-white bg-accent text-center py-3 rounded-full no-underline"
          >
            Let's Talk
          </a>
        </div>
      )}
    </div>
  )
}