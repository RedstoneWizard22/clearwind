import type { Theme } from '$lib/_defines/types';

import triangleAlertFill from '@iconify/icons-akar-icons/triangle-alert-fill.js';
import infoFill from '@iconify/icons-akar-icons/info-fill.js';
import circleCheckFill from '@iconify/icons-akar-icons/circle-check-fill.js';
import circleAlertFill from '@iconify/icons-akar-icons/circle-alert-fill.js';
import checkIcon from '@iconify/icons-akar-icons/check.js';
import crossIcon from '@iconify/icons-akar-icons/cross.js';
import minusIcon from '@iconify/icons-akar-icons/minus.js';

export const shared: Theme['shared'] = {
	icons: {
		warning: triangleAlertFill,
		error: circleAlertFill,
		success: circleCheckFill,
		info: infoFill,
		check: checkIcon,
		close: crossIcon,
		indeterminate: minusIcon,
	},
};
