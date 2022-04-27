import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		adapter: adapter(),
		files: {
			routes: 'site/routes',
			assets: 'site/assets',
			template: 'site/app.html',
			lib: 'lib',
		},
		vite: {
			server: {
				fs: {
					// Need to allow './site' so that './site/app.css' can be accessed
					allow: ['site', 'lib'],
				},
			},
		},
	},
};

export default config;
