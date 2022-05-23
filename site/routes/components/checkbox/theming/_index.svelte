<script>
	import Heading from '$site/components/layout/Heading.svelte';

	import Info from '$site/components/layout/Info.svelte';
	import info from './info';
</script>

<Heading compact title="Info" />
<Info data={info} />
