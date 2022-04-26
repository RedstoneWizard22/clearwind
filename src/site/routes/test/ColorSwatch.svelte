<script lang="ts">
	import checkIcon from '@iconify/icons-akar-icons/check';
	import Icon from '@iconify/svelte';

	export let selected = 'var-blue';

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
</script>

<div class="grid grid-cols-6 gap-1.5">
	{#each colors as color, i}
		<button
			class={`relative h-6 rounded bg-var-500 shadow-inner shadow-var-600 ${color}`}
			on:click={() => (index = i)}
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
