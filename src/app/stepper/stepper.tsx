import { IgrButton, IgrButtonModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrStep, IgrStepper, IgrStepperModule } from '@infragistics/igniteui-react';
import { IgrColumn, IgrGrid, IgrGridModule } from '@infragistics/igniteui-react-grids';
import { useGetEmployees } from '../hooks/northwind-hooks';
import { useRef } from 'react';
import '@infragistics/igniteui-react-grids/grids';
import styles from './stepper.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrGridModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrStepperModule.register();

export default function Stepper() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const stepper = useRef<IgrStepper>(null);
  const { northwindEmployees } = useGetEmployees();

  return (
    <>
      <div className={classes("column-layout stepper-container")}>
        <IgrStepper titlePosition="bottom" ref={stepper} className={classes("stepper")}>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("column-layout step-content")} key={uuid()}>
              <div className={classes("column-layout group")} key={uuid()}>
                <div className={classes("row-layout group")}>
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
                <IgrButton size="large" className={classes("button button_2")}>
                  <span key={uuid()}>Some action</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <IgrGrid data={northwindEmployees} primaryKey="employeeID" displayDensity="cosy" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                <IgrColumn field="lastName" dataType="string" header="lastName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="employeeID" dataType="number" header="employeeID" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="firstName" dataType="string" header="firstName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="title" dataType="string" header="title" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="titleOfCourtesy" dataType="string" header="titleOfCourtesy" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="birthDate" dataType="date" header="birthDate" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="hireDate" dataType="date" header="hireDate" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.street" dataType="string" header="address street" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.city" dataType="string" header="address city" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.region" dataType="string" header="address region" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.country" dataType="string" header="address country" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.phone" dataType="string" header="address phone" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="managerID" dataType="number" header="managerID" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="notes" dataType="string" header="notes" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="avatarUrl" dataType="string" header="avatarUrl" sortable="true" selectable="false"></IgrColumn>
              </IgrGrid>
            </div>
            <p slot="title" key={uuid()}>Address</p>
          </IgrStep>
          <IgrStep invalid="true" key={uuid()}>
            <div className={classes("row-layout step-content_1")} key={uuid()}>
              <p className={classes("typography__body-1 text")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
            </div>
            <p slot="title" key={uuid()}>Item</p>
          </IgrStep>
          <IgrStep optional="true" key={uuid()}>
            <div className={classes("row-layout step-content_1")} key={uuid()}>
              <p className={classes("typography__body-1 text")} key={uuid()}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!</span>
              </p>
            </div>
            <p slot="title" key={uuid()}>Wrap</p>
            <p slot="subtitle" key={uuid()}>(Optional)</p>
          </IgrStep>
        </IgrStepper>
        <div className={classes("row-layout group_1")}>
          <IgrButton variant="outlined" size="large" clicked={() => stepper?.current?.prev()} className={classes("button_1")}>
            <span className={classes("material-icons")} key={uuid()}>
              <span key={uuid()}>arrow_back</span>
            </span>
            <span key={uuid()}>Previous</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
          <IgrButton variant="outlined" size="large" clicked={() => stepper?.current?.next()} className={classes("button_1")}>
            <span key={uuid()}>Next</span>
            <span className={classes("material-icons")} key={uuid()}>
              <span key={uuid()}>arrow_forward</span>
            </span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
        </div>
      </div>
    </>
  );
}
