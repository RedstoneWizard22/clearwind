<script lang="ts">
	import checkIcon from '@iconify/icons-akar-icons/check';
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';

	export let selected = 'var-blue';
	export let title = 'Color';

	$: index = colors.findIndex((col) => col === selected);

	let colors = [
		'var-gray',
		'var-red',
		'var-amber',
		'var-lime',
		'var-green',
		'var-teal',
		'var-sky',
		'var-blue',
		'var-indigo',
		'var-purple',
		'var-fuchsia',
		'var-pink',
	];

	const dispatch = createEventDispatcher();
</script>

<div>
	{#if title}
		<p class="mb-1 text-sm font-medium">{title}</p>
	{/if}
	<div class="grid grid-cols-6 gap-1.5">
		{#each colors as color, i}
			<button
				class={`relative h-6 rounded bg-var-500 shadow-inner shadow-var-600 ${color}`}
				on:click={() => {
					index = i;
					dispatch('change', color);
				}}
			>
				{#if i === index}
					<Icon
						class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-white"
						icon={checkIcon}
					/>
				{/if}
			</button>
		{/each}
	</div>
</div>
