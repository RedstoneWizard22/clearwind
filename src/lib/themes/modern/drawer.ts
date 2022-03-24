import type { ComponentTheme } from '../theme-types';

export const drawerTheme: ComponentTheme<'Drawer'> = {
	variants: ['default'],
	sizes: ['md'],
	core: {
		backdrop: 'bg-gray-900 opacity-50',
		drawer: 'bg-white',
	},
};
