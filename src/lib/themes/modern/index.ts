import type { Theme } from '../theme-types';
import { buttonTheme } from './button';
import { kbdTheme } from './kbd';
import { overalyTheme } from './overlay';

const theme: Theme = {
	Overlay: overalyTheme,
	Button: buttonTheme,
	Kbd: kbdTheme,
};

export default theme;
