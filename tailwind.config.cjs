const variables = require('@mariohamann/tailwindcss-var');
const colors = require('tailwindcss/colors');

const config = {
	content: ['./{lib,site}/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#378EFB',
					50: '#EBF4FF',
					100: '#D7E8FE',
					200: '#AFD2FD',
					300: '#87BBFD',
					400: '#5FA5FC',
					500: '#378EFB',
					600: '#056FF5',
					700: '#0456BE',
					800: '#033D87',
					900: '#022450',
				},
				$color: {
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
			spacing: {
				$spacing: 'var(--tw-var-spacing)',
			},
		},
	},

	plugins: [variables],
};

module.exports = config;
