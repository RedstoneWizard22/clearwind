<script lang="ts">
	/// Props
	type T = $$Generic;
	interface $$Slots {
		default: {
			// slot name
			datum: T;
			classes: string;
		};
	}
	export let data: T[] = [];
	export let headings: string[];
	export let lastHeadingRight = false;
</script>

<div class="relative overflow-x-auto border-gray-200 bg-white">
	<table class="w-full table-auto text-left text-sm">
		<thead class="">
			<tr class="border-b border-gray-300 bg-gray-50">
				{#each headings as heading}
					<th
						scope="col"
						class="px-4 py-3 text-left text-sm font-semibold text-gray-800 md:px-5"
						class:last:text-right={lastHeadingRight}>{heading}</th
					>
				{/each}
			</tr>
		</thead>
		<tbody class="">
			{#each data as datum}
				<tr class="border-b last:border-b-0">
					<slot {datum} classes="py-3 px-4 md:px-5" />
				</tr>
			{/each}
		</tbody>
	</table>
</div>
