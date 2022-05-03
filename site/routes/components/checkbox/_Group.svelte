<script lang="ts">
	import { Checkbox } from '$lib/components';
	import Demo from '$site/components/Demo.svelte';
	import Section from '$site/components/layout/Section.svelte';
	import SectionDemo from '$site/components/layout/SectionDemo.svelte';
	import SectionDescription from '$site/components/layout/SectionDescription.svelte';
	import Button from '$site/components/temp/Button.svelte';
	import Code from '$site/components/temp/Code.svelte';
	import Link from '$site/components/temp/Link.svelte';

	const options = ['Vanilla', 'Banana', 'Chocolate'];
	let group = options.slice(0, 1);
</script>

<Section title="Group binding">
	<SectionDescription>
		An alternative to <Code>checked</Code> is binding an array of values using <Code>group</Code>.
		This is functionally identical to svelte's native <Link
			href="https://svelte.dev/tutorial/group-inputs">group inputs</Link
		>.
	</SectionDescription>
	<SectionDemo>
		<Demo>
			<div class="space-y-3 text-sm">
				{#each options as option}
					<Checkbox label={option} value={option} bind:group />
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
	</SectionDemo>
</Section>
