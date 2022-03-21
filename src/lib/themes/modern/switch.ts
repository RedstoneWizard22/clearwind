import type { ComponentTheme } from '../theme-types';

export const switchTheme: ComponentTheme<'Switch'> = {
	variants: ['default'],
	sizes: ['sm', 'md', 'lg'],
	core(info) {
		let base = '',
			checkbox = '',
			label = '';

		base += ' var-primary';
		checkbox +=
			' inline-flex flex-shrink-0 appearance-none items-center rounded-full border border-gray-300 checked:border-var-500 bg-gray-200 p-0.5 duration-150 ease-in-out focus-visible:ring ring-var-300 checked:bg-var-500';
		checkbox +=
			' after:rounded-full after:bg-white after:duration-150 after:border after:border-gray-300 after:checked:border-none';

		switch (info.size) {
			case 'sm':
				checkbox += ' h-4 w-7 after:h-2.5 after:w-2.5  checked:after:translate-x-3';
				label += ' text-xs ml-2';
				break;
			case 'md':
				checkbox += ' h-4.5 w-9 after:h-3.5 after:w-3.5 checked:after:translate-x-4';
				label += ' text-sm ml-2.5';
				break;
			case 'lg':
				checkbox += ' h-6 w-12 px-1 after:h-4 after:w-4 checked:after:translate-x-[1.425rem]';
				label += ' text-base ml-3';
				break;
		}

		return { checkbox, label, base };
	},
};
