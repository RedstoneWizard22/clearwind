import type { ComponentTheme } from '../theme-types';

export const tooltipTheme: ComponentTheme<'Tooltip'> = {
	variants: ['default'],
	sizes: ['md'],
	core: {
		root: 'bg-gray-800 px-3 py-1.5 text-sm rounded text-white',
		arrow: 'bg-inherit rotate-45',
	},
};
