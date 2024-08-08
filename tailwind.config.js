/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['light', 'dark', 'retro', 'aqua', 'wireframe', 'luxury', 'coffee']
	},
	plugins: [require('daisyui')]
};
