<script lang="ts">
	import githubFill from '@iconify/icons-akar-icons/github-fill.js';
	import pencilIcon from '@iconify/icons-akar-icons/pencil.js';
	import newspaperIcon from '@iconify/icons-akar-icons/newspaper.js';
	import Icon from '@iconify/svelte';

	export let name: string;
	export let description: string;
	export let componentSource = `lib/components/${name}`;
	export let pageSource = `site/routes/components/${name.toLowerCase()}`;
	export let themeSource = `lib/themes/modern/${name.toLowerCase()}.ts`;

	const REPO_ROOT = 'https://github.com/RedstoneWizard22/clearwind/tree/master/';
	const linkClasses = 'inline-block rounded-md bg-gray-100 p-1 px-3';
</script>

<!-- Title -->
<h1 class="mb-2">{name}</h1>

<!-- Description -->
<p class="text-gray-500">{description}</p>

<!-- Repo Links -->
<div class="mt-6 space-x-2 overflow-x-auto whitespace-nowrap rounded text-sm text-gray-800">
	<a class={linkClasses} href={`${REPO_ROOT}${componentSource}`} target="_blank">
		<Icon inline icon={githubFill} class="mr-1.5 inline" />
		<span>Component source</span>
	</a>
	<a class={linkClasses} href={`${REPO_ROOT}${pageSource}`} target="_blank">
		<Icon inline icon={newspaperIcon} class="mr-1.5 inline" />
		<span>Page source</span>
	</a>
	<a class={linkClasses} href={`${REPO_ROOT}${themeSource}`} target="_blank">
		<Icon inline icon={pencilIcon} class="mr-1.5 inline" />
		<span>Theme source</span>
	</a>
</div>

<!-- Page Contents -->
<div class="mt-12 mb-24">
	<slot />
</div>
