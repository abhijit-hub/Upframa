import { Bebas_Neue, Playfair_Display, DM_Mono, DM_Sans } from 'next/font/google'
import './globals.css'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
})

const dmMono = DM_Mono({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-dmmono',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dmsans',
})

export const metadata = {
  title: 'Upframa — Design Studio',
  description:
    'Upframa is a design studio building brands, landing pages, and full-stack digital experiences — from Figma to live, production-ready code.',
  openGraph: {
    title: 'Upframa — Design Studio',
    description: 'From Figma to live Next.js. Fast, conversion-first, real code.',
    url: 'https://upframa.com',
    siteName: 'Upframa',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${playfair.variable} ${dmMono.variable} ${dmSans.variable}`}
    >
      <body className="bg-black text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
