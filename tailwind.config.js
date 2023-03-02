/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
    theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primario': '#ff66c4',
      'secundario': '#595959',
      'terciario': '#e8afda',
      'gray-100': '#f3f4f6',
      'blanco': '#FFFFFF',
      'zinc-300': '#d4d4d8',
      'zinc-400': '#a1a1aa',
      'negro': "#212529"
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },

    extend: {},
  },
  plugins: [],
}