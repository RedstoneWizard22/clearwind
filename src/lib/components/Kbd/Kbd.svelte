<script lang="ts">
	import { createClasses } from '$lib/themes/theme-tools';

	import type { KbdParts, Theme } from '$lib/themes/theme-types';
	import { getContext } from 'svelte';

	/// Get theme
	const theme = getContext<Theme>('theme');

	/// Props
	export let bco: string | undefined = undefined;
	export let co: Partial<Record<KbdParts, string>> | undefined = undefined;

	/// Styling
	let baseClass = '';
	$: {
		const classes = createClasses<KbdParts>(['base']);

		// Apply theme
		theme.Kbd.apply({}, classes);
		theme.Kbd.extend?.({}, classes);
		bco && classes.base.override(bco);
		co?.base && classes.base.override(co.base);

		baseClass = classes.base.get();
	}
</script>

<span class={baseClass}>
	<slot />
</span>
