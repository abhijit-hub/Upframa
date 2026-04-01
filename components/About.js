import RevealWrapper from './RevealWrapper'

const badges = [
  { icon: '⚡', title: 'Fast Delivery',           sub: 'Landing pages live in under a week' },
  { icon: '🎯', title: 'Conversion-First Design', sub: 'Every layout built to perform, not just look good' },
  { icon: '🛠',  title: 'Real Code, No Builders',  sub: 'Next.js + Tailwind CSS — yours to own completely' },
  { icon: '🤝', title: 'Direct Founder Access',   sub: 'You work with us, not a junior team' },
]

export default function About() {
  return (
    <section className="bg-[#f4f1ec] text-black px-6 py-20 md:px-14 md:py-[120px]">

      {/* Top label */}
      <RevealWrapper>
        <span className="font-mono text-[10px] tracking-[0.22em] text-accent uppercase mb-12 block">
          03 — Who We Are
        </span>
      </RevealWrapper>

      {/* Two column layout — headline left, text + badges right */}
      <div className="flex flex-col gap-16 md:grid md:grid-cols-2 md:gap-24">

        {/* Left — big headline */}
        <RevealWrapper>
          <h2
            className="font-bebas leading-[0.9] tracking-tight text-black"
            style={{ fontSize: 'clamp(52px, 7vw, 100px)' }}
          >
            <span className="block">We Design.</span>
            <span className="block">We Build.</span>
            <span
              className="block text-accent"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: 'clamp(58px, 7.8vw, 112px)',
                lineHeight: 0.88,
                marginTop: '-0.04em',
              }}
            >We Ship.</span>
          </h2>

          {/* Accent rule */}
          <div className="mt-10 flex items-center gap-4">
            <div className="w-10 h-[2px] bg-accent" />
            <span className="font-mono text-[10px] tracking-[0.18em] text-accent/70 uppercase">Est. 2026 · Mumbai</span>
          </div>
        </RevealWrapper>

        {/* Right — description + badges */}
        <div className="flex flex-col justify-center gap-10">
          <RevealWrapper delay={0.1}>
            <p className="text-[15px] md:text-[16px] leading-[1.9] text-[#3a3a3a] font-light">
              We're a young studio that believes great design is only half the job.
              The other half is building it right — fast, responsive, and ready to
              scale from day one. Every project is a clean slate.
              <span className="text-black font-normal"> We don't template. We think.</span>
            </p>
          </RevealWrapper>

          {/* Value badges */}
          <div className="grid grid-cols-1 gap-3">
            {badges.map((b, i) => (
              <RevealWrapper key={b.title} delay={0.15 + i * 0.08}>
                <div className="badge flex items-center gap-4 px-5 py-4 border border-black/10 rounded-xl bg-white/60 hover:bg-white transition-colors duration-300">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-accent/10 rounded-lg text-base">
                    {b.icon}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.14em] text-black uppercase mb-0.5">{b.title}</p>
                    <p className="text-[12px] text-[#6a6a6a] font-light">{b.sub}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}