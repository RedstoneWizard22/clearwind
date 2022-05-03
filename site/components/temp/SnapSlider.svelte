<script lang="ts">
	import { getRandomId } from '$lib/scripts/random-id';

	/// Props
	/** Title for the slider */
	export let title = '';
	/** Index of the selected value */
	export let selected = 0;
	/** Possible values */
	export let options: string[] = [];
	/** Id to give the input, if none is provided a random one will be generated */
	export let id: string = getRandomId();

	/// Logic
	$: max = options.length - 1;
	const min = 0;
</script>

<div>
	{#if title}
		<p class="mb-1 text-sm font-medium">{title}</p>
	{/if}
	<div class="relative h-5 w-full">
		<input
			class="absolute z-10 h-5 w-full cursor-pointer appearance-none bg-transparent opacity-0"
			type="range"
			{min}
			{max}
			step="1"
			bind:value={selected}
			{id}
			on:input={(e) => (selected = +e.currentTarget.value)}
		/>
		<div
			class="absolute top-1/2 h-2 w-full -translate-y-1/2 overflow-clip rounded-full bg-gray-200"
		>
			<div class="absolute left-0 h-5 bg-primary-500" style={`width: ${(selected * 100) / max}%`} />
			<!-- markers -->
			{#each options as option, i}
				<div
					class="absolute top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-white"
					style={`left: calc(${(i / max) * 100}% - ${(i / max) * 13.5}px + 4.5px)`}
				/>
			{/each}
		</div>
		<div class="absolute h-5 w-full">
			<div
				class="absolute mt-[1px] h-[1.125rem] w-[1.125rem] rounded-full border-4 border-primary-500 bg-white shadow"
				style={`left: calc(${(selected / max) * 100}% - ${(selected / max) * 18}px)`}
			/>
		</div>
	</div>
</div>
