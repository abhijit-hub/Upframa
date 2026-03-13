import RevealWrapper from './RevealWrapper'

const steps = [
  {
    num:  '01',
    name: 'Discover',
    desc: 'A focused kick-off call where we understand your business, goals, audience, and what success actually looks like for you.',
  },
  {
    num:  '02',
    name: 'Design',
    desc: "We design in Figma first. Full hi-fi mockups with real copy, real components — so you know exactly what you're getting before a line of code is written.",
  },
  {
    num:  '03',
    name: 'Build',
    desc: 'We code it clean — Next.js, Tailwind CSS, component-based architecture. Fast, accessible, and yours to own completely.',
  },
  {
    num:  '04',
    name: 'Launch',
    desc: "We deploy on Vercel, set up your domain, configure analytics, and hand everything over with full documentation. You're live.",
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-black px-6 py-20 md:px-14 md:py-[140px]">

      <RevealWrapper>
        <h2 className="font-bebas leading-[0.95] tracking-tight mb-12 md:mb-20" style={{ fontSize: 'clamp(48px,7vw,96px)' }}>
          How We<br />
          <span className="text-accent" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontStyle: 'italic', fontWeight: 700 }}>Work</span>
        </h2>
      </RevealWrapper>

      <div className="border-t border-white/[0.08]">
        {steps.map((s, i) => (
          <RevealWrapper key={s.num} delay={i * 0.1}>
            {/* Mobile: stacked; Desktop: 3-col grid */}
            <div className="process-step py-10 md:py-14 border-b border-white/[0.08]
              flex flex-col gap-3
              md:grid md:grid-cols-[80px_1fr_1fr] md:gap-12 md:items-start">
              <span className="font-mono text-[13px] text-accent">{s.num}</span>
              <h3 className="font-bebas text-[36px] md:text-[46px] tracking-[0.02em] leading-none">{s.name}</h3>
              <p className="text-[14px] leading-[1.85] text-white/45 font-light">{s.desc}</p>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}