<script lang="ts">
	import { createClasses } from '$lib/themes/theme-tools';
	import type { OverlayParts, Theme } from '$lib/themes/theme-types';
	import { getContext } from 'svelte';

	/// Get theme
	const theme = getContext<Theme>('theme');

	/// Props
	export let bco: string | undefined = undefined;
	export let co: Partial<Record<OverlayParts, string>> | undefined = undefined;

	export let variant: string = theme.Overlay.defaults.variant;
	export let active = false;
	export let opacity = 0.6;

	/// Styling
	let baseClass = '';
	$: {
		const classes = createClasses<OverlayParts>(['base']);
		const info = { variant };

		// Apply theme
		theme.Overlay.apply(info, classes);
		theme.Overlay.extend?.(info, classes);
		bco && classes.base.override(bco);
		co?.base && classes.base.override(co.base);

		// Apply necessary classes
		classes.base.override('absolute z-50 h-full w-full top-0 left-0');

		baseClass = classes.base.get();
	}
</script>

<div class={baseClass} style:opacity style:display={active ? 'block' : 'none'}>
	{#if $$slots.default}
		<div class="absolute left-1/2 top-1/2 h-max w-max -translate-x-1/2 -translate-y-1/2">
			<slot />
		</div>
	{/if}
</div>
