<script lang="ts">
	import githubFill from '@iconify/icons-akar-icons/github-fill.js';
	import newspaperIcon from '@iconify/icons-akar-icons/newspaper.js';
	import pencilIcon from '@iconify/icons-akar-icons/pencil.js';
	import chevronDown from '@iconify/icons-akar-icons/chevron-down.js';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	export let name: string;
	export let description: string;
	// export let componentSource = `lib/components/${name}`;
	// export let pageSource = `site/routes/components/${name.toLowerCase()}`;
	// export let themeSource = `lib/themes/modern/${name.toLowerCase()}.ts`;

	// const REPO_ROOT = 'https://github.com/RedstoneWizard22/clearwind/tree/master/';

	const pages = ['usage', 'theming'];
	let selected = 'usage';

	// Parallax effect for scrolling
	let t = 0;

	onMount(() => {
		const onScroll = () => {
			if (window.scrollY < 130) {
				t = window.scrollY * 0.012;
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<!-- Page heading -->
<div class="relative bg-gray-50 px-5 md:px-0">
	<div class="mx-auto max-w-screen-lg py-10" style={`transform: translateY(${t}rem)`}>
		<div class="flex items-center justify-between">
			<div>
				<h1 class="mb-1.5">{name}</h1>
				<p class="text-gray-500">{description}</p>
			</div>
			<button
				class="hidden rounded-md border border-gray-300 bg-white py-1.5 px-4 text-sm text-gray-800 shadow-sm md:block"
			>
				<Icon inline icon={githubFill} class="mr-1.5 inline" />
				<span class="">View source</span>
				<Icon inline icon={chevronDown} class="ml-4 inline" />
			</button>
		</div>
	</div>

	<!-- The tab switcher -->
	<div class="-mx-5 flex">
		<div class="w-5 border-b md:w-0 md:flex-grow" />
		<div class="flex md:w-[1024px]">
			{#each pages as page}
				{#if selected == page}
					<button
						class="rounded-t-md border border-b-white bg-white px-6 py-2 text-center font-medium capitalize text-gray-900"
					>
						{page}
					</button>
				{:else}
					<button
						class="px-6 py-2 text-center font-medium text-gray-500 capitalize border-b-gray-200 border-transparent border"
						on:click={() => (selected = page)}>{page}</button
					>
				{/if}
			{/each}
			<div class="flex-grow border-b" />
		</div>
		<div class="flex-grow border-b" />
	</div>
</div>

<!-- Page Contents -->
<div class="mx-auto mt-10 max-w-screen-lg px-5 md:px-0">
	{#if selected == 'usage'}
		<slot name="usage" />
	{:else}
		<slot name="theming" />
	{/if}
	<div class="h-20" />
</div>

<svelte:head>
	<title>{name} | Clearwind</title>
</svelte:head>
