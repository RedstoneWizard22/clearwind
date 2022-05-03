<script lang="ts">
	import githubFill from '@iconify/icons-akar-icons/github-fill.js';
	import pencilIcon from '@iconify/icons-akar-icons/pencil.js';
	import newspaperIcon from '@iconify/icons-akar-icons/newspaper.js';
	import chevronHorizontal from '@iconify/icons-akar-icons/chevron-horizontal.js';
	import Icon from '@iconify/svelte';

	import { Alert } from '$lib/components';
	import ColorSwatch from '../../components/ColorSwatch.svelte';

	let alertTitle = 'Hey!';
	let alertMessage = 'A man has fallen into the river in LEGO City!';
	let alertType: 'success' | 'info' | 'warning' | 'error' = 'warning';
	let alertVariant = 'accent';

	let alertRco = '';
	let col = 'var-amber';

	function onTypeChange() {
		alertRco = '';
		switch (alertType) {
			case 'success':
				col = 'var-green';
				break;
			case 'info':
				col = 'var-blue';
				break;
			case 'warning':
				col = 'var-amber';
				break;
			case 'error':
				col = 'var-red';
				break;
		}
	}
</script>

<div>
	<h1 class="mb-2">Alert</h1>
	<p class="text-gray-500">Attract user attention with important static message</p>
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
			<div class="relative flex-grow rounded p-6 md:p-8">
				<div
					class="top-1/2 left-1/2 w-full xl:absolute xl:-translate-x-1/2 xl:-translate-y-1/2 xl:px-8"
				>
					<Alert
						type={alertType}
						title={alertTitle}
						modifiers={alertVariant}
						rco={alertRco}
						withCloseButton
					>
						{alertMessage}
					</Alert>
				</div>
			</div>
			<div
				class="border-t border-gray-200 p-5 text-sm text-gray-700 xl:w-80 xl:border-t-0 xl:border-l"
			>
				<p class="mb-1 font-medium">Title</p>
				<input
					type="text"
					class="w-full rounded border border-gray-300 p-1.5 px-3 shadow-sm focus:outline-none"
					bind:value={alertTitle}
				/>
				<p class="mt-4 mb-1 font-medium">Children</p>
				<input
					type="text"
					class="w-full rounded border border-gray-300 p-1.5 px-3 shadow-sm focus:outline-none"
					bind:value={alertMessage}
				/>
				<p class="mt-4 mb-1 font-medium">Type</p>
				<select
					class="w-full rounded border border-gray-300 bg-white p-1.5 px-3 shadow-sm focus:outline-none"
					name="type"
					bind:value={alertType}
					on:change={onTypeChange}
				>
					<option value="info">info</option>
					<option value="success">success</option>
					<option value="warning">warning</option>
					<option value="error">error</option>
				</select>
				<p class="mt-4 mb-1 font-medium">Variant</p>
				<select
					class="w-full rounded border border-gray-300 bg-white p-1.5 px-3 shadow-sm focus:outline-none"
					name="variant"
					bind:value={alertVariant}
				>
					<option value="light">light</option>
					<option value="dark">dark</option>
					<option value="accent">accent</option>
				</select>
				<p class="mt-4 mb-1 font-medium">Color</p>
				<ColorSwatch
					selected={col}
					on:change={({ detail }) => {
						console.log(detail);
						alertRco = detail;
					}}
				/>
			</div>
		</div>
		<div class="border-t border-gray-200 text-sm">
			<button class="mx-auto block py-1">
				<Icon icon={chevronHorizontal} inline class="mr-1.5 inline" />
				<span>Show Code</span>
			</button>
		</div>
	</div>
</div>
