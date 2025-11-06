/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let min = Infinity;
    let max = 0;

    for (let i = 0; i < prices.length; i++) {
        let profit = prices[i] - min;

        max = Math.max(max, profit);

        min = Math.min(min, prices[i]);
    }

    return max;
};