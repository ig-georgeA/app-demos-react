import { IgrButton, IgrButtonModule, IgrCalendar, IgrCalendarModule, IgrCard, IgrCardActions, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrTab, IgrTabPanel, IgrTabs, IgrTabsModule } from '@infragistics/igniteui-react';
import { IgrCategoryChart, IgrCategoryChartModule } from '@infragistics/igniteui-react-charts';
import { IgrColumn, IgrGrid, IgrGridModule, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrGridToolbarTitle } from '@infragistics/igniteui-react-grids';
import { useGetBoxOfficeRevenue } from '../hooks/financial-hooks';
import { useGetCustomers, useGetEmployees } from '../hooks/northwind-hooks';
import '@infragistics/igniteui-react-grids/grids';
import styles from './tab-layout.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrCalendarModule.register();
IgrCardModule.register();
IgrCategoryChartModule.register();
IgrGridModule.register();
IgrIconButtonModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrTabsModule.register();

export default function TabLayout() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { northwindCustomers } = useGetCustomers();
  const { northwindEmployees } = useGetEmployees();
  const { financialBoxOfficeRevenue } = useGetBoxOfficeRevenue();

  return (
    <>
      <div className={classes("row-layout tab-layout-container")}>
        <div className={classes("column-layout group")}>
          <IgrTabs className={classes("tabs")}>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
            <IgrTab selected="true" key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>info</span>
              </span>
              <span key={uuid()}>Label</span>
            </IgrTab>
            <IgrTab key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>backup</span>
              </span>
              <span key={uuid()}>Label</span>
            </IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
          </IgrTabs>
          <IgrTabs alignment="center" className={classes("tabs")}>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
            <IgrTab selected="true" key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>info</span>
              </span>
              <span key={uuid()}>Label</span>
            </IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
            <IgrTab key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>info</span>
              </span>
              <span key={uuid()}>Label</span>
            </IgrTab>
            <IgrTab key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>info</span>
              </span>
              <span key={uuid()}>Label</span>
            </IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
            <IgrTab key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>info</span>
              </span>
              <span key={uuid()}>Label</span>
            </IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
            <IgrTab key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>info</span>
              </span>
              <span key={uuid()}>Label</span>
            </IgrTab>
          </IgrTabs>
          <IgrTabs alignment="end" className={classes("tabs")}>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
            <IgrTab selected="true" key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>assignment</span>
              </span>
            </IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
            <IgrTab key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>account_balance_wallet</span>
              </span>
            </IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
            <IgrTab key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>account_circle</span>
              </span>
            </IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
            <IgrTab key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>info</span>
              </span>
            </IgrTab>
          </IgrTabs>
          <IgrTabs className={classes("tabs")}>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
            <IgrTab key={uuid()}></IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
            <IgrTab key={uuid()}></IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
            <IgrTab selected="true" key={uuid()}></IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
            <IgrTab key={uuid()}></IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
            <IgrTab key={uuid()}></IgrTab>
          </IgrTabs>
          <div className={classes("row-layout group_1")}>
            <IgrTabs alignment="justify" className={classes("tabs")}>
              <IgrTabPanel className={classes("row-layout tab-item-content_1")} key={uuid()}></IgrTabPanel>
              <IgrTab selected="true" key={uuid()}>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content_2")} key={uuid()}>
                <IgrCard className={classes("card")} key={uuid()}>
                  <IgrCardHeader key={uuid()}>
                    <h3 slot="title" key={uuid()}>
                      <span key={uuid()}>Title goes here...</span>
                    </h3>
                    <h5 slot="subtitle" key={uuid()}>
                      <span key={uuid()}>Subtitle goes here...</span>
                    </h5>
                  </IgrCardHeader>
                  <IgrCardActions className={classes("actions-content")} key={uuid()}>
                    <div style={{display: 'contents'}} slot="start" key={uuid()}>
                      <IgrButton variant="flat" size="large" className={classes("button")}>
                        <span key={uuid()}>Button</span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrButton>
                    </div>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat">
                        <span className={classes("material-icons")} key={uuid()}>
                          <span key={uuid()}>favorite</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat">
                        <span className={classes("material-icons")} key={uuid()}>
                          <span key={uuid()}>bookmark</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                    <div style={{display: 'contents'}} slot="end" key={uuid()}>
                      <IgrIconButton variant="flat">
                        <span className={classes("material-icons")} key={uuid()}>
                          <span key={uuid()}>share</span>
                        </span>
                        <IgrRipple key={uuid()}></IgrRipple>
                      </IgrIconButton>
                    </div>
                  </IgrCardActions>
                </IgrCard>
              </IgrTabPanel>
              <IgrTab key={uuid()}>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}>
                <IgrCalendar hideHeader="Horizontal" headerOrientation="horizontal" className={classes("calendar")} key={uuid()}></IgrCalendar>
              </IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>Label</span>
              </IgrTab>
              <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}></IgrTabPanel>
              <IgrTab key={uuid()}>
                <span className={classes("material-icons")} key={uuid()}>
                  <span key={uuid()}>info</span>
                </span>
                <span key={uuid()}>TabEnd</span>
              </IgrTab>
            </IgrTabs>
          </div>
        </div>
        <div className={classes("column-layout group")}>
          <IgrTabs alignment="justify" className={classes("tabs")}>
            <IgrTabPanel className={classes("column-layout tab-item-content_3")} key={uuid()}>
              <div className={classes("column-layout group_2")} key={uuid()}>
                <div className={classes("row-layout group_2")}>
                  <IgrInput label="Label" outlined="true" className={classes("input")}>
                    <span slot="prefix" key={uuid()}>
                      <span className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>person</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput type="password" label="Password" outlined="true" className={classes("input")}>
                    <span slot="prefix" key={uuid()}>
                      <span className={classes("material-icons icon")} key={uuid()}>
                        <span key={uuid()}>lock</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput label="Label" outlined="true" className={classes("input")}></IgrInput>
                </div>
                <IgrButton size="large" className={classes("button_1 button_1_1")}>
                  <span key={uuid()}>Some action</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <IgrGrid data={northwindCustomers} primaryKey="customerID" displayDensity="cosy" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                <IgrColumn field="customerID" dataType="string" header="customerID" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="companyName" dataType="string" header="companyName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="contactName" dataType="string" header="contactName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="contactTitle" dataType="string" header="contactTitle" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.street" dataType="string" header="street" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.city" dataType="string" header="city" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.region" dataType="string" header="region" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.postalCode" dataType="string" header="postalCode" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.country" dataType="string" header="country" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.phone" dataType="string" header="phone" sortable="true" selectable="false"></IgrColumn>
              </IgrGrid>
            </IgrTabPanel>
            <IgrTab selected="true" key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>grid_on</span>
              </span>
              <span key={uuid()}>input + grid</span>
            </IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content")} key={uuid()}>
              <IgrGrid data={northwindEmployees} primaryKey="employeeID" displayDensity="cosy" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                <IgrGridToolbar>
                  <IgrGridToolbarActions>
                    <IgrGridToolbarAdvancedFiltering></IgrGridToolbarAdvancedFiltering>
                  </IgrGridToolbarActions>
                  <IgrGridToolbarTitle>
                    <span key={uuid()}>Grid Toolbar</span>
                  </IgrGridToolbarTitle>
                </IgrGridToolbar>
                <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="lastName" dataType="string" header="lastName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="firstName" dataType="string" header="firstName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="title" dataType="string" header="title" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="birthDate" dataType="date" header="birthDate" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="hireDate" dataType="date" header="hireDate" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.street" dataType="string" header="street" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.city" dataType="string" header="city" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.region" dataType="string" header="region" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.postalCode" dataType="string" header="postalCode" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.country" dataType="string" header="country" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.phone" dataType="string" header="phone" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="managerID" dataType="number" header="managerID" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="notes" dataType="string" header="notes" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" sortable="true" selectable="false"></IgrColumn>
              </IgrGrid>
            </IgrTabPanel>
            <IgrTab key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>arrow_forward</span>
              </span>
              <span key={uuid()}>Row layout + grid</span>
            </IgrTab>
            <IgrTabPanel className={classes("column-layout tab-item-content")} key={uuid()}>
              <IgrGrid data={northwindCustomers} primaryKey="customerID" displayDensity="cosy" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                <IgrColumn field="customerID" dataType="string" header="customerID" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="companyName" dataType="string" header="companyName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="contactName" dataType="string" header="contactName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="contactTitle" dataType="string" header="contactTitle" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.street" dataType="string" header="street" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.city" dataType="string" header="city" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.region" dataType="string" header="region" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.postalCode" dataType="string" header="postalCode" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.country" dataType="string" header="country" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.phone" dataType="string" header="phone" sortable="true" selectable="false"></IgrColumn>
              </IgrGrid>
            </IgrTabPanel>
            <IgrTab key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>arrow_downward</span>
              </span>
              <span key={uuid()}>Column layout + grid</span>
            </IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content_4")} key={uuid()}>
              {northwindEmployees?.map((item) => (
                <IgrCard className={classes("card_1")} key={uuid()}>
                  <div className={classes("group_3")} key={uuid()}>
                    <IgrCardHeader>
                      <h3 slot="title" key={uuid()}>
                        <span key={uuid()}>{item.lastName}</span>
                      </h3>
                      <h5 slot="subtitle" key={uuid()}>
                        <span key={uuid()}>{item.title}</span>
                      </h5>
                    </IgrCardHeader>
                  </div>
                  <IgrCardMedia className={classes("media-content")} key={uuid()}>
                    <img src={item.avatarUrl} className={classes("image")} key={uuid()} />
                  </IgrCardMedia>
                </IgrCard>
              ))}
            </IgrTabPanel>
            <IgrTab key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>wrap_text</span>
              </span>
              <span key={uuid()}>Wrapping content</span>
            </IgrTab>
            <IgrTab key={uuid()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>bar_chart</span>
              </span>
              <span key={uuid()}>Chart</span>
            </IgrTab>
            <IgrTabPanel className={classes("row-layout tab-item-content_5")} key={uuid()}>
              <div className={classes("group_4")} key={uuid()}>
                <IgrCategoryChart dataSource={financialBoxOfficeRevenue} chartType="Column" computedPlotAreaMarginMode="Series"></IgrCategoryChart>
              </div>
            </IgrTabPanel>
          </IgrTabs>
        </div>
      </div>
    </>
  );
}
