/**
 * @param {number[]} prices
 * @return {number}
 */

/** 
동시에 주식을 사고 팔 수는 없다.
매수 전에는 매도해서 보유한 주식이 없어야 한다.
 */ 

var maxProfit = function(prices) {
    let profit = 0; // 이익 

    // 다음 날 부터 시작해서 전 날과 비교
    for (let i = 1; i < prices.length; i++) {
        // 현재 날짜의 가격이 이전 날짜의 가격보다 높다면 이익을 더한다.
        if (prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1];
        }
    }
    return profit;
};