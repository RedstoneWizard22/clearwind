import type { EventData } from '$site/types';

const events: EventData = [
	{
		name: 'focus',
		custom: false,
		description: 'Native focus event',
	},
	{
		name: 'blur',
		custom: false,
		description: 'Native blur event',
	},
	{
		name: 'change',
		custom: true,
		detail: 'boolean',
		description: 'Fires on user interaction, not on programmatic changes',
	},
];

export default events;
