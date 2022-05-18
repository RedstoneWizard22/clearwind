<script lang="ts">
	export let name = 'value';
	export let value: any;

	export let rco = '';
</script>

<p class={rco}>
	<span class="mr-1 font-medium capitalize text-gray-600">{`${name}:`}</span>
	<span class="rounded bg-gray-100 px-1.5 py-0.5">{JSON.stringify(value, null, 1)}</span>
</p>
