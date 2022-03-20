import type { Theme } from '../theme-types';
import { buttonTheme } from './button';
import { kbdTheme } from './kbd';
import { overalyTheme } from './overlay';
import { switchTheme } from './switch';

const theme: Theme = {
	Overlay: overalyTheme,
	Button: buttonTheme,
	Kbd: kbdTheme,
	Switch: switchTheme,
};

export default theme;
