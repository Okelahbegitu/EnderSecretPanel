/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🌸 PRIMARY BRAND
        primary: {
          DEFAULT: '#e426d4',
          hover: '#c21fb4',
          soft: '#f472b6'
        },

        // 🌑 DARK MODE
        dark: {
          bg: '#0f172a',
          surface: '#1e293b',
          border: '#334155',
          text: '#f8fafc',
          muted: '#94a3b8'
        },

        // ☀️ LIGHT MODE
        light: {
          bg: '#ffffff',
          surface: '#f8fafc',
          border: '#e2e8f0',
          text: '#0f172a',
          muted: '#64748b'
        },

        // 🎯 ACCENT (buat tombol/action beda warna)
        accent: {
          DEFAULT: '#22c55e',
          hover: '#16a34a'
        }
      },
    },
  }
  ,
  plugins: [],
}
