import type { ComponentTheme } from '../theme-types';

export const kbdTheme: ComponentTheme<'Kbd'> = {
	variants: ['default'],
	sizes: ['md'],
	core: {
		base: 'bg-gray-100 border border-b-[3px] rounded p-0 px-1 font-medium border-gray-300 text-gray-600',
	},
};
