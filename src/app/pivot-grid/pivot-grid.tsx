import { IgrPivotDataSelector, IgrPivotDataSelectorModule, IgrPivotGrid, IgrPivotGridModule } from '@infragistics/igniteui-react-grids';
import { useGetSales } from '../hooks/financial-hooks';
import { IgrPivotDateDimension, IgrPivotDateDimensionOptions } from 'igniteui-react-grids';
import { useRef } from 'react';
import '@infragistics/igniteui-react-grids/grids';
import styles from './pivot-grid.module.css';
import createClassTransformer from '../style-utils';

IgrPivotDataSelectorModule.register();
IgrPivotGridModule.register();

export default function PivotGrid() {
  const classes = createClassTransformer(styles);
  const dateDimension = new IgrPivotDateDimension();
  dateDimension.memberName = 'Date';
  dateDimension.enabled = true;

  const dateDimensionOptions: IgrPivotDateDimensionOptions = {} as IgrPivotDateDimensionOptions;
  dateDimensionOptions.years = true;
  dateDimensionOptions.months = false;
  dateDimensionOptions.quarters = true;

  dateDimension.options = dateDimensionOptions;
  const pivotConfigHierarchy: any = {
    columns: [
      {
        memberName: 'Country',
        enabled: true,
      },
      {
        memberName: 'Product',
        enabled: true,
      },
    ],
    rows: [
      dateDimension,
    ],
    values: [
      {
        member: 'Sales',
        aggregate: {
          aggregatorName: 'SUM',
          key: 'Sum Of Sales',
          label: 'Sum',
        },
        enabled: false,
        dataType: 'currency',
      },
      {
        member: 'Profit',
        aggregate: {
          aggregatorName: 'SUM',
          key: 'Sum Of Profit',
          label: 'Sum',
        },
        enabled: true,
        dataType: 'currency',
      },
    ],
    filters: [
      {
        memberName: 'MonthName',
        enabled: false,
      },
    ],
  };
  const pivotGrid = useRef<IgrPivotGrid>(null);
  const pivotDataSelector = useRef<IgrPivotDataSelector>(null);
  const { financialSales } = useGetSales();

  return (
    <>
      <div className={classes("row-layout pivot-grid-container")}>
        <div className={classes("row-layout group")}>
          <IgrPivotGrid data={financialSales} pivotConfiguration={pivotConfigHierarchy} superCompactMode="true" defaultExpandState="true" ref={pivotGrid} className={classes("ig-typography ig-scrollbar pivot-grid")}></IgrPivotGrid>
          <IgrPivotDataSelector grid={pivotGrid as any} ref={pivotDataSelector}></IgrPivotDataSelector>
        </div>
      </div>
    </>
  );
}
