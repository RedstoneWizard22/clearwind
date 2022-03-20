import type { Classes } from './theme-tools';

//// Main theme type
export type Theme = {
	Overlay: OverlayTheme;
	Button: ButtonTheme;
	Kbd: KbdTheme;
	Switch: SwitchTheme;
};

//// Component types
/// Overlay
export type OverlayParts = 'base';
export type OverlayInfo = {
	variant: string;
};
export type OverlayTheme = {
	defaults: {
		variant: string;
	};
	apply: (info: OverlayInfo, classes: Classes<OverlayParts>) => void;
	extend?: (info: OverlayInfo, classes: Classes<OverlayParts>) => void;
};

/// Button
export type ButtonParts = 'base' | 'content' | 'leftIcon' | 'rightIcon';
export type ButtonInfo = {
	variant: string;
	size: string;
	isCompact: boolean;
	isDisabled: boolean;
	isLoading: boolean;
	hasLeftIcon: boolean;
	hasRightIcon: boolean;
	hasContent: boolean;
};
export type ButtonTheme = {
	defaults: {
		variant: string;
		size: string;
	};
	apply: (info: ButtonInfo, classes: Classes<ButtonParts>) => void;
	extend?: (info: ButtonInfo, classes: Classes<ButtonParts>) => void;
};

/// Kbd
export type KbdParts = 'base';
export type KbdInfo = Record<string, never>;
export type KbdTheme = {
	defaults: Record<string, never>;
	apply: (info: KbdInfo, classes: Classes<KbdParts>) => void;
	extend?: (info: KbdInfo, classes: Classes<KbdParts>) => void;
};

/// Switch
export type SwitchParts = 'base' | 'checkbox' | 'label';
export type SwitchInfo = {
	isDisabled: boolean;
	hasLabel: boolean;
	size: string;
};
export type SwitchTheme = {
	defaults: {
		size: string;
	};
	apply: (info: SwitchInfo, classes: Classes<SwitchParts>) => void;
	extend?: (info: SwitchInfo, classes: Classes<SwitchParts>) => void;
};
