import RevealWrapper from './RevealWrapper'

/*
  ── HOW TO USE REAL SCREENSHOTS ─────────────────────────────
  1. Add screenshot images to /public/wall/
     e.g. /public/wall/ember.jpg, /public/wall/vela.jpg …
  2. In each card object add:  image: '/wall/ember.jpg'
  3. In the WallCard component swap the gradient <div> for:
       <Image src={card.image} alt={card.name} fill className="object-cover" />
  ────────────────────────────────────────────────────────────
*/

const row1 = [
  { name: 'Ember Foods',     tag: 'Branding',     g: 'linear-gradient(135deg,#1a0a0a,#c8432a,#e8a020)' },
  { name: 'Vela Finance',    tag: 'Web App',       g: 'linear-gradient(160deg,#080820,#1a1a80,#4040d0)' },
  { name: 'Aero Startup',    tag: 'Landing Page',  g: 'linear-gradient(200deg,#0a1a0a,#2a7a2a,#80c040)' },
  { name: 'Nova Agency',     tag: 'Brand Identity',g: 'linear-gradient(120deg,#1a0a1a,#5a1a6a,#c040e0)' },
  { name: 'Crest Analytics', tag: 'Dashboard',     g: 'linear-gradient(150deg,#0a1020,#1a3060,#40a0c0)' },
  { name: 'Meridian Store',  tag: 'E-commerce',    g: 'linear-gradient(140deg,#1a1008,#6a4010,#c09030)' },
]

const row2 = [
  { name: 'Flux Platform',   tag: 'SaaS',          g: 'linear-gradient(170deg,#100a18,#3a1060,#8040c0)' },
  { name: 'Arch Studio',     tag: 'Portfolio',     g: 'linear-gradient(130deg,#0a1a14,#0a5a3a,#20c080)' },
  { name: 'Red Studio',      tag: 'Branding',      g: 'linear-gradient(145deg,#1a0808,#8a1010,#d04020)' },
  { name: 'GreenPulse',      tag: 'SaaS UI',       g: 'linear-gradient(125deg,#181808,#4a5808,#a0c010)' },
  { name: 'Launchpad Co.',   tag: 'Startup',       g: 'linear-gradient(155deg,#081820,#083060,#2080c0)' },
  { name: 'Bloom Brand',     tag: 'Brand',         g: 'linear-gradient(165deg,#180810,#601030,#c02060)' },
]

function WallCard({ card }) {
  return (
    <div
      className="wall-card flex-shrink-0 w-[320px] h-[220px] rounded-[14px] overflow-hidden relative border border-white/[0.06] bg-[#111] cursor-none"
    >
      {/* Replace this div with <Image> once you have real screenshots */}
      <div className="absolute inset-0" style={{ background: card.g }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="font-mono text-[9px] tracking-[0.15em] text-accent/80 uppercase mb-1">{card.tag}</p>
        <p className="font-bebas text-xl tracking-[0.04em] text-white">{card.name}</p>
      </div>
    </div>
  )
}

/* Duplicate arrays for seamless infinite loop */
const r1 = [...row1, ...row1]
const r2 = [...row2, ...row2]

export default function WorkWall() {
  return (
    <section className="py-20 bg-[#080808] overflow-hidden">

      {/* Header */}
      <RevealWrapper>
        <div className="px-14 flex justify-between items-end mb-16">
          <h2 className="font-bebas leading-[0.95]" style={{ fontSize: 'clamp(36px,5vw,68px)' }}>
            Design<br />
            <em className="font-playfair italic text-accent not-italic">Playground</em>
          </h2>
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#5a5a5a]">
            Hover to pause · Scroll to explore
          </span>
        </div>
      </RevealWrapper>

      {/* Row 1 — left */}
      <div className="relative">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="wall-row-1 flex gap-5 w-max py-2 px-2">
          {r1.map((card, i) => <WallCard key={i} card={card} />)}
        </div>
      </div>

      {/* Row 2 — right */}
      <div className="relative mt-5">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="wall-row-2 flex gap-5 w-max py-2 px-2">
          {r2.map((card, i) => <WallCard key={i} card={card} />)}
        </div>
      </div>
    </section>
  )
}
