import type { ComponentTheme } from '$lib/_defines/types';

// TODO: GOOD GOD WHAT IS THIS

export const switchTheme: ComponentTheme<'Switch'> = {
	modifiers: [
		{
			name: 'size',
			options: ['xs', 'sm', 'md', 'lg'],
			default: 'sm',
		},
	],
	core: (info, { size }) => {
		let root = `flex items-center $color-primary transition-opacity ${
			info.isDisabled ? 'opacity-40' : ''
		}`;
		const input = 'absolute z-10 h-full w-full cursor-pointer appearance-none';
		const label = 'cursor-pointer pl-2.5';
		let track = `relative w-max min-w-[2.25rem] transition-colors rounded-full ${
			info.isChecked ? 'bg-$color-500' : 'bg-gray-200'
		}`;
		let thumb = 'absolute shadow transition-all top-1/2 -translate-y-1/2 rounded-full bg-white';
		let trackicon = `h-full transition-all inline-block ${
			info.isChecked ? 'text-white' : 'text-gray-400'
		}`;
		const thumbicon = `absolute transition-colors top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ${
			info.isChecked ? 'text-primary-500' : 'text-gray-400'
		}`;

		switch (size) {
			case 'xs':
				root += ' text-xs';
				trackicon += ` py-1 ${info.isChecked ? 'ml-1 mr-5' : 'mr-1 ml-5'}`;
				thumb += ` h-3.5 w-3.5 left-0.5 ${info.isChecked ? 'left-[calc(100%-1rem)]' : ''}`;
				track += ' h-[1.125rem] min-w-[2rem] text-[0.625rem]';
				break;
			case 'sm':
				root += ' text-sm';
				trackicon += ` py-1 ${info.isChecked ? 'ml-1.5 mr-6' : 'mr-1.5 ml-6'}`;
				thumb += ` h-4 w-4 left-0.5 ${info.isChecked ? 'left-[calc(100%-1.125rem)]' : ''}`;
				track += ' h-5 min-w-[2.25rem] text-xs';
				break;
			case 'md':
				root += ' text-base';
				trackicon += ` py-[0.3125rem] ${info.isChecked ? 'ml-1.5 mr-7' : 'mr-1.5 ml-7'}`;
				thumb += ` h-5 w-5 left-0.5 ${info.isChecked ? 'left-[calc(100%-1.375rem)]' : ''}`;
				track += ' h-6 min-w-[2.75rem] text-sm';
				break;
			case 'lg':
				root += ' text-lg';
				trackicon += ` py-1.5 ${info.isChecked ? 'ml-1.5 mr-8' : 'mr-1.5 ml-8'}`;
				thumb += ` h-6 w-6 left-0.5 ${info.isChecked ? 'left-[calc(100%-1.625rem)]' : ''}`;
				track += ' h-7 min-w-[3.25rem] text-base';
				break;
		}

		return { root, input, label, track, thumb, trackicon, thumbicon };
	},
};
