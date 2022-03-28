<script lang="ts">
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { tweened, type Tweened } from 'svelte/motion';

	/// Props
	export let open = true;
	export let minHeight = 0;
	export let easingFunction: (t: number) => number = cubicOut;
	export let duration: number = 400;

	/// Logic
	let ref: HTMLDivElement;
	let style = '';
	let height: number;
	let mounted = false;
	let tween: Tweened<number>;

	$: if (mounted) {
		if (open) {
			tween.set(1).then(() => {
				style = '';
			});
		} else {
			tween.set(minHeight / height).then(() => {
				style = minHeight > 0 ? `height: ${minHeight}px; overflow: hidden;` : 'display: none;';
			});
		}
	}

	onMount(() => {
		height = ref.clientHeight;
		setInitialStyle();
		tween = tweened(open ? 1 : minHeight / height, {
			duration,
			easing: easingFunction,
		});
		const unsubscribe = tween.subscribe((v) => {
			style = `overflow: hidden; height: ${v * height}px;`;
		});
		mounted = true;

		return unsubscribe;
	});

	function setInitialStyle() {
		style = open
			? ''
			: minHeight > 0
			? `height: ${minHeight}px; overflow: hidden;`
			: 'display: none;';
	}

	// Pre-render correctly
	if (typeof window === 'undefined') {
		setInitialStyle();
	}
</script>

<div bind:this={ref} {style}>
	<slot />
</div>
