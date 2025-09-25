/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    let prev = prices[0];

    for(const price of prices) {
        if(price > prev) {
            result += (price - prev);
        }
        prev = price;
    }
    return result;
};