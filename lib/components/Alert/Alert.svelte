<!--
  @component
  Attract user attention with important static message
-->
<script lang="ts">
	import type { ClearwindContext, RCOProp, COProp, ModifiersProp } from '$lib/_defines/types';
	import Icon from '@iconify/svelte';
	import type { IconifyIcon } from '@iconify/svelte';
	import { createEventDispatcher, getContext } from 'svelte';

	/// Get theme
	const clearwindContext = getContext<ClearwindContext>('clearwind');

	/// Props
	export let rco: RCOProp | undefined = undefined;
	export let co: COProp<'Alert'> | undefined = undefined;
	export let modifiers: ModifiersProp | undefined = undefined;

	/** Alert type: 'success' 'info' 'warning' or 'error' */
	export let type: 'success' | 'info' | 'warning' | 'error' = 'warning';
	/** Title for the alert */
	export let title = '';
	/** True to enable the close button, will dispatch 'close' on click */
	export let withCloseButton = false;
	/** IconifyIcon to use, set to false for no icon */
	export let icon: IconifyIcon | undefined | false = undefined;

	/// Styling
	$: classes = clearwindContext.getClasses({
		component: 'Alert',
		rcoTarget: 'root',
		info: {
			type,
			hasTitle: !!title,
			hasBody: $$slots.default,
			hasIcon: icon !== false,
		},
		modifiers,
		rco,
		co,
	});

	/// Logic
	const icons = clearwindContext.theme.shared.icons;
	$: myIcon = icon ?? icons[type];

	const dispatch = createEventDispatcher();
</script>

<!-- part: root -->
<div class={classes.root}>
	{#if icon !== false}
		<!-- part: icondiv -->
		<div class={classes.icondiv}>
			<!-- part: icon -->
			<Icon icon={myIcon} class={classes.icon} />
		</div>
	{/if}

	<!-- part: contentdiv -->
	<div class={classes.contentdiv}>
		<!-- part: title -->
		{#if title}
			<p class={classes.title}>
				{title}
			</p>
		{/if}
		<!-- part: body -->
		<div class={classes.body}>
			<slot />
		</div>
	</div>

	<!-- part: closebutton -->
	{#if withCloseButton}
		<button class={classes.closebutton} on:click={() => dispatch('close')}>
			<Icon icon={icons.close} />
		</button>
	{/if}
</div>
