function maxProfit(prices: number[]): number {
    let buyStockPrice = prices[0];

    let profit = 0;

    for(let i = 1; i < prices.length ; i++){
        let curStockPrice = prices[i];
        if(curStockPrice < buyStockPrice){
            buyStockPrice = curStockPrice;
        }else if(curStockPrice > buyStockPrice){
            profit += curStockPrice - buyStockPrice;
            buyStockPrice = curStockPrice;
        }

    }
   return profit;
};