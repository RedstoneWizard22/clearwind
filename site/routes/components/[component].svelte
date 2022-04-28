<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { componentsData } from '../../pages/components/data';
	import githubFill from '@iconify/icons-akar-icons/github-fill';
	import pencilIcon from '@iconify/icons-akar-icons/pencil';
	import TabBar from '$lib/components/TabBar/TabBar.svelte';
	import Tab from '$lib/components/TabBar/Tab.svelte';
	import { onMount } from 'svelte';
	import Loader from '$lib/components/Loader/Loader.svelte';
	import type { PageModule } from 'site/pages/components/types';
	import { goto } from '$app/navigation';

	const myComponent = $page.params.component;
	const myData = componentsData.find((d) => d.name.toLowerCase() === myComponent.toLowerCase());

	$: currentTab = $page.url.searchParams.get('t') || 'overview';

	let pagemodule: PageModule | undefined;

	onMount(() => {
		myData?.loadPage().then((c) => (pagemodule = c));
	});

	function newQueryUrl(values: Record<string, string>): string {
		const url = new URL(window.location.toString());
		for (const [k, v] of Object.entries(values)) {
			if (v) {
				url.searchParams.set(encodeURIComponent(k), encodeURIComponent(v));
			} else {
				url.searchParams.delete(k);
			}
		}
		return url.toString();
	}
</script>

{#if myData}
	<div class="text-gray-8000 pb-8">
		<h1 class="mb-1 capitalize">{myData.name}</h1>
		<p class="text-gray-500">{myData.description}</p>

		<div class="mt-4 space-y-1.5 text-sm">
			<div>
				<a
					class="hover:underline"
					href={`https://github.com/RedstoneWizard22/clearwind/tree/master/${myData.componentSource}`}
					target="_blank"
				>
					<Icon icon={githubFill} inline class="mr-1 inline" />
					Component source
				</a>
			</div>
			<div>
				<a
					class="hover:underline"
					href={`https://github.com/RedstoneWizard22/clearwind/tree/master/${myData.pageSource}`}
					target="_blank"
				>
					<Icon icon={pencilIcon} inline class="mr-1 inline" />
					Page source
				</a>
			</div>
		</div>
	</div>

	<div class="">
		<TabBar
			rco="-mb-[1px] text-sm text-gray-800"
			variant="pill"
			initialTab={currentTab}
			on:change={(ev) => {
				if (ev.detail == 'overview') {
					goto(newQueryUrl({ t: '' }));
				} else {
					goto(newQueryUrl({ t: ev.detail }));
				}
			}}
		>
			<Tab id="overview" label="Overview" />
			<Tab id="details" label="Details" />
			<Tab id="style" label="Style" />
		</TabBar>
	</div>

	<div class="py-6 text-gray-700">
		{#if pagemodule}
			{#if currentTab == 'details'}
				<svelte:component this={pagemodule.default.Details} />
			{:else if currentTab == 'style'}
				<svelte:component this={pagemodule.default.Style} />
			{:else}
				<svelte:component this={pagemodule.default.Overview} />
			{/if}
			<div class="h-52" />
		{:else}
			<div class="mx-auto w-max mt-16 text-4xl">
				<Loader variant="balls" />
			</div>
		{/if}
	</div>
{:else}
	<div>404 Page :(</div>
{/if}
