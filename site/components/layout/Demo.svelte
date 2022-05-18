<script lang="ts">
</script>

<div>
	<div class="mt-5 rounded-lg border bg-white">
		<div class="xl:flex">
			<!-- content -->
			<div class="relative flex flex-grow items-center justify-center p-6 md:p-7">
				<slot />
			</div>
			<!-- controls -->
			{#if $$slots.controls}
				<div class="space-y-4 border-t border-gray-200 p-5 xl:w-80 xl:border-t-0 xl:border-l">
					<slot name="controls" />
				</div>
			{/if}
		</div>
	</div>
</div>
