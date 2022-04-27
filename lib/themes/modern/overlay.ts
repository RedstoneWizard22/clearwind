import type { ComponentTheme } from '$lib/_defines/types';

export const overalyTheme: ComponentTheme<'Overlay'> = {
	variants: ['default', 'dark'],
	defaultVariant: 'default',
	core(info) {
		return {
			base: info.variant == 'dark' ? 'bg-black' : 'bg-white',
		};
	},
};
