/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0

    for(let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i]
        const prevPrice = prices[i - 1]

        if(currentPrice > prevPrice) {
            profit += (currentPrice - prevPrice)
        }
    }
    return profit
};