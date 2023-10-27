import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-timer': ' linear-gradient(315deg, #2E325A 0%, #0E112A 100%)',
      },
      colors: {
        'dark': '#161932'
      }
    },
  },
  plugins: [],
}
export default config
