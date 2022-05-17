import type { Theme } from '$lib/_defines/types';

import { alertTheme } from './alert';
import { checkboxTheme } from './checkbox';
import { switchTheme } from './switch';

import { shared } from './shared';

const theme: Theme = {
	Alert: alertTheme,
	Checkbox: checkboxTheme,
	Switch: switchTheme,
	shared,
};

export default theme;
