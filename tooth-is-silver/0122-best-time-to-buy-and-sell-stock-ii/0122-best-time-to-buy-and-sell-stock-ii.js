/**
 * @param {number[]} prices
 * @return {number}
 그리디 접근법 이해
 특정 구간 [p0, p1, p2, ..., pk] 일경우에
 pk - p0이 최대 이익을 낸다고 가정하면
 pk - p0 = (p1 - p0) + (p2 - p1) + ... + (pk - p(k-1))
 위의 식이 성립하여 하루치로 계산한 값과 동일하다
 
 전체를 보는것이 아닌
 오늘의 값과 내일의 값을 비교하여 구매할지 팔지 아무것도 안할지가 중요함
 */
var maxProfit = function(prices) {
    let result = 0; // return할 이익
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i+1]) { // 다음날이 더 비싸? 그럼 사서 팔아!
            const profit = prices[i+1] - prices[i]
            result += profit;
        }
    }
    return result
};