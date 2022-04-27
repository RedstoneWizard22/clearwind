import type { Theme } from '$lib/_defines/types';

import triangleAlertFill from '@iconify/icons-akar-icons/triangle-alert-fill';
import infoFill from '@iconify/icons-akar-icons/info-fill';
import circleCheckFill from '@iconify/icons-akar-icons/circle-check-fill';
import circleAlertFill from '@iconify/icons-akar-icons/circle-alert-fill';
import checkIcon from '@iconify/icons-akar-icons/check';
import crossIcon from '@iconify/icons-akar-icons/cross';

export const shared: Theme['shared'] = {
	icons: {
		warning: triangleAlertFill,
		error: circleAlertFill,
		success: circleCheckFill,
		info: infoFill,
		check: checkIcon,
		close: crossIcon,
	},
};
