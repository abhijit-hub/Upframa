const items = [
  'Brand Identity', 'Web Design', 'Next.js Development',
  'Landing Pages', 'Website Redesign', 'Figma to Code',
]

export default function Marquee() {
  /* duplicate for seamless loop */
  const all = [...items, ...items]

  return (
    <div className="bg-accent py-4 overflow-hidden whitespace-nowrap select-none">
      <div className="marquee-track inline-flex">
        {all.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-10 px-10 font-bebas text-xl tracking-[0.1em] text-black">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
          </span>
        ))}
      </div>
    </div>
  )
}
