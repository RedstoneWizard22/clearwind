import bookIcon from '@iconify/icons-akar-icons/book.js';
import pencilIcon from '@iconify/icons-akar-icons/pencil.js';
import toggleOffFill from '@iconify/icons-akar-icons/toggle-off-fill.js';
import playIcon from '@iconify/icons-akar-icons/play.js';
import type { DocPages } from '$site/types';

const docpages: DocPages = [
	{
		name: 'Getting Started',
		path: 'getting-started',
		icon: bookIcon,
		categories: [],
	},
	{
		name: 'Theme System',
		path: 'theme-system',
		icon: pencilIcon,
		categories: [],
	},
	{
		name: 'Components',
		path: 'components',
		icon: toggleOffFill,
		categories: [
			{
				name: 'Inputs',
				pages: [
					{
						name: 'Checkbox',
						path: 'checkbox',
						description: 'Get boolean input from a user',
					},
					{
						name: 'Switch',
						path: 'switch',
						description: 'An alternative to the checkbox',
					},
				].sort((a, b) => a.name.localeCompare(b.name)),
			},
		],
	},
	{
		name: 'Actions',
		path: 'actions',
		icon: playIcon,
		categories: [],
	},
];

export default docpages;
