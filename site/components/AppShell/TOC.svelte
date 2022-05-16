<script lang="ts">
	const pages = ['Usage', 'Reactivity', 'Group binding', 'Indeterminate state', 'Get input ref'];
	const activePage = pages[0];
</script>

<div class="space-y-2.5">
	<div class="font-medium">Table of contents</div>
	{#each pages as page}
		<div class="ml-2 flex items-center text-sm text-gray-700">
			{#if page === activePage}
				<div class="ml-[3px] h-1.5 w-1.5 rounded bg-primary-500 ring ring-primary-200" />
				<div class="ml-2.5">{page}</div>
			{:else}
				<div>{page}</div>
			{/if}
		</div>
	{/each}
</div>
