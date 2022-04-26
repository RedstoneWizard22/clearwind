import type { Theme } from '../theme-types';
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
};

export default theme;
