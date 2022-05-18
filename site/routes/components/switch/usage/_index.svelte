<script lang="ts">
	import Group from './_Group.svelte';
	import Icons from './_Icons.svelte';
	import Ref from './_Ref.svelte';
	import Usage from './_Usage.svelte';

	import Props from '$site/components/layout/Props.svelte';
	import props from './props';
	import Slots from '$site/components/layout/Slots.svelte';
	import slots from './slots';
	import Events from '$site/components/layout/Events.svelte';
	import events from './events';
	import Heading from '$site/components/layout/Heading.svelte';
</script>

<Heading compact title="Overview" />
<Usage />
<Icons />
<Group />
<Ref />

<Heading title="Props" />
<Props data={props} />

<Heading title="Slots" />
<Slots data={slots} />

<Heading title="Events" />
<Events data={events} />
