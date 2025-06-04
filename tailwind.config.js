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
        "blanco": "#FFFEFC",
        "negro": "#171717",       
      }
    },
  },
  plugins: [],
}