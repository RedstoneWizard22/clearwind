<script lang="ts">
	import type { PropData } from '$site/types';
	import Table from '../temp/Table.svelte';

	/// Props
	export let data: PropData;

	/// Logic
	const headings = ['Name', 'Type', 'Description', 'Default'];
</script>

<Table {headings} {data} lastHeadingRight let:datum let:classes>
	<td class={classes + ' font-mono text-xs'}>
		{datum.name}
		{#if datum.twoWay}
			<span
				class="rounded-full bg-green-200 px-2 py-0.5 font-sans text-xs font-semibold text-green-600"
				>two-way</span
			>
		{/if}
	</td>
	<td class={classes + ' font-mono text-xs text-blue-600'}>{datum.type}</td>
	<td class={classes + ' text-gray-500'}>{datum.description}</td>
	<td class={classes + ' text-right text-xs font-mono text-gray-500'}>{datum.default}</td>
</Table>
