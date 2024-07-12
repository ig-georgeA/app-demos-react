import { ComponentsType } from './components-type';

export interface NestedDataType {
	id: string;
	name: string;
	components: ComponentsType[];
	baseLibraryId: string;
	packageName: string;
	platform: number;
}
