export type Categories = 'Input' | 'Overlay';

export type ComponentData = {
	name: string;
	description: string;
	category: Categories;
}[];

export type PropData = {
	name: string;
	type: string;
	default?: string;
	description: string;
}[];

export type SlotData = {
	name: string;
	description: string;
}[];

export type EventData = {
	name: string;
	custom: boolean;
	detail?: string;
	description: string;
}[];

export type InfoData = {
	name: string;
	type: string;
}[];
