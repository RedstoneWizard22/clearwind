import type { ComponentTheme } from '../theme-types';

export const buttonTheme: ComponentTheme<'Button'> = {
	variants: ['default', 'light', 'ghost', 'outline'],
	sizes: ['sm', 'md', 'lg'],
	core(info) {
		let base = '',
			leftIcon = '',
			rightIcon = '';

		base +=
			' var-primary font-semibold rounded focus-visible:ring transition-shadow duration-150 overflow-hidden';

		if (info.hasLeftIcon && info.hasContent) {
			leftIcon += ' mr-1.5';
		}
		if (info.hasRightIcon && info.hasContent) {
			rightIcon += ' ml-1.5';
		}

		switch (info.size) {
			case 'sm':
				base += ' text-xs ' + (info.isCompact ? ' py-0.5 px-2' : ' py-1.5 px-3');
				break;
			case 'md':
				base += ' text-sm ' + (info.isCompact ? ' py-0.5 px-2.5' : ' py-2 px-4');
				break;
			case 'lg':
				base += ' text-base ' + (info.isCompact ? ' py-1 px-3' : ' py-2.5 px-6');
				break;
		}

		if (info.isDisabled) {
			base += ' cursor-not-allowed bg-gray-200 text-gray-500 hover:bg-gray-200 border-none';
		} else {
			switch (info.variant) {
				case 'default':
					base += ' bg-var-500 text-white hover:bg-var-600 focus-visible:ring-var-300';
					break;
				case 'light':
					base +=
						' bg-var-100 text-var-600 hover:bg-var-200 focus:bg-var-200 focus-visible:ring-var-100';
					break;
				case 'outline':
					base +=
						' bg-transparent border text-var-600 hover:bg-var-100 border-var-400 focus-visible:ring-var-300';
					break;
				case 'ghost':
					base +=
						' bg-transparent border-none text-var-600 hover:bg-var-100 focus-visible:ring-var-300';
					break;
			}

			if (info.isLoading) {
				base += ' cursor-wait';
			}
		}

		return {
			base,
			leftIcon,
			rightIcon,
		};
	},
};
