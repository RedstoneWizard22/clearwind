<script lang="ts">
	import { getRandomId } from '$lib/scripts/random-id';
	import type { RCOProp, ClearwindContext, COProp } from '$lib/_defines/types';
	import type { IconifyIcon } from '@iconify/svelte';
	import Icon from '@iconify/svelte';
	import { getContext, onMount } from 'svelte';
	import type { TabBarContext } from './TabBar.svelte';

	/// Get theme
	const clearwindContext = getContext<ClearwindContext>('clearwind');

	/// Props
	export let rco: RCOProp | undefined = undefined;
	export let co: COProp<'Tab'> | undefined = undefined;

	export let leftIcon: IconifyIcon | undefined = undefined;
	export let rightIcon: IconifyIcon | undefined = undefined;
	export let label: string | undefined = undefined;
	export let disabled: boolean = false;
	export let id = getRandomId();

	/// Styling
	$: classes = clearwindContext.getClasses({
		component: 'Tab',
		rcoTarget: 'root',
		info: {
			variant: $infoStore.variant,
			size: $infoStore.size,
			orientation: $infoStore.orientation,
			expand: $infoStore.expand,
			isActive,
			isDisabled: disabled,
			hasLabel: label !== undefined,
			hasLeftIcon: leftIcon !== undefined,
			hasRightIcon: rightIcon !== undefined,
		},
		rco,
		co,
		requiredClasses: (info) => {
			return {
				root: info.expand ? 'flex-grow' : '',
				leftIcon: 'inline',
				rightIcon: 'inline',
			};
		},
	});

	/// Logic
	const context = getContext<TabBarContext>('clearwind-tabbar');

	const activeTabStore = context.activeTab;
	const infoStore = context.info;

	$: isActive = $activeTabStore === id;

	onMount(() => {
		context.register(id);

		return () => {
			context.unregister(id);
		};
	});
</script>

<!-- part: root -->
<button class={classes.root} on:click={() => !disabled && context.setActive(id)}>
	<!-- part: lefticon -->
	{#if leftIcon}
		<Icon inline icon={leftIcon} class={classes.leftIcon} />
	{/if}

	<!-- part: label -->
	{#if label}
		<span class={classes.label}>{label}</span>
	{/if}

	<!-- part: righticon -->
	{#if rightIcon}
		<Icon inline icon={rightIcon} class={classes.rightIcon} />
	{/if}
</button>
