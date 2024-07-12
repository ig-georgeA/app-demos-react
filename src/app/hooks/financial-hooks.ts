import { useCallback, useEffect, useState } from 'react';
import { BoxOfficeRevenueType } from '../models/Financial/box-office-revenue-type';
import { GlobalElectricityDemandType } from '../models/Financial/global-electricity-demand-type';
import { TradingType } from '../models/Financial/trading-type';
import { SalesType } from '../models/Financial/sales-type';
import { getBoxOfficeRevenue, getGlobalElectricityDemand, getSales, getTrading } from '../services/financial';

export const useGetBoxOfficeRevenue = () => {
	const [boxOfficeRevenue, setBoxOfficeRevenue] = useState<BoxOfficeRevenueType[]>([]);

	const requestBoxOfficeRevenue = useCallback(() => {
		let ignore = false;
		getBoxOfficeRevenue()
			.then((data) => {
				if (!ignore) {
					setBoxOfficeRevenue(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, []);

	useEffect(() => {
		requestBoxOfficeRevenue();
	}, [requestBoxOfficeRevenue]);

	return { requestFinancialBoxOfficeRevenue: requestBoxOfficeRevenue, financialBoxOfficeRevenue: boxOfficeRevenue, setFinancialBoxOfficeRevenue: setBoxOfficeRevenue};
}

export const useGetSales = () => {
	const [sales, setSales] = useState<SalesType[]>([]);

	const requestSales = useCallback(() => {
		let ignore = false;
		getSales()
			.then((data) => {
				if (!ignore) {
					setSales(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, []);

	useEffect(() => {
		requestSales();
	}, [requestSales]);

	return { requestFinancialSales: requestSales, financialSales: sales, setFinancialSales: setSales};
}

export const useGetGlobalElectricityDemand = () => {
	const [globalElectricityDemand, setGlobalElectricityDemand] = useState<GlobalElectricityDemandType[]>([]);

	const requestGlobalElectricityDemand = useCallback(() => {
		let ignore = false;
		getGlobalElectricityDemand()
			.then((data) => {
				if (!ignore) {
					setGlobalElectricityDemand(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, []);

	useEffect(() => {
		requestGlobalElectricityDemand();
	}, [requestGlobalElectricityDemand]);

	return { requestFinancialGlobalElectricityDemand: requestGlobalElectricityDemand, financialGlobalElectricityDemand: globalElectricityDemand, setFinancialGlobalElectricityDemand: setGlobalElectricityDemand};
}

export const useGetTrading = () => {
	const [trading, setTrading] = useState<TradingType[]>([]);

	const requestTrading = useCallback(() => {
		let ignore = false;
		getTrading()
			.then((data) => {
				if (!ignore) {
					setTrading(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, []);

	useEffect(() => {
		requestTrading();
	}, [requestTrading]);

	return { requestFinancialTrading: requestTrading, financialTrading: trading, setFinancialTrading: setTrading};
}
