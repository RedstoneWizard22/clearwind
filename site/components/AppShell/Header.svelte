<script lang="ts">
	import Icon from '@iconify/svelte';
	import thunderIcon from '@iconify/icons-akar-icons/thunder.js';
	import searchIcon from '@iconify/icons-akar-icons/search.js';
	import githubFill from '@iconify/icons-akar-icons/github-fill.js';

	import textAlignJustified from '@iconify/icons-akar-icons/text-align-justified.js';
	import crossIcon from '@iconify/icons-akar-icons/cross.js';
	import { createEventDispatcher } from 'svelte';

	/// Logic
	export let navOpen = false;

	const dispatch = createEventDispatcher();
</script>

<div
	class="flex h-full w-full items-center justify-between bg-gradient-to-br from-primary-500 to-sky-500 px-5 shadow sm:px-6 "
>
	<div class="mr-auto flex items-center text-white">
		<button class="mr-4 text-xl md:hidden" on:click={() => dispatch('navtoggle')}>
			<Icon icon={navOpen ? crossIcon : textAlignJustified} />
		</button>
		<Icon inline icon={thunderIcon} class="text-2xl" />
		<span class="ml-2.5 text-xl font-bold">Clearwind</span>
	</div>

	<button
		class="mx-8 hidden h-8 max-w-sm flex-grow rounded-md bg-primary-400 bg-opacity-60 px-3 text-sm leading-8 text-white hover:bg-opacity-80 md:block lg:max-w-md xl:max-w-lg 2xl:max-w-xl"
	>
		<div class="relative flex h-full items-center">
			<Icon inline class="mr-1.5 inline" icon={searchIcon} />
			<span class="text-xs"> Search docs </span>
		</div>
	</button>
	<div />

	<div class="ml-auto h-[20px] space-x-2 text-xl text-white">
		<button class="inline-block transition-transform ease-out hover:scale-110 md:hidden">
			<Icon icon={searchIcon} />
		</button>
		<button class="inline-block transition-transform ease-out hover:scale-110">
			<Icon icon={githubFill} />
		</button>
	</div>
</div>
