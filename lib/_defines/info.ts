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
	Tooltip: {
		variant: string;
		size: string;
	};
	Window: {
		variant: string;
		size: string;
	};
	Alert: {
		type: 'success' | 'info' | 'warning' | 'error';
		hasTitle: boolean;
		hasBody: boolean;
		hasIcon: boolean;
	};
	Checkbox: {
		isDisabled: boolean;
		isRequired: boolean;
		hasLabel: boolean;
	};
};

export default Info;
