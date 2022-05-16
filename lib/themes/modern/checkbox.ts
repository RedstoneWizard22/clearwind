import type { ComponentTheme } from '$lib/_defines/types';

export const checkboxTheme: ComponentTheme<'Checkbox'> = {
	modifiers: [
		{
			name: 'size',
			options: ['xs', 'sm', 'md', 'lg'],
			default: 'sm',
		},
	],
	core: (info, { size }) => {
		let root = '$color-primary flex items-center';
		let input =
			'shadow-sm appearance-none border rounded-[0.1875rem] transition-colors duration-50 border-gray-300 ring-$color-200 focus:outline-none focus-visible:ring focus:border-$color-500';
		let icon = 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
		let checkboxdiv = '';
		let label = 'leading-none';

		if (info.isDisabled) {
			input += ' bg-gray-100 cursor-not-allowed';
			icon += ' text-gray-300';
			root += ' cursor-not-allowed';
			label += ' text-gray-400';
		} else {
			icon += ' text-white';
			root += ' cursor-pointer';
			input += ' cursor-pointer';
			if (info.isIndeterminate || info.isChecked) {
				input += ' bg-$color-500 border-$color-500';
			} else {
				input += ' bg-white';
			}
		}

		switch (size) {
			case 'xs':
				input += ' h-4 w-4';
				checkboxdiv += ' h-4 w-4';
				root += ' text-xs';
				label += ' pl-2';
				break;
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
				input += ' h-6 w-6';
				checkboxdiv += ' h-6 w-6';
				root += ' text-lg';
				label += ' pl-3';
				break;
		}

		return { root, input, icon, checkboxdiv, label };
	},
};
