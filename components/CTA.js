import RevealWrapper from './RevealWrapper'

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative min-h-[88vh] bg-[#f4f1ec] text-black flex items-center justify-center text-center px-20 py-[120px] overflow-hidden"
    >
      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,67,42,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative z-10">
        <RevealWrapper>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent mb-9">
            — Let's Build Something
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <h2 className="font-bebas leading-[0.9] tracking-tight text-black" style={{ fontSize: 'clamp(72px,12vw,152px)' }}>
            Start Your<br />
            <em className="font-playfair italic text-accent not-italic block">Project</em>
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <p className="text-[16px] leading-[1.7] text-[#5a5a5a] max-w-[460px] mx-auto my-9 font-light">
            We're accepting new projects. If you have an idea, a deadline,
            or just a problem that needs solving — let's talk.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.3}>
          <a
            href="mailto:hello@upframa.com"
            className="cta-btn bg-black text-white font-mono text-xs tracking-[0.2em] uppercase no-underline px-14 py-5"
          >
            <span>Get In Touch</span>
          </a>
        </RevealWrapper>
      </div>
    </section>
  )
}
