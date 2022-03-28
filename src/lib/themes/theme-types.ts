const parts = {
	Overlay: ['base'],
	Button: ['base', 'content', 'leftIcon', 'rightIcon'],
	Kbd: ['base'],
	Switch: ['base', 'checkbox', 'label'],
	Drawer: ['root', 'backdrop', 'drawer'],
	Accordion: ['root'],
	AccordionItem: ['root', 'headroot', 'headcontent', 'headicon', 'body'],
	TabBar: ['root', 'spacer', 'tabscontainer'],
	Tab: ['root', 'leftIcon', 'rightIcon', 'label'],
} as const; // Must be as const so we can derive union types

type Info = {
	Overlay: {
		variant: string;
	};
	Button: {
		variant: string;
		size: string;
		isCompact: boolean;
		isDisabled: boolean;
		isLoading: boolean;
		hasLeftIcon: boolean;
		hasRightIcon: boolean;
		hasContent: boolean;
	};
	Kbd: {
		variant: string;
	};
	Switch: {
		isDisabled: boolean;
		hasLabel: boolean;
		size: string;
	};
	Drawer: {
		variant: string;
		size: string;
		position: 'top' | 'right' | 'bottom' | 'left';
	};
	Accordion: {
		variant: string;
		size: string;
		iconPosition: 'left' | 'right';
	};
	AccordionItem: {
		variant: string;
		size: string;
		iconPosition: 'left' | 'right';
		isExpanded: boolean;
	};
	TabBar: {
		variant: string;
		size: string;
		position: 'left' | 'right' | 'center';
		orientation: 'horizontal' | 'vertical';
		expand: boolean;
	};
	Tab: {
		variant: string;
		size: string;
		orientation: 'horizontal' | 'vertical';
		expand: boolean;
		isActive: boolean;
		isDisabled: boolean;
		hasLabel: boolean;
		hasLeftIcon: boolean;
		hasRightIcon: boolean;
	};
};

type Parts = {
	[K in keyof typeof parts]: typeof parts[K][number];
};

type Components = keyof Parts;

type ComponentTheme<T extends Components> = {
	variants: string[];
	sizes: ('xs' | 'sm' | 'md' | 'lg' | 'xl')[];
	core: COProp<T>;
	extension?: COProp<T>;
};

type Theme = {
	[K in Components]: ComponentTheme<K>;
};

type RCOProp = string;

type COProp<T extends Components> =
	| Partial<Record<Parts[T], string>>
	| ((info: Info[T]) => Partial<Record<Parts[T], string>>);

type ClearwindContext = {
	theme: Theme;
	twMerge: (...classLists: (string | false | null | undefined)[]) => string;
	getClasses: <T extends Components>(args: {
		component: T;
		rcoTarget: Parts[T];
		info: Info[T];
		rco?: RCOProp;
		co?: COProp<T>;
		requiredClasses?: COProp<T>;
	}) => Record<Parts[T], string>;
};

export { parts };
export type { COProp, RCOProp, Theme, ComponentTheme, Info, Parts, Components, ClearwindContext };
