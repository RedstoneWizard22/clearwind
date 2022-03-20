<script lang="ts">
	import { createClasses } from '$lib/themes/theme-tools';
	import type { ButtonParts, Theme } from '$lib/themes/theme-types';
	import Icon from '@iconify/svelte';
	import type { IconifyIcon } from '@iconify/svelte';
	import { getContext } from 'svelte';
	import Overlay from '../Overlay/Overlay.svelte';
	import type { LoaderVariants } from '$lib/components/Loader/Loader.svelte';
	import Loader from '$lib/components/Loader/Loader.svelte';

	/// Get theme
	const theme = getContext<Theme>('theme');

	/// Props
	export let bco: string | undefined = undefined;
	export let co: Partial<Record<ButtonParts, string>> | undefined = undefined;

	export let variant: string = theme.Button.defaults.variant;
	export let size: string = theme.Button.defaults.size;
	export let compact = false;
	export let disabled = false;
	export let loading = false;
	export let leftIcon: IconifyIcon | undefined = undefined;
	export let rightIcon: IconifyIcon | undefined = undefined;
	export let noAnimate = false;
	export let loaderPosition: 'left' | 'right' = 'left';
	export let loaderVariant: LoaderVariants = 'spinner';

	/// Styling
	let baseClass = '';
	let contentClass = '';
	let leftIconClass = '';
	let rightIconClass = '';
	$: {
		const classes = createClasses<ButtonParts>(['base', 'content', 'leftIcon', 'rightIcon']);
		const info = {
			variant,
			size,
			isCompact: compact,
			isDisabled: disabled,
			isLoading: loading,
			hasLeftIcon: leftIcon !== undefined || (loading && loaderPosition == 'left'),
			hasRightIcon: rightIcon !== undefined || (loading && loaderPosition == 'right'),
			hasContent: $$slots.default !== undefined,
		};

		// Apply theme
		theme.Button.apply(info, classes);
		theme.Button.extend?.(info, classes);
		bco && classes.base.override(bco);
		co?.base && classes.base.override(co.base);
		co?.content && classes.content.override(co.content);
		co?.leftIcon && classes.leftIcon.override(co.leftIcon);
		co?.rightIcon && classes.rightIcon.override(co.rightIcon);

		// Apply necessary classes
		classes.base.override('relative overflow-hidden');

		baseClass = classes.base.get();
		contentClass = classes.content.get();
		leftIconClass = classes.leftIcon.get();
		rightIconClass = classes.rightIcon.get();
	}
</script>

<button
	class={baseClass}
	class:border={variant == 'outline'}
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
	<Overlay variant="light" active={loading} opacity={0.6} />
	<div>
		{#if leftIcon && (!loading || loaderPosition == 'right')}
			<Icon inline icon={leftIcon} class={leftIconClass} style="display: inline;" />
		{/if}
		{#if loading && loaderPosition == 'left'}
			<span class={leftIconClass}>
				<Loader variant={loaderVariant} />
			</span>
		{/if}
		<slot class={contentClass} />
		{#if loading && loaderPosition == 'right'}
			<span class={rightIconClass}>
				<Loader variant={loaderVariant} />
			</span>
		{/if}
		{#if rightIcon && (!loading || loaderPosition == 'left')}
			<Icon inline icon={rightIcon} class={rightIconClass} style="display: inline;" />
		{/if}
	</div>
</button>
