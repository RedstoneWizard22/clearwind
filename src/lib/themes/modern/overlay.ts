import type { OverlayTheme } from '../theme-types';

export const overalyTheme: OverlayTheme = {
	defaults: {
		variant: 'light',
	},
	apply: (info, classes) => {
		switch (info.variant) {
			case 'dark':
				classes.base.override('bg-black');
				break;
			case 'light':
				classes.base.override('bg-white');
				break;
		}
	},
};
