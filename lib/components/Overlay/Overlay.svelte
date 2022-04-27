<script lang="ts">
	import type { RCOProp, COProp, ClearwindContext } from '$lib/_defines/types';
	import { getContext } from 'svelte';

	/// Get theme
	const clearwindContext = getContext<ClearwindContext>('clearwind');

	/// Props
	export let rco: RCOProp | undefined = undefined;
	export let co: COProp<'Overlay'> | undefined = undefined;

	export let variant: string = 'default';
	export let active = false;
	export let opacity = 0.6;

	/// Styling
	$: classes = clearwindContext.getClasses({
		component: 'Overlay',
		rcoTarget: 'base',
		info: {
			variant: variant,
		},
		rco,
		co,
		requiredClasses: {
			base: 'absolute h-full w-full top-0 left-0 z-10',
		},
	});
</script>

<div class={classes.base} style:opacity style:display={active ? 'block' : 'none'}>
	{#if $$slots.default}
		<div class="absolute left-1/2 top-1/2 h-max w-max -translate-x-1/2 -translate-y-1/2">
			<slot />
		</div>
	{/if}
</div>
