/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A1628',
        electric: '#2563EB',
        gold: '#F59E0B',
        cloud: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 24px 70px rgba(10, 22, 40, 0.14)',
        glow: '0 24px 60px rgba(37, 99, 235, 0.24)',
      },
    },
  },
  plugins: [],
};
