<script lang="ts">
	import Usage from './_Usage.svelte';
	import Indeterminate from './_Indeterminate.svelte';
	import Group from './_Group.svelte';
	import Reactivity from './_Reactivity.svelte';
	import Ref from './_Ref.svelte';
	import Icons from './_Icons.svelte';
	import Props from '$site/components/layout/Props.svelte';
	import props from './props';
	import Heading from '$site/components/layout/Heading.svelte';
	import Slots from '$site/components/layout/Slots.svelte';
	import slots from './slots';
	import Events from '$site/components/layout/Events.svelte';
	import events from './events';
</script>

<Heading title="Overview" />
<Usage />
<Reactivity />
<Group />
<Indeterminate />
<Ref />
<Icons />

<Heading title="Props" />
<Props data={props} />

<Heading title="Slots" />
<Slots data={slots} />

<Heading title="Events" />
<Events data={events} />
