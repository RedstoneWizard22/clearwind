<script lang="ts">
	import Window from '$lib/components/Window/Window.svelte';
	import WindowTab from '$lib/components/Window/WindowTab.svelte';
	import desktopDevice from '@iconify/icons-akar-icons/desktop-device';
	import type { IconifyIcon } from '@iconify/svelte';
	import Prism from './Prism.svelte';

	export let title: string;

	type CodeTab = {
		title: string;
		icon?: IconifyIcon;
		source: string;
		language: string;
	};

	export let codetabs: CodeTab[] = [];
</script>

<h3 class="mb-1">{title}</h3>
<slot name="description" />
<div class="my-4">
	<Window>
		<WindowTab icon={desktopDevice} title="Output">
			<div class="p-6">
				<slot name="content" />
			</div>
		</WindowTab>
		{#each codetabs as tab}
			<WindowTab icon={tab.icon} title={tab.title}>
				<div class="p-4 px-5 font-mono text-sm">
					<Prism source={tab.source} language={tab.language} noBackground />
				</div>
			</WindowTab>
		{/each}
	</Window>
</div>
<div class="h-8" />

<!-- <h3 class="mb-1">{title}</h3>
<slot name="description" />
<div class="my-4 rounded-md border border-gray-200 bg-white p-6">
	<slot name="content" />
</div>
<div class="h-8" /> -->
