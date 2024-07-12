import { EditorInfoType } from './editor-info-type';

export interface PropertiesType {
	id: string;
	basePropertyId: string;
	name: string;
	valueType: string;
	defaultValue: string;
	enumType: object;
	propertyType: string;
	mapping: string;
	editorInfo: EditorInfoType;
}
