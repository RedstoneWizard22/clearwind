<!--
  @component
  Get boolean input from a user
-->
<script lang="ts">
	import { getRandomId } from '$lib/scripts/random-id';
	import type { RCOProp, ClearwindContext, COProp, ModifiersProp } from '$lib/_defines/types';
	import Icon from '@iconify/svelte';
	import type { IconifyIcon } from '@iconify/svelte';
	import { createEventDispatcher, getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	/// Get theme
	const clearwindContext = getContext<ClearwindContext>('clearwind');
	const icons = clearwindContext.theme.shared.icons;

	/// Props
	export let rco: RCOProp | undefined = undefined;
	export let co: COProp<'Checkbox'> | undefined = undefined;
	export let modifiers: ModifiersProp | undefined = undefined;

	/** Icon to use when the checkbox is checked */
	export let checkIcon: IconifyIcon = icons.check;
	/** Icon to use when the checkbox is indeterminate checked */
	export let intermediateIcon: IconifyIcon = icons.indeterminate;
	/** Label for the checkbox */
	export let label = '';
	/** Name property of the checkbox */
	export let name = '';
	/** Value property of the checkbox */
	export let value = 'on';
	/** Id to give the checkbox, if none is provided a random one will be generated */
	export let id: string = getRandomId();
	/** Whether the checkbox is checked */
	export let checked = false;
	/** Whether the checkbox is indeterminate. This only changes the icon,
	 * it does not modify the state of the checkbox. */
	export let indeterminate = false;
	/** Whether the checkbox is disabled */
	export let disabled = false;
	/** Whether the checkbox is required */
	export let required = false;
	/** Sets the tabindex of the checkbox */
	export let tabIndex = 0;
	/** Get a reference to the input element */
	export let ref: HTMLInputElement | null = null;
	/** The bound group */
	export let group: string[] | undefined = undefined;

	/// Styling
	$: classes = clearwindContext.getClasses({
		component: 'Checkbox',
		rcoTarget: 'root',
		info: {
			isDisabled: disabled,
			isRequired: required,
			isChecked: checked,
			isIndeterminate: indeterminate,
		},
		requiredClasses: {
			checkboxdiv: 'relative',
			icon: 'absolute pointer-events-none',
		},
		modifiers,
		rco,
		co,
	});

	/// Logic
	const dispatch = createEventDispatcher();

	$: checked = indeterminate ? false : Array.isArray(group) ? group.includes(value) : checked;

	function onChange() {
		if (indeterminate) return;

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
<div class={classes.root}>
	<!-- part: checkboxdiv -->
	<div class={classes.checkboxdiv}>
		<!-- part: checkbox -->
		<input
			class={classes.input}
			type="checkbox"
			{checked}
			bind:this={ref}
			{id}
			{name}
			{value}
			{disabled}
			{tabIndex}
			on:focus
			on:blur
			on:change={(ev) => {
				dispatch('change', ev.currentTarget.checked);
				onChange();
			}}
		/>
		<!-- part: icon -->
		{#if checked || indeterminate}
			<div transition:fly={{ y: 5, duration: 250 }} class={classes.icon}>
				<Icon icon={indeterminate ? intermediateIcon : checkIcon} />
			</div>
		{/if}
	</div>
	<!-- part: label -->
	{#if label || $$slots.label}
		<label class={classes.label} for={id}><slot name="label">{label}</slot></label>
	{/if}
</div>
