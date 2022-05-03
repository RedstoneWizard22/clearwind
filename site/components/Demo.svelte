<script lang="ts">
	import Icon from '@iconify/svelte';
	import chevronHorizontal from '@iconify/icons-akar-icons/chevron-horizontal.js';
</script>

<div class="rounded-md bg-white shadow">
	<div class="xl:flex">
		<!-- content -->
		<div class="relative flex flex-grow items-center justify-center p-6 md:p-8">
			<slot />
		</div>
		<!-- controls -->
		{#if $$slots.controls}
			<div class="space-y-4 border-t border-gray-200 p-5 xl:w-80 xl:border-t-0 xl:border-l">
				<slot name="controls" />
			</div>
		{/if}
	</div>
	<!-- Show code button -->
	<div class="border-t border-gray-200 text-sm">
		<button class="mx-auto block py-1">
			<Icon icon={chevronHorizontal} inline class="mr-1.5 inline" />
			<span>Show Code</span>
		</button>
	</div>
</div>
