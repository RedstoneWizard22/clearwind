<script lang="ts">
	import type { SlotData } from '$site/types';
	import Table from '../temp/Table.svelte';

	/// Props
	export let data: SlotData;

	/// Logic
	const headings = ['Name', 'Description'];
</script>

<Table {headings} {data} let:datum let:classes>
	<td class={classes + ' font-mono text-xs'}>{datum.name}</td>
	<td class={classes + ' text-gray-500'}>{datum.description}</td>
</Table>
