import type { Theme } from '$lib/_defines/types';

import { alertTheme } from './alert';
import { checkboxTheme } from './checkbox';

import { shared } from './shared';

const theme: Theme = {
	Alert: alertTheme,
	Checkbox: checkboxTheme,
	shared,
};

export default theme;
