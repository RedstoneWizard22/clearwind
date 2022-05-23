<!--
  @component
  Responsive shell for the clearwind site featuring a navbar and header
  Does not contain navbar/header content, see accompanying components
-->
<script lang="ts">
	import { onMount } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	import Header from './Header.svelte';
	import Navbar from './Navbar.svelte';

	/// Logic
	let mobile = false;
	let navOpen = false;

	const navTx = tweened(navOpen ? 1 : 0, {
		duration: 400,
		easing: expoOut,
	});

	$: navTx.set(navOpen ? 1 : 0);

	onMount(() => {
		const onResize = () => {
			if (window.innerWidth > 768 && mobile) {
				mobile = false;
				navOpen = true;
			} else if (window.innerWidth <= 768 && !mobile) {
				mobile = true;
				navOpen = false;
			}
		};
		window.addEventListener('resize', onResize);
		onResize();
		window.innerWidth > 768 ? (navOpen = true) : (navOpen = false);
		return () => {
			window.removeEventListener('resize', onResize);
		};
	});
</script>

<!-- header -->
<div class="fixed top-0 left-0 z-20 h-14 w-full">
	<Header {navOpen} on:navtoggle={() => (navOpen = !navOpen)} />
</div>

<!-- navbar -->
<nav class="fixed top-0 left-0 h-full w-60 pt-14">
	<Navbar />
</nav>

<!-- body -->
<main class="mt-14 overflow-clip md:ml-60">
	<!-- Page contents -->
	<div
		class="relative z-[1] min-h-screen bg-white"
		style={mobile ? `transform: translateX(${$navTx * 15}rem)` : ''}
	>
		<slot />
	</div>
	<!-- A shade that when clicked closes the navbar (for mobile mode) -->
	{#if mobile && $navTx != 0}
		<div
			class="fixed top-0 left-0 z-50 mt-14 h-full w-full bg-transparent"
			style={`transform: translateX(${$navTx * 15}rem)`}
			on:click={() => (navOpen = false)}
		/>
	{/if}
</main>
