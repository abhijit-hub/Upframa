'use client'
import Image from 'next/image'

/*
  FOUNDERS — drop your two founder photos into /public/
  named: founder-1.jpg  and  founder-2.jpg
  (any jpg/png/webp works — just rename accordingly)
*/

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-14 pb-16 overflow-hidden bg-black">

      {/* Ghost background word */}
      <span
        aria-hidden
        className="hero-ghost absolute top-1/2 left-1/2 font-bebas select-none pointer-events-none text-white/[0.03] whitespace-nowrap leading-none tracking-tight"
        style={{ fontSize: 'clamp(160px, 22vw, 360px)' }}
      >
        UPFRAMA
      </span>

      {/* ── Founders photos (top-right) ── */}
      <div
        className="absolute top-1/2 right-14 -translate-y-1/2 flex flex-col items-end"
        style={{ animation: 'fadeUp 1.2s 0.8s both' }}
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent/80 mb-4">
          — Founded by
        </span>

        {/* Photo cluster */}
        <div className="relative w-[340px] h-[160px]">
          {/* Founder 1 */}
          <div className="founder-card">
            <Image
              src="/founder-1.jpg"
              alt="Founder 1"
              fill
              className="object-cover object-top"
              /*
                Replace /founder-1.jpg with your actual photo path.
                Add the file to the /public folder.
              */
            />
          </div>
          {/* Founder 2 */}
          <div className="founder-card">
            <Image
              src="/founder-2.jpg"
              alt="Founder 2"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Names — update these */}
        <div className="mt-5 text-right flex flex-col gap-1">
          <span className="font-mono text-[11px] tracking-[0.1em] text-white/40">Founder One</span>
          <span className="font-mono text-[11px] tracking-[0.1em] text-white/40">Founder Two</span>
        </div>
      </div>

      {/* Tag line */}
      <div
        className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-5"
        style={{ animation: 'fadeUp 1s 0.2s both' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
        Est. 2024 · Mumbai
      </div>

      {/* Main headline */}
      <h1
        className="font-bebas leading-[0.92] tracking-tight max-w-[60%]"
        style={{
          fontSize: 'clamp(68px, 10.5vw, 148px)',
          animation: 'fadeUp 1s 0.35s both',
        }}
      >
        We Shape
        <em className="font-playfair not-italic italic text-accent block">Futures</em>
        Through Design
      </h1>

      {/* Bottom row */}
      <div
        className="flex justify-between items-end mt-12"
        style={{ animation: 'fadeUp 1s 0.6s both' }}
      >
        <p className="text-[15px] leading-[1.75] text-white/55 max-w-[380px] font-light">
          Upframa is a fresh design studio building brands, landing pages,
          and full-stack digital experiences — from Figma to live,
          production-ready code.
        </p>
        <a
          href="#work"
          className="hero-cta flex items-center gap-3.5 font-mono text-xs tracking-[0.15em] uppercase text-white no-underline border-b border-accent pb-1"
        >
          See Our Work ↗
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'fadeUp 1s 1s both' }}
        aria-hidden
      >
        <div className="scroll-line" />
        <span className="font-mono text-[9px] tracking-[0.2em] text-accent uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </section>
  )
}
