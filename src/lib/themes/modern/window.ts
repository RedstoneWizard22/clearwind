import type { ComponentTheme } from '../theme-types';

export const windowTheme: ComponentTheme<'Window'> = {
	variants: ['default'],
	sizes: ['md'],
	core: () => {
		const button = 'h-3 w-3 rounded-full';
		const tabbase = 'h-full px-4';

		return {
			root: 'bg-white rounded-xl overflow-hidden shadow-lg',
			head: 'bg-gray-100/60 h-10',
			buttoncontainer: 'ml-3 mr-5 space-x-1.5',
			close: button + ' bg-red-500',
			minimise: button + ' bg-amber-400',
			maximise: button + ' bg-green-500',
			tabcontainer: 'mt-1 rounded-t-md overflow-clip',
			tab: tabbase,
			activetab: tabbase + ' bg-white rounded-t-md',
			tabicon: 'mr-1.5 -ml-1',
			tabtitle: 'text-sm',
			placeholder: 'h-32',
		};
	},
};
