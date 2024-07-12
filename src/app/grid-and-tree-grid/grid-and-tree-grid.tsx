import { IgrActionStrip, IgrActionStripModule, IgrColumn, IgrGrid, IgrGridBaseDirective, IgrGridEditDoneEventArgs, IgrGridEditingActions, IgrGridModule, IgrGridPinningActions, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarTitle, IgrPaginator, IgrRowSelectionEventArgs, IgrTreeGrid, IgrTreeGridModule } from '@infragistics/igniteui-react-grids';
import { useGetCustomerDtoList, useGetEmployeeDtoList } from '../hooks/ignorthwind-apiv2-hooks';
import { EmployeeDto } from '../models/IGNorthwindAPIv2/employee-dto';
import { putEmployeeDto } from '../services/ignorthwind-apiv2';
import { useState } from 'react';
import '@infragistics/igniteui-react-grids/grids';
import styles from './grid-and-tree-grid.module.css';
import createClassTransformer from '../style-utils';

IgrActionStripModule.register();
IgrGridModule.register();
IgrTreeGridModule.register();

export default function GridAndTreeGrid() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [_selectedEmployee, setSelectedEmployee] = useState<EmployeeDto | undefined>();
  const { iGNorthwindAPIv2CustomerDto } = useGetCustomerDtoList();
  const { requestIGNorthwindAPIv2EmployeeDto, iGNorthwindAPIv2EmployeeDto } = useGetEmployeeDtoList();

  function employeesRowEditDone(_s: IgrGridBaseDirective, args: IgrGridEditDoneEventArgs) {
    if (!args.detail.isAddRow) {
      putEmployeeDto(args.detail.rowData).then((res) => {
        if (res) {
          requestIGNorthwindAPIv2EmployeeDto();
        } else {
          // TODO: handle error here!
        }
      });
    }
  }

  function treeGridRowSelectionChanging(_: IgrGridBaseDirective, event: IgrRowSelectionEventArgs) {
    setSelectedEmployee(event.detail.newSelection[0] as EmployeeDto);
  }

  const columnBodyTemplate = () => {
    return (
      <>
      </>
    )
  }

  return (
    <>
      <div className={classes("column-layout grid-and-tree-grid-container")}>
        <div className={classes("row-layout group")}>
          <IgrGrid data={iGNorthwindAPIv2CustomerDto} primaryKey="customerId" displayDensity="cosy" rowSelection="multiple" rowEditable="true" moving="true" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar list")}>
            <IgrGridToolbar>
              <IgrGridToolbarActions>
                <IgrGridToolbarPinning></IgrGridToolbarPinning>
                <IgrGridToolbarHiding></IgrGridToolbarHiding>
              </IgrGridToolbarActions>
              <IgrGridToolbarTitle>
                <span key={uuid()}>Excel style filtering</span>
              </IgrGridToolbarTitle>
            </IgrGridToolbar>
            <IgrColumn field="customerId" dataType="string" header="customerId" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
            <IgrColumn field="companyName" dataType="string" header="companyName" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
            <IgrColumn field="contactName" dataType="string" header="contactName" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
            <IgrColumn field="contactTitle" dataType="string" header="contactTitle" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.street" dataType="string" header="address street" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.city" dataType="string" header="address city" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.region" dataType="string" header="address region" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.country" dataType="string" header="address country" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.phone" dataType="string" header="address phone" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
            <IgrPaginator></IgrPaginator>
          </IgrGrid>
          <IgrTreeGrid data={iGNorthwindAPIv2EmployeeDto} primaryKey="employeeId" foreignKey="reportsTo" rowEditable="true" rowSelection="single" displayDensity="cosy" allowFiltering="true" rowEditDone={employeesRowEditDone} rowSelectionChanging={(s, event) => treeGridRowSelectionChanging(s, event)} className={classes("ig-typography ig-scrollbar list")} key={uuid()}>
            <IgrGridToolbar>
              <IgrGridToolbarTitle>
                <span key={uuid()}>Tree grid</span>
              </IgrGridToolbarTitle>
            </IgrGridToolbar>
            <IgrColumn field="lastName" dataType="string" header="lastName" sortable="true" selectable="false"></IgrColumn>
            <IgrActionStrip>
              <IgrGridPinningActions></IgrGridPinningActions>
              <IgrGridEditingActions addRow="true"></IgrGridEditingActions>
            </IgrActionStrip>
            <IgrColumn field="firstName" dataType="string" header="firstName" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="title" dataType="string" header="title" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable="true" bodyTemplate={columnBodyTemplate} selectable="false"></IgrColumn>
            <IgrColumn field="birthDate" dataType="string" header="birthDate" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="hireDate" dataType="string" header="hireDate" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="addressId" dataType="string" header="addressId" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.street" dataType="string" header="address street" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.city" dataType="string" header="address city" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.region" dataType="string" header="address region" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.country" dataType="string" header="address country" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.phone" dataType="string" header="address phone" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="notes" dataType="string" header="notes" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" sortable="true" selectable="false"></IgrColumn>
            <IgrColumn field="reportsTo" dataType="number" header="reportsTo" sortable="true" selectable="false"></IgrColumn>
          </IgrTreeGrid>
        </div>
      </div>
    </>
  );
}
