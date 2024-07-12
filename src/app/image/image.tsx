import { IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import styles from './image.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrCardModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();

export default function Image() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout image-container")}>
        <div className={classes("row-layout group")}>
          <h1 className={classes("h1")}>
            <span>Building faster paths to amazing experiences</span>
          </h1>
          <img src="https://static.infragistics.com/marketing/IDS/infragistics/hero.png?v=20191212192700" className={classes("image")} />
        </div>
        <div className={classes("column-layout group_1")}>
          <img src="https://static.infragistics.com/marketing/IDS/infragistics/hero.png?v=20191212192700" className={classes("image_1")} />
          <img src="/src/assets/Avatar1.png" className={classes("image_2")} />
          <IgrCard className={classes("card")}>
            <IgrCardHeader key={uuid()}>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>Title goes here...</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>Subtitle goes here...</span>
              </h5>
            </IgrCardHeader>
            <IgrCardContent className={classes("body-content")} key={uuid()}>
              <img src="https://static.infragistics.com/marketing/Website/General/Infragistics-horizontal.svg" className={classes("image_3")} key={uuid()} />
            </IgrCardContent>
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
          <img className={classes("image_4")} />
        </div>
      </div>
    </>
  );
}
