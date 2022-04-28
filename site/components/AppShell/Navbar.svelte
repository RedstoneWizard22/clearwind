<script lang="ts">
	import Icon from '@iconify/svelte';
	import bookIcon from '@iconify/icons-akar-icons/book';
	import pencilIcon from '@iconify/icons-akar-icons/pencil';
	import toggleOffFill from '@iconify/icons-akar-icons/toggle-off-fill';
	import playIcon from '@iconify/icons-akar-icons/play';
</script>

<div class="flex h-full w-full flex-col bg-gray-100 p-4 shadow-inner">
	<div class="flex-grow space-y-1 text-sm">
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

	<div class="w-full pb-2 text-center text-gray-400">☜(⌒▽⌒)☞</div>
</div>
