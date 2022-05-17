const parts = {
	Alert: ['root', 'icon', 'title', 'body', 'icondiv', 'contentdiv', 'closebutton'],
	Checkbox: ['root', 'checkboxdiv', 'label', 'input', 'icon'],
	Switch: ['root', 'input', 'label', 'track', 'thumb', 'trackicon', 'thumbicon'],
} as const; // Must be as const so we can derive union types

export default parts;
