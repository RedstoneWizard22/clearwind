<script lang="ts">
	import { getRandomId } from '$lib/scripts/random-id';
	import type { RCOProp, COProp, ClearwindContext } from '$lib/_defines/types';
	import { getContext } from 'svelte';
	import Overlay from '../Overlay/Overlay.svelte';

	/// Get theme
	const clearwindContext = getContext<ClearwindContext>('clearwind');

	/// Props
	export let rco: RCOProp | undefined = undefined;
	export let co: COProp<'Switch'> | undefined = undefined;

	export let id = getRandomId();
	export let label = '';
	export let checked = false;
	export let disabled = false;
	export let size = 'md';

	/// Styling
	$: classes = clearwindContext.getClasses({
		component: 'Switch',
		rcoTarget: 'base',
		info: {
			isDisabled: disabled,
			size,
			hasLabel: !!label,
		},
		rco,
		co,
		requiredClasses: {
			base: 'relative',
		},
	});
</script>

<div class={classes.base}>
	<Overlay active={disabled} />
	<input type="checkbox" {id} class={classes.checkbox} {checked} {disabled} on:change />
	{#if label}
		<label class={classes.label} for={id}>{label}</label>
	{/if}
</div>
