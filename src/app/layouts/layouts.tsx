import styles from './layouts.module.css';
import createClassTransformer from '../style-utils';


export default function Layouts() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout layouts-container")}>
        <div className={classes("row-layout group")}>
          <p className={classes("typography__subtitle-2 text")}>
            <span>Fixed width</span>
          </p>
        </div>
        <div className={classes("column-layout group_1")}>
          <div className={classes("row-layout group_2")}>
            <div className={classes("column-layout group_3")}>
              <div className={classes("row-layout group_4")}>
                <p className={classes("typography__subtitle-2 text_1")}>
                  <span>Row / Grow 1, Shrink 0</span>
                </p>
              </div>
              <div className={classes("row-layout group_5")}>
                <p className={classes("typography__subtitle-2 text_1")}>
                  <span>Row / Grow 0, Shrink 0</span>
                </p>
              </div>
              <div className={classes("row-layout group_6")}>
                <p className={classes("typography__subtitle-2 text_1")}>
                  <span>Row / Grow 1, Shrink 0</span>
                </p>
              </div>
            </div>
            <div className={classes("row-layout group_6")}>
              <p className={classes("typography__subtitle-2 text_1")}>
                <span>Grow 1, Shrink 0</span>
              </p>
            </div>
          </div>
          <div className={classes("row-layout group_7")}>
            <p className={classes("typography__subtitle-2 text_1")}>
              <span>Grow 1, Shrink 1</span>
            </p>
          </div>
        </div>
        <div className={classes("column-layout group_8")}>
          <p className={classes("typography__subtitle-2 text_2")}>
            <span>Grow 0, Shrink 0</span>
          </p>
          <div className={classes("row-layout group_9")}>
            <p className={classes("typography__subtitle-2 text")}>
              <span>Grow 0, Shrink 0</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
