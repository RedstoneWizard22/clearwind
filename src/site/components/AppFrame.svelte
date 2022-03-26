<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import Header from './Header.svelte';
	import { scrollLock } from '$lib/actions';

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
	<div
		class="fixed z-20 h-full w-full opacity-0"
		class:hidden={!navFloat || !navOpen}
		on:click={() => (navOpen = false)}
	/>
	<!-- header -->
	<div class="fixed top-0 left-0 z-20 h-16 w-full border-b bg-white">
		<Header {navOpen} on:navtoggle={() => (navOpen = !navOpen)} />
	</div>
	<!-- navbar -->
	<div
		class="fixed top-0 left-0 z-20 mt-16 h-full w-64 border-r bg-white"
		style={`transform: translateX(${$navTx}%);`}
	>
		<div class="m-4">Navbar!</div>
	</div>
	<!-- content -->
	<div class="mt-16 ml-0 md:ml-64">
		<slot />
	</div>
</div>

<svelte:body use:scrollLock={{ active: navOpen && navFloat }} />
