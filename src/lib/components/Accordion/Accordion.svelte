<script lang="ts" context="module">
	export type AccordionContext = {
		register: (id: string, setOpen: (v: boolean) => void, isOpen: boolean) => void;
		unregister: (id: string) => void;
		toggle: (id: string) => void;
		setOpen: (id: string, v: boolean) => void;
		props: {
			variant: string;
			size: string;
			icon: IconifyIcon | undefined;
			iconPosition: 'left' | 'right';
			noIconRotation: boolean;
			transitionDuration: number;
			transitionEasingFunction: (t: number) => number;
		};
	};
</script>

<script lang="ts">
	import type { RCOProp, ClearwindContext, COProp } from '$lib/themes/theme-types';
	import type { IconifyIcon } from '@iconify/svelte';
	import { getContext, setContext } from 'svelte';
	import { cubicOut } from 'svelte/easing';

	/// Get theme
	const clearwindContext = getContext<ClearwindContext>('clearwind');

	/// Props
	export let rco: RCOProp | undefined = undefined;
	export let co: COProp<'Accordion'> | undefined = undefined;
	export let variant = 'default';
	export let size = 'md';

	export let multiple = false;
	export let allowToggle = true;
	export let icon: IconifyIcon | undefined = undefined;
	export let iconPosition: 'left' | 'right' = 'right';
	export let noIconRotation = false;
	export let transitionDuration = 300;
	export let transitionEasingFunction = cubicOut;

	/// Styling
	$: classes = clearwindContext.getClasses({
		component: 'Accordion',
		rcoTarget: 'root',
		info: {
			variant,
			size,
			iconPosition,
		},
		rco,
		co,
	});

	/// Logic
	const items: { id: string; setOpen: (v: boolean) => void; isOpen: boolean }[] = [];

	setContext<AccordionContext>('clearwind-accordion', {
		register: (id, setOpen, isOpen) => {
			items.push({ id, setOpen, isOpen });
		},
		unregister: (id) => {
			items.splice(
				items.findIndex((i) => i.id === id),
				1
			);
		},
		toggle: (id) => {
			if (multiple) {
				const item = items.find((i) => i.id === id);
				if (item) {
					item.setOpen(!item.isOpen);
					item.isOpen = !item.isOpen;
				}
			} else {
				items.forEach((i) => {
					if (i.id !== id) {
						i.setOpen(false);
						i.isOpen = false;
					} else {
						if (allowToggle) {
							i.setOpen(!i.isOpen);
							i.isOpen = !i.isOpen;
						} else {
							i.setOpen(true);
							i.isOpen = true;
						}
					}
				});
			}
		},
		setOpen: (id, v) => {
			const item = items.find((i) => i.id === id);
			if (item) {
				item.setOpen(v);
				item.isOpen = v;
			}
		},
		props: {
			variant,
			size,
			icon,
			iconPosition,
			noIconRotation,
			transitionDuration,
			transitionEasingFunction,
		},
	});
</script>

<!-- part: root -->
<div class={classes.root}>
	<slot />
</div>
