import type { ComponentTheme } from '../theme-types';
/// INCOMPLETE!!!
// TODO: FINISH
export const alertTheme: ComponentTheme<'Alert'> = {
	variants: ['default'],
	sizes: ['md'],
	core: (info) => {
		let root = 'relative bg-var-50 rounded flex p-4 py-3';

		switch (info.type) {
			case 'info':
				root += ' var-blue';
				break;
			case 'success':
				root += ' var-green';
				break;
			case 'warning':
				root += ' var-amber';
				break;
			case 'error':
				root += ' var-red';
				break;
		}

		return {
			root,
			icondiv: 'translate-y-0.5 pr-4 text-xl text-var-500',
			title: 'font-semibold text-var-800',
			body: 'text-var-700',
			closebutton: 'absolute top-0 right-0 m-3 text-sm text-var-700 active:translate-y-[1px]',
		};
	},
};
