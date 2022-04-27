<!--
  @component
  A reusable unstyled header for your application
-->
<script lang="ts">
	/// Props
	export let rco = '';

	/** height of the header (default "3.5rem") */
	export let height = '3.5rem';
</script>

<!-- part: header -->
<div class={`fixed w-full top-0 left-0 ${rco}`} style={`height: ${height};`}>
	<slot name="header" />
</div>

<!-- part: body -->
<div style={`margin-top: ${height};`}>
	<slot name="body" />
</div>
