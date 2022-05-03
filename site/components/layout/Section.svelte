<script lang="ts">
	export let title: string;
</script>

<!-- title -->
<div class="mb-12">
	<h3 class="mb-4 leading-none">{title}</h3>
	<slot />
</div>
