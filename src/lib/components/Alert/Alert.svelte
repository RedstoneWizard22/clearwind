<script lang="ts">
	import type { RCOProp, ClearwindContext, COProp } from '$lib/themes/theme-types';
	import Icon from '@iconify/svelte';
	import type { IconifyIcon } from '@iconify/svelte';
	import { getContext } from 'svelte';

	import triangleAlertFill from '@iconify/icons-akar-icons/triangle-alert-fill';
	import infoFill from '@iconify/icons-akar-icons/info-fill';
	import circleCheckFill from '@iconify/icons-akar-icons/circle-check-fill';
	import circleAlertFill from '@iconify/icons-akar-icons/circle-alert-fill';
	import crossIcon from '@iconify/icons-akar-icons/cross';

	/// Get theme
	const clearwindContext = getContext<ClearwindContext>('clearwind');

	/// Props
	export let rco: RCOProp | undefined = undefined;
	export let co: COProp<'Alert'> | undefined = undefined;

	export let variant: string = 'default';

	export let type: 'success' | 'info' | 'warning' | 'error' = 'warning';
	export let title: string = '';
	export let withCloseButton: boolean = false;
	export let icon: IconifyIcon | undefined = undefined;

	/// Styling
	$: classes = clearwindContext.getClasses({
		component: 'Alert',
		rcoTarget: 'root',
		info: {
			variant,
			size: 'md',
			type,
		},
		rco,
		co,
	});

	/// Logic
	$: myIcon =
		icon ??
		(type === 'success'
			? circleCheckFill
			: type === 'error'
			? circleAlertFill
			: type === 'info'
			? infoFill
			: triangleAlertFill);
</script>

<!-- part: root -->
<div class={classes.root}>
	<!-- part: icondiv -->
	<div class={classes.icondiv}>
		<!-- part: icon -->
		<Icon icon={myIcon} class={classes.icon} />
	</div>

	<!-- part: contentdiv -->
	<div class={classes.contentdiv}>
		<!-- part: title -->
		<slot name="title">
			{#if title}
				<p class={classes.title}>
					{title}
				</p>
			{/if}
		</slot>
		<!-- part: body -->
		<div class={classes.body}>
			<slot />
		</div>
	</div>

	<!-- part: closebutton -->
	{#if withCloseButton}
		<button class={classes.closebutton}>
			<Icon icon={crossIcon} />
		</button>
	{/if}
</div>
