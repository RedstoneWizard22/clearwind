<script lang="ts">
	import { getRandomId } from '$lib/scripts/random-id';
	import type { ClearwindContext, COProp, ModifiersProp, RCOProp } from '$lib/_defines/types';
	import Icon, { type IconifyIcon } from '@iconify/svelte';
	import { createEventDispatcher, getContext } from 'svelte';

	/// Get theme
	const clearwindContext = getContext<ClearwindContext>('clearwind');

	/// Props
	export let rco: RCOProp | undefined = undefined;
	export let co: COProp<'Switch'> | undefined = undefined;
	export let modifiers: ModifiersProp | undefined = undefined;

	/** Label for the switch, alternatively use label slot */
	export let label = '';
	/** Name attribute */
	export let name = '';
	/** Value attribute, also used as the value for bind:group */
	export let value = 'on';
	/** Id to give the input, if none is provided a random one will be generated */
	export let id: string = getRandomId();
	/** Whether the switch is checked */
	export let checked = false;
	/** Whether the switch is disabled */
	export let disabled = false;
	/** Whether the switch is required */
	export let required = false;
	/** Sets the tabindex of the switch */
	export let tabIndex = 0;
	/** Get a reference to the input element */
	export let ref: HTMLInputElement | null = null;
	/** The bound group */
	export let group: string[] | undefined = undefined;
	/** Icon to display when checked */
	export let checkIcon: IconifyIcon | undefined = undefined;
	/** Icon to display when unchecked */
	export let uncheckIcon: IconifyIcon | undefined = undefined;
	/** Where to place the icons, can be "track" or "thumb" */
	export let iconPlacement: 'track' | 'thumb' = 'thumb';

	/// Styling
	$: classes = clearwindContext.getClasses({
		component: 'Switch',
		rcoTarget: 'root',
		info: {
			isDisabled: disabled,
			isRequired: required,
			isChecked: checked,
		},
		modifiers,
		rco,
		co,
	});

	/// Logic
	const dispatch = createEventDispatcher();

	$: checked = Array.isArray(group) ? group.includes(value) : checked;

	function onChange() {
		if (Array.isArray(group)) {
			group = group.includes(value)
				? group.filter((_value) => _value !== value)
				: [...group, value];
		} else {
			checked = !checked;
		}
	}
</script>

<!-- part: root -->
<label class={classes.root} for={id}>
	<!-- part: track -->
	<div class={classes.track}>
		<!-- part: input -->
		<input
			class={classes.input}
			type="checkbox"
			bind:this={ref}
			{id}
			{name}
			{value}
			{checked}
			{disabled}
			{required}
			{tabIndex}
			on:focus
			on:blur
			on:change={(ev) => {
				dispatch('change', ev.currentTarget.checked);
				onChange();
			}}
		/>
		<!-- part: thumb -->
		<div class={classes.thumb}>
			<!-- part: thumbicon -->
			{#if iconPlacement === 'thumb' && checkIcon && uncheckIcon}
				<span class={classes.thumbicon}>
					<Icon icon={checked ? checkIcon : uncheckIcon} />
				</span>
			{/if}
		</div>
		<!-- part: trackicon -->
		{#if iconPlacement === 'track' && checkIcon && uncheckIcon}
			<span class={classes.trackicon}>
				<Icon icon={checked ? checkIcon : uncheckIcon} />
			</span>
		{/if}
	</div>
	<!-- part: label -->
	{#if label || $$slots.label}
		<span class={classes.label}><slot name="label">{label}</slot></span>
	{/if}
</label>
