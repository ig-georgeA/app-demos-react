import { PropertyEditorSettingsType } from './property-editor-settings-type';

export interface EditorInfoType {
	friendlyName: string;
	placeholder: string;
	isRequired: boolean;
	isVisible: boolean;
	isDisabled: boolean;
	enumName: string;
	order: number;
	propertyEditor: string;
	section: string;
	bindable: boolean;
	isShortVersion: string;
	tooltip: string;
	featureName: string;
	featureSubgroup: string;
	featureOptionsName: string;
	itemSelector: string;
	info: string;
	showLabel: boolean;
	propertyEditorSettings: PropertyEditorSettingsType;
}
