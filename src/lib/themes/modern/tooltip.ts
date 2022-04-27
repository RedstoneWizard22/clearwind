import type { ComponentTheme } from '$lib/_defines/types';

export const tooltipTheme: ComponentTheme<'Tooltip'> = {
	variants: [],
	defaultVariant: '',
	core: {
		root: 'bg-gray-800 px-3 py-1.5 text-sm rounded text-white',
		arrow: 'bg-inherit rotate-45',
	},
};
