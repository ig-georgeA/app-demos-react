import { IgrAvatar, IgrAvatarModule, IgrBadge, IgrBadgeModule, IgrButton, IgrButtonGroup, IgrButtonGroupModule, IgrButtonModule, IgrCheckbox, IgrCheckboxModule, IgrChip, IgrChipModule, IgrDateTimeInput, IgrDateTimeInputModule, IgrIconButton, IgrIconButtonModule, IgrInput, IgrInputModule, IgrRadio, IgrRadioGroup, IgrRadioGroupModule, IgrRadioModule, IgrRangeSlider, IgrRangeSliderModule, IgrRating, IgrRatingModule, IgrRipple, IgrRippleModule, IgrSlider, IgrSliderModule, IgrSwitch, IgrSwitchModule, IgrTextarea, IgrTextareaModule, IgrToggleButton, IgrToggleButtonModule } from '@infragistics/igniteui-react';
import { IgrDatePicker, IgrDatePickerModule } from '@infragistics/igniteui-react-inputs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './inputs.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrBadgeModule.register();
IgrButtonGroupModule.register();
IgrButtonModule.register();
IgrCheckboxModule.register();
IgrChipModule.register();
IgrDatePickerModule.register();
IgrDateTimeInputModule.register();
IgrIconButtonModule.register();
IgrInputModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();
IgrRangeSliderModule.register();
IgrRatingModule.register();
IgrRippleModule.register();
IgrSliderModule.register();
IgrSwitchModule.register();
IgrTextareaModule.register();
IgrToggleButtonModule.register();

