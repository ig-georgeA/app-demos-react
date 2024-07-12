import { Content1Type } from './content1-type';

export interface ContentType {
	type: string;
	name: string;
	flex: string;
	title: string;
	content: Content1Type[];
}
