<script lang="ts">
	/** Whether this heading is a subheading  */
	export let sub = false;
	/** Weather to use reduced top padding */
	export let compact = false;
	/** Title to use for the heading */
	export let title: string;
</script>

{#if !sub}
	<h3 class={`${compact ? 'mt-6' : 'mt-14'}`}>{title}</h3>
{:else}
	<h4 class={`${compact ? 'mt-6' : 'mt-14'}`}>{title}</h4>
{/if}
