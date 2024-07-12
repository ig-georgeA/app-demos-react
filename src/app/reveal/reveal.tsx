import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';
import { RevealView } from '@revealbi/ui-react';
import styles from './reveal.module.css';
import createClassTransformer from '../style-utils';

RevealSdkSettings.serverUrl = 'https://samples.revealbi.io/upmedia-backend/reveal-api/';

export default function Reveal() {
  const classes = createClassTransformer(styles);
  const dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };

  return (
    <>
      <div className={classes("row-layout reveal-container")}>
        <div className={classes("group")}>
          <RevealView dashboard="Sales" options={dashboardOptions}></RevealView>
        </div>
      </div>
    </>
  );
}
