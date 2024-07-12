export interface PropertyEditorSettingsType {
	minValue: number;
	supportsEmpty: boolean;
	propertyName: string;
	checkedValue: boolean;
	uncheckedValue: boolean;
	selectAllLabel: string;
	clearAllLabel: string;
	summaryLabel: string;
	summaryValue: string;
	invertValue: boolean;
	includeNestedFields: boolean;
	showClearAction: boolean;
	acceptType: string;
}
