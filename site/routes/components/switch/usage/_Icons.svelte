<script>
	import Switch from '$lib/components/Switch/Switch.svelte';
	import Demo from '$site/components/layout/Demo.svelte';
	import Description from '$site/components/layout/Description.svelte';
	import Heading from '$site/components/layout/Heading.svelte';
	import Code from '$site/components/temp/Code.svelte';
	import SnapSlider from '$site/components/temp/SnapSlider.svelte';

	import moonFill from '@iconify/icons-akar-icons/moon-fill.js';
	import sunFill from '@iconify/icons-akar-icons/sun-fill.js';

	const sizes = ['xs', 'sm', 'md', 'lg'];
	let selSize = 1;

	let disabled = false;

	$: modifiers = {
		size: sizes[selSize],
	};
</script>

<Heading sub title="Icons" />
<Description>
	You can add icons to the switch using the <Code>checkIcon</Code> and <Code>uncheckIcon</Code> props.
	Note both have to be provided. These can either be placed on the thumb or the track, but not both.
	To choose a placement use the <Code>iconPlacement</Code> prop.
</Description>
<Demo>
	<div class="space-y-3">
		<Switch label="No icons" {modifiers} {disabled} />
		<Switch checkIcon={moonFill} uncheckIcon={sunFill} label="Thumb icons" {modifiers} {disabled} />
		<Switch
			iconPlacement="track"
			checkIcon={moonFill}
			uncheckIcon={sunFill}
			label="Track Icons"
			{modifiers}
			{disabled}
		/>
	</div>
	<svelte:fragment slot="controls">
		<SnapSlider title="Size" options={sizes} bind:selected={selSize} />
		<Switch label="Disabled" name="disabled" bind:checked={disabled} />
	</svelte:fragment>
</Demo>
