/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if(prices[i - 1] < prices[i]) {
            maxProfit = maxProfit < prices[i] - minPrice ? prices[i] - minPrice : maxProfit;
            console.log(maxProfit)
        } 
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
    return maxProfit;
};