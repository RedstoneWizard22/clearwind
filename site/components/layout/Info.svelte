<script lang="ts">
	import type { InfoData } from '$site/types';
	import Table from '../temp/Table.svelte';

	/// Props
	export let data: InfoData;

	/// Logic
	const headings = ['Key', 'Value'];
</script>

<Table {headings} {data} let:datum let:classes>
	<td class={classes + ' font-mono text-xs'}>{datum.name}</td>
	<td class={classes + ' font-mono text-xs text-blue-600'}>{datum.type}</td>
</Table>
