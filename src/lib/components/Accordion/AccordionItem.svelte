<script lang="ts">
	import { getRandomId } from '$lib/scripts/random-id';
	import type { RCOProp, ClearwindContext, COProp } from '$lib/themes/theme-types';
	import Icon, { type IconifyIcon } from '@iconify/svelte';
	import { getContext, onMount, tick } from 'svelte';
	import type { AccordionContext } from './Accordion.svelte';
	import chevronDown from '@iconify/icons-akar-icons/chevron-down';
	import { tweened } from 'svelte/motion';

	/// Get theme
	const clearwindContext = getContext<ClearwindContext>('clearwind');

	/// Props
	export let rco: RCOProp | undefined = undefined;
	export let co: COProp<'AccordionItem'> | undefined = undefined;

	export let icon: IconifyIcon | undefined = undefined;
	export let expanded: boolean | undefined = undefined;

	/// Styling
	$: classes = clearwindContext.getClasses({
		component: 'AccordionItem',
		rcoTarget: 'root',
		info: {
			variant: ac.props.variant,
			size: ac.props.size,
			iconPosition: ac.props.iconPosition,
			isExpanded: localExpanded,
		},
		rco,
		co,
		requiredClasses: {
			headroot: 'flex items-center',
		},
	});

	/// Logic
	const id: string = getRandomId();
	let localExpanded = expanded ?? false;

	const ac = getContext<AccordionContext>('clearwind-accordion');

	onMount(() => {
		function setOpen(open: boolean) {
			localExpanded = open;
		}

		ac.register(id, setOpen, localExpanded);

		if (expanded !== undefined) {
			expanded ? ac.setOpen(id, true) : ac.setOpen(id, false);
		}

		return () => ac.unregister(id);
	});

	$: if (expanded !== undefined) {
		expanded ? ac.setOpen(id, true) : ac.setOpen(id, false);
	}

	const tween = tweened(localExpanded ? 1 : 0, {
		duration: ac.props.transitionDuration,
		easing: ac.props.transitionEasingFunction,
	});

	let bodyStyle = localExpanded ? '' : 'display: none;';
	let bodyHeight: number;
	let body: HTMLDivElement;
	$: {
		if (body) {
			if (localExpanded) {
				tween.set(1).then(() => {
					bodyStyle = '';
				});
			} else {
				bodyHeight = body.clientHeight;
				tween.set(0).then(() => {
					bodyStyle = 'display: none;';
				});
			}
		}
	}

	tween.subscribe((v) => {
		bodyStyle = `overflow: hidden; height: ${v * bodyHeight}px;`;
	});
</script>

<!-- part: root -->
<div class={classes.root}>
	<!-- part: headroot -->
	<button class={classes.headroot} on:click={() => expanded === undefined && ac.toggle(id)}>
		<!-- part: headcontent -->
		<div class={classes.headcontent}>
			<slot name="head" />
		</div>
		<!-- part: headicon -->
		<div class={classes.headicon}>
			<div style={`transform: rotate(${$tween * 180}deg);`}>
				<slot name="icon">
					<Icon icon={icon ?? ac.props.icon ?? chevronDown} />
				</slot>
			</div>
		</div>
	</button>
	<!-- part: content -->
	<div class={classes.body} style={bodyStyle} bind:this={body}>
		<slot name="body" />
	</div>
</div>
