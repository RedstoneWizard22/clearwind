import type { IconifyIcon } from '@iconify/svelte';

export type PropData = {
	name: string;
	type: string;
	default?: string;
	description: string;
	twoWay?: boolean;
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

export type DocPages = {
	name: string;
	path: string;
	icon: IconifyIcon;
	categories: {
		name: string;
		pages: {
			name: string;
			path: string;
			description: string;
		}[];
	}[];
}[];
