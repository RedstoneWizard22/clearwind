<script lang="ts">
	import ComponentPage from '$site/components/layout/ComponentPage.svelte';

	import Usage from './usage/_index.svelte';
	import Theming from './theming/_index.svelte';
</script>

<ComponentPage name="Checkbox" description="Get boolean input from a user">
	<Usage slot="usage" />
	<Theming slot="theming" />
</ComponentPage>
