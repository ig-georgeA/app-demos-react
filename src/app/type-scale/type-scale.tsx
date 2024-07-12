import styles from './type-scale.module.css';
import createClassTransformer from '../style-utils';


export default function TypeScale() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout type-scale-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("row-layout group_1")}>
            <div className={classes("column-layout group_2")}>
              <div className={classes("column-layout group_3")}>
                <h1 className={classes("content")}>
                  <span>Heading 1</span>
                </h1>
                <h2 className={classes("content")}>
                  <span>Heading 2</span>
                </h2>
                <h3 className={classes("content")}>
                  <span>Heading 3</span>
                </h3>
                <h4 className={classes("content")}>
                  <span>Heading 4</span>
                </h4>
                <h5 className={classes("content")}>
                  <span>Heading 5</span>
                </h5>
                <h6 className={classes("content")}>
                  <span>Heading 6</span>
                </h6>
                <p className={classes("typography__subtitle-1 content")}>
                  <span>Subtitle 1</span>
                </p>
                <p className={classes("typography__subtitle-2 content")}>
                  <span>Subtitle 2</span>
                </p>
              </div>
              <div className={classes("column-layout group")}>
                <p className={classes("typography__body-1 content")}>
                  <span>Body 1</span>
                </p>
                <p className={classes("typography__body-2 content")}>
                  <span>Body 2</span>
                </p>
                <p className={classes("typography__caption content")}>
                  <span>Caption</span>
                </p>
                <p className={classes("typography__overline content")}>
                  <span>Overline</span>
                </p>
              </div>
            </div>
            <div className={classes("column-layout group_2")}>
              <div className={classes("column-layout group_3")}>
                <h1 className={classes("content_1")}>
                  <span>Heading 1</span>
                </h1>
                <h2 className={classes("content_1")}>
                  <span>Heading 2</span>
                </h2>
                <h3 className={classes("content_1")}>
                  <span>Heading 3</span>
                </h3>
                <h4 className={classes("content_1")}>
                  <span>Heading 4</span>
                </h4>
                <h5 className={classes("content_1")}>
                  <span>Heading 5</span>
                </h5>
                <h6 className={classes("content_1")}>
                  <span>Heading 6</span>
                </h6>
                <p className={classes("typography__subtitle-1 content_1")}>
                  <span>Subtitle 1</span>
                </p>
                <p className={classes("typography__subtitle-2 content_1")}>
                  <span>Subtitle 2</span>
                </p>
              </div>
              <div className={classes("column-layout group")}>
                <p className={classes("typography__body-1 text")}>
                  <span>Body 1</span>
                </p>
                <p className={classes("typography__body-2 text")}>
                  <span>Body 2</span>
                </p>
                <p className={classes("typography__caption text")}>
                  <span>Caption</span>
                </p>
                <p className={classes("typography__overline text")}>
                  <span>Overline</span>
                </p>
              </div>
            </div>
            <div className={classes("column-layout group_2")}>
              <div className={classes("column-layout group_3")}>
                <h1 className={classes("content_2")}>
                  <span>Heading 1</span>
                </h1>
                <h2 className={classes("content_2")}>
                  <span>Heading 2</span>
                </h2>
                <h3 className={classes("content_2")}>
                  <span>Heading 3</span>
                </h3>
                <h4 className={classes("content_2")}>
                  <span>Heading 4</span>
                </h4>
                <h5 className={classes("content_2")}>
                  <span>Heading 5</span>
                </h5>
                <h6 className={classes("content_2")}>
                  <span>Heading 6</span>
                </h6>
                <p className={classes("typography__subtitle-1 content_2")}>
                  <span>Subtitle 1</span>
                </p>
                <p className={classes("typography__subtitle-2 content_2")}>
                  <span>Subtitle 2</span>
                </p>
              </div>
              <div className={classes("column-layout group")}>
                <p className={classes("typography__body-1 text_1")}>
                  <span>Body 1</span>
                </p>
                <p className={classes("typography__body-2 text_1")}>
                  <span>Body 2</span>
                </p>
                <p className={classes("typography__caption text_1")}>
                  <span>Caption</span>
                </p>
                <p className={classes("typography__overline text_1")}>
                  <span>Overline</span>
                </p>
              </div>
            </div>
          </div>
          <div className={classes("row-layout group_1")}>
            <div className={classes("column-layout group_4")}>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>Primary</span>
              </p>
              <div className={classes("row-layout group_5")}>
                <div className={classes("row-layout group_6")}></div>
                <div className={classes("row-layout group_7")}></div>
                <div className={classes("row-layout group_8")}></div>
                <div className={classes("row-layout group_9")}></div>
                <div className={classes("row-layout group_10")}></div>
                <div className={classes("row-layout group_11")}></div>
                <div className={classes("row-layout group_12")}></div>
                <div className={classes("row-layout group_13")}></div>
                <div className={classes("row-layout group_14")}></div>
              </div>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>Secondary</span>
              </p>
              <div className={classes("row-layout group_5")}>
                <div className={classes("row-layout group_15")}></div>
                <div className={classes("row-layout group_16")}></div>
                <div className={classes("row-layout group_17")}></div>
                <div className={classes("row-layout group_18")}></div>
                <div className={classes("row-layout group_19")}></div>
                <div className={classes("row-layout group_20")}></div>
                <div className={classes("row-layout group_21")}></div>
                <div className={classes("row-layout group_21")}></div>
                <div className={classes("row-layout group_22")}></div>
              </div>
            </div>
            <div className={classes("column-layout group_4")}>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>Grays</span>
              </p>
              <div className={classes("row-layout group_5")}>
                <div className={classes("row-layout group_23")}></div>
                <div className={classes("row-layout group_24")}></div>
                <div className={classes("row-layout group_25")}></div>
                <div className={classes("row-layout group_26")}></div>
                <div className={classes("row-layout group_27")}></div>
                <div className={classes("row-layout group_28")}></div>
                <div className={classes("row-layout group_29")}></div>
                <div className={classes("row-layout group_30")}></div>
                <div className={classes("row-layout group_31")}></div>
              </div>
              <p className={classes("typography__subtitle-2 text_2")}>
                <span>Special colors</span>
              </p>
              <div className={classes("row-layout group_5")}>
                <div className={classes("row-layout group_32")}></div>
                <div className={classes("row-layout group_33")}></div>
                <div className={classes("row-layout group_34")}></div>
                <div className={classes("row-layout group_35")}></div>
                <div className={classes("row-layout group_36")}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
