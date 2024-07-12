import { IgrAccordion, IgrAccordionModule, IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCard, IgrCardActions, IgrCardHeader, IgrCardModule, IgrCheckbox, IgrCheckboxModule, IgrExpansionPanel, IgrExpansionPanelModule, IgrInput, IgrInputModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule, IgrTree, IgrTreeItem, IgrTreeModule } from '@infragistics/igniteui-react';
import { useGetNestedData } from '../hooks/nested-data-repeat-hooks';
import styles from './expansion-panels-tree.module.css';
import createClassTransformer from '../style-utils';

IgrAccordionModule.register();
IgrAvatarModule.register();
IgrButtonModule.register();
IgrCardModule.register();
IgrCheckboxModule.register();
IgrExpansionPanelModule.register();
IgrInputModule.register();
IgrListModule.register();
IgrRippleModule.register();
IgrTreeModule.register();

export default function ExpansionPanelsTree() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { nestedDataRepeatNestedData } = useGetNestedData();

  return (
    <>
      <div className={classes("row-layout expansion-panels-tree-container")}>
        <div className={classes("column-layout group")}>
          <IgrCard className={classes("card")}>
            <IgrCardHeader key={uuid()}>
              <div slot="thumbnail" key={uuid()}>
                <IgrAvatar src="/src/assets/Avatar9.png" size="medium" shape="circle" className={classes("avatar")} key={uuid()}></IgrAvatar>
              </div>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>FirstName LastName</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>myemail@email.com</span>
              </h5>
            </IgrCardHeader>
            <IgrCardActions className={classes("actions-content")} key={uuid()}>
              <div style={{display: 'contents'}} slot="end" key={uuid()}>
                <IgrButton variant="flat" size="large" className={classes("button")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>exit_to_app</span>
                  </span>
                  <span key={uuid()}>Sign out</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrExpansionPanel open="true" className={classes("expansion-panel")}>
            <IgrList className={classes("list")} key={uuid()}>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>person</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>User profile</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>assessment</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Analytics</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>book</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Favorites</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>people</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Shared with others</div>
              </IgrListItem>
            </IgrList>
            <span slot="title" key={uuid()}>Account</span>
          </IgrExpansionPanel>
          <IgrExpansionPanel className={classes("expansion-panel")}>
            <IgrList className={classes("list")} key={uuid()}>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>palette</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Theme</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>vpn_key</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Change password</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>call_split</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Mail rules</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>forum</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Chat preferences</div>
              </IgrListItem>
            </IgrList>
            <span slot="title" key={uuid()}>Preferences</span>
          </IgrExpansionPanel>
          <IgrExpansionPanel className={classes("expansion-panel")}>
            <IgrList className={classes("list")} key={uuid()}>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>folder</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Title goes here</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>folder</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Title goes here</div>
              </IgrListItem>
              <IgrListItem key={uuid()}>
                <div style={{display: 'contents'}} slot="start" key={uuid()}>
                  <IgrAvatar shape="circle" className={classes("avatar")}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>folder</span>
                    </span>
                  </IgrAvatar>
                </div>
                <div slot="title" key={uuid()}>Title goes here</div>
              </IgrListItem>
            </IgrList>
            <span slot="title" key={uuid()}>Panel 3</span>
          </IgrExpansionPanel>
          <IgrTree selection="none" className={classes("tree")}>
            <IgrTreeItem label="Design" key={uuid()}>
              <IgrTreeItem label="Figma" key={uuid()}></IgrTreeItem>
              <IgrTreeItem label="Adobe XD" key={uuid()}></IgrTreeItem>
              <IgrTreeItem label="Sketch" key={uuid()}></IgrTreeItem>
            </IgrTreeItem>
            <IgrTreeItem label="Development" key={uuid()}>
              <IgrTreeItem label="Angular" key={uuid()}></IgrTreeItem>
              <IgrTreeItem label="Blazor" key={uuid()}></IgrTreeItem>
              <IgrTreeItem label="Web components" key={uuid()}></IgrTreeItem>
            </IgrTreeItem>
          </IgrTree>
        </div>
        <div className={classes("row-layout row-layout-1")}>
          <div className={classes("column-layout column-layout-1")}>
            <h5 className={classes("title-1")}>
              <span>Sign in</span>
            </h5>
            <IgrInput label="Username" outlined="false" className={classes("user-input")}></IgrInput>
            <IgrInput type="password" label="Password" outlined="false" className={classes("user-input_1")}></IgrInput>
            <div className={classes("row-layout row-layout-2")}>
              <IgrCheckbox labelPosition="after" className={classes("checkbox-1")}>
                <span key={uuid()}>Remember me</span>
              </IgrCheckbox>
              <a href="" className={classes("typography__body-1 hyperlink")}>
                <span>Forgot password?</span>
              </a>
            </div>
            <IgrButton size="large" className={classes("user-input")}>
              <span key={uuid()}>Sign in</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="outlined" size="large" className={classes("user-input_1")}>
              <span key={uuid()}>Create a new account</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <p className={classes("typography__caption text-2")}>
              <span>By signing in, you are agreeing to our terms of use and privacy policy</span>
            </p>
          </div>
        </div>
        <div className={classes("column-layout group_1")}>
          <div className={classes("column-layout group_2")}>
            <IgrTree selection="none" className={classes("tree_1")}>
              {nestedDataRepeatNestedData?.components?.map((item) => (
                <IgrTreeItem label={item.name} key={uuid()}>
                  {item.propertiesPanel?.map((item1) => (
                    <IgrTreeItem label={item1.name} key={uuid()}>
                      {item1.content?.map((item2) => (
                        <IgrTreeItem label={item2.name} key={uuid()}></IgrTreeItem>
                      ))}
                    </IgrTreeItem>
                  ))}
                </IgrTreeItem>
              ))}
            </IgrTree>
          </div>
          <IgrAccordion singleExpand="true" className={classes("accordion")}>
            <IgrExpansionPanel key={uuid()}>
              <img src="/src/assets/SketchParser.png" className={classes("image")} key={uuid()} />
              <span slot="title" key={uuid()}>Accordion 1</span>
            </IgrExpansionPanel>
            <IgrExpansionPanel key={uuid()}>
              <img src="/src/assets/Image.svg" className={classes("image")} key={uuid()} />
              <span slot="title" key={uuid()}>Accordion 2</span>
            </IgrExpansionPanel>
            <IgrExpansionPanel key={uuid()}>
              <img src="/src/assets/BrandGuidelines.png" className={classes("image")} key={uuid()} />
              <span slot="title" key={uuid()}>Accordion 3</span>
            </IgrExpansionPanel>
          </IgrAccordion>
        </div>
      </div>
    </>
  );
}
