<script lang="ts">
	import Description from '$site/components/layout/Description.svelte';
	import Heading from '$site/components/layout/Heading.svelte';
	import Prism from '$site/components/Prism.svelte';
	import Code from '$site/components/temp/Code.svelte';

	const code = `
\<script lang="ts"\>
  let ref: HTMLInputElement | null = null;
\</script\>  

\<Switch bind:ref /\>
`.trim();
</script>

<Heading sub title="Get input ref" />
<Description>
	You can get input ref by binding to the <Code>ref</Code> prop.
</Description>
<Prism source={code} language="svelte" rco="" />
