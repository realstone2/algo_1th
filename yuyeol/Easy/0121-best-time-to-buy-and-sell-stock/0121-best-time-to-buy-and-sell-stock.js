/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        //
        if(prices[i - 1] < prices[i] && profit < prices[i] - minPrice) {
            profit = prices[i] - minPrice;
        } 
        // 최솟값을 수집
        if(prices[i] < minPrice) minPrice = prices[i];
        
    }
    return profit;
};