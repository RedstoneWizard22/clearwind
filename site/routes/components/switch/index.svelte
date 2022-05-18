<script>
	import ComponentPage from '$site/components/layout/ComponentPage.svelte';

	import Usage from './usage/_index.svelte';
	import Theming from './theming/_index.svelte';
</script>

<ComponentPage name="Switch" description="An alternative to the checkbox">
	<Usage slot="usage" />
	<Theming slot="theming" />
</ComponentPage>
