# Upframa — Portfolio Website

Built with **Next.js 14 (App Router)** + **Tailwind CSS**.

---

## Project Structure

```
upframa/
├── app/
│   ├── layout.js        ← fonts, metadata, global CSS
│   ├── page.js          ← assembles all sections
│   └── globals.css      ← animations, custom classes
│
├── components/
│   ├── Cursor.js        ← custom cursor + lag ring
│   ├── Navbar.js        ← centered glass pill, sticky, 3D tilt
│   ├── Hero.js          ← hero section + founder photos
│   ├── Marquee.js       ← scrolling ticker
│   ├── About.js         ← who we are + value badges
│   ├── Work.js          ← featured projects grid
│   ├── WorkWall.js      ← dual-row infinite scroll showcase
│   ├── Services.js      ← 3 service cards
│   ├── Process.js       ← 4-step process
│   ├── CTA.js           ← contact section
│   ├── Footer.js        ← footer links
│   └── RevealWrapper.js ← scroll-triggered fade-up helper
│
├── public/              ← put images here
│   ├── founder-1.jpg    ← YOUR photo (replace this)
│   └── founder-2.jpg    ← YOUR photo (replace this)
│
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
# → Open http://localhost:3000
```

---

## Deploying to Vercel (free)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Next.js — click **Deploy**
4. Done. Your site is live.

To add a custom domain: Vercel Dashboard → Your Project → Settings → Domains.

---

## Customisation Guide

### Update founder photos
Drop your photos into `/public/` named `founder-1.jpg` and `founder-2.jpg`.  
Change the names in `components/Hero.js` (the two `<span>` tags near the bottom of the founders block).

### Update your name / email
- `app/layout.js` → update `metadata.title`, `metadata.description`, `metadata.openGraph`
- `components/CTA.js` → update `href="mailto:hello@upframa.com"`
- `components/Footer.js` → update social links

### Add real project screenshots
In `components/Work.js`:
1. Add images to `/public/projects/`
2. Import `Image` from `'next/image'`
3. Replace the gradient `<div>` inside each card with:
   ```jsx
   <Image src="/projects/yourfile.jpg" alt="Project name" fill className="object-cover" />
   ```

Same pattern for `WorkWall.js` → add images to `/public/wall/`.

### Change accent colour
In `tailwind.config.js`, change `accent: '#c8432a'` to any hex.  
Also update the same value in `app/globals.css` (search for `#c8432a`).

### Add/remove services
Edit the `services` array in `components/Services.js`.

### Add/remove work wall cards
Edit `row1` and `row2` arrays in `components/WorkWall.js`.

---

## Tech Stack
- **Next.js 14** — App Router
- **Tailwind CSS** — utility-first styling
- **next/font** — Google Fonts with zero layout shift
- **next/image** — optimised images
- **Vercel** — deployment
