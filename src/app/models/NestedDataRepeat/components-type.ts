import { ZonesType } from './zones-type';
import { TemplatesType } from './templates-type';
import { LayoutRulesType } from './layout-rules-type';
import { PropertiesPanelType } from './properties-panel-type';
import { AllowedChildrenType } from './allowed-children-type';
import { PropertiesType } from './properties-type';
import { ComponentDependenciesType } from './component-dependencies-type';

export interface ComponentsType {
	id: string;
	name: string;
	resizable: boolean;
	module: string;
	theme: string;
	keywords: string;
	selector: string;
	group: string;
	layoutRules: LayoutRulesType;
	allowAnyChildren: boolean;
	allowedChildren: AllowedChildrenType[];
	properties: PropertiesType[];
	propertiesPanel: PropertiesPanelType[];
	componentDependencies: ComponentDependenciesType[];
	libraryId: string;
	outlineName: string;
	parent: string;
	disabled: boolean;
	hidden: boolean;
	description: string;
	content: string;
	version: number;
	iconName: string;
	templates: TemplatesType[];
	zones: ZonesType[];
	isTogglable: boolean;
	isAttachable: boolean;
	isOverlay: boolean;
	ignoreToggleAction: boolean;
}
