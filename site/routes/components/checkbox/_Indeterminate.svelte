<script lang="ts">
	import { Checkbox } from '$lib/components';
	import Demo from '$site/components/Demo.svelte';
	import Section from '$site/components/layout/Section.svelte';
	import SectionDemo from '$site/components/layout/SectionDemo.svelte';
	import SectionDescription from '$site/components/layout/SectionDescription.svelte';
	import Code from '$site/components/temp/Code.svelte';

	const fruits = ['Apple', 'Pear', 'Pineapple'];
	let group = fruits.slice(1, 2);
</script>

<Section title="Indeterminate">
	<SectionDescription>
		The <Code>indeterminate</Code> prop is used to indicate a 'partial' checking. When set to true, the
		<Code>checked</Code> state will be locked at false.
	</SectionDescription>
	<SectionDemo>
		<Demo>
			<div>
				<Checkbox
					label="Fruits"
					checked={group.length == fruits.length}
					indeterminate={group.length > 0 && group.length < fruits.length}
					on:change={(ev) => {
						group = ev.detail ? fruits : [];
					}}
				/>
				<div class="ml-6 mt-3 space-y-3">
					{#each fruits as fruit}
						<Checkbox label={fruit} value={fruit} bind:group />
					{/each}
				</div>
			</div>
		</Demo>
	</SectionDemo>
</Section>
