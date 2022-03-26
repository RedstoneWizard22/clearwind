<script lang="ts">
	import Icon from '@iconify/svelte';
	import tailwindIcon from '@iconify/icons-mdi/tailwind';
	import githubFill from '@iconify/icons-akar-icons/github-fill';
	import textAlignJustified from '@iconify/icons-akar-icons/text-align-justified';
	import crossIcon from '@iconify/icons-akar-icons/cross';
	import searchIcon from '@iconify/icons-akar-icons/search';
	import { createEventDispatcher } from 'svelte';
	import Kbd from '$lib/components/Kbd/Kbd.svelte';

	export let navOpen: boolean;

	const dispatch = createEventDispatcher();
</script>

<div class="flex h-full items-center px-5 text-gray-600">
	<!-- Left -->
	<div class="flex items-center text-xl">
		<div on:click={() => dispatch('navtoggle')}>
			<Icon
				icon={navOpen ? crossIcon : textAlignJustified}
				inline
				class="mr-5 cursor-pointer text-xl md:hidden"
			/>
		</div>
		<div class="rounded bg-primary-500 p-1 text-white">
			<Icon icon={tailwindIcon} inline />
		</div>
		<span class="ml-3 font-semibold text-gray-900">Clearwind</span>
	</div>

	<!-- Spacer -->
	<div class="flex-grow" />

	<!-- Right -->
	<div class="flex items-center space-x-2">
		<div
			class="hidden h-8 w-52 cursor-pointer items-center rounded border px-2 text-sm text-gray-400 hover:bg-gray-50 md:flex"
		>
			<Icon icon={searchIcon} inline class="mr-2" />
			<span>Search</span>
			<div class="flex-grow" />
			<Kbd rco="text-xs rounded-sm text-gray-500">ctrl + K</Kbd>
		</div>
		<div class="rounded border p-1.5 text-lg hover:bg-gray-50 md:hidden">
			<Icon icon={searchIcon} inline />
		</div>
		<a
			class="rounded border p-1.5 text-lg hover:bg-gray-50"
			href="https://github.com/RedstoneWizard22/clearwind"
		>
			<Icon icon={githubFill} inline />
		</a>
	</div>
</div>
