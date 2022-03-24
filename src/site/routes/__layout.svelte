<script>
	import ClearwindProvider from '$lib/components/ClearwindProvider/ClearwindProvider.svelte';
	import theme from '$lib/themes/modern/index';

	import '../app.css';
	import '@fontsource/inter/variable.css';
</script>

<ClearwindProvider {theme}>
	<slot />
</ClearwindProvider>
