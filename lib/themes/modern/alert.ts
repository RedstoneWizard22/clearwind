import type { ComponentTheme } from '$lib/_defines/types';

export const alertTheme: ComponentTheme<'Alert'> = {
	modifiers: [
		{
			name: 'variant',
			options: ['light', 'dark', 'accent'],
			default: 'accent',
		},
	],
	core: (info, { variant }) => {
		let root = 'text-sm relative rounded flex p-4 py-3';
		let icondiv = 'translate-y-0.5 pr-4 text-lg';
		let title = 'font-semibold';
		let body = info.hasTitle ? '' : 'pt-0.5';
		let closebutton = 'absolute rounded top-3.5 right-3.5 text-sm active:translate-y-[1px]';

		switch (info.type) {
			case 'info':
				root += ' $color-blue';
				break;
			case 'success':
				root += ' $color-green';
				break;
			case 'warning':
				root += ' $color-amber';
				break;
			case 'error':
				root += ' $color-red';
				break;
		}

		if (variant == 'dark') {
			root += ' bg-$color-500 text-white';
		} else if (variant == 'accent' || variant == 'light') {
			root += ' bg-$color-50';
			icondiv += ' text-$color-500';
			title += ' text-$color-800';
			body += ' text-$color-700';
			closebutton += ' text-$color-700 bg-inherit';
			if (variant == 'accent') {
				root +=
					' overflow-clip rounded-l-sm after:absolute after:h-full after:w-1 after:left-0 after:top-0 after:bg-$color-400';
			}
		}

		return { root, icondiv, title, body, closebutton };
	},
};
