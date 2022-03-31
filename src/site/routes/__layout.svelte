<script>
	import ClearwindProvider from '$lib/components/ClearwindProvider/ClearwindProvider.svelte';
	import theme from '$lib/themes/modern/index';

	import '../app.css';
	import '@fontsource/inter/variable.css';
	import AppFrame from '../components/AppFrame.svelte';
</script>

<ClearwindProvider {theme}>
	<AppFrame>
		<slot />
	</AppFrame>
</ClearwindProvider>
