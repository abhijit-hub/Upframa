const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Behance',   href: '#' },
  { label: 'LinkedIn',  href: '#' },
  { label: 'Twitter',   href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06] px-14 pt-14 pb-9 grid grid-cols-[1fr_auto_1fr] items-end gap-10">
      <span className="font-bebas text-[34px] tracking-[0.15em] text-white">Upframa</span>

      <p className="text-center font-mono text-[10px] tracking-[0.15em] uppercase text-[#5a5a5a]">
        © 2024 Upframa · Built with Intention
      </p>

      <div className="flex justify-end gap-7">
        {socials.map(s => (
          <a
            key={s.label}
            href={s.href}
            className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#5a5a5a] no-underline hover:text-accent transition-colors duration-200"
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
