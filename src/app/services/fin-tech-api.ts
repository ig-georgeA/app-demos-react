import { Stock } from '../models/FinTechAPI/stock';
import { StockData } from '../models/FinTechAPI/stock-data';
import { FetchApi } from './fetch-api';

const API_ENDPOINT = 'https://fintechcloud.azurewebsites.net';

export async function getStock(symbol: string = 'PLCE'): Promise<Stock | undefined> {
	if (!symbol) {
		return Promise.resolve(undefined);
	}
	return await FetchApi.fetchApiResponse<Stock | undefined>(`${API_ENDPOINT}/stocks/${symbol}`, undefined);
}

export async function getStockList(): Promise<Stock[]> {
	return await FetchApi.fetchApiResponse<Stock[]>(`${API_ENDPOINT}/stocks`, []);
}

export async function getStockDataList(symbol: string = 'UNH'): Promise<StockData[]> {
	if (!symbol) {
		return Promise.resolve([]);
	}
	return await FetchApi.fetchApiResponse<StockData[]>(`${API_ENDPOINT}/stockprices/${symbol}`, []);
}
