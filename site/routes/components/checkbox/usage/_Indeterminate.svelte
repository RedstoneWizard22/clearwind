<script lang="ts">
	import { Checkbox } from '$lib/components';
	import Demo from '$site/components/layout/Demo.svelte';
	import Description from '$site/components/layout/Description.svelte';
	import Heading from '$site/components/layout/Heading.svelte';
	import Code from '$site/components/temp/Code.svelte';

	const fruits = ['Apple', 'Pear', 'Pineapple'];
	let group = fruits.slice(0, 1);
</script>

<Heading sub title="Indeterminate state" />
<Description>
	The <Code>indeterminate</Code> prop is used to indicate a 'partial' checking. When set to true, the
	<Code>checked</Code> state will be locked at false. You can use the <Code>on:change</Code> event to
	react to changes.
</Description>
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
