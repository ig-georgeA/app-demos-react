import { InitializationType } from './initialization-type';

export interface ZonesType {
	zoneTag: string;
	dropArea: string;
	allSelectorsAllowed: boolean;
	allowedSelectors: object[];
	disallowedSelectors: object[];
	ignoreChildrenMargin: boolean;
	initialization: InitializationType[];
	allowEmpty: string;
}
