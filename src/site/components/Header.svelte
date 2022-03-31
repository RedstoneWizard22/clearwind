<script lang="ts">
	import Icon from '@iconify/svelte';
	import thunderIcon from '@iconify/icons-akar-icons/thunder';
	import githubFill from '@iconify/icons-akar-icons/github-fill';
	import textAlignJustified from '@iconify/icons-akar-icons/text-align-justified';
	import crossIcon from '@iconify/icons-akar-icons/cross';
	import searchIcon from '@iconify/icons-akar-icons/search';
	import { createEventDispatcher } from 'svelte';
	import Kbd from '$lib/components/Kbd/Kbd.svelte';

	export let navOpen: boolean;

	const dispatch = createEventDispatcher();
</script>

<div class="flex h-full items-center text-gray-600">
	<!-- Left -->
	<div class="flex items-center text-xl">
		<div on:click={() => dispatch('navtoggle')}>
			<Icon
				icon={navOpen ? crossIcon : textAlignJustified}
				inline
				class="mr-5 cursor-pointer text-xl md:hidden"
			/>
		</div>
		<div class="rounded-md bg-gradient-to-br from-sky-500 to-primary-500 p-1.5 text-white">
			<Icon icon={thunderIcon} inline />
		</div>
		<span class="ml-3 font-bold text-gray-900">Clearwind</span>
	</div>

	<!-- Spacer -->
	<div class="flex-grow" />

	<!-- Right -->
	<div class="flex items-center space-x-1">
		<div
			class="mr-2 hidden h-8 w-72 cursor-pointer items-center rounded-md border border-gray-300 px-3 text-sm hover:bg-gray-50 md:flex"
		>
			<Icon icon={searchIcon} inline class="mr-2" />
			<span>Search</span>
			<div class="flex-grow" />
			<Kbd rco="text-xs">Ctrl + K</Kbd>
		</div>
		<button class="rounded-md p-2 text-lg hover:bg-gray-50 md:hidden">
			<Icon icon={searchIcon} inline />
		</button>
		<a
			class="rounded-md p-2 text-lg hover:bg-gray-50"
			href="https://github.com/RedstoneWizard22/clearwind"
		>
			<Icon icon={githubFill} inline />
		</a>
	</div>
</div>
