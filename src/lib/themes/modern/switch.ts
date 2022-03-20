import type { SwitchTheme } from '../theme-types';

export const switchTheme: SwitchTheme = {
	defaults: {
		size: 'md',
	},
	apply(info, classes): void {
		classes.base.override('var-primary');
		classes.checkbox.override(
			'inline-flex flex-shrink-0 appearance-none items-center rounded-full border border-gray-300 checked:border-var-500 bg-gray-200 p-0.5 duration-150 ease-in-out focus-visible:ring focus-visible:ring-var-300 after:rounded-full after:bg-white after:duration-150 after:border after:border-gray-300 after:checked:border-none checked:bg-var-500'
		);
		switch (info.size) {
			case 'sm':
				classes.checkbox.override('h-4 w-7 after:h-2.5 after:w-2.5  checked:after:translate-x-3');
				classes.label.override('text-xs ml-2');
				break;
			case 'md':
				classes.checkbox.override('h-4.5 w-9 after:h-3.5 after:w-3.5 checked:after:translate-x-4');
				classes.label.override('text-sm ml-2.5');
				break;
			case 'lg':
				classes.checkbox.override(
					'h-6 w-12 px-1 after:h-4 after:w-4 checked:after:translate-x-[1.425rem]'
				);
				classes.label.override('text-base ml-3');
				break;
		}
	},
};
