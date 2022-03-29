import { autoUpdate, computePosition } from '@floating-ui/dom';
import type {
	Placement,
	Middleware,
	ComputePositionReturn,
	VirtualElement,
} from '@floating-ui/dom';

export type UseFloatinguiOptions = {
	/** Reference/Target element for tooltip */
	target: Element | VirtualElement;
	/** Placement of tooltip */
	placement: Placement;
	/** Floating-ui middleware array */
	middleware: Middleware[];
	/** If true tooltip will be hidden whenever middleWare.hide is true (default true).
	 * Note you must add the hide middleware for this to work
	 */
	autoHide?: boolean;
	/** If provided the arrow will be automatically positioned.
	 * Note you must add the arrow middleware for this to work
	 */
	arrow?: HTMLElement;
	/** Callback to run each time a new position is computed */
	onCompute?: (data: ComputePositionReturn) => void;
	/** Allows you to access the updater, incase you need to force updates */
	setUpdater?: (updater: () => void) => void;
};

/** Svelte action which simplifies using an element as a floating-ui poppover */
export function floatingui(
	node: HTMLElement,
	{
		target,
		placement,
		middleware,
		autoHide = true,
		arrow,
		onCompute,
		setUpdater,
	}: UseFloatinguiOptions
) {
	let cleanup: () => void | undefined;

	if (target) {
		cleanup = autoUpdate(target, node, update);
	}

	setUpdater?.(update);

	function update() {
		computePosition(target, node, {
			placement: placement,
			middleware: middleware,
		}).then((data) => {
			const { x, y, placement, middlewareData } = data;

			// Position the tooltip
			Object.assign(node.style, {
				left: `${x}px`,
				top: `${y}px`,
			});

			// Auto hide the tooltip (if autoHide is true)
			const hide = middlewareData.hide;
			if (autoHide && hide) {
				Object.assign(node.style, {
					display: hide.referenceHidden ? 'none' : '',
				});
			}

			// Position the arrow (if one was provided)
			if (arrow && middlewareData.arrow) {
				const staticSide = {
					top: 'bottom',
					right: 'left',
					bottom: 'top',
					left: 'right',
				}[placement.split('-')[0]] as string;

				const a = middlewareData.arrow;

				Object.assign(arrow.style, {
					left: a.x ? `${a.x}px` : '',
					top: a.y ? `${a.y}px` : '',
					right: '',
					bottom: '',
					[staticSide]: `-${
						staticSide == 'top' || staticSide == 'bottom'
							? arrow.clientHeight / 2
							: arrow.clientWidth / 2
					}px`,
				});
			}

			// Call the onCompute callback
			onCompute?.(data);
		});
	}

	return {
		destroy() {
			cleanup?.();
		},
		update(newProps: UseFloatinguiOptions) {
			if (newProps.target !== target) {
				cleanup?.();
				target = newProps.target;

				cleanup = autoUpdate(target, node, update);
			}
			placement = newProps.placement;
			middleware = newProps.middleware;
			arrow = newProps.arrow;
			autoHide = newProps.autoHide ?? true;
		},
	};
}
