'use client'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

/*
  ── HOW TO ADD YOUR DESIGN WORK ────────────────────────────────
  1. Create folder: /public/playground/
  2. Add your images (any names, any sizes — they auto-fit)
  3. Update ALL_IMAGES array with your actual paths
  4. Set USE_REAL_IMAGES = true
  ────────────────────────────────────────────────────────────────
*/
const USE_REAL_IMAGES = true

const ALL_IMAGES = [
  '/playground/p1.png',  '/playground/p2.png',  '/playground/p3.png',
  '/playground/p4.png',  '/playground/p5.png',  '/playground/p6.png',
  '/playground/p7.png',  '/playground/p8.png',  '/playground/p9.png',
  '/playground/p10.png', '/playground/p11.png', '/playground/p12.png',
]

const GRADIENTS = [
  'linear-gradient(135deg,#1a0808,#c8432a,#e8a020)',
  'linear-gradient(160deg,#080820,#1a1a80,#4040d0)',
  'linear-gradient(200deg,#0a1a0a,#2a7a2a,#80c040)',
  'linear-gradient(120deg,#1a0a1a,#5a1a6a,#c040e0)',
  'linear-gradient(150deg,#0a1020,#1a3060,#40a0c0)',
  'linear-gradient(140deg,#1a1008,#6a4010,#c09030)',
  'linear-gradient(170deg,#100a18,#3a1060,#8040c0)',
  'linear-gradient(130deg,#0a1a14,#0a5a3a,#20c080)',
  'linear-gradient(145deg,#1a0808,#8a1010,#d04020)',
]

// 9 cells matching the bento layout
// curImg is the current gradient/image index for each cell
const TOTAL = USE_REAL_IMAGES ? ALL_IMAGES.length : GRADIENTS.length

