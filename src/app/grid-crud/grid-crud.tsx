import { IgrActionStrip, IgrActionStripModule, IgrColumn, IgrGrid, IgrGridBaseDirective, IgrGridEditDoneEventArgs, IgrGridEditingActions, IgrGridModule, IgrGridPinningActions, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarTitle, IgrRowDataEventArgs } from '@infragistics/igniteui-react-grids';
import { useGetCustomerDtoList } from '../hooks/ignorthwind-apiv2-hooks';
import { deleteCustomerDto, postCustomerDto, putCustomerDto } from '../services/ignorthwind-apiv2';
import '@infragistics/igniteui-react-grids/grids';
import styles from './grid-crud.module.css';
import createClassTransformer from '../style-utils';

IgrActionStripModule.register();
IgrGridModule.register();

export default function GridCRUD() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { requestIGNorthwindAPIv2CustomerDto, iGNorthwindAPIv2CustomerDto } = useGetCustomerDtoList();

  function customersRowAdded(_s: IgrGridBaseDirective, args: IgrRowDataEventArgs) {
    postCustomerDto(args.detail.data).then((res) => {
      if (res) {
        requestIGNorthwindAPIv2CustomerDto();
      } else {
        // TODO: handle error here!
      }
    });
  }

  function customersRowDeleted(_s: IgrGridBaseDirective, args: IgrRowDataEventArgs) {
    deleteCustomerDto(args.detail.primaryKey).then((res) => {
      if (res) {
        requestIGNorthwindAPIv2CustomerDto();
      } else {
        // TODO: handle error here!
      }
    });
  }

  function customersRowEditDone(_s: IgrGridBaseDirective, args: IgrGridEditDoneEventArgs) {
    if (!args.detail.isAddRow) {
      putCustomerDto(args.detail.rowData).then((res) => {
        if (res) {
          requestIGNorthwindAPIv2CustomerDto();
        } else {
          // TODO: handle error here!
        }
      });
    }
  }

  return (
    <>
      <div className={classes("row-layout grid-crud-container")}>
        <IgrGrid data={iGNorthwindAPIv2CustomerDto} primaryKey="customerId" displayDensity="cosy" rowSelection="single" rowEditable="true" moving="true" allowFiltering="true" filterMode="quickFilter" rowAdded={customersRowAdded} rowDeleted={customersRowDeleted} rowEditDone={customersRowEditDone} className={classes("ig-typography ig-scrollbar grid-plus")}>
          <IgrGridToolbar>
            <IgrGridToolbarActions>
              <IgrGridToolbarPinning></IgrGridToolbarPinning>
              <IgrGridToolbarHiding></IgrGridToolbarHiding>
              <IgrGridToolbarAdvancedFiltering></IgrGridToolbarAdvancedFiltering>
            </IgrGridToolbarActions>
            <IgrGridToolbarTitle>
              <span key={uuid()}>Grid with CRUD</span>
            </IgrGridToolbarTitle>
          </IgrGridToolbar>
          <IgrColumn field="customerId" dataType="string" header="customerId" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="companyName" dataType="string" header="companyName" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="contactName" dataType="string" header="contactName" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="contactTitle" dataType="string" header="contactTitle" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.street" dataType="string" header="address street" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.city" dataType="string" header="address city" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.region" dataType="string" header="address region" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.country" dataType="string" header="address country" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.phone" dataType="string" header="address phone" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrActionStrip>
            <IgrGridPinningActions></IgrGridPinningActions>
            <IgrGridEditingActions addRow="true"></IgrGridEditingActions>
          </IgrActionStrip>
        </IgrGrid>
      </div>
    </>
  );
}
