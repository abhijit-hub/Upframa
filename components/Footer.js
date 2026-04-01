const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Behance',   href: '#' },
  { label: 'LinkedIn',  href: '#' },
  { label: 'Twitter',   href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06] px-6 pt-10 pb-8 md:px-14 md:pt-14 md:pb-9
      flex flex-col gap-6
      md:grid md:grid-cols-[1fr_auto_1fr] md:items-end md:gap-10">

      <span className="font-bebas text-[30px] md:text-[34px] tracking-[0.15em] text-white">Upframa</span>

      <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#5a5a5a] md:text-center">
        © 2026 Upframa · Built with Intention
      </p>

      <div className="flex gap-6 md:justify-end flex-wrap">
        {socials.map(s => (
          <a key={s.label} href={s.href}
            className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#5a5a5a] no-underline hover:text-accent transition-colors duration-200">
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  )
}