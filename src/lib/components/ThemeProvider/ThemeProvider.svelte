<script lang="ts">
	import type { Theme } from '$lib/themes/theme-types';
	import { setContext } from 'svelte';

	export let theme: Theme;

	$: setContext('theme', theme);
</script>

<slot />
