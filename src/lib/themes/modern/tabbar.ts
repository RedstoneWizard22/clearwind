import type { ComponentTheme } from '../theme-types';

export const tabBarTheme: ComponentTheme<'TabBar'> = {
	variants: ['default', 'outline', 'pill'],
	sizes: ['md'],
	core: (info) => {
		const root = 'var-primary';
		let spacer = 'border-gray-200';

		if (info.orientation === 'vertical') {
			switch (info.variant) {
				case 'default':
					spacer += ' border-r-2 ';
					break;
				case 'outline':
					spacer += ' border-r ';
					break;
			}
		} else {
			switch (info.variant) {
				case 'default':
					spacer += ' border-b-2 ';
					break;
				case 'outline':
					spacer += ' border-b ';
					break;
			}
		}

		return {
			root,
			spacer,
		};
	},
};

export const tabTheme: ComponentTheme<'Tab'> = {
	variants: ['default', 'outline', 'pill'],
	sizes: ['md'],
	core: (info) => {
		const leftIcon = 'mr-1';
		const rightIcon = 'ml-1';
		let root = 'p-2 px-4';

		if (info.orientation == 'vertical') {
			switch (info.variant) {
				case 'default':
					root +=
						' border-r-2 ' +
						(info.isActive ? 'border-var-500 text-var-500' : 'border-gray-200 text-gray-600');
					break;
				case 'outline':
					root +=
						' rounded-l border' +
						(info.isActive
							? ' border-gray-200 border-r-transparent bg-white'
							: ' border-transparent border-r-gray-200');
					break;
				case 'pill':
					root +=
						' rounded my-0.5 ' +
						(info.isActive ? 'bg-var-50 text-var-700' : 'hover:bg-var-50 text-var-500');
					break;
			}
		} else {
			switch (info.variant) {
				case 'default':
					root +=
						' border-b-2 ' +
						(info.isActive ? 'border-var-500 text-var-600' : 'border-gray-200 text-gray-600');
					break;
				case 'outline':
					root +=
						' rounded-t border' +
						(info.isActive
							? ' border-gray-200 border-b-transparent bg-white'
							: ' border-transparent border-b-gray-200');
					break;
				case 'pill':
					root +=
						' rounded mx-0.5 ' +
						(info.isActive ? 'bg-var-50 text-var-700' : 'hover:bg-var-50 text-var-500');
					break;
			}
		}

		return {
			leftIcon,
			rightIcon,
			root,
		};
	},
};
