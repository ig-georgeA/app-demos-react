import { IgrCellTemplateContext, IgrColumn, IgrGrid, IgrGridModule } from '@infragistics/igniteui-react-grids';
import { useGetCustomerDtoList } from '../hooks/ignorthwind-apiv2-hooks';
import { useNavigate } from 'react-router-dom';
import '@infragistics/igniteui-react-grids/grids';
import styles from './dynamic-routing.module.css';
import createClassTransformer from '../style-utils';

IgrGridModule.register();

export default function DynamicRouting() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const { iGNorthwindAPIv2CustomerDto } = useGetCustomerDtoList();

  const columnBodyTemplate = (ctx: { dataContext: IgrCellTemplateContext }) => {
    return (
      <>
        <a href="" onClick={() => navigate(`/route-details`)} className={classes("typography__body-2 hyperlink")}>
          <span>{ctx.dataContext.cell.value}</span>
        </a>
      </>
    )
  }

  return (
    <>
      <div className={classes("row-layout dynamic-routing-container")}>
        <IgrGrid data={iGNorthwindAPIv2CustomerDto} primaryKey="customerId" displayDensity="cosy" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")} key={uuid()}>
          <IgrColumn field="customerId" dataType="string" header="customerId" sortable="true" bodyTemplate={columnBodyTemplate} selectable="false"></IgrColumn>
          <IgrColumn field="companyName" dataType="string" header="companyName" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="contactName" dataType="string" header="contactName" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="contactTitle" dataType="string" header="contactTitle" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.street" dataType="string" header="address street" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.city" dataType="string" header="address city" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.country" dataType="string" header="address country" sortable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.phone" dataType="string" header="address phone" sortable="true" selectable="false"></IgrColumn>
        </IgrGrid>
      </div>
    </>
  );
}
