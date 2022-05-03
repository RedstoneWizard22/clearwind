<script lang="ts">
	import Prism from 'prismjs';
	import 'prism-svelte';
	import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
	import { onMount } from 'svelte';
	// import Tooltip from '$lib/components/Tooltip/Tooltip.svelte';

	/// Props
	export let source: string;
	export let language: string;
	export let noBackground: boolean = true;
	export let rco: string = '';

	/// Logic
	let ref: HTMLElement;

	let copied = false;

	onMount(() => {
		Prism.plugins.NormalizeWhitespace.setDefaults({
			'remove-trailing': true,
			'remove-indent': true,
			'left-trim': true,
			'right-trim': true,
			'tabs-to-spaces': 2,
			/*'break-lines': 80,
      'indent': 2,
      'remove-initial-line-feed': false,
      'tabs-to-spaces': 4,
      'spaces-to-tabs': 4*/
		});
		Prism.highlightElement(ref);
		if (noBackground) {
			ref.classList.remove(`language-${language}`);
			ref.parentElement?.classList.remove(`language-${language}`);
		}
	});

	function onCopy() {
		navigator.clipboard.writeText(source).then(() => {
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 3000);
		});
	}
</script>

<div class={rco + ' relative'}>
	<pre class="overflow-x-auto text-sm">
    <code class={`language-${language}`} bind:this={ref}>
      {source}
    </code>
  </pre>

	<button class="absolute top-0 right-0 text-lg text-gray-500" on:click={onCopy}>
		<!-- <Tooltip
			rco={copied ? 'bg-green-700' : ''}
			label={copied ? 'Copied!' : 'Copy'}
			placement="left"
			gutter={10}
		>
			<Icon icon={copied ? checkIcon : copyIcon} />
		</Tooltip> -->
	</button>
</div>
