<script lang="ts">
	import { Checkbox } from '$lib/components';
	import Demo from '$site/components/layout/Demo.svelte';
	import Description from '$site/components/layout/Description.svelte';
	import Heading from '$site/components/layout/Heading.svelte';
	import Code from '$site/components/temp/Code.svelte';

	let checked = false;
</script>

<Heading sub title="Reactivity" />
<Description>
	The <Code>checked</Code> prop supports two-way data binding. An <Code>on:change</Code> custom event
	is also available which fires on user interaction. This is not triggered by programmatic changes.
</Description>
<Demo>
	<div class="space-y-4">
		<Checkbox label="on:change" {checked} on:change={(ev) => (checked = ev.detail)} />
		<Checkbox bind:checked label="bind:checked" />
		<div class="w-full rounded bg-gray-50 p-1 px-2 text-sm font-semibold text-white">
			on:checked
		</div>
	</div>
</Demo>
