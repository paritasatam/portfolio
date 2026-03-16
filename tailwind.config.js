/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#030712',
        surface: '#0f172a',
        card: 'rgba(255,255,255,0.06)',
        borderGlow: 'rgba(255,255,255,0.12)'
      },
      boxShadow: {
        neon: '0 0 30px rgba(99, 102, 241, 0.25)',
        soft: '0 10px 40px rgba(0, 0, 0, 0.25)'
      },
      backgroundImage: {
        grid:
          'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};