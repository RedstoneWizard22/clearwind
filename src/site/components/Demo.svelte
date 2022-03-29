<script lang="ts">
	export let title: string;
</script>

<h2 class="mb-3">{title}</h2>
<slot name="description" />
<div class="my-4 rounded-md bg-white p-6 ring-1 ring-gray-900 ring-opacity-5">
	<slot name="content" />
</div>
<div class="h-8" />
