<script>
	import ThemeProvider from '$lib/components/ThemeProvider/ThemeProvider.svelte';
	import theme from '$lib/themes/modern/index';

	import '../app.css';
	import '@fontsource/inter/variable.css';
</script>

<ThemeProvider {theme}>
	<slot />
</ThemeProvider>
