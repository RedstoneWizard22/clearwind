<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Overlay from '$lib/components/Overlay/Overlay.svelte';

	import copyIcon from '@iconify/icons-akar-icons/copy';
	import checkIcon from '@iconify/icons-akar-icons/check';
	import Loader from '$lib/components/Loader/Loader.svelte';
	import Kbd from '$lib/components/Kbd/Kbd.svelte';
	import Switch from '$lib/components/Switch/Switch.svelte';
</script>

<main class="px-8 text-gray-600">
	<h3>Overlays</h3>
	<div class="relative mx-auto h-max w-max overflow-hidden rounded p-2 shadow">
		<Overlay variant="dark" active>
			<span class="text-white">Locked DLC</span>
		</Overlay>
		<p>Hello</p>
		<p class="mt-10">I'm jeeve stobs</p>
		<input type="range" />
	</div>
	<br />
	<div class="relative mx-auto h-max w-max overflow-hidden rounded p-2 shadow">
		<Overlay active />
		<p>Hello</p>
		<p class="mt-10">I'm jeeve stobs</p>
		<input type="range" />
	</div>
	<br />
	<div class="relative mx-auto h-max w-max overflow-hidden rounded p-2 shadow">
		<Overlay active bco="bg-gradient-to-br from-sky-400 to-indigo-400" />
		<p>Hello</p>
		<p class="mt-10">I'm jeeve stobs</p>
		<input type="range" />
	</div>

	<h3>Buttons!</h3>
	<Button variant="dark">Settings</Button>
	<Button variant="light">Settings</Button>
	<Button variant="ghost">Settings</Button>
	<Button variant="outline">Settings</Button>
	<br />
	<br />
	<Button variant="dark" leftIcon={copyIcon}>Copy</Button>
	<Button variant="dark" rightIcon={checkIcon}>Complete</Button>
	<br />
	<br />
	<Button variant="light" leftIcon={copyIcon} />
	<br />
	<br />
	<Button variant="dark" loading>Loading</Button>
	<Button variant="light" loaderPosition="right" loading>Apply</Button>
	<br />
	<br />
	<Button size="sm">Small</Button>
	<Button size="md">Medium</Button>
	<Button size="lg" rightIcon={checkIcon}>Get started</Button>
	<br />
	<br />
	<Button size="sm" compact>Small</Button>
	<Button size="md" compact>Medium</Button>
	<Button size="lg" compact rightIcon={checkIcon}>Get started</Button>
	<br />
	<br />
	<Button variant="dark" disabled>Settings</Button>
	<Button variant="light" disabled>Settings</Button>
	<Button variant="ghost" disabled>Settings</Button>
	<Button variant="outline" disabled>Settings</Button>

	<h3>Loaders</h3>
	<Loader />
	<Loader variant="dots" />
	<Loader variant="bars" />
	<Loader variant="balls" />
	<Loader variant="grid" />
	<Button variant="dark" loaderVariant="grid" loading>Apply</Button>
	<Button variant="dark">Settings</Button>

	<h3>Kbd</h3>
	<span class="text-sm"><Kbd>Ctrl</Kbd> + <Kbd>K</Kbd></span>
	<br />
	<br />
	<span class="text-xs"><Kbd>Ctrl + K</Kbd></span>

	<h3>Switch</h3>
	<Switch />
	<br />
	<Switch checked bco="var-red" label="I agree to sell my soul" />
	<br />
	<Switch checked disabled label="I agree to sell my soul" />
	<br />
	<Switch disabled label="I agree to sell my soul" />
	<br />
	<Switch size="sm" label="Small switch" />
	<br />
	<Switch size="md" label="Medium switch" />
	<br />
	<Switch size="lg" label="Large switch" />

	<div class="my-72" />
</main>

<style lang="postcss">
	h1 {
		@apply text-4xl font-bold text-gray-900;
	}
	h2 {
		@apply text-3xl font-bold text-gray-900;
	}
	h3 {
		@apply my-6 text-2xl font-bold text-gray-900;
	}
	h4 {
		@apply text-xl font-bold text-gray-900;
	}
</style>
