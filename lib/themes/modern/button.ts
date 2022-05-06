import type { ComponentTheme } from '$lib/_defines/types';

export const buttonTheme: ComponentTheme<'Button'> = {
	variants: ['default', 'light', 'ghost', 'outline', 'sm', 'md', 'lg'],
	defaultVariant: 'default md',
	core(info) {
		let base = '',
			leftIcon = '',
			rightIcon = '';

		base +=
			' $color-primary font-semibold rounded focus-visible:ring transition-shadow duration-150 overflow-hidden';

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
					base += ' bg-$color-500 text-white hover:bg-$color-600 focus-visible:ring-$color-300';
					break;
				case 'light':
					base +=
						' bg-$color-100 text-$color-600 hover:bg-$color-200 focus:bg-$color-200 focus-visible:ring-$color-100';
					break;
				case 'outline':
					base +=
						' bg-transparent border text-$color-600 hover:bg-$color-100 border-$color-400 focus-visible:ring-$color-300';
					break;
				case 'ghost':
					base +=
						' bg-transparent border-none text-$color-600 hover:bg-$color-100 focus-visible:ring-$color-300';
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
