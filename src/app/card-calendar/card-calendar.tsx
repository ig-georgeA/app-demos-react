import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCalendar, IgrCalendarModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { useState } from 'react';
import styles from './card-calendar.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCalendarModule.register();
IgrCardModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();

export default function CardCalendar() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [value, setValue] = useState<Date | undefined>(new Date('2022-01-13T00:00'));

  return (
    <>
      <div className={classes("column-layout card-calendar-container")}>
        <div className={classes("row-layout group")}>
          <IgrCard elevated="true" className={classes("card")}>
            <IgrCardHeader key={uuid()}>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>Rozes</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>Under the grave (2016)</span>
              </h5>
            </IgrCardHeader>
            <IgrCardMedia className={classes("media-content")} key={uuid()}>
              <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" className={classes("image")} key={uuid()} />
            </IgrCardMedia>
            <IgrCardActions className={classes("actions-content")} key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button-2")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>favorite</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button-2")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bookmark</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button-2")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>share</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="end" key={uuid()}>
                <IgrButton variant="flat" size="large" className={classes("button")}>
                  <span key={uuid()}>Play</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated="true" className={classes("card-1")}>
            <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
              <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" className={classes("image")} key={uuid()} />
            </IgrCardMedia>
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
                <IgrIconButton variant="flat" className={classes("icon-button-2")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>favorite</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="end" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button-2")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bookmark</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="end" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button-2")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>share</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated="true" className={classes("card-2")}>
            <div className={classes("group_1")} key={uuid()}>
              <IgrCardHeader>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Title goes here...</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Subtitle goes here...</span>
                </h5>
              </IgrCardHeader>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout column-layout-1")} key={uuid()}>
                  <p className={classes("typography__body-1 text-1")}></p>
                </div>
              </IgrCardContent>
            </div>
            <IgrCardMedia className={classes("media-content_2")} key={uuid()}>
              <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" className={classes("image")} key={uuid()} />
            </IgrCardMedia>
          </IgrCard>
          <IgrCard elevated="true" className={classes("card-11")}>
            <IgrCardHeader key={uuid()}>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>Rozes</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>Under the grave (2016)</span>
              </h5>
            </IgrCardHeader>
            <IgrCardActions className={classes("actions-content")} key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button-2")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>favorite</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button-2")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bookmark</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="end" key={uuid()}>
                <IgrButton variant="flat" size="large" className={classes("button")}>
                  <span key={uuid()}>Play</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <div style={{display: 'contents'}} slot="end" key={uuid()}>
                <IgrButton variant="flat" size="large" className={classes("button")}>
                  <span key={uuid()}>Button</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated="true" className={classes("card-3")}>
            <div className={classes("group_2")} key={uuid()}>
              <div className={classes("row-layout")}>
                <IgrCardHeader>
                  <div slot="thumbnail" key={uuid()}></div>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}>Rozes</span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}>Under the grave (2016)</span>
                  </h5>
                </IgrCardHeader>
              </div>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout column-layout-1")} key={uuid()}>
                  <p className={classes("typography__body-2 text-1")}>
                    <span>As I have always said: I write what’s real and what’s true, even if it means throwing myself under the bus....</span>
                  </p>
                </div>
              </IgrCardContent>
            </div>
            <span className={classes("divider")} key={uuid()}>Divider not yet available in React</span>
            <IgrCardActions className={classes("igx-card-actions--justify actions-content_1")} key={uuid()}>
              <div style={{display: 'contents'}} slot="end" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button-2")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>favorite</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="end" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button-2")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bookmark</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="end" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button-2")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>share</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated="true" className={classes("card")}>
            <IgrCardHeader key={uuid()}>
              <div slot="thumbnail" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>people</span>
                  </span>
                </IgrAvatar>
              </div>
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
                <IgrIconButton variant="flat" className={classes("icon-button-2")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>adb</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="end" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button-2")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bookmark</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="end" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button-2")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>share</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
            </IgrCardActions>
          </IgrCard>
        </div>
        <div className={classes("row-layout group_3")}>
          <IgrCalendar weekStart="tuesday" hideHeader="None" headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
          <IgrCalendar hideHeader="Horizontal" headerOrientation="horizontal" value={value} change={(_c, e) => setValue(e.detail)} className={classes("calendar")}></IgrCalendar>
          <IgrCalendar showWeekNumbers="true" visibleMonths="2" hideHeader="Horizontal" headerOrientation="horizontal" className={classes("calendar")}></IgrCalendar>
        </div>
      </div>
    </>
  );
}
