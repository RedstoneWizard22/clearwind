<script lang="ts">
	import { Checkbox } from '$lib/components';
	import Demo from '$site/components/layout/Demo.svelte';
	import Description from '$site/components/layout/Description.svelte';
	import Heading from '$site/components/layout/Heading.svelte';
	import Code from '$site/components/temp/Code.svelte';
	import Link from '$site/components/temp/Link.svelte';

	import faceHappy from '@iconify/icons-akar-icons/face-happy.js';
	import faceNeutral from '@iconify/icons-akar-icons/face-neutral.js';
</script>

<Heading sub title="Custom icons" />
<Description>
	By default the <Code>checked</Code> and <Code>indeterminate</Code>
	<Link href="/" target="_blank">theme icons</Link> are used. To change the icons one-off use the <Code
		>checkIcon</Code
	> and <Code>indeterminateIcon</Code> props.
</Description>
<Demo>
	<div class="space-y-3">
		<Checkbox checkIcon={faceHappy} label="Regular" />
		<Checkbox indeterminateIcon={faceNeutral} label="Indeterminate" indeterminate />
	</div>
</Demo>
