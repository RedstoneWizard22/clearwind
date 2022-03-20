import type { KbdTheme } from '../theme-types';

export const kbdTheme: KbdTheme = {
	defaults: {},
	apply: (info, classes) => {
		classes.base.override(
			'bg-gray-50 border border-b-[3px] rounded p-0.5 px-1.5 shadow-sm font-medium border-gray-300'
		);
	},
};
