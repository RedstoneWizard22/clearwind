import type { PropData } from '$site/types';

const props: PropData = [
	{
		name: 'checkIcon',
		type: 'IconifyIcon',
		default: 'theme.icons.check',
		description: 'Icon to use when checked',
	},
	{
		name: 'indeterminateIcon',
		type: 'IconifyIcon',
		default: 'theme.icons.indeterminate',
		description: 'Icon to use when indeterminate',
	},
	{
		name: 'label',
		type: 'string',
		default: '""',
		description: 'Label for the checkbox, alternatively use label slot',
	},
	{
		name: 'name',
		type: 'string',
		default: '""',
		description: 'Name attribute',
	},
	{
		name: 'value',
		type: 'string',
		default: '"on"',
		description: 'Value attribute, also used as the value for bind:group',
	},
	{
		name: 'id',
		type: 'string',
		default: 'getRandomId()',
		description: 'Id to give the checkbox, if none is provided a random one will be generated',
	},
	{
		name: 'checked',
		type: 'boolean',
		default: 'false',
		description: 'Whether the checkbox is checked',
	},
	{
		name: 'indeterminate',
		type: 'boolean',
		default: 'false',
		description:
			'Whether the checkbox is indeterminate. This will lock checked at false, but the on:change event will still fire.',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Whether the checkbox is disabled',
	},
	{
		name: 'required',
		type: 'boolean',
		default: 'false',
		description: 'Whether the checkbox is required',
	},
	{
		name: 'tabIndex',
		type: 'number',
		default: '0',
		description: 'Sets the tabindex of the checkbox',
	},
	{
		name: 'ref',
		type: 'HTMLInputElement | null',
		default: 'null',
		description: 'Get a reference to the input element',
	},
	{
		name: 'group',
		type: 'string[] | undefined',
		default: 'undefined',
		description: 'The bound group',
	},
];

export default props;
