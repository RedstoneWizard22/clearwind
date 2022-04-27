import type { Theme } from '$lib/_defines/types';

import { buttonTheme } from './button';
import { kbdTheme } from './kbd';
import { overalyTheme } from './overlay';
import { switchTheme } from './switch';
import { drawerTheme } from './drawer';
import { accordionTheme, accordionItemTheme } from './accordion';
import { tabBarTheme, tabTheme } from './tabbar';
import { tooltipTheme } from './tooltip';
import { windowTheme } from './window';
import { alertTheme } from './alert';

import { shared } from './shared';

const theme: Theme = {
	Overlay: overalyTheme,
	Button: buttonTheme,
	Kbd: kbdTheme,
	Switch: switchTheme,
	Drawer: drawerTheme,
	Accordion: accordionTheme,
	AccordionItem: accordionItemTheme,
	TabBar: tabBarTheme,
	Tab: tabTheme,
	Tooltip: tooltipTheme,
	Window: windowTheme,
	Alert: alertTheme,
	shared,
};

export default theme;
