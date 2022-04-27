/**
 * Action which fires a custom `clickoutside` event when the user clicks outside
 * of the calling element.
 *
 * The `active` prop can be used to disable the action.
 */
export function clickOutside(node: HTMLElement, { active = true }): SvelteActionReturnType {
	const handleClick = (event: MouseEvent) => {
		if (active && !node.contains(event.target as Node)) {
			node.dispatchEvent(new CustomEvent('clickoutside'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		},
		update(newProps) {
			if ('active' in newProps) {
				active = newProps.active;
			}
		},
	};
}

/**
 * Action which listens for the escape key being pressed globally,
 * firing an `escapekey` custom event.
 *
 * The `active` prop can be used to disable the action.
 */
export function escapeKey(node: HTMLElement, { active = false }): SvelteActionReturnType {
	const handleKeydown = (event: KeyboardEvent) => {
		if (active && event.key === 'Escape') {
			node.dispatchEvent(new CustomEvent('escapekey'));
		}
	};

	document.addEventListener('keydown', handleKeydown, true);

	return {
		destroy() {
			document.removeEventListener('keydown', handleKeydown, true);
		},
		update(newProps) {
			if ('active' in newProps) {
				active = newProps.active;
			}
		},
	};
}

/**
 * Action used to controll auto-closing of modals. It fires a `modalclose` event
 * when the user clicks outside the calling element, or presses the escape key.
 *
 * Props `closeOnClickOutside` and `closeOnEscapeKey` can be used to limit what
 * actions trigger the event.
 */
export function modalClose(
	node: HTMLElement,
	{ closeOnClickOutside = true, closeOnEscape = true }
): SvelteActionReturnType {
	const handleClick = (event: MouseEvent) => {
		if (closeOnClickOutside && !node.contains(event.target as Node)) {
			node.dispatchEvent(new CustomEvent('modalclose'));
		}
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (closeOnEscape && event.key === 'Escape') {
			node.dispatchEvent(new CustomEvent('modalclose'));
		}
	};

	document.addEventListener('click', handleClick, true);
	document.addEventListener('keydown', handleKeydown, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
			document.removeEventListener('keydown', handleKeydown, true);
		},
		update(newProps) {
			if ('closeOnClickOutside' in newProps) {
				closeOnClickOutside = newProps.closeOnClickOutside;
			}
			if ('closeOnEscape' in newProps) {
				closeOnEscape = newProps.closeOnEscape;
			}
		},
	};
}

/**
 * Action which locks scrolling on an element by setting the `overflow` style
 * property to `hidden`. The active prop can be used to disable the action.
 */
export function scrollLock(node: HTMLElement, { active = true }): SvelteActionReturnType {
	const originalOverflow = node.style.overflow;

	function run() {
		if (active) {
			node.style.overflow = 'hidden';
		} else {
			node.style.overflow = '';
		}
	}

	run();

	return {
		destroy() {
			node.style.overflow = originalOverflow;
		},
		update(newProps) {
			if ('active' in newProps) {
				active = newProps.active;
			}
			run();
		},
	};
}
