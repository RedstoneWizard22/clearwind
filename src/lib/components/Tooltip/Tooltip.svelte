<script lang="ts">
	import type { RCOProp, ClearwindContext, COProp } from '$lib/themes/theme-types';
	import { getContext } from 'svelte';
	import { flip, shift, offset, hide, arrow } from '@floating-ui/dom';
	import type { Placement } from '@floating-ui/dom';
	import { floatingui } from '$lib/actions/floatingui';
	import { fly, type FlyParams } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	/// Get theme
	const clearwindContext = getContext<ClearwindContext>('clearwind');

	/// Props
	export let rco: RCOProp | undefined = undefined;
	export let co: COProp<'Tooltip'> | undefined = undefined;
	export let variant = 'default';
	export let size = 'md';

	export let label: string;
	export let open: boolean | undefined = undefined;
	export let openDelay = 0;
	export let closeDelay = 0;
	export let placement: Placement = 'bottom';
	export let arrowSize = 8;
	export let gutter = 0;
	export let flyParams: Partial<FlyParams> = {};

	/// Styling
	$: classes = clearwindContext.getClasses({
		component: 'Tooltip',
		rcoTarget: 'root',
		info: {
			variant,
			size,
		},
		rco,
		co,
		requiredClasses: {
			root: 'z-50 absolute pointer-events-none',
			arrow: 'absolute',
		},
	});

	/// Logic
	let target: HTMLElement;
	let arrowRef: HTMLElement;
	let openInterval: ReturnType<typeof setInterval> | undefined = undefined;
	let closeInterval: ReturnType<typeof setInterval> | undefined = undefined;
	let localOpen = false;

	function onHoverEnter() {
		if (openDelay) {
			if (closeInterval) {
				clearTimeout(closeInterval);
			}
			openInterval = setTimeout(() => {
				openInterval = undefined;
				localOpen = true;
			}, openDelay);
		} else {
			localOpen = true;
		}
	}

	function onHoverLeave() {
		if (closeDelay) {
			if (openInterval) {
				clearTimeout(openInterval);
			}
			closeInterval = setTimeout(() => {
				closeInterval = undefined;
				localOpen = false;
			}, closeDelay);
		} else {
			localOpen = false;
		}
	}
</script>

<!-- Wrapper around the slot to use as the tooltip target -->
<div
	bind:this={target}
	class="inline-block"
	on:mouseenter={onHoverEnter}
	on:mouseleave={onHoverLeave}
>
	<slot />
</div>

<!-- The tooltip -->
{#if open || (open === undefined && localOpen)}
	<!-- part: root -->
	<div
		class={classes.root}
		id="tooltip"
		use:floatingui={{
			target,
			placement,
			middleware: [
				flip(),
				hide(),
				offset(gutter + arrowSize),
				shift({ padding: 8 }),
				arrow({
					element: arrowRef,
					padding: arrowSize,
				}),
			],
			arrow: arrowRef,
		}}
		transition:fly={{
			duration: flyParams.duration ?? 150,
			easing: flyParams.easing ?? cubicOut,
			x: flyParams.x ?? 0,
			y: flyParams.y ?? 4,
			opacity: flyParams.opacity ?? 0,
		}}
	>
		{label}
		<!-- part: arrow -->
		<div
			bind:this={arrowRef}
			class={classes.arrow}
			style={`
					width: ${arrowSize}px;
					height: ${arrowSize}px;
					`}
		/>
	</div>
{/if}
