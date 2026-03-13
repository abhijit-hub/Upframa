import RevealWrapper from './RevealWrapper'

const badges = [
  { icon: '⚡', title: 'Fast Delivery',             sub: 'Landing pages live in under a week' },
  { icon: '🎯', title: 'Conversion-First Design',   sub: 'Every layout built to perform, not just look good' },
  { icon: '🛠',  title: 'Real Code, No Builders',    sub: 'Next.js + Tailwind CSS — yours to own completely' },
  { icon: '🤝', title: 'Direct Founder Access',     sub: 'You work with us, not a junior team' },
]

export default function About() {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 min-h-screen">

      {/* Left — cream */}
      <div className="relative bg-white text-black px-8 py-20 md:px-20 md:py-[120px] flex flex-col justify-center overflow-hidden">
        <span aria-hidden className="absolute -bottom-16 -right-8 font-bebas text-[220px] text-black/[0.04] leading-none pointer-events-none select-none">UP</span>

        <RevealWrapper>
          <span className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase mb-10 block">01 — Who We Are</span>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <h2 className="font-playfair font-bold leading-[1.1] mb-8 text-black" style={{ fontSize: 'clamp(32px, 3.5vw, 54px)' }}>
            Design with<br />
            <span style={{ fontStyle: 'italic', color: '#c8432a' }}>purpose.</span><br />
            Code with<br />precision.
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <p className="text-[14px] md:text-[15px] leading-[1.9] text-[#3a3a3a] max-w-[440px] font-light">
            We're a young studio that believes great design is only half the job.
            The other half is building it right — fast, responsive, and ready to
            scale from day one.
            <br /><br />
            Every project is a clean slate. We don't template. We think.
          </p>
        </RevealWrapper>
      </div>

      {/* Right — black */}
      <div className="bg-black px-8 py-20 md:px-20 md:py-[120px] flex flex-col justify-center">

        <RevealWrapper>
          <p className="font-playfair italic text-[18px] md:text-[22px] leading-[1.55] text-white/45 max-w-[380px] mb-10">
            "A new studio doesn't mean inexperienced — it means unburdened by bad habits."
          </p>
        </RevealWrapper>

        <div className="flex flex-col gap-4">
          {badges.map((b, i) => (
            <RevealWrapper key={b.title} delay={i * 0.1}>
              <div className="badge flex items-center gap-4 p-4 border border-white/7 rounded-xl bg-white/[0.03]">
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-accent/15 rounded-lg text-lg">{b.icon}</div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[11px] tracking-[0.12em] text-white uppercase">{b.title}</span>
                  <span className="text-[12px] text-white/40 font-light">{b.sub}</span>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}