<script lang="ts">
	import { Switch } from '$lib/components';
	import ColorSwatch from '$site/components/ColorSwatch.svelte';
	import Demo from '$site/components/layout/Demo.svelte';
	import TextInput from '$site/components/temp/TextInput.svelte';
	import SnapSlider from '$site/components/temp/SnapSlider.svelte';
	import Heading from '$site/components/layout/Heading.svelte';
	import Description from '$site/components/layout/Description.svelte';
	import Link from '$site/components/temp/Link.svelte';

	let disabled = false;
	let checked = true;
	let label = 'I want free cookies';

	const sizes = ['xs', 'sm', 'md', 'lg'];
	let selSize = 1;

	let rco = '';
</script>

<Heading sub title="Usage" />
<Description
	>The switch is an alternative to the <Link href="/components/checkbox" target="_self"
		>Checkbox</Link
	>, being almost identical in functionality.</Description
>
<Demo>
	<Switch
		modifiers={{ size: sizes[selSize] }}
		name="checkbox"
		bind:checked
		{rco}
		{label}
		{disabled}
	/>
	<svelte:fragment slot="controls">
		<TextInput title="Label" bind:value={label} />
		<SnapSlider title="Size" options={sizes} bind:selected={selSize} />
		<Switch label="Disabled" name="disabled" bind:checked={disabled} />
		<ColorSwatch selected={'$color-blue'} on:change={(ev) => (rco = ev.detail)} />
	</svelte:fragment>
</Demo>
