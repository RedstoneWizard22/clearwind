<script lang="ts">
	export let href: string;
	export let target = '_blank';
</script>

<a {href} {target} class="text-blue-600 hover:underline">
	<slot />
</a>
