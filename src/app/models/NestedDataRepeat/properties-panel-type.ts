import { ContentType } from './content-type';

export interface PropertiesPanelType {
	type: string;
	name: string;
	flex: string;
	title: string;
	content: ContentType[];
	info: string;
}
