import { IgrCombo, IgrComboModule, IgrSelect, IgrSelectItem, IgrSelectModule } from '@infragistics/igniteui-react';
import { IgrDatePicker, IgrDatePickerModule } from '@infragistics/igniteui-react-inputs';
import { useGetCustomers, useGetEmployees } from '../hooks/northwind-hooks';
import { useState } from 'react';
import styles from './pickers-combo.module.css';
import createClassTransformer from '../style-utils';

IgrComboModule.register();
IgrDatePickerModule.register();
IgrSelectModule.register();

export default function PickersCombo() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [value, setValue] = useState<string | undefined>('2');
  const [value1, setValue1] = useState<string | undefined>('3');
  const { northwindEmployees } = useGetEmployees();
  const { northwindCustomers } = useGetCustomers();

  return (
    <>
      <div className={classes("row-layout pickers-combo-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <IgrSelect outlined="true" label="Employees" placeholder="Select a value" value={value} change={(_c, e) => setValue(e.detail.value)} className={classes("user-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              {northwindEmployees?.map((item) => (
                <IgrSelectItem value={item.employeeID?.toString()} key={item.employeeID?.toString()}>
                  <span key={uuid()}>{item.lastName}</span>
                </IgrSelectItem>
              ))}
            </IgrSelect>
            <IgrSelect outlined="false" label="Label/Placeholder" placeholder="pick a value" className={classes("user-input")}>
              <IgrSelectItem value="Option" key="255fa136-fa6b-4d66-9ad6-c98c84c2f389">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
            </IgrSelect>
            <IgrSelect outlined="true" label="Label/Placeholder" placeholder="pick a value" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input")}>
              <IgrSelectItem value="1" key="005265eb-2130-44ad-b03d-928abc31a575">
                <span key={uuid()}>Android</span>
              </IgrSelectItem>
              <IgrSelectItem value="2" key="29ef3193-cfbb-4a20-a17f-f74a83429a02">
                <span key={uuid()}>iOS</span>
              </IgrSelectItem>
              <IgrSelectItem value="3" key="e6e5bc3a-c615-4e5a-8b5b-90b0fa0f52b5">
                <span key={uuid()}>Web</span>
              </IgrSelectItem>
            </IgrSelect>
            <IgrSelect outlined="true" label="Options" placeholder="Select a value" className={classes("user-input")}>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>date_range</span>
                </span>
              </span>
              <IgrSelectItem value="Option" key="f031fee1-6451-4686-bf3d-0f41968367c3">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
              <IgrSelectItem value="Option" key="da2413ea-5d84-438d-9634-9da8e5e2e800">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
              <IgrSelectItem value="Option" key="320811f9-a7a6-43ad-86e9-944edc2b53f1">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
              <span slot="helper-text" key={uuid()}>Show help text here</span>
            </IgrSelect>
            <IgrSelect outlined="false" label="I have a label" disabled="true" className={classes("user-input")}>
              <span slot="helper-text" key={uuid()}>disabled</span>
            </IgrSelect>
          </div>
          <div className={classes("column-layout group_1")}>
            <IgrCombo outlined="true" data={northwindCustomers} label="Categories" placeholder="no label + placeholder + multi_select" valueVey="customerID" displayKey="customerID" autoFocusSearch="true" disableFiltering="true" className={classes("user-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="helper-text" key={uuid()}>sample hint text</span>
            </IgrCombo>
            <IgrCombo outlined="true" data={northwindCustomers} label="Description" placeholder="disabled combo" disabled="true" valueVey="customerID" displayKey="customerID" disableFiltering="true" className={classes("user-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>warning</span>
                </span>
              </span>
            </IgrCombo>
            <IgrCombo data={northwindEmployees} label="Names" placeholder="Box-style combo" valueKey="employeeID" displayKey="firstName" outlined="false" singleSelect="true" className={classes("user-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
            </IgrCombo>
            <IgrCombo data={northwindEmployees} placeholder="Box-style combo + disabled" disabled="true" valueVey="employeeID" displayKey="firstName" autoFocusSearch="true" outlined="false" disableFiltering="true" className={classes("user-input")}></IgrCombo>
            <div className={classes("group_2")}>
              <IgrDatePicker label="Date"></IgrDatePicker>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
