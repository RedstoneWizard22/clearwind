<script lang="ts">
	import type { RCOProp, ClearwindContext, COProp } from '$lib/_defines/types';
	import { getContext } from 'svelte';

	/// Get theme
	const clearwindContext = getContext<ClearwindContext>('clearwind');

	/// Props
	export let rco: RCOProp | undefined = undefined;
	export let co: COProp<'Kbd'> | undefined = undefined;

	/// Styling
	$: classes = clearwindContext.getClasses({
		component: 'Kbd',
		rcoTarget: 'base',
		info: {
			variant: 'default',
		},
		rco,
		co,
	});
</script>

<span class={classes.base}>
	<slot />
</span>
