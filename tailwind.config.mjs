/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'], 
			  },
			colors: {
				whitish: "#FAF8F8",
				blackish: "#0C0C0C"
			}
		},
	},
	plugins: [],
}