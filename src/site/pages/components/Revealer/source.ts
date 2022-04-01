export const source = `
<script lang="ts">
	import Revealer from 'clearwind/components';

	let open = false;
</script>

<Revealer {open}>
	<div class="rounded bg-primary-50 p-8">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea eveniet molestias dolores
		voluptatem id, earum nihil delectus quae, quo ut nesciunt dignissimos ipsam obcaecati, modi
		repellendus iusto. Placeat, dolorem?
	</div>
</Revealer>
<button class="cursor-pointer text-primary-600 hover:underline" on:click={() => (open = !open)}>
	{open ? 'Close' : 'Open'}
</button>
`;
