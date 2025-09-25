/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0

    let buyindex = null
    let sellindex = null

    for(let i = 0; i < prices.length; i ++){

        if(prices[i] <= prices[i + 1]){
            result = result +  prices[i + 1] - prices[i]
        }
    }

    return result
};