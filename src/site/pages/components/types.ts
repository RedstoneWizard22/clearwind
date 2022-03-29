import type { SvelteComponentDev } from 'svelte/internal';

export type Category = 'layout';

export type PageModule = {
	default: {
		Overview: SvelteComponentDev;
		Details: SvelteComponentDev;
		Style: SvelteComponentDev;
	};
};

export type ComponentInfo = {
	name: string;
	category: Category;
	description: string;
	componentSource: string;
	pageSource: string;
	loadPage: () => Promise<PageModule>;
};
