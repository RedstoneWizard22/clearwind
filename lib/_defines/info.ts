type Info = {
	Alert: {
		type: 'success' | 'info' | 'warning' | 'error';
		hasTitle: boolean;
		hasBody: boolean;
		hasIcon: boolean;
	};
	Checkbox: {
		isDisabled: boolean;
		isRequired: boolean;
		isIndeterminate: boolean;
		isChecked: boolean;
	};
};

export default Info;
