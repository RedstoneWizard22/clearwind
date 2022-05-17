import type { PropData } from '$site/types';

const props: PropData = [
	{
		name: 'label',
		type: 'string',
		default: '""',
		description: 'Label for the switch, alternatively use label slot',
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
		description: 'Id to give the input, if none is provided a random one will be generated',
	},
	{
		name: 'checked',
		type: 'boolean',
		default: 'false',
		description: 'Whether the switch is checked',
		twoWay: true,
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Whether the switch is disabled',
	},
	{
		name: 'required',
		type: 'boolean',
		default: 'false',
		description: 'Whether the switch is required',
	},
	{
		name: 'tabIndex',
		type: 'number',
		default: '0',
		description: 'Sets the tabindex of the switch',
	},
	{
		name: 'ref',
		type: 'HTMLInputElement | null',
		default: 'null',
		description: 'Get a reference to the input element',
		twoWay: true,
	},
	{
		name: 'group',
		type: 'string[] | undefined',
		default: 'undefined',
		description: 'The bound group',
		twoWay: true,
	},
	{
		name: 'checkIcon',
		type: 'IconifyIcon | undefined',
		default: 'undefined',
		description: 'Icon to display when checked',
	},
	{
		name: 'uncheckIcon',
		type: 'IconifyIcon | undefined',
		default: 'undefined',
		description: 'Icon to display when unchecked',
	},
	{
		name: 'iconPlacement',
		type: '"track" | "thumb"',
		default: '"thumb"',
		description: 'Where to place the icons',
	},
];

export default props;
