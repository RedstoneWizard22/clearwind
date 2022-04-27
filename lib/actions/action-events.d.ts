/*
 * This file is used to define props for the events fired by custom actions.
 */

declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onclickoutside?: () => void;
		onescapekey?: () => void;
		onmodalclose?: () => void;
	}
}
