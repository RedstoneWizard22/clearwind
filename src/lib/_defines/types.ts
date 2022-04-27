import type parts from './parts';
import type Info from './info';
import type Extras from './extras';
import type { IconifyIcon } from '@iconify/svelte';

type Parts = {
	[K in keyof typeof parts]: typeof parts[K][number];
};
type Components = keyof Parts;

type RCOProp = string;
type COProp<T extends Components> =
	| Partial<Record<Parts[T], string>>
	| ((info: Info[T], variants: Set<string>) => Partial<Record<Parts[T], string>>);
type VariantsProp = string | string[];

type ComponentTheme<T extends Components> = {
	variants: string[];
	defaultVariant: string | string[];
	core: COProp<T>;
	extension?: COProp<T>;
};

type Theme = {
	[K in Components]: ComponentTheme<K>;
} & {
	shared: {
		icons: {
			warning: IconifyIcon;
			error: IconifyIcon;
			success: IconifyIcon;
			info: IconifyIcon;
			check: IconifyIcon;
			close: IconifyIcon;
		};
	};
};

type ClearwindContext = {
	theme: Theme;
	twMerge: (...classLists: (string | false | null | undefined)[]) => string;
	getClasses: <T extends Components>(args: {
		component: T;
		rcoTarget: Parts[T];
		info: Info[T];
		variants?: VariantsProp;
		rco?: RCOProp;
		co?: COProp<T>;
		requiredClasses?: COProp<T>;
	}) => Record<Parts[T], string>;
};

export type {
	Parts,
	Components,
	RCOProp,
	COProp,
	VariantsProp,
	ComponentTheme,
	Theme,
	Info,
	Extras,
	ClearwindContext,
};
