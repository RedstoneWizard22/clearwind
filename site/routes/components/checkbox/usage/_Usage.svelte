<script lang="ts">
	import { Checkbox } from '$lib/components';
	import ColorSwatch from '$site/components/ColorSwatch.svelte';
	import Switch from '$site/components/temp/Switch.svelte';
	import Demo from '$site/components/layout/Demo.svelte';
	import TextInput from '$site/components/temp/TextInput.svelte';
	import SnapSlider from '$site/components/temp/SnapSlider.svelte';
	import Heading from '$site/components/layout/Heading.svelte';

	let indeterminate = false;
	let disabled = false;
	let checked = true;
	let label = 'I want free cookies';

	const sizes = ['xs', 'sm', 'md', 'lg'];
	let selSize = 1;

	let rco = '';
</script>

<Heading sub title="Usage" />
<Demo>
	<Checkbox
		modifiers={{ size: sizes[selSize] }}
		name="checkbox"
		bind:checked
		{rco}
		{label}
		{indeterminate}
		{disabled}
	/>
	<svelte:fragment slot="controls">
		<TextInput title="Label" bind:value={label} />
		<SnapSlider title="Size" options={sizes} bind:selected={selSize} />
		<Switch label="Indeterminate" name="indeterminate" bind:checked={indeterminate} />
		<Switch label="Disabled" name="disabled" bind:checked={disabled} />
		<ColorSwatch selected={'$color-blue'} on:change={(ev) => (rco = ev.detail)} />
	</svelte:fragment>
</Demo>
