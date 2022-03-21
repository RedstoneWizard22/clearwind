import type { ComponentTheme } from '../theme-types';

export const overalyTheme: ComponentTheme<'Overlay'> = {
	variants: ['default', 'dark'],
	sizes: ['md'],
	core(info) {
		return {
			base: info.variant == 'dark' ? 'bg-black' : 'bg-white',
		};
	},
};
