function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;
    for(let p of prices){
        if(p < minPrice){
            minPrice = p;
        }else{
            maxProfit = p - minPrice > maxProfit ? p - minPrice : maxProfit
        }
    }
    return maxProfit;
};