import type { ComponentTheme } from '$lib/_defines/types';

export const checkboxTheme: ComponentTheme<'Checkbox'> = {
	modifiers: [
		{
			name: 'size',
			options: ['sm', 'md', 'lg'],
			default: 'md',
		},
	],
	core: (info, { size }) => {
		let root = 'var-primary flex items-center';
		let input =
			'cursor-pointer appearance-none border shadow-sm rounded-sm transition-colors duration-150 border-gray-300 ring-var-200 focus:outline-none focus-visible:ring focus:border-var-500';
		let icon = 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
		let checkboxdiv = '';
		let label = 'cursor-pointer leading-none';

		if (info.isDisabled) {
			input += ' bg-gray-100 cursor-not-allowed';
			icon += ' text-gray-400';
			label += ' cursor-not-allowed';
		} else {
			input += ' bg-white checked:bg-var-500 checked:border-var-500';
			icon += ' text-white';
		}

		switch (size) {
			case 'sm':
				input += ' h-[1.125rem] w-[1.125rem]';
				checkboxdiv += ' h-[1.125rem] w-[1.125rem]';
				root += ' text-sm';
				label += ' pl-2';
				break;
			case 'md':
				input += ' h-5 w-5';
				checkboxdiv += ' h-5 w-5';
				root += ' text-base';
				label += ' pl-2.5';
				break;
			case 'lg':
				input += ' h-[1.375rem] w-[1.375rem]';
				checkboxdiv += ' h-[1.375rem] w-[1.375rem]';
				root += ' text-lg';
				label += ' pl-3';
				break;
		}

		return { root, input, icon, checkboxdiv, label };
	},
};
