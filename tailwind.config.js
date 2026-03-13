/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black:   '#0a0a0a',
        white:   '#f4f1ec',
        cream:   '#e8e3d9',
        accent:  '#c8432a',
        mid:     '#141414',
        lgray:   '#d0ccc4',
      },
      fontFamily: {
        bebas:     ['var(--font-bebas)'],
        playfair:  ['var(--font-playfair)'],
        mono:      ['var(--font-dmmono)'],
        sans:      ['var(--font-dmsans)'],
      },
    },
  },
  plugins: [],
}
