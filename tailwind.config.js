/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        serif: ['var(--font-title)'],
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(.2,.9,.2,1)',
      },
      spacing: {
        'section-gap': 'clamp(3.75rem, 1.875rem + 8.33vw, 6.25rem)', // 60px-100px
        'hero-padding': 'clamp(7.5rem, 3.75rem + 16.67vw, 10rem)', // 120px-160px
      }
    },
  },
  plugins: [],
};