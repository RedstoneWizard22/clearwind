<script lang="ts">
	import type { EventData } from '$site/types';
	import Table from '../temp/Table.svelte';

	/// Props
	export let data: EventData;

	/// Logic
	const headings = ['Name', 'Event.detail', 'Description'];
</script>

<Table {headings} {data} let:datum let:classes>
	<td class={classes}>
		<span class="font-mono text-xs">{datum.name}</span>
		{#if datum.custom}
			<span class="ml-2 rounded-full bg-amber-200 px-2 py-0.5 text-xs font-semibold text-amber-600"
				>custom</span
			>
		{/if}
	</td>
	<td class={classes + ' font-mono text-xs text-blue-600'}>{datum.detail ?? ''}</td>
	<td class={classes + ' text-gray-500'}>{datum.description}</td>
</Table>