function Cell({ gradIndex, fading }) {
  return (
    <div className="absolute inset-0 transition-opacity duration-500 ease-in-out" style={{ opacity: fading ? 0 : 1 }}>
      {USE_REAL_IMAGES ? (
        <Image src={ALL_IMAGES[gradIndex % ALL_IMAGES.length]} alt="" fill className="object-cover" />
      ) : (
        <div className="absolute inset-0" style={{ background: GRADIENTS[gradIndex % GRADIENTS.length] }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_25%,rgba(255,255,255,0.09),transparent_55%)]" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  )
}

/*
  Bento layout — 9 cells:
  ┌──────┬────────────┬───────────────────┬──────┐
  │  [0] │            │                   │  [3] │
  │      │    [1]     │        [2]        │      │
  ├──────┤  tall×2   │     large×2      ├──────┤
  │  [4] │            │                   │      │
  ├──────┼────────────┼───────────────────┤  [8] │
  │      │    [6]     │       [7]         │ tall │
  │  [5] │            │                   │      │
  └──────┴────────────┴───────────────────┴──────┘
*/

export default function DesignPlayground() {
  // Each cell tracks its current image index + whether it's fading
  const [cells, setCells] = useState(() =>
    Array.from({ length: 9 }, (_, i) => ({ cur: i % GRADIENTS.length, fading: false }))
  )

  // Every 2s pick exactly 2 random cells to change
  useEffect(() => {
    const timer = setInterval(() => {
      // pick 2 unique random cell indices
      const a = Math.floor(Math.random() * 9)
      let b = Math.floor(Math.random() * 9)
      while (b === a) b = Math.floor(Math.random() * 9)

      // fade them out
      setCells(prev => prev.map((c, i) =>
        i === a || i === b ? { ...c, fading: true } : c
      ))

      // swap image after fade
      setTimeout(() => {
        setCells(prev => prev.map((c, i) => {
          if (i === a || i === b) {
            let next = Math.floor(Math.random() * GRADIENTS.length)
            while (next === c.cur) next = Math.floor(Math.random() * GRADIENTS.length)
            return { cur: next, fading: false }
          }
          return c
        }))
      }, 500)
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  const c = cells // shorthand

  return (
    <section id="playground" className="bg-[#080808] px-6 py-20 md:px-14 md:py-28">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
        <div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase mb-3 block">
            02 — Design Wall
          </span>
          <h2 className="font-bebas leading-none" style={{ fontSize: 'clamp(42px,6vw,80px)' }}>
            <span className="block text-white">Design</span>
            <span className="block text-accent" style={{ fontStyle: 'italic' }}>Playground</span>
          </h2>
        </div>
        <p className="hidden md:block font-mono text-[10px] tracking-[0.14em] uppercase text-white/25 text-right leading-[2]">
          2 cells swap every 2s
        </p>
      </div>

      {/* ── DESKTOP BENTO — fluid height via aspect-ratio ── */}
      <div
        className="hidden md:grid gap-3"
        style={{
          gridTemplateColumns: '1fr 1.2fr 2fr 1fr',
          gridTemplateRows:    '1fr 1fr 1fr',
          height: 'clamp(500px, 55vw, 780px)',
        }}
      >
        {/* col1 row1 */}
        <div className="relative overflow-hidden rounded-[16px] border border-white/[0.07]" style={{ gridColumn: 1, gridRow: 1 }}>
          <Cell gradIndex={c[0].cur} fading={c[0].fading} />
        </div>
        {/* col1 row2 */}
        <div className="relative overflow-hidden rounded-[16px] border border-white/[0.07]" style={{ gridColumn: 1, gridRow: 2 }}>
          <Cell gradIndex={c[4].cur} fading={c[4].fading} />
        </div>
        {/* col1 row3 */}
        <div className="relative overflow-hidden rounded-[16px] border border-white/[0.07]" style={{ gridColumn: 1, gridRow: 3 }}>
          <Cell gradIndex={c[5].cur} fading={c[5].fading} />
        </div>

        {/* col2 rows 1-2 tall */}
        <div className="relative overflow-hidden rounded-[16px] border border-white/[0.07]" style={{ gridColumn: 2, gridRow: '1 / 3' }}>
          <Cell gradIndex={c[1].cur} fading={c[1].fading} />
        </div>
        {/* col2 row3 */}
        <div className="relative overflow-hidden rounded-[16px] border border-white/[0.07]" style={{ gridColumn: 2, gridRow: 3 }}>
          <Cell gradIndex={c[6].cur} fading={c[6].fading} />
        </div>

        {/* col3 rows 1-2 large */}
        <div className="relative overflow-hidden rounded-[16px] border border-white/[0.07]" style={{ gridColumn: 3, gridRow: '1 / 3' }}>
          <Cell gradIndex={c[2].cur} fading={c[2].fading} />
        </div>
        {/* col3 row3 */}
        <div className="relative overflow-hidden rounded-[16px] border border-white/[0.07]" style={{ gridColumn: 3, gridRow: 3 }}>
          <Cell gradIndex={c[7].cur} fading={c[7].fading} />
        </div>

        {/* col4 row1 */}
        <div className="relative overflow-hidden rounded-[16px] border border-white/[0.07]" style={{ gridColumn: 4, gridRow: 1 }}>
          <Cell gradIndex={c[3].cur} fading={c[3].fading} />
        </div>
        {/* col4 rows 2-3 tall */}
        <div className="relative overflow-hidden rounded-[16px] border border-white/[0.07]" style={{ gridColumn: 4, gridRow: '2 / 4' }}>
          <Cell gradIndex={c[8].cur} fading={c[8].fading} />
        </div>
      </div>

      {/* ── MOBILE — 2-col fluid grid ── */}
      <div
        className="md:hidden grid grid-cols-2 gap-3"
        style={{ gridTemplateRows: 'repeat(4, clamp(120px, 35vw, 180px))' }}
      >
        {/* row1 col1 */}
        <div className="relative overflow-hidden rounded-[14px] border border-white/[0.07]">
          <Cell gradIndex={c[0].cur} fading={c[0].fading} />
        </div>
        {/* row1 col2 */}
        <div className="relative overflow-hidden rounded-[14px] border border-white/[0.07]">
          <Cell gradIndex={c[1].cur} fading={c[1].fading} />
        </div>
        {/* row2 full width */}
        <div className="relative overflow-hidden rounded-[14px] border border-white/[0.07] col-span-2">
          <Cell gradIndex={c[2].cur} fading={c[2].fading} />
        </div>
        {/* row3 col1 */}
        <div className="relative overflow-hidden rounded-[14px] border border-white/[0.07]">
          <Cell gradIndex={c[3].cur} fading={c[3].fading} />
        </div>
        {/* row3 col2 */}
        <div className="relative overflow-hidden rounded-[14px] border border-white/[0.07]">
          <Cell gradIndex={c[4].cur} fading={c[4].fading} />
        </div>
        {/* row4 col1 */}
        <div className="relative overflow-hidden rounded-[14px] border border-white/[0.07]">
          <Cell gradIndex={c[5].cur} fading={c[5].fading} />
        </div>
        {/* row4 col2 */}
        <div className="relative overflow-hidden rounded-[14px] border border-white/[0.07]">
          <Cell gradIndex={c[6].cur} fading={c[6].fading} />
        </div>
      </div>

    </section>
  )
}