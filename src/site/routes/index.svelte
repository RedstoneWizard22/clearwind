<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Overlay from '$lib/components/Overlay/Overlay.svelte';

	import copyIcon from '@iconify/icons-akar-icons/copy';
	import checkIcon from '@iconify/icons-akar-icons/check';
	import Loader from '$lib/components/Loader/Loader.svelte';
	import Kbd from '$lib/components/Kbd/Kbd.svelte';
	import Switch from '$lib/components/Switch/Switch.svelte';
	import Drawer from '$lib/components/Drawer/Drawer.svelte';

	import { scrollLock } from '$lib/actions';
	import Accordion from '$lib/components/Accordion/Accordion.svelte';
	import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';

	let leftDrawerOpen = false;
	let rightDrawerOpen = false;
	let topDrawerOpen = false;
	let bottomDrawerOpen = false;

	let scrollLockOn = false;
</script>

<main class="px-8 pt-2 text-gray-600">
	<h3>Overlays</h3>
	<div class="relative mx-auto h-max w-max overflow-hidden rounded p-2 shadow">
		<Overlay active>
			<span class="font-bold text-black">Locked DLC</span>
		</Overlay>
		<p>Hello</p>
		<p class="mt-10">I'm jeeve stobs</p>
		<input type="range" />
	</div>
	<br />
	<div class="relative mx-auto h-max w-max overflow-hidden rounded p-2 shadow">
		<Overlay active variant="dark" />
		<p>Hello</p>
		<p class="mt-10">I'm jeeve stobs</p>
		<input type="range" />
	</div>
	<br />
	<div class="relative mx-auto h-max w-max overflow-hidden rounded p-2 shadow">
		<Overlay active rco="bg-gradient-to-br from-sky-400 to-indigo-400" />
		<p>Hello</p>
		<p class="mt-10">I'm jeeve stobs</p>
		<input type="range" />
	</div>

	<h3>Buttons!</h3>
	<Button>Settings</Button>
	<Button variant="light">Settings</Button>
	<Button variant="ghost">Settings</Button>
	<Button variant="outline">Settings</Button>
	<br />
	<br />
	<Button leftIcon={copyIcon}>Copy</Button>
	<Button rightIcon={checkIcon}>Complete</Button>
	<br />
	<br />
	<Button variant="light" leftIcon={copyIcon} />
	<br />
	<br />
	<Button loading>Loading</Button>
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
	<Button disabled>Settings</Button>
	<Button variant="light" disabled>Settings</Button>
	<Button variant="ghost" disabled>Settings</Button>
	<Button variant="outline" disabled>Settings</Button>
	<br />
	<br />
	<Button bco="shadow-lg shadow-var-500">With bco prop</Button>

	<h3>Loaders</h3>
	<Loader />
	<Loader variant="dots" />
	<Loader variant="bars" />
	<Loader variant="balls" />
	<Loader variant="grid" />
	<Button loaderVariant="grid" loading>Apply</Button>
	<Button>Settings</Button>

	<h3>Kbd</h3>
	<span class="text-sm"><Kbd>Ctrl</Kbd> + <Kbd>K</Kbd></span>
	<br />
	<br />
	<span class="text-xs"><Kbd>Ctrl + K</Kbd></span>

	<h3>Switch</h3>
	<Switch />
	<br />
	<Switch checked rco="var-red" label="I agree to sell my soul" />
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

	<h3>Drawer</h3>
	<Button on:click={() => (leftDrawerOpen = true)}>Left drawer</Button>
	<Button on:click={() => (rightDrawerOpen = true)}>Right drawer</Button>
	<Button on:click={() => (topDrawerOpen = true)}>Top drawer</Button>
	<Button on:click={() => (bottomDrawerOpen = true)}>Bottom drawer</Button>
	<Drawer open={leftDrawerOpen} on:close={() => (leftDrawerOpen = false)}>
		<div class="m-20">Left!</div>
	</Drawer>
	<Drawer open={rightDrawerOpen} position="right" on:close={() => (rightDrawerOpen = false)}>
		<div class="m-20">Right!</div>
	</Drawer>
	<Drawer open={topDrawerOpen} position="top" on:close={() => (topDrawerOpen = false)}>
		<div class="m-20">Top!</div>
	</Drawer>
	<Drawer open={bottomDrawerOpen} position="bottom" on:close={() => (bottomDrawerOpen = false)}>
		<div class="m-20">Bottom!</div>
	</Drawer>

	<h3>Action tests</h3>
	<Button
		on:click={() => {
			scrollLockOn = !scrollLockOn;
		}}
	>
		{scrollLockOn ? 'Unlock' : 'Lock'} scroll
	</Button>

	<h3>Accordion (WIP!)</h3>

	<Accordion>
		<AccordionItem>
			<span slot="head">Accordion 1</span>
			<span slot="body">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minima impedit dolorum
				ipsum fugiat provident itaque tempora fuga nesciunt hic! Placeat iusto sit iure consequatur
				voluptate quod consectetur iste vero.
			</span>
		</AccordionItem>
		<AccordionItem>
			<span slot="head">Accordion 2</span>
			<span slot="body">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minima impedit dolorum
				ipsum fugiat provident itaque tempora fuga nesciunt hic! Placeat iusto sit iure consequatur
				voluptate quod consectetur iste vero.
			</span>
		</AccordionItem>
	</Accordion>

	<div class="my-72" />
</main>

<svelte:body use:scrollLock={{ active: scrollLockOn }} />

<style lang="postcss">
	h3 {
		@apply my-6 text-2xl font-bold text-gray-900;
	}
</style>
