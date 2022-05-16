const parts = {
	Alert: ['root', 'icon', 'title', 'body', 'icondiv', 'contentdiv', 'closebutton'],
	Checkbox: ['root', 'checkboxdiv', 'label', 'input', 'icon'],
} as const; // Must be as const so we can derive union types

export default parts;
