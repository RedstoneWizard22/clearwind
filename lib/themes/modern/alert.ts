import type { ComponentTheme } from '$lib/_defines/types';

export const alertTheme: ComponentTheme<'Alert'> = {
	variants: ['light', 'dark', 'outline', 'accent'],
	defaultVariant: 'accent',
	core: (info, variants) => {
		let root = 'text-sm relative rounded flex p-4 py-3';
		let icondiv = 'translate-y-0.5 pr-4 text-lg';
		let title = 'font-semibold';
		let body = info.hasTitle ? '' : 'pt-0.5';
		let closebutton = 'absolute rounded top-3.5 right-3.5 text-sm active:translate-y-[1px]';

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

		if (variants.has('dark')) {
			root += ' bg-var-500 text-white';
		} else if (variants.has('light') || variants.has('accent')) {
			root += ' bg-var-50';
			icondiv += ' text-var-500';
			title += ' text-var-800';
			body += ' text-var-700';
			closebutton += ' text-var-700 bg-inherit';
			if (variants.has('accent')) {
				root +=
					' overflow-clip bg-var-50 rounded-l-sm after:absolute after:h-full after:w-1 after:left-0 after:top-0 after:bg-var-400';
			}
		}

		return { root, icondiv, title, body, closebutton };
	},
};
