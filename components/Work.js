'use client'
import { useEffect, useRef } from 'react'
import RevealWrapper from './RevealWrapper'

/*
  TO USE REAL PROJECT IMAGES:
  - Add images to /public/projects/  (e.g. ember.jpg, vela.jpg, aero.jpg)
  - Import Image from 'next/image'
  - Replace the gradient <div> with:
      <Image src="/projects/ember.jpg" alt="Ember" fill className="object-cover" />
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

function ProjectCard({ project }) {
  return (
    <div
      className={`project-card relative overflow-hidden bg-[#111]
        ${project.span2 ? 'md:col-span-2 md:h-[58vh]' : 'md:h-[46vh]'}
        h-[56vw] min-h-[220px]`}
    >
      {/* Gradient background */}
      <div
        className="card-bg absolute inset-0"
        style={{ background: project.gradient }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
      </div>

      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Text info pinned to bottom */}
      <div className="card-info absolute bottom-0 left-0 right-0 p-6 md:p-9">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent mb-2">
          {project.tag}
        </p>
        <h3
          className="font-bebas tracking-[0.02em] text-white leading-none"
          style={{ fontSize: 'clamp(24px, 3.5vw, 50px)' }}
        >
          {project.name}
        </h3>
        <p className="card-meta font-mono text-[11px] text-white/45 mt-2 tracking-[0.08em]">
          {project.meta}
        </p>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="px-6 py-20 md:px-14 md:py-[140px] bg-black">

      {/* Section header */}
      <RevealWrapper>
        <div className="flex justify-between items-end mb-12 md:mb-20">
          <h2 className="font-bebas leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(48px,7vw,96px)' }}>
            Selected<br />
            <span
              className="text-accent"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontStyle: 'italic', fontWeight: 700 }}
            >
              Work
            </span>
          </h2>
          <a href="#" className="hidden md:block font-mono text-[11px] tracking-[0.15em] uppercase text-accent border-b border-accent pb-1 no-underline">
            All Projects →
          </a>
        </div>
      </RevealWrapper>

      {/* Cards — always visible, no reveal wrapper */}
      <div className="flex flex-col gap-1 md:grid md:grid-cols-2 md:gap-[3px]">
        {projects.map(p => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>

    </section>
  )
}