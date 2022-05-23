<script lang="ts">
	import docpages from '$site/data/docpages';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import chevronRight from '@iconify/icons-akar-icons/chevron-right.js';
	import chevronDown from '@iconify/icons-akar-icons/chevron-down.js';

	let activePage = '';
	let activeSection = '';
	$: {
		const path = $page.url.pathname.split('/');
		activeSection = path[1];
		activePage = path[2];
	}
</script>

<div class="h-screen w-full space-y-5 bg-gray-100 p-4 py-6 text-sm shadow-inner">
	{#each docpages as section}
		<div>
			<button class="flex w-full items-center rounded-md px-3 font-medium text-gray-600">
				<Icon icon={section.icon} class="mr-3 text-lg" />
				<span class="flex-grow text-left">{section.name}</span>
				<Icon icon={section.path == 'components' ? chevronDown : chevronRight} />
			</button>
			{#if section.categories.length > 0}
				<div class="mt-4 mb-8 space-y-2 font-medium text-gray-700">
					{#each section.categories as category}
						<p class="px-3 pt-2 font-semibold uppercase text-primary-500">{category.name}</p>
						{#each category.pages as cpage}
							<a
								class={`block rounded-md py-1.5 px-3 transition-all ${
									cpage.path == activePage && section.path == activeSection
										? 'bg-gray-200'
										: 'hover:translate-x-2'
								}`}
								href={`/${section.path}/${cpage.path}`}>{cpage.name}</a
							>
						{/each}
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>
