/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Lato', 'sans-serif'],
			logo: ['Fraunces', 'serif'],
			greeting: ['B612 Mono', 'monospace'],
		},
	},
	plugins: [],
};
