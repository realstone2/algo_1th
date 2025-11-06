/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // maxPrcie : 제일 비싼값
    // 반복문을 돌면서 비교하자
    // 반복문 안에는 profit 계산이 들어가야 한다
    // profit 계산 : 제일 값이 적은 날, 제일 값이 많은 날 

    let minPrice = Infinity
    let maxProfit = 0
    
    for (let i = 0 ; i < prices.length ; i++){
        minPrice = Math.min(minPrice, prices[i])
        maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    }

    return maxProfit

};