/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
				archivoBlack: ['Archivo Black', 'sans-serif'], 
        brigshotOne: ['Brigshot One'],
			  },
      colors: {
        "verde": "#007A33",
        "blanco": "#F4EFEF",
        "negro": "#171717",
        "quaternary": "#4D4D4D",
        "quinary": "#5E5E5E",        
      }
    },
  },
  plugins: [],
}