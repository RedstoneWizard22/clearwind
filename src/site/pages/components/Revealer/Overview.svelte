<script lang="ts">
	import Revealer from '$lib/components/Revealer/Revealer.svelte';
	import Demo from '../../../components/Demo.svelte';
	import { bounceOut } from 'svelte/easing';
	import { source } from './source';
	import fileTypeSvelte from '@iconify/icons-vscode-icons/file-type-svelte';

	let revealer1Open = false;
	let revealer2Open = false;
	let revealer3Open = false;

	let demo1 = [
		{
			title: 'Demo.svelte',
			source,
			icon: fileTypeSvelte,
			language: 'svelte',
		},
	];
</script>

<Demo title="Usage" codetabs={demo1}>
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
	<div slot="content" class="relative mx-auto max-w-xl">
		<!-- Actual content -->
		<div class="absolute top-0 left-0">
			<Revealer open={revealer3Open} minHeight={50} duration={800} easingFunction={bounceOut}>
				<div class="rounded bg-primary-50 p-8">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea eveniet molestias
						dolores voluptatem id, earum nihil delectus quae, quo ut nesciunt dignissimos ipsam
						obcaecati, modi repellendus iusto. Placeat, dolorem?
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
		<!-- Dummy content -->
		<div class="pointer-events-none opacity-0">
			<div class="p-8">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea eveniet molestias dolores
					voluptatem id, earum nihil delectus quae, quo ut nesciunt dignissimos ipsam obcaecati,
					modi repellendus iusto. Placeat, dolorem?
				</p>
			</div>
			<button>Read More</button>
		</div>
	</div>
</Demo>
