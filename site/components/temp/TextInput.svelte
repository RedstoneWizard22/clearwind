<script lang="ts">
	import { getRandomId } from '$lib/scripts/random-id';

	/// Props
	/** title for the input */
	export let title = '';
	/** Name property of the input */
	export let name = '';
	/** Value of the input */
	export let value = '';
	/** Id to give the input, if none is provided a random one will be generated */
	export let id: string = getRandomId();
</script>

<div class="text-sm">
	{#if title}
		<p class="mb-1 font-medium">{title}</p>
	{/if}
	<input
		class="w-full rounded border border-gray-300 py-2 px-3 text-sm focus:border-primary-500 focus:outline-none"
		type="text"
		bind:value
		{id}
		{name}
	/>
</div>
