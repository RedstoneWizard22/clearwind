<script>
	import ClearwindProvider from '$lib/components/ClearwindProvider/ClearwindProvider.svelte';
	import theme from '$lib/themes/modern/index';

	import '../app.css';
	import '@fontsource/heebo/variable.css';
</script>

<ClearwindProvider {theme}>
	<slot />
</ClearwindProvider>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/prism-themes@1.9.0/themes/prism-one-light.min.css"
	/>
</svelte:head>
