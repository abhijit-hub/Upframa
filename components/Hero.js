'use client'
import Image from 'next/image'

/*
  ── HOW TO ADD YOUR PHOTOS ──────────────────────────────────
  1. Put your photos in the /public folder
  2. Name them:  founder-1.jpg  and  founder-2.jpg
  3. That's it — they show up automatically.
  ─────────────────────────────────────────────────────────────
*/

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-black px-6 pb-10 md:px-14 md:pb-16">

      {/* Ghost background word */}
      <span
        aria-hidden
        className="hero-ghost absolute top-1/2 left-1/2 font-bebas select-none pointer-events-none text-white/[0.03] whitespace-nowrap leading-none tracking-tight"
        style={{ fontSize: 'clamp(80px, 22vw, 360px)' }}
      >
        UPFRAMA
      </span>

      {/* ── Founders photos — DESKTOP: absolute top-right | MOBILE: inline top-right corner ── */}

      {/* Desktop */}
      <div
        className="hidden md:flex absolute top-1/2 right-14 -translate-y-1/2 flex-col items-end"
        style={{ animation: 'fadeUp 1.2s 0.8s both' }}
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent/70 mb-4">
          — Founded by
        </span>
        <div className="relative w-[300px] h-[155px]">
          <div
            className="absolute overflow-hidden bg-[#1a1a1a] rounded-[18px] border-2 border-white/10"
            style={{ width: 138, height: 138, top: 17, right: 142, transform: 'rotate(-5deg)', zIndex: 1, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
          >
            <Image src="/founder-2.jpg" alt="Founder" fill className="object-cover object-top" />
          </div>
          <div
            className="absolute overflow-hidden bg-[#1a1a1a] rounded-[18px] border-2 border-white/10"
            style={{ width: 138, height: 138, top: 0, right: 0, transform: 'rotate(4deg)', zIndex: 2, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
          >
            <Image src="/founder-1.jpg" alt="Founder" fill className="object-cover object-top" />
          </div>
        </div>
      </div>

      {/* Mobile — fixed top-right corner */}
      <div
        className="md:hidden absolute top-20 right-5 flex flex-col items-end"
        style={{ animation: 'fadeUp 1.2s 0.8s both' }}
      >
        <span className="font-mono text-[8px] tracking-[0.18em] uppercase text-accent/70 mb-2">
          — Founded by
        </span>
        {/* Two overlapping photos, smaller for mobile */}
        <div className="relative w-[150px] h-[90px]">
          <div
            className="absolute overflow-hidden bg-[#1a1a1a] rounded-[12px] border border-white/10"
            style={{ width: 80, height: 80, top: 10, right: 74, transform: 'rotate(-5deg)', zIndex: 1, boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }}
          >
            <Image src="/founder-2.jpg" alt="Founder" fill className="object-cover object-top" />
          </div>
          <div
            className="absolute overflow-hidden bg-[#1a1a1a] rounded-[12px] border border-white/10"
            style={{ width: 80, height: 80, top: 0, right: 0, transform: 'rotate(4deg)', zIndex: 2, boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }}
          >
            <Image src="/founder-1.jpg" alt="Founder" fill className="object-cover object-top" />
          </div>
        </div>
      </div>

      {/* Main headline */}
      <div
        className="max-w-full md:max-w-[70%] mb-8 md:mb-10"
        style={{ animation: 'fadeUp 1s 0.2s both' }}
      >
        <h1
          className="font-bebas text-white"
          style={{ fontSize: 'clamp(44px, 8.8vw, 124px)', lineHeight: 0.95, margin: 0 }}
        >
          <span className="block">We Shape</span>
          <span className="block text-accent" style={{ fontStyle: 'italic', letterSpacing: '0.01em' }}>
            Futures
          </span>
          <span className="block">Through Design</span>
        </h1>
      </div>

      {/* Bottom row */}
      <div
        className="flex flex-col gap-5 md:flex-row md:justify-between md:items-end"
        style={{ animation: 'fadeUp 1s 0.45s both' }}
      >
        <p className="text-[14px] md:text-[15px] leading-[1.75] text-white/55 max-w-[420px] font-light">
          Upframa is a fresh design studio building brands, landing pages,
          and full-stack digital experiences — from Figma to live,
          production-ready code.
        </p>
        <a
          href="#work"
          className="hero-cta self-start md:self-auto flex items-center gap-3.5 font-mono text-xs tracking-[0.15em] uppercase text-white no-underline border-b border-accent pb-1 shrink-0"
        >
          See Our Work ↗
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}