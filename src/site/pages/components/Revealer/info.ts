import type { ComponentInfo, PageModule } from '../types';

export const revealerInfo: ComponentInfo = {
	name: 'Revealer',
	category: 'layout',
	description: 'Shows/hides its children with a sliding animation',
	componentSource: 'src/lib/components/Revealer',
	pageSource: 'src/site/pages/components/Revealer',
	loadPage: async () => import('./page') as unknown as PageModule,
};
