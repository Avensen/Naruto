const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#ff9432',
				prihover: '#fda151',
				secondary: '#ffdab9'
			}
		}
	},

	plugins: [require('@tailwindcss/forms')]
};

module.exports = config;
