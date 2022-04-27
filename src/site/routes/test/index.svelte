<script lang="ts">
	import thunderIcon from '@iconify/icons-akar-icons/thunder';
	import searchIcon from '@iconify/icons-akar-icons/search';
	import githubFill from '@iconify/icons-akar-icons/github-fill';
	import bookIcon from '@iconify/icons-akar-icons/book';
	import pencilIcon from '@iconify/icons-akar-icons/pencil';
	import toggleOffFill from '@iconify/icons-akar-icons/toggle-off-fill';
	import playIcon from '@iconify/icons-akar-icons/play';
	import newspaperIcon from '@iconify/icons-akar-icons/newspaper';
	import chevronHorizontal from '@iconify/icons-akar-icons/chevron-horizontal';
	import Icon from '@iconify/svelte';

	import Header from './Header.svelte';
	import Alert from '$lib/components/Alert/Alert.svelte';
	import ColorSwatch from './ColorSwatch.svelte';

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

<Header
	rco="z-10 flex h-14 w-full items-center justify-between bg-gradient-to-br from-blue-500 to-sky-500 px-4 md:px-6 shadow"
>
	<svelte:fragment slot="header">
		<div class="mr-auto flex items-center text-white">
			<Icon inline icon={thunderIcon} class="text-2xl" />
			<span class="ml-2.5 text-xl font-bold">Clearwind</span>
		</div>

		<button
			class="mx-8 hidden h-8 max-w-sm flex-grow rounded-md bg-primary-400 bg-opacity-50 px-3 text-sm leading-8 text-white hover:bg-opacity-80 md:block lg:max-w-md xl:max-w-lg 2xl:max-w-xl"
		>
			<div class="relative flex h-full items-center">
				<Icon inline class="mr-1.5 inline" icon={searchIcon} />
				<span class="text-xs"> Search docs </span>
				<!-- <span class="absolute right-0 rounded border border-white px-1.5 py-0.5 text-xs opacity-80"
					>Ctrl + K</span
				> -->
			</div>
		</button>
		<div />

		<div class="ml-auto h-[20px] space-x-2 text-xl text-white">
			<button class="inline-block transition-transform ease-out hover:scale-110 md:hidden">
				<Icon icon={searchIcon} />
			</button>
			<button class="inline-block transition-transform ease-out hover:scale-110">
				<Icon icon={githubFill} />
			</button>
		</div>
	</svelte:fragment>

	<div slot="body" class="ml-60">
		<main class="mx-auto -mt-2 max-w-screen-xl p-10 lg:p-12">
			<h1 class="mb-2">Alert</h1>
			<p class="text-gray-500">Attract user attention with important static message</p>
			<div class="mt-6 space-x-2 text-sm text-gray-800">
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

			<!-- <div class="mt-12 flex justify-around">
				<button class="relative py-1.5 font-semibold text-primary-500">
					<span>Overview</span>
					<div class="absolute bottom-0 left-0 h-0.5 w-2/3 bg-primary-500" />
				</button>
				<button class="group relative py-1.5 font-medium text-gray-400">
					<span>Props</span>
					<div
						class="absolute bottom-0 left-0 h-0.5 w-2/3 origin-left scale-x-0 bg-gray-400 transition-transform group-hover:scale-x-100"
					/>
				</button>
				<button class="group relative py-1.5 font-medium text-gray-400">
					<span>Style</span>
					<div
						class="absolute bottom-0 left-0 h-0.5 w-2/3 origin-left scale-x-0 bg-gray-400 transition-transform group-hover:scale-x-100"
					/>
				</button>
			</div> -->

			<h3 class="mt-12 mb-2">Usage</h3>
			<div class="mt-1.5 rounded-md bg-white shadow">
				<div class="xl:flex">
					<div class="relative flex-grow rounded p-8">
						<div
							class="top-1/2 left-1/2 w-full xl:absolute xl:-translate-x-1/2 xl:-translate-y-1/2 xl:px-8"
						>
							<Alert
								type={alertType}
								title={alertTitle}
								variants={alertVariant}
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
							<option value="outline">outline</option>
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

			<!-- <h3 class="mt-12 mb-2">Props</h3>
			<h3 class="mt-12 mb-2">Slots</h3>
			<h3 class="mt-12 mb-2">Styling</h3> -->
		</main>
	</div>
</Header>

<div class="fixed left-0 top-0 -z-10 h-full w-60 bg-gray-100 pt-14 shadow-inner">
	<div class="h-full w-full space-y-1 p-4 text-sm">
		<button class="flex w-full items-center rounded-md p-2 px-2.5 font-medium text-gray-500">
			<Icon icon={bookIcon} class="mr-3 text-lg" />
			<span class="text-gray-600">Getting Started</span>
		</button>
		<button class="flex w-full items-center rounded-md p-2 px-2.5 font-medium text-gray-500">
			<Icon icon={pencilIcon} class="mr-3 text-lg" />
			<span class="text-gray-600">Theme System</span>
		</button>
		<button
			class="flex w-full items-center rounded-md bg-gray-200 p-2 px-2.5 font-medium text-gray-600"
		>
			<Icon icon={toggleOffFill} class="mr-3 text-lg" />
			<span class="text-gray-700">Components</span>
		</button>
		<button class="flex w-full items-center rounded-md p-2 px-2.5 font-medium text-gray-500">
			<Icon icon={playIcon} class="mr-3 text-lg" />
			<span class="text-gray-600">Actions</span>
		</button>
	</div>

	<div class="absolute bottom-6 w-full text-center text-gray-400">☜(⌒▽⌒)☞</div>
</div>
