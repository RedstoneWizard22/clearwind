import type { ComponentTheme } from '../theme-types';

export const kbdTheme: ComponentTheme<'Kbd'> = {
	variants: ['default'],
	sizes: ['md'],
	core: {
		base: 'bg-gray-100 border rounded p-0.5 px-1.5 font-medium border-gray-300 text-gray-600',
	},
};
