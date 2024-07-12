import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCombo, IgrComboModule, IgrDialog, IgrDialogModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { IgrColumn, IgrGrid, IgrGridBaseDirective, IgrGridModule, IgrGridToolbar, IgrGridToolbarTitle, IgrRowSelectionEventArgs } from '@infragistics/igniteui-react-grids';
import { useGetCustomerDto, useGetOrderDtoList, useGetProductDtoList } from '../hooks/ignorthwind-apiv2-hooks';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '@infragistics/igniteui-react-grids/grids';
import styles from './route-details.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrComboModule.register();
IgrDialogModule.register();
IgrGridModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function RouteDetails() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const routeParams = useParams();
  const _rCustomerID = routeParams.rCustomerID ?? 'ALFKI';
  const dialog = useRef<IgrDialog>(null);
  const __loaded = useRef<boolean>(false);
  const [varOrderID, setVarOrderID] = useState<number | undefined>();
  const [singleSelectComboVisible, setSingleSelectComboVisible] = useState<boolean | undefined>(false);
  const [avatarVisible, setAvatarVisible] = useState<boolean | undefined>(false);
  const { iGNorthwindAPIv2CustomerDto: selectedCustomer } = useGetCustomerDto(rCustomerID);
  const { iGNorthwindAPIv2OrderDto } = useGetOrderDtoList(rCustomerID);
  const { iGNorthwindAPIv2ProductDto } = useGetProductDtoList(varOrderID as any);

  useEffect(() => {
    if (__loaded.current) {
      setVarOrderID(undefined);
    }
  }, [selectedCustomer]);

  useEffect(() => {
    __loaded.current = true;
    return () => {
      __loaded.current = false;
    }
  }, []);

  function gridRowSelectionChanging(_: IgrGridBaseDirective, event: IgrRowSelectionEventArgs) {
    setVarOrderID(event.detail.newSelection?.orderId as number);
  }

  return (
    <>
      <div className={classes("row-layout route-details-container")}>
        <div className={classes("column-layout group")}>
          {singleSelectComboVisible && (
            <IgrCombo outlined="true" label="Select customer" displayKey="customerId" singleSelect="true" className={classes("single-select-combo")}></IgrCombo>
          )}
          <IgrButton variant="outlined" size="large" clicked={() => navigate(`/dynamic-routing`)} className={classes("button button_2")}>
            <span className={classes("material-icons icon")} key={uuid()}>
              <span key={uuid()}>arrow_back</span>
            </span>
            <span key={uuid()}>Go back</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <div className={classes("column-layout group_1")}>
            <div style={{display: 'contents'}} onClick={() => dialog?.current?.toggle()}>
              {avatarVisible && (
                <IgrAvatar shape="rounded" size="medium" className={classes("avatar avatar_1")}></IgrAvatar>
              )}
            </div>
            <div className={classes("row-layout group_2")}>
              <h4 className={classes("h4")}>
                <span>{selectedCustomer?.customerId}</span>
              </h4>
            </div>
            <h6 className={classes("content")}>
              <span>{selectedCustomer?.companyName}</span>
            </h6>
            <div className={classes("row-layout group_3")}>
              <p className={classes("typography__caption content")}>
                <span>{selectedCustomer?.address.street}</span>
              </p>
              <p className={classes("typography__caption content")}>
                <span>{selectedCustomer?.address.city}</span>
              </p>
              <p className={classes("typography__caption content")}>
                <span>{selectedCustomer?.address.country}</span>
              </p>
            </div>
          </div>
          <div className={classes("column-layout group_4")}>
            <IgrGrid data={iGNorthwindAPIv2OrderDto} primaryKey="orderId" displayDensity="cosy" rowSelection="multiple" allowFiltering="true" filterMode="excelStyleFilter" rowSelectionChanging={(s, event) => gridRowSelectionChanging(s, event)} className={classes("ig-typography ig-scrollbar grid")}>
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
            <IgrGrid data={iGNorthwindAPIv2ProductDto} primaryKey="productId" displayDensity="cosy" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
              <IgrGridToolbar>
                <IgrGridToolbarTitle>
                  <span key={uuid()}>Order details</span>
                </IgrGridToolbarTitle>
              </IgrGridToolbar>
              <IgrColumn field="productId" dataType="number" header="productId" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="supplierId" dataType="number" header="supplierId" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="categoryId" dataType="number" header="categoryId" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="quantityPerUnit" dataType="string" header="quantityPerUnit" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="unitPrice" dataType="number" header="unitPrice" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="unitsInStock" dataType="number" header="unitsInStock" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="unitsOnOrder" dataType="number" header="unitsOnOrder" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="reorderLevel" dataType="number" header="reorderLevel" sortable="true" selectable="false"></IgrColumn>
              <IgrColumn field="discontinued" dataType="boolean" header="discontinued" sortable="true" selectable="false"></IgrColumn>
            </IgrGrid>
          </div>
        </div>
        <IgrDialog closeOnOutsideClick="true" ref={dialog}>
          <h5 slot="title" key={uuid()}>
            <span>What will we cover today?</span>
          </h5>
          <IgrList className={classes("list")} key={uuid()}>
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
            <IgrButton variant="outlined" size="large" clicked={() => dialog?.current?.toggle()} className={classes("button_1")} key={uuid()}>
              <span key={uuid()}>Let's get started!</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
      </div>
    </>
  );
}
