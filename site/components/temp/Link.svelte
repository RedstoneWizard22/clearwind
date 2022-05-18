<script lang="ts">
	export let href: string;
	export let target = '_blank';
</script>

<a {href} {target} class="relative font-medium text-slate-800 hover:text-blue-500">
	<slot />
</a>
