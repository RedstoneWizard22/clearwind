<script lang="ts" context="module">
	import type { IconifyIcon } from '@iconify/svelte';
	import { writable, type Writable } from 'svelte/store';

	type ID = string | number;

	type WindowTabDetails = {
		title: string;
		icon?: IconifyIcon;
		id?: ID;
	};

	export type WindowContext = {
		register: (options: WindowTabDetails) => ID;
		unregister: (id: ID) => void;
		update: (id: ID, options: WindowTabDetails) => void;
		activeTab: Writable<ID>;
	};
</script>

<script lang="ts">
	import type { RCOProp, ClearwindContext, COProp } from '$lib/themes/theme-types';
	import Icon from '@iconify/svelte';
	import { createEventDispatcher, getContext, setContext } from 'svelte';

	/// Get theme
	const clearwindContext = getContext<ClearwindContext>('clearwind');

	/// Props
	export let rco: RCOProp | undefined = undefined;
	export let co: COProp<'Window'> | undefined = undefined;
	export let variant = 'default';
	export let size = 'md';

	export let selected: ID | undefined = undefined;

	/// Styling
	$: classes = clearwindContext.getClasses({
		component: 'Window',
		rcoTarget: 'root',
		info: {
			variant,
			size,
		},
		rco,
		co,
		requiredClasses: {
			head: 'flex',
			buttoncontainer: 'flex items-center',
			tabcontainer: 'flex-grow w-max overflow-x-auto whitespace-nowrap',
			tabicon: 'inline',
			tab: 'inline-flex items-center cursor-pointer',
			activetab: 'inline-flex items-center cursor-pointer',
		},
	});

	/// Logic
	const tabs: (WindowTabDetails & { id: ID })[] = [];

	const activeTab = writable(selected ?? 0);
	$: activeTab.set(selected ?? 0);

	let currentId = 0;
	setContext('clearwind-window', {
		register: (options: WindowTabDetails) => {
			const tabId = options.id ?? currentId++;

			tabs[tabs.length] = {
				id: tabId,
				icon: options.icon,
				title: options.title,
			};

			return tabId;
		},
		unregister: (id: ID) => {
			const index = tabs.findIndex((tab) => tab.id === id);
			if (index !== -1) {
				tabs.splice(index, 1);
			}
		},
		update: (id: ID, options: WindowTabDetails) => {
			const index = tabs.findIndex((tab) => tab.id === id);
			if (index !== -1) {
				tabs[index] = {
					id: options.id ?? tabs[index].id,
					icon: options.icon,
					title: options.title,
				};
			}
		},
		activeTab,
	});

	const dispatch = createEventDispatcher();
	$: dispatch('tabselected', $activeTab);
</script>

<!-- part: root -->
<div class={classes.root}>
	<!-- part: head -->
	<div class={classes.head}>
		<!-- part: buttoncontainer -->
		<div class={classes.buttoncontainer}>
			<!-- part: close -->
			<div class={classes.close} />
			<!-- part: minimise -->
			<div class={classes.minimise} />
			<!-- part: maximise -->
			<div class={classes.maximise} />
		</div>

		<!-- part: tabcontainer -->
		<div class={classes.tabcontainer}>
			{#each tabs as tab}
				<!-- part: tab || activetab -->
				<div
					class={tab.id == $activeTab ? classes.activetab : classes.tab}
					on:click={() => selected === undefined && activeTab.set(tab.id)}
				>
					{#if tab.icon}
						<!-- part: tabicon -->
						<Icon icon={tab.icon} class={classes.tabicon} />
					{/if}
					<!-- part: tabtitle -->
					<span class={classes.tabtitle}>{tab.title}</span>
				</div>
			{/each}
		</div>
	</div>

	<!-- part: body -->
	<div class={classes.body}>
		<slot>
			<!-- part: placeholder -->
			<div class={classes.placeholder} />
		</slot>
	</div>
</div>
