<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { EasingFunction, TransitionConfig } from 'svelte/transition';
	import Portal from 'svelte-portal/src/Portal.svelte';
	import type { RCOProp, ClearwindContext, COProp } from '$lib/_defines/types';
	import { getContext } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';
	import { modalClose, scrollLock } from '$lib/actions';

	/// Get theme
	const clearwindContext = getContext<ClearwindContext>('clearwind');

	/// Props
	export let rco: RCOProp | undefined = undefined;
	export let co: COProp<'Drawer'> | undefined = undefined;
	export let size = 'md';
	export let variant = 'default';

	export let closeOnEscape = true;
	export let closeOnClickOutside = true;
	export let useScrollLock = true;
	export let open: boolean;
	export let position: 'top' | 'right' | 'bottom' | 'left' = 'left';
	export let target: HTMLElement | string = 'body';
	export let transitionEasingFunction: EasingFunction = expoOut;
	export let transitionDuration = 400;

	/// Styling
	$: classes = clearwindContext.getClasses({
		component: 'Drawer',
		rcoTarget: 'drawer',
		info: { variant, size, position },
		rco,
		co,
		requiredClasses: (info) => {
			let positionClasses: string;
			switch (info.position) {
				case 'top':
					positionClasses = 'top-0 left-0 w-full';
					break;
				case 'right':
					positionClasses = 'top-0 right-0 h-full';
					break;
				case 'bottom':
					positionClasses = 'bottom-0 left-0 w-full';
					break;
				case 'left':
				default:
					positionClasses = 'top-0 left-0 h-full';
					break;
			}

			return {
				root: 'fixed w-full h-full top-0 left-0 overflow-hidden z-50',
				drawer: `absolute z-10 ${positionClasses}`,
				backdrop: 'absolute w-full h-full top-0 left-0',
			};
		},
	});

	/// Events
	const dispatch = createEventDispatcher();

	/// Transitions
	const drawerTransition = (
		node: Element,
		{ duration = transitionDuration, easing = transitionEasingFunction }
	): TransitionConfig => {
		const width = node.clientWidth;
		const height = node.clientHeight;

		let css: (t: number) => string;
		switch (position) {
			case 'top':
				css = (t) => `transform: translateY(${height * (t - 1)}px);`;
				break;
			case 'right':
				css = (t) => `transform: translateX(${width * (1 - t)}px);`;
				break;
			case 'bottom':
				css = (t) => `transform: translateY(${height * (1 - t)}px);`;
				break;
			case 'left':
				css = (t) => `transform: translateX(${width * (t - 1)}px);`;
				break;
		}

		return {
			duration,
			easing,
			css,
		};
	};
</script>

{#if open}
	<Portal {target}>
		<!-- part: root -->
		<div class={classes.root}>
			<!-- part: backdrop -->
			<div
				transition:fade={{ duration: transitionDuration, easing: transitionEasingFunction }}
				class={classes.backdrop}
				on:click={() => dispatch('close')}
			/>
			<!-- part: drawer -->
			<div
				class={classes.drawer}
				use:modalClose={{
					closeOnClickOutside,
					closeOnEscape,
				}}
				on:modalclose={() => dispatch('close')}
				transition:drawerTransition={{
					easing: transitionEasingFunction,
					duration: transitionDuration,
				}}
			>
				<slot />
			</div>
		</div>
	</Portal>
{/if}

<svelte:body use:scrollLock={{ active: open && useScrollLock }} />