export default function Inputs() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const date = new Date('2021-03-16T00:00');
  let _test: string | undefined;
  const [value, setValue] = useState<number | undefined>(50);
  const [value1, setValue1] = useState<string | undefined>('some content');
  const [checked, setChecked] = useState<boolean | undefined>(true);
  const [value2, setValue2] = useState<string | undefined>('1');

  return (
    <>
      <div className={classes("row-layout inputs-container")}>
        <div className={classes("column-layout column-layout_1")}>
          <IgrInput type="email" label="Email address" outlined="false" className={classes("input")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>mail</span>
              </span>
            </span>
            <span slot="suffix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>clear</span>
              </span>
            </span>
          </IgrInput>
          <IgrInput label="I'm disabled" disabled="true" outlined="false" className={classes("input")}></IgrInput>
          <IgrInput label="Label +prefix+box+help" outlined="false" className={classes("input")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>person</span>
              </span>
            </span>
            <span slot="helper-text" key={uuid()}>sample hint text</span>
          </IgrInput>
          <IgrInput label="Label" placeholder="Label/Placeholder" outlined="false" className={classes("input")}></IgrInput>
          <IgrDateTimeInput value={date} label="Date-box style-input format 1" outlined="false" className={classes("date-time-input")}></IgrDateTimeInput>
          <IgrDateTimeInput value={date} label="Date-box style - input format 2" outlined="false" className={classes("date-time-input")}></IgrDateTimeInput>
          <IgrTextarea placeholder="Type here" outlined="false" className={classes("textarea")}></IgrTextarea>
          <div className={classes("group")}>
            <IgrDatePicker label="Date"></IgrDatePicker>
          </div>
          <div className={classes("row-layout group_1")}>
            <IgrChip size="large" className={classes("chip")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>place</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
            <IgrChip size="large" className={classes("chip")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>place</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
            <IgrChip size="large" className={classes("chip_1")}>
              <span slot="prefix" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons icon_2")} key={uuid()}>
                    <span key={uuid()}>people</span>
                  </span>
                </IgrAvatar>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
            <IgrChip disabled="true" size="large" className={classes("chip_1")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>account_balance</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
          </div>
          <div className={classes("row-layout group_2")}>
            <IgrChip size="large" className={classes("chip_2")}>
              <span slot="prefix" key={uuid()}>
                <IgrAvatar initials="AB" shape="circle" className={classes("avatar_1")} key={uuid()}></IgrAvatar>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
          </div>
          <IgrSlider disabled="true" min="0" max="100" step="10" primaryTicks="3" secondaryTicks="2" hideSecondaryLabels="false" discreteTrack="true" value={value} change={(_c, e) => setValue(e.detail)} className={classes("slider")}></IgrSlider>
          <IgrSlider min="0" max="100" step="10" primaryTicks="3" secondaryTicks="2" hideSecondaryLabels="false" tickOrientation="mirror" discreteTrack="true" value={value} change={(_c, e) => setValue(e.detail)} className={classes("slider")}></IgrSlider>
          <IgrRangeSlider lower="20" upper="80" min="0" max="100" step="10" discreteTrack="true" className={classes("range-slider")}></IgrRangeSlider>
          <IgrRangeSlider lower="20" upper="80" min="0" max="100" step="10" primaryTicks="6" discreteTrack="true" className={classes("range-slider")}></IgrRangeSlider>
          <div className={classes("row-layout group_3")}>
            <IgrAvatar initials="GM" size="large" shape="circle" className={classes("avatar_2")}></IgrAvatar>
            <IgrAvatar src="/src/assets/Avatar2.png" size="medium" className={classes("avatar_3")}></IgrAvatar>
            <IgrAvatar shape="circle">
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>people</span>
              </span>
            </IgrAvatar>
          </div>
          <div className={classes("row-layout group_4")}>
            <span className={classes("material-icons icon_1")}>
              <span key={uuid()}>person</span>
            </span>
            <span className={classes("material-icons icon_3")}>
              <span key={uuid()}>person</span>
            </span>
            <span className={classes("material-icons icon_4")}>
              <span key={uuid()}>person</span>
            </span>
            <span className={classes("material-icons icon_5")}>
              <span key={uuid()}>person</span>
            </span>
            <IgrRating size="large" className={classes("user-input")}></IgrRating>
          </div>
        </div>
        <div className={classes("column-layout group_5")}>
          <IgrInput label="Label + prefix + suffix + border" outlined="true" className={classes("input")}>
            <span slot="prefix" key={uuid()}>
              <p className={classes("typography__body-2 text")} key={uuid()}>
                <span>https://</span>
              </p>
            </span>
            <span slot="suffix" key={uuid()}>
              <p className={classes("typography__body-2 text")} key={uuid()}>
                <span>.com</span>
              </p>
            </span>
          </IgrInput>
          <IgrInput label="Label + required" required="true" outlined="true" value={value1} change={(_c, e) => setValue1(e.detail)} className={classes("input")}></IgrInput>
          <IgrInput label="I'm disabled" disabled="true" outlined="true" className={classes("input")}></IgrInput>
          <IgrInput label="Label" required="true" outlined="true" className={classes("input")}></IgrInput>
          <IgrInput label="Prefix, helptext and border" outlined="true" className={classes("input")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>person</span>
              </span>
            </span>
            <span slot="helper-text" key={uuid()}>sample hint text</span>
          </IgrInput>
          <div className={classes("group")}>
            <IgrDatePicker label="Date"></IgrDatePicker>
          </div>
          <IgrDateTimeInput value={date} label="Date" outlined="true" className={classes("date-time-input")}></IgrDateTimeInput>
          <IgrDateTimeInput value={date} label="Date" outlined="true" className={classes("date-time-input")}></IgrDateTimeInput>
          <IgrTextarea placeholder="Type here" outlined="true" className={classes("textarea")}></IgrTextarea>
          <div className={classes("row-layout group_6")}>
            <IgrButton size="large" clicked={() => navigate(`/lists-data`)} className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>star</span>
              </span>
              <span key={uuid()}>Lists</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="outlined" size="large" className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" size="large" className={classes("button")}>
              <span key={uuid()}>Button</span>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="outlined" disabled="true" size="large" className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="fab" size="large" className={classes("user-input")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Fab</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <a href="https://www.youtube.com/playlist?list=PLZ4rRHIJepBuKeP2WqXZUtG8LAYmyHHsa" className={classes("typography__body-1 hyperlink")}>
              <span>YouTube playlist</span>
            </a>
            <div className={classes("row-layout group_7")}>
              <div className={classes("row-layout group_8")}>
                <IgrIconButton variant="flat">
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>email</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrBadge variant="success" className={classes("badge")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>check</span>
                  </span>
                </IgrBadge>
              </div>
              <div className={classes("row-layout group_8")}>
                <span className={classes("material-icons icon_3")}>
                  <span key={uuid()}>notifications</span>
                </span>
                <IgrBadge variant="danger" className={classes("badge_1")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>emergency</span>
                  </span>
                </IgrBadge>
              </div>
              <div className={classes("row-layout group_8")}>
                <span className={classes("material-icons icon_3")}>
                  <span key={uuid()}>mail</span>
                </span>
                <IgrBadge variant="warning" className={classes("badge_1")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>check</span>
                  </span>
                </IgrBadge>
              </div>
              <div className={classes("row-layout group_8")}>
                <span className={classes("material-icons icon_3")}>
                  <span key={uuid()}>mail</span>
                </span>
                <IgrBadge variant="success" className={classes("badge_1")}>
                  <span key={uuid()}>99</span>
                </IgrBadge>
              </div>
              <IgrBadge variant="success" className={classes("badge_2")}>
                <span key={uuid()}>Accepted</span>
              </IgrBadge>
              <IgrBadge variant="danger" className={classes("badge_2")}>
                <span key={uuid()}>Denied</span>
              </IgrBadge>
            </div>
          </div>
          <div className={classes("column-layout group_9")}>
            <div className={classes("row-layout group_10")}>
              <IgrButtonGroup className={classes("button-group")}>
                <IgrToggleButton key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_align_left</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
                <IgrToggleButton key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_align_center</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
                <IgrToggleButton key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_align_right</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
              </IgrButtonGroup>
              <IgrSwitch checked={checked} change={(_c, e) => setChecked(e.detail)} className={classes("user-input_1")}>
                <span key={uuid()}>Notify me</span>
              </IgrSwitch>
              <IgrSwitch checked={checked} change={(_c, e) => setChecked(e.detail)} className={classes("user-input_1")}></IgrSwitch>
            </div>
            <div className={classes("row-layout group_11")}>
              <IgrCheckbox checked={checked} change={(_c, e) => setChecked(e.detail)} className={classes("checkbox")}></IgrCheckbox>
              <IgrCheckbox labelPosition="after" checked={checked} change={(_c, e) => setChecked(e.detail)} className={classes("checkbox")}>
                <span key={uuid()}>Does it work?</span>
              </IgrCheckbox>
              <IgrCheckbox labelPosition="before" checked={checked} change={(_c, e) => setChecked(e.detail)} className={classes("user-input")}>
                <span key={uuid()}>How about now?</span>
              </IgrCheckbox>
            </div>
          </div>
          <div className={classes("row-layout group_12")}>
            <IgrRadioGroup value={value2} Change={(_c, e) => setValue2(e.target.value)} className={classes("radio-group")}>
              <IgrRadio value="1" key="2443dd19-22a3-4062-ba5b-df187bf21f59" className={classes("radio")}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
              <IgrRadio value="2" key="6e4eb397-408d-42f7-a265-21d30681042a" className={classes("radio")}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
              <IgrRadio value="3" key="2b6dc04f-5180-4a0c-bd51-9994e7c8516c" className={classes("radio")}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
            </IgrRadioGroup>
            <IgrRadioGroup alignment="horizontal" value={value2} Change={(_c, e) => setValue2(e.target.value)} className={classes("user-input_1")}>
              <IgrRadio value="1" key="617b6b39-8ffa-4013-8a0b-2f5dd609398c" className={classes("radio")}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
              <IgrRadio value="2" key="9af05a91-14ac-4c73-8fb8-25d5a4871bd6" className={classes("radio")}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
              <IgrRadio value="3" key="9b374f66-3f25-4777-ac72-e9df664ea786" className={classes("radio")}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
            </IgrRadioGroup>
          </div>
          <div className={classes("row-layout group_13")}>
            <IgrInput label="Group name" required="true" outlined="true" value={value1} change={(_c, e) => setValue1(e.detail)} className={classes("input_1")}></IgrInput>
            <IgrButton variant="outlined" size="large" className={classes("button_1")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>check</span>
              </span>
              <span key={uuid()}>Submit</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </div>
      </div>
    </>
  );
}
