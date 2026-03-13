import RevealWrapper from './RevealWrapper'

const services = [
  {
    num:  '01',
    name: 'Design + Development',
    desc: 'Full-stack solution — from Figma to a live, production-ready Next.js website.',
    points: [
      'Full UI/UX design in Figma',
      'Responsive Next.js + Tailwind CSS',
      'Animations & micro-interactions',
      'SEO, Open Graph, Analytics setup',
      'Vercel deployment + custom domain',
      '2 rounds of revision included',
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 opacity-55">
        <rect x="4" y="4" width="32" height="32" rx="4" stroke="#0a0a0a" strokeWidth="1.5" />
        <path d="M12 20 L18 26 L28 14" stroke="#c8432a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num:  '02',
    name: 'Landing Page',
    desc: 'High-converting single-page site — live in under a week.',
    points: [
      'Single-page design (hero, features, CTA, footer)',
      'Mobile-first responsive design',
      'Conversion-focused layout & copy structure',
      'Contact form or waitlist integration',
      'Core Web Vitals optimised',
      '7-day post-launch support',
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 opacity-55">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="#0a0a0a" strokeWidth="1.5" />
        <path d="M4 14 L36 14" stroke="#c8432a" strokeWidth="1.5" />
        <circle cx="9" cy="11" r="1.5" fill="#0a0a0a" />
        <circle cx="14" cy="11" r="1.5" fill="#0a0a0a" />
      </svg>
    ),
  },
  {
    num:  '03',
    name: 'Website Redesign',
    desc: 'Modernise your existing site with real code — no page builders.',
    points: [
      'Audit of existing site (UX, performance, SEO)',
      'Full Next.js rebuild — no Wix/WordPress',
      'Content migration from old site',
      'Improved Core Web Vitals score',
      'SEO preservation (301 redirects, metadata)',
      '14-day post-launch support',
    ],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 opacity-55">
        <circle cx="20" cy="20" r="14" stroke="#0a0a0a" strokeWidth="1.5" />
        <path d="M20 6 L20 34 M6 20 L34 20" stroke="#c8432a" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="5" fill="none" stroke="#0a0a0a" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#e8e3d9] text-black px-6 py-20 md:px-14 md:py-[140px]">

      <RevealWrapper>
        <h2
          className="font-bebas tracking-tight text-black mb-16 md:mb-20"
          style={{ fontSize: 'clamp(48px,7vw,96px)', lineHeight: 0.95 }}
        >
          <span className="block">What We</span>
          <span
            className="block text-accent"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontStyle: 'italic', fontWeight: 700, lineHeight: 0.95 }}
          >
            Do
          </span>
        </h2>
      </RevealWrapper>

      {/* Cards — stack on mobile, 3-col on desktop */}
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-[2px] md:bg-[#d0ccc4]">
        {services.map((s, i) => (
          <RevealWrapper key={s.num} delay={i * 0.1}>
            <div className="service-card relative bg-[#e8e3d9] px-8 py-12 md:px-11 md:py-14 overflow-hidden hover:bg-white h-full">

              {/* Ghost number — contained, won't overflow */}
              <span
                aria-hidden
                className="absolute top-4 right-4 font-bebas text-[80px] md:text-[90px] text-black/[0.06] leading-none pointer-events-none select-none"
              >
                {s.num}
              </span>

              {s.icon}

              <h3 className="font-bebas text-[26px] md:text-[30px] tracking-[0.04em] text-black mt-6 mb-3">{s.name}</h3>
              <p className="text-[13px] md:text-[14px] leading-[1.8] text-[#5a5a5a] font-light">{s.desc}</p>

              <ul className="mt-5 flex flex-col gap-2 list-none">
                {s.points.map(pt => (
                  <li key={pt} className="relative pl-5 font-mono text-[11px] tracking-[0.08em] text-[#5a5a5a]">
                    <span className="absolute left-0 text-accent">→</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}