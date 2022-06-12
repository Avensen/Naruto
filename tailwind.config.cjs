const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#ff9432',
				prihover: '#fda151',
				secondary: '#ffdab9',
				sky: colors.sky,
				teal: colors.teal,
				cyan: colors.cyan,
				rose: colors.rose
			}
		}
	},

	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')]
};

module.exports = config;
