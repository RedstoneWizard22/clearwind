<script lang="ts">
	/** Whether this heading is a subheading  */
	export let sub = false;
	/** Title to use for the heading */
	export let title: string;
</script>

{#if !sub}
	<h3 class="!mt-8">{title}</h3>
{:else}
	<h4 class="!mt-8">{title}</h4>
{/if}
