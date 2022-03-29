<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import Header from './Header.svelte';
	import { scrollLock } from '$lib/actions';
	import { fade } from 'svelte/transition';

	let navFloat = true;
	let navOpen = false;
	const navTx = tweened(navOpen ? 0 : -100, {
		duration: 400,
		easing: expoOut,
	});

	onMount(() => {
		const onResize = () => {
			if (window.innerWidth > 768 && navFloat) {
				navFloat = false;
				navOpen = true;
			} else if (window.innerWidth <= 768 && !navFloat) {
				navFloat = true;
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

	$: {
		if (navOpen) {
			navTx.set(0);
		} else {
			navTx.set(-100);
		}
	}
</script>

<div>
	<!-- backdrop -->
	{#if navFloat && navOpen}
		<div
			class="fixed z-20 h-full w-full bg-gray-900 opacity-50"
			transition:fade={{ easing: expoOut }}
			on:click={() => (navOpen = false)}
		/>
	{/if}
	<!-- header -->
	<div class="fixed top-0 left-0 z-30 h-16 w-full bg-white px-5 shadow 2xl:px-52">
		<Header {navOpen} on:navtoggle={() => (navOpen = !navOpen)} />
	</div>
	<div class="flex 2xl:px-52">
		<!-- navbar -->
		<nav
			class="fixed top-0 left-0 z-20 w-64 flex-none bg-white md:sticky md:h-auto md:bg-transparent"
			style={`transform: translateX(${$navTx}%);`}
		>
			<div class="top-0 left-0 h-screen pt-16 md:sticky">Navbar!</div>
		</nav>
		<!-- content -->
		<main class="mt-16 flex-grow">
			<slot />
		</main>
	</div>
</div>

<svelte:body use:scrollLock={{ active: navOpen && navFloat }} />
