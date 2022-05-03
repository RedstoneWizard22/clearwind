<script lang="ts">
	import { getRandomId } from '$lib/scripts/random-id';

	/// Props
	/** Label for the checkbox */
	export let label = '';
	/** Name property of the checkbox */
	export let name = '';
	/** Value property of the checkbox */
	export let value = 'on';
	/** Id to give the checkbox, if none is provided a random one will be generated */
	export let id: string = getRandomId();
	/** Whether the checkbox is checked */
	export let checked = false;
	/** The bound group */
	export let group: string[] | undefined = undefined;

	/// Logic
	$: checked = Array.isArray(group) ? group.includes(value) : checked;

	function onChange() {
		if (Array.isArray(group)) {
			group = group.includes(value)
				? group.filter((_value) => _value !== value)
				: [...group, value];
		} else {
			checked = !checked;
		}
	}
</script>

<div class="flex items-center text-sm">
	<!-- part: track -->
	<div
		class={`relative h-5 w-9 transition-colors rounded-full ${
			checked ? 'bg-primary-500' : 'bg-gray-200'
		}`}
	>
		<input
			class="absolute z-10 h-full w-full cursor-pointer appearance-none"
			type="checkbox"
			{checked}
			{id}
			{name}
			{value}
			on:change={onChange}
		/>
		<!-- part: thumb -->
		<div
			class={`absolute shadow transition-all top-1/2 left-0.5 h-4 w-4 -translate-y-1/2 rounded-full bg-white ${
				checked ? 'translate-x-4' : ''
			}`}
		/>
	</div>
	{#if label}
		<label class="cursor-pointer pl-2.5" for={id}>{label}</label>
	{/if}
</div>
