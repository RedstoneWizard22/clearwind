<script lang="ts">
	import type { PropData } from '$site/types';
	import Table from '../temp/Table.svelte';

	/// Props
	export let data: PropData;

	/// Logic
	const headings = ['Name', 'Type', 'Description', 'Default'];
</script>

<Table {headings} {data} lastHeadingRight let:datum let:classes>
	<td class={classes + ' font-mono text-xs'}>{datum.name}</td>
	<td class={classes + ' font-mono text-xs text-blue-600'}>{datum.type}</td>
	<td class={classes + ' text-gray-500'}>{datum.description}</td>
	<td class={classes + ' text-right font-mono text-gray-500'}>{datum.default}</td>
</Table>
