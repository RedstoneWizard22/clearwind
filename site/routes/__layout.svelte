<script>
	import { ClearwindProvider } from '$lib/components';
	import theme from '$lib/themes/modern';

	import '../app.css';
	import AppShell from '../components/AppShell/AppShell.svelte';
</script>

<ClearwindProvider {theme}>
	<AppShell>
		<slot />
	</AppShell>
</ClearwindProvider>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/prism-themes@1.9.0/themes/prism-atom-dark.min.css"
	/>
</svelte:head>
