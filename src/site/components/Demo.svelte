<script lang="ts">
	import Window from '$lib/components/Window/Window.svelte';
	import WindowTab from '$lib/components/Window/WindowTab.svelte';
	import desktopDevice from '@iconify/icons-akar-icons/desktop-device';
	import fileTypeSvelte from '@iconify/icons-vscode-icons/file-type-svelte';

	export let title: string;
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
		<WindowTab icon={fileTypeSvelte} title="Demo.svelte">
			<div class="p-6">Demo :D</div>
		</WindowTab>
	</Window>
</div>
<div class="h-8" />
