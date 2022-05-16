<script lang="ts">
	import githubFill from '@iconify/icons-akar-icons/github-fill.js';
	import pencilIcon from '@iconify/icons-akar-icons/pencil.js';
	import newspaperIcon from '@iconify/icons-akar-icons/newspaper.js';
	import chevronDown from '@iconify/icons-akar-icons/chevron-down.js';
	import Icon from '@iconify/svelte';

	export let name: string;
	export let description: string;
	export let componentSource = `lib/components/${name}`;
	export let pageSource = `site/routes/components/${name.toLowerCase()}`;
	export let themeSource = `lib/themes/modern/${name.toLowerCase()}.ts`;

	const REPO_ROOT = 'https://github.com/RedstoneWizard22/clearwind/tree/master/';

	const pages = ['usage', 'theming'];
	let selected = 'usage';
</script>

<div class="flex items-center justify-between">
	<div>
		<!-- Title -->
		<h1 class="mb-2">{name}</h1>
		<!-- Description -->
		<p class="text-gray-500">{description}</p>
	</div>
	<button
		class="rounded-md border border-gray-300 bg-white py-1.5 px-4 text-sm text-gray-800 shadow-sm"
	>
		<Icon inline icon={githubFill} class="mr-1.5 inline" />
		<span class="">View source</span>
		<Icon inline icon={chevronDown} class="ml-4 inline" />
	</button>
</div>

<div class="mt-6 flex space-x-6 border-b">
	{#each pages as page}
		{#if selected == page}
			<button
				class="-mb-[1px] border-b-2 border-primary-500 px-1 py-2 font-medium capitalize text-primary-500"
			>
				{page}
			</button>
		{:else}
			<button
				class="-mb-[1px] border-b-2 border-transparent px-1 py-2 text-gray-500 capitalize"
				on:click={() => (selected = page)}
			>
				{page}
			</button>
		{/if}
	{/each}
</div>

<!-- <div class="mt-6 flex space-x-1 rounded-md bg-gray-100 p-1">
	{#each pages as page}
		{#if selected == page}
			<button
				class="flex-grow rounded bg-white py-1 text-center font-medium capitalize text-gray-900 shadow"
			>
				{page}
			</button>
		{:else}
			<button
				class="flex-grow py-1 text-center font-medium text-gray-500 capitalize"
				on:click={() => (selected = page)}>{page}</button
			>
		{/if}
	{/each}
</div> -->

<!-- Page Contents -->
<div class="mb-32 space-y-4">
	{#if selected == 'usage'}
		<slot name="usage" />
	{:else}
		<slot name="theming" />
	{/if}
</div>

<svelte:head>
	<title>{name} | Clearwind</title>
</svelte:head>
