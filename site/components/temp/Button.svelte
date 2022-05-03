<script lang="ts">
	export let rco = '';
</script>

<button
	class={rco +
		' rounded bg-primary-500 px-3.5 py-1.5 text-sm font-medium text-white shadow-sm active:scale-95'}
	on:click
>
	<slot />
</button>
