<script lang="ts">
	import Revealer from '$lib/components/Revealer/Revealer.svelte';
	import Demo from '../../../components/Demo.svelte';
	import { bounceOut } from 'svelte/easing';

	let revealer1Open = false;
	let revealer2Open = false;
	let revealer3Open = false;
</script>

<Demo title="Usage">
	<p slot="description">The revealer is used internally by the Accordion</p>
	<div slot="content" class="mx-auto max-w-xl">
		<Revealer open={revealer1Open}>
			<div class="rounded bg-primary-50 p-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea eveniet molestias dolores
				voluptatem id, earum nihil delectus quae, quo ut nesciunt dignissimos ipsam obcaecati, modi
				repellendus iusto. Placeat, dolorem?
			</div>
		</Revealer>
		<button
			class="cursor-pointer text-primary-600 hover:underline"
			on:click={() => (revealer1Open = !revealer1Open)}
		>
			{revealer1Open ? 'Close' : 'Open'}
		</button>
	</div>
</Demo>

<Demo title="minHeight prop">
	<p slot="description">A minimum height can be specified using the `minHeight` prop</p>
	<div slot="content" class="mx-auto max-w-xl">
		<Revealer open={revealer2Open} minHeight={80}>
			<div class="rounded bg-primary-50 p-8">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea eveniet molestias dolores
					voluptatem id, earum nihil delectus quae, quo ut nesciunt dignissimos ipsam obcaecati,
					modi repellendus iusto. Placeat, dolorem?
				</p>
			</div>
		</Revealer>
		<button
			class="cursor-pointer text-primary-600 hover:underline"
			on:click={() => (revealer2Open = !revealer2Open)}
		>
			Read {revealer2Open ? 'Less' : 'More'}
		</button>
	</div>
</Demo>

<Demo title="Transition tweaks">
	<p slot="description">
		The transition duration and easing can be tweeked using the `duration` and `easingFunction`
		props
	</p>
	<div slot="content" class="mx-auto max-w-xl">
		<Revealer open={revealer3Open} minHeight={50} duration={800} easingFunction={bounceOut}>
			<div class="rounded bg-primary-50 p-8">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea eveniet molestias dolores
					voluptatem id, earum nihil delectus quae, quo ut nesciunt dignissimos ipsam obcaecati,
					modi repellendus iusto. Placeat, dolorem?
				</p>
			</div>
		</Revealer>
		<button
			class="cursor-pointer text-primary-600 hover:underline"
			on:click={() => (revealer3Open = !revealer3Open)}
		>
			Read {revealer3Open ? 'Less' : 'More'}
		</button>
	</div>
</Demo>
