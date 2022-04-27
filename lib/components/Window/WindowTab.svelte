<script lang="ts">
	import type { RCOProp, ClearwindContext, COProp } from '$lib/_defines/types';
	import type { IconifyIcon } from '@iconify/svelte';
	import { getContext, onMount } from 'svelte';
	import type { WindowContext } from './Window.svelte';

	/// Get theme
	const clearwindContext = getContext<ClearwindContext>('clearwind');

	/// Props
	export let title: string;
	export let icon: IconifyIcon | undefined = undefined;
	export let id: string | number | undefined = undefined;

	/// Styling
	// This component has no styling

	/// Logic
	const windowcontext = getContext<WindowContext>('clearwind-window');
	const activeTab = windowcontext.activeTab;

	let myId = id;

	onMount(() => {
		myId = windowcontext.register({
			title,
			icon,
			id,
		});

		return () => {
			// myId will be defined
			windowcontext.unregister(myId ?? -1);
		};
	});

	$: windowcontext.update(myId ?? -1, {
		title,
		icon,
		id,
	});
</script>

{#if myId == $activeTab}
	<slot />
{/if}
