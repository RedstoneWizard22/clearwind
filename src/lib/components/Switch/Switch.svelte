<script lang="ts">
	import { getRandomId } from '$lib/scripts/random-id';
	import { createClasses } from '$lib/themes/theme-tools';
	import type { SwitchParts, Theme } from '$lib/themes/theme-types';
	import { getContext } from 'svelte';
	import Overlay from '../Overlay/Overlay.svelte';

	/// Get theme
	const theme = getContext<Theme>('theme');

	/// Props
	export let bco: string | undefined = undefined;
	export let co: Partial<Record<SwitchParts, string>> | undefined = undefined;

	export let id = getRandomId();
	export let label = '';
	export let checked = false;
	export let disabled = false;
	export let size = 'md';

	/// Styling
	let baseClass = '';
	let checkboxClass = '';
	let labelClass = '';
	$: {
		const classes = createClasses<SwitchParts>(['base', 'label', 'checkbox']);
		const info = {
			size,
			isDisabled: disabled,
			hasLabel: !!label,
		};

		// Apply theme
		theme.Switch.apply(info, classes);
		theme.Switch.extend?.(info, classes);
		bco && classes.base.override(bco);
		co?.base && classes.base.override(co.base);
		co?.label && classes.label.override(co.label);
		co?.checkbox && classes.checkbox.override(co.checkbox);

		classes.base.override('relative flex items-center');

		baseClass = classes.base.get();
		labelClass = classes.label.get();
		checkboxClass = classes.checkbox.get();
	}
</script>

<div class={baseClass}>
	<Overlay active={disabled} />
	<input type="checkbox" {id} class={checkboxClass} {checked} {disabled} on:change />
	{#if label}
		<label class={labelClass} for={id}>{label}</label>
	{/if}
</div>
