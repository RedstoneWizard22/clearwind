const variables = require('@mariohamann/tailwindcss-var');
const colors = require('tailwindcss/colors');

const config = {
	content: ['./{lib,site}/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: colors.blue,
				var: {
					50: 'var(--tw-var-color-50)',
					100: 'var(--tw-var-color-100)',
					200: 'var(--tw-var-color-200)',
					300: 'var(--tw-var-color-300)',
					400: 'var(--tw-var-color-400)',
					500: 'var(--tw-var-color-500)',
					600: 'var(--tw-var-color-600)',
					700: 'var(--tw-var-color-700)',
					800: 'var(--tw-var-color-800)',
					900: 'var(--tw-var-color-900)',
				},
			},
		},
	},

	plugins: [variables],
};

module.exports = config;
