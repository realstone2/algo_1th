/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if(prices[i - 1] < prices[i]) {
            profit = profit < prices[i] - minPrice ? prices[i] - minPrice : profit;
        } 
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
    return profit;
};