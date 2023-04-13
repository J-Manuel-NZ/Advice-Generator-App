/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			manrope: ['Manrope', 'sans-serif'],
		},
		colors: {
			darkBlue: '#202733',
			darkGrayishBlue: '#313A48',
			grayishBlue: '#4F5D74',
			lightCyan: '#CEE3E9',
			neonGreen: '#53FFAA'
		},
		boxShadow: {
			center: '0 0 0 10px',
		},
	},
	plugins: [],
}
