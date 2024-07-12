import styles from './position.module.css';
import createClassTransformer from '../style-utils';


export default function Position() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout position-container")}>
        <div className={classes("row-layout group")}>
          <h5 className={classes("h5")}>
            <span>Relative</span>
          </h5>
        </div>
        <div className={classes("row-layout group")}>
          <h5 className={classes("h5")}>
            <span>Relative</span>
          </h5>
        </div>
        <div className={classes("row-layout group")}>
          <h5 className={classes("h5")}>
            <span>Relative</span>
          </h5>
        </div>
        <div className={classes("row-layout group")}>
          <h5 className={classes("h5")}>
            <span>Relative</span>
          </h5>
        </div>
        <div className={classes("row-layout group")}>
          <h5 className={classes("h5")}>
            <span>Relative</span>
          </h5>
        </div>
        <div className={classes("row-layout group")}>
          <h5 className={classes("h5")}>
            <span>Relative</span>
          </h5>
        </div>
        <div className={classes("row-layout group")}>
          <h5 className={classes("h5")}>
            <span>Relative</span>
          </h5>
        </div>
        <div className={classes("row-layout group_1")}>
          <h5 className={classes("h5")}>
            <span>Relative top 50px</span>
          </h5>
        </div>
        <div className={classes("row-layout group_2")}>
          <h5 className={classes("h5_1")}>
            <span>Relative bottom 50px</span>
          </h5>
        </div>
        <div className={classes("row-layout group")}>
          <h5 className={classes("h5")}>
            <span>Relative</span>
          </h5>
        </div>
        <div className={classes("row-layout group_3")}>
          <h5 className={classes("h5")}>
            <span>Relative right 50px</span>
          </h5>
        </div>
        <div className={classes("row-layout group")}>
          <h5 className={classes("h5")}>
            <span>Relative</span>
          </h5>
        </div>
        <div className={classes("row-layout group")}>
          <h5 className={classes("h5")}>
            <span>Relative</span>
          </h5>
        </div>
        <div className={classes("row-layout group")}>
          <h5 className={classes("h5")}>
            <span>Relative</span>
          </h5>
        </div>
        <div className={classes("row-layout group")}>
          <h5 className={classes("h5")}>
            <span>Relative</span>
          </h5>
        </div>
        <div className={classes("row-layout group_4")}>
          <h5 className={classes("h5")}>
            <span>Absolute</span>
          </h5>
        </div>
        <div className={classes("row-layout group_5")}>
          <h5 className={classes("h5_2")}>
            <span>Fixed</span>
          </h5>
        </div>
      </div>
    </>
  );
}
