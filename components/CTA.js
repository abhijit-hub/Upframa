import RevealWrapper from './RevealWrapper'

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative min-h-[80vh] md:min-h-[88vh] bg-[#f4f1ec] text-black flex items-center justify-center text-center px-6 py-20 md:px-20 md:py-[120px] overflow-hidden"
    >
      <div aria-hidden className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,67,42,0.10) 0%, transparent 70%)' }} />

      <div className="relative z-10">
        <RevealWrapper>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent mb-8">— Let's Build Something</p>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <h2 className="font-bebas tracking-tight text-black" style={{ fontSize: 'clamp(60px,12vw,152px)', lineHeight: 0.9 }}>
            <span className="block">Start Your</span>
            <span className="block text-accent" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontStyle: 'italic', fontWeight: 700, lineHeight: 0.9 }}>
              Project
            </span>
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <p className="text-[14px] md:text-[16px] leading-[1.7] text-[#5a5a5a] max-w-[460px] mx-auto my-8 font-light">
            We're accepting new projects. If you have an idea, a deadline,
            or just a problem that needs solving — let's talk.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@upframa.com"
              className="cta-btn bg-black text-white font-mono text-xs tracking-[0.2em] uppercase no-underline px-10 md:px-14 py-4 md:py-5 inline-block"
            >
              <span>Get In Touch</span>
            </a>
            <a
              href="https://cal.com/up-frama-7bxgox/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.2em] uppercase no-underline px-10 md:px-14 py-4 md:py-5 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                <rect x="1" y="2" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M1 5h10" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M4 1v2M8 1v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              Schedule a Call
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}