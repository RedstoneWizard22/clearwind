<script lang="ts" context="module">
	export type TabBarContext = {
		register: (id: string) => void;
		unregister: (id: string) => void;
		setActive: (id: string) => void;
		info: Writable<{
			variant: string;
			size: string;
			expand: boolean;
			position: 'left' | 'right' | 'center';
			orientation: 'vertical' | 'horizontal';
		}>;
		activeTab: Writable<string>;
	};
</script>

<script lang="ts">
	import type { RCOProp, ClearwindContext, COProp } from '$lib/_defines/types';
	import { createEventDispatcher, getContext, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	/// Get theme
	const clearwindContext = getContext<ClearwindContext>('clearwind');

	/// Props
	export let rco: RCOProp | undefined = undefined;
	export let co: COProp<'TabBar'> | undefined = undefined;
	export let variant: string = 'default';
	export let size: string = 'md';

	export let expand: boolean = false;
	export let position: 'left' | 'right' | 'center' = 'left';
	export let orientation: 'vertical' | 'horizontal' = 'horizontal';
	export let activeTab: string | undefined = undefined;
	export let initialTab: string | undefined = undefined;

	/// Styling
	$: classes = clearwindContext.getClasses({
		component: 'TabBar',
		rcoTarget: 'root',
		info: {
			variant,
			size,
			position,
			orientation,
			expand,
		},
		rco,
		co,
		requiredClasses: (info) => {
			const vert = info.orientation === 'vertical';

			return {
				root: 'flex' + (vert ? ' flex-col w-max' : ''),
				tabscontainer: 'flex' + (vert ? ' flex-col' : '') + (info.expand ? ' flex-grow' : ''),
				spacer: 'flex-1',
			};
		},
	});

	/// Logic
	const dispatch = createEventDispatcher();
	const tabIds: string[] = [];

	let activeTabStore = writable(activeTab ?? initialTab);
	let infoStore: TabBarContext['info'] = writable();

	$: infoStore.set({
		variant,
		size,
		expand,
		position,
		orientation,
	});

	// If activetab is defined the user wants programmatic control
	$: if (activeTab !== undefined) {
		activeTabStore.set(activeTab);
		dispatch('change', activeTab);
	}

	setContext<TabBarContext>('clearwind-tabbar', {
		register: (id: string) => {
			if (tabIds.indexOf(id) === -1) {
				tabIds.push(id);
				// If this is the first registered tab, and no default has been specified, make it active
				if (tabIds.length === 1 && activeTab === undefined && initialTab === undefined) {
					activeTabStore.set(id);
				}
			} else {
				console.warn(`TabBar: Tab with id "${id}" already registered.`);
			}
		},
		unregister: (id: string) => {
			const index = tabIds.indexOf(id);
			if (index !== -1) {
				tabIds.splice(index, 1);
			} else {
				console.warn(`TabBar: Tab with id "${id}" not registered.`);
			}
		},
		setActive: (id: string) => {
			if (tabIds.indexOf(id) === -1) {
				console.warn(`TabBar: Tab with id "${id}" not registered.`);
			} else {
				// If activeTab is defined do noting as the user wants programmatic control
				if (activeTab === undefined) {
					activeTabStore.set(id);
					dispatch('change', id);
				}
			}
		},
		info: infoStore,
		activeTab: activeTabStore,
	});
</script>

<!-- part: root -->
<div class={classes.root}>
	<!-- part: spacer -->
	{#if (position == 'right' || position == 'center') && !expand}
		<div class={classes.spacer} />
	{/if}

	<!-- part: tabscontainer -->
	<div class={classes.tabscontainer}>
		<slot />
	</div>

	<!-- part: spacer -->
	{#if (position == 'left' || position == 'center') && !expand}
		<div class={classes.spacer} />
	{/if}
</div>
