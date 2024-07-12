import { IgrAvatar, IgrAvatarModule, IgrList, IgrListItem, IgrListModule } from '@infragistics/igniteui-react';
import { IgrFinancialChart, IgrFinancialChartModule } from '@infragistics/igniteui-react-charts';
import { useGetStock, useGetStockDataList, useGetStockList } from '../hooks/fin-tech-api-hooks';
import styles from './financial-chart.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrFinancialChartModule.register();
IgrListModule.register();

export default function FinancialChart() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { finTechAPIStock: selectedStock, setFinTechAPIStock: setSelectedStock } = useGetStock('UNH');
  const { finTechAPIStock } = useGetStockList();
  const { finTechAPIStockData } = useGetStockDataList(selectedStock?.stock_symbol as any);

  return (
    <>
      <div className={classes("row-layout financial-chart-container")}>
        <div className={classes("column-layout group")}>
          <IgrList className={classes("list")}>
            {finTechAPIStock?.map((item) => (
              <div style={{display: 'contents'}} onClick={() => setSelectedStock(item)} key={uuid()}>
                <IgrListItem>
                  <div style={{display: 'contents'}} slot="start" key={uuid()}>
                    <IgrAvatar src={item.img_url} shape="rounded" className={classes("avatar")}></IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>{item.stock_symbol}</div>
                  <div slot="subtitle" key={uuid()}>{item.stock_name}</div>
                </IgrListItem>
              </div>
            ))}
          </IgrList>
        </div>
        <div className={classes("column-layout group_1")}>
          <div className={classes("column-layout group_2")}>
            <div className={classes("row-layout group_3")}>
              <img src={selectedStock?.img_url} className={classes("image")} />
              <div className={classes("column-layout group_4")}>
                <h5 className={classes("content")}>
                  <span>{selectedStock?.stock_symbol}</span>
                </h5>
                <h6 className={classes("content")}>
                  <span>{selectedStock?.stock_name}</span>
                </h6>
              </div>
            </div>
            <div className={classes("row-layout group_5")}>
              <div className={classes("column-layout group_6")}>
                <p className={classes("typography__overline text")}>
                  <span>Prev Close</span>
                </p>
                <p className={classes("typography__body-1 content")}>
                  <span>{selectedStock?.previous_close}</span>
                </p>
              </div>
              <div className={classes("column-layout group_6")}>
                <p className={classes("typography__overline text")}>
                  <span>PE Ratio</span>
                </p>
                <p className={classes("typography__body-1 content")}>
                  <span>{selectedStock?.pe_ratio}</span>
                </p>
              </div>
              <div className={classes("column-layout group_6")}>
                <p className={classes("typography__overline text")}>
                  <span>Earnings Date</span>
                </p>
                <p className={classes("typography__body-1 content")}>
                  <span>{selectedStock?.earnings_date}</span>
                </p>
              </div>
            </div>
          </div>
          <div className={classes("group_7")}>
            <IgrFinancialChart dataSource={finTechAPIStockData}></IgrFinancialChart>
          </div>
        </div>
      </div>
    </>
  );
}
