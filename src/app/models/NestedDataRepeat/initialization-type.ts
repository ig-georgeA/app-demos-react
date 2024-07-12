import { DefaultPropValuesType } from './default-prop-values-type';

export interface InitializationType {
	name: string;
	locked: boolean;
	selector: string;
	defaultLayout: string;
	children: object[];
	defaultPropValues: DefaultPropValuesType[];
}
