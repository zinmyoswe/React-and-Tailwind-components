/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      skin: {
        bg: 'white',
        'bg-dark': '#111827', // same as gray-900
        
      },
    },
    },
  },
  plugins: [],
}

