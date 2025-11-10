/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxPrice = 0;
    let minimum 

    for(let i = 0; i < prices.length; i ++){
        const current = prices[i];

        minimum = Math.min(current, minimum ?? current);
        maxPrice = Math.max(maxPrice, current - minimum);
    }

    return maxPrice
};