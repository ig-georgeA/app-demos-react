import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCombo, IgrComboModule, IgrDialog, IgrDialogModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { IgrColumn, IgrGrid, IgrGridBaseDirective, IgrGridModule, IgrGridToolbar, IgrGridToolbarTitle, IgrRowSelectionEventArgs } from '@infragistics/igniteui-react-grids';
import { useGetCustomerDto, useGetCustomerDtoList, useGetOrderDetailDtoList, useGetOrderDtoList } from '../hooks/ignorthwind-apiv2-hooks';
import { useEffect, useRef, useState } from 'react';
import '@infragistics/igniteui-react-grids/grids';
import styles from './selection-detail.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrComboModule.register();
IgrDialogModule.register();
IgrGridModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function SelectionDetail() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const _varCustomerID = 'ALFKI';
  const dialog1 = useRef<IgrDialog>(null);
  const __loaded = useRef<boolean>(false);
  const [varOrderID1, setVarOrderID1] = useState<number | undefined>(10248);
  const [singleSelectComboVisible1, setSingleSelectComboVisible1] = useState<boolean | undefined>(false);
  const { iGNorthwindAPIv2CustomerDto: varCustomer, setIGNorthwindAPIv2CustomerDto: setVarCustomer } = useGetCustomerDto('ALFKI');
  const { iGNorthwindAPIv2CustomerDto } = useGetCustomerDtoList();
  const { iGNorthwindAPIv2OrderDto } = useGetOrderDtoList(varCustomer?.customerId);
  const { iGNorthwindAPIv2OrderDetailDto } = useGetOrderDetailDtoList(varOrderID1 as any);

  useEffect(() => {
    if (__loaded.current) {
      setVarOrderID1(undefined);
    }
  }, [varCustomer]);

  useEffect(() => {
    __loaded.current = true;
    return () => {
      __loaded.current = false;
    }
  }, []);

  function gridRowSelectionChanging(_: IgrGridBaseDirective, event: IgrRowSelectionEventArgs) {
    setVarOrderID1(event.detail.newSelection[0]?.orderId as number);
  }

  return (
    <>
      <div className={classes("row-layout selection-detail-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <IgrList className={classes("list")}>
              {iGNorthwindAPIv2CustomerDto?.map((item) => (
                <div style={{display: 'contents'}} onClick={() => setVarCustomer(item)} key={uuid()}>
                  <IgrListItem>
                    <div slot="title" key={uuid()}>{item.companyName}</div>
                    <div slot="subtitle" key={uuid()}>{item.customerId}</div>
                  </IgrListItem>
                </div>
              ))}
            </IgrList>
          </div>
          <div className={classes("column-layout group_2")}>
            {singleSelectComboVisible1 && (
              <IgrCombo outlined="true" label="Label/Placeholder" displayKey="customerId" singleSelect="true" className={classes("single-select-combo")}></IgrCombo>
            )}
            <div className={classes("column-layout group_3")}>
              <div style={{display: 'contents'}} onClick={() => dialog1?.current?.toggle()}>
                <IgrAvatar shape="rounded" size="medium" className={classes("avatar avatar_1")}></IgrAvatar>
              </div>
              <h4 className={classes("content")}>
                <span>{varCustomer?.customerId}</span>
              </h4>
              <h6 className={classes("content")}>
                <span>{varCustomer?.companyName}</span>
              </h6>
              <div className={classes("row-layout group_4")}>
                <p className={classes("typography__caption content")}>
                  <span>{varCustomer?.address.street}</span>
                </p>
                <p className={classes("typography__caption content")}>
                  <span>{varCustomer?.address.city}</span>
                </p>
                <p className={classes("typography__caption content")}>
                  <span>{varCustomer?.address.country}</span>
                </p>
              </div>
            </div>
            <div className={classes("column-layout group_5")}>
              <IgrGrid data={iGNorthwindAPIv2OrderDto} primaryKey="orderId" displayDensity="cosy" rowSelection="single" allowFiltering="true" filterMode="excelStyleFilter" rowSelectionChanging={(s, event) => gridRowSelectionChanging(s, event)} className={classes("ig-typography ig-scrollbar grid")}>
                <IgrGridToolbar>
                  <IgrGridToolbarTitle>
                    <span key={uuid()}>Customer orders</span>
                  </IgrGridToolbarTitle>
                </IgrGridToolbar>
                <IgrColumn field="orderId" dataType="number" header="orderId" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="customerId" dataType="string" header="customerId" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="employeeId" dataType="number" header="employeeId" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipperId" dataType="number" header="shipperId" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="orderDate" dataType="string" header="orderDate" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="requiredDate" dataType="string" header="requiredDate" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipVia" dataType="number" header="shipVia" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="freight" dataType="number" header="freight" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipName" dataType="string" header="shipName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipAddress.street" dataType="string" header="shipAddress street" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipAddress.city" dataType="string" header="shipAddress city" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipAddress.region" dataType="string" header="shipAddress region" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipAddress.postalCode" dataType="string" header="shipAddress postalCode" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipAddress.country" dataType="string" header="shipAddress country" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="shipAddress.phone" dataType="string" header="shipAddress phone" sortable="true" selectable="false"></IgrColumn>
              </IgrGrid>
              <IgrGrid data={iGNorthwindAPIv2OrderDetailDto} primaryKey="orderId" displayDensity="cosy" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                <IgrGridToolbar>
                  <IgrGridToolbarTitle>
                    <span key={uuid()}>Order details</span>
                  </IgrGridToolbarTitle>
                </IgrGridToolbar>
                <IgrColumn field="orderId" dataType="number" header="orderId" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="productId" dataType="number" header="productId" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="unitPrice" dataType="number" header="unitPrice" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="quantity" dataType="number" header="quantity" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="discount" dataType="number" header="discount" sortable="true" selectable="false"></IgrColumn>
              </IgrGrid>
            </div>
          </div>
          <IgrDialog closeOnOutsideClick="true" ref={dialog1}>
            <h5 slot="title" key={uuid()}>
              <span>What will we cover today?</span>
            </h5>
            <IgrList className={classes("list_1")} key={uuid()}>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar_1_1")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>looks_one</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Create variables</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar_1_2")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>looks_two</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Update variable value</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar_1_3")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>looks_3</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Use variable in API request</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar_1_4")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>looks_4</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Bind component property to variable</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar_1_5")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>looks_5</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Manage variables</div>
              </IgrListItem>
            </IgrList>
            <div slot="footer" key={uuid()}>
              <IgrButton variant="outlined" size="large" clicked={() => dialog1?.current?.toggle()} className={classes("button")} key={uuid()}>
                <span key={uuid()}>Let's get started!</span>
                <IgrRipple key={uuid()}></IgrRipple>
              </IgrButton>
            </div>
          </IgrDialog>
        </div>
      </div>
    </>
  );
}
