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
	import Revealer from '$lib/components/Revealer/Revealer.svelte';
	import TabBar from '$lib/components/TabBar/TabBar.svelte';
	import Tab from '$lib/components/TabBar/Tab.svelte';
	import Tooltip from '$lib/components/Tooltip/Tooltip.svelte';
	import FloatingTooltip from '$lib/components/Tooltip/FloatingTooltip.svelte';
	import Window from '$lib/components/Window/Window.svelte';
	import WindowTab from '$lib/components/Window/WindowTab.svelte';
	import fileTypeSvelte from '@iconify/icons-vscode-icons/file-type-svelte';
	import fileTypeTypescriptOfficial from '@iconify/icons-vscode-icons/file-type-typescript-official';
	import fileTypeCss from '@iconify/icons-vscode-icons/file-type-css';

	let leftDrawerOpen = false;
	let rightDrawerOpen = false;
	let topDrawerOpen = false;
	let bottomDrawerOpen = false;

	let scrollLockOn = false;

	let revealer1Open = false;
	let revealer2Open = false;
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

	<h3>Revealer</h3>

	<Button on:click={() => (revealer1Open = !revealer1Open)}>Revealer 1</Button>
	<Revealer open={revealer1Open}>
		<div class="bg-gray-50 p-20">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptate delectus eum ad
			perspiciatis minus assumenda consequatur magni sint dolorum repellat aut sit aliquam quae
			ducimus, exercitationem maxime quo recusandae.
		</div>
	</Revealer>
	<div class="h-5" />
	<Button on:click={() => (revealer2Open = !revealer2Open)}>Revealer 2</Button>
	<Revealer open={revealer2Open} minHeight={100}>
		<div class="bg-gray-50 p-20">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptate delectus eum ad
			perspiciatis minus assumenda consequatur magni sint dolorum repellat aut sit aliquam quae
			ducimus, exercitationem maxime quo recusandae.
		</div>
	</Revealer>

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

	<h3>TabBar</h3>

	<TabBar position="right" on:change={(ev) => console.log(`tab ${ev.detail} selected`)}>
		<Tab label="Tab 1" id="tab1" />
		<Tab label="Tab 2" id="tab2" />
		<Tab label="Tab 3" id="tab3" />
	</TabBar>

	<TabBar position="center" expand>
		<Tab label="Tab 1" leftIcon={copyIcon} />
		<Tab label="Tab 2" />
		<Tab label="Tab 3" />
	</TabBar>

	<TabBar variant="outline">
		<Tab label="Tab 1" />
		<Tab label="Tab 2" />
		<Tab label="Tab 3" />
	</TabBar>

	<TabBar position="center" variant="pill">
		<Tab label="Tab 1" />
		<Tab label="Tab 2" />
		<Tab label="Tab 3" />
	</TabBar>

	<TabBar orientation="vertical">
		<Tab label="Tab 1" />
		<Tab label="Tab 2" />
		<Tab label="Tab 3" />
	</TabBar>

	<TabBar orientation="vertical" variant="outline">
		<Tab label="Tab 1" />
		<Tab label="Tab 2" />
		<Tab label="Tab 3" />
	</TabBar>

	<TabBar orientation="vertical" variant="pill">
		<Tab label="Tab 1" />
		<Tab label="Tab 2" />
		<Tab label="Tab 3" />
	</TabBar>

	<h3>Tooltip</h3>

	<Tooltip label="hello">
		<Button>Hover me</Button>
	</Tooltip>

	<Tooltip label="hello" placement="right-start">
		<Button>Hover me</Button>
	</Tooltip>

	<Tooltip label="hello" open openDelay={200} closeDelay={500} placement="top-end">
		<Button>Always open</Button>
	</Tooltip>

	<FloatingTooltip label="float">
		<Button>Floating Tooltip</Button>
	</FloatingTooltip>

	<h3>Window</h3>

	<Window>
		<WindowTab title="Demo.svelte" icon={fileTypeSvelte}>
			<div class="p-8">Demo goeth here!</div>
		</WindowTab>
		<WindowTab title="Demo2.ts" icon={fileTypeTypescriptOfficial}>
			<div class="p-8">Demo2 goeth here!</div>
		</WindowTab>
		<WindowTab title="Demo3.css" icon={fileTypeCss}>
			<div class="p-8">Demo3 goeth here!</div>
		</WindowTab>
	</Window>

	<Window rco="mt-4" />

	<div class="my-72" />
</main>

<svelte:body use:scrollLock={{ active: scrollLockOn }} />

<style lang="postcss">
	h3 {
		@apply my-6 text-2xl font-bold text-gray-900;
	}
</style>
