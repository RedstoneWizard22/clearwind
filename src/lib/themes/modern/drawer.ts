import type { ComponentTheme } from '$lib/_defines/types';

export const drawerTheme: ComponentTheme<'Drawer'> = {
	variants: [],
	defaultVariant: '',
	core: {
		backdrop: 'bg-gray-900 opacity-50',
		drawer: 'bg-white',
	},
};
