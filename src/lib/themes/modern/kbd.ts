import type { ComponentTheme } from '../theme-types';

export const kbdTheme: ComponentTheme<'Kbd'> = {
	variants: ['default'],
	sizes: ['md'],
	core: {
		base: 'bg-gray-50 border border-b-[3px] rounded p-0.5 px-1.5 shadow-sm font-medium border-gray-300',
	},
};
