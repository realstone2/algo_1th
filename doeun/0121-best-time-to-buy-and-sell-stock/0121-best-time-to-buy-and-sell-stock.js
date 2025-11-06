/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let min = prices[0];
    let benefit = 0;

    for (let price of prices) {
        if (price < min) min = price;
        if (price > min) benefit = Math.max(benefit, price - min);
    }
    return benefit;
};
