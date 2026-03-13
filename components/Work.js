import RevealWrapper from './RevealWrapper'

/*
  TO ADD REAL PROJECT IMAGES:
  - Add image files to /public/projects/
  - Replace the `gradient` strings below with:
      image: '/projects/ember.jpg'
  - In the JSX, swap the gradient div for:
      <Image src={project.image} alt={project.name} fill className="object-cover" />
*/

const projects = [
  {
    tag:      'Brand Identity · 2024',
    name:     'Ember — Food Brand',
    meta:     'Strategy · Identity · Packaging · Web',
    gradient: 'linear-gradient(135deg,#1a0808 0%,#3d0f0f 35%,#c8432a 68%,#e8a020 100%)',
    span2:    true,
  },
  {
    tag:      'Web Design · 2024',
    name:     'Vela — FinTech Platform',
    meta:     'UI/UX · Next.js · Motion',
    gradient: 'linear-gradient(160deg,#080818 0%,#141440 40%,#2828a0 75%,#4040d0 100%)',
  },
  {
    tag:      'Landing Page · 2024',
    name:     'Aero — Startup MVP',
    meta:     'Design · Next.js · Vercel Deploy',
    gradient: 'linear-gradient(200deg,#081808 0%,#1a461a 40%,#2a7a2a 65%,#40a040 100%)',
  },
]

export default function Work() {
  return (
    <section id="work" className="px-14 py-[140px] bg-black">

      <RevealWrapper>
        <div className="flex justify-between items-end mb-20">
          <h2 className="font-bebas leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(48px,7vw,96px)' }}>
            Selected<br />
            <em className="font-playfair italic text-accent not-italic">Work</em>
          </h2>
          <a href="#" className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent border-b border-accent pb-1 no-underline">
            All Projects →
          </a>
        </div>
      </RevealWrapper>

      <div className="grid grid-cols-2 gap-[3px]">
        {projects.map((p, i) => (
          <RevealWrapper key={p.name} delay={i * 0.1}>
            <div
              className={`project-card relative overflow-hidden bg-[#111] cursor-none
                ${p.span2 ? 'col-span-2 h-[58vh]' : 'h-[46vh]'}`}
            >
              {/* Background */}
              <div
                className="card-bg absolute inset-0"
                style={{ background: p.gradient }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-transparent to-transparent" />

              {/* Info */}
              <div className="card-info absolute bottom-0 left-0 right-0 p-9">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent mb-2.5">{p.tag}</p>
                <h3 className="font-bebas tracking-[0.02em] text-white leading-none"
                  style={{ fontSize: 'clamp(28px,3.5vw,50px)' }}>
                  {p.name}
                </h3>
                <p className="card-meta font-mono text-[11px] text-white/45 mt-2.5 tracking-[0.08em]">{p.meta}</p>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
