export interface TradingType {
	category: string;
	type: string;
	spread: number;
	openPrice: number;
	price: number;
	buy: number;
	sell: number;
	change: number;
	changeP: number;
	volume: number;
	settlement: string;
	openPriceDiff: number;
	buyDiff: number;
	sellDiff: number;
	startYDiff: number;
	highYDiff: number;
	lowYDiff: number;
	highDDiff: number;
	lowDDiff: number;
}
