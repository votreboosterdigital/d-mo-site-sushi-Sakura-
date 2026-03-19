import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette japonaise moderne
        sakura: {
          red: '#e63946',
          'red-dark': '#c1121f',
          'red-hover': '#d62839',
        },
        gold: {
          DEFAULT: '#d4a017',
          hover: '#b8860b',
          light: '#f5d76e',
          50: '#fefbec',
        },
        surface: '#141414',
        'surface-light': '#1e1e1e',
        muted: '#6b7280',
        'muted-light': '#9ca3af',
      },
      fontFamily: {
        heading: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        red: '0 8px 32px rgba(230,57,70,0.25)',
        'red-lg': '0 16px 48px rgba(230,57,70,0.35)',
        gold: '0 8px 32px rgba(212,160,23,0.20)',
        card: '0 4px 24px rgba(0,0,0,0.40)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.60)',
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  plugins: [],
}

export default config
