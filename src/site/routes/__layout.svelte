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

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/prism-themes@1.9.0/themes/prism-one-light.min.css"
	/>
</svelte:head>
