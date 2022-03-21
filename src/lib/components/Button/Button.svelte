<script lang="ts">
	import type { RCOProp, ClearwindContext, COProp } from '$lib/themes/theme-types';
	import Icon from '@iconify/svelte';
	import type { IconifyIcon } from '@iconify/svelte';
	import { getContext } from 'svelte';
	import Overlay from '../Overlay/Overlay.svelte';
	import type { LoaderVariants } from '$lib/components/Loader/Loader.svelte';
	import Loader from '$lib/components/Loader/Loader.svelte';

	/// Get theme
	const ClearwindContext = getContext<ClearwindContext>('clearwind');

	/// Props
	export let rco: RCOProp | undefined = undefined;
	export let co: COProp<'Button'> | undefined = undefined;

	export let variant: string = 'default';
	export let size: string = 'md';
	export let compact = false;
	export let disabled = false;
	export let loading = false;
	export let leftIcon: IconifyIcon | undefined = undefined;
	export let rightIcon: IconifyIcon | undefined = undefined;
	export let noAnimate = false;
	export let loaderPosition: 'left' | 'right' = 'left';
	export let loaderVariant: LoaderVariants = 'spinner';

	/// Styling
	$: classes = ClearwindContext.getClasses({
		component: 'Button',
		rcoTarget: 'base',
		info: {
			variant: variant,
			size: size,
			isCompact: compact,
			isDisabled: disabled,
			isLoading: loading,
			hasContent: $$slots.default !== undefined,
			hasLeftIcon: leftIcon !== undefined || (loading && loaderPosition === 'left'),
			hasRightIcon: rightIcon !== undefined || (loading && loaderPosition === 'right'),
		},
		rco,
		co,
		requiredClasses: {
			base: 'relative overflow-hidden',
		},
	});
</script>

<button
	class={classes.base}
	on:click
	on:click={(e) => {
		// Animate the button
		!noAnimate &&
			e.currentTarget.animate(
				[
					{ transform: 'translateY(0px)' },
					{ transform: 'translateY(1.5px)' },
					{ transform: 'translateY(0px)' },
				],
				{
					duration: 100,
					fill: 'forwards',
				}
			);
	}}
	{disabled}
	{...$$restProps}
>
	<Overlay active={loading} opacity={0.6} />
	<div>
		{#if loading && loaderPosition == 'left'}
			<span class={classes.leftIcon}>
				<Loader variant={loaderVariant} />
			</span>
		{:else if leftIcon}
			<Icon inline icon={leftIcon} class={classes.leftIcon} style="display: inline;" />
		{/if}

		<slot class={classes.content} />

		{#if loading && loaderPosition == 'right'}
			<span class={classes.rightIcon}>
				<Loader variant={loaderVariant} />
			</span>
		{:else if rightIcon}
			<Icon inline icon={rightIcon} class={classes.rightIcon} style="display: inline;" />
		{/if}
	</div>
</button>
