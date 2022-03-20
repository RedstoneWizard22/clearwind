import type { ButtonTheme } from '../theme-types';

export const buttonTheme: ButtonTheme = {
	defaults: {
		variant: 'dark',
		size: 'md',
	},
	apply(info, classes): void {
		classes.base.override(
			'var-primary font-semibold rounded focus-visible:ring transition-shadow duration-150 overflow-hidden'
		);
		if (info.hasLeftIcon) {
			classes.leftIcon.override(info.hasContent && 'mr-1.5');
		}
		if (info.hasRightIcon) {
			classes.rightIcon.override(info.hasContent && 'ml-1.5');
		}
		switch (info.variant) {
			case 'dark':
				classes.base.override('bg-var-500 text-white hover:bg-var-600 focus-visible:ring-var-300');
				break;
			case 'light':
				classes.base.override(
					'bg-var-100 text-var-600 hover:bg-var-200 focus:bg-var-200 focus-visible:ring-var-100'
				);
				break;
			case 'outline':
				classes.base.override(
					'bg-transparent border text-var-600 hover:bg-var-100 border-var-400 focus-visible:ring-var-300'
				);
				break;
			case 'ghost':
				classes.base.override(
					'bg-transparent border-none text-var-600 hover:bg-var-100 focus-visible:ring-var-300'
				);
				break;
		}
		switch (info.size) {
			case 'sm':
				classes.base.override('text-xs ' + (info.isCompact ? ' py-0.5 px-2' : 'py-1.5 px-3'));
				break;
			case 'md':
				classes.base.override('text-sm ' + (info.isCompact ? 'py-0.5 px-2.5' : 'py-2 px-4'));
				break;
			case 'lg':
				classes.base.override('text-base ' + (info.isCompact ? 'py-1 px-3' : 'py-2.5 px-6'));
				break;
		}
		if (info.isDisabled) {
			classes.base.override(
				'cursor-not-allowed bg-gray-200 text-gray-500 hover:bg-gray-200 border-none'
			);
		}
	},
};
