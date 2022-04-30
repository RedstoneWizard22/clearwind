<script lang="ts">
	import githubFill from '@iconify/icons-akar-icons/github-fill';
	import pencilIcon from '@iconify/icons-akar-icons/pencil';
	import newspaperIcon from '@iconify/icons-akar-icons/newspaper';
	import chevronHorizontal from '@iconify/icons-akar-icons/chevron-horizontal';
	import Icon from '@iconify/svelte';

	import { Checkbox } from '$lib/components';
	import ColorSwatch from '../../components/ColorSwatch.svelte';
	import Button from '$lib/components/Button/Button.svelte';

	let indeterminate = false;
	let disabled = false;
	let checked = true;

	let options = ['banana', 'chocolate', 'vanilla'];
	let group = ['banana'];

	let rco = '';
</script>

<div>
	<h1 class="mb-2">Checkbox</h1>
	<p class="text-gray-500">Get boolean input from a user</p>
	<div class="mt-6 space-x-2 overflow-x-auto whitespace-nowrap rounded text-sm text-gray-800">
		<button class="rounded-md bg-gray-100 p-1 px-3">
			<Icon inline icon={githubFill} class="mr-1.5 inline" />
			<span>Component source</span>
		</button>
		<button class="rounded-md bg-gray-100 p-1 px-3">
			<Icon inline icon={newspaperIcon} class="mr-1.5 inline" />
			<span>Page source</span>
		</button>
		<button class="rounded-md bg-gray-100 p-1 px-3">
			<Icon inline icon={pencilIcon} class="mr-1.5 inline" />
			<span>Theme source</span>
		</button>
	</div>

	<h3 class="mt-12 mb-2">Usage</h3>
	<div class="mt-1.5 rounded-md bg-white shadow">
		<div class="xl:flex">
			<div class="relative flex-grow p-6 px-5 md:p-8">
				<div
					class="top-1/2 left-1/2 w-full xl:absolute xl:-translate-x-1/2 xl:-translate-y-1/2 xl:px-8"
				>
					<!-- Content -->
					<Checkbox
						label="I want free cookies"
						name="checkbox"
						bind:checked
						{rco}
						{indeterminate}
						{disabled}
					/>
				</div>
			</div>
			<div
				class="border-t border-gray-200 p-5 text-sm text-gray-700 xl:w-80 xl:border-t-0 xl:border-l"
			>
				<div class="space-y-3">
					<Checkbox
						variants="sm"
						label="Indeterminate"
						name="indeterminate"
						bind:checked={indeterminate}
					/>
					<Checkbox variants="sm" label="Disabled" name="disabled" bind:checked={disabled} />
					<Checkbox variants="sm" label="Checked" name="checked" bind:checked />
				</div>
				<p class="mt-4 mb-1 font-medium">Color</p>
				<ColorSwatch selected={'var-blue'} on:change={(ev) => (rco = ev.detail)} />
			</div>
		</div>
		<div class="border-t border-gray-200 text-sm">
			<button class="mx-auto block py-1">
				<Icon icon={chevronHorizontal} inline class="mr-1.5 inline" />
				<span>Show Code</span>
			</button>
		</div>
	</div>

	<div class="mt-10 space-y-4 rounded-md bg-white p-8 shadow">
		{#each options as option}
			<Checkbox label={option} value={option} bind:group />
		{/each}
		<Button
			on:click={() => {
				group = ['banana'];
			}}>Reset</Button
		>
		<p>Selected: {group.join(', ')}</p>
	</div>
</div>
