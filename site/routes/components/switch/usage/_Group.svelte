<script lang="ts">
	import { Switch } from '$lib/components';
	import Demo from '$site/components/layout/Demo.svelte';
	import Description from '$site/components/layout/Description.svelte';
	import Heading from '$site/components/layout/Heading.svelte';
	import Button from '$site/components/temp/Button.svelte';
	import Code from '$site/components/temp/Code.svelte';
	import Link from '$site/components/temp/Link.svelte';

	const options = ['Vanilla', 'Banana', 'Chocolate'];
	let group = options.slice(0, 1);
</script>

<Heading sub title="Group binding" />
<Description>
	Just like the <Link href="/components/checkbox" target="_self">Checkbox</Link>, the switch also
	supports binding an array of values using <Code>group</Code>. This is functionally identical to
	svelte's native <Link href="https://svelte.dev/tutorial/group-inputs">group inputs</Link>.
</Description>
<Demo>
	<div class="space-y-3 text-sm">
		{#each options as option}
			<Switch label={option} value={option} bind:group />
		{/each}
		<p class="pt-0.5">Selected: {group.join(', ')}</p>

		<Button
			on:click={() => {
				group = options.slice(0, 1);
			}}
		>
			Set to ["{options.slice(0, 1)}"]
		</Button>
	</div>
</Demo>
